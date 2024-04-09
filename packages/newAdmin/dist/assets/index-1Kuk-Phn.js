import{K as P,g as X,u as j,b as k,a as K,a6 as Y,m as J,a7 as Q,r as u,C as F,J as B,c as S,a8 as Z,L as tt,Y as et,a9 as nt,Z as ot,$ as it,x as d,aa as at,ab as ct,ac as rt,ad as st,ae as lt,e as dt,af as ft,ag as pt}from"./index-CHx3oPAQ.js";const ut=t=>{const{componentCls:e,notificationMarginEdge:o,animationMaxHeight:n}=t,i=`${e}-notice`,a=new P("antNotificationFadeIn",{"0%":{transform:"translate3d(100%, 0, 0)",opacity:0},"100%":{transform:"translate3d(0, 0, 0)",opacity:1}}),l=new P("antNotificationTopFadeIn",{"0%":{top:-n,opacity:0},"100%":{top:0,opacity:1}}),c=new P("antNotificationBottomFadeIn",{"0%":{bottom:t.calc(n).mul(-1).equal(),opacity:0},"100%":{bottom:0,opacity:1}}),r=new P("antNotificationLeftFadeIn",{"0%":{transform:"translate3d(-100%, 0, 0)",opacity:0},"100%":{transform:"translate3d(0, 0, 0)",opacity:1}});return{[e]:{[`&${e}-top, &${e}-bottom`]:{marginInline:0,[i]:{marginInline:"auto auto"}},[`&${e}-top`]:{[`${e}-fade-enter${e}-fade-enter-active, ${e}-fade-appear${e}-fade-appear-active`]:{animationName:l}},[`&${e}-bottom`]:{[`${e}-fade-enter${e}-fade-enter-active, ${e}-fade-appear${e}-fade-appear-active`]:{animationName:c}},[`&${e}-topRight, &${e}-bottomRight`]:{[`${e}-fade-enter${e}-fade-enter-active, ${e}-fade-appear${e}-fade-appear-active`]:{animationName:a}},[`&${e}-topLeft, &${e}-bottomLeft`]:{marginRight:{value:0,_skip_check_:!0},marginLeft:{value:o,_skip_check_:!0},[i]:{marginInlineEnd:"auto",marginInlineStart:0},[`${e}-fade-enter${e}-fade-enter-active, ${e}-fade-appear${e}-fade-appear-active`]:{animationName:r}}}}},gt=["top","topLeft","topRight","bottom","bottomLeft","bottomRight"],mt={topLeft:"left",topRight:"right",bottomLeft:"left",bottomRight:"right",top:"left",bottom:"left"},bt=(t,e)=>{const{componentCls:o}=t;return{[`${o}-${e}`]:{[`&${o}-stack > ${o}-notice-wrapper`]:{[e.startsWith("top")?"top":"bottom"]:0,[mt[e]]:{value:0,_skip_check_:!0}}}}},ht=t=>{const e={};for(let o=1;o<t.notificationStackLayer;o++)e[`&:nth-last-child(${o+1})`]={overflow:"hidden",[`& > ${t.componentCls}-notice`]:{opacity:0,transition:`opacity ${t.motionDurationMid}`}};return Object.assign({[`&:not(:nth-last-child(-n+${t.notificationStackLayer}))`]:{opacity:0,overflow:"hidden",color:"transparent",pointerEvents:"none"}},e)},$t=t=>{const e={};for(let o=1;o<t.notificationStackLayer;o++)e[`&:nth-last-child(${o+1})`]={background:t.colorBgBlur,backdropFilter:"blur(10px)","-webkit-backdrop-filter":"blur(10px)"};return Object.assign({},e)},yt=t=>{const{componentCls:e}=t;return Object.assign({[`${e}-stack`]:{[`& > ${e}-notice-wrapper`]:Object.assign({transition:`all ${t.motionDurationSlow}, backdrop-filter 0s`,position:"absolute"},ht(t))},[`${e}-stack:not(${e}-stack-expanded)`]:{[`& > ${e}-notice-wrapper`]:Object.assign({},$t(t))},[`${e}-stack${e}-stack-expanded`]:{[`& > ${e}-notice-wrapper`]:{"&:not(:nth-last-child(-n + 1))":{opacity:1,overflow:"unset",color:"inherit",pointerEvents:"auto",[`& > ${t.componentCls}-notice`]:{opacity:1}},"&:after":{content:'""',position:"absolute",height:t.margin,width:"100%",insetInline:0,bottom:t.calc(t.margin).mul(-1).equal(),background:"transparent",pointerEvents:"auto"}}}},gt.map(o=>bt(t,o)).reduce((o,n)=>Object.assign(Object.assign({},o),n),{}))},z=t=>{const{iconCls:e,componentCls:o,boxShadow:n,fontSizeLG:i,notificationMarginBottom:a,borderRadiusLG:l,colorSuccess:c,colorInfo:r,colorWarning:s,colorError:m,colorTextHeading:p,notificationBg:h,notificationPadding:b,notificationMarginEdge:v,fontSize:y,lineHeight:g,width:x,notificationIconSize:C,colorText:O}=t,f=`${o}-notice`;return{position:"relative",marginBottom:a,marginInlineStart:"auto",background:h,borderRadius:l,boxShadow:n,[f]:{padding:b,width:x,maxWidth:`calc(100vw - ${j(t.calc(v).mul(2).equal())})`,overflow:"hidden",lineHeight:g,wordWrap:"break-word"},[`${f}-message`]:{marginBottom:t.marginXS,color:p,fontSize:i,lineHeight:t.lineHeightLG},[`${f}-description`]:{fontSize:y,color:O},[`${f}-closable ${f}-message`]:{paddingInlineEnd:t.paddingLG},[`${f}-with-icon ${f}-message`]:{marginBottom:t.marginXS,marginInlineStart:t.calc(t.marginSM).add(C).equal(),fontSize:i},[`${f}-with-icon ${f}-description`]:{marginInlineStart:t.calc(t.marginSM).add(C).equal(),fontSize:y},[`${f}-icon`]:{position:"absolute",fontSize:C,lineHeight:1,[`&-success${e}`]:{color:c},[`&-info${e}`]:{color:r},[`&-warning${e}`]:{color:s},[`&-error${e}`]:{color:m}},[`${f}-close`]:Object.assign({position:"absolute",top:t.notificationPaddingVertical,insetInlineEnd:t.notificationPaddingHorizontal,color:t.colorIcon,outline:"none",width:t.notificationCloseButtonSize,height:t.notificationCloseButtonSize,borderRadius:t.borderRadiusSM,transition:`background-color ${t.motionDurationMid}, color ${t.motionDurationMid}`,display:"flex",alignItems:"center",justifyContent:"center","&:hover":{color:t.colorIconHover,backgroundColor:t.colorBgTextHover},"&:active":{backgroundColor:t.colorBgTextActive}},k(t)),[`${f}-btn`]:{float:"right",marginTop:t.marginSM}}},Ct=t=>{const{componentCls:e,notificationMarginBottom:o,notificationMarginEdge:n,motionDurationMid:i,motionEaseInOut:a}=t,l=`${e}-notice`,c=new P("antNotificationFadeOut",{"0%":{maxHeight:t.animationMaxHeight,marginBottom:o},"100%":{maxHeight:0,marginBottom:0,paddingTop:0,paddingBottom:0,opacity:0}});return[{[e]:Object.assign(Object.assign({},K(t)),{position:"fixed",zIndex:t.zIndexPopup,marginRight:{value:n,_skip_check_:!0},[`${e}-hook-holder`]:{position:"relative"},[`${e}-fade-appear-prepare`]:{opacity:"0 !important"},[`${e}-fade-enter, ${e}-fade-appear`]:{animationDuration:t.motionDurationMid,animationTimingFunction:a,animationFillMode:"both",opacity:0,animationPlayState:"paused"},[`${e}-fade-leave`]:{animationTimingFunction:a,animationFillMode:"both",animationDuration:i,animationPlayState:"paused"},[`${e}-fade-enter${e}-fade-enter-active, ${e}-fade-appear${e}-fade-appear-active`]:{animationPlayState:"running"},[`${e}-fade-leave${e}-fade-leave-active`]:{animationName:c,animationPlayState:"running"},"&-rtl":{direction:"rtl",[`${l}-btn`]:{float:"left"}}})},{[e]:{[`${l}-wrapper`]:Object.assign({},z(t))}}]},D=t=>({zIndexPopup:t.zIndexPopupBase+Y+50,width:384}),G=t=>{const e=t.paddingMD,o=t.paddingLG;return J(t,{notificationBg:t.colorBgElevated,notificationPaddingVertical:e,notificationPaddingHorizontal:o,notificationIconSize:t.calc(t.fontSizeLG).mul(t.lineHeightLG).equal(),notificationCloseButtonSize:t.calc(t.controlHeightLG).mul(.55).equal(),notificationMarginBottom:t.margin,notificationPadding:`${j(t.paddingMD)} ${j(t.paddingContentHorizontalLG)}`,notificationMarginEdge:t.marginLG,animationMaxHeight:150,notificationStackLayer:3})},A=X("Notification",t=>{const e=G(t);return[Ct(e),ut(e),yt(e)]},D),vt=Q(["Notification","PurePanel"],t=>{const e=`${t.componentCls}-notice`,o=G(t);return{[`${e}-pure-panel`]:Object.assign(Object.assign({},z(o)),{width:o.width,maxWidth:`calc(100vw - ${j(t.calc(o.notificationMarginEdge).mul(2).equal())})`,margin:0})}},D);var xt=function(t,e){var o={};for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.indexOf(n)<0&&(o[n]=t[n]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,n=Object.getOwnPropertySymbols(t);i<n.length;i++)e.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(t,n[i])&&(o[n[i]]=t[n[i]]);return o};function L(t,e){return e===null||e===!1?null:e||u.createElement(tt,{className:`${t}-close-icon`})}const St={success:et,info:nt,error:ot,warning:it},W=t=>{const{prefixCls:e,icon:o,type:n,message:i,description:a,btn:l,role:c="alert"}=t;let r=null;return o?r=u.createElement("span",{className:`${e}-icon`},o):n&&(r=u.createElement(St[n]||null,{className:S(`${e}-icon`,`${e}-icon-${n}`)})),u.createElement("div",{className:S({[`${e}-with-icon`]:r}),role:c},r,u.createElement("div",{className:`${e}-message`},i),u.createElement("div",{className:`${e}-description`},a),l&&u.createElement("div",{className:`${e}-btn`},l))},Ot=t=>{const{prefixCls:e,className:o,icon:n,type:i,message:a,description:l,btn:c,closable:r=!0,closeIcon:s,className:m}=t,p=xt(t,["prefixCls","className","icon","type","message","description","btn","closable","closeIcon","className"]),{getPrefixCls:h}=u.useContext(F),b=e||h("notification"),v=`${b}-notice`,y=B(b),[g,x,C]=A(b,y);return g(u.createElement("div",{className:S(`${v}-pure-panel`,x,o,C,y)},u.createElement(vt,{prefixCls:b}),u.createElement(Z,Object.assign({},p,{prefixCls:b,eventKey:"pure",duration:null,closable:r,className:S({notificationClassName:m}),closeIcon:L(b,s),content:u.createElement(W,{prefixCls:v,icon:n,type:i,message:a,description:l,btn:c})}))))},Nt=Ot;function Pt(t,e,o){let n;switch(t){case"top":n={left:"50%",transform:"translateX(-50%)",right:"auto",top:e,bottom:"auto"};break;case"topLeft":n={left:0,top:e,bottom:"auto"};break;case"topRight":n={right:0,top:e,bottom:"auto"};break;case"bottom":n={left:"50%",transform:"translateX(-50%)",right:"auto",top:"auto",bottom:o};break;case"bottomLeft":n={left:0,top:"auto",bottom:o};break;default:n={right:0,top:"auto",bottom:o};break}return n}function It(t){return{motionName:`${t}-fade`}}var wt=function(t,e){var o={};for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.indexOf(n)<0&&(o[n]=t[n]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,n=Object.getOwnPropertySymbols(t);i<n.length;i++)e.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(t,n[i])&&(o[n[i]]=t[n[i]]);return o};const T=24,Et=4.5,jt="topRight",Mt=t=>{let{children:e,prefixCls:o}=t;const n=B(o),[i,a,l]=A(o,n);return i(d.createElement(st,{classNames:{list:S(a,l,n)}},e))},Ft=(t,e)=>{let{prefixCls:o,key:n}=e;return d.createElement(Mt,{prefixCls:o,key:n},t)},Lt=d.forwardRef((t,e)=>{const{top:o,bottom:n,prefixCls:i,getContainer:a,maxCount:l,rtl:c,onAllRemoved:r,stack:s,duration:m}=t,{getPrefixCls:p,getPopupContainer:h,notification:b,direction:v}=u.useContext(F),[,y]=at(),g=i||p("notification"),x=N=>Pt(N,o??T,n??T),C=()=>S({[`${g}-rtl`]:c??v==="rtl"}),O=()=>It(g),[f,w]=ct({prefixCls:g,style:x,className:C,motion:O,closable:!0,closeIcon:L(g),duration:m??Et,getContainer:()=>(a==null?void 0:a())||(h==null?void 0:h())||document.body,maxCount:l,onAllRemoved:r,renderNotifications:Ft,stack:s===!1?!1:{threshold:typeof s=="object"?s==null?void 0:s.threshold:void 0,offset:8,gap:y.margin}});return d.useImperativeHandle(e,()=>Object.assign(Object.assign({},f),{prefixCls:g,notification:b})),w});function q(t){const e=d.useRef(null);return rt(),[d.useMemo(()=>{const n=c=>{var r;if(!e.current)return;const{open:s,prefixCls:m,notification:p}=e.current,h=`${m}-notice`,{message:b,description:v,icon:y,type:g,btn:x,className:C,style:O,role:f="alert",closeIcon:w,closable:N}=c,U=wt(c,["message","description","icon","type","btn","className","style","role","closeIcon","closable"]),R=L(h,typeof w<"u"?w:p==null?void 0:p.closeIcon);return s(Object.assign(Object.assign({placement:(r=t==null?void 0:t.placement)!==null&&r!==void 0?r:jt},U),{content:d.createElement(W,{prefixCls:h,icon:y,type:g,message:b,description:v,btn:x,role:f}),className:S(g&&`${h}-${g}`,C,p==null?void 0:p.className),style:Object.assign(Object.assign({},p==null?void 0:p.style),O),closeIcon:R,closable:N??!!R}))},a={open:n,destroy:c=>{var r,s;c!==void 0?(r=e.current)===null||r===void 0||r.close(c):(s=e.current)===null||s===void 0||s.destroy()}};return["success","info","warning","error"].forEach(c=>{a[c]=r=>n(Object.assign(Object.assign({},r),{type:c}))}),a},[]),d.createElement(Lt,Object.assign({key:"notification-holder"},t,{ref:e}))]}function _t(t){return q(t)}let $=null,E=t=>t(),M=[],I={};function H(){const{getContainer:t,rtl:e,maxCount:o,top:n,bottom:i}=I,a=(t==null?void 0:t())||document.body;return{getContainer:()=>a,rtl:e,maxCount:o,top:n,bottom:i}}const Rt=d.forwardRef((t,e)=>{const{notificationConfig:o,sync:n}=t,{getPrefixCls:i}=u.useContext(F),a=I.prefixCls||i("notification"),l=u.useContext(pt),[c,r]=q(Object.assign(Object.assign(Object.assign({},o),{prefixCls:a}),l.notification));return d.useEffect(n,[]),d.useImperativeHandle(e,()=>{const s=Object.assign({},c);return Object.keys(s).forEach(m=>{s[m]=function(){return n(),c[m].apply(c,arguments)}}),{instance:s,sync:n}}),r}),Tt=d.forwardRef((t,e)=>{const[o,n]=d.useState(H),i=()=>{n(H)};d.useEffect(i,[]);const a=ft(),l=a.getRootPrefixCls(),c=a.getIconPrefixCls(),r=a.getTheme(),s=d.createElement(Rt,{ref:e,sync:i,notificationConfig:o});return d.createElement(dt,{prefixCls:l,iconPrefixCls:c,theme:r},a.holderRender?a.holderRender(s):s)});function _(){if(!$){const t=document.createDocumentFragment(),e={fragment:t};$=e,E(()=>{lt(d.createElement(Tt,{ref:o=>{const{instance:n,sync:i}=o||{};Promise.resolve().then(()=>{!e.instance&&n&&(e.instance=n,e.sync=i,_())})}}),t)});return}$.instance&&(M.forEach(t=>{switch(t.type){case"open":{E(()=>{$.instance.open(Object.assign(Object.assign({},I),t.config))});break}case"destroy":E(()=>{$==null||$.instance.destroy(t.key)});break}}),M=[])}function Ht(t){I=Object.assign(Object.assign({},I),t),E(()=>{var e;(e=$==null?void 0:$.sync)===null||e===void 0||e.call($)})}function V(t){M.push({type:"open",config:t}),_()}const Bt=t=>{M.push({type:"destroy",key:t}),_()},zt=["success","info","warning","error"],Dt={open:V,destroy:Bt,config:Ht,useNotification:_t,_InternalPanelDoNotUseOrYouWillBeFired:Nt},Gt=Dt;zt.forEach(t=>{Gt[t]=e=>V(Object.assign(Object.assign({},e),{type:t}))});export{Gt as s};
