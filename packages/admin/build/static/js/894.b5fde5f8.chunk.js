"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[894],{9602:function(e,t,a){var n=a(340),l=a(592),r=a(2466),s=a(5170),i=a(3018);const o=e=>e.map((e=>e.children?{value:e.path,title:e.meta.title,children:o(e.children)}:{value:e.path,title:e.meta.title}));t.Z=e=>{let{options:t={},...a}=e;const[c]=(0,r.dy)("routerStore"),{routesData:d}=c,[u,h]=(0,n.useState)([]);return(0,n.useEffect)((()=>{let e=o(d);h(e)}),[d]),(0,i.jsx)(s.Z,{...a,children:(0,i.jsx)(l.Z,{showSearch:!0,style:{width:"100%"},dropdownStyle:{maxHeight:400,overflow:"auto"},placeholder:"Please select",allowClear:!0,treeDefaultExpandAll:!0,treeData:u})})}},5170:function(e,t,a){var n=a(2501),l=a(3018);t.Z=e=>{let{Comp:t,rules:a,isForm:r=!0,children:s,...i}=e,o={...i};return(0,l.jsx)(l.Fragment,{children:r?(0,l.jsx)(n.Z.Item,{rules:a||[{required:!0,message:"\u4e0d\u53ef\u4e3a\u7a7a!"}],...o,children:s}):(0,l.jsx)(t,{})})}},2894:function(e,t,a){a.r(t),a.d(t,{default:function(){return f}});var n=a(2466),l=a(9356),r=a(9334),s=a(4574),i=a(340),o=a(2501),c=a(7801),d=a(3627),u=a(8e3),h=a(9602),m=a(3018);const p=e=>{let{open:t,onCreate:a,onCancel:n}=e;const[l]=o.Z.useForm();return(0,m.jsx)(c.Z,{open:t,title:"\u65b0\u5efa\u8def\u7531",okText:"\u786e\u5b9a",cancelText:"\u53d6\u6d88",onCancel:()=>{l.resetFields(),n()},onOk:()=>{l.validateFields().then((e=>{l.resetFields(),a(e)})).catch((e=>{console.log("Validate Failed:",e)}))},children:(0,m.jsxs)(o.Z,{form:l,layout:"vertical",name:"form_in_modal",initialValues:{modifier:"public"},children:[(0,m.jsx)(o.Z.Item,{name:"name",label:"\u8def\u7531\u540d\u79f0",rules:[{required:!0,message:"\u8bf7\u8f93\u5165!"}],children:(0,m.jsx)(d.Z,{})}),(0,m.jsx)(o.Z.Item,{name:"remark",rules:[{required:!0,message:"\u8bf7\u8f93\u5165!"}],label:"\u5907\u6ce8",children:(0,m.jsx)(d.Z,{type:"textarea"})}),(0,m.jsx)(h.Z,{rules:[{required:!0,message:"\u8bf7\u8f93\u5165!"}],name:"path",label:"\u8def\u5f84"})]})})};var x=e=>{let{btnLabel:t,handleUpload:a}=e;const[n,l]=(0,i.useState)(!1);return(0,m.jsxs)("span",{style:{marginRight:"12px"},children:[(0,m.jsxs)(u.Z,{type:"primary",onClick:()=>{l(!0)},children:["+ ",t]}),(0,m.jsx)(p,{open:n,onCreate:e=>{a(e),l(!1)},onCancel:()=>{l(!1)}})]})},g="pageDevPage_content__2Fqrh",j="pageDevPage_operate_board__OCS2q";const v=[{title:"\u9875\u9762\u540d\u79f0",dataIndex:"name",key:"name"},{title:"\u8def\u5f84",dataIndex:"path",key:"path"},{title:"\u53ef\u7528",dataIndex:"active",key:"active",render:(e,t)=>(0,m.jsx)(l.Z,{checked:t.active})},{title:"\u64cd\u4f5c",key:"action",render:(e,t)=>(0,m.jsx)(r.Z,{size:"middle",children:(0,m.jsx)("a",{children:"\u4fee\u6539"})})}];var f=()=>{const[e]=(0,n.dy)("devStore"),{pageNum:t,pageSize:a,total:l,pageList:r,createPageList:o,adcompanyPageList:c}=e,{loading:d,run:u}=(0,n.pL)(o,{auto:!0,debounceTime:1e3}),h=async function(){await u()};return(0,i.useEffect)((()=>{h(t,a)}),[]),(0,m.jsxs)("div",{className:g,children:[(0,m.jsx)("div",{className:j,children:(0,m.jsx)(x,{btnLabel:"\u6dfb\u52a0\u8def\u7531",handleUpload:e=>{c(e)}})}),(0,m.jsx)(s.Z,{rowKey:e=>e.id,loading:d,pagination:{pageSize:a,current:t,total:l,onChange(e,t){console.log(e,t),h(e,t)}},columns:v,dataSource:r})]})}}}]);
//# sourceMappingURL=894.b5fde5f8.chunk.js.map