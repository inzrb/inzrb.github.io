(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8731],{9866:function(e,t,i){"use strict";i.d(t,{b:function(){return a}});var r=i(959),n=i(5542),s=i(3589),o=i(4771);let a=r.forwardRef(({children:e,enabled:t=!0,speed:i=1,rotationIntensity:a=1,floatIntensity:l=1,floatingRange:c=[-.1,.1],...u},h)=>{let d=r.useRef(null),p=r.useRef(1e4*Math.random());return(0,n.A)(e=>{var r,n;if(!t||0===i)return;let s=p.current+e.clock.getElapsedTime();d.current.rotation.x=Math.cos(s/4*i)/8*a,d.current.rotation.y=Math.sin(s/4*i)/8*a,d.current.rotation.z=Math.sin(s/4*i)/20*a;let u=Math.sin(s/4*i)/10;u=o.MathUtils.mapLinear(u,-.1,.1,null!==(r=null==c?void 0:c[0])&&void 0!==r?r:-.1,null!==(n=null==c?void 0:c[1])&&void 0!==n?n:.1),d.current.position.y=u*l,d.current.updateMatrix()}),r.createElement("group",u,r.createElement("group",{ref:(0,s.Z)([d,h]),matrixAutoUpdate:!1},e))})},6786:function(e,t,i){"use strict";i.d(t,{z:function(){return o}});var r=i(8126),n=i(4771),s=i(959);let o=s.forwardRef(({id:e=1,colorWrite:t=!1,depthWrite:i=!1,...o},a)=>{let l=s.useRef(null),c=s.useMemo(()=>({colorWrite:t,depthWrite:i,stencilWrite:!0,stencilRef:e,stencilFunc:n.AlwaysStencilFunc,stencilFail:n.ReplaceStencilOp,stencilZFail:n.ReplaceStencilOp,stencilZPass:n.ReplaceStencilOp}),[e,t,i]);return s.useLayoutEffect(()=>{Object.assign(l.current.material,c)}),s.useImperativeHandle(a,()=>l.current,[]),s.createElement("mesh",(0,r.Z)({ref:l,renderOrder:-e},o))})},3276:function(e,t,i){"use strict";i.d(t,{z:function(){return u}});var r=i(8126),n=i(4771),s=i(959),o=i(5542),a=i(1223),l=i(9842);class c extends n.MeshPhysicalMaterial{constructor(e=6,t=!1){super(),this.uniforms={chromaticAberration:{value:.05},transmission:{value:0},_transmission:{value:1},transmissionMap:{value:null},roughness:{value:0},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:1/0},attenuationColor:{value:new n.Color("white")},anisotropicBlur:{value:.1},time:{value:0},distortion:{value:0},distortionScale:{value:.5},temporalDistortion:{value:0},buffer:{value:null}},this.onBeforeCompile=i=>{i.uniforms={...i.uniforms,...this.uniforms},this.anisotropy>0&&(i.defines.USE_ANISOTROPY=""),t?i.defines.USE_SAMPLER="":i.defines.USE_TRANSMISSION="",i.fragmentShader=`
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
`)},Object.keys(this.uniforms).forEach(e=>Object.defineProperty(this,e,{get:()=>this.uniforms[e].value,set:t=>this.uniforms[e].value=t}))}}let u=s.forwardRef(({buffer:e,transmissionSampler:t=!1,backside:i=!1,side:u=n.FrontSide,transmission:h=1,thickness:d=0,backsideThickness:p=0,samples:m=10,resolution:f,backsideResolution:g,background:v,anisotropy:y,anisotropicBlur:x,...w},E)=>{let b,M,A;(0,o.e)({MeshTransmissionMaterial:c});let S=s.useRef(null),[P]=s.useState(()=>new l.l),C=(0,a.R)(g||f),k=(0,a.R)(f);return(0,o.A)(e=>{S.current.time=e.clock.getElapsedTime(),S.current.buffer===k.texture&&!t&&(A=S.current.__r3f.parent)&&(M=e.gl.toneMapping,b=e.scene.background,e.gl.toneMapping=n.NoToneMapping,v&&(e.scene.background=v),A.material=P,i&&(e.gl.setRenderTarget(C),e.gl.render(e.scene,e.camera),A.material=S.current,A.material.buffer=C.texture,A.material.thickness=p,A.material.side=n.BackSide),e.gl.setRenderTarget(k),e.gl.render(e.scene,e.camera),A.material=S.current,A.material.thickness=d,A.material.side=u,A.material.buffer=k.texture,e.scene.background=b,e.gl.setRenderTarget(null),e.gl.toneMapping=M)}),s.useImperativeHandle(E,()=>S.current,[]),s.createElement("meshTransmissionMaterial",(0,r.Z)({args:[m,t],ref:S},w,{buffer:e||k.texture,_transmission:h,anisotropicBlur:null!=x?x:y,transmission:t?h:0,thickness:d,side:u}))})},1223:function(e,t,i){"use strict";i.d(t,{R:function(){return o}});var r=i(959),n=i(4771),s=i(5542);function o(e,t,i){let o=(0,s.z)(e=>e.size),a=(0,s.z)(e=>e.viewport),l="number"==typeof e?e:o.width*a.dpr,c="number"==typeof t?t:o.height*a.dpr,u=("number"==typeof e?i:e)||{},{samples:h=0,depth:d,...p}=u,m=r.useMemo(()=>{let e=new n.WebGLRenderTarget(l,c,{minFilter:n.LinearFilter,magFilter:n.LinearFilter,type:n.HalfFloatType,...p});return d&&(e.depthTexture=new n.DepthTexture(l,c,n.FloatType)),e.samples=h,e},[]);return r.useLayoutEffect(()=>{m.setSize(l,c),h&&(m.samples=h)},[h,m,l,c]),r.useEffect(()=>()=>m.dispose(),[]),m}},9842:function(e,t,i){"use strict";i.d(t,{l:function(){return n}});var r=i(33);let n=(0,r.g)({},"void main() { }","void main() { gl_FragColor = vec4(0.0, 0.0, 0.0, 0.0); discard;  }")},9718:function(e,t,i){"use strict";i.d(t,{V:function(){return y}});var r,n,s=i(8126),o=i(959),a=i(4478),l=i(4771),c=i(5542);let u=new l.Vector3,h=new l.Vector3,d=new l.Vector3;function p(e,t,i){let r=u.setFromMatrixPosition(e.matrixWorld);r.project(t);let n=i.width/2,s=i.height/2;return[r.x*n+n,-(r.y*s)+s]}let m=e=>1e-10>Math.abs(e)?0:e;function f(e,t,i=""){let r="matrix3d(";for(let i=0;16!==i;i++)r+=m(t[i]*e.elements[i])+(15!==i?",":")");return i+r}let g=(r=[1,-1,1,1,1,-1,1,1,1,-1,1,1,1,-1,1,1],e=>f(e,r)),v=(n=e=>[1/e,1/e,1/e,1,-1/e,-1/e,-1/e,-1,1/e,1/e,1/e,1,1,1,1,1],(e,t)=>f(e,n(t),"translate(-50%,-50%)")),y=o.forwardRef(({children:e,eps:t=.001,style:i,className:r,prepend:n,center:f,fullscreen:y,portal:x,distanceFactor:w,sprite:E=!1,transform:b=!1,occlude:M,onOcclude:A,castShadow:S,receiveShadow:P,material:C,geometry:k,zIndexRange:I=[16777271,0],calculatePosition:L=p,as:O="div",wrapperClass:R,pointerEvents:z="auto",...T},F)=>{let{gl:D,camera:j,scene:W,size:_,raycaster:$,events:B,viewport:N}=(0,c.z)(),[X]=o.useState(()=>document.createElement(O)),Y=o.useRef(),U=o.useRef(null),G=o.useRef(0),V=o.useRef([0,0]),q=o.useRef(null),H=o.useRef(null),Z=(null==x?void 0:x.current)||B.connected||D.domElement.parentNode,K=o.useRef(null),Q=o.useRef(!1),J=o.useMemo(()=>{var e;return M&&"blending"!==M||Array.isArray(M)&&M.length&&(e=M[0])&&"object"==typeof e&&"current"in e},[M]);o.useLayoutEffect(()=>{let e=D.domElement;M&&"blending"===M?(e.style.zIndex=`${Math.floor(I[0]/2)}`,e.style.position="absolute",e.style.pointerEvents="none"):(e.style.zIndex=null,e.style.position=null,e.style.pointerEvents=null)},[M]),o.useLayoutEffect(()=>{if(U.current){let e=Y.current=a.createRoot(X);if(W.updateMatrixWorld(),b)X.style.cssText="position:absolute;top:0;left:0;pointer-events:none;overflow:hidden;";else{let e=L(U.current,j,_);X.style.cssText=`position:absolute;top:0;left:0;transform:translate3d(${e[0]}px,${e[1]}px,0);transform-origin:0 0;`}return Z&&(n?Z.prepend(X):Z.appendChild(X)),()=>{Z&&Z.removeChild(X),e.unmount()}}},[Z,b]),o.useLayoutEffect(()=>{R&&(X.className=R)},[R]);let ee=o.useMemo(()=>b?{position:"absolute",top:0,left:0,width:_.width,height:_.height,transformStyle:"preserve-3d",pointerEvents:"none"}:{position:"absolute",transform:f?"translate3d(-50%,-50%,0)":"none",...y&&{top:-_.height/2,left:-_.width/2,width:_.width,height:_.height},...i},[i,f,y,_,b]),et=o.useMemo(()=>({position:"absolute",pointerEvents:z}),[z]);o.useLayoutEffect(()=>{var t,n;Q.current=!1,b?null==(t=Y.current)||t.render(o.createElement("div",{ref:q,style:ee},o.createElement("div",{ref:H,style:et},o.createElement("div",{ref:F,className:r,style:i,children:e})))):null==(n=Y.current)||n.render(o.createElement("div",{ref:F,style:ee,className:r,children:e}))});let ei=o.useRef(!0);(0,c.A)(e=>{if(U.current){j.updateMatrixWorld(),U.current.updateWorldMatrix(!0,!1);let e=b?V.current:L(U.current,j,_);if(b||Math.abs(G.current-j.zoom)>t||Math.abs(V.current[0]-e[0])>t||Math.abs(V.current[1]-e[1])>t){let t=function(e,t){let i=u.setFromMatrixPosition(e.matrixWorld),r=h.setFromMatrixPosition(t.matrixWorld),n=i.sub(r),s=t.getWorldDirection(d);return n.angleTo(s)>Math.PI/2}(U.current,j),i=!1;J&&(Array.isArray(M)?i=M.map(e=>e.current):"blending"!==M&&(i=[W]));let r=ei.current;if(i){let e=function(e,t,i,r){let n=u.setFromMatrixPosition(e.matrixWorld),s=n.clone();s.project(t),i.setFromCamera(s,t);let o=i.intersectObjects(r,!0);if(o.length){let e=o[0].distance,t=n.distanceTo(i.ray.origin);return t<e}return!0}(U.current,j,$,i);ei.current=e&&!t}else ei.current=!t;r!==ei.current&&(A?A(!ei.current):X.style.display=ei.current?"block":"none");let n=Math.floor(I[0]/2),s=M?J?[I[0],n]:[n-1,0]:I;if(X.style.zIndex=`${function(e,t,i){if(t instanceof l.PerspectiveCamera||t instanceof l.OrthographicCamera){let r=u.setFromMatrixPosition(e.matrixWorld),n=h.setFromMatrixPosition(t.matrixWorld),s=r.distanceTo(n),o=(i[1]-i[0])/(t.far-t.near),a=i[1]-o*t.far;return Math.round(o*s+a)}}(U.current,j,s)}`,b){let[e,t]=[_.width/2,_.height/2],i=j.projectionMatrix.elements[5]*t,{isOrthographicCamera:r,top:n,left:s,bottom:o,right:a}=j,l=g(j.matrixWorldInverse),c=r?`scale(${i})translate(${m(-(a+s)/2)}px,${m((n+o)/2)}px)`:`translateZ(${i}px)`,u=U.current.matrixWorld;E&&((u=j.matrixWorldInverse.clone().transpose().copyPosition(u).scale(U.current.scale)).elements[3]=u.elements[7]=u.elements[11]=0,u.elements[15]=1),X.style.width=_.width+"px",X.style.height=_.height+"px",X.style.perspective=r?"":`${i}px`,q.current&&H.current&&(q.current.style.transform=`${c}${l}translate(${e}px,${t}px)`,H.current.style.transform=v(u,1/((w||10)/400)))}else{let t=void 0===w?1:function(e,t){if(t instanceof l.OrthographicCamera)return t.zoom;if(!(t instanceof l.PerspectiveCamera))return 1;{let i=u.setFromMatrixPosition(e.matrixWorld),r=h.setFromMatrixPosition(t.matrixWorld),n=t.fov*Math.PI/180,s=i.distanceTo(r);return 1/(2*Math.tan(n/2)*s)}}(U.current,j)*w;X.style.transform=`translate3d(${e[0]}px,${e[1]}px,0) scale(${t})`}V.current=e,G.current=j.zoom}}if(!J&&K.current&&!Q.current){if(b){if(q.current){let e=q.current.children[0];if(null!=e&&e.clientWidth&&null!=e&&e.clientHeight){let{isOrthographicCamera:t}=j;if(t||k)T.scale&&(Array.isArray(T.scale)?T.scale instanceof l.Vector3?K.current.scale.copy(T.scale.clone().divideScalar(1)):K.current.scale.set(1/T.scale[0],1/T.scale[1],1/T.scale[2]):K.current.scale.setScalar(1/T.scale));else{let t=(w||10)/400,i=e.clientWidth*t,r=e.clientHeight*t;K.current.scale.set(i,r,1)}Q.current=!0}}}else{let t=X.children[0];if(null!=t&&t.clientWidth&&null!=t&&t.clientHeight){let e=1/N.factor,i=t.clientWidth*e,r=t.clientHeight*e;K.current.scale.set(i,r,1),Q.current=!0}K.current.lookAt(e.camera.position)}}});let er=o.useMemo(()=>({vertexShader:b?void 0:`
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
      `}),[b]);return o.createElement("group",(0,s.Z)({},T,{ref:U}),M&&!J&&o.createElement("mesh",{castShadow:S,receiveShadow:P,ref:K},k||o.createElement("planeGeometry",null),C||o.createElement("shaderMaterial",{side:l.DoubleSide,vertexShader:er.vertexShader,fragmentShader:er.fragmentShader})))})},5250:function(e){var t,i;t="undefined"!=typeof window?window:this,i=function(){function e(){}let t=e.prototype;return t.on=function(e,t){if(!e||!t)return this;let i=this._events=this._events||{},r=i[e]=i[e]||[];return r.includes(t)||r.push(t),this},t.once=function(e,t){if(!e||!t)return this;this.on(e,t);let i=this._onceEvents=this._onceEvents||{};return(i[e]=i[e]||{})[t]=!0,this},t.off=function(e,t){let i=this._events&&this._events[e];if(!i||!i.length)return this;let r=i.indexOf(t);return -1!=r&&i.splice(r,1),this},t.emitEvent=function(e,t){let i=this._events&&this._events[e];if(!i||!i.length)return this;i=i.slice(0),t=t||[];let r=this._onceEvents&&this._onceEvents[e];for(let n of i)r&&r[n]&&(this.off(e,n),delete r[n]),n.apply(this,t);return this},t.allOff=function(){return delete this._events,delete this._onceEvents,this},e},e.exports?e.exports=i():t.EvEmitter=i()},9142:function(e,t,i){var r,n;/*!
 * imagesLoaded v5.0.0
 * JavaScript is all like "You images are done yet or what?"
 * MIT License
 */r="undefined"!=typeof window?window:this,n=function(e,t){let i=e.jQuery,r=e.console;function n(e,t,s){var o;if(!(this instanceof n))return new n(e,t,s);let a=e;if("string"==typeof e&&(a=document.querySelectorAll(e)),!a){r.error(`Bad element for imagesLoaded ${a||e}`);return}this.elements=Array.isArray(o=a)?o:"object"==typeof o&&"number"==typeof o.length?[...o]:[o],this.options={},"function"==typeof t?s=t:Object.assign(this.options,t),s&&this.on("always",s),this.getImages(),i&&(this.jqDeferred=new i.Deferred),setTimeout(this.check.bind(this))}n.prototype=Object.create(t.prototype),n.prototype.getImages=function(){this.images=[],this.elements.forEach(this.addElementImages,this)};let s=[1,9,11];n.prototype.addElementImages=function(e){"IMG"===e.nodeName&&this.addImage(e),!0===this.options.background&&this.addElementBackgroundImages(e);let{nodeType:t}=e;if(t&&s.includes(t)){for(let t of e.querySelectorAll("img"))this.addImage(t);if("string"==typeof this.options.background)for(let t of e.querySelectorAll(this.options.background))this.addElementBackgroundImages(t)}};let o=/url\((['"])?(.*?)\1\)/gi;function a(e){this.img=e}function l(e,t){this.url=e,this.element=t,this.img=new Image}return n.prototype.addElementBackgroundImages=function(e){let t=getComputedStyle(e);if(!t)return;let i=o.exec(t.backgroundImage);for(;null!==i;){let r=i&&i[2];r&&this.addBackground(r,e),i=o.exec(t.backgroundImage)}},n.prototype.addImage=function(e){let t=new a(e);this.images.push(t)},n.prototype.addBackground=function(e,t){let i=new l(e,t);this.images.push(i)},n.prototype.check=function(){if(this.progressedCount=0,this.hasAnyBroken=!1,!this.images.length){this.complete();return}let e=(e,t,i)=>{setTimeout(()=>{this.progress(e,t,i)})};this.images.forEach(function(t){t.once("progress",e),t.check()})},n.prototype.progress=function(e,t,i){this.progressedCount++,this.hasAnyBroken=this.hasAnyBroken||!e.isLoaded,this.emitEvent("progress",[this,e,t]),this.jqDeferred&&this.jqDeferred.notify&&this.jqDeferred.notify(this,e),this.progressedCount===this.images.length&&this.complete(),this.options.debug&&r&&r.log(`progress: ${i}`,e,t)},n.prototype.complete=function(){let e=this.hasAnyBroken?"fail":"done";if(this.isComplete=!0,this.emitEvent(e,[this]),this.emitEvent("always",[this]),this.jqDeferred){let e=this.hasAnyBroken?"reject":"resolve";this.jqDeferred[e](this)}},a.prototype=Object.create(t.prototype),a.prototype.check=function(){if(this.getIsImageComplete()){this.confirm(0!==this.img.naturalWidth,"naturalWidth");return}this.proxyImage=new Image,this.img.crossOrigin&&(this.proxyImage.crossOrigin=this.img.crossOrigin),this.proxyImage.addEventListener("load",this),this.proxyImage.addEventListener("error",this),this.img.addEventListener("load",this),this.img.addEventListener("error",this),this.proxyImage.src=this.img.currentSrc||this.img.src},a.prototype.getIsImageComplete=function(){return this.img.complete&&this.img.naturalWidth},a.prototype.confirm=function(e,t){this.isLoaded=e;let{parentNode:i}=this.img,r="PICTURE"===i.nodeName?i:this.img;this.emitEvent("progress",[this,r,t])},a.prototype.handleEvent=function(e){let t="on"+e.type;this[t]&&this[t](e)},a.prototype.onload=function(){this.confirm(!0,"onload"),this.unbindEvents()},a.prototype.onerror=function(){this.confirm(!1,"onerror"),this.unbindEvents()},a.prototype.unbindEvents=function(){this.proxyImage.removeEventListener("load",this),this.proxyImage.removeEventListener("error",this),this.img.removeEventListener("load",this),this.img.removeEventListener("error",this)},l.prototype=Object.create(a.prototype),l.prototype.check=function(){this.img.addEventListener("load",this),this.img.addEventListener("error",this),this.img.src=this.url,this.getIsImageComplete()&&(this.confirm(0!==this.img.naturalWidth,"naturalWidth"),this.unbindEvents())},l.prototype.unbindEvents=function(){this.img.removeEventListener("load",this),this.img.removeEventListener("error",this)},l.prototype.confirm=function(e,t){this.isLoaded=e,this.emitEvent("progress",[this,this.element,t])},n.makeJQueryPlugin=function(t){(t=t||e.jQuery)&&((i=t).fn.imagesLoaded=function(e,t){return new n(this,e,t).jqDeferred.promise(i(this))})},n.makeJQueryPlugin(),n},e.exports?e.exports=n(r,i(5250)):r.imagesLoaded=n(r,r.EvEmitter)},3589:function(e,t){"use strict";t.Z=function(e){return function(t){e.forEach(function(e){"function"==typeof e?e(t):null!=e&&(e.current=t)})}}},573:function(e,t,i){"use strict";i.d(t,{Z:function(){return c}});var r=i(959);"function"==typeof SuppressedError&&SuppressedError;let n=(e,t,i,r)=>{e.style.transition=`${t} ${i}ms ${r}`},s=(e,t,i)=>Math.min(Math.max(e,t),i);class o{constructor(e,t){this.glareAngle=0,this.glareOpacity=0,this.calculateGlareSize=e=>{let{width:t,height:i}=e,r=Math.sqrt(Math.pow(t,2)+Math.pow(i,2));return{width:r,height:r}},this.setSize=e=>{let t=this.calculateGlareSize(e);this.glareEl.style.width=`${t.width}px`,this.glareEl.style.height=`${t.height}px`},this.update=(e,t,i,r)=>{this.updateAngle(e,t.glareReverse),this.updateOpacity(e,t,i,r)},this.updateAngle=(e,t)=>{let{xPercentage:i,yPercentage:r}=e;this.glareAngle=(i?Math.atan2(r,-i)*(180/Math.PI):0)-(t?180:0)},this.updateOpacity=(e,t,i,r)=>{let{xPercentage:n,yPercentage:o}=e,{glarePosition:a,glareReverse:l,glareMaxOpacity:c}=t,u=i?-1:1,h=r?-1:1,d=l?-1:1,p=0;switch(a){case"top":p=-n*u*d;break;case"right":p=o*h*d;break;case"bottom":case void 0:p=n*u*d;break;case"left":p=-o*h*d;break;case"all":p=Math.hypot(n,o)}let m=s(p,0,100);this.glareOpacity=m*c/100},this.render=e=>{let{glareColor:t}=e;this.glareEl.style.transform=`rotate(${this.glareAngle}deg) translate(-50%, -50%)`,this.glareEl.style.opacity=this.glareOpacity.toString(),this.glareEl.style.background=`linear-gradient(0deg, rgba(255,255,255,0) 0%, ${t} 100%)`},this.glareWrapperEl=document.createElement("div"),this.glareEl=document.createElement("div"),this.glareWrapperEl.appendChild(this.glareEl),this.glareWrapperEl.className="glare-wrapper",this.glareEl.className="glare";let i=this.calculateGlareSize(e),r={position:"absolute",top:"50%",left:"50%",transformOrigin:"0% 0%",pointerEvents:"none",width:`${i.width}px`,height:`${i.height}px`};Object.assign(this.glareWrapperEl.style,{position:"absolute",top:"0",left:"0",width:"100%",height:"100%",overflow:"hidden",borderRadius:t,WebkitMaskImage:"-webkit-radial-gradient(white, black)",pointerEvents:"none"}),Object.assign(this.glareEl.style,r)}}class a{constructor(){this.glareAngle=0,this.glareOpacity=0,this.tiltAngleX=0,this.tiltAngleY=0,this.tiltAngleXPercentage=0,this.tiltAngleYPercentage=0,this.update=(e,t)=>{this.updateTilt(e,t),this.updateTiltManualInput(e,t),this.updateTiltReverse(t),this.updateTiltLimits(t)},this.updateTilt=(e,t)=>{let{xPercentage:i,yPercentage:r}=e,{tiltMaxAngleX:n,tiltMaxAngleY:s}=t;this.tiltAngleX=i*n/100,this.tiltAngleY=-(r*s/100*1)},this.updateTiltManualInput=(e,t)=>{let{tiltAngleXManual:i,tiltAngleYManual:r,tiltMaxAngleX:n,tiltMaxAngleY:s}=t;(null!==i||null!==r)&&(this.tiltAngleX=null!==i?i:0,this.tiltAngleY=null!==r?r:0,e.xPercentage=100*this.tiltAngleX/n,e.yPercentage=100*this.tiltAngleY/s)},this.updateTiltReverse=e=>{let t=e.tiltReverse?-1:1;this.tiltAngleX=t*this.tiltAngleX,this.tiltAngleY=t*this.tiltAngleY},this.updateTiltLimits=e=>{let{tiltAxis:t}=e;this.tiltAngleX=s(this.tiltAngleX,-90,90),this.tiltAngleY=s(this.tiltAngleY,-90,90),t&&(this.tiltAngleX="x"===t?this.tiltAngleX:0,this.tiltAngleY="y"===t?this.tiltAngleY:0)},this.updateTiltAnglesPercentage=e=>{let{tiltMaxAngleX:t,tiltMaxAngleY:i}=e;this.tiltAngleXPercentage=this.tiltAngleX/t*100,this.tiltAngleYPercentage=this.tiltAngleY/i*100},this.render=e=>{e.style.transform+=`rotateX(${this.tiltAngleX}deg) rotateY(${this.tiltAngleY}deg) `}}}let l=Object.assign(Object.assign({scale:1,perspective:1e3,flipVertically:!1,flipHorizontally:!1,reset:!0,transitionEasing:"cubic-bezier(.03,.98,.52,.99)",transitionSpeed:400,trackOnWindow:!1,gyroscope:!1},{tiltEnable:!0,tiltReverse:!1,tiltAngleXInitial:0,tiltAngleYInitial:0,tiltMaxAngleX:20,tiltMaxAngleY:20,tiltAxis:void 0,tiltAngleXManual:null,tiltAngleYManual:null}),{glareEnable:!1,glareMaxOpacity:.7,glareColor:"#ffffff",glarePosition:"bottom",glareReverse:!1,glareBorderRadius:"0"});class c extends r.PureComponent{constructor(){super(...arguments),this.wrapperEl={node:null,size:{width:0,height:0,left:0,top:0},clientPosition:{x:null,y:null,xPercentage:0,yPercentage:0},updateAnimationId:null,scale:1},this.tilt=null,this.glare=null,this.addDeviceOrientationEventListener=()=>{var e,t,i,r;return e=this,t=void 0,i=void 0,r=function*(){if(!window.DeviceOrientationEvent)return;let e=DeviceOrientationEvent.requestPermission;"function"==typeof e?"granted"===(yield e())&&window.addEventListener("deviceorientation",this.onMove):window.addEventListener("deviceorientation",this.onMove)},new(i||(i=Promise))(function(n,s){function o(e){try{l(r.next(e))}catch(e){s(e)}}function a(e){try{l(r.throw(e))}catch(e){s(e)}}function l(e){var t;e.done?n(e.value):((t=e.value)instanceof i?t:new i(function(e){e(t)})).then(o,a)}l((r=r.apply(e,t||[])).next())})},this.setSize=()=>{this.setWrapperElSize(),this.glare&&this.glare.setSize(this.wrapperEl.size)},this.mainLoop=e=>{null!==this.wrapperEl.updateAnimationId&&cancelAnimationFrame(this.wrapperEl.updateAnimationId),this.processInput(e),this.update(e.type),this.wrapperEl.updateAnimationId=requestAnimationFrame(this.renderFrame)},this.onEnter=e=>{let{onEnter:t}=this.props;this.setSize(),this.wrapperEl.node.style.willChange="transform",this.setTransitions(),t&&t(e.type)},this.onMove=e=>{this.mainLoop(e),this.emitOnMove(e)},this.onLeave=e=>{let{onLeave:t}=this.props;if(this.setTransitions(),t&&t(e.type),this.props.reset){let e=new CustomEvent("autoreset");this.onMove(e)}},this.processInput=e=>{let{scale:t}=this.props;switch(e.type){case"mousemove":this.wrapperEl.clientPosition.x=e.pageX,this.wrapperEl.clientPosition.y=e.pageY,this.wrapperEl.scale=t;break;case"touchmove":this.wrapperEl.clientPosition.x=e.touches[0].pageX,this.wrapperEl.clientPosition.y=e.touches[0].pageY,this.wrapperEl.scale=t;break;case"deviceorientation":this.processInputDeviceOrientation(e),this.wrapperEl.scale=t;break;case"autoreset":let{tiltAngleXInitial:i,tiltAngleYInitial:r,tiltMaxAngleX:n,tiltMaxAngleY:o}=this.props;this.wrapperEl.clientPosition.xPercentage=s(i/n*100,-100,100),this.wrapperEl.clientPosition.yPercentage=s(r/o*100,-100,100),this.wrapperEl.scale=1}},this.processInputDeviceOrientation=e=>{if(!e.gamma||!e.beta||!this.props.gyroscope)return;let{tiltMaxAngleX:t,tiltMaxAngleY:i}=this.props,r=e.gamma;this.wrapperEl.clientPosition.xPercentage=e.beta/t*100,this.wrapperEl.clientPosition.yPercentage=r/i*100,this.wrapperEl.clientPosition.xPercentage=s(this.wrapperEl.clientPosition.xPercentage,-100,100),this.wrapperEl.clientPosition.yPercentage=s(this.wrapperEl.clientPosition.yPercentage,-100,100)},this.update=e=>{let{tiltEnable:t,flipVertically:i,flipHorizontally:r}=this.props;"autoreset"!==e&&"deviceorientation"!==e&&"propChange"!==e&&this.updateClientInput(),t&&this.tilt.update(this.wrapperEl.clientPosition,this.props),this.updateFlip(),this.tilt.updateTiltAnglesPercentage(this.props),this.glare&&this.glare.update(this.wrapperEl.clientPosition,this.props,i,r)},this.updateClientInput=()=>{let e,t;let{trackOnWindow:i}=this.props;if(i){let{x:i,y:r}=this.wrapperEl.clientPosition;e=r/window.innerHeight*200-100,t=i/window.innerWidth*200-100}else{let{size:{width:i,height:r,left:n,top:s},clientPosition:{x:o,y:a}}=this.wrapperEl;e=(a-s)/r*200-100,t=(o-n)/i*200-100}this.wrapperEl.clientPosition.xPercentage=s(e,-100,100),this.wrapperEl.clientPosition.yPercentage=s(t,-100,100)},this.updateFlip=()=>{let{flipVertically:e,flipHorizontally:t}=this.props;e&&(this.tilt.tiltAngleX+=180,this.tilt.tiltAngleY*=-1),t&&(this.tilt.tiltAngleY+=180)},this.renderFrame=()=>{this.resetWrapperElTransform(),this.renderPerspective(),this.tilt.render(this.wrapperEl.node),this.renderScale(),this.glare&&this.glare.render(this.props)}}componentDidMount(){if(this.tilt=new a,this.initGlare(),this.addEventListeners(),"undefined"==typeof CustomEvent)return;let e=new CustomEvent("autoreset");this.mainLoop(e);let t=new CustomEvent("initial");this.emitOnMove(t)}componentWillUnmount(){null!==this.wrapperEl.updateAnimationId&&cancelAnimationFrame(this.wrapperEl.updateAnimationId),this.removeEventListeners()}componentDidUpdate(){let e=new CustomEvent("propChange");this.mainLoop(e),this.emitOnMove(e)}addEventListeners(){let{trackOnWindow:e,gyroscope:t}=this.props;window.addEventListener("resize",this.setSize),e&&(window.addEventListener("mouseenter",this.onEnter),window.addEventListener("mousemove",this.onMove),window.addEventListener("mouseout",this.onLeave),window.addEventListener("touchstart",this.onEnter),window.addEventListener("touchmove",this.onMove),window.addEventListener("touchend",this.onLeave)),t&&this.addDeviceOrientationEventListener()}removeEventListeners(){let{trackOnWindow:e,gyroscope:t}=this.props;window.removeEventListener("resize",this.setSize),e&&(window.removeEventListener("mouseenter",this.onEnter),window.removeEventListener("mousemove",this.onMove),window.removeEventListener("mouseout",this.onLeave),window.removeEventListener("touchstart",this.onEnter),window.removeEventListener("touchmove",this.onMove),window.removeEventListener("touchend",this.onLeave)),t&&window.DeviceOrientationEvent&&window.removeEventListener("deviceorientation",this.onMove)}setWrapperElSize(){let e=this.wrapperEl.node.getBoundingClientRect();this.wrapperEl.size.width=this.wrapperEl.node.offsetWidth,this.wrapperEl.size.height=this.wrapperEl.node.offsetHeight,this.wrapperEl.size.left=e.left+window.scrollX,this.wrapperEl.size.top=e.top+window.scrollY}initGlare(){let{glareEnable:e,glareBorderRadius:t}=this.props;e&&(this.glare=new o(this.wrapperEl.size,t),this.wrapperEl.node.appendChild(this.glare.glareWrapperEl))}emitOnMove(e){let{onMove:t}=this.props;if(!t)return;let i=0,r=0;this.glare&&(i=this.glare.glareAngle,r=this.glare.glareOpacity),t({tiltAngleX:this.tilt.tiltAngleX,tiltAngleY:this.tilt.tiltAngleY,tiltAngleXPercentage:this.tilt.tiltAngleXPercentage,tiltAngleYPercentage:this.tilt.tiltAngleYPercentage,glareAngle:i,glareOpacity:r,eventType:e.type})}resetWrapperElTransform(){this.wrapperEl.node.style.transform=""}renderPerspective(){let{perspective:e}=this.props;this.wrapperEl.node.style.transform+=`perspective(${e}px) `}renderScale(){let{scale:e}=this.wrapperEl;this.wrapperEl.node.style.transform+=`scale3d(${e},${e},${e})`}setTransitions(){let{transitionSpeed:e,transitionEasing:t}=this.props;n(this.wrapperEl.node,"all",e,t),this.glare&&n(this.glare.glareEl,"opacity",e,t)}render(){let{children:e,className:t,style:i}=this.props;return r.createElement("div",{ref:e=>this.wrapperEl.node=e,onMouseEnter:this.onEnter,onMouseMove:this.onMove,onMouseLeave:this.onLeave,onTouchStart:this.onEnter,onTouchMove:this.onMove,onTouchEnd:this.onLeave,className:t,style:i},e)}}c.defaultProps=l},9175:function(e,t,i){"use strict";i.d(t,{Z5:function(){return r.Z5},q:function(){return x},q_:function(){return r.q_}});var r=i(8834),n=i(422),s=i(9912),o=i(6270),a=/^--/,l={},c={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},u=(e,t)=>e+t.charAt(0).toUpperCase()+t.substring(1),h=["Webkit","Ms","Moz","O"];c=Object.keys(c).reduce((e,t)=>(h.forEach(i=>e[u(i,t)]=e[t]),e),c);var d=/^(matrix|translate|scale|rotate|skew)/,p=/^(translate)/,m=/^(rotate|skew)/,f=(e,t)=>s.is.num(e)&&0!==e?e+t:e,g=(e,t)=>s.is.arr(e)?e.every(e=>g(e,t)):s.is.num(e)?e===t:parseFloat(e)===t,v=class extends o.rS{constructor({x:e,y:t,z:i,...r}){let n=[],o=[];(e||t||i)&&(n.push([e||0,t||0,i||0]),o.push(e=>[`translate3d(${e.map(e=>f(e,"px")).join(",")})`,g(e,0)])),(0,s.rU)(r,(e,t)=>{if("transform"===t)n.push([e||""]),o.push(e=>[e,""===e]);else if(d.test(t)){if(delete r[t],s.is.und(e))return;let i=p.test(t)?"px":m.test(t)?"deg":"";n.push((0,s.qo)(e)),o.push("rotate3d"===t?([e,t,r,n])=>[`rotate3d(${e},${t},${r},${f(n,i)})`,g(n,0)]:e=>[`${t}(${e.map(e=>f(e,i)).join(",")})`,g(e,t.startsWith("scale")?1:0)])}}),n.length&&(r.transform=new y(n,o)),super(r)}},y=class extends s.B0{constructor(e,t){super(),this.inputs=e,this.transforms=t,this._value=null}get(){return this._value||(this._value=this._get())}_get(){let e="",t=!0;return(0,s.S6)(this.inputs,(i,r)=>{let n=(0,s.je)(i[0]),[o,a]=this.transforms[r](s.is.arr(n)?n:i.map(s.je));e+=" "+o,t=t&&a}),t?"none":e}observerAdded(e){1==e&&(0,s.S6)(this.inputs,e=>(0,s.S6)(e,e=>(0,s.j$)(e)&&(0,s.UI)(e,this)))}observerRemoved(e){0==e&&(0,s.S6)(this.inputs,e=>(0,s.S6)(e,e=>(0,s.j$)(e)&&(0,s.iL)(e,this)))}eventObserved(e){"change"==e.type&&(this._value=null),(0,s.k0)(this,e)}};r.OH.assign({batchedUpdates:n.unstable_batchedUpdates,createStringInterpolator:s.qS,colors:s.O9});var x=(0,o.Ld)(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"],{applyAnimatedValues:function(e,t){if(!e.nodeType||!e.setAttribute)return!1;let i="filter"===e.nodeName||e.parentNode&&"filter"===e.parentNode.nodeName,{style:r,children:n,scrollTop:s,scrollLeft:o,viewBox:u,...h}=t,d=Object.values(h),p=Object.keys(h).map(t=>i||e.hasAttribute(t)?t:l[t]||(l[t]=t.replace(/([A-Z])/g,e=>"-"+e.toLowerCase())));for(let t in void 0!==n&&(e.textContent=n),r)if(r.hasOwnProperty(t)){var m;let i=null==(m=r[t])||"boolean"==typeof m||""===m?"":"number"!=typeof m||0===m||a.test(t)||c.hasOwnProperty(t)&&c[t]?(""+m).trim():m+"px";a.test(t)?e.style.setProperty(t,i):e.style[t]=i}p.forEach((t,i)=>{e.setAttribute(t,d[i])}),void 0!==s&&(e.scrollTop=s),void 0!==o&&(e.scrollLeft=o),void 0!==u&&e.setAttribute("viewBox",u)},createAnimatedStyle:e=>new v(e),getComponentProps:({scrollTop:e,scrollLeft:t,...i})=>i}).animated}}]);