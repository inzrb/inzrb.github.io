import{j as e}from"./r3-other-vendor-2c8fc3cb.js";import{C as a,O as s}from"./r3-extend-vendor-ed1023dc.js";import{a as r}from"./react-vendor-670efa73.js";/* empty css                    */import{d as i,f as n,O as m}from"./index-4136c6eb.js";import"./three-vendor-6d04682c.js";const t=[{id:1,name:"Heart",url:"demo1"},{id:2,name:"Skateboard",url:"demo2"},{id:3,name:"Watch",url:"demo3"},{id:4,name:"Helmet",url:"demo4"},{id:5,name:"Sword",url:"demo5"},{id:6,name:"Shield",url:"demo6"},{id:7,name:"Duck",url:"demo7"}];function d(){const[d,l]=r.useState(1),{pathname:o}=i(),c=n();return r.useEffect((()=>{const e=parseInt(o.substring(20));l(e)}),[o]),e.jsxs("section",{className:"lab_show",children:[e.jsxs(a,{dpr:1.5,camera:{position:[0,.5,8],fov:35},children:[e.jsx(m,{}),e.jsx(s,{makeDefault:!0,dampingFactor:.2})]}),e.jsxs("div",{className:"ray_menu",children:[e.jsx("h2",{className:"ray_title",children:"RayTracer Demos"}),e.jsx("ul",{className:"ray_list",children:t.map((a=>e.jsx("li",{className:"ray_item "+(a.id===d?"current":""),children:e.jsx("div",{className:"line_btn",onClick:()=>{c("/labs/raytracer/"+a.url)},children:e.jsxs("div",{className:"line_btn__inner",children:[e.jsx("div",{className:"line_btn__text",children:a.name}),e.jsx("div",{className:"line_btn__line"})]})})},a.id)))})]})]})}export{d as default};
