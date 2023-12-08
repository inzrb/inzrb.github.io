(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1906],{3387:function(e,t,r){"use strict";r.d(t,{xu:function(){return l}});var n=r(8126),o=r(959),i=r(4771);function a(e,t){let r=e+"Geometry";return o.forwardRef(({args:e,children:i,...a},l)=>{let s=o.useRef(null);return o.useImperativeHandle(l,()=>s.current),o.useLayoutEffect(()=>void(null==t||t(s.current))),o.createElement("mesh",(0,n.Z)({ref:s},a),o.createElement(r,{attach:"geometry",args:e}),i)})}let l=a("box");a("circle"),a("cone"),a("cylinder"),a("sphere"),a("plane"),a("tube"),a("torus"),a("torusKnot"),a("tetrahedron"),a("ring"),a("polyhedron"),a("icosahedron"),a("octahedron"),a("dodecahedron"),a("extrude"),a("lathe"),a("capsule"),a("shape",({geometry:e})=>{let t=e.attributes.position,r=new i.Box3().setFromBufferAttribute(t),n=new i.Vector3;r.getSize(n);let o=[],a=0,l=0,s=0,c=0;for(let e=0;e<t.count;e++)a=t.getX(e),l=t.getY(e),s=(a-r.min.x)/n.x,c=(l-r.min.y)/n.y,o.push(s,c);e.setAttribute("uv",new i.Float32BufferAttribute(o,2))})},1223:function(e,t,r){"use strict";r.d(t,{R:function(){return a}});var n=r(959),o=r(4771),i=r(5542);function a(e,t,r){let a=(0,i.z)(e=>e.size),l=(0,i.z)(e=>e.viewport),s="number"==typeof e?e:a.width*l.dpr,c="number"==typeof t?t:a.height*l.dpr,u=("number"==typeof e?r:e)||{},{samples:f=0,depth:d,...p}=u,m=n.useMemo(()=>{let e=new o.WebGLRenderTarget(s,c,{minFilter:o.LinearFilter,magFilter:o.LinearFilter,type:o.HalfFloatType,...p});return d&&(e.depthTexture=new o.DepthTexture(s,c,o.FloatType)),e.samples=f,e},[]);return n.useLayoutEffect(()=>{m.setSize(s,c),f&&(m.samples=f)},[f,m,s,c]),n.useEffect(()=>()=>m.dispose(),[]),m}},9674:function(e){e.exports={"<<=":!0,">>=":!0,"++":!0,"--":!0,"+=":!0,"-=":!0,"*=":!0,"/=":!0,"%=":!0,"&=":!0,"^=":!0,"|=":!0,"=":!0}},6552:function(e){e.exports={precision:!0,highp:!0,mediump:!0,lowp:!0,attribute:!0,const:!0,uniform:!0,varying:!0,break:!0,continue:!0,do:!0,for:!0,while:!0,if:!0,else:!0,in:!0,out:!0,inout:!0,true:!0,false:!0,return:!0}},5214:function(e,t,r){var n=r(9674),o=r(6552);e.exports=function(e){for(var t=0,r=0;r<e.length;r++){var i=e[r],a=i.type;i.assignment=!1,i.declaration=!1,("ident"===a||"builtin"===a)&&(t=r+1,c(1),"operator"===e[t].type&&n[e[t].data]&&(i.assignment=!0))}for(var r=0;r<e.length;r++){var l=e[r],a=l.type,s=l.data;if(l.declaration=!1,"keyword"===a){if(o[s])continue}else if("ident"!==a)continue;if(t=r+1,u(),"ident"===e[t].type){if(e[t++].declaration=!0,u(),"("===e[t].data){for(t++,c(1);e[t]&&")"!==e[t].data&&("keyword"===e[t].type||"ident"===e[t].type);)t++,c(1),"ident"===e[t].type&&(e[t++].declaration=!0,c(1),u(),c(1),","===e[t].data&&(t++,c(1)));r=t;continue}for(;e[t]&&";"!==e[t].data;)","===e[t].data?(t++,c(1),(e[t].declaration="ident"===e[t].type)&&t++):(c(1),function(){if(e[t]&&"("===e[t].data){var r=0;do{if(";"===e[t].data)break;"("===e[t].data&&r++,")"===e[t].data&&r--}while(r&&e[++t])}}(),c(1),t++);r=t}}for(var r=0;r<e.length;r++){var i=e[r];if("keyword"===i.type&&"struct"===i.data&&(t=r+1,c(1),"ident"===e[t].type)&&(t++,c(1),"{"===e[t++].data)){for(c(1);"ident"===e[t].type||"keyword"===e[t].type;){do t++,c(1),e[t].structMember=!0,e[t].declaration=!1,t++,u();while(","===e[t].data);";"===e[t].data&&t++,c()}if(t++,c(1),"ident"===e[t].type)for(e[t].declaration=!0,c(1);","===e[++t].data;)c(1),t++,c(1),"ident"===e[t].type&&(e[t].declaration=!0),c(1)}}return e;function c(r){for(;e[t]&&"whitespace"===e[t].type;)t++}function u(){for(;e[t]&&("integer"===e[t].type||"["===e[t].data||"]"===e[t].data||"whitespace"===e[t].type);)t++}}},893:function(e){e.exports=function(e){for(var t=!1,r=0,n=0;n<e.length;n++)switch(t=t||"keyword"===e[n].type&&"for"===e[n].data,e[n].data){case"(":e[n].depth=t?r++:r;break;case"{":e[n].depth=t?r:r++,t=!1;break;case"}":e[n].depth=--r;break;default:e[n].depth=r}for(var n=0;n<e.length;n++){var o=e[n],i=n+1;if(("ident"===o.type||"keyword"===o.type)&&(a(),"ident"===e[i].type&&(a(),"("===e[++i].data))){for(;e[i]&&";"!==e[i].data&&"{"!==e[i].data;)e[i++].depth++;e[i]&&"{"===e[i].data&&e[i].depth++}}return e;function a(){for(;e[i]&&("whitespace"===e[i].type||"["===e[i].data||"]"===e[i].data||"integer"===e[i].data);)i++}}},8117:function(e,t,r){e.exports=function(e,t){var n;r(893)(e),r(8847)(e),r(2391)(e),r(5214)(e);for(var o=function(e){for(var t={},r=0;r<e.length;r++){var n=e[r];n.declaration&&(t[n.scope]=t[n.scope]||{},t[n.scope][n.data]=n)}return t}(e),i=t||(n=0,function(e){return e+"_"+(n++).toString(36)}),a={},l=0;l<e.length;l++){var s=e[l],c=s.stack,u=s.data;if(s.descoped=!1,"ident"===s.type&&!s.property&&!s.structMember){for(var f=!1,d=c.length-1;d>=0;d--){var p=o[c[d]];if(p&&p[u]){if(f=!0,d)break;s.descoped=s.data,s.data=a[u]=a[u]||i(u,s)||s.data}}f||(s.descoped=s.data,s.data=a[u]=a[u]||i(u,s)||s.data)}}return e}},1884:function(e){function t(e){return function(t){return"operator"===t.type&&(!e||t.data===e)}}function r(e){return"whitespace"!==e.type}e.exports=function(e){var n,o,i,a=null,l=null,s=0,c=0,u=0,f=0,d=0,p=[];for(n=0;n<e.length;n++)if("{"===(i=e[n]).data){if(s&&s++||(o=h(n,t(")"),t()))<0||(f=o,(o=h(o,t("("),t(")")))<0)||(d=o,(o=h(o,r))<0||"ident"!==e[o].type)||(l=e[o].data,(o=h(o,r))<0))continue;s=1,c=n,a=e[o].data,u=o;var m=h(o,r);switch(e[m]&&e[m].data){case"lowp":case"highp":case"mediump":u=m}}else if(s&&"}"===i.data){if(--s)continue;p.push({name:l,type:a,body:[c+1,n],args:[d,f+1],outer:[u,n+1]})}for(n=0;n<e.length;n++)if(";"===(i=e[n]).data){if((o=h(n,t(")"),t()))<0||(f=o,(o=h(o,t("("),t(")")))<0)||(d=o,(o=h(o,r))<0||"ident"!==e[o].type)||(l=e[o].data,(o=h(o,r))<0||"operator"===e[o].type||"return"===e[o].data))continue;a=e[o].data,p.push({name:l,type:a,body:!1,args:[d,f+1],outer:[o,n+1]})}return p.sort(function(e,t){return e.outer[0]-t.outer[0]});function h(t,r,n){for(var o=t-1;o>=0;o--){if(r(e[o]))return o;if(n&&n(e[o]))break}return -1}}},2391:function(e){e.exports=function(e){for(var t=0;t<e.length;t++){var r=e[t];if(r.property=!1,"ident"===r.type){for(var n=t;e[--n]&&"whitespace"===e[n].type;);e[n]&&"operator"===e[n].type&&"."===e[n].data&&(r.property=!0)}}return e}},8847:function(e){e.exports=function(e){var t=[0],r=t[0],n=0;if(!e||!e.length)return e;if(!("depth"in e[0]))throw Error("glsl-token-scope: No scope depth defined on tokens! Use glsl-token-depth on these tokens first");for(var o=0;o<e.length;o++){var i=e[o],a=i.depth;a>n?t.push(++r):a<n&&t.splice(-1,1),i.scope=t[t.length-1],i.stack=t.slice(),n=i.depth}return e}},9821:function(e){e.exports=function(e){for(var t=[],r=0;r<e.length;r++)"eof"!==e[r].type&&t.push(e[r].data);return t.join("")}},9267:function(e,t,r){e.exports=function(e){var t,r,c,u=0,f=0,d=999,p=[],m=[],h=1,v=0,g=0,_=!1,y=!1,x="",b=i,w=n;"300 es"===(e=e||{}).version&&(b=l,w=a);for(var z={},P={},u=0;u<b.length;u++)z[b[u]]=!0;for(var u=0;u<w.length;u++)P[w[u]]=!0;return function(e){return(m=[],null!==e)?function(e){var n;for(u=0,e.toString&&(e=e.toString()),x+=e.replace(/\r\n/g,"\n"),c=x.length;t=x[u],u<c;){switch(n=u,d){case 0:"/"===t&&"*"===r?(p.push(t),M(p.join("")),d=999):(p.push(t),r=t),u+=1;break;case 1:case 2:u=function(){return("\r"===t||"\n"===t)&&"\\"!==r?(M(p.join("")),d=999,u):(p.push(t),r=t,u+1)}();break;case 3:u=function(){if("."===r&&/\d/.test(t))return d=5,u;if("/"===r&&"*"===t)return d=0,u;if("/"===r&&"/"===t)return d=1,u;if("."===t&&p.length){for(;S(p););return d=5,u}if(";"===t||")"===t||"("===t){if(p.length)for(;S(p););return M(t),d=999,u+1}var e=2===p.length&&"="!==t;if(/[\w_\d\s]/.test(t)||e){for(;S(p););return d=999,u}return p.push(t),r=t,u+1}();break;case 4:u="."===t||/[eE]/.test(t)?(p.push(t),d=5,r=t,u+1):"x"===t&&1===p.length&&"0"===p[0]?(d=11,p.push(t),r=t,u+1):/[^\d]/.test(t)?(M(p.join("")),d=999,u):(p.push(t),r=t,u+1);break;case 11:u=/[^a-fA-F0-9]/.test(t)?(M(p.join("")),d=999,u):(p.push(t),r=t,u+1);break;case 5:"f"===t&&(p.push(t),r=t,u+=1),u=/[eE]/.test(t)||("-"===t||"+"===t)&&/[eE]/.test(r)?(p.push(t),r=t,u+1):/[^\d]/.test(t)?(M(p.join("")),d=999,u):(p.push(t),r=t,u+1);break;case 9999:u=function(){if(/[^\d\w_]/.test(t)){var e=p.join("");return d=P[e]?8:z[e]?7:6,M(p.join("")),d=999,u}return p.push(t),r=t,u+1}();break;case 9:u=/[^\s]/g.test(t)?(M(p.join("")),d=999,u):(p.push(t),r=t,u+1);break;case 999:p=p.length?[]:p,u="/"===r&&"*"===t?(g=f+u-1,d=0,r=t,u+1):"/"===r&&"/"===t?(g=f+u-1,d=1,r=t,u+1):("#"===t?(d=2,g=f+u):/\s/.test(t)?(d=9,g=f+u):(_=/\d/.test(t),y=/[^\w_]/.test(t),g=f+u,d=_?4:y?3:9999),u)}n!==u&&("\n"===x[n]?(v=0,++h):++v)}return f+=u,x=x.slice(u),m}(e):(p.length&&M(p.join("")),d=10,M("(eof)"),m)};function M(e){e.length&&m.push({type:s[d],data:e,position:g,line:h,column:v})}function S(e){for(var t,r,n=0;;){if(t=o.indexOf(e.slice(0,e.length+n).join("")),r=o[t],-1===t){if(n--+e.length>0)continue;r=e.slice(0,1).join("")}return M(r),g+=r.length,(p=p.slice(r.length)).length}}};var n=r(537),o=r(533),i=r(2260),a=r(2366),l=r(3111),s=["block-comment","line-comment","preprocessor","operator","integer","float","ident","builtin","keyword","whitespace","eof","integer"]},3111:function(e,t,r){var n=r(2260);n=n.slice().filter(function(e){return!/^(gl\_|texture)/.test(e)}),e.exports=n.concat(["gl_VertexID","gl_InstanceID","gl_Position","gl_PointSize","gl_FragCoord","gl_FrontFacing","gl_FragDepth","gl_PointCoord","gl_MaxVertexAttribs","gl_MaxVertexUniformVectors","gl_MaxVertexOutputVectors","gl_MaxFragmentInputVectors","gl_MaxVertexTextureImageUnits","gl_MaxCombinedTextureImageUnits","gl_MaxTextureImageUnits","gl_MaxFragmentUniformVectors","gl_MaxDrawBuffers","gl_MinProgramTexelOffset","gl_MaxProgramTexelOffset","gl_DepthRangeParameters","gl_DepthRange","trunc","round","roundEven","isnan","isinf","floatBitsToInt","floatBitsToUint","intBitsToFloat","uintBitsToFloat","packSnorm2x16","unpackSnorm2x16","packUnorm2x16","unpackUnorm2x16","packHalf2x16","unpackHalf2x16","outerProduct","transpose","determinant","inverse","texture","textureSize","textureProj","textureLod","textureOffset","texelFetch","texelFetchOffset","textureProjOffset","textureLodOffset","textureProjLod","textureProjLodOffset","textureGrad","textureGradOffset","textureProjGrad","textureProjGradOffset"])},2260:function(e){e.exports=["abs","acos","all","any","asin","atan","ceil","clamp","cos","cross","dFdx","dFdy","degrees","distance","dot","equal","exp","exp2","faceforward","floor","fract","gl_BackColor","gl_BackLightModelProduct","gl_BackLightProduct","gl_BackMaterial","gl_BackSecondaryColor","gl_ClipPlane","gl_ClipVertex","gl_Color","gl_DepthRange","gl_DepthRangeParameters","gl_EyePlaneQ","gl_EyePlaneR","gl_EyePlaneS","gl_EyePlaneT","gl_Fog","gl_FogCoord","gl_FogFragCoord","gl_FogParameters","gl_FragColor","gl_FragCoord","gl_FragData","gl_FragDepth","gl_FragDepthEXT","gl_FrontColor","gl_FrontFacing","gl_FrontLightModelProduct","gl_FrontLightProduct","gl_FrontMaterial","gl_FrontSecondaryColor","gl_LightModel","gl_LightModelParameters","gl_LightModelProducts","gl_LightProducts","gl_LightSource","gl_LightSourceParameters","gl_MaterialParameters","gl_MaxClipPlanes","gl_MaxCombinedTextureImageUnits","gl_MaxDrawBuffers","gl_MaxFragmentUniformComponents","gl_MaxLights","gl_MaxTextureCoords","gl_MaxTextureImageUnits","gl_MaxTextureUnits","gl_MaxVaryingFloats","gl_MaxVertexAttribs","gl_MaxVertexTextureImageUnits","gl_MaxVertexUniformComponents","gl_ModelViewMatrix","gl_ModelViewMatrixInverse","gl_ModelViewMatrixInverseTranspose","gl_ModelViewMatrixTranspose","gl_ModelViewProjectionMatrix","gl_ModelViewProjectionMatrixInverse","gl_ModelViewProjectionMatrixInverseTranspose","gl_ModelViewProjectionMatrixTranspose","gl_MultiTexCoord0","gl_MultiTexCoord1","gl_MultiTexCoord2","gl_MultiTexCoord3","gl_MultiTexCoord4","gl_MultiTexCoord5","gl_MultiTexCoord6","gl_MultiTexCoord7","gl_Normal","gl_NormalMatrix","gl_NormalScale","gl_ObjectPlaneQ","gl_ObjectPlaneR","gl_ObjectPlaneS","gl_ObjectPlaneT","gl_Point","gl_PointCoord","gl_PointParameters","gl_PointSize","gl_Position","gl_ProjectionMatrix","gl_ProjectionMatrixInverse","gl_ProjectionMatrixInverseTranspose","gl_ProjectionMatrixTranspose","gl_SecondaryColor","gl_TexCoord","gl_TextureEnvColor","gl_TextureMatrix","gl_TextureMatrixInverse","gl_TextureMatrixInverseTranspose","gl_TextureMatrixTranspose","gl_Vertex","greaterThan","greaterThanEqual","inversesqrt","length","lessThan","lessThanEqual","log","log2","matrixCompMult","max","min","mix","mod","normalize","not","notEqual","pow","radians","reflect","refract","sign","sin","smoothstep","sqrt","step","tan","texture2D","texture2DLod","texture2DProj","texture2DProjLod","textureCube","textureCubeLod","texture2DLodEXT","texture2DProjLodEXT","textureCubeLodEXT","texture2DGradEXT","texture2DProjGradEXT","textureCubeGradEXT"]},2366:function(e,t,r){var n=r(537);e.exports=n.slice().concat(["layout","centroid","smooth","case","mat2x2","mat2x3","mat2x4","mat3x2","mat3x3","mat3x4","mat4x2","mat4x3","mat4x4","uvec2","uvec3","uvec4","samplerCubeShadow","sampler2DArray","sampler2DArrayShadow","isampler2D","isampler3D","isamplerCube","isampler2DArray","usampler2D","usampler3D","usamplerCube","usampler2DArray","coherent","restrict","readonly","writeonly","resource","atomic_uint","noperspective","patch","sample","subroutine","common","partition","active","filter","image1D","image2D","image3D","imageCube","iimage1D","iimage2D","iimage3D","iimageCube","uimage1D","uimage2D","uimage3D","uimageCube","image1DArray","image2DArray","iimage1DArray","iimage2DArray","uimage1DArray","uimage2DArray","image1DShadow","image2DShadow","image1DArrayShadow","image2DArrayShadow","imageBuffer","iimageBuffer","uimageBuffer","sampler1DArray","sampler1DArrayShadow","isampler1D","isampler1DArray","usampler1D","usampler1DArray","isampler2DRect","usampler2DRect","samplerBuffer","isamplerBuffer","usamplerBuffer","sampler2DMS","isampler2DMS","usampler2DMS","sampler2DMSArray","isampler2DMSArray","usampler2DMSArray"])},537:function(e){e.exports=["precision","highp","mediump","lowp","attribute","const","uniform","varying","break","continue","do","for","while","if","else","in","out","inout","float","int","uint","void","bool","true","false","discard","return","mat2","mat3","mat4","vec2","vec3","vec4","ivec2","ivec3","ivec4","bvec2","bvec3","bvec4","sampler1D","sampler2D","sampler3D","samplerCube","sampler1DShadow","sampler2DShadow","struct","asm","class","union","enum","typedef","template","this","packed","goto","switch","default","inline","noinline","volatile","public","static","extern","external","interface","long","short","double","half","fixed","unsigned","input","output","hvec2","hvec3","hvec4","dvec2","dvec3","dvec4","fvec2","fvec3","fvec4","sampler2DRect","sampler3DRect","sampler2DRectShadow","sizeof","cast","namespace","using"]},533:function(e){e.exports=["<<=",">>=","++","--","<<",">>","<=",">=","==","!=","&&","||","+=","-=","*=","/=","%=","&=","^^","^=","|=","(",")","[","]",".","!","~","*","/","%","+","-","<",">","&","^","|","?",":","=",",",";","{","}"]},3187:function(e,t,r){var n=r(9267);e.exports=function(e,t){var r=n(t),o=[];return(o=o.concat(r(e))).concat(r(null))}},6195:function(e,t,r){"use strict";r.d(t,{HE:function(){return H},lR:function(){return W},YJ:function(){return G},ud:function(){return Y}});var n=r(8126),o=r(5542),i=r(959),a=r(4771),l=r(3187),s=r.n(l),c=r(8117),u=r.n(c),f=r(9821),d=r.n(f),p=r(1884),m=r.n(p),h=r(8564),v=r.n(h),g={position:"csm_Position",positionRaw:"csm_PositionRaw",pointSize:"csm_PointSize",fragColor:"csm_FragColor",diffuseColor:"csm_DiffuseColor",normal:"csm_Normal",roughness:"csm_Roughness",metalness:"csm_Metalness",emissive:"csm_Emissive"};let _={[`${g.normal}`]:{"#include <beginnormal_vertex>":`
    vec3 objectNormal = ${g.normal};
    #ifdef USE_TANGENT
	    vec3 objectTangent = vec3( tangent.xyz );
    #endif
    `},[`${g.position}`]:{"#include <begin_vertex>":`
    vec3 transformed = ${g.position};
  `},[`${g.positionRaw}`]:{"#include <begin_vertex>":`
    vec4 csm_positionUnprojected = ${g.positionRaw};
    mat4x4 csm_unprojectMatrix = projectionMatrix * modelViewMatrix;
    #ifdef USE_INSTANCING
      csm_unprojectMatrix = csm_unprojectMatrix * instanceMatrix;
    #endif
    csm_positionUnprojected = inverse(csm_unprojectMatrix) * csm_positionUnprojected;
    vec3 transformed = csm_positionUnprojected.xyz;
  `},[`${g.pointSize}`]:{"gl_PointSize = size;":`
    gl_PointSize = ${g.pointSize};
    `},[`${g.diffuseColor}`]:{"#include <color_fragment>":`
    #include <color_fragment>
    diffuseColor = ${g.diffuseColor};
  `},[`${g.fragColor}`]:{"#include <dithering_fragment>":`
    #include <dithering_fragment>
    gl_FragColor  = ${g.fragColor};
  `},[`${g.emissive}`]:{"vec3 totalEmissiveRadiance = emissive;":`
    vec3 totalEmissiveRadiance = ${g.emissive};
    `},[`${g.roughness}`]:{"#include <roughnessmap_fragment>":`
    #include <roughnessmap_fragment>
    roughnessFactor = ${g.roughness};
    `},[`${g.metalness}`]:{"#include <metalnessmap_fragment>":`
    #include <metalnessmap_fragment>
    metalnessFactor = ${g.metalness};
    `}},y={[`${g.position}`]:{"gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );":`
    gl_Position = projectionMatrix * modelViewMatrix * vec4( ${g.position}, 1.0 );
  `},[`${g.positionRaw}`]:{"gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );":`
    gl_Position = ${g.position};
  `},[`${g.diffuseColor}`]:{"gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );":`
    gl_FragColor = ${g.diffuseColor};
  `},[`${g.fragColor}`]:{"gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );":`
    gl_FragColor = ${g.fragColor};
  `}},x=`

#ifdef IS_VERTEX
    vec3 csm_Position = position;
    vec4 csm_PositionRaw = projectionMatrix * modelViewMatrix * vec4(position, 1.);
    vec3 csm_Normal = normal;
#else
    #if defined IS_SHADERMATERIAL || defined IS_MESHDEPTHMATERIAL || defined IS_MESHNORMALMATERIAL
        vec4 csm_DiffuseColor = vec4(1., 0., 1., 1.);
        vec4 csm_FragColor = vec4(1., 0., 1., 1.);
    #else
        #if defined IS_MESHSTANDARDMATERIAL || defined IS_MESHPHYSICALMATERIAL
            vec3 csm_Emissive = emissive;
            float csm_Roughness = roughness;
            float csm_Metalness = metalness;
        #endif
        
        #ifdef USE_MAP
            vec4 _csm_sampledDiffuseColor = texture2D(map, vUv);

            #ifdef DECODE_VIDEO_TEXTURE
            // inline sRGB decode (TODO: Remove this code when https://crbug.com/1256340 is solved)
            _csm_sampledDiffuseColor = vec4(mix(pow(_csm_sampledDiffuseColor.rgb * 0.9478672986 + vec3(0.0521327014), vec3(2.4)), _csm_sampledDiffuseColor.rgb * 0.0773993808, vec3(lessThanEqual(_csm_sampledDiffuseColor.rgb, vec3(0.04045)))), _csm_sampledDiffuseColor.w);
            #endif

            vec4 csm_DiffuseColor = vec4(diffuse, opacity) * _csm_sampledDiffuseColor;
            vec4 csm_FragColor = vec4(diffuse, opacity) * _csm_sampledDiffuseColor;
        #else
            vec4 csm_DiffuseColor = vec4(diffuse, opacity);
            vec4 csm_FragColor = vec4(diffuse, opacity);
        #endif
    #endif
#endif
`,b=(e,t,r)=>e.split(t).join(r),w=(e,t)=>RegExp(`\\b${t.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}\\b`).test(e);class z extends a.Material{constructor({baseMaterial:e,fragmentShader:t,vertexShader:r,uniforms:n,patchMap:o,cacheKey:i,...l}){let s;if(!function(e){try{new e}catch(e){if(e.message.indexOf("is not a constructor")>=0)return!1}return!0}(e)?Object.assign(s=e,l):s=new e(l),"RawShaderMaterial"===s.type)throw Error("CustomShaderMaterial does not support RawShaderMaterial");for(let l in super(),this.uniforms=n||{},this._customPatchMap=o||{},this._fs=t||"",this._vs=r||"",this._cacheKey=i,this._base=e,this._type=s.type,this._instanceID=a.MathUtils.generateUUID(),s){let e=l;l.startsWith("_")&&(e=l.split("_")[1]),void 0===this[e]&&(this[e]=0),this[e]=s[e]}this.update({fragmentShader:t,vertexShader:r,uniforms:n,cacheKey:i})}update(e){let t=(null==e?void 0:e.uniforms)||{},r=(null==e?void 0:e.fragmentShader)||this._fs,n=(null==e?void 0:e.vertexShader)||this._vs,o=Object.values(t).reduce((e,{value:t})=>e+JSON.stringify(t),"");this.uuid=(null==e?void 0:null==e.cacheKey?void 0:e.cacheKey())||v()([r,n,o,this._instanceID]),this.generateMaterial({fragmentShader:r,vertexShader:n,uniforms:t})}clone(){let e=new this.constructor({baseMaterial:this._base,fragmentShader:this._fs,vertexShader:this._vs,patchMap:this._customPatchMap,uniforms:this.uniforms,cacheKey:this._cacheKey});for(let t in this)"uuid"!==t&&(e[t]=this[t]);return e}generateMaterial({fragmentShader:e,vertexShader:t,uniforms:r}){let n=this.parseShader(e),o=this.parseShader(t);this.uniforms=r||{},this.customProgramCacheKey=()=>this.uuid,this.onBeforeCompile=e=>{if(n){let t=this.patchShader(n,e.fragmentShader);e.fragmentShader=this.getMaterialDefine()+t}if(o){let t=this.patchShader(o,e.vertexShader);e.vertexShader="#define IS_VERTEX;\n"+t,e.vertexShader=this.getMaterialDefine()+e.vertexShader}e.uniforms={...e.uniforms,...this.uniforms},this.uniforms=e.uniforms},this.needsUpdate=!0}getMaterialDefine(){return`#define IS_${this._type.toUpperCase()};
`}getPatchMapForMaterial(){return"ShaderMaterial"===this._type?y:_}patchShader(e,t){let r=t,n={...this.getPatchMapForMaterial(),...this._customPatchMap};return Object.keys(n).forEach(t=>{Object.keys(n[t]).forEach(o=>{w(e.main,t)&&(r=b(r,o,n[t][o]))})}),r=r.replace("void main() {",`
          ${e.header}
          void main() {
            ${x}
            ${e.main}
          `),r=e.defines+r}parseShader(e){if(!e)return;let t=e.replace(/\/\*\*(.*?)\*\/|\/\/(.*?)\n/gm,""),r=s()(t),n=m()(r),o=n.map(e=>e.name).indexOf("main"),i=d()(r.slice(0,o>=0?n[o].outer[0]:void 0)),a=o>=0?this.getShaderFromIndex(r,n[o].body):"";return{defines:"",header:i,main:a}}getShaderFromIndex(e,t){return d()(e.slice(t[0],t[1]))}}function P(e){return"string"==typeof e?new a.Color(e).convertLinearToSRGB():e}function M(e){return e instanceof a.Vector3||e instanceof a.Vector2||e instanceof a.Vector4||e instanceof a.Matrix3||e instanceof a.Matrix4}function S(e){return M(e)?e.toArray():e instanceof a.Color?"#"+e.clone().convertLinearToSRGB().getHexString():e instanceof a.Texture?e.image.src:e}r(4478),r(4806);let E={normal:"normal",add:"add",subtract:"subtract",multiply:"multiply",lighten:"lighten",darken:"darken",divide:"divide",overlay:"overlay",screen:"screen",softlight:"softlight",negation:"negation",reflect:"reflect"},I={perlin:"perlin",simplex:"simplex",cell:"cell",curl:"curl",white:"white"},C={local:"local",world:"world",uv:"uv"},D={phong:a.MeshPhongMaterial,physical:a.MeshPhysicalMaterial,toon:a.MeshToonMaterial,basic:a.MeshBasicMaterial,lambert:a.MeshLambertMaterial,standard:a.MeshStandardMaterial};class j{constructor(e,t,r){this.uuid=a.MathUtils.generateUUID().replace(/-/g,"_"),this.name="LayerMaterial",this.mode="normal",this.visible=!0;let n=Object.getOwnPropertyNames(e).filter(e=>e.startsWith("u_")),o=n.reduce((t,r)=>{var n;let o=null==(n=Object.getOwnPropertyDescriptor(e,r))?void 0:n.value;return(M(o)||o instanceof a.Color)&&(o=o.clone()),{...t,[r.slice(1)]:o}},{});for(let e in o){let r=e.split("_")[1];(null==t?void 0:t[r])!==void 0&&(o[e]=t[r])}t&&Object.keys(t).map(e=>{void 0!==t[e]&&(this[e]=t[e])}),this.uniforms={},this.schema=[];let i={};Object.keys(o).map(e=>{let t=e.split("_")[1];this.uniforms[`u_${this.uuid}_${t}`]={value:P(o[e])},this.schema.push({value:o[e],label:t}),i[t]={set:e=>{this.uniforms[`u_${this.uuid}_${t}`].value=P(e)},get:()=>this.uniforms[`u_${this.uuid}_${t}`].value}}),null!=t&&t.name&&(this.name=t.name),null!=t&&t.mode&&(this.mode=t.mode),null!=t&&t.visible&&(this.visible=t.visible),Object.defineProperties(this,i),this.vertexShader="",this.fragmentShader="",this.vertexVariables="",this.fragmentVariables="",this.onParse=r,this.buildShaders(e),this.schema.push({value:this.mode,label:"mode",options:Object.values(E)}),this.schema.push({value:this.visible,label:"visible"})}buildShaders(e){var t;let r=Object.getOwnPropertyNames(e).filter(e=>"fragmentShader"===e||"vertexShader"===e).reduce((t,r)=>{var n;return{...t,[r]:null==(n=Object.getOwnPropertyDescriptor(e,r))?void 0:n.value}},{}),n={vert:s()(r.vertexShader||""),frag:s()(r.fragmentShader||"")},o={vert:u()(n.vert,this.renameTokens.bind(this)),frag:u()(n.frag,this.renameTokens.bind(this))},i={vert:m()(o.vert),frag:m()(o.frag)},a={vert:i.vert.map(e=>e.name).indexOf("main"),frag:i.frag.map(e=>e.name).indexOf("main")},l={vert:a.vert>=0?d()(o.vert.slice(0,i.vert[a.vert].outer[0])):"",frag:a.frag>=0?d()(o.frag.slice(0,i.frag[a.frag].outer[0])):""},c={vert:a.vert>=0?this.getShaderFromIndex(o.vert,i.vert[a.vert].body):"",frag:a.frag>=0?this.getShaderFromIndex(o.frag,i.frag[a.frag].body):""};this.vertexShader=this.processFinal(c.vert,!0),this.fragmentShader=this.processFinal(c.frag),this.vertexVariables=l.vert,this.fragmentVariables=l.frag,null==(t=this.onParse)||t.call(this,this),this.schema=this.schema.filter((e,t)=>{let r=e.label;return t===this.schema.findIndex(e=>e.label===r)})}renameTokens(e){if(e.startsWith("u_")){let t=e.slice(2);return`u_${this.uuid}_${t}`}if(e.startsWith("v_")){let t=e.slice(2);return`v_${this.uuid}_${t}`}if(!e.startsWith("f_"))return e;{let t=e.slice(2);return`f_${this.uuid}_${t}`}}processFinal(e,t){let r=e.replace(/\sf_/gm,` f_${this.uuid}_`).replace(/\(f_/gm,`(f_${this.uuid}_`),n=r.match(/^.*return.*$/gm),o=r.replace(/^.*return.*$/gm,"");if(null!=n&&n[0]){let e=n[0].replace("return","").trim().replace(";",""),r=this.getBlendMode(e,"lamina_finalColor");o+=t?`lamina_finalPosition = ${e};`:`lamina_finalColor = ${r};`}return o}getShaderFromIndex(e,t){return d()(e.slice(t[0],t[1]))}getBlendMode(e,t){switch(this.mode){default:case"normal":return`lamina_blend_alpha(${t}, ${e}, ${e}.a)`;case"add":return`lamina_blend_add(${t}, ${e}, ${e}.a)`;case"subtract":return`lamina_blend_subtract(${t}, ${e}, ${e}.a)`;case"multiply":return`lamina_blend_multiply(${t}, ${e}, ${e}.a)`;case"lighten":return`lamina_blend_lighten(${t}, ${e}, ${e}.a)`;case"darken":return`lamina_blend_darken(${t}, ${e}, ${e}.a)`;case"divide":return`lamina_blend_divide(${t}, ${e}, ${e}.a)`;case"overlay":return`lamina_blend_overlay(${t}, ${e}, ${e}.a)`;case"screen":return`lamina_blend_screen(${t}, ${e}, ${e}.a)`;case"softlight":return`lamina_blend_softlight(${t}, ${e}, ${e}.a)`;case"reflect":return`lamina_blend_reflect(${t}, ${e}, ${e}.a)`;case"negation":return`lamina_blend_negation(${t}, ${e}, ${e}.a)`}}getSchema(){let e=this.schema.map(({label:e,options:t,...r})=>({label:e,options:t,...function(e){switch(e){case"alpha":return{min:0,max:1};case"scale":return{min:0};case"map":return{image:void 0};default:return{}}}(e),...r,value:S(this[e])}));return e}serialize(){let e=this.constructor.name.split("$")[0],t=Object.keys(this);t=t.filter(e=>!["uuid","uniforms","schema","fragmentShader","vertexShader","fragmentVariables","vertexVariables","attribs","events","__r3f","onParse"].includes(e));let r={};t.forEach(e=>{r[e]=this[e]});let n={};for(let e in this.uniforms){let t=e.replace(`u_${this.uuid}_`,"");n[t]=S(this.uniforms[e].value)}return{constructor:e,properties:{...n,...r}}}}class A extends j{constructor(e){super(A,{name:"Depth",...e},e=>{e.schema.push({value:e.mapping,label:"mapping",options:["vector","world","camera"]});let t=A.getMapping(e.uuid,e.mapping);e.fragmentShader=e.fragmentShader.replace("lamina_mapping_template",t)}),this.mapping="vector"}static getMapping(e,t){switch(t){default:case"vector":return`length(v_${e}_worldPosition - u_${e}_origin)`;case"world":return`length(v_${e}_position - vec3(0.))`;case"camera":return`length(v_${e}_worldPosition - cameraPosition)`}}}A.u_near=2,A.u_far=10,A.u_origin=new a.Vector3(0,0,0),A.u_colorA="white",A.u_colorB="black",A.u_alpha=1,A.vertexShader=`
  varying vec3 v_worldPosition;
  varying vec3 v_position;

  void main() {
    v_worldPosition = (vec4(position, 1.0) * modelMatrix).xyz;
    v_position = position;
  }
  `,A.fragmentShader=`   
    uniform float u_alpha;
    uniform float u_near;
    uniform float u_far;
    uniform float u_isVector;
    uniform vec3 u_origin;
    uniform vec3 u_colorA;
    uniform vec3 u_colorB;

    varying vec3 v_worldPosition;
    varying vec3 v_position;

    void main() {
      float f_dist = lamina_mapping_template;
      float f_depth = (f_dist - u_near) / (u_far - u_near);
			vec3 f_depthColor =  mix(u_colorB, u_colorA, 1.0 - clamp(f_depth, 0., 1.));
  
  
      return vec4(f_depthColor, u_alpha);
    }
  `;class B extends j{constructor(e){super(B,{name:"Color",...e})}}B.u_color="red",B.u_alpha=1,B.fragmentShader=`   
    uniform vec3 u_color;
    uniform float u_alpha;

    void main() {
      return vec4(u_color, u_alpha);
    }
  `;class F extends j{constructor(e){super(F,{name:"noise",...e},e=>{e.schema.push({value:e.type,label:"type",options:Object.values(I)}),e.schema.push({value:e.mapping,label:"mapping",options:Object.values(C)});let t=F.getNoiseFunction(e.type),r=F.getMapping(e.mapping);e.vertexShader=e.vertexShader.replace("lamina_mapping_template",r),e.fragmentShader=e.fragmentShader.replace("lamina_noise_template",t)}),this.type="perlin",this.mapping="local"}static getNoiseFunction(e){switch(e){default:case"perlin":return"lamina_noise_perlin";case"simplex":return"lamina_noise_simplex";case"cell":return"lamina_noise_worley";case"white":return"lamina_noise_white";case"curl":return"lamina_noise_swirl"}}static getMapping(e){switch(e){default:case"local":return"position";case"world":return"(modelMatrix * vec4(position,1.0)).xyz";case"uv":return"vec3(uv, 0.)"}}}F.u_colorA="#666666",F.u_colorB="#666666",F.u_colorC="#FFFFFF",F.u_colorD="#FFFFFF",F.u_alpha=1,F.u_scale=1,F.u_offset=new a.Vector3(0,0,0),F.vertexShader=`
    varying vec3 v_position;

    void main() {
        v_position = lamina_mapping_template;
    }
  `,F.fragmentShader=`   
    uniform vec3 u_colorA;
    uniform vec3 u_colorB;
    uniform vec3 u_colorC;
    uniform vec3 u_colorD;
    uniform vec3 u_offset;

    uniform float u_alpha;
    uniform float u_scale;

    varying vec3 v_position;


    void main() {
        float f_n = lamina_noise_template((v_position + u_offset) * u_scale);

        float f_step1 = 0.;
        float f_step2 = 0.2;
        float f_step3 = 0.6;
        float f_step4 = 1.;

        vec3 f_color = mix(u_colorA, u_colorB, smoothstep(f_step1, f_step2, f_n));
        f_color = mix(f_color, u_colorC, smoothstep(f_step2, f_step3, f_n));
        f_color = mix(f_color, u_colorD, smoothstep(f_step3, f_step4, f_n));

        return vec4(f_color, u_alpha);
    }
  `;class T extends j{constructor(e){super(T,{name:"Fresnel",...e})}}T.u_color="white",T.u_alpha=1,T.u_bias=0,T.u_intensity=1,T.u_power=2,T.u_factor=1,T.vertexShader=`
    varying vec3 v_worldPosition;
    varying vec3 v_worldNormal;

    void main() {
        v_worldPosition = vec3(-viewMatrix[0][2], -viewMatrix[1][2], -viewMatrix[2][2]);
        v_worldNormal = normalize( mat3( modelMatrix[0].xyz, modelMatrix[1].xyz, modelMatrix[2].xyz ) * normal );
        
    }
  `,T.fragmentShader=`   
    uniform vec3 u_color;
    uniform float u_alpha;
    uniform float u_bias;
    uniform float u_intensity;
    uniform float u_power;
    uniform float u_factor;

    varying vec3 v_worldPosition;
    varying vec3 v_worldNormal;

    void main() {
        float f_a = (u_factor  + dot(v_worldPosition, v_worldNormal));
        float f_fresnel = u_bias + u_intensity * pow(abs(f_a), u_power);

        f_fresnel = clamp(f_fresnel, 0.0, 1.0);
        return vec4(f_fresnel * u_color, u_alpha);
    }
  `;class L extends j{constructor(e){super(L,{name:"Gradient",...e},e=>{e.schema.push({value:e.axes,label:"axes",options:["x","y","z"]}),e.schema.push({value:e.mapping,label:"mapping",options:Object.values(C)});let t=L.getMapping(e.mapping);e.vertexShader=e.vertexShader.replace("lamina_mapping_template",t||"local"),e.fragmentShader=e.fragmentShader.replace("axes_template",e.axes||"x")}),this.axes="x",this.mapping="local"}static getMapping(e){switch(e){default:case"local":return"position";case"world":return"(modelMatrix * vec4(position,1.0)).xyz";case"uv":return"vec3(uv, 0.)"}}}L.u_colorA="white",L.u_colorB="black",L.u_alpha=1,L.u_start=1,L.u_end=-1,L.u_contrast=1,L.vertexShader=`
		varying vec3 v_position;

		vod main() {
      v_position = lamina_mapping_template;
		}
  `,L.fragmentShader=`   
    uniform vec3 u_colorA;
    uniform vec3 u_colorB;
    uniform vec3 u_axis;
    uniform float u_alpha;
    uniform float u_start;
    uniform float u_end;
    uniform float u_contrast;

		varying vec3 v_position;

    void main() {

      float f_step = smoothstep(u_start, u_end, v_position.axes_template * u_contrast);
      vec3 f_color = mix(u_colorA, u_colorB, f_step);

      return vec4(f_color, u_alpha);
    }
  `;class $ extends j{constructor(e){super($,{name:"Matcap",...e})}}$.u_alpha=1,$.u_map=void 0,$.vertexShader=`
    varying vec3 v_position;
    varying vec3 v_normal;
    
    void main() {
      v_position = normalize( vec3( modelViewMatrix * vec4( position, 1.0 ) ) );
      v_normal = normalize( normalMatrix * normal );
    }
    `,$.fragmentShader=` 
		uniform sampler2D u_map;  
		uniform float u_alpha;  
		varying vec3 v_position;
		varying vec3 v_normal;

		
    void main() {
			vec3 f_r = reflect( v_position, v_normal );
			float f_m = 2. * sqrt( pow( f_r.x, 2. ) + pow( f_r.y, 2. ) + pow( f_r.z + 1., 2. ) );
			vec2 f_vN = f_r.xy / f_m + .5;

			vec3 f_base = texture2D(u_map, f_vN).rgb;

      return vec4(f_base, u_alpha);
    }
  `;class k extends j{constructor(e){super(k,{name:"Texture",...e})}}k.u_alpha=1,k.u_map=void 0,k.vertexShader=`
    varying vec2 v_uv;
    
    void main() {
        v_uv = uv;
    }
    `,k.fragmentShader=` 
		uniform sampler2D u_map;  
		uniform float u_alpha;  
		varying vec2 v_uv;

    void main() {
			vec4 f_color = texture2D(u_map, v_uv);
      return vec4(f_color.rgb, f_color.a * u_alpha);
    }
  `;class K extends j{constructor(e){super(K,{name:"Displace",...e},e=>{e.schema.push({value:e.type,label:"type",options:Object.values(I)}),e.schema.push({value:e.mapping,label:"mapping",options:Object.values(C)});let t=K.getNoiseFunction(e.type),r=K.getMapping(e.mapping);e.vertexVariables=e.vertexVariables.replace("lamina_mapping_template",r),e.vertexVariables=e.vertexVariables.replace("lamina_noise_template",t)}),this.type="perlin",this.mapping="local"}static getNoiseFunction(e){switch(e){default:case"perlin":return"lamina_noise_perlin";case"simplex":return"lamina_noise_simplex";case"cell":return"lamina_noise_worley";case"white":return"lamina_noise_white";case"curl":return"lamina_noise_swirl"}}static getMapping(e){switch(e){default:case"local":return"p";case"world":return"(modelMatrix * vec4(p,1.0)).xyz";case"uv":return"vec3(uv, 0.)"}}}K.u_strength=1,K.u_scale=1,K.u_offset=new a.Vector3(0,0,0),K.vertexShader=`
       
      uniform float u_strength;
      uniform float u_scale;
      uniform vec3 u_offset;

      vec3 displace(vec3 p) {
				vec3 f_position = lamina_mapping_template;
        float f_n = lamina_noise_template((f_position + u_offset) * u_scale) * u_strength;
        vec3 f_newPosition = p + (f_n * normal);

				return f_newPosition;
      }

      
			vec3 orthogonal(vec3 v) {
  		  return normalize(abs(v.x) > abs(v.z) ? vec3(-v.y, v.x, 0.0)
  		  : vec3(0.0, -v.z, v.y));
  		}
  		vec3 recalcNormals(vec3 newPos) {
  		  float offset = 0.001;
  		  vec3 tangent = orthogonal(normal);
  		  vec3 bitangent = normalize(cross(normal, tangent));
  		  vec3 neighbour1 = position + tangent * offset;
  		  vec3 neighbour2 = position + bitangent * offset;
  		  vec3 displacedNeighbour1 = displace(neighbour1);
  		  vec3 displacedNeighbour2 = displace(neighbour2);
  		  vec3 displacedTangent = displacedNeighbour1 - newPos;
  		  vec3 displacedBitangent = displacedNeighbour2 - newPos;
  		  return normalize(cross(displacedTangent, displacedBitangent));
  		}
  
  
      void main() {
       
				vec3 f_newPosition = displace(position);
        lamina_finalNormal = recalcNormals(f_newPosition);

        return f_newPosition;
      }
    `;class U extends j{constructor(e){super(U,{name:"Normal",...e})}}U.u_alpha=1,U.u_direction=new a.Vector3(1,1,1),U.vertexShader=`   
  varying vec3 v_normals; 

  void main() {
    v_normals = normal;
  }
`,U.fragmentShader=`   
  	uniform float u_alpha;
  	uniform vec3 u_color;
  	uniform vec3 u_direction;

		varying vec3 v_normals;

    void main() {
			vec3 f_normalColor = vec3(1.);
      f_normalColor.x = v_normals.x * u_direction.x;
      f_normalColor.y = v_normals.y * u_direction.y;
      f_normalColor.z = v_normals.z * u_direction.z;

      return vec4(f_normalColor, u_alpha);
    }
  `;var N=`
vec4 lamina_blend_add(const in vec4 x, const in vec4 y, const in float opacity) {

	return vec4(min(x.xyz + y.xyz, 1.0) * opacity + x.xyz * (1.0 - opacity), x.a);

}
vec3 lamina_blend_alpha(const in vec3 x, const in vec3 y, const in float opacity) {

	return y * opacity + x * (1.0 - opacity);

}

vec4 lamina_blend_alpha(const in vec4 x, const in vec4 y, const in float opacity) {

	float a = min(y.a, opacity);

	return vec4(lamina_blend_alpha(x.rgb, y.rgb, a), x.a);

}
vec4 lamina_blend_average(const in vec4 x, const in vec4 y, const in float opacity) {

	return vec4((x.xyz + y.xyz) * 0.5 * opacity + x.xyz * (1.0 - opacity), x.a);

}
float lamina_blend_color_burn(const in float x, const in float y) {

	return (y == 0.0) ? y : max(1.0 - (1.0 - x) / y, 0.0);

}

vec4 lamina_blend_color_burn(const in vec4 x, const in vec4 y, const in float opacity) {

	vec4 z = vec4(
		lamina_blend_color_burn(x.r, y.r),
		lamina_blend_color_burn(x.g, y.g),
		lamina_blend_color_burn(x.b, y.b),
		lamina_blend_color_burn(x.a, y.a)
	);

	return vec4(z.xyz * opacity + x.xyz * (1.0 - opacity), x.a);

}
float lamina_blend_color_dodge(const in float x, const in float y) {

	return (y == 1.0) ? y : min(x / (1.0 - y), 1.0);

}

vec4 lamina_blend_color_dodge(const in vec4 x, const in vec4 y, const in float opacity) {

	vec4 z = vec4(
		lamina_blend_color_dodge(x.r, y.r),
		lamina_blend_color_dodge(x.g, y.g),
		lamina_blend_color_dodge(x.b, y.b),
		lamina_blend_color_dodge(x.a, y.a)
	);

	return vec4(z.xyz * opacity + x.xyz * (1.0 - opacity), x.a);

}
vec4 lamina_blend_darken(const in vec4 x, const in vec4 y, const in float opacity) {

	return vec4(min(x.xyz, y.xyz) * opacity + x.xyz * (1.0 - opacity), x.a);

}
vec4 lamina_blend_difference(const in vec4 x, const in vec4 y, const in float opacity) {

	return vec4(abs(x.xyz - y.xyz) * opacity + x.xyz * (1.0 - opacity), x.a);

}
float lamina_blend_divide(const in float x, const in float y) {

	return (y > 0.0) ? min(x / y, 1.0) : 1.0;

}

vec4 lamina_blend_divide(const in vec4 x, const in vec4 y, const in float opacity) {

	vec4 z = vec4(
		lamina_blend_divide(x.r, y.r),
		lamina_blend_divide(x.g, y.g),
		lamina_blend_divide(x.b, y.b),
		lamina_blend_divide(x.a, y.a)
	);

	return vec4(z.xyz * opacity + x.xyz * (1.0 - opacity), x.a);

}
vec4 lamina_blend_exclusion(const in vec4 x, const in vec4 y, const in float opacity) {

	return vec4((x.xyz + y.xyz - 2.0 * x.xyz * y.xyz) * opacity + x.xyz * (1.0 - opacity), x.a);

}
vec4 lamina_blend_lighten(const in vec4 x, const in vec4 y, const in float opacity) {

	return vec4(max(x.xyz, y.xyz) * opacity + x.xyz * (1.0 - opacity), x.a);

}
vec4 lamina_blend_multiply(const in vec4 x, const in vec4 y, const in float opacity) {

	return vec4( x.xyz * y.xyz * opacity + x.xyz * (1.0 - opacity), x.a);

}
vec4 lamina_blend_negation(const in vec4 x, const in vec4 y, const in float opacity) {

	return vec4((1.0 - abs(1.0 - x.xyz - y.xyz)) * opacity + x.xyz * (1.0 - opacity), x.a);

}
vec4 lamina_blend_normal(const in vec4 x, const in vec4 y, const in float opacity) {

	return vec4(y.xyz * opacity + x.xyz * (1.0 - opacity), x.a);

}
float lamina_blend_overlay(const in float x, const in float y) {

	return (x < 0.5) ? (2.0 * x * y) : (1.0 - 2.0 * (1.0 - x) * (1.0 - y));

}

vec4 lamina_blend_overlay(const in vec4 x, const in vec4 y, const in float opacity) {

	vec4 z = vec4(
		lamina_blend_overlay(x.r, y.r),
		lamina_blend_overlay(x.g, y.g),
		lamina_blend_overlay(x.b, y.b),
		lamina_blend_overlay(x.a, y.a)
	);

	return vec4(z.xyz * opacity + x.xyz * (1.0 - opacity), x.a);

}
float lamina_blend_reflect(const in float x, const in float y) {

	return (y == 1.0) ? y : min(x * x / (1.0 - y), 1.0);

}

vec4 lamina_blend_reflect(const in vec4 x, const in vec4 y, const in float opacity) {

	vec4 z = vec4(
		lamina_blend_reflect(x.r, y.r),
		lamina_blend_reflect(x.g, y.g),
		lamina_blend_reflect(x.b, y.b),
		lamina_blend_reflect(x.a, y.a)
	);

	return vec4(z.xyz * opacity + x.xyz * (1.0 - opacity), x.a);

}
vec4 lamina_blend_screen(const in vec4 x, const in vec4 y, const in float opacity) {

	return vec4((1.0 - (1.0 - x.xyz) * (1.0 - y.xyz)) * opacity + x.xyz * (1.0 - opacity), x.a);

}
float lamina_blend_softlight(const in float x, const in float y) {

	return (y < 0.5) ?
		(2.0 * x * y + x * x * (1.0 - 2.0 * y)) :
		(sqrt(x) * (2.0 * y - 1.0) + 2.0 * x * (1.0 - y));

}

vec4 lamina_blend_softlight(const in vec4 x, const in vec4 y, const in float opacity) {

	vec4 z = vec4(
		lamina_blend_softlight(x.r, y.r),
		lamina_blend_softlight(x.g, y.g),
		lamina_blend_softlight(x.b, y.b),
		lamina_blend_softlight(x.a, y.a)
	);

	return vec4(z.xyz * opacity + x.xyz * (1.0 - opacity), x.a);

}
vec4 lamina_blend_subtract(const in vec4 x, const in vec4 y, const in float opacity) {

	return vec4(max(x.xyz + y.xyz - 1.0, 0.0) * opacity + x.xyz * (1.0 - opacity), x.a);

}

`,O=`

// From: https://gist.github.com/patriciogonzalezvivo/670c22f3966e662d2f83
// Huge thanks to the creators of these algorithms

float lamina_noise_mod289(float x){return x - floor(x * (1.0 / 289.0)) * 289.0;}
vec4 lamina_noise_mod289(vec4 x){return x - floor(x * (1.0 / 289.0)) * 289.0;}
vec4 lamina_noise_perm(vec4 x){return lamina_noise_mod289(((x * 34.0) + 1.0) * x);}
vec4 lamina_noise_permute(vec4 x) { return mod(((x * 34.0) + 1.0) * x, 289.0); }
vec4 lamina_noise_taylorInvSqrt(vec4 r) { return 1.79284291400159 - 0.85373472095314 * r; }


float lamina_noise_white(vec2 p) {
  return fract(1e4 * sin(17.0 * p.x + p.y * 0.1) *
               (0.1 + abs(sin(p.y * 13.0 + p.x))));
}

float lamina_noise_white(vec3 p) {
  return lamina_noise_white(p.xy);
}


vec3 lamina_noise_fade(vec3 t) { return t * t * t * (t * (t * 6.0 - 15.0) + 10.0); }

float lamina_noise_perlin(vec3 P) {
  vec3 Pi0 = floor(P);        // Integer part for indexing
  vec3 Pi1 = Pi0 + vec3(1.0); // Integer part + 1
  Pi0 = mod(Pi0, 289.0);
  Pi1 = mod(Pi1, 289.0);
  vec3 Pf0 = fract(P);        // Fractional part for interpolation
  vec3 Pf1 = Pf0 - vec3(1.0); // Fractional part - 1.0
  vec4 ix = vec4(Pi0.x, Pi1.x, Pi0.x, Pi1.x);
  vec4 iy = vec4(Pi0.yy, Pi1.yy);
  vec4 iz0 = Pi0.zzzz;
  vec4 iz1 = Pi1.zzzz;

  vec4 ixy = lamina_noise_permute(lamina_noise_permute(ix) + iy);
  vec4 ixy0 = lamina_noise_permute(ixy + iz0);
  vec4 ixy1 = lamina_noise_permute(ixy + iz1);

  vec4 gx0 = ixy0 / 7.0;
  vec4 gy0 = fract(floor(gx0) / 7.0) - 0.5;
  gx0 = fract(gx0);
  vec4 gz0 = vec4(0.5) - abs(gx0) - abs(gy0);
  vec4 sz0 = step(gz0, vec4(0.0));
  gx0 -= sz0 * (step(0.0, gx0) - 0.5);
  gy0 -= sz0 * (step(0.0, gy0) - 0.5);

  vec4 gx1 = ixy1 / 7.0;
  vec4 gy1 = fract(floor(gx1) / 7.0) - 0.5;
  gx1 = fract(gx1);
  vec4 gz1 = vec4(0.5) - abs(gx1) - abs(gy1);
  vec4 sz1 = step(gz1, vec4(0.0));
  gx1 -= sz1 * (step(0.0, gx1) - 0.5);
  gy1 -= sz1 * (step(0.0, gy1) - 0.5);

  vec3 g000 = vec3(gx0.x, gy0.x, gz0.x);
  vec3 g100 = vec3(gx0.y, gy0.y, gz0.y);
  vec3 g010 = vec3(gx0.z, gy0.z, gz0.z);
  vec3 g110 = vec3(gx0.w, gy0.w, gz0.w);
  vec3 g001 = vec3(gx1.x, gy1.x, gz1.x);
  vec3 g101 = vec3(gx1.y, gy1.y, gz1.y);
  vec3 g011 = vec3(gx1.z, gy1.z, gz1.z);
  vec3 g111 = vec3(gx1.w, gy1.w, gz1.w);

  vec4 norm0 = lamina_noise_taylorInvSqrt(
      vec4(dot(g000, g000), dot(g010, g010), dot(g100, g100), dot(g110, g110)));
  g000 *= norm0.x;
  g010 *= norm0.y;
  g100 *= norm0.z;
  g110 *= norm0.w;
  vec4 norm1 = lamina_noise_taylorInvSqrt(
      vec4(dot(g001, g001), dot(g011, g011), dot(g101, g101), dot(g111, g111)));
  g001 *= norm1.x;
  g011 *= norm1.y;
  g101 *= norm1.z;
  g111 *= norm1.w;

  float n000 = dot(g000, Pf0);
  float n100 = dot(g100, vec3(Pf1.x, Pf0.yz));
  float n010 = dot(g010, vec3(Pf0.x, Pf1.y, Pf0.z));
  float n110 = dot(g110, vec3(Pf1.xy, Pf0.z));
  float n001 = dot(g001, vec3(Pf0.xy, Pf1.z));
  float n101 = dot(g101, vec3(Pf1.x, Pf0.y, Pf1.z));
  float n011 = dot(g011, vec3(Pf0.x, Pf1.yz));
  float n111 = dot(g111, Pf1);

  vec3 fade_xyz = lamina_noise_fade(Pf0);
  vec4 n_z = mix(vec4(n000, n100, n010, n110), vec4(n001, n101, n011, n111),
                 fade_xyz.z);
  vec2 n_yz = mix(n_z.xy, n_z.zw, fade_xyz.y);
  float n_xyz = mix(n_yz.x, n_yz.y, fade_xyz.x);
  return lamina_normalize(2.2 * n_xyz);
}

float lamina_noise_simplex(vec3 v) {
  const vec2 C = vec2(1.0 / 6.0, 1.0 / 3.0);
  const vec4 D = vec4(0.0, 0.5, 1.0, 2.0);

  // First corner
  vec3 i = floor(v + dot(v, C.yyy));
  vec3 x0 = v - i + dot(i, C.xxx);

  // Other corners
  vec3 g = step(x0.yzx, x0.xyz);
  vec3 l = 1.0 - g;
  vec3 i1 = min(g.xyz, l.zxy);
  vec3 i2 = max(g.xyz, l.zxy);

  //  x0 = x0 - 0. + 0.0 * C
  vec3 x1 = x0 - i1 + 1.0 * C.xxx;
  vec3 x2 = x0 - i2 + 2.0 * C.xxx;
  vec3 x3 = x0 - 1. + 3.0 * C.xxx;

  // Permutations
  i = mod(i, 289.0);
  vec4 p = lamina_noise_permute(lamina_noise_permute(lamina_noise_permute(i.z + vec4(0.0, i1.z, i2.z, 1.0)) + i.y +
                             vec4(0.0, i1.y, i2.y, 1.0)) +
                    i.x + vec4(0.0, i1.x, i2.x, 1.0));

  // Gradients
  // ( N*N points uniformly over a square, mapped onto an octahedron.)
  float n_ = 1.0 / 7.0; // N=7
  vec3 ns = n_ * D.wyz - D.xzx;

  vec4 j = p - 49.0 * floor(p * ns.z * ns.z); //  mod(p,N*N)

  vec4 x_ = floor(j * ns.z);
  vec4 y_ = floor(j - 7.0 * x_); // mod(j,N)

  vec4 x = x_ * ns.x + ns.yyyy;
  vec4 y = y_ * ns.x + ns.yyyy;
  vec4 h = 1.0 - abs(x) - abs(y);

  vec4 b0 = vec4(x.xy, y.xy);
  vec4 b1 = vec4(x.zw, y.zw);

  vec4 s0 = floor(b0) * 2.0 + 1.0;
  vec4 s1 = floor(b1) * 2.0 + 1.0;
  vec4 sh = -step(h, vec4(0.0));

  vec4 a0 = b0.xzyw + s0.xzyw * sh.xxyy;
  vec4 a1 = b1.xzyw + s1.xzyw * sh.zzww;

  vec3 p0 = vec3(a0.xy, h.x);
  vec3 p1 = vec3(a0.zw, h.y);
  vec3 p2 = vec3(a1.xy, h.z);
  vec3 p3 = vec3(a1.zw, h.w);

  // Normalise gradients
  vec4 norm =
      lamina_noise_taylorInvSqrt(vec4(dot(p0, p0), dot(p1, p1), dot(p2, p2), dot(p3, p3)));
  p0 *= norm.x;
  p1 *= norm.y;
  p2 *= norm.z;
  p3 *= norm.w;

  // Mix final noise value
  vec4 m =
      max(0.6 - vec4(dot(x0, x0), dot(x1, x1), dot(x2, x2), dot(x3, x3)), 0.0);
  m = m * m;
  return lamina_normalize(42.0 *
         dot(m * m, vec4(dot(p0, x0), dot(p1, x1), dot(p2, x2), dot(p3, x3))));
}

vec3 lamina_noise_simplex3(vec3 x) {
  float s = lamina_noise_simplex(vec3(x));
  float s1 = lamina_noise_simplex(vec3(x.y - 19.1, x.z + 33.4, x.x + 47.2));
  float s2 = lamina_noise_simplex(vec3(x.z + 74.2, x.x - 124.5, x.y + 99.4));
  vec3 c = vec3(s, s1, s2);
  return c;
}

vec3 lamina_noise_curl(vec3 p) {
  const float e = .1;
  vec3 dx = vec3(e, 0.0, 0.0);
  vec3 dy = vec3(0.0, e, 0.0);
  vec3 dz = vec3(0.0, 0.0, e);

  vec3 p_x0 = lamina_noise_simplex3(p - dx);
  vec3 p_x1 = lamina_noise_simplex3(p + dx);
  vec3 p_y0 = lamina_noise_simplex3(p - dy);
  vec3 p_y1 = lamina_noise_simplex3(p + dy);
  vec3 p_z0 = lamina_noise_simplex3(p - dz);
  vec3 p_z1 = lamina_noise_simplex3(p + dz);

  float x = p_y1.z - p_y0.z - p_z1.y + p_z0.y;
  float y = p_z1.x - p_z0.x - p_x1.z + p_x0.z;
  float z = p_x1.y - p_x0.y - p_y1.x + p_y0.x;

  const float divisor = 1.0 / (2.0 * e);
  return normalize(vec3(x, y, z) * divisor);
}

vec3 lamina_permute(vec3 x) {
  return mod((34.0 * x + 1.0) * x, 289.0);
}

vec3 lamina_dist(vec3 x, vec3 y, vec3 z,  bool manhattanDistance) {
  return manhattanDistance ?  abs(x) + abs(y) + abs(z) :  (x * x + y * y + z * z);
}

// From: https://github.com/Erkaman/glsl-worley
float lamina_noise_worley(vec3 P) {
  float jitter = 1.;
  bool manhattanDistance = false; 

  float K = 0.142857142857; // 1/7
  float Ko = 0.428571428571; // 1/2-K/2
  float  K2 = 0.020408163265306; // 1/(7*7)
  float Kz = 0.166666666667; // 1/6
  float Kzo = 0.416666666667; // 1/2-1/6*2

	vec3 Pi = mod(floor(P), 289.0);
 	vec3 Pf = fract(P) - 0.5;

	vec3 Pfx = Pf.x + vec3(1.0, 0.0, -1.0);
	vec3 Pfy = Pf.y + vec3(1.0, 0.0, -1.0);
	vec3 Pfz = Pf.z + vec3(1.0, 0.0, -1.0);

	vec3 p = lamina_permute(Pi.x + vec3(-1.0, 0.0, 1.0));
	vec3 p1 = lamina_permute(p + Pi.y - 1.0);
	vec3 p2 = lamina_permute(p + Pi.y);
	vec3 p3 = lamina_permute(p + Pi.y + 1.0);

	vec3 p11 = lamina_permute(p1 + Pi.z - 1.0);
	vec3 p12 = lamina_permute(p1 + Pi.z);
	vec3 p13 = lamina_permute(p1 + Pi.z + 1.0);

	vec3 p21 = lamina_permute(p2 + Pi.z - 1.0);
	vec3 p22 = lamina_permute(p2 + Pi.z);
	vec3 p23 = lamina_permute(p2 + Pi.z + 1.0);

	vec3 p31 = lamina_permute(p3 + Pi.z - 1.0);
	vec3 p32 = lamina_permute(p3 + Pi.z);
	vec3 p33 = lamina_permute(p3 + Pi.z + 1.0);

	vec3 ox11 = fract(p11*K) - Ko;
	vec3 oy11 = mod(floor(p11*K), 7.0)*K - Ko;
	vec3 oz11 = floor(p11*K2)*Kz - Kzo; // p11 < 289 guaranteed

	vec3 ox12 = fract(p12*K) - Ko;
	vec3 oy12 = mod(floor(p12*K), 7.0)*K - Ko;
	vec3 oz12 = floor(p12*K2)*Kz - Kzo;

	vec3 ox13 = fract(p13*K) - Ko;
	vec3 oy13 = mod(floor(p13*K), 7.0)*K - Ko;
	vec3 oz13 = floor(p13*K2)*Kz - Kzo;

	vec3 ox21 = fract(p21*K) - Ko;
	vec3 oy21 = mod(floor(p21*K), 7.0)*K - Ko;
	vec3 oz21 = floor(p21*K2)*Kz - Kzo;

	vec3 ox22 = fract(p22*K) - Ko;
	vec3 oy22 = mod(floor(p22*K), 7.0)*K - Ko;
	vec3 oz22 = floor(p22*K2)*Kz - Kzo;

	vec3 ox23 = fract(p23*K) - Ko;
	vec3 oy23 = mod(floor(p23*K), 7.0)*K - Ko;
	vec3 oz23 = floor(p23*K2)*Kz - Kzo;

	vec3 ox31 = fract(p31*K) - Ko;
	vec3 oy31 = mod(floor(p31*K), 7.0)*K - Ko;
	vec3 oz31 = floor(p31*K2)*Kz - Kzo;

	vec3 ox32 = fract(p32*K) - Ko;
	vec3 oy32 = mod(floor(p32*K), 7.0)*K - Ko;
	vec3 oz32 = floor(p32*K2)*Kz - Kzo;

	vec3 ox33 = fract(p33*K) - Ko;
	vec3 oy33 = mod(floor(p33*K), 7.0)*K - Ko;
	vec3 oz33 = floor(p33*K2)*Kz - Kzo;

	vec3 dx11 = Pfx + jitter*ox11;
	vec3 dy11 = Pfy.x + jitter*oy11;
	vec3 dz11 = Pfz.x + jitter*oz11;

	vec3 dx12 = Pfx + jitter*ox12;
	vec3 dy12 = Pfy.x + jitter*oy12;
	vec3 dz12 = Pfz.y + jitter*oz12;

	vec3 dx13 = Pfx + jitter*ox13;
	vec3 dy13 = Pfy.x + jitter*oy13;
	vec3 dz13 = Pfz.z + jitter*oz13;

	vec3 dx21 = Pfx + jitter*ox21;
	vec3 dy21 = Pfy.y + jitter*oy21;
	vec3 dz21 = Pfz.x + jitter*oz21;

	vec3 dx22 = Pfx + jitter*ox22;
	vec3 dy22 = Pfy.y + jitter*oy22;
	vec3 dz22 = Pfz.y + jitter*oz22;

	vec3 dx23 = Pfx + jitter*ox23;
	vec3 dy23 = Pfy.y + jitter*oy23;
	vec3 dz23 = Pfz.z + jitter*oz23;

	vec3 dx31 = Pfx + jitter*ox31;
	vec3 dy31 = Pfy.z + jitter*oy31;
	vec3 dz31 = Pfz.x + jitter*oz31;

	vec3 dx32 = Pfx + jitter*ox32;
	vec3 dy32 = Pfy.z + jitter*oy32;
	vec3 dz32 = Pfz.y + jitter*oz32;

	vec3 dx33 = Pfx + jitter*ox33;
	vec3 dy33 = Pfy.z + jitter*oy33;
	vec3 dz33 = Pfz.z + jitter*oz33;

	vec3 d11 = lamina_dist(dx11, dy11, dz11, manhattanDistance);
	vec3 d12 = lamina_dist(dx12, dy12, dz12, manhattanDistance);
	vec3 d13 = lamina_dist(dx13, dy13, dz13, manhattanDistance);
	vec3 d21 = lamina_dist(dx21, dy21, dz21, manhattanDistance);
	vec3 d22 = lamina_dist(dx22, dy22, dz22, manhattanDistance);
	vec3 d23 = lamina_dist(dx23, dy23, dz23, manhattanDistance);
	vec3 d31 = lamina_dist(dx31, dy31, dz31, manhattanDistance);
	vec3 d32 = lamina_dist(dx32, dy32, dz32, manhattanDistance);
	vec3 d33 = lamina_dist(dx33, dy33, dz33, manhattanDistance);

	vec3 d1a = min(d11, d12);
	d12 = max(d11, d12);
	d11 = min(d1a, d13); // Smallest now not in d12 or d13
	d13 = max(d1a, d13);
	d12 = min(d12, d13); // 2nd smallest now not in d13
	vec3 d2a = min(d21, d22);
	d22 = max(d21, d22);
	d21 = min(d2a, d23); // Smallest now not in d22 or d23
	d23 = max(d2a, d23);
	d22 = min(d22, d23); // 2nd smallest now not in d23
	vec3 d3a = min(d31, d32);
	d32 = max(d31, d32);
	d31 = min(d3a, d33); // Smallest now not in d32 or d33
	d33 = max(d3a, d33);
	d32 = min(d32, d33); // 2nd smallest now not in d33
	vec3 da = min(d11, d21);
	d21 = max(d11, d21);
	d11 = min(da, d31); // Smallest now in d11
	d31 = max(da, d31); // 2nd smallest now not in d31
	d11.xy = (d11.x < d11.y) ? d11.xy : d11.yx;
	d11.xz = (d11.x < d11.z) ? d11.xz : d11.zx; // d11.x now smallest
	d12 = min(d12, d21); // 2nd smallest now not in d21
	d12 = min(d12, d22); // nor in d22
	d12 = min(d12, d31); // nor in d31
	d12 = min(d12, d32); // nor in d32
	d11.yz = min(d11.yz,d12.xy); // nor in d12.yz
	d11.y = min(d11.y,d12.z); // Only two more to go
	d11.y = min(d11.y,d11.z); // Done! (Phew!)

  vec2 F = sqrt(d11.xy);
	return F.x; // F1, F2

}

float lamina_noise_swirl(vec3 position) {
    float scale = 0.1;
    float freq = 4. * scale;
    float t = 1.;

    vec3 pos = (position * scale) + lamina_noise_curl(position * 7. * scale);

    float worley1 = 1. - lamina_noise_worley((pos * (freq * 2.)) +  (t * 2.));
    float worley2 = 1. - lamina_noise_worley((pos * (freq * 4.)) +  (t * 4.));
    float worley3 = 1. - lamina_noise_worley((pos * (freq * 8.)) +  (t * 8.));
    float worley4 = 1. - lamina_noise_worley((pos * (freq * 16.)) +  (t * 16.));
    
    float fbm1 = worley1 * .625 + worley2 * .25 + worley3 * .125;
    float fbm2 = worley2 * .625 + worley3 * .25 + worley4 * .125;
    float fbm3 = worley3 * .75 + worley4 * .25;

    vec3 curlWorleyFbm = vec3(fbm1, fbm2, fbm3);
    float curlWorley = curlWorleyFbm.r * .625 + curlWorleyFbm.g * .25 + 
        curlWorleyFbm.b * .125;

    return curlWorley;
}
  
  
`,V=`

float lamina_map(float value, float min1, float max1, float min2, float max2) {
  return min2 + (value - min1) * (max2 - min2) / (max1 - min1);
}

float lamina_normalize(float v) { return lamina_map(v, -1.0, 1.0, 0.0, 1.0); }
`;class R extends z{constructor({color:e,alpha:t,lighting:r,layers:n,name:o,...i}={}){super({baseMaterial:D[r||"basic"],...i}),this.name="LayerMaterial",this.layers=[],this.lighting="basic";let l=e||"white";this.uniforms={u_lamina_color:{value:"string"==typeof l?new a.Color(l).convertSRGBToLinear():l},u_lamina_alpha:{value:null!=t?t:1}},this.layers=n||this.layers,this.lighting=r||this.lighting,this.name=o||this.name,this.refresh()}genShaders(){let e="",t="",r="",n="",o={};return this.layers.filter(e=>e.visible).forEach(i=>{e+=i.vertexVariables+"\n",t+=i.fragmentVariables+"\n",r+=i.vertexShader+"\n",n+=i.fragmentShader+"\n",o={...o,...i.uniforms}}),{uniforms:o={...o,...this.uniforms},vertexShader:`
        ${V}
        ${O}
        ${e}

        void main() {
          vec3 lamina_finalPosition = position;
          vec3 lamina_finalNormal = normal;

          ${r}

          csm_Position = lamina_finalPosition;
          csm_Normal = lamina_finalNormal;
        }
        `,fragmentShader:`
        ${V}
        ${O}
        ${N}
        ${t}

        uniform vec3 u_lamina_color;
        uniform float u_lamina_alpha;

        void main() {
          vec4 lamina_finalColor = vec4(u_lamina_color, u_lamina_alpha);

          ${n}

          csm_DiffuseColor = lamina_finalColor;
         
        }
        `}}refresh(){let{uniforms:e,fragmentShader:t,vertexShader:r}=this.genShaders();super.update({fragmentShader:t,vertexShader:r,uniforms:e})}serialize(){return{constructor:"LayerMaterial",properties:{color:this.color,alpha:this.alpha,name:this.name,lighting:this.lighting}}}set color(e){var t,r;null!=(t=this.uniforms)&&null!=(r=t.u_lamina_color)&&r.value&&(this.uniforms.u_lamina_color.value="string"==typeof e?new a.Color(e).convertSRGBToLinear():e)}get color(){var e,t;return null==(e=this.uniforms)?void 0:null==(t=e.u_lamina_color)?void 0:t.value}set alpha(e){this.uniforms.u_lamina_alpha.value=e}get alpha(){return this.uniforms.u_lamina_alpha.value}}(0,o.e)({LayerMaterial:R}),(0,o.e)({LayerMaterial:R,Depth_:A,Color_:B,Noise_:F,Fresnel_:T,Gradient_:L,Matcap_:$,Texture_:k,Displace_:K,Normal_:U});let Y=i.forwardRef(({children:e,...t},r)=>{let o=i.useRef(null);(0,i.useImperativeHandle)(r,()=>o.current),i.useLayoutEffect(()=>{o.current.layers=o.current.__r3f.objects,o.current.refresh()},[e]);let[a,l]=(0,i.useMemo)(()=>(function({color:e,alpha:t,lighting:r,name:n,...o}={}){return[{color:e,alpha:t,lighting:r,name:n},o]})(t),[t]);return i.createElement("layerMaterial",(0,n.Z)({args:[a],ref:o},l),e)});function q(e){return[{mode:null==e?void 0:e.mode,visible:null==e?void 0:e.visible,type:null==e?void 0:e.type,mapping:null==e?void 0:e.mapping,map:null==e?void 0:e.map,axes:null==e?void 0:e.axes}]}let H=i.forwardRef((e,t)=>i.createElement("depth_",(0,n.Z)({args:q(e),ref:t},e))),G=i.forwardRef((e,t)=>i.createElement("fresnel_",(0,n.Z)({ref:t,args:q(e)},e))),W=i.forwardRef((e,t)=>i.createElement("displace_",(0,n.Z)({ref:t,args:q(e)},e)))},8564:function(e){e.exports=(function e(t,r,n){function o(a,l){if(!r[a]){if(!t[a]){if(i)return i(a,!0);throw Error("Cannot find module '"+a+"'")}l=r[a]={exports:{}},t[a][0].call(l.exports,function(e){return o(t[a][1][e]||e)},l,l.exports,e,t,r,n)}return r[a].exports}for(var i=void 0,a=0;a<n.length;a++)o(n[a]);return o})({1:[function(e,t,r){(function(n,o,i,a,l,s,c,u,f){"use strict";var d=e("crypto");function p(e,t){var r;return void 0===(r="passthrough"!==(t=v(e,t)).algorithm?d.createHash(t.algorithm):new y).write&&(r.write=r.update,r.end=r.update),_(t,r).dispatch(e),r.update||r.end(""),r.digest?r.digest("buffer"===t.encoding?void 0:t.encoding):(e=r.read(),"buffer"!==t.encoding?e.toString(t.encoding):e)}(r=t.exports=p).sha1=function(e){return p(e)},r.keys=function(e){return p(e,{excludeValues:!0,algorithm:"sha1",encoding:"hex"})},r.MD5=function(e){return p(e,{algorithm:"md5",encoding:"hex"})},r.keysMD5=function(e){return p(e,{algorithm:"md5",encoding:"hex",excludeValues:!0})};var m=d.getHashes?d.getHashes().slice():["sha1","md5"],h=(m.push("passthrough"),["buffer","hex","binary","base64"]);function v(e,t){var r={};if(r.algorithm=(t=t||{}).algorithm||"sha1",r.encoding=t.encoding||"hex",r.excludeValues=!!t.excludeValues,r.algorithm=r.algorithm.toLowerCase(),r.encoding=r.encoding.toLowerCase(),r.ignoreUnknown=!0===t.ignoreUnknown,r.respectType=!1!==t.respectType,r.respectFunctionNames=!1!==t.respectFunctionNames,r.respectFunctionProperties=!1!==t.respectFunctionProperties,r.unorderedArrays=!0===t.unorderedArrays,r.unorderedSets=!1!==t.unorderedSets,r.unorderedObjects=!1!==t.unorderedObjects,r.replacer=t.replacer||void 0,r.excludeKeys=t.excludeKeys||void 0,void 0===e)throw Error("Object argument required.");for(var n=0;n<m.length;++n)m[n].toLowerCase()===r.algorithm.toLowerCase()&&(r.algorithm=m[n]);if(-1===m.indexOf(r.algorithm))throw Error('Algorithm "'+r.algorithm+'"  not supported. supported values: '+m.join(", "));if(-1===h.indexOf(r.encoding)&&"passthrough"!==r.algorithm)throw Error('Encoding "'+r.encoding+'"  not supported. supported values: '+h.join(", "));return r}function g(e){if("function"==typeof e)return null!=/^function\s+\w*\s*\(\s*\)\s*{\s+\[native code\]\s+}$/i.exec(Function.prototype.toString.call(e))}function _(e,t,r){function n(e){return t.update?t.update(e,"utf8"):t.write(e,"utf8")}return r=r||[],{dispatch:function(t){return this["_"+(null===(t=e.replacer?e.replacer(t):t)?"null":typeof t)](t)},_object:function(t){var o,a=Object.prototype.toString.call(t),l=/\[object (.*)\]/i.exec(a);if(l=(l=l?l[1]:"unknown:["+a+"]").toLowerCase(),0<=(a=r.indexOf(t)))return this.dispatch("[CIRCULAR:"+a+"]");if(r.push(t),void 0!==i&&i.isBuffer&&i.isBuffer(t))return n("buffer:"),n(t);if("object"===l||"function"===l||"asyncfunction"===l)return a=Object.keys(t),e.unorderedObjects&&(a=a.sort()),!1===e.respectType||g(t)||a.splice(0,0,"prototype","__proto__","constructor"),e.excludeKeys&&(a=a.filter(function(t){return!e.excludeKeys(t)})),n("object:"+a.length+":"),o=this,a.forEach(function(r){o.dispatch(r),n(":"),e.excludeValues||o.dispatch(t[r]),n(",")});if(!this["_"+l]){if(e.ignoreUnknown)return n("["+l+"]");throw Error('Unknown object type "'+l+'"')}this["_"+l](t)},_array:function(t,o){o=void 0!==o?o:!1!==e.unorderedArrays;var i=this;if(n("array:"+t.length+":"),!o||t.length<=1)return t.forEach(function(e){return i.dispatch(e)});var a=[],o=t.map(function(t){var n=new y,o=r.slice();return _(e,n,o).dispatch(t),a=a.concat(o.slice(r.length)),n.read().toString()});return r=r.concat(a),o.sort(),this._array(o,!1)},_date:function(e){return n("date:"+e.toJSON())},_symbol:function(e){return n("symbol:"+e.toString())},_error:function(e){return n("error:"+e.toString())},_boolean:function(e){return n("bool:"+e.toString())},_string:function(e){n("string:"+e.length+":"),n(e.toString())},_function:function(t){n("fn:"),g(t)?this.dispatch("[native]"):this.dispatch(t.toString()),!1!==e.respectFunctionNames&&this.dispatch("function-name:"+String(t.name)),e.respectFunctionProperties&&this._object(t)},_number:function(e){return n("number:"+e.toString())},_xml:function(e){return n("xml:"+e.toString())},_null:function(){return n("Null")},_undefined:function(){return n("Undefined")},_regexp:function(e){return n("regex:"+e.toString())},_uint8array:function(e){return n("uint8array:"),this.dispatch(Array.prototype.slice.call(e))},_uint8clampedarray:function(e){return n("uint8clampedarray:"),this.dispatch(Array.prototype.slice.call(e))},_int8array:function(e){return n("int8array:"),this.dispatch(Array.prototype.slice.call(e))},_uint16array:function(e){return n("uint16array:"),this.dispatch(Array.prototype.slice.call(e))},_int16array:function(e){return n("int16array:"),this.dispatch(Array.prototype.slice.call(e))},_uint32array:function(e){return n("uint32array:"),this.dispatch(Array.prototype.slice.call(e))},_int32array:function(e){return n("int32array:"),this.dispatch(Array.prototype.slice.call(e))},_float32array:function(e){return n("float32array:"),this.dispatch(Array.prototype.slice.call(e))},_float64array:function(e){return n("float64array:"),this.dispatch(Array.prototype.slice.call(e))},_arraybuffer:function(e){return n("arraybuffer:"),this.dispatch(new Uint8Array(e))},_url:function(e){return n("url:"+e.toString())},_map:function(t){return n("map:"),t=Array.from(t),this._array(t,!1!==e.unorderedSets)},_set:function(t){return n("set:"),t=Array.from(t),this._array(t,!1!==e.unorderedSets)},_file:function(e){return n("file:"),this.dispatch([e.name,e.size,e.type,e.lastModfied])},_blob:function(){if(e.ignoreUnknown)return n("[blob]");throw Error('Hashing Blob objects is currently not supported\n(see https://github.com/puleos/object-hash/issues/26)\nUse "options.replacer" or "options.ignoreUnknown"\n')},_domwindow:function(){return n("domwindow")},_bigint:function(e){return n("bigint:"+e.toString())},_process:function(){return n("process")},_timer:function(){return n("timer")},_pipe:function(){return n("pipe")},_tcp:function(){return n("tcp")},_udp:function(){return n("udp")},_tty:function(){return n("tty")},_statwatcher:function(){return n("statwatcher")},_securecontext:function(){return n("securecontext")},_connection:function(){return n("connection")},_zlib:function(){return n("zlib")},_context:function(){return n("context")},_nodescript:function(){return n("nodescript")},_httpparser:function(){return n("httpparser")},_dataview:function(){return n("dataview")},_signal:function(){return n("signal")},_fsevent:function(){return n("fsevent")},_tlswrap:function(){return n("tlswrap")}}}function y(){return{buf:"",write:function(e){this.buf+=e},end:function(e){this.buf+=e},read:function(){return this.buf}}}r.writeToStream=function(e,t,r){return void 0===r&&(r=t,t={}),_(t=v(e,t),r).dispatch(e)}}).call(this,e("lYpoI2"),"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},e("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/fake_9a5aa49d.js","/")},{buffer:3,crypto:5,lYpoI2:11}],2:[function(e,t,r){(function(e,t,n,o,i,a,l,s,c){!function(e){"use strict";var t="undefined"!=typeof Uint8Array?Uint8Array:Array;function r(e){return 43===(e=e.charCodeAt(0))||45===e?62:47===e||95===e?63:e<48?-1:e<58?e-48+26+26:e<91?e-65:e<123?e-97+26:void 0}e.toByteArray=function(e){if(0<e.length%4)throw Error("Invalid string. Length must be a multiple of 4");var n,o,i=e.length,i="="===e.charAt(i-2)?2:"="===e.charAt(i-1)?1:0,a=new t(3*e.length/4-i),l=0<i?e.length-4:e.length,s=0;function c(e){a[s++]=e}for(n=0;n<l;n+=4)c((16711680&(o=r(e.charAt(n))<<18|r(e.charAt(n+1))<<12|r(e.charAt(n+2))<<6|r(e.charAt(n+3))))>>16),c((65280&o)>>8),c(255&o);return 2==i?c(255&(o=r(e.charAt(n))<<2|r(e.charAt(n+1))>>4)):1==i&&(c((o=r(e.charAt(n))<<10|r(e.charAt(n+1))<<4|r(e.charAt(n+2))>>2)>>8&255),c(255&o)),a},e.fromByteArray=function(e){var t,r,n,o,i=e.length%3,a="";function l(e){return"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(e)}for(t=0,n=e.length-i;t<n;t+=3)a+=l((o=r=(e[t]<<16)+(e[t+1]<<8)+e[t+2])>>18&63)+l(o>>12&63)+l(o>>6&63)+l(63&o);switch(i){case 1:a=(a+=l((r=e[e.length-1])>>2))+l(r<<4&63)+"==";break;case 2:a=(a=(a+=l((r=(e[e.length-2]<<8)+e[e.length-1])>>10))+l(r>>4&63))+l(r<<2&63)+"="}return a}}(void 0===r?this.base64js={}:r)}).call(this,e("lYpoI2"),"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},e("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/node_modules/gulp-browserify/node_modules/base64-js/lib/b64.js","/node_modules/gulp-browserify/node_modules/base64-js/lib")},{buffer:3,lYpoI2:11}],3:[function(e,t,r){(function(t,n,o,i,a,l,s,c,u){var f=e("base64-js"),d=e("ieee754");function o(e,t,r){if(!(this instanceof o))return new o(e,t,r);var n,i,a,l,s=typeof e;if("base64"===t&&"string"==s)for(e=(l=e).trim?l.trim():l.replace(/^\s+|\s+$/g,"");e.length%4!=0;)e+="=";if("number"==s)n=E(e);else if("string"==s)n=o.byteLength(e,t);else{if("object"!=s)throw Error("First argument needs to be a number, array or string.");n=E(e.length)}if(o._useTypedArrays?i=o._augment(new Uint8Array(n)):((i=this).length=n,i._isBuffer=!0),o._useTypedArrays&&"number"==typeof e.byteLength)i._set(e);else if(I(l=e)||o.isBuffer(l)||l&&"object"==typeof l&&"number"==typeof l.length)for(a=0;a<n;a++)o.isBuffer(e)?i[a]=e.readUInt8(a):i[a]=e[a];else if("string"==s)i.write(e,0,t);else if("number"==s&&!o._useTypedArrays&&!r)for(a=0;a<n;a++)i[a]=0;return i}function p(e,t,r,n){n||($("boolean"==typeof r,"missing or invalid endian"),$(null!=t,"missing offset"),$(t+1<e.length,"Trying to read beyond buffer length"));var o,n=e.length;if(!(n<=t))return r?(o=e[t],t+1<n&&(o|=e[t+1]<<8)):(o=e[t]<<8,t+1<n&&(o|=e[t+1])),o}function m(e,t,r,n){n||($("boolean"==typeof r,"missing or invalid endian"),$(null!=t,"missing offset"),$(t+3<e.length,"Trying to read beyond buffer length"));var o,n=e.length;if(!(n<=t))return r?(t+2<n&&(o=e[t+2]<<16),t+1<n&&(o|=e[t+1]<<8),o|=e[t],t+3<n&&(o+=e[t+3]<<24>>>0)):(t+1<n&&(o=e[t+1]<<16),t+2<n&&(o|=e[t+2]<<8),t+3<n&&(o|=e[t+3]),o+=e[t]<<24>>>0),o}function h(e,t,r,n){if(n||($("boolean"==typeof r,"missing or invalid endian"),$(null!=t,"missing offset"),$(t+1<e.length,"Trying to read beyond buffer length")),!(e.length<=t))return 32768&(n=p(e,t,r,!0))?-1*(65535-n+1):n}function v(e,t,r,n){if(n||($("boolean"==typeof r,"missing or invalid endian"),$(null!=t,"missing offset"),$(t+3<e.length,"Trying to read beyond buffer length")),!(e.length<=t))return 2147483648&(n=m(e,t,r,!0))?-1*(4294967295-n+1):n}function g(e,t,r,n){return n||($("boolean"==typeof r,"missing or invalid endian"),$(t+3<e.length,"Trying to read beyond buffer length")),d.read(e,t,r,23,4)}function _(e,t,r,n){return n||($("boolean"==typeof r,"missing or invalid endian"),$(t+7<e.length,"Trying to read beyond buffer length")),d.read(e,t,r,52,8)}function y(e,t,r,n,o){if(o||($(null!=t,"missing value"),$("boolean"==typeof n,"missing or invalid endian"),$(null!=r,"missing offset"),$(r+1<e.length,"trying to write beyond buffer length"),F(t,65535)),!((o=e.length)<=r))for(var i=0,a=Math.min(o-r,2);i<a;i++)e[r+i]=(t&255<<8*(n?i:1-i))>>>8*(n?i:1-i)}function x(e,t,r,n,o){if(o||($(null!=t,"missing value"),$("boolean"==typeof n,"missing or invalid endian"),$(null!=r,"missing offset"),$(r+3<e.length,"trying to write beyond buffer length"),F(t,4294967295)),!((o=e.length)<=r))for(var i=0,a=Math.min(o-r,4);i<a;i++)e[r+i]=t>>>8*(n?i:3-i)&255}function b(e,t,r,n,o){o||($(null!=t,"missing value"),$("boolean"==typeof n,"missing or invalid endian"),$(null!=r,"missing offset"),$(r+1<e.length,"Trying to write beyond buffer length"),T(t,32767,-32768)),e.length<=r||y(e,0<=t?t:65535+t+1,r,n,o)}function w(e,t,r,n,o){o||($(null!=t,"missing value"),$("boolean"==typeof n,"missing or invalid endian"),$(null!=r,"missing offset"),$(r+3<e.length,"Trying to write beyond buffer length"),T(t,2147483647,-2147483648)),e.length<=r||x(e,0<=t?t:4294967295+t+1,r,n,o)}function z(e,t,r,n,o){o||($(null!=t,"missing value"),$("boolean"==typeof n,"missing or invalid endian"),$(null!=r,"missing offset"),$(r+3<e.length,"Trying to write beyond buffer length"),L(t,34028234663852886e22,-34028234663852886e22)),e.length<=r||d.write(e,t,r,n,23,4)}function P(e,t,r,n,o){o||($(null!=t,"missing value"),$("boolean"==typeof n,"missing or invalid endian"),$(null!=r,"missing offset"),$(r+7<e.length,"Trying to write beyond buffer length"),L(t,17976931348623157e292,-17976931348623157e292)),e.length<=r||d.write(e,t,r,n,52,8)}r.Buffer=o,r.SlowBuffer=o,r.INSPECT_MAX_BYTES=50,o.poolSize=8192,o._useTypedArrays=function(){try{var e=new ArrayBuffer(0),t=new Uint8Array(e);return t.foo=function(){return 42},42===t.foo()&&"function"==typeof t.subarray}catch(e){return!1}}(),o.isEncoding=function(e){switch(String(e).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"binary":case"base64":case"raw":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},o.isBuffer=function(e){return!(null==e||!e._isBuffer)},o.byteLength=function(e,t){var r;switch(e+="",t||"utf8"){case"hex":r=e.length/2;break;case"utf8":case"utf-8":r=D(e).length;break;case"ascii":case"binary":case"raw":r=e.length;break;case"base64":r=j(e).length;break;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":r=2*e.length;break;default:throw Error("Unknown encoding")}return r},o.concat=function(e,t){if($(I(e),"Usage: Buffer.concat(list, [totalLength])\nlist should be an Array."),0===e.length)return new o(0);if(1===e.length)return e[0];if("number"!=typeof t)for(i=t=0;i<e.length;i++)t+=e[i].length;for(var r=new o(t),n=0,i=0;i<e.length;i++){var a=e[i];a.copy(r,n),n+=a.length}return r},o.prototype.write=function(e,t,r,n){isFinite(t)?isFinite(r)||(n=r,r=void 0):(p=n,n=t,t=r,r=p),t=Number(t)||0;var i,a,l,s,c,u,f,d,p=this.length-t;switch((!r||p<(r=Number(r)))&&(r=p),n=String(n||"utf8").toLowerCase()){case"hex":c=function(e,t,r,n){r=Number(r)||0;var i=e.length-r;(!n||i<(n=Number(n)))&&(n=i),$((i=t.length)%2==0,"Invalid hex string"),i/2<n&&(n=i/2);for(var a=0;a<n;a++){var l=parseInt(t.substr(2*a,2),16);$(!isNaN(l),"Invalid hex string"),e[r+a]=l}return o._charsWritten=2*a,a}(this,e,t,r);break;case"utf8":case"utf-8":u=this,f=t,d=r,c=o._charsWritten=A(D(e),u,f,d);break;case"ascii":case"binary":i=t,a=r,c=o._charsWritten=A(function(e){for(var t=[],r=0;r<e.length;r++)t.push(255&e.charCodeAt(r));return t}(e),this,i,a);break;case"base64":u=this,f=t,d=r,c=o._charsWritten=A(j(e),u,f,d);break;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":l=t,s=r,c=o._charsWritten=A(function(e){for(var t,r,n=[],o=0;o<e.length;o++)t=(r=e.charCodeAt(o))>>8,n.push(r%=256),n.push(t);return n}(e),this,l,s);break;default:throw Error("Unknown encoding")}return c},o.prototype.toString=function(e,t,r){var n,o,i;if(e=String(e||"utf8").toLowerCase(),t=Number(t)||0,(r=void 0!==r?Number(r):this.length)===t)return"";switch(e){case"hex":n=function(e,t,r){var n=e.length;(!t||t<0)&&(t=0),(!r||r<0||n<r)&&(r=n);for(var o="",i=t;i<r;i++)o+=C(e[i]);return o}(this,t,r);break;case"utf8":case"utf-8":n=function(e,t,r){var n="",o="";r=Math.min(e.length,r);for(var i=t;i<r;i++)e[i]<=127?(n+=B(o)+String.fromCharCode(e[i]),o=""):o+="%"+e[i].toString(16);return n+B(o)}(this,t,r);break;case"ascii":case"binary":n=function(e,t,r){var n="";r=Math.min(e.length,r);for(var o=t;o<r;o++)n+=String.fromCharCode(e[o]);return n}(this,t,r);break;case"base64":i=r,n=0===(o=t)&&i===this.length?f.fromByteArray(this):f.fromByteArray(this.slice(o,i));break;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":n=function(e,t,r){for(var n=e.slice(t,r),o="",i=0;i<n.length;i+=2)o+=String.fromCharCode(n[i]+256*n[i+1]);return o}(this,t,r);break;default:throw Error("Unknown encoding")}return n},o.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}},o.prototype.copy=function(e,t,r,n){if(t=t||0,(n=n||0===n?n:this.length)!==(r=r||0)&&0!==e.length&&0!==this.length){$(r<=n,"sourceEnd < sourceStart"),$(0<=t&&t<e.length,"targetStart out of bounds"),$(0<=r&&r<this.length,"sourceStart out of bounds"),$(0<=n&&n<=this.length,"sourceEnd out of bounds"),n>this.length&&(n=this.length);var i=(n=e.length-t<n-r?e.length-t+r:n)-r;if(i<100||!o._useTypedArrays)for(var a=0;a<i;a++)e[a+t]=this[a+r];else e._set(this.subarray(r,r+i),t)}},o.prototype.slice=function(e,t){var r=this.length;if(e=S(e,r,0),t=S(t,r,r),o._useTypedArrays)return o._augment(this.subarray(e,t));for(var n=t-e,i=new o(n,void 0,!0),a=0;a<n;a++)i[a]=this[a+e];return i},o.prototype.get=function(e){return console.log(".get() is deprecated. Access using array indexes instead."),this.readUInt8(e)},o.prototype.set=function(e,t){return console.log(".set() is deprecated. Access using array indexes instead."),this.writeUInt8(e,t)},o.prototype.readUInt8=function(e,t){if(t||($(null!=e,"missing offset"),$(e<this.length,"Trying to read beyond buffer length")),!(e>=this.length))return this[e]},o.prototype.readUInt16LE=function(e,t){return p(this,e,!0,t)},o.prototype.readUInt16BE=function(e,t){return p(this,e,!1,t)},o.prototype.readUInt32LE=function(e,t){return m(this,e,!0,t)},o.prototype.readUInt32BE=function(e,t){return m(this,e,!1,t)},o.prototype.readInt8=function(e,t){if(t||($(null!=e,"missing offset"),$(e<this.length,"Trying to read beyond buffer length")),!(e>=this.length))return 128&this[e]?-1*(255-this[e]+1):this[e]},o.prototype.readInt16LE=function(e,t){return h(this,e,!0,t)},o.prototype.readInt16BE=function(e,t){return h(this,e,!1,t)},o.prototype.readInt32LE=function(e,t){return v(this,e,!0,t)},o.prototype.readInt32BE=function(e,t){return v(this,e,!1,t)},o.prototype.readFloatLE=function(e,t){return g(this,e,!0,t)},o.prototype.readFloatBE=function(e,t){return g(this,e,!1,t)},o.prototype.readDoubleLE=function(e,t){return _(this,e,!0,t)},o.prototype.readDoubleBE=function(e,t){return _(this,e,!1,t)},o.prototype.writeUInt8=function(e,t,r){r||($(null!=e,"missing value"),$(null!=t,"missing offset"),$(t<this.length,"trying to write beyond buffer length"),F(e,255)),t>=this.length||(this[t]=e)},o.prototype.writeUInt16LE=function(e,t,r){y(this,e,t,!0,r)},o.prototype.writeUInt16BE=function(e,t,r){y(this,e,t,!1,r)},o.prototype.writeUInt32LE=function(e,t,r){x(this,e,t,!0,r)},o.prototype.writeUInt32BE=function(e,t,r){x(this,e,t,!1,r)},o.prototype.writeInt8=function(e,t,r){r||($(null!=e,"missing value"),$(null!=t,"missing offset"),$(t<this.length,"Trying to write beyond buffer length"),T(e,127,-128)),t>=this.length||(0<=e?this.writeUInt8(e,t,r):this.writeUInt8(255+e+1,t,r))},o.prototype.writeInt16LE=function(e,t,r){b(this,e,t,!0,r)},o.prototype.writeInt16BE=function(e,t,r){b(this,e,t,!1,r)},o.prototype.writeInt32LE=function(e,t,r){w(this,e,t,!0,r)},o.prototype.writeInt32BE=function(e,t,r){w(this,e,t,!1,r)},o.prototype.writeFloatLE=function(e,t,r){z(this,e,t,!0,r)},o.prototype.writeFloatBE=function(e,t,r){z(this,e,t,!1,r)},o.prototype.writeDoubleLE=function(e,t,r){P(this,e,t,!0,r)},o.prototype.writeDoubleBE=function(e,t,r){P(this,e,t,!1,r)},o.prototype.fill=function(e,t,r){if(t=t||0,r=r||this.length,$("number"==typeof(e="string"==typeof(e=e||0)?e.charCodeAt(0):e)&&!isNaN(e),"value is not a number"),$(t<=r,"end < start"),r!==t&&0!==this.length){$(0<=t&&t<this.length,"start out of bounds"),$(0<=r&&r<=this.length,"end out of bounds");for(var n=t;n<r;n++)this[n]=e}},o.prototype.inspect=function(){for(var e=[],t=this.length,n=0;n<t;n++)if(e[n]=C(this[n]),n===r.INSPECT_MAX_BYTES){e[n+1]="...";break}return"<Buffer "+e.join(" ")+">"},o.prototype.toArrayBuffer=function(){if("undefined"==typeof Uint8Array)throw Error("Buffer.toArrayBuffer not supported in this browser");if(o._useTypedArrays)return new o(this).buffer;for(var e=new Uint8Array(this.length),t=0,r=e.length;t<r;t+=1)e[t]=this[t];return e.buffer};var M=o.prototype;function S(e,t,r){return"number"!=typeof e?r:t<=(e=~~e)?t:0<=e||0<=(e+=t)?e:0}function E(e){return(e=~~Math.ceil(+e))<0?0:e}function I(e){return(Array.isArray||function(e){return"[object Array]"===Object.prototype.toString.call(e)})(e)}function C(e){return e<16?"0"+e.toString(16):e.toString(16)}function D(e){for(var t=[],r=0;r<e.length;r++){var n=e.charCodeAt(r);if(n<=127)t.push(e.charCodeAt(r));else for(var o=r,i=(55296<=n&&n<=57343&&r++,encodeURIComponent(e.slice(o,r+1)).substr(1).split("%")),a=0;a<i.length;a++)t.push(parseInt(i[a],16))}return t}function j(e){return f.toByteArray(e)}function A(e,t,r,n){for(var o=0;o<n&&!(o+r>=t.length||o>=e.length);o++)t[o+r]=e[o];return o}function B(e){try{return decodeURIComponent(e)}catch(e){return String.fromCharCode(65533)}}function F(e,t){$("number"==typeof e,"cannot write a non-number as a number"),$(0<=e,"specified a negative value for writing an unsigned value"),$(e<=t,"value is larger than maximum value for type"),$(Math.floor(e)===e,"value has a fractional component")}function T(e,t,r){$("number"==typeof e,"cannot write a non-number as a number"),$(e<=t,"value larger than maximum allowed value"),$(r<=e,"value smaller than minimum allowed value"),$(Math.floor(e)===e,"value has a fractional component")}function L(e,t,r){$("number"==typeof e,"cannot write a non-number as a number"),$(e<=t,"value larger than maximum allowed value"),$(r<=e,"value smaller than minimum allowed value")}function $(e,t){if(!e)throw Error(t||"Failed assertion")}o._augment=function(e){return e._isBuffer=!0,e._get=e.get,e._set=e.set,e.get=M.get,e.set=M.set,e.write=M.write,e.toString=M.toString,e.toLocaleString=M.toString,e.toJSON=M.toJSON,e.copy=M.copy,e.slice=M.slice,e.readUInt8=M.readUInt8,e.readUInt16LE=M.readUInt16LE,e.readUInt16BE=M.readUInt16BE,e.readUInt32LE=M.readUInt32LE,e.readUInt32BE=M.readUInt32BE,e.readInt8=M.readInt8,e.readInt16LE=M.readInt16LE,e.readInt16BE=M.readInt16BE,e.readInt32LE=M.readInt32LE,e.readInt32BE=M.readInt32BE,e.readFloatLE=M.readFloatLE,e.readFloatBE=M.readFloatBE,e.readDoubleLE=M.readDoubleLE,e.readDoubleBE=M.readDoubleBE,e.writeUInt8=M.writeUInt8,e.writeUInt16LE=M.writeUInt16LE,e.writeUInt16BE=M.writeUInt16BE,e.writeUInt32LE=M.writeUInt32LE,e.writeUInt32BE=M.writeUInt32BE,e.writeInt8=M.writeInt8,e.writeInt16LE=M.writeInt16LE,e.writeInt16BE=M.writeInt16BE,e.writeInt32LE=M.writeInt32LE,e.writeInt32BE=M.writeInt32BE,e.writeFloatLE=M.writeFloatLE,e.writeFloatBE=M.writeFloatBE,e.writeDoubleLE=M.writeDoubleLE,e.writeDoubleBE=M.writeDoubleBE,e.fill=M.fill,e.inspect=M.inspect,e.toArrayBuffer=M.toArrayBuffer,e}}).call(this,e("lYpoI2"),"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},e("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/node_modules/gulp-browserify/node_modules/buffer/index.js","/node_modules/gulp-browserify/node_modules/buffer")},{"base64-js":2,buffer:3,ieee754:10,lYpoI2:11}],4:[function(e,t,r){(function(r,n,o,i,a,l,s,c,u){var o=e("buffer").Buffer,f=new o(4);f.fill(0),t.exports={hash:function(e,t,r,n){for(var i=t(function(e,t){e.length%4!=0&&(r=e.length+(4-e.length%4),e=o.concat([e,f],r));for(var r,n=[],i=t?e.readInt32BE:e.readInt32LE,a=0;a<e.length;a+=4)n.push(i.call(e,a));return n}(e=o.isBuffer(e)?e:new o(e),n),8*e.length),t=n,a=new o(r),l=t?a.writeInt32BE:a.writeInt32LE,s=0;s<i.length;s++)l.call(a,i[s],4*s,!0);return a}}}).call(this,e("lYpoI2"),"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},e("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/node_modules/gulp-browserify/node_modules/crypto-browserify/helpers.js","/node_modules/gulp-browserify/node_modules/crypto-browserify")},{buffer:3,lYpoI2:11}],5:[function(e,t,r){(function(t,n,o,i,a,l,s,c,u){var o=e("buffer").Buffer,f=e("./sha"),d=e("./sha256"),p=e("./rng"),m={sha1:f,sha256:d,md5:e("./md5")},h=new o(64);function v(e,t){var r=m[e=e||"sha1"],n=[];return r||g("algorithm:",e,"is not yet supported"),{update:function(e){return o.isBuffer(e)||(e=new o(e)),n.push(e),e.length,this},digest:function(e){var i=o.concat(n),i=t?function(e,t,r){o.isBuffer(t)||(t=new o(t)),o.isBuffer(r)||(r=new o(r)),t.length>64?t=e(t):t.length<64&&(t=o.concat([t,h],64));for(var n=new o(64),i=new o(64),a=0;a<64;a++)n[a]=54^t[a],i[a]=92^t[a];return r=e(o.concat([n,r])),e(o.concat([i,r]))}(r,t,i):r(i);return n=null,e?i.toString(e):i}}}function g(){var e=[].slice.call(arguments).join(" ");throw Error([e,"we accept pull requests","http://github.com/dominictarr/crypto-browserify"].join("\n"))}h.fill(0),r.createHash=function(e){return v(e)},r.createHmac=v,r.randomBytes=function(e,t){if(!t||!t.call)return new o(p(e));try{t.call(this,void 0,new o(p(e)))}catch(e){t(e)}};var _,y=["createCredentials","createCipher","createCipheriv","createDecipher","createDecipheriv","createSign","createVerify","createDiffieHellman","pbkdf2"],x=function(e){r[e]=function(){g("sorry,",e,"is not implemented yet")}};for(_ in y)x(y[_],_)}).call(this,e("lYpoI2"),"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},e("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/node_modules/gulp-browserify/node_modules/crypto-browserify/index.js","/node_modules/gulp-browserify/node_modules/crypto-browserify")},{"./md5":6,"./rng":7,"./sha":8,"./sha256":9,buffer:3,lYpoI2:11}],6:[function(e,t,r){(function(r,n,o,i,a,l,s,c,u){var f=e("./helpers");function d(e,t){e[t>>5]|=128<<t%32,e[14+(t+64>>>9<<4)]=t;for(var r=1732584193,n=-271733879,o=-1732584194,i=271733878,a=0;a<e.length;a+=16){var l=r,s=n,c=o,u=i,r=m(r,n,o,i,e[a+0],7,-680876936),i=m(i,r,n,o,e[a+1],12,-389564586),o=m(o,i,r,n,e[a+2],17,606105819),n=m(n,o,i,r,e[a+3],22,-1044525330);r=m(r,n,o,i,e[a+4],7,-176418897),i=m(i,r,n,o,e[a+5],12,1200080426),o=m(o,i,r,n,e[a+6],17,-1473231341),n=m(n,o,i,r,e[a+7],22,-45705983),r=m(r,n,o,i,e[a+8],7,1770035416),i=m(i,r,n,o,e[a+9],12,-1958414417),o=m(o,i,r,n,e[a+10],17,-42063),n=m(n,o,i,r,e[a+11],22,-1990404162),r=m(r,n,o,i,e[a+12],7,1804603682),i=m(i,r,n,o,e[a+13],12,-40341101),o=m(o,i,r,n,e[a+14],17,-1502002290),r=h(r,n=m(n,o,i,r,e[a+15],22,1236535329),o,i,e[a+1],5,-165796510),i=h(i,r,n,o,e[a+6],9,-1069501632),o=h(o,i,r,n,e[a+11],14,643717713),n=h(n,o,i,r,e[a+0],20,-373897302),r=h(r,n,o,i,e[a+5],5,-701558691),i=h(i,r,n,o,e[a+10],9,38016083),o=h(o,i,r,n,e[a+15],14,-660478335),n=h(n,o,i,r,e[a+4],20,-405537848),r=h(r,n,o,i,e[a+9],5,568446438),i=h(i,r,n,o,e[a+14],9,-1019803690),o=h(o,i,r,n,e[a+3],14,-187363961),n=h(n,o,i,r,e[a+8],20,1163531501),r=h(r,n,o,i,e[a+13],5,-1444681467),i=h(i,r,n,o,e[a+2],9,-51403784),o=h(o,i,r,n,e[a+7],14,1735328473),r=v(r,n=h(n,o,i,r,e[a+12],20,-1926607734),o,i,e[a+5],4,-378558),i=v(i,r,n,o,e[a+8],11,-2022574463),o=v(o,i,r,n,e[a+11],16,1839030562),n=v(n,o,i,r,e[a+14],23,-35309556),r=v(r,n,o,i,e[a+1],4,-1530992060),i=v(i,r,n,o,e[a+4],11,1272893353),o=v(o,i,r,n,e[a+7],16,-155497632),n=v(n,o,i,r,e[a+10],23,-1094730640),r=v(r,n,o,i,e[a+13],4,681279174),i=v(i,r,n,o,e[a+0],11,-358537222),o=v(o,i,r,n,e[a+3],16,-722521979),n=v(n,o,i,r,e[a+6],23,76029189),r=v(r,n,o,i,e[a+9],4,-640364487),i=v(i,r,n,o,e[a+12],11,-421815835),o=v(o,i,r,n,e[a+15],16,530742520),r=g(r,n=v(n,o,i,r,e[a+2],23,-995338651),o,i,e[a+0],6,-198630844),i=g(i,r,n,o,e[a+7],10,1126891415),o=g(o,i,r,n,e[a+14],15,-1416354905),n=g(n,o,i,r,e[a+5],21,-57434055),r=g(r,n,o,i,e[a+12],6,1700485571),i=g(i,r,n,o,e[a+3],10,-1894986606),o=g(o,i,r,n,e[a+10],15,-1051523),n=g(n,o,i,r,e[a+1],21,-2054922799),r=g(r,n,o,i,e[a+8],6,1873313359),i=g(i,r,n,o,e[a+15],10,-30611744),o=g(o,i,r,n,e[a+6],15,-1560198380),n=g(n,o,i,r,e[a+13],21,1309151649),r=g(r,n,o,i,e[a+4],6,-145523070),i=g(i,r,n,o,e[a+11],10,-1120210379),o=g(o,i,r,n,e[a+2],15,718787259),n=g(n,o,i,r,e[a+9],21,-343485551),r=_(r,l),n=_(n,s),o=_(o,c),i=_(i,u)}return[r,n,o,i]}function p(e,t,r,n,o,i){return _((t=_(_(t,e),_(n,i)))<<o|t>>>32-o,r)}function m(e,t,r,n,o,i,a){return p(t&r|~t&n,e,t,o,i,a)}function h(e,t,r,n,o,i,a){return p(t&n|r&~n,e,t,o,i,a)}function v(e,t,r,n,o,i,a){return p(t^r^n,e,t,o,i,a)}function g(e,t,r,n,o,i,a){return p(r^(t|~n),e,t,o,i,a)}function _(e,t){var r=(65535&e)+(65535&t);return(e>>16)+(t>>16)+(r>>16)<<16|65535&r}t.exports=function(e){return f.hash(e,d,16)}}).call(this,e("lYpoI2"),"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},e("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/node_modules/gulp-browserify/node_modules/crypto-browserify/md5.js","/node_modules/gulp-browserify/node_modules/crypto-browserify")},{"./helpers":4,buffer:3,lYpoI2:11}],7:[function(e,t,r){(function(e,r,n,o,i,a,l,s,c){var u;t.exports=u||function(e){for(var t,r=Array(e),n=0;n<e;n++)0==(3&n)&&(t=4294967296*Math.random()),r[n]=t>>>((3&n)<<3)&255;return r}}).call(this,e("lYpoI2"),"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},e("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/node_modules/gulp-browserify/node_modules/crypto-browserify/rng.js","/node_modules/gulp-browserify/node_modules/crypto-browserify")},{buffer:3,lYpoI2:11}],8:[function(e,t,r){(function(r,n,o,i,a,l,s,c,u){var f=e("./helpers");function d(e,t){e[t>>5]|=128<<24-t%32,e[15+(t+64>>9<<4)]=t;for(var r,n,o,i=Array(80),a=1732584193,l=-271733879,s=-1732584194,c=271733878,u=-1009589776,f=0;f<e.length;f+=16){for(var d=a,h=l,v=s,g=c,_=u,y=0;y<80;y++){i[y]=y<16?e[f+y]:m(i[y-3]^i[y-8]^i[y-14]^i[y-16],1);var x=p(p(m(a,5),(x=l,n=s,o=c,(r=y)<20?x&n|~x&o:!(r<40)&&r<60?x&n|x&o|n&o:x^n^o)),p(p(u,i[y]),(r=y)<20?1518500249:r<40?1859775393:r<60?-1894007588:-899497514)),u=c,c=s,s=m(l,30),l=a,a=x}a=p(a,d),l=p(l,h),s=p(s,v),c=p(c,g),u=p(u,_)}return[a,l,s,c,u]}function p(e,t){var r=(65535&e)+(65535&t);return(e>>16)+(t>>16)+(r>>16)<<16|65535&r}function m(e,t){return e<<t|e>>>32-t}t.exports=function(e){return f.hash(e,d,20,!0)}}).call(this,e("lYpoI2"),"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},e("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/node_modules/gulp-browserify/node_modules/crypto-browserify/sha.js","/node_modules/gulp-browserify/node_modules/crypto-browserify")},{"./helpers":4,buffer:3,lYpoI2:11}],9:[function(e,t,r){(function(r,n,o,i,a,l,s,c,u){function f(e,t){var r=(65535&e)+(65535&t);return(e>>16)+(t>>16)+(r>>16)<<16|65535&r}function d(e,t){var r,n=[1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298],o=[1779033703,3144134277,1013904242,2773480762,1359893119,2600822924,528734635,1541459225],i=Array(64);e[t>>5]|=128<<24-t%32,e[15+(t+64>>9<<4)]=t;for(var a,l,s=0;s<e.length;s+=16){for(var c=o[0],u=o[1],d=o[2],p=o[3],v=o[4],g=o[5],_=o[6],y=o[7],x=0;x<64;x++)i[x]=x<16?e[x+s]:f(f(f(m(l=i[x-2],17)^m(l,19)^h(l,10),i[x-7]),m(l=i[x-15],7)^m(l,18)^h(l,3)),i[x-16]),r=f(f(f(f(y,m(l=v,6)^m(l,11)^m(l,25)),v&g^~v&_),n[x]),i[x]),a=f(m(a=c,2)^m(a,13)^m(a,22),c&u^c&d^u&d),y=_,_=g,g=v,v=f(p,r),p=d,d=u,u=c,c=f(r,a);o[0]=f(c,o[0]),o[1]=f(u,o[1]),o[2]=f(d,o[2]),o[3]=f(p,o[3]),o[4]=f(v,o[4]),o[5]=f(g,o[5]),o[6]=f(_,o[6]),o[7]=f(y,o[7])}return o}var p=e("./helpers"),m=function(e,t){return e>>>t|e<<32-t},h=function(e,t){return e>>>t};t.exports=function(e){return p.hash(e,d,32,!0)}}).call(this,e("lYpoI2"),"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},e("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/node_modules/gulp-browserify/node_modules/crypto-browserify/sha256.js","/node_modules/gulp-browserify/node_modules/crypto-browserify")},{"./helpers":4,buffer:3,lYpoI2:11}],10:[function(e,t,r){(function(e,t,n,o,i,a,l,s,c){r.read=function(e,t,r,n,o){var i,a,l=8*o-n-1,s=(1<<l)-1,c=s>>1,u=-7,f=r?o-1:0,d=r?-1:1,o=e[t+f];for(f+=d,i=o&(1<<-u)-1,o>>=-u,u+=l;0<u;i=256*i+e[t+f],f+=d,u-=8);for(a=i&(1<<-u)-1,i>>=-u,u+=n;0<u;a=256*a+e[t+f],f+=d,u-=8);if(0===i)i=1-c;else{if(i===s)return a?NaN:1/0*(o?-1:1);a+=Math.pow(2,n),i-=c}return(o?-1:1)*a*Math.pow(2,i-n)},r.write=function(e,t,r,n,o,i){var a,l,s=8*i-o-1,c=(1<<s)-1,u=c>>1,f=23===o?5960464477539062e-23:0,d=n?0:i-1,p=n?1:-1,i=t<0||0===t&&1/t<0?1:0;for(isNaN(t=Math.abs(t))||t===1/0?(l=isNaN(t)?1:0,a=c):(a=Math.floor(Math.log(t)/Math.LN2),t*(n=Math.pow(2,-a))<1&&(a--,n*=2),2<=(t+=1<=a+u?f/n:f*Math.pow(2,1-u))*n&&(a++,n/=2),c<=a+u?(l=0,a=c):1<=a+u?(l=(t*n-1)*Math.pow(2,o),a+=u):(l=t*Math.pow(2,u-1)*Math.pow(2,o),a=0));8<=o;e[r+d]=255&l,d+=p,l/=256,o-=8);for(a=a<<o|l,s+=o;0<s;e[r+d]=255&a,d+=p,a/=256,s-=8);e[r+d-p]|=128*i}}).call(this,e("lYpoI2"),"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},e("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/node_modules/gulp-browserify/node_modules/ieee754/index.js","/node_modules/gulp-browserify/node_modules/ieee754")},{buffer:3,lYpoI2:11}],11:[function(e,t,r){(function(e,r,n,o,i,a,l,s,c){var u,f,d;function p(){}(e=t.exports={}).nextTick=(f="undefined"!=typeof window&&window.setImmediate,d="undefined"!=typeof window&&window.postMessage&&window.addEventListener,f?function(e){return window.setImmediate(e)}:d?(u=[],window.addEventListener("message",function(e){var t=e.source;t!==window&&null!==t||"process-tick"!==e.data||(e.stopPropagation(),0<u.length&&u.shift()())},!0),function(e){u.push(e),window.postMessage("process-tick","*")}):function(e){setTimeout(e,0)}),e.title="browser",e.browser=!0,e.env={},e.argv=[],e.on=p,e.addListener=p,e.once=p,e.off=p,e.removeListener=p,e.removeAllListeners=p,e.emit=p,e.binding=function(e){throw Error("process.binding is not supported")},e.cwd=function(){return"/"},e.chdir=function(e){throw Error("process.chdir is not supported")}}).call(this,e("lYpoI2"),"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},e("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/node_modules/gulp-browserify/node_modules/process/browser.js","/node_modules/gulp-browserify/node_modules/process")},{buffer:3,lYpoI2:11}]},{},[1])(1)}}]);