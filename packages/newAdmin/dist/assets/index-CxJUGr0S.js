import{r as u,j as e,i as f}from"./index-CHx3oPAQ.js";import{F as l,d as g}from"./index-3c9RWdXx.js";import{T as y}from"./treeSelectBase-BL3Z5-02.js";import{B as F}from"./button-BuR4x7gc.js";import{M as S}from"./index-CM0M5W9W.js";import{I as m}from"./index-D-abcRH2.js";import{T as b,S as C}from"./Table-DTRpGOWg.js";import"./EllipsisOutlined-BpMAEJuO.js";import"./formItemHoc-z0tdCwie.js";import"./dropdown-CLyqTgCB.js";const T=({open:s,onCreate:r,onCancel:o})=>{const[t]=l.useForm();return e.jsx(S,{open:s,title:"新建仓库",okText:"确定",cancelText:"取消",onCancel:()=>{t.resetFields(),o()},onOk:()=>{t.validateFields().then(a=>{t.resetFields(),r(a)}).catch(a=>{console.log("Validate Failed:",a)})},children:e.jsxs(l,{form:t,layout:"vertical",name:"form_in_modal",initialValues:{modifier:"public"},children:[e.jsx(l.Item,{name:"name",label:"状态仓库名称",rules:[{required:!0,message:"请输入!"}],children:e.jsx(m,{})}),e.jsx(l.Item,{name:"remark",rules:[{required:!0,message:"请输入!"}],label:"备注",children:e.jsx(m,{type:"textarea"})}),e.jsx(y,{rules:[{required:!0,message:"请输入!"}],name:"path",label:"路径"})]})})},k=({btnLabel:s,handleUpload:r})=>{const[o,t]=u.useState(!1),a=i=>{r(i),t(!1)};return e.jsxs("span",{style:{marginRight:"12px"},children:[e.jsxs(F,{type:"primary",onClick:()=>{t(!0)},children:["+ ",s]}),e.jsx(T,{open:o,onCreate:a,onCancel:()=>{t(!1)}})]})},d={},v=[{title:"状态仓库名称",dataIndex:"name",key:"name"},{title:"操作",key:"action",render:()=>e.jsx(C,{size:"middle",children:e.jsx("a",{children:"修改"})})}],z=()=>{const{pageNum:s,pageSize:r,total:o,storeList:t,addStoreAct:a,fetchStoreListAct:i}=f("devStore"),{loading:p,run:x}=g.useAsyncFunction(i,{auto:!0,debounceTime:1e3}),c=async()=>{await x()},h=n=>{a(n)};return u.useEffect(()=>{c()},[]),e.jsxs("div",{className:d.content,children:[e.jsx("div",{className:d.operate_board,children:e.jsx(k,{btnLabel:"添加状态仓库",handleUpload:h})}),e.jsx(b,{rowKey:n=>n.id,loading:p,pagination:{pageSize:r,current:s,total:o,onChange(n,j){console.log(n,j),c()}},columns:v,dataSource:t})]})};export{z as default};
