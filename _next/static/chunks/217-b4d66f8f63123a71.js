"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[217],{9866:function(e,t,r){r.d(t,{b:function(){return s}});var i=r(959),a=r(5542),o=r(3589),n=r(4771);let s=i.forwardRef(({children:e,enabled:t=!0,speed:r=1,rotationIntensity:s=1,floatIntensity:l=1,floatingRange:c=[-.1,.1],...u},f)=>{let m=i.useRef(null),h=i.useRef(1e4*Math.random());return(0,a.A)(e=>{var i,a;if(!t||0===r)return;let o=h.current+e.clock.getElapsedTime();m.current.rotation.x=Math.cos(o/4*r)/8*s,m.current.rotation.y=Math.sin(o/4*r)/8*s,m.current.rotation.z=Math.sin(o/4*r)/20*s;let u=Math.sin(o/4*r)/10;u=n.MathUtils.mapLinear(u,-.1,.1,null!==(i=null==c?void 0:c[0])&&void 0!==i?i:-.1,null!==(a=null==c?void 0:c[1])&&void 0!==a?a:.1),m.current.position.y=u*l,m.current.updateMatrix()}),i.createElement("group",u,i.createElement("group",{ref:(0,o.Z)([m,f]),matrixAutoUpdate:!1},e))})},2842:function(e,t,r){r.d(t,{T:function(){return h},De:function(){return m}});var i=r(8126),a=r(4771),o=r(959),n=r(3589);class s extends a.Mesh{constructor(e,t,r=!1,i=!1,o=1e4){let n=new a.BufferGeometry;super(n,t),this.isMarchingCubes=!0;let s=this,u=new Float32Array(36),f=new Float32Array(36),m=new Float32Array(36);function h(e,t,r,i,a,o,n,l,c,h){var d,p,v,y,g,x;let A=(r-n)/(l-n),z=s.normal_cache;u[t+0]=i+A*s.delta,u[t+1]=a,u[t+2]=o,f[t+0]=(d=z[e+0])+(z[e+3]-d)*A,f[t+1]=(p=z[e+1])+(z[e+4]-p)*A,f[t+2]=(v=z[e+2])+(z[e+5]-v)*A,m[t+0]=(y=s.palette[3*c+0])+(s.palette[3*h+0]-y)*A,m[t+1]=(g=s.palette[3*c+1])+(s.palette[3*h+1]-g)*A,m[t+2]=(x=s.palette[3*c+2])+(s.palette[3*h+2]-x)*A}function d(e,t,r,i,a,o,n,l,c,h){var d,p,v,y,g,x;let A=(r-n)/(l-n),z=s.normal_cache;u[t+0]=i,u[t+1]=a+A*s.delta,u[t+2]=o;let M=e+3*s.yd;f[t+0]=(d=z[e+0])+(z[M+0]-d)*A,f[t+1]=(p=z[e+1])+(z[M+1]-p)*A,f[t+2]=(v=z[e+2])+(z[M+2]-v)*A,m[t+0]=(y=s.palette[3*c+0])+(s.palette[3*h+0]-y)*A,m[t+1]=(g=s.palette[3*c+1])+(s.palette[3*h+1]-g)*A,m[t+2]=(x=s.palette[3*c+2])+(s.palette[3*h+2]-x)*A}function p(e,t,r,i,a,o,n,l,c,h){var d,p,v,y,g,x;let A=(r-n)/(l-n),z=s.normal_cache;u[t+0]=i,u[t+1]=a,u[t+2]=o+A*s.delta;let M=e+3*s.zd;f[t+0]=(d=z[e+0])+(z[M+0]-d)*A,f[t+1]=(p=z[e+1])+(z[M+1]-p)*A,f[t+2]=(v=z[e+2])+(z[M+2]-v)*A,m[t+0]=(y=s.palette[3*c+0])+(s.palette[3*h+0]-y)*A,m[t+1]=(g=s.palette[3*c+1])+(s.palette[3*h+1]-g)*A,m[t+2]=(x=s.palette[3*c+2])+(s.palette[3*h+2]-x)*A}function v(e){let t=3*e;0===s.normal_cache[t]&&(s.normal_cache[t+0]=s.field[e-1]-s.field[e+1],s.normal_cache[t+1]=s.field[e-s.yd]-s.field[e+s.yd],s.normal_cache[t+2]=s.field[e-s.zd]-s.field[e+s.zd])}this.enableUvs=r,this.enableColors=i,this.init=function(e){this.resolution=e,this.isolation=80,this.size=e,this.size2=this.size*this.size,this.size3=this.size2*this.size,this.halfsize=this.size/2,this.delta=2/this.size,this.yd=this.size,this.zd=this.size2,this.field=new Float32Array(this.size3),this.normal_cache=new Float32Array(3*this.size3),this.palette=new Float32Array(3*this.size3),this.count=0;let t=3*o;this.positionArray=new Float32Array(3*t);let r=new a.BufferAttribute(this.positionArray,3);r.setUsage(a.DynamicDrawUsage),n.setAttribute("position",r),this.normalArray=new Float32Array(3*t);let i=new a.BufferAttribute(this.normalArray,3);if(i.setUsage(a.DynamicDrawUsage),n.setAttribute("normal",i),this.enableUvs){this.uvArray=new Float32Array(2*t);let e=new a.BufferAttribute(this.uvArray,2);e.setUsage(a.DynamicDrawUsage),n.setAttribute("uv",e)}if(this.enableColors){this.colorArray=new Float32Array(3*t);let e=new a.BufferAttribute(this.colorArray,3);e.setUsage(a.DynamicDrawUsage),n.setAttribute("color",e)}n.boundingSphere=new a.Sphere(new a.Vector3,1)},this.addBall=function(e,t,r,i,o,n){let s,l,c,u,f,m,h,d,p,v,y;let g=Math.sign(i);i=Math.abs(i);let x=null!=n,A=new a.Color(e,t,r);if(x)try{A=n instanceof a.Color?n:Array.isArray(n)?new a.Color(Math.min(Math.abs(n[0]),1),Math.min(Math.abs(n[1]),1),Math.min(Math.abs(n[2]),1)):new a.Color(n)}catch(i){A=new a.Color(e,t,r)}let z=this.size*Math.sqrt(i/o),M=r*this.size,w=t*this.size,b=e*this.size,C=Math.floor(M-z);C<1&&(C=1);let S=Math.floor(M+z);S>this.size-1&&(S=this.size-1);let R=Math.floor(w-z);R<1&&(R=1);let F=Math.floor(w+z);F>this.size-1&&(F=this.size-1);let D=Math.floor(b-z);D<1&&(D=1);let E=Math.floor(b+z);for(E>this.size-1&&(E=this.size-1),c=C;c<S;c++)for(f=this.size2*c,p=(d=c/this.size-r)*d,l=R;l<F;l++)for(u=f+this.size*l,v=(h=l/this.size-t)*h,s=D;s<E;s++)if((y=i/(1e-6+(m=s/this.size-e)*m+v+p)-o)>0){this.field[u+s]+=y*g;let e=Math.sqrt((s-b)*(s-b)+(l-w)*(l-w)+(c-M)*(c-M))/z,t=1-e*e*e*(e*(6*e-15)+10);this.palette[(u+s)*3+0]+=A.r*t,this.palette[(u+s)*3+1]+=A.g*t,this.palette[(u+s)*3+2]+=A.b*t}},this.addPlaneX=function(e,t){let r=this.size,i=this.yd,a=this.zd,o=this.field,n,s,l,c,u,f,m=r*Math.sqrt(e/t);for(m>r&&(m=r),n=0;n<m;n++)if((c=e/(1e-4+(u=n/r)*u)-t)>0)for(s=0;s<r;s++)for(l=0,f=n+s*i;l<r;l++)o[a*l+f]+=c},this.addPlaneY=function(e,t){let r=this.size,i=this.yd,a=this.zd,o=this.field,n,s,l,c,u,f,m,h=r*Math.sqrt(e/t);for(h>r&&(h=r),s=0;s<h;s++)if((c=e/(1e-4+(u=s/r)*u)-t)>0)for(n=0,f=s*i;n<r;n++)for(l=0,m=f+n;l<r;l++)o[a*l+m]+=c},this.addPlaneZ=function(e,t){let r=this.size,i=this.yd,a=this.zd,o=this.field,n,s,l,c,u,f,m,h=r*Math.sqrt(e/t);for(h>r&&(h=r),l=0;l<h;l++)if((c=e/(1e-4+(u=l/r)*u)-t)>0)for(s=0,f=a*l;s<r;s++)for(n=0,m=f+s*i;n<r;n++)o[m+n]+=c},this.setCell=function(e,t,r,i){let a=this.size2*r+this.size*t+e;this.field[a]=i},this.getCell=function(e,t,r){let i=this.size2*r+this.size*t+e;return this.field[i]},this.blur=function(e=1){let t=this.field,r=t.slice(),i=this.size,a=this.size2;for(let o=0;o<i;o++)for(let n=0;n<i;n++)for(let s=0;s<i;s++){let l=a*s+i*n+o,c=r[l],u=1;for(let t=-1;t<=1;t+=2){let l=t+o;if(!(l<0)&&!(l>=i))for(let t=-1;t<=1;t+=2){let o=t+n;if(!(o<0)&&!(o>=i))for(let t=-1;t<=1;t+=2){let n=t+s;if(n<0||n>=i)continue;let f=a*n+i*o+l,m=r[f];u++,c+=e*(m-c)/u}}}t[l]=c}},this.reset=function(){for(let e=0;e<this.size3;e++)this.normal_cache[3*e]=0,this.field[e]=0,this.palette[3*e]=this.palette[3*e+1]=this.palette[3*e+2]=0},this.update=function(){this.count=0;let e=this.size-2;for(let t=1;t<e;t++){let r=this.size2*t,i=(t-this.halfsize)/this.halfsize;for(let t=1;t<e;t++){let a=r+this.size*t,o=(t-this.halfsize)/this.halfsize;for(let t=1;t<e;t++){let e=(t-this.halfsize)/this.halfsize,r=a+t;!function(e,t,r,i,a){let o=i+1,n=i+s.yd,y=i+s.zd,g=o+s.yd,x=o+s.zd,A=i+s.yd+s.zd,z=o+s.yd+s.zd,M=0,w=s.field[i],b=s.field[o],C=s.field[n],S=s.field[g],R=s.field[y],F=s.field[x],D=s.field[A],E=s.field[z];w<a&&(M|=1),b<a&&(M|=2),C<a&&(M|=8),S<a&&(M|=4),R<a&&(M|=16),F<a&&(M|=32),D<a&&(M|=128),E<a&&(M|=64);let T=l[M];if(0===T)return;let k=s.delta,U=e+k,_=t+k,B=r+k;1&T&&(v(i),v(o),h(3*i,0,a,e,t,r,w,b,i,o)),2&T&&(v(o),v(g),d(3*o,3,a,U,t,r,b,S,o,g)),4&T&&(v(n),v(g),h(3*n,6,a,e,_,r,C,S,n,g)),8&T&&(v(i),v(n),d(3*i,9,a,e,t,r,w,C,i,n)),16&T&&(v(y),v(x),h(3*y,12,a,e,t,B,R,F,y,x)),32&T&&(v(x),v(z),d(3*x,15,a,U,t,B,F,E,x,z)),64&T&&(v(A),v(z),h(3*A,18,a,e,_,B,D,E,A,z)),128&T&&(v(y),v(A),d(3*y,21,a,e,t,B,R,D,y,A)),256&T&&(v(i),v(y),p(3*i,24,a,e,t,r,w,R,i,y)),512&T&&(v(o),v(x),p(3*o,27,a,U,t,r,b,F,o,x)),1024&T&&(v(g),v(z),p(3*g,30,a,U,_,r,S,E,g,z)),2048&T&&(v(n),v(A),p(3*n,33,a,e,_,r,C,D,n,A)),M<<=4;let I,P,N,L=0;for(;-1!=c[M+L];)P=(I=M+L)+1,N=I+2,function(e,t,r,i,a,o){let n=3*s.count;if(s.positionArray[n+0]=e[i],s.positionArray[n+1]=e[i+1],s.positionArray[n+2]=e[i+2],s.positionArray[n+3]=e[a],s.positionArray[n+4]=e[a+1],s.positionArray[n+5]=e[a+2],s.positionArray[n+6]=e[o],s.positionArray[n+7]=e[o+1],s.positionArray[n+8]=e[o+2],!0===s.material.flatShading){let e=(t[i+0]+t[a+0]+t[o+0])/3,r=(t[i+1]+t[a+1]+t[o+1])/3,l=(t[i+2]+t[a+2]+t[o+2])/3;s.normalArray[n+0]=e,s.normalArray[n+1]=r,s.normalArray[n+2]=l,s.normalArray[n+3]=e,s.normalArray[n+4]=r,s.normalArray[n+5]=l,s.normalArray[n+6]=e,s.normalArray[n+7]=r,s.normalArray[n+8]=l}else s.normalArray[n+0]=t[i+0],s.normalArray[n+1]=t[i+1],s.normalArray[n+2]=t[i+2],s.normalArray[n+3]=t[a+0],s.normalArray[n+4]=t[a+1],s.normalArray[n+5]=t[a+2],s.normalArray[n+6]=t[o+0],s.normalArray[n+7]=t[o+1],s.normalArray[n+8]=t[o+2];if(s.enableUvs){let t=2*s.count;s.uvArray[t+0]=e[i+0],s.uvArray[t+1]=e[i+2],s.uvArray[t+2]=e[a+0],s.uvArray[t+3]=e[a+2],s.uvArray[t+4]=e[o+0],s.uvArray[t+5]=e[o+2]}s.enableColors&&(s.colorArray[n+0]=r[i+0],s.colorArray[n+1]=r[i+1],s.colorArray[n+2]=r[i+2],s.colorArray[n+3]=r[a+0],s.colorArray[n+4]=r[a+1],s.colorArray[n+5]=r[a+2],s.colorArray[n+6]=r[o+0],s.colorArray[n+7]=r[o+1],s.colorArray[n+8]=r[o+2]),s.count+=3}(u,f,m,3*c[I],3*c[P],3*c[N]),L+=3}(e,o,i,r,this.isolation)}}}this.geometry.setDrawRange(0,this.count),n.getAttribute("position").needsUpdate=!0,n.getAttribute("normal").needsUpdate=!0,this.enableUvs&&(n.getAttribute("uv").needsUpdate=!0),this.enableColors&&(n.getAttribute("color").needsUpdate=!0),this.count/3>o&&console.warn("THREE.MarchingCubes: Geometry buffers too small for rendering. Please create an instance with a higher poly count.")},this.init(e)}}let l=new Int32Array([0,265,515,778,1030,1295,1541,1804,2060,2309,2575,2822,3082,3331,3593,3840,400,153,915,666,1430,1183,1941,1692,2460,2197,2975,2710,3482,3219,3993,3728,560,825,51,314,1590,1855,1077,1340,2620,2869,2111,2358,3642,3891,3129,3376,928,681,419,170,1958,1711,1445,1196,2988,2725,2479,2214,4010,3747,3497,3232,1120,1385,1635,1898,102,367,613,876,3180,3429,3695,3942,2154,2403,2665,2912,1520,1273,2035,1786,502,255,1013,764,3580,3317,4095,3830,2554,2291,3065,2800,1616,1881,1107,1370,598,863,85,348,3676,3925,3167,3414,2650,2899,2137,2384,1984,1737,1475,1226,966,719,453,204,4044,3781,3535,3270,3018,2755,2505,2240,2240,2505,2755,3018,3270,3535,3781,4044,204,453,719,966,1226,1475,1737,1984,2384,2137,2899,2650,3414,3167,3925,3676,348,85,863,598,1370,1107,1881,1616,2800,3065,2291,2554,3830,4095,3317,3580,764,1013,255,502,1786,2035,1273,1520,2912,2665,2403,2154,3942,3695,3429,3180,876,613,367,102,1898,1635,1385,1120,3232,3497,3747,4010,2214,2479,2725,2988,1196,1445,1711,1958,170,419,681,928,3376,3129,3891,3642,2358,2111,2869,2620,1340,1077,1855,1590,314,51,825,560,3728,3993,3219,3482,2710,2975,2197,2460,1692,1941,1183,1430,666,915,153,400,3840,3593,3331,3082,2822,2575,2309,2060,1804,1541,1295,1030,778,515,265,0]),c=new Int32Array([-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,8,3,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,1,9,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,8,3,9,8,1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,2,10,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,8,3,1,2,10,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,9,2,10,0,2,9,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2,8,3,2,10,8,10,9,8,-1,-1,-1,-1,-1,-1,-1,3,11,2,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,11,2,8,11,0,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,9,0,2,3,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,11,2,1,9,11,9,8,11,-1,-1,-1,-1,-1,-1,-1,3,10,1,11,10,3,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,10,1,0,8,10,8,11,10,-1,-1,-1,-1,-1,-1,-1,3,9,0,3,11,9,11,10,9,-1,-1,-1,-1,-1,-1,-1,9,8,10,10,8,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,7,8,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,3,0,7,3,4,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,1,9,8,4,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,1,9,4,7,1,7,3,1,-1,-1,-1,-1,-1,-1,-1,1,2,10,8,4,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3,4,7,3,0,4,1,2,10,-1,-1,-1,-1,-1,-1,-1,9,2,10,9,0,2,8,4,7,-1,-1,-1,-1,-1,-1,-1,2,10,9,2,9,7,2,7,3,7,9,4,-1,-1,-1,-1,8,4,7,3,11,2,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,11,4,7,11,2,4,2,0,4,-1,-1,-1,-1,-1,-1,-1,9,0,1,8,4,7,2,3,11,-1,-1,-1,-1,-1,-1,-1,4,7,11,9,4,11,9,11,2,9,2,1,-1,-1,-1,-1,3,10,1,3,11,10,7,8,4,-1,-1,-1,-1,-1,-1,-1,1,11,10,1,4,11,1,0,4,7,11,4,-1,-1,-1,-1,4,7,8,9,0,11,9,11,10,11,0,3,-1,-1,-1,-1,4,7,11,4,11,9,9,11,10,-1,-1,-1,-1,-1,-1,-1,9,5,4,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,9,5,4,0,8,3,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,5,4,1,5,0,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,8,5,4,8,3,5,3,1,5,-1,-1,-1,-1,-1,-1,-1,1,2,10,9,5,4,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3,0,8,1,2,10,4,9,5,-1,-1,-1,-1,-1,-1,-1,5,2,10,5,4,2,4,0,2,-1,-1,-1,-1,-1,-1,-1,2,10,5,3,2,5,3,5,4,3,4,8,-1,-1,-1,-1,9,5,4,2,3,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,11,2,0,8,11,4,9,5,-1,-1,-1,-1,-1,-1,-1,0,5,4,0,1,5,2,3,11,-1,-1,-1,-1,-1,-1,-1,2,1,5,2,5,8,2,8,11,4,8,5,-1,-1,-1,-1,10,3,11,10,1,3,9,5,4,-1,-1,-1,-1,-1,-1,-1,4,9,5,0,8,1,8,10,1,8,11,10,-1,-1,-1,-1,5,4,0,5,0,11,5,11,10,11,0,3,-1,-1,-1,-1,5,4,8,5,8,10,10,8,11,-1,-1,-1,-1,-1,-1,-1,9,7,8,5,7,9,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,9,3,0,9,5,3,5,7,3,-1,-1,-1,-1,-1,-1,-1,0,7,8,0,1,7,1,5,7,-1,-1,-1,-1,-1,-1,-1,1,5,3,3,5,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,9,7,8,9,5,7,10,1,2,-1,-1,-1,-1,-1,-1,-1,10,1,2,9,5,0,5,3,0,5,7,3,-1,-1,-1,-1,8,0,2,8,2,5,8,5,7,10,5,2,-1,-1,-1,-1,2,10,5,2,5,3,3,5,7,-1,-1,-1,-1,-1,-1,-1,7,9,5,7,8,9,3,11,2,-1,-1,-1,-1,-1,-1,-1,9,5,7,9,7,2,9,2,0,2,7,11,-1,-1,-1,-1,2,3,11,0,1,8,1,7,8,1,5,7,-1,-1,-1,-1,11,2,1,11,1,7,7,1,5,-1,-1,-1,-1,-1,-1,-1,9,5,8,8,5,7,10,1,3,10,3,11,-1,-1,-1,-1,5,7,0,5,0,9,7,11,0,1,0,10,11,10,0,-1,11,10,0,11,0,3,10,5,0,8,0,7,5,7,0,-1,11,10,5,7,11,5,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,10,6,5,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,8,3,5,10,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,9,0,1,5,10,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,8,3,1,9,8,5,10,6,-1,-1,-1,-1,-1,-1,-1,1,6,5,2,6,1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,6,5,1,2,6,3,0,8,-1,-1,-1,-1,-1,-1,-1,9,6,5,9,0,6,0,2,6,-1,-1,-1,-1,-1,-1,-1,5,9,8,5,8,2,5,2,6,3,2,8,-1,-1,-1,-1,2,3,11,10,6,5,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,11,0,8,11,2,0,10,6,5,-1,-1,-1,-1,-1,-1,-1,0,1,9,2,3,11,5,10,6,-1,-1,-1,-1,-1,-1,-1,5,10,6,1,9,2,9,11,2,9,8,11,-1,-1,-1,-1,6,3,11,6,5,3,5,1,3,-1,-1,-1,-1,-1,-1,-1,0,8,11,0,11,5,0,5,1,5,11,6,-1,-1,-1,-1,3,11,6,0,3,6,0,6,5,0,5,9,-1,-1,-1,-1,6,5,9,6,9,11,11,9,8,-1,-1,-1,-1,-1,-1,-1,5,10,6,4,7,8,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,3,0,4,7,3,6,5,10,-1,-1,-1,-1,-1,-1,-1,1,9,0,5,10,6,8,4,7,-1,-1,-1,-1,-1,-1,-1,10,6,5,1,9,7,1,7,3,7,9,4,-1,-1,-1,-1,6,1,2,6,5,1,4,7,8,-1,-1,-1,-1,-1,-1,-1,1,2,5,5,2,6,3,0,4,3,4,7,-1,-1,-1,-1,8,4,7,9,0,5,0,6,5,0,2,6,-1,-1,-1,-1,7,3,9,7,9,4,3,2,9,5,9,6,2,6,9,-1,3,11,2,7,8,4,10,6,5,-1,-1,-1,-1,-1,-1,-1,5,10,6,4,7,2,4,2,0,2,7,11,-1,-1,-1,-1,0,1,9,4,7,8,2,3,11,5,10,6,-1,-1,-1,-1,9,2,1,9,11,2,9,4,11,7,11,4,5,10,6,-1,8,4,7,3,11,5,3,5,1,5,11,6,-1,-1,-1,-1,5,1,11,5,11,6,1,0,11,7,11,4,0,4,11,-1,0,5,9,0,6,5,0,3,6,11,6,3,8,4,7,-1,6,5,9,6,9,11,4,7,9,7,11,9,-1,-1,-1,-1,10,4,9,6,4,10,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,10,6,4,9,10,0,8,3,-1,-1,-1,-1,-1,-1,-1,10,0,1,10,6,0,6,4,0,-1,-1,-1,-1,-1,-1,-1,8,3,1,8,1,6,8,6,4,6,1,10,-1,-1,-1,-1,1,4,9,1,2,4,2,6,4,-1,-1,-1,-1,-1,-1,-1,3,0,8,1,2,9,2,4,9,2,6,4,-1,-1,-1,-1,0,2,4,4,2,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,8,3,2,8,2,4,4,2,6,-1,-1,-1,-1,-1,-1,-1,10,4,9,10,6,4,11,2,3,-1,-1,-1,-1,-1,-1,-1,0,8,2,2,8,11,4,9,10,4,10,6,-1,-1,-1,-1,3,11,2,0,1,6,0,6,4,6,1,10,-1,-1,-1,-1,6,4,1,6,1,10,4,8,1,2,1,11,8,11,1,-1,9,6,4,9,3,6,9,1,3,11,6,3,-1,-1,-1,-1,8,11,1,8,1,0,11,6,1,9,1,4,6,4,1,-1,3,11,6,3,6,0,0,6,4,-1,-1,-1,-1,-1,-1,-1,6,4,8,11,6,8,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,7,10,6,7,8,10,8,9,10,-1,-1,-1,-1,-1,-1,-1,0,7,3,0,10,7,0,9,10,6,7,10,-1,-1,-1,-1,10,6,7,1,10,7,1,7,8,1,8,0,-1,-1,-1,-1,10,6,7,10,7,1,1,7,3,-1,-1,-1,-1,-1,-1,-1,1,2,6,1,6,8,1,8,9,8,6,7,-1,-1,-1,-1,2,6,9,2,9,1,6,7,9,0,9,3,7,3,9,-1,7,8,0,7,0,6,6,0,2,-1,-1,-1,-1,-1,-1,-1,7,3,2,6,7,2,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2,3,11,10,6,8,10,8,9,8,6,7,-1,-1,-1,-1,2,0,7,2,7,11,0,9,7,6,7,10,9,10,7,-1,1,8,0,1,7,8,1,10,7,6,7,10,2,3,11,-1,11,2,1,11,1,7,10,6,1,6,7,1,-1,-1,-1,-1,8,9,6,8,6,7,9,1,6,11,6,3,1,3,6,-1,0,9,1,11,6,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,7,8,0,7,0,6,3,11,0,11,6,0,-1,-1,-1,-1,7,11,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,7,6,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3,0,8,11,7,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,1,9,11,7,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,8,1,9,8,3,1,11,7,6,-1,-1,-1,-1,-1,-1,-1,10,1,2,6,11,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,2,10,3,0,8,6,11,7,-1,-1,-1,-1,-1,-1,-1,2,9,0,2,10,9,6,11,7,-1,-1,-1,-1,-1,-1,-1,6,11,7,2,10,3,10,8,3,10,9,8,-1,-1,-1,-1,7,2,3,6,2,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,7,0,8,7,6,0,6,2,0,-1,-1,-1,-1,-1,-1,-1,2,7,6,2,3,7,0,1,9,-1,-1,-1,-1,-1,-1,-1,1,6,2,1,8,6,1,9,8,8,7,6,-1,-1,-1,-1,10,7,6,10,1,7,1,3,7,-1,-1,-1,-1,-1,-1,-1,10,7,6,1,7,10,1,8,7,1,0,8,-1,-1,-1,-1,0,3,7,0,7,10,0,10,9,6,10,7,-1,-1,-1,-1,7,6,10,7,10,8,8,10,9,-1,-1,-1,-1,-1,-1,-1,6,8,4,11,8,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3,6,11,3,0,6,0,4,6,-1,-1,-1,-1,-1,-1,-1,8,6,11,8,4,6,9,0,1,-1,-1,-1,-1,-1,-1,-1,9,4,6,9,6,3,9,3,1,11,3,6,-1,-1,-1,-1,6,8,4,6,11,8,2,10,1,-1,-1,-1,-1,-1,-1,-1,1,2,10,3,0,11,0,6,11,0,4,6,-1,-1,-1,-1,4,11,8,4,6,11,0,2,9,2,10,9,-1,-1,-1,-1,10,9,3,10,3,2,9,4,3,11,3,6,4,6,3,-1,8,2,3,8,4,2,4,6,2,-1,-1,-1,-1,-1,-1,-1,0,4,2,4,6,2,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,9,0,2,3,4,2,4,6,4,3,8,-1,-1,-1,-1,1,9,4,1,4,2,2,4,6,-1,-1,-1,-1,-1,-1,-1,8,1,3,8,6,1,8,4,6,6,10,1,-1,-1,-1,-1,10,1,0,10,0,6,6,0,4,-1,-1,-1,-1,-1,-1,-1,4,6,3,4,3,8,6,10,3,0,3,9,10,9,3,-1,10,9,4,6,10,4,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,9,5,7,6,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,8,3,4,9,5,11,7,6,-1,-1,-1,-1,-1,-1,-1,5,0,1,5,4,0,7,6,11,-1,-1,-1,-1,-1,-1,-1,11,7,6,8,3,4,3,5,4,3,1,5,-1,-1,-1,-1,9,5,4,10,1,2,7,6,11,-1,-1,-1,-1,-1,-1,-1,6,11,7,1,2,10,0,8,3,4,9,5,-1,-1,-1,-1,7,6,11,5,4,10,4,2,10,4,0,2,-1,-1,-1,-1,3,4,8,3,5,4,3,2,5,10,5,2,11,7,6,-1,7,2,3,7,6,2,5,4,9,-1,-1,-1,-1,-1,-1,-1,9,5,4,0,8,6,0,6,2,6,8,7,-1,-1,-1,-1,3,6,2,3,7,6,1,5,0,5,4,0,-1,-1,-1,-1,6,2,8,6,8,7,2,1,8,4,8,5,1,5,8,-1,9,5,4,10,1,6,1,7,6,1,3,7,-1,-1,-1,-1,1,6,10,1,7,6,1,0,7,8,7,0,9,5,4,-1,4,0,10,4,10,5,0,3,10,6,10,7,3,7,10,-1,7,6,10,7,10,8,5,4,10,4,8,10,-1,-1,-1,-1,6,9,5,6,11,9,11,8,9,-1,-1,-1,-1,-1,-1,-1,3,6,11,0,6,3,0,5,6,0,9,5,-1,-1,-1,-1,0,11,8,0,5,11,0,1,5,5,6,11,-1,-1,-1,-1,6,11,3,6,3,5,5,3,1,-1,-1,-1,-1,-1,-1,-1,1,2,10,9,5,11,9,11,8,11,5,6,-1,-1,-1,-1,0,11,3,0,6,11,0,9,6,5,6,9,1,2,10,-1,11,8,5,11,5,6,8,0,5,10,5,2,0,2,5,-1,6,11,3,6,3,5,2,10,3,10,5,3,-1,-1,-1,-1,5,8,9,5,2,8,5,6,2,3,8,2,-1,-1,-1,-1,9,5,6,9,6,0,0,6,2,-1,-1,-1,-1,-1,-1,-1,1,5,8,1,8,0,5,6,8,3,8,2,6,2,8,-1,1,5,6,2,1,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,3,6,1,6,10,3,8,6,5,6,9,8,9,6,-1,10,1,0,10,0,6,9,5,0,5,6,0,-1,-1,-1,-1,0,3,8,5,6,10,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,10,5,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,11,5,10,7,5,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,11,5,10,11,7,5,8,3,0,-1,-1,-1,-1,-1,-1,-1,5,11,7,5,10,11,1,9,0,-1,-1,-1,-1,-1,-1,-1,10,7,5,10,11,7,9,8,1,8,3,1,-1,-1,-1,-1,11,1,2,11,7,1,7,5,1,-1,-1,-1,-1,-1,-1,-1,0,8,3,1,2,7,1,7,5,7,2,11,-1,-1,-1,-1,9,7,5,9,2,7,9,0,2,2,11,7,-1,-1,-1,-1,7,5,2,7,2,11,5,9,2,3,2,8,9,8,2,-1,2,5,10,2,3,5,3,7,5,-1,-1,-1,-1,-1,-1,-1,8,2,0,8,5,2,8,7,5,10,2,5,-1,-1,-1,-1,9,0,1,5,10,3,5,3,7,3,10,2,-1,-1,-1,-1,9,8,2,9,2,1,8,7,2,10,2,5,7,5,2,-1,1,3,5,3,7,5,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,8,7,0,7,1,1,7,5,-1,-1,-1,-1,-1,-1,-1,9,0,3,9,3,5,5,3,7,-1,-1,-1,-1,-1,-1,-1,9,8,7,5,9,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,5,8,4,5,10,8,10,11,8,-1,-1,-1,-1,-1,-1,-1,5,0,4,5,11,0,5,10,11,11,3,0,-1,-1,-1,-1,0,1,9,8,4,10,8,10,11,10,4,5,-1,-1,-1,-1,10,11,4,10,4,5,11,3,4,9,4,1,3,1,4,-1,2,5,1,2,8,5,2,11,8,4,5,8,-1,-1,-1,-1,0,4,11,0,11,3,4,5,11,2,11,1,5,1,11,-1,0,2,5,0,5,9,2,11,5,4,5,8,11,8,5,-1,9,4,5,2,11,3,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2,5,10,3,5,2,3,4,5,3,8,4,-1,-1,-1,-1,5,10,2,5,2,4,4,2,0,-1,-1,-1,-1,-1,-1,-1,3,10,2,3,5,10,3,8,5,4,5,8,0,1,9,-1,5,10,2,5,2,4,1,9,2,9,4,2,-1,-1,-1,-1,8,4,5,8,5,3,3,5,1,-1,-1,-1,-1,-1,-1,-1,0,4,5,1,0,5,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,8,4,5,8,5,3,9,0,5,0,3,5,-1,-1,-1,-1,9,4,5,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,11,7,4,9,11,9,10,11,-1,-1,-1,-1,-1,-1,-1,0,8,3,4,9,7,9,11,7,9,10,11,-1,-1,-1,-1,1,10,11,1,11,4,1,4,0,7,4,11,-1,-1,-1,-1,3,1,4,3,4,8,1,10,4,7,4,11,10,11,4,-1,4,11,7,9,11,4,9,2,11,9,1,2,-1,-1,-1,-1,9,7,4,9,11,7,9,1,11,2,11,1,0,8,3,-1,11,7,4,11,4,2,2,4,0,-1,-1,-1,-1,-1,-1,-1,11,7,4,11,4,2,8,3,4,3,2,4,-1,-1,-1,-1,2,9,10,2,7,9,2,3,7,7,4,9,-1,-1,-1,-1,9,10,7,9,7,4,10,2,7,8,7,0,2,0,7,-1,3,7,10,3,10,2,7,4,10,1,10,0,4,0,10,-1,1,10,2,8,7,4,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,9,1,4,1,7,7,1,3,-1,-1,-1,-1,-1,-1,-1,4,9,1,4,1,7,0,8,1,8,7,1,-1,-1,-1,-1,4,0,3,7,4,3,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,8,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,9,10,8,10,11,8,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3,0,9,3,9,11,11,9,10,-1,-1,-1,-1,-1,-1,-1,0,1,10,0,10,8,8,10,11,-1,-1,-1,-1,-1,-1,-1,3,1,10,11,3,10,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,2,11,1,11,9,9,11,8,-1,-1,-1,-1,-1,-1,-1,3,0,9,3,9,11,1,2,9,2,11,9,-1,-1,-1,-1,0,2,11,8,0,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3,2,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2,3,8,2,8,10,10,8,9,-1,-1,-1,-1,-1,-1,-1,9,10,2,0,9,2,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2,3,8,2,8,10,0,1,8,1,10,8,-1,-1,-1,-1,1,10,2,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,3,8,9,1,8,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,9,1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,3,8,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1]);var u=r(5542);let f=o.createContext(null),m=o.forwardRef(({resolution:e=28,maxPolyCount:t=1e4,enableUvs:r=!1,enableColors:a=!1,children:l,...c},m)=>{let h=o.useRef(null),d=o.useMemo(()=>new s(e,null,r,a,t),[e,t,r,a]),p=o.useMemo(()=>({getParent:()=>h}),[]);return(0,u.A)(()=>{d.update(),d.reset()},-1),o.createElement(o.Fragment,null,o.createElement("primitive",(0,i.Z)({object:d,ref:(0,n.Z)([h,m])},c),o.createElement(f.Provider,{value:p},l)))}),h=o.forwardRef(({strength:e=.5,subtract:t=12,color:r,...s},l)=>{let{getParent:c}=o.useContext(f),m=o.useMemo(()=>c(),[c]),h=o.useRef(),d=new a.Vector3;return(0,u.A)(i=>{m.current&&h.current&&(h.current.getWorldPosition(d),m.current.addBall(.5+.5*d.x,.5+.5*d.y,.5+.5*d.z,e,t,r))}),o.createElement("group",(0,i.Z)({ref:(0,n.Z)([l,h])},s))})},3276:function(e,t,r){r.d(t,{z:function(){return u}});var i=r(8126),a=r(4771),o=r(959),n=r(5542),s=r(1223),l=r(9842);class c extends a.MeshPhysicalMaterial{constructor(e=6,t=!1){super(),this.uniforms={chromaticAberration:{value:.05},transmission:{value:0},_transmission:{value:1},transmissionMap:{value:null},roughness:{value:0},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:1/0},attenuationColor:{value:new a.Color("white")},anisotropicBlur:{value:.1},time:{value:0},distortion:{value:0},distortionScale:{value:.5},temporalDistortion:{value:0},buffer:{value:null}},this.onBeforeCompile=r=>{r.uniforms={...r.uniforms,...this.uniforms},this.anisotropy>0&&(r.defines.USE_ANISOTROPY=""),t?r.defines.USE_SAMPLER="":r.defines.USE_TRANSMISSION="",r.fragmentShader=`
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
`)},Object.keys(this.uniforms).forEach(e=>Object.defineProperty(this,e,{get:()=>this.uniforms[e].value,set:t=>this.uniforms[e].value=t}))}}let u=o.forwardRef(({buffer:e,transmissionSampler:t=!1,backside:r=!1,side:u=a.FrontSide,transmission:f=1,thickness:m=0,backsideThickness:h=0,samples:d=10,resolution:p,backsideResolution:v,background:y,anisotropy:g,anisotropicBlur:x,...A},z)=>{let M,w,b;(0,n.e)({MeshTransmissionMaterial:c});let C=o.useRef(null),[S]=o.useState(()=>new l.l),R=(0,s.R)(v||p),F=(0,s.R)(p);return(0,n.A)(e=>{C.current.time=e.clock.getElapsedTime(),C.current.buffer===F.texture&&!t&&(b=C.current.__r3f.parent)&&(w=e.gl.toneMapping,M=e.scene.background,e.gl.toneMapping=a.NoToneMapping,y&&(e.scene.background=y),b.material=S,r&&(e.gl.setRenderTarget(R),e.gl.render(e.scene,e.camera),b.material=C.current,b.material.buffer=R.texture,b.material.thickness=h,b.material.side=a.BackSide),e.gl.setRenderTarget(F),e.gl.render(e.scene,e.camera),b.material=C.current,b.material.thickness=m,b.material.side=u,b.material.buffer=F.texture,e.scene.background=M,e.gl.setRenderTarget(null),e.gl.toneMapping=w)}),o.useImperativeHandle(z,()=>C.current,[]),o.createElement("meshTransmissionMaterial",(0,i.Z)({args:[d,t],ref:C},A,{buffer:e||F.texture,_transmission:f,anisotropicBlur:null!=x?x:g,transmission:t?f:0,thickness:m,side:u}))})},33:function(e,t,r){r.d(t,{g:function(){return a}});var i=r(4771);function a(e,t,r,a){let o=class extends i.ShaderMaterial{constructor(o={}){let n=Object.entries(e);super({uniforms:n.reduce((e,[t,r])=>{let a=i.UniformsUtils.clone({[t]:{value:r}});return{...e,...a}},{}),vertexShader:t,fragmentShader:r}),this.key="",n.forEach(([e])=>Object.defineProperty(this,e,{get:()=>this.uniforms[e].value,set:t=>this.uniforms[e].value=t})),Object.assign(this,o),a&&a(this)}};return o.key=i.MathUtils.generateUUID(),o}},3387:function(e,t,r){r.d(t,{xu:function(){return s}});var i=r(8126),a=r(959),o=r(4771);function n(e,t){let r=e+"Geometry";return a.forwardRef(({args:e,children:o,...n},s)=>{let l=a.useRef(null);return a.useImperativeHandle(s,()=>l.current),a.useLayoutEffect(()=>void(null==t||t(l.current))),a.createElement("mesh",(0,i.Z)({ref:l},n),a.createElement(r,{attach:"geometry",args:e}),o)})}let s=n("box");n("circle"),n("cone"),n("cylinder"),n("sphere"),n("plane"),n("tube"),n("torus"),n("torusKnot"),n("tetrahedron"),n("ring"),n("polyhedron"),n("icosahedron"),n("octahedron"),n("dodecahedron"),n("extrude"),n("lathe"),n("capsule"),n("shape",({geometry:e})=>{let t=e.attributes.position,r=new o.Box3().setFromBufferAttribute(t),i=new o.Vector3;r.getSize(i);let a=[],n=0,s=0,l=0,c=0;for(let e=0;e<t.count;e++)n=t.getX(e),s=t.getY(e),l=(n-r.min.x)/i.x,c=(s-r.min.y)/i.y,a.push(l,c);e.setAttribute("uv",new o.Float32BufferAttribute(a,2))})},1223:function(e,t,r){r.d(t,{R:function(){return n}});var i=r(959),a=r(4771),o=r(5542);function n(e,t,r){let n=(0,o.z)(e=>e.size),s=(0,o.z)(e=>e.viewport),l="number"==typeof e?e:n.width*s.dpr,c="number"==typeof t?t:n.height*s.dpr,u=("number"==typeof e?r:e)||{},{samples:f=0,depth:m,...h}=u,d=i.useMemo(()=>{let e=new a.WebGLRenderTarget(l,c,{minFilter:a.LinearFilter,magFilter:a.LinearFilter,type:a.HalfFloatType,...h});return m&&(e.depthTexture=new a.DepthTexture(l,c,a.FloatType)),e.samples=f,e},[]);return i.useLayoutEffect(()=>{d.setSize(l,c),f&&(d.samples=f)},[f,d,l,c]),i.useEffect(()=>()=>d.dispose(),[]),d}},9842:function(e,t,r){r.d(t,{l:function(){return a}});var i=r(33);let a=(0,i.g)({},"void main() { }","void main() { gl_FragColor = vec4(0.0, 0.0, 0.0, 0.0); discard;  }")},3589:function(e,t){t.Z=function(e){return function(t){e.forEach(function(e){"function"==typeof e?e(t):null!=e&&(e.current=t)})}}}}]);