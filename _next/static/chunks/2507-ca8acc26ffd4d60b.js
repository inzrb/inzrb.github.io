"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2507],{9866:function(e,t,r){r.d(t,{b:function(){return s}});var n=r(959),o=r(5542),a=r(3589),i=r(4771);let s=n.forwardRef(({children:e,enabled:t=!0,speed:r=1,rotationIntensity:s=1,floatIntensity:c=1,floatingRange:l=[-.1,.1],...u},m)=>{let f=n.useRef(null),d=n.useRef(1e4*Math.random());return(0,o.A)(e=>{var n,o;if(!t||0===r)return;let a=d.current+e.clock.getElapsedTime();f.current.rotation.x=Math.cos(a/4*r)/8*s,f.current.rotation.y=Math.sin(a/4*r)/8*s,f.current.rotation.z=Math.sin(a/4*r)/20*s;let u=Math.sin(a/4*r)/10;u=i.MathUtils.mapLinear(u,-.1,.1,null!==(n=null==l?void 0:l[0])&&void 0!==n?n:-.1,null!==(o=null==l?void 0:l[1])&&void 0!==o?o:.1),f.current.position.y=u*c,f.current.updateMatrix()}),n.createElement("group",u,n.createElement("group",{ref:(0,a.Z)([f,m]),matrixAutoUpdate:!1},e))})},2377:function(e,t,r){r.d(t,{E:function(){return Image}});var n=r(8126),o=r(959),a=r(4771),i=r(5542),s=r(33),c=r(3156);let l=(0,s.g)({color:new a.Color("white"),scale:[1,1],imageBounds:[1,1],map:null,zoom:1,grayscale:0,opacity:1},`
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
    #include <${parseInt(a.REVISION.replace(/\D+/g,""))>=154?"colorspace_fragment":"encodings_fragment"}>
  }
`),u=o.forwardRef(({children:e,color:t,segments:r=1,scale:a=1,zoom:s=1,grayscale:c=0,opacity:u=1,texture:m,toneMapped:f,transparent:d,...v},p)=>{(0,i.e)({ImageMaterial:l});let h=Array.isArray(a)?[a[0],a[1]]:[a,a],x=[m.image.width,m.image.height];return o.createElement("mesh",(0,n.Z)({ref:p,scale:Array.isArray(a)?[...a,1]:a},v),o.createElement("planeGeometry",{args:[1,1,r,r]}),o.createElement("imageMaterial",{color:t,map:m,zoom:s,grayscale:c,opacity:u,scale:h,imageBounds:x,toneMapped:f,transparent:d}),e)}),m=o.forwardRef(({url:e,...t},r)=>{let a=(0,c.m)(e);return o.createElement(u,(0,n.Z)({},t,{texture:a,ref:r}))}),f=o.forwardRef(({url:e,...t},r)=>o.createElement(u,(0,n.Z)({},t,{ref:r}))),Image=o.forwardRef((e,t)=>{if(e.url)return o.createElement(m,(0,n.Z)({},e,{ref:t}));if(e.texture)return o.createElement(f,(0,n.Z)({},e,{ref:t}));throw Error("<Image /> requires a url or texture")})},4639:function(e,t,r){r.d(t,{Y:function(){return c}});var n=r(8126),o=r(959),a=r(4771),i=r(5542);class s extends a.MeshPhysicalMaterial{constructor(e={}){super(e),this.setValues(e),this._time={value:0},this._distort={value:.4},this._radius={value:1}}onBeforeCompile(e){e.uniforms.time=this._time,e.uniforms.radius=this._radius,e.uniforms.distort=this._distort,e.vertexShader=`
      uniform float time;
      uniform float radius;
      uniform float distort;
      #define GLSLIFY 1
