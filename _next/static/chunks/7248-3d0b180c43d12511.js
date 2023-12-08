"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7248],{3276:function(e,t,r){r.d(t,{z:function(){return u}});var n=r(8126),a=r(4771),o=r(959),i=r(5542),s=r(1223),l=r(9842);class c extends a.MeshPhysicalMaterial{constructor(e=6,t=!1){super(),this.uniforms={chromaticAberration:{value:.05},transmission:{value:0},_transmission:{value:1},transmissionMap:{value:null},roughness:{value:0},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:1/0},attenuationColor:{value:new a.Color("white")},anisotropicBlur:{value:.1},time:{value:0},distortion:{value:0},distortionScale:{value:.5},temporalDistortion:{value:0},buffer:{value:null}},this.onBeforeCompile=r=>{r.uniforms={...r.uniforms,...this.uniforms},this.anisotropy>0&&(r.defines.USE_ANISOTROPY=""),t?r.defines.USE_SAMPLER="":r.defines.USE_TRANSMISSION="",r.fragmentShader=`
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
`)},Object.keys(this.uniforms).forEach(e=>Object.defineProperty(this,e,{get:()=>this.uniforms[e].value,set:t=>this.uniforms[e].value=t}))}}let u=o.forwardRef(({buffer:e,transmissionSampler:t=!1,backside:r=!1,side:u=a.FrontSide,transmission:f=1,thickness:m=0,backsideThickness:d=0,samples:h=10,resolution:p,backsideResolution:v,background:g,anisotropy:x,anisotropicBlur:y,...w},b)=>{let S,M,C;(0,i.e)({MeshTransmissionMaterial:c});let R=o.useRef(null),[O]=o.useState(()=>new l.l),k=(0,s.R)(v||p),j=(0,s.R)(p);return(0,i.A)(e=>{R.current.time=e.clock.getElapsedTime(),R.current.buffer===j.texture&&!t&&(C=R.current.__r3f.parent)&&(M=e.gl.toneMapping,S=e.scene.background,e.gl.toneMapping=a.NoToneMapping,g&&(e.scene.background=g),C.material=O,r&&(e.gl.setRenderTarget(k),e.gl.render(e.scene,e.camera),C.material=R.current,C.material.buffer=k.texture,C.material.thickness=d,C.material.side=a.BackSide),e.gl.setRenderTarget(j),e.gl.render(e.scene,e.camera),C.material=R.current,C.material.thickness=m,C.material.side=u,C.material.buffer=j.texture,e.scene.background=S,e.gl.setRenderTarget(null),e.gl.toneMapping=M)}),o.useImperativeHandle(b,()=>R.current,[]),o.createElement("meshTransmissionMaterial",(0,n.Z)({args:[h,t],ref:R},w,{buffer:e||j.texture,_transmission:f,anisotropicBlur:null!=y?y:x,transmission:t?f:0,thickness:m,side:u}))})},33:function(e,t,r){r.d(t,{g:function(){return a}});var n=r(4771);function a(e,t,r,a){let o=class extends n.ShaderMaterial{constructor(o={}){let i=Object.entries(e);super({uniforms:i.reduce((e,[t,r])=>{let a=n.UniformsUtils.clone({[t]:{value:r}});return{...e,...a}},{}),vertexShader:t,fragmentShader:r}),this.key="",i.forEach(([e])=>Object.defineProperty(this,e,{get:()=>this.uniforms[e].value,set:t=>this.uniforms[e].value=t})),Object.assign(this,o),a&&a(this)}};return o.key=n.MathUtils.generateUUID(),o}},9842:function(e,t,r){r.d(t,{l:function(){return a}});var n=r(33);let a=(0,n.g)({},"void main() { }","void main() { gl_FragColor = vec4(0.0, 0.0, 0.0, 0.0); discard;  }")},7784:function(e,t,r){r.d(t,{DM:function(){return m},h8:function(){return v},jc:function(){return p},ln:function(){return d},o5:function(){return h}});let n=Symbol(),a=Symbol(),o=(e,t)=>new Proxy(e,t),i=Object.getPrototypeOf,s=new WeakMap,l=e=>e&&(s.has(e)?s.get(e):i(e)===Object.prototype||i(e)===Array.prototype),c=e=>"object"==typeof e&&null!==e,u=e=>{if(Array.isArray(e))return Array.from(e);let t=Object.getOwnPropertyDescriptors(e);return Object.values(t).forEach(e=>{e.configurable=!0}),Object.create(i(e),t)},f=e=>e[a]||e,m=(e,t,r,i)=>{if(!l(e))return e;let s=i&&i.get(e);if(!s){let t=f(e);s=Object.values(Object.getOwnPropertyDescriptors(t)).some(e=>!e.configurable&&!e.writable)?[t,u(t)]:[t],null==i||i.set(e,s)}let[c,d]=s,h=r&&r.get(c);return h&&!!d===h[1].f||((h=((e,t)=>{let r={f:t},o=!1,i=(t,n)=>{if(!o){let a=r.a.get(e);if(a||(a={},r.a.set(e,a)),"w"===t)a.w=!0;else{let e=a[t];e||(e=new Set,a[t]=e),e.add(n)}}},s={get:(t,n)=>n===a?e:(i("k",n),m(Reflect.get(t,n),r.a,r.c,r.t)),has:(t,a)=>a===n?(o=!0,r.a.delete(e),!0):(i("h",a),Reflect.has(t,a)),getOwnPropertyDescriptor:(e,t)=>(i("o",t),Reflect.getOwnPropertyDescriptor(e,t)),ownKeys:e=>(i("w"),Reflect.ownKeys(e))};return t&&(s.set=s.deleteProperty=()=>!1),[s,r]})(c,!!d))[1].p=o(d||c,h[0]),r&&r.set(c,h)),h[1].a=t,h[1].c=r,h[1].t=i,h[1].p},d=(e,t,r,n)=>{if(Object.is(e,t))return!1;if(!c(e)||!c(t))return!0;let a=r.get(f(e));if(!a)return!0;if(n){let r=n.get(e);if(r&&r.n===t)return r.g;n.set(e,{n:t,g:!1})}let o=null;try{for(let r of a.h||[])if(o=Reflect.has(e,r)!==Reflect.has(t,r))return o;if(!0===a.w){if(o=((e,t)=>{let r=Reflect.ownKeys(e),n=Reflect.ownKeys(t);return r.length!==n.length||r.some((e,t)=>e!==n[t])})(e,t))return o}else for(let r of a.o||[])if(o=!!Reflect.getOwnPropertyDescriptor(e,r)!=!!Reflect.getOwnPropertyDescriptor(t,r))return o;for(let i of a.k||[])if(o=d(e[i],t[i],r,n))return o;return null===o&&(o=!0),o}finally{n&&n.set(e,{n:t,g:o})}},h=e=>l(e)&&e[a]||null,p=(e,t=!0)=>{s.set(e,t)},v=(e,t,r)=>{let n=[],a=new WeakSet,o=(e,i)=>{if(a.has(e))return;c(e)&&a.add(e);let s=c(e)&&t.get(f(e));if(s){var l,u,m;if(null==(l=s.h)||l.forEach(e=>{let t=`:has(${String(e)})`;n.push(i?[...i,t]:[t])}),!0===s.w){let e=":ownKeys";n.push(i?[...i,e]:[e])}else null==(m=s.o)||m.forEach(e=>{let t=`:hasOwn(${String(e)})`;n.push(i?[...i,t]:[t])});null==(u=s.k)||u.forEach(t=>{(!r||"value"in(Object.getOwnPropertyDescriptor(e,t)||{}))&&o(e[t],i?[...i,t]:[t])})}else i&&n.push(i)};return o(e),n}},1021:function(e,t,r){r.d(t,{R:function(){return f}});var n=r(959),a=r(7784),o=r(4322),i=r(853);let{use:s}=n,{useSyncExternalStore:l}=o,c=(e,t)=>{let r=(0,n.useRef)();(0,n.useEffect)(()=>{r.current=(0,a.h8)(e,t,!0)}),(0,n.useDebugValue)(r.current)},u=new WeakMap;function f(e,t){let r=null==t?void 0:t.sync,o=(0,n.useRef)(),f=(0,n.useRef)(),m=!0,d=l((0,n.useCallback)(t=>{let n=(0,i.Ld)(e,t,r);return t(),n},[e,r]),()=>{let t=(0,i.CO)(e,s);try{if(!m&&o.current&&f.current&&!(0,a.ln)(o.current,t,f.current,new WeakMap))return o.current}catch(e){}return t},()=>(0,i.CO)(e,s));m=!1;let h=new WeakMap;(0,n.useEffect)(()=>{o.current=d,f.current=h}),c(d,h);let p=(0,n.useMemo)(()=>new WeakMap,[]);return(0,a.DM)(d,h,p,u)}},853:function(e,t,r){r.d(t,{CO:function(){return f},Ld:function(){return u},sj:function(){return c}});var n=r(7784);let a=e=>"object"==typeof e&&null!==e,o=new WeakMap,i=new WeakSet,s=(e=Object.is,t=(e,t)=>new Proxy(e,t),r=e=>a(e)&&!i.has(e)&&(Array.isArray(e)||!(Symbol.iterator in e))&&!(e instanceof WeakMap)&&!(e instanceof WeakSet)&&!(e instanceof Error)&&!(e instanceof Number)&&!(e instanceof Date)&&!(e instanceof String)&&!(e instanceof RegExp)&&!(e instanceof ArrayBuffer),s=e=>{switch(e.status){case"fulfilled":return e.value;case"rejected":throw e.reason;default:throw e}},l=new WeakMap,c=(e,t,r=s)=>{let a=l.get(e);if((null==a?void 0:a[0])===t)return a[1];let u=Array.isArray(e)?[]:Object.create(Object.getPrototypeOf(e));return(0,n.jc)(u,!0),l.set(e,[t,u]),Reflect.ownKeys(e).forEach(t=>{if(Object.getOwnPropertyDescriptor(u,t))return;let a=Reflect.get(e,t),{enumerable:s}=Reflect.getOwnPropertyDescriptor(e,t),l={value:a,enumerable:s,configurable:!0};if(i.has(a))(0,n.jc)(a,!1);else if(a instanceof Promise)delete l.value,l.get=()=>r(a);else if(o.has(a)){let[e,t]=o.get(a);l.value=c(e,t(),r)}Object.defineProperty(u,t,l)}),Object.preventExtensions(u)},u=new WeakMap,f=[1,1],m=s=>{if(!a(s))throw Error("object required");let l=u.get(s);if(l)return l;let d=f[0],h=new Set,p=(e,t=++f[0])=>{d!==t&&(d=t,h.forEach(r=>r(e,t)))},v=f[1],g=(e=++f[1])=>(v===e||h.size||(v=e,y.forEach(([t])=>{let r=t[1](e);r>d&&(d=r)})),d),x=e=>(t,r)=>{let n=[...t];n[1]=[e,...n[1]],p(n,r)},y=new Map,w=(e,t)=>{if(y.has(e))throw Error("prop listener already exists");if(h.size){let r=t[3](x(e));y.set(e,[t,r])}else y.set(e,[t])},b=e=>{var t;let r=y.get(e);r&&(y.delete(e),null==(t=r[1])||t.call(r))},S=e=>{h.add(e),1===h.size&&y.forEach(([e,t],r)=>{if(t)throw Error("remove already exists");let n=e[3](x(r));y.set(r,[e,n])});let t=()=>{h.delete(e),0===h.size&&y.forEach(([e,t],r)=>{t&&(t(),y.set(r,[e]))})};return t},M=Array.isArray(s)?[]:Object.create(Object.getPrototypeOf(s)),C={deleteProperty(e,t){let r=Reflect.get(e,t);b(t);let n=Reflect.deleteProperty(e,t);return n&&p(["delete",[t],r]),n},set(t,s,l,c){let f=Reflect.has(t,s),d=Reflect.get(t,s,c);if(f&&(e(d,l)||u.has(l)&&e(d,u.get(l))))return!0;b(s),a(l)&&(l=(0,n.o5)(l)||l);let h=l;if(l instanceof Promise)l.then(e=>{l.status="fulfilled",l.value=e,p(["resolve",[s],e])}).catch(e=>{l.status="rejected",l.reason=e,p(["reject",[s],e])});else{!o.has(l)&&r(l)&&(h=m(l));let e=!i.has(h)&&o.get(h);e&&w(s,e)}return Reflect.set(t,s,h,c),p(["set",[s],l,d]),!0}},R=t(M,C);u.set(s,R);let O=[M,g,c,S];return o.set(R,O),Reflect.ownKeys(s).forEach(e=>{let t=Object.getOwnPropertyDescriptor(s,e);"value"in t&&(R[e]=s[e],delete t.value,delete t.writable),Object.defineProperty(M,e,t)}),R})=>[m,o,i,e,t,r,s,l,c,u,f],[l]=s();function c(e={}){return l(e)}function u(e,t,r){let n;let a=o.get(e);a||console.warn("Please use proxy object");let i=[],s=a[3],l=!1,c=s(e=>{if(i.push(e),r){t(i.splice(0));return}n||(n=Promise.resolve().then(()=>{n=void 0,l&&t(i.splice(0))}))});return l=!0,()=>{l=!1,c()}}function f(e,t){let r=o.get(e);r||console.warn("Please use proxy object");let[n,a,i]=r;return i(n,a(),t)}}}]);