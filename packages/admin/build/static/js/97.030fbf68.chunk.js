"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[97],{6097:function(e,n,r){r.r(n),r.d(n,{default:function(){return x}});var a=r(2466),i=r(8738),t=r(932),s=r(2501),l=r(7801),d=r(2488),o=r(8e3),c=r(5921),h=r(4574),u=r(340),m=r(9007),k=r(3018);var p=e=>{const{children:n,handleSubmit:r,handleCancel:a}=e,[i,t]=(0,u.useState)(!1);return(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)(o.Z,{type:"primary",onClick:()=>{t(!0)},children:"\u4fee\u6539\u6743\u9650"}),(0,k.jsx)(l.Z,{title:"\u4fee\u6539\u6743\u9650",open:i,onOk:()=>{t(!1),r()},onCancel:()=>{t(!1),null===a||void 0===a||a()},children:n})]})};const y=[{key:"1",id:"1",name:"admin"},{key:"2",id:"2",name:"usr"}];var x=()=>{const[e]=s.Z.useForm(),[n]=(0,a.dy)("permissionStore"),[r]=(0,a.dy)("userInfoStore"),{createPermissionTree:x,permissionTreeData:f}=n,{permissions:j,updatePermissions:C}=r,{loading:g,run:Z}=(0,a.pL)(C,{auto:!1,single:!0}),[b,S]=(0,u.useState)(),v=(0,m.s0)(),w=()=>{l.Z.confirm({title:"\u786e\u5b9a\u4e48\uff1f",content:"\u66f4\u65b0\u6743\u9650\u4e4b\u540e\uff0c\u9700\u8981\u91cd\u65b0\u767b\u9646",onOk:()=>{Array.isArray(b)&&(b.includes("helloPage")?Z(b).then((()=>{(0,a.Qs)(),t.$6.init(),v("/")})):d.Z.info({message:"helloPage \u9996\u9875\u5f97\u6709\u554a\uff01"}))}})};(0,u.useEffect)((()=>{x(i.mP)}),[]);const P=[{title:"\u89d2\u8272\u7f16\u53f7",dataIndex:"id",key:"id",render:e=>(0,k.jsx)(o.Z,{children:e})},{title:"Name",dataIndex:"name",key:"name",render:e=>(0,k.jsx)("a",{children:e})},{title:"Action",key:"action",render:(n,r)=>(0,k.jsx)(p,{handleCancel:()=>{e.resetFields()},handleSubmit:w,children:(0,k.jsx)(s.Z,{labelCol:{span:4},wrapperCol:{span:14},layout:"horizontal",onValuesChange:()=>{},size:"middle",form:e,children:(0,k.jsx)(s.Z.Item,{label:"\u6743\u9650",name:"permission",children:j.length&&f.length&&(0,k.jsx)(c.Z,{checkStrictly:!0,defaultCheckedKeys:j,checkable:!0,treeData:f,onCheck:e=>{S(e.checked)}})})})})}];return(0,k.jsx)("div",{children:(0,k.jsx)(h.Z,{loading:g,columns:P,dataSource:y})})}}}]);
//# sourceMappingURL=97.030fbf68.chunk.js.map