vec3 mod289(vec3 x){return x-floor(x*(1.0/289.0))*289.0;}vec4 mod289(vec4 x){return x-floor(x*(1.0/289.0))*289.0;}vec4 permute(vec4 x){return mod289(((x*34.0)+1.0)*x);}vec4 taylorInvSqrt(vec4 r){return 1.79284291400159-0.85373472095314*r;}float snoise(vec3 v){const vec2 C=vec2(1.0/6.0,1.0/3.0);const vec4 D=vec4(0.0,0.5,1.0,2.0);vec3 i=floor(v+dot(v,C.yyy));vec3 x0=v-i+dot(i,C.xxx);vec3 g=step(x0.yzx,x0.xyz);vec3 l=1.0-g;vec3 i1=min(g.xyz,l.zxy);vec3 i2=max(g.xyz,l.zxy);vec3 x1=x0-i1+C.xxx;vec3 x2=x0-i2+C.yyy;vec3 x3=x0-D.yyy;i=mod289(i);vec4 p=permute(permute(permute(i.z+vec4(0.0,i1.z,i2.z,1.0))+i.y+vec4(0.0,i1.y,i2.y,1.0))+i.x+vec4(0.0,i1.x,i2.x,1.0));float n_=0.142857142857;vec3 ns=n_*D.wyz-D.xzx;vec4 j=p-49.0*floor(p*ns.z*ns.z);vec4 x_=floor(j*ns.z);vec4 y_=floor(j-7.0*x_);vec4 x=x_*ns.x+ns.yyyy;vec4 y=y_*ns.x+ns.yyyy;vec4 h=1.0-abs(x)-abs(y);vec4 b0=vec4(x.xy,y.xy);vec4 b1=vec4(x.zw,y.zw);vec4 s0=floor(b0)*2.0+1.0;vec4 s1=floor(b1)*2.0+1.0;vec4 sh=-step(h,vec4(0.0));vec4 a0=b0.xzyw+s0.xzyw*sh.xxyy;vec4 a1=b1.xzyw+s1.xzyw*sh.zzww;vec3 p0=vec3(a0.xy,h.x);vec3 p1=vec3(a0.zw,h.y);vec3 p2=vec3(a1.xy,h.z);vec3 p3=vec3(a1.zw,h.w);vec4 norm=taylorInvSqrt(vec4(dot(p0,p0),dot(p1,p1),dot(p2,p2),dot(p3,p3)));p0*=norm.x;p1*=norm.y;p2*=norm.z;p3*=norm.w;vec4 m=max(0.6-vec4(dot(x0,x0),dot(x1,x1),dot(x2,x2),dot(x3,x3)),0.0);m=m*m;return 42.0*dot(m*m,vec4(dot(p0,x0),dot(p1,x1),dot(p2,x2),dot(p3,x3)));}
      ${e.vertexShader}
    `,e.vertexShader=e.vertexShader.replace("#include <begin_vertex>",`
        float updateTime = time / 50.0;
        float noise = snoise(vec3(position / 2.0 + updateTime * 5.0));
        vec3 transformed = vec3(position * (noise * pow(distort, 2.0) + radius));
        `)}get time(){return this._time.value}set time(e){this._time.value=e}get distort(){return this._distort.value}set distort(e){this._distort.value=e}get radius(){return this._radius.value}set radius(e){this._radius.value=e}}let c=o.forwardRef(({speed:e=1,...t},r)=>{let[a]=o.useState(()=>new s);return(0,i.A)(t=>a&&(a.time=t.clock.getElapsedTime()*e)),o.createElement("primitive",(0,n.Z)({object:a,ref:r,attach:"material"},t))})},3276:function(e,t,r){r.d(t,{z:function(){return u}});var n=r(8126),o=r(4771),a=r(959),i=r(5542),s=r(1223),c=r(9842);class l extends o.MeshPhysicalMaterial{constructor(e=6,t=!1){super(),this.uniforms={chromaticAberration:{value:.05},transmission:{value:0},_transmission:{value:1},transmissionMap:{value:null},roughness:{value:0},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:1/0},attenuationColor:{value:new o.Color("white")},anisotropicBlur:{value:.1},time:{value:0},distortion:{value:0},distortionScale:{value:.5},temporalDistortion:{value:0},buffer:{value:null}},this.onBeforeCompile=r=>{r.uniforms={...r.uniforms,...this.uniforms},this.anisotropy>0&&(r.defines.USE_ANISOTROPY=""),t?r.defines.USE_SAMPLER="":r.defines.USE_TRANSMISSION="",r.fragmentShader=`
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
`)},Object.keys(this.uniforms).forEach(e=>Object.defineProperty(this,e,{get:()=>this.uniforms[e].value,set:t=>this.uniforms[e].value=t}))}}let u=a.forwardRef(({buffer:e,transmissionSampler:t=!1,backside:r=!1,side:u=o.FrontSide,transmission:m=1,thickness:f=0,backsideThickness:d=0,samples:v=10,resolution:p,backsideResolution:h,background:x,anisotropy:g,anisotropicBlur:y,...w},S)=>{let b,C,z;(0,i.e)({MeshTransmissionMaterial:l});let M=a.useRef(null),[E]=a.useState(()=>new c.l),R=(0,s.R)(h||p),_=(0,s.R)(p);return(0,i.A)(e=>{M.current.time=e.clock.getElapsedTime(),M.current.buffer===_.texture&&!t&&(z=M.current.__r3f.parent)&&(C=e.gl.toneMapping,b=e.scene.background,e.gl.toneMapping=o.NoToneMapping,x&&(e.scene.background=x),z.material=E,r&&(e.gl.setRenderTarget(R),e.gl.render(e.scene,e.camera),z.material=M.current,z.material.buffer=R.texture,z.material.thickness=d,z.material.side=o.BackSide),e.gl.setRenderTarget(_),e.gl.render(e.scene,e.camera),z.material=M.current,z.material.thickness=f,z.material.side=u,z.material.buffer=_.texture,e.scene.background=b,e.gl.setRenderTarget(null),e.gl.toneMapping=C)}),a.useImperativeHandle(S,()=>M.current,[]),a.createElement("meshTransmissionMaterial",(0,n.Z)({args:[v,t],ref:M},w,{buffer:e||_.texture,_transmission:m,anisotropicBlur:null!=y?y:g,transmission:t?m:0,thickness:f,side:u}))})},5690:function(e,t,r){r.d(t,{c:function(){return l}});var n=r(8126),o=r(959),a=r(5542),i=r(3589),s=r(1223);let c=e=>"function"==typeof e,l=o.forwardRef(({envMap:e,resolution:t=256,frames:r=1/0,makeDefault:l,children:u,...m},f)=>{let d=(0,a.z)(({set:e})=>e),v=(0,a.z)(({camera:e})=>e),p=(0,a.z)(({size:e})=>e),h=o.useRef(null),x=o.useRef(null),g=(0,s.R)(t);o.useLayoutEffect(()=>{m.manual||(h.current.aspect=p.width/p.height)},[p,m]),o.useLayoutEffect(()=>{h.current.updateProjectionMatrix()});let y=0,w=null,S=c(u);return(0,a.A)(t=>{S&&(r===1/0||y<r)&&(x.current.visible=!1,t.gl.setRenderTarget(g),w=t.scene.background,e&&(t.scene.background=e),t.gl.render(t.scene,h.current),t.scene.background=w,t.gl.setRenderTarget(null),x.current.visible=!0,y++)}),o.useLayoutEffect(()=>{if(l)return d(()=>({camera:h.current})),()=>d(()=>({camera:v}))},[h,l,d]),o.createElement(o.Fragment,null,o.createElement("perspectiveCamera",(0,n.Z)({ref:(0,i.Z)([h,f])},m),!S&&u),o.createElement("group",{ref:x},S&&u(g.texture)))})},33:function(e,t,r){r.d(t,{g:function(){return o}});var n=r(4771);function o(e,t,r,o){let a=class extends n.ShaderMaterial{constructor(a={}){let i=Object.entries(e);super({uniforms:i.reduce((e,[t,r])=>{let o=n.UniformsUtils.clone({[t]:{value:r}});return{...e,...o}},{}),vertexShader:t,fragmentShader:r}),this.key="",i.forEach(([e])=>Object.defineProperty(this,e,{get:()=>this.uniforms[e].value,set:t=>this.uniforms[e].value=t})),Object.assign(this,a),o&&o(this)}};return a.key=n.MathUtils.generateUUID(),a}},3156:function(e,t,r){r.d(t,{m:function(){return s}});var n=r(4771),o=r(5542),a=r(959);let i=e=>e===Object(e)&&!Array.isArray(e)&&"function"!=typeof e;function s(e,t){let r=(0,o.z)(e=>e.gl),s=(0,o.D)(n.TextureLoader,i(e)?Object.values(e):e);if((0,a.useLayoutEffect)(()=>{null==t||t(s)},[t]),(0,a.useEffect)(()=>{if("initTexture"in r){let e=Array.isArray(s)?s:[s];e.forEach(r.initTexture)}},[r,s]),!i(e))return s;{let t=Object.keys(e),r={};return t.forEach(e=>Object.assign(r,{[e]:s[t.indexOf(e)]})),r}}s.preload=e=>o.D.preload(n.TextureLoader,e),s.clear=e=>o.D.clear(n.TextureLoader,e)},9842:function(e,t,r){r.d(t,{l:function(){return o}});var n=r(33);let o=(0,n.g)({},"void main() { }","void main() { gl_FragColor = vec4(0.0, 0.0, 0.0, 0.0); discard;  }")},678:function(e,t,r){r.d(t,{G:function(){return l}});var n=r(959),o=r(4771),a=r(5542);let i=e=>e&&e.isOrthographicCamera,s=new o.Color;function c({canvasSize:e,scene:t,index:r,children:o,frames:c,rect:l,track:u}){let m=(0,a.z)(e=>e.get),f=(0,a.z)(e=>e.camera),d=(0,a.z)(e=>e.scene),v=(0,a.z)(e=>e.setEvents),p=0;return(0,a.A)(r=>{if(c===1/0||p<=c){var n;l.current=null==(n=u.current)?void 0:n.getBoundingClientRect(),p++}if(l.current){let{position:{left:n,bottom:a,width:c,height:u},isOffscreen:m}=function(e,t){let{right:r,top:n,left:o,bottom:a,width:i,height:s}=t,c=t.bottom<0||n>e.height||r<0||t.left>e.width;if("top"in e){let t=e.top+e.height,l=o-e.left;return{position:{width:i,height:s,left:l,top:n,bottom:t-a,right:r},isOffscreen:c}}let l=e.height-a;return{position:{width:i,height:s,top:n,left:o,bottom:l,right:r},isOffscreen:c}}(e,l.current),v=c/u;i(f)?(f.left!==-(c/2)||f.right!==c/2||f.top!==u/2||f.bottom!==-(u/2))&&(Object.assign(f,{left:-(c/2),right:c/2,top:u/2,bottom:-(u/2)}),f.updateProjectionMatrix()):f.aspect!==v&&(f.aspect=v,f.updateProjectionMatrix()),r.gl.setViewport(n,a,c,u),r.gl.setScissor(n,a,c,u),r.gl.setScissorTest(!0),m?(r.gl.getClearColor(s),r.gl.setClearColor(s,r.gl.getClearAlpha()),r.gl.clear(!0,!0)):r.gl.render(o?d:t,f),r.gl.setScissorTest(!0)}},r),n.useEffect(()=>{let e=m().events.connected;return v({connected:u.current}),()=>v({connected:e})},[]),n.useEffect(()=>{"top"in e||console.warn("Detected @react-three/fiber canvas size does not include position information. <View /> may not work as expected. Upgrade to @react-three/fiber ^8.1.0 for support.\n See https://github.com/pmndrs/drei/issues/944")},[]),n.createElement(n.Fragment,null,o)}let l=({track:e,index:t=1,frames:r=1/0,children:i})=>{var s,l;let u=n.useRef(null),{size:m,scene:f}=(0,a.z)(),[d]=n.useState(()=>new o.Scene),v=n.useCallback((t,r)=>{if(u.current&&e.current&&t.target===e.current){let{width:e,height:n,left:o,top:a}=u.current,i=t.clientX-o,s=t.clientY-a;r.pointer.set(i/e*2-1,-(2*(s/n))+1),r.raycaster.setFromCamera(r.pointer,r.camera)}},[u,e]),[p,h]=n.useReducer(()=>!0,!1);return n.useEffect(()=>{var t;u.current=null==(t=e.current)?void 0:t.getBoundingClientRect(),h()},[e]),n.createElement(n.Fragment,null,p&&(0,a.g)(n.createElement(c,{canvasSize:m,frames:r,scene:f,track:e,rect:u,index:t},i,n.createElement("group",{onPointerOver:()=>null})),d,{events:{compute:v,priority:t},size:{width:null==(s=u.current)?void 0:s.width,height:null==(l=u.current)?void 0:l.height}}))}},3589:function(e,t){t.Z=function(e){return function(t){e.forEach(function(e){"function"==typeof e?e(t):null!=e&&(e.current=t)})}}},3833:function(e,t,r){r.d(t,{Z:function(){return a}});var n=r(959);function o(){return this}function a(e){let t=0;return{next(){if(++t>50)throw Error("useMultipleRefs: reached more than 50 refs. This hook can be used exclusively with the array destructuring syntax.");return{done:!1,value:(0,n.useRef)(e)}},[Symbol.iterator]:o}}}}]);