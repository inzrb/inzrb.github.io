(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9686],{9866:function(e,t,i){"use strict";i.d(t,{b:function(){return a}});var n=i(959),r=i(5542),s=i(3589),o=i(4771);let a=n.forwardRef(({children:e,enabled:t=!0,speed:i=1,rotationIntensity:a=1,floatIntensity:l=1,floatingRange:c=[-.1,.1],...h},u)=>{let p=n.useRef(null),d=n.useRef(1e4*Math.random());return(0,r.A)(e=>{var n,r;if(!t||0===i)return;let s=d.current+e.clock.getElapsedTime();p.current.rotation.x=Math.cos(s/4*i)/8*a,p.current.rotation.y=Math.sin(s/4*i)/8*a,p.current.rotation.z=Math.sin(s/4*i)/20*a;let h=Math.sin(s/4*i)/10;h=o.MathUtils.mapLinear(h,-.1,.1,null!==(n=null==c?void 0:c[0])&&void 0!==n?n:-.1,null!==(r=null==c?void 0:c[1])&&void 0!==r?r:.1),p.current.position.y=h*l,p.current.updateMatrix()}),n.createElement("group",h,n.createElement("group",{ref:(0,s.Z)([p,u]),matrixAutoUpdate:!1},e))})},6786:function(e,t,i){"use strict";i.d(t,{z:function(){return o}});var n=i(8126),r=i(4771),s=i(959);let o=s.forwardRef(({id:e=1,colorWrite:t=!1,depthWrite:i=!1,...o},a)=>{let l=s.useRef(null),c=s.useMemo(()=>({colorWrite:t,depthWrite:i,stencilWrite:!0,stencilRef:e,stencilFunc:r.AlwaysStencilFunc,stencilFail:r.ReplaceStencilOp,stencilZFail:r.ReplaceStencilOp,stencilZPass:r.ReplaceStencilOp}),[e,t,i]);return s.useLayoutEffect(()=>{Object.assign(l.current.material,c)}),s.useImperativeHandle(a,()=>l.current,[]),s.createElement("mesh",(0,n.Z)({ref:l,renderOrder:-e},o))})},3276:function(e,t,i){"use strict";i.d(t,{z:function(){return h}});var n=i(8126),r=i(4771),s=i(959),o=i(5542),a=i(1223),l=i(9842);class c extends r.MeshPhysicalMaterial{constructor(e=6,t=!1){super(),this.uniforms={chromaticAberration:{value:.05},transmission:{value:0},_transmission:{value:1},transmissionMap:{value:null},roughness:{value:0},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:1/0},attenuationColor:{value:new r.Color("white")},anisotropicBlur:{value:.1},time:{value:0},distortion:{value:0},distortionScale:{value:.5},temporalDistortion:{value:0},buffer:{value:null}},this.onBeforeCompile=i=>{i.uniforms={...i.uniforms,...this.uniforms},this.anisotropy>0&&(i.defines.USE_ANISOTROPY=""),t?i.defines.USE_SAMPLER="":i.defines.USE_TRANSMISSION="",i.fragmentShader=`
      uniform float chromaticAberration;         
      uniform float anisotropicBlur;      
      uniform float time;
      uniform float distortion;
      uniform float distortionScale;
      uniform float temporalDistortion;
      uniform sampler2D buffer;

      vec3 random3(vec3 c) {
        float j = 4096.0*sin(dot(c,vec3(17.0, 59.4, 15.0)));
        vec3 r;
        r.z = fract(512.0*j);
        j *= .125;
        r.x = fract(512.0*j);
        j *= .125;
        r.y = fract(512.0*j);
        return r-0.5;
      }

      float seed = 0.0;
      uint hash( uint x ) {
        x += ( x << 10u );
        x ^= ( x >>  6u );
        x += ( x <<  3u );
        x ^= ( x >> 11u );
        x += ( x << 15u );
        return x;
      }

      // Compound versions of the hashing algorithm I whipped together.
      uint hash( uvec2 v ) { return hash( v.x ^ hash(v.y)                         ); }
      uint hash( uvec3 v ) { return hash( v.x ^ hash(v.y) ^ hash(v.z)             ); }
      uint hash( uvec4 v ) { return hash( v.x ^ hash(v.y) ^ hash(v.z) ^ hash(v.w) ); }

      // Construct a float with half-open range [0:1] using low 23 bits.
      // All zeroes yields 0.0, all ones yields the next smallest representable value below 1.0.
      float floatConstruct( uint m ) {
        const uint ieeeMantissa = 0x007FFFFFu; // binary32 mantissa bitmask
        const uint ieeeOne      = 0x3F800000u; // 1.0 in IEEE binary32
        m &= ieeeMantissa;                     // Keep only mantissa bits (fractional part)
        m |= ieeeOne;                          // Add fractional part to 1.0
        float  f = uintBitsToFloat( m );       // Range [1:2]
        return f - 1.0;                        // Range [0:1]
      }

      // Pseudo-random value in half-open range [0:1].
      float random( float x ) { return floatConstruct(hash(floatBitsToUint(x))); }
      float random( vec2  v ) { return floatConstruct(hash(floatBitsToUint(v))); }
      float random( vec3  v ) { return floatConstruct(hash(floatBitsToUint(v))); }
      float random( vec4  v ) { return floatConstruct(hash(floatBitsToUint(v))); }

      float rand() {
        float result = random(vec3(gl_FragCoord.xy, seed));
        seed += 1.0;
        return result;
      }

      const float F3 =  0.3333333;
      const float G3 =  0.1666667;

      float snoise(vec3 p) {
        vec3 s = floor(p + dot(p, vec3(F3)));
        vec3 x = p - s + dot(s, vec3(G3));
        vec3 e = step(vec3(0.0), x - x.yzx);
        vec3 i1 = e*(1.0 - e.zxy);
        vec3 i2 = 1.0 - e.zxy*(1.0 - e);
        vec3 x1 = x - i1 + G3;
        vec3 x2 = x - i2 + 2.0*G3;
        vec3 x3 = x - 1.0 + 3.0*G3;
        vec4 w, d;
        w.x = dot(x, x);
        w.y = dot(x1, x1);
        w.z = dot(x2, x2);
        w.w = dot(x3, x3);
        w = max(0.6 - w, 0.0);
        d.x = dot(random3(s), x);
        d.y = dot(random3(s + i1), x1);
        d.z = dot(random3(s + i2), x2);
        d.w = dot(random3(s + 1.0), x3);
        w *= w;
        w *= w;
        d *= w;
        return dot(d, vec4(52.0));
      }

      float snoiseFractal(vec3 m) {
        return 0.5333333* snoise(m)
              +0.2666667* snoise(2.0*m)
              +0.1333333* snoise(4.0*m)
              +0.0666667* snoise(8.0*m);
      }
`+i.fragmentShader,i.fragmentShader=i.fragmentShader.replace("#include <transmission_pars_fragment>",`
        #ifdef USE_TRANSMISSION
          // Transmission code is based on glTF-Sampler-Viewer
          // https://github.com/KhronosGroup/glTF-Sample-Viewer
          uniform float _transmission;
          uniform float thickness;
          uniform float attenuationDistance;
          uniform vec3 attenuationColor;
          #ifdef USE_TRANSMISSIONMAP
            uniform sampler2D transmissionMap;
          #endif
          #ifdef USE_THICKNESSMAP
            uniform sampler2D thicknessMap;
          #endif
          uniform vec2 transmissionSamplerSize;
          uniform sampler2D transmissionSamplerMap;
          uniform mat4 modelMatrix;
          uniform mat4 projectionMatrix;
          varying vec3 vWorldPosition;
          vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
            // Direction of refracted light.
            vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
            // Compute rotation-independant scaling of the model matrix.
            vec3 modelScale;
            modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
            modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
            modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
            // The thickness is specified in local space.
            return normalize( refractionVector ) * thickness * modelScale;
          }
          float applyIorToRoughness( const in float roughness, const in float ior ) {
            // Scale roughness with IOR so that an IOR of 1.0 results in no microfacet refraction and
            // an IOR of 1.5 results in the default amount of microfacet refraction.
            return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
          }
          vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
            float framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );            
            #ifdef USE_SAMPLER
              #ifdef texture2DLodEXT
                return texture2DLodEXT(transmissionSamplerMap, fragCoord.xy, framebufferLod);
              #else
                return texture2D(transmissionSamplerMap, fragCoord.xy, framebufferLod);
              #endif
            #else
              return texture2D(buffer, fragCoord.xy);
            #endif
          }
          vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
            if ( isinf( attenuationDistance ) ) {
              // Attenuation distance is +∞, i.e. the transmitted color is not attenuated at all.
              return radiance;
            } else {
              // Compute light attenuation using Beer's law.
              vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
              vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance ); // Beer's law
              return transmittance * radiance;
            }
          }
          vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
            const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
            const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
            const in vec3 attenuationColor, const in float attenuationDistance ) {
            vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
            vec3 refractedRayExit = position + transmissionRay;
            // Project refracted vector on the framebuffer, while mapping to normalized device coordinates.
            vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
            vec2 refractionCoords = ndcPos.xy / ndcPos.w;
            refractionCoords += 1.0;
            refractionCoords /= 2.0;
            // Sample framebuffer to get pixel the refracted ray hits.
            vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
            vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
            // Get the specular component.
            vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
            return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
          }
        #endif
`),i.fragmentShader=i.fragmentShader.replace("#include <transmission_fragment>",`  
        // Improve the refraction to use the world pos
        material.transmission = _transmission;
        material.transmissionAlpha = 1.0;
        material.thickness = thickness;
        material.attenuationDistance = attenuationDistance;
        material.attenuationColor = attenuationColor;
        #ifdef USE_TRANSMISSIONMAP
          material.transmission *= texture2D( transmissionMap, vUv ).r;
        #endif
        #ifdef USE_THICKNESSMAP
          material.thickness *= texture2D( thicknessMap, vUv ).g;
        #endif
        
        vec3 pos = vWorldPosition;
        vec3 v = normalize( cameraPosition - pos );
        vec3 n = inverseTransformDirection( normal, viewMatrix );
        vec3 transmission = vec3(0.0);
        float transmissionR, transmissionB, transmissionG;
        float randomCoords = rand();
        float thickness_smear = thickness * max(pow(roughnessFactor, 0.33), anisotropicBlur);
        vec3 distortionNormal = vec3(0.0);
        vec3 temporalOffset = vec3(time, -time, -time) * temporalDistortion;
        if (distortion > 0.0) {
          distortionNormal = distortion * vec3(snoiseFractal(vec3((pos * distortionScale + temporalOffset))), snoiseFractal(vec3(pos.zxy * distortionScale - temporalOffset)), snoiseFractal(vec3(pos.yxz * distortionScale + temporalOffset)));
        }
        for (float i = 0.0; i < ${e}.0; i ++) {
          vec3 sampleNorm = normalize(n + roughnessFactor * roughnessFactor * 2.0 * normalize(vec3(rand() - 0.5, rand() - 0.5, rand() - 0.5)) * pow(rand(), 0.33) + distortionNormal);
          transmissionR = getIBLVolumeRefraction(
            sampleNorm, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
            pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness  + thickness_smear * (i + randomCoords) / float(${e}),
            material.attenuationColor, material.attenuationDistance
          ).r;
          transmissionG = getIBLVolumeRefraction(
            sampleNorm, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
            pos, modelMatrix, viewMatrix, projectionMatrix, material.ior  * (1.0 + chromaticAberration * (i + randomCoords) / float(${e})) , material.thickness + thickness_smear * (i + randomCoords) / float(${e}),
            material.attenuationColor, material.attenuationDistance
          ).g;
          transmissionB = getIBLVolumeRefraction(
            sampleNorm, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
            pos, modelMatrix, viewMatrix, projectionMatrix, material.ior * (1.0 + 2.0 * chromaticAberration * (i + randomCoords) / float(${e})), material.thickness + thickness_smear * (i + randomCoords) / float(${e}),
            material.attenuationColor, material.attenuationDistance
          ).b;
          transmission.r += transmissionR;
          transmission.g += transmissionG;
          transmission.b += transmissionB;
        }
        transmission /= ${e}.0;
        totalDiffuse = mix( totalDiffuse, transmission.rgb, material.transmission );
`)},Object.keys(this.uniforms).forEach(e=>Object.defineProperty(this,e,{get:()=>this.uniforms[e].value,set:t=>this.uniforms[e].value=t}))}}let h=s.forwardRef(({buffer:e,transmissionSampler:t=!1,backside:i=!1,side:h=r.FrontSide,transmission:u=1,thickness:p=0,backsideThickness:d=0,samples:m=10,resolution:f,backsideResolution:g,background:v,anisotropy:y,anisotropicBlur:x,...E},w)=>{let M,A,b;(0,o.e)({MeshTransmissionMaterial:c});let P=s.useRef(null),[S]=s.useState(()=>new l.l),C=(0,a.R)(g||f),I=(0,a.R)(f);return(0,o.A)(e=>{P.current.time=e.clock.getElapsedTime(),P.current.buffer===I.texture&&!t&&(b=P.current.__r3f.parent)&&(A=e.gl.toneMapping,M=e.scene.background,e.gl.toneMapping=r.NoToneMapping,v&&(e.scene.background=v),b.material=S,i&&(e.gl.setRenderTarget(C),e.gl.render(e.scene,e.camera),b.material=P.current,b.material.buffer=C.texture,b.material.thickness=d,b.material.side=r.BackSide),e.gl.setRenderTarget(I),e.gl.render(e.scene,e.camera),b.material=P.current,b.material.thickness=p,b.material.side=h,b.material.buffer=I.texture,e.scene.background=M,e.gl.setRenderTarget(null),e.gl.toneMapping=A)}),s.useImperativeHandle(w,()=>P.current,[]),s.createElement("meshTransmissionMaterial",(0,n.Z)({args:[m,t],ref:P},E,{buffer:e||I.texture,_transmission:u,anisotropicBlur:null!=x?x:y,transmission:t?u:0,thickness:p,side:h}))})},1223:function(e,t,i){"use strict";i.d(t,{R:function(){return o}});var n=i(959),r=i(4771),s=i(5542);function o(e,t,i){let o=(0,s.z)(e=>e.size),a=(0,s.z)(e=>e.viewport),l="number"==typeof e?e:o.width*a.dpr,c="number"==typeof t?t:o.height*a.dpr,h=("number"==typeof e?i:e)||{},{samples:u=0,depth:p,...d}=h,m=n.useMemo(()=>{let e=new r.WebGLRenderTarget(l,c,{minFilter:r.LinearFilter,magFilter:r.LinearFilter,type:r.HalfFloatType,...d});return p&&(e.depthTexture=new r.DepthTexture(l,c,r.FloatType)),e.samples=u,e},[]);return n.useLayoutEffect(()=>{m.setSize(l,c),u&&(m.samples=u)},[u,m,l,c]),n.useEffect(()=>()=>m.dispose(),[]),m}},9842:function(e,t,i){"use strict";i.d(t,{l:function(){return r}});var n=i(33);let r=(0,n.g)({},"void main() { }","void main() { gl_FragColor = vec4(0.0, 0.0, 0.0, 0.0); discard;  }")},9718:function(e,t,i){"use strict";i.d(t,{V:function(){return y}});var n,r,s=i(8126),o=i(959),a=i(4478),l=i(4771),c=i(5542);let h=new l.Vector3,u=new l.Vector3,p=new l.Vector3;function d(e,t,i){let n=h.setFromMatrixPosition(e.matrixWorld);n.project(t);let r=i.width/2,s=i.height/2;return[n.x*r+r,-(n.y*s)+s]}let m=e=>1e-10>Math.abs(e)?0:e;function f(e,t,i=""){let n="matrix3d(";for(let i=0;16!==i;i++)n+=m(t[i]*e.elements[i])+(15!==i?",":")");return i+n}let g=(n=[1,-1,1,1,1,-1,1,1,1,-1,1,1,1,-1,1,1],e=>f(e,n)),v=(r=e=>[1/e,1/e,1/e,1,-1/e,-1/e,-1/e,-1,1/e,1/e,1/e,1,1,1,1,1],(e,t)=>f(e,r(t),"translate(-50%,-50%)")),y=o.forwardRef(({children:e,eps:t=.001,style:i,className:n,prepend:r,center:f,fullscreen:y,portal:x,distanceFactor:E,sprite:w=!1,transform:M=!1,occlude:A,onOcclude:b,castShadow:P,receiveShadow:S,material:C,geometry:I,zIndexRange:L=[16777271,0],calculatePosition:k=d,as:R="div",wrapperClass:T,pointerEvents:z="auto",...O},F)=>{let{gl:D,camera:W,scene:j,size:_,raycaster:$,events:B,viewport:X}=(0,c.z)(),[Y]=o.useState(()=>document.createElement(R)),N=o.useRef(),V=o.useRef(null),U=o.useRef(0),G=o.useRef([0,0]),H=o.useRef(null),q=o.useRef(null),Z=(null==x?void 0:x.current)||B.connected||D.domElement.parentNode,K=o.useRef(null),Q=o.useRef(!1),J=o.useMemo(()=>{var e;return A&&"blending"!==A||Array.isArray(A)&&A.length&&(e=A[0])&&"object"==typeof e&&"current"in e},[A]);o.useLayoutEffect(()=>{let e=D.domElement;A&&"blending"===A?(e.style.zIndex=`${Math.floor(L[0]/2)}`,e.style.position="absolute",e.style.pointerEvents="none"):(e.style.zIndex=null,e.style.position=null,e.style.pointerEvents=null)},[A]),o.useLayoutEffect(()=>{if(V.current){let e=N.current=a.createRoot(Y);if(j.updateMatrixWorld(),M)Y.style.cssText="position:absolute;top:0;left:0;pointer-events:none;overflow:hidden;";else{let e=k(V.current,W,_);Y.style.cssText=`position:absolute;top:0;left:0;transform:translate3d(${e[0]}px,${e[1]}px,0);transform-origin:0 0;`}return Z&&(r?Z.prepend(Y):Z.appendChild(Y)),()=>{Z&&Z.removeChild(Y),e.unmount()}}},[Z,M]),o.useLayoutEffect(()=>{T&&(Y.className=T)},[T]);let ee=o.useMemo(()=>M?{position:"absolute",top:0,left:0,width:_.width,height:_.height,transformStyle:"preserve-3d",pointerEvents:"none"}:{position:"absolute",transform:f?"translate3d(-50%,-50%,0)":"none",...y&&{top:-_.height/2,left:-_.width/2,width:_.width,height:_.height},...i},[i,f,y,_,M]),et=o.useMemo(()=>({position:"absolute",pointerEvents:z}),[z]);o.useLayoutEffect(()=>{var t,r;Q.current=!1,M?null==(t=N.current)||t.render(o.createElement("div",{ref:H,style:ee},o.createElement("div",{ref:q,style:et},o.createElement("div",{ref:F,className:n,style:i,children:e})))):null==(r=N.current)||r.render(o.createElement("div",{ref:F,style:ee,className:n,children:e}))});let ei=o.useRef(!0);(0,c.A)(e=>{if(V.current){W.updateMatrixWorld(),V.current.updateWorldMatrix(!0,!1);let e=M?G.current:k(V.current,W,_);if(M||Math.abs(U.current-W.zoom)>t||Math.abs(G.current[0]-e[0])>t||Math.abs(G.current[1]-e[1])>t){let t=function(e,t){let i=h.setFromMatrixPosition(e.matrixWorld),n=u.setFromMatrixPosition(t.matrixWorld),r=i.sub(n),s=t.getWorldDirection(p);return r.angleTo(s)>Math.PI/2}(V.current,W),i=!1;J&&(Array.isArray(A)?i=A.map(e=>e.current):"blending"!==A&&(i=[j]));let n=ei.current;if(i){let e=function(e,t,i,n){let r=h.setFromMatrixPosition(e.matrixWorld),s=r.clone();s.project(t),i.setFromCamera(s,t);let o=i.intersectObjects(n,!0);if(o.length){let e=o[0].distance,t=r.distanceTo(i.ray.origin);return t<e}return!0}(V.current,W,$,i);ei.current=e&&!t}else ei.current=!t;n!==ei.current&&(b?b(!ei.current):Y.style.display=ei.current?"block":"none");let r=Math.floor(L[0]/2),s=A?J?[L[0],r]:[r-1,0]:L;if(Y.style.zIndex=`${function(e,t,i){if(t instanceof l.PerspectiveCamera||t instanceof l.OrthographicCamera){let n=h.setFromMatrixPosition(e.matrixWorld),r=u.setFromMatrixPosition(t.matrixWorld),s=n.distanceTo(r),o=(i[1]-i[0])/(t.far-t.near),a=i[1]-o*t.far;return Math.round(o*s+a)}}(V.current,W,s)}`,M){let[e,t]=[_.width/2,_.height/2],i=W.projectionMatrix.elements[5]*t,{isOrthographicCamera:n,top:r,left:s,bottom:o,right:a}=W,l=g(W.matrixWorldInverse),c=n?`scale(${i})translate(${m(-(a+s)/2)}px,${m((r+o)/2)}px)`:`translateZ(${i}px)`,h=V.current.matrixWorld;w&&((h=W.matrixWorldInverse.clone().transpose().copyPosition(h).scale(V.current.scale)).elements[3]=h.elements[7]=h.elements[11]=0,h.elements[15]=1),Y.style.width=_.width+"px",Y.style.height=_.height+"px",Y.style.perspective=n?"":`${i}px`,H.current&&q.current&&(H.current.style.transform=`${c}${l}translate(${e}px,${t}px)`,q.current.style.transform=v(h,1/((E||10)/400)))}else{let t=void 0===E?1:function(e,t){if(t instanceof l.OrthographicCamera)return t.zoom;if(!(t instanceof l.PerspectiveCamera))return 1;{let i=h.setFromMatrixPosition(e.matrixWorld),n=u.setFromMatrixPosition(t.matrixWorld),r=t.fov*Math.PI/180,s=i.distanceTo(n);return 1/(2*Math.tan(r/2)*s)}}(V.current,W)*E;Y.style.transform=`translate3d(${e[0]}px,${e[1]}px,0) scale(${t})`}G.current=e,U.current=W.zoom}}if(!J&&K.current&&!Q.current){if(M){if(H.current){let e=H.current.children[0];if(null!=e&&e.clientWidth&&null!=e&&e.clientHeight){let{isOrthographicCamera:t}=W;if(t||I)O.scale&&(Array.isArray(O.scale)?O.scale instanceof l.Vector3?K.current.scale.copy(O.scale.clone().divideScalar(1)):K.current.scale.set(1/O.scale[0],1/O.scale[1],1/O.scale[2]):K.current.scale.setScalar(1/O.scale));else{let t=(E||10)/400,i=e.clientWidth*t,n=e.clientHeight*t;K.current.scale.set(i,n,1)}Q.current=!0}}}else{let t=Y.children[0];if(null!=t&&t.clientWidth&&null!=t&&t.clientHeight){let e=1/X.factor,i=t.clientWidth*e,n=t.clientHeight*e;K.current.scale.set(i,n,1),Q.current=!0}K.current.lookAt(e.camera.position)}}});let en=o.useMemo(()=>({vertexShader:M?void 0:`
          /*
            This shader is from the THREE's SpriteMaterial.
            We need to turn the backing plane into a Sprite
            (make it always face the camera) if "transfrom" 
            is false. 
          */
          #include <common>

          void main() {
            vec2 center = vec2(0., 1.);
            float rotation = 0.0;
            
            // This is somewhat arbitrary, but it seems to work well
            // Need to figure out how to derive this dynamically if it even matters
            float size = 0.03;

            vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
            vec2 scale;
            scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
            scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );

            bool isPerspective = isPerspectiveMatrix( projectionMatrix );
            if ( isPerspective ) scale *= - mvPosition.z;

            vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale * size;
            vec2 rotatedPosition;
            rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
            rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
            mvPosition.xy += rotatedPosition;

            gl_Position = projectionMatrix * mvPosition;
          }
      `,fragmentShader:`
        void main() {
          gl_FragColor = vec4(0.0, 0.0, 0.0, 0.0);
        }
      `}),[M]);return o.createElement("group",(0,s.Z)({},O,{ref:V}),A&&!J&&o.createElement("mesh",{castShadow:P,receiveShadow:S,ref:K},I||o.createElement("planeGeometry",null),C||o.createElement("shaderMaterial",{side:l.DoubleSide,vertexShader:en.vertexShader,fragmentShader:en.fragmentShader})))})},5250:function(e){var t,i;t="undefined"!=typeof window?window:this,i=function(){function e(){}let t=e.prototype;return t.on=function(e,t){if(!e||!t)return this;let i=this._events=this._events||{},n=i[e]=i[e]||[];return n.includes(t)||n.push(t),this},t.once=function(e,t){if(!e||!t)return this;this.on(e,t);let i=this._onceEvents=this._onceEvents||{};return(i[e]=i[e]||{})[t]=!0,this},t.off=function(e,t){let i=this._events&&this._events[e];if(!i||!i.length)return this;let n=i.indexOf(t);return -1!=n&&i.splice(n,1),this},t.emitEvent=function(e,t){let i=this._events&&this._events[e];if(!i||!i.length)return this;i=i.slice(0),t=t||[];let n=this._onceEvents&&this._onceEvents[e];for(let r of i)n&&n[r]&&(this.off(e,r),delete n[r]),r.apply(this,t);return this},t.allOff=function(){return delete this._events,delete this._onceEvents,this},e},e.exports?e.exports=i():t.EvEmitter=i()},9142:function(e,t,i){var n,r;/*!
 * imagesLoaded v5.0.0
 * JavaScript is all like "You images are done yet or what?"
 * MIT License
 */n="undefined"!=typeof window?window:this,r=function(e,t){let i=e.jQuery,n=e.console;function r(e,t,s){var o;if(!(this instanceof r))return new r(e,t,s);let a=e;if("string"==typeof e&&(a=document.querySelectorAll(e)),!a){n.error(`Bad element for imagesLoaded ${a||e}`);return}this.elements=Array.isArray(o=a)?o:"object"==typeof o&&"number"==typeof o.length?[...o]:[o],this.options={},"function"==typeof t?s=t:Object.assign(this.options,t),s&&this.on("always",s),this.getImages(),i&&(this.jqDeferred=new i.Deferred),setTimeout(this.check.bind(this))}r.prototype=Object.create(t.prototype),r.prototype.getImages=function(){this.images=[],this.elements.forEach(this.addElementImages,this)};let s=[1,9,11];r.prototype.addElementImages=function(e){"IMG"===e.nodeName&&this.addImage(e),!0===this.options.background&&this.addElementBackgroundImages(e);let{nodeType:t}=e;if(t&&s.includes(t)){for(let t of e.querySelectorAll("img"))this.addImage(t);if("string"==typeof this.options.background)for(let t of e.querySelectorAll(this.options.background))this.addElementBackgroundImages(t)}};let o=/url\((['"])?(.*?)\1\)/gi;function a(e){this.img=e}function l(e,t){this.url=e,this.element=t,this.img=new Image}return r.prototype.addElementBackgroundImages=function(e){let t=getComputedStyle(e);if(!t)return;let i=o.exec(t.backgroundImage);for(;null!==i;){let n=i&&i[2];n&&this.addBackground(n,e),i=o.exec(t.backgroundImage)}},r.prototype.addImage=function(e){let t=new a(e);this.images.push(t)},r.prototype.addBackground=function(e,t){let i=new l(e,t);this.images.push(i)},r.prototype.check=function(){if(this.progressedCount=0,this.hasAnyBroken=!1,!this.images.length){this.complete();return}let e=(e,t,i)=>{setTimeout(()=>{this.progress(e,t,i)})};this.images.forEach(function(t){t.once("progress",e),t.check()})},r.prototype.progress=function(e,t,i){this.progressedCount++,this.hasAnyBroken=this.hasAnyBroken||!e.isLoaded,this.emitEvent("progress",[this,e,t]),this.jqDeferred&&this.jqDeferred.notify&&this.jqDeferred.notify(this,e),this.progressedCount===this.images.length&&this.complete(),this.options.debug&&n&&n.log(`progress: ${i}`,e,t)},r.prototype.complete=function(){let e=this.hasAnyBroken?"fail":"done";if(this.isComplete=!0,this.emitEvent(e,[this]),this.emitEvent("always",[this]),this.jqDeferred){let e=this.hasAnyBroken?"reject":"resolve";this.jqDeferred[e](this)}},a.prototype=Object.create(t.prototype),a.prototype.check=function(){if(this.getIsImageComplete()){this.confirm(0!==this.img.naturalWidth,"naturalWidth");return}this.proxyImage=new Image,this.img.crossOrigin&&(this.proxyImage.crossOrigin=this.img.crossOrigin),this.proxyImage.addEventListener("load",this),this.proxyImage.addEventListener("error",this),this.img.addEventListener("load",this),this.img.addEventListener("error",this),this.proxyImage.src=this.img.currentSrc||this.img.src},a.prototype.getIsImageComplete=function(){return this.img.complete&&this.img.naturalWidth},a.prototype.confirm=function(e,t){this.isLoaded=e;let{parentNode:i}=this.img,n="PICTURE"===i.nodeName?i:this.img;this.emitEvent("progress",[this,n,t])},a.prototype.handleEvent=function(e){let t="on"+e.type;this[t]&&this[t](e)},a.prototype.onload=function(){this.confirm(!0,"onload"),this.unbindEvents()},a.prototype.onerror=function(){this.confirm(!1,"onerror"),this.unbindEvents()},a.prototype.unbindEvents=function(){this.proxyImage.removeEventListener("load",this),this.proxyImage.removeEventListener("error",this),this.img.removeEventListener("load",this),this.img.removeEventListener("error",this)},l.prototype=Object.create(a.prototype),l.prototype.check=function(){this.img.addEventListener("load",this),this.img.addEventListener("error",this),this.img.src=this.url,this.getIsImageComplete()&&(this.confirm(0!==this.img.naturalWidth,"naturalWidth"),this.unbindEvents())},l.prototype.unbindEvents=function(){this.img.removeEventListener("load",this),this.img.removeEventListener("error",this)},l.prototype.confirm=function(e,t){this.isLoaded=e,this.emitEvent("progress",[this,this.element,t])},r.makeJQueryPlugin=function(t){(t=t||e.jQuery)&&((i=t).fn.imagesLoaded=function(e,t){return new r(this,e,t).jqDeferred.promise(i(this))})},r.makeJQueryPlugin(),r},e.exports?e.exports=r(n,i(5250)):n.imagesLoaded=r(n,n.EvEmitter)},3589:function(e,t){"use strict";t.Z=function(e){return function(t){e.forEach(function(e){"function"==typeof e?e(t):null!=e&&(e.current=t)})}}},573:function(e,t,i){"use strict";i.d(t,{Z:function(){return c}});var n=i(959);"function"==typeof SuppressedError&&SuppressedError;let r=(e,t,i,n)=>{e.style.transition=`${t} ${i}ms ${n}`},s=(e,t,i)=>Math.min(Math.max(e,t),i);class o{constructor(e,t){this.glareAngle=0,this.glareOpacity=0,this.calculateGlareSize=e=>{let{width:t,height:i}=e,n=Math.sqrt(Math.pow(t,2)+Math.pow(i,2));return{width:n,height:n}},this.setSize=e=>{let t=this.calculateGlareSize(e);this.glareEl.style.width=`${t.width}px`,this.glareEl.style.height=`${t.height}px`},this.update=(e,t,i,n)=>{this.updateAngle(e,t.glareReverse),this.updateOpacity(e,t,i,n)},this.updateAngle=(e,t)=>{let{xPercentage:i,yPercentage:n}=e;this.glareAngle=(i?Math.atan2(n,-i)*(180/Math.PI):0)-(t?180:0)},this.updateOpacity=(e,t,i,n)=>{let{xPercentage:r,yPercentage:o}=e,{glarePosition:a,glareReverse:l,glareMaxOpacity:c}=t,h=i?-1:1,u=n?-1:1,p=l?-1:1,d=0;switch(a){case"top":d=-r*h*p;break;case"right":d=o*u*p;break;case"bottom":case void 0:d=r*h*p;break;case"left":d=-o*u*p;break;case"all":d=Math.hypot(r,o)}let m=s(d,0,100);this.glareOpacity=m*c/100},this.render=e=>{let{glareColor:t}=e;this.glareEl.style.transform=`rotate(${this.glareAngle}deg) translate(-50%, -50%)`,this.glareEl.style.opacity=this.glareOpacity.toString(),this.glareEl.style.background=`linear-gradient(0deg, rgba(255,255,255,0) 0%, ${t} 100%)`},this.glareWrapperEl=document.createElement("div"),this.glareEl=document.createElement("div"),this.glareWrapperEl.appendChild(this.glareEl),this.glareWrapperEl.className="glare-wrapper",this.glareEl.className="glare";let i=this.calculateGlareSize(e),n={position:"absolute",top:"50%",left:"50%",transformOrigin:"0% 0%",pointerEvents:"none",width:`${i.width}px`,height:`${i.height}px`};Object.assign(this.glareWrapperEl.style,{position:"absolute",top:"0",left:"0",width:"100%",height:"100%",overflow:"hidden",borderRadius:t,WebkitMaskImage:"-webkit-radial-gradient(white, black)",pointerEvents:"none"}),Object.assign(this.glareEl.style,n)}}class a{constructor(){this.glareAngle=0,this.glareOpacity=0,this.tiltAngleX=0,this.tiltAngleY=0,this.tiltAngleXPercentage=0,this.tiltAngleYPercentage=0,this.update=(e,t)=>{this.updateTilt(e,t),this.updateTiltManualInput(e,t),this.updateTiltReverse(t),this.updateTiltLimits(t)},this.updateTilt=(e,t)=>{let{xPercentage:i,yPercentage:n}=e,{tiltMaxAngleX:r,tiltMaxAngleY:s}=t;this.tiltAngleX=i*r/100,this.tiltAngleY=-(n*s/100*1)},this.updateTiltManualInput=(e,t)=>{let{tiltAngleXManual:i,tiltAngleYManual:n,tiltMaxAngleX:r,tiltMaxAngleY:s}=t;(null!==i||null!==n)&&(this.tiltAngleX=null!==i?i:0,this.tiltAngleY=null!==n?n:0,e.xPercentage=100*this.tiltAngleX/r,e.yPercentage=100*this.tiltAngleY/s)},this.updateTiltReverse=e=>{let t=e.tiltReverse?-1:1;this.tiltAngleX=t*this.tiltAngleX,this.tiltAngleY=t*this.tiltAngleY},this.updateTiltLimits=e=>{let{tiltAxis:t}=e;this.tiltAngleX=s(this.tiltAngleX,-90,90),this.tiltAngleY=s(this.tiltAngleY,-90,90),t&&(this.tiltAngleX="x"===t?this.tiltAngleX:0,this.tiltAngleY="y"===t?this.tiltAngleY:0)},this.updateTiltAnglesPercentage=e=>{let{tiltMaxAngleX:t,tiltMaxAngleY:i}=e;this.tiltAngleXPercentage=this.tiltAngleX/t*100,this.tiltAngleYPercentage=this.tiltAngleY/i*100},this.render=e=>{e.style.transform+=`rotateX(${this.tiltAngleX}deg) rotateY(${this.tiltAngleY}deg) `}}}let l=Object.assign(Object.assign({scale:1,perspective:1e3,flipVertically:!1,flipHorizontally:!1,reset:!0,transitionEasing:"cubic-bezier(.03,.98,.52,.99)",transitionSpeed:400,trackOnWindow:!1,gyroscope:!1},{tiltEnable:!0,tiltReverse:!1,tiltAngleXInitial:0,tiltAngleYInitial:0,tiltMaxAngleX:20,tiltMaxAngleY:20,tiltAxis:void 0,tiltAngleXManual:null,tiltAngleYManual:null}),{glareEnable:!1,glareMaxOpacity:.7,glareColor:"#ffffff",glarePosition:"bottom",glareReverse:!1,glareBorderRadius:"0"});class c extends n.PureComponent{constructor(){super(...arguments),this.wrapperEl={node:null,size:{width:0,height:0,left:0,top:0},clientPosition:{x:null,y:null,xPercentage:0,yPercentage:0},updateAnimationId:null,scale:1},this.tilt=null,this.glare=null,this.addDeviceOrientationEventListener=()=>{var e,t,i,n;return e=this,t=void 0,i=void 0,n=function*(){if(!window.DeviceOrientationEvent)return;let e=DeviceOrientationEvent.requestPermission;"function"==typeof e?"granted"===(yield e())&&window.addEventListener("deviceorientation",this.onMove):window.addEventListener("deviceorientation",this.onMove)},new(i||(i=Promise))(function(r,s){function o(e){try{l(n.next(e))}catch(e){s(e)}}function a(e){try{l(n.throw(e))}catch(e){s(e)}}function l(e){var t;e.done?r(e.value):((t=e.value)instanceof i?t:new i(function(e){e(t)})).then(o,a)}l((n=n.apply(e,t||[])).next())})},this.setSize=()=>{this.setWrapperElSize(),this.glare&&this.glare.setSize(this.wrapperEl.size)},this.mainLoop=e=>{null!==this.wrapperEl.updateAnimationId&&cancelAnimationFrame(this.wrapperEl.updateAnimationId),this.processInput(e),this.update(e.type),this.wrapperEl.updateAnimationId=requestAnimationFrame(this.renderFrame)},this.onEnter=e=>{let{onEnter:t}=this.props;this.setSize(),this.wrapperEl.node.style.willChange="transform",this.setTransitions(),t&&t(e.type)},this.onMove=e=>{this.mainLoop(e),this.emitOnMove(e)},this.onLeave=e=>{let{onLeave:t}=this.props;if(this.setTransitions(),t&&t(e.type),this.props.reset){let e=new CustomEvent("autoreset");this.onMove(e)}},this.processInput=e=>{let{scale:t}=this.props;switch(e.type){case"mousemove":this.wrapperEl.clientPosition.x=e.pageX,this.wrapperEl.clientPosition.y=e.pageY,this.wrapperEl.scale=t;break;case"touchmove":this.wrapperEl.clientPosition.x=e.touches[0].pageX,this.wrapperEl.clientPosition.y=e.touches[0].pageY,this.wrapperEl.scale=t;break;case"deviceorientation":this.processInputDeviceOrientation(e),this.wrapperEl.scale=t;break;case"autoreset":let{tiltAngleXInitial:i,tiltAngleYInitial:n,tiltMaxAngleX:r,tiltMaxAngleY:o}=this.props;this.wrapperEl.clientPosition.xPercentage=s(i/r*100,-100,100),this.wrapperEl.clientPosition.yPercentage=s(n/o*100,-100,100),this.wrapperEl.scale=1}},this.processInputDeviceOrientation=e=>{if(!e.gamma||!e.beta||!this.props.gyroscope)return;let{tiltMaxAngleX:t,tiltMaxAngleY:i}=this.props,n=e.gamma;this.wrapperEl.clientPosition.xPercentage=e.beta/t*100,this.wrapperEl.clientPosition.yPercentage=n/i*100,this.wrapperEl.clientPosition.xPercentage=s(this.wrapperEl.clientPosition.xPercentage,-100,100),this.wrapperEl.clientPosition.yPercentage=s(this.wrapperEl.clientPosition.yPercentage,-100,100)},this.update=e=>{let{tiltEnable:t,flipVertically:i,flipHorizontally:n}=this.props;"autoreset"!==e&&"deviceorientation"!==e&&"propChange"!==e&&this.updateClientInput(),t&&this.tilt.update(this.wrapperEl.clientPosition,this.props),this.updateFlip(),this.tilt.updateTiltAnglesPercentage(this.props),this.glare&&this.glare.update(this.wrapperEl.clientPosition,this.props,i,n)},this.updateClientInput=()=>{let e,t;let{trackOnWindow:i}=this.props;if(i){let{x:i,y:n}=this.wrapperEl.clientPosition;e=n/window.innerHeight*200-100,t=i/window.innerWidth*200-100}else{let{size:{width:i,height:n,left:r,top:s},clientPosition:{x:o,y:a}}=this.wrapperEl;e=(a-s)/n*200-100,t=(o-r)/i*200-100}this.wrapperEl.clientPosition.xPercentage=s(e,-100,100),this.wrapperEl.clientPosition.yPercentage=s(t,-100,100)},this.updateFlip=()=>{let{flipVertically:e,flipHorizontally:t}=this.props;e&&(this.tilt.tiltAngleX+=180,this.tilt.tiltAngleY*=-1),t&&(this.tilt.tiltAngleY+=180)},this.renderFrame=()=>{this.resetWrapperElTransform(),this.renderPerspective(),this.tilt.render(this.wrapperEl.node),this.renderScale(),this.glare&&this.glare.render(this.props)}}componentDidMount(){if(this.tilt=new a,this.initGlare(),this.addEventListeners(),"undefined"==typeof CustomEvent)return;let e=new CustomEvent("autoreset");this.mainLoop(e);let t=new CustomEvent("initial");this.emitOnMove(t)}componentWillUnmount(){null!==this.wrapperEl.updateAnimationId&&cancelAnimationFrame(this.wrapperEl.updateAnimationId),this.removeEventListeners()}componentDidUpdate(){let e=new CustomEvent("propChange");this.mainLoop(e),this.emitOnMove(e)}addEventListeners(){let{trackOnWindow:e,gyroscope:t}=this.props;window.addEventListener("resize",this.setSize),e&&(window.addEventListener("mouseenter",this.onEnter),window.addEventListener("mousemove",this.onMove),window.addEventListener("mouseout",this.onLeave),window.addEventListener("touchstart",this.onEnter),window.addEventListener("touchmove",this.onMove),window.addEventListener("touchend",this.onLeave)),t&&this.addDeviceOrientationEventListener()}removeEventListeners(){let{trackOnWindow:e,gyroscope:t}=this.props;window.removeEventListener("resize",this.setSize),e&&(window.removeEventListener("mouseenter",this.onEnter),window.removeEventListener("mousemove",this.onMove),window.removeEventListener("mouseout",this.onLeave),window.removeEventListener("touchstart",this.onEnter),window.removeEventListener("touchmove",this.onMove),window.removeEventListener("touchend",this.onLeave)),t&&window.DeviceOrientationEvent&&window.removeEventListener("deviceorientation",this.onMove)}setWrapperElSize(){let e=this.wrapperEl.node.getBoundingClientRect();this.wrapperEl.size.width=this.wrapperEl.node.offsetWidth,this.wrapperEl.size.height=this.wrapperEl.node.offsetHeight,this.wrapperEl.size.left=e.left+window.scrollX,this.wrapperEl.size.top=e.top+window.scrollY}initGlare(){let{glareEnable:e,glareBorderRadius:t}=this.props;e&&(this.glare=new o(this.wrapperEl.size,t),this.wrapperEl.node.appendChild(this.glare.glareWrapperEl))}emitOnMove(e){let{onMove:t}=this.props;if(!t)return;let i=0,n=0;this.glare&&(i=this.glare.glareAngle,n=this.glare.glareOpacity),t({tiltAngleX:this.tilt.tiltAngleX,tiltAngleY:this.tilt.tiltAngleY,tiltAngleXPercentage:this.tilt.tiltAngleXPercentage,tiltAngleYPercentage:this.tilt.tiltAngleYPercentage,glareAngle:i,glareOpacity:n,eventType:e.type})}resetWrapperElTransform(){this.wrapperEl.node.style.transform=""}renderPerspective(){let{perspective:e}=this.props;this.wrapperEl.node.style.transform+=`perspective(${e}px) `}renderScale(){let{scale:e}=this.wrapperEl;this.wrapperEl.node.style.transform+=`scale3d(${e},${e},${e})`}setTransitions(){let{transitionSpeed:e,transitionEasing:t}=this.props;r(this.wrapperEl.node,"all",e,t),this.glare&&r(this.glare.glareEl,"opacity",e,t)}render(){let{children:e,className:t,style:i}=this.props;return n.createElement("div",{ref:e=>this.wrapperEl.node=e,onMouseEnter:this.onEnter,onMouseMove:this.onMove,onMouseLeave:this.onLeave,onTouchStart:this.onEnter,onTouchMove:this.onMove,onTouchEnd:this.onLeave,className:t,style:i},e)}}c.defaultProps=l}}]);