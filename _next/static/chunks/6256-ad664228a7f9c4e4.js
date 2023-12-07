"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6256],{7212:function(e,t,r){r.d(t,{Q:function(){return f}});var i=r(8126),a=r(959),n=r(4771),o=r(5542),l=r(3589);class s extends n.ShaderMaterial{constructor(e=new n.Vector2){super({uniforms:{inputBuffer:new n.Uniform(null),depthBuffer:new n.Uniform(null),resolution:new n.Uniform(new n.Vector2),texelSize:new n.Uniform(new n.Vector2),halfTexelSize:new n.Uniform(new n.Vector2),kernel:new n.Uniform(0),scale:new n.Uniform(1),cameraNear:new n.Uniform(0),cameraFar:new n.Uniform(1),minDepthThreshold:new n.Uniform(0),maxDepthThreshold:new n.Uniform(1),depthScale:new n.Uniform(0),depthToBlurRatioBias:new n.Uniform(.25)},fragmentShader:`#include <common>
        #include <dithering_pars_fragment>      
        uniform sampler2D inputBuffer;
        uniform sampler2D depthBuffer;
        uniform float cameraNear;
        uniform float cameraFar;
        uniform float minDepthThreshold;
        uniform float maxDepthThreshold;
        uniform float depthScale;
        uniform float depthToBlurRatioBias;
        varying vec2 vUv;
        varying vec2 vUv0;
        varying vec2 vUv1;
        varying vec2 vUv2;
        varying vec2 vUv3;

        void main() {
          float depthFactor = 0.0;
          
          #ifdef USE_DEPTH
            vec4 depth = texture2D(depthBuffer, vUv);
            depthFactor = smoothstep(minDepthThreshold, maxDepthThreshold, 1.0-(depth.r * depth.a));
            depthFactor *= depthScale;
            depthFactor = max(0.0, min(1.0, depthFactor + 0.25));
          #endif
          
          vec4 sum = texture2D(inputBuffer, mix(vUv0, vUv, depthFactor));
          sum += texture2D(inputBuffer, mix(vUv1, vUv, depthFactor));
          sum += texture2D(inputBuffer, mix(vUv2, vUv, depthFactor));
          sum += texture2D(inputBuffer, mix(vUv3, vUv, depthFactor));
          gl_FragColor = sum * 0.25 ;

          #include <dithering_fragment>
          #include <tonemapping_fragment>
          #include <${parseInt(n.REVISION.replace(/\D+/g,""))>=154?"colorspace_fragment":"encodings_fragment"}>
        }`,vertexShader:`uniform vec2 texelSize;
        uniform vec2 halfTexelSize;
        uniform float kernel;
        uniform float scale;
        varying vec2 vUv;
        varying vec2 vUv0;
        varying vec2 vUv1;
        varying vec2 vUv2;
        varying vec2 vUv3;

        void main() {
          vec2 uv = position.xy * 0.5 + 0.5;
          vUv = uv;

          vec2 dUv = (texelSize * vec2(kernel) + halfTexelSize) * scale;
          vUv0 = vec2(uv.x - dUv.x, uv.y + dUv.y);
          vUv1 = vec2(uv.x + dUv.x, uv.y + dUv.y);
          vUv2 = vec2(uv.x + dUv.x, uv.y - dUv.y);
          vUv3 = vec2(uv.x - dUv.x, uv.y - dUv.y);

          gl_Position = vec4(position.xy, 1.0, 1.0);
        }`,blending:n.NoBlending,depthWrite:!1,depthTest:!1}),this.toneMapped=!1,this.setTexelSize(e.x,e.y),this.kernel=new Float32Array([0,1,2,2,3])}setTexelSize(e,t){this.uniforms.texelSize.value.set(e,t),this.uniforms.halfTexelSize.value.set(e,t).multiplyScalar(.5)}setResolution(e){this.uniforms.resolution.value.copy(e)}}class u{constructor({gl:e,resolution:t,width:r=500,height:i=500,minDepthThreshold:a=0,maxDepthThreshold:o=1,depthScale:l=0,depthToBlurRatioBias:u=.25}){this.renderToScreen=!1,this.renderTargetA=new n.WebGLRenderTarget(t,t,{minFilter:n.LinearFilter,magFilter:n.LinearFilter,stencilBuffer:!1,depthBuffer:!1,type:n.HalfFloatType}),this.renderTargetB=this.renderTargetA.clone(),this.convolutionMaterial=new s,this.convolutionMaterial.setTexelSize(1/r,1/i),this.convolutionMaterial.setResolution(new n.Vector2(r,i)),this.scene=new n.Scene,this.camera=new n.Camera,this.convolutionMaterial.uniforms.minDepthThreshold.value=a,this.convolutionMaterial.uniforms.maxDepthThreshold.value=o,this.convolutionMaterial.uniforms.depthScale.value=l,this.convolutionMaterial.uniforms.depthToBlurRatioBias.value=u,this.convolutionMaterial.defines.USE_DEPTH=l>0;let h=new Float32Array([-1,-1,0,3,-1,0,-1,3,0]),f=new Float32Array([0,0,2,0,0,2]),m=new n.BufferGeometry;m.setAttribute("position",new n.BufferAttribute(h,3)),m.setAttribute("uv",new n.BufferAttribute(f,2)),this.screen=new n.Mesh(m,this.convolutionMaterial),this.screen.frustumCulled=!1,this.scene.add(this.screen)}render(e,t,r){let i,a,n;let o=this.scene,l=this.camera,s=this.renderTargetA,u=this.renderTargetB,h=this.convolutionMaterial,f=h.uniforms;f.depthBuffer.value=t.depthTexture;let m=h.kernel,v=t;for(a=0,n=m.length-1;a<n;++a)i=(1&a)==0?s:u,f.kernel.value=m[a],f.inputBuffer.value=v.texture,e.setRenderTarget(i),e.render(o,l),v=i;f.kernel.value=m[a],f.inputBuffer.value=v.texture,e.setRenderTarget(this.renderToScreen?null:r),e.render(o,l)}}class h extends n.MeshStandardMaterial{constructor(e={}){super(e),this._tDepth={value:null},this._distortionMap={value:null},this._tDiffuse={value:null},this._tDiffuseBlur={value:null},this._textureMatrix={value:null},this._hasBlur={value:!1},this._mirror={value:0},this._mixBlur={value:0},this._blurStrength={value:.5},this._minDepthThreshold={value:.9},this._maxDepthThreshold={value:1},this._depthScale={value:0},this._depthToBlurRatioBias={value:.25},this._distortion={value:1},this._mixContrast={value:1},this.setValues(e)}onBeforeCompile(e){var t;null!=(t=e.defines)&&t.USE_UV||(e.defines.USE_UV=""),e.uniforms.hasBlur=this._hasBlur,e.uniforms.tDiffuse=this._tDiffuse,e.uniforms.tDepth=this._tDepth,e.uniforms.distortionMap=this._distortionMap,e.uniforms.tDiffuseBlur=this._tDiffuseBlur,e.uniforms.textureMatrix=this._textureMatrix,e.uniforms.mirror=this._mirror,e.uniforms.mixBlur=this._mixBlur,e.uniforms.mixStrength=this._blurStrength,e.uniforms.minDepthThreshold=this._minDepthThreshold,e.uniforms.maxDepthThreshold=this._maxDepthThreshold,e.uniforms.depthScale=this._depthScale,e.uniforms.depthToBlurRatioBias=this._depthToBlurRatioBias,e.uniforms.distortion=this._distortion,e.uniforms.mixContrast=this._mixContrast,e.vertexShader=`
        uniform mat4 textureMatrix;
        varying vec4 my_vUv;
      ${e.vertexShader}`,e.vertexShader=e.vertexShader.replace("#include <project_vertex>",`#include <project_vertex>
        my_vUv = textureMatrix * vec4( position, 1.0 );
        gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );`),e.fragmentShader=`
        uniform sampler2D tDiffuse;
        uniform sampler2D tDiffuseBlur;
        uniform sampler2D tDepth;
        uniform sampler2D distortionMap;
        uniform float distortion;
        uniform float cameraNear;
			  uniform float cameraFar;
        uniform bool hasBlur;
        uniform float mixBlur;
        uniform float mirror;
        uniform float mixStrength;
        uniform float minDepthThreshold;
        uniform float maxDepthThreshold;
        uniform float mixContrast;
        uniform float depthScale;
        uniform float depthToBlurRatioBias;
        varying vec4 my_vUv;
        ${e.fragmentShader}`,e.fragmentShader=e.fragmentShader.replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>

      float distortionFactor = 0.0;
      #ifdef USE_DISTORTION
        distortionFactor = texture2D(distortionMap, vUv).r * distortion;
      #endif

      vec4 new_vUv = my_vUv;
      new_vUv.x += distortionFactor;
      new_vUv.y += distortionFactor;

      vec4 base = texture2DProj(tDiffuse, new_vUv);
      vec4 blur = texture2DProj(tDiffuseBlur, new_vUv);

      vec4 merge = base;

      #ifdef USE_NORMALMAP
        vec2 normal_uv = vec2(0.0);
        vec4 normalColor = texture2D(normalMap, vUv * normalScale);
        vec3 my_normal = normalize( vec3( normalColor.r * 2.0 - 1.0, normalColor.b,  normalColor.g * 2.0 - 1.0 ) );
        vec3 coord = new_vUv.xyz / new_vUv.w;
        normal_uv = coord.xy + coord.z * my_normal.xz * 0.05;
        vec4 base_normal = texture2D(tDiffuse, normal_uv);
        vec4 blur_normal = texture2D(tDiffuseBlur, normal_uv);
        merge = base_normal;
        blur = blur_normal;
      #endif

      float depthFactor = 0.0001;
      float blurFactor = 0.0;

      #ifdef USE_DEPTH
        vec4 depth = texture2DProj(tDepth, new_vUv);
        depthFactor = smoothstep(minDepthThreshold, maxDepthThreshold, 1.0-(depth.r * depth.a));
        depthFactor *= depthScale;
        depthFactor = max(0.0001, min(1.0, depthFactor));

        #ifdef USE_BLUR
          blur = blur * min(1.0, depthFactor + depthToBlurRatioBias);
          merge = merge * min(1.0, depthFactor + 0.5);
        #else
          merge = merge * depthFactor;
        #endif

      #endif

      float reflectorRoughnessFactor = roughness;
      #ifdef USE_ROUGHNESSMAP
        vec4 reflectorTexelRoughness = texture2D( roughnessMap, vUv );
        reflectorRoughnessFactor *= reflectorTexelRoughness.g;
      #endif

      #ifdef USE_BLUR
        blurFactor = min(1.0, mixBlur * reflectorRoughnessFactor);
        merge = mix(merge, blur, blurFactor);
      #endif

      vec4 newMerge = vec4(0.0, 0.0, 0.0, 1.0);
      newMerge.r = (merge.r - 0.5) * mixContrast + 0.5;
      newMerge.g = (merge.g - 0.5) * mixContrast + 0.5;
      newMerge.b = (merge.b - 0.5) * mixContrast + 0.5;

      diffuseColor.rgb = diffuseColor.rgb * ((1.0 - min(1.0, mirror)) + newMerge.rgb * mixStrength);
      `)}get tDiffuse(){return this._tDiffuse.value}set tDiffuse(e){this._tDiffuse.value=e}get tDepth(){return this._tDepth.value}set tDepth(e){this._tDepth.value=e}get distortionMap(){return this._distortionMap.value}set distortionMap(e){this._distortionMap.value=e}get tDiffuseBlur(){return this._tDiffuseBlur.value}set tDiffuseBlur(e){this._tDiffuseBlur.value=e}get textureMatrix(){return this._textureMatrix.value}set textureMatrix(e){this._textureMatrix.value=e}get hasBlur(){return this._hasBlur.value}set hasBlur(e){this._hasBlur.value=e}get mirror(){return this._mirror.value}set mirror(e){this._mirror.value=e}get mixBlur(){return this._mixBlur.value}set mixBlur(e){this._mixBlur.value=e}get mixStrength(){return this._blurStrength.value}set mixStrength(e){this._blurStrength.value=e}get minDepthThreshold(){return this._minDepthThreshold.value}set minDepthThreshold(e){this._minDepthThreshold.value=e}get maxDepthThreshold(){return this._maxDepthThreshold.value}set maxDepthThreshold(e){this._maxDepthThreshold.value=e}get depthScale(){return this._depthScale.value}set depthScale(e){this._depthScale.value=e}get depthToBlurRatioBias(){return this._depthToBlurRatioBias.value}set depthToBlurRatioBias(e){this._depthToBlurRatioBias.value=e}get distortion(){return this._distortion.value}set distortion(e){this._distortion.value=e}get mixContrast(){return this._mixContrast.value}set mixContrast(e){this._mixContrast.value=e}}(0,o.e)({MeshReflectorMaterialImpl:h});let f=a.forwardRef(({mixBlur:e=0,mixStrength:t=1,resolution:r=256,blur:s=[0,0],minDepthThreshold:h=.9,maxDepthThreshold:f=1,depthScale:m=0,depthToBlurRatioBias:v=.25,mirror:d=0,distortion:c=1,mixContrast:p=1,distortionMap:x,reflectorOffset:_=0,...g},D)=>{let U=(0,o.z)(({gl:e})=>e),S=(0,o.z)(({camera:e})=>e),T=(0,o.z)(({scene:e})=>e);s=Array.isArray(s)?s:[s,s];let B=s[0]+s[1]>0,y=a.useRef(null),[w]=a.useState(()=>new n.Plane),[M]=a.useState(()=>new n.Vector3),[b]=a.useState(()=>new n.Vector3),[F]=a.useState(()=>new n.Vector3),[R]=a.useState(()=>new n.Matrix4),[E]=a.useState(()=>new n.Vector3(0,0,-1)),[C]=a.useState(()=>new n.Vector4),[z]=a.useState(()=>new n.Vector3),[A]=a.useState(()=>new n.Vector3),[V]=a.useState(()=>new n.Vector4),[k]=a.useState(()=>new n.Matrix4),[P]=a.useState(()=>new n.PerspectiveCamera),L=a.useCallback(()=>{var e;let t=y.current.parent||(null==(e=y.current)?void 0:e.__r3f.parent);if(!t||(b.setFromMatrixPosition(t.matrixWorld),F.setFromMatrixPosition(S.matrixWorld),R.extractRotation(t.matrixWorld),M.set(0,0,1),M.applyMatrix4(R),b.addScaledVector(M,_),z.subVectors(b,F),z.dot(M)>0))return;z.reflect(M).negate(),z.add(b),R.extractRotation(S.matrixWorld),E.set(0,0,-1),E.applyMatrix4(R),E.add(F),A.subVectors(b,E),A.reflect(M).negate(),A.add(b),P.position.copy(z),P.up.set(0,1,0),P.up.applyMatrix4(R),P.up.reflect(M),P.lookAt(A),P.far=S.far,P.updateMatrixWorld(),P.projectionMatrix.copy(S.projectionMatrix),k.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),k.multiply(P.projectionMatrix),k.multiply(P.matrixWorldInverse),k.multiply(t.matrixWorld),w.setFromNormalAndCoplanarPoint(M,b),w.applyMatrix4(P.matrixWorldInverse),C.set(w.normal.x,w.normal.y,w.normal.z,w.constant);let r=P.projectionMatrix;V.x=(Math.sign(C.x)+r.elements[8])/r.elements[0],V.y=(Math.sign(C.y)+r.elements[9])/r.elements[5],V.z=-1,V.w=(1+r.elements[10])/r.elements[14],C.multiplyScalar(2/C.dot(V)),r.elements[2]=C.x,r.elements[6]=C.y,r.elements[10]=C.z+1,r.elements[14]=C.w},[S,_]),[j,O,I,N]=a.useMemo(()=>{let i={minFilter:n.LinearFilter,magFilter:n.LinearFilter,type:n.HalfFloatType},a=new n.WebGLRenderTarget(r,r,i);a.depthBuffer=!0,a.depthTexture=new n.DepthTexture(r,r),a.depthTexture.format=n.DepthFormat,a.depthTexture.type=n.UnsignedShortType;let o=new n.WebGLRenderTarget(r,r,i),l=new u({gl:U,resolution:r,width:s[0],height:s[1],minDepthThreshold:h,maxDepthThreshold:f,depthScale:m,depthToBlurRatioBias:v}),_={mirror:d,textureMatrix:k,mixBlur:e,tDiffuse:a.texture,tDepth:a.depthTexture,tDiffuseBlur:o.texture,hasBlur:B,mixStrength:t,minDepthThreshold:h,maxDepthThreshold:f,depthScale:m,depthToBlurRatioBias:v,distortion:c,distortionMap:x,mixContrast:p,"defines-USE_BLUR":B?"":void 0,"defines-USE_DEPTH":m>0?"":void 0,"defines-USE_DISTORTION":x?"":void 0};return[a,o,l,_]},[U,s,k,r,d,B,e,t,h,f,m,v,c,x,p]);return(0,o.A)(()=>{var e;let t=y.current.parent||(null==(e=y.current)?void 0:e.__r3f.parent);if(!t)return;t.visible=!1;let r=U.xr.enabled,i=U.shadowMap.autoUpdate;L(),U.xr.enabled=!1,U.shadowMap.autoUpdate=!1,U.setRenderTarget(j),U.state.buffers.depth.setMask(!0),U.autoClear||U.clear(),U.render(T,P),B&&I.render(U,j,O),U.xr.enabled=r,U.shadowMap.autoUpdate=i,t.visible=!0,U.setRenderTarget(null)}),a.createElement("meshReflectorMaterialImpl",(0,i.Z)({attach:"material",key:"key"+N["defines-USE_BLUR"]+N["defines-USE_DEPTH"]+N["defines-USE_DISTORTION"],ref:(0,l.Z)([y,D])},N,g))})},3156:function(e,t,r){r.d(t,{m:function(){return l}});var i=r(4771),a=r(5542),n=r(959);let o=e=>e===Object(e)&&!Array.isArray(e)&&"function"!=typeof e;function l(e,t){let r=(0,a.z)(e=>e.gl),l=(0,a.D)(i.TextureLoader,o(e)?Object.values(e):e);if((0,n.useLayoutEffect)(()=>{null==t||t(l)},[t]),(0,n.useEffect)(()=>{if("initTexture"in r){let e=Array.isArray(l)?l:[l];e.forEach(r.initTexture)}},[r,l]),!o(e))return l;{let t=Object.keys(e),r={};return t.forEach(e=>Object.assign(r,{[e]:l[t.indexOf(e)]})),r}}l.preload=e=>a.D.preload(i.TextureLoader,e),l.clear=e=>a.D.clear(i.TextureLoader,e)},3589:function(e,t){t.Z=function(e){return function(t){e.forEach(function(e){"function"==typeof e?e(t):null!=e&&(e.current=t)})}}}}]);