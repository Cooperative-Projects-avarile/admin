import{r as u,j as e,o as f,i as x,k as j}from"./index-CHx3oPAQ.js";import{F as m,d as k}from"./index-3c9RWdXx.js";import{B as p}from"./button-BuR4x7gc.js";import{M as h}from"./index-CM0M5W9W.js";import{T as y}from"./Table-DTRpGOWg.js";import{s as g}from"./index-1Kuk-Phn.js";import"./EllipsisOutlined-BpMAEJuO.js";import"./index-D-abcRH2.js";import"./dropdown-CLyqTgCB.js";const F=a=>{const{children:n,handleSubmit:r,handleCancel:t}=a,[i,s]=u.useState(!1),l=()=>{s(!0)},d=()=>{s(!1),r()},c=()=>{s(!1),t==null||t()};return e.jsxs(e.Fragment,{children:[e.jsx(p,{type:"primary",onClick:l,children:"修改权限"}),e.jsx(h,{title:"修改权限",open:i,onOk:d,onCancel:c,children:n})]})},M=[{key:"1",id:"1",name:"admin"},{key:"2",id:"2",name:"usr"}],E=()=>{const[a]=m.useForm(),n=f(),{updatePermissionsAct:r}=x("authStore"),{loading:t,run:i}=k.useAsyncFunction(r,{auto:!1,single:!0}),[s]=u.useState(),l=j(),d=()=>{h.confirm({title:"确定么？",content:"更新权限之后，需要重新登陆",onOk:()=>{Array.isArray(s)&&(s.includes("helloPage")?i(s).then(()=>{n(),l("/")}):g.info({message:"helloPage 首页得有啊！"}))}})};u.useEffect(()=>{},[]);const c=[{title:"角色编号",dataIndex:"id",key:"id",render:o=>e.jsx(p,{children:o})},{title:"Name",dataIndex:"name",key:"name",render:o=>e.jsx("a",{children:o})},{title:"Action",key:"action",render:o=>e.jsx(F,{handleCancel:()=>{a.resetFields()},handleSubmit:d,children:e.jsx(m,{labelCol:{span:4},wrapperCol:{span:14},layout:"horizontal",onValuesChange:()=>{},size:"middle",form:a,children:e.jsx(m.Item,{label:"权限",name:"permission"})})})}];return e.jsx("div",{children:e.jsx(y,{loading:t,columns:c,dataSource:M})})};export{E as default};
