(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const u of l)if(u.type==="childList")for(const h of u.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&s(h)}).observe(document,{childList:!0,subtree:!0});function i(l){const u={};return l.integrity&&(u.integrity=l.integrity),l.referrerPolicy&&(u.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?u.credentials="include":l.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function s(l){if(l.ep)return;l.ep=!0;const u=i(l);fetch(l.href,u)}})();function Wx(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var kf={exports:{}},Eo={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Jg;function Yx(){if(Jg)return Eo;Jg=1;var r=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function i(s,l,u){var h=null;if(u!==void 0&&(h=""+u),l.key!==void 0&&(h=""+l.key),"key"in l){u={};for(var d in l)d!=="key"&&(u[d]=l[d])}else u=l;return l=u.ref,{$$typeof:r,type:s,key:h,ref:l!==void 0?l:null,props:u}}return Eo.Fragment=t,Eo.jsx=i,Eo.jsxs=i,Eo}var $g;function qx(){return $g||($g=1,kf.exports=Yx()),kf.exports}var Ht=qx(),Xf={exports:{}},re={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var t_;function jx(){if(t_)return re;t_=1;var r=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),h=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),x=Symbol.iterator;function _(U){return U===null||typeof U!="object"?null:(U=x&&U[x]||U["@@iterator"],typeof U=="function"?U:null)}var M={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},E=Object.assign,R={};function y(U,J,gt){this.props=U,this.context=J,this.refs=R,this.updater=gt||M}y.prototype.isReactComponent={},y.prototype.setState=function(U,J){if(typeof U!="object"&&typeof U!="function"&&U!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,U,J,"setState")},y.prototype.forceUpdate=function(U){this.updater.enqueueForceUpdate(this,U,"forceUpdate")};function v(){}v.prototype=y.prototype;function z(U,J,gt){this.props=U,this.context=J,this.refs=R,this.updater=gt||M}var L=z.prototype=new v;L.constructor=z,E(L,y.prototype),L.isPureReactComponent=!0;var w=Array.isArray,F={H:null,A:null,T:null,S:null,V:null},k=Object.prototype.hasOwnProperty;function I(U,J,gt,St,W,ot){return gt=ot.ref,{$$typeof:r,type:U,key:J,ref:gt!==void 0?gt:null,props:ot}}function q(U,J){return I(U.type,J,void 0,void 0,void 0,U.props)}function D(U){return typeof U=="object"&&U!==null&&U.$$typeof===r}function C(U){var J={"=":"=0",":":"=2"};return"$"+U.replace(/[=:]/g,function(gt){return J[gt]})}var G=/\/+/g;function lt(U,J){return typeof U=="object"&&U!==null&&U.key!=null?C(""+U.key):J.toString(36)}function rt(){}function vt(U){switch(U.status){case"fulfilled":return U.value;case"rejected":throw U.reason;default:switch(typeof U.status=="string"?U.then(rt,rt):(U.status="pending",U.then(function(J){U.status==="pending"&&(U.status="fulfilled",U.value=J)},function(J){U.status==="pending"&&(U.status="rejected",U.reason=J)})),U.status){case"fulfilled":return U.value;case"rejected":throw U.reason}}throw U}function ft(U,J,gt,St,W){var ot=typeof U;(ot==="undefined"||ot==="boolean")&&(U=null);var yt=!1;if(U===null)yt=!0;else switch(ot){case"bigint":case"string":case"number":yt=!0;break;case"object":switch(U.$$typeof){case r:case t:yt=!0;break;case g:return yt=U._init,ft(yt(U._payload),J,gt,St,W)}}if(yt)return W=W(U),yt=St===""?"."+lt(U,0):St,w(W)?(gt="",yt!=null&&(gt=yt.replace(G,"$&/")+"/"),ft(W,J,gt,"",function(qt){return qt})):W!=null&&(D(W)&&(W=q(W,gt+(W.key==null||U&&U.key===W.key?"":(""+W.key).replace(G,"$&/")+"/")+yt)),J.push(W)),1;yt=0;var At=St===""?".":St+":";if(w(U))for(var Rt=0;Rt<U.length;Rt++)St=U[Rt],ot=At+lt(St,Rt),yt+=ft(St,J,gt,ot,W);else if(Rt=_(U),typeof Rt=="function")for(U=Rt.call(U),Rt=0;!(St=U.next()).done;)St=St.value,ot=At+lt(St,Rt++),yt+=ft(St,J,gt,ot,W);else if(ot==="object"){if(typeof U.then=="function")return ft(vt(U),J,gt,St,W);throw J=String(U),Error("Objects are not valid as a React child (found: "+(J==="[object Object]"?"object with keys {"+Object.keys(U).join(", ")+"}":J)+"). If you meant to render a collection of children, use an array instead.")}return yt}function N(U,J,gt){if(U==null)return U;var St=[],W=0;return ft(U,St,"","",function(ot){return J.call(gt,ot,W++)}),St}function Y(U){if(U._status===-1){var J=U._result;J=J(),J.then(function(gt){(U._status===0||U._status===-1)&&(U._status=1,U._result=gt)},function(gt){(U._status===0||U._status===-1)&&(U._status=2,U._result=gt)}),U._status===-1&&(U._status=0,U._result=J)}if(U._status===1)return U._result.default;throw U._result}var X=typeof reportError=="function"?reportError:function(U){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var J=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof U=="object"&&U!==null&&typeof U.message=="string"?String(U.message):String(U),error:U});if(!window.dispatchEvent(J))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",U);return}console.error(U)};function pt(){}return re.Children={map:N,forEach:function(U,J,gt){N(U,function(){J.apply(this,arguments)},gt)},count:function(U){var J=0;return N(U,function(){J++}),J},toArray:function(U){return N(U,function(J){return J})||[]},only:function(U){if(!D(U))throw Error("React.Children.only expected to receive a single React element child.");return U}},re.Component=y,re.Fragment=i,re.Profiler=l,re.PureComponent=z,re.StrictMode=s,re.Suspense=m,re.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=F,re.__COMPILER_RUNTIME={__proto__:null,c:function(U){return F.H.useMemoCache(U)}},re.cache=function(U){return function(){return U.apply(null,arguments)}},re.cloneElement=function(U,J,gt){if(U==null)throw Error("The argument must be a React element, but you passed "+U+".");var St=E({},U.props),W=U.key,ot=void 0;if(J!=null)for(yt in J.ref!==void 0&&(ot=void 0),J.key!==void 0&&(W=""+J.key),J)!k.call(J,yt)||yt==="key"||yt==="__self"||yt==="__source"||yt==="ref"&&J.ref===void 0||(St[yt]=J[yt]);var yt=arguments.length-2;if(yt===1)St.children=gt;else if(1<yt){for(var At=Array(yt),Rt=0;Rt<yt;Rt++)At[Rt]=arguments[Rt+2];St.children=At}return I(U.type,W,void 0,void 0,ot,St)},re.createContext=function(U){return U={$$typeof:h,_currentValue:U,_currentValue2:U,_threadCount:0,Provider:null,Consumer:null},U.Provider=U,U.Consumer={$$typeof:u,_context:U},U},re.createElement=function(U,J,gt){var St,W={},ot=null;if(J!=null)for(St in J.key!==void 0&&(ot=""+J.key),J)k.call(J,St)&&St!=="key"&&St!=="__self"&&St!=="__source"&&(W[St]=J[St]);var yt=arguments.length-2;if(yt===1)W.children=gt;else if(1<yt){for(var At=Array(yt),Rt=0;Rt<yt;Rt++)At[Rt]=arguments[Rt+2];W.children=At}if(U&&U.defaultProps)for(St in yt=U.defaultProps,yt)W[St]===void 0&&(W[St]=yt[St]);return I(U,ot,void 0,void 0,null,W)},re.createRef=function(){return{current:null}},re.forwardRef=function(U){return{$$typeof:d,render:U}},re.isValidElement=D,re.lazy=function(U){return{$$typeof:g,_payload:{_status:-1,_result:U},_init:Y}},re.memo=function(U,J){return{$$typeof:p,type:U,compare:J===void 0?null:J}},re.startTransition=function(U){var J=F.T,gt={};F.T=gt;try{var St=U(),W=F.S;W!==null&&W(gt,St),typeof St=="object"&&St!==null&&typeof St.then=="function"&&St.then(pt,X)}catch(ot){X(ot)}finally{F.T=J}},re.unstable_useCacheRefresh=function(){return F.H.useCacheRefresh()},re.use=function(U){return F.H.use(U)},re.useActionState=function(U,J,gt){return F.H.useActionState(U,J,gt)},re.useCallback=function(U,J){return F.H.useCallback(U,J)},re.useContext=function(U){return F.H.useContext(U)},re.useDebugValue=function(){},re.useDeferredValue=function(U,J){return F.H.useDeferredValue(U,J)},re.useEffect=function(U,J,gt){var St=F.H;if(typeof gt=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return St.useEffect(U,J)},re.useId=function(){return F.H.useId()},re.useImperativeHandle=function(U,J,gt){return F.H.useImperativeHandle(U,J,gt)},re.useInsertionEffect=function(U,J){return F.H.useInsertionEffect(U,J)},re.useLayoutEffect=function(U,J){return F.H.useLayoutEffect(U,J)},re.useMemo=function(U,J){return F.H.useMemo(U,J)},re.useOptimistic=function(U,J){return F.H.useOptimistic(U,J)},re.useReducer=function(U,J,gt){return F.H.useReducer(U,J,gt)},re.useRef=function(U){return F.H.useRef(U)},re.useState=function(U){return F.H.useState(U)},re.useSyncExternalStore=function(U,J,gt){return F.H.useSyncExternalStore(U,J,gt)},re.useTransition=function(){return F.H.useTransition()},re.version="19.1.0",re}var e_;function pd(){return e_||(e_=1,Xf.exports=jx()),Xf.exports}var fn=pd(),Wf={exports:{}},To={},Yf={exports:{}},qf={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var n_;function Zx(){return n_||(n_=1,function(r){function t(N,Y){var X=N.length;N.push(Y);t:for(;0<X;){var pt=X-1>>>1,U=N[pt];if(0<l(U,Y))N[pt]=Y,N[X]=U,X=pt;else break t}}function i(N){return N.length===0?null:N[0]}function s(N){if(N.length===0)return null;var Y=N[0],X=N.pop();if(X!==Y){N[0]=X;t:for(var pt=0,U=N.length,J=U>>>1;pt<J;){var gt=2*(pt+1)-1,St=N[gt],W=gt+1,ot=N[W];if(0>l(St,X))W<U&&0>l(ot,St)?(N[pt]=ot,N[W]=X,pt=W):(N[pt]=St,N[gt]=X,pt=gt);else if(W<U&&0>l(ot,X))N[pt]=ot,N[W]=X,pt=W;else break t}}return Y}function l(N,Y){var X=N.sortIndex-Y.sortIndex;return X!==0?X:N.id-Y.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;r.unstable_now=function(){return u.now()}}else{var h=Date,d=h.now();r.unstable_now=function(){return h.now()-d}}var m=[],p=[],g=1,x=null,_=3,M=!1,E=!1,R=!1,y=!1,v=typeof setTimeout=="function"?setTimeout:null,z=typeof clearTimeout=="function"?clearTimeout:null,L=typeof setImmediate<"u"?setImmediate:null;function w(N){for(var Y=i(p);Y!==null;){if(Y.callback===null)s(p);else if(Y.startTime<=N)s(p),Y.sortIndex=Y.expirationTime,t(m,Y);else break;Y=i(p)}}function F(N){if(R=!1,w(N),!E)if(i(m)!==null)E=!0,k||(k=!0,lt());else{var Y=i(p);Y!==null&&ft(F,Y.startTime-N)}}var k=!1,I=-1,q=5,D=-1;function C(){return y?!0:!(r.unstable_now()-D<q)}function G(){if(y=!1,k){var N=r.unstable_now();D=N;var Y=!0;try{t:{E=!1,R&&(R=!1,z(I),I=-1),M=!0;var X=_;try{e:{for(w(N),x=i(m);x!==null&&!(x.expirationTime>N&&C());){var pt=x.callback;if(typeof pt=="function"){x.callback=null,_=x.priorityLevel;var U=pt(x.expirationTime<=N);if(N=r.unstable_now(),typeof U=="function"){x.callback=U,w(N),Y=!0;break e}x===i(m)&&s(m),w(N)}else s(m);x=i(m)}if(x!==null)Y=!0;else{var J=i(p);J!==null&&ft(F,J.startTime-N),Y=!1}}break t}finally{x=null,_=X,M=!1}Y=void 0}}finally{Y?lt():k=!1}}}var lt;if(typeof L=="function")lt=function(){L(G)};else if(typeof MessageChannel<"u"){var rt=new MessageChannel,vt=rt.port2;rt.port1.onmessage=G,lt=function(){vt.postMessage(null)}}else lt=function(){v(G,0)};function ft(N,Y){I=v(function(){N(r.unstable_now())},Y)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(N){N.callback=null},r.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):q=0<N?Math.floor(1e3/N):5},r.unstable_getCurrentPriorityLevel=function(){return _},r.unstable_next=function(N){switch(_){case 1:case 2:case 3:var Y=3;break;default:Y=_}var X=_;_=Y;try{return N()}finally{_=X}},r.unstable_requestPaint=function(){y=!0},r.unstable_runWithPriority=function(N,Y){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var X=_;_=N;try{return Y()}finally{_=X}},r.unstable_scheduleCallback=function(N,Y,X){var pt=r.unstable_now();switch(typeof X=="object"&&X!==null?(X=X.delay,X=typeof X=="number"&&0<X?pt+X:pt):X=pt,N){case 1:var U=-1;break;case 2:U=250;break;case 5:U=1073741823;break;case 4:U=1e4;break;default:U=5e3}return U=X+U,N={id:g++,callback:Y,priorityLevel:N,startTime:X,expirationTime:U,sortIndex:-1},X>pt?(N.sortIndex=X,t(p,N),i(m)===null&&N===i(p)&&(R?(z(I),I=-1):R=!0,ft(F,X-pt))):(N.sortIndex=U,t(m,N),E||M||(E=!0,k||(k=!0,lt()))),N},r.unstable_shouldYield=C,r.unstable_wrapCallback=function(N){var Y=_;return function(){var X=_;_=Y;try{return N.apply(this,arguments)}finally{_=X}}}}(qf)),qf}var i_;function Kx(){return i_||(i_=1,Yf.exports=Zx()),Yf.exports}var jf={exports:{}},wn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var a_;function Qx(){if(a_)return wn;a_=1;var r=pd();function t(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)p+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var s={d:{f:i,r:function(){throw Error(t(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function u(m,p,g){var x=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:x==null?null:""+x,children:m,containerInfo:p,implementation:g}}var h=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return wn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,wn.createPortal=function(m,p){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(t(299));return u(m,p,null,g)},wn.flushSync=function(m){var p=h.T,g=s.p;try{if(h.T=null,s.p=2,m)return m()}finally{h.T=p,s.p=g,s.d.f()}},wn.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,s.d.C(m,p))},wn.prefetchDNS=function(m){typeof m=="string"&&s.d.D(m)},wn.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var g=p.as,x=d(g,p.crossOrigin),_=typeof p.integrity=="string"?p.integrity:void 0,M=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;g==="style"?s.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:x,integrity:_,fetchPriority:M}):g==="script"&&s.d.X(m,{crossOrigin:x,integrity:_,fetchPriority:M,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},wn.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var g=d(p.as,p.crossOrigin);s.d.M(m,{crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&s.d.M(m)},wn.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var g=p.as,x=d(g,p.crossOrigin);s.d.L(m,g,{crossOrigin:x,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},wn.preloadModule=function(m,p){if(typeof m=="string")if(p){var g=d(p.as,p.crossOrigin);s.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else s.d.m(m)},wn.requestFormReset=function(m){s.d.r(m)},wn.unstable_batchedUpdates=function(m,p){return m(p)},wn.useFormState=function(m,p,g){return h.H.useFormState(m,p,g)},wn.useFormStatus=function(){return h.H.useHostTransitionStatus()},wn.version="19.1.0",wn}var s_;function Jx(){if(s_)return jf.exports;s_=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(t){console.error(t)}}return r(),jf.exports=Qx(),jf.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r_;function $x(){if(r_)return To;r_=1;var r=Kx(),t=pd(),i=Jx();function s(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function u(e){var n=e,a=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(a=n.return),e=n.return;while(e)}return n.tag===3?a:null}function h(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function d(e){if(u(e)!==e)throw Error(s(188))}function m(e){var n=e.alternate;if(!n){if(n=u(e),n===null)throw Error(s(188));return n!==e?null:e}for(var a=e,o=n;;){var c=a.return;if(c===null)break;var f=c.alternate;if(f===null){if(o=c.return,o!==null){a=o;continue}break}if(c.child===f.child){for(f=c.child;f;){if(f===a)return d(c),e;if(f===o)return d(c),n;f=f.sibling}throw Error(s(188))}if(a.return!==o.return)a=c,o=f;else{for(var S=!1,b=c.child;b;){if(b===a){S=!0,a=c,o=f;break}if(b===o){S=!0,o=c,a=f;break}b=b.sibling}if(!S){for(b=f.child;b;){if(b===a){S=!0,a=f,o=c;break}if(b===o){S=!0,o=f,a=c;break}b=b.sibling}if(!S)throw Error(s(189))}}if(a.alternate!==o)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?e:n}function p(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=p(e),n!==null)return n;e=e.sibling}return null}var g=Object.assign,x=Symbol.for("react.element"),_=Symbol.for("react.transitional.element"),M=Symbol.for("react.portal"),E=Symbol.for("react.fragment"),R=Symbol.for("react.strict_mode"),y=Symbol.for("react.profiler"),v=Symbol.for("react.provider"),z=Symbol.for("react.consumer"),L=Symbol.for("react.context"),w=Symbol.for("react.forward_ref"),F=Symbol.for("react.suspense"),k=Symbol.for("react.suspense_list"),I=Symbol.for("react.memo"),q=Symbol.for("react.lazy"),D=Symbol.for("react.activity"),C=Symbol.for("react.memo_cache_sentinel"),G=Symbol.iterator;function lt(e){return e===null||typeof e!="object"?null:(e=G&&e[G]||e["@@iterator"],typeof e=="function"?e:null)}var rt=Symbol.for("react.client.reference");function vt(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===rt?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case E:return"Fragment";case y:return"Profiler";case R:return"StrictMode";case F:return"Suspense";case k:return"SuspenseList";case D:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case M:return"Portal";case L:return(e.displayName||"Context")+".Provider";case z:return(e._context.displayName||"Context")+".Consumer";case w:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case I:return n=e.displayName||null,n!==null?n:vt(e.type)||"Memo";case q:n=e._payload,e=e._init;try{return vt(e(n))}catch{}}return null}var ft=Array.isArray,N=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Y=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,X={pending:!1,data:null,method:null,action:null},pt=[],U=-1;function J(e){return{current:e}}function gt(e){0>U||(e.current=pt[U],pt[U]=null,U--)}function St(e,n){U++,pt[U]=e.current,e.current=n}var W=J(null),ot=J(null),yt=J(null),At=J(null);function Rt(e,n){switch(St(yt,n),St(ot,e),St(W,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?Ag(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=Ag(n),e=Rg(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}gt(W),St(W,e)}function qt(){gt(W),gt(ot),gt(yt)}function Vt(e){e.memoizedState!==null&&St(At,e);var n=W.current,a=Rg(n,e.type);n!==a&&(St(ot,e),St(W,a))}function ye(e){ot.current===e&&(gt(W),gt(ot)),At.current===e&&(gt(At),vo._currentValue=X)}var Ee=Object.prototype.hasOwnProperty,_e=r.unstable_scheduleCallback,B=r.unstable_cancelCallback,Sn=r.unstable_shouldYield,Te=r.unstable_requestPaint,de=r.unstable_now,kt=r.unstable_getCurrentPriorityLevel,ve=r.unstable_ImmediatePriority,Kt=r.unstable_UserBlockingPriority,se=r.unstable_NormalPriority,Ke=r.unstable_LowPriority,O=r.unstable_IdlePriority,T=r.log,et=r.unstable_setDisableYieldValue,ht=null,mt=null;function ct(e){if(typeof T=="function"&&et(e),mt&&typeof mt.setStrictMode=="function")try{mt.setStrictMode(ht,e)}catch{}}var Ot=Math.clz32?Math.clz32:Xt,Dt=Math.log,Gt=Math.LN2;function Xt(e){return e>>>=0,e===0?32:31-(Dt(e)/Gt|0)|0}var Mt=256,Pt=4194304;function jt(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Zt(e,n,a){var o=e.pendingLanes;if(o===0)return 0;var c=0,f=e.suspendedLanes,S=e.pingedLanes;e=e.warmLanes;var b=o&134217727;return b!==0?(o=b&~f,o!==0?c=jt(o):(S&=b,S!==0?c=jt(S):a||(a=b&~e,a!==0&&(c=jt(a))))):(b=o&~f,b!==0?c=jt(b):S!==0?c=jt(S):a||(a=o&~e,a!==0&&(c=jt(a)))),c===0?0:n!==0&&n!==c&&(n&f)===0&&(f=c&-c,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:c}function Ct(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function ae(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function V(){var e=Mt;return Mt<<=1,(Mt&4194048)===0&&(Mt=256),e}function Ut(){var e=Pt;return Pt<<=1,(Pt&62914560)===0&&(Pt=4194304),e}function Et(e){for(var n=[],a=0;31>a;a++)n.push(e);return n}function zt(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function bt(e,n,a,o,c,f){var S=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var b=e.entanglements,P=e.expirationTimes,tt=e.hiddenUpdates;for(a=S&~a;0<a;){var ut=31-Ot(a),_t=1<<ut;b[ut]=0,P[ut]=-1;var nt=tt[ut];if(nt!==null)for(tt[ut]=null,ut=0;ut<nt.length;ut++){var it=nt[ut];it!==null&&(it.lane&=-536870913)}a&=~_t}o!==0&&xt(e,o,0),f!==0&&c===0&&e.tag!==0&&(e.suspendedLanes|=f&~(S&~n))}function xt(e,n,a){e.pendingLanes|=n,e.suspendedLanes&=~n;var o=31-Ot(n);e.entangledLanes|=n,e.entanglements[o]=e.entanglements[o]|1073741824|a&4194090}function Bt(e,n){var a=e.entangledLanes|=n;for(e=e.entanglements;a;){var o=31-Ot(a),c=1<<o;c&n|e[o]&n&&(e[o]|=n),a&=~c}}function ie(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Le(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Ae(){var e=Y.p;return e!==0?e:(e=window.event,e===void 0?32:Yg(e.type))}function Wn(e,n){var a=Y.p;try{return Y.p=e,n()}finally{Y.p=a}}var pn=Math.random().toString(36).slice(2),rn="__reactFiber$"+pn,yn="__reactProps$"+pn,zn="__reactContainer$"+pn,qa="__reactEvents$"+pn,ko="__reactListeners$"+pn,Xo="__reactHandles$"+pn,ja="__reactResources$"+pn,ca="__reactMarker$"+pn;function ua(e){delete e[rn],delete e[yn],delete e[qa],delete e[ko],delete e[Xo]}function wi(e){var n=e[rn];if(n)return n;for(var a=e.parentNode;a;){if(n=a[zn]||a[rn]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(e=Ug(e);e!==null;){if(a=e[rn])return a;e=Ug(e)}return n}e=a,a=e.parentNode}return null}function Di(e){if(e=e[rn]||e[zn]){var n=e.tag;if(n===5||n===6||n===13||n===26||n===27||n===3)return e}return null}function Za(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(s(33))}function fa(e){var n=e[ja];return n||(n=e[ja]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function en(e){e[ca]=!0}var Wo=new Set,Yo={};function Ui(e,n){A(e,n),A(e+"Capture",n)}function A(e,n){for(Yo[e]=n,e=0;e<n.length;e++)Wo.add(n[e])}var Z=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),at={},st={};function K(e){return Ee.call(st,e)?!0:Ee.call(at,e)?!1:Z.test(e)?st[e]=!0:(at[e]=!0,!1)}function Tt(e,n,a){if(K(n))if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var o=n.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,""+a)}}function wt(e,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,""+a)}}function Nt(e,n,a,o){if(o===null)e.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(n,a,""+o)}}var It,te;function Qt(e){if(It===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);It=n&&n[1]||"",te=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+It+e+te}var Wt=!1;function ce(e,n){if(!e||Wt)return"";Wt=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(n){var _t=function(){throw Error()};if(Object.defineProperty(_t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(_t,[])}catch(it){var nt=it}Reflect.construct(e,[],_t)}else{try{_t.call()}catch(it){nt=it}e.call(_t.prototype)}}else{try{throw Error()}catch(it){nt=it}(_t=e())&&typeof _t.catch=="function"&&_t.catch(function(){})}}catch(it){if(it&&nt&&typeof it.stack=="string")return[it.stack,nt.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var c=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");c&&c.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=o.DetermineComponentFrameRoot(),S=f[0],b=f[1];if(S&&b){var P=S.split(`
`),tt=b.split(`
`);for(c=o=0;o<P.length&&!P[o].includes("DetermineComponentFrameRoot");)o++;for(;c<tt.length&&!tt[c].includes("DetermineComponentFrameRoot");)c++;if(o===P.length||c===tt.length)for(o=P.length-1,c=tt.length-1;1<=o&&0<=c&&P[o]!==tt[c];)c--;for(;1<=o&&0<=c;o--,c--)if(P[o]!==tt[c]){if(o!==1||c!==1)do if(o--,c--,0>c||P[o]!==tt[c]){var ut=`
`+P[o].replace(" at new "," at ");return e.displayName&&ut.includes("<anonymous>")&&(ut=ut.replace("<anonymous>",e.displayName)),ut}while(1<=o&&0<=c);break}}}finally{Wt=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?Qt(a):""}function we(e){switch(e.tag){case 26:case 27:case 5:return Qt(e.type);case 16:return Qt("Lazy");case 13:return Qt("Suspense");case 19:return Qt("SuspenseList");case 0:case 15:return ce(e.type,!1);case 11:return ce(e.type.render,!1);case 1:return ce(e.type,!0);case 31:return Qt("Activity");default:return""}}function Ve(e){try{var n="";do n+=we(e),e=e.return;while(e);return n}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}function xe(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Se(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Jt(e){var n=Se(e)?"checked":"value",a=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),o=""+e[n];if(!e.hasOwnProperty(n)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var c=a.get,f=a.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return c.call(this)},set:function(S){o=""+S,f.call(this,S)}}),Object.defineProperty(e,n,{enumerable:a.enumerable}),{getValue:function(){return o},setValue:function(S){o=""+S},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function qe(e){e._valueTracker||(e._valueTracker=Jt(e))}function be(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var a=n.getValue(),o="";return e&&(o=Se(e)?e.checked?"true":"false":e.value),e=o,e!==a?(n.setValue(e),!0):!1}function An(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var ha=/[\n"\\]/g;function ke(e){return e.replace(ha,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Li(e,n,a,o,c,f,S,b){e.name="",S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"?e.type=S:e.removeAttribute("type"),n!=null?S==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+xe(n)):e.value!==""+xe(n)&&(e.value=""+xe(n)):S!=="submit"&&S!=="reset"||e.removeAttribute("value"),n!=null?Rn(e,S,xe(n)):a!=null?Rn(e,S,xe(a)):o!=null&&e.removeAttribute("value"),c==null&&f!=null&&(e.defaultChecked=!!f),c!=null&&(e.checked=c&&typeof c!="function"&&typeof c!="symbol"),b!=null&&typeof b!="function"&&typeof b!="symbol"&&typeof b!="boolean"?e.name=""+xe(b):e.removeAttribute("name")}function He(e,n,a,o,c,f,S,b){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(e.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null))return;a=a!=null?""+xe(a):"",n=n!=null?""+xe(n):a,b||n===e.value||(e.value=n),e.defaultValue=n}o=o??c,o=typeof o!="function"&&typeof o!="symbol"&&!!o,e.checked=b?e.checked:!!o,e.defaultChecked=!!o,S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"&&(e.name=S)}function Rn(e,n,a){n==="number"&&An(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function on(e,n,a,o){if(e=e.options,n){n={};for(var c=0;c<a.length;c++)n["$"+a[c]]=!0;for(a=0;a<e.length;a++)c=n.hasOwnProperty("$"+e[a].value),e[a].selected!==c&&(e[a].selected=c),c&&o&&(e[a].defaultSelected=!0)}else{for(a=""+xe(a),n=null,c=0;c<e.length;c++){if(e[c].value===a){e[c].selected=!0,o&&(e[c].defaultSelected=!0);return}n!==null||e[c].disabled||(n=e[c])}n!==null&&(n.selected=!0)}}function mn(e,n,a){if(n!=null&&(n=""+xe(n),n!==e.value&&(e.value=n),a==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=a!=null?""+xe(a):""}function Mn(e,n,a,o){if(n==null){if(o!=null){if(a!=null)throw Error(s(92));if(ft(o)){if(1<o.length)throw Error(s(93));o=o[0]}a=o}a==null&&(a=""),n=a}a=xe(n),e.defaultValue=a,o=e.textContent,o===a&&o!==""&&o!==null&&(e.value=o)}function yi(e,n){if(n){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=n;return}}e.textContent=n}var Ni=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Ad(e,n,a){var o=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?o?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":o?e.setProperty(n,a):typeof a!="number"||a===0||Ni.has(n)?n==="float"?e.cssFloat=a:e[n]=(""+a).trim():e[n]=a+"px"}function Rd(e,n,a){if(n!=null&&typeof n!="object")throw Error(s(62));if(e=e.style,a!=null){for(var o in a)!a.hasOwnProperty(o)||n!=null&&n.hasOwnProperty(o)||(o.indexOf("--")===0?e.setProperty(o,""):o==="float"?e.cssFloat="":e[o]="");for(var c in n)o=n[c],n.hasOwnProperty(c)&&a[c]!==o&&Ad(e,c,o)}else for(var f in n)n.hasOwnProperty(f)&&Ad(e,f,n[f])}function Gc(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var k0=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),X0=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function qo(e){return X0.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var Vc=null;function kc(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Rs=null,Cs=null;function Cd(e){var n=Di(e);if(n&&(e=n.stateNode)){var a=e[yn]||null;t:switch(e=n.stateNode,n.type){case"input":if(Li(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+ke(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var o=a[n];if(o!==e&&o.form===e.form){var c=o[yn]||null;if(!c)throw Error(s(90));Li(o,c.value,c.defaultValue,c.defaultValue,c.checked,c.defaultChecked,c.type,c.name)}}for(n=0;n<a.length;n++)o=a[n],o.form===e.form&&be(o)}break t;case"textarea":mn(e,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&on(e,!!a.multiple,n,!1)}}}var Xc=!1;function wd(e,n,a){if(Xc)return e(n,a);Xc=!0;try{var o=e(n);return o}finally{if(Xc=!1,(Rs!==null||Cs!==null)&&(Ll(),Rs&&(n=Rs,e=Cs,Cs=Rs=null,Cd(n),e)))for(n=0;n<e.length;n++)Cd(e[n])}}function Dr(e,n){var a=e.stateNode;if(a===null)return null;var o=a[yn]||null;if(o===null)return null;a=o[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break t;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(s(231,n,typeof a));return a}var Oi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Wc=!1;if(Oi)try{var Ur={};Object.defineProperty(Ur,"passive",{get:function(){Wc=!0}}),window.addEventListener("test",Ur,Ur),window.removeEventListener("test",Ur,Ur)}catch{Wc=!1}var da=null,Yc=null,jo=null;function Dd(){if(jo)return jo;var e,n=Yc,a=n.length,o,c="value"in da?da.value:da.textContent,f=c.length;for(e=0;e<a&&n[e]===c[e];e++);var S=a-e;for(o=1;o<=S&&n[a-o]===c[f-o];o++);return jo=c.slice(e,1<o?1-o:void 0)}function Zo(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function Ko(){return!0}function Ud(){return!1}function In(e){function n(a,o,c,f,S){this._reactName=a,this._targetInst=c,this.type=o,this.nativeEvent=f,this.target=S,this.currentTarget=null;for(var b in e)e.hasOwnProperty(b)&&(a=e[b],this[b]=a?a(f):f[b]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?Ko:Ud,this.isPropagationStopped=Ud,this}return g(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Ko)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Ko)},persist:function(){},isPersistent:Ko}),n}var Ka={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Qo=In(Ka),Lr=g({},Ka,{view:0,detail:0}),W0=In(Lr),qc,jc,Nr,Jo=g({},Lr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Kc,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Nr&&(Nr&&e.type==="mousemove"?(qc=e.screenX-Nr.screenX,jc=e.screenY-Nr.screenY):jc=qc=0,Nr=e),qc)},movementY:function(e){return"movementY"in e?e.movementY:jc}}),Ld=In(Jo),Y0=g({},Jo,{dataTransfer:0}),q0=In(Y0),j0=g({},Lr,{relatedTarget:0}),Zc=In(j0),Z0=g({},Ka,{animationName:0,elapsedTime:0,pseudoElement:0}),K0=In(Z0),Q0=g({},Ka,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),J0=In(Q0),$0=g({},Ka,{data:0}),Nd=In($0),tv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},ev={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},nv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function iv(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=nv[e])?!!n[e]:!1}function Kc(){return iv}var av=g({},Lr,{key:function(e){if(e.key){var n=tv[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=Zo(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?ev[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Kc,charCode:function(e){return e.type==="keypress"?Zo(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Zo(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),sv=In(av),rv=g({},Jo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Od=In(rv),ov=g({},Lr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Kc}),lv=In(ov),cv=g({},Ka,{propertyName:0,elapsedTime:0,pseudoElement:0}),uv=In(cv),fv=g({},Jo,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),hv=In(fv),dv=g({},Ka,{newState:0,oldState:0}),pv=In(dv),mv=[9,13,27,32],Qc=Oi&&"CompositionEvent"in window,Or=null;Oi&&"documentMode"in document&&(Or=document.documentMode);var gv=Oi&&"TextEvent"in window&&!Or,Pd=Oi&&(!Qc||Or&&8<Or&&11>=Or),zd=" ",Id=!1;function Bd(e,n){switch(e){case"keyup":return mv.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Fd(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var ws=!1;function _v(e,n){switch(e){case"compositionend":return Fd(n);case"keypress":return n.which!==32?null:(Id=!0,zd);case"textInput":return e=n.data,e===zd&&Id?null:e;default:return null}}function vv(e,n){if(ws)return e==="compositionend"||!Qc&&Bd(e,n)?(e=Dd(),jo=Yc=da=null,ws=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Pd&&n.locale!=="ko"?null:n.data;default:return null}}var xv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Hd(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!xv[e.type]:n==="textarea"}function Gd(e,n,a,o){Rs?Cs?Cs.push(o):Cs=[o]:Rs=o,n=Bl(n,"onChange"),0<n.length&&(a=new Qo("onChange","change",null,a,o),e.push({event:a,listeners:n}))}var Pr=null,zr=null;function Sv(e){yg(e,0)}function $o(e){var n=Za(e);if(be(n))return e}function Vd(e,n){if(e==="change")return n}var kd=!1;if(Oi){var Jc;if(Oi){var $c="oninput"in document;if(!$c){var Xd=document.createElement("div");Xd.setAttribute("oninput","return;"),$c=typeof Xd.oninput=="function"}Jc=$c}else Jc=!1;kd=Jc&&(!document.documentMode||9<document.documentMode)}function Wd(){Pr&&(Pr.detachEvent("onpropertychange",Yd),zr=Pr=null)}function Yd(e){if(e.propertyName==="value"&&$o(zr)){var n=[];Gd(n,zr,e,kc(e)),wd(Sv,n)}}function yv(e,n,a){e==="focusin"?(Wd(),Pr=n,zr=a,Pr.attachEvent("onpropertychange",Yd)):e==="focusout"&&Wd()}function Mv(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return $o(zr)}function Ev(e,n){if(e==="click")return $o(n)}function Tv(e,n){if(e==="input"||e==="change")return $o(n)}function bv(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var Yn=typeof Object.is=="function"?Object.is:bv;function Ir(e,n){if(Yn(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var a=Object.keys(e),o=Object.keys(n);if(a.length!==o.length)return!1;for(o=0;o<a.length;o++){var c=a[o];if(!Ee.call(n,c)||!Yn(e[c],n[c]))return!1}return!0}function qd(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function jd(e,n){var a=qd(e);e=0;for(var o;a;){if(a.nodeType===3){if(o=e+a.textContent.length,e<=n&&o>=n)return{node:a,offset:n-e};e=o}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=qd(a)}}function Zd(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?Zd(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function Kd(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=An(e.document);n instanceof e.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)e=n.contentWindow;else break;n=An(e.document)}return n}function tu(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var Av=Oi&&"documentMode"in document&&11>=document.documentMode,Ds=null,eu=null,Br=null,nu=!1;function Qd(e,n,a){var o=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;nu||Ds==null||Ds!==An(o)||(o=Ds,"selectionStart"in o&&tu(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),Br&&Ir(Br,o)||(Br=o,o=Bl(eu,"onSelect"),0<o.length&&(n=new Qo("onSelect","select",null,n,a),e.push({event:n,listeners:o}),n.target=Ds)))}function Qa(e,n){var a={};return a[e.toLowerCase()]=n.toLowerCase(),a["Webkit"+e]="webkit"+n,a["Moz"+e]="moz"+n,a}var Us={animationend:Qa("Animation","AnimationEnd"),animationiteration:Qa("Animation","AnimationIteration"),animationstart:Qa("Animation","AnimationStart"),transitionrun:Qa("Transition","TransitionRun"),transitionstart:Qa("Transition","TransitionStart"),transitioncancel:Qa("Transition","TransitionCancel"),transitionend:Qa("Transition","TransitionEnd")},iu={},Jd={};Oi&&(Jd=document.createElement("div").style,"AnimationEvent"in window||(delete Us.animationend.animation,delete Us.animationiteration.animation,delete Us.animationstart.animation),"TransitionEvent"in window||delete Us.transitionend.transition);function Ja(e){if(iu[e])return iu[e];if(!Us[e])return e;var n=Us[e],a;for(a in n)if(n.hasOwnProperty(a)&&a in Jd)return iu[e]=n[a];return e}var $d=Ja("animationend"),tp=Ja("animationiteration"),ep=Ja("animationstart"),Rv=Ja("transitionrun"),Cv=Ja("transitionstart"),wv=Ja("transitioncancel"),np=Ja("transitionend"),ip=new Map,au="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");au.push("scrollEnd");function fi(e,n){ip.set(e,n),Ui(n,[e])}var ap=new WeakMap;function ei(e,n){if(typeof e=="object"&&e!==null){var a=ap.get(e);return a!==void 0?a:(n={value:e,source:n,stack:Ve(n)},ap.set(e,n),n)}return{value:e,source:n,stack:Ve(n)}}var ni=[],Ls=0,su=0;function tl(){for(var e=Ls,n=su=Ls=0;n<e;){var a=ni[n];ni[n++]=null;var o=ni[n];ni[n++]=null;var c=ni[n];ni[n++]=null;var f=ni[n];if(ni[n++]=null,o!==null&&c!==null){var S=o.pending;S===null?c.next=c:(c.next=S.next,S.next=c),o.pending=c}f!==0&&sp(a,c,f)}}function el(e,n,a,o){ni[Ls++]=e,ni[Ls++]=n,ni[Ls++]=a,ni[Ls++]=o,su|=o,e.lanes|=o,e=e.alternate,e!==null&&(e.lanes|=o)}function ru(e,n,a,o){return el(e,n,a,o),nl(e)}function Ns(e,n){return el(e,null,null,n),nl(e)}function sp(e,n,a){e.lanes|=a;var o=e.alternate;o!==null&&(o.lanes|=a);for(var c=!1,f=e.return;f!==null;)f.childLanes|=a,o=f.alternate,o!==null&&(o.childLanes|=a),f.tag===22&&(e=f.stateNode,e===null||e._visibility&1||(c=!0)),e=f,f=f.return;return e.tag===3?(f=e.stateNode,c&&n!==null&&(c=31-Ot(a),e=f.hiddenUpdates,o=e[c],o===null?e[c]=[n]:o.push(n),n.lane=a|536870912),f):null}function nl(e){if(50<co)throw co=0,df=null,Error(s(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var Os={};function Dv(e,n,a,o){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function qn(e,n,a,o){return new Dv(e,n,a,o)}function ou(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Pi(e,n){var a=e.alternate;return a===null?(a=qn(e.tag,n,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=n,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,n=e.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function rp(e,n){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,n=a.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function il(e,n,a,o,c,f){var S=0;if(o=e,typeof e=="function")ou(e)&&(S=1);else if(typeof e=="string")S=Lx(e,a,W.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case D:return e=qn(31,a,n,c),e.elementType=D,e.lanes=f,e;case E:return $a(a.children,c,f,n);case R:S=8,c|=24;break;case y:return e=qn(12,a,n,c|2),e.elementType=y,e.lanes=f,e;case F:return e=qn(13,a,n,c),e.elementType=F,e.lanes=f,e;case k:return e=qn(19,a,n,c),e.elementType=k,e.lanes=f,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case v:case L:S=10;break t;case z:S=9;break t;case w:S=11;break t;case I:S=14;break t;case q:S=16,o=null;break t}S=29,a=Error(s(130,e===null?"null":typeof e,"")),o=null}return n=qn(S,a,n,c),n.elementType=e,n.type=o,n.lanes=f,n}function $a(e,n,a,o){return e=qn(7,e,o,n),e.lanes=a,e}function lu(e,n,a){return e=qn(6,e,null,n),e.lanes=a,e}function cu(e,n,a){return n=qn(4,e.children!==null?e.children:[],e.key,n),n.lanes=a,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var Ps=[],zs=0,al=null,sl=0,ii=[],ai=0,ts=null,zi=1,Ii="";function es(e,n){Ps[zs++]=sl,Ps[zs++]=al,al=e,sl=n}function op(e,n,a){ii[ai++]=zi,ii[ai++]=Ii,ii[ai++]=ts,ts=e;var o=zi;e=Ii;var c=32-Ot(o)-1;o&=~(1<<c),a+=1;var f=32-Ot(n)+c;if(30<f){var S=c-c%5;f=(o&(1<<S)-1).toString(32),o>>=S,c-=S,zi=1<<32-Ot(n)+c|a<<c|o,Ii=f+e}else zi=1<<f|a<<c|o,Ii=e}function uu(e){e.return!==null&&(es(e,1),op(e,1,0))}function fu(e){for(;e===al;)al=Ps[--zs],Ps[zs]=null,sl=Ps[--zs],Ps[zs]=null;for(;e===ts;)ts=ii[--ai],ii[ai]=null,Ii=ii[--ai],ii[ai]=null,zi=ii[--ai],ii[ai]=null}var Ln=null,je=null,De=!1,ns=null,Mi=!1,hu=Error(s(519));function is(e){var n=Error(s(418,""));throw Gr(ei(n,e)),hu}function lp(e){var n=e.stateNode,a=e.type,o=e.memoizedProps;switch(n[rn]=e,n[yn]=o,a){case"dialog":me("cancel",n),me("close",n);break;case"iframe":case"object":case"embed":me("load",n);break;case"video":case"audio":for(a=0;a<fo.length;a++)me(fo[a],n);break;case"source":me("error",n);break;case"img":case"image":case"link":me("error",n),me("load",n);break;case"details":me("toggle",n);break;case"input":me("invalid",n),He(n,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0),qe(n);break;case"select":me("invalid",n);break;case"textarea":me("invalid",n),Mn(n,o.value,o.defaultValue,o.children),qe(n)}a=o.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||o.suppressHydrationWarning===!0||bg(n.textContent,a)?(o.popover!=null&&(me("beforetoggle",n),me("toggle",n)),o.onScroll!=null&&me("scroll",n),o.onScrollEnd!=null&&me("scrollend",n),o.onClick!=null&&(n.onclick=Fl),n=!0):n=!1,n||is(e)}function cp(e){for(Ln=e.return;Ln;)switch(Ln.tag){case 5:case 13:Mi=!1;return;case 27:case 3:Mi=!0;return;default:Ln=Ln.return}}function Fr(e){if(e!==Ln)return!1;if(!De)return cp(e),De=!0,!1;var n=e.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||wf(e.type,e.memoizedProps)),a=!a),a&&je&&is(e),cp(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));t:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8)if(a=e.data,a==="/$"){if(n===0){je=di(e.nextSibling);break t}n--}else a!=="$"&&a!=="$!"&&a!=="$?"||n++;e=e.nextSibling}je=null}}else n===27?(n=je,wa(e.type)?(e=Nf,Nf=null,je=e):je=n):je=Ln?di(e.stateNode.nextSibling):null;return!0}function Hr(){je=Ln=null,De=!1}function up(){var e=ns;return e!==null&&(Hn===null?Hn=e:Hn.push.apply(Hn,e),ns=null),e}function Gr(e){ns===null?ns=[e]:ns.push(e)}var du=J(null),as=null,Bi=null;function pa(e,n,a){St(du,n._currentValue),n._currentValue=a}function Fi(e){e._currentValue=du.current,gt(du)}function pu(e,n,a){for(;e!==null;){var o=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,o!==null&&(o.childLanes|=n)):o!==null&&(o.childLanes&n)!==n&&(o.childLanes|=n),e===a)break;e=e.return}}function mu(e,n,a,o){var c=e.child;for(c!==null&&(c.return=e);c!==null;){var f=c.dependencies;if(f!==null){var S=c.child;f=f.firstContext;t:for(;f!==null;){var b=f;f=c;for(var P=0;P<n.length;P++)if(b.context===n[P]){f.lanes|=a,b=f.alternate,b!==null&&(b.lanes|=a),pu(f.return,a,e),o||(S=null);break t}f=b.next}}else if(c.tag===18){if(S=c.return,S===null)throw Error(s(341));S.lanes|=a,f=S.alternate,f!==null&&(f.lanes|=a),pu(S,a,e),S=null}else S=c.child;if(S!==null)S.return=c;else for(S=c;S!==null;){if(S===e){S=null;break}if(c=S.sibling,c!==null){c.return=S.return,S=c;break}S=S.return}c=S}}function Vr(e,n,a,o){e=null;for(var c=n,f=!1;c!==null;){if(!f){if((c.flags&524288)!==0)f=!0;else if((c.flags&262144)!==0)break}if(c.tag===10){var S=c.alternate;if(S===null)throw Error(s(387));if(S=S.memoizedProps,S!==null){var b=c.type;Yn(c.pendingProps.value,S.value)||(e!==null?e.push(b):e=[b])}}else if(c===At.current){if(S=c.alternate,S===null)throw Error(s(387));S.memoizedState.memoizedState!==c.memoizedState.memoizedState&&(e!==null?e.push(vo):e=[vo])}c=c.return}e!==null&&mu(n,e,a,o),n.flags|=262144}function rl(e){for(e=e.firstContext;e!==null;){if(!Yn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function ss(e){as=e,Bi=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Cn(e){return fp(as,e)}function ol(e,n){return as===null&&ss(e),fp(e,n)}function fp(e,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},Bi===null){if(e===null)throw Error(s(308));Bi=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else Bi=Bi.next=n;return a}var Uv=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(a,o){e.push(o)}};this.abort=function(){n.aborted=!0,e.forEach(function(a){return a()})}},Lv=r.unstable_scheduleCallback,Nv=r.unstable_NormalPriority,ln={$$typeof:L,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function gu(){return{controller:new Uv,data:new Map,refCount:0}}function kr(e){e.refCount--,e.refCount===0&&Lv(Nv,function(){e.controller.abort()})}var Xr=null,_u=0,Is=0,Bs=null;function Ov(e,n){if(Xr===null){var a=Xr=[];_u=0,Is=Sf(),Bs={status:"pending",value:void 0,then:function(o){a.push(o)}}}return _u++,n.then(hp,hp),n}function hp(){if(--_u===0&&Xr!==null){Bs!==null&&(Bs.status="fulfilled");var e=Xr;Xr=null,Is=0,Bs=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function Pv(e,n){var a=[],o={status:"pending",value:null,reason:null,then:function(c){a.push(c)}};return e.then(function(){o.status="fulfilled",o.value=n;for(var c=0;c<a.length;c++)(0,a[c])(n)},function(c){for(o.status="rejected",o.reason=c,c=0;c<a.length;c++)(0,a[c])(void 0)}),o}var dp=N.S;N.S=function(e,n){typeof n=="object"&&n!==null&&typeof n.then=="function"&&Ov(e,n),dp!==null&&dp(e,n)};var rs=J(null);function vu(){var e=rs.current;return e!==null?e:Xe.pooledCache}function ll(e,n){n===null?St(rs,rs.current):St(rs,n.pool)}function pp(){var e=vu();return e===null?null:{parent:ln._currentValue,pool:e}}var Wr=Error(s(460)),mp=Error(s(474)),cl=Error(s(542)),xu={then:function(){}};function gp(e){return e=e.status,e==="fulfilled"||e==="rejected"}function ul(){}function _p(e,n,a){switch(a=e[a],a===void 0?e.push(n):a!==n&&(n.then(ul,ul),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,xp(e),e;default:if(typeof n.status=="string")n.then(ul,ul);else{if(e=Xe,e!==null&&100<e.shellSuspendCounter)throw Error(s(482));e=n,e.status="pending",e.then(function(o){if(n.status==="pending"){var c=n;c.status="fulfilled",c.value=o}},function(o){if(n.status==="pending"){var c=n;c.status="rejected",c.reason=o}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,xp(e),e}throw Yr=n,Wr}}var Yr=null;function vp(){if(Yr===null)throw Error(s(459));var e=Yr;return Yr=null,e}function xp(e){if(e===Wr||e===cl)throw Error(s(483))}var ma=!1;function Su(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function yu(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function ga(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function _a(e,n,a){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,(Ne&2)!==0){var c=o.pending;return c===null?n.next=n:(n.next=c.next,c.next=n),o.pending=n,n=nl(e),sp(e,null,a),n}return el(e,o,n,a),nl(e)}function qr(e,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var o=n.lanes;o&=e.pendingLanes,a|=o,n.lanes=a,Bt(e,a)}}function Mu(e,n){var a=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,a===o)){var c=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var S={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?c=f=S:f=f.next=S,a=a.next}while(a!==null);f===null?c=f=n:f=f.next=n}else c=f=n;a={baseState:o.baseState,firstBaseUpdate:c,lastBaseUpdate:f,shared:o.shared,callbacks:o.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=n:e.next=n,a.lastBaseUpdate=n}var Eu=!1;function jr(){if(Eu){var e=Bs;if(e!==null)throw e}}function Zr(e,n,a,o){Eu=!1;var c=e.updateQueue;ma=!1;var f=c.firstBaseUpdate,S=c.lastBaseUpdate,b=c.shared.pending;if(b!==null){c.shared.pending=null;var P=b,tt=P.next;P.next=null,S===null?f=tt:S.next=tt,S=P;var ut=e.alternate;ut!==null&&(ut=ut.updateQueue,b=ut.lastBaseUpdate,b!==S&&(b===null?ut.firstBaseUpdate=tt:b.next=tt,ut.lastBaseUpdate=P))}if(f!==null){var _t=c.baseState;S=0,ut=tt=P=null,b=f;do{var nt=b.lane&-536870913,it=nt!==b.lane;if(it?(Me&nt)===nt:(o&nt)===nt){nt!==0&&nt===Is&&(Eu=!0),ut!==null&&(ut=ut.next={lane:0,tag:b.tag,payload:b.payload,callback:null,next:null});t:{var ne=e,$t=b;nt=n;var Ie=a;switch($t.tag){case 1:if(ne=$t.payload,typeof ne=="function"){_t=ne.call(Ie,_t,nt);break t}_t=ne;break t;case 3:ne.flags=ne.flags&-65537|128;case 0:if(ne=$t.payload,nt=typeof ne=="function"?ne.call(Ie,_t,nt):ne,nt==null)break t;_t=g({},_t,nt);break t;case 2:ma=!0}}nt=b.callback,nt!==null&&(e.flags|=64,it&&(e.flags|=8192),it=c.callbacks,it===null?c.callbacks=[nt]:it.push(nt))}else it={lane:nt,tag:b.tag,payload:b.payload,callback:b.callback,next:null},ut===null?(tt=ut=it,P=_t):ut=ut.next=it,S|=nt;if(b=b.next,b===null){if(b=c.shared.pending,b===null)break;it=b,b=it.next,it.next=null,c.lastBaseUpdate=it,c.shared.pending=null}}while(!0);ut===null&&(P=_t),c.baseState=P,c.firstBaseUpdate=tt,c.lastBaseUpdate=ut,f===null&&(c.shared.lanes=0),ba|=S,e.lanes=S,e.memoizedState=_t}}function Sp(e,n){if(typeof e!="function")throw Error(s(191,e));e.call(n)}function yp(e,n){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)Sp(a[e],n)}var Fs=J(null),fl=J(0);function Mp(e,n){e=Yi,St(fl,e),St(Fs,n),Yi=e|n.baseLanes}function Tu(){St(fl,Yi),St(Fs,Fs.current)}function bu(){Yi=fl.current,gt(Fs),gt(fl)}var va=0,ue=null,Pe=null,nn=null,hl=!1,Hs=!1,os=!1,dl=0,Kr=0,Gs=null,zv=0;function Qe(){throw Error(s(321))}function Au(e,n){if(n===null)return!1;for(var a=0;a<n.length&&a<e.length;a++)if(!Yn(e[a],n[a]))return!1;return!0}function Ru(e,n,a,o,c,f){return va=f,ue=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,N.H=e===null||e.memoizedState===null?sm:rm,os=!1,f=a(o,c),os=!1,Hs&&(f=Tp(n,a,o,c)),Ep(e),f}function Ep(e){N.H=xl;var n=Pe!==null&&Pe.next!==null;if(va=0,nn=Pe=ue=null,hl=!1,Kr=0,Gs=null,n)throw Error(s(300));e===null||gn||(e=e.dependencies,e!==null&&rl(e)&&(gn=!0))}function Tp(e,n,a,o){ue=e;var c=0;do{if(Hs&&(Gs=null),Kr=0,Hs=!1,25<=c)throw Error(s(301));if(c+=1,nn=Pe=null,e.updateQueue!=null){var f=e.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}N.H=kv,f=n(a,o)}while(Hs);return f}function Iv(){var e=N.H,n=e.useState()[0];return n=typeof n.then=="function"?Qr(n):n,e=e.useState()[0],(Pe!==null?Pe.memoizedState:null)!==e&&(ue.flags|=1024),n}function Cu(){var e=dl!==0;return dl=0,e}function wu(e,n,a){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a}function Du(e){if(hl){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}hl=!1}va=0,nn=Pe=ue=null,Hs=!1,Kr=dl=0,Gs=null}function Bn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return nn===null?ue.memoizedState=nn=e:nn=nn.next=e,nn}function an(){if(Pe===null){var e=ue.alternate;e=e!==null?e.memoizedState:null}else e=Pe.next;var n=nn===null?ue.memoizedState:nn.next;if(n!==null)nn=n,Pe=e;else{if(e===null)throw ue.alternate===null?Error(s(467)):Error(s(310));Pe=e,e={memoizedState:Pe.memoizedState,baseState:Pe.baseState,baseQueue:Pe.baseQueue,queue:Pe.queue,next:null},nn===null?ue.memoizedState=nn=e:nn=nn.next=e}return nn}function Uu(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Qr(e){var n=Kr;return Kr+=1,Gs===null&&(Gs=[]),e=_p(Gs,e,n),n=ue,(nn===null?n.memoizedState:nn.next)===null&&(n=n.alternate,N.H=n===null||n.memoizedState===null?sm:rm),e}function pl(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Qr(e);if(e.$$typeof===L)return Cn(e)}throw Error(s(438,String(e)))}function Lu(e){var n=null,a=ue.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var o=ue.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(n={data:o.data.map(function(c){return c.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=Uu(),ue.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(e),o=0;o<e;o++)a[o]=C;return n.index++,a}function Hi(e,n){return typeof n=="function"?n(e):n}function ml(e){var n=an();return Nu(n,Pe,e)}function Nu(e,n,a){var o=e.queue;if(o===null)throw Error(s(311));o.lastRenderedReducer=a;var c=e.baseQueue,f=o.pending;if(f!==null){if(c!==null){var S=c.next;c.next=f.next,f.next=S}n.baseQueue=c=f,o.pending=null}if(f=e.baseState,c===null)e.memoizedState=f;else{n=c.next;var b=S=null,P=null,tt=n,ut=!1;do{var _t=tt.lane&-536870913;if(_t!==tt.lane?(Me&_t)===_t:(va&_t)===_t){var nt=tt.revertLane;if(nt===0)P!==null&&(P=P.next={lane:0,revertLane:0,action:tt.action,hasEagerState:tt.hasEagerState,eagerState:tt.eagerState,next:null}),_t===Is&&(ut=!0);else if((va&nt)===nt){tt=tt.next,nt===Is&&(ut=!0);continue}else _t={lane:0,revertLane:tt.revertLane,action:tt.action,hasEagerState:tt.hasEagerState,eagerState:tt.eagerState,next:null},P===null?(b=P=_t,S=f):P=P.next=_t,ue.lanes|=nt,ba|=nt;_t=tt.action,os&&a(f,_t),f=tt.hasEagerState?tt.eagerState:a(f,_t)}else nt={lane:_t,revertLane:tt.revertLane,action:tt.action,hasEagerState:tt.hasEagerState,eagerState:tt.eagerState,next:null},P===null?(b=P=nt,S=f):P=P.next=nt,ue.lanes|=_t,ba|=_t;tt=tt.next}while(tt!==null&&tt!==n);if(P===null?S=f:P.next=b,!Yn(f,e.memoizedState)&&(gn=!0,ut&&(a=Bs,a!==null)))throw a;e.memoizedState=f,e.baseState=S,e.baseQueue=P,o.lastRenderedState=f}return c===null&&(o.lanes=0),[e.memoizedState,o.dispatch]}function Ou(e){var n=an(),a=n.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=e;var o=a.dispatch,c=a.pending,f=n.memoizedState;if(c!==null){a.pending=null;var S=c=c.next;do f=e(f,S.action),S=S.next;while(S!==c);Yn(f,n.memoizedState)||(gn=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,o]}function bp(e,n,a){var o=ue,c=an(),f=De;if(f){if(a===void 0)throw Error(s(407));a=a()}else a=n();var S=!Yn((Pe||c).memoizedState,a);S&&(c.memoizedState=a,gn=!0),c=c.queue;var b=Cp.bind(null,o,c,e);if(Jr(2048,8,b,[e]),c.getSnapshot!==n||S||nn!==null&&nn.memoizedState.tag&1){if(o.flags|=2048,Vs(9,gl(),Rp.bind(null,o,c,a,n),null),Xe===null)throw Error(s(349));f||(va&124)!==0||Ap(o,n,a)}return a}function Ap(e,n,a){e.flags|=16384,e={getSnapshot:n,value:a},n=ue.updateQueue,n===null?(n=Uu(),ue.updateQueue=n,n.stores=[e]):(a=n.stores,a===null?n.stores=[e]:a.push(e))}function Rp(e,n,a,o){n.value=a,n.getSnapshot=o,wp(n)&&Dp(e)}function Cp(e,n,a){return a(function(){wp(n)&&Dp(e)})}function wp(e){var n=e.getSnapshot;e=e.value;try{var a=n();return!Yn(e,a)}catch{return!0}}function Dp(e){var n=Ns(e,2);n!==null&&Jn(n,e,2)}function Pu(e){var n=Bn();if(typeof e=="function"){var a=e;if(e=a(),os){ct(!0);try{a()}finally{ct(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Hi,lastRenderedState:e},n}function Up(e,n,a,o){return e.baseState=a,Nu(e,Pe,typeof o=="function"?o:Hi)}function Bv(e,n,a,o,c){if(vl(e))throw Error(s(485));if(e=n.action,e!==null){var f={payload:c,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(S){f.listeners.push(S)}};N.T!==null?a(!0):f.isTransition=!1,o(f),a=n.pending,a===null?(f.next=n.pending=f,Lp(n,f)):(f.next=a.next,n.pending=a.next=f)}}function Lp(e,n){var a=n.action,o=n.payload,c=e.state;if(n.isTransition){var f=N.T,S={};N.T=S;try{var b=a(c,o),P=N.S;P!==null&&P(S,b),Np(e,n,b)}catch(tt){zu(e,n,tt)}finally{N.T=f}}else try{f=a(c,o),Np(e,n,f)}catch(tt){zu(e,n,tt)}}function Np(e,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(o){Op(e,n,o)},function(o){return zu(e,n,o)}):Op(e,n,a)}function Op(e,n,a){n.status="fulfilled",n.value=a,Pp(n),e.state=a,n=e.pending,n!==null&&(a=n.next,a===n?e.pending=null:(a=a.next,n.next=a,Lp(e,a)))}function zu(e,n,a){var o=e.pending;if(e.pending=null,o!==null){o=o.next;do n.status="rejected",n.reason=a,Pp(n),n=n.next;while(n!==o)}e.action=null}function Pp(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function zp(e,n){return n}function Ip(e,n){if(De){var a=Xe.formState;if(a!==null){t:{var o=ue;if(De){if(je){e:{for(var c=je,f=Mi;c.nodeType!==8;){if(!f){c=null;break e}if(c=di(c.nextSibling),c===null){c=null;break e}}f=c.data,c=f==="F!"||f==="F"?c:null}if(c){je=di(c.nextSibling),o=c.data==="F!";break t}}is(o)}o=!1}o&&(n=a[0])}}return a=Bn(),a.memoizedState=a.baseState=n,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:zp,lastRenderedState:n},a.queue=o,a=nm.bind(null,ue,o),o.dispatch=a,o=Pu(!1),f=Gu.bind(null,ue,!1,o.queue),o=Bn(),c={state:n,dispatch:null,action:e,pending:null},o.queue=c,a=Bv.bind(null,ue,c,f,a),c.dispatch=a,o.memoizedState=e,[n,a,!1]}function Bp(e){var n=an();return Fp(n,Pe,e)}function Fp(e,n,a){if(n=Nu(e,n,zp)[0],e=ml(Hi)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var o=Qr(n)}catch(S){throw S===Wr?cl:S}else o=n;n=an();var c=n.queue,f=c.dispatch;return a!==n.memoizedState&&(ue.flags|=2048,Vs(9,gl(),Fv.bind(null,c,a),null)),[o,f,e]}function Fv(e,n){e.action=n}function Hp(e){var n=an(),a=Pe;if(a!==null)return Fp(n,a,e);an(),n=n.memoizedState,a=an();var o=a.queue.dispatch;return a.memoizedState=e,[n,o,!1]}function Vs(e,n,a,o){return e={tag:e,create:a,deps:o,inst:n,next:null},n=ue.updateQueue,n===null&&(n=Uu(),ue.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=e.next=e:(o=a.next,a.next=e,e.next=o,n.lastEffect=e),e}function gl(){return{destroy:void 0,resource:void 0}}function Gp(){return an().memoizedState}function _l(e,n,a,o){var c=Bn();o=o===void 0?null:o,ue.flags|=e,c.memoizedState=Vs(1|n,gl(),a,o)}function Jr(e,n,a,o){var c=an();o=o===void 0?null:o;var f=c.memoizedState.inst;Pe!==null&&o!==null&&Au(o,Pe.memoizedState.deps)?c.memoizedState=Vs(n,f,a,o):(ue.flags|=e,c.memoizedState=Vs(1|n,f,a,o))}function Vp(e,n){_l(8390656,8,e,n)}function kp(e,n){Jr(2048,8,e,n)}function Xp(e,n){return Jr(4,2,e,n)}function Wp(e,n){return Jr(4,4,e,n)}function Yp(e,n){if(typeof n=="function"){e=e();var a=n(e);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function qp(e,n,a){a=a!=null?a.concat([e]):null,Jr(4,4,Yp.bind(null,n,e),a)}function Iu(){}function jp(e,n){var a=an();n=n===void 0?null:n;var o=a.memoizedState;return n!==null&&Au(n,o[1])?o[0]:(a.memoizedState=[e,n],e)}function Zp(e,n){var a=an();n=n===void 0?null:n;var o=a.memoizedState;if(n!==null&&Au(n,o[1]))return o[0];if(o=e(),os){ct(!0);try{e()}finally{ct(!1)}}return a.memoizedState=[o,n],o}function Bu(e,n,a){return a===void 0||(va&1073741824)!==0?e.memoizedState=n:(e.memoizedState=a,e=Jm(),ue.lanes|=e,ba|=e,a)}function Kp(e,n,a,o){return Yn(a,n)?a:Fs.current!==null?(e=Bu(e,a,o),Yn(e,n)||(gn=!0),e):(va&42)===0?(gn=!0,e.memoizedState=a):(e=Jm(),ue.lanes|=e,ba|=e,n)}function Qp(e,n,a,o,c){var f=Y.p;Y.p=f!==0&&8>f?f:8;var S=N.T,b={};N.T=b,Gu(e,!1,n,a);try{var P=c(),tt=N.S;if(tt!==null&&tt(b,P),P!==null&&typeof P=="object"&&typeof P.then=="function"){var ut=Pv(P,o);$r(e,n,ut,Qn(e))}else $r(e,n,o,Qn(e))}catch(_t){$r(e,n,{then:function(){},status:"rejected",reason:_t},Qn())}finally{Y.p=f,N.T=S}}function Hv(){}function Fu(e,n,a,o){if(e.tag!==5)throw Error(s(476));var c=Jp(e).queue;Qp(e,c,n,X,a===null?Hv:function(){return $p(e),a(o)})}function Jp(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:X,baseState:X,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Hi,lastRenderedState:X},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Hi,lastRenderedState:a},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function $p(e){var n=Jp(e).next.queue;$r(e,n,{},Qn())}function Hu(){return Cn(vo)}function tm(){return an().memoizedState}function em(){return an().memoizedState}function Gv(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var a=Qn();e=ga(a);var o=_a(n,e,a);o!==null&&(Jn(o,n,a),qr(o,n,a)),n={cache:gu()},e.payload=n;return}n=n.return}}function Vv(e,n,a){var o=Qn();a={lane:o,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null},vl(e)?im(n,a):(a=ru(e,n,a,o),a!==null&&(Jn(a,e,o),am(a,n,o)))}function nm(e,n,a){var o=Qn();$r(e,n,a,o)}function $r(e,n,a,o){var c={lane:o,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null};if(vl(e))im(n,c);else{var f=e.alternate;if(e.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var S=n.lastRenderedState,b=f(S,a);if(c.hasEagerState=!0,c.eagerState=b,Yn(b,S))return el(e,n,c,0),Xe===null&&tl(),!1}catch{}finally{}if(a=ru(e,n,c,o),a!==null)return Jn(a,e,o),am(a,n,o),!0}return!1}function Gu(e,n,a,o){if(o={lane:2,revertLane:Sf(),action:o,hasEagerState:!1,eagerState:null,next:null},vl(e)){if(n)throw Error(s(479))}else n=ru(e,a,o,2),n!==null&&Jn(n,e,2)}function vl(e){var n=e.alternate;return e===ue||n!==null&&n===ue}function im(e,n){Hs=hl=!0;var a=e.pending;a===null?n.next=n:(n.next=a.next,a.next=n),e.pending=n}function am(e,n,a){if((a&4194048)!==0){var o=n.lanes;o&=e.pendingLanes,a|=o,n.lanes=a,Bt(e,a)}}var xl={readContext:Cn,use:pl,useCallback:Qe,useContext:Qe,useEffect:Qe,useImperativeHandle:Qe,useLayoutEffect:Qe,useInsertionEffect:Qe,useMemo:Qe,useReducer:Qe,useRef:Qe,useState:Qe,useDebugValue:Qe,useDeferredValue:Qe,useTransition:Qe,useSyncExternalStore:Qe,useId:Qe,useHostTransitionStatus:Qe,useFormState:Qe,useActionState:Qe,useOptimistic:Qe,useMemoCache:Qe,useCacheRefresh:Qe},sm={readContext:Cn,use:pl,useCallback:function(e,n){return Bn().memoizedState=[e,n===void 0?null:n],e},useContext:Cn,useEffect:Vp,useImperativeHandle:function(e,n,a){a=a!=null?a.concat([e]):null,_l(4194308,4,Yp.bind(null,n,e),a)},useLayoutEffect:function(e,n){return _l(4194308,4,e,n)},useInsertionEffect:function(e,n){_l(4,2,e,n)},useMemo:function(e,n){var a=Bn();n=n===void 0?null:n;var o=e();if(os){ct(!0);try{e()}finally{ct(!1)}}return a.memoizedState=[o,n],o},useReducer:function(e,n,a){var o=Bn();if(a!==void 0){var c=a(n);if(os){ct(!0);try{a(n)}finally{ct(!1)}}}else c=n;return o.memoizedState=o.baseState=c,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:c},o.queue=e,e=e.dispatch=Vv.bind(null,ue,e),[o.memoizedState,e]},useRef:function(e){var n=Bn();return e={current:e},n.memoizedState=e},useState:function(e){e=Pu(e);var n=e.queue,a=nm.bind(null,ue,n);return n.dispatch=a,[e.memoizedState,a]},useDebugValue:Iu,useDeferredValue:function(e,n){var a=Bn();return Bu(a,e,n)},useTransition:function(){var e=Pu(!1);return e=Qp.bind(null,ue,e.queue,!0,!1),Bn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,a){var o=ue,c=Bn();if(De){if(a===void 0)throw Error(s(407));a=a()}else{if(a=n(),Xe===null)throw Error(s(349));(Me&124)!==0||Ap(o,n,a)}c.memoizedState=a;var f={value:a,getSnapshot:n};return c.queue=f,Vp(Cp.bind(null,o,f,e),[e]),o.flags|=2048,Vs(9,gl(),Rp.bind(null,o,f,a,n),null),a},useId:function(){var e=Bn(),n=Xe.identifierPrefix;if(De){var a=Ii,o=zi;a=(o&~(1<<32-Ot(o)-1)).toString(32)+a,n="«"+n+"R"+a,a=dl++,0<a&&(n+="H"+a.toString(32)),n+="»"}else a=zv++,n="«"+n+"r"+a.toString(32)+"»";return e.memoizedState=n},useHostTransitionStatus:Hu,useFormState:Ip,useActionState:Ip,useOptimistic:function(e){var n=Bn();n.memoizedState=n.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=Gu.bind(null,ue,!0,a),a.dispatch=n,[e,n]},useMemoCache:Lu,useCacheRefresh:function(){return Bn().memoizedState=Gv.bind(null,ue)}},rm={readContext:Cn,use:pl,useCallback:jp,useContext:Cn,useEffect:kp,useImperativeHandle:qp,useInsertionEffect:Xp,useLayoutEffect:Wp,useMemo:Zp,useReducer:ml,useRef:Gp,useState:function(){return ml(Hi)},useDebugValue:Iu,useDeferredValue:function(e,n){var a=an();return Kp(a,Pe.memoizedState,e,n)},useTransition:function(){var e=ml(Hi)[0],n=an().memoizedState;return[typeof e=="boolean"?e:Qr(e),n]},useSyncExternalStore:bp,useId:tm,useHostTransitionStatus:Hu,useFormState:Bp,useActionState:Bp,useOptimistic:function(e,n){var a=an();return Up(a,Pe,e,n)},useMemoCache:Lu,useCacheRefresh:em},kv={readContext:Cn,use:pl,useCallback:jp,useContext:Cn,useEffect:kp,useImperativeHandle:qp,useInsertionEffect:Xp,useLayoutEffect:Wp,useMemo:Zp,useReducer:Ou,useRef:Gp,useState:function(){return Ou(Hi)},useDebugValue:Iu,useDeferredValue:function(e,n){var a=an();return Pe===null?Bu(a,e,n):Kp(a,Pe.memoizedState,e,n)},useTransition:function(){var e=Ou(Hi)[0],n=an().memoizedState;return[typeof e=="boolean"?e:Qr(e),n]},useSyncExternalStore:bp,useId:tm,useHostTransitionStatus:Hu,useFormState:Hp,useActionState:Hp,useOptimistic:function(e,n){var a=an();return Pe!==null?Up(a,Pe,e,n):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:Lu,useCacheRefresh:em},ks=null,to=0;function Sl(e){var n=to;return to+=1,ks===null&&(ks=[]),_p(ks,e,n)}function eo(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function yl(e,n){throw n.$$typeof===x?Error(s(525)):(e=Object.prototype.toString.call(n),Error(s(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function om(e){var n=e._init;return n(e._payload)}function lm(e){function n(j,H){if(e){var Q=j.deletions;Q===null?(j.deletions=[H],j.flags|=16):Q.push(H)}}function a(j,H){if(!e)return null;for(;H!==null;)n(j,H),H=H.sibling;return null}function o(j){for(var H=new Map;j!==null;)j.key!==null?H.set(j.key,j):H.set(j.index,j),j=j.sibling;return H}function c(j,H){return j=Pi(j,H),j.index=0,j.sibling=null,j}function f(j,H,Q){return j.index=Q,e?(Q=j.alternate,Q!==null?(Q=Q.index,Q<H?(j.flags|=67108866,H):Q):(j.flags|=67108866,H)):(j.flags|=1048576,H)}function S(j){return e&&j.alternate===null&&(j.flags|=67108866),j}function b(j,H,Q,dt){return H===null||H.tag!==6?(H=lu(Q,j.mode,dt),H.return=j,H):(H=c(H,Q),H.return=j,H)}function P(j,H,Q,dt){var Ft=Q.type;return Ft===E?ut(j,H,Q.props.children,dt,Q.key):H!==null&&(H.elementType===Ft||typeof Ft=="object"&&Ft!==null&&Ft.$$typeof===q&&om(Ft)===H.type)?(H=c(H,Q.props),eo(H,Q),H.return=j,H):(H=il(Q.type,Q.key,Q.props,null,j.mode,dt),eo(H,Q),H.return=j,H)}function tt(j,H,Q,dt){return H===null||H.tag!==4||H.stateNode.containerInfo!==Q.containerInfo||H.stateNode.implementation!==Q.implementation?(H=cu(Q,j.mode,dt),H.return=j,H):(H=c(H,Q.children||[]),H.return=j,H)}function ut(j,H,Q,dt,Ft){return H===null||H.tag!==7?(H=$a(Q,j.mode,dt,Ft),H.return=j,H):(H=c(H,Q),H.return=j,H)}function _t(j,H,Q){if(typeof H=="string"&&H!==""||typeof H=="number"||typeof H=="bigint")return H=lu(""+H,j.mode,Q),H.return=j,H;if(typeof H=="object"&&H!==null){switch(H.$$typeof){case _:return Q=il(H.type,H.key,H.props,null,j.mode,Q),eo(Q,H),Q.return=j,Q;case M:return H=cu(H,j.mode,Q),H.return=j,H;case q:var dt=H._init;return H=dt(H._payload),_t(j,H,Q)}if(ft(H)||lt(H))return H=$a(H,j.mode,Q,null),H.return=j,H;if(typeof H.then=="function")return _t(j,Sl(H),Q);if(H.$$typeof===L)return _t(j,ol(j,H),Q);yl(j,H)}return null}function nt(j,H,Q,dt){var Ft=H!==null?H.key:null;if(typeof Q=="string"&&Q!==""||typeof Q=="number"||typeof Q=="bigint")return Ft!==null?null:b(j,H,""+Q,dt);if(typeof Q=="object"&&Q!==null){switch(Q.$$typeof){case _:return Q.key===Ft?P(j,H,Q,dt):null;case M:return Q.key===Ft?tt(j,H,Q,dt):null;case q:return Ft=Q._init,Q=Ft(Q._payload),nt(j,H,Q,dt)}if(ft(Q)||lt(Q))return Ft!==null?null:ut(j,H,Q,dt,null);if(typeof Q.then=="function")return nt(j,H,Sl(Q),dt);if(Q.$$typeof===L)return nt(j,H,ol(j,Q),dt);yl(j,Q)}return null}function it(j,H,Q,dt,Ft){if(typeof dt=="string"&&dt!==""||typeof dt=="number"||typeof dt=="bigint")return j=j.get(Q)||null,b(H,j,""+dt,Ft);if(typeof dt=="object"&&dt!==null){switch(dt.$$typeof){case _:return j=j.get(dt.key===null?Q:dt.key)||null,P(H,j,dt,Ft);case M:return j=j.get(dt.key===null?Q:dt.key)||null,tt(H,j,dt,Ft);case q:var fe=dt._init;return dt=fe(dt._payload),it(j,H,Q,dt,Ft)}if(ft(dt)||lt(dt))return j=j.get(Q)||null,ut(H,j,dt,Ft,null);if(typeof dt.then=="function")return it(j,H,Q,Sl(dt),Ft);if(dt.$$typeof===L)return it(j,H,Q,ol(H,dt),Ft);yl(H,dt)}return null}function ne(j,H,Q,dt){for(var Ft=null,fe=null,Yt=H,ee=H=0,vn=null;Yt!==null&&ee<Q.length;ee++){Yt.index>ee?(vn=Yt,Yt=null):vn=Yt.sibling;var Re=nt(j,Yt,Q[ee],dt);if(Re===null){Yt===null&&(Yt=vn);break}e&&Yt&&Re.alternate===null&&n(j,Yt),H=f(Re,H,ee),fe===null?Ft=Re:fe.sibling=Re,fe=Re,Yt=vn}if(ee===Q.length)return a(j,Yt),De&&es(j,ee),Ft;if(Yt===null){for(;ee<Q.length;ee++)Yt=_t(j,Q[ee],dt),Yt!==null&&(H=f(Yt,H,ee),fe===null?Ft=Yt:fe.sibling=Yt,fe=Yt);return De&&es(j,ee),Ft}for(Yt=o(Yt);ee<Q.length;ee++)vn=it(Yt,j,ee,Q[ee],dt),vn!==null&&(e&&vn.alternate!==null&&Yt.delete(vn.key===null?ee:vn.key),H=f(vn,H,ee),fe===null?Ft=vn:fe.sibling=vn,fe=vn);return e&&Yt.forEach(function(Oa){return n(j,Oa)}),De&&es(j,ee),Ft}function $t(j,H,Q,dt){if(Q==null)throw Error(s(151));for(var Ft=null,fe=null,Yt=H,ee=H=0,vn=null,Re=Q.next();Yt!==null&&!Re.done;ee++,Re=Q.next()){Yt.index>ee?(vn=Yt,Yt=null):vn=Yt.sibling;var Oa=nt(j,Yt,Re.value,dt);if(Oa===null){Yt===null&&(Yt=vn);break}e&&Yt&&Oa.alternate===null&&n(j,Yt),H=f(Oa,H,ee),fe===null?Ft=Oa:fe.sibling=Oa,fe=Oa,Yt=vn}if(Re.done)return a(j,Yt),De&&es(j,ee),Ft;if(Yt===null){for(;!Re.done;ee++,Re=Q.next())Re=_t(j,Re.value,dt),Re!==null&&(H=f(Re,H,ee),fe===null?Ft=Re:fe.sibling=Re,fe=Re);return De&&es(j,ee),Ft}for(Yt=o(Yt);!Re.done;ee++,Re=Q.next())Re=it(Yt,j,ee,Re.value,dt),Re!==null&&(e&&Re.alternate!==null&&Yt.delete(Re.key===null?ee:Re.key),H=f(Re,H,ee),fe===null?Ft=Re:fe.sibling=Re,fe=Re);return e&&Yt.forEach(function(Xx){return n(j,Xx)}),De&&es(j,ee),Ft}function Ie(j,H,Q,dt){if(typeof Q=="object"&&Q!==null&&Q.type===E&&Q.key===null&&(Q=Q.props.children),typeof Q=="object"&&Q!==null){switch(Q.$$typeof){case _:t:{for(var Ft=Q.key;H!==null;){if(H.key===Ft){if(Ft=Q.type,Ft===E){if(H.tag===7){a(j,H.sibling),dt=c(H,Q.props.children),dt.return=j,j=dt;break t}}else if(H.elementType===Ft||typeof Ft=="object"&&Ft!==null&&Ft.$$typeof===q&&om(Ft)===H.type){a(j,H.sibling),dt=c(H,Q.props),eo(dt,Q),dt.return=j,j=dt;break t}a(j,H);break}else n(j,H);H=H.sibling}Q.type===E?(dt=$a(Q.props.children,j.mode,dt,Q.key),dt.return=j,j=dt):(dt=il(Q.type,Q.key,Q.props,null,j.mode,dt),eo(dt,Q),dt.return=j,j=dt)}return S(j);case M:t:{for(Ft=Q.key;H!==null;){if(H.key===Ft)if(H.tag===4&&H.stateNode.containerInfo===Q.containerInfo&&H.stateNode.implementation===Q.implementation){a(j,H.sibling),dt=c(H,Q.children||[]),dt.return=j,j=dt;break t}else{a(j,H);break}else n(j,H);H=H.sibling}dt=cu(Q,j.mode,dt),dt.return=j,j=dt}return S(j);case q:return Ft=Q._init,Q=Ft(Q._payload),Ie(j,H,Q,dt)}if(ft(Q))return ne(j,H,Q,dt);if(lt(Q)){if(Ft=lt(Q),typeof Ft!="function")throw Error(s(150));return Q=Ft.call(Q),$t(j,H,Q,dt)}if(typeof Q.then=="function")return Ie(j,H,Sl(Q),dt);if(Q.$$typeof===L)return Ie(j,H,ol(j,Q),dt);yl(j,Q)}return typeof Q=="string"&&Q!==""||typeof Q=="number"||typeof Q=="bigint"?(Q=""+Q,H!==null&&H.tag===6?(a(j,H.sibling),dt=c(H,Q),dt.return=j,j=dt):(a(j,H),dt=lu(Q,j.mode,dt),dt.return=j,j=dt),S(j)):a(j,H)}return function(j,H,Q,dt){try{to=0;var Ft=Ie(j,H,Q,dt);return ks=null,Ft}catch(Yt){if(Yt===Wr||Yt===cl)throw Yt;var fe=qn(29,Yt,null,j.mode);return fe.lanes=dt,fe.return=j,fe}finally{}}}var Xs=lm(!0),cm=lm(!1),si=J(null),Ei=null;function xa(e){var n=e.alternate;St(cn,cn.current&1),St(si,e),Ei===null&&(n===null||Fs.current!==null||n.memoizedState!==null)&&(Ei=e)}function um(e){if(e.tag===22){if(St(cn,cn.current),St(si,e),Ei===null){var n=e.alternate;n!==null&&n.memoizedState!==null&&(Ei=e)}}else Sa()}function Sa(){St(cn,cn.current),St(si,si.current)}function Gi(e){gt(si),Ei===e&&(Ei=null),gt(cn)}var cn=J(0);function Ml(e){for(var n=e;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||Lf(a)))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}function Vu(e,n,a,o){n=e.memoizedState,a=a(o,n),a=a==null?n:g({},n,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var ku={enqueueSetState:function(e,n,a){e=e._reactInternals;var o=Qn(),c=ga(o);c.payload=n,a!=null&&(c.callback=a),n=_a(e,c,o),n!==null&&(Jn(n,e,o),qr(n,e,o))},enqueueReplaceState:function(e,n,a){e=e._reactInternals;var o=Qn(),c=ga(o);c.tag=1,c.payload=n,a!=null&&(c.callback=a),n=_a(e,c,o),n!==null&&(Jn(n,e,o),qr(n,e,o))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var a=Qn(),o=ga(a);o.tag=2,n!=null&&(o.callback=n),n=_a(e,o,a),n!==null&&(Jn(n,e,a),qr(n,e,a))}};function fm(e,n,a,o,c,f,S){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,f,S):n.prototype&&n.prototype.isPureReactComponent?!Ir(a,o)||!Ir(c,f):!0}function hm(e,n,a,o){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,o),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,o),n.state!==e&&ku.enqueueReplaceState(n,n.state,null)}function ls(e,n){var a=n;if("ref"in n){a={};for(var o in n)o!=="ref"&&(a[o]=n[o])}if(e=e.defaultProps){a===n&&(a=g({},a));for(var c in e)a[c]===void 0&&(a[c]=e[c])}return a}var El=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function dm(e){El(e)}function pm(e){console.error(e)}function mm(e){El(e)}function Tl(e,n){try{var a=e.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(o){setTimeout(function(){throw o})}}function gm(e,n,a){try{var o=e.onCaughtError;o(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(c){setTimeout(function(){throw c})}}function Xu(e,n,a){return a=ga(a),a.tag=3,a.payload={element:null},a.callback=function(){Tl(e,n)},a}function _m(e){return e=ga(e),e.tag=3,e}function vm(e,n,a,o){var c=a.type.getDerivedStateFromError;if(typeof c=="function"){var f=o.value;e.payload=function(){return c(f)},e.callback=function(){gm(n,a,o)}}var S=a.stateNode;S!==null&&typeof S.componentDidCatch=="function"&&(e.callback=function(){gm(n,a,o),typeof c!="function"&&(Aa===null?Aa=new Set([this]):Aa.add(this));var b=o.stack;this.componentDidCatch(o.value,{componentStack:b!==null?b:""})})}function Xv(e,n,a,o,c){if(a.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(n=a.alternate,n!==null&&Vr(n,a,c,!0),a=si.current,a!==null){switch(a.tag){case 13:return Ei===null?mf():a.alternate===null&&Ze===0&&(Ze=3),a.flags&=-257,a.flags|=65536,a.lanes=c,o===xu?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([o]):n.add(o),_f(e,o,c)),!1;case 22:return a.flags|=65536,o===xu?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([o])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([o]):a.add(o)),_f(e,o,c)),!1}throw Error(s(435,a.tag))}return _f(e,o,c),mf(),!1}if(De)return n=si.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=c,o!==hu&&(e=Error(s(422),{cause:o}),Gr(ei(e,a)))):(o!==hu&&(n=Error(s(423),{cause:o}),Gr(ei(n,a))),e=e.current.alternate,e.flags|=65536,c&=-c,e.lanes|=c,o=ei(o,a),c=Xu(e.stateNode,o,c),Mu(e,c),Ze!==4&&(Ze=2)),!1;var f=Error(s(520),{cause:o});if(f=ei(f,a),lo===null?lo=[f]:lo.push(f),Ze!==4&&(Ze=2),n===null)return!0;o=ei(o,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,e=c&-c,a.lanes|=e,e=Xu(a.stateNode,o,e),Mu(a,e),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(Aa===null||!Aa.has(f))))return a.flags|=65536,c&=-c,a.lanes|=c,c=_m(c),vm(c,e,a,o),Mu(a,c),!1}a=a.return}while(a!==null);return!1}var xm=Error(s(461)),gn=!1;function En(e,n,a,o){n.child=e===null?cm(n,null,a,o):Xs(n,e.child,a,o)}function Sm(e,n,a,o,c){a=a.render;var f=n.ref;if("ref"in o){var S={};for(var b in o)b!=="ref"&&(S[b]=o[b])}else S=o;return ss(n),o=Ru(e,n,a,S,f,c),b=Cu(),e!==null&&!gn?(wu(e,n,c),Vi(e,n,c)):(De&&b&&uu(n),n.flags|=1,En(e,n,o,c),n.child)}function ym(e,n,a,o,c){if(e===null){var f=a.type;return typeof f=="function"&&!ou(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,Mm(e,n,f,o,c)):(e=il(a.type,null,o,n,n.mode,c),e.ref=n.ref,e.return=n,n.child=e)}if(f=e.child,!Ju(e,c)){var S=f.memoizedProps;if(a=a.compare,a=a!==null?a:Ir,a(S,o)&&e.ref===n.ref)return Vi(e,n,c)}return n.flags|=1,e=Pi(f,o),e.ref=n.ref,e.return=n,n.child=e}function Mm(e,n,a,o,c){if(e!==null){var f=e.memoizedProps;if(Ir(f,o)&&e.ref===n.ref)if(gn=!1,n.pendingProps=o=f,Ju(e,c))(e.flags&131072)!==0&&(gn=!0);else return n.lanes=e.lanes,Vi(e,n,c)}return Wu(e,n,a,o,c)}function Em(e,n,a){var o=n.pendingProps,c=o.children,f=e!==null?e.memoizedState:null;if(o.mode==="hidden"){if((n.flags&128)!==0){if(o=f!==null?f.baseLanes|a:a,e!==null){for(c=n.child=e.child,f=0;c!==null;)f=f|c.lanes|c.childLanes,c=c.sibling;n.childLanes=f&~o}else n.childLanes=0,n.child=null;return Tm(e,n,o,a)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&ll(n,f!==null?f.cachePool:null),f!==null?Mp(n,f):Tu(),um(n);else return n.lanes=n.childLanes=536870912,Tm(e,n,f!==null?f.baseLanes|a:a,a)}else f!==null?(ll(n,f.cachePool),Mp(n,f),Sa(),n.memoizedState=null):(e!==null&&ll(n,null),Tu(),Sa());return En(e,n,c,a),n.child}function Tm(e,n,a,o){var c=vu();return c=c===null?null:{parent:ln._currentValue,pool:c},n.memoizedState={baseLanes:a,cachePool:c},e!==null&&ll(n,null),Tu(),um(n),e!==null&&Vr(e,n,o,!0),null}function bl(e,n){var a=n.ref;if(a===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(e===null||e.ref!==a)&&(n.flags|=4194816)}}function Wu(e,n,a,o,c){return ss(n),a=Ru(e,n,a,o,void 0,c),o=Cu(),e!==null&&!gn?(wu(e,n,c),Vi(e,n,c)):(De&&o&&uu(n),n.flags|=1,En(e,n,a,c),n.child)}function bm(e,n,a,o,c,f){return ss(n),n.updateQueue=null,a=Tp(n,o,a,c),Ep(e),o=Cu(),e!==null&&!gn?(wu(e,n,f),Vi(e,n,f)):(De&&o&&uu(n),n.flags|=1,En(e,n,a,f),n.child)}function Am(e,n,a,o,c){if(ss(n),n.stateNode===null){var f=Os,S=a.contextType;typeof S=="object"&&S!==null&&(f=Cn(S)),f=new a(o,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=ku,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=o,f.state=n.memoizedState,f.refs={},Su(n),S=a.contextType,f.context=typeof S=="object"&&S!==null?Cn(S):Os,f.state=n.memoizedState,S=a.getDerivedStateFromProps,typeof S=="function"&&(Vu(n,a,S,o),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(S=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),S!==f.state&&ku.enqueueReplaceState(f,f.state,null),Zr(n,o,f,c),jr(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),o=!0}else if(e===null){f=n.stateNode;var b=n.memoizedProps,P=ls(a,b);f.props=P;var tt=f.context,ut=a.contextType;S=Os,typeof ut=="object"&&ut!==null&&(S=Cn(ut));var _t=a.getDerivedStateFromProps;ut=typeof _t=="function"||typeof f.getSnapshotBeforeUpdate=="function",b=n.pendingProps!==b,ut||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(b||tt!==S)&&hm(n,f,o,S),ma=!1;var nt=n.memoizedState;f.state=nt,Zr(n,o,f,c),jr(),tt=n.memoizedState,b||nt!==tt||ma?(typeof _t=="function"&&(Vu(n,a,_t,o),tt=n.memoizedState),(P=ma||fm(n,a,P,o,nt,tt,S))?(ut||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=o,n.memoizedState=tt),f.props=o,f.state=tt,f.context=S,o=P):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),o=!1)}else{f=n.stateNode,yu(e,n),S=n.memoizedProps,ut=ls(a,S),f.props=ut,_t=n.pendingProps,nt=f.context,tt=a.contextType,P=Os,typeof tt=="object"&&tt!==null&&(P=Cn(tt)),b=a.getDerivedStateFromProps,(tt=typeof b=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(S!==_t||nt!==P)&&hm(n,f,o,P),ma=!1,nt=n.memoizedState,f.state=nt,Zr(n,o,f,c),jr();var it=n.memoizedState;S!==_t||nt!==it||ma||e!==null&&e.dependencies!==null&&rl(e.dependencies)?(typeof b=="function"&&(Vu(n,a,b,o),it=n.memoizedState),(ut=ma||fm(n,a,ut,o,nt,it,P)||e!==null&&e.dependencies!==null&&rl(e.dependencies))?(tt||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(o,it,P),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(o,it,P)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||S===e.memoizedProps&&nt===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||S===e.memoizedProps&&nt===e.memoizedState||(n.flags|=1024),n.memoizedProps=o,n.memoizedState=it),f.props=o,f.state=it,f.context=P,o=ut):(typeof f.componentDidUpdate!="function"||S===e.memoizedProps&&nt===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||S===e.memoizedProps&&nt===e.memoizedState||(n.flags|=1024),o=!1)}return f=o,bl(e,n),o=(n.flags&128)!==0,f||o?(f=n.stateNode,a=o&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,e!==null&&o?(n.child=Xs(n,e.child,null,c),n.child=Xs(n,null,a,c)):En(e,n,a,c),n.memoizedState=f.state,e=n.child):e=Vi(e,n,c),e}function Rm(e,n,a,o){return Hr(),n.flags|=256,En(e,n,a,o),n.child}var Yu={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function qu(e){return{baseLanes:e,cachePool:pp()}}function ju(e,n,a){return e=e!==null?e.childLanes&~a:0,n&&(e|=ri),e}function Cm(e,n,a){var o=n.pendingProps,c=!1,f=(n.flags&128)!==0,S;if((S=f)||(S=e!==null&&e.memoizedState===null?!1:(cn.current&2)!==0),S&&(c=!0,n.flags&=-129),S=(n.flags&32)!==0,n.flags&=-33,e===null){if(De){if(c?xa(n):Sa(),De){var b=je,P;if(P=b){t:{for(P=b,b=Mi;P.nodeType!==8;){if(!b){b=null;break t}if(P=di(P.nextSibling),P===null){b=null;break t}}b=P}b!==null?(n.memoizedState={dehydrated:b,treeContext:ts!==null?{id:zi,overflow:Ii}:null,retryLane:536870912,hydrationErrors:null},P=qn(18,null,null,0),P.stateNode=b,P.return=n,n.child=P,Ln=n,je=null,P=!0):P=!1}P||is(n)}if(b=n.memoizedState,b!==null&&(b=b.dehydrated,b!==null))return Lf(b)?n.lanes=32:n.lanes=536870912,null;Gi(n)}return b=o.children,o=o.fallback,c?(Sa(),c=n.mode,b=Al({mode:"hidden",children:b},c),o=$a(o,c,a,null),b.return=n,o.return=n,b.sibling=o,n.child=b,c=n.child,c.memoizedState=qu(a),c.childLanes=ju(e,S,a),n.memoizedState=Yu,o):(xa(n),Zu(n,b))}if(P=e.memoizedState,P!==null&&(b=P.dehydrated,b!==null)){if(f)n.flags&256?(xa(n),n.flags&=-257,n=Ku(e,n,a)):n.memoizedState!==null?(Sa(),n.child=e.child,n.flags|=128,n=null):(Sa(),c=o.fallback,b=n.mode,o=Al({mode:"visible",children:o.children},b),c=$a(c,b,a,null),c.flags|=2,o.return=n,c.return=n,o.sibling=c,n.child=o,Xs(n,e.child,null,a),o=n.child,o.memoizedState=qu(a),o.childLanes=ju(e,S,a),n.memoizedState=Yu,n=c);else if(xa(n),Lf(b)){if(S=b.nextSibling&&b.nextSibling.dataset,S)var tt=S.dgst;S=tt,o=Error(s(419)),o.stack="",o.digest=S,Gr({value:o,source:null,stack:null}),n=Ku(e,n,a)}else if(gn||Vr(e,n,a,!1),S=(a&e.childLanes)!==0,gn||S){if(S=Xe,S!==null&&(o=a&-a,o=(o&42)!==0?1:ie(o),o=(o&(S.suspendedLanes|a))!==0?0:o,o!==0&&o!==P.retryLane))throw P.retryLane=o,Ns(e,o),Jn(S,e,o),xm;b.data==="$?"||mf(),n=Ku(e,n,a)}else b.data==="$?"?(n.flags|=192,n.child=e.child,n=null):(e=P.treeContext,je=di(b.nextSibling),Ln=n,De=!0,ns=null,Mi=!1,e!==null&&(ii[ai++]=zi,ii[ai++]=Ii,ii[ai++]=ts,zi=e.id,Ii=e.overflow,ts=n),n=Zu(n,o.children),n.flags|=4096);return n}return c?(Sa(),c=o.fallback,b=n.mode,P=e.child,tt=P.sibling,o=Pi(P,{mode:"hidden",children:o.children}),o.subtreeFlags=P.subtreeFlags&65011712,tt!==null?c=Pi(tt,c):(c=$a(c,b,a,null),c.flags|=2),c.return=n,o.return=n,o.sibling=c,n.child=o,o=c,c=n.child,b=e.child.memoizedState,b===null?b=qu(a):(P=b.cachePool,P!==null?(tt=ln._currentValue,P=P.parent!==tt?{parent:tt,pool:tt}:P):P=pp(),b={baseLanes:b.baseLanes|a,cachePool:P}),c.memoizedState=b,c.childLanes=ju(e,S,a),n.memoizedState=Yu,o):(xa(n),a=e.child,e=a.sibling,a=Pi(a,{mode:"visible",children:o.children}),a.return=n,a.sibling=null,e!==null&&(S=n.deletions,S===null?(n.deletions=[e],n.flags|=16):S.push(e)),n.child=a,n.memoizedState=null,a)}function Zu(e,n){return n=Al({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function Al(e,n){return e=qn(22,e,null,n),e.lanes=0,e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},e}function Ku(e,n,a){return Xs(n,e.child,null,a),e=Zu(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function wm(e,n,a){e.lanes|=n;var o=e.alternate;o!==null&&(o.lanes|=n),pu(e.return,n,a)}function Qu(e,n,a,o,c){var f=e.memoizedState;f===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:o,tail:a,tailMode:c}:(f.isBackwards=n,f.rendering=null,f.renderingStartTime=0,f.last=o,f.tail=a,f.tailMode=c)}function Dm(e,n,a){var o=n.pendingProps,c=o.revealOrder,f=o.tail;if(En(e,n,o.children,a),o=cn.current,(o&2)!==0)o=o&1|2,n.flags|=128;else{if(e!==null&&(e.flags&128)!==0)t:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&wm(e,a,n);else if(e.tag===19)wm(e,a,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break t;for(;e.sibling===null;){if(e.return===null||e.return===n)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}o&=1}switch(St(cn,o),c){case"forwards":for(a=n.child,c=null;a!==null;)e=a.alternate,e!==null&&Ml(e)===null&&(c=a),a=a.sibling;a=c,a===null?(c=n.child,n.child=null):(c=a.sibling,a.sibling=null),Qu(n,!1,c,a,f);break;case"backwards":for(a=null,c=n.child,n.child=null;c!==null;){if(e=c.alternate,e!==null&&Ml(e)===null){n.child=c;break}e=c.sibling,c.sibling=a,a=c,c=e}Qu(n,!0,a,null,f);break;case"together":Qu(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function Vi(e,n,a){if(e!==null&&(n.dependencies=e.dependencies),ba|=n.lanes,(a&n.childLanes)===0)if(e!==null){if(Vr(e,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(s(153));if(n.child!==null){for(e=n.child,a=Pi(e,e.pendingProps),n.child=a,a.return=n;e.sibling!==null;)e=e.sibling,a=a.sibling=Pi(e,e.pendingProps),a.return=n;a.sibling=null}return n.child}function Ju(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&rl(e)))}function Wv(e,n,a){switch(n.tag){case 3:Rt(n,n.stateNode.containerInfo),pa(n,ln,e.memoizedState.cache),Hr();break;case 27:case 5:Vt(n);break;case 4:Rt(n,n.stateNode.containerInfo);break;case 10:pa(n,n.type,n.memoizedProps.value);break;case 13:var o=n.memoizedState;if(o!==null)return o.dehydrated!==null?(xa(n),n.flags|=128,null):(a&n.child.childLanes)!==0?Cm(e,n,a):(xa(n),e=Vi(e,n,a),e!==null?e.sibling:null);xa(n);break;case 19:var c=(e.flags&128)!==0;if(o=(a&n.childLanes)!==0,o||(Vr(e,n,a,!1),o=(a&n.childLanes)!==0),c){if(o)return Dm(e,n,a);n.flags|=128}if(c=n.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),St(cn,cn.current),o)break;return null;case 22:case 23:return n.lanes=0,Em(e,n,a);case 24:pa(n,ln,e.memoizedState.cache)}return Vi(e,n,a)}function Um(e,n,a){if(e!==null)if(e.memoizedProps!==n.pendingProps)gn=!0;else{if(!Ju(e,a)&&(n.flags&128)===0)return gn=!1,Wv(e,n,a);gn=(e.flags&131072)!==0}else gn=!1,De&&(n.flags&1048576)!==0&&op(n,sl,n.index);switch(n.lanes=0,n.tag){case 16:t:{e=n.pendingProps;var o=n.elementType,c=o._init;if(o=c(o._payload),n.type=o,typeof o=="function")ou(o)?(e=ls(o,e),n.tag=1,n=Am(null,n,o,e,a)):(n.tag=0,n=Wu(null,n,o,e,a));else{if(o!=null){if(c=o.$$typeof,c===w){n.tag=11,n=Sm(null,n,o,e,a);break t}else if(c===I){n.tag=14,n=ym(null,n,o,e,a);break t}}throw n=vt(o)||o,Error(s(306,n,""))}}return n;case 0:return Wu(e,n,n.type,n.pendingProps,a);case 1:return o=n.type,c=ls(o,n.pendingProps),Am(e,n,o,c,a);case 3:t:{if(Rt(n,n.stateNode.containerInfo),e===null)throw Error(s(387));o=n.pendingProps;var f=n.memoizedState;c=f.element,yu(e,n),Zr(n,o,null,a);var S=n.memoizedState;if(o=S.cache,pa(n,ln,o),o!==f.cache&&mu(n,[ln],a,!0),jr(),o=S.element,f.isDehydrated)if(f={element:o,isDehydrated:!1,cache:S.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=Rm(e,n,o,a);break t}else if(o!==c){c=ei(Error(s(424)),n),Gr(c),n=Rm(e,n,o,a);break t}else{switch(e=n.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(je=di(e.firstChild),Ln=n,De=!0,ns=null,Mi=!0,a=cm(n,null,o,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(Hr(),o===c){n=Vi(e,n,a);break t}En(e,n,o,a)}n=n.child}return n;case 26:return bl(e,n),e===null?(a=Pg(n.type,null,n.pendingProps,null))?n.memoizedState=a:De||(a=n.type,e=n.pendingProps,o=Hl(yt.current).createElement(a),o[rn]=n,o[yn]=e,bn(o,a,e),en(o),n.stateNode=o):n.memoizedState=Pg(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return Vt(n),e===null&&De&&(o=n.stateNode=Lg(n.type,n.pendingProps,yt.current),Ln=n,Mi=!0,c=je,wa(n.type)?(Nf=c,je=di(o.firstChild)):je=c),En(e,n,n.pendingProps.children,a),bl(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&De&&((c=o=je)&&(o=xx(o,n.type,n.pendingProps,Mi),o!==null?(n.stateNode=o,Ln=n,je=di(o.firstChild),Mi=!1,c=!0):c=!1),c||is(n)),Vt(n),c=n.type,f=n.pendingProps,S=e!==null?e.memoizedProps:null,o=f.children,wf(c,f)?o=null:S!==null&&wf(c,S)&&(n.flags|=32),n.memoizedState!==null&&(c=Ru(e,n,Iv,null,null,a),vo._currentValue=c),bl(e,n),En(e,n,o,a),n.child;case 6:return e===null&&De&&((e=a=je)&&(a=Sx(a,n.pendingProps,Mi),a!==null?(n.stateNode=a,Ln=n,je=null,e=!0):e=!1),e||is(n)),null;case 13:return Cm(e,n,a);case 4:return Rt(n,n.stateNode.containerInfo),o=n.pendingProps,e===null?n.child=Xs(n,null,o,a):En(e,n,o,a),n.child;case 11:return Sm(e,n,n.type,n.pendingProps,a);case 7:return En(e,n,n.pendingProps,a),n.child;case 8:return En(e,n,n.pendingProps.children,a),n.child;case 12:return En(e,n,n.pendingProps.children,a),n.child;case 10:return o=n.pendingProps,pa(n,n.type,o.value),En(e,n,o.children,a),n.child;case 9:return c=n.type._context,o=n.pendingProps.children,ss(n),c=Cn(c),o=o(c),n.flags|=1,En(e,n,o,a),n.child;case 14:return ym(e,n,n.type,n.pendingProps,a);case 15:return Mm(e,n,n.type,n.pendingProps,a);case 19:return Dm(e,n,a);case 31:return o=n.pendingProps,a=n.mode,o={mode:o.mode,children:o.children},e===null?(a=Al(o,a),a.ref=n.ref,n.child=a,a.return=n,n=a):(a=Pi(e.child,o),a.ref=n.ref,n.child=a,a.return=n,n=a),n;case 22:return Em(e,n,a);case 24:return ss(n),o=Cn(ln),e===null?(c=vu(),c===null&&(c=Xe,f=gu(),c.pooledCache=f,f.refCount++,f!==null&&(c.pooledCacheLanes|=a),c=f),n.memoizedState={parent:o,cache:c},Su(n),pa(n,ln,c)):((e.lanes&a)!==0&&(yu(e,n),Zr(n,null,null,a),jr()),c=e.memoizedState,f=n.memoizedState,c.parent!==o?(c={parent:o,cache:o},n.memoizedState=c,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=c),pa(n,ln,o)):(o=f.cache,pa(n,ln,o),o!==c.cache&&mu(n,[ln],a,!0))),En(e,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(s(156,n.tag))}function ki(e){e.flags|=4}function Lm(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Hg(n)){if(n=si.current,n!==null&&((Me&4194048)===Me?Ei!==null:(Me&62914560)!==Me&&(Me&536870912)===0||n!==Ei))throw Yr=xu,mp;e.flags|=8192}}function Rl(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?Ut():536870912,e.lanes|=n,js|=n)}function no(e,n){if(!De)switch(e.tailMode){case"hidden":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null}}function Ye(e){var n=e.alternate!==null&&e.alternate.child===e.child,a=0,o=0;if(n)for(var c=e.child;c!==null;)a|=c.lanes|c.childLanes,o|=c.subtreeFlags&65011712,o|=c.flags&65011712,c.return=e,c=c.sibling;else for(c=e.child;c!==null;)a|=c.lanes|c.childLanes,o|=c.subtreeFlags,o|=c.flags,c.return=e,c=c.sibling;return e.subtreeFlags|=o,e.childLanes=a,n}function Yv(e,n,a){var o=n.pendingProps;switch(fu(n),n.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ye(n),null;case 1:return Ye(n),null;case 3:return a=n.stateNode,o=null,e!==null&&(o=e.memoizedState.cache),n.memoizedState.cache!==o&&(n.flags|=2048),Fi(ln),qt(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(Fr(n)?ki(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,up())),Ye(n),null;case 26:return a=n.memoizedState,e===null?(ki(n),a!==null?(Ye(n),Lm(n,a)):(Ye(n),n.flags&=-16777217)):a?a!==e.memoizedState?(ki(n),Ye(n),Lm(n,a)):(Ye(n),n.flags&=-16777217):(e.memoizedProps!==o&&ki(n),Ye(n),n.flags&=-16777217),null;case 27:ye(n),a=yt.current;var c=n.type;if(e!==null&&n.stateNode!=null)e.memoizedProps!==o&&ki(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return Ye(n),null}e=W.current,Fr(n)?lp(n):(e=Lg(c,o,a),n.stateNode=e,ki(n))}return Ye(n),null;case 5:if(ye(n),a=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==o&&ki(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return Ye(n),null}if(e=W.current,Fr(n))lp(n);else{switch(c=Hl(yt.current),e){case 1:e=c.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:e=c.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":e=c.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":e=c.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":e=c.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e=typeof o.is=="string"?c.createElement("select",{is:o.is}):c.createElement("select"),o.multiple?e.multiple=!0:o.size&&(e.size=o.size);break;default:e=typeof o.is=="string"?c.createElement(a,{is:o.is}):c.createElement(a)}}e[rn]=n,e[yn]=o;t:for(c=n.child;c!==null;){if(c.tag===5||c.tag===6)e.appendChild(c.stateNode);else if(c.tag!==4&&c.tag!==27&&c.child!==null){c.child.return=c,c=c.child;continue}if(c===n)break t;for(;c.sibling===null;){if(c.return===null||c.return===n)break t;c=c.return}c.sibling.return=c.return,c=c.sibling}n.stateNode=e;t:switch(bn(e,a,o),a){case"button":case"input":case"select":case"textarea":e=!!o.autoFocus;break t;case"img":e=!0;break t;default:e=!1}e&&ki(n)}}return Ye(n),n.flags&=-16777217,null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==o&&ki(n);else{if(typeof o!="string"&&n.stateNode===null)throw Error(s(166));if(e=yt.current,Fr(n)){if(e=n.stateNode,a=n.memoizedProps,o=null,c=Ln,c!==null)switch(c.tag){case 27:case 5:o=c.memoizedProps}e[rn]=n,e=!!(e.nodeValue===a||o!==null&&o.suppressHydrationWarning===!0||bg(e.nodeValue,a)),e||is(n)}else e=Hl(e).createTextNode(o),e[rn]=n,n.stateNode=e}return Ye(n),null;case 13:if(o=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(c=Fr(n),o!==null&&o.dehydrated!==null){if(e===null){if(!c)throw Error(s(318));if(c=n.memoizedState,c=c!==null?c.dehydrated:null,!c)throw Error(s(317));c[rn]=n}else Hr(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Ye(n),c=!1}else c=up(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=c),c=!0;if(!c)return n.flags&256?(Gi(n),n):(Gi(n),null)}if(Gi(n),(n.flags&128)!==0)return n.lanes=a,n;if(a=o!==null,e=e!==null&&e.memoizedState!==null,a){o=n.child,c=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(c=o.alternate.memoizedState.cachePool.pool);var f=null;o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(f=o.memoizedState.cachePool.pool),f!==c&&(o.flags|=2048)}return a!==e&&a&&(n.child.flags|=8192),Rl(n,n.updateQueue),Ye(n),null;case 4:return qt(),e===null&&Tf(n.stateNode.containerInfo),Ye(n),null;case 10:return Fi(n.type),Ye(n),null;case 19:if(gt(cn),c=n.memoizedState,c===null)return Ye(n),null;if(o=(n.flags&128)!==0,f=c.rendering,f===null)if(o)no(c,!1);else{if(Ze!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(f=Ml(e),f!==null){for(n.flags|=128,no(c,!1),e=f.updateQueue,n.updateQueue=e,Rl(n,e),n.subtreeFlags=0,e=a,a=n.child;a!==null;)rp(a,e),a=a.sibling;return St(cn,cn.current&1|2),n.child}e=e.sibling}c.tail!==null&&de()>Dl&&(n.flags|=128,o=!0,no(c,!1),n.lanes=4194304)}else{if(!o)if(e=Ml(f),e!==null){if(n.flags|=128,o=!0,e=e.updateQueue,n.updateQueue=e,Rl(n,e),no(c,!0),c.tail===null&&c.tailMode==="hidden"&&!f.alternate&&!De)return Ye(n),null}else 2*de()-c.renderingStartTime>Dl&&a!==536870912&&(n.flags|=128,o=!0,no(c,!1),n.lanes=4194304);c.isBackwards?(f.sibling=n.child,n.child=f):(e=c.last,e!==null?e.sibling=f:n.child=f,c.last=f)}return c.tail!==null?(n=c.tail,c.rendering=n,c.tail=n.sibling,c.renderingStartTime=de(),n.sibling=null,e=cn.current,St(cn,o?e&1|2:e&1),n):(Ye(n),null);case 22:case 23:return Gi(n),bu(),o=n.memoizedState!==null,e!==null?e.memoizedState!==null!==o&&(n.flags|=8192):o&&(n.flags|=8192),o?(a&536870912)!==0&&(n.flags&128)===0&&(Ye(n),n.subtreeFlags&6&&(n.flags|=8192)):Ye(n),a=n.updateQueue,a!==null&&Rl(n,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),o=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==a&&(n.flags|=2048),e!==null&&gt(rs),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),Fi(ln),Ye(n),null;case 25:return null;case 30:return null}throw Error(s(156,n.tag))}function qv(e,n){switch(fu(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return Fi(ln),qt(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return ye(n),null;case 13:if(Gi(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(s(340));Hr()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return gt(cn),null;case 4:return qt(),null;case 10:return Fi(n.type),null;case 22:case 23:return Gi(n),bu(),e!==null&&gt(rs),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return Fi(ln),null;case 25:return null;default:return null}}function Nm(e,n){switch(fu(n),n.tag){case 3:Fi(ln),qt();break;case 26:case 27:case 5:ye(n);break;case 4:qt();break;case 13:Gi(n);break;case 19:gt(cn);break;case 10:Fi(n.type);break;case 22:case 23:Gi(n),bu(),e!==null&&gt(rs);break;case 24:Fi(ln)}}function io(e,n){try{var a=n.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var c=o.next;a=c;do{if((a.tag&e)===e){o=void 0;var f=a.create,S=a.inst;o=f(),S.destroy=o}a=a.next}while(a!==c)}}catch(b){Ge(n,n.return,b)}}function ya(e,n,a){try{var o=n.updateQueue,c=o!==null?o.lastEffect:null;if(c!==null){var f=c.next;o=f;do{if((o.tag&e)===e){var S=o.inst,b=S.destroy;if(b!==void 0){S.destroy=void 0,c=n;var P=a,tt=b;try{tt()}catch(ut){Ge(c,P,ut)}}}o=o.next}while(o!==f)}}catch(ut){Ge(n,n.return,ut)}}function Om(e){var n=e.updateQueue;if(n!==null){var a=e.stateNode;try{yp(n,a)}catch(o){Ge(e,e.return,o)}}}function Pm(e,n,a){a.props=ls(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(o){Ge(e,n,o)}}function ao(e,n){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var o=e.stateNode;break;case 30:o=e.stateNode;break;default:o=e.stateNode}typeof a=="function"?e.refCleanup=a(o):a.current=o}}catch(c){Ge(e,n,c)}}function Ti(e,n){var a=e.ref,o=e.refCleanup;if(a!==null)if(typeof o=="function")try{o()}catch(c){Ge(e,n,c)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(c){Ge(e,n,c)}else a.current=null}function zm(e){var n=e.type,a=e.memoizedProps,o=e.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&o.focus();break t;case"img":a.src?o.src=a.src:a.srcSet&&(o.srcset=a.srcSet)}}catch(c){Ge(e,e.return,c)}}function $u(e,n,a){try{var o=e.stateNode;px(o,e.type,a,n),o[yn]=n}catch(c){Ge(e,e.return,c)}}function Im(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&wa(e.type)||e.tag===4}function tf(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||Im(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&wa(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function ef(e,n,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(e),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=Fl));else if(o!==4&&(o===27&&wa(e.type)&&(a=e.stateNode,n=null),e=e.child,e!==null))for(ef(e,n,a),e=e.sibling;e!==null;)ef(e,n,a),e=e.sibling}function Cl(e,n,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?a.insertBefore(e,n):a.appendChild(e);else if(o!==4&&(o===27&&wa(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(Cl(e,n,a),e=e.sibling;e!==null;)Cl(e,n,a),e=e.sibling}function Bm(e){var n=e.stateNode,a=e.memoizedProps;try{for(var o=e.type,c=n.attributes;c.length;)n.removeAttributeNode(c[0]);bn(n,o,a),n[rn]=e,n[yn]=a}catch(f){Ge(e,e.return,f)}}var Xi=!1,Je=!1,nf=!1,Fm=typeof WeakSet=="function"?WeakSet:Set,_n=null;function jv(e,n){if(e=e.containerInfo,Rf=Yl,e=Kd(e),tu(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else t:{a=(a=e.ownerDocument)&&a.defaultView||window;var o=a.getSelection&&a.getSelection();if(o&&o.rangeCount!==0){a=o.anchorNode;var c=o.anchorOffset,f=o.focusNode;o=o.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break t}var S=0,b=-1,P=-1,tt=0,ut=0,_t=e,nt=null;e:for(;;){for(var it;_t!==a||c!==0&&_t.nodeType!==3||(b=S+c),_t!==f||o!==0&&_t.nodeType!==3||(P=S+o),_t.nodeType===3&&(S+=_t.nodeValue.length),(it=_t.firstChild)!==null;)nt=_t,_t=it;for(;;){if(_t===e)break e;if(nt===a&&++tt===c&&(b=S),nt===f&&++ut===o&&(P=S),(it=_t.nextSibling)!==null)break;_t=nt,nt=_t.parentNode}_t=it}a=b===-1||P===-1?null:{start:b,end:P}}else a=null}a=a||{start:0,end:0}}else a=null;for(Cf={focusedElem:e,selectionRange:a},Yl=!1,_n=n;_n!==null;)if(n=_n,e=n.child,(n.subtreeFlags&1024)!==0&&e!==null)e.return=n,_n=e;else for(;_n!==null;){switch(n=_n,f=n.alternate,e=n.flags,n.tag){case 0:break;case 11:case 15:break;case 1:if((e&1024)!==0&&f!==null){e=void 0,a=n,c=f.memoizedProps,f=f.memoizedState,o=a.stateNode;try{var ne=ls(a.type,c,a.elementType===a.type);e=o.getSnapshotBeforeUpdate(ne,f),o.__reactInternalSnapshotBeforeUpdate=e}catch($t){Ge(a,a.return,$t)}}break;case 3:if((e&1024)!==0){if(e=n.stateNode.containerInfo,a=e.nodeType,a===9)Uf(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Uf(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(s(163))}if(e=n.sibling,e!==null){e.return=n.return,_n=e;break}_n=n.return}}function Hm(e,n,a){var o=a.flags;switch(a.tag){case 0:case 11:case 15:Ma(e,a),o&4&&io(5,a);break;case 1:if(Ma(e,a),o&4)if(e=a.stateNode,n===null)try{e.componentDidMount()}catch(S){Ge(a,a.return,S)}else{var c=ls(a.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(c,n,e.__reactInternalSnapshotBeforeUpdate)}catch(S){Ge(a,a.return,S)}}o&64&&Om(a),o&512&&ao(a,a.return);break;case 3:if(Ma(e,a),o&64&&(e=a.updateQueue,e!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{yp(e,n)}catch(S){Ge(a,a.return,S)}}break;case 27:n===null&&o&4&&Bm(a);case 26:case 5:Ma(e,a),n===null&&o&4&&zm(a),o&512&&ao(a,a.return);break;case 12:Ma(e,a);break;case 13:Ma(e,a),o&4&&km(e,a),o&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=ix.bind(null,a),yx(e,a))));break;case 22:if(o=a.memoizedState!==null||Xi,!o){n=n!==null&&n.memoizedState!==null||Je,c=Xi;var f=Je;Xi=o,(Je=n)&&!f?Ea(e,a,(a.subtreeFlags&8772)!==0):Ma(e,a),Xi=c,Je=f}break;case 30:break;default:Ma(e,a)}}function Gm(e){var n=e.alternate;n!==null&&(e.alternate=null,Gm(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&ua(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var We=null,Fn=!1;function Wi(e,n,a){for(a=a.child;a!==null;)Vm(e,n,a),a=a.sibling}function Vm(e,n,a){if(mt&&typeof mt.onCommitFiberUnmount=="function")try{mt.onCommitFiberUnmount(ht,a)}catch{}switch(a.tag){case 26:Je||Ti(a,n),Wi(e,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:Je||Ti(a,n);var o=We,c=Fn;wa(a.type)&&(We=a.stateNode,Fn=!1),Wi(e,n,a),po(a.stateNode),We=o,Fn=c;break;case 5:Je||Ti(a,n);case 6:if(o=We,c=Fn,We=null,Wi(e,n,a),We=o,Fn=c,We!==null)if(Fn)try{(We.nodeType===9?We.body:We.nodeName==="HTML"?We.ownerDocument.body:We).removeChild(a.stateNode)}catch(f){Ge(a,n,f)}else try{We.removeChild(a.stateNode)}catch(f){Ge(a,n,f)}break;case 18:We!==null&&(Fn?(e=We,Dg(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),Mo(e)):Dg(We,a.stateNode));break;case 4:o=We,c=Fn,We=a.stateNode.containerInfo,Fn=!0,Wi(e,n,a),We=o,Fn=c;break;case 0:case 11:case 14:case 15:Je||ya(2,a,n),Je||ya(4,a,n),Wi(e,n,a);break;case 1:Je||(Ti(a,n),o=a.stateNode,typeof o.componentWillUnmount=="function"&&Pm(a,n,o)),Wi(e,n,a);break;case 21:Wi(e,n,a);break;case 22:Je=(o=Je)||a.memoizedState!==null,Wi(e,n,a),Je=o;break;default:Wi(e,n,a)}}function km(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Mo(e)}catch(a){Ge(n,n.return,a)}}function Zv(e){switch(e.tag){case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new Fm),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new Fm),n;default:throw Error(s(435,e.tag))}}function af(e,n){var a=Zv(e);n.forEach(function(o){var c=ax.bind(null,e,o);a.has(o)||(a.add(o),o.then(c,c))})}function jn(e,n){var a=n.deletions;if(a!==null)for(var o=0;o<a.length;o++){var c=a[o],f=e,S=n,b=S;t:for(;b!==null;){switch(b.tag){case 27:if(wa(b.type)){We=b.stateNode,Fn=!1;break t}break;case 5:We=b.stateNode,Fn=!1;break t;case 3:case 4:We=b.stateNode.containerInfo,Fn=!0;break t}b=b.return}if(We===null)throw Error(s(160));Vm(f,S,c),We=null,Fn=!1,f=c.alternate,f!==null&&(f.return=null),c.return=null}if(n.subtreeFlags&13878)for(n=n.child;n!==null;)Xm(n,e),n=n.sibling}var hi=null;function Xm(e,n){var a=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:jn(n,e),Zn(e),o&4&&(ya(3,e,e.return),io(3,e),ya(5,e,e.return));break;case 1:jn(n,e),Zn(e),o&512&&(Je||a===null||Ti(a,a.return)),o&64&&Xi&&(e=e.updateQueue,e!==null&&(o=e.callbacks,o!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?o:a.concat(o))));break;case 26:var c=hi;if(jn(n,e),Zn(e),o&512&&(Je||a===null||Ti(a,a.return)),o&4){var f=a!==null?a.memoizedState:null;if(o=e.memoizedState,a===null)if(o===null)if(e.stateNode===null){t:{o=e.type,a=e.memoizedProps,c=c.ownerDocument||c;e:switch(o){case"title":f=c.getElementsByTagName("title")[0],(!f||f[ca]||f[rn]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=c.createElement(o),c.head.insertBefore(f,c.querySelector("head > title"))),bn(f,o,a),f[rn]=e,en(f),o=f;break t;case"link":var S=Bg("link","href",c).get(o+(a.href||""));if(S){for(var b=0;b<S.length;b++)if(f=S[b],f.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){S.splice(b,1);break e}}f=c.createElement(o),bn(f,o,a),c.head.appendChild(f);break;case"meta":if(S=Bg("meta","content",c).get(o+(a.content||""))){for(b=0;b<S.length;b++)if(f=S[b],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){S.splice(b,1);break e}}f=c.createElement(o),bn(f,o,a),c.head.appendChild(f);break;default:throw Error(s(468,o))}f[rn]=e,en(f),o=f}e.stateNode=o}else Fg(c,e.type,e.stateNode);else e.stateNode=Ig(c,o,e.memoizedProps);else f!==o?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,o===null?Fg(c,e.type,e.stateNode):Ig(c,o,e.memoizedProps)):o===null&&e.stateNode!==null&&$u(e,e.memoizedProps,a.memoizedProps)}break;case 27:jn(n,e),Zn(e),o&512&&(Je||a===null||Ti(a,a.return)),a!==null&&o&4&&$u(e,e.memoizedProps,a.memoizedProps);break;case 5:if(jn(n,e),Zn(e),o&512&&(Je||a===null||Ti(a,a.return)),e.flags&32){c=e.stateNode;try{yi(c,"")}catch(it){Ge(e,e.return,it)}}o&4&&e.stateNode!=null&&(c=e.memoizedProps,$u(e,c,a!==null?a.memoizedProps:c)),o&1024&&(nf=!0);break;case 6:if(jn(n,e),Zn(e),o&4){if(e.stateNode===null)throw Error(s(162));o=e.memoizedProps,a=e.stateNode;try{a.nodeValue=o}catch(it){Ge(e,e.return,it)}}break;case 3:if(kl=null,c=hi,hi=Gl(n.containerInfo),jn(n,e),hi=c,Zn(e),o&4&&a!==null&&a.memoizedState.isDehydrated)try{Mo(n.containerInfo)}catch(it){Ge(e,e.return,it)}nf&&(nf=!1,Wm(e));break;case 4:o=hi,hi=Gl(e.stateNode.containerInfo),jn(n,e),Zn(e),hi=o;break;case 12:jn(n,e),Zn(e);break;case 13:jn(n,e),Zn(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(uf=de()),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,af(e,o)));break;case 22:c=e.memoizedState!==null;var P=a!==null&&a.memoizedState!==null,tt=Xi,ut=Je;if(Xi=tt||c,Je=ut||P,jn(n,e),Je=ut,Xi=tt,Zn(e),o&8192)t:for(n=e.stateNode,n._visibility=c?n._visibility&-2:n._visibility|1,c&&(a===null||P||Xi||Je||cs(e)),a=null,n=e;;){if(n.tag===5||n.tag===26){if(a===null){P=a=n;try{if(f=P.stateNode,c)S=f.style,typeof S.setProperty=="function"?S.setProperty("display","none","important"):S.display="none";else{b=P.stateNode;var _t=P.memoizedProps.style,nt=_t!=null&&_t.hasOwnProperty("display")?_t.display:null;b.style.display=nt==null||typeof nt=="boolean"?"":(""+nt).trim()}}catch(it){Ge(P,P.return,it)}}}else if(n.tag===6){if(a===null){P=n;try{P.stateNode.nodeValue=c?"":P.memoizedProps}catch(it){Ge(P,P.return,it)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break t;for(;n.sibling===null;){if(n.return===null||n.return===e)break t;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}o&4&&(o=e.updateQueue,o!==null&&(a=o.retryQueue,a!==null&&(o.retryQueue=null,af(e,a))));break;case 19:jn(n,e),Zn(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,af(e,o)));break;case 30:break;case 21:break;default:jn(n,e),Zn(e)}}function Zn(e){var n=e.flags;if(n&2){try{for(var a,o=e.return;o!==null;){if(Im(o)){a=o;break}o=o.return}if(a==null)throw Error(s(160));switch(a.tag){case 27:var c=a.stateNode,f=tf(e);Cl(e,f,c);break;case 5:var S=a.stateNode;a.flags&32&&(yi(S,""),a.flags&=-33);var b=tf(e);Cl(e,b,S);break;case 3:case 4:var P=a.stateNode.containerInfo,tt=tf(e);ef(e,tt,P);break;default:throw Error(s(161))}}catch(ut){Ge(e,e.return,ut)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function Wm(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;Wm(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),e=e.sibling}}function Ma(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)Hm(e,n.alternate,n),n=n.sibling}function cs(e){for(e=e.child;e!==null;){var n=e;switch(n.tag){case 0:case 11:case 14:case 15:ya(4,n,n.return),cs(n);break;case 1:Ti(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&Pm(n,n.return,a),cs(n);break;case 27:po(n.stateNode);case 26:case 5:Ti(n,n.return),cs(n);break;case 22:n.memoizedState===null&&cs(n);break;case 30:cs(n);break;default:cs(n)}e=e.sibling}}function Ea(e,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var o=n.alternate,c=e,f=n,S=f.flags;switch(f.tag){case 0:case 11:case 15:Ea(c,f,a),io(4,f);break;case 1:if(Ea(c,f,a),o=f,c=o.stateNode,typeof c.componentDidMount=="function")try{c.componentDidMount()}catch(tt){Ge(o,o.return,tt)}if(o=f,c=o.updateQueue,c!==null){var b=o.stateNode;try{var P=c.shared.hiddenCallbacks;if(P!==null)for(c.shared.hiddenCallbacks=null,c=0;c<P.length;c++)Sp(P[c],b)}catch(tt){Ge(o,o.return,tt)}}a&&S&64&&Om(f),ao(f,f.return);break;case 27:Bm(f);case 26:case 5:Ea(c,f,a),a&&o===null&&S&4&&zm(f),ao(f,f.return);break;case 12:Ea(c,f,a);break;case 13:Ea(c,f,a),a&&S&4&&km(c,f);break;case 22:f.memoizedState===null&&Ea(c,f,a),ao(f,f.return);break;case 30:break;default:Ea(c,f,a)}n=n.sibling}}function sf(e,n){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&kr(a))}function rf(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&kr(e))}function bi(e,n,a,o){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)Ym(e,n,a,o),n=n.sibling}function Ym(e,n,a,o){var c=n.flags;switch(n.tag){case 0:case 11:case 15:bi(e,n,a,o),c&2048&&io(9,n);break;case 1:bi(e,n,a,o);break;case 3:bi(e,n,a,o),c&2048&&(e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&kr(e)));break;case 12:if(c&2048){bi(e,n,a,o),e=n.stateNode;try{var f=n.memoizedProps,S=f.id,b=f.onPostCommit;typeof b=="function"&&b(S,n.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(P){Ge(n,n.return,P)}}else bi(e,n,a,o);break;case 13:bi(e,n,a,o);break;case 23:break;case 22:f=n.stateNode,S=n.alternate,n.memoizedState!==null?f._visibility&2?bi(e,n,a,o):so(e,n):f._visibility&2?bi(e,n,a,o):(f._visibility|=2,Ws(e,n,a,o,(n.subtreeFlags&10256)!==0)),c&2048&&sf(S,n);break;case 24:bi(e,n,a,o),c&2048&&rf(n.alternate,n);break;default:bi(e,n,a,o)}}function Ws(e,n,a,o,c){for(c=c&&(n.subtreeFlags&10256)!==0,n=n.child;n!==null;){var f=e,S=n,b=a,P=o,tt=S.flags;switch(S.tag){case 0:case 11:case 15:Ws(f,S,b,P,c),io(8,S);break;case 23:break;case 22:var ut=S.stateNode;S.memoizedState!==null?ut._visibility&2?Ws(f,S,b,P,c):so(f,S):(ut._visibility|=2,Ws(f,S,b,P,c)),c&&tt&2048&&sf(S.alternate,S);break;case 24:Ws(f,S,b,P,c),c&&tt&2048&&rf(S.alternate,S);break;default:Ws(f,S,b,P,c)}n=n.sibling}}function so(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=e,o=n,c=o.flags;switch(o.tag){case 22:so(a,o),c&2048&&sf(o.alternate,o);break;case 24:so(a,o),c&2048&&rf(o.alternate,o);break;default:so(a,o)}n=n.sibling}}var ro=8192;function Ys(e){if(e.subtreeFlags&ro)for(e=e.child;e!==null;)qm(e),e=e.sibling}function qm(e){switch(e.tag){case 26:Ys(e),e.flags&ro&&e.memoizedState!==null&&Ox(hi,e.memoizedState,e.memoizedProps);break;case 5:Ys(e);break;case 3:case 4:var n=hi;hi=Gl(e.stateNode.containerInfo),Ys(e),hi=n;break;case 22:e.memoizedState===null&&(n=e.alternate,n!==null&&n.memoizedState!==null?(n=ro,ro=16777216,Ys(e),ro=n):Ys(e));break;default:Ys(e)}}function jm(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function oo(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];_n=o,Km(o,e)}jm(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Zm(e),e=e.sibling}function Zm(e){switch(e.tag){case 0:case 11:case 15:oo(e),e.flags&2048&&ya(9,e,e.return);break;case 3:oo(e);break;case 12:oo(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,wl(e)):oo(e);break;default:oo(e)}}function wl(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];_n=o,Km(o,e)}jm(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:ya(8,n,n.return),wl(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,wl(n));break;default:wl(n)}e=e.sibling}}function Km(e,n){for(;_n!==null;){var a=_n;switch(a.tag){case 0:case 11:case 15:ya(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var o=a.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:kr(a.memoizedState.cache)}if(o=a.child,o!==null)o.return=a,_n=o;else t:for(a=e;_n!==null;){o=_n;var c=o.sibling,f=o.return;if(Gm(o),o===a){_n=null;break t}if(c!==null){c.return=f,_n=c;break t}_n=f}}}var Kv={getCacheForType:function(e){var n=Cn(ln),a=n.data.get(e);return a===void 0&&(a=e(),n.data.set(e,a)),a}},Qv=typeof WeakMap=="function"?WeakMap:Map,Ne=0,Xe=null,pe=null,Me=0,Oe=0,Kn=null,Ta=!1,qs=!1,of=!1,Yi=0,Ze=0,ba=0,us=0,lf=0,ri=0,js=0,lo=null,Hn=null,cf=!1,uf=0,Dl=1/0,Ul=null,Aa=null,Tn=0,Ra=null,Zs=null,Ks=0,ff=0,hf=null,Qm=null,co=0,df=null;function Qn(){if((Ne&2)!==0&&Me!==0)return Me&-Me;if(N.T!==null){var e=Is;return e!==0?e:Sf()}return Ae()}function Jm(){ri===0&&(ri=(Me&536870912)===0||De?V():536870912);var e=si.current;return e!==null&&(e.flags|=32),ri}function Jn(e,n,a){(e===Xe&&(Oe===2||Oe===9)||e.cancelPendingCommit!==null)&&(Qs(e,0),Ca(e,Me,ri,!1)),zt(e,a),((Ne&2)===0||e!==Xe)&&(e===Xe&&((Ne&2)===0&&(us|=a),Ze===4&&Ca(e,Me,ri,!1)),Ai(e))}function $m(e,n,a){if((Ne&6)!==0)throw Error(s(327));var o=!a&&(n&124)===0&&(n&e.expiredLanes)===0||Ct(e,n),c=o?tx(e,n):gf(e,n,!0),f=o;do{if(c===0){qs&&!o&&Ca(e,n,0,!1);break}else{if(a=e.current.alternate,f&&!Jv(a)){c=gf(e,n,!1),f=!1;continue}if(c===2){if(f=n,e.errorRecoveryDisabledLanes&f)var S=0;else S=e.pendingLanes&-536870913,S=S!==0?S:S&536870912?536870912:0;if(S!==0){n=S;t:{var b=e;c=lo;var P=b.current.memoizedState.isDehydrated;if(P&&(Qs(b,S).flags|=256),S=gf(b,S,!1),S!==2){if(of&&!P){b.errorRecoveryDisabledLanes|=f,us|=f,c=4;break t}f=Hn,Hn=c,f!==null&&(Hn===null?Hn=f:Hn.push.apply(Hn,f))}c=S}if(f=!1,c!==2)continue}}if(c===1){Qs(e,0),Ca(e,n,0,!0);break}t:{switch(o=e,f=c,f){case 0:case 1:throw Error(s(345));case 4:if((n&4194048)!==n)break;case 6:Ca(o,n,ri,!Ta);break t;case 2:Hn=null;break;case 3:case 5:break;default:throw Error(s(329))}if((n&62914560)===n&&(c=uf+300-de(),10<c)){if(Ca(o,n,ri,!Ta),Zt(o,0,!0)!==0)break t;o.timeoutHandle=Cg(tg.bind(null,o,a,Hn,Ul,cf,n,ri,us,js,Ta,f,2,-0,0),c);break t}tg(o,a,Hn,Ul,cf,n,ri,us,js,Ta,f,0,-0,0)}}break}while(!0);Ai(e)}function tg(e,n,a,o,c,f,S,b,P,tt,ut,_t,nt,it){if(e.timeoutHandle=-1,_t=n.subtreeFlags,(_t&8192||(_t&16785408)===16785408)&&(_o={stylesheets:null,count:0,unsuspend:Nx},qm(n),_t=Px(),_t!==null)){e.cancelPendingCommit=_t(og.bind(null,e,n,f,a,o,c,S,b,P,ut,1,nt,it)),Ca(e,f,S,!tt);return}og(e,n,f,a,o,c,S,b,P)}function Jv(e){for(var n=e;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var o=0;o<a.length;o++){var c=a[o],f=c.getSnapshot;c=c.value;try{if(!Yn(f(),c))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Ca(e,n,a,o){n&=~lf,n&=~us,e.suspendedLanes|=n,e.pingedLanes&=~n,o&&(e.warmLanes|=n),o=e.expirationTimes;for(var c=n;0<c;){var f=31-Ot(c),S=1<<f;o[f]=-1,c&=~S}a!==0&&xt(e,a,n)}function Ll(){return(Ne&6)===0?(uo(0),!1):!0}function pf(){if(pe!==null){if(Oe===0)var e=pe.return;else e=pe,Bi=as=null,Du(e),ks=null,to=0,e=pe;for(;e!==null;)Nm(e.alternate,e),e=e.return;pe=null}}function Qs(e,n){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,gx(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),pf(),Xe=e,pe=a=Pi(e.current,null),Me=n,Oe=0,Kn=null,Ta=!1,qs=Ct(e,n),of=!1,js=ri=lf=us=ba=Ze=0,Hn=lo=null,cf=!1,(n&8)!==0&&(n|=n&32);var o=e.entangledLanes;if(o!==0)for(e=e.entanglements,o&=n;0<o;){var c=31-Ot(o),f=1<<c;n|=e[c],o&=~f}return Yi=n,tl(),a}function eg(e,n){ue=null,N.H=xl,n===Wr||n===cl?(n=vp(),Oe=3):n===mp?(n=vp(),Oe=4):Oe=n===xm?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,Kn=n,pe===null&&(Ze=1,Tl(e,ei(n,e.current)))}function ng(){var e=N.H;return N.H=xl,e===null?xl:e}function ig(){var e=N.A;return N.A=Kv,e}function mf(){Ze=4,Ta||(Me&4194048)!==Me&&si.current!==null||(qs=!0),(ba&134217727)===0&&(us&134217727)===0||Xe===null||Ca(Xe,Me,ri,!1)}function gf(e,n,a){var o=Ne;Ne|=2;var c=ng(),f=ig();(Xe!==e||Me!==n)&&(Ul=null,Qs(e,n)),n=!1;var S=Ze;t:do try{if(Oe!==0&&pe!==null){var b=pe,P=Kn;switch(Oe){case 8:pf(),S=6;break t;case 3:case 2:case 9:case 6:si.current===null&&(n=!0);var tt=Oe;if(Oe=0,Kn=null,Js(e,b,P,tt),a&&qs){S=0;break t}break;default:tt=Oe,Oe=0,Kn=null,Js(e,b,P,tt)}}$v(),S=Ze;break}catch(ut){eg(e,ut)}while(!0);return n&&e.shellSuspendCounter++,Bi=as=null,Ne=o,N.H=c,N.A=f,pe===null&&(Xe=null,Me=0,tl()),S}function $v(){for(;pe!==null;)ag(pe)}function tx(e,n){var a=Ne;Ne|=2;var o=ng(),c=ig();Xe!==e||Me!==n?(Ul=null,Dl=de()+500,Qs(e,n)):qs=Ct(e,n);t:do try{if(Oe!==0&&pe!==null){n=pe;var f=Kn;e:switch(Oe){case 1:Oe=0,Kn=null,Js(e,n,f,1);break;case 2:case 9:if(gp(f)){Oe=0,Kn=null,sg(n);break}n=function(){Oe!==2&&Oe!==9||Xe!==e||(Oe=7),Ai(e)},f.then(n,n);break t;case 3:Oe=7;break t;case 4:Oe=5;break t;case 7:gp(f)?(Oe=0,Kn=null,sg(n)):(Oe=0,Kn=null,Js(e,n,f,7));break;case 5:var S=null;switch(pe.tag){case 26:S=pe.memoizedState;case 5:case 27:var b=pe;if(!S||Hg(S)){Oe=0,Kn=null;var P=b.sibling;if(P!==null)pe=P;else{var tt=b.return;tt!==null?(pe=tt,Nl(tt)):pe=null}break e}}Oe=0,Kn=null,Js(e,n,f,5);break;case 6:Oe=0,Kn=null,Js(e,n,f,6);break;case 8:pf(),Ze=6;break t;default:throw Error(s(462))}}ex();break}catch(ut){eg(e,ut)}while(!0);return Bi=as=null,N.H=o,N.A=c,Ne=a,pe!==null?0:(Xe=null,Me=0,tl(),Ze)}function ex(){for(;pe!==null&&!Sn();)ag(pe)}function ag(e){var n=Um(e.alternate,e,Yi);e.memoizedProps=e.pendingProps,n===null?Nl(e):pe=n}function sg(e){var n=e,a=n.alternate;switch(n.tag){case 15:case 0:n=bm(a,n,n.pendingProps,n.type,void 0,Me);break;case 11:n=bm(a,n,n.pendingProps,n.type.render,n.ref,Me);break;case 5:Du(n);default:Nm(a,n),n=pe=rp(n,Yi),n=Um(a,n,Yi)}e.memoizedProps=e.pendingProps,n===null?Nl(e):pe=n}function Js(e,n,a,o){Bi=as=null,Du(n),ks=null,to=0;var c=n.return;try{if(Xv(e,c,n,a,Me)){Ze=1,Tl(e,ei(a,e.current)),pe=null;return}}catch(f){if(c!==null)throw pe=c,f;Ze=1,Tl(e,ei(a,e.current)),pe=null;return}n.flags&32768?(De||o===1?e=!0:qs||(Me&536870912)!==0?e=!1:(Ta=e=!0,(o===2||o===9||o===3||o===6)&&(o=si.current,o!==null&&o.tag===13&&(o.flags|=16384))),rg(n,e)):Nl(n)}function Nl(e){var n=e;do{if((n.flags&32768)!==0){rg(n,Ta);return}e=n.return;var a=Yv(n.alternate,n,Yi);if(a!==null){pe=a;return}if(n=n.sibling,n!==null){pe=n;return}pe=n=e}while(n!==null);Ze===0&&(Ze=5)}function rg(e,n){do{var a=qv(e.alternate,e);if(a!==null){a.flags&=32767,pe=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(e=e.sibling,e!==null)){pe=e;return}pe=e=a}while(e!==null);Ze=6,pe=null}function og(e,n,a,o,c,f,S,b,P){e.cancelPendingCommit=null;do Ol();while(Tn!==0);if((Ne&6)!==0)throw Error(s(327));if(n!==null){if(n===e.current)throw Error(s(177));if(f=n.lanes|n.childLanes,f|=su,bt(e,a,f,S,b,P),e===Xe&&(pe=Xe=null,Me=0),Zs=n,Ra=e,Ks=a,ff=f,hf=c,Qm=o,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,sx(se,function(){return hg(),null})):(e.callbackNode=null,e.callbackPriority=0),o=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||o){o=N.T,N.T=null,c=Y.p,Y.p=2,S=Ne,Ne|=4;try{jv(e,n,a)}finally{Ne=S,Y.p=c,N.T=o}}Tn=1,lg(),cg(),ug()}}function lg(){if(Tn===1){Tn=0;var e=Ra,n=Zs,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=N.T,N.T=null;var o=Y.p;Y.p=2;var c=Ne;Ne|=4;try{Xm(n,e);var f=Cf,S=Kd(e.containerInfo),b=f.focusedElem,P=f.selectionRange;if(S!==b&&b&&b.ownerDocument&&Zd(b.ownerDocument.documentElement,b)){if(P!==null&&tu(b)){var tt=P.start,ut=P.end;if(ut===void 0&&(ut=tt),"selectionStart"in b)b.selectionStart=tt,b.selectionEnd=Math.min(ut,b.value.length);else{var _t=b.ownerDocument||document,nt=_t&&_t.defaultView||window;if(nt.getSelection){var it=nt.getSelection(),ne=b.textContent.length,$t=Math.min(P.start,ne),Ie=P.end===void 0?$t:Math.min(P.end,ne);!it.extend&&$t>Ie&&(S=Ie,Ie=$t,$t=S);var j=jd(b,$t),H=jd(b,Ie);if(j&&H&&(it.rangeCount!==1||it.anchorNode!==j.node||it.anchorOffset!==j.offset||it.focusNode!==H.node||it.focusOffset!==H.offset)){var Q=_t.createRange();Q.setStart(j.node,j.offset),it.removeAllRanges(),$t>Ie?(it.addRange(Q),it.extend(H.node,H.offset)):(Q.setEnd(H.node,H.offset),it.addRange(Q))}}}}for(_t=[],it=b;it=it.parentNode;)it.nodeType===1&&_t.push({element:it,left:it.scrollLeft,top:it.scrollTop});for(typeof b.focus=="function"&&b.focus(),b=0;b<_t.length;b++){var dt=_t[b];dt.element.scrollLeft=dt.left,dt.element.scrollTop=dt.top}}Yl=!!Rf,Cf=Rf=null}finally{Ne=c,Y.p=o,N.T=a}}e.current=n,Tn=2}}function cg(){if(Tn===2){Tn=0;var e=Ra,n=Zs,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=N.T,N.T=null;var o=Y.p;Y.p=2;var c=Ne;Ne|=4;try{Hm(e,n.alternate,n)}finally{Ne=c,Y.p=o,N.T=a}}Tn=3}}function ug(){if(Tn===4||Tn===3){Tn=0,Te();var e=Ra,n=Zs,a=Ks,o=Qm;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?Tn=5:(Tn=0,Zs=Ra=null,fg(e,e.pendingLanes));var c=e.pendingLanes;if(c===0&&(Aa=null),Le(a),n=n.stateNode,mt&&typeof mt.onCommitFiberRoot=="function")try{mt.onCommitFiberRoot(ht,n,void 0,(n.current.flags&128)===128)}catch{}if(o!==null){n=N.T,c=Y.p,Y.p=2,N.T=null;try{for(var f=e.onRecoverableError,S=0;S<o.length;S++){var b=o[S];f(b.value,{componentStack:b.stack})}}finally{N.T=n,Y.p=c}}(Ks&3)!==0&&Ol(),Ai(e),c=e.pendingLanes,(a&4194090)!==0&&(c&42)!==0?e===df?co++:(co=0,df=e):co=0,uo(0)}}function fg(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,kr(n)))}function Ol(e){return lg(),cg(),ug(),hg()}function hg(){if(Tn!==5)return!1;var e=Ra,n=ff;ff=0;var a=Le(Ks),o=N.T,c=Y.p;try{Y.p=32>a?32:a,N.T=null,a=hf,hf=null;var f=Ra,S=Ks;if(Tn=0,Zs=Ra=null,Ks=0,(Ne&6)!==0)throw Error(s(331));var b=Ne;if(Ne|=4,Zm(f.current),Ym(f,f.current,S,a),Ne=b,uo(0,!1),mt&&typeof mt.onPostCommitFiberRoot=="function")try{mt.onPostCommitFiberRoot(ht,f)}catch{}return!0}finally{Y.p=c,N.T=o,fg(e,n)}}function dg(e,n,a){n=ei(a,n),n=Xu(e.stateNode,n,2),e=_a(e,n,2),e!==null&&(zt(e,2),Ai(e))}function Ge(e,n,a){if(e.tag===3)dg(e,e,a);else for(;n!==null;){if(n.tag===3){dg(n,e,a);break}else if(n.tag===1){var o=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(Aa===null||!Aa.has(o))){e=ei(a,e),a=_m(2),o=_a(n,a,2),o!==null&&(vm(a,o,n,e),zt(o,2),Ai(o));break}}n=n.return}}function _f(e,n,a){var o=e.pingCache;if(o===null){o=e.pingCache=new Qv;var c=new Set;o.set(n,c)}else c=o.get(n),c===void 0&&(c=new Set,o.set(n,c));c.has(a)||(of=!0,c.add(a),e=nx.bind(null,e,n,a),n.then(e,e))}function nx(e,n,a){var o=e.pingCache;o!==null&&o.delete(n),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,Xe===e&&(Me&a)===a&&(Ze===4||Ze===3&&(Me&62914560)===Me&&300>de()-uf?(Ne&2)===0&&Qs(e,0):lf|=a,js===Me&&(js=0)),Ai(e)}function pg(e,n){n===0&&(n=Ut()),e=Ns(e,n),e!==null&&(zt(e,n),Ai(e))}function ix(e){var n=e.memoizedState,a=0;n!==null&&(a=n.retryLane),pg(e,a)}function ax(e,n){var a=0;switch(e.tag){case 13:var o=e.stateNode,c=e.memoizedState;c!==null&&(a=c.retryLane);break;case 19:o=e.stateNode;break;case 22:o=e.stateNode._retryCache;break;default:throw Error(s(314))}o!==null&&o.delete(n),pg(e,a)}function sx(e,n){return _e(e,n)}var Pl=null,$s=null,vf=!1,zl=!1,xf=!1,fs=0;function Ai(e){e!==$s&&e.next===null&&($s===null?Pl=$s=e:$s=$s.next=e),zl=!0,vf||(vf=!0,ox())}function uo(e,n){if(!xf&&zl){xf=!0;do for(var a=!1,o=Pl;o!==null;){if(e!==0){var c=o.pendingLanes;if(c===0)var f=0;else{var S=o.suspendedLanes,b=o.pingedLanes;f=(1<<31-Ot(42|e)+1)-1,f&=c&~(S&~b),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,vg(o,f))}else f=Me,f=Zt(o,o===Xe?f:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(f&3)===0||Ct(o,f)||(a=!0,vg(o,f));o=o.next}while(a);xf=!1}}function rx(){mg()}function mg(){zl=vf=!1;var e=0;fs!==0&&(mx()&&(e=fs),fs=0);for(var n=de(),a=null,o=Pl;o!==null;){var c=o.next,f=gg(o,n);f===0?(o.next=null,a===null?Pl=c:a.next=c,c===null&&($s=a)):(a=o,(e!==0||(f&3)!==0)&&(zl=!0)),o=c}uo(e)}function gg(e,n){for(var a=e.suspendedLanes,o=e.pingedLanes,c=e.expirationTimes,f=e.pendingLanes&-62914561;0<f;){var S=31-Ot(f),b=1<<S,P=c[S];P===-1?((b&a)===0||(b&o)!==0)&&(c[S]=ae(b,n)):P<=n&&(e.expiredLanes|=b),f&=~b}if(n=Xe,a=Me,a=Zt(e,e===n?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o=e.callbackNode,a===0||e===n&&(Oe===2||Oe===9)||e.cancelPendingCommit!==null)return o!==null&&o!==null&&B(o),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||Ct(e,a)){if(n=a&-a,n===e.callbackPriority)return n;switch(o!==null&&B(o),Le(a)){case 2:case 8:a=Kt;break;case 32:a=se;break;case 268435456:a=O;break;default:a=se}return o=_g.bind(null,e),a=_e(a,o),e.callbackPriority=n,e.callbackNode=a,n}return o!==null&&o!==null&&B(o),e.callbackPriority=2,e.callbackNode=null,2}function _g(e,n){if(Tn!==0&&Tn!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(Ol()&&e.callbackNode!==a)return null;var o=Me;return o=Zt(e,e===Xe?o:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o===0?null:($m(e,o,n),gg(e,de()),e.callbackNode!=null&&e.callbackNode===a?_g.bind(null,e):null)}function vg(e,n){if(Ol())return null;$m(e,n,!0)}function ox(){_x(function(){(Ne&6)!==0?_e(ve,rx):mg()})}function Sf(){return fs===0&&(fs=V()),fs}function xg(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:qo(""+e)}function Sg(e,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,e.id&&a.setAttribute("form",e.id),n.parentNode.insertBefore(a,n),e=new FormData(e),a.parentNode.removeChild(a),e}function lx(e,n,a,o,c){if(n==="submit"&&a&&a.stateNode===c){var f=xg((c[yn]||null).action),S=o.submitter;S&&(n=(n=S[yn]||null)?xg(n.formAction):S.getAttribute("formAction"),n!==null&&(f=n,S=null));var b=new Qo("action","action",null,o,c);e.push({event:b,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(fs!==0){var P=S?Sg(c,S):new FormData(c);Fu(a,{pending:!0,data:P,method:c.method,action:f},null,P)}}else typeof f=="function"&&(b.preventDefault(),P=S?Sg(c,S):new FormData(c),Fu(a,{pending:!0,data:P,method:c.method,action:f},f,P))},currentTarget:c}]})}}for(var yf=0;yf<au.length;yf++){var Mf=au[yf],cx=Mf.toLowerCase(),ux=Mf[0].toUpperCase()+Mf.slice(1);fi(cx,"on"+ux)}fi($d,"onAnimationEnd"),fi(tp,"onAnimationIteration"),fi(ep,"onAnimationStart"),fi("dblclick","onDoubleClick"),fi("focusin","onFocus"),fi("focusout","onBlur"),fi(Rv,"onTransitionRun"),fi(Cv,"onTransitionStart"),fi(wv,"onTransitionCancel"),fi(np,"onTransitionEnd"),A("onMouseEnter",["mouseout","mouseover"]),A("onMouseLeave",["mouseout","mouseover"]),A("onPointerEnter",["pointerout","pointerover"]),A("onPointerLeave",["pointerout","pointerover"]),Ui("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Ui("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Ui("onBeforeInput",["compositionend","keypress","textInput","paste"]),Ui("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Ui("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Ui("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var fo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),fx=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(fo));function yg(e,n){n=(n&4)!==0;for(var a=0;a<e.length;a++){var o=e[a],c=o.event;o=o.listeners;t:{var f=void 0;if(n)for(var S=o.length-1;0<=S;S--){var b=o[S],P=b.instance,tt=b.currentTarget;if(b=b.listener,P!==f&&c.isPropagationStopped())break t;f=b,c.currentTarget=tt;try{f(c)}catch(ut){El(ut)}c.currentTarget=null,f=P}else for(S=0;S<o.length;S++){if(b=o[S],P=b.instance,tt=b.currentTarget,b=b.listener,P!==f&&c.isPropagationStopped())break t;f=b,c.currentTarget=tt;try{f(c)}catch(ut){El(ut)}c.currentTarget=null,f=P}}}}function me(e,n){var a=n[qa];a===void 0&&(a=n[qa]=new Set);var o=e+"__bubble";a.has(o)||(Mg(n,e,2,!1),a.add(o))}function Ef(e,n,a){var o=0;n&&(o|=4),Mg(a,e,o,n)}var Il="_reactListening"+Math.random().toString(36).slice(2);function Tf(e){if(!e[Il]){e[Il]=!0,Wo.forEach(function(a){a!=="selectionchange"&&(fx.has(a)||Ef(a,!1,e),Ef(a,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[Il]||(n[Il]=!0,Ef("selectionchange",!1,n))}}function Mg(e,n,a,o){switch(Yg(n)){case 2:var c=Bx;break;case 8:c=Fx;break;default:c=Bf}a=c.bind(null,n,a,e),c=void 0,!Wc||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(c=!0),o?c!==void 0?e.addEventListener(n,a,{capture:!0,passive:c}):e.addEventListener(n,a,!0):c!==void 0?e.addEventListener(n,a,{passive:c}):e.addEventListener(n,a,!1)}function bf(e,n,a,o,c){var f=o;if((n&1)===0&&(n&2)===0&&o!==null)t:for(;;){if(o===null)return;var S=o.tag;if(S===3||S===4){var b=o.stateNode.containerInfo;if(b===c)break;if(S===4)for(S=o.return;S!==null;){var P=S.tag;if((P===3||P===4)&&S.stateNode.containerInfo===c)return;S=S.return}for(;b!==null;){if(S=wi(b),S===null)return;if(P=S.tag,P===5||P===6||P===26||P===27){o=f=S;continue t}b=b.parentNode}}o=o.return}wd(function(){var tt=f,ut=kc(a),_t=[];t:{var nt=ip.get(e);if(nt!==void 0){var it=Qo,ne=e;switch(e){case"keypress":if(Zo(a)===0)break t;case"keydown":case"keyup":it=sv;break;case"focusin":ne="focus",it=Zc;break;case"focusout":ne="blur",it=Zc;break;case"beforeblur":case"afterblur":it=Zc;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":it=Ld;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":it=q0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":it=lv;break;case $d:case tp:case ep:it=K0;break;case np:it=uv;break;case"scroll":case"scrollend":it=W0;break;case"wheel":it=hv;break;case"copy":case"cut":case"paste":it=J0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":it=Od;break;case"toggle":case"beforetoggle":it=pv}var $t=(n&4)!==0,Ie=!$t&&(e==="scroll"||e==="scrollend"),j=$t?nt!==null?nt+"Capture":null:nt;$t=[];for(var H=tt,Q;H!==null;){var dt=H;if(Q=dt.stateNode,dt=dt.tag,dt!==5&&dt!==26&&dt!==27||Q===null||j===null||(dt=Dr(H,j),dt!=null&&$t.push(ho(H,dt,Q))),Ie)break;H=H.return}0<$t.length&&(nt=new it(nt,ne,null,a,ut),_t.push({event:nt,listeners:$t}))}}if((n&7)===0){t:{if(nt=e==="mouseover"||e==="pointerover",it=e==="mouseout"||e==="pointerout",nt&&a!==Vc&&(ne=a.relatedTarget||a.fromElement)&&(wi(ne)||ne[zn]))break t;if((it||nt)&&(nt=ut.window===ut?ut:(nt=ut.ownerDocument)?nt.defaultView||nt.parentWindow:window,it?(ne=a.relatedTarget||a.toElement,it=tt,ne=ne?wi(ne):null,ne!==null&&(Ie=u(ne),$t=ne.tag,ne!==Ie||$t!==5&&$t!==27&&$t!==6)&&(ne=null)):(it=null,ne=tt),it!==ne)){if($t=Ld,dt="onMouseLeave",j="onMouseEnter",H="mouse",(e==="pointerout"||e==="pointerover")&&($t=Od,dt="onPointerLeave",j="onPointerEnter",H="pointer"),Ie=it==null?nt:Za(it),Q=ne==null?nt:Za(ne),nt=new $t(dt,H+"leave",it,a,ut),nt.target=Ie,nt.relatedTarget=Q,dt=null,wi(ut)===tt&&($t=new $t(j,H+"enter",ne,a,ut),$t.target=Q,$t.relatedTarget=Ie,dt=$t),Ie=dt,it&&ne)e:{for($t=it,j=ne,H=0,Q=$t;Q;Q=tr(Q))H++;for(Q=0,dt=j;dt;dt=tr(dt))Q++;for(;0<H-Q;)$t=tr($t),H--;for(;0<Q-H;)j=tr(j),Q--;for(;H--;){if($t===j||j!==null&&$t===j.alternate)break e;$t=tr($t),j=tr(j)}$t=null}else $t=null;it!==null&&Eg(_t,nt,it,$t,!1),ne!==null&&Ie!==null&&Eg(_t,Ie,ne,$t,!0)}}t:{if(nt=tt?Za(tt):window,it=nt.nodeName&&nt.nodeName.toLowerCase(),it==="select"||it==="input"&&nt.type==="file")var Ft=Vd;else if(Hd(nt))if(kd)Ft=Tv;else{Ft=Mv;var fe=yv}else it=nt.nodeName,!it||it.toLowerCase()!=="input"||nt.type!=="checkbox"&&nt.type!=="radio"?tt&&Gc(tt.elementType)&&(Ft=Vd):Ft=Ev;if(Ft&&(Ft=Ft(e,tt))){Gd(_t,Ft,a,ut);break t}fe&&fe(e,nt,tt),e==="focusout"&&tt&&nt.type==="number"&&tt.memoizedProps.value!=null&&Rn(nt,"number",nt.value)}switch(fe=tt?Za(tt):window,e){case"focusin":(Hd(fe)||fe.contentEditable==="true")&&(Ds=fe,eu=tt,Br=null);break;case"focusout":Br=eu=Ds=null;break;case"mousedown":nu=!0;break;case"contextmenu":case"mouseup":case"dragend":nu=!1,Qd(_t,a,ut);break;case"selectionchange":if(Av)break;case"keydown":case"keyup":Qd(_t,a,ut)}var Yt;if(Qc)t:{switch(e){case"compositionstart":var ee="onCompositionStart";break t;case"compositionend":ee="onCompositionEnd";break t;case"compositionupdate":ee="onCompositionUpdate";break t}ee=void 0}else ws?Bd(e,a)&&(ee="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(ee="onCompositionStart");ee&&(Pd&&a.locale!=="ko"&&(ws||ee!=="onCompositionStart"?ee==="onCompositionEnd"&&ws&&(Yt=Dd()):(da=ut,Yc="value"in da?da.value:da.textContent,ws=!0)),fe=Bl(tt,ee),0<fe.length&&(ee=new Nd(ee,e,null,a,ut),_t.push({event:ee,listeners:fe}),Yt?ee.data=Yt:(Yt=Fd(a),Yt!==null&&(ee.data=Yt)))),(Yt=gv?_v(e,a):vv(e,a))&&(ee=Bl(tt,"onBeforeInput"),0<ee.length&&(fe=new Nd("onBeforeInput","beforeinput",null,a,ut),_t.push({event:fe,listeners:ee}),fe.data=Yt)),lx(_t,e,tt,a,ut)}yg(_t,n)})}function ho(e,n,a){return{instance:e,listener:n,currentTarget:a}}function Bl(e,n){for(var a=n+"Capture",o=[];e!==null;){var c=e,f=c.stateNode;if(c=c.tag,c!==5&&c!==26&&c!==27||f===null||(c=Dr(e,a),c!=null&&o.unshift(ho(e,c,f)),c=Dr(e,n),c!=null&&o.push(ho(e,c,f))),e.tag===3)return o;e=e.return}return[]}function tr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Eg(e,n,a,o,c){for(var f=n._reactName,S=[];a!==null&&a!==o;){var b=a,P=b.alternate,tt=b.stateNode;if(b=b.tag,P!==null&&P===o)break;b!==5&&b!==26&&b!==27||tt===null||(P=tt,c?(tt=Dr(a,f),tt!=null&&S.unshift(ho(a,tt,P))):c||(tt=Dr(a,f),tt!=null&&S.push(ho(a,tt,P)))),a=a.return}S.length!==0&&e.push({event:n,listeners:S})}var hx=/\r\n?/g,dx=/\u0000|\uFFFD/g;function Tg(e){return(typeof e=="string"?e:""+e).replace(hx,`
`).replace(dx,"")}function bg(e,n){return n=Tg(n),Tg(e)===n}function Fl(){}function ze(e,n,a,o,c,f){switch(a){case"children":typeof o=="string"?n==="body"||n==="textarea"&&o===""||yi(e,o):(typeof o=="number"||typeof o=="bigint")&&n!=="body"&&yi(e,""+o);break;case"className":wt(e,"class",o);break;case"tabIndex":wt(e,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":wt(e,a,o);break;case"style":Rd(e,o,f);break;case"data":if(n!=="object"){wt(e,"data",o);break}case"src":case"href":if(o===""&&(n!=="a"||a!=="href")){e.removeAttribute(a);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=qo(""+o),e.setAttribute(a,o);break;case"action":case"formAction":if(typeof o=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&ze(e,n,"name",c.name,c,null),ze(e,n,"formEncType",c.formEncType,c,null),ze(e,n,"formMethod",c.formMethod,c,null),ze(e,n,"formTarget",c.formTarget,c,null)):(ze(e,n,"encType",c.encType,c,null),ze(e,n,"method",c.method,c,null),ze(e,n,"target",c.target,c,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=qo(""+o),e.setAttribute(a,o);break;case"onClick":o!=null&&(e.onclick=Fl);break;case"onScroll":o!=null&&me("scroll",e);break;case"onScrollEnd":o!=null&&me("scrollend",e);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(c.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"multiple":e.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":e.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){e.removeAttribute("xlink:href");break}a=qo(""+o),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""+o):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":o===!0?e.setAttribute(a,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,o):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?e.setAttribute(a,o):e.removeAttribute(a);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?e.removeAttribute(a):e.setAttribute(a,o);break;case"popover":me("beforetoggle",e),me("toggle",e),Tt(e,"popover",o);break;case"xlinkActuate":Nt(e,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":Nt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":Nt(e,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":Nt(e,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":Nt(e,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":Nt(e,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":Nt(e,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":Nt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":Nt(e,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":Tt(e,"is",o);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=k0.get(a)||a,Tt(e,a,o))}}function Af(e,n,a,o,c,f){switch(a){case"style":Rd(e,o,f);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(c.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"children":typeof o=="string"?yi(e,o):(typeof o=="number"||typeof o=="bigint")&&yi(e,""+o);break;case"onScroll":o!=null&&me("scroll",e);break;case"onScrollEnd":o!=null&&me("scrollend",e);break;case"onClick":o!=null&&(e.onclick=Fl);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Yo.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(c=a.endsWith("Capture"),n=a.slice(2,c?a.length-7:void 0),f=e[yn]||null,f=f!=null?f[a]:null,typeof f=="function"&&e.removeEventListener(n,f,c),typeof o=="function")){typeof f!="function"&&f!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(n,o,c);break t}a in e?e[a]=o:o===!0?e.setAttribute(a,""):Tt(e,a,o)}}}function bn(e,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":me("error",e),me("load",e);var o=!1,c=!1,f;for(f in a)if(a.hasOwnProperty(f)){var S=a[f];if(S!=null)switch(f){case"src":o=!0;break;case"srcSet":c=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:ze(e,n,f,S,a,null)}}c&&ze(e,n,"srcSet",a.srcSet,a,null),o&&ze(e,n,"src",a.src,a,null);return;case"input":me("invalid",e);var b=f=S=c=null,P=null,tt=null;for(o in a)if(a.hasOwnProperty(o)){var ut=a[o];if(ut!=null)switch(o){case"name":c=ut;break;case"type":S=ut;break;case"checked":P=ut;break;case"defaultChecked":tt=ut;break;case"value":f=ut;break;case"defaultValue":b=ut;break;case"children":case"dangerouslySetInnerHTML":if(ut!=null)throw Error(s(137,n));break;default:ze(e,n,o,ut,a,null)}}He(e,f,b,P,tt,S,c,!1),qe(e);return;case"select":me("invalid",e),o=S=f=null;for(c in a)if(a.hasOwnProperty(c)&&(b=a[c],b!=null))switch(c){case"value":f=b;break;case"defaultValue":S=b;break;case"multiple":o=b;default:ze(e,n,c,b,a,null)}n=f,a=S,e.multiple=!!o,n!=null?on(e,!!o,n,!1):a!=null&&on(e,!!o,a,!0);return;case"textarea":me("invalid",e),f=c=o=null;for(S in a)if(a.hasOwnProperty(S)&&(b=a[S],b!=null))switch(S){case"value":o=b;break;case"defaultValue":c=b;break;case"children":f=b;break;case"dangerouslySetInnerHTML":if(b!=null)throw Error(s(91));break;default:ze(e,n,S,b,a,null)}Mn(e,o,c,f),qe(e);return;case"option":for(P in a)if(a.hasOwnProperty(P)&&(o=a[P],o!=null))switch(P){case"selected":e.selected=o&&typeof o!="function"&&typeof o!="symbol";break;default:ze(e,n,P,o,a,null)}return;case"dialog":me("beforetoggle",e),me("toggle",e),me("cancel",e),me("close",e);break;case"iframe":case"object":me("load",e);break;case"video":case"audio":for(o=0;o<fo.length;o++)me(fo[o],e);break;case"image":me("error",e),me("load",e);break;case"details":me("toggle",e);break;case"embed":case"source":case"link":me("error",e),me("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(tt in a)if(a.hasOwnProperty(tt)&&(o=a[tt],o!=null))switch(tt){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:ze(e,n,tt,o,a,null)}return;default:if(Gc(n)){for(ut in a)a.hasOwnProperty(ut)&&(o=a[ut],o!==void 0&&Af(e,n,ut,o,a,void 0));return}}for(b in a)a.hasOwnProperty(b)&&(o=a[b],o!=null&&ze(e,n,b,o,a,null))}function px(e,n,a,o){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var c=null,f=null,S=null,b=null,P=null,tt=null,ut=null;for(it in a){var _t=a[it];if(a.hasOwnProperty(it)&&_t!=null)switch(it){case"checked":break;case"value":break;case"defaultValue":P=_t;default:o.hasOwnProperty(it)||ze(e,n,it,null,o,_t)}}for(var nt in o){var it=o[nt];if(_t=a[nt],o.hasOwnProperty(nt)&&(it!=null||_t!=null))switch(nt){case"type":f=it;break;case"name":c=it;break;case"checked":tt=it;break;case"defaultChecked":ut=it;break;case"value":S=it;break;case"defaultValue":b=it;break;case"children":case"dangerouslySetInnerHTML":if(it!=null)throw Error(s(137,n));break;default:it!==_t&&ze(e,n,nt,it,o,_t)}}Li(e,S,b,P,tt,ut,f,c);return;case"select":it=S=b=nt=null;for(f in a)if(P=a[f],a.hasOwnProperty(f)&&P!=null)switch(f){case"value":break;case"multiple":it=P;default:o.hasOwnProperty(f)||ze(e,n,f,null,o,P)}for(c in o)if(f=o[c],P=a[c],o.hasOwnProperty(c)&&(f!=null||P!=null))switch(c){case"value":nt=f;break;case"defaultValue":b=f;break;case"multiple":S=f;default:f!==P&&ze(e,n,c,f,o,P)}n=b,a=S,o=it,nt!=null?on(e,!!a,nt,!1):!!o!=!!a&&(n!=null?on(e,!!a,n,!0):on(e,!!a,a?[]:"",!1));return;case"textarea":it=nt=null;for(b in a)if(c=a[b],a.hasOwnProperty(b)&&c!=null&&!o.hasOwnProperty(b))switch(b){case"value":break;case"children":break;default:ze(e,n,b,null,o,c)}for(S in o)if(c=o[S],f=a[S],o.hasOwnProperty(S)&&(c!=null||f!=null))switch(S){case"value":nt=c;break;case"defaultValue":it=c;break;case"children":break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(s(91));break;default:c!==f&&ze(e,n,S,c,o,f)}mn(e,nt,it);return;case"option":for(var ne in a)if(nt=a[ne],a.hasOwnProperty(ne)&&nt!=null&&!o.hasOwnProperty(ne))switch(ne){case"selected":e.selected=!1;break;default:ze(e,n,ne,null,o,nt)}for(P in o)if(nt=o[P],it=a[P],o.hasOwnProperty(P)&&nt!==it&&(nt!=null||it!=null))switch(P){case"selected":e.selected=nt&&typeof nt!="function"&&typeof nt!="symbol";break;default:ze(e,n,P,nt,o,it)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var $t in a)nt=a[$t],a.hasOwnProperty($t)&&nt!=null&&!o.hasOwnProperty($t)&&ze(e,n,$t,null,o,nt);for(tt in o)if(nt=o[tt],it=a[tt],o.hasOwnProperty(tt)&&nt!==it&&(nt!=null||it!=null))switch(tt){case"children":case"dangerouslySetInnerHTML":if(nt!=null)throw Error(s(137,n));break;default:ze(e,n,tt,nt,o,it)}return;default:if(Gc(n)){for(var Ie in a)nt=a[Ie],a.hasOwnProperty(Ie)&&nt!==void 0&&!o.hasOwnProperty(Ie)&&Af(e,n,Ie,void 0,o,nt);for(ut in o)nt=o[ut],it=a[ut],!o.hasOwnProperty(ut)||nt===it||nt===void 0&&it===void 0||Af(e,n,ut,nt,o,it);return}}for(var j in a)nt=a[j],a.hasOwnProperty(j)&&nt!=null&&!o.hasOwnProperty(j)&&ze(e,n,j,null,o,nt);for(_t in o)nt=o[_t],it=a[_t],!o.hasOwnProperty(_t)||nt===it||nt==null&&it==null||ze(e,n,_t,nt,o,it)}var Rf=null,Cf=null;function Hl(e){return e.nodeType===9?e:e.ownerDocument}function Ag(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Rg(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function wf(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Df=null;function mx(){var e=window.event;return e&&e.type==="popstate"?e===Df?!1:(Df=e,!0):(Df=null,!1)}var Cg=typeof setTimeout=="function"?setTimeout:void 0,gx=typeof clearTimeout=="function"?clearTimeout:void 0,wg=typeof Promise=="function"?Promise:void 0,_x=typeof queueMicrotask=="function"?queueMicrotask:typeof wg<"u"?function(e){return wg.resolve(null).then(e).catch(vx)}:Cg;function vx(e){setTimeout(function(){throw e})}function wa(e){return e==="head"}function Dg(e,n){var a=n,o=0,c=0;do{var f=a.nextSibling;if(e.removeChild(a),f&&f.nodeType===8)if(a=f.data,a==="/$"){if(0<o&&8>o){a=o;var S=e.ownerDocument;if(a&1&&po(S.documentElement),a&2&&po(S.body),a&4)for(a=S.head,po(a),S=a.firstChild;S;){var b=S.nextSibling,P=S.nodeName;S[ca]||P==="SCRIPT"||P==="STYLE"||P==="LINK"&&S.rel.toLowerCase()==="stylesheet"||a.removeChild(S),S=b}}if(c===0){e.removeChild(f),Mo(n);return}c--}else a==="$"||a==="$?"||a==="$!"?c++:o=a.charCodeAt(0)-48;else o=0;a=f}while(a);Mo(n)}function Uf(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Uf(a),ua(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function xx(e,n,a,o){for(;e.nodeType===1;){var c=a;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!o&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(o){if(!e[ca])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(f=e.getAttribute("rel"),f==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(f!==c.rel||e.getAttribute("href")!==(c.href==null||c.href===""?null:c.href)||e.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin)||e.getAttribute("title")!==(c.title==null?null:c.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(f=e.getAttribute("src"),(f!==(c.src==null?null:c.src)||e.getAttribute("type")!==(c.type==null?null:c.type)||e.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin))&&f&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var f=c.name==null?null:""+c.name;if(c.type==="hidden"&&e.getAttribute("name")===f)return e}else return e;if(e=di(e.nextSibling),e===null)break}return null}function Sx(e,n,a){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=di(e.nextSibling),e===null))return null;return e}function Lf(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState==="complete"}function yx(e,n){var a=e.ownerDocument;if(e.data!=="$?"||a.readyState==="complete")n();else{var o=function(){n(),a.removeEventListener("DOMContentLoaded",o)};a.addEventListener("DOMContentLoaded",o),e._reactRetry=o}}function di(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="F!"||n==="F")break;if(n==="/$")return null}}return e}var Nf=null;function Ug(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"){if(n===0)return e;n--}else a==="/$"&&n++}e=e.previousSibling}return null}function Lg(e,n,a){switch(n=Hl(a),e){case"html":if(e=n.documentElement,!e)throw Error(s(452));return e;case"head":if(e=n.head,!e)throw Error(s(453));return e;case"body":if(e=n.body,!e)throw Error(s(454));return e;default:throw Error(s(451))}}function po(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);ua(e)}var oi=new Map,Ng=new Set;function Gl(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var qi=Y.d;Y.d={f:Mx,r:Ex,D:Tx,C:bx,L:Ax,m:Rx,X:wx,S:Cx,M:Dx};function Mx(){var e=qi.f(),n=Ll();return e||n}function Ex(e){var n=Di(e);n!==null&&n.tag===5&&n.type==="form"?$p(n):qi.r(e)}var er=typeof document>"u"?null:document;function Og(e,n,a){var o=er;if(o&&typeof n=="string"&&n){var c=ke(n);c='link[rel="'+e+'"][href="'+c+'"]',typeof a=="string"&&(c+='[crossorigin="'+a+'"]'),Ng.has(c)||(Ng.add(c),e={rel:e,crossOrigin:a,href:n},o.querySelector(c)===null&&(n=o.createElement("link"),bn(n,"link",e),en(n),o.head.appendChild(n)))}}function Tx(e){qi.D(e),Og("dns-prefetch",e,null)}function bx(e,n){qi.C(e,n),Og("preconnect",e,n)}function Ax(e,n,a){qi.L(e,n,a);var o=er;if(o&&e&&n){var c='link[rel="preload"][as="'+ke(n)+'"]';n==="image"&&a&&a.imageSrcSet?(c+='[imagesrcset="'+ke(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(c+='[imagesizes="'+ke(a.imageSizes)+'"]')):c+='[href="'+ke(e)+'"]';var f=c;switch(n){case"style":f=nr(e);break;case"script":f=ir(e)}oi.has(f)||(e=g({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:e,as:n},a),oi.set(f,e),o.querySelector(c)!==null||n==="style"&&o.querySelector(mo(f))||n==="script"&&o.querySelector(go(f))||(n=o.createElement("link"),bn(n,"link",e),en(n),o.head.appendChild(n)))}}function Rx(e,n){qi.m(e,n);var a=er;if(a&&e){var o=n&&typeof n.as=="string"?n.as:"script",c='link[rel="modulepreload"][as="'+ke(o)+'"][href="'+ke(e)+'"]',f=c;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=ir(e)}if(!oi.has(f)&&(e=g({rel:"modulepreload",href:e},n),oi.set(f,e),a.querySelector(c)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(go(f)))return}o=a.createElement("link"),bn(o,"link",e),en(o),a.head.appendChild(o)}}}function Cx(e,n,a){qi.S(e,n,a);var o=er;if(o&&e){var c=fa(o).hoistableStyles,f=nr(e);n=n||"default";var S=c.get(f);if(!S){var b={loading:0,preload:null};if(S=o.querySelector(mo(f)))b.loading=5;else{e=g({rel:"stylesheet",href:e,"data-precedence":n},a),(a=oi.get(f))&&Of(e,a);var P=S=o.createElement("link");en(P),bn(P,"link",e),P._p=new Promise(function(tt,ut){P.onload=tt,P.onerror=ut}),P.addEventListener("load",function(){b.loading|=1}),P.addEventListener("error",function(){b.loading|=2}),b.loading|=4,Vl(S,n,o)}S={type:"stylesheet",instance:S,count:1,state:b},c.set(f,S)}}}function wx(e,n){qi.X(e,n);var a=er;if(a&&e){var o=fa(a).hoistableScripts,c=ir(e),f=o.get(c);f||(f=a.querySelector(go(c)),f||(e=g({src:e,async:!0},n),(n=oi.get(c))&&Pf(e,n),f=a.createElement("script"),en(f),bn(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},o.set(c,f))}}function Dx(e,n){qi.M(e,n);var a=er;if(a&&e){var o=fa(a).hoistableScripts,c=ir(e),f=o.get(c);f||(f=a.querySelector(go(c)),f||(e=g({src:e,async:!0,type:"module"},n),(n=oi.get(c))&&Pf(e,n),f=a.createElement("script"),en(f),bn(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},o.set(c,f))}}function Pg(e,n,a,o){var c=(c=yt.current)?Gl(c):null;if(!c)throw Error(s(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=nr(a.href),a=fa(c).hoistableStyles,o=a.get(n),o||(o={type:"style",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=nr(a.href);var f=fa(c).hoistableStyles,S=f.get(e);if(S||(c=c.ownerDocument||c,S={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(e,S),(f=c.querySelector(mo(e)))&&!f._p&&(S.instance=f,S.state.loading=5),oi.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},oi.set(e,a),f||Ux(c,e,a,S.state))),n&&o===null)throw Error(s(528,""));return S}if(n&&o!==null)throw Error(s(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=ir(a),a=fa(c).hoistableScripts,o=a.get(n),o||(o={type:"script",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,e))}}function nr(e){return'href="'+ke(e)+'"'}function mo(e){return'link[rel="stylesheet"]['+e+"]"}function zg(e){return g({},e,{"data-precedence":e.precedence,precedence:null})}function Ux(e,n,a,o){e.querySelector('link[rel="preload"][as="style"]['+n+"]")?o.loading=1:(n=e.createElement("link"),o.preload=n,n.addEventListener("load",function(){return o.loading|=1}),n.addEventListener("error",function(){return o.loading|=2}),bn(n,"link",a),en(n),e.head.appendChild(n))}function ir(e){return'[src="'+ke(e)+'"]'}function go(e){return"script[async]"+e}function Ig(e,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var o=e.querySelector('style[data-href~="'+ke(a.href)+'"]');if(o)return n.instance=o,en(o),o;var c=g({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return o=(e.ownerDocument||e).createElement("style"),en(o),bn(o,"style",c),Vl(o,a.precedence,e),n.instance=o;case"stylesheet":c=nr(a.href);var f=e.querySelector(mo(c));if(f)return n.state.loading|=4,n.instance=f,en(f),f;o=zg(a),(c=oi.get(c))&&Of(o,c),f=(e.ownerDocument||e).createElement("link"),en(f);var S=f;return S._p=new Promise(function(b,P){S.onload=b,S.onerror=P}),bn(f,"link",o),n.state.loading|=4,Vl(f,a.precedence,e),n.instance=f;case"script":return f=ir(a.src),(c=e.querySelector(go(f)))?(n.instance=c,en(c),c):(o=a,(c=oi.get(f))&&(o=g({},a),Pf(o,c)),e=e.ownerDocument||e,c=e.createElement("script"),en(c),bn(c,"link",o),e.head.appendChild(c),n.instance=c);case"void":return null;default:throw Error(s(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(o=n.instance,n.state.loading|=4,Vl(o,a.precedence,e));return n.instance}function Vl(e,n,a){for(var o=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),c=o.length?o[o.length-1]:null,f=c,S=0;S<o.length;S++){var b=o[S];if(b.dataset.precedence===n)f=b;else if(f!==c)break}f?f.parentNode.insertBefore(e,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(e,n.firstChild))}function Of(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function Pf(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var kl=null;function Bg(e,n,a){if(kl===null){var o=new Map,c=kl=new Map;c.set(a,o)}else c=kl,o=c.get(a),o||(o=new Map,c.set(a,o));if(o.has(e))return o;for(o.set(e,null),a=a.getElementsByTagName(e),c=0;c<a.length;c++){var f=a[c];if(!(f[ca]||f[rn]||e==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var S=f.getAttribute(n)||"";S=e+S;var b=o.get(S);b?b.push(f):o.set(S,[f])}}return o}function Fg(e,n,a){e=e.ownerDocument||e,e.head.insertBefore(a,n==="title"?e.querySelector("head > title"):null)}function Lx(e,n,a){if(a===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return e=n.disabled,typeof n.precedence=="string"&&e==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function Hg(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}var _o=null;function Nx(){}function Ox(e,n,a){if(_o===null)throw Error(s(475));var o=_o;if(n.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var c=nr(a.href),f=e.querySelector(mo(c));if(f){e=f._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(o.count++,o=Xl.bind(o),e.then(o,o)),n.state.loading|=4,n.instance=f,en(f);return}f=e.ownerDocument||e,a=zg(a),(c=oi.get(c))&&Of(a,c),f=f.createElement("link"),en(f);var S=f;S._p=new Promise(function(b,P){S.onload=b,S.onerror=P}),bn(f,"link",a),n.instance=f}o.stylesheets===null&&(o.stylesheets=new Map),o.stylesheets.set(n,e),(e=n.state.preload)&&(n.state.loading&3)===0&&(o.count++,n=Xl.bind(o),e.addEventListener("load",n),e.addEventListener("error",n))}}function Px(){if(_o===null)throw Error(s(475));var e=_o;return e.stylesheets&&e.count===0&&zf(e,e.stylesheets),0<e.count?function(n){var a=setTimeout(function(){if(e.stylesheets&&zf(e,e.stylesheets),e.unsuspend){var o=e.unsuspend;e.unsuspend=null,o()}},6e4);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(a)}}:null}function Xl(){if(this.count--,this.count===0){if(this.stylesheets)zf(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Wl=null;function zf(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Wl=new Map,n.forEach(zx,e),Wl=null,Xl.call(e))}function zx(e,n){if(!(n.state.loading&4)){var a=Wl.get(e);if(a)var o=a.get(null);else{a=new Map,Wl.set(e,a);for(var c=e.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<c.length;f++){var S=c[f];(S.nodeName==="LINK"||S.getAttribute("media")!=="not all")&&(a.set(S.dataset.precedence,S),o=S)}o&&a.set(null,o)}c=n.instance,S=c.getAttribute("data-precedence"),f=a.get(S)||o,f===o&&a.set(null,c),a.set(S,c),this.count++,o=Xl.bind(this),c.addEventListener("load",o),c.addEventListener("error",o),f?f.parentNode.insertBefore(c,f.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(c,e.firstChild)),n.state.loading|=4}}var vo={$$typeof:L,Provider:null,Consumer:null,_currentValue:X,_currentValue2:X,_threadCount:0};function Ix(e,n,a,o,c,f,S,b){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Et(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Et(0),this.hiddenUpdates=Et(null),this.identifierPrefix=o,this.onUncaughtError=c,this.onCaughtError=f,this.onRecoverableError=S,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=b,this.incompleteTransitions=new Map}function Gg(e,n,a,o,c,f,S,b,P,tt,ut,_t){return e=new Ix(e,n,a,S,b,P,tt,_t),n=1,f===!0&&(n|=24),f=qn(3,null,null,n),e.current=f,f.stateNode=e,n=gu(),n.refCount++,e.pooledCache=n,n.refCount++,f.memoizedState={element:o,isDehydrated:a,cache:n},Su(f),e}function Vg(e){return e?(e=Os,e):Os}function kg(e,n,a,o,c,f){c=Vg(c),o.context===null?o.context=c:o.pendingContext=c,o=ga(n),o.payload={element:a},f=f===void 0?null:f,f!==null&&(o.callback=f),a=_a(e,o,n),a!==null&&(Jn(a,e,n),qr(a,e,n))}function Xg(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<n?a:n}}function If(e,n){Xg(e,n),(e=e.alternate)&&Xg(e,n)}function Wg(e){if(e.tag===13){var n=Ns(e,67108864);n!==null&&Jn(n,e,67108864),If(e,67108864)}}var Yl=!0;function Bx(e,n,a,o){var c=N.T;N.T=null;var f=Y.p;try{Y.p=2,Bf(e,n,a,o)}finally{Y.p=f,N.T=c}}function Fx(e,n,a,o){var c=N.T;N.T=null;var f=Y.p;try{Y.p=8,Bf(e,n,a,o)}finally{Y.p=f,N.T=c}}function Bf(e,n,a,o){if(Yl){var c=Ff(o);if(c===null)bf(e,n,o,ql,a),qg(e,o);else if(Gx(c,e,n,a,o))o.stopPropagation();else if(qg(e,o),n&4&&-1<Hx.indexOf(e)){for(;c!==null;){var f=Di(c);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var S=jt(f.pendingLanes);if(S!==0){var b=f;for(b.pendingLanes|=2,b.entangledLanes|=2;S;){var P=1<<31-Ot(S);b.entanglements[1]|=P,S&=~P}Ai(f),(Ne&6)===0&&(Dl=de()+500,uo(0))}}break;case 13:b=Ns(f,2),b!==null&&Jn(b,f,2),Ll(),If(f,2)}if(f=Ff(o),f===null&&bf(e,n,o,ql,a),f===c)break;c=f}c!==null&&o.stopPropagation()}else bf(e,n,o,null,a)}}function Ff(e){return e=kc(e),Hf(e)}var ql=null;function Hf(e){if(ql=null,e=wi(e),e!==null){var n=u(e);if(n===null)e=null;else{var a=n.tag;if(a===13){if(e=h(n),e!==null)return e;e=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return ql=e,null}function Yg(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(kt()){case ve:return 2;case Kt:return 8;case se:case Ke:return 32;case O:return 268435456;default:return 32}default:return 32}}var Gf=!1,Da=null,Ua=null,La=null,xo=new Map,So=new Map,Na=[],Hx="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function qg(e,n){switch(e){case"focusin":case"focusout":Da=null;break;case"dragenter":case"dragleave":Ua=null;break;case"mouseover":case"mouseout":La=null;break;case"pointerover":case"pointerout":xo.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":So.delete(n.pointerId)}}function yo(e,n,a,o,c,f){return e===null||e.nativeEvent!==f?(e={blockedOn:n,domEventName:a,eventSystemFlags:o,nativeEvent:f,targetContainers:[c]},n!==null&&(n=Di(n),n!==null&&Wg(n)),e):(e.eventSystemFlags|=o,n=e.targetContainers,c!==null&&n.indexOf(c)===-1&&n.push(c),e)}function Gx(e,n,a,o,c){switch(n){case"focusin":return Da=yo(Da,e,n,a,o,c),!0;case"dragenter":return Ua=yo(Ua,e,n,a,o,c),!0;case"mouseover":return La=yo(La,e,n,a,o,c),!0;case"pointerover":var f=c.pointerId;return xo.set(f,yo(xo.get(f)||null,e,n,a,o,c)),!0;case"gotpointercapture":return f=c.pointerId,So.set(f,yo(So.get(f)||null,e,n,a,o,c)),!0}return!1}function jg(e){var n=wi(e.target);if(n!==null){var a=u(n);if(a!==null){if(n=a.tag,n===13){if(n=h(a),n!==null){e.blockedOn=n,Wn(e.priority,function(){if(a.tag===13){var o=Qn();o=ie(o);var c=Ns(a,o);c!==null&&Jn(c,a,o),If(a,o)}});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function jl(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var a=Ff(e.nativeEvent);if(a===null){a=e.nativeEvent;var o=new a.constructor(a.type,a);Vc=o,a.target.dispatchEvent(o),Vc=null}else return n=Di(a),n!==null&&Wg(n),e.blockedOn=a,!1;n.shift()}return!0}function Zg(e,n,a){jl(e)&&a.delete(n)}function Vx(){Gf=!1,Da!==null&&jl(Da)&&(Da=null),Ua!==null&&jl(Ua)&&(Ua=null),La!==null&&jl(La)&&(La=null),xo.forEach(Zg),So.forEach(Zg)}function Zl(e,n){e.blockedOn===n&&(e.blockedOn=null,Gf||(Gf=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,Vx)))}var Kl=null;function Kg(e){Kl!==e&&(Kl=e,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){Kl===e&&(Kl=null);for(var n=0;n<e.length;n+=3){var a=e[n],o=e[n+1],c=e[n+2];if(typeof o!="function"){if(Hf(o||a)===null)continue;break}var f=Di(a);f!==null&&(e.splice(n,3),n-=3,Fu(f,{pending:!0,data:c,method:a.method,action:o},o,c))}}))}function Mo(e){function n(P){return Zl(P,e)}Da!==null&&Zl(Da,e),Ua!==null&&Zl(Ua,e),La!==null&&Zl(La,e),xo.forEach(n),So.forEach(n);for(var a=0;a<Na.length;a++){var o=Na[a];o.blockedOn===e&&(o.blockedOn=null)}for(;0<Na.length&&(a=Na[0],a.blockedOn===null);)jg(a),a.blockedOn===null&&Na.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(o=0;o<a.length;o+=3){var c=a[o],f=a[o+1],S=c[yn]||null;if(typeof f=="function")S||Kg(a);else if(S){var b=null;if(f&&f.hasAttribute("formAction")){if(c=f,S=f[yn]||null)b=S.formAction;else if(Hf(c)!==null)continue}else b=S.action;typeof b=="function"?a[o+1]=b:(a.splice(o,3),o-=3),Kg(a)}}}function Vf(e){this._internalRoot=e}Ql.prototype.render=Vf.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(s(409));var a=n.current,o=Qn();kg(a,o,e,n,null,null)},Ql.prototype.unmount=Vf.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;kg(e.current,2,null,e,null,null),Ll(),n[zn]=null}};function Ql(e){this._internalRoot=e}Ql.prototype.unstable_scheduleHydration=function(e){if(e){var n=Ae();e={blockedOn:null,target:e,priority:n};for(var a=0;a<Na.length&&n!==0&&n<Na[a].priority;a++);Na.splice(a,0,e),a===0&&jg(e)}};var Qg=t.version;if(Qg!=="19.1.0")throw Error(s(527,Qg,"19.1.0"));Y.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(s(188)):(e=Object.keys(e).join(","),Error(s(268,e)));return e=m(n),e=e!==null?p(e):null,e=e===null?null:e.stateNode,e};var kx={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:N,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Jl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Jl.isDisabled&&Jl.supportsFiber)try{ht=Jl.inject(kx),mt=Jl}catch{}}return To.createRoot=function(e,n){if(!l(e))throw Error(s(299));var a=!1,o="",c=dm,f=pm,S=mm,b=null;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(c=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(S=n.onRecoverableError),n.unstable_transitionCallbacks!==void 0&&(b=n.unstable_transitionCallbacks)),n=Gg(e,1,!1,null,null,a,o,c,f,S,b,null),e[zn]=n.current,Tf(e),new Vf(n)},To.hydrateRoot=function(e,n,a){if(!l(e))throw Error(s(299));var o=!1,c="",f=dm,S=pm,b=mm,P=null,tt=null;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(c=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(S=a.onCaughtError),a.onRecoverableError!==void 0&&(b=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(P=a.unstable_transitionCallbacks),a.formState!==void 0&&(tt=a.formState)),n=Gg(e,1,!0,n,a??null,o,c,f,S,b,P,tt),n.context=Vg(null),a=n.current,o=Qn(),o=ie(o),c=ga(o),c.callback=null,_a(a,c,o),a=o,n.current.lanes=a,zt(n,a),Ai(n),e[zn]=n.current,Tf(e),new Ql(n)},To.version="19.1.0",To}var o_;function tS(){if(o_)return Wf.exports;o_=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(t){console.error(t)}}return r(),Wf.exports=$x(),Wf.exports}var eS=tS(),Tc={exports:{}},nS=Tc.exports,l_;function iS(){return l_||(l_=1,function(r,t){(function(i,s){r.exports=s()})(nS,function(){var i=function(){function s(M){return h.appendChild(M.dom),M}function l(M){for(var E=0;E<h.children.length;E++)h.children[E].style.display=E===M?"block":"none";u=M}var u=0,h=document.createElement("div");h.style.cssText="position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000",h.addEventListener("click",function(M){M.preventDefault(),l(++u%h.children.length)},!1);var d=(performance||Date).now(),m=d,p=0,g=s(new i.Panel("FPS","#0ff","#002")),x=s(new i.Panel("MS","#0f0","#020"));if(self.performance&&self.performance.memory)var _=s(new i.Panel("MB","#f08","#201"));return l(0),{REVISION:16,dom:h,addPanel:s,showPanel:l,begin:function(){d=(performance||Date).now()},end:function(){p++;var M=(performance||Date).now();if(x.update(M-d,200),M>m+1e3&&(g.update(1e3*p/(M-m),100),m=M,p=0,_)){var E=performance.memory;_.update(E.usedJSHeapSize/1048576,E.jsHeapSizeLimit/1048576)}return M},update:function(){d=this.end()},domElement:h,setMode:l}};return i.Panel=function(s,l,u){var h=1/0,d=0,m=Math.round,p=m(window.devicePixelRatio||1),g=80*p,x=48*p,_=3*p,M=2*p,E=3*p,R=15*p,y=74*p,v=30*p,z=document.createElement("canvas");z.width=g,z.height=x,z.style.cssText="width:80px;height:48px";var L=z.getContext("2d");return L.font="bold "+9*p+"px Helvetica,Arial,sans-serif",L.textBaseline="top",L.fillStyle=u,L.fillRect(0,0,g,x),L.fillStyle=l,L.fillText(s,_,M),L.fillRect(E,R,y,v),L.fillStyle=u,L.globalAlpha=.9,L.fillRect(E,R,y,v),{dom:z,update:function(w,F){h=Math.min(h,w),d=Math.max(d,w),L.fillStyle=u,L.globalAlpha=1,L.fillRect(0,0,g,R),L.fillStyle=l,L.fillText(m(w)+" "+s+" ("+m(h)+"-"+m(d)+")",_,M),L.drawImage(z,E+p,R,y-p,v,E,R,y-p,v),L.fillRect(E+y-p,R,p,v),L.fillStyle=u,L.globalAlpha=.9,L.fillRect(E+y-p,R,p,m((1-w/F)*v))}}},i})}(Tc)),Tc.exports}var aS=iS();const sS=Wx(aS),rS=({statsRef:r})=>{const t=fn.useRef(null);return fn.useEffect(()=>{const i=new sS;return i.showPanel(0),i.dom.style.position="absolute",i.dom.style.top="0px",i.dom.style.left="0px",t.current?.appendChild(i.dom),r.current=i,()=>{i.dom.parentNode&&i.dom.parentNode.removeChild(i.dom),r.current=null}},[r]),Ht.jsx("div",{ref:t,style:{position:"absolute",top:0,left:0,zIndex:10}})},oS=({drawCalls:r})=>Ht.jsxs("div",{style:{position:"absolute",top:0,right:0,color:"#0f0",background:"rgba(0,0,0,0.6)",font:"12px monospace",padding:"2px 8px",zIndex:10},children:["Draw Calls: ",r]});/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const md="177",Sr={ROTATE:0,DOLLY:1,PAN:2},vr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},lS=0,c_=1,cS=2,h0=1,uS=2,$i=3,Wa=0,kn=1,ta=2,ka=0,yr=1,u_=2,f_=3,h_=4,fS=5,xs=100,hS=101,dS=102,pS=103,mS=104,gS=200,_S=201,vS=202,xS=203,Rh=204,Ch=205,SS=206,yS=207,MS=208,ES=209,TS=210,bS=211,AS=212,RS=213,CS=214,wh=0,Dh=1,Uh=2,Tr=3,Lh=4,Nh=5,Oh=6,Ph=7,d0=0,wS=1,DS=2,Xa=0,US=1,LS=2,NS=3,OS=4,PS=5,zS=6,IS=7,p0=300,br=301,Ar=302,zh=303,Ih=304,Ic=306,Bh=1e3,ys=1001,Fh=1002,xi=1003,BS=1004,$l=1005,Ci=1006,Zf=1007,Ms=1008,ra=1009,m0=1010,g0=1011,Oo=1012,gd=1013,Es=1014,ea=1015,Bo=1016,_d=1017,vd=1018,Po=1020,_0=35902,v0=1021,x0=1022,vi=1023,zo=1026,Io=1027,S0=1028,xd=1029,y0=1030,Sd=1031,yd=1033,bc=33776,Ac=33777,Rc=33778,Cc=33779,Hh=35840,Gh=35841,Vh=35842,kh=35843,Xh=36196,Wh=37492,Yh=37496,qh=37808,jh=37809,Zh=37810,Kh=37811,Qh=37812,Jh=37813,$h=37814,td=37815,ed=37816,nd=37817,id=37818,ad=37819,sd=37820,rd=37821,wc=36492,od=36494,ld=36495,M0=36283,cd=36284,ud=36285,fd=36286,FS=3200,HS=3201,GS=0,VS=1,Va="",ci="srgb",Rr="srgb-linear",Lc="linear",Be="srgb",ar=7680,d_=519,kS=512,XS=513,WS=514,E0=515,YS=516,qS=517,jS=518,ZS=519,p_=35044,m_="300 es",na=2e3,Nc=2001;class As{addEventListener(t,i){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[t]===void 0&&(s[t]=[]),s[t].indexOf(i)===-1&&s[t].push(i)}hasEventListener(t,i){const s=this._listeners;return s===void 0?!1:s[t]!==void 0&&s[t].indexOf(i)!==-1}removeEventListener(t,i){const s=this._listeners;if(s===void 0)return;const l=s[t];if(l!==void 0){const u=l.indexOf(i);u!==-1&&l.splice(u,1)}}dispatchEvent(t){const i=this._listeners;if(i===void 0)return;const s=i[t.type];if(s!==void 0){t.target=this;const l=s.slice(0);for(let u=0,h=l.length;u<h;u++)l[u].call(this,t);t.target=null}}}const Dn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Dc=Math.PI/180,hd=180/Math.PI;function Fo(){const r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(Dn[r&255]+Dn[r>>8&255]+Dn[r>>16&255]+Dn[r>>24&255]+"-"+Dn[t&255]+Dn[t>>8&255]+"-"+Dn[t>>16&15|64]+Dn[t>>24&255]+"-"+Dn[i&63|128]+Dn[i>>8&255]+"-"+Dn[i>>16&255]+Dn[i>>24&255]+Dn[s&255]+Dn[s>>8&255]+Dn[s>>16&255]+Dn[s>>24&255]).toLowerCase()}function ge(r,t,i){return Math.max(t,Math.min(i,r))}function KS(r,t){return(r%t+t)%t}function Kf(r,t,i){return(1-i)*r+i*t}function bo(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Gn(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const QS={DEG2RAD:Dc};class he{constructor(t=0,i=0){he.prototype.isVector2=!0,this.x=t,this.y=i}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,i){return this.x=t,this.y=i,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const i=this.x,s=this.y,l=t.elements;return this.x=l[0]*i+l[3]*s+l[6],this.y=l[1]*i+l[4]*s+l[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,i){return this.x=ge(this.x,t.x,i.x),this.y=ge(this.y,t.y,i.y),this}clampScalar(t,i){return this.x=ge(this.x,t,i),this.y=ge(this.y,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(ge(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(t)/i;return Math.acos(ge(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,s=this.y-t.y;return i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this}rotateAround(t,i){const s=Math.cos(i),l=Math.sin(i),u=this.x-t.x,h=this.y-t.y;return this.x=u*s-h*l+t.x,this.y=u*l+h*s+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ts{constructor(t=0,i=0,s=0,l=1){this.isQuaternion=!0,this._x=t,this._y=i,this._z=s,this._w=l}static slerpFlat(t,i,s,l,u,h,d){let m=s[l+0],p=s[l+1],g=s[l+2],x=s[l+3];const _=u[h+0],M=u[h+1],E=u[h+2],R=u[h+3];if(d===0){t[i+0]=m,t[i+1]=p,t[i+2]=g,t[i+3]=x;return}if(d===1){t[i+0]=_,t[i+1]=M,t[i+2]=E,t[i+3]=R;return}if(x!==R||m!==_||p!==M||g!==E){let y=1-d;const v=m*_+p*M+g*E+x*R,z=v>=0?1:-1,L=1-v*v;if(L>Number.EPSILON){const F=Math.sqrt(L),k=Math.atan2(F,v*z);y=Math.sin(y*k)/F,d=Math.sin(d*k)/F}const w=d*z;if(m=m*y+_*w,p=p*y+M*w,g=g*y+E*w,x=x*y+R*w,y===1-d){const F=1/Math.sqrt(m*m+p*p+g*g+x*x);m*=F,p*=F,g*=F,x*=F}}t[i]=m,t[i+1]=p,t[i+2]=g,t[i+3]=x}static multiplyQuaternionsFlat(t,i,s,l,u,h){const d=s[l],m=s[l+1],p=s[l+2],g=s[l+3],x=u[h],_=u[h+1],M=u[h+2],E=u[h+3];return t[i]=d*E+g*x+m*M-p*_,t[i+1]=m*E+g*_+p*x-d*M,t[i+2]=p*E+g*M+d*_-m*x,t[i+3]=g*E-d*x-m*_-p*M,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,i,s,l){return this._x=t,this._y=i,this._z=s,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,i=!0){const s=t._x,l=t._y,u=t._z,h=t._order,d=Math.cos,m=Math.sin,p=d(s/2),g=d(l/2),x=d(u/2),_=m(s/2),M=m(l/2),E=m(u/2);switch(h){case"XYZ":this._x=_*g*x+p*M*E,this._y=p*M*x-_*g*E,this._z=p*g*E+_*M*x,this._w=p*g*x-_*M*E;break;case"YXZ":this._x=_*g*x+p*M*E,this._y=p*M*x-_*g*E,this._z=p*g*E-_*M*x,this._w=p*g*x+_*M*E;break;case"ZXY":this._x=_*g*x-p*M*E,this._y=p*M*x+_*g*E,this._z=p*g*E+_*M*x,this._w=p*g*x-_*M*E;break;case"ZYX":this._x=_*g*x-p*M*E,this._y=p*M*x+_*g*E,this._z=p*g*E-_*M*x,this._w=p*g*x+_*M*E;break;case"YZX":this._x=_*g*x+p*M*E,this._y=p*M*x+_*g*E,this._z=p*g*E-_*M*x,this._w=p*g*x-_*M*E;break;case"XZY":this._x=_*g*x-p*M*E,this._y=p*M*x-_*g*E,this._z=p*g*E+_*M*x,this._w=p*g*x+_*M*E;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+h)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,i){const s=i/2,l=Math.sin(s);return this._x=t.x*l,this._y=t.y*l,this._z=t.z*l,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(t){const i=t.elements,s=i[0],l=i[4],u=i[8],h=i[1],d=i[5],m=i[9],p=i[2],g=i[6],x=i[10],_=s+d+x;if(_>0){const M=.5/Math.sqrt(_+1);this._w=.25/M,this._x=(g-m)*M,this._y=(u-p)*M,this._z=(h-l)*M}else if(s>d&&s>x){const M=2*Math.sqrt(1+s-d-x);this._w=(g-m)/M,this._x=.25*M,this._y=(l+h)/M,this._z=(u+p)/M}else if(d>x){const M=2*Math.sqrt(1+d-s-x);this._w=(u-p)/M,this._x=(l+h)/M,this._y=.25*M,this._z=(m+g)/M}else{const M=2*Math.sqrt(1+x-s-d);this._w=(h-l)/M,this._x=(u+p)/M,this._y=(m+g)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(t,i){let s=t.dot(i)+1;return s<Number.EPSILON?(s=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=s):(this._x=0,this._y=-t.z,this._z=t.y,this._w=s)):(this._x=t.y*i.z-t.z*i.y,this._y=t.z*i.x-t.x*i.z,this._z=t.x*i.y-t.y*i.x,this._w=s),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ge(this.dot(t),-1,1)))}rotateTowards(t,i){const s=this.angleTo(t);if(s===0)return this;const l=Math.min(1,i/s);return this.slerp(t,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,i){const s=t._x,l=t._y,u=t._z,h=t._w,d=i._x,m=i._y,p=i._z,g=i._w;return this._x=s*g+h*d+l*p-u*m,this._y=l*g+h*m+u*d-s*p,this._z=u*g+h*p+s*m-l*d,this._w=h*g-s*d-l*m-u*p,this._onChangeCallback(),this}slerp(t,i){if(i===0)return this;if(i===1)return this.copy(t);const s=this._x,l=this._y,u=this._z,h=this._w;let d=h*t._w+s*t._x+l*t._y+u*t._z;if(d<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,d=-d):this.copy(t),d>=1)return this._w=h,this._x=s,this._y=l,this._z=u,this;const m=1-d*d;if(m<=Number.EPSILON){const M=1-i;return this._w=M*h+i*this._w,this._x=M*s+i*this._x,this._y=M*l+i*this._y,this._z=M*u+i*this._z,this.normalize(),this}const p=Math.sqrt(m),g=Math.atan2(p,d),x=Math.sin((1-i)*g)/p,_=Math.sin(i*g)/p;return this._w=h*x+this._w*_,this._x=s*x+this._x*_,this._y=l*x+this._y*_,this._z=u*x+this._z*_,this._onChangeCallback(),this}slerpQuaternions(t,i,s){return this.copy(t).slerp(i,s)}random(){const t=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),s=Math.random(),l=Math.sqrt(1-s),u=Math.sqrt(s);return this.set(l*Math.sin(t),l*Math.cos(t),u*Math.sin(i),u*Math.cos(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,i=0){return this._x=t[i],this._y=t[i+1],this._z=t[i+2],this._w=t[i+3],this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._w,t}fromBufferAttribute(t,i){return this._x=t.getX(i),this._y=t.getY(i),this._z=t.getZ(i),this._w=t.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class ${constructor(t=0,i=0,s=0){$.prototype.isVector3=!0,this.x=t,this.y=i,this.z=s}set(t,i,s){return s===void 0&&(s=this.z),this.x=t,this.y=i,this.z=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,i){return this.x=t.x*i.x,this.y=t.y*i.y,this.z=t.z*i.z,this}applyEuler(t){return this.applyQuaternion(g_.setFromEuler(t))}applyAxisAngle(t,i){return this.applyQuaternion(g_.setFromAxisAngle(t,i))}applyMatrix3(t){const i=this.x,s=this.y,l=this.z,u=t.elements;return this.x=u[0]*i+u[3]*s+u[6]*l,this.y=u[1]*i+u[4]*s+u[7]*l,this.z=u[2]*i+u[5]*s+u[8]*l,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const i=this.x,s=this.y,l=this.z,u=t.elements,h=1/(u[3]*i+u[7]*s+u[11]*l+u[15]);return this.x=(u[0]*i+u[4]*s+u[8]*l+u[12])*h,this.y=(u[1]*i+u[5]*s+u[9]*l+u[13])*h,this.z=(u[2]*i+u[6]*s+u[10]*l+u[14])*h,this}applyQuaternion(t){const i=this.x,s=this.y,l=this.z,u=t.x,h=t.y,d=t.z,m=t.w,p=2*(h*l-d*s),g=2*(d*i-u*l),x=2*(u*s-h*i);return this.x=i+m*p+h*x-d*g,this.y=s+m*g+d*p-u*x,this.z=l+m*x+u*g-h*p,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const i=this.x,s=this.y,l=this.z,u=t.elements;return this.x=u[0]*i+u[4]*s+u[8]*l,this.y=u[1]*i+u[5]*s+u[9]*l,this.z=u[2]*i+u[6]*s+u[10]*l,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,i){return this.x=ge(this.x,t.x,i.x),this.y=ge(this.y,t.y,i.y),this.z=ge(this.z,t.z,i.z),this}clampScalar(t,i){return this.x=ge(this.x,t,i),this.y=ge(this.y,t,i),this.z=ge(this.z,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(ge(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this.z=t.z+(i.z-t.z)*s,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,i){const s=t.x,l=t.y,u=t.z,h=i.x,d=i.y,m=i.z;return this.x=l*m-u*d,this.y=u*h-s*m,this.z=s*d-l*h,this}projectOnVector(t){const i=t.lengthSq();if(i===0)return this.set(0,0,0);const s=t.dot(this)/i;return this.copy(t).multiplyScalar(s)}projectOnPlane(t){return Qf.copy(this).projectOnVector(t),this.sub(Qf)}reflect(t){return this.sub(Qf.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(t)/i;return Math.acos(ge(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,s=this.y-t.y,l=this.z-t.z;return i*i+s*s+l*l}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,i,s){const l=Math.sin(i)*t;return this.x=l*Math.sin(s),this.y=Math.cos(i)*t,this.z=l*Math.cos(s),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,i,s){return this.x=t*Math.sin(i),this.y=s,this.z=t*Math.cos(i),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(t){const i=this.setFromMatrixColumn(t,0).length(),s=this.setFromMatrixColumn(t,1).length(),l=this.setFromMatrixColumn(t,2).length();return this.x=i,this.y=s,this.z=l,this}setFromMatrixColumn(t,i){return this.fromArray(t.elements,i*4)}setFromMatrix3Column(t,i){return this.fromArray(t.elements,i*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,i=Math.random()*2-1,s=Math.sqrt(1-i*i);return this.x=s*Math.cos(t),this.y=i,this.z=s*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Qf=new $,g_=new Ts;class oe{constructor(t,i,s,l,u,h,d,m,p){oe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,i,s,l,u,h,d,m,p)}set(t,i,s,l,u,h,d,m,p){const g=this.elements;return g[0]=t,g[1]=l,g[2]=d,g[3]=i,g[4]=u,g[5]=m,g[6]=s,g[7]=h,g[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const i=this.elements,s=t.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],this}extractBasis(t,i,s){return t.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const i=t.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const s=t.elements,l=i.elements,u=this.elements,h=s[0],d=s[3],m=s[6],p=s[1],g=s[4],x=s[7],_=s[2],M=s[5],E=s[8],R=l[0],y=l[3],v=l[6],z=l[1],L=l[4],w=l[7],F=l[2],k=l[5],I=l[8];return u[0]=h*R+d*z+m*F,u[3]=h*y+d*L+m*k,u[6]=h*v+d*w+m*I,u[1]=p*R+g*z+x*F,u[4]=p*y+g*L+x*k,u[7]=p*v+g*w+x*I,u[2]=_*R+M*z+E*F,u[5]=_*y+M*L+E*k,u[8]=_*v+M*w+E*I,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=t,i[4]*=t,i[7]*=t,i[2]*=t,i[5]*=t,i[8]*=t,this}determinant(){const t=this.elements,i=t[0],s=t[1],l=t[2],u=t[3],h=t[4],d=t[5],m=t[6],p=t[7],g=t[8];return i*h*g-i*d*p-s*u*g+s*d*m+l*u*p-l*h*m}invert(){const t=this.elements,i=t[0],s=t[1],l=t[2],u=t[3],h=t[4],d=t[5],m=t[6],p=t[7],g=t[8],x=g*h-d*p,_=d*m-g*u,M=p*u-h*m,E=i*x+s*_+l*M;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const R=1/E;return t[0]=x*R,t[1]=(l*p-g*s)*R,t[2]=(d*s-l*h)*R,t[3]=_*R,t[4]=(g*i-l*m)*R,t[5]=(l*u-d*i)*R,t[6]=M*R,t[7]=(s*m-p*i)*R,t[8]=(h*i-s*u)*R,this}transpose(){let t;const i=this.elements;return t=i[1],i[1]=i[3],i[3]=t,t=i[2],i[2]=i[6],i[6]=t,t=i[5],i[5]=i[7],i[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const i=this.elements;return t[0]=i[0],t[1]=i[3],t[2]=i[6],t[3]=i[1],t[4]=i[4],t[5]=i[7],t[6]=i[2],t[7]=i[5],t[8]=i[8],this}setUvTransform(t,i,s,l,u,h,d){const m=Math.cos(u),p=Math.sin(u);return this.set(s*m,s*p,-s*(m*h+p*d)+h+t,-l*p,l*m,-l*(-p*h+m*d)+d+i,0,0,1),this}scale(t,i){return this.premultiply(Jf.makeScale(t,i)),this}rotate(t){return this.premultiply(Jf.makeRotation(-t)),this}translate(t,i){return this.premultiply(Jf.makeTranslation(t,i)),this}makeTranslation(t,i){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,i,0,0,1),this}makeRotation(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,-s,0,s,i,0,0,0,1),this}makeScale(t,i){return this.set(t,0,0,0,i,0,0,0,1),this}equals(t){const i=this.elements,s=t.elements;for(let l=0;l<9;l++)if(i[l]!==s[l])return!1;return!0}fromArray(t,i=0){for(let s=0;s<9;s++)this.elements[s]=t[s+i];return this}toArray(t=[],i=0){const s=this.elements;return t[i]=s[0],t[i+1]=s[1],t[i+2]=s[2],t[i+3]=s[3],t[i+4]=s[4],t[i+5]=s[5],t[i+6]=s[6],t[i+7]=s[7],t[i+8]=s[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Jf=new oe;function T0(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function Oc(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function JS(){const r=Oc("canvas");return r.style.display="block",r}const __={};function Mr(r){r in __||(__[r]=!0,console.warn(r))}function $S(r,t,i){return new Promise(function(s,l){function u(){switch(r.clientWaitSync(t,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:l();break;case r.TIMEOUT_EXPIRED:setTimeout(u,i);break;default:s()}}setTimeout(u,i)})}function ty(r){const t=r.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function ey(r){const t=r.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const v_=new oe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),x_=new oe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function ny(){const r={enabled:!0,workingColorSpace:Rr,spaces:{},convert:function(l,u,h){return this.enabled===!1||u===h||!u||!h||(this.spaces[u].transfer===Be&&(l.r=aa(l.r),l.g=aa(l.g),l.b=aa(l.b)),this.spaces[u].primaries!==this.spaces[h].primaries&&(l.applyMatrix3(this.spaces[u].toXYZ),l.applyMatrix3(this.spaces[h].fromXYZ)),this.spaces[h].transfer===Be&&(l.r=Er(l.r),l.g=Er(l.g),l.b=Er(l.b))),l},workingToColorSpace:function(l,u){return this.convert(l,this.workingColorSpace,u)},colorSpaceToWorking:function(l,u){return this.convert(l,u,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===Va?Lc:this.spaces[l].transfer},getLuminanceCoefficients:function(l,u=this.workingColorSpace){return l.fromArray(this.spaces[u].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,u,h){return l.copy(this.spaces[u].toXYZ).multiply(this.spaces[h].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,u){return Mr("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(l,u)},toWorkingColorSpace:function(l,u){return Mr("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(l,u)}},t=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],s=[.3127,.329];return r.define({[Rr]:{primaries:t,whitePoint:s,transfer:Lc,toXYZ:v_,fromXYZ:x_,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:ci},outputColorSpaceConfig:{drawingBufferColorSpace:ci}},[ci]:{primaries:t,whitePoint:s,transfer:Be,toXYZ:v_,fromXYZ:x_,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:ci}}}),r}const Ce=ny();function aa(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Er(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let sr;class iy{static getDataURL(t,i="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let s;if(t instanceof HTMLCanvasElement)s=t;else{sr===void 0&&(sr=Oc("canvas")),sr.width=t.width,sr.height=t.height;const l=sr.getContext("2d");t instanceof ImageData?l.putImageData(t,0,0):l.drawImage(t,0,0,t.width,t.height),s=sr}return s.toDataURL(i)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const i=Oc("canvas");i.width=t.width,i.height=t.height;const s=i.getContext("2d");s.drawImage(t,0,0,t.width,t.height);const l=s.getImageData(0,0,t.width,t.height),u=l.data;for(let h=0;h<u.length;h++)u[h]=aa(u[h]/255)*255;return s.putImageData(l,0,0),i}else if(t.data){const i=t.data.slice(0);for(let s=0;s<i.length;s++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[s]=Math.floor(aa(i[s]/255)*255):i[s]=aa(i[s]);return{data:i,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let ay=0;class Md{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:ay++}),this.uuid=Fo(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const i=this.data;return i instanceof HTMLVideoElement?t.set(i.videoWidth,i.videoHeight):i!==null?t.set(i.width,i.height,i.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const s={uuid:this.uuid,url:""},l=this.data;if(l!==null){let u;if(Array.isArray(l)){u=[];for(let h=0,d=l.length;h<d;h++)l[h].isDataTexture?u.push($f(l[h].image)):u.push($f(l[h]))}else u=$f(l);s.url=u}return i||(t.images[this.uuid]=s),s}}function $f(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?iy.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let sy=0;const th=new $;class Xn extends As{constructor(t=Xn.DEFAULT_IMAGE,i=Xn.DEFAULT_MAPPING,s=ys,l=ys,u=Ci,h=Ms,d=vi,m=ra,p=Xn.DEFAULT_ANISOTROPY,g=Va){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:sy++}),this.uuid=Fo(),this.name="",this.source=new Md(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=s,this.wrapT=l,this.magFilter=u,this.minFilter=h,this.anisotropy=p,this.format=d,this.internalFormat=null,this.type=m,this.offset=new he(0,0),this.repeat=new he(1,1),this.center=new he(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new oe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(th).x}get height(){return this.source.getSize(th).y}get depth(){return this.source.getSize(th).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const i in t){const s=t[i];if(s===void 0){console.warn(`THREE.Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Texture.setValues(): property '${i}' does not exist.`);continue}l&&s&&l.isVector2&&s.isVector2||l&&s&&l.isVector3&&s.isVector3||l&&s&&l.isMatrix3&&s.isMatrix3?l.copy(s):this[i]=s}}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const s={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),i||(t.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==p0)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Bh:t.x=t.x-Math.floor(t.x);break;case ys:t.x=t.x<0?0:1;break;case Fh:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Bh:t.y=t.y-Math.floor(t.y);break;case ys:t.y=t.y<0?0:1;break;case Fh:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Xn.DEFAULT_IMAGE=null;Xn.DEFAULT_MAPPING=p0;Xn.DEFAULT_ANISOTROPY=1;class $e{constructor(t=0,i=0,s=0,l=1){$e.prototype.isVector4=!0,this.x=t,this.y=i,this.z=s,this.w=l}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,i,s,l){return this.x=t,this.y=i,this.z=s,this.w=l,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this.w=t.w+i.w,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this.w+=t.w*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this.w=t.w-i.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const i=this.x,s=this.y,l=this.z,u=this.w,h=t.elements;return this.x=h[0]*i+h[4]*s+h[8]*l+h[12]*u,this.y=h[1]*i+h[5]*s+h[9]*l+h[13]*u,this.z=h[2]*i+h[6]*s+h[10]*l+h[14]*u,this.w=h[3]*i+h[7]*s+h[11]*l+h[15]*u,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const i=Math.sqrt(1-t.w*t.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/i,this.y=t.y/i,this.z=t.z/i),this}setAxisAngleFromRotationMatrix(t){let i,s,l,u;const m=t.elements,p=m[0],g=m[4],x=m[8],_=m[1],M=m[5],E=m[9],R=m[2],y=m[6],v=m[10];if(Math.abs(g-_)<.01&&Math.abs(x-R)<.01&&Math.abs(E-y)<.01){if(Math.abs(g+_)<.1&&Math.abs(x+R)<.1&&Math.abs(E+y)<.1&&Math.abs(p+M+v-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const L=(p+1)/2,w=(M+1)/2,F=(v+1)/2,k=(g+_)/4,I=(x+R)/4,q=(E+y)/4;return L>w&&L>F?L<.01?(s=0,l=.707106781,u=.707106781):(s=Math.sqrt(L),l=k/s,u=I/s):w>F?w<.01?(s=.707106781,l=0,u=.707106781):(l=Math.sqrt(w),s=k/l,u=q/l):F<.01?(s=.707106781,l=.707106781,u=0):(u=Math.sqrt(F),s=I/u,l=q/u),this.set(s,l,u,i),this}let z=Math.sqrt((y-E)*(y-E)+(x-R)*(x-R)+(_-g)*(_-g));return Math.abs(z)<.001&&(z=1),this.x=(y-E)/z,this.y=(x-R)/z,this.z=(_-g)/z,this.w=Math.acos((p+M+v-1)/2),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,i){return this.x=ge(this.x,t.x,i.x),this.y=ge(this.y,t.y,i.y),this.z=ge(this.z,t.z,i.z),this.w=ge(this.w,t.w,i.w),this}clampScalar(t,i){return this.x=ge(this.x,t,i),this.y=ge(this.y,t,i),this.z=ge(this.z,t,i),this.w=ge(this.w,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(ge(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this.w+=(t.w-this.w)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this.z=t.z+(i.z-t.z)*s,this.w=t.w+(i.w-t.w)*s,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this.w=t[i+3],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t[i+3]=this.w,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this.w=t.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class ry extends As{constructor(t=1,i=1,s={}){super(),s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ci,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},s),this.isRenderTarget=!0,this.width=t,this.height=i,this.depth=s.depth,this.scissor=new $e(0,0,t,i),this.scissorTest=!1,this.viewport=new $e(0,0,t,i);const l={width:t,height:i,depth:s.depth},u=new Xn(l);this.textures=[];const h=s.count;for(let d=0;d<h;d++)this.textures[d]=u.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this._setTextureOptions(s),this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples,this.multiview=s.multiview}_setTextureOptions(t={}){const i={minFilter:Ci,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(i.mapping=t.mapping),t.wrapS!==void 0&&(i.wrapS=t.wrapS),t.wrapT!==void 0&&(i.wrapT=t.wrapT),t.wrapR!==void 0&&(i.wrapR=t.wrapR),t.magFilter!==void 0&&(i.magFilter=t.magFilter),t.minFilter!==void 0&&(i.minFilter=t.minFilter),t.format!==void 0&&(i.format=t.format),t.type!==void 0&&(i.type=t.type),t.anisotropy!==void 0&&(i.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(i.colorSpace=t.colorSpace),t.flipY!==void 0&&(i.flipY=t.flipY),t.generateMipmaps!==void 0&&(i.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(i.internalFormat=t.internalFormat);for(let s=0;s<this.textures.length;s++)this.textures[s].setValues(i)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,i,s=1){if(this.width!==t||this.height!==i||this.depth!==s){this.width=t,this.height=i,this.depth=s;for(let l=0,u=this.textures.length;l<u;l++)this.textures[l].image.width=t,this.textures[l].image.height=i,this.textures[l].image.depth=s,this.textures[l].isArrayTexture=this.textures[l].image.depth>1;this.dispose()}this.viewport.set(0,0,t,i),this.scissor.set(0,0,t,i)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,s=t.textures.length;i<s;i++){this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},t.textures[i].image);this.textures[i].source=new Md(l)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class bs extends ry{constructor(t=1,i=1,s={}){super(t,i,s),this.isWebGLRenderTarget=!0}}class b0 extends Xn{constructor(t=null,i=1,s=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:i,height:s,depth:l},this.magFilter=xi,this.minFilter=xi,this.wrapR=ys,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class oy extends Xn{constructor(t=null,i=1,s=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:i,height:s,depth:l},this.magFilter=xi,this.minFilter=xi,this.wrapR=ys,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ho{constructor(t=new $(1/0,1/0,1/0),i=new $(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=i}set(t,i){return this.min.copy(t),this.max.copy(i),this}setFromArray(t){this.makeEmpty();for(let i=0,s=t.length;i<s;i+=3)this.expandByPoint(pi.fromArray(t,i));return this}setFromBufferAttribute(t){this.makeEmpty();for(let i=0,s=t.count;i<s;i++)this.expandByPoint(pi.fromBufferAttribute(t,i));return this}setFromPoints(t){this.makeEmpty();for(let i=0,s=t.length;i<s;i++)this.expandByPoint(t[i]);return this}setFromCenterAndSize(t,i){const s=pi.copy(i).multiplyScalar(.5);return this.min.copy(t).sub(s),this.max.copy(t).add(s),this}setFromObject(t,i=!1){return this.makeEmpty(),this.expandByObject(t,i)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,i=!1){t.updateWorldMatrix(!1,!1);const s=t.geometry;if(s!==void 0){const u=s.getAttribute("position");if(i===!0&&u!==void 0&&t.isInstancedMesh!==!0)for(let h=0,d=u.count;h<d;h++)t.isMesh===!0?t.getVertexPosition(h,pi):pi.fromBufferAttribute(u,h),pi.applyMatrix4(t.matrixWorld),this.expandByPoint(pi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),tc.copy(t.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),tc.copy(s.boundingBox)),tc.applyMatrix4(t.matrixWorld),this.union(tc)}const l=t.children;for(let u=0,h=l.length;u<h;u++)this.expandByObject(l[u],i);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,i){return i.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,pi),pi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let i,s;return t.normal.x>0?(i=t.normal.x*this.min.x,s=t.normal.x*this.max.x):(i=t.normal.x*this.max.x,s=t.normal.x*this.min.x),t.normal.y>0?(i+=t.normal.y*this.min.y,s+=t.normal.y*this.max.y):(i+=t.normal.y*this.max.y,s+=t.normal.y*this.min.y),t.normal.z>0?(i+=t.normal.z*this.min.z,s+=t.normal.z*this.max.z):(i+=t.normal.z*this.max.z,s+=t.normal.z*this.min.z),i<=-t.constant&&s>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ao),ec.subVectors(this.max,Ao),rr.subVectors(t.a,Ao),or.subVectors(t.b,Ao),lr.subVectors(t.c,Ao),Pa.subVectors(or,rr),za.subVectors(lr,or),hs.subVectors(rr,lr);let i=[0,-Pa.z,Pa.y,0,-za.z,za.y,0,-hs.z,hs.y,Pa.z,0,-Pa.x,za.z,0,-za.x,hs.z,0,-hs.x,-Pa.y,Pa.x,0,-za.y,za.x,0,-hs.y,hs.x,0];return!eh(i,rr,or,lr,ec)||(i=[1,0,0,0,1,0,0,0,1],!eh(i,rr,or,lr,ec))?!1:(nc.crossVectors(Pa,za),i=[nc.x,nc.y,nc.z],eh(i,rr,or,lr,ec))}clampPoint(t,i){return i.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,pi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(pi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ji[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ji[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ji[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ji[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ji[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ji[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ji[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ji[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ji),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const ji=[new $,new $,new $,new $,new $,new $,new $,new $],pi=new $,tc=new Ho,rr=new $,or=new $,lr=new $,Pa=new $,za=new $,hs=new $,Ao=new $,ec=new $,nc=new $,ds=new $;function eh(r,t,i,s,l){for(let u=0,h=r.length-3;u<=h;u+=3){ds.fromArray(r,u);const d=l.x*Math.abs(ds.x)+l.y*Math.abs(ds.y)+l.z*Math.abs(ds.z),m=t.dot(ds),p=i.dot(ds),g=s.dot(ds);if(Math.max(-Math.max(m,p,g),Math.min(m,p,g))>d)return!1}return!0}const ly=new Ho,Ro=new $,nh=new $;class Bc{constructor(t=new $,i=-1){this.isSphere=!0,this.center=t,this.radius=i}set(t,i){return this.center.copy(t),this.radius=i,this}setFromPoints(t,i){const s=this.center;i!==void 0?s.copy(i):ly.setFromPoints(t).getCenter(s);let l=0;for(let u=0,h=t.length;u<h;u++)l=Math.max(l,s.distanceToSquared(t[u]));return this.radius=Math.sqrt(l),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const i=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=i*i}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,i){const s=this.center.distanceToSquared(t);return i.copy(t),s>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ro.subVectors(t,this.center);const i=Ro.lengthSq();if(i>this.radius*this.radius){const s=Math.sqrt(i),l=(s-this.radius)*.5;this.center.addScaledVector(Ro,l/s),this.radius+=l}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(nh.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ro.copy(t.center).add(nh)),this.expandByPoint(Ro.copy(t.center).sub(nh))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const Zi=new $,ih=new $,ic=new $,Ia=new $,ah=new $,ac=new $,sh=new $;class Ed{constructor(t=new $,i=new $(0,0,-1)){this.origin=t,this.direction=i}set(t,i){return this.origin.copy(t),this.direction.copy(i),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,i){return i.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Zi)),this}closestPointToPoint(t,i){i.subVectors(t,this.origin);const s=i.dot(this.direction);return s<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const i=Zi.subVectors(t,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(t):(Zi.copy(this.origin).addScaledVector(this.direction,i),Zi.distanceToSquared(t))}distanceSqToSegment(t,i,s,l){ih.copy(t).add(i).multiplyScalar(.5),ic.copy(i).sub(t).normalize(),Ia.copy(this.origin).sub(ih);const u=t.distanceTo(i)*.5,h=-this.direction.dot(ic),d=Ia.dot(this.direction),m=-Ia.dot(ic),p=Ia.lengthSq(),g=Math.abs(1-h*h);let x,_,M,E;if(g>0)if(x=h*m-d,_=h*d-m,E=u*g,x>=0)if(_>=-E)if(_<=E){const R=1/g;x*=R,_*=R,M=x*(x+h*_+2*d)+_*(h*x+_+2*m)+p}else _=u,x=Math.max(0,-(h*_+d)),M=-x*x+_*(_+2*m)+p;else _=-u,x=Math.max(0,-(h*_+d)),M=-x*x+_*(_+2*m)+p;else _<=-E?(x=Math.max(0,-(-h*u+d)),_=x>0?-u:Math.min(Math.max(-u,-m),u),M=-x*x+_*(_+2*m)+p):_<=E?(x=0,_=Math.min(Math.max(-u,-m),u),M=_*(_+2*m)+p):(x=Math.max(0,-(h*u+d)),_=x>0?u:Math.min(Math.max(-u,-m),u),M=-x*x+_*(_+2*m)+p);else _=h>0?-u:u,x=Math.max(0,-(h*_+d)),M=-x*x+_*(_+2*m)+p;return s&&s.copy(this.origin).addScaledVector(this.direction,x),l&&l.copy(ih).addScaledVector(ic,_),M}intersectSphere(t,i){Zi.subVectors(t.center,this.origin);const s=Zi.dot(this.direction),l=Zi.dot(Zi)-s*s,u=t.radius*t.radius;if(l>u)return null;const h=Math.sqrt(u-l),d=s-h,m=s+h;return m<0?null:d<0?this.at(m,i):this.at(d,i)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const i=t.normal.dot(this.direction);if(i===0)return t.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(t.normal)+t.constant)/i;return s>=0?s:null}intersectPlane(t,i){const s=this.distanceToPlane(t);return s===null?null:this.at(s,i)}intersectsPlane(t){const i=t.distanceToPoint(this.origin);return i===0||t.normal.dot(this.direction)*i<0}intersectBox(t,i){let s,l,u,h,d,m;const p=1/this.direction.x,g=1/this.direction.y,x=1/this.direction.z,_=this.origin;return p>=0?(s=(t.min.x-_.x)*p,l=(t.max.x-_.x)*p):(s=(t.max.x-_.x)*p,l=(t.min.x-_.x)*p),g>=0?(u=(t.min.y-_.y)*g,h=(t.max.y-_.y)*g):(u=(t.max.y-_.y)*g,h=(t.min.y-_.y)*g),s>h||u>l||((u>s||isNaN(s))&&(s=u),(h<l||isNaN(l))&&(l=h),x>=0?(d=(t.min.z-_.z)*x,m=(t.max.z-_.z)*x):(d=(t.max.z-_.z)*x,m=(t.min.z-_.z)*x),s>m||d>l)||((d>s||s!==s)&&(s=d),(m<l||l!==l)&&(l=m),l<0)?null:this.at(s>=0?s:l,i)}intersectsBox(t){return this.intersectBox(t,Zi)!==null}intersectTriangle(t,i,s,l,u){ah.subVectors(i,t),ac.subVectors(s,t),sh.crossVectors(ah,ac);let h=this.direction.dot(sh),d;if(h>0){if(l)return null;d=1}else if(h<0)d=-1,h=-h;else return null;Ia.subVectors(this.origin,t);const m=d*this.direction.dot(ac.crossVectors(Ia,ac));if(m<0)return null;const p=d*this.direction.dot(ah.cross(Ia));if(p<0||m+p>h)return null;const g=-d*Ia.dot(sh);return g<0?null:this.at(g/h,u)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class tn{constructor(t,i,s,l,u,h,d,m,p,g,x,_,M,E,R,y){tn.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,i,s,l,u,h,d,m,p,g,x,_,M,E,R,y)}set(t,i,s,l,u,h,d,m,p,g,x,_,M,E,R,y){const v=this.elements;return v[0]=t,v[4]=i,v[8]=s,v[12]=l,v[1]=u,v[5]=h,v[9]=d,v[13]=m,v[2]=p,v[6]=g,v[10]=x,v[14]=_,v[3]=M,v[7]=E,v[11]=R,v[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new tn().fromArray(this.elements)}copy(t){const i=this.elements,s=t.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],i[9]=s[9],i[10]=s[10],i[11]=s[11],i[12]=s[12],i[13]=s[13],i[14]=s[14],i[15]=s[15],this}copyPosition(t){const i=this.elements,s=t.elements;return i[12]=s[12],i[13]=s[13],i[14]=s[14],this}setFromMatrix3(t){const i=t.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(t,i,s){return t.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this}makeBasis(t,i,s){return this.set(t.x,i.x,s.x,0,t.y,i.y,s.y,0,t.z,i.z,s.z,0,0,0,0,1),this}extractRotation(t){const i=this.elements,s=t.elements,l=1/cr.setFromMatrixColumn(t,0).length(),u=1/cr.setFromMatrixColumn(t,1).length(),h=1/cr.setFromMatrixColumn(t,2).length();return i[0]=s[0]*l,i[1]=s[1]*l,i[2]=s[2]*l,i[3]=0,i[4]=s[4]*u,i[5]=s[5]*u,i[6]=s[6]*u,i[7]=0,i[8]=s[8]*h,i[9]=s[9]*h,i[10]=s[10]*h,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(t){const i=this.elements,s=t.x,l=t.y,u=t.z,h=Math.cos(s),d=Math.sin(s),m=Math.cos(l),p=Math.sin(l),g=Math.cos(u),x=Math.sin(u);if(t.order==="XYZ"){const _=h*g,M=h*x,E=d*g,R=d*x;i[0]=m*g,i[4]=-m*x,i[8]=p,i[1]=M+E*p,i[5]=_-R*p,i[9]=-d*m,i[2]=R-_*p,i[6]=E+M*p,i[10]=h*m}else if(t.order==="YXZ"){const _=m*g,M=m*x,E=p*g,R=p*x;i[0]=_+R*d,i[4]=E*d-M,i[8]=h*p,i[1]=h*x,i[5]=h*g,i[9]=-d,i[2]=M*d-E,i[6]=R+_*d,i[10]=h*m}else if(t.order==="ZXY"){const _=m*g,M=m*x,E=p*g,R=p*x;i[0]=_-R*d,i[4]=-h*x,i[8]=E+M*d,i[1]=M+E*d,i[5]=h*g,i[9]=R-_*d,i[2]=-h*p,i[6]=d,i[10]=h*m}else if(t.order==="ZYX"){const _=h*g,M=h*x,E=d*g,R=d*x;i[0]=m*g,i[4]=E*p-M,i[8]=_*p+R,i[1]=m*x,i[5]=R*p+_,i[9]=M*p-E,i[2]=-p,i[6]=d*m,i[10]=h*m}else if(t.order==="YZX"){const _=h*m,M=h*p,E=d*m,R=d*p;i[0]=m*g,i[4]=R-_*x,i[8]=E*x+M,i[1]=x,i[5]=h*g,i[9]=-d*g,i[2]=-p*g,i[6]=M*x+E,i[10]=_-R*x}else if(t.order==="XZY"){const _=h*m,M=h*p,E=d*m,R=d*p;i[0]=m*g,i[4]=-x,i[8]=p*g,i[1]=_*x+R,i[5]=h*g,i[9]=M*x-E,i[2]=E*x-M,i[6]=d*g,i[10]=R*x+_}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(t){return this.compose(cy,t,uy)}lookAt(t,i,s){const l=this.elements;return $n.subVectors(t,i),$n.lengthSq()===0&&($n.z=1),$n.normalize(),Ba.crossVectors(s,$n),Ba.lengthSq()===0&&(Math.abs(s.z)===1?$n.x+=1e-4:$n.z+=1e-4,$n.normalize(),Ba.crossVectors(s,$n)),Ba.normalize(),sc.crossVectors($n,Ba),l[0]=Ba.x,l[4]=sc.x,l[8]=$n.x,l[1]=Ba.y,l[5]=sc.y,l[9]=$n.y,l[2]=Ba.z,l[6]=sc.z,l[10]=$n.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const s=t.elements,l=i.elements,u=this.elements,h=s[0],d=s[4],m=s[8],p=s[12],g=s[1],x=s[5],_=s[9],M=s[13],E=s[2],R=s[6],y=s[10],v=s[14],z=s[3],L=s[7],w=s[11],F=s[15],k=l[0],I=l[4],q=l[8],D=l[12],C=l[1],G=l[5],lt=l[9],rt=l[13],vt=l[2],ft=l[6],N=l[10],Y=l[14],X=l[3],pt=l[7],U=l[11],J=l[15];return u[0]=h*k+d*C+m*vt+p*X,u[4]=h*I+d*G+m*ft+p*pt,u[8]=h*q+d*lt+m*N+p*U,u[12]=h*D+d*rt+m*Y+p*J,u[1]=g*k+x*C+_*vt+M*X,u[5]=g*I+x*G+_*ft+M*pt,u[9]=g*q+x*lt+_*N+M*U,u[13]=g*D+x*rt+_*Y+M*J,u[2]=E*k+R*C+y*vt+v*X,u[6]=E*I+R*G+y*ft+v*pt,u[10]=E*q+R*lt+y*N+v*U,u[14]=E*D+R*rt+y*Y+v*J,u[3]=z*k+L*C+w*vt+F*X,u[7]=z*I+L*G+w*ft+F*pt,u[11]=z*q+L*lt+w*N+F*U,u[15]=z*D+L*rt+w*Y+F*J,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[4]*=t,i[8]*=t,i[12]*=t,i[1]*=t,i[5]*=t,i[9]*=t,i[13]*=t,i[2]*=t,i[6]*=t,i[10]*=t,i[14]*=t,i[3]*=t,i[7]*=t,i[11]*=t,i[15]*=t,this}determinant(){const t=this.elements,i=t[0],s=t[4],l=t[8],u=t[12],h=t[1],d=t[5],m=t[9],p=t[13],g=t[2],x=t[6],_=t[10],M=t[14],E=t[3],R=t[7],y=t[11],v=t[15];return E*(+u*m*x-l*p*x-u*d*_+s*p*_+l*d*M-s*m*M)+R*(+i*m*M-i*p*_+u*h*_-l*h*M+l*p*g-u*m*g)+y*(+i*p*x-i*d*M-u*h*x+s*h*M+u*d*g-s*p*g)+v*(-l*d*g-i*m*x+i*d*_+l*h*x-s*h*_+s*m*g)}transpose(){const t=this.elements;let i;return i=t[1],t[1]=t[4],t[4]=i,i=t[2],t[2]=t[8],t[8]=i,i=t[6],t[6]=t[9],t[9]=i,i=t[3],t[3]=t[12],t[12]=i,i=t[7],t[7]=t[13],t[13]=i,i=t[11],t[11]=t[14],t[14]=i,this}setPosition(t,i,s){const l=this.elements;return t.isVector3?(l[12]=t.x,l[13]=t.y,l[14]=t.z):(l[12]=t,l[13]=i,l[14]=s),this}invert(){const t=this.elements,i=t[0],s=t[1],l=t[2],u=t[3],h=t[4],d=t[5],m=t[6],p=t[7],g=t[8],x=t[9],_=t[10],M=t[11],E=t[12],R=t[13],y=t[14],v=t[15],z=x*y*p-R*_*p+R*m*M-d*y*M-x*m*v+d*_*v,L=E*_*p-g*y*p-E*m*M+h*y*M+g*m*v-h*_*v,w=g*R*p-E*x*p+E*d*M-h*R*M-g*d*v+h*x*v,F=E*x*m-g*R*m-E*d*_+h*R*_+g*d*y-h*x*y,k=i*z+s*L+l*w+u*F;if(k===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const I=1/k;return t[0]=z*I,t[1]=(R*_*u-x*y*u-R*l*M+s*y*M+x*l*v-s*_*v)*I,t[2]=(d*y*u-R*m*u+R*l*p-s*y*p-d*l*v+s*m*v)*I,t[3]=(x*m*u-d*_*u-x*l*p+s*_*p+d*l*M-s*m*M)*I,t[4]=L*I,t[5]=(g*y*u-E*_*u+E*l*M-i*y*M-g*l*v+i*_*v)*I,t[6]=(E*m*u-h*y*u-E*l*p+i*y*p+h*l*v-i*m*v)*I,t[7]=(h*_*u-g*m*u+g*l*p-i*_*p-h*l*M+i*m*M)*I,t[8]=w*I,t[9]=(E*x*u-g*R*u-E*s*M+i*R*M+g*s*v-i*x*v)*I,t[10]=(h*R*u-E*d*u+E*s*p-i*R*p-h*s*v+i*d*v)*I,t[11]=(g*d*u-h*x*u-g*s*p+i*x*p+h*s*M-i*d*M)*I,t[12]=F*I,t[13]=(g*R*l-E*x*l+E*s*_-i*R*_-g*s*y+i*x*y)*I,t[14]=(E*d*l-h*R*l-E*s*m+i*R*m+h*s*y-i*d*y)*I,t[15]=(h*x*l-g*d*l+g*s*m-i*x*m-h*s*_+i*d*_)*I,this}scale(t){const i=this.elements,s=t.x,l=t.y,u=t.z;return i[0]*=s,i[4]*=l,i[8]*=u,i[1]*=s,i[5]*=l,i[9]*=u,i[2]*=s,i[6]*=l,i[10]*=u,i[3]*=s,i[7]*=l,i[11]*=u,this}getMaxScaleOnAxis(){const t=this.elements,i=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],s=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],l=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(i,s,l))}makeTranslation(t,i,s){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,i,0,0,1,s,0,0,0,1),this}makeRotationX(t){const i=Math.cos(t),s=Math.sin(t);return this.set(1,0,0,0,0,i,-s,0,0,s,i,0,0,0,0,1),this}makeRotationY(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,0,s,0,0,1,0,0,-s,0,i,0,0,0,0,1),this}makeRotationZ(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,-s,0,0,s,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,i){const s=Math.cos(i),l=Math.sin(i),u=1-s,h=t.x,d=t.y,m=t.z,p=u*h,g=u*d;return this.set(p*h+s,p*d-l*m,p*m+l*d,0,p*d+l*m,g*d+s,g*m-l*h,0,p*m-l*d,g*m+l*h,u*m*m+s,0,0,0,0,1),this}makeScale(t,i,s){return this.set(t,0,0,0,0,i,0,0,0,0,s,0,0,0,0,1),this}makeShear(t,i,s,l,u,h){return this.set(1,s,u,0,t,1,h,0,i,l,1,0,0,0,0,1),this}compose(t,i,s){const l=this.elements,u=i._x,h=i._y,d=i._z,m=i._w,p=u+u,g=h+h,x=d+d,_=u*p,M=u*g,E=u*x,R=h*g,y=h*x,v=d*x,z=m*p,L=m*g,w=m*x,F=s.x,k=s.y,I=s.z;return l[0]=(1-(R+v))*F,l[1]=(M+w)*F,l[2]=(E-L)*F,l[3]=0,l[4]=(M-w)*k,l[5]=(1-(_+v))*k,l[6]=(y+z)*k,l[7]=0,l[8]=(E+L)*I,l[9]=(y-z)*I,l[10]=(1-(_+R))*I,l[11]=0,l[12]=t.x,l[13]=t.y,l[14]=t.z,l[15]=1,this}decompose(t,i,s){const l=this.elements;let u=cr.set(l[0],l[1],l[2]).length();const h=cr.set(l[4],l[5],l[6]).length(),d=cr.set(l[8],l[9],l[10]).length();this.determinant()<0&&(u=-u),t.x=l[12],t.y=l[13],t.z=l[14],mi.copy(this);const p=1/u,g=1/h,x=1/d;return mi.elements[0]*=p,mi.elements[1]*=p,mi.elements[2]*=p,mi.elements[4]*=g,mi.elements[5]*=g,mi.elements[6]*=g,mi.elements[8]*=x,mi.elements[9]*=x,mi.elements[10]*=x,i.setFromRotationMatrix(mi),s.x=u,s.y=h,s.z=d,this}makePerspective(t,i,s,l,u,h,d=na){const m=this.elements,p=2*u/(i-t),g=2*u/(s-l),x=(i+t)/(i-t),_=(s+l)/(s-l);let M,E;if(d===na)M=-(h+u)/(h-u),E=-2*h*u/(h-u);else if(d===Nc)M=-h/(h-u),E=-h*u/(h-u);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return m[0]=p,m[4]=0,m[8]=x,m[12]=0,m[1]=0,m[5]=g,m[9]=_,m[13]=0,m[2]=0,m[6]=0,m[10]=M,m[14]=E,m[3]=0,m[7]=0,m[11]=-1,m[15]=0,this}makeOrthographic(t,i,s,l,u,h,d=na){const m=this.elements,p=1/(i-t),g=1/(s-l),x=1/(h-u),_=(i+t)*p,M=(s+l)*g;let E,R;if(d===na)E=(h+u)*x,R=-2*x;else if(d===Nc)E=u*x,R=-1*x;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return m[0]=2*p,m[4]=0,m[8]=0,m[12]=-_,m[1]=0,m[5]=2*g,m[9]=0,m[13]=-M,m[2]=0,m[6]=0,m[10]=R,m[14]=-E,m[3]=0,m[7]=0,m[11]=0,m[15]=1,this}equals(t){const i=this.elements,s=t.elements;for(let l=0;l<16;l++)if(i[l]!==s[l])return!1;return!0}fromArray(t,i=0){for(let s=0;s<16;s++)this.elements[s]=t[s+i];return this}toArray(t=[],i=0){const s=this.elements;return t[i]=s[0],t[i+1]=s[1],t[i+2]=s[2],t[i+3]=s[3],t[i+4]=s[4],t[i+5]=s[5],t[i+6]=s[6],t[i+7]=s[7],t[i+8]=s[8],t[i+9]=s[9],t[i+10]=s[10],t[i+11]=s[11],t[i+12]=s[12],t[i+13]=s[13],t[i+14]=s[14],t[i+15]=s[15],t}}const cr=new $,mi=new tn,cy=new $(0,0,0),uy=new $(1,1,1),Ba=new $,sc=new $,$n=new $,S_=new tn,y_=new Ts;class oa{constructor(t=0,i=0,s=0,l=oa.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=s,this._order=l}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,s,l=this._order){return this._x=t,this._y=i,this._z=s,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,s=!0){const l=t.elements,u=l[0],h=l[4],d=l[8],m=l[1],p=l[5],g=l[9],x=l[2],_=l[6],M=l[10];switch(i){case"XYZ":this._y=Math.asin(ge(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-g,M),this._z=Math.atan2(-h,u)):(this._x=Math.atan2(_,p),this._z=0);break;case"YXZ":this._x=Math.asin(-ge(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(d,M),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-x,u),this._z=0);break;case"ZXY":this._x=Math.asin(ge(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(-x,M),this._z=Math.atan2(-h,p)):(this._y=0,this._z=Math.atan2(m,u));break;case"ZYX":this._y=Math.asin(-ge(x,-1,1)),Math.abs(x)<.9999999?(this._x=Math.atan2(_,M),this._z=Math.atan2(m,u)):(this._x=0,this._z=Math.atan2(-h,p));break;case"YZX":this._z=Math.asin(ge(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-g,p),this._y=Math.atan2(-x,u)):(this._x=0,this._y=Math.atan2(d,M));break;case"XZY":this._z=Math.asin(-ge(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(_,p),this._y=Math.atan2(d,u)):(this._x=Math.atan2(-g,M),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,s===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,s){return S_.makeRotationFromQuaternion(t),this.setFromRotationMatrix(S_,i,s)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return y_.setFromEuler(this),this.setFromQuaternion(y_,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}oa.DEFAULT_ORDER="XYZ";class A0{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let fy=0;const M_=new $,ur=new Ts,Ki=new tn,rc=new $,Co=new $,hy=new $,dy=new Ts,E_=new $(1,0,0),T_=new $(0,1,0),b_=new $(0,0,1),A_={type:"added"},py={type:"removed"},fr={type:"childadded",child:null},rh={type:"childremoved",child:null};class Pn extends As{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:fy++}),this.uuid=Fo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Pn.DEFAULT_UP.clone();const t=new $,i=new oa,s=new Ts,l=new $(1,1,1);function u(){s.setFromEuler(i,!1)}function h(){i.setFromQuaternion(s,void 0,!1)}i._onChange(u),s._onChange(h),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new tn},normalMatrix:{value:new oe}}),this.matrix=new tn,this.matrixWorld=new tn,this.matrixAutoUpdate=Pn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Pn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new A0,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return ur.setFromAxisAngle(t,i),this.quaternion.multiply(ur),this}rotateOnWorldAxis(t,i){return ur.setFromAxisAngle(t,i),this.quaternion.premultiply(ur),this}rotateX(t){return this.rotateOnAxis(E_,t)}rotateY(t){return this.rotateOnAxis(T_,t)}rotateZ(t){return this.rotateOnAxis(b_,t)}translateOnAxis(t,i){return M_.copy(t).applyQuaternion(this.quaternion),this.position.add(M_.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(E_,t)}translateY(t){return this.translateOnAxis(T_,t)}translateZ(t){return this.translateOnAxis(b_,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Ki.copy(this.matrixWorld).invert())}lookAt(t,i,s){t.isVector3?rc.copy(t):rc.set(t,i,s);const l=this.parent;this.updateWorldMatrix(!0,!1),Co.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ki.lookAt(Co,rc,this.up):Ki.lookAt(rc,Co,this.up),this.quaternion.setFromRotationMatrix(Ki),l&&(Ki.extractRotation(l.matrixWorld),ur.setFromRotationMatrix(Ki),this.quaternion.premultiply(ur.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(A_),fr.child=t,this.dispatchEvent(fr),fr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(py),rh.child=t,this.dispatchEvent(rh),rh.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Ki.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Ki.multiply(t.parent.matrixWorld)),t.applyMatrix4(Ki),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(A_),fr.child=t,this.dispatchEvent(fr),fr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let s=0,l=this.children.length;s<l;s++){const h=this.children[s].getObjectByProperty(t,i);if(h!==void 0)return h}}getObjectsByProperty(t,i,s=[]){this[t]===i&&s.push(this);const l=this.children;for(let u=0,h=l.length;u<h;u++)l[u].getObjectsByProperty(t,i,s);return s}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Co,t,hy),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Co,dy,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(t){t(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverseVisible(t)}traverseAncestors(t){const i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].updateMatrixWorld(t)}updateWorldMatrix(t,i){const s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let u=0,h=l.length;u<h;u++)l[u].updateWorldMatrix(!1,!0)}}toJSON(t){const i=t===void 0||typeof t=="string",s={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(d=>({...d,boundingBox:d.boundingBox?d.boundingBox.toJSON():void 0,boundingSphere:d.boundingSphere?d.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(d=>({...d})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(t),l.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function u(d,m){return d[m.uuid]===void 0&&(d[m.uuid]=m.toJSON(t)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=u(t.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const m=d.shapes;if(Array.isArray(m))for(let p=0,g=m.length;p<g;p++){const x=m[p];u(t.shapes,x)}else u(t.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(u(t.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let m=0,p=this.material.length;m<p;m++)d.push(u(t.materials,this.material[m]));l.material=d}else l.material=u(t.materials,this.material);if(this.children.length>0){l.children=[];for(let d=0;d<this.children.length;d++)l.children.push(this.children[d].toJSON(t).object)}if(this.animations.length>0){l.animations=[];for(let d=0;d<this.animations.length;d++){const m=this.animations[d];l.animations.push(u(t.animations,m))}}if(i){const d=h(t.geometries),m=h(t.materials),p=h(t.textures),g=h(t.images),x=h(t.shapes),_=h(t.skeletons),M=h(t.animations),E=h(t.nodes);d.length>0&&(s.geometries=d),m.length>0&&(s.materials=m),p.length>0&&(s.textures=p),g.length>0&&(s.images=g),x.length>0&&(s.shapes=x),_.length>0&&(s.skeletons=_),M.length>0&&(s.animations=M),E.length>0&&(s.nodes=E)}return s.object=l,s;function h(d){const m=[];for(const p in d){const g=d[p];delete g.metadata,m.push(g)}return m}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let s=0;s<t.children.length;s++){const l=t.children[s];this.add(l.clone())}return this}}Pn.DEFAULT_UP=new $(0,1,0);Pn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Pn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const gi=new $,Qi=new $,oh=new $,Ji=new $,hr=new $,dr=new $,R_=new $,lh=new $,ch=new $,uh=new $,fh=new $e,hh=new $e,dh=new $e;class _i{constructor(t=new $,i=new $,s=new $){this.a=t,this.b=i,this.c=s}static getNormal(t,i,s,l){l.subVectors(s,i),gi.subVectors(t,i),l.cross(gi);const u=l.lengthSq();return u>0?l.multiplyScalar(1/Math.sqrt(u)):l.set(0,0,0)}static getBarycoord(t,i,s,l,u){gi.subVectors(l,i),Qi.subVectors(s,i),oh.subVectors(t,i);const h=gi.dot(gi),d=gi.dot(Qi),m=gi.dot(oh),p=Qi.dot(Qi),g=Qi.dot(oh),x=h*p-d*d;if(x===0)return u.set(0,0,0),null;const _=1/x,M=(p*m-d*g)*_,E=(h*g-d*m)*_;return u.set(1-M-E,E,M)}static containsPoint(t,i,s,l){return this.getBarycoord(t,i,s,l,Ji)===null?!1:Ji.x>=0&&Ji.y>=0&&Ji.x+Ji.y<=1}static getInterpolation(t,i,s,l,u,h,d,m){return this.getBarycoord(t,i,s,l,Ji)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(u,Ji.x),m.addScaledVector(h,Ji.y),m.addScaledVector(d,Ji.z),m)}static getInterpolatedAttribute(t,i,s,l,u,h){return fh.setScalar(0),hh.setScalar(0),dh.setScalar(0),fh.fromBufferAttribute(t,i),hh.fromBufferAttribute(t,s),dh.fromBufferAttribute(t,l),h.setScalar(0),h.addScaledVector(fh,u.x),h.addScaledVector(hh,u.y),h.addScaledVector(dh,u.z),h}static isFrontFacing(t,i,s,l){return gi.subVectors(s,i),Qi.subVectors(t,i),gi.cross(Qi).dot(l)<0}set(t,i,s){return this.a.copy(t),this.b.copy(i),this.c.copy(s),this}setFromPointsAndIndices(t,i,s,l){return this.a.copy(t[i]),this.b.copy(t[s]),this.c.copy(t[l]),this}setFromAttributeAndIndices(t,i,s,l){return this.a.fromBufferAttribute(t,i),this.b.fromBufferAttribute(t,s),this.c.fromBufferAttribute(t,l),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return gi.subVectors(this.c,this.b),Qi.subVectors(this.a,this.b),gi.cross(Qi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return _i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,i){return _i.getBarycoord(t,this.a,this.b,this.c,i)}getInterpolation(t,i,s,l,u){return _i.getInterpolation(t,this.a,this.b,this.c,i,s,l,u)}containsPoint(t){return _i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return _i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,i){const s=this.a,l=this.b,u=this.c;let h,d;hr.subVectors(l,s),dr.subVectors(u,s),lh.subVectors(t,s);const m=hr.dot(lh),p=dr.dot(lh);if(m<=0&&p<=0)return i.copy(s);ch.subVectors(t,l);const g=hr.dot(ch),x=dr.dot(ch);if(g>=0&&x<=g)return i.copy(l);const _=m*x-g*p;if(_<=0&&m>=0&&g<=0)return h=m/(m-g),i.copy(s).addScaledVector(hr,h);uh.subVectors(t,u);const M=hr.dot(uh),E=dr.dot(uh);if(E>=0&&M<=E)return i.copy(u);const R=M*p-m*E;if(R<=0&&p>=0&&E<=0)return d=p/(p-E),i.copy(s).addScaledVector(dr,d);const y=g*E-M*x;if(y<=0&&x-g>=0&&M-E>=0)return R_.subVectors(u,l),d=(x-g)/(x-g+(M-E)),i.copy(l).addScaledVector(R_,d);const v=1/(y+R+_);return h=R*v,d=_*v,i.copy(s).addScaledVector(hr,h).addScaledVector(dr,d)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const R0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Fa={h:0,s:0,l:0},oc={h:0,s:0,l:0};function ph(r,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?r+(t-r)*6*i:i<1/2?t:i<2/3?r+(t-r)*6*(2/3-i):r}class Ue{constructor(t,i,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,i,s)}set(t,i,s){if(i===void 0&&s===void 0){const l=t;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(t,i,s);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,i=ci){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Ce.colorSpaceToWorking(this,i),this}setRGB(t,i,s,l=Ce.workingColorSpace){return this.r=t,this.g=i,this.b=s,Ce.colorSpaceToWorking(this,l),this}setHSL(t,i,s,l=Ce.workingColorSpace){if(t=KS(t,1),i=ge(i,0,1),s=ge(s,0,1),i===0)this.r=this.g=this.b=s;else{const u=s<=.5?s*(1+i):s+i-s*i,h=2*s-u;this.r=ph(h,u,t+1/3),this.g=ph(h,u,t),this.b=ph(h,u,t-1/3)}return Ce.colorSpaceToWorking(this,l),this}setStyle(t,i=ci){function s(u){u!==void 0&&parseFloat(u)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(t)){let u;const h=l[1],d=l[2];switch(h){case"rgb":case"rgba":if(u=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(u[4]),this.setRGB(Math.min(255,parseInt(u[1],10))/255,Math.min(255,parseInt(u[2],10))/255,Math.min(255,parseInt(u[3],10))/255,i);if(u=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(u[4]),this.setRGB(Math.min(100,parseInt(u[1],10))/100,Math.min(100,parseInt(u[2],10))/100,Math.min(100,parseInt(u[3],10))/100,i);break;case"hsl":case"hsla":if(u=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(u[4]),this.setHSL(parseFloat(u[1])/360,parseFloat(u[2])/100,parseFloat(u[3])/100,i);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(t)){const u=l[1],h=u.length;if(h===3)return this.setRGB(parseInt(u.charAt(0),16)/15,parseInt(u.charAt(1),16)/15,parseInt(u.charAt(2),16)/15,i);if(h===6)return this.setHex(parseInt(u,16),i);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,i);return this}setColorName(t,i=ci){const s=R0[t.toLowerCase()];return s!==void 0?this.setHex(s,i):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=aa(t.r),this.g=aa(t.g),this.b=aa(t.b),this}copyLinearToSRGB(t){return this.r=Er(t.r),this.g=Er(t.g),this.b=Er(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ci){return Ce.workingToColorSpace(Un.copy(this),t),Math.round(ge(Un.r*255,0,255))*65536+Math.round(ge(Un.g*255,0,255))*256+Math.round(ge(Un.b*255,0,255))}getHexString(t=ci){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,i=Ce.workingColorSpace){Ce.workingToColorSpace(Un.copy(this),i);const s=Un.r,l=Un.g,u=Un.b,h=Math.max(s,l,u),d=Math.min(s,l,u);let m,p;const g=(d+h)/2;if(d===h)m=0,p=0;else{const x=h-d;switch(p=g<=.5?x/(h+d):x/(2-h-d),h){case s:m=(l-u)/x+(l<u?6:0);break;case l:m=(u-s)/x+2;break;case u:m=(s-l)/x+4;break}m/=6}return t.h=m,t.s=p,t.l=g,t}getRGB(t,i=Ce.workingColorSpace){return Ce.workingToColorSpace(Un.copy(this),i),t.r=Un.r,t.g=Un.g,t.b=Un.b,t}getStyle(t=ci){Ce.workingToColorSpace(Un.copy(this),t);const i=Un.r,s=Un.g,l=Un.b;return t!==ci?`color(${t} ${i.toFixed(3)} ${s.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(s*255)},${Math.round(l*255)})`}offsetHSL(t,i,s){return this.getHSL(Fa),this.setHSL(Fa.h+t,Fa.s+i,Fa.l+s)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,i){return this.r=t.r+i.r,this.g=t.g+i.g,this.b=t.b+i.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,i){return this.r+=(t.r-this.r)*i,this.g+=(t.g-this.g)*i,this.b+=(t.b-this.b)*i,this}lerpColors(t,i,s){return this.r=t.r+(i.r-t.r)*s,this.g=t.g+(i.g-t.g)*s,this.b=t.b+(i.b-t.b)*s,this}lerpHSL(t,i){this.getHSL(Fa),t.getHSL(oc);const s=Kf(Fa.h,oc.h,i),l=Kf(Fa.s,oc.s,i),u=Kf(Fa.l,oc.l,i);return this.setHSL(s,l,u),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const i=this.r,s=this.g,l=this.b,u=t.elements;return this.r=u[0]*i+u[3]*s+u[6]*l,this.g=u[1]*i+u[4]*s+u[7]*l,this.b=u[2]*i+u[5]*s+u[8]*l,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,i=0){return this.r=t[i],this.g=t[i+1],this.b=t[i+2],this}toArray(t=[],i=0){return t[i]=this.r,t[i+1]=this.g,t[i+2]=this.b,t}fromBufferAttribute(t,i){return this.r=t.getX(i),this.g=t.getY(i),this.b=t.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Un=new Ue;Ue.NAMES=R0;let my=0;class Go extends As{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:my++}),this.uuid=Fo(),this.name="",this.type="Material",this.blending=yr,this.side=Wa,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Rh,this.blendDst=Ch,this.blendEquation=xs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ue(0,0,0),this.blendAlpha=0,this.depthFunc=Tr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=d_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ar,this.stencilZFail=ar,this.stencilZPass=ar,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const i in t){const s=t[i];if(s===void 0){console.warn(`THREE.Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(s):l&&l.isVector3&&s&&s.isVector3?l.copy(s):this[i]=s}}toJSON(t){const i=t===void 0||typeof t=="string";i&&(t={textures:{},images:{}});const s={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(t).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(t).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(t).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(t).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(t).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==yr&&(s.blending=this.blending),this.side!==Wa&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==Rh&&(s.blendSrc=this.blendSrc),this.blendDst!==Ch&&(s.blendDst=this.blendDst),this.blendEquation!==xs&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==Tr&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==d_&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ar&&(s.stencilFail=this.stencilFail),this.stencilZFail!==ar&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==ar&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function l(u){const h=[];for(const d in u){const m=u[d];delete m.metadata,h.push(m)}return h}if(i){const u=l(t.textures),h=l(t.images);u.length>0&&(s.textures=u),h.length>0&&(s.images=h)}return s}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const i=t.clippingPlanes;let s=null;if(i!==null){const l=i.length;s=new Array(l);for(let u=0;u!==l;++u)s[u]=i[u].clone()}return this.clippingPlanes=s,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class C0 extends Go{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ue(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new oa,this.combine=d0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const sn=new $,lc=new he;let gy=0;class Si{constructor(t,i,s=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:gy++}),this.name="",this.array=t,this.itemSize=i,this.count=t!==void 0?t.length/i:0,this.normalized=s,this.usage=p_,this.updateRanges=[],this.gpuType=ea,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,i,s){t*=this.itemSize,s*=i.itemSize;for(let l=0,u=this.itemSize;l<u;l++)this.array[t+l]=i.array[s+l];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let i=0,s=this.count;i<s;i++)lc.fromBufferAttribute(this,i),lc.applyMatrix3(t),this.setXY(i,lc.x,lc.y);else if(this.itemSize===3)for(let i=0,s=this.count;i<s;i++)sn.fromBufferAttribute(this,i),sn.applyMatrix3(t),this.setXYZ(i,sn.x,sn.y,sn.z);return this}applyMatrix4(t){for(let i=0,s=this.count;i<s;i++)sn.fromBufferAttribute(this,i),sn.applyMatrix4(t),this.setXYZ(i,sn.x,sn.y,sn.z);return this}applyNormalMatrix(t){for(let i=0,s=this.count;i<s;i++)sn.fromBufferAttribute(this,i),sn.applyNormalMatrix(t),this.setXYZ(i,sn.x,sn.y,sn.z);return this}transformDirection(t){for(let i=0,s=this.count;i<s;i++)sn.fromBufferAttribute(this,i),sn.transformDirection(t),this.setXYZ(i,sn.x,sn.y,sn.z);return this}set(t,i=0){return this.array.set(t,i),this}getComponent(t,i){let s=this.array[t*this.itemSize+i];return this.normalized&&(s=bo(s,this.array)),s}setComponent(t,i,s){return this.normalized&&(s=Gn(s,this.array)),this.array[t*this.itemSize+i]=s,this}getX(t){let i=this.array[t*this.itemSize];return this.normalized&&(i=bo(i,this.array)),i}setX(t,i){return this.normalized&&(i=Gn(i,this.array)),this.array[t*this.itemSize]=i,this}getY(t){let i=this.array[t*this.itemSize+1];return this.normalized&&(i=bo(i,this.array)),i}setY(t,i){return this.normalized&&(i=Gn(i,this.array)),this.array[t*this.itemSize+1]=i,this}getZ(t){let i=this.array[t*this.itemSize+2];return this.normalized&&(i=bo(i,this.array)),i}setZ(t,i){return this.normalized&&(i=Gn(i,this.array)),this.array[t*this.itemSize+2]=i,this}getW(t){let i=this.array[t*this.itemSize+3];return this.normalized&&(i=bo(i,this.array)),i}setW(t,i){return this.normalized&&(i=Gn(i,this.array)),this.array[t*this.itemSize+3]=i,this}setXY(t,i,s){return t*=this.itemSize,this.normalized&&(i=Gn(i,this.array),s=Gn(s,this.array)),this.array[t+0]=i,this.array[t+1]=s,this}setXYZ(t,i,s,l){return t*=this.itemSize,this.normalized&&(i=Gn(i,this.array),s=Gn(s,this.array),l=Gn(l,this.array)),this.array[t+0]=i,this.array[t+1]=s,this.array[t+2]=l,this}setXYZW(t,i,s,l,u){return t*=this.itemSize,this.normalized&&(i=Gn(i,this.array),s=Gn(s,this.array),l=Gn(l,this.array),u=Gn(u,this.array)),this.array[t+0]=i,this.array[t+1]=s,this.array[t+2]=l,this.array[t+3]=u,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==p_&&(t.usage=this.usage),t}}class w0 extends Si{constructor(t,i,s){super(new Uint16Array(t),i,s)}}class D0 extends Si{constructor(t,i,s){super(new Uint32Array(t),i,s)}}class sa extends Si{constructor(t,i,s){super(new Float32Array(t),i,s)}}let _y=0;const li=new tn,mh=new Pn,pr=new $,ti=new Ho,wo=new Ho,xn=new $;class la extends As{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:_y++}),this.uuid=Fo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(T0(t)?D0:w0)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,i){return this.attributes[t]=i,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,i,s=0){this.groups.push({start:t,count:i,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(t,i){this.drawRange.start=t,this.drawRange.count=i}applyMatrix4(t){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(t),i.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const u=new oe().getNormalMatrix(t);s.applyNormalMatrix(u),s.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(t),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return li.makeRotationFromQuaternion(t),this.applyMatrix4(li),this}rotateX(t){return li.makeRotationX(t),this.applyMatrix4(li),this}rotateY(t){return li.makeRotationY(t),this.applyMatrix4(li),this}rotateZ(t){return li.makeRotationZ(t),this.applyMatrix4(li),this}translate(t,i,s){return li.makeTranslation(t,i,s),this.applyMatrix4(li),this}scale(t,i,s){return li.makeScale(t,i,s),this.applyMatrix4(li),this}lookAt(t){return mh.lookAt(t),mh.updateMatrix(),this.applyMatrix4(mh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(pr).negate(),this.translate(pr.x,pr.y,pr.z),this}setFromPoints(t){const i=this.getAttribute("position");if(i===void 0){const s=[];for(let l=0,u=t.length;l<u;l++){const h=t[l];s.push(h.x,h.y,h.z||0)}this.setAttribute("position",new sa(s,3))}else{const s=Math.min(t.length,i.count);for(let l=0;l<s;l++){const u=t[l];i.setXYZ(l,u.x,u.y,u.z||0)}t.length>i.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ho);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new $(-1/0,-1/0,-1/0),new $(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),i)for(let s=0,l=i.length;s<l;s++){const u=i[s];ti.setFromBufferAttribute(u),this.morphTargetsRelative?(xn.addVectors(this.boundingBox.min,ti.min),this.boundingBox.expandByPoint(xn),xn.addVectors(this.boundingBox.max,ti.max),this.boundingBox.expandByPoint(xn)):(this.boundingBox.expandByPoint(ti.min),this.boundingBox.expandByPoint(ti.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Bc);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new $,1/0);return}if(t){const s=this.boundingSphere.center;if(ti.setFromBufferAttribute(t),i)for(let u=0,h=i.length;u<h;u++){const d=i[u];wo.setFromBufferAttribute(d),this.morphTargetsRelative?(xn.addVectors(ti.min,wo.min),ti.expandByPoint(xn),xn.addVectors(ti.max,wo.max),ti.expandByPoint(xn)):(ti.expandByPoint(wo.min),ti.expandByPoint(wo.max))}ti.getCenter(s);let l=0;for(let u=0,h=t.count;u<h;u++)xn.fromBufferAttribute(t,u),l=Math.max(l,s.distanceToSquared(xn));if(i)for(let u=0,h=i.length;u<h;u++){const d=i[u],m=this.morphTargetsRelative;for(let p=0,g=d.count;p<g;p++)xn.fromBufferAttribute(d,p),m&&(pr.fromBufferAttribute(t,p),xn.add(pr)),l=Math.max(l,s.distanceToSquared(xn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,i=this.attributes;if(t===null||i.position===void 0||i.normal===void 0||i.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=i.position,l=i.normal,u=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Si(new Float32Array(4*s.count),4));const h=this.getAttribute("tangent"),d=[],m=[];for(let q=0;q<s.count;q++)d[q]=new $,m[q]=new $;const p=new $,g=new $,x=new $,_=new he,M=new he,E=new he,R=new $,y=new $;function v(q,D,C){p.fromBufferAttribute(s,q),g.fromBufferAttribute(s,D),x.fromBufferAttribute(s,C),_.fromBufferAttribute(u,q),M.fromBufferAttribute(u,D),E.fromBufferAttribute(u,C),g.sub(p),x.sub(p),M.sub(_),E.sub(_);const G=1/(M.x*E.y-E.x*M.y);isFinite(G)&&(R.copy(g).multiplyScalar(E.y).addScaledVector(x,-M.y).multiplyScalar(G),y.copy(x).multiplyScalar(M.x).addScaledVector(g,-E.x).multiplyScalar(G),d[q].add(R),d[D].add(R),d[C].add(R),m[q].add(y),m[D].add(y),m[C].add(y))}let z=this.groups;z.length===0&&(z=[{start:0,count:t.count}]);for(let q=0,D=z.length;q<D;++q){const C=z[q],G=C.start,lt=C.count;for(let rt=G,vt=G+lt;rt<vt;rt+=3)v(t.getX(rt+0),t.getX(rt+1),t.getX(rt+2))}const L=new $,w=new $,F=new $,k=new $;function I(q){F.fromBufferAttribute(l,q),k.copy(F);const D=d[q];L.copy(D),L.sub(F.multiplyScalar(F.dot(D))).normalize(),w.crossVectors(k,D);const G=w.dot(m[q])<0?-1:1;h.setXYZW(q,L.x,L.y,L.z,G)}for(let q=0,D=z.length;q<D;++q){const C=z[q],G=C.start,lt=C.count;for(let rt=G,vt=G+lt;rt<vt;rt+=3)I(t.getX(rt+0)),I(t.getX(rt+1)),I(t.getX(rt+2))}}computeVertexNormals(){const t=this.index,i=this.getAttribute("position");if(i!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new Si(new Float32Array(i.count*3),3),this.setAttribute("normal",s);else for(let _=0,M=s.count;_<M;_++)s.setXYZ(_,0,0,0);const l=new $,u=new $,h=new $,d=new $,m=new $,p=new $,g=new $,x=new $;if(t)for(let _=0,M=t.count;_<M;_+=3){const E=t.getX(_+0),R=t.getX(_+1),y=t.getX(_+2);l.fromBufferAttribute(i,E),u.fromBufferAttribute(i,R),h.fromBufferAttribute(i,y),g.subVectors(h,u),x.subVectors(l,u),g.cross(x),d.fromBufferAttribute(s,E),m.fromBufferAttribute(s,R),p.fromBufferAttribute(s,y),d.add(g),m.add(g),p.add(g),s.setXYZ(E,d.x,d.y,d.z),s.setXYZ(R,m.x,m.y,m.z),s.setXYZ(y,p.x,p.y,p.z)}else for(let _=0,M=i.count;_<M;_+=3)l.fromBufferAttribute(i,_+0),u.fromBufferAttribute(i,_+1),h.fromBufferAttribute(i,_+2),g.subVectors(h,u),x.subVectors(l,u),g.cross(x),s.setXYZ(_+0,g.x,g.y,g.z),s.setXYZ(_+1,g.x,g.y,g.z),s.setXYZ(_+2,g.x,g.y,g.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let i=0,s=t.count;i<s;i++)xn.fromBufferAttribute(t,i),xn.normalize(),t.setXYZ(i,xn.x,xn.y,xn.z)}toNonIndexed(){function t(d,m){const p=d.array,g=d.itemSize,x=d.normalized,_=new p.constructor(m.length*g);let M=0,E=0;for(let R=0,y=m.length;R<y;R++){d.isInterleavedBufferAttribute?M=m[R]*d.data.stride+d.offset:M=m[R]*g;for(let v=0;v<g;v++)_[E++]=p[M++]}return new Si(_,g,x)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new la,s=this.index.array,l=this.attributes;for(const d in l){const m=l[d],p=t(m,s);i.setAttribute(d,p)}const u=this.morphAttributes;for(const d in u){const m=[],p=u[d];for(let g=0,x=p.length;g<x;g++){const _=p[g],M=t(_,s);m.push(M)}i.morphAttributes[d]=m}i.morphTargetsRelative=this.morphTargetsRelative;const h=this.groups;for(let d=0,m=h.length;d<m;d++){const p=h[d];i.addGroup(p.start,p.count,p.materialIndex)}return i}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(t[p]=m[p]);return t}t.data={attributes:{}};const i=this.index;i!==null&&(t.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const s=this.attributes;for(const m in s){const p=s[m];t.data.attributes[m]=p.toJSON(t.data)}const l={};let u=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],g=[];for(let x=0,_=p.length;x<_;x++){const M=p[x];g.push(M.toJSON(t.data))}g.length>0&&(l[m]=g,u=!0)}u&&(t.data.morphAttributes=l,t.data.morphTargetsRelative=this.morphTargetsRelative);const h=this.groups;h.length>0&&(t.data.groups=JSON.parse(JSON.stringify(h)));const d=this.boundingSphere;return d!==null&&(t.data.boundingSphere=d.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=t.name;const s=t.index;s!==null&&this.setIndex(s.clone());const l=t.attributes;for(const p in l){const g=l[p];this.setAttribute(p,g.clone(i))}const u=t.morphAttributes;for(const p in u){const g=[],x=u[p];for(let _=0,M=x.length;_<M;_++)g.push(x[_].clone(i));this.morphAttributes[p]=g}this.morphTargetsRelative=t.morphTargetsRelative;const h=t.groups;for(let p=0,g=h.length;p<g;p++){const x=h[p];this.addGroup(x.start,x.count,x.materialIndex)}const d=t.boundingBox;d!==null&&(this.boundingBox=d.clone());const m=t.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const C_=new tn,ps=new Ed,cc=new Bc,w_=new $,uc=new $,fc=new $,hc=new $,gh=new $,dc=new $,D_=new $,pc=new $;class ia extends Pn{constructor(t=new la,i=new C0){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,h=l.length;u<h;u++){const d=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=u}}}}getVertexPosition(t,i){const s=this.geometry,l=s.attributes.position,u=s.morphAttributes.position,h=s.morphTargetsRelative;i.fromBufferAttribute(l,t);const d=this.morphTargetInfluences;if(u&&d){dc.set(0,0,0);for(let m=0,p=u.length;m<p;m++){const g=d[m],x=u[m];g!==0&&(gh.fromBufferAttribute(x,t),h?dc.addScaledVector(gh,g):dc.addScaledVector(gh.sub(i),g))}i.add(dc)}return i}raycast(t,i){const s=this.geometry,l=this.material,u=this.matrixWorld;l!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),cc.copy(s.boundingSphere),cc.applyMatrix4(u),ps.copy(t.ray).recast(t.near),!(cc.containsPoint(ps.origin)===!1&&(ps.intersectSphere(cc,w_)===null||ps.origin.distanceToSquared(w_)>(t.far-t.near)**2))&&(C_.copy(u).invert(),ps.copy(t.ray).applyMatrix4(C_),!(s.boundingBox!==null&&ps.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(t,i,ps)))}_computeIntersections(t,i,s){let l;const u=this.geometry,h=this.material,d=u.index,m=u.attributes.position,p=u.attributes.uv,g=u.attributes.uv1,x=u.attributes.normal,_=u.groups,M=u.drawRange;if(d!==null)if(Array.isArray(h))for(let E=0,R=_.length;E<R;E++){const y=_[E],v=h[y.materialIndex],z=Math.max(y.start,M.start),L=Math.min(d.count,Math.min(y.start+y.count,M.start+M.count));for(let w=z,F=L;w<F;w+=3){const k=d.getX(w),I=d.getX(w+1),q=d.getX(w+2);l=mc(this,v,t,s,p,g,x,k,I,q),l&&(l.faceIndex=Math.floor(w/3),l.face.materialIndex=y.materialIndex,i.push(l))}}else{const E=Math.max(0,M.start),R=Math.min(d.count,M.start+M.count);for(let y=E,v=R;y<v;y+=3){const z=d.getX(y),L=d.getX(y+1),w=d.getX(y+2);l=mc(this,h,t,s,p,g,x,z,L,w),l&&(l.faceIndex=Math.floor(y/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(h))for(let E=0,R=_.length;E<R;E++){const y=_[E],v=h[y.materialIndex],z=Math.max(y.start,M.start),L=Math.min(m.count,Math.min(y.start+y.count,M.start+M.count));for(let w=z,F=L;w<F;w+=3){const k=w,I=w+1,q=w+2;l=mc(this,v,t,s,p,g,x,k,I,q),l&&(l.faceIndex=Math.floor(w/3),l.face.materialIndex=y.materialIndex,i.push(l))}}else{const E=Math.max(0,M.start),R=Math.min(m.count,M.start+M.count);for(let y=E,v=R;y<v;y+=3){const z=y,L=y+1,w=y+2;l=mc(this,h,t,s,p,g,x,z,L,w),l&&(l.faceIndex=Math.floor(y/3),i.push(l))}}}}function vy(r,t,i,s,l,u,h,d){let m;if(t.side===kn?m=s.intersectTriangle(h,u,l,!0,d):m=s.intersectTriangle(l,u,h,t.side===Wa,d),m===null)return null;pc.copy(d),pc.applyMatrix4(r.matrixWorld);const p=i.ray.origin.distanceTo(pc);return p<i.near||p>i.far?null:{distance:p,point:pc.clone(),object:r}}function mc(r,t,i,s,l,u,h,d,m,p){r.getVertexPosition(d,uc),r.getVertexPosition(m,fc),r.getVertexPosition(p,hc);const g=vy(r,t,i,s,uc,fc,hc,D_);if(g){const x=new $;_i.getBarycoord(D_,uc,fc,hc,x),l&&(g.uv=_i.getInterpolatedAttribute(l,d,m,p,x,new he)),u&&(g.uv1=_i.getInterpolatedAttribute(u,d,m,p,x,new he)),h&&(g.normal=_i.getInterpolatedAttribute(h,d,m,p,x,new $),g.normal.dot(s.direction)>0&&g.normal.multiplyScalar(-1));const _={a:d,b:m,c:p,normal:new $,materialIndex:0};_i.getNormal(uc,fc,hc,_.normal),g.face=_,g.barycoord=x}return g}class Vo extends la{constructor(t=1,i=1,s=1,l=1,u=1,h=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:i,depth:s,widthSegments:l,heightSegments:u,depthSegments:h};const d=this;l=Math.floor(l),u=Math.floor(u),h=Math.floor(h);const m=[],p=[],g=[],x=[];let _=0,M=0;E("z","y","x",-1,-1,s,i,t,h,u,0),E("z","y","x",1,-1,s,i,-t,h,u,1),E("x","z","y",1,1,t,s,i,l,h,2),E("x","z","y",1,-1,t,s,-i,l,h,3),E("x","y","z",1,-1,t,i,s,l,u,4),E("x","y","z",-1,-1,t,i,-s,l,u,5),this.setIndex(m),this.setAttribute("position",new sa(p,3)),this.setAttribute("normal",new sa(g,3)),this.setAttribute("uv",new sa(x,2));function E(R,y,v,z,L,w,F,k,I,q,D){const C=w/I,G=F/q,lt=w/2,rt=F/2,vt=k/2,ft=I+1,N=q+1;let Y=0,X=0;const pt=new $;for(let U=0;U<N;U++){const J=U*G-rt;for(let gt=0;gt<ft;gt++){const St=gt*C-lt;pt[R]=St*z,pt[y]=J*L,pt[v]=vt,p.push(pt.x,pt.y,pt.z),pt[R]=0,pt[y]=0,pt[v]=k>0?1:-1,g.push(pt.x,pt.y,pt.z),x.push(gt/I),x.push(1-U/q),Y+=1}}for(let U=0;U<q;U++)for(let J=0;J<I;J++){const gt=_+J+ft*U,St=_+J+ft*(U+1),W=_+(J+1)+ft*(U+1),ot=_+(J+1)+ft*U;m.push(gt,St,ot),m.push(St,W,ot),X+=6}d.addGroup(M,X,D),M+=X,_+=Y}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Vo(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Cr(r){const t={};for(const i in r){t[i]={};for(const s in r[i]){const l=r[i][s];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][s]=null):t[i][s]=l.clone():Array.isArray(l)?t[i][s]=l.slice():t[i][s]=l}}return t}function Nn(r){const t={};for(let i=0;i<r.length;i++){const s=Cr(r[i]);for(const l in s)t[l]=s[l]}return t}function xy(r){const t=[];for(let i=0;i<r.length;i++)t.push(r[i].clone());return t}function U0(r){const t=r.getRenderTarget();return t===null?r.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Ce.workingColorSpace}const Sy={clone:Cr,merge:Nn};var yy=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,My=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ya extends Go{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=yy,this.fragmentShader=My,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Cr(t.uniforms),this.uniformsGroups=xy(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const i=super.toJSON(t);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const h=this.uniforms[l].value;h&&h.isTexture?i.uniforms[l]={type:"t",value:h.toJSON(t).uuid}:h&&h.isColor?i.uniforms[l]={type:"c",value:h.getHex()}:h&&h.isVector2?i.uniforms[l]={type:"v2",value:h.toArray()}:h&&h.isVector3?i.uniforms[l]={type:"v3",value:h.toArray()}:h&&h.isVector4?i.uniforms[l]={type:"v4",value:h.toArray()}:h&&h.isMatrix3?i.uniforms[l]={type:"m3",value:h.toArray()}:h&&h.isMatrix4?i.uniforms[l]={type:"m4",value:h.toArray()}:i.uniforms[l]={value:h}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const s={};for(const l in this.extensions)this.extensions[l]===!0&&(s[l]=!0);return Object.keys(s).length>0&&(i.extensions=s),i}}class L0 extends Pn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new tn,this.projectionMatrix=new tn,this.projectionMatrixInverse=new tn,this.coordinateSystem=na}copy(t,i){return super.copy(t,i),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,i){super.updateWorldMatrix(t,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ha=new $,U_=new he,L_=new he;class ui extends L0{constructor(t=50,i=1,s=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=s,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const i=.5*this.getFilmHeight()/t;this.fov=hd*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Dc*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return hd*2*Math.atan(Math.tan(Dc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,i,s){Ha.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ha.x,Ha.y).multiplyScalar(-t/Ha.z),Ha.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(Ha.x,Ha.y).multiplyScalar(-t/Ha.z)}getViewSize(t,i){return this.getViewBounds(t,U_,L_),i.subVectors(L_,U_)}setViewOffset(t,i,s,l,u,h){this.aspect=t/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=u,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let i=t*Math.tan(Dc*.5*this.fov)/this.zoom,s=2*i,l=this.aspect*s,u=-.5*l;const h=this.view;if(this.view!==null&&this.view.enabled){const m=h.fullWidth,p=h.fullHeight;u+=h.offsetX*l/m,i-=h.offsetY*s/p,l*=h.width/m,s*=h.height/p}const d=this.filmOffset;d!==0&&(u+=t*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(u,u+l,i,i-s,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const mr=-90,gr=1;class Ey extends Pn{constructor(t,i,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new ui(mr,gr,t,i);l.layers=this.layers,this.add(l);const u=new ui(mr,gr,t,i);u.layers=this.layers,this.add(u);const h=new ui(mr,gr,t,i);h.layers=this.layers,this.add(h);const d=new ui(mr,gr,t,i);d.layers=this.layers,this.add(d);const m=new ui(mr,gr,t,i);m.layers=this.layers,this.add(m);const p=new ui(mr,gr,t,i);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const t=this.coordinateSystem,i=this.children.concat(),[s,l,u,h,d,m]=i;for(const p of i)this.remove(p);if(t===na)s.up.set(0,1,0),s.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),u.up.set(0,0,-1),u.lookAt(0,1,0),h.up.set(0,0,1),h.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(t===Nc)s.up.set(0,-1,0),s.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),u.up.set(0,0,1),u.lookAt(0,1,0),h.up.set(0,0,-1),h.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const p of i)this.add(p),p.updateMatrixWorld()}update(t,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:l}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[u,h,d,m,p,g]=this.children,x=t.getRenderTarget(),_=t.getActiveCubeFace(),M=t.getActiveMipmapLevel(),E=t.xr.enabled;t.xr.enabled=!1;const R=s.texture.generateMipmaps;s.texture.generateMipmaps=!1,t.setRenderTarget(s,0,l),t.render(i,u),t.setRenderTarget(s,1,l),t.render(i,h),t.setRenderTarget(s,2,l),t.render(i,d),t.setRenderTarget(s,3,l),t.render(i,m),t.setRenderTarget(s,4,l),t.render(i,p),s.texture.generateMipmaps=R,t.setRenderTarget(s,5,l),t.render(i,g),t.setRenderTarget(x,_,M),t.xr.enabled=E,s.texture.needsPMREMUpdate=!0}}class N0 extends Xn{constructor(t=[],i=br,s,l,u,h,d,m,p,g){super(t,i,s,l,u,h,d,m,p,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Ty extends bs{constructor(t=1,i={}){super(t,t,i),this.isWebGLCubeRenderTarget=!0;const s={width:t,height:t,depth:1},l=[s,s,s,s,s,s];this.texture=new N0(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},l=new Vo(5,5,5),u=new Ya({name:"CubemapFromEquirect",uniforms:Cr(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:kn,blending:ka});u.uniforms.tEquirect.value=i;const h=new ia(l,u),d=i.minFilter;return i.minFilter===Ms&&(i.minFilter=Ci),new Ey(1,10,this).update(t,h),i.minFilter=d,h.geometry.dispose(),h.material.dispose(),this}clear(t,i=!0,s=!0,l=!0){const u=t.getRenderTarget();for(let h=0;h<6;h++)t.setRenderTarget(this,h),t.clear(i,s,l);t.setRenderTarget(u)}}class Uo extends Pn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const by={type:"move"};class _h{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Uo,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Uo,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new $,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new $),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Uo,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new $,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new $),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const i=this._hand;if(i)for(const s of t.hand.values())this._getHandJoint(i,s)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,i,s){let l=null,u=null,h=null;const d=this._targetRay,m=this._grip,p=this._hand;if(t&&i.session.visibilityState!=="visible-blurred"){if(p&&t.hand){h=!0;for(const R of t.hand.values()){const y=i.getJointPose(R,s),v=this._getHandJoint(p,R);y!==null&&(v.matrix.fromArray(y.transform.matrix),v.matrix.decompose(v.position,v.rotation,v.scale),v.matrixWorldNeedsUpdate=!0,v.jointRadius=y.radius),v.visible=y!==null}const g=p.joints["index-finger-tip"],x=p.joints["thumb-tip"],_=g.position.distanceTo(x.position),M=.02,E=.005;p.inputState.pinching&&_>M+E?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!p.inputState.pinching&&_<=M-E&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else m!==null&&t.gripSpace&&(u=i.getPose(t.gripSpace,s),u!==null&&(m.matrix.fromArray(u.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,u.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(u.linearVelocity)):m.hasLinearVelocity=!1,u.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(u.angularVelocity)):m.hasAngularVelocity=!1));d!==null&&(l=i.getPose(t.targetRaySpace,s),l===null&&u!==null&&(l=u),l!==null&&(d.matrix.fromArray(l.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,l.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(l.linearVelocity)):d.hasLinearVelocity=!1,l.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(l.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(by)))}return d!==null&&(d.visible=l!==null),m!==null&&(m.visible=u!==null),p!==null&&(p.visible=h!==null),this}_getHandJoint(t,i){if(t.joints[i.jointName]===void 0){const s=new Uo;s.matrixAutoUpdate=!1,s.visible=!1,t.joints[i.jointName]=s,t.add(s)}return t.joints[i.jointName]}}class Ay extends Pn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new oa,this.environmentIntensity=1,this.environmentRotation=new oa,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,i){return super.copy(t,i),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const i=super.toJSON(t);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}const vh=new $,Ry=new $,Cy=new oe;class Ga{constructor(t=new $(1,0,0),i=0){this.isPlane=!0,this.normal=t,this.constant=i}set(t,i){return this.normal.copy(t),this.constant=i,this}setComponents(t,i,s,l){return this.normal.set(t,i,s),this.constant=l,this}setFromNormalAndCoplanarPoint(t,i){return this.normal.copy(t),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(t,i,s){const l=vh.subVectors(s,i).cross(Ry.subVectors(t,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,i){return i.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,i){const s=t.delta(vh),l=this.normal.dot(s);if(l===0)return this.distanceToPoint(t.start)===0?i.copy(t.start):null;const u=-(t.start.dot(this.normal)+this.constant)/l;return u<0||u>1?null:i.copy(t.start).addScaledVector(s,u)}intersectsLine(t){const i=this.distanceToPoint(t.start),s=this.distanceToPoint(t.end);return i<0&&s>0||s<0&&i>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,i){const s=i||Cy.getNormalMatrix(t),l=this.coplanarPoint(vh).applyMatrix4(t),u=this.normal.applyMatrix3(s).normalize();return this.constant=-l.dot(u),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ms=new Bc,gc=new $;class O0{constructor(t=new Ga,i=new Ga,s=new Ga,l=new Ga,u=new Ga,h=new Ga){this.planes=[t,i,s,l,u,h]}set(t,i,s,l,u,h){const d=this.planes;return d[0].copy(t),d[1].copy(i),d[2].copy(s),d[3].copy(l),d[4].copy(u),d[5].copy(h),this}copy(t){const i=this.planes;for(let s=0;s<6;s++)i[s].copy(t.planes[s]);return this}setFromProjectionMatrix(t,i=na){const s=this.planes,l=t.elements,u=l[0],h=l[1],d=l[2],m=l[3],p=l[4],g=l[5],x=l[6],_=l[7],M=l[8],E=l[9],R=l[10],y=l[11],v=l[12],z=l[13],L=l[14],w=l[15];if(s[0].setComponents(m-u,_-p,y-M,w-v).normalize(),s[1].setComponents(m+u,_+p,y+M,w+v).normalize(),s[2].setComponents(m+h,_+g,y+E,w+z).normalize(),s[3].setComponents(m-h,_-g,y-E,w-z).normalize(),s[4].setComponents(m-d,_-x,y-R,w-L).normalize(),i===na)s[5].setComponents(m+d,_+x,y+R,w+L).normalize();else if(i===Nc)s[5].setComponents(d,x,R,L).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ms.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const i=t.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),ms.copy(i.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ms)}intersectsSprite(t){return ms.center.set(0,0,0),ms.radius=.7071067811865476,ms.applyMatrix4(t.matrixWorld),this.intersectsSphere(ms)}intersectsSphere(t){const i=this.planes,s=t.center,l=-t.radius;for(let u=0;u<6;u++)if(i[u].distanceToPoint(s)<l)return!1;return!0}intersectsBox(t){const i=this.planes;for(let s=0;s<6;s++){const l=i[s];if(gc.x=l.normal.x>0?t.max.x:t.min.x,gc.y=l.normal.y>0?t.max.y:t.min.y,gc.z=l.normal.z>0?t.max.z:t.min.z,l.distanceToPoint(gc)<0)return!1}return!0}containsPoint(t){const i=this.planes;for(let s=0;s<6;s++)if(i[s].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class P0 extends Go{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ue(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Pc=new $,zc=new $,N_=new tn,Do=new Ed,_c=new Bc,xh=new $,O_=new $;class wy extends Pn{constructor(t=new la,i=new P0){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const i=t.attributes.position,s=[0];for(let l=1,u=i.count;l<u;l++)Pc.fromBufferAttribute(i,l-1),zc.fromBufferAttribute(i,l),s[l]=s[l-1],s[l]+=Pc.distanceTo(zc);t.setAttribute("lineDistance",new sa(s,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,i){const s=this.geometry,l=this.matrixWorld,u=t.params.Line.threshold,h=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),_c.copy(s.boundingSphere),_c.applyMatrix4(l),_c.radius+=u,t.ray.intersectsSphere(_c)===!1)return;N_.copy(l).invert(),Do.copy(t.ray).applyMatrix4(N_);const d=u/((this.scale.x+this.scale.y+this.scale.z)/3),m=d*d,p=this.isLineSegments?2:1,g=s.index,_=s.attributes.position;if(g!==null){const M=Math.max(0,h.start),E=Math.min(g.count,h.start+h.count);for(let R=M,y=E-1;R<y;R+=p){const v=g.getX(R),z=g.getX(R+1),L=vc(this,t,Do,m,v,z,R);L&&i.push(L)}if(this.isLineLoop){const R=g.getX(E-1),y=g.getX(M),v=vc(this,t,Do,m,R,y,E-1);v&&i.push(v)}}else{const M=Math.max(0,h.start),E=Math.min(_.count,h.start+h.count);for(let R=M,y=E-1;R<y;R+=p){const v=vc(this,t,Do,m,R,R+1,R);v&&i.push(v)}if(this.isLineLoop){const R=vc(this,t,Do,m,E-1,M,E-1);R&&i.push(R)}}}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,h=l.length;u<h;u++){const d=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=u}}}}}function vc(r,t,i,s,l,u,h){const d=r.geometry.attributes.position;if(Pc.fromBufferAttribute(d,l),zc.fromBufferAttribute(d,u),i.distanceSqToSegment(Pc,zc,xh,O_)>s)return;xh.applyMatrix4(r.matrixWorld);const p=t.ray.origin.distanceTo(xh);if(!(p<t.near||p>t.far))return{distance:p,point:O_.clone().applyMatrix4(r.matrixWorld),index:h,face:null,faceIndex:null,barycoord:null,object:r}}const P_=new $,z_=new $;class Dy extends wy{constructor(t,i){super(t,i),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const i=t.attributes.position,s=[];for(let l=0,u=i.count;l<u;l+=2)P_.fromBufferAttribute(i,l),z_.fromBufferAttribute(i,l+1),s[l]=l===0?0:s[l-1],s[l+1]=s[l]+P_.distanceTo(z_);t.setAttribute("lineDistance",new sa(s,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class z0 extends Xn{constructor(t,i,s=Es,l,u,h,d=xi,m=xi,p,g=zo,x=1){if(g!==zo&&g!==Io)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const _={width:t,height:i,depth:x};super(_,l,u,h,d,m,g,s,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Md(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const i=super.toJSON(t);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class Fc extends la{constructor(t=1,i=1,s=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:i,widthSegments:s,heightSegments:l};const u=t/2,h=i/2,d=Math.floor(s),m=Math.floor(l),p=d+1,g=m+1,x=t/d,_=i/m,M=[],E=[],R=[],y=[];for(let v=0;v<g;v++){const z=v*_-h;for(let L=0;L<p;L++){const w=L*x-u;E.push(w,-z,0),R.push(0,0,1),y.push(L/d),y.push(1-v/m)}}for(let v=0;v<m;v++)for(let z=0;z<d;z++){const L=z+p*v,w=z+p*(v+1),F=z+1+p*(v+1),k=z+1+p*v;M.push(L,w,k),M.push(w,F,k)}this.setIndex(M),this.setAttribute("position",new sa(E,3)),this.setAttribute("normal",new sa(R,3)),this.setAttribute("uv",new sa(y,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Fc(t.width,t.height,t.widthSegments,t.heightSegments)}}class Uy extends Go{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=FS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Ly extends Go{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class Ny extends Pn{constructor(t,i=1){super(),this.isLight=!0,this.type="Light",this.color=new Ue(t),this.intensity=i}dispose(){}copy(t,i){return super.copy(t,i),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const i=super.toJSON(t);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,this.groundColor!==void 0&&(i.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(i.object.distance=this.distance),this.angle!==void 0&&(i.object.angle=this.angle),this.decay!==void 0&&(i.object.decay=this.decay),this.penumbra!==void 0&&(i.object.penumbra=this.penumbra),this.shadow!==void 0&&(i.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(i.object.target=this.target.uuid),i}}class Oy extends L0{constructor(t=-1,i=1,s=1,l=-1,u=.1,h=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=i,this.top=s,this.bottom=l,this.near=u,this.far=h,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,i,s,l,u,h){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=u,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let u=s-t,h=s+t,d=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;u+=p*this.view.offsetX,h=u+p*this.view.width,d-=g*this.view.offsetY,m=d-g*this.view.height}this.projectionMatrix.makeOrthographic(u,h,d,m,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class Py extends Ny{constructor(t,i){super(t,i),this.isAmbientLight=!0,this.type="AmbientLight"}}class zy extends ui{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}class I_{constructor(t=1,i=0,s=0){this.radius=t,this.phi=i,this.theta=s}set(t,i,s){return this.radius=t,this.phi=i,this.theta=s,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=ge(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,i,s){return this.radius=Math.sqrt(t*t+i*i+s*s),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,s),this.phi=Math.acos(ge(i/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class Iy extends As{constructor(t,i=null){super(),this.object=t,this.domElement=i,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){if(t===void 0){console.warn("THREE.Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}}function B_(r,t,i,s){const l=By(s);switch(i){case v0:return r*t;case S0:return r*t/l.components*l.byteLength;case xd:return r*t/l.components*l.byteLength;case y0:return r*t*2/l.components*l.byteLength;case Sd:return r*t*2/l.components*l.byteLength;case x0:return r*t*3/l.components*l.byteLength;case vi:return r*t*4/l.components*l.byteLength;case yd:return r*t*4/l.components*l.byteLength;case bc:case Ac:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case Rc:case Cc:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Gh:case kh:return Math.max(r,16)*Math.max(t,8)/4;case Hh:case Vh:return Math.max(r,8)*Math.max(t,8)/2;case Xh:case Wh:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case Yh:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case qh:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case jh:return Math.floor((r+4)/5)*Math.floor((t+3)/4)*16;case Zh:return Math.floor((r+4)/5)*Math.floor((t+4)/5)*16;case Kh:return Math.floor((r+5)/6)*Math.floor((t+4)/5)*16;case Qh:return Math.floor((r+5)/6)*Math.floor((t+5)/6)*16;case Jh:return Math.floor((r+7)/8)*Math.floor((t+4)/5)*16;case $h:return Math.floor((r+7)/8)*Math.floor((t+5)/6)*16;case td:return Math.floor((r+7)/8)*Math.floor((t+7)/8)*16;case ed:return Math.floor((r+9)/10)*Math.floor((t+4)/5)*16;case nd:return Math.floor((r+9)/10)*Math.floor((t+5)/6)*16;case id:return Math.floor((r+9)/10)*Math.floor((t+7)/8)*16;case ad:return Math.floor((r+9)/10)*Math.floor((t+9)/10)*16;case sd:return Math.floor((r+11)/12)*Math.floor((t+9)/10)*16;case rd:return Math.floor((r+11)/12)*Math.floor((t+11)/12)*16;case wc:case od:case ld:return Math.ceil(r/4)*Math.ceil(t/4)*16;case M0:case cd:return Math.ceil(r/4)*Math.ceil(t/4)*8;case ud:case fd:return Math.ceil(r/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function By(r){switch(r){case ra:case m0:return{byteLength:1,components:1};case Oo:case g0:case Bo:return{byteLength:2,components:1};case _d:case vd:return{byteLength:2,components:4};case Es:case gd:case ea:return{byteLength:4,components:1};case _0:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:md}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=md);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function I0(){let r=null,t=!1,i=null,s=null;function l(u,h){i(u,h),s=r.requestAnimationFrame(l)}return{start:function(){t!==!0&&i!==null&&(s=r.requestAnimationFrame(l),t=!0)},stop:function(){r.cancelAnimationFrame(s),t=!1},setAnimationLoop:function(u){i=u},setContext:function(u){r=u}}}function Fy(r){const t=new WeakMap;function i(d,m){const p=d.array,g=d.usage,x=p.byteLength,_=r.createBuffer();r.bindBuffer(m,_),r.bufferData(m,p,g),d.onUploadCallback();let M;if(p instanceof Float32Array)M=r.FLOAT;else if(p instanceof Uint16Array)d.isFloat16BufferAttribute?M=r.HALF_FLOAT:M=r.UNSIGNED_SHORT;else if(p instanceof Int16Array)M=r.SHORT;else if(p instanceof Uint32Array)M=r.UNSIGNED_INT;else if(p instanceof Int32Array)M=r.INT;else if(p instanceof Int8Array)M=r.BYTE;else if(p instanceof Uint8Array)M=r.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)M=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:_,type:M,bytesPerElement:p.BYTES_PER_ELEMENT,version:d.version,size:x}}function s(d,m,p){const g=m.array,x=m.updateRanges;if(r.bindBuffer(p,d),x.length===0)r.bufferSubData(p,0,g);else{x.sort((M,E)=>M.start-E.start);let _=0;for(let M=1;M<x.length;M++){const E=x[_],R=x[M];R.start<=E.start+E.count+1?E.count=Math.max(E.count,R.start+R.count-E.start):(++_,x[_]=R)}x.length=_+1;for(let M=0,E=x.length;M<E;M++){const R=x[M];r.bufferSubData(p,R.start*g.BYTES_PER_ELEMENT,g,R.start,R.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(d){return d.isInterleavedBufferAttribute&&(d=d.data),t.get(d)}function u(d){d.isInterleavedBufferAttribute&&(d=d.data);const m=t.get(d);m&&(r.deleteBuffer(m.buffer),t.delete(d))}function h(d,m){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const g=t.get(d);(!g||g.version<d.version)&&t.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const p=t.get(d);if(p===void 0)t.set(d,i(d,m));else if(p.version<d.version){if(p.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(p.buffer,d,m),p.version=d.version}}return{get:l,remove:u,update:h}}var Hy=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Gy=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Vy=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ky=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Xy=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Wy=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Yy=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,qy=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,jy=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Zy=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Ky=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Qy=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Jy=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,$y=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,tM=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,eM=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,nM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,iM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,aM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,sM=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,rM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,oM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,lM=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,cM=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,uM=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,fM=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,hM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,dM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,pM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,mM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,gM="gl_FragColor = linearToOutputTexel( gl_FragColor );",_M=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,vM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,xM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,SM=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,yM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,MM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,EM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,TM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,bM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,AM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,RM=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,CM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,wM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,DM=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,UM=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,LM=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,NM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,OM=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,PM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,zM=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,IM=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,BM=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,FM=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,HM=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,GM=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,VM=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,kM=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,XM=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,WM=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,YM=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,qM=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,jM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,ZM=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,KM=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,QM=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,JM=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,$M=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,tE=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,eE=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,nE=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,iE=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,aE=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,sE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,rE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,oE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,lE=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,cE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,uE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,fE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,hE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,dE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,pE=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,mE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,gE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,_E=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,vE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,xE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,SE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,yE=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,ME=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,EE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,TE=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,bE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,AE=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,RE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,CE=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,wE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,DE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,UE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,LE=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,NE=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,OE=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,PE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,zE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,IE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,BE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const FE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,HE=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,GE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,VE=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,kE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,XE=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,WE=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,YE=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,qE=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,jE=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,ZE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,KE=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,QE=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,JE=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,$E=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,tT=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,eT=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,nT=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,iT=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,aT=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,sT=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,rT=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,oT=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,lT=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,cT=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,uT=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,fT=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,hT=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,dT=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,pT=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,mT=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,gT=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,_T=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,vT=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,le={alphahash_fragment:Hy,alphahash_pars_fragment:Gy,alphamap_fragment:Vy,alphamap_pars_fragment:ky,alphatest_fragment:Xy,alphatest_pars_fragment:Wy,aomap_fragment:Yy,aomap_pars_fragment:qy,batching_pars_vertex:jy,batching_vertex:Zy,begin_vertex:Ky,beginnormal_vertex:Qy,bsdfs:Jy,iridescence_fragment:$y,bumpmap_pars_fragment:tM,clipping_planes_fragment:eM,clipping_planes_pars_fragment:nM,clipping_planes_pars_vertex:iM,clipping_planes_vertex:aM,color_fragment:sM,color_pars_fragment:rM,color_pars_vertex:oM,color_vertex:lM,common:cM,cube_uv_reflection_fragment:uM,defaultnormal_vertex:fM,displacementmap_pars_vertex:hM,displacementmap_vertex:dM,emissivemap_fragment:pM,emissivemap_pars_fragment:mM,colorspace_fragment:gM,colorspace_pars_fragment:_M,envmap_fragment:vM,envmap_common_pars_fragment:xM,envmap_pars_fragment:SM,envmap_pars_vertex:yM,envmap_physical_pars_fragment:LM,envmap_vertex:MM,fog_vertex:EM,fog_pars_vertex:TM,fog_fragment:bM,fog_pars_fragment:AM,gradientmap_pars_fragment:RM,lightmap_pars_fragment:CM,lights_lambert_fragment:wM,lights_lambert_pars_fragment:DM,lights_pars_begin:UM,lights_toon_fragment:NM,lights_toon_pars_fragment:OM,lights_phong_fragment:PM,lights_phong_pars_fragment:zM,lights_physical_fragment:IM,lights_physical_pars_fragment:BM,lights_fragment_begin:FM,lights_fragment_maps:HM,lights_fragment_end:GM,logdepthbuf_fragment:VM,logdepthbuf_pars_fragment:kM,logdepthbuf_pars_vertex:XM,logdepthbuf_vertex:WM,map_fragment:YM,map_pars_fragment:qM,map_particle_fragment:jM,map_particle_pars_fragment:ZM,metalnessmap_fragment:KM,metalnessmap_pars_fragment:QM,morphinstance_vertex:JM,morphcolor_vertex:$M,morphnormal_vertex:tE,morphtarget_pars_vertex:eE,morphtarget_vertex:nE,normal_fragment_begin:iE,normal_fragment_maps:aE,normal_pars_fragment:sE,normal_pars_vertex:rE,normal_vertex:oE,normalmap_pars_fragment:lE,clearcoat_normal_fragment_begin:cE,clearcoat_normal_fragment_maps:uE,clearcoat_pars_fragment:fE,iridescence_pars_fragment:hE,opaque_fragment:dE,packing:pE,premultiplied_alpha_fragment:mE,project_vertex:gE,dithering_fragment:_E,dithering_pars_fragment:vE,roughnessmap_fragment:xE,roughnessmap_pars_fragment:SE,shadowmap_pars_fragment:yE,shadowmap_pars_vertex:ME,shadowmap_vertex:EE,shadowmask_pars_fragment:TE,skinbase_vertex:bE,skinning_pars_vertex:AE,skinning_vertex:RE,skinnormal_vertex:CE,specularmap_fragment:wE,specularmap_pars_fragment:DE,tonemapping_fragment:UE,tonemapping_pars_fragment:LE,transmission_fragment:NE,transmission_pars_fragment:OE,uv_pars_fragment:PE,uv_pars_vertex:zE,uv_vertex:IE,worldpos_vertex:BE,background_vert:FE,background_frag:HE,backgroundCube_vert:GE,backgroundCube_frag:VE,cube_vert:kE,cube_frag:XE,depth_vert:WE,depth_frag:YE,distanceRGBA_vert:qE,distanceRGBA_frag:jE,equirect_vert:ZE,equirect_frag:KE,linedashed_vert:QE,linedashed_frag:JE,meshbasic_vert:$E,meshbasic_frag:tT,meshlambert_vert:eT,meshlambert_frag:nT,meshmatcap_vert:iT,meshmatcap_frag:aT,meshnormal_vert:sT,meshnormal_frag:rT,meshphong_vert:oT,meshphong_frag:lT,meshphysical_vert:cT,meshphysical_frag:uT,meshtoon_vert:fT,meshtoon_frag:hT,points_vert:dT,points_frag:pT,shadow_vert:mT,shadow_frag:gT,sprite_vert:_T,sprite_frag:vT},Lt={common:{diffuse:{value:new Ue(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new oe},alphaMap:{value:null},alphaMapTransform:{value:new oe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new oe}},envmap:{envMap:{value:null},envMapRotation:{value:new oe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new oe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new oe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new oe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new oe},normalScale:{value:new he(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new oe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new oe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new oe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new oe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ue(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ue(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new oe},alphaTest:{value:0},uvTransform:{value:new oe}},sprite:{diffuse:{value:new Ue(16777215)},opacity:{value:1},center:{value:new he(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new oe},alphaMap:{value:null},alphaMapTransform:{value:new oe},alphaTest:{value:0}}},Ri={basic:{uniforms:Nn([Lt.common,Lt.specularmap,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.fog]),vertexShader:le.meshbasic_vert,fragmentShader:le.meshbasic_frag},lambert:{uniforms:Nn([Lt.common,Lt.specularmap,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.fog,Lt.lights,{emissive:{value:new Ue(0)}}]),vertexShader:le.meshlambert_vert,fragmentShader:le.meshlambert_frag},phong:{uniforms:Nn([Lt.common,Lt.specularmap,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.fog,Lt.lights,{emissive:{value:new Ue(0)},specular:{value:new Ue(1118481)},shininess:{value:30}}]),vertexShader:le.meshphong_vert,fragmentShader:le.meshphong_frag},standard:{uniforms:Nn([Lt.common,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.roughnessmap,Lt.metalnessmap,Lt.fog,Lt.lights,{emissive:{value:new Ue(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:le.meshphysical_vert,fragmentShader:le.meshphysical_frag},toon:{uniforms:Nn([Lt.common,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.gradientmap,Lt.fog,Lt.lights,{emissive:{value:new Ue(0)}}]),vertexShader:le.meshtoon_vert,fragmentShader:le.meshtoon_frag},matcap:{uniforms:Nn([Lt.common,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.fog,{matcap:{value:null}}]),vertexShader:le.meshmatcap_vert,fragmentShader:le.meshmatcap_frag},points:{uniforms:Nn([Lt.points,Lt.fog]),vertexShader:le.points_vert,fragmentShader:le.points_frag},dashed:{uniforms:Nn([Lt.common,Lt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:le.linedashed_vert,fragmentShader:le.linedashed_frag},depth:{uniforms:Nn([Lt.common,Lt.displacementmap]),vertexShader:le.depth_vert,fragmentShader:le.depth_frag},normal:{uniforms:Nn([Lt.common,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,{opacity:{value:1}}]),vertexShader:le.meshnormal_vert,fragmentShader:le.meshnormal_frag},sprite:{uniforms:Nn([Lt.sprite,Lt.fog]),vertexShader:le.sprite_vert,fragmentShader:le.sprite_frag},background:{uniforms:{uvTransform:{value:new oe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:le.background_vert,fragmentShader:le.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new oe}},vertexShader:le.backgroundCube_vert,fragmentShader:le.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:le.cube_vert,fragmentShader:le.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:le.equirect_vert,fragmentShader:le.equirect_frag},distanceRGBA:{uniforms:Nn([Lt.common,Lt.displacementmap,{referencePosition:{value:new $},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:le.distanceRGBA_vert,fragmentShader:le.distanceRGBA_frag},shadow:{uniforms:Nn([Lt.lights,Lt.fog,{color:{value:new Ue(0)},opacity:{value:1}}]),vertexShader:le.shadow_vert,fragmentShader:le.shadow_frag}};Ri.physical={uniforms:Nn([Ri.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new oe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new oe},clearcoatNormalScale:{value:new he(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new oe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new oe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new oe},sheen:{value:0},sheenColor:{value:new Ue(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new oe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new oe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new oe},transmissionSamplerSize:{value:new he},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new oe},attenuationDistance:{value:0},attenuationColor:{value:new Ue(0)},specularColor:{value:new Ue(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new oe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new oe},anisotropyVector:{value:new he},anisotropyMap:{value:null},anisotropyMapTransform:{value:new oe}}]),vertexShader:le.meshphysical_vert,fragmentShader:le.meshphysical_frag};const xc={r:0,b:0,g:0},gs=new oa,xT=new tn;function ST(r,t,i,s,l,u,h){const d=new Ue(0);let m=u===!0?0:1,p,g,x=null,_=0,M=null;function E(L){let w=L.isScene===!0?L.background:null;return w&&w.isTexture&&(w=(L.backgroundBlurriness>0?i:t).get(w)),w}function R(L){let w=!1;const F=E(L);F===null?v(d,m):F&&F.isColor&&(v(F,1),w=!0);const k=r.xr.getEnvironmentBlendMode();k==="additive"?s.buffers.color.setClear(0,0,0,1,h):k==="alpha-blend"&&s.buffers.color.setClear(0,0,0,0,h),(r.autoClear||w)&&(s.buffers.depth.setTest(!0),s.buffers.depth.setMask(!0),s.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function y(L,w){const F=E(w);F&&(F.isCubeTexture||F.mapping===Ic)?(g===void 0&&(g=new ia(new Vo(1,1,1),new Ya({name:"BackgroundCubeMaterial",uniforms:Cr(Ri.backgroundCube.uniforms),vertexShader:Ri.backgroundCube.vertexShader,fragmentShader:Ri.backgroundCube.fragmentShader,side:kn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),g.geometry.deleteAttribute("normal"),g.geometry.deleteAttribute("uv"),g.onBeforeRender=function(k,I,q){this.matrixWorld.copyPosition(q.matrixWorld)},Object.defineProperty(g.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(g)),gs.copy(w.backgroundRotation),gs.x*=-1,gs.y*=-1,gs.z*=-1,F.isCubeTexture&&F.isRenderTargetTexture===!1&&(gs.y*=-1,gs.z*=-1),g.material.uniforms.envMap.value=F,g.material.uniforms.flipEnvMap.value=F.isCubeTexture&&F.isRenderTargetTexture===!1?-1:1,g.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,g.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,g.material.uniforms.backgroundRotation.value.setFromMatrix4(xT.makeRotationFromEuler(gs)),g.material.toneMapped=Ce.getTransfer(F.colorSpace)!==Be,(x!==F||_!==F.version||M!==r.toneMapping)&&(g.material.needsUpdate=!0,x=F,_=F.version,M=r.toneMapping),g.layers.enableAll(),L.unshift(g,g.geometry,g.material,0,0,null)):F&&F.isTexture&&(p===void 0&&(p=new ia(new Fc(2,2),new Ya({name:"BackgroundMaterial",uniforms:Cr(Ri.background.uniforms),vertexShader:Ri.background.vertexShader,fragmentShader:Ri.background.fragmentShader,side:Wa,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(p)),p.material.uniforms.t2D.value=F,p.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,p.material.toneMapped=Ce.getTransfer(F.colorSpace)!==Be,F.matrixAutoUpdate===!0&&F.updateMatrix(),p.material.uniforms.uvTransform.value.copy(F.matrix),(x!==F||_!==F.version||M!==r.toneMapping)&&(p.material.needsUpdate=!0,x=F,_=F.version,M=r.toneMapping),p.layers.enableAll(),L.unshift(p,p.geometry,p.material,0,0,null))}function v(L,w){L.getRGB(xc,U0(r)),s.buffers.color.setClear(xc.r,xc.g,xc.b,w,h)}function z(){g!==void 0&&(g.geometry.dispose(),g.material.dispose(),g=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return d},setClearColor:function(L,w=1){d.set(L),m=w,v(d,m)},getClearAlpha:function(){return m},setClearAlpha:function(L){m=L,v(d,m)},render:R,addToRenderList:y,dispose:z}}function yT(r,t){const i=r.getParameter(r.MAX_VERTEX_ATTRIBS),s={},l=_(null);let u=l,h=!1;function d(C,G,lt,rt,vt){let ft=!1;const N=x(rt,lt,G);u!==N&&(u=N,p(u.object)),ft=M(C,rt,lt,vt),ft&&E(C,rt,lt,vt),vt!==null&&t.update(vt,r.ELEMENT_ARRAY_BUFFER),(ft||h)&&(h=!1,w(C,G,lt,rt),vt!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(vt).buffer))}function m(){return r.createVertexArray()}function p(C){return r.bindVertexArray(C)}function g(C){return r.deleteVertexArray(C)}function x(C,G,lt){const rt=lt.wireframe===!0;let vt=s[C.id];vt===void 0&&(vt={},s[C.id]=vt);let ft=vt[G.id];ft===void 0&&(ft={},vt[G.id]=ft);let N=ft[rt];return N===void 0&&(N=_(m()),ft[rt]=N),N}function _(C){const G=[],lt=[],rt=[];for(let vt=0;vt<i;vt++)G[vt]=0,lt[vt]=0,rt[vt]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:G,enabledAttributes:lt,attributeDivisors:rt,object:C,attributes:{},index:null}}function M(C,G,lt,rt){const vt=u.attributes,ft=G.attributes;let N=0;const Y=lt.getAttributes();for(const X in Y)if(Y[X].location>=0){const U=vt[X];let J=ft[X];if(J===void 0&&(X==="instanceMatrix"&&C.instanceMatrix&&(J=C.instanceMatrix),X==="instanceColor"&&C.instanceColor&&(J=C.instanceColor)),U===void 0||U.attribute!==J||J&&U.data!==J.data)return!0;N++}return u.attributesNum!==N||u.index!==rt}function E(C,G,lt,rt){const vt={},ft=G.attributes;let N=0;const Y=lt.getAttributes();for(const X in Y)if(Y[X].location>=0){let U=ft[X];U===void 0&&(X==="instanceMatrix"&&C.instanceMatrix&&(U=C.instanceMatrix),X==="instanceColor"&&C.instanceColor&&(U=C.instanceColor));const J={};J.attribute=U,U&&U.data&&(J.data=U.data),vt[X]=J,N++}u.attributes=vt,u.attributesNum=N,u.index=rt}function R(){const C=u.newAttributes;for(let G=0,lt=C.length;G<lt;G++)C[G]=0}function y(C){v(C,0)}function v(C,G){const lt=u.newAttributes,rt=u.enabledAttributes,vt=u.attributeDivisors;lt[C]=1,rt[C]===0&&(r.enableVertexAttribArray(C),rt[C]=1),vt[C]!==G&&(r.vertexAttribDivisor(C,G),vt[C]=G)}function z(){const C=u.newAttributes,G=u.enabledAttributes;for(let lt=0,rt=G.length;lt<rt;lt++)G[lt]!==C[lt]&&(r.disableVertexAttribArray(lt),G[lt]=0)}function L(C,G,lt,rt,vt,ft,N){N===!0?r.vertexAttribIPointer(C,G,lt,vt,ft):r.vertexAttribPointer(C,G,lt,rt,vt,ft)}function w(C,G,lt,rt){R();const vt=rt.attributes,ft=lt.getAttributes(),N=G.defaultAttributeValues;for(const Y in ft){const X=ft[Y];if(X.location>=0){let pt=vt[Y];if(pt===void 0&&(Y==="instanceMatrix"&&C.instanceMatrix&&(pt=C.instanceMatrix),Y==="instanceColor"&&C.instanceColor&&(pt=C.instanceColor)),pt!==void 0){const U=pt.normalized,J=pt.itemSize,gt=t.get(pt);if(gt===void 0)continue;const St=gt.buffer,W=gt.type,ot=gt.bytesPerElement,yt=W===r.INT||W===r.UNSIGNED_INT||pt.gpuType===gd;if(pt.isInterleavedBufferAttribute){const At=pt.data,Rt=At.stride,qt=pt.offset;if(At.isInstancedInterleavedBuffer){for(let Vt=0;Vt<X.locationSize;Vt++)v(X.location+Vt,At.meshPerAttribute);C.isInstancedMesh!==!0&&rt._maxInstanceCount===void 0&&(rt._maxInstanceCount=At.meshPerAttribute*At.count)}else for(let Vt=0;Vt<X.locationSize;Vt++)y(X.location+Vt);r.bindBuffer(r.ARRAY_BUFFER,St);for(let Vt=0;Vt<X.locationSize;Vt++)L(X.location+Vt,J/X.locationSize,W,U,Rt*ot,(qt+J/X.locationSize*Vt)*ot,yt)}else{if(pt.isInstancedBufferAttribute){for(let At=0;At<X.locationSize;At++)v(X.location+At,pt.meshPerAttribute);C.isInstancedMesh!==!0&&rt._maxInstanceCount===void 0&&(rt._maxInstanceCount=pt.meshPerAttribute*pt.count)}else for(let At=0;At<X.locationSize;At++)y(X.location+At);r.bindBuffer(r.ARRAY_BUFFER,St);for(let At=0;At<X.locationSize;At++)L(X.location+At,J/X.locationSize,W,U,J*ot,J/X.locationSize*At*ot,yt)}}else if(N!==void 0){const U=N[Y];if(U!==void 0)switch(U.length){case 2:r.vertexAttrib2fv(X.location,U);break;case 3:r.vertexAttrib3fv(X.location,U);break;case 4:r.vertexAttrib4fv(X.location,U);break;default:r.vertexAttrib1fv(X.location,U)}}}}z()}function F(){q();for(const C in s){const G=s[C];for(const lt in G){const rt=G[lt];for(const vt in rt)g(rt[vt].object),delete rt[vt];delete G[lt]}delete s[C]}}function k(C){if(s[C.id]===void 0)return;const G=s[C.id];for(const lt in G){const rt=G[lt];for(const vt in rt)g(rt[vt].object),delete rt[vt];delete G[lt]}delete s[C.id]}function I(C){for(const G in s){const lt=s[G];if(lt[C.id]===void 0)continue;const rt=lt[C.id];for(const vt in rt)g(rt[vt].object),delete rt[vt];delete lt[C.id]}}function q(){D(),h=!0,u!==l&&(u=l,p(u.object))}function D(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:q,resetDefaultState:D,dispose:F,releaseStatesOfGeometry:k,releaseStatesOfProgram:I,initAttributes:R,enableAttribute:y,disableUnusedAttributes:z}}function MT(r,t,i){let s;function l(p){s=p}function u(p,g){r.drawArrays(s,p,g),i.update(g,s,1)}function h(p,g,x){x!==0&&(r.drawArraysInstanced(s,p,g,x),i.update(g,s,x))}function d(p,g,x){if(x===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,p,0,g,0,x);let M=0;for(let E=0;E<x;E++)M+=g[E];i.update(M,s,1)}function m(p,g,x,_){if(x===0)return;const M=t.get("WEBGL_multi_draw");if(M===null)for(let E=0;E<p.length;E++)h(p[E],g[E],_[E]);else{M.multiDrawArraysInstancedWEBGL(s,p,0,g,0,_,0,x);let E=0;for(let R=0;R<x;R++)E+=g[R]*_[R];i.update(E,s,1)}}this.setMode=l,this.render=u,this.renderInstances=h,this.renderMultiDraw=d,this.renderMultiDrawInstances=m}function ET(r,t,i,s){let l;function u(){if(l!==void 0)return l;if(t.has("EXT_texture_filter_anisotropic")===!0){const I=t.get("EXT_texture_filter_anisotropic");l=r.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function h(I){return!(I!==vi&&s.convert(I)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(I){const q=I===Bo&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(I!==ra&&s.convert(I)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&I!==ea&&!q)}function m(I){if(I==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=i.precision!==void 0?i.precision:"highp";const g=m(p);g!==p&&(console.warn("THREE.WebGLRenderer:",p,"not supported, using",g,"instead."),p=g);const x=i.logarithmicDepthBuffer===!0,_=i.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),M=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),E=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),R=r.getParameter(r.MAX_TEXTURE_SIZE),y=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),v=r.getParameter(r.MAX_VERTEX_ATTRIBS),z=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),L=r.getParameter(r.MAX_VARYING_VECTORS),w=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),F=E>0,k=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:u,getMaxPrecision:m,textureFormatReadable:h,textureTypeReadable:d,precision:p,logarithmicDepthBuffer:x,reverseDepthBuffer:_,maxTextures:M,maxVertexTextures:E,maxTextureSize:R,maxCubemapSize:y,maxAttributes:v,maxVertexUniforms:z,maxVaryings:L,maxFragmentUniforms:w,vertexTextures:F,maxSamples:k}}function TT(r){const t=this;let i=null,s=0,l=!1,u=!1;const h=new Ga,d=new oe,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(x,_){const M=x.length!==0||_||s!==0||l;return l=_,s=x.length,M},this.beginShadows=function(){u=!0,g(null)},this.endShadows=function(){u=!1},this.setGlobalState=function(x,_){i=g(x,_,0)},this.setState=function(x,_,M){const E=x.clippingPlanes,R=x.clipIntersection,y=x.clipShadows,v=r.get(x);if(!l||E===null||E.length===0||u&&!y)u?g(null):p();else{const z=u?0:s,L=z*4;let w=v.clippingState||null;m.value=w,w=g(E,_,L,M);for(let F=0;F!==L;++F)w[F]=i[F];v.clippingState=w,this.numIntersection=R?this.numPlanes:0,this.numPlanes+=z}};function p(){m.value!==i&&(m.value=i,m.needsUpdate=s>0),t.numPlanes=s,t.numIntersection=0}function g(x,_,M,E){const R=x!==null?x.length:0;let y=null;if(R!==0){if(y=m.value,E!==!0||y===null){const v=M+R*4,z=_.matrixWorldInverse;d.getNormalMatrix(z),(y===null||y.length<v)&&(y=new Float32Array(v));for(let L=0,w=M;L!==R;++L,w+=4)h.copy(x[L]).applyMatrix4(z,d),h.normal.toArray(y,w),y[w+3]=h.constant}m.value=y,m.needsUpdate=!0}return t.numPlanes=R,t.numIntersection=0,y}}function bT(r){let t=new WeakMap;function i(h,d){return d===zh?h.mapping=br:d===Ih&&(h.mapping=Ar),h}function s(h){if(h&&h.isTexture){const d=h.mapping;if(d===zh||d===Ih)if(t.has(h)){const m=t.get(h).texture;return i(m,h.mapping)}else{const m=h.image;if(m&&m.height>0){const p=new Ty(m.height);return p.fromEquirectangularTexture(r,h),t.set(h,p),h.addEventListener("dispose",l),i(p.texture,h.mapping)}else return null}}return h}function l(h){const d=h.target;d.removeEventListener("dispose",l);const m=t.get(d);m!==void 0&&(t.delete(d),m.dispose())}function u(){t=new WeakMap}return{get:s,dispose:u}}const xr=4,F_=[.125,.215,.35,.446,.526,.582],Ss=20,Sh=new Oy,H_=new Ue;let yh=null,Mh=0,Eh=0,Th=!1;const vs=(1+Math.sqrt(5))/2,_r=1/vs,G_=[new $(-vs,_r,0),new $(vs,_r,0),new $(-_r,0,vs),new $(_r,0,vs),new $(0,vs,-_r),new $(0,vs,_r),new $(-1,1,-1),new $(1,1,-1),new $(-1,1,1),new $(1,1,1)],AT=new $;class V_{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,i=0,s=.1,l=100,u={}){const{size:h=256,position:d=AT}=u;yh=this._renderer.getRenderTarget(),Mh=this._renderer.getActiveCubeFace(),Eh=this._renderer.getActiveMipmapLevel(),Th=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(h);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(t,s,l,m,d),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(t,i=null){return this._fromTexture(t,i)}fromCubemap(t,i=null){return this._fromTexture(t,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=W_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=X_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(yh,Mh,Eh),this._renderer.xr.enabled=Th,t.scissorTest=!1,Sc(t,0,0,t.width,t.height)}_fromTexture(t,i){t.mapping===br||t.mapping===Ar?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),yh=this._renderer.getRenderTarget(),Mh=this._renderer.getActiveCubeFace(),Eh=this._renderer.getActiveMipmapLevel(),Th=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=i||this._allocateTargets();return this._textureToCubeUV(t,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,s={magFilter:Ci,minFilter:Ci,generateMipmaps:!1,type:Bo,format:vi,colorSpace:Rr,depthBuffer:!1},l=k_(t,i,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=k_(t,i,s);const{_lodMax:u}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=RT(u)),this._blurMaterial=CT(u,t,i)}return l}_compileMaterial(t){const i=new ia(this._lodPlanes[0],t);this._renderer.compile(i,Sh)}_sceneToCubeUV(t,i,s,l,u){const m=new ui(90,1,i,s),p=[1,-1,1,1,1,1],g=[1,1,1,-1,-1,-1],x=this._renderer,_=x.autoClear,M=x.toneMapping;x.getClearColor(H_),x.toneMapping=Xa,x.autoClear=!1;const E=new C0({name:"PMREM.Background",side:kn,depthWrite:!1,depthTest:!1}),R=new ia(new Vo,E);let y=!1;const v=t.background;v?v.isColor&&(E.color.copy(v),t.background=null,y=!0):(E.color.copy(H_),y=!0);for(let z=0;z<6;z++){const L=z%3;L===0?(m.up.set(0,p[z],0),m.position.set(u.x,u.y,u.z),m.lookAt(u.x+g[z],u.y,u.z)):L===1?(m.up.set(0,0,p[z]),m.position.set(u.x,u.y,u.z),m.lookAt(u.x,u.y+g[z],u.z)):(m.up.set(0,p[z],0),m.position.set(u.x,u.y,u.z),m.lookAt(u.x,u.y,u.z+g[z]));const w=this._cubeSize;Sc(l,L*w,z>2?w:0,w,w),x.setRenderTarget(l),y&&x.render(R,m),x.render(t,m)}R.geometry.dispose(),R.material.dispose(),x.toneMapping=M,x.autoClear=_,t.background=v}_textureToCubeUV(t,i){const s=this._renderer,l=t.mapping===br||t.mapping===Ar;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=W_()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=X_());const u=l?this._cubemapMaterial:this._equirectMaterial,h=new ia(this._lodPlanes[0],u),d=u.uniforms;d.envMap.value=t;const m=this._cubeSize;Sc(i,0,0,3*m,2*m),s.setRenderTarget(i),s.render(h,Sh)}_applyPMREM(t){const i=this._renderer,s=i.autoClear;i.autoClear=!1;const l=this._lodPlanes.length;for(let u=1;u<l;u++){const h=Math.sqrt(this._sigmas[u]*this._sigmas[u]-this._sigmas[u-1]*this._sigmas[u-1]),d=G_[(l-u-1)%G_.length];this._blur(t,u-1,u,h,d)}i.autoClear=s}_blur(t,i,s,l,u){const h=this._pingPongRenderTarget;this._halfBlur(t,h,i,s,l,"latitudinal",u),this._halfBlur(h,t,s,s,l,"longitudinal",u)}_halfBlur(t,i,s,l,u,h,d){const m=this._renderer,p=this._blurMaterial;h!=="latitudinal"&&h!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const g=3,x=new ia(this._lodPlanes[l],p),_=p.uniforms,M=this._sizeLods[s]-1,E=isFinite(u)?Math.PI/(2*M):2*Math.PI/(2*Ss-1),R=u/E,y=isFinite(u)?1+Math.floor(g*R):Ss;y>Ss&&console.warn(`sigmaRadians, ${u}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${Ss}`);const v=[];let z=0;for(let I=0;I<Ss;++I){const q=I/R,D=Math.exp(-q*q/2);v.push(D),I===0?z+=D:I<y&&(z+=2*D)}for(let I=0;I<v.length;I++)v[I]=v[I]/z;_.envMap.value=t.texture,_.samples.value=y,_.weights.value=v,_.latitudinal.value=h==="latitudinal",d&&(_.poleAxis.value=d);const{_lodMax:L}=this;_.dTheta.value=E,_.mipInt.value=L-s;const w=this._sizeLods[l],F=3*w*(l>L-xr?l-L+xr:0),k=4*(this._cubeSize-w);Sc(i,F,k,3*w,2*w),m.setRenderTarget(i),m.render(x,Sh)}}function RT(r){const t=[],i=[],s=[];let l=r;const u=r-xr+1+F_.length;for(let h=0;h<u;h++){const d=Math.pow(2,l);i.push(d);let m=1/d;h>r-xr?m=F_[h-r+xr-1]:h===0&&(m=0),s.push(m);const p=1/(d-2),g=-p,x=1+p,_=[g,g,x,g,x,x,g,g,x,x,g,x],M=6,E=6,R=3,y=2,v=1,z=new Float32Array(R*E*M),L=new Float32Array(y*E*M),w=new Float32Array(v*E*M);for(let k=0;k<M;k++){const I=k%3*2/3-1,q=k>2?0:-1,D=[I,q,0,I+2/3,q,0,I+2/3,q+1,0,I,q,0,I+2/3,q+1,0,I,q+1,0];z.set(D,R*E*k),L.set(_,y*E*k);const C=[k,k,k,k,k,k];w.set(C,v*E*k)}const F=new la;F.setAttribute("position",new Si(z,R)),F.setAttribute("uv",new Si(L,y)),F.setAttribute("faceIndex",new Si(w,v)),t.push(F),l>xr&&l--}return{lodPlanes:t,sizeLods:i,sigmas:s}}function k_(r,t,i){const s=new bs(r,t,i);return s.texture.mapping=Ic,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function Sc(r,t,i,s,l){r.viewport.set(t,i,s,l),r.scissor.set(t,i,s,l)}function CT(r,t,i){const s=new Float32Array(Ss),l=new $(0,1,0);return new Ya({name:"SphericalGaussianBlur",defines:{n:Ss,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:Td(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:ka,depthTest:!1,depthWrite:!1})}function X_(){return new Ya({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Td(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ka,depthTest:!1,depthWrite:!1})}function W_(){return new Ya({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Td(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ka,depthTest:!1,depthWrite:!1})}function Td(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function wT(r){let t=new WeakMap,i=null;function s(d){if(d&&d.isTexture){const m=d.mapping,p=m===zh||m===Ih,g=m===br||m===Ar;if(p||g){let x=t.get(d);const _=x!==void 0?x.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==_)return i===null&&(i=new V_(r)),x=p?i.fromEquirectangular(d,x):i.fromCubemap(d,x),x.texture.pmremVersion=d.pmremVersion,t.set(d,x),x.texture;if(x!==void 0)return x.texture;{const M=d.image;return p&&M&&M.height>0||g&&M&&l(M)?(i===null&&(i=new V_(r)),x=p?i.fromEquirectangular(d):i.fromCubemap(d),x.texture.pmremVersion=d.pmremVersion,t.set(d,x),d.addEventListener("dispose",u),x.texture):null}}}return d}function l(d){let m=0;const p=6;for(let g=0;g<p;g++)d[g]!==void 0&&m++;return m===p}function u(d){const m=d.target;m.removeEventListener("dispose",u);const p=t.get(m);p!==void 0&&(t.delete(m),p.dispose())}function h(){t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:h}}function DT(r){const t={};function i(s){if(t[s]!==void 0)return t[s];let l;switch(s){case"WEBGL_depth_texture":l=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":l=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":l=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":l=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:l=r.getExtension(s)}return t[s]=l,l}return{has:function(s){return i(s)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(s){const l=i(s);return l===null&&Mr("THREE.WebGLRenderer: "+s+" extension not supported."),l}}}function UT(r,t,i,s){const l={},u=new WeakMap;function h(x){const _=x.target;_.index!==null&&t.remove(_.index);for(const E in _.attributes)t.remove(_.attributes[E]);_.removeEventListener("dispose",h),delete l[_.id];const M=u.get(_);M&&(t.remove(M),u.delete(_)),s.releaseStatesOfGeometry(_),_.isInstancedBufferGeometry===!0&&delete _._maxInstanceCount,i.memory.geometries--}function d(x,_){return l[_.id]===!0||(_.addEventListener("dispose",h),l[_.id]=!0,i.memory.geometries++),_}function m(x){const _=x.attributes;for(const M in _)t.update(_[M],r.ARRAY_BUFFER)}function p(x){const _=[],M=x.index,E=x.attributes.position;let R=0;if(M!==null){const z=M.array;R=M.version;for(let L=0,w=z.length;L<w;L+=3){const F=z[L+0],k=z[L+1],I=z[L+2];_.push(F,k,k,I,I,F)}}else if(E!==void 0){const z=E.array;R=E.version;for(let L=0,w=z.length/3-1;L<w;L+=3){const F=L+0,k=L+1,I=L+2;_.push(F,k,k,I,I,F)}}else return;const y=new(T0(_)?D0:w0)(_,1);y.version=R;const v=u.get(x);v&&t.remove(v),u.set(x,y)}function g(x){const _=u.get(x);if(_){const M=x.index;M!==null&&_.version<M.version&&p(x)}else p(x);return u.get(x)}return{get:d,update:m,getWireframeAttribute:g}}function LT(r,t,i){let s;function l(_){s=_}let u,h;function d(_){u=_.type,h=_.bytesPerElement}function m(_,M){r.drawElements(s,M,u,_*h),i.update(M,s,1)}function p(_,M,E){E!==0&&(r.drawElementsInstanced(s,M,u,_*h,E),i.update(M,s,E))}function g(_,M,E){if(E===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,M,0,u,_,0,E);let y=0;for(let v=0;v<E;v++)y+=M[v];i.update(y,s,1)}function x(_,M,E,R){if(E===0)return;const y=t.get("WEBGL_multi_draw");if(y===null)for(let v=0;v<_.length;v++)p(_[v]/h,M[v],R[v]);else{y.multiDrawElementsInstancedWEBGL(s,M,0,u,_,0,R,0,E);let v=0;for(let z=0;z<E;z++)v+=M[z]*R[z];i.update(v,s,1)}}this.setMode=l,this.setIndex=d,this.render=m,this.renderInstances=p,this.renderMultiDraw=g,this.renderMultiDrawInstances=x}function NT(r){const t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function s(u,h,d){switch(i.calls++,h){case r.TRIANGLES:i.triangles+=d*(u/3);break;case r.LINES:i.lines+=d*(u/2);break;case r.LINE_STRIP:i.lines+=d*(u-1);break;case r.LINE_LOOP:i.lines+=d*u;break;case r.POINTS:i.points+=d*u;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",h);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:l,update:s}}function OT(r,t,i){const s=new WeakMap,l=new $e;function u(h,d,m){const p=h.morphTargetInfluences,g=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,x=g!==void 0?g.length:0;let _=s.get(d);if(_===void 0||_.count!==x){let C=function(){q.dispose(),s.delete(d),d.removeEventListener("dispose",C)};var M=C;_!==void 0&&_.texture.dispose();const E=d.morphAttributes.position!==void 0,R=d.morphAttributes.normal!==void 0,y=d.morphAttributes.color!==void 0,v=d.morphAttributes.position||[],z=d.morphAttributes.normal||[],L=d.morphAttributes.color||[];let w=0;E===!0&&(w=1),R===!0&&(w=2),y===!0&&(w=3);let F=d.attributes.position.count*w,k=1;F>t.maxTextureSize&&(k=Math.ceil(F/t.maxTextureSize),F=t.maxTextureSize);const I=new Float32Array(F*k*4*x),q=new b0(I,F,k,x);q.type=ea,q.needsUpdate=!0;const D=w*4;for(let G=0;G<x;G++){const lt=v[G],rt=z[G],vt=L[G],ft=F*k*4*G;for(let N=0;N<lt.count;N++){const Y=N*D;E===!0&&(l.fromBufferAttribute(lt,N),I[ft+Y+0]=l.x,I[ft+Y+1]=l.y,I[ft+Y+2]=l.z,I[ft+Y+3]=0),R===!0&&(l.fromBufferAttribute(rt,N),I[ft+Y+4]=l.x,I[ft+Y+5]=l.y,I[ft+Y+6]=l.z,I[ft+Y+7]=0),y===!0&&(l.fromBufferAttribute(vt,N),I[ft+Y+8]=l.x,I[ft+Y+9]=l.y,I[ft+Y+10]=l.z,I[ft+Y+11]=vt.itemSize===4?l.w:1)}}_={count:x,texture:q,size:new he(F,k)},s.set(d,_),d.addEventListener("dispose",C)}if(h.isInstancedMesh===!0&&h.morphTexture!==null)m.getUniforms().setValue(r,"morphTexture",h.morphTexture,i);else{let E=0;for(let y=0;y<p.length;y++)E+=p[y];const R=d.morphTargetsRelative?1:1-E;m.getUniforms().setValue(r,"morphTargetBaseInfluence",R),m.getUniforms().setValue(r,"morphTargetInfluences",p)}m.getUniforms().setValue(r,"morphTargetsTexture",_.texture,i),m.getUniforms().setValue(r,"morphTargetsTextureSize",_.size)}return{update:u}}function PT(r,t,i,s){let l=new WeakMap;function u(m){const p=s.render.frame,g=m.geometry,x=t.get(m,g);if(l.get(x)!==p&&(t.update(x),l.set(x,p)),m.isInstancedMesh&&(m.hasEventListener("dispose",d)===!1&&m.addEventListener("dispose",d),l.get(m)!==p&&(i.update(m.instanceMatrix,r.ARRAY_BUFFER),m.instanceColor!==null&&i.update(m.instanceColor,r.ARRAY_BUFFER),l.set(m,p))),m.isSkinnedMesh){const _=m.skeleton;l.get(_)!==p&&(_.update(),l.set(_,p))}return x}function h(){l=new WeakMap}function d(m){const p=m.target;p.removeEventListener("dispose",d),i.remove(p.instanceMatrix),p.instanceColor!==null&&i.remove(p.instanceColor)}return{update:u,dispose:h}}const B0=new Xn,Y_=new z0(1,1),F0=new b0,H0=new oy,G0=new N0,q_=[],j_=[],Z_=new Float32Array(16),K_=new Float32Array(9),Q_=new Float32Array(4);function wr(r,t,i){const s=r[0];if(s<=0||s>0)return r;const l=t*i;let u=q_[l];if(u===void 0&&(u=new Float32Array(l),q_[l]=u),t!==0){s.toArray(u,0);for(let h=1,d=0;h!==t;++h)d+=i,r[h].toArray(u,d)}return u}function hn(r,t){if(r.length!==t.length)return!1;for(let i=0,s=r.length;i<s;i++)if(r[i]!==t[i])return!1;return!0}function dn(r,t){for(let i=0,s=t.length;i<s;i++)r[i]=t[i]}function Hc(r,t){let i=j_[t];i===void 0&&(i=new Int32Array(t),j_[t]=i);for(let s=0;s!==t;++s)i[s]=r.allocateTextureUnit();return i}function zT(r,t){const i=this.cache;i[0]!==t&&(r.uniform1f(this.addr,t),i[0]=t)}function IT(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(hn(i,t))return;r.uniform2fv(this.addr,t),dn(i,t)}}function BT(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else if(t.r!==void 0)(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b);else{if(hn(i,t))return;r.uniform3fv(this.addr,t),dn(i,t)}}function FT(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(hn(i,t))return;r.uniform4fv(this.addr,t),dn(i,t)}}function HT(r,t){const i=this.cache,s=t.elements;if(s===void 0){if(hn(i,t))return;r.uniformMatrix2fv(this.addr,!1,t),dn(i,t)}else{if(hn(i,s))return;Q_.set(s),r.uniformMatrix2fv(this.addr,!1,Q_),dn(i,s)}}function GT(r,t){const i=this.cache,s=t.elements;if(s===void 0){if(hn(i,t))return;r.uniformMatrix3fv(this.addr,!1,t),dn(i,t)}else{if(hn(i,s))return;K_.set(s),r.uniformMatrix3fv(this.addr,!1,K_),dn(i,s)}}function VT(r,t){const i=this.cache,s=t.elements;if(s===void 0){if(hn(i,t))return;r.uniformMatrix4fv(this.addr,!1,t),dn(i,t)}else{if(hn(i,s))return;Z_.set(s),r.uniformMatrix4fv(this.addr,!1,Z_),dn(i,s)}}function kT(r,t){const i=this.cache;i[0]!==t&&(r.uniform1i(this.addr,t),i[0]=t)}function XT(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(hn(i,t))return;r.uniform2iv(this.addr,t),dn(i,t)}}function WT(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(hn(i,t))return;r.uniform3iv(this.addr,t),dn(i,t)}}function YT(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(hn(i,t))return;r.uniform4iv(this.addr,t),dn(i,t)}}function qT(r,t){const i=this.cache;i[0]!==t&&(r.uniform1ui(this.addr,t),i[0]=t)}function jT(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(hn(i,t))return;r.uniform2uiv(this.addr,t),dn(i,t)}}function ZT(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(hn(i,t))return;r.uniform3uiv(this.addr,t),dn(i,t)}}function KT(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(hn(i,t))return;r.uniform4uiv(this.addr,t),dn(i,t)}}function QT(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l);let u;this.type===r.SAMPLER_2D_SHADOW?(Y_.compareFunction=E0,u=Y_):u=B0,i.setTexture2D(t||u,l)}function JT(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTexture3D(t||H0,l)}function $T(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTextureCube(t||G0,l)}function tb(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTexture2DArray(t||F0,l)}function eb(r){switch(r){case 5126:return zT;case 35664:return IT;case 35665:return BT;case 35666:return FT;case 35674:return HT;case 35675:return GT;case 35676:return VT;case 5124:case 35670:return kT;case 35667:case 35671:return XT;case 35668:case 35672:return WT;case 35669:case 35673:return YT;case 5125:return qT;case 36294:return jT;case 36295:return ZT;case 36296:return KT;case 35678:case 36198:case 36298:case 36306:case 35682:return QT;case 35679:case 36299:case 36307:return JT;case 35680:case 36300:case 36308:case 36293:return $T;case 36289:case 36303:case 36311:case 36292:return tb}}function nb(r,t){r.uniform1fv(this.addr,t)}function ib(r,t){const i=wr(t,this.size,2);r.uniform2fv(this.addr,i)}function ab(r,t){const i=wr(t,this.size,3);r.uniform3fv(this.addr,i)}function sb(r,t){const i=wr(t,this.size,4);r.uniform4fv(this.addr,i)}function rb(r,t){const i=wr(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,i)}function ob(r,t){const i=wr(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,i)}function lb(r,t){const i=wr(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,i)}function cb(r,t){r.uniform1iv(this.addr,t)}function ub(r,t){r.uniform2iv(this.addr,t)}function fb(r,t){r.uniform3iv(this.addr,t)}function hb(r,t){r.uniform4iv(this.addr,t)}function db(r,t){r.uniform1uiv(this.addr,t)}function pb(r,t){r.uniform2uiv(this.addr,t)}function mb(r,t){r.uniform3uiv(this.addr,t)}function gb(r,t){r.uniform4uiv(this.addr,t)}function _b(r,t,i){const s=this.cache,l=t.length,u=Hc(i,l);hn(s,u)||(r.uniform1iv(this.addr,u),dn(s,u));for(let h=0;h!==l;++h)i.setTexture2D(t[h]||B0,u[h])}function vb(r,t,i){const s=this.cache,l=t.length,u=Hc(i,l);hn(s,u)||(r.uniform1iv(this.addr,u),dn(s,u));for(let h=0;h!==l;++h)i.setTexture3D(t[h]||H0,u[h])}function xb(r,t,i){const s=this.cache,l=t.length,u=Hc(i,l);hn(s,u)||(r.uniform1iv(this.addr,u),dn(s,u));for(let h=0;h!==l;++h)i.setTextureCube(t[h]||G0,u[h])}function Sb(r,t,i){const s=this.cache,l=t.length,u=Hc(i,l);hn(s,u)||(r.uniform1iv(this.addr,u),dn(s,u));for(let h=0;h!==l;++h)i.setTexture2DArray(t[h]||F0,u[h])}function yb(r){switch(r){case 5126:return nb;case 35664:return ib;case 35665:return ab;case 35666:return sb;case 35674:return rb;case 35675:return ob;case 35676:return lb;case 5124:case 35670:return cb;case 35667:case 35671:return ub;case 35668:case 35672:return fb;case 35669:case 35673:return hb;case 5125:return db;case 36294:return pb;case 36295:return mb;case 36296:return gb;case 35678:case 36198:case 36298:case 36306:case 35682:return _b;case 35679:case 36299:case 36307:return vb;case 35680:case 36300:case 36308:case 36293:return xb;case 36289:case 36303:case 36311:case 36292:return Sb}}class Mb{constructor(t,i,s){this.id=t,this.addr=s,this.cache=[],this.type=i.type,this.setValue=eb(i.type)}}class Eb{constructor(t,i,s){this.id=t,this.addr=s,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=yb(i.type)}}class Tb{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,i,s){const l=this.seq;for(let u=0,h=l.length;u!==h;++u){const d=l[u];d.setValue(t,i[d.id],s)}}}const bh=/(\w+)(\])?(\[|\.)?/g;function J_(r,t){r.seq.push(t),r.map[t.id]=t}function bb(r,t,i){const s=r.name,l=s.length;for(bh.lastIndex=0;;){const u=bh.exec(s),h=bh.lastIndex;let d=u[1];const m=u[2]==="]",p=u[3];if(m&&(d=d|0),p===void 0||p==="["&&h+2===l){J_(i,p===void 0?new Mb(d,r,t):new Eb(d,r,t));break}else{let x=i.map[d];x===void 0&&(x=new Tb(d),J_(i,x)),i=x}}}class Uc{constructor(t,i){this.seq=[],this.map={};const s=t.getProgramParameter(i,t.ACTIVE_UNIFORMS);for(let l=0;l<s;++l){const u=t.getActiveUniform(i,l),h=t.getUniformLocation(i,u.name);bb(u,h,this)}}setValue(t,i,s,l){const u=this.map[i];u!==void 0&&u.setValue(t,s,l)}setOptional(t,i,s){const l=i[s];l!==void 0&&this.setValue(t,s,l)}static upload(t,i,s,l){for(let u=0,h=i.length;u!==h;++u){const d=i[u],m=s[d.id];m.needsUpdate!==!1&&d.setValue(t,m.value,l)}}static seqWithValue(t,i){const s=[];for(let l=0,u=t.length;l!==u;++l){const h=t[l];h.id in i&&s.push(h)}return s}}function $_(r,t,i){const s=r.createShader(t);return r.shaderSource(s,i),r.compileShader(s),s}const Ab=37297;let Rb=0;function Cb(r,t){const i=r.split(`
`),s=[],l=Math.max(t-6,0),u=Math.min(t+6,i.length);for(let h=l;h<u;h++){const d=h+1;s.push(`${d===t?">":" "} ${d}: ${i[h]}`)}return s.join(`
`)}const t0=new oe;function wb(r){Ce._getMatrix(t0,Ce.workingColorSpace,r);const t=`mat3( ${t0.elements.map(i=>i.toFixed(4))} )`;switch(Ce.getTransfer(r)){case Lc:return[t,"LinearTransferOETF"];case Be:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",r),[t,"LinearTransferOETF"]}}function e0(r,t,i){const s=r.getShaderParameter(t,r.COMPILE_STATUS),l=r.getShaderInfoLog(t).trim();if(s&&l==="")return"";const u=/ERROR: 0:(\d+)/.exec(l);if(u){const h=parseInt(u[1]);return i.toUpperCase()+`

`+l+`

`+Cb(r.getShaderSource(t),h)}else return l}function Db(r,t){const i=wb(t);return[`vec4 ${r}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}function Ub(r,t){let i;switch(t){case US:i="Linear";break;case LS:i="Reinhard";break;case NS:i="Cineon";break;case OS:i="ACESFilmic";break;case zS:i="AgX";break;case IS:i="Neutral";break;case PS:i="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),i="Linear"}return"vec3 "+r+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const yc=new $;function Lb(){Ce.getLuminanceCoefficients(yc);const r=yc.x.toFixed(4),t=yc.y.toFixed(4),i=yc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${t}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Nb(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Lo).join(`
`)}function Ob(r){const t=[];for(const i in r){const s=r[i];s!==!1&&t.push("#define "+i+" "+s)}return t.join(`
`)}function Pb(r,t){const i={},s=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES);for(let l=0;l<s;l++){const u=r.getActiveAttrib(t,l),h=u.name;let d=1;u.type===r.FLOAT_MAT2&&(d=2),u.type===r.FLOAT_MAT3&&(d=3),u.type===r.FLOAT_MAT4&&(d=4),i[h]={type:u.type,location:r.getAttribLocation(t,h),locationSize:d}}return i}function Lo(r){return r!==""}function n0(r,t){const i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function i0(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const zb=/^[ \t]*#include +<([\w\d./]+)>/gm;function dd(r){return r.replace(zb,Bb)}const Ib=new Map;function Bb(r,t){let i=le[t];if(i===void 0){const s=Ib.get(t);if(s!==void 0)i=le[s],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,s);else throw new Error("Can not resolve #include <"+t+">")}return dd(i)}const Fb=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function a0(r){return r.replace(Fb,Hb)}function Hb(r,t,i,s){let l="";for(let u=parseInt(t);u<parseInt(i);u++)l+=s.replace(/\[\s*i\s*\]/g,"[ "+u+" ]").replace(/UNROLLED_LOOP_INDEX/g,u);return l}function s0(r){let t=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?t+=`
#define HIGH_PRECISION`:r.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Gb(r){let t="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===h0?t="SHADOWMAP_TYPE_PCF":r.shadowMapType===uS?t="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===$i&&(t="SHADOWMAP_TYPE_VSM"),t}function Vb(r){let t="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case br:case Ar:t="ENVMAP_TYPE_CUBE";break;case Ic:t="ENVMAP_TYPE_CUBE_UV";break}return t}function kb(r){let t="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case Ar:t="ENVMAP_MODE_REFRACTION";break}return t}function Xb(r){let t="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case d0:t="ENVMAP_BLENDING_MULTIPLY";break;case wS:t="ENVMAP_BLENDING_MIX";break;case DS:t="ENVMAP_BLENDING_ADD";break}return t}function Wb(r){const t=r.envMapCubeUVHeight;if(t===null)return null;const i=Math.log2(t)-2,s=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,i),7*16)),texelHeight:s,maxMip:i}}function Yb(r,t,i,s){const l=r.getContext(),u=i.defines;let h=i.vertexShader,d=i.fragmentShader;const m=Gb(i),p=Vb(i),g=kb(i),x=Xb(i),_=Wb(i),M=Nb(i),E=Ob(u),R=l.createProgram();let y,v,z=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(y=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter(Lo).join(`
`),y.length>0&&(y+=`
`),v=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter(Lo).join(`
`),v.length>0&&(v+=`
`)):(y=[s0(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+g:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Lo).join(`
`),v=[s0(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+g:"",i.envMap?"#define "+x:"",_?"#define CUBEUV_TEXEL_WIDTH "+_.texelWidth:"",_?"#define CUBEUV_TEXEL_HEIGHT "+_.texelHeight:"",_?"#define CUBEUV_MAX_MIP "+_.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Xa?"#define TONE_MAPPING":"",i.toneMapping!==Xa?le.tonemapping_pars_fragment:"",i.toneMapping!==Xa?Ub("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",le.colorspace_pars_fragment,Db("linearToOutputTexel",i.outputColorSpace),Lb(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Lo).join(`
`)),h=dd(h),h=n0(h,i),h=i0(h,i),d=dd(d),d=n0(d,i),d=i0(d,i),h=a0(h),d=a0(d),i.isRawShaderMaterial!==!0&&(z=`#version 300 es
`,y=[M,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,v=["#define varying in",i.glslVersion===m_?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===m_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const L=z+y+h,w=z+v+d,F=$_(l,l.VERTEX_SHADER,L),k=$_(l,l.FRAGMENT_SHADER,w);l.attachShader(R,F),l.attachShader(R,k),i.index0AttributeName!==void 0?l.bindAttribLocation(R,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(R,0,"position"),l.linkProgram(R);function I(G){if(r.debug.checkShaderErrors){const lt=l.getProgramInfoLog(R).trim(),rt=l.getShaderInfoLog(F).trim(),vt=l.getShaderInfoLog(k).trim();let ft=!0,N=!0;if(l.getProgramParameter(R,l.LINK_STATUS)===!1)if(ft=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(l,R,F,k);else{const Y=e0(l,F,"vertex"),X=e0(l,k,"fragment");console.error("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(R,l.VALIDATE_STATUS)+`

Material Name: `+G.name+`
Material Type: `+G.type+`

Program Info Log: `+lt+`
`+Y+`
`+X)}else lt!==""?console.warn("THREE.WebGLProgram: Program Info Log:",lt):(rt===""||vt==="")&&(N=!1);N&&(G.diagnostics={runnable:ft,programLog:lt,vertexShader:{log:rt,prefix:y},fragmentShader:{log:vt,prefix:v}})}l.deleteShader(F),l.deleteShader(k),q=new Uc(l,R),D=Pb(l,R)}let q;this.getUniforms=function(){return q===void 0&&I(this),q};let D;this.getAttributes=function(){return D===void 0&&I(this),D};let C=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=l.getProgramParameter(R,Ab)),C},this.destroy=function(){s.releaseStatesOfProgram(this),l.deleteProgram(R),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=Rb++,this.cacheKey=t,this.usedTimes=1,this.program=R,this.vertexShader=F,this.fragmentShader=k,this}let qb=0;class jb{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const i=t.vertexShader,s=t.fragmentShader,l=this._getShaderStage(i),u=this._getShaderStage(s),h=this._getShaderCacheForMaterial(t);return h.has(l)===!1&&(h.add(l),l.usedTimes++),h.has(u)===!1&&(h.add(u),u.usedTimes++),this}remove(t){const i=this.materialCache.get(t);for(const s of i)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const i=this.materialCache;let s=i.get(t);return s===void 0&&(s=new Set,i.set(t,s)),s}_getShaderStage(t){const i=this.shaderCache;let s=i.get(t);return s===void 0&&(s=new Zb(t),i.set(t,s)),s}}class Zb{constructor(t){this.id=qb++,this.code=t,this.usedTimes=0}}function Kb(r,t,i,s,l,u,h){const d=new A0,m=new jb,p=new Set,g=[],x=l.logarithmicDepthBuffer,_=l.vertexTextures;let M=l.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function R(D){return p.add(D),D===0?"uv":`uv${D}`}function y(D,C,G,lt,rt){const vt=lt.fog,ft=rt.geometry,N=D.isMeshStandardMaterial?lt.environment:null,Y=(D.isMeshStandardMaterial?i:t).get(D.envMap||N),X=Y&&Y.mapping===Ic?Y.image.height:null,pt=E[D.type];D.precision!==null&&(M=l.getMaxPrecision(D.precision),M!==D.precision&&console.warn("THREE.WebGLProgram.getParameters:",D.precision,"not supported, using",M,"instead."));const U=ft.morphAttributes.position||ft.morphAttributes.normal||ft.morphAttributes.color,J=U!==void 0?U.length:0;let gt=0;ft.morphAttributes.position!==void 0&&(gt=1),ft.morphAttributes.normal!==void 0&&(gt=2),ft.morphAttributes.color!==void 0&&(gt=3);let St,W,ot,yt;if(pt){const Ae=Ri[pt];St=Ae.vertexShader,W=Ae.fragmentShader}else St=D.vertexShader,W=D.fragmentShader,m.update(D),ot=m.getVertexShaderID(D),yt=m.getFragmentShaderID(D);const At=r.getRenderTarget(),Rt=r.state.buffers.depth.getReversed(),qt=rt.isInstancedMesh===!0,Vt=rt.isBatchedMesh===!0,ye=!!D.map,Ee=!!D.matcap,_e=!!Y,B=!!D.aoMap,Sn=!!D.lightMap,Te=!!D.bumpMap,de=!!D.normalMap,kt=!!D.displacementMap,ve=!!D.emissiveMap,Kt=!!D.metalnessMap,se=!!D.roughnessMap,Ke=D.anisotropy>0,O=D.clearcoat>0,T=D.dispersion>0,et=D.iridescence>0,ht=D.sheen>0,mt=D.transmission>0,ct=Ke&&!!D.anisotropyMap,Ot=O&&!!D.clearcoatMap,Dt=O&&!!D.clearcoatNormalMap,Gt=O&&!!D.clearcoatRoughnessMap,Xt=et&&!!D.iridescenceMap,Mt=et&&!!D.iridescenceThicknessMap,Pt=ht&&!!D.sheenColorMap,jt=ht&&!!D.sheenRoughnessMap,Zt=!!D.specularMap,Ct=!!D.specularColorMap,ae=!!D.specularIntensityMap,V=mt&&!!D.transmissionMap,Ut=mt&&!!D.thicknessMap,Et=!!D.gradientMap,zt=!!D.alphaMap,bt=D.alphaTest>0,xt=!!D.alphaHash,Bt=!!D.extensions;let ie=Xa;D.toneMapped&&(At===null||At.isXRRenderTarget===!0)&&(ie=r.toneMapping);const Le={shaderID:pt,shaderType:D.type,shaderName:D.name,vertexShader:St,fragmentShader:W,defines:D.defines,customVertexShaderID:ot,customFragmentShaderID:yt,isRawShaderMaterial:D.isRawShaderMaterial===!0,glslVersion:D.glslVersion,precision:M,batching:Vt,batchingColor:Vt&&rt._colorsTexture!==null,instancing:qt,instancingColor:qt&&rt.instanceColor!==null,instancingMorph:qt&&rt.morphTexture!==null,supportsVertexTextures:_,outputColorSpace:At===null?r.outputColorSpace:At.isXRRenderTarget===!0?At.texture.colorSpace:Rr,alphaToCoverage:!!D.alphaToCoverage,map:ye,matcap:Ee,envMap:_e,envMapMode:_e&&Y.mapping,envMapCubeUVHeight:X,aoMap:B,lightMap:Sn,bumpMap:Te,normalMap:de,displacementMap:_&&kt,emissiveMap:ve,normalMapObjectSpace:de&&D.normalMapType===VS,normalMapTangentSpace:de&&D.normalMapType===GS,metalnessMap:Kt,roughnessMap:se,anisotropy:Ke,anisotropyMap:ct,clearcoat:O,clearcoatMap:Ot,clearcoatNormalMap:Dt,clearcoatRoughnessMap:Gt,dispersion:T,iridescence:et,iridescenceMap:Xt,iridescenceThicknessMap:Mt,sheen:ht,sheenColorMap:Pt,sheenRoughnessMap:jt,specularMap:Zt,specularColorMap:Ct,specularIntensityMap:ae,transmission:mt,transmissionMap:V,thicknessMap:Ut,gradientMap:Et,opaque:D.transparent===!1&&D.blending===yr&&D.alphaToCoverage===!1,alphaMap:zt,alphaTest:bt,alphaHash:xt,combine:D.combine,mapUv:ye&&R(D.map.channel),aoMapUv:B&&R(D.aoMap.channel),lightMapUv:Sn&&R(D.lightMap.channel),bumpMapUv:Te&&R(D.bumpMap.channel),normalMapUv:de&&R(D.normalMap.channel),displacementMapUv:kt&&R(D.displacementMap.channel),emissiveMapUv:ve&&R(D.emissiveMap.channel),metalnessMapUv:Kt&&R(D.metalnessMap.channel),roughnessMapUv:se&&R(D.roughnessMap.channel),anisotropyMapUv:ct&&R(D.anisotropyMap.channel),clearcoatMapUv:Ot&&R(D.clearcoatMap.channel),clearcoatNormalMapUv:Dt&&R(D.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Gt&&R(D.clearcoatRoughnessMap.channel),iridescenceMapUv:Xt&&R(D.iridescenceMap.channel),iridescenceThicknessMapUv:Mt&&R(D.iridescenceThicknessMap.channel),sheenColorMapUv:Pt&&R(D.sheenColorMap.channel),sheenRoughnessMapUv:jt&&R(D.sheenRoughnessMap.channel),specularMapUv:Zt&&R(D.specularMap.channel),specularColorMapUv:Ct&&R(D.specularColorMap.channel),specularIntensityMapUv:ae&&R(D.specularIntensityMap.channel),transmissionMapUv:V&&R(D.transmissionMap.channel),thicknessMapUv:Ut&&R(D.thicknessMap.channel),alphaMapUv:zt&&R(D.alphaMap.channel),vertexTangents:!!ft.attributes.tangent&&(de||Ke),vertexColors:D.vertexColors,vertexAlphas:D.vertexColors===!0&&!!ft.attributes.color&&ft.attributes.color.itemSize===4,pointsUvs:rt.isPoints===!0&&!!ft.attributes.uv&&(ye||zt),fog:!!vt,useFog:D.fog===!0,fogExp2:!!vt&&vt.isFogExp2,flatShading:D.flatShading===!0,sizeAttenuation:D.sizeAttenuation===!0,logarithmicDepthBuffer:x,reverseDepthBuffer:Rt,skinning:rt.isSkinnedMesh===!0,morphTargets:ft.morphAttributes.position!==void 0,morphNormals:ft.morphAttributes.normal!==void 0,morphColors:ft.morphAttributes.color!==void 0,morphTargetsCount:J,morphTextureStride:gt,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numClippingPlanes:h.numPlanes,numClipIntersection:h.numIntersection,dithering:D.dithering,shadowMapEnabled:r.shadowMap.enabled&&G.length>0,shadowMapType:r.shadowMap.type,toneMapping:ie,decodeVideoTexture:ye&&D.map.isVideoTexture===!0&&Ce.getTransfer(D.map.colorSpace)===Be,decodeVideoTextureEmissive:ve&&D.emissiveMap.isVideoTexture===!0&&Ce.getTransfer(D.emissiveMap.colorSpace)===Be,premultipliedAlpha:D.premultipliedAlpha,doubleSided:D.side===ta,flipSided:D.side===kn,useDepthPacking:D.depthPacking>=0,depthPacking:D.depthPacking||0,index0AttributeName:D.index0AttributeName,extensionClipCullDistance:Bt&&D.extensions.clipCullDistance===!0&&s.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Bt&&D.extensions.multiDraw===!0||Vt)&&s.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:s.has("KHR_parallel_shader_compile"),customProgramCacheKey:D.customProgramCacheKey()};return Le.vertexUv1s=p.has(1),Le.vertexUv2s=p.has(2),Le.vertexUv3s=p.has(3),p.clear(),Le}function v(D){const C=[];if(D.shaderID?C.push(D.shaderID):(C.push(D.customVertexShaderID),C.push(D.customFragmentShaderID)),D.defines!==void 0)for(const G in D.defines)C.push(G),C.push(D.defines[G]);return D.isRawShaderMaterial===!1&&(z(C,D),L(C,D),C.push(r.outputColorSpace)),C.push(D.customProgramCacheKey),C.join()}function z(D,C){D.push(C.precision),D.push(C.outputColorSpace),D.push(C.envMapMode),D.push(C.envMapCubeUVHeight),D.push(C.mapUv),D.push(C.alphaMapUv),D.push(C.lightMapUv),D.push(C.aoMapUv),D.push(C.bumpMapUv),D.push(C.normalMapUv),D.push(C.displacementMapUv),D.push(C.emissiveMapUv),D.push(C.metalnessMapUv),D.push(C.roughnessMapUv),D.push(C.anisotropyMapUv),D.push(C.clearcoatMapUv),D.push(C.clearcoatNormalMapUv),D.push(C.clearcoatRoughnessMapUv),D.push(C.iridescenceMapUv),D.push(C.iridescenceThicknessMapUv),D.push(C.sheenColorMapUv),D.push(C.sheenRoughnessMapUv),D.push(C.specularMapUv),D.push(C.specularColorMapUv),D.push(C.specularIntensityMapUv),D.push(C.transmissionMapUv),D.push(C.thicknessMapUv),D.push(C.combine),D.push(C.fogExp2),D.push(C.sizeAttenuation),D.push(C.morphTargetsCount),D.push(C.morphAttributeCount),D.push(C.numDirLights),D.push(C.numPointLights),D.push(C.numSpotLights),D.push(C.numSpotLightMaps),D.push(C.numHemiLights),D.push(C.numRectAreaLights),D.push(C.numDirLightShadows),D.push(C.numPointLightShadows),D.push(C.numSpotLightShadows),D.push(C.numSpotLightShadowsWithMaps),D.push(C.numLightProbes),D.push(C.shadowMapType),D.push(C.toneMapping),D.push(C.numClippingPlanes),D.push(C.numClipIntersection),D.push(C.depthPacking)}function L(D,C){d.disableAll(),C.supportsVertexTextures&&d.enable(0),C.instancing&&d.enable(1),C.instancingColor&&d.enable(2),C.instancingMorph&&d.enable(3),C.matcap&&d.enable(4),C.envMap&&d.enable(5),C.normalMapObjectSpace&&d.enable(6),C.normalMapTangentSpace&&d.enable(7),C.clearcoat&&d.enable(8),C.iridescence&&d.enable(9),C.alphaTest&&d.enable(10),C.vertexColors&&d.enable(11),C.vertexAlphas&&d.enable(12),C.vertexUv1s&&d.enable(13),C.vertexUv2s&&d.enable(14),C.vertexUv3s&&d.enable(15),C.vertexTangents&&d.enable(16),C.anisotropy&&d.enable(17),C.alphaHash&&d.enable(18),C.batching&&d.enable(19),C.dispersion&&d.enable(20),C.batchingColor&&d.enable(21),D.push(d.mask),d.disableAll(),C.fog&&d.enable(0),C.useFog&&d.enable(1),C.flatShading&&d.enable(2),C.logarithmicDepthBuffer&&d.enable(3),C.reverseDepthBuffer&&d.enable(4),C.skinning&&d.enable(5),C.morphTargets&&d.enable(6),C.morphNormals&&d.enable(7),C.morphColors&&d.enable(8),C.premultipliedAlpha&&d.enable(9),C.shadowMapEnabled&&d.enable(10),C.doubleSided&&d.enable(11),C.flipSided&&d.enable(12),C.useDepthPacking&&d.enable(13),C.dithering&&d.enable(14),C.transmission&&d.enable(15),C.sheen&&d.enable(16),C.opaque&&d.enable(17),C.pointsUvs&&d.enable(18),C.decodeVideoTexture&&d.enable(19),C.decodeVideoTextureEmissive&&d.enable(20),C.alphaToCoverage&&d.enable(21),D.push(d.mask)}function w(D){const C=E[D.type];let G;if(C){const lt=Ri[C];G=Sy.clone(lt.uniforms)}else G=D.uniforms;return G}function F(D,C){let G;for(let lt=0,rt=g.length;lt<rt;lt++){const vt=g[lt];if(vt.cacheKey===C){G=vt,++G.usedTimes;break}}return G===void 0&&(G=new Yb(r,C,D,u),g.push(G)),G}function k(D){if(--D.usedTimes===0){const C=g.indexOf(D);g[C]=g[g.length-1],g.pop(),D.destroy()}}function I(D){m.remove(D)}function q(){m.dispose()}return{getParameters:y,getProgramCacheKey:v,getUniforms:w,acquireProgram:F,releaseProgram:k,releaseShaderCache:I,programs:g,dispose:q}}function Qb(){let r=new WeakMap;function t(h){return r.has(h)}function i(h){let d=r.get(h);return d===void 0&&(d={},r.set(h,d)),d}function s(h){r.delete(h)}function l(h,d,m){r.get(h)[d]=m}function u(){r=new WeakMap}return{has:t,get:i,remove:s,update:l,dispose:u}}function Jb(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.z!==t.z?r.z-t.z:r.id-t.id}function r0(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function o0(){const r=[];let t=0;const i=[],s=[],l=[];function u(){t=0,i.length=0,s.length=0,l.length=0}function h(x,_,M,E,R,y){let v=r[t];return v===void 0?(v={id:x.id,object:x,geometry:_,material:M,groupOrder:E,renderOrder:x.renderOrder,z:R,group:y},r[t]=v):(v.id=x.id,v.object=x,v.geometry=_,v.material=M,v.groupOrder=E,v.renderOrder=x.renderOrder,v.z=R,v.group=y),t++,v}function d(x,_,M,E,R,y){const v=h(x,_,M,E,R,y);M.transmission>0?s.push(v):M.transparent===!0?l.push(v):i.push(v)}function m(x,_,M,E,R,y){const v=h(x,_,M,E,R,y);M.transmission>0?s.unshift(v):M.transparent===!0?l.unshift(v):i.unshift(v)}function p(x,_){i.length>1&&i.sort(x||Jb),s.length>1&&s.sort(_||r0),l.length>1&&l.sort(_||r0)}function g(){for(let x=t,_=r.length;x<_;x++){const M=r[x];if(M.id===null)break;M.id=null,M.object=null,M.geometry=null,M.material=null,M.group=null}}return{opaque:i,transmissive:s,transparent:l,init:u,push:d,unshift:m,finish:g,sort:p}}function $b(){let r=new WeakMap;function t(s,l){const u=r.get(s);let h;return u===void 0?(h=new o0,r.set(s,[h])):l>=u.length?(h=new o0,u.push(h)):h=u[l],h}function i(){r=new WeakMap}return{get:t,dispose:i}}function tA(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let i;switch(t.type){case"DirectionalLight":i={direction:new $,color:new Ue};break;case"SpotLight":i={position:new $,direction:new $,color:new Ue,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new $,color:new Ue,distance:0,decay:0};break;case"HemisphereLight":i={direction:new $,skyColor:new Ue,groundColor:new Ue};break;case"RectAreaLight":i={color:new Ue,position:new $,halfWidth:new $,halfHeight:new $};break}return r[t.id]=i,i}}}function eA(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let i;switch(t.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new he};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new he};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new he,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=i,i}}}let nA=0;function iA(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function aA(r){const t=new tA,i=eA(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)s.probe.push(new $);const l=new $,u=new tn,h=new tn;function d(p){let g=0,x=0,_=0;for(let D=0;D<9;D++)s.probe[D].set(0,0,0);let M=0,E=0,R=0,y=0,v=0,z=0,L=0,w=0,F=0,k=0,I=0;p.sort(iA);for(let D=0,C=p.length;D<C;D++){const G=p[D],lt=G.color,rt=G.intensity,vt=G.distance,ft=G.shadow&&G.shadow.map?G.shadow.map.texture:null;if(G.isAmbientLight)g+=lt.r*rt,x+=lt.g*rt,_+=lt.b*rt;else if(G.isLightProbe){for(let N=0;N<9;N++)s.probe[N].addScaledVector(G.sh.coefficients[N],rt);I++}else if(G.isDirectionalLight){const N=t.get(G);if(N.color.copy(G.color).multiplyScalar(G.intensity),G.castShadow){const Y=G.shadow,X=i.get(G);X.shadowIntensity=Y.intensity,X.shadowBias=Y.bias,X.shadowNormalBias=Y.normalBias,X.shadowRadius=Y.radius,X.shadowMapSize=Y.mapSize,s.directionalShadow[M]=X,s.directionalShadowMap[M]=ft,s.directionalShadowMatrix[M]=G.shadow.matrix,z++}s.directional[M]=N,M++}else if(G.isSpotLight){const N=t.get(G);N.position.setFromMatrixPosition(G.matrixWorld),N.color.copy(lt).multiplyScalar(rt),N.distance=vt,N.coneCos=Math.cos(G.angle),N.penumbraCos=Math.cos(G.angle*(1-G.penumbra)),N.decay=G.decay,s.spot[R]=N;const Y=G.shadow;if(G.map&&(s.spotLightMap[F]=G.map,F++,Y.updateMatrices(G),G.castShadow&&k++),s.spotLightMatrix[R]=Y.matrix,G.castShadow){const X=i.get(G);X.shadowIntensity=Y.intensity,X.shadowBias=Y.bias,X.shadowNormalBias=Y.normalBias,X.shadowRadius=Y.radius,X.shadowMapSize=Y.mapSize,s.spotShadow[R]=X,s.spotShadowMap[R]=ft,w++}R++}else if(G.isRectAreaLight){const N=t.get(G);N.color.copy(lt).multiplyScalar(rt),N.halfWidth.set(G.width*.5,0,0),N.halfHeight.set(0,G.height*.5,0),s.rectArea[y]=N,y++}else if(G.isPointLight){const N=t.get(G);if(N.color.copy(G.color).multiplyScalar(G.intensity),N.distance=G.distance,N.decay=G.decay,G.castShadow){const Y=G.shadow,X=i.get(G);X.shadowIntensity=Y.intensity,X.shadowBias=Y.bias,X.shadowNormalBias=Y.normalBias,X.shadowRadius=Y.radius,X.shadowMapSize=Y.mapSize,X.shadowCameraNear=Y.camera.near,X.shadowCameraFar=Y.camera.far,s.pointShadow[E]=X,s.pointShadowMap[E]=ft,s.pointShadowMatrix[E]=G.shadow.matrix,L++}s.point[E]=N,E++}else if(G.isHemisphereLight){const N=t.get(G);N.skyColor.copy(G.color).multiplyScalar(rt),N.groundColor.copy(G.groundColor).multiplyScalar(rt),s.hemi[v]=N,v++}}y>0&&(r.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Lt.LTC_FLOAT_1,s.rectAreaLTC2=Lt.LTC_FLOAT_2):(s.rectAreaLTC1=Lt.LTC_HALF_1,s.rectAreaLTC2=Lt.LTC_HALF_2)),s.ambient[0]=g,s.ambient[1]=x,s.ambient[2]=_;const q=s.hash;(q.directionalLength!==M||q.pointLength!==E||q.spotLength!==R||q.rectAreaLength!==y||q.hemiLength!==v||q.numDirectionalShadows!==z||q.numPointShadows!==L||q.numSpotShadows!==w||q.numSpotMaps!==F||q.numLightProbes!==I)&&(s.directional.length=M,s.spot.length=R,s.rectArea.length=y,s.point.length=E,s.hemi.length=v,s.directionalShadow.length=z,s.directionalShadowMap.length=z,s.pointShadow.length=L,s.pointShadowMap.length=L,s.spotShadow.length=w,s.spotShadowMap.length=w,s.directionalShadowMatrix.length=z,s.pointShadowMatrix.length=L,s.spotLightMatrix.length=w+F-k,s.spotLightMap.length=F,s.numSpotLightShadowsWithMaps=k,s.numLightProbes=I,q.directionalLength=M,q.pointLength=E,q.spotLength=R,q.rectAreaLength=y,q.hemiLength=v,q.numDirectionalShadows=z,q.numPointShadows=L,q.numSpotShadows=w,q.numSpotMaps=F,q.numLightProbes=I,s.version=nA++)}function m(p,g){let x=0,_=0,M=0,E=0,R=0;const y=g.matrixWorldInverse;for(let v=0,z=p.length;v<z;v++){const L=p[v];if(L.isDirectionalLight){const w=s.directional[x];w.direction.setFromMatrixPosition(L.matrixWorld),l.setFromMatrixPosition(L.target.matrixWorld),w.direction.sub(l),w.direction.transformDirection(y),x++}else if(L.isSpotLight){const w=s.spot[M];w.position.setFromMatrixPosition(L.matrixWorld),w.position.applyMatrix4(y),w.direction.setFromMatrixPosition(L.matrixWorld),l.setFromMatrixPosition(L.target.matrixWorld),w.direction.sub(l),w.direction.transformDirection(y),M++}else if(L.isRectAreaLight){const w=s.rectArea[E];w.position.setFromMatrixPosition(L.matrixWorld),w.position.applyMatrix4(y),h.identity(),u.copy(L.matrixWorld),u.premultiply(y),h.extractRotation(u),w.halfWidth.set(L.width*.5,0,0),w.halfHeight.set(0,L.height*.5,0),w.halfWidth.applyMatrix4(h),w.halfHeight.applyMatrix4(h),E++}else if(L.isPointLight){const w=s.point[_];w.position.setFromMatrixPosition(L.matrixWorld),w.position.applyMatrix4(y),_++}else if(L.isHemisphereLight){const w=s.hemi[R];w.direction.setFromMatrixPosition(L.matrixWorld),w.direction.transformDirection(y),R++}}}return{setup:d,setupView:m,state:s}}function l0(r){const t=new aA(r),i=[],s=[];function l(g){p.camera=g,i.length=0,s.length=0}function u(g){i.push(g)}function h(g){s.push(g)}function d(){t.setup(i)}function m(g){t.setupView(i,g)}const p={lightsArray:i,shadowsArray:s,camera:null,lights:t,transmissionRenderTarget:{}};return{init:l,state:p,setupLights:d,setupLightsView:m,pushLight:u,pushShadow:h}}function sA(r){let t=new WeakMap;function i(l,u=0){const h=t.get(l);let d;return h===void 0?(d=new l0(r),t.set(l,[d])):u>=h.length?(d=new l0(r),h.push(d)):d=h[u],d}function s(){t=new WeakMap}return{get:i,dispose:s}}const rA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,oA=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function lA(r,t,i){let s=new O0;const l=new he,u=new he,h=new $e,d=new Uy({depthPacking:HS}),m=new Ly,p={},g=i.maxTextureSize,x={[Wa]:kn,[kn]:Wa,[ta]:ta},_=new Ya({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new he},radius:{value:4}},vertexShader:rA,fragmentShader:oA}),M=_.clone();M.defines.HORIZONTAL_PASS=1;const E=new la;E.setAttribute("position",new Si(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const R=new ia(E,_),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=h0;let v=this.type;this.render=function(k,I,q){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||k.length===0)return;const D=r.getRenderTarget(),C=r.getActiveCubeFace(),G=r.getActiveMipmapLevel(),lt=r.state;lt.setBlending(ka),lt.buffers.color.setClear(1,1,1,1),lt.buffers.depth.setTest(!0),lt.setScissorTest(!1);const rt=v!==$i&&this.type===$i,vt=v===$i&&this.type!==$i;for(let ft=0,N=k.length;ft<N;ft++){const Y=k[ft],X=Y.shadow;if(X===void 0){console.warn("THREE.WebGLShadowMap:",Y,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;l.copy(X.mapSize);const pt=X.getFrameExtents();if(l.multiply(pt),u.copy(X.mapSize),(l.x>g||l.y>g)&&(l.x>g&&(u.x=Math.floor(g/pt.x),l.x=u.x*pt.x,X.mapSize.x=u.x),l.y>g&&(u.y=Math.floor(g/pt.y),l.y=u.y*pt.y,X.mapSize.y=u.y)),X.map===null||rt===!0||vt===!0){const J=this.type!==$i?{minFilter:xi,magFilter:xi}:{};X.map!==null&&X.map.dispose(),X.map=new bs(l.x,l.y,J),X.map.texture.name=Y.name+".shadowMap",X.camera.updateProjectionMatrix()}r.setRenderTarget(X.map),r.clear();const U=X.getViewportCount();for(let J=0;J<U;J++){const gt=X.getViewport(J);h.set(u.x*gt.x,u.y*gt.y,u.x*gt.z,u.y*gt.w),lt.viewport(h),X.updateMatrices(Y,J),s=X.getFrustum(),w(I,q,X.camera,Y,this.type)}X.isPointLightShadow!==!0&&this.type===$i&&z(X,q),X.needsUpdate=!1}v=this.type,y.needsUpdate=!1,r.setRenderTarget(D,C,G)};function z(k,I){const q=t.update(R);_.defines.VSM_SAMPLES!==k.blurSamples&&(_.defines.VSM_SAMPLES=k.blurSamples,M.defines.VSM_SAMPLES=k.blurSamples,_.needsUpdate=!0,M.needsUpdate=!0),k.mapPass===null&&(k.mapPass=new bs(l.x,l.y)),_.uniforms.shadow_pass.value=k.map.texture,_.uniforms.resolution.value=k.mapSize,_.uniforms.radius.value=k.radius,r.setRenderTarget(k.mapPass),r.clear(),r.renderBufferDirect(I,null,q,_,R,null),M.uniforms.shadow_pass.value=k.mapPass.texture,M.uniforms.resolution.value=k.mapSize,M.uniforms.radius.value=k.radius,r.setRenderTarget(k.map),r.clear(),r.renderBufferDirect(I,null,q,M,R,null)}function L(k,I,q,D){let C=null;const G=q.isPointLight===!0?k.customDistanceMaterial:k.customDepthMaterial;if(G!==void 0)C=G;else if(C=q.isPointLight===!0?m:d,r.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0||I.alphaToCoverage===!0){const lt=C.uuid,rt=I.uuid;let vt=p[lt];vt===void 0&&(vt={},p[lt]=vt);let ft=vt[rt];ft===void 0&&(ft=C.clone(),vt[rt]=ft,I.addEventListener("dispose",F)),C=ft}if(C.visible=I.visible,C.wireframe=I.wireframe,D===$i?C.side=I.shadowSide!==null?I.shadowSide:I.side:C.side=I.shadowSide!==null?I.shadowSide:x[I.side],C.alphaMap=I.alphaMap,C.alphaTest=I.alphaToCoverage===!0?.5:I.alphaTest,C.map=I.map,C.clipShadows=I.clipShadows,C.clippingPlanes=I.clippingPlanes,C.clipIntersection=I.clipIntersection,C.displacementMap=I.displacementMap,C.displacementScale=I.displacementScale,C.displacementBias=I.displacementBias,C.wireframeLinewidth=I.wireframeLinewidth,C.linewidth=I.linewidth,q.isPointLight===!0&&C.isMeshDistanceMaterial===!0){const lt=r.properties.get(C);lt.light=q}return C}function w(k,I,q,D,C){if(k.visible===!1)return;if(k.layers.test(I.layers)&&(k.isMesh||k.isLine||k.isPoints)&&(k.castShadow||k.receiveShadow&&C===$i)&&(!k.frustumCulled||s.intersectsObject(k))){k.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,k.matrixWorld);const rt=t.update(k),vt=k.material;if(Array.isArray(vt)){const ft=rt.groups;for(let N=0,Y=ft.length;N<Y;N++){const X=ft[N],pt=vt[X.materialIndex];if(pt&&pt.visible){const U=L(k,pt,D,C);k.onBeforeShadow(r,k,I,q,rt,U,X),r.renderBufferDirect(q,null,rt,U,k,X),k.onAfterShadow(r,k,I,q,rt,U,X)}}}else if(vt.visible){const ft=L(k,vt,D,C);k.onBeforeShadow(r,k,I,q,rt,ft,null),r.renderBufferDirect(q,null,rt,ft,k,null),k.onAfterShadow(r,k,I,q,rt,ft,null)}}const lt=k.children;for(let rt=0,vt=lt.length;rt<vt;rt++)w(lt[rt],I,q,D,C)}function F(k){k.target.removeEventListener("dispose",F);for(const q in p){const D=p[q],C=k.target.uuid;C in D&&(D[C].dispose(),delete D[C])}}}const cA={[wh]:Dh,[Uh]:Oh,[Lh]:Ph,[Tr]:Nh,[Dh]:wh,[Oh]:Uh,[Ph]:Lh,[Nh]:Tr};function uA(r,t){function i(){let V=!1;const Ut=new $e;let Et=null;const zt=new $e(0,0,0,0);return{setMask:function(bt){Et!==bt&&!V&&(r.colorMask(bt,bt,bt,bt),Et=bt)},setLocked:function(bt){V=bt},setClear:function(bt,xt,Bt,ie,Le){Le===!0&&(bt*=ie,xt*=ie,Bt*=ie),Ut.set(bt,xt,Bt,ie),zt.equals(Ut)===!1&&(r.clearColor(bt,xt,Bt,ie),zt.copy(Ut))},reset:function(){V=!1,Et=null,zt.set(-1,0,0,0)}}}function s(){let V=!1,Ut=!1,Et=null,zt=null,bt=null;return{setReversed:function(xt){if(Ut!==xt){const Bt=t.get("EXT_clip_control");xt?Bt.clipControlEXT(Bt.LOWER_LEFT_EXT,Bt.ZERO_TO_ONE_EXT):Bt.clipControlEXT(Bt.LOWER_LEFT_EXT,Bt.NEGATIVE_ONE_TO_ONE_EXT),Ut=xt;const ie=bt;bt=null,this.setClear(ie)}},getReversed:function(){return Ut},setTest:function(xt){xt?At(r.DEPTH_TEST):Rt(r.DEPTH_TEST)},setMask:function(xt){Et!==xt&&!V&&(r.depthMask(xt),Et=xt)},setFunc:function(xt){if(Ut&&(xt=cA[xt]),zt!==xt){switch(xt){case wh:r.depthFunc(r.NEVER);break;case Dh:r.depthFunc(r.ALWAYS);break;case Uh:r.depthFunc(r.LESS);break;case Tr:r.depthFunc(r.LEQUAL);break;case Lh:r.depthFunc(r.EQUAL);break;case Nh:r.depthFunc(r.GEQUAL);break;case Oh:r.depthFunc(r.GREATER);break;case Ph:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}zt=xt}},setLocked:function(xt){V=xt},setClear:function(xt){bt!==xt&&(Ut&&(xt=1-xt),r.clearDepth(xt),bt=xt)},reset:function(){V=!1,Et=null,zt=null,bt=null,Ut=!1}}}function l(){let V=!1,Ut=null,Et=null,zt=null,bt=null,xt=null,Bt=null,ie=null,Le=null;return{setTest:function(Ae){V||(Ae?At(r.STENCIL_TEST):Rt(r.STENCIL_TEST))},setMask:function(Ae){Ut!==Ae&&!V&&(r.stencilMask(Ae),Ut=Ae)},setFunc:function(Ae,Wn,pn){(Et!==Ae||zt!==Wn||bt!==pn)&&(r.stencilFunc(Ae,Wn,pn),Et=Ae,zt=Wn,bt=pn)},setOp:function(Ae,Wn,pn){(xt!==Ae||Bt!==Wn||ie!==pn)&&(r.stencilOp(Ae,Wn,pn),xt=Ae,Bt=Wn,ie=pn)},setLocked:function(Ae){V=Ae},setClear:function(Ae){Le!==Ae&&(r.clearStencil(Ae),Le=Ae)},reset:function(){V=!1,Ut=null,Et=null,zt=null,bt=null,xt=null,Bt=null,ie=null,Le=null}}}const u=new i,h=new s,d=new l,m=new WeakMap,p=new WeakMap;let g={},x={},_=new WeakMap,M=[],E=null,R=!1,y=null,v=null,z=null,L=null,w=null,F=null,k=null,I=new Ue(0,0,0),q=0,D=!1,C=null,G=null,lt=null,rt=null,vt=null;const ft=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let N=!1,Y=0;const X=r.getParameter(r.VERSION);X.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(X)[1]),N=Y>=1):X.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),N=Y>=2);let pt=null,U={};const J=r.getParameter(r.SCISSOR_BOX),gt=r.getParameter(r.VIEWPORT),St=new $e().fromArray(J),W=new $e().fromArray(gt);function ot(V,Ut,Et,zt){const bt=new Uint8Array(4),xt=r.createTexture();r.bindTexture(V,xt),r.texParameteri(V,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(V,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Bt=0;Bt<Et;Bt++)V===r.TEXTURE_3D||V===r.TEXTURE_2D_ARRAY?r.texImage3D(Ut,0,r.RGBA,1,1,zt,0,r.RGBA,r.UNSIGNED_BYTE,bt):r.texImage2D(Ut+Bt,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,bt);return xt}const yt={};yt[r.TEXTURE_2D]=ot(r.TEXTURE_2D,r.TEXTURE_2D,1),yt[r.TEXTURE_CUBE_MAP]=ot(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),yt[r.TEXTURE_2D_ARRAY]=ot(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),yt[r.TEXTURE_3D]=ot(r.TEXTURE_3D,r.TEXTURE_3D,1,1),u.setClear(0,0,0,1),h.setClear(1),d.setClear(0),At(r.DEPTH_TEST),h.setFunc(Tr),Te(!1),de(c_),At(r.CULL_FACE),B(ka);function At(V){g[V]!==!0&&(r.enable(V),g[V]=!0)}function Rt(V){g[V]!==!1&&(r.disable(V),g[V]=!1)}function qt(V,Ut){return x[V]!==Ut?(r.bindFramebuffer(V,Ut),x[V]=Ut,V===r.DRAW_FRAMEBUFFER&&(x[r.FRAMEBUFFER]=Ut),V===r.FRAMEBUFFER&&(x[r.DRAW_FRAMEBUFFER]=Ut),!0):!1}function Vt(V,Ut){let Et=M,zt=!1;if(V){Et=_.get(Ut),Et===void 0&&(Et=[],_.set(Ut,Et));const bt=V.textures;if(Et.length!==bt.length||Et[0]!==r.COLOR_ATTACHMENT0){for(let xt=0,Bt=bt.length;xt<Bt;xt++)Et[xt]=r.COLOR_ATTACHMENT0+xt;Et.length=bt.length,zt=!0}}else Et[0]!==r.BACK&&(Et[0]=r.BACK,zt=!0);zt&&r.drawBuffers(Et)}function ye(V){return E!==V?(r.useProgram(V),E=V,!0):!1}const Ee={[xs]:r.FUNC_ADD,[hS]:r.FUNC_SUBTRACT,[dS]:r.FUNC_REVERSE_SUBTRACT};Ee[pS]=r.MIN,Ee[mS]=r.MAX;const _e={[gS]:r.ZERO,[_S]:r.ONE,[vS]:r.SRC_COLOR,[Rh]:r.SRC_ALPHA,[TS]:r.SRC_ALPHA_SATURATE,[MS]:r.DST_COLOR,[SS]:r.DST_ALPHA,[xS]:r.ONE_MINUS_SRC_COLOR,[Ch]:r.ONE_MINUS_SRC_ALPHA,[ES]:r.ONE_MINUS_DST_COLOR,[yS]:r.ONE_MINUS_DST_ALPHA,[bS]:r.CONSTANT_COLOR,[AS]:r.ONE_MINUS_CONSTANT_COLOR,[RS]:r.CONSTANT_ALPHA,[CS]:r.ONE_MINUS_CONSTANT_ALPHA};function B(V,Ut,Et,zt,bt,xt,Bt,ie,Le,Ae){if(V===ka){R===!0&&(Rt(r.BLEND),R=!1);return}if(R===!1&&(At(r.BLEND),R=!0),V!==fS){if(V!==y||Ae!==D){if((v!==xs||w!==xs)&&(r.blendEquation(r.FUNC_ADD),v=xs,w=xs),Ae)switch(V){case yr:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case u_:r.blendFunc(r.ONE,r.ONE);break;case f_:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case h_:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}else switch(V){case yr:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case u_:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case f_:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case h_:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}z=null,L=null,F=null,k=null,I.set(0,0,0),q=0,y=V,D=Ae}return}bt=bt||Ut,xt=xt||Et,Bt=Bt||zt,(Ut!==v||bt!==w)&&(r.blendEquationSeparate(Ee[Ut],Ee[bt]),v=Ut,w=bt),(Et!==z||zt!==L||xt!==F||Bt!==k)&&(r.blendFuncSeparate(_e[Et],_e[zt],_e[xt],_e[Bt]),z=Et,L=zt,F=xt,k=Bt),(ie.equals(I)===!1||Le!==q)&&(r.blendColor(ie.r,ie.g,ie.b,Le),I.copy(ie),q=Le),y=V,D=!1}function Sn(V,Ut){V.side===ta?Rt(r.CULL_FACE):At(r.CULL_FACE);let Et=V.side===kn;Ut&&(Et=!Et),Te(Et),V.blending===yr&&V.transparent===!1?B(ka):B(V.blending,V.blendEquation,V.blendSrc,V.blendDst,V.blendEquationAlpha,V.blendSrcAlpha,V.blendDstAlpha,V.blendColor,V.blendAlpha,V.premultipliedAlpha),h.setFunc(V.depthFunc),h.setTest(V.depthTest),h.setMask(V.depthWrite),u.setMask(V.colorWrite);const zt=V.stencilWrite;d.setTest(zt),zt&&(d.setMask(V.stencilWriteMask),d.setFunc(V.stencilFunc,V.stencilRef,V.stencilFuncMask),d.setOp(V.stencilFail,V.stencilZFail,V.stencilZPass)),ve(V.polygonOffset,V.polygonOffsetFactor,V.polygonOffsetUnits),V.alphaToCoverage===!0?At(r.SAMPLE_ALPHA_TO_COVERAGE):Rt(r.SAMPLE_ALPHA_TO_COVERAGE)}function Te(V){C!==V&&(V?r.frontFace(r.CW):r.frontFace(r.CCW),C=V)}function de(V){V!==lS?(At(r.CULL_FACE),V!==G&&(V===c_?r.cullFace(r.BACK):V===cS?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Rt(r.CULL_FACE),G=V}function kt(V){V!==lt&&(N&&r.lineWidth(V),lt=V)}function ve(V,Ut,Et){V?(At(r.POLYGON_OFFSET_FILL),(rt!==Ut||vt!==Et)&&(r.polygonOffset(Ut,Et),rt=Ut,vt=Et)):Rt(r.POLYGON_OFFSET_FILL)}function Kt(V){V?At(r.SCISSOR_TEST):Rt(r.SCISSOR_TEST)}function se(V){V===void 0&&(V=r.TEXTURE0+ft-1),pt!==V&&(r.activeTexture(V),pt=V)}function Ke(V,Ut,Et){Et===void 0&&(pt===null?Et=r.TEXTURE0+ft-1:Et=pt);let zt=U[Et];zt===void 0&&(zt={type:void 0,texture:void 0},U[Et]=zt),(zt.type!==V||zt.texture!==Ut)&&(pt!==Et&&(r.activeTexture(Et),pt=Et),r.bindTexture(V,Ut||yt[V]),zt.type=V,zt.texture=Ut)}function O(){const V=U[pt];V!==void 0&&V.type!==void 0&&(r.bindTexture(V.type,null),V.type=void 0,V.texture=void 0)}function T(){try{r.compressedTexImage2D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function et(){try{r.compressedTexImage3D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function ht(){try{r.texSubImage2D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function mt(){try{r.texSubImage3D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function ct(){try{r.compressedTexSubImage2D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Ot(){try{r.compressedTexSubImage3D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Dt(){try{r.texStorage2D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Gt(){try{r.texStorage3D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Xt(){try{r.texImage2D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Mt(){try{r.texImage3D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Pt(V){St.equals(V)===!1&&(r.scissor(V.x,V.y,V.z,V.w),St.copy(V))}function jt(V){W.equals(V)===!1&&(r.viewport(V.x,V.y,V.z,V.w),W.copy(V))}function Zt(V,Ut){let Et=p.get(Ut);Et===void 0&&(Et=new WeakMap,p.set(Ut,Et));let zt=Et.get(V);zt===void 0&&(zt=r.getUniformBlockIndex(Ut,V.name),Et.set(V,zt))}function Ct(V,Ut){const zt=p.get(Ut).get(V);m.get(Ut)!==zt&&(r.uniformBlockBinding(Ut,zt,V.__bindingPointIndex),m.set(Ut,zt))}function ae(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),h.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),g={},pt=null,U={},x={},_=new WeakMap,M=[],E=null,R=!1,y=null,v=null,z=null,L=null,w=null,F=null,k=null,I=new Ue(0,0,0),q=0,D=!1,C=null,G=null,lt=null,rt=null,vt=null,St.set(0,0,r.canvas.width,r.canvas.height),W.set(0,0,r.canvas.width,r.canvas.height),u.reset(),h.reset(),d.reset()}return{buffers:{color:u,depth:h,stencil:d},enable:At,disable:Rt,bindFramebuffer:qt,drawBuffers:Vt,useProgram:ye,setBlending:B,setMaterial:Sn,setFlipSided:Te,setCullFace:de,setLineWidth:kt,setPolygonOffset:ve,setScissorTest:Kt,activeTexture:se,bindTexture:Ke,unbindTexture:O,compressedTexImage2D:T,compressedTexImage3D:et,texImage2D:Xt,texImage3D:Mt,updateUBOMapping:Zt,uniformBlockBinding:Ct,texStorage2D:Dt,texStorage3D:Gt,texSubImage2D:ht,texSubImage3D:mt,compressedTexSubImage2D:ct,compressedTexSubImage3D:Ot,scissor:Pt,viewport:jt,reset:ae}}function fA(r,t,i,s,l,u,h){const d=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new he,g=new WeakMap;let x;const _=new WeakMap;let M=!1;try{M=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(O,T){return M?new OffscreenCanvas(O,T):Oc("canvas")}function R(O,T,et){let ht=1;const mt=Ke(O);if((mt.width>et||mt.height>et)&&(ht=et/Math.max(mt.width,mt.height)),ht<1)if(typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&O instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&O instanceof ImageBitmap||typeof VideoFrame<"u"&&O instanceof VideoFrame){const ct=Math.floor(ht*mt.width),Ot=Math.floor(ht*mt.height);x===void 0&&(x=E(ct,Ot));const Dt=T?E(ct,Ot):x;return Dt.width=ct,Dt.height=Ot,Dt.getContext("2d").drawImage(O,0,0,ct,Ot),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+mt.width+"x"+mt.height+") to ("+ct+"x"+Ot+")."),Dt}else return"data"in O&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+mt.width+"x"+mt.height+")."),O;return O}function y(O){return O.generateMipmaps}function v(O){r.generateMipmap(O)}function z(O){return O.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:O.isWebGL3DRenderTarget?r.TEXTURE_3D:O.isWebGLArrayRenderTarget||O.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function L(O,T,et,ht,mt=!1){if(O!==null){if(r[O]!==void 0)return r[O];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+O+"'")}let ct=T;if(T===r.RED&&(et===r.FLOAT&&(ct=r.R32F),et===r.HALF_FLOAT&&(ct=r.R16F),et===r.UNSIGNED_BYTE&&(ct=r.R8)),T===r.RED_INTEGER&&(et===r.UNSIGNED_BYTE&&(ct=r.R8UI),et===r.UNSIGNED_SHORT&&(ct=r.R16UI),et===r.UNSIGNED_INT&&(ct=r.R32UI),et===r.BYTE&&(ct=r.R8I),et===r.SHORT&&(ct=r.R16I),et===r.INT&&(ct=r.R32I)),T===r.RG&&(et===r.FLOAT&&(ct=r.RG32F),et===r.HALF_FLOAT&&(ct=r.RG16F),et===r.UNSIGNED_BYTE&&(ct=r.RG8)),T===r.RG_INTEGER&&(et===r.UNSIGNED_BYTE&&(ct=r.RG8UI),et===r.UNSIGNED_SHORT&&(ct=r.RG16UI),et===r.UNSIGNED_INT&&(ct=r.RG32UI),et===r.BYTE&&(ct=r.RG8I),et===r.SHORT&&(ct=r.RG16I),et===r.INT&&(ct=r.RG32I)),T===r.RGB_INTEGER&&(et===r.UNSIGNED_BYTE&&(ct=r.RGB8UI),et===r.UNSIGNED_SHORT&&(ct=r.RGB16UI),et===r.UNSIGNED_INT&&(ct=r.RGB32UI),et===r.BYTE&&(ct=r.RGB8I),et===r.SHORT&&(ct=r.RGB16I),et===r.INT&&(ct=r.RGB32I)),T===r.RGBA_INTEGER&&(et===r.UNSIGNED_BYTE&&(ct=r.RGBA8UI),et===r.UNSIGNED_SHORT&&(ct=r.RGBA16UI),et===r.UNSIGNED_INT&&(ct=r.RGBA32UI),et===r.BYTE&&(ct=r.RGBA8I),et===r.SHORT&&(ct=r.RGBA16I),et===r.INT&&(ct=r.RGBA32I)),T===r.RGB&&et===r.UNSIGNED_INT_5_9_9_9_REV&&(ct=r.RGB9_E5),T===r.RGBA){const Ot=mt?Lc:Ce.getTransfer(ht);et===r.FLOAT&&(ct=r.RGBA32F),et===r.HALF_FLOAT&&(ct=r.RGBA16F),et===r.UNSIGNED_BYTE&&(ct=Ot===Be?r.SRGB8_ALPHA8:r.RGBA8),et===r.UNSIGNED_SHORT_4_4_4_4&&(ct=r.RGBA4),et===r.UNSIGNED_SHORT_5_5_5_1&&(ct=r.RGB5_A1)}return(ct===r.R16F||ct===r.R32F||ct===r.RG16F||ct===r.RG32F||ct===r.RGBA16F||ct===r.RGBA32F)&&t.get("EXT_color_buffer_float"),ct}function w(O,T){let et;return O?T===null||T===Es||T===Po?et=r.DEPTH24_STENCIL8:T===ea?et=r.DEPTH32F_STENCIL8:T===Oo&&(et=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===Es||T===Po?et=r.DEPTH_COMPONENT24:T===ea?et=r.DEPTH_COMPONENT32F:T===Oo&&(et=r.DEPTH_COMPONENT16),et}function F(O,T){return y(O)===!0||O.isFramebufferTexture&&O.minFilter!==xi&&O.minFilter!==Ci?Math.log2(Math.max(T.width,T.height))+1:O.mipmaps!==void 0&&O.mipmaps.length>0?O.mipmaps.length:O.isCompressedTexture&&Array.isArray(O.image)?T.mipmaps.length:1}function k(O){const T=O.target;T.removeEventListener("dispose",k),q(T),T.isVideoTexture&&g.delete(T)}function I(O){const T=O.target;T.removeEventListener("dispose",I),C(T)}function q(O){const T=s.get(O);if(T.__webglInit===void 0)return;const et=O.source,ht=_.get(et);if(ht){const mt=ht[T.__cacheKey];mt.usedTimes--,mt.usedTimes===0&&D(O),Object.keys(ht).length===0&&_.delete(et)}s.remove(O)}function D(O){const T=s.get(O);r.deleteTexture(T.__webglTexture);const et=O.source,ht=_.get(et);delete ht[T.__cacheKey],h.memory.textures--}function C(O){const T=s.get(O);if(O.depthTexture&&(O.depthTexture.dispose(),s.remove(O.depthTexture)),O.isWebGLCubeRenderTarget)for(let ht=0;ht<6;ht++){if(Array.isArray(T.__webglFramebuffer[ht]))for(let mt=0;mt<T.__webglFramebuffer[ht].length;mt++)r.deleteFramebuffer(T.__webglFramebuffer[ht][mt]);else r.deleteFramebuffer(T.__webglFramebuffer[ht]);T.__webglDepthbuffer&&r.deleteRenderbuffer(T.__webglDepthbuffer[ht])}else{if(Array.isArray(T.__webglFramebuffer))for(let ht=0;ht<T.__webglFramebuffer.length;ht++)r.deleteFramebuffer(T.__webglFramebuffer[ht]);else r.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&r.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&r.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let ht=0;ht<T.__webglColorRenderbuffer.length;ht++)T.__webglColorRenderbuffer[ht]&&r.deleteRenderbuffer(T.__webglColorRenderbuffer[ht]);T.__webglDepthRenderbuffer&&r.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const et=O.textures;for(let ht=0,mt=et.length;ht<mt;ht++){const ct=s.get(et[ht]);ct.__webglTexture&&(r.deleteTexture(ct.__webglTexture),h.memory.textures--),s.remove(et[ht])}s.remove(O)}let G=0;function lt(){G=0}function rt(){const O=G;return O>=l.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+O+" texture units while this GPU supports only "+l.maxTextures),G+=1,O}function vt(O){const T=[];return T.push(O.wrapS),T.push(O.wrapT),T.push(O.wrapR||0),T.push(O.magFilter),T.push(O.minFilter),T.push(O.anisotropy),T.push(O.internalFormat),T.push(O.format),T.push(O.type),T.push(O.generateMipmaps),T.push(O.premultiplyAlpha),T.push(O.flipY),T.push(O.unpackAlignment),T.push(O.colorSpace),T.join()}function ft(O,T){const et=s.get(O);if(O.isVideoTexture&&Kt(O),O.isRenderTargetTexture===!1&&O.version>0&&et.__version!==O.version){const ht=O.image;if(ht===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ht.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{yt(et,O,T);return}}i.bindTexture(r.TEXTURE_2D,et.__webglTexture,r.TEXTURE0+T)}function N(O,T){const et=s.get(O);if(O.version>0&&et.__version!==O.version){yt(et,O,T);return}i.bindTexture(r.TEXTURE_2D_ARRAY,et.__webglTexture,r.TEXTURE0+T)}function Y(O,T){const et=s.get(O);if(O.version>0&&et.__version!==O.version){yt(et,O,T);return}i.bindTexture(r.TEXTURE_3D,et.__webglTexture,r.TEXTURE0+T)}function X(O,T){const et=s.get(O);if(O.version>0&&et.__version!==O.version){At(et,O,T);return}i.bindTexture(r.TEXTURE_CUBE_MAP,et.__webglTexture,r.TEXTURE0+T)}const pt={[Bh]:r.REPEAT,[ys]:r.CLAMP_TO_EDGE,[Fh]:r.MIRRORED_REPEAT},U={[xi]:r.NEAREST,[BS]:r.NEAREST_MIPMAP_NEAREST,[$l]:r.NEAREST_MIPMAP_LINEAR,[Ci]:r.LINEAR,[Zf]:r.LINEAR_MIPMAP_NEAREST,[Ms]:r.LINEAR_MIPMAP_LINEAR},J={[kS]:r.NEVER,[ZS]:r.ALWAYS,[XS]:r.LESS,[E0]:r.LEQUAL,[WS]:r.EQUAL,[jS]:r.GEQUAL,[YS]:r.GREATER,[qS]:r.NOTEQUAL};function gt(O,T){if(T.type===ea&&t.has("OES_texture_float_linear")===!1&&(T.magFilter===Ci||T.magFilter===Zf||T.magFilter===$l||T.magFilter===Ms||T.minFilter===Ci||T.minFilter===Zf||T.minFilter===$l||T.minFilter===Ms)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(O,r.TEXTURE_WRAP_S,pt[T.wrapS]),r.texParameteri(O,r.TEXTURE_WRAP_T,pt[T.wrapT]),(O===r.TEXTURE_3D||O===r.TEXTURE_2D_ARRAY)&&r.texParameteri(O,r.TEXTURE_WRAP_R,pt[T.wrapR]),r.texParameteri(O,r.TEXTURE_MAG_FILTER,U[T.magFilter]),r.texParameteri(O,r.TEXTURE_MIN_FILTER,U[T.minFilter]),T.compareFunction&&(r.texParameteri(O,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(O,r.TEXTURE_COMPARE_FUNC,J[T.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===xi||T.minFilter!==$l&&T.minFilter!==Ms||T.type===ea&&t.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||s.get(T).__currentAnisotropy){const et=t.get("EXT_texture_filter_anisotropic");r.texParameterf(O,et.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,l.getMaxAnisotropy())),s.get(T).__currentAnisotropy=T.anisotropy}}}function St(O,T){let et=!1;O.__webglInit===void 0&&(O.__webglInit=!0,T.addEventListener("dispose",k));const ht=T.source;let mt=_.get(ht);mt===void 0&&(mt={},_.set(ht,mt));const ct=vt(T);if(ct!==O.__cacheKey){mt[ct]===void 0&&(mt[ct]={texture:r.createTexture(),usedTimes:0},h.memory.textures++,et=!0),mt[ct].usedTimes++;const Ot=mt[O.__cacheKey];Ot!==void 0&&(mt[O.__cacheKey].usedTimes--,Ot.usedTimes===0&&D(T)),O.__cacheKey=ct,O.__webglTexture=mt[ct].texture}return et}function W(O,T,et){return Math.floor(Math.floor(O/et)/T)}function ot(O,T,et,ht){const ct=O.updateRanges;if(ct.length===0)i.texSubImage2D(r.TEXTURE_2D,0,0,0,T.width,T.height,et,ht,T.data);else{ct.sort((Mt,Pt)=>Mt.start-Pt.start);let Ot=0;for(let Mt=1;Mt<ct.length;Mt++){const Pt=ct[Ot],jt=ct[Mt],Zt=Pt.start+Pt.count,Ct=W(jt.start,T.width,4),ae=W(Pt.start,T.width,4);jt.start<=Zt+1&&Ct===ae&&W(jt.start+jt.count-1,T.width,4)===Ct?Pt.count=Math.max(Pt.count,jt.start+jt.count-Pt.start):(++Ot,ct[Ot]=jt)}ct.length=Ot+1;const Dt=r.getParameter(r.UNPACK_ROW_LENGTH),Gt=r.getParameter(r.UNPACK_SKIP_PIXELS),Xt=r.getParameter(r.UNPACK_SKIP_ROWS);r.pixelStorei(r.UNPACK_ROW_LENGTH,T.width);for(let Mt=0,Pt=ct.length;Mt<Pt;Mt++){const jt=ct[Mt],Zt=Math.floor(jt.start/4),Ct=Math.ceil(jt.count/4),ae=Zt%T.width,V=Math.floor(Zt/T.width),Ut=Ct,Et=1;r.pixelStorei(r.UNPACK_SKIP_PIXELS,ae),r.pixelStorei(r.UNPACK_SKIP_ROWS,V),i.texSubImage2D(r.TEXTURE_2D,0,ae,V,Ut,Et,et,ht,T.data)}O.clearUpdateRanges(),r.pixelStorei(r.UNPACK_ROW_LENGTH,Dt),r.pixelStorei(r.UNPACK_SKIP_PIXELS,Gt),r.pixelStorei(r.UNPACK_SKIP_ROWS,Xt)}}function yt(O,T,et){let ht=r.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(ht=r.TEXTURE_2D_ARRAY),T.isData3DTexture&&(ht=r.TEXTURE_3D);const mt=St(O,T),ct=T.source;i.bindTexture(ht,O.__webglTexture,r.TEXTURE0+et);const Ot=s.get(ct);if(ct.version!==Ot.__version||mt===!0){i.activeTexture(r.TEXTURE0+et);const Dt=Ce.getPrimaries(Ce.workingColorSpace),Gt=T.colorSpace===Va?null:Ce.getPrimaries(T.colorSpace),Xt=T.colorSpace===Va||Dt===Gt?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,T.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,T.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Xt);let Mt=R(T.image,!1,l.maxTextureSize);Mt=se(T,Mt);const Pt=u.convert(T.format,T.colorSpace),jt=u.convert(T.type);let Zt=L(T.internalFormat,Pt,jt,T.colorSpace,T.isVideoTexture);gt(ht,T);let Ct;const ae=T.mipmaps,V=T.isVideoTexture!==!0,Ut=Ot.__version===void 0||mt===!0,Et=ct.dataReady,zt=F(T,Mt);if(T.isDepthTexture)Zt=w(T.format===Io,T.type),Ut&&(V?i.texStorage2D(r.TEXTURE_2D,1,Zt,Mt.width,Mt.height):i.texImage2D(r.TEXTURE_2D,0,Zt,Mt.width,Mt.height,0,Pt,jt,null));else if(T.isDataTexture)if(ae.length>0){V&&Ut&&i.texStorage2D(r.TEXTURE_2D,zt,Zt,ae[0].width,ae[0].height);for(let bt=0,xt=ae.length;bt<xt;bt++)Ct=ae[bt],V?Et&&i.texSubImage2D(r.TEXTURE_2D,bt,0,0,Ct.width,Ct.height,Pt,jt,Ct.data):i.texImage2D(r.TEXTURE_2D,bt,Zt,Ct.width,Ct.height,0,Pt,jt,Ct.data);T.generateMipmaps=!1}else V?(Ut&&i.texStorage2D(r.TEXTURE_2D,zt,Zt,Mt.width,Mt.height),Et&&ot(T,Mt,Pt,jt)):i.texImage2D(r.TEXTURE_2D,0,Zt,Mt.width,Mt.height,0,Pt,jt,Mt.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){V&&Ut&&i.texStorage3D(r.TEXTURE_2D_ARRAY,zt,Zt,ae[0].width,ae[0].height,Mt.depth);for(let bt=0,xt=ae.length;bt<xt;bt++)if(Ct=ae[bt],T.format!==vi)if(Pt!==null)if(V){if(Et)if(T.layerUpdates.size>0){const Bt=B_(Ct.width,Ct.height,T.format,T.type);for(const ie of T.layerUpdates){const Le=Ct.data.subarray(ie*Bt/Ct.data.BYTES_PER_ELEMENT,(ie+1)*Bt/Ct.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,bt,0,0,ie,Ct.width,Ct.height,1,Pt,Le)}T.clearLayerUpdates()}else i.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,bt,0,0,0,Ct.width,Ct.height,Mt.depth,Pt,Ct.data)}else i.compressedTexImage3D(r.TEXTURE_2D_ARRAY,bt,Zt,Ct.width,Ct.height,Mt.depth,0,Ct.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else V?Et&&i.texSubImage3D(r.TEXTURE_2D_ARRAY,bt,0,0,0,Ct.width,Ct.height,Mt.depth,Pt,jt,Ct.data):i.texImage3D(r.TEXTURE_2D_ARRAY,bt,Zt,Ct.width,Ct.height,Mt.depth,0,Pt,jt,Ct.data)}else{V&&Ut&&i.texStorage2D(r.TEXTURE_2D,zt,Zt,ae[0].width,ae[0].height);for(let bt=0,xt=ae.length;bt<xt;bt++)Ct=ae[bt],T.format!==vi?Pt!==null?V?Et&&i.compressedTexSubImage2D(r.TEXTURE_2D,bt,0,0,Ct.width,Ct.height,Pt,Ct.data):i.compressedTexImage2D(r.TEXTURE_2D,bt,Zt,Ct.width,Ct.height,0,Ct.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):V?Et&&i.texSubImage2D(r.TEXTURE_2D,bt,0,0,Ct.width,Ct.height,Pt,jt,Ct.data):i.texImage2D(r.TEXTURE_2D,bt,Zt,Ct.width,Ct.height,0,Pt,jt,Ct.data)}else if(T.isDataArrayTexture)if(V){if(Ut&&i.texStorage3D(r.TEXTURE_2D_ARRAY,zt,Zt,Mt.width,Mt.height,Mt.depth),Et)if(T.layerUpdates.size>0){const bt=B_(Mt.width,Mt.height,T.format,T.type);for(const xt of T.layerUpdates){const Bt=Mt.data.subarray(xt*bt/Mt.data.BYTES_PER_ELEMENT,(xt+1)*bt/Mt.data.BYTES_PER_ELEMENT);i.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,xt,Mt.width,Mt.height,1,Pt,jt,Bt)}T.clearLayerUpdates()}else i.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,Mt.width,Mt.height,Mt.depth,Pt,jt,Mt.data)}else i.texImage3D(r.TEXTURE_2D_ARRAY,0,Zt,Mt.width,Mt.height,Mt.depth,0,Pt,jt,Mt.data);else if(T.isData3DTexture)V?(Ut&&i.texStorage3D(r.TEXTURE_3D,zt,Zt,Mt.width,Mt.height,Mt.depth),Et&&i.texSubImage3D(r.TEXTURE_3D,0,0,0,0,Mt.width,Mt.height,Mt.depth,Pt,jt,Mt.data)):i.texImage3D(r.TEXTURE_3D,0,Zt,Mt.width,Mt.height,Mt.depth,0,Pt,jt,Mt.data);else if(T.isFramebufferTexture){if(Ut)if(V)i.texStorage2D(r.TEXTURE_2D,zt,Zt,Mt.width,Mt.height);else{let bt=Mt.width,xt=Mt.height;for(let Bt=0;Bt<zt;Bt++)i.texImage2D(r.TEXTURE_2D,Bt,Zt,bt,xt,0,Pt,jt,null),bt>>=1,xt>>=1}}else if(ae.length>0){if(V&&Ut){const bt=Ke(ae[0]);i.texStorage2D(r.TEXTURE_2D,zt,Zt,bt.width,bt.height)}for(let bt=0,xt=ae.length;bt<xt;bt++)Ct=ae[bt],V?Et&&i.texSubImage2D(r.TEXTURE_2D,bt,0,0,Pt,jt,Ct):i.texImage2D(r.TEXTURE_2D,bt,Zt,Pt,jt,Ct);T.generateMipmaps=!1}else if(V){if(Ut){const bt=Ke(Mt);i.texStorage2D(r.TEXTURE_2D,zt,Zt,bt.width,bt.height)}Et&&i.texSubImage2D(r.TEXTURE_2D,0,0,0,Pt,jt,Mt)}else i.texImage2D(r.TEXTURE_2D,0,Zt,Pt,jt,Mt);y(T)&&v(ht),Ot.__version=ct.version,T.onUpdate&&T.onUpdate(T)}O.__version=T.version}function At(O,T,et){if(T.image.length!==6)return;const ht=St(O,T),mt=T.source;i.bindTexture(r.TEXTURE_CUBE_MAP,O.__webglTexture,r.TEXTURE0+et);const ct=s.get(mt);if(mt.version!==ct.__version||ht===!0){i.activeTexture(r.TEXTURE0+et);const Ot=Ce.getPrimaries(Ce.workingColorSpace),Dt=T.colorSpace===Va?null:Ce.getPrimaries(T.colorSpace),Gt=T.colorSpace===Va||Ot===Dt?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,T.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,T.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Gt);const Xt=T.isCompressedTexture||T.image[0].isCompressedTexture,Mt=T.image[0]&&T.image[0].isDataTexture,Pt=[];for(let xt=0;xt<6;xt++)!Xt&&!Mt?Pt[xt]=R(T.image[xt],!0,l.maxCubemapSize):Pt[xt]=Mt?T.image[xt].image:T.image[xt],Pt[xt]=se(T,Pt[xt]);const jt=Pt[0],Zt=u.convert(T.format,T.colorSpace),Ct=u.convert(T.type),ae=L(T.internalFormat,Zt,Ct,T.colorSpace),V=T.isVideoTexture!==!0,Ut=ct.__version===void 0||ht===!0,Et=mt.dataReady;let zt=F(T,jt);gt(r.TEXTURE_CUBE_MAP,T);let bt;if(Xt){V&&Ut&&i.texStorage2D(r.TEXTURE_CUBE_MAP,zt,ae,jt.width,jt.height);for(let xt=0;xt<6;xt++){bt=Pt[xt].mipmaps;for(let Bt=0;Bt<bt.length;Bt++){const ie=bt[Bt];T.format!==vi?Zt!==null?V?Et&&i.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Bt,0,0,ie.width,ie.height,Zt,ie.data):i.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Bt,ae,ie.width,ie.height,0,ie.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):V?Et&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Bt,0,0,ie.width,ie.height,Zt,Ct,ie.data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Bt,ae,ie.width,ie.height,0,Zt,Ct,ie.data)}}}else{if(bt=T.mipmaps,V&&Ut){bt.length>0&&zt++;const xt=Ke(Pt[0]);i.texStorage2D(r.TEXTURE_CUBE_MAP,zt,ae,xt.width,xt.height)}for(let xt=0;xt<6;xt++)if(Mt){V?Et&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,0,0,Pt[xt].width,Pt[xt].height,Zt,Ct,Pt[xt].data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,ae,Pt[xt].width,Pt[xt].height,0,Zt,Ct,Pt[xt].data);for(let Bt=0;Bt<bt.length;Bt++){const Le=bt[Bt].image[xt].image;V?Et&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Bt+1,0,0,Le.width,Le.height,Zt,Ct,Le.data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Bt+1,ae,Le.width,Le.height,0,Zt,Ct,Le.data)}}else{V?Et&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,0,0,Zt,Ct,Pt[xt]):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,ae,Zt,Ct,Pt[xt]);for(let Bt=0;Bt<bt.length;Bt++){const ie=bt[Bt];V?Et&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Bt+1,0,0,Zt,Ct,ie.image[xt]):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Bt+1,ae,Zt,Ct,ie.image[xt])}}}y(T)&&v(r.TEXTURE_CUBE_MAP),ct.__version=mt.version,T.onUpdate&&T.onUpdate(T)}O.__version=T.version}function Rt(O,T,et,ht,mt,ct){const Ot=u.convert(et.format,et.colorSpace),Dt=u.convert(et.type),Gt=L(et.internalFormat,Ot,Dt,et.colorSpace),Xt=s.get(T),Mt=s.get(et);if(Mt.__renderTarget=T,!Xt.__hasExternalTextures){const Pt=Math.max(1,T.width>>ct),jt=Math.max(1,T.height>>ct);mt===r.TEXTURE_3D||mt===r.TEXTURE_2D_ARRAY?i.texImage3D(mt,ct,Gt,Pt,jt,T.depth,0,Ot,Dt,null):i.texImage2D(mt,ct,Gt,Pt,jt,0,Ot,Dt,null)}i.bindFramebuffer(r.FRAMEBUFFER,O),ve(T)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,ht,mt,Mt.__webglTexture,0,kt(T)):(mt===r.TEXTURE_2D||mt>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&mt<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,ht,mt,Mt.__webglTexture,ct),i.bindFramebuffer(r.FRAMEBUFFER,null)}function qt(O,T,et){if(r.bindRenderbuffer(r.RENDERBUFFER,O),T.depthBuffer){const ht=T.depthTexture,mt=ht&&ht.isDepthTexture?ht.type:null,ct=w(T.stencilBuffer,mt),Ot=T.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Dt=kt(T);ve(T)?d.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Dt,ct,T.width,T.height):et?r.renderbufferStorageMultisample(r.RENDERBUFFER,Dt,ct,T.width,T.height):r.renderbufferStorage(r.RENDERBUFFER,ct,T.width,T.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,Ot,r.RENDERBUFFER,O)}else{const ht=T.textures;for(let mt=0;mt<ht.length;mt++){const ct=ht[mt],Ot=u.convert(ct.format,ct.colorSpace),Dt=u.convert(ct.type),Gt=L(ct.internalFormat,Ot,Dt,ct.colorSpace),Xt=kt(T);et&&ve(T)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,Xt,Gt,T.width,T.height):ve(T)?d.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Xt,Gt,T.width,T.height):r.renderbufferStorage(r.RENDERBUFFER,Gt,T.width,T.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Vt(O,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(r.FRAMEBUFFER,O),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ht=s.get(T.depthTexture);ht.__renderTarget=T,(!ht.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),ft(T.depthTexture,0);const mt=ht.__webglTexture,ct=kt(T);if(T.depthTexture.format===zo)ve(T)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,mt,0,ct):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,mt,0);else if(T.depthTexture.format===Io)ve(T)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,mt,0,ct):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,mt,0);else throw new Error("Unknown depthTexture format")}function ye(O){const T=s.get(O),et=O.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==O.depthTexture){const ht=O.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),ht){const mt=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,ht.removeEventListener("dispose",mt)};ht.addEventListener("dispose",mt),T.__depthDisposeCallback=mt}T.__boundDepthTexture=ht}if(O.depthTexture&&!T.__autoAllocateDepthBuffer){if(et)throw new Error("target.depthTexture not supported in Cube render targets");const ht=O.texture.mipmaps;ht&&ht.length>0?Vt(T.__webglFramebuffer[0],O):Vt(T.__webglFramebuffer,O)}else if(et){T.__webglDepthbuffer=[];for(let ht=0;ht<6;ht++)if(i.bindFramebuffer(r.FRAMEBUFFER,T.__webglFramebuffer[ht]),T.__webglDepthbuffer[ht]===void 0)T.__webglDepthbuffer[ht]=r.createRenderbuffer(),qt(T.__webglDepthbuffer[ht],O,!1);else{const mt=O.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ct=T.__webglDepthbuffer[ht];r.bindRenderbuffer(r.RENDERBUFFER,ct),r.framebufferRenderbuffer(r.FRAMEBUFFER,mt,r.RENDERBUFFER,ct)}}else{const ht=O.texture.mipmaps;if(ht&&ht.length>0?i.bindFramebuffer(r.FRAMEBUFFER,T.__webglFramebuffer[0]):i.bindFramebuffer(r.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=r.createRenderbuffer(),qt(T.__webglDepthbuffer,O,!1);else{const mt=O.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ct=T.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,ct),r.framebufferRenderbuffer(r.FRAMEBUFFER,mt,r.RENDERBUFFER,ct)}}i.bindFramebuffer(r.FRAMEBUFFER,null)}function Ee(O,T,et){const ht=s.get(O);T!==void 0&&Rt(ht.__webglFramebuffer,O,O.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),et!==void 0&&ye(O)}function _e(O){const T=O.texture,et=s.get(O),ht=s.get(T);O.addEventListener("dispose",I);const mt=O.textures,ct=O.isWebGLCubeRenderTarget===!0,Ot=mt.length>1;if(Ot||(ht.__webglTexture===void 0&&(ht.__webglTexture=r.createTexture()),ht.__version=T.version,h.memory.textures++),ct){et.__webglFramebuffer=[];for(let Dt=0;Dt<6;Dt++)if(T.mipmaps&&T.mipmaps.length>0){et.__webglFramebuffer[Dt]=[];for(let Gt=0;Gt<T.mipmaps.length;Gt++)et.__webglFramebuffer[Dt][Gt]=r.createFramebuffer()}else et.__webglFramebuffer[Dt]=r.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){et.__webglFramebuffer=[];for(let Dt=0;Dt<T.mipmaps.length;Dt++)et.__webglFramebuffer[Dt]=r.createFramebuffer()}else et.__webglFramebuffer=r.createFramebuffer();if(Ot)for(let Dt=0,Gt=mt.length;Dt<Gt;Dt++){const Xt=s.get(mt[Dt]);Xt.__webglTexture===void 0&&(Xt.__webglTexture=r.createTexture(),h.memory.textures++)}if(O.samples>0&&ve(O)===!1){et.__webglMultisampledFramebuffer=r.createFramebuffer(),et.__webglColorRenderbuffer=[],i.bindFramebuffer(r.FRAMEBUFFER,et.__webglMultisampledFramebuffer);for(let Dt=0;Dt<mt.length;Dt++){const Gt=mt[Dt];et.__webglColorRenderbuffer[Dt]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,et.__webglColorRenderbuffer[Dt]);const Xt=u.convert(Gt.format,Gt.colorSpace),Mt=u.convert(Gt.type),Pt=L(Gt.internalFormat,Xt,Mt,Gt.colorSpace,O.isXRRenderTarget===!0),jt=kt(O);r.renderbufferStorageMultisample(r.RENDERBUFFER,jt,Pt,O.width,O.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Dt,r.RENDERBUFFER,et.__webglColorRenderbuffer[Dt])}r.bindRenderbuffer(r.RENDERBUFFER,null),O.depthBuffer&&(et.__webglDepthRenderbuffer=r.createRenderbuffer(),qt(et.__webglDepthRenderbuffer,O,!0)),i.bindFramebuffer(r.FRAMEBUFFER,null)}}if(ct){i.bindTexture(r.TEXTURE_CUBE_MAP,ht.__webglTexture),gt(r.TEXTURE_CUBE_MAP,T);for(let Dt=0;Dt<6;Dt++)if(T.mipmaps&&T.mipmaps.length>0)for(let Gt=0;Gt<T.mipmaps.length;Gt++)Rt(et.__webglFramebuffer[Dt][Gt],O,T,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Dt,Gt);else Rt(et.__webglFramebuffer[Dt],O,T,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Dt,0);y(T)&&v(r.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Ot){for(let Dt=0,Gt=mt.length;Dt<Gt;Dt++){const Xt=mt[Dt],Mt=s.get(Xt);i.bindTexture(r.TEXTURE_2D,Mt.__webglTexture),gt(r.TEXTURE_2D,Xt),Rt(et.__webglFramebuffer,O,Xt,r.COLOR_ATTACHMENT0+Dt,r.TEXTURE_2D,0),y(Xt)&&v(r.TEXTURE_2D)}i.unbindTexture()}else{let Dt=r.TEXTURE_2D;if((O.isWebGL3DRenderTarget||O.isWebGLArrayRenderTarget)&&(Dt=O.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),i.bindTexture(Dt,ht.__webglTexture),gt(Dt,T),T.mipmaps&&T.mipmaps.length>0)for(let Gt=0;Gt<T.mipmaps.length;Gt++)Rt(et.__webglFramebuffer[Gt],O,T,r.COLOR_ATTACHMENT0,Dt,Gt);else Rt(et.__webglFramebuffer,O,T,r.COLOR_ATTACHMENT0,Dt,0);y(T)&&v(Dt),i.unbindTexture()}O.depthBuffer&&ye(O)}function B(O){const T=O.textures;for(let et=0,ht=T.length;et<ht;et++){const mt=T[et];if(y(mt)){const ct=z(O),Ot=s.get(mt).__webglTexture;i.bindTexture(ct,Ot),v(ct),i.unbindTexture()}}}const Sn=[],Te=[];function de(O){if(O.samples>0){if(ve(O)===!1){const T=O.textures,et=O.width,ht=O.height;let mt=r.COLOR_BUFFER_BIT;const ct=O.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Ot=s.get(O),Dt=T.length>1;if(Dt)for(let Xt=0;Xt<T.length;Xt++)i.bindFramebuffer(r.FRAMEBUFFER,Ot.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Xt,r.RENDERBUFFER,null),i.bindFramebuffer(r.FRAMEBUFFER,Ot.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Xt,r.TEXTURE_2D,null,0);i.bindFramebuffer(r.READ_FRAMEBUFFER,Ot.__webglMultisampledFramebuffer);const Gt=O.texture.mipmaps;Gt&&Gt.length>0?i.bindFramebuffer(r.DRAW_FRAMEBUFFER,Ot.__webglFramebuffer[0]):i.bindFramebuffer(r.DRAW_FRAMEBUFFER,Ot.__webglFramebuffer);for(let Xt=0;Xt<T.length;Xt++){if(O.resolveDepthBuffer&&(O.depthBuffer&&(mt|=r.DEPTH_BUFFER_BIT),O.stencilBuffer&&O.resolveStencilBuffer&&(mt|=r.STENCIL_BUFFER_BIT)),Dt){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Ot.__webglColorRenderbuffer[Xt]);const Mt=s.get(T[Xt]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Mt,0)}r.blitFramebuffer(0,0,et,ht,0,0,et,ht,mt,r.NEAREST),m===!0&&(Sn.length=0,Te.length=0,Sn.push(r.COLOR_ATTACHMENT0+Xt),O.depthBuffer&&O.resolveDepthBuffer===!1&&(Sn.push(ct),Te.push(ct),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,Te)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,Sn))}if(i.bindFramebuffer(r.READ_FRAMEBUFFER,null),i.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),Dt)for(let Xt=0;Xt<T.length;Xt++){i.bindFramebuffer(r.FRAMEBUFFER,Ot.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Xt,r.RENDERBUFFER,Ot.__webglColorRenderbuffer[Xt]);const Mt=s.get(T[Xt]).__webglTexture;i.bindFramebuffer(r.FRAMEBUFFER,Ot.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Xt,r.TEXTURE_2D,Mt,0)}i.bindFramebuffer(r.DRAW_FRAMEBUFFER,Ot.__webglMultisampledFramebuffer)}else if(O.depthBuffer&&O.resolveDepthBuffer===!1&&m){const T=O.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[T])}}}function kt(O){return Math.min(l.maxSamples,O.samples)}function ve(O){const T=s.get(O);return O.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function Kt(O){const T=h.render.frame;g.get(O)!==T&&(g.set(O,T),O.update())}function se(O,T){const et=O.colorSpace,ht=O.format,mt=O.type;return O.isCompressedTexture===!0||O.isVideoTexture===!0||et!==Rr&&et!==Va&&(Ce.getTransfer(et)===Be?(ht!==vi||mt!==ra)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",et)),T}function Ke(O){return typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement?(p.width=O.naturalWidth||O.width,p.height=O.naturalHeight||O.height):typeof VideoFrame<"u"&&O instanceof VideoFrame?(p.width=O.displayWidth,p.height=O.displayHeight):(p.width=O.width,p.height=O.height),p}this.allocateTextureUnit=rt,this.resetTextureUnits=lt,this.setTexture2D=ft,this.setTexture2DArray=N,this.setTexture3D=Y,this.setTextureCube=X,this.rebindTextures=Ee,this.setupRenderTarget=_e,this.updateRenderTargetMipmap=B,this.updateMultisampleRenderTarget=de,this.setupDepthRenderbuffer=ye,this.setupFrameBufferTexture=Rt,this.useMultisampledRTT=ve}function hA(r,t){function i(s,l=Va){let u;const h=Ce.getTransfer(l);if(s===ra)return r.UNSIGNED_BYTE;if(s===_d)return r.UNSIGNED_SHORT_4_4_4_4;if(s===vd)return r.UNSIGNED_SHORT_5_5_5_1;if(s===_0)return r.UNSIGNED_INT_5_9_9_9_REV;if(s===m0)return r.BYTE;if(s===g0)return r.SHORT;if(s===Oo)return r.UNSIGNED_SHORT;if(s===gd)return r.INT;if(s===Es)return r.UNSIGNED_INT;if(s===ea)return r.FLOAT;if(s===Bo)return r.HALF_FLOAT;if(s===v0)return r.ALPHA;if(s===x0)return r.RGB;if(s===vi)return r.RGBA;if(s===zo)return r.DEPTH_COMPONENT;if(s===Io)return r.DEPTH_STENCIL;if(s===S0)return r.RED;if(s===xd)return r.RED_INTEGER;if(s===y0)return r.RG;if(s===Sd)return r.RG_INTEGER;if(s===yd)return r.RGBA_INTEGER;if(s===bc||s===Ac||s===Rc||s===Cc)if(h===Be)if(u=t.get("WEBGL_compressed_texture_s3tc_srgb"),u!==null){if(s===bc)return u.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Ac)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Rc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Cc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(u=t.get("WEBGL_compressed_texture_s3tc"),u!==null){if(s===bc)return u.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Ac)return u.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Rc)return u.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Cc)return u.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Hh||s===Gh||s===Vh||s===kh)if(u=t.get("WEBGL_compressed_texture_pvrtc"),u!==null){if(s===Hh)return u.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Gh)return u.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Vh)return u.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===kh)return u.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Xh||s===Wh||s===Yh)if(u=t.get("WEBGL_compressed_texture_etc"),u!==null){if(s===Xh||s===Wh)return h===Be?u.COMPRESSED_SRGB8_ETC2:u.COMPRESSED_RGB8_ETC2;if(s===Yh)return h===Be?u.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:u.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===qh||s===jh||s===Zh||s===Kh||s===Qh||s===Jh||s===$h||s===td||s===ed||s===nd||s===id||s===ad||s===sd||s===rd)if(u=t.get("WEBGL_compressed_texture_astc"),u!==null){if(s===qh)return h===Be?u.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:u.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===jh)return h===Be?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:u.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Zh)return h===Be?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:u.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Kh)return h===Be?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:u.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Qh)return h===Be?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:u.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Jh)return h===Be?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:u.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===$h)return h===Be?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:u.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===td)return h===Be?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:u.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===ed)return h===Be?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:u.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===nd)return h===Be?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:u.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===id)return h===Be?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:u.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===ad)return h===Be?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:u.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===sd)return h===Be?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:u.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===rd)return h===Be?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:u.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===wc||s===od||s===ld)if(u=t.get("EXT_texture_compression_bptc"),u!==null){if(s===wc)return h===Be?u.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:u.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===od)return u.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===ld)return u.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===M0||s===cd||s===ud||s===fd)if(u=t.get("EXT_texture_compression_rgtc"),u!==null){if(s===wc)return u.COMPRESSED_RED_RGTC1_EXT;if(s===cd)return u.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===ud)return u.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===fd)return u.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Po?r.UNSIGNED_INT_24_8:r[s]!==void 0?r[s]:null}return{convert:i}}const dA=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,pA=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class mA{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,i,s){if(this.texture===null){const l=new Xn,u=t.properties.get(l);u.__webglTexture=i.texture,(i.depthNear!==s.depthNear||i.depthFar!==s.depthFar)&&(this.depthNear=i.depthNear,this.depthFar=i.depthFar),this.texture=l}}getMesh(t){if(this.texture!==null&&this.mesh===null){const i=t.cameras[0].viewport,s=new Ya({vertexShader:dA,fragmentShader:pA,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new ia(new Fc(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class gA extends As{constructor(t,i){super();const s=this;let l=null,u=1,h=null,d="local-floor",m=1,p=null,g=null,x=null,_=null,M=null,E=null;const R=new mA,y=i.getContextAttributes();let v=null,z=null;const L=[],w=[],F=new he;let k=null;const I=new ui;I.viewport=new $e;const q=new ui;q.viewport=new $e;const D=[I,q],C=new zy;let G=null,lt=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(W){let ot=L[W];return ot===void 0&&(ot=new _h,L[W]=ot),ot.getTargetRaySpace()},this.getControllerGrip=function(W){let ot=L[W];return ot===void 0&&(ot=new _h,L[W]=ot),ot.getGripSpace()},this.getHand=function(W){let ot=L[W];return ot===void 0&&(ot=new _h,L[W]=ot),ot.getHandSpace()};function rt(W){const ot=w.indexOf(W.inputSource);if(ot===-1)return;const yt=L[ot];yt!==void 0&&(yt.update(W.inputSource,W.frame,p||h),yt.dispatchEvent({type:W.type,data:W.inputSource}))}function vt(){l.removeEventListener("select",rt),l.removeEventListener("selectstart",rt),l.removeEventListener("selectend",rt),l.removeEventListener("squeeze",rt),l.removeEventListener("squeezestart",rt),l.removeEventListener("squeezeend",rt),l.removeEventListener("end",vt),l.removeEventListener("inputsourceschange",ft);for(let W=0;W<L.length;W++){const ot=w[W];ot!==null&&(w[W]=null,L[W].disconnect(ot))}G=null,lt=null,R.reset(),t.setRenderTarget(v),M=null,_=null,x=null,l=null,z=null,St.stop(),s.isPresenting=!1,t.setPixelRatio(k),t.setSize(F.width,F.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(W){u=W,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(W){d=W,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||h},this.setReferenceSpace=function(W){p=W},this.getBaseLayer=function(){return _!==null?_:M},this.getBinding=function(){return x},this.getFrame=function(){return E},this.getSession=function(){return l},this.setSession=async function(W){if(l=W,l!==null){if(v=t.getRenderTarget(),l.addEventListener("select",rt),l.addEventListener("selectstart",rt),l.addEventListener("selectend",rt),l.addEventListener("squeeze",rt),l.addEventListener("squeezestart",rt),l.addEventListener("squeezeend",rt),l.addEventListener("end",vt),l.addEventListener("inputsourceschange",ft),y.xrCompatible!==!0&&await i.makeXRCompatible(),k=t.getPixelRatio(),t.getSize(F),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let yt=null,At=null,Rt=null;y.depth&&(Rt=y.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,yt=y.stencil?Io:zo,At=y.stencil?Po:Es);const qt={colorFormat:i.RGBA8,depthFormat:Rt,scaleFactor:u};x=new XRWebGLBinding(l,i),_=x.createProjectionLayer(qt),l.updateRenderState({layers:[_]}),t.setPixelRatio(1),t.setSize(_.textureWidth,_.textureHeight,!1),z=new bs(_.textureWidth,_.textureHeight,{format:vi,type:ra,depthTexture:new z0(_.textureWidth,_.textureHeight,At,void 0,void 0,void 0,void 0,void 0,void 0,yt),stencilBuffer:y.stencil,colorSpace:t.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:_.ignoreDepthValues===!1,resolveStencilBuffer:_.ignoreDepthValues===!1})}else{const yt={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:u};M=new XRWebGLLayer(l,i,yt),l.updateRenderState({baseLayer:M}),t.setPixelRatio(1),t.setSize(M.framebufferWidth,M.framebufferHeight,!1),z=new bs(M.framebufferWidth,M.framebufferHeight,{format:vi,type:ra,colorSpace:t.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:M.ignoreDepthValues===!1,resolveStencilBuffer:M.ignoreDepthValues===!1})}z.isXRRenderTarget=!0,this.setFoveation(m),p=null,h=await l.requestReferenceSpace(d),St.setContext(l),St.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return R.getDepthTexture()};function ft(W){for(let ot=0;ot<W.removed.length;ot++){const yt=W.removed[ot],At=w.indexOf(yt);At>=0&&(w[At]=null,L[At].disconnect(yt))}for(let ot=0;ot<W.added.length;ot++){const yt=W.added[ot];let At=w.indexOf(yt);if(At===-1){for(let qt=0;qt<L.length;qt++)if(qt>=w.length){w.push(yt),At=qt;break}else if(w[qt]===null){w[qt]=yt,At=qt;break}if(At===-1)break}const Rt=L[At];Rt&&Rt.connect(yt)}}const N=new $,Y=new $;function X(W,ot,yt){N.setFromMatrixPosition(ot.matrixWorld),Y.setFromMatrixPosition(yt.matrixWorld);const At=N.distanceTo(Y),Rt=ot.projectionMatrix.elements,qt=yt.projectionMatrix.elements,Vt=Rt[14]/(Rt[10]-1),ye=Rt[14]/(Rt[10]+1),Ee=(Rt[9]+1)/Rt[5],_e=(Rt[9]-1)/Rt[5],B=(Rt[8]-1)/Rt[0],Sn=(qt[8]+1)/qt[0],Te=Vt*B,de=Vt*Sn,kt=At/(-B+Sn),ve=kt*-B;if(ot.matrixWorld.decompose(W.position,W.quaternion,W.scale),W.translateX(ve),W.translateZ(kt),W.matrixWorld.compose(W.position,W.quaternion,W.scale),W.matrixWorldInverse.copy(W.matrixWorld).invert(),Rt[10]===-1)W.projectionMatrix.copy(ot.projectionMatrix),W.projectionMatrixInverse.copy(ot.projectionMatrixInverse);else{const Kt=Vt+kt,se=ye+kt,Ke=Te-ve,O=de+(At-ve),T=Ee*ye/se*Kt,et=_e*ye/se*Kt;W.projectionMatrix.makePerspective(Ke,O,T,et,Kt,se),W.projectionMatrixInverse.copy(W.projectionMatrix).invert()}}function pt(W,ot){ot===null?W.matrixWorld.copy(W.matrix):W.matrixWorld.multiplyMatrices(ot.matrixWorld,W.matrix),W.matrixWorldInverse.copy(W.matrixWorld).invert()}this.updateCamera=function(W){if(l===null)return;let ot=W.near,yt=W.far;R.texture!==null&&(R.depthNear>0&&(ot=R.depthNear),R.depthFar>0&&(yt=R.depthFar)),C.near=q.near=I.near=ot,C.far=q.far=I.far=yt,(G!==C.near||lt!==C.far)&&(l.updateRenderState({depthNear:C.near,depthFar:C.far}),G=C.near,lt=C.far),I.layers.mask=W.layers.mask|2,q.layers.mask=W.layers.mask|4,C.layers.mask=I.layers.mask|q.layers.mask;const At=W.parent,Rt=C.cameras;pt(C,At);for(let qt=0;qt<Rt.length;qt++)pt(Rt[qt],At);Rt.length===2?X(C,I,q):C.projectionMatrix.copy(I.projectionMatrix),U(W,C,At)};function U(W,ot,yt){yt===null?W.matrix.copy(ot.matrixWorld):(W.matrix.copy(yt.matrixWorld),W.matrix.invert(),W.matrix.multiply(ot.matrixWorld)),W.matrix.decompose(W.position,W.quaternion,W.scale),W.updateMatrixWorld(!0),W.projectionMatrix.copy(ot.projectionMatrix),W.projectionMatrixInverse.copy(ot.projectionMatrixInverse),W.isPerspectiveCamera&&(W.fov=hd*2*Math.atan(1/W.projectionMatrix.elements[5]),W.zoom=1)}this.getCamera=function(){return C},this.getFoveation=function(){if(!(_===null&&M===null))return m},this.setFoveation=function(W){m=W,_!==null&&(_.fixedFoveation=W),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=W)},this.hasDepthSensing=function(){return R.texture!==null},this.getDepthSensingMesh=function(){return R.getMesh(C)};let J=null;function gt(W,ot){if(g=ot.getViewerPose(p||h),E=ot,g!==null){const yt=g.views;M!==null&&(t.setRenderTargetFramebuffer(z,M.framebuffer),t.setRenderTarget(z));let At=!1;yt.length!==C.cameras.length&&(C.cameras.length=0,At=!0);for(let Vt=0;Vt<yt.length;Vt++){const ye=yt[Vt];let Ee=null;if(M!==null)Ee=M.getViewport(ye);else{const B=x.getViewSubImage(_,ye);Ee=B.viewport,Vt===0&&(t.setRenderTargetTextures(z,B.colorTexture,B.depthStencilTexture),t.setRenderTarget(z))}let _e=D[Vt];_e===void 0&&(_e=new ui,_e.layers.enable(Vt),_e.viewport=new $e,D[Vt]=_e),_e.matrix.fromArray(ye.transform.matrix),_e.matrix.decompose(_e.position,_e.quaternion,_e.scale),_e.projectionMatrix.fromArray(ye.projectionMatrix),_e.projectionMatrixInverse.copy(_e.projectionMatrix).invert(),_e.viewport.set(Ee.x,Ee.y,Ee.width,Ee.height),Vt===0&&(C.matrix.copy(_e.matrix),C.matrix.decompose(C.position,C.quaternion,C.scale)),At===!0&&C.cameras.push(_e)}const Rt=l.enabledFeatures;if(Rt&&Rt.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&x){const Vt=x.getDepthInformation(yt[0]);Vt&&Vt.isValid&&Vt.texture&&R.init(t,Vt,l.renderState)}}for(let yt=0;yt<L.length;yt++){const At=w[yt],Rt=L[yt];At!==null&&Rt!==void 0&&Rt.update(At,ot,p||h)}J&&J(W,ot),ot.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:ot}),E=null}const St=new I0;St.setAnimationLoop(gt),this.setAnimationLoop=function(W){J=W},this.dispose=function(){}}}const _s=new oa,_A=new tn;function vA(r,t){function i(y,v){y.matrixAutoUpdate===!0&&y.updateMatrix(),v.value.copy(y.matrix)}function s(y,v){v.color.getRGB(y.fogColor.value,U0(r)),v.isFog?(y.fogNear.value=v.near,y.fogFar.value=v.far):v.isFogExp2&&(y.fogDensity.value=v.density)}function l(y,v,z,L,w){v.isMeshBasicMaterial||v.isMeshLambertMaterial?u(y,v):v.isMeshToonMaterial?(u(y,v),x(y,v)):v.isMeshPhongMaterial?(u(y,v),g(y,v)):v.isMeshStandardMaterial?(u(y,v),_(y,v),v.isMeshPhysicalMaterial&&M(y,v,w)):v.isMeshMatcapMaterial?(u(y,v),E(y,v)):v.isMeshDepthMaterial?u(y,v):v.isMeshDistanceMaterial?(u(y,v),R(y,v)):v.isMeshNormalMaterial?u(y,v):v.isLineBasicMaterial?(h(y,v),v.isLineDashedMaterial&&d(y,v)):v.isPointsMaterial?m(y,v,z,L):v.isSpriteMaterial?p(y,v):v.isShadowMaterial?(y.color.value.copy(v.color),y.opacity.value=v.opacity):v.isShaderMaterial&&(v.uniformsNeedUpdate=!1)}function u(y,v){y.opacity.value=v.opacity,v.color&&y.diffuse.value.copy(v.color),v.emissive&&y.emissive.value.copy(v.emissive).multiplyScalar(v.emissiveIntensity),v.map&&(y.map.value=v.map,i(v.map,y.mapTransform)),v.alphaMap&&(y.alphaMap.value=v.alphaMap,i(v.alphaMap,y.alphaMapTransform)),v.bumpMap&&(y.bumpMap.value=v.bumpMap,i(v.bumpMap,y.bumpMapTransform),y.bumpScale.value=v.bumpScale,v.side===kn&&(y.bumpScale.value*=-1)),v.normalMap&&(y.normalMap.value=v.normalMap,i(v.normalMap,y.normalMapTransform),y.normalScale.value.copy(v.normalScale),v.side===kn&&y.normalScale.value.negate()),v.displacementMap&&(y.displacementMap.value=v.displacementMap,i(v.displacementMap,y.displacementMapTransform),y.displacementScale.value=v.displacementScale,y.displacementBias.value=v.displacementBias),v.emissiveMap&&(y.emissiveMap.value=v.emissiveMap,i(v.emissiveMap,y.emissiveMapTransform)),v.specularMap&&(y.specularMap.value=v.specularMap,i(v.specularMap,y.specularMapTransform)),v.alphaTest>0&&(y.alphaTest.value=v.alphaTest);const z=t.get(v),L=z.envMap,w=z.envMapRotation;L&&(y.envMap.value=L,_s.copy(w),_s.x*=-1,_s.y*=-1,_s.z*=-1,L.isCubeTexture&&L.isRenderTargetTexture===!1&&(_s.y*=-1,_s.z*=-1),y.envMapRotation.value.setFromMatrix4(_A.makeRotationFromEuler(_s)),y.flipEnvMap.value=L.isCubeTexture&&L.isRenderTargetTexture===!1?-1:1,y.reflectivity.value=v.reflectivity,y.ior.value=v.ior,y.refractionRatio.value=v.refractionRatio),v.lightMap&&(y.lightMap.value=v.lightMap,y.lightMapIntensity.value=v.lightMapIntensity,i(v.lightMap,y.lightMapTransform)),v.aoMap&&(y.aoMap.value=v.aoMap,y.aoMapIntensity.value=v.aoMapIntensity,i(v.aoMap,y.aoMapTransform))}function h(y,v){y.diffuse.value.copy(v.color),y.opacity.value=v.opacity,v.map&&(y.map.value=v.map,i(v.map,y.mapTransform))}function d(y,v){y.dashSize.value=v.dashSize,y.totalSize.value=v.dashSize+v.gapSize,y.scale.value=v.scale}function m(y,v,z,L){y.diffuse.value.copy(v.color),y.opacity.value=v.opacity,y.size.value=v.size*z,y.scale.value=L*.5,v.map&&(y.map.value=v.map,i(v.map,y.uvTransform)),v.alphaMap&&(y.alphaMap.value=v.alphaMap,i(v.alphaMap,y.alphaMapTransform)),v.alphaTest>0&&(y.alphaTest.value=v.alphaTest)}function p(y,v){y.diffuse.value.copy(v.color),y.opacity.value=v.opacity,y.rotation.value=v.rotation,v.map&&(y.map.value=v.map,i(v.map,y.mapTransform)),v.alphaMap&&(y.alphaMap.value=v.alphaMap,i(v.alphaMap,y.alphaMapTransform)),v.alphaTest>0&&(y.alphaTest.value=v.alphaTest)}function g(y,v){y.specular.value.copy(v.specular),y.shininess.value=Math.max(v.shininess,1e-4)}function x(y,v){v.gradientMap&&(y.gradientMap.value=v.gradientMap)}function _(y,v){y.metalness.value=v.metalness,v.metalnessMap&&(y.metalnessMap.value=v.metalnessMap,i(v.metalnessMap,y.metalnessMapTransform)),y.roughness.value=v.roughness,v.roughnessMap&&(y.roughnessMap.value=v.roughnessMap,i(v.roughnessMap,y.roughnessMapTransform)),v.envMap&&(y.envMapIntensity.value=v.envMapIntensity)}function M(y,v,z){y.ior.value=v.ior,v.sheen>0&&(y.sheenColor.value.copy(v.sheenColor).multiplyScalar(v.sheen),y.sheenRoughness.value=v.sheenRoughness,v.sheenColorMap&&(y.sheenColorMap.value=v.sheenColorMap,i(v.sheenColorMap,y.sheenColorMapTransform)),v.sheenRoughnessMap&&(y.sheenRoughnessMap.value=v.sheenRoughnessMap,i(v.sheenRoughnessMap,y.sheenRoughnessMapTransform))),v.clearcoat>0&&(y.clearcoat.value=v.clearcoat,y.clearcoatRoughness.value=v.clearcoatRoughness,v.clearcoatMap&&(y.clearcoatMap.value=v.clearcoatMap,i(v.clearcoatMap,y.clearcoatMapTransform)),v.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=v.clearcoatRoughnessMap,i(v.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),v.clearcoatNormalMap&&(y.clearcoatNormalMap.value=v.clearcoatNormalMap,i(v.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(v.clearcoatNormalScale),v.side===kn&&y.clearcoatNormalScale.value.negate())),v.dispersion>0&&(y.dispersion.value=v.dispersion),v.iridescence>0&&(y.iridescence.value=v.iridescence,y.iridescenceIOR.value=v.iridescenceIOR,y.iridescenceThicknessMinimum.value=v.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=v.iridescenceThicknessRange[1],v.iridescenceMap&&(y.iridescenceMap.value=v.iridescenceMap,i(v.iridescenceMap,y.iridescenceMapTransform)),v.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=v.iridescenceThicknessMap,i(v.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),v.transmission>0&&(y.transmission.value=v.transmission,y.transmissionSamplerMap.value=z.texture,y.transmissionSamplerSize.value.set(z.width,z.height),v.transmissionMap&&(y.transmissionMap.value=v.transmissionMap,i(v.transmissionMap,y.transmissionMapTransform)),y.thickness.value=v.thickness,v.thicknessMap&&(y.thicknessMap.value=v.thicknessMap,i(v.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=v.attenuationDistance,y.attenuationColor.value.copy(v.attenuationColor)),v.anisotropy>0&&(y.anisotropyVector.value.set(v.anisotropy*Math.cos(v.anisotropyRotation),v.anisotropy*Math.sin(v.anisotropyRotation)),v.anisotropyMap&&(y.anisotropyMap.value=v.anisotropyMap,i(v.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=v.specularIntensity,y.specularColor.value.copy(v.specularColor),v.specularColorMap&&(y.specularColorMap.value=v.specularColorMap,i(v.specularColorMap,y.specularColorMapTransform)),v.specularIntensityMap&&(y.specularIntensityMap.value=v.specularIntensityMap,i(v.specularIntensityMap,y.specularIntensityMapTransform))}function E(y,v){v.matcap&&(y.matcap.value=v.matcap)}function R(y,v){const z=t.get(v).light;y.referencePosition.value.setFromMatrixPosition(z.matrixWorld),y.nearDistance.value=z.shadow.camera.near,y.farDistance.value=z.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:l}}function xA(r,t,i,s){let l={},u={},h=[];const d=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function m(z,L){const w=L.program;s.uniformBlockBinding(z,w)}function p(z,L){let w=l[z.id];w===void 0&&(E(z),w=g(z),l[z.id]=w,z.addEventListener("dispose",y));const F=L.program;s.updateUBOMapping(z,F);const k=t.render.frame;u[z.id]!==k&&(_(z),u[z.id]=k)}function g(z){const L=x();z.__bindingPointIndex=L;const w=r.createBuffer(),F=z.__size,k=z.usage;return r.bindBuffer(r.UNIFORM_BUFFER,w),r.bufferData(r.UNIFORM_BUFFER,F,k),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,L,w),w}function x(){for(let z=0;z<d;z++)if(h.indexOf(z)===-1)return h.push(z),z;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function _(z){const L=l[z.id],w=z.uniforms,F=z.__cache;r.bindBuffer(r.UNIFORM_BUFFER,L);for(let k=0,I=w.length;k<I;k++){const q=Array.isArray(w[k])?w[k]:[w[k]];for(let D=0,C=q.length;D<C;D++){const G=q[D];if(M(G,k,D,F)===!0){const lt=G.__offset,rt=Array.isArray(G.value)?G.value:[G.value];let vt=0;for(let ft=0;ft<rt.length;ft++){const N=rt[ft],Y=R(N);typeof N=="number"||typeof N=="boolean"?(G.__data[0]=N,r.bufferSubData(r.UNIFORM_BUFFER,lt+vt,G.__data)):N.isMatrix3?(G.__data[0]=N.elements[0],G.__data[1]=N.elements[1],G.__data[2]=N.elements[2],G.__data[3]=0,G.__data[4]=N.elements[3],G.__data[5]=N.elements[4],G.__data[6]=N.elements[5],G.__data[7]=0,G.__data[8]=N.elements[6],G.__data[9]=N.elements[7],G.__data[10]=N.elements[8],G.__data[11]=0):(N.toArray(G.__data,vt),vt+=Y.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,lt,G.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function M(z,L,w,F){const k=z.value,I=L+"_"+w;if(F[I]===void 0)return typeof k=="number"||typeof k=="boolean"?F[I]=k:F[I]=k.clone(),!0;{const q=F[I];if(typeof k=="number"||typeof k=="boolean"){if(q!==k)return F[I]=k,!0}else if(q.equals(k)===!1)return q.copy(k),!0}return!1}function E(z){const L=z.uniforms;let w=0;const F=16;for(let I=0,q=L.length;I<q;I++){const D=Array.isArray(L[I])?L[I]:[L[I]];for(let C=0,G=D.length;C<G;C++){const lt=D[C],rt=Array.isArray(lt.value)?lt.value:[lt.value];for(let vt=0,ft=rt.length;vt<ft;vt++){const N=rt[vt],Y=R(N),X=w%F,pt=X%Y.boundary,U=X+pt;w+=pt,U!==0&&F-U<Y.storage&&(w+=F-U),lt.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),lt.__offset=w,w+=Y.storage}}}const k=w%F;return k>0&&(w+=F-k),z.__size=w,z.__cache={},this}function R(z){const L={boundary:0,storage:0};return typeof z=="number"||typeof z=="boolean"?(L.boundary=4,L.storage=4):z.isVector2?(L.boundary=8,L.storage=8):z.isVector3||z.isColor?(L.boundary=16,L.storage=12):z.isVector4?(L.boundary=16,L.storage=16):z.isMatrix3?(L.boundary=48,L.storage=48):z.isMatrix4?(L.boundary=64,L.storage=64):z.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",z),L}function y(z){const L=z.target;L.removeEventListener("dispose",y);const w=h.indexOf(L.__bindingPointIndex);h.splice(w,1),r.deleteBuffer(l[L.id]),delete l[L.id],delete u[L.id]}function v(){for(const z in l)r.deleteBuffer(l[z]);h=[],l={},u={}}return{bind:m,update:p,dispose:v}}class SA{constructor(t={}){const{canvas:i=JS(),context:s=null,depth:l=!0,stencil:u=!1,alpha:h=!1,antialias:d=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:x=!1,reverseDepthBuffer:_=!1}=t;this.isWebGLRenderer=!0;let M;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");M=s.getContextAttributes().alpha}else M=h;const E=new Uint32Array(4),R=new Int32Array(4);let y=null,v=null;const z=[],L=[];this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Xa,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const w=this;let F=!1;this._outputColorSpace=ci;let k=0,I=0,q=null,D=-1,C=null;const G=new $e,lt=new $e;let rt=null;const vt=new Ue(0);let ft=0,N=i.width,Y=i.height,X=1,pt=null,U=null;const J=new $e(0,0,N,Y),gt=new $e(0,0,N,Y);let St=!1;const W=new O0;let ot=!1,yt=!1;const At=new tn,Rt=new tn,qt=new $,Vt=new $e,ye={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ee=!1;function _e(){return q===null?X:1}let B=s;function Sn(A,Z){return i.getContext(A,Z)}try{const A={alpha:!0,depth:l,stencil:u,antialias:d,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:g,failIfMajorPerformanceCaveat:x};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${md}`),i.addEventListener("webglcontextlost",zt,!1),i.addEventListener("webglcontextrestored",bt,!1),i.addEventListener("webglcontextcreationerror",xt,!1),B===null){const Z="webgl2";if(B=Sn(Z,A),B===null)throw Sn(Z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let Te,de,kt,ve,Kt,se,Ke,O,T,et,ht,mt,ct,Ot,Dt,Gt,Xt,Mt,Pt,jt,Zt,Ct,ae,V;function Ut(){Te=new DT(B),Te.init(),Ct=new hA(B,Te),de=new ET(B,Te,t,Ct),kt=new uA(B,Te),de.reverseDepthBuffer&&_&&kt.buffers.depth.setReversed(!0),ve=new NT(B),Kt=new Qb,se=new fA(B,Te,kt,Kt,de,Ct,ve),Ke=new bT(w),O=new wT(w),T=new Fy(B),ae=new yT(B,T),et=new UT(B,T,ve,ae),ht=new PT(B,et,T,ve),Pt=new OT(B,de,se),Gt=new TT(Kt),mt=new Kb(w,Ke,O,Te,de,ae,Gt),ct=new vA(w,Kt),Ot=new $b,Dt=new sA(Te),Mt=new ST(w,Ke,O,kt,ht,M,m),Xt=new lA(w,ht,de),V=new xA(B,ve,de,kt),jt=new MT(B,Te,ve),Zt=new LT(B,Te,ve),ve.programs=mt.programs,w.capabilities=de,w.extensions=Te,w.properties=Kt,w.renderLists=Ot,w.shadowMap=Xt,w.state=kt,w.info=ve}Ut();const Et=new gA(w,B);this.xr=Et,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){const A=Te.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=Te.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return X},this.setPixelRatio=function(A){A!==void 0&&(X=A,this.setSize(N,Y,!1))},this.getSize=function(A){return A.set(N,Y)},this.setSize=function(A,Z,at=!0){if(Et.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}N=A,Y=Z,i.width=Math.floor(A*X),i.height=Math.floor(Z*X),at===!0&&(i.style.width=A+"px",i.style.height=Z+"px"),this.setViewport(0,0,A,Z)},this.getDrawingBufferSize=function(A){return A.set(N*X,Y*X).floor()},this.setDrawingBufferSize=function(A,Z,at){N=A,Y=Z,X=at,i.width=Math.floor(A*at),i.height=Math.floor(Z*at),this.setViewport(0,0,A,Z)},this.getCurrentViewport=function(A){return A.copy(G)},this.getViewport=function(A){return A.copy(J)},this.setViewport=function(A,Z,at,st){A.isVector4?J.set(A.x,A.y,A.z,A.w):J.set(A,Z,at,st),kt.viewport(G.copy(J).multiplyScalar(X).round())},this.getScissor=function(A){return A.copy(gt)},this.setScissor=function(A,Z,at,st){A.isVector4?gt.set(A.x,A.y,A.z,A.w):gt.set(A,Z,at,st),kt.scissor(lt.copy(gt).multiplyScalar(X).round())},this.getScissorTest=function(){return St},this.setScissorTest=function(A){kt.setScissorTest(St=A)},this.setOpaqueSort=function(A){pt=A},this.setTransparentSort=function(A){U=A},this.getClearColor=function(A){return A.copy(Mt.getClearColor())},this.setClearColor=function(){Mt.setClearColor(...arguments)},this.getClearAlpha=function(){return Mt.getClearAlpha()},this.setClearAlpha=function(){Mt.setClearAlpha(...arguments)},this.clear=function(A=!0,Z=!0,at=!0){let st=0;if(A){let K=!1;if(q!==null){const Tt=q.texture.format;K=Tt===yd||Tt===Sd||Tt===xd}if(K){const Tt=q.texture.type,wt=Tt===ra||Tt===Es||Tt===Oo||Tt===Po||Tt===_d||Tt===vd,Nt=Mt.getClearColor(),It=Mt.getClearAlpha(),te=Nt.r,Qt=Nt.g,Wt=Nt.b;wt?(E[0]=te,E[1]=Qt,E[2]=Wt,E[3]=It,B.clearBufferuiv(B.COLOR,0,E)):(R[0]=te,R[1]=Qt,R[2]=Wt,R[3]=It,B.clearBufferiv(B.COLOR,0,R))}else st|=B.COLOR_BUFFER_BIT}Z&&(st|=B.DEPTH_BUFFER_BIT),at&&(st|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),B.clear(st)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",zt,!1),i.removeEventListener("webglcontextrestored",bt,!1),i.removeEventListener("webglcontextcreationerror",xt,!1),Mt.dispose(),Ot.dispose(),Dt.dispose(),Kt.dispose(),Ke.dispose(),O.dispose(),ht.dispose(),ae.dispose(),V.dispose(),mt.dispose(),Et.dispose(),Et.removeEventListener("sessionstart",rn),Et.removeEventListener("sessionend",yn),zn.stop()};function zt(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),F=!0}function bt(){console.log("THREE.WebGLRenderer: Context Restored."),F=!1;const A=ve.autoReset,Z=Xt.enabled,at=Xt.autoUpdate,st=Xt.needsUpdate,K=Xt.type;Ut(),ve.autoReset=A,Xt.enabled=Z,Xt.autoUpdate=at,Xt.needsUpdate=st,Xt.type=K}function xt(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function Bt(A){const Z=A.target;Z.removeEventListener("dispose",Bt),ie(Z)}function ie(A){Le(A),Kt.remove(A)}function Le(A){const Z=Kt.get(A).programs;Z!==void 0&&(Z.forEach(function(at){mt.releaseProgram(at)}),A.isShaderMaterial&&mt.releaseShaderCache(A))}this.renderBufferDirect=function(A,Z,at,st,K,Tt){Z===null&&(Z=ye);const wt=K.isMesh&&K.matrixWorld.determinant()<0,Nt=Za(A,Z,at,st,K);kt.setMaterial(st,wt);let It=at.index,te=1;if(st.wireframe===!0){if(It=et.getWireframeAttribute(at),It===void 0)return;te=2}const Qt=at.drawRange,Wt=at.attributes.position;let ce=Qt.start*te,we=(Qt.start+Qt.count)*te;Tt!==null&&(ce=Math.max(ce,Tt.start*te),we=Math.min(we,(Tt.start+Tt.count)*te)),It!==null?(ce=Math.max(ce,0),we=Math.min(we,It.count)):Wt!=null&&(ce=Math.max(ce,0),we=Math.min(we,Wt.count));const Ve=we-ce;if(Ve<0||Ve===1/0)return;ae.setup(K,st,Nt,at,It);let xe,Se=jt;if(It!==null&&(xe=T.get(It),Se=Zt,Se.setIndex(xe)),K.isMesh)st.wireframe===!0?(kt.setLineWidth(st.wireframeLinewidth*_e()),Se.setMode(B.LINES)):Se.setMode(B.TRIANGLES);else if(K.isLine){let Jt=st.linewidth;Jt===void 0&&(Jt=1),kt.setLineWidth(Jt*_e()),K.isLineSegments?Se.setMode(B.LINES):K.isLineLoop?Se.setMode(B.LINE_LOOP):Se.setMode(B.LINE_STRIP)}else K.isPoints?Se.setMode(B.POINTS):K.isSprite&&Se.setMode(B.TRIANGLES);if(K.isBatchedMesh)if(K._multiDrawInstances!==null)Mr("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Se.renderMultiDrawInstances(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount,K._multiDrawInstances);else if(Te.get("WEBGL_multi_draw"))Se.renderMultiDraw(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount);else{const Jt=K._multiDrawStarts,qe=K._multiDrawCounts,be=K._multiDrawCount,An=It?T.get(It).bytesPerElement:1,ha=Kt.get(st).currentProgram.getUniforms();for(let ke=0;ke<be;ke++)ha.setValue(B,"_gl_DrawID",ke),Se.render(Jt[ke]/An,qe[ke])}else if(K.isInstancedMesh)Se.renderInstances(ce,Ve,K.count);else if(at.isInstancedBufferGeometry){const Jt=at._maxInstanceCount!==void 0?at._maxInstanceCount:1/0,qe=Math.min(at.instanceCount,Jt);Se.renderInstances(ce,Ve,qe)}else Se.render(ce,Ve)};function Ae(A,Z,at){A.transparent===!0&&A.side===ta&&A.forceSinglePass===!1?(A.side=kn,A.needsUpdate=!0,ua(A,Z,at),A.side=Wa,A.needsUpdate=!0,ua(A,Z,at),A.side=ta):ua(A,Z,at)}this.compile=function(A,Z,at=null){at===null&&(at=A),v=Dt.get(at),v.init(Z),L.push(v),at.traverseVisible(function(K){K.isLight&&K.layers.test(Z.layers)&&(v.pushLight(K),K.castShadow&&v.pushShadow(K))}),A!==at&&A.traverseVisible(function(K){K.isLight&&K.layers.test(Z.layers)&&(v.pushLight(K),K.castShadow&&v.pushShadow(K))}),v.setupLights();const st=new Set;return A.traverse(function(K){if(!(K.isMesh||K.isPoints||K.isLine||K.isSprite))return;const Tt=K.material;if(Tt)if(Array.isArray(Tt))for(let wt=0;wt<Tt.length;wt++){const Nt=Tt[wt];Ae(Nt,at,K),st.add(Nt)}else Ae(Tt,at,K),st.add(Tt)}),v=L.pop(),st},this.compileAsync=function(A,Z,at=null){const st=this.compile(A,Z,at);return new Promise(K=>{function Tt(){if(st.forEach(function(wt){Kt.get(wt).currentProgram.isReady()&&st.delete(wt)}),st.size===0){K(A);return}setTimeout(Tt,10)}Te.get("KHR_parallel_shader_compile")!==null?Tt():setTimeout(Tt,10)})};let Wn=null;function pn(A){Wn&&Wn(A)}function rn(){zn.stop()}function yn(){zn.start()}const zn=new I0;zn.setAnimationLoop(pn),typeof self<"u"&&zn.setContext(self),this.setAnimationLoop=function(A){Wn=A,Et.setAnimationLoop(A),A===null?zn.stop():zn.start()},Et.addEventListener("sessionstart",rn),Et.addEventListener("sessionend",yn),this.render=function(A,Z){if(Z!==void 0&&Z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(F===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),Z.parent===null&&Z.matrixWorldAutoUpdate===!0&&Z.updateMatrixWorld(),Et.enabled===!0&&Et.isPresenting===!0&&(Et.cameraAutoUpdate===!0&&Et.updateCamera(Z),Z=Et.getCamera()),A.isScene===!0&&A.onBeforeRender(w,A,Z,q),v=Dt.get(A,L.length),v.init(Z),L.push(v),Rt.multiplyMatrices(Z.projectionMatrix,Z.matrixWorldInverse),W.setFromProjectionMatrix(Rt),yt=this.localClippingEnabled,ot=Gt.init(this.clippingPlanes,yt),y=Ot.get(A,z.length),y.init(),z.push(y),Et.enabled===!0&&Et.isPresenting===!0){const Tt=w.xr.getDepthSensingMesh();Tt!==null&&qa(Tt,Z,-1/0,w.sortObjects)}qa(A,Z,0,w.sortObjects),y.finish(),w.sortObjects===!0&&y.sort(pt,U),Ee=Et.enabled===!1||Et.isPresenting===!1||Et.hasDepthSensing()===!1,Ee&&Mt.addToRenderList(y,A),this.info.render.frame++,ot===!0&&Gt.beginShadows();const at=v.state.shadowsArray;Xt.render(at,A,Z),ot===!0&&Gt.endShadows(),this.info.autoReset===!0&&this.info.reset();const st=y.opaque,K=y.transmissive;if(v.setupLights(),Z.isArrayCamera){const Tt=Z.cameras;if(K.length>0)for(let wt=0,Nt=Tt.length;wt<Nt;wt++){const It=Tt[wt];Xo(st,K,A,It)}Ee&&Mt.render(A);for(let wt=0,Nt=Tt.length;wt<Nt;wt++){const It=Tt[wt];ko(y,A,It,It.viewport)}}else K.length>0&&Xo(st,K,A,Z),Ee&&Mt.render(A),ko(y,A,Z);q!==null&&I===0&&(se.updateMultisampleRenderTarget(q),se.updateRenderTargetMipmap(q)),A.isScene===!0&&A.onAfterRender(w,A,Z),ae.resetDefaultState(),D=-1,C=null,L.pop(),L.length>0?(v=L[L.length-1],ot===!0&&Gt.setGlobalState(w.clippingPlanes,v.state.camera)):v=null,z.pop(),z.length>0?y=z[z.length-1]:y=null};function qa(A,Z,at,st){if(A.visible===!1)return;if(A.layers.test(Z.layers)){if(A.isGroup)at=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(Z);else if(A.isLight)v.pushLight(A),A.castShadow&&v.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||W.intersectsSprite(A)){st&&Vt.setFromMatrixPosition(A.matrixWorld).applyMatrix4(Rt);const wt=ht.update(A),Nt=A.material;Nt.visible&&y.push(A,wt,Nt,at,Vt.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||W.intersectsObject(A))){const wt=ht.update(A),Nt=A.material;if(st&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Vt.copy(A.boundingSphere.center)):(wt.boundingSphere===null&&wt.computeBoundingSphere(),Vt.copy(wt.boundingSphere.center)),Vt.applyMatrix4(A.matrixWorld).applyMatrix4(Rt)),Array.isArray(Nt)){const It=wt.groups;for(let te=0,Qt=It.length;te<Qt;te++){const Wt=It[te],ce=Nt[Wt.materialIndex];ce&&ce.visible&&y.push(A,wt,ce,at,Vt.z,Wt)}}else Nt.visible&&y.push(A,wt,Nt,at,Vt.z,null)}}const Tt=A.children;for(let wt=0,Nt=Tt.length;wt<Nt;wt++)qa(Tt[wt],Z,at,st)}function ko(A,Z,at,st){const K=A.opaque,Tt=A.transmissive,wt=A.transparent;v.setupLightsView(at),ot===!0&&Gt.setGlobalState(w.clippingPlanes,at),st&&kt.viewport(G.copy(st)),K.length>0&&ja(K,Z,at),Tt.length>0&&ja(Tt,Z,at),wt.length>0&&ja(wt,Z,at),kt.buffers.depth.setTest(!0),kt.buffers.depth.setMask(!0),kt.buffers.color.setMask(!0),kt.setPolygonOffset(!1)}function Xo(A,Z,at,st){if((at.isScene===!0?at.overrideMaterial:null)!==null)return;v.state.transmissionRenderTarget[st.id]===void 0&&(v.state.transmissionRenderTarget[st.id]=new bs(1,1,{generateMipmaps:!0,type:Te.has("EXT_color_buffer_half_float")||Te.has("EXT_color_buffer_float")?Bo:ra,minFilter:Ms,samples:4,stencilBuffer:u,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ce.workingColorSpace}));const Tt=v.state.transmissionRenderTarget[st.id],wt=st.viewport||G;Tt.setSize(wt.z*w.transmissionResolutionScale,wt.w*w.transmissionResolutionScale);const Nt=w.getRenderTarget();w.setRenderTarget(Tt),w.getClearColor(vt),ft=w.getClearAlpha(),ft<1&&w.setClearColor(16777215,.5),w.clear(),Ee&&Mt.render(at);const It=w.toneMapping;w.toneMapping=Xa;const te=st.viewport;if(st.viewport!==void 0&&(st.viewport=void 0),v.setupLightsView(st),ot===!0&&Gt.setGlobalState(w.clippingPlanes,st),ja(A,at,st),se.updateMultisampleRenderTarget(Tt),se.updateRenderTargetMipmap(Tt),Te.has("WEBGL_multisampled_render_to_texture")===!1){let Qt=!1;for(let Wt=0,ce=Z.length;Wt<ce;Wt++){const we=Z[Wt],Ve=we.object,xe=we.geometry,Se=we.material,Jt=we.group;if(Se.side===ta&&Ve.layers.test(st.layers)){const qe=Se.side;Se.side=kn,Se.needsUpdate=!0,ca(Ve,at,st,xe,Se,Jt),Se.side=qe,Se.needsUpdate=!0,Qt=!0}}Qt===!0&&(se.updateMultisampleRenderTarget(Tt),se.updateRenderTargetMipmap(Tt))}w.setRenderTarget(Nt),w.setClearColor(vt,ft),te!==void 0&&(st.viewport=te),w.toneMapping=It}function ja(A,Z,at){const st=Z.isScene===!0?Z.overrideMaterial:null;for(let K=0,Tt=A.length;K<Tt;K++){const wt=A[K],Nt=wt.object,It=wt.geometry,te=wt.group;let Qt=wt.material;Qt.allowOverride===!0&&st!==null&&(Qt=st),Nt.layers.test(at.layers)&&ca(Nt,Z,at,It,Qt,te)}}function ca(A,Z,at,st,K,Tt){A.onBeforeRender(w,Z,at,st,K,Tt),A.modelViewMatrix.multiplyMatrices(at.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),K.onBeforeRender(w,Z,at,st,A,Tt),K.transparent===!0&&K.side===ta&&K.forceSinglePass===!1?(K.side=kn,K.needsUpdate=!0,w.renderBufferDirect(at,Z,st,K,A,Tt),K.side=Wa,K.needsUpdate=!0,w.renderBufferDirect(at,Z,st,K,A,Tt),K.side=ta):w.renderBufferDirect(at,Z,st,K,A,Tt),A.onAfterRender(w,Z,at,st,K,Tt)}function ua(A,Z,at){Z.isScene!==!0&&(Z=ye);const st=Kt.get(A),K=v.state.lights,Tt=v.state.shadowsArray,wt=K.state.version,Nt=mt.getParameters(A,K.state,Tt,Z,at),It=mt.getProgramCacheKey(Nt);let te=st.programs;st.environment=A.isMeshStandardMaterial?Z.environment:null,st.fog=Z.fog,st.envMap=(A.isMeshStandardMaterial?O:Ke).get(A.envMap||st.environment),st.envMapRotation=st.environment!==null&&A.envMap===null?Z.environmentRotation:A.envMapRotation,te===void 0&&(A.addEventListener("dispose",Bt),te=new Map,st.programs=te);let Qt=te.get(It);if(Qt!==void 0){if(st.currentProgram===Qt&&st.lightsStateVersion===wt)return Di(A,Nt),Qt}else Nt.uniforms=mt.getUniforms(A),A.onBeforeCompile(Nt,w),Qt=mt.acquireProgram(Nt,It),te.set(It,Qt),st.uniforms=Nt.uniforms;const Wt=st.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Wt.clippingPlanes=Gt.uniform),Di(A,Nt),st.needsLights=en(A),st.lightsStateVersion=wt,st.needsLights&&(Wt.ambientLightColor.value=K.state.ambient,Wt.lightProbe.value=K.state.probe,Wt.directionalLights.value=K.state.directional,Wt.directionalLightShadows.value=K.state.directionalShadow,Wt.spotLights.value=K.state.spot,Wt.spotLightShadows.value=K.state.spotShadow,Wt.rectAreaLights.value=K.state.rectArea,Wt.ltc_1.value=K.state.rectAreaLTC1,Wt.ltc_2.value=K.state.rectAreaLTC2,Wt.pointLights.value=K.state.point,Wt.pointLightShadows.value=K.state.pointShadow,Wt.hemisphereLights.value=K.state.hemi,Wt.directionalShadowMap.value=K.state.directionalShadowMap,Wt.directionalShadowMatrix.value=K.state.directionalShadowMatrix,Wt.spotShadowMap.value=K.state.spotShadowMap,Wt.spotLightMatrix.value=K.state.spotLightMatrix,Wt.spotLightMap.value=K.state.spotLightMap,Wt.pointShadowMap.value=K.state.pointShadowMap,Wt.pointShadowMatrix.value=K.state.pointShadowMatrix),st.currentProgram=Qt,st.uniformsList=null,Qt}function wi(A){if(A.uniformsList===null){const Z=A.currentProgram.getUniforms();A.uniformsList=Uc.seqWithValue(Z.seq,A.uniforms)}return A.uniformsList}function Di(A,Z){const at=Kt.get(A);at.outputColorSpace=Z.outputColorSpace,at.batching=Z.batching,at.batchingColor=Z.batchingColor,at.instancing=Z.instancing,at.instancingColor=Z.instancingColor,at.instancingMorph=Z.instancingMorph,at.skinning=Z.skinning,at.morphTargets=Z.morphTargets,at.morphNormals=Z.morphNormals,at.morphColors=Z.morphColors,at.morphTargetsCount=Z.morphTargetsCount,at.numClippingPlanes=Z.numClippingPlanes,at.numIntersection=Z.numClipIntersection,at.vertexAlphas=Z.vertexAlphas,at.vertexTangents=Z.vertexTangents,at.toneMapping=Z.toneMapping}function Za(A,Z,at,st,K){Z.isScene!==!0&&(Z=ye),se.resetTextureUnits();const Tt=Z.fog,wt=st.isMeshStandardMaterial?Z.environment:null,Nt=q===null?w.outputColorSpace:q.isXRRenderTarget===!0?q.texture.colorSpace:Rr,It=(st.isMeshStandardMaterial?O:Ke).get(st.envMap||wt),te=st.vertexColors===!0&&!!at.attributes.color&&at.attributes.color.itemSize===4,Qt=!!at.attributes.tangent&&(!!st.normalMap||st.anisotropy>0),Wt=!!at.morphAttributes.position,ce=!!at.morphAttributes.normal,we=!!at.morphAttributes.color;let Ve=Xa;st.toneMapped&&(q===null||q.isXRRenderTarget===!0)&&(Ve=w.toneMapping);const xe=at.morphAttributes.position||at.morphAttributes.normal||at.morphAttributes.color,Se=xe!==void 0?xe.length:0,Jt=Kt.get(st),qe=v.state.lights;if(ot===!0&&(yt===!0||A!==C)){const mn=A===C&&st.id===D;Gt.setState(st,A,mn)}let be=!1;st.version===Jt.__version?(Jt.needsLights&&Jt.lightsStateVersion!==qe.state.version||Jt.outputColorSpace!==Nt||K.isBatchedMesh&&Jt.batching===!1||!K.isBatchedMesh&&Jt.batching===!0||K.isBatchedMesh&&Jt.batchingColor===!0&&K.colorTexture===null||K.isBatchedMesh&&Jt.batchingColor===!1&&K.colorTexture!==null||K.isInstancedMesh&&Jt.instancing===!1||!K.isInstancedMesh&&Jt.instancing===!0||K.isSkinnedMesh&&Jt.skinning===!1||!K.isSkinnedMesh&&Jt.skinning===!0||K.isInstancedMesh&&Jt.instancingColor===!0&&K.instanceColor===null||K.isInstancedMesh&&Jt.instancingColor===!1&&K.instanceColor!==null||K.isInstancedMesh&&Jt.instancingMorph===!0&&K.morphTexture===null||K.isInstancedMesh&&Jt.instancingMorph===!1&&K.morphTexture!==null||Jt.envMap!==It||st.fog===!0&&Jt.fog!==Tt||Jt.numClippingPlanes!==void 0&&(Jt.numClippingPlanes!==Gt.numPlanes||Jt.numIntersection!==Gt.numIntersection)||Jt.vertexAlphas!==te||Jt.vertexTangents!==Qt||Jt.morphTargets!==Wt||Jt.morphNormals!==ce||Jt.morphColors!==we||Jt.toneMapping!==Ve||Jt.morphTargetsCount!==Se)&&(be=!0):(be=!0,Jt.__version=st.version);let An=Jt.currentProgram;be===!0&&(An=ua(st,Z,K));let ha=!1,ke=!1,Li=!1;const He=An.getUniforms(),Rn=Jt.uniforms;if(kt.useProgram(An.program)&&(ha=!0,ke=!0,Li=!0),st.id!==D&&(D=st.id,ke=!0),ha||C!==A){kt.buffers.depth.getReversed()?(At.copy(A.projectionMatrix),ty(At),ey(At),He.setValue(B,"projectionMatrix",At)):He.setValue(B,"projectionMatrix",A.projectionMatrix),He.setValue(B,"viewMatrix",A.matrixWorldInverse);const Mn=He.map.cameraPosition;Mn!==void 0&&Mn.setValue(B,qt.setFromMatrixPosition(A.matrixWorld)),de.logarithmicDepthBuffer&&He.setValue(B,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(st.isMeshPhongMaterial||st.isMeshToonMaterial||st.isMeshLambertMaterial||st.isMeshBasicMaterial||st.isMeshStandardMaterial||st.isShaderMaterial)&&He.setValue(B,"isOrthographic",A.isOrthographicCamera===!0),C!==A&&(C=A,ke=!0,Li=!0)}if(K.isSkinnedMesh){He.setOptional(B,K,"bindMatrix"),He.setOptional(B,K,"bindMatrixInverse");const mn=K.skeleton;mn&&(mn.boneTexture===null&&mn.computeBoneTexture(),He.setValue(B,"boneTexture",mn.boneTexture,se))}K.isBatchedMesh&&(He.setOptional(B,K,"batchingTexture"),He.setValue(B,"batchingTexture",K._matricesTexture,se),He.setOptional(B,K,"batchingIdTexture"),He.setValue(B,"batchingIdTexture",K._indirectTexture,se),He.setOptional(B,K,"batchingColorTexture"),K._colorsTexture!==null&&He.setValue(B,"batchingColorTexture",K._colorsTexture,se));const on=at.morphAttributes;if((on.position!==void 0||on.normal!==void 0||on.color!==void 0)&&Pt.update(K,at,An),(ke||Jt.receiveShadow!==K.receiveShadow)&&(Jt.receiveShadow=K.receiveShadow,He.setValue(B,"receiveShadow",K.receiveShadow)),st.isMeshGouraudMaterial&&st.envMap!==null&&(Rn.envMap.value=It,Rn.flipEnvMap.value=It.isCubeTexture&&It.isRenderTargetTexture===!1?-1:1),st.isMeshStandardMaterial&&st.envMap===null&&Z.environment!==null&&(Rn.envMapIntensity.value=Z.environmentIntensity),ke&&(He.setValue(B,"toneMappingExposure",w.toneMappingExposure),Jt.needsLights&&fa(Rn,Li),Tt&&st.fog===!0&&ct.refreshFogUniforms(Rn,Tt),ct.refreshMaterialUniforms(Rn,st,X,Y,v.state.transmissionRenderTarget[A.id]),Uc.upload(B,wi(Jt),Rn,se)),st.isShaderMaterial&&st.uniformsNeedUpdate===!0&&(Uc.upload(B,wi(Jt),Rn,se),st.uniformsNeedUpdate=!1),st.isSpriteMaterial&&He.setValue(B,"center",K.center),He.setValue(B,"modelViewMatrix",K.modelViewMatrix),He.setValue(B,"normalMatrix",K.normalMatrix),He.setValue(B,"modelMatrix",K.matrixWorld),st.isShaderMaterial||st.isRawShaderMaterial){const mn=st.uniformsGroups;for(let Mn=0,yi=mn.length;Mn<yi;Mn++){const Ni=mn[Mn];V.update(Ni,An),V.bind(Ni,An)}}return An}function fa(A,Z){A.ambientLightColor.needsUpdate=Z,A.lightProbe.needsUpdate=Z,A.directionalLights.needsUpdate=Z,A.directionalLightShadows.needsUpdate=Z,A.pointLights.needsUpdate=Z,A.pointLightShadows.needsUpdate=Z,A.spotLights.needsUpdate=Z,A.spotLightShadows.needsUpdate=Z,A.rectAreaLights.needsUpdate=Z,A.hemisphereLights.needsUpdate=Z}function en(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return k},this.getActiveMipmapLevel=function(){return I},this.getRenderTarget=function(){return q},this.setRenderTargetTextures=function(A,Z,at){const st=Kt.get(A);st.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,st.__autoAllocateDepthBuffer===!1&&(st.__useRenderToTexture=!1),Kt.get(A.texture).__webglTexture=Z,Kt.get(A.depthTexture).__webglTexture=st.__autoAllocateDepthBuffer?void 0:at,st.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,Z){const at=Kt.get(A);at.__webglFramebuffer=Z,at.__useDefaultFramebuffer=Z===void 0};const Wo=B.createFramebuffer();this.setRenderTarget=function(A,Z=0,at=0){q=A,k=Z,I=at;let st=!0,K=null,Tt=!1,wt=!1;if(A){const It=Kt.get(A);if(It.__useDefaultFramebuffer!==void 0)kt.bindFramebuffer(B.FRAMEBUFFER,null),st=!1;else if(It.__webglFramebuffer===void 0)se.setupRenderTarget(A);else if(It.__hasExternalTextures)se.rebindTextures(A,Kt.get(A.texture).__webglTexture,Kt.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const Wt=A.depthTexture;if(It.__boundDepthTexture!==Wt){if(Wt!==null&&Kt.has(Wt)&&(A.width!==Wt.image.width||A.height!==Wt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");se.setupDepthRenderbuffer(A)}}const te=A.texture;(te.isData3DTexture||te.isDataArrayTexture||te.isCompressedArrayTexture)&&(wt=!0);const Qt=Kt.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Qt[Z])?K=Qt[Z][at]:K=Qt[Z],Tt=!0):A.samples>0&&se.useMultisampledRTT(A)===!1?K=Kt.get(A).__webglMultisampledFramebuffer:Array.isArray(Qt)?K=Qt[at]:K=Qt,G.copy(A.viewport),lt.copy(A.scissor),rt=A.scissorTest}else G.copy(J).multiplyScalar(X).floor(),lt.copy(gt).multiplyScalar(X).floor(),rt=St;if(at!==0&&(K=Wo),kt.bindFramebuffer(B.FRAMEBUFFER,K)&&st&&kt.drawBuffers(A,K),kt.viewport(G),kt.scissor(lt),kt.setScissorTest(rt),Tt){const It=Kt.get(A.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+Z,It.__webglTexture,at)}else if(wt){const It=Kt.get(A.texture),te=Z;B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,It.__webglTexture,at,te)}else if(A!==null&&at!==0){const It=Kt.get(A.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,It.__webglTexture,at)}D=-1},this.readRenderTargetPixels=function(A,Z,at,st,K,Tt,wt,Nt=0){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let It=Kt.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&wt!==void 0&&(It=It[wt]),It){kt.bindFramebuffer(B.FRAMEBUFFER,It);try{const te=A.textures[Nt],Qt=te.format,Wt=te.type;if(!de.textureFormatReadable(Qt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!de.textureTypeReadable(Wt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Z>=0&&Z<=A.width-st&&at>=0&&at<=A.height-K&&(A.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+Nt),B.readPixels(Z,at,st,K,Ct.convert(Qt),Ct.convert(Wt),Tt))}finally{const te=q!==null?Kt.get(q).__webglFramebuffer:null;kt.bindFramebuffer(B.FRAMEBUFFER,te)}}},this.readRenderTargetPixelsAsync=async function(A,Z,at,st,K,Tt,wt,Nt=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let It=Kt.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&wt!==void 0&&(It=It[wt]),It)if(Z>=0&&Z<=A.width-st&&at>=0&&at<=A.height-K){kt.bindFramebuffer(B.FRAMEBUFFER,It);const te=A.textures[Nt],Qt=te.format,Wt=te.type;if(!de.textureFormatReadable(Qt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!de.textureTypeReadable(Wt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ce=B.createBuffer();B.bindBuffer(B.PIXEL_PACK_BUFFER,ce),B.bufferData(B.PIXEL_PACK_BUFFER,Tt.byteLength,B.STREAM_READ),A.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+Nt),B.readPixels(Z,at,st,K,Ct.convert(Qt),Ct.convert(Wt),0);const we=q!==null?Kt.get(q).__webglFramebuffer:null;kt.bindFramebuffer(B.FRAMEBUFFER,we);const Ve=B.fenceSync(B.SYNC_GPU_COMMANDS_COMPLETE,0);return B.flush(),await $S(B,Ve,4),B.bindBuffer(B.PIXEL_PACK_BUFFER,ce),B.getBufferSubData(B.PIXEL_PACK_BUFFER,0,Tt),B.deleteBuffer(ce),B.deleteSync(Ve),Tt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,Z=null,at=0){const st=Math.pow(2,-at),K=Math.floor(A.image.width*st),Tt=Math.floor(A.image.height*st),wt=Z!==null?Z.x:0,Nt=Z!==null?Z.y:0;se.setTexture2D(A,0),B.copyTexSubImage2D(B.TEXTURE_2D,at,0,0,wt,Nt,K,Tt),kt.unbindTexture()};const Yo=B.createFramebuffer(),Ui=B.createFramebuffer();this.copyTextureToTexture=function(A,Z,at=null,st=null,K=0,Tt=null){Tt===null&&(K!==0?(Mr("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Tt=K,K=0):Tt=0);let wt,Nt,It,te,Qt,Wt,ce,we,Ve;const xe=A.isCompressedTexture?A.mipmaps[Tt]:A.image;if(at!==null)wt=at.max.x-at.min.x,Nt=at.max.y-at.min.y,It=at.isBox3?at.max.z-at.min.z:1,te=at.min.x,Qt=at.min.y,Wt=at.isBox3?at.min.z:0;else{const on=Math.pow(2,-K);wt=Math.floor(xe.width*on),Nt=Math.floor(xe.height*on),A.isDataArrayTexture?It=xe.depth:A.isData3DTexture?It=Math.floor(xe.depth*on):It=1,te=0,Qt=0,Wt=0}st!==null?(ce=st.x,we=st.y,Ve=st.z):(ce=0,we=0,Ve=0);const Se=Ct.convert(Z.format),Jt=Ct.convert(Z.type);let qe;Z.isData3DTexture?(se.setTexture3D(Z,0),qe=B.TEXTURE_3D):Z.isDataArrayTexture||Z.isCompressedArrayTexture?(se.setTexture2DArray(Z,0),qe=B.TEXTURE_2D_ARRAY):(se.setTexture2D(Z,0),qe=B.TEXTURE_2D),B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,Z.flipY),B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Z.premultiplyAlpha),B.pixelStorei(B.UNPACK_ALIGNMENT,Z.unpackAlignment);const be=B.getParameter(B.UNPACK_ROW_LENGTH),An=B.getParameter(B.UNPACK_IMAGE_HEIGHT),ha=B.getParameter(B.UNPACK_SKIP_PIXELS),ke=B.getParameter(B.UNPACK_SKIP_ROWS),Li=B.getParameter(B.UNPACK_SKIP_IMAGES);B.pixelStorei(B.UNPACK_ROW_LENGTH,xe.width),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,xe.height),B.pixelStorei(B.UNPACK_SKIP_PIXELS,te),B.pixelStorei(B.UNPACK_SKIP_ROWS,Qt),B.pixelStorei(B.UNPACK_SKIP_IMAGES,Wt);const He=A.isDataArrayTexture||A.isData3DTexture,Rn=Z.isDataArrayTexture||Z.isData3DTexture;if(A.isDepthTexture){const on=Kt.get(A),mn=Kt.get(Z),Mn=Kt.get(on.__renderTarget),yi=Kt.get(mn.__renderTarget);kt.bindFramebuffer(B.READ_FRAMEBUFFER,Mn.__webglFramebuffer),kt.bindFramebuffer(B.DRAW_FRAMEBUFFER,yi.__webglFramebuffer);for(let Ni=0;Ni<It;Ni++)He&&(B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Kt.get(A).__webglTexture,K,Wt+Ni),B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Kt.get(Z).__webglTexture,Tt,Ve+Ni)),B.blitFramebuffer(te,Qt,wt,Nt,ce,we,wt,Nt,B.DEPTH_BUFFER_BIT,B.NEAREST);kt.bindFramebuffer(B.READ_FRAMEBUFFER,null),kt.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else if(K!==0||A.isRenderTargetTexture||Kt.has(A)){const on=Kt.get(A),mn=Kt.get(Z);kt.bindFramebuffer(B.READ_FRAMEBUFFER,Yo),kt.bindFramebuffer(B.DRAW_FRAMEBUFFER,Ui);for(let Mn=0;Mn<It;Mn++)He?B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,on.__webglTexture,K,Wt+Mn):B.framebufferTexture2D(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,on.__webglTexture,K),Rn?B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,mn.__webglTexture,Tt,Ve+Mn):B.framebufferTexture2D(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,mn.__webglTexture,Tt),K!==0?B.blitFramebuffer(te,Qt,wt,Nt,ce,we,wt,Nt,B.COLOR_BUFFER_BIT,B.NEAREST):Rn?B.copyTexSubImage3D(qe,Tt,ce,we,Ve+Mn,te,Qt,wt,Nt):B.copyTexSubImage2D(qe,Tt,ce,we,te,Qt,wt,Nt);kt.bindFramebuffer(B.READ_FRAMEBUFFER,null),kt.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else Rn?A.isDataTexture||A.isData3DTexture?B.texSubImage3D(qe,Tt,ce,we,Ve,wt,Nt,It,Se,Jt,xe.data):Z.isCompressedArrayTexture?B.compressedTexSubImage3D(qe,Tt,ce,we,Ve,wt,Nt,It,Se,xe.data):B.texSubImage3D(qe,Tt,ce,we,Ve,wt,Nt,It,Se,Jt,xe):A.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,Tt,ce,we,wt,Nt,Se,Jt,xe.data):A.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,Tt,ce,we,xe.width,xe.height,Se,xe.data):B.texSubImage2D(B.TEXTURE_2D,Tt,ce,we,wt,Nt,Se,Jt,xe);B.pixelStorei(B.UNPACK_ROW_LENGTH,be),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,An),B.pixelStorei(B.UNPACK_SKIP_PIXELS,ha),B.pixelStorei(B.UNPACK_SKIP_ROWS,ke),B.pixelStorei(B.UNPACK_SKIP_IMAGES,Li),Tt===0&&Z.generateMipmaps&&B.generateMipmap(qe),kt.unbindTexture()},this.copyTextureToTexture3D=function(A,Z,at=null,st=null,K=0){return Mr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(A,Z,at,st,K)},this.initRenderTarget=function(A){Kt.get(A).__webglFramebuffer===void 0&&se.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?se.setTextureCube(A,0):A.isData3DTexture?se.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?se.setTexture2DArray(A,0):se.setTexture2D(A,0),kt.unbindTexture()},this.resetState=function(){k=0,I=0,q=null,kt.reset(),ae.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return na}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const i=this.getContext();i.drawingBufferColorSpace=Ce._getDrawingBufferColorSpace(t),i.unpackColorSpace=Ce._getUnpackColorSpace()}}function c0(r){return r*r*r*(r*(r*6-15)+10)}function No(r,t,i){return r+i*(t-r)}function Mc(r,t,i){const s=r&3,l=s<2?t:i,u=s<2?i:t;return((s&1)===0?l:-l)+((s&2)===0?u:-u)}const On=new Uint8Array(512);for(let r=0;r<256;r++)On[r]=r;for(let r=0;r<256;r++){const t=Math.random()*256|0;[On[r],On[t]]=[On[t],On[r]]}for(let r=0;r<256;r++)On[r+256]=On[r];function yA(r,t){const i=Math.floor(r)&255,s=Math.floor(t)&255;r-=Math.floor(r),t-=Math.floor(t);const l=c0(r),u=c0(t),h=On[i+On[s]],d=On[i+On[s+1]],m=On[i+1+On[s]],p=On[i+1+On[s+1]];return No(No(Mc(h,r,t),Mc(m,r-1,t),l),No(Mc(d,r,t-1),Mc(p,r-1,t-1),l),u)}const MA=({className:r,parameters:t,onCameraStateChange:i,currentCameraState:s})=>{const l=fn.useRef(null),u=fn.useRef(null),h=fn.useRef(null),[d,m]=fn.useState(0),p=fn.useRef(null),g=fn.useRef(null);return fn.useEffect(()=>{if(!l.current)return;u.current=FA(l.current);const x=()=>{u.current&&(p.current?.begin(),u.current.animate(),m(u.current.renderer.info.render.calls),p.current?.end()),h.current=requestAnimationFrame(x)};x();const _=()=>{if(u.current&&l.current){const{camera:y,renderer:v}=u.current,z=l.current,L=z.clientWidth,w=z.clientHeight;y.aspect=L/w,y.updateProjectionMatrix(),v.setSize(L,w,!1);const F=v.domElement;F.style.width=`${L}px`,F.style.height=`${w}px`,F.style.maxWidth=`${L}px`,F.style.maxHeight=`${w}px`,F.style.minWidth=`${L}px`,F.style.minHeight=`${w}px`,v.render(u.current.scene,y)}};_();const M=new ResizeObserver(()=>{_()});l.current&&M.observe(l.current);let E;const R=()=>{clearTimeout(E),E=setTimeout(_,16)};return window.addEventListener("resize",R),()=>{h.current&&cancelAnimationFrame(h.current),u.current&&u.current.cleanup(),window.removeEventListener("resize",R),M.disconnect()}},[]),fn.useEffect(()=>{u.current&&s&&u.current.setCameraState(s)},[s]),fn.useEffect(()=>{if(!u.current||!i)return;const x=setInterval(()=>{if(u.current){const _=u.current.getCameraState();i(_)}},100);return()=>clearInterval(x)},[i]),fn.useEffect(()=>{if(!u.current)return;const x=u.current.scene;g.current&&(x.remove(g.current),g.current.children.forEach(N=>{"geometry"in N&&N.geometry&&N.geometry.dispose(),"material"in N&&N.material&&(Array.isArray(N.material)?N.material.forEach(Y=>Y.dispose()):N.material.dispose())}));const _=t?.gridWidth??1,M=t?.gridHeight??1,E=(t?.twistX??0)*Math.PI/180,R=(t?.twistY??0)*Math.PI/180,y=(t?.twistZ??0)*Math.PI/180,v=t?.twistNoise??0,z=t?.arcReach??0,L=3,w=_*L,F=M*L,k=M+1,I=_+1,q=[];for(let N=0;N<k;N++){const Y=[];for(let X=0;X<I;X++){const pt=X/(I-1),U=N/(k-1),J=No(-w/2,w/2,pt),gt=No(-F/2,F/2,U),St=0,W=new $(J,gt,St),ot=U,yt=E*ot,At=R*ot,Rt=y*ot;if(W.sub(new $(0,0,0)),Rt!==0){const qt=Math.cos(Rt),Vt=Math.sin(Rt),ye=W.x*qt-W.y*Vt,Ee=W.x*Vt+W.y*qt;W.x=ye,W.y=Ee}if(At!==0){const qt=Math.cos(At),Vt=Math.sin(At),ye=W.x*qt+W.z*Vt,Ee=-W.x*Vt+W.z*qt;W.x=ye,W.z=Ee}if(yt!==0){const qt=Math.cos(yt),Vt=Math.sin(yt),ye=W.y*qt-W.z*Vt,Ee=W.y*Vt+W.z*qt;W.y=ye,W.z=Ee}if(W.add(new $(0,0,0)),v>0){const qt=yA(J*.5,gt*.5);W.z+=qt*v*L*.5}Y.push(W)}q.push(Y)}const D=[];for(let N=0;N<k;N++)for(let Y=0;Y<I;Y++){if(Y<I-1){const X=q[N][Y],pt=q[N][Y+1];D.push(X.x,X.y,X.z,pt.x,pt.y,pt.z)}if(N<k-1){const X=q[N][Y],pt=q[N+1][Y];D.push(X.x,X.y,X.z,pt.x,pt.y,pt.z)}}const C=32;for(let N=0;N<k-1;N++)for(let Y=0;Y<I-1;Y++){const X=q[N][Y],pt=q[N+1][Y+1],U=q[N+1][Y],J=new $((X.x+pt.x)/2,(X.y+pt.y)/2,(X.z+pt.z)/2),gt=new $(J.x*(1-z)+U.x*z,J.y*(1-z)+U.y*z,J.z*(1-z)+U.z*z);let St=null;for(let W=0;W<=C;W++){const ot=W/C,yt=(1-ot)*(1-ot)*X.x+2*(1-ot)*ot*gt.x+ot*ot*pt.x,At=(1-ot)*(1-ot)*X.y+2*(1-ot)*ot*gt.y+ot*ot*pt.y,Rt=(1-ot)*(1-ot)*X.z+2*(1-ot)*ot*gt.z+ot*ot*pt.z,qt=new $(yt,At,Rt);St&&D.push(St.x,St.y,St.z,qt.x,qt.y,qt.z),St=qt}}const G=new Float32Array(D),lt=new la;lt.setAttribute("position",new Si(G,3));const rt=new P0({color:65433}),vt=new Dy(lt,rt),ft=new Uo;ft.add(vt),x.add(ft),g.current=ft},[t?.gridWidth,t?.gridHeight,t?.twistX,t?.twistY,t?.twistZ,t?.twistNoise,t?.arcReach]),Ht.jsxs("div",{ref:l,className:r,style:{position:"relative",overflow:"hidden",width:"100%",height:"100%"},children:[Ht.jsx(rS,{statsRef:p}),Ht.jsx(oS,{drawCalls:d})]})},EA=({onParametersChange:r,onCameraStateChange:t,currentCameraState:i})=>{const[s,l]=fn.useState({gridWidth:1,gridHeight:1,arcReach:0,twistX:0,twistY:0,twistZ:0,twistNoise:0,cameraPositionX:0,cameraPositionY:0,cameraPositionZ:5,cameraTargetX:0,cameraTargetY:0,cameraTargetZ:0}),[u,h]=fn.useState(""),[d,m]=fn.useState("");fn.useEffect(()=>{i&&l(_=>({..._,cameraPositionX:i.position.x,cameraPositionY:i.position.y,cameraPositionZ:i.position.z,cameraTargetX:i.target.x,cameraTargetY:i.target.y,cameraTargetZ:i.target.z}))},[i]);const p=(_,M)=>{const E={...s,[_]:M};if(l(E),r(E),_.startsWith("camera")&&t){const R={position:{x:_==="cameraPositionX"?M:E.cameraPositionX,y:_==="cameraPositionY"?M:E.cameraPositionY,z:_==="cameraPositionZ"?M:E.cameraPositionZ},rotation:{x:0,y:0,z:0},target:{x:_==="cameraTargetX"?M:E.cameraTargetX,y:_==="cameraTargetY"?M:E.cameraTargetY,z:_==="cameraTargetZ"?M:E.cameraTargetZ}};t(R)}},g=async()=>{try{const _={sceneParameters:s,cameraState:i};await navigator.clipboard.writeText(JSON.stringify(_,null,2)),h("Copied!"),setTimeout(()=>h(""),2e3)}catch{h("Failed to copy"),setTimeout(()=>h(""),2e3)}},x=async()=>{try{const _=await navigator.clipboard.readText(),M=JSON.parse(_);let E,R;if(M.sceneParameters&&M.cameraState)E=M.sceneParameters,R=M.cameraState;else if(M.sceneParameters)E=M.sceneParameters;else if(M.gridWidth!==void 0)E=M;else throw new Error("Invalid format");const y=["gridWidth","gridHeight","arcReach","twistX","twistY","twistZ","twistNoise","cameraPositionX","cameraPositionY","cameraPositionZ","cameraTargetX","cameraTargetY","cameraTargetZ"];for(const v of y)if(typeof E[v]!="number")throw new Error(`Missing or invalid parameter: ${v}`);l(E),r(E),R&&t&&t(R),m("Pasted!"),setTimeout(()=>m(""),2e3)}catch(_){console.error("Paste error:",_),m("Invalid format"),setTimeout(()=>m(""),2e3)}};return Ht.jsxs("div",{className:"space-y-4",children:[Ht.jsx("div",{className:"flex justify-between items-center",children:Ht.jsx("h3",{className:"text-lg font-semibold text-white",children:"Scene Parameters"})}),Ht.jsxs("div",{className:"space-y-3",children:[Ht.jsx("h4",{className:"text-md font-medium text-white/90",children:"Grid Settings"}),Ht.jsxs("div",{className:"space-y-1",children:[Ht.jsxs("label",{htmlFor:"gridWidth",className:"block text-sm font-medium text-white/80",children:["Grid Width: ",s.gridWidth]}),Ht.jsx("input",{id:"gridWidth",type:"range",min:"1",max:"100",step:"1",value:s.gridWidth,onChange:_=>p("gridWidth",parseInt(_.target.value)),className:"w-full h-2 bg-primary/20 rounded-lg appearance-none cursor-pointer slider"})]}),Ht.jsxs("div",{className:"space-y-1",children:[Ht.jsxs("label",{htmlFor:"gridHeight",className:"block text-sm font-medium text-white/80",children:["Grid Height: ",s.gridHeight]}),Ht.jsx("input",{id:"gridHeight",type:"range",min:"1",max:"100",step:"1",value:s.gridHeight,onChange:_=>p("gridHeight",parseInt(_.target.value)),className:"w-full h-2 bg-primary/20 rounded-lg appearance-none cursor-pointer slider"})]}),Ht.jsxs("div",{className:"space-y-1",children:[Ht.jsxs("label",{htmlFor:"arcReach",className:"block text-sm font-medium text-white/80",children:["Arc Reach: ",s.arcReach.toFixed(2)]}),Ht.jsx("input",{id:"arcReach",type:"range",min:"0",max:"1",step:"0.01",value:s.arcReach,onChange:_=>p("arcReach",parseFloat(_.target.value)),className:"w-full h-2 bg-primary/20 rounded-lg appearance-none cursor-pointer slider"})]}),Ht.jsxs("div",{className:"space-y-1",children:[Ht.jsxs("label",{htmlFor:"twistX",className:"block text-sm font-medium text-white/80",children:["Twist X: ",s.twistX,"°"]}),Ht.jsx("input",{id:"twistX",type:"range",min:"-180",max:"180",step:"1",value:s.twistX,onChange:_=>p("twistX",parseInt(_.target.value)),className:"w-full h-2 bg-primary/20 rounded-lg appearance-none cursor-pointer slider"})]}),Ht.jsxs("div",{className:"space-y-1",children:[Ht.jsxs("label",{htmlFor:"twistY",className:"block text-sm font-medium text-white/80",children:["Twist Y: ",s.twistY,"°"]}),Ht.jsx("input",{id:"twistY",type:"range",min:"-180",max:"180",step:"1",value:s.twistY,onChange:_=>p("twistY",parseInt(_.target.value)),className:"w-full h-2 bg-primary/20 rounded-lg appearance-none cursor-pointer slider"})]}),Ht.jsxs("div",{className:"space-y-1",children:[Ht.jsxs("label",{htmlFor:"twistZ",className:"block text-sm font-medium text-white/80",children:["Twist Z: ",s.twistZ,"°"]}),Ht.jsx("input",{id:"twistZ",type:"range",min:"-180",max:"180",step:"1",value:s.twistZ,onChange:_=>p("twistZ",parseInt(_.target.value)),className:"w-full h-2 bg-primary/20 rounded-lg appearance-none cursor-pointer slider"})]}),Ht.jsxs("div",{className:"space-y-1",children:[Ht.jsxs("label",{htmlFor:"twistNoise",className:"block text-sm font-medium text-white/80",children:["Twist Noise: ",s.twistNoise.toFixed(2)]}),Ht.jsx("input",{id:"twistNoise",type:"range",min:"0",max:"1",step:"0.01",value:s.twistNoise,onChange:_=>p("twistNoise",parseFloat(_.target.value)),className:"w-full h-2 bg-primary/20 rounded-lg appearance-none cursor-pointer slider"})]})]}),Ht.jsxs("div",{className:"space-y-3",children:[Ht.jsx("h4",{className:"text-md font-medium text-white/90",children:"Camera Settings"}),Ht.jsxs("div",{className:"space-y-1",children:[Ht.jsxs("label",{htmlFor:"cameraPositionX",className:"block text-sm font-medium text-white/80",children:["Camera X: ",s.cameraPositionX.toFixed(2)]}),Ht.jsx("input",{id:"cameraPositionX",type:"range",min:"-20",max:"20",step:"0.1",value:s.cameraPositionX,onChange:_=>p("cameraPositionX",parseFloat(_.target.value)),className:"w-full h-2 bg-primary/20 rounded-lg appearance-none cursor-pointer slider"})]}),Ht.jsxs("div",{className:"space-y-1",children:[Ht.jsxs("label",{htmlFor:"cameraPositionY",className:"block text-sm font-medium text-white/80",children:["Camera Y: ",s.cameraPositionY.toFixed(2)]}),Ht.jsx("input",{id:"cameraPositionY",type:"range",min:"-20",max:"20",step:"0.1",value:s.cameraPositionY,onChange:_=>p("cameraPositionY",parseFloat(_.target.value)),className:"w-full h-2 bg-primary/20 rounded-lg appearance-none cursor-pointer slider"})]}),Ht.jsxs("div",{className:"space-y-1",children:[Ht.jsxs("label",{htmlFor:"cameraPositionZ",className:"block text-sm font-medium text-white/80",children:["Camera Z: ",s.cameraPositionZ.toFixed(2)]}),Ht.jsx("input",{id:"cameraPositionZ",type:"range",min:"-20",max:"20",step:"0.1",value:s.cameraPositionZ,onChange:_=>p("cameraPositionZ",parseFloat(_.target.value)),className:"w-full h-2 bg-primary/20 rounded-lg appearance-none cursor-pointer slider"})]}),Ht.jsxs("div",{className:"space-y-1",children:[Ht.jsxs("label",{htmlFor:"cameraTargetX",className:"block text-sm font-medium text-white/80",children:["Target X: ",s.cameraTargetX.toFixed(2)]}),Ht.jsx("input",{id:"cameraTargetX",type:"range",min:"-20",max:"20",step:"0.1",value:s.cameraTargetX,onChange:_=>p("cameraTargetX",parseFloat(_.target.value)),className:"w-full h-2 bg-primary/20 rounded-lg appearance-none cursor-pointer slider"})]}),Ht.jsxs("div",{className:"space-y-1",children:[Ht.jsxs("label",{htmlFor:"cameraTargetY",className:"block text-sm font-medium text-white/80",children:["Target Y: ",s.cameraTargetY.toFixed(2)]}),Ht.jsx("input",{id:"cameraTargetY",type:"range",min:"-20",max:"20",step:"0.1",value:s.cameraTargetY,onChange:_=>p("cameraTargetY",parseFloat(_.target.value)),className:"w-full h-2 bg-primary/20 rounded-lg appearance-none cursor-pointer slider"})]}),Ht.jsxs("div",{className:"space-y-1",children:[Ht.jsxs("label",{htmlFor:"cameraTargetZ",className:"block text-sm font-medium text-white/80",children:["Target Z: ",s.cameraTargetZ.toFixed(2)]}),Ht.jsx("input",{id:"cameraTargetZ",type:"range",min:"-20",max:"20",step:"0.1",value:s.cameraTargetZ,onChange:_=>p("cameraTargetZ",parseFloat(_.target.value)),className:"w-full h-2 bg-primary/20 rounded-lg appearance-none cursor-pointer slider"})]}),Ht.jsxs("div",{className:"space-y-2",children:[Ht.jsx("button",{onClick:x,className:"w-full px-3 py-2 text-sm bg-green-600 hover:bg-green-700 text-white rounded transition-colors",children:d||"Paste Parameters"}),Ht.jsx("button",{onClick:g,className:"w-full px-3 py-2 text-sm bg-primary hover:bg-primary/80 text-white rounded transition-colors",children:u||"Copy Parameters"})]})]})]})},TA=()=>{const[r,t]=fn.useState({gridWidth:1,gridHeight:1,arcReach:0,twistX:0,twistY:0,twistZ:0,twistNoise:0,cameraPositionX:0,cameraPositionY:0,cameraPositionZ:5,cameraTargetX:0,cameraTargetY:0,cameraTargetZ:0}),[i,s]=fn.useState(),l=h=>{t(h)},u=h=>{s(h)};return Ht.jsxs("div",{className:"flex w-screen h-screen bg-secondary text-white",children:[Ht.jsx("div",{className:"flex-1 relative min-w-0",children:Ht.jsx(MA,{className:"w-full h-full",parameters:r,onCameraStateChange:u,currentCameraState:i})}),Ht.jsx("div",{className:"w-64 bg-secondary border-l border-primary/20 p-6 flex-shrink-0",children:Ht.jsx(EA,{onParametersChange:l,onCameraStateChange:u,currentCameraState:i})})]})},u0={type:"change"},bd={type:"start"},V0={type:"end"},Ec=new Ed,f0=new Ga,bA=Math.cos(70*QS.DEG2RAD),un=new $,Vn=2*Math.PI,Fe={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Ah=1e-6;class AA extends Iy{constructor(t,i=null){super(t,i),this.state=Fe.NONE,this.target=new $,this.cursor=new $,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Sr.ROTATE,MIDDLE:Sr.DOLLY,RIGHT:Sr.PAN},this.touches={ONE:vr.ROTATE,TWO:vr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new $,this._lastQuaternion=new Ts,this._lastTargetPosition=new $,this._quat=new Ts().setFromUnitVectors(t.up,new $(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new I_,this._sphericalDelta=new I_,this._scale=1,this._panOffset=new $,this._rotateStart=new he,this._rotateEnd=new he,this._rotateDelta=new he,this._panStart=new he,this._panEnd=new he,this._panDelta=new he,this._dollyStart=new he,this._dollyEnd=new he,this._dollyDelta=new he,this._dollyDirection=new $,this._mouse=new he,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=CA.bind(this),this._onPointerDown=RA.bind(this),this._onPointerUp=wA.bind(this),this._onContextMenu=zA.bind(this),this._onMouseWheel=LA.bind(this),this._onKeyDown=NA.bind(this),this._onTouchStart=OA.bind(this),this._onTouchMove=PA.bind(this),this._onMouseDown=DA.bind(this),this._onMouseMove=UA.bind(this),this._interceptControlDown=IA.bind(this),this._interceptControlUp=BA.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(u0),this.update(),this.state=Fe.NONE}update(t=null){const i=this.object.position;un.copy(i).sub(this.target),un.applyQuaternion(this._quat),this._spherical.setFromVector3(un),this.autoRotate&&this.state===Fe.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let s=this.minAzimuthAngle,l=this.maxAzimuthAngle;isFinite(s)&&isFinite(l)&&(s<-Math.PI?s+=Vn:s>Math.PI&&(s-=Vn),l<-Math.PI?l+=Vn:l>Math.PI&&(l-=Vn),s<=l?this._spherical.theta=Math.max(s,Math.min(l,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(s+l)/2?Math.max(s,this._spherical.theta):Math.min(l,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let u=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const h=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),u=h!=this._spherical.radius}if(un.setFromSpherical(this._spherical),un.applyQuaternion(this._quatInverse),i.copy(this.target).add(un),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let h=null;if(this.object.isPerspectiveCamera){const d=un.length();h=this._clampDistance(d*this._scale);const m=d-h;this.object.position.addScaledVector(this._dollyDirection,m),this.object.updateMatrixWorld(),u=!!m}else if(this.object.isOrthographicCamera){const d=new $(this._mouse.x,this._mouse.y,0);d.unproject(this.object);const m=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),u=m!==this.object.zoom;const p=new $(this._mouse.x,this._mouse.y,0);p.unproject(this.object),this.object.position.sub(p).add(d),this.object.updateMatrixWorld(),h=un.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;h!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(h).add(this.object.position):(Ec.origin.copy(this.object.position),Ec.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Ec.direction))<bA?this.object.lookAt(this.target):(f0.setFromNormalAndCoplanarPoint(this.object.up,this.target),Ec.intersectPlane(f0,this.target))))}else if(this.object.isOrthographicCamera){const h=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),h!==this.object.zoom&&(this.object.updateProjectionMatrix(),u=!0)}return this._scale=1,this._performCursorZoom=!1,u||this._lastPosition.distanceToSquared(this.object.position)>Ah||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Ah||this._lastTargetPosition.distanceToSquared(this.target)>Ah?(this.dispatchEvent(u0),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?Vn/60*this.autoRotateSpeed*t:Vn/60/60*this.autoRotateSpeed}_getZoomScale(t){const i=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*i)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,i){un.setFromMatrixColumn(i,0),un.multiplyScalar(-t),this._panOffset.add(un)}_panUp(t,i){this.screenSpacePanning===!0?un.setFromMatrixColumn(i,1):(un.setFromMatrixColumn(i,0),un.crossVectors(this.object.up,un)),un.multiplyScalar(t),this._panOffset.add(un)}_pan(t,i){const s=this.domElement;if(this.object.isPerspectiveCamera){const l=this.object.position;un.copy(l).sub(this.target);let u=un.length();u*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*u/s.clientHeight,this.object.matrix),this._panUp(2*i*u/s.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/s.clientWidth,this.object.matrix),this._panUp(i*(this.object.top-this.object.bottom)/this.object.zoom/s.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,i){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const s=this.domElement.getBoundingClientRect(),l=t-s.left,u=i-s.top,h=s.width,d=s.height;this._mouse.x=l/h*2-1,this._mouse.y=-(u/d)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const i=this.domElement;this._rotateLeft(Vn*this._rotateDelta.x/i.clientHeight),this._rotateUp(Vn*this._rotateDelta.y/i.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let i=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(Vn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),i=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-Vn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),i=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(Vn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),i=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-Vn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),i=!0;break}i&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),l=.5*(t.pageY+i.y);this._rotateStart.set(s,l)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),l=.5*(t.pageY+i.y);this._panStart.set(s,l)}}_handleTouchStartDolly(t){const i=this._getSecondPointerPosition(t),s=t.pageX-i.x,l=t.pageY-i.y,u=Math.sqrt(s*s+l*l);this._dollyStart.set(0,u)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const s=this._getSecondPointerPosition(t),l=.5*(t.pageX+s.x),u=.5*(t.pageY+s.y);this._rotateEnd.set(l,u)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const i=this.domElement;this._rotateLeft(Vn*this._rotateDelta.x/i.clientHeight),this._rotateUp(Vn*this._rotateDelta.y/i.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),l=.5*(t.pageY+i.y);this._panEnd.set(s,l)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const i=this._getSecondPointerPosition(t),s=t.pageX-i.x,l=t.pageY-i.y,u=Math.sqrt(s*s+l*l);this._dollyEnd.set(0,u),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const h=(t.pageX+i.x)*.5,d=(t.pageY+i.y)*.5;this._updateZoomParameters(h,d)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let i=0;i<this._pointers.length;i++)if(this._pointers[i]==t.pointerId){this._pointers.splice(i,1);return}}_isTrackingPointer(t){for(let i=0;i<this._pointers.length;i++)if(this._pointers[i]==t.pointerId)return!0;return!1}_trackPointer(t){let i=this._pointerPositions[t.pointerId];i===void 0&&(i=new he,this._pointerPositions[t.pointerId]=i),i.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const i=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[i]}_customWheelEvent(t){const i=t.deltaMode,s={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(i){case 1:s.deltaY*=16;break;case 2:s.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(s.deltaY*=10),s}}function RA(r){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(r.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(r)&&(this._addPointer(r),r.pointerType==="touch"?this._onTouchStart(r):this._onMouseDown(r)))}function CA(r){this.enabled!==!1&&(r.pointerType==="touch"?this._onTouchMove(r):this._onMouseMove(r))}function wA(r){switch(this._removePointer(r),this._pointers.length){case 0:this.domElement.releasePointerCapture(r.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(V0),this.state=Fe.NONE;break;case 1:const t=this._pointers[0],i=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:i.x,pageY:i.y});break}}function DA(r){let t;switch(r.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case Sr.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(r),this.state=Fe.DOLLY;break;case Sr.ROTATE:if(r.ctrlKey||r.metaKey||r.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(r),this.state=Fe.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(r),this.state=Fe.ROTATE}break;case Sr.PAN:if(r.ctrlKey||r.metaKey||r.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(r),this.state=Fe.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(r),this.state=Fe.PAN}break;default:this.state=Fe.NONE}this.state!==Fe.NONE&&this.dispatchEvent(bd)}function UA(r){switch(this.state){case Fe.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(r);break;case Fe.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(r);break;case Fe.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(r);break}}function LA(r){this.enabled===!1||this.enableZoom===!1||this.state!==Fe.NONE||(r.preventDefault(),this.dispatchEvent(bd),this._handleMouseWheel(this._customWheelEvent(r)),this.dispatchEvent(V0))}function NA(r){this.enabled!==!1&&this._handleKeyDown(r)}function OA(r){switch(this._trackPointer(r),this._pointers.length){case 1:switch(this.touches.ONE){case vr.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(r),this.state=Fe.TOUCH_ROTATE;break;case vr.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(r),this.state=Fe.TOUCH_PAN;break;default:this.state=Fe.NONE}break;case 2:switch(this.touches.TWO){case vr.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(r),this.state=Fe.TOUCH_DOLLY_PAN;break;case vr.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(r),this.state=Fe.TOUCH_DOLLY_ROTATE;break;default:this.state=Fe.NONE}break;default:this.state=Fe.NONE}this.state!==Fe.NONE&&this.dispatchEvent(bd)}function PA(r){switch(this._trackPointer(r),this.state){case Fe.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(r),this.update();break;case Fe.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(r),this.update();break;case Fe.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(r),this.update();break;case Fe.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(r),this.update();break;default:this.state=Fe.NONE}}function zA(r){this.enabled!==!1&&r.preventDefault()}function IA(r){r.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function BA(r){r.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const FA=r=>{const t=new Ay,i=new ui(75,r.clientWidth/r.clientHeight,.1,1e3),s=new SA({antialias:!0});s.setSize(r.clientWidth,r.clientHeight,!1),s.setClearColor(1710638,1);const l=s.domElement;l.style.width=`${r.clientWidth}px`,l.style.height=`${r.clientHeight}px`,l.style.display="block",r.appendChild(s.domElement);const u=new Py(4210752,.6);t.add(u),i.position.z=5;const h=new AA(i,s.domElement);return h.enableDamping=!0,h.dampingFactor=.08,{scene:t,camera:i,renderer:s,controls:h,blob:void 0,animate:()=>{h.update(),s.render(t,i)},getCameraState:()=>({position:{x:i.position.x,y:i.position.y,z:i.position.z},rotation:{x:i.rotation.x,y:i.rotation.y,z:i.rotation.z},target:{x:h.target.x,y:h.target.y,z:h.target.z}}),setCameraState:x=>{i.position.set(x.position.x,x.position.y,x.position.z),i.rotation.set(x.rotation.x,x.rotation.y,x.rotation.z),h.target.set(x.target.x,x.target.y,x.target.z),h.update()},cleanup:()=>{r.removeChild(s.domElement),s.dispose(),h.dispose()}}};function HA(){return Ht.jsx(Ht.Fragment,{children:Ht.jsx(TA,{})})}eS.createRoot(document.getElementById("root")).render(Ht.jsx(fn.StrictMode,{children:Ht.jsx(HA,{})}));
