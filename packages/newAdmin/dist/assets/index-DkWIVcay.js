import{r as l,_ as V,ay as rt,x as v,G as it,c as w,z as T,D as st,p as re,d as q,w as ie,I as Ne,az as fe,F as me,L as se,ao as ct,aA as dt,aB as Te,K as Ie,g as ut,u as S,a as ft,b as mt,m as gt,C as ee,J as Re,Q as Ct,aC as vt,a7 as bt,t as yt,e as je,$ as xt,Z as pt,Y as ht,a9 as $t,aa as Ot,a6 as Et,aD as St,ae as Pt,af as wt,S as Nt}from"./index-f5AIFuXe.js";import{p as Tt,P as It,d as ce,q as Rt,c as jt,N as Bt,g as k}from"./EllipsisOutlined-DTrOfCu6.js";import{B as de,d as Be,a as Mt,N as Ft}from"./button-CtW_Xfic.js";import{w as zt}from"./dropdown-D-S4ftwO.js";function Ht(){const[e,t]=l.useState([]),o=l.useCallback(n=>(t(a=>[].concat(V(a),[n])),()=>{t(a=>a.filter(r=>r!==n))}),[]);return[e,o]}function ge(e){return!!(e&&e.then)}const Lt=e=>{const{type:t,children:o,prefixCls:n,buttonProps:a,close:r,autoFocus:u,emitEvent:d,isSilent:s,quitOnNullishReturnValue:c,actionFn:i}=e,f=l.useRef(!1),b=l.useRef(null),[g,h]=rt(!1),C=function(){r==null||r.apply(void 0,arguments)};l.useEffect(()=>{let m=null;return u&&(m=setTimeout(()=>{var x;(x=b.current)===null||x===void 0||x.focus()})),()=>{m&&clearTimeout(m)}},[]);const $=m=>{ge(m)&&(h(!0),m.then(function(){h(!1,!0),C.apply(void 0,arguments),f.current=!1},x=>{if(h(!1,!0),f.current=!1,!(s!=null&&s()))return Promise.reject(x)}))},y=m=>{if(f.current)return;if(f.current=!0,!i){C();return}let x;if(d){if(x=i(m),c&&!ge(x)){f.current=!1,C(m);return}}else if(i.length)x=i(r),f.current=!1;else if(x=i(),!x){C();return}$(x)};return l.createElement(de,Object.assign({},Be(t),{onClick:y,loading:g,prefixCls:n},a,{ref:b}),o)},Me=Lt,Q=v.createContext({}),{Provider:Fe}=Q,At=()=>{const{autoFocusButton:e,cancelButtonProps:t,cancelTextLocale:o,isSilent:n,mergedOkCancel:a,rootPrefixCls:r,close:u,onCancel:d,onConfirm:s}=l.useContext(Q);return a?v.createElement(Me,{isSilent:n,actionFn:d,close:function(){u==null||u.apply(void 0,arguments),s==null||s(!1)},autoFocus:e==="cancel",buttonProps:t,prefixCls:`${r}-btn`},o):null},Ce=At,Dt=()=>{const{autoFocusButton:e,close:t,isSilent:o,okButtonProps:n,rootPrefixCls:a,okTextLocale:r,okType:u,onConfirm:d,onOk:s}=l.useContext(Q);return v.createElement(Me,{isSilent:o,type:u||"primary",actionFn:s,close:function(){t==null||t.apply(void 0,arguments),d==null||d(!0)},autoFocus:e==="ok",buttonProps:n,prefixCls:`${a}-btn`},r)},ve=Dt;var ze=l.createContext({});function be(e,t,o){var n=t;return!n&&o&&(n="".concat(e,"-").concat(o)),n}function ye(e,t){var o=e["page".concat(t?"Y":"X","Offset")],n="scroll".concat(t?"Top":"Left");if(typeof o!="number"){var a=e.document;o=a.documentElement[n],typeof o!="number"&&(o=a.body[n])}return o}function Wt(e){var t=e.getBoundingClientRect(),o={left:t.left,top:t.top},n=e.ownerDocument,a=n.defaultView||n.parentWindow;return o.left+=ye(a),o.top+=ye(a,!0),o}const _t=l.memo(function(e){var t=e.children;return t},function(e,t){var o=t.shouldUpdate;return!o});var xe={width:0,height:0,overflow:"hidden",outline:"none"},Vt={outline:"none"},He=v.forwardRef(function(e,t){var o=e.prefixCls,n=e.className,a=e.style,r=e.title,u=e.ariaId,d=e.footer,s=e.closable,c=e.closeIcon,i=e.onClose,f=e.children,b=e.bodyStyle,g=e.bodyProps,h=e.modalRender,C=e.onMouseDown,$=e.onMouseUp,y=e.holderRef,m=e.visible,x=e.forceRender,p=e.width,N=e.height,O=e.classNames,E=e.styles,z=v.useContext(ze),A=z.panel,D=it(y,A),M=l.useRef(),G=l.useRef(),B=l.useRef();v.useImperativeHandle(t,function(){return{focus:function(){var _;(_=B.current)===null||_===void 0||_.focus()},changeActive:function(_){var te=document,Y=te.activeElement;_&&Y===G.current?M.current.focus():!_&&Y===M.current&&G.current.focus()}}});var I={};p!==void 0&&(I.width=p),N!==void 0&&(I.height=N);var H;d&&(H=v.createElement("div",{className:w("".concat(o,"-footer"),O==null?void 0:O.footer),style:T({},E==null?void 0:E.footer)},d));var L;r&&(L=v.createElement("div",{className:w("".concat(o,"-header"),O==null?void 0:O.header),style:T({},E==null?void 0:E.header)},v.createElement("div",{className:"".concat(o,"-title"),id:u},r)));var W=l.useMemo(function(){return st(s)==="object"&&s!==null?s:s?{closeIcon:c??v.createElement("span",{className:"".concat(o,"-close-x")})}:{}},[s,c]),K=re(W,!0),U;s&&(U=v.createElement("button",q({type:"button",onClick:i,"aria-label":"Close"},K,{className:"".concat(o,"-close")}),W.closeIcon));var R=v.createElement("div",{className:w("".concat(o,"-content"),O==null?void 0:O.content),style:E==null?void 0:E.content},U,L,v.createElement("div",q({className:w("".concat(o,"-body"),O==null?void 0:O.body),style:T(T({},b),E==null?void 0:E.body)},g),f),H);return v.createElement("div",{key:"dialog-element",role:"dialog","aria-labelledby":r?u:null,"aria-modal":"true",ref:D,style:T(T({},a),I),className:w(o,n),onMouseDown:C,onMouseUp:$},v.createElement("div",{tabIndex:0,ref:M,style:xe,"aria-hidden":"true"}),v.createElement("div",{ref:B,tabIndex:-1,style:Vt},v.createElement(_t,{shouldUpdate:m||x},h?h(R):R)),v.createElement("div",{tabIndex:0,ref:G,style:xe,"aria-hidden":"true"}))}),Le=l.forwardRef(function(e,t){var o=e.prefixCls,n=e.title,a=e.style,r=e.className,u=e.visible,d=e.forceRender,s=e.destroyOnClose,c=e.motionName,i=e.ariaId,f=e.onVisibleChanged,b=e.mousePosition,g=l.useRef(),h=l.useState(),C=ie(h,2),$=C[0],y=C[1],m={};$&&(m.transformOrigin=$);function x(){var p=Wt(g.current);y(b?"".concat(b.x-p.left,"px ").concat(b.y-p.top,"px"):"")}return l.createElement(Ne,{visible:u,onVisibleChanged:f,onAppearPrepare:x,onEnterPrepare:x,forceRender:d,motionName:c,removeOnLeave:s,ref:g},function(p,N){var O=p.className,E=p.style;return l.createElement(He,q({},e,{ref:t,title:n,ariaId:i,prefixCls:o,holderRef:N,style:T(T(T({},E),a),m),className:w(r,O)}))})});Le.displayName="Content";function qt(e){var t=e.prefixCls,o=e.style,n=e.visible,a=e.maskProps,r=e.motionName,u=e.className;return l.createElement(Ne,{key:"mask",visible:n,motionName:r,leavedClassName:"".concat(t,"-mask-hidden")},function(d,s){var c=d.className,i=d.style;return l.createElement("div",q({ref:s,style:T(T({},i),o),className:w("".concat(t,"-mask"),c,u)},a))})}function Gt(e){var t=e.prefixCls,o=t===void 0?"rc-dialog":t,n=e.zIndex,a=e.visible,r=a===void 0?!1:a,u=e.keyboard,d=u===void 0?!0:u,s=e.focusTriggerAfterClose,c=s===void 0?!0:s,i=e.wrapStyle,f=e.wrapClassName,b=e.wrapProps,g=e.onClose,h=e.afterOpenChange,C=e.afterClose,$=e.transitionName,y=e.animation,m=e.closable,x=m===void 0?!0:m,p=e.mask,N=p===void 0?!0:p,O=e.maskTransitionName,E=e.maskAnimation,z=e.maskClosable,A=z===void 0?!0:z,D=e.maskStyle,M=e.maskProps,G=e.rootClassName,B=e.classNames,I=e.styles,H=l.useRef(),L=l.useRef(),W=l.useRef(),K=l.useState(r),U=ie(K,2),R=U[0],j=U[1],_=Tt();function te(){fe(L.current,document.activeElement)||(H.current=document.activeElement)}function Y(){if(!fe(L.current,document.activeElement)){var P;(P=W.current)===null||P===void 0||P.focus()}}function nt(P){if(P)Y();else{if(j(!1),N&&H.current&&c){try{H.current.focus({preventScroll:!0})}catch{}H.current=null}R&&(C==null||C())}h==null||h(P)}function ne(P){g==null||g(P)}var J=l.useRef(!1),oe=l.useRef(),ot=function(){clearTimeout(oe.current),J.current=!0},at=function(){oe.current=setTimeout(function(){J.current=!1})},ue=null;A&&(ue=function(ae){J.current?J.current=!1:L.current===ae.target&&ne(ae)});function lt(P){if(d&&P.keyCode===me.ESC){P.stopPropagation(),ne(P);return}r&&P.keyCode===me.TAB&&W.current.changeActive(!P.shiftKey)}return l.useEffect(function(){r&&(j(!0),te())},[r]),l.useEffect(function(){return function(){clearTimeout(oe.current)}},[]),l.createElement("div",q({className:w("".concat(o,"-root"),G)},re(e,{data:!0})),l.createElement(qt,{prefixCls:o,visible:N&&r,motionName:be(o,O,E),style:T(T({zIndex:n},D),I==null?void 0:I.mask),maskProps:M,className:B==null?void 0:B.mask}),l.createElement("div",q({tabIndex:-1,onKeyDown:lt,className:w("".concat(o,"-wrap"),f,B==null?void 0:B.wrapper),ref:L,onClick:ue,style:T(T(T({zIndex:n},i),I==null?void 0:I.wrapper),{},{display:R?null:"none"})},b),l.createElement(Le,q({},e,{onMouseDown:ot,onMouseUp:at,ref:W,closable:x,ariaId:_,prefixCls:o,visible:r&&R,onClose:ne,onVisibleChanged:nt,motionName:be(o,$,y)}))))}var Ae=function(t){var o=t.visible,n=t.getContainer,a=t.forceRender,r=t.destroyOnClose,u=r===void 0?!1:r,d=t.afterClose,s=t.panelRef,c=l.useState(o),i=ie(c,2),f=i[0],b=i[1],g=l.useMemo(function(){return{panel:s}},[s]);return l.useEffect(function(){o&&b(!0)},[o]),!a&&u&&!f?null:l.createElement(ze.Provider,{value:g},l.createElement(It,{open:o||a||f,autoDestroy:!1,getContainer:n,autoLock:o||f},l.createElement(Gt,q({},t,{destroyOnClose:u,afterClose:function(){d==null||d(),b(!1)}}))))};Ae.displayName="Dialog";function pe(e){if(e)return{closable:e.closable,closeIcon:e.closeIcon}}function he(e){const{closable:t,closeIcon:o}=e||{};return v.useMemo(()=>{if(!t&&(t===!1||o===!1||o===null))return!1;if(t===void 0&&o===void 0)return null;let n={closeIcon:typeof o!="boolean"&&o!==null?o:void 0};return t&&typeof t=="object"&&(n=Object.assign(Object.assign({},n),t)),n},[t,o])}function $e(){const e={};for(var t=arguments.length,o=new Array(t),n=0;n<t;n++)o[n]=arguments[n];return o.forEach(a=>{a&&Object.keys(a).forEach(r=>{a[r]!==void 0&&(e[r]=a[r])})}),e}const Ut={};function Xt(e,t){let o=arguments.length>2&&arguments[2]!==void 0?arguments[2]:Ut;const n=he(e),a=he(t),r=v.useMemo(()=>Object.assign({closeIcon:v.createElement(se,null)},o),[o]),u=v.useMemo(()=>n===!1?!1:n?$e(r,a,n):a===!1?!1:a?$e(r,a):r.closable?r:!1,[n,a,r]);return v.useMemo(()=>{if(u===!1)return[!1,null];const{closeIconRender:d}=r,{closeIcon:s}=u;let c=s;if(c!=null){d&&(c=d(s));const i=re(u,!0);Object.keys(i).length&&(c=v.isValidElement(c)?v.cloneElement(c,i):v.createElement("span",Object.assign({},i),c))}return[!0,c]},[u,r])}const Kt=()=>ct()&&window.document.documentElement;function Oe(){}const Qt=l.createContext({add:Oe,remove:Oe});function Zt(e){const t=l.useContext(Qt),o=l.useRef();return Mt(a=>{if(a){const r=e?a.querySelector(e):a;t.add(r),o.current=r}else t.remove(o.current)})}const Yt=()=>{const{cancelButtonProps:e,cancelTextLocale:t,onCancel:o}=l.useContext(Q);return v.createElement(de,Object.assign({onClick:o},e),t)},Ee=Yt,Jt=()=>{const{confirmLoading:e,okButtonProps:t,okType:o,okTextLocale:n,onOk:a}=l.useContext(Q);return v.createElement(de,Object.assign({},Be(o),{loading:e,onClick:a},t),n)},Se=Jt;function De(e,t){return v.createElement("span",{className:`${e}-close-x`},t||v.createElement(se,{className:`${e}-close-icon`}))}const We=e=>{const{okText:t,okType:o="primary",cancelText:n,confirmLoading:a,onOk:r,onCancel:u,okButtonProps:d,cancelButtonProps:s,footer:c}=e,[i]=ce("Modal",Te()),f=t||(i==null?void 0:i.okText),b=n||(i==null?void 0:i.cancelText),g={confirmLoading:a,okButtonProps:d,cancelButtonProps:s,okTextLocale:f,cancelTextLocale:b,okType:o,onOk:r,onCancel:u},h=v.useMemo(()=>g,V(Object.values(g)));let C;return typeof c=="function"||typeof c>"u"?(C=v.createElement(v.Fragment,null,v.createElement(Ee,null),v.createElement(Se,null)),typeof c=="function"&&(C=c(C,{OkBtn:Se,CancelBtn:Ee})),C=v.createElement(Fe,{value:h},C)):C=c,v.createElement(dt,{disabled:!1},C)},kt=new Ie("antFadeIn",{"0%":{opacity:0},"100%":{opacity:1}}),en=new Ie("antFadeOut",{"0%":{opacity:1},"100%":{opacity:0}}),tn=function(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;const{antCls:o}=e,n=`${o}-fade`,a=t?"&":"";return[Rt(n,kt,en,e.motionDurationMid,t),{[`
        ${a}${n}-enter,
        ${a}${n}-appear
      `]:{opacity:0,animationTimingFunction:"linear"},[`${a}${n}-leave`]:{animationTimingFunction:"linear"}}]};function Pe(e){return{position:e,inset:0}}const nn=e=>{const{componentCls:t,antCls:o}=e;return[{[`${t}-root`]:{[`${t}${o}-zoom-enter, ${t}${o}-zoom-appear`]:{transform:"none",opacity:0,animationDuration:e.motionDurationSlow,userSelect:"none"},[`${t}${o}-zoom-leave ${t}-content`]:{pointerEvents:"none"},[`${t}-mask`]:Object.assign(Object.assign({},Pe("fixed")),{zIndex:e.zIndexPopupBase,height:"100%",backgroundColor:e.colorBgMask,pointerEvents:"none",[`${t}-hidden`]:{display:"none"}}),[`${t}-wrap`]:Object.assign(Object.assign({},Pe("fixed")),{zIndex:e.zIndexPopupBase,overflow:"auto",outline:0,WebkitOverflowScrolling:"touch"})}},{[`${t}-root`]:tn(e)}]},on=e=>{const{componentCls:t}=e;return[{[`${t}-root`]:{[`${t}-wrap-rtl`]:{direction:"rtl"},[`${t}-centered`]:{textAlign:"center","&::before":{display:"inline-block",width:0,height:"100%",verticalAlign:"middle",content:'""'},[t]:{top:0,display:"inline-block",paddingBottom:0,textAlign:"start",verticalAlign:"middle"}},[`@media (max-width: ${e.screenSMMax}px)`]:{[t]:{maxWidth:"calc(100vw - 16px)",margin:`${S(e.marginXS)} auto`},[`${t}-centered`]:{[t]:{flex:1}}}}},{[t]:Object.assign(Object.assign({},ft(e)),{pointerEvents:"none",position:"relative",top:100,width:"auto",maxWidth:`calc(100vw - ${S(e.calc(e.margin).mul(2).equal())})`,margin:"0 auto",paddingBottom:e.paddingLG,[`${t}-title`]:{margin:0,color:e.titleColor,fontWeight:e.fontWeightStrong,fontSize:e.titleFontSize,lineHeight:e.titleLineHeight,wordWrap:"break-word"},[`${t}-content`]:{position:"relative",backgroundColor:e.contentBg,backgroundClip:"padding-box",border:0,borderRadius:e.borderRadiusLG,boxShadow:e.boxShadow,pointerEvents:"auto",padding:e.contentPadding},[`${t}-close`]:Object.assign({position:"absolute",top:e.calc(e.modalHeaderHeight).sub(e.modalCloseBtnSize).div(2).equal(),insetInlineEnd:e.calc(e.modalHeaderHeight).sub(e.modalCloseBtnSize).div(2).equal(),zIndex:e.calc(e.zIndexPopupBase).add(10).equal(),padding:0,color:e.modalCloseIconColor,fontWeight:e.fontWeightStrong,lineHeight:1,textDecoration:"none",background:"transparent",borderRadius:e.borderRadiusSM,width:e.modalCloseBtnSize,height:e.modalCloseBtnSize,border:0,outline:0,cursor:"pointer",transition:`color ${e.motionDurationMid}, background-color ${e.motionDurationMid}`,"&-x":{display:"flex",fontSize:e.fontSizeLG,fontStyle:"normal",lineHeight:`${S(e.modalCloseBtnSize)}`,justifyContent:"center",textTransform:"none",textRendering:"auto"},"&:hover":{color:e.modalCloseIconHoverColor,backgroundColor:e.colorBgTextHover,textDecoration:"none"},"&:active":{backgroundColor:e.colorBgTextActive}},mt(e)),[`${t}-header`]:{color:e.colorText,background:e.headerBg,borderRadius:`${S(e.borderRadiusLG)} ${S(e.borderRadiusLG)} 0 0`,marginBottom:e.headerMarginBottom,padding:e.headerPadding,borderBottom:e.headerBorderBottom},[`${t}-body`]:{fontSize:e.fontSize,lineHeight:e.lineHeight,wordWrap:"break-word",padding:e.bodyPadding},[`${t}-footer`]:{textAlign:"end",background:e.footerBg,marginTop:e.footerMarginTop,padding:e.footerPadding,borderTop:e.footerBorderTop,borderRadius:e.footerBorderRadius,[`> ${e.antCls}-btn + ${e.antCls}-btn`]:{marginInlineStart:e.marginXS}},[`${t}-open`]:{overflow:"hidden"}})},{[`${t}-pure-panel`]:{top:"auto",padding:0,display:"flex",flexDirection:"column",[`${t}-content,
          ${t}-body,
          ${t}-confirm-body-wrapper`]:{display:"flex",flexDirection:"column",flex:"auto"},[`${t}-confirm-body`]:{marginBottom:"auto"}}}]},an=e=>{const{componentCls:t}=e;return{[`${t}-root`]:{[`${t}-wrap-rtl`]:{direction:"rtl",[`${t}-confirm-body`]:{direction:"rtl"}}}}},_e=e=>{const t=e.padding,o=e.fontSizeHeading5,n=e.lineHeightHeading5;return gt(e,{modalHeaderHeight:e.calc(e.calc(n).mul(o).equal()).add(e.calc(t).mul(2).equal()).equal(),modalFooterBorderColorSplit:e.colorSplit,modalFooterBorderStyle:e.lineType,modalFooterBorderWidth:e.lineWidth,modalCloseIconColor:e.colorIcon,modalCloseIconHoverColor:e.colorIconHover,modalCloseBtnSize:e.controlHeight,modalConfirmIconSize:e.fontHeight,modalTitleHeight:e.calc(e.titleFontSize).mul(e.titleLineHeight).equal()})},Ve=e=>({footerBg:"transparent",headerBg:e.colorBgElevated,titleLineHeight:e.lineHeightHeading5,titleFontSize:e.fontSizeHeading5,contentBg:e.colorBgElevated,titleColor:e.colorTextHeading,contentPadding:e.wireframe?0:`${S(e.paddingMD)} ${S(e.paddingContentHorizontalLG)}`,headerPadding:e.wireframe?`${S(e.padding)} ${S(e.paddingLG)}`:0,headerBorderBottom:e.wireframe?`${S(e.lineWidth)} ${e.lineType} ${e.colorSplit}`:"none",headerMarginBottom:e.wireframe?0:e.marginXS,bodyPadding:e.wireframe?e.paddingLG:0,footerPadding:e.wireframe?`${S(e.paddingXS)} ${S(e.padding)}`:0,footerBorderTop:e.wireframe?`${S(e.lineWidth)} ${e.lineType} ${e.colorSplit}`:"none",footerBorderRadius:e.wireframe?`0 0 ${S(e.borderRadiusLG)} ${S(e.borderRadiusLG)}`:0,footerMarginTop:e.wireframe?0:e.marginSM,confirmBodyPadding:e.wireframe?`${S(e.padding*2)} ${S(e.padding*2)} ${S(e.paddingLG)}`:0,confirmIconMarginInlineEnd:e.wireframe?e.margin:e.marginSM,confirmBtnsMarginTop:e.wireframe?e.marginLG:e.marginSM}),qe=ut("Modal",e=>{const t=_e(e);return[on(t),an(t),nn(t),jt(t,"zoom")]},Ve,{unitless:{titleLineHeight:!0}});var ln=function(e,t){var o={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(o[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(o[n[a]]=e[n[a]]);return o};let le;const rn=e=>{le={x:e.pageX,y:e.pageY},setTimeout(()=>{le=null},100)};Kt()&&document.documentElement.addEventListener("click",rn,!0);const Ge=e=>{var t;const{getPopupContainer:o,getPrefixCls:n,direction:a,modal:r}=l.useContext(ee),u=R=>{const{onCancel:j}=e;j==null||j(R)},d=R=>{const{onOk:j}=e;j==null||j(R)},{prefixCls:s,className:c,rootClassName:i,open:f,wrapClassName:b,centered:g,getContainer:h,focusTriggerAfterClose:C=!0,style:$,visible:y,width:m=520,footer:x,classNames:p,styles:N}=e,O=ln(e,["prefixCls","className","rootClassName","open","wrapClassName","centered","getContainer","focusTriggerAfterClose","style","visible","width","footer","classNames","styles"]),E=n("modal",s),z=n(),A=Re(E),[D,M,G]=qe(E,A),B=w(b,{[`${E}-centered`]:!!g,[`${E}-wrap-rtl`]:a==="rtl"}),I=x!==null&&l.createElement(We,Object.assign({},e,{onOk:d,onCancel:u})),[H,L]=Xt(pe(e),pe(r),{closable:!0,closeIcon:l.createElement(se,{className:`${E}-close-icon`}),closeIconRender:R=>De(E,R)}),W=Zt(`.${E}-content`),[K,U]=Ct("Modal",O.zIndex);return D(l.createElement(Ft,null,l.createElement(Bt,{status:!0,override:!0},l.createElement(vt.Provider,{value:U},l.createElement(Ae,Object.assign({width:m},O,{zIndex:K,getContainer:h===void 0?o:h,prefixCls:E,rootClassName:w(M,i,G,A),footer:I,visible:f??y,mousePosition:(t=O.mousePosition)!==null&&t!==void 0?t:le,onClose:u,closable:H,closeIcon:L,focusTriggerAfterClose:C,transitionName:k(z,"zoom",e.transitionName),maskTransitionName:k(z,"fade",e.maskTransitionName),className:w(M,c,r==null?void 0:r.className),style:Object.assign(Object.assign({},r==null?void 0:r.style),$),classNames:Object.assign(Object.assign(Object.assign({},r==null?void 0:r.classNames),p),{wrapper:w(B,p==null?void 0:p.wrapper)}),styles:Object.assign(Object.assign({},r==null?void 0:r.styles),N),panelRef:W}))))))},sn=e=>{const{componentCls:t,titleFontSize:o,titleLineHeight:n,modalConfirmIconSize:a,fontSize:r,lineHeight:u,modalTitleHeight:d,fontHeight:s,confirmBodyPadding:c}=e,i=`${t}-confirm`;return{[i]:{"&-rtl":{direction:"rtl"},[`${e.antCls}-modal-header`]:{display:"none"},[`${i}-body-wrapper`]:Object.assign({},yt()),[`&${t} ${t}-body`]:{padding:c},[`${i}-body`]:{display:"flex",flexWrap:"nowrap",alignItems:"start",[`> ${e.iconCls}`]:{flex:"none",fontSize:a,marginInlineEnd:e.confirmIconMarginInlineEnd,marginTop:e.calc(e.calc(s).sub(a).equal()).div(2).equal()},[`&-has-title > ${e.iconCls}`]:{marginTop:e.calc(e.calc(d).sub(a).equal()).div(2).equal()}},[`${i}-paragraph`]:{display:"flex",flexDirection:"column",flex:"auto",rowGap:e.marginXS},[`${e.iconCls} + ${i}-paragraph`]:{maxWidth:`calc(100% - ${S(e.calc(e.modalConfirmIconSize).add(e.marginSM).equal())})`},[`${i}-title`]:{color:e.colorTextHeading,fontWeight:e.fontWeightStrong,fontSize:o,lineHeight:n},[`${i}-content`]:{color:e.colorText,fontSize:r,lineHeight:u},[`${i}-btns`]:{textAlign:"end",marginTop:e.confirmBtnsMarginTop,[`${e.antCls}-btn + ${e.antCls}-btn`]:{marginBottom:0,marginInlineStart:e.marginXS}}},[`${i}-error ${i}-body > ${e.iconCls}`]:{color:e.colorError},[`${i}-warning ${i}-body > ${e.iconCls},
        ${i}-confirm ${i}-body > ${e.iconCls}`]:{color:e.colorWarning},[`${i}-info ${i}-body > ${e.iconCls}`]:{color:e.colorInfo},[`${i}-success ${i}-body > ${e.iconCls}`]:{color:e.colorSuccess}}},cn=bt(["Modal","confirm"],e=>{const t=_e(e);return[sn(t)]},Ve,{order:-1e3});var dn=function(e,t){var o={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(o[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(o[n[a]]=e[n[a]]);return o};function Ue(e){const{prefixCls:t,icon:o,okText:n,cancelText:a,confirmPrefixCls:r,type:u,okCancel:d,footer:s,locale:c}=e,i=dn(e,["prefixCls","icon","okText","cancelText","confirmPrefixCls","type","okCancel","footer","locale"]);let f=o;if(!o&&o!==null)switch(u){case"info":f=l.createElement($t,null);break;case"success":f=l.createElement(ht,null);break;case"error":f=l.createElement(pt,null);break;default:f=l.createElement(xt,null)}const b=d??u==="confirm",g=e.autoFocusButton===null?!1:e.autoFocusButton||"ok",[h]=ce("Modal"),C=c||h,$=n||(b?C==null?void 0:C.okText:C==null?void 0:C.justOkText),y=a||(C==null?void 0:C.cancelText),m=Object.assign({autoFocusButton:g,cancelTextLocale:y,okTextLocale:$,mergedOkCancel:b},i),x=l.useMemo(()=>m,V(Object.values(m))),p=l.createElement(l.Fragment,null,l.createElement(Ce,null),l.createElement(ve,null)),N=e.title!==void 0&&e.title!==null,O=`${r}-body`;return l.createElement("div",{className:`${r}-body-wrapper`},l.createElement("div",{className:w(O,{[`${O}-has-title`]:N})},f,l.createElement("div",{className:`${r}-paragraph`},N&&l.createElement("span",{className:`${r}-title`},e.title),l.createElement("div",{className:`${r}-content`},e.content))),s===void 0||typeof s=="function"?l.createElement(Fe,{value:x},l.createElement("div",{className:`${r}-btns`},typeof s=="function"?s(p,{OkBtn:ve,CancelBtn:Ce}):p)):s,l.createElement(cn,{prefixCls:t}))}const un=e=>{const{close:t,zIndex:o,afterClose:n,open:a,keyboard:r,centered:u,getContainer:d,maskStyle:s,direction:c,prefixCls:i,wrapClassName:f,rootPrefixCls:b,bodyStyle:g,closable:h=!1,closeIcon:C,modalRender:$,focusTriggerAfterClose:y,onConfirm:m,styles:x}=e,p=`${i}-confirm`,N=e.width||416,O=e.style||{},E=e.mask===void 0?!0:e.mask,z=e.maskClosable===void 0?!1:e.maskClosable,A=w(p,`${p}-${e.type}`,{[`${p}-rtl`]:c==="rtl"},e.className),[,D]=Ot(),M=l.useMemo(()=>o!==void 0?o:D.zIndexPopupBase+Et,[o,D]);return l.createElement(Ge,{prefixCls:i,className:A,wrapClassName:w({[`${p}-centered`]:!!e.centered},f),onCancel:()=>{t==null||t({triggerCancel:!0}),m==null||m(!1)},open:a,title:"",footer:null,transitionName:k(b||"","zoom",e.transitionName),maskTransitionName:k(b||"","fade",e.maskTransitionName),mask:E,maskClosable:z,style:O,styles:Object.assign({body:g,mask:s},x),width:N,zIndex:M,afterClose:n,keyboard:r,centered:u,getContainer:d,closable:h,closeIcon:C,modalRender:$,focusTriggerAfterClose:y},l.createElement(Ue,Object.assign({},e,{confirmPrefixCls:p})))},fn=e=>{const{rootPrefixCls:t,iconPrefixCls:o,direction:n,theme:a}=e;return l.createElement(je,{prefixCls:t,iconPrefixCls:o,direction:n,theme:a},l.createElement(un,Object.assign({},e)))},Xe=fn,X=[];let Ke="";function Qe(){return Ke}const mn=e=>{var t,o;const{prefixCls:n,getContainer:a,direction:r}=e,u=Te(),d=l.useContext(ee),s=Qe()||d.getPrefixCls(),c=n||`${s}-modal`;let i=a;return i===!1&&(i=void 0),v.createElement(Xe,Object.assign({},e,{rootPrefixCls:s,prefixCls:c,iconPrefixCls:d.iconPrefixCls,theme:d.theme,direction:r??d.direction,locale:(o=(t=d.locale)===null||t===void 0?void 0:t.Modal)!==null&&o!==void 0?o:u,getContainer:i}))};function Z(e){const t=wt(),o=document.createDocumentFragment();let n=Object.assign(Object.assign({},e),{close:d,open:!0}),a;function r(){for(var c=arguments.length,i=new Array(c),f=0;f<c;f++)i[f]=arguments[f];const b=i.some(g=>g&&g.triggerCancel);e.onCancel&&b&&e.onCancel.apply(e,[()=>{}].concat(V(i.slice(1))));for(let g=0;g<X.length;g++)if(X[g]===d){X.splice(g,1);break}St(o)}function u(c){clearTimeout(a),a=setTimeout(()=>{const i=t.getPrefixCls(void 0,Qe()),f=t.getIconPrefixCls(),b=t.getTheme(),g=v.createElement(mn,Object.assign({},c));Pt(v.createElement(je,{prefixCls:i,iconPrefixCls:f,theme:b},t.holderRender?t.holderRender(g):g),o)})}function d(){for(var c=arguments.length,i=new Array(c),f=0;f<c;f++)i[f]=arguments[f];n=Object.assign(Object.assign({},n),{open:!1,afterClose:()=>{typeof e.afterClose=="function"&&e.afterClose(),r.apply(this,i)}}),n.visible&&delete n.visible,u(n)}function s(c){typeof c=="function"?n=c(n):n=Object.assign(Object.assign({},n),c),u(n)}return u(n),X.push(d),{destroy:d,update:s}}function Ze(e){return Object.assign(Object.assign({},e),{type:"warning"})}function Ye(e){return Object.assign(Object.assign({},e),{type:"info"})}function Je(e){return Object.assign(Object.assign({},e),{type:"success"})}function ke(e){return Object.assign(Object.assign({},e),{type:"error"})}function et(e){return Object.assign(Object.assign({},e),{type:"confirm"})}function gn(e){let{rootPrefixCls:t}=e;Ke=t}var Cn=function(e,t){var o={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(o[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(o[n[a]]=e[n[a]]);return o};const vn=(e,t)=>{var o,{afterClose:n,config:a}=e,r=Cn(e,["afterClose","config"]);const[u,d]=l.useState(!0),[s,c]=l.useState(a),{direction:i,getPrefixCls:f}=l.useContext(ee),b=f("modal"),g=f(),h=()=>{var m;n(),(m=s.afterClose)===null||m===void 0||m.call(s)},C=function(){d(!1);for(var m=arguments.length,x=new Array(m),p=0;p<m;p++)x[p]=arguments[p];const N=x.some(O=>O&&O.triggerCancel);s.onCancel&&N&&s.onCancel.apply(s,[()=>{}].concat(V(x.slice(1))))};l.useImperativeHandle(t,()=>({destroy:C,update:m=>{c(x=>Object.assign(Object.assign({},x),m))}}));const $=(o=s.okCancel)!==null&&o!==void 0?o:s.type==="confirm",[y]=ce("Modal",Nt.Modal);return l.createElement(Xe,Object.assign({prefixCls:b,rootPrefixCls:g},s,{close:C,open:u,afterClose:h,okText:s.okText||($?y==null?void 0:y.okText:y==null?void 0:y.justOkText),direction:s.direction||i,cancelText:s.cancelText||(y==null?void 0:y.cancelText)},r))},bn=l.forwardRef(vn);let we=0;const yn=l.memo(l.forwardRef((e,t)=>{const[o,n]=Ht();return l.useImperativeHandle(t,()=>({patchElement:n}),[]),l.createElement(l.Fragment,null,o)}));function xn(){const e=l.useRef(null),[t,o]=l.useState([]);l.useEffect(()=>{t.length&&(V(t).forEach(u=>{u()}),o([]))},[t]);const n=l.useCallback(r=>function(d){var s;we+=1;const c=l.createRef();let i;const f=new Promise($=>{i=$});let b=!1,g;const h=l.createElement(bn,{key:`modal-${we}`,config:r(d),ref:c,afterClose:()=>{g==null||g()},isSilent:()=>b,onConfirm:$=>{i($)}});return g=(s=e.current)===null||s===void 0?void 0:s.patchElement(h),g&&X.push(g),{destroy:()=>{function $(){var y;(y=c.current)===null||y===void 0||y.destroy()}c.current?$():o(y=>[].concat(V(y),[$]))},update:$=>{function y(){var m;(m=c.current)===null||m===void 0||m.update($)}c.current?y():o(m=>[].concat(V(m),[y]))},then:$=>(b=!0,f.then($))}},[]);return[l.useMemo(()=>({info:n(Ye),success:n(Je),error:n(ke),warning:n(Ze),confirm:n(et)}),[]),l.createElement(yn,{key:"modal-holder",ref:e})]}var pn=function(e,t){var o={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(o[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(o[n[a]]=e[n[a]]);return o};const hn=e=>{const{prefixCls:t,className:o,closeIcon:n,closable:a,type:r,title:u,children:d,footer:s}=e,c=pn(e,["prefixCls","className","closeIcon","closable","type","title","children","footer"]),{getPrefixCls:i}=l.useContext(ee),f=i(),b=t||i("modal"),g=Re(f),[h,C,$]=qe(b,g),y=`${b}-confirm`;let m={};return r?m={closable:a??!1,title:"",footer:"",children:l.createElement(Ue,Object.assign({},e,{prefixCls:b,confirmPrefixCls:y,rootPrefixCls:f,content:d}))}:m={closable:a??!0,title:u,footer:s!==null&&l.createElement(We,Object.assign({},e)),children:d},h(l.createElement(He,Object.assign({prefixCls:b,className:w(C,`${b}-pure-panel`,r&&y,r&&`${y}-${r}`,o,$,g)},c,{closeIcon:De(b,n),closable:a},m)))},$n=zt(hn);function tt(e){return Z(Ze(e))}const F=Ge;F.useModal=xn;F.info=function(t){return Z(Ye(t))};F.success=function(t){return Z(Je(t))};F.error=function(t){return Z(ke(t))};F.warning=tt;F.warn=tt;F.confirm=function(t){return Z(et(t))};F.destroyAll=function(){for(;X.length;){const t=X.pop();t&&t()}};F.config=gn;F._InternalPanelDoNotUseOrYouWillBeFired=$n;export{Ae as D,F as M,nn as g,tn as i};