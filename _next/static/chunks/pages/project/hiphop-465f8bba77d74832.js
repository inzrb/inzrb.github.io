(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7674],{7312:function(e,t){var r,i,s,o,n,l,c,a,p,u,d,_,h,f,g,j,x,m,v;p=function(){return"undefined"!=typeof window},u=function(){return r||p()&&(r=window.gsap)&&r.registerPlugin&&r},d=function(e){return"string"==typeof e},_=function(e){return"function"==typeof e},h=function(e,t){var r="x"===t?"Width":"Height",i="scroll"+r,l="client"+r;return e===s||e===o||e===n?Math.max(o[i],n[i])-(s["inner"+r]||o[l]||n[l]):e[i]-e["offset"+r]},f=function(e,t){var r="scroll"+("x"===t?"Left":"Top");return e===s&&(null!=e.pageXOffset?r="page"+t.toUpperCase()+"Offset":e=null!=o[r]?o:n),function(){return e[r]}},g=function(e,t,r,i){if(_(e)&&(e=e(t,r,i)),"object"!=typeof e)return d(e)&&"max"!==e&&"="!==e.charAt(1)?{x:e,y:e}:{y:e};if(e.nodeType)return{y:e,x:e};var s,o={};for(s in e)o[s]="onAutoKill"!==s&&_(e[s])?e[s](t,r,i):e[s];return o},j=function(e,t){if(!(e=l(e)[0])||!e.getBoundingClientRect)return console.warn("scrollTo target doesn't exist. Using 0")||{x:0,y:0};var r=e.getBoundingClientRect(),i=!t||t===s||t===n,c=i?{top:o.clientTop-(s.pageYOffset||o.scrollTop||n.scrollTop||0),left:o.clientLeft-(s.pageXOffset||o.scrollLeft||n.scrollLeft||0)}:t.getBoundingClientRect(),a={x:r.left-c.left,y:r.top-c.top};return!i&&t&&(a.x+=f(t,"x")(),a.y+=f(t,"y")()),a},x=function(e,t,r,i,s){return isNaN(e)||"object"==typeof e?d(e)&&"="===e.charAt(1)?parseFloat(e.substr(2))*("-"===e.charAt(0)?-1:1)+i-s:"max"===e?h(t,r)-s:Math.min(h(t,r),j(e,t)[r]-s):parseFloat(e)-s},m=function(){r=u(),p()&&r&&"undefined"!=typeof document&&document.body&&(s=window,n=document.body,o=document.documentElement,l=r.utils.toArray,r.config({autoKillThreshold:7}),c=r.config(),i=1)},(v={version:"3.12.3",name:"scrollTo",rawVars:1,register:function(e){r=e,m()},init:function(e,t,o,n,l){i||m();var c=r.getProperty(e,"scrollSnapType");this.isWin=e===s,this.target=e,this.tween=o,t=g(t,n,e,l),this.vars=t,this.autoKill=!!t.autoKill,this.getX=f(e,"x"),this.getY=f(e,"y"),this.x=this.xPrev=this.getX(),this.y=this.yPrev=this.getY(),a||(a=r.core.globals().ScrollTrigger),"smooth"===r.getProperty(e,"scrollBehavior")&&r.set(e,{scrollBehavior:"auto"}),c&&"none"!==c&&(this.snap=1,this.snapInline=e.style.scrollSnapType,e.style.scrollSnapType="none"),null!=t.x?(this.add(this,"x",this.x,x(t.x,e,"x",this.x,t.offsetX||0),n,l),this._props.push("scrollTo_x")):this.skipX=1,null!=t.y?(this.add(this,"y",this.y,x(t.y,e,"y",this.y,t.offsetY||0),n,l),this._props.push("scrollTo_y")):this.skipY=1},render:function(e,t){for(var r,i,o,n,l,p=t._pt,u=t.target,d=t.tween,_=t.autoKill,f=t.xPrev,g=t.yPrev,j=t.isWin,x=t.snap,m=t.snapInline;p;)p.r(e,p.d),p=p._next;r=j||!t.skipX?t.getX():f,o=(i=j||!t.skipY?t.getY():g)-g,n=r-f,l=c.autoKillThreshold,t.x<0&&(t.x=0),t.y<0&&(t.y=0),_&&(!t.skipX&&(n>l||n<-l)&&r<h(u,"x")&&(t.skipX=1),!t.skipY&&(o>l||o<-l)&&i<h(u,"y")&&(t.skipY=1),t.skipX&&t.skipY&&(d.kill(),t.vars.onAutoKill&&t.vars.onAutoKill.apply(d,t.vars.onAutoKillParams||[]))),j?s.scrollTo(t.skipX?r:t.x,t.skipY?i:t.y):(t.skipY||(u.scrollTop=t.y),t.skipX||(u.scrollLeft=t.x)),x&&(1===e||0===e)&&(i=u.scrollTop,r=u.scrollLeft,m?u.style.scrollSnapType=m:u.style.removeProperty("scroll-snap-type"),u.scrollTop=i+1,u.scrollLeft=r+1,u.scrollTop=i,u.scrollLeft=r),t.xPrev=t.x,t.yPrev=t.y,a&&a.update()},kill:function(e){var t="scrollTo"===e;(t||"scrollTo_x"===e)&&(this.skipX=1),(t||"scrollTo_y"===e)&&(this.skipY=1)}}).max=h,v.getOffset=j,v.buildGetter=f,u()&&r.registerPlugin(v),t.ScrollToPlugin=v,t.default=v,Object.defineProperty(t,"__esModule",{value:!0})},2440:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/project/hiphop",function(){return r(8046)}])},5871:function(e,t,r){"use strict";var i=r(1527),s=r(959),o=r(5425),n=r(8634);t.Z=e=>{let{image:t=""}=e,r=(0,s.useRef)(),l=(0,s.useRef)(),c=(0,s.useRef)(),a=(0,o.fB)(e=>{!function(e,t){let i=r.current.getBoundingClientRect(),s=e.pageX-i.left,o=e.pageY-i.top;n.ZP.to(c.current,{duration:.3,x:(s-i.width/1.5)/i.width*t,y:(o-i.height/2)/i.height*t,ease:"power2.out"})}(e[0],20)},50),p=(0,o.fB)(()=>{!function(){if(r.current){let e=r.current.getBoundingClientRect(),t=Math.abs(e.top)/e.height;n.ZP.to(l.current,{duration:.2,y:20*t+"%",ease:"power2.out"})}}()},50);return(0,s.useEffect)(()=>(r.current.addEventListener("mousemove",a),document.addEventListener("scroll",p),n.ZP.fromTo(r.current,{opacity:0,scale:1.2},{duration:.7,opacity:1,scale:1,ease:"power2.inOut"}),()=>{r.current&&r.current.removeEventListener("mousemove",a),document.removeEventListener("scroll",p)}),[]),(0,i.jsx)("div",{className:"hero_bg_wrap",ref:r,children:(0,i.jsx)("div",{className:"hero_bg_parallax",ref:l,children:(0,i.jsx)("div",{className:"hero_bg_image",style:{backgroundImage:"url(".concat(t,")")},ref:c})})})}},5897:function(e,t,r){"use strict";var i=r(1527),s=r(959),o=r(8634),n=r(7312);o.ZP.registerPlugin(n.ScrollToPlugin),t.Z=()=>{let e=(0,s.useRef)();return(0,s.useEffect)(()=>{o.ZP.fromTo(e.current,{opacity:0},{duration:.7,opacity:1,ease:"power2.inOut",delay:.3})},[]),(0,i.jsx)("div",{className:"scroll_down_btn",ref:e,onClick:()=>{o.ZP.to(window,{duration:.5,scrollTo:{y:window.innerHeight},ease:"power2.inOut"})},children:(0,i.jsx)("div",{className:"scroll_down_wrap",children:(0,i.jsx)("svg",{className:"scroll_down_icon",viewBox:"0 0 30 45",enableBackground:"new 0 0 30 45",children:(0,i.jsx)("path",{className:"scroll_down_path",fill:"none",stroke:"#ffffff",strokeWidth:"2",strokeMiterlimit:"10",d:"M15,1.118c12.352,0,13.967,12.88,13.967,12.88v18.76  c0,0-1.514,11.204-13.967,11.204S0.931,32.966,0.931,32.966V14.05C0.931,14.05,2.648,1.118,15,1.118z"})})})})}},7295:function(e,t,r){"use strict";r.d(t,{FA:function(){return l},GZ:function(){return c},_n:function(){return a},pX:function(){return n},qj:function(){return s},rM:function(){return o},yM:function(){return i}});let i=0,s=1,o=2,n=3,l=4,c=[{url:"project",title:"Project Showcase",category:"work"},{url:"labs",title:"Creative Labs",category:"development"},{url:"research",title:"Web Research",category:"code"},{url:"video",title:"Brand Video",category:"design"},{url:"about",title:"About me",category:"introduction"}],a=""},9598:function(e,t,r){"use strict";r.d(t,{I:function(){return i}});let i={url:"/assets/images/project/inventory/",filename:["intro.png","p1.png","p2.png","p3.png","p4.png","p5.png"],link:"/inventory",category:"Mobile",title:"Inventory"}},8046:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return j}});var i=r(1527),s=r(959);let o={url:"/assets/images/project/hiphop/",cover:"intro_poster.png",filename:["intro.png","p1.png","p2.png","p3.jpg","p4.png","p5.png","p6.gif","p7.gif","p8.png","p9.png","p10.png"],video:"intro.mp4",title:"Hiphop"};var n=r(9598),l=r(7295),c=r(8634),a=r(5897),p=r(7173);r(5e3);var u=r(5871),d=r(4125),_=r(7848),h=r.n(_),f=r(4772);let g=o.filename.map(e=>l._n+o.url+e);function j(){let e=(0,d.useRouter)(),t=(0,s.useRef)(),r=(0,s.useRef)(),_=[6.5333,5.5125,5.5125,17.4336,5.5125,2.5852,3.6373,5.5125,7.35,5.7623];c.ZP.registerPlugin(f.ScrollTrigger),f.ScrollTrigger.defaults({toggleActions:"restart pause resume pause"});let j=()=>{c.ZP.to(window,{duration:.7,ease:"power2.inOut",scrollTo:0})};return(0,s.useEffect)(()=>(j(),c.ZP.fromTo(".project_bullet .bullet_title__inner span",{scale:.9,opacity:0,y:50},{duration:.4,scale:1,y:0,opacity:1,ease:"power2.inOut",stagger:.02,delay:.2}),c.ZP.fromTo(".project_bullet .bullet_subtit",{opacity:0,y:30},{duration:.4,y:0,opacity:1,ease:"power2.inOut",delay:.3}),c.ZP.fromTo(".project_part--info .project_part__title_no,.project_part--info .project_part__title_con,.project_part--info .project_part__video_center",{opacity:0,y:30},{scrollTrigger:{trigger:".project_part--info"},duration:.4,y:0,opacity:1,stagger:.1,ease:"power2.inOut"}),c.ZP.fromTo(".project_part--preview .project_part__title_no,.project_part--preview .project_part__title_con",{opacity:0,y:30},{scrollTrigger:{trigger:".project_part--preview"},duration:.4,y:0,opacity:1,stagger:.1,ease:"power2.inOut"}),c.ZP.utils.toArray(".layout_thumb").forEach((e,t)=>{c.ZP.fromTo(e.children[0],{opacity:0,y:30},{opacity:1,y:0,duration:.7,ease:"power2.inOut",scrollTrigger:{trigger:e}})}),f.ScrollTrigger.create({trigger:t.current,scrub:!0,onUpdate:e=>{t.current&&c.ZP.to(t.current.children[0],{y:(e.progress-.5)*window.innerHeight,duration:.1})}}),()=>{f.ScrollTrigger.killAll()}),[]),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(h(),{children:(0,i.jsx)("title",{children:"Leon | Project - Hiphop"})}),(0,i.jsx)("div",{className:"project_box",children:(0,i.jsx)("section",{className:"project_page project_page--hiphop",children:(0,i.jsxs)("div",{className:"project_page__wrap",children:[(0,i.jsxs)("div",{className:"page_start",children:[(0,i.jsx)(u.Z,{image:g[0]}),(0,i.jsx)(a.Z,{}),(0,i.jsx)("div",{className:"page_hero",children:(0,i.jsxs)("div",{className:"bullet project_bullet",children:[(0,i.jsx)("div",{className:"bullet_subtit",children:"Mobile"}),(0,i.jsx)("div",{className:"bullet_title",children:(0,i.jsx)("div",{className:"bullet_title__inner",children:o.title.split("").map((e,t)=>(0,i.jsx)("span",{children:e},t))})})]})})]}),(0,i.jsxs)("div",{className:"page_content",children:[(0,i.jsxs)("div",{className:"project_intro",children:[(0,i.jsx)("h4",{className:"project_intro__tit",children:"Hiphop"}),(0,i.jsxs)("div",{className:"project_intro__desc",children:[(0,i.jsx)("p",{className:"project_intro__para",children:"我们研究了说唱类相关的属性，探索积累了多种基于说唱的技术应用，结合创意，将音轨与视觉感官传达融合包装，期盼用户在互动中了解说唱音乐，感受自己制作专属beat的乐趣，让项目具备互动性强、新颖、可玩性高的目标属性。"}),(0,i.jsx)("p",{className:"project_intro__para",children:"在项目中，用户根据自己的喜好，发挥主观创意，表达说唱态度，通过调整音乐伴奏和乐器元素、歌手形象进行多样的组合，让音频和视频的结合在屏幕和耳机上直观的表现出来，过一把音乐创作人的瘾，轻松制作千人千面的精美说唱分享卡片，分享传播给好友，刺激引导其参与其中，提升项目的互动性，让音乐品类和品牌达到裂变的传播效果。"})]}),(0,i.jsxs)("div",{className:"project_intro__data",children:[(0,i.jsxs)("div",{className:"project_intro__data_el",children:[(0,i.jsx)("p",{className:"project_intro__data_tit",children:"Year"}),(0,i.jsx)("p",{className:"project_intro__data_subtxt",children:"2020"})]}),(0,i.jsxs)("div",{className:"project_intro__data_el",children:[(0,i.jsx)("p",{className:"project_intro__data_tit",children:"Technologies"}),(0,i.jsx)("p",{className:"project_intro__data_subtxt",children:"React , Javascript , Lottie"})]})]})]}),(0,i.jsxs)("div",{className:"project_part project_part--info",children:[(0,i.jsxs)("div",{className:"project_part__title",children:[(0,i.jsx)("div",{className:"project_part__title_no",children:"01."}),(0,i.jsx)("div",{className:"project_part__title_con",children:"Intro Video"})]}),(0,i.jsx)("div",{className:"project_part__video_center",children:(0,i.jsx)("div",{className:"project_part__video",children:(0,i.jsx)("div",{className:"project_part__video_wrap",onMouseOver:()=>{r.current.play()},onMouseOut:()=>{r.current.pause()},children:(0,i.jsx)(p.J5,{playsInline:!0,poster:o.url+o.cover,src:o.url+o.video,ref:r})})})})]}),(0,i.jsxs)("div",{className:"project_part project_part--preview",children:[(0,i.jsxs)("div",{className:"project_part__title",children:[(0,i.jsx)("div",{className:"project_part__title_no",children:"02."}),(0,i.jsx)("div",{className:"project_part__title_con",children:"Web UI"})]}),(0,i.jsx)("div",{className:"layout_picture",children:Array(10).fill(null).map((e,t)=>(0,i.jsx)("div",{className:"layout_thumb",style:{height:_[t]+"rem"},children:(0,i.jsx)("img",{src:g[t+1],alt:"",className:"layout_thumb_img"})},t))})]}),(0,i.jsx)("div",{className:"next_project",ref:t,children:(0,i.jsxs)("div",{className:"next_project__wrap",children:[(0,i.jsxs)("div",{className:"next_project__con",children:[(0,i.jsx)("div",{className:"backtotop",children:(0,i.jsxs)("div",{className:"backtotop_wrap",children:[(0,i.jsx)("div",{className:"backtotop_icon",children:(0,i.jsx)("svg",{className:"backtotop_icon__svg",onClick:j,children:(0,i.jsx)("use",{xlinkHref:"#icon_arrow"})})}),(0,i.jsx)("div",{className:"backtotop_text",children:(0,i.jsx)("div",{className:"flip_el flip_el__backtotop",onClick:j,children:(0,i.jsxs)("div",{className:"flip_el__wrap",children:[(0,i.jsx)("div",{className:"flip_el__up",children:(0,i.jsx)("div",{className:"flip_el__inner",children:"Back Top"})}),(0,i.jsx)("div",{className:"flip_el__text",children:(0,i.jsx)("div",{className:"flip_el__inner",children:"Back Top"})})]})})})]})}),(0,i.jsx)("div",{className:"next_project_caption",children:(0,i.jsx)("div",{className:"next_caption_link",children:(0,i.jsxs)("div",{className:"next_caption",children:[(0,i.jsx)("div",{className:"next_caption_subtitle",children:"Next Project"}),(0,i.jsx)("div",{className:"next_caption_title",onClick:()=>{e.push("".concat(l._n,"/project").concat(n.I.link))},children:n.I.title})]})})})]}),(0,i.jsx)("div",{className:"next_project__bg",style:{backgroundImage:"url(".concat(n.I.url).concat(n.I.filename[0])}})]})})]})]})})})]})}}},function(e){e.O(0,[4772,6746,9774,2888,179],function(){return e(e.s=2440)}),_N_E=e.O()}]);