(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6730],{9913:function(e,s,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/project/qqmusic",function(){return r(9512)}])},5871:function(e,s,r){"use strict";var a=r(1527),i=r(959),c=r(5425),t=r(8634);s.Z=e=>{let{image:s=""}=e,r=(0,i.useRef)(),l=(0,i.useRef)(),n=(0,i.useRef)(),o=(0,c.fB)(e=>{!function(e,s){let a=r.current.getBoundingClientRect(),i=e.pageX-a.left,c=e.pageY-a.top;t.ZP.to(n.current,{duration:.3,x:(i-a.width/1.5)/a.width*s,y:(c-a.height/2)/a.height*s,ease:"power2.out"})}(e[0],20)},50),_=(0,c.fB)(()=>{!function(){if(r.current){let e=r.current.getBoundingClientRect(),s=Math.abs(e.top)/e.height;t.ZP.to(l.current,{duration:.2,y:20*s+"%",ease:"power2.out"})}}()},50);return(0,i.useEffect)(()=>(r.current.addEventListener("mousemove",o),document.addEventListener("scroll",_),t.ZP.fromTo(r.current,{opacity:0,scale:1.2},{duration:.7,opacity:1,scale:1,ease:"power2.inOut"}),()=>{r.current&&r.current.removeEventListener("mousemove",o),document.removeEventListener("scroll",_)}),[]),(0,a.jsx)("div",{className:"hero_bg_wrap",ref:r,children:(0,a.jsx)("div",{className:"hero_bg_parallax",ref:l,children:(0,a.jsx)("div",{className:"hero_bg_image",style:{backgroundImage:"url(".concat(s,")")},ref:n})})})}},6687:function(e,s,r){"use strict";var a=r(1527),i=r(959),c=r(5542),t=r(3387);s.Z=e=>{let s,{size:r,scale:l}=e,n=(0,i.useRef)();return(0,c.A)((e,s)=>{n.current.rotation.x=n.current.rotation.y+=s*Math.PI}),null!==r?s=r:l&&(console.log(l),s=l.xy.min()),(0,a.jsx)(t.xu,{ref:n,scale:s,children:(0,a.jsx)("meshNormalMaterial",{})})}},5897:function(e,s,r){"use strict";var a=r(1527),i=r(959),c=r(8634),t=r(7312);c.ZP.registerPlugin(t.ScrollToPlugin),s.Z=()=>{let e=(0,i.useRef)();return(0,i.useEffect)(()=>{c.ZP.fromTo(e.current,{opacity:0},{duration:.7,opacity:1,ease:"power2.inOut",delay:.3})},[]),(0,a.jsx)("div",{className:"scroll_down_btn",ref:e,onClick:()=>{c.ZP.to(window,{duration:.5,scrollTo:{y:window.innerHeight},ease:"power2.inOut"})},children:(0,a.jsx)("div",{className:"scroll_down_wrap",children:(0,a.jsx)("svg",{className:"scroll_down_icon",viewBox:"0 0 30 45",enableBackground:"new 0 0 30 45",children:(0,a.jsx)("path",{className:"scroll_down_path",fill:"none",stroke:"#ffffff",strokeWidth:"2",strokeMiterlimit:"10",d:"M15,1.118c12.352,0,13.967,12.88,13.967,12.88v18.76  c0,0-1.514,11.204-13.967,11.204S0.931,32.966,0.931,32.966V14.05C0.931,14.05,2.648,1.118,15,1.118z"})})})})}},7295:function(e,s,r){"use strict";r.d(s,{FA:function(){return l},GZ:function(){return n},_n:function(){return o},pX:function(){return t},qj:function(){return i},rM:function(){return c},yM:function(){return a}});let a=0,i=1,c=2,t=3,l=4,n=[{url:"project",title:"Project Showcase",category:"work"},{url:"labs",title:"Creative Labs",category:"development"},{url:"research",title:"Web Research",category:"code"},{url:"video",title:"Brand Video",category:"design"},{url:"about",title:"About me",category:"introduction"}],o=""},7210:function(e,s,r){"use strict";r.d(s,{x:function(){return a}});let a={url:"/assets/images/project/qqmusic/",cover:"cover.png",filename:["intro.png","p1.png","p2.png","p3.png","p4.png","p5.png","p6_1.png","p6_2.png","p6_3.png","p6_4.png","p6_5.png","brand_logo.png"],link:"/qqmusic",category:"Multi-Platform",title:"Qqmusic"}},9512:function(e,s,r){"use strict";r.r(s),r.d(s,{default:function(){return b}});var a=r(1527),i=r(959),c=r(4125),t=r(7210),l=r(7295),n=r(8634),o=r(5897),_=r(7848),d=r.n(_),p=r(5871),m=r(4772),u=r(3156),j=r(4639),x=r(5542),h=e=>{let{imgUrl:s,distort:r=.3,speed:i=3,h:c,w:t,size:l=1,...n}=e,o=(0,u.m)(s),{width:_,height:d}=(0,x.z)(e=>e.viewport),p=1.1*d*l;return(0,a.jsxs)("mesh",{...n,children:[(0,a.jsx)("planeGeometry",{args:[p*((t||1920)/(c||1080)),p,24,24]}),(0,a.jsx)(j.Y,{transparent:!0,map:o,radius:.99,distort:r,speed:i})]})},g=r(83),v=r(678),N=r(5690),f=r(6687);let w=t.x.filename.map(e=>l._n+t.x.url+e);function b(){let e=(0,c.useRouter)(),s=(0,i.useRef)(),r=(0,i.useRef)(),_=(0,i.useRef)();n.ZP.registerPlugin(m.ScrollTrigger),m.ScrollTrigger.defaults({toggleActions:"restart pause resume pause"});let u=()=>{n.ZP.to(window,{duration:.7,ease:"power2.inOut",scrollTo:0})};return(0,i.useEffect)(()=>(u(),n.ZP.fromTo(".project_bullet .bullet_title__inner span",{scale:.9,opacity:0,y:50},{duration:.4,scale:1,y:0,opacity:1,ease:"power2.inOut",stagger:.02,delay:.2}),n.ZP.fromTo(".project_bullet .bullet_subtit",{opacity:0,y:30},{duration:.4,y:0,opacity:1,ease:"power2.inOut",delay:.3}),n.ZP.utils.toArray(".case_item_preview").forEach((e,s)=>{n.ZP.fromTo(e.children[0],{opacity:0,y:30},{opacity:1,y:0,duration:.7,ease:"power2.inOut",scrollTrigger:{trigger:e}})}),n.ZP.from(r.current,{scrollTrigger:{trigger:r.current},opacity:0,y:30,duration:.7,ease:"power2.inOut"}),n.ZP.fromTo(".project_spark_no,.project_spark_name,.project_spark__wrap",{opacity:0,y:30},{opacity:1,y:0,duration:.7,ease:"power2.inOut",stagger:.1,scrollTrigger:{trigger:".project_spark"}}),m.ScrollTrigger.create({trigger:s.current,scrub:!0,onUpdate:e=>{s.current&&n.ZP.to(s.current.children[0],{y:(e.progress-.5)*window.innerHeight,duration:.1})}}),()=>{m.ScrollTrigger.killAll()}),[]),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(d(),{children:(0,a.jsx)("title",{children:"Leon | Project - Qqmusic"})}),(0,a.jsxs)("div",{className:"project_box",children:[(0,a.jsx)("section",{className:"project_page project_page--qqmusic",children:(0,a.jsxs)("div",{className:"project_page__wrap",children:[(0,a.jsxs)("div",{className:"page_start",children:[(0,a.jsx)(p.Z,{image:w[0]}),(0,a.jsx)(o.Z,{}),(0,a.jsx)("div",{className:"page_hero",children:(0,a.jsxs)("div",{className:"bullet project_bullet",children:[(0,a.jsx)("div",{className:"bullet_subtit",children:"Mobile"}),(0,a.jsx)("div",{className:"bullet_title",children:(0,a.jsx)("div",{className:"bullet_title__inner",children:t.x.title.split("").map((e,s)=>(0,a.jsx)("span",{children:e},s))})})]})})]}),(0,a.jsxs)("div",{className:"page_content",children:[(0,a.jsxs)("div",{className:"project_intro",children:[(0,a.jsx)("h4",{className:"project_intro__tit",children:"Qqmusic"}),(0,a.jsxs)("div",{className:"project_intro__desc",children:[(0,a.jsx)("p",{className:"project_intro__para",children:"QQ音乐音乐客户端负责项目，主要围绕「音乐巅峰榜」 「超级订阅」「积分推歌 」「扑通社区」「超级会员VIP 」「Moo」6个相关项目进行汇总。"}),(0,a.jsx)("p",{className:"project_intro__para",children:"客户端二级页面部分采用h5开发，底层基于B/S架构，极大的缩短了开发周期，实现快速更新迭代。"})]}),(0,a.jsxs)("div",{className:"project_intro__data",children:[(0,a.jsxs)("div",{className:"project_intro__data_el",children:[(0,a.jsx)("p",{className:"project_intro__data_tit",children:"Year"}),(0,a.jsx)("p",{className:"project_intro__data_subtxt",children:"2020-2022"})]}),(0,a.jsxs)("div",{className:"project_intro__data_el",children:[(0,a.jsx)("p",{className:"project_intro__data_tit",children:"Technologies"}),(0,a.jsx)("p",{className:"project_intro__data_subtxt",children:"H5, CSS3 , Javascript"})]})]})]}),(0,a.jsx)("div",{className:"project_part",children:(0,a.jsx)("div",{className:"case_box",children:(0,a.jsxs)("ul",{className:"case_list",children:[(0,a.jsxs)("li",{className:"case_item",children:[(0,a.jsxs)("div",{className:"case_item__desc",children:[(0,a.jsx)("p",{className:"case_item_no",children:"01."}),(0,a.jsx)("p",{className:"case_item_name",children:"音乐巅峰榜"})]}),(0,a.jsx)("div",{className:"case_item_preview",children:(0,a.jsx)("img",{src:w[1],alt:"",className:"case_item_preview__img"})})]}),(0,a.jsxs)("li",{className:"case_item",children:[(0,a.jsxs)("div",{className:"case_item__desc",children:[(0,a.jsx)("p",{className:"case_item_no",children:"02."}),(0,a.jsx)("p",{className:"case_item_name",children:"超级订阅"})]}),(0,a.jsx)("div",{className:"case_item_preview",children:(0,a.jsx)("img",{src:w[2],alt:"",className:"case_item_preview__img"})})]}),(0,a.jsxs)("li",{className:"case_item",children:[(0,a.jsxs)("div",{className:"case_item__desc",children:[(0,a.jsx)("p",{className:"case_item_no",children:"03."}),(0,a.jsx)("p",{className:"case_item_name",children:"积分推歌"})]}),(0,a.jsx)("div",{className:"case_item_preview",children:(0,a.jsx)("img",{src:w[3],alt:"",className:"case_item_preview__img"})})]}),(0,a.jsxs)("li",{className:"case_item",children:[(0,a.jsxs)("div",{className:"case_item__desc",children:[(0,a.jsx)("p",{className:"case_item_no",children:"04."}),(0,a.jsx)("p",{className:"case_item_name",children:"扑通社区"})]}),(0,a.jsx)("div",{className:"case_item_preview",children:(0,a.jsx)("img",{src:w[4],alt:"",className:"case_item_preview__img"})})]})]})})}),(0,a.jsx)("div",{className:"project_view",ref:r,children:(0,a.jsx)("img",{src:w[5],alt:"",className:"project_view__img"})}),(0,a.jsxs)("div",{className:"project_spark",children:[(0,a.jsxs)("div",{className:"project_spark__con",children:[(0,a.jsx)("p",{className:"project_spark_no",children:"Mobile App"}),(0,a.jsx)("p",{className:"project_spark_name",children:"Moo"})]}),(0,a.jsx)("div",{className:"project_spark__wrap",children:(0,a.jsx)("div",{className:"project_spark__view",children:[,,,,,].fill(null).map((e,s)=>(0,a.jsx)("div",{className:"project_spark__view_el project_spark__view_el--".concat(s+1),children:(0,a.jsx)("img",{src:w[6+s],alt:"",className:"project_spark__img"})},s))})})]}),(0,a.jsx)("div",{className:"brand_show",children:(0,a.jsx)("div",{className:"brand_show__wrap",ref:_})}),(0,a.jsx)("div",{className:"slogen_part",children:(0,a.jsxs)("div",{className:"slogen_part__wrap",children:[(0,a.jsx)("div",{className:"slogen_part__item",children:"QQMUSIC"}),(0,a.jsx)("div",{className:"slogen_part__item",children:"QQMUSIC"}),(0,a.jsx)("div",{className:"slogen_part__item",children:"QQMUSIC"})]})}),(0,a.jsx)("div",{className:"next_project",ref:s,children:(0,a.jsxs)("div",{className:"next_project__wrap",children:[(0,a.jsxs)("div",{className:"next_project__con",children:[(0,a.jsx)("div",{className:"backtotop",children:(0,a.jsxs)("div",{className:"backtotop_wrap",children:[(0,a.jsx)("div",{className:"backtotop_icon",children:(0,a.jsx)("svg",{className:"backtotop_icon__svg",onClick:u,children:(0,a.jsx)("use",{xlinkHref:"#icon_arrow"})})}),(0,a.jsx)("div",{className:"backtotop_text",children:(0,a.jsx)("div",{className:"flip_el flip_el__backtotop",onClick:u,children:(0,a.jsxs)("div",{className:"flip_el__wrap",children:[(0,a.jsx)("div",{className:"flip_el__up",children:(0,a.jsx)("div",{className:"flip_el__inner",children:"Back Top"})}),(0,a.jsx)("div",{className:"flip_el__text",children:(0,a.jsx)("div",{className:"flip_el__inner",children:"Back Top"})})]})})})]})}),(0,a.jsx)("div",{className:"next_project_caption",children:(0,a.jsx)("div",{className:"next_caption_link",children:(0,a.jsxs)("div",{className:"next_caption",children:[(0,a.jsx)("div",{className:"next_caption_subtitle",children:"Next Project"}),(0,a.jsx)("div",{className:"next_caption_title",onClick:()=>{e.push("".concat(l._n,"/project/fanlive"))},children:"Fanlive"})]})})})]}),(0,a.jsx)("div",{className:"next_project__bg",style:{backgroundImage:"url(/assets/images/project/fanlive/intro.png)"}})]})})]})]})}),(0,a.jsx)(g.Xz,{className:"project_canvas",children:(0,a.jsx)(i.Suspense,{fallback:(0,a.jsx)(f.Z,{size:.6}),children:(0,a.jsxs)(v.G,{index:1,track:_,children:[(0,a.jsx)("ambientLight",{intensity:1}),(0,a.jsx)(N.c,{makeDefault:!0,position:[0,0,10]}),(0,a.jsx)(h,{imgUrl:w[11],w:800,h:240,distort:.15,size:.8,speed:5})]})})})]})]})}}},function(e){e.O(0,[511,83,4772,6940,9774,2888,179],function(){return e(e.s=9913)}),_N_E=e.O()}]);