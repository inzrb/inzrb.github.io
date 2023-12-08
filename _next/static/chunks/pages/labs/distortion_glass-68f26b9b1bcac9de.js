(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4222],{2377:function(e,t,r){"use strict";r.d(t,{E:function(){return Image}});var a=r(8126),n=r(959),i=r(4771),o=r(5542),s=r(33),l=r(3156);let c=(0,s.g)({color:new i.Color("white"),scale:[1,1],imageBounds:[1,1],map:null,zoom:1,grayscale:0,opacity:1},`
  varying vec2 vUv;
  void main() {
    gl_Position = projectionMatrix * viewMatrix * modelMatrix * vec4(position, 1.);
    vUv = uv;
  }
`,`
  // mostly from https://gist.github.com/statico/df64c5d167362ecf7b34fca0b1459a44
  varying vec2 vUv;
  uniform vec2 scale;
  uniform vec2 imageBounds;
  uniform vec3 color;
  uniform sampler2D map;
  uniform float zoom;
  uniform float grayscale;
  uniform float opacity;
  const vec3 luma = vec3(.299, 0.587, 0.114);
  vec4 toGrayscale(vec4 color, float intensity) {
    return vec4(mix(color.rgb, vec3(dot(color.rgb, luma)), intensity), color.a);
  }
  vec2 aspect(vec2 size) {
    return size / min(size.x, size.y);
  }
  void main() {
    vec2 s = aspect(scale);
    vec2 i = aspect(imageBounds);
    float rs = s.x / s.y;
    float ri = i.x / i.y;
    vec2 new = rs < ri ? vec2(i.x * s.y / i.y, s.y) : vec2(s.x, i.y * s.x / i.x);
    vec2 offset = (rs < ri ? vec2((new.x - s.x) / 2.0, 0.0) : vec2(0.0, (new.y - s.y) / 2.0)) / new;
    vec2 uv = vUv * s / new + offset;
    vec2 zUv = (uv - vec2(0.5, 0.5)) / zoom + vec2(0.5, 0.5);
    gl_FragColor = toGrayscale(texture2D(map, zUv) * vec4(color, opacity), grayscale);
    
    #include <tonemapping_fragment>
    #include <${parseInt(i.REVISION.replace(/\D+/g,""))>=154?"colorspace_fragment":"encodings_fragment"}>
  }
`),u=n.forwardRef(({children:e,color:t,segments:r=1,scale:i=1,zoom:s=1,grayscale:l=0,opacity:u=1,texture:m,toneMapped:f,transparent:d,...p},v)=>{(0,o.e)({ImageMaterial:c});let h=Array.isArray(i)?[i[0],i[1]]:[i,i],x=[m.image.width,m.image.height];return n.createElement("mesh",(0,a.Z)({ref:v,scale:Array.isArray(i)?[...i,1]:i},p),n.createElement("planeGeometry",{args:[1,1,r,r]}),n.createElement("imageMaterial",{color:t,map:m,zoom:s,grayscale:l,opacity:u,scale:h,imageBounds:x,toneMapped:f,transparent:d}),e)}),m=n.forwardRef(({url:e,...t},r)=>{let i=(0,l.m)(e);return n.createElement(u,(0,a.Z)({},t,{texture:i,ref:r}))}),f=n.forwardRef(({url:e,...t},r)=>n.createElement(u,(0,a.Z)({},t,{ref:r}))),Image=n.forwardRef((e,t)=>{if(e.url)return n.createElement(m,(0,a.Z)({},e,{ref:t}));if(e.texture)return n.createElement(f,(0,a.Z)({},e,{ref:t}));throw Error("<Image /> requires a url or texture")})},8981:function(e,t,r){"use strict";r.d(t,{K4:function(){return w},EJ:function(){return S}});var a=r(8126),n=r(4771),i=r(959),o=r(5542),s=r(3589),l=r(507),c=r.n(l);c().func.isRequired,c().arrayOf(c().oneOfType([c().element,c().func])).isRequired;let u=new n.Matrix4,m=new n.Matrix4,f=[],d=new n.Mesh;class p extends n.Group{constructor(){super(),this.color=new n.Color("white"),this.instance={current:void 0},this.instanceKey={current:void 0}}get geometry(){var e;return null==(e=this.instance.current)?void 0:e.geometry}raycast(e,t){let r=this.instance.current;if(!r||!r.geometry||!r.material)return;d.geometry=r.geometry;let a=r.matrixWorld,i=r.userData.instances.indexOf(this.instanceKey);if(-1!==i&&!(i>r.count)){r.getMatrixAt(i,u),m.multiplyMatrices(a,u),d.matrixWorld=m,r.material instanceof n.Material?d.material.side=r.material.side:d.material.side=r.material[0].side,d.raycast(e,f);for(let e=0,r=f.length;e<r;e++){let r=f[e];r.instanceId=i,r.object=this,t.push(r)}f.length=0}}}let v=i.createContext(null),h=new n.Matrix4,x=new n.Matrix4,g=new n.Matrix4,y=new n.Vector3,b=new n.Quaternion,M=new n.Vector3,w=i.forwardRef(({context:e,children:t,...r},n)=>{i.useMemo(()=>(0,o.e)({PositionMesh:p}),[]);let l=i.useRef(),{subscribe:c,getParent:u}=i.useContext(e||v);return i.useLayoutEffect(()=>c(l),[]),i.createElement("positionMesh",(0,a.Z)({instance:u(),instanceKey:l,ref:(0,s.Z)([n,l])},r),t)}),S=i.forwardRef(({children:e,range:t,limit:r=1e3,frames:l=1/0,...c},u)=>{let[{context:m,instance:f}]=i.useState(()=>{let e=i.createContext(null);return{context:e,instance:i.forwardRef((t,r)=>i.createElement(w,(0,a.Z)({context:e},t,{ref:r})))}}),d=i.useRef(null),[p,S]=i.useState([]),[[C,E]]=i.useState(()=>{let e=new Float32Array(16*r);for(let t=0;t<r;t++)g.identity().toArray(e,16*t);return[e,new Float32Array([...Array(3*r)].map(()=>1))]});i.useEffect(()=>{d.current.instanceMatrix.needsUpdate=!0});let R=0,j=0;(0,o.A)(()=>{if(l===1/0||R<l){d.current.updateMatrix(),d.current.updateMatrixWorld(),h.copy(d.current.matrixWorld).invert(),j=Math.min(r,void 0!==t?t:r,p.length),d.current.count=j,d.current.instanceMatrix.updateRange.count=16*j,d.current.instanceColor.updateRange.count=3*j;for(let e=0;e<p.length;e++){let t=p[e].current;t.matrixWorld.decompose(y,b,M),x.compose(y,b,M).premultiply(h),x.toArray(C,16*e),d.current.instanceMatrix.needsUpdate=!0,t.color.toArray(E,3*e),d.current.instanceColor.needsUpdate=!0}R++}});let _=i.useMemo(()=>({getParent:()=>d,subscribe:e=>(S(t=>[...t,e]),()=>S(t=>t.filter(t=>t.current!==e.current)))}),[]);return i.createElement("instancedMesh",(0,a.Z)({userData:{instances:p},matrixAutoUpdate:!1,ref:(0,s.Z)([u,d]),args:[null,null,0],raycast:()=>null},c),i.createElement("instancedBufferAttribute",{attach:"instanceMatrix",count:C.length/16,array:C,itemSize:16,usage:n.DynamicDrawUsage}),i.createElement("instancedBufferAttribute",{attach:"instanceColor",count:E.length/3,array:E,itemSize:3,usage:n.DynamicDrawUsage}),"function"==typeof e?i.createElement(m.Provider,{value:_},e(f)):i.createElement(v.Provider,{value:_},e))})},3276:function(e,t,r){"use strict";r.d(t,{z:function(){return u}});var a=r(8126),n=r(4771),i=r(959),o=r(5542),s=r(1223),l=r(9842);class c extends n.MeshPhysicalMaterial{constructor(e=6,t=!1){super(),this.uniforms={chromaticAberration:{value:.05},transmission:{value:0},_transmission:{value:1},transmissionMap:{value:null},roughness:{value:0},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:1/0},attenuationColor:{value:new n.Color("white")},anisotropicBlur:{value:.1},time:{value:0},distortion:{value:0},distortionScale:{value:.5},temporalDistortion:{value:0},buffer:{value:null}},this.onBeforeCompile=r=>{r.uniforms={...r.uniforms,...this.uniforms},this.anisotropy>0&&(r.defines.USE_ANISOTROPY=""),t?r.defines.USE_SAMPLER="":r.defines.USE_TRANSMISSION="",r.fragmentShader=`
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
`+r.fragmentShader,r.fragmentShader=r.fragmentShader.replace("#include <transmission_pars_fragment>",`
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
`),r.fragmentShader=r.fragmentShader.replace("#include <transmission_fragment>",`  
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
`)},Object.keys(this.uniforms).forEach(e=>Object.defineProperty(this,e,{get:()=>this.uniforms[e].value,set:t=>this.uniforms[e].value=t}))}}let u=i.forwardRef(({buffer:e,transmissionSampler:t=!1,backside:r=!1,side:u=n.FrontSide,transmission:m=1,thickness:f=0,backsideThickness:d=0,samples:p=10,resolution:v,backsideResolution:h,background:x,anisotropy:g,anisotropicBlur:y,...b},M)=>{let w,S,C;(0,o.e)({MeshTransmissionMaterial:c});let E=i.useRef(null),[R]=i.useState(()=>new l.l),j=(0,s.R)(h||v),_=(0,s.R)(v);return(0,o.A)(e=>{E.current.time=e.clock.getElapsedTime(),E.current.buffer===_.texture&&!t&&(C=E.current.__r3f.parent)&&(S=e.gl.toneMapping,w=e.scene.background,e.gl.toneMapping=n.NoToneMapping,x&&(e.scene.background=x),C.material=R,r&&(e.gl.setRenderTarget(j),e.gl.render(e.scene,e.camera),C.material=E.current,C.material.buffer=j.texture,C.material.thickness=d,C.material.side=n.BackSide),e.gl.setRenderTarget(_),e.gl.render(e.scene,e.camera),C.material=E.current,C.material.thickness=f,C.material.side=u,C.material.buffer=_.texture,e.scene.background=w,e.gl.setRenderTarget(null),e.gl.toneMapping=S)}),i.useImperativeHandle(M,()=>E.current,[]),i.createElement("meshTransmissionMaterial",(0,a.Z)({args:[p,t],ref:E},b,{buffer:e||_.texture,_transmission:m,anisotropicBlur:null!=y?y:g,transmission:t?m:0,thickness:f,side:u}))})},33:function(e,t,r){"use strict";r.d(t,{g:function(){return n}});var a=r(4771);function n(e,t,r,n){let i=class extends a.ShaderMaterial{constructor(i={}){let o=Object.entries(e);super({uniforms:o.reduce((e,[t,r])=>{let n=a.UniformsUtils.clone({[t]:{value:r}});return{...e,...n}},{}),vertexShader:t,fragmentShader:r}),this.key="",o.forEach(([e])=>Object.defineProperty(this,e,{get:()=>this.uniforms[e].value,set:t=>this.uniforms[e].value=t})),Object.assign(this,i),n&&n(this)}};return i.key=a.MathUtils.generateUUID(),i}},3387:function(e,t,r){"use strict";r.d(t,{xu:function(){return s}});var a=r(8126),n=r(959),i=r(4771);function o(e,t){let r=e+"Geometry";return n.forwardRef(({args:e,children:i,...o},s)=>{let l=n.useRef(null);return n.useImperativeHandle(s,()=>l.current),n.useLayoutEffect(()=>void(null==t||t(l.current))),n.createElement("mesh",(0,a.Z)({ref:l},o),n.createElement(r,{attach:"geometry",args:e}),i)})}let s=o("box");o("circle"),o("cone"),o("cylinder"),o("sphere"),o("plane"),o("tube"),o("torus"),o("torusKnot"),o("tetrahedron"),o("ring"),o("polyhedron"),o("icosahedron"),o("octahedron"),o("dodecahedron"),o("extrude"),o("lathe"),o("capsule"),o("shape",({geometry:e})=>{let t=e.attributes.position,r=new i.Box3().setFromBufferAttribute(t),a=new i.Vector3;r.getSize(a);let n=[],o=0,s=0,l=0,c=0;for(let e=0;e<t.count;e++)o=t.getX(e),s=t.getY(e),l=(o-r.min.x)/a.x,c=(s-r.min.y)/a.y,n.push(l,c);e.setAttribute("uv",new i.Float32BufferAttribute(n,2))})},1223:function(e,t,r){"use strict";r.d(t,{R:function(){return o}});var a=r(959),n=r(4771),i=r(5542);function o(e,t,r){let o=(0,i.z)(e=>e.size),s=(0,i.z)(e=>e.viewport),l="number"==typeof e?e:o.width*s.dpr,c="number"==typeof t?t:o.height*s.dpr,u=("number"==typeof e?r:e)||{},{samples:m=0,depth:f,...d}=u,p=a.useMemo(()=>{let e=new n.WebGLRenderTarget(l,c,{minFilter:n.LinearFilter,magFilter:n.LinearFilter,type:n.HalfFloatType,...d});return f&&(e.depthTexture=new n.DepthTexture(l,c,n.FloatType)),e.samples=m,e},[]);return a.useLayoutEffect(()=>{p.setSize(l,c),m&&(p.samples=m)},[m,p,l,c]),a.useEffect(()=>()=>p.dispose(),[]),p}},3156:function(e,t,r){"use strict";r.d(t,{m:function(){return s}});var a=r(4771),n=r(5542),i=r(959);let o=e=>e===Object(e)&&!Array.isArray(e)&&"function"!=typeof e;function s(e,t){let r=(0,n.z)(e=>e.gl),s=(0,n.D)(a.TextureLoader,o(e)?Object.values(e):e);if((0,i.useLayoutEffect)(()=>{null==t||t(s)},[t]),(0,i.useEffect)(()=>{if("initTexture"in r){let e=Array.isArray(s)?s:[s];e.forEach(r.initTexture)}},[r,s]),!o(e))return s;{let t=Object.keys(e),r={};return t.forEach(e=>Object.assign(r,{[e]:s[t.indexOf(e)]})),r}}s.preload=e=>n.D.preload(a.TextureLoader,e),s.clear=e=>n.D.clear(a.TextureLoader,e)},9842:function(e,t,r){"use strict";r.d(t,{l:function(){return n}});var a=r(33);let n=(0,a.g)({},"void main() { }","void main() { gl_FragColor = vec4(0.0, 0.0, 0.0, 0.0); discard;  }")},995:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/labs/distortion_glass",function(){return r(4933)}])},6687:function(e,t,r){"use strict";var a=r(1527),n=r(959),i=r(5542),o=r(3387);t.Z=e=>{let t,{size:r,scale:s}=e,l=(0,n.useRef)();return(0,i.A)((e,t)=>{l.current.rotation.x=l.current.rotation.y+=t*Math.PI}),null!==r?t=r:s&&(console.log(s),t=s.xy.min()),(0,a.jsx)(o.xu,{ref:l,scale:t,children:(0,a.jsx)("meshNormalMaterial",{})})}},4933:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return v}});var a=r(1527),n=r(83),i=r(5542),o=r(670),s=r(2377),l=r(8981),c=r(3276),u=r(959),m=r(4806),f=r(7848),d=r.n(f),p=r(6687);function v(){return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(d(),{children:(0,a.jsx)("title",{children:"Labs - Distortion Glass"})}),(0,a.jsx)("section",{className:"lab_show",children:(0,a.jsx)(n.Xz,{flat:!0,shadows:!0,dpr:[1,1.5],camera:{position:[0,0,8],fov:45,near:1,far:45},eventPrefix:"client",children:(0,a.jsxs)(u.Suspense,{fallback:(0,a.jsx)(p.Z,{size:.4}),children:[(0,a.jsx)("ambientLight",{intensity:1}),(0,a.jsx)(h,{})]})})})]})}function h(){let{nodes:e}=(0,o.L)("/models/ribbed-glass.glb"),t=(0,o.L)("/models/rhombus-glass.glb"),r=(0,o.L)("/models/diamond.glb"),{width:n,height:f}=(0,i.z)(e=>e.viewport),d=(0,u.useRef)(),p=(0,m.M4)({image:{options:{范例图1:"exp_1.jpg",范例图2:"exp_2.jpg",范例图3:"exp_3.jpg",范例图4:"exp_4.jpg",范例图5:"exp_5.jpg"},value:"exp_1.jpg",label:"背景图"},transmission:{value:1,min:0,max:1,label:"透明度"},roughness:{value:0,min:0,max:1,step:.01,label:"粗糙度"},thickness:{value:1.8,min:0,max:5,step:.01,label:"厚度"},clearcoat:{value:1,min:0,max:1,label:"清漆"},distortion:{value:0,min:0,max:5,step:.1,label:"扭曲"},distortionScale:{value:0,min:0,max:5,step:.1,label:"扭曲程度"},temporalDistortion:{value:0,min:0,max:5,step:.1,label:"扭曲运动"},chromaticAberration:{value:.15,min:0,max:1,label:"色差"},ior:{value:1.45,min:1,max:5,step:.01,label:"折射率"},color:{value:"#ffffff",label:"颜色"},displaceType:{options:{Ribbed风格:"ribbed",Reeded风格:"reeded",Rhombus风格:"rhombus",Diamond风格:"diamond"},value:"ribbed",label:"玻璃风格"}});return(0,a.jsxs)("group",{children:[(0,a.jsx)(s.E,{scale:[n,f,1],url:"/assets/images/labs/distort_glass/"+p.image}),"ribbed"===p.displaceType&&(0,a.jsxs)(l.EJ,{geometry:e.Plane002.geometry,ref:d,children:[(0,a.jsx)(c.z,{toneMapped:!0,...p}),(0,a.jsx)(l.K4,{scale:[.8,.05,.15],position:[0,0,.2]})]}),"reeded"===p.displaceType&&(0,a.jsxs)(l.EJ,{position:[0,0,.5656],ref:d,children:[(0,a.jsx)("cylinderGeometry",{args:[.2828,.2828,f,32]}),(0,a.jsx)(c.z,{toneMapped:!0,...p}),Array(20).fill(null).map((e,t)=>(0,a.jsx)(l.K4,{rotation:[0,.25*Math.PI,0],position:[-5+(t+1)*.5656,0,0]},t))]}),"rhombus"===p.displaceType&&(0,a.jsxs)(l.EJ,{geometry:t.nodes.plane.geometry,ref:d,children:[(0,a.jsx)(c.z,{toneMapped:!0,...p}),(0,a.jsx)(l.K4,{scale:[1,1,2],position:[0,0,.5]})]}),"diamond"===p.displaceType&&(0,a.jsx)("mesh",{geometry:r.nodes.Cylinder_diamond_0.geometry,ref:d,scale:2,"rotation-x":-(.5*Math.PI),position:[0,0,2],children:(0,a.jsx)(c.z,{toneMapped:!0,...p})})]})}},7848:function(e,t,r){e.exports=r(3397)},3589:function(e,t){"use strict";t.Z=function(e){return function(t){e.forEach(function(e){"function"==typeof e?e(t):null!=e&&(e.current=t)})}}}},function(e){e.O(0,[511,83,3045,670,8517,9774,2888,179],function(){return e(e.s=995)}),_N_E=e.O()}]);