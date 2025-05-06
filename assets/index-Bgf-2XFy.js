(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const o of a)if(o.type==="childList")for(const u of o.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&r(u)}).observe(document,{childList:!0,subtree:!0});function t(a){const o={};return a.integrity&&(o.integrity=a.integrity),a.referrerPolicy&&(o.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?o.credentials="include":a.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(a){if(a.ep)return;a.ep=!0;const o=t(a);fetch(a.href,o)}})();function Mx(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var ty={exports:{}},Wc={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Rb;function Lx(){if(Rb)return Wc;Rb=1;var n=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function t(r,a,o){var u=null;if(o!==void 0&&(u=""+o),a.key!==void 0&&(u=""+a.key),"key"in a){o={};for(var d in a)d!=="key"&&(o[d]=a[d])}else o=a;return a=o.ref,{$$typeof:n,type:r,key:u,ref:a!==void 0?a:null,props:o}}return Wc.Fragment=e,Wc.jsx=t,Wc.jsxs=t,Wc}var Cb;function Ux(){return Cb||(Cb=1,ty.exports=Lx()),ty.exports}var W=Ux(),ny={exports:{}},Yc={},ry={exports:{}},iy={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Db;function Bx(){return Db||(Db=1,function(n){function e(he,be){var Te=he.length;he.push(be);e:for(;0<Te;){var Ne=Te-1>>>1,O=he[Ne];if(0<a(O,be))he[Ne]=be,he[Te]=O,Te=Ne;else break e}}function t(he){return he.length===0?null:he[0]}function r(he){if(he.length===0)return null;var be=he[0],Te=he.pop();if(Te!==be){he[0]=Te;e:for(var Ne=0,O=he.length,ie=O>>>1;Ne<ie;){var ge=2*(Ne+1)-1,me=he[ge],fe=ge+1,Ce=he[fe];if(0>a(me,Te))fe<O&&0>a(Ce,me)?(he[Ne]=Ce,he[fe]=Te,Ne=fe):(he[Ne]=me,he[ge]=Te,Ne=ge);else if(fe<O&&0>a(Ce,Te))he[Ne]=Ce,he[fe]=Te,Ne=fe;else break e}}return be}function a(he,be){var Te=he.sortIndex-be.sortIndex;return Te!==0?Te:he.id-be.id}if(n.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var o=performance;n.unstable_now=function(){return o.now()}}else{var u=Date,d=u.now();n.unstable_now=function(){return u.now()-d}}var m=[],p=[],y=1,v=null,w=3,S=!1,P=!1,U=!1,L=typeof setTimeout=="function"?setTimeout:null,H=typeof clearTimeout=="function"?clearTimeout:null,Y=typeof setImmediate<"u"?setImmediate:null;function $(he){for(var be=t(p);be!==null;){if(be.callback===null)r(p);else if(be.startTime<=he)r(p),be.sortIndex=be.expirationTime,e(m,be);else break;be=t(p)}}function oe(he){if(U=!1,$(he),!P)if(t(m)!==null)P=!0,Nt();else{var be=t(p);be!==null&&It(oe,be.startTime-he)}}var ae=!1,le=-1,D=5,R=-1;function A(){return!(n.unstable_now()-R<D)}function x(){if(ae){var he=n.unstable_now();R=he;var be=!0;try{e:{P=!1,U&&(U=!1,H(le),le=-1),S=!0;var Te=w;try{t:{for($(he),v=t(m);v!==null&&!(v.expirationTime>he&&A());){var Ne=v.callback;if(typeof Ne=="function"){v.callback=null,w=v.priorityLevel;var O=Ne(v.expirationTime<=he);if(he=n.unstable_now(),typeof O=="function"){v.callback=O,$(he),be=!0;break t}v===t(m)&&r(m),$(he)}else r(m);v=t(m)}if(v!==null)be=!0;else{var ie=t(p);ie!==null&&It(oe,ie.startTime-he),be=!1}}break e}finally{v=null,w=Te,S=!1}be=void 0}}finally{be?V():ae=!1}}}var V;if(typeof Y=="function")V=function(){Y(x)};else if(typeof MessageChannel<"u"){var z=new MessageChannel,N=z.port2;z.port1.onmessage=x,V=function(){N.postMessage(null)}}else V=function(){L(x,0)};function Nt(){ae||(ae=!0,V())}function It(he,be){le=L(function(){he(n.unstable_now())},be)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(he){he.callback=null},n.unstable_continueExecution=function(){P||S||(P=!0,Nt())},n.unstable_forceFrameRate=function(he){0>he||125<he?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):D=0<he?Math.floor(1e3/he):5},n.unstable_getCurrentPriorityLevel=function(){return w},n.unstable_getFirstCallbackNode=function(){return t(m)},n.unstable_next=function(he){switch(w){case 1:case 2:case 3:var be=3;break;default:be=w}var Te=w;w=be;try{return he()}finally{w=Te}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(he,be){switch(he){case 1:case 2:case 3:case 4:case 5:break;default:he=3}var Te=w;w=he;try{return be()}finally{w=Te}},n.unstable_scheduleCallback=function(he,be,Te){var Ne=n.unstable_now();switch(typeof Te=="object"&&Te!==null?(Te=Te.delay,Te=typeof Te=="number"&&0<Te?Ne+Te:Ne):Te=Ne,he){case 1:var O=-1;break;case 2:O=250;break;case 5:O=1073741823;break;case 4:O=1e4;break;default:O=5e3}return O=Te+O,he={id:y++,callback:be,priorityLevel:he,startTime:Te,expirationTime:O,sortIndex:-1},Te>Ne?(he.sortIndex=Te,e(p,he),t(m)===null&&he===t(p)&&(U?(H(le),le=-1):U=!0,It(oe,Te-Ne))):(he.sortIndex=O,e(m,he),P||S||(P=!0,Nt())),he},n.unstable_shouldYield=A,n.unstable_wrapCallback=function(he){var be=w;return function(){var Te=w;w=be;try{return he.apply(this,arguments)}finally{w=Te}}}}(iy)),iy}var Pb;function zx(){return Pb||(Pb=1,ry.exports=Bx()),ry.exports}var sy={exports:{}},xe={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xb;function Fx(){if(xb)return xe;xb=1;var n=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),o=Symbol.for("react.consumer"),u=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),y=Symbol.for("react.lazy"),v=Symbol.iterator;function w(O){return O===null||typeof O!="object"?null:(O=v&&O[v]||O["@@iterator"],typeof O=="function"?O:null)}var S={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},P=Object.assign,U={};function L(O,ie,ge){this.props=O,this.context=ie,this.refs=U,this.updater=ge||S}L.prototype.isReactComponent={},L.prototype.setState=function(O,ie){if(typeof O!="object"&&typeof O!="function"&&O!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,O,ie,"setState")},L.prototype.forceUpdate=function(O){this.updater.enqueueForceUpdate(this,O,"forceUpdate")};function H(){}H.prototype=L.prototype;function Y(O,ie,ge){this.props=O,this.context=ie,this.refs=U,this.updater=ge||S}var $=Y.prototype=new H;$.constructor=Y,P($,L.prototype),$.isPureReactComponent=!0;var oe=Array.isArray,ae={H:null,A:null,T:null,S:null},le=Object.prototype.hasOwnProperty;function D(O,ie,ge,me,fe,Ce){return ge=Ce.ref,{$$typeof:n,type:O,key:ie,ref:ge!==void 0?ge:null,props:Ce}}function R(O,ie){return D(O.type,ie,void 0,void 0,void 0,O.props)}function A(O){return typeof O=="object"&&O!==null&&O.$$typeof===n}function x(O){var ie={"=":"=0",":":"=2"};return"$"+O.replace(/[=:]/g,function(ge){return ie[ge]})}var V=/\/+/g;function z(O,ie){return typeof O=="object"&&O!==null&&O.key!=null?x(""+O.key):ie.toString(36)}function N(){}function Nt(O){switch(O.status){case"fulfilled":return O.value;case"rejected":throw O.reason;default:switch(typeof O.status=="string"?O.then(N,N):(O.status="pending",O.then(function(ie){O.status==="pending"&&(O.status="fulfilled",O.value=ie)},function(ie){O.status==="pending"&&(O.status="rejected",O.reason=ie)})),O.status){case"fulfilled":return O.value;case"rejected":throw O.reason}}throw O}function It(O,ie,ge,me,fe){var Ce=typeof O;(Ce==="undefined"||Ce==="boolean")&&(O=null);var Re=!1;if(O===null)Re=!0;else switch(Ce){case"bigint":case"string":case"number":Re=!0;break;case"object":switch(O.$$typeof){case n:case e:Re=!0;break;case y:return Re=O._init,It(Re(O._payload),ie,ge,me,fe)}}if(Re)return fe=fe(O),Re=me===""?"."+z(O,0):me,oe(fe)?(ge="",Re!=null&&(ge=Re.replace(V,"$&/")+"/"),It(fe,ie,ge,"",function(Ze){return Ze})):fe!=null&&(A(fe)&&(fe=R(fe,ge+(fe.key==null||O&&O.key===fe.key?"":(""+fe.key).replace(V,"$&/")+"/")+Re)),ie.push(fe)),1;Re=0;var ut=me===""?".":me+":";if(oe(O))for(var Me=0;Me<O.length;Me++)me=O[Me],Ce=ut+z(me,Me),Re+=It(me,ie,ge,Ce,fe);else if(Me=w(O),typeof Me=="function")for(O=Me.call(O),Me=0;!(me=O.next()).done;)me=me.value,Ce=ut+z(me,Me++),Re+=It(me,ie,ge,Ce,fe);else if(Ce==="object"){if(typeof O.then=="function")return It(Nt(O),ie,ge,me,fe);throw ie=String(O),Error("Objects are not valid as a React child (found: "+(ie==="[object Object]"?"object with keys {"+Object.keys(O).join(", ")+"}":ie)+"). If you meant to render a collection of children, use an array instead.")}return Re}function he(O,ie,ge){if(O==null)return O;var me=[],fe=0;return It(O,me,"","",function(Ce){return ie.call(ge,Ce,fe++)}),me}function be(O){if(O._status===-1){var ie=O._result;ie=ie(),ie.then(function(ge){(O._status===0||O._status===-1)&&(O._status=1,O._result=ge)},function(ge){(O._status===0||O._status===-1)&&(O._status=2,O._result=ge)}),O._status===-1&&(O._status=0,O._result=ie)}if(O._status===1)return O._result.default;throw O._result}var Te=typeof reportError=="function"?reportError:function(O){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var ie=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof O=="object"&&O!==null&&typeof O.message=="string"?String(O.message):String(O),error:O});if(!window.dispatchEvent(ie))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",O);return}console.error(O)};function Ne(){}return xe.Children={map:he,forEach:function(O,ie,ge){he(O,function(){ie.apply(this,arguments)},ge)},count:function(O){var ie=0;return he(O,function(){ie++}),ie},toArray:function(O){return he(O,function(ie){return ie})||[]},only:function(O){if(!A(O))throw Error("React.Children.only expected to receive a single React element child.");return O}},xe.Component=L,xe.Fragment=t,xe.Profiler=a,xe.PureComponent=Y,xe.StrictMode=r,xe.Suspense=m,xe.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=ae,xe.act=function(){throw Error("act(...) is not supported in production builds of React.")},xe.cache=function(O){return function(){return O.apply(null,arguments)}},xe.cloneElement=function(O,ie,ge){if(O==null)throw Error("The argument must be a React element, but you passed "+O+".");var me=P({},O.props),fe=O.key,Ce=void 0;if(ie!=null)for(Re in ie.ref!==void 0&&(Ce=void 0),ie.key!==void 0&&(fe=""+ie.key),ie)!le.call(ie,Re)||Re==="key"||Re==="__self"||Re==="__source"||Re==="ref"&&ie.ref===void 0||(me[Re]=ie[Re]);var Re=arguments.length-2;if(Re===1)me.children=ge;else if(1<Re){for(var ut=Array(Re),Me=0;Me<Re;Me++)ut[Me]=arguments[Me+2];me.children=ut}return D(O.type,fe,void 0,void 0,Ce,me)},xe.createContext=function(O){return O={$$typeof:u,_currentValue:O,_currentValue2:O,_threadCount:0,Provider:null,Consumer:null},O.Provider=O,O.Consumer={$$typeof:o,_context:O},O},xe.createElement=function(O,ie,ge){var me,fe={},Ce=null;if(ie!=null)for(me in ie.key!==void 0&&(Ce=""+ie.key),ie)le.call(ie,me)&&me!=="key"&&me!=="__self"&&me!=="__source"&&(fe[me]=ie[me]);var Re=arguments.length-2;if(Re===1)fe.children=ge;else if(1<Re){for(var ut=Array(Re),Me=0;Me<Re;Me++)ut[Me]=arguments[Me+2];fe.children=ut}if(O&&O.defaultProps)for(me in Re=O.defaultProps,Re)fe[me]===void 0&&(fe[me]=Re[me]);return D(O,Ce,void 0,void 0,null,fe)},xe.createRef=function(){return{current:null}},xe.forwardRef=function(O){return{$$typeof:d,render:O}},xe.isValidElement=A,xe.lazy=function(O){return{$$typeof:y,_payload:{_status:-1,_result:O},_init:be}},xe.memo=function(O,ie){return{$$typeof:p,type:O,compare:ie===void 0?null:ie}},xe.startTransition=function(O){var ie=ae.T,ge={};ae.T=ge;try{var me=O(),fe=ae.S;fe!==null&&fe(ge,me),typeof me=="object"&&me!==null&&typeof me.then=="function"&&me.then(Ne,Te)}catch(Ce){Te(Ce)}finally{ae.T=ie}},xe.unstable_useCacheRefresh=function(){return ae.H.useCacheRefresh()},xe.use=function(O){return ae.H.use(O)},xe.useActionState=function(O,ie,ge){return ae.H.useActionState(O,ie,ge)},xe.useCallback=function(O,ie){return ae.H.useCallback(O,ie)},xe.useContext=function(O){return ae.H.useContext(O)},xe.useDebugValue=function(){},xe.useDeferredValue=function(O,ie){return ae.H.useDeferredValue(O,ie)},xe.useEffect=function(O,ie){return ae.H.useEffect(O,ie)},xe.useId=function(){return ae.H.useId()},xe.useImperativeHandle=function(O,ie,ge){return ae.H.useImperativeHandle(O,ie,ge)},xe.useInsertionEffect=function(O,ie){return ae.H.useInsertionEffect(O,ie)},xe.useLayoutEffect=function(O,ie){return ae.H.useLayoutEffect(O,ie)},xe.useMemo=function(O,ie){return ae.H.useMemo(O,ie)},xe.useOptimistic=function(O,ie){return ae.H.useOptimistic(O,ie)},xe.useReducer=function(O,ie,ge){return ae.H.useReducer(O,ie,ge)},xe.useRef=function(O){return ae.H.useRef(O)},xe.useState=function(O){return ae.H.useState(O)},xe.useSyncExternalStore=function(O,ie,ge){return ae.H.useSyncExternalStore(O,ie,ge)},xe.useTransition=function(){return ae.H.useTransition()},xe.version="19.0.0",xe}var Nb;function Dv(){return Nb||(Nb=1,sy.exports=Fx()),sy.exports}var ay={exports:{}},wn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ob;function jx(){if(Ob)return wn;Ob=1;var n=Dv();function e(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var y=2;y<arguments.length;y++)p+="&args[]="+encodeURIComponent(arguments[y])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function t(){}var r={d:{f:t,r:function(){throw Error(e(522))},D:t,C:t,L:t,m:t,X:t,S:t,M:t},p:0,findDOMNode:null},a=Symbol.for("react.portal");function o(m,p,y){var v=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:a,key:v==null?null:""+v,children:m,containerInfo:p,implementation:y}}var u=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return wn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,wn.createPortal=function(m,p){var y=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(e(299));return o(m,p,null,y)},wn.flushSync=function(m){var p=u.T,y=r.p;try{if(u.T=null,r.p=2,m)return m()}finally{u.T=p,r.p=y,r.d.f()}},wn.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,r.d.C(m,p))},wn.prefetchDNS=function(m){typeof m=="string"&&r.d.D(m)},wn.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var y=p.as,v=d(y,p.crossOrigin),w=typeof p.integrity=="string"?p.integrity:void 0,S=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;y==="style"?r.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:v,integrity:w,fetchPriority:S}):y==="script"&&r.d.X(m,{crossOrigin:v,integrity:w,fetchPriority:S,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},wn.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var y=d(p.as,p.crossOrigin);r.d.M(m,{crossOrigin:y,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&r.d.M(m)},wn.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var y=p.as,v=d(y,p.crossOrigin);r.d.L(m,y,{crossOrigin:v,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},wn.preloadModule=function(m,p){if(typeof m=="string")if(p){var y=d(p.as,p.crossOrigin);r.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:y,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else r.d.m(m)},wn.requestFormReset=function(m){r.d.r(m)},wn.unstable_batchedUpdates=function(m,p){return m(p)},wn.useFormState=function(m,p,y){return u.H.useFormState(m,p,y)},wn.useFormStatus=function(){return u.H.useHostTransitionStatus()},wn.version="19.0.0",wn}var kb;function qx(){if(kb)return ay.exports;kb=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}return n(),ay.exports=jx(),ay.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Vb;function Hx(){if(Vb)return Yc;Vb=1;var n=zx(),e=Dv(),t=qx();function r(i){var s="https://react.dev/errors/"+i;if(1<arguments.length){s+="?args[]="+encodeURIComponent(arguments[1]);for(var l=2;l<arguments.length;l++)s+="&args[]="+encodeURIComponent(arguments[l])}return"Minified React error #"+i+"; visit "+s+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function a(i){return!(!i||i.nodeType!==1&&i.nodeType!==9&&i.nodeType!==11)}var o=Symbol.for("react.element"),u=Symbol.for("react.transitional.element"),d=Symbol.for("react.portal"),m=Symbol.for("react.fragment"),p=Symbol.for("react.strict_mode"),y=Symbol.for("react.profiler"),v=Symbol.for("react.provider"),w=Symbol.for("react.consumer"),S=Symbol.for("react.context"),P=Symbol.for("react.forward_ref"),U=Symbol.for("react.suspense"),L=Symbol.for("react.suspense_list"),H=Symbol.for("react.memo"),Y=Symbol.for("react.lazy"),$=Symbol.for("react.offscreen"),oe=Symbol.for("react.memo_cache_sentinel"),ae=Symbol.iterator;function le(i){return i===null||typeof i!="object"?null:(i=ae&&i[ae]||i["@@iterator"],typeof i=="function"?i:null)}var D=Symbol.for("react.client.reference");function R(i){if(i==null)return null;if(typeof i=="function")return i.$$typeof===D?null:i.displayName||i.name||null;if(typeof i=="string")return i;switch(i){case m:return"Fragment";case d:return"Portal";case y:return"Profiler";case p:return"StrictMode";case U:return"Suspense";case L:return"SuspenseList"}if(typeof i=="object")switch(i.$$typeof){case S:return(i.displayName||"Context")+".Provider";case w:return(i._context.displayName||"Context")+".Consumer";case P:var s=i.render;return i=i.displayName,i||(i=s.displayName||s.name||"",i=i!==""?"ForwardRef("+i+")":"ForwardRef"),i;case H:return s=i.displayName||null,s!==null?s:R(i.type)||"Memo";case Y:s=i._payload,i=i._init;try{return R(i(s))}catch{}}return null}var A=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,x=Object.assign,V,z;function N(i){if(V===void 0)try{throw Error()}catch(l){var s=l.stack.trim().match(/\n( *(at )?)/);V=s&&s[1]||"",z=-1<l.stack.indexOf(`
    at`)?" (<anonymous>)":-1<l.stack.indexOf("@")?"@unknown:0:0":""}return`
`+V+i+z}var Nt=!1;function It(i,s){if(!i||Nt)return"";Nt=!0;var l=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var c={DetermineComponentFrameRoot:function(){try{if(s){var ne=function(){throw Error()};if(Object.defineProperty(ne.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(ne,[])}catch(X){var G=X}Reflect.construct(i,[],ne)}else{try{ne.call()}catch(X){G=X}i.call(ne.prototype)}}else{try{throw Error()}catch(X){G=X}(ne=i())&&typeof ne.catch=="function"&&ne.catch(function(){})}}catch(X){if(X&&G&&typeof X.stack=="string")return[X.stack,G.stack]}return[null,null]}};c.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var f=Object.getOwnPropertyDescriptor(c.DetermineComponentFrameRoot,"name");f&&f.configurable&&Object.defineProperty(c.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var g=c.DetermineComponentFrameRoot(),T=g[0],b=g[1];if(T&&b){var C=T.split(`
`),M=b.split(`
`);for(f=c=0;c<C.length&&!C[c].includes("DetermineComponentFrameRoot");)c++;for(;f<M.length&&!M[f].includes("DetermineComponentFrameRoot");)f++;if(c===C.length||f===M.length)for(c=C.length-1,f=M.length-1;1<=c&&0<=f&&C[c]!==M[f];)f--;for(;1<=c&&0<=f;c--,f--)if(C[c]!==M[f]){if(c!==1||f!==1)do if(c--,f--,0>f||C[c]!==M[f]){var J=`
`+C[c].replace(" at new "," at ");return i.displayName&&J.includes("<anonymous>")&&(J=J.replace("<anonymous>",i.displayName)),J}while(1<=c&&0<=f);break}}}finally{Nt=!1,Error.prepareStackTrace=l}return(l=i?i.displayName||i.name:"")?N(l):""}function he(i){switch(i.tag){case 26:case 27:case 5:return N(i.type);case 16:return N("Lazy");case 13:return N("Suspense");case 19:return N("SuspenseList");case 0:case 15:return i=It(i.type,!1),i;case 11:return i=It(i.type.render,!1),i;case 1:return i=It(i.type,!0),i;default:return""}}function be(i){try{var s="";do s+=he(i),i=i.return;while(i);return s}catch(l){return`
Error generating stack: `+l.message+`
`+l.stack}}function Te(i){var s=i,l=i;if(i.alternate)for(;s.return;)s=s.return;else{i=s;do s=i,(s.flags&4098)!==0&&(l=s.return),i=s.return;while(i)}return s.tag===3?l:null}function Ne(i){if(i.tag===13){var s=i.memoizedState;if(s===null&&(i=i.alternate,i!==null&&(s=i.memoizedState)),s!==null)return s.dehydrated}return null}function O(i){if(Te(i)!==i)throw Error(r(188))}function ie(i){var s=i.alternate;if(!s){if(s=Te(i),s===null)throw Error(r(188));return s!==i?null:i}for(var l=i,c=s;;){var f=l.return;if(f===null)break;var g=f.alternate;if(g===null){if(c=f.return,c!==null){l=c;continue}break}if(f.child===g.child){for(g=f.child;g;){if(g===l)return O(f),i;if(g===c)return O(f),s;g=g.sibling}throw Error(r(188))}if(l.return!==c.return)l=f,c=g;else{for(var T=!1,b=f.child;b;){if(b===l){T=!0,l=f,c=g;break}if(b===c){T=!0,c=f,l=g;break}b=b.sibling}if(!T){for(b=g.child;b;){if(b===l){T=!0,l=g,c=f;break}if(b===c){T=!0,c=g,l=f;break}b=b.sibling}if(!T)throw Error(r(189))}}if(l.alternate!==c)throw Error(r(190))}if(l.tag!==3)throw Error(r(188));return l.stateNode.current===l?i:s}function ge(i){var s=i.tag;if(s===5||s===26||s===27||s===6)return i;for(i=i.child;i!==null;){if(s=ge(i),s!==null)return s;i=i.sibling}return null}var me=Array.isArray,fe=t.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Ce={pending:!1,data:null,method:null,action:null},Re=[],ut=-1;function Me(i){return{current:i}}function Ze(i){0>ut||(i.current=Re[ut],Re[ut]=null,ut--)}function Ke(i,s){ut++,Re[ut]=i.current,i.current=s}var Ut=Me(null),Jt=Me(null),rr=Me(null),as=Me(null);function os(i,s){switch(Ke(rr,s),Ke(Jt,i),Ke(Ut,null),i=s.nodeType,i){case 9:case 11:s=(s=s.documentElement)&&(s=s.namespaceURI)?nb(s):0;break;default:if(i=i===8?s.parentNode:s,s=i.tagName,i=i.namespaceURI)i=nb(i),s=rb(i,s);else switch(s){case"svg":s=1;break;case"math":s=2;break;default:s=0}}Ze(Ut),Ke(Ut,s)}function _i(){Ze(Ut),Ze(Jt),Ze(rr)}function Hu(i){i.memoizedState!==null&&Ke(as,i);var s=Ut.current,l=rb(s,i.type);s!==l&&(Ke(Jt,i),Ke(Ut,l))}function jo(i){Jt.current===i&&(Ze(Ut),Ze(Jt)),as.current===i&&(Ze(as),Hc._currentValue=Ce)}var qo=Object.prototype.hasOwnProperty,Aa=n.unstable_scheduleCallback,Ho=n.unstable_cancelCallback,rg=n.unstable_shouldYield,Gu=n.unstable_requestPaint,Ln=n.unstable_now,Cd=n.unstable_getCurrentPriorityLevel,Gt=n.unstable_ImmediatePriority,en=n.unstable_UserBlockingPriority,yi=n.unstable_NormalPriority,Dd=n.unstable_LowPriority,$u=n.unstable_IdlePriority,ig=n.log,Sa=n.unstable_setDisableYieldValue,ls=null,En=null;function Ku(i){if(En&&typeof En.onCommitFiberRoot=="function")try{En.onCommitFiberRoot(ls,i,void 0,(i.current.flags&128)===128)}catch{}}function Vr(i){if(typeof ig=="function"&&Sa(i),En&&typeof En.setStrictMode=="function")try{En.setStrictMode(ls,i)}catch{}}var Rn=Math.clz32?Math.clz32:xd,Qu=Math.log,Pd=Math.LN2;function xd(i){return i>>>=0,i===0?32:31-(Qu(i)/Pd|0)|0}var Mr=128,us=4194304;function Ir(i){var s=i&42;if(s!==0)return s;switch(i&-i){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i&4194176;case 4194304:case 8388608:case 16777216:case 33554432:return i&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return i}}function ir(i,s){var l=i.pendingLanes;if(l===0)return 0;var c=0,f=i.suspendedLanes,g=i.pingedLanes,T=i.warmLanes;i=i.finishedLanes!==0;var b=l&134217727;return b!==0?(l=b&~f,l!==0?c=Ir(l):(g&=b,g!==0?c=Ir(g):i||(T=b&~T,T!==0&&(c=Ir(T))))):(b=l&~f,b!==0?c=Ir(b):g!==0?c=Ir(g):i||(T=l&~T,T!==0&&(c=Ir(T)))),c===0?0:s!==0&&s!==c&&(s&f)===0&&(f=c&-c,T=s&-s,f>=T||f===32&&(T&4194176)!==0)?s:c}function cs(i,s){return(i.pendingLanes&~(i.suspendedLanes&~i.pingedLanes)&s)===0}function Go(i,s){switch(i){case 1:case 2:case 4:case 8:return s+250;case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return s+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Wu(){var i=Mr;return Mr<<=1,(Mr&4194176)===0&&(Mr=128),i}function hs(){var i=us;return us<<=1,(us&62914560)===0&&(us=4194304),i}function $o(i){for(var s=[],l=0;31>l;l++)s.push(i);return s}function Ot(i,s){i.pendingLanes|=s,s!==268435456&&(i.suspendedLanes=0,i.pingedLanes=0,i.warmLanes=0)}function Nd(i,s,l,c,f,g){var T=i.pendingLanes;i.pendingLanes=l,i.suspendedLanes=0,i.pingedLanes=0,i.warmLanes=0,i.expiredLanes&=l,i.entangledLanes&=l,i.errorRecoveryDisabledLanes&=l,i.shellSuspendCounter=0;var b=i.entanglements,C=i.expirationTimes,M=i.hiddenUpdates;for(l=T&~l;0<l;){var J=31-Rn(l),ne=1<<J;b[J]=0,C[J]=-1;var G=M[J];if(G!==null)for(M[J]=null,J=0;J<G.length;J++){var X=G[J];X!==null&&(X.lane&=-536870913)}l&=~ne}c!==0&&ds(i,c,0),g!==0&&f===0&&i.tag!==0&&(i.suspendedLanes|=g&~(T&~s))}function ds(i,s,l){i.pendingLanes|=s,i.suspendedLanes&=~s;var c=31-Rn(s);i.entangledLanes|=s,i.entanglements[c]=i.entanglements[c]|1073741824|l&4194218}function fs(i,s){var l=i.entangledLanes|=s;for(i=i.entanglements;l;){var c=31-Rn(l),f=1<<c;f&s|i[c]&s&&(i[c]|=s),l&=~f}}function Od(i){return i&=-i,2<i?8<i?(i&134217727)!==0?32:268435456:8:2}function kd(){var i=fe.p;return i!==0?i:(i=window.event,i===void 0?32:Tb(i.type))}function ms(i,s){var l=fe.p;try{return fe.p=i,s()}finally{fe.p=l}}var Lr=Math.random().toString(36).slice(2),tn="__reactFiber$"+Lr,$t="__reactProps$"+Lr,vi="__reactContainer$"+Lr,Ra="__reactEvents$"+Lr,Ko="__reactListeners$"+Lr,Ur="__reactHandles$"+Lr,Yu="__reactResources$"+Lr,ps="__reactMarker$"+Lr;function Ca(i){delete i[tn],delete i[$t],delete i[Ra],delete i[Ko],delete i[Ur]}function Ar(i){var s=i[tn];if(s)return s;for(var l=i.parentNode;l;){if(s=l[vi]||l[tn]){if(l=s.alternate,s.child!==null||l!==null&&l.child!==null)for(i=ab(i);i!==null;){if(l=i[tn])return l;i=ab(i)}return s}i=l,l=i.parentNode}return null}function Ei(i){if(i=i[tn]||i[vi]){var s=i.tag;if(s===5||s===6||s===13||s===26||s===27||s===3)return i}return null}function gs(i){var s=i.tag;if(s===5||s===26||s===27||s===6)return i.stateNode;throw Error(r(33))}function _s(i){var s=i[Yu];return s||(s=i[Yu]={hoistableStyles:new Map,hoistableScripts:new Map}),s}function _t(i){i[ps]=!0}var Xu=new Set,Qo={};function Gn(i,s){Un(i,s),Un(i+"Capture",s)}function Un(i,s){for(Qo[i]=s,i=0;i<s.length;i++)Xu.add(s[i])}var $n=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),sg=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Zu={},Ju={};function Vd(i){return qo.call(Ju,i)?!0:qo.call(Zu,i)?!1:sg.test(i)?Ju[i]=!0:(Zu[i]=!0,!1)}function ys(i,s,l){if(Vd(s))if(l===null)i.removeAttribute(s);else{switch(typeof l){case"undefined":case"function":case"symbol":i.removeAttribute(s);return;case"boolean":var c=s.toLowerCase().slice(0,5);if(c!=="data-"&&c!=="aria-"){i.removeAttribute(s);return}}i.setAttribute(s,""+l)}}function vs(i,s,l){if(l===null)i.removeAttribute(s);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":i.removeAttribute(s);return}i.setAttribute(s,""+l)}}function sr(i,s,l,c){if(c===null)i.removeAttribute(l);else{switch(typeof c){case"undefined":case"function":case"symbol":case"boolean":i.removeAttribute(l);return}i.setAttributeNS(s,l,""+c)}}function Cn(i){switch(typeof i){case"bigint":case"boolean":case"number":case"string":case"undefined":return i;case"object":return i;default:return""}}function Md(i){var s=i.type;return(i=i.nodeName)&&i.toLowerCase()==="input"&&(s==="checkbox"||s==="radio")}function ag(i){var s=Md(i)?"checked":"value",l=Object.getOwnPropertyDescriptor(i.constructor.prototype,s),c=""+i[s];if(!i.hasOwnProperty(s)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var f=l.get,g=l.set;return Object.defineProperty(i,s,{configurable:!0,get:function(){return f.call(this)},set:function(T){c=""+T,g.call(this,T)}}),Object.defineProperty(i,s,{enumerable:l.enumerable}),{getValue:function(){return c},setValue:function(T){c=""+T},stopTracking:function(){i._valueTracker=null,delete i[s]}}}}function Da(i){i._valueTracker||(i._valueTracker=ag(i))}function ec(i){if(!i)return!1;var s=i._valueTracker;if(!s)return!0;var l=s.getValue(),c="";return i&&(c=Md(i)?i.checked?"true":"false":i.value),i=c,i!==l?(s.setValue(i),!0):!1}function Wo(i){if(i=i||(typeof document<"u"?document:void 0),typeof i>"u")return null;try{return i.activeElement||i.body}catch{return i.body}}var Ti=/[\n"\\]/g;function At(i){return i.replace(Ti,function(s){return"\\"+s.charCodeAt(0).toString(16)+" "})}function Es(i,s,l,c,f,g,T,b){i.name="",T!=null&&typeof T!="function"&&typeof T!="symbol"&&typeof T!="boolean"?i.type=T:i.removeAttribute("type"),s!=null?T==="number"?(s===0&&i.value===""||i.value!=s)&&(i.value=""+Cn(s)):i.value!==""+Cn(s)&&(i.value=""+Cn(s)):T!=="submit"&&T!=="reset"||i.removeAttribute("value"),s!=null?Yo(i,T,Cn(s)):l!=null?Yo(i,T,Cn(l)):c!=null&&i.removeAttribute("value"),f==null&&g!=null&&(i.defaultChecked=!!g),f!=null&&(i.checked=f&&typeof f!="function"&&typeof f!="symbol"),b!=null&&typeof b!="function"&&typeof b!="symbol"&&typeof b!="boolean"?i.name=""+Cn(b):i.removeAttribute("name")}function Pa(i,s,l,c,f,g,T,b){if(g!=null&&typeof g!="function"&&typeof g!="symbol"&&typeof g!="boolean"&&(i.type=g),s!=null||l!=null){if(!(g!=="submit"&&g!=="reset"||s!=null))return;l=l!=null?""+Cn(l):"",s=s!=null?""+Cn(s):l,b||s===i.value||(i.value=s),i.defaultValue=s}c=c??f,c=typeof c!="function"&&typeof c!="symbol"&&!!c,i.checked=b?i.checked:!!c,i.defaultChecked=!!c,T!=null&&typeof T!="function"&&typeof T!="symbol"&&typeof T!="boolean"&&(i.name=T)}function Yo(i,s,l){s==="number"&&Wo(i.ownerDocument)===i||i.defaultValue===""+l||(i.defaultValue=""+l)}function Qe(i,s,l,c){if(i=i.options,s){s={};for(var f=0;f<l.length;f++)s["$"+l[f]]=!0;for(l=0;l<i.length;l++)f=s.hasOwnProperty("$"+i[l].value),i[l].selected!==f&&(i[l].selected=f),f&&c&&(i[l].defaultSelected=!0)}else{for(l=""+Cn(l),s=null,f=0;f<i.length;f++){if(i[f].value===l){i[f].selected=!0,c&&(i[f].defaultSelected=!0);return}s!==null||i[f].disabled||(s=i[f])}s!==null&&(s.selected=!0)}}function xa(i,s,l){if(s!=null&&(s=""+Cn(s),s!==i.value&&(i.value=s),l==null)){i.defaultValue!==s&&(i.defaultValue=s);return}i.defaultValue=l!=null?""+Cn(l):""}function Ts(i,s,l,c){if(s==null){if(c!=null){if(l!=null)throw Error(r(92));if(me(c)){if(1<c.length)throw Error(r(93));c=c[0]}l=c}l==null&&(l=""),s=l}l=Cn(s),i.defaultValue=l,c=i.textContent,c===l&&c!==""&&c!==null&&(i.value=c)}function ar(i,s){if(s){var l=i.firstChild;if(l&&l===i.lastChild&&l.nodeType===3){l.nodeValue=s;return}}i.textContent=s}var og=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function tc(i,s,l){var c=s.indexOf("--")===0;l==null||typeof l=="boolean"||l===""?c?i.setProperty(s,""):s==="float"?i.cssFloat="":i[s]="":c?i.setProperty(s,l):typeof l!="number"||l===0||og.has(s)?s==="float"?i.cssFloat=l:i[s]=(""+l).trim():i[s]=l+"px"}function Ld(i,s,l){if(s!=null&&typeof s!="object")throw Error(r(62));if(i=i.style,l!=null){for(var c in l)!l.hasOwnProperty(c)||s!=null&&s.hasOwnProperty(c)||(c.indexOf("--")===0?i.setProperty(c,""):c==="float"?i.cssFloat="":i[c]="");for(var f in s)c=s[f],s.hasOwnProperty(f)&&l[f]!==c&&tc(i,f,c)}else for(var g in s)s.hasOwnProperty(g)&&tc(i,g,s[g])}function nc(i){if(i.indexOf("-")===-1)return!1;switch(i){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var lg=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),ug=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Br(i){return ug.test(""+i)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":i}var or=null;function Xo(i){return i=i.target||i.srcElement||window,i.correspondingUseElement&&(i=i.correspondingUseElement),i.nodeType===3?i.parentNode:i}var wi=null,bi=null;function Ii(i){var s=Ei(i);if(s&&(i=s.stateNode)){var l=i[$t]||null;e:switch(i=s.stateNode,s.type){case"input":if(Es(i,l.value,l.defaultValue,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name),s=l.name,l.type==="radio"&&s!=null){for(l=i;l.parentNode;)l=l.parentNode;for(l=l.querySelectorAll('input[name="'+At(""+s)+'"][type="radio"]'),s=0;s<l.length;s++){var c=l[s];if(c!==i&&c.form===i.form){var f=c[$t]||null;if(!f)throw Error(r(90));Es(c,f.value,f.defaultValue,f.defaultValue,f.checked,f.defaultChecked,f.type,f.name)}}for(s=0;s<l.length;s++)c=l[s],c.form===i.form&&ec(c)}break e;case"textarea":xa(i,l.value,l.defaultValue);break e;case"select":s=l.value,s!=null&&Qe(i,!!l.multiple,s,!1)}}}var rc=!1;function Ud(i,s,l){if(rc)return i(s,l);rc=!0;try{var c=i(s);return c}finally{if(rc=!1,(wi!==null||bi!==null)&&(Pf(),wi&&(s=wi,i=bi,bi=wi=null,Ii(s),i)))for(s=0;s<i.length;s++)Ii(i[s])}}function Na(i,s){var l=i.stateNode;if(l===null)return null;var c=l[$t]||null;if(c===null)return null;l=c[s];e:switch(s){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(i=i.type,c=!(i==="button"||i==="input"||i==="select"||i==="textarea")),i=!c;break e;default:i=!1}if(i)return null;if(l&&typeof l!="function")throw Error(r(231,s,typeof l));return l}var lr=!1;if($n)try{var Oa={};Object.defineProperty(Oa,"passive",{get:function(){lr=!0}}),window.addEventListener("test",Oa,Oa),window.removeEventListener("test",Oa,Oa)}catch{lr=!1}var zr=null,ws=null,Ai=null;function ic(){if(Ai)return Ai;var i,s=ws,l=s.length,c,f="value"in zr?zr.value:zr.textContent,g=f.length;for(i=0;i<l&&s[i]===f[i];i++);var T=l-i;for(c=1;c<=T&&s[l-c]===f[g-c];c++);return Ai=f.slice(i,1<c?1-c:void 0)}function Fr(i){var s=i.keyCode;return"charCode"in i?(i=i.charCode,i===0&&s===13&&(i=13)):i=s,i===10&&(i=13),32<=i||i===13?i:0}function jr(){return!0}function sc(){return!1}function nn(i){function s(l,c,f,g,T){this._reactName=l,this._targetInst=f,this.type=c,this.nativeEvent=g,this.target=T,this.currentTarget=null;for(var b in i)i.hasOwnProperty(b)&&(l=i[b],this[b]=l?l(g):g[b]);return this.isDefaultPrevented=(g.defaultPrevented!=null?g.defaultPrevented:g.returnValue===!1)?jr:sc,this.isPropagationStopped=sc,this}return x(s.prototype,{preventDefault:function(){this.defaultPrevented=!0;var l=this.nativeEvent;l&&(l.preventDefault?l.preventDefault():typeof l.returnValue!="unknown"&&(l.returnValue=!1),this.isDefaultPrevented=jr)},stopPropagation:function(){var l=this.nativeEvent;l&&(l.stopPropagation?l.stopPropagation():typeof l.cancelBubble!="unknown"&&(l.cancelBubble=!0),this.isPropagationStopped=jr)},persist:function(){},isPersistent:jr}),s}var Je={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(i){return i.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Zo=nn(Je),ka=x({},Je,{view:0,detail:0}),Bd=nn(ka),Jo,el,qr,Va=x({},ka,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ua,button:0,buttons:0,relatedTarget:function(i){return i.relatedTarget===void 0?i.fromElement===i.srcElement?i.toElement:i.fromElement:i.relatedTarget},movementX:function(i){return"movementX"in i?i.movementX:(i!==qr&&(qr&&i.type==="mousemove"?(Jo=i.screenX-qr.screenX,el=i.screenY-qr.screenY):el=Jo=0,qr=i),Jo)},movementY:function(i){return"movementY"in i?i.movementY:el}}),ur=nn(Va),zd=x({},Va,{dataTransfer:0}),cg=nn(zd),Ma=x({},ka,{relatedTarget:0}),tl=nn(Ma),ac=x({},Je,{animationName:0,elapsedTime:0,pseudoElement:0}),nl=nn(ac),Fd=x({},Je,{clipboardData:function(i){return"clipboardData"in i?i.clipboardData:window.clipboardData}}),rl=nn(Fd),hg=x({},Je,{data:0}),oc=nn(hg),La={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},jd={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},qd={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function lc(i){var s=this.nativeEvent;return s.getModifierState?s.getModifierState(i):(i=qd[i])?!!s[i]:!1}function Ua(){return lc}var Hd=x({},ka,{key:function(i){if(i.key){var s=La[i.key]||i.key;if(s!=="Unidentified")return s}return i.type==="keypress"?(i=Fr(i),i===13?"Enter":String.fromCharCode(i)):i.type==="keydown"||i.type==="keyup"?jd[i.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ua,charCode:function(i){return i.type==="keypress"?Fr(i):0},keyCode:function(i){return i.type==="keydown"||i.type==="keyup"?i.keyCode:0},which:function(i){return i.type==="keypress"?Fr(i):i.type==="keydown"||i.type==="keyup"?i.keyCode:0}}),il=nn(Hd),Gd=x({},Va,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),uc=nn(Gd),Si=x({},ka,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ua}),$d=nn(Si),Kd=x({},Je,{propertyName:0,elapsedTime:0,pseudoElement:0}),Qd=nn(Kd),Wd=x({},Va,{deltaX:function(i){return"deltaX"in i?i.deltaX:"wheelDeltaX"in i?-i.wheelDeltaX:0},deltaY:function(i){return"deltaY"in i?i.deltaY:"wheelDeltaY"in i?-i.wheelDeltaY:"wheelDelta"in i?-i.wheelDelta:0},deltaZ:0,deltaMode:0}),sl=nn(Wd),Dn=x({},Je,{newState:0,oldState:0}),Yd=nn(Dn),Xd=[9,13,27,32],Hr=$n&&"CompositionEvent"in window,h=null;$n&&"documentMode"in document&&(h=document.documentMode);var _=$n&&"TextEvent"in window&&!h,E=$n&&(!Hr||h&&8<h&&11>=h),I=" ",F=!1;function Q(i,s){switch(i){case"keyup":return Xd.indexOf(s.keyCode)!==-1;case"keydown":return s.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ue(i){return i=i.detail,typeof i=="object"&&"data"in i?i.data:null}var qe=!1;function Kt(i,s){switch(i){case"compositionend":return ue(s);case"keypress":return s.which!==32?null:(F=!0,I);case"textInput":return i=s.data,i===I&&F?null:i;default:return null}}function He(i,s){if(qe)return i==="compositionend"||!Hr&&Q(i,s)?(i=ic(),Ai=ws=zr=null,qe=!1,i):null;switch(i){case"paste":return null;case"keypress":if(!(s.ctrlKey||s.altKey||s.metaKey)||s.ctrlKey&&s.altKey){if(s.char&&1<s.char.length)return s.char;if(s.which)return String.fromCharCode(s.which)}return null;case"compositionend":return E&&s.locale!=="ko"?null:s.data;default:return null}}var rn={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Qt(i){var s=i&&i.nodeName&&i.nodeName.toLowerCase();return s==="input"?!!rn[i.type]:s==="textarea"}function Ri(i,s,l,c){wi?bi?bi.push(c):bi=[c]:wi=c,s=Vf(s,"onChange"),0<s.length&&(l=new Zo("onChange","change",null,l,c),i.push({event:l,listeners:s}))}var dn=null,Gr=null;function cc(i){X0(i,0)}function Zd(i){var s=gs(i);if(ec(s))return i}function ST(i,s){if(i==="change")return s}var RT=!1;if($n){var dg;if($n){var fg="oninput"in document;if(!fg){var CT=document.createElement("div");CT.setAttribute("oninput","return;"),fg=typeof CT.oninput=="function"}dg=fg}else dg=!1;RT=dg&&(!document.documentMode||9<document.documentMode)}function DT(){dn&&(dn.detachEvent("onpropertychange",PT),Gr=dn=null)}function PT(i){if(i.propertyName==="value"&&Zd(Gr)){var s=[];Ri(s,Gr,i,Xo(i)),Ud(cc,s)}}function dP(i,s,l){i==="focusin"?(DT(),dn=s,Gr=l,dn.attachEvent("onpropertychange",PT)):i==="focusout"&&DT()}function fP(i){if(i==="selectionchange"||i==="keyup"||i==="keydown")return Zd(Gr)}function mP(i,s){if(i==="click")return Zd(s)}function pP(i,s){if(i==="input"||i==="change")return Zd(s)}function gP(i,s){return i===s&&(i!==0||1/i===1/s)||i!==i&&s!==s}var Kn=typeof Object.is=="function"?Object.is:gP;function hc(i,s){if(Kn(i,s))return!0;if(typeof i!="object"||i===null||typeof s!="object"||s===null)return!1;var l=Object.keys(i),c=Object.keys(s);if(l.length!==c.length)return!1;for(c=0;c<l.length;c++){var f=l[c];if(!qo.call(s,f)||!Kn(i[f],s[f]))return!1}return!0}function xT(i){for(;i&&i.firstChild;)i=i.firstChild;return i}function NT(i,s){var l=xT(i);i=0;for(var c;l;){if(l.nodeType===3){if(c=i+l.textContent.length,i<=s&&c>=s)return{node:l,offset:s-i};i=c}e:{for(;l;){if(l.nextSibling){l=l.nextSibling;break e}l=l.parentNode}l=void 0}l=xT(l)}}function OT(i,s){return i&&s?i===s?!0:i&&i.nodeType===3?!1:s&&s.nodeType===3?OT(i,s.parentNode):"contains"in i?i.contains(s):i.compareDocumentPosition?!!(i.compareDocumentPosition(s)&16):!1:!1}function kT(i){i=i!=null&&i.ownerDocument!=null&&i.ownerDocument.defaultView!=null?i.ownerDocument.defaultView:window;for(var s=Wo(i.document);s instanceof i.HTMLIFrameElement;){try{var l=typeof s.contentWindow.location.href=="string"}catch{l=!1}if(l)i=s.contentWindow;else break;s=Wo(i.document)}return s}function mg(i){var s=i&&i.nodeName&&i.nodeName.toLowerCase();return s&&(s==="input"&&(i.type==="text"||i.type==="search"||i.type==="tel"||i.type==="url"||i.type==="password")||s==="textarea"||i.contentEditable==="true")}function _P(i,s){var l=kT(s);s=i.focusedElem;var c=i.selectionRange;if(l!==s&&s&&s.ownerDocument&&OT(s.ownerDocument.documentElement,s)){if(c!==null&&mg(s)){if(i=c.start,l=c.end,l===void 0&&(l=i),"selectionStart"in s)s.selectionStart=i,s.selectionEnd=Math.min(l,s.value.length);else if(l=(i=s.ownerDocument||document)&&i.defaultView||window,l.getSelection){l=l.getSelection();var f=s.textContent.length,g=Math.min(c.start,f);c=c.end===void 0?g:Math.min(c.end,f),!l.extend&&g>c&&(f=c,c=g,g=f),f=NT(s,g);var T=NT(s,c);f&&T&&(l.rangeCount!==1||l.anchorNode!==f.node||l.anchorOffset!==f.offset||l.focusNode!==T.node||l.focusOffset!==T.offset)&&(i=i.createRange(),i.setStart(f.node,f.offset),l.removeAllRanges(),g>c?(l.addRange(i),l.extend(T.node,T.offset)):(i.setEnd(T.node,T.offset),l.addRange(i)))}}for(i=[],l=s;l=l.parentNode;)l.nodeType===1&&i.push({element:l,left:l.scrollLeft,top:l.scrollTop});for(typeof s.focus=="function"&&s.focus(),s=0;s<i.length;s++)l=i[s],l.element.scrollLeft=l.left,l.element.scrollTop=l.top}}var yP=$n&&"documentMode"in document&&11>=document.documentMode,al=null,pg=null,dc=null,gg=!1;function VT(i,s,l){var c=l.window===l?l.document:l.nodeType===9?l:l.ownerDocument;gg||al==null||al!==Wo(c)||(c=al,"selectionStart"in c&&mg(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),dc&&hc(dc,c)||(dc=c,c=Vf(pg,"onSelect"),0<c.length&&(s=new Zo("onSelect","select",null,s,l),i.push({event:s,listeners:c}),s.target=al)))}function Ba(i,s){var l={};return l[i.toLowerCase()]=s.toLowerCase(),l["Webkit"+i]="webkit"+s,l["Moz"+i]="moz"+s,l}var ol={animationend:Ba("Animation","AnimationEnd"),animationiteration:Ba("Animation","AnimationIteration"),animationstart:Ba("Animation","AnimationStart"),transitionrun:Ba("Transition","TransitionRun"),transitionstart:Ba("Transition","TransitionStart"),transitioncancel:Ba("Transition","TransitionCancel"),transitionend:Ba("Transition","TransitionEnd")},_g={},MT={};$n&&(MT=document.createElement("div").style,"AnimationEvent"in window||(delete ol.animationend.animation,delete ol.animationiteration.animation,delete ol.animationstart.animation),"TransitionEvent"in window||delete ol.transitionend.transition);function za(i){if(_g[i])return _g[i];if(!ol[i])return i;var s=ol[i],l;for(l in s)if(s.hasOwnProperty(l)&&l in MT)return _g[i]=s[l];return i}var LT=za("animationend"),UT=za("animationiteration"),BT=za("animationstart"),vP=za("transitionrun"),EP=za("transitionstart"),TP=za("transitioncancel"),zT=za("transitionend"),FT=new Map,jT="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll scrollEnd toggle touchMove waiting wheel".split(" ");function Sr(i,s){FT.set(i,s),Gn(s,[i])}var cr=[],ll=0,yg=0;function Jd(){for(var i=ll,s=yg=ll=0;s<i;){var l=cr[s];cr[s++]=null;var c=cr[s];cr[s++]=null;var f=cr[s];cr[s++]=null;var g=cr[s];if(cr[s++]=null,c!==null&&f!==null){var T=c.pending;T===null?f.next=f:(f.next=T.next,T.next=f),c.pending=f}g!==0&&qT(l,f,g)}}function ef(i,s,l,c){cr[ll++]=i,cr[ll++]=s,cr[ll++]=l,cr[ll++]=c,yg|=c,i.lanes|=c,i=i.alternate,i!==null&&(i.lanes|=c)}function vg(i,s,l,c){return ef(i,s,l,c),tf(i)}function bs(i,s){return ef(i,null,null,s),tf(i)}function qT(i,s,l){i.lanes|=l;var c=i.alternate;c!==null&&(c.lanes|=l);for(var f=!1,g=i.return;g!==null;)g.childLanes|=l,c=g.alternate,c!==null&&(c.childLanes|=l),g.tag===22&&(i=g.stateNode,i===null||i._visibility&1||(f=!0)),i=g,g=g.return;f&&s!==null&&i.tag===3&&(g=i.stateNode,f=31-Rn(l),g=g.hiddenUpdates,i=g[f],i===null?g[f]=[s]:i.push(s),s.lane=l|536870912)}function tf(i){if(50<Lc)throw Lc=0,A_=null,Error(r(185));for(var s=i.return;s!==null;)i=s,s=i.return;return i.tag===3?i.stateNode:null}var ul={},HT=new WeakMap;function hr(i,s){if(typeof i=="object"&&i!==null){var l=HT.get(i);return l!==void 0?l:(s={value:i,source:s,stack:be(s)},HT.set(i,s),s)}return{value:i,source:s,stack:be(s)}}var cl=[],hl=0,nf=null,rf=0,dr=[],fr=0,Fa=null,Ci=1,Di="";function ja(i,s){cl[hl++]=rf,cl[hl++]=nf,nf=i,rf=s}function GT(i,s,l){dr[fr++]=Ci,dr[fr++]=Di,dr[fr++]=Fa,Fa=i;var c=Ci;i=Di;var f=32-Rn(c)-1;c&=~(1<<f),l+=1;var g=32-Rn(s)+f;if(30<g){var T=f-f%5;g=(c&(1<<T)-1).toString(32),c>>=T,f-=T,Ci=1<<32-Rn(s)+f|l<<f|c,Di=g+i}else Ci=1<<g|l<<f|c,Di=i}function Eg(i){i.return!==null&&(ja(i,1),GT(i,1,0))}function Tg(i){for(;i===nf;)nf=cl[--hl],cl[hl]=null,rf=cl[--hl],cl[hl]=null;for(;i===Fa;)Fa=dr[--fr],dr[fr]=null,Di=dr[--fr],dr[fr]=null,Ci=dr[--fr],dr[fr]=null}var Pn=null,fn=null,We=!1,Rr=null,$r=!1,wg=Error(r(519));function qa(i){var s=Error(r(418,""));throw pc(hr(s,i)),wg}function $T(i){var s=i.stateNode,l=i.type,c=i.memoizedProps;switch(s[tn]=i,s[$t]=c,l){case"dialog":je("cancel",s),je("close",s);break;case"iframe":case"object":case"embed":je("load",s);break;case"video":case"audio":for(l=0;l<Bc.length;l++)je(Bc[l],s);break;case"source":je("error",s);break;case"img":case"image":case"link":je("error",s),je("load",s);break;case"details":je("toggle",s);break;case"input":je("invalid",s),Pa(s,c.value,c.defaultValue,c.checked,c.defaultChecked,c.type,c.name,!0),Da(s);break;case"select":je("invalid",s);break;case"textarea":je("invalid",s),Ts(s,c.value,c.defaultValue,c.children),Da(s)}l=c.children,typeof l!="string"&&typeof l!="number"&&typeof l!="bigint"||s.textContent===""+l||c.suppressHydrationWarning===!0||tb(s.textContent,l)?(c.popover!=null&&(je("beforetoggle",s),je("toggle",s)),c.onScroll!=null&&je("scroll",s),c.onScrollEnd!=null&&je("scrollend",s),c.onClick!=null&&(s.onclick=Mf),s=!0):s=!1,s||qa(i)}function KT(i){for(Pn=i.return;Pn;)switch(Pn.tag){case 3:case 27:$r=!0;return;case 5:case 13:$r=!1;return;default:Pn=Pn.return}}function fc(i){if(i!==Pn)return!1;if(!We)return KT(i),We=!0,!1;var s=!1,l;if((l=i.tag!==3&&i.tag!==27)&&((l=i.tag===5)&&(l=i.type,l=!(l!=="form"&&l!=="button")||j_(i.type,i.memoizedProps)),l=!l),l&&(s=!0),s&&fn&&qa(i),KT(i),i.tag===13){if(i=i.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(r(317));e:{for(i=i.nextSibling,s=0;i;){if(i.nodeType===8)if(l=i.data,l==="/$"){if(s===0){fn=Dr(i.nextSibling);break e}s--}else l!=="$"&&l!=="$!"&&l!=="$?"||s++;i=i.nextSibling}fn=null}}else fn=Pn?Dr(i.stateNode.nextSibling):null;return!0}function mc(){fn=Pn=null,We=!1}function pc(i){Rr===null?Rr=[i]:Rr.push(i)}var gc=Error(r(460)),QT=Error(r(474)),bg={then:function(){}};function WT(i){return i=i.status,i==="fulfilled"||i==="rejected"}function sf(){}function YT(i,s,l){switch(l=i[l],l===void 0?i.push(s):l!==s&&(s.then(sf,sf),s=l),s.status){case"fulfilled":return s.value;case"rejected":throw i=s.reason,i===gc?Error(r(483)):i;default:if(typeof s.status=="string")s.then(sf,sf);else{if(i=at,i!==null&&100<i.shellSuspendCounter)throw Error(r(482));i=s,i.status="pending",i.then(function(c){if(s.status==="pending"){var f=s;f.status="fulfilled",f.value=c}},function(c){if(s.status==="pending"){var f=s;f.status="rejected",f.reason=c}})}switch(s.status){case"fulfilled":return s.value;case"rejected":throw i=s.reason,i===gc?Error(r(483)):i}throw _c=s,gc}}var _c=null;function XT(){if(_c===null)throw Error(r(459));var i=_c;return _c=null,i}var dl=null,yc=0;function af(i){var s=yc;return yc+=1,dl===null&&(dl=[]),YT(dl,i,s)}function vc(i,s){s=s.props.ref,i.ref=s!==void 0?s:null}function of(i,s){throw s.$$typeof===o?Error(r(525)):(i=Object.prototype.toString.call(s),Error(r(31,i==="[object Object]"?"object with keys {"+Object.keys(s).join(", ")+"}":i)))}function ZT(i){var s=i._init;return s(i._payload)}function JT(i){function s(B,k){if(i){var q=B.deletions;q===null?(B.deletions=[k],B.flags|=16):q.push(k)}}function l(B,k){if(!i)return null;for(;k!==null;)s(B,k),k=k.sibling;return null}function c(B){for(var k=new Map;B!==null;)B.key!==null?k.set(B.key,B):k.set(B.index,B),B=B.sibling;return k}function f(B,k){return B=Vs(B,k),B.index=0,B.sibling=null,B}function g(B,k,q){return B.index=q,i?(q=B.alternate,q!==null?(q=q.index,q<k?(B.flags|=33554434,k):q):(B.flags|=33554434,k)):(B.flags|=1048576,k)}function T(B){return i&&B.alternate===null&&(B.flags|=33554434),B}function b(B,k,q,ee){return k===null||k.tag!==6?(k=__(q,B.mode,ee),k.return=B,k):(k=f(k,q),k.return=B,k)}function C(B,k,q,ee){var _e=q.type;return _e===m?J(B,k,q.props.children,ee,q.key):k!==null&&(k.elementType===_e||typeof _e=="object"&&_e!==null&&_e.$$typeof===Y&&ZT(_e)===k.type)?(k=f(k,q.props),vc(k,q),k.return=B,k):(k=Af(q.type,q.key,q.props,null,B.mode,ee),vc(k,q),k.return=B,k)}function M(B,k,q,ee){return k===null||k.tag!==4||k.stateNode.containerInfo!==q.containerInfo||k.stateNode.implementation!==q.implementation?(k=y_(q,B.mode,ee),k.return=B,k):(k=f(k,q.children||[]),k.return=B,k)}function J(B,k,q,ee,_e){return k===null||k.tag!==7?(k=Ja(q,B.mode,ee,_e),k.return=B,k):(k=f(k,q),k.return=B,k)}function ne(B,k,q){if(typeof k=="string"&&k!==""||typeof k=="number"||typeof k=="bigint")return k=__(""+k,B.mode,q),k.return=B,k;if(typeof k=="object"&&k!==null){switch(k.$$typeof){case u:return q=Af(k.type,k.key,k.props,null,B.mode,q),vc(q,k),q.return=B,q;case d:return k=y_(k,B.mode,q),k.return=B,k;case Y:var ee=k._init;return k=ee(k._payload),ne(B,k,q)}if(me(k)||le(k))return k=Ja(k,B.mode,q,null),k.return=B,k;if(typeof k.then=="function")return ne(B,af(k),q);if(k.$$typeof===S)return ne(B,wf(B,k),q);of(B,k)}return null}function G(B,k,q,ee){var _e=k!==null?k.key:null;if(typeof q=="string"&&q!==""||typeof q=="number"||typeof q=="bigint")return _e!==null?null:b(B,k,""+q,ee);if(typeof q=="object"&&q!==null){switch(q.$$typeof){case u:return q.key===_e?C(B,k,q,ee):null;case d:return q.key===_e?M(B,k,q,ee):null;case Y:return _e=q._init,q=_e(q._payload),G(B,k,q,ee)}if(me(q)||le(q))return _e!==null?null:J(B,k,q,ee,null);if(typeof q.then=="function")return G(B,k,af(q),ee);if(q.$$typeof===S)return G(B,k,wf(B,q),ee);of(B,q)}return null}function X(B,k,q,ee,_e){if(typeof ee=="string"&&ee!==""||typeof ee=="number"||typeof ee=="bigint")return B=B.get(q)||null,b(k,B,""+ee,_e);if(typeof ee=="object"&&ee!==null){switch(ee.$$typeof){case u:return B=B.get(ee.key===null?q:ee.key)||null,C(k,B,ee,_e);case d:return B=B.get(ee.key===null?q:ee.key)||null,M(k,B,ee,_e);case Y:var Le=ee._init;return ee=Le(ee._payload),X(B,k,q,ee,_e)}if(me(ee)||le(ee))return B=B.get(q)||null,J(k,B,ee,_e,null);if(typeof ee.then=="function")return X(B,k,q,af(ee),_e);if(ee.$$typeof===S)return X(B,k,q,wf(k,ee),_e);of(k,ee)}return null}function ve(B,k,q,ee){for(var _e=null,Le=null,we=k,Ae=k=0,on=null;we!==null&&Ae<q.length;Ae++){we.index>Ae?(on=we,we=null):on=we.sibling;var Ye=G(B,we,q[Ae],ee);if(Ye===null){we===null&&(we=on);break}i&&we&&Ye.alternate===null&&s(B,we),k=g(Ye,k,Ae),Le===null?_e=Ye:Le.sibling=Ye,Le=Ye,we=on}if(Ae===q.length)return l(B,we),We&&ja(B,Ae),_e;if(we===null){for(;Ae<q.length;Ae++)we=ne(B,q[Ae],ee),we!==null&&(k=g(we,k,Ae),Le===null?_e=we:Le.sibling=we,Le=we);return We&&ja(B,Ae),_e}for(we=c(we);Ae<q.length;Ae++)on=X(we,B,Ae,q[Ae],ee),on!==null&&(i&&on.alternate!==null&&we.delete(on.key===null?Ae:on.key),k=g(on,k,Ae),Le===null?_e=on:Le.sibling=on,Le=on);return i&&we.forEach(function(js){return s(B,js)}),We&&ja(B,Ae),_e}function De(B,k,q,ee){if(q==null)throw Error(r(151));for(var _e=null,Le=null,we=k,Ae=k=0,on=null,Ye=q.next();we!==null&&!Ye.done;Ae++,Ye=q.next()){we.index>Ae?(on=we,we=null):on=we.sibling;var js=G(B,we,Ye.value,ee);if(js===null){we===null&&(we=on);break}i&&we&&js.alternate===null&&s(B,we),k=g(js,k,Ae),Le===null?_e=js:Le.sibling=js,Le=js,we=on}if(Ye.done)return l(B,we),We&&ja(B,Ae),_e;if(we===null){for(;!Ye.done;Ae++,Ye=q.next())Ye=ne(B,Ye.value,ee),Ye!==null&&(k=g(Ye,k,Ae),Le===null?_e=Ye:Le.sibling=Ye,Le=Ye);return We&&ja(B,Ae),_e}for(we=c(we);!Ye.done;Ae++,Ye=q.next())Ye=X(we,B,Ae,Ye.value,ee),Ye!==null&&(i&&Ye.alternate!==null&&we.delete(Ye.key===null?Ae:Ye.key),k=g(Ye,k,Ae),Le===null?_e=Ye:Le.sibling=Ye,Le=Ye);return i&&we.forEach(function(Vx){return s(B,Vx)}),We&&ja(B,Ae),_e}function Ct(B,k,q,ee){if(typeof q=="object"&&q!==null&&q.type===m&&q.key===null&&(q=q.props.children),typeof q=="object"&&q!==null){switch(q.$$typeof){case u:e:{for(var _e=q.key;k!==null;){if(k.key===_e){if(_e=q.type,_e===m){if(k.tag===7){l(B,k.sibling),ee=f(k,q.props.children),ee.return=B,B=ee;break e}}else if(k.elementType===_e||typeof _e=="object"&&_e!==null&&_e.$$typeof===Y&&ZT(_e)===k.type){l(B,k.sibling),ee=f(k,q.props),vc(ee,q),ee.return=B,B=ee;break e}l(B,k);break}else s(B,k);k=k.sibling}q.type===m?(ee=Ja(q.props.children,B.mode,ee,q.key),ee.return=B,B=ee):(ee=Af(q.type,q.key,q.props,null,B.mode,ee),vc(ee,q),ee.return=B,B=ee)}return T(B);case d:e:{for(_e=q.key;k!==null;){if(k.key===_e)if(k.tag===4&&k.stateNode.containerInfo===q.containerInfo&&k.stateNode.implementation===q.implementation){l(B,k.sibling),ee=f(k,q.children||[]),ee.return=B,B=ee;break e}else{l(B,k);break}else s(B,k);k=k.sibling}ee=y_(q,B.mode,ee),ee.return=B,B=ee}return T(B);case Y:return _e=q._init,q=_e(q._payload),Ct(B,k,q,ee)}if(me(q))return ve(B,k,q,ee);if(le(q)){if(_e=le(q),typeof _e!="function")throw Error(r(150));return q=_e.call(q),De(B,k,q,ee)}if(typeof q.then=="function")return Ct(B,k,af(q),ee);if(q.$$typeof===S)return Ct(B,k,wf(B,q),ee);of(B,q)}return typeof q=="string"&&q!==""||typeof q=="number"||typeof q=="bigint"?(q=""+q,k!==null&&k.tag===6?(l(B,k.sibling),ee=f(k,q),ee.return=B,B=ee):(l(B,k),ee=__(q,B.mode,ee),ee.return=B,B=ee),T(B)):l(B,k)}return function(B,k,q,ee){try{yc=0;var _e=Ct(B,k,q,ee);return dl=null,_e}catch(we){if(we===gc)throw we;var Le=_r(29,we,null,B.mode);return Le.lanes=ee,Le.return=B,Le}finally{}}}var Ha=JT(!0),ew=JT(!1),fl=Me(null),lf=Me(0);function tw(i,s){i=zi,Ke(lf,i),Ke(fl,s),zi=i|s.baseLanes}function Ig(){Ke(lf,zi),Ke(fl,fl.current)}function Ag(){zi=lf.current,Ze(fl),Ze(lf)}var mr=Me(null),Kr=null;function Is(i){var s=i.alternate;Ke(Wt,Wt.current&1),Ke(mr,i),Kr===null&&(s===null||fl.current!==null||s.memoizedState!==null)&&(Kr=i)}function nw(i){if(i.tag===22){if(Ke(Wt,Wt.current),Ke(mr,i),Kr===null){var s=i.alternate;s!==null&&s.memoizedState!==null&&(Kr=i)}}else As()}function As(){Ke(Wt,Wt.current),Ke(mr,mr.current)}function Pi(i){Ze(mr),Kr===i&&(Kr=null),Ze(Wt)}var Wt=Me(0);function uf(i){for(var s=i;s!==null;){if(s.tag===13){var l=s.memoizedState;if(l!==null&&(l=l.dehydrated,l===null||l.data==="$?"||l.data==="$!"))return s}else if(s.tag===19&&s.memoizedProps.revealOrder!==void 0){if((s.flags&128)!==0)return s}else if(s.child!==null){s.child.return=s,s=s.child;continue}if(s===i)break;for(;s.sibling===null;){if(s.return===null||s.return===i)return null;s=s.return}s.sibling.return=s.return,s=s.sibling}return null}var wP=typeof AbortController<"u"?AbortController:function(){var i=[],s=this.signal={aborted:!1,addEventListener:function(l,c){i.push(c)}};this.abort=function(){s.aborted=!0,i.forEach(function(l){return l()})}},bP=n.unstable_scheduleCallback,IP=n.unstable_NormalPriority,Yt={$$typeof:S,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Sg(){return{controller:new wP,data:new Map,refCount:0}}function Ec(i){i.refCount--,i.refCount===0&&bP(IP,function(){i.controller.abort()})}var Tc=null,Rg=0,ml=0,pl=null;function AP(i,s){if(Tc===null){var l=Tc=[];Rg=0,ml=O_(),pl={status:"pending",value:void 0,then:function(c){l.push(c)}}}return Rg++,s.then(rw,rw),s}function rw(){if(--Rg===0&&Tc!==null){pl!==null&&(pl.status="fulfilled");var i=Tc;Tc=null,ml=0,pl=null;for(var s=0;s<i.length;s++)(0,i[s])()}}function SP(i,s){var l=[],c={status:"pending",value:null,reason:null,then:function(f){l.push(f)}};return i.then(function(){c.status="fulfilled",c.value=s;for(var f=0;f<l.length;f++)(0,l[f])(s)},function(f){for(c.status="rejected",c.reason=f,f=0;f<l.length;f++)(0,l[f])(void 0)}),c}var iw=A.S;A.S=function(i,s){typeof s=="object"&&s!==null&&typeof s.then=="function"&&AP(i,s),iw!==null&&iw(i,s)};var Ga=Me(null);function Cg(){var i=Ga.current;return i!==null?i:at.pooledCache}function cf(i,s){s===null?Ke(Ga,Ga.current):Ke(Ga,s.pool)}function sw(){var i=Cg();return i===null?null:{parent:Yt._currentValue,pool:i}}var Ss=0,Ve=null,rt=null,Bt=null,hf=!1,gl=!1,$a=!1,df=0,wc=0,_l=null,RP=0;function kt(){throw Error(r(321))}function Dg(i,s){if(s===null)return!1;for(var l=0;l<s.length&&l<i.length;l++)if(!Kn(i[l],s[l]))return!1;return!0}function Pg(i,s,l,c,f,g){return Ss=g,Ve=s,s.memoizedState=null,s.updateQueue=null,s.lanes=0,A.H=i===null||i.memoizedState===null?Ka:Rs,$a=!1,g=l(c,f),$a=!1,gl&&(g=ow(s,l,c,f)),aw(i),g}function aw(i){A.H=Qr;var s=rt!==null&&rt.next!==null;if(Ss=0,Bt=rt=Ve=null,hf=!1,wc=0,_l=null,s)throw Error(r(300));i===null||sn||(i=i.dependencies,i!==null&&Tf(i)&&(sn=!0))}function ow(i,s,l,c){Ve=i;var f=0;do{if(gl&&(_l=null),wc=0,gl=!1,25<=f)throw Error(r(301));if(f+=1,Bt=rt=null,i.updateQueue!=null){var g=i.updateQueue;g.lastEffect=null,g.events=null,g.stores=null,g.memoCache!=null&&(g.memoCache.index=0)}A.H=Qa,g=s(l,c)}while(gl);return g}function CP(){var i=A.H,s=i.useState()[0];return s=typeof s.then=="function"?bc(s):s,i=i.useState()[0],(rt!==null?rt.memoizedState:null)!==i&&(Ve.flags|=1024),s}function xg(){var i=df!==0;return df=0,i}function Ng(i,s,l){s.updateQueue=i.updateQueue,s.flags&=-2053,i.lanes&=~l}function Og(i){if(hf){for(i=i.memoizedState;i!==null;){var s=i.queue;s!==null&&(s.pending=null),i=i.next}hf=!1}Ss=0,Bt=rt=Ve=null,gl=!1,wc=df=0,_l=null}function Bn(){var i={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Bt===null?Ve.memoizedState=Bt=i:Bt=Bt.next=i,Bt}function zt(){if(rt===null){var i=Ve.alternate;i=i!==null?i.memoizedState:null}else i=rt.next;var s=Bt===null?Ve.memoizedState:Bt.next;if(s!==null)Bt=s,rt=i;else{if(i===null)throw Ve.alternate===null?Error(r(467)):Error(r(310));rt=i,i={memoizedState:rt.memoizedState,baseState:rt.baseState,baseQueue:rt.baseQueue,queue:rt.queue,next:null},Bt===null?Ve.memoizedState=Bt=i:Bt=Bt.next=i}return Bt}var ff;ff=function(){return{lastEffect:null,events:null,stores:null,memoCache:null}};function bc(i){var s=wc;return wc+=1,_l===null&&(_l=[]),i=YT(_l,i,s),s=Ve,(Bt===null?s.memoizedState:Bt.next)===null&&(s=s.alternate,A.H=s===null||s.memoizedState===null?Ka:Rs),i}function mf(i){if(i!==null&&typeof i=="object"){if(typeof i.then=="function")return bc(i);if(i.$$typeof===S)return Tn(i)}throw Error(r(438,String(i)))}function kg(i){var s=null,l=Ve.updateQueue;if(l!==null&&(s=l.memoCache),s==null){var c=Ve.alternate;c!==null&&(c=c.updateQueue,c!==null&&(c=c.memoCache,c!=null&&(s={data:c.data.map(function(f){return f.slice()}),index:0})))}if(s==null&&(s={data:[],index:0}),l===null&&(l=ff(),Ve.updateQueue=l),l.memoCache=s,l=s.data[s.index],l===void 0)for(l=s.data[s.index]=Array(i),c=0;c<i;c++)l[c]=oe;return s.index++,l}function xi(i,s){return typeof s=="function"?s(i):s}function pf(i){var s=zt();return Vg(s,rt,i)}function Vg(i,s,l){var c=i.queue;if(c===null)throw Error(r(311));c.lastRenderedReducer=l;var f=i.baseQueue,g=c.pending;if(g!==null){if(f!==null){var T=f.next;f.next=g.next,g.next=T}s.baseQueue=f=g,c.pending=null}if(g=i.baseState,f===null)i.memoizedState=g;else{s=f.next;var b=T=null,C=null,M=s,J=!1;do{var ne=M.lane&-536870913;if(ne!==M.lane?(Ge&ne)===ne:(Ss&ne)===ne){var G=M.revertLane;if(G===0)C!==null&&(C=C.next={lane:0,revertLane:0,action:M.action,hasEagerState:M.hasEagerState,eagerState:M.eagerState,next:null}),ne===ml&&(J=!0);else if((Ss&G)===G){M=M.next,G===ml&&(J=!0);continue}else ne={lane:0,revertLane:M.revertLane,action:M.action,hasEagerState:M.hasEagerState,eagerState:M.eagerState,next:null},C===null?(b=C=ne,T=g):C=C.next=ne,Ve.lanes|=G,Ms|=G;ne=M.action,$a&&l(g,ne),g=M.hasEagerState?M.eagerState:l(g,ne)}else G={lane:ne,revertLane:M.revertLane,action:M.action,hasEagerState:M.hasEagerState,eagerState:M.eagerState,next:null},C===null?(b=C=G,T=g):C=C.next=G,Ve.lanes|=ne,Ms|=ne;M=M.next}while(M!==null&&M!==s);if(C===null?T=g:C.next=b,!Kn(g,i.memoizedState)&&(sn=!0,J&&(l=pl,l!==null)))throw l;i.memoizedState=g,i.baseState=T,i.baseQueue=C,c.lastRenderedState=g}return f===null&&(c.lanes=0),[i.memoizedState,c.dispatch]}function Mg(i){var s=zt(),l=s.queue;if(l===null)throw Error(r(311));l.lastRenderedReducer=i;var c=l.dispatch,f=l.pending,g=s.memoizedState;if(f!==null){l.pending=null;var T=f=f.next;do g=i(g,T.action),T=T.next;while(T!==f);Kn(g,s.memoizedState)||(sn=!0),s.memoizedState=g,s.baseQueue===null&&(s.baseState=g),l.lastRenderedState=g}return[g,c]}function lw(i,s,l){var c=Ve,f=zt(),g=We;if(g){if(l===void 0)throw Error(r(407));l=l()}else l=s();var T=!Kn((rt||f).memoizedState,l);if(T&&(f.memoizedState=l,sn=!0),f=f.queue,Bg(hw.bind(null,c,f,i),[i]),f.getSnapshot!==s||T||Bt!==null&&Bt.memoizedState.tag&1){if(c.flags|=2048,yl(9,cw.bind(null,c,f,l,s),{destroy:void 0},null),at===null)throw Error(r(349));g||(Ss&60)!==0||uw(c,s,l)}return l}function uw(i,s,l){i.flags|=16384,i={getSnapshot:s,value:l},s=Ve.updateQueue,s===null?(s=ff(),Ve.updateQueue=s,s.stores=[i]):(l=s.stores,l===null?s.stores=[i]:l.push(i))}function cw(i,s,l,c){s.value=l,s.getSnapshot=c,dw(s)&&fw(i)}function hw(i,s,l){return l(function(){dw(s)&&fw(i)})}function dw(i){var s=i.getSnapshot;i=i.value;try{var l=s();return!Kn(i,l)}catch{return!0}}function fw(i){var s=bs(i,2);s!==null&&xn(s,i,2)}function Lg(i){var s=Bn();if(typeof i=="function"){var l=i;if(i=l(),$a){Vr(!0);try{l()}finally{Vr(!1)}}}return s.memoizedState=s.baseState=i,s.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:xi,lastRenderedState:i},s}function mw(i,s,l,c){return i.baseState=l,Vg(i,rt,typeof c=="function"?c:xi)}function DP(i,s,l,c,f){if(yf(i))throw Error(r(485));if(i=s.action,i!==null){var g={payload:f,action:i,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(T){g.listeners.push(T)}};A.T!==null?l(!0):g.isTransition=!1,c(g),l=s.pending,l===null?(g.next=s.pending=g,pw(s,g)):(g.next=l.next,s.pending=l.next=g)}}function pw(i,s){var l=s.action,c=s.payload,f=i.state;if(s.isTransition){var g=A.T,T={};A.T=T;try{var b=l(f,c),C=A.S;C!==null&&C(T,b),gw(i,s,b)}catch(M){Ug(i,s,M)}finally{A.T=g}}else try{g=l(f,c),gw(i,s,g)}catch(M){Ug(i,s,M)}}function gw(i,s,l){l!==null&&typeof l=="object"&&typeof l.then=="function"?l.then(function(c){_w(i,s,c)},function(c){return Ug(i,s,c)}):_w(i,s,l)}function _w(i,s,l){s.status="fulfilled",s.value=l,yw(s),i.state=l,s=i.pending,s!==null&&(l=s.next,l===s?i.pending=null:(l=l.next,s.next=l,pw(i,l)))}function Ug(i,s,l){var c=i.pending;if(i.pending=null,c!==null){c=c.next;do s.status="rejected",s.reason=l,yw(s),s=s.next;while(s!==c)}i.action=null}function yw(i){i=i.listeners;for(var s=0;s<i.length;s++)(0,i[s])()}function vw(i,s){return s}function Ew(i,s){if(We){var l=at.formState;if(l!==null){e:{var c=Ve;if(We){if(fn){t:{for(var f=fn,g=$r;f.nodeType!==8;){if(!g){f=null;break t}if(f=Dr(f.nextSibling),f===null){f=null;break t}}g=f.data,f=g==="F!"||g==="F"?f:null}if(f){fn=Dr(f.nextSibling),c=f.data==="F!";break e}}qa(c)}c=!1}c&&(s=l[0])}}return l=Bn(),l.memoizedState=l.baseState=s,c={pending:null,lanes:0,dispatch:null,lastRenderedReducer:vw,lastRenderedState:s},l.queue=c,l=Uw.bind(null,Ve,c),c.dispatch=l,c=Lg(!1),g=Hg.bind(null,Ve,!1,c.queue),c=Bn(),f={state:s,dispatch:null,action:i,pending:null},c.queue=f,l=DP.bind(null,Ve,f,g,l),f.dispatch=l,c.memoizedState=i,[s,l,!1]}function Tw(i){var s=zt();return ww(s,rt,i)}function ww(i,s,l){s=Vg(i,s,vw)[0],i=pf(xi)[0],s=typeof s=="object"&&s!==null&&typeof s.then=="function"?bc(s):s;var c=zt(),f=c.queue,g=f.dispatch;return l!==c.memoizedState&&(Ve.flags|=2048,yl(9,PP.bind(null,f,l),{destroy:void 0},null)),[s,g,i]}function PP(i,s){i.action=s}function bw(i){var s=zt(),l=rt;if(l!==null)return ww(s,l,i);zt(),s=s.memoizedState,l=zt();var c=l.queue.dispatch;return l.memoizedState=i,[s,c,!1]}function yl(i,s,l,c){return i={tag:i,create:s,inst:l,deps:c,next:null},s=Ve.updateQueue,s===null&&(s=ff(),Ve.updateQueue=s),l=s.lastEffect,l===null?s.lastEffect=i.next=i:(c=l.next,l.next=i,i.next=c,s.lastEffect=i),i}function Iw(){return zt().memoizedState}function gf(i,s,l,c){var f=Bn();Ve.flags|=i,f.memoizedState=yl(1|s,l,{destroy:void 0},c===void 0?null:c)}function _f(i,s,l,c){var f=zt();c=c===void 0?null:c;var g=f.memoizedState.inst;rt!==null&&c!==null&&Dg(c,rt.memoizedState.deps)?f.memoizedState=yl(s,l,g,c):(Ve.flags|=i,f.memoizedState=yl(1|s,l,g,c))}function Aw(i,s){gf(8390656,8,i,s)}function Bg(i,s){_f(2048,8,i,s)}function Sw(i,s){return _f(4,2,i,s)}function Rw(i,s){return _f(4,4,i,s)}function Cw(i,s){if(typeof s=="function"){i=i();var l=s(i);return function(){typeof l=="function"?l():s(null)}}if(s!=null)return i=i(),s.current=i,function(){s.current=null}}function Dw(i,s,l){l=l!=null?l.concat([i]):null,_f(4,4,Cw.bind(null,s,i),l)}function zg(){}function Pw(i,s){var l=zt();s=s===void 0?null:s;var c=l.memoizedState;return s!==null&&Dg(s,c[1])?c[0]:(l.memoizedState=[i,s],i)}function xw(i,s){var l=zt();s=s===void 0?null:s;var c=l.memoizedState;if(s!==null&&Dg(s,c[1]))return c[0];if(c=i(),$a){Vr(!0);try{i()}finally{Vr(!1)}}return l.memoizedState=[c,s],c}function Fg(i,s,l){return l===void 0||(Ss&1073741824)!==0?i.memoizedState=s:(i.memoizedState=l,i=O0(),Ve.lanes|=i,Ms|=i,l)}function Nw(i,s,l,c){return Kn(l,s)?l:fl.current!==null?(i=Fg(i,l,c),Kn(i,s)||(sn=!0),i):(Ss&42)===0?(sn=!0,i.memoizedState=l):(i=O0(),Ve.lanes|=i,Ms|=i,s)}function Ow(i,s,l,c,f){var g=fe.p;fe.p=g!==0&&8>g?g:8;var T=A.T,b={};A.T=b,Hg(i,!1,s,l);try{var C=f(),M=A.S;if(M!==null&&M(b,C),C!==null&&typeof C=="object"&&typeof C.then=="function"){var J=SP(C,c);Ic(i,s,J,Xn(i))}else Ic(i,s,c,Xn(i))}catch(ne){Ic(i,s,{then:function(){},status:"rejected",reason:ne},Xn())}finally{fe.p=g,A.T=T}}function xP(){}function jg(i,s,l,c){if(i.tag!==5)throw Error(r(476));var f=kw(i).queue;Ow(i,f,s,Ce,l===null?xP:function(){return Vw(i),l(c)})}function kw(i){var s=i.memoizedState;if(s!==null)return s;s={memoizedState:Ce,baseState:Ce,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:xi,lastRenderedState:Ce},next:null};var l={};return s.next={memoizedState:l,baseState:l,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:xi,lastRenderedState:l},next:null},i.memoizedState=s,i=i.alternate,i!==null&&(i.memoizedState=s),s}function Vw(i){var s=kw(i).next.queue;Ic(i,s,{},Xn())}function qg(){return Tn(Hc)}function Mw(){return zt().memoizedState}function Lw(){return zt().memoizedState}function NP(i){for(var s=i.return;s!==null;){switch(s.tag){case 24:case 3:var l=Xn();i=Ps(l);var c=xs(s,i,l);c!==null&&(xn(c,s,l),Rc(c,s,l)),s={cache:Sg()},i.payload=s;return}s=s.return}}function OP(i,s,l){var c=Xn();l={lane:c,revertLane:0,action:l,hasEagerState:!1,eagerState:null,next:null},yf(i)?Bw(s,l):(l=vg(i,s,l,c),l!==null&&(xn(l,i,c),zw(l,s,c)))}function Uw(i,s,l){var c=Xn();Ic(i,s,l,c)}function Ic(i,s,l,c){var f={lane:c,revertLane:0,action:l,hasEagerState:!1,eagerState:null,next:null};if(yf(i))Bw(s,f);else{var g=i.alternate;if(i.lanes===0&&(g===null||g.lanes===0)&&(g=s.lastRenderedReducer,g!==null))try{var T=s.lastRenderedState,b=g(T,l);if(f.hasEagerState=!0,f.eagerState=b,Kn(b,T))return ef(i,s,f,0),at===null&&Jd(),!1}catch{}finally{}if(l=vg(i,s,f,c),l!==null)return xn(l,i,c),zw(l,s,c),!0}return!1}function Hg(i,s,l,c){if(c={lane:2,revertLane:O_(),action:c,hasEagerState:!1,eagerState:null,next:null},yf(i)){if(s)throw Error(r(479))}else s=vg(i,l,c,2),s!==null&&xn(s,i,2)}function yf(i){var s=i.alternate;return i===Ve||s!==null&&s===Ve}function Bw(i,s){gl=hf=!0;var l=i.pending;l===null?s.next=s:(s.next=l.next,l.next=s),i.pending=s}function zw(i,s,l){if((l&4194176)!==0){var c=s.lanes;c&=i.pendingLanes,l|=c,s.lanes=l,fs(i,l)}}var Qr={readContext:Tn,use:mf,useCallback:kt,useContext:kt,useEffect:kt,useImperativeHandle:kt,useLayoutEffect:kt,useInsertionEffect:kt,useMemo:kt,useReducer:kt,useRef:kt,useState:kt,useDebugValue:kt,useDeferredValue:kt,useTransition:kt,useSyncExternalStore:kt,useId:kt};Qr.useCacheRefresh=kt,Qr.useMemoCache=kt,Qr.useHostTransitionStatus=kt,Qr.useFormState=kt,Qr.useActionState=kt,Qr.useOptimistic=kt;var Ka={readContext:Tn,use:mf,useCallback:function(i,s){return Bn().memoizedState=[i,s===void 0?null:s],i},useContext:Tn,useEffect:Aw,useImperativeHandle:function(i,s,l){l=l!=null?l.concat([i]):null,gf(4194308,4,Cw.bind(null,s,i),l)},useLayoutEffect:function(i,s){return gf(4194308,4,i,s)},useInsertionEffect:function(i,s){gf(4,2,i,s)},useMemo:function(i,s){var l=Bn();s=s===void 0?null:s;var c=i();if($a){Vr(!0);try{i()}finally{Vr(!1)}}return l.memoizedState=[c,s],c},useReducer:function(i,s,l){var c=Bn();if(l!==void 0){var f=l(s);if($a){Vr(!0);try{l(s)}finally{Vr(!1)}}}else f=s;return c.memoizedState=c.baseState=f,i={pending:null,lanes:0,dispatch:null,lastRenderedReducer:i,lastRenderedState:f},c.queue=i,i=i.dispatch=OP.bind(null,Ve,i),[c.memoizedState,i]},useRef:function(i){var s=Bn();return i={current:i},s.memoizedState=i},useState:function(i){i=Lg(i);var s=i.queue,l=Uw.bind(null,Ve,s);return s.dispatch=l,[i.memoizedState,l]},useDebugValue:zg,useDeferredValue:function(i,s){var l=Bn();return Fg(l,i,s)},useTransition:function(){var i=Lg(!1);return i=Ow.bind(null,Ve,i.queue,!0,!1),Bn().memoizedState=i,[!1,i]},useSyncExternalStore:function(i,s,l){var c=Ve,f=Bn();if(We){if(l===void 0)throw Error(r(407));l=l()}else{if(l=s(),at===null)throw Error(r(349));(Ge&60)!==0||uw(c,s,l)}f.memoizedState=l;var g={value:l,getSnapshot:s};return f.queue=g,Aw(hw.bind(null,c,g,i),[i]),c.flags|=2048,yl(9,cw.bind(null,c,g,l,s),{destroy:void 0},null),l},useId:function(){var i=Bn(),s=at.identifierPrefix;if(We){var l=Di,c=Ci;l=(c&~(1<<32-Rn(c)-1)).toString(32)+l,s=":"+s+"R"+l,l=df++,0<l&&(s+="H"+l.toString(32)),s+=":"}else l=RP++,s=":"+s+"r"+l.toString(32)+":";return i.memoizedState=s},useCacheRefresh:function(){return Bn().memoizedState=NP.bind(null,Ve)}};Ka.useMemoCache=kg,Ka.useHostTransitionStatus=qg,Ka.useFormState=Ew,Ka.useActionState=Ew,Ka.useOptimistic=function(i){var s=Bn();s.memoizedState=s.baseState=i;var l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return s.queue=l,s=Hg.bind(null,Ve,!0,l),l.dispatch=s,[i,s]};var Rs={readContext:Tn,use:mf,useCallback:Pw,useContext:Tn,useEffect:Bg,useImperativeHandle:Dw,useInsertionEffect:Sw,useLayoutEffect:Rw,useMemo:xw,useReducer:pf,useRef:Iw,useState:function(){return pf(xi)},useDebugValue:zg,useDeferredValue:function(i,s){var l=zt();return Nw(l,rt.memoizedState,i,s)},useTransition:function(){var i=pf(xi)[0],s=zt().memoizedState;return[typeof i=="boolean"?i:bc(i),s]},useSyncExternalStore:lw,useId:Mw};Rs.useCacheRefresh=Lw,Rs.useMemoCache=kg,Rs.useHostTransitionStatus=qg,Rs.useFormState=Tw,Rs.useActionState=Tw,Rs.useOptimistic=function(i,s){var l=zt();return mw(l,rt,i,s)};var Qa={readContext:Tn,use:mf,useCallback:Pw,useContext:Tn,useEffect:Bg,useImperativeHandle:Dw,useInsertionEffect:Sw,useLayoutEffect:Rw,useMemo:xw,useReducer:Mg,useRef:Iw,useState:function(){return Mg(xi)},useDebugValue:zg,useDeferredValue:function(i,s){var l=zt();return rt===null?Fg(l,i,s):Nw(l,rt.memoizedState,i,s)},useTransition:function(){var i=Mg(xi)[0],s=zt().memoizedState;return[typeof i=="boolean"?i:bc(i),s]},useSyncExternalStore:lw,useId:Mw};Qa.useCacheRefresh=Lw,Qa.useMemoCache=kg,Qa.useHostTransitionStatus=qg,Qa.useFormState=bw,Qa.useActionState=bw,Qa.useOptimistic=function(i,s){var l=zt();return rt!==null?mw(l,rt,i,s):(l.baseState=i,[i,l.queue.dispatch])};function Gg(i,s,l,c){s=i.memoizedState,l=l(c,s),l=l==null?s:x({},s,l),i.memoizedState=l,i.lanes===0&&(i.updateQueue.baseState=l)}var $g={isMounted:function(i){return(i=i._reactInternals)?Te(i)===i:!1},enqueueSetState:function(i,s,l){i=i._reactInternals;var c=Xn(),f=Ps(c);f.payload=s,l!=null&&(f.callback=l),s=xs(i,f,c),s!==null&&(xn(s,i,c),Rc(s,i,c))},enqueueReplaceState:function(i,s,l){i=i._reactInternals;var c=Xn(),f=Ps(c);f.tag=1,f.payload=s,l!=null&&(f.callback=l),s=xs(i,f,c),s!==null&&(xn(s,i,c),Rc(s,i,c))},enqueueForceUpdate:function(i,s){i=i._reactInternals;var l=Xn(),c=Ps(l);c.tag=2,s!=null&&(c.callback=s),s=xs(i,c,l),s!==null&&(xn(s,i,l),Rc(s,i,l))}};function Fw(i,s,l,c,f,g,T){return i=i.stateNode,typeof i.shouldComponentUpdate=="function"?i.shouldComponentUpdate(c,g,T):s.prototype&&s.prototype.isPureReactComponent?!hc(l,c)||!hc(f,g):!0}function jw(i,s,l,c){i=s.state,typeof s.componentWillReceiveProps=="function"&&s.componentWillReceiveProps(l,c),typeof s.UNSAFE_componentWillReceiveProps=="function"&&s.UNSAFE_componentWillReceiveProps(l,c),s.state!==i&&$g.enqueueReplaceState(s,s.state,null)}function Wa(i,s){var l=s;if("ref"in s){l={};for(var c in s)c!=="ref"&&(l[c]=s[c])}if(i=i.defaultProps){l===s&&(l=x({},l));for(var f in i)l[f]===void 0&&(l[f]=i[f])}return l}var vf=typeof reportError=="function"?reportError:function(i){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var s=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof i=="object"&&i!==null&&typeof i.message=="string"?String(i.message):String(i),error:i});if(!window.dispatchEvent(s))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",i);return}console.error(i)};function qw(i){vf(i)}function Hw(i){console.error(i)}function Gw(i){vf(i)}function Ef(i,s){try{var l=i.onUncaughtError;l(s.value,{componentStack:s.stack})}catch(c){setTimeout(function(){throw c})}}function $w(i,s,l){try{var c=i.onCaughtError;c(l.value,{componentStack:l.stack,errorBoundary:s.tag===1?s.stateNode:null})}catch(f){setTimeout(function(){throw f})}}function Kg(i,s,l){return l=Ps(l),l.tag=3,l.payload={element:null},l.callback=function(){Ef(i,s)},l}function Kw(i){return i=Ps(i),i.tag=3,i}function Qw(i,s,l,c){var f=l.type.getDerivedStateFromError;if(typeof f=="function"){var g=c.value;i.payload=function(){return f(g)},i.callback=function(){$w(s,l,c)}}var T=l.stateNode;T!==null&&typeof T.componentDidCatch=="function"&&(i.callback=function(){$w(s,l,c),typeof f!="function"&&(Ls===null?Ls=new Set([this]):Ls.add(this));var b=c.stack;this.componentDidCatch(c.value,{componentStack:b!==null?b:""})})}function kP(i,s,l,c,f){if(l.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){if(s=l.alternate,s!==null&&Sc(s,l,f,!0),l=mr.current,l!==null){switch(l.tag){case 13:return Kr===null?C_():l.alternate===null&&Rt===0&&(Rt=3),l.flags&=-257,l.flags|=65536,l.lanes=f,c===bg?l.flags|=16384:(s=l.updateQueue,s===null?l.updateQueue=new Set([c]):s.add(c),P_(i,c,f)),!1;case 22:return l.flags|=65536,c===bg?l.flags|=16384:(s=l.updateQueue,s===null?(s={transitions:null,markerInstances:null,retryQueue:new Set([c])},l.updateQueue=s):(l=s.retryQueue,l===null?s.retryQueue=new Set([c]):l.add(c)),P_(i,c,f)),!1}throw Error(r(435,l.tag))}return P_(i,c,f),C_(),!1}if(We)return s=mr.current,s!==null?((s.flags&65536)===0&&(s.flags|=256),s.flags|=65536,s.lanes=f,c!==wg&&(i=Error(r(422),{cause:c}),pc(hr(i,l)))):(c!==wg&&(s=Error(r(423),{cause:c}),pc(hr(s,l))),i=i.current.alternate,i.flags|=65536,f&=-f,i.lanes|=f,c=hr(c,l),f=Kg(i.stateNode,c,f),l_(i,f),Rt!==4&&(Rt=2)),!1;var g=Error(r(520),{cause:c});if(g=hr(g,l),Vc===null?Vc=[g]:Vc.push(g),Rt!==4&&(Rt=2),s===null)return!0;c=hr(c,l),l=s;do{switch(l.tag){case 3:return l.flags|=65536,i=f&-f,l.lanes|=i,i=Kg(l.stateNode,c,i),l_(l,i),!1;case 1:if(s=l.type,g=l.stateNode,(l.flags&128)===0&&(typeof s.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(Ls===null||!Ls.has(g))))return l.flags|=65536,f&=-f,l.lanes|=f,f=Kw(f),Qw(f,i,l,c),l_(l,f),!1}l=l.return}while(l!==null);return!1}var Ww=Error(r(461)),sn=!1;function mn(i,s,l,c){s.child=i===null?ew(s,null,l,c):Ha(s,i.child,l,c)}function Yw(i,s,l,c,f){l=l.render;var g=s.ref;if("ref"in c){var T={};for(var b in c)b!=="ref"&&(T[b]=c[b])}else T=c;return Xa(s),c=Pg(i,s,l,T,g,f),b=xg(),i!==null&&!sn?(Ng(i,s,f),Ni(i,s,f)):(We&&b&&Eg(s),s.flags|=1,mn(i,s,c,f),s.child)}function Xw(i,s,l,c,f){if(i===null){var g=l.type;return typeof g=="function"&&!g_(g)&&g.defaultProps===void 0&&l.compare===null?(s.tag=15,s.type=g,Zw(i,s,g,c,f)):(i=Af(l.type,null,c,s,s.mode,f),i.ref=s.ref,i.return=s,s.child=i)}if(g=i.child,!n_(i,f)){var T=g.memoizedProps;if(l=l.compare,l=l!==null?l:hc,l(T,c)&&i.ref===s.ref)return Ni(i,s,f)}return s.flags|=1,i=Vs(g,c),i.ref=s.ref,i.return=s,s.child=i}function Zw(i,s,l,c,f){if(i!==null){var g=i.memoizedProps;if(hc(g,c)&&i.ref===s.ref)if(sn=!1,s.pendingProps=c=g,n_(i,f))(i.flags&131072)!==0&&(sn=!0);else return s.lanes=i.lanes,Ni(i,s,f)}return Qg(i,s,l,c,f)}function Jw(i,s,l){var c=s.pendingProps,f=c.children,g=(s.stateNode._pendingVisibility&2)!==0,T=i!==null?i.memoizedState:null;if(Ac(i,s),c.mode==="hidden"||g){if((s.flags&128)!==0){if(c=T!==null?T.baseLanes|l:l,i!==null){for(f=s.child=i.child,g=0;f!==null;)g=g|f.lanes|f.childLanes,f=f.sibling;s.childLanes=g&~c}else s.childLanes=0,s.child=null;return e0(i,s,c,l)}if((l&536870912)!==0)s.memoizedState={baseLanes:0,cachePool:null},i!==null&&cf(s,T!==null?T.cachePool:null),T!==null?tw(s,T):Ig(),nw(s);else return s.lanes=s.childLanes=536870912,e0(i,s,T!==null?T.baseLanes|l:l,l)}else T!==null?(cf(s,T.cachePool),tw(s,T),As(),s.memoizedState=null):(i!==null&&cf(s,null),Ig(),As());return mn(i,s,f,l),s.child}function e0(i,s,l,c){var f=Cg();return f=f===null?null:{parent:Yt._currentValue,pool:f},s.memoizedState={baseLanes:l,cachePool:f},i!==null&&cf(s,null),Ig(),nw(s),i!==null&&Sc(i,s,c,!0),null}function Ac(i,s){var l=s.ref;if(l===null)i!==null&&i.ref!==null&&(s.flags|=2097664);else{if(typeof l!="function"&&typeof l!="object")throw Error(r(284));(i===null||i.ref!==l)&&(s.flags|=2097664)}}function Qg(i,s,l,c,f){return Xa(s),l=Pg(i,s,l,c,void 0,f),c=xg(),i!==null&&!sn?(Ng(i,s,f),Ni(i,s,f)):(We&&c&&Eg(s),s.flags|=1,mn(i,s,l,f),s.child)}function t0(i,s,l,c,f,g){return Xa(s),s.updateQueue=null,l=ow(s,c,l,f),aw(i),c=xg(),i!==null&&!sn?(Ng(i,s,g),Ni(i,s,g)):(We&&c&&Eg(s),s.flags|=1,mn(i,s,l,g),s.child)}function n0(i,s,l,c,f){if(Xa(s),s.stateNode===null){var g=ul,T=l.contextType;typeof T=="object"&&T!==null&&(g=Tn(T)),g=new l(c,g),s.memoizedState=g.state!==null&&g.state!==void 0?g.state:null,g.updater=$g,s.stateNode=g,g._reactInternals=s,g=s.stateNode,g.props=c,g.state=s.memoizedState,g.refs={},a_(s),T=l.contextType,g.context=typeof T=="object"&&T!==null?Tn(T):ul,g.state=s.memoizedState,T=l.getDerivedStateFromProps,typeof T=="function"&&(Gg(s,l,T,c),g.state=s.memoizedState),typeof l.getDerivedStateFromProps=="function"||typeof g.getSnapshotBeforeUpdate=="function"||typeof g.UNSAFE_componentWillMount!="function"&&typeof g.componentWillMount!="function"||(T=g.state,typeof g.componentWillMount=="function"&&g.componentWillMount(),typeof g.UNSAFE_componentWillMount=="function"&&g.UNSAFE_componentWillMount(),T!==g.state&&$g.enqueueReplaceState(g,g.state,null),Dc(s,c,g,f),Cc(),g.state=s.memoizedState),typeof g.componentDidMount=="function"&&(s.flags|=4194308),c=!0}else if(i===null){g=s.stateNode;var b=s.memoizedProps,C=Wa(l,b);g.props=C;var M=g.context,J=l.contextType;T=ul,typeof J=="object"&&J!==null&&(T=Tn(J));var ne=l.getDerivedStateFromProps;J=typeof ne=="function"||typeof g.getSnapshotBeforeUpdate=="function",b=s.pendingProps!==b,J||typeof g.UNSAFE_componentWillReceiveProps!="function"&&typeof g.componentWillReceiveProps!="function"||(b||M!==T)&&jw(s,g,c,T),Ds=!1;var G=s.memoizedState;g.state=G,Dc(s,c,g,f),Cc(),M=s.memoizedState,b||G!==M||Ds?(typeof ne=="function"&&(Gg(s,l,ne,c),M=s.memoizedState),(C=Ds||Fw(s,l,C,c,G,M,T))?(J||typeof g.UNSAFE_componentWillMount!="function"&&typeof g.componentWillMount!="function"||(typeof g.componentWillMount=="function"&&g.componentWillMount(),typeof g.UNSAFE_componentWillMount=="function"&&g.UNSAFE_componentWillMount()),typeof g.componentDidMount=="function"&&(s.flags|=4194308)):(typeof g.componentDidMount=="function"&&(s.flags|=4194308),s.memoizedProps=c,s.memoizedState=M),g.props=c,g.state=M,g.context=T,c=C):(typeof g.componentDidMount=="function"&&(s.flags|=4194308),c=!1)}else{g=s.stateNode,o_(i,s),T=s.memoizedProps,J=Wa(l,T),g.props=J,ne=s.pendingProps,G=g.context,M=l.contextType,C=ul,typeof M=="object"&&M!==null&&(C=Tn(M)),b=l.getDerivedStateFromProps,(M=typeof b=="function"||typeof g.getSnapshotBeforeUpdate=="function")||typeof g.UNSAFE_componentWillReceiveProps!="function"&&typeof g.componentWillReceiveProps!="function"||(T!==ne||G!==C)&&jw(s,g,c,C),Ds=!1,G=s.memoizedState,g.state=G,Dc(s,c,g,f),Cc();var X=s.memoizedState;T!==ne||G!==X||Ds||i!==null&&i.dependencies!==null&&Tf(i.dependencies)?(typeof b=="function"&&(Gg(s,l,b,c),X=s.memoizedState),(J=Ds||Fw(s,l,J,c,G,X,C)||i!==null&&i.dependencies!==null&&Tf(i.dependencies))?(M||typeof g.UNSAFE_componentWillUpdate!="function"&&typeof g.componentWillUpdate!="function"||(typeof g.componentWillUpdate=="function"&&g.componentWillUpdate(c,X,C),typeof g.UNSAFE_componentWillUpdate=="function"&&g.UNSAFE_componentWillUpdate(c,X,C)),typeof g.componentDidUpdate=="function"&&(s.flags|=4),typeof g.getSnapshotBeforeUpdate=="function"&&(s.flags|=1024)):(typeof g.componentDidUpdate!="function"||T===i.memoizedProps&&G===i.memoizedState||(s.flags|=4),typeof g.getSnapshotBeforeUpdate!="function"||T===i.memoizedProps&&G===i.memoizedState||(s.flags|=1024),s.memoizedProps=c,s.memoizedState=X),g.props=c,g.state=X,g.context=C,c=J):(typeof g.componentDidUpdate!="function"||T===i.memoizedProps&&G===i.memoizedState||(s.flags|=4),typeof g.getSnapshotBeforeUpdate!="function"||T===i.memoizedProps&&G===i.memoizedState||(s.flags|=1024),c=!1)}return g=c,Ac(i,s),c=(s.flags&128)!==0,g||c?(g=s.stateNode,l=c&&typeof l.getDerivedStateFromError!="function"?null:g.render(),s.flags|=1,i!==null&&c?(s.child=Ha(s,i.child,null,f),s.child=Ha(s,null,l,f)):mn(i,s,l,f),s.memoizedState=g.state,i=s.child):i=Ni(i,s,f),i}function r0(i,s,l,c){return mc(),s.flags|=256,mn(i,s,l,c),s.child}var Wg={dehydrated:null,treeContext:null,retryLane:0};function Yg(i){return{baseLanes:i,cachePool:sw()}}function Xg(i,s,l){return i=i!==null?i.childLanes&~l:0,s&&(i|=yr),i}function i0(i,s,l){var c=s.pendingProps,f=!1,g=(s.flags&128)!==0,T;if((T=g)||(T=i!==null&&i.memoizedState===null?!1:(Wt.current&2)!==0),T&&(f=!0,s.flags&=-129),T=(s.flags&32)!==0,s.flags&=-33,i===null){if(We){if(f?Is(s):As(),We){var b=fn,C;if(C=b){e:{for(C=b,b=$r;C.nodeType!==8;){if(!b){b=null;break e}if(C=Dr(C.nextSibling),C===null){b=null;break e}}b=C}b!==null?(s.memoizedState={dehydrated:b,treeContext:Fa!==null?{id:Ci,overflow:Di}:null,retryLane:536870912},C=_r(18,null,null,0),C.stateNode=b,C.return=s,s.child=C,Pn=s,fn=null,C=!0):C=!1}C||qa(s)}if(b=s.memoizedState,b!==null&&(b=b.dehydrated,b!==null))return b.data==="$!"?s.lanes=16:s.lanes=536870912,null;Pi(s)}return b=c.children,c=c.fallback,f?(As(),f=s.mode,b=Jg({mode:"hidden",children:b},f),c=Ja(c,f,l,null),b.return=s,c.return=s,b.sibling=c,s.child=b,f=s.child,f.memoizedState=Yg(l),f.childLanes=Xg(i,T,l),s.memoizedState=Wg,c):(Is(s),Zg(s,b))}if(C=i.memoizedState,C!==null&&(b=C.dehydrated,b!==null)){if(g)s.flags&256?(Is(s),s.flags&=-257,s=e_(i,s,l)):s.memoizedState!==null?(As(),s.child=i.child,s.flags|=128,s=null):(As(),f=c.fallback,b=s.mode,c=Jg({mode:"visible",children:c.children},b),f=Ja(f,b,l,null),f.flags|=2,c.return=s,f.return=s,c.sibling=f,s.child=c,Ha(s,i.child,null,l),c=s.child,c.memoizedState=Yg(l),c.childLanes=Xg(i,T,l),s.memoizedState=Wg,s=f);else if(Is(s),b.data==="$!"){if(T=b.nextSibling&&b.nextSibling.dataset,T)var M=T.dgst;T=M,c=Error(r(419)),c.stack="",c.digest=T,pc({value:c,source:null,stack:null}),s=e_(i,s,l)}else if(sn||Sc(i,s,l,!1),T=(l&i.childLanes)!==0,sn||T){if(T=at,T!==null){if(c=l&-l,(c&42)!==0)c=1;else switch(c){case 2:c=1;break;case 8:c=4;break;case 32:c=16;break;case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:c=64;break;case 268435456:c=134217728;break;default:c=0}if(c=(c&(T.suspendedLanes|l))!==0?0:c,c!==0&&c!==C.retryLane)throw C.retryLane=c,bs(i,c),xn(T,i,c),Ww}b.data==="$?"||C_(),s=e_(i,s,l)}else b.data==="$?"?(s.flags|=128,s.child=i.child,s=WP.bind(null,i),b._reactRetry=s,s=null):(i=C.treeContext,fn=Dr(b.nextSibling),Pn=s,We=!0,Rr=null,$r=!1,i!==null&&(dr[fr++]=Ci,dr[fr++]=Di,dr[fr++]=Fa,Ci=i.id,Di=i.overflow,Fa=s),s=Zg(s,c.children),s.flags|=4096);return s}return f?(As(),f=c.fallback,b=s.mode,C=i.child,M=C.sibling,c=Vs(C,{mode:"hidden",children:c.children}),c.subtreeFlags=C.subtreeFlags&31457280,M!==null?f=Vs(M,f):(f=Ja(f,b,l,null),f.flags|=2),f.return=s,c.return=s,c.sibling=f,s.child=c,c=f,f=s.child,b=i.child.memoizedState,b===null?b=Yg(l):(C=b.cachePool,C!==null?(M=Yt._currentValue,C=C.parent!==M?{parent:M,pool:M}:C):C=sw(),b={baseLanes:b.baseLanes|l,cachePool:C}),f.memoizedState=b,f.childLanes=Xg(i,T,l),s.memoizedState=Wg,c):(Is(s),l=i.child,i=l.sibling,l=Vs(l,{mode:"visible",children:c.children}),l.return=s,l.sibling=null,i!==null&&(T=s.deletions,T===null?(s.deletions=[i],s.flags|=16):T.push(i)),s.child=l,s.memoizedState=null,l)}function Zg(i,s){return s=Jg({mode:"visible",children:s},i.mode),s.return=i,i.child=s}function Jg(i,s){return P0(i,s,0,null)}function e_(i,s,l){return Ha(s,i.child,null,l),i=Zg(s,s.pendingProps.children),i.flags|=2,s.memoizedState=null,i}function s0(i,s,l){i.lanes|=s;var c=i.alternate;c!==null&&(c.lanes|=s),i_(i.return,s,l)}function t_(i,s,l,c,f){var g=i.memoizedState;g===null?i.memoizedState={isBackwards:s,rendering:null,renderingStartTime:0,last:c,tail:l,tailMode:f}:(g.isBackwards=s,g.rendering=null,g.renderingStartTime=0,g.last=c,g.tail=l,g.tailMode=f)}function a0(i,s,l){var c=s.pendingProps,f=c.revealOrder,g=c.tail;if(mn(i,s,c.children,l),c=Wt.current,(c&2)!==0)c=c&1|2,s.flags|=128;else{if(i!==null&&(i.flags&128)!==0)e:for(i=s.child;i!==null;){if(i.tag===13)i.memoizedState!==null&&s0(i,l,s);else if(i.tag===19)s0(i,l,s);else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===s)break e;for(;i.sibling===null;){if(i.return===null||i.return===s)break e;i=i.return}i.sibling.return=i.return,i=i.sibling}c&=1}switch(Ke(Wt,c),f){case"forwards":for(l=s.child,f=null;l!==null;)i=l.alternate,i!==null&&uf(i)===null&&(f=l),l=l.sibling;l=f,l===null?(f=s.child,s.child=null):(f=l.sibling,l.sibling=null),t_(s,!1,f,l,g);break;case"backwards":for(l=null,f=s.child,s.child=null;f!==null;){if(i=f.alternate,i!==null&&uf(i)===null){s.child=f;break}i=f.sibling,f.sibling=l,l=f,f=i}t_(s,!0,l,null,g);break;case"together":t_(s,!1,null,null,void 0);break;default:s.memoizedState=null}return s.child}function Ni(i,s,l){if(i!==null&&(s.dependencies=i.dependencies),Ms|=s.lanes,(l&s.childLanes)===0)if(i!==null){if(Sc(i,s,l,!1),(l&s.childLanes)===0)return null}else return null;if(i!==null&&s.child!==i.child)throw Error(r(153));if(s.child!==null){for(i=s.child,l=Vs(i,i.pendingProps),s.child=l,l.return=s;i.sibling!==null;)i=i.sibling,l=l.sibling=Vs(i,i.pendingProps),l.return=s;l.sibling=null}return s.child}function n_(i,s){return(i.lanes&s)!==0?!0:(i=i.dependencies,!!(i!==null&&Tf(i)))}function VP(i,s,l){switch(s.tag){case 3:os(s,s.stateNode.containerInfo),Cs(s,Yt,i.memoizedState.cache),mc();break;case 27:case 5:Hu(s);break;case 4:os(s,s.stateNode.containerInfo);break;case 10:Cs(s,s.type,s.memoizedProps.value);break;case 13:var c=s.memoizedState;if(c!==null)return c.dehydrated!==null?(Is(s),s.flags|=128,null):(l&s.child.childLanes)!==0?i0(i,s,l):(Is(s),i=Ni(i,s,l),i!==null?i.sibling:null);Is(s);break;case 19:var f=(i.flags&128)!==0;if(c=(l&s.childLanes)!==0,c||(Sc(i,s,l,!1),c=(l&s.childLanes)!==0),f){if(c)return a0(i,s,l);s.flags|=128}if(f=s.memoizedState,f!==null&&(f.rendering=null,f.tail=null,f.lastEffect=null),Ke(Wt,Wt.current),c)break;return null;case 22:case 23:return s.lanes=0,Jw(i,s,l);case 24:Cs(s,Yt,i.memoizedState.cache)}return Ni(i,s,l)}function o0(i,s,l){if(i!==null)if(i.memoizedProps!==s.pendingProps)sn=!0;else{if(!n_(i,l)&&(s.flags&128)===0)return sn=!1,VP(i,s,l);sn=(i.flags&131072)!==0}else sn=!1,We&&(s.flags&1048576)!==0&&GT(s,rf,s.index);switch(s.lanes=0,s.tag){case 16:e:{i=s.pendingProps;var c=s.elementType,f=c._init;if(c=f(c._payload),s.type=c,typeof c=="function")g_(c)?(i=Wa(c,i),s.tag=1,s=n0(null,s,c,i,l)):(s.tag=0,s=Qg(null,s,c,i,l));else{if(c!=null){if(f=c.$$typeof,f===P){s.tag=11,s=Yw(null,s,c,i,l);break e}else if(f===H){s.tag=14,s=Xw(null,s,c,i,l);break e}}throw s=R(c)||c,Error(r(306,s,""))}}return s;case 0:return Qg(i,s,s.type,s.pendingProps,l);case 1:return c=s.type,f=Wa(c,s.pendingProps),n0(i,s,c,f,l);case 3:e:{if(os(s,s.stateNode.containerInfo),i===null)throw Error(r(387));var g=s.pendingProps;f=s.memoizedState,c=f.element,o_(i,s),Dc(s,g,null,l);var T=s.memoizedState;if(g=T.cache,Cs(s,Yt,g),g!==f.cache&&s_(s,[Yt],l,!0),Cc(),g=T.element,f.isDehydrated)if(f={element:g,isDehydrated:!1,cache:T.cache},s.updateQueue.baseState=f,s.memoizedState=f,s.flags&256){s=r0(i,s,g,l);break e}else if(g!==c){c=hr(Error(r(424)),s),pc(c),s=r0(i,s,g,l);break e}else for(fn=Dr(s.stateNode.containerInfo.firstChild),Pn=s,We=!0,Rr=null,$r=!0,l=ew(s,null,g,l),s.child=l;l;)l.flags=l.flags&-3|4096,l=l.sibling;else{if(mc(),g===c){s=Ni(i,s,l);break e}mn(i,s,g,l)}s=s.child}return s;case 26:return Ac(i,s),i===null?(l=cb(s.type,null,s.pendingProps,null))?s.memoizedState=l:We||(l=s.type,i=s.pendingProps,c=Lf(rr.current).createElement(l),c[tn]=s,c[$t]=i,pn(c,l,i),_t(c),s.stateNode=c):s.memoizedState=cb(s.type,i.memoizedProps,s.pendingProps,i.memoizedState),null;case 27:return Hu(s),i===null&&We&&(c=s.stateNode=ob(s.type,s.pendingProps,rr.current),Pn=s,$r=!0,fn=Dr(c.firstChild)),c=s.pendingProps.children,i!==null||We?mn(i,s,c,l):s.child=Ha(s,null,c,l),Ac(i,s),s.child;case 5:return i===null&&We&&((f=c=fn)&&(c=hx(c,s.type,s.pendingProps,$r),c!==null?(s.stateNode=c,Pn=s,fn=Dr(c.firstChild),$r=!1,f=!0):f=!1),f||qa(s)),Hu(s),f=s.type,g=s.pendingProps,T=i!==null?i.memoizedProps:null,c=g.children,j_(f,g)?c=null:T!==null&&j_(f,T)&&(s.flags|=32),s.memoizedState!==null&&(f=Pg(i,s,CP,null,null,l),Hc._currentValue=f),Ac(i,s),mn(i,s,c,l),s.child;case 6:return i===null&&We&&((i=l=fn)&&(l=dx(l,s.pendingProps,$r),l!==null?(s.stateNode=l,Pn=s,fn=null,i=!0):i=!1),i||qa(s)),null;case 13:return i0(i,s,l);case 4:return os(s,s.stateNode.containerInfo),c=s.pendingProps,i===null?s.child=Ha(s,null,c,l):mn(i,s,c,l),s.child;case 11:return Yw(i,s,s.type,s.pendingProps,l);case 7:return mn(i,s,s.pendingProps,l),s.child;case 8:return mn(i,s,s.pendingProps.children,l),s.child;case 12:return mn(i,s,s.pendingProps.children,l),s.child;case 10:return c=s.pendingProps,Cs(s,s.type,c.value),mn(i,s,c.children,l),s.child;case 9:return f=s.type._context,c=s.pendingProps.children,Xa(s),f=Tn(f),c=c(f),s.flags|=1,mn(i,s,c,l),s.child;case 14:return Xw(i,s,s.type,s.pendingProps,l);case 15:return Zw(i,s,s.type,s.pendingProps,l);case 19:return a0(i,s,l);case 22:return Jw(i,s,l);case 24:return Xa(s),c=Tn(Yt),i===null?(f=Cg(),f===null&&(f=at,g=Sg(),f.pooledCache=g,g.refCount++,g!==null&&(f.pooledCacheLanes|=l),f=g),s.memoizedState={parent:c,cache:f},a_(s),Cs(s,Yt,f)):((i.lanes&l)!==0&&(o_(i,s),Dc(s,null,null,l),Cc()),f=i.memoizedState,g=s.memoizedState,f.parent!==c?(f={parent:c,cache:c},s.memoizedState=f,s.lanes===0&&(s.memoizedState=s.updateQueue.baseState=f),Cs(s,Yt,c)):(c=g.cache,Cs(s,Yt,c),c!==f.cache&&s_(s,[Yt],l,!0))),mn(i,s,s.pendingProps.children,l),s.child;case 29:throw s.pendingProps}throw Error(r(156,s.tag))}var r_=Me(null),Ya=null,Oi=null;function Cs(i,s,l){Ke(r_,s._currentValue),s._currentValue=l}function ki(i){i._currentValue=r_.current,Ze(r_)}function i_(i,s,l){for(;i!==null;){var c=i.alternate;if((i.childLanes&s)!==s?(i.childLanes|=s,c!==null&&(c.childLanes|=s)):c!==null&&(c.childLanes&s)!==s&&(c.childLanes|=s),i===l)break;i=i.return}}function s_(i,s,l,c){var f=i.child;for(f!==null&&(f.return=i);f!==null;){var g=f.dependencies;if(g!==null){var T=f.child;g=g.firstContext;e:for(;g!==null;){var b=g;g=f;for(var C=0;C<s.length;C++)if(b.context===s[C]){g.lanes|=l,b=g.alternate,b!==null&&(b.lanes|=l),i_(g.return,l,i),c||(T=null);break e}g=b.next}}else if(f.tag===18){if(T=f.return,T===null)throw Error(r(341));T.lanes|=l,g=T.alternate,g!==null&&(g.lanes|=l),i_(T,l,i),T=null}else T=f.child;if(T!==null)T.return=f;else for(T=f;T!==null;){if(T===i){T=null;break}if(f=T.sibling,f!==null){f.return=T.return,T=f;break}T=T.return}f=T}}function Sc(i,s,l,c){i=null;for(var f=s,g=!1;f!==null;){if(!g){if((f.flags&524288)!==0)g=!0;else if((f.flags&262144)!==0)break}if(f.tag===10){var T=f.alternate;if(T===null)throw Error(r(387));if(T=T.memoizedProps,T!==null){var b=f.type;Kn(f.pendingProps.value,T.value)||(i!==null?i.push(b):i=[b])}}else if(f===as.current){if(T=f.alternate,T===null)throw Error(r(387));T.memoizedState.memoizedState!==f.memoizedState.memoizedState&&(i!==null?i.push(Hc):i=[Hc])}f=f.return}i!==null&&s_(s,i,l,c),s.flags|=262144}function Tf(i){for(i=i.firstContext;i!==null;){if(!Kn(i.context._currentValue,i.memoizedValue))return!0;i=i.next}return!1}function Xa(i){Ya=i,Oi=null,i=i.dependencies,i!==null&&(i.firstContext=null)}function Tn(i){return l0(Ya,i)}function wf(i,s){return Ya===null&&Xa(i),l0(i,s)}function l0(i,s){var l=s._currentValue;if(s={context:s,memoizedValue:l,next:null},Oi===null){if(i===null)throw Error(r(308));Oi=s,i.dependencies={lanes:0,firstContext:s},i.flags|=524288}else Oi=Oi.next=s;return l}var Ds=!1;function a_(i){i.updateQueue={baseState:i.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function o_(i,s){i=i.updateQueue,s.updateQueue===i&&(s.updateQueue={baseState:i.baseState,firstBaseUpdate:i.firstBaseUpdate,lastBaseUpdate:i.lastBaseUpdate,shared:i.shared,callbacks:null})}function Ps(i){return{lane:i,tag:0,payload:null,callback:null,next:null}}function xs(i,s,l){var c=i.updateQueue;if(c===null)return null;if(c=c.shared,(vt&2)!==0){var f=c.pending;return f===null?s.next=s:(s.next=f.next,f.next=s),c.pending=s,s=tf(i),qT(i,null,l),s}return ef(i,c,s,l),tf(i)}function Rc(i,s,l){if(s=s.updateQueue,s!==null&&(s=s.shared,(l&4194176)!==0)){var c=s.lanes;c&=i.pendingLanes,l|=c,s.lanes=l,fs(i,l)}}function l_(i,s){var l=i.updateQueue,c=i.alternate;if(c!==null&&(c=c.updateQueue,l===c)){var f=null,g=null;if(l=l.firstBaseUpdate,l!==null){do{var T={lane:l.lane,tag:l.tag,payload:l.payload,callback:null,next:null};g===null?f=g=T:g=g.next=T,l=l.next}while(l!==null);g===null?f=g=s:g=g.next=s}else f=g=s;l={baseState:c.baseState,firstBaseUpdate:f,lastBaseUpdate:g,shared:c.shared,callbacks:c.callbacks},i.updateQueue=l;return}i=l.lastBaseUpdate,i===null?l.firstBaseUpdate=s:i.next=s,l.lastBaseUpdate=s}var u_=!1;function Cc(){if(u_){var i=pl;if(i!==null)throw i}}function Dc(i,s,l,c){u_=!1;var f=i.updateQueue;Ds=!1;var g=f.firstBaseUpdate,T=f.lastBaseUpdate,b=f.shared.pending;if(b!==null){f.shared.pending=null;var C=b,M=C.next;C.next=null,T===null?g=M:T.next=M,T=C;var J=i.alternate;J!==null&&(J=J.updateQueue,b=J.lastBaseUpdate,b!==T&&(b===null?J.firstBaseUpdate=M:b.next=M,J.lastBaseUpdate=C))}if(g!==null){var ne=f.baseState;T=0,J=M=C=null,b=g;do{var G=b.lane&-536870913,X=G!==b.lane;if(X?(Ge&G)===G:(c&G)===G){G!==0&&G===ml&&(u_=!0),J!==null&&(J=J.next={lane:0,tag:b.tag,payload:b.payload,callback:null,next:null});e:{var ve=i,De=b;G=s;var Ct=l;switch(De.tag){case 1:if(ve=De.payload,typeof ve=="function"){ne=ve.call(Ct,ne,G);break e}ne=ve;break e;case 3:ve.flags=ve.flags&-65537|128;case 0:if(ve=De.payload,G=typeof ve=="function"?ve.call(Ct,ne,G):ve,G==null)break e;ne=x({},ne,G);break e;case 2:Ds=!0}}G=b.callback,G!==null&&(i.flags|=64,X&&(i.flags|=8192),X=f.callbacks,X===null?f.callbacks=[G]:X.push(G))}else X={lane:G,tag:b.tag,payload:b.payload,callback:b.callback,next:null},J===null?(M=J=X,C=ne):J=J.next=X,T|=G;if(b=b.next,b===null){if(b=f.shared.pending,b===null)break;X=b,b=X.next,X.next=null,f.lastBaseUpdate=X,f.shared.pending=null}}while(!0);J===null&&(C=ne),f.baseState=C,f.firstBaseUpdate=M,f.lastBaseUpdate=J,g===null&&(f.shared.lanes=0),Ms|=T,i.lanes=T,i.memoizedState=ne}}function u0(i,s){if(typeof i!="function")throw Error(r(191,i));i.call(s)}function c0(i,s){var l=i.callbacks;if(l!==null)for(i.callbacks=null,i=0;i<l.length;i++)u0(l[i],s)}function Pc(i,s){try{var l=s.updateQueue,c=l!==null?l.lastEffect:null;if(c!==null){var f=c.next;l=f;do{if((l.tag&i)===i){c=void 0;var g=l.create,T=l.inst;c=g(),T.destroy=c}l=l.next}while(l!==f)}}catch(b){st(s,s.return,b)}}function Ns(i,s,l){try{var c=s.updateQueue,f=c!==null?c.lastEffect:null;if(f!==null){var g=f.next;c=g;do{if((c.tag&i)===i){var T=c.inst,b=T.destroy;if(b!==void 0){T.destroy=void 0,f=s;var C=l;try{b()}catch(M){st(f,C,M)}}}c=c.next}while(c!==g)}}catch(M){st(s,s.return,M)}}function h0(i){var s=i.updateQueue;if(s!==null){var l=i.stateNode;try{c0(s,l)}catch(c){st(i,i.return,c)}}}function d0(i,s,l){l.props=Wa(i.type,i.memoizedProps),l.state=i.memoizedState;try{l.componentWillUnmount()}catch(c){st(i,s,c)}}function Za(i,s){try{var l=i.ref;if(l!==null){var c=i.stateNode;switch(i.tag){case 26:case 27:case 5:var f=c;break;default:f=c}typeof l=="function"?i.refCleanup=l(f):l.current=f}}catch(g){st(i,s,g)}}function Qn(i,s){var l=i.ref,c=i.refCleanup;if(l!==null)if(typeof c=="function")try{c()}catch(f){st(i,s,f)}finally{i.refCleanup=null,i=i.alternate,i!=null&&(i.refCleanup=null)}else if(typeof l=="function")try{l(null)}catch(f){st(i,s,f)}else l.current=null}function f0(i){var s=i.type,l=i.memoizedProps,c=i.stateNode;try{e:switch(s){case"button":case"input":case"select":case"textarea":l.autoFocus&&c.focus();break e;case"img":l.src?c.src=l.src:l.srcSet&&(c.srcset=l.srcSet)}}catch(f){st(i,i.return,f)}}function m0(i,s,l){try{var c=i.stateNode;ax(c,i.type,l,s),c[$t]=s}catch(f){st(i,i.return,f)}}function p0(i){return i.tag===5||i.tag===3||i.tag===26||i.tag===27||i.tag===4}function c_(i){e:for(;;){for(;i.sibling===null;){if(i.return===null||p0(i.return))return null;i=i.return}for(i.sibling.return=i.return,i=i.sibling;i.tag!==5&&i.tag!==6&&i.tag!==27&&i.tag!==18;){if(i.flags&2||i.child===null||i.tag===4)continue e;i.child.return=i,i=i.child}if(!(i.flags&2))return i.stateNode}}function h_(i,s,l){var c=i.tag;if(c===5||c===6)i=i.stateNode,s?l.nodeType===8?l.parentNode.insertBefore(i,s):l.insertBefore(i,s):(l.nodeType===8?(s=l.parentNode,s.insertBefore(i,l)):(s=l,s.appendChild(i)),l=l._reactRootContainer,l!=null||s.onclick!==null||(s.onclick=Mf));else if(c!==4&&c!==27&&(i=i.child,i!==null))for(h_(i,s,l),i=i.sibling;i!==null;)h_(i,s,l),i=i.sibling}function bf(i,s,l){var c=i.tag;if(c===5||c===6)i=i.stateNode,s?l.insertBefore(i,s):l.appendChild(i);else if(c!==4&&c!==27&&(i=i.child,i!==null))for(bf(i,s,l),i=i.sibling;i!==null;)bf(i,s,l),i=i.sibling}var Vi=!1,St=!1,d_=!1,g0=typeof WeakSet=="function"?WeakSet:Set,an=null,_0=!1;function MP(i,s){if(i=i.containerInfo,z_=qf,i=kT(i),mg(i)){if("selectionStart"in i)var l={start:i.selectionStart,end:i.selectionEnd};else e:{l=(l=i.ownerDocument)&&l.defaultView||window;var c=l.getSelection&&l.getSelection();if(c&&c.rangeCount!==0){l=c.anchorNode;var f=c.anchorOffset,g=c.focusNode;c=c.focusOffset;try{l.nodeType,g.nodeType}catch{l=null;break e}var T=0,b=-1,C=-1,M=0,J=0,ne=i,G=null;t:for(;;){for(var X;ne!==l||f!==0&&ne.nodeType!==3||(b=T+f),ne!==g||c!==0&&ne.nodeType!==3||(C=T+c),ne.nodeType===3&&(T+=ne.nodeValue.length),(X=ne.firstChild)!==null;)G=ne,ne=X;for(;;){if(ne===i)break t;if(G===l&&++M===f&&(b=T),G===g&&++J===c&&(C=T),(X=ne.nextSibling)!==null)break;ne=G,G=ne.parentNode}ne=X}l=b===-1||C===-1?null:{start:b,end:C}}else l=null}l=l||{start:0,end:0}}else l=null;for(F_={focusedElem:i,selectionRange:l},qf=!1,an=s;an!==null;)if(s=an,i=s.child,(s.subtreeFlags&1028)!==0&&i!==null)i.return=s,an=i;else for(;an!==null;){switch(s=an,g=s.alternate,i=s.flags,s.tag){case 0:break;case 11:case 15:break;case 1:if((i&1024)!==0&&g!==null){i=void 0,l=s,f=g.memoizedProps,g=g.memoizedState,c=l.stateNode;try{var ve=Wa(l.type,f,l.elementType===l.type);i=c.getSnapshotBeforeUpdate(ve,g),c.__reactInternalSnapshotBeforeUpdate=i}catch(De){st(l,l.return,De)}}break;case 3:if((i&1024)!==0){if(i=s.stateNode.containerInfo,l=i.nodeType,l===9)G_(i);else if(l===1)switch(i.nodeName){case"HEAD":case"HTML":case"BODY":G_(i);break;default:i.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((i&1024)!==0)throw Error(r(163))}if(i=s.sibling,i!==null){i.return=s.return,an=i;break}an=s.return}return ve=_0,_0=!1,ve}function y0(i,s,l){var c=l.flags;switch(l.tag){case 0:case 11:case 15:Li(i,l),c&4&&Pc(5,l);break;case 1:if(Li(i,l),c&4)if(i=l.stateNode,s===null)try{i.componentDidMount()}catch(b){st(l,l.return,b)}else{var f=Wa(l.type,s.memoizedProps);s=s.memoizedState;try{i.componentDidUpdate(f,s,i.__reactInternalSnapshotBeforeUpdate)}catch(b){st(l,l.return,b)}}c&64&&h0(l),c&512&&Za(l,l.return);break;case 3:if(Li(i,l),c&64&&(c=l.updateQueue,c!==null)){if(i=null,l.child!==null)switch(l.child.tag){case 27:case 5:i=l.child.stateNode;break;case 1:i=l.child.stateNode}try{c0(c,i)}catch(b){st(l,l.return,b)}}break;case 26:Li(i,l),c&512&&Za(l,l.return);break;case 27:case 5:Li(i,l),s===null&&c&4&&f0(l),c&512&&Za(l,l.return);break;case 12:Li(i,l);break;case 13:Li(i,l),c&4&&T0(i,l);break;case 22:if(f=l.memoizedState!==null||Vi,!f){s=s!==null&&s.memoizedState!==null||St;var g=Vi,T=St;Vi=f,(St=s)&&!T?Os(i,l,(l.subtreeFlags&8772)!==0):Li(i,l),Vi=g,St=T}c&512&&(l.memoizedProps.mode==="manual"?Za(l,l.return):Qn(l,l.return));break;default:Li(i,l)}}function v0(i){var s=i.alternate;s!==null&&(i.alternate=null,v0(s)),i.child=null,i.deletions=null,i.sibling=null,i.tag===5&&(s=i.stateNode,s!==null&&Ca(s)),i.stateNode=null,i.return=null,i.dependencies=null,i.memoizedProps=null,i.memoizedState=null,i.pendingProps=null,i.stateNode=null,i.updateQueue=null}var Ft=null,Wn=!1;function Mi(i,s,l){for(l=l.child;l!==null;)E0(i,s,l),l=l.sibling}function E0(i,s,l){if(En&&typeof En.onCommitFiberUnmount=="function")try{En.onCommitFiberUnmount(ls,l)}catch{}switch(l.tag){case 26:St||Qn(l,s),Mi(i,s,l),l.memoizedState?l.memoizedState.count--:l.stateNode&&(l=l.stateNode,l.parentNode.removeChild(l));break;case 27:St||Qn(l,s);var c=Ft,f=Wn;for(Ft=l.stateNode,Mi(i,s,l),l=l.stateNode,s=l.attributes;s.length;)l.removeAttributeNode(s[0]);Ca(l),Ft=c,Wn=f;break;case 5:St||Qn(l,s);case 6:f=Ft;var g=Wn;if(Ft=null,Mi(i,s,l),Ft=f,Wn=g,Ft!==null)if(Wn)try{i=Ft,c=l.stateNode,i.nodeType===8?i.parentNode.removeChild(c):i.removeChild(c)}catch(T){st(l,s,T)}else try{Ft.removeChild(l.stateNode)}catch(T){st(l,s,T)}break;case 18:Ft!==null&&(Wn?(s=Ft,l=l.stateNode,s.nodeType===8?H_(s.parentNode,l):s.nodeType===1&&H_(s,l),Qc(s)):H_(Ft,l.stateNode));break;case 4:c=Ft,f=Wn,Ft=l.stateNode.containerInfo,Wn=!0,Mi(i,s,l),Ft=c,Wn=f;break;case 0:case 11:case 14:case 15:St||Ns(2,l,s),St||Ns(4,l,s),Mi(i,s,l);break;case 1:St||(Qn(l,s),c=l.stateNode,typeof c.componentWillUnmount=="function"&&d0(l,s,c)),Mi(i,s,l);break;case 21:Mi(i,s,l);break;case 22:St||Qn(l,s),St=(c=St)||l.memoizedState!==null,Mi(i,s,l),St=c;break;default:Mi(i,s,l)}}function T0(i,s){if(s.memoizedState===null&&(i=s.alternate,i!==null&&(i=i.memoizedState,i!==null&&(i=i.dehydrated,i!==null))))try{Qc(i)}catch(l){st(s,s.return,l)}}function LP(i){switch(i.tag){case 13:case 19:var s=i.stateNode;return s===null&&(s=i.stateNode=new g0),s;case 22:return i=i.stateNode,s=i._retryCache,s===null&&(s=i._retryCache=new g0),s;default:throw Error(r(435,i.tag))}}function f_(i,s){var l=LP(i);s.forEach(function(c){var f=YP.bind(null,i,c);l.has(c)||(l.add(c),c.then(f,f))})}function pr(i,s){var l=s.deletions;if(l!==null)for(var c=0;c<l.length;c++){var f=l[c],g=i,T=s,b=T;e:for(;b!==null;){switch(b.tag){case 27:case 5:Ft=b.stateNode,Wn=!1;break e;case 3:Ft=b.stateNode.containerInfo,Wn=!0;break e;case 4:Ft=b.stateNode.containerInfo,Wn=!0;break e}b=b.return}if(Ft===null)throw Error(r(160));E0(g,T,f),Ft=null,Wn=!1,g=f.alternate,g!==null&&(g.return=null),f.return=null}if(s.subtreeFlags&13878)for(s=s.child;s!==null;)w0(s,i),s=s.sibling}var Cr=null;function w0(i,s){var l=i.alternate,c=i.flags;switch(i.tag){case 0:case 11:case 14:case 15:pr(s,i),gr(i),c&4&&(Ns(3,i,i.return),Pc(3,i),Ns(5,i,i.return));break;case 1:pr(s,i),gr(i),c&512&&(St||l===null||Qn(l,l.return)),c&64&&Vi&&(i=i.updateQueue,i!==null&&(c=i.callbacks,c!==null&&(l=i.shared.hiddenCallbacks,i.shared.hiddenCallbacks=l===null?c:l.concat(c))));break;case 26:var f=Cr;if(pr(s,i),gr(i),c&512&&(St||l===null||Qn(l,l.return)),c&4){var g=l!==null?l.memoizedState:null;if(c=i.memoizedState,l===null)if(c===null)if(i.stateNode===null){e:{c=i.type,l=i.memoizedProps,f=f.ownerDocument||f;t:switch(c){case"title":g=f.getElementsByTagName("title")[0],(!g||g[ps]||g[tn]||g.namespaceURI==="http://www.w3.org/2000/svg"||g.hasAttribute("itemprop"))&&(g=f.createElement(c),f.head.insertBefore(g,f.querySelector("head > title"))),pn(g,c,l),g[tn]=i,_t(g),c=g;break e;case"link":var T=fb("link","href",f).get(c+(l.href||""));if(T){for(var b=0;b<T.length;b++)if(g=T[b],g.getAttribute("href")===(l.href==null?null:l.href)&&g.getAttribute("rel")===(l.rel==null?null:l.rel)&&g.getAttribute("title")===(l.title==null?null:l.title)&&g.getAttribute("crossorigin")===(l.crossOrigin==null?null:l.crossOrigin)){T.splice(b,1);break t}}g=f.createElement(c),pn(g,c,l),f.head.appendChild(g);break;case"meta":if(T=fb("meta","content",f).get(c+(l.content||""))){for(b=0;b<T.length;b++)if(g=T[b],g.getAttribute("content")===(l.content==null?null:""+l.content)&&g.getAttribute("name")===(l.name==null?null:l.name)&&g.getAttribute("property")===(l.property==null?null:l.property)&&g.getAttribute("http-equiv")===(l.httpEquiv==null?null:l.httpEquiv)&&g.getAttribute("charset")===(l.charSet==null?null:l.charSet)){T.splice(b,1);break t}}g=f.createElement(c),pn(g,c,l),f.head.appendChild(g);break;default:throw Error(r(468,c))}g[tn]=i,_t(g),c=g}i.stateNode=c}else mb(f,i.type,i.stateNode);else i.stateNode=db(f,c,i.memoizedProps);else g!==c?(g===null?l.stateNode!==null&&(l=l.stateNode,l.parentNode.removeChild(l)):g.count--,c===null?mb(f,i.type,i.stateNode):db(f,c,i.memoizedProps)):c===null&&i.stateNode!==null&&m0(i,i.memoizedProps,l.memoizedProps)}break;case 27:if(c&4&&i.alternate===null){f=i.stateNode,g=i.memoizedProps;try{for(var C=f.firstChild;C;){var M=C.nextSibling,J=C.nodeName;C[ps]||J==="HEAD"||J==="BODY"||J==="SCRIPT"||J==="STYLE"||J==="LINK"&&C.rel.toLowerCase()==="stylesheet"||f.removeChild(C),C=M}for(var ne=i.type,G=f.attributes;G.length;)f.removeAttributeNode(G[0]);pn(f,ne,g),f[tn]=i,f[$t]=g}catch(ve){st(i,i.return,ve)}}case 5:if(pr(s,i),gr(i),c&512&&(St||l===null||Qn(l,l.return)),i.flags&32){f=i.stateNode;try{ar(f,"")}catch(ve){st(i,i.return,ve)}}c&4&&i.stateNode!=null&&(f=i.memoizedProps,m0(i,f,l!==null?l.memoizedProps:f)),c&1024&&(d_=!0);break;case 6:if(pr(s,i),gr(i),c&4){if(i.stateNode===null)throw Error(r(162));c=i.memoizedProps,l=i.stateNode;try{l.nodeValue=c}catch(ve){st(i,i.return,ve)}}break;case 3:if(zf=null,f=Cr,Cr=Uf(s.containerInfo),pr(s,i),Cr=f,gr(i),c&4&&l!==null&&l.memoizedState.isDehydrated)try{Qc(s.containerInfo)}catch(ve){st(i,i.return,ve)}d_&&(d_=!1,b0(i));break;case 4:c=Cr,Cr=Uf(i.stateNode.containerInfo),pr(s,i),gr(i),Cr=c;break;case 12:pr(s,i),gr(i);break;case 13:pr(s,i),gr(i),i.child.flags&8192&&i.memoizedState!==null!=(l!==null&&l.memoizedState!==null)&&(w_=Ln()),c&4&&(c=i.updateQueue,c!==null&&(i.updateQueue=null,f_(i,c)));break;case 22:if(c&512&&(St||l===null||Qn(l,l.return)),C=i.memoizedState!==null,M=l!==null&&l.memoizedState!==null,J=Vi,ne=St,Vi=J||C,St=ne||M,pr(s,i),St=ne,Vi=J,gr(i),s=i.stateNode,s._current=i,s._visibility&=-3,s._visibility|=s._pendingVisibility&2,c&8192&&(s._visibility=C?s._visibility&-2:s._visibility|1,C&&(s=Vi||St,l===null||M||s||vl(i)),i.memoizedProps===null||i.memoizedProps.mode!=="manual"))e:for(l=null,s=i;;){if(s.tag===5||s.tag===26||s.tag===27){if(l===null){M=l=s;try{if(f=M.stateNode,C)g=f.style,typeof g.setProperty=="function"?g.setProperty("display","none","important"):g.display="none";else{T=M.stateNode,b=M.memoizedProps.style;var X=b!=null&&b.hasOwnProperty("display")?b.display:null;T.style.display=X==null||typeof X=="boolean"?"":(""+X).trim()}}catch(ve){st(M,M.return,ve)}}}else if(s.tag===6){if(l===null){M=s;try{M.stateNode.nodeValue=C?"":M.memoizedProps}catch(ve){st(M,M.return,ve)}}}else if((s.tag!==22&&s.tag!==23||s.memoizedState===null||s===i)&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===i)break e;for(;s.sibling===null;){if(s.return===null||s.return===i)break e;l===s&&(l=null),s=s.return}l===s&&(l=null),s.sibling.return=s.return,s=s.sibling}c&4&&(c=i.updateQueue,c!==null&&(l=c.retryQueue,l!==null&&(c.retryQueue=null,f_(i,l))));break;case 19:pr(s,i),gr(i),c&4&&(c=i.updateQueue,c!==null&&(i.updateQueue=null,f_(i,c)));break;case 21:break;default:pr(s,i),gr(i)}}function gr(i){var s=i.flags;if(s&2){try{if(i.tag!==27){e:{for(var l=i.return;l!==null;){if(p0(l)){var c=l;break e}l=l.return}throw Error(r(160))}switch(c.tag){case 27:var f=c.stateNode,g=c_(i);bf(i,g,f);break;case 5:var T=c.stateNode;c.flags&32&&(ar(T,""),c.flags&=-33);var b=c_(i);bf(i,b,T);break;case 3:case 4:var C=c.stateNode.containerInfo,M=c_(i);h_(i,M,C);break;default:throw Error(r(161))}}}catch(J){st(i,i.return,J)}i.flags&=-3}s&4096&&(i.flags&=-4097)}function b0(i){if(i.subtreeFlags&1024)for(i=i.child;i!==null;){var s=i;b0(s),s.tag===5&&s.flags&1024&&s.stateNode.reset(),i=i.sibling}}function Li(i,s){if(s.subtreeFlags&8772)for(s=s.child;s!==null;)y0(i,s.alternate,s),s=s.sibling}function vl(i){for(i=i.child;i!==null;){var s=i;switch(s.tag){case 0:case 11:case 14:case 15:Ns(4,s,s.return),vl(s);break;case 1:Qn(s,s.return);var l=s.stateNode;typeof l.componentWillUnmount=="function"&&d0(s,s.return,l),vl(s);break;case 26:case 27:case 5:Qn(s,s.return),vl(s);break;case 22:Qn(s,s.return),s.memoizedState===null&&vl(s);break;default:vl(s)}i=i.sibling}}function Os(i,s,l){for(l=l&&(s.subtreeFlags&8772)!==0,s=s.child;s!==null;){var c=s.alternate,f=i,g=s,T=g.flags;switch(g.tag){case 0:case 11:case 15:Os(f,g,l),Pc(4,g);break;case 1:if(Os(f,g,l),c=g,f=c.stateNode,typeof f.componentDidMount=="function")try{f.componentDidMount()}catch(M){st(c,c.return,M)}if(c=g,f=c.updateQueue,f!==null){var b=c.stateNode;try{var C=f.shared.hiddenCallbacks;if(C!==null)for(f.shared.hiddenCallbacks=null,f=0;f<C.length;f++)u0(C[f],b)}catch(M){st(c,c.return,M)}}l&&T&64&&h0(g),Za(g,g.return);break;case 26:case 27:case 5:Os(f,g,l),l&&c===null&&T&4&&f0(g),Za(g,g.return);break;case 12:Os(f,g,l);break;case 13:Os(f,g,l),l&&T&4&&T0(f,g);break;case 22:g.memoizedState===null&&Os(f,g,l),Za(g,g.return);break;default:Os(f,g,l)}s=s.sibling}}function m_(i,s){var l=null;i!==null&&i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(l=i.memoizedState.cachePool.pool),i=null,s.memoizedState!==null&&s.memoizedState.cachePool!==null&&(i=s.memoizedState.cachePool.pool),i!==l&&(i!=null&&i.refCount++,l!=null&&Ec(l))}function p_(i,s){i=null,s.alternate!==null&&(i=s.alternate.memoizedState.cache),s=s.memoizedState.cache,s!==i&&(s.refCount++,i!=null&&Ec(i))}function ks(i,s,l,c){if(s.subtreeFlags&10256)for(s=s.child;s!==null;)I0(i,s,l,c),s=s.sibling}function I0(i,s,l,c){var f=s.flags;switch(s.tag){case 0:case 11:case 15:ks(i,s,l,c),f&2048&&Pc(9,s);break;case 3:ks(i,s,l,c),f&2048&&(i=null,s.alternate!==null&&(i=s.alternate.memoizedState.cache),s=s.memoizedState.cache,s!==i&&(s.refCount++,i!=null&&Ec(i)));break;case 12:if(f&2048){ks(i,s,l,c),i=s.stateNode;try{var g=s.memoizedProps,T=g.id,b=g.onPostCommit;typeof b=="function"&&b(T,s.alternate===null?"mount":"update",i.passiveEffectDuration,-0)}catch(C){st(s,s.return,C)}}else ks(i,s,l,c);break;case 23:break;case 22:g=s.stateNode,s.memoizedState!==null?g._visibility&4?ks(i,s,l,c):xc(i,s):g._visibility&4?ks(i,s,l,c):(g._visibility|=4,El(i,s,l,c,(s.subtreeFlags&10256)!==0)),f&2048&&m_(s.alternate,s);break;case 24:ks(i,s,l,c),f&2048&&p_(s.alternate,s);break;default:ks(i,s,l,c)}}function El(i,s,l,c,f){for(f=f&&(s.subtreeFlags&10256)!==0,s=s.child;s!==null;){var g=i,T=s,b=l,C=c,M=T.flags;switch(T.tag){case 0:case 11:case 15:El(g,T,b,C,f),Pc(8,T);break;case 23:break;case 22:var J=T.stateNode;T.memoizedState!==null?J._visibility&4?El(g,T,b,C,f):xc(g,T):(J._visibility|=4,El(g,T,b,C,f)),f&&M&2048&&m_(T.alternate,T);break;case 24:El(g,T,b,C,f),f&&M&2048&&p_(T.alternate,T);break;default:El(g,T,b,C,f)}s=s.sibling}}function xc(i,s){if(s.subtreeFlags&10256)for(s=s.child;s!==null;){var l=i,c=s,f=c.flags;switch(c.tag){case 22:xc(l,c),f&2048&&m_(c.alternate,c);break;case 24:xc(l,c),f&2048&&p_(c.alternate,c);break;default:xc(l,c)}s=s.sibling}}var Nc=8192;function Tl(i){if(i.subtreeFlags&Nc)for(i=i.child;i!==null;)A0(i),i=i.sibling}function A0(i){switch(i.tag){case 26:Tl(i),i.flags&Nc&&i.memoizedState!==null&&Ax(Cr,i.memoizedState,i.memoizedProps);break;case 5:Tl(i);break;case 3:case 4:var s=Cr;Cr=Uf(i.stateNode.containerInfo),Tl(i),Cr=s;break;case 22:i.memoizedState===null&&(s=i.alternate,s!==null&&s.memoizedState!==null?(s=Nc,Nc=16777216,Tl(i),Nc=s):Tl(i));break;default:Tl(i)}}function S0(i){var s=i.alternate;if(s!==null&&(i=s.child,i!==null)){s.child=null;do s=i.sibling,i.sibling=null,i=s;while(i!==null)}}function Oc(i){var s=i.deletions;if((i.flags&16)!==0){if(s!==null)for(var l=0;l<s.length;l++){var c=s[l];an=c,C0(c,i)}S0(i)}if(i.subtreeFlags&10256)for(i=i.child;i!==null;)R0(i),i=i.sibling}function R0(i){switch(i.tag){case 0:case 11:case 15:Oc(i),i.flags&2048&&Ns(9,i,i.return);break;case 3:Oc(i);break;case 12:Oc(i);break;case 22:var s=i.stateNode;i.memoizedState!==null&&s._visibility&4&&(i.return===null||i.return.tag!==13)?(s._visibility&=-5,If(i)):Oc(i);break;default:Oc(i)}}function If(i){var s=i.deletions;if((i.flags&16)!==0){if(s!==null)for(var l=0;l<s.length;l++){var c=s[l];an=c,C0(c,i)}S0(i)}for(i=i.child;i!==null;){switch(s=i,s.tag){case 0:case 11:case 15:Ns(8,s,s.return),If(s);break;case 22:l=s.stateNode,l._visibility&4&&(l._visibility&=-5,If(s));break;default:If(s)}i=i.sibling}}function C0(i,s){for(;an!==null;){var l=an;switch(l.tag){case 0:case 11:case 15:Ns(8,l,s);break;case 23:case 22:if(l.memoizedState!==null&&l.memoizedState.cachePool!==null){var c=l.memoizedState.cachePool.pool;c!=null&&c.refCount++}break;case 24:Ec(l.memoizedState.cache)}if(c=l.child,c!==null)c.return=l,an=c;else e:for(l=i;an!==null;){c=an;var f=c.sibling,g=c.return;if(v0(c),c===l){an=null;break e}if(f!==null){f.return=g,an=f;break e}an=g}}}function UP(i,s,l,c){this.tag=i,this.key=l,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=s,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function _r(i,s,l,c){return new UP(i,s,l,c)}function g_(i){return i=i.prototype,!(!i||!i.isReactComponent)}function Vs(i,s){var l=i.alternate;return l===null?(l=_r(i.tag,s,i.key,i.mode),l.elementType=i.elementType,l.type=i.type,l.stateNode=i.stateNode,l.alternate=i,i.alternate=l):(l.pendingProps=s,l.type=i.type,l.flags=0,l.subtreeFlags=0,l.deletions=null),l.flags=i.flags&31457280,l.childLanes=i.childLanes,l.lanes=i.lanes,l.child=i.child,l.memoizedProps=i.memoizedProps,l.memoizedState=i.memoizedState,l.updateQueue=i.updateQueue,s=i.dependencies,l.dependencies=s===null?null:{lanes:s.lanes,firstContext:s.firstContext},l.sibling=i.sibling,l.index=i.index,l.ref=i.ref,l.refCleanup=i.refCleanup,l}function D0(i,s){i.flags&=31457282;var l=i.alternate;return l===null?(i.childLanes=0,i.lanes=s,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=l.childLanes,i.lanes=l.lanes,i.child=l.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=l.memoizedProps,i.memoizedState=l.memoizedState,i.updateQueue=l.updateQueue,i.type=l.type,s=l.dependencies,i.dependencies=s===null?null:{lanes:s.lanes,firstContext:s.firstContext}),i}function Af(i,s,l,c,f,g){var T=0;if(c=i,typeof i=="function")g_(i)&&(T=1);else if(typeof i=="string")T=bx(i,l,Ut.current)?26:i==="html"||i==="head"||i==="body"?27:5;else e:switch(i){case m:return Ja(l.children,f,g,s);case p:T=8,f|=24;break;case y:return i=_r(12,l,s,f|2),i.elementType=y,i.lanes=g,i;case U:return i=_r(13,l,s,f),i.elementType=U,i.lanes=g,i;case L:return i=_r(19,l,s,f),i.elementType=L,i.lanes=g,i;case $:return P0(l,f,g,s);default:if(typeof i=="object"&&i!==null)switch(i.$$typeof){case v:case S:T=10;break e;case w:T=9;break e;case P:T=11;break e;case H:T=14;break e;case Y:T=16,c=null;break e}T=29,l=Error(r(130,i===null?"null":typeof i,"")),c=null}return s=_r(T,l,s,f),s.elementType=i,s.type=c,s.lanes=g,s}function Ja(i,s,l,c){return i=_r(7,i,c,s),i.lanes=l,i}function P0(i,s,l,c){i=_r(22,i,c,s),i.elementType=$,i.lanes=l;var f={_visibility:1,_pendingVisibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null,_current:null,detach:function(){var g=f._current;if(g===null)throw Error(r(456));if((f._pendingVisibility&2)===0){var T=bs(g,2);T!==null&&(f._pendingVisibility|=2,xn(T,g,2))}},attach:function(){var g=f._current;if(g===null)throw Error(r(456));if((f._pendingVisibility&2)!==0){var T=bs(g,2);T!==null&&(f._pendingVisibility&=-3,xn(T,g,2))}}};return i.stateNode=f,i}function __(i,s,l){return i=_r(6,i,null,s),i.lanes=l,i}function y_(i,s,l){return s=_r(4,i.children!==null?i.children:[],i.key,s),s.lanes=l,s.stateNode={containerInfo:i.containerInfo,pendingChildren:null,implementation:i.implementation},s}function Ui(i){i.flags|=4}function x0(i,s){if(s.type!=="stylesheet"||(s.state.loading&4)!==0)i.flags&=-16777217;else if(i.flags|=16777216,!pb(s)){if(s=mr.current,s!==null&&((Ge&4194176)===Ge?Kr!==null:(Ge&62914560)!==Ge&&(Ge&536870912)===0||s!==Kr))throw _c=bg,QT;i.flags|=8192}}function Sf(i,s){s!==null&&(i.flags|=4),i.flags&16384&&(s=i.tag!==22?hs():536870912,i.lanes|=s,bl|=s)}function kc(i,s){if(!We)switch(i.tailMode){case"hidden":s=i.tail;for(var l=null;s!==null;)s.alternate!==null&&(l=s),s=s.sibling;l===null?i.tail=null:l.sibling=null;break;case"collapsed":l=i.tail;for(var c=null;l!==null;)l.alternate!==null&&(c=l),l=l.sibling;c===null?s||i.tail===null?i.tail=null:i.tail.sibling=null:c.sibling=null}}function yt(i){var s=i.alternate!==null&&i.alternate.child===i.child,l=0,c=0;if(s)for(var f=i.child;f!==null;)l|=f.lanes|f.childLanes,c|=f.subtreeFlags&31457280,c|=f.flags&31457280,f.return=i,f=f.sibling;else for(f=i.child;f!==null;)l|=f.lanes|f.childLanes,c|=f.subtreeFlags,c|=f.flags,f.return=i,f=f.sibling;return i.subtreeFlags|=c,i.childLanes=l,s}function BP(i,s,l){var c=s.pendingProps;switch(Tg(s),s.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return yt(s),null;case 1:return yt(s),null;case 3:return l=s.stateNode,c=null,i!==null&&(c=i.memoizedState.cache),s.memoizedState.cache!==c&&(s.flags|=2048),ki(Yt),_i(),l.pendingContext&&(l.context=l.pendingContext,l.pendingContext=null),(i===null||i.child===null)&&(fc(s)?Ui(s):i===null||i.memoizedState.isDehydrated&&(s.flags&256)===0||(s.flags|=1024,Rr!==null&&(S_(Rr),Rr=null))),yt(s),null;case 26:return l=s.memoizedState,i===null?(Ui(s),l!==null?(yt(s),x0(s,l)):(yt(s),s.flags&=-16777217)):l?l!==i.memoizedState?(Ui(s),yt(s),x0(s,l)):(yt(s),s.flags&=-16777217):(i.memoizedProps!==c&&Ui(s),yt(s),s.flags&=-16777217),null;case 27:jo(s),l=rr.current;var f=s.type;if(i!==null&&s.stateNode!=null)i.memoizedProps!==c&&Ui(s);else{if(!c){if(s.stateNode===null)throw Error(r(166));return yt(s),null}i=Ut.current,fc(s)?$T(s):(i=ob(f,c,l),s.stateNode=i,Ui(s))}return yt(s),null;case 5:if(jo(s),l=s.type,i!==null&&s.stateNode!=null)i.memoizedProps!==c&&Ui(s);else{if(!c){if(s.stateNode===null)throw Error(r(166));return yt(s),null}if(i=Ut.current,fc(s))$T(s);else{switch(f=Lf(rr.current),i){case 1:i=f.createElementNS("http://www.w3.org/2000/svg",l);break;case 2:i=f.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;default:switch(l){case"svg":i=f.createElementNS("http://www.w3.org/2000/svg",l);break;case"math":i=f.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;case"script":i=f.createElement("div"),i.innerHTML="<script><\/script>",i=i.removeChild(i.firstChild);break;case"select":i=typeof c.is=="string"?f.createElement("select",{is:c.is}):f.createElement("select"),c.multiple?i.multiple=!0:c.size&&(i.size=c.size);break;default:i=typeof c.is=="string"?f.createElement(l,{is:c.is}):f.createElement(l)}}i[tn]=s,i[$t]=c;e:for(f=s.child;f!==null;){if(f.tag===5||f.tag===6)i.appendChild(f.stateNode);else if(f.tag!==4&&f.tag!==27&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===s)break e;for(;f.sibling===null;){if(f.return===null||f.return===s)break e;f=f.return}f.sibling.return=f.return,f=f.sibling}s.stateNode=i;e:switch(pn(i,l,c),l){case"button":case"input":case"select":case"textarea":i=!!c.autoFocus;break e;case"img":i=!0;break e;default:i=!1}i&&Ui(s)}}return yt(s),s.flags&=-16777217,null;case 6:if(i&&s.stateNode!=null)i.memoizedProps!==c&&Ui(s);else{if(typeof c!="string"&&s.stateNode===null)throw Error(r(166));if(i=rr.current,fc(s)){if(i=s.stateNode,l=s.memoizedProps,c=null,f=Pn,f!==null)switch(f.tag){case 27:case 5:c=f.memoizedProps}i[tn]=s,i=!!(i.nodeValue===l||c!==null&&c.suppressHydrationWarning===!0||tb(i.nodeValue,l)),i||qa(s)}else i=Lf(i).createTextNode(c),i[tn]=s,s.stateNode=i}return yt(s),null;case 13:if(c=s.memoizedState,i===null||i.memoizedState!==null&&i.memoizedState.dehydrated!==null){if(f=fc(s),c!==null&&c.dehydrated!==null){if(i===null){if(!f)throw Error(r(318));if(f=s.memoizedState,f=f!==null?f.dehydrated:null,!f)throw Error(r(317));f[tn]=s}else mc(),(s.flags&128)===0&&(s.memoizedState=null),s.flags|=4;yt(s),f=!1}else Rr!==null&&(S_(Rr),Rr=null),f=!0;if(!f)return s.flags&256?(Pi(s),s):(Pi(s),null)}if(Pi(s),(s.flags&128)!==0)return s.lanes=l,s;if(l=c!==null,i=i!==null&&i.memoizedState!==null,l){c=s.child,f=null,c.alternate!==null&&c.alternate.memoizedState!==null&&c.alternate.memoizedState.cachePool!==null&&(f=c.alternate.memoizedState.cachePool.pool);var g=null;c.memoizedState!==null&&c.memoizedState.cachePool!==null&&(g=c.memoizedState.cachePool.pool),g!==f&&(c.flags|=2048)}return l!==i&&l&&(s.child.flags|=8192),Sf(s,s.updateQueue),yt(s),null;case 4:return _i(),i===null&&L_(s.stateNode.containerInfo),yt(s),null;case 10:return ki(s.type),yt(s),null;case 19:if(Ze(Wt),f=s.memoizedState,f===null)return yt(s),null;if(c=(s.flags&128)!==0,g=f.rendering,g===null)if(c)kc(f,!1);else{if(Rt!==0||i!==null&&(i.flags&128)!==0)for(i=s.child;i!==null;){if(g=uf(i),g!==null){for(s.flags|=128,kc(f,!1),i=g.updateQueue,s.updateQueue=i,Sf(s,i),s.subtreeFlags=0,i=l,l=s.child;l!==null;)D0(l,i),l=l.sibling;return Ke(Wt,Wt.current&1|2),s.child}i=i.sibling}f.tail!==null&&Ln()>Rf&&(s.flags|=128,c=!0,kc(f,!1),s.lanes=4194304)}else{if(!c)if(i=uf(g),i!==null){if(s.flags|=128,c=!0,i=i.updateQueue,s.updateQueue=i,Sf(s,i),kc(f,!0),f.tail===null&&f.tailMode==="hidden"&&!g.alternate&&!We)return yt(s),null}else 2*Ln()-f.renderingStartTime>Rf&&l!==536870912&&(s.flags|=128,c=!0,kc(f,!1),s.lanes=4194304);f.isBackwards?(g.sibling=s.child,s.child=g):(i=f.last,i!==null?i.sibling=g:s.child=g,f.last=g)}return f.tail!==null?(s=f.tail,f.rendering=s,f.tail=s.sibling,f.renderingStartTime=Ln(),s.sibling=null,i=Wt.current,Ke(Wt,c?i&1|2:i&1),s):(yt(s),null);case 22:case 23:return Pi(s),Ag(),c=s.memoizedState!==null,i!==null?i.memoizedState!==null!==c&&(s.flags|=8192):c&&(s.flags|=8192),c?(l&536870912)!==0&&(s.flags&128)===0&&(yt(s),s.subtreeFlags&6&&(s.flags|=8192)):yt(s),l=s.updateQueue,l!==null&&Sf(s,l.retryQueue),l=null,i!==null&&i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(l=i.memoizedState.cachePool.pool),c=null,s.memoizedState!==null&&s.memoizedState.cachePool!==null&&(c=s.memoizedState.cachePool.pool),c!==l&&(s.flags|=2048),i!==null&&Ze(Ga),null;case 24:return l=null,i!==null&&(l=i.memoizedState.cache),s.memoizedState.cache!==l&&(s.flags|=2048),ki(Yt),yt(s),null;case 25:return null}throw Error(r(156,s.tag))}function zP(i,s){switch(Tg(s),s.tag){case 1:return i=s.flags,i&65536?(s.flags=i&-65537|128,s):null;case 3:return ki(Yt),_i(),i=s.flags,(i&65536)!==0&&(i&128)===0?(s.flags=i&-65537|128,s):null;case 26:case 27:case 5:return jo(s),null;case 13:if(Pi(s),i=s.memoizedState,i!==null&&i.dehydrated!==null){if(s.alternate===null)throw Error(r(340));mc()}return i=s.flags,i&65536?(s.flags=i&-65537|128,s):null;case 19:return Ze(Wt),null;case 4:return _i(),null;case 10:return ki(s.type),null;case 22:case 23:return Pi(s),Ag(),i!==null&&Ze(Ga),i=s.flags,i&65536?(s.flags=i&-65537|128,s):null;case 24:return ki(Yt),null;case 25:return null;default:return null}}function N0(i,s){switch(Tg(s),s.tag){case 3:ki(Yt),_i();break;case 26:case 27:case 5:jo(s);break;case 4:_i();break;case 13:Pi(s);break;case 19:Ze(Wt);break;case 10:ki(s.type);break;case 22:case 23:Pi(s),Ag(),i!==null&&Ze(Ga);break;case 24:ki(Yt)}}var FP={getCacheForType:function(i){var s=Tn(Yt),l=s.data.get(i);return l===void 0&&(l=i(),s.data.set(i,l)),l}},jP=typeof WeakMap=="function"?WeakMap:Map,vt=0,at=null,Ue=null,Ge=0,ot=0,Yn=null,Bi=!1,wl=!1,v_=!1,zi=0,Rt=0,Ms=0,eo=0,E_=0,yr=0,bl=0,Vc=null,Wr=null,T_=!1,w_=0,Rf=1/0,Cf=null,Ls=null,Df=!1,to=null,Mc=0,b_=0,I_=null,Lc=0,A_=null;function Xn(){if((vt&2)!==0&&Ge!==0)return Ge&-Ge;if(A.T!==null){var i=ml;return i!==0?i:O_()}return kd()}function O0(){yr===0&&(yr=(Ge&536870912)===0||We?Wu():536870912);var i=mr.current;return i!==null&&(i.flags|=32),yr}function xn(i,s,l){(i===at&&ot===2||i.cancelPendingCommit!==null)&&(Il(i,0),Fi(i,Ge,yr,!1)),Ot(i,l),((vt&2)===0||i!==at)&&(i===at&&((vt&2)===0&&(eo|=l),Rt===4&&Fi(i,Ge,yr,!1)),Yr(i))}function k0(i,s,l){if((vt&6)!==0)throw Error(r(327));var c=!l&&(s&60)===0&&(s&i.expiredLanes)===0||cs(i,s),f=c?GP(i,s):D_(i,s,!0),g=c;do{if(f===0){wl&&!c&&Fi(i,s,0,!1);break}else if(f===6)Fi(i,s,0,!Bi);else{if(l=i.current.alternate,g&&!qP(l)){f=D_(i,s,!1),g=!1;continue}if(f===2){if(g=s,i.errorRecoveryDisabledLanes&g)var T=0;else T=i.pendingLanes&-536870913,T=T!==0?T:T&536870912?536870912:0;if(T!==0){s=T;e:{var b=i;f=Vc;var C=b.current.memoizedState.isDehydrated;if(C&&(Il(b,T).flags|=256),T=D_(b,T,!1),T!==2){if(v_&&!C){b.errorRecoveryDisabledLanes|=g,eo|=g,f=4;break e}g=Wr,Wr=f,g!==null&&S_(g)}f=T}if(g=!1,f!==2)continue}}if(f===1){Il(i,0),Fi(i,s,0,!0);break}e:{switch(c=i,f){case 0:case 1:throw Error(r(345));case 4:if((s&4194176)===s){Fi(c,s,yr,!Bi);break e}break;case 2:Wr=null;break;case 3:case 5:break;default:throw Error(r(329))}if(c.finishedWork=l,c.finishedLanes=s,(s&62914560)===s&&(g=w_+300-Ln(),10<g)){if(Fi(c,s,yr,!Bi),ir(c,0)!==0)break e;c.timeoutHandle=ib(V0.bind(null,c,l,Wr,Cf,T_,s,yr,eo,bl,Bi,2,-0,0),g);break e}V0(c,l,Wr,Cf,T_,s,yr,eo,bl,Bi,0,-0,0)}}break}while(!0);Yr(i)}function S_(i){Wr===null?Wr=i:Wr.push.apply(Wr,i)}function V0(i,s,l,c,f,g,T,b,C,M,J,ne,G){var X=s.subtreeFlags;if((X&8192||(X&16785408)===16785408)&&(qc={stylesheets:null,count:0,unsuspend:Ix},A0(s),s=Sx(),s!==null)){i.cancelPendingCommit=s(j0.bind(null,i,l,c,f,T,b,C,1,ne,G)),Fi(i,g,T,!M);return}j0(i,l,c,f,T,b,C,J,ne,G)}function qP(i){for(var s=i;;){var l=s.tag;if((l===0||l===11||l===15)&&s.flags&16384&&(l=s.updateQueue,l!==null&&(l=l.stores,l!==null)))for(var c=0;c<l.length;c++){var f=l[c],g=f.getSnapshot;f=f.value;try{if(!Kn(g(),f))return!1}catch{return!1}}if(l=s.child,s.subtreeFlags&16384&&l!==null)l.return=s,s=l;else{if(s===i)break;for(;s.sibling===null;){if(s.return===null||s.return===i)return!0;s=s.return}s.sibling.return=s.return,s=s.sibling}}return!0}function Fi(i,s,l,c){s&=~E_,s&=~eo,i.suspendedLanes|=s,i.pingedLanes&=~s,c&&(i.warmLanes|=s),c=i.expirationTimes;for(var f=s;0<f;){var g=31-Rn(f),T=1<<g;c[g]=-1,f&=~T}l!==0&&ds(i,l,s)}function Pf(){return(vt&6)===0?(Uc(0),!1):!0}function R_(){if(Ue!==null){if(ot===0)var i=Ue.return;else i=Ue,Oi=Ya=null,Og(i),dl=null,yc=0,i=Ue;for(;i!==null;)N0(i.alternate,i),i=i.return;Ue=null}}function Il(i,s){i.finishedWork=null,i.finishedLanes=0;var l=i.timeoutHandle;l!==-1&&(i.timeoutHandle=-1,lx(l)),l=i.cancelPendingCommit,l!==null&&(i.cancelPendingCommit=null,l()),R_(),at=i,Ue=l=Vs(i.current,null),Ge=s,ot=0,Yn=null,Bi=!1,wl=cs(i,s),v_=!1,bl=yr=E_=eo=Ms=Rt=0,Wr=Vc=null,T_=!1,(s&8)!==0&&(s|=s&32);var c=i.entangledLanes;if(c!==0)for(i=i.entanglements,c&=s;0<c;){var f=31-Rn(c),g=1<<f;s|=i[f],c&=~g}return zi=s,Jd(),l}function M0(i,s){Ve=null,A.H=Qr,s===gc?(s=XT(),ot=3):s===QT?(s=XT(),ot=4):ot=s===Ww?8:s!==null&&typeof s=="object"&&typeof s.then=="function"?6:1,Yn=s,Ue===null&&(Rt=1,Ef(i,hr(s,i.current)))}function L0(){var i=A.H;return A.H=Qr,i===null?Qr:i}function U0(){var i=A.A;return A.A=FP,i}function C_(){Rt=4,Bi||(Ge&4194176)!==Ge&&mr.current!==null||(wl=!0),(Ms&134217727)===0&&(eo&134217727)===0||at===null||Fi(at,Ge,yr,!1)}function D_(i,s,l){var c=vt;vt|=2;var f=L0(),g=U0();(at!==i||Ge!==s)&&(Cf=null,Il(i,s)),s=!1;var T=Rt;e:do try{if(ot!==0&&Ue!==null){var b=Ue,C=Yn;switch(ot){case 8:R_(),T=6;break e;case 3:case 2:case 6:mr.current===null&&(s=!0);var M=ot;if(ot=0,Yn=null,Al(i,b,C,M),l&&wl){T=0;break e}break;default:M=ot,ot=0,Yn=null,Al(i,b,C,M)}}HP(),T=Rt;break}catch(J){M0(i,J)}while(!0);return s&&i.shellSuspendCounter++,Oi=Ya=null,vt=c,A.H=f,A.A=g,Ue===null&&(at=null,Ge=0,Jd()),T}function HP(){for(;Ue!==null;)B0(Ue)}function GP(i,s){var l=vt;vt|=2;var c=L0(),f=U0();at!==i||Ge!==s?(Cf=null,Rf=Ln()+500,Il(i,s)):wl=cs(i,s);e:do try{if(ot!==0&&Ue!==null){s=Ue;var g=Yn;t:switch(ot){case 1:ot=0,Yn=null,Al(i,s,g,1);break;case 2:if(WT(g)){ot=0,Yn=null,z0(s);break}s=function(){ot===2&&at===i&&(ot=7),Yr(i)},g.then(s,s);break e;case 3:ot=7;break e;case 4:ot=5;break e;case 7:WT(g)?(ot=0,Yn=null,z0(s)):(ot=0,Yn=null,Al(i,s,g,7));break;case 5:var T=null;switch(Ue.tag){case 26:T=Ue.memoizedState;case 5:case 27:var b=Ue;if(!T||pb(T)){ot=0,Yn=null;var C=b.sibling;if(C!==null)Ue=C;else{var M=b.return;M!==null?(Ue=M,xf(M)):Ue=null}break t}}ot=0,Yn=null,Al(i,s,g,5);break;case 6:ot=0,Yn=null,Al(i,s,g,6);break;case 8:R_(),Rt=6;break e;default:throw Error(r(462))}}$P();break}catch(J){M0(i,J)}while(!0);return Oi=Ya=null,A.H=c,A.A=f,vt=l,Ue!==null?0:(at=null,Ge=0,Jd(),Rt)}function $P(){for(;Ue!==null&&!rg();)B0(Ue)}function B0(i){var s=o0(i.alternate,i,zi);i.memoizedProps=i.pendingProps,s===null?xf(i):Ue=s}function z0(i){var s=i,l=s.alternate;switch(s.tag){case 15:case 0:s=t0(l,s,s.pendingProps,s.type,void 0,Ge);break;case 11:s=t0(l,s,s.pendingProps,s.type.render,s.ref,Ge);break;case 5:Og(s);default:N0(l,s),s=Ue=D0(s,zi),s=o0(l,s,zi)}i.memoizedProps=i.pendingProps,s===null?xf(i):Ue=s}function Al(i,s,l,c){Oi=Ya=null,Og(s),dl=null,yc=0;var f=s.return;try{if(kP(i,f,s,l,Ge)){Rt=1,Ef(i,hr(l,i.current)),Ue=null;return}}catch(g){if(f!==null)throw Ue=f,g;Rt=1,Ef(i,hr(l,i.current)),Ue=null;return}s.flags&32768?(We||c===1?i=!0:wl||(Ge&536870912)!==0?i=!1:(Bi=i=!0,(c===2||c===3||c===6)&&(c=mr.current,c!==null&&c.tag===13&&(c.flags|=16384))),F0(s,i)):xf(s)}function xf(i){var s=i;do{if((s.flags&32768)!==0){F0(s,Bi);return}i=s.return;var l=BP(s.alternate,s,zi);if(l!==null){Ue=l;return}if(s=s.sibling,s!==null){Ue=s;return}Ue=s=i}while(s!==null);Rt===0&&(Rt=5)}function F0(i,s){do{var l=zP(i.alternate,i);if(l!==null){l.flags&=32767,Ue=l;return}if(l=i.return,l!==null&&(l.flags|=32768,l.subtreeFlags=0,l.deletions=null),!s&&(i=i.sibling,i!==null)){Ue=i;return}Ue=i=l}while(i!==null);Rt=6,Ue=null}function j0(i,s,l,c,f,g,T,b,C,M){var J=A.T,ne=fe.p;try{fe.p=2,A.T=null,KP(i,s,l,c,ne,f,g,T,b,C,M)}finally{A.T=J,fe.p=ne}}function KP(i,s,l,c,f,g,T,b){do Sl();while(to!==null);if((vt&6)!==0)throw Error(r(327));var C=i.finishedWork;if(c=i.finishedLanes,C===null)return null;if(i.finishedWork=null,i.finishedLanes=0,C===i.current)throw Error(r(177));i.callbackNode=null,i.callbackPriority=0,i.cancelPendingCommit=null;var M=C.lanes|C.childLanes;if(M|=yg,Nd(i,c,M,g,T,b),i===at&&(Ue=at=null,Ge=0),(C.subtreeFlags&10256)===0&&(C.flags&10256)===0||Df||(Df=!0,b_=M,I_=l,XP(yi,function(){return Sl(),null})),l=(C.flags&15990)!==0,(C.subtreeFlags&15990)!==0||l?(l=A.T,A.T=null,g=fe.p,fe.p=2,T=vt,vt|=4,MP(i,C),w0(C,i),_P(F_,i.containerInfo),qf=!!z_,F_=z_=null,i.current=C,y0(i,C.alternate,C),Gu(),vt=T,fe.p=g,A.T=l):i.current=C,Df?(Df=!1,to=i,Mc=c):q0(i,M),M=i.pendingLanes,M===0&&(Ls=null),Ku(C.stateNode),Yr(i),s!==null)for(f=i.onRecoverableError,C=0;C<s.length;C++)M=s[C],f(M.value,{componentStack:M.stack});return(Mc&3)!==0&&Sl(),M=i.pendingLanes,(c&4194218)!==0&&(M&42)!==0?i===A_?Lc++:(Lc=0,A_=i):Lc=0,Uc(0),null}function q0(i,s){(i.pooledCacheLanes&=s)===0&&(s=i.pooledCache,s!=null&&(i.pooledCache=null,Ec(s)))}function Sl(){if(to!==null){var i=to,s=b_;b_=0;var l=Od(Mc),c=A.T,f=fe.p;try{if(fe.p=32>l?32:l,A.T=null,to===null)var g=!1;else{l=I_,I_=null;var T=to,b=Mc;if(to=null,Mc=0,(vt&6)!==0)throw Error(r(331));var C=vt;if(vt|=4,R0(T.current),I0(T,T.current,b,l),vt=C,Uc(0,!1),En&&typeof En.onPostCommitFiberRoot=="function")try{En.onPostCommitFiberRoot(ls,T)}catch{}g=!0}return g}finally{fe.p=f,A.T=c,q0(i,s)}}return!1}function H0(i,s,l){s=hr(l,s),s=Kg(i.stateNode,s,2),i=xs(i,s,2),i!==null&&(Ot(i,2),Yr(i))}function st(i,s,l){if(i.tag===3)H0(i,i,l);else for(;s!==null;){if(s.tag===3){H0(s,i,l);break}else if(s.tag===1){var c=s.stateNode;if(typeof s.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(Ls===null||!Ls.has(c))){i=hr(l,i),l=Kw(2),c=xs(s,l,2),c!==null&&(Qw(l,c,s,i),Ot(c,2),Yr(c));break}}s=s.return}}function P_(i,s,l){var c=i.pingCache;if(c===null){c=i.pingCache=new jP;var f=new Set;c.set(s,f)}else f=c.get(s),f===void 0&&(f=new Set,c.set(s,f));f.has(l)||(v_=!0,f.add(l),i=QP.bind(null,i,s,l),s.then(i,i))}function QP(i,s,l){var c=i.pingCache;c!==null&&c.delete(s),i.pingedLanes|=i.suspendedLanes&l,i.warmLanes&=~l,at===i&&(Ge&l)===l&&(Rt===4||Rt===3&&(Ge&62914560)===Ge&&300>Ln()-w_?(vt&2)===0&&Il(i,0):E_|=l,bl===Ge&&(bl=0)),Yr(i)}function G0(i,s){s===0&&(s=hs()),i=bs(i,s),i!==null&&(Ot(i,s),Yr(i))}function WP(i){var s=i.memoizedState,l=0;s!==null&&(l=s.retryLane),G0(i,l)}function YP(i,s){var l=0;switch(i.tag){case 13:var c=i.stateNode,f=i.memoizedState;f!==null&&(l=f.retryLane);break;case 19:c=i.stateNode;break;case 22:c=i.stateNode._retryCache;break;default:throw Error(r(314))}c!==null&&c.delete(s),G0(i,l)}function XP(i,s){return Aa(i,s)}var Nf=null,Rl=null,x_=!1,Of=!1,N_=!1,no=0;function Yr(i){i!==Rl&&i.next===null&&(Rl===null?Nf=Rl=i:Rl=Rl.next=i),Of=!0,x_||(x_=!0,JP(ZP))}function Uc(i,s){if(!N_&&Of){N_=!0;do for(var l=!1,c=Nf;c!==null;){if(i!==0){var f=c.pendingLanes;if(f===0)var g=0;else{var T=c.suspendedLanes,b=c.pingedLanes;g=(1<<31-Rn(42|i)+1)-1,g&=f&~(T&~b),g=g&201326677?g&201326677|1:g?g|2:0}g!==0&&(l=!0,Q0(c,g))}else g=Ge,g=ir(c,c===at?g:0),(g&3)===0||cs(c,g)||(l=!0,Q0(c,g));c=c.next}while(l);N_=!1}}function ZP(){Of=x_=!1;var i=0;no!==0&&(ox()&&(i=no),no=0);for(var s=Ln(),l=null,c=Nf;c!==null;){var f=c.next,g=$0(c,s);g===0?(c.next=null,l===null?Nf=f:l.next=f,f===null&&(Rl=l)):(l=c,(i!==0||(g&3)!==0)&&(Of=!0)),c=f}Uc(i)}function $0(i,s){for(var l=i.suspendedLanes,c=i.pingedLanes,f=i.expirationTimes,g=i.pendingLanes&-62914561;0<g;){var T=31-Rn(g),b=1<<T,C=f[T];C===-1?((b&l)===0||(b&c)!==0)&&(f[T]=Go(b,s)):C<=s&&(i.expiredLanes|=b),g&=~b}if(s=at,l=Ge,l=ir(i,i===s?l:0),c=i.callbackNode,l===0||i===s&&ot===2||i.cancelPendingCommit!==null)return c!==null&&c!==null&&Ho(c),i.callbackNode=null,i.callbackPriority=0;if((l&3)===0||cs(i,l)){if(s=l&-l,s===i.callbackPriority)return s;switch(c!==null&&Ho(c),Od(l)){case 2:case 8:l=en;break;case 32:l=yi;break;case 268435456:l=$u;break;default:l=yi}return c=K0.bind(null,i),l=Aa(l,c),i.callbackPriority=s,i.callbackNode=l,s}return c!==null&&c!==null&&Ho(c),i.callbackPriority=2,i.callbackNode=null,2}function K0(i,s){var l=i.callbackNode;if(Sl()&&i.callbackNode!==l)return null;var c=Ge;return c=ir(i,i===at?c:0),c===0?null:(k0(i,c,s),$0(i,Ln()),i.callbackNode!=null&&i.callbackNode===l?K0.bind(null,i):null)}function Q0(i,s){if(Sl())return null;k0(i,s,!0)}function JP(i){ux(function(){(vt&6)!==0?Aa(Gt,i):i()})}function O_(){return no===0&&(no=Wu()),no}function W0(i){return i==null||typeof i=="symbol"||typeof i=="boolean"?null:typeof i=="function"?i:Br(""+i)}function Y0(i,s){var l=s.ownerDocument.createElement("input");return l.name=s.name,l.value=s.value,i.id&&l.setAttribute("form",i.id),s.parentNode.insertBefore(l,s),i=new FormData(i),l.parentNode.removeChild(l),i}function ex(i,s,l,c,f){if(s==="submit"&&l&&l.stateNode===f){var g=W0((f[$t]||null).action),T=c.submitter;T&&(s=(s=T[$t]||null)?W0(s.formAction):T.getAttribute("formAction"),s!==null&&(g=s,T=null));var b=new Zo("action","action",null,c,f);i.push({event:b,listeners:[{instance:null,listener:function(){if(c.defaultPrevented){if(no!==0){var C=T?Y0(f,T):new FormData(f);jg(l,{pending:!0,data:C,method:f.method,action:g},null,C)}}else typeof g=="function"&&(b.preventDefault(),C=T?Y0(f,T):new FormData(f),jg(l,{pending:!0,data:C,method:f.method,action:g},g,C))},currentTarget:f}]})}}for(var k_=0;k_<jT.length;k_++){var V_=jT[k_],tx=V_.toLowerCase(),nx=V_[0].toUpperCase()+V_.slice(1);Sr(tx,"on"+nx)}Sr(LT,"onAnimationEnd"),Sr(UT,"onAnimationIteration"),Sr(BT,"onAnimationStart"),Sr("dblclick","onDoubleClick"),Sr("focusin","onFocus"),Sr("focusout","onBlur"),Sr(vP,"onTransitionRun"),Sr(EP,"onTransitionStart"),Sr(TP,"onTransitionCancel"),Sr(zT,"onTransitionEnd"),Un("onMouseEnter",["mouseout","mouseover"]),Un("onMouseLeave",["mouseout","mouseover"]),Un("onPointerEnter",["pointerout","pointerover"]),Un("onPointerLeave",["pointerout","pointerover"]),Gn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Gn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Gn("onBeforeInput",["compositionend","keypress","textInput","paste"]),Gn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Gn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Gn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Bc="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),rx=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Bc));function X0(i,s){s=(s&4)!==0;for(var l=0;l<i.length;l++){var c=i[l],f=c.event;c=c.listeners;e:{var g=void 0;if(s)for(var T=c.length-1;0<=T;T--){var b=c[T],C=b.instance,M=b.currentTarget;if(b=b.listener,C!==g&&f.isPropagationStopped())break e;g=b,f.currentTarget=M;try{g(f)}catch(J){vf(J)}f.currentTarget=null,g=C}else for(T=0;T<c.length;T++){if(b=c[T],C=b.instance,M=b.currentTarget,b=b.listener,C!==g&&f.isPropagationStopped())break e;g=b,f.currentTarget=M;try{g(f)}catch(J){vf(J)}f.currentTarget=null,g=C}}}}function je(i,s){var l=s[Ra];l===void 0&&(l=s[Ra]=new Set);var c=i+"__bubble";l.has(c)||(Z0(s,i,2,!1),l.add(c))}function M_(i,s,l){var c=0;s&&(c|=4),Z0(l,i,c,s)}var kf="_reactListening"+Math.random().toString(36).slice(2);function L_(i){if(!i[kf]){i[kf]=!0,Xu.forEach(function(l){l!=="selectionchange"&&(rx.has(l)||M_(l,!1,i),M_(l,!0,i))});var s=i.nodeType===9?i:i.ownerDocument;s===null||s[kf]||(s[kf]=!0,M_("selectionchange",!1,s))}}function Z0(i,s,l,c){switch(Tb(s)){case 2:var f=Dx;break;case 8:f=Px;break;default:f=Y_}l=f.bind(null,s,l,i),f=void 0,!lr||s!=="touchstart"&&s!=="touchmove"&&s!=="wheel"||(f=!0),c?f!==void 0?i.addEventListener(s,l,{capture:!0,passive:f}):i.addEventListener(s,l,!0):f!==void 0?i.addEventListener(s,l,{passive:f}):i.addEventListener(s,l,!1)}function U_(i,s,l,c,f){var g=c;if((s&1)===0&&(s&2)===0&&c!==null)e:for(;;){if(c===null)return;var T=c.tag;if(T===3||T===4){var b=c.stateNode.containerInfo;if(b===f||b.nodeType===8&&b.parentNode===f)break;if(T===4)for(T=c.return;T!==null;){var C=T.tag;if((C===3||C===4)&&(C=T.stateNode.containerInfo,C===f||C.nodeType===8&&C.parentNode===f))return;T=T.return}for(;b!==null;){if(T=Ar(b),T===null)return;if(C=T.tag,C===5||C===6||C===26||C===27){c=g=T;continue e}b=b.parentNode}}c=c.return}Ud(function(){var M=g,J=Xo(l),ne=[];e:{var G=FT.get(i);if(G!==void 0){var X=Zo,ve=i;switch(i){case"keypress":if(Fr(l)===0)break e;case"keydown":case"keyup":X=il;break;case"focusin":ve="focus",X=tl;break;case"focusout":ve="blur",X=tl;break;case"beforeblur":case"afterblur":X=tl;break;case"click":if(l.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":X=ur;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":X=cg;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":X=$d;break;case LT:case UT:case BT:X=nl;break;case zT:X=Qd;break;case"scroll":case"scrollend":X=Bd;break;case"wheel":X=sl;break;case"copy":case"cut":case"paste":X=rl;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":X=uc;break;case"toggle":case"beforetoggle":X=Yd}var De=(s&4)!==0,Ct=!De&&(i==="scroll"||i==="scrollend"),B=De?G!==null?G+"Capture":null:G;De=[];for(var k=M,q;k!==null;){var ee=k;if(q=ee.stateNode,ee=ee.tag,ee!==5&&ee!==26&&ee!==27||q===null||B===null||(ee=Na(k,B),ee!=null&&De.push(zc(k,ee,q))),Ct)break;k=k.return}0<De.length&&(G=new X(G,ve,null,l,J),ne.push({event:G,listeners:De}))}}if((s&7)===0){e:{if(G=i==="mouseover"||i==="pointerover",X=i==="mouseout"||i==="pointerout",G&&l!==or&&(ve=l.relatedTarget||l.fromElement)&&(Ar(ve)||ve[vi]))break e;if((X||G)&&(G=J.window===J?J:(G=J.ownerDocument)?G.defaultView||G.parentWindow:window,X?(ve=l.relatedTarget||l.toElement,X=M,ve=ve?Ar(ve):null,ve!==null&&(Ct=Te(ve),De=ve.tag,ve!==Ct||De!==5&&De!==27&&De!==6)&&(ve=null)):(X=null,ve=M),X!==ve)){if(De=ur,ee="onMouseLeave",B="onMouseEnter",k="mouse",(i==="pointerout"||i==="pointerover")&&(De=uc,ee="onPointerLeave",B="onPointerEnter",k="pointer"),Ct=X==null?G:gs(X),q=ve==null?G:gs(ve),G=new De(ee,k+"leave",X,l,J),G.target=Ct,G.relatedTarget=q,ee=null,Ar(J)===M&&(De=new De(B,k+"enter",ve,l,J),De.target=q,De.relatedTarget=Ct,ee=De),Ct=ee,X&&ve)t:{for(De=X,B=ve,k=0,q=De;q;q=Cl(q))k++;for(q=0,ee=B;ee;ee=Cl(ee))q++;for(;0<k-q;)De=Cl(De),k--;for(;0<q-k;)B=Cl(B),q--;for(;k--;){if(De===B||B!==null&&De===B.alternate)break t;De=Cl(De),B=Cl(B)}De=null}else De=null;X!==null&&J0(ne,G,X,De,!1),ve!==null&&Ct!==null&&J0(ne,Ct,ve,De,!0)}}e:{if(G=M?gs(M):window,X=G.nodeName&&G.nodeName.toLowerCase(),X==="select"||X==="input"&&G.type==="file")var _e=ST;else if(Qt(G))if(RT)_e=pP;else{_e=fP;var Le=dP}else X=G.nodeName,!X||X.toLowerCase()!=="input"||G.type!=="checkbox"&&G.type!=="radio"?M&&nc(M.elementType)&&(_e=ST):_e=mP;if(_e&&(_e=_e(i,M))){Ri(ne,_e,l,J);break e}Le&&Le(i,G,M),i==="focusout"&&M&&G.type==="number"&&M.memoizedProps.value!=null&&Yo(G,"number",G.value)}switch(Le=M?gs(M):window,i){case"focusin":(Qt(Le)||Le.contentEditable==="true")&&(al=Le,pg=M,dc=null);break;case"focusout":dc=pg=al=null;break;case"mousedown":gg=!0;break;case"contextmenu":case"mouseup":case"dragend":gg=!1,VT(ne,l,J);break;case"selectionchange":if(yP)break;case"keydown":case"keyup":VT(ne,l,J)}var we;if(Hr)e:{switch(i){case"compositionstart":var Ae="onCompositionStart";break e;case"compositionend":Ae="onCompositionEnd";break e;case"compositionupdate":Ae="onCompositionUpdate";break e}Ae=void 0}else qe?Q(i,l)&&(Ae="onCompositionEnd"):i==="keydown"&&l.keyCode===229&&(Ae="onCompositionStart");Ae&&(E&&l.locale!=="ko"&&(qe||Ae!=="onCompositionStart"?Ae==="onCompositionEnd"&&qe&&(we=ic()):(zr=J,ws="value"in zr?zr.value:zr.textContent,qe=!0)),Le=Vf(M,Ae),0<Le.length&&(Ae=new oc(Ae,i,null,l,J),ne.push({event:Ae,listeners:Le}),we?Ae.data=we:(we=ue(l),we!==null&&(Ae.data=we)))),(we=_?Kt(i,l):He(i,l))&&(Ae=Vf(M,"onBeforeInput"),0<Ae.length&&(Le=new oc("onBeforeInput","beforeinput",null,l,J),ne.push({event:Le,listeners:Ae}),Le.data=we)),ex(ne,i,M,l,J)}X0(ne,s)})}function zc(i,s,l){return{instance:i,listener:s,currentTarget:l}}function Vf(i,s){for(var l=s+"Capture",c=[];i!==null;){var f=i,g=f.stateNode;f=f.tag,f!==5&&f!==26&&f!==27||g===null||(f=Na(i,l),f!=null&&c.unshift(zc(i,f,g)),f=Na(i,s),f!=null&&c.push(zc(i,f,g))),i=i.return}return c}function Cl(i){if(i===null)return null;do i=i.return;while(i&&i.tag!==5&&i.tag!==27);return i||null}function J0(i,s,l,c,f){for(var g=s._reactName,T=[];l!==null&&l!==c;){var b=l,C=b.alternate,M=b.stateNode;if(b=b.tag,C!==null&&C===c)break;b!==5&&b!==26&&b!==27||M===null||(C=M,f?(M=Na(l,g),M!=null&&T.unshift(zc(l,M,C))):f||(M=Na(l,g),M!=null&&T.push(zc(l,M,C)))),l=l.return}T.length!==0&&i.push({event:s,listeners:T})}var ix=/\r\n?/g,sx=/\u0000|\uFFFD/g;function eb(i){return(typeof i=="string"?i:""+i).replace(ix,`
`).replace(sx,"")}function tb(i,s){return s=eb(s),eb(i)===s}function Mf(){}function it(i,s,l,c,f,g){switch(l){case"children":typeof c=="string"?s==="body"||s==="textarea"&&c===""||ar(i,c):(typeof c=="number"||typeof c=="bigint")&&s!=="body"&&ar(i,""+c);break;case"className":vs(i,"class",c);break;case"tabIndex":vs(i,"tabindex",c);break;case"dir":case"role":case"viewBox":case"width":case"height":vs(i,l,c);break;case"style":Ld(i,c,g);break;case"data":if(s!=="object"){vs(i,"data",c);break}case"src":case"href":if(c===""&&(s!=="a"||l!=="href")){i.removeAttribute(l);break}if(c==null||typeof c=="function"||typeof c=="symbol"||typeof c=="boolean"){i.removeAttribute(l);break}c=Br(""+c),i.setAttribute(l,c);break;case"action":case"formAction":if(typeof c=="function"){i.setAttribute(l,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof g=="function"&&(l==="formAction"?(s!=="input"&&it(i,s,"name",f.name,f,null),it(i,s,"formEncType",f.formEncType,f,null),it(i,s,"formMethod",f.formMethod,f,null),it(i,s,"formTarget",f.formTarget,f,null)):(it(i,s,"encType",f.encType,f,null),it(i,s,"method",f.method,f,null),it(i,s,"target",f.target,f,null)));if(c==null||typeof c=="symbol"||typeof c=="boolean"){i.removeAttribute(l);break}c=Br(""+c),i.setAttribute(l,c);break;case"onClick":c!=null&&(i.onclick=Mf);break;case"onScroll":c!=null&&je("scroll",i);break;case"onScrollEnd":c!=null&&je("scrollend",i);break;case"dangerouslySetInnerHTML":if(c!=null){if(typeof c!="object"||!("__html"in c))throw Error(r(61));if(l=c.__html,l!=null){if(f.children!=null)throw Error(r(60));i.innerHTML=l}}break;case"multiple":i.multiple=c&&typeof c!="function"&&typeof c!="symbol";break;case"muted":i.muted=c&&typeof c!="function"&&typeof c!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(c==null||typeof c=="function"||typeof c=="boolean"||typeof c=="symbol"){i.removeAttribute("xlink:href");break}l=Br(""+c),i.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",l);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":c!=null&&typeof c!="function"&&typeof c!="symbol"?i.setAttribute(l,""+c):i.removeAttribute(l);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":c&&typeof c!="function"&&typeof c!="symbol"?i.setAttribute(l,""):i.removeAttribute(l);break;case"capture":case"download":c===!0?i.setAttribute(l,""):c!==!1&&c!=null&&typeof c!="function"&&typeof c!="symbol"?i.setAttribute(l,c):i.removeAttribute(l);break;case"cols":case"rows":case"size":case"span":c!=null&&typeof c!="function"&&typeof c!="symbol"&&!isNaN(c)&&1<=c?i.setAttribute(l,c):i.removeAttribute(l);break;case"rowSpan":case"start":c==null||typeof c=="function"||typeof c=="symbol"||isNaN(c)?i.removeAttribute(l):i.setAttribute(l,c);break;case"popover":je("beforetoggle",i),je("toggle",i),ys(i,"popover",c);break;case"xlinkActuate":sr(i,"http://www.w3.org/1999/xlink","xlink:actuate",c);break;case"xlinkArcrole":sr(i,"http://www.w3.org/1999/xlink","xlink:arcrole",c);break;case"xlinkRole":sr(i,"http://www.w3.org/1999/xlink","xlink:role",c);break;case"xlinkShow":sr(i,"http://www.w3.org/1999/xlink","xlink:show",c);break;case"xlinkTitle":sr(i,"http://www.w3.org/1999/xlink","xlink:title",c);break;case"xlinkType":sr(i,"http://www.w3.org/1999/xlink","xlink:type",c);break;case"xmlBase":sr(i,"http://www.w3.org/XML/1998/namespace","xml:base",c);break;case"xmlLang":sr(i,"http://www.w3.org/XML/1998/namespace","xml:lang",c);break;case"xmlSpace":sr(i,"http://www.w3.org/XML/1998/namespace","xml:space",c);break;case"is":ys(i,"is",c);break;case"innerText":case"textContent":break;default:(!(2<l.length)||l[0]!=="o"&&l[0]!=="O"||l[1]!=="n"&&l[1]!=="N")&&(l=lg.get(l)||l,ys(i,l,c))}}function B_(i,s,l,c,f,g){switch(l){case"style":Ld(i,c,g);break;case"dangerouslySetInnerHTML":if(c!=null){if(typeof c!="object"||!("__html"in c))throw Error(r(61));if(l=c.__html,l!=null){if(f.children!=null)throw Error(r(60));i.innerHTML=l}}break;case"children":typeof c=="string"?ar(i,c):(typeof c=="number"||typeof c=="bigint")&&ar(i,""+c);break;case"onScroll":c!=null&&je("scroll",i);break;case"onScrollEnd":c!=null&&je("scrollend",i);break;case"onClick":c!=null&&(i.onclick=Mf);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Qo.hasOwnProperty(l))e:{if(l[0]==="o"&&l[1]==="n"&&(f=l.endsWith("Capture"),s=l.slice(2,f?l.length-7:void 0),g=i[$t]||null,g=g!=null?g[l]:null,typeof g=="function"&&i.removeEventListener(s,g,f),typeof c=="function")){typeof g!="function"&&g!==null&&(l in i?i[l]=null:i.hasAttribute(l)&&i.removeAttribute(l)),i.addEventListener(s,c,f);break e}l in i?i[l]=c:c===!0?i.setAttribute(l,""):ys(i,l,c)}}}function pn(i,s,l){switch(s){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":je("error",i),je("load",i);var c=!1,f=!1,g;for(g in l)if(l.hasOwnProperty(g)){var T=l[g];if(T!=null)switch(g){case"src":c=!0;break;case"srcSet":f=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,s));default:it(i,s,g,T,l,null)}}f&&it(i,s,"srcSet",l.srcSet,l,null),c&&it(i,s,"src",l.src,l,null);return;case"input":je("invalid",i);var b=g=T=f=null,C=null,M=null;for(c in l)if(l.hasOwnProperty(c)){var J=l[c];if(J!=null)switch(c){case"name":f=J;break;case"type":T=J;break;case"checked":C=J;break;case"defaultChecked":M=J;break;case"value":g=J;break;case"defaultValue":b=J;break;case"children":case"dangerouslySetInnerHTML":if(J!=null)throw Error(r(137,s));break;default:it(i,s,c,J,l,null)}}Pa(i,g,b,C,M,T,f,!1),Da(i);return;case"select":je("invalid",i),c=T=g=null;for(f in l)if(l.hasOwnProperty(f)&&(b=l[f],b!=null))switch(f){case"value":g=b;break;case"defaultValue":T=b;break;case"multiple":c=b;default:it(i,s,f,b,l,null)}s=g,l=T,i.multiple=!!c,s!=null?Qe(i,!!c,s,!1):l!=null&&Qe(i,!!c,l,!0);return;case"textarea":je("invalid",i),g=f=c=null;for(T in l)if(l.hasOwnProperty(T)&&(b=l[T],b!=null))switch(T){case"value":c=b;break;case"defaultValue":f=b;break;case"children":g=b;break;case"dangerouslySetInnerHTML":if(b!=null)throw Error(r(91));break;default:it(i,s,T,b,l,null)}Ts(i,c,f,g),Da(i);return;case"option":for(C in l)if(l.hasOwnProperty(C)&&(c=l[C],c!=null))switch(C){case"selected":i.selected=c&&typeof c!="function"&&typeof c!="symbol";break;default:it(i,s,C,c,l,null)}return;case"dialog":je("cancel",i),je("close",i);break;case"iframe":case"object":je("load",i);break;case"video":case"audio":for(c=0;c<Bc.length;c++)je(Bc[c],i);break;case"image":je("error",i),je("load",i);break;case"details":je("toggle",i);break;case"embed":case"source":case"link":je("error",i),je("load",i);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(M in l)if(l.hasOwnProperty(M)&&(c=l[M],c!=null))switch(M){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,s));default:it(i,s,M,c,l,null)}return;default:if(nc(s)){for(J in l)l.hasOwnProperty(J)&&(c=l[J],c!==void 0&&B_(i,s,J,c,l,void 0));return}}for(b in l)l.hasOwnProperty(b)&&(c=l[b],c!=null&&it(i,s,b,c,l,null))}function ax(i,s,l,c){switch(s){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var f=null,g=null,T=null,b=null,C=null,M=null,J=null;for(X in l){var ne=l[X];if(l.hasOwnProperty(X)&&ne!=null)switch(X){case"checked":break;case"value":break;case"defaultValue":C=ne;default:c.hasOwnProperty(X)||it(i,s,X,null,c,ne)}}for(var G in c){var X=c[G];if(ne=l[G],c.hasOwnProperty(G)&&(X!=null||ne!=null))switch(G){case"type":g=X;break;case"name":f=X;break;case"checked":M=X;break;case"defaultChecked":J=X;break;case"value":T=X;break;case"defaultValue":b=X;break;case"children":case"dangerouslySetInnerHTML":if(X!=null)throw Error(r(137,s));break;default:X!==ne&&it(i,s,G,X,c,ne)}}Es(i,T,b,C,M,J,g,f);return;case"select":X=T=b=G=null;for(g in l)if(C=l[g],l.hasOwnProperty(g)&&C!=null)switch(g){case"value":break;case"multiple":X=C;default:c.hasOwnProperty(g)||it(i,s,g,null,c,C)}for(f in c)if(g=c[f],C=l[f],c.hasOwnProperty(f)&&(g!=null||C!=null))switch(f){case"value":G=g;break;case"defaultValue":b=g;break;case"multiple":T=g;default:g!==C&&it(i,s,f,g,c,C)}s=b,l=T,c=X,G!=null?Qe(i,!!l,G,!1):!!c!=!!l&&(s!=null?Qe(i,!!l,s,!0):Qe(i,!!l,l?[]:"",!1));return;case"textarea":X=G=null;for(b in l)if(f=l[b],l.hasOwnProperty(b)&&f!=null&&!c.hasOwnProperty(b))switch(b){case"value":break;case"children":break;default:it(i,s,b,null,c,f)}for(T in c)if(f=c[T],g=l[T],c.hasOwnProperty(T)&&(f!=null||g!=null))switch(T){case"value":G=f;break;case"defaultValue":X=f;break;case"children":break;case"dangerouslySetInnerHTML":if(f!=null)throw Error(r(91));break;default:f!==g&&it(i,s,T,f,c,g)}xa(i,G,X);return;case"option":for(var ve in l)if(G=l[ve],l.hasOwnProperty(ve)&&G!=null&&!c.hasOwnProperty(ve))switch(ve){case"selected":i.selected=!1;break;default:it(i,s,ve,null,c,G)}for(C in c)if(G=c[C],X=l[C],c.hasOwnProperty(C)&&G!==X&&(G!=null||X!=null))switch(C){case"selected":i.selected=G&&typeof G!="function"&&typeof G!="symbol";break;default:it(i,s,C,G,c,X)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var De in l)G=l[De],l.hasOwnProperty(De)&&G!=null&&!c.hasOwnProperty(De)&&it(i,s,De,null,c,G);for(M in c)if(G=c[M],X=l[M],c.hasOwnProperty(M)&&G!==X&&(G!=null||X!=null))switch(M){case"children":case"dangerouslySetInnerHTML":if(G!=null)throw Error(r(137,s));break;default:it(i,s,M,G,c,X)}return;default:if(nc(s)){for(var Ct in l)G=l[Ct],l.hasOwnProperty(Ct)&&G!==void 0&&!c.hasOwnProperty(Ct)&&B_(i,s,Ct,void 0,c,G);for(J in c)G=c[J],X=l[J],!c.hasOwnProperty(J)||G===X||G===void 0&&X===void 0||B_(i,s,J,G,c,X);return}}for(var B in l)G=l[B],l.hasOwnProperty(B)&&G!=null&&!c.hasOwnProperty(B)&&it(i,s,B,null,c,G);for(ne in c)G=c[ne],X=l[ne],!c.hasOwnProperty(ne)||G===X||G==null&&X==null||it(i,s,ne,G,c,X)}var z_=null,F_=null;function Lf(i){return i.nodeType===9?i:i.ownerDocument}function nb(i){switch(i){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function rb(i,s){if(i===0)switch(s){case"svg":return 1;case"math":return 2;default:return 0}return i===1&&s==="foreignObject"?0:i}function j_(i,s){return i==="textarea"||i==="noscript"||typeof s.children=="string"||typeof s.children=="number"||typeof s.children=="bigint"||typeof s.dangerouslySetInnerHTML=="object"&&s.dangerouslySetInnerHTML!==null&&s.dangerouslySetInnerHTML.__html!=null}var q_=null;function ox(){var i=window.event;return i&&i.type==="popstate"?i===q_?!1:(q_=i,!0):(q_=null,!1)}var ib=typeof setTimeout=="function"?setTimeout:void 0,lx=typeof clearTimeout=="function"?clearTimeout:void 0,sb=typeof Promise=="function"?Promise:void 0,ux=typeof queueMicrotask=="function"?queueMicrotask:typeof sb<"u"?function(i){return sb.resolve(null).then(i).catch(cx)}:ib;function cx(i){setTimeout(function(){throw i})}function H_(i,s){var l=s,c=0;do{var f=l.nextSibling;if(i.removeChild(l),f&&f.nodeType===8)if(l=f.data,l==="/$"){if(c===0){i.removeChild(f),Qc(s);return}c--}else l!=="$"&&l!=="$?"&&l!=="$!"||c++;l=f}while(l);Qc(s)}function G_(i){var s=i.firstChild;for(s&&s.nodeType===10&&(s=s.nextSibling);s;){var l=s;switch(s=s.nextSibling,l.nodeName){case"HTML":case"HEAD":case"BODY":G_(l),Ca(l);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(l.rel.toLowerCase()==="stylesheet")continue}i.removeChild(l)}}function hx(i,s,l,c){for(;i.nodeType===1;){var f=l;if(i.nodeName.toLowerCase()!==s.toLowerCase()){if(!c&&(i.nodeName!=="INPUT"||i.type!=="hidden"))break}else if(c){if(!i[ps])switch(s){case"meta":if(!i.hasAttribute("itemprop"))break;return i;case"link":if(g=i.getAttribute("rel"),g==="stylesheet"&&i.hasAttribute("data-precedence"))break;if(g!==f.rel||i.getAttribute("href")!==(f.href==null?null:f.href)||i.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin)||i.getAttribute("title")!==(f.title==null?null:f.title))break;return i;case"style":if(i.hasAttribute("data-precedence"))break;return i;case"script":if(g=i.getAttribute("src"),(g!==(f.src==null?null:f.src)||i.getAttribute("type")!==(f.type==null?null:f.type)||i.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin))&&g&&i.hasAttribute("async")&&!i.hasAttribute("itemprop"))break;return i;default:return i}}else if(s==="input"&&i.type==="hidden"){var g=f.name==null?null:""+f.name;if(f.type==="hidden"&&i.getAttribute("name")===g)return i}else return i;if(i=Dr(i.nextSibling),i===null)break}return null}function dx(i,s,l){if(s==="")return null;for(;i.nodeType!==3;)if((i.nodeType!==1||i.nodeName!=="INPUT"||i.type!=="hidden")&&!l||(i=Dr(i.nextSibling),i===null))return null;return i}function Dr(i){for(;i!=null;i=i.nextSibling){var s=i.nodeType;if(s===1||s===3)break;if(s===8){if(s=i.data,s==="$"||s==="$!"||s==="$?"||s==="F!"||s==="F")break;if(s==="/$")return null}}return i}function ab(i){i=i.previousSibling;for(var s=0;i;){if(i.nodeType===8){var l=i.data;if(l==="$"||l==="$!"||l==="$?"){if(s===0)return i;s--}else l==="/$"&&s++}i=i.previousSibling}return null}function ob(i,s,l){switch(s=Lf(l),i){case"html":if(i=s.documentElement,!i)throw Error(r(452));return i;case"head":if(i=s.head,!i)throw Error(r(453));return i;case"body":if(i=s.body,!i)throw Error(r(454));return i;default:throw Error(r(451))}}var vr=new Map,lb=new Set;function Uf(i){return typeof i.getRootNode=="function"?i.getRootNode():i.ownerDocument}var ji=fe.d;fe.d={f:fx,r:mx,D:px,C:gx,L:_x,m:yx,X:Ex,S:vx,M:Tx};function fx(){var i=ji.f(),s=Pf();return i||s}function mx(i){var s=Ei(i);s!==null&&s.tag===5&&s.type==="form"?Vw(s):ji.r(i)}var Dl=typeof document>"u"?null:document;function ub(i,s,l){var c=Dl;if(c&&typeof s=="string"&&s){var f=At(s);f='link[rel="'+i+'"][href="'+f+'"]',typeof l=="string"&&(f+='[crossorigin="'+l+'"]'),lb.has(f)||(lb.add(f),i={rel:i,crossOrigin:l,href:s},c.querySelector(f)===null&&(s=c.createElement("link"),pn(s,"link",i),_t(s),c.head.appendChild(s)))}}function px(i){ji.D(i),ub("dns-prefetch",i,null)}function gx(i,s){ji.C(i,s),ub("preconnect",i,s)}function _x(i,s,l){ji.L(i,s,l);var c=Dl;if(c&&i&&s){var f='link[rel="preload"][as="'+At(s)+'"]';s==="image"&&l&&l.imageSrcSet?(f+='[imagesrcset="'+At(l.imageSrcSet)+'"]',typeof l.imageSizes=="string"&&(f+='[imagesizes="'+At(l.imageSizes)+'"]')):f+='[href="'+At(i)+'"]';var g=f;switch(s){case"style":g=Pl(i);break;case"script":g=xl(i)}vr.has(g)||(i=x({rel:"preload",href:s==="image"&&l&&l.imageSrcSet?void 0:i,as:s},l),vr.set(g,i),c.querySelector(f)!==null||s==="style"&&c.querySelector(Fc(g))||s==="script"&&c.querySelector(jc(g))||(s=c.createElement("link"),pn(s,"link",i),_t(s),c.head.appendChild(s)))}}function yx(i,s){ji.m(i,s);var l=Dl;if(l&&i){var c=s&&typeof s.as=="string"?s.as:"script",f='link[rel="modulepreload"][as="'+At(c)+'"][href="'+At(i)+'"]',g=f;switch(c){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":g=xl(i)}if(!vr.has(g)&&(i=x({rel:"modulepreload",href:i},s),vr.set(g,i),l.querySelector(f)===null)){switch(c){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(l.querySelector(jc(g)))return}c=l.createElement("link"),pn(c,"link",i),_t(c),l.head.appendChild(c)}}}function vx(i,s,l){ji.S(i,s,l);var c=Dl;if(c&&i){var f=_s(c).hoistableStyles,g=Pl(i);s=s||"default";var T=f.get(g);if(!T){var b={loading:0,preload:null};if(T=c.querySelector(Fc(g)))b.loading=5;else{i=x({rel:"stylesheet",href:i,"data-precedence":s},l),(l=vr.get(g))&&$_(i,l);var C=T=c.createElement("link");_t(C),pn(C,"link",i),C._p=new Promise(function(M,J){C.onload=M,C.onerror=J}),C.addEventListener("load",function(){b.loading|=1}),C.addEventListener("error",function(){b.loading|=2}),b.loading|=4,Bf(T,s,c)}T={type:"stylesheet",instance:T,count:1,state:b},f.set(g,T)}}}function Ex(i,s){ji.X(i,s);var l=Dl;if(l&&i){var c=_s(l).hoistableScripts,f=xl(i),g=c.get(f);g||(g=l.querySelector(jc(f)),g||(i=x({src:i,async:!0},s),(s=vr.get(f))&&K_(i,s),g=l.createElement("script"),_t(g),pn(g,"link",i),l.head.appendChild(g)),g={type:"script",instance:g,count:1,state:null},c.set(f,g))}}function Tx(i,s){ji.M(i,s);var l=Dl;if(l&&i){var c=_s(l).hoistableScripts,f=xl(i),g=c.get(f);g||(g=l.querySelector(jc(f)),g||(i=x({src:i,async:!0,type:"module"},s),(s=vr.get(f))&&K_(i,s),g=l.createElement("script"),_t(g),pn(g,"link",i),l.head.appendChild(g)),g={type:"script",instance:g,count:1,state:null},c.set(f,g))}}function cb(i,s,l,c){var f=(f=rr.current)?Uf(f):null;if(!f)throw Error(r(446));switch(i){case"meta":case"title":return null;case"style":return typeof l.precedence=="string"&&typeof l.href=="string"?(s=Pl(l.href),l=_s(f).hoistableStyles,c=l.get(s),c||(c={type:"style",instance:null,count:0,state:null},l.set(s,c)),c):{type:"void",instance:null,count:0,state:null};case"link":if(l.rel==="stylesheet"&&typeof l.href=="string"&&typeof l.precedence=="string"){i=Pl(l.href);var g=_s(f).hoistableStyles,T=g.get(i);if(T||(f=f.ownerDocument||f,T={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},g.set(i,T),(g=f.querySelector(Fc(i)))&&!g._p&&(T.instance=g,T.state.loading=5),vr.has(i)||(l={rel:"preload",as:"style",href:l.href,crossOrigin:l.crossOrigin,integrity:l.integrity,media:l.media,hrefLang:l.hrefLang,referrerPolicy:l.referrerPolicy},vr.set(i,l),g||wx(f,i,l,T.state))),s&&c===null)throw Error(r(528,""));return T}if(s&&c!==null)throw Error(r(529,""));return null;case"script":return s=l.async,l=l.src,typeof l=="string"&&s&&typeof s!="function"&&typeof s!="symbol"?(s=xl(l),l=_s(f).hoistableScripts,c=l.get(s),c||(c={type:"script",instance:null,count:0,state:null},l.set(s,c)),c):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,i))}}function Pl(i){return'href="'+At(i)+'"'}function Fc(i){return'link[rel="stylesheet"]['+i+"]"}function hb(i){return x({},i,{"data-precedence":i.precedence,precedence:null})}function wx(i,s,l,c){i.querySelector('link[rel="preload"][as="style"]['+s+"]")?c.loading=1:(s=i.createElement("link"),c.preload=s,s.addEventListener("load",function(){return c.loading|=1}),s.addEventListener("error",function(){return c.loading|=2}),pn(s,"link",l),_t(s),i.head.appendChild(s))}function xl(i){return'[src="'+At(i)+'"]'}function jc(i){return"script[async]"+i}function db(i,s,l){if(s.count++,s.instance===null)switch(s.type){case"style":var c=i.querySelector('style[data-href~="'+At(l.href)+'"]');if(c)return s.instance=c,_t(c),c;var f=x({},l,{"data-href":l.href,"data-precedence":l.precedence,href:null,precedence:null});return c=(i.ownerDocument||i).createElement("style"),_t(c),pn(c,"style",f),Bf(c,l.precedence,i),s.instance=c;case"stylesheet":f=Pl(l.href);var g=i.querySelector(Fc(f));if(g)return s.state.loading|=4,s.instance=g,_t(g),g;c=hb(l),(f=vr.get(f))&&$_(c,f),g=(i.ownerDocument||i).createElement("link"),_t(g);var T=g;return T._p=new Promise(function(b,C){T.onload=b,T.onerror=C}),pn(g,"link",c),s.state.loading|=4,Bf(g,l.precedence,i),s.instance=g;case"script":return g=xl(l.src),(f=i.querySelector(jc(g)))?(s.instance=f,_t(f),f):(c=l,(f=vr.get(g))&&(c=x({},l),K_(c,f)),i=i.ownerDocument||i,f=i.createElement("script"),_t(f),pn(f,"link",c),i.head.appendChild(f),s.instance=f);case"void":return null;default:throw Error(r(443,s.type))}else s.type==="stylesheet"&&(s.state.loading&4)===0&&(c=s.instance,s.state.loading|=4,Bf(c,l.precedence,i));return s.instance}function Bf(i,s,l){for(var c=l.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),f=c.length?c[c.length-1]:null,g=f,T=0;T<c.length;T++){var b=c[T];if(b.dataset.precedence===s)g=b;else if(g!==f)break}g?g.parentNode.insertBefore(i,g.nextSibling):(s=l.nodeType===9?l.head:l,s.insertBefore(i,s.firstChild))}function $_(i,s){i.crossOrigin==null&&(i.crossOrigin=s.crossOrigin),i.referrerPolicy==null&&(i.referrerPolicy=s.referrerPolicy),i.title==null&&(i.title=s.title)}function K_(i,s){i.crossOrigin==null&&(i.crossOrigin=s.crossOrigin),i.referrerPolicy==null&&(i.referrerPolicy=s.referrerPolicy),i.integrity==null&&(i.integrity=s.integrity)}var zf=null;function fb(i,s,l){if(zf===null){var c=new Map,f=zf=new Map;f.set(l,c)}else f=zf,c=f.get(l),c||(c=new Map,f.set(l,c));if(c.has(i))return c;for(c.set(i,null),l=l.getElementsByTagName(i),f=0;f<l.length;f++){var g=l[f];if(!(g[ps]||g[tn]||i==="link"&&g.getAttribute("rel")==="stylesheet")&&g.namespaceURI!=="http://www.w3.org/2000/svg"){var T=g.getAttribute(s)||"";T=i+T;var b=c.get(T);b?b.push(g):c.set(T,[g])}}return c}function mb(i,s,l){i=i.ownerDocument||i,i.head.insertBefore(l,s==="title"?i.querySelector("head > title"):null)}function bx(i,s,l){if(l===1||s.itemProp!=null)return!1;switch(i){case"meta":case"title":return!0;case"style":if(typeof s.precedence!="string"||typeof s.href!="string"||s.href==="")break;return!0;case"link":if(typeof s.rel!="string"||typeof s.href!="string"||s.href===""||s.onLoad||s.onError)break;switch(s.rel){case"stylesheet":return i=s.disabled,typeof s.precedence=="string"&&i==null;default:return!0}case"script":if(s.async&&typeof s.async!="function"&&typeof s.async!="symbol"&&!s.onLoad&&!s.onError&&s.src&&typeof s.src=="string")return!0}return!1}function pb(i){return!(i.type==="stylesheet"&&(i.state.loading&3)===0)}var qc=null;function Ix(){}function Ax(i,s,l){if(qc===null)throw Error(r(475));var c=qc;if(s.type==="stylesheet"&&(typeof l.media!="string"||matchMedia(l.media).matches!==!1)&&(s.state.loading&4)===0){if(s.instance===null){var f=Pl(l.href),g=i.querySelector(Fc(f));if(g){i=g._p,i!==null&&typeof i=="object"&&typeof i.then=="function"&&(c.count++,c=Ff.bind(c),i.then(c,c)),s.state.loading|=4,s.instance=g,_t(g);return}g=i.ownerDocument||i,l=hb(l),(f=vr.get(f))&&$_(l,f),g=g.createElement("link"),_t(g);var T=g;T._p=new Promise(function(b,C){T.onload=b,T.onerror=C}),pn(g,"link",l),s.instance=g}c.stylesheets===null&&(c.stylesheets=new Map),c.stylesheets.set(s,i),(i=s.state.preload)&&(s.state.loading&3)===0&&(c.count++,s=Ff.bind(c),i.addEventListener("load",s),i.addEventListener("error",s))}}function Sx(){if(qc===null)throw Error(r(475));var i=qc;return i.stylesheets&&i.count===0&&Q_(i,i.stylesheets),0<i.count?function(s){var l=setTimeout(function(){if(i.stylesheets&&Q_(i,i.stylesheets),i.unsuspend){var c=i.unsuspend;i.unsuspend=null,c()}},6e4);return i.unsuspend=s,function(){i.unsuspend=null,clearTimeout(l)}}:null}function Ff(){if(this.count--,this.count===0){if(this.stylesheets)Q_(this,this.stylesheets);else if(this.unsuspend){var i=this.unsuspend;this.unsuspend=null,i()}}}var jf=null;function Q_(i,s){i.stylesheets=null,i.unsuspend!==null&&(i.count++,jf=new Map,s.forEach(Rx,i),jf=null,Ff.call(i))}function Rx(i,s){if(!(s.state.loading&4)){var l=jf.get(i);if(l)var c=l.get(null);else{l=new Map,jf.set(i,l);for(var f=i.querySelectorAll("link[data-precedence],style[data-precedence]"),g=0;g<f.length;g++){var T=f[g];(T.nodeName==="LINK"||T.getAttribute("media")!=="not all")&&(l.set(T.dataset.precedence,T),c=T)}c&&l.set(null,c)}f=s.instance,T=f.getAttribute("data-precedence"),g=l.get(T)||c,g===c&&l.set(null,f),l.set(T,f),this.count++,c=Ff.bind(this),f.addEventListener("load",c),f.addEventListener("error",c),g?g.parentNode.insertBefore(f,g.nextSibling):(i=i.nodeType===9?i.head:i,i.insertBefore(f,i.firstChild)),s.state.loading|=4}}var Hc={$$typeof:S,Provider:null,Consumer:null,_currentValue:Ce,_currentValue2:Ce,_threadCount:0};function Cx(i,s,l,c,f,g,T,b){this.tag=1,this.containerInfo=i,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=$o(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.finishedLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=$o(0),this.hiddenUpdates=$o(null),this.identifierPrefix=c,this.onUncaughtError=f,this.onCaughtError=g,this.onRecoverableError=T,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=b,this.incompleteTransitions=new Map}function gb(i,s,l,c,f,g,T,b,C,M,J,ne){return i=new Cx(i,s,l,T,b,C,M,ne),s=1,g===!0&&(s|=24),g=_r(3,null,null,s),i.current=g,g.stateNode=i,s=Sg(),s.refCount++,i.pooledCache=s,s.refCount++,g.memoizedState={element:c,isDehydrated:l,cache:s},a_(g),i}function _b(i){return i?(i=ul,i):ul}function yb(i,s,l,c,f,g){f=_b(f),c.context===null?c.context=f:c.pendingContext=f,c=Ps(s),c.payload={element:l},g=g===void 0?null:g,g!==null&&(c.callback=g),l=xs(i,c,s),l!==null&&(xn(l,i,s),Rc(l,i,s))}function vb(i,s){if(i=i.memoizedState,i!==null&&i.dehydrated!==null){var l=i.retryLane;i.retryLane=l!==0&&l<s?l:s}}function W_(i,s){vb(i,s),(i=i.alternate)&&vb(i,s)}function Eb(i){if(i.tag===13){var s=bs(i,67108864);s!==null&&xn(s,i,67108864),W_(i,67108864)}}var qf=!0;function Dx(i,s,l,c){var f=A.T;A.T=null;var g=fe.p;try{fe.p=2,Y_(i,s,l,c)}finally{fe.p=g,A.T=f}}function Px(i,s,l,c){var f=A.T;A.T=null;var g=fe.p;try{fe.p=8,Y_(i,s,l,c)}finally{fe.p=g,A.T=f}}function Y_(i,s,l,c){if(qf){var f=X_(c);if(f===null)U_(i,s,c,Hf,l),wb(i,c);else if(Nx(f,i,s,l,c))c.stopPropagation();else if(wb(i,c),s&4&&-1<xx.indexOf(i)){for(;f!==null;){var g=Ei(f);if(g!==null)switch(g.tag){case 3:if(g=g.stateNode,g.current.memoizedState.isDehydrated){var T=Ir(g.pendingLanes);if(T!==0){var b=g;for(b.pendingLanes|=2,b.entangledLanes|=2;T;){var C=1<<31-Rn(T);b.entanglements[1]|=C,T&=~C}Yr(g),(vt&6)===0&&(Rf=Ln()+500,Uc(0))}}break;case 13:b=bs(g,2),b!==null&&xn(b,g,2),Pf(),W_(g,2)}if(g=X_(c),g===null&&U_(i,s,c,Hf,l),g===f)break;f=g}f!==null&&c.stopPropagation()}else U_(i,s,c,null,l)}}function X_(i){return i=Xo(i),Z_(i)}var Hf=null;function Z_(i){if(Hf=null,i=Ar(i),i!==null){var s=Te(i);if(s===null)i=null;else{var l=s.tag;if(l===13){if(i=Ne(s),i!==null)return i;i=null}else if(l===3){if(s.stateNode.current.memoizedState.isDehydrated)return s.tag===3?s.stateNode.containerInfo:null;i=null}else s!==i&&(i=null)}}return Hf=i,null}function Tb(i){switch(i){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Cd()){case Gt:return 2;case en:return 8;case yi:case Dd:return 32;case $u:return 268435456;default:return 32}default:return 32}}var J_=!1,Us=null,Bs=null,zs=null,Gc=new Map,$c=new Map,Fs=[],xx="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function wb(i,s){switch(i){case"focusin":case"focusout":Us=null;break;case"dragenter":case"dragleave":Bs=null;break;case"mouseover":case"mouseout":zs=null;break;case"pointerover":case"pointerout":Gc.delete(s.pointerId);break;case"gotpointercapture":case"lostpointercapture":$c.delete(s.pointerId)}}function Kc(i,s,l,c,f,g){return i===null||i.nativeEvent!==g?(i={blockedOn:s,domEventName:l,eventSystemFlags:c,nativeEvent:g,targetContainers:[f]},s!==null&&(s=Ei(s),s!==null&&Eb(s)),i):(i.eventSystemFlags|=c,s=i.targetContainers,f!==null&&s.indexOf(f)===-1&&s.push(f),i)}function Nx(i,s,l,c,f){switch(s){case"focusin":return Us=Kc(Us,i,s,l,c,f),!0;case"dragenter":return Bs=Kc(Bs,i,s,l,c,f),!0;case"mouseover":return zs=Kc(zs,i,s,l,c,f),!0;case"pointerover":var g=f.pointerId;return Gc.set(g,Kc(Gc.get(g)||null,i,s,l,c,f)),!0;case"gotpointercapture":return g=f.pointerId,$c.set(g,Kc($c.get(g)||null,i,s,l,c,f)),!0}return!1}function bb(i){var s=Ar(i.target);if(s!==null){var l=Te(s);if(l!==null){if(s=l.tag,s===13){if(s=Ne(l),s!==null){i.blockedOn=s,ms(i.priority,function(){if(l.tag===13){var c=Xn(),f=bs(l,c);f!==null&&xn(f,l,c),W_(l,c)}});return}}else if(s===3&&l.stateNode.current.memoizedState.isDehydrated){i.blockedOn=l.tag===3?l.stateNode.containerInfo:null;return}}}i.blockedOn=null}function Gf(i){if(i.blockedOn!==null)return!1;for(var s=i.targetContainers;0<s.length;){var l=X_(i.nativeEvent);if(l===null){l=i.nativeEvent;var c=new l.constructor(l.type,l);or=c,l.target.dispatchEvent(c),or=null}else return s=Ei(l),s!==null&&Eb(s),i.blockedOn=l,!1;s.shift()}return!0}function Ib(i,s,l){Gf(i)&&l.delete(s)}function Ox(){J_=!1,Us!==null&&Gf(Us)&&(Us=null),Bs!==null&&Gf(Bs)&&(Bs=null),zs!==null&&Gf(zs)&&(zs=null),Gc.forEach(Ib),$c.forEach(Ib)}function $f(i,s){i.blockedOn===s&&(i.blockedOn=null,J_||(J_=!0,n.unstable_scheduleCallback(n.unstable_NormalPriority,Ox)))}var Kf=null;function Ab(i){Kf!==i&&(Kf=i,n.unstable_scheduleCallback(n.unstable_NormalPriority,function(){Kf===i&&(Kf=null);for(var s=0;s<i.length;s+=3){var l=i[s],c=i[s+1],f=i[s+2];if(typeof c!="function"){if(Z_(c||l)===null)continue;break}var g=Ei(l);g!==null&&(i.splice(s,3),s-=3,jg(g,{pending:!0,data:f,method:l.method,action:c},c,f))}}))}function Qc(i){function s(C){return $f(C,i)}Us!==null&&$f(Us,i),Bs!==null&&$f(Bs,i),zs!==null&&$f(zs,i),Gc.forEach(s),$c.forEach(s);for(var l=0;l<Fs.length;l++){var c=Fs[l];c.blockedOn===i&&(c.blockedOn=null)}for(;0<Fs.length&&(l=Fs[0],l.blockedOn===null);)bb(l),l.blockedOn===null&&Fs.shift();if(l=(i.ownerDocument||i).$$reactFormReplay,l!=null)for(c=0;c<l.length;c+=3){var f=l[c],g=l[c+1],T=f[$t]||null;if(typeof g=="function")T||Ab(l);else if(T){var b=null;if(g&&g.hasAttribute("formAction")){if(f=g,T=g[$t]||null)b=T.formAction;else if(Z_(f)!==null)continue}else b=T.action;typeof b=="function"?l[c+1]=b:(l.splice(c,3),c-=3),Ab(l)}}}function ey(i){this._internalRoot=i}Qf.prototype.render=ey.prototype.render=function(i){var s=this._internalRoot;if(s===null)throw Error(r(409));var l=s.current,c=Xn();yb(l,c,i,s,null,null)},Qf.prototype.unmount=ey.prototype.unmount=function(){var i=this._internalRoot;if(i!==null){this._internalRoot=null;var s=i.containerInfo;i.tag===0&&Sl(),yb(i.current,2,null,i,null,null),Pf(),s[vi]=null}};function Qf(i){this._internalRoot=i}Qf.prototype.unstable_scheduleHydration=function(i){if(i){var s=kd();i={blockedOn:null,target:i,priority:s};for(var l=0;l<Fs.length&&s!==0&&s<Fs[l].priority;l++);Fs.splice(l,0,i),l===0&&bb(i)}};var Sb=e.version;if(Sb!=="19.0.0")throw Error(r(527,Sb,"19.0.0"));fe.findDOMNode=function(i){var s=i._reactInternals;if(s===void 0)throw typeof i.render=="function"?Error(r(188)):(i=Object.keys(i).join(","),Error(r(268,i)));return i=ie(s),i=i!==null?ge(i):null,i=i===null?null:i.stateNode,i};var kx={bundleType:0,version:"19.0.0",rendererPackageName:"react-dom",currentDispatcherRef:A,findFiberByHostInstance:Ar,reconcilerVersion:"19.0.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Wf=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Wf.isDisabled&&Wf.supportsFiber)try{ls=Wf.inject(kx),En=Wf}catch{}}return Yc.createRoot=function(i,s){if(!a(i))throw Error(r(299));var l=!1,c="",f=qw,g=Hw,T=Gw,b=null;return s!=null&&(s.unstable_strictMode===!0&&(l=!0),s.identifierPrefix!==void 0&&(c=s.identifierPrefix),s.onUncaughtError!==void 0&&(f=s.onUncaughtError),s.onCaughtError!==void 0&&(g=s.onCaughtError),s.onRecoverableError!==void 0&&(T=s.onRecoverableError),s.unstable_transitionCallbacks!==void 0&&(b=s.unstable_transitionCallbacks)),s=gb(i,1,!1,null,null,l,c,f,g,T,b,null),i[vi]=s.current,L_(i.nodeType===8?i.parentNode:i),new ey(s)},Yc.hydrateRoot=function(i,s,l){if(!a(i))throw Error(r(299));var c=!1,f="",g=qw,T=Hw,b=Gw,C=null,M=null;return l!=null&&(l.unstable_strictMode===!0&&(c=!0),l.identifierPrefix!==void 0&&(f=l.identifierPrefix),l.onUncaughtError!==void 0&&(g=l.onUncaughtError),l.onCaughtError!==void 0&&(T=l.onCaughtError),l.onRecoverableError!==void 0&&(b=l.onRecoverableError),l.unstable_transitionCallbacks!==void 0&&(C=l.unstable_transitionCallbacks),l.formState!==void 0&&(M=l.formState)),s=gb(i,1,!0,s,l??null,c,f,g,T,b,C,M),s.context=_b(null),l=s.current,c=Xn(),f=Ps(c),f.callback=null,xs(l,f,c),s.current.lanes=c,Ot(s,c),Yr(s),i[vi]=s.current,L_(i),new Qf(s)},Yc.version="19.0.0",Yc}var Mb;function Gx(){if(Mb)return ny.exports;Mb=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}return n(),ny.exports=Hx(),ny.exports}var $x=Gx(),Z=Dv();const Ph=Mx(Z);var Xc={},Lb;function Kx(){if(Lb)return Xc;Lb=1,Object.defineProperty(Xc,"__esModule",{value:!0}),Xc.parse=u,Xc.serialize=p;const n=/^[\u0021-\u003A\u003C\u003E-\u007E]+$/,e=/^[\u0021-\u003A\u003C-\u007E]*$/,t=/^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,r=/^[\u0020-\u003A\u003D-\u007E]*$/,a=Object.prototype.toString,o=(()=>{const w=function(){};return w.prototype=Object.create(null),w})();function u(w,S){const P=new o,U=w.length;if(U<2)return P;const L=(S==null?void 0:S.decode)||y;let H=0;do{const Y=w.indexOf("=",H);if(Y===-1)break;const $=w.indexOf(";",H),oe=$===-1?U:$;if(Y>oe){H=w.lastIndexOf(";",Y-1)+1;continue}const ae=d(w,H,Y),le=m(w,Y,ae),D=w.slice(ae,le);if(P[D]===void 0){let R=d(w,Y+1,oe),A=m(w,oe,R);const x=L(w.slice(R,A));P[D]=x}H=oe+1}while(H<U);return P}function d(w,S,P){do{const U=w.charCodeAt(S);if(U!==32&&U!==9)return S}while(++S<P);return P}function m(w,S,P){for(;S>P;){const U=w.charCodeAt(--S);if(U!==32&&U!==9)return S+1}return P}function p(w,S,P){const U=(P==null?void 0:P.encode)||encodeURIComponent;if(!n.test(w))throw new TypeError(`argument name is invalid: ${w}`);const L=U(S);if(!e.test(L))throw new TypeError(`argument val is invalid: ${S}`);let H=w+"="+L;if(!P)return H;if(P.maxAge!==void 0){if(!Number.isInteger(P.maxAge))throw new TypeError(`option maxAge is invalid: ${P.maxAge}`);H+="; Max-Age="+P.maxAge}if(P.domain){if(!t.test(P.domain))throw new TypeError(`option domain is invalid: ${P.domain}`);H+="; Domain="+P.domain}if(P.path){if(!r.test(P.path))throw new TypeError(`option path is invalid: ${P.path}`);H+="; Path="+P.path}if(P.expires){if(!v(P.expires)||!Number.isFinite(P.expires.valueOf()))throw new TypeError(`option expires is invalid: ${P.expires}`);H+="; Expires="+P.expires.toUTCString()}if(P.httpOnly&&(H+="; HttpOnly"),P.secure&&(H+="; Secure"),P.partitioned&&(H+="; Partitioned"),P.priority)switch(typeof P.priority=="string"?P.priority.toLowerCase():void 0){case"low":H+="; Priority=Low";break;case"medium":H+="; Priority=Medium";break;case"high":H+="; Priority=High";break;default:throw new TypeError(`option priority is invalid: ${P.priority}`)}if(P.sameSite)switch(typeof P.sameSite=="string"?P.sameSite.toLowerCase():P.sameSite){case!0:case"strict":H+="; SameSite=Strict";break;case"lax":H+="; SameSite=Lax";break;case"none":H+="; SameSite=None";break;default:throw new TypeError(`option sameSite is invalid: ${P.sameSite}`)}return H}function y(w){if(w.indexOf("%")===-1)return w;try{return decodeURIComponent(w)}catch{return w}}function v(w){return a.call(w)==="[object Date]"}return Xc}Kx();/**
 * react-router v7.5.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var Ub="popstate";function Qx(n={}){function e(r,a){let{pathname:o,search:u,hash:d}=r.location;return Ny("",{pathname:o,search:u,hash:d},a.state&&a.state.usr||null,a.state&&a.state.key||"default")}function t(r,a){return typeof a=="string"?a:xh(a)}return Yx(e,t,null,n)}function Et(n,e){if(n===!1||n===null||typeof n>"u")throw new Error(e)}function ui(n,e){if(!n){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function Wx(){return Math.random().toString(36).substring(2,10)}function Bb(n,e){return{usr:n.state,key:n.key,idx:e}}function Ny(n,e,t=null,r){return{pathname:typeof n=="string"?n:n.pathname,search:"",hash:"",...typeof e=="string"?Cu(e):e,state:t,key:e&&e.key||r||Wx()}}function xh({pathname:n="/",search:e="",hash:t=""}){return e&&e!=="?"&&(n+=e.charAt(0)==="?"?e:"?"+e),t&&t!=="#"&&(n+=t.charAt(0)==="#"?t:"#"+t),n}function Cu(n){let e={};if(n){let t=n.indexOf("#");t>=0&&(e.hash=n.substring(t),n=n.substring(0,t));let r=n.indexOf("?");r>=0&&(e.search=n.substring(r),n=n.substring(0,r)),n&&(e.pathname=n)}return e}function Yx(n,e,t,r={}){let{window:a=document.defaultView,v5Compat:o=!1}=r,u=a.history,d="POP",m=null,p=y();p==null&&(p=0,u.replaceState({...u.state,idx:p},""));function y(){return(u.state||{idx:null}).idx}function v(){d="POP";let L=y(),H=L==null?null:L-p;p=L,m&&m({action:d,location:U.location,delta:H})}function w(L,H){d="PUSH";let Y=Ny(U.location,L,H);p=y()+1;let $=Bb(Y,p),oe=U.createHref(Y);try{u.pushState($,"",oe)}catch(ae){if(ae instanceof DOMException&&ae.name==="DataCloneError")throw ae;a.location.assign(oe)}o&&m&&m({action:d,location:U.location,delta:1})}function S(L,H){d="REPLACE";let Y=Ny(U.location,L,H);p=y();let $=Bb(Y,p),oe=U.createHref(Y);u.replaceState($,"",oe),o&&m&&m({action:d,location:U.location,delta:0})}function P(L){let H=a.location.origin!=="null"?a.location.origin:a.location.href,Y=typeof L=="string"?L:xh(L);return Y=Y.replace(/ $/,"%20"),Et(H,`No window.location.(origin|href) available to create URL for href: ${Y}`),new URL(Y,H)}let U={get action(){return d},get location(){return n(a,u)},listen(L){if(m)throw new Error("A history only accepts one active listener");return a.addEventListener(Ub,v),m=L,()=>{a.removeEventListener(Ub,v),m=null}},createHref(L){return e(a,L)},createURL:P,encodeLocation(L){let H=P(L);return{pathname:H.pathname,search:H.search,hash:H.hash}},push:w,replace:S,go(L){return u.go(L)}};return U}function fS(n,e,t="/"){return Xx(n,e,t,!1)}function Xx(n,e,t,r){let a=typeof e=="string"?Cu(e):e,o=Qi(a.pathname||"/",t);if(o==null)return null;let u=mS(n);Zx(u);let d=null;for(let m=0;d==null&&m<u.length;++m){let p=uN(o);d=oN(u[m],p,r)}return d}function mS(n,e=[],t=[],r=""){let a=(o,u,d)=>{let m={relativePath:d===void 0?o.path||"":d,caseSensitive:o.caseSensitive===!0,childrenIndex:u,route:o};m.relativePath.startsWith("/")&&(Et(m.relativePath.startsWith(r),`Absolute route path "${m.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),m.relativePath=m.relativePath.slice(r.length));let p=$i([r,m.relativePath]),y=t.concat(m);o.children&&o.children.length>0&&(Et(o.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${p}".`),mS(o.children,e,y,p)),!(o.path==null&&!o.index)&&e.push({path:p,score:sN(p,o.index),routesMeta:y})};return n.forEach((o,u)=>{var d;if(o.path===""||!((d=o.path)!=null&&d.includes("?")))a(o,u);else for(let m of pS(o.path))a(o,u,m)}),e}function pS(n){let e=n.split("/");if(e.length===0)return[];let[t,...r]=e,a=t.endsWith("?"),o=t.replace(/\?$/,"");if(r.length===0)return a?[o,""]:[o];let u=pS(r.join("/")),d=[];return d.push(...u.map(m=>m===""?o:[o,m].join("/"))),a&&d.push(...u),d.map(m=>n.startsWith("/")&&m===""?"/":m)}function Zx(n){n.sort((e,t)=>e.score!==t.score?t.score-e.score:aN(e.routesMeta.map(r=>r.childrenIndex),t.routesMeta.map(r=>r.childrenIndex)))}var Jx=/^:[\w-]+$/,eN=3,tN=2,nN=1,rN=10,iN=-2,zb=n=>n==="*";function sN(n,e){let t=n.split("/"),r=t.length;return t.some(zb)&&(r+=iN),e&&(r+=tN),t.filter(a=>!zb(a)).reduce((a,o)=>a+(Jx.test(o)?eN:o===""?nN:rN),r)}function aN(n,e){return n.length===e.length&&n.slice(0,-1).every((r,a)=>r===e[a])?n[n.length-1]-e[e.length-1]:0}function oN(n,e,t=!1){let{routesMeta:r}=n,a={},o="/",u=[];for(let d=0;d<r.length;++d){let m=r[d],p=d===r.length-1,y=o==="/"?e:e.slice(o.length)||"/",v=Pm({path:m.relativePath,caseSensitive:m.caseSensitive,end:p},y),w=m.route;if(!v&&p&&t&&!r[r.length-1].route.index&&(v=Pm({path:m.relativePath,caseSensitive:m.caseSensitive,end:!1},y)),!v)return null;Object.assign(a,v.params),u.push({params:a,pathname:$i([o,v.pathname]),pathnameBase:fN($i([o,v.pathnameBase])),route:w}),v.pathnameBase!=="/"&&(o=$i([o,v.pathnameBase]))}return u}function Pm(n,e){typeof n=="string"&&(n={path:n,caseSensitive:!1,end:!0});let[t,r]=lN(n.path,n.caseSensitive,n.end),a=e.match(t);if(!a)return null;let o=a[0],u=o.replace(/(.)\/+$/,"$1"),d=a.slice(1);return{params:r.reduce((p,{paramName:y,isOptional:v},w)=>{if(y==="*"){let P=d[w]||"";u=o.slice(0,o.length-P.length).replace(/(.)\/+$/,"$1")}const S=d[w];return v&&!S?p[y]=void 0:p[y]=(S||"").replace(/%2F/g,"/"),p},{}),pathname:o,pathnameBase:u,pattern:n}}function lN(n,e=!1,t=!0){ui(n==="*"||!n.endsWith("*")||n.endsWith("/*"),`Route path "${n}" will be treated as if it were "${n.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${n.replace(/\*$/,"/*")}".`);let r=[],a="^"+n.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(u,d,m)=>(r.push({paramName:d,isOptional:m!=null}),m?"/?([^\\/]+)?":"/([^\\/]+)"));return n.endsWith("*")?(r.push({paramName:"*"}),a+=n==="*"||n==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):t?a+="\\/*$":n!==""&&n!=="/"&&(a+="(?:(?=\\/|$))"),[new RegExp(a,e?void 0:"i"),r]}function uN(n){try{return n.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return ui(!1,`The URL path "${n}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${e}).`),n}}function Qi(n,e){if(e==="/")return n;if(!n.toLowerCase().startsWith(e.toLowerCase()))return null;let t=e.endsWith("/")?e.length-1:e.length,r=n.charAt(t);return r&&r!=="/"?null:n.slice(t)||"/"}function cN(n,e="/"){let{pathname:t,search:r="",hash:a=""}=typeof n=="string"?Cu(n):n;return{pathname:t?t.startsWith("/")?t:hN(t,e):e,search:mN(r),hash:pN(a)}}function hN(n,e){let t=e.replace(/\/+$/,"").split("/");return n.split("/").forEach(a=>{a===".."?t.length>1&&t.pop():a!=="."&&t.push(a)}),t.length>1?t.join("/"):"/"}function oy(n,e,t,r){return`Cannot include a '${n}' character in a manually specified \`to.${e}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${t}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function dN(n){return n.filter((e,t)=>t===0||e.route.path&&e.route.path.length>0)}function gS(n){let e=dN(n);return e.map((t,r)=>r===e.length-1?t.pathname:t.pathnameBase)}function _S(n,e,t,r=!1){let a;typeof n=="string"?a=Cu(n):(a={...n},Et(!a.pathname||!a.pathname.includes("?"),oy("?","pathname","search",a)),Et(!a.pathname||!a.pathname.includes("#"),oy("#","pathname","hash",a)),Et(!a.search||!a.search.includes("#"),oy("#","search","hash",a)));let o=n===""||a.pathname==="",u=o?"/":a.pathname,d;if(u==null)d=t;else{let v=e.length-1;if(!r&&u.startsWith("..")){let w=u.split("/");for(;w[0]==="..";)w.shift(),v-=1;a.pathname=w.join("/")}d=v>=0?e[v]:"/"}let m=cN(a,d),p=u&&u!=="/"&&u.endsWith("/"),y=(o||u===".")&&t.endsWith("/");return!m.pathname.endsWith("/")&&(p||y)&&(m.pathname+="/"),m}var $i=n=>n.join("/").replace(/\/\/+/g,"/"),fN=n=>n.replace(/\/+$/,"").replace(/^\/*/,"/"),mN=n=>!n||n==="?"?"":n.startsWith("?")?n:"?"+n,pN=n=>!n||n==="#"?"":n.startsWith("#")?n:"#"+n;function gN(n){return n!=null&&typeof n.status=="number"&&typeof n.statusText=="string"&&typeof n.internal=="boolean"&&"data"in n}var yS=["POST","PUT","PATCH","DELETE"];new Set(yS);var _N=["GET",...yS];new Set(_N);var Du=Z.createContext(null);Du.displayName="DataRouter";var up=Z.createContext(null);up.displayName="DataRouterState";var vS=Z.createContext({isTransitioning:!1});vS.displayName="ViewTransition";var yN=Z.createContext(new Map);yN.displayName="Fetchers";var vN=Z.createContext(null);vN.displayName="Await";var pi=Z.createContext(null);pi.displayName="Navigation";var rd=Z.createContext(null);rd.displayName="Location";var gi=Z.createContext({outlet:null,matches:[],isDataRoute:!1});gi.displayName="Route";var Pv=Z.createContext(null);Pv.displayName="RouteError";function EN(n,{relative:e}={}){Et(id(),"useHref() may be used only in the context of a <Router> component.");let{basename:t,navigator:r}=Z.useContext(pi),{hash:a,pathname:o,search:u}=sd(n,{relative:e}),d=o;return t!=="/"&&(d=o==="/"?t:$i([t,o])),r.createHref({pathname:d,search:u,hash:a})}function id(){return Z.useContext(rd)!=null}function Vo(){return Et(id(),"useLocation() may be used only in the context of a <Router> component."),Z.useContext(rd).location}var ES="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function TS(n){Z.useContext(pi).static||Z.useLayoutEffect(n)}function cp(){let{isDataRoute:n}=Z.useContext(gi);return n?kN():TN()}function TN(){Et(id(),"useNavigate() may be used only in the context of a <Router> component.");let n=Z.useContext(Du),{basename:e,navigator:t}=Z.useContext(pi),{matches:r}=Z.useContext(gi),{pathname:a}=Vo(),o=JSON.stringify(gS(r)),u=Z.useRef(!1);return TS(()=>{u.current=!0}),Z.useCallback((m,p={})=>{if(ui(u.current,ES),!u.current)return;if(typeof m=="number"){t.go(m);return}let y=_S(m,JSON.parse(o),a,p.relative==="path");n==null&&e!=="/"&&(y.pathname=y.pathname==="/"?e:$i([e,y.pathname])),(p.replace?t.replace:t.push)(y,p.state,p)},[e,t,o,a,n])}Z.createContext(null);function wN(){let{matches:n}=Z.useContext(gi),e=n[n.length-1];return e?e.params:{}}function sd(n,{relative:e}={}){let{matches:t}=Z.useContext(gi),{pathname:r}=Vo(),a=JSON.stringify(gS(t));return Z.useMemo(()=>_S(n,JSON.parse(a),r,e==="path"),[n,a,r,e])}function bN(n,e){return wS(n,e)}function wS(n,e,t,r){var Y;Et(id(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:a,static:o}=Z.useContext(pi),{matches:u}=Z.useContext(gi),d=u[u.length-1],m=d?d.params:{},p=d?d.pathname:"/",y=d?d.pathnameBase:"/",v=d&&d.route;{let $=v&&v.path||"";bS(p,!v||$.endsWith("*")||$.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${p}" (under <Route path="${$}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${$}"> to <Route path="${$==="/"?"*":`${$}/*`}">.`)}let w=Vo(),S;if(e){let $=typeof e=="string"?Cu(e):e;Et(y==="/"||((Y=$.pathname)==null?void 0:Y.startsWith(y)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${y}" but pathname "${$.pathname}" was given in the \`location\` prop.`),S=$}else S=w;let P=S.pathname||"/",U=P;if(y!=="/"){let $=y.replace(/^\//,"").split("/");U="/"+P.replace(/^\//,"").split("/").slice($.length).join("/")}let L=!o&&t&&t.matches&&t.matches.length>0?t.matches:fS(n,{pathname:U});ui(v||L!=null,`No routes matched location "${S.pathname}${S.search}${S.hash}" `),ui(L==null||L[L.length-1].route.element!==void 0||L[L.length-1].route.Component!==void 0||L[L.length-1].route.lazy!==void 0,`Matched leaf route at location "${S.pathname}${S.search}${S.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let H=CN(L&&L.map($=>Object.assign({},$,{params:Object.assign({},m,$.params),pathname:$i([y,a.encodeLocation?a.encodeLocation($.pathname).pathname:$.pathname]),pathnameBase:$.pathnameBase==="/"?y:$i([y,a.encodeLocation?a.encodeLocation($.pathnameBase).pathname:$.pathnameBase])})),u,t,r);return e&&H?Z.createElement(rd.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...S},navigationType:"POP"}},H):H}function IN(){let n=ON(),e=gN(n)?`${n.status} ${n.statusText}`:n instanceof Error?n.message:JSON.stringify(n),t=n instanceof Error?n.stack:null,r="rgba(200,200,200, 0.5)",a={padding:"0.5rem",backgroundColor:r},o={padding:"2px 4px",backgroundColor:r},u=null;return console.error("Error handled by React Router default ErrorBoundary:",n),u=Z.createElement(Z.Fragment,null,Z.createElement("p",null,"💿 Hey developer 👋"),Z.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",Z.createElement("code",{style:o},"ErrorBoundary")," or"," ",Z.createElement("code",{style:o},"errorElement")," prop on your route.")),Z.createElement(Z.Fragment,null,Z.createElement("h2",null,"Unexpected Application Error!"),Z.createElement("h3",{style:{fontStyle:"italic"}},e),t?Z.createElement("pre",{style:a},t):null,u)}var AN=Z.createElement(IN,null),SN=class extends Z.Component{constructor(n){super(n),this.state={location:n.location,revalidation:n.revalidation,error:n.error}}static getDerivedStateFromError(n){return{error:n}}static getDerivedStateFromProps(n,e){return e.location!==n.location||e.revalidation!=="idle"&&n.revalidation==="idle"?{error:n.error,location:n.location,revalidation:n.revalidation}:{error:n.error!==void 0?n.error:e.error,location:e.location,revalidation:n.revalidation||e.revalidation}}componentDidCatch(n,e){console.error("React Router caught the following error during render",n,e)}render(){return this.state.error!==void 0?Z.createElement(gi.Provider,{value:this.props.routeContext},Z.createElement(Pv.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function RN({routeContext:n,match:e,children:t}){let r=Z.useContext(Du);return r&&r.static&&r.staticContext&&(e.route.errorElement||e.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=e.route.id),Z.createElement(gi.Provider,{value:n},t)}function CN(n,e=[],t=null,r=null){if(n==null){if(!t)return null;if(t.errors)n=t.matches;else if(e.length===0&&!t.initialized&&t.matches.length>0)n=t.matches;else return null}let a=n,o=t==null?void 0:t.errors;if(o!=null){let m=a.findIndex(p=>p.route.id&&(o==null?void 0:o[p.route.id])!==void 0);Et(m>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(o).join(",")}`),a=a.slice(0,Math.min(a.length,m+1))}let u=!1,d=-1;if(t)for(let m=0;m<a.length;m++){let p=a[m];if((p.route.HydrateFallback||p.route.hydrateFallbackElement)&&(d=m),p.route.id){let{loaderData:y,errors:v}=t,w=p.route.loader&&!y.hasOwnProperty(p.route.id)&&(!v||v[p.route.id]===void 0);if(p.route.lazy||w){u=!0,d>=0?a=a.slice(0,d+1):a=[a[0]];break}}}return a.reduceRight((m,p,y)=>{let v,w=!1,S=null,P=null;t&&(v=o&&p.route.id?o[p.route.id]:void 0,S=p.route.errorElement||AN,u&&(d<0&&y===0?(bS("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),w=!0,P=null):d===y&&(w=!0,P=p.route.hydrateFallbackElement||null)));let U=e.concat(a.slice(0,y+1)),L=()=>{let H;return v?H=S:w?H=P:p.route.Component?H=Z.createElement(p.route.Component,null):p.route.element?H=p.route.element:H=m,Z.createElement(RN,{match:p,routeContext:{outlet:m,matches:U,isDataRoute:t!=null},children:H})};return t&&(p.route.ErrorBoundary||p.route.errorElement||y===0)?Z.createElement(SN,{location:t.location,revalidation:t.revalidation,component:S,error:v,children:L(),routeContext:{outlet:null,matches:U,isDataRoute:!0}}):L()},null)}function xv(n){return`${n} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function DN(n){let e=Z.useContext(Du);return Et(e,xv(n)),e}function PN(n){let e=Z.useContext(up);return Et(e,xv(n)),e}function xN(n){let e=Z.useContext(gi);return Et(e,xv(n)),e}function Nv(n){let e=xN(n),t=e.matches[e.matches.length-1];return Et(t.route.id,`${n} can only be used on routes that contain a unique "id"`),t.route.id}function NN(){return Nv("useRouteId")}function ON(){var r;let n=Z.useContext(Pv),e=PN("useRouteError"),t=Nv("useRouteError");return n!==void 0?n:(r=e.errors)==null?void 0:r[t]}function kN(){let{router:n}=DN("useNavigate"),e=Nv("useNavigate"),t=Z.useRef(!1);return TS(()=>{t.current=!0}),Z.useCallback(async(a,o={})=>{ui(t.current,ES),t.current&&(typeof a=="number"?n.navigate(a):await n.navigate(a,{fromRouteId:e,...o}))},[n,e])}var Fb={};function bS(n,e,t){!e&&!Fb[n]&&(Fb[n]=!0,ui(!1,t))}Z.memo(VN);function VN({routes:n,future:e,state:t}){return wS(n,void 0,t,e)}function lm(n){Et(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function MN({basename:n="/",children:e=null,location:t,navigationType:r="POP",navigator:a,static:o=!1}){Et(!id(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let u=n.replace(/^\/*/,"/"),d=Z.useMemo(()=>({basename:u,navigator:a,static:o,future:{}}),[u,a,o]);typeof t=="string"&&(t=Cu(t));let{pathname:m="/",search:p="",hash:y="",state:v=null,key:w="default"}=t,S=Z.useMemo(()=>{let P=Qi(m,u);return P==null?null:{location:{pathname:P,search:p,hash:y,state:v,key:w},navigationType:r}},[u,m,p,y,v,w,r]);return ui(S!=null,`<Router basename="${u}"> is not able to match the URL "${m}${p}${y}" because it does not start with the basename, so the <Router> won't render anything.`),S==null?null:Z.createElement(pi.Provider,{value:d},Z.createElement(rd.Provider,{children:e,value:S}))}function LN({children:n,location:e}){return bN(Oy(n),e)}function Oy(n,e=[]){let t=[];return Z.Children.forEach(n,(r,a)=>{if(!Z.isValidElement(r))return;let o=[...e,a];if(r.type===Z.Fragment){t.push.apply(t,Oy(r.props.children,o));return}Et(r.type===lm,`[${typeof r.type=="string"?r.type:r.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Et(!r.props.index||!r.props.children,"An index route cannot have child routes.");let u={id:r.props.id||o.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,hydrateFallbackElement:r.props.hydrateFallbackElement,HydrateFallback:r.props.HydrateFallback,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.hasErrorBoundary===!0||r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(u.children=Oy(r.props.children,o)),t.push(u)}),t}var um="get",cm="application/x-www-form-urlencoded";function hp(n){return n!=null&&typeof n.tagName=="string"}function UN(n){return hp(n)&&n.tagName.toLowerCase()==="button"}function BN(n){return hp(n)&&n.tagName.toLowerCase()==="form"}function zN(n){return hp(n)&&n.tagName.toLowerCase()==="input"}function FN(n){return!!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)}function jN(n,e){return n.button===0&&(!e||e==="_self")&&!FN(n)}var Yf=null;function qN(){if(Yf===null)try{new FormData(document.createElement("form"),0),Yf=!1}catch{Yf=!0}return Yf}var HN=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function ly(n){return n!=null&&!HN.has(n)?(ui(!1,`"${n}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${cm}"`),null):n}function GN(n,e){let t,r,a,o,u;if(BN(n)){let d=n.getAttribute("action");r=d?Qi(d,e):null,t=n.getAttribute("method")||um,a=ly(n.getAttribute("enctype"))||cm,o=new FormData(n)}else if(UN(n)||zN(n)&&(n.type==="submit"||n.type==="image")){let d=n.form;if(d==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let m=n.getAttribute("formaction")||d.getAttribute("action");if(r=m?Qi(m,e):null,t=n.getAttribute("formmethod")||d.getAttribute("method")||um,a=ly(n.getAttribute("formenctype"))||ly(d.getAttribute("enctype"))||cm,o=new FormData(d,n),!qN()){let{name:p,type:y,value:v}=n;if(y==="image"){let w=p?`${p}.`:"";o.append(`${w}x`,"0"),o.append(`${w}y`,"0")}else p&&o.append(p,v)}}else{if(hp(n))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');t=um,r=null,a=cm,u=n}return o&&a==="text/plain"&&(u=o,o=void 0),{action:r,method:t.toLowerCase(),encType:a,formData:o,body:u}}function Ov(n,e){if(n===!1||n===null||typeof n>"u")throw new Error(e)}async function $N(n,e){if(n.id in e)return e[n.id];try{let t=await import(n.module);return e[n.id]=t,t}catch(t){return console.error(`Error loading route module \`${n.module}\`, reloading page...`),console.error(t),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function KN(n){return n==null?!1:n.href==null?n.rel==="preload"&&typeof n.imageSrcSet=="string"&&typeof n.imageSizes=="string":typeof n.rel=="string"&&typeof n.href=="string"}async function QN(n,e,t){let r=await Promise.all(n.map(async a=>{let o=e.routes[a.route.id];if(o){let u=await $N(o,t);return u.links?u.links():[]}return[]}));return ZN(r.flat(1).filter(KN).filter(a=>a.rel==="stylesheet"||a.rel==="preload").map(a=>a.rel==="stylesheet"?{...a,rel:"prefetch",as:"style"}:{...a,rel:"prefetch"}))}function jb(n,e,t,r,a,o){let u=(m,p)=>t[p]?m.route.id!==t[p].route.id:!0,d=(m,p)=>{var y;return t[p].pathname!==m.pathname||((y=t[p].route.path)==null?void 0:y.endsWith("*"))&&t[p].params["*"]!==m.params["*"]};return o==="assets"?e.filter((m,p)=>u(m,p)||d(m,p)):o==="data"?e.filter((m,p)=>{var v;let y=r.routes[m.route.id];if(!y||!y.hasLoader)return!1;if(u(m,p)||d(m,p))return!0;if(m.route.shouldRevalidate){let w=m.route.shouldRevalidate({currentUrl:new URL(a.pathname+a.search+a.hash,window.origin),currentParams:((v=t[0])==null?void 0:v.params)||{},nextUrl:new URL(n,window.origin),nextParams:m.params,defaultShouldRevalidate:!0});if(typeof w=="boolean")return w}return!0}):[]}function WN(n,e,{includeHydrateFallback:t}={}){return YN(n.map(r=>{let a=e.routes[r.route.id];if(!a)return[];let o=[a.module];return a.clientActionModule&&(o=o.concat(a.clientActionModule)),a.clientLoaderModule&&(o=o.concat(a.clientLoaderModule)),t&&a.hydrateFallbackModule&&(o=o.concat(a.hydrateFallbackModule)),a.imports&&(o=o.concat(a.imports)),o}).flat(1))}function YN(n){return[...new Set(n)]}function XN(n){let e={},t=Object.keys(n).sort();for(let r of t)e[r]=n[r];return e}function ZN(n,e){let t=new Set;return new Set(e),n.reduce((r,a)=>{let o=JSON.stringify(XN(a));return t.has(o)||(t.add(o),r.push({key:o,link:a})),r},[])}function JN(n,e){let t=typeof n=="string"?new URL(n,typeof window>"u"?"server://singlefetch/":window.location.origin):n;return t.pathname==="/"?t.pathname="_root.data":e&&Qi(t.pathname,e)==="/"?t.pathname=`${e.replace(/\/$/,"")}/_root.data`:t.pathname=`${t.pathname.replace(/\/$/,"")}.data`,t}function IS(){let n=Z.useContext(Du);return Ov(n,"You must render this element inside a <DataRouterContext.Provider> element"),n}function eO(){let n=Z.useContext(up);return Ov(n,"You must render this element inside a <DataRouterStateContext.Provider> element"),n}var kv=Z.createContext(void 0);kv.displayName="FrameworkContext";function AS(){let n=Z.useContext(kv);return Ov(n,"You must render this element inside a <HydratedRouter> element"),n}function tO(n,e){let t=Z.useContext(kv),[r,a]=Z.useState(!1),[o,u]=Z.useState(!1),{onFocus:d,onBlur:m,onMouseEnter:p,onMouseLeave:y,onTouchStart:v}=e,w=Z.useRef(null);Z.useEffect(()=>{if(n==="render"&&u(!0),n==="viewport"){let U=H=>{H.forEach(Y=>{u(Y.isIntersecting)})},L=new IntersectionObserver(U,{threshold:.5});return w.current&&L.observe(w.current),()=>{L.disconnect()}}},[n]),Z.useEffect(()=>{if(r){let U=setTimeout(()=>{u(!0)},100);return()=>{clearTimeout(U)}}},[r]);let S=()=>{a(!0)},P=()=>{a(!1),u(!1)};return t?n!=="intent"?[o,w,{}]:[o,w,{onFocus:Zc(d,S),onBlur:Zc(m,P),onMouseEnter:Zc(p,S),onMouseLeave:Zc(y,P),onTouchStart:Zc(v,S)}]:[!1,w,{}]}function Zc(n,e){return t=>{n&&n(t),t.defaultPrevented||e(t)}}function nO({page:n,...e}){let{router:t}=IS(),r=Z.useMemo(()=>fS(t.routes,n,t.basename),[t.routes,n,t.basename]);return r?Z.createElement(iO,{page:n,matches:r,...e}):null}function rO(n){let{manifest:e,routeModules:t}=AS(),[r,a]=Z.useState([]);return Z.useEffect(()=>{let o=!1;return QN(n,e,t).then(u=>{o||a(u)}),()=>{o=!0}},[n,e,t]),r}function iO({page:n,matches:e,...t}){let r=Vo(),{manifest:a,routeModules:o}=AS(),{basename:u}=IS(),{loaderData:d,matches:m}=eO(),p=Z.useMemo(()=>jb(n,e,m,a,r,"data"),[n,e,m,a,r]),y=Z.useMemo(()=>jb(n,e,m,a,r,"assets"),[n,e,m,a,r]),v=Z.useMemo(()=>{if(n===r.pathname+r.search+r.hash)return[];let P=new Set,U=!1;if(e.forEach(H=>{var $;let Y=a.routes[H.route.id];!Y||!Y.hasLoader||(!p.some(oe=>oe.route.id===H.route.id)&&H.route.id in d&&(($=o[H.route.id])!=null&&$.shouldRevalidate)||Y.hasClientLoader?U=!0:P.add(H.route.id))}),P.size===0)return[];let L=JN(n,u);return U&&P.size>0&&L.searchParams.set("_routes",e.filter(H=>P.has(H.route.id)).map(H=>H.route.id).join(",")),[L.pathname+L.search]},[u,d,r,a,p,e,n,o]),w=Z.useMemo(()=>WN(y,a),[y,a]),S=rO(y);return Z.createElement(Z.Fragment,null,v.map(P=>Z.createElement("link",{key:P,rel:"prefetch",as:"fetch",href:P,...t})),w.map(P=>Z.createElement("link",{key:P,rel:"modulepreload",href:P,...t})),S.map(({key:P,link:U})=>Z.createElement("link",{key:P,...U})))}function sO(...n){return e=>{n.forEach(t=>{typeof t=="function"?t(e):t!=null&&(t.current=e)})}}var SS=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{SS&&(window.__reactRouterVersion="7.5.0")}catch{}function aO({basename:n,children:e,window:t}){let r=Z.useRef();r.current==null&&(r.current=Qx({window:t,v5Compat:!0}));let a=r.current,[o,u]=Z.useState({action:a.action,location:a.location}),d=Z.useCallback(m=>{Z.startTransition(()=>u(m))},[u]);return Z.useLayoutEffect(()=>a.listen(d),[a,d]),Z.createElement(MN,{basename:n,children:e,location:o.location,navigationType:o.action,navigator:a})}var RS=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,CS=Z.forwardRef(function({onClick:e,discover:t="render",prefetch:r="none",relative:a,reloadDocument:o,replace:u,state:d,target:m,to:p,preventScrollReset:y,viewTransition:v,...w},S){let{basename:P}=Z.useContext(pi),U=typeof p=="string"&&RS.test(p),L,H=!1;if(typeof p=="string"&&U&&(L=p,SS))try{let A=new URL(window.location.href),x=p.startsWith("//")?new URL(A.protocol+p):new URL(p),V=Qi(x.pathname,P);x.origin===A.origin&&V!=null?p=V+x.search+x.hash:H=!0}catch{ui(!1,`<Link to="${p}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let Y=EN(p,{relative:a}),[$,oe,ae]=tO(r,w),le=cO(p,{replace:u,state:d,target:m,preventScrollReset:y,relative:a,viewTransition:v});function D(A){e&&e(A),A.defaultPrevented||le(A)}let R=Z.createElement("a",{...w,...ae,href:L||Y,onClick:H||o?e:D,ref:sO(S,oe),target:m,"data-discover":!U&&t==="render"?"true":void 0});return $&&!U?Z.createElement(Z.Fragment,null,R,Z.createElement(nO,{page:Y})):R});CS.displayName="Link";var oO=Z.forwardRef(function({"aria-current":e="page",caseSensitive:t=!1,className:r="",end:a=!1,style:o,to:u,viewTransition:d,children:m,...p},y){let v=sd(u,{relative:p.relative}),w=Vo(),S=Z.useContext(up),{navigator:P,basename:U}=Z.useContext(pi),L=S!=null&&pO(v)&&d===!0,H=P.encodeLocation?P.encodeLocation(v).pathname:v.pathname,Y=w.pathname,$=S&&S.navigation&&S.navigation.location?S.navigation.location.pathname:null;t||(Y=Y.toLowerCase(),$=$?$.toLowerCase():null,H=H.toLowerCase()),$&&U&&($=Qi($,U)||$);const oe=H!=="/"&&H.endsWith("/")?H.length-1:H.length;let ae=Y===H||!a&&Y.startsWith(H)&&Y.charAt(oe)==="/",le=$!=null&&($===H||!a&&$.startsWith(H)&&$.charAt(H.length)==="/"),D={isActive:ae,isPending:le,isTransitioning:L},R=ae?e:void 0,A;typeof r=="function"?A=r(D):A=[r,ae?"active":null,le?"pending":null,L?"transitioning":null].filter(Boolean).join(" ");let x=typeof o=="function"?o(D):o;return Z.createElement(CS,{...p,"aria-current":R,className:A,ref:y,style:x,to:u,viewTransition:d},typeof m=="function"?m(D):m)});oO.displayName="NavLink";var lO=Z.forwardRef(({discover:n="render",fetcherKey:e,navigate:t,reloadDocument:r,replace:a,state:o,method:u=um,action:d,onSubmit:m,relative:p,preventScrollReset:y,viewTransition:v,...w},S)=>{let P=fO(),U=mO(d,{relative:p}),L=u.toLowerCase()==="get"?"get":"post",H=typeof d=="string"&&RS.test(d),Y=$=>{if(m&&m($),$.defaultPrevented)return;$.preventDefault();let oe=$.nativeEvent.submitter,ae=(oe==null?void 0:oe.getAttribute("formmethod"))||u;P(oe||$.currentTarget,{fetcherKey:e,method:ae,navigate:t,replace:a,state:o,relative:p,preventScrollReset:y,viewTransition:v})};return Z.createElement("form",{ref:S,method:L,action:U,onSubmit:r?m:Y,...w,"data-discover":!H&&n==="render"?"true":void 0})});lO.displayName="Form";function uO(n){return`${n} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function DS(n){let e=Z.useContext(Du);return Et(e,uO(n)),e}function cO(n,{target:e,replace:t,state:r,preventScrollReset:a,relative:o,viewTransition:u}={}){let d=cp(),m=Vo(),p=sd(n,{relative:o});return Z.useCallback(y=>{if(jN(y,e)){y.preventDefault();let v=t!==void 0?t:xh(m)===xh(p);d(n,{replace:v,state:r,preventScrollReset:a,relative:o,viewTransition:u})}},[m,d,p,t,r,e,n,a,o,u])}var hO=0,dO=()=>`__${String(++hO)}__`;function fO(){let{router:n}=DS("useSubmit"),{basename:e}=Z.useContext(pi),t=NN();return Z.useCallback(async(r,a={})=>{let{action:o,method:u,encType:d,formData:m,body:p}=GN(r,e);if(a.navigate===!1){let y=a.fetcherKey||dO();await n.fetch(y,t,a.action||o,{preventScrollReset:a.preventScrollReset,formData:m,body:p,formMethod:a.method||u,formEncType:a.encType||d,flushSync:a.flushSync})}else await n.navigate(a.action||o,{preventScrollReset:a.preventScrollReset,formData:m,body:p,formMethod:a.method||u,formEncType:a.encType||d,replace:a.replace,state:a.state,fromRouteId:t,flushSync:a.flushSync,viewTransition:a.viewTransition})},[n,e,t])}function mO(n,{relative:e}={}){let{basename:t}=Z.useContext(pi),r=Z.useContext(gi);Et(r,"useFormAction must be used inside a RouteContext");let[a]=r.matches.slice(-1),o={...sd(n||".",{relative:e})},u=Vo();if(n==null){o.search=u.search;let d=new URLSearchParams(o.search),m=d.getAll("index");if(m.some(y=>y==="")){d.delete("index"),m.filter(v=>v).forEach(v=>d.append("index",v));let y=d.toString();o.search=y?`?${y}`:""}}return(!n||n===".")&&a.route.index&&(o.search=o.search?o.search.replace(/^\?/,"?index&"):"?index"),t!=="/"&&(o.pathname=o.pathname==="/"?t:$i([t,o.pathname])),xh(o)}function pO(n,e={}){let t=Z.useContext(vS);Et(t!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:r}=DS("useViewTransitionState"),a=sd(n,{relative:e.relative});if(!t.isTransitioning)return!1;let o=Qi(t.currentLocation.pathname,r)||t.currentLocation.pathname,u=Qi(t.nextLocation.pathname,r)||t.nextLocation.pathname;return Pm(a.pathname,u)!=null||Pm(a.pathname,o)!=null}new TextEncoder;var Fn=function(){return Fn=Object.assign||function(e){for(var t,r=1,a=arguments.length;r<a;r++){t=arguments[r];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},Fn.apply(this,arguments)};function Vv(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(n);a<r.length;a++)e.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(n,r[a])&&(t[r[a]]=n[r[a]]);return t}function xm(n,e,t){if(t||arguments.length===2)for(var r=0,a=e.length,o;r<a;r++)(o||!(r in e))&&(o||(o=Array.prototype.slice.call(e,0,r)),o[r]=e[r]);return n.concat(o||Array.prototype.slice.call(e))}var ct="-ms-",gh="-moz-",et="-webkit-",PS="comm",dp="rule",Mv="decl",gO="@import",xS="@keyframes",_O="@layer",NS=Math.abs,Lv=String.fromCharCode,ky=Object.assign;function yO(n,e){return un(n,0)^45?(((e<<2^un(n,0))<<2^un(n,1))<<2^un(n,2))<<2^un(n,3):0}function OS(n){return n.trim()}function qi(n,e){return(n=e.exec(n))?n[0]:n}function Oe(n,e,t){return n.replace(e,t)}function hm(n,e,t){return n.indexOf(e,t)}function un(n,e){return n.charCodeAt(e)|0}function eu(n,e,t){return n.slice(e,t)}function Zr(n){return n.length}function kS(n){return n.length}function lh(n,e){return e.push(n),n}function vO(n,e){return n.map(e).join("")}function qb(n,e){return n.filter(function(t){return!qi(t,e)})}var fp=1,tu=1,VS=0,wr=0,Ht=0,Pu="";function mp(n,e,t,r,a,o,u,d){return{value:n,root:e,parent:t,type:r,props:a,children:o,line:fp,column:tu,length:u,return:"",siblings:d}}function Ws(n,e){return ky(mp("",null,null,"",null,null,0,n.siblings),n,{length:-n.length},e)}function Nl(n){for(;n.root;)n=Ws(n.root,{children:[n]});lh(n,n.siblings)}function EO(){return Ht}function TO(){return Ht=wr>0?un(Pu,--wr):0,tu--,Ht===10&&(tu=1,fp--),Ht}function Nr(){return Ht=wr<VS?un(Pu,wr++):0,tu++,Ht===10&&(tu=1,fp++),Ht}function yo(){return un(Pu,wr)}function dm(){return wr}function pp(n,e){return eu(Pu,n,e)}function Vy(n){switch(n){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function wO(n){return fp=tu=1,VS=Zr(Pu=n),wr=0,[]}function bO(n){return Pu="",n}function uy(n){return OS(pp(wr-1,My(n===91?n+2:n===40?n+1:n)))}function IO(n){for(;(Ht=yo())&&Ht<33;)Nr();return Vy(n)>2||Vy(Ht)>3?"":" "}function AO(n,e){for(;--e&&Nr()&&!(Ht<48||Ht>102||Ht>57&&Ht<65||Ht>70&&Ht<97););return pp(n,dm()+(e<6&&yo()==32&&Nr()==32))}function My(n){for(;Nr();)switch(Ht){case n:return wr;case 34:case 39:n!==34&&n!==39&&My(Ht);break;case 40:n===41&&My(n);break;case 92:Nr();break}return wr}function SO(n,e){for(;Nr()&&n+Ht!==57;)if(n+Ht===84&&yo()===47)break;return"/*"+pp(e,wr-1)+"*"+Lv(n===47?n:Nr())}function RO(n){for(;!Vy(yo());)Nr();return pp(n,wr)}function CO(n){return bO(fm("",null,null,null,[""],n=wO(n),0,[0],n))}function fm(n,e,t,r,a,o,u,d,m){for(var p=0,y=0,v=u,w=0,S=0,P=0,U=1,L=1,H=1,Y=0,$="",oe=a,ae=o,le=r,D=$;L;)switch(P=Y,Y=Nr()){case 40:if(P!=108&&un(D,v-1)==58){hm(D+=Oe(uy(Y),"&","&\f"),"&\f",NS(p?d[p-1]:0))!=-1&&(H=-1);break}case 34:case 39:case 91:D+=uy(Y);break;case 9:case 10:case 13:case 32:D+=IO(P);break;case 92:D+=AO(dm()-1,7);continue;case 47:switch(yo()){case 42:case 47:lh(DO(SO(Nr(),dm()),e,t,m),m);break;default:D+="/"}break;case 123*U:d[p++]=Zr(D)*H;case 125*U:case 59:case 0:switch(Y){case 0:case 125:L=0;case 59+y:H==-1&&(D=Oe(D,/\f/g,"")),S>0&&Zr(D)-v&&lh(S>32?Gb(D+";",r,t,v-1,m):Gb(Oe(D," ","")+";",r,t,v-2,m),m);break;case 59:D+=";";default:if(lh(le=Hb(D,e,t,p,y,a,d,$,oe=[],ae=[],v,o),o),Y===123)if(y===0)fm(D,e,le,le,oe,o,v,d,ae);else switch(w===99&&un(D,3)===110?100:w){case 100:case 108:case 109:case 115:fm(n,le,le,r&&lh(Hb(n,le,le,0,0,a,d,$,a,oe=[],v,ae),ae),a,ae,v,d,r?oe:ae);break;default:fm(D,le,le,le,[""],ae,0,d,ae)}}p=y=S=0,U=H=1,$=D="",v=u;break;case 58:v=1+Zr(D),S=P;default:if(U<1){if(Y==123)--U;else if(Y==125&&U++==0&&TO()==125)continue}switch(D+=Lv(Y),Y*U){case 38:H=y>0?1:(D+="\f",-1);break;case 44:d[p++]=(Zr(D)-1)*H,H=1;break;case 64:yo()===45&&(D+=uy(Nr())),w=yo(),y=v=Zr($=D+=RO(dm())),Y++;break;case 45:P===45&&Zr(D)==2&&(U=0)}}return o}function Hb(n,e,t,r,a,o,u,d,m,p,y,v){for(var w=a-1,S=a===0?o:[""],P=kS(S),U=0,L=0,H=0;U<r;++U)for(var Y=0,$=eu(n,w+1,w=NS(L=u[U])),oe=n;Y<P;++Y)(oe=OS(L>0?S[Y]+" "+$:Oe($,/&\f/g,S[Y])))&&(m[H++]=oe);return mp(n,e,t,a===0?dp:d,m,p,y,v)}function DO(n,e,t,r){return mp(n,e,t,PS,Lv(EO()),eu(n,2,-2),0,r)}function Gb(n,e,t,r,a){return mp(n,e,t,Mv,eu(n,0,r),eu(n,r+1,-1),r,a)}function MS(n,e,t){switch(yO(n,e)){case 5103:return et+"print-"+n+n;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return et+n+n;case 4789:return gh+n+n;case 5349:case 4246:case 4810:case 6968:case 2756:return et+n+gh+n+ct+n+n;case 5936:switch(un(n,e+11)){case 114:return et+n+ct+Oe(n,/[svh]\w+-[tblr]{2}/,"tb")+n;case 108:return et+n+ct+Oe(n,/[svh]\w+-[tblr]{2}/,"tb-rl")+n;case 45:return et+n+ct+Oe(n,/[svh]\w+-[tblr]{2}/,"lr")+n}case 6828:case 4268:case 2903:return et+n+ct+n+n;case 6165:return et+n+ct+"flex-"+n+n;case 5187:return et+n+Oe(n,/(\w+).+(:[^]+)/,et+"box-$1$2"+ct+"flex-$1$2")+n;case 5443:return et+n+ct+"flex-item-"+Oe(n,/flex-|-self/g,"")+(qi(n,/flex-|baseline/)?"":ct+"grid-row-"+Oe(n,/flex-|-self/g,""))+n;case 4675:return et+n+ct+"flex-line-pack"+Oe(n,/align-content|flex-|-self/g,"")+n;case 5548:return et+n+ct+Oe(n,"shrink","negative")+n;case 5292:return et+n+ct+Oe(n,"basis","preferred-size")+n;case 6060:return et+"box-"+Oe(n,"-grow","")+et+n+ct+Oe(n,"grow","positive")+n;case 4554:return et+Oe(n,/([^-])(transform)/g,"$1"+et+"$2")+n;case 6187:return Oe(Oe(Oe(n,/(zoom-|grab)/,et+"$1"),/(image-set)/,et+"$1"),n,"")+n;case 5495:case 3959:return Oe(n,/(image-set\([^]*)/,et+"$1$`$1");case 4968:return Oe(Oe(n,/(.+:)(flex-)?(.*)/,et+"box-pack:$3"+ct+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+et+n+n;case 4200:if(!qi(n,/flex-|baseline/))return ct+"grid-column-align"+eu(n,e)+n;break;case 2592:case 3360:return ct+Oe(n,"template-","")+n;case 4384:case 3616:return t&&t.some(function(r,a){return e=a,qi(r.props,/grid-\w+-end/)})?~hm(n+(t=t[e].value),"span",0)?n:ct+Oe(n,"-start","")+n+ct+"grid-row-span:"+(~hm(t,"span",0)?qi(t,/\d+/):+qi(t,/\d+/)-+qi(n,/\d+/))+";":ct+Oe(n,"-start","")+n;case 4896:case 4128:return t&&t.some(function(r){return qi(r.props,/grid-\w+-start/)})?n:ct+Oe(Oe(n,"-end","-span"),"span ","")+n;case 4095:case 3583:case 4068:case 2532:return Oe(n,/(.+)-inline(.+)/,et+"$1$2")+n;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Zr(n)-1-e>6)switch(un(n,e+1)){case 109:if(un(n,e+4)!==45)break;case 102:return Oe(n,/(.+:)(.+)-([^]+)/,"$1"+et+"$2-$3$1"+gh+(un(n,e+3)==108?"$3":"$2-$3"))+n;case 115:return~hm(n,"stretch",0)?MS(Oe(n,"stretch","fill-available"),e,t)+n:n}break;case 5152:case 5920:return Oe(n,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,a,o,u,d,m,p){return ct+a+":"+o+p+(u?ct+a+"-span:"+(d?m:+m-+o)+p:"")+n});case 4949:if(un(n,e+6)===121)return Oe(n,":",":"+et)+n;break;case 6444:switch(un(n,un(n,14)===45?18:11)){case 120:return Oe(n,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+et+(un(n,14)===45?"inline-":"")+"box$3$1"+et+"$2$3$1"+ct+"$2box$3")+n;case 100:return Oe(n,":",":"+ct)+n}break;case 5719:case 2647:case 2135:case 3927:case 2391:return Oe(n,"scroll-","scroll-snap-")+n}return n}function Nm(n,e){for(var t="",r=0;r<n.length;r++)t+=e(n[r],r,n,e)||"";return t}function PO(n,e,t,r){switch(n.type){case _O:if(n.children.length)break;case gO:case Mv:return n.return=n.return||n.value;case PS:return"";case xS:return n.return=n.value+"{"+Nm(n.children,r)+"}";case dp:if(!Zr(n.value=n.props.join(",")))return""}return Zr(t=Nm(n.children,r))?n.return=n.value+"{"+t+"}":""}function xO(n){var e=kS(n);return function(t,r,a,o){for(var u="",d=0;d<e;d++)u+=n[d](t,r,a,o)||"";return u}}function NO(n){return function(e){e.root||(e=e.return)&&n(e)}}function OO(n,e,t,r){if(n.length>-1&&!n.return)switch(n.type){case Mv:n.return=MS(n.value,n.length,t);return;case xS:return Nm([Ws(n,{value:Oe(n.value,"@","@"+et)})],r);case dp:if(n.length)return vO(t=n.props,function(a){switch(qi(a,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Nl(Ws(n,{props:[Oe(a,/:(read-\w+)/,":"+gh+"$1")]})),Nl(Ws(n,{props:[a]})),ky(n,{props:qb(t,r)});break;case"::placeholder":Nl(Ws(n,{props:[Oe(a,/:(plac\w+)/,":"+et+"input-$1")]})),Nl(Ws(n,{props:[Oe(a,/:(plac\w+)/,":"+gh+"$1")]})),Nl(Ws(n,{props:[Oe(a,/:(plac\w+)/,ct+"input-$1")]})),Nl(Ws(n,{props:[a]})),ky(n,{props:qb(t,r)});break}return""})}}var kO={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Zn={},nu=typeof process<"u"&&Zn!==void 0&&(Zn.REACT_APP_SC_ATTR||Zn.SC_ATTR)||"data-styled",LS="active",US="data-styled-version",gp="6.1.16",Uv=`/*!sc*/
`,Om=typeof window<"u"&&"HTMLElement"in window,VO=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&Zn!==void 0&&Zn.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&Zn.REACT_APP_SC_DISABLE_SPEEDY!==""?Zn.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&Zn.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&Zn!==void 0&&Zn.SC_DISABLE_SPEEDY!==void 0&&Zn.SC_DISABLE_SPEEDY!==""&&Zn.SC_DISABLE_SPEEDY!=="false"&&Zn.SC_DISABLE_SPEEDY),_p=Object.freeze([]),ru=Object.freeze({});function MO(n,e,t){return t===void 0&&(t=ru),n.theme!==t.theme&&n.theme||e||t.theme}var BS=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),LO=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,UO=/(^-|-$)/g;function $b(n){return n.replace(LO,"-").replace(UO,"")}var BO=/(a)(d)/gi,Xf=52,Kb=function(n){return String.fromCharCode(n+(n>25?39:97))};function Ly(n){var e,t="";for(e=Math.abs(n);e>Xf;e=e/Xf|0)t=Kb(e%Xf)+t;return(Kb(e%Xf)+t).replace(BO,"$1-$2")}var cy,zS=5381,Gl=function(n,e){for(var t=e.length;t;)n=33*n^e.charCodeAt(--t);return n},FS=function(n){return Gl(zS,n)};function zO(n){return Ly(FS(n)>>>0)}function FO(n){return n.displayName||n.name||"Component"}function hy(n){return typeof n=="string"&&!0}var jS=typeof Symbol=="function"&&Symbol.for,qS=jS?Symbol.for("react.memo"):60115,jO=jS?Symbol.for("react.forward_ref"):60112,qO={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},HO={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},HS={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},GO=((cy={})[jO]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},cy[qS]=HS,cy);function Qb(n){return("type"in(e=n)&&e.type.$$typeof)===qS?HS:"$$typeof"in n?GO[n.$$typeof]:qO;var e}var $O=Object.defineProperty,KO=Object.getOwnPropertyNames,Wb=Object.getOwnPropertySymbols,QO=Object.getOwnPropertyDescriptor,WO=Object.getPrototypeOf,Yb=Object.prototype;function GS(n,e,t){if(typeof e!="string"){if(Yb){var r=WO(e);r&&r!==Yb&&GS(n,r,t)}var a=KO(e);Wb&&(a=a.concat(Wb(e)));for(var o=Qb(n),u=Qb(e),d=0;d<a.length;++d){var m=a[d];if(!(m in HO||t&&t[m]||u&&m in u||o&&m in o)){var p=QO(e,m);try{$O(n,m,p)}catch{}}}}return n}function iu(n){return typeof n=="function"}function Bv(n){return typeof n=="object"&&"styledComponentId"in n}function fo(n,e){return n&&e?"".concat(n," ").concat(e):n||e||""}function Xb(n,e){if(n.length===0)return"";for(var t=n[0],r=1;r<n.length;r++)t+=n[r];return t}function Nh(n){return n!==null&&typeof n=="object"&&n.constructor.name===Object.name&&!("props"in n&&n.$$typeof)}function Uy(n,e,t){if(t===void 0&&(t=!1),!t&&!Nh(n)&&!Array.isArray(n))return e;if(Array.isArray(e))for(var r=0;r<e.length;r++)n[r]=Uy(n[r],e[r]);else if(Nh(e))for(var r in e)n[r]=Uy(n[r],e[r]);return n}function zv(n,e){Object.defineProperty(n,"toString",{value:e})}function ad(n){for(var e=[],t=1;t<arguments.length;t++)e[t-1]=arguments[t];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(n," for more information.").concat(e.length>0?" Args: ".concat(e.join(", ")):""))}var YO=function(){function n(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}return n.prototype.indexOfGroup=function(e){for(var t=0,r=0;r<e;r++)t+=this.groupSizes[r];return t},n.prototype.insertRules=function(e,t){if(e>=this.groupSizes.length){for(var r=this.groupSizes,a=r.length,o=a;e>=o;)if((o<<=1)<0)throw ad(16,"".concat(e));this.groupSizes=new Uint32Array(o),this.groupSizes.set(r),this.length=o;for(var u=a;u<o;u++)this.groupSizes[u]=0}for(var d=this.indexOfGroup(e+1),m=(u=0,t.length);u<m;u++)this.tag.insertRule(d,t[u])&&(this.groupSizes[e]++,d++)},n.prototype.clearGroup=function(e){if(e<this.length){var t=this.groupSizes[e],r=this.indexOfGroup(e),a=r+t;this.groupSizes[e]=0;for(var o=r;o<a;o++)this.tag.deleteRule(r)}},n.prototype.getGroup=function(e){var t="";if(e>=this.length||this.groupSizes[e]===0)return t;for(var r=this.groupSizes[e],a=this.indexOfGroup(e),o=a+r,u=a;u<o;u++)t+="".concat(this.tag.getRule(u)).concat(Uv);return t},n}(),mm=new Map,km=new Map,pm=1,Zf=function(n){if(mm.has(n))return mm.get(n);for(;km.has(pm);)pm++;var e=pm++;return mm.set(n,e),km.set(e,n),e},XO=function(n,e){pm=e+1,mm.set(n,e),km.set(e,n)},ZO="style[".concat(nu,"][").concat(US,'="').concat(gp,'"]'),JO=new RegExp("^".concat(nu,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),ek=function(n,e,t){for(var r,a=t.split(","),o=0,u=a.length;o<u;o++)(r=a[o])&&n.registerName(e,r)},tk=function(n,e){for(var t,r=((t=e.textContent)!==null&&t!==void 0?t:"").split(Uv),a=[],o=0,u=r.length;o<u;o++){var d=r[o].trim();if(d){var m=d.match(JO);if(m){var p=0|parseInt(m[1],10),y=m[2];p!==0&&(XO(y,p),ek(n,y,m[3]),n.getTag().insertRules(p,a)),a.length=0}else a.push(d)}}},Zb=function(n){for(var e=document.querySelectorAll(ZO),t=0,r=e.length;t<r;t++){var a=e[t];a&&a.getAttribute(nu)!==LS&&(tk(n,a),a.parentNode&&a.parentNode.removeChild(a))}};function nk(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var $S=function(n){var e=document.head,t=n||e,r=document.createElement("style"),a=function(d){var m=Array.from(d.querySelectorAll("style[".concat(nu,"]")));return m[m.length-1]}(t),o=a!==void 0?a.nextSibling:null;r.setAttribute(nu,LS),r.setAttribute(US,gp);var u=nk();return u&&r.setAttribute("nonce",u),t.insertBefore(r,o),r},rk=function(){function n(e){this.element=$S(e),this.element.appendChild(document.createTextNode("")),this.sheet=function(t){if(t.sheet)return t.sheet;for(var r=document.styleSheets,a=0,o=r.length;a<o;a++){var u=r[a];if(u.ownerNode===t)return u}throw ad(17)}(this.element),this.length=0}return n.prototype.insertRule=function(e,t){try{return this.sheet.insertRule(t,e),this.length++,!0}catch{return!1}},n.prototype.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},n.prototype.getRule=function(e){var t=this.sheet.cssRules[e];return t&&t.cssText?t.cssText:""},n}(),ik=function(){function n(e){this.element=$S(e),this.nodes=this.element.childNodes,this.length=0}return n.prototype.insertRule=function(e,t){if(e<=this.length&&e>=0){var r=document.createTextNode(t);return this.element.insertBefore(r,this.nodes[e]||null),this.length++,!0}return!1},n.prototype.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},n.prototype.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},n}(),sk=function(){function n(e){this.rules=[],this.length=0}return n.prototype.insertRule=function(e,t){return e<=this.length&&(this.rules.splice(e,0,t),this.length++,!0)},n.prototype.deleteRule=function(e){this.rules.splice(e,1),this.length--},n.prototype.getRule=function(e){return e<this.length?this.rules[e]:""},n}(),Jb=Om,ak={isServer:!Om,useCSSOMInjection:!VO},KS=function(){function n(e,t,r){e===void 0&&(e=ru),t===void 0&&(t={});var a=this;this.options=Fn(Fn({},ak),e),this.gs=t,this.names=new Map(r),this.server=!!e.isServer,!this.server&&Om&&Jb&&(Jb=!1,Zb(this)),zv(this,function(){return function(o){for(var u=o.getTag(),d=u.length,m="",p=function(v){var w=function(H){return km.get(H)}(v);if(w===void 0)return"continue";var S=o.names.get(w),P=u.getGroup(v);if(S===void 0||!S.size||P.length===0)return"continue";var U="".concat(nu,".g").concat(v,'[id="').concat(w,'"]'),L="";S!==void 0&&S.forEach(function(H){H.length>0&&(L+="".concat(H,","))}),m+="".concat(P).concat(U,'{content:"').concat(L,'"}').concat(Uv)},y=0;y<d;y++)p(y);return m}(a)})}return n.registerId=function(e){return Zf(e)},n.prototype.rehydrate=function(){!this.server&&Om&&Zb(this)},n.prototype.reconstructWithOptions=function(e,t){return t===void 0&&(t=!0),new n(Fn(Fn({},this.options),e),this.gs,t&&this.names||void 0)},n.prototype.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},n.prototype.getTag=function(){return this.tag||(this.tag=(e=function(t){var r=t.useCSSOMInjection,a=t.target;return t.isServer?new sk(a):r?new rk(a):new ik(a)}(this.options),new YO(e)));var e},n.prototype.hasNameForId=function(e,t){return this.names.has(e)&&this.names.get(e).has(t)},n.prototype.registerName=function(e,t){if(Zf(e),this.names.has(e))this.names.get(e).add(t);else{var r=new Set;r.add(t),this.names.set(e,r)}},n.prototype.insertRules=function(e,t,r){this.registerName(e,t),this.getTag().insertRules(Zf(e),r)},n.prototype.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},n.prototype.clearRules=function(e){this.getTag().clearGroup(Zf(e)),this.clearNames(e)},n.prototype.clearTag=function(){this.tag=void 0},n}(),ok=/&/g,lk=/^\s*\/\/.*$/gm;function QS(n,e){return n.map(function(t){return t.type==="rule"&&(t.value="".concat(e," ").concat(t.value),t.value=t.value.replaceAll(",",",".concat(e," ")),t.props=t.props.map(function(r){return"".concat(e," ").concat(r)})),Array.isArray(t.children)&&t.type!=="@keyframes"&&(t.children=QS(t.children,e)),t})}function uk(n){var e,t,r,a=ru,o=a.options,u=o===void 0?ru:o,d=a.plugins,m=d===void 0?_p:d,p=function(w,S,P){return P.startsWith(t)&&P.endsWith(t)&&P.replaceAll(t,"").length>0?".".concat(e):w},y=m.slice();y.push(function(w){w.type===dp&&w.value.includes("&")&&(w.props[0]=w.props[0].replace(ok,t).replace(r,p))}),u.prefix&&y.push(OO),y.push(PO);var v=function(w,S,P,U){S===void 0&&(S=""),P===void 0&&(P=""),U===void 0&&(U="&"),e=U,t=S,r=new RegExp("\\".concat(t,"\\b"),"g");var L=w.replace(lk,""),H=CO(P||S?"".concat(P," ").concat(S," { ").concat(L," }"):L);u.namespace&&(H=QS(H,u.namespace));var Y=[];return Nm(H,xO(y.concat(NO(function($){return Y.push($)})))),Y};return v.hash=m.length?m.reduce(function(w,S){return S.name||ad(15),Gl(w,S.name)},zS).toString():"",v}var ck=new KS,By=uk(),WS=Ph.createContext({shouldForwardProp:void 0,styleSheet:ck,stylis:By});WS.Consumer;Ph.createContext(void 0);function eI(){return Z.useContext(WS)}var hk=function(){function n(e,t){var r=this;this.inject=function(a,o){o===void 0&&(o=By);var u=r.name+o.hash;a.hasNameForId(r.id,u)||a.insertRules(r.id,u,o(r.rules,u,"@keyframes"))},this.name=e,this.id="sc-keyframes-".concat(e),this.rules=t,zv(this,function(){throw ad(12,String(r.name))})}return n.prototype.getName=function(e){return e===void 0&&(e=By),this.name+e.hash},n}(),dk=function(n){return n>="A"&&n<="Z"};function tI(n){for(var e="",t=0;t<n.length;t++){var r=n[t];if(t===1&&r==="-"&&n[0]==="-")return n;dk(r)?e+="-"+r.toLowerCase():e+=r}return e.startsWith("ms-")?"-"+e:e}var YS=function(n){return n==null||n===!1||n===""},XS=function(n){var e,t,r=[];for(var a in n){var o=n[a];n.hasOwnProperty(a)&&!YS(o)&&(Array.isArray(o)&&o.isCss||iu(o)?r.push("".concat(tI(a),":"),o,";"):Nh(o)?r.push.apply(r,xm(xm(["".concat(a," {")],XS(o),!1),["}"],!1)):r.push("".concat(tI(a),": ").concat((e=a,(t=o)==null||typeof t=="boolean"||t===""?"":typeof t!="number"||t===0||e in kO||e.startsWith("--")?String(t).trim():"".concat(t,"px")),";")))}return r};function vo(n,e,t,r){if(YS(n))return[];if(Bv(n))return[".".concat(n.styledComponentId)];if(iu(n)){if(!iu(o=n)||o.prototype&&o.prototype.isReactComponent||!e)return[n];var a=n(e);return vo(a,e,t,r)}var o;return n instanceof hk?t?(n.inject(t,r),[n.getName(r)]):[n]:Nh(n)?XS(n):Array.isArray(n)?Array.prototype.concat.apply(_p,n.map(function(u){return vo(u,e,t,r)})):[n.toString()]}function fk(n){for(var e=0;e<n.length;e+=1){var t=n[e];if(iu(t)&&!Bv(t))return!1}return!0}var mk=FS(gp),pk=function(){function n(e,t,r){this.rules=e,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&fk(e),this.componentId=t,this.baseHash=Gl(mk,t),this.baseStyle=r,KS.registerId(t)}return n.prototype.generateAndInjectStyles=function(e,t,r){var a=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,t,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&t.hasNameForId(this.componentId,this.staticRulesId))a=fo(a,this.staticRulesId);else{var o=Xb(vo(this.rules,e,t,r)),u=Ly(Gl(this.baseHash,o)>>>0);if(!t.hasNameForId(this.componentId,u)){var d=r(o,".".concat(u),void 0,this.componentId);t.insertRules(this.componentId,u,d)}a=fo(a,u),this.staticRulesId=u}else{for(var m=Gl(this.baseHash,r.hash),p="",y=0;y<this.rules.length;y++){var v=this.rules[y];if(typeof v=="string")p+=v;else if(v){var w=Xb(vo(v,e,t,r));m=Gl(m,w+y),p+=w}}if(p){var S=Ly(m>>>0);t.hasNameForId(this.componentId,S)||t.insertRules(this.componentId,S,r(p,".".concat(S),void 0,this.componentId)),a=fo(a,S)}}return a},n}(),ZS=Ph.createContext(void 0);ZS.Consumer;var dy={};function gk(n,e,t){var r=Bv(n),a=n,o=!hy(n),u=e.attrs,d=u===void 0?_p:u,m=e.componentId,p=m===void 0?function(oe,ae){var le=typeof oe!="string"?"sc":$b(oe);dy[le]=(dy[le]||0)+1;var D="".concat(le,"-").concat(zO(gp+le+dy[le]));return ae?"".concat(ae,"-").concat(D):D}(e.displayName,e.parentComponentId):m,y=e.displayName,v=y===void 0?function(oe){return hy(oe)?"styled.".concat(oe):"Styled(".concat(FO(oe),")")}(n):y,w=e.displayName&&e.componentId?"".concat($b(e.displayName),"-").concat(e.componentId):e.componentId||p,S=r&&a.attrs?a.attrs.concat(d).filter(Boolean):d,P=e.shouldForwardProp;if(r&&a.shouldForwardProp){var U=a.shouldForwardProp;if(e.shouldForwardProp){var L=e.shouldForwardProp;P=function(oe,ae){return U(oe,ae)&&L(oe,ae)}}else P=U}var H=new pk(t,w,r?a.componentStyle:void 0);function Y(oe,ae){return function(le,D,R){var A=le.attrs,x=le.componentStyle,V=le.defaultProps,z=le.foldedComponentIds,N=le.styledComponentId,Nt=le.target,It=Ph.useContext(ZS),he=eI(),be=le.shouldForwardProp||he.shouldForwardProp,Te=MO(D,It,V)||ru,Ne=function(Ce,Re,ut){for(var Me,Ze=Fn(Fn({},Re),{className:void 0,theme:ut}),Ke=0;Ke<Ce.length;Ke+=1){var Ut=iu(Me=Ce[Ke])?Me(Ze):Me;for(var Jt in Ut)Ze[Jt]=Jt==="className"?fo(Ze[Jt],Ut[Jt]):Jt==="style"?Fn(Fn({},Ze[Jt]),Ut[Jt]):Ut[Jt]}return Re.className&&(Ze.className=fo(Ze.className,Re.className)),Ze}(A,D,Te),O=Ne.as||Nt,ie={};for(var ge in Ne)Ne[ge]===void 0||ge[0]==="$"||ge==="as"||ge==="theme"&&Ne.theme===Te||(ge==="forwardedAs"?ie.as=Ne.forwardedAs:be&&!be(ge,O)||(ie[ge]=Ne[ge]));var me=function(Ce,Re){var ut=eI(),Me=Ce.generateAndInjectStyles(Re,ut.styleSheet,ut.stylis);return Me}(x,Ne),fe=fo(z,N);return me&&(fe+=" "+me),Ne.className&&(fe+=" "+Ne.className),ie[hy(O)&&!BS.has(O)?"class":"className"]=fe,R&&(ie.ref=R),Z.createElement(O,ie)}($,oe,ae)}Y.displayName=v;var $=Ph.forwardRef(Y);return $.attrs=S,$.componentStyle=H,$.displayName=v,$.shouldForwardProp=P,$.foldedComponentIds=r?fo(a.foldedComponentIds,a.styledComponentId):"",$.styledComponentId=w,$.target=r?a.target:n,Object.defineProperty($,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(oe){this._foldedDefaultProps=r?function(ae){for(var le=[],D=1;D<arguments.length;D++)le[D-1]=arguments[D];for(var R=0,A=le;R<A.length;R++)Uy(ae,A[R],!0);return ae}({},a.defaultProps,oe):oe}}),zv($,function(){return".".concat($.styledComponentId)}),o&&GS($,n,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),$}function nI(n,e){for(var t=[n[0]],r=0,a=e.length;r<a;r+=1)t.push(e[r],n[r+1]);return t}var rI=function(n){return Object.assign(n,{isCss:!0})};function _k(n){for(var e=[],t=1;t<arguments.length;t++)e[t-1]=arguments[t];if(iu(n)||Nh(n))return rI(vo(nI(_p,xm([n],e,!0))));var r=n;return e.length===0&&r.length===1&&typeof r[0]=="string"?vo(r):rI(vo(nI(r,e)))}function zy(n,e,t){if(t===void 0&&(t=ru),!e)throw ad(1,e);var r=function(a){for(var o=[],u=1;u<arguments.length;u++)o[u-1]=arguments[u];return n(e,t,_k.apply(void 0,xm([a],o,!1)))};return r.attrs=function(a){return zy(n,e,Fn(Fn({},t),{attrs:Array.prototype.concat(t.attrs,a).filter(Boolean)}))},r.withConfig=function(a){return zy(n,e,Fn(Fn({},t),a))},r}var JS=function(n){return zy(gk,n)},ke=JS;BS.forEach(function(n){ke[n]=JS(n)});const eR=ke.button`
    width: 134px;
    height: ${n=>n.height}px;
    background-color: ${n=>n.color};
    color: #ffffff;
    font-weight: 400;
    font-size: 18px;
    display: block;
    border-radius: ${n=>n.radius}px;
    border: none;
    &:hover{
        background-color: ${n=>n.hoverColor};
    }
    transition: all 0.2s ease-in-out;
`,yk=ke(eR)`
    background: none;
    border: 1px solid ${n=>n.color};
    color: #2E2E2E;
    &:hover{
        background-color: #E1E1E1;
        color: ${n=>n.hoverColor};
        border: 1px solid ${n=>n.hoverColor};
    }
    
`;function Kl(n){const{height:e,radius:t,title:r,onClick:a}=n,o=n.color||"green",u=o=="green"?"#0C4242":"#B0B0B0",d=o=="green"?"#155C5C":"#0C4242",m=n.type||"solid";if(m=="solid")return W.jsx(eR,{height:e||50,radius:t||50,color:u,onClick:a,hoverColor:d,children:r||"Button"});if(m=="outline")return W.jsx(yk,{height:e||50,radius:t||50,color:u,onClick:a,hoverColor:d,children:r||"Button"})}const vk=ke.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: #0C4242;
`;function tR(n){return W.jsx("a",{href:"#",children:W.jsx(vk,{})})}const Ek=ke.div`
    color: #0C4242;
    font-weight: 900;
    font-size: 30px;
`,iI=ke.img`
    width: 24px;
    height: 24px;
`;function Fv(n){return W.jsx("header",{children:W.jsx("div",{className:"header-container",children:W.jsxs("div",{className:"header-box",children:[W.jsxs("nav",{children:[W.jsx("a",{href:"#",children:W.jsx(Ek,{children:"Tidy"})}),W.jsxs("ul",{children:[W.jsx("li",{children:W.jsx("a",{className:"nav",href:"#",children:"neighbor"})}),W.jsx("li",{children:W.jsx("a",{className:"nav",href:"#",children:"myblog"})}),W.jsx("li",{children:W.jsx("a",{className:"nav",href:"#",children:"message"})})]})]}),W.jsxs("div",{className:"header-icons",children:[W.jsx("a",{href:"#",children:W.jsx(iI,{src:"/settings.png"})}),W.jsx("a",{href:"#",children:W.jsx(iI,{src:"/bell.png"})}),W.jsx("a",{href:"#",children:W.jsx(tR,{})})]})]})})})}const Tk=ke.textarea`
    background-color: #ffffff;
    height: ${n=>n.height}px;
    width: ${n=>n.width}px;
    display: block;
    margin-bottom: 30px;
    border-radius: 10px;
    resize: none;
    border: 1px solid #CBCBCB;
    padding: 16px 25px 17px 25px;
    font-size: 18px;
    overflow-y: hidden;
    line-height: 150%;
    outline-color: #0C4242;
    &::placeholder {
        color: #A3A3A3;
    }
`;function Fy(n){const{text:e,height:t,width:r,value:a,onChange:o}=n;return W.jsx(Tk,{placeholder:e,height:t||20,width:r||1160,value:a,onChange:o,spellCheck:"false"})}const wk=ke.p`
    font-weight: 700;
    font-size: ${n=>n.size}px;
    margin-bottom: ${n=>n.bottom||"15"}px;
`;function nR(n){const{title:e,size:t,bottom:r}=n;return W.jsx(wk,{size:t,bottom:r,children:e})}const bk=ke.p`
    color: #686868;
    font-weight: 400;
    font-size: ${n=>n.size}px;
    line-height: ${n=>n.line||"150"}%;
    margin-bottom: ${n=>n.bottom||"30"}px;
    overflow: hidden;
    text-align: justify;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: ${n=>n.clamp};
    -webkit-box-orient: vertical;
    word-break: break-all;
`;function rR(n){const{content:e,size:t,line:r,bottom:a,clamp:o}=n;return W.jsx(bk,{size:t,line:r,bottom:a,clamp:o,children:e})}const Ik=ke.button`
    background-color: #CCF0A6;
    color: #0C4242;
    font-size: 14px;
    font-weight: 500;
    border: none;
    display: block;
    padding: 5px 12px 5px 12px;
    border-radius: 5px;
`;function iR(n){const{category:e}=n;return W.jsx(Ik,{children:e})}const Ak=ke.p`
    font-weight: 400;
    font-size: ${n=>n.size}px;
    color: #A3A3A3;
    margin-left: 15px;
`;function sR(n){const{date:e,size:t}=n;return W.jsx(Ak,{size:t,children:e})}const Sk=ke.div`
    display: block;
`,Rk=ke.div`
    display: flex;
    align-items: center;
    justify-content: right;
`;function Ck(n){const{post:e}=n;return W.jsxs(Sk,{children:[W.jsx(nR,{title:e.title,size:"28",bottom:"30"}),W.jsx(rR,{content:e.content,size:"18",line:"160",bottom:"45"}),W.jsxs(Rk,{children:[W.jsx(iR,{category:e.category}),W.jsx(sR,{date:e.date,size:"18"})]})]})}const Dk=ke.h5`
    font-size: 14px;
    font-weight: 400;
    line-height: 150%;
`;function Pk(n){const{name:e}=n;return W.jsx(Dk,{children:e})}const xk=ke.div`
    font-size: 18px;
    margin-top: 2px;
`;function Nk(n){const{content:e}=n;return W.jsx(xk,{children:e})}const Ok=ke.div`
    display: block;
    width: 1162px;
    border: 1px solid #CBCBCB;
    border-radius: 10px;
    margin-bottom: 15px;
    padding: 13px 20px 13px 20px;
`,kk=ke.div`
    display: flex;
    align-items: center;
    justify-content: left;
    line-height: 150%;
`,Vk=ke.div`
    margin-left: 15px;
    width: 1030px;
`;function Mk(n){const{comment:e}=n;return W.jsx(Ok,{children:W.jsxs(kk,{children:[W.jsx(tR,{}),W.jsxs(Vk,{children:[W.jsx(Pk,{name:"@dujs_b"}),W.jsx(Nk,{content:e.content})]})]})})}const Lk=ke.div``;function Uk(n){const{comments:e}=n,t=e.map((r,a)=>W.jsx(Mk,{comment:r},r.id));return W.jsx(Lk,{children:t})}const Bk=()=>{};var sI={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aR=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let a=n.charCodeAt(r);a<128?e[t++]=a:a<2048?(e[t++]=a>>6|192,e[t++]=a&63|128):(a&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(a=65536+((a&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=a>>18|240,e[t++]=a>>12&63|128,e[t++]=a>>6&63|128,e[t++]=a&63|128):(e[t++]=a>>12|224,e[t++]=a>>6&63|128,e[t++]=a&63|128)}return e},zk=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const a=n[t++];if(a<128)e[r++]=String.fromCharCode(a);else if(a>191&&a<224){const o=n[t++];e[r++]=String.fromCharCode((a&31)<<6|o&63)}else if(a>239&&a<365){const o=n[t++],u=n[t++],d=n[t++],m=((a&7)<<18|(o&63)<<12|(u&63)<<6|d&63)-65536;e[r++]=String.fromCharCode(55296+(m>>10)),e[r++]=String.fromCharCode(56320+(m&1023))}else{const o=n[t++],u=n[t++];e[r++]=String.fromCharCode((a&15)<<12|(o&63)<<6|u&63)}}return e.join("")},oR={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let a=0;a<n.length;a+=3){const o=n[a],u=a+1<n.length,d=u?n[a+1]:0,m=a+2<n.length,p=m?n[a+2]:0,y=o>>2,v=(o&3)<<4|d>>4;let w=(d&15)<<2|p>>6,S=p&63;m||(S=64,u||(w=64)),r.push(t[y],t[v],t[w],t[S])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(aR(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):zk(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let a=0;a<n.length;){const o=t[n.charAt(a++)],d=a<n.length?t[n.charAt(a)]:0;++a;const p=a<n.length?t[n.charAt(a)]:64;++a;const v=a<n.length?t[n.charAt(a)]:64;if(++a,o==null||d==null||p==null||v==null)throw new Fk;const w=o<<2|d>>4;if(r.push(w),p!==64){const S=d<<4&240|p>>2;if(r.push(S),v!==64){const P=p<<6&192|v;r.push(P)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class Fk extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const jk=function(n){const e=aR(n);return oR.encodeByteArray(e,!0)},Vm=function(n){return jk(n).replace(/\./g,"")},jv=function(n){try{return oR.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};function Mm(n,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const t=e;return new Date(t.getTime());case Object:n===void 0&&(n={});break;case Array:n=[];break;default:return e}for(const t in e)!e.hasOwnProperty(t)||!qk(t)||(n[t]=Mm(n[t],e[t]));return n}function qk(n){return n!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lR(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hk=()=>lR().__FIREBASE_DEFAULTS__,Gk=()=>{if(typeof process>"u"||typeof sI>"u")return;const n=sI.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},$k=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&jv(n[1]);return e&&JSON.parse(e)},qv=()=>{try{return Bk()||Hk()||Gk()||$k()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},uR=()=>{var n;return(n=qv())===null||n===void 0?void 0:n.config},Kk=n=>{var e;return(e=qv())===null||e===void 0?void 0:e[`_${n}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qk{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wk(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",a=n.iat||0,o=n.sub||n.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const u=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:a,exp:a+3600,auth_time:a,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}}},n);return[Vm(JSON.stringify(t)),Vm(JSON.stringify(u)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Yk(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(wt())}function Hv(){var n;const e=(n=qv())===null||n===void 0?void 0:n.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Xk(){return typeof window<"u"||cR()}function cR(){return typeof WorkerGlobalScope<"u"&&typeof self<"u"&&self instanceof WorkerGlobalScope}function Zk(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function hR(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function Gv(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function dR(){const n=wt();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function fR(){return!Hv()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Oh(){try{return typeof indexedDB=="object"}catch{return!1}}function Jk(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",a=self.indexedDB.open(r);a.onsuccess=()=>{a.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},a.onupgradeneeded=()=>{t=!1},a.onerror=()=>{var o;e(((o=a.error)===null||o===void 0?void 0:o.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eV="FirebaseError";class kn extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=eV,Object.setPrototypeOf(this,kn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Mo.prototype.create)}}class Mo{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},a=`${this.service}/${e}`,o=this.errors[e],u=o?tV(o,r):"Error",d=`${this.serviceName}: ${u} (${a}).`;return new kn(a,d,r)}}function tV(n,e){return n.replace(nV,(t,r)=>{const a=e[r];return a!=null?String(a):`<${r}?>`})}const nV=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aI(n,e){return Object.prototype.hasOwnProperty.call(n,e)}function rV(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function sa(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const a of t){if(!r.includes(a))return!1;const o=n[a],u=e[a];if(oI(o)&&oI(u)){if(!sa(o,u))return!1}else if(o!==u)return!1}for(const a of r)if(!t.includes(a))return!1;return!0}function oI(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xu(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(a=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(a))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function $l(n){const e={};return n.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[a,o]=r.split("=");e[decodeURIComponent(a)]=decodeURIComponent(o)}}),e}function uh(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}function mR(n,e){const t=new iV(n,e);return t.subscribe.bind(t)}class iV{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let a;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");sV(e,["next","error","complete"])?a=e:a={next:e,error:t,complete:r},a.next===void 0&&(a.next=fy),a.error===void 0&&(a.error=fy),a.complete===void 0&&(a.complete=fy);const o=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?a.error(this.finalError):a.complete()}catch{}}),this.observers.push(a),o}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function sV(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function fy(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ie(n){return n&&n._delegate?n._delegate:n}class ci{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const io="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aV{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new Qk;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const a=this.getOrInitializeService({instanceIdentifier:t});a&&r.resolve(a)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),a=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(o){if(a)return null;throw o}else{if(a)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(lV(e))try{this.getOrInitializeService({instanceIdentifier:io})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(t);try{const o=this.getOrInitializeService({instanceIdentifier:a});r.resolve(o)}catch{}}}}clearInstance(e=io){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=io){return this.instances.has(e)}getOptions(e=io){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const a=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[o,u]of this.instancesDeferred.entries()){const d=this.normalizeInstanceIdentifier(o);r===d&&u.resolve(a)}return a}onInit(e,t){var r;const a=this.normalizeInstanceIdentifier(t),o=(r=this.onInitCallbacks.get(a))!==null&&r!==void 0?r:new Set;o.add(e),this.onInitCallbacks.set(a,o);const u=this.instances.get(a);return u&&e(u,a),()=>{o.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const a of r)try{a(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:oV(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=io){return this.component?this.component.multipleInstances?e:io:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function oV(n){return n===io?void 0:n}function lV(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pR{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new aV(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $v=[];var Be;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(Be||(Be={}));const gR={debug:Be.DEBUG,verbose:Be.VERBOSE,info:Be.INFO,warn:Be.WARN,error:Be.ERROR,silent:Be.SILENT},uV=Be.INFO,cV={[Be.DEBUG]:"log",[Be.VERBOSE]:"log",[Be.INFO]:"info",[Be.WARN]:"warn",[Be.ERROR]:"error"},hV=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),a=cV[e];if(a)console[a](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class yp{constructor(e){this.name=e,this._logLevel=uV,this._logHandler=hV,this._userLogHandler=null,$v.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Be))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?gR[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Be.DEBUG,...e),this._logHandler(this,Be.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Be.VERBOSE,...e),this._logHandler(this,Be.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Be.INFO,...e),this._logHandler(this,Be.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Be.WARN,...e),this._logHandler(this,Be.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Be.ERROR,...e),this._logHandler(this,Be.ERROR,...e)}}function dV(n){$v.forEach(e=>{e.setLogLevel(n)})}function fV(n,e){for(const t of $v){let r=null;e&&e.level&&(r=gR[e.level]),n===null?t.userLogHandler=null:t.userLogHandler=(a,o,...u)=>{const d=u.map(m=>{if(m==null)return null;if(typeof m=="string")return m;if(typeof m=="number"||typeof m=="boolean")return m.toString();if(m instanceof Error)return m.message;try{return JSON.stringify(m)}catch{return null}}).filter(m=>m).join(" ");o>=(r??a.logLevel)&&n({level:Be[o].toLowerCase(),message:d,args:u,type:a.name})}}}const mV=(n,e)=>e.some(t=>n instanceof t);let lI,uI;function pV(){return lI||(lI=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function gV(){return uI||(uI=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const _R=new WeakMap,jy=new WeakMap,yR=new WeakMap,my=new WeakMap,Kv=new WeakMap;function _V(n){const e=new Promise((t,r)=>{const a=()=>{n.removeEventListener("success",o),n.removeEventListener("error",u)},o=()=>{t(ea(n.result)),a()},u=()=>{r(n.error),a()};n.addEventListener("success",o),n.addEventListener("error",u)});return e.then(t=>{t instanceof IDBCursor&&_R.set(t,n)}).catch(()=>{}),Kv.set(e,n),e}function yV(n){if(jy.has(n))return;const e=new Promise((t,r)=>{const a=()=>{n.removeEventListener("complete",o),n.removeEventListener("error",u),n.removeEventListener("abort",u)},o=()=>{t(),a()},u=()=>{r(n.error||new DOMException("AbortError","AbortError")),a()};n.addEventListener("complete",o),n.addEventListener("error",u),n.addEventListener("abort",u)});jy.set(n,e)}let qy={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return jy.get(n);if(e==="objectStoreNames")return n.objectStoreNames||yR.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return ea(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function vV(n){qy=n(qy)}function EV(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(py(this),e,...t);return yR.set(r,e.sort?e.sort():[e]),ea(r)}:gV().includes(n)?function(...e){return n.apply(py(this),e),ea(_R.get(this))}:function(...e){return ea(n.apply(py(this),e))}}function TV(n){return typeof n=="function"?EV(n):(n instanceof IDBTransaction&&yV(n),mV(n,pV())?new Proxy(n,qy):n)}function ea(n){if(n instanceof IDBRequest)return _V(n);if(my.has(n))return my.get(n);const e=TV(n);return e!==n&&(my.set(n,e),Kv.set(e,n)),e}const py=n=>Kv.get(n);function wV(n,e,{blocked:t,upgrade:r,blocking:a,terminated:o}={}){const u=indexedDB.open(n,e),d=ea(u);return r&&u.addEventListener("upgradeneeded",m=>{r(ea(u.result),m.oldVersion,m.newVersion,ea(u.transaction),m)}),t&&u.addEventListener("blocked",m=>t(m.oldVersion,m.newVersion,m)),d.then(m=>{o&&m.addEventListener("close",()=>o()),a&&m.addEventListener("versionchange",p=>a(p.oldVersion,p.newVersion,p))}).catch(()=>{}),d}const bV=["get","getKey","getAll","getAllKeys","count"],IV=["put","add","delete","clear"],gy=new Map;function cI(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(gy.get(e))return gy.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,a=IV.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(a||bV.includes(t)))return;const o=async function(u,...d){const m=this.transaction(u,a?"readwrite":"readonly");let p=m.store;return r&&(p=p.index(d.shift())),(await Promise.all([p[t](...d),a&&m.done]))[0]};return gy.set(e,o),o}vV(n=>({...n,get:(e,t,r)=>cI(e,t)||n.get(e,t,r),has:(e,t)=>!!cI(e,t)||n.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AV{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(SV(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function SV(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Lm="@firebase/app",Hy="0.11.4";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wi=new yp("@firebase/app"),RV="@firebase/app-compat",CV="@firebase/analytics-compat",DV="@firebase/analytics",PV="@firebase/app-check-compat",xV="@firebase/app-check",NV="@firebase/auth",OV="@firebase/auth-compat",kV="@firebase/database",VV="@firebase/data-connect",MV="@firebase/database-compat",LV="@firebase/functions",UV="@firebase/functions-compat",BV="@firebase/installations",zV="@firebase/installations-compat",FV="@firebase/messaging",jV="@firebase/messaging-compat",qV="@firebase/performance",HV="@firebase/performance-compat",GV="@firebase/remote-config",$V="@firebase/remote-config-compat",KV="@firebase/storage",QV="@firebase/storage-compat",WV="@firebase/firestore",YV="@firebase/vertexai",XV="@firebase/firestore-compat",ZV="firebase",JV="11.6.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aa="[DEFAULT]",eM={[Lm]:"fire-core",[RV]:"fire-core-compat",[DV]:"fire-analytics",[CV]:"fire-analytics-compat",[xV]:"fire-app-check",[PV]:"fire-app-check-compat",[NV]:"fire-auth",[OV]:"fire-auth-compat",[kV]:"fire-rtdb",[VV]:"fire-data-connect",[MV]:"fire-rtdb-compat",[LV]:"fire-fn",[UV]:"fire-fn-compat",[BV]:"fire-iid",[zV]:"fire-iid-compat",[FV]:"fire-fcm",[jV]:"fire-fcm-compat",[qV]:"fire-perf",[HV]:"fire-perf-compat",[GV]:"fire-rc",[$V]:"fire-rc-compat",[KV]:"fire-gcs",[QV]:"fire-gcs-compat",[WV]:"fire-fst",[XV]:"fire-fst-compat",[YV]:"fire-vertex","fire-js":"fire-js",[ZV]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oa=new Map,su=new Map,au=new Map;function kh(n,e){try{n.container.addComponent(e)}catch(t){Wi.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function vR(n,e){n.container.addOrOverwriteComponent(e)}function la(n){const e=n.name;if(au.has(e))return Wi.debug(`There were multiple attempts to register component ${e}.`),!1;au.set(e,n);for(const t of oa.values())kh(t,n);for(const t of su.values())kh(t,n);return!0}function ER(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function tM(n,e,t=aa){ER(n,e).clearInstance(t)}function TR(n){return n.options!==void 0}function ft(n){return n==null?!1:n.settings!==void 0}function nM(){au.clear()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rM={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Tr=new Mo("app","Firebase",rM);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let wR=class{constructor(e,t,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new ci("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Tr.create("app-deleted",{appName:this._name})}};/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hI(n,e){const t=jv(n.split(".")[1]);if(t===null){console.error(`FirebaseServerApp ${e} is invalid: second part could not be parsed.`);return}if(JSON.parse(t).exp===void 0){console.error(`FirebaseServerApp ${e} is invalid: expiration claim could not be parsed`);return}const a=JSON.parse(t).exp*1e3,o=new Date().getTime();a-o<=0&&console.error(`FirebaseServerApp ${e} is invalid: the token has expired.`)}class iM extends wR{constructor(e,t,r,a){const o=t.automaticDataCollectionEnabled!==void 0?t.automaticDataCollectionEnabled:!1,u={name:r,automaticDataCollectionEnabled:o};if(e.apiKey!==void 0)super(e,u,a);else{const d=e;super(d.options,u,a)}this._serverConfig=Object.assign({automaticDataCollectionEnabled:o},t),this._serverConfig.authIdToken&&hI(this._serverConfig.authIdToken,"authIdToken"),this._serverConfig.appCheckToken&&hI(this._serverConfig.appCheckToken,"appCheckToken"),this._finalizationRegistry=null,typeof FinalizationRegistry<"u"&&(this._finalizationRegistry=new FinalizationRegistry(()=>{this.automaticCleanup()})),this._refCount=0,this.incRefCount(this._serverConfig.releaseOnDeref),this._serverConfig.releaseOnDeref=void 0,t.releaseOnDeref=void 0,Or(Lm,Hy,"serverapp")}toJSON(){}get refCount(){return this._refCount}incRefCount(e){this.isDeleted||(this._refCount++,e!==void 0&&this._finalizationRegistry!==null&&this._finalizationRegistry.register(e,this))}decRefCount(){return this.isDeleted?0:--this._refCount}automaticCleanup(){Wv(this)}get settings(){return this.checkDestroyed(),this._serverConfig}checkDestroyed(){if(this.isDeleted)throw Tr.create("server-app-deleted")}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ya=JV;function Qv(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r=Object.assign({name:aa,automaticDataCollectionEnabled:!1},e),a=r.name;if(typeof a!="string"||!a)throw Tr.create("bad-app-name",{appName:String(a)});if(t||(t=uR()),!t)throw Tr.create("no-options");const o=oa.get(a);if(o){if(sa(t,o.options)&&sa(r,o.config))return o;throw Tr.create("duplicate-app",{appName:a})}const u=new pR(a);for(const m of au.values())u.addComponent(m);const d=new wR(t,r,u);return oa.set(a,d),d}function sM(n,e){if(Xk()&&!cR())throw Tr.create("invalid-server-app-environment");e.automaticDataCollectionEnabled===void 0&&(e.automaticDataCollectionEnabled=!1);let t;TR(n)?t=n.options:t=n;const r=Object.assign(Object.assign({},e),t);r.releaseOnDeref!==void 0&&delete r.releaseOnDeref;const a=p=>[...p].reduce((y,v)=>Math.imul(31,y)+v.charCodeAt(0)|0,0);if(e.releaseOnDeref!==void 0&&typeof FinalizationRegistry>"u")throw Tr.create("finalization-registry-not-supported",{});const o=""+a(JSON.stringify(r)),u=su.get(o);if(u)return u.incRefCount(e.releaseOnDeref),u;const d=new pR(o);for(const p of au.values())d.addComponent(p);const m=new iM(t,e,o,d);return su.set(o,m),m}function aM(n=aa){const e=oa.get(n);if(!e&&n===aa&&uR())return Qv();if(!e)throw Tr.create("no-app",{appName:n});return e}function oM(){return Array.from(oa.values())}async function Wv(n){let e=!1;const t=n.name;oa.has(t)?(e=!0,oa.delete(t)):su.has(t)&&n.decRefCount()<=0&&(su.delete(t),e=!0),e&&(await Promise.all(n.container.getProviders().map(r=>r.delete())),n.isDeleted=!0)}function Or(n,e,t){var r;let a=(r=eM[n])!==null&&r!==void 0?r:n;t&&(a+=`-${t}`);const o=a.match(/\s|\//),u=e.match(/\s|\//);if(o||u){const d=[`Unable to register library "${a}" with version "${e}":`];o&&d.push(`library name "${a}" contains illegal characters (whitespace or "/")`),o&&u&&d.push("and"),u&&d.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Wi.warn(d.join(" "));return}la(new ci(`${a}-version`,()=>({library:a,version:e}),"VERSION"))}function bR(n,e){if(n!==null&&typeof n!="function")throw Tr.create("invalid-log-argument");fV(n,e)}function IR(n){dV(n)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lM="firebase-heartbeat-database",uM=1,Vh="firebase-heartbeat-store";let _y=null;function AR(){return _y||(_y=wV(lM,uM,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(Vh)}catch(t){console.warn(t)}}}}).catch(n=>{throw Tr.create("idb-open",{originalErrorMessage:n.message})})),_y}async function cM(n){try{const t=(await AR()).transaction(Vh),r=await t.objectStore(Vh).get(SR(n));return await t.done,r}catch(e){if(e instanceof kn)Wi.warn(e.message);else{const t=Tr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Wi.warn(t.message)}}}async function dI(n,e){try{const r=(await AR()).transaction(Vh,"readwrite");await r.objectStore(Vh).put(e,SR(n)),await r.done}catch(t){if(t instanceof kn)Wi.warn(t.message);else{const r=Tr.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});Wi.warn(r.message)}}}function SR(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hM=1024,dM=30;class fM{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new pM(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,t;try{const a=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),o=fI();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===o||this._heartbeatsCache.heartbeats.some(u=>u.date===o))return;if(this._heartbeatsCache.heartbeats.push({date:o,agent:a}),this._heartbeatsCache.heartbeats.length>dM){const u=gM(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(u,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){Wi.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=fI(),{heartbeatsToSend:r,unsentEntries:a}=mM(this._heartbeatsCache.heartbeats),o=Vm(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=t,a.length>0?(this._heartbeatsCache.heartbeats=a,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}catch(t){return Wi.warn(t),""}}}function fI(){return new Date().toISOString().substring(0,10)}function mM(n,e=hM){const t=[];let r=n.slice();for(const a of n){const o=t.find(u=>u.agent===a.agent);if(o){if(o.dates.push(a.date),mI(t)>e){o.dates.pop();break}}else if(t.push({agent:a.agent,dates:[a.date]}),mI(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class pM{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Oh()?Jk().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await cM(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const a=await this.read();return dI(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:a.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const a=await this.read();return dI(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:a.lastSentHeartbeatDate,heartbeats:[...a.heartbeats,...e.heartbeats]})}else return}}function mI(n){return Vm(JSON.stringify({version:2,heartbeats:n})).length}function gM(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let r=1;r<n.length;r++)n[r].date<t&&(t=n[r].date,e=r);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _M(n){la(new ci("platform-logger",e=>new AV(e),"PRIVATE")),la(new ci("heartbeat",e=>new fM(e),"PRIVATE")),Or(Lm,Hy,n),Or(Lm,Hy,"esm2017"),Or("fire-js","")}_M("");const yM=Object.freeze(Object.defineProperty({__proto__:null,FirebaseError:kn,SDK_VERSION:ya,_DEFAULT_ENTRY_NAME:aa,_addComponent:kh,_addOrOverwriteComponent:vR,_apps:oa,_clearComponents:nM,_components:au,_getProvider:ER,_isFirebaseApp:TR,_isFirebaseServerApp:ft,_registerComponent:la,_removeServiceInstance:tM,_serverApps:su,deleteApp:Wv,getApp:aM,getApps:oM,initializeApp:Qv,initializeServerApp:sM,onLog:bR,registerVersion:Or,setLogLevel:IR},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vM{constructor(e,t){this._delegate=e,this.firebase=t,kh(e,new ci("app-compat",()=>this,"PUBLIC")),this.container=e.container}get automaticDataCollectionEnabled(){return this._delegate.automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this._delegate.automaticDataCollectionEnabled=e}get name(){return this._delegate.name}get options(){return this._delegate.options}delete(){return new Promise(e=>{this._delegate.checkDestroyed(),e()}).then(()=>(this.firebase.INTERNAL.removeApp(this.name),Wv(this._delegate)))}_getService(e,t=aa){var r;this._delegate.checkDestroyed();const a=this._delegate.container.getProvider(e);return!a.isInitialized()&&((r=a.getComponent())===null||r===void 0?void 0:r.instantiationMode)==="EXPLICIT"&&a.initialize(),a.getImmediate({identifier:t})}_removeServiceInstance(e,t=aa){this._delegate.container.getProvider(e).clearInstance(t)}_addComponent(e){kh(this._delegate,e)}_addOrOverwriteComponent(e){vR(this._delegate,e)}toJSON(){return{name:this.name,automaticDataCollectionEnabled:this.automaticDataCollectionEnabled,options:this.options}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const EM={"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance."},pI=new Mo("app-compat","Firebase",EM);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function TM(n){const e={},t={__esModule:!0,initializeApp:o,app:a,registerVersion:Or,setLogLevel:IR,onLog:bR,apps:null,SDK_VERSION:ya,INTERNAL:{registerComponent:d,removeApp:r,useAsService:m,modularAPIs:yM}};t.default=t,Object.defineProperty(t,"apps",{get:u});function r(p){delete e[p]}function a(p){if(p=p||aa,!aI(e,p))throw pI.create("no-app",{appName:p});return e[p]}a.App=n;function o(p,y={}){const v=Qv(p,y);if(aI(e,v.name))return e[v.name];const w=new n(v,t);return e[v.name]=w,w}function u(){return Object.keys(e).map(p=>e[p])}function d(p){const y=p.name,v=y.replace("-compat","");if(la(p)&&p.type==="PUBLIC"){const w=(S=a())=>{if(typeof S[v]!="function")throw pI.create("invalid-app-argument",{appName:y});return S[v]()};p.serviceProps!==void 0&&Mm(w,p.serviceProps),t[v]=w,n.prototype[v]=function(...S){return this._getService.bind(this,y).apply(this,p.multipleInstances?S:[])}}return p.type==="PUBLIC"?t[v]:null}function m(p,y){return y==="serverAuth"?null:y}return t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function RR(){const n=TM(vM);n.INTERNAL=Object.assign(Object.assign({},n.INTERNAL),{createFirebaseNamespace:RR,extendNamespace:e,createSubscribe:mR,ErrorFactory:Mo,deepExtend:Mm});function e(t){Mm(n,t)}return n}const wM=RR();/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gI=new yp("@firebase/app-compat"),bM="@firebase/app-compat",IM="0.2.53";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function AM(n){Or(bM,IM,n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */try{const n=lR();if(n.firebase!==void 0){gI.warn(`
      Warning: Firebase is already defined in the global scope. Please make sure
      Firebase library is only loaded once.
    `);const e=n.firebase.SDK_VERSION;e&&e.indexOf("LITE")>=0&&gI.warn(`
        Warning: You are trying to load Firebase while using Firebase Performance standalone script.
        You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.
        `)}}catch{}const Nu=wM;AM();var SM="firebase",RM="11.6.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Nu.registerVersion(SM,RM,"app-compat");const Jc={FACEBOOK:"facebook.com",GITHUB:"github.com",GOOGLE:"google.com",PASSWORD:"password",TWITTER:"twitter.com"},Ol={EMAIL_SIGNIN:"EMAIL_SIGNIN",PASSWORD_RESET:"PASSWORD_RESET",RECOVER_EMAIL:"RECOVER_EMAIL",REVERT_SECOND_FACTOR_ADDITION:"REVERT_SECOND_FACTOR_ADDITION",VERIFY_AND_CHANGE_EMAIL:"VERIFY_AND_CHANGE_EMAIL",VERIFY_EMAIL:"VERIFY_EMAIL"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function CM(){return{"admin-restricted-operation":"This operation is restricted to administrators only.","argument-error":"","app-not-authorized":"This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.","app-not-installed":"The requested mobile application corresponding to the identifier (Android package name or iOS bundle ID) provided is not installed on this device.","captcha-check-failed":"The reCAPTCHA response token provided is either invalid, expired, already used or the domain associated with it does not match the list of whitelisted domains.","code-expired":"The SMS code has expired. Please re-send the verification code to try again.","cordova-not-ready":"Cordova framework is not ready.","cors-unsupported":"This browser is not supported.","credential-already-in-use":"This credential is already associated with a different user account.","custom-token-mismatch":"The custom token corresponds to a different audience.","requires-recent-login":"This operation is sensitive and requires recent authentication. Log in again before retrying this request.","dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.","dynamic-link-not-activated":"Please activate Dynamic Links in the Firebase Console and agree to the terms and conditions.","email-change-needs-verification":"Multi-factor users must always have a verified email.","email-already-in-use":"The email address is already in use by another account.","emulator-config-failed":'Auth instance has already been used to make a network call. Auth can no longer be configured to use the emulator. Try calling "connectAuthEmulator()" sooner.',"expired-action-code":"The action code has expired.","cancelled-popup-request":"This operation has been cancelled due to another conflicting popup being opened.","internal-error":"An internal AuthError has occurred.","invalid-app-credential":"The phone verification request contains an invalid application verifier. The reCAPTCHA token response is either invalid or expired.","invalid-app-id":"The mobile app identifier is not registered for the current project.","invalid-user-token":"This user's credential isn't valid for this project. This can happen if the user's token has been tampered with, or if the user isn't for the project associated with this API key.","invalid-auth-event":"An internal AuthError has occurred.","invalid-verification-code":"The SMS verification code used to create the phone auth credential is invalid. Please resend the verification code sms and be sure to use the verification code provided by the user.","invalid-continue-uri":"The continue URL provided in the request is invalid.","invalid-cordova-configuration":"The following Cordova plugins must be installed to enable OAuth sign-in: cordova-plugin-buildinfo, cordova-universal-links-plugin, cordova-plugin-browsertab, cordova-plugin-inappbrowser and cordova-plugin-customurlscheme.","invalid-custom-token":"The custom token format is incorrect. Please check the documentation.","invalid-dynamic-link-domain":"The provided dynamic link domain is not configured or authorized for the current project.","invalid-email":"The email address is badly formatted.","invalid-emulator-scheme":"Emulator URL must start with a valid scheme (http:// or https://).","invalid-api-key":"Your API key is invalid, please check you have copied it correctly.","invalid-cert-hash":"The SHA-1 certificate hash provided is invalid.","invalid-credential":"The supplied auth credential is incorrect, malformed or has expired.","invalid-message-payload":"The email template corresponding to this action contains invalid characters in its message. Please fix by going to the Auth email templates section in the Firebase Console.","invalid-multi-factor-session":"The request does not contain a valid proof of first factor successful sign-in.","invalid-oauth-provider":"EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.","invalid-oauth-client-id":"The OAuth client ID provided is either invalid or does not match the specified API key.","unauthorized-domain":"This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.","invalid-action-code":"The action code is invalid. This can happen if the code is malformed, expired, or has already been used.","wrong-password":"The password is invalid or the user does not have a password.","invalid-persistence-type":"The specified persistence type is invalid. It can only be local, session or none.","invalid-phone-number":"The format of the phone number provided is incorrect. Please enter the phone number in a format that can be parsed into E.164 format. E.164 phone numbers are written in the format [+][country code][subscriber number including area code].","invalid-provider-id":"The specified provider ID is invalid.","invalid-recipient-email":"The email corresponding to this action failed to send as the provided recipient email address is invalid.","invalid-sender":"The email template corresponding to this action contains an invalid sender email or name. Please fix by going to the Auth email templates section in the Firebase Console.","invalid-verification-id":"The verification ID used to create the phone auth credential is invalid.","invalid-tenant-id":"The Auth instance's tenant ID is invalid.","login-blocked":"Login blocked by user-provided method: {$originalMessage}","missing-android-pkg-name":"An Android Package Name must be provided if the Android App is required to be installed.","auth-domain-config-required":"Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.","missing-app-credential":"The phone verification request is missing an application verifier assertion. A reCAPTCHA response token needs to be provided.","missing-verification-code":"The phone auth credential was created with an empty SMS verification code.","missing-continue-uri":"A continue URL must be provided in the request.","missing-iframe-start":"An internal AuthError has occurred.","missing-ios-bundle-id":"An iOS Bundle ID must be provided if an App Store ID is provided.","missing-or-invalid-nonce":"The request does not contain a valid nonce. This can occur if the SHA-256 hash of the provided raw nonce does not match the hashed nonce in the ID token payload.","missing-password":"A non-empty password must be provided","missing-multi-factor-info":"No second factor identifier is provided.","missing-multi-factor-session":"The request is missing proof of first factor successful sign-in.","missing-phone-number":"To send verification codes, provide a phone number for the recipient.","missing-verification-id":"The phone auth credential was created with an empty verification ID.","app-deleted":"This instance of FirebaseApp has been deleted.","multi-factor-info-not-found":"The user does not have a second factor matching the identifier provided.","multi-factor-auth-required":"Proof of ownership of a second factor is required to complete sign-in.","account-exists-with-different-credential":"An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.","network-request-failed":"A network AuthError (such as timeout, interrupted connection or unreachable host) has occurred.","no-auth-event":"An internal AuthError has occurred.","no-such-provider":"User was not linked to an account with the given provider.","null-user":"A null user object was provided as the argument for an operation which requires a non-null user object.","operation-not-allowed":"The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.","operation-not-supported-in-this-environment":'This operation is not supported in the environment this application is running on. "location.protocol" must be http, https or chrome-extension and web storage must be enabled.',"popup-blocked":"Unable to establish a connection with the popup. It may have been blocked by the browser.","popup-closed-by-user":"The popup has been closed by the user before finalizing the operation.","provider-already-linked":"User can only be linked to one identity for the given provider.","quota-exceeded":"The project's quota for this operation has been exceeded.","redirect-cancelled-by-user":"The redirect operation has been cancelled by the user before finalizing.","redirect-operation-pending":"A redirect sign-in operation is already pending.","rejected-credential":"The request contains malformed or mismatching credentials.","second-factor-already-in-use":"The second factor is already enrolled on this account.","maximum-second-factor-count-exceeded":"The maximum allowed number of second factors on a user has been exceeded.","tenant-id-mismatch":"The provided tenant ID does not match the Auth instance's tenant ID",timeout:"The operation has timed out.","user-token-expired":"The user's credential is no longer valid. The user must sign in again.","too-many-requests":"We have blocked all requests from this device due to unusual activity. Try again later.","unauthorized-continue-uri":"The domain of the continue URL is not whitelisted.  Please whitelist the domain in the Firebase console.","unsupported-first-factor":"Enrolling a second factor or signing in with a multi-factor account requires sign-in with a supported first factor.","unsupported-persistence-type":"The current environment does not support the specified persistence type.","unsupported-tenant-operation":"This operation is not supported in a multi-tenant context.","unverified-email":"The operation requires a verified email.","user-cancelled":"The user did not grant your application the permissions it requested.","user-not-found":"There is no user record corresponding to this identifier. The user may have been deleted.","user-disabled":"The user account has been disabled by an administrator.","user-mismatch":"The supplied credentials do not correspond to the previously signed in user.","user-signed-out":"","weak-password":"The password must be 6 characters long or more.","web-storage-unsupported":"This browser is not supported or 3rd party cookies and data may be disabled.","already-initialized":"initializeAuth() has already been called with different options. To avoid this error, call initializeAuth() with the same options as when it was originally called, or call getAuth() to return the already initialized instance.","missing-recaptcha-token":"The reCAPTCHA token is missing when sending request to the backend.","invalid-recaptcha-token":"The reCAPTCHA token is invalid when sending request to the backend.","invalid-recaptcha-action":"The reCAPTCHA action is invalid when sending request to the backend.","recaptcha-not-enabled":"reCAPTCHA Enterprise integration is not enabled for this project.","missing-client-type":"The reCAPTCHA client type is missing when sending request to the backend.","missing-recaptcha-version":"The reCAPTCHA version is missing when sending request to the backend.","invalid-req-type":"Invalid request parameters.","invalid-recaptcha-version":"The reCAPTCHA version is invalid when sending request to the backend.","unsupported-password-policy-schema-version":"The password policy received from the backend uses a schema version that is not supported by this version of the Firebase SDK.","password-does-not-meet-requirements":"The password does not meet the requirements.","invalid-hosting-link-domain":"The provided Hosting link domain is not configured in Firebase Hosting or is not owned by the current project. This cannot be a default Hosting domain (`web.app` or `firebaseapp.com`)."}}function CR(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const DM=CM,PM=CR,DR=new Mo("auth","Firebase",CR());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Um=new yp("@firebase/auth");function xM(n,...e){Um.logLevel<=Be.WARN&&Um.warn(`Auth (${ya}): ${n}`,...e)}function gm(n,...e){Um.logLevel<=Be.ERROR&&Um.error(`Auth (${ya}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vn(n,...e){throw Xv(n,...e)}function Xt(n,...e){return Xv(n,...e)}function Yv(n,e,t){const r=Object.assign(Object.assign({},PM()),{[e]:t});return new Mo("auth","Firebase",r).create(e,{appName:n.name})}function hn(n){return Yv(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Ou(n,e,t){const r=t;if(!(e instanceof r))throw r.name!==e.constructor.name&&vn(n,"argument-error"),Yv(n,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Xv(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return DR.create(n,...e)}function se(n,e,...t){if(!n)throw Xv(e,...t)}function ii(n){const e="INTERNAL ASSERTION FAILED: "+n;throw gm(e),new Error(e)}function kr(n,e){n||ii(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mh(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function Zv(){return _I()==="http:"||_I()==="https:"}function _I(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function NM(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Zv()||hR()||"connection"in navigator)?navigator.onLine:!0}function OM(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class od{constructor(e,t){this.shortDelay=e,this.longDelay=t,kr(t>e,"Short delay should be less than long delay!"),this.isMobile=Yk()||Gv()}get(){return NM()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jv(n,e){kr(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PR{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;ii("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;ii("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;ii("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kM={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VM=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],MM=new od(3e4,6e4);function Pt(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function xt(n,e,t,r,a={}){return xR(n,a,async()=>{let o={},u={};r&&(e==="GET"?u=r:o={body:JSON.stringify(r)});const d=xu(Object.assign({key:n.config.apiKey},u)).slice(1),m=await n._getAdditionalHeaders();m["Content-Type"]="application/json",n.languageCode&&(m["X-Firebase-Locale"]=n.languageCode);const p=Object.assign({method:e,headers:m},o);return Zk()||(p.referrerPolicy="no-referrer"),PR.fetch()(await NR(n,n.config.apiHost,t,d),p)})}async function xR(n,e,t){n._canInitEmulator=!1;const r=Object.assign(Object.assign({},kM),e);try{const a=new UM(n),o=await Promise.race([t(),a.promise]);a.clearNetworkTimeout();const u=await o.json();if("needConfirmation"in u)throw ch(n,"account-exists-with-different-credential",u);if(o.ok&&!("errorMessage"in u))return u;{const d=o.ok?u.errorMessage:u.error.message,[m,p]=d.split(" : ");if(m==="FEDERATED_USER_ID_ALREADY_LINKED")throw ch(n,"credential-already-in-use",u);if(m==="EMAIL_EXISTS")throw ch(n,"email-already-in-use",u);if(m==="USER_DISABLED")throw ch(n,"user-disabled",u);const y=r[m]||m.toLowerCase().replace(/[_\s]+/g,"-");if(p)throw Yv(n,y,p);vn(n,y)}}catch(a){if(a instanceof kn)throw a;vn(n,"network-request-failed",{message:String(a)})}}async function es(n,e,t,r,a={}){const o=await xt(n,e,t,r,a);return"mfaPendingCredential"in o&&vn(n,"multi-factor-auth-required",{_serverResponse:o}),o}async function NR(n,e,t,r){const a=`${e}${t}?${r}`,o=n,u=o.config.emulator?Jv(n.config,a):`${n.config.apiScheme}://${a}`;return VM.includes(t)&&(await o._persistenceManagerAvailable,o._getPersistenceType()==="COOKIE")?o._getPersistence()._getFinalTarget(u).toString():u}function LM(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class UM{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(Xt(this.auth,"network-request-failed")),MM.get())})}}function ch(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const a=Xt(n,e,r);return a.customData._tokenResponse=t,a}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yI(n){return n!==void 0&&n.getResponse!==void 0}function vI(n){return n!==void 0&&n.enterprise!==void 0}class OR{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return LM(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function BM(n){return(await xt(n,"GET","/v1/recaptchaParams")).recaptchaSiteKey||""}async function kR(n,e){return xt(n,"GET","/v2/recaptchaConfig",Pt(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zM(n,e){return xt(n,"POST","/v1/accounts:delete",e)}async function FM(n,e){return xt(n,"POST","/v1/accounts:update",e)}async function Bm(n,e){return xt(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _h(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function jM(n,e=!1){const t=Ie(n),r=await t.getIdToken(e),a=vp(r);se(a&&a.exp&&a.auth_time&&a.iat,t.auth,"internal-error");const o=typeof a.firebase=="object"?a.firebase:void 0,u=o==null?void 0:o.sign_in_provider;return{claims:a,token:r,authTime:_h(yy(a.auth_time)),issuedAtTime:_h(yy(a.iat)),expirationTime:_h(yy(a.exp)),signInProvider:u||null,signInSecondFactor:(o==null?void 0:o.sign_in_second_factor)||null}}function yy(n){return Number(n)*1e3}function vp(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return gm("JWT malformed, contained fewer than 3 sections"),null;try{const a=jv(t);return a?JSON.parse(a):(gm("Failed to decode base64 JWT payload"),null)}catch(a){return gm("Caught error parsing JWT payload as JSON",a==null?void 0:a.toString()),null}}function EI(n){const e=vp(n);return se(e,"internal-error"),se(typeof e.exp<"u","internal-error"),se(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Yi(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof kn&&qM(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function qM({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HM{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const a=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,a)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gy{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=_h(this.lastLoginAt),this.creationTime=_h(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Lh(n){var e;const t=n.auth,r=await n.getIdToken(),a=await Yi(n,Bm(t,{idToken:r}));se(a==null?void 0:a.users.length,t,"internal-error");const o=a.users[0];n._notifyReloadListener(o);const u=!((e=o.providerUserInfo)===null||e===void 0)&&e.length?VR(o.providerUserInfo):[],d=$M(n.providerData,u),m=n.isAnonymous,p=!(n.email&&o.passwordHash)&&!(d!=null&&d.length),y=m?p:!1,v={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:d,metadata:new Gy(o.createdAt,o.lastLoginAt),isAnonymous:y};Object.assign(n,v)}async function GM(n){const e=Ie(n);await Lh(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function $M(n,e){return[...n.filter(r=>!e.some(a=>a.providerId===r.providerId)),...e]}function VR(n){return n.map(e=>{var{providerId:t}=e,r=Vv(e,["providerId"]);return{providerId:t,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function KM(n,e){const t=await xR(n,{},async()=>{const r=xu({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:a,apiKey:o}=n.config,u=await NR(n,a,"/v1/token",`key=${o}`),d=await n._getAdditionalHeaders();return d["Content-Type"]="application/x-www-form-urlencoded",PR.fetch()(u,{method:"POST",headers:d,body:r})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function QM(n,e){return xt(n,"POST","/v2/accounts:revokeToken",Pt(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ql{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){se(e.idToken,"internal-error"),se(typeof e.idToken<"u","internal-error"),se(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):EI(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){se(e.length!==0,"internal-error");const t=EI(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(se(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:a,expiresIn:o}=await KM(e,t);this.updateTokensAndExpiration(r,a,Number(o))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:a,expirationTime:o}=t,u=new Ql;return r&&(se(typeof r=="string","internal-error",{appName:e}),u.refreshToken=r),a&&(se(typeof a=="string","internal-error",{appName:e}),u.accessToken=a),o&&(se(typeof o=="number","internal-error",{appName:e}),u.expirationTime=o),u}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Ql,this.toJSON())}_performRefresh(){return ii("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qs(n,e){se(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class xr{constructor(e){var{uid:t,auth:r,stsTokenManager:a}=e,o=Vv(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new HM(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=r,this.stsTokenManager=a,this.accessToken=a.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?[...o.providerData]:[],this.metadata=new Gy(o.createdAt||void 0,o.lastLoginAt||void 0)}async getIdToken(e){const t=await Yi(this,this.stsTokenManager.getToken(this.auth,e));return se(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return jM(this,e)}reload(){return GM(this)}_assign(e){this!==e&&(se(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new xr(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){se(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await Lh(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(ft(this.auth.app))return Promise.reject(hn(this.auth));const e=await this.getIdToken();return await Yi(this,zM(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var r,a,o,u,d,m,p,y;const v=(r=t.displayName)!==null&&r!==void 0?r:void 0,w=(a=t.email)!==null&&a!==void 0?a:void 0,S=(o=t.phoneNumber)!==null&&o!==void 0?o:void 0,P=(u=t.photoURL)!==null&&u!==void 0?u:void 0,U=(d=t.tenantId)!==null&&d!==void 0?d:void 0,L=(m=t._redirectEventId)!==null&&m!==void 0?m:void 0,H=(p=t.createdAt)!==null&&p!==void 0?p:void 0,Y=(y=t.lastLoginAt)!==null&&y!==void 0?y:void 0,{uid:$,emailVerified:oe,isAnonymous:ae,providerData:le,stsTokenManager:D}=t;se($&&D,e,"internal-error");const R=Ql.fromJSON(this.name,D);se(typeof $=="string",e,"internal-error"),qs(v,e.name),qs(w,e.name),se(typeof oe=="boolean",e,"internal-error"),se(typeof ae=="boolean",e,"internal-error"),qs(S,e.name),qs(P,e.name),qs(U,e.name),qs(L,e.name),qs(H,e.name),qs(Y,e.name);const A=new xr({uid:$,auth:e,email:w,emailVerified:oe,displayName:v,isAnonymous:ae,photoURL:P,phoneNumber:S,tenantId:U,stsTokenManager:R,createdAt:H,lastLoginAt:Y});return le&&Array.isArray(le)&&(A.providerData=le.map(x=>Object.assign({},x))),L&&(A._redirectEventId=L),A}static async _fromIdTokenResponse(e,t,r=!1){const a=new Ql;a.updateFromServerResponse(t);const o=new xr({uid:t.localId,auth:e,stsTokenManager:a,isAnonymous:r});return await Lh(o),o}static async _fromGetAccountInfoResponse(e,t,r){const a=t.users[0];se(a.localId!==void 0,"internal-error");const o=a.providerUserInfo!==void 0?VR(a.providerUserInfo):[],u=!(a.email&&a.passwordHash)&&!(o!=null&&o.length),d=new Ql;d.updateFromIdToken(r);const m=new xr({uid:a.localId,auth:e,stsTokenManager:d,isAnonymous:u}),p={uid:a.localId,displayName:a.displayName||null,photoURL:a.photoUrl||null,email:a.email||null,emailVerified:a.emailVerified||!1,phoneNumber:a.phoneNumber||null,tenantId:a.tenantId||null,providerData:o,metadata:new Gy(a.createdAt,a.lastLoginAt),isAnonymous:!(a.email&&a.passwordHash)&&!(o!=null&&o.length)};return Object.assign(m,p),m}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TI=new Map;function tr(n){kr(n instanceof Function,"Expected a class definition");let e=TI.get(n);return e?(kr(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,TI.set(n,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MR{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}MR.type="NONE";const ou=MR;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Eo(n,e,t){return`firebase:${n}:${e}:${t}`}class Wl{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:a,name:o}=this.auth;this.fullUserKey=Eo(this.userKey,a.apiKey,o),this.fullPersistenceKey=Eo("persistence",a.apiKey,o),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await Bm(this.auth,{idToken:e}).catch(()=>{});return t?xr._fromGetAccountInfoResponse(this.auth,t,e):null}return xr._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new Wl(tr(ou),e,r);const a=(await Promise.all(t.map(async p=>{if(await p._isAvailable())return p}))).filter(p=>p);let o=a[0]||tr(ou);const u=Eo(r,e.config.apiKey,e.name);let d=null;for(const p of t)try{const y=await p._get(u);if(y){let v;if(typeof y=="string"){const w=await Bm(e,{idToken:y}).catch(()=>{});if(!w)break;v=await xr._fromGetAccountInfoResponse(e,w,y)}else v=xr._fromJSON(e,y);p!==o&&(d=v),o=p;break}}catch{}const m=a.filter(p=>p._shouldAllowMigration);return!o._shouldAllowMigration||!m.length?new Wl(o,e,r):(o=m[0],d&&await o._set(u,d.toJSON()),await Promise.all(t.map(async p=>{if(p!==o)try{await p._remove(u)}catch{}})),new Wl(o,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wI(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(zR(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(LR(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(FR(e))return"Blackberry";if(jR(e))return"Webos";if(UR(e))return"Safari";if((e.includes("chrome/")||BR(e))&&!e.includes("edge/"))return"Chrome";if(ld(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function LR(n=wt()){return/firefox\//i.test(n)}function UR(n=wt()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function BR(n=wt()){return/crios\//i.test(n)}function zR(n=wt()){return/iemobile/i.test(n)}function ld(n=wt()){return/android/i.test(n)}function FR(n=wt()){return/blackberry/i.test(n)}function jR(n=wt()){return/webos/i.test(n)}function ud(n=wt()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function WM(n=wt()){return/(iPad|iPhone|iPod).*OS 7_\d/i.test(n)||/(iPad|iPhone|iPod).*OS 8_\d/i.test(n)}function YM(n=wt()){var e;return ud(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function XM(){return dR()&&document.documentMode===10}function qR(n=wt()){return ud(n)||ld(n)||jR(n)||FR(n)||/windows phone/i.test(n)||zR(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function HR(n,e=[]){let t;switch(n){case"Browser":t=wI(wt());break;case"Worker":t=`${wI(wt())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${ya}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZM{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=o=>new Promise((u,d)=>{try{const m=e(o);u(m)}catch(m){d(m)}});r.onAbort=t,this.queue.push(r);const a=this.queue.length-1;return()=>{this.queue[a]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const a of t)try{a()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function JM(n,e={}){return xt(n,"GET","/v2/passwordPolicy",Pt(n,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const e2=6;class t2{constructor(e){var t,r,a,o;const u=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=u.minPasswordLength)!==null&&t!==void 0?t:e2,u.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=u.maxPasswordLength),u.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=u.containsLowercaseCharacter),u.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=u.containsUppercaseCharacter),u.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=u.containsNumericCharacter),u.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=u.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(a=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&a!==void 0?a:"",this.forceUpgradeOnSignin=(o=e.forceUpgradeOnSignin)!==null&&o!==void 0?o:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,r,a,o,u,d;const m={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,m),this.validatePasswordCharacterOptions(e,m),m.isValid&&(m.isValid=(t=m.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),m.isValid&&(m.isValid=(r=m.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),m.isValid&&(m.isValid=(a=m.containsLowercaseLetter)!==null&&a!==void 0?a:!0),m.isValid&&(m.isValid=(o=m.containsUppercaseLetter)!==null&&o!==void 0?o:!0),m.isValid&&(m.isValid=(u=m.containsNumericCharacter)!==null&&u!==void 0?u:!0),m.isValid&&(m.isValid=(d=m.containsNonAlphanumericCharacter)!==null&&d!==void 0?d:!0),m}validatePasswordLengthOptions(e,t){const r=this.customStrengthOptions.minPasswordLength,a=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),a&&(t.meetsMaxPasswordLength=e.length<=a)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let r;for(let a=0;a<e.length;a++)r=e.charAt(a),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,a,o){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=a)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=o))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n2{constructor(e,t,r,a){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=a,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new bI(this),this.idTokenSubscription=new bI(this),this.beforeStateQueue=new ZM(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=DR,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=a.sdkClientVersion,this._persistenceManagerAvailable=new Promise(o=>this._resolvePersistenceManagerAvailable=o)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=tr(t)),this._initializationPromise=this.queue(async()=>{var r,a,o;if(!this._deleted&&(this.persistenceManager=await Wl.create(this,e),(r=this._resolvePersistenceManagerAvailable)===null||r===void 0||r.call(this),!this._deleted)){if(!((a=this._popupRedirectResolver)===null||a===void 0)&&a._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((o=this.currentUser)===null||o===void 0?void 0:o.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await Bm(this,{idToken:e}),r=await xr._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(r)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(ft(this.app)){const u=this.app.settings.authIdToken;return u?new Promise(d=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(u).then(d,d))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let a=r,o=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const u=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,d=a==null?void 0:a._redirectEventId,m=await this.tryRedirectSignIn(e);(!u||u===d)&&(m!=null&&m.user)&&(a=m.user,o=!0)}if(!a)return this.directlySetCurrentUser(null);if(!a._redirectEventId){if(o)try{await this.beforeStateQueue.runMiddleware(a)}catch(u){a=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(u))}return a?this.reloadAndSetCurrentUserOrClear(a):this.directlySetCurrentUser(null)}return se(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===a._redirectEventId?this.directlySetCurrentUser(a):this.reloadAndSetCurrentUserOrClear(a)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Lh(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=OM()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(ft(this.app))return Promise.reject(hn(this));const t=e?Ie(e):null;return t&&se(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&se(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return ft(this.app)?Promise.reject(hn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return ft(this.app)?Promise.reject(hn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(tr(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await JM(this),t=new t2(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Mo("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(r.tenantId=this.tenantId),await QM(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&tr(e)||this._popupRedirectResolver;se(t,this,"argument-error"),this.redirectPersistenceManager=await Wl.create(this,[tr(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,a){if(this._deleted)return()=>{};const o=typeof t=="function"?t:t.next.bind(t);let u=!1;const d=this._isInitialized?Promise.resolve():this._initializationPromise;if(se(d,this,"internal-error"),d.then(()=>{u||o(this.currentUser)}),typeof t=="function"){const m=e.addObserver(t,r,a);return()=>{u=!0,m()}}else{const m=e.addObserver(t);return()=>{u=!0,m()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return se(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=HR(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(t["X-Firebase-Client"]=r);const a=await this._getAppCheckToken();return a&&(t["X-Firebase-AppCheck"]=a),t}async _getAppCheckToken(){var e;if(ft(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&xM(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function bt(n){return Ie(n)}class bI{constructor(e){this.auth=e,this.observer=null,this.addObserver=mR(t=>this.observer=t)}get next(){return se(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let cd={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function r2(n){cd=n}function eE(n){return cd.loadJS(n)}function i2(){return cd.recaptchaV2Script}function s2(){return cd.recaptchaEnterpriseScript}function a2(){return cd.gapiScript}function GR(n){return`__${n}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const o2=500,l2=6e4,Jf=1e12;class u2{constructor(e){this.auth=e,this.counter=Jf,this._widgets=new Map}render(e,t){const r=this.counter;return this._widgets.set(r,new d2(e,this.auth.name,t||{})),this.counter++,r}reset(e){var t;const r=e||Jf;(t=this._widgets.get(r))===null||t===void 0||t.delete(),this._widgets.delete(r)}getResponse(e){var t;const r=e||Jf;return((t=this._widgets.get(r))===null||t===void 0?void 0:t.getResponse())||""}async execute(e){var t;const r=e||Jf;return(t=this._widgets.get(r))===null||t===void 0||t.execute(),""}}class c2{constructor(){this.enterprise=new h2}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class h2{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class d2{constructor(e,t,r){this.params=r,this.timerId=null,this.deleted=!1,this.responseToken=null,this.clickHandler=()=>{this.execute()};const a=typeof e=="string"?document.getElementById(e):e;se(a,"argument-error",{appName:t}),this.container=a,this.isVisible=this.params.size!=="invisible",this.isVisible?this.execute():this.container.addEventListener("click",this.clickHandler)}getResponse(){return this.checkIfDeleted(),this.responseToken}delete(){this.checkIfDeleted(),this.deleted=!0,this.timerId&&(clearTimeout(this.timerId),this.timerId=null),this.container.removeEventListener("click",this.clickHandler)}execute(){this.checkIfDeleted(),!this.timerId&&(this.timerId=window.setTimeout(()=>{this.responseToken=f2(50);const{callback:e,"expired-callback":t}=this.params;if(e)try{e(this.responseToken)}catch{}this.timerId=window.setTimeout(()=>{if(this.timerId=null,this.responseToken=null,t)try{t()}catch{}this.isVisible&&this.execute()},l2)},o2))}checkIfDeleted(){if(this.deleted)throw new Error("reCAPTCHA mock was already deleted!")}}function f2(n){const e=[],t="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let r=0;r<n;r++)e.push(t.charAt(Math.floor(Math.random()*t.length)));return e.join("")}const m2="recaptcha-enterprise",yh="NO_RECAPTCHA";class $R{constructor(e){this.type=m2,this.auth=bt(e)}async verify(e="verify",t=!1){async function r(o){if(!t){if(o.tenantId==null&&o._agentRecaptchaConfig!=null)return o._agentRecaptchaConfig.siteKey;if(o.tenantId!=null&&o._tenantRecaptchaConfigs[o.tenantId]!==void 0)return o._tenantRecaptchaConfigs[o.tenantId].siteKey}return new Promise(async(u,d)=>{kR(o,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(m=>{if(m.recaptchaKey===void 0)d(new Error("recaptcha Enterprise site key undefined"));else{const p=new OR(m);return o.tenantId==null?o._agentRecaptchaConfig=p:o._tenantRecaptchaConfigs[o.tenantId]=p,u(p.siteKey)}}).catch(m=>{d(m)})})}function a(o,u,d){const m=window.grecaptcha;vI(m)?m.enterprise.ready(()=>{m.enterprise.execute(o,{action:e}).then(p=>{u(p)}).catch(()=>{u(yh)})}):d(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new c2().execute("siteKey",{action:"verify"}):new Promise((o,u)=>{r(this.auth).then(d=>{if(!t&&vI(window.grecaptcha))a(d,o,u);else{if(typeof window>"u"){u(new Error("RecaptchaVerifier is only supported in browser"));return}let m=s2();m.length!==0&&(m+=d),eE(m).then(()=>{a(d,o,u)}).catch(p=>{u(p)})}}).catch(d=>{u(d)})})}}async function eh(n,e,t,r=!1,a=!1){const o=new $R(n);let u;if(a)u=yh;else try{u=await o.verify(t)}catch{u=await o.verify(t,!0)}const d=Object.assign({},e);if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in d){const m=d.phoneEnrollmentInfo.phoneNumber,p=d.phoneEnrollmentInfo.recaptchaToken;Object.assign(d,{phoneEnrollmentInfo:{phoneNumber:m,recaptchaToken:p,captchaResponse:u,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in d){const m=d.phoneSignInInfo.recaptchaToken;Object.assign(d,{phoneSignInInfo:{recaptchaToken:m,captchaResponse:u,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return d}return r?Object.assign(d,{captchaResp:u}):Object.assign(d,{captchaResponse:u}),Object.assign(d,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(d,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),d}async function ta(n,e,t,r,a){var o,u;if(a==="EMAIL_PASSWORD_PROVIDER")if(!((o=n._getRecaptchaConfig())===null||o===void 0)&&o.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const d=await eh(n,e,t,t==="getOobCode");return r(n,d)}else return r(n,e).catch(async d=>{if(d.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const m=await eh(n,e,t,t==="getOobCode");return r(n,m)}else return Promise.reject(d)});else if(a==="PHONE_PROVIDER")if(!((u=n._getRecaptchaConfig())===null||u===void 0)&&u.isProviderEnabled("PHONE_PROVIDER")){const d=await eh(n,e,t);return r(n,d).catch(async m=>{var p;if(((p=n._getRecaptchaConfig())===null||p===void 0?void 0:p.getProviderEnforcementState("PHONE_PROVIDER"))==="AUDIT"&&(m.code==="auth/missing-recaptcha-token"||m.code==="auth/invalid-app-credential")){console.log(`Failed to verify with reCAPTCHA Enterprise. Automatically triggering the reCAPTCHA v2 flow to complete the ${t} flow.`);const y=await eh(n,e,t,!1,!0);return r(n,y)}return Promise.reject(m)})}else{const d=await eh(n,e,t,!1,!0);return r(n,d)}else return Promise.reject(a+" provider is not supported.")}async function p2(n){const e=bt(n),t=await kR(e,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),r=new OR(t);e.tenantId==null?e._agentRecaptchaConfig=r:e._tenantRecaptchaConfigs[e.tenantId]=r,r.isAnyProviderEnabled()&&new $R(e).verify()}function g2(n,e){const t=(e==null?void 0:e.persistence)||[],r=(Array.isArray(t)?t:[t]).map(tr);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function _2(n,e,t){const r=bt(n);se(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const a=!!(t!=null&&t.disableWarnings),o=KR(e),{host:u,port:d}=y2(e),m=d===null?"":`:${d}`,p={url:`${o}//${u}${m}/`},y=Object.freeze({host:u,port:d,protocol:o.replace(":",""),options:Object.freeze({disableWarnings:a})});if(!r._canInitEmulator){se(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),se(sa(p,r.config.emulator)&&sa(y,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=p,r.emulatorConfig=y,r.settings.appVerificationDisabledForTesting=!0,a||v2()}function KR(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function y2(n){const e=KR(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",a=/^(\[[^\]]+\])(:|$)/.exec(r);if(a){const o=a[1];return{host:o,port:II(r.substr(o.length+1))}}else{const[o,u]=r.split(":");return{host:o,port:II(u)}}}function II(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function v2(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ku{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return ii("not implemented")}_getIdTokenResponse(e){return ii("not implemented")}_linkToIdToken(e,t){return ii("not implemented")}_getReauthenticationResolver(e){return ii("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function QR(n,e){return xt(n,"POST","/v1/accounts:resetPassword",Pt(n,e))}async function E2(n,e){return xt(n,"POST","/v1/accounts:update",e)}async function T2(n,e){return xt(n,"POST","/v1/accounts:signUp",e)}async function w2(n,e){return xt(n,"POST","/v1/accounts:update",Pt(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function b2(n,e){return es(n,"POST","/v1/accounts:signInWithPassword",Pt(n,e))}async function Ep(n,e){return xt(n,"POST","/v1/accounts:sendOobCode",Pt(n,e))}async function I2(n,e){return Ep(n,e)}async function A2(n,e){return Ep(n,e)}async function S2(n,e){return Ep(n,e)}async function R2(n,e){return Ep(n,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function C2(n,e){return es(n,"POST","/v1/accounts:signInWithEmailLink",Pt(n,e))}async function D2(n,e){return es(n,"POST","/v1/accounts:signInWithEmailLink",Pt(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uh extends ku{constructor(e,t,r,a=null){super("password",r),this._email=e,this._password=t,this._tenantId=a}static _fromEmailAndPassword(e,t){return new Uh(e,t,"password")}static _fromEmailAndCode(e,t,r=null){return new Uh(e,t,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return ta(e,t,"signInWithPassword",b2,"EMAIL_PASSWORD_PROVIDER");case"emailLink":return C2(e,{email:this._email,oobCode:this._password});default:vn(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const r={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return ta(e,r,"signUpPassword",T2,"EMAIL_PASSWORD_PROVIDER");case"emailLink":return D2(e,{idToken:t,email:this._email,oobCode:this._password});default:vn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ki(n,e){return es(n,"POST","/v1/accounts:signInWithIdp",Pt(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const P2="http://localhost";class hi extends ku{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new hi(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):vn("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:a}=t,o=Vv(t,["providerId","signInMethod"]);if(!r||!a)return null;const u=new hi(r,a);return u.idToken=o.idToken||void 0,u.accessToken=o.accessToken||void 0,u.secret=o.secret,u.nonce=o.nonce,u.pendingToken=o.pendingToken||null,u}_getIdTokenResponse(e){const t=this.buildRequest();return Ki(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,Ki(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Ki(e,t)}buildRequest(){const e={requestUri:P2,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=xu(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function AI(n,e){return xt(n,"POST","/v1/accounts:sendVerificationCode",Pt(n,e))}async function x2(n,e){return es(n,"POST","/v1/accounts:signInWithPhoneNumber",Pt(n,e))}async function N2(n,e){const t=await es(n,"POST","/v1/accounts:signInWithPhoneNumber",Pt(n,e));if(t.temporaryProof)throw ch(n,"account-exists-with-different-credential",t);return t}const O2={USER_NOT_FOUND:"user-not-found"};async function k2(n,e){const t=Object.assign(Object.assign({},e),{operation:"REAUTH"});return es(n,"POST","/v1/accounts:signInWithPhoneNumber",Pt(n,t),O2)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class To extends ku{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,t){return new To({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new To({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return x2(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return N2(e,Object.assign({idToken:t},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return k2(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:t,verificationId:r,verificationCode:a}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:r,code:a}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){typeof e=="string"&&(e=JSON.parse(e));const{verificationId:t,verificationCode:r,phoneNumber:a,temporaryProof:o}=e;return!r&&!t&&!a&&!o?null:new To({verificationId:t,verificationCode:r,phoneNumber:a,temporaryProof:o})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function V2(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function M2(n){const e=$l(uh(n)).link,t=e?$l(uh(e)).deep_link_id:null,r=$l(uh(n)).deep_link_id;return(r?$l(uh(r)).link:null)||r||t||e||n}class Tp{constructor(e){var t,r,a,o,u,d;const m=$l(uh(e)),p=(t=m.apiKey)!==null&&t!==void 0?t:null,y=(r=m.oobCode)!==null&&r!==void 0?r:null,v=V2((a=m.mode)!==null&&a!==void 0?a:null);se(p&&y&&v,"argument-error"),this.apiKey=p,this.operation=v,this.code=y,this.continueUrl=(o=m.continueUrl)!==null&&o!==void 0?o:null,this.languageCode=(u=m.languageCode)!==null&&u!==void 0?u:null,this.tenantId=(d=m.tenantId)!==null&&d!==void 0?d:null}static parseLink(e){const t=M2(e);try{return new Tp(t)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class va{constructor(){this.providerId=va.PROVIDER_ID}static credential(e,t){return Uh._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const r=Tp.parseLink(t);return se(r,"argument-error"),Uh._fromEmailAndCode(e,r.code,r.tenantId)}}va.PROVIDER_ID="password";va.EMAIL_PASSWORD_SIGN_IN_METHOD="password";va.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ts{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vu extends ts{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}class Yl extends Vu{static credentialFromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;return se("providerId"in t&&"signInMethod"in t,"argument-error"),hi._fromParams(t)}credential(e){return this._credential(Object.assign(Object.assign({},e),{nonce:e.rawNonce}))}_credential(e){return se(e.idToken||e.accessToken,"argument-error"),hi._fromParams(Object.assign(Object.assign({},e),{providerId:this.providerId,signInMethod:this.providerId}))}static credentialFromResult(e){return Yl.oauthCredentialFromTaggedObject(e)}static credentialFromError(e){return Yl.oauthCredentialFromTaggedObject(e.customData||{})}static oauthCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r,oauthTokenSecret:a,pendingToken:o,nonce:u,providerId:d}=e;if(!r&&!a&&!t&&!o||!d)return null;try{return new Yl(d)._credential({idToken:t,accessToken:r,nonce:u,pendingToken:o})}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ei extends Vu{constructor(){super("facebook.com")}static credential(e){return hi._fromParams({providerId:ei.PROVIDER_ID,signInMethod:ei.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ei.credentialFromTaggedObject(e)}static credentialFromError(e){return ei.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ei.credential(e.oauthAccessToken)}catch{return null}}}ei.FACEBOOK_SIGN_IN_METHOD="facebook.com";ei.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ti extends Vu{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return hi._fromParams({providerId:ti.PROVIDER_ID,signInMethod:ti.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return ti.credentialFromTaggedObject(e)}static credentialFromError(e){return ti.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return ti.credential(t,r)}catch{return null}}}ti.GOOGLE_SIGN_IN_METHOD="google.com";ti.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ni extends Vu{constructor(){super("github.com")}static credential(e){return hi._fromParams({providerId:ni.PROVIDER_ID,signInMethod:ni.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ni.credentialFromTaggedObject(e)}static credentialFromError(e){return ni.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ni.credential(e.oauthAccessToken)}catch{return null}}}ni.GITHUB_SIGN_IN_METHOD="github.com";ni.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const L2="http://localhost";class lu extends ku{constructor(e,t){super(e,e),this.pendingToken=t}_getIdTokenResponse(e){const t=this.buildRequest();return Ki(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,Ki(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Ki(e,t)}toJSON(){return{signInMethod:this.signInMethod,providerId:this.providerId,pendingToken:this.pendingToken}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:a,pendingToken:o}=t;return!r||!a||!o||r!==a?null:new lu(r,o)}static _create(e,t){return new lu(e,t)}buildRequest(){return{requestUri:L2,returnSecureToken:!0,pendingToken:this.pendingToken}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const U2="saml.";class zm extends ts{constructor(e){se(e.startsWith(U2),"argument-error"),super(e)}static credentialFromResult(e){return zm.samlCredentialFromTaggedObject(e)}static credentialFromError(e){return zm.samlCredentialFromTaggedObject(e.customData||{})}static credentialFromJSON(e){const t=lu.fromJSON(e);return se(t,"argument-error"),t}static samlCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{pendingToken:t,providerId:r}=e;if(!t||!r)return null;try{return lu._create(r,t)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ri extends Vu{constructor(){super("twitter.com")}static credential(e,t){return hi._fromParams({providerId:ri.PROVIDER_ID,signInMethod:ri.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return ri.credentialFromTaggedObject(e)}static credentialFromError(e){return ri.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return ri.credential(t,r)}catch{return null}}}ri.TWITTER_SIGN_IN_METHOD="twitter.com";ri.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function WR(n,e){return es(n,"POST","/v1/accounts:signUp",Pt(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class br{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,a=!1){const o=await xr._fromIdTokenResponse(e,r,a),u=SI(r);return new br({user:o,providerId:u,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const a=SI(r);return new br({user:e,providerId:a,_tokenResponse:r,operationType:t})}}function SI(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function B2(n){var e;if(ft(n.app))return Promise.reject(hn(n));const t=bt(n);if(await t._initializationPromise,!((e=t.currentUser)===null||e===void 0)&&e.isAnonymous)return new br({user:t.currentUser,providerId:null,operationType:"signIn"});const r=await WR(t,{returnSecureToken:!0}),a=await br._fromIdTokenResponse(t,"signIn",r,!0);return await t._updateCurrentUser(a.user),a}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fm extends kn{constructor(e,t,r,a){var o;super(t.code,t.message),this.operationType=r,this.user=a,Object.setPrototypeOf(this,Fm.prototype),this.customData={appName:e.name,tenantId:(o=e.tenantId)!==null&&o!==void 0?o:void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,a){return new Fm(e,t,r,a)}}function YR(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(o=>{throw o.code==="auth/multi-factor-auth-required"?Fm._fromErrorAndOperation(n,o,e,r):o})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function XR(n){return new Set(n.map(({providerId:e})=>e).filter(e=>!!e))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function z2(n,e){const t=Ie(n);await wp(!0,t,e);const{providerUserInfo:r}=await FM(t.auth,{idToken:await t.getIdToken(),deleteProvider:[e]}),a=XR(r||[]);return t.providerData=t.providerData.filter(o=>a.has(o.providerId)),a.has("phone")||(t.phoneNumber=null),await t.auth._persistUserIfCurrent(t),t}async function tE(n,e,t=!1){const r=await Yi(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return br._forOperation(n,"link",r)}async function wp(n,e,t){await Lh(e);const r=XR(e.providerData),a=n===!1?"provider-already-linked":"no-such-provider";se(r.has(t)===n,e.auth,a)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ZR(n,e,t=!1){const{auth:r}=n;if(ft(r.app))return Promise.reject(hn(r));const a="reauthenticate";try{const o=await Yi(n,YR(r,a,e,n),t);se(o.idToken,r,"internal-error");const u=vp(o.idToken);se(u,r,"internal-error");const{sub:d}=u;return se(n.uid===d,r,"user-mismatch"),br._forOperation(n,a,o)}catch(o){throw(o==null?void 0:o.code)==="auth/user-not-found"&&vn(r,"user-mismatch"),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function JR(n,e,t=!1){if(ft(n.app))return Promise.reject(hn(n));const r="signIn",a=await YR(n,r,e),o=await br._fromIdTokenResponse(n,r,a);return t||await n._updateCurrentUser(o.user),o}async function bp(n,e){return JR(bt(n),e)}async function eC(n,e){const t=Ie(n);return await wp(!1,t,e.providerId),tE(t,e)}async function tC(n,e){return ZR(Ie(n),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function F2(n,e){return es(n,"POST","/v1/accounts:signInWithCustomToken",Pt(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function j2(n,e){if(ft(n.app))return Promise.reject(hn(n));const t=bt(n),r=await F2(t,{token:e,returnSecureToken:!0}),a=await br._fromIdTokenResponse(t,"signIn",r);return await t._updateCurrentUser(a.user),a}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hd{constructor(e,t){this.factorId=e,this.uid=t.mfaEnrollmentId,this.enrollmentTime=new Date(t.enrolledAt).toUTCString(),this.displayName=t.displayName}static _fromServerResponse(e,t){return"phoneInfo"in t?nE._fromServerResponse(e,t):"totpInfo"in t?rE._fromServerResponse(e,t):vn(e,"internal-error")}}class nE extends hd{constructor(e){super("phone",e),this.phoneNumber=e.phoneInfo}static _fromServerResponse(e,t){return new nE(t)}}class rE extends hd{constructor(e){super("totp",e)}static _fromServerResponse(e,t){return new rE(t)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ip(n,e,t){var r;se(((r=t.url)===null||r===void 0?void 0:r.length)>0,n,"invalid-continue-uri"),se(typeof t.dynamicLinkDomain>"u"||t.dynamicLinkDomain.length>0,n,"invalid-dynamic-link-domain"),se(typeof t.linkDomain>"u"||t.linkDomain.length>0,n,"invalid-hosting-link-domain"),e.continueUrl=t.url,e.dynamicLinkDomain=t.dynamicLinkDomain,e.linkDomain=t.linkDomain,e.canHandleCodeInApp=t.handleCodeInApp,t.iOS&&(se(t.iOS.bundleId.length>0,n,"missing-ios-bundle-id"),e.iOSBundleId=t.iOS.bundleId),t.android&&(se(t.android.packageName.length>0,n,"missing-android-pkg-name"),e.androidInstallApp=t.android.installApp,e.androidMinimumVersionCode=t.android.minimumVersion,e.androidPackageName=t.android.packageName)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function iE(n){const e=bt(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function q2(n,e,t){const r=bt(n),a={requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"};t&&Ip(r,a,t),await ta(r,a,"getOobCode",A2,"EMAIL_PASSWORD_PROVIDER")}async function H2(n,e,t){await QR(Ie(n),{oobCode:e,newPassword:t}).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&iE(n),r})}async function G2(n,e){await w2(Ie(n),{oobCode:e})}async function nC(n,e){const t=Ie(n),r=await QR(t,{oobCode:e}),a=r.requestType;switch(se(a,t,"internal-error"),a){case"EMAIL_SIGNIN":break;case"VERIFY_AND_CHANGE_EMAIL":se(r.newEmail,t,"internal-error");break;case"REVERT_SECOND_FACTOR_ADDITION":se(r.mfaInfo,t,"internal-error");default:se(r.email,t,"internal-error")}let o=null;return r.mfaInfo&&(o=hd._fromServerResponse(bt(t),r.mfaInfo)),{data:{email:(r.requestType==="VERIFY_AND_CHANGE_EMAIL"?r.newEmail:r.email)||null,previousEmail:(r.requestType==="VERIFY_AND_CHANGE_EMAIL"?r.email:r.newEmail)||null,multiFactorInfo:o},operation:a}}async function $2(n,e){const{data:t}=await nC(Ie(n),e);return t.email}async function K2(n,e,t){if(ft(n.app))return Promise.reject(hn(n));const r=bt(n),u=await ta(r,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",WR,"EMAIL_PASSWORD_PROVIDER").catch(m=>{throw m.code==="auth/password-does-not-meet-requirements"&&iE(n),m}),d=await br._fromIdTokenResponse(r,"signIn",u);return await r._updateCurrentUser(d.user),d}function Q2(n,e,t){return ft(n.app)?Promise.reject(hn(n)):bp(Ie(n),va.credential(e,t)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&iE(n),r})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function W2(n,e,t){const r=bt(n),a={requestType:"EMAIL_SIGNIN",email:e,clientType:"CLIENT_TYPE_WEB"};function o(u,d){se(d.handleCodeInApp,r,"argument-error"),d&&Ip(r,u,d)}o(a,t),await ta(r,a,"getOobCode",S2,"EMAIL_PASSWORD_PROVIDER")}function Y2(n,e){const t=Tp.parseLink(e);return(t==null?void 0:t.operation)==="EMAIL_SIGNIN"}async function X2(n,e,t){if(ft(n.app))return Promise.reject(hn(n));const r=Ie(n),a=va.credentialWithLink(e,t||Mh());return se(a._tenantId===(r.tenantId||null),r,"tenant-id-mismatch"),bp(r,a)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Z2(n,e){return xt(n,"POST","/v1/accounts:createAuthUri",Pt(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function J2(n,e){const t=Zv()?Mh():"http://localhost",r={identifier:e,continueUri:t},{signinMethods:a}=await Z2(Ie(n),r);return a||[]}async function eL(n,e){const t=Ie(n),a={requestType:"VERIFY_EMAIL",idToken:await n.getIdToken()};e&&Ip(t.auth,a,e);const{email:o}=await I2(t.auth,a);o!==n.email&&await n.reload()}async function tL(n,e,t){const r=Ie(n),o={requestType:"VERIFY_AND_CHANGE_EMAIL",idToken:await n.getIdToken(),newEmail:e};t&&Ip(r.auth,o,t);const{email:u}=await R2(r.auth,o);u!==n.email&&await n.reload()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nL(n,e){return xt(n,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rL(n,{displayName:e,photoURL:t}){if(e===void 0&&t===void 0)return;const r=Ie(n),o={idToken:await r.getIdToken(),displayName:e,photoUrl:t,returnSecureToken:!0},u=await Yi(r,nL(r.auth,o));r.displayName=u.displayName||null,r.photoURL=u.photoUrl||null;const d=r.providerData.find(({providerId:m})=>m==="password");d&&(d.displayName=r.displayName,d.photoURL=r.photoURL),await r._updateTokensIfNecessary(u)}function iL(n,e){const t=Ie(n);return ft(t.auth.app)?Promise.reject(hn(t.auth)):rC(t,e,null)}function sL(n,e){return rC(Ie(n),null,e)}async function rC(n,e,t){const{auth:r}=n,o={idToken:await n.getIdToken(),returnSecureToken:!0};e&&(o.email=e),t&&(o.password=t);const u=await Yi(n,E2(r,o));await n._updateTokensIfNecessary(u,!0)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aL(n){var e,t;if(!n)return null;const{providerId:r}=n,a=n.rawUserInfo?JSON.parse(n.rawUserInfo):{},o=n.isNewUser||n.kind==="identitytoolkit#SignupNewUserResponse";if(!r&&(n!=null&&n.idToken)){const u=(t=(e=vp(n.idToken))===null||e===void 0?void 0:e.firebase)===null||t===void 0?void 0:t.sign_in_provider;if(u){const d=u!=="anonymous"&&u!=="custom"?u:null;return new Xl(o,d)}}if(!r)return null;switch(r){case"facebook.com":return new oL(o,a);case"github.com":return new lL(o,a);case"google.com":return new uL(o,a);case"twitter.com":return new cL(o,a,n.screenName||null);case"custom":case"anonymous":return new Xl(o,null);default:return new Xl(o,r,a)}}class Xl{constructor(e,t,r={}){this.isNewUser=e,this.providerId=t,this.profile=r}}class iC extends Xl{constructor(e,t,r,a){super(e,t,r),this.username=a}}class oL extends Xl{constructor(e,t){super(e,"facebook.com",t)}}class lL extends iC{constructor(e,t){super(e,"github.com",t,typeof(t==null?void 0:t.login)=="string"?t==null?void 0:t.login:null)}}class uL extends Xl{constructor(e,t){super(e,"google.com",t)}}class cL extends iC{constructor(e,t,r){super(e,"twitter.com",t,r)}}function hL(n){const{user:e,_tokenResponse:t}=n;return e.isAnonymous&&!t?{providerId:null,isNewUser:!1,profile:null}:aL(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mo{constructor(e,t,r){this.type=e,this.credential=t,this.user=r}static _fromIdtoken(e,t){return new mo("enroll",e,t)}static _fromMfaPendingCredential(e){return new mo("signin",e)}toJSON(){return{multiFactorSession:{[this.type==="enroll"?"idToken":"pendingCredential"]:this.credential}}}static fromJSON(e){var t,r;if(e!=null&&e.multiFactorSession){if(!((t=e.multiFactorSession)===null||t===void 0)&&t.pendingCredential)return mo._fromMfaPendingCredential(e.multiFactorSession.pendingCredential);if(!((r=e.multiFactorSession)===null||r===void 0)&&r.idToken)return mo._fromIdtoken(e.multiFactorSession.idToken)}return null}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sE{constructor(e,t,r){this.session=e,this.hints=t,this.signInResolver=r}static _fromError(e,t){const r=bt(e),a=t.customData._serverResponse,o=(a.mfaInfo||[]).map(d=>hd._fromServerResponse(r,d));se(a.mfaPendingCredential,r,"internal-error");const u=mo._fromMfaPendingCredential(a.mfaPendingCredential);return new sE(u,o,async d=>{const m=await d._process(r,u);delete a.mfaInfo,delete a.mfaPendingCredential;const p=Object.assign(Object.assign({},a),{idToken:m.idToken,refreshToken:m.refreshToken});switch(t.operationType){case"signIn":const y=await br._fromIdTokenResponse(r,t.operationType,p);return await r._updateCurrentUser(y.user),y;case"reauthenticate":return se(t.user,r,"internal-error"),br._forOperation(t.user,t.operationType,p);default:vn(r,"internal-error")}})}async resolveSignIn(e){const t=e;return this.signInResolver(t)}}function dL(n,e){var t;const r=Ie(n),a=e;return se(e.customData.operationType,r,"argument-error"),se((t=a.customData._serverResponse)===null||t===void 0?void 0:t.mfaPendingCredential,r,"argument-error"),sE._fromError(r,a)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function RI(n,e){return xt(n,"POST","/v2/accounts/mfaEnrollment:start",Pt(n,e))}function fL(n,e){return xt(n,"POST","/v2/accounts/mfaEnrollment:finalize",Pt(n,e))}function mL(n,e){return xt(n,"POST","/v2/accounts/mfaEnrollment:withdraw",Pt(n,e))}class aE{constructor(e){this.user=e,this.enrolledFactors=[],e._onReload(t=>{t.mfaInfo&&(this.enrolledFactors=t.mfaInfo.map(r=>hd._fromServerResponse(e.auth,r)))})}static _fromUser(e){return new aE(e)}async getSession(){return mo._fromIdtoken(await this.user.getIdToken(),this.user)}async enroll(e,t){const r=e,a=await this.getSession(),o=await Yi(this.user,r._process(this.user.auth,a,t));return await this.user._updateTokensIfNecessary(o),this.user.reload()}async unenroll(e){const t=typeof e=="string"?e:e.uid,r=await this.user.getIdToken();try{const a=await Yi(this.user,mL(this.user.auth,{idToken:r,mfaEnrollmentId:t}));this.enrolledFactors=this.enrolledFactors.filter(({uid:o})=>o!==t),await this.user._updateTokensIfNecessary(a),await this.user.reload()}catch(a){throw a}}}const vy=new WeakMap;function pL(n){const e=Ie(n);return vy.has(e)||vy.set(e,aE._fromUser(e)),vy.get(e)}const jm="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sC{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(jm,"1"),this.storage.removeItem(jm),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gL=1e3,_L=10;class aC extends sC{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=qR(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),a=this.localCache[t];r!==a&&e(t,a,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((u,d,m)=>{this.notifyListeners(u,m)});return}const r=e.key;t?this.detachListener():this.stopPolling();const a=()=>{const u=this.storage.getItem(r);!t&&this.localCache[r]===u||this.notifyListeners(r,u)},o=this.storage.getItem(r);XM()&&o!==e.newValue&&e.newValue!==e.oldValue?setTimeout(a,_L):a()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const a of Array.from(r))a(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},gL)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}aC.type="LOCAL";const oE=aC;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oC extends sC{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}oC.type="SESSION";const bo=oC;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yL(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ap{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(a=>a.isListeningto(e));if(t)return t;const r=new Ap(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:a,data:o}=t.data,u=this.handlersMap[a];if(!(u!=null&&u.size))return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:a});const d=Array.from(u).map(async p=>p(t.origin,o)),m=await yL(d);t.ports[0].postMessage({status:"done",eventId:r,eventType:a,response:m})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Ap.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dd(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vL{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const a=typeof MessageChannel<"u"?new MessageChannel:null;if(!a)throw new Error("connection_unavailable");let o,u;return new Promise((d,m)=>{const p=dd("",20);a.port1.start();const y=setTimeout(()=>{m(new Error("unsupported_event"))},r);u={messageChannel:a,onMessage(v){const w=v;if(w.data.eventId===p)switch(w.data.status){case"ack":clearTimeout(y),o=setTimeout(()=>{m(new Error("timeout"))},3e3);break;case"done":clearTimeout(o),d(w.data.response);break;default:clearTimeout(y),clearTimeout(o),m(new Error("invalid_response"));break}}},this.handlers.add(u),a.port1.addEventListener("message",u.onMessage),this.target.postMessage({eventType:e,eventId:p,data:t},[a.port2])}).finally(()=>{u&&this.removeMessageHandler(u)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qt(){return window}function EL(n){qt().location.href=n}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lE(){return typeof qt().WorkerGlobalScope<"u"&&typeof qt().importScripts=="function"}async function TL(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function wL(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function bL(){return lE()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lC="firebaseLocalStorageDb",IL=1,qm="firebaseLocalStorage",uC="fbase_key";class fd{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Sp(n,e){return n.transaction([qm],e?"readwrite":"readonly").objectStore(qm)}function AL(){const n=indexedDB.deleteDatabase(lC);return new fd(n).toPromise()}function $y(){const n=indexedDB.open(lC,IL);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(qm,{keyPath:uC})}catch(a){t(a)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(qm)?e(r):(r.close(),await AL(),e(await $y()))})})}async function CI(n,e,t){const r=Sp(n,!0).put({[uC]:e,value:t});return new fd(r).toPromise()}async function SL(n,e){const t=Sp(n,!1).get(e),r=await new fd(t).toPromise();return r===void 0?null:r.value}function DI(n,e){const t=Sp(n,!0).delete(e);return new fd(t).toPromise()}const RL=800,CL=3;class cC{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await $y(),this.db)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>CL)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return lE()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ap._getInstance(bL()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await TL(),!this.activeServiceWorker)return;this.sender=new vL(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((t=r[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||wL()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await $y();return await CI(e,jm,"1"),await DI(e,jm),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>CI(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>SL(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>DI(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(a=>{const o=Sp(a,!1).getAll();return new fd(o).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;if(e.length!==0)for(const{fbase_key:a,value:o}of e)r.add(a),JSON.stringify(this.localCache[a])!==JSON.stringify(o)&&(this.notifyListeners(a,o),t.push(a));for(const a of Object.keys(this.localCache))this.localCache[a]&&!r.has(a)&&(this.notifyListeners(a,null),t.push(a));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const a of Array.from(r))a(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),RL)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}cC.type="LOCAL";const Bh=cC;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function PI(n,e){return xt(n,"POST","/v2/accounts/mfaSignIn:start",Pt(n,e))}function DL(n,e){return xt(n,"POST","/v2/accounts/mfaSignIn:finalize",Pt(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ey=GR("rcb"),PL=new od(3e4,6e4);class xL{constructor(){var e;this.hostLanguage="",this.counter=0,this.librarySeparatelyLoaded=!!(!((e=qt().grecaptcha)===null||e===void 0)&&e.render)}load(e,t=""){return se(NL(t),e,"argument-error"),this.shouldResolveImmediately(t)&&yI(qt().grecaptcha)?Promise.resolve(qt().grecaptcha):new Promise((r,a)=>{const o=qt().setTimeout(()=>{a(Xt(e,"network-request-failed"))},PL.get());qt()[Ey]=()=>{qt().clearTimeout(o),delete qt()[Ey];const d=qt().grecaptcha;if(!d||!yI(d)){a(Xt(e,"internal-error"));return}const m=d.render;d.render=(p,y)=>{const v=m(p,y);return this.counter++,v},this.hostLanguage=t,r(d)};const u=`${i2()}?${xu({onload:Ey,render:"explicit",hl:t})}`;eE(u).catch(()=>{clearTimeout(o),a(Xt(e,"internal-error"))})})}clearedOneInstance(){this.counter--}shouldResolveImmediately(e){var t;return!!(!((t=qt().grecaptcha)===null||t===void 0)&&t.render)&&(e===this.hostLanguage||this.counter>0||this.librarySeparatelyLoaded)}}function NL(n){return n.length<=6&&/^\s*[a-zA-Z0-9\-]*\s*$/.test(n)}class OL{async load(e){return new u2(e)}clearedOneInstance(){}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vh="recaptcha",kL={theme:"light",type:"image"};let VL=class{constructor(e,t,r=Object.assign({},kL)){this.parameters=r,this.type=vh,this.destroyed=!1,this.widgetId=null,this.tokenChangeListeners=new Set,this.renderPromise=null,this.recaptcha=null,this.auth=bt(e),this.isInvisible=this.parameters.size==="invisible",se(typeof document<"u",this.auth,"operation-not-supported-in-this-environment");const a=typeof t=="string"?document.getElementById(t):t;se(a,this.auth,"argument-error"),this.container=a,this.parameters.callback=this.makeTokenCallback(this.parameters.callback),this._recaptchaLoader=this.auth.settings.appVerificationDisabledForTesting?new OL:new xL,this.validateStartingState()}async verify(){this.assertNotDestroyed();const e=await this.render(),t=this.getAssertedRecaptcha(),r=t.getResponse(e);return r||new Promise(a=>{const o=u=>{u&&(this.tokenChangeListeners.delete(o),a(u))};this.tokenChangeListeners.add(o),this.isInvisible&&t.execute(e)})}render(){try{this.assertNotDestroyed()}catch(e){return Promise.reject(e)}return this.renderPromise?this.renderPromise:(this.renderPromise=this.makeRenderPromise().catch(e=>{throw this.renderPromise=null,e}),this.renderPromise)}_reset(){this.assertNotDestroyed(),this.widgetId!==null&&this.getAssertedRecaptcha().reset(this.widgetId)}clear(){this.assertNotDestroyed(),this.destroyed=!0,this._recaptchaLoader.clearedOneInstance(),this.isInvisible||this.container.childNodes.forEach(e=>{this.container.removeChild(e)})}validateStartingState(){se(!this.parameters.sitekey,this.auth,"argument-error"),se(this.isInvisible||!this.container.hasChildNodes(),this.auth,"argument-error"),se(typeof document<"u",this.auth,"operation-not-supported-in-this-environment")}makeTokenCallback(e){return t=>{if(this.tokenChangeListeners.forEach(r=>r(t)),typeof e=="function")e(t);else if(typeof e=="string"){const r=qt()[e];typeof r=="function"&&r(t)}}}assertNotDestroyed(){se(!this.destroyed,this.auth,"internal-error")}async makeRenderPromise(){if(await this.init(),!this.widgetId){let e=this.container;if(!this.isInvisible){const t=document.createElement("div");e.appendChild(t),e=t}this.widgetId=this.getAssertedRecaptcha().render(e,this.parameters)}return this.widgetId}async init(){se(Zv()&&!lE(),this.auth,"internal-error"),await ML(),this.recaptcha=await this._recaptchaLoader.load(this.auth,this.auth.languageCode||void 0);const e=await BM(this.auth);se(e,this.auth,"internal-error"),this.parameters.sitekey=e}getAssertedRecaptcha(){return se(this.recaptcha,this.auth,"internal-error"),this.recaptcha}};function ML(){let n=null;return new Promise(e=>{if(document.readyState==="complete"){e();return}n=()=>e(),window.addEventListener("load",n)}).catch(e=>{throw n&&window.removeEventListener("load",n),e})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uE{constructor(e,t){this.verificationId=e,this.onConfirmation=t}confirm(e){const t=To._fromVerification(this.verificationId,e);return this.onConfirmation(t)}}async function LL(n,e,t){if(ft(n.app))return Promise.reject(hn(n));const r=bt(n),a=await Rp(r,e,Ie(t));return new uE(a,o=>bp(r,o))}async function UL(n,e,t){const r=Ie(n);await wp(!1,r,"phone");const a=await Rp(r.auth,e,Ie(t));return new uE(a,o=>eC(r,o))}async function BL(n,e,t){const r=Ie(n);if(ft(r.auth.app))return Promise.reject(hn(r.auth));const a=await Rp(r.auth,e,Ie(t));return new uE(a,o=>tC(r,o))}async function Rp(n,e,t){var r;if(!n._getRecaptchaConfig())try{await p2(n)}catch{console.log("Failed to initialize reCAPTCHA Enterprise config. Triggering the reCAPTCHA v2 verification.")}try{let a;if(typeof e=="string"?a={phoneNumber:e}:a=e,"session"in a){const o=a.session;if("phoneNumber"in a){se(o.type==="enroll",n,"internal-error");const u={idToken:o.credential,phoneEnrollmentInfo:{phoneNumber:a.phoneNumber,clientType:"CLIENT_TYPE_WEB"}};return(await ta(n,u,"mfaSmsEnrollment",async(y,v)=>{if(v.phoneEnrollmentInfo.captchaResponse===yh){se((t==null?void 0:t.type)===vh,y,"argument-error");const w=await Ty(y,v,t);return RI(y,w)}return RI(y,v)},"PHONE_PROVIDER").catch(y=>Promise.reject(y))).phoneSessionInfo.sessionInfo}else{se(o.type==="signin",n,"internal-error");const u=((r=a.multiFactorHint)===null||r===void 0?void 0:r.uid)||a.multiFactorUid;se(u,n,"missing-multi-factor-info");const d={mfaPendingCredential:o.credential,mfaEnrollmentId:u,phoneSignInInfo:{clientType:"CLIENT_TYPE_WEB"}};return(await ta(n,d,"mfaSmsSignIn",async(v,w)=>{if(w.phoneSignInInfo.captchaResponse===yh){se((t==null?void 0:t.type)===vh,v,"argument-error");const S=await Ty(v,w,t);return PI(v,S)}return PI(v,w)},"PHONE_PROVIDER").catch(v=>Promise.reject(v))).phoneResponseInfo.sessionInfo}}else{const o={phoneNumber:a.phoneNumber,clientType:"CLIENT_TYPE_WEB"};return(await ta(n,o,"sendVerificationCode",async(p,y)=>{if(y.captchaResponse===yh){se((t==null?void 0:t.type)===vh,p,"argument-error");const v=await Ty(p,y,t);return AI(p,v)}return AI(p,y)},"PHONE_PROVIDER").catch(p=>Promise.reject(p))).sessionInfo}}finally{t==null||t._reset()}}async function zL(n,e){const t=Ie(n);if(ft(t.auth.app))return Promise.reject(hn(t.auth));await tE(t,e)}async function Ty(n,e,t){se(t.type===vh,n,"argument-error");const r=await t.verify();se(typeof r=="string",n,"argument-error");const a=Object.assign({},e);if("phoneEnrollmentInfo"in a){const o=a.phoneEnrollmentInfo.phoneNumber,u=a.phoneEnrollmentInfo.captchaResponse,d=a.phoneEnrollmentInfo.clientType,m=a.phoneEnrollmentInfo.recaptchaVersion;return Object.assign(a,{phoneEnrollmentInfo:{phoneNumber:o,recaptchaToken:r,captchaResponse:u,clientType:d,recaptchaVersion:m}}),a}else if("phoneSignInInfo"in a){const o=a.phoneSignInInfo.captchaResponse,u=a.phoneSignInInfo.clientType,d=a.phoneSignInInfo.recaptchaVersion;return Object.assign(a,{phoneSignInInfo:{recaptchaToken:r,captchaResponse:o,clientType:u,recaptchaVersion:d}}),a}else return Object.assign(a,{recaptchaToken:r}),a}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Io=class _m{constructor(e){this.providerId=_m.PROVIDER_ID,this.auth=bt(e)}verifyPhoneNumber(e,t){return Rp(this.auth,e,Ie(t))}static credential(e,t){return To._fromVerification(e,t)}static credentialFromResult(e){const t=e;return _m.credentialFromTaggedObject(t)}static credentialFromError(e){return _m.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:t,temporaryProof:r}=e;return t&&r?To._fromTokenResponse(t,r):null}};Io.PROVIDER_ID="phone";Io.PHONE_SIGN_IN_METHOD="phone";/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lo(n,e){return e?tr(e):(se(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cE extends ku{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Ki(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Ki(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Ki(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function FL(n){return JR(n.auth,new cE(n),n.bypassAuthState)}function jL(n){const{auth:e,user:t}=n;return se(t,e,"internal-error"),ZR(t,new cE(n),n.bypassAuthState)}async function qL(n){const{auth:e,user:t}=n;return se(t,e,"internal-error"),tE(t,new cE(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hC{constructor(e,t,r,a,o=!1){this.auth=e,this.resolver=r,this.user=a,this.bypassAuthState=o,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:a,tenantId:o,error:u,type:d}=e;if(u){this.reject(u);return}const m={auth:this.auth,requestUri:t,sessionId:r,tenantId:o||void 0,postBody:a||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(d)(m))}catch(p){this.reject(p)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return FL;case"linkViaPopup":case"linkViaRedirect":return qL;case"reauthViaPopup":case"reauthViaRedirect":return jL;default:vn(this.auth,"internal-error")}}resolve(e){kr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){kr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HL=new od(2e3,1e4);async function GL(n,e,t){if(ft(n.app))return Promise.reject(Xt(n,"operation-not-supported-in-this-environment"));const r=bt(n);Ou(n,e,ts);const a=Lo(r,t);return new Hi(r,"signInViaPopup",e,a).executeNotNull()}async function $L(n,e,t){const r=Ie(n);if(ft(r.auth.app))return Promise.reject(Xt(r.auth,"operation-not-supported-in-this-environment"));Ou(r.auth,e,ts);const a=Lo(r.auth,t);return new Hi(r.auth,"reauthViaPopup",e,a,r).executeNotNull()}async function KL(n,e,t){const r=Ie(n);Ou(r.auth,e,ts);const a=Lo(r.auth,t);return new Hi(r.auth,"linkViaPopup",e,a,r).executeNotNull()}class Hi extends hC{constructor(e,t,r,a,o){super(e,t,a,o),this.provider=r,this.authWindow=null,this.pollId=null,Hi.currentPopupAction&&Hi.currentPopupAction.cancel(),Hi.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return se(e,this.auth,"internal-error"),e}async onExecution(){kr(this.filter.length===1,"Popup operations only handle one event");const e=dd();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(Xt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Xt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Hi.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,r;if(!((r=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Xt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,HL.get())};e()}}Hi.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QL="pendingRedirect",Eh=new Map;class WL extends hC{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=Eh.get(this.auth._key());if(!e){try{const r=await YL(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}Eh.set(this.auth._key(),e)}return this.bypassAuthState||Eh.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function YL(n,e){const t=fC(e),r=dC(n);if(!await r._isAvailable())return!1;const a=await r._get(t)==="true";return await r._remove(t),a}async function hE(n,e){return dC(n)._set(fC(e),"true")}function XL(){Eh.clear()}function dE(n,e){Eh.set(n._key(),e)}function dC(n){return tr(n._redirectPersistence)}function fC(n){return Eo(QL,n.config.apiKey,n.name)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ZL(n,e,t){return JL(n,e,t)}async function JL(n,e,t){if(ft(n.app))return Promise.reject(hn(n));const r=bt(n);Ou(n,e,ts),await r._initializationPromise;const a=Lo(r,t);return await hE(a,r),a._openRedirect(r,e,"signInViaRedirect")}function eU(n,e,t){return tU(n,e,t)}async function tU(n,e,t){const r=Ie(n);if(Ou(r.auth,e,ts),ft(r.auth.app))return Promise.reject(hn(r.auth));await r.auth._initializationPromise;const a=Lo(r.auth,t);await hE(a,r.auth);const o=await mC(r);return a._openRedirect(r.auth,e,"reauthViaRedirect",o)}function nU(n,e,t){return rU(n,e,t)}async function rU(n,e,t){const r=Ie(n);Ou(r.auth,e,ts),await r.auth._initializationPromise;const a=Lo(r.auth,t);await wp(!1,r,e.providerId),await hE(a,r.auth);const o=await mC(r);return a._openRedirect(r.auth,e,"linkViaRedirect",o)}async function iU(n,e){return await bt(n)._initializationPromise,Cp(n,e,!1)}async function Cp(n,e,t=!1){if(ft(n.app))return Promise.reject(hn(n));const r=bt(n),a=Lo(r,e),u=await new WL(r,a,t).execute();return u&&!t&&(delete u.user._redirectEventId,await r._persistUserIfCurrent(u.user),await r._setRedirectUser(null,e)),u}async function mC(n){const e=dd(`${n.uid}:::`);return n._redirectEventId=e,await n.auth._setRedirectUser(n),await n.auth._persistUserIfCurrent(n),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sU=10*60*1e3;class pC{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!aU(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!gC(e)){const a=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";t.onError(Xt(this.auth,a))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=sU&&this.cachedEventUids.clear(),this.cachedEventUids.has(xI(e))}saveEventToCache(e){this.cachedEventUids.add(xI(e)),this.lastProcessedEventTime=Date.now()}}function xI(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function gC({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function aU(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return gC(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _C(n,e={}){return xt(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oU=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,lU=/^https?/;async function uU(n){if(n.config.emulator)return;const{authorizedDomains:e}=await _C(n);for(const t of e)try{if(cU(t))return}catch{}vn(n,"unauthorized-domain")}function cU(n){const e=Mh(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const u=new URL(n);return u.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&u.hostname===r}if(!lU.test(t))return!1;if(oU.test(n))return r===n;const a=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+a+"|"+a+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hU=new od(3e4,6e4);function NI(){const n=qt().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function dU(n){return new Promise((e,t)=>{var r,a,o;function u(){NI(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{NI(),t(Xt(n,"network-request-failed"))},timeout:hU.get()})}if(!((a=(r=qt().gapi)===null||r===void 0?void 0:r.iframes)===null||a===void 0)&&a.Iframe)e(gapi.iframes.getContext());else if(!((o=qt().gapi)===null||o===void 0)&&o.load)u();else{const d=GR("iframefcb");return qt()[d]=()=>{gapi.load?u():t(Xt(n,"network-request-failed"))},eE(`${a2()}?onload=${d}`).catch(m=>t(m))}}).catch(e=>{throw ym=null,e})}let ym=null;function fU(n){return ym=ym||dU(n),ym}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mU=new od(5e3,15e3),pU="__/auth/iframe",gU="emulator/auth/iframe",_U={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},yU=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function vU(n){const e=n.config;se(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?Jv(e,gU):`https://${n.config.authDomain}/${pU}`,r={apiKey:e.apiKey,appName:n.name,v:ya},a=yU.get(n.config.apiHost);a&&(r.eid=a);const o=n._getFrameworks();return o.length&&(r.fw=o.join(",")),`${t}?${xu(r).slice(1)}`}async function EU(n){const e=await fU(n),t=qt().gapi;return se(t,n,"internal-error"),e.open({where:document.body,url:vU(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:_U,dontclear:!0},r=>new Promise(async(a,o)=>{await r.restyle({setHideOnLeave:!1});const u=Xt(n,"network-request-failed"),d=qt().setTimeout(()=>{o(u)},mU.get());function m(){qt().clearTimeout(d),a(r)}r.ping(m).then(m,()=>{o(u)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TU={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},wU=500,bU=600,IU="_blank",AU="http://localhost";class OI{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function SU(n,e,t,r=wU,a=bU){const o=Math.max((window.screen.availHeight-a)/2,0).toString(),u=Math.max((window.screen.availWidth-r)/2,0).toString();let d="";const m=Object.assign(Object.assign({},TU),{width:r.toString(),height:a.toString(),top:o,left:u}),p=wt().toLowerCase();t&&(d=BR(p)?IU:t),LR(p)&&(e=e||AU,m.scrollbars="yes");const y=Object.entries(m).reduce((w,[S,P])=>`${w}${S}=${P},`,"");if(YM(p)&&d!=="_self")return RU(e||"",d),new OI(null);const v=window.open(e||"",d,y);se(v,n,"popup-blocked");try{v.focus()}catch{}return new OI(v)}function RU(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CU="__/auth/handler",DU="emulator/auth/handler",PU=encodeURIComponent("fac");async function Ky(n,e,t,r,a,o){se(n.config.authDomain,n,"auth-domain-config-required"),se(n.config.apiKey,n,"invalid-api-key");const u={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:ya,eventId:a};if(e instanceof ts){e.setDefaultLanguage(n.languageCode),u.providerId=e.providerId||"",rV(e.getCustomParameters())||(u.customParameters=JSON.stringify(e.getCustomParameters()));for(const[y,v]of Object.entries(o||{}))u[y]=v}if(e instanceof Vu){const y=e.getScopes().filter(v=>v!=="");y.length>0&&(u.scopes=y.join(","))}n.tenantId&&(u.tid=n.tenantId);const d=u;for(const y of Object.keys(d))d[y]===void 0&&delete d[y];const m=await n._getAppCheckToken(),p=m?`#${PU}=${encodeURIComponent(m)}`:"";return`${xU(n)}?${xu(d).slice(1)}${p}`}function xU({config:n}){return n.emulator?Jv(n,DU):`https://${n.authDomain}/${CU}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wy="webStorageSupport";class NU{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=bo,this._completeRedirectFn=Cp,this._overrideRedirectResult=dE}async _openPopup(e,t,r,a){var o;kr((o=this.eventManagers[e._key()])===null||o===void 0?void 0:o.manager,"_initialize() not called before _openPopup()");const u=await Ky(e,t,r,Mh(),a);return SU(e,u,dd())}async _openRedirect(e,t,r,a){await this._originValidation(e);const o=await Ky(e,t,r,Mh(),a);return EL(o),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:a,promise:o}=this.eventManagers[t];return a?Promise.resolve(a):(kr(o,"If manager is not set, promise should be"),o)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await EU(e),r=new pC(e);return t.register("authEvent",a=>(se(a==null?void 0:a.authEvent,e,"invalid-auth-event"),{status:r.onEvent(a.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(wy,{type:wy},a=>{var o;const u=(o=a==null?void 0:a[0])===null||o===void 0?void 0:o[wy];u!==void 0&&t(!!u),vn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=uU(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return qR()||UR()||ud()}}const OU=NU;class kU{constructor(e){this.factorId=e}_process(e,t,r){switch(t.type){case"enroll":return this._finalizeEnroll(e,t.credential,r);case"signin":return this._finalizeSignIn(e,t.credential);default:return ii("unexpected MultiFactorSessionType")}}}class fE extends kU{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new fE(e)}_finalizeEnroll(e,t,r){return fL(e,{idToken:t,displayName:r,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(e,t){return DL(e,{mfaPendingCredential:t,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class yC{constructor(){}static assertion(e){return fE._fromCredential(e)}}yC.FACTOR_ID="phone";var kI="@firebase/auth",VI="1.10.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VU{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){se(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function MU(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function LU(n){la(new ci("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),a=e.getProvider("heartbeat"),o=e.getProvider("app-check-internal"),{apiKey:u,authDomain:d}=r.options;se(u&&!u.includes(":"),"invalid-api-key",{appName:r.name});const m={apiKey:u,authDomain:d,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:HR(n)},p=new n2(r,a,o,m);return g2(p,t),p},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),la(new ci("auth-internal",e=>{const t=bt(e.getProvider("auth").getImmediate());return(r=>new VU(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Or(kI,VI,MU(n)),Or(kI,VI,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UU=5*60;Kk("authIdTokenMaxAge");function BU(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}r2({loadJS(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=a=>{const o=Xt("internal-error");o.customData=a,t(o)},r.type="text/javascript",r.charset="UTF-8",BU().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});LU("Browser");/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ao(){return window}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zU=2e3;async function FU(n,e,t){var r;const{BuildInfo:a}=Ao();kr(e.sessionId,"AuthEvent did not contain a session ID");const o=await $U(e.sessionId),u={};return ud()?u.ibi=a.packageName:ld()?u.apn=a.packageName:vn(n,"operation-not-supported-in-this-environment"),a.displayName&&(u.appDisplayName=a.displayName),u.sessionId=o,Ky(n,t,e.type,void 0,(r=e.eventId)!==null&&r!==void 0?r:void 0,u)}async function jU(n){const{BuildInfo:e}=Ao(),t={};ud()?t.iosBundleId=e.packageName:ld()?t.androidPackageName=e.packageName:vn(n,"operation-not-supported-in-this-environment"),await _C(n,t)}function qU(n){const{cordova:e}=Ao();return new Promise(t=>{e.plugins.browsertab.isAvailable(r=>{let a=null;r?e.plugins.browsertab.openUrl(n):a=e.InAppBrowser.open(n,WM()?"_blank":"_system","location=yes"),t(a)})})}async function HU(n,e,t){const{cordova:r}=Ao();let a=()=>{};try{await new Promise((o,u)=>{let d=null;function m(){var v;o();const w=(v=r.plugins.browsertab)===null||v===void 0?void 0:v.close;typeof w=="function"&&w(),typeof(t==null?void 0:t.close)=="function"&&t.close()}function p(){d||(d=window.setTimeout(()=>{u(Xt(n,"redirect-cancelled-by-user"))},zU))}function y(){(document==null?void 0:document.visibilityState)==="visible"&&p()}e.addPassiveListener(m),document.addEventListener("resume",p,!1),ld()&&document.addEventListener("visibilitychange",y,!1),a=()=>{e.removePassiveListener(m),document.removeEventListener("resume",p,!1),document.removeEventListener("visibilitychange",y,!1),d&&window.clearTimeout(d)}})}finally{a()}}function GU(n){var e,t,r,a,o,u,d,m,p,y;const v=Ao();se(typeof((e=v==null?void 0:v.universalLinks)===null||e===void 0?void 0:e.subscribe)=="function",n,"invalid-cordova-configuration",{missingPlugin:"cordova-universal-links-plugin-fix"}),se(typeof((t=v==null?void 0:v.BuildInfo)===null||t===void 0?void 0:t.packageName)<"u",n,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-buildInfo"}),se(typeof((o=(a=(r=v==null?void 0:v.cordova)===null||r===void 0?void 0:r.plugins)===null||a===void 0?void 0:a.browsertab)===null||o===void 0?void 0:o.openUrl)=="function",n,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),se(typeof((m=(d=(u=v==null?void 0:v.cordova)===null||u===void 0?void 0:u.plugins)===null||d===void 0?void 0:d.browsertab)===null||m===void 0?void 0:m.isAvailable)=="function",n,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),se(typeof((y=(p=v==null?void 0:v.cordova)===null||p===void 0?void 0:p.InAppBrowser)===null||y===void 0?void 0:y.open)=="function",n,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-inappbrowser"})}async function $U(n){const e=KU(n),t=await crypto.subtle.digest("SHA-256",e);return Array.from(new Uint8Array(t)).map(a=>a.toString(16).padStart(2,"0")).join("")}function KU(n){if(kr(/[0-9a-zA-Z]+/.test(n),"Can only convert alpha-numeric strings"),typeof TextEncoder<"u")return new TextEncoder().encode(n);const e=new ArrayBuffer(n.length),t=new Uint8Array(e);for(let r=0;r<n.length;r++)t[r]=n.charCodeAt(r);return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QU=20;class WU extends pC{constructor(){super(...arguments),this.passiveListeners=new Set,this.initPromise=new Promise(e=>{this.resolveInitialized=e})}addPassiveListener(e){this.passiveListeners.add(e)}removePassiveListener(e){this.passiveListeners.delete(e)}resetRedirect(){this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1}onEvent(e){return this.resolveInitialized(),this.passiveListeners.forEach(t=>t(e)),super.onEvent(e)}async initialized(){await this.initPromise}}function YU(n,e,t=null){return{type:e,eventId:t,urlResponse:null,sessionId:JU(),postBody:null,tenantId:n.tenantId,error:Xt(n,"no-auth-event")}}function XU(n,e){return Qy()._set(Wy(n),e)}async function MI(n){const e=await Qy()._get(Wy(n));return e&&await Qy()._remove(Wy(n)),e}function ZU(n,e){var t,r;const a=t4(e);if(a.includes("/__/auth/callback")){const o=vm(a),u=o.firebaseError?e4(decodeURIComponent(o.firebaseError)):null,d=(r=(t=u==null?void 0:u.code)===null||t===void 0?void 0:t.split("auth/"))===null||r===void 0?void 0:r[1],m=d?Xt(d):null;return m?{type:n.type,eventId:n.eventId,tenantId:n.tenantId,error:m,urlResponse:null,sessionId:null,postBody:null}:{type:n.type,eventId:n.eventId,tenantId:n.tenantId,sessionId:n.sessionId,urlResponse:a,postBody:null}}return null}function JU(){const n=[],e="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let t=0;t<QU;t++){const r=Math.floor(Math.random()*e.length);n.push(e.charAt(r))}return n.join("")}function Qy(){return tr(oE)}function Wy(n){return Eo("authEvent",n.config.apiKey,n.name)}function e4(n){try{return JSON.parse(n)}catch{return null}}function t4(n){const e=vm(n),t=e.link?decodeURIComponent(e.link):void 0,r=vm(t).link,a=e.deep_link_id?decodeURIComponent(e.deep_link_id):void 0;return vm(a).link||a||r||t||n}function vm(n){if(!(n!=null&&n.includes("?")))return{};const[e,...t]=n.split("?");return $l(t.join("?"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const n4=500;class r4{constructor(){this._redirectPersistence=bo,this._shouldInitProactively=!0,this.eventManagers=new Map,this.originValidationPromises={},this._completeRedirectFn=Cp,this._overrideRedirectResult=dE}async _initialize(e){const t=e._key();let r=this.eventManagers.get(t);return r||(r=new WU(e),this.eventManagers.set(t,r),this.attachCallbackListeners(e,r)),r}_openPopup(e){vn(e,"operation-not-supported-in-this-environment")}async _openRedirect(e,t,r,a){GU(e);const o=await this._initialize(e);await o.initialized(),o.resetRedirect(),XL(),await this._originValidation(e);const u=YU(e,r,a);await XU(e,u);const d=await FU(e,u,t),m=await qU(d);return HU(e,o,m)}_isIframeWebStorageSupported(e,t){throw new Error("Method not implemented.")}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=jU(e)),this.originValidationPromises[t]}attachCallbackListeners(e,t){const{universalLinks:r,handleOpenURL:a,BuildInfo:o}=Ao(),u=setTimeout(async()=>{await MI(e),t.onEvent(LI())},n4),d=async y=>{clearTimeout(u);const v=await MI(e);let w=null;v&&(y!=null&&y.url)&&(w=ZU(v,y.url)),t.onEvent(w||LI())};typeof r<"u"&&typeof r.subscribe=="function"&&r.subscribe(null,d);const m=a,p=`${o.packageName.toLowerCase()}://`;Ao().handleOpenURL=async y=>{if(y.toLowerCase().startsWith(p)&&d({url:y}),typeof m=="function")try{m(y)}catch(v){console.error(v)}}}}const i4=r4;function LI(){return{type:"unknown",eventId:null,sessionId:null,urlResponse:null,postBody:null,tenantId:null,error:Xt("no-auth-event")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function s4(n,e){bt(n)._logFramework(e)}var a4="@firebase/auth-compat",o4="0.5.20";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const l4=1e3;function Th(){var n;return((n=self==null?void 0:self.location)===null||n===void 0?void 0:n.protocol)||null}function u4(){return Th()==="http:"||Th()==="https:"}function vC(n=wt()){return!!((Th()==="file:"||Th()==="ionic:"||Th()==="capacitor:")&&n.toLowerCase().match(/iphone|ipad|ipod|android/))}function c4(){return Gv()||Hv()}function h4(){return dR()&&(document==null?void 0:document.documentMode)===11}function d4(n=wt()){return/Edge\/\d+/.test(n)}function f4(n=wt()){return h4()||d4(n)}function EC(){try{const n=self.localStorage,e=dd();if(n)return n.setItem(e,"1"),n.removeItem(e),f4()?Oh():!0}catch{return mE()&&Oh()}return!1}function mE(){return typeof global<"u"&&"WorkerGlobalScope"in global&&"importScripts"in global}function by(){return(u4()||hR()||vC())&&!c4()&&EC()&&!mE()}function TC(){return vC()&&typeof document<"u"}async function m4(){return TC()?new Promise(n=>{const e=setTimeout(()=>{n(!1)},l4);document.addEventListener("deviceready",()=>{clearTimeout(e),n(!0)})}):!1}function p4(){return typeof window<"u"?window:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const er={LOCAL:"local",NONE:"none",SESSION:"session"},th=se,wC="persistence";function g4(n,e){if(th(Object.values(er).includes(e),n,"invalid-persistence-type"),Gv()){th(e!==er.SESSION,n,"unsupported-persistence-type");return}if(Hv()){th(e===er.NONE,n,"unsupported-persistence-type");return}if(mE()){th(e===er.NONE||e===er.LOCAL&&Oh(),n,"unsupported-persistence-type");return}th(e===er.NONE||EC(),n,"unsupported-persistence-type")}async function Yy(n){await n._initializationPromise;const e=bC(),t=Eo(wC,n.config.apiKey,n.name);e&&e.setItem(t,n._getPersistenceType())}function _4(n,e){const t=bC();if(!t)return[];const r=Eo(wC,n,e);switch(t.getItem(r)){case er.NONE:return[ou];case er.LOCAL:return[Bh,bo];case er.SESSION:return[bo];default:return[]}}function bC(){var n;try{return((n=p4())===null||n===void 0?void 0:n.sessionStorage)||null}catch{return null}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const y4=se;class Xs{constructor(){this.browserResolver=tr(OU),this.cordovaResolver=tr(i4),this.underlyingResolver=null,this._redirectPersistence=bo,this._completeRedirectFn=Cp,this._overrideRedirectResult=dE}async _initialize(e){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._initialize(e)}async _openPopup(e,t,r,a){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openPopup(e,t,r,a)}async _openRedirect(e,t,r,a){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openRedirect(e,t,r,a)}_isIframeWebStorageSupported(e,t){this.assertedUnderlyingResolver._isIframeWebStorageSupported(e,t)}_originValidation(e){return this.assertedUnderlyingResolver._originValidation(e)}get _shouldInitProactively(){return TC()||this.browserResolver._shouldInitProactively}get assertedUnderlyingResolver(){return y4(this.underlyingResolver,"internal-error"),this.underlyingResolver}async selectUnderlyingResolver(){if(this.underlyingResolver)return;const e=await m4();this.underlyingResolver=e?this.cordovaResolver:this.browserResolver}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function IC(n){return n.unwrap()}function v4(n){return n.wrapped()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function E4(n){return AC(n)}function T4(n,e){var t;const r=(t=e.customData)===null||t===void 0?void 0:t._tokenResponse;if((e==null?void 0:e.code)==="auth/multi-factor-auth-required"){const a=e;a.resolver=new w4(n,dL(n,e))}else if(r){const a=AC(e),o=e;a&&(o.credential=a,o.tenantId=r.tenantId||void 0,o.email=r.email||void 0,o.phoneNumber=r.phoneNumber||void 0)}}function AC(n){const{_tokenResponse:e}=n instanceof kn?n.customData:n;if(!e)return null;if(!(n instanceof kn)&&"temporaryProof"in e&&"phoneNumber"in e)return Io.credentialFromResult(n);const t=e.providerId;if(!t||t===Jc.PASSWORD)return null;let r;switch(t){case Jc.GOOGLE:r=ti;break;case Jc.FACEBOOK:r=ei;break;case Jc.GITHUB:r=ni;break;case Jc.TWITTER:r=ri;break;default:const{oauthIdToken:a,oauthAccessToken:o,oauthTokenSecret:u,pendingToken:d,nonce:m}=e;return!o&&!u&&!a&&!d?null:d?t.startsWith("saml.")?lu._create(t,d):hi._fromParams({providerId:t,signInMethod:t,pendingToken:d,idToken:a,accessToken:o}):new Yl(t).credential({idToken:a,accessToken:o,rawNonce:m})}return n instanceof kn?r.credentialFromError(n):r.credentialFromResult(n)}function zn(n,e){return e.catch(t=>{throw t instanceof kn&&T4(n,t),t}).then(t=>{const r=t.operationType,a=t.user;return{operationType:r,credential:E4(t),additionalUserInfo:hL(t),user:Dp.getOrCreate(a)}})}async function Xy(n,e){const t=await e;return{verificationId:t.verificationId,confirm:r=>zn(n,t.confirm(r))}}class w4{constructor(e,t){this.resolver=t,this.auth=v4(e)}get session(){return this.resolver.session}get hints(){return this.resolver.hints}resolveSignIn(e){return zn(IC(this.auth),this.resolver.resolveSignIn(e))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Dp=class hh{constructor(e){this._delegate=e,this.multiFactor=pL(e)}static getOrCreate(e){return hh.USER_MAP.has(e)||hh.USER_MAP.set(e,new hh(e)),hh.USER_MAP.get(e)}delete(){return this._delegate.delete()}reload(){return this._delegate.reload()}toJSON(){return this._delegate.toJSON()}getIdTokenResult(e){return this._delegate.getIdTokenResult(e)}getIdToken(e){return this._delegate.getIdToken(e)}linkAndRetrieveDataWithCredential(e){return this.linkWithCredential(e)}async linkWithCredential(e){return zn(this.auth,eC(this._delegate,e))}async linkWithPhoneNumber(e,t){return Xy(this.auth,UL(this._delegate,e,t))}async linkWithPopup(e){return zn(this.auth,KL(this._delegate,e,Xs))}async linkWithRedirect(e){return await Yy(bt(this.auth)),nU(this._delegate,e,Xs)}reauthenticateAndRetrieveDataWithCredential(e){return this.reauthenticateWithCredential(e)}async reauthenticateWithCredential(e){return zn(this.auth,tC(this._delegate,e))}reauthenticateWithPhoneNumber(e,t){return Xy(this.auth,BL(this._delegate,e,t))}reauthenticateWithPopup(e){return zn(this.auth,$L(this._delegate,e,Xs))}async reauthenticateWithRedirect(e){return await Yy(bt(this.auth)),eU(this._delegate,e,Xs)}sendEmailVerification(e){return eL(this._delegate,e)}async unlink(e){return await z2(this._delegate,e),this}updateEmail(e){return iL(this._delegate,e)}updatePassword(e){return sL(this._delegate,e)}updatePhoneNumber(e){return zL(this._delegate,e)}updateProfile(e){return rL(this._delegate,e)}verifyBeforeUpdateEmail(e,t){return tL(this._delegate,e,t)}get emailVerified(){return this._delegate.emailVerified}get isAnonymous(){return this._delegate.isAnonymous}get metadata(){return this._delegate.metadata}get phoneNumber(){return this._delegate.phoneNumber}get providerData(){return this._delegate.providerData}get refreshToken(){return this._delegate.refreshToken}get tenantId(){return this._delegate.tenantId}get displayName(){return this._delegate.displayName}get email(){return this._delegate.email}get photoURL(){return this._delegate.photoURL}get providerId(){return this._delegate.providerId}get uid(){return this._delegate.uid}get auth(){return this._delegate.auth}};Dp.USER_MAP=new WeakMap;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nh=se;class Zy{constructor(e,t){if(this.app=e,t.isInitialized()){this._delegate=t.getImmediate(),this.linkUnderlyingAuth();return}const{apiKey:r}=e.options;nh(r,"invalid-api-key",{appName:e.name}),nh(r,"invalid-api-key",{appName:e.name});const a=typeof window<"u"?Xs:void 0;this._delegate=t.initialize({options:{persistence:b4(r,e.name),popupRedirectResolver:a}}),this._delegate._updateErrorMap(DM),this.linkUnderlyingAuth()}get emulatorConfig(){return this._delegate.emulatorConfig}get currentUser(){return this._delegate.currentUser?Dp.getOrCreate(this._delegate.currentUser):null}get languageCode(){return this._delegate.languageCode}set languageCode(e){this._delegate.languageCode=e}get settings(){return this._delegate.settings}get tenantId(){return this._delegate.tenantId}set tenantId(e){this._delegate.tenantId=e}useDeviceLanguage(){this._delegate.useDeviceLanguage()}signOut(){return this._delegate.signOut()}useEmulator(e,t){_2(this._delegate,e,t)}applyActionCode(e){return G2(this._delegate,e)}checkActionCode(e){return nC(this._delegate,e)}confirmPasswordReset(e,t){return H2(this._delegate,e,t)}async createUserWithEmailAndPassword(e,t){return zn(this._delegate,K2(this._delegate,e,t))}fetchProvidersForEmail(e){return this.fetchSignInMethodsForEmail(e)}fetchSignInMethodsForEmail(e){return J2(this._delegate,e)}isSignInWithEmailLink(e){return Y2(this._delegate,e)}async getRedirectResult(){nh(by(),this._delegate,"operation-not-supported-in-this-environment");const e=await iU(this._delegate,Xs);return e?zn(this._delegate,Promise.resolve(e)):{credential:null,user:null}}addFrameworkForLogging(e){s4(this._delegate,e)}onAuthStateChanged(e,t,r){const{next:a,error:o,complete:u}=UI(e,t,r);return this._delegate.onAuthStateChanged(a,o,u)}onIdTokenChanged(e,t,r){const{next:a,error:o,complete:u}=UI(e,t,r);return this._delegate.onIdTokenChanged(a,o,u)}sendSignInLinkToEmail(e,t){return W2(this._delegate,e,t)}sendPasswordResetEmail(e,t){return q2(this._delegate,e,t||void 0)}async setPersistence(e){g4(this._delegate,e);let t;switch(e){case er.SESSION:t=bo;break;case er.LOCAL:t=await tr(Bh)._isAvailable()?Bh:oE;break;case er.NONE:t=ou;break;default:return vn("argument-error",{appName:this._delegate.name})}return this._delegate.setPersistence(t)}signInAndRetrieveDataWithCredential(e){return this.signInWithCredential(e)}signInAnonymously(){return zn(this._delegate,B2(this._delegate))}signInWithCredential(e){return zn(this._delegate,bp(this._delegate,e))}signInWithCustomToken(e){return zn(this._delegate,j2(this._delegate,e))}signInWithEmailAndPassword(e,t){return zn(this._delegate,Q2(this._delegate,e,t))}signInWithEmailLink(e,t){return zn(this._delegate,X2(this._delegate,e,t))}signInWithPhoneNumber(e,t){return Xy(this._delegate,LL(this._delegate,e,t))}async signInWithPopup(e){return nh(by(),this._delegate,"operation-not-supported-in-this-environment"),zn(this._delegate,GL(this._delegate,e,Xs))}async signInWithRedirect(e){return nh(by(),this._delegate,"operation-not-supported-in-this-environment"),await Yy(this._delegate),ZL(this._delegate,e,Xs)}updateCurrentUser(e){return this._delegate.updateCurrentUser(e)}verifyPasswordResetCode(e){return $2(this._delegate,e)}unwrap(){return this._delegate}_delete(){return this._delegate._delete()}linkUnderlyingAuth(){this._delegate.wrapped=()=>this}}Zy.Persistence=er;function UI(n,e,t){let r=n;typeof n!="function"&&({next:r,error:e,complete:t}=n);const a=r;return{next:u=>a(u&&Dp.getOrCreate(u)),error:e,complete:t}}function b4(n,e){const t=_4(n,e);if(typeof self<"u"&&!t.includes(Bh)&&t.push(Bh),typeof window<"u")for(const r of[oE,bo])t.includes(r)||t.push(r);return t.includes(ou)||t.push(ou),t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pE{static credential(e,t){return Io.credential(e,t)}constructor(){this.providerId="phone",this._delegate=new Io(IC(Nu.auth()))}verifyPhoneNumber(e,t){return this._delegate.verifyPhoneNumber(e,t)}unwrap(){return this._delegate}}pE.PHONE_SIGN_IN_METHOD=Io.PHONE_SIGN_IN_METHOD;pE.PROVIDER_ID=Io.PROVIDER_ID;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const I4=se;class A4{constructor(e,t,r=Nu.app()){var a;I4((a=r.options)===null||a===void 0?void 0:a.apiKey,"invalid-api-key",{appName:r.name}),this._delegate=new VL(r.auth(),e,t),this.type=this._delegate.type}clear(){this._delegate.clear()}render(){return this._delegate.render()}verify(){return this._delegate.verify()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const S4="auth-compat";function R4(n){n.INTERNAL.registerComponent(new ci(S4,e=>{const t=e.getProvider("app-compat").getImmediate(),r=e.getProvider("auth");return new Zy(t,r)},"PUBLIC").setServiceProps({ActionCodeInfo:{Operation:{EMAIL_SIGNIN:Ol.EMAIL_SIGNIN,PASSWORD_RESET:Ol.PASSWORD_RESET,RECOVER_EMAIL:Ol.RECOVER_EMAIL,REVERT_SECOND_FACTOR_ADDITION:Ol.REVERT_SECOND_FACTOR_ADDITION,VERIFY_AND_CHANGE_EMAIL:Ol.VERIFY_AND_CHANGE_EMAIL,VERIFY_EMAIL:Ol.VERIFY_EMAIL}},EmailAuthProvider:va,FacebookAuthProvider:ei,GithubAuthProvider:ni,GoogleAuthProvider:ti,OAuthProvider:Yl,SAMLAuthProvider:zm,PhoneAuthProvider:pE,PhoneMultiFactorGenerator:yC,RecaptchaVerifier:A4,TwitterAuthProvider:ri,Auth:Zy,AuthCredential:ku,Error:kn}).setInstantiationMode("LAZY").setMultipleInstances(!1)),n.registerVersion(a4,o4)}R4(Nu);var BI=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var na,SC;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(D,R){function A(){}A.prototype=R.prototype,D.D=R.prototype,D.prototype=new A,D.prototype.constructor=D,D.C=function(x,V,z){for(var N=Array(arguments.length-2),Nt=2;Nt<arguments.length;Nt++)N[Nt-2]=arguments[Nt];return R.prototype[V].apply(x,N)}}function t(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,t),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function a(D,R,A){A||(A=0);var x=Array(16);if(typeof R=="string")for(var V=0;16>V;++V)x[V]=R.charCodeAt(A++)|R.charCodeAt(A++)<<8|R.charCodeAt(A++)<<16|R.charCodeAt(A++)<<24;else for(V=0;16>V;++V)x[V]=R[A++]|R[A++]<<8|R[A++]<<16|R[A++]<<24;R=D.g[0],A=D.g[1],V=D.g[2];var z=D.g[3],N=R+(z^A&(V^z))+x[0]+3614090360&4294967295;R=A+(N<<7&4294967295|N>>>25),N=z+(V^R&(A^V))+x[1]+3905402710&4294967295,z=R+(N<<12&4294967295|N>>>20),N=V+(A^z&(R^A))+x[2]+606105819&4294967295,V=z+(N<<17&4294967295|N>>>15),N=A+(R^V&(z^R))+x[3]+3250441966&4294967295,A=V+(N<<22&4294967295|N>>>10),N=R+(z^A&(V^z))+x[4]+4118548399&4294967295,R=A+(N<<7&4294967295|N>>>25),N=z+(V^R&(A^V))+x[5]+1200080426&4294967295,z=R+(N<<12&4294967295|N>>>20),N=V+(A^z&(R^A))+x[6]+2821735955&4294967295,V=z+(N<<17&4294967295|N>>>15),N=A+(R^V&(z^R))+x[7]+4249261313&4294967295,A=V+(N<<22&4294967295|N>>>10),N=R+(z^A&(V^z))+x[8]+1770035416&4294967295,R=A+(N<<7&4294967295|N>>>25),N=z+(V^R&(A^V))+x[9]+2336552879&4294967295,z=R+(N<<12&4294967295|N>>>20),N=V+(A^z&(R^A))+x[10]+4294925233&4294967295,V=z+(N<<17&4294967295|N>>>15),N=A+(R^V&(z^R))+x[11]+2304563134&4294967295,A=V+(N<<22&4294967295|N>>>10),N=R+(z^A&(V^z))+x[12]+1804603682&4294967295,R=A+(N<<7&4294967295|N>>>25),N=z+(V^R&(A^V))+x[13]+4254626195&4294967295,z=R+(N<<12&4294967295|N>>>20),N=V+(A^z&(R^A))+x[14]+2792965006&4294967295,V=z+(N<<17&4294967295|N>>>15),N=A+(R^V&(z^R))+x[15]+1236535329&4294967295,A=V+(N<<22&4294967295|N>>>10),N=R+(V^z&(A^V))+x[1]+4129170786&4294967295,R=A+(N<<5&4294967295|N>>>27),N=z+(A^V&(R^A))+x[6]+3225465664&4294967295,z=R+(N<<9&4294967295|N>>>23),N=V+(R^A&(z^R))+x[11]+643717713&4294967295,V=z+(N<<14&4294967295|N>>>18),N=A+(z^R&(V^z))+x[0]+3921069994&4294967295,A=V+(N<<20&4294967295|N>>>12),N=R+(V^z&(A^V))+x[5]+3593408605&4294967295,R=A+(N<<5&4294967295|N>>>27),N=z+(A^V&(R^A))+x[10]+38016083&4294967295,z=R+(N<<9&4294967295|N>>>23),N=V+(R^A&(z^R))+x[15]+3634488961&4294967295,V=z+(N<<14&4294967295|N>>>18),N=A+(z^R&(V^z))+x[4]+3889429448&4294967295,A=V+(N<<20&4294967295|N>>>12),N=R+(V^z&(A^V))+x[9]+568446438&4294967295,R=A+(N<<5&4294967295|N>>>27),N=z+(A^V&(R^A))+x[14]+3275163606&4294967295,z=R+(N<<9&4294967295|N>>>23),N=V+(R^A&(z^R))+x[3]+4107603335&4294967295,V=z+(N<<14&4294967295|N>>>18),N=A+(z^R&(V^z))+x[8]+1163531501&4294967295,A=V+(N<<20&4294967295|N>>>12),N=R+(V^z&(A^V))+x[13]+2850285829&4294967295,R=A+(N<<5&4294967295|N>>>27),N=z+(A^V&(R^A))+x[2]+4243563512&4294967295,z=R+(N<<9&4294967295|N>>>23),N=V+(R^A&(z^R))+x[7]+1735328473&4294967295,V=z+(N<<14&4294967295|N>>>18),N=A+(z^R&(V^z))+x[12]+2368359562&4294967295,A=V+(N<<20&4294967295|N>>>12),N=R+(A^V^z)+x[5]+4294588738&4294967295,R=A+(N<<4&4294967295|N>>>28),N=z+(R^A^V)+x[8]+2272392833&4294967295,z=R+(N<<11&4294967295|N>>>21),N=V+(z^R^A)+x[11]+1839030562&4294967295,V=z+(N<<16&4294967295|N>>>16),N=A+(V^z^R)+x[14]+4259657740&4294967295,A=V+(N<<23&4294967295|N>>>9),N=R+(A^V^z)+x[1]+2763975236&4294967295,R=A+(N<<4&4294967295|N>>>28),N=z+(R^A^V)+x[4]+1272893353&4294967295,z=R+(N<<11&4294967295|N>>>21),N=V+(z^R^A)+x[7]+4139469664&4294967295,V=z+(N<<16&4294967295|N>>>16),N=A+(V^z^R)+x[10]+3200236656&4294967295,A=V+(N<<23&4294967295|N>>>9),N=R+(A^V^z)+x[13]+681279174&4294967295,R=A+(N<<4&4294967295|N>>>28),N=z+(R^A^V)+x[0]+3936430074&4294967295,z=R+(N<<11&4294967295|N>>>21),N=V+(z^R^A)+x[3]+3572445317&4294967295,V=z+(N<<16&4294967295|N>>>16),N=A+(V^z^R)+x[6]+76029189&4294967295,A=V+(N<<23&4294967295|N>>>9),N=R+(A^V^z)+x[9]+3654602809&4294967295,R=A+(N<<4&4294967295|N>>>28),N=z+(R^A^V)+x[12]+3873151461&4294967295,z=R+(N<<11&4294967295|N>>>21),N=V+(z^R^A)+x[15]+530742520&4294967295,V=z+(N<<16&4294967295|N>>>16),N=A+(V^z^R)+x[2]+3299628645&4294967295,A=V+(N<<23&4294967295|N>>>9),N=R+(V^(A|~z))+x[0]+4096336452&4294967295,R=A+(N<<6&4294967295|N>>>26),N=z+(A^(R|~V))+x[7]+1126891415&4294967295,z=R+(N<<10&4294967295|N>>>22),N=V+(R^(z|~A))+x[14]+2878612391&4294967295,V=z+(N<<15&4294967295|N>>>17),N=A+(z^(V|~R))+x[5]+4237533241&4294967295,A=V+(N<<21&4294967295|N>>>11),N=R+(V^(A|~z))+x[12]+1700485571&4294967295,R=A+(N<<6&4294967295|N>>>26),N=z+(A^(R|~V))+x[3]+2399980690&4294967295,z=R+(N<<10&4294967295|N>>>22),N=V+(R^(z|~A))+x[10]+4293915773&4294967295,V=z+(N<<15&4294967295|N>>>17),N=A+(z^(V|~R))+x[1]+2240044497&4294967295,A=V+(N<<21&4294967295|N>>>11),N=R+(V^(A|~z))+x[8]+1873313359&4294967295,R=A+(N<<6&4294967295|N>>>26),N=z+(A^(R|~V))+x[15]+4264355552&4294967295,z=R+(N<<10&4294967295|N>>>22),N=V+(R^(z|~A))+x[6]+2734768916&4294967295,V=z+(N<<15&4294967295|N>>>17),N=A+(z^(V|~R))+x[13]+1309151649&4294967295,A=V+(N<<21&4294967295|N>>>11),N=R+(V^(A|~z))+x[4]+4149444226&4294967295,R=A+(N<<6&4294967295|N>>>26),N=z+(A^(R|~V))+x[11]+3174756917&4294967295,z=R+(N<<10&4294967295|N>>>22),N=V+(R^(z|~A))+x[2]+718787259&4294967295,V=z+(N<<15&4294967295|N>>>17),N=A+(z^(V|~R))+x[9]+3951481745&4294967295,D.g[0]=D.g[0]+R&4294967295,D.g[1]=D.g[1]+(V+(N<<21&4294967295|N>>>11))&4294967295,D.g[2]=D.g[2]+V&4294967295,D.g[3]=D.g[3]+z&4294967295}r.prototype.u=function(D,R){R===void 0&&(R=D.length);for(var A=R-this.blockSize,x=this.B,V=this.h,z=0;z<R;){if(V==0)for(;z<=A;)a(this,D,z),z+=this.blockSize;if(typeof D=="string"){for(;z<R;)if(x[V++]=D.charCodeAt(z++),V==this.blockSize){a(this,x),V=0;break}}else for(;z<R;)if(x[V++]=D[z++],V==this.blockSize){a(this,x),V=0;break}}this.h=V,this.o+=R},r.prototype.v=function(){var D=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);D[0]=128;for(var R=1;R<D.length-8;++R)D[R]=0;var A=8*this.o;for(R=D.length-8;R<D.length;++R)D[R]=A&255,A/=256;for(this.u(D),D=Array(16),R=A=0;4>R;++R)for(var x=0;32>x;x+=8)D[A++]=this.g[R]>>>x&255;return D};function o(D,R){var A=d;return Object.prototype.hasOwnProperty.call(A,D)?A[D]:A[D]=R(D)}function u(D,R){this.h=R;for(var A=[],x=!0,V=D.length-1;0<=V;V--){var z=D[V]|0;x&&z==R||(A[V]=z,x=!1)}this.g=A}var d={};function m(D){return-128<=D&&128>D?o(D,function(R){return new u([R|0],0>R?-1:0)}):new u([D|0],0>D?-1:0)}function p(D){if(isNaN(D)||!isFinite(D))return v;if(0>D)return L(p(-D));for(var R=[],A=1,x=0;D>=A;x++)R[x]=D/A|0,A*=4294967296;return new u(R,0)}function y(D,R){if(D.length==0)throw Error("number format error: empty string");if(R=R||10,2>R||36<R)throw Error("radix out of range: "+R);if(D.charAt(0)=="-")return L(y(D.substring(1),R));if(0<=D.indexOf("-"))throw Error('number format error: interior "-" character');for(var A=p(Math.pow(R,8)),x=v,V=0;V<D.length;V+=8){var z=Math.min(8,D.length-V),N=parseInt(D.substring(V,V+z),R);8>z?(z=p(Math.pow(R,z)),x=x.j(z).add(p(N))):(x=x.j(A),x=x.add(p(N)))}return x}var v=m(0),w=m(1),S=m(16777216);n=u.prototype,n.m=function(){if(U(this))return-L(this).m();for(var D=0,R=1,A=0;A<this.g.length;A++){var x=this.i(A);D+=(0<=x?x:4294967296+x)*R,R*=4294967296}return D},n.toString=function(D){if(D=D||10,2>D||36<D)throw Error("radix out of range: "+D);if(P(this))return"0";if(U(this))return"-"+L(this).toString(D);for(var R=p(Math.pow(D,6)),A=this,x="";;){var V=oe(A,R).g;A=H(A,V.j(R));var z=((0<A.g.length?A.g[0]:A.h)>>>0).toString(D);if(A=V,P(A))return z+x;for(;6>z.length;)z="0"+z;x=z+x}},n.i=function(D){return 0>D?0:D<this.g.length?this.g[D]:this.h};function P(D){if(D.h!=0)return!1;for(var R=0;R<D.g.length;R++)if(D.g[R]!=0)return!1;return!0}function U(D){return D.h==-1}n.l=function(D){return D=H(this,D),U(D)?-1:P(D)?0:1};function L(D){for(var R=D.g.length,A=[],x=0;x<R;x++)A[x]=~D.g[x];return new u(A,~D.h).add(w)}n.abs=function(){return U(this)?L(this):this},n.add=function(D){for(var R=Math.max(this.g.length,D.g.length),A=[],x=0,V=0;V<=R;V++){var z=x+(this.i(V)&65535)+(D.i(V)&65535),N=(z>>>16)+(this.i(V)>>>16)+(D.i(V)>>>16);x=N>>>16,z&=65535,N&=65535,A[V]=N<<16|z}return new u(A,A[A.length-1]&-2147483648?-1:0)};function H(D,R){return D.add(L(R))}n.j=function(D){if(P(this)||P(D))return v;if(U(this))return U(D)?L(this).j(L(D)):L(L(this).j(D));if(U(D))return L(this.j(L(D)));if(0>this.l(S)&&0>D.l(S))return p(this.m()*D.m());for(var R=this.g.length+D.g.length,A=[],x=0;x<2*R;x++)A[x]=0;for(x=0;x<this.g.length;x++)for(var V=0;V<D.g.length;V++){var z=this.i(x)>>>16,N=this.i(x)&65535,Nt=D.i(V)>>>16,It=D.i(V)&65535;A[2*x+2*V]+=N*It,Y(A,2*x+2*V),A[2*x+2*V+1]+=z*It,Y(A,2*x+2*V+1),A[2*x+2*V+1]+=N*Nt,Y(A,2*x+2*V+1),A[2*x+2*V+2]+=z*Nt,Y(A,2*x+2*V+2)}for(x=0;x<R;x++)A[x]=A[2*x+1]<<16|A[2*x];for(x=R;x<2*R;x++)A[x]=0;return new u(A,0)};function Y(D,R){for(;(D[R]&65535)!=D[R];)D[R+1]+=D[R]>>>16,D[R]&=65535,R++}function $(D,R){this.g=D,this.h=R}function oe(D,R){if(P(R))throw Error("division by zero");if(P(D))return new $(v,v);if(U(D))return R=oe(L(D),R),new $(L(R.g),L(R.h));if(U(R))return R=oe(D,L(R)),new $(L(R.g),R.h);if(30<D.g.length){if(U(D)||U(R))throw Error("slowDivide_ only works with positive integers.");for(var A=w,x=R;0>=x.l(D);)A=ae(A),x=ae(x);var V=le(A,1),z=le(x,1);for(x=le(x,2),A=le(A,2);!P(x);){var N=z.add(x);0>=N.l(D)&&(V=V.add(A),z=N),x=le(x,1),A=le(A,1)}return R=H(D,V.j(R)),new $(V,R)}for(V=v;0<=D.l(R);){for(A=Math.max(1,Math.floor(D.m()/R.m())),x=Math.ceil(Math.log(A)/Math.LN2),x=48>=x?1:Math.pow(2,x-48),z=p(A),N=z.j(R);U(N)||0<N.l(D);)A-=x,z=p(A),N=z.j(R);P(z)&&(z=w),V=V.add(z),D=H(D,N)}return new $(V,D)}n.A=function(D){return oe(this,D).h},n.and=function(D){for(var R=Math.max(this.g.length,D.g.length),A=[],x=0;x<R;x++)A[x]=this.i(x)&D.i(x);return new u(A,this.h&D.h)},n.or=function(D){for(var R=Math.max(this.g.length,D.g.length),A=[],x=0;x<R;x++)A[x]=this.i(x)|D.i(x);return new u(A,this.h|D.h)},n.xor=function(D){for(var R=Math.max(this.g.length,D.g.length),A=[],x=0;x<R;x++)A[x]=this.i(x)^D.i(x);return new u(A,this.h^D.h)};function ae(D){for(var R=D.g.length+1,A=[],x=0;x<R;x++)A[x]=D.i(x)<<1|D.i(x-1)>>>31;return new u(A,D.h)}function le(D,R){var A=R>>5;R%=32;for(var x=D.g.length-A,V=[],z=0;z<x;z++)V[z]=0<R?D.i(z+A)>>>R|D.i(z+A+1)<<32-R:D.i(z+A);return new u(V,D.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,SC=r,u.prototype.add=u.prototype.add,u.prototype.multiply=u.prototype.j,u.prototype.modulo=u.prototype.A,u.prototype.compare=u.prototype.l,u.prototype.toNumber=u.prototype.m,u.prototype.toString=u.prototype.toString,u.prototype.getBits=u.prototype.i,u.fromNumber=p,u.fromString=y,na=u}).apply(typeof BI<"u"?BI:typeof self<"u"?self:typeof window<"u"?window:{});var em=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var RC,dh,CC,Em,Jy,DC,PC,xC;(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(h,_,E){return h==Array.prototype||h==Object.prototype||(h[_]=E.value),h};function t(h){h=[typeof globalThis=="object"&&globalThis,h,typeof window=="object"&&window,typeof self=="object"&&self,typeof em=="object"&&em];for(var _=0;_<h.length;++_){var E=h[_];if(E&&E.Math==Math)return E}throw Error("Cannot find global object")}var r=t(this);function a(h,_){if(_)e:{var E=r;h=h.split(".");for(var I=0;I<h.length-1;I++){var F=h[I];if(!(F in E))break e;E=E[F]}h=h[h.length-1],I=E[h],_=_(I),_!=I&&_!=null&&e(E,h,{configurable:!0,writable:!0,value:_})}}function o(h,_){h instanceof String&&(h+="");var E=0,I=!1,F={next:function(){if(!I&&E<h.length){var Q=E++;return{value:_(Q,h[Q]),done:!1}}return I=!0,{done:!0,value:void 0}}};return F[Symbol.iterator]=function(){return F},F}a("Array.prototype.values",function(h){return h||function(){return o(this,function(_,E){return E})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var u=u||{},d=this||self;function m(h){var _=typeof h;return _=_!="object"?_:h?Array.isArray(h)?"array":_:"null",_=="array"||_=="object"&&typeof h.length=="number"}function p(h){var _=typeof h;return _=="object"&&h!=null||_=="function"}function y(h,_,E){return h.call.apply(h.bind,arguments)}function v(h,_,E){if(!h)throw Error();if(2<arguments.length){var I=Array.prototype.slice.call(arguments,2);return function(){var F=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(F,I),h.apply(_,F)}}return function(){return h.apply(_,arguments)}}function w(h,_,E){return w=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?y:v,w.apply(null,arguments)}function S(h,_){var E=Array.prototype.slice.call(arguments,1);return function(){var I=E.slice();return I.push.apply(I,arguments),h.apply(this,I)}}function P(h,_){function E(){}E.prototype=_.prototype,h.aa=_.prototype,h.prototype=new E,h.prototype.constructor=h,h.Qb=function(I,F,Q){for(var ue=Array(arguments.length-2),qe=2;qe<arguments.length;qe++)ue[qe-2]=arguments[qe];return _.prototype[F].apply(I,ue)}}function U(h){const _=h.length;if(0<_){const E=Array(_);for(let I=0;I<_;I++)E[I]=h[I];return E}return[]}function L(h,_){for(let E=1;E<arguments.length;E++){const I=arguments[E];if(m(I)){const F=h.length||0,Q=I.length||0;h.length=F+Q;for(let ue=0;ue<Q;ue++)h[F+ue]=I[ue]}else h.push(I)}}class H{constructor(_,E){this.i=_,this.j=E,this.h=0,this.g=null}get(){let _;return 0<this.h?(this.h--,_=this.g,this.g=_.next,_.next=null):_=this.i(),_}}function Y(h){return/^[\s\xa0]*$/.test(h)}function $(){var h=d.navigator;return h&&(h=h.userAgent)?h:""}function oe(h){return oe[" "](h),h}oe[" "]=function(){};var ae=$().indexOf("Gecko")!=-1&&!($().toLowerCase().indexOf("webkit")!=-1&&$().indexOf("Edge")==-1)&&!($().indexOf("Trident")!=-1||$().indexOf("MSIE")!=-1)&&$().indexOf("Edge")==-1;function le(h,_,E){for(const I in h)_.call(E,h[I],I,h)}function D(h,_){for(const E in h)_.call(void 0,h[E],E,h)}function R(h){const _={};for(const E in h)_[E]=h[E];return _}const A="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function x(h,_){let E,I;for(let F=1;F<arguments.length;F++){I=arguments[F];for(E in I)h[E]=I[E];for(let Q=0;Q<A.length;Q++)E=A[Q],Object.prototype.hasOwnProperty.call(I,E)&&(h[E]=I[E])}}function V(h){var _=1;h=h.split(":");const E=[];for(;0<_&&h.length;)E.push(h.shift()),_--;return h.length&&E.push(h.join(":")),E}function z(h){d.setTimeout(()=>{throw h},0)}function N(){var h=Ne;let _=null;return h.g&&(_=h.g,h.g=h.g.next,h.g||(h.h=null),_.next=null),_}class Nt{constructor(){this.h=this.g=null}add(_,E){const I=It.get();I.set(_,E),this.h?this.h.next=I:this.g=I,this.h=I}}var It=new H(()=>new he,h=>h.reset());class he{constructor(){this.next=this.g=this.h=null}set(_,E){this.h=_,this.g=E,this.next=null}reset(){this.next=this.g=this.h=null}}let be,Te=!1,Ne=new Nt,O=()=>{const h=d.Promise.resolve(void 0);be=()=>{h.then(ie)}};var ie=()=>{for(var h;h=N();){try{h.h.call(h.g)}catch(E){z(E)}var _=It;_.j(h),100>_.h&&(_.h++,h.next=_.g,_.g=h)}Te=!1};function ge(){this.s=this.s,this.C=this.C}ge.prototype.s=!1,ge.prototype.ma=function(){this.s||(this.s=!0,this.N())},ge.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function me(h,_){this.type=h,this.g=this.target=_,this.defaultPrevented=!1}me.prototype.h=function(){this.defaultPrevented=!0};var fe=function(){if(!d.addEventListener||!Object.defineProperty)return!1;var h=!1,_=Object.defineProperty({},"passive",{get:function(){h=!0}});try{const E=()=>{};d.addEventListener("test",E,_),d.removeEventListener("test",E,_)}catch{}return h}();function Ce(h,_){if(me.call(this,h?h.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,h){var E=this.type=h.type,I=h.changedTouches&&h.changedTouches.length?h.changedTouches[0]:null;if(this.target=h.target||h.srcElement,this.g=_,_=h.relatedTarget){if(ae){e:{try{oe(_.nodeName);var F=!0;break e}catch{}F=!1}F||(_=null)}}else E=="mouseover"?_=h.fromElement:E=="mouseout"&&(_=h.toElement);this.relatedTarget=_,I?(this.clientX=I.clientX!==void 0?I.clientX:I.pageX,this.clientY=I.clientY!==void 0?I.clientY:I.pageY,this.screenX=I.screenX||0,this.screenY=I.screenY||0):(this.clientX=h.clientX!==void 0?h.clientX:h.pageX,this.clientY=h.clientY!==void 0?h.clientY:h.pageY,this.screenX=h.screenX||0,this.screenY=h.screenY||0),this.button=h.button,this.key=h.key||"",this.ctrlKey=h.ctrlKey,this.altKey=h.altKey,this.shiftKey=h.shiftKey,this.metaKey=h.metaKey,this.pointerId=h.pointerId||0,this.pointerType=typeof h.pointerType=="string"?h.pointerType:Re[h.pointerType]||"",this.state=h.state,this.i=h,h.defaultPrevented&&Ce.aa.h.call(this)}}P(Ce,me);var Re={2:"touch",3:"pen",4:"mouse"};Ce.prototype.h=function(){Ce.aa.h.call(this);var h=this.i;h.preventDefault?h.preventDefault():h.returnValue=!1};var ut="closure_listenable_"+(1e6*Math.random()|0),Me=0;function Ze(h,_,E,I,F){this.listener=h,this.proxy=null,this.src=_,this.type=E,this.capture=!!I,this.ha=F,this.key=++Me,this.da=this.fa=!1}function Ke(h){h.da=!0,h.listener=null,h.proxy=null,h.src=null,h.ha=null}function Ut(h){this.src=h,this.g={},this.h=0}Ut.prototype.add=function(h,_,E,I,F){var Q=h.toString();h=this.g[Q],h||(h=this.g[Q]=[],this.h++);var ue=rr(h,_,I,F);return-1<ue?(_=h[ue],E||(_.fa=!1)):(_=new Ze(_,this.src,Q,!!I,F),_.fa=E,h.push(_)),_};function Jt(h,_){var E=_.type;if(E in h.g){var I=h.g[E],F=Array.prototype.indexOf.call(I,_,void 0),Q;(Q=0<=F)&&Array.prototype.splice.call(I,F,1),Q&&(Ke(_),h.g[E].length==0&&(delete h.g[E],h.h--))}}function rr(h,_,E,I){for(var F=0;F<h.length;++F){var Q=h[F];if(!Q.da&&Q.listener==_&&Q.capture==!!E&&Q.ha==I)return F}return-1}var as="closure_lm_"+(1e6*Math.random()|0),os={};function _i(h,_,E,I,F){if(Array.isArray(_)){for(var Q=0;Q<_.length;Q++)_i(h,_[Q],E,I,F);return null}return E=Cd(E),h&&h[ut]?h.K(_,E,p(I)?!!I.capture:!1,F):Hu(h,_,E,!1,I,F)}function Hu(h,_,E,I,F,Q){if(!_)throw Error("Invalid event type");var ue=p(F)?!!F.capture:!!F,qe=Gu(h);if(qe||(h[as]=qe=new Ut(h)),E=qe.add(_,E,I,ue,Q),E.proxy)return E;if(I=jo(),E.proxy=I,I.src=h,I.listener=E,h.addEventListener)fe||(F=ue),F===void 0&&(F=!1),h.addEventListener(_.toString(),I,F);else if(h.attachEvent)h.attachEvent(Ho(_.toString()),I);else if(h.addListener&&h.removeListener)h.addListener(I);else throw Error("addEventListener and attachEvent are unavailable.");return E}function jo(){function h(E){return _.call(h.src,h.listener,E)}const _=rg;return h}function qo(h,_,E,I,F){if(Array.isArray(_))for(var Q=0;Q<_.length;Q++)qo(h,_[Q],E,I,F);else I=p(I)?!!I.capture:!!I,E=Cd(E),h&&h[ut]?(h=h.i,_=String(_).toString(),_ in h.g&&(Q=h.g[_],E=rr(Q,E,I,F),-1<E&&(Ke(Q[E]),Array.prototype.splice.call(Q,E,1),Q.length==0&&(delete h.g[_],h.h--)))):h&&(h=Gu(h))&&(_=h.g[_.toString()],h=-1,_&&(h=rr(_,E,I,F)),(E=-1<h?_[h]:null)&&Aa(E))}function Aa(h){if(typeof h!="number"&&h&&!h.da){var _=h.src;if(_&&_[ut])Jt(_.i,h);else{var E=h.type,I=h.proxy;_.removeEventListener?_.removeEventListener(E,I,h.capture):_.detachEvent?_.detachEvent(Ho(E),I):_.addListener&&_.removeListener&&_.removeListener(I),(E=Gu(_))?(Jt(E,h),E.h==0&&(E.src=null,_[as]=null)):Ke(h)}}}function Ho(h){return h in os?os[h]:os[h]="on"+h}function rg(h,_){if(h.da)h=!0;else{_=new Ce(_,this);var E=h.listener,I=h.ha||h.src;h.fa&&Aa(h),h=E.call(I,_)}return h}function Gu(h){return h=h[as],h instanceof Ut?h:null}var Ln="__closure_events_fn_"+(1e9*Math.random()>>>0);function Cd(h){return typeof h=="function"?h:(h[Ln]||(h[Ln]=function(_){return h.handleEvent(_)}),h[Ln])}function Gt(){ge.call(this),this.i=new Ut(this),this.M=this,this.F=null}P(Gt,ge),Gt.prototype[ut]=!0,Gt.prototype.removeEventListener=function(h,_,E,I){qo(this,h,_,E,I)};function en(h,_){var E,I=h.F;if(I)for(E=[];I;I=I.F)E.push(I);if(h=h.M,I=_.type||_,typeof _=="string")_=new me(_,h);else if(_ instanceof me)_.target=_.target||h;else{var F=_;_=new me(I,h),x(_,F)}if(F=!0,E)for(var Q=E.length-1;0<=Q;Q--){var ue=_.g=E[Q];F=yi(ue,I,!0,_)&&F}if(ue=_.g=h,F=yi(ue,I,!0,_)&&F,F=yi(ue,I,!1,_)&&F,E)for(Q=0;Q<E.length;Q++)ue=_.g=E[Q],F=yi(ue,I,!1,_)&&F}Gt.prototype.N=function(){if(Gt.aa.N.call(this),this.i){var h=this.i,_;for(_ in h.g){for(var E=h.g[_],I=0;I<E.length;I++)Ke(E[I]);delete h.g[_],h.h--}}this.F=null},Gt.prototype.K=function(h,_,E,I){return this.i.add(String(h),_,!1,E,I)},Gt.prototype.L=function(h,_,E,I){return this.i.add(String(h),_,!0,E,I)};function yi(h,_,E,I){if(_=h.i.g[String(_)],!_)return!0;_=_.concat();for(var F=!0,Q=0;Q<_.length;++Q){var ue=_[Q];if(ue&&!ue.da&&ue.capture==E){var qe=ue.listener,Kt=ue.ha||ue.src;ue.fa&&Jt(h.i,ue),F=qe.call(Kt,I)!==!1&&F}}return F&&!I.defaultPrevented}function Dd(h,_,E){if(typeof h=="function")E&&(h=w(h,E));else if(h&&typeof h.handleEvent=="function")h=w(h.handleEvent,h);else throw Error("Invalid listener argument");return 2147483647<Number(_)?-1:d.setTimeout(h,_||0)}function $u(h){h.g=Dd(()=>{h.g=null,h.i&&(h.i=!1,$u(h))},h.l);const _=h.h;h.h=null,h.m.apply(null,_)}class ig extends ge{constructor(_,E){super(),this.m=_,this.l=E,this.h=null,this.i=!1,this.g=null}j(_){this.h=arguments,this.g?this.i=!0:$u(this)}N(){super.N(),this.g&&(d.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Sa(h){ge.call(this),this.h=h,this.g={}}P(Sa,ge);var ls=[];function En(h){le(h.g,function(_,E){this.g.hasOwnProperty(E)&&Aa(_)},h),h.g={}}Sa.prototype.N=function(){Sa.aa.N.call(this),En(this)},Sa.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Ku=d.JSON.stringify,Vr=d.JSON.parse,Rn=class{stringify(h){return d.JSON.stringify(h,void 0)}parse(h){return d.JSON.parse(h,void 0)}};function Qu(){}Qu.prototype.h=null;function Pd(h){return h.h||(h.h=h.i())}function xd(){}var Mr={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function us(){me.call(this,"d")}P(us,me);function Ir(){me.call(this,"c")}P(Ir,me);var ir={},cs=null;function Go(){return cs=cs||new Gt}ir.La="serverreachability";function Wu(h){me.call(this,ir.La,h)}P(Wu,me);function hs(h){const _=Go();en(_,new Wu(_))}ir.STAT_EVENT="statevent";function $o(h,_){me.call(this,ir.STAT_EVENT,h),this.stat=_}P($o,me);function Ot(h){const _=Go();en(_,new $o(_,h))}ir.Ma="timingevent";function Nd(h,_){me.call(this,ir.Ma,h),this.size=_}P(Nd,me);function ds(h,_){if(typeof h!="function")throw Error("Fn must not be null and must be a function");return d.setTimeout(function(){h()},_)}function fs(){this.g=!0}fs.prototype.xa=function(){this.g=!1};function Od(h,_,E,I,F,Q){h.info(function(){if(h.g)if(Q)for(var ue="",qe=Q.split("&"),Kt=0;Kt<qe.length;Kt++){var He=qe[Kt].split("=");if(1<He.length){var rn=He[0];He=He[1];var Qt=rn.split("_");ue=2<=Qt.length&&Qt[1]=="type"?ue+(rn+"="+He+"&"):ue+(rn+"=redacted&")}}else ue=null;else ue=Q;return"XMLHTTP REQ ("+I+") [attempt "+F+"]: "+_+`
`+E+`
`+ue})}function kd(h,_,E,I,F,Q,ue){h.info(function(){return"XMLHTTP RESP ("+I+") [ attempt "+F+"]: "+_+`
`+E+`
`+Q+" "+ue})}function ms(h,_,E,I){h.info(function(){return"XMLHTTP TEXT ("+_+"): "+tn(h,E)+(I?" "+I:"")})}function Lr(h,_){h.info(function(){return"TIMEOUT: "+_})}fs.prototype.info=function(){};function tn(h,_){if(!h.g)return _;if(!_)return null;try{var E=JSON.parse(_);if(E){for(h=0;h<E.length;h++)if(Array.isArray(E[h])){var I=E[h];if(!(2>I.length)){var F=I[1];if(Array.isArray(F)&&!(1>F.length)){var Q=F[0];if(Q!="noop"&&Q!="stop"&&Q!="close")for(var ue=1;ue<F.length;ue++)F[ue]=""}}}}return Ku(E)}catch{return _}}var $t={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},vi={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Ra;function Ko(){}P(Ko,Qu),Ko.prototype.g=function(){return new XMLHttpRequest},Ko.prototype.i=function(){return{}},Ra=new Ko;function Ur(h,_,E,I){this.j=h,this.i=_,this.l=E,this.R=I||1,this.U=new Sa(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Yu}function Yu(){this.i=null,this.g="",this.h=!1}var ps={},Ca={};function Ar(h,_,E){h.L=1,h.v=xa(At(_)),h.m=E,h.P=!0,Ei(h,null)}function Ei(h,_){h.F=Date.now(),_t(h),h.A=At(h.v);var E=h.A,I=h.R;Array.isArray(I)||(I=[String(I)]),bi(E.i,"t",I),h.C=0,E=h.j.J,h.h=new Yu,h.g=Qd(h.j,E?_:null,!h.m),0<h.O&&(h.M=new ig(w(h.Y,h,h.g),h.O)),_=h.U,E=h.g,I=h.ca;var F="readystatechange";Array.isArray(F)||(F&&(ls[0]=F.toString()),F=ls);for(var Q=0;Q<F.length;Q++){var ue=_i(E,F[Q],I||_.handleEvent,!1,_.h||_);if(!ue)break;_.g[ue.key]=ue}_=h.H?R(h.H):{},h.m?(h.u||(h.u="POST"),_["Content-Type"]="application/x-www-form-urlencoded",h.g.ea(h.A,h.u,h.m,_)):(h.u="GET",h.g.ea(h.A,h.u,null,_)),hs(),Od(h.i,h.u,h.A,h.l,h.R,h.m)}Ur.prototype.ca=function(h){h=h.target;const _=this.M;_&&ur(h)==3?_.j():this.Y(h)},Ur.prototype.Y=function(h){try{if(h==this.g)e:{const Qt=ur(this.g);var _=this.g.Ba();const Ri=this.g.Z();if(!(3>Qt)&&(Qt!=3||this.g&&(this.h.h||this.g.oa()||zd(this.g)))){this.J||Qt!=4||_==7||(_==8||0>=Ri?hs(3):hs(2)),Qo(this);var E=this.g.Z();this.X=E;t:if(gs(this)){var I=zd(this.g);h="";var F=I.length,Q=ur(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Un(this),Gn(this);var ue="";break t}this.h.i=new d.TextDecoder}for(_=0;_<F;_++)this.h.h=!0,h+=this.h.i.decode(I[_],{stream:!(Q&&_==F-1)});I.length=0,this.h.g+=h,this.C=0,ue=this.h.g}else ue=this.g.oa();if(this.o=E==200,kd(this.i,this.u,this.A,this.l,this.R,Qt,E),this.o){if(this.T&&!this.K){t:{if(this.g){var qe,Kt=this.g;if((qe=Kt.g?Kt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Y(qe)){var He=qe;break t}}He=null}if(E=He)ms(this.i,this.l,E,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,$n(this,E);else{this.o=!1,this.s=3,Ot(12),Un(this),Gn(this);break e}}if(this.P){E=!0;let dn;for(;!this.J&&this.C<ue.length;)if(dn=_s(this,ue),dn==Ca){Qt==4&&(this.s=4,Ot(14),E=!1),ms(this.i,this.l,null,"[Incomplete Response]");break}else if(dn==ps){this.s=4,Ot(15),ms(this.i,this.l,ue,"[Invalid Chunk]"),E=!1;break}else ms(this.i,this.l,dn,null),$n(this,dn);if(gs(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Qt!=4||ue.length!=0||this.h.h||(this.s=1,Ot(16),E=!1),this.o=this.o&&E,!E)ms(this.i,this.l,ue,"[Invalid Chunked Response]"),Un(this),Gn(this);else if(0<ue.length&&!this.W){this.W=!0;var rn=this.j;rn.g==this&&rn.ba&&!rn.M&&(rn.j.info("Great, no buffering proxy detected. Bytes received: "+ue.length),Ua(rn),rn.M=!0,Ot(11))}}else ms(this.i,this.l,ue,null),$n(this,ue);Qt==4&&Un(this),this.o&&!this.J&&(Qt==4?Gd(this.j,this):(this.o=!1,_t(this)))}else cg(this.g),E==400&&0<ue.indexOf("Unknown SID")?(this.s=3,Ot(12)):(this.s=0,Ot(13)),Un(this),Gn(this)}}}catch{}finally{}};function gs(h){return h.g?h.u=="GET"&&h.L!=2&&h.j.Ca:!1}function _s(h,_){var E=h.C,I=_.indexOf(`
`,E);return I==-1?Ca:(E=Number(_.substring(E,I)),isNaN(E)?ps:(I+=1,I+E>_.length?Ca:(_=_.slice(I,I+E),h.C=I+E,_)))}Ur.prototype.cancel=function(){this.J=!0,Un(this)};function _t(h){h.S=Date.now()+h.I,Xu(h,h.I)}function Xu(h,_){if(h.B!=null)throw Error("WatchDog timer not null");h.B=ds(w(h.ba,h),_)}function Qo(h){h.B&&(d.clearTimeout(h.B),h.B=null)}Ur.prototype.ba=function(){this.B=null;const h=Date.now();0<=h-this.S?(Lr(this.i,this.A),this.L!=2&&(hs(),Ot(17)),Un(this),this.s=2,Gn(this)):Xu(this,this.S-h)};function Gn(h){h.j.G==0||h.J||Gd(h.j,h)}function Un(h){Qo(h);var _=h.M;_&&typeof _.ma=="function"&&_.ma(),h.M=null,En(h.U),h.g&&(_=h.g,h.g=null,_.abort(),_.ma())}function $n(h,_){try{var E=h.j;if(E.G!=0&&(E.g==h||ys(E.h,h))){if(!h.K&&ys(E.h,h)&&E.G==3){try{var I=E.Da.g.parse(_)}catch{I=null}if(Array.isArray(I)&&I.length==3){var F=I;if(F[0]==0){e:if(!E.u){if(E.g)if(E.g.F+3e3<h.F)il(E),nl(E);else break e;lc(E),Ot(18)}}else E.za=F[1],0<E.za-E.T&&37500>F[2]&&E.F&&E.v==0&&!E.C&&(E.C=ds(w(E.Za,E),6e3));if(1>=Vd(E.h)&&E.ca){try{E.ca()}catch{}E.ca=void 0}}else Si(E,11)}else if((h.K||E.g==h)&&il(E),!Y(_))for(F=E.Da.g.parse(_),_=0;_<F.length;_++){let He=F[_];if(E.T=He[0],He=He[1],E.G==2)if(He[0]=="c"){E.K=He[1],E.ia=He[2];const rn=He[3];rn!=null&&(E.la=rn,E.j.info("VER="+E.la));const Qt=He[4];Qt!=null&&(E.Aa=Qt,E.j.info("SVER="+E.Aa));const Ri=He[5];Ri!=null&&typeof Ri=="number"&&0<Ri&&(I=1.5*Ri,E.L=I,E.j.info("backChannelRequestTimeoutMs_="+I)),I=E;const dn=h.g;if(dn){const Gr=dn.g?dn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Gr){var Q=I.h;Q.g||Gr.indexOf("spdy")==-1&&Gr.indexOf("quic")==-1&&Gr.indexOf("h2")==-1||(Q.j=Q.l,Q.g=new Set,Q.h&&(vs(Q,Q.h),Q.h=null))}if(I.D){const cc=dn.g?dn.g.getResponseHeader("X-HTTP-Session-Id"):null;cc&&(I.ya=cc,Qe(I.I,I.D,cc))}}E.G=3,E.l&&E.l.ua(),E.ba&&(E.R=Date.now()-h.F,E.j.info("Handshake RTT: "+E.R+"ms")),I=E;var ue=h;if(I.qa=Kd(I,I.J?I.ia:null,I.W),ue.K){sr(I.h,ue);var qe=ue,Kt=I.L;Kt&&(qe.I=Kt),qe.B&&(Qo(qe),_t(qe)),I.g=ue}else qd(I);0<E.i.length&&rl(E)}else He[0]!="stop"&&He[0]!="close"||Si(E,7);else E.G==3&&(He[0]=="stop"||He[0]=="close"?He[0]=="stop"?Si(E,7):ac(E):He[0]!="noop"&&E.l&&E.l.ta(He),E.v=0)}}hs(4)}catch{}}var sg=class{constructor(h,_){this.g=h,this.map=_}};function Zu(h){this.l=h||10,d.PerformanceNavigationTiming?(h=d.performance.getEntriesByType("navigation"),h=0<h.length&&(h[0].nextHopProtocol=="hq"||h[0].nextHopProtocol=="h2")):h=!!(d.chrome&&d.chrome.loadTimes&&d.chrome.loadTimes()&&d.chrome.loadTimes().wasFetchedViaSpdy),this.j=h?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Ju(h){return h.h?!0:h.g?h.g.size>=h.j:!1}function Vd(h){return h.h?1:h.g?h.g.size:0}function ys(h,_){return h.h?h.h==_:h.g?h.g.has(_):!1}function vs(h,_){h.g?h.g.add(_):h.h=_}function sr(h,_){h.h&&h.h==_?h.h=null:h.g&&h.g.has(_)&&h.g.delete(_)}Zu.prototype.cancel=function(){if(this.i=Cn(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const h of this.g.values())h.cancel();this.g.clear()}};function Cn(h){if(h.h!=null)return h.i.concat(h.h.D);if(h.g!=null&&h.g.size!==0){let _=h.i;for(const E of h.g.values())_=_.concat(E.D);return _}return U(h.i)}function Md(h){if(h.V&&typeof h.V=="function")return h.V();if(typeof Map<"u"&&h instanceof Map||typeof Set<"u"&&h instanceof Set)return Array.from(h.values());if(typeof h=="string")return h.split("");if(m(h)){for(var _=[],E=h.length,I=0;I<E;I++)_.push(h[I]);return _}_=[],E=0;for(I in h)_[E++]=h[I];return _}function ag(h){if(h.na&&typeof h.na=="function")return h.na();if(!h.V||typeof h.V!="function"){if(typeof Map<"u"&&h instanceof Map)return Array.from(h.keys());if(!(typeof Set<"u"&&h instanceof Set)){if(m(h)||typeof h=="string"){var _=[];h=h.length;for(var E=0;E<h;E++)_.push(E);return _}_=[],E=0;for(const I in h)_[E++]=I;return _}}}function Da(h,_){if(h.forEach&&typeof h.forEach=="function")h.forEach(_,void 0);else if(m(h)||typeof h=="string")Array.prototype.forEach.call(h,_,void 0);else for(var E=ag(h),I=Md(h),F=I.length,Q=0;Q<F;Q++)_.call(void 0,I[Q],E&&E[Q],h)}var ec=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Wo(h,_){if(h){h=h.split("&");for(var E=0;E<h.length;E++){var I=h[E].indexOf("="),F=null;if(0<=I){var Q=h[E].substring(0,I);F=h[E].substring(I+1)}else Q=h[E];_(Q,F?decodeURIComponent(F.replace(/\+/g," ")):"")}}}function Ti(h){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,h instanceof Ti){this.h=h.h,Es(this,h.j),this.o=h.o,this.g=h.g,Pa(this,h.s),this.l=h.l;var _=h.i,E=new Br;E.i=_.i,_.g&&(E.g=new Map(_.g),E.h=_.h),Yo(this,E),this.m=h.m}else h&&(_=String(h).match(ec))?(this.h=!1,Es(this,_[1]||"",!0),this.o=Ts(_[2]||""),this.g=Ts(_[3]||"",!0),Pa(this,_[4]),this.l=Ts(_[5]||"",!0),Yo(this,_[6]||"",!0),this.m=Ts(_[7]||"")):(this.h=!1,this.i=new Br(null,this.h))}Ti.prototype.toString=function(){var h=[],_=this.j;_&&h.push(ar(_,tc,!0),":");var E=this.g;return(E||_=="file")&&(h.push("//"),(_=this.o)&&h.push(ar(_,tc,!0),"@"),h.push(encodeURIComponent(String(E)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),E=this.s,E!=null&&h.push(":",String(E))),(E=this.l)&&(this.g&&E.charAt(0)!="/"&&h.push("/"),h.push(ar(E,E.charAt(0)=="/"?nc:Ld,!0))),(E=this.i.toString())&&h.push("?",E),(E=this.m)&&h.push("#",ar(E,ug)),h.join("")};function At(h){return new Ti(h)}function Es(h,_,E){h.j=E?Ts(_,!0):_,h.j&&(h.j=h.j.replace(/:$/,""))}function Pa(h,_){if(_){if(_=Number(_),isNaN(_)||0>_)throw Error("Bad port number "+_);h.s=_}else h.s=null}function Yo(h,_,E){_ instanceof Br?(h.i=_,rc(h.i,h.h)):(E||(_=ar(_,lg)),h.i=new Br(_,h.h))}function Qe(h,_,E){h.i.set(_,E)}function xa(h){return Qe(h,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),h}function Ts(h,_){return h?_?decodeURI(h.replace(/%25/g,"%2525")):decodeURIComponent(h):""}function ar(h,_,E){return typeof h=="string"?(h=encodeURI(h).replace(_,og),E&&(h=h.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),h):null}function og(h){return h=h.charCodeAt(0),"%"+(h>>4&15).toString(16)+(h&15).toString(16)}var tc=/[#\/\?@]/g,Ld=/[#\?:]/g,nc=/[#\?]/g,lg=/[#\?@]/g,ug=/#/g;function Br(h,_){this.h=this.g=null,this.i=h||null,this.j=!!_}function or(h){h.g||(h.g=new Map,h.h=0,h.i&&Wo(h.i,function(_,E){h.add(decodeURIComponent(_.replace(/\+/g," ")),E)}))}n=Br.prototype,n.add=function(h,_){or(this),this.i=null,h=Ii(this,h);var E=this.g.get(h);return E||this.g.set(h,E=[]),E.push(_),this.h+=1,this};function Xo(h,_){or(h),_=Ii(h,_),h.g.has(_)&&(h.i=null,h.h-=h.g.get(_).length,h.g.delete(_))}function wi(h,_){return or(h),_=Ii(h,_),h.g.has(_)}n.forEach=function(h,_){or(this),this.g.forEach(function(E,I){E.forEach(function(F){h.call(_,F,I,this)},this)},this)},n.na=function(){or(this);const h=Array.from(this.g.values()),_=Array.from(this.g.keys()),E=[];for(let I=0;I<_.length;I++){const F=h[I];for(let Q=0;Q<F.length;Q++)E.push(_[I])}return E},n.V=function(h){or(this);let _=[];if(typeof h=="string")wi(this,h)&&(_=_.concat(this.g.get(Ii(this,h))));else{h=Array.from(this.g.values());for(let E=0;E<h.length;E++)_=_.concat(h[E])}return _},n.set=function(h,_){return or(this),this.i=null,h=Ii(this,h),wi(this,h)&&(this.h-=this.g.get(h).length),this.g.set(h,[_]),this.h+=1,this},n.get=function(h,_){return h?(h=this.V(h),0<h.length?String(h[0]):_):_};function bi(h,_,E){Xo(h,_),0<E.length&&(h.i=null,h.g.set(Ii(h,_),U(E)),h.h+=E.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const h=[],_=Array.from(this.g.keys());for(var E=0;E<_.length;E++){var I=_[E];const Q=encodeURIComponent(String(I)),ue=this.V(I);for(I=0;I<ue.length;I++){var F=Q;ue[I]!==""&&(F+="="+encodeURIComponent(String(ue[I]))),h.push(F)}}return this.i=h.join("&")};function Ii(h,_){return _=String(_),h.j&&(_=_.toLowerCase()),_}function rc(h,_){_&&!h.j&&(or(h),h.i=null,h.g.forEach(function(E,I){var F=I.toLowerCase();I!=F&&(Xo(this,I),bi(this,F,E))},h)),h.j=_}function Ud(h,_){const E=new fs;if(d.Image){const I=new Image;I.onload=S(lr,E,"TestLoadImage: loaded",!0,_,I),I.onerror=S(lr,E,"TestLoadImage: error",!1,_,I),I.onabort=S(lr,E,"TestLoadImage: abort",!1,_,I),I.ontimeout=S(lr,E,"TestLoadImage: timeout",!1,_,I),d.setTimeout(function(){I.ontimeout&&I.ontimeout()},1e4),I.src=h}else _(!1)}function Na(h,_){const E=new fs,I=new AbortController,F=setTimeout(()=>{I.abort(),lr(E,"TestPingServer: timeout",!1,_)},1e4);fetch(h,{signal:I.signal}).then(Q=>{clearTimeout(F),Q.ok?lr(E,"TestPingServer: ok",!0,_):lr(E,"TestPingServer: server error",!1,_)}).catch(()=>{clearTimeout(F),lr(E,"TestPingServer: error",!1,_)})}function lr(h,_,E,I,F){try{F&&(F.onload=null,F.onerror=null,F.onabort=null,F.ontimeout=null),I(E)}catch{}}function Oa(){this.g=new Rn}function zr(h,_,E){const I=E||"";try{Da(h,function(F,Q){let ue=F;p(F)&&(ue=Ku(F)),_.push(I+Q+"="+encodeURIComponent(ue))})}catch(F){throw _.push(I+"type="+encodeURIComponent("_badmap")),F}}function ws(h){this.l=h.Ub||null,this.j=h.eb||!1}P(ws,Qu),ws.prototype.g=function(){return new Ai(this.l,this.j)},ws.prototype.i=function(h){return function(){return h}}({});function Ai(h,_){Gt.call(this),this.D=h,this.o=_,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}P(Ai,Gt),n=Ai.prototype,n.open=function(h,_){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=h,this.A=_,this.readyState=1,jr(this)},n.send=function(h){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const _={headers:this.u,method:this.B,credentials:this.m,cache:void 0};h&&(_.body=h),(this.D||d).fetch(new Request(this.A,_)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Fr(this)),this.readyState=0},n.Sa=function(h){if(this.g&&(this.l=h,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=h.headers,this.readyState=2,jr(this)),this.g&&(this.readyState=3,jr(this),this.g)))if(this.responseType==="arraybuffer")h.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof d.ReadableStream<"u"&&"body"in h){if(this.j=h.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;ic(this)}else h.text().then(this.Ra.bind(this),this.ga.bind(this))};function ic(h){h.j.read().then(h.Pa.bind(h)).catch(h.ga.bind(h))}n.Pa=function(h){if(this.g){if(this.o&&h.value)this.response.push(h.value);else if(!this.o){var _=h.value?h.value:new Uint8Array(0);(_=this.v.decode(_,{stream:!h.done}))&&(this.response=this.responseText+=_)}h.done?Fr(this):jr(this),this.readyState==3&&ic(this)}},n.Ra=function(h){this.g&&(this.response=this.responseText=h,Fr(this))},n.Qa=function(h){this.g&&(this.response=h,Fr(this))},n.ga=function(){this.g&&Fr(this)};function Fr(h){h.readyState=4,h.l=null,h.j=null,h.v=null,jr(h)}n.setRequestHeader=function(h,_){this.u.append(h,_)},n.getResponseHeader=function(h){return this.h&&this.h.get(h.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const h=[],_=this.h.entries();for(var E=_.next();!E.done;)E=E.value,h.push(E[0]+": "+E[1]),E=_.next();return h.join(`\r
`)};function jr(h){h.onreadystatechange&&h.onreadystatechange.call(h)}Object.defineProperty(Ai.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(h){this.m=h?"include":"same-origin"}});function sc(h){let _="";return le(h,function(E,I){_+=I,_+=":",_+=E,_+=`\r
`}),_}function nn(h,_,E){e:{for(I in E){var I=!1;break e}I=!0}I||(E=sc(E),typeof h=="string"?E!=null&&encodeURIComponent(String(E)):Qe(h,_,E))}function Je(h){Gt.call(this),this.headers=new Map,this.o=h||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}P(Je,Gt);var Zo=/^https?$/i,ka=["POST","PUT"];n=Je.prototype,n.Ha=function(h){this.J=h},n.ea=function(h,_,E,I){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+h);_=_?_.toUpperCase():"GET",this.D=h,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Ra.g(),this.v=this.o?Pd(this.o):Pd(Ra),this.g.onreadystatechange=w(this.Ea,this);try{this.B=!0,this.g.open(_,String(h),!0),this.B=!1}catch(Q){Bd(this,Q);return}if(h=E||"",E=new Map(this.headers),I)if(Object.getPrototypeOf(I)===Object.prototype)for(var F in I)E.set(F,I[F]);else if(typeof I.keys=="function"&&typeof I.get=="function")for(const Q of I.keys())E.set(Q,I.get(Q));else throw Error("Unknown input type for opt_headers: "+String(I));I=Array.from(E.keys()).find(Q=>Q.toLowerCase()=="content-type"),F=d.FormData&&h instanceof d.FormData,!(0<=Array.prototype.indexOf.call(ka,_,void 0))||I||F||E.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[Q,ue]of E)this.g.setRequestHeader(Q,ue);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Va(this),this.u=!0,this.g.send(h),this.u=!1}catch(Q){Bd(this,Q)}};function Bd(h,_){h.h=!1,h.g&&(h.j=!0,h.g.abort(),h.j=!1),h.l=_,h.m=5,Jo(h),qr(h)}function Jo(h){h.A||(h.A=!0,en(h,"complete"),en(h,"error"))}n.abort=function(h){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=h||7,en(this,"complete"),en(this,"abort"),qr(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),qr(this,!0)),Je.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?el(this):this.bb())},n.bb=function(){el(this)};function el(h){if(h.h&&typeof u<"u"&&(!h.v[1]||ur(h)!=4||h.Z()!=2)){if(h.u&&ur(h)==4)Dd(h.Ea,0,h);else if(en(h,"readystatechange"),ur(h)==4){h.h=!1;try{const ue=h.Z();e:switch(ue){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var _=!0;break e;default:_=!1}var E;if(!(E=_)){var I;if(I=ue===0){var F=String(h.D).match(ec)[1]||null;!F&&d.self&&d.self.location&&(F=d.self.location.protocol.slice(0,-1)),I=!Zo.test(F?F.toLowerCase():"")}E=I}if(E)en(h,"complete"),en(h,"success");else{h.m=6;try{var Q=2<ur(h)?h.g.statusText:""}catch{Q=""}h.l=Q+" ["+h.Z()+"]",Jo(h)}}finally{qr(h)}}}}function qr(h,_){if(h.g){Va(h);const E=h.g,I=h.v[0]?()=>{}:null;h.g=null,h.v=null,_||en(h,"ready");try{E.onreadystatechange=I}catch{}}}function Va(h){h.I&&(d.clearTimeout(h.I),h.I=null)}n.isActive=function(){return!!this.g};function ur(h){return h.g?h.g.readyState:0}n.Z=function(){try{return 2<ur(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(h){if(this.g){var _=this.g.responseText;return h&&_.indexOf(h)==0&&(_=_.substring(h.length)),Vr(_)}};function zd(h){try{if(!h.g)return null;if("response"in h.g)return h.g.response;switch(h.H){case"":case"text":return h.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in h.g)return h.g.mozResponseArrayBuffer}return null}catch{return null}}function cg(h){const _={};h=(h.g&&2<=ur(h)&&h.g.getAllResponseHeaders()||"").split(`\r
`);for(let I=0;I<h.length;I++){if(Y(h[I]))continue;var E=V(h[I]);const F=E[0];if(E=E[1],typeof E!="string")continue;E=E.trim();const Q=_[F]||[];_[F]=Q,Q.push(E)}D(_,function(I){return I.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Ma(h,_,E){return E&&E.internalChannelParams&&E.internalChannelParams[h]||_}function tl(h){this.Aa=0,this.i=[],this.j=new fs,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Ma("failFast",!1,h),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Ma("baseRetryDelayMs",5e3,h),this.cb=Ma("retryDelaySeedMs",1e4,h),this.Wa=Ma("forwardChannelMaxRetries",2,h),this.wa=Ma("forwardChannelRequestTimeoutMs",2e4,h),this.pa=h&&h.xmlHttpFactory||void 0,this.Xa=h&&h.Tb||void 0,this.Ca=h&&h.useFetchStreams||!1,this.L=void 0,this.J=h&&h.supportsCrossDomainXhr||!1,this.K="",this.h=new Zu(h&&h.concurrentRequestLimit),this.Da=new Oa,this.P=h&&h.fastHandshake||!1,this.O=h&&h.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=h&&h.Rb||!1,h&&h.xa&&this.j.xa(),h&&h.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&h&&h.detectBufferingProxy||!1,this.ja=void 0,h&&h.longPollingTimeout&&0<h.longPollingTimeout&&(this.ja=h.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=tl.prototype,n.la=8,n.G=1,n.connect=function(h,_,E,I){Ot(0),this.W=h,this.H=_||{},E&&I!==void 0&&(this.H.OSID=E,this.H.OAID=I),this.F=this.X,this.I=Kd(this,null,this.W),rl(this)};function ac(h){if(Fd(h),h.G==3){var _=h.U++,E=At(h.I);if(Qe(E,"SID",h.K),Qe(E,"RID",_),Qe(E,"TYPE","terminate"),La(h,E),_=new Ur(h,h.j,_),_.L=2,_.v=xa(At(E)),E=!1,d.navigator&&d.navigator.sendBeacon)try{E=d.navigator.sendBeacon(_.v.toString(),"")}catch{}!E&&d.Image&&(new Image().src=_.v,E=!0),E||(_.g=Qd(_.j,null),_.g.ea(_.v)),_.F=Date.now(),_t(_)}$d(h)}function nl(h){h.g&&(Ua(h),h.g.cancel(),h.g=null)}function Fd(h){nl(h),h.u&&(d.clearTimeout(h.u),h.u=null),il(h),h.h.cancel(),h.s&&(typeof h.s=="number"&&d.clearTimeout(h.s),h.s=null)}function rl(h){if(!Ju(h.h)&&!h.s){h.s=!0;var _=h.Ga;be||O(),Te||(be(),Te=!0),Ne.add(_,h),h.B=0}}function hg(h,_){return Vd(h.h)>=h.h.j-(h.s?1:0)?!1:h.s?(h.i=_.D.concat(h.i),!0):h.G==1||h.G==2||h.B>=(h.Va?0:h.Wa)?!1:(h.s=ds(w(h.Ga,h,_),uc(h,h.B)),h.B++,!0)}n.Ga=function(h){if(this.s)if(this.s=null,this.G==1){if(!h){this.U=Math.floor(1e5*Math.random()),h=this.U++;const F=new Ur(this,this.j,h);let Q=this.o;if(this.S&&(Q?(Q=R(Q),x(Q,this.S)):Q=this.S),this.m!==null||this.O||(F.H=Q,Q=null),this.P)e:{for(var _=0,E=0;E<this.i.length;E++){t:{var I=this.i[E];if("__data__"in I.map&&(I=I.map.__data__,typeof I=="string")){I=I.length;break t}I=void 0}if(I===void 0)break;if(_+=I,4096<_){_=E;break e}if(_===4096||E===this.i.length-1){_=E+1;break e}}_=1e3}else _=1e3;_=jd(this,F,_),E=At(this.I),Qe(E,"RID",h),Qe(E,"CVER",22),this.D&&Qe(E,"X-HTTP-Session-Id",this.D),La(this,E),Q&&(this.O?_="headers="+encodeURIComponent(String(sc(Q)))+"&"+_:this.m&&nn(E,this.m,Q)),vs(this.h,F),this.Ua&&Qe(E,"TYPE","init"),this.P?(Qe(E,"$req",_),Qe(E,"SID","null"),F.T=!0,Ar(F,E,null)):Ar(F,E,_),this.G=2}}else this.G==3&&(h?oc(this,h):this.i.length==0||Ju(this.h)||oc(this))};function oc(h,_){var E;_?E=_.l:E=h.U++;const I=At(h.I);Qe(I,"SID",h.K),Qe(I,"RID",E),Qe(I,"AID",h.T),La(h,I),h.m&&h.o&&nn(I,h.m,h.o),E=new Ur(h,h.j,E,h.B+1),h.m===null&&(E.H=h.o),_&&(h.i=_.D.concat(h.i)),_=jd(h,E,1e3),E.I=Math.round(.5*h.wa)+Math.round(.5*h.wa*Math.random()),vs(h.h,E),Ar(E,I,_)}function La(h,_){h.H&&le(h.H,function(E,I){Qe(_,I,E)}),h.l&&Da({},function(E,I){Qe(_,I,E)})}function jd(h,_,E){E=Math.min(h.i.length,E);var I=h.l?w(h.l.Na,h.l,h):null;e:{var F=h.i;let Q=-1;for(;;){const ue=["count="+E];Q==-1?0<E?(Q=F[0].g,ue.push("ofs="+Q)):Q=0:ue.push("ofs="+Q);let qe=!0;for(let Kt=0;Kt<E;Kt++){let He=F[Kt].g;const rn=F[Kt].map;if(He-=Q,0>He)Q=Math.max(0,F[Kt].g-100),qe=!1;else try{zr(rn,ue,"req"+He+"_")}catch{I&&I(rn)}}if(qe){I=ue.join("&");break e}}}return h=h.i.splice(0,E),_.D=h,I}function qd(h){if(!h.g&&!h.u){h.Y=1;var _=h.Fa;be||O(),Te||(be(),Te=!0),Ne.add(_,h),h.v=0}}function lc(h){return h.g||h.u||3<=h.v?!1:(h.Y++,h.u=ds(w(h.Fa,h),uc(h,h.v)),h.v++,!0)}n.Fa=function(){if(this.u=null,Hd(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var h=2*this.R;this.j.info("BP detection timer enabled: "+h),this.A=ds(w(this.ab,this),h)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Ot(10),nl(this),Hd(this))};function Ua(h){h.A!=null&&(d.clearTimeout(h.A),h.A=null)}function Hd(h){h.g=new Ur(h,h.j,"rpc",h.Y),h.m===null&&(h.g.H=h.o),h.g.O=0;var _=At(h.qa);Qe(_,"RID","rpc"),Qe(_,"SID",h.K),Qe(_,"AID",h.T),Qe(_,"CI",h.F?"0":"1"),!h.F&&h.ja&&Qe(_,"TO",h.ja),Qe(_,"TYPE","xmlhttp"),La(h,_),h.m&&h.o&&nn(_,h.m,h.o),h.L&&(h.g.I=h.L);var E=h.g;h=h.ia,E.L=1,E.v=xa(At(_)),E.m=null,E.P=!0,Ei(E,h)}n.Za=function(){this.C!=null&&(this.C=null,nl(this),lc(this),Ot(19))};function il(h){h.C!=null&&(d.clearTimeout(h.C),h.C=null)}function Gd(h,_){var E=null;if(h.g==_){il(h),Ua(h),h.g=null;var I=2}else if(ys(h.h,_))E=_.D,sr(h.h,_),I=1;else return;if(h.G!=0){if(_.o)if(I==1){E=_.m?_.m.length:0,_=Date.now()-_.F;var F=h.B;I=Go(),en(I,new Nd(I,E)),rl(h)}else qd(h);else if(F=_.s,F==3||F==0&&0<_.X||!(I==1&&hg(h,_)||I==2&&lc(h)))switch(E&&0<E.length&&(_=h.h,_.i=_.i.concat(E)),F){case 1:Si(h,5);break;case 4:Si(h,10);break;case 3:Si(h,6);break;default:Si(h,2)}}}function uc(h,_){let E=h.Ta+Math.floor(Math.random()*h.cb);return h.isActive()||(E*=2),E*_}function Si(h,_){if(h.j.info("Error code "+_),_==2){var E=w(h.fb,h),I=h.Xa;const F=!I;I=new Ti(I||"//www.google.com/images/cleardot.gif"),d.location&&d.location.protocol=="http"||Es(I,"https"),xa(I),F?Ud(I.toString(),E):Na(I.toString(),E)}else Ot(2);h.G=0,h.l&&h.l.sa(_),$d(h),Fd(h)}n.fb=function(h){h?(this.j.info("Successfully pinged google.com"),Ot(2)):(this.j.info("Failed to ping google.com"),Ot(1))};function $d(h){if(h.G=0,h.ka=[],h.l){const _=Cn(h.h);(_.length!=0||h.i.length!=0)&&(L(h.ka,_),L(h.ka,h.i),h.h.i.length=0,U(h.i),h.i.length=0),h.l.ra()}}function Kd(h,_,E){var I=E instanceof Ti?At(E):new Ti(E);if(I.g!="")_&&(I.g=_+"."+I.g),Pa(I,I.s);else{var F=d.location;I=F.protocol,_=_?_+"."+F.hostname:F.hostname,F=+F.port;var Q=new Ti(null);I&&Es(Q,I),_&&(Q.g=_),F&&Pa(Q,F),E&&(Q.l=E),I=Q}return E=h.D,_=h.ya,E&&_&&Qe(I,E,_),Qe(I,"VER",h.la),La(h,I),I}function Qd(h,_,E){if(_&&!h.J)throw Error("Can't create secondary domain capable XhrIo object.");return _=h.Ca&&!h.pa?new Je(new ws({eb:E})):new Je(h.pa),_.Ha(h.J),_}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function Wd(){}n=Wd.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function sl(){}sl.prototype.g=function(h,_){return new Dn(h,_)};function Dn(h,_){Gt.call(this),this.g=new tl(_),this.l=h,this.h=_&&_.messageUrlParams||null,h=_&&_.messageHeaders||null,_&&_.clientProtocolHeaderRequired&&(h?h["X-Client-Protocol"]="webchannel":h={"X-Client-Protocol":"webchannel"}),this.g.o=h,h=_&&_.initMessageHeaders||null,_&&_.messageContentType&&(h?h["X-WebChannel-Content-Type"]=_.messageContentType:h={"X-WebChannel-Content-Type":_.messageContentType}),_&&_.va&&(h?h["X-WebChannel-Client-Profile"]=_.va:h={"X-WebChannel-Client-Profile":_.va}),this.g.S=h,(h=_&&_.Sb)&&!Y(h)&&(this.g.m=h),this.v=_&&_.supportsCrossDomainXhr||!1,this.u=_&&_.sendRawJson||!1,(_=_&&_.httpSessionIdParam)&&!Y(_)&&(this.g.D=_,h=this.h,h!==null&&_ in h&&(h=this.h,_ in h&&delete h[_])),this.j=new Hr(this)}P(Dn,Gt),Dn.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Dn.prototype.close=function(){ac(this.g)},Dn.prototype.o=function(h){var _=this.g;if(typeof h=="string"){var E={};E.__data__=h,h=E}else this.u&&(E={},E.__data__=Ku(h),h=E);_.i.push(new sg(_.Ya++,h)),_.G==3&&rl(_)},Dn.prototype.N=function(){this.g.l=null,delete this.j,ac(this.g),delete this.g,Dn.aa.N.call(this)};function Yd(h){us.call(this),h.__headers__&&(this.headers=h.__headers__,this.statusCode=h.__status__,delete h.__headers__,delete h.__status__);var _=h.__sm__;if(_){e:{for(const E in _){h=E;break e}h=void 0}(this.i=h)&&(h=this.i,_=_!==null&&h in _?_[h]:void 0),this.data=_}else this.data=h}P(Yd,us);function Xd(){Ir.call(this),this.status=1}P(Xd,Ir);function Hr(h){this.g=h}P(Hr,Wd),Hr.prototype.ua=function(){en(this.g,"a")},Hr.prototype.ta=function(h){en(this.g,new Yd(h))},Hr.prototype.sa=function(h){en(this.g,new Xd)},Hr.prototype.ra=function(){en(this.g,"b")},sl.prototype.createWebChannel=sl.prototype.g,Dn.prototype.send=Dn.prototype.o,Dn.prototype.open=Dn.prototype.m,Dn.prototype.close=Dn.prototype.close,xC=function(){return new sl},PC=function(){return Go()},DC=ir,Jy={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},$t.NO_ERROR=0,$t.TIMEOUT=8,$t.HTTP_ERROR=6,Em=$t,vi.COMPLETE="complete",CC=vi,xd.EventType=Mr,Mr.OPEN="a",Mr.CLOSE="b",Mr.ERROR="c",Mr.MESSAGE="d",Gt.prototype.listen=Gt.prototype.K,dh=xd,Je.prototype.listenOnce=Je.prototype.L,Je.prototype.getLastError=Je.prototype.Ka,Je.prototype.getLastErrorCode=Je.prototype.Ba,Je.prototype.getStatus=Je.prototype.Z,Je.prototype.getResponseJson=Je.prototype.Oa,Je.prototype.getResponseText=Je.prototype.oa,Je.prototype.send=Je.prototype.ea,Je.prototype.setWithCredentials=Je.prototype.Ha,RC=Je}).apply(typeof em<"u"?em:typeof self<"u"?self:typeof window<"u"?window:{});const zI="@firebase/firestore",FI="4.7.10";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cn{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}cn.UNAUTHENTICATED=new cn(null),cn.GOOGLE_CREDENTIALS=new cn("google-credentials-uid"),cn.FIRST_PARTY=new cn("first-party-uid"),cn.MOCK_USER=new cn("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Mu="11.5.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ua=new yp("@firebase/firestore");function zl(){return ua.logLevel}function C4(n){ua.setLogLevel(n)}function re(n,...e){if(ua.logLevel<=Be.DEBUG){const t=e.map(gE);ua.debug(`Firestore (${Mu}): ${n}`,...t)}}function Vt(n,...e){if(ua.logLevel<=Be.ERROR){const t=e.map(gE);ua.error(`Firestore (${Mu}): ${n}`,...t)}}function di(n,...e){if(ua.logLevel<=Be.WARN){const t=e.map(gE);ua.warn(`Firestore (${Mu}): ${n}`,...t)}}function gE(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(t){return JSON.stringify(t)}(n)}catch{return n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pe(n="Unexpected state"){const e=`FIRESTORE (${Mu}) INTERNAL ASSERTION FAILED: `+n;throw Vt(e),new Error(e)}function ye(n,e){n||pe()}function D4(n,e){n||pe()}function de(n,e){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const K={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class te extends kn{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yn{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NC{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class P4{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(cn.UNAUTHENTICATED))}shutdown(){}}class x4{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class N4{constructor(e){this.t=e,this.currentUser=cn.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){ye(this.o===void 0);let r=this.i;const a=m=>this.i!==r?(r=this.i,t(m)):Promise.resolve();let o=new yn;this.o=()=>{this.i++,this.currentUser=this.u(),o.resolve(),o=new yn,e.enqueueRetryable(()=>a(this.currentUser))};const u=()=>{const m=o;e.enqueueRetryable(async()=>{await m.promise,await a(this.currentUser)})},d=m=>{re("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=m,this.o&&(this.auth.addAuthTokenListener(this.o),u())};this.t.onInit(m=>d(m)),setTimeout(()=>{if(!this.auth){const m=this.t.getImmediate({optional:!0});m?d(m):(re("FirebaseAuthCredentialsProvider","Auth not yet detected"),o.resolve(),o=new yn)}},0),u()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(r=>this.i!==e?(re("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(ye(typeof r.accessToken=="string"),new NC(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return ye(e===null||typeof e=="string"),new cn(e)}}class O4{constructor(e,t,r){this.l=e,this.h=t,this.P=r,this.type="FirstParty",this.user=cn.FIRST_PARTY,this.T=new Map}I(){return this.P?this.P():null}get headers(){this.T.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.T.set("Authorization",e),this.h&&this.T.set("X-Goog-Iam-Authorization-Token",this.h),this.T}}class k4{constructor(e,t,r){this.l=e,this.h=t,this.P=r}getToken(){return Promise.resolve(new O4(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable(()=>t(cn.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class jI{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class V4{constructor(e,t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null,this.V=null,ft(e)&&e.settings.appCheckToken&&(this.V=e.settings.appCheckToken)}start(e,t){ye(this.o===void 0);const r=o=>{o.error!=null&&re("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${o.error.message}`);const u=o.token!==this.R;return this.R=o.token,re("FirebaseAppCheckTokenProvider",`Received ${u?"new":"existing"} token.`),u?t(o.token):Promise.resolve()};this.o=o=>{e.enqueueRetryable(()=>r(o))};const a=o=>{re("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=o,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(o=>a(o)),setTimeout(()=>{if(!this.appCheck){const o=this.A.getImmediate({optional:!0});o?a(o):re("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.V)return Promise.resolve(new jI(this.V));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(ye(typeof t.token=="string"),this.R=t.token,new jI(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function M4(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _E(){return new TextEncoder}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OC{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const a=M4(40);for(let o=0;o<a.length;++o)r.length<20&&a[o]<t&&(r+=e.charAt(a[o]%62))}return r}}function Se(n,e){return n<e?-1:n>e?1:0}function ev(n,e){let t=0;for(;t<n.length&&t<e.length;){const r=n.codePointAt(t),a=e.codePointAt(t);if(r!==a){if(r<128&&a<128)return Se(r,a);{const o=_E(),u=L4(o.encode(qI(n,t)),o.encode(qI(e,t)));return u!==0?u:Se(r,a)}}t+=r>65535?2:1}return Se(n.length,e.length)}function qI(n,e){return n.codePointAt(e)>65535?n.substring(e,e+2):n.substring(e,e+1)}function L4(n,e){for(let t=0;t<n.length&&t<e.length;++t)if(n[t]!==e[t])return Se(n[t],e[t]);return Se(n.length,e.length)}function uu(n,e,t){return n.length===e.length&&n.every((r,a)=>t(r,e[a]))}function kC(n){return n+"\0"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HI=-62135596800,GI=1e6;class gt{static now(){return gt.fromMillis(Date.now())}static fromDate(e){return gt.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor((e-1e3*t)*GI);return new gt(t,r)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new te(K.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new te(K.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<HI)throw new te(K.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new te(K.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/GI}_compareTo(e){return this.seconds===e.seconds?Se(this.nanoseconds,e.nanoseconds):Se(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds-HI;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ee{static fromTimestamp(e){return new Ee(e)}static min(){return new Ee(new gt(0,0))}static max(){return new Ee(new gt(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $I="__name__";class Xr{constructor(e,t,r){t===void 0?t=0:t>e.length&&pe(),r===void 0?r=e.length-t:r>e.length-t&&pe(),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return Xr.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Xr?e.forEach(r=>{t.push(r)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let a=0;a<r;a++){const o=Xr.compareSegments(e.get(a),t.get(a));if(o!==0)return o}return Se(e.length,t.length)}static compareSegments(e,t){const r=Xr.isNumericId(e),a=Xr.isNumericId(t);return r&&!a?-1:!r&&a?1:r&&a?Xr.extractNumericId(e).compare(Xr.extractNumericId(t)):ev(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return na.fromString(e.substring(4,e.length-2))}}class ze extends Xr{construct(e,t,r){return new ze(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new te(K.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter(a=>a.length>0))}return new ze(t)}static emptyPath(){return new ze([])}}const U4=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class mt extends Xr{construct(e,t,r){return new mt(e,t,r)}static isValidIdentifier(e){return U4.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),mt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===$I}static keyField(){return new mt([$I])}static fromServerFormat(e){const t=[];let r="",a=0;const o=()=>{if(r.length===0)throw new te(K.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let u=!1;for(;a<e.length;){const d=e[a];if(d==="\\"){if(a+1===e.length)throw new te(K.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const m=e[a+1];if(m!=="\\"&&m!=="."&&m!=="`")throw new te(K.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=m,a+=2}else d==="`"?(u=!u,a++):d!=="."||u?(r+=d,a++):(o(),a++)}if(o(),u)throw new te(K.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new mt(t)}static emptyPath(){return new mt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ce{constructor(e){this.path=e}static fromPath(e){return new ce(ze.fromString(e))}static fromName(e){return new ce(ze.fromString(e).popFirst(5))}static empty(){return new ce(ze.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ze.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return ze.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new ce(new ze(e.slice()))}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cu=-1;class Hm{constructor(e,t,r,a){this.indexId=e,this.collectionGroup=t,this.fields=r,this.indexState=a}}function tv(n){return n.fields.find(e=>e.kind===2)}function so(n){return n.fields.filter(e=>e.kind!==2)}Hm.UNKNOWN_ID=-1;class Tm{constructor(e,t){this.fieldPath=e,this.kind=t}}class zh{constructor(e,t){this.sequenceNumber=e,this.offset=t}static empty(){return new zh(0,nr.min())}}function VC(n,e){const t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,a=Ee.fromTimestamp(r===1e9?new gt(t+1,0):new gt(t,r));return new nr(a,ce.empty(),e)}function MC(n){return new nr(n.readTime,n.key,cu)}class nr{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new nr(Ee.min(),ce.empty(),cu)}static max(){return new nr(Ee.max(),ce.empty(),cu)}}function yE(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=ce.comparator(n.documentKey,e.documentKey),t!==0?t:Se(n.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LC="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class UC{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ea(n){if(n.code!==K.FAILED_PRECONDITION||n.message!==LC)throw n;re("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&pe(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new j((r,a)=>{this.nextCallback=o=>{this.wrapSuccess(e,o).next(r,a)},this.catchCallback=o=>{this.wrapFailure(t,o).next(r,a)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof j?t:j.resolve(t)}catch(t){return j.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):j.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):j.reject(t)}static resolve(e){return new j((t,r)=>{t(e)})}static reject(e){return new j((t,r)=>{r(e)})}static waitFor(e){return new j((t,r)=>{let a=0,o=0,u=!1;e.forEach(d=>{++a,d.next(()=>{++o,u&&o===a&&t()},m=>r(m))}),u=!0,o===a&&t()})}static or(e){let t=j.resolve(!1);for(const r of e)t=t.next(a=>a?j.resolve(a):r());return t}static forEach(e,t){const r=[];return e.forEach((a,o)=>{r.push(t.call(this,a,o))}),this.waitFor(r)}static mapArray(e,t){return new j((r,a)=>{const o=e.length,u=new Array(o);let d=0;for(let m=0;m<o;m++){const p=m;t(e[p]).next(y=>{u[p]=y,++d,d===o&&r(u)},y=>a(y))}})}static doWhile(e,t){return new j((r,a)=>{const o=()=>{e()===!0?t().next(()=>{o()},a):r()};o()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jn="SimpleDb";class Pp{static open(e,t,r,a){try{return new Pp(t,e.transaction(a,r))}catch(o){throw new wh(t,o)}}constructor(e,t){this.action=e,this.transaction=t,this.aborted=!1,this.m=new yn,this.transaction.oncomplete=()=>{this.m.resolve()},this.transaction.onabort=()=>{t.error?this.m.reject(new wh(e,t.error)):this.m.resolve()},this.transaction.onerror=r=>{const a=vE(r.target.error);this.m.reject(new wh(e,a))}}get p(){return this.m.promise}abort(e){e&&this.m.reject(e),this.aborted||(re(Jn,"Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}S(){const e=this.transaction;this.aborted||typeof e.commit!="function"||e.commit()}store(e){const t=this.transaction.objectStore(e);return new z4(t)}}class oi{static delete(e){return re(Jn,"Removing database:",e),oo(window.indexedDB.deleteDatabase(e)).toPromise()}static D(){if(!Oh())return!1;if(oi.v())return!0;const e=wt(),t=oi.C(e),r=0<t&&t<10,a=BC(e),o=0<a&&a<4.5;return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||r||o)}static v(){var e;return typeof process<"u"&&((e=process.__PRIVATE_env)===null||e===void 0?void 0:e.F)==="YES"}static M(e,t){return e.store(t)}static C(e){const t=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i),r=t?t[1].split("_").slice(0,2).join("."):"-1";return Number(r)}constructor(e,t,r){this.name=e,this.version=t,this.O=r,oi.C(wt())===12.2&&Vt("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}async N(e){return this.db||(re(Jn,"Opening database:",this.name),this.db=await new Promise((t,r)=>{const a=indexedDB.open(this.name,this.version);a.onsuccess=o=>{const u=o.target.result;t(u)},a.onblocked=()=>{r(new wh(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},a.onerror=o=>{const u=o.target.error;u.name==="VersionError"?r(new te(K.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):u.name==="InvalidStateError"?r(new te(K.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+u)):r(new wh(e,u))},a.onupgradeneeded=o=>{re(Jn,'Database "'+this.name+'" requires upgrade from version:',o.oldVersion);const u=o.target.result;this.O.B(u,a.transaction,o.oldVersion,this.version).next(()=>{re(Jn,"Database upgrade to version "+this.version+" complete")})}})),this.L&&(this.db.onversionchange=t=>this.L(t)),this.db}k(e){this.L=e,this.db&&(this.db.onversionchange=t=>e(t))}async runTransaction(e,t,r,a){const o=t==="readonly";let u=0;for(;;){++u;try{this.db=await this.N(e);const d=Pp.open(this.db,e,o?"readonly":"readwrite",r),m=a(d).next(p=>(d.S(),p)).catch(p=>(d.abort(p),j.reject(p))).toPromise();return m.catch(()=>{}),await d.p,m}catch(d){const m=d,p=m.name!=="FirebaseError"&&u<3;if(re(Jn,"Transaction failed with error:",m.message,"Retrying:",p),this.close(),!p)return Promise.reject(m)}}}close(){this.db&&this.db.close(),this.db=void 0}}function BC(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}class B4{constructor(e){this.q=e,this.$=!1,this.U=null}get isDone(){return this.$}get K(){return this.U}set cursor(e){this.q=e}done(){this.$=!0}W(e){this.U=e}delete(){return oo(this.q.delete())}}class wh extends te{constructor(e,t){super(K.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${t}`),this.name="IndexedDbTransactionError"}}function Ta(n){return n.name==="IndexedDbTransactionError"}class z4{constructor(e){this.store=e}put(e,t){let r;return t!==void 0?(re(Jn,"PUT",this.store.name,e,t),r=this.store.put(t,e)):(re(Jn,"PUT",this.store.name,"<auto-key>",e),r=this.store.put(e)),oo(r)}add(e){return re(Jn,"ADD",this.store.name,e,e),oo(this.store.add(e))}get(e){return oo(this.store.get(e)).next(t=>(t===void 0&&(t=null),re(Jn,"GET",this.store.name,e,t),t))}delete(e){return re(Jn,"DELETE",this.store.name,e),oo(this.store.delete(e))}count(){return re(Jn,"COUNT",this.store.name),oo(this.store.count())}G(e,t){const r=this.options(e,t),a=r.index?this.store.index(r.index):this.store;if(typeof a.getAll=="function"){const o=a.getAll(r.range);return new j((u,d)=>{o.onerror=m=>{d(m.target.error)},o.onsuccess=m=>{u(m.target.result)}})}{const o=this.cursor(r),u=[];return this.j(o,(d,m)=>{u.push(m)}).next(()=>u)}}H(e,t){const r=this.store.getAll(e,t===null?void 0:t);return new j((a,o)=>{r.onerror=u=>{o(u.target.error)},r.onsuccess=u=>{a(u.target.result)}})}J(e,t){re(Jn,"DELETE ALL",this.store.name);const r=this.options(e,t);r.Y=!1;const a=this.cursor(r);return this.j(a,(o,u,d)=>d.delete())}Z(e,t){let r;t?r=e:(r={},t=e);const a=this.cursor(r);return this.j(a,t)}X(e){const t=this.cursor({});return new j((r,a)=>{t.onerror=o=>{const u=vE(o.target.error);a(u)},t.onsuccess=o=>{const u=o.target.result;u?e(u.primaryKey,u.value).next(d=>{d?u.continue():r()}):r()}})}j(e,t){const r=[];return new j((a,o)=>{e.onerror=u=>{o(u.target.error)},e.onsuccess=u=>{const d=u.target.result;if(!d)return void a();const m=new B4(d),p=t(d.primaryKey,d.value,m);if(p instanceof j){const y=p.catch(v=>(m.done(),j.reject(v)));r.push(y)}m.isDone?a():m.K===null?d.continue():d.continue(m.K)}}).next(()=>j.waitFor(r))}options(e,t){let r;return e!==void 0&&(typeof e=="string"?r=e:t=e),{index:r,range:t}}cursor(e){let t="next";if(e.reverse&&(t="prev"),e.index){const r=this.store.index(e.index);return e.Y?r.openKeyCursor(e.range,t):r.openCursor(e.range,t)}return this.store.openCursor(e.range,t)}}function oo(n){return new j((e,t)=>{n.onsuccess=r=>{const a=r.target.result;e(a)},n.onerror=r=>{const a=vE(r.target.error);t(a)}})}let KI=!1;function vE(n){const e=oi.C(wt());if(e>=12.2&&e<13){const t="An internal error was encountered in the Indexed Database server";if(n.message.indexOf(t)>=0){const r=new te("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${t}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return KI||(KI=!0,setTimeout(()=>{throw r},0)),r}}return n}const bh="IndexBackfiller";class F4{constructor(e,t){this.asyncQueue=e,this.ee=t,this.task=null}start(){this.te(15e3)}stop(){this.task&&(this.task.cancel(),this.task=null)}get started(){return this.task!==null}te(e){re(bh,`Scheduled in ${e}ms`),this.task=this.asyncQueue.enqueueAfterDelay("index_backfill",e,async()=>{this.task=null;try{const t=await this.ee.ne();re(bh,`Documents written: ${t}`)}catch(t){Ta(t)?re(bh,"Ignoring IndexedDB error during index backfill: ",t):await Ea(t)}await this.te(6e4)})}}class j4{constructor(e,t){this.localStore=e,this.persistence=t}async ne(e=50){return this.persistence.runTransaction("Backfill Indexes","readwrite-primary",t=>this.re(t,e))}re(e,t){const r=new Set;let a=t,o=!0;return j.doWhile(()=>o===!0&&a>0,()=>this.localStore.indexManager.getNextCollectionGroupToUpdate(e).next(u=>{if(u!==null&&!r.has(u))return re(bh,`Processing collection: ${u}`),this.ie(e,u,a).next(d=>{a-=d,r.add(u)});o=!1})).next(()=>t-a)}ie(e,t,r){return this.localStore.indexManager.getMinOffsetFromCollectionGroup(e,t).next(a=>this.localStore.localDocuments.getNextDocuments(e,t,a,r).next(o=>{const u=o.changes;return this.localStore.indexManager.updateIndexEntries(e,u).next(()=>this.se(a,o)).next(d=>(re(bh,`Updating offset: ${d}`),this.localStore.indexManager.updateCollectionGroup(e,t,d))).next(()=>u.size)}))}se(e,t){let r=e;return t.changes.forEach((a,o)=>{const u=MC(o);yE(u,r)>0&&(r=u)}),new nr(r.readTime,r.documentKey,Math.max(t.batchId,e.largestBatchId))}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jn{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this.oe(r),this._e=r=>t.writeSequenceNumber(r))}oe(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this._e&&this._e(e),e}}jn.ae=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ra=-1;function md(n){return n==null}function Fh(n){return n===0&&1/n==-1/0}function zC(n){return typeof n=="number"&&Number.isInteger(n)&&!Fh(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gm="";function An(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=QI(e)),e=q4(n.get(t),e);return QI(e)}function q4(n,e){let t=e;const r=n.length;for(let a=0;a<r;a++){const o=n.charAt(a);switch(o){case"\0":t+="";break;case Gm:t+="";break;default:t+=o}}return t}function QI(n){return n+Gm+""}function si(n){const e=n.length;if(ye(e>=2),e===2)return ye(n.charAt(0)===Gm&&n.charAt(1)===""),ze.emptyPath();const t=e-2,r=[];let a="";for(let o=0;o<e;){const u=n.indexOf(Gm,o);switch((u<0||u>t)&&pe(),n.charAt(u+1)){case"":const d=n.substring(o,u);let m;a.length===0?m=d:(a+=d,m=a,a=""),r.push(m);break;case"":a+=n.substring(o,u),a+="\0";break;case"":a+=n.substring(o,u+1);break;default:pe()}o=u+2}return new ze(r)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ao="remoteDocuments",pd="owner",kl="owner",jh="mutationQueues",H4="userId",Pr="mutations",WI="batchId",po="userMutationsIndex",YI=["userId","batchId"];/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wm(n,e){return[n,An(e)]}function FC(n,e,t){return[n,An(e),t]}const G4={},hu="documentMutations",$m="remoteDocumentsV14",$4=["prefixPath","collectionGroup","readTime","documentId"],bm="documentKeyIndex",K4=["prefixPath","collectionGroup","documentId"],jC="collectionGroupIndex",Q4=["collectionGroup","readTime","prefixPath","documentId"],qh="remoteDocumentGlobal",nv="remoteDocumentGlobalKey",du="targets",qC="queryTargetsIndex",W4=["canonicalId","targetId"],fu="targetDocuments",Y4=["targetId","path"],EE="documentTargetsIndex",X4=["path","targetId"],Km="targetGlobalKey",wo="targetGlobal",Hh="collectionParents",Z4=["collectionId","parent"],mu="clientMetadata",J4="clientId",xp="bundles",eB="bundleId",Np="namedQueries",tB="name",TE="indexConfiguration",nB="indexId",rv="collectionGroupIndex",rB="collectionGroup",Qm="indexState",iB=["indexId","uid"],HC="sequenceNumberIndex",sB=["uid","sequenceNumber"],Wm="indexEntries",aB=["indexId","uid","arrayValue","directionalValue","orderedDocumentKey","documentKey"],GC="documentKeyIndex",oB=["indexId","uid","orderedDocumentKey"],Op="documentOverlays",lB=["userId","collectionPath","documentId"],iv="collectionPathOverlayIndex",uB=["userId","collectionPath","largestBatchId"],$C="collectionGroupOverlayIndex",cB=["userId","collectionGroup","largestBatchId"],wE="globals",hB="name",KC=[jh,Pr,hu,ao,du,pd,wo,fu,mu,qh,Hh,xp,Np],dB=[...KC,Op],QC=[jh,Pr,hu,$m,du,pd,wo,fu,mu,qh,Hh,xp,Np,Op],WC=QC,bE=[...WC,TE,Qm,Wm],fB=bE,mB=[...bE,wE];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sv extends UC{constructor(e,t){super(),this.ue=e,this.currentSequenceNumber=t}}function Zt(n,e){const t=de(n);return oi.M(t.ue,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function XI(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function wa(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function YC(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lt{constructor(e,t){this.comparator=e,this.root=t||gn.EMPTY}insert(e,t){return new lt(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,gn.BLACK,null,null))}remove(e){return new lt(this.comparator,this.root.remove(e,this.comparator).copy(null,null,gn.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const a=this.comparator(e,r.key);if(a===0)return t+r.left.size;a<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,r)=>(e(t,r),!1))}toString(){const e=[];return this.inorderTraversal((t,r)=>(e.push(`${t}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new tm(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new tm(this.root,e,this.comparator,!1)}getReverseIterator(){return new tm(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new tm(this.root,e,this.comparator,!0)}}class tm{constructor(e,t,r,a){this.isReverse=a,this.nodeStack=[];let o=1;for(;!e.isEmpty();)if(o=t?r(e.key,t):1,t&&a&&(o*=-1),o<0)e=this.isReverse?e.left:e.right;else{if(o===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class gn{constructor(e,t,r,a,o){this.key=e,this.value=t,this.color=r??gn.RED,this.left=a??gn.EMPTY,this.right=o??gn.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,a,o){return new gn(e??this.key,t??this.value,r??this.color,a??this.left,o??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let a=this;const o=r(e,a.key);return a=o<0?a.copy(null,null,null,a.left.insert(e,t,r),null):o===0?a.copy(null,t,null,null,null):a.copy(null,null,null,null,a.right.insert(e,t,r)),a.fixUp()}removeMin(){if(this.left.isEmpty())return gn.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,a=this;if(t(e,a.key)<0)a.left.isEmpty()||a.left.isRed()||a.left.left.isRed()||(a=a.moveRedLeft()),a=a.copy(null,null,null,a.left.remove(e,t),null);else{if(a.left.isRed()&&(a=a.rotateRight()),a.right.isEmpty()||a.right.isRed()||a.right.left.isRed()||(a=a.moveRedRight()),t(e,a.key)===0){if(a.right.isEmpty())return gn.EMPTY;r=a.right.min(),a=a.copy(r.key,r.value,null,null,a.right.removeMin())}a=a.copy(null,null,null,null,a.right.remove(e,t))}return a.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,gn.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,gn.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw pe();const e=this.left.check();if(e!==this.right.check())throw pe();return e+(this.isRed()?0:1)}}gn.EMPTY=null,gn.RED=!0,gn.BLACK=!1;gn.EMPTY=new class{constructor(){this.size=0}get key(){throw pe()}get value(){throw pe()}get color(){throw pe()}get left(){throw pe()}get right(){throw pe()}copy(e,t,r,a,o){return this}insert(e,t,r){return new gn(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nt{constructor(e){this.comparator=e,this.data=new lt(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,r)=>(e(t),!1))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const a=r.getNext();if(this.comparator(a.key,e[1])>=0)return;t(a.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new ZI(this.data.getIterator())}getIteratorFrom(e){return new ZI(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(r=>{t=t.add(r)}),t}isEqual(e){if(!(e instanceof nt)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const a=t.getNext().key,o=r.getNext().key;if(this.comparator(a,o)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new nt(this.comparator);return t.data=e,t}}class ZI{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}function Vl(n){return n.hasNext()?n.getNext():void 0}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qn{constructor(e){this.fields=e,e.sort(mt.comparator)}static empty(){return new qn([])}unionWith(e){let t=new nt(mt.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new qn(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return uu(this.fields,e.fields,(t,r)=>t.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XC extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pB(){return typeof atob<"u"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dt{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(a){try{return atob(a)}catch(o){throw typeof DOMException<"u"&&o instanceof DOMException?new XC("Invalid base64 string: "+o):o}}(e);return new Dt(t)}static fromUint8Array(e){const t=function(a){let o="";for(let u=0;u<a.length;++u)o+=String.fromCharCode(a[u]);return o}(e);return new Dt(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const r=new Uint8Array(t.length);for(let a=0;a<t.length;a++)r[a]=t.charCodeAt(a);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Se(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Dt.EMPTY_BYTE_STRING=new Dt("");const gB=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Xi(n){if(ye(!!n),typeof n=="string"){let e=0;const t=gB.exec(n);if(ye(!!t),t[1]){let a=t[1];a=(a+"000000000").substr(0,9),e=Number(a)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:dt(n.seconds),nanos:dt(n.nanos)}}function dt(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Zi(n){return typeof n=="string"?Dt.fromBase64String(n):Dt.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZC="server_timestamp",JC="__type__",e1="__previous_value__",t1="__local_write_time__";function kp(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{})[JC])===null||t===void 0?void 0:t.stringValue)===ZC}function Vp(n){const e=n.mapValue.fields[e1];return kp(e)?Vp(e):e}function Gh(n){const e=Xi(n.mapValue.fields[t1].timestampValue);return new gt(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _B{constructor(e,t,r,a,o,u,d,m,p){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=a,this.ssl=o,this.forceLongPolling=u,this.autoDetectLongPolling=d,this.longPollingOptions=m,this.useFetchStreams=p}}const av="(default)";class ca{constructor(e,t){this.projectId=e,this.database=t||av}static empty(){return new ca("","")}get isDefaultDatabase(){return this.database===av}isEqual(e){return e instanceof ca&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IE="__type__",n1="__max__",Zs={mapValue:{fields:{__type__:{stringValue:n1}}}},AE="__vector__",pu="value",Im={nullValue:"NULL_VALUE"};function ha(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?kp(n)?4:r1(n)?9007199254740991:Mp(n)?10:11:pe()}function fi(n,e){if(n===e)return!0;const t=ha(n);if(t!==ha(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return Gh(n).isEqual(Gh(e));case 3:return function(a,o){if(typeof a.timestampValue=="string"&&typeof o.timestampValue=="string"&&a.timestampValue.length===o.timestampValue.length)return a.timestampValue===o.timestampValue;const u=Xi(a.timestampValue),d=Xi(o.timestampValue);return u.seconds===d.seconds&&u.nanos===d.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(a,o){return Zi(a.bytesValue).isEqual(Zi(o.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(a,o){return dt(a.geoPointValue.latitude)===dt(o.geoPointValue.latitude)&&dt(a.geoPointValue.longitude)===dt(o.geoPointValue.longitude)}(n,e);case 2:return function(a,o){if("integerValue"in a&&"integerValue"in o)return dt(a.integerValue)===dt(o.integerValue);if("doubleValue"in a&&"doubleValue"in o){const u=dt(a.doubleValue),d=dt(o.doubleValue);return u===d?Fh(u)===Fh(d):isNaN(u)&&isNaN(d)}return!1}(n,e);case 9:return uu(n.arrayValue.values||[],e.arrayValue.values||[],fi);case 10:case 11:return function(a,o){const u=a.mapValue.fields||{},d=o.mapValue.fields||{};if(XI(u)!==XI(d))return!1;for(const m in u)if(u.hasOwnProperty(m)&&(d[m]===void 0||!fi(u[m],d[m])))return!1;return!0}(n,e);default:return pe()}}function $h(n,e){return(n.values||[]).find(t=>fi(t,e))!==void 0}function da(n,e){if(n===e)return 0;const t=ha(n),r=ha(e);if(t!==r)return Se(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return Se(n.booleanValue,e.booleanValue);case 2:return function(o,u){const d=dt(o.integerValue||o.doubleValue),m=dt(u.integerValue||u.doubleValue);return d<m?-1:d>m?1:d===m?0:isNaN(d)?isNaN(m)?0:-1:1}(n,e);case 3:return JI(n.timestampValue,e.timestampValue);case 4:return JI(Gh(n),Gh(e));case 5:return ev(n.stringValue,e.stringValue);case 6:return function(o,u){const d=Zi(o),m=Zi(u);return d.compareTo(m)}(n.bytesValue,e.bytesValue);case 7:return function(o,u){const d=o.split("/"),m=u.split("/");for(let p=0;p<d.length&&p<m.length;p++){const y=Se(d[p],m[p]);if(y!==0)return y}return Se(d.length,m.length)}(n.referenceValue,e.referenceValue);case 8:return function(o,u){const d=Se(dt(o.latitude),dt(u.latitude));return d!==0?d:Se(dt(o.longitude),dt(u.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return eA(n.arrayValue,e.arrayValue);case 10:return function(o,u){var d,m,p,y;const v=o.fields||{},w=u.fields||{},S=(d=v[pu])===null||d===void 0?void 0:d.arrayValue,P=(m=w[pu])===null||m===void 0?void 0:m.arrayValue,U=Se(((p=S==null?void 0:S.values)===null||p===void 0?void 0:p.length)||0,((y=P==null?void 0:P.values)===null||y===void 0?void 0:y.length)||0);return U!==0?U:eA(S,P)}(n.mapValue,e.mapValue);case 11:return function(o,u){if(o===Zs.mapValue&&u===Zs.mapValue)return 0;if(o===Zs.mapValue)return 1;if(u===Zs.mapValue)return-1;const d=o.fields||{},m=Object.keys(d),p=u.fields||{},y=Object.keys(p);m.sort(),y.sort();for(let v=0;v<m.length&&v<y.length;++v){const w=ev(m[v],y[v]);if(w!==0)return w;const S=da(d[m[v]],p[y[v]]);if(S!==0)return S}return Se(m.length,y.length)}(n.mapValue,e.mapValue);default:throw pe()}}function JI(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return Se(n,e);const t=Xi(n),r=Xi(e),a=Se(t.seconds,r.seconds);return a!==0?a:Se(t.nanos,r.nanos)}function eA(n,e){const t=n.values||[],r=e.values||[];for(let a=0;a<t.length&&a<r.length;++a){const o=da(t[a],r[a]);if(o)return o}return Se(t.length,r.length)}function gu(n){return ov(n)}function ov(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(t){const r=Xi(t);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(t){return Zi(t).toBase64()}(n.bytesValue):"referenceValue"in n?function(t){return ce.fromName(t).toString()}(n.referenceValue):"geoPointValue"in n?function(t){return`geo(${t.latitude},${t.longitude})`}(n.geoPointValue):"arrayValue"in n?function(t){let r="[",a=!0;for(const o of t.values||[])a?a=!1:r+=",",r+=ov(o);return r+"]"}(n.arrayValue):"mapValue"in n?function(t){const r=Object.keys(t.fields||{}).sort();let a="{",o=!0;for(const u of r)o?o=!1:a+=",",a+=`${u}:${ov(t.fields[u])}`;return a+"}"}(n.mapValue):pe()}function Am(n){switch(ha(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Vp(n);return e?16+Am(e):16;case 5:return 2*n.stringValue.length;case 6:return Zi(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((a,o)=>a+Am(o),0)}(n.arrayValue);case 10:case 11:return function(r){let a=0;return wa(r.fields,(o,u)=>{a+=o.length+Am(u)}),a}(n.mapValue);default:throw pe()}}function So(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function lv(n){return!!n&&"integerValue"in n}function Kh(n){return!!n&&"arrayValue"in n}function tA(n){return!!n&&"nullValue"in n}function nA(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function Sm(n){return!!n&&"mapValue"in n}function Mp(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{})[IE])===null||t===void 0?void 0:t.stringValue)===AE}function Ih(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return wa(n.mapValue.fields,(t,r)=>e.mapValue.fields[t]=Ih(r)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Ih(n.arrayValue.values[t]);return e}return Object.assign({},n)}function r1(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===n1}const i1={mapValue:{fields:{[IE]:{stringValue:AE},[pu]:{arrayValue:{}}}}};function yB(n){return"nullValue"in n?Im:"booleanValue"in n?{booleanValue:!1}:"integerValue"in n||"doubleValue"in n?{doubleValue:NaN}:"timestampValue"in n?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"stringValue"in n?{stringValue:""}:"bytesValue"in n?{bytesValue:""}:"referenceValue"in n?So(ca.empty(),ce.empty()):"geoPointValue"in n?{geoPointValue:{latitude:-90,longitude:-180}}:"arrayValue"in n?{arrayValue:{}}:"mapValue"in n?Mp(n)?i1:{mapValue:{}}:pe()}function vB(n){return"nullValue"in n?{booleanValue:!1}:"booleanValue"in n?{doubleValue:NaN}:"integerValue"in n||"doubleValue"in n?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"timestampValue"in n?{stringValue:""}:"stringValue"in n?{bytesValue:""}:"bytesValue"in n?So(ca.empty(),ce.empty()):"referenceValue"in n?{geoPointValue:{latitude:-90,longitude:-180}}:"geoPointValue"in n?{arrayValue:{}}:"arrayValue"in n?i1:"mapValue"in n?Mp(n)?{mapValue:{}}:Zs:pe()}function rA(n,e){const t=da(n.value,e.value);return t!==0?t:n.inclusive&&!e.inclusive?-1:!n.inclusive&&e.inclusive?1:0}function iA(n,e){const t=da(n.value,e.value);return t!==0?t:n.inclusive&&!e.inclusive?1:!n.inclusive&&e.inclusive?-1:0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _n{constructor(e){this.value=e}static empty(){return new _n({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!Sm(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Ih(t)}setAll(e){let t=mt.emptyPath(),r={},a=[];e.forEach((u,d)=>{if(!t.isImmediateParentOf(d)){const m=this.getFieldsMap(t);this.applyChanges(m,r,a),r={},a=[],t=d.popLast()}u?r[d.lastSegment()]=Ih(u):a.push(d.lastSegment())});const o=this.getFieldsMap(t);this.applyChanges(o,r,a)}delete(e){const t=this.field(e.popLast());Sm(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return fi(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let a=t.mapValue.fields[e.get(r)];Sm(a)&&a.mapValue.fields||(a={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=a),t=a}return t.mapValue.fields}applyChanges(e,t,r){wa(t,(a,o)=>e[a]=o);for(const a of r)delete e[a]}clone(){return new _n(Ih(this.value))}}function s1(n){const e=[];return wa(n.fields,(t,r)=>{const a=new mt([t]);if(Sm(r)){const o=s1(r.mapValue).fields;if(o.length===0)e.push(a);else for(const u of o)e.push(a.child(u))}else e.push(a)}),new qn(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ht{constructor(e,t,r,a,o,u,d){this.key=e,this.documentType=t,this.version=r,this.readTime=a,this.createTime=o,this.data=u,this.documentState=d}static newInvalidDocument(e){return new ht(e,0,Ee.min(),Ee.min(),Ee.min(),_n.empty(),0)}static newFoundDocument(e,t,r,a){return new ht(e,1,t,Ee.min(),r,a,0)}static newNoDocument(e,t){return new ht(e,2,t,Ee.min(),Ee.min(),_n.empty(),0)}static newUnknownDocument(e,t){return new ht(e,3,t,Ee.min(),Ee.min(),_n.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(Ee.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=_n.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=_n.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Ee.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof ht&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new ht(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fa{constructor(e,t){this.position=e,this.inclusive=t}}function sA(n,e,t){let r=0;for(let a=0;a<n.position.length;a++){const o=e[a],u=n.position[a];if(o.field.isKeyField()?r=ce.comparator(ce.fromName(u.referenceValue),t.key):r=da(u,t.data.field(o.field)),o.dir==="desc"&&(r*=-1),r!==0)break}return r}function aA(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!fi(n.position[t],e.position[t]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qh{constructor(e,t="asc"){this.field=e,this.dir=t}}function EB(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a1{}class Fe extends a1{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new TB(e,t,r):t==="array-contains"?new IB(e,r):t==="in"?new d1(e,r):t==="not-in"?new AB(e,r):t==="array-contains-any"?new SB(e,r):new Fe(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new wB(e,r):new bB(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&this.matchesComparison(da(t,this.value)):t!==null&&ha(this.value)===ha(t)&&this.matchesComparison(da(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return pe()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class tt extends a1{constructor(e,t){super(),this.filters=e,this.op=t,this.ce=null}static create(e,t){return new tt(e,t)}matches(e){return _u(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.ce!==null||(this.ce=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.ce}getFilters(){return Object.assign([],this.filters)}}function _u(n){return n.op==="and"}function uv(n){return n.op==="or"}function SE(n){return o1(n)&&_u(n)}function o1(n){for(const e of n.filters)if(e instanceof tt)return!1;return!0}function cv(n){if(n instanceof Fe)return n.field.canonicalString()+n.op.toString()+gu(n.value);if(SE(n))return n.filters.map(e=>cv(e)).join(",");{const e=n.filters.map(t=>cv(t)).join(",");return`${n.op}(${e})`}}function l1(n,e){return n instanceof Fe?function(r,a){return a instanceof Fe&&r.op===a.op&&r.field.isEqual(a.field)&&fi(r.value,a.value)}(n,e):n instanceof tt?function(r,a){return a instanceof tt&&r.op===a.op&&r.filters.length===a.filters.length?r.filters.reduce((o,u,d)=>o&&l1(u,a.filters[d]),!0):!1}(n,e):void pe()}function u1(n,e){const t=n.filters.concat(e);return tt.create(t,n.op)}function c1(n){return n instanceof Fe?function(t){return`${t.field.canonicalString()} ${t.op} ${gu(t.value)}`}(n):n instanceof tt?function(t){return t.op.toString()+" {"+t.getFilters().map(c1).join(" ,")+"}"}(n):"Filter"}class TB extends Fe{constructor(e,t,r){super(e,t,r),this.key=ce.fromName(r.referenceValue)}matches(e){const t=ce.comparator(e.key,this.key);return this.matchesComparison(t)}}class wB extends Fe{constructor(e,t){super(e,"in",t),this.keys=h1("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class bB extends Fe{constructor(e,t){super(e,"not-in",t),this.keys=h1("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function h1(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(r=>ce.fromName(r.referenceValue))}class IB extends Fe{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Kh(t)&&$h(t.arrayValue,this.value)}}class d1 extends Fe{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&$h(this.value.arrayValue,t)}}class AB extends Fe{constructor(e,t){super(e,"not-in",t)}matches(e){if($h(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&!$h(this.value.arrayValue,t)}}class SB extends Fe{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Kh(t)||!t.arrayValue.values)&&t.arrayValue.values.some(r=>$h(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RB{constructor(e,t=null,r=[],a=[],o=null,u=null,d=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=a,this.limit=o,this.startAt=u,this.endAt=d,this.le=null}}function hv(n,e=null,t=[],r=[],a=null,o=null,u=null){return new RB(n,e,t,r,a,o,u)}function Ro(n){const e=de(n);if(e.le===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(r=>cv(r)).join(","),t+="|ob:",t+=e.orderBy.map(r=>function(o){return o.field.canonicalString()+o.dir}(r)).join(","),md(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(r=>gu(r)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(r=>gu(r)).join(",")),e.le=t}return e.le}function gd(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!EB(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!l1(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!aA(n.startAt,e.startAt)&&aA(n.endAt,e.endAt)}function Ym(n){return ce.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}function Xm(n,e){return n.filters.filter(t=>t instanceof Fe&&t.field.isEqual(e))}function oA(n,e,t){let r=Im,a=!0;for(const o of Xm(n,e)){let u=Im,d=!0;switch(o.op){case"<":case"<=":u=yB(o.value);break;case"==":case"in":case">=":u=o.value;break;case">":u=o.value,d=!1;break;case"!=":case"not-in":u=Im}rA({value:r,inclusive:a},{value:u,inclusive:d})<0&&(r=u,a=d)}if(t!==null){for(let o=0;o<n.orderBy.length;++o)if(n.orderBy[o].field.isEqual(e)){const u=t.position[o];rA({value:r,inclusive:a},{value:u,inclusive:t.inclusive})<0&&(r=u,a=t.inclusive);break}}return{value:r,inclusive:a}}function lA(n,e,t){let r=Zs,a=!0;for(const o of Xm(n,e)){let u=Zs,d=!0;switch(o.op){case">=":case">":u=vB(o.value),d=!1;break;case"==":case"in":case"<=":u=o.value;break;case"<":u=o.value,d=!1;break;case"!=":case"not-in":u=Zs}iA({value:r,inclusive:a},{value:u,inclusive:d})>0&&(r=u,a=d)}if(t!==null){for(let o=0;o<n.orderBy.length;++o)if(n.orderBy[o].field.isEqual(e)){const u=t.position[o];iA({value:r,inclusive:a},{value:u,inclusive:t.inclusive})>0&&(r=u,a=t.inclusive);break}}return{value:r,inclusive:a}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ns{constructor(e,t=null,r=[],a=[],o=null,u="F",d=null,m=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=a,this.limit=o,this.limitType=u,this.startAt=d,this.endAt=m,this.he=null,this.Pe=null,this.Te=null,this.startAt,this.endAt}}function f1(n,e,t,r,a,o,u,d){return new ns(n,e,t,r,a,o,u,d)}function Lu(n){return new ns(n)}function uA(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function RE(n){return n.collectionGroup!==null}function Zl(n){const e=de(n);if(e.he===null){e.he=[];const t=new Set;for(const o of e.explicitOrderBy)e.he.push(o),t.add(o.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(u){let d=new nt(mt.comparator);return u.filters.forEach(m=>{m.getFlattenedFilters().forEach(p=>{p.isInequality()&&(d=d.add(p.field))})}),d})(e).forEach(o=>{t.has(o.canonicalString())||o.isKeyField()||e.he.push(new Qh(o,r))}),t.has(mt.keyField().canonicalString())||e.he.push(new Qh(mt.keyField(),r))}return e.he}function Vn(n){const e=de(n);return e.Pe||(e.Pe=CB(e,Zl(n))),e.Pe}function CB(n,e){if(n.limitType==="F")return hv(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map(a=>{const o=a.dir==="desc"?"asc":"desc";return new Qh(a.field,o)});const t=n.endAt?new fa(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new fa(n.startAt.position,n.startAt.inclusive):null;return hv(n.path,n.collectionGroup,e,n.filters,n.limit,t,r)}}function dv(n,e){const t=n.filters.concat([e]);return new ns(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}function Zm(n,e,t){return new ns(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function _d(n,e){return gd(Vn(n),Vn(e))&&n.limitType===e.limitType}function m1(n){return`${Ro(Vn(n))}|lt:${n.limitType}`}function Fl(n){return`Query(target=${function(t){let r=t.path.canonicalString();return t.collectionGroup!==null&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map(a=>c1(a)).join(", ")}]`),md(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map(a=>function(u){return`${u.field.canonicalString()} (${u.dir})`}(a)).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map(a=>gu(a)).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map(a=>gu(a)).join(",")),`Target(${r})`}(Vn(n))}; limitType=${n.limitType})`}function yd(n,e){return e.isFoundDocument()&&function(r,a){const o=a.key.path;return r.collectionGroup!==null?a.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(o):ce.isDocumentKey(r.path)?r.path.isEqual(o):r.path.isImmediateParentOf(o)}(n,e)&&function(r,a){for(const o of Zl(r))if(!o.field.isKeyField()&&a.data.field(o.field)===null)return!1;return!0}(n,e)&&function(r,a){for(const o of r.filters)if(!o.matches(a))return!1;return!0}(n,e)&&function(r,a){return!(r.startAt&&!function(u,d,m){const p=sA(u,d,m);return u.inclusive?p<=0:p<0}(r.startAt,Zl(r),a)||r.endAt&&!function(u,d,m){const p=sA(u,d,m);return u.inclusive?p>=0:p>0}(r.endAt,Zl(r),a))}(n,e)}function p1(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function g1(n){return(e,t)=>{let r=!1;for(const a of Zl(n)){const o=DB(a,e,t);if(o!==0)return o;r=r||a.field.isKeyField()}return 0}}function DB(n,e,t){const r=n.field.isKeyField()?ce.comparator(e.key,t.key):function(o,u,d){const m=u.data.field(o),p=d.data.field(o);return m!==null&&p!==null?da(m,p):pe()}(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return pe()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rs{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(const[a,o]of r)if(this.equalsFn(a,e))return o}}has(e){return this.get(e)!==void 0}set(e,t){const r=this.mapKeyFn(e),a=this.inner[r];if(a===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let o=0;o<a.length;o++)if(this.equalsFn(a[o][0],e))return void(a[o]=[e,t]);a.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let a=0;a<r.length;a++)if(this.equalsFn(r[a][0],e))return r.length===1?delete this.inner[t]:r.splice(a,1),this.innerSize--,!0;return!1}forEach(e){wa(this.inner,(t,r)=>{for(const[a,o]of r)e(a,o)})}isEmpty(){return YC(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PB=new lt(ce.comparator);function Hn(){return PB}const _1=new lt(ce.comparator);function fh(...n){let e=_1;for(const t of n)e=e.insert(t.key,t);return e}function y1(n){let e=_1;return n.forEach((t,r)=>e=e.insert(t,r.overlayedDocument)),e}function ai(){return Ah()}function v1(){return Ah()}function Ah(){return new rs(n=>n.toString(),(n,e)=>n.isEqual(e))}const xB=new lt(ce.comparator),NB=new nt(ce.comparator);function Pe(...n){let e=NB;for(const t of n)e=e.add(t);return e}const OB=new nt(Se);function CE(){return OB}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function DE(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Fh(e)?"-0":e}}function E1(n){return{integerValue:""+n}}function T1(n,e){return zC(e)?E1(e):DE(n,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lp{constructor(){this._=void 0}}function kB(n,e,t){return n instanceof yu?function(a,o){const u={fields:{[JC]:{stringValue:ZC},[t1]:{timestampValue:{seconds:a.seconds,nanos:a.nanoseconds}}}};return o&&kp(o)&&(o=Vp(o)),o&&(u.fields[e1]=o),{mapValue:u}}(t,e):n instanceof Co?b1(n,e):n instanceof Do?I1(n,e):function(a,o){const u=w1(a,o),d=cA(u)+cA(a.Ie);return lv(u)&&lv(a.Ie)?E1(d):DE(a.serializer,d)}(n,e)}function VB(n,e,t){return n instanceof Co?b1(n,e):n instanceof Do?I1(n,e):t}function w1(n,e){return n instanceof vu?function(r){return lv(r)||function(o){return!!o&&"doubleValue"in o}(r)}(e)?e:{integerValue:0}:null}class yu extends Lp{}class Co extends Lp{constructor(e){super(),this.elements=e}}function b1(n,e){const t=A1(e);for(const r of n.elements)t.some(a=>fi(a,r))||t.push(r);return{arrayValue:{values:t}}}class Do extends Lp{constructor(e){super(),this.elements=e}}function I1(n,e){let t=A1(e);for(const r of n.elements)t=t.filter(a=>!fi(a,r));return{arrayValue:{values:t}}}class vu extends Lp{constructor(e,t){super(),this.serializer=e,this.Ie=t}}function cA(n){return dt(n.integerValue||n.doubleValue)}function A1(n){return Kh(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vd{constructor(e,t){this.field=e,this.transform=t}}function MB(n,e){return n.field.isEqual(e.field)&&function(r,a){return r instanceof Co&&a instanceof Co||r instanceof Do&&a instanceof Do?uu(r.elements,a.elements,fi):r instanceof vu&&a instanceof vu?fi(r.Ie,a.Ie):r instanceof yu&&a instanceof yu}(n.transform,e.transform)}class LB{constructor(e,t){this.version=e,this.transformResults=t}}class pt{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new pt}static exists(e){return new pt(void 0,e)}static updateTime(e){return new pt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Rm(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class Up{}function S1(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new Bu(n.key,pt.none()):new Uu(n.key,n.data,pt.none());{const t=n.data,r=_n.empty();let a=new nt(mt.comparator);for(let o of e.fields)if(!a.has(o)){let u=t.field(o);u===null&&o.length>1&&(o=o.popLast(),u=t.field(o)),u===null?r.delete(o):r.set(o,u),a=a.add(o)}return new is(n.key,r,new qn(a.toArray()),pt.none())}}function UB(n,e,t){n instanceof Uu?function(a,o,u){const d=a.value.clone(),m=dA(a.fieldTransforms,o,u.transformResults);d.setAll(m),o.convertToFoundDocument(u.version,d).setHasCommittedMutations()}(n,e,t):n instanceof is?function(a,o,u){if(!Rm(a.precondition,o))return void o.convertToUnknownDocument(u.version);const d=dA(a.fieldTransforms,o,u.transformResults),m=o.data;m.setAll(R1(a)),m.setAll(d),o.convertToFoundDocument(u.version,m).setHasCommittedMutations()}(n,e,t):function(a,o,u){o.convertToNoDocument(u.version).setHasCommittedMutations()}(0,e,t)}function Sh(n,e,t,r){return n instanceof Uu?function(o,u,d,m){if(!Rm(o.precondition,u))return d;const p=o.value.clone(),y=fA(o.fieldTransforms,m,u);return p.setAll(y),u.convertToFoundDocument(u.version,p).setHasLocalMutations(),null}(n,e,t,r):n instanceof is?function(o,u,d,m){if(!Rm(o.precondition,u))return d;const p=fA(o.fieldTransforms,m,u),y=u.data;return y.setAll(R1(o)),y.setAll(p),u.convertToFoundDocument(u.version,y).setHasLocalMutations(),d===null?null:d.unionWith(o.fieldMask.fields).unionWith(o.fieldTransforms.map(v=>v.field))}(n,e,t,r):function(o,u,d){return Rm(o.precondition,u)?(u.convertToNoDocument(u.version).setHasLocalMutations(),null):d}(n,e,t)}function BB(n,e){let t=null;for(const r of n.fieldTransforms){const a=e.data.field(r.field),o=w1(r.transform,a||null);o!=null&&(t===null&&(t=_n.empty()),t.set(r.field,o))}return t||null}function hA(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(r,a){return r===void 0&&a===void 0||!(!r||!a)&&uu(r,a,(o,u)=>MB(o,u))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class Uu extends Up{constructor(e,t,r,a=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=a,this.type=0}getFieldMask(){return null}}class is extends Up{constructor(e,t,r,a,o=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=a,this.fieldTransforms=o,this.type=1}getFieldMask(){return this.fieldMask}}function R1(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const r=n.data.field(t);e.set(t,r)}}),e}function dA(n,e,t){const r=new Map;ye(n.length===t.length);for(let a=0;a<t.length;a++){const o=n[a],u=o.transform,d=e.data.field(o.field);r.set(o.field,VB(u,d,t[a]))}return r}function fA(n,e,t){const r=new Map;for(const a of n){const o=a.transform,u=t.data.field(a.field);r.set(a.field,kB(o,u,e))}return r}class Bu extends Up{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class PE extends Up{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xE{constructor(e,t,r,a){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=a}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let a=0;a<this.mutations.length;a++){const o=this.mutations[a];o.key.isEqual(e.key)&&UB(o,e,r[a])}}applyToLocalView(e,t){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(t=Sh(r,e,t,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(t=Sh(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const r=v1();return this.mutations.forEach(a=>{const o=e.get(a.key),u=o.overlayedDocument;let d=this.applyToLocalView(u,o.mutatedFields);d=t.has(a.key)?null:d;const m=S1(u,d);m!==null&&r.set(a.key,m),u.isValidDocument()||u.convertToNoDocument(Ee.min())}),r}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),Pe())}isEqual(e){return this.batchId===e.batchId&&uu(this.mutations,e.mutations,(t,r)=>hA(t,r))&&uu(this.baseMutations,e.baseMutations,(t,r)=>hA(t,r))}}class NE{constructor(e,t,r,a){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=a}static from(e,t,r){ye(e.mutations.length===r.length);let a=function(){return xB}();const o=e.mutations;for(let u=0;u<o.length;u++)a=a.insert(o[u].key,r[u].version);return new NE(e,t,r,a)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OE{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zB{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var jt,$e;function C1(n){switch(n){case K.OK:return pe();case K.CANCELLED:case K.UNKNOWN:case K.DEADLINE_EXCEEDED:case K.RESOURCE_EXHAUSTED:case K.INTERNAL:case K.UNAVAILABLE:case K.UNAUTHENTICATED:return!1;case K.INVALID_ARGUMENT:case K.NOT_FOUND:case K.ALREADY_EXISTS:case K.PERMISSION_DENIED:case K.FAILED_PRECONDITION:case K.ABORTED:case K.OUT_OF_RANGE:case K.UNIMPLEMENTED:case K.DATA_LOSS:return!0;default:return pe()}}function D1(n){if(n===void 0)return Vt("GRPC error has no .code"),K.UNKNOWN;switch(n){case jt.OK:return K.OK;case jt.CANCELLED:return K.CANCELLED;case jt.UNKNOWN:return K.UNKNOWN;case jt.DEADLINE_EXCEEDED:return K.DEADLINE_EXCEEDED;case jt.RESOURCE_EXHAUSTED:return K.RESOURCE_EXHAUSTED;case jt.INTERNAL:return K.INTERNAL;case jt.UNAVAILABLE:return K.UNAVAILABLE;case jt.UNAUTHENTICATED:return K.UNAUTHENTICATED;case jt.INVALID_ARGUMENT:return K.INVALID_ARGUMENT;case jt.NOT_FOUND:return K.NOT_FOUND;case jt.ALREADY_EXISTS:return K.ALREADY_EXISTS;case jt.PERMISSION_DENIED:return K.PERMISSION_DENIED;case jt.FAILED_PRECONDITION:return K.FAILED_PRECONDITION;case jt.ABORTED:return K.ABORTED;case jt.OUT_OF_RANGE:return K.OUT_OF_RANGE;case jt.UNIMPLEMENTED:return K.UNIMPLEMENTED;case jt.DATA_LOSS:return K.DATA_LOSS;default:return pe()}}($e=jt||(jt={}))[$e.OK=0]="OK",$e[$e.CANCELLED=1]="CANCELLED",$e[$e.UNKNOWN=2]="UNKNOWN",$e[$e.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",$e[$e.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",$e[$e.NOT_FOUND=5]="NOT_FOUND",$e[$e.ALREADY_EXISTS=6]="ALREADY_EXISTS",$e[$e.PERMISSION_DENIED=7]="PERMISSION_DENIED",$e[$e.UNAUTHENTICATED=16]="UNAUTHENTICATED",$e[$e.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",$e[$e.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",$e[$e.ABORTED=10]="ABORTED",$e[$e.OUT_OF_RANGE=11]="OUT_OF_RANGE",$e[$e.UNIMPLEMENTED=12]="UNIMPLEMENTED",$e[$e.INTERNAL=13]="INTERNAL",$e[$e.UNAVAILABLE=14]="UNAVAILABLE",$e[$e.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FB=new na([4294967295,4294967295],0);function mA(n){const e=_E().encode(n),t=new SC;return t.update(e),new Uint8Array(t.digest())}function pA(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),r=e.getUint32(4,!0),a=e.getUint32(8,!0),o=e.getUint32(12,!0);return[new na([t,r],0),new na([a,o],0)]}class kE{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new mh(`Invalid padding: ${t}`);if(r<0)throw new mh(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new mh(`Invalid hash count: ${r}`);if(e.length===0&&t!==0)throw new mh(`Invalid padding when bitmap length is 0: ${t}`);this.Ee=8*e.length-t,this.de=na.fromNumber(this.Ee)}Ae(e,t,r){let a=e.add(t.multiply(na.fromNumber(r)));return a.compare(FB)===1&&(a=new na([a.getBits(0),a.getBits(1)],0)),a.modulo(this.de).toNumber()}Re(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.Ee===0)return!1;const t=mA(e),[r,a]=pA(t);for(let o=0;o<this.hashCount;o++){const u=this.Ae(r,a,o);if(!this.Re(u))return!1}return!0}static create(e,t,r){const a=e%8==0?0:8-e%8,o=new Uint8Array(Math.ceil(e/8)),u=new kE(o,a,t);return r.forEach(d=>u.insert(d)),u}insert(e){if(this.Ee===0)return;const t=mA(e),[r,a]=pA(t);for(let o=0;o<this.hashCount;o++){const u=this.Ae(r,a,o);this.Ve(u)}}Ve(e){const t=Math.floor(e/8),r=e%8;this.bitmap[t]|=1<<r}}class mh extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ed{constructor(e,t,r,a,o){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=a,this.resolvedLimboDocuments=o}static createSynthesizedRemoteEventForCurrentChange(e,t,r){const a=new Map;return a.set(e,Td.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new Ed(Ee.min(),a,new lt(Se),Hn(),Pe())}}class Td{constructor(e,t,r,a,o){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=a,this.removedDocuments=o}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new Td(r,t,Pe(),Pe(),Pe())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cm{constructor(e,t,r,a){this.me=e,this.removedTargetIds=t,this.key=r,this.fe=a}}class P1{constructor(e,t){this.targetId=e,this.ge=t}}class x1{constructor(e,t,r=Dt.EMPTY_BYTE_STRING,a=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=a}}class gA{constructor(){this.pe=0,this.ye=_A(),this.we=Dt.EMPTY_BYTE_STRING,this.Se=!1,this.be=!0}get current(){return this.Se}get resumeToken(){return this.we}get De(){return this.pe!==0}get ve(){return this.be}Ce(e){e.approximateByteSize()>0&&(this.be=!0,this.we=e)}Fe(){let e=Pe(),t=Pe(),r=Pe();return this.ye.forEach((a,o)=>{switch(o){case 0:e=e.add(a);break;case 2:t=t.add(a);break;case 1:r=r.add(a);break;default:pe()}}),new Td(this.we,this.Se,e,t,r)}Me(){this.be=!1,this.ye=_A()}xe(e,t){this.be=!0,this.ye=this.ye.insert(e,t)}Oe(e){this.be=!0,this.ye=this.ye.remove(e)}Ne(){this.pe+=1}Be(){this.pe-=1,ye(this.pe>=0)}Le(){this.be=!0,this.Se=!0}}class jB{constructor(e){this.ke=e,this.qe=new Map,this.Qe=Hn(),this.$e=nm(),this.Ue=nm(),this.Ke=new lt(Se)}We(e){for(const t of e.me)e.fe&&e.fe.isFoundDocument()?this.Ge(t,e.fe):this.ze(t,e.key,e.fe);for(const t of e.removedTargetIds)this.ze(t,e.key,e.fe)}je(e){this.forEachTarget(e,t=>{const r=this.He(t);switch(e.state){case 0:this.Je(t)&&r.Ce(e.resumeToken);break;case 1:r.Be(),r.De||r.Me(),r.Ce(e.resumeToken);break;case 2:r.Be(),r.De||this.removeTarget(t);break;case 3:this.Je(t)&&(r.Le(),r.Ce(e.resumeToken));break;case 4:this.Je(t)&&(this.Ye(t),r.Ce(e.resumeToken));break;default:pe()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.qe.forEach((r,a)=>{this.Je(a)&&t(a)})}Ze(e){const t=e.targetId,r=e.ge.count,a=this.Xe(t);if(a){const o=a.target;if(Ym(o))if(r===0){const u=new ce(o.path);this.ze(t,u,ht.newNoDocument(u,Ee.min()))}else ye(r===1);else{const u=this.et(t);if(u!==r){const d=this.tt(e),m=d?this.nt(d,e,u):1;if(m!==0){this.Ye(t);const p=m===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(t,p)}}}}}tt(e){const t=e.ge.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:r="",padding:a=0},hashCount:o=0}=t;let u,d;try{u=Zi(r).toUint8Array()}catch(m){if(m instanceof XC)return di("Decoding the base64 bloom filter in existence filter failed ("+m.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw m}try{d=new kE(u,a,o)}catch(m){return di(m instanceof mh?"BloomFilter error: ":"Applying bloom filter failed: ",m),null}return d.Ee===0?null:d}nt(e,t,r){return t.ge.count===r-this.st(e,t.targetId)?0:2}st(e,t){const r=this.ke.getRemoteKeysForTarget(t);let a=0;return r.forEach(o=>{const u=this.ke.it(),d=`projects/${u.projectId}/databases/${u.database}/documents/${o.path.canonicalString()}`;e.mightContain(d)||(this.ze(t,o,null),a++)}),a}ot(e){const t=new Map;this.qe.forEach((o,u)=>{const d=this.Xe(u);if(d){if(o.current&&Ym(d.target)){const m=new ce(d.target.path);this._t(m).has(u)||this.ut(u,m)||this.ze(u,m,ht.newNoDocument(m,e))}o.ve&&(t.set(u,o.Fe()),o.Me())}});let r=Pe();this.Ue.forEach((o,u)=>{let d=!0;u.forEachWhile(m=>{const p=this.Xe(m);return!p||p.purpose==="TargetPurposeLimboResolution"||(d=!1,!1)}),d&&(r=r.add(o))}),this.Qe.forEach((o,u)=>u.setReadTime(e));const a=new Ed(e,t,this.Ke,this.Qe,r);return this.Qe=Hn(),this.$e=nm(),this.Ue=nm(),this.Ke=new lt(Se),a}Ge(e,t){if(!this.Je(e))return;const r=this.ut(e,t.key)?2:0;this.He(e).xe(t.key,r),this.Qe=this.Qe.insert(t.key,t),this.$e=this.$e.insert(t.key,this._t(t.key).add(e)),this.Ue=this.Ue.insert(t.key,this.ct(t.key).add(e))}ze(e,t,r){if(!this.Je(e))return;const a=this.He(e);this.ut(e,t)?a.xe(t,1):a.Oe(t),this.Ue=this.Ue.insert(t,this.ct(t).delete(e)),this.Ue=this.Ue.insert(t,this.ct(t).add(e)),r&&(this.Qe=this.Qe.insert(t,r))}removeTarget(e){this.qe.delete(e)}et(e){const t=this.He(e).Fe();return this.ke.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Ne(e){this.He(e).Ne()}He(e){let t=this.qe.get(e);return t||(t=new gA,this.qe.set(e,t)),t}ct(e){let t=this.Ue.get(e);return t||(t=new nt(Se),this.Ue=this.Ue.insert(e,t)),t}_t(e){let t=this.$e.get(e);return t||(t=new nt(Se),this.$e=this.$e.insert(e,t)),t}Je(e){const t=this.Xe(e)!==null;return t||re("WatchChangeAggregator","Detected inactive target",e),t}Xe(e){const t=this.qe.get(e);return t&&t.De?null:this.ke.lt(e)}Ye(e){this.qe.set(e,new gA),this.ke.getRemoteKeysForTarget(e).forEach(t=>{this.ze(e,t,null)})}ut(e,t){return this.ke.getRemoteKeysForTarget(e).has(t)}}function nm(){return new lt(ce.comparator)}function _A(){return new lt(ce.comparator)}const qB={asc:"ASCENDING",desc:"DESCENDING"},HB={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},GB={and:"AND",or:"OR"};class $B{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function fv(n,e){return n.useProto3Json||md(e)?e:{value:e}}function Eu(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function N1(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function KB(n,e){return Eu(n,e.toTimestamp())}function Mt(n){return ye(!!n),Ee.fromTimestamp(function(t){const r=Xi(t);return new gt(r.seconds,r.nanos)}(n))}function VE(n,e){return mv(n,e).canonicalString()}function mv(n,e){const t=function(a){return new ze(["projects",a.projectId,"databases",a.database])}(n).child("documents");return e===void 0?t:t.child(e)}function O1(n){const e=ze.fromString(n);return ye(q1(e)),e}function Wh(n,e){return VE(n.databaseId,e.path)}function li(n,e){const t=O1(e);if(t.get(1)!==n.databaseId.projectId)throw new te(K.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new te(K.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new ce(M1(t))}function k1(n,e){return VE(n.databaseId,e)}function V1(n){const e=O1(n);return e.length===4?ze.emptyPath():M1(e)}function pv(n){return new ze(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function M1(n){return ye(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function yA(n,e,t){return{name:Wh(n,e),fields:t.value.mapValue.fields}}function L1(n,e,t){const r=li(n,e.name),a=Mt(e.updateTime),o=e.createTime?Mt(e.createTime):Ee.min(),u=new _n({mapValue:{fields:e.fields}}),d=ht.newFoundDocument(r,a,o,u);return t&&d.setHasCommittedMutations(),t?d.setHasCommittedMutations():d}function QB(n,e){return"found"in e?function(r,a){ye(!!a.found),a.found.name,a.found.updateTime;const o=li(r,a.found.name),u=Mt(a.found.updateTime),d=a.found.createTime?Mt(a.found.createTime):Ee.min(),m=new _n({mapValue:{fields:a.found.fields}});return ht.newFoundDocument(o,u,d,m)}(n,e):"missing"in e?function(r,a){ye(!!a.missing),ye(!!a.readTime);const o=li(r,a.missing),u=Mt(a.readTime);return ht.newNoDocument(o,u)}(n,e):pe()}function WB(n,e){let t;if("targetChange"in e){e.targetChange;const r=function(p){return p==="NO_CHANGE"?0:p==="ADD"?1:p==="REMOVE"?2:p==="CURRENT"?3:p==="RESET"?4:pe()}(e.targetChange.targetChangeType||"NO_CHANGE"),a=e.targetChange.targetIds||[],o=function(p,y){return p.useProto3Json?(ye(y===void 0||typeof y=="string"),Dt.fromBase64String(y||"")):(ye(y===void 0||y instanceof Buffer||y instanceof Uint8Array),Dt.fromUint8Array(y||new Uint8Array))}(n,e.targetChange.resumeToken),u=e.targetChange.cause,d=u&&function(p){const y=p.code===void 0?K.UNKNOWN:D1(p.code);return new te(y,p.message||"")}(u);t=new x1(r,a,o,d||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const a=li(n,r.document.name),o=Mt(r.document.updateTime),u=r.document.createTime?Mt(r.document.createTime):Ee.min(),d=new _n({mapValue:{fields:r.document.fields}}),m=ht.newFoundDocument(a,o,u,d),p=r.targetIds||[],y=r.removedTargetIds||[];t=new Cm(p,y,m.key,m)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const a=li(n,r.document),o=r.readTime?Mt(r.readTime):Ee.min(),u=ht.newNoDocument(a,o),d=r.removedTargetIds||[];t=new Cm([],d,u.key,u)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const a=li(n,r.document),o=r.removedTargetIds||[];t=new Cm([],o,a,null)}else{if(!("filter"in e))return pe();{e.filter;const r=e.filter;r.targetId;const{count:a=0,unchangedNames:o}=r,u=new zB(a,o),d=r.targetId;t=new P1(d,u)}}return t}function Yh(n,e){let t;if(e instanceof Uu)t={update:yA(n,e.key,e.value)};else if(e instanceof Bu)t={delete:Wh(n,e.key)};else if(e instanceof is)t={update:yA(n,e.key,e.data),updateMask:tz(e.fieldMask)};else{if(!(e instanceof PE))return pe();t={verify:Wh(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(r=>function(o,u){const d=u.transform;if(d instanceof yu)return{fieldPath:u.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(d instanceof Co)return{fieldPath:u.field.canonicalString(),appendMissingElements:{values:d.elements}};if(d instanceof Do)return{fieldPath:u.field.canonicalString(),removeAllFromArray:{values:d.elements}};if(d instanceof vu)return{fieldPath:u.field.canonicalString(),increment:d.Ie};throw pe()}(0,r))),e.precondition.isNone||(t.currentDocument=function(a,o){return o.updateTime!==void 0?{updateTime:KB(a,o.updateTime)}:o.exists!==void 0?{exists:o.exists}:pe()}(n,e.precondition)),t}function gv(n,e){const t=e.currentDocument?function(o){return o.updateTime!==void 0?pt.updateTime(Mt(o.updateTime)):o.exists!==void 0?pt.exists(o.exists):pt.none()}(e.currentDocument):pt.none(),r=e.updateTransforms?e.updateTransforms.map(a=>function(u,d){let m=null;if("setToServerValue"in d)ye(d.setToServerValue==="REQUEST_TIME"),m=new yu;else if("appendMissingElements"in d){const y=d.appendMissingElements.values||[];m=new Co(y)}else if("removeAllFromArray"in d){const y=d.removeAllFromArray.values||[];m=new Do(y)}else"increment"in d?m=new vu(u,d.increment):pe();const p=mt.fromServerFormat(d.fieldPath);return new vd(p,m)}(n,a)):[];if(e.update){e.update.name;const a=li(n,e.update.name),o=new _n({mapValue:{fields:e.update.fields}});if(e.updateMask){const u=function(m){const p=m.fieldPaths||[];return new qn(p.map(y=>mt.fromServerFormat(y)))}(e.updateMask);return new is(a,o,u,t,r)}return new Uu(a,o,t,r)}if(e.delete){const a=li(n,e.delete);return new Bu(a,t)}if(e.verify){const a=li(n,e.verify);return new PE(a,t)}return pe()}function YB(n,e){return n&&n.length>0?(ye(e!==void 0),n.map(t=>function(a,o){let u=a.updateTime?Mt(a.updateTime):Mt(o);return u.isEqual(Ee.min())&&(u=Mt(o)),new LB(u,a.transformResults||[])}(t,e))):[]}function U1(n,e){return{documents:[k1(n,e.path)]}}function B1(n,e){const t={structuredQuery:{}},r=e.path;let a;e.collectionGroup!==null?(a=r,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(a=r.popLast(),t.structuredQuery.from=[{collectionId:r.lastSegment()}]),t.parent=k1(n,a);const o=function(p){if(p.length!==0)return j1(tt.create(p,"and"))}(e.filters);o&&(t.structuredQuery.where=o);const u=function(p){if(p.length!==0)return p.map(y=>function(w){return{field:jl(w.field),direction:ZB(w.dir)}}(y))}(e.orderBy);u&&(t.structuredQuery.orderBy=u);const d=fv(n,e.limit);return d!==null&&(t.structuredQuery.limit=d),e.startAt&&(t.structuredQuery.startAt=function(p){return{before:p.inclusive,values:p.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(p){return{before:!p.inclusive,values:p.position}}(e.endAt)),{ht:t,parent:a}}function z1(n){let e=V1(n.parent);const t=n.structuredQuery,r=t.from?t.from.length:0;let a=null;if(r>0){ye(r===1);const y=t.from[0];y.allDescendants?a=y.collectionId:e=e.child(y.collectionId)}let o=[];t.where&&(o=function(v){const w=F1(v);return w instanceof tt&&SE(w)?w.getFilters():[w]}(t.where));let u=[];t.orderBy&&(u=function(v){return v.map(w=>function(P){return new Qh(ql(P.field),function(L){switch(L){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(P.direction))}(w))}(t.orderBy));let d=null;t.limit&&(d=function(v){let w;return w=typeof v=="object"?v.value:v,md(w)?null:w}(t.limit));let m=null;t.startAt&&(m=function(v){const w=!!v.before,S=v.values||[];return new fa(S,w)}(t.startAt));let p=null;return t.endAt&&(p=function(v){const w=!v.before,S=v.values||[];return new fa(S,w)}(t.endAt)),f1(e,a,u,o,d,"F",m,p)}function XB(n,e){const t=function(a){switch(a){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return pe()}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function F1(n){return n.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const r=ql(t.unaryFilter.field);return Fe.create(r,"==",{doubleValue:NaN});case"IS_NULL":const a=ql(t.unaryFilter.field);return Fe.create(a,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const o=ql(t.unaryFilter.field);return Fe.create(o,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const u=ql(t.unaryFilter.field);return Fe.create(u,"!=",{nullValue:"NULL_VALUE"});default:return pe()}}(n):n.fieldFilter!==void 0?function(t){return Fe.create(ql(t.fieldFilter.field),function(a){switch(a){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return pe()}}(t.fieldFilter.op),t.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(t){return tt.create(t.compositeFilter.filters.map(r=>F1(r)),function(a){switch(a){case"AND":return"and";case"OR":return"or";default:return pe()}}(t.compositeFilter.op))}(n):pe()}function ZB(n){return qB[n]}function JB(n){return HB[n]}function ez(n){return GB[n]}function jl(n){return{fieldPath:n.canonicalString()}}function ql(n){return mt.fromServerFormat(n.fieldPath)}function j1(n){return n instanceof Fe?function(t){if(t.op==="=="){if(nA(t.value))return{unaryFilter:{field:jl(t.field),op:"IS_NAN"}};if(tA(t.value))return{unaryFilter:{field:jl(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(nA(t.value))return{unaryFilter:{field:jl(t.field),op:"IS_NOT_NAN"}};if(tA(t.value))return{unaryFilter:{field:jl(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:jl(t.field),op:JB(t.op),value:t.value}}}(n):n instanceof tt?function(t){const r=t.getFilters().map(a=>j1(a));return r.length===1?r[0]:{compositeFilter:{op:ez(t.op),filters:r}}}(n):pe()}function tz(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function q1(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gi{constructor(e,t,r,a,o=Ee.min(),u=Ee.min(),d=Dt.EMPTY_BYTE_STRING,m=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=a,this.snapshotVersion=o,this.lastLimboFreeSnapshotVersion=u,this.resumeToken=d,this.expectedCount=m}withSequenceNumber(e){return new Gi(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new Gi(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Gi(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Gi(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H1{constructor(e){this.Tt=e}}function nz(n,e){let t;if(e.document)t=L1(n.Tt,e.document,!!e.hasCommittedMutations);else if(e.noDocument){const r=ce.fromSegments(e.noDocument.path),a=xo(e.noDocument.readTime);t=ht.newNoDocument(r,a),e.hasCommittedMutations&&t.setHasCommittedMutations()}else{if(!e.unknownDocument)return pe();{const r=ce.fromSegments(e.unknownDocument.path),a=xo(e.unknownDocument.version);t=ht.newUnknownDocument(r,a)}}return e.readTime&&t.setReadTime(function(a){const o=new gt(a[0],a[1]);return Ee.fromTimestamp(o)}(e.readTime)),t}function vA(n,e){const t=e.key,r={prefixPath:t.getCollectionPath().popLast().toArray(),collectionGroup:t.collectionGroup,documentId:t.path.lastSegment(),readTime:Jm(e.readTime),hasCommittedMutations:e.hasCommittedMutations};if(e.isFoundDocument())r.document=function(o,u){return{name:Wh(o,u.key),fields:u.data.value.mapValue.fields,updateTime:Eu(o,u.version.toTimestamp()),createTime:Eu(o,u.createTime.toTimestamp())}}(n.Tt,e);else if(e.isNoDocument())r.noDocument={path:t.path.toArray(),readTime:Po(e.version)};else{if(!e.isUnknownDocument())return pe();r.unknownDocument={path:t.path.toArray(),version:Po(e.version)}}return r}function Jm(n){const e=n.toTimestamp();return[e.seconds,e.nanoseconds]}function Po(n){const e=n.toTimestamp();return{seconds:e.seconds,nanoseconds:e.nanoseconds}}function xo(n){const e=new gt(n.seconds,n.nanoseconds);return Ee.fromTimestamp(e)}function lo(n,e){const t=(e.baseMutations||[]).map(o=>gv(n.Tt,o));for(let o=0;o<e.mutations.length-1;++o){const u=e.mutations[o];if(o+1<e.mutations.length&&e.mutations[o+1].transform!==void 0){const d=e.mutations[o+1];u.updateTransforms=d.transform.fieldTransforms,e.mutations.splice(o+1,1),++o}}const r=e.mutations.map(o=>gv(n.Tt,o)),a=gt.fromMillis(e.localWriteTimeMs);return new xE(e.batchId,a,t,r)}function ph(n){const e=xo(n.readTime),t=n.lastLimboFreeSnapshotVersion!==void 0?xo(n.lastLimboFreeSnapshotVersion):Ee.min();let r;return r=function(o){return o.documents!==void 0}(n.query)?function(o){return ye(o.documents.length===1),Vn(Lu(V1(o.documents[0])))}(n.query):function(o){return Vn(z1(o))}(n.query),new Gi(r,n.targetId,"TargetPurposeListen",n.lastListenSequenceNumber,e,t,Dt.fromBase64String(n.resumeToken))}function G1(n,e){const t=Po(e.snapshotVersion),r=Po(e.lastLimboFreeSnapshotVersion);let a;a=Ym(e.target)?U1(n.Tt,e.target):B1(n.Tt,e.target).ht;const o=e.resumeToken.toBase64();return{targetId:e.targetId,canonicalId:Ro(e.target),readTime:t,resumeToken:o,lastListenSequenceNumber:e.sequenceNumber,lastLimboFreeSnapshotVersion:r,query:a}}function ME(n){const e=z1({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Zm(e,e.limit,"L"):e}function Iy(n,e){return new OE(e.largestBatchId,gv(n.Tt,e.overlayMutation))}function EA(n,e){const t=e.path.lastSegment();return[n,An(e.path.popLast()),t]}function TA(n,e,t,r){return{indexId:n,uid:e,sequenceNumber:t,readTime:Po(r.readTime),documentKey:An(r.documentKey.path),largestBatchId:r.largestBatchId}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rz{getBundleMetadata(e,t){return wA(e).get(t).next(r=>{if(r)return function(o){return{id:o.bundleId,createTime:xo(o.createTime),version:o.version}}(r)})}saveBundleMetadata(e,t){return wA(e).put(function(a){return{bundleId:a.id,createTime:Po(Mt(a.createTime)),version:a.version}}(t))}getNamedQuery(e,t){return bA(e).get(t).next(r=>{if(r)return function(o){return{name:o.name,query:ME(o.bundledQuery),readTime:xo(o.readTime)}}(r)})}saveNamedQuery(e,t){return bA(e).put(function(a){return{name:a.name,readTime:Po(Mt(a.readTime)),bundledQuery:a.bundledQuery}}(t))}}function wA(n){return Zt(n,xp)}function bA(n){return Zt(n,Np)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bp{constructor(e,t){this.serializer=e,this.userId=t}static It(e,t){const r=t.uid||"";return new Bp(e,r)}getOverlay(e,t){return rh(e).get(EA(this.userId,t)).next(r=>r?Iy(this.serializer,r):null)}getOverlays(e,t){const r=ai();return j.forEach(t,a=>this.getOverlay(e,a).next(o=>{o!==null&&r.set(a,o)})).next(()=>r)}saveOverlays(e,t,r){const a=[];return r.forEach((o,u)=>{const d=new OE(t,u);a.push(this.Et(e,d))}),j.waitFor(a)}removeOverlaysForBatchId(e,t,r){const a=new Set;t.forEach(u=>a.add(An(u.getCollectionPath())));const o=[];return a.forEach(u=>{const d=IDBKeyRange.bound([this.userId,u,r],[this.userId,u,r+1],!1,!0);o.push(rh(e).J(iv,d))}),j.waitFor(o)}getOverlaysForCollection(e,t,r){const a=ai(),o=An(t),u=IDBKeyRange.bound([this.userId,o,r],[this.userId,o,Number.POSITIVE_INFINITY],!0);return rh(e).G(iv,u).next(d=>{for(const m of d){const p=Iy(this.serializer,m);a.set(p.getKey(),p)}return a})}getOverlaysForCollectionGroup(e,t,r,a){const o=ai();let u;const d=IDBKeyRange.bound([this.userId,t,r],[this.userId,t,Number.POSITIVE_INFINITY],!0);return rh(e).Z({index:$C,range:d},(m,p,y)=>{const v=Iy(this.serializer,p);o.size()<a||v.largestBatchId===u?(o.set(v.getKey(),v),u=v.largestBatchId):y.done()}).next(()=>o)}Et(e,t){return rh(e).put(function(a,o,u){const[d,m,p]=EA(o,u.mutation.key);return{userId:o,collectionPath:m,documentId:p,collectionGroup:u.mutation.key.getCollectionGroup(),largestBatchId:u.largestBatchId,overlayMutation:Yh(a.Tt,u.mutation)}}(this.serializer,this.userId,t))}}function rh(n){return Zt(n,Op)}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iz{dt(e){return Zt(e,wE)}getSessionToken(e){return this.dt(e).get("sessionToken").next(t=>{const r=t==null?void 0:t.value;return r?Dt.fromUint8Array(r):Dt.EMPTY_BYTE_STRING})}setSessionToken(e,t){return this.dt(e).put({name:"sessionToken",value:t.toUint8Array()})}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uo{constructor(){}At(e,t){this.Rt(e,t),t.Vt()}Rt(e,t){if("nullValue"in e)this.ft(t,5);else if("booleanValue"in e)this.ft(t,10),t.gt(e.booleanValue?1:0);else if("integerValue"in e)this.ft(t,15),t.gt(dt(e.integerValue));else if("doubleValue"in e){const r=dt(e.doubleValue);isNaN(r)?this.ft(t,13):(this.ft(t,15),Fh(r)?t.gt(0):t.gt(r))}else if("timestampValue"in e){let r=e.timestampValue;this.ft(t,20),typeof r=="string"&&(r=Xi(r)),t.yt(`${r.seconds||""}`),t.gt(r.nanos||0)}else if("stringValue"in e)this.wt(e.stringValue,t),this.St(t);else if("bytesValue"in e)this.ft(t,30),t.bt(Zi(e.bytesValue)),this.St(t);else if("referenceValue"in e)this.Dt(e.referenceValue,t);else if("geoPointValue"in e){const r=e.geoPointValue;this.ft(t,45),t.gt(r.latitude||0),t.gt(r.longitude||0)}else"mapValue"in e?r1(e)?this.ft(t,Number.MAX_SAFE_INTEGER):Mp(e)?this.vt(e.mapValue,t):(this.Ct(e.mapValue,t),this.St(t)):"arrayValue"in e?(this.Ft(e.arrayValue,t),this.St(t)):pe()}wt(e,t){this.ft(t,25),this.Mt(e,t)}Mt(e,t){t.yt(e)}Ct(e,t){const r=e.fields||{};this.ft(t,55);for(const a of Object.keys(r))this.wt(a,t),this.Rt(r[a],t)}vt(e,t){var r,a;const o=e.fields||{};this.ft(t,53);const u=pu,d=((a=(r=o[u].arrayValue)===null||r===void 0?void 0:r.values)===null||a===void 0?void 0:a.length)||0;this.ft(t,15),t.gt(dt(d)),this.wt(u,t),this.Rt(o[u],t)}Ft(e,t){const r=e.values||[];this.ft(t,50);for(const a of r)this.Rt(a,t)}Dt(e,t){this.ft(t,37),ce.fromName(e).path.forEach(r=>{this.ft(t,60),this.Mt(r,t)})}ft(e,t){e.gt(t)}St(e){e.gt(2)}}uo.xt=new uo;/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law | agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES | CONDITIONS OF ANY KIND, either express | implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ml=255;function sz(n){if(n===0)return 8;let e=0;return n>>4||(e+=4,n<<=4),n>>6||(e+=2,n<<=2),n>>7||(e+=1),e}function IA(n){const e=64-function(r){let a=0;for(let o=0;o<8;++o){const u=sz(255&r[o]);if(a+=u,u!==8)break}return a}(n);return Math.ceil(e/8)}class az{constructor(){this.buffer=new Uint8Array(1024),this.position=0}Ot(e){const t=e[Symbol.iterator]();let r=t.next();for(;!r.done;)this.Nt(r.value),r=t.next();this.Bt()}Lt(e){const t=e[Symbol.iterator]();let r=t.next();for(;!r.done;)this.kt(r.value),r=t.next();this.qt()}Qt(e){for(const t of e){const r=t.charCodeAt(0);if(r<128)this.Nt(r);else if(r<2048)this.Nt(960|r>>>6),this.Nt(128|63&r);else if(t<"\uD800"||"\uDBFF"<t)this.Nt(480|r>>>12),this.Nt(128|63&r>>>6),this.Nt(128|63&r);else{const a=t.codePointAt(0);this.Nt(240|a>>>18),this.Nt(128|63&a>>>12),this.Nt(128|63&a>>>6),this.Nt(128|63&a)}}this.Bt()}$t(e){for(const t of e){const r=t.charCodeAt(0);if(r<128)this.kt(r);else if(r<2048)this.kt(960|r>>>6),this.kt(128|63&r);else if(t<"\uD800"||"\uDBFF"<t)this.kt(480|r>>>12),this.kt(128|63&r>>>6),this.kt(128|63&r);else{const a=t.codePointAt(0);this.kt(240|a>>>18),this.kt(128|63&a>>>12),this.kt(128|63&a>>>6),this.kt(128|63&a)}}this.qt()}Ut(e){const t=this.Kt(e),r=IA(t);this.Wt(1+r),this.buffer[this.position++]=255&r;for(let a=t.length-r;a<t.length;++a)this.buffer[this.position++]=255&t[a]}Gt(e){const t=this.Kt(e),r=IA(t);this.Wt(1+r),this.buffer[this.position++]=~(255&r);for(let a=t.length-r;a<t.length;++a)this.buffer[this.position++]=~(255&t[a])}zt(){this.jt(Ml),this.jt(255)}Ht(){this.Jt(Ml),this.Jt(255)}reset(){this.position=0}seed(e){this.Wt(e.length),this.buffer.set(e,this.position),this.position+=e.length}Yt(){return this.buffer.slice(0,this.position)}Kt(e){const t=function(o){const u=new DataView(new ArrayBuffer(8));return u.setFloat64(0,o,!1),new Uint8Array(u.buffer)}(e),r=!!(128&t[0]);t[0]^=r?255:128;for(let a=1;a<t.length;++a)t[a]^=r?255:0;return t}Nt(e){const t=255&e;t===0?(this.jt(0),this.jt(255)):t===Ml?(this.jt(Ml),this.jt(0)):this.jt(t)}kt(e){const t=255&e;t===0?(this.Jt(0),this.Jt(255)):t===Ml?(this.Jt(Ml),this.Jt(0)):this.Jt(e)}Bt(){this.jt(0),this.jt(1)}qt(){this.Jt(0),this.Jt(1)}jt(e){this.Wt(1),this.buffer[this.position++]=e}Jt(e){this.Wt(1),this.buffer[this.position++]=~e}Wt(e){const t=e+this.position;if(t<=this.buffer.length)return;let r=2*this.buffer.length;r<t&&(r=t);const a=new Uint8Array(r);a.set(this.buffer),this.buffer=a}}class oz{constructor(e){this.Zt=e}bt(e){this.Zt.Ot(e)}yt(e){this.Zt.Qt(e)}gt(e){this.Zt.Ut(e)}Vt(){this.Zt.zt()}}class lz{constructor(e){this.Zt=e}bt(e){this.Zt.Lt(e)}yt(e){this.Zt.$t(e)}gt(e){this.Zt.Gt(e)}Vt(){this.Zt.Ht()}}class ih{constructor(){this.Zt=new az,this.Xt=new oz(this.Zt),this.en=new lz(this.Zt)}seed(e){this.Zt.seed(e)}tn(e){return e===0?this.Xt:this.en}Yt(){return this.Zt.Yt()}reset(){this.Zt.reset()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class co{constructor(e,t,r,a){this.indexId=e,this.documentKey=t,this.arrayValue=r,this.directionalValue=a}nn(){const e=this.directionalValue.length,t=e===0||this.directionalValue[e-1]===255?e+1:e,r=new Uint8Array(t);return r.set(this.directionalValue,0),t!==e?r.set([0],this.directionalValue.length):++r[r.length-1],new co(this.indexId,this.documentKey,this.arrayValue,r)}}function Hs(n,e){let t=n.indexId-e.indexId;return t!==0?t:(t=AA(n.arrayValue,e.arrayValue),t!==0?t:(t=AA(n.directionalValue,e.directionalValue),t!==0?t:ce.comparator(n.documentKey,e.documentKey)))}function AA(n,e){for(let t=0;t<n.length&&t<e.length;++t){const r=n[t]-e[t];if(r!==0)return r}return n.length-e.length}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SA{constructor(e){this.rn=new nt((t,r)=>mt.comparator(t.field,r.field)),this.collectionId=e.collectionGroup!=null?e.collectionGroup:e.path.lastSegment(),this.sn=e.orderBy,this._n=[];for(const t of e.filters){const r=t;r.isInequality()?this.rn=this.rn.add(r):this._n.push(r)}}get an(){return this.rn.size>1}un(e){if(ye(e.collectionGroup===this.collectionId),this.an)return!1;const t=tv(e);if(t!==void 0&&!this.cn(t))return!1;const r=so(e);let a=new Set,o=0,u=0;for(;o<r.length&&this.cn(r[o]);++o)a=a.add(r[o].fieldPath.canonicalString());if(o===r.length)return!0;if(this.rn.size>0){const d=this.rn.getIterator().getNext();if(!a.has(d.field.canonicalString())){const m=r[o];if(!this.ln(d,m)||!this.hn(this.sn[u++],m))return!1}++o}for(;o<r.length;++o){const d=r[o];if(u>=this.sn.length||!this.hn(this.sn[u++],d))return!1}return!0}Pn(){if(this.an)return null;let e=new nt(mt.comparator);const t=[];for(const r of this._n)if(!r.field.isKeyField())if(r.op==="array-contains"||r.op==="array-contains-any")t.push(new Tm(r.field,2));else{if(e.has(r.field))continue;e=e.add(r.field),t.push(new Tm(r.field,0))}for(const r of this.sn)r.field.isKeyField()||e.has(r.field)||(e=e.add(r.field),t.push(new Tm(r.field,r.dir==="asc"?0:1)));return new Hm(Hm.UNKNOWN_ID,this.collectionId,t,zh.empty())}cn(e){for(const t of this._n)if(this.ln(t,e))return!0;return!1}ln(e,t){if(e===void 0||!e.field.isEqual(t.fieldPath))return!1;const r=e.op==="array-contains"||e.op==="array-contains-any";return t.kind===2===r}hn(e,t){return!!e.field.isEqual(t.fieldPath)&&(t.kind===0&&e.dir==="asc"||t.kind===1&&e.dir==="desc")}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $1(n){var e,t;if(ye(n instanceof Fe||n instanceof tt),n instanceof Fe){if(n instanceof d1){const a=((t=(e=n.value.arrayValue)===null||e===void 0?void 0:e.values)===null||t===void 0?void 0:t.map(o=>Fe.create(n.field,"==",o)))||[];return tt.create(a,"or")}return n}const r=n.filters.map(a=>$1(a));return tt.create(r,n.op)}function uz(n){if(n.getFilters().length===0)return[];const e=vv($1(n));return ye(K1(e)),_v(e)||yv(e)?[e]:e.getFilters()}function _v(n){return n instanceof Fe}function yv(n){return n instanceof tt&&SE(n)}function K1(n){return _v(n)||yv(n)||function(t){if(t instanceof tt&&uv(t)){for(const r of t.getFilters())if(!_v(r)&&!yv(r))return!1;return!0}return!1}(n)}function vv(n){if(ye(n instanceof Fe||n instanceof tt),n instanceof Fe)return n;if(n.filters.length===1)return vv(n.filters[0]);const e=n.filters.map(r=>vv(r));let t=tt.create(e,n.op);return t=ep(t),K1(t)?t:(ye(t instanceof tt),ye(_u(t)),ye(t.filters.length>1),t.filters.reduce((r,a)=>LE(r,a)))}function LE(n,e){let t;return ye(n instanceof Fe||n instanceof tt),ye(e instanceof Fe||e instanceof tt),t=n instanceof Fe?e instanceof Fe?function(a,o){return tt.create([a,o],"and")}(n,e):RA(n,e):e instanceof Fe?RA(e,n):function(a,o){if(ye(a.filters.length>0&&o.filters.length>0),_u(a)&&_u(o))return u1(a,o.getFilters());const u=uv(a)?a:o,d=uv(a)?o:a,m=u.filters.map(p=>LE(p,d));return tt.create(m,"or")}(n,e),ep(t)}function RA(n,e){if(_u(e))return u1(e,n.getFilters());{const t=e.filters.map(r=>LE(n,r));return tt.create(t,"or")}}function ep(n){if(ye(n instanceof Fe||n instanceof tt),n instanceof Fe)return n;const e=n.getFilters();if(e.length===1)return ep(e[0]);if(o1(n))return n;const t=e.map(a=>ep(a)),r=[];return t.forEach(a=>{a instanceof Fe?r.push(a):a instanceof tt&&(a.op===n.op?r.push(...a.filters):r.push(a))}),r.length===1?r[0]:tt.create(r,n.op)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cz{constructor(){this.Tn=new UE}addToCollectionParentIndex(e,t){return this.Tn.add(t),j.resolve()}getCollectionParents(e,t){return j.resolve(this.Tn.getEntries(t))}addFieldIndex(e,t){return j.resolve()}deleteFieldIndex(e,t){return j.resolve()}deleteAllFieldIndexes(e){return j.resolve()}createTargetIndexes(e,t){return j.resolve()}getDocumentsMatchingTarget(e,t){return j.resolve(null)}getIndexType(e,t){return j.resolve(0)}getFieldIndexes(e,t){return j.resolve([])}getNextCollectionGroupToUpdate(e){return j.resolve(null)}getMinOffset(e,t){return j.resolve(nr.min())}getMinOffsetFromCollectionGroup(e,t){return j.resolve(nr.min())}updateCollectionGroup(e,t,r){return j.resolve()}updateIndexEntries(e,t){return j.resolve()}}class UE{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),a=this.index[t]||new nt(ze.comparator),o=!a.has(r);return this.index[t]=a.add(r),o}has(e){const t=e.lastSegment(),r=e.popLast(),a=this.index[t];return a&&a.has(r)}getEntries(e){return(this.index[e]||new nt(ze.comparator)).toArray()}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CA="IndexedDbIndexManager",rm=new Uint8Array(0);class hz{constructor(e,t){this.databaseId=t,this.In=new UE,this.En=new rs(r=>Ro(r),(r,a)=>gd(r,a)),this.uid=e.uid||""}addToCollectionParentIndex(e,t){if(!this.In.has(t)){const r=t.lastSegment(),a=t.popLast();e.addOnCommittedListener(()=>{this.In.add(t)});const o={collectionId:r,parent:An(a)};return DA(e).put(o)}return j.resolve()}getCollectionParents(e,t){const r=[],a=IDBKeyRange.bound([t,""],[kC(t),""],!1,!0);return DA(e).G(a).next(o=>{for(const u of o){if(u.collectionId!==t)break;r.push(si(u.parent))}return r})}addFieldIndex(e,t){const r=sh(e),a=function(d){return{indexId:d.indexId,collectionGroup:d.collectionGroup,fields:d.fields.map(m=>[m.fieldPath.canonicalString(),m.kind])}}(t);delete a.indexId;const o=r.add(a);if(t.indexState){const u=Ul(e);return o.next(d=>{u.put(TA(d,this.uid,t.indexState.sequenceNumber,t.indexState.offset))})}return o.next()}deleteFieldIndex(e,t){const r=sh(e),a=Ul(e),o=Ll(e);return r.delete(t.indexId).next(()=>a.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0))).next(()=>o.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0)))}deleteAllFieldIndexes(e){const t=sh(e),r=Ll(e),a=Ul(e);return t.J().next(()=>r.J()).next(()=>a.J())}createTargetIndexes(e,t){return j.forEach(this.dn(t),r=>this.getIndexType(e,r).next(a=>{if(a===0||a===1){const o=new SA(r).Pn();if(o!=null)return this.addFieldIndex(e,o)}}))}getDocumentsMatchingTarget(e,t){const r=Ll(e);let a=!0;const o=new Map;return j.forEach(this.dn(t),u=>this.An(e,u).next(d=>{a&&(a=!!d),o.set(u,d)})).next(()=>{if(a){let u=Pe();const d=[];return j.forEach(o,(m,p)=>{re(CA,`Using index ${function($){return`id=${$.indexId}|cg=${$.collectionGroup}|f=${$.fields.map(oe=>`${oe.fieldPath}:${oe.kind}`).join(",")}`}(m)} to execute ${Ro(t)}`);const y=function($,oe){const ae=tv(oe);if(ae===void 0)return null;for(const le of Xm($,ae.fieldPath))switch(le.op){case"array-contains-any":return le.value.arrayValue.values||[];case"array-contains":return[le.value]}return null}(p,m),v=function($,oe){const ae=new Map;for(const le of so(oe))for(const D of Xm($,le.fieldPath))switch(D.op){case"==":case"in":ae.set(le.fieldPath.canonicalString(),D.value);break;case"not-in":case"!=":return ae.set(le.fieldPath.canonicalString(),D.value),Array.from(ae.values())}return null}(p,m),w=function($,oe){const ae=[];let le=!0;for(const D of so(oe)){const R=D.kind===0?oA($,D.fieldPath,$.startAt):lA($,D.fieldPath,$.startAt);ae.push(R.value),le&&(le=R.inclusive)}return new fa(ae,le)}(p,m),S=function($,oe){const ae=[];let le=!0;for(const D of so(oe)){const R=D.kind===0?lA($,D.fieldPath,$.endAt):oA($,D.fieldPath,$.endAt);ae.push(R.value),le&&(le=R.inclusive)}return new fa(ae,le)}(p,m),P=this.Rn(m,p,w),U=this.Rn(m,p,S),L=this.Vn(m,p,v),H=this.mn(m.indexId,y,P,w.inclusive,U,S.inclusive,L);return j.forEach(H,Y=>r.H(Y,t.limit).next($=>{$.forEach(oe=>{const ae=ce.fromSegments(oe.documentKey);u.has(ae)||(u=u.add(ae),d.push(ae))})}))}).next(()=>d)}return j.resolve(null)})}dn(e){let t=this.En.get(e);return t||(e.filters.length===0?t=[e]:t=uz(tt.create(e.filters,"and")).map(r=>hv(e.path,e.collectionGroup,e.orderBy,r.getFilters(),e.limit,e.startAt,e.endAt)),this.En.set(e,t),t)}mn(e,t,r,a,o,u,d){const m=(t!=null?t.length:1)*Math.max(r.length,o.length),p=m/(t!=null?t.length:1),y=[];for(let v=0;v<m;++v){const w=t?this.fn(t[v/p]):rm,S=this.gn(e,w,r[v%p],a),P=this.pn(e,w,o[v%p],u),U=d.map(L=>this.gn(e,w,L,!0));y.push(...this.createRange(S,P,U))}return y}gn(e,t,r,a){const o=new co(e,ce.empty(),t,r);return a?o:o.nn()}pn(e,t,r,a){const o=new co(e,ce.empty(),t,r);return a?o.nn():o}An(e,t){const r=new SA(t),a=t.collectionGroup!=null?t.collectionGroup:t.path.lastSegment();return this.getFieldIndexes(e,a).next(o=>{let u=null;for(const d of o)r.un(d)&&(!u||d.fields.length>u.fields.length)&&(u=d);return u})}getIndexType(e,t){let r=2;const a=this.dn(t);return j.forEach(a,o=>this.An(e,o).next(u=>{u?r!==0&&u.fields.length<function(m){let p=new nt(mt.comparator),y=!1;for(const v of m.filters)for(const w of v.getFlattenedFilters())w.field.isKeyField()||(w.op==="array-contains"||w.op==="array-contains-any"?y=!0:p=p.add(w.field));for(const v of m.orderBy)v.field.isKeyField()||(p=p.add(v.field));return p.size+(y?1:0)}(o)&&(r=1):r=0})).next(()=>function(u){return u.limit!==null}(t)&&a.length>1&&r===2?1:r)}yn(e,t){const r=new ih;for(const a of so(e)){const o=t.data.field(a.fieldPath);if(o==null)return null;const u=r.tn(a.kind);uo.xt.At(o,u)}return r.Yt()}fn(e){const t=new ih;return uo.xt.At(e,t.tn(0)),t.Yt()}wn(e,t){const r=new ih;return uo.xt.At(So(this.databaseId,t),r.tn(function(o){const u=so(o);return u.length===0?0:u[u.length-1].kind}(e))),r.Yt()}Vn(e,t,r){if(r===null)return[];let a=[];a.push(new ih);let o=0;for(const u of so(e)){const d=r[o++];for(const m of a)if(this.Sn(t,u.fieldPath)&&Kh(d))a=this.bn(a,u,d);else{const p=m.tn(u.kind);uo.xt.At(d,p)}}return this.Dn(a)}Rn(e,t,r){return this.Vn(e,t,r.position)}Dn(e){const t=[];for(let r=0;r<e.length;++r)t[r]=e[r].Yt();return t}bn(e,t,r){const a=[...e],o=[];for(const u of r.arrayValue.values||[])for(const d of a){const m=new ih;m.seed(d.Yt()),uo.xt.At(u,m.tn(t.kind)),o.push(m)}return o}Sn(e,t){return!!e.filters.find(r=>r instanceof Fe&&r.field.isEqual(t)&&(r.op==="in"||r.op==="not-in"))}getFieldIndexes(e,t){const r=sh(e),a=Ul(e);return(t?r.G(rv,IDBKeyRange.bound(t,t)):r.G()).next(o=>{const u=[];return j.forEach(o,d=>a.get([d.indexId,this.uid]).next(m=>{u.push(function(y,v){const w=v?new zh(v.sequenceNumber,new nr(xo(v.readTime),new ce(si(v.documentKey)),v.largestBatchId)):zh.empty(),S=y.fields.map(([P,U])=>new Tm(mt.fromServerFormat(P),U));return new Hm(y.indexId,y.collectionGroup,S,w)}(d,m))})).next(()=>u)})}getNextCollectionGroupToUpdate(e){return this.getFieldIndexes(e).next(t=>t.length===0?null:(t.sort((r,a)=>{const o=r.indexState.sequenceNumber-a.indexState.sequenceNumber;return o!==0?o:Se(r.collectionGroup,a.collectionGroup)}),t[0].collectionGroup))}updateCollectionGroup(e,t,r){const a=sh(e),o=Ul(e);return this.vn(e).next(u=>a.G(rv,IDBKeyRange.bound(t,t)).next(d=>j.forEach(d,m=>o.put(TA(m.indexId,this.uid,u,r)))))}updateIndexEntries(e,t){const r=new Map;return j.forEach(t,(a,o)=>{const u=r.get(a.collectionGroup);return(u?j.resolve(u):this.getFieldIndexes(e,a.collectionGroup)).next(d=>(r.set(a.collectionGroup,d),j.forEach(d,m=>this.Cn(e,a,m).next(p=>{const y=this.Fn(o,m);return p.isEqual(y)?j.resolve():this.Mn(e,o,m,p,y)}))))})}xn(e,t,r,a){return Ll(e).put({indexId:a.indexId,uid:this.uid,arrayValue:a.arrayValue,directionalValue:a.directionalValue,orderedDocumentKey:this.wn(r,t.key),documentKey:t.key.path.toArray()})}On(e,t,r,a){return Ll(e).delete([a.indexId,this.uid,a.arrayValue,a.directionalValue,this.wn(r,t.key),t.key.path.toArray()])}Cn(e,t,r){const a=Ll(e);let o=new nt(Hs);return a.Z({index:GC,range:IDBKeyRange.only([r.indexId,this.uid,this.wn(r,t)])},(u,d)=>{o=o.add(new co(r.indexId,t,d.arrayValue,d.directionalValue))}).next(()=>o)}Fn(e,t){let r=new nt(Hs);const a=this.yn(t,e);if(a==null)return r;const o=tv(t);if(o!=null){const u=e.data.field(o.fieldPath);if(Kh(u))for(const d of u.arrayValue.values||[])r=r.add(new co(t.indexId,e.key,this.fn(d),a))}else r=r.add(new co(t.indexId,e.key,rm,a));return r}Mn(e,t,r,a,o){re(CA,"Updating index entries for document '%s'",t.key);const u=[];return function(m,p,y,v,w){const S=m.getIterator(),P=p.getIterator();let U=Vl(S),L=Vl(P);for(;U||L;){let H=!1,Y=!1;if(U&&L){const $=y(U,L);$<0?Y=!0:$>0&&(H=!0)}else U!=null?Y=!0:H=!0;H?(v(L),L=Vl(P)):Y?(w(U),U=Vl(S)):(U=Vl(S),L=Vl(P))}}(a,o,Hs,d=>{u.push(this.xn(e,t,r,d))},d=>{u.push(this.On(e,t,r,d))}),j.waitFor(u)}vn(e){let t=1;return Ul(e).Z({index:HC,reverse:!0,range:IDBKeyRange.upperBound([this.uid,Number.MAX_SAFE_INTEGER])},(r,a,o)=>{o.done(),t=a.sequenceNumber+1}).next(()=>t)}createRange(e,t,r){r=r.sort((u,d)=>Hs(u,d)).filter((u,d,m)=>!d||Hs(u,m[d-1])!==0);const a=[];a.push(e);for(const u of r){const d=Hs(u,e),m=Hs(u,t);if(d===0)a[0]=e.nn();else if(d>0&&m<0)a.push(u),a.push(u.nn());else if(m>0)break}a.push(t);const o=[];for(let u=0;u<a.length;u+=2){if(this.Nn(a[u],a[u+1]))return[];const d=[a[u].indexId,this.uid,a[u].arrayValue,a[u].directionalValue,rm,[]],m=[a[u+1].indexId,this.uid,a[u+1].arrayValue,a[u+1].directionalValue,rm,[]];o.push(IDBKeyRange.bound(d,m))}return o}Nn(e,t){return Hs(e,t)>0}getMinOffsetFromCollectionGroup(e,t){return this.getFieldIndexes(e,t).next(PA)}getMinOffset(e,t){return j.mapArray(this.dn(t),r=>this.An(e,r).next(a=>a||pe())).next(PA)}}function DA(n){return Zt(n,Hh)}function Ll(n){return Zt(n,Wm)}function sh(n){return Zt(n,TE)}function Ul(n){return Zt(n,Qm)}function PA(n){ye(n.length!==0);let e=n[0].indexState.offset,t=e.largestBatchId;for(let r=1;r<n.length;r++){const a=n[r].indexState.offset;yE(a,e)<0&&(e=a),t<a.largestBatchId&&(t=a.largestBatchId)}return new nr(e.readTime,e.documentKey,t)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xA={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},Q1=41943040;class In{static withCacheSize(e){return new In(e,In.DEFAULT_COLLECTION_PERCENTILE,In.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function W1(n,e,t){const r=n.store(Pr),a=n.store(hu),o=[],u=IDBKeyRange.only(t.batchId);let d=0;const m=r.Z({range:u},(y,v,w)=>(d++,w.delete()));o.push(m.next(()=>{ye(d===1)}));const p=[];for(const y of t.mutations){const v=FC(e,y.key.path,t.batchId);o.push(a.delete(v)),p.push(y.key)}return j.waitFor(o).next(()=>p)}function tp(n){if(!n)return 0;let e;if(n.document)e=n.document;else if(n.unknownDocument)e=n.unknownDocument;else{if(!n.noDocument)throw pe();e=n.noDocument}return JSON.stringify(e).length}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */In.DEFAULT_COLLECTION_PERCENTILE=10,In.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,In.DEFAULT=new In(Q1,In.DEFAULT_COLLECTION_PERCENTILE,In.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),In.DISABLED=new In(-1,0,0);class zp{constructor(e,t,r,a){this.userId=e,this.serializer=t,this.indexManager=r,this.referenceDelegate=a,this.Bn={}}static It(e,t,r,a){ye(e.uid!=="");const o=e.isAuthenticated()?e.uid:"";return new zp(o,t,r,a)}checkEmpty(e){let t=!0;const r=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return Gs(e).Z({index:po,range:r},(a,o,u)=>{t=!1,u.done()}).next(()=>t)}addMutationBatch(e,t,r,a){const o=Hl(e),u=Gs(e);return u.add({}).next(d=>{ye(typeof d=="number");const m=new xE(d,t,r,a),p=function(S,P,U){const L=U.baseMutations.map(Y=>Yh(S.Tt,Y)),H=U.mutations.map(Y=>Yh(S.Tt,Y));return{userId:P,batchId:U.batchId,localWriteTimeMs:U.localWriteTime.toMillis(),baseMutations:L,mutations:H}}(this.serializer,this.userId,m),y=[];let v=new nt((w,S)=>Se(w.canonicalString(),S.canonicalString()));for(const w of a){const S=FC(this.userId,w.key.path,d);v=v.add(w.key.path.popLast()),y.push(u.put(p)),y.push(o.put(S,G4))}return v.forEach(w=>{y.push(this.indexManager.addToCollectionParentIndex(e,w))}),e.addOnCommittedListener(()=>{this.Bn[d]=m.keys()}),j.waitFor(y).next(()=>m)})}lookupMutationBatch(e,t){return Gs(e).get(t).next(r=>r?(ye(r.userId===this.userId),lo(this.serializer,r)):null)}Ln(e,t){return this.Bn[t]?j.resolve(this.Bn[t]):this.lookupMutationBatch(e,t).next(r=>{if(r){const a=r.keys();return this.Bn[t]=a,a}return null})}getNextMutationBatchAfterBatchId(e,t){const r=t+1,a=IDBKeyRange.lowerBound([this.userId,r]);let o=null;return Gs(e).Z({index:po,range:a},(u,d,m)=>{d.userId===this.userId&&(ye(d.batchId>=r),o=lo(this.serializer,d)),m.done()}).next(()=>o)}getHighestUnacknowledgedBatchId(e){const t=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]);let r=ra;return Gs(e).Z({index:po,range:t,reverse:!0},(a,o,u)=>{r=o.batchId,u.done()}).next(()=>r)}getAllMutationBatches(e){const t=IDBKeyRange.bound([this.userId,ra],[this.userId,Number.POSITIVE_INFINITY]);return Gs(e).G(po,t).next(r=>r.map(a=>lo(this.serializer,a)))}getAllMutationBatchesAffectingDocumentKey(e,t){const r=wm(this.userId,t.path),a=IDBKeyRange.lowerBound(r),o=[];return Hl(e).Z({range:a},(u,d,m)=>{const[p,y,v]=u,w=si(y);if(p===this.userId&&t.path.isEqual(w))return Gs(e).get(v).next(S=>{if(!S)throw pe();ye(S.userId===this.userId),o.push(lo(this.serializer,S))});m.done()}).next(()=>o)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new nt(Se);const a=[];return t.forEach(o=>{const u=wm(this.userId,o.path),d=IDBKeyRange.lowerBound(u),m=Hl(e).Z({range:d},(p,y,v)=>{const[w,S,P]=p,U=si(S);w===this.userId&&o.path.isEqual(U)?r=r.add(P):v.done()});a.push(m)}),j.waitFor(a).next(()=>this.kn(e,r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,a=r.length+1,o=wm(this.userId,r),u=IDBKeyRange.lowerBound(o);let d=new nt(Se);return Hl(e).Z({range:u},(m,p,y)=>{const[v,w,S]=m,P=si(w);v===this.userId&&r.isPrefixOf(P)?P.length===a&&(d=d.add(S)):y.done()}).next(()=>this.kn(e,d))}kn(e,t){const r=[],a=[];return t.forEach(o=>{a.push(Gs(e).get(o).next(u=>{if(u===null)throw pe();ye(u.userId===this.userId),r.push(lo(this.serializer,u))}))}),j.waitFor(a).next(()=>r)}removeMutationBatch(e,t){return W1(e.ue,this.userId,t).next(r=>(e.addOnCommittedListener(()=>{this.qn(t.batchId)}),j.forEach(r,a=>this.referenceDelegate.markPotentiallyOrphaned(e,a))))}qn(e){delete this.Bn[e]}performConsistencyCheck(e){return this.checkEmpty(e).next(t=>{if(!t)return j.resolve();const r=IDBKeyRange.lowerBound(function(u){return[u]}(this.userId)),a=[];return Hl(e).Z({range:r},(o,u,d)=>{if(o[0]===this.userId){const m=si(o[1]);a.push(m)}else d.done()}).next(()=>{ye(a.length===0)})})}containsKey(e,t){return Y1(e,this.userId,t)}Qn(e){return X1(e).get(this.userId).next(t=>t||{userId:this.userId,lastAcknowledgedBatchId:ra,lastStreamToken:""})}}function Y1(n,e,t){const r=wm(e,t.path),a=r[1],o=IDBKeyRange.lowerBound(r);let u=!1;return Hl(n).Z({range:o,Y:!0},(d,m,p)=>{const[y,v,w]=d;y===e&&v===a&&(u=!0),p.done()}).next(()=>u)}function Gs(n){return Zt(n,Pr)}function Hl(n){return Zt(n,hu)}function X1(n){return Zt(n,jh)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class No{constructor(e){this.$n=e}next(){return this.$n+=2,this.$n}static Un(){return new No(0)}static Kn(){return new No(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dz{constructor(e,t){this.referenceDelegate=e,this.serializer=t}allocateTargetId(e){return this.Wn(e).next(t=>{const r=new No(t.highestTargetId);return t.highestTargetId=r.next(),this.Gn(e,t).next(()=>t.highestTargetId)})}getLastRemoteSnapshotVersion(e){return this.Wn(e).next(t=>Ee.fromTimestamp(new gt(t.lastRemoteSnapshotVersion.seconds,t.lastRemoteSnapshotVersion.nanoseconds)))}getHighestSequenceNumber(e){return this.Wn(e).next(t=>t.highestListenSequenceNumber)}setTargetsMetadata(e,t,r){return this.Wn(e).next(a=>(a.highestListenSequenceNumber=t,r&&(a.lastRemoteSnapshotVersion=r.toTimestamp()),t>a.highestListenSequenceNumber&&(a.highestListenSequenceNumber=t),this.Gn(e,a)))}addTargetData(e,t){return this.zn(e,t).next(()=>this.Wn(e).next(r=>(r.targetCount+=1,this.jn(t,r),this.Gn(e,r))))}updateTargetData(e,t){return this.zn(e,t)}removeTargetData(e,t){return this.removeMatchingKeysForTargetId(e,t.targetId).next(()=>Bl(e).delete(t.targetId)).next(()=>this.Wn(e)).next(r=>(ye(r.targetCount>0),r.targetCount-=1,this.Gn(e,r)))}removeTargets(e,t,r){let a=0;const o=[];return Bl(e).Z((u,d)=>{const m=ph(d);m.sequenceNumber<=t&&r.get(m.targetId)===null&&(a++,o.push(this.removeTargetData(e,m)))}).next(()=>j.waitFor(o)).next(()=>a)}forEachTarget(e,t){return Bl(e).Z((r,a)=>{const o=ph(a);t(o)})}Wn(e){return NA(e).get(Km).next(t=>(ye(t!==null),t))}Gn(e,t){return NA(e).put(Km,t)}zn(e,t){return Bl(e).put(G1(this.serializer,t))}jn(e,t){let r=!1;return e.targetId>t.highestTargetId&&(t.highestTargetId=e.targetId,r=!0),e.sequenceNumber>t.highestListenSequenceNumber&&(t.highestListenSequenceNumber=e.sequenceNumber,r=!0),r}getTargetCount(e){return this.Wn(e).next(t=>t.targetCount)}getTargetData(e,t){const r=Ro(t),a=IDBKeyRange.bound([r,Number.NEGATIVE_INFINITY],[r,Number.POSITIVE_INFINITY]);let o=null;return Bl(e).Z({range:a,index:qC},(u,d,m)=>{const p=ph(d);gd(t,p.target)&&(o=p,m.done())}).next(()=>o)}addMatchingKeys(e,t,r){const a=[],o=Ys(e);return t.forEach(u=>{const d=An(u.path);a.push(o.put({targetId:r,path:d})),a.push(this.referenceDelegate.addReference(e,r,u))}),j.waitFor(a)}removeMatchingKeys(e,t,r){const a=Ys(e);return j.forEach(t,o=>{const u=An(o.path);return j.waitFor([a.delete([r,u]),this.referenceDelegate.removeReference(e,r,o)])})}removeMatchingKeysForTargetId(e,t){const r=Ys(e),a=IDBKeyRange.bound([t],[t+1],!1,!0);return r.delete(a)}getMatchingKeysForTargetId(e,t){const r=IDBKeyRange.bound([t],[t+1],!1,!0),a=Ys(e);let o=Pe();return a.Z({range:r,Y:!0},(u,d,m)=>{const p=si(u[1]),y=new ce(p);o=o.add(y)}).next(()=>o)}containsKey(e,t){const r=An(t.path),a=IDBKeyRange.bound([r],[kC(r)],!1,!0);let o=0;return Ys(e).Z({index:EE,Y:!0,range:a},([u,d],m,p)=>{u!==0&&(o++,p.done())}).next(()=>o>0)}lt(e,t){return Bl(e).get(t).next(r=>r?ph(r):null)}}function Bl(n){return Zt(n,du)}function NA(n){return Zt(n,wo)}function Ys(n){return Zt(n,fu)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OA="LruGarbageCollector",fz=1048576;function kA([n,e],[t,r]){const a=Se(n,t);return a===0?Se(e,r):a}class mz{constructor(e){this.Hn=e,this.buffer=new nt(kA),this.Jn=0}Yn(){return++this.Jn}Zn(e){const t=[e,this.Yn()];if(this.buffer.size<this.Hn)this.buffer=this.buffer.add(t);else{const r=this.buffer.last();kA(t,r)<0&&(this.buffer=this.buffer.delete(r).add(t))}}get maxValue(){return this.buffer.last()[0]}}class Z1{constructor(e,t,r){this.garbageCollector=e,this.asyncQueue=t,this.localStore=r,this.Xn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.er(6e4)}stop(){this.Xn&&(this.Xn.cancel(),this.Xn=null)}get started(){return this.Xn!==null}er(e){re(OA,`Garbage collection scheduled in ${e}ms`),this.Xn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Xn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){Ta(t)?re(OA,"Ignoring IndexedDB error during garbage collection: ",t):await Ea(t)}await this.er(3e5)})}}class pz{constructor(e,t){this.tr=e,this.params=t}calculateTargetCount(e,t){return this.tr.nr(e).next(r=>Math.floor(t/100*r))}nthSequenceNumber(e,t){if(t===0)return j.resolve(jn.ae);const r=new mz(t);return this.tr.forEachTarget(e,a=>r.Zn(a.sequenceNumber)).next(()=>this.tr.rr(e,a=>r.Zn(a))).next(()=>r.maxValue)}removeTargets(e,t,r){return this.tr.removeTargets(e,t,r)}removeOrphanedDocuments(e,t){return this.tr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(re("LruGarbageCollector","Garbage collection skipped; disabled"),j.resolve(xA)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(re("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),xA):this.ir(e,t))}getCacheSize(e){return this.tr.getCacheSize(e)}ir(e,t){let r,a,o,u,d,m,p;const y=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(v=>(v>this.params.maximumSequenceNumbersToCollect?(re("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${v}`),a=this.params.maximumSequenceNumbersToCollect):a=v,u=Date.now(),this.nthSequenceNumber(e,a))).next(v=>(r=v,d=Date.now(),this.removeTargets(e,r,t))).next(v=>(o=v,m=Date.now(),this.removeOrphanedDocuments(e,r))).next(v=>(p=Date.now(),zl()<=Be.DEBUG&&re("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${u-y}ms
	Determined least recently used ${a} in `+(d-u)+`ms
	Removed ${o} targets in `+(m-d)+`ms
	Removed ${v} documents in `+(p-m)+`ms
Total Duration: ${p-y}ms`),j.resolve({didRun:!0,sequenceNumbersCollected:a,targetsRemoved:o,documentsRemoved:v})))}}function J1(n,e){return new pz(n,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gz{constructor(e,t){this.db=e,this.garbageCollector=J1(this,t)}nr(e){const t=this.sr(e);return this.db.getTargetCache().getTargetCount(e).next(r=>t.next(a=>r+a))}sr(e){let t=0;return this.rr(e,r=>{t++}).next(()=>t)}forEachTarget(e,t){return this.db.getTargetCache().forEachTarget(e,t)}rr(e,t){return this._r(e,(r,a)=>t(a))}addReference(e,t,r){return im(e,r)}removeReference(e,t,r){return im(e,r)}removeTargets(e,t,r){return this.db.getTargetCache().removeTargets(e,t,r)}markPotentiallyOrphaned(e,t){return im(e,t)}ar(e,t){return function(a,o){let u=!1;return X1(a).X(d=>Y1(a,d,o).next(m=>(m&&(u=!0),j.resolve(!m)))).next(()=>u)}(e,t)}removeOrphanedDocuments(e,t){const r=this.db.getRemoteDocumentCache().newChangeBuffer(),a=[];let o=0;return this._r(e,(u,d)=>{if(d<=t){const m=this.ar(e,u).next(p=>{if(!p)return o++,r.getEntry(e,u).next(()=>(r.removeEntry(u,Ee.min()),Ys(e).delete(function(v){return[0,An(v.path)]}(u))))});a.push(m)}}).next(()=>j.waitFor(a)).next(()=>r.apply(e)).next(()=>o)}removeTarget(e,t){const r=t.withSequenceNumber(e.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(e,r)}updateLimboDocument(e,t){return im(e,t)}_r(e,t){const r=Ys(e);let a,o=jn.ae;return r.Z({index:EE},([u,d],{path:m,sequenceNumber:p})=>{u===0?(o!==jn.ae&&t(new ce(si(a)),o),o=p,a=m):o=jn.ae}).next(()=>{o!==jn.ae&&t(new ce(si(a)),o)})}getCacheSize(e){return this.db.getRemoteDocumentCache().getSize(e)}}function im(n,e){return Ys(n).put(function(r,a){return{targetId:0,path:An(r.path),sequenceNumber:a}}(e,n.currentSequenceNumber))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eD{constructor(){this.changes=new rs(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,ht.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return r!==void 0?j.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _z{constructor(e){this.serializer=e}setIndexManager(e){this.indexManager=e}addEntry(e,t,r){return ro(e).put(r)}removeEntry(e,t,r){return ro(e).delete(function(o,u){const d=o.path.toArray();return[d.slice(0,d.length-2),d[d.length-2],Jm(u),d[d.length-1]]}(t,r))}updateMetadata(e,t){return this.getMetadata(e).next(r=>(r.byteSize+=t,this.ur(e,r)))}getEntry(e,t){let r=ht.newInvalidDocument(t);return ro(e).Z({index:bm,range:IDBKeyRange.only(ah(t))},(a,o)=>{r=this.cr(t,o)}).next(()=>r)}lr(e,t){let r={size:0,document:ht.newInvalidDocument(t)};return ro(e).Z({index:bm,range:IDBKeyRange.only(ah(t))},(a,o)=>{r={document:this.cr(t,o),size:tp(o)}}).next(()=>r)}getEntries(e,t){let r=Hn();return this.hr(e,t,(a,o)=>{const u=this.cr(a,o);r=r.insert(a,u)}).next(()=>r)}Pr(e,t){let r=Hn(),a=new lt(ce.comparator);return this.hr(e,t,(o,u)=>{const d=this.cr(o,u);r=r.insert(o,d),a=a.insert(o,tp(u))}).next(()=>({documents:r,Tr:a}))}hr(e,t,r){if(t.isEmpty())return j.resolve();let a=new nt(LA);t.forEach(m=>a=a.add(m));const o=IDBKeyRange.bound(ah(a.first()),ah(a.last())),u=a.getIterator();let d=u.getNext();return ro(e).Z({index:bm,range:o},(m,p,y)=>{const v=ce.fromSegments([...p.prefixPath,p.collectionGroup,p.documentId]);for(;d&&LA(d,v)<0;)r(d,null),d=u.getNext();d&&d.isEqual(v)&&(r(d,p),d=u.hasNext()?u.getNext():null),d?y.W(ah(d)):y.done()}).next(()=>{for(;d;)r(d,null),d=u.hasNext()?u.getNext():null})}getDocumentsMatchingQuery(e,t,r,a,o){const u=t.path,d=[u.popLast().toArray(),u.lastSegment(),Jm(r.readTime),r.documentKey.path.isEmpty()?"":r.documentKey.path.lastSegment()],m=[u.popLast().toArray(),u.lastSegment(),[Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],""];return ro(e).G(IDBKeyRange.bound(d,m,!0)).next(p=>{o==null||o.incrementDocumentReadCount(p.length);let y=Hn();for(const v of p){const w=this.cr(ce.fromSegments(v.prefixPath.concat(v.collectionGroup,v.documentId)),v);w.isFoundDocument()&&(yd(t,w)||a.has(w.key))&&(y=y.insert(w.key,w))}return y})}getAllFromCollectionGroup(e,t,r,a){let o=Hn();const u=MA(t,r),d=MA(t,nr.max());return ro(e).Z({index:jC,range:IDBKeyRange.bound(u,d,!0)},(m,p,y)=>{const v=this.cr(ce.fromSegments(p.prefixPath.concat(p.collectionGroup,p.documentId)),p);o=o.insert(v.key,v),o.size===a&&y.done()}).next(()=>o)}newChangeBuffer(e){return new yz(this,!!e&&e.trackRemovals)}getSize(e){return this.getMetadata(e).next(t=>t.byteSize)}getMetadata(e){return VA(e).get(nv).next(t=>(ye(!!t),t))}ur(e,t){return VA(e).put(nv,t)}cr(e,t){if(t){const r=nz(this.serializer,t);if(!(r.isNoDocument()&&r.version.isEqual(Ee.min())))return r}return ht.newInvalidDocument(e)}}function tD(n){return new _z(n)}class yz extends eD{constructor(e,t){super(),this.Ir=e,this.trackRemovals=t,this.Er=new rs(r=>r.toString(),(r,a)=>r.isEqual(a))}applyChanges(e){const t=[];let r=0,a=new nt((o,u)=>Se(o.canonicalString(),u.canonicalString()));return this.changes.forEach((o,u)=>{const d=this.Er.get(o);if(t.push(this.Ir.removeEntry(e,o,d.readTime)),u.isValidDocument()){const m=vA(this.Ir.serializer,u);a=a.add(o.path.popLast());const p=tp(m);r+=p-d.size,t.push(this.Ir.addEntry(e,o,m))}else if(r-=d.size,this.trackRemovals){const m=vA(this.Ir.serializer,u.convertToNoDocument(Ee.min()));t.push(this.Ir.addEntry(e,o,m))}}),a.forEach(o=>{t.push(this.Ir.indexManager.addToCollectionParentIndex(e,o))}),t.push(this.Ir.updateMetadata(e,r)),j.waitFor(t)}getFromCache(e,t){return this.Ir.lr(e,t).next(r=>(this.Er.set(t,{size:r.size,readTime:r.document.readTime}),r.document))}getAllFromCache(e,t){return this.Ir.Pr(e,t).next(({documents:r,Tr:a})=>(a.forEach((o,u)=>{this.Er.set(o,{size:u,readTime:r.get(o).readTime})}),r))}}function VA(n){return Zt(n,qh)}function ro(n){return Zt(n,$m)}function ah(n){const e=n.path.toArray();return[e.slice(0,e.length-2),e[e.length-2],e[e.length-1]]}function MA(n,e){const t=e.documentKey.path.toArray();return[n,Jm(e.readTime),t.slice(0,t.length-2),t.length>0?t[t.length-1]:""]}function LA(n,e){const t=n.path.toArray(),r=e.path.toArray();let a=0;for(let o=0;o<t.length-2&&o<r.length-2;++o)if(a=Se(t[o],r[o]),a)return a;return a=Se(t.length,r.length),a||(a=Se(t[t.length-2],r[r.length-2]),a||Se(t[t.length-1],r[r.length-1]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vz{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nD{constructor(e,t,r,a){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=a}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next(a=>(r=a,this.remoteDocumentCache.getEntry(e,t))).next(a=>(r!==null&&Sh(r.mutation,a,qn.empty(),gt.now()),a))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.getLocalViewOfDocuments(e,r,Pe()).next(()=>r))}getLocalViewOfDocuments(e,t,r=Pe()){const a=ai();return this.populateOverlays(e,a,t).next(()=>this.computeViews(e,t,a,r).next(o=>{let u=fh();return o.forEach((d,m)=>{u=u.insert(d,m.overlayedDocument)}),u}))}getOverlayedDocuments(e,t){const r=ai();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,Pe()))}populateOverlays(e,t,r){const a=[];return r.forEach(o=>{t.has(o)||a.push(o)}),this.documentOverlayCache.getOverlays(e,a).next(o=>{o.forEach((u,d)=>{t.set(u,d)})})}computeViews(e,t,r,a){let o=Hn();const u=Ah(),d=function(){return Ah()}();return t.forEach((m,p)=>{const y=r.get(p.key);a.has(p.key)&&(y===void 0||y.mutation instanceof is)?o=o.insert(p.key,p):y!==void 0?(u.set(p.key,y.mutation.getFieldMask()),Sh(y.mutation,p,y.mutation.getFieldMask(),gt.now())):u.set(p.key,qn.empty())}),this.recalculateAndSaveOverlays(e,o).next(m=>(m.forEach((p,y)=>u.set(p,y)),t.forEach((p,y)=>{var v;return d.set(p,new vz(y,(v=u.get(p))!==null&&v!==void 0?v:null))}),d))}recalculateAndSaveOverlays(e,t){const r=Ah();let a=new lt((u,d)=>u-d),o=Pe();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(u=>{for(const d of u)d.keys().forEach(m=>{const p=t.get(m);if(p===null)return;let y=r.get(m)||qn.empty();y=d.applyToLocalView(p,y),r.set(m,y);const v=(a.get(d.batchId)||Pe()).add(m);a=a.insert(d.batchId,v)})}).next(()=>{const u=[],d=a.getReverseIterator();for(;d.hasNext();){const m=d.getNext(),p=m.key,y=m.value,v=v1();y.forEach(w=>{if(!o.has(w)){const S=S1(t.get(w),r.get(w));S!==null&&v.set(w,S),o=o.add(w)}}),u.push(this.documentOverlayCache.saveOverlays(e,p,v))}return j.waitFor(u)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,t,r,a){return function(u){return ce.isDocumentKey(u.path)&&u.collectionGroup===null&&u.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):RE(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,a):this.getDocumentsMatchingCollectionQuery(e,t,r,a)}getNextDocuments(e,t,r,a){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,a).next(o=>{const u=a-o.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,a-o.size):j.resolve(ai());let d=cu,m=o;return u.next(p=>j.forEach(p,(y,v)=>(d<v.largestBatchId&&(d=v.largestBatchId),o.get(y)?j.resolve():this.remoteDocumentCache.getEntry(e,y).next(w=>{m=m.insert(y,w)}))).next(()=>this.populateOverlays(e,p,o)).next(()=>this.computeViews(e,m,p,Pe())).next(y=>({batchId:d,changes:y1(y)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new ce(t)).next(r=>{let a=fh();return r.isFoundDocument()&&(a=a.insert(r.key,r)),a})}getDocumentsMatchingCollectionGroupQuery(e,t,r,a){const o=t.collectionGroup;let u=fh();return this.indexManager.getCollectionParents(e,o).next(d=>j.forEach(d,m=>{const p=function(v,w){return new ns(w,null,v.explicitOrderBy.slice(),v.filters.slice(),v.limit,v.limitType,v.startAt,v.endAt)}(t,m.child(o));return this.getDocumentsMatchingCollectionQuery(e,p,r,a).next(y=>{y.forEach((v,w)=>{u=u.insert(v,w)})})}).next(()=>u))}getDocumentsMatchingCollectionQuery(e,t,r,a){let o;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next(u=>(o=u,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,o,a))).next(u=>{o.forEach((m,p)=>{const y=p.getKey();u.get(y)===null&&(u=u.insert(y,ht.newInvalidDocument(y)))});let d=fh();return u.forEach((m,p)=>{const y=o.get(m);y!==void 0&&Sh(y.mutation,p,qn.empty(),gt.now()),yd(t,p)&&(d=d.insert(m,p))}),d})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ez{constructor(e){this.serializer=e,this.dr=new Map,this.Ar=new Map}getBundleMetadata(e,t){return j.resolve(this.dr.get(t))}saveBundleMetadata(e,t){return this.dr.set(t.id,function(a){return{id:a.id,version:a.version,createTime:Mt(a.createTime)}}(t)),j.resolve()}getNamedQuery(e,t){return j.resolve(this.Ar.get(t))}saveNamedQuery(e,t){return this.Ar.set(t.name,function(a){return{name:a.name,query:ME(a.bundledQuery),readTime:Mt(a.readTime)}}(t)),j.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tz{constructor(){this.overlays=new lt(ce.comparator),this.Rr=new Map}getOverlay(e,t){return j.resolve(this.overlays.get(t))}getOverlays(e,t){const r=ai();return j.forEach(t,a=>this.getOverlay(e,a).next(o=>{o!==null&&r.set(a,o)})).next(()=>r)}saveOverlays(e,t,r){return r.forEach((a,o)=>{this.Et(e,t,o)}),j.resolve()}removeOverlaysForBatchId(e,t,r){const a=this.Rr.get(r);return a!==void 0&&(a.forEach(o=>this.overlays=this.overlays.remove(o)),this.Rr.delete(r)),j.resolve()}getOverlaysForCollection(e,t,r){const a=ai(),o=t.length+1,u=new ce(t.child("")),d=this.overlays.getIteratorFrom(u);for(;d.hasNext();){const m=d.getNext().value,p=m.getKey();if(!t.isPrefixOf(p.path))break;p.path.length===o&&m.largestBatchId>r&&a.set(m.getKey(),m)}return j.resolve(a)}getOverlaysForCollectionGroup(e,t,r,a){let o=new lt((p,y)=>p-y);const u=this.overlays.getIterator();for(;u.hasNext();){const p=u.getNext().value;if(p.getKey().getCollectionGroup()===t&&p.largestBatchId>r){let y=o.get(p.largestBatchId);y===null&&(y=ai(),o=o.insert(p.largestBatchId,y)),y.set(p.getKey(),p)}}const d=ai(),m=o.getIterator();for(;m.hasNext()&&(m.getNext().value.forEach((p,y)=>d.set(p,y)),!(d.size()>=a)););return j.resolve(d)}Et(e,t,r){const a=this.overlays.get(r.key);if(a!==null){const u=this.Rr.get(a.largestBatchId).delete(r.key);this.Rr.set(a.largestBatchId,u)}this.overlays=this.overlays.insert(r.key,new OE(t,r));let o=this.Rr.get(t);o===void 0&&(o=Pe(),this.Rr.set(t,o)),this.Rr.set(t,o.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wz{constructor(){this.sessionToken=Dt.EMPTY_BYTE_STRING}getSessionToken(e){return j.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,j.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BE{constructor(){this.Vr=new nt(ln.mr),this.gr=new nt(ln.pr)}isEmpty(){return this.Vr.isEmpty()}addReference(e,t){const r=new ln(e,t);this.Vr=this.Vr.add(r),this.gr=this.gr.add(r)}yr(e,t){e.forEach(r=>this.addReference(r,t))}removeReference(e,t){this.wr(new ln(e,t))}Sr(e,t){e.forEach(r=>this.removeReference(r,t))}br(e){const t=new ce(new ze([])),r=new ln(t,e),a=new ln(t,e+1),o=[];return this.gr.forEachInRange([r,a],u=>{this.wr(u),o.push(u.key)}),o}Dr(){this.Vr.forEach(e=>this.wr(e))}wr(e){this.Vr=this.Vr.delete(e),this.gr=this.gr.delete(e)}vr(e){const t=new ce(new ze([])),r=new ln(t,e),a=new ln(t,e+1);let o=Pe();return this.gr.forEachInRange([r,a],u=>{o=o.add(u.key)}),o}containsKey(e){const t=new ln(e,0),r=this.Vr.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}}class ln{constructor(e,t){this.key=e,this.Cr=t}static mr(e,t){return ce.comparator(e.key,t.key)||Se(e.Cr,t.Cr)}static pr(e,t){return Se(e.Cr,t.Cr)||ce.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bz{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Fr=1,this.Mr=new nt(ln.mr)}checkEmpty(e){return j.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,a){const o=this.Fr;this.Fr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const u=new xE(o,t,r,a);this.mutationQueue.push(u);for(const d of a)this.Mr=this.Mr.add(new ln(d.key,o)),this.indexManager.addToCollectionParentIndex(e,d.key.path.popLast());return j.resolve(u)}lookupMutationBatch(e,t){return j.resolve(this.Or(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,a=this.Nr(r),o=a<0?0:a;return j.resolve(this.mutationQueue.length>o?this.mutationQueue[o]:null)}getHighestUnacknowledgedBatchId(){return j.resolve(this.mutationQueue.length===0?ra:this.Fr-1)}getAllMutationBatches(e){return j.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new ln(t,0),a=new ln(t,Number.POSITIVE_INFINITY),o=[];return this.Mr.forEachInRange([r,a],u=>{const d=this.Or(u.Cr);o.push(d)}),j.resolve(o)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new nt(Se);return t.forEach(a=>{const o=new ln(a,0),u=new ln(a,Number.POSITIVE_INFINITY);this.Mr.forEachInRange([o,u],d=>{r=r.add(d.Cr)})}),j.resolve(this.Br(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,a=r.length+1;let o=r;ce.isDocumentKey(o)||(o=o.child(""));const u=new ln(new ce(o),0);let d=new nt(Se);return this.Mr.forEachWhile(m=>{const p=m.key.path;return!!r.isPrefixOf(p)&&(p.length===a&&(d=d.add(m.Cr)),!0)},u),j.resolve(this.Br(d))}Br(e){const t=[];return e.forEach(r=>{const a=this.Or(r);a!==null&&t.push(a)}),t}removeMutationBatch(e,t){ye(this.Lr(t.batchId,"removed")===0),this.mutationQueue.shift();let r=this.Mr;return j.forEach(t.mutations,a=>{const o=new ln(a.key,t.batchId);return r=r.delete(o),this.referenceDelegate.markPotentiallyOrphaned(e,a.key)}).next(()=>{this.Mr=r})}qn(e){}containsKey(e,t){const r=new ln(t,0),a=this.Mr.firstAfterOrEqual(r);return j.resolve(t.isEqual(a&&a.key))}performConsistencyCheck(e){return this.mutationQueue.length,j.resolve()}Lr(e,t){return this.Nr(e)}Nr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Or(e){const t=this.Nr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Iz{constructor(e){this.kr=e,this.docs=function(){return new lt(ce.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,a=this.docs.get(r),o=a?a.size:0,u=this.kr(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:u}),this.size+=u-o,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return j.resolve(r?r.document.mutableCopy():ht.newInvalidDocument(t))}getEntries(e,t){let r=Hn();return t.forEach(a=>{const o=this.docs.get(a);r=r.insert(a,o?o.document.mutableCopy():ht.newInvalidDocument(a))}),j.resolve(r)}getDocumentsMatchingQuery(e,t,r,a){let o=Hn();const u=t.path,d=new ce(u.child("__id-9223372036854775808__")),m=this.docs.getIteratorFrom(d);for(;m.hasNext();){const{key:p,value:{document:y}}=m.getNext();if(!u.isPrefixOf(p.path))break;p.path.length>u.length+1||yE(MC(y),r)<=0||(a.has(y.key)||yd(t,y))&&(o=o.insert(y.key,y.mutableCopy()))}return j.resolve(o)}getAllFromCollectionGroup(e,t,r,a){pe()}qr(e,t){return j.forEach(this.docs,r=>t(r))}newChangeBuffer(e){return new Az(this)}getSize(e){return j.resolve(this.size)}}class Az extends eD{constructor(e){super(),this.Ir=e}applyChanges(e){const t=[];return this.changes.forEach((r,a)=>{a.isValidDocument()?t.push(this.Ir.addEntry(e,a)):this.Ir.removeEntry(r)}),j.waitFor(t)}getFromCache(e,t){return this.Ir.getEntry(e,t)}getAllFromCache(e,t){return this.Ir.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sz{constructor(e){this.persistence=e,this.Qr=new rs(t=>Ro(t),gd),this.lastRemoteSnapshotVersion=Ee.min(),this.highestTargetId=0,this.$r=0,this.Ur=new BE,this.targetCount=0,this.Kr=No.Un()}forEachTarget(e,t){return this.Qr.forEach((r,a)=>t(a)),j.resolve()}getLastRemoteSnapshotVersion(e){return j.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return j.resolve(this.$r)}allocateTargetId(e){return this.highestTargetId=this.Kr.next(),j.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.$r&&(this.$r=t),j.resolve()}zn(e){this.Qr.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.Kr=new No(t),this.highestTargetId=t),e.sequenceNumber>this.$r&&(this.$r=e.sequenceNumber)}addTargetData(e,t){return this.zn(t),this.targetCount+=1,j.resolve()}updateTargetData(e,t){return this.zn(t),j.resolve()}removeTargetData(e,t){return this.Qr.delete(t.target),this.Ur.br(t.targetId),this.targetCount-=1,j.resolve()}removeTargets(e,t,r){let a=0;const o=[];return this.Qr.forEach((u,d)=>{d.sequenceNumber<=t&&r.get(d.targetId)===null&&(this.Qr.delete(u),o.push(this.removeMatchingKeysForTargetId(e,d.targetId)),a++)}),j.waitFor(o).next(()=>a)}getTargetCount(e){return j.resolve(this.targetCount)}getTargetData(e,t){const r=this.Qr.get(t)||null;return j.resolve(r)}addMatchingKeys(e,t,r){return this.Ur.yr(t,r),j.resolve()}removeMatchingKeys(e,t,r){this.Ur.Sr(t,r);const a=this.persistence.referenceDelegate,o=[];return a&&t.forEach(u=>{o.push(a.markPotentiallyOrphaned(e,u))}),j.waitFor(o)}removeMatchingKeysForTargetId(e,t){return this.Ur.br(t),j.resolve()}getMatchingKeysForTargetId(e,t){const r=this.Ur.vr(t);return j.resolve(r)}containsKey(e,t){return j.resolve(this.Ur.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zE{constructor(e,t){this.Wr={},this.overlays={},this.Gr=new jn(0),this.zr=!1,this.zr=!0,this.jr=new wz,this.referenceDelegate=e(this),this.Hr=new Sz(this),this.indexManager=new cz,this.remoteDocumentCache=function(a){return new Iz(a)}(r=>this.referenceDelegate.Jr(r)),this.serializer=new H1(t),this.Yr=new Ez(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.zr=!1,Promise.resolve()}get started(){return this.zr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new Tz,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.Wr[e.toKey()];return r||(r=new bz(t,this.referenceDelegate),this.Wr[e.toKey()]=r),r}getGlobalsCache(){return this.jr}getTargetCache(){return this.Hr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Yr}runTransaction(e,t,r){re("MemoryPersistence","Starting transaction:",e);const a=new Rz(this.Gr.next());return this.referenceDelegate.Zr(),r(a).next(o=>this.referenceDelegate.Xr(a).next(()=>o)).toPromise().then(o=>(a.raiseOnCommittedEvent(),o))}ei(e,t){return j.or(Object.values(this.Wr).map(r=>()=>r.containsKey(e,t)))}}class Rz extends UC{constructor(e){super(),this.currentSequenceNumber=e}}class Fp{constructor(e){this.persistence=e,this.ti=new BE,this.ni=null}static ri(e){return new Fp(e)}get ii(){if(this.ni)return this.ni;throw pe()}addReference(e,t,r){return this.ti.addReference(r,t),this.ii.delete(r.toString()),j.resolve()}removeReference(e,t,r){return this.ti.removeReference(r,t),this.ii.add(r.toString()),j.resolve()}markPotentiallyOrphaned(e,t){return this.ii.add(t.toString()),j.resolve()}removeTarget(e,t){this.ti.br(t.targetId).forEach(a=>this.ii.add(a.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next(a=>{a.forEach(o=>this.ii.add(o.toString()))}).next(()=>r.removeTargetData(e,t))}Zr(){this.ni=new Set}Xr(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return j.forEach(this.ii,r=>{const a=ce.fromPath(r);return this.si(e,a).next(o=>{o||t.removeEntry(a,Ee.min())})}).next(()=>(this.ni=null,t.apply(e)))}updateLimboDocument(e,t){return this.si(e,t).next(r=>{r?this.ii.delete(t.toString()):this.ii.add(t.toString())})}Jr(e){return 0}si(e,t){return j.or([()=>j.resolve(this.ti.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.ei(e,t)])}}class np{constructor(e,t){this.persistence=e,this.oi=new rs(r=>An(r.path),(r,a)=>r.isEqual(a)),this.garbageCollector=J1(this,t)}static ri(e,t){return new np(e,t)}Zr(){}Xr(e){return j.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}nr(e){const t=this.sr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>t.next(a=>r+a))}sr(e){let t=0;return this.rr(e,r=>{t++}).next(()=>t)}rr(e,t){return j.forEach(this.oi,(r,a)=>this.ar(e,r,a).next(o=>o?j.resolve():t(a)))}removeTargets(e,t,r){return this.persistence.getTargetCache().removeTargets(e,t,r)}removeOrphanedDocuments(e,t){let r=0;const a=this.persistence.getRemoteDocumentCache(),o=a.newChangeBuffer();return a.qr(e,u=>this.ar(e,u,t).next(d=>{d||(r++,o.removeEntry(u,Ee.min()))})).next(()=>o.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,t){return this.oi.set(t,e.currentSequenceNumber),j.resolve()}removeTarget(e,t){const r=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,t,r){return this.oi.set(r,e.currentSequenceNumber),j.resolve()}removeReference(e,t,r){return this.oi.set(r,e.currentSequenceNumber),j.resolve()}updateLimboDocument(e,t){return this.oi.set(t,e.currentSequenceNumber),j.resolve()}Jr(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=Am(e.data.value)),t}ar(e,t,r){return j.or([()=>this.persistence.ei(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const a=this.oi.get(t);return j.resolve(a!==void 0&&a>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cz{constructor(e){this.serializer=e}B(e,t,r,a){const o=new Pp("createOrUpgrade",t);r<1&&a>=1&&(function(m){m.createObjectStore(pd)}(e),function(m){m.createObjectStore(jh,{keyPath:H4}),m.createObjectStore(Pr,{keyPath:WI,autoIncrement:!0}).createIndex(po,YI,{unique:!0}),m.createObjectStore(hu)}(e),UA(e),function(m){m.createObjectStore(ao)}(e));let u=j.resolve();return r<3&&a>=3&&(r!==0&&(function(m){m.deleteObjectStore(fu),m.deleteObjectStore(du),m.deleteObjectStore(wo)}(e),UA(e)),u=u.next(()=>function(m){const p=m.store(wo),y={highestTargetId:0,highestListenSequenceNumber:0,lastRemoteSnapshotVersion:Ee.min().toTimestamp(),targetCount:0};return p.put(Km,y)}(o))),r<4&&a>=4&&(r!==0&&(u=u.next(()=>function(m,p){return p.store(Pr).G().next(v=>{m.deleteObjectStore(Pr),m.createObjectStore(Pr,{keyPath:WI,autoIncrement:!0}).createIndex(po,YI,{unique:!0});const w=p.store(Pr),S=v.map(P=>w.put(P));return j.waitFor(S)})}(e,o))),u=u.next(()=>{(function(m){m.createObjectStore(mu,{keyPath:J4})})(e)})),r<5&&a>=5&&(u=u.next(()=>this._i(o))),r<6&&a>=6&&(u=u.next(()=>(function(m){m.createObjectStore(qh)}(e),this.ai(o)))),r<7&&a>=7&&(u=u.next(()=>this.ui(o))),r<8&&a>=8&&(u=u.next(()=>this.ci(e,o))),r<9&&a>=9&&(u=u.next(()=>{(function(m){m.objectStoreNames.contains("remoteDocumentChanges")&&m.deleteObjectStore("remoteDocumentChanges")})(e)})),r<10&&a>=10&&(u=u.next(()=>this.li(o))),r<11&&a>=11&&(u=u.next(()=>{(function(m){m.createObjectStore(xp,{keyPath:eB})})(e),function(m){m.createObjectStore(Np,{keyPath:tB})}(e)})),r<12&&a>=12&&(u=u.next(()=>{(function(m){const p=m.createObjectStore(Op,{keyPath:lB});p.createIndex(iv,uB,{unique:!1}),p.createIndex($C,cB,{unique:!1})})(e)})),r<13&&a>=13&&(u=u.next(()=>function(m){const p=m.createObjectStore($m,{keyPath:$4});p.createIndex(bm,K4),p.createIndex(jC,Q4)}(e)).next(()=>this.hi(e,o)).next(()=>e.deleteObjectStore(ao))),r<14&&a>=14&&(u=u.next(()=>this.Pi(e,o))),r<15&&a>=15&&(u=u.next(()=>function(m){m.createObjectStore(TE,{keyPath:nB,autoIncrement:!0}).createIndex(rv,rB,{unique:!1}),m.createObjectStore(Qm,{keyPath:iB}).createIndex(HC,sB,{unique:!1}),m.createObjectStore(Wm,{keyPath:aB}).createIndex(GC,oB,{unique:!1})}(e))),r<16&&a>=16&&(u=u.next(()=>{t.objectStore(Qm).clear()}).next(()=>{t.objectStore(Wm).clear()})),r<17&&a>=17&&(u=u.next(()=>{(function(m){m.createObjectStore(wE,{keyPath:hB})})(e)})),u}ai(e){let t=0;return e.store(ao).Z((r,a)=>{t+=tp(a)}).next(()=>{const r={byteSize:t};return e.store(qh).put(nv,r)})}_i(e){const t=e.store(jh),r=e.store(Pr);return t.G().next(a=>j.forEach(a,o=>{const u=IDBKeyRange.bound([o.userId,ra],[o.userId,o.lastAcknowledgedBatchId]);return r.G(po,u).next(d=>j.forEach(d,m=>{ye(m.userId===o.userId);const p=lo(this.serializer,m);return W1(e,o.userId,p).next(()=>{})}))}))}ui(e){const t=e.store(fu),r=e.store(ao);return e.store(wo).get(Km).next(a=>{const o=[];return r.Z((u,d)=>{const m=new ze(u),p=function(v){return[0,An(v)]}(m);o.push(t.get(p).next(y=>y?j.resolve():(v=>t.put({targetId:0,path:An(v),sequenceNumber:a.highestListenSequenceNumber}))(m)))}).next(()=>j.waitFor(o))})}ci(e,t){e.createObjectStore(Hh,{keyPath:Z4});const r=t.store(Hh),a=new UE,o=u=>{if(a.add(u)){const d=u.lastSegment(),m=u.popLast();return r.put({collectionId:d,parent:An(m)})}};return t.store(ao).Z({Y:!0},(u,d)=>{const m=new ze(u);return o(m.popLast())}).next(()=>t.store(hu).Z({Y:!0},([u,d,m],p)=>{const y=si(d);return o(y.popLast())}))}li(e){const t=e.store(du);return t.Z((r,a)=>{const o=ph(a),u=G1(this.serializer,o);return t.put(u)})}hi(e,t){const r=t.store(ao),a=[];return r.Z((o,u)=>{const d=t.store($m),m=function(v){return v.document?new ce(ze.fromString(v.document.name).popFirst(5)):v.noDocument?ce.fromSegments(v.noDocument.path):v.unknownDocument?ce.fromSegments(v.unknownDocument.path):pe()}(u).path.toArray(),p={prefixPath:m.slice(0,m.length-2),collectionGroup:m[m.length-2],documentId:m[m.length-1],readTime:u.readTime||[0,0],unknownDocument:u.unknownDocument,noDocument:u.noDocument,document:u.document,hasCommittedMutations:!!u.hasCommittedMutations};a.push(d.put(p))}).next(()=>j.waitFor(a))}Pi(e,t){const r=t.store(Pr),a=tD(this.serializer),o=new zE(Fp.ri,this.serializer.Tt);return r.G().next(u=>{const d=new Map;return u.forEach(m=>{var p;let y=(p=d.get(m.userId))!==null&&p!==void 0?p:Pe();lo(this.serializer,m).keys().forEach(v=>y=y.add(v)),d.set(m.userId,y)}),j.forEach(d,(m,p)=>{const y=new cn(p),v=Bp.It(this.serializer,y),w=o.getIndexManager(y),S=zp.It(y,this.serializer,w,o.referenceDelegate);return new nD(a,S,v,w).recalculateAndSaveOverlaysForDocumentKeys(new sv(t,jn.ae),m).next()})})}}function UA(n){n.createObjectStore(fu,{keyPath:Y4}).createIndex(EE,X4,{unique:!0}),n.createObjectStore(du,{keyPath:"targetId"}).createIndex(qC,W4,{unique:!0}),n.createObjectStore(wo)}const $s="IndexedDbPersistence",Ay=18e5,Sy=5e3,Ry="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.",rD="main";class FE{constructor(e,t,r,a,o,u,d,m,p,y,v=17){if(this.allowTabSynchronization=e,this.persistenceKey=t,this.clientId=r,this.Ti=o,this.window=u,this.document=d,this.Ii=p,this.Ei=y,this.di=v,this.Gr=null,this.zr=!1,this.isPrimary=!1,this.networkEnabled=!0,this.Ai=null,this.inForeground=!1,this.Ri=null,this.Vi=null,this.mi=Number.NEGATIVE_INFINITY,this.fi=w=>Promise.resolve(),!FE.D())throw new te(K.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new gz(this,a),this.gi=t+rD,this.serializer=new H1(m),this.pi=new oi(this.gi,this.di,new Cz(this.serializer)),this.jr=new iz,this.Hr=new dz(this.referenceDelegate,this.serializer),this.remoteDocumentCache=tD(this.serializer),this.Yr=new rz,this.window&&this.window.localStorage?this.yi=this.window.localStorage:(this.yi=null,y===!1&&Vt($s,"LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.wi().then(()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new te(K.FAILED_PRECONDITION,Ry);return this.Si(),this.bi(),this.Di(),this.runTransaction("getHighestListenSequenceNumber","readonly",e=>this.Hr.getHighestSequenceNumber(e))}).then(e=>{this.Gr=new jn(e,this.Ii)}).then(()=>{this.zr=!0}).catch(e=>(this.pi&&this.pi.close(),Promise.reject(e)))}Ci(e){return this.fi=async t=>{if(this.started)return e(t)},e(this.isPrimary)}setDatabaseDeletedListener(e){this.pi.k(async t=>{t.newVersion===null&&await e()})}setNetworkEnabled(e){this.networkEnabled!==e&&(this.networkEnabled=e,this.Ti.enqueueAndForget(async()=>{this.started&&await this.wi()}))}wi(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",e=>sm(e).put({clientId:this.clientId,updateTimeMs:Date.now(),networkEnabled:this.networkEnabled,inForeground:this.inForeground}).next(()=>{if(this.isPrimary)return this.Fi(e).next(t=>{t||(this.isPrimary=!1,this.Ti.enqueueRetryable(()=>this.fi(!1)))})}).next(()=>this.Mi(e)).next(t=>this.isPrimary&&!t?this.xi(e).next(()=>!1):!!t&&this.Oi(e).next(()=>!0))).catch(e=>{if(Ta(e))return re($s,"Failed to extend owner lease: ",e),this.isPrimary;if(!this.allowTabSynchronization)throw e;return re($s,"Releasing owner lease after error during lease refresh",e),!1}).then(e=>{this.isPrimary!==e&&this.Ti.enqueueRetryable(()=>this.fi(e)),this.isPrimary=e})}Fi(e){return oh(e).get(kl).next(t=>j.resolve(this.Ni(t)))}Bi(e){return sm(e).delete(this.clientId)}async Li(){if(this.isPrimary&&!this.ki(this.mi,Ay)){this.mi=Date.now();const e=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",t=>{const r=Zt(t,mu);return r.G().next(a=>{const o=this.qi(a,Ay),u=a.filter(d=>o.indexOf(d)===-1);return j.forEach(u,d=>r.delete(d.clientId)).next(()=>u)})}).catch(()=>[]);if(this.yi)for(const t of e)this.yi.removeItem(this.Qi(t.clientId))}}Di(){this.Vi=this.Ti.enqueueAfterDelay("client_metadata_refresh",4e3,()=>this.wi().then(()=>this.Li()).then(()=>this.Di()))}Ni(e){return!!e&&e.ownerId===this.clientId}Mi(e){return this.Ei?j.resolve(!0):oh(e).get(kl).next(t=>{if(t!==null&&this.ki(t.leaseTimestampMs,Sy)&&!this.$i(t.ownerId)){if(this.Ni(t)&&this.networkEnabled)return!0;if(!this.Ni(t)){if(!t.allowTabSynchronization)throw new te(K.FAILED_PRECONDITION,Ry);return!1}}return!(!this.networkEnabled||!this.inForeground)||sm(e).G().next(r=>this.qi(r,Sy).find(a=>{if(this.clientId!==a.clientId){const o=!this.networkEnabled&&a.networkEnabled,u=!this.inForeground&&a.inForeground,d=this.networkEnabled===a.networkEnabled;if(o||u&&d)return!0}return!1})===void 0)}).next(t=>(this.isPrimary!==t&&re($s,`Client ${t?"is":"is not"} eligible for a primary lease.`),t))}async shutdown(){this.zr=!1,this.Ui(),this.Vi&&(this.Vi.cancel(),this.Vi=null),this.Ki(),this.Wi(),await this.pi.runTransaction("shutdown","readwrite",[pd,mu],e=>{const t=new sv(e,jn.ae);return this.xi(t).next(()=>this.Bi(t))}),this.pi.close(),this.Gi()}qi(e,t){return e.filter(r=>this.ki(r.updateTimeMs,t)&&!this.$i(r.clientId))}zi(){return this.runTransaction("getActiveClients","readonly",e=>sm(e).G().next(t=>this.qi(t,Ay).map(r=>r.clientId)))}get started(){return this.zr}getGlobalsCache(){return this.jr}getMutationQueue(e,t){return zp.It(e,this.serializer,t,this.referenceDelegate)}getTargetCache(){return this.Hr}getRemoteDocumentCache(){return this.remoteDocumentCache}getIndexManager(e){return new hz(e,this.serializer.Tt.databaseId)}getDocumentOverlayCache(e){return Bp.It(this.serializer,e)}getBundleCache(){return this.Yr}runTransaction(e,t,r){re($s,"Starting transaction:",e);const a=t==="readonly"?"readonly":"readwrite",o=function(m){return m===17?mB:m===16?fB:m===15?bE:m===14?WC:m===13?QC:m===12?dB:m===11?KC:void pe()}(this.di);let u;return this.pi.runTransaction(e,a,o,d=>(u=new sv(d,this.Gr?this.Gr.next():jn.ae),t==="readwrite-primary"?this.Fi(u).next(m=>!!m||this.Mi(u)).next(m=>{if(!m)throw Vt(`Failed to obtain primary lease for action '${e}'.`),this.isPrimary=!1,this.Ti.enqueueRetryable(()=>this.fi(!1)),new te(K.FAILED_PRECONDITION,LC);return r(u)}).next(m=>this.Oi(u).next(()=>m)):this.ji(u).next(()=>r(u)))).then(d=>(u.raiseOnCommittedEvent(),d))}ji(e){return oh(e).get(kl).next(t=>{if(t!==null&&this.ki(t.leaseTimestampMs,Sy)&&!this.$i(t.ownerId)&&!this.Ni(t)&&!(this.Ei||this.allowTabSynchronization&&t.allowTabSynchronization))throw new te(K.FAILED_PRECONDITION,Ry)})}Oi(e){const t={ownerId:this.clientId,allowTabSynchronization:this.allowTabSynchronization,leaseTimestampMs:Date.now()};return oh(e).put(kl,t)}static D(){return oi.D()}xi(e){const t=oh(e);return t.get(kl).next(r=>this.Ni(r)?(re($s,"Releasing primary lease."),t.delete(kl)):j.resolve())}ki(e,t){const r=Date.now();return!(e<r-t)&&(!(e>r)||(Vt(`Detected an update time that is in the future: ${e} > ${r}`),!1))}Si(){this.document!==null&&typeof this.document.addEventListener=="function"&&(this.Ri=()=>{this.Ti.enqueueAndForget(()=>(this.inForeground=this.document.visibilityState==="visible",this.wi()))},this.document.addEventListener("visibilitychange",this.Ri),this.inForeground=this.document.visibilityState==="visible")}Ki(){this.Ri&&(this.document.removeEventListener("visibilitychange",this.Ri),this.Ri=null)}bi(){var e;typeof((e=this.window)===null||e===void 0?void 0:e.addEventListener)=="function"&&(this.Ai=()=>{this.Ui();const t=/(?:Version|Mobile)\/1[456]/;fR()&&(navigator.appVersion.match(t)||navigator.userAgent.match(t))&&this.Ti.enterRestrictedMode(!0),this.Ti.enqueueAndForget(()=>this.shutdown())},this.window.addEventListener("pagehide",this.Ai))}Wi(){this.Ai&&(this.window.removeEventListener("pagehide",this.Ai),this.Ai=null)}$i(e){var t;try{const r=((t=this.yi)===null||t===void 0?void 0:t.getItem(this.Qi(e)))!==null;return re($s,`Client '${e}' ${r?"is":"is not"} zombied in LocalStorage`),r}catch(r){return Vt($s,"Failed to get zombied client id.",r),!1}}Ui(){if(this.yi)try{this.yi.setItem(this.Qi(this.clientId),String(Date.now()))}catch(e){Vt("Failed to set zombie client id.",e)}}Gi(){if(this.yi)try{this.yi.removeItem(this.Qi(this.clientId))}catch{}}Qi(e){return`firestore_zombie_${this.persistenceKey}_${e}`}}function oh(n){return Zt(n,pd)}function sm(n){return Zt(n,mu)}function jE(n,e){let t=n.projectId;return n.isDefaultDatabase||(t+="."+n.database),"firestore/"+e+"/"+t+"/"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qE{constructor(e,t,r,a){this.targetId=e,this.fromCache=t,this.Hi=r,this.Ji=a}static Yi(e,t){let r=Pe(),a=Pe();for(const o of t.docChanges)switch(o.type){case 0:r=r.add(o.doc.key);break;case 1:a=a.add(o.doc.key)}return new qE(e,t.fromCache,r,a)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dz{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iD{constructor(){this.Zi=!1,this.Xi=!1,this.es=100,this.ts=function(){return fR()?8:BC(wt())>0?6:4}()}initialize(e,t){this.ns=e,this.indexManager=t,this.Zi=!0}getDocumentsMatchingQuery(e,t,r,a){const o={result:null};return this.rs(e,t).next(u=>{o.result=u}).next(()=>{if(!o.result)return this.ss(e,t,a,r).next(u=>{o.result=u})}).next(()=>{if(o.result)return;const u=new Dz;return this._s(e,t,u).next(d=>{if(o.result=d,this.Xi)return this.us(e,t,u,d.size)})}).next(()=>o.result)}us(e,t,r,a){return r.documentReadCount<this.es?(zl()<=Be.DEBUG&&re("QueryEngine","SDK will not create cache indexes for query:",Fl(t),"since it only creates cache indexes for collection contains","more than or equal to",this.es,"documents"),j.resolve()):(zl()<=Be.DEBUG&&re("QueryEngine","Query:",Fl(t),"scans",r.documentReadCount,"local documents and returns",a,"documents as results."),r.documentReadCount>this.ts*a?(zl()<=Be.DEBUG&&re("QueryEngine","The SDK decides to create cache indexes for query:",Fl(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Vn(t))):j.resolve())}rs(e,t){if(uA(t))return j.resolve(null);let r=Vn(t);return this.indexManager.getIndexType(e,r).next(a=>a===0?null:(t.limit!==null&&a===1&&(t=Zm(t,null,"F"),r=Vn(t)),this.indexManager.getDocumentsMatchingTarget(e,r).next(o=>{const u=Pe(...o);return this.ns.getDocuments(e,u).next(d=>this.indexManager.getMinOffset(e,r).next(m=>{const p=this.cs(t,d);return this.ls(t,p,u,m.readTime)?this.rs(e,Zm(t,null,"F")):this.hs(e,p,t,m)}))})))}ss(e,t,r,a){return uA(t)||a.isEqual(Ee.min())?j.resolve(null):this.ns.getDocuments(e,r).next(o=>{const u=this.cs(t,o);return this.ls(t,u,r,a)?j.resolve(null):(zl()<=Be.DEBUG&&re("QueryEngine","Re-using previous result from %s to execute query: %s",a.toString(),Fl(t)),this.hs(e,u,t,VC(a,cu)).next(d=>d))})}cs(e,t){let r=new nt(g1(e));return t.forEach((a,o)=>{yd(e,o)&&(r=r.add(o))}),r}ls(e,t,r,a){if(e.limit===null)return!1;if(r.size!==t.size)return!0;const o=e.limitType==="F"?t.last():t.first();return!!o&&(o.hasPendingWrites||o.version.compareTo(a)>0)}_s(e,t,r){return zl()<=Be.DEBUG&&re("QueryEngine","Using full collection scan to execute query:",Fl(t)),this.ns.getDocumentsMatchingQuery(e,t,nr.min(),r)}hs(e,t,r,a){return this.ns.getDocumentsMatchingQuery(e,r,a).next(o=>(t.forEach(u=>{o=o.insert(u.key,u)}),o))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HE="LocalStore",Pz=3e8;class xz{constructor(e,t,r,a){this.persistence=e,this.Ps=t,this.serializer=a,this.Ts=new lt(Se),this.Is=new rs(o=>Ro(o),gd),this.Es=new Map,this.ds=e.getRemoteDocumentCache(),this.Hr=e.getTargetCache(),this.Yr=e.getBundleCache(),this.As(r)}As(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new nD(this.ds,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.ds.setIndexManager(this.indexManager),this.Ps.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.Ts))}}function sD(n,e,t,r){return new xz(n,e,t,r)}async function aD(n,e){const t=de(n);return await t.persistence.runTransaction("Handle user change","readonly",r=>{let a;return t.mutationQueue.getAllMutationBatches(r).next(o=>(a=o,t.As(e),t.mutationQueue.getAllMutationBatches(r))).next(o=>{const u=[],d=[];let m=Pe();for(const p of a){u.push(p.batchId);for(const y of p.mutations)m=m.add(y.key)}for(const p of o){d.push(p.batchId);for(const y of p.mutations)m=m.add(y.key)}return t.localDocuments.getDocuments(r,m).next(p=>({Rs:p,removedBatchIds:u,addedBatchIds:d}))})})}function Nz(n,e){const t=de(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const a=e.batch.keys(),o=t.ds.newChangeBuffer({trackRemovals:!0});return function(d,m,p,y){const v=p.batch,w=v.keys();let S=j.resolve();return w.forEach(P=>{S=S.next(()=>y.getEntry(m,P)).next(U=>{const L=p.docVersions.get(P);ye(L!==null),U.version.compareTo(L)<0&&(v.applyToRemoteDocument(U,p),U.isValidDocument()&&(U.setReadTime(p.commitVersion),y.addEntry(U)))})}),S.next(()=>d.mutationQueue.removeMutationBatch(m,v))}(t,r,e,o).next(()=>o.apply(r)).next(()=>t.mutationQueue.performConsistencyCheck(r)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(r,a,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(d){let m=Pe();for(let p=0;p<d.mutationResults.length;++p)d.mutationResults[p].transformResults.length>0&&(m=m.add(d.batch.mutations[p].key));return m}(e))).next(()=>t.localDocuments.getDocuments(r,a))})}function oD(n){const e=de(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Hr.getLastRemoteSnapshotVersion(t))}function Oz(n,e){const t=de(n),r=e.snapshotVersion;let a=t.Ts;return t.persistence.runTransaction("Apply remote event","readwrite-primary",o=>{const u=t.ds.newChangeBuffer({trackRemovals:!0});a=t.Ts;const d=[];e.targetChanges.forEach((y,v)=>{const w=a.get(v);if(!w)return;d.push(t.Hr.removeMatchingKeys(o,y.removedDocuments,v).next(()=>t.Hr.addMatchingKeys(o,y.addedDocuments,v)));let S=w.withSequenceNumber(o.currentSequenceNumber);e.targetMismatches.get(v)!==null?S=S.withResumeToken(Dt.EMPTY_BYTE_STRING,Ee.min()).withLastLimboFreeSnapshotVersion(Ee.min()):y.resumeToken.approximateByteSize()>0&&(S=S.withResumeToken(y.resumeToken,r)),a=a.insert(v,S),function(U,L,H){return U.resumeToken.approximateByteSize()===0||L.snapshotVersion.toMicroseconds()-U.snapshotVersion.toMicroseconds()>=Pz?!0:H.addedDocuments.size+H.modifiedDocuments.size+H.removedDocuments.size>0}(w,S,y)&&d.push(t.Hr.updateTargetData(o,S))});let m=Hn(),p=Pe();if(e.documentUpdates.forEach(y=>{e.resolvedLimboDocuments.has(y)&&d.push(t.persistence.referenceDelegate.updateLimboDocument(o,y))}),d.push(lD(o,u,e.documentUpdates).next(y=>{m=y.Vs,p=y.fs})),!r.isEqual(Ee.min())){const y=t.Hr.getLastRemoteSnapshotVersion(o).next(v=>t.Hr.setTargetsMetadata(o,o.currentSequenceNumber,r));d.push(y)}return j.waitFor(d).next(()=>u.apply(o)).next(()=>t.localDocuments.getLocalViewOfDocuments(o,m,p)).next(()=>m)}).then(o=>(t.Ts=a,o))}function lD(n,e,t){let r=Pe(),a=Pe();return t.forEach(o=>r=r.add(o)),e.getEntries(n,r).next(o=>{let u=Hn();return t.forEach((d,m)=>{const p=o.get(d);m.isFoundDocument()!==p.isFoundDocument()&&(a=a.add(d)),m.isNoDocument()&&m.version.isEqual(Ee.min())?(e.removeEntry(d,m.readTime),u=u.insert(d,m)):!p.isValidDocument()||m.version.compareTo(p.version)>0||m.version.compareTo(p.version)===0&&p.hasPendingWrites?(e.addEntry(m),u=u.insert(d,m)):re(HE,"Ignoring outdated watch update for ",d,". Current version:",p.version," Watch version:",m.version)}),{Vs:u,fs:a}})}function kz(n,e){const t=de(n);return t.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=ra),t.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function Tu(n,e){const t=de(n);return t.persistence.runTransaction("Allocate target","readwrite",r=>{let a;return t.Hr.getTargetData(r,e).next(o=>o?(a=o,j.resolve(a)):t.Hr.allocateTargetId(r).next(u=>(a=new Gi(e,u,"TargetPurposeListen",r.currentSequenceNumber),t.Hr.addTargetData(r,a).next(()=>a))))}).then(r=>{const a=t.Ts.get(r.targetId);return(a===null||r.snapshotVersion.compareTo(a.snapshotVersion)>0)&&(t.Ts=t.Ts.insert(r.targetId,r),t.Is.set(e,r.targetId)),r})}async function wu(n,e,t){const r=de(n),a=r.Ts.get(e),o=t?"readwrite":"readwrite-primary";try{t||await r.persistence.runTransaction("Release target",o,u=>r.persistence.referenceDelegate.removeTarget(u,a))}catch(u){if(!Ta(u))throw u;re(HE,`Failed to update sequence numbers for target ${e}: ${u}`)}r.Ts=r.Ts.remove(e),r.Is.delete(a.target)}function rp(n,e,t){const r=de(n);let a=Ee.min(),o=Pe();return r.persistence.runTransaction("Execute query","readwrite",u=>function(m,p,y){const v=de(m),w=v.Is.get(y);return w!==void 0?j.resolve(v.Ts.get(w)):v.Hr.getTargetData(p,y)}(r,u,Vn(e)).next(d=>{if(d)return a=d.lastLimboFreeSnapshotVersion,r.Hr.getMatchingKeysForTargetId(u,d.targetId).next(m=>{o=m})}).next(()=>r.Ps.getDocumentsMatchingQuery(u,e,t?a:Ee.min(),t?o:Pe())).next(d=>(hD(r,p1(e),d),{documents:d,gs:o})))}function uD(n,e){const t=de(n),r=de(t.Hr),a=t.Ts.get(e);return a?Promise.resolve(a.target):t.persistence.runTransaction("Get target data","readonly",o=>r.lt(o,e).next(u=>u?u.target:null))}function cD(n,e){const t=de(n),r=t.Es.get(e)||Ee.min();return t.persistence.runTransaction("Get new document changes","readonly",a=>t.ds.getAllFromCollectionGroup(a,e,VC(r,cu),Number.MAX_SAFE_INTEGER)).then(a=>(hD(t,e,a),a))}function hD(n,e,t){let r=n.Es.get(e)||Ee.min();t.forEach((a,o)=>{o.readTime.compareTo(r)>0&&(r=o.readTime)}),n.Es.set(e,r)}async function Vz(n,e,t,r){const a=de(n);let o=Pe(),u=Hn();for(const p of t){const y=e.ps(p.metadata.name);p.document&&(o=o.add(y));const v=e.ys(p);v.setReadTime(e.ws(p.metadata.readTime)),u=u.insert(y,v)}const d=a.ds.newChangeBuffer({trackRemovals:!0}),m=await Tu(a,function(y){return Vn(Lu(ze.fromString(`__bundle__/docs/${y}`)))}(r));return a.persistence.runTransaction("Apply bundle documents","readwrite",p=>lD(p,d,u).next(y=>(d.apply(p),y)).next(y=>a.Hr.removeMatchingKeysForTargetId(p,m.targetId).next(()=>a.Hr.addMatchingKeys(p,o,m.targetId)).next(()=>a.localDocuments.getLocalViewOfDocuments(p,y.Vs,y.fs)).next(()=>y.Vs)))}async function Mz(n,e,t=Pe()){const r=await Tu(n,Vn(ME(e.bundledQuery))),a=de(n);return a.persistence.runTransaction("Save named query","readwrite",o=>{const u=Mt(e.readTime);if(r.snapshotVersion.compareTo(u)>=0)return a.Yr.saveNamedQuery(o,e);const d=r.withResumeToken(Dt.EMPTY_BYTE_STRING,u);return a.Ts=a.Ts.insert(d.targetId,d),a.Hr.updateTargetData(o,d).next(()=>a.Hr.removeMatchingKeysForTargetId(o,r.targetId)).next(()=>a.Hr.addMatchingKeys(o,t,r.targetId)).next(()=>a.Yr.saveNamedQuery(o,e))})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dD="firestore_clients";function BA(n,e){return`${dD}_${n}_${e}`}const fD="firestore_mutations";function zA(n,e,t){let r=`${fD}_${n}_${t}`;return e.isAuthenticated()&&(r+=`_${e.uid}`),r}const mD="firestore_targets";function Cy(n,e){return`${mD}_${n}_${e}`}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jr="SharedClientState";class ip{constructor(e,t,r,a){this.user=e,this.batchId=t,this.state=r,this.error=a}static Ss(e,t,r){const a=JSON.parse(r);let o,u=typeof a=="object"&&["pending","acknowledged","rejected"].indexOf(a.state)!==-1&&(a.error===void 0||typeof a.error=="object");return u&&a.error&&(u=typeof a.error.message=="string"&&typeof a.error.code=="string",u&&(o=new te(a.error.code,a.error.message))),u?new ip(e,t,a.state,o):(Vt(Jr,`Failed to parse mutation state for ID '${t}': ${r}`),null)}bs(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class Rh{constructor(e,t,r){this.targetId=e,this.state=t,this.error=r}static Ss(e,t){const r=JSON.parse(t);let a,o=typeof r=="object"&&["not-current","current","rejected"].indexOf(r.state)!==-1&&(r.error===void 0||typeof r.error=="object");return o&&r.error&&(o=typeof r.error.message=="string"&&typeof r.error.code=="string",o&&(a=new te(r.error.code,r.error.message))),o?new Rh(e,r.state,a):(Vt(Jr,`Failed to parse target state for ID '${e}': ${t}`),null)}bs(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class sp{constructor(e,t){this.clientId=e,this.activeTargetIds=t}static Ss(e,t){const r=JSON.parse(t);let a=typeof r=="object"&&r.activeTargetIds instanceof Array,o=CE();for(let u=0;a&&u<r.activeTargetIds.length;++u)a=zC(r.activeTargetIds[u]),o=o.add(r.activeTargetIds[u]);return a?new sp(e,o):(Vt(Jr,`Failed to parse client data for instance '${e}': ${t}`),null)}}class GE{constructor(e,t){this.clientId=e,this.onlineState=t}static Ss(e){const t=JSON.parse(e);return typeof t=="object"&&["Unknown","Online","Offline"].indexOf(t.onlineState)!==-1&&typeof t.clientId=="string"?new GE(t.clientId,t.onlineState):(Vt(Jr,`Failed to parse online state: ${e}`),null)}}class Ev{constructor(){this.activeTargetIds=CE()}Ds(e){this.activeTargetIds=this.activeTargetIds.add(e)}vs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}bs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Dy{constructor(e,t,r,a,o){this.window=e,this.Ti=t,this.persistenceKey=r,this.Cs=a,this.syncEngine=null,this.onlineStateHandler=null,this.sequenceNumberHandler=null,this.Fs=this.Ms.bind(this),this.xs=new lt(Se),this.started=!1,this.Os=[];const u=r.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");this.storage=this.window.localStorage,this.currentUser=o,this.Ns=BA(this.persistenceKey,this.Cs),this.Bs=function(m){return`firestore_sequence_number_${m}`}(this.persistenceKey),this.xs=this.xs.insert(this.Cs,new Ev),this.Ls=new RegExp(`^${dD}_${u}_([^_]*)$`),this.ks=new RegExp(`^${fD}_${u}_(\\d+)(?:_(.*))?$`),this.qs=new RegExp(`^${mD}_${u}_(\\d+)$`),this.Qs=function(m){return`firestore_online_state_${m}`}(this.persistenceKey),this.$s=function(m){return`firestore_bundle_loaded_v2_${m}`}(this.persistenceKey),this.window.addEventListener("storage",this.Fs)}static D(e){return!(!e||!e.localStorage)}async start(){const e=await this.syncEngine.zi();for(const r of e){if(r===this.Cs)continue;const a=this.getItem(BA(this.persistenceKey,r));if(a){const o=sp.Ss(r,a);o&&(this.xs=this.xs.insert(o.clientId,o))}}this.Us();const t=this.storage.getItem(this.Qs);if(t){const r=this.Ks(t);r&&this.Ws(r)}for(const r of this.Os)this.Ms(r);this.Os=[],this.window.addEventListener("pagehide",()=>this.shutdown()),this.started=!0}writeSequenceNumber(e){this.setItem(this.Bs,JSON.stringify(e))}getAllActiveQueryTargets(){return this.Gs(this.xs)}isActiveQueryTarget(e){let t=!1;return this.xs.forEach((r,a)=>{a.activeTargetIds.has(e)&&(t=!0)}),t}addPendingMutation(e){this.zs(e,"pending")}updateMutationState(e,t,r){this.zs(e,t,r),this.js(e)}addLocalQueryTarget(e,t=!0){let r="not-current";if(this.isActiveQueryTarget(e)){const a=this.storage.getItem(Cy(this.persistenceKey,e));if(a){const o=Rh.Ss(e,a);o&&(r=o.state)}}return t&&this.Hs.Ds(e),this.Us(),r}removeLocalQueryTarget(e){this.Hs.vs(e),this.Us()}isLocalQueryTarget(e){return this.Hs.activeTargetIds.has(e)}clearQueryState(e){this.removeItem(Cy(this.persistenceKey,e))}updateQueryState(e,t,r){this.Js(e,t,r)}handleUserChange(e,t,r){t.forEach(a=>{this.js(a)}),this.currentUser=e,r.forEach(a=>{this.addPendingMutation(a)})}setOnlineState(e){this.Ys(e)}notifyBundleLoaded(e){this.Zs(e)}shutdown(){this.started&&(this.window.removeEventListener("storage",this.Fs),this.removeItem(this.Ns),this.started=!1)}getItem(e){const t=this.storage.getItem(e);return re(Jr,"READ",e,t),t}setItem(e,t){re(Jr,"SET",e,t),this.storage.setItem(e,t)}removeItem(e){re(Jr,"REMOVE",e),this.storage.removeItem(e)}Ms(e){const t=e;if(t.storageArea===this.storage){if(re(Jr,"EVENT",t.key,t.newValue),t.key===this.Ns)return void Vt("Received WebStorage notification for local change. Another client might have garbage-collected our state");this.Ti.enqueueRetryable(async()=>{if(this.started){if(t.key!==null){if(this.Ls.test(t.key)){if(t.newValue==null){const r=this.Xs(t.key);return this.eo(r,null)}{const r=this.no(t.key,t.newValue);if(r)return this.eo(r.clientId,r)}}else if(this.ks.test(t.key)){if(t.newValue!==null){const r=this.ro(t.key,t.newValue);if(r)return this.io(r)}}else if(this.qs.test(t.key)){if(t.newValue!==null){const r=this.so(t.key,t.newValue);if(r)return this.oo(r)}}else if(t.key===this.Qs){if(t.newValue!==null){const r=this.Ks(t.newValue);if(r)return this.Ws(r)}}else if(t.key===this.Bs){const r=function(o){let u=jn.ae;if(o!=null)try{const d=JSON.parse(o);ye(typeof d=="number"),u=d}catch(d){Vt(Jr,"Failed to read sequence number from WebStorage",d)}return u}(t.newValue);r!==jn.ae&&this.sequenceNumberHandler(r)}else if(t.key===this.$s){const r=this._o(t.newValue);await Promise.all(r.map(a=>this.syncEngine.ao(a)))}}}else this.Os.push(t)})}}get Hs(){return this.xs.get(this.Cs)}Us(){this.setItem(this.Ns,this.Hs.bs())}zs(e,t,r){const a=new ip(this.currentUser,e,t,r),o=zA(this.persistenceKey,this.currentUser,e);this.setItem(o,a.bs())}js(e){const t=zA(this.persistenceKey,this.currentUser,e);this.removeItem(t)}Ys(e){const t={clientId:this.Cs,onlineState:e};this.storage.setItem(this.Qs,JSON.stringify(t))}Js(e,t,r){const a=Cy(this.persistenceKey,e),o=new Rh(e,t,r);this.setItem(a,o.bs())}Zs(e){const t=JSON.stringify(Array.from(e));this.setItem(this.$s,t)}Xs(e){const t=this.Ls.exec(e);return t?t[1]:null}no(e,t){const r=this.Xs(e);return sp.Ss(r,t)}ro(e,t){const r=this.ks.exec(e),a=Number(r[1]),o=r[2]!==void 0?r[2]:null;return ip.Ss(new cn(o),a,t)}so(e,t){const r=this.qs.exec(e),a=Number(r[1]);return Rh.Ss(a,t)}Ks(e){return GE.Ss(e)}_o(e){return JSON.parse(e)}async io(e){if(e.user.uid===this.currentUser.uid)return this.syncEngine.uo(e.batchId,e.state,e.error);re(Jr,`Ignoring mutation for non-active user ${e.user.uid}`)}oo(e){return this.syncEngine.co(e.targetId,e.state,e.error)}eo(e,t){const r=t?this.xs.insert(e,t):this.xs.remove(e),a=this.Gs(this.xs),o=this.Gs(r),u=[],d=[];return o.forEach(m=>{a.has(m)||u.push(m)}),a.forEach(m=>{o.has(m)||d.push(m)}),this.syncEngine.lo(u,d).then(()=>{this.xs=r})}Ws(e){this.xs.get(e.clientId)&&this.onlineStateHandler(e.onlineState)}Gs(e){let t=CE();return e.forEach((r,a)=>{t=t.unionWith(a.activeTargetIds)}),t}}class pD{constructor(){this.ho=new Ev,this.Po={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e,t=!0){return t&&this.ho.Ds(e),this.Po[e]||"not-current"}updateQueryState(e,t,r){this.Po[e]=t}removeLocalQueryTarget(e){this.ho.vs(e)}isLocalQueryTarget(e){return this.ho.activeTargetIds.has(e)}clearQueryState(e){delete this.Po[e]}getAllActiveQueryTargets(){return this.ho.activeTargetIds}isActiveQueryTarget(e){return this.ho.activeTargetIds.has(e)}start(){return this.ho=new Ev,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lz{To(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FA="ConnectivityMonitor";class jA{constructor(){this.Io=()=>this.Eo(),this.Ao=()=>this.Ro(),this.Vo=[],this.mo()}To(e){this.Vo.push(e)}shutdown(){window.removeEventListener("online",this.Io),window.removeEventListener("offline",this.Ao)}mo(){window.addEventListener("online",this.Io),window.addEventListener("offline",this.Ao)}Eo(){re(FA,"Network connectivity changed: AVAILABLE");for(const e of this.Vo)e(0)}Ro(){re(FA,"Network connectivity changed: UNAVAILABLE");for(const e of this.Vo)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let am=null;function Tv(){return am===null?am=function(){return 268435456+Math.round(2147483648*Math.random())}():am++,"0x"+am.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Py="RestConnection",Uz={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class Bz{get fo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),a=encodeURIComponent(this.databaseId.database);this.po=t+"://"+e.host,this.yo=`projects/${r}/databases/${a}`,this.wo=this.databaseId.database===av?`project_id=${r}`:`project_id=${r}&database_id=${a}`}So(e,t,r,a,o){const u=Tv(),d=this.bo(e,t.toUriEncodedString());re(Py,`Sending RPC '${e}' ${u}:`,d,r);const m={"google-cloud-resource-prefix":this.yo,"x-goog-request-params":this.wo};return this.Do(m,a,o),this.vo(e,d,m,r).then(p=>(re(Py,`Received RPC '${e}' ${u}: `,p),p),p=>{throw di(Py,`RPC '${e}' ${u} failed with error: `,p,"url: ",d,"request:",r),p})}Co(e,t,r,a,o,u){return this.So(e,t,r,a,o)}Do(e,t,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Mu}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((a,o)=>e[o]=a),r&&r.headers.forEach((a,o)=>e[o]=a)}bo(e,t){const r=Uz[e];return`${this.po}/v1/${t}:${r}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zz{constructor(e){this.Fo=e.Fo,this.Mo=e.Mo}xo(e){this.Oo=e}No(e){this.Bo=e}Lo(e){this.ko=e}onMessage(e){this.qo=e}close(){this.Mo()}send(e){this.Fo(e)}Qo(){this.Oo()}$o(){this.Bo()}Uo(e){this.ko(e)}Ko(e){this.qo(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bn="WebChannelConnection";class Fz extends Bz{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}vo(e,t,r,a){const o=Tv();return new Promise((u,d)=>{const m=new RC;m.setWithCredentials(!0),m.listenOnce(CC.COMPLETE,()=>{try{switch(m.getLastErrorCode()){case Em.NO_ERROR:const y=m.getResponseJson();re(bn,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(y)),u(y);break;case Em.TIMEOUT:re(bn,`RPC '${e}' ${o} timed out`),d(new te(K.DEADLINE_EXCEEDED,"Request time out"));break;case Em.HTTP_ERROR:const v=m.getStatus();if(re(bn,`RPC '${e}' ${o} failed with status:`,v,"response text:",m.getResponseText()),v>0){let w=m.getResponseJson();Array.isArray(w)&&(w=w[0]);const S=w==null?void 0:w.error;if(S&&S.status&&S.message){const P=function(L){const H=L.toLowerCase().replace(/_/g,"-");return Object.values(K).indexOf(H)>=0?H:K.UNKNOWN}(S.status);d(new te(P,S.message))}else d(new te(K.UNKNOWN,"Server responded with status "+m.getStatus()))}else d(new te(K.UNAVAILABLE,"Connection failed."));break;default:pe()}}finally{re(bn,`RPC '${e}' ${o} completed.`)}});const p=JSON.stringify(a);re(bn,`RPC '${e}' ${o} sending request:`,a),m.send(t,"POST",p,r,15)})}Wo(e,t,r){const a=Tv(),o=[this.po,"/","google.firestore.v1.Firestore","/",e,"/channel"],u=xC(),d=PC(),m={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},p=this.longPollingOptions.timeoutSeconds;p!==void 0&&(m.longPollingTimeout=Math.round(1e3*p)),this.useFetchStreams&&(m.useFetchStreams=!0),this.Do(m.initMessageHeaders,t,r),m.encodeInitMessageHeaders=!0;const y=o.join("");re(bn,`Creating RPC '${e}' stream ${a}: ${y}`,m);const v=u.createWebChannel(y,m);let w=!1,S=!1;const P=new zz({Fo:L=>{S?re(bn,`Not sending because RPC '${e}' stream ${a} is closed:`,L):(w||(re(bn,`Opening RPC '${e}' stream ${a} transport.`),v.open(),w=!0),re(bn,`RPC '${e}' stream ${a} sending:`,L),v.send(L))},Mo:()=>v.close()}),U=(L,H,Y)=>{L.listen(H,$=>{try{Y($)}catch(oe){setTimeout(()=>{throw oe},0)}})};return U(v,dh.EventType.OPEN,()=>{S||(re(bn,`RPC '${e}' stream ${a} transport opened.`),P.Qo())}),U(v,dh.EventType.CLOSE,()=>{S||(S=!0,re(bn,`RPC '${e}' stream ${a} transport closed`),P.Uo())}),U(v,dh.EventType.ERROR,L=>{S||(S=!0,di(bn,`RPC '${e}' stream ${a} transport errored:`,L),P.Uo(new te(K.UNAVAILABLE,"The operation could not be completed")))}),U(v,dh.EventType.MESSAGE,L=>{var H;if(!S){const Y=L.data[0];ye(!!Y);const $=Y,oe=($==null?void 0:$.error)||((H=$[0])===null||H===void 0?void 0:H.error);if(oe){re(bn,`RPC '${e}' stream ${a} received error:`,oe);const ae=oe.status;let le=function(A){const x=jt[A];if(x!==void 0)return D1(x)}(ae),D=oe.message;le===void 0&&(le=K.INTERNAL,D="Unknown error status: "+ae+" with message "+oe.message),S=!0,P.Uo(new te(le,D)),v.close()}else re(bn,`RPC '${e}' stream ${a} received:`,Y),P.Ko(Y)}}),U(d,DC.STAT_EVENT,L=>{L.stat===Jy.PROXY?re(bn,`RPC '${e}' stream ${a} detected buffering proxy`):L.stat===Jy.NOPROXY&&re(bn,`RPC '${e}' stream ${a} detected no buffering proxy`)}),setTimeout(()=>{P.$o()},0),P}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gD(){return typeof window<"u"?window:null}function Dm(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wd(n){return new $B(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $E{constructor(e,t,r=1e3,a=1.5,o=6e4){this.Ti=e,this.timerId=t,this.Go=r,this.zo=a,this.jo=o,this.Ho=0,this.Jo=null,this.Yo=Date.now(),this.reset()}reset(){this.Ho=0}Zo(){this.Ho=this.jo}Xo(e){this.cancel();const t=Math.floor(this.Ho+this.e_()),r=Math.max(0,Date.now()-this.Yo),a=Math.max(0,t-r);a>0&&re("ExponentialBackoff",`Backing off for ${a} ms (base delay: ${this.Ho} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.Jo=this.Ti.enqueueAfterDelay(this.timerId,a,()=>(this.Yo=Date.now(),e())),this.Ho*=this.zo,this.Ho<this.Go&&(this.Ho=this.Go),this.Ho>this.jo&&(this.Ho=this.jo)}t_(){this.Jo!==null&&(this.Jo.skipDelay(),this.Jo=null)}cancel(){this.Jo!==null&&(this.Jo.cancel(),this.Jo=null)}e_(){return(Math.random()-.5)*this.Ho}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qA="PersistentStream";class _D{constructor(e,t,r,a,o,u,d,m){this.Ti=e,this.n_=r,this.r_=a,this.connection=o,this.authCredentialsProvider=u,this.appCheckCredentialsProvider=d,this.listener=m,this.state=0,this.i_=0,this.s_=null,this.o_=null,this.stream=null,this.__=0,this.a_=new $E(e,t)}u_(){return this.state===1||this.state===5||this.c_()}c_(){return this.state===2||this.state===3}start(){this.__=0,this.state!==4?this.auth():this.l_()}async stop(){this.u_()&&await this.close(0)}h_(){this.state=0,this.a_.reset()}P_(){this.c_()&&this.s_===null&&(this.s_=this.Ti.enqueueAfterDelay(this.n_,6e4,()=>this.T_()))}I_(e){this.E_(),this.stream.send(e)}async T_(){if(this.c_())return this.close(0)}E_(){this.s_&&(this.s_.cancel(),this.s_=null)}d_(){this.o_&&(this.o_.cancel(),this.o_=null)}async close(e,t){this.E_(),this.d_(),this.a_.cancel(),this.i_++,e!==4?this.a_.reset():t&&t.code===K.RESOURCE_EXHAUSTED?(Vt(t.toString()),Vt("Using maximum backoff delay to prevent overloading the backend."),this.a_.Zo()):t&&t.code===K.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.A_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Lo(t)}A_(){}auth(){this.state=1;const e=this.R_(this.i_),t=this.i_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,a])=>{this.i_===t&&this.V_(r,a)},r=>{e(()=>{const a=new te(K.UNKNOWN,"Fetching auth token failed: "+r.message);return this.m_(a)})})}V_(e,t){const r=this.R_(this.i_);this.stream=this.f_(e,t),this.stream.xo(()=>{r(()=>this.listener.xo())}),this.stream.No(()=>{r(()=>(this.state=2,this.o_=this.Ti.enqueueAfterDelay(this.r_,1e4,()=>(this.c_()&&(this.state=3),Promise.resolve())),this.listener.No()))}),this.stream.Lo(a=>{r(()=>this.m_(a))}),this.stream.onMessage(a=>{r(()=>++this.__==1?this.g_(a):this.onNext(a))})}l_(){this.state=5,this.a_.Xo(async()=>{this.state=0,this.start()})}m_(e){return re(qA,`close with error: ${e}`),this.stream=null,this.close(4,e)}R_(e){return t=>{this.Ti.enqueueAndForget(()=>this.i_===e?t():(re(qA,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class jz extends _D{constructor(e,t,r,a,o,u){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,a,u),this.serializer=o}f_(e,t){return this.connection.Wo("Listen",e,t)}g_(e){return this.onNext(e)}onNext(e){this.a_.reset();const t=WB(this.serializer,e),r=function(o){if(!("targetChange"in o))return Ee.min();const u=o.targetChange;return u.targetIds&&u.targetIds.length?Ee.min():u.readTime?Mt(u.readTime):Ee.min()}(e);return this.listener.p_(t,r)}y_(e){const t={};t.database=pv(this.serializer),t.addTarget=function(o,u){let d;const m=u.target;if(d=Ym(m)?{documents:U1(o,m)}:{query:B1(o,m).ht},d.targetId=u.targetId,u.resumeToken.approximateByteSize()>0){d.resumeToken=N1(o,u.resumeToken);const p=fv(o,u.expectedCount);p!==null&&(d.expectedCount=p)}else if(u.snapshotVersion.compareTo(Ee.min())>0){d.readTime=Eu(o,u.snapshotVersion.toTimestamp());const p=fv(o,u.expectedCount);p!==null&&(d.expectedCount=p)}return d}(this.serializer,e);const r=XB(this.serializer,e);r&&(t.labels=r),this.I_(t)}w_(e){const t={};t.database=pv(this.serializer),t.removeTarget=e,this.I_(t)}}class qz extends _D{constructor(e,t,r,a,o,u){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,a,u),this.serializer=o}get S_(){return this.__>0}start(){this.lastStreamToken=void 0,super.start()}A_(){this.S_&&this.b_([])}f_(e,t){return this.connection.Wo("Write",e,t)}g_(e){return ye(!!e.streamToken),this.lastStreamToken=e.streamToken,ye(!e.writeResults||e.writeResults.length===0),this.listener.D_()}onNext(e){ye(!!e.streamToken),this.lastStreamToken=e.streamToken,this.a_.reset();const t=YB(e.writeResults,e.commitTime),r=Mt(e.commitTime);return this.listener.v_(r,t)}C_(){const e={};e.database=pv(this.serializer),this.I_(e)}b_(e){const t={streamToken:this.lastStreamToken,writes:e.map(r=>Yh(this.serializer,r))};this.I_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hz{}class Gz extends Hz{constructor(e,t,r,a){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=a,this.F_=!1}M_(){if(this.F_)throw new te(K.FAILED_PRECONDITION,"The client has already been terminated.")}So(e,t,r,a){return this.M_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,u])=>this.connection.So(e,mv(t,r),a,o,u)).catch(o=>{throw o.name==="FirebaseError"?(o.code===K.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new te(K.UNKNOWN,o.toString())})}Co(e,t,r,a,o){return this.M_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([u,d])=>this.connection.Co(e,mv(t,r),a,u,d,o)).catch(u=>{throw u.name==="FirebaseError"?(u.code===K.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),u):new te(K.UNKNOWN,u.toString())})}terminate(){this.F_=!0,this.connection.terminate()}}class $z{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.x_=0,this.O_=null,this.N_=!0}B_(){this.x_===0&&(this.L_("Unknown"),this.O_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.O_=null,this.k_("Backend didn't respond within 10 seconds."),this.L_("Offline"),Promise.resolve())))}q_(e){this.state==="Online"?this.L_("Unknown"):(this.x_++,this.x_>=1&&(this.Q_(),this.k_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.L_("Offline")))}set(e){this.Q_(),this.x_=0,e==="Online"&&(this.N_=!1),this.L_(e)}L_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}k_(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.N_?(Vt(t),this.N_=!1):re("OnlineStateTracker",t)}Q_(){this.O_!==null&&(this.O_.cancel(),this.O_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oo="RemoteStore";class Kz{constructor(e,t,r,a,o){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.U_=[],this.K_=new Map,this.W_=new Set,this.G_=[],this.z_=o,this.z_.To(u=>{r.enqueueAndForget(async()=>{ba(this)&&(re(Oo,"Restarting streams for network reachability change."),await async function(m){const p=de(m);p.W_.add(4),await zu(p),p.j_.set("Unknown"),p.W_.delete(4),await bd(p)}(this))})}),this.j_=new $z(r,a)}}async function bd(n){if(ba(n))for(const e of n.G_)await e(!0)}async function zu(n){for(const e of n.G_)await e(!1)}function jp(n,e){const t=de(n);t.K_.has(e.targetId)||(t.K_.set(e.targetId,e),WE(t)?QE(t):ju(t).c_()&&KE(t,e))}function bu(n,e){const t=de(n),r=ju(t);t.K_.delete(e),r.c_()&&yD(t,e),t.K_.size===0&&(r.c_()?r.P_():ba(t)&&t.j_.set("Unknown"))}function KE(n,e){if(n.H_.Ne(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Ee.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}ju(n).y_(e)}function yD(n,e){n.H_.Ne(e),ju(n).w_(e)}function QE(n){n.H_=new jB({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),lt:e=>n.K_.get(e)||null,it:()=>n.datastore.serializer.databaseId}),ju(n).start(),n.j_.B_()}function WE(n){return ba(n)&&!ju(n).u_()&&n.K_.size>0}function ba(n){return de(n).W_.size===0}function vD(n){n.H_=void 0}async function Qz(n){n.j_.set("Online")}async function Wz(n){n.K_.forEach((e,t)=>{KE(n,e)})}async function Yz(n,e){vD(n),WE(n)?(n.j_.q_(e),QE(n)):n.j_.set("Unknown")}async function Xz(n,e,t){if(n.j_.set("Online"),e instanceof x1&&e.state===2&&e.cause)try{await async function(a,o){const u=o.cause;for(const d of o.targetIds)a.K_.has(d)&&(await a.remoteSyncer.rejectListen(d,u),a.K_.delete(d),a.H_.removeTarget(d))}(n,e)}catch(r){re(Oo,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await ap(n,r)}else if(e instanceof Cm?n.H_.We(e):e instanceof P1?n.H_.Ze(e):n.H_.je(e),!t.isEqual(Ee.min()))try{const r=await oD(n.localStore);t.compareTo(r)>=0&&await function(o,u){const d=o.H_.ot(u);return d.targetChanges.forEach((m,p)=>{if(m.resumeToken.approximateByteSize()>0){const y=o.K_.get(p);y&&o.K_.set(p,y.withResumeToken(m.resumeToken,u))}}),d.targetMismatches.forEach((m,p)=>{const y=o.K_.get(m);if(!y)return;o.K_.set(m,y.withResumeToken(Dt.EMPTY_BYTE_STRING,y.snapshotVersion)),yD(o,m);const v=new Gi(y.target,m,p,y.sequenceNumber);KE(o,v)}),o.remoteSyncer.applyRemoteEvent(d)}(n,t)}catch(r){re(Oo,"Failed to raise snapshot:",r),await ap(n,r)}}async function ap(n,e,t){if(!Ta(e))throw e;n.W_.add(1),await zu(n),n.j_.set("Offline"),t||(t=()=>oD(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{re(Oo,"Retrying IndexedDB access"),await t(),n.W_.delete(1),await bd(n)})}function ED(n,e){return e().catch(t=>ap(n,t,e))}async function Fu(n){const e=de(n),t=ma(e);let r=e.U_.length>0?e.U_[e.U_.length-1].batchId:ra;for(;Zz(e);)try{const a=await kz(e.localStore,r);if(a===null){e.U_.length===0&&t.P_();break}r=a.batchId,Jz(e,a)}catch(a){await ap(e,a)}TD(e)&&wD(e)}function Zz(n){return ba(n)&&n.U_.length<10}function Jz(n,e){n.U_.push(e);const t=ma(n);t.c_()&&t.S_&&t.b_(e.mutations)}function TD(n){return ba(n)&&!ma(n).u_()&&n.U_.length>0}function wD(n){ma(n).start()}async function e6(n){ma(n).C_()}async function t6(n){const e=ma(n);for(const t of n.U_)e.b_(t.mutations)}async function n6(n,e,t){const r=n.U_.shift(),a=NE.from(r,e,t);await ED(n,()=>n.remoteSyncer.applySuccessfulWrite(a)),await Fu(n)}async function r6(n,e){e&&ma(n).S_&&await async function(r,a){if(function(u){return C1(u)&&u!==K.ABORTED}(a.code)){const o=r.U_.shift();ma(r).h_(),await ED(r,()=>r.remoteSyncer.rejectFailedWrite(o.batchId,a)),await Fu(r)}}(n,e),TD(n)&&wD(n)}async function HA(n,e){const t=de(n);t.asyncQueue.verifyOperationInProgress(),re(Oo,"RemoteStore received new credentials");const r=ba(t);t.W_.add(3),await zu(t),r&&t.j_.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.W_.delete(3),await bd(t)}async function wv(n,e){const t=de(n);e?(t.W_.delete(2),await bd(t)):e||(t.W_.add(2),await zu(t),t.j_.set("Unknown"))}function ju(n){return n.J_||(n.J_=function(t,r,a){const o=de(t);return o.M_(),new jz(r,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,a)}(n.datastore,n.asyncQueue,{xo:Qz.bind(null,n),No:Wz.bind(null,n),Lo:Yz.bind(null,n),p_:Xz.bind(null,n)}),n.G_.push(async e=>{e?(n.J_.h_(),WE(n)?QE(n):n.j_.set("Unknown")):(await n.J_.stop(),vD(n))})),n.J_}function ma(n){return n.Y_||(n.Y_=function(t,r,a){const o=de(t);return o.M_(),new qz(r,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,a)}(n.datastore,n.asyncQueue,{xo:()=>Promise.resolve(),No:e6.bind(null,n),Lo:r6.bind(null,n),D_:t6.bind(null,n),v_:n6.bind(null,n)}),n.G_.push(async e=>{e?(n.Y_.h_(),await Fu(n)):(await n.Y_.stop(),n.U_.length>0&&(re(Oo,`Stopping write stream with ${n.U_.length} pending writes`),n.U_=[]))})),n.Y_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YE{constructor(e,t,r,a,o){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=a,this.removalCallback=o,this.deferred=new yn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(u=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,a,o){const u=Date.now()+r,d=new YE(e,t,u,a,o);return d.start(r),d}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new te(K.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function qu(n,e){if(Vt("AsyncQueue",`${e}: ${n}`),Ta(n))return new te(K.UNAVAILABLE,`${e}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jl{static emptySet(e){return new Jl(e.comparator)}constructor(e){this.comparator=e?(t,r)=>e(t,r)||ce.comparator(t.key,r.key):(t,r)=>ce.comparator(t.key,r.key),this.keyedMap=fh(),this.sortedSet=new lt(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,r)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Jl)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){const a=t.getNext().key,o=r.getNext().key;if(!a.isEqual(o))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const r=new Jl;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GA{constructor(){this.Z_=new lt(ce.comparator)}track(e){const t=e.doc.key,r=this.Z_.get(t);r?e.type!==0&&r.type===3?this.Z_=this.Z_.insert(t,e):e.type===3&&r.type!==1?this.Z_=this.Z_.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.Z_=this.Z_.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.Z_=this.Z_.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.Z_=this.Z_.remove(t):e.type===1&&r.type===2?this.Z_=this.Z_.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.Z_=this.Z_.insert(t,{type:2,doc:e.doc}):pe():this.Z_=this.Z_.insert(t,e)}X_(){const e=[];return this.Z_.inorderTraversal((t,r)=>{e.push(r)}),e}}class Iu{constructor(e,t,r,a,o,u,d,m,p){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=a,this.mutatedKeys=o,this.fromCache=u,this.syncStateChanged=d,this.excludesMetadataChanges=m,this.hasCachedResults=p}static fromInitialDocuments(e,t,r,a,o){const u=[];return t.forEach(d=>{u.push({type:0,doc:d})}),new Iu(e,t,Jl.emptySet(t),u,r,a,!0,!1,o)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&_d(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let a=0;a<t.length;a++)if(t[a].type!==r[a].type||!t[a].doc.isEqual(r[a].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i6{constructor(){this.ea=void 0,this.ta=[]}na(){return this.ta.some(e=>e.ra())}}class s6{constructor(){this.queries=$A(),this.onlineState="Unknown",this.ia=new Set}terminate(){(function(t,r){const a=de(t),o=a.queries;a.queries=$A(),o.forEach((u,d)=>{for(const m of d.ta)m.onError(r)})})(this,new te(K.ABORTED,"Firestore shutting down"))}}function $A(){return new rs(n=>m1(n),_d)}async function XE(n,e){const t=de(n);let r=3;const a=e.query;let o=t.queries.get(a);o?!o.na()&&e.ra()&&(r=2):(o=new i6,r=e.ra()?0:1);try{switch(r){case 0:o.ea=await t.onListen(a,!0);break;case 1:o.ea=await t.onListen(a,!1);break;case 2:await t.onFirstRemoteStoreListen(a)}}catch(u){const d=qu(u,`Initialization of query '${Fl(e.query)}' failed`);return void e.onError(d)}t.queries.set(a,o),o.ta.push(e),e.sa(t.onlineState),o.ea&&e.oa(o.ea)&&JE(t)}async function ZE(n,e){const t=de(n),r=e.query;let a=3;const o=t.queries.get(r);if(o){const u=o.ta.indexOf(e);u>=0&&(o.ta.splice(u,1),o.ta.length===0?a=e.ra()?0:1:!o.na()&&e.ra()&&(a=2))}switch(a){case 0:return t.queries.delete(r),t.onUnlisten(r,!0);case 1:return t.queries.delete(r),t.onUnlisten(r,!1);case 2:return t.onLastRemoteStoreUnlisten(r);default:return}}function a6(n,e){const t=de(n);let r=!1;for(const a of e){const o=a.query,u=t.queries.get(o);if(u){for(const d of u.ta)d.oa(a)&&(r=!0);u.ea=a}}r&&JE(t)}function o6(n,e,t){const r=de(n),a=r.queries.get(e);if(a)for(const o of a.ta)o.onError(t);r.queries.delete(e)}function JE(n){n.ia.forEach(e=>{e.next()})}var bv,KA;(KA=bv||(bv={}))._a="default",KA.Cache="cache";class eT{constructor(e,t,r){this.query=e,this.aa=t,this.ua=!1,this.ca=null,this.onlineState="Unknown",this.options=r||{}}oa(e){if(!this.options.includeMetadataChanges){const r=[];for(const a of e.docChanges)a.type!==3&&r.push(a);e=new Iu(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.ua?this.la(e)&&(this.aa.next(e),t=!0):this.ha(e,this.onlineState)&&(this.Pa(e),t=!0),this.ca=e,t}onError(e){this.aa.error(e)}sa(e){this.onlineState=e;let t=!1;return this.ca&&!this.ua&&this.ha(this.ca,e)&&(this.Pa(this.ca),t=!0),t}ha(e,t){if(!e.fromCache||!this.ra())return!0;const r=t!=="Offline";return(!this.options.Ta||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}la(e){if(e.docChanges.length>0)return!0;const t=this.ca&&this.ca.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}Pa(e){e=Iu.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.ua=!0,this.aa.next(e)}ra(){return this.options.source!==bv.Cache}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l6{constructor(e,t){this.Ia=e,this.byteLength=t}Ea(){return"metadata"in this.Ia}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QA{constructor(e){this.serializer=e}ps(e){return li(this.serializer,e)}ys(e){return e.metadata.exists?L1(this.serializer,e.document,!1):ht.newNoDocument(this.ps(e.metadata.name),this.ws(e.metadata.readTime))}ws(e){return Mt(e)}}class u6{constructor(e,t,r){this.da=e,this.localStore=t,this.serializer=r,this.queries=[],this.documents=[],this.collectionGroups=new Set,this.progress=bD(e)}Aa(e){this.progress.bytesLoaded+=e.byteLength;let t=this.progress.documentsLoaded;if(e.Ia.namedQuery)this.queries.push(e.Ia.namedQuery);else if(e.Ia.documentMetadata){this.documents.push({metadata:e.Ia.documentMetadata}),e.Ia.documentMetadata.exists||++t;const r=ze.fromString(e.Ia.documentMetadata.name);this.collectionGroups.add(r.get(r.length-2))}else e.Ia.document&&(this.documents[this.documents.length-1].document=e.Ia.document,++t);return t!==this.progress.documentsLoaded?(this.progress.documentsLoaded=t,Object.assign({},this.progress)):null}Ra(e){const t=new Map,r=new QA(this.serializer);for(const a of e)if(a.metadata.queries){const o=r.ps(a.metadata.name);for(const u of a.metadata.queries){const d=(t.get(u)||Pe()).add(o);t.set(u,d)}}return t}async complete(){const e=await Vz(this.localStore,new QA(this.serializer),this.documents,this.da.id),t=this.Ra(this.documents);for(const r of this.queries)await Mz(this.localStore,r,t.get(r.name));return this.progress.taskState="Success",{progress:this.progress,Va:this.collectionGroups,ma:e}}}function bD(n){return{taskState:"Running",documentsLoaded:0,bytesLoaded:0,totalDocuments:n.totalDocuments,totalBytes:n.totalBytes}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ID{constructor(e){this.key=e}}class AD{constructor(e){this.key=e}}class SD{constructor(e,t){this.query=e,this.fa=t,this.ga=null,this.hasCachedResults=!1,this.current=!1,this.pa=Pe(),this.mutatedKeys=Pe(),this.ya=g1(e),this.wa=new Jl(this.ya)}get Sa(){return this.fa}ba(e,t){const r=t?t.Da:new GA,a=t?t.wa:this.wa;let o=t?t.mutatedKeys:this.mutatedKeys,u=a,d=!1;const m=this.query.limitType==="F"&&a.size===this.query.limit?a.last():null,p=this.query.limitType==="L"&&a.size===this.query.limit?a.first():null;if(e.inorderTraversal((y,v)=>{const w=a.get(y),S=yd(this.query,v)?v:null,P=!!w&&this.mutatedKeys.has(w.key),U=!!S&&(S.hasLocalMutations||this.mutatedKeys.has(S.key)&&S.hasCommittedMutations);let L=!1;w&&S?w.data.isEqual(S.data)?P!==U&&(r.track({type:3,doc:S}),L=!0):this.va(w,S)||(r.track({type:2,doc:S}),L=!0,(m&&this.ya(S,m)>0||p&&this.ya(S,p)<0)&&(d=!0)):!w&&S?(r.track({type:0,doc:S}),L=!0):w&&!S&&(r.track({type:1,doc:w}),L=!0,(m||p)&&(d=!0)),L&&(S?(u=u.add(S),o=U?o.add(y):o.delete(y)):(u=u.delete(y),o=o.delete(y)))}),this.query.limit!==null)for(;u.size>this.query.limit;){const y=this.query.limitType==="F"?u.last():u.first();u=u.delete(y.key),o=o.delete(y.key),r.track({type:1,doc:y})}return{wa:u,Da:r,ls:d,mutatedKeys:o}}va(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r,a){const o=this.wa;this.wa=e.wa,this.mutatedKeys=e.mutatedKeys;const u=e.Da.X_();u.sort((y,v)=>function(S,P){const U=L=>{switch(L){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return pe()}};return U(S)-U(P)}(y.type,v.type)||this.ya(y.doc,v.doc)),this.Ca(r),a=a!=null&&a;const d=t&&!a?this.Fa():[],m=this.pa.size===0&&this.current&&!a?1:0,p=m!==this.ga;return this.ga=m,u.length!==0||p?{snapshot:new Iu(this.query,e.wa,o,u,e.mutatedKeys,m===0,p,!1,!!r&&r.resumeToken.approximateByteSize()>0),Ma:d}:{Ma:d}}sa(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({wa:this.wa,Da:new GA,mutatedKeys:this.mutatedKeys,ls:!1},!1)):{Ma:[]}}xa(e){return!this.fa.has(e)&&!!this.wa.has(e)&&!this.wa.get(e).hasLocalMutations}Ca(e){e&&(e.addedDocuments.forEach(t=>this.fa=this.fa.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.fa=this.fa.delete(t)),this.current=e.current)}Fa(){if(!this.current)return[];const e=this.pa;this.pa=Pe(),this.wa.forEach(r=>{this.xa(r.key)&&(this.pa=this.pa.add(r.key))});const t=[];return e.forEach(r=>{this.pa.has(r)||t.push(new AD(r))}),this.pa.forEach(r=>{e.has(r)||t.push(new ID(r))}),t}Oa(e){this.fa=e.gs,this.pa=Pe();const t=this.ba(e.documents);return this.applyChanges(t,!0)}Na(){return Iu.fromInitialDocuments(this.query,this.wa,this.mutatedKeys,this.ga===0,this.hasCachedResults)}}const Ia="SyncEngine";class c6{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class h6{constructor(e){this.key=e,this.Ba=!1}}class d6{constructor(e,t,r,a,o,u){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=a,this.currentUser=o,this.maxConcurrentLimboResolutions=u,this.La={},this.ka=new rs(d=>m1(d),_d),this.qa=new Map,this.Qa=new Set,this.$a=new lt(ce.comparator),this.Ua=new Map,this.Ka=new BE,this.Wa={},this.Ga=new Map,this.za=No.Kn(),this.onlineState="Unknown",this.ja=void 0}get isPrimaryClient(){return this.ja===!0}}async function f6(n,e,t=!0){const r=qp(n);let a;const o=r.ka.get(e);return o?(r.sharedClientState.addLocalQueryTarget(o.targetId),a=o.view.Na()):a=await RD(r,e,t,!0),a}async function m6(n,e){const t=qp(n);await RD(t,e,!0,!1)}async function RD(n,e,t,r){const a=await Tu(n.localStore,Vn(e)),o=a.targetId,u=n.sharedClientState.addLocalQueryTarget(o,t);let d;return r&&(d=await tT(n,e,o,u==="current",a.resumeToken)),n.isPrimaryClient&&t&&jp(n.remoteStore,a),d}async function tT(n,e,t,r,a){n.Ha=(v,w,S)=>async function(U,L,H,Y){let $=L.view.ba(H);$.ls&&($=await rp(U.localStore,L.query,!1).then(({documents:D})=>L.view.ba(D,$)));const oe=Y&&Y.targetChanges.get(L.targetId),ae=Y&&Y.targetMismatches.get(L.targetId)!=null,le=L.view.applyChanges($,U.isPrimaryClient,oe,ae);return Iv(U,L.targetId,le.Ma),le.snapshot}(n,v,w,S);const o=await rp(n.localStore,e,!0),u=new SD(e,o.gs),d=u.ba(o.documents),m=Td.createSynthesizedTargetChangeForCurrentChange(t,r&&n.onlineState!=="Offline",a),p=u.applyChanges(d,n.isPrimaryClient,m);Iv(n,t,p.Ma);const y=new c6(e,t,u);return n.ka.set(e,y),n.qa.has(t)?n.qa.get(t).push(e):n.qa.set(t,[e]),p.snapshot}async function p6(n,e,t){const r=de(n),a=r.ka.get(e),o=r.qa.get(a.targetId);if(o.length>1)return r.qa.set(a.targetId,o.filter(u=>!_d(u,e))),void r.ka.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(a.targetId),r.sharedClientState.isActiveQueryTarget(a.targetId)||await wu(r.localStore,a.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(a.targetId),t&&bu(r.remoteStore,a.targetId),Au(r,a.targetId)}).catch(Ea)):(Au(r,a.targetId),await wu(r.localStore,a.targetId,!0))}async function g6(n,e){const t=de(n),r=t.ka.get(e),a=t.qa.get(r.targetId);t.isPrimaryClient&&a.length===1&&(t.sharedClientState.removeLocalQueryTarget(r.targetId),bu(t.remoteStore,r.targetId))}async function _6(n,e,t){const r=sT(n);try{const a=await function(u,d){const m=de(u),p=gt.now(),y=d.reduce((S,P)=>S.add(P.key),Pe());let v,w;return m.persistence.runTransaction("Locally write mutations","readwrite",S=>{let P=Hn(),U=Pe();return m.ds.getEntries(S,y).next(L=>{P=L,P.forEach((H,Y)=>{Y.isValidDocument()||(U=U.add(H))})}).next(()=>m.localDocuments.getOverlayedDocuments(S,P)).next(L=>{v=L;const H=[];for(const Y of d){const $=BB(Y,v.get(Y.key).overlayedDocument);$!=null&&H.push(new is(Y.key,$,s1($.value.mapValue),pt.exists(!0)))}return m.mutationQueue.addMutationBatch(S,p,H,d)}).next(L=>{w=L;const H=L.applyToLocalDocumentSet(v,U);return m.documentOverlayCache.saveOverlays(S,L.batchId,H)})}).then(()=>({batchId:w.batchId,changes:y1(v)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(a.batchId),function(u,d,m){let p=u.Wa[u.currentUser.toKey()];p||(p=new lt(Se)),p=p.insert(d,m),u.Wa[u.currentUser.toKey()]=p}(r,a.batchId,t),await ss(r,a.changes),await Fu(r.remoteStore)}catch(a){const o=qu(a,"Failed to persist write");t.reject(o)}}async function CD(n,e){const t=de(n);try{const r=await Oz(t.localStore,e);e.targetChanges.forEach((a,o)=>{const u=t.Ua.get(o);u&&(ye(a.addedDocuments.size+a.modifiedDocuments.size+a.removedDocuments.size<=1),a.addedDocuments.size>0?u.Ba=!0:a.modifiedDocuments.size>0?ye(u.Ba):a.removedDocuments.size>0&&(ye(u.Ba),u.Ba=!1))}),await ss(t,r,e)}catch(r){await Ea(r)}}function WA(n,e,t){const r=de(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const a=[];r.ka.forEach((o,u)=>{const d=u.view.sa(e);d.snapshot&&a.push(d.snapshot)}),function(u,d){const m=de(u);m.onlineState=d;let p=!1;m.queries.forEach((y,v)=>{for(const w of v.ta)w.sa(d)&&(p=!0)}),p&&JE(m)}(r.eventManager,e),a.length&&r.La.p_(a),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function y6(n,e,t){const r=de(n);r.sharedClientState.updateQueryState(e,"rejected",t);const a=r.Ua.get(e),o=a&&a.key;if(o){let u=new lt(ce.comparator);u=u.insert(o,ht.newNoDocument(o,Ee.min()));const d=Pe().add(o),m=new Ed(Ee.min(),new Map,new lt(Se),u,d);await CD(r,m),r.$a=r.$a.remove(o),r.Ua.delete(e),iT(r)}else await wu(r.localStore,e,!1).then(()=>Au(r,e,t)).catch(Ea)}async function v6(n,e){const t=de(n),r=e.batch.batchId;try{const a=await Nz(t.localStore,e);rT(t,r,null),nT(t,r),t.sharedClientState.updateMutationState(r,"acknowledged"),await ss(t,a)}catch(a){await Ea(a)}}async function E6(n,e,t){const r=de(n);try{const a=await function(u,d){const m=de(u);return m.persistence.runTransaction("Reject batch","readwrite-primary",p=>{let y;return m.mutationQueue.lookupMutationBatch(p,d).next(v=>(ye(v!==null),y=v.keys(),m.mutationQueue.removeMutationBatch(p,v))).next(()=>m.mutationQueue.performConsistencyCheck(p)).next(()=>m.documentOverlayCache.removeOverlaysForBatchId(p,y,d)).next(()=>m.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(p,y)).next(()=>m.localDocuments.getDocuments(p,y))})}(r.localStore,e);rT(r,e,t),nT(r,e),r.sharedClientState.updateMutationState(e,"rejected",t),await ss(r,a)}catch(a){await Ea(a)}}async function T6(n,e){const t=de(n);ba(t.remoteStore)||re(Ia,"The network is disabled. The task returned by 'awaitPendingWrites()' will not complete until the network is enabled.");try{const r=await function(u){const d=de(u);return d.persistence.runTransaction("Get highest unacknowledged batch id","readonly",m=>d.mutationQueue.getHighestUnacknowledgedBatchId(m))}(t.localStore);if(r===ra)return void e.resolve();const a=t.Ga.get(r)||[];a.push(e),t.Ga.set(r,a)}catch(r){const a=qu(r,"Initialization of waitForPendingWrites() operation failed");e.reject(a)}}function nT(n,e){(n.Ga.get(e)||[]).forEach(t=>{t.resolve()}),n.Ga.delete(e)}function rT(n,e,t){const r=de(n);let a=r.Wa[r.currentUser.toKey()];if(a){const o=a.get(e);o&&(t?o.reject(t):o.resolve(),a=a.remove(e)),r.Wa[r.currentUser.toKey()]=a}}function Au(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const r of n.qa.get(e))n.ka.delete(r),t&&n.La.Ja(r,t);n.qa.delete(e),n.isPrimaryClient&&n.Ka.br(e).forEach(r=>{n.Ka.containsKey(r)||DD(n,r)})}function DD(n,e){n.Qa.delete(e.path.canonicalString());const t=n.$a.get(e);t!==null&&(bu(n.remoteStore,t),n.$a=n.$a.remove(e),n.Ua.delete(t),iT(n))}function Iv(n,e,t){for(const r of t)r instanceof ID?(n.Ka.addReference(r.key,e),w6(n,r)):r instanceof AD?(re(Ia,"Document no longer in limbo: "+r.key),n.Ka.removeReference(r.key,e),n.Ka.containsKey(r.key)||DD(n,r.key)):pe()}function w6(n,e){const t=e.key,r=t.path.canonicalString();n.$a.get(t)||n.Qa.has(r)||(re(Ia,"New document in limbo: "+t),n.Qa.add(r),iT(n))}function iT(n){for(;n.Qa.size>0&&n.$a.size<n.maxConcurrentLimboResolutions;){const e=n.Qa.values().next().value;n.Qa.delete(e);const t=new ce(ze.fromString(e)),r=n.za.next();n.Ua.set(r,new h6(t)),n.$a=n.$a.insert(t,r),jp(n.remoteStore,new Gi(Vn(Lu(t.path)),r,"TargetPurposeLimboResolution",jn.ae))}}async function ss(n,e,t){const r=de(n),a=[],o=[],u=[];r.ka.isEmpty()||(r.ka.forEach((d,m)=>{u.push(r.Ha(m,e,t).then(p=>{var y;if((p||t)&&r.isPrimaryClient){const v=p?!p.fromCache:(y=t==null?void 0:t.targetChanges.get(m.targetId))===null||y===void 0?void 0:y.current;r.sharedClientState.updateQueryState(m.targetId,v?"current":"not-current")}if(p){a.push(p);const v=qE.Yi(m.targetId,p);o.push(v)}}))}),await Promise.all(u),r.La.p_(a),await async function(m,p){const y=de(m);try{await y.persistence.runTransaction("notifyLocalViewChanges","readwrite",v=>j.forEach(p,w=>j.forEach(w.Hi,S=>y.persistence.referenceDelegate.addReference(v,w.targetId,S)).next(()=>j.forEach(w.Ji,S=>y.persistence.referenceDelegate.removeReference(v,w.targetId,S)))))}catch(v){if(!Ta(v))throw v;re(HE,"Failed to update sequence numbers: "+v)}for(const v of p){const w=v.targetId;if(!v.fromCache){const S=y.Ts.get(w),P=S.snapshotVersion,U=S.withLastLimboFreeSnapshotVersion(P);y.Ts=y.Ts.insert(w,U)}}}(r.localStore,o))}async function b6(n,e){const t=de(n);if(!t.currentUser.isEqual(e)){re(Ia,"User change. New user:",e.toKey());const r=await aD(t.localStore,e);t.currentUser=e,function(o,u){o.Ga.forEach(d=>{d.forEach(m=>{m.reject(new te(K.CANCELLED,u))})}),o.Ga.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await ss(t,r.Rs)}}function I6(n,e){const t=de(n),r=t.Ua.get(e);if(r&&r.Ba)return Pe().add(r.key);{let a=Pe();const o=t.qa.get(e);if(!o)return a;for(const u of o){const d=t.ka.get(u);a=a.unionWith(d.view.Sa)}return a}}async function A6(n,e){const t=de(n),r=await rp(t.localStore,e.query,!0),a=e.view.Oa(r);return t.isPrimaryClient&&Iv(t,e.targetId,a.Ma),a}async function S6(n,e){const t=de(n);return cD(t.localStore,e).then(r=>ss(t,r))}async function R6(n,e,t,r){const a=de(n),o=await function(d,m){const p=de(d),y=de(p.mutationQueue);return p.persistence.runTransaction("Lookup mutation documents","readonly",v=>y.Ln(v,m).next(w=>w?p.localDocuments.getDocuments(v,w):j.resolve(null)))}(a.localStore,e);o!==null?(t==="pending"?await Fu(a.remoteStore):t==="acknowledged"||t==="rejected"?(rT(a,e,r||null),nT(a,e),function(d,m){de(de(d).mutationQueue).qn(m)}(a.localStore,e)):pe(),await ss(a,o)):re(Ia,"Cannot apply mutation batch with id: "+e)}async function C6(n,e){const t=de(n);if(qp(t),sT(t),e===!0&&t.ja!==!0){const r=t.sharedClientState.getAllActiveQueryTargets(),a=await YA(t,r.toArray());t.ja=!0,await wv(t.remoteStore,!0);for(const o of a)jp(t.remoteStore,o)}else if(e===!1&&t.ja!==!1){const r=[];let a=Promise.resolve();t.qa.forEach((o,u)=>{t.sharedClientState.isLocalQueryTarget(u)?r.push(u):a=a.then(()=>(Au(t,u),wu(t.localStore,u,!0))),bu(t.remoteStore,u)}),await a,await YA(t,r),function(u){const d=de(u);d.Ua.forEach((m,p)=>{bu(d.remoteStore,p)}),d.Ka.Dr(),d.Ua=new Map,d.$a=new lt(ce.comparator)}(t),t.ja=!1,await wv(t.remoteStore,!1)}}async function YA(n,e,t){const r=de(n),a=[],o=[];for(const u of e){let d;const m=r.qa.get(u);if(m&&m.length!==0){d=await Tu(r.localStore,Vn(m[0]));for(const p of m){const y=r.ka.get(p),v=await A6(r,y);v.snapshot&&o.push(v.snapshot)}}else{const p=await uD(r.localStore,u);d=await Tu(r.localStore,p),await tT(r,PD(p),u,!1,d.resumeToken)}a.push(d)}return r.La.p_(o),a}function PD(n){return f1(n.path,n.collectionGroup,n.orderBy,n.filters,n.limit,"F",n.startAt,n.endAt)}function D6(n){return function(t){return de(de(t).persistence).zi()}(de(n).localStore)}async function P6(n,e,t,r){const a=de(n);if(a.ja)return void re(Ia,"Ignoring unexpected query state notification.");const o=a.qa.get(e);if(o&&o.length>0)switch(t){case"current":case"not-current":{const u=await cD(a.localStore,p1(o[0])),d=Ed.createSynthesizedRemoteEventForCurrentChange(e,t==="current",Dt.EMPTY_BYTE_STRING);await ss(a,u,d);break}case"rejected":await wu(a.localStore,e,!0),Au(a,e,r);break;default:pe()}}async function x6(n,e,t){const r=qp(n);if(r.ja){for(const a of e){if(r.qa.has(a)&&r.sharedClientState.isActiveQueryTarget(a)){re(Ia,"Adding an already active target "+a);continue}const o=await uD(r.localStore,a),u=await Tu(r.localStore,o);await tT(r,PD(o),u.targetId,!1,u.resumeToken),jp(r.remoteStore,u)}for(const a of t)r.qa.has(a)&&await wu(r.localStore,a,!1).then(()=>{bu(r.remoteStore,a),Au(r,a)}).catch(Ea)}}function qp(n){const e=de(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=CD.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=I6.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=y6.bind(null,e),e.La.p_=a6.bind(null,e.eventManager),e.La.Ja=o6.bind(null,e.eventManager),e}function sT(n){const e=de(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=v6.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=E6.bind(null,e),e}function N6(n,e,t){const r=de(n);(async function(o,u,d){try{const m=await u.getMetadata();if(await function(S,P){const U=de(S),L=Mt(P.createTime);return U.persistence.runTransaction("hasNewerBundle","readonly",H=>U.Yr.getBundleMetadata(H,P.id)).then(H=>!!H&&H.createTime.compareTo(L)>=0)}(o.localStore,m))return await u.close(),d._completeWith(function(S){return{taskState:"Success",documentsLoaded:S.totalDocuments,bytesLoaded:S.totalBytes,totalDocuments:S.totalDocuments,totalBytes:S.totalBytes}}(m)),Promise.resolve(new Set);d._updateProgress(bD(m));const p=new u6(m,o.localStore,u.serializer);let y=await u.Ya();for(;y;){const w=await p.Aa(y);w&&d._updateProgress(w),y=await u.Ya()}const v=await p.complete();return await ss(o,v.ma,void 0),await function(S,P){const U=de(S);return U.persistence.runTransaction("Save bundle","readwrite",L=>U.Yr.saveBundleMetadata(L,P))}(o.localStore,m),d._completeWith(v.progress),Promise.resolve(v.Va)}catch(m){return di(Ia,`Loading bundle failed with ${m}`),d._failWith(m),Promise.resolve(new Set)}})(r,e,t).then(a=>{r.sharedClientState.notifyBundleLoaded(a)})}class Xh{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=wd(e.databaseInfo.databaseId),this.sharedClientState=this.Za(e),this.persistence=this.Xa(e),await this.persistence.start(),this.localStore=this.eu(e),this.gcScheduler=this.tu(e,this.localStore),this.indexBackfillerScheduler=this.nu(e,this.localStore)}tu(e,t){return null}nu(e,t){return null}eu(e){return sD(this.persistence,new iD,e.initialUser,this.serializer)}Xa(e){return new zE(Fp.ri,this.serializer)}Za(e){return new pD}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Xh.provider={build:()=>new Xh};class O6 extends Xh{constructor(e){super(),this.cacheSizeBytes=e}tu(e,t){ye(this.persistence.referenceDelegate instanceof np);const r=this.persistence.referenceDelegate.garbageCollector;return new Z1(r,e.asyncQueue,t)}Xa(e){const t=this.cacheSizeBytes!==void 0?In.withCacheSize(this.cacheSizeBytes):In.DEFAULT;return new zE(r=>np.ri(r,t),this.serializer)}}class xD extends Xh{constructor(e,t,r){super(),this.ru=e,this.cacheSizeBytes=t,this.forceOwnership=r,this.kind="persistent",this.synchronizeTabs=!1}async initialize(e){await super.initialize(e),await this.ru.initialize(this,e),await sT(this.ru.syncEngine),await Fu(this.ru.remoteStore),await this.persistence.Ci(()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(),this.indexBackfillerScheduler&&!this.indexBackfillerScheduler.started&&this.indexBackfillerScheduler.start(),Promise.resolve()))}eu(e){return sD(this.persistence,new iD,e.initialUser,this.serializer)}tu(e,t){const r=this.persistence.referenceDelegate.garbageCollector;return new Z1(r,e.asyncQueue,t)}nu(e,t){const r=new j4(t,this.persistence);return new F4(e.asyncQueue,r)}Xa(e){const t=jE(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey),r=this.cacheSizeBytes!==void 0?In.withCacheSize(this.cacheSizeBytes):In.DEFAULT;return new FE(this.synchronizeTabs,t,e.clientId,r,e.asyncQueue,gD(),Dm(),this.serializer,this.sharedClientState,!!this.forceOwnership)}Za(e){return new pD}}class k6 extends xD{constructor(e,t){super(e,t,!1),this.ru=e,this.cacheSizeBytes=t,this.synchronizeTabs=!0}async initialize(e){await super.initialize(e);const t=this.ru.syncEngine;this.sharedClientState instanceof Dy&&(this.sharedClientState.syncEngine={uo:R6.bind(null,t),co:P6.bind(null,t),lo:x6.bind(null,t),zi:D6.bind(null,t),ao:S6.bind(null,t)},await this.sharedClientState.start()),await this.persistence.Ci(async r=>{await C6(this.ru.syncEngine,r),this.gcScheduler&&(r&&!this.gcScheduler.started?this.gcScheduler.start():r||this.gcScheduler.stop()),this.indexBackfillerScheduler&&(r&&!this.indexBackfillerScheduler.started?this.indexBackfillerScheduler.start():r||this.indexBackfillerScheduler.stop())})}Za(e){const t=gD();if(!Dy.D(t))throw new te(K.UNIMPLEMENTED,"IndexedDB persistence is only available on platforms that support LocalStorage.");const r=jE(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey);return new Dy(t,e.asyncQueue,r,e.clientId,e.initialUser)}}class Zh{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>WA(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=b6.bind(null,this.syncEngine),await wv(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new s6}()}createDatastore(e){const t=wd(e.databaseInfo.databaseId),r=function(o){return new Fz(o)}(e.databaseInfo);return function(o,u,d,m){return new Gz(o,u,d,m)}(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return function(r,a,o,u,d){return new Kz(r,a,o,u,d)}(this.localStore,this.datastore,e.asyncQueue,t=>WA(this.syncEngine,t,0),function(){return jA.D()?new jA:new Lz}())}createSyncEngine(e,t){return function(a,o,u,d,m,p,y){const v=new d6(a,o,u,d,m,p);return y&&(v.ja=!0),v}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(a){const o=de(a);re(Oo,"RemoteStore shutting down."),o.W_.add(5),await zu(o),o.z_.shutdown(),o.j_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}Zh.provider={build:()=>new Zh};function XA(n,e=10240){let t=0;return{async read(){if(t<n.byteLength){const r={value:n.slice(t,t+e),done:!1};return t+=e,r}return{done:!0}},async cancel(){},releaseLock(){},closed:Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hp{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.iu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.iu(this.observer.error,e):Vt("Uncaught Error in snapshot listener:",e.toString()))}su(){this.muted=!0}iu(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V6{constructor(e,t){this.ou=e,this.serializer=t,this.metadata=new yn,this.buffer=new Uint8Array,this._u=function(){return new TextDecoder("utf-8")}(),this.au().then(r=>{r&&r.Ea()?this.metadata.resolve(r.Ia.metadata):this.metadata.reject(new Error(`The first element of the bundle is not a metadata, it is
             ${JSON.stringify(r==null?void 0:r.Ia)}`))},r=>this.metadata.reject(r))}close(){return this.ou.cancel()}async getMetadata(){return this.metadata.promise}async Ya(){return await this.getMetadata(),this.au()}async au(){const e=await this.uu();if(e===null)return null;const t=this._u.decode(e),r=Number(t);isNaN(r)&&this.cu(`length string (${t}) is not valid number`);const a=await this.lu(r);return new l6(JSON.parse(a),e.length+r)}hu(){return this.buffer.findIndex(e=>e===123)}async uu(){for(;this.hu()<0&&!await this.Pu(););if(this.buffer.length===0)return null;const e=this.hu();e<0&&this.cu("Reached the end of bundle when a length string is expected.");const t=this.buffer.slice(0,e);return this.buffer=this.buffer.slice(e),t}async lu(e){for(;this.buffer.length<e;)await this.Pu()&&this.cu("Reached the end of bundle when more is expected.");const t=this._u.decode(this.buffer.slice(0,e));return this.buffer=this.buffer.slice(e),t}cu(e){throw this.ou.cancel(),new Error(`Invalid bundle format: ${e}`)}async Pu(){const e=await this.ou.read();if(!e.done){const t=new Uint8Array(this.buffer.length+e.value.length);t.set(this.buffer),t.set(e.value,this.buffer.length),this.buffer=t}return e.done}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M6{constructor(e){this.datastore=e,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastTransactionError=null,this.writtenDocs=new Set}async lookup(e){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw this.lastTransactionError=new te(K.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes."),this.lastTransactionError;const t=await async function(a,o){const u=de(a),d={documents:o.map(v=>Wh(u.serializer,v))},m=await u.Co("BatchGetDocuments",u.serializer.databaseId,ze.emptyPath(),d,o.length),p=new Map;m.forEach(v=>{const w=QB(u.serializer,v);p.set(w.key.toString(),w)});const y=[];return o.forEach(v=>{const w=p.get(v.toString());ye(!!w),y.push(w)}),y}(this.datastore,e);return t.forEach(r=>this.recordVersion(r)),t}set(e,t){this.write(t.toMutation(e,this.precondition(e))),this.writtenDocs.add(e.toString())}update(e,t){try{this.write(t.toMutation(e,this.preconditionForUpdate(e)))}catch(r){this.lastTransactionError=r}this.writtenDocs.add(e.toString())}delete(e){this.write(new Bu(e,this.precondition(e))),this.writtenDocs.add(e.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastTransactionError)throw this.lastTransactionError;const e=this.readVersions;this.mutations.forEach(t=>{e.delete(t.key.toString())}),e.forEach((t,r)=>{const a=ce.fromPath(r);this.mutations.push(new PE(a,this.precondition(a)))}),await async function(r,a){const o=de(r),u={writes:a.map(d=>Yh(o.serializer,d))};await o.So("Commit",o.serializer.databaseId,ze.emptyPath(),u)}(this.datastore,this.mutations),this.committed=!0}recordVersion(e){let t;if(e.isFoundDocument())t=e.version;else{if(!e.isNoDocument())throw pe();t=Ee.min()}const r=this.readVersions.get(e.key.toString());if(r){if(!t.isEqual(r))throw new te(K.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(e.key.toString(),t)}precondition(e){const t=this.readVersions.get(e.toString());return!this.writtenDocs.has(e.toString())&&t?t.isEqual(Ee.min())?pt.exists(!1):pt.updateTime(t):pt.none()}preconditionForUpdate(e){const t=this.readVersions.get(e.toString());if(!this.writtenDocs.has(e.toString())&&t){if(t.isEqual(Ee.min()))throw new te(K.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return pt.updateTime(t)}return pt.exists(!0)}write(e){this.ensureCommitNotCalled(),this.mutations.push(e)}ensureCommitNotCalled(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L6{constructor(e,t,r,a,o){this.asyncQueue=e,this.datastore=t,this.options=r,this.updateFunction=a,this.deferred=o,this.Tu=r.maxAttempts,this.a_=new $E(this.asyncQueue,"transaction_retry")}Iu(){this.Tu-=1,this.Eu()}Eu(){this.a_.Xo(async()=>{const e=new M6(this.datastore),t=this.du(e);t&&t.then(r=>{this.asyncQueue.enqueueAndForget(()=>e.commit().then(()=>{this.deferred.resolve(r)}).catch(a=>{this.Au(a)}))}).catch(r=>{this.Au(r)})})}du(e){try{const t=this.updateFunction(e);return!md(t)&&t.catch&&t.then?t:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(t){return this.deferred.reject(t),null}}Au(e){this.Tu>0&&this.Ru(e)?(this.Tu-=1,this.asyncQueue.enqueueAndForget(()=>(this.Eu(),Promise.resolve()))):this.deferred.reject(e)}Ru(e){if(e.name==="FirebaseError"){const t=e.code;return t==="aborted"||t==="failed-precondition"||t==="already-exists"||!C1(t)}return!1}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pa="FirestoreClient";class U6{constructor(e,t,r,a,o){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this.databaseInfo=a,this.user=cn.UNAUTHENTICATED,this.clientId=OC.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=o,this.authCredentials.start(r,async u=>{re(pa,"Received user=",u.uid),await this.authCredentialListener(u),this.user=u}),this.appCheckCredentials.start(r,u=>(re(pa,"Received new app check token=",u),this.appCheckCredentialListener(u,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new yn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=qu(t,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function xy(n,e){n.asyncQueue.verifyOperationInProgress(),re(pa,"Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener(async a=>{r.isEqual(a)||(await aD(e.localStore,a),r=a)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=e}async function ZA(n,e){n.asyncQueue.verifyOperationInProgress();const t=await aT(n);re(pa,"Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener(r=>HA(e.remoteStore,r)),n.setAppCheckTokenChangeListener((r,a)=>HA(e.remoteStore,a)),n._onlineComponents=e}async function aT(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){re(pa,"Using user provided OfflineComponentProvider");try{await xy(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(a){return a.name==="FirebaseError"?a.code===K.FAILED_PRECONDITION||a.code===K.UNIMPLEMENTED:!(typeof DOMException<"u"&&a instanceof DOMException)||a.code===22||a.code===20||a.code===11}(t))throw t;di("Error using user provided cache. Falling back to memory cache: "+t),await xy(n,new Xh)}}else re(pa,"Using default OfflineComponentProvider"),await xy(n,new O6(void 0));return n._offlineComponents}async function Gp(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(re(pa,"Using user provided OnlineComponentProvider"),await ZA(n,n._uninitializedComponentsProvider._online)):(re(pa,"Using default OnlineComponentProvider"),await ZA(n,new Zh))),n._onlineComponents}function ND(n){return aT(n).then(e=>e.persistence)}function oT(n){return aT(n).then(e=>e.localStore)}function OD(n){return Gp(n).then(e=>e.remoteStore)}function lT(n){return Gp(n).then(e=>e.syncEngine)}function B6(n){return Gp(n).then(e=>e.datastore)}async function Su(n){const e=await Gp(n),t=e.eventManager;return t.onListen=f6.bind(null,e.syncEngine),t.onUnlisten=p6.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=m6.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=g6.bind(null,e.syncEngine),t}function z6(n){return n.asyncQueue.enqueue(async()=>{const e=await ND(n),t=await OD(n);return e.setNetworkEnabled(!0),function(a){const o=de(a);return o.W_.delete(0),bd(o)}(t)})}function F6(n){return n.asyncQueue.enqueue(async()=>{const e=await ND(n),t=await OD(n);return e.setNetworkEnabled(!1),async function(a){const o=de(a);o.W_.add(0),await zu(o),o.j_.set("Offline")}(t)})}function j6(n,e){const t=new yn;return n.asyncQueue.enqueueAndForget(async()=>async function(a,o,u){try{const d=await function(p,y){const v=de(p);return v.persistence.runTransaction("read document","readonly",w=>v.localDocuments.getDocument(w,y))}(a,o);d.isFoundDocument()?u.resolve(d):d.isNoDocument()?u.resolve(null):u.reject(new te(K.UNAVAILABLE,"Failed to get document from cache. (However, this document may exist on the server. Run again without setting 'source' in the GetOptions to attempt to retrieve the document from the server.)"))}catch(d){const m=qu(d,`Failed to get document '${o} from cache`);u.reject(m)}}(await oT(n),e,t)),t.promise}function kD(n,e,t={}){const r=new yn;return n.asyncQueue.enqueueAndForget(async()=>function(o,u,d,m,p){const y=new Hp({next:w=>{y.su(),u.enqueueAndForget(()=>ZE(o,v));const S=w.docs.has(d);!S&&w.fromCache?p.reject(new te(K.UNAVAILABLE,"Failed to get document because the client is offline.")):S&&w.fromCache&&m&&m.source==="server"?p.reject(new te(K.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):p.resolve(w)},error:w=>p.reject(w)}),v=new eT(Lu(d.path),y,{includeMetadataChanges:!0,Ta:!0});return XE(o,v)}(await Su(n),n.asyncQueue,e,t,r)),r.promise}function q6(n,e){const t=new yn;return n.asyncQueue.enqueueAndForget(async()=>async function(a,o,u){try{const d=await rp(a,o,!0),m=new SD(o,d.gs),p=m.ba(d.documents),y=m.applyChanges(p,!1);u.resolve(y.snapshot)}catch(d){const m=qu(d,`Failed to execute query '${o} against cache`);u.reject(m)}}(await oT(n),e,t)),t.promise}function VD(n,e,t={}){const r=new yn;return n.asyncQueue.enqueueAndForget(async()=>function(o,u,d,m,p){const y=new Hp({next:w=>{y.su(),u.enqueueAndForget(()=>ZE(o,v)),w.fromCache&&m.source==="server"?p.reject(new te(K.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):p.resolve(w)},error:w=>p.reject(w)}),v=new eT(d,y,{includeMetadataChanges:!0,Ta:!0});return XE(o,v)}(await Su(n),n.asyncQueue,e,t,r)),r.promise}function H6(n,e){const t=new Hp(e);return n.asyncQueue.enqueueAndForget(async()=>function(a,o){de(a).ia.add(o),o.next()}(await Su(n),t)),()=>{t.su(),n.asyncQueue.enqueueAndForget(async()=>function(a,o){de(a).ia.delete(o)}(await Su(n),t))}}function G6(n,e,t,r){const a=function(u,d){let m;return m=typeof u=="string"?_E().encode(u):u,function(y,v){return new V6(y,v)}(function(y,v){if(y instanceof Uint8Array)return XA(y,v);if(y instanceof ArrayBuffer)return XA(new Uint8Array(y),v);if(y instanceof ReadableStream)return y.getReader();throw new Error("Source of `toByteStreamReader` has to be a ArrayBuffer or ReadableStream")}(m),d)}(t,wd(e));n.asyncQueue.enqueueAndForget(async()=>{N6(await lT(n),a,r)})}function $6(n,e){return n.asyncQueue.enqueue(async()=>function(r,a){const o=de(r);return o.persistence.runTransaction("Get named query","readonly",u=>o.Yr.getNamedQuery(u,a))}(await oT(n),e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function MD(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JA=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uT(n,e,t){if(!t)throw new te(K.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function LD(n,e,t,r){if(e===!0&&r===!0)throw new te(K.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function eS(n){if(!ce.isDocumentKey(n))throw new te(K.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function tS(n){if(ce.isDocumentKey(n))throw new te(K.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function $p(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":pe()}function Xe(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new te(K.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=$p(n);throw new te(K.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}function UD(n,e){if(e<=0)throw new te(K.INVALID_ARGUMENT,`Function ${n}() requires a positive number, but it was: ${e}.`)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BD="firestore.googleapis.com",nS=!0;class rS{constructor(e){var t,r;if(e.host===void 0){if(e.ssl!==void 0)throw new te(K.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=BD,this.ssl=nS}else this.host=e.host,this.ssl=(t=e.ssl)!==null&&t!==void 0?t:nS;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=Q1;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<fz)throw new te(K.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}LD("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=MD((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(o){if(o.timeoutSeconds!==void 0){if(isNaN(o.timeoutSeconds))throw new te(K.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (must not be NaN)`);if(o.timeoutSeconds<5)throw new te(K.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (minimum allowed value is 5)`);if(o.timeoutSeconds>30)throw new te(K.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,a){return r.timeoutSeconds===a.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Id{constructor(e,t,r,a){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=a,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new rS({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new te(K.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new te(K.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new rS(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new P4;switch(r.type){case"firstParty":return new k4(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new te(K.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const r=JA.get(t);r&&(re("ComponentProvider","Removing Datastore"),JA.delete(t),r.terminate())}(this),Promise.resolve()}}function K6(n,e,t,r={}){var a;const o=(n=Xe(n,Id))._getSettings(),u=Object.assign(Object.assign({},o),{emulatorOptions:n._getEmulatorOptions()}),d=`${e}:${t}`;o.host!==BD&&o.host!==d&&di("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const m=Object.assign(Object.assign({},o),{host:d,ssl:!1,emulatorOptions:r});if(!sa(m,u)&&(n._setSettings(m),r.mockUserToken)){let p,y;if(typeof r.mockUserToken=="string")p=r.mockUserToken,y=cn.MOCK_USER;else{p=Wk(r.mockUserToken,(a=n._app)===null||a===void 0?void 0:a.options.projectId);const v=r.mockUserToken.sub||r.mockUserToken.user_id;if(!v)throw new te(K.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");y=new cn(v)}n._authCredentials=new x4(new NC(p,y))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Mn=class zD{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new zD(this.firestore,e,this._query)}},Tt=class FD{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new ia(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new FD(this.firestore,e,this._key)}},ia=class jD extends Mn{constructor(e,t,r){super(e,t,Lu(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Tt(this.firestore,null,new ce(e))}withConverter(e){return new jD(this.firestore,e,this._path)}};function qD(n,e,...t){if(n=Ie(n),uT("collection","path",e),n instanceof Id){const r=ze.fromString(e,...t);return tS(r),new ia(n,null,r)}{if(!(n instanceof Tt||n instanceof ia))throw new te(K.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(ze.fromString(e,...t));return tS(r),new ia(n.firestore,null,r)}}function Q6(n,e){if(n=Xe(n,Id),uT("collectionGroup","collection id",e),e.indexOf("/")>=0)throw new te(K.INVALID_ARGUMENT,`Invalid collection ID '${e}' passed to function collectionGroup(). Collection IDs must not contain '/'.`);return new Mn(n,null,function(r){return new ns(ze.emptyPath(),r)}(e))}function op(n,e,...t){if(n=Ie(n),arguments.length===1&&(e=OC.newId()),uT("doc","path",e),n instanceof Id){const r=ze.fromString(e,...t);return eS(r),new Tt(n,null,new ce(r))}{if(!(n instanceof Tt||n instanceof ia))throw new te(K.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(ze.fromString(e,...t));return eS(r),new Tt(n.firestore,n instanceof ia?n.converter:null,new ce(r))}}function HD(n,e){return n=Ie(n),e=Ie(e),(n instanceof Tt||n instanceof ia)&&(e instanceof Tt||e instanceof ia)&&n.firestore===e.firestore&&n.path===e.path&&n.converter===e.converter}function GD(n,e){return n=Ie(n),e=Ie(e),n instanceof Mn&&e instanceof Mn&&n.firestore===e.firestore&&_d(n._query,e._query)&&n.converter===e.converter}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iS="AsyncQueue";class sS{constructor(e=Promise.resolve()){this.Vu=[],this.mu=!1,this.fu=[],this.gu=null,this.pu=!1,this.yu=!1,this.wu=[],this.a_=new $E(this,"async_queue_retry"),this.Su=()=>{const r=Dm();r&&re(iS,"Visibility state changed to "+r.visibilityState),this.a_.t_()},this.bu=e;const t=Dm();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.Su)}get isShuttingDown(){return this.mu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Du(),this.vu(e)}enterRestrictedMode(e){if(!this.mu){this.mu=!0,this.yu=e||!1;const t=Dm();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.Su)}}enqueue(e){if(this.Du(),this.mu)return new Promise(()=>{});const t=new yn;return this.vu(()=>this.mu&&this.yu?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Vu.push(e),this.Cu()))}async Cu(){if(this.Vu.length!==0){try{await this.Vu[0](),this.Vu.shift(),this.a_.reset()}catch(e){if(!Ta(e))throw e;re(iS,"Operation failed with retryable error: "+e)}this.Vu.length>0&&this.a_.Xo(()=>this.Cu())}}vu(e){const t=this.bu.then(()=>(this.pu=!0,e().catch(r=>{this.gu=r,this.pu=!1;const a=function(u){let d=u.message||"";return u.stack&&(d=u.stack.includes(u.message)?u.stack:u.message+`
`+u.stack),d}(r);throw Vt("INTERNAL UNHANDLED ERROR: ",a),r}).then(r=>(this.pu=!1,r))));return this.bu=t,t}enqueueAfterDelay(e,t,r){this.Du(),this.wu.indexOf(e)>-1&&(t=0);const a=YE.createAndSchedule(this,e,t,r,o=>this.Fu(o));return this.fu.push(a),a}Du(){this.gu&&pe()}verifyOperationInProgress(){}async Mu(){let e;do e=this.bu,await e;while(e!==this.bu)}xu(e){for(const t of this.fu)if(t.timerId===e)return!0;return!1}Ou(e){return this.Mu().then(()=>{this.fu.sort((t,r)=>t.targetTimeMs-r.targetTimeMs);for(const t of this.fu)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Mu()})}Nu(e){this.wu.push(e)}Fu(e){const t=this.fu.indexOf(e);this.fu.splice(t,1)}}function Av(n){return function(t,r){if(typeof t!="object"||t===null)return!1;const a=t;for(const o of r)if(o in a&&typeof a[o]=="function")return!0;return!1}(n,["next","error","complete"])}class W6{constructor(){this._progressObserver={},this._taskCompletionResolver=new yn,this._lastProgress={taskState:"Running",totalBytes:0,totalDocuments:0,bytesLoaded:0,documentsLoaded:0}}onProgress(e,t,r){this._progressObserver={next:e,error:t,complete:r}}catch(e){return this._taskCompletionResolver.promise.catch(e)}then(e,t){return this._taskCompletionResolver.promise.then(e,t)}_completeWith(e){this._updateProgress(e),this._progressObserver.complete&&this._progressObserver.complete(),this._taskCompletionResolver.resolve(e)}_failWith(e){this._lastProgress.taskState="Error",this._progressObserver.next&&this._progressObserver.next(this._lastProgress),this._progressObserver.error&&this._progressObserver.error(e),this._taskCompletionResolver.reject(e)}_updateProgress(e){this._lastProgress=e,this._progressObserver.next&&this._progressObserver.next(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Y6=-1;let Lt=class extends Id{constructor(e,t,r,a){super(e,t,r,a),this.type="firestore",this._queue=new sS,this._persistenceKey=(a==null?void 0:a.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new sS(e),this._firestoreClient=void 0,await e}}};function Sn(n){if(n._terminated)throw new te(K.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||$D(n),n._firestoreClient}function $D(n){var e,t,r;const a=n._freezeSettings(),o=function(d,m,p,y){return new _B(d,m,p,y.host,y.ssl,y.experimentalForceLongPolling,y.experimentalAutoDetectLongPolling,MD(y.experimentalLongPollingOptions),y.useFetchStreams)}(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,a);n._componentsProvider||!((t=a.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((r=a.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._componentsProvider={_offline:a.localCache._offlineComponentProvider,_online:a.localCache._onlineComponentProvider}),n._firestoreClient=new U6(n._authCredentials,n._appCheckCredentials,n._queue,o,n._componentsProvider&&function(d){const m=d==null?void 0:d._online.build();return{_offline:d==null?void 0:d._offline.build(m),_online:m}}(n._componentsProvider))}function X6(n,e){di("enableIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");const t=n._freezeSettings();return KD(n,Zh.provider,{build:r=>new xD(r,t.cacheSizeBytes,e==null?void 0:e.forceOwnership)}),Promise.resolve()}async function Z6(n){di("enableMultiTabIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");const e=n._freezeSettings();KD(n,Zh.provider,{build:t=>new k6(t,e.cacheSizeBytes)})}function KD(n,e,t){if((n=Xe(n,Lt))._firestoreClient||n._terminated)throw new te(K.FAILED_PRECONDITION,"Firestore has already been started and persistence can no longer be enabled. You can only enable persistence before calling any other methods on a Firestore object.");if(n._componentsProvider||n._getSettings().localCache)throw new te(K.FAILED_PRECONDITION,"SDK cache is already specified.");n._componentsProvider={_online:e,_offline:t},$D(n)}function J6(n){if(n._initialized&&!n._terminated)throw new te(K.FAILED_PRECONDITION,"Persistence can only be cleared before a Firestore instance is initialized or after it is terminated.");const e=new yn;return n._queue.enqueueAndForgetEvenWhileRestricted(async()=>{try{await async function(r){if(!oi.D())return Promise.resolve();const a=r+rD;await oi.delete(a)}(jE(n._databaseId,n._persistenceKey)),e.resolve()}catch(t){e.reject(t)}}),e.promise}function e5(n){return function(t){const r=new yn;return t.asyncQueue.enqueueAndForget(async()=>T6(await lT(t),r)),r.promise}(Sn(n=Xe(n,Lt)))}function t5(n){return z6(Sn(n=Xe(n,Lt)))}function n5(n){return F6(Sn(n=Xe(n,Lt)))}function r5(n,e){const t=Sn(n=Xe(n,Lt)),r=new W6;return G6(t,n._databaseId,e,r),r}function i5(n,e){return $6(Sn(n=Xe(n,Lt)),e).then(t=>t?new Mn(n,null,t.query):null)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mi{constructor(e){this._byteString=e}static fromBase64String(e){try{return new mi(Dt.fromBase64String(e))}catch(t){throw new te(K.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new mi(Dt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ga=class{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new te(K.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new mt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Uo=class{constructor(e){this._methodName=e}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kp{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new te(K.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new te(K.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Se(this._lat,e._lat)||Se(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cT{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,a){if(r.length!==a.length)return!1;for(let o=0;o<r.length;++o)if(r[o]!==a[o])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const s5=/^__.*__$/;class a5{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new is(e,this.data,this.fieldMask,t,this.fieldTransforms):new Uu(e,this.data,t,this.fieldTransforms)}}class QD{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return new is(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function WD(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw pe()}}class Qp{constructor(e,t,r,a,o,u){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=a,o===void 0&&this.Bu(),this.fieldTransforms=o||[],this.fieldMask=u||[]}get path(){return this.settings.path}get Lu(){return this.settings.Lu}ku(e){return new Qp(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}qu(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),a=this.ku({path:r,Qu:!1});return a.$u(e),a}Uu(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),a=this.ku({path:r,Qu:!1});return a.Bu(),a}Ku(e){return this.ku({path:void 0,Qu:!0})}Wu(e){return lp(e,this.settings.methodName,this.settings.Gu||!1,this.path,this.settings.zu)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}Bu(){if(this.path)for(let e=0;e<this.path.length;e++)this.$u(this.path.get(e))}$u(e){if(e.length===0)throw this.Wu("Document fields must not be empty");if(WD(this.Lu)&&s5.test(e))throw this.Wu('Document fields cannot begin and end with "__"')}}class o5{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||wd(e)}ju(e,t,r,a=!1){return new Qp({Lu:e,methodName:t,zu:r,path:mt.emptyPath(),Qu:!1,Gu:a},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Bo(n){const e=n._freezeSettings(),t=wd(n._databaseId);return new o5(n._databaseId,!!e.ignoreUndefinedProperties,t)}function Wp(n,e,t,r,a,o={}){const u=n.ju(o.merge||o.mergeFields?2:0,e,t,a);_T("Data must be an object, but it was:",u,r);const d=ZD(r,u);let m,p;if(o.merge)m=new qn(u.fieldMask),p=u.fieldTransforms;else if(o.mergeFields){const y=[];for(const v of o.mergeFields){const w=Sv(e,v,t);if(!u.contains(w))throw new te(K.INVALID_ARGUMENT,`Field '${w}' is specified in your field mask but missing from your input data.`);eP(y,w)||y.push(w)}m=new qn(y),p=u.fieldTransforms.filter(v=>m.covers(v.field))}else m=null,p=u.fieldTransforms;return new a5(new _n(d),m,p)}class Ad extends Uo{_toFieldTransform(e){if(e.Lu!==2)throw e.Lu===1?e.Wu(`${this._methodName}() can only appear at the top level of your update data`):e.Wu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Ad}}function YD(n,e,t){return new Qp({Lu:3,zu:e.settings.zu,methodName:n._methodName,Qu:t},e.databaseId,e.serializer,e.ignoreUndefinedProperties)}class hT extends Uo{_toFieldTransform(e){return new vd(e.path,new yu)}isEqual(e){return e instanceof hT}}class dT extends Uo{constructor(e,t){super(e),this.Hu=t}_toFieldTransform(e){const t=YD(this,e,!0),r=this.Hu.map(o=>zo(o,t)),a=new Co(r);return new vd(e.path,a)}isEqual(e){return e instanceof dT&&sa(this.Hu,e.Hu)}}class fT extends Uo{constructor(e,t){super(e),this.Hu=t}_toFieldTransform(e){const t=YD(this,e,!0),r=this.Hu.map(o=>zo(o,t)),a=new Do(r);return new vd(e.path,a)}isEqual(e){return e instanceof fT&&sa(this.Hu,e.Hu)}}class mT extends Uo{constructor(e,t){super(e),this.Ju=t}_toFieldTransform(e){const t=new vu(e.serializer,T1(e.serializer,this.Ju));return new vd(e.path,t)}isEqual(e){return e instanceof mT&&this.Ju===e.Ju}}function pT(n,e,t,r){const a=n.ju(1,e,t);_T("Data must be an object, but it was:",a,r);const o=[],u=_n.empty();wa(r,(m,p)=>{const y=yT(e,m,t);p=Ie(p);const v=a.Uu(y);if(p instanceof Ad)o.push(y);else{const w=zo(p,v);w!=null&&(o.push(y),u.set(y,w))}});const d=new qn(o);return new QD(u,d,a.fieldTransforms)}function gT(n,e,t,r,a,o){const u=n.ju(1,e,t),d=[Sv(e,r,t)],m=[a];if(o.length%2!=0)throw new te(K.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let w=0;w<o.length;w+=2)d.push(Sv(e,o[w])),m.push(o[w+1]);const p=[],y=_n.empty();for(let w=d.length-1;w>=0;--w)if(!eP(p,d[w])){const S=d[w];let P=m[w];P=Ie(P);const U=u.Uu(S);if(P instanceof Ad)p.push(S);else{const L=zo(P,U);L!=null&&(p.push(S),y.set(S,L))}}const v=new qn(p);return new QD(y,v,u.fieldTransforms)}function XD(n,e,t,r=!1){return zo(t,n.ju(r?4:3,e))}function zo(n,e){if(JD(n=Ie(n)))return _T("Unsupported field value:",e,n),ZD(n,e);if(n instanceof Uo)return function(r,a){if(!WD(a.Lu))throw a.Wu(`${r._methodName}() can only be used with update() and set()`);if(!a.path)throw a.Wu(`${r._methodName}() is not currently supported inside arrays`);const o=r._toFieldTransform(a);o&&a.fieldTransforms.push(o)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.Qu&&e.Lu!==4)throw e.Wu("Nested arrays are not supported");return function(r,a){const o=[];let u=0;for(const d of r){let m=zo(d,a.Ku(u));m==null&&(m={nullValue:"NULL_VALUE"}),o.push(m),u++}return{arrayValue:{values:o}}}(n,e)}return function(r,a){if((r=Ie(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return T1(a.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const o=gt.fromDate(r);return{timestampValue:Eu(a.serializer,o)}}if(r instanceof gt){const o=new gt(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Eu(a.serializer,o)}}if(r instanceof Kp)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof mi)return{bytesValue:N1(a.serializer,r._byteString)};if(r instanceof Tt){const o=a.databaseId,u=r.firestore._databaseId;if(!u.isEqual(o))throw a.Wu(`Document reference is for database ${u.projectId}/${u.database} but should be for database ${o.projectId}/${o.database}`);return{referenceValue:VE(r.firestore._databaseId||a.databaseId,r._key.path)}}if(r instanceof cT)return function(u,d){return{mapValue:{fields:{[IE]:{stringValue:AE},[pu]:{arrayValue:{values:u.toArray().map(p=>{if(typeof p!="number")throw d.Wu("VectorValues must only contain numeric values.");return DE(d.serializer,p)})}}}}}}(r,a);throw a.Wu(`Unsupported field value: ${$p(r)}`)}(n,e)}function ZD(n,e){const t={};return YC(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):wa(n,(r,a)=>{const o=zo(a,e.qu(r));o!=null&&(t[r]=o)}),{mapValue:{fields:t}}}function JD(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof gt||n instanceof Kp||n instanceof mi||n instanceof Tt||n instanceof Uo||n instanceof cT)}function _T(n,e,t){if(!JD(t)||!function(a){return typeof a=="object"&&a!==null&&(Object.getPrototypeOf(a)===Object.prototype||Object.getPrototypeOf(a)===null)}(t)){const r=$p(t);throw r==="an object"?e.Wu(n+" a custom object"):e.Wu(n+" "+r)}}function Sv(n,e,t){if((e=Ie(e))instanceof ga)return e._internalPath;if(typeof e=="string")return yT(n,e);throw lp("Field path arguments must be of type string or ",n,!1,void 0,t)}const l5=new RegExp("[~\\*/\\[\\]]");function yT(n,e,t){if(e.search(l5)>=0)throw lp(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new ga(...e.split("."))._internalPath}catch{throw lp(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function lp(n,e,t,r,a){const o=r&&!r.isEmpty(),u=a!==void 0;let d=`Function ${e}() called with invalid data`;t&&(d+=" (via `toFirestore()`)"),d+=". ";let m="";return(o||u)&&(m+=" (found",o&&(m+=` in field ${r}`),u&&(m+=` in document ${a}`),m+=")"),new te(K.INVALID_ARGUMENT,d+n+m)}function eP(n,e){return n.some(t=>t.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jh{constructor(e,t,r,a,o){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=a,this._converter=o}get id(){return this._key.path.lastSegment()}get ref(){return new Tt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new u5(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Yp("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class u5 extends Jh{data(){return super.data()}}function Yp(n,e){return typeof e=="string"?yT(n,e):e instanceof ga?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tP(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new te(K.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class vT{}class Sd extends vT{}function Ks(n,e,...t){let r=[];e instanceof vT&&r.push(e),r=r.concat(t),function(o){const u=o.filter(m=>m instanceof ET).length,d=o.filter(m=>m instanceof Xp).length;if(u>1||u>0&&d>0)throw new te(K.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const a of r)n=a._apply(n);return n}class Xp extends Sd{constructor(e,t,r){super(),this._field=e,this._op=t,this._value=r,this.type="where"}static _create(e,t,r){return new Xp(e,t,r)}_apply(e){const t=this._parse(e);return rP(e._query,t),new Mn(e.firestore,e.converter,dv(e._query,t))}_parse(e){const t=Bo(e.firestore);return function(o,u,d,m,p,y,v){let w;if(p.isKeyField()){if(y==="array-contains"||y==="array-contains-any")throw new te(K.INVALID_ARGUMENT,`Invalid Query. You can't perform '${y}' queries on documentId().`);if(y==="in"||y==="not-in"){oS(v,y);const P=[];for(const U of v)P.push(aS(m,o,U));w={arrayValue:{values:P}}}else w=aS(m,o,v)}else y!=="in"&&y!=="not-in"&&y!=="array-contains-any"||oS(v,y),w=XD(d,u,v,y==="in"||y==="not-in");return Fe.create(p,y,w)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function c5(n,e,t){const r=e,a=Yp("where",n);return Xp._create(a,r,t)}class ET extends vT{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new ET(e,t)}_parse(e){const t=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return t.length===1?t[0]:tt.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:(function(a,o){let u=a;const d=o.getFlattenedFilters();for(const m of d)rP(u,m),u=dv(u,m)}(e._query,t),new Mn(e.firestore,e.converter,dv(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class TT extends Sd{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new TT(e,t)}_apply(e){const t=function(a,o,u){if(a.startAt!==null)throw new te(K.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(a.endAt!==null)throw new te(K.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Qh(o,u)}(e._query,this._field,this._direction);return new Mn(e.firestore,e.converter,function(a,o){const u=a.explicitOrderBy.concat([o]);return new ns(a.path,a.collectionGroup,u,a.filters.slice(),a.limit,a.limitType,a.startAt,a.endAt)}(e._query,t))}}function h5(n,e="asc"){const t=e,r=Yp("orderBy",n);return TT._create(r,t)}class Zp extends Sd{constructor(e,t,r){super(),this.type=e,this._limit=t,this._limitType=r}static _create(e,t,r){return new Zp(e,t,r)}_apply(e){return new Mn(e.firestore,e.converter,Zm(e._query,this._limit,this._limitType))}}function d5(n){return UD("limit",n),Zp._create("limit",n,"F")}function f5(n){return UD("limitToLast",n),Zp._create("limitToLast",n,"L")}class Jp extends Sd{constructor(e,t,r){super(),this.type=e,this._docOrFields=t,this._inclusive=r}static _create(e,t,r){return new Jp(e,t,r)}_apply(e){const t=nP(e,this.type,this._docOrFields,this._inclusive);return new Mn(e.firestore,e.converter,function(a,o){return new ns(a.path,a.collectionGroup,a.explicitOrderBy.slice(),a.filters.slice(),a.limit,a.limitType,o,a.endAt)}(e._query,t))}}function m5(...n){return Jp._create("startAt",n,!0)}function p5(...n){return Jp._create("startAfter",n,!1)}class eg extends Sd{constructor(e,t,r){super(),this.type=e,this._docOrFields=t,this._inclusive=r}static _create(e,t,r){return new eg(e,t,r)}_apply(e){const t=nP(e,this.type,this._docOrFields,this._inclusive);return new Mn(e.firestore,e.converter,function(a,o){return new ns(a.path,a.collectionGroup,a.explicitOrderBy.slice(),a.filters.slice(),a.limit,a.limitType,a.startAt,o)}(e._query,t))}}function g5(...n){return eg._create("endBefore",n,!1)}function _5(...n){return eg._create("endAt",n,!0)}function nP(n,e,t,r){if(t[0]=Ie(t[0]),t[0]instanceof Jh)return function(o,u,d,m,p){if(!m)throw new te(K.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${d}().`);const y=[];for(const v of Zl(o))if(v.field.isKeyField())y.push(So(u,m.key));else{const w=m.data.field(v.field);if(kp(w))throw new te(K.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+v.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(w===null){const S=v.field.canonicalString();throw new te(K.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${S}' (used as the orderBy) does not exist.`)}y.push(w)}return new fa(y,p)}(n._query,n.firestore._databaseId,e,t[0]._document,r);{const a=Bo(n.firestore);return function(u,d,m,p,y,v){const w=u.explicitOrderBy;if(y.length>w.length)throw new te(K.INVALID_ARGUMENT,`Too many arguments provided to ${p}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);const S=[];for(let P=0;P<y.length;P++){const U=y[P];if(w[P].field.isKeyField()){if(typeof U!="string")throw new te(K.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${p}(), but got a ${typeof U}`);if(!RE(u)&&U.indexOf("/")!==-1)throw new te(K.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by documentId(), the value passed to ${p}() must be a plain document ID, but '${U}' contains a slash.`);const L=u.path.child(ze.fromString(U));if(!ce.isDocumentKey(L))throw new te(K.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${p}() must result in a valid document path, but '${L}' is not because it contains an odd number of segments.`);const H=new ce(L);S.push(So(d,H))}else{const L=XD(m,p,U);S.push(L)}}return new fa(S,v)}(n._query,n.firestore._databaseId,a,e,t,r)}}function aS(n,e,t){if(typeof(t=Ie(t))=="string"){if(t==="")throw new te(K.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!RE(e)&&t.indexOf("/")!==-1)throw new te(K.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const r=e.path.child(ze.fromString(t));if(!ce.isDocumentKey(r))throw new te(K.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return So(n,new ce(r))}if(t instanceof Tt)return So(n,t._key);throw new te(K.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${$p(t)}.`)}function oS(n,e){if(!Array.isArray(n)||n.length===0)throw new te(K.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function rP(n,e){const t=function(a,o){for(const u of a)for(const d of u.getFlattenedFilters())if(o.indexOf(d.op)>=0)return d.op;return null}(n.filters,function(a){switch(a){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(t!==null)throw t===e.op?new te(K.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new te(K.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class wT{convertValue(e,t="none"){switch(ha(e)){case 0:return null;case 1:return e.booleanValue;case 2:return dt(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Zi(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw pe()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const r={};return wa(e,(a,o)=>{r[a]=this.convertValue(o,t)}),r}convertVectorValue(e){var t,r,a;const o=(a=(r=(t=e.fields)===null||t===void 0?void 0:t[pu].arrayValue)===null||r===void 0?void 0:r.values)===null||a===void 0?void 0:a.map(u=>dt(u.doubleValue));return new cT(o)}convertGeoPoint(e){return new Kp(dt(e.latitude),dt(e.longitude))}convertArray(e,t){return(e.values||[]).map(r=>this.convertValue(r,t))}convertServerTimestamp(e,t){switch(t){case"previous":const r=Vp(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(Gh(e));default:return null}}convertTimestamp(e){const t=Xi(e);return new gt(t.seconds,t.nanos)}convertDocumentKey(e,t){const r=ze.fromString(e);ye(q1(r));const a=new ca(r.get(1),r.get(3)),o=new ce(r.popFirst(5));return a.isEqual(t)||Vt(`Document ${o} contains a document reference within a different database (${a.projectId}/${a.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tg(n,e,t){let r;return r=n?t&&(t.merge||t.mergeFields)?n.toFirestore(e,t):n.toFirestore(e):e,r}class y5 extends wT{constructor(e){super(),this.firestore=e}convertBytes(e){return new mi(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Tt(this.firestore,null,t)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class go{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}let Ji=class extends Jh{constructor(e,t,r,a,o,u){super(e,t,r,a,u),this._firestore=e,this._firestoreImpl=e,this.metadata=o}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Ch(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const r=this._document.data.field(Yp("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}},Ch=class extends Ji{data(e={}){return super.data(e)}},_a=class{constructor(e,t,r,a){this._firestore=e,this._userDataWriter=t,this._snapshot=a,this.metadata=new go(a.hasPendingWrites,a.fromCache),this.query=r}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(r=>{e.call(t,new Ch(this._firestore,this._userDataWriter,r.key,r,new go(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new te(K.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(a,o){if(a._snapshot.oldDocs.isEmpty()){let u=0;return a._snapshot.docChanges.map(d=>{const m=new Ch(a._firestore,a._userDataWriter,d.doc.key,d.doc,new go(a._snapshot.mutatedKeys.has(d.doc.key),a._snapshot.fromCache),a.query.converter);return d.doc,{type:"added",doc:m,oldIndex:-1,newIndex:u++}})}{let u=a._snapshot.oldDocs;return a._snapshot.docChanges.filter(d=>o||d.type!==3).map(d=>{const m=new Ch(a._firestore,a._userDataWriter,d.doc.key,d.doc,new go(a._snapshot.mutatedKeys.has(d.doc.key),a._snapshot.fromCache),a.query.converter);let p=-1,y=-1;return d.type!==0&&(p=u.indexOf(d.doc.key),u=u.delete(d.doc.key)),d.type!==1&&(u=u.add(d.doc),y=u.indexOf(d.doc.key)),{type:v5(d.type),doc:m,oldIndex:p,newIndex:y}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}};function v5(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return pe()}}function iP(n,e){return n instanceof Ji&&e instanceof Ji?n._firestore===e._firestore&&n._key.isEqual(e._key)&&(n._document===null?e._document===null:n._document.isEqual(e._document))&&n._converter===e._converter:n instanceof _a&&e instanceof _a&&n._firestore===e._firestore&&GD(n.query,e.query)&&n.metadata.isEqual(e.metadata)&&n._snapshot.isEqual(e._snapshot)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function E5(n){n=Xe(n,Tt);const e=Xe(n.firestore,Lt);return kD(Sn(e),n._key).then(t=>bT(e,n,t))}class Fo extends wT{constructor(e){super(),this.firestore=e}convertBytes(e){return new mi(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Tt(this.firestore,null,t)}}function T5(n){n=Xe(n,Tt);const e=Xe(n.firestore,Lt),t=Sn(e),r=new Fo(e);return j6(t,n._key).then(a=>new Ji(e,r,n._key,a,new go(a!==null&&a.hasLocalMutations,!0),n.converter))}function w5(n){n=Xe(n,Tt);const e=Xe(n.firestore,Lt);return kD(Sn(e),n._key,{source:"server"}).then(t=>bT(e,n,t))}function b5(n){n=Xe(n,Mn);const e=Xe(n.firestore,Lt),t=Sn(e),r=new Fo(e);return tP(n._query),VD(t,n._query).then(a=>new _a(e,r,n,a))}function I5(n){n=Xe(n,Mn);const e=Xe(n.firestore,Lt),t=Sn(e),r=new Fo(e);return q6(t,n._query).then(a=>new _a(e,r,n,a))}function A5(n){n=Xe(n,Mn);const e=Xe(n.firestore,Lt),t=Sn(e),r=new Fo(e);return VD(t,n._query,{source:"server"}).then(a=>new _a(e,r,n,a))}function lS(n,e,t){n=Xe(n,Tt);const r=Xe(n.firestore,Lt),a=tg(n.converter,e,t);return Rd(r,[Wp(Bo(r),"setDoc",n._key,a,n.converter!==null,t).toMutation(n._key,pt.none())])}function uS(n,e,t,...r){n=Xe(n,Tt);const a=Xe(n.firestore,Lt),o=Bo(a);let u;return u=typeof(e=Ie(e))=="string"||e instanceof ga?gT(o,"updateDoc",n._key,e,t,r):pT(o,"updateDoc",n._key,e),Rd(a,[u.toMutation(n._key,pt.exists(!0))])}function S5(n){return Rd(Xe(n.firestore,Lt),[new Bu(n._key,pt.none())])}function R5(n,e){const t=Xe(n.firestore,Lt),r=op(n),a=tg(n.converter,e);return Rd(t,[Wp(Bo(n.firestore),"addDoc",r._key,a,n.converter!==null,{}).toMutation(r._key,pt.exists(!1))]).then(()=>r)}function sP(n,...e){var t,r,a;n=Ie(n);let o={includeMetadataChanges:!1,source:"default"},u=0;typeof e[u]!="object"||Av(e[u])||(o=e[u],u++);const d={includeMetadataChanges:o.includeMetadataChanges,source:o.source};if(Av(e[u])){const v=e[u];e[u]=(t=v.next)===null||t===void 0?void 0:t.bind(v),e[u+1]=(r=v.error)===null||r===void 0?void 0:r.bind(v),e[u+2]=(a=v.complete)===null||a===void 0?void 0:a.bind(v)}let m,p,y;if(n instanceof Tt)p=Xe(n.firestore,Lt),y=Lu(n._key.path),m={next:v=>{e[u]&&e[u](bT(p,n,v))},error:e[u+1],complete:e[u+2]};else{const v=Xe(n,Mn);p=Xe(v.firestore,Lt),y=v._query;const w=new Fo(p);m={next:S=>{e[u]&&e[u](new _a(p,w,v,S))},error:e[u+1],complete:e[u+2]},tP(n._query)}return function(w,S,P,U){const L=new Hp(U),H=new eT(S,L,P);return w.asyncQueue.enqueueAndForget(async()=>XE(await Su(w),H)),()=>{L.su(),w.asyncQueue.enqueueAndForget(async()=>ZE(await Su(w),H))}}(Sn(p),y,d,m)}function C5(n,e){return H6(Sn(n=Xe(n,Lt)),Av(e)?e:{next:e})}function Rd(n,e){return function(r,a){const o=new yn;return r.asyncQueue.enqueueAndForget(async()=>_6(await lT(r),a,o)),o.promise}(Sn(n),e)}function bT(n,e,t){const r=t.docs.get(e._key),a=new Fo(n);return new Ji(n,a,e._key,r,new go(t.hasPendingWrites,t.fromCache),e.converter)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const D5={maxAttempts:5};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let P5=class{constructor(e,t){this._firestore=e,this._commitHandler=t,this._mutations=[],this._committed=!1,this._dataReader=Bo(e)}set(e,t,r){this._verifyNotCommitted();const a=Js(e,this._firestore),o=tg(a.converter,t,r),u=Wp(this._dataReader,"WriteBatch.set",a._key,o,a.converter!==null,r);return this._mutations.push(u.toMutation(a._key,pt.none())),this}update(e,t,r,...a){this._verifyNotCommitted();const o=Js(e,this._firestore);let u;return u=typeof(t=Ie(t))=="string"||t instanceof ga?gT(this._dataReader,"WriteBatch.update",o._key,t,r,a):pT(this._dataReader,"WriteBatch.update",o._key,t),this._mutations.push(u.toMutation(o._key,pt.exists(!0))),this}delete(e){this._verifyNotCommitted();const t=Js(e,this._firestore);return this._mutations=this._mutations.concat(new Bu(t._key,pt.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new te(K.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}};function Js(n,e){if((n=Ie(n)).firestore!==e)throw new te(K.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x5{constructor(e,t){this._firestore=e,this._transaction=t,this._dataReader=Bo(e)}get(e){const t=Js(e,this._firestore),r=new y5(this._firestore);return this._transaction.lookup([t._key]).then(a=>{if(!a||a.length!==1)return pe();const o=a[0];if(o.isFoundDocument())return new Jh(this._firestore,r,o.key,o,t.converter);if(o.isNoDocument())return new Jh(this._firestore,r,t._key,null,t.converter);throw pe()})}set(e,t,r){const a=Js(e,this._firestore),o=tg(a.converter,t,r),u=Wp(this._dataReader,"Transaction.set",a._key,o,a.converter!==null,r);return this._transaction.set(a._key,u),this}update(e,t,r,...a){const o=Js(e,this._firestore);let u;return u=typeof(t=Ie(t))=="string"||t instanceof ga?gT(this._dataReader,"Transaction.update",o._key,t,r,a):pT(this._dataReader,"Transaction.update",o._key,t),this._transaction.update(o._key,u),this}delete(e){const t=Js(e,this._firestore);return this._transaction.delete(t._key),this}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let N5=class extends x5{constructor(e,t){super(e,t),this._firestore=e}get(e){const t=Js(e,this._firestore),r=new Fo(this._firestore);return super.get(e).then(a=>new Ji(this._firestore,r,t._key,a._document,new go(!1,!1),t.converter))}};function O5(n,e,t){n=Xe(n,Lt);const r=Object.assign(Object.assign({},D5),t);return function(o){if(o.maxAttempts<1)throw new te(K.INVALID_ARGUMENT,"Max attempts must be at least 1")}(r),function(o,u,d){const m=new yn;return o.asyncQueue.enqueueAndForget(async()=>{const p=await B6(o);new L6(o.asyncQueue,p,d,u,m).Iu()}),m.promise}(Sn(n),a=>e(new N5(n,a)),r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function k5(){return new Ad("deleteField")}function V5(){return new hT("serverTimestamp")}function M5(...n){return new dT("arrayUnion",n)}function L5(...n){return new fT("arrayRemove",n)}function U5(n){return new mT("increment",n)}(function(e,t=!0){(function(a){Mu=a})(ya),la(new ci("firestore",(r,{instanceIdentifier:a,options:o})=>{const u=r.getProvider("app").getImmediate(),d=new Lt(new N4(r.getProvider("auth-internal")),new V4(u,r.getProvider("app-check-internal")),function(p,y){if(!Object.prototype.hasOwnProperty.apply(p.options,["projectId"]))throw new te(K.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ca(p.options.projectId,y)}(u,a),u);return o=Object.assign({useFetchStreams:t},o),d._setSettings(o),d},"PUBLIC").setMultipleInstances(!0)),Or(zI,FI,e),Or(zI,FI,"esm2017")})();const B5="@firebase/firestore-compat",z5="0.3.45";/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function IT(n,e){if(e===void 0)return{merge:!1};if(e.mergeFields!==void 0&&e.merge!==void 0)throw new te("invalid-argument",`Invalid options passed to function ${n}(): You cannot specify both "merge" and "mergeFields".`);return e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cS(){if(typeof Uint8Array>"u")throw new te("unimplemented","Uint8Arrays are not available in this environment.")}function hS(){if(!pB())throw new te("unimplemented","Blobs are unavailable in Firestore in this environment.")}class ed{constructor(e){this._delegate=e}static fromBase64String(e){return hS(),new ed(mi.fromBase64String(e))}static fromUint8Array(e){return cS(),new ed(mi.fromUint8Array(e))}toBase64(){return hS(),this._delegate.toBase64()}toUint8Array(){return cS(),this._delegate.toUint8Array()}isEqual(e){return this._delegate.isEqual(e._delegate)}toString(){return"Blob(base64: "+this.toBase64()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rv(n){return F5(n,["next","error","complete"])}function F5(n,e){if(typeof n!="object"||n===null)return!1;const t=n;for(const r of e)if(r in t&&typeof t[r]=="function")return!0;return!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j5{enableIndexedDbPersistence(e,t){return X6(e._delegate,{forceOwnership:t})}enableMultiTabIndexedDbPersistence(e){return Z6(e._delegate)}clearIndexedDbPersistence(e){return J6(e._delegate)}}class aP{constructor(e,t,r){this._delegate=t,this._persistenceProvider=r,this.INTERNAL={delete:()=>this.terminate()},e instanceof ca||(this._appCompat=e)}get _databaseId(){return this._delegate._databaseId}settings(e){const t=this._delegate._getSettings();!e.merge&&t.host!==e.host&&di("You are overriding the original host. If you did not intend to override your settings, use {merge: true}."),e.merge&&(e=Object.assign(Object.assign({},t),e),delete e.merge),this._delegate._setSettings(e)}useEmulator(e,t,r={}){K6(this._delegate,e,t,r)}enableNetwork(){return t5(this._delegate)}disableNetwork(){return n5(this._delegate)}enablePersistence(e){let t=!1,r=!1;return e&&(t=!!e.synchronizeTabs,r=!!e.experimentalForceOwningTab,LD("synchronizeTabs",t,"experimentalForceOwningTab",r)),t?this._persistenceProvider.enableMultiTabIndexedDbPersistence(this):this._persistenceProvider.enableIndexedDbPersistence(this,r)}clearPersistence(){return this._persistenceProvider.clearIndexedDbPersistence(this)}terminate(){return this._appCompat&&(this._appCompat._removeServiceInstance("firestore-compat"),this._appCompat._removeServiceInstance("firestore")),this._delegate._delete()}waitForPendingWrites(){return e5(this._delegate)}onSnapshotsInSync(e){return C5(this._delegate,e)}get app(){if(!this._appCompat)throw new te("failed-precondition","Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._appCompat}collection(e){try{return new Ru(this,qD(this._delegate,e))}catch(t){throw On(t,"collection()","Firestore.collection()")}}doc(e){try{return new Er(this,op(this._delegate,e))}catch(t){throw On(t,"doc()","Firestore.doc()")}}collectionGroup(e){try{return new Nn(this,Q6(this._delegate,e))}catch(t){throw On(t,"collectionGroup()","Firestore.collectionGroup()")}}runTransaction(e){return O5(this._delegate,t=>e(new oP(this,t)))}batch(){return Sn(this._delegate),new lP(new P5(this._delegate,e=>Rd(this._delegate,e)))}loadBundle(e){return r5(this._delegate,e)}namedQuery(e){return i5(this._delegate,e).then(t=>t?new Nn(this,t):null)}}class ng extends wT{constructor(e){super(),this.firestore=e}convertBytes(e){return new ed(new mi(e))}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return Er.forKey(t,this.firestore,null)}}function q5(n){C4(n)}class oP{constructor(e,t){this._firestore=e,this._delegate=t,this._userDataWriter=new ng(e)}get(e){const t=_o(e);return this._delegate.get(t).then(r=>new td(this._firestore,new Ji(this._firestore._delegate,this._userDataWriter,r._key,r._document,r.metadata,t.converter)))}set(e,t,r){const a=_o(e);return r?(IT("Transaction.set",r),this._delegate.set(a,t,r)):this._delegate.set(a,t),this}update(e,t,r,...a){const o=_o(e);return arguments.length===2?this._delegate.update(o,t):this._delegate.update(o,t,r,...a),this}delete(e){const t=_o(e);return this._delegate.delete(t),this}}class lP{constructor(e){this._delegate=e}set(e,t,r){const a=_o(e);return r?(IT("WriteBatch.set",r),this._delegate.set(a,t,r)):this._delegate.set(a,t),this}update(e,t,r,...a){const o=_o(e);return arguments.length===2?this._delegate.update(o,t):this._delegate.update(o,t,r,...a),this}delete(e){const t=_o(e);return this._delegate.delete(t),this}commit(){return this._delegate.commit()}}class ko{constructor(e,t,r){this._firestore=e,this._userDataWriter=t,this._delegate=r}fromFirestore(e,t){const r=new Ch(this._firestore._delegate,this._userDataWriter,e._key,e._document,e.metadata,null);return this._delegate.fromFirestore(new nd(this._firestore,r),t??{})}toFirestore(e,t){return t?this._delegate.toFirestore(e,t):this._delegate.toFirestore(e)}static getInstance(e,t){const r=ko.INSTANCES;let a=r.get(e);a||(a=new WeakMap,r.set(e,a));let o=a.get(t);return o||(o=new ko(e,new ng(e),t),a.set(t,o)),o}}ko.INSTANCES=new WeakMap;class Er{constructor(e,t){this.firestore=e,this._delegate=t,this._userDataWriter=new ng(e)}static forPath(e,t,r){if(e.length%2!==0)throw new te("invalid-argument",`Invalid document reference. Document references must have an even number of segments, but ${e.canonicalString()} has ${e.length}`);return new Er(t,new Tt(t._delegate,r,new ce(e)))}static forKey(e,t,r){return new Er(t,new Tt(t._delegate,r,e))}get id(){return this._delegate.id}get parent(){return new Ru(this.firestore,this._delegate.parent)}get path(){return this._delegate.path}collection(e){try{return new Ru(this.firestore,qD(this._delegate,e))}catch(t){throw On(t,"collection()","DocumentReference.collection()")}}isEqual(e){return e=Ie(e),e instanceof Tt?HD(this._delegate,e):!1}set(e,t){t=IT("DocumentReference.set",t);try{return t?lS(this._delegate,e,t):lS(this._delegate,e)}catch(r){throw On(r,"setDoc()","DocumentReference.set()")}}update(e,t,...r){try{return arguments.length===1?uS(this._delegate,e):uS(this._delegate,e,t,...r)}catch(a){throw On(a,"updateDoc()","DocumentReference.update()")}}delete(){return S5(this._delegate)}onSnapshot(...e){const t=uP(e),r=cP(e,a=>new td(this.firestore,new Ji(this.firestore._delegate,this._userDataWriter,a._key,a._document,a.metadata,this._delegate.converter)));return sP(this._delegate,t,r)}get(e){let t;return(e==null?void 0:e.source)==="cache"?t=T5(this._delegate):(e==null?void 0:e.source)==="server"?t=w5(this._delegate):t=E5(this._delegate),t.then(r=>new td(this.firestore,new Ji(this.firestore._delegate,this._userDataWriter,r._key,r._document,r.metadata,this._delegate.converter)))}withConverter(e){return new Er(this.firestore,e?this._delegate.withConverter(ko.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function On(n,e,t){return n.message=n.message.replace(e,t),n}function uP(n){for(const e of n)if(typeof e=="object"&&!Rv(e))return e;return{}}function cP(n,e){var t,r;let a;return Rv(n[0])?a=n[0]:Rv(n[1])?a=n[1]:typeof n[0]=="function"?a={next:n[0],error:n[1],complete:n[2]}:a={next:n[1],error:n[2],complete:n[3]},{next:o=>{a.next&&a.next(e(o))},error:(t=a.error)===null||t===void 0?void 0:t.bind(a),complete:(r=a.complete)===null||r===void 0?void 0:r.bind(a)}}class td{constructor(e,t){this._firestore=e,this._delegate=t}get ref(){return new Er(this._firestore,this._delegate.ref)}get id(){return this._delegate.id}get metadata(){return this._delegate.metadata}get exists(){return this._delegate.exists()}data(e){return this._delegate.data(e)}get(e,t){return this._delegate.get(e,t)}isEqual(e){return iP(this._delegate,e._delegate)}}class nd extends td{data(e){const t=this._delegate.data(e);return this._delegate._converter||D4(t!==void 0),t}}class Nn{constructor(e,t){this.firestore=e,this._delegate=t,this._userDataWriter=new ng(e)}where(e,t,r){try{return new Nn(this.firestore,Ks(this._delegate,c5(e,t,r)))}catch(a){throw On(a,/(orderBy|where)\(\)/,"Query.$1()")}}orderBy(e,t){try{return new Nn(this.firestore,Ks(this._delegate,h5(e,t)))}catch(r){throw On(r,/(orderBy|where)\(\)/,"Query.$1()")}}limit(e){try{return new Nn(this.firestore,Ks(this._delegate,d5(e)))}catch(t){throw On(t,"limit()","Query.limit()")}}limitToLast(e){try{return new Nn(this.firestore,Ks(this._delegate,f5(e)))}catch(t){throw On(t,"limitToLast()","Query.limitToLast()")}}startAt(...e){try{return new Nn(this.firestore,Ks(this._delegate,m5(...e)))}catch(t){throw On(t,"startAt()","Query.startAt()")}}startAfter(...e){try{return new Nn(this.firestore,Ks(this._delegate,p5(...e)))}catch(t){throw On(t,"startAfter()","Query.startAfter()")}}endBefore(...e){try{return new Nn(this.firestore,Ks(this._delegate,g5(...e)))}catch(t){throw On(t,"endBefore()","Query.endBefore()")}}endAt(...e){try{return new Nn(this.firestore,Ks(this._delegate,_5(...e)))}catch(t){throw On(t,"endAt()","Query.endAt()")}}isEqual(e){return GD(this._delegate,e._delegate)}get(e){let t;return(e==null?void 0:e.source)==="cache"?t=I5(this._delegate):(e==null?void 0:e.source)==="server"?t=A5(this._delegate):t=b5(this._delegate),t.then(r=>new Cv(this.firestore,new _a(this.firestore._delegate,this._userDataWriter,this._delegate,r._snapshot)))}onSnapshot(...e){const t=uP(e),r=cP(e,a=>new Cv(this.firestore,new _a(this.firestore._delegate,this._userDataWriter,this._delegate,a._snapshot)));return sP(this._delegate,t,r)}withConverter(e){return new Nn(this.firestore,e?this._delegate.withConverter(ko.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}class H5{constructor(e,t){this._firestore=e,this._delegate=t}get type(){return this._delegate.type}get doc(){return new nd(this._firestore,this._delegate.doc)}get oldIndex(){return this._delegate.oldIndex}get newIndex(){return this._delegate.newIndex}}class Cv{constructor(e,t){this._firestore=e,this._delegate=t}get query(){return new Nn(this._firestore,this._delegate.query)}get metadata(){return this._delegate.metadata}get size(){return this._delegate.size}get empty(){return this._delegate.empty}get docs(){return this._delegate.docs.map(e=>new nd(this._firestore,e))}docChanges(e){return this._delegate.docChanges(e).map(t=>new H5(this._firestore,t))}forEach(e,t){this._delegate.forEach(r=>{e.call(t,new nd(this._firestore,r))})}isEqual(e){return iP(this._delegate,e._delegate)}}class Ru extends Nn{constructor(e,t){super(e,t),this.firestore=e,this._delegate=t}get id(){return this._delegate.id}get path(){return this._delegate.path}get parent(){const e=this._delegate.parent;return e?new Er(this.firestore,e):null}doc(e){try{return e===void 0?new Er(this.firestore,op(this._delegate)):new Er(this.firestore,op(this._delegate,e))}catch(t){throw On(t,"doc()","CollectionReference.doc()")}}add(e){return R5(this._delegate,e).then(t=>new Er(this.firestore,t))}isEqual(e){return HD(this._delegate,e._delegate)}withConverter(e){return new Ru(this.firestore,e?this._delegate.withConverter(ko.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function _o(n){return Xe(n,Tt)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AT{constructor(...e){this._delegate=new ga(...e)}static documentId(){return new AT(mt.keyField().canonicalString())}isEqual(e){return e=Ie(e),e instanceof ga?this._delegate._internalPath.isEqual(e._internalPath):!1}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ho{static serverTimestamp(){const e=V5();return e._methodName="FieldValue.serverTimestamp",new ho(e)}static delete(){const e=k5();return e._methodName="FieldValue.delete",new ho(e)}static arrayUnion(...e){const t=M5(...e);return t._methodName="FieldValue.arrayUnion",new ho(t)}static arrayRemove(...e){const t=L5(...e);return t._methodName="FieldValue.arrayRemove",new ho(t)}static increment(e){const t=U5(e);return t._methodName="FieldValue.increment",new ho(t)}constructor(e){this._delegate=e}isEqual(e){return this._delegate.isEqual(e._delegate)}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const G5={Firestore:aP,GeoPoint:Kp,Timestamp:gt,Blob:ed,Transaction:oP,WriteBatch:lP,DocumentReference:Er,DocumentSnapshot:td,Query:Nn,QueryDocumentSnapshot:nd,QuerySnapshot:Cv,CollectionReference:Ru,FieldPath:AT,FieldValue:ho,setLogLevel:q5,CACHE_SIZE_UNLIMITED:Y6};function $5(n,e){n.INTERNAL.registerComponent(new ci("firestore-compat",t=>{const r=t.getProvider("app-compat").getImmediate(),a=t.getProvider("firestore").getImmediate();return e(r,a)},"PUBLIC").setServiceProps(Object.assign({},G5)))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function K5(n){$5(n,(e,t)=>new aP(e,t,new j5)),n.registerVersion(B5,z5)}K5(Nu);const Q5={apiKey:"AIzaSyD6FeaU035CmYRd7YeoaVjdkovdVgP28W0",authDomain:"mini-blog-2025-c86bb.firebaseapp.com",projectId:"mini-blog-2025-c86bb",storageBucket:"mini-blog-2025-c86bb.firebasestorage.app",messagingSenderId:void 0,appId:"1:679423549087:web:6d0bc4be2763b9c155ccaa"},W5=Nu.initializeApp(Q5),Dh=W5.firestore(),Y5=ke.div`
    display: flex;
    align-items: center;
    justify-content: center;
`,X5=ke.div`
    width: 1160px;
    margin-top: 140px;
`,Z5=ke.div`
    display: flex;
    justify-content: right;
    gap: 15px;
    margin-bottom: 30px;
`,J5=ke.div`
    display: flex;
    align-item: center;
    justify-content: center;
    gap: 10px;
`,eF=ke.h2`
    font-size: 22px;
    font-weight: 700;
    margin-top: 40px;
    margin-bottom: 25px;
`;function tF(n){const e=wN().id,t=cp(),[r,a]=Z.useState({id:0,title:"",content:"",date:"",category:"",image:null,comments:[]});Z.useEffect(()=>{Dh.collection("post").doc(e).get().then(p=>{a(p.data())})},[]);const[o,u]=Z.useState(""),d=()=>{let p=new Date().getTime().toString(),y=r.comments;y.push({id:`${e}_${p}`,content:o}),Dh.collection("post").doc(e).update({comments:y}).then(()=>{alert("댓글이 등록되었습니다."),u("")})},m=()=>{Dh.collection("post").doc(e).delete({}).then(()=>{alert("게시글이 삭제되었습니다."),t("/")})};return W.jsxs("div",{children:[W.jsx(Fv,{}),W.jsx(Y5,{children:W.jsxs(X5,{children:[W.jsxs(Z5,{children:[W.jsx(Kl,{type:"outline",color:"gray",title:"뒤로가기",onClick:p=>{t("/")}}),W.jsx(Kl,{title:"삭제하기",onClick:p=>{m()}})]}),W.jsx(Ck,{post:r}),W.jsxs(eF,{children:["댓글 ",r.comments.length,"개"]}),W.jsx(Uk,{comments:r.comments}),W.jsxs(J5,{children:[W.jsx(Fy,{text:"댓글을 입력하세요.",height:"60",width:"1018",value:o,onChange:p=>{u(p.target.value)}}),W.jsx(Kl,{title:"댓글 작성",height:"60",radius:"10",onClick:p=>{d()}})]})]})})]})}const nF=ke.h1`
    color: #2E2E2E;
    font-weight: 400;
    font-size: 32px;
    margin-bottom: ${n=>n.bottom||"0"}px;
`;function hP(n){const{title:e,bottom:t}=n;return W.jsx(nF,{bottom:t,children:e})}const rF=ke.h2`
    font-size: 22px;
    font-weight: 600;
    margin-bottom: 15px;
`;function om(n){const{title:e}=n;return W.jsx(rF,{children:e})}const iF=ke.button`
    background-color: ${n=>n.isSelected?"#CCF0A6":"#E4E4E4"};
    color: ${n=>n.isSelected?"#0C4242":"#2E2E2E"};
    border: none;
    font-weight: 400;
    font-size: 18px;
    display: block;
    padding: 8px 25px 8px 25px;
    border-radius: 10px;
    cursor: pointer;
    outline: none;
    transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out;
    &:hover {
        background-color: ${n=>n.isSelected?"#CCF0A6":"#D3D3D3"};
        color: ${n=>n.isSelected?"#0C4242;":"#2E2E2E"};
    }
    &:active {
         background-color: ${n=>n.isSelected?"#B4E184":"#B0B0B0"};
    }
`;function Qs(n){const{title:e,onClick:t,isSelected:r}=n;return W.jsx(iF,{isSelected:r,onClick:t,children:e})}const sF=ke.div`
    display: flex;
    align-items: center;
    justify-content: center;
`,aF=ke.div`
    width: 1160px;
    margin-top: 140px;
`,oF=ke.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 45px;
`,lF=ke.div`
    display: flex;
    justify-content: right;
    gap: 15px;
`,uF=ke.div`
    display: flex;
    align-items: center;
    justify-content: left;
    gap: 10px;
    margin-bottom: 30px;
`,cF=ke.div`
    width: 150px;
    height: 150px;
    border: ${n=>n.imagePreview?"none":"2px dashed #CBCBCB"};
    border-radius: 10px;
    background-color: transparent;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    overflow: hidden;
    position: relative;

    background-image: ${n=>n.imagePreview?`url(${n.imagePreview})`:"none"};
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;

    img { 
    width: 24px; 
    height: 24px; 
    opacity: ${n=>n.imagePreview?0:1};
    }
`,hF=ke.label`
    display: inline-block;
    cursor: pointer;
    margin-bottom: 30px;
`;function dF(n){const e=cp(),[t,r]=Z.useState(""),[a,o]=Z.useState(""),[u,d]=Z.useState("인형"),m=S=>{d(S)},p=()=>{let S=new Date().getTime().toString();const P=new Date,U=P.getFullYear(),L=P.getMonth()+1,H=P.getDate(),Y=`${U}.${String(L).padStart(2,"0")}.${String(H).padStart(2,"0")}`;Dh.collection("post").doc(S).set({id:S,title:t,content:a,date:Y,category:u,image:y,comments:[]}).then(()=>{alert("글이 등록되었습니다."),e("/")})},[y,v]=Z.useState(null),w=S=>{let P=new FileReader;P.readAsDataURL(S.target.files[0]),P.onload=U=>{console.log(U.target.result),v(U.target.result)}};return W.jsxs("div",{children:[W.jsx(Fv,{}),W.jsx(sF,{children:W.jsxs(aF,{children:[W.jsxs(oF,{children:[W.jsx(hP,{title:"글 작성하기"}),W.jsxs(lF,{children:[W.jsx(Kl,{type:"outline",color:"gray",title:"뒤로가기",onClick:S=>{e("/")}}),W.jsx(Kl,{color:"green",title:"저장하기",onClick:S=>{p()}})]})]}),W.jsxs("div",{children:[W.jsx(om,{title:"대표 이미지"}),W.jsxs(hF,{children:[W.jsx("input",{type:"file",accept:"image/*",onChange:w,style:{display:"none"}}),W.jsx(cF,{imagePreview:y,children:!y&&W.jsx("img",{src:"/image-add.png"})})]}),W.jsx(om,{title:"제목"}),W.jsx(Fy,{text:"제목을 입력하세요.",height:"60",width:"1160",value:t,onChange:S=>{r(S.target.value)}}),W.jsx(om,{title:"내용"}),W.jsx(Fy,{text:"내용을 입력하세요.",height:"160",value:a,onChange:S=>{o(S.target.value)}}),W.jsx(om,{title:"카테고리"}),W.jsxs(uF,{children:[W.jsx(Qs,{title:"인형",onClick:()=>m("인형"),isSelected:u==="인형",children:"인형"}),W.jsx(Qs,{title:"굿즈",onClick:()=>m("굿즈"),isSelected:u==="굿즈",children:"굿즈"}),W.jsx(Qs,{title:"편지",onClick:()=>m("편지"),isSelected:u==="편지",children:"편지"}),W.jsx(Qs,{title:"악기",onClick:()=>m("악기"),isSelected:u==="악기",children:"악기"}),W.jsx(Qs,{title:"가구",onClick:()=>m("가구"),isSelected:u==="가구",children:"가구"}),W.jsx(Qs,{title:"책",onClick:()=>m("책"),isSelected:u==="책",children:"책"}),W.jsx(Qs,{title:"옷",onClick:()=>m("옷"),isSelected:u==="옷",children:"옷"}),W.jsx(Qs,{title:"etc",onClick:()=>m("etc"),isSelected:u==="etc",children:"etc"})]})]})]})})]})}const fF=ke.div`
    background-image: url(${n=>n.image});
    width: 200px;
    height: 200px;
    background-color:${n=>n.image?"none":"#D9D9D9"};
    margin-right: 35px;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    border-radius: 5px;
`;function mF(n){const{image:e}=n;return W.jsx(fF,{image:e})}const pF=ke.div`
    display: block;
    margin-bottom: 20px;
    cursor: pointer;
`,gF=ke.div`
    display: flex;
    align-items: center;
    justify-content: center;
`,_F=ke.div`
    width: 925px;
`,yF=ke.div`
    display: flex;
    align-items: center;
    justify-content: left;
`;function vF(n){const{post:e,onClick:t}=n;return W.jsx(pF,{onClick:t,children:W.jsxs(gF,{children:[W.jsx(mF,{image:e.image}),W.jsxs(_F,{children:[W.jsx(nR,{title:e.title,size:"26"}),W.jsx(rR,{content:e.content,size:"16",clamp:"2"}),W.jsxs(yF,{children:[W.jsx(iR,{category:e.category}),W.jsx(sR,{date:e.date,size:"16"})]})]})]})})}function EF(n){const{posts:e,itemClicked:t}=n;return e.map((a,o)=>W.jsx(vF,{post:a,onClick:u=>{t(a)}},a.id))}const TF=ke.select`
    width: 140px;
    height: 50px;
    border-radius: 50px;
    background-color: none;
    color: #0C4242;
    box-shadow: 0 0 0 2px #0C4242 inset; 
    border: none;
    font-weight: 500;
    font-size: 18px;
    display: block;
    padding: 0 20px 0 20px;
    appearance: none;
    outline: none;

    background-image: url("/chevron-down.png");
    background-repeat: no-repeat;
    background-position: 86% center;
    background-size: 1.5rem;
`;function dS(n){const{value:e,onChange:t,children:r}=n;return W.jsx(TF,{value:e,onChange:t,children:r})}function wF(n){const e=cp(),[t,r]=Z.useState([]),a=Z.useRef([]),[o,u]=Z.useState("recent"),[d,m]=Z.useState("all");return Z.useEffect(()=>{Dh.collection("post").get().then(p=>{p.forEach(y=>{a.current.push(y.data())}),a.current=a.current.sort((y,v)=>v.id-y.id),r(a.current)})},[]),Z.useEffect(()=>{let p=a.current.slice();o==="latest"?p.sort((y,v)=>y.id-v.id):o==="recent"&&p.sort((y,v)=>v.id-y.id),d!=="all"&&(p=p.filter(y=>y.category===d)),r(p)},[o,d]),W.jsxs("div",{children:[W.jsx(Fv,{}),W.jsx("div",{className:"main-page",children:W.jsxs("div",{className:"main-container",children:[W.jsx(hP,{title:"추억이 담긴 물건을 정리해볼까요?",bottom:"40"}),W.jsxs("div",{className:"main-buttons",children:[W.jsxs("div",{className:"categorys",children:[W.jsxs(dS,{value:o,onChange:p=>{u(p.target.value)},children:[W.jsx("option",{value:"recent",children:"최신 순"}),W.jsx("option",{value:"latest",children:"오래된 순"})]}),W.jsxs(dS,{value:d,onChange:p=>{m(p.target.value)},children:[W.jsx("option",{value:"all",children:"전체"}),W.jsx("option",{value:"인형",children:"인형"}),W.jsx("option",{value:"굿즈",children:"굿즈"}),W.jsx("option",{value:"편지",children:"편지"}),W.jsx("option",{value:"악기",children:"악기"}),W.jsx("option",{value:"가구",children:"가구"}),W.jsx("option",{value:"책",children:"책"}),W.jsx("option",{value:"옷",children:"옷"}),W.jsx("option",{value:"etc",children:"etc"})]})]}),W.jsx(Kl,{title:"글 작성",onClick:p=>{e("/write")}})]}),W.jsx(EF,{posts:t,itemClicked:p=>{e(`/post/${p.id}`)}})]})})]})}$x.createRoot(document.getElementById("root")).render(W.jsx(aO,{basename:"/wda-miniblog",children:W.jsxs(LN,{children:[W.jsx(lm,{index:!0,element:W.jsx(wF,{})}),W.jsx(lm,{path:"write",element:W.jsx(dF,{})}),W.jsx(lm,{path:"post/:id",element:W.jsx(tF,{})})]})}));
