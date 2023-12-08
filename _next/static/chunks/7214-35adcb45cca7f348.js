"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7214],{302:function(e,t,r){r.d(t,{P:function(){return p}});var n=r(8126),o=r(959),i=r(4771),a=r(5542),l=r(33);let s=(0,l.g)({time:0,pixelRatio:1},` uniform float pixelRatio;
    uniform float time;
    attribute float size;  
    attribute float speed;  
    attribute float opacity;
    attribute vec3 noise;
    attribute vec3 color;
    varying vec3 vColor;
    varying float vOpacity;
    void main() {
      vec4 modelPosition = modelMatrix * vec4(position, 1.0);
      modelPosition.y += sin(time * speed + modelPosition.x * noise.x * 100.0) * 0.2;
      modelPosition.z += cos(time * speed + modelPosition.x * noise.y * 100.0) * 0.2;
      modelPosition.x += cos(time * speed + modelPosition.x * noise.z * 100.0) * 0.2;
      vec4 viewPosition = viewMatrix * modelPosition;
      vec4 projectionPostion = projectionMatrix * viewPosition;
      gl_Position = projectionPostion;
      gl_PointSize = size * 25. * pixelRatio;
      gl_PointSize *= (1.0 / - viewPosition.z);
      vColor = color;
      vOpacity = opacity;
    }`,` varying vec3 vColor;
    varying float vOpacity;
    void main() {
      float distanceToCenter = distance(gl_PointCoord, vec2(0.5));
      float strength = 0.05 / distanceToCenter - 0.1;
      gl_FragColor = vec4(vColor, strength * vOpacity);
      #include <tonemapping_fragment>
      #include <${parseInt(i.REVISION.replace(/\D+/g,""))>=154?"colorspace_fragment":"encodings_fragment"}>
    }`),c=e=>e&&e.constructor===Float32Array,u=e=>[e.r,e.g,e.b],f=e=>e instanceof i.Vector2||e instanceof i.Vector3||e instanceof i.Vector4,d=e=>Array.isArray(e)?e:f(e)?e.toArray():[e,e,e];function m(e,t,r){return o.useMemo(()=>{if(void 0!==t){if(c(t))return t;if(t instanceof i.Color){let r=Array.from({length:3*e},()=>u(t)).flat();return Float32Array.from(r)}if(f(t)||Array.isArray(t)){let r=Array.from({length:3*e},()=>d(t)).flat();return Float32Array.from(r)}return Float32Array.from({length:e},()=>t)}return Float32Array.from({length:e},r)},[t])}let p=o.forwardRef(({noise:e=1,count:t=100,speed:r=1,opacity:l=1,scale:u=1,size:f,color:p,children:h,...v},g)=>{o.useMemo(()=>(0,a.e)({SparklesImplMaterial:s}),[]);let y=o.useRef(null),w=(0,a.z)(e=>e.viewport.dpr),x=d(u),P=o.useMemo(()=>Float32Array.from(Array.from({length:t},()=>x.map(i.MathUtils.randFloatSpread)).flat()),[t,...x]),b=m(t,f,Math.random),M=m(t,l),E=m(t,r),R=m(3*t,e),O=m(void 0===p?3*t:t,c(p)?p:new i.Color(p),()=>1);return(0,a.A)(e=>{y.current&&y.current.material&&(y.current.material.time=e.clock.elapsedTime)}),o.useImperativeHandle(g,()=>y.current,[]),o.createElement("points",(0,n.Z)({key:`particle-${t}-${JSON.stringify(u)}`},v,{ref:y}),o.createElement("bufferGeometry",null,o.createElement("bufferAttribute",{attach:"attributes-position",args:[P,3]}),o.createElement("bufferAttribute",{attach:"attributes-size",args:[b,1]}),o.createElement("bufferAttribute",{attach:"attributes-opacity",args:[M,1]}),o.createElement("bufferAttribute",{attach:"attributes-speed",args:[E,1]}),o.createElement("bufferAttribute",{attach:"attributes-color",args:[O,3]}),o.createElement("bufferAttribute",{attach:"attributes-noise",args:[R,3]})),h||o.createElement("sparklesImplMaterial",{transparent:!0,pixelRatio:w,depthWrite:!1}))})},1193:function(e,t,r){r.d(t,{P:function(){return u}});var n=r(8126),o=r(959),i=r(4771),a=r(5542),l=r(3589);class s extends i.ShaderMaterial{constructor(){super({uniforms:{depth:{value:null},opacity:{value:1},attenuation:{value:2.5},anglePower:{value:12},spotPosition:{value:new i.Vector3(0,0,0)},lightColor:{value:new i.Color("white")},cameraNear:{value:0},cameraFar:{value:1},resolution:{value:new i.Vector2(0,0)}},transparent:!0,depthWrite:!1,vertexShader:`
      varying vec3 vNormal;
      varying vec3 vWorldPosition;
      varying float vViewZ;
      varying float vIntensity;
      uniform vec3 spotPosition;
      uniform float attenuation;      

      void main() {
        // compute intensity
        vNormal = normalize( normalMatrix * normal );
        vec4 worldPosition	= modelMatrix * vec4( position, 1.0 );
        vWorldPosition = worldPosition.xyz;
        vec4 viewPosition = viewMatrix * worldPosition;
        vViewZ = viewPosition.z;
        float intensity	= distance(worldPosition.xyz, spotPosition) / attenuation;
        intensity	= 1.0 - clamp(intensity, 0.0, 1.0);
        vIntensity = intensity;        
        // set gl_Position
        gl_Position	= projectionMatrix * viewPosition;

      }`,fragmentShader:`
      #include <packing>

      varying vec3 vNormal;
      varying vec3 vWorldPosition;
      uniform vec3 lightColor;
      uniform vec3 spotPosition;
      uniform float attenuation;
      uniform float anglePower;
      uniform sampler2D depth;
      uniform vec2 resolution;
      uniform float cameraNear;
      uniform float cameraFar;
      varying float vViewZ;
      varying float vIntensity;
      uniform float opacity;

      float readDepth( sampler2D depthSampler, vec2 coord ) {
        float fragCoordZ = texture2D( depthSampler, coord ).x;
        float viewZ = perspectiveDepthToViewZ(fragCoordZ, cameraNear, cameraFar);
        return viewZ;
      }

      void main() {
        float d = 1.0;
        bool isSoft = resolution[0] > 0.0 && resolution[1] > 0.0;
        if (isSoft) {
          vec2 sUv = gl_FragCoord.xy / resolution;
          d = readDepth(depth, sUv);
        }
        float intensity = vIntensity;
        vec3 normal	= vec3(vNormal.x, vNormal.y, abs(vNormal.z));
        float angleIntensity	= pow( dot(normal, vec3(0.0, 0.0, 1.0)), anglePower );
        intensity	*= angleIntensity;
        // fades when z is close to sampled depth, meaning the cone is intersecting existing geometry
        if (isSoft) {
          intensity	*= smoothstep(0., 1., vViewZ - d);
        }
        gl_FragColor = vec4(lightColor, intensity * opacity);

        #include <tonemapping_fragment>
	      #include <${parseInt(i.REVISION.replace(/\D+/g,""))>=154?"colorspace_fragment":"encodings_fragment"}>
      }`})}}function c({opacity:e=1,radiusTop:t,radiusBottom:r,depthBuffer:n,color:l="white",distance:c=5,angle:u=.15,attenuation:f=5,anglePower:d=5}){let m=o.useRef(null),p=(0,a.z)(e=>e.size),h=(0,a.z)(e=>e.camera),v=(0,a.z)(e=>e.viewport.dpr),[g]=o.useState(()=>new s),[y]=o.useState(()=>new i.Vector3);t=void 0===t?.1:t,r=void 0===r?7*u:r,(0,a.A)(()=>{g.uniforms.spotPosition.value.copy(m.current.getWorldPosition(y)),m.current.lookAt(m.current.parent.target.getWorldPosition(y))});let w=o.useMemo(()=>{let e=new i.CylinderGeometry(t,r,c,128,64,!0);return e.applyMatrix4(new i.Matrix4().makeTranslation(0,-c/2,0)),e.applyMatrix4(new i.Matrix4().makeRotationX(-Math.PI/2)),e},[c,t,r]);return o.createElement(o.Fragment,null,o.createElement("mesh",{ref:m,geometry:w,raycast:()=>null},o.createElement("primitive",{object:g,attach:"material","uniforms-opacity-value":e,"uniforms-lightColor-value":l,"uniforms-attenuation-value":f,"uniforms-anglePower-value":d,"uniforms-depth-value":n,"uniforms-cameraNear-value":h.near,"uniforms-cameraFar-value":h.far,"uniforms-resolution-value":n?[p.width*v,p.height*v]:[0,0]})))}let u=o.forwardRef(({opacity:e=1,radiusTop:t,radiusBottom:r,depthBuffer:i,color:a="white",distance:s=5,angle:u=.15,attenuation:f=5,anglePower:d=5,volumetric:m=!0,debug:p=!1,children:h,...v},g)=>{let y=o.useRef(null);return o.createElement("group",null,p&&y.current&&o.createElement("spotLightHelper",{args:[y.current]}),o.createElement("spotLight",(0,n.Z)({ref:(0,l.Z)([g,y]),angle:u,color:a,distance:s,castShadow:!0},v),m&&o.createElement(c,{debug:p,opacity:e,radiusTop:t,radiusBottom:r,depthBuffer:i,color:a,distance:s,angle:u,attenuation:f,anglePower:d})),h&&o.cloneElement(h,{spotlightRef:y,debug:p}))})},33:function(e,t,r){r.d(t,{g:function(){return o}});var n=r(4771);function o(e,t,r,o){let i=class extends n.ShaderMaterial{constructor(i={}){let a=Object.entries(e);super({uniforms:a.reduce((e,[t,r])=>{let o=n.UniformsUtils.clone({[t]:{value:r}});return{...e,...o}},{}),vertexShader:t,fragmentShader:r}),this.key="",a.forEach(([e])=>Object.defineProperty(this,e,{get:()=>this.uniforms[e].value,set:t=>this.uniforms[e].value=t})),Object.assign(this,i),o&&o(this)}};return i.key=n.MathUtils.generateUUID(),i}},3387:function(e,t,r){r.d(t,{xu:function(){return l}});var n=r(8126),o=r(959),i=r(4771);function a(e,t){let r=e+"Geometry";return o.forwardRef(({args:e,children:i,...a},l)=>{let s=o.useRef(null);return o.useImperativeHandle(l,()=>s.current),o.useLayoutEffect(()=>void(null==t||t(s.current))),o.createElement("mesh",(0,n.Z)({ref:s},a),o.createElement(r,{attach:"geometry",args:e}),i)})}let l=a("box");a("circle"),a("cone"),a("cylinder"),a("sphere"),a("plane"),a("tube"),a("torus"),a("torusKnot"),a("tetrahedron"),a("ring"),a("polyhedron"),a("icosahedron"),a("octahedron"),a("dodecahedron"),a("extrude"),a("lathe"),a("capsule"),a("shape",({geometry:e})=>{let t=e.attributes.position,r=new i.Box3().setFromBufferAttribute(t),n=new i.Vector3;r.getSize(n);let o=[],a=0,l=0,s=0,c=0;for(let e=0;e<t.count;e++)a=t.getX(e),l=t.getY(e),s=(a-r.min.x)/n.x,c=(l-r.min.y)/n.y,o.push(s,c);e.setAttribute("uv",new i.Float32BufferAttribute(o,2))})},9718:function(e,t,r){r.d(t,{V:function(){return y}});var n,o,i=r(8126),a=r(959),l=r(4478),s=r(4771),c=r(5542);let u=new s.Vector3,f=new s.Vector3,d=new s.Vector3;function m(e,t,r){let n=u.setFromMatrixPosition(e.matrixWorld);n.project(t);let o=r.width/2,i=r.height/2;return[n.x*o+o,-(n.y*i)+i]}let p=e=>1e-10>Math.abs(e)?0:e;function h(e,t,r=""){let n="matrix3d(";for(let r=0;16!==r;r++)n+=p(t[r]*e.elements[r])+(15!==r?",":")");return r+n}let v=(n=[1,-1,1,1,1,-1,1,1,1,-1,1,1,1,-1,1,1],e=>h(e,n)),g=(o=e=>[1/e,1/e,1/e,1,-1/e,-1/e,-1/e,-1,1/e,1/e,1/e,1,1,1,1,1],(e,t)=>h(e,o(t),"translate(-50%,-50%)")),y=a.forwardRef(({children:e,eps:t=.001,style:r,className:n,prepend:o,center:h,fullscreen:y,portal:w,distanceFactor:x,sprite:P=!1,transform:b=!1,occlude:M,onOcclude:E,castShadow:R,receiveShadow:O,material:j,geometry:A,zIndexRange:S=[16777271,0],calculatePosition:W=m,as:z="div",wrapperClass:k,pointerEvents:C="auto",...F},D)=>{let{gl:I,camera:$,scene:N,size:V,raycaster:_,events:T,viewport:Z}=(0,c.z)(),[L]=a.useState(()=>document.createElement(z)),H=a.useRef(),K=a.useRef(null),U=a.useRef(0),B=a.useRef([0,0]),G=a.useRef(null),X=a.useRef(null),q=(null==w?void 0:w.current)||T.connected||I.domElement.parentNode,J=a.useRef(null),Y=a.useRef(!1),Q=a.useMemo(()=>{var e;return M&&"blending"!==M||Array.isArray(M)&&M.length&&(e=M[0])&&"object"==typeof e&&"current"in e},[M]);a.useLayoutEffect(()=>{let e=I.domElement;M&&"blending"===M?(e.style.zIndex=`${Math.floor(S[0]/2)}`,e.style.position="absolute",e.style.pointerEvents="none"):(e.style.zIndex=null,e.style.position=null,e.style.pointerEvents=null)},[M]),a.useLayoutEffect(()=>{if(K.current){let e=H.current=l.createRoot(L);if(N.updateMatrixWorld(),b)L.style.cssText="position:absolute;top:0;left:0;pointer-events:none;overflow:hidden;";else{let e=W(K.current,$,V);L.style.cssText=`position:absolute;top:0;left:0;transform:translate3d(${e[0]}px,${e[1]}px,0);transform-origin:0 0;`}return q&&(o?q.prepend(L):q.appendChild(L)),()=>{q&&q.removeChild(L),e.unmount()}}},[q,b]),a.useLayoutEffect(()=>{k&&(L.className=k)},[k]);let ee=a.useMemo(()=>b?{position:"absolute",top:0,left:0,width:V.width,height:V.height,transformStyle:"preserve-3d",pointerEvents:"none"}:{position:"absolute",transform:h?"translate3d(-50%,-50%,0)":"none",...y&&{top:-V.height/2,left:-V.width/2,width:V.width,height:V.height},...r},[r,h,y,V,b]),et=a.useMemo(()=>({position:"absolute",pointerEvents:C}),[C]);a.useLayoutEffect(()=>{var t,o;Y.current=!1,b?null==(t=H.current)||t.render(a.createElement("div",{ref:G,style:ee},a.createElement("div",{ref:X,style:et},a.createElement("div",{ref:D,className:n,style:r,children:e})))):null==(o=H.current)||o.render(a.createElement("div",{ref:D,style:ee,className:n,children:e}))});let er=a.useRef(!0);(0,c.A)(e=>{if(K.current){$.updateMatrixWorld(),K.current.updateWorldMatrix(!0,!1);let e=b?B.current:W(K.current,$,V);if(b||Math.abs(U.current-$.zoom)>t||Math.abs(B.current[0]-e[0])>t||Math.abs(B.current[1]-e[1])>t){let t=function(e,t){let r=u.setFromMatrixPosition(e.matrixWorld),n=f.setFromMatrixPosition(t.matrixWorld),o=r.sub(n),i=t.getWorldDirection(d);return o.angleTo(i)>Math.PI/2}(K.current,$),r=!1;Q&&(Array.isArray(M)?r=M.map(e=>e.current):"blending"!==M&&(r=[N]));let n=er.current;if(r){let e=function(e,t,r,n){let o=u.setFromMatrixPosition(e.matrixWorld),i=o.clone();i.project(t),r.setFromCamera(i,t);let a=r.intersectObjects(n,!0);if(a.length){let e=a[0].distance,t=o.distanceTo(r.ray.origin);return t<e}return!0}(K.current,$,_,r);er.current=e&&!t}else er.current=!t;n!==er.current&&(E?E(!er.current):L.style.display=er.current?"block":"none");let o=Math.floor(S[0]/2),i=M?Q?[S[0],o]:[o-1,0]:S;if(L.style.zIndex=`${function(e,t,r){if(t instanceof s.PerspectiveCamera||t instanceof s.OrthographicCamera){let n=u.setFromMatrixPosition(e.matrixWorld),o=f.setFromMatrixPosition(t.matrixWorld),i=n.distanceTo(o),a=(r[1]-r[0])/(t.far-t.near),l=r[1]-a*t.far;return Math.round(a*i+l)}}(K.current,$,i)}`,b){let[e,t]=[V.width/2,V.height/2],r=$.projectionMatrix.elements[5]*t,{isOrthographicCamera:n,top:o,left:i,bottom:a,right:l}=$,s=v($.matrixWorldInverse),c=n?`scale(${r})translate(${p(-(l+i)/2)}px,${p((o+a)/2)}px)`:`translateZ(${r}px)`,u=K.current.matrixWorld;P&&((u=$.matrixWorldInverse.clone().transpose().copyPosition(u).scale(K.current.scale)).elements[3]=u.elements[7]=u.elements[11]=0,u.elements[15]=1),L.style.width=V.width+"px",L.style.height=V.height+"px",L.style.perspective=n?"":`${r}px`,G.current&&X.current&&(G.current.style.transform=`${c}${s}translate(${e}px,${t}px)`,X.current.style.transform=g(u,1/((x||10)/400)))}else{let t=void 0===x?1:function(e,t){if(t instanceof s.OrthographicCamera)return t.zoom;if(!(t instanceof s.PerspectiveCamera))return 1;{let r=u.setFromMatrixPosition(e.matrixWorld),n=f.setFromMatrixPosition(t.matrixWorld),o=t.fov*Math.PI/180,i=r.distanceTo(n);return 1/(2*Math.tan(o/2)*i)}}(K.current,$)*x;L.style.transform=`translate3d(${e[0]}px,${e[1]}px,0) scale(${t})`}B.current=e,U.current=$.zoom}}if(!Q&&J.current&&!Y.current){if(b){if(G.current){let e=G.current.children[0];if(null!=e&&e.clientWidth&&null!=e&&e.clientHeight){let{isOrthographicCamera:t}=$;if(t||A)F.scale&&(Array.isArray(F.scale)?F.scale instanceof s.Vector3?J.current.scale.copy(F.scale.clone().divideScalar(1)):J.current.scale.set(1/F.scale[0],1/F.scale[1],1/F.scale[2]):J.current.scale.setScalar(1/F.scale));else{let t=(x||10)/400,r=e.clientWidth*t,n=e.clientHeight*t;J.current.scale.set(r,n,1)}Y.current=!0}}}else{let t=L.children[0];if(null!=t&&t.clientWidth&&null!=t&&t.clientHeight){let e=1/Z.factor,r=t.clientWidth*e,n=t.clientHeight*e;J.current.scale.set(r,n,1),Y.current=!0}J.current.lookAt(e.camera.position)}}});let en=a.useMemo(()=>({vertexShader:b?void 0:`
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
      `}),[b]);return a.createElement("group",(0,i.Z)({},F,{ref:K}),M&&!Q&&a.createElement("mesh",{castShadow:R,receiveShadow:O,ref:J},A||a.createElement("planeGeometry",null),j||a.createElement("shaderMaterial",{side:s.DoubleSide,vertexShader:en.vertexShader,fragmentShader:en.fragmentShader})))})},7784:function(e,t,r){r.d(t,{DM:function(){return d},h8:function(){return v},jc:function(){return h},ln:function(){return m},o5:function(){return p}});let n=Symbol(),o=Symbol(),i=(e,t)=>new Proxy(e,t),a=Object.getPrototypeOf,l=new WeakMap,s=e=>e&&(l.has(e)?l.get(e):a(e)===Object.prototype||a(e)===Array.prototype),c=e=>"object"==typeof e&&null!==e,u=e=>{if(Array.isArray(e))return Array.from(e);let t=Object.getOwnPropertyDescriptors(e);return Object.values(t).forEach(e=>{e.configurable=!0}),Object.create(a(e),t)},f=e=>e[o]||e,d=(e,t,r,a)=>{if(!s(e))return e;let l=a&&a.get(e);if(!l){let t=f(e);l=Object.values(Object.getOwnPropertyDescriptors(t)).some(e=>!e.configurable&&!e.writable)?[t,u(t)]:[t],null==a||a.set(e,l)}let[c,m]=l,p=r&&r.get(c);return p&&!!m===p[1].f||((p=((e,t)=>{let r={f:t},i=!1,a=(t,n)=>{if(!i){let o=r.a.get(e);if(o||(o={},r.a.set(e,o)),"w"===t)o.w=!0;else{let e=o[t];e||(e=new Set,o[t]=e),e.add(n)}}},l={get:(t,n)=>n===o?e:(a("k",n),d(Reflect.get(t,n),r.a,r.c,r.t)),has:(t,o)=>o===n?(i=!0,r.a.delete(e),!0):(a("h",o),Reflect.has(t,o)),getOwnPropertyDescriptor:(e,t)=>(a("o",t),Reflect.getOwnPropertyDescriptor(e,t)),ownKeys:e=>(a("w"),Reflect.ownKeys(e))};return t&&(l.set=l.deleteProperty=()=>!1),[l,r]})(c,!!m))[1].p=i(m||c,p[0]),r&&r.set(c,p)),p[1].a=t,p[1].c=r,p[1].t=a,p[1].p},m=(e,t,r,n)=>{if(Object.is(e,t))return!1;if(!c(e)||!c(t))return!0;let o=r.get(f(e));if(!o)return!0;if(n){let r=n.get(e);if(r&&r.n===t)return r.g;n.set(e,{n:t,g:!1})}let i=null;try{for(let r of o.h||[])if(i=Reflect.has(e,r)!==Reflect.has(t,r))return i;if(!0===o.w){if(i=((e,t)=>{let r=Reflect.ownKeys(e),n=Reflect.ownKeys(t);return r.length!==n.length||r.some((e,t)=>e!==n[t])})(e,t))return i}else for(let r of o.o||[])if(i=!!Reflect.getOwnPropertyDescriptor(e,r)!=!!Reflect.getOwnPropertyDescriptor(t,r))return i;for(let a of o.k||[])if(i=m(e[a],t[a],r,n))return i;return null===i&&(i=!0),i}finally{n&&n.set(e,{n:t,g:i})}},p=e=>s(e)&&e[o]||null,h=(e,t=!0)=>{l.set(e,t)},v=(e,t,r)=>{let n=[],o=new WeakSet,i=(e,a)=>{if(o.has(e))return;c(e)&&o.add(e);let l=c(e)&&t.get(f(e));if(l){var s,u,d;if(null==(s=l.h)||s.forEach(e=>{let t=`:has(${String(e)})`;n.push(a?[...a,t]:[t])}),!0===l.w){let e=":ownKeys";n.push(a?[...a,e]:[e])}else null==(d=l.o)||d.forEach(e=>{let t=`:hasOwn(${String(e)})`;n.push(a?[...a,t]:[t])});null==(u=l.k)||u.forEach(t=>{(!r||"value"in(Object.getOwnPropertyDescriptor(e,t)||{}))&&i(e[t],a?[...a,t]:[t])})}else a&&n.push(a)};return i(e),n}},1021:function(e,t,r){r.d(t,{R:function(){return f}});var n=r(959),o=r(7784),i=r(4322),a=r(853);let{use:l}=n,{useSyncExternalStore:s}=i,c=(e,t)=>{let r=(0,n.useRef)();(0,n.useEffect)(()=>{r.current=(0,o.h8)(e,t,!0)}),(0,n.useDebugValue)(r.current)},u=new WeakMap;function f(e,t){let r=null==t?void 0:t.sync,i=(0,n.useRef)(),f=(0,n.useRef)(),d=!0,m=s((0,n.useCallback)(t=>{let n=(0,a.Ld)(e,t,r);return t(),n},[e,r]),()=>{let t=(0,a.CO)(e,l);try{if(!d&&i.current&&f.current&&!(0,o.ln)(i.current,t,f.current,new WeakMap))return i.current}catch(e){}return t},()=>(0,a.CO)(e,l));d=!1;let p=new WeakMap;(0,n.useEffect)(()=>{i.current=m,f.current=p}),c(m,p);let h=(0,n.useMemo)(()=>new WeakMap,[]);return(0,o.DM)(m,p,h,u)}},853:function(e,t,r){r.d(t,{CO:function(){return f},Ld:function(){return u},sj:function(){return c}});var n=r(7784);let o=e=>"object"==typeof e&&null!==e,i=new WeakMap,a=new WeakSet,l=(e=Object.is,t=(e,t)=>new Proxy(e,t),r=e=>o(e)&&!a.has(e)&&(Array.isArray(e)||!(Symbol.iterator in e))&&!(e instanceof WeakMap)&&!(e instanceof WeakSet)&&!(e instanceof Error)&&!(e instanceof Number)&&!(e instanceof Date)&&!(e instanceof String)&&!(e instanceof RegExp)&&!(e instanceof ArrayBuffer),l=e=>{switch(e.status){case"fulfilled":return e.value;case"rejected":throw e.reason;default:throw e}},s=new WeakMap,c=(e,t,r=l)=>{let o=s.get(e);if((null==o?void 0:o[0])===t)return o[1];let u=Array.isArray(e)?[]:Object.create(Object.getPrototypeOf(e));return(0,n.jc)(u,!0),s.set(e,[t,u]),Reflect.ownKeys(e).forEach(t=>{if(Object.getOwnPropertyDescriptor(u,t))return;let o=Reflect.get(e,t),{enumerable:l}=Reflect.getOwnPropertyDescriptor(e,t),s={value:o,enumerable:l,configurable:!0};if(a.has(o))(0,n.jc)(o,!1);else if(o instanceof Promise)delete s.value,s.get=()=>r(o);else if(i.has(o)){let[e,t]=i.get(o);s.value=c(e,t(),r)}Object.defineProperty(u,t,s)}),Object.preventExtensions(u)},u=new WeakMap,f=[1,1],d=l=>{if(!o(l))throw Error("object required");let s=u.get(l);if(s)return s;let m=f[0],p=new Set,h=(e,t=++f[0])=>{m!==t&&(m=t,p.forEach(r=>r(e,t)))},v=f[1],g=(e=++f[1])=>(v===e||p.size||(v=e,w.forEach(([t])=>{let r=t[1](e);r>m&&(m=r)})),m),y=e=>(t,r)=>{let n=[...t];n[1]=[e,...n[1]],h(n,r)},w=new Map,x=(e,t)=>{if(w.has(e))throw Error("prop listener already exists");if(p.size){let r=t[3](y(e));w.set(e,[t,r])}else w.set(e,[t])},P=e=>{var t;let r=w.get(e);r&&(w.delete(e),null==(t=r[1])||t.call(r))},b=e=>{p.add(e),1===p.size&&w.forEach(([e,t],r)=>{if(t)throw Error("remove already exists");let n=e[3](y(r));w.set(r,[e,n])});let t=()=>{p.delete(e),0===p.size&&w.forEach(([e,t],r)=>{t&&(t(),w.set(r,[e]))})};return t},M=Array.isArray(l)?[]:Object.create(Object.getPrototypeOf(l)),E={deleteProperty(e,t){let r=Reflect.get(e,t);P(t);let n=Reflect.deleteProperty(e,t);return n&&h(["delete",[t],r]),n},set(t,l,s,c){let f=Reflect.has(t,l),m=Reflect.get(t,l,c);if(f&&(e(m,s)||u.has(s)&&e(m,u.get(s))))return!0;P(l),o(s)&&(s=(0,n.o5)(s)||s);let p=s;if(s instanceof Promise)s.then(e=>{s.status="fulfilled",s.value=e,h(["resolve",[l],e])}).catch(e=>{s.status="rejected",s.reason=e,h(["reject",[l],e])});else{!i.has(s)&&r(s)&&(p=d(s));let e=!a.has(p)&&i.get(p);e&&x(l,e)}return Reflect.set(t,l,p,c),h(["set",[l],s,m]),!0}},R=t(M,E);u.set(l,R);let O=[M,g,c,b];return i.set(R,O),Reflect.ownKeys(l).forEach(e=>{let t=Object.getOwnPropertyDescriptor(l,e);"value"in t&&(R[e]=l[e],delete t.value,delete t.writable),Object.defineProperty(M,e,t)}),R})=>[d,i,a,e,t,r,l,s,c,u,f],[s]=l();function c(e={}){return s(e)}function u(e,t,r){let n;let o=i.get(e);o||console.warn("Please use proxy object");let a=[],l=o[3],s=!1,c=l(e=>{if(a.push(e),r){t(a.splice(0));return}n||(n=Promise.resolve().then(()=>{n=void 0,s&&t(a.splice(0))}))});return s=!0,()=>{s=!1,c()}}function f(e,t){let r=i.get(e);r||console.warn("Please use proxy object");let[n,o,a]=r;return a(n,o(),t)}}}]);