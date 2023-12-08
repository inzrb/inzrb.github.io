"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9610],{6687:function(e,n,t){var r=t(1527),a=t(959),o=t(5542),i=t(3387);n.Z=e=>{let n,{size:t,scale:s}=e,l=(0,a.useRef)();return(0,o.A)((e,n)=>{l.current.rotation.x=l.current.rotation.y+=n*Math.PI}),null!==t?n=t:s&&(console.log(s),n=s.xy.min()),(0,r.jsx)(i.xu,{ref:l,scale:n,children:(0,r.jsx)("meshNormalMaterial",{})})}},4936:function(e,n,t){var r=t(1527),a=t(959),o=t(5542),i=t(6195),s=t(4806),l=t(8634);n.Z=()=>{let e=(0,a.useRef)(null),n=(0,a.useRef)(null),t=(0,s.M4)({enableAnim:{value:!0,label:"畸变动画"},enableRotation:{value:!0,label:"旋转动画"},transmission:{value:0,min:0,max:1,label:"透明度"},roughness:{value:0,min:0,max:1,step:.01,label:"粗糙度"},metalness:{value:.2,min:0,max:1,step:.01,label:"金属度"},thickness:{value:.05,min:0,max:3,step:.01,label:"厚度"},ior:{value:1.2,min:0,max:5,step:.01,label:"折射率"},clearcoat:{value:0,min:0,max:1,label:"清漆"},lighting:{options:{physical:"physical",phong:"phong",toon:"toon",basic:"basic",lambert:"lambert",standard:"standard"},value:"physical",label:"光照材质"},blendMode:{options:{add:"add",subtract:"subtract",multiply:"multiply",lighten:"lighten",darken:"darken"},value:"add",label:"叠加模式"},color:{value:"#f00",label:"基础颜色"},lineColor:{value:"#0f0",label:"过渡颜色"},power:{value:3,min:1,max:10,step:.05,label:"渐变范围"},fresnelIntensity:{value:2,min:1,max:10,step:.05,label:"渐变扩散"},displaceScale:{value:.5,min:0,max:2,step:.05,label:"畸变数量"},displaceType:{options:{perlin:"perlin",simplex:"simplex",cell:"cell"},value:"simplex",label:"畸变类型"}}),{width:u}=(0,o.z)(e=>e.viewport);return(0,a.useEffect)(()=>(t.enableRotation&&l.ZP.fromTo(e.current.rotation,{y:0},{y:2*Math.PI,repeat:-1,ease:"elastic.out(.9, .2)",duration:8,delay:2,onUpdate:()=>{e.current&&e.current.material&&(e.current.material.angularSpeedY=e.current.rotation.y)}}),()=>{e.current&&l.ZP.killTweensOf(e.current.rotation)}),[t.enableRotation]),(0,o.A)((e,r)=>{let{_:a}=e;t.enableAnim&&(n.current.offset.x-=5*r)}),(0,r.jsxs)("mesh",{ref:e,position:[0,-5,0],children:[(0,r.jsx)("sphereGeometry",{args:[u/10,128,128]}),(0,r.jsxs)(i.ud,{...t,children:[(0,r.jsx)(i.lR,{ref:n,strength:4,scale:t.displaceScale,type:t.displaceType}),(0,r.jsx)(i.YJ,{mode:t.blendMode,color:t.lineColor,intensity:t.fresnelIntensity,power:t.power,bias:.01})]})]})}},2172:function(e,n,t){var r=t(1527),a=t(4771),o=t(670),i=t(3276),s=t(959),l=t(8634),u=t(526),c=t(1021);n.Z=function(e){let{nodes:n}=(0,o.L)("/models/shapes-transformed.glb"),t=(0,c.R)(u.h),m=(0,s.useRef)(null);return(0,s.useEffect)(()=>(t.isGLSL?l.ZP.to(m.current.position,{x:1,ease:"expo.inOut",duration:.7}):l.ZP.to(m.current.position,{x:-1,ease:"expo.inOut",duration:.7}),()=>{l.ZP.killTweensOf(m.current.position)}),[t.isGLSL]),(0,r.jsxs)("group",{...e,dispose:null,rotation:[Math.PI/2,0,0],children:[(0,r.jsx)("mesh",{geometry:n.Cylinder.geometry,onPointerDown:()=>{let e=t.isGLSL;u.h.isGLSL=!e},children:(0,r.jsx)(i.z,{backside:!0,color:"#fff",backsideThickness:0,samples:32,transmission:1,roughness:.8,ior:1.05,thickness:.3,chromaticAberration:0,anisotropy:10,attenuationDistance:5,clearcoat:1})}),(0,r.jsx)("mesh",{geometry:n.Cylinder002.geometry,scale:[.95,.7,.95],children:(0,r.jsx)(i.z,{side:a.BackSide,samples:3,thickness:.5,anisotropy:5.42,chromaticAberration:.1,roughness:.3,ior:1.5,color:"#000",toneMapped:!1,envMapIntensity:0})}),(0,r.jsx)("mesh",{ref:m,geometry:n.Cylinder001.geometry,position:[-1,0,0],scale:[.94,.61,.94],children:(0,r.jsx)("meshStandardMaterial",{color:"#fff",roughness:0,metalness:.3})})]})}},1274:function(e,n,t){t.d(n,{Z:function(){return d}});var r=t(1527),a=t(959),o=t(5542),i=t(8634),s=t(4771);let l="\n//\n// Description : Array and textureless GLSL 2D/3D/4D simplex\n//               noise functions.\n//      Author : Ian McEwan, Ashima Arts.\n//  Maintainer : ijm\n//     Lastmod : 20110822 (ijm)\n//     License : Copyright (C) 2011 Ashima Arts. All rights reserved.\n//               Distributed under the MIT License. See LICENSE file.\n//               https://github.com/ashima/webgl-noise\n//\n\nfloat easeInOutCirc(float x) {\n  return x < 0.5 ? (1.0 - sqrt(1.0 - pow(2.0 * x, 2.0))) / 2.0 : (sqrt(1.0 - pow(-2.0 * x + 2.0, 2.0)) + 1.0) / 2.0;\n  }\n\nvec3 mod289(vec3 x) {\n  return x - floor(x * (1.0 / 289.0)) * 289.0;\n}\n\nvec4 mod289(vec4 x) {\n  return x - floor(x * (1.0 / 289.0)) * 289.0;\n}\n\nvec4 permute(vec4 x) {\n     return mod289(((x*34.0)+1.0)*x);\n}\n\nvec4 taylorInvSqrt(vec4 r)\n{\n  return 1.79284291400159 - 0.85373472095314 * r;\n}\n\nfloat snoise(vec3 v)\n  {\n  const vec2  C = vec2(1.0/6.0, 1.0/3.0) ;\n  const vec4  D = vec4(0.0, 0.5, 1.0, 2.0);\n\n// First corner\n  vec3 i  = floor(v + dot(v, C.yyy) );\n  vec3 x0 =   v - i + dot(i, C.xxx) ;\n\n// Other corners\n  vec3 g = step(x0.yzx, x0.xyz);\n  vec3 l = 1.0 - g;\n  vec3 i1 = min( g.xyz, l.zxy );\n  vec3 i2 = max( g.xyz, l.zxy );\n\n  //   x0 = x0 - 0.0 + 0.0 * C.xxx;\n  //   x1 = x0 - i1  + 1.0 * C.xxx;\n  //   x2 = x0 - i2  + 2.0 * C.xxx;\n  //   x3 = x0 - 1.0 + 3.0 * C.xxx;\n  vec3 x1 = x0 - i1 + C.xxx;\n  vec3 x2 = x0 - i2 + C.yyy; // 2.0*C.x = 1/3 = C.y\n  vec3 x3 = x0 - D.yyy;      // -1.0+3.0*C.x = -0.5 = -D.y\n\n// Permutations\n  i = mod289(i);\n  vec4 p = permute( permute( permute(\n             i.z + vec4(0.0, i1.z, i2.z, 1.0 ))\n           + i.y + vec4(0.0, i1.y, i2.y, 1.0 ))\n           + i.x + vec4(0.0, i1.x, i2.x, 1.0 ));\n\n// Gradients: 7x7 points over a square, mapped onto an octahedron.\n// The ring size 17*17 = 289 is close to a multiple of 49 (49*6 = 294)\n  float n_ = 0.142857142857; // 1.0/7.0\n  vec3  ns = n_ * D.wyz - D.xzx;\n\n  vec4 j = p - 49.0 * floor(p * ns.z * ns.z);  //  mod(p,7*7)\n\n  vec4 x_ = floor(j * ns.z);\n  vec4 y_ = floor(j - 7.0 * x_ );    // mod(j,N)\n\n  vec4 x = x_ *ns.x + ns.yyyy;\n  vec4 y = y_ *ns.x + ns.yyyy;\n  vec4 h = 1.0 - abs(x) - abs(y);\n\n  vec4 b0 = vec4( x.xy, y.xy );\n  vec4 b1 = vec4( x.zw, y.zw );\n\n  //vec4 s0 = vec4(lessThan(b0,0.0))*2.0 - 1.0;\n  //vec4 s1 = vec4(lessThan(b1,0.0))*2.0 - 1.0;\n  vec4 s0 = floor(b0)*2.0 + 1.0;\n  vec4 s1 = floor(b1)*2.0 + 1.0;\n  vec4 sh = -step(h, vec4(0.0));\n\n  vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy ;\n  vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww ;\n\n  vec3 p0 = vec3(a0.xy,h.x);\n  vec3 p1 = vec3(a0.zw,h.y);\n  vec3 p2 = vec3(a1.xy,h.z);\n  vec3 p3 = vec3(a1.zw,h.w);\n\n//Normalise gradients\n  vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));\n  p0 *= norm.x;\n  p1 *= norm.y;\n  p2 *= norm.z;\n  p3 *= norm.w;\n\n// Mix final noise value\n  vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);\n  m = m * m;\n  return 42.0 * dot( m*m, vec4( dot(p0,x0), dot(p1,x1),\n                                dot(p2,x2), dot(p3,x3) ) );\n  }\n";class u extends s.MeshPhysicalMaterial{onBeforeCompile(e){e.uniforms.time=this._time,e.uniforms.radius=this._radius,e.uniforms.angularSpeedY=this._angularSpeedY,e.uniforms.colorIn=this._colorIn,e.uniforms.colorOut=this._colorOut,e.uniforms.radiusVariationAmplitude=this._radiusVariationAmplitude,e.vertexShader="\n        uniform float radius;\n        uniform float time;\n        uniform float angularSpeedY;\n        varying vec3 myTrasformed;\n        uniform float radiusVariationAmplitude;\n        ".concat(l,"\n\n        float fsnoise(float val1, float val2, float val3){\n            return snoise(vec3(val1,val2,val3));\n        }\n\n        vec3 distortFunct(vec3 transformed, float factor) {\n            float radiusVariationAmplitude = 8.0;\n            float radiusNoiseFrequency = .4;\n            float radiusVariation = (-fsnoise(\n            transformed.x * radiusNoiseFrequency + time,\n            transformed.y * radiusNoiseFrequency + time,\n            transformed.z * radiusNoiseFrequency + time \n            ) * .5 + .2) * radiusVariationAmplitude * factor;\n\n            \n\n            vec3 result = vec3(0.0);\n            vec3 norm = normalize(transformed);\n            float radVar = radiusVariation + radius;\n\n            if (radiusVariation > 0.0) {\n            float aaaa = radiusVariation * (1.0 - abs(norm.y)) * -(2.0*angularSpeedY);\n            float newX = norm.x * cos(aaaa) + norm.z * sin(aaaa);\n            float newZ = norm.z * cos(aaaa) + (-1.0) * norm.x * sin(aaaa);\n            result = vec3(newX * radVar, norm.y * radVar, newZ * radVar);\n            } else {\n            result = norm * radVar;\n            }\n            return vec3(result.x,result.y,result.z);\n        }\n\n        vec3 orthogonal(vec3 v) {\n            return normalize(abs(v.x) > abs(v.z) ? vec3(-v.y, v.x, 0.0)\n            : vec3(0.0, -v.z, v.y));\n        }\n\n        vec3 distortNormal(vec3 position, vec3 distortedPosition, vec3 normal){\n            vec3 tangent1 = orthogonal(normal);\n            vec3 tangent2 = normalize(cross(normal, tangent1));\n            vec3 nearby1 = position + tangent1 * 0.2;\n            vec3 nearby2 = position + tangent2 * 0.2;\n            vec3 distorted1 = distortFunct(nearby1, 1.0);\n            vec3 distorted2 = distortFunct(nearby2, 1.0);\n            return normalize(cross(distorted1 - distortedPosition, distorted2 - distortedPosition));\n        }\n        ").concat(e.vertexShader,"\n        "),e.vertexShader=e.vertexShader.replace("#include <project_vertex>","\n            #include <project_vertex>\n\n            vec4 myWorldPosition = modelMatrix * vec4(position, 1.0);\n            transformed = distortFunct(transformed, 1.0);\n            myTrasformed = transformed;\n            vec3 distortedNormal = distortNormal(position, transformed, normal);\n            vNormal = normal + distortedNormal;\n            gl_Position = projectionMatrix * modelViewMatrix * vec4(transformed,1.);\n            "),e.fragmentShader="\n        uniform float time;\n        uniform vec2 resolution;\n        uniform vec3 colorIn;\n        uniform vec3 colorOut;\n        uniform float radius;\n        varying vec3 myTrasformed;\n        uniform float radiusVariationAmplitude;\n\n        ".concat(l,"\n        ").concat(e.fragmentShader,"\n        ")}get time(){return this._time.value}set time(e){this._time.value=e}get angularSpeedY(){return this._angularSpeedY.value}set angularSpeedY(e){this._angularSpeedY.value=e}get radius(){return this._radius.value}set radius(e){this._radius.value=e}get resolution(){return this._resolution.value}set resolution(e){this._resolution.value=e}get colorIn(){return this._colorIn.value}set colorIn(e){this._colorIn.value=e}get colorOut(){return this._colorOut.value}set colorOut(e){this._colorOut.value=e}get radiusVariationAmplitude(){return this._radiusVariationAmplitude.value}set radiusVariationAmplitude(e){this._radiusVariationAmplitude.value=e}constructor(e={}){super(e),this.setValues(e),this._time={value:0},this._angularSpeedY={value:0},this._radius={value:0},this._resolution={value:new s.Vector2},this._colorIn={value:new s.Vector3},this._colorOut={value:new s.Vector3},this._radiusVariationAmplitude={value:1}}}let c=a.forwardRef((e,n)=>{let{speed:t=3,...i}=e,[s]=(0,a.useState)(()=>new u,[]);return(0,o.A)(e=>{s&&(s.time+=.005)}),(0,r.jsx)("primitive",{object:s,ref:n,attach:"material",...i})});var m=t(4806);function d(){let e=(0,a.useRef)(),{size:n}=(0,o.z)(),t=(0,m.M4)({enableRotation:{value:!0,label:"旋转动画"},transmission:{value:0,min:0,max:1,label:"透明度"},roughness:{value:.2,min:0,max:1,step:.01,label:"粗糙度"},metalness:{value:.9,min:0,max:1,step:.01,label:"金属度"},thickness:{value:.05,min:0,max:1,step:.01,label:"厚度"},radius:{value:4,min:1,max:5,step:.01,label:"半径"},clearcoat:{value:0,min:0,max:1,label:"清漆"},color:{value:"#f00",label:"基础颜色"}});return(0,a.useEffect)(()=>(t.enableRotation&&i.ZP.fromTo(e.current.rotation,{y:0},{y:2*Math.PI,repeat:-1,ease:"elastic.out(.9, .2)",duration:8,delay:2}),()=>{e.current&&i.ZP.killTweensOf(e.current.rotation)}),[t.enableRotation]),(0,r.jsxs)("mesh",{ref:e,position:[0,-5,0],scale:1.35,children:[(0,r.jsx)("sphereBufferGeometry",{args:[t.radius,512,512]}),(0,r.jsx)(c,{...t,resolution:[n.width,n.height]})]})}},526:function(e,n,t){t.d(n,{h:function(){return a}});var r=t(853);let a=(0,r.sj)({isGLSL:!1})}}]);