"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[479],{9602:function(e,t,a){var n=a(340),l=a(592),r=a(2466),s=a(5170),i=a(3018);const o=e=>e.map((e=>e.children?{value:e.path,title:e.meta.title,children:o(e.children)}:{value:e.path,title:e.meta.title}));t.Z=e=>{let{options:t={},...a}=e;const[c]=(0,r.dy)("routerStore"),{routesData:d}=c,[u,m]=(0,n.useState)([]);return(0,n.useEffect)((()=>{let e=o(d);m(e)}),[d]),(0,i.jsx)(s.Z,{...a,children:(0,i.jsx)(l.Z,{showSearch:!0,style:{width:"100%"},dropdownStyle:{maxHeight:400,overflow:"auto"},placeholder:"Please select",allowClear:!0,treeDefaultExpandAll:!0,treeData:u})})}},5170:function(e,t,a){var n=a(2501),l=a(3018);t.Z=e=>{let{Comp:t,rules:a,isForm:r=!0,children:s,...i}=e,o={...i};return(0,l.jsx)(l.Fragment,{children:r?(0,l.jsx)(n.Z.Item,{rules:a||[{required:!0,message:"\u4e0d\u53ef\u4e3a\u7a7a!"}],...o,children:s}):(0,l.jsx)(t,{})})}},479:function(e,t,a){a.r(t),a.d(t,{default:function(){return f}});var n=a(2466),l=a(9334),r=a(4574),s=a(340),i={},o=a(9602),c=a(2501),d=a(7801),u=a(3627),m=a(8e3),p=a(3018);const h=e=>{let{open:t,onCreate:a,onCancel:n}=e;const[l]=c.Z.useForm();return(0,p.jsx)(d.Z,{open:t,title:"\u65b0\u5efaapi",okText:"\u786e\u5b9a",cancelText:"\u53d6\u6d88",onCancel:()=>{l.resetFields(),n()},onOk:()=>{l.validateFields().then((e=>{l.resetFields(),a(e)})).catch((e=>{console.log("Validate Failed:",e)}))},children:(0,p.jsxs)(c.Z,{form:l,layout:"vertical",name:"form_in_modal",initialValues:{modifier:"public"},children:[(0,p.jsx)(c.Z.Item,{name:"name",label:"api\u540d\u79f0",rules:[{required:!0,message:"\u8bf7\u8f93\u5165!"}],children:(0,p.jsx)(u.Z,{})}),(0,p.jsx)(c.Z.Item,{name:"remark",rules:[{required:!0,message:"\u8bf7\u8f93\u5165!"}],label:"\u5907\u6ce8",children:(0,p.jsx)(u.Z,{type:"textarea"})}),(0,p.jsx)(o.Z,{rules:[{required:!0,message:"\u8bf7\u8f93\u5165!"}],name:"path",label:"\u8def\u5f84"})]})})};var x=e=>{let{btnLabel:t,handleUpload:a}=e;const[n,l]=(0,s.useState)(!1);return(0,p.jsxs)("span",{style:{marginRight:"12px"},children:[(0,p.jsxs)(m.Z,{type:"primary",onClick:()=>{l(!0)},children:["+ ",t]}),(0,p.jsx)(h,{open:n,onCreate:e=>{a(e),l(!1)},onCancel:()=>{l(!1)}})]})};const j=[{title:"name",dataIndex:"name",key:"name"},{title:"\u64cd\u4f5c",key:"action",render:(e,t)=>(0,p.jsx)(l.Z,{size:"middle",children:(0,p.jsx)("a",{children:"\u4fee\u6539"})})}];var f=()=>{const[e]=(0,n.dy)("devStore"),{pageNum:t,pageSize:a,addApi:l,total:o,apiList:c,createApiList:d}=e,{loading:u,run:m}=(0,n.pL)(d,{auto:!0,debounceTime:1e3}),h=async function(){await m()};return(0,s.useEffect)((()=>{h(t,a)}),[]),(0,p.jsxs)("div",{className:i.content,children:[(0,p.jsx)("div",{className:i.operate_board,children:(0,p.jsx)(x,{btnLabel:"\u6dfb\u52a0api",handleUpload:e=>{l(e)}})}),(0,p.jsx)(r.Z,{rowKey:e=>e.id,loading:u,pagination:{pageSize:a,current:t,total:o,onChange(e,t){console.log(e,t),h(e,t)}},columns:j,dataSource:c})]})}}}]);
//# sourceMappingURL=479.24d1634e.chunk.js.map