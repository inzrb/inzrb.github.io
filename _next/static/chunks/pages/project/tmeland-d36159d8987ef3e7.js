(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6864],{3981:function(e,s,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/project/tmeland",function(){return t(8800)}])},6745:function(e,s,t){"use strict";var a=t(1527),l=t(7307),i=t(959),r=t(6687),n=t(2377),c=t(5542),o=t(9854);function d(e){let{imgRef:s,scrollState:t,enabledScale:r,...d}=e,m=(0,i.useRef)(),p=(0,l.D)(s);return(0,c.A)(()=>{r&&(m.current.material.zoom=(0,o.uZ)(1.15-t.viewport/4,1,1.15)),m.current.material.opacity=(0,o.uZ)(3*t.viewport,0,1)}),(0,a.jsx)(n.E,{ref:m,texture:p,transparent:!0,...d})}s.Z=e=>{let{full:s,src:t,enabledScale:n=!0,loading:c="eager"}=e,o=(0,i.useRef)(),m=(0,i.useRef)(),{hasSmoothScrollbar:p}=(0,l.hP)();return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("div",{ref:o,className:"placeholder scrollScene ".concat(s?"placeholder_full":""),children:(0,a.jsx)("img",{className:l.W2.hiddenWhenSmooth,ref:m,loading:c,src:t,alt:"加载中..."})}),p&&(0,a.jsx)(l.bA,{children:(0,a.jsx)(l.e,{track:o,debug:!1,children:e=>(0,a.jsx)(i.Suspense,{fallback:(0,a.jsx)(r.Z,{...e,size:55}),children:(0,a.jsx)(d,{imgRef:m,enabledScale:n,src:t,transparent:!0,...e})})})})]})}},6687:function(e,s,t){"use strict";var a=t(1527),l=t(959),i=t(5542),r=t(3387);s.Z=e=>{let s,{size:t,scale:n}=e,c=(0,l.useRef)();return(0,i.A)((e,s)=>{c.current.rotation.x=c.current.rotation.y+=s*Math.PI}),null!==t?s=t:n&&(console.log(n),s=n.xy.min()),(0,a.jsx)(r.xu,{ref:c,scale:s,children:(0,a.jsx)("meshNormalMaterial",{})})}},5897:function(e,s,t){"use strict";var a=t(1527),l=t(7307);t(959),s.Z=()=>{let{scrollTo:e}=(0,l.uW)();return(0,a.jsx)("div",{className:"scroll_down_btn",onClick:()=>{e(window.innerHeight)},children:(0,a.jsx)("div",{className:"scroll_down_wrap",children:(0,a.jsx)("svg",{className:"scroll_down_icon",viewBox:"0 0 30 45",enableBackground:"new 0 0 30 45",children:(0,a.jsx)("path",{className:"scroll_down_path",fill:"none",stroke:"#ffffff",strokeWidth:"2",strokeMiterlimit:"10",d:"M15,1.118c12.352,0,13.967,12.88,13.967,12.88v18.76  c0,0-1.514,11.204-13.967,11.204S0.931,32.966,0.931,32.966V14.05C0.931,14.05,2.648,1.118,15,1.118z"})})})})}},7295:function(e,s,t){"use strict";t.d(s,{FA:function(){return n},GZ:function(){return c},_n:function(){return o},pX:function(){return r},qj:function(){return l},rM:function(){return i},yM:function(){return a}});let a=0,l=1,i=2,r=3,n=4,c=[{url:"project",title:"Project Showcase",category:"work"},{url:"labs",title:"Creative Labs",category:"development"},{url:"research",title:"Web Research",category:"code"},{url:"video",title:"Brand Video",category:"design"},{url:"about",title:"About me",category:"introduction"}],o=""},7210:function(e,s,t){"use strict";t.d(s,{x:function(){return a}});let a={url:"/assets/images/project/qqmusic/",cover:"cover.png",filename:["intro.png","p1.png","p2.png","p3.png","p4.png","p5.png","p6_1.png","p6_2.png","p6_3.png","p6_4.png","p6_5.png","brand_logo.png"],link:"/qqmusic",category:"Multi-Platform",title:"Qqmusic"}},1230:function(e,s,t){"use strict";t.d(s,{J:function(){return a}});let a={url:"/assets/images/project/tmeland/",cover:"intro_poster.png",logo:"tmeland.png",filename:["intro.jpg","p1.png","p2.png","p3.png","p4.png","p5.png","p6.png","p7.png","p8.png","p9.png","p10.png","p11.png","p12.png","p13.png","p14.png","p15.png","p16.png","p17.png","p18.png","p19.png","p20.png"],video:"intro.mp4",link:"/tmeland",category:"Mobile",title:"Tmeland"}},8800:function(e,s,t){"use strict";t.r(s),t.d(s,{default:function(){return v}});var a=t(1527),l=t(959),i=t(7307),r=t(8634),n=t(1230),c=t(7210),o=t(7295),d=t(7173),m=t(5897),p=t(6745);t(5e3);var _=t(9301),g=t(1424),j=t(4125),u=t(7848),x=t.n(u);let h=n.J.filename.map(e=>o._n+n.J.url+e),N=o._n+n.J.url+n.J.logo;function v(){let e=(0,j.useRouter)(),s=(0,l.useRef)(),t=(0,l.useRef)(),u=(0,l.useRef)(),v=(0,l.useRef)(),{scroll:f,onScroll:b,scrollTo:y}=(0,i.uW)(),k=(0,_.I0)(),w=[5.7166,3.3,4.8472,3.3548,5.488,4.2875],I=()=>{y(0)},q=()=>{v.current.play()},J=()=>{v.current.pause()};return(0,l.useEffect)(()=>{k((0,g.e)(!0)),I(),setTimeout(()=>{k((0,g.e)(!1)),r.ZP.fromTo(".project_bullet .bullet_title__inner span",{scale:.9,opacity:0,y:50},{duration:.4,scale:1,y:0,opacity:1,ease:"power2.inOut",stagger:.02}),r.ZP.fromTo(".project_bullet .bullet_subtit",{opacity:0,y:30},{duration:.4,y:0,opacity:1,ease:"power2.inOut"})},1e3),b(()=>{let e=f.progress,a=0;if(e>.52){let t=Array.from(s.current.children);t[0].style.transform="translateY("+(e-.5)*1500+"px)",t[1].style.transform="translateY(-"+(e-1)*1350+"px)",t[2].style.transform="translateY("+(e-.5)*1200+"px)",u.current.style.transform="translateX("+(1-e-.52)*window.innerWidth+"px)"}e>.8&&(a=(e-1)*2*window.innerHeight,t.current.style.transform="translateY("+a+"px)",t.current.style.opacity=(e-.8)*6)})},[b]),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(x(),{children:(0,a.jsx)("title",{children:"Leon | Project - Tmeland"})}),(0,a.jsxs)("div",{className:"project_canvas",children:[(0,a.jsx)(i.sc,{globalRender:!1,style:{pointerEvents:"none"},children:(0,a.jsx)("ambientLight",{})}),(0,a.jsx)(i.i6,{enabled:!0,children:l=>(0,a.jsx)("section",{className:"project_page project_page--tmeland",...l,children:(0,a.jsxs)("div",{className:"project_page__wrap",children:[(0,a.jsxs)("div",{className:"page_start",children:[(0,a.jsx)(p.Z,{full:!0,src:h[0]}),(0,a.jsx)(m.Z,{}),(0,a.jsx)("div",{className:"page_hero",children:(0,a.jsxs)("div",{className:"bullet project_bullet",children:[(0,a.jsx)("div",{className:"bullet_subtit",children:n.J.category}),(0,a.jsx)("div",{className:"bullet_title",children:(0,a.jsx)("div",{className:"bullet_title__inner",children:n.J.title.split("").map((e,s)=>(0,a.jsx)("span",{children:e},s))})})]})})]}),(0,a.jsxs)("div",{className:"page_content",children:[(0,a.jsxs)("div",{className:"project_intro",children:[(0,a.jsx)("h4",{className:"project_intro__tit",children:n.J.title}),(0,a.jsxs)("div",{className:"project_intro__desc",children:[(0,a.jsx)("p",{className:"project_intro__para",children:"全新虚拟音乐嘉年华TMELAND入口已开启，神奇数字时空任你穿梭，享受独一无二的虚拟音乐新纪元。"}),(0,a.jsx)("p",{className:"project_intro__para",children:"虚拟与现实结合的沉浸式体验，在TMELAND发现音乐新玩法，DIY你的专属数字岛屿，随时随地“听我想听”。"}),(0,a.jsx)("p",{className:"project_intro__para",children:"脑洞大开的黑科技，将想象中的精彩逐一实现，让音乐的能量穿透时空，惊喜的数字磁场，共振万千乐迷的心。"})]}),(0,a.jsxs)("div",{className:"project_intro__data",children:[(0,a.jsxs)("div",{className:"project_intro__data_el",children:[(0,a.jsx)("p",{className:"project_intro__data_tit",children:"Year"}),(0,a.jsx)("p",{className:"project_intro__data_subtxt",children:"2022"})]}),(0,a.jsxs)("div",{className:"project_intro__data_el",children:[(0,a.jsx)("p",{className:"project_intro__data_tit",children:"Technologies"}),(0,a.jsx)("p",{className:"project_intro__data_subtxt",children:"React , Javascript"})]})]})]}),(0,a.jsxs)("div",{className:"project_part",children:[(0,a.jsxs)("div",{className:"project_part__title",children:[(0,a.jsx)("div",{className:"project_part__title_no",children:"01."}),(0,a.jsx)("div",{className:"project_part__title_con",children:"Intro Video"})]}),(0,a.jsx)("div",{className:"project_part__video",onMouseOver:q,onMouseOut:J,children:(0,a.jsx)(d.J5,{ref:v,playsInline:!0,poster:o._n+n.J.url+n.J.cover,src:n.J.url+n.J.video})})]}),(0,a.jsxs)("div",{className:"project_part",children:[(0,a.jsxs)("div",{className:"project_part__title",children:[(0,a.jsx)("div",{className:"project_part__title_no",children:"02."}),(0,a.jsx)("div",{className:"project_part__title_con",children:"Mobile"})]}),(0,a.jsx)("div",{className:"layout_picture",children:Array(6).fill(null).map((e,s)=>(0,a.jsx)("div",{className:"layout_thumb",style:{height:w[s]+"rem"},children:(0,a.jsx)(p.Z,{src:h[s+1]})},s))})]}),(0,a.jsx)("div",{className:"project_part",children:(0,a.jsx)("div",{className:"logo_marquee",children:(0,a.jsxs)("div",{className:"logo_marquee__wrap",ref:u,children:[(0,a.jsx)("div",{className:"logo_marquee_item",children:(0,a.jsx)("img",{src:N,className:"logo_marquee_img"})}),(0,a.jsx)("div",{className:"logo_marquee_item",children:(0,a.jsx)("img",{src:N,className:"logo_marquee_img"})}),(0,a.jsx)("div",{className:"logo_marquee_item",children:(0,a.jsx)("img",{src:N,className:"logo_marquee_img"})}),(0,a.jsx)("div",{className:"logo_marquee_item",children:(0,a.jsx)("img",{src:N,className:"logo_marquee_img"})})]})})}),(0,a.jsxs)("div",{className:"project_part",children:[(0,a.jsxs)("div",{className:"project_part__title",children:[(0,a.jsx)("div",{className:"project_part__title_no",children:"03."}),(0,a.jsx)("div",{className:"project_part__title_con",children:"App UI"})]}),(0,a.jsx)("section",{className:"tiles tiles--columns",children:(0,a.jsxs)("div",{className:"tiles_wrap",ref:s,children:[(0,a.jsxs)("div",{className:"tiles_line",children:[(0,a.jsx)("div",{className:"tiles_line_img",style:{backgroundImage:"url(/assets/images/project/tmeland/t1.png)"}}),(0,a.jsx)("div",{className:"tiles_line_img",style:{backgroundImage:"url(/assets/images/project/tmeland/t2.png)"}}),(0,a.jsx)("div",{className:"tiles_line_img",style:{backgroundImage:"url(/assets/images/project/tmeland/t3.png)"}}),(0,a.jsx)("div",{className:"tiles_line_img",style:{backgroundImage:"url(/assets/images/project/tmeland/t4.png)"}}),(0,a.jsx)("div",{className:"tiles_line_img",style:{backgroundImage:"url(/assets/images/project/tmeland/t5.png)"}}),(0,a.jsx)("div",{className:"tiles_line_img",style:{backgroundImage:"url(/assets/images/project/tmeland/t6.png)"}}),(0,a.jsx)("div",{className:"tiles_line_img",style:{backgroundImage:"url(/assets/images/project/tmeland/t7.png)"}})]}),(0,a.jsxs)("div",{className:"tiles_line",children:[(0,a.jsx)("div",{className:"tiles_line_img",style:{backgroundImage:"url(/assets/images/project/tmeland/t8.png)"}}),(0,a.jsx)("div",{className:"tiles_line_img",style:{backgroundImage:"url(/assets/images/project/tmeland/t9.png)"}}),(0,a.jsx)("div",{className:"tiles_line_img",style:{backgroundImage:"url(/assets/images/project/tmeland/t10.png)"}}),(0,a.jsx)("div",{className:"tiles_line_img",style:{backgroundImage:"url(/assets/images/project/tmeland/t11.png)"}}),(0,a.jsx)("div",{className:"tiles_line_img",style:{backgroundImage:"url(/assets/images/project/tmeland/t12.png)"}}),(0,a.jsx)("div",{className:"tiles_line_img",style:{backgroundImage:"url(/assets/images/project/tmeland/t13.png)"}}),(0,a.jsx)("div",{className:"tiles_line_img",style:{backgroundImage:"url(/assets/images/project/tmeland/t14.png)"}})]}),(0,a.jsxs)("div",{className:"tiles_line",children:[(0,a.jsx)("div",{className:"tiles_line_img",style:{backgroundImage:"url(/assets/images/project/tmeland/t15.png)"}}),(0,a.jsx)("div",{className:"tiles_line_img",style:{backgroundImage:"url(/assets/images/project/tmeland/t16.png)"}}),(0,a.jsx)("div",{className:"tiles_line_img",style:{backgroundImage:"url(/assets/images/project/tmeland/t17.png)"}}),(0,a.jsx)("div",{className:"tiles_line_img",style:{backgroundImage:"url(/assets/images/project/tmeland/t18.png)"}}),(0,a.jsx)("div",{className:"tiles_line_img",style:{backgroundImage:"url(/assets/images/project/tmeland/t19.png)"}}),(0,a.jsx)("div",{className:"tiles_line_img",style:{backgroundImage:"url(/assets/images/project/tmeland/t20.png)"}}),(0,a.jsx)("div",{className:"tiles_line_img",style:{backgroundImage:"url(/assets/images/project/tmeland/t1.png)"}})]})]})})]}),(0,a.jsx)("div",{className:"next_project",children:(0,a.jsxs)("div",{className:"next_project__wrap",ref:t,children:[(0,a.jsxs)("div",{className:"next_project__con",children:[(0,a.jsx)("div",{className:"backtotop",children:(0,a.jsxs)("div",{className:"backtotop_wrap",children:[(0,a.jsx)("div",{className:"backtotop_icon",children:(0,a.jsx)("svg",{className:"backtotop_icon__svg",onClick:I,children:(0,a.jsx)("use",{xlinkHref:"#icon_arrow"})})}),(0,a.jsx)("div",{className:"backtotop_text",children:(0,a.jsx)("div",{className:"flip_el flip_el__backtotop",onClick:I,children:(0,a.jsxs)("div",{className:"flip_el__wrap",children:[(0,a.jsx)("div",{className:"flip_el__up",children:(0,a.jsx)("div",{className:"flip_el__inner",children:"Back Top"})}),(0,a.jsx)("div",{className:"flip_el__text",children:(0,a.jsx)("div",{className:"flip_el__inner",children:"Back Top"})})]})})})]})}),(0,a.jsx)("div",{className:"next_project_caption",children:(0,a.jsx)("div",{className:"next_caption_link",children:(0,a.jsxs)("div",{className:"next_caption",children:[(0,a.jsx)("div",{className:"next_caption_subtitle",children:"Next Project"}),(0,a.jsx)("div",{className:"next_caption_title",onClick:()=>{e.push("".concat(o._n,"/project/qqmusic"))},children:c.x.title})]})})})]}),(0,a.jsx)("div",{className:"next_project__bg",style:{backgroundImage:"url(".concat(c.x.url).concat(c.x.filename[0])}})]})})]})]})})})]})]})}}},function(e){e.O(0,[511,83,788,9351,9774,2888,179],function(){return e(e.s=3981)}),_N_E=e.O()}]);