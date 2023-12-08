(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[671],{1826:function(e,t,a){"use strict";a.d(t,{v:function(){return s}});var n=a(959),r=a(4771),o=a(5542);function s(e,t){let a=n.useRef(),[s]=n.useState(()=>t?t instanceof r.Object3D?{current:t}:t:a),[l]=n.useState(()=>new r.AnimationMixer(void 0));n.useLayoutEffect(()=>{t&&(s.current=t instanceof r.Object3D?t:t.current),l._root=s.current});let i=n.useRef({}),c=n.useMemo(()=>{let t={};return e.forEach(e=>Object.defineProperty(t,e.name,{enumerable:!0,get(){if(s.current)return i.current[e.name]||(i.current[e.name]=l.clipAction(e,s.current))},configurable:!0})),{ref:s,clips:e,actions:t,names:e.map(e=>e.name),mixer:l}},[e]);return(0,o.A)((e,t)=>l.update(t)),n.useEffect(()=>{let e=s.current;return()=>{i.current={},l.stopAllAction(),Object.values(c.actions).forEach(t=>{e&&l.uncacheAction(t,e)})}},[e]),c}},7483:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/labs/spiderman_anim",function(){return a(6282)}])},6687:function(e,t,a){"use strict";var n=a(1527),r=a(959),o=a(5542),s=a(3387);t.Z=e=>{let t,{size:a,scale:l}=e,i=(0,r.useRef)();return(0,o.A)((e,t)=>{i.current.rotation.x=i.current.rotation.y+=t*Math.PI}),null!==a?t=a:l&&(console.log(l),t=l.xy.min()),(0,n.jsx)(s.xu,{ref:i,scale:t,children:(0,n.jsx)("meshNormalMaterial",{})})}},6282:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return x}});var n=a(1527),r=a(83),o=a(959),s=a(4771),l=a(5542);let i=({focus:e=0,size:t=25,samples:a=10}={})=>`
#define PENUMBRA_FILTER_SIZE float(${t})
#define RGB_NOISE_FUNCTION(uv) (randRGB(uv))
vec3 randRGB(vec2 uv) {
  return vec3(
    fract(sin(dot(uv, vec2(12.75613, 38.12123))) * 13234.76575),
    fract(sin(dot(uv, vec2(19.45531, 58.46547))) * 43678.23431),
    fract(sin(dot(uv, vec2(23.67817, 78.23121))) * 93567.23423)
  );
}

vec3 lowPassRandRGB(vec2 uv) {
  // 3x3 convolution (average)
  // can be implemented as separable with an extra buffer for a total of 6 samples instead of 9
  vec3 result = vec3(0);
  result += RGB_NOISE_FUNCTION(uv + vec2(-1.0, -1.0));
  result += RGB_NOISE_FUNCTION(uv + vec2(-1.0,  0.0));
  result += RGB_NOISE_FUNCTION(uv + vec2(-1.0, +1.0));
  result += RGB_NOISE_FUNCTION(uv + vec2( 0.0, -1.0));
  result += RGB_NOISE_FUNCTION(uv + vec2( 0.0,  0.0));
  result += RGB_NOISE_FUNCTION(uv + vec2( 0.0, +1.0));
  result += RGB_NOISE_FUNCTION(uv + vec2(+1.0, -1.0));
  result += RGB_NOISE_FUNCTION(uv + vec2(+1.0,  0.0));
  result += RGB_NOISE_FUNCTION(uv + vec2(+1.0, +1.0));
  result *= 0.111111111; // 1.0 / 9.0
  return result;
}
vec3 highPassRandRGB(vec2 uv) {
  // by subtracting the low-pass signal from the original signal, we're being left with the high-pass signal
  // hp(x) = x - lp(x)
  return RGB_NOISE_FUNCTION(uv) - lowPassRandRGB(uv) + 0.5;
}


vec2 vogelDiskSample(int sampleIndex, int sampleCount, float angle) {
  const float goldenAngle = 2.399963f; // radians
  float r = sqrt(float(sampleIndex) + 0.5f) / sqrt(float(sampleCount));
  float theta = float(sampleIndex) * goldenAngle + angle;
  float sine = sin(theta);
  float cosine = cos(theta);
  return vec2(cosine, sine) * r;
}
float penumbraSize( const in float zReceiver, const in float zBlocker ) { // Parallel plane estimation
  return (zReceiver - zBlocker) / zBlocker;
}
float findBlocker(sampler2D shadowMap, vec2 uv, float compare, float angle) {
  float texelSize = 1.0 / float(textureSize(shadowMap, 0).x);
  float blockerDepthSum = float(${e});
  float blockers = 0.0;

  int j = 0;
  vec2 offset = vec2(0.);
  float depth = 0.;

  #pragma unroll_loop_start
  for(int i = 0; i < ${a}; i ++) {
    offset = (vogelDiskSample(j, ${a}, angle) * texelSize) * 2.0 * PENUMBRA_FILTER_SIZE;
    depth = unpackRGBAToDepth( texture2D( shadowMap, uv + offset));
    if (depth < compare) {
      blockerDepthSum += depth;
      blockers++;
    }
    j++;
  }
  #pragma unroll_loop_end

  if (blockers > 0.0) {
    return blockerDepthSum / blockers;
  }
  return -1.0;
}

        
float vogelFilter(sampler2D shadowMap, vec2 uv, float zReceiver, float filterRadius, float angle) {
  float texelSize = 1.0 / float(textureSize(shadowMap, 0).x);
  float shadow = 0.0f;
  int j = 0;
  vec2 vogelSample = vec2(0.0);
  vec2 offset = vec2(0.0);
  #pragma unroll_loop_start
  for (int i = 0; i < ${a}; i++) {
    vogelSample = vogelDiskSample(j, ${a}, angle) * texelSize;
    offset = vogelSample * (1.0 + filterRadius * float(${t}));
    shadow += step( zReceiver, unpackRGBAToDepth( texture2D( shadowMap, uv + offset ) ) );
    j++;
  }
  #pragma unroll_loop_end
  return shadow * 1.0 / ${a}.0;
}

float PCSS (sampler2D shadowMap, vec4 coords) {
  vec2 uv = coords.xy;
  float zReceiver = coords.z; // Assumed to be eye-space z in this code
  float angle = highPassRandRGB(gl_FragCoord.xy).r * PI2;
  float avgBlockerDepth = findBlocker(shadowMap, uv, zReceiver, angle);
  if (avgBlockerDepth == -1.0) {
    return 1.0;
  }
  float penumbraRatio = penumbraSize(zReceiver, avgBlockerDepth);
  return vogelFilter(shadowMap, uv, zReceiver, 1.25 * penumbraRatio, angle);
}`;function c(e,t,a){t.traverse(t=>{t.material&&(e.properties.remove(t.material),null==t.material.dispose||t.material.dispose())}),e.info.programs.length=0,e.compile(t,a)}function u({focus:e=0,samples:t=10,size:a=25}){let n=(0,l.z)(e=>e.gl),r=(0,l.z)(e=>e.scene),u=(0,l.z)(e=>e.camera);return o.useEffect(()=>{let o=s.ShaderChunk.shadowmap_pars_fragment;return s.ShaderChunk.shadowmap_pars_fragment=s.ShaderChunk.shadowmap_pars_fragment.replace("#ifdef USE_SHADOWMAP","#ifdef USE_SHADOWMAP\n"+i({size:a,samples:t,focus:e})).replace("#if defined( SHADOWMAP_TYPE_PCF )","\nreturn PCSS(shadowMap, shadowCoord);\n#if defined( SHADOWMAP_TYPE_PCF )"),c(n,r,u),()=>{s.ShaderChunk.shadowmap_pars_fragment=o,c(n,r,u)}},[e,a,t]),null}var f=a(6468),p=a(3676),d=a(670),m=a(1826),v=a(4806);function h(e){let{nodes:t,materials:a,animations:r}=(0,d.L)("/models/spiderman.glb"),{ref:s,actions:l,names:i}=(0,m.v)(r),{animsName:c,animsPaused:u,animsReversed:f,animsSpeed:p}=(0,v.M4)({animsName:{label:"动画名称",options:i},animsPaused:{label:"暂停动画",value:!1},animsReversed:{label:"反向动画",value:!1},animsSpeed:{label:"动画速度",value:1,max:3,min:.1,step:.1}});return(0,o.useEffect)(()=>{let e=l[c];return e.setEffectiveTimeScale(f?-p:p),e.reset().fadeIn(.5).play(),u&&(e.paused=!0),()=>{e.fadeOut(.5)}},[c]),(0,o.useEffect)(()=>{let e=l[c];u?e.paused=!0:(e.paused=!1,e.setEffectiveTimeScale(f?-p:p))},[u]),(0,o.useEffect)(()=>{let e=l[c];u||e.setEffectiveTimeScale(f?-p:p)},[f,p]),(0,n.jsxs)("group",{...e,castShadow:!0,receiveShadow:!0,ref:s,children:[(0,n.jsx)("skinnedMesh",{castShadow:!0,receiveShadow:!0,name:"Spiderman",geometry:t.Spiderman.geometry,material:a.Body_sub1SpidermanBody,skeleton:t.Spiderman.skeleton}),(0,n.jsx)("primitive",{object:t.mixamorigHips})]})}var g=a(7848),_=a.n(g),S=a(6687);function x(){return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(_(),{children:(0,n.jsx)("title",{children:"Labs - Spiderman anim"})}),(0,n.jsx)("section",{className:"lab_show",children:(0,n.jsxs)(r.Xz,{gl:{toneMapping:s.LinearToneMapping},shadows:!0,dpr:[1,1.5],camera:{position:[0,0,8],fov:45,near:1,far:45},children:[(0,n.jsx)(N,{}),(0,n.jsx)(o.Suspense,{fallback:(0,n.jsx)(S.Z,{size:.5}),children:(0,n.jsx)(h,{position:[0,-1,0],rotation:[Math.PI/2,0,0],scale:.01})})]})})]})}function N(){return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("color",{attach:"background",args:["#f0f0f0"]}),(0,n.jsx)("ambientLight",{intensity:2}),(0,n.jsx)("directionalLight",{intensity:2,position:[-5,5,5],castShadow:!0,"shadow-mapSize":1024}),(0,n.jsx)("pointLight",{intensity:1,position:[-.15,1,0]}),(0,n.jsx)("pointLight",{intensity:1,position:[2,1,0]}),(0,n.jsxs)("mesh",{rotation:[-.5*Math.PI,0,0],position:[0,-1.01,0],receiveShadow:!0,children:[(0,n.jsx)("planeGeometry",{args:[100,100]}),(0,n.jsx)("shadowMaterial",{transparent:!0,opacity:.8})]}),(0,n.jsx)(u,{size:40,samples:32,focus:0}),(0,n.jsx)(p.xC,{children:(0,n.jsx)(p.lZ,{middleGrey:1,maxLuminance:16})}),(0,n.jsx)(f.z,{makeDefault:!0,minDistance:4,maxDistance:15,enablePan:!1})]})}},7848:function(e,t,a){e.exports=a(3397)}},function(e){e.O(0,[511,749,83,3045,670,8517,6468,1723,9774,2888,179],function(){return e(e.s=7483)}),_N_E=e.O()}]);