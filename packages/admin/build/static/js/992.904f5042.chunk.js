"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[992],{4992:function(e,t,i){i.r(t),i.d(t,{default:function(){return C}});var n=i(8e3),s=i(4574),o=i(340),a=i(2466),r=i(2501),c=i(7801),l=i(2320),d=i(9334),f=i(1293),u=i(3018);const p=["prime","parent","sub"];var m=()=>{const[e]=(0,l.o)(),{setAddModalShowAct:t,deleteAct:i,queryAct:n,setIsDetailAct:s,dataList:o,formVersion:r}=e;return(0,a.Gm)((()=>[{...(0,f.fB)("email"),render:(e,i)=>(0,u.jsx)("a",{onClick:()=>{t(!0,!0,i)},children:e})},(0,f.fB)("nick_name"),(0,f.fB)("first_name"),(0,f.fB)("last_name"),(0,f.fB)("stripe_customer_id",{fieldConfig:{scope:["modal"]}}),(0,f.fB)("postcode"),(0,f.fB)("mobile"),(0,f.fB)("role"),(0,f.fB)("stripe_session_id",{fieldConfig:{scope:["modal"]}}),(0,f.fB)("stripe_subscription_id",{fieldConfig:{scope:["modal"]}}),(0,f.fB)("hubspotId",{fieldConfig:{scope:["modal"]}}),(0,f.fB)("company_id",{fieldConfig:{scope:["modal"]}}),(0,f.fB)("id"),{title:"description",dataIndex:"description",key:"description",fieldConfig:{isSearch:!0,formOptions:{label:"description",name:"description",rules:[{required:!0},{type:"string",min:4,max:60}]}}},{title:"type",dataIndex:"type",key:"type",fieldConfig:{isSearch:!0,inputType:"Select",options:p,formOptions:{initialValue:p[0],label:"type",name:"type",rules:[{required:!0}]}}},{title:"action",key:"action",render:(e,s)=>(0,u.jsxs)(d.Z,{size:"middle",children:[(0,u.jsx)("a",{onClick:()=>{t(!0,!1,s)},children:"edit"}),(0,u.jsx)("a",{onClick:()=>{c.Z.confirm({content:"are you sure?",onOk:async()=>{await i({id:s.id}),n()}})},children:"delete"})]})}]),[o,r])};var h=()=>{const[e]=r.Z.useForm(),{setAddModalShowAct:t,addAct:i,updateAct:n,queryAct:s,recordData:d,isShowAddModal:f,isDetail:p}=(0,l.o)()[0],{formList:h}=m(),g=(0,a.uA)(h,{formIns:e,isJustShow:p});(0,o.useEffect)((()=>{d&&e.setFieldsValue(d)}),[d]);let y=p?{footer:[]}:{};return(0,u.jsx)(c.Z,{open:f,title:"add",...y,onCancel:()=>{e.resetFields(),t(!1)},onOk:()=>{e.validateFields().then((async o=>{let a=d?n:i;await a(o),t(!1),e.resetFields(),s()})).catch((e=>{console.log("Validate Failed:",e)}))},children:(0,u.jsx)(r.Z,{form:e,children:g})})},g=i(1377),y=i(936),x=i(5166),Z=i(9473);const j=()=>{const{searchList:e}=m(),[t,i]=(0,o.useState)(!1);const s=(0,a.Wc)(e,{count:4}),[c]=r.Z.useForm(),{queryAct:d,pageSize:f}=(0,l.o)()[0];return(0,u.jsxs)(r.Z,{form:c,name:"advanced_search",className:"ant-advanced-search-form",onFinish:e=>{console.log("Received values of form: ",e)},children:[(0,u.jsx)(x.Z,{gutter:24,children:t?s:s.slice(0,4)}),(0,u.jsx)(x.Z,{children:(0,u.jsxs)(Z.Z,{span:24,style:{textAlign:"right"},children:[(0,u.jsx)(n.Z,{onClick:()=>{d({...c.getFieldsValue(),page:1,page_size:f})},type:"primary",htmlType:"submit",children:"Search"}),(0,u.jsx)(n.Z,{style:{margin:"0 8px"},onClick:()=>{c.resetFields()},children:"Clear"}),(0,u.jsxs)("a",{style:{fontSize:12},onClick:()=>{i(!t)},children:[t?(0,u.jsx)(g.Z,{}):(0,u.jsx)(y.Z,{})," Collapse"]})]})})]})};var v=e=>(0,u.jsx)("div",{style:{marginBottom:"32px"},children:(0,u.jsx)(j,{})}),A={container:"style_container__S+VdA"};var C=()=>{const{pageNum:e,pageSize:t,loading:i,total:a,dataList:r,queryAct:c,setAddModalShowAct:d,setIsDetailAct:f}=(0,l.o)()[0],{columns:p}=m();(0,o.useEffect)((()=>{g(e,t)}),[]);const g=async function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1?arguments[1]:void 0;await c({page:e,page_size:t})};return(0,u.jsxs)("div",{className:A.content,children:[(0,u.jsx)(v,{}),(0,u.jsx)(n.Z,{type:"primary",onClick:()=>{d(!0)},style:{marginBottom:12},children:"+ add"}),(0,u.jsx)(h,{}),(0,u.jsx)(s.Z,{scroll:{x:1500,y:300},rowKey:e=>e.id,loading:i,pagination:{pageSize:t,current:e,total:a,onChange(e,t){console.log(e,t),g(e,t)}},columns:p,dataSource:r})]})}},936:function(e,t,i){var n=i(6076),s=i(340),o=i(6375),a=i(5145),r=function(e,t){return s.createElement(a.Z,(0,n.Z)({},e,{ref:t,icon:o.Z}))};t.Z=s.forwardRef(r)},1377:function(e,t,i){i.d(t,{Z:function(){return c}});var n=i(6076),s=i(340),o={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M890.5 755.3L537.9 269.2c-12.8-17.6-39-17.6-51.7 0L133.5 755.3A8 8 0 00140 768h75c5.1 0 9.9-2.5 12.9-6.6L512 369.8l284.1 391.6c3 4.1 7.8 6.6 12.9 6.6h75c6.5 0 10.3-7.4 6.5-12.7z"}}]},name:"up",theme:"outlined"},a=i(5145),r=function(e,t){return s.createElement(a.Z,(0,n.Z)({},e,{ref:t,icon:o}))};var c=s.forwardRef(r)},5166:function(e,t,i){var n=i(8672);t.Z=n.Z}}]);
//# sourceMappingURL=992.904f5042.chunk.js.map