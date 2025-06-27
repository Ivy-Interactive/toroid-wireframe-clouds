(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const u of l)if(u.type==="childList")for(const h of u.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&s(h)}).observe(document,{childList:!0,subtree:!0});function i(l){const u={};return l.integrity&&(u.integrity=l.integrity),l.referrerPolicy&&(u.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?u.credentials="include":l.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function s(l){if(l.ep)return;l.ep=!0;const u=i(l);fetch(l.href,u)}})();function US(o){return o&&o.__esModule&&Object.prototype.hasOwnProperty.call(o,"default")?o.default:o}var zf={exports:{}},Mo={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var X_;function LS(){if(X_)return Mo;X_=1;var o=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function i(s,l,u){var h=null;if(u!==void 0&&(h=""+u),l.key!==void 0&&(h=""+l.key),"key"in l){u={};for(var d in l)d!=="key"&&(u[d]=l[d])}else u=l;return l=u.ref,{$$typeof:o,type:s,key:h,ref:l!==void 0?l:null,props:u}}return Mo.Fragment=t,Mo.jsx=i,Mo.jsxs=i,Mo}var W_;function NS(){return W_||(W_=1,zf.exports=LS()),zf.exports}var ee=NS(),If={exports:{}},se={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var q_;function OS(){if(q_)return se;q_=1;var o=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),h=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),v=Symbol.iterator;function S(L){return L===null||typeof L!="object"?null:(L=v&&L[v]||L["@@iterator"],typeof L=="function"?L:null)}var M={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},T=Object.assign,R={};function y(L,$,vt){this.props=L,this.context=$,this.refs=R,this.updater=vt||M}y.prototype.isReactComponent={},y.prototype.setState=function(L,$){if(typeof L!="object"&&typeof L!="function"&&L!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,L,$,"setState")},y.prototype.forceUpdate=function(L){this.updater.enqueueForceUpdate(this,L,"forceUpdate")};function g(){}g.prototype=y.prototype;function O(L,$,vt){this.props=L,this.context=$,this.refs=R,this.updater=vt||M}var U=O.prototype=new g;U.constructor=O,T(U,y.prototype),U.isPureReactComponent=!0;var w=Array.isArray,F={H:null,A:null,T:null,S:null,V:null},V=Object.prototype.hasOwnProperty;function I(L,$,vt,xt,Q,mt){return vt=mt.ref,{$$typeof:o,type:L,key:$,ref:vt!==void 0?vt:null,props:mt}}function q(L,$){return I(L.type,$,void 0,void 0,void 0,L.props)}function D(L){return typeof L=="object"&&L!==null&&L.$$typeof===o}function C(L){var $={"=":"=0",":":"=2"};return"$"+L.replace(/[=:]/g,function(vt){return $[vt]})}var G=/\/+/g;function ot(L,$){return typeof L=="object"&&L!==null&&L.key!=null?C(""+L.key):$.toString(36)}function rt(){}function pt(L){switch(L.status){case"fulfilled":return L.value;case"rejected":throw L.reason;default:switch(typeof L.status=="string"?L.then(rt,rt):(L.status="pending",L.then(function($){L.status==="pending"&&(L.status="fulfilled",L.value=$)},function($){L.status==="pending"&&(L.status="rejected",L.reason=$)})),L.status){case"fulfilled":return L.value;case"rejected":throw L.reason}}throw L}function ut(L,$,vt,xt,Q){var mt=typeof L;(mt==="undefined"||mt==="boolean")&&(L=null);var yt=!1;if(L===null)yt=!0;else switch(mt){case"bigint":case"string":case"number":yt=!0;break;case"object":switch(L.$$typeof){case o:case t:yt=!0;break;case _:return yt=L._init,ut(yt(L._payload),$,vt,xt,Q)}}if(yt)return Q=Q(L),yt=xt===""?"."+ot(L,0):xt,w(Q)?(vt="",yt!=null&&(vt=yt.replace(G,"$&/")+"/"),ut(Q,$,vt,"",function(oe){return oe})):Q!=null&&(D(Q)&&(Q=q(Q,vt+(Q.key==null||L&&L.key===Q.key?"":(""+Q.key).replace(G,"$&/")+"/")+yt)),$.push(Q)),1;yt=0;var At=xt===""?".":xt+":";if(w(L))for(var Ct=0;Ct<L.length;Ct++)xt=L[Ct],mt=At+ot(xt,Ct),yt+=ut(xt,$,vt,mt,Q);else if(Ct=S(L),typeof Ct=="function")for(L=Ct.call(L),Ct=0;!(xt=L.next()).done;)xt=xt.value,mt=At+ot(xt,Ct++),yt+=ut(xt,$,vt,mt,Q);else if(mt==="object"){if(typeof L.then=="function")return ut(pt(L),$,vt,xt,Q);throw $=String(L),Error("Objects are not valid as a React child (found: "+($==="[object Object]"?"object with keys {"+Object.keys(L).join(", ")+"}":$)+"). If you meant to render a collection of children, use an array instead.")}return yt}function z(L,$,vt){if(L==null)return L;var xt=[],Q=0;return ut(L,xt,"","",function(mt){return $.call(vt,mt,Q++)}),xt}function Z(L){if(L._status===-1){var $=L._result;$=$(),$.then(function(vt){(L._status===0||L._status===-1)&&(L._status=1,L._result=vt)},function(vt){(L._status===0||L._status===-1)&&(L._status=2,L._result=vt)}),L._status===-1&&(L._status=0,L._result=$)}if(L._status===1)return L._result.default;throw L._result}var Y=typeof reportError=="function"?reportError:function(L){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var $=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof L=="object"&&L!==null&&typeof L.message=="string"?String(L.message):String(L),error:L});if(!window.dispatchEvent($))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",L);return}console.error(L)};function Mt(){}return se.Children={map:z,forEach:function(L,$,vt){z(L,function(){$.apply(this,arguments)},vt)},count:function(L){var $=0;return z(L,function(){$++}),$},toArray:function(L){return z(L,function($){return $})||[]},only:function(L){if(!D(L))throw Error("React.Children.only expected to receive a single React element child.");return L}},se.Component=y,se.Fragment=i,se.Profiler=l,se.PureComponent=O,se.StrictMode=s,se.Suspense=m,se.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=F,se.__COMPILER_RUNTIME={__proto__:null,c:function(L){return F.H.useMemoCache(L)}},se.cache=function(L){return function(){return L.apply(null,arguments)}},se.cloneElement=function(L,$,vt){if(L==null)throw Error("The argument must be a React element, but you passed "+L+".");var xt=T({},L.props),Q=L.key,mt=void 0;if($!=null)for(yt in $.ref!==void 0&&(mt=void 0),$.key!==void 0&&(Q=""+$.key),$)!V.call($,yt)||yt==="key"||yt==="__self"||yt==="__source"||yt==="ref"&&$.ref===void 0||(xt[yt]=$[yt]);var yt=arguments.length-2;if(yt===1)xt.children=vt;else if(1<yt){for(var At=Array(yt),Ct=0;Ct<yt;Ct++)At[Ct]=arguments[Ct+2];xt.children=At}return I(L.type,Q,void 0,void 0,mt,xt)},se.createContext=function(L){return L={$$typeof:h,_currentValue:L,_currentValue2:L,_threadCount:0,Provider:null,Consumer:null},L.Provider=L,L.Consumer={$$typeof:u,_context:L},L},se.createElement=function(L,$,vt){var xt,Q={},mt=null;if($!=null)for(xt in $.key!==void 0&&(mt=""+$.key),$)V.call($,xt)&&xt!=="key"&&xt!=="__self"&&xt!=="__source"&&(Q[xt]=$[xt]);var yt=arguments.length-2;if(yt===1)Q.children=vt;else if(1<yt){for(var At=Array(yt),Ct=0;Ct<yt;Ct++)At[Ct]=arguments[Ct+2];Q.children=At}if(L&&L.defaultProps)for(xt in yt=L.defaultProps,yt)Q[xt]===void 0&&(Q[xt]=yt[xt]);return I(L,mt,void 0,void 0,null,Q)},se.createRef=function(){return{current:null}},se.forwardRef=function(L){return{$$typeof:d,render:L}},se.isValidElement=D,se.lazy=function(L){return{$$typeof:_,_payload:{_status:-1,_result:L},_init:Z}},se.memo=function(L,$){return{$$typeof:p,type:L,compare:$===void 0?null:$}},se.startTransition=function(L){var $=F.T,vt={};F.T=vt;try{var xt=L(),Q=F.S;Q!==null&&Q(vt,xt),typeof xt=="object"&&xt!==null&&typeof xt.then=="function"&&xt.then(Mt,Y)}catch(mt){Y(mt)}finally{F.T=$}},se.unstable_useCacheRefresh=function(){return F.H.useCacheRefresh()},se.use=function(L){return F.H.use(L)},se.useActionState=function(L,$,vt){return F.H.useActionState(L,$,vt)},se.useCallback=function(L,$){return F.H.useCallback(L,$)},se.useContext=function(L){return F.H.useContext(L)},se.useDebugValue=function(){},se.useDeferredValue=function(L,$){return F.H.useDeferredValue(L,$)},se.useEffect=function(L,$,vt){var xt=F.H;if(typeof vt=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return xt.useEffect(L,$)},se.useId=function(){return F.H.useId()},se.useImperativeHandle=function(L,$,vt){return F.H.useImperativeHandle(L,$,vt)},se.useInsertionEffect=function(L,$){return F.H.useInsertionEffect(L,$)},se.useLayoutEffect=function(L,$){return F.H.useLayoutEffect(L,$)},se.useMemo=function(L,$){return F.H.useMemo(L,$)},se.useOptimistic=function(L,$){return F.H.useOptimistic(L,$)},se.useReducer=function(L,$,vt){return F.H.useReducer(L,$,vt)},se.useRef=function(L){return F.H.useRef(L)},se.useState=function(L){return F.H.useState(L)},se.useSyncExternalStore=function(L,$,vt){return F.H.useSyncExternalStore(L,$,vt)},se.useTransition=function(){return F.H.useTransition()},se.version="19.1.0",se}var Y_;function rd(){return Y_||(Y_=1,If.exports=OS()),If.exports}var Hn=rd(),Bf={exports:{}},Eo={},Ff={exports:{}},Hf={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var j_;function PS(){return j_||(j_=1,function(o){function t(z,Z){var Y=z.length;z.push(Z);t:for(;0<Y;){var Mt=Y-1>>>1,L=z[Mt];if(0<l(L,Z))z[Mt]=Z,z[Y]=L,Y=Mt;else break t}}function i(z){return z.length===0?null:z[0]}function s(z){if(z.length===0)return null;var Z=z[0],Y=z.pop();if(Y!==Z){z[0]=Y;t:for(var Mt=0,L=z.length,$=L>>>1;Mt<$;){var vt=2*(Mt+1)-1,xt=z[vt],Q=vt+1,mt=z[Q];if(0>l(xt,Y))Q<L&&0>l(mt,xt)?(z[Mt]=mt,z[Q]=Y,Mt=Q):(z[Mt]=xt,z[vt]=Y,Mt=vt);else if(Q<L&&0>l(mt,Y))z[Mt]=mt,z[Q]=Y,Mt=Q;else break t}}return Z}function l(z,Z){var Y=z.sortIndex-Z.sortIndex;return Y!==0?Y:z.id-Z.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;o.unstable_now=function(){return u.now()}}else{var h=Date,d=h.now();o.unstable_now=function(){return h.now()-d}}var m=[],p=[],_=1,v=null,S=3,M=!1,T=!1,R=!1,y=!1,g=typeof setTimeout=="function"?setTimeout:null,O=typeof clearTimeout=="function"?clearTimeout:null,U=typeof setImmediate<"u"?setImmediate:null;function w(z){for(var Z=i(p);Z!==null;){if(Z.callback===null)s(p);else if(Z.startTime<=z)s(p),Z.sortIndex=Z.expirationTime,t(m,Z);else break;Z=i(p)}}function F(z){if(R=!1,w(z),!T)if(i(m)!==null)T=!0,V||(V=!0,ot());else{var Z=i(p);Z!==null&&ut(F,Z.startTime-z)}}var V=!1,I=-1,q=5,D=-1;function C(){return y?!0:!(o.unstable_now()-D<q)}function G(){if(y=!1,V){var z=o.unstable_now();D=z;var Z=!0;try{t:{T=!1,R&&(R=!1,O(I),I=-1),M=!0;var Y=S;try{e:{for(w(z),v=i(m);v!==null&&!(v.expirationTime>z&&C());){var Mt=v.callback;if(typeof Mt=="function"){v.callback=null,S=v.priorityLevel;var L=Mt(v.expirationTime<=z);if(z=o.unstable_now(),typeof L=="function"){v.callback=L,w(z),Z=!0;break e}v===i(m)&&s(m),w(z)}else s(m);v=i(m)}if(v!==null)Z=!0;else{var $=i(p);$!==null&&ut(F,$.startTime-z),Z=!1}}break t}finally{v=null,S=Y,M=!1}Z=void 0}}finally{Z?ot():V=!1}}}var ot;if(typeof U=="function")ot=function(){U(G)};else if(typeof MessageChannel<"u"){var rt=new MessageChannel,pt=rt.port2;rt.port1.onmessage=G,ot=function(){pt.postMessage(null)}}else ot=function(){g(G,0)};function ut(z,Z){I=g(function(){z(o.unstable_now())},Z)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(z){z.callback=null},o.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):q=0<z?Math.floor(1e3/z):5},o.unstable_getCurrentPriorityLevel=function(){return S},o.unstable_next=function(z){switch(S){case 1:case 2:case 3:var Z=3;break;default:Z=S}var Y=S;S=Z;try{return z()}finally{S=Y}},o.unstable_requestPaint=function(){y=!0},o.unstable_runWithPriority=function(z,Z){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var Y=S;S=z;try{return Z()}finally{S=Y}},o.unstable_scheduleCallback=function(z,Z,Y){var Mt=o.unstable_now();switch(typeof Y=="object"&&Y!==null?(Y=Y.delay,Y=typeof Y=="number"&&0<Y?Mt+Y:Mt):Y=Mt,z){case 1:var L=-1;break;case 2:L=250;break;case 5:L=1073741823;break;case 4:L=1e4;break;default:L=5e3}return L=Y+L,z={id:_++,callback:Z,priorityLevel:z,startTime:Y,expirationTime:L,sortIndex:-1},Y>Mt?(z.sortIndex=Y,t(p,z),i(m)===null&&z===i(p)&&(R?(O(I),I=-1):R=!0,ut(F,Y-Mt))):(z.sortIndex=L,t(m,z),T||M||(T=!0,V||(V=!0,ot()))),z},o.unstable_shouldYield=C,o.unstable_wrapCallback=function(z){var Z=S;return function(){var Y=S;S=Z;try{return z.apply(this,arguments)}finally{S=Y}}}}(Hf)),Hf}var Z_;function zS(){return Z_||(Z_=1,Ff.exports=PS()),Ff.exports}var Gf={exports:{}},Cn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var K_;function IS(){if(K_)return Cn;K_=1;var o=rd();function t(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var _=2;_<arguments.length;_++)p+="&args[]="+encodeURIComponent(arguments[_])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var s={d:{f:i,r:function(){throw Error(t(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function u(m,p,_){var v=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:v==null?null:""+v,children:m,containerInfo:p,implementation:_}}var h=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return Cn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,Cn.createPortal=function(m,p){var _=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(t(299));return u(m,p,null,_)},Cn.flushSync=function(m){var p=h.T,_=s.p;try{if(h.T=null,s.p=2,m)return m()}finally{h.T=p,s.p=_,s.d.f()}},Cn.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,s.d.C(m,p))},Cn.prefetchDNS=function(m){typeof m=="string"&&s.d.D(m)},Cn.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var _=p.as,v=d(_,p.crossOrigin),S=typeof p.integrity=="string"?p.integrity:void 0,M=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;_==="style"?s.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:v,integrity:S,fetchPriority:M}):_==="script"&&s.d.X(m,{crossOrigin:v,integrity:S,fetchPriority:M,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},Cn.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var _=d(p.as,p.crossOrigin);s.d.M(m,{crossOrigin:_,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&s.d.M(m)},Cn.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var _=p.as,v=d(_,p.crossOrigin);s.d.L(m,_,{crossOrigin:v,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},Cn.preloadModule=function(m,p){if(typeof m=="string")if(p){var _=d(p.as,p.crossOrigin);s.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:_,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else s.d.m(m)},Cn.requestFormReset=function(m){s.d.r(m)},Cn.unstable_batchedUpdates=function(m,p){return m(p)},Cn.useFormState=function(m,p,_){return h.H.useFormState(m,p,_)},Cn.useFormStatus=function(){return h.H.useHostTransitionStatus()},Cn.version="19.1.0",Cn}var Q_;function BS(){if(Q_)return Gf.exports;Q_=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(t){console.error(t)}}return o(),Gf.exports=IS(),Gf.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var J_;function FS(){if(J_)return Eo;J_=1;var o=zS(),t=rd(),i=BS();function s(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function u(e){var n=e,a=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(a=n.return),e=n.return;while(e)}return n.tag===3?a:null}function h(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function d(e){if(u(e)!==e)throw Error(s(188))}function m(e){var n=e.alternate;if(!n){if(n=u(e),n===null)throw Error(s(188));return n!==e?null:e}for(var a=e,r=n;;){var c=a.return;if(c===null)break;var f=c.alternate;if(f===null){if(r=c.return,r!==null){a=r;continue}break}if(c.child===f.child){for(f=c.child;f;){if(f===a)return d(c),e;if(f===r)return d(c),n;f=f.sibling}throw Error(s(188))}if(a.return!==r.return)a=c,r=f;else{for(var x=!1,b=c.child;b;){if(b===a){x=!0,a=c,r=f;break}if(b===r){x=!0,r=c,a=f;break}b=b.sibling}if(!x){for(b=f.child;b;){if(b===a){x=!0,a=f,r=c;break}if(b===r){x=!0,r=f,a=c;break}b=b.sibling}if(!x)throw Error(s(189))}}if(a.alternate!==r)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?e:n}function p(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=p(e),n!==null)return n;e=e.sibling}return null}var _=Object.assign,v=Symbol.for("react.element"),S=Symbol.for("react.transitional.element"),M=Symbol.for("react.portal"),T=Symbol.for("react.fragment"),R=Symbol.for("react.strict_mode"),y=Symbol.for("react.profiler"),g=Symbol.for("react.provider"),O=Symbol.for("react.consumer"),U=Symbol.for("react.context"),w=Symbol.for("react.forward_ref"),F=Symbol.for("react.suspense"),V=Symbol.for("react.suspense_list"),I=Symbol.for("react.memo"),q=Symbol.for("react.lazy"),D=Symbol.for("react.activity"),C=Symbol.for("react.memo_cache_sentinel"),G=Symbol.iterator;function ot(e){return e===null||typeof e!="object"?null:(e=G&&e[G]||e["@@iterator"],typeof e=="function"?e:null)}var rt=Symbol.for("react.client.reference");function pt(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===rt?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case T:return"Fragment";case y:return"Profiler";case R:return"StrictMode";case F:return"Suspense";case V:return"SuspenseList";case D:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case M:return"Portal";case U:return(e.displayName||"Context")+".Provider";case O:return(e._context.displayName||"Context")+".Consumer";case w:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case I:return n=e.displayName||null,n!==null?n:pt(e.type)||"Memo";case q:n=e._payload,e=e._init;try{return pt(e(n))}catch{}}return null}var ut=Array.isArray,z=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Z=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Y={pending:!1,data:null,method:null,action:null},Mt=[],L=-1;function $(e){return{current:e}}function vt(e){0>L||(e.current=Mt[L],Mt[L]=null,L--)}function xt(e,n){L++,Mt[L]=e.current,e.current=n}var Q=$(null),mt=$(null),yt=$(null),At=$(null);function Ct(e,n){switch(xt(yt,n),xt(mt,e),xt(Q,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?v_(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=v_(n),e=S_(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}vt(Q),xt(Q,e)}function oe(){vt(Q),vt(mt),vt(yt)}function Kt(e){e.memoizedState!==null&&xt(At,e);var n=Q.current,a=S_(n,e.type);n!==a&&(xt(mt,e),xt(Q,a))}function Ne(e){mt.current===e&&(vt(Q),vt(mt)),At.current===e&&(vt(At),go._currentValue=Y)}var Fe=Object.prototype.hasOwnProperty,ge=o.unstable_scheduleCallback,B=o.unstable_cancelCallback,Sn=o.unstable_shouldYield,Me=o.unstable_requestPaint,de=o.unstable_now,Gt=o.unstable_getCurrentPriorityLevel,ve=o.unstable_ImmediatePriority,Yt=o.unstable_UserBlockingPriority,ae=o.unstable_NormalPriority,Ke=o.unstable_LowPriority,N=o.unstable_IdlePriority,E=o.log,et=o.unstable_setDisableYieldValue,ft=null,dt=null;function lt(e){if(typeof E=="function"&&et(e),dt&&typeof dt.setStrictMode=="function")try{dt.setStrictMode(ft,e)}catch{}}var Ot=Math.clz32?Math.clz32:Vt,Dt=Math.log,Ht=Math.LN2;function Vt(e){return e>>>=0,e===0?32:31-(Dt(e)/Ht|0)|0}var St=256,Pt=4194304;function Wt(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function qt(e,n,a){var r=e.pendingLanes;if(r===0)return 0;var c=0,f=e.suspendedLanes,x=e.pingedLanes;e=e.warmLanes;var b=r&134217727;return b!==0?(r=b&~f,r!==0?c=Wt(r):(x&=b,x!==0?c=Wt(x):a||(a=b&~e,a!==0&&(c=Wt(a))))):(b=r&~f,b!==0?c=Wt(b):x!==0?c=Wt(x):a||(a=r&~e,a!==0&&(c=Wt(a)))),c===0?0:n!==0&&n!==c&&(n&f)===0&&(f=c&-c,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:c}function Rt(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function ie(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function k(){var e=St;return St<<=1,(St&4194048)===0&&(St=256),e}function Ut(){var e=Pt;return Pt<<=1,(Pt&62914560)===0&&(Pt=4194304),e}function Et(e){for(var n=[],a=0;31>a;a++)n.push(e);return n}function zt(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function bt(e,n,a,r,c,f){var x=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var b=e.entanglements,P=e.expirationTimes,J=e.hiddenUpdates;for(a=x&~a;0<a;){var ct=31-Ot(a),_t=1<<ct;b[ct]=0,P[ct]=-1;var nt=J[ct];if(nt!==null)for(J[ct]=null,ct=0;ct<nt.length;ct++){var it=nt[ct];it!==null&&(it.lane&=-536870913)}a&=~_t}r!==0&&gt(e,r,0),f!==0&&c===0&&e.tag!==0&&(e.suspendedLanes|=f&~(x&~n))}function gt(e,n,a){e.pendingLanes|=n,e.suspendedLanes&=~n;var r=31-Ot(n);e.entangledLanes|=n,e.entanglements[r]=e.entanglements[r]|1073741824|a&4194090}function Bt(e,n){var a=e.entangledLanes|=n;for(e=e.entanglements;a;){var r=31-Ot(a),c=1<<r;c&n|e[r]&n&&(e[r]|=n),a&=~c}}function ne(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function we(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Te(){var e=Z.p;return e!==0?e:(e=window.event,e===void 0?32:B_(e.type))}function Xn(e,n){var a=Z.p;try{return Z.p=e,n()}finally{Z.p=a}}var dn=Math.random().toString(36).slice(2),rn="__reactFiber$"+dn,xn="__reactProps$"+dn,Nn="__reactContainer$"+dn,qa="__reactEvents$"+dn,Bo="__reactListeners$"+dn,Fo="__reactHandles$"+dn,Ya="__reactResources$"+dn,oa="__reactMarker$"+dn;function la(e){delete e[rn],delete e[xn],delete e[qa],delete e[Bo],delete e[Fo]}function Di(e){var n=e[rn];if(n)return n;for(var a=e.parentNode;a;){if(n=a[Nn]||a[rn]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(e=E_(e);e!==null;){if(a=e[rn])return a;e=E_(e)}return n}e=a,a=e.parentNode}return null}function Ui(e){if(e=e[rn]||e[Nn]){var n=e.tag;if(n===5||n===6||n===13||n===26||n===27||n===3)return e}return null}function ja(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(s(33))}function ca(e){var n=e[Ya];return n||(n=e[Ya]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function tn(e){e[oa]=!0}var Ho=new Set,Go={};function Li(e,n){A(e,n),A(e+"Capture",n)}function A(e,n){for(Go[e]=n,e=0;e<n.length;e++)Ho.add(n[e])}var W=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),at={},st={};function j(e){return Fe.call(st,e)?!0:Fe.call(at,e)?!1:W.test(e)?st[e]=!0:(at[e]=!0,!1)}function Tt(e,n,a){if(j(n))if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var r=n.toLowerCase().slice(0,5);if(r!=="data-"&&r!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,""+a)}}function wt(e,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,""+a)}}function Nt(e,n,a,r){if(r===null)e.removeAttribute(a);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(n,a,""+r)}}var It,Jt;function jt(e){if(It===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);It=n&&n[1]||"",Jt=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+It+e+Jt}var kt=!1;function ce(e,n){if(!e||kt)return"";kt=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(n){var _t=function(){throw Error()};if(Object.defineProperty(_t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(_t,[])}catch(it){var nt=it}Reflect.construct(e,[],_t)}else{try{_t.call()}catch(it){nt=it}e.call(_t.prototype)}}else{try{throw Error()}catch(it){nt=it}(_t=e())&&typeof _t.catch=="function"&&_t.catch(function(){})}}catch(it){if(it&&nt&&typeof it.stack=="string")return[it.stack,nt.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var c=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,"name");c&&c.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=r.DetermineComponentFrameRoot(),x=f[0],b=f[1];if(x&&b){var P=x.split(`
`),J=b.split(`
`);for(c=r=0;r<P.length&&!P[r].includes("DetermineComponentFrameRoot");)r++;for(;c<J.length&&!J[c].includes("DetermineComponentFrameRoot");)c++;if(r===P.length||c===J.length)for(r=P.length-1,c=J.length-1;1<=r&&0<=c&&P[r]!==J[c];)c--;for(;1<=r&&0<=c;r--,c--)if(P[r]!==J[c]){if(r!==1||c!==1)do if(r--,c--,0>c||P[r]!==J[c]){var ct=`
`+P[r].replace(" at new "," at ");return e.displayName&&ct.includes("<anonymous>")&&(ct=ct.replace("<anonymous>",e.displayName)),ct}while(1<=r&&0<=c);break}}}finally{kt=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?jt(a):""}function Re(e){switch(e.tag){case 26:case 27:case 5:return jt(e.type);case 16:return jt("Lazy");case 13:return jt("Suspense");case 19:return jt("SuspenseList");case 0:case 15:return ce(e.type,!1);case 11:return ce(e.type.render,!1);case 1:return ce(e.type,!0);case 31:return jt("Activity");default:return""}}function Ve(e){try{var n="";do n+=Re(e),e=e.return;while(e);return n}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}function Se(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function xe(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Zt(e){var n=xe(e)?"checked":"value",a=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),r=""+e[n];if(!e.hasOwnProperty(n)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var c=a.get,f=a.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return c.call(this)},set:function(x){r=""+x,f.call(this,x)}}),Object.defineProperty(e,n,{enumerable:a.enumerable}),{getValue:function(){return r},setValue:function(x){r=""+x},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function Ye(e){e._valueTracker||(e._valueTracker=Zt(e))}function Ee(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var a=n.getValue(),r="";return e&&(r=xe(e)?e.checked?"true":"false":e.value),e=r,e!==a?(n.setValue(e),!0):!1}function bn(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var ua=/[\n"\\]/g;function ke(e){return e.replace(ua,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Ni(e,n,a,r,c,f,x,b){e.name="",x!=null&&typeof x!="function"&&typeof x!="symbol"&&typeof x!="boolean"?e.type=x:e.removeAttribute("type"),n!=null?x==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+Se(n)):e.value!==""+Se(n)&&(e.value=""+Se(n)):x!=="submit"&&x!=="reset"||e.removeAttribute("value"),n!=null?An(e,x,Se(n)):a!=null?An(e,x,Se(a)):r!=null&&e.removeAttribute("value"),c==null&&f!=null&&(e.defaultChecked=!!f),c!=null&&(e.checked=c&&typeof c!="function"&&typeof c!="symbol"),b!=null&&typeof b!="function"&&typeof b!="symbol"&&typeof b!="boolean"?e.name=""+Se(b):e.removeAttribute("name")}function He(e,n,a,r,c,f,x,b){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(e.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null))return;a=a!=null?""+Se(a):"",n=n!=null?""+Se(n):a,b||n===e.value||(e.value=n),e.defaultValue=n}r=r??c,r=typeof r!="function"&&typeof r!="symbol"&&!!r,e.checked=b?e.checked:!!r,e.defaultChecked=!!r,x!=null&&typeof x!="function"&&typeof x!="symbol"&&typeof x!="boolean"&&(e.name=x)}function An(e,n,a){n==="number"&&bn(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function on(e,n,a,r){if(e=e.options,n){n={};for(var c=0;c<a.length;c++)n["$"+a[c]]=!0;for(a=0;a<e.length;a++)c=n.hasOwnProperty("$"+e[a].value),e[a].selected!==c&&(e[a].selected=c),c&&r&&(e[a].defaultSelected=!0)}else{for(a=""+Se(a),n=null,c=0;c<e.length;c++){if(e[c].value===a){e[c].selected=!0,r&&(e[c].defaultSelected=!0);return}n!==null||e[c].disabled||(n=e[c])}n!==null&&(n.selected=!0)}}function pn(e,n,a){if(n!=null&&(n=""+Se(n),n!==e.value&&(e.value=n),a==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=a!=null?""+Se(a):""}function yn(e,n,a,r){if(n==null){if(r!=null){if(a!=null)throw Error(s(92));if(ut(r)){if(1<r.length)throw Error(s(93));r=r[0]}a=r}a==null&&(a=""),n=a}a=Se(n),e.defaultValue=a,r=e.textContent,r===a&&r!==""&&r!==null&&(e.value=r)}function xi(e,n){if(n){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=n;return}}e.textContent=n}var Oi=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function vd(e,n,a){var r=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?r?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":r?e.setProperty(n,a):typeof a!="number"||a===0||Oi.has(n)?n==="float"?e.cssFloat=a:e[n]=(""+a).trim():e[n]=a+"px"}function Sd(e,n,a){if(n!=null&&typeof n!="object")throw Error(s(62));if(e=e.style,a!=null){for(var r in a)!a.hasOwnProperty(r)||n!=null&&n.hasOwnProperty(r)||(r.indexOf("--")===0?e.setProperty(r,""):r==="float"?e.cssFloat="":e[r]="");for(var c in n)r=n[c],n.hasOwnProperty(c)&&a[c]!==r&&vd(e,c,r)}else for(var f in n)n.hasOwnProperty(f)&&vd(e,f,n[f])}function Oc(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var wv=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Dv=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Vo(e){return Dv.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var Pc=null;function zc(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var As=null,Rs=null;function xd(e){var n=Ui(e);if(n&&(e=n.stateNode)){var a=e[xn]||null;t:switch(e=n.stateNode,n.type){case"input":if(Ni(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+ke(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var r=a[n];if(r!==e&&r.form===e.form){var c=r[xn]||null;if(!c)throw Error(s(90));Ni(r,c.value,c.defaultValue,c.defaultValue,c.checked,c.defaultChecked,c.type,c.name)}}for(n=0;n<a.length;n++)r=a[n],r.form===e.form&&Ee(r)}break t;case"textarea":pn(e,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&on(e,!!a.multiple,n,!1)}}}var Ic=!1;function yd(e,n,a){if(Ic)return e(n,a);Ic=!0;try{var r=e(n);return r}finally{if(Ic=!1,(As!==null||Rs!==null)&&(Rl(),As&&(n=As,e=Rs,Rs=As=null,xd(n),e)))for(n=0;n<e.length;n++)xd(e[n])}}function wr(e,n){var a=e.stateNode;if(a===null)return null;var r=a[xn]||null;if(r===null)return null;a=r[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break t;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(s(231,n,typeof a));return a}var Pi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Bc=!1;if(Pi)try{var Dr={};Object.defineProperty(Dr,"passive",{get:function(){Bc=!0}}),window.addEventListener("test",Dr,Dr),window.removeEventListener("test",Dr,Dr)}catch{Bc=!1}var fa=null,Fc=null,ko=null;function Md(){if(ko)return ko;var e,n=Fc,a=n.length,r,c="value"in fa?fa.value:fa.textContent,f=c.length;for(e=0;e<a&&n[e]===c[e];e++);var x=a-e;for(r=1;r<=x&&n[a-r]===c[f-r];r++);return ko=c.slice(e,1<r?1-r:void 0)}function Xo(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function Wo(){return!0}function Ed(){return!1}function On(e){function n(a,r,c,f,x){this._reactName=a,this._targetInst=c,this.type=r,this.nativeEvent=f,this.target=x,this.currentTarget=null;for(var b in e)e.hasOwnProperty(b)&&(a=e[b],this[b]=a?a(f):f[b]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?Wo:Ed,this.isPropagationStopped=Ed,this}return _(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Wo)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Wo)},persist:function(){},isPersistent:Wo}),n}var Za={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},qo=On(Za),Ur=_({},Za,{view:0,detail:0}),Uv=On(Ur),Hc,Gc,Lr,Yo=_({},Ur,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:kc,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Lr&&(Lr&&e.type==="mousemove"?(Hc=e.screenX-Lr.screenX,Gc=e.screenY-Lr.screenY):Gc=Hc=0,Lr=e),Hc)},movementY:function(e){return"movementY"in e?e.movementY:Gc}}),Td=On(Yo),Lv=_({},Yo,{dataTransfer:0}),Nv=On(Lv),Ov=_({},Ur,{relatedTarget:0}),Vc=On(Ov),Pv=_({},Za,{animationName:0,elapsedTime:0,pseudoElement:0}),zv=On(Pv),Iv=_({},Za,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Bv=On(Iv),Fv=_({},Za,{data:0}),bd=On(Fv),Hv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Gv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Vv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function kv(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=Vv[e])?!!n[e]:!1}function kc(){return kv}var Xv=_({},Ur,{key:function(e){if(e.key){var n=Hv[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=Xo(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Gv[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:kc,charCode:function(e){return e.type==="keypress"?Xo(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Xo(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Wv=On(Xv),qv=_({},Yo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ad=On(qv),Yv=_({},Ur,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:kc}),jv=On(Yv),Zv=_({},Za,{propertyName:0,elapsedTime:0,pseudoElement:0}),Kv=On(Zv),Qv=_({},Yo,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Jv=On(Qv),$v=_({},Za,{newState:0,oldState:0}),t0=On($v),e0=[9,13,27,32],Xc=Pi&&"CompositionEvent"in window,Nr=null;Pi&&"documentMode"in document&&(Nr=document.documentMode);var n0=Pi&&"TextEvent"in window&&!Nr,Rd=Pi&&(!Xc||Nr&&8<Nr&&11>=Nr),Cd=" ",wd=!1;function Dd(e,n){switch(e){case"keyup":return e0.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ud(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Cs=!1;function i0(e,n){switch(e){case"compositionend":return Ud(n);case"keypress":return n.which!==32?null:(wd=!0,Cd);case"textInput":return e=n.data,e===Cd&&wd?null:e;default:return null}}function a0(e,n){if(Cs)return e==="compositionend"||!Xc&&Dd(e,n)?(e=Md(),ko=Fc=fa=null,Cs=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Rd&&n.locale!=="ko"?null:n.data;default:return null}}var s0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ld(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!s0[e.type]:n==="textarea"}function Nd(e,n,a,r){As?Rs?Rs.push(r):Rs=[r]:As=r,n=Nl(n,"onChange"),0<n.length&&(a=new qo("onChange","change",null,a,r),e.push({event:a,listeners:n}))}var Or=null,Pr=null;function r0(e){d_(e,0)}function jo(e){var n=ja(e);if(Ee(n))return e}function Od(e,n){if(e==="change")return n}var Pd=!1;if(Pi){var Wc;if(Pi){var qc="oninput"in document;if(!qc){var zd=document.createElement("div");zd.setAttribute("oninput","return;"),qc=typeof zd.oninput=="function"}Wc=qc}else Wc=!1;Pd=Wc&&(!document.documentMode||9<document.documentMode)}function Id(){Or&&(Or.detachEvent("onpropertychange",Bd),Pr=Or=null)}function Bd(e){if(e.propertyName==="value"&&jo(Pr)){var n=[];Nd(n,Pr,e,zc(e)),yd(r0,n)}}function o0(e,n,a){e==="focusin"?(Id(),Or=n,Pr=a,Or.attachEvent("onpropertychange",Bd)):e==="focusout"&&Id()}function l0(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return jo(Pr)}function c0(e,n){if(e==="click")return jo(n)}function u0(e,n){if(e==="input"||e==="change")return jo(n)}function f0(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var Wn=typeof Object.is=="function"?Object.is:f0;function zr(e,n){if(Wn(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var a=Object.keys(e),r=Object.keys(n);if(a.length!==r.length)return!1;for(r=0;r<a.length;r++){var c=a[r];if(!Fe.call(n,c)||!Wn(e[c],n[c]))return!1}return!0}function Fd(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Hd(e,n){var a=Fd(e);e=0;for(var r;a;){if(a.nodeType===3){if(r=e+a.textContent.length,e<=n&&r>=n)return{node:a,offset:n-e};e=r}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=Fd(a)}}function Gd(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?Gd(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function Vd(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=bn(e.document);n instanceof e.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)e=n.contentWindow;else break;n=bn(e.document)}return n}function Yc(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var h0=Pi&&"documentMode"in document&&11>=document.documentMode,ws=null,jc=null,Ir=null,Zc=!1;function kd(e,n,a){var r=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Zc||ws==null||ws!==bn(r)||(r=ws,"selectionStart"in r&&Yc(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Ir&&zr(Ir,r)||(Ir=r,r=Nl(jc,"onSelect"),0<r.length&&(n=new qo("onSelect","select",null,n,a),e.push({event:n,listeners:r}),n.target=ws)))}function Ka(e,n){var a={};return a[e.toLowerCase()]=n.toLowerCase(),a["Webkit"+e]="webkit"+n,a["Moz"+e]="moz"+n,a}var Ds={animationend:Ka("Animation","AnimationEnd"),animationiteration:Ka("Animation","AnimationIteration"),animationstart:Ka("Animation","AnimationStart"),transitionrun:Ka("Transition","TransitionRun"),transitionstart:Ka("Transition","TransitionStart"),transitioncancel:Ka("Transition","TransitionCancel"),transitionend:Ka("Transition","TransitionEnd")},Kc={},Xd={};Pi&&(Xd=document.createElement("div").style,"AnimationEvent"in window||(delete Ds.animationend.animation,delete Ds.animationiteration.animation,delete Ds.animationstart.animation),"TransitionEvent"in window||delete Ds.transitionend.transition);function Qa(e){if(Kc[e])return Kc[e];if(!Ds[e])return e;var n=Ds[e],a;for(a in n)if(n.hasOwnProperty(a)&&a in Xd)return Kc[e]=n[a];return e}var Wd=Qa("animationend"),qd=Qa("animationiteration"),Yd=Qa("animationstart"),d0=Qa("transitionrun"),p0=Qa("transitionstart"),m0=Qa("transitioncancel"),jd=Qa("transitionend"),Zd=new Map,Qc="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Qc.push("scrollEnd");function ui(e,n){Zd.set(e,n),Li(n,[e])}var Kd=new WeakMap;function ti(e,n){if(typeof e=="object"&&e!==null){var a=Kd.get(e);return a!==void 0?a:(n={value:e,source:n,stack:Ve(n)},Kd.set(e,n),n)}return{value:e,source:n,stack:Ve(n)}}var ei=[],Us=0,Jc=0;function Zo(){for(var e=Us,n=Jc=Us=0;n<e;){var a=ei[n];ei[n++]=null;var r=ei[n];ei[n++]=null;var c=ei[n];ei[n++]=null;var f=ei[n];if(ei[n++]=null,r!==null&&c!==null){var x=r.pending;x===null?c.next=c:(c.next=x.next,x.next=c),r.pending=c}f!==0&&Qd(a,c,f)}}function Ko(e,n,a,r){ei[Us++]=e,ei[Us++]=n,ei[Us++]=a,ei[Us++]=r,Jc|=r,e.lanes|=r,e=e.alternate,e!==null&&(e.lanes|=r)}function $c(e,n,a,r){return Ko(e,n,a,r),Qo(e)}function Ls(e,n){return Ko(e,null,null,n),Qo(e)}function Qd(e,n,a){e.lanes|=a;var r=e.alternate;r!==null&&(r.lanes|=a);for(var c=!1,f=e.return;f!==null;)f.childLanes|=a,r=f.alternate,r!==null&&(r.childLanes|=a),f.tag===22&&(e=f.stateNode,e===null||e._visibility&1||(c=!0)),e=f,f=f.return;return e.tag===3?(f=e.stateNode,c&&n!==null&&(c=31-Ot(a),e=f.hiddenUpdates,r=e[c],r===null?e[c]=[n]:r.push(n),n.lane=a|536870912),f):null}function Qo(e){if(50<lo)throw lo=0,rf=null,Error(s(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var Ns={};function _0(e,n,a,r){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function qn(e,n,a,r){return new _0(e,n,a,r)}function tu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function zi(e,n){var a=e.alternate;return a===null?(a=qn(e.tag,n,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=n,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,n=e.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function Jd(e,n){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,n=a.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function Jo(e,n,a,r,c,f){var x=0;if(r=e,typeof e=="function")tu(e)&&(x=1);else if(typeof e=="string")x=vS(e,a,Q.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case D:return e=qn(31,a,n,c),e.elementType=D,e.lanes=f,e;case T:return Ja(a.children,c,f,n);case R:x=8,c|=24;break;case y:return e=qn(12,a,n,c|2),e.elementType=y,e.lanes=f,e;case F:return e=qn(13,a,n,c),e.elementType=F,e.lanes=f,e;case V:return e=qn(19,a,n,c),e.elementType=V,e.lanes=f,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case g:case U:x=10;break t;case O:x=9;break t;case w:x=11;break t;case I:x=14;break t;case q:x=16,r=null;break t}x=29,a=Error(s(130,e===null?"null":typeof e,"")),r=null}return n=qn(x,a,n,c),n.elementType=e,n.type=r,n.lanes=f,n}function Ja(e,n,a,r){return e=qn(7,e,r,n),e.lanes=a,e}function eu(e,n,a){return e=qn(6,e,null,n),e.lanes=a,e}function nu(e,n,a){return n=qn(4,e.children!==null?e.children:[],e.key,n),n.lanes=a,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var Os=[],Ps=0,$o=null,tl=0,ni=[],ii=0,$a=null,Ii=1,Bi="";function ts(e,n){Os[Ps++]=tl,Os[Ps++]=$o,$o=e,tl=n}function $d(e,n,a){ni[ii++]=Ii,ni[ii++]=Bi,ni[ii++]=$a,$a=e;var r=Ii;e=Bi;var c=32-Ot(r)-1;r&=~(1<<c),a+=1;var f=32-Ot(n)+c;if(30<f){var x=c-c%5;f=(r&(1<<x)-1).toString(32),r>>=x,c-=x,Ii=1<<32-Ot(n)+c|a<<c|r,Bi=f+e}else Ii=1<<f|a<<c|r,Bi=e}function iu(e){e.return!==null&&(ts(e,1),$d(e,1,0))}function au(e){for(;e===$o;)$o=Os[--Ps],Os[Ps]=null,tl=Os[--Ps],Os[Ps]=null;for(;e===$a;)$a=ni[--ii],ni[ii]=null,Bi=ni[--ii],ni[ii]=null,Ii=ni[--ii],ni[ii]=null}var Un=null,je=null,Ce=!1,es=null,yi=!1,su=Error(s(519));function ns(e){var n=Error(s(418,""));throw Hr(ti(n,e)),su}function tp(e){var n=e.stateNode,a=e.type,r=e.memoizedProps;switch(n[rn]=e,n[xn]=r,a){case"dialog":me("cancel",n),me("close",n);break;case"iframe":case"object":case"embed":me("load",n);break;case"video":case"audio":for(a=0;a<uo.length;a++)me(uo[a],n);break;case"source":me("error",n);break;case"img":case"image":case"link":me("error",n),me("load",n);break;case"details":me("toggle",n);break;case"input":me("invalid",n),He(n,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0),Ye(n);break;case"select":me("invalid",n);break;case"textarea":me("invalid",n),yn(n,r.value,r.defaultValue,r.children),Ye(n)}a=r.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||r.suppressHydrationWarning===!0||g_(n.textContent,a)?(r.popover!=null&&(me("beforetoggle",n),me("toggle",n)),r.onScroll!=null&&me("scroll",n),r.onScrollEnd!=null&&me("scrollend",n),r.onClick!=null&&(n.onclick=Ol),n=!0):n=!1,n||ns(e)}function ep(e){for(Un=e.return;Un;)switch(Un.tag){case 5:case 13:yi=!1;return;case 27:case 3:yi=!0;return;default:Un=Un.return}}function Br(e){if(e!==Un)return!1;if(!Ce)return ep(e),Ce=!0,!1;var n=e.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||Mf(e.type,e.memoizedProps)),a=!a),a&&je&&ns(e),ep(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));t:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8)if(a=e.data,a==="/$"){if(n===0){je=hi(e.nextSibling);break t}n--}else a!=="$"&&a!=="$!"&&a!=="$?"||n++;e=e.nextSibling}je=null}}else n===27?(n=je,Ra(e.type)?(e=Af,Af=null,je=e):je=n):je=Un?hi(e.stateNode.nextSibling):null;return!0}function Fr(){je=Un=null,Ce=!1}function np(){var e=es;return e!==null&&(In===null?In=e:In.push.apply(In,e),es=null),e}function Hr(e){es===null?es=[e]:es.push(e)}var ru=$(null),is=null,Fi=null;function ha(e,n,a){xt(ru,n._currentValue),n._currentValue=a}function Hi(e){e._currentValue=ru.current,vt(ru)}function ou(e,n,a){for(;e!==null;){var r=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,r!==null&&(r.childLanes|=n)):r!==null&&(r.childLanes&n)!==n&&(r.childLanes|=n),e===a)break;e=e.return}}function lu(e,n,a,r){var c=e.child;for(c!==null&&(c.return=e);c!==null;){var f=c.dependencies;if(f!==null){var x=c.child;f=f.firstContext;t:for(;f!==null;){var b=f;f=c;for(var P=0;P<n.length;P++)if(b.context===n[P]){f.lanes|=a,b=f.alternate,b!==null&&(b.lanes|=a),ou(f.return,a,e),r||(x=null);break t}f=b.next}}else if(c.tag===18){if(x=c.return,x===null)throw Error(s(341));x.lanes|=a,f=x.alternate,f!==null&&(f.lanes|=a),ou(x,a,e),x=null}else x=c.child;if(x!==null)x.return=c;else for(x=c;x!==null;){if(x===e){x=null;break}if(c=x.sibling,c!==null){c.return=x.return,x=c;break}x=x.return}c=x}}function Gr(e,n,a,r){e=null;for(var c=n,f=!1;c!==null;){if(!f){if((c.flags&524288)!==0)f=!0;else if((c.flags&262144)!==0)break}if(c.tag===10){var x=c.alternate;if(x===null)throw Error(s(387));if(x=x.memoizedProps,x!==null){var b=c.type;Wn(c.pendingProps.value,x.value)||(e!==null?e.push(b):e=[b])}}else if(c===At.current){if(x=c.alternate,x===null)throw Error(s(387));x.memoizedState.memoizedState!==c.memoizedState.memoizedState&&(e!==null?e.push(go):e=[go])}c=c.return}e!==null&&lu(n,e,a,r),n.flags|=262144}function el(e){for(e=e.firstContext;e!==null;){if(!Wn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function as(e){is=e,Fi=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Rn(e){return ip(is,e)}function nl(e,n){return is===null&&as(e),ip(e,n)}function ip(e,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},Fi===null){if(e===null)throw Error(s(308));Fi=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else Fi=Fi.next=n;return a}var g0=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(a,r){e.push(r)}};this.abort=function(){n.aborted=!0,e.forEach(function(a){return a()})}},v0=o.unstable_scheduleCallback,S0=o.unstable_NormalPriority,ln={$$typeof:U,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function cu(){return{controller:new g0,data:new Map,refCount:0}}function Vr(e){e.refCount--,e.refCount===0&&v0(S0,function(){e.controller.abort()})}var kr=null,uu=0,zs=0,Is=null;function x0(e,n){if(kr===null){var a=kr=[];uu=0,zs=df(),Is={status:"pending",value:void 0,then:function(r){a.push(r)}}}return uu++,n.then(ap,ap),n}function ap(){if(--uu===0&&kr!==null){Is!==null&&(Is.status="fulfilled");var e=kr;kr=null,zs=0,Is=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function y0(e,n){var a=[],r={status:"pending",value:null,reason:null,then:function(c){a.push(c)}};return e.then(function(){r.status="fulfilled",r.value=n;for(var c=0;c<a.length;c++)(0,a[c])(n)},function(c){for(r.status="rejected",r.reason=c,c=0;c<a.length;c++)(0,a[c])(void 0)}),r}var sp=z.S;z.S=function(e,n){typeof n=="object"&&n!==null&&typeof n.then=="function"&&x0(e,n),sp!==null&&sp(e,n)};var ss=$(null);function fu(){var e=ss.current;return e!==null?e:Xe.pooledCache}function il(e,n){n===null?xt(ss,ss.current):xt(ss,n.pool)}function rp(){var e=fu();return e===null?null:{parent:ln._currentValue,pool:e}}var Xr=Error(s(460)),op=Error(s(474)),al=Error(s(542)),hu={then:function(){}};function lp(e){return e=e.status,e==="fulfilled"||e==="rejected"}function sl(){}function cp(e,n,a){switch(a=e[a],a===void 0?e.push(n):a!==n&&(n.then(sl,sl),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,fp(e),e;default:if(typeof n.status=="string")n.then(sl,sl);else{if(e=Xe,e!==null&&100<e.shellSuspendCounter)throw Error(s(482));e=n,e.status="pending",e.then(function(r){if(n.status==="pending"){var c=n;c.status="fulfilled",c.value=r}},function(r){if(n.status==="pending"){var c=n;c.status="rejected",c.reason=r}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,fp(e),e}throw Wr=n,Xr}}var Wr=null;function up(){if(Wr===null)throw Error(s(459));var e=Wr;return Wr=null,e}function fp(e){if(e===Xr||e===al)throw Error(s(483))}var da=!1;function du(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function pu(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function pa(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function ma(e,n,a){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,(De&2)!==0){var c=r.pending;return c===null?n.next=n:(n.next=c.next,c.next=n),r.pending=n,n=Qo(e),Qd(e,null,a),n}return Ko(e,r,n,a),Qo(e)}function qr(e,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var r=n.lanes;r&=e.pendingLanes,a|=r,n.lanes=a,Bt(e,a)}}function mu(e,n){var a=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,a===r)){var c=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var x={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?c=f=x:f=f.next=x,a=a.next}while(a!==null);f===null?c=f=n:f=f.next=n}else c=f=n;a={baseState:r.baseState,firstBaseUpdate:c,lastBaseUpdate:f,shared:r.shared,callbacks:r.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=n:e.next=n,a.lastBaseUpdate=n}var _u=!1;function Yr(){if(_u){var e=Is;if(e!==null)throw e}}function jr(e,n,a,r){_u=!1;var c=e.updateQueue;da=!1;var f=c.firstBaseUpdate,x=c.lastBaseUpdate,b=c.shared.pending;if(b!==null){c.shared.pending=null;var P=b,J=P.next;P.next=null,x===null?f=J:x.next=J,x=P;var ct=e.alternate;ct!==null&&(ct=ct.updateQueue,b=ct.lastBaseUpdate,b!==x&&(b===null?ct.firstBaseUpdate=J:b.next=J,ct.lastBaseUpdate=P))}if(f!==null){var _t=c.baseState;x=0,ct=J=P=null,b=f;do{var nt=b.lane&-536870913,it=nt!==b.lane;if(it?(ye&nt)===nt:(r&nt)===nt){nt!==0&&nt===zs&&(_u=!0),ct!==null&&(ct=ct.next={lane:0,tag:b.tag,payload:b.payload,callback:null,next:null});t:{var te=e,Qt=b;nt=n;var ze=a;switch(Qt.tag){case 1:if(te=Qt.payload,typeof te=="function"){_t=te.call(ze,_t,nt);break t}_t=te;break t;case 3:te.flags=te.flags&-65537|128;case 0:if(te=Qt.payload,nt=typeof te=="function"?te.call(ze,_t,nt):te,nt==null)break t;_t=_({},_t,nt);break t;case 2:da=!0}}nt=b.callback,nt!==null&&(e.flags|=64,it&&(e.flags|=8192),it=c.callbacks,it===null?c.callbacks=[nt]:it.push(nt))}else it={lane:nt,tag:b.tag,payload:b.payload,callback:b.callback,next:null},ct===null?(J=ct=it,P=_t):ct=ct.next=it,x|=nt;if(b=b.next,b===null){if(b=c.shared.pending,b===null)break;it=b,b=it.next,it.next=null,c.lastBaseUpdate=it,c.shared.pending=null}}while(!0);ct===null&&(P=_t),c.baseState=P,c.firstBaseUpdate=J,c.lastBaseUpdate=ct,f===null&&(c.shared.lanes=0),Ea|=x,e.lanes=x,e.memoizedState=_t}}function hp(e,n){if(typeof e!="function")throw Error(s(191,e));e.call(n)}function dp(e,n){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)hp(a[e],n)}var Bs=$(null),rl=$(0);function pp(e,n){e=Yi,xt(rl,e),xt(Bs,n),Yi=e|n.baseLanes}function gu(){xt(rl,Yi),xt(Bs,Bs.current)}function vu(){Yi=rl.current,vt(Bs),vt(rl)}var _a=0,ue=null,Oe=null,en=null,ol=!1,Fs=!1,rs=!1,ll=0,Zr=0,Hs=null,M0=0;function Qe(){throw Error(s(321))}function Su(e,n){if(n===null)return!1;for(var a=0;a<n.length&&a<e.length;a++)if(!Wn(e[a],n[a]))return!1;return!0}function xu(e,n,a,r,c,f){return _a=f,ue=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,z.H=e===null||e.memoizedState===null?Qp:Jp,rs=!1,f=a(r,c),rs=!1,Fs&&(f=_p(n,a,r,c)),mp(e),f}function mp(e){z.H=pl;var n=Oe!==null&&Oe.next!==null;if(_a=0,en=Oe=ue=null,ol=!1,Zr=0,Hs=null,n)throw Error(s(300));e===null||mn||(e=e.dependencies,e!==null&&el(e)&&(mn=!0))}function _p(e,n,a,r){ue=e;var c=0;do{if(Fs&&(Hs=null),Zr=0,Fs=!1,25<=c)throw Error(s(301));if(c+=1,en=Oe=null,e.updateQueue!=null){var f=e.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}z.H=w0,f=n(a,r)}while(Fs);return f}function E0(){var e=z.H,n=e.useState()[0];return n=typeof n.then=="function"?Kr(n):n,e=e.useState()[0],(Oe!==null?Oe.memoizedState:null)!==e&&(ue.flags|=1024),n}function yu(){var e=ll!==0;return ll=0,e}function Mu(e,n,a){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a}function Eu(e){if(ol){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}ol=!1}_a=0,en=Oe=ue=null,Fs=!1,Zr=ll=0,Hs=null}function Pn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return en===null?ue.memoizedState=en=e:en=en.next=e,en}function nn(){if(Oe===null){var e=ue.alternate;e=e!==null?e.memoizedState:null}else e=Oe.next;var n=en===null?ue.memoizedState:en.next;if(n!==null)en=n,Oe=e;else{if(e===null)throw ue.alternate===null?Error(s(467)):Error(s(310));Oe=e,e={memoizedState:Oe.memoizedState,baseState:Oe.baseState,baseQueue:Oe.baseQueue,queue:Oe.queue,next:null},en===null?ue.memoizedState=en=e:en=en.next=e}return en}function Tu(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Kr(e){var n=Zr;return Zr+=1,Hs===null&&(Hs=[]),e=cp(Hs,e,n),n=ue,(en===null?n.memoizedState:en.next)===null&&(n=n.alternate,z.H=n===null||n.memoizedState===null?Qp:Jp),e}function cl(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Kr(e);if(e.$$typeof===U)return Rn(e)}throw Error(s(438,String(e)))}function bu(e){var n=null,a=ue.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var r=ue.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(n={data:r.data.map(function(c){return c.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=Tu(),ue.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(e),r=0;r<e;r++)a[r]=C;return n.index++,a}function Gi(e,n){return typeof n=="function"?n(e):n}function ul(e){var n=nn();return Au(n,Oe,e)}function Au(e,n,a){var r=e.queue;if(r===null)throw Error(s(311));r.lastRenderedReducer=a;var c=e.baseQueue,f=r.pending;if(f!==null){if(c!==null){var x=c.next;c.next=f.next,f.next=x}n.baseQueue=c=f,r.pending=null}if(f=e.baseState,c===null)e.memoizedState=f;else{n=c.next;var b=x=null,P=null,J=n,ct=!1;do{var _t=J.lane&-536870913;if(_t!==J.lane?(ye&_t)===_t:(_a&_t)===_t){var nt=J.revertLane;if(nt===0)P!==null&&(P=P.next={lane:0,revertLane:0,action:J.action,hasEagerState:J.hasEagerState,eagerState:J.eagerState,next:null}),_t===zs&&(ct=!0);else if((_a&nt)===nt){J=J.next,nt===zs&&(ct=!0);continue}else _t={lane:0,revertLane:J.revertLane,action:J.action,hasEagerState:J.hasEagerState,eagerState:J.eagerState,next:null},P===null?(b=P=_t,x=f):P=P.next=_t,ue.lanes|=nt,Ea|=nt;_t=J.action,rs&&a(f,_t),f=J.hasEagerState?J.eagerState:a(f,_t)}else nt={lane:_t,revertLane:J.revertLane,action:J.action,hasEagerState:J.hasEagerState,eagerState:J.eagerState,next:null},P===null?(b=P=nt,x=f):P=P.next=nt,ue.lanes|=_t,Ea|=_t;J=J.next}while(J!==null&&J!==n);if(P===null?x=f:P.next=b,!Wn(f,e.memoizedState)&&(mn=!0,ct&&(a=Is,a!==null)))throw a;e.memoizedState=f,e.baseState=x,e.baseQueue=P,r.lastRenderedState=f}return c===null&&(r.lanes=0),[e.memoizedState,r.dispatch]}function Ru(e){var n=nn(),a=n.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=e;var r=a.dispatch,c=a.pending,f=n.memoizedState;if(c!==null){a.pending=null;var x=c=c.next;do f=e(f,x.action),x=x.next;while(x!==c);Wn(f,n.memoizedState)||(mn=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,r]}function gp(e,n,a){var r=ue,c=nn(),f=Ce;if(f){if(a===void 0)throw Error(s(407));a=a()}else a=n();var x=!Wn((Oe||c).memoizedState,a);x&&(c.memoizedState=a,mn=!0),c=c.queue;var b=xp.bind(null,r,c,e);if(Qr(2048,8,b,[e]),c.getSnapshot!==n||x||en!==null&&en.memoizedState.tag&1){if(r.flags|=2048,Gs(9,fl(),Sp.bind(null,r,c,a,n),null),Xe===null)throw Error(s(349));f||(_a&124)!==0||vp(r,n,a)}return a}function vp(e,n,a){e.flags|=16384,e={getSnapshot:n,value:a},n=ue.updateQueue,n===null?(n=Tu(),ue.updateQueue=n,n.stores=[e]):(a=n.stores,a===null?n.stores=[e]:a.push(e))}function Sp(e,n,a,r){n.value=a,n.getSnapshot=r,yp(n)&&Mp(e)}function xp(e,n,a){return a(function(){yp(n)&&Mp(e)})}function yp(e){var n=e.getSnapshot;e=e.value;try{var a=n();return!Wn(e,a)}catch{return!0}}function Mp(e){var n=Ls(e,2);n!==null&&Qn(n,e,2)}function Cu(e){var n=Pn();if(typeof e=="function"){var a=e;if(e=a(),rs){lt(!0);try{a()}finally{lt(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Gi,lastRenderedState:e},n}function Ep(e,n,a,r){return e.baseState=a,Au(e,Oe,typeof r=="function"?r:Gi)}function T0(e,n,a,r,c){if(dl(e))throw Error(s(485));if(e=n.action,e!==null){var f={payload:c,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(x){f.listeners.push(x)}};z.T!==null?a(!0):f.isTransition=!1,r(f),a=n.pending,a===null?(f.next=n.pending=f,Tp(n,f)):(f.next=a.next,n.pending=a.next=f)}}function Tp(e,n){var a=n.action,r=n.payload,c=e.state;if(n.isTransition){var f=z.T,x={};z.T=x;try{var b=a(c,r),P=z.S;P!==null&&P(x,b),bp(e,n,b)}catch(J){wu(e,n,J)}finally{z.T=f}}else try{f=a(c,r),bp(e,n,f)}catch(J){wu(e,n,J)}}function bp(e,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(r){Ap(e,n,r)},function(r){return wu(e,n,r)}):Ap(e,n,a)}function Ap(e,n,a){n.status="fulfilled",n.value=a,Rp(n),e.state=a,n=e.pending,n!==null&&(a=n.next,a===n?e.pending=null:(a=a.next,n.next=a,Tp(e,a)))}function wu(e,n,a){var r=e.pending;if(e.pending=null,r!==null){r=r.next;do n.status="rejected",n.reason=a,Rp(n),n=n.next;while(n!==r)}e.action=null}function Rp(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function Cp(e,n){return n}function wp(e,n){if(Ce){var a=Xe.formState;if(a!==null){t:{var r=ue;if(Ce){if(je){e:{for(var c=je,f=yi;c.nodeType!==8;){if(!f){c=null;break e}if(c=hi(c.nextSibling),c===null){c=null;break e}}f=c.data,c=f==="F!"||f==="F"?c:null}if(c){je=hi(c.nextSibling),r=c.data==="F!";break t}}ns(r)}r=!1}r&&(n=a[0])}}return a=Pn(),a.memoizedState=a.baseState=n,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Cp,lastRenderedState:n},a.queue=r,a=jp.bind(null,ue,r),r.dispatch=a,r=Cu(!1),f=Ou.bind(null,ue,!1,r.queue),r=Pn(),c={state:n,dispatch:null,action:e,pending:null},r.queue=c,a=T0.bind(null,ue,c,f,a),c.dispatch=a,r.memoizedState=e,[n,a,!1]}function Dp(e){var n=nn();return Up(n,Oe,e)}function Up(e,n,a){if(n=Au(e,n,Cp)[0],e=ul(Gi)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var r=Kr(n)}catch(x){throw x===Xr?al:x}else r=n;n=nn();var c=n.queue,f=c.dispatch;return a!==n.memoizedState&&(ue.flags|=2048,Gs(9,fl(),b0.bind(null,c,a),null)),[r,f,e]}function b0(e,n){e.action=n}function Lp(e){var n=nn(),a=Oe;if(a!==null)return Up(n,a,e);nn(),n=n.memoizedState,a=nn();var r=a.queue.dispatch;return a.memoizedState=e,[n,r,!1]}function Gs(e,n,a,r){return e={tag:e,create:a,deps:r,inst:n,next:null},n=ue.updateQueue,n===null&&(n=Tu(),ue.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=e.next=e:(r=a.next,a.next=e,e.next=r,n.lastEffect=e),e}function fl(){return{destroy:void 0,resource:void 0}}function Np(){return nn().memoizedState}function hl(e,n,a,r){var c=Pn();r=r===void 0?null:r,ue.flags|=e,c.memoizedState=Gs(1|n,fl(),a,r)}function Qr(e,n,a,r){var c=nn();r=r===void 0?null:r;var f=c.memoizedState.inst;Oe!==null&&r!==null&&Su(r,Oe.memoizedState.deps)?c.memoizedState=Gs(n,f,a,r):(ue.flags|=e,c.memoizedState=Gs(1|n,f,a,r))}function Op(e,n){hl(8390656,8,e,n)}function Pp(e,n){Qr(2048,8,e,n)}function zp(e,n){return Qr(4,2,e,n)}function Ip(e,n){return Qr(4,4,e,n)}function Bp(e,n){if(typeof n=="function"){e=e();var a=n(e);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function Fp(e,n,a){a=a!=null?a.concat([e]):null,Qr(4,4,Bp.bind(null,n,e),a)}function Du(){}function Hp(e,n){var a=nn();n=n===void 0?null:n;var r=a.memoizedState;return n!==null&&Su(n,r[1])?r[0]:(a.memoizedState=[e,n],e)}function Gp(e,n){var a=nn();n=n===void 0?null:n;var r=a.memoizedState;if(n!==null&&Su(n,r[1]))return r[0];if(r=e(),rs){lt(!0);try{e()}finally{lt(!1)}}return a.memoizedState=[r,n],r}function Uu(e,n,a){return a===void 0||(_a&1073741824)!==0?e.memoizedState=n:(e.memoizedState=a,e=Xm(),ue.lanes|=e,Ea|=e,a)}function Vp(e,n,a,r){return Wn(a,n)?a:Bs.current!==null?(e=Uu(e,a,r),Wn(e,n)||(mn=!0),e):(_a&42)===0?(mn=!0,e.memoizedState=a):(e=Xm(),ue.lanes|=e,Ea|=e,n)}function kp(e,n,a,r,c){var f=Z.p;Z.p=f!==0&&8>f?f:8;var x=z.T,b={};z.T=b,Ou(e,!1,n,a);try{var P=c(),J=z.S;if(J!==null&&J(b,P),P!==null&&typeof P=="object"&&typeof P.then=="function"){var ct=y0(P,r);Jr(e,n,ct,Kn(e))}else Jr(e,n,r,Kn(e))}catch(_t){Jr(e,n,{then:function(){},status:"rejected",reason:_t},Kn())}finally{Z.p=f,z.T=x}}function A0(){}function Lu(e,n,a,r){if(e.tag!==5)throw Error(s(476));var c=Xp(e).queue;kp(e,c,n,Y,a===null?A0:function(){return Wp(e),a(r)})}function Xp(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:Y,baseState:Y,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Gi,lastRenderedState:Y},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Gi,lastRenderedState:a},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function Wp(e){var n=Xp(e).next.queue;Jr(e,n,{},Kn())}function Nu(){return Rn(go)}function qp(){return nn().memoizedState}function Yp(){return nn().memoizedState}function R0(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var a=Kn();e=pa(a);var r=ma(n,e,a);r!==null&&(Qn(r,n,a),qr(r,n,a)),n={cache:cu()},e.payload=n;return}n=n.return}}function C0(e,n,a){var r=Kn();a={lane:r,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null},dl(e)?Zp(n,a):(a=$c(e,n,a,r),a!==null&&(Qn(a,e,r),Kp(a,n,r)))}function jp(e,n,a){var r=Kn();Jr(e,n,a,r)}function Jr(e,n,a,r){var c={lane:r,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null};if(dl(e))Zp(n,c);else{var f=e.alternate;if(e.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var x=n.lastRenderedState,b=f(x,a);if(c.hasEagerState=!0,c.eagerState=b,Wn(b,x))return Ko(e,n,c,0),Xe===null&&Zo(),!1}catch{}finally{}if(a=$c(e,n,c,r),a!==null)return Qn(a,e,r),Kp(a,n,r),!0}return!1}function Ou(e,n,a,r){if(r={lane:2,revertLane:df(),action:r,hasEagerState:!1,eagerState:null,next:null},dl(e)){if(n)throw Error(s(479))}else n=$c(e,a,r,2),n!==null&&Qn(n,e,2)}function dl(e){var n=e.alternate;return e===ue||n!==null&&n===ue}function Zp(e,n){Fs=ol=!0;var a=e.pending;a===null?n.next=n:(n.next=a.next,a.next=n),e.pending=n}function Kp(e,n,a){if((a&4194048)!==0){var r=n.lanes;r&=e.pendingLanes,a|=r,n.lanes=a,Bt(e,a)}}var pl={readContext:Rn,use:cl,useCallback:Qe,useContext:Qe,useEffect:Qe,useImperativeHandle:Qe,useLayoutEffect:Qe,useInsertionEffect:Qe,useMemo:Qe,useReducer:Qe,useRef:Qe,useState:Qe,useDebugValue:Qe,useDeferredValue:Qe,useTransition:Qe,useSyncExternalStore:Qe,useId:Qe,useHostTransitionStatus:Qe,useFormState:Qe,useActionState:Qe,useOptimistic:Qe,useMemoCache:Qe,useCacheRefresh:Qe},Qp={readContext:Rn,use:cl,useCallback:function(e,n){return Pn().memoizedState=[e,n===void 0?null:n],e},useContext:Rn,useEffect:Op,useImperativeHandle:function(e,n,a){a=a!=null?a.concat([e]):null,hl(4194308,4,Bp.bind(null,n,e),a)},useLayoutEffect:function(e,n){return hl(4194308,4,e,n)},useInsertionEffect:function(e,n){hl(4,2,e,n)},useMemo:function(e,n){var a=Pn();n=n===void 0?null:n;var r=e();if(rs){lt(!0);try{e()}finally{lt(!1)}}return a.memoizedState=[r,n],r},useReducer:function(e,n,a){var r=Pn();if(a!==void 0){var c=a(n);if(rs){lt(!0);try{a(n)}finally{lt(!1)}}}else c=n;return r.memoizedState=r.baseState=c,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:c},r.queue=e,e=e.dispatch=C0.bind(null,ue,e),[r.memoizedState,e]},useRef:function(e){var n=Pn();return e={current:e},n.memoizedState=e},useState:function(e){e=Cu(e);var n=e.queue,a=jp.bind(null,ue,n);return n.dispatch=a,[e.memoizedState,a]},useDebugValue:Du,useDeferredValue:function(e,n){var a=Pn();return Uu(a,e,n)},useTransition:function(){var e=Cu(!1);return e=kp.bind(null,ue,e.queue,!0,!1),Pn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,a){var r=ue,c=Pn();if(Ce){if(a===void 0)throw Error(s(407));a=a()}else{if(a=n(),Xe===null)throw Error(s(349));(ye&124)!==0||vp(r,n,a)}c.memoizedState=a;var f={value:a,getSnapshot:n};return c.queue=f,Op(xp.bind(null,r,f,e),[e]),r.flags|=2048,Gs(9,fl(),Sp.bind(null,r,f,a,n),null),a},useId:function(){var e=Pn(),n=Xe.identifierPrefix;if(Ce){var a=Bi,r=Ii;a=(r&~(1<<32-Ot(r)-1)).toString(32)+a,n="«"+n+"R"+a,a=ll++,0<a&&(n+="H"+a.toString(32)),n+="»"}else a=M0++,n="«"+n+"r"+a.toString(32)+"»";return e.memoizedState=n},useHostTransitionStatus:Nu,useFormState:wp,useActionState:wp,useOptimistic:function(e){var n=Pn();n.memoizedState=n.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=Ou.bind(null,ue,!0,a),a.dispatch=n,[e,n]},useMemoCache:bu,useCacheRefresh:function(){return Pn().memoizedState=R0.bind(null,ue)}},Jp={readContext:Rn,use:cl,useCallback:Hp,useContext:Rn,useEffect:Pp,useImperativeHandle:Fp,useInsertionEffect:zp,useLayoutEffect:Ip,useMemo:Gp,useReducer:ul,useRef:Np,useState:function(){return ul(Gi)},useDebugValue:Du,useDeferredValue:function(e,n){var a=nn();return Vp(a,Oe.memoizedState,e,n)},useTransition:function(){var e=ul(Gi)[0],n=nn().memoizedState;return[typeof e=="boolean"?e:Kr(e),n]},useSyncExternalStore:gp,useId:qp,useHostTransitionStatus:Nu,useFormState:Dp,useActionState:Dp,useOptimistic:function(e,n){var a=nn();return Ep(a,Oe,e,n)},useMemoCache:bu,useCacheRefresh:Yp},w0={readContext:Rn,use:cl,useCallback:Hp,useContext:Rn,useEffect:Pp,useImperativeHandle:Fp,useInsertionEffect:zp,useLayoutEffect:Ip,useMemo:Gp,useReducer:Ru,useRef:Np,useState:function(){return Ru(Gi)},useDebugValue:Du,useDeferredValue:function(e,n){var a=nn();return Oe===null?Uu(a,e,n):Vp(a,Oe.memoizedState,e,n)},useTransition:function(){var e=Ru(Gi)[0],n=nn().memoizedState;return[typeof e=="boolean"?e:Kr(e),n]},useSyncExternalStore:gp,useId:qp,useHostTransitionStatus:Nu,useFormState:Lp,useActionState:Lp,useOptimistic:function(e,n){var a=nn();return Oe!==null?Ep(a,Oe,e,n):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:bu,useCacheRefresh:Yp},Vs=null,$r=0;function ml(e){var n=$r;return $r+=1,Vs===null&&(Vs=[]),cp(Vs,e,n)}function to(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function _l(e,n){throw n.$$typeof===v?Error(s(525)):(e=Object.prototype.toString.call(n),Error(s(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function $p(e){var n=e._init;return n(e._payload)}function tm(e){function n(X,H){if(e){var K=X.deletions;K===null?(X.deletions=[H],X.flags|=16):K.push(H)}}function a(X,H){if(!e)return null;for(;H!==null;)n(X,H),H=H.sibling;return null}function r(X){for(var H=new Map;X!==null;)X.key!==null?H.set(X.key,X):H.set(X.index,X),X=X.sibling;return H}function c(X,H){return X=zi(X,H),X.index=0,X.sibling=null,X}function f(X,H,K){return X.index=K,e?(K=X.alternate,K!==null?(K=K.index,K<H?(X.flags|=67108866,H):K):(X.flags|=67108866,H)):(X.flags|=1048576,H)}function x(X){return e&&X.alternate===null&&(X.flags|=67108866),X}function b(X,H,K,ht){return H===null||H.tag!==6?(H=eu(K,X.mode,ht),H.return=X,H):(H=c(H,K),H.return=X,H)}function P(X,H,K,ht){var Ft=K.type;return Ft===T?ct(X,H,K.props.children,ht,K.key):H!==null&&(H.elementType===Ft||typeof Ft=="object"&&Ft!==null&&Ft.$$typeof===q&&$p(Ft)===H.type)?(H=c(H,K.props),to(H,K),H.return=X,H):(H=Jo(K.type,K.key,K.props,null,X.mode,ht),to(H,K),H.return=X,H)}function J(X,H,K,ht){return H===null||H.tag!==4||H.stateNode.containerInfo!==K.containerInfo||H.stateNode.implementation!==K.implementation?(H=nu(K,X.mode,ht),H.return=X,H):(H=c(H,K.children||[]),H.return=X,H)}function ct(X,H,K,ht,Ft){return H===null||H.tag!==7?(H=Ja(K,X.mode,ht,Ft),H.return=X,H):(H=c(H,K),H.return=X,H)}function _t(X,H,K){if(typeof H=="string"&&H!==""||typeof H=="number"||typeof H=="bigint")return H=eu(""+H,X.mode,K),H.return=X,H;if(typeof H=="object"&&H!==null){switch(H.$$typeof){case S:return K=Jo(H.type,H.key,H.props,null,X.mode,K),to(K,H),K.return=X,K;case M:return H=nu(H,X.mode,K),H.return=X,H;case q:var ht=H._init;return H=ht(H._payload),_t(X,H,K)}if(ut(H)||ot(H))return H=Ja(H,X.mode,K,null),H.return=X,H;if(typeof H.then=="function")return _t(X,ml(H),K);if(H.$$typeof===U)return _t(X,nl(X,H),K);_l(X,H)}return null}function nt(X,H,K,ht){var Ft=H!==null?H.key:null;if(typeof K=="string"&&K!==""||typeof K=="number"||typeof K=="bigint")return Ft!==null?null:b(X,H,""+K,ht);if(typeof K=="object"&&K!==null){switch(K.$$typeof){case S:return K.key===Ft?P(X,H,K,ht):null;case M:return K.key===Ft?J(X,H,K,ht):null;case q:return Ft=K._init,K=Ft(K._payload),nt(X,H,K,ht)}if(ut(K)||ot(K))return Ft!==null?null:ct(X,H,K,ht,null);if(typeof K.then=="function")return nt(X,H,ml(K),ht);if(K.$$typeof===U)return nt(X,H,nl(X,K),ht);_l(X,K)}return null}function it(X,H,K,ht,Ft){if(typeof ht=="string"&&ht!==""||typeof ht=="number"||typeof ht=="bigint")return X=X.get(K)||null,b(H,X,""+ht,Ft);if(typeof ht=="object"&&ht!==null){switch(ht.$$typeof){case S:return X=X.get(ht.key===null?K:ht.key)||null,P(H,X,ht,Ft);case M:return X=X.get(ht.key===null?K:ht.key)||null,J(H,X,ht,Ft);case q:var fe=ht._init;return ht=fe(ht._payload),it(X,H,K,ht,Ft)}if(ut(ht)||ot(ht))return X=X.get(K)||null,ct(H,X,ht,Ft,null);if(typeof ht.then=="function")return it(X,H,K,ml(ht),Ft);if(ht.$$typeof===U)return it(X,H,K,nl(H,ht),Ft);_l(H,ht)}return null}function te(X,H,K,ht){for(var Ft=null,fe=null,Xt=H,$t=H=0,gn=null;Xt!==null&&$t<K.length;$t++){Xt.index>$t?(gn=Xt,Xt=null):gn=Xt.sibling;var be=nt(X,Xt,K[$t],ht);if(be===null){Xt===null&&(Xt=gn);break}e&&Xt&&be.alternate===null&&n(X,Xt),H=f(be,H,$t),fe===null?Ft=be:fe.sibling=be,fe=be,Xt=gn}if($t===K.length)return a(X,Xt),Ce&&ts(X,$t),Ft;if(Xt===null){for(;$t<K.length;$t++)Xt=_t(X,K[$t],ht),Xt!==null&&(H=f(Xt,H,$t),fe===null?Ft=Xt:fe.sibling=Xt,fe=Xt);return Ce&&ts(X,$t),Ft}for(Xt=r(Xt);$t<K.length;$t++)gn=it(Xt,X,$t,K[$t],ht),gn!==null&&(e&&gn.alternate!==null&&Xt.delete(gn.key===null?$t:gn.key),H=f(gn,H,$t),fe===null?Ft=gn:fe.sibling=gn,fe=gn);return e&&Xt.forEach(function(La){return n(X,La)}),Ce&&ts(X,$t),Ft}function Qt(X,H,K,ht){if(K==null)throw Error(s(151));for(var Ft=null,fe=null,Xt=H,$t=H=0,gn=null,be=K.next();Xt!==null&&!be.done;$t++,be=K.next()){Xt.index>$t?(gn=Xt,Xt=null):gn=Xt.sibling;var La=nt(X,Xt,be.value,ht);if(La===null){Xt===null&&(Xt=gn);break}e&&Xt&&La.alternate===null&&n(X,Xt),H=f(La,H,$t),fe===null?Ft=La:fe.sibling=La,fe=La,Xt=gn}if(be.done)return a(X,Xt),Ce&&ts(X,$t),Ft;if(Xt===null){for(;!be.done;$t++,be=K.next())be=_t(X,be.value,ht),be!==null&&(H=f(be,H,$t),fe===null?Ft=be:fe.sibling=be,fe=be);return Ce&&ts(X,$t),Ft}for(Xt=r(Xt);!be.done;$t++,be=K.next())be=it(Xt,X,$t,be.value,ht),be!==null&&(e&&be.alternate!==null&&Xt.delete(be.key===null?$t:be.key),H=f(be,H,$t),fe===null?Ft=be:fe.sibling=be,fe=be);return e&&Xt.forEach(function(DS){return n(X,DS)}),Ce&&ts(X,$t),Ft}function ze(X,H,K,ht){if(typeof K=="object"&&K!==null&&K.type===T&&K.key===null&&(K=K.props.children),typeof K=="object"&&K!==null){switch(K.$$typeof){case S:t:{for(var Ft=K.key;H!==null;){if(H.key===Ft){if(Ft=K.type,Ft===T){if(H.tag===7){a(X,H.sibling),ht=c(H,K.props.children),ht.return=X,X=ht;break t}}else if(H.elementType===Ft||typeof Ft=="object"&&Ft!==null&&Ft.$$typeof===q&&$p(Ft)===H.type){a(X,H.sibling),ht=c(H,K.props),to(ht,K),ht.return=X,X=ht;break t}a(X,H);break}else n(X,H);H=H.sibling}K.type===T?(ht=Ja(K.props.children,X.mode,ht,K.key),ht.return=X,X=ht):(ht=Jo(K.type,K.key,K.props,null,X.mode,ht),to(ht,K),ht.return=X,X=ht)}return x(X);case M:t:{for(Ft=K.key;H!==null;){if(H.key===Ft)if(H.tag===4&&H.stateNode.containerInfo===K.containerInfo&&H.stateNode.implementation===K.implementation){a(X,H.sibling),ht=c(H,K.children||[]),ht.return=X,X=ht;break t}else{a(X,H);break}else n(X,H);H=H.sibling}ht=nu(K,X.mode,ht),ht.return=X,X=ht}return x(X);case q:return Ft=K._init,K=Ft(K._payload),ze(X,H,K,ht)}if(ut(K))return te(X,H,K,ht);if(ot(K)){if(Ft=ot(K),typeof Ft!="function")throw Error(s(150));return K=Ft.call(K),Qt(X,H,K,ht)}if(typeof K.then=="function")return ze(X,H,ml(K),ht);if(K.$$typeof===U)return ze(X,H,nl(X,K),ht);_l(X,K)}return typeof K=="string"&&K!==""||typeof K=="number"||typeof K=="bigint"?(K=""+K,H!==null&&H.tag===6?(a(X,H.sibling),ht=c(H,K),ht.return=X,X=ht):(a(X,H),ht=eu(K,X.mode,ht),ht.return=X,X=ht),x(X)):a(X,H)}return function(X,H,K,ht){try{$r=0;var Ft=ze(X,H,K,ht);return Vs=null,Ft}catch(Xt){if(Xt===Xr||Xt===al)throw Xt;var fe=qn(29,Xt,null,X.mode);return fe.lanes=ht,fe.return=X,fe}finally{}}}var ks=tm(!0),em=tm(!1),ai=$(null),Mi=null;function ga(e){var n=e.alternate;xt(cn,cn.current&1),xt(ai,e),Mi===null&&(n===null||Bs.current!==null||n.memoizedState!==null)&&(Mi=e)}function nm(e){if(e.tag===22){if(xt(cn,cn.current),xt(ai,e),Mi===null){var n=e.alternate;n!==null&&n.memoizedState!==null&&(Mi=e)}}else va()}function va(){xt(cn,cn.current),xt(ai,ai.current)}function Vi(e){vt(ai),Mi===e&&(Mi=null),vt(cn)}var cn=$(0);function gl(e){for(var n=e;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||bf(a)))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}function Pu(e,n,a,r){n=e.memoizedState,a=a(r,n),a=a==null?n:_({},n,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var zu={enqueueSetState:function(e,n,a){e=e._reactInternals;var r=Kn(),c=pa(r);c.payload=n,a!=null&&(c.callback=a),n=ma(e,c,r),n!==null&&(Qn(n,e,r),qr(n,e,r))},enqueueReplaceState:function(e,n,a){e=e._reactInternals;var r=Kn(),c=pa(r);c.tag=1,c.payload=n,a!=null&&(c.callback=a),n=ma(e,c,r),n!==null&&(Qn(n,e,r),qr(n,e,r))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var a=Kn(),r=pa(a);r.tag=2,n!=null&&(r.callback=n),n=ma(e,r,a),n!==null&&(Qn(n,e,a),qr(n,e,a))}};function im(e,n,a,r,c,f,x){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,f,x):n.prototype&&n.prototype.isPureReactComponent?!zr(a,r)||!zr(c,f):!0}function am(e,n,a,r){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,r),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,r),n.state!==e&&zu.enqueueReplaceState(n,n.state,null)}function os(e,n){var a=n;if("ref"in n){a={};for(var r in n)r!=="ref"&&(a[r]=n[r])}if(e=e.defaultProps){a===n&&(a=_({},a));for(var c in e)a[c]===void 0&&(a[c]=e[c])}return a}var vl=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function sm(e){vl(e)}function rm(e){console.error(e)}function om(e){vl(e)}function Sl(e,n){try{var a=e.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(r){setTimeout(function(){throw r})}}function lm(e,n,a){try{var r=e.onCaughtError;r(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(c){setTimeout(function(){throw c})}}function Iu(e,n,a){return a=pa(a),a.tag=3,a.payload={element:null},a.callback=function(){Sl(e,n)},a}function cm(e){return e=pa(e),e.tag=3,e}function um(e,n,a,r){var c=a.type.getDerivedStateFromError;if(typeof c=="function"){var f=r.value;e.payload=function(){return c(f)},e.callback=function(){lm(n,a,r)}}var x=a.stateNode;x!==null&&typeof x.componentDidCatch=="function"&&(e.callback=function(){lm(n,a,r),typeof c!="function"&&(Ta===null?Ta=new Set([this]):Ta.add(this));var b=r.stack;this.componentDidCatch(r.value,{componentStack:b!==null?b:""})})}function D0(e,n,a,r,c){if(a.flags|=32768,r!==null&&typeof r=="object"&&typeof r.then=="function"){if(n=a.alternate,n!==null&&Gr(n,a,c,!0),a=ai.current,a!==null){switch(a.tag){case 13:return Mi===null?lf():a.alternate===null&&Ze===0&&(Ze=3),a.flags&=-257,a.flags|=65536,a.lanes=c,r===hu?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([r]):n.add(r),uf(e,r,c)),!1;case 22:return a.flags|=65536,r===hu?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([r])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([r]):a.add(r)),uf(e,r,c)),!1}throw Error(s(435,a.tag))}return uf(e,r,c),lf(),!1}if(Ce)return n=ai.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=c,r!==su&&(e=Error(s(422),{cause:r}),Hr(ti(e,a)))):(r!==su&&(n=Error(s(423),{cause:r}),Hr(ti(n,a))),e=e.current.alternate,e.flags|=65536,c&=-c,e.lanes|=c,r=ti(r,a),c=Iu(e.stateNode,r,c),mu(e,c),Ze!==4&&(Ze=2)),!1;var f=Error(s(520),{cause:r});if(f=ti(f,a),oo===null?oo=[f]:oo.push(f),Ze!==4&&(Ze=2),n===null)return!0;r=ti(r,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,e=c&-c,a.lanes|=e,e=Iu(a.stateNode,r,e),mu(a,e),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(Ta===null||!Ta.has(f))))return a.flags|=65536,c&=-c,a.lanes|=c,c=cm(c),um(c,e,a,r),mu(a,c),!1}a=a.return}while(a!==null);return!1}var fm=Error(s(461)),mn=!1;function Mn(e,n,a,r){n.child=e===null?em(n,null,a,r):ks(n,e.child,a,r)}function hm(e,n,a,r,c){a=a.render;var f=n.ref;if("ref"in r){var x={};for(var b in r)b!=="ref"&&(x[b]=r[b])}else x=r;return as(n),r=xu(e,n,a,x,f,c),b=yu(),e!==null&&!mn?(Mu(e,n,c),ki(e,n,c)):(Ce&&b&&iu(n),n.flags|=1,Mn(e,n,r,c),n.child)}function dm(e,n,a,r,c){if(e===null){var f=a.type;return typeof f=="function"&&!tu(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,pm(e,n,f,r,c)):(e=Jo(a.type,null,r,n,n.mode,c),e.ref=n.ref,e.return=n,n.child=e)}if(f=e.child,!Wu(e,c)){var x=f.memoizedProps;if(a=a.compare,a=a!==null?a:zr,a(x,r)&&e.ref===n.ref)return ki(e,n,c)}return n.flags|=1,e=zi(f,r),e.ref=n.ref,e.return=n,n.child=e}function pm(e,n,a,r,c){if(e!==null){var f=e.memoizedProps;if(zr(f,r)&&e.ref===n.ref)if(mn=!1,n.pendingProps=r=f,Wu(e,c))(e.flags&131072)!==0&&(mn=!0);else return n.lanes=e.lanes,ki(e,n,c)}return Bu(e,n,a,r,c)}function mm(e,n,a){var r=n.pendingProps,c=r.children,f=e!==null?e.memoizedState:null;if(r.mode==="hidden"){if((n.flags&128)!==0){if(r=f!==null?f.baseLanes|a:a,e!==null){for(c=n.child=e.child,f=0;c!==null;)f=f|c.lanes|c.childLanes,c=c.sibling;n.childLanes=f&~r}else n.childLanes=0,n.child=null;return _m(e,n,r,a)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&il(n,f!==null?f.cachePool:null),f!==null?pp(n,f):gu(),nm(n);else return n.lanes=n.childLanes=536870912,_m(e,n,f!==null?f.baseLanes|a:a,a)}else f!==null?(il(n,f.cachePool),pp(n,f),va(),n.memoizedState=null):(e!==null&&il(n,null),gu(),va());return Mn(e,n,c,a),n.child}function _m(e,n,a,r){var c=fu();return c=c===null?null:{parent:ln._currentValue,pool:c},n.memoizedState={baseLanes:a,cachePool:c},e!==null&&il(n,null),gu(),nm(n),e!==null&&Gr(e,n,r,!0),null}function xl(e,n){var a=n.ref;if(a===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(e===null||e.ref!==a)&&(n.flags|=4194816)}}function Bu(e,n,a,r,c){return as(n),a=xu(e,n,a,r,void 0,c),r=yu(),e!==null&&!mn?(Mu(e,n,c),ki(e,n,c)):(Ce&&r&&iu(n),n.flags|=1,Mn(e,n,a,c),n.child)}function gm(e,n,a,r,c,f){return as(n),n.updateQueue=null,a=_p(n,r,a,c),mp(e),r=yu(),e!==null&&!mn?(Mu(e,n,f),ki(e,n,f)):(Ce&&r&&iu(n),n.flags|=1,Mn(e,n,a,f),n.child)}function vm(e,n,a,r,c){if(as(n),n.stateNode===null){var f=Ns,x=a.contextType;typeof x=="object"&&x!==null&&(f=Rn(x)),f=new a(r,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=zu,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=r,f.state=n.memoizedState,f.refs={},du(n),x=a.contextType,f.context=typeof x=="object"&&x!==null?Rn(x):Ns,f.state=n.memoizedState,x=a.getDerivedStateFromProps,typeof x=="function"&&(Pu(n,a,x,r),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(x=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),x!==f.state&&zu.enqueueReplaceState(f,f.state,null),jr(n,r,f,c),Yr(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),r=!0}else if(e===null){f=n.stateNode;var b=n.memoizedProps,P=os(a,b);f.props=P;var J=f.context,ct=a.contextType;x=Ns,typeof ct=="object"&&ct!==null&&(x=Rn(ct));var _t=a.getDerivedStateFromProps;ct=typeof _t=="function"||typeof f.getSnapshotBeforeUpdate=="function",b=n.pendingProps!==b,ct||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(b||J!==x)&&am(n,f,r,x),da=!1;var nt=n.memoizedState;f.state=nt,jr(n,r,f,c),Yr(),J=n.memoizedState,b||nt!==J||da?(typeof _t=="function"&&(Pu(n,a,_t,r),J=n.memoizedState),(P=da||im(n,a,P,r,nt,J,x))?(ct||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=r,n.memoizedState=J),f.props=r,f.state=J,f.context=x,r=P):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),r=!1)}else{f=n.stateNode,pu(e,n),x=n.memoizedProps,ct=os(a,x),f.props=ct,_t=n.pendingProps,nt=f.context,J=a.contextType,P=Ns,typeof J=="object"&&J!==null&&(P=Rn(J)),b=a.getDerivedStateFromProps,(J=typeof b=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(x!==_t||nt!==P)&&am(n,f,r,P),da=!1,nt=n.memoizedState,f.state=nt,jr(n,r,f,c),Yr();var it=n.memoizedState;x!==_t||nt!==it||da||e!==null&&e.dependencies!==null&&el(e.dependencies)?(typeof b=="function"&&(Pu(n,a,b,r),it=n.memoizedState),(ct=da||im(n,a,ct,r,nt,it,P)||e!==null&&e.dependencies!==null&&el(e.dependencies))?(J||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(r,it,P),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(r,it,P)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||x===e.memoizedProps&&nt===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||x===e.memoizedProps&&nt===e.memoizedState||(n.flags|=1024),n.memoizedProps=r,n.memoizedState=it),f.props=r,f.state=it,f.context=P,r=ct):(typeof f.componentDidUpdate!="function"||x===e.memoizedProps&&nt===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||x===e.memoizedProps&&nt===e.memoizedState||(n.flags|=1024),r=!1)}return f=r,xl(e,n),r=(n.flags&128)!==0,f||r?(f=n.stateNode,a=r&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,e!==null&&r?(n.child=ks(n,e.child,null,c),n.child=ks(n,null,a,c)):Mn(e,n,a,c),n.memoizedState=f.state,e=n.child):e=ki(e,n,c),e}function Sm(e,n,a,r){return Fr(),n.flags|=256,Mn(e,n,a,r),n.child}var Fu={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Hu(e){return{baseLanes:e,cachePool:rp()}}function Gu(e,n,a){return e=e!==null?e.childLanes&~a:0,n&&(e|=si),e}function xm(e,n,a){var r=n.pendingProps,c=!1,f=(n.flags&128)!==0,x;if((x=f)||(x=e!==null&&e.memoizedState===null?!1:(cn.current&2)!==0),x&&(c=!0,n.flags&=-129),x=(n.flags&32)!==0,n.flags&=-33,e===null){if(Ce){if(c?ga(n):va(),Ce){var b=je,P;if(P=b){t:{for(P=b,b=yi;P.nodeType!==8;){if(!b){b=null;break t}if(P=hi(P.nextSibling),P===null){b=null;break t}}b=P}b!==null?(n.memoizedState={dehydrated:b,treeContext:$a!==null?{id:Ii,overflow:Bi}:null,retryLane:536870912,hydrationErrors:null},P=qn(18,null,null,0),P.stateNode=b,P.return=n,n.child=P,Un=n,je=null,P=!0):P=!1}P||ns(n)}if(b=n.memoizedState,b!==null&&(b=b.dehydrated,b!==null))return bf(b)?n.lanes=32:n.lanes=536870912,null;Vi(n)}return b=r.children,r=r.fallback,c?(va(),c=n.mode,b=yl({mode:"hidden",children:b},c),r=Ja(r,c,a,null),b.return=n,r.return=n,b.sibling=r,n.child=b,c=n.child,c.memoizedState=Hu(a),c.childLanes=Gu(e,x,a),n.memoizedState=Fu,r):(ga(n),Vu(n,b))}if(P=e.memoizedState,P!==null&&(b=P.dehydrated,b!==null)){if(f)n.flags&256?(ga(n),n.flags&=-257,n=ku(e,n,a)):n.memoizedState!==null?(va(),n.child=e.child,n.flags|=128,n=null):(va(),c=r.fallback,b=n.mode,r=yl({mode:"visible",children:r.children},b),c=Ja(c,b,a,null),c.flags|=2,r.return=n,c.return=n,r.sibling=c,n.child=r,ks(n,e.child,null,a),r=n.child,r.memoizedState=Hu(a),r.childLanes=Gu(e,x,a),n.memoizedState=Fu,n=c);else if(ga(n),bf(b)){if(x=b.nextSibling&&b.nextSibling.dataset,x)var J=x.dgst;x=J,r=Error(s(419)),r.stack="",r.digest=x,Hr({value:r,source:null,stack:null}),n=ku(e,n,a)}else if(mn||Gr(e,n,a,!1),x=(a&e.childLanes)!==0,mn||x){if(x=Xe,x!==null&&(r=a&-a,r=(r&42)!==0?1:ne(r),r=(r&(x.suspendedLanes|a))!==0?0:r,r!==0&&r!==P.retryLane))throw P.retryLane=r,Ls(e,r),Qn(x,e,r),fm;b.data==="$?"||lf(),n=ku(e,n,a)}else b.data==="$?"?(n.flags|=192,n.child=e.child,n=null):(e=P.treeContext,je=hi(b.nextSibling),Un=n,Ce=!0,es=null,yi=!1,e!==null&&(ni[ii++]=Ii,ni[ii++]=Bi,ni[ii++]=$a,Ii=e.id,Bi=e.overflow,$a=n),n=Vu(n,r.children),n.flags|=4096);return n}return c?(va(),c=r.fallback,b=n.mode,P=e.child,J=P.sibling,r=zi(P,{mode:"hidden",children:r.children}),r.subtreeFlags=P.subtreeFlags&65011712,J!==null?c=zi(J,c):(c=Ja(c,b,a,null),c.flags|=2),c.return=n,r.return=n,r.sibling=c,n.child=r,r=c,c=n.child,b=e.child.memoizedState,b===null?b=Hu(a):(P=b.cachePool,P!==null?(J=ln._currentValue,P=P.parent!==J?{parent:J,pool:J}:P):P=rp(),b={baseLanes:b.baseLanes|a,cachePool:P}),c.memoizedState=b,c.childLanes=Gu(e,x,a),n.memoizedState=Fu,r):(ga(n),a=e.child,e=a.sibling,a=zi(a,{mode:"visible",children:r.children}),a.return=n,a.sibling=null,e!==null&&(x=n.deletions,x===null?(n.deletions=[e],n.flags|=16):x.push(e)),n.child=a,n.memoizedState=null,a)}function Vu(e,n){return n=yl({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function yl(e,n){return e=qn(22,e,null,n),e.lanes=0,e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},e}function ku(e,n,a){return ks(n,e.child,null,a),e=Vu(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function ym(e,n,a){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n),ou(e.return,n,a)}function Xu(e,n,a,r,c){var f=e.memoizedState;f===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:r,tail:a,tailMode:c}:(f.isBackwards=n,f.rendering=null,f.renderingStartTime=0,f.last=r,f.tail=a,f.tailMode=c)}function Mm(e,n,a){var r=n.pendingProps,c=r.revealOrder,f=r.tail;if(Mn(e,n,r.children,a),r=cn.current,(r&2)!==0)r=r&1|2,n.flags|=128;else{if(e!==null&&(e.flags&128)!==0)t:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&ym(e,a,n);else if(e.tag===19)ym(e,a,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break t;for(;e.sibling===null;){if(e.return===null||e.return===n)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}switch(xt(cn,r),c){case"forwards":for(a=n.child,c=null;a!==null;)e=a.alternate,e!==null&&gl(e)===null&&(c=a),a=a.sibling;a=c,a===null?(c=n.child,n.child=null):(c=a.sibling,a.sibling=null),Xu(n,!1,c,a,f);break;case"backwards":for(a=null,c=n.child,n.child=null;c!==null;){if(e=c.alternate,e!==null&&gl(e)===null){n.child=c;break}e=c.sibling,c.sibling=a,a=c,c=e}Xu(n,!0,a,null,f);break;case"together":Xu(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function ki(e,n,a){if(e!==null&&(n.dependencies=e.dependencies),Ea|=n.lanes,(a&n.childLanes)===0)if(e!==null){if(Gr(e,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(s(153));if(n.child!==null){for(e=n.child,a=zi(e,e.pendingProps),n.child=a,a.return=n;e.sibling!==null;)e=e.sibling,a=a.sibling=zi(e,e.pendingProps),a.return=n;a.sibling=null}return n.child}function Wu(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&el(e)))}function U0(e,n,a){switch(n.tag){case 3:Ct(n,n.stateNode.containerInfo),ha(n,ln,e.memoizedState.cache),Fr();break;case 27:case 5:Kt(n);break;case 4:Ct(n,n.stateNode.containerInfo);break;case 10:ha(n,n.type,n.memoizedProps.value);break;case 13:var r=n.memoizedState;if(r!==null)return r.dehydrated!==null?(ga(n),n.flags|=128,null):(a&n.child.childLanes)!==0?xm(e,n,a):(ga(n),e=ki(e,n,a),e!==null?e.sibling:null);ga(n);break;case 19:var c=(e.flags&128)!==0;if(r=(a&n.childLanes)!==0,r||(Gr(e,n,a,!1),r=(a&n.childLanes)!==0),c){if(r)return Mm(e,n,a);n.flags|=128}if(c=n.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),xt(cn,cn.current),r)break;return null;case 22:case 23:return n.lanes=0,mm(e,n,a);case 24:ha(n,ln,e.memoizedState.cache)}return ki(e,n,a)}function Em(e,n,a){if(e!==null)if(e.memoizedProps!==n.pendingProps)mn=!0;else{if(!Wu(e,a)&&(n.flags&128)===0)return mn=!1,U0(e,n,a);mn=(e.flags&131072)!==0}else mn=!1,Ce&&(n.flags&1048576)!==0&&$d(n,tl,n.index);switch(n.lanes=0,n.tag){case 16:t:{e=n.pendingProps;var r=n.elementType,c=r._init;if(r=c(r._payload),n.type=r,typeof r=="function")tu(r)?(e=os(r,e),n.tag=1,n=vm(null,n,r,e,a)):(n.tag=0,n=Bu(null,n,r,e,a));else{if(r!=null){if(c=r.$$typeof,c===w){n.tag=11,n=hm(null,n,r,e,a);break t}else if(c===I){n.tag=14,n=dm(null,n,r,e,a);break t}}throw n=pt(r)||r,Error(s(306,n,""))}}return n;case 0:return Bu(e,n,n.type,n.pendingProps,a);case 1:return r=n.type,c=os(r,n.pendingProps),vm(e,n,r,c,a);case 3:t:{if(Ct(n,n.stateNode.containerInfo),e===null)throw Error(s(387));r=n.pendingProps;var f=n.memoizedState;c=f.element,pu(e,n),jr(n,r,null,a);var x=n.memoizedState;if(r=x.cache,ha(n,ln,r),r!==f.cache&&lu(n,[ln],a,!0),Yr(),r=x.element,f.isDehydrated)if(f={element:r,isDehydrated:!1,cache:x.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=Sm(e,n,r,a);break t}else if(r!==c){c=ti(Error(s(424)),n),Hr(c),n=Sm(e,n,r,a);break t}else{switch(e=n.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(je=hi(e.firstChild),Un=n,Ce=!0,es=null,yi=!0,a=em(n,null,r,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(Fr(),r===c){n=ki(e,n,a);break t}Mn(e,n,r,a)}n=n.child}return n;case 26:return xl(e,n),e===null?(a=R_(n.type,null,n.pendingProps,null))?n.memoizedState=a:Ce||(a=n.type,e=n.pendingProps,r=Pl(yt.current).createElement(a),r[rn]=n,r[xn]=e,Tn(r,a,e),tn(r),n.stateNode=r):n.memoizedState=R_(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return Kt(n),e===null&&Ce&&(r=n.stateNode=T_(n.type,n.pendingProps,yt.current),Un=n,yi=!0,c=je,Ra(n.type)?(Af=c,je=hi(r.firstChild)):je=c),Mn(e,n,n.pendingProps.children,a),xl(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&Ce&&((c=r=je)&&(r=sS(r,n.type,n.pendingProps,yi),r!==null?(n.stateNode=r,Un=n,je=hi(r.firstChild),yi=!1,c=!0):c=!1),c||ns(n)),Kt(n),c=n.type,f=n.pendingProps,x=e!==null?e.memoizedProps:null,r=f.children,Mf(c,f)?r=null:x!==null&&Mf(c,x)&&(n.flags|=32),n.memoizedState!==null&&(c=xu(e,n,E0,null,null,a),go._currentValue=c),xl(e,n),Mn(e,n,r,a),n.child;case 6:return e===null&&Ce&&((e=a=je)&&(a=rS(a,n.pendingProps,yi),a!==null?(n.stateNode=a,Un=n,je=null,e=!0):e=!1),e||ns(n)),null;case 13:return xm(e,n,a);case 4:return Ct(n,n.stateNode.containerInfo),r=n.pendingProps,e===null?n.child=ks(n,null,r,a):Mn(e,n,r,a),n.child;case 11:return hm(e,n,n.type,n.pendingProps,a);case 7:return Mn(e,n,n.pendingProps,a),n.child;case 8:return Mn(e,n,n.pendingProps.children,a),n.child;case 12:return Mn(e,n,n.pendingProps.children,a),n.child;case 10:return r=n.pendingProps,ha(n,n.type,r.value),Mn(e,n,r.children,a),n.child;case 9:return c=n.type._context,r=n.pendingProps.children,as(n),c=Rn(c),r=r(c),n.flags|=1,Mn(e,n,r,a),n.child;case 14:return dm(e,n,n.type,n.pendingProps,a);case 15:return pm(e,n,n.type,n.pendingProps,a);case 19:return Mm(e,n,a);case 31:return r=n.pendingProps,a=n.mode,r={mode:r.mode,children:r.children},e===null?(a=yl(r,a),a.ref=n.ref,n.child=a,a.return=n,n=a):(a=zi(e.child,r),a.ref=n.ref,n.child=a,a.return=n,n=a),n;case 22:return mm(e,n,a);case 24:return as(n),r=Rn(ln),e===null?(c=fu(),c===null&&(c=Xe,f=cu(),c.pooledCache=f,f.refCount++,f!==null&&(c.pooledCacheLanes|=a),c=f),n.memoizedState={parent:r,cache:c},du(n),ha(n,ln,c)):((e.lanes&a)!==0&&(pu(e,n),jr(n,null,null,a),Yr()),c=e.memoizedState,f=n.memoizedState,c.parent!==r?(c={parent:r,cache:r},n.memoizedState=c,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=c),ha(n,ln,r)):(r=f.cache,ha(n,ln,r),r!==c.cache&&lu(n,[ln],a,!0))),Mn(e,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(s(156,n.tag))}function Xi(e){e.flags|=4}function Tm(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!L_(n)){if(n=ai.current,n!==null&&((ye&4194048)===ye?Mi!==null:(ye&62914560)!==ye&&(ye&536870912)===0||n!==Mi))throw Wr=hu,op;e.flags|=8192}}function Ml(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?Ut():536870912,e.lanes|=n,Ys|=n)}function eo(e,n){if(!Ce)switch(e.tailMode){case"hidden":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var r=null;a!==null;)a.alternate!==null&&(r=a),a=a.sibling;r===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function qe(e){var n=e.alternate!==null&&e.alternate.child===e.child,a=0,r=0;if(n)for(var c=e.child;c!==null;)a|=c.lanes|c.childLanes,r|=c.subtreeFlags&65011712,r|=c.flags&65011712,c.return=e,c=c.sibling;else for(c=e.child;c!==null;)a|=c.lanes|c.childLanes,r|=c.subtreeFlags,r|=c.flags,c.return=e,c=c.sibling;return e.subtreeFlags|=r,e.childLanes=a,n}function L0(e,n,a){var r=n.pendingProps;switch(au(n),n.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return qe(n),null;case 1:return qe(n),null;case 3:return a=n.stateNode,r=null,e!==null&&(r=e.memoizedState.cache),n.memoizedState.cache!==r&&(n.flags|=2048),Hi(ln),oe(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(Br(n)?Xi(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,np())),qe(n),null;case 26:return a=n.memoizedState,e===null?(Xi(n),a!==null?(qe(n),Tm(n,a)):(qe(n),n.flags&=-16777217)):a?a!==e.memoizedState?(Xi(n),qe(n),Tm(n,a)):(qe(n),n.flags&=-16777217):(e.memoizedProps!==r&&Xi(n),qe(n),n.flags&=-16777217),null;case 27:Ne(n),a=yt.current;var c=n.type;if(e!==null&&n.stateNode!=null)e.memoizedProps!==r&&Xi(n);else{if(!r){if(n.stateNode===null)throw Error(s(166));return qe(n),null}e=Q.current,Br(n)?tp(n):(e=T_(c,r,a),n.stateNode=e,Xi(n))}return qe(n),null;case 5:if(Ne(n),a=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==r&&Xi(n);else{if(!r){if(n.stateNode===null)throw Error(s(166));return qe(n),null}if(e=Q.current,Br(n))tp(n);else{switch(c=Pl(yt.current),e){case 1:e=c.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:e=c.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":e=c.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":e=c.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":e=c.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e=typeof r.is=="string"?c.createElement("select",{is:r.is}):c.createElement("select"),r.multiple?e.multiple=!0:r.size&&(e.size=r.size);break;default:e=typeof r.is=="string"?c.createElement(a,{is:r.is}):c.createElement(a)}}e[rn]=n,e[xn]=r;t:for(c=n.child;c!==null;){if(c.tag===5||c.tag===6)e.appendChild(c.stateNode);else if(c.tag!==4&&c.tag!==27&&c.child!==null){c.child.return=c,c=c.child;continue}if(c===n)break t;for(;c.sibling===null;){if(c.return===null||c.return===n)break t;c=c.return}c.sibling.return=c.return,c=c.sibling}n.stateNode=e;t:switch(Tn(e,a,r),a){case"button":case"input":case"select":case"textarea":e=!!r.autoFocus;break t;case"img":e=!0;break t;default:e=!1}e&&Xi(n)}}return qe(n),n.flags&=-16777217,null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==r&&Xi(n);else{if(typeof r!="string"&&n.stateNode===null)throw Error(s(166));if(e=yt.current,Br(n)){if(e=n.stateNode,a=n.memoizedProps,r=null,c=Un,c!==null)switch(c.tag){case 27:case 5:r=c.memoizedProps}e[rn]=n,e=!!(e.nodeValue===a||r!==null&&r.suppressHydrationWarning===!0||g_(e.nodeValue,a)),e||ns(n)}else e=Pl(e).createTextNode(r),e[rn]=n,n.stateNode=e}return qe(n),null;case 13:if(r=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(c=Br(n),r!==null&&r.dehydrated!==null){if(e===null){if(!c)throw Error(s(318));if(c=n.memoizedState,c=c!==null?c.dehydrated:null,!c)throw Error(s(317));c[rn]=n}else Fr(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;qe(n),c=!1}else c=np(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=c),c=!0;if(!c)return n.flags&256?(Vi(n),n):(Vi(n),null)}if(Vi(n),(n.flags&128)!==0)return n.lanes=a,n;if(a=r!==null,e=e!==null&&e.memoizedState!==null,a){r=n.child,c=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(c=r.alternate.memoizedState.cachePool.pool);var f=null;r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(f=r.memoizedState.cachePool.pool),f!==c&&(r.flags|=2048)}return a!==e&&a&&(n.child.flags|=8192),Ml(n,n.updateQueue),qe(n),null;case 4:return oe(),e===null&&gf(n.stateNode.containerInfo),qe(n),null;case 10:return Hi(n.type),qe(n),null;case 19:if(vt(cn),c=n.memoizedState,c===null)return qe(n),null;if(r=(n.flags&128)!==0,f=c.rendering,f===null)if(r)eo(c,!1);else{if(Ze!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(f=gl(e),f!==null){for(n.flags|=128,eo(c,!1),e=f.updateQueue,n.updateQueue=e,Ml(n,e),n.subtreeFlags=0,e=a,a=n.child;a!==null;)Jd(a,e),a=a.sibling;return xt(cn,cn.current&1|2),n.child}e=e.sibling}c.tail!==null&&de()>bl&&(n.flags|=128,r=!0,eo(c,!1),n.lanes=4194304)}else{if(!r)if(e=gl(f),e!==null){if(n.flags|=128,r=!0,e=e.updateQueue,n.updateQueue=e,Ml(n,e),eo(c,!0),c.tail===null&&c.tailMode==="hidden"&&!f.alternate&&!Ce)return qe(n),null}else 2*de()-c.renderingStartTime>bl&&a!==536870912&&(n.flags|=128,r=!0,eo(c,!1),n.lanes=4194304);c.isBackwards?(f.sibling=n.child,n.child=f):(e=c.last,e!==null?e.sibling=f:n.child=f,c.last=f)}return c.tail!==null?(n=c.tail,c.rendering=n,c.tail=n.sibling,c.renderingStartTime=de(),n.sibling=null,e=cn.current,xt(cn,r?e&1|2:e&1),n):(qe(n),null);case 22:case 23:return Vi(n),vu(),r=n.memoizedState!==null,e!==null?e.memoizedState!==null!==r&&(n.flags|=8192):r&&(n.flags|=8192),r?(a&536870912)!==0&&(n.flags&128)===0&&(qe(n),n.subtreeFlags&6&&(n.flags|=8192)):qe(n),a=n.updateQueue,a!==null&&Ml(n,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),r=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(r=n.memoizedState.cachePool.pool),r!==a&&(n.flags|=2048),e!==null&&vt(ss),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),Hi(ln),qe(n),null;case 25:return null;case 30:return null}throw Error(s(156,n.tag))}function N0(e,n){switch(au(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return Hi(ln),oe(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return Ne(n),null;case 13:if(Vi(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(s(340));Fr()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return vt(cn),null;case 4:return oe(),null;case 10:return Hi(n.type),null;case 22:case 23:return Vi(n),vu(),e!==null&&vt(ss),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return Hi(ln),null;case 25:return null;default:return null}}function bm(e,n){switch(au(n),n.tag){case 3:Hi(ln),oe();break;case 26:case 27:case 5:Ne(n);break;case 4:oe();break;case 13:Vi(n);break;case 19:vt(cn);break;case 10:Hi(n.type);break;case 22:case 23:Vi(n),vu(),e!==null&&vt(ss);break;case 24:Hi(ln)}}function no(e,n){try{var a=n.updateQueue,r=a!==null?a.lastEffect:null;if(r!==null){var c=r.next;a=c;do{if((a.tag&e)===e){r=void 0;var f=a.create,x=a.inst;r=f(),x.destroy=r}a=a.next}while(a!==c)}}catch(b){Ge(n,n.return,b)}}function Sa(e,n,a){try{var r=n.updateQueue,c=r!==null?r.lastEffect:null;if(c!==null){var f=c.next;r=f;do{if((r.tag&e)===e){var x=r.inst,b=x.destroy;if(b!==void 0){x.destroy=void 0,c=n;var P=a,J=b;try{J()}catch(ct){Ge(c,P,ct)}}}r=r.next}while(r!==f)}}catch(ct){Ge(n,n.return,ct)}}function Am(e){var n=e.updateQueue;if(n!==null){var a=e.stateNode;try{dp(n,a)}catch(r){Ge(e,e.return,r)}}}function Rm(e,n,a){a.props=os(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(r){Ge(e,n,r)}}function io(e,n){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var r=e.stateNode;break;case 30:r=e.stateNode;break;default:r=e.stateNode}typeof a=="function"?e.refCleanup=a(r):a.current=r}}catch(c){Ge(e,n,c)}}function Ei(e,n){var a=e.ref,r=e.refCleanup;if(a!==null)if(typeof r=="function")try{r()}catch(c){Ge(e,n,c)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(c){Ge(e,n,c)}else a.current=null}function Cm(e){var n=e.type,a=e.memoizedProps,r=e.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&r.focus();break t;case"img":a.src?r.src=a.src:a.srcSet&&(r.srcset=a.srcSet)}}catch(c){Ge(e,e.return,c)}}function qu(e,n,a){try{var r=e.stateNode;tS(r,e.type,a,n),r[xn]=n}catch(c){Ge(e,e.return,c)}}function wm(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Ra(e.type)||e.tag===4}function Yu(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||wm(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Ra(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function ju(e,n,a){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(e),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=Ol));else if(r!==4&&(r===27&&Ra(e.type)&&(a=e.stateNode,n=null),e=e.child,e!==null))for(ju(e,n,a),e=e.sibling;e!==null;)ju(e,n,a),e=e.sibling}function El(e,n,a){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?a.insertBefore(e,n):a.appendChild(e);else if(r!==4&&(r===27&&Ra(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(El(e,n,a),e=e.sibling;e!==null;)El(e,n,a),e=e.sibling}function Dm(e){var n=e.stateNode,a=e.memoizedProps;try{for(var r=e.type,c=n.attributes;c.length;)n.removeAttributeNode(c[0]);Tn(n,r,a),n[rn]=e,n[xn]=a}catch(f){Ge(e,e.return,f)}}var Wi=!1,Je=!1,Zu=!1,Um=typeof WeakSet=="function"?WeakSet:Set,_n=null;function O0(e,n){if(e=e.containerInfo,xf=Gl,e=Vd(e),Yc(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else t:{a=(a=e.ownerDocument)&&a.defaultView||window;var r=a.getSelection&&a.getSelection();if(r&&r.rangeCount!==0){a=r.anchorNode;var c=r.anchorOffset,f=r.focusNode;r=r.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break t}var x=0,b=-1,P=-1,J=0,ct=0,_t=e,nt=null;e:for(;;){for(var it;_t!==a||c!==0&&_t.nodeType!==3||(b=x+c),_t!==f||r!==0&&_t.nodeType!==3||(P=x+r),_t.nodeType===3&&(x+=_t.nodeValue.length),(it=_t.firstChild)!==null;)nt=_t,_t=it;for(;;){if(_t===e)break e;if(nt===a&&++J===c&&(b=x),nt===f&&++ct===r&&(P=x),(it=_t.nextSibling)!==null)break;_t=nt,nt=_t.parentNode}_t=it}a=b===-1||P===-1?null:{start:b,end:P}}else a=null}a=a||{start:0,end:0}}else a=null;for(yf={focusedElem:e,selectionRange:a},Gl=!1,_n=n;_n!==null;)if(n=_n,e=n.child,(n.subtreeFlags&1024)!==0&&e!==null)e.return=n,_n=e;else for(;_n!==null;){switch(n=_n,f=n.alternate,e=n.flags,n.tag){case 0:break;case 11:case 15:break;case 1:if((e&1024)!==0&&f!==null){e=void 0,a=n,c=f.memoizedProps,f=f.memoizedState,r=a.stateNode;try{var te=os(a.type,c,a.elementType===a.type);e=r.getSnapshotBeforeUpdate(te,f),r.__reactInternalSnapshotBeforeUpdate=e}catch(Qt){Ge(a,a.return,Qt)}}break;case 3:if((e&1024)!==0){if(e=n.stateNode.containerInfo,a=e.nodeType,a===9)Tf(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Tf(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(s(163))}if(e=n.sibling,e!==null){e.return=n.return,_n=e;break}_n=n.return}}function Lm(e,n,a){var r=a.flags;switch(a.tag){case 0:case 11:case 15:xa(e,a),r&4&&no(5,a);break;case 1:if(xa(e,a),r&4)if(e=a.stateNode,n===null)try{e.componentDidMount()}catch(x){Ge(a,a.return,x)}else{var c=os(a.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(c,n,e.__reactInternalSnapshotBeforeUpdate)}catch(x){Ge(a,a.return,x)}}r&64&&Am(a),r&512&&io(a,a.return);break;case 3:if(xa(e,a),r&64&&(e=a.updateQueue,e!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{dp(e,n)}catch(x){Ge(a,a.return,x)}}break;case 27:n===null&&r&4&&Dm(a);case 26:case 5:xa(e,a),n===null&&r&4&&Cm(a),r&512&&io(a,a.return);break;case 12:xa(e,a);break;case 13:xa(e,a),r&4&&Pm(e,a),r&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=k0.bind(null,a),oS(e,a))));break;case 22:if(r=a.memoizedState!==null||Wi,!r){n=n!==null&&n.memoizedState!==null||Je,c=Wi;var f=Je;Wi=r,(Je=n)&&!f?ya(e,a,(a.subtreeFlags&8772)!==0):xa(e,a),Wi=c,Je=f}break;case 30:break;default:xa(e,a)}}function Nm(e){var n=e.alternate;n!==null&&(e.alternate=null,Nm(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&la(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var We=null,zn=!1;function qi(e,n,a){for(a=a.child;a!==null;)Om(e,n,a),a=a.sibling}function Om(e,n,a){if(dt&&typeof dt.onCommitFiberUnmount=="function")try{dt.onCommitFiberUnmount(ft,a)}catch{}switch(a.tag){case 26:Je||Ei(a,n),qi(e,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:Je||Ei(a,n);var r=We,c=zn;Ra(a.type)&&(We=a.stateNode,zn=!1),qi(e,n,a),ho(a.stateNode),We=r,zn=c;break;case 5:Je||Ei(a,n);case 6:if(r=We,c=zn,We=null,qi(e,n,a),We=r,zn=c,We!==null)if(zn)try{(We.nodeType===9?We.body:We.nodeName==="HTML"?We.ownerDocument.body:We).removeChild(a.stateNode)}catch(f){Ge(a,n,f)}else try{We.removeChild(a.stateNode)}catch(f){Ge(a,n,f)}break;case 18:We!==null&&(zn?(e=We,M_(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),yo(e)):M_(We,a.stateNode));break;case 4:r=We,c=zn,We=a.stateNode.containerInfo,zn=!0,qi(e,n,a),We=r,zn=c;break;case 0:case 11:case 14:case 15:Je||Sa(2,a,n),Je||Sa(4,a,n),qi(e,n,a);break;case 1:Je||(Ei(a,n),r=a.stateNode,typeof r.componentWillUnmount=="function"&&Rm(a,n,r)),qi(e,n,a);break;case 21:qi(e,n,a);break;case 22:Je=(r=Je)||a.memoizedState!==null,qi(e,n,a),Je=r;break;default:qi(e,n,a)}}function Pm(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{yo(e)}catch(a){Ge(n,n.return,a)}}function P0(e){switch(e.tag){case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new Um),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new Um),n;default:throw Error(s(435,e.tag))}}function Ku(e,n){var a=P0(e);n.forEach(function(r){var c=X0.bind(null,e,r);a.has(r)||(a.add(r),r.then(c,c))})}function Yn(e,n){var a=n.deletions;if(a!==null)for(var r=0;r<a.length;r++){var c=a[r],f=e,x=n,b=x;t:for(;b!==null;){switch(b.tag){case 27:if(Ra(b.type)){We=b.stateNode,zn=!1;break t}break;case 5:We=b.stateNode,zn=!1;break t;case 3:case 4:We=b.stateNode.containerInfo,zn=!0;break t}b=b.return}if(We===null)throw Error(s(160));Om(f,x,c),We=null,zn=!1,f=c.alternate,f!==null&&(f.return=null),c.return=null}if(n.subtreeFlags&13878)for(n=n.child;n!==null;)zm(n,e),n=n.sibling}var fi=null;function zm(e,n){var a=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Yn(n,e),jn(e),r&4&&(Sa(3,e,e.return),no(3,e),Sa(5,e,e.return));break;case 1:Yn(n,e),jn(e),r&512&&(Je||a===null||Ei(a,a.return)),r&64&&Wi&&(e=e.updateQueue,e!==null&&(r=e.callbacks,r!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?r:a.concat(r))));break;case 26:var c=fi;if(Yn(n,e),jn(e),r&512&&(Je||a===null||Ei(a,a.return)),r&4){var f=a!==null?a.memoizedState:null;if(r=e.memoizedState,a===null)if(r===null)if(e.stateNode===null){t:{r=e.type,a=e.memoizedProps,c=c.ownerDocument||c;e:switch(r){case"title":f=c.getElementsByTagName("title")[0],(!f||f[oa]||f[rn]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=c.createElement(r),c.head.insertBefore(f,c.querySelector("head > title"))),Tn(f,r,a),f[rn]=e,tn(f),r=f;break t;case"link":var x=D_("link","href",c).get(r+(a.href||""));if(x){for(var b=0;b<x.length;b++)if(f=x[b],f.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){x.splice(b,1);break e}}f=c.createElement(r),Tn(f,r,a),c.head.appendChild(f);break;case"meta":if(x=D_("meta","content",c).get(r+(a.content||""))){for(b=0;b<x.length;b++)if(f=x[b],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){x.splice(b,1);break e}}f=c.createElement(r),Tn(f,r,a),c.head.appendChild(f);break;default:throw Error(s(468,r))}f[rn]=e,tn(f),r=f}e.stateNode=r}else U_(c,e.type,e.stateNode);else e.stateNode=w_(c,r,e.memoizedProps);else f!==r?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,r===null?U_(c,e.type,e.stateNode):w_(c,r,e.memoizedProps)):r===null&&e.stateNode!==null&&qu(e,e.memoizedProps,a.memoizedProps)}break;case 27:Yn(n,e),jn(e),r&512&&(Je||a===null||Ei(a,a.return)),a!==null&&r&4&&qu(e,e.memoizedProps,a.memoizedProps);break;case 5:if(Yn(n,e),jn(e),r&512&&(Je||a===null||Ei(a,a.return)),e.flags&32){c=e.stateNode;try{xi(c,"")}catch(it){Ge(e,e.return,it)}}r&4&&e.stateNode!=null&&(c=e.memoizedProps,qu(e,c,a!==null?a.memoizedProps:c)),r&1024&&(Zu=!0);break;case 6:if(Yn(n,e),jn(e),r&4){if(e.stateNode===null)throw Error(s(162));r=e.memoizedProps,a=e.stateNode;try{a.nodeValue=r}catch(it){Ge(e,e.return,it)}}break;case 3:if(Bl=null,c=fi,fi=zl(n.containerInfo),Yn(n,e),fi=c,jn(e),r&4&&a!==null&&a.memoizedState.isDehydrated)try{yo(n.containerInfo)}catch(it){Ge(e,e.return,it)}Zu&&(Zu=!1,Im(e));break;case 4:r=fi,fi=zl(e.stateNode.containerInfo),Yn(n,e),jn(e),fi=r;break;case 12:Yn(n,e),jn(e);break;case 13:Yn(n,e),jn(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(nf=de()),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,Ku(e,r)));break;case 22:c=e.memoizedState!==null;var P=a!==null&&a.memoizedState!==null,J=Wi,ct=Je;if(Wi=J||c,Je=ct||P,Yn(n,e),Je=ct,Wi=J,jn(e),r&8192)t:for(n=e.stateNode,n._visibility=c?n._visibility&-2:n._visibility|1,c&&(a===null||P||Wi||Je||ls(e)),a=null,n=e;;){if(n.tag===5||n.tag===26){if(a===null){P=a=n;try{if(f=P.stateNode,c)x=f.style,typeof x.setProperty=="function"?x.setProperty("display","none","important"):x.display="none";else{b=P.stateNode;var _t=P.memoizedProps.style,nt=_t!=null&&_t.hasOwnProperty("display")?_t.display:null;b.style.display=nt==null||typeof nt=="boolean"?"":(""+nt).trim()}}catch(it){Ge(P,P.return,it)}}}else if(n.tag===6){if(a===null){P=n;try{P.stateNode.nodeValue=c?"":P.memoizedProps}catch(it){Ge(P,P.return,it)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break t;for(;n.sibling===null;){if(n.return===null||n.return===e)break t;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}r&4&&(r=e.updateQueue,r!==null&&(a=r.retryQueue,a!==null&&(r.retryQueue=null,Ku(e,a))));break;case 19:Yn(n,e),jn(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,Ku(e,r)));break;case 30:break;case 21:break;default:Yn(n,e),jn(e)}}function jn(e){var n=e.flags;if(n&2){try{for(var a,r=e.return;r!==null;){if(wm(r)){a=r;break}r=r.return}if(a==null)throw Error(s(160));switch(a.tag){case 27:var c=a.stateNode,f=Yu(e);El(e,f,c);break;case 5:var x=a.stateNode;a.flags&32&&(xi(x,""),a.flags&=-33);var b=Yu(e);El(e,b,x);break;case 3:case 4:var P=a.stateNode.containerInfo,J=Yu(e);ju(e,J,P);break;default:throw Error(s(161))}}catch(ct){Ge(e,e.return,ct)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function Im(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;Im(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),e=e.sibling}}function xa(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)Lm(e,n.alternate,n),n=n.sibling}function ls(e){for(e=e.child;e!==null;){var n=e;switch(n.tag){case 0:case 11:case 14:case 15:Sa(4,n,n.return),ls(n);break;case 1:Ei(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&Rm(n,n.return,a),ls(n);break;case 27:ho(n.stateNode);case 26:case 5:Ei(n,n.return),ls(n);break;case 22:n.memoizedState===null&&ls(n);break;case 30:ls(n);break;default:ls(n)}e=e.sibling}}function ya(e,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var r=n.alternate,c=e,f=n,x=f.flags;switch(f.tag){case 0:case 11:case 15:ya(c,f,a),no(4,f);break;case 1:if(ya(c,f,a),r=f,c=r.stateNode,typeof c.componentDidMount=="function")try{c.componentDidMount()}catch(J){Ge(r,r.return,J)}if(r=f,c=r.updateQueue,c!==null){var b=r.stateNode;try{var P=c.shared.hiddenCallbacks;if(P!==null)for(c.shared.hiddenCallbacks=null,c=0;c<P.length;c++)hp(P[c],b)}catch(J){Ge(r,r.return,J)}}a&&x&64&&Am(f),io(f,f.return);break;case 27:Dm(f);case 26:case 5:ya(c,f,a),a&&r===null&&x&4&&Cm(f),io(f,f.return);break;case 12:ya(c,f,a);break;case 13:ya(c,f,a),a&&x&4&&Pm(c,f);break;case 22:f.memoizedState===null&&ya(c,f,a),io(f,f.return);break;case 30:break;default:ya(c,f,a)}n=n.sibling}}function Qu(e,n){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&Vr(a))}function Ju(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&Vr(e))}function Ti(e,n,a,r){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)Bm(e,n,a,r),n=n.sibling}function Bm(e,n,a,r){var c=n.flags;switch(n.tag){case 0:case 11:case 15:Ti(e,n,a,r),c&2048&&no(9,n);break;case 1:Ti(e,n,a,r);break;case 3:Ti(e,n,a,r),c&2048&&(e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&Vr(e)));break;case 12:if(c&2048){Ti(e,n,a,r),e=n.stateNode;try{var f=n.memoizedProps,x=f.id,b=f.onPostCommit;typeof b=="function"&&b(x,n.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(P){Ge(n,n.return,P)}}else Ti(e,n,a,r);break;case 13:Ti(e,n,a,r);break;case 23:break;case 22:f=n.stateNode,x=n.alternate,n.memoizedState!==null?f._visibility&2?Ti(e,n,a,r):ao(e,n):f._visibility&2?Ti(e,n,a,r):(f._visibility|=2,Xs(e,n,a,r,(n.subtreeFlags&10256)!==0)),c&2048&&Qu(x,n);break;case 24:Ti(e,n,a,r),c&2048&&Ju(n.alternate,n);break;default:Ti(e,n,a,r)}}function Xs(e,n,a,r,c){for(c=c&&(n.subtreeFlags&10256)!==0,n=n.child;n!==null;){var f=e,x=n,b=a,P=r,J=x.flags;switch(x.tag){case 0:case 11:case 15:Xs(f,x,b,P,c),no(8,x);break;case 23:break;case 22:var ct=x.stateNode;x.memoizedState!==null?ct._visibility&2?Xs(f,x,b,P,c):ao(f,x):(ct._visibility|=2,Xs(f,x,b,P,c)),c&&J&2048&&Qu(x.alternate,x);break;case 24:Xs(f,x,b,P,c),c&&J&2048&&Ju(x.alternate,x);break;default:Xs(f,x,b,P,c)}n=n.sibling}}function ao(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=e,r=n,c=r.flags;switch(r.tag){case 22:ao(a,r),c&2048&&Qu(r.alternate,r);break;case 24:ao(a,r),c&2048&&Ju(r.alternate,r);break;default:ao(a,r)}n=n.sibling}}var so=8192;function Ws(e){if(e.subtreeFlags&so)for(e=e.child;e!==null;)Fm(e),e=e.sibling}function Fm(e){switch(e.tag){case 26:Ws(e),e.flags&so&&e.memoizedState!==null&&xS(fi,e.memoizedState,e.memoizedProps);break;case 5:Ws(e);break;case 3:case 4:var n=fi;fi=zl(e.stateNode.containerInfo),Ws(e),fi=n;break;case 22:e.memoizedState===null&&(n=e.alternate,n!==null&&n.memoizedState!==null?(n=so,so=16777216,Ws(e),so=n):Ws(e));break;default:Ws(e)}}function Hm(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function ro(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var r=n[a];_n=r,Vm(r,e)}Hm(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Gm(e),e=e.sibling}function Gm(e){switch(e.tag){case 0:case 11:case 15:ro(e),e.flags&2048&&Sa(9,e,e.return);break;case 3:ro(e);break;case 12:ro(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,Tl(e)):ro(e);break;default:ro(e)}}function Tl(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var r=n[a];_n=r,Vm(r,e)}Hm(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:Sa(8,n,n.return),Tl(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Tl(n));break;default:Tl(n)}e=e.sibling}}function Vm(e,n){for(;_n!==null;){var a=_n;switch(a.tag){case 0:case 11:case 15:Sa(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var r=a.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:Vr(a.memoizedState.cache)}if(r=a.child,r!==null)r.return=a,_n=r;else t:for(a=e;_n!==null;){r=_n;var c=r.sibling,f=r.return;if(Nm(r),r===a){_n=null;break t}if(c!==null){c.return=f,_n=c;break t}_n=f}}}var z0={getCacheForType:function(e){var n=Rn(ln),a=n.data.get(e);return a===void 0&&(a=e(),n.data.set(e,a)),a}},I0=typeof WeakMap=="function"?WeakMap:Map,De=0,Xe=null,pe=null,ye=0,Ue=0,Zn=null,Ma=!1,qs=!1,$u=!1,Yi=0,Ze=0,Ea=0,cs=0,tf=0,si=0,Ys=0,oo=null,In=null,ef=!1,nf=0,bl=1/0,Al=null,Ta=null,En=0,ba=null,js=null,Zs=0,af=0,sf=null,km=null,lo=0,rf=null;function Kn(){if((De&2)!==0&&ye!==0)return ye&-ye;if(z.T!==null){var e=zs;return e!==0?e:df()}return Te()}function Xm(){si===0&&(si=(ye&536870912)===0||Ce?k():536870912);var e=ai.current;return e!==null&&(e.flags|=32),si}function Qn(e,n,a){(e===Xe&&(Ue===2||Ue===9)||e.cancelPendingCommit!==null)&&(Ks(e,0),Aa(e,ye,si,!1)),zt(e,a),((De&2)===0||e!==Xe)&&(e===Xe&&((De&2)===0&&(cs|=a),Ze===4&&Aa(e,ye,si,!1)),bi(e))}function Wm(e,n,a){if((De&6)!==0)throw Error(s(327));var r=!a&&(n&124)===0&&(n&e.expiredLanes)===0||Rt(e,n),c=r?H0(e,n):cf(e,n,!0),f=r;do{if(c===0){qs&&!r&&Aa(e,n,0,!1);break}else{if(a=e.current.alternate,f&&!B0(a)){c=cf(e,n,!1),f=!1;continue}if(c===2){if(f=n,e.errorRecoveryDisabledLanes&f)var x=0;else x=e.pendingLanes&-536870913,x=x!==0?x:x&536870912?536870912:0;if(x!==0){n=x;t:{var b=e;c=oo;var P=b.current.memoizedState.isDehydrated;if(P&&(Ks(b,x).flags|=256),x=cf(b,x,!1),x!==2){if($u&&!P){b.errorRecoveryDisabledLanes|=f,cs|=f,c=4;break t}f=In,In=c,f!==null&&(In===null?In=f:In.push.apply(In,f))}c=x}if(f=!1,c!==2)continue}}if(c===1){Ks(e,0),Aa(e,n,0,!0);break}t:{switch(r=e,f=c,f){case 0:case 1:throw Error(s(345));case 4:if((n&4194048)!==n)break;case 6:Aa(r,n,si,!Ma);break t;case 2:In=null;break;case 3:case 5:break;default:throw Error(s(329))}if((n&62914560)===n&&(c=nf+300-de(),10<c)){if(Aa(r,n,si,!Ma),qt(r,0,!0)!==0)break t;r.timeoutHandle=x_(qm.bind(null,r,a,In,Al,ef,n,si,cs,Ys,Ma,f,2,-0,0),c);break t}qm(r,a,In,Al,ef,n,si,cs,Ys,Ma,f,0,-0,0)}}break}while(!0);bi(e)}function qm(e,n,a,r,c,f,x,b,P,J,ct,_t,nt,it){if(e.timeoutHandle=-1,_t=n.subtreeFlags,(_t&8192||(_t&16785408)===16785408)&&(_o={stylesheets:null,count:0,unsuspend:SS},Fm(n),_t=yS(),_t!==null)){e.cancelPendingCommit=_t($m.bind(null,e,n,f,a,r,c,x,b,P,ct,1,nt,it)),Aa(e,f,x,!J);return}$m(e,n,f,a,r,c,x,b,P)}function B0(e){for(var n=e;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var r=0;r<a.length;r++){var c=a[r],f=c.getSnapshot;c=c.value;try{if(!Wn(f(),c))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Aa(e,n,a,r){n&=~tf,n&=~cs,e.suspendedLanes|=n,e.pingedLanes&=~n,r&&(e.warmLanes|=n),r=e.expirationTimes;for(var c=n;0<c;){var f=31-Ot(c),x=1<<f;r[f]=-1,c&=~x}a!==0&&gt(e,a,n)}function Rl(){return(De&6)===0?(co(0),!1):!0}function of(){if(pe!==null){if(Ue===0)var e=pe.return;else e=pe,Fi=is=null,Eu(e),Vs=null,$r=0,e=pe;for(;e!==null;)bm(e.alternate,e),e=e.return;pe=null}}function Ks(e,n){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,nS(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),of(),Xe=e,pe=a=zi(e.current,null),ye=n,Ue=0,Zn=null,Ma=!1,qs=Rt(e,n),$u=!1,Ys=si=tf=cs=Ea=Ze=0,In=oo=null,ef=!1,(n&8)!==0&&(n|=n&32);var r=e.entangledLanes;if(r!==0)for(e=e.entanglements,r&=n;0<r;){var c=31-Ot(r),f=1<<c;n|=e[c],r&=~f}return Yi=n,Zo(),a}function Ym(e,n){ue=null,z.H=pl,n===Xr||n===al?(n=up(),Ue=3):n===op?(n=up(),Ue=4):Ue=n===fm?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,Zn=n,pe===null&&(Ze=1,Sl(e,ti(n,e.current)))}function jm(){var e=z.H;return z.H=pl,e===null?pl:e}function Zm(){var e=z.A;return z.A=z0,e}function lf(){Ze=4,Ma||(ye&4194048)!==ye&&ai.current!==null||(qs=!0),(Ea&134217727)===0&&(cs&134217727)===0||Xe===null||Aa(Xe,ye,si,!1)}function cf(e,n,a){var r=De;De|=2;var c=jm(),f=Zm();(Xe!==e||ye!==n)&&(Al=null,Ks(e,n)),n=!1;var x=Ze;t:do try{if(Ue!==0&&pe!==null){var b=pe,P=Zn;switch(Ue){case 8:of(),x=6;break t;case 3:case 2:case 9:case 6:ai.current===null&&(n=!0);var J=Ue;if(Ue=0,Zn=null,Qs(e,b,P,J),a&&qs){x=0;break t}break;default:J=Ue,Ue=0,Zn=null,Qs(e,b,P,J)}}F0(),x=Ze;break}catch(ct){Ym(e,ct)}while(!0);return n&&e.shellSuspendCounter++,Fi=is=null,De=r,z.H=c,z.A=f,pe===null&&(Xe=null,ye=0,Zo()),x}function F0(){for(;pe!==null;)Km(pe)}function H0(e,n){var a=De;De|=2;var r=jm(),c=Zm();Xe!==e||ye!==n?(Al=null,bl=de()+500,Ks(e,n)):qs=Rt(e,n);t:do try{if(Ue!==0&&pe!==null){n=pe;var f=Zn;e:switch(Ue){case 1:Ue=0,Zn=null,Qs(e,n,f,1);break;case 2:case 9:if(lp(f)){Ue=0,Zn=null,Qm(n);break}n=function(){Ue!==2&&Ue!==9||Xe!==e||(Ue=7),bi(e)},f.then(n,n);break t;case 3:Ue=7;break t;case 4:Ue=5;break t;case 7:lp(f)?(Ue=0,Zn=null,Qm(n)):(Ue=0,Zn=null,Qs(e,n,f,7));break;case 5:var x=null;switch(pe.tag){case 26:x=pe.memoizedState;case 5:case 27:var b=pe;if(!x||L_(x)){Ue=0,Zn=null;var P=b.sibling;if(P!==null)pe=P;else{var J=b.return;J!==null?(pe=J,Cl(J)):pe=null}break e}}Ue=0,Zn=null,Qs(e,n,f,5);break;case 6:Ue=0,Zn=null,Qs(e,n,f,6);break;case 8:of(),Ze=6;break t;default:throw Error(s(462))}}G0();break}catch(ct){Ym(e,ct)}while(!0);return Fi=is=null,z.H=r,z.A=c,De=a,pe!==null?0:(Xe=null,ye=0,Zo(),Ze)}function G0(){for(;pe!==null&&!Sn();)Km(pe)}function Km(e){var n=Em(e.alternate,e,Yi);e.memoizedProps=e.pendingProps,n===null?Cl(e):pe=n}function Qm(e){var n=e,a=n.alternate;switch(n.tag){case 15:case 0:n=gm(a,n,n.pendingProps,n.type,void 0,ye);break;case 11:n=gm(a,n,n.pendingProps,n.type.render,n.ref,ye);break;case 5:Eu(n);default:bm(a,n),n=pe=Jd(n,Yi),n=Em(a,n,Yi)}e.memoizedProps=e.pendingProps,n===null?Cl(e):pe=n}function Qs(e,n,a,r){Fi=is=null,Eu(n),Vs=null,$r=0;var c=n.return;try{if(D0(e,c,n,a,ye)){Ze=1,Sl(e,ti(a,e.current)),pe=null;return}}catch(f){if(c!==null)throw pe=c,f;Ze=1,Sl(e,ti(a,e.current)),pe=null;return}n.flags&32768?(Ce||r===1?e=!0:qs||(ye&536870912)!==0?e=!1:(Ma=e=!0,(r===2||r===9||r===3||r===6)&&(r=ai.current,r!==null&&r.tag===13&&(r.flags|=16384))),Jm(n,e)):Cl(n)}function Cl(e){var n=e;do{if((n.flags&32768)!==0){Jm(n,Ma);return}e=n.return;var a=L0(n.alternate,n,Yi);if(a!==null){pe=a;return}if(n=n.sibling,n!==null){pe=n;return}pe=n=e}while(n!==null);Ze===0&&(Ze=5)}function Jm(e,n){do{var a=N0(e.alternate,e);if(a!==null){a.flags&=32767,pe=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(e=e.sibling,e!==null)){pe=e;return}pe=e=a}while(e!==null);Ze=6,pe=null}function $m(e,n,a,r,c,f,x,b,P){e.cancelPendingCommit=null;do wl();while(En!==0);if((De&6)!==0)throw Error(s(327));if(n!==null){if(n===e.current)throw Error(s(177));if(f=n.lanes|n.childLanes,f|=Jc,bt(e,a,f,x,b,P),e===Xe&&(pe=Xe=null,ye=0),js=n,ba=e,Zs=a,af=f,sf=c,km=r,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,W0(ae,function(){return a_(),null})):(e.callbackNode=null,e.callbackPriority=0),r=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||r){r=z.T,z.T=null,c=Z.p,Z.p=2,x=De,De|=4;try{O0(e,n,a)}finally{De=x,Z.p=c,z.T=r}}En=1,t_(),e_(),n_()}}function t_(){if(En===1){En=0;var e=ba,n=js,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=z.T,z.T=null;var r=Z.p;Z.p=2;var c=De;De|=4;try{zm(n,e);var f=yf,x=Vd(e.containerInfo),b=f.focusedElem,P=f.selectionRange;if(x!==b&&b&&b.ownerDocument&&Gd(b.ownerDocument.documentElement,b)){if(P!==null&&Yc(b)){var J=P.start,ct=P.end;if(ct===void 0&&(ct=J),"selectionStart"in b)b.selectionStart=J,b.selectionEnd=Math.min(ct,b.value.length);else{var _t=b.ownerDocument||document,nt=_t&&_t.defaultView||window;if(nt.getSelection){var it=nt.getSelection(),te=b.textContent.length,Qt=Math.min(P.start,te),ze=P.end===void 0?Qt:Math.min(P.end,te);!it.extend&&Qt>ze&&(x=ze,ze=Qt,Qt=x);var X=Hd(b,Qt),H=Hd(b,ze);if(X&&H&&(it.rangeCount!==1||it.anchorNode!==X.node||it.anchorOffset!==X.offset||it.focusNode!==H.node||it.focusOffset!==H.offset)){var K=_t.createRange();K.setStart(X.node,X.offset),it.removeAllRanges(),Qt>ze?(it.addRange(K),it.extend(H.node,H.offset)):(K.setEnd(H.node,H.offset),it.addRange(K))}}}}for(_t=[],it=b;it=it.parentNode;)it.nodeType===1&&_t.push({element:it,left:it.scrollLeft,top:it.scrollTop});for(typeof b.focus=="function"&&b.focus(),b=0;b<_t.length;b++){var ht=_t[b];ht.element.scrollLeft=ht.left,ht.element.scrollTop=ht.top}}Gl=!!xf,yf=xf=null}finally{De=c,Z.p=r,z.T=a}}e.current=n,En=2}}function e_(){if(En===2){En=0;var e=ba,n=js,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=z.T,z.T=null;var r=Z.p;Z.p=2;var c=De;De|=4;try{Lm(e,n.alternate,n)}finally{De=c,Z.p=r,z.T=a}}En=3}}function n_(){if(En===4||En===3){En=0,Me();var e=ba,n=js,a=Zs,r=km;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?En=5:(En=0,js=ba=null,i_(e,e.pendingLanes));var c=e.pendingLanes;if(c===0&&(Ta=null),we(a),n=n.stateNode,dt&&typeof dt.onCommitFiberRoot=="function")try{dt.onCommitFiberRoot(ft,n,void 0,(n.current.flags&128)===128)}catch{}if(r!==null){n=z.T,c=Z.p,Z.p=2,z.T=null;try{for(var f=e.onRecoverableError,x=0;x<r.length;x++){var b=r[x];f(b.value,{componentStack:b.stack})}}finally{z.T=n,Z.p=c}}(Zs&3)!==0&&wl(),bi(e),c=e.pendingLanes,(a&4194090)!==0&&(c&42)!==0?e===rf?lo++:(lo=0,rf=e):lo=0,co(0)}}function i_(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,Vr(n)))}function wl(e){return t_(),e_(),n_(),a_()}function a_(){if(En!==5)return!1;var e=ba,n=af;af=0;var a=we(Zs),r=z.T,c=Z.p;try{Z.p=32>a?32:a,z.T=null,a=sf,sf=null;var f=ba,x=Zs;if(En=0,js=ba=null,Zs=0,(De&6)!==0)throw Error(s(331));var b=De;if(De|=4,Gm(f.current),Bm(f,f.current,x,a),De=b,co(0,!1),dt&&typeof dt.onPostCommitFiberRoot=="function")try{dt.onPostCommitFiberRoot(ft,f)}catch{}return!0}finally{Z.p=c,z.T=r,i_(e,n)}}function s_(e,n,a){n=ti(a,n),n=Iu(e.stateNode,n,2),e=ma(e,n,2),e!==null&&(zt(e,2),bi(e))}function Ge(e,n,a){if(e.tag===3)s_(e,e,a);else for(;n!==null;){if(n.tag===3){s_(n,e,a);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Ta===null||!Ta.has(r))){e=ti(a,e),a=cm(2),r=ma(n,a,2),r!==null&&(um(a,r,n,e),zt(r,2),bi(r));break}}n=n.return}}function uf(e,n,a){var r=e.pingCache;if(r===null){r=e.pingCache=new I0;var c=new Set;r.set(n,c)}else c=r.get(n),c===void 0&&(c=new Set,r.set(n,c));c.has(a)||($u=!0,c.add(a),e=V0.bind(null,e,n,a),n.then(e,e))}function V0(e,n,a){var r=e.pingCache;r!==null&&r.delete(n),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,Xe===e&&(ye&a)===a&&(Ze===4||Ze===3&&(ye&62914560)===ye&&300>de()-nf?(De&2)===0&&Ks(e,0):tf|=a,Ys===ye&&(Ys=0)),bi(e)}function r_(e,n){n===0&&(n=Ut()),e=Ls(e,n),e!==null&&(zt(e,n),bi(e))}function k0(e){var n=e.memoizedState,a=0;n!==null&&(a=n.retryLane),r_(e,a)}function X0(e,n){var a=0;switch(e.tag){case 13:var r=e.stateNode,c=e.memoizedState;c!==null&&(a=c.retryLane);break;case 19:r=e.stateNode;break;case 22:r=e.stateNode._retryCache;break;default:throw Error(s(314))}r!==null&&r.delete(n),r_(e,a)}function W0(e,n){return ge(e,n)}var Dl=null,Js=null,ff=!1,Ul=!1,hf=!1,us=0;function bi(e){e!==Js&&e.next===null&&(Js===null?Dl=Js=e:Js=Js.next=e),Ul=!0,ff||(ff=!0,Y0())}function co(e,n){if(!hf&&Ul){hf=!0;do for(var a=!1,r=Dl;r!==null;){if(e!==0){var c=r.pendingLanes;if(c===0)var f=0;else{var x=r.suspendedLanes,b=r.pingedLanes;f=(1<<31-Ot(42|e)+1)-1,f&=c&~(x&~b),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,u_(r,f))}else f=ye,f=qt(r,r===Xe?f:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),(f&3)===0||Rt(r,f)||(a=!0,u_(r,f));r=r.next}while(a);hf=!1}}function q0(){o_()}function o_(){Ul=ff=!1;var e=0;us!==0&&(eS()&&(e=us),us=0);for(var n=de(),a=null,r=Dl;r!==null;){var c=r.next,f=l_(r,n);f===0?(r.next=null,a===null?Dl=c:a.next=c,c===null&&(Js=a)):(a=r,(e!==0||(f&3)!==0)&&(Ul=!0)),r=c}co(e)}function l_(e,n){for(var a=e.suspendedLanes,r=e.pingedLanes,c=e.expirationTimes,f=e.pendingLanes&-62914561;0<f;){var x=31-Ot(f),b=1<<x,P=c[x];P===-1?((b&a)===0||(b&r)!==0)&&(c[x]=ie(b,n)):P<=n&&(e.expiredLanes|=b),f&=~b}if(n=Xe,a=ye,a=qt(e,e===n?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r=e.callbackNode,a===0||e===n&&(Ue===2||Ue===9)||e.cancelPendingCommit!==null)return r!==null&&r!==null&&B(r),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||Rt(e,a)){if(n=a&-a,n===e.callbackPriority)return n;switch(r!==null&&B(r),we(a)){case 2:case 8:a=Yt;break;case 32:a=ae;break;case 268435456:a=N;break;default:a=ae}return r=c_.bind(null,e),a=ge(a,r),e.callbackPriority=n,e.callbackNode=a,n}return r!==null&&r!==null&&B(r),e.callbackPriority=2,e.callbackNode=null,2}function c_(e,n){if(En!==0&&En!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(wl()&&e.callbackNode!==a)return null;var r=ye;return r=qt(e,e===Xe?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r===0?null:(Wm(e,r,n),l_(e,de()),e.callbackNode!=null&&e.callbackNode===a?c_.bind(null,e):null)}function u_(e,n){if(wl())return null;Wm(e,n,!0)}function Y0(){iS(function(){(De&6)!==0?ge(ve,q0):o_()})}function df(){return us===0&&(us=k()),us}function f_(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Vo(""+e)}function h_(e,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,e.id&&a.setAttribute("form",e.id),n.parentNode.insertBefore(a,n),e=new FormData(e),a.parentNode.removeChild(a),e}function j0(e,n,a,r,c){if(n==="submit"&&a&&a.stateNode===c){var f=f_((c[xn]||null).action),x=r.submitter;x&&(n=(n=x[xn]||null)?f_(n.formAction):x.getAttribute("formAction"),n!==null&&(f=n,x=null));var b=new qo("action","action",null,r,c);e.push({event:b,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(us!==0){var P=x?h_(c,x):new FormData(c);Lu(a,{pending:!0,data:P,method:c.method,action:f},null,P)}}else typeof f=="function"&&(b.preventDefault(),P=x?h_(c,x):new FormData(c),Lu(a,{pending:!0,data:P,method:c.method,action:f},f,P))},currentTarget:c}]})}}for(var pf=0;pf<Qc.length;pf++){var mf=Qc[pf],Z0=mf.toLowerCase(),K0=mf[0].toUpperCase()+mf.slice(1);ui(Z0,"on"+K0)}ui(Wd,"onAnimationEnd"),ui(qd,"onAnimationIteration"),ui(Yd,"onAnimationStart"),ui("dblclick","onDoubleClick"),ui("focusin","onFocus"),ui("focusout","onBlur"),ui(d0,"onTransitionRun"),ui(p0,"onTransitionStart"),ui(m0,"onTransitionCancel"),ui(jd,"onTransitionEnd"),A("onMouseEnter",["mouseout","mouseover"]),A("onMouseLeave",["mouseout","mouseover"]),A("onPointerEnter",["pointerout","pointerover"]),A("onPointerLeave",["pointerout","pointerover"]),Li("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Li("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Li("onBeforeInput",["compositionend","keypress","textInput","paste"]),Li("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Li("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Li("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var uo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Q0=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(uo));function d_(e,n){n=(n&4)!==0;for(var a=0;a<e.length;a++){var r=e[a],c=r.event;r=r.listeners;t:{var f=void 0;if(n)for(var x=r.length-1;0<=x;x--){var b=r[x],P=b.instance,J=b.currentTarget;if(b=b.listener,P!==f&&c.isPropagationStopped())break t;f=b,c.currentTarget=J;try{f(c)}catch(ct){vl(ct)}c.currentTarget=null,f=P}else for(x=0;x<r.length;x++){if(b=r[x],P=b.instance,J=b.currentTarget,b=b.listener,P!==f&&c.isPropagationStopped())break t;f=b,c.currentTarget=J;try{f(c)}catch(ct){vl(ct)}c.currentTarget=null,f=P}}}}function me(e,n){var a=n[qa];a===void 0&&(a=n[qa]=new Set);var r=e+"__bubble";a.has(r)||(p_(n,e,2,!1),a.add(r))}function _f(e,n,a){var r=0;n&&(r|=4),p_(a,e,r,n)}var Ll="_reactListening"+Math.random().toString(36).slice(2);function gf(e){if(!e[Ll]){e[Ll]=!0,Ho.forEach(function(a){a!=="selectionchange"&&(Q0.has(a)||_f(a,!1,e),_f(a,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[Ll]||(n[Ll]=!0,_f("selectionchange",!1,n))}}function p_(e,n,a,r){switch(B_(n)){case 2:var c=TS;break;case 8:c=bS;break;default:c=Uf}a=c.bind(null,n,a,e),c=void 0,!Bc||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(c=!0),r?c!==void 0?e.addEventListener(n,a,{capture:!0,passive:c}):e.addEventListener(n,a,!0):c!==void 0?e.addEventListener(n,a,{passive:c}):e.addEventListener(n,a,!1)}function vf(e,n,a,r,c){var f=r;if((n&1)===0&&(n&2)===0&&r!==null)t:for(;;){if(r===null)return;var x=r.tag;if(x===3||x===4){var b=r.stateNode.containerInfo;if(b===c)break;if(x===4)for(x=r.return;x!==null;){var P=x.tag;if((P===3||P===4)&&x.stateNode.containerInfo===c)return;x=x.return}for(;b!==null;){if(x=Di(b),x===null)return;if(P=x.tag,P===5||P===6||P===26||P===27){r=f=x;continue t}b=b.parentNode}}r=r.return}yd(function(){var J=f,ct=zc(a),_t=[];t:{var nt=Zd.get(e);if(nt!==void 0){var it=qo,te=e;switch(e){case"keypress":if(Xo(a)===0)break t;case"keydown":case"keyup":it=Wv;break;case"focusin":te="focus",it=Vc;break;case"focusout":te="blur",it=Vc;break;case"beforeblur":case"afterblur":it=Vc;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":it=Td;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":it=Nv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":it=jv;break;case Wd:case qd:case Yd:it=zv;break;case jd:it=Kv;break;case"scroll":case"scrollend":it=Uv;break;case"wheel":it=Jv;break;case"copy":case"cut":case"paste":it=Bv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":it=Ad;break;case"toggle":case"beforetoggle":it=t0}var Qt=(n&4)!==0,ze=!Qt&&(e==="scroll"||e==="scrollend"),X=Qt?nt!==null?nt+"Capture":null:nt;Qt=[];for(var H=J,K;H!==null;){var ht=H;if(K=ht.stateNode,ht=ht.tag,ht!==5&&ht!==26&&ht!==27||K===null||X===null||(ht=wr(H,X),ht!=null&&Qt.push(fo(H,ht,K))),ze)break;H=H.return}0<Qt.length&&(nt=new it(nt,te,null,a,ct),_t.push({event:nt,listeners:Qt}))}}if((n&7)===0){t:{if(nt=e==="mouseover"||e==="pointerover",it=e==="mouseout"||e==="pointerout",nt&&a!==Pc&&(te=a.relatedTarget||a.fromElement)&&(Di(te)||te[Nn]))break t;if((it||nt)&&(nt=ct.window===ct?ct:(nt=ct.ownerDocument)?nt.defaultView||nt.parentWindow:window,it?(te=a.relatedTarget||a.toElement,it=J,te=te?Di(te):null,te!==null&&(ze=u(te),Qt=te.tag,te!==ze||Qt!==5&&Qt!==27&&Qt!==6)&&(te=null)):(it=null,te=J),it!==te)){if(Qt=Td,ht="onMouseLeave",X="onMouseEnter",H="mouse",(e==="pointerout"||e==="pointerover")&&(Qt=Ad,ht="onPointerLeave",X="onPointerEnter",H="pointer"),ze=it==null?nt:ja(it),K=te==null?nt:ja(te),nt=new Qt(ht,H+"leave",it,a,ct),nt.target=ze,nt.relatedTarget=K,ht=null,Di(ct)===J&&(Qt=new Qt(X,H+"enter",te,a,ct),Qt.target=K,Qt.relatedTarget=ze,ht=Qt),ze=ht,it&&te)e:{for(Qt=it,X=te,H=0,K=Qt;K;K=$s(K))H++;for(K=0,ht=X;ht;ht=$s(ht))K++;for(;0<H-K;)Qt=$s(Qt),H--;for(;0<K-H;)X=$s(X),K--;for(;H--;){if(Qt===X||X!==null&&Qt===X.alternate)break e;Qt=$s(Qt),X=$s(X)}Qt=null}else Qt=null;it!==null&&m_(_t,nt,it,Qt,!1),te!==null&&ze!==null&&m_(_t,ze,te,Qt,!0)}}t:{if(nt=J?ja(J):window,it=nt.nodeName&&nt.nodeName.toLowerCase(),it==="select"||it==="input"&&nt.type==="file")var Ft=Od;else if(Ld(nt))if(Pd)Ft=u0;else{Ft=l0;var fe=o0}else it=nt.nodeName,!it||it.toLowerCase()!=="input"||nt.type!=="checkbox"&&nt.type!=="radio"?J&&Oc(J.elementType)&&(Ft=Od):Ft=c0;if(Ft&&(Ft=Ft(e,J))){Nd(_t,Ft,a,ct);break t}fe&&fe(e,nt,J),e==="focusout"&&J&&nt.type==="number"&&J.memoizedProps.value!=null&&An(nt,"number",nt.value)}switch(fe=J?ja(J):window,e){case"focusin":(Ld(fe)||fe.contentEditable==="true")&&(ws=fe,jc=J,Ir=null);break;case"focusout":Ir=jc=ws=null;break;case"mousedown":Zc=!0;break;case"contextmenu":case"mouseup":case"dragend":Zc=!1,kd(_t,a,ct);break;case"selectionchange":if(h0)break;case"keydown":case"keyup":kd(_t,a,ct)}var Xt;if(Xc)t:{switch(e){case"compositionstart":var $t="onCompositionStart";break t;case"compositionend":$t="onCompositionEnd";break t;case"compositionupdate":$t="onCompositionUpdate";break t}$t=void 0}else Cs?Dd(e,a)&&($t="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&($t="onCompositionStart");$t&&(Rd&&a.locale!=="ko"&&(Cs||$t!=="onCompositionStart"?$t==="onCompositionEnd"&&Cs&&(Xt=Md()):(fa=ct,Fc="value"in fa?fa.value:fa.textContent,Cs=!0)),fe=Nl(J,$t),0<fe.length&&($t=new bd($t,e,null,a,ct),_t.push({event:$t,listeners:fe}),Xt?$t.data=Xt:(Xt=Ud(a),Xt!==null&&($t.data=Xt)))),(Xt=n0?i0(e,a):a0(e,a))&&($t=Nl(J,"onBeforeInput"),0<$t.length&&(fe=new bd("onBeforeInput","beforeinput",null,a,ct),_t.push({event:fe,listeners:$t}),fe.data=Xt)),j0(_t,e,J,a,ct)}d_(_t,n)})}function fo(e,n,a){return{instance:e,listener:n,currentTarget:a}}function Nl(e,n){for(var a=n+"Capture",r=[];e!==null;){var c=e,f=c.stateNode;if(c=c.tag,c!==5&&c!==26&&c!==27||f===null||(c=wr(e,a),c!=null&&r.unshift(fo(e,c,f)),c=wr(e,n),c!=null&&r.push(fo(e,c,f))),e.tag===3)return r;e=e.return}return[]}function $s(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function m_(e,n,a,r,c){for(var f=n._reactName,x=[];a!==null&&a!==r;){var b=a,P=b.alternate,J=b.stateNode;if(b=b.tag,P!==null&&P===r)break;b!==5&&b!==26&&b!==27||J===null||(P=J,c?(J=wr(a,f),J!=null&&x.unshift(fo(a,J,P))):c||(J=wr(a,f),J!=null&&x.push(fo(a,J,P)))),a=a.return}x.length!==0&&e.push({event:n,listeners:x})}var J0=/\r\n?/g,$0=/\u0000|\uFFFD/g;function __(e){return(typeof e=="string"?e:""+e).replace(J0,`
`).replace($0,"")}function g_(e,n){return n=__(n),__(e)===n}function Ol(){}function Pe(e,n,a,r,c,f){switch(a){case"children":typeof r=="string"?n==="body"||n==="textarea"&&r===""||xi(e,r):(typeof r=="number"||typeof r=="bigint")&&n!=="body"&&xi(e,""+r);break;case"className":wt(e,"class",r);break;case"tabIndex":wt(e,"tabindex",r);break;case"dir":case"role":case"viewBox":case"width":case"height":wt(e,a,r);break;case"style":Sd(e,r,f);break;case"data":if(n!=="object"){wt(e,"data",r);break}case"src":case"href":if(r===""&&(n!=="a"||a!=="href")){e.removeAttribute(a);break}if(r==null||typeof r=="function"||typeof r=="symbol"||typeof r=="boolean"){e.removeAttribute(a);break}r=Vo(""+r),e.setAttribute(a,r);break;case"action":case"formAction":if(typeof r=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&Pe(e,n,"name",c.name,c,null),Pe(e,n,"formEncType",c.formEncType,c,null),Pe(e,n,"formMethod",c.formMethod,c,null),Pe(e,n,"formTarget",c.formTarget,c,null)):(Pe(e,n,"encType",c.encType,c,null),Pe(e,n,"method",c.method,c,null),Pe(e,n,"target",c.target,c,null)));if(r==null||typeof r=="symbol"||typeof r=="boolean"){e.removeAttribute(a);break}r=Vo(""+r),e.setAttribute(a,r);break;case"onClick":r!=null&&(e.onclick=Ol);break;case"onScroll":r!=null&&me("scroll",e);break;case"onScrollEnd":r!=null&&me("scrollend",e);break;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(s(61));if(a=r.__html,a!=null){if(c.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"multiple":e.multiple=r&&typeof r!="function"&&typeof r!="symbol";break;case"muted":e.muted=r&&typeof r!="function"&&typeof r!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(r==null||typeof r=="function"||typeof r=="boolean"||typeof r=="symbol"){e.removeAttribute("xlink:href");break}a=Vo(""+r),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":r!=null&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(a,""+r):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":r&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":r===!0?e.setAttribute(a,""):r!==!1&&r!=null&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(a,r):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":r!=null&&typeof r!="function"&&typeof r!="symbol"&&!isNaN(r)&&1<=r?e.setAttribute(a,r):e.removeAttribute(a);break;case"rowSpan":case"start":r==null||typeof r=="function"||typeof r=="symbol"||isNaN(r)?e.removeAttribute(a):e.setAttribute(a,r);break;case"popover":me("beforetoggle",e),me("toggle",e),Tt(e,"popover",r);break;case"xlinkActuate":Nt(e,"http://www.w3.org/1999/xlink","xlink:actuate",r);break;case"xlinkArcrole":Nt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",r);break;case"xlinkRole":Nt(e,"http://www.w3.org/1999/xlink","xlink:role",r);break;case"xlinkShow":Nt(e,"http://www.w3.org/1999/xlink","xlink:show",r);break;case"xlinkTitle":Nt(e,"http://www.w3.org/1999/xlink","xlink:title",r);break;case"xlinkType":Nt(e,"http://www.w3.org/1999/xlink","xlink:type",r);break;case"xmlBase":Nt(e,"http://www.w3.org/XML/1998/namespace","xml:base",r);break;case"xmlLang":Nt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",r);break;case"xmlSpace":Nt(e,"http://www.w3.org/XML/1998/namespace","xml:space",r);break;case"is":Tt(e,"is",r);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=wv.get(a)||a,Tt(e,a,r))}}function Sf(e,n,a,r,c,f){switch(a){case"style":Sd(e,r,f);break;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(s(61));if(a=r.__html,a!=null){if(c.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"children":typeof r=="string"?xi(e,r):(typeof r=="number"||typeof r=="bigint")&&xi(e,""+r);break;case"onScroll":r!=null&&me("scroll",e);break;case"onScrollEnd":r!=null&&me("scrollend",e);break;case"onClick":r!=null&&(e.onclick=Ol);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Go.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(c=a.endsWith("Capture"),n=a.slice(2,c?a.length-7:void 0),f=e[xn]||null,f=f!=null?f[a]:null,typeof f=="function"&&e.removeEventListener(n,f,c),typeof r=="function")){typeof f!="function"&&f!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(n,r,c);break t}a in e?e[a]=r:r===!0?e.setAttribute(a,""):Tt(e,a,r)}}}function Tn(e,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":me("error",e),me("load",e);var r=!1,c=!1,f;for(f in a)if(a.hasOwnProperty(f)){var x=a[f];if(x!=null)switch(f){case"src":r=!0;break;case"srcSet":c=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Pe(e,n,f,x,a,null)}}c&&Pe(e,n,"srcSet",a.srcSet,a,null),r&&Pe(e,n,"src",a.src,a,null);return;case"input":me("invalid",e);var b=f=x=c=null,P=null,J=null;for(r in a)if(a.hasOwnProperty(r)){var ct=a[r];if(ct!=null)switch(r){case"name":c=ct;break;case"type":x=ct;break;case"checked":P=ct;break;case"defaultChecked":J=ct;break;case"value":f=ct;break;case"defaultValue":b=ct;break;case"children":case"dangerouslySetInnerHTML":if(ct!=null)throw Error(s(137,n));break;default:Pe(e,n,r,ct,a,null)}}He(e,f,b,P,J,x,c,!1),Ye(e);return;case"select":me("invalid",e),r=x=f=null;for(c in a)if(a.hasOwnProperty(c)&&(b=a[c],b!=null))switch(c){case"value":f=b;break;case"defaultValue":x=b;break;case"multiple":r=b;default:Pe(e,n,c,b,a,null)}n=f,a=x,e.multiple=!!r,n!=null?on(e,!!r,n,!1):a!=null&&on(e,!!r,a,!0);return;case"textarea":me("invalid",e),f=c=r=null;for(x in a)if(a.hasOwnProperty(x)&&(b=a[x],b!=null))switch(x){case"value":r=b;break;case"defaultValue":c=b;break;case"children":f=b;break;case"dangerouslySetInnerHTML":if(b!=null)throw Error(s(91));break;default:Pe(e,n,x,b,a,null)}yn(e,r,c,f),Ye(e);return;case"option":for(P in a)if(a.hasOwnProperty(P)&&(r=a[P],r!=null))switch(P){case"selected":e.selected=r&&typeof r!="function"&&typeof r!="symbol";break;default:Pe(e,n,P,r,a,null)}return;case"dialog":me("beforetoggle",e),me("toggle",e),me("cancel",e),me("close",e);break;case"iframe":case"object":me("load",e);break;case"video":case"audio":for(r=0;r<uo.length;r++)me(uo[r],e);break;case"image":me("error",e),me("load",e);break;case"details":me("toggle",e);break;case"embed":case"source":case"link":me("error",e),me("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(J in a)if(a.hasOwnProperty(J)&&(r=a[J],r!=null))switch(J){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Pe(e,n,J,r,a,null)}return;default:if(Oc(n)){for(ct in a)a.hasOwnProperty(ct)&&(r=a[ct],r!==void 0&&Sf(e,n,ct,r,a,void 0));return}}for(b in a)a.hasOwnProperty(b)&&(r=a[b],r!=null&&Pe(e,n,b,r,a,null))}function tS(e,n,a,r){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var c=null,f=null,x=null,b=null,P=null,J=null,ct=null;for(it in a){var _t=a[it];if(a.hasOwnProperty(it)&&_t!=null)switch(it){case"checked":break;case"value":break;case"defaultValue":P=_t;default:r.hasOwnProperty(it)||Pe(e,n,it,null,r,_t)}}for(var nt in r){var it=r[nt];if(_t=a[nt],r.hasOwnProperty(nt)&&(it!=null||_t!=null))switch(nt){case"type":f=it;break;case"name":c=it;break;case"checked":J=it;break;case"defaultChecked":ct=it;break;case"value":x=it;break;case"defaultValue":b=it;break;case"children":case"dangerouslySetInnerHTML":if(it!=null)throw Error(s(137,n));break;default:it!==_t&&Pe(e,n,nt,it,r,_t)}}Ni(e,x,b,P,J,ct,f,c);return;case"select":it=x=b=nt=null;for(f in a)if(P=a[f],a.hasOwnProperty(f)&&P!=null)switch(f){case"value":break;case"multiple":it=P;default:r.hasOwnProperty(f)||Pe(e,n,f,null,r,P)}for(c in r)if(f=r[c],P=a[c],r.hasOwnProperty(c)&&(f!=null||P!=null))switch(c){case"value":nt=f;break;case"defaultValue":b=f;break;case"multiple":x=f;default:f!==P&&Pe(e,n,c,f,r,P)}n=b,a=x,r=it,nt!=null?on(e,!!a,nt,!1):!!r!=!!a&&(n!=null?on(e,!!a,n,!0):on(e,!!a,a?[]:"",!1));return;case"textarea":it=nt=null;for(b in a)if(c=a[b],a.hasOwnProperty(b)&&c!=null&&!r.hasOwnProperty(b))switch(b){case"value":break;case"children":break;default:Pe(e,n,b,null,r,c)}for(x in r)if(c=r[x],f=a[x],r.hasOwnProperty(x)&&(c!=null||f!=null))switch(x){case"value":nt=c;break;case"defaultValue":it=c;break;case"children":break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(s(91));break;default:c!==f&&Pe(e,n,x,c,r,f)}pn(e,nt,it);return;case"option":for(var te in a)if(nt=a[te],a.hasOwnProperty(te)&&nt!=null&&!r.hasOwnProperty(te))switch(te){case"selected":e.selected=!1;break;default:Pe(e,n,te,null,r,nt)}for(P in r)if(nt=r[P],it=a[P],r.hasOwnProperty(P)&&nt!==it&&(nt!=null||it!=null))switch(P){case"selected":e.selected=nt&&typeof nt!="function"&&typeof nt!="symbol";break;default:Pe(e,n,P,nt,r,it)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Qt in a)nt=a[Qt],a.hasOwnProperty(Qt)&&nt!=null&&!r.hasOwnProperty(Qt)&&Pe(e,n,Qt,null,r,nt);for(J in r)if(nt=r[J],it=a[J],r.hasOwnProperty(J)&&nt!==it&&(nt!=null||it!=null))switch(J){case"children":case"dangerouslySetInnerHTML":if(nt!=null)throw Error(s(137,n));break;default:Pe(e,n,J,nt,r,it)}return;default:if(Oc(n)){for(var ze in a)nt=a[ze],a.hasOwnProperty(ze)&&nt!==void 0&&!r.hasOwnProperty(ze)&&Sf(e,n,ze,void 0,r,nt);for(ct in r)nt=r[ct],it=a[ct],!r.hasOwnProperty(ct)||nt===it||nt===void 0&&it===void 0||Sf(e,n,ct,nt,r,it);return}}for(var X in a)nt=a[X],a.hasOwnProperty(X)&&nt!=null&&!r.hasOwnProperty(X)&&Pe(e,n,X,null,r,nt);for(_t in r)nt=r[_t],it=a[_t],!r.hasOwnProperty(_t)||nt===it||nt==null&&it==null||Pe(e,n,_t,nt,r,it)}var xf=null,yf=null;function Pl(e){return e.nodeType===9?e:e.ownerDocument}function v_(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function S_(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function Mf(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Ef=null;function eS(){var e=window.event;return e&&e.type==="popstate"?e===Ef?!1:(Ef=e,!0):(Ef=null,!1)}var x_=typeof setTimeout=="function"?setTimeout:void 0,nS=typeof clearTimeout=="function"?clearTimeout:void 0,y_=typeof Promise=="function"?Promise:void 0,iS=typeof queueMicrotask=="function"?queueMicrotask:typeof y_<"u"?function(e){return y_.resolve(null).then(e).catch(aS)}:x_;function aS(e){setTimeout(function(){throw e})}function Ra(e){return e==="head"}function M_(e,n){var a=n,r=0,c=0;do{var f=a.nextSibling;if(e.removeChild(a),f&&f.nodeType===8)if(a=f.data,a==="/$"){if(0<r&&8>r){a=r;var x=e.ownerDocument;if(a&1&&ho(x.documentElement),a&2&&ho(x.body),a&4)for(a=x.head,ho(a),x=a.firstChild;x;){var b=x.nextSibling,P=x.nodeName;x[oa]||P==="SCRIPT"||P==="STYLE"||P==="LINK"&&x.rel.toLowerCase()==="stylesheet"||a.removeChild(x),x=b}}if(c===0){e.removeChild(f),yo(n);return}c--}else a==="$"||a==="$?"||a==="$!"?c++:r=a.charCodeAt(0)-48;else r=0;a=f}while(a);yo(n)}function Tf(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Tf(a),la(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function sS(e,n,a,r){for(;e.nodeType===1;){var c=a;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!r&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(r){if(!e[oa])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(f=e.getAttribute("rel"),f==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(f!==c.rel||e.getAttribute("href")!==(c.href==null||c.href===""?null:c.href)||e.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin)||e.getAttribute("title")!==(c.title==null?null:c.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(f=e.getAttribute("src"),(f!==(c.src==null?null:c.src)||e.getAttribute("type")!==(c.type==null?null:c.type)||e.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin))&&f&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var f=c.name==null?null:""+c.name;if(c.type==="hidden"&&e.getAttribute("name")===f)return e}else return e;if(e=hi(e.nextSibling),e===null)break}return null}function rS(e,n,a){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=hi(e.nextSibling),e===null))return null;return e}function bf(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState==="complete"}function oS(e,n){var a=e.ownerDocument;if(e.data!=="$?"||a.readyState==="complete")n();else{var r=function(){n(),a.removeEventListener("DOMContentLoaded",r)};a.addEventListener("DOMContentLoaded",r),e._reactRetry=r}}function hi(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="F!"||n==="F")break;if(n==="/$")return null}}return e}var Af=null;function E_(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"){if(n===0)return e;n--}else a==="/$"&&n++}e=e.previousSibling}return null}function T_(e,n,a){switch(n=Pl(a),e){case"html":if(e=n.documentElement,!e)throw Error(s(452));return e;case"head":if(e=n.head,!e)throw Error(s(453));return e;case"body":if(e=n.body,!e)throw Error(s(454));return e;default:throw Error(s(451))}}function ho(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);la(e)}var ri=new Map,b_=new Set;function zl(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var ji=Z.d;Z.d={f:lS,r:cS,D:uS,C:fS,L:hS,m:dS,X:mS,S:pS,M:_S};function lS(){var e=ji.f(),n=Rl();return e||n}function cS(e){var n=Ui(e);n!==null&&n.tag===5&&n.type==="form"?Wp(n):ji.r(e)}var tr=typeof document>"u"?null:document;function A_(e,n,a){var r=tr;if(r&&typeof n=="string"&&n){var c=ke(n);c='link[rel="'+e+'"][href="'+c+'"]',typeof a=="string"&&(c+='[crossorigin="'+a+'"]'),b_.has(c)||(b_.add(c),e={rel:e,crossOrigin:a,href:n},r.querySelector(c)===null&&(n=r.createElement("link"),Tn(n,"link",e),tn(n),r.head.appendChild(n)))}}function uS(e){ji.D(e),A_("dns-prefetch",e,null)}function fS(e,n){ji.C(e,n),A_("preconnect",e,n)}function hS(e,n,a){ji.L(e,n,a);var r=tr;if(r&&e&&n){var c='link[rel="preload"][as="'+ke(n)+'"]';n==="image"&&a&&a.imageSrcSet?(c+='[imagesrcset="'+ke(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(c+='[imagesizes="'+ke(a.imageSizes)+'"]')):c+='[href="'+ke(e)+'"]';var f=c;switch(n){case"style":f=er(e);break;case"script":f=nr(e)}ri.has(f)||(e=_({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:e,as:n},a),ri.set(f,e),r.querySelector(c)!==null||n==="style"&&r.querySelector(po(f))||n==="script"&&r.querySelector(mo(f))||(n=r.createElement("link"),Tn(n,"link",e),tn(n),r.head.appendChild(n)))}}function dS(e,n){ji.m(e,n);var a=tr;if(a&&e){var r=n&&typeof n.as=="string"?n.as:"script",c='link[rel="modulepreload"][as="'+ke(r)+'"][href="'+ke(e)+'"]',f=c;switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=nr(e)}if(!ri.has(f)&&(e=_({rel:"modulepreload",href:e},n),ri.set(f,e),a.querySelector(c)===null)){switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(mo(f)))return}r=a.createElement("link"),Tn(r,"link",e),tn(r),a.head.appendChild(r)}}}function pS(e,n,a){ji.S(e,n,a);var r=tr;if(r&&e){var c=ca(r).hoistableStyles,f=er(e);n=n||"default";var x=c.get(f);if(!x){var b={loading:0,preload:null};if(x=r.querySelector(po(f)))b.loading=5;else{e=_({rel:"stylesheet",href:e,"data-precedence":n},a),(a=ri.get(f))&&Rf(e,a);var P=x=r.createElement("link");tn(P),Tn(P,"link",e),P._p=new Promise(function(J,ct){P.onload=J,P.onerror=ct}),P.addEventListener("load",function(){b.loading|=1}),P.addEventListener("error",function(){b.loading|=2}),b.loading|=4,Il(x,n,r)}x={type:"stylesheet",instance:x,count:1,state:b},c.set(f,x)}}}function mS(e,n){ji.X(e,n);var a=tr;if(a&&e){var r=ca(a).hoistableScripts,c=nr(e),f=r.get(c);f||(f=a.querySelector(mo(c)),f||(e=_({src:e,async:!0},n),(n=ri.get(c))&&Cf(e,n),f=a.createElement("script"),tn(f),Tn(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},r.set(c,f))}}function _S(e,n){ji.M(e,n);var a=tr;if(a&&e){var r=ca(a).hoistableScripts,c=nr(e),f=r.get(c);f||(f=a.querySelector(mo(c)),f||(e=_({src:e,async:!0,type:"module"},n),(n=ri.get(c))&&Cf(e,n),f=a.createElement("script"),tn(f),Tn(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},r.set(c,f))}}function R_(e,n,a,r){var c=(c=yt.current)?zl(c):null;if(!c)throw Error(s(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=er(a.href),a=ca(c).hoistableStyles,r=a.get(n),r||(r={type:"style",instance:null,count:0,state:null},a.set(n,r)),r):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=er(a.href);var f=ca(c).hoistableStyles,x=f.get(e);if(x||(c=c.ownerDocument||c,x={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(e,x),(f=c.querySelector(po(e)))&&!f._p&&(x.instance=f,x.state.loading=5),ri.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},ri.set(e,a),f||gS(c,e,a,x.state))),n&&r===null)throw Error(s(528,""));return x}if(n&&r!==null)throw Error(s(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=nr(a),a=ca(c).hoistableScripts,r=a.get(n),r||(r={type:"script",instance:null,count:0,state:null},a.set(n,r)),r):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,e))}}function er(e){return'href="'+ke(e)+'"'}function po(e){return'link[rel="stylesheet"]['+e+"]"}function C_(e){return _({},e,{"data-precedence":e.precedence,precedence:null})}function gS(e,n,a,r){e.querySelector('link[rel="preload"][as="style"]['+n+"]")?r.loading=1:(n=e.createElement("link"),r.preload=n,n.addEventListener("load",function(){return r.loading|=1}),n.addEventListener("error",function(){return r.loading|=2}),Tn(n,"link",a),tn(n),e.head.appendChild(n))}function nr(e){return'[src="'+ke(e)+'"]'}function mo(e){return"script[async]"+e}function w_(e,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var r=e.querySelector('style[data-href~="'+ke(a.href)+'"]');if(r)return n.instance=r,tn(r),r;var c=_({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return r=(e.ownerDocument||e).createElement("style"),tn(r),Tn(r,"style",c),Il(r,a.precedence,e),n.instance=r;case"stylesheet":c=er(a.href);var f=e.querySelector(po(c));if(f)return n.state.loading|=4,n.instance=f,tn(f),f;r=C_(a),(c=ri.get(c))&&Rf(r,c),f=(e.ownerDocument||e).createElement("link"),tn(f);var x=f;return x._p=new Promise(function(b,P){x.onload=b,x.onerror=P}),Tn(f,"link",r),n.state.loading|=4,Il(f,a.precedence,e),n.instance=f;case"script":return f=nr(a.src),(c=e.querySelector(mo(f)))?(n.instance=c,tn(c),c):(r=a,(c=ri.get(f))&&(r=_({},a),Cf(r,c)),e=e.ownerDocument||e,c=e.createElement("script"),tn(c),Tn(c,"link",r),e.head.appendChild(c),n.instance=c);case"void":return null;default:throw Error(s(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(r=n.instance,n.state.loading|=4,Il(r,a.precedence,e));return n.instance}function Il(e,n,a){for(var r=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),c=r.length?r[r.length-1]:null,f=c,x=0;x<r.length;x++){var b=r[x];if(b.dataset.precedence===n)f=b;else if(f!==c)break}f?f.parentNode.insertBefore(e,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(e,n.firstChild))}function Rf(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function Cf(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var Bl=null;function D_(e,n,a){if(Bl===null){var r=new Map,c=Bl=new Map;c.set(a,r)}else c=Bl,r=c.get(a),r||(r=new Map,c.set(a,r));if(r.has(e))return r;for(r.set(e,null),a=a.getElementsByTagName(e),c=0;c<a.length;c++){var f=a[c];if(!(f[oa]||f[rn]||e==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var x=f.getAttribute(n)||"";x=e+x;var b=r.get(x);b?b.push(f):r.set(x,[f])}}return r}function U_(e,n,a){e=e.ownerDocument||e,e.head.insertBefore(a,n==="title"?e.querySelector("head > title"):null)}function vS(e,n,a){if(a===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return e=n.disabled,typeof n.precedence=="string"&&e==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function L_(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}var _o=null;function SS(){}function xS(e,n,a){if(_o===null)throw Error(s(475));var r=_o;if(n.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var c=er(a.href),f=e.querySelector(po(c));if(f){e=f._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(r.count++,r=Fl.bind(r),e.then(r,r)),n.state.loading|=4,n.instance=f,tn(f);return}f=e.ownerDocument||e,a=C_(a),(c=ri.get(c))&&Rf(a,c),f=f.createElement("link"),tn(f);var x=f;x._p=new Promise(function(b,P){x.onload=b,x.onerror=P}),Tn(f,"link",a),n.instance=f}r.stylesheets===null&&(r.stylesheets=new Map),r.stylesheets.set(n,e),(e=n.state.preload)&&(n.state.loading&3)===0&&(r.count++,n=Fl.bind(r),e.addEventListener("load",n),e.addEventListener("error",n))}}function yS(){if(_o===null)throw Error(s(475));var e=_o;return e.stylesheets&&e.count===0&&wf(e,e.stylesheets),0<e.count?function(n){var a=setTimeout(function(){if(e.stylesheets&&wf(e,e.stylesheets),e.unsuspend){var r=e.unsuspend;e.unsuspend=null,r()}},6e4);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(a)}}:null}function Fl(){if(this.count--,this.count===0){if(this.stylesheets)wf(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Hl=null;function wf(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Hl=new Map,n.forEach(MS,e),Hl=null,Fl.call(e))}function MS(e,n){if(!(n.state.loading&4)){var a=Hl.get(e);if(a)var r=a.get(null);else{a=new Map,Hl.set(e,a);for(var c=e.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<c.length;f++){var x=c[f];(x.nodeName==="LINK"||x.getAttribute("media")!=="not all")&&(a.set(x.dataset.precedence,x),r=x)}r&&a.set(null,r)}c=n.instance,x=c.getAttribute("data-precedence"),f=a.get(x)||r,f===r&&a.set(null,c),a.set(x,c),this.count++,r=Fl.bind(this),c.addEventListener("load",r),c.addEventListener("error",r),f?f.parentNode.insertBefore(c,f.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(c,e.firstChild)),n.state.loading|=4}}var go={$$typeof:U,Provider:null,Consumer:null,_currentValue:Y,_currentValue2:Y,_threadCount:0};function ES(e,n,a,r,c,f,x,b){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Et(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Et(0),this.hiddenUpdates=Et(null),this.identifierPrefix=r,this.onUncaughtError=c,this.onCaughtError=f,this.onRecoverableError=x,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=b,this.incompleteTransitions=new Map}function N_(e,n,a,r,c,f,x,b,P,J,ct,_t){return e=new ES(e,n,a,x,b,P,J,_t),n=1,f===!0&&(n|=24),f=qn(3,null,null,n),e.current=f,f.stateNode=e,n=cu(),n.refCount++,e.pooledCache=n,n.refCount++,f.memoizedState={element:r,isDehydrated:a,cache:n},du(f),e}function O_(e){return e?(e=Ns,e):Ns}function P_(e,n,a,r,c,f){c=O_(c),r.context===null?r.context=c:r.pendingContext=c,r=pa(n),r.payload={element:a},f=f===void 0?null:f,f!==null&&(r.callback=f),a=ma(e,r,n),a!==null&&(Qn(a,e,n),qr(a,e,n))}function z_(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<n?a:n}}function Df(e,n){z_(e,n),(e=e.alternate)&&z_(e,n)}function I_(e){if(e.tag===13){var n=Ls(e,67108864);n!==null&&Qn(n,e,67108864),Df(e,67108864)}}var Gl=!0;function TS(e,n,a,r){var c=z.T;z.T=null;var f=Z.p;try{Z.p=2,Uf(e,n,a,r)}finally{Z.p=f,z.T=c}}function bS(e,n,a,r){var c=z.T;z.T=null;var f=Z.p;try{Z.p=8,Uf(e,n,a,r)}finally{Z.p=f,z.T=c}}function Uf(e,n,a,r){if(Gl){var c=Lf(r);if(c===null)vf(e,n,r,Vl,a),F_(e,r);else if(RS(c,e,n,a,r))r.stopPropagation();else if(F_(e,r),n&4&&-1<AS.indexOf(e)){for(;c!==null;){var f=Ui(c);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var x=Wt(f.pendingLanes);if(x!==0){var b=f;for(b.pendingLanes|=2,b.entangledLanes|=2;x;){var P=1<<31-Ot(x);b.entanglements[1]|=P,x&=~P}bi(f),(De&6)===0&&(bl=de()+500,co(0))}}break;case 13:b=Ls(f,2),b!==null&&Qn(b,f,2),Rl(),Df(f,2)}if(f=Lf(r),f===null&&vf(e,n,r,Vl,a),f===c)break;c=f}c!==null&&r.stopPropagation()}else vf(e,n,r,null,a)}}function Lf(e){return e=zc(e),Nf(e)}var Vl=null;function Nf(e){if(Vl=null,e=Di(e),e!==null){var n=u(e);if(n===null)e=null;else{var a=n.tag;if(a===13){if(e=h(n),e!==null)return e;e=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return Vl=e,null}function B_(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Gt()){case ve:return 2;case Yt:return 8;case ae:case Ke:return 32;case N:return 268435456;default:return 32}default:return 32}}var Of=!1,Ca=null,wa=null,Da=null,vo=new Map,So=new Map,Ua=[],AS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function F_(e,n){switch(e){case"focusin":case"focusout":Ca=null;break;case"dragenter":case"dragleave":wa=null;break;case"mouseover":case"mouseout":Da=null;break;case"pointerover":case"pointerout":vo.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":So.delete(n.pointerId)}}function xo(e,n,a,r,c,f){return e===null||e.nativeEvent!==f?(e={blockedOn:n,domEventName:a,eventSystemFlags:r,nativeEvent:f,targetContainers:[c]},n!==null&&(n=Ui(n),n!==null&&I_(n)),e):(e.eventSystemFlags|=r,n=e.targetContainers,c!==null&&n.indexOf(c)===-1&&n.push(c),e)}function RS(e,n,a,r,c){switch(n){case"focusin":return Ca=xo(Ca,e,n,a,r,c),!0;case"dragenter":return wa=xo(wa,e,n,a,r,c),!0;case"mouseover":return Da=xo(Da,e,n,a,r,c),!0;case"pointerover":var f=c.pointerId;return vo.set(f,xo(vo.get(f)||null,e,n,a,r,c)),!0;case"gotpointercapture":return f=c.pointerId,So.set(f,xo(So.get(f)||null,e,n,a,r,c)),!0}return!1}function H_(e){var n=Di(e.target);if(n!==null){var a=u(n);if(a!==null){if(n=a.tag,n===13){if(n=h(a),n!==null){e.blockedOn=n,Xn(e.priority,function(){if(a.tag===13){var r=Kn();r=ne(r);var c=Ls(a,r);c!==null&&Qn(c,a,r),Df(a,r)}});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function kl(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var a=Lf(e.nativeEvent);if(a===null){a=e.nativeEvent;var r=new a.constructor(a.type,a);Pc=r,a.target.dispatchEvent(r),Pc=null}else return n=Ui(a),n!==null&&I_(n),e.blockedOn=a,!1;n.shift()}return!0}function G_(e,n,a){kl(e)&&a.delete(n)}function CS(){Of=!1,Ca!==null&&kl(Ca)&&(Ca=null),wa!==null&&kl(wa)&&(wa=null),Da!==null&&kl(Da)&&(Da=null),vo.forEach(G_),So.forEach(G_)}function Xl(e,n){e.blockedOn===n&&(e.blockedOn=null,Of||(Of=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,CS)))}var Wl=null;function V_(e){Wl!==e&&(Wl=e,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){Wl===e&&(Wl=null);for(var n=0;n<e.length;n+=3){var a=e[n],r=e[n+1],c=e[n+2];if(typeof r!="function"){if(Nf(r||a)===null)continue;break}var f=Ui(a);f!==null&&(e.splice(n,3),n-=3,Lu(f,{pending:!0,data:c,method:a.method,action:r},r,c))}}))}function yo(e){function n(P){return Xl(P,e)}Ca!==null&&Xl(Ca,e),wa!==null&&Xl(wa,e),Da!==null&&Xl(Da,e),vo.forEach(n),So.forEach(n);for(var a=0;a<Ua.length;a++){var r=Ua[a];r.blockedOn===e&&(r.blockedOn=null)}for(;0<Ua.length&&(a=Ua[0],a.blockedOn===null);)H_(a),a.blockedOn===null&&Ua.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(r=0;r<a.length;r+=3){var c=a[r],f=a[r+1],x=c[xn]||null;if(typeof f=="function")x||V_(a);else if(x){var b=null;if(f&&f.hasAttribute("formAction")){if(c=f,x=f[xn]||null)b=x.formAction;else if(Nf(c)!==null)continue}else b=x.action;typeof b=="function"?a[r+1]=b:(a.splice(r,3),r-=3),V_(a)}}}function Pf(e){this._internalRoot=e}ql.prototype.render=Pf.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(s(409));var a=n.current,r=Kn();P_(a,r,e,n,null,null)},ql.prototype.unmount=Pf.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;P_(e.current,2,null,e,null,null),Rl(),n[Nn]=null}};function ql(e){this._internalRoot=e}ql.prototype.unstable_scheduleHydration=function(e){if(e){var n=Te();e={blockedOn:null,target:e,priority:n};for(var a=0;a<Ua.length&&n!==0&&n<Ua[a].priority;a++);Ua.splice(a,0,e),a===0&&H_(e)}};var k_=t.version;if(k_!=="19.1.0")throw Error(s(527,k_,"19.1.0"));Z.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(s(188)):(e=Object.keys(e).join(","),Error(s(268,e)));return e=m(n),e=e!==null?p(e):null,e=e===null?null:e.stateNode,e};var wS={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:z,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Yl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Yl.isDisabled&&Yl.supportsFiber)try{ft=Yl.inject(wS),dt=Yl}catch{}}return Eo.createRoot=function(e,n){if(!l(e))throw Error(s(299));var a=!1,r="",c=sm,f=rm,x=om,b=null;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onUncaughtError!==void 0&&(c=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(x=n.onRecoverableError),n.unstable_transitionCallbacks!==void 0&&(b=n.unstable_transitionCallbacks)),n=N_(e,1,!1,null,null,a,r,c,f,x,b,null),e[Nn]=n.current,gf(e),new Pf(n)},Eo.hydrateRoot=function(e,n,a){if(!l(e))throw Error(s(299));var r=!1,c="",f=sm,x=rm,b=om,P=null,J=null;return a!=null&&(a.unstable_strictMode===!0&&(r=!0),a.identifierPrefix!==void 0&&(c=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(x=a.onCaughtError),a.onRecoverableError!==void 0&&(b=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(P=a.unstable_transitionCallbacks),a.formState!==void 0&&(J=a.formState)),n=N_(e,1,!0,n,a??null,r,c,f,x,b,P,J),n.context=O_(null),a=n.current,r=Kn(),r=ne(r),c=pa(r),c.callback=null,ma(a,c,r),a=r,n.current.lanes=a,zt(n,a),bi(n),e[Nn]=n.current,gf(e),new ql(n)},Eo.version="19.1.0",Eo}var $_;function HS(){if($_)return Bf.exports;$_=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(t){console.error(t)}}return o(),Bf.exports=FS(),Bf.exports}var GS=HS(),gc={exports:{}},VS=gc.exports,tg;function kS(){return tg||(tg=1,function(o,t){(function(i,s){o.exports=s()})(VS,function(){var i=function(){function s(M){return h.appendChild(M.dom),M}function l(M){for(var T=0;T<h.children.length;T++)h.children[T].style.display=T===M?"block":"none";u=M}var u=0,h=document.createElement("div");h.style.cssText="position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000",h.addEventListener("click",function(M){M.preventDefault(),l(++u%h.children.length)},!1);var d=(performance||Date).now(),m=d,p=0,_=s(new i.Panel("FPS","#0ff","#002")),v=s(new i.Panel("MS","#0f0","#020"));if(self.performance&&self.performance.memory)var S=s(new i.Panel("MB","#f08","#201"));return l(0),{REVISION:16,dom:h,addPanel:s,showPanel:l,begin:function(){d=(performance||Date).now()},end:function(){p++;var M=(performance||Date).now();if(v.update(M-d,200),M>m+1e3&&(_.update(1e3*p/(M-m),100),m=M,p=0,S)){var T=performance.memory;S.update(T.usedJSHeapSize/1048576,T.jsHeapSizeLimit/1048576)}return M},update:function(){d=this.end()},domElement:h,setMode:l}};return i.Panel=function(s,l,u){var h=1/0,d=0,m=Math.round,p=m(window.devicePixelRatio||1),_=80*p,v=48*p,S=3*p,M=2*p,T=3*p,R=15*p,y=74*p,g=30*p,O=document.createElement("canvas");O.width=_,O.height=v,O.style.cssText="width:80px;height:48px";var U=O.getContext("2d");return U.font="bold "+9*p+"px Helvetica,Arial,sans-serif",U.textBaseline="top",U.fillStyle=u,U.fillRect(0,0,_,v),U.fillStyle=l,U.fillText(s,S,M),U.fillRect(T,R,y,g),U.fillStyle=u,U.globalAlpha=.9,U.fillRect(T,R,y,g),{dom:O,update:function(w,F){h=Math.min(h,w),d=Math.max(d,w),U.fillStyle=u,U.globalAlpha=1,U.fillRect(0,0,_,R),U.fillStyle=l,U.fillText(m(w)+" "+s+" ("+m(h)+"-"+m(d)+")",S,M),U.drawImage(O,T+p,R,y-p,g,T,R,y-p,g),U.fillRect(T+y-p,R,p,g),U.fillStyle=u,U.globalAlpha=.9,U.fillRect(T+y-p,R,p,m((1-w/F)*g))}}},i})}(gc)),gc.exports}var XS=kS();const WS=US(XS),qS=({statsRef:o})=>{const t=Hn.useRef(null);return Hn.useEffect(()=>{const i=new WS;return i.showPanel(0),i.dom.style.position="absolute",i.dom.style.top="0px",i.dom.style.left="0px",t.current?.appendChild(i.dom),o.current=i,()=>{i.dom.parentNode&&i.dom.parentNode.removeChild(i.dom),o.current=null}},[o]),ee.jsx("div",{ref:t,style:{position:"absolute",top:0,left:0,zIndex:10}})},YS=({drawCalls:o})=>ee.jsxs("div",{style:{position:"absolute",top:0,right:0,color:"#0f0",background:"rgba(0,0,0,0.6)",font:"12px monospace",padding:"2px 8px",zIndex:10},children:["Draw Calls: ",o]});/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const od="177",Sr={ROTATE:0,DOLLY:1,PAN:2},gr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},jS=0,eg=1,ZS=2,$g=1,KS=2,ta=3,ka=0,Gn=1,ea=2,Ga=0,xr=1,ng=2,ig=3,ag=4,QS=5,vs=100,JS=101,$S=102,tx=103,ex=104,nx=200,ix=201,ax=202,sx=203,Sh=204,xh=205,rx=206,ox=207,lx=208,cx=209,ux=210,fx=211,hx=212,dx=213,px=214,yh=0,Mh=1,Eh=2,Er=3,Th=4,bh=5,Ah=6,Rh=7,tv=0,mx=1,_x=2,Va=0,gx=1,vx=2,Sx=3,xx=4,yx=5,Mx=6,Ex=7,ev=300,Tr=301,br=302,Ch=303,wh=304,Cc=306,Dh=1e3,xs=1001,Uh=1002,Si=1003,Tx=1004,jl=1005,Ri=1006,Vf=1007,ys=1008,sa=1009,nv=1010,iv=1011,Do=1012,ld=1013,Ms=1014,na=1015,Oo=1016,cd=1017,ud=1018,Uo=1020,av=35902,sv=1021,rv=1022,gi=1023,Lo=1026,No=1027,ov=1028,fd=1029,lv=1030,hd=1031,dd=1033,vc=33776,Sc=33777,xc=33778,yc=33779,Lh=35840,Nh=35841,Oh=35842,Ph=35843,zh=36196,Ih=37492,Bh=37496,Fh=37808,Hh=37809,Gh=37810,Vh=37811,kh=37812,Xh=37813,Wh=37814,qh=37815,Yh=37816,jh=37817,Zh=37818,Kh=37819,Qh=37820,Jh=37821,Mc=36492,$h=36494,td=36495,cv=36283,ed=36284,nd=36285,id=36286,bx=3200,Ax=3201,Rx=0,Cx=1,Ha="",li="srgb",Ar="srgb-linear",bc="linear",Ie="srgb",ir=7680,sg=519,wx=512,Dx=513,Ux=514,uv=515,Lx=516,Nx=517,Ox=518,Px=519,rg=35044,og="300 es",ia=2e3,Ac=2001;class bs{addEventListener(t,i){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[t]===void 0&&(s[t]=[]),s[t].indexOf(i)===-1&&s[t].push(i)}hasEventListener(t,i){const s=this._listeners;return s===void 0?!1:s[t]!==void 0&&s[t].indexOf(i)!==-1}removeEventListener(t,i){const s=this._listeners;if(s===void 0)return;const l=s[t];if(l!==void 0){const u=l.indexOf(i);u!==-1&&l.splice(u,1)}}dispatchEvent(t){const i=this._listeners;if(i===void 0)return;const s=i[t.type];if(s!==void 0){t.target=this;const l=s.slice(0);for(let u=0,h=l.length;u<h;u++)l[u].call(this,t);t.target=null}}}const wn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ec=Math.PI/180,ad=180/Math.PI;function Po(){const o=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(wn[o&255]+wn[o>>8&255]+wn[o>>16&255]+wn[o>>24&255]+"-"+wn[t&255]+wn[t>>8&255]+"-"+wn[t>>16&15|64]+wn[t>>24&255]+"-"+wn[i&63|128]+wn[i>>8&255]+"-"+wn[i>>16&255]+wn[i>>24&255]+wn[s&255]+wn[s>>8&255]+wn[s>>16&255]+wn[s>>24&255]).toLowerCase()}function _e(o,t,i){return Math.max(t,Math.min(i,o))}function zx(o,t){return(o%t+t)%t}function kf(o,t,i){return(1-i)*o+i*t}function To(o,t){switch(t.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function Bn(o,t){switch(t.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}const Ix={DEG2RAD:Ec};class he{constructor(t=0,i=0){he.prototype.isVector2=!0,this.x=t,this.y=i}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,i){return this.x=t,this.y=i,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const i=this.x,s=this.y,l=t.elements;return this.x=l[0]*i+l[3]*s+l[6],this.y=l[1]*i+l[4]*s+l[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,i){return this.x=_e(this.x,t.x,i.x),this.y=_e(this.y,t.y,i.y),this}clampScalar(t,i){return this.x=_e(this.x,t,i),this.y=_e(this.y,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(_e(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(t)/i;return Math.acos(_e(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,s=this.y-t.y;return i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this}rotateAround(t,i){const s=Math.cos(i),l=Math.sin(i),u=this.x-t.x,h=this.y-t.y;return this.x=u*s-h*l+t.x,this.y=u*l+h*s+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Es{constructor(t=0,i=0,s=0,l=1){this.isQuaternion=!0,this._x=t,this._y=i,this._z=s,this._w=l}static slerpFlat(t,i,s,l,u,h,d){let m=s[l+0],p=s[l+1],_=s[l+2],v=s[l+3];const S=u[h+0],M=u[h+1],T=u[h+2],R=u[h+3];if(d===0){t[i+0]=m,t[i+1]=p,t[i+2]=_,t[i+3]=v;return}if(d===1){t[i+0]=S,t[i+1]=M,t[i+2]=T,t[i+3]=R;return}if(v!==R||m!==S||p!==M||_!==T){let y=1-d;const g=m*S+p*M+_*T+v*R,O=g>=0?1:-1,U=1-g*g;if(U>Number.EPSILON){const F=Math.sqrt(U),V=Math.atan2(F,g*O);y=Math.sin(y*V)/F,d=Math.sin(d*V)/F}const w=d*O;if(m=m*y+S*w,p=p*y+M*w,_=_*y+T*w,v=v*y+R*w,y===1-d){const F=1/Math.sqrt(m*m+p*p+_*_+v*v);m*=F,p*=F,_*=F,v*=F}}t[i]=m,t[i+1]=p,t[i+2]=_,t[i+3]=v}static multiplyQuaternionsFlat(t,i,s,l,u,h){const d=s[l],m=s[l+1],p=s[l+2],_=s[l+3],v=u[h],S=u[h+1],M=u[h+2],T=u[h+3];return t[i]=d*T+_*v+m*M-p*S,t[i+1]=m*T+_*S+p*v-d*M,t[i+2]=p*T+_*M+d*S-m*v,t[i+3]=_*T-d*v-m*S-p*M,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,i,s,l){return this._x=t,this._y=i,this._z=s,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,i=!0){const s=t._x,l=t._y,u=t._z,h=t._order,d=Math.cos,m=Math.sin,p=d(s/2),_=d(l/2),v=d(u/2),S=m(s/2),M=m(l/2),T=m(u/2);switch(h){case"XYZ":this._x=S*_*v+p*M*T,this._y=p*M*v-S*_*T,this._z=p*_*T+S*M*v,this._w=p*_*v-S*M*T;break;case"YXZ":this._x=S*_*v+p*M*T,this._y=p*M*v-S*_*T,this._z=p*_*T-S*M*v,this._w=p*_*v+S*M*T;break;case"ZXY":this._x=S*_*v-p*M*T,this._y=p*M*v+S*_*T,this._z=p*_*T+S*M*v,this._w=p*_*v-S*M*T;break;case"ZYX":this._x=S*_*v-p*M*T,this._y=p*M*v+S*_*T,this._z=p*_*T-S*M*v,this._w=p*_*v+S*M*T;break;case"YZX":this._x=S*_*v+p*M*T,this._y=p*M*v+S*_*T,this._z=p*_*T-S*M*v,this._w=p*_*v-S*M*T;break;case"XZY":this._x=S*_*v-p*M*T,this._y=p*M*v-S*_*T,this._z=p*_*T+S*M*v,this._w=p*_*v+S*M*T;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+h)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,i){const s=i/2,l=Math.sin(s);return this._x=t.x*l,this._y=t.y*l,this._z=t.z*l,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(t){const i=t.elements,s=i[0],l=i[4],u=i[8],h=i[1],d=i[5],m=i[9],p=i[2],_=i[6],v=i[10],S=s+d+v;if(S>0){const M=.5/Math.sqrt(S+1);this._w=.25/M,this._x=(_-m)*M,this._y=(u-p)*M,this._z=(h-l)*M}else if(s>d&&s>v){const M=2*Math.sqrt(1+s-d-v);this._w=(_-m)/M,this._x=.25*M,this._y=(l+h)/M,this._z=(u+p)/M}else if(d>v){const M=2*Math.sqrt(1+d-s-v);this._w=(u-p)/M,this._x=(l+h)/M,this._y=.25*M,this._z=(m+_)/M}else{const M=2*Math.sqrt(1+v-s-d);this._w=(h-l)/M,this._x=(u+p)/M,this._y=(m+_)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(t,i){let s=t.dot(i)+1;return s<Number.EPSILON?(s=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=s):(this._x=0,this._y=-t.z,this._z=t.y,this._w=s)):(this._x=t.y*i.z-t.z*i.y,this._y=t.z*i.x-t.x*i.z,this._z=t.x*i.y-t.y*i.x,this._w=s),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(_e(this.dot(t),-1,1)))}rotateTowards(t,i){const s=this.angleTo(t);if(s===0)return this;const l=Math.min(1,i/s);return this.slerp(t,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,i){const s=t._x,l=t._y,u=t._z,h=t._w,d=i._x,m=i._y,p=i._z,_=i._w;return this._x=s*_+h*d+l*p-u*m,this._y=l*_+h*m+u*d-s*p,this._z=u*_+h*p+s*m-l*d,this._w=h*_-s*d-l*m-u*p,this._onChangeCallback(),this}slerp(t,i){if(i===0)return this;if(i===1)return this.copy(t);const s=this._x,l=this._y,u=this._z,h=this._w;let d=h*t._w+s*t._x+l*t._y+u*t._z;if(d<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,d=-d):this.copy(t),d>=1)return this._w=h,this._x=s,this._y=l,this._z=u,this;const m=1-d*d;if(m<=Number.EPSILON){const M=1-i;return this._w=M*h+i*this._w,this._x=M*s+i*this._x,this._y=M*l+i*this._y,this._z=M*u+i*this._z,this.normalize(),this}const p=Math.sqrt(m),_=Math.atan2(p,d),v=Math.sin((1-i)*_)/p,S=Math.sin(i*_)/p;return this._w=h*v+this._w*S,this._x=s*v+this._x*S,this._y=l*v+this._y*S,this._z=u*v+this._z*S,this._onChangeCallback(),this}slerpQuaternions(t,i,s){return this.copy(t).slerp(i,s)}random(){const t=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),s=Math.random(),l=Math.sqrt(1-s),u=Math.sqrt(s);return this.set(l*Math.sin(t),l*Math.cos(t),u*Math.sin(i),u*Math.cos(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,i=0){return this._x=t[i],this._y=t[i+1],this._z=t[i+2],this._w=t[i+3],this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._w,t}fromBufferAttribute(t,i){return this._x=t.getX(i),this._y=t.getY(i),this._z=t.getZ(i),this._w=t.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class tt{constructor(t=0,i=0,s=0){tt.prototype.isVector3=!0,this.x=t,this.y=i,this.z=s}set(t,i,s){return s===void 0&&(s=this.z),this.x=t,this.y=i,this.z=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,i){return this.x=t.x*i.x,this.y=t.y*i.y,this.z=t.z*i.z,this}applyEuler(t){return this.applyQuaternion(lg.setFromEuler(t))}applyAxisAngle(t,i){return this.applyQuaternion(lg.setFromAxisAngle(t,i))}applyMatrix3(t){const i=this.x,s=this.y,l=this.z,u=t.elements;return this.x=u[0]*i+u[3]*s+u[6]*l,this.y=u[1]*i+u[4]*s+u[7]*l,this.z=u[2]*i+u[5]*s+u[8]*l,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const i=this.x,s=this.y,l=this.z,u=t.elements,h=1/(u[3]*i+u[7]*s+u[11]*l+u[15]);return this.x=(u[0]*i+u[4]*s+u[8]*l+u[12])*h,this.y=(u[1]*i+u[5]*s+u[9]*l+u[13])*h,this.z=(u[2]*i+u[6]*s+u[10]*l+u[14])*h,this}applyQuaternion(t){const i=this.x,s=this.y,l=this.z,u=t.x,h=t.y,d=t.z,m=t.w,p=2*(h*l-d*s),_=2*(d*i-u*l),v=2*(u*s-h*i);return this.x=i+m*p+h*v-d*_,this.y=s+m*_+d*p-u*v,this.z=l+m*v+u*_-h*p,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const i=this.x,s=this.y,l=this.z,u=t.elements;return this.x=u[0]*i+u[4]*s+u[8]*l,this.y=u[1]*i+u[5]*s+u[9]*l,this.z=u[2]*i+u[6]*s+u[10]*l,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,i){return this.x=_e(this.x,t.x,i.x),this.y=_e(this.y,t.y,i.y),this.z=_e(this.z,t.z,i.z),this}clampScalar(t,i){return this.x=_e(this.x,t,i),this.y=_e(this.y,t,i),this.z=_e(this.z,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(_e(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this.z=t.z+(i.z-t.z)*s,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,i){const s=t.x,l=t.y,u=t.z,h=i.x,d=i.y,m=i.z;return this.x=l*m-u*d,this.y=u*h-s*m,this.z=s*d-l*h,this}projectOnVector(t){const i=t.lengthSq();if(i===0)return this.set(0,0,0);const s=t.dot(this)/i;return this.copy(t).multiplyScalar(s)}projectOnPlane(t){return Xf.copy(this).projectOnVector(t),this.sub(Xf)}reflect(t){return this.sub(Xf.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(t)/i;return Math.acos(_e(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,s=this.y-t.y,l=this.z-t.z;return i*i+s*s+l*l}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,i,s){const l=Math.sin(i)*t;return this.x=l*Math.sin(s),this.y=Math.cos(i)*t,this.z=l*Math.cos(s),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,i,s){return this.x=t*Math.sin(i),this.y=s,this.z=t*Math.cos(i),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(t){const i=this.setFromMatrixColumn(t,0).length(),s=this.setFromMatrixColumn(t,1).length(),l=this.setFromMatrixColumn(t,2).length();return this.x=i,this.y=s,this.z=l,this}setFromMatrixColumn(t,i){return this.fromArray(t.elements,i*4)}setFromMatrix3Column(t,i){return this.fromArray(t.elements,i*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,i=Math.random()*2-1,s=Math.sqrt(1-i*i);return this.x=s*Math.cos(t),this.y=i,this.z=s*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Xf=new tt,lg=new Es;class re{constructor(t,i,s,l,u,h,d,m,p){re.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,i,s,l,u,h,d,m,p)}set(t,i,s,l,u,h,d,m,p){const _=this.elements;return _[0]=t,_[1]=l,_[2]=d,_[3]=i,_[4]=u,_[5]=m,_[6]=s,_[7]=h,_[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const i=this.elements,s=t.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],this}extractBasis(t,i,s){return t.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const i=t.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const s=t.elements,l=i.elements,u=this.elements,h=s[0],d=s[3],m=s[6],p=s[1],_=s[4],v=s[7],S=s[2],M=s[5],T=s[8],R=l[0],y=l[3],g=l[6],O=l[1],U=l[4],w=l[7],F=l[2],V=l[5],I=l[8];return u[0]=h*R+d*O+m*F,u[3]=h*y+d*U+m*V,u[6]=h*g+d*w+m*I,u[1]=p*R+_*O+v*F,u[4]=p*y+_*U+v*V,u[7]=p*g+_*w+v*I,u[2]=S*R+M*O+T*F,u[5]=S*y+M*U+T*V,u[8]=S*g+M*w+T*I,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=t,i[4]*=t,i[7]*=t,i[2]*=t,i[5]*=t,i[8]*=t,this}determinant(){const t=this.elements,i=t[0],s=t[1],l=t[2],u=t[3],h=t[4],d=t[5],m=t[6],p=t[7],_=t[8];return i*h*_-i*d*p-s*u*_+s*d*m+l*u*p-l*h*m}invert(){const t=this.elements,i=t[0],s=t[1],l=t[2],u=t[3],h=t[4],d=t[5],m=t[6],p=t[7],_=t[8],v=_*h-d*p,S=d*m-_*u,M=p*u-h*m,T=i*v+s*S+l*M;if(T===0)return this.set(0,0,0,0,0,0,0,0,0);const R=1/T;return t[0]=v*R,t[1]=(l*p-_*s)*R,t[2]=(d*s-l*h)*R,t[3]=S*R,t[4]=(_*i-l*m)*R,t[5]=(l*u-d*i)*R,t[6]=M*R,t[7]=(s*m-p*i)*R,t[8]=(h*i-s*u)*R,this}transpose(){let t;const i=this.elements;return t=i[1],i[1]=i[3],i[3]=t,t=i[2],i[2]=i[6],i[6]=t,t=i[5],i[5]=i[7],i[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const i=this.elements;return t[0]=i[0],t[1]=i[3],t[2]=i[6],t[3]=i[1],t[4]=i[4],t[5]=i[7],t[6]=i[2],t[7]=i[5],t[8]=i[8],this}setUvTransform(t,i,s,l,u,h,d){const m=Math.cos(u),p=Math.sin(u);return this.set(s*m,s*p,-s*(m*h+p*d)+h+t,-l*p,l*m,-l*(-p*h+m*d)+d+i,0,0,1),this}scale(t,i){return this.premultiply(Wf.makeScale(t,i)),this}rotate(t){return this.premultiply(Wf.makeRotation(-t)),this}translate(t,i){return this.premultiply(Wf.makeTranslation(t,i)),this}makeTranslation(t,i){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,i,0,0,1),this}makeRotation(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,-s,0,s,i,0,0,0,1),this}makeScale(t,i){return this.set(t,0,0,0,i,0,0,0,1),this}equals(t){const i=this.elements,s=t.elements;for(let l=0;l<9;l++)if(i[l]!==s[l])return!1;return!0}fromArray(t,i=0){for(let s=0;s<9;s++)this.elements[s]=t[s+i];return this}toArray(t=[],i=0){const s=this.elements;return t[i]=s[0],t[i+1]=s[1],t[i+2]=s[2],t[i+3]=s[3],t[i+4]=s[4],t[i+5]=s[5],t[i+6]=s[6],t[i+7]=s[7],t[i+8]=s[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Wf=new re;function fv(o){for(let t=o.length-1;t>=0;--t)if(o[t]>=65535)return!0;return!1}function Rc(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function Bx(){const o=Rc("canvas");return o.style.display="block",o}const cg={};function yr(o){o in cg||(cg[o]=!0,console.warn(o))}function Fx(o,t,i){return new Promise(function(s,l){function u(){switch(o.clientWaitSync(t,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:l();break;case o.TIMEOUT_EXPIRED:setTimeout(u,i);break;default:s()}}setTimeout(u,i)})}function Hx(o){const t=o.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Gx(o){const t=o.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const ug=new re().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),fg=new re().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Vx(){const o={enabled:!0,workingColorSpace:Ar,spaces:{},convert:function(l,u,h){return this.enabled===!1||u===h||!u||!h||(this.spaces[u].transfer===Ie&&(l.r=aa(l.r),l.g=aa(l.g),l.b=aa(l.b)),this.spaces[u].primaries!==this.spaces[h].primaries&&(l.applyMatrix3(this.spaces[u].toXYZ),l.applyMatrix3(this.spaces[h].fromXYZ)),this.spaces[h].transfer===Ie&&(l.r=Mr(l.r),l.g=Mr(l.g),l.b=Mr(l.b))),l},workingToColorSpace:function(l,u){return this.convert(l,this.workingColorSpace,u)},colorSpaceToWorking:function(l,u){return this.convert(l,u,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===Ha?bc:this.spaces[l].transfer},getLuminanceCoefficients:function(l,u=this.workingColorSpace){return l.fromArray(this.spaces[u].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,u,h){return l.copy(this.spaces[u].toXYZ).multiply(this.spaces[h].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,u){return yr("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),o.workingToColorSpace(l,u)},toWorkingColorSpace:function(l,u){return yr("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),o.colorSpaceToWorking(l,u)}},t=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],s=[.3127,.329];return o.define({[Ar]:{primaries:t,whitePoint:s,transfer:bc,toXYZ:ug,fromXYZ:fg,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:li},outputColorSpaceConfig:{drawingBufferColorSpace:li}},[li]:{primaries:t,whitePoint:s,transfer:Ie,toXYZ:ug,fromXYZ:fg,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:li}}}),o}const Ae=Vx();function aa(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function Mr(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let ar;class kx{static getDataURL(t,i="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let s;if(t instanceof HTMLCanvasElement)s=t;else{ar===void 0&&(ar=Rc("canvas")),ar.width=t.width,ar.height=t.height;const l=ar.getContext("2d");t instanceof ImageData?l.putImageData(t,0,0):l.drawImage(t,0,0,t.width,t.height),s=ar}return s.toDataURL(i)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const i=Rc("canvas");i.width=t.width,i.height=t.height;const s=i.getContext("2d");s.drawImage(t,0,0,t.width,t.height);const l=s.getImageData(0,0,t.width,t.height),u=l.data;for(let h=0;h<u.length;h++)u[h]=aa(u[h]/255)*255;return s.putImageData(l,0,0),i}else if(t.data){const i=t.data.slice(0);for(let s=0;s<i.length;s++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[s]=Math.floor(aa(i[s]/255)*255):i[s]=aa(i[s]);return{data:i,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Xx=0;class pd{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Xx++}),this.uuid=Po(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const i=this.data;return i instanceof HTMLVideoElement?t.set(i.videoWidth,i.videoHeight):i!==null?t.set(i.width,i.height,i.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const s={uuid:this.uuid,url:""},l=this.data;if(l!==null){let u;if(Array.isArray(l)){u=[];for(let h=0,d=l.length;h<d;h++)l[h].isDataTexture?u.push(qf(l[h].image)):u.push(qf(l[h]))}else u=qf(l);s.url=u}return i||(t.images[this.uuid]=s),s}}function qf(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?kx.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Wx=0;const Yf=new tt;class Vn extends bs{constructor(t=Vn.DEFAULT_IMAGE,i=Vn.DEFAULT_MAPPING,s=xs,l=xs,u=Ri,h=ys,d=gi,m=sa,p=Vn.DEFAULT_ANISOTROPY,_=Ha){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Wx++}),this.uuid=Po(),this.name="",this.source=new pd(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=s,this.wrapT=l,this.magFilter=u,this.minFilter=h,this.anisotropy=p,this.format=d,this.internalFormat=null,this.type=m,this.offset=new he(0,0),this.repeat=new he(1,1),this.center=new he(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new re,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=_,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Yf).x}get height(){return this.source.getSize(Yf).y}get depth(){return this.source.getSize(Yf).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const i in t){const s=t[i];if(s===void 0){console.warn(`THREE.Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Texture.setValues(): property '${i}' does not exist.`);continue}l&&s&&l.isVector2&&s.isVector2||l&&s&&l.isVector3&&s.isVector3||l&&s&&l.isMatrix3&&s.isMatrix3?l.copy(s):this[i]=s}}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const s={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),i||(t.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==ev)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Dh:t.x=t.x-Math.floor(t.x);break;case xs:t.x=t.x<0?0:1;break;case Uh:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Dh:t.y=t.y-Math.floor(t.y);break;case xs:t.y=t.y<0?0:1;break;case Uh:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Vn.DEFAULT_IMAGE=null;Vn.DEFAULT_MAPPING=ev;Vn.DEFAULT_ANISOTROPY=1;class $e{constructor(t=0,i=0,s=0,l=1){$e.prototype.isVector4=!0,this.x=t,this.y=i,this.z=s,this.w=l}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,i,s,l){return this.x=t,this.y=i,this.z=s,this.w=l,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this.w=t.w+i.w,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this.w+=t.w*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this.w=t.w-i.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const i=this.x,s=this.y,l=this.z,u=this.w,h=t.elements;return this.x=h[0]*i+h[4]*s+h[8]*l+h[12]*u,this.y=h[1]*i+h[5]*s+h[9]*l+h[13]*u,this.z=h[2]*i+h[6]*s+h[10]*l+h[14]*u,this.w=h[3]*i+h[7]*s+h[11]*l+h[15]*u,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const i=Math.sqrt(1-t.w*t.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/i,this.y=t.y/i,this.z=t.z/i),this}setAxisAngleFromRotationMatrix(t){let i,s,l,u;const m=t.elements,p=m[0],_=m[4],v=m[8],S=m[1],M=m[5],T=m[9],R=m[2],y=m[6],g=m[10];if(Math.abs(_-S)<.01&&Math.abs(v-R)<.01&&Math.abs(T-y)<.01){if(Math.abs(_+S)<.1&&Math.abs(v+R)<.1&&Math.abs(T+y)<.1&&Math.abs(p+M+g-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const U=(p+1)/2,w=(M+1)/2,F=(g+1)/2,V=(_+S)/4,I=(v+R)/4,q=(T+y)/4;return U>w&&U>F?U<.01?(s=0,l=.707106781,u=.707106781):(s=Math.sqrt(U),l=V/s,u=I/s):w>F?w<.01?(s=.707106781,l=0,u=.707106781):(l=Math.sqrt(w),s=V/l,u=q/l):F<.01?(s=.707106781,l=.707106781,u=0):(u=Math.sqrt(F),s=I/u,l=q/u),this.set(s,l,u,i),this}let O=Math.sqrt((y-T)*(y-T)+(v-R)*(v-R)+(S-_)*(S-_));return Math.abs(O)<.001&&(O=1),this.x=(y-T)/O,this.y=(v-R)/O,this.z=(S-_)/O,this.w=Math.acos((p+M+g-1)/2),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,i){return this.x=_e(this.x,t.x,i.x),this.y=_e(this.y,t.y,i.y),this.z=_e(this.z,t.z,i.z),this.w=_e(this.w,t.w,i.w),this}clampScalar(t,i){return this.x=_e(this.x,t,i),this.y=_e(this.y,t,i),this.z=_e(this.z,t,i),this.w=_e(this.w,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(_e(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this.w+=(t.w-this.w)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this.z=t.z+(i.z-t.z)*s,this.w=t.w+(i.w-t.w)*s,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this.w=t[i+3],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t[i+3]=this.w,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this.w=t.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class qx extends bs{constructor(t=1,i=1,s={}){super(),s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ri,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},s),this.isRenderTarget=!0,this.width=t,this.height=i,this.depth=s.depth,this.scissor=new $e(0,0,t,i),this.scissorTest=!1,this.viewport=new $e(0,0,t,i);const l={width:t,height:i,depth:s.depth},u=new Vn(l);this.textures=[];const h=s.count;for(let d=0;d<h;d++)this.textures[d]=u.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this._setTextureOptions(s),this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples,this.multiview=s.multiview}_setTextureOptions(t={}){const i={minFilter:Ri,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(i.mapping=t.mapping),t.wrapS!==void 0&&(i.wrapS=t.wrapS),t.wrapT!==void 0&&(i.wrapT=t.wrapT),t.wrapR!==void 0&&(i.wrapR=t.wrapR),t.magFilter!==void 0&&(i.magFilter=t.magFilter),t.minFilter!==void 0&&(i.minFilter=t.minFilter),t.format!==void 0&&(i.format=t.format),t.type!==void 0&&(i.type=t.type),t.anisotropy!==void 0&&(i.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(i.colorSpace=t.colorSpace),t.flipY!==void 0&&(i.flipY=t.flipY),t.generateMipmaps!==void 0&&(i.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(i.internalFormat=t.internalFormat);for(let s=0;s<this.textures.length;s++)this.textures[s].setValues(i)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,i,s=1){if(this.width!==t||this.height!==i||this.depth!==s){this.width=t,this.height=i,this.depth=s;for(let l=0,u=this.textures.length;l<u;l++)this.textures[l].image.width=t,this.textures[l].image.height=i,this.textures[l].image.depth=s,this.textures[l].isArrayTexture=this.textures[l].image.depth>1;this.dispose()}this.viewport.set(0,0,t,i),this.scissor.set(0,0,t,i)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,s=t.textures.length;i<s;i++){this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},t.textures[i].image);this.textures[i].source=new pd(l)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ts extends qx{constructor(t=1,i=1,s={}){super(t,i,s),this.isWebGLRenderTarget=!0}}class hv extends Vn{constructor(t=null,i=1,s=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:i,height:s,depth:l},this.magFilter=Si,this.minFilter=Si,this.wrapR=xs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Yx extends Vn{constructor(t=null,i=1,s=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:i,height:s,depth:l},this.magFilter=Si,this.minFilter=Si,this.wrapR=xs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class zo{constructor(t=new tt(1/0,1/0,1/0),i=new tt(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=i}set(t,i){return this.min.copy(t),this.max.copy(i),this}setFromArray(t){this.makeEmpty();for(let i=0,s=t.length;i<s;i+=3)this.expandByPoint(di.fromArray(t,i));return this}setFromBufferAttribute(t){this.makeEmpty();for(let i=0,s=t.count;i<s;i++)this.expandByPoint(di.fromBufferAttribute(t,i));return this}setFromPoints(t){this.makeEmpty();for(let i=0,s=t.length;i<s;i++)this.expandByPoint(t[i]);return this}setFromCenterAndSize(t,i){const s=di.copy(i).multiplyScalar(.5);return this.min.copy(t).sub(s),this.max.copy(t).add(s),this}setFromObject(t,i=!1){return this.makeEmpty(),this.expandByObject(t,i)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,i=!1){t.updateWorldMatrix(!1,!1);const s=t.geometry;if(s!==void 0){const u=s.getAttribute("position");if(i===!0&&u!==void 0&&t.isInstancedMesh!==!0)for(let h=0,d=u.count;h<d;h++)t.isMesh===!0?t.getVertexPosition(h,di):di.fromBufferAttribute(u,h),di.applyMatrix4(t.matrixWorld),this.expandByPoint(di);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Zl.copy(t.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),Zl.copy(s.boundingBox)),Zl.applyMatrix4(t.matrixWorld),this.union(Zl)}const l=t.children;for(let u=0,h=l.length;u<h;u++)this.expandByObject(l[u],i);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,i){return i.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,di),di.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let i,s;return t.normal.x>0?(i=t.normal.x*this.min.x,s=t.normal.x*this.max.x):(i=t.normal.x*this.max.x,s=t.normal.x*this.min.x),t.normal.y>0?(i+=t.normal.y*this.min.y,s+=t.normal.y*this.max.y):(i+=t.normal.y*this.max.y,s+=t.normal.y*this.min.y),t.normal.z>0?(i+=t.normal.z*this.min.z,s+=t.normal.z*this.max.z):(i+=t.normal.z*this.max.z,s+=t.normal.z*this.min.z),i<=-t.constant&&s>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(bo),Kl.subVectors(this.max,bo),sr.subVectors(t.a,bo),rr.subVectors(t.b,bo),or.subVectors(t.c,bo),Na.subVectors(rr,sr),Oa.subVectors(or,rr),fs.subVectors(sr,or);let i=[0,-Na.z,Na.y,0,-Oa.z,Oa.y,0,-fs.z,fs.y,Na.z,0,-Na.x,Oa.z,0,-Oa.x,fs.z,0,-fs.x,-Na.y,Na.x,0,-Oa.y,Oa.x,0,-fs.y,fs.x,0];return!jf(i,sr,rr,or,Kl)||(i=[1,0,0,0,1,0,0,0,1],!jf(i,sr,rr,or,Kl))?!1:(Ql.crossVectors(Na,Oa),i=[Ql.x,Ql.y,Ql.z],jf(i,sr,rr,or,Kl))}clampPoint(t,i){return i.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,di).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(di).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Zi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Zi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Zi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Zi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Zi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Zi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Zi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Zi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Zi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const Zi=[new tt,new tt,new tt,new tt,new tt,new tt,new tt,new tt],di=new tt,Zl=new zo,sr=new tt,rr=new tt,or=new tt,Na=new tt,Oa=new tt,fs=new tt,bo=new tt,Kl=new tt,Ql=new tt,hs=new tt;function jf(o,t,i,s,l){for(let u=0,h=o.length-3;u<=h;u+=3){hs.fromArray(o,u);const d=l.x*Math.abs(hs.x)+l.y*Math.abs(hs.y)+l.z*Math.abs(hs.z),m=t.dot(hs),p=i.dot(hs),_=s.dot(hs);if(Math.max(-Math.max(m,p,_),Math.min(m,p,_))>d)return!1}return!0}const jx=new zo,Ao=new tt,Zf=new tt;class md{constructor(t=new tt,i=-1){this.isSphere=!0,this.center=t,this.radius=i}set(t,i){return this.center.copy(t),this.radius=i,this}setFromPoints(t,i){const s=this.center;i!==void 0?s.copy(i):jx.setFromPoints(t).getCenter(s);let l=0;for(let u=0,h=t.length;u<h;u++)l=Math.max(l,s.distanceToSquared(t[u]));return this.radius=Math.sqrt(l),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const i=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=i*i}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,i){const s=this.center.distanceToSquared(t);return i.copy(t),s>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ao.subVectors(t,this.center);const i=Ao.lengthSq();if(i>this.radius*this.radius){const s=Math.sqrt(i),l=(s-this.radius)*.5;this.center.addScaledVector(Ao,l/s),this.radius+=l}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Zf.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ao.copy(t.center).add(Zf)),this.expandByPoint(Ao.copy(t.center).sub(Zf))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const Ki=new tt,Kf=new tt,Jl=new tt,Pa=new tt,Qf=new tt,$l=new tt,Jf=new tt;class dv{constructor(t=new tt,i=new tt(0,0,-1)){this.origin=t,this.direction=i}set(t,i){return this.origin.copy(t),this.direction.copy(i),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,i){return i.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Ki)),this}closestPointToPoint(t,i){i.subVectors(t,this.origin);const s=i.dot(this.direction);return s<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const i=Ki.subVectors(t,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(t):(Ki.copy(this.origin).addScaledVector(this.direction,i),Ki.distanceToSquared(t))}distanceSqToSegment(t,i,s,l){Kf.copy(t).add(i).multiplyScalar(.5),Jl.copy(i).sub(t).normalize(),Pa.copy(this.origin).sub(Kf);const u=t.distanceTo(i)*.5,h=-this.direction.dot(Jl),d=Pa.dot(this.direction),m=-Pa.dot(Jl),p=Pa.lengthSq(),_=Math.abs(1-h*h);let v,S,M,T;if(_>0)if(v=h*m-d,S=h*d-m,T=u*_,v>=0)if(S>=-T)if(S<=T){const R=1/_;v*=R,S*=R,M=v*(v+h*S+2*d)+S*(h*v+S+2*m)+p}else S=u,v=Math.max(0,-(h*S+d)),M=-v*v+S*(S+2*m)+p;else S=-u,v=Math.max(0,-(h*S+d)),M=-v*v+S*(S+2*m)+p;else S<=-T?(v=Math.max(0,-(-h*u+d)),S=v>0?-u:Math.min(Math.max(-u,-m),u),M=-v*v+S*(S+2*m)+p):S<=T?(v=0,S=Math.min(Math.max(-u,-m),u),M=S*(S+2*m)+p):(v=Math.max(0,-(h*u+d)),S=v>0?u:Math.min(Math.max(-u,-m),u),M=-v*v+S*(S+2*m)+p);else S=h>0?-u:u,v=Math.max(0,-(h*S+d)),M=-v*v+S*(S+2*m)+p;return s&&s.copy(this.origin).addScaledVector(this.direction,v),l&&l.copy(Kf).addScaledVector(Jl,S),M}intersectSphere(t,i){Ki.subVectors(t.center,this.origin);const s=Ki.dot(this.direction),l=Ki.dot(Ki)-s*s,u=t.radius*t.radius;if(l>u)return null;const h=Math.sqrt(u-l),d=s-h,m=s+h;return m<0?null:d<0?this.at(m,i):this.at(d,i)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const i=t.normal.dot(this.direction);if(i===0)return t.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(t.normal)+t.constant)/i;return s>=0?s:null}intersectPlane(t,i){const s=this.distanceToPlane(t);return s===null?null:this.at(s,i)}intersectsPlane(t){const i=t.distanceToPoint(this.origin);return i===0||t.normal.dot(this.direction)*i<0}intersectBox(t,i){let s,l,u,h,d,m;const p=1/this.direction.x,_=1/this.direction.y,v=1/this.direction.z,S=this.origin;return p>=0?(s=(t.min.x-S.x)*p,l=(t.max.x-S.x)*p):(s=(t.max.x-S.x)*p,l=(t.min.x-S.x)*p),_>=0?(u=(t.min.y-S.y)*_,h=(t.max.y-S.y)*_):(u=(t.max.y-S.y)*_,h=(t.min.y-S.y)*_),s>h||u>l||((u>s||isNaN(s))&&(s=u),(h<l||isNaN(l))&&(l=h),v>=0?(d=(t.min.z-S.z)*v,m=(t.max.z-S.z)*v):(d=(t.max.z-S.z)*v,m=(t.min.z-S.z)*v),s>m||d>l)||((d>s||s!==s)&&(s=d),(m<l||l!==l)&&(l=m),l<0)?null:this.at(s>=0?s:l,i)}intersectsBox(t){return this.intersectBox(t,Ki)!==null}intersectTriangle(t,i,s,l,u){Qf.subVectors(i,t),$l.subVectors(s,t),Jf.crossVectors(Qf,$l);let h=this.direction.dot(Jf),d;if(h>0){if(l)return null;d=1}else if(h<0)d=-1,h=-h;else return null;Pa.subVectors(this.origin,t);const m=d*this.direction.dot($l.crossVectors(Pa,$l));if(m<0)return null;const p=d*this.direction.dot(Qf.cross(Pa));if(p<0||m+p>h)return null;const _=-d*Pa.dot(Jf);return _<0?null:this.at(_/h,u)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class sn{constructor(t,i,s,l,u,h,d,m,p,_,v,S,M,T,R,y){sn.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,i,s,l,u,h,d,m,p,_,v,S,M,T,R,y)}set(t,i,s,l,u,h,d,m,p,_,v,S,M,T,R,y){const g=this.elements;return g[0]=t,g[4]=i,g[8]=s,g[12]=l,g[1]=u,g[5]=h,g[9]=d,g[13]=m,g[2]=p,g[6]=_,g[10]=v,g[14]=S,g[3]=M,g[7]=T,g[11]=R,g[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new sn().fromArray(this.elements)}copy(t){const i=this.elements,s=t.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],i[9]=s[9],i[10]=s[10],i[11]=s[11],i[12]=s[12],i[13]=s[13],i[14]=s[14],i[15]=s[15],this}copyPosition(t){const i=this.elements,s=t.elements;return i[12]=s[12],i[13]=s[13],i[14]=s[14],this}setFromMatrix3(t){const i=t.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(t,i,s){return t.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this}makeBasis(t,i,s){return this.set(t.x,i.x,s.x,0,t.y,i.y,s.y,0,t.z,i.z,s.z,0,0,0,0,1),this}extractRotation(t){const i=this.elements,s=t.elements,l=1/lr.setFromMatrixColumn(t,0).length(),u=1/lr.setFromMatrixColumn(t,1).length(),h=1/lr.setFromMatrixColumn(t,2).length();return i[0]=s[0]*l,i[1]=s[1]*l,i[2]=s[2]*l,i[3]=0,i[4]=s[4]*u,i[5]=s[5]*u,i[6]=s[6]*u,i[7]=0,i[8]=s[8]*h,i[9]=s[9]*h,i[10]=s[10]*h,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(t){const i=this.elements,s=t.x,l=t.y,u=t.z,h=Math.cos(s),d=Math.sin(s),m=Math.cos(l),p=Math.sin(l),_=Math.cos(u),v=Math.sin(u);if(t.order==="XYZ"){const S=h*_,M=h*v,T=d*_,R=d*v;i[0]=m*_,i[4]=-m*v,i[8]=p,i[1]=M+T*p,i[5]=S-R*p,i[9]=-d*m,i[2]=R-S*p,i[6]=T+M*p,i[10]=h*m}else if(t.order==="YXZ"){const S=m*_,M=m*v,T=p*_,R=p*v;i[0]=S+R*d,i[4]=T*d-M,i[8]=h*p,i[1]=h*v,i[5]=h*_,i[9]=-d,i[2]=M*d-T,i[6]=R+S*d,i[10]=h*m}else if(t.order==="ZXY"){const S=m*_,M=m*v,T=p*_,R=p*v;i[0]=S-R*d,i[4]=-h*v,i[8]=T+M*d,i[1]=M+T*d,i[5]=h*_,i[9]=R-S*d,i[2]=-h*p,i[6]=d,i[10]=h*m}else if(t.order==="ZYX"){const S=h*_,M=h*v,T=d*_,R=d*v;i[0]=m*_,i[4]=T*p-M,i[8]=S*p+R,i[1]=m*v,i[5]=R*p+S,i[9]=M*p-T,i[2]=-p,i[6]=d*m,i[10]=h*m}else if(t.order==="YZX"){const S=h*m,M=h*p,T=d*m,R=d*p;i[0]=m*_,i[4]=R-S*v,i[8]=T*v+M,i[1]=v,i[5]=h*_,i[9]=-d*_,i[2]=-p*_,i[6]=M*v+T,i[10]=S-R*v}else if(t.order==="XZY"){const S=h*m,M=h*p,T=d*m,R=d*p;i[0]=m*_,i[4]=-v,i[8]=p*_,i[1]=S*v+R,i[5]=h*_,i[9]=M*v-T,i[2]=T*v-M,i[6]=d*_,i[10]=R*v+S}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Zx,t,Kx)}lookAt(t,i,s){const l=this.elements;return Jn.subVectors(t,i),Jn.lengthSq()===0&&(Jn.z=1),Jn.normalize(),za.crossVectors(s,Jn),za.lengthSq()===0&&(Math.abs(s.z)===1?Jn.x+=1e-4:Jn.z+=1e-4,Jn.normalize(),za.crossVectors(s,Jn)),za.normalize(),tc.crossVectors(Jn,za),l[0]=za.x,l[4]=tc.x,l[8]=Jn.x,l[1]=za.y,l[5]=tc.y,l[9]=Jn.y,l[2]=za.z,l[6]=tc.z,l[10]=Jn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const s=t.elements,l=i.elements,u=this.elements,h=s[0],d=s[4],m=s[8],p=s[12],_=s[1],v=s[5],S=s[9],M=s[13],T=s[2],R=s[6],y=s[10],g=s[14],O=s[3],U=s[7],w=s[11],F=s[15],V=l[0],I=l[4],q=l[8],D=l[12],C=l[1],G=l[5],ot=l[9],rt=l[13],pt=l[2],ut=l[6],z=l[10],Z=l[14],Y=l[3],Mt=l[7],L=l[11],$=l[15];return u[0]=h*V+d*C+m*pt+p*Y,u[4]=h*I+d*G+m*ut+p*Mt,u[8]=h*q+d*ot+m*z+p*L,u[12]=h*D+d*rt+m*Z+p*$,u[1]=_*V+v*C+S*pt+M*Y,u[5]=_*I+v*G+S*ut+M*Mt,u[9]=_*q+v*ot+S*z+M*L,u[13]=_*D+v*rt+S*Z+M*$,u[2]=T*V+R*C+y*pt+g*Y,u[6]=T*I+R*G+y*ut+g*Mt,u[10]=T*q+R*ot+y*z+g*L,u[14]=T*D+R*rt+y*Z+g*$,u[3]=O*V+U*C+w*pt+F*Y,u[7]=O*I+U*G+w*ut+F*Mt,u[11]=O*q+U*ot+w*z+F*L,u[15]=O*D+U*rt+w*Z+F*$,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[4]*=t,i[8]*=t,i[12]*=t,i[1]*=t,i[5]*=t,i[9]*=t,i[13]*=t,i[2]*=t,i[6]*=t,i[10]*=t,i[14]*=t,i[3]*=t,i[7]*=t,i[11]*=t,i[15]*=t,this}determinant(){const t=this.elements,i=t[0],s=t[4],l=t[8],u=t[12],h=t[1],d=t[5],m=t[9],p=t[13],_=t[2],v=t[6],S=t[10],M=t[14],T=t[3],R=t[7],y=t[11],g=t[15];return T*(+u*m*v-l*p*v-u*d*S+s*p*S+l*d*M-s*m*M)+R*(+i*m*M-i*p*S+u*h*S-l*h*M+l*p*_-u*m*_)+y*(+i*p*v-i*d*M-u*h*v+s*h*M+u*d*_-s*p*_)+g*(-l*d*_-i*m*v+i*d*S+l*h*v-s*h*S+s*m*_)}transpose(){const t=this.elements;let i;return i=t[1],t[1]=t[4],t[4]=i,i=t[2],t[2]=t[8],t[8]=i,i=t[6],t[6]=t[9],t[9]=i,i=t[3],t[3]=t[12],t[12]=i,i=t[7],t[7]=t[13],t[13]=i,i=t[11],t[11]=t[14],t[14]=i,this}setPosition(t,i,s){const l=this.elements;return t.isVector3?(l[12]=t.x,l[13]=t.y,l[14]=t.z):(l[12]=t,l[13]=i,l[14]=s),this}invert(){const t=this.elements,i=t[0],s=t[1],l=t[2],u=t[3],h=t[4],d=t[5],m=t[6],p=t[7],_=t[8],v=t[9],S=t[10],M=t[11],T=t[12],R=t[13],y=t[14],g=t[15],O=v*y*p-R*S*p+R*m*M-d*y*M-v*m*g+d*S*g,U=T*S*p-_*y*p-T*m*M+h*y*M+_*m*g-h*S*g,w=_*R*p-T*v*p+T*d*M-h*R*M-_*d*g+h*v*g,F=T*v*m-_*R*m-T*d*S+h*R*S+_*d*y-h*v*y,V=i*O+s*U+l*w+u*F;if(V===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const I=1/V;return t[0]=O*I,t[1]=(R*S*u-v*y*u-R*l*M+s*y*M+v*l*g-s*S*g)*I,t[2]=(d*y*u-R*m*u+R*l*p-s*y*p-d*l*g+s*m*g)*I,t[3]=(v*m*u-d*S*u-v*l*p+s*S*p+d*l*M-s*m*M)*I,t[4]=U*I,t[5]=(_*y*u-T*S*u+T*l*M-i*y*M-_*l*g+i*S*g)*I,t[6]=(T*m*u-h*y*u-T*l*p+i*y*p+h*l*g-i*m*g)*I,t[7]=(h*S*u-_*m*u+_*l*p-i*S*p-h*l*M+i*m*M)*I,t[8]=w*I,t[9]=(T*v*u-_*R*u-T*s*M+i*R*M+_*s*g-i*v*g)*I,t[10]=(h*R*u-T*d*u+T*s*p-i*R*p-h*s*g+i*d*g)*I,t[11]=(_*d*u-h*v*u-_*s*p+i*v*p+h*s*M-i*d*M)*I,t[12]=F*I,t[13]=(_*R*l-T*v*l+T*s*S-i*R*S-_*s*y+i*v*y)*I,t[14]=(T*d*l-h*R*l-T*s*m+i*R*m+h*s*y-i*d*y)*I,t[15]=(h*v*l-_*d*l+_*s*m-i*v*m-h*s*S+i*d*S)*I,this}scale(t){const i=this.elements,s=t.x,l=t.y,u=t.z;return i[0]*=s,i[4]*=l,i[8]*=u,i[1]*=s,i[5]*=l,i[9]*=u,i[2]*=s,i[6]*=l,i[10]*=u,i[3]*=s,i[7]*=l,i[11]*=u,this}getMaxScaleOnAxis(){const t=this.elements,i=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],s=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],l=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(i,s,l))}makeTranslation(t,i,s){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,i,0,0,1,s,0,0,0,1),this}makeRotationX(t){const i=Math.cos(t),s=Math.sin(t);return this.set(1,0,0,0,0,i,-s,0,0,s,i,0,0,0,0,1),this}makeRotationY(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,0,s,0,0,1,0,0,-s,0,i,0,0,0,0,1),this}makeRotationZ(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,-s,0,0,s,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,i){const s=Math.cos(i),l=Math.sin(i),u=1-s,h=t.x,d=t.y,m=t.z,p=u*h,_=u*d;return this.set(p*h+s,p*d-l*m,p*m+l*d,0,p*d+l*m,_*d+s,_*m-l*h,0,p*m-l*d,_*m+l*h,u*m*m+s,0,0,0,0,1),this}makeScale(t,i,s){return this.set(t,0,0,0,0,i,0,0,0,0,s,0,0,0,0,1),this}makeShear(t,i,s,l,u,h){return this.set(1,s,u,0,t,1,h,0,i,l,1,0,0,0,0,1),this}compose(t,i,s){const l=this.elements,u=i._x,h=i._y,d=i._z,m=i._w,p=u+u,_=h+h,v=d+d,S=u*p,M=u*_,T=u*v,R=h*_,y=h*v,g=d*v,O=m*p,U=m*_,w=m*v,F=s.x,V=s.y,I=s.z;return l[0]=(1-(R+g))*F,l[1]=(M+w)*F,l[2]=(T-U)*F,l[3]=0,l[4]=(M-w)*V,l[5]=(1-(S+g))*V,l[6]=(y+O)*V,l[7]=0,l[8]=(T+U)*I,l[9]=(y-O)*I,l[10]=(1-(S+R))*I,l[11]=0,l[12]=t.x,l[13]=t.y,l[14]=t.z,l[15]=1,this}decompose(t,i,s){const l=this.elements;let u=lr.set(l[0],l[1],l[2]).length();const h=lr.set(l[4],l[5],l[6]).length(),d=lr.set(l[8],l[9],l[10]).length();this.determinant()<0&&(u=-u),t.x=l[12],t.y=l[13],t.z=l[14],pi.copy(this);const p=1/u,_=1/h,v=1/d;return pi.elements[0]*=p,pi.elements[1]*=p,pi.elements[2]*=p,pi.elements[4]*=_,pi.elements[5]*=_,pi.elements[6]*=_,pi.elements[8]*=v,pi.elements[9]*=v,pi.elements[10]*=v,i.setFromRotationMatrix(pi),s.x=u,s.y=h,s.z=d,this}makePerspective(t,i,s,l,u,h,d=ia){const m=this.elements,p=2*u/(i-t),_=2*u/(s-l),v=(i+t)/(i-t),S=(s+l)/(s-l);let M,T;if(d===ia)M=-(h+u)/(h-u),T=-2*h*u/(h-u);else if(d===Ac)M=-h/(h-u),T=-h*u/(h-u);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return m[0]=p,m[4]=0,m[8]=v,m[12]=0,m[1]=0,m[5]=_,m[9]=S,m[13]=0,m[2]=0,m[6]=0,m[10]=M,m[14]=T,m[3]=0,m[7]=0,m[11]=-1,m[15]=0,this}makeOrthographic(t,i,s,l,u,h,d=ia){const m=this.elements,p=1/(i-t),_=1/(s-l),v=1/(h-u),S=(i+t)*p,M=(s+l)*_;let T,R;if(d===ia)T=(h+u)*v,R=-2*v;else if(d===Ac)T=u*v,R=-1*v;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return m[0]=2*p,m[4]=0,m[8]=0,m[12]=-S,m[1]=0,m[5]=2*_,m[9]=0,m[13]=-M,m[2]=0,m[6]=0,m[10]=R,m[14]=-T,m[3]=0,m[7]=0,m[11]=0,m[15]=1,this}equals(t){const i=this.elements,s=t.elements;for(let l=0;l<16;l++)if(i[l]!==s[l])return!1;return!0}fromArray(t,i=0){for(let s=0;s<16;s++)this.elements[s]=t[s+i];return this}toArray(t=[],i=0){const s=this.elements;return t[i]=s[0],t[i+1]=s[1],t[i+2]=s[2],t[i+3]=s[3],t[i+4]=s[4],t[i+5]=s[5],t[i+6]=s[6],t[i+7]=s[7],t[i+8]=s[8],t[i+9]=s[9],t[i+10]=s[10],t[i+11]=s[11],t[i+12]=s[12],t[i+13]=s[13],t[i+14]=s[14],t[i+15]=s[15],t}}const lr=new tt,pi=new sn,Zx=new tt(0,0,0),Kx=new tt(1,1,1),za=new tt,tc=new tt,Jn=new tt,hg=new sn,dg=new Es;class ra{constructor(t=0,i=0,s=0,l=ra.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=s,this._order=l}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,s,l=this._order){return this._x=t,this._y=i,this._z=s,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,s=!0){const l=t.elements,u=l[0],h=l[4],d=l[8],m=l[1],p=l[5],_=l[9],v=l[2],S=l[6],M=l[10];switch(i){case"XYZ":this._y=Math.asin(_e(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-_,M),this._z=Math.atan2(-h,u)):(this._x=Math.atan2(S,p),this._z=0);break;case"YXZ":this._x=Math.asin(-_e(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(d,M),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-v,u),this._z=0);break;case"ZXY":this._x=Math.asin(_e(S,-1,1)),Math.abs(S)<.9999999?(this._y=Math.atan2(-v,M),this._z=Math.atan2(-h,p)):(this._y=0,this._z=Math.atan2(m,u));break;case"ZYX":this._y=Math.asin(-_e(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(S,M),this._z=Math.atan2(m,u)):(this._x=0,this._z=Math.atan2(-h,p));break;case"YZX":this._z=Math.asin(_e(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-_,p),this._y=Math.atan2(-v,u)):(this._x=0,this._y=Math.atan2(d,M));break;case"XZY":this._z=Math.asin(-_e(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(S,p),this._y=Math.atan2(d,u)):(this._x=Math.atan2(-_,M),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,s===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,s){return hg.makeRotationFromQuaternion(t),this.setFromRotationMatrix(hg,i,s)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return dg.setFromEuler(this),this.setFromQuaternion(dg,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ra.DEFAULT_ORDER="XYZ";class pv{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Qx=0;const pg=new tt,cr=new Es,Qi=new sn,ec=new tt,Ro=new tt,Jx=new tt,$x=new Es,mg=new tt(1,0,0),_g=new tt(0,1,0),gg=new tt(0,0,1),vg={type:"added"},ty={type:"removed"},ur={type:"childadded",child:null},$f={type:"childremoved",child:null};class kn extends bs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Qx++}),this.uuid=Po(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=kn.DEFAULT_UP.clone();const t=new tt,i=new ra,s=new Es,l=new tt(1,1,1);function u(){s.setFromEuler(i,!1)}function h(){i.setFromQuaternion(s,void 0,!1)}i._onChange(u),s._onChange(h),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new sn},normalMatrix:{value:new re}}),this.matrix=new sn,this.matrixWorld=new sn,this.matrixAutoUpdate=kn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=kn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new pv,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return cr.setFromAxisAngle(t,i),this.quaternion.multiply(cr),this}rotateOnWorldAxis(t,i){return cr.setFromAxisAngle(t,i),this.quaternion.premultiply(cr),this}rotateX(t){return this.rotateOnAxis(mg,t)}rotateY(t){return this.rotateOnAxis(_g,t)}rotateZ(t){return this.rotateOnAxis(gg,t)}translateOnAxis(t,i){return pg.copy(t).applyQuaternion(this.quaternion),this.position.add(pg.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(mg,t)}translateY(t){return this.translateOnAxis(_g,t)}translateZ(t){return this.translateOnAxis(gg,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Qi.copy(this.matrixWorld).invert())}lookAt(t,i,s){t.isVector3?ec.copy(t):ec.set(t,i,s);const l=this.parent;this.updateWorldMatrix(!0,!1),Ro.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Qi.lookAt(Ro,ec,this.up):Qi.lookAt(ec,Ro,this.up),this.quaternion.setFromRotationMatrix(Qi),l&&(Qi.extractRotation(l.matrixWorld),cr.setFromRotationMatrix(Qi),this.quaternion.premultiply(cr.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(vg),ur.child=t,this.dispatchEvent(ur),ur.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(ty),$f.child=t,this.dispatchEvent($f),$f.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Qi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Qi.multiply(t.parent.matrixWorld)),t.applyMatrix4(Qi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(vg),ur.child=t,this.dispatchEvent(ur),ur.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let s=0,l=this.children.length;s<l;s++){const h=this.children[s].getObjectByProperty(t,i);if(h!==void 0)return h}}getObjectsByProperty(t,i,s=[]){this[t]===i&&s.push(this);const l=this.children;for(let u=0,h=l.length;u<h;u++)l[u].getObjectsByProperty(t,i,s);return s}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ro,t,Jx),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ro,$x,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(t){t(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverseVisible(t)}traverseAncestors(t){const i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].updateMatrixWorld(t)}updateWorldMatrix(t,i){const s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let u=0,h=l.length;u<h;u++)l[u].updateWorldMatrix(!1,!0)}}toJSON(t){const i=t===void 0||typeof t=="string",s={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(d=>({...d,boundingBox:d.boundingBox?d.boundingBox.toJSON():void 0,boundingSphere:d.boundingSphere?d.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(d=>({...d})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(t),l.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function u(d,m){return d[m.uuid]===void 0&&(d[m.uuid]=m.toJSON(t)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=u(t.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const m=d.shapes;if(Array.isArray(m))for(let p=0,_=m.length;p<_;p++){const v=m[p];u(t.shapes,v)}else u(t.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(u(t.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let m=0,p=this.material.length;m<p;m++)d.push(u(t.materials,this.material[m]));l.material=d}else l.material=u(t.materials,this.material);if(this.children.length>0){l.children=[];for(let d=0;d<this.children.length;d++)l.children.push(this.children[d].toJSON(t).object)}if(this.animations.length>0){l.animations=[];for(let d=0;d<this.animations.length;d++){const m=this.animations[d];l.animations.push(u(t.animations,m))}}if(i){const d=h(t.geometries),m=h(t.materials),p=h(t.textures),_=h(t.images),v=h(t.shapes),S=h(t.skeletons),M=h(t.animations),T=h(t.nodes);d.length>0&&(s.geometries=d),m.length>0&&(s.materials=m),p.length>0&&(s.textures=p),_.length>0&&(s.images=_),v.length>0&&(s.shapes=v),S.length>0&&(s.skeletons=S),M.length>0&&(s.animations=M),T.length>0&&(s.nodes=T)}return s.object=l,s;function h(d){const m=[];for(const p in d){const _=d[p];delete _.metadata,m.push(_)}return m}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let s=0;s<t.children.length;s++){const l=t.children[s];this.add(l.clone())}return this}}kn.DEFAULT_UP=new tt(0,1,0);kn.DEFAULT_MATRIX_AUTO_UPDATE=!0;kn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const mi=new tt,Ji=new tt,th=new tt,$i=new tt,fr=new tt,hr=new tt,Sg=new tt,eh=new tt,nh=new tt,ih=new tt,ah=new $e,sh=new $e,rh=new $e;class _i{constructor(t=new tt,i=new tt,s=new tt){this.a=t,this.b=i,this.c=s}static getNormal(t,i,s,l){l.subVectors(s,i),mi.subVectors(t,i),l.cross(mi);const u=l.lengthSq();return u>0?l.multiplyScalar(1/Math.sqrt(u)):l.set(0,0,0)}static getBarycoord(t,i,s,l,u){mi.subVectors(l,i),Ji.subVectors(s,i),th.subVectors(t,i);const h=mi.dot(mi),d=mi.dot(Ji),m=mi.dot(th),p=Ji.dot(Ji),_=Ji.dot(th),v=h*p-d*d;if(v===0)return u.set(0,0,0),null;const S=1/v,M=(p*m-d*_)*S,T=(h*_-d*m)*S;return u.set(1-M-T,T,M)}static containsPoint(t,i,s,l){return this.getBarycoord(t,i,s,l,$i)===null?!1:$i.x>=0&&$i.y>=0&&$i.x+$i.y<=1}static getInterpolation(t,i,s,l,u,h,d,m){return this.getBarycoord(t,i,s,l,$i)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(u,$i.x),m.addScaledVector(h,$i.y),m.addScaledVector(d,$i.z),m)}static getInterpolatedAttribute(t,i,s,l,u,h){return ah.setScalar(0),sh.setScalar(0),rh.setScalar(0),ah.fromBufferAttribute(t,i),sh.fromBufferAttribute(t,s),rh.fromBufferAttribute(t,l),h.setScalar(0),h.addScaledVector(ah,u.x),h.addScaledVector(sh,u.y),h.addScaledVector(rh,u.z),h}static isFrontFacing(t,i,s,l){return mi.subVectors(s,i),Ji.subVectors(t,i),mi.cross(Ji).dot(l)<0}set(t,i,s){return this.a.copy(t),this.b.copy(i),this.c.copy(s),this}setFromPointsAndIndices(t,i,s,l){return this.a.copy(t[i]),this.b.copy(t[s]),this.c.copy(t[l]),this}setFromAttributeAndIndices(t,i,s,l){return this.a.fromBufferAttribute(t,i),this.b.fromBufferAttribute(t,s),this.c.fromBufferAttribute(t,l),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return mi.subVectors(this.c,this.b),Ji.subVectors(this.a,this.b),mi.cross(Ji).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return _i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,i){return _i.getBarycoord(t,this.a,this.b,this.c,i)}getInterpolation(t,i,s,l,u){return _i.getInterpolation(t,this.a,this.b,this.c,i,s,l,u)}containsPoint(t){return _i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return _i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,i){const s=this.a,l=this.b,u=this.c;let h,d;fr.subVectors(l,s),hr.subVectors(u,s),eh.subVectors(t,s);const m=fr.dot(eh),p=hr.dot(eh);if(m<=0&&p<=0)return i.copy(s);nh.subVectors(t,l);const _=fr.dot(nh),v=hr.dot(nh);if(_>=0&&v<=_)return i.copy(l);const S=m*v-_*p;if(S<=0&&m>=0&&_<=0)return h=m/(m-_),i.copy(s).addScaledVector(fr,h);ih.subVectors(t,u);const M=fr.dot(ih),T=hr.dot(ih);if(T>=0&&M<=T)return i.copy(u);const R=M*p-m*T;if(R<=0&&p>=0&&T<=0)return d=p/(p-T),i.copy(s).addScaledVector(hr,d);const y=_*T-M*v;if(y<=0&&v-_>=0&&M-T>=0)return Sg.subVectors(u,l),d=(v-_)/(v-_+(M-T)),i.copy(l).addScaledVector(Sg,d);const g=1/(y+R+S);return h=R*g,d=S*g,i.copy(s).addScaledVector(fr,h).addScaledVector(hr,d)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const mv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ia={h:0,s:0,l:0},nc={h:0,s:0,l:0};function oh(o,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?o+(t-o)*6*i:i<1/2?t:i<2/3?o+(t-o)*6*(2/3-i):o}class Le{constructor(t,i,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,i,s)}set(t,i,s){if(i===void 0&&s===void 0){const l=t;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(t,i,s);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,i=li){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Ae.colorSpaceToWorking(this,i),this}setRGB(t,i,s,l=Ae.workingColorSpace){return this.r=t,this.g=i,this.b=s,Ae.colorSpaceToWorking(this,l),this}setHSL(t,i,s,l=Ae.workingColorSpace){if(t=zx(t,1),i=_e(i,0,1),s=_e(s,0,1),i===0)this.r=this.g=this.b=s;else{const u=s<=.5?s*(1+i):s+i-s*i,h=2*s-u;this.r=oh(h,u,t+1/3),this.g=oh(h,u,t),this.b=oh(h,u,t-1/3)}return Ae.colorSpaceToWorking(this,l),this}setStyle(t,i=li){function s(u){u!==void 0&&parseFloat(u)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(t)){let u;const h=l[1],d=l[2];switch(h){case"rgb":case"rgba":if(u=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(u[4]),this.setRGB(Math.min(255,parseInt(u[1],10))/255,Math.min(255,parseInt(u[2],10))/255,Math.min(255,parseInt(u[3],10))/255,i);if(u=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(u[4]),this.setRGB(Math.min(100,parseInt(u[1],10))/100,Math.min(100,parseInt(u[2],10))/100,Math.min(100,parseInt(u[3],10))/100,i);break;case"hsl":case"hsla":if(u=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(u[4]),this.setHSL(parseFloat(u[1])/360,parseFloat(u[2])/100,parseFloat(u[3])/100,i);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(t)){const u=l[1],h=u.length;if(h===3)return this.setRGB(parseInt(u.charAt(0),16)/15,parseInt(u.charAt(1),16)/15,parseInt(u.charAt(2),16)/15,i);if(h===6)return this.setHex(parseInt(u,16),i);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,i);return this}setColorName(t,i=li){const s=mv[t.toLowerCase()];return s!==void 0?this.setHex(s,i):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=aa(t.r),this.g=aa(t.g),this.b=aa(t.b),this}copyLinearToSRGB(t){return this.r=Mr(t.r),this.g=Mr(t.g),this.b=Mr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=li){return Ae.workingToColorSpace(Dn.copy(this),t),Math.round(_e(Dn.r*255,0,255))*65536+Math.round(_e(Dn.g*255,0,255))*256+Math.round(_e(Dn.b*255,0,255))}getHexString(t=li){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,i=Ae.workingColorSpace){Ae.workingToColorSpace(Dn.copy(this),i);const s=Dn.r,l=Dn.g,u=Dn.b,h=Math.max(s,l,u),d=Math.min(s,l,u);let m,p;const _=(d+h)/2;if(d===h)m=0,p=0;else{const v=h-d;switch(p=_<=.5?v/(h+d):v/(2-h-d),h){case s:m=(l-u)/v+(l<u?6:0);break;case l:m=(u-s)/v+2;break;case u:m=(s-l)/v+4;break}m/=6}return t.h=m,t.s=p,t.l=_,t}getRGB(t,i=Ae.workingColorSpace){return Ae.workingToColorSpace(Dn.copy(this),i),t.r=Dn.r,t.g=Dn.g,t.b=Dn.b,t}getStyle(t=li){Ae.workingToColorSpace(Dn.copy(this),t);const i=Dn.r,s=Dn.g,l=Dn.b;return t!==li?`color(${t} ${i.toFixed(3)} ${s.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(s*255)},${Math.round(l*255)})`}offsetHSL(t,i,s){return this.getHSL(Ia),this.setHSL(Ia.h+t,Ia.s+i,Ia.l+s)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,i){return this.r=t.r+i.r,this.g=t.g+i.g,this.b=t.b+i.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,i){return this.r+=(t.r-this.r)*i,this.g+=(t.g-this.g)*i,this.b+=(t.b-this.b)*i,this}lerpColors(t,i,s){return this.r=t.r+(i.r-t.r)*s,this.g=t.g+(i.g-t.g)*s,this.b=t.b+(i.b-t.b)*s,this}lerpHSL(t,i){this.getHSL(Ia),t.getHSL(nc);const s=kf(Ia.h,nc.h,i),l=kf(Ia.s,nc.s,i),u=kf(Ia.l,nc.l,i);return this.setHSL(s,l,u),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const i=this.r,s=this.g,l=this.b,u=t.elements;return this.r=u[0]*i+u[3]*s+u[6]*l,this.g=u[1]*i+u[4]*s+u[7]*l,this.b=u[2]*i+u[5]*s+u[8]*l,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,i=0){return this.r=t[i],this.g=t[i+1],this.b=t[i+2],this}toArray(t=[],i=0){return t[i]=this.r,t[i+1]=this.g,t[i+2]=this.b,t}fromBufferAttribute(t,i){return this.r=t.getX(i),this.g=t.getY(i),this.b=t.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Dn=new Le;Le.NAMES=mv;let ey=0;class wc extends bs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ey++}),this.uuid=Po(),this.name="",this.type="Material",this.blending=xr,this.side=ka,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Sh,this.blendDst=xh,this.blendEquation=vs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Le(0,0,0),this.blendAlpha=0,this.depthFunc=Er,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=sg,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ir,this.stencilZFail=ir,this.stencilZPass=ir,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const i in t){const s=t[i];if(s===void 0){console.warn(`THREE.Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(s):l&&l.isVector3&&s&&s.isVector3?l.copy(s):this[i]=s}}toJSON(t){const i=t===void 0||typeof t=="string";i&&(t={textures:{},images:{}});const s={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(t).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(t).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(t).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(t).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(t).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==xr&&(s.blending=this.blending),this.side!==ka&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==Sh&&(s.blendSrc=this.blendSrc),this.blendDst!==xh&&(s.blendDst=this.blendDst),this.blendEquation!==vs&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==Er&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==sg&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ir&&(s.stencilFail=this.stencilFail),this.stencilZFail!==ir&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==ir&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function l(u){const h=[];for(const d in u){const m=u[d];delete m.metadata,h.push(m)}return h}if(i){const u=l(t.textures),h=l(t.images);u.length>0&&(s.textures=u),h.length>0&&(s.images=h)}return s}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const i=t.clippingPlanes;let s=null;if(i!==null){const l=i.length;s=new Array(l);for(let u=0;u!==l;++u)s[u]=i[u].clone()}return this.clippingPlanes=s,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class Dc extends wc{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Le(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ra,this.combine=tv,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const an=new tt,ic=new he;let ny=0;class Ci{constructor(t,i,s=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:ny++}),this.name="",this.array=t,this.itemSize=i,this.count=t!==void 0?t.length/i:0,this.normalized=s,this.usage=rg,this.updateRanges=[],this.gpuType=na,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,i,s){t*=this.itemSize,s*=i.itemSize;for(let l=0,u=this.itemSize;l<u;l++)this.array[t+l]=i.array[s+l];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let i=0,s=this.count;i<s;i++)ic.fromBufferAttribute(this,i),ic.applyMatrix3(t),this.setXY(i,ic.x,ic.y);else if(this.itemSize===3)for(let i=0,s=this.count;i<s;i++)an.fromBufferAttribute(this,i),an.applyMatrix3(t),this.setXYZ(i,an.x,an.y,an.z);return this}applyMatrix4(t){for(let i=0,s=this.count;i<s;i++)an.fromBufferAttribute(this,i),an.applyMatrix4(t),this.setXYZ(i,an.x,an.y,an.z);return this}applyNormalMatrix(t){for(let i=0,s=this.count;i<s;i++)an.fromBufferAttribute(this,i),an.applyNormalMatrix(t),this.setXYZ(i,an.x,an.y,an.z);return this}transformDirection(t){for(let i=0,s=this.count;i<s;i++)an.fromBufferAttribute(this,i),an.transformDirection(t),this.setXYZ(i,an.x,an.y,an.z);return this}set(t,i=0){return this.array.set(t,i),this}getComponent(t,i){let s=this.array[t*this.itemSize+i];return this.normalized&&(s=To(s,this.array)),s}setComponent(t,i,s){return this.normalized&&(s=Bn(s,this.array)),this.array[t*this.itemSize+i]=s,this}getX(t){let i=this.array[t*this.itemSize];return this.normalized&&(i=To(i,this.array)),i}setX(t,i){return this.normalized&&(i=Bn(i,this.array)),this.array[t*this.itemSize]=i,this}getY(t){let i=this.array[t*this.itemSize+1];return this.normalized&&(i=To(i,this.array)),i}setY(t,i){return this.normalized&&(i=Bn(i,this.array)),this.array[t*this.itemSize+1]=i,this}getZ(t){let i=this.array[t*this.itemSize+2];return this.normalized&&(i=To(i,this.array)),i}setZ(t,i){return this.normalized&&(i=Bn(i,this.array)),this.array[t*this.itemSize+2]=i,this}getW(t){let i=this.array[t*this.itemSize+3];return this.normalized&&(i=To(i,this.array)),i}setW(t,i){return this.normalized&&(i=Bn(i,this.array)),this.array[t*this.itemSize+3]=i,this}setXY(t,i,s){return t*=this.itemSize,this.normalized&&(i=Bn(i,this.array),s=Bn(s,this.array)),this.array[t+0]=i,this.array[t+1]=s,this}setXYZ(t,i,s,l){return t*=this.itemSize,this.normalized&&(i=Bn(i,this.array),s=Bn(s,this.array),l=Bn(l,this.array)),this.array[t+0]=i,this.array[t+1]=s,this.array[t+2]=l,this}setXYZW(t,i,s,l,u){return t*=this.itemSize,this.normalized&&(i=Bn(i,this.array),s=Bn(s,this.array),l=Bn(l,this.array),u=Bn(u,this.array)),this.array[t+0]=i,this.array[t+1]=s,this.array[t+2]=l,this.array[t+3]=u,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==rg&&(t.usage=this.usage),t}}class _v extends Ci{constructor(t,i,s){super(new Uint16Array(t),i,s)}}class gv extends Ci{constructor(t,i,s){super(new Uint32Array(t),i,s)}}class wi extends Ci{constructor(t,i,s){super(new Float32Array(t),i,s)}}let iy=0;const oi=new sn,lh=new kn,dr=new tt,$n=new zo,Co=new zo,vn=new tt;class Wa extends bs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:iy++}),this.uuid=Po(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(fv(t)?gv:_v)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,i){return this.attributes[t]=i,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,i,s=0){this.groups.push({start:t,count:i,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(t,i){this.drawRange.start=t,this.drawRange.count=i}applyMatrix4(t){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(t),i.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const u=new re().getNormalMatrix(t);s.applyNormalMatrix(u),s.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(t),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return oi.makeRotationFromQuaternion(t),this.applyMatrix4(oi),this}rotateX(t){return oi.makeRotationX(t),this.applyMatrix4(oi),this}rotateY(t){return oi.makeRotationY(t),this.applyMatrix4(oi),this}rotateZ(t){return oi.makeRotationZ(t),this.applyMatrix4(oi),this}translate(t,i,s){return oi.makeTranslation(t,i,s),this.applyMatrix4(oi),this}scale(t,i,s){return oi.makeScale(t,i,s),this.applyMatrix4(oi),this}lookAt(t){return lh.lookAt(t),lh.updateMatrix(),this.applyMatrix4(lh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(dr).negate(),this.translate(dr.x,dr.y,dr.z),this}setFromPoints(t){const i=this.getAttribute("position");if(i===void 0){const s=[];for(let l=0,u=t.length;l<u;l++){const h=t[l];s.push(h.x,h.y,h.z||0)}this.setAttribute("position",new wi(s,3))}else{const s=Math.min(t.length,i.count);for(let l=0;l<s;l++){const u=t[l];i.setXYZ(l,u.x,u.y,u.z||0)}t.length>i.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new zo);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new tt(-1/0,-1/0,-1/0),new tt(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),i)for(let s=0,l=i.length;s<l;s++){const u=i[s];$n.setFromBufferAttribute(u),this.morphTargetsRelative?(vn.addVectors(this.boundingBox.min,$n.min),this.boundingBox.expandByPoint(vn),vn.addVectors(this.boundingBox.max,$n.max),this.boundingBox.expandByPoint(vn)):(this.boundingBox.expandByPoint($n.min),this.boundingBox.expandByPoint($n.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new md);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new tt,1/0);return}if(t){const s=this.boundingSphere.center;if($n.setFromBufferAttribute(t),i)for(let u=0,h=i.length;u<h;u++){const d=i[u];Co.setFromBufferAttribute(d),this.morphTargetsRelative?(vn.addVectors($n.min,Co.min),$n.expandByPoint(vn),vn.addVectors($n.max,Co.max),$n.expandByPoint(vn)):($n.expandByPoint(Co.min),$n.expandByPoint(Co.max))}$n.getCenter(s);let l=0;for(let u=0,h=t.count;u<h;u++)vn.fromBufferAttribute(t,u),l=Math.max(l,s.distanceToSquared(vn));if(i)for(let u=0,h=i.length;u<h;u++){const d=i[u],m=this.morphTargetsRelative;for(let p=0,_=d.count;p<_;p++)vn.fromBufferAttribute(d,p),m&&(dr.fromBufferAttribute(t,p),vn.add(dr)),l=Math.max(l,s.distanceToSquared(vn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,i=this.attributes;if(t===null||i.position===void 0||i.normal===void 0||i.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=i.position,l=i.normal,u=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ci(new Float32Array(4*s.count),4));const h=this.getAttribute("tangent"),d=[],m=[];for(let q=0;q<s.count;q++)d[q]=new tt,m[q]=new tt;const p=new tt,_=new tt,v=new tt,S=new he,M=new he,T=new he,R=new tt,y=new tt;function g(q,D,C){p.fromBufferAttribute(s,q),_.fromBufferAttribute(s,D),v.fromBufferAttribute(s,C),S.fromBufferAttribute(u,q),M.fromBufferAttribute(u,D),T.fromBufferAttribute(u,C),_.sub(p),v.sub(p),M.sub(S),T.sub(S);const G=1/(M.x*T.y-T.x*M.y);isFinite(G)&&(R.copy(_).multiplyScalar(T.y).addScaledVector(v,-M.y).multiplyScalar(G),y.copy(v).multiplyScalar(M.x).addScaledVector(_,-T.x).multiplyScalar(G),d[q].add(R),d[D].add(R),d[C].add(R),m[q].add(y),m[D].add(y),m[C].add(y))}let O=this.groups;O.length===0&&(O=[{start:0,count:t.count}]);for(let q=0,D=O.length;q<D;++q){const C=O[q],G=C.start,ot=C.count;for(let rt=G,pt=G+ot;rt<pt;rt+=3)g(t.getX(rt+0),t.getX(rt+1),t.getX(rt+2))}const U=new tt,w=new tt,F=new tt,V=new tt;function I(q){F.fromBufferAttribute(l,q),V.copy(F);const D=d[q];U.copy(D),U.sub(F.multiplyScalar(F.dot(D))).normalize(),w.crossVectors(V,D);const G=w.dot(m[q])<0?-1:1;h.setXYZW(q,U.x,U.y,U.z,G)}for(let q=0,D=O.length;q<D;++q){const C=O[q],G=C.start,ot=C.count;for(let rt=G,pt=G+ot;rt<pt;rt+=3)I(t.getX(rt+0)),I(t.getX(rt+1)),I(t.getX(rt+2))}}computeVertexNormals(){const t=this.index,i=this.getAttribute("position");if(i!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new Ci(new Float32Array(i.count*3),3),this.setAttribute("normal",s);else for(let S=0,M=s.count;S<M;S++)s.setXYZ(S,0,0,0);const l=new tt,u=new tt,h=new tt,d=new tt,m=new tt,p=new tt,_=new tt,v=new tt;if(t)for(let S=0,M=t.count;S<M;S+=3){const T=t.getX(S+0),R=t.getX(S+1),y=t.getX(S+2);l.fromBufferAttribute(i,T),u.fromBufferAttribute(i,R),h.fromBufferAttribute(i,y),_.subVectors(h,u),v.subVectors(l,u),_.cross(v),d.fromBufferAttribute(s,T),m.fromBufferAttribute(s,R),p.fromBufferAttribute(s,y),d.add(_),m.add(_),p.add(_),s.setXYZ(T,d.x,d.y,d.z),s.setXYZ(R,m.x,m.y,m.z),s.setXYZ(y,p.x,p.y,p.z)}else for(let S=0,M=i.count;S<M;S+=3)l.fromBufferAttribute(i,S+0),u.fromBufferAttribute(i,S+1),h.fromBufferAttribute(i,S+2),_.subVectors(h,u),v.subVectors(l,u),_.cross(v),s.setXYZ(S+0,_.x,_.y,_.z),s.setXYZ(S+1,_.x,_.y,_.z),s.setXYZ(S+2,_.x,_.y,_.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let i=0,s=t.count;i<s;i++)vn.fromBufferAttribute(t,i),vn.normalize(),t.setXYZ(i,vn.x,vn.y,vn.z)}toNonIndexed(){function t(d,m){const p=d.array,_=d.itemSize,v=d.normalized,S=new p.constructor(m.length*_);let M=0,T=0;for(let R=0,y=m.length;R<y;R++){d.isInterleavedBufferAttribute?M=m[R]*d.data.stride+d.offset:M=m[R]*_;for(let g=0;g<_;g++)S[T++]=p[M++]}return new Ci(S,_,v)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new Wa,s=this.index.array,l=this.attributes;for(const d in l){const m=l[d],p=t(m,s);i.setAttribute(d,p)}const u=this.morphAttributes;for(const d in u){const m=[],p=u[d];for(let _=0,v=p.length;_<v;_++){const S=p[_],M=t(S,s);m.push(M)}i.morphAttributes[d]=m}i.morphTargetsRelative=this.morphTargetsRelative;const h=this.groups;for(let d=0,m=h.length;d<m;d++){const p=h[d];i.addGroup(p.start,p.count,p.materialIndex)}return i}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(t[p]=m[p]);return t}t.data={attributes:{}};const i=this.index;i!==null&&(t.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const s=this.attributes;for(const m in s){const p=s[m];t.data.attributes[m]=p.toJSON(t.data)}const l={};let u=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],_=[];for(let v=0,S=p.length;v<S;v++){const M=p[v];_.push(M.toJSON(t.data))}_.length>0&&(l[m]=_,u=!0)}u&&(t.data.morphAttributes=l,t.data.morphTargetsRelative=this.morphTargetsRelative);const h=this.groups;h.length>0&&(t.data.groups=JSON.parse(JSON.stringify(h)));const d=this.boundingSphere;return d!==null&&(t.data.boundingSphere=d.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=t.name;const s=t.index;s!==null&&this.setIndex(s.clone());const l=t.attributes;for(const p in l){const _=l[p];this.setAttribute(p,_.clone(i))}const u=t.morphAttributes;for(const p in u){const _=[],v=u[p];for(let S=0,M=v.length;S<M;S++)_.push(v[S].clone(i));this.morphAttributes[p]=_}this.morphTargetsRelative=t.morphTargetsRelative;const h=t.groups;for(let p=0,_=h.length;p<_;p++){const v=h[p];this.addGroup(v.start,v.count,v.materialIndex)}const d=t.boundingBox;d!==null&&(this.boundingBox=d.clone());const m=t.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const xg=new sn,ds=new dv,ac=new md,yg=new tt,sc=new tt,rc=new tt,oc=new tt,ch=new tt,lc=new tt,Mg=new tt,cc=new tt;class vi extends kn{constructor(t=new Wa,i=new Dc){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,h=l.length;u<h;u++){const d=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=u}}}}getVertexPosition(t,i){const s=this.geometry,l=s.attributes.position,u=s.morphAttributes.position,h=s.morphTargetsRelative;i.fromBufferAttribute(l,t);const d=this.morphTargetInfluences;if(u&&d){lc.set(0,0,0);for(let m=0,p=u.length;m<p;m++){const _=d[m],v=u[m];_!==0&&(ch.fromBufferAttribute(v,t),h?lc.addScaledVector(ch,_):lc.addScaledVector(ch.sub(i),_))}i.add(lc)}return i}raycast(t,i){const s=this.geometry,l=this.material,u=this.matrixWorld;l!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),ac.copy(s.boundingSphere),ac.applyMatrix4(u),ds.copy(t.ray).recast(t.near),!(ac.containsPoint(ds.origin)===!1&&(ds.intersectSphere(ac,yg)===null||ds.origin.distanceToSquared(yg)>(t.far-t.near)**2))&&(xg.copy(u).invert(),ds.copy(t.ray).applyMatrix4(xg),!(s.boundingBox!==null&&ds.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(t,i,ds)))}_computeIntersections(t,i,s){let l;const u=this.geometry,h=this.material,d=u.index,m=u.attributes.position,p=u.attributes.uv,_=u.attributes.uv1,v=u.attributes.normal,S=u.groups,M=u.drawRange;if(d!==null)if(Array.isArray(h))for(let T=0,R=S.length;T<R;T++){const y=S[T],g=h[y.materialIndex],O=Math.max(y.start,M.start),U=Math.min(d.count,Math.min(y.start+y.count,M.start+M.count));for(let w=O,F=U;w<F;w+=3){const V=d.getX(w),I=d.getX(w+1),q=d.getX(w+2);l=uc(this,g,t,s,p,_,v,V,I,q),l&&(l.faceIndex=Math.floor(w/3),l.face.materialIndex=y.materialIndex,i.push(l))}}else{const T=Math.max(0,M.start),R=Math.min(d.count,M.start+M.count);for(let y=T,g=R;y<g;y+=3){const O=d.getX(y),U=d.getX(y+1),w=d.getX(y+2);l=uc(this,h,t,s,p,_,v,O,U,w),l&&(l.faceIndex=Math.floor(y/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(h))for(let T=0,R=S.length;T<R;T++){const y=S[T],g=h[y.materialIndex],O=Math.max(y.start,M.start),U=Math.min(m.count,Math.min(y.start+y.count,M.start+M.count));for(let w=O,F=U;w<F;w+=3){const V=w,I=w+1,q=w+2;l=uc(this,g,t,s,p,_,v,V,I,q),l&&(l.faceIndex=Math.floor(w/3),l.face.materialIndex=y.materialIndex,i.push(l))}}else{const T=Math.max(0,M.start),R=Math.min(m.count,M.start+M.count);for(let y=T,g=R;y<g;y+=3){const O=y,U=y+1,w=y+2;l=uc(this,h,t,s,p,_,v,O,U,w),l&&(l.faceIndex=Math.floor(y/3),i.push(l))}}}}function ay(o,t,i,s,l,u,h,d){let m;if(t.side===Gn?m=s.intersectTriangle(h,u,l,!0,d):m=s.intersectTriangle(l,u,h,t.side===ka,d),m===null)return null;cc.copy(d),cc.applyMatrix4(o.matrixWorld);const p=i.ray.origin.distanceTo(cc);return p<i.near||p>i.far?null:{distance:p,point:cc.clone(),object:o}}function uc(o,t,i,s,l,u,h,d,m,p){o.getVertexPosition(d,sc),o.getVertexPosition(m,rc),o.getVertexPosition(p,oc);const _=ay(o,t,i,s,sc,rc,oc,Mg);if(_){const v=new tt;_i.getBarycoord(Mg,sc,rc,oc,v),l&&(_.uv=_i.getInterpolatedAttribute(l,d,m,p,v,new he)),u&&(_.uv1=_i.getInterpolatedAttribute(u,d,m,p,v,new he)),h&&(_.normal=_i.getInterpolatedAttribute(h,d,m,p,v,new tt),_.normal.dot(s.direction)>0&&_.normal.multiplyScalar(-1));const S={a:d,b:m,c:p,normal:new tt,materialIndex:0};_i.getNormal(sc,rc,oc,S.normal),_.face=S,_.barycoord=v}return _}class Io extends Wa{constructor(t=1,i=1,s=1,l=1,u=1,h=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:i,depth:s,widthSegments:l,heightSegments:u,depthSegments:h};const d=this;l=Math.floor(l),u=Math.floor(u),h=Math.floor(h);const m=[],p=[],_=[],v=[];let S=0,M=0;T("z","y","x",-1,-1,s,i,t,h,u,0),T("z","y","x",1,-1,s,i,-t,h,u,1),T("x","z","y",1,1,t,s,i,l,h,2),T("x","z","y",1,-1,t,s,-i,l,h,3),T("x","y","z",1,-1,t,i,s,l,u,4),T("x","y","z",-1,-1,t,i,-s,l,u,5),this.setIndex(m),this.setAttribute("position",new wi(p,3)),this.setAttribute("normal",new wi(_,3)),this.setAttribute("uv",new wi(v,2));function T(R,y,g,O,U,w,F,V,I,q,D){const C=w/I,G=F/q,ot=w/2,rt=F/2,pt=V/2,ut=I+1,z=q+1;let Z=0,Y=0;const Mt=new tt;for(let L=0;L<z;L++){const $=L*G-rt;for(let vt=0;vt<ut;vt++){const xt=vt*C-ot;Mt[R]=xt*O,Mt[y]=$*U,Mt[g]=pt,p.push(Mt.x,Mt.y,Mt.z),Mt[R]=0,Mt[y]=0,Mt[g]=V>0?1:-1,_.push(Mt.x,Mt.y,Mt.z),v.push(vt/I),v.push(1-L/q),Z+=1}}for(let L=0;L<q;L++)for(let $=0;$<I;$++){const vt=S+$+ut*L,xt=S+$+ut*(L+1),Q=S+($+1)+ut*(L+1),mt=S+($+1)+ut*L;m.push(vt,xt,mt),m.push(xt,Q,mt),Y+=6}d.addGroup(M,Y,D),M+=Y,S+=Z}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Io(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Rr(o){const t={};for(const i in o){t[i]={};for(const s in o[i]){const l=o[i][s];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][s]=null):t[i][s]=l.clone():Array.isArray(l)?t[i][s]=l.slice():t[i][s]=l}}return t}function Ln(o){const t={};for(let i=0;i<o.length;i++){const s=Rr(o[i]);for(const l in s)t[l]=s[l]}return t}function sy(o){const t=[];for(let i=0;i<o.length;i++)t.push(o[i].clone());return t}function vv(o){const t=o.getRenderTarget();return t===null?o.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Ae.workingColorSpace}const ry={clone:Rr,merge:Ln};var oy=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ly=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Xa extends wc{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=oy,this.fragmentShader=ly,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Rr(t.uniforms),this.uniformsGroups=sy(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const i=super.toJSON(t);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const h=this.uniforms[l].value;h&&h.isTexture?i.uniforms[l]={type:"t",value:h.toJSON(t).uuid}:h&&h.isColor?i.uniforms[l]={type:"c",value:h.getHex()}:h&&h.isVector2?i.uniforms[l]={type:"v2",value:h.toArray()}:h&&h.isVector3?i.uniforms[l]={type:"v3",value:h.toArray()}:h&&h.isVector4?i.uniforms[l]={type:"v4",value:h.toArray()}:h&&h.isMatrix3?i.uniforms[l]={type:"m3",value:h.toArray()}:h&&h.isMatrix4?i.uniforms[l]={type:"m4",value:h.toArray()}:i.uniforms[l]={value:h}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const s={};for(const l in this.extensions)this.extensions[l]===!0&&(s[l]=!0);return Object.keys(s).length>0&&(i.extensions=s),i}}class Sv extends kn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new sn,this.projectionMatrix=new sn,this.projectionMatrixInverse=new sn,this.coordinateSystem=ia}copy(t,i){return super.copy(t,i),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,i){super.updateWorldMatrix(t,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ba=new tt,Eg=new he,Tg=new he;class ci extends Sv{constructor(t=50,i=1,s=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=s,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const i=.5*this.getFilmHeight()/t;this.fov=ad*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Ec*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return ad*2*Math.atan(Math.tan(Ec*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,i,s){Ba.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ba.x,Ba.y).multiplyScalar(-t/Ba.z),Ba.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(Ba.x,Ba.y).multiplyScalar(-t/Ba.z)}getViewSize(t,i){return this.getViewBounds(t,Eg,Tg),i.subVectors(Tg,Eg)}setViewOffset(t,i,s,l,u,h){this.aspect=t/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=u,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let i=t*Math.tan(Ec*.5*this.fov)/this.zoom,s=2*i,l=this.aspect*s,u=-.5*l;const h=this.view;if(this.view!==null&&this.view.enabled){const m=h.fullWidth,p=h.fullHeight;u+=h.offsetX*l/m,i-=h.offsetY*s/p,l*=h.width/m,s*=h.height/p}const d=this.filmOffset;d!==0&&(u+=t*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(u,u+l,i,i-s,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const pr=-90,mr=1;class cy extends kn{constructor(t,i,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new ci(pr,mr,t,i);l.layers=this.layers,this.add(l);const u=new ci(pr,mr,t,i);u.layers=this.layers,this.add(u);const h=new ci(pr,mr,t,i);h.layers=this.layers,this.add(h);const d=new ci(pr,mr,t,i);d.layers=this.layers,this.add(d);const m=new ci(pr,mr,t,i);m.layers=this.layers,this.add(m);const p=new ci(pr,mr,t,i);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const t=this.coordinateSystem,i=this.children.concat(),[s,l,u,h,d,m]=i;for(const p of i)this.remove(p);if(t===ia)s.up.set(0,1,0),s.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),u.up.set(0,0,-1),u.lookAt(0,1,0),h.up.set(0,0,1),h.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(t===Ac)s.up.set(0,-1,0),s.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),u.up.set(0,0,1),u.lookAt(0,1,0),h.up.set(0,0,-1),h.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const p of i)this.add(p),p.updateMatrixWorld()}update(t,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:l}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[u,h,d,m,p,_]=this.children,v=t.getRenderTarget(),S=t.getActiveCubeFace(),M=t.getActiveMipmapLevel(),T=t.xr.enabled;t.xr.enabled=!1;const R=s.texture.generateMipmaps;s.texture.generateMipmaps=!1,t.setRenderTarget(s,0,l),t.render(i,u),t.setRenderTarget(s,1,l),t.render(i,h),t.setRenderTarget(s,2,l),t.render(i,d),t.setRenderTarget(s,3,l),t.render(i,m),t.setRenderTarget(s,4,l),t.render(i,p),s.texture.generateMipmaps=R,t.setRenderTarget(s,5,l),t.render(i,_),t.setRenderTarget(v,S,M),t.xr.enabled=T,s.texture.needsPMREMUpdate=!0}}class xv extends Vn{constructor(t=[],i=Tr,s,l,u,h,d,m,p,_){super(t,i,s,l,u,h,d,m,p,_),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class uy extends Ts{constructor(t=1,i={}){super(t,t,i),this.isWebGLCubeRenderTarget=!0;const s={width:t,height:t,depth:1},l=[s,s,s,s,s,s];this.texture=new xv(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},l=new Io(5,5,5),u=new Xa({name:"CubemapFromEquirect",uniforms:Rr(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:Gn,blending:Ga});u.uniforms.tEquirect.value=i;const h=new vi(l,u),d=i.minFilter;return i.minFilter===ys&&(i.minFilter=Ri),new cy(1,10,this).update(t,h),i.minFilter=d,h.geometry.dispose(),h.material.dispose(),this}clear(t,i=!0,s=!0,l=!0){const u=t.getRenderTarget();for(let h=0;h<6;h++)t.setRenderTarget(this,h),t.clear(i,s,l);t.setRenderTarget(u)}}class fc extends kn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const fy={type:"move"};class uh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new fc,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new fc,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new tt,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new tt),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new fc,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new tt,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new tt),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const i=this._hand;if(i)for(const s of t.hand.values())this._getHandJoint(i,s)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,i,s){let l=null,u=null,h=null;const d=this._targetRay,m=this._grip,p=this._hand;if(t&&i.session.visibilityState!=="visible-blurred"){if(p&&t.hand){h=!0;for(const R of t.hand.values()){const y=i.getJointPose(R,s),g=this._getHandJoint(p,R);y!==null&&(g.matrix.fromArray(y.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=y.radius),g.visible=y!==null}const _=p.joints["index-finger-tip"],v=p.joints["thumb-tip"],S=_.position.distanceTo(v.position),M=.02,T=.005;p.inputState.pinching&&S>M+T?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!p.inputState.pinching&&S<=M-T&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else m!==null&&t.gripSpace&&(u=i.getPose(t.gripSpace,s),u!==null&&(m.matrix.fromArray(u.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,u.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(u.linearVelocity)):m.hasLinearVelocity=!1,u.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(u.angularVelocity)):m.hasAngularVelocity=!1));d!==null&&(l=i.getPose(t.targetRaySpace,s),l===null&&u!==null&&(l=u),l!==null&&(d.matrix.fromArray(l.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,l.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(l.linearVelocity)):d.hasLinearVelocity=!1,l.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(l.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(fy)))}return d!==null&&(d.visible=l!==null),m!==null&&(m.visible=u!==null),p!==null&&(p.visible=h!==null),this}_getHandJoint(t,i){if(t.joints[i.jointName]===void 0){const s=new fc;s.matrixAutoUpdate=!1,s.visible=!1,t.joints[i.jointName]=s,t.add(s)}return t.joints[i.jointName]}}class hy extends kn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ra,this.environmentIntensity=1,this.environmentRotation=new ra,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,i){return super.copy(t,i),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const i=super.toJSON(t);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}const fh=new tt,dy=new tt,py=new re;class Fa{constructor(t=new tt(1,0,0),i=0){this.isPlane=!0,this.normal=t,this.constant=i}set(t,i){return this.normal.copy(t),this.constant=i,this}setComponents(t,i,s,l){return this.normal.set(t,i,s),this.constant=l,this}setFromNormalAndCoplanarPoint(t,i){return this.normal.copy(t),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(t,i,s){const l=fh.subVectors(s,i).cross(dy.subVectors(t,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,i){return i.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,i){const s=t.delta(fh),l=this.normal.dot(s);if(l===0)return this.distanceToPoint(t.start)===0?i.copy(t.start):null;const u=-(t.start.dot(this.normal)+this.constant)/l;return u<0||u>1?null:i.copy(t.start).addScaledVector(s,u)}intersectsLine(t){const i=this.distanceToPoint(t.start),s=this.distanceToPoint(t.end);return i<0&&s>0||s<0&&i>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,i){const s=i||py.getNormalMatrix(t),l=this.coplanarPoint(fh).applyMatrix4(t),u=this.normal.applyMatrix3(s).normalize();return this.constant=-l.dot(u),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ps=new md,hc=new tt;class yv{constructor(t=new Fa,i=new Fa,s=new Fa,l=new Fa,u=new Fa,h=new Fa){this.planes=[t,i,s,l,u,h]}set(t,i,s,l,u,h){const d=this.planes;return d[0].copy(t),d[1].copy(i),d[2].copy(s),d[3].copy(l),d[4].copy(u),d[5].copy(h),this}copy(t){const i=this.planes;for(let s=0;s<6;s++)i[s].copy(t.planes[s]);return this}setFromProjectionMatrix(t,i=ia){const s=this.planes,l=t.elements,u=l[0],h=l[1],d=l[2],m=l[3],p=l[4],_=l[5],v=l[6],S=l[7],M=l[8],T=l[9],R=l[10],y=l[11],g=l[12],O=l[13],U=l[14],w=l[15];if(s[0].setComponents(m-u,S-p,y-M,w-g).normalize(),s[1].setComponents(m+u,S+p,y+M,w+g).normalize(),s[2].setComponents(m+h,S+_,y+T,w+O).normalize(),s[3].setComponents(m-h,S-_,y-T,w-O).normalize(),s[4].setComponents(m-d,S-v,y-R,w-U).normalize(),i===ia)s[5].setComponents(m+d,S+v,y+R,w+U).normalize();else if(i===Ac)s[5].setComponents(d,v,R,U).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ps.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const i=t.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),ps.copy(i.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ps)}intersectsSprite(t){return ps.center.set(0,0,0),ps.radius=.7071067811865476,ps.applyMatrix4(t.matrixWorld),this.intersectsSphere(ps)}intersectsSphere(t){const i=this.planes,s=t.center,l=-t.radius;for(let u=0;u<6;u++)if(i[u].distanceToPoint(s)<l)return!1;return!0}intersectsBox(t){const i=this.planes;for(let s=0;s<6;s++){const l=i[s];if(hc.x=l.normal.x>0?t.max.x:t.min.x,hc.y=l.normal.y>0?t.max.y:t.min.y,hc.z=l.normal.z>0?t.max.z:t.min.z,l.distanceToPoint(hc)<0)return!1}return!0}containsPoint(t){const i=this.planes;for(let s=0;s<6;s++)if(i[s].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Mv extends Vn{constructor(t,i,s=Ms,l,u,h,d=Si,m=Si,p,_=Lo,v=1){if(_!==Lo&&_!==No)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const S={width:t,height:i,depth:v};super(S,l,u,h,d,m,_,s,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new pd(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const i=super.toJSON(t);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class Uc extends Wa{constructor(t=1,i=1,s=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:i,widthSegments:s,heightSegments:l};const u=t/2,h=i/2,d=Math.floor(s),m=Math.floor(l),p=d+1,_=m+1,v=t/d,S=i/m,M=[],T=[],R=[],y=[];for(let g=0;g<_;g++){const O=g*S-h;for(let U=0;U<p;U++){const w=U*v-u;T.push(w,-O,0),R.push(0,0,1),y.push(U/d),y.push(1-g/m)}}for(let g=0;g<m;g++)for(let O=0;O<d;O++){const U=O+p*g,w=O+p*(g+1),F=O+1+p*(g+1),V=O+1+p*g;M.push(U,w,V),M.push(w,F,V)}this.setIndex(M),this.setAttribute("position",new wi(T,3)),this.setAttribute("normal",new wi(R,3)),this.setAttribute("uv",new wi(y,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Uc(t.width,t.height,t.widthSegments,t.heightSegments)}}class Lc extends Wa{constructor(t=1,i=.4,s=12,l=48,u=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:i,radialSegments:s,tubularSegments:l,arc:u},s=Math.floor(s),l=Math.floor(l);const h=[],d=[],m=[],p=[],_=new tt,v=new tt,S=new tt;for(let M=0;M<=s;M++)for(let T=0;T<=l;T++){const R=T/l*u,y=M/s*Math.PI*2;v.x=(t+i*Math.cos(y))*Math.cos(R),v.y=(t+i*Math.cos(y))*Math.sin(R),v.z=i*Math.sin(y),d.push(v.x,v.y,v.z),_.x=t*Math.cos(R),_.y=t*Math.sin(R),S.subVectors(v,_).normalize(),m.push(S.x,S.y,S.z),p.push(T/l),p.push(M/s)}for(let M=1;M<=s;M++)for(let T=1;T<=l;T++){const R=(l+1)*M+T-1,y=(l+1)*(M-1)+T-1,g=(l+1)*(M-1)+T,O=(l+1)*M+T;h.push(R,y,O),h.push(y,g,O)}this.setIndex(h),this.setAttribute("position",new wi(d,3)),this.setAttribute("normal",new wi(m,3)),this.setAttribute("uv",new wi(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Lc(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class my extends wc{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=bx,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class _y extends wc{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class gy extends kn{constructor(t,i=1){super(),this.isLight=!0,this.type="Light",this.color=new Le(t),this.intensity=i}dispose(){}copy(t,i){return super.copy(t,i),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const i=super.toJSON(t);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,this.groundColor!==void 0&&(i.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(i.object.distance=this.distance),this.angle!==void 0&&(i.object.angle=this.angle),this.decay!==void 0&&(i.object.decay=this.decay),this.penumbra!==void 0&&(i.object.penumbra=this.penumbra),this.shadow!==void 0&&(i.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(i.object.target=this.target.uuid),i}}class vy extends Sv{constructor(t=-1,i=1,s=1,l=-1,u=.1,h=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=i,this.top=s,this.bottom=l,this.near=u,this.far=h,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,i,s,l,u,h){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=u,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let u=s-t,h=s+t,d=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,_=(this.top-this.bottom)/this.view.fullHeight/this.zoom;u+=p*this.view.offsetX,h=u+p*this.view.width,d-=_*this.view.offsetY,m=d-_*this.view.height}this.projectionMatrix.makeOrthographic(u,h,d,m,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class Sy extends gy{constructor(t,i){super(t,i),this.isAmbientLight=!0,this.type="AmbientLight"}}class xy extends ci{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}class bg{constructor(t=1,i=0,s=0){this.radius=t,this.phi=i,this.theta=s}set(t,i,s){return this.radius=t,this.phi=i,this.theta=s,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=_e(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,i,s){return this.radius=Math.sqrt(t*t+i*i+s*s),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,s),this.phi=Math.acos(_e(i/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class yy extends bs{constructor(t,i=null){super(),this.object=t,this.domElement=i,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){if(t===void 0){console.warn("THREE.Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}}function Ag(o,t,i,s){const l=My(s);switch(i){case sv:return o*t;case ov:return o*t/l.components*l.byteLength;case fd:return o*t/l.components*l.byteLength;case lv:return o*t*2/l.components*l.byteLength;case hd:return o*t*2/l.components*l.byteLength;case rv:return o*t*3/l.components*l.byteLength;case gi:return o*t*4/l.components*l.byteLength;case dd:return o*t*4/l.components*l.byteLength;case vc:case Sc:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*8;case xc:case yc:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case Nh:case Ph:return Math.max(o,16)*Math.max(t,8)/4;case Lh:case Oh:return Math.max(o,8)*Math.max(t,8)/2;case zh:case Ih:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*8;case Bh:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case Fh:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case Hh:return Math.floor((o+4)/5)*Math.floor((t+3)/4)*16;case Gh:return Math.floor((o+4)/5)*Math.floor((t+4)/5)*16;case Vh:return Math.floor((o+5)/6)*Math.floor((t+4)/5)*16;case kh:return Math.floor((o+5)/6)*Math.floor((t+5)/6)*16;case Xh:return Math.floor((o+7)/8)*Math.floor((t+4)/5)*16;case Wh:return Math.floor((o+7)/8)*Math.floor((t+5)/6)*16;case qh:return Math.floor((o+7)/8)*Math.floor((t+7)/8)*16;case Yh:return Math.floor((o+9)/10)*Math.floor((t+4)/5)*16;case jh:return Math.floor((o+9)/10)*Math.floor((t+5)/6)*16;case Zh:return Math.floor((o+9)/10)*Math.floor((t+7)/8)*16;case Kh:return Math.floor((o+9)/10)*Math.floor((t+9)/10)*16;case Qh:return Math.floor((o+11)/12)*Math.floor((t+9)/10)*16;case Jh:return Math.floor((o+11)/12)*Math.floor((t+11)/12)*16;case Mc:case $h:case td:return Math.ceil(o/4)*Math.ceil(t/4)*16;case cv:case ed:return Math.ceil(o/4)*Math.ceil(t/4)*8;case nd:case id:return Math.ceil(o/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function My(o){switch(o){case sa:case nv:return{byteLength:1,components:1};case Do:case iv:case Oo:return{byteLength:2,components:1};case cd:case ud:return{byteLength:2,components:4};case Ms:case ld:case na:return{byteLength:4,components:1};case av:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${o}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:od}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=od);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Ev(){let o=null,t=!1,i=null,s=null;function l(u,h){i(u,h),s=o.requestAnimationFrame(l)}return{start:function(){t!==!0&&i!==null&&(s=o.requestAnimationFrame(l),t=!0)},stop:function(){o.cancelAnimationFrame(s),t=!1},setAnimationLoop:function(u){i=u},setContext:function(u){o=u}}}function Ey(o){const t=new WeakMap;function i(d,m){const p=d.array,_=d.usage,v=p.byteLength,S=o.createBuffer();o.bindBuffer(m,S),o.bufferData(m,p,_),d.onUploadCallback();let M;if(p instanceof Float32Array)M=o.FLOAT;else if(p instanceof Uint16Array)d.isFloat16BufferAttribute?M=o.HALF_FLOAT:M=o.UNSIGNED_SHORT;else if(p instanceof Int16Array)M=o.SHORT;else if(p instanceof Uint32Array)M=o.UNSIGNED_INT;else if(p instanceof Int32Array)M=o.INT;else if(p instanceof Int8Array)M=o.BYTE;else if(p instanceof Uint8Array)M=o.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)M=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:S,type:M,bytesPerElement:p.BYTES_PER_ELEMENT,version:d.version,size:v}}function s(d,m,p){const _=m.array,v=m.updateRanges;if(o.bindBuffer(p,d),v.length===0)o.bufferSubData(p,0,_);else{v.sort((M,T)=>M.start-T.start);let S=0;for(let M=1;M<v.length;M++){const T=v[S],R=v[M];R.start<=T.start+T.count+1?T.count=Math.max(T.count,R.start+R.count-T.start):(++S,v[S]=R)}v.length=S+1;for(let M=0,T=v.length;M<T;M++){const R=v[M];o.bufferSubData(p,R.start*_.BYTES_PER_ELEMENT,_,R.start,R.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(d){return d.isInterleavedBufferAttribute&&(d=d.data),t.get(d)}function u(d){d.isInterleavedBufferAttribute&&(d=d.data);const m=t.get(d);m&&(o.deleteBuffer(m.buffer),t.delete(d))}function h(d,m){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const _=t.get(d);(!_||_.version<d.version)&&t.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const p=t.get(d);if(p===void 0)t.set(d,i(d,m));else if(p.version<d.version){if(p.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(p.buffer,d,m),p.version=d.version}}return{get:l,remove:u,update:h}}var Ty=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,by=`#ifdef USE_ALPHAHASH
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
#endif`,Ay=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Ry=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Cy=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,wy=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Dy=`#ifdef USE_AOMAP
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
#endif`,Uy=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Ly=`#ifdef USE_BATCHING
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
#endif`,Ny=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Oy=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Py=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,zy=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Iy=`#ifdef USE_IRIDESCENCE
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
#endif`,By=`#ifdef USE_BUMPMAP
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
#endif`,Fy=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Hy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Gy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Vy=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ky=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Xy=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Wy=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,qy=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Yy=`#define PI 3.141592653589793
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
} // validated`,jy=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Zy=`vec3 transformedNormal = objectNormal;
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
#endif`,Ky=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Qy=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Jy=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,$y=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,tM="gl_FragColor = linearToOutputTexel( gl_FragColor );",eM=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,nM=`#ifdef USE_ENVMAP
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
#endif`,iM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,aM=`#ifdef USE_ENVMAP
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
#endif`,sM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,rM=`#ifdef USE_ENVMAP
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
#endif`,oM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,lM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,cM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,uM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,fM=`#ifdef USE_GRADIENTMAP
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
}`,hM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,dM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,pM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,mM=`uniform bool receiveShadow;
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
#endif`,_M=`#ifdef USE_ENVMAP
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
#endif`,gM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,vM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,SM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,xM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,yM=`PhysicalMaterial material;
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
#endif`,MM=`struct PhysicalMaterial {
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
}`,EM=`
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
#endif`,TM=`#if defined( RE_IndirectDiffuse )
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
#endif`,bM=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,AM=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,RM=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,CM=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,wM=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,DM=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,UM=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,LM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,NM=`#if defined( USE_POINTS_UV )
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
#endif`,OM=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,PM=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,zM=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,IM=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,BM=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,FM=`#ifdef USE_MORPHTARGETS
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
#endif`,HM=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,GM=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,VM=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,kM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,XM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,WM=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,qM=`#ifdef USE_NORMALMAP
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
#endif`,YM=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,jM=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,ZM=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,KM=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,QM=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,JM=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,$M=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,tE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,eE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,nE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,iE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,aE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,sE=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,rE=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,oE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,lE=`float getShadowMask() {
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
}`,cE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,uE=`#ifdef USE_SKINNING
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
#endif`,fE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,hE=`#ifdef USE_SKINNING
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
#endif`,dE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,pE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,mE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,_E=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,gE=`#ifdef USE_TRANSMISSION
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
#endif`,vE=`#ifdef USE_TRANSMISSION
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
#endif`,SE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,xE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,yE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ME=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const EE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,TE=`uniform sampler2D t2D;
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
}`,bE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,AE=`#ifdef ENVMAP_TYPE_CUBE
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
}`,RE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,CE=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,wE=`#include <common>
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
}`,DE=`#if DEPTH_PACKING == 3200
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
}`,UE=`#define DISTANCE
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
}`,LE=`#define DISTANCE
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
}`,NE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,OE=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,PE=`uniform float scale;
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
}`,zE=`uniform vec3 diffuse;
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
}`,IE=`#include <common>
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
}`,BE=`uniform vec3 diffuse;
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
}`,FE=`#define LAMBERT
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
}`,HE=`#define LAMBERT
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
}`,GE=`#define MATCAP
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
}`,VE=`#define MATCAP
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
}`,kE=`#define NORMAL
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
}`,XE=`#define NORMAL
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
}`,WE=`#define PHONG
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
}`,qE=`#define PHONG
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
}`,YE=`#define STANDARD
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
}`,jE=`#define STANDARD
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
}`,ZE=`#define TOON
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
}`,KE=`#define TOON
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
}`,QE=`uniform float size;
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
}`,JE=`uniform vec3 diffuse;
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
}`,$E=`#include <common>
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
}`,tT=`uniform vec3 color;
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
}`,eT=`uniform float rotation;
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
}`,nT=`uniform vec3 diffuse;
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
}`,le={alphahash_fragment:Ty,alphahash_pars_fragment:by,alphamap_fragment:Ay,alphamap_pars_fragment:Ry,alphatest_fragment:Cy,alphatest_pars_fragment:wy,aomap_fragment:Dy,aomap_pars_fragment:Uy,batching_pars_vertex:Ly,batching_vertex:Ny,begin_vertex:Oy,beginnormal_vertex:Py,bsdfs:zy,iridescence_fragment:Iy,bumpmap_pars_fragment:By,clipping_planes_fragment:Fy,clipping_planes_pars_fragment:Hy,clipping_planes_pars_vertex:Gy,clipping_planes_vertex:Vy,color_fragment:ky,color_pars_fragment:Xy,color_pars_vertex:Wy,color_vertex:qy,common:Yy,cube_uv_reflection_fragment:jy,defaultnormal_vertex:Zy,displacementmap_pars_vertex:Ky,displacementmap_vertex:Qy,emissivemap_fragment:Jy,emissivemap_pars_fragment:$y,colorspace_fragment:tM,colorspace_pars_fragment:eM,envmap_fragment:nM,envmap_common_pars_fragment:iM,envmap_pars_fragment:aM,envmap_pars_vertex:sM,envmap_physical_pars_fragment:_M,envmap_vertex:rM,fog_vertex:oM,fog_pars_vertex:lM,fog_fragment:cM,fog_pars_fragment:uM,gradientmap_pars_fragment:fM,lightmap_pars_fragment:hM,lights_lambert_fragment:dM,lights_lambert_pars_fragment:pM,lights_pars_begin:mM,lights_toon_fragment:gM,lights_toon_pars_fragment:vM,lights_phong_fragment:SM,lights_phong_pars_fragment:xM,lights_physical_fragment:yM,lights_physical_pars_fragment:MM,lights_fragment_begin:EM,lights_fragment_maps:TM,lights_fragment_end:bM,logdepthbuf_fragment:AM,logdepthbuf_pars_fragment:RM,logdepthbuf_pars_vertex:CM,logdepthbuf_vertex:wM,map_fragment:DM,map_pars_fragment:UM,map_particle_fragment:LM,map_particle_pars_fragment:NM,metalnessmap_fragment:OM,metalnessmap_pars_fragment:PM,morphinstance_vertex:zM,morphcolor_vertex:IM,morphnormal_vertex:BM,morphtarget_pars_vertex:FM,morphtarget_vertex:HM,normal_fragment_begin:GM,normal_fragment_maps:VM,normal_pars_fragment:kM,normal_pars_vertex:XM,normal_vertex:WM,normalmap_pars_fragment:qM,clearcoat_normal_fragment_begin:YM,clearcoat_normal_fragment_maps:jM,clearcoat_pars_fragment:ZM,iridescence_pars_fragment:KM,opaque_fragment:QM,packing:JM,premultiplied_alpha_fragment:$M,project_vertex:tE,dithering_fragment:eE,dithering_pars_fragment:nE,roughnessmap_fragment:iE,roughnessmap_pars_fragment:aE,shadowmap_pars_fragment:sE,shadowmap_pars_vertex:rE,shadowmap_vertex:oE,shadowmask_pars_fragment:lE,skinbase_vertex:cE,skinning_pars_vertex:uE,skinning_vertex:fE,skinnormal_vertex:hE,specularmap_fragment:dE,specularmap_pars_fragment:pE,tonemapping_fragment:mE,tonemapping_pars_fragment:_E,transmission_fragment:gE,transmission_pars_fragment:vE,uv_pars_fragment:SE,uv_pars_vertex:xE,uv_vertex:yE,worldpos_vertex:ME,background_vert:EE,background_frag:TE,backgroundCube_vert:bE,backgroundCube_frag:AE,cube_vert:RE,cube_frag:CE,depth_vert:wE,depth_frag:DE,distanceRGBA_vert:UE,distanceRGBA_frag:LE,equirect_vert:NE,equirect_frag:OE,linedashed_vert:PE,linedashed_frag:zE,meshbasic_vert:IE,meshbasic_frag:BE,meshlambert_vert:FE,meshlambert_frag:HE,meshmatcap_vert:GE,meshmatcap_frag:VE,meshnormal_vert:kE,meshnormal_frag:XE,meshphong_vert:WE,meshphong_frag:qE,meshphysical_vert:YE,meshphysical_frag:jE,meshtoon_vert:ZE,meshtoon_frag:KE,points_vert:QE,points_frag:JE,shadow_vert:$E,shadow_frag:tT,sprite_vert:eT,sprite_frag:nT},Lt={common:{diffuse:{value:new Le(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new re},alphaMap:{value:null},alphaMapTransform:{value:new re},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new re}},envmap:{envMap:{value:null},envMapRotation:{value:new re},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new re}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new re}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new re},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new re},normalScale:{value:new he(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new re},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new re}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new re}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new re}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Le(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Le(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new re},alphaTest:{value:0},uvTransform:{value:new re}},sprite:{diffuse:{value:new Le(16777215)},opacity:{value:1},center:{value:new he(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new re},alphaMap:{value:null},alphaMapTransform:{value:new re},alphaTest:{value:0}}},Ai={basic:{uniforms:Ln([Lt.common,Lt.specularmap,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.fog]),vertexShader:le.meshbasic_vert,fragmentShader:le.meshbasic_frag},lambert:{uniforms:Ln([Lt.common,Lt.specularmap,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.fog,Lt.lights,{emissive:{value:new Le(0)}}]),vertexShader:le.meshlambert_vert,fragmentShader:le.meshlambert_frag},phong:{uniforms:Ln([Lt.common,Lt.specularmap,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.fog,Lt.lights,{emissive:{value:new Le(0)},specular:{value:new Le(1118481)},shininess:{value:30}}]),vertexShader:le.meshphong_vert,fragmentShader:le.meshphong_frag},standard:{uniforms:Ln([Lt.common,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.roughnessmap,Lt.metalnessmap,Lt.fog,Lt.lights,{emissive:{value:new Le(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:le.meshphysical_vert,fragmentShader:le.meshphysical_frag},toon:{uniforms:Ln([Lt.common,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.gradientmap,Lt.fog,Lt.lights,{emissive:{value:new Le(0)}}]),vertexShader:le.meshtoon_vert,fragmentShader:le.meshtoon_frag},matcap:{uniforms:Ln([Lt.common,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.fog,{matcap:{value:null}}]),vertexShader:le.meshmatcap_vert,fragmentShader:le.meshmatcap_frag},points:{uniforms:Ln([Lt.points,Lt.fog]),vertexShader:le.points_vert,fragmentShader:le.points_frag},dashed:{uniforms:Ln([Lt.common,Lt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:le.linedashed_vert,fragmentShader:le.linedashed_frag},depth:{uniforms:Ln([Lt.common,Lt.displacementmap]),vertexShader:le.depth_vert,fragmentShader:le.depth_frag},normal:{uniforms:Ln([Lt.common,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,{opacity:{value:1}}]),vertexShader:le.meshnormal_vert,fragmentShader:le.meshnormal_frag},sprite:{uniforms:Ln([Lt.sprite,Lt.fog]),vertexShader:le.sprite_vert,fragmentShader:le.sprite_frag},background:{uniforms:{uvTransform:{value:new re},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:le.background_vert,fragmentShader:le.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new re}},vertexShader:le.backgroundCube_vert,fragmentShader:le.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:le.cube_vert,fragmentShader:le.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:le.equirect_vert,fragmentShader:le.equirect_frag},distanceRGBA:{uniforms:Ln([Lt.common,Lt.displacementmap,{referencePosition:{value:new tt},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:le.distanceRGBA_vert,fragmentShader:le.distanceRGBA_frag},shadow:{uniforms:Ln([Lt.lights,Lt.fog,{color:{value:new Le(0)},opacity:{value:1}}]),vertexShader:le.shadow_vert,fragmentShader:le.shadow_frag}};Ai.physical={uniforms:Ln([Ai.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new re},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new re},clearcoatNormalScale:{value:new he(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new re},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new re},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new re},sheen:{value:0},sheenColor:{value:new Le(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new re},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new re},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new re},transmissionSamplerSize:{value:new he},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new re},attenuationDistance:{value:0},attenuationColor:{value:new Le(0)},specularColor:{value:new Le(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new re},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new re},anisotropyVector:{value:new he},anisotropyMap:{value:null},anisotropyMapTransform:{value:new re}}]),vertexShader:le.meshphysical_vert,fragmentShader:le.meshphysical_frag};const dc={r:0,b:0,g:0},ms=new ra,iT=new sn;function aT(o,t,i,s,l,u,h){const d=new Le(0);let m=u===!0?0:1,p,_,v=null,S=0,M=null;function T(U){let w=U.isScene===!0?U.background:null;return w&&w.isTexture&&(w=(U.backgroundBlurriness>0?i:t).get(w)),w}function R(U){let w=!1;const F=T(U);F===null?g(d,m):F&&F.isColor&&(g(F,1),w=!0);const V=o.xr.getEnvironmentBlendMode();V==="additive"?s.buffers.color.setClear(0,0,0,1,h):V==="alpha-blend"&&s.buffers.color.setClear(0,0,0,0,h),(o.autoClear||w)&&(s.buffers.depth.setTest(!0),s.buffers.depth.setMask(!0),s.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function y(U,w){const F=T(w);F&&(F.isCubeTexture||F.mapping===Cc)?(_===void 0&&(_=new vi(new Io(1,1,1),new Xa({name:"BackgroundCubeMaterial",uniforms:Rr(Ai.backgroundCube.uniforms),vertexShader:Ai.backgroundCube.vertexShader,fragmentShader:Ai.backgroundCube.fragmentShader,side:Gn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),_.geometry.deleteAttribute("normal"),_.geometry.deleteAttribute("uv"),_.onBeforeRender=function(V,I,q){this.matrixWorld.copyPosition(q.matrixWorld)},Object.defineProperty(_.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(_)),ms.copy(w.backgroundRotation),ms.x*=-1,ms.y*=-1,ms.z*=-1,F.isCubeTexture&&F.isRenderTargetTexture===!1&&(ms.y*=-1,ms.z*=-1),_.material.uniforms.envMap.value=F,_.material.uniforms.flipEnvMap.value=F.isCubeTexture&&F.isRenderTargetTexture===!1?-1:1,_.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,_.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,_.material.uniforms.backgroundRotation.value.setFromMatrix4(iT.makeRotationFromEuler(ms)),_.material.toneMapped=Ae.getTransfer(F.colorSpace)!==Ie,(v!==F||S!==F.version||M!==o.toneMapping)&&(_.material.needsUpdate=!0,v=F,S=F.version,M=o.toneMapping),_.layers.enableAll(),U.unshift(_,_.geometry,_.material,0,0,null)):F&&F.isTexture&&(p===void 0&&(p=new vi(new Uc(2,2),new Xa({name:"BackgroundMaterial",uniforms:Rr(Ai.background.uniforms),vertexShader:Ai.background.vertexShader,fragmentShader:Ai.background.fragmentShader,side:ka,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(p)),p.material.uniforms.t2D.value=F,p.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,p.material.toneMapped=Ae.getTransfer(F.colorSpace)!==Ie,F.matrixAutoUpdate===!0&&F.updateMatrix(),p.material.uniforms.uvTransform.value.copy(F.matrix),(v!==F||S!==F.version||M!==o.toneMapping)&&(p.material.needsUpdate=!0,v=F,S=F.version,M=o.toneMapping),p.layers.enableAll(),U.unshift(p,p.geometry,p.material,0,0,null))}function g(U,w){U.getRGB(dc,vv(o)),s.buffers.color.setClear(dc.r,dc.g,dc.b,w,h)}function O(){_!==void 0&&(_.geometry.dispose(),_.material.dispose(),_=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return d},setClearColor:function(U,w=1){d.set(U),m=w,g(d,m)},getClearAlpha:function(){return m},setClearAlpha:function(U){m=U,g(d,m)},render:R,addToRenderList:y,dispose:O}}function sT(o,t){const i=o.getParameter(o.MAX_VERTEX_ATTRIBS),s={},l=S(null);let u=l,h=!1;function d(C,G,ot,rt,pt){let ut=!1;const z=v(rt,ot,G);u!==z&&(u=z,p(u.object)),ut=M(C,rt,ot,pt),ut&&T(C,rt,ot,pt),pt!==null&&t.update(pt,o.ELEMENT_ARRAY_BUFFER),(ut||h)&&(h=!1,w(C,G,ot,rt),pt!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,t.get(pt).buffer))}function m(){return o.createVertexArray()}function p(C){return o.bindVertexArray(C)}function _(C){return o.deleteVertexArray(C)}function v(C,G,ot){const rt=ot.wireframe===!0;let pt=s[C.id];pt===void 0&&(pt={},s[C.id]=pt);let ut=pt[G.id];ut===void 0&&(ut={},pt[G.id]=ut);let z=ut[rt];return z===void 0&&(z=S(m()),ut[rt]=z),z}function S(C){const G=[],ot=[],rt=[];for(let pt=0;pt<i;pt++)G[pt]=0,ot[pt]=0,rt[pt]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:G,enabledAttributes:ot,attributeDivisors:rt,object:C,attributes:{},index:null}}function M(C,G,ot,rt){const pt=u.attributes,ut=G.attributes;let z=0;const Z=ot.getAttributes();for(const Y in Z)if(Z[Y].location>=0){const L=pt[Y];let $=ut[Y];if($===void 0&&(Y==="instanceMatrix"&&C.instanceMatrix&&($=C.instanceMatrix),Y==="instanceColor"&&C.instanceColor&&($=C.instanceColor)),L===void 0||L.attribute!==$||$&&L.data!==$.data)return!0;z++}return u.attributesNum!==z||u.index!==rt}function T(C,G,ot,rt){const pt={},ut=G.attributes;let z=0;const Z=ot.getAttributes();for(const Y in Z)if(Z[Y].location>=0){let L=ut[Y];L===void 0&&(Y==="instanceMatrix"&&C.instanceMatrix&&(L=C.instanceMatrix),Y==="instanceColor"&&C.instanceColor&&(L=C.instanceColor));const $={};$.attribute=L,L&&L.data&&($.data=L.data),pt[Y]=$,z++}u.attributes=pt,u.attributesNum=z,u.index=rt}function R(){const C=u.newAttributes;for(let G=0,ot=C.length;G<ot;G++)C[G]=0}function y(C){g(C,0)}function g(C,G){const ot=u.newAttributes,rt=u.enabledAttributes,pt=u.attributeDivisors;ot[C]=1,rt[C]===0&&(o.enableVertexAttribArray(C),rt[C]=1),pt[C]!==G&&(o.vertexAttribDivisor(C,G),pt[C]=G)}function O(){const C=u.newAttributes,G=u.enabledAttributes;for(let ot=0,rt=G.length;ot<rt;ot++)G[ot]!==C[ot]&&(o.disableVertexAttribArray(ot),G[ot]=0)}function U(C,G,ot,rt,pt,ut,z){z===!0?o.vertexAttribIPointer(C,G,ot,pt,ut):o.vertexAttribPointer(C,G,ot,rt,pt,ut)}function w(C,G,ot,rt){R();const pt=rt.attributes,ut=ot.getAttributes(),z=G.defaultAttributeValues;for(const Z in ut){const Y=ut[Z];if(Y.location>=0){let Mt=pt[Z];if(Mt===void 0&&(Z==="instanceMatrix"&&C.instanceMatrix&&(Mt=C.instanceMatrix),Z==="instanceColor"&&C.instanceColor&&(Mt=C.instanceColor)),Mt!==void 0){const L=Mt.normalized,$=Mt.itemSize,vt=t.get(Mt);if(vt===void 0)continue;const xt=vt.buffer,Q=vt.type,mt=vt.bytesPerElement,yt=Q===o.INT||Q===o.UNSIGNED_INT||Mt.gpuType===ld;if(Mt.isInterleavedBufferAttribute){const At=Mt.data,Ct=At.stride,oe=Mt.offset;if(At.isInstancedInterleavedBuffer){for(let Kt=0;Kt<Y.locationSize;Kt++)g(Y.location+Kt,At.meshPerAttribute);C.isInstancedMesh!==!0&&rt._maxInstanceCount===void 0&&(rt._maxInstanceCount=At.meshPerAttribute*At.count)}else for(let Kt=0;Kt<Y.locationSize;Kt++)y(Y.location+Kt);o.bindBuffer(o.ARRAY_BUFFER,xt);for(let Kt=0;Kt<Y.locationSize;Kt++)U(Y.location+Kt,$/Y.locationSize,Q,L,Ct*mt,(oe+$/Y.locationSize*Kt)*mt,yt)}else{if(Mt.isInstancedBufferAttribute){for(let At=0;At<Y.locationSize;At++)g(Y.location+At,Mt.meshPerAttribute);C.isInstancedMesh!==!0&&rt._maxInstanceCount===void 0&&(rt._maxInstanceCount=Mt.meshPerAttribute*Mt.count)}else for(let At=0;At<Y.locationSize;At++)y(Y.location+At);o.bindBuffer(o.ARRAY_BUFFER,xt);for(let At=0;At<Y.locationSize;At++)U(Y.location+At,$/Y.locationSize,Q,L,$*mt,$/Y.locationSize*At*mt,yt)}}else if(z!==void 0){const L=z[Z];if(L!==void 0)switch(L.length){case 2:o.vertexAttrib2fv(Y.location,L);break;case 3:o.vertexAttrib3fv(Y.location,L);break;case 4:o.vertexAttrib4fv(Y.location,L);break;default:o.vertexAttrib1fv(Y.location,L)}}}}O()}function F(){q();for(const C in s){const G=s[C];for(const ot in G){const rt=G[ot];for(const pt in rt)_(rt[pt].object),delete rt[pt];delete G[ot]}delete s[C]}}function V(C){if(s[C.id]===void 0)return;const G=s[C.id];for(const ot in G){const rt=G[ot];for(const pt in rt)_(rt[pt].object),delete rt[pt];delete G[ot]}delete s[C.id]}function I(C){for(const G in s){const ot=s[G];if(ot[C.id]===void 0)continue;const rt=ot[C.id];for(const pt in rt)_(rt[pt].object),delete rt[pt];delete ot[C.id]}}function q(){D(),h=!0,u!==l&&(u=l,p(u.object))}function D(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:q,resetDefaultState:D,dispose:F,releaseStatesOfGeometry:V,releaseStatesOfProgram:I,initAttributes:R,enableAttribute:y,disableUnusedAttributes:O}}function rT(o,t,i){let s;function l(p){s=p}function u(p,_){o.drawArrays(s,p,_),i.update(_,s,1)}function h(p,_,v){v!==0&&(o.drawArraysInstanced(s,p,_,v),i.update(_,s,v))}function d(p,_,v){if(v===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,p,0,_,0,v);let M=0;for(let T=0;T<v;T++)M+=_[T];i.update(M,s,1)}function m(p,_,v,S){if(v===0)return;const M=t.get("WEBGL_multi_draw");if(M===null)for(let T=0;T<p.length;T++)h(p[T],_[T],S[T]);else{M.multiDrawArraysInstancedWEBGL(s,p,0,_,0,S,0,v);let T=0;for(let R=0;R<v;R++)T+=_[R]*S[R];i.update(T,s,1)}}this.setMode=l,this.render=u,this.renderInstances=h,this.renderMultiDraw=d,this.renderMultiDrawInstances=m}function oT(o,t,i,s){let l;function u(){if(l!==void 0)return l;if(t.has("EXT_texture_filter_anisotropic")===!0){const I=t.get("EXT_texture_filter_anisotropic");l=o.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function h(I){return!(I!==gi&&s.convert(I)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(I){const q=I===Oo&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(I!==sa&&s.convert(I)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE)&&I!==na&&!q)}function m(I){if(I==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=i.precision!==void 0?i.precision:"highp";const _=m(p);_!==p&&(console.warn("THREE.WebGLRenderer:",p,"not supported, using",_,"instead."),p=_);const v=i.logarithmicDepthBuffer===!0,S=i.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),M=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),T=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),R=o.getParameter(o.MAX_TEXTURE_SIZE),y=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),g=o.getParameter(o.MAX_VERTEX_ATTRIBS),O=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),U=o.getParameter(o.MAX_VARYING_VECTORS),w=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),F=T>0,V=o.getParameter(o.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:u,getMaxPrecision:m,textureFormatReadable:h,textureTypeReadable:d,precision:p,logarithmicDepthBuffer:v,reverseDepthBuffer:S,maxTextures:M,maxVertexTextures:T,maxTextureSize:R,maxCubemapSize:y,maxAttributes:g,maxVertexUniforms:O,maxVaryings:U,maxFragmentUniforms:w,vertexTextures:F,maxSamples:V}}function lT(o){const t=this;let i=null,s=0,l=!1,u=!1;const h=new Fa,d=new re,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(v,S){const M=v.length!==0||S||s!==0||l;return l=S,s=v.length,M},this.beginShadows=function(){u=!0,_(null)},this.endShadows=function(){u=!1},this.setGlobalState=function(v,S){i=_(v,S,0)},this.setState=function(v,S,M){const T=v.clippingPlanes,R=v.clipIntersection,y=v.clipShadows,g=o.get(v);if(!l||T===null||T.length===0||u&&!y)u?_(null):p();else{const O=u?0:s,U=O*4;let w=g.clippingState||null;m.value=w,w=_(T,S,U,M);for(let F=0;F!==U;++F)w[F]=i[F];g.clippingState=w,this.numIntersection=R?this.numPlanes:0,this.numPlanes+=O}};function p(){m.value!==i&&(m.value=i,m.needsUpdate=s>0),t.numPlanes=s,t.numIntersection=0}function _(v,S,M,T){const R=v!==null?v.length:0;let y=null;if(R!==0){if(y=m.value,T!==!0||y===null){const g=M+R*4,O=S.matrixWorldInverse;d.getNormalMatrix(O),(y===null||y.length<g)&&(y=new Float32Array(g));for(let U=0,w=M;U!==R;++U,w+=4)h.copy(v[U]).applyMatrix4(O,d),h.normal.toArray(y,w),y[w+3]=h.constant}m.value=y,m.needsUpdate=!0}return t.numPlanes=R,t.numIntersection=0,y}}function cT(o){let t=new WeakMap;function i(h,d){return d===Ch?h.mapping=Tr:d===wh&&(h.mapping=br),h}function s(h){if(h&&h.isTexture){const d=h.mapping;if(d===Ch||d===wh)if(t.has(h)){const m=t.get(h).texture;return i(m,h.mapping)}else{const m=h.image;if(m&&m.height>0){const p=new uy(m.height);return p.fromEquirectangularTexture(o,h),t.set(h,p),h.addEventListener("dispose",l),i(p.texture,h.mapping)}else return null}}return h}function l(h){const d=h.target;d.removeEventListener("dispose",l);const m=t.get(d);m!==void 0&&(t.delete(d),m.dispose())}function u(){t=new WeakMap}return{get:s,dispose:u}}const vr=4,Rg=[.125,.215,.35,.446,.526,.582],Ss=20,hh=new vy,Cg=new Le;let dh=null,ph=0,mh=0,_h=!1;const gs=(1+Math.sqrt(5))/2,_r=1/gs,wg=[new tt(-gs,_r,0),new tt(gs,_r,0),new tt(-_r,0,gs),new tt(_r,0,gs),new tt(0,gs,-_r),new tt(0,gs,_r),new tt(-1,1,-1),new tt(1,1,-1),new tt(-1,1,1),new tt(1,1,1)],uT=new tt;class Dg{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,i=0,s=.1,l=100,u={}){const{size:h=256,position:d=uT}=u;dh=this._renderer.getRenderTarget(),ph=this._renderer.getActiveCubeFace(),mh=this._renderer.getActiveMipmapLevel(),_h=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(h);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(t,s,l,m,d),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(t,i=null){return this._fromTexture(t,i)}fromCubemap(t,i=null){return this._fromTexture(t,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ng(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Lg(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(dh,ph,mh),this._renderer.xr.enabled=_h,t.scissorTest=!1,pc(t,0,0,t.width,t.height)}_fromTexture(t,i){t.mapping===Tr||t.mapping===br?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),dh=this._renderer.getRenderTarget(),ph=this._renderer.getActiveCubeFace(),mh=this._renderer.getActiveMipmapLevel(),_h=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=i||this._allocateTargets();return this._textureToCubeUV(t,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,s={magFilter:Ri,minFilter:Ri,generateMipmaps:!1,type:Oo,format:gi,colorSpace:Ar,depthBuffer:!1},l=Ug(t,i,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ug(t,i,s);const{_lodMax:u}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=fT(u)),this._blurMaterial=hT(u,t,i)}return l}_compileMaterial(t){const i=new vi(this._lodPlanes[0],t);this._renderer.compile(i,hh)}_sceneToCubeUV(t,i,s,l,u){const m=new ci(90,1,i,s),p=[1,-1,1,1,1,1],_=[1,1,1,-1,-1,-1],v=this._renderer,S=v.autoClear,M=v.toneMapping;v.getClearColor(Cg),v.toneMapping=Va,v.autoClear=!1;const T=new Dc({name:"PMREM.Background",side:Gn,depthWrite:!1,depthTest:!1}),R=new vi(new Io,T);let y=!1;const g=t.background;g?g.isColor&&(T.color.copy(g),t.background=null,y=!0):(T.color.copy(Cg),y=!0);for(let O=0;O<6;O++){const U=O%3;U===0?(m.up.set(0,p[O],0),m.position.set(u.x,u.y,u.z),m.lookAt(u.x+_[O],u.y,u.z)):U===1?(m.up.set(0,0,p[O]),m.position.set(u.x,u.y,u.z),m.lookAt(u.x,u.y+_[O],u.z)):(m.up.set(0,p[O],0),m.position.set(u.x,u.y,u.z),m.lookAt(u.x,u.y,u.z+_[O]));const w=this._cubeSize;pc(l,U*w,O>2?w:0,w,w),v.setRenderTarget(l),y&&v.render(R,m),v.render(t,m)}R.geometry.dispose(),R.material.dispose(),v.toneMapping=M,v.autoClear=S,t.background=g}_textureToCubeUV(t,i){const s=this._renderer,l=t.mapping===Tr||t.mapping===br;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ng()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Lg());const u=l?this._cubemapMaterial:this._equirectMaterial,h=new vi(this._lodPlanes[0],u),d=u.uniforms;d.envMap.value=t;const m=this._cubeSize;pc(i,0,0,3*m,2*m),s.setRenderTarget(i),s.render(h,hh)}_applyPMREM(t){const i=this._renderer,s=i.autoClear;i.autoClear=!1;const l=this._lodPlanes.length;for(let u=1;u<l;u++){const h=Math.sqrt(this._sigmas[u]*this._sigmas[u]-this._sigmas[u-1]*this._sigmas[u-1]),d=wg[(l-u-1)%wg.length];this._blur(t,u-1,u,h,d)}i.autoClear=s}_blur(t,i,s,l,u){const h=this._pingPongRenderTarget;this._halfBlur(t,h,i,s,l,"latitudinal",u),this._halfBlur(h,t,s,s,l,"longitudinal",u)}_halfBlur(t,i,s,l,u,h,d){const m=this._renderer,p=this._blurMaterial;h!=="latitudinal"&&h!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const _=3,v=new vi(this._lodPlanes[l],p),S=p.uniforms,M=this._sizeLods[s]-1,T=isFinite(u)?Math.PI/(2*M):2*Math.PI/(2*Ss-1),R=u/T,y=isFinite(u)?1+Math.floor(_*R):Ss;y>Ss&&console.warn(`sigmaRadians, ${u}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${Ss}`);const g=[];let O=0;for(let I=0;I<Ss;++I){const q=I/R,D=Math.exp(-q*q/2);g.push(D),I===0?O+=D:I<y&&(O+=2*D)}for(let I=0;I<g.length;I++)g[I]=g[I]/O;S.envMap.value=t.texture,S.samples.value=y,S.weights.value=g,S.latitudinal.value=h==="latitudinal",d&&(S.poleAxis.value=d);const{_lodMax:U}=this;S.dTheta.value=T,S.mipInt.value=U-s;const w=this._sizeLods[l],F=3*w*(l>U-vr?l-U+vr:0),V=4*(this._cubeSize-w);pc(i,F,V,3*w,2*w),m.setRenderTarget(i),m.render(v,hh)}}function fT(o){const t=[],i=[],s=[];let l=o;const u=o-vr+1+Rg.length;for(let h=0;h<u;h++){const d=Math.pow(2,l);i.push(d);let m=1/d;h>o-vr?m=Rg[h-o+vr-1]:h===0&&(m=0),s.push(m);const p=1/(d-2),_=-p,v=1+p,S=[_,_,v,_,v,v,_,_,v,v,_,v],M=6,T=6,R=3,y=2,g=1,O=new Float32Array(R*T*M),U=new Float32Array(y*T*M),w=new Float32Array(g*T*M);for(let V=0;V<M;V++){const I=V%3*2/3-1,q=V>2?0:-1,D=[I,q,0,I+2/3,q,0,I+2/3,q+1,0,I,q,0,I+2/3,q+1,0,I,q+1,0];O.set(D,R*T*V),U.set(S,y*T*V);const C=[V,V,V,V,V,V];w.set(C,g*T*V)}const F=new Wa;F.setAttribute("position",new Ci(O,R)),F.setAttribute("uv",new Ci(U,y)),F.setAttribute("faceIndex",new Ci(w,g)),t.push(F),l>vr&&l--}return{lodPlanes:t,sizeLods:i,sigmas:s}}function Ug(o,t,i){const s=new Ts(o,t,i);return s.texture.mapping=Cc,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function pc(o,t,i,s,l){o.viewport.set(t,i,s,l),o.scissor.set(t,i,s,l)}function hT(o,t,i){const s=new Float32Array(Ss),l=new tt(0,1,0);return new Xa({name:"SphericalGaussianBlur",defines:{n:Ss,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:_d(),fragmentShader:`

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
		`,blending:Ga,depthTest:!1,depthWrite:!1})}function Lg(){return new Xa({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:_d(),fragmentShader:`

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
		`,blending:Ga,depthTest:!1,depthWrite:!1})}function Ng(){return new Xa({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:_d(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ga,depthTest:!1,depthWrite:!1})}function _d(){return`

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
	`}function dT(o){let t=new WeakMap,i=null;function s(d){if(d&&d.isTexture){const m=d.mapping,p=m===Ch||m===wh,_=m===Tr||m===br;if(p||_){let v=t.get(d);const S=v!==void 0?v.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==S)return i===null&&(i=new Dg(o)),v=p?i.fromEquirectangular(d,v):i.fromCubemap(d,v),v.texture.pmremVersion=d.pmremVersion,t.set(d,v),v.texture;if(v!==void 0)return v.texture;{const M=d.image;return p&&M&&M.height>0||_&&M&&l(M)?(i===null&&(i=new Dg(o)),v=p?i.fromEquirectangular(d):i.fromCubemap(d),v.texture.pmremVersion=d.pmremVersion,t.set(d,v),d.addEventListener("dispose",u),v.texture):null}}}return d}function l(d){let m=0;const p=6;for(let _=0;_<p;_++)d[_]!==void 0&&m++;return m===p}function u(d){const m=d.target;m.removeEventListener("dispose",u);const p=t.get(m);p!==void 0&&(t.delete(m),p.dispose())}function h(){t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:h}}function pT(o){const t={};function i(s){if(t[s]!==void 0)return t[s];let l;switch(s){case"WEBGL_depth_texture":l=o.getExtension("WEBGL_depth_texture")||o.getExtension("MOZ_WEBGL_depth_texture")||o.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":l=o.getExtension("EXT_texture_filter_anisotropic")||o.getExtension("MOZ_EXT_texture_filter_anisotropic")||o.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":l=o.getExtension("WEBGL_compressed_texture_s3tc")||o.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":l=o.getExtension("WEBGL_compressed_texture_pvrtc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:l=o.getExtension(s)}return t[s]=l,l}return{has:function(s){return i(s)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(s){const l=i(s);return l===null&&yr("THREE.WebGLRenderer: "+s+" extension not supported."),l}}}function mT(o,t,i,s){const l={},u=new WeakMap;function h(v){const S=v.target;S.index!==null&&t.remove(S.index);for(const T in S.attributes)t.remove(S.attributes[T]);S.removeEventListener("dispose",h),delete l[S.id];const M=u.get(S);M&&(t.remove(M),u.delete(S)),s.releaseStatesOfGeometry(S),S.isInstancedBufferGeometry===!0&&delete S._maxInstanceCount,i.memory.geometries--}function d(v,S){return l[S.id]===!0||(S.addEventListener("dispose",h),l[S.id]=!0,i.memory.geometries++),S}function m(v){const S=v.attributes;for(const M in S)t.update(S[M],o.ARRAY_BUFFER)}function p(v){const S=[],M=v.index,T=v.attributes.position;let R=0;if(M!==null){const O=M.array;R=M.version;for(let U=0,w=O.length;U<w;U+=3){const F=O[U+0],V=O[U+1],I=O[U+2];S.push(F,V,V,I,I,F)}}else if(T!==void 0){const O=T.array;R=T.version;for(let U=0,w=O.length/3-1;U<w;U+=3){const F=U+0,V=U+1,I=U+2;S.push(F,V,V,I,I,F)}}else return;const y=new(fv(S)?gv:_v)(S,1);y.version=R;const g=u.get(v);g&&t.remove(g),u.set(v,y)}function _(v){const S=u.get(v);if(S){const M=v.index;M!==null&&S.version<M.version&&p(v)}else p(v);return u.get(v)}return{get:d,update:m,getWireframeAttribute:_}}function _T(o,t,i){let s;function l(S){s=S}let u,h;function d(S){u=S.type,h=S.bytesPerElement}function m(S,M){o.drawElements(s,M,u,S*h),i.update(M,s,1)}function p(S,M,T){T!==0&&(o.drawElementsInstanced(s,M,u,S*h,T),i.update(M,s,T))}function _(S,M,T){if(T===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,M,0,u,S,0,T);let y=0;for(let g=0;g<T;g++)y+=M[g];i.update(y,s,1)}function v(S,M,T,R){if(T===0)return;const y=t.get("WEBGL_multi_draw");if(y===null)for(let g=0;g<S.length;g++)p(S[g]/h,M[g],R[g]);else{y.multiDrawElementsInstancedWEBGL(s,M,0,u,S,0,R,0,T);let g=0;for(let O=0;O<T;O++)g+=M[O]*R[O];i.update(g,s,1)}}this.setMode=l,this.setIndex=d,this.render=m,this.renderInstances=p,this.renderMultiDraw=_,this.renderMultiDrawInstances=v}function gT(o){const t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function s(u,h,d){switch(i.calls++,h){case o.TRIANGLES:i.triangles+=d*(u/3);break;case o.LINES:i.lines+=d*(u/2);break;case o.LINE_STRIP:i.lines+=d*(u-1);break;case o.LINE_LOOP:i.lines+=d*u;break;case o.POINTS:i.points+=d*u;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",h);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:l,update:s}}function vT(o,t,i){const s=new WeakMap,l=new $e;function u(h,d,m){const p=h.morphTargetInfluences,_=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,v=_!==void 0?_.length:0;let S=s.get(d);if(S===void 0||S.count!==v){let C=function(){q.dispose(),s.delete(d),d.removeEventListener("dispose",C)};var M=C;S!==void 0&&S.texture.dispose();const T=d.morphAttributes.position!==void 0,R=d.morphAttributes.normal!==void 0,y=d.morphAttributes.color!==void 0,g=d.morphAttributes.position||[],O=d.morphAttributes.normal||[],U=d.morphAttributes.color||[];let w=0;T===!0&&(w=1),R===!0&&(w=2),y===!0&&(w=3);let F=d.attributes.position.count*w,V=1;F>t.maxTextureSize&&(V=Math.ceil(F/t.maxTextureSize),F=t.maxTextureSize);const I=new Float32Array(F*V*4*v),q=new hv(I,F,V,v);q.type=na,q.needsUpdate=!0;const D=w*4;for(let G=0;G<v;G++){const ot=g[G],rt=O[G],pt=U[G],ut=F*V*4*G;for(let z=0;z<ot.count;z++){const Z=z*D;T===!0&&(l.fromBufferAttribute(ot,z),I[ut+Z+0]=l.x,I[ut+Z+1]=l.y,I[ut+Z+2]=l.z,I[ut+Z+3]=0),R===!0&&(l.fromBufferAttribute(rt,z),I[ut+Z+4]=l.x,I[ut+Z+5]=l.y,I[ut+Z+6]=l.z,I[ut+Z+7]=0),y===!0&&(l.fromBufferAttribute(pt,z),I[ut+Z+8]=l.x,I[ut+Z+9]=l.y,I[ut+Z+10]=l.z,I[ut+Z+11]=pt.itemSize===4?l.w:1)}}S={count:v,texture:q,size:new he(F,V)},s.set(d,S),d.addEventListener("dispose",C)}if(h.isInstancedMesh===!0&&h.morphTexture!==null)m.getUniforms().setValue(o,"morphTexture",h.morphTexture,i);else{let T=0;for(let y=0;y<p.length;y++)T+=p[y];const R=d.morphTargetsRelative?1:1-T;m.getUniforms().setValue(o,"morphTargetBaseInfluence",R),m.getUniforms().setValue(o,"morphTargetInfluences",p)}m.getUniforms().setValue(o,"morphTargetsTexture",S.texture,i),m.getUniforms().setValue(o,"morphTargetsTextureSize",S.size)}return{update:u}}function ST(o,t,i,s){let l=new WeakMap;function u(m){const p=s.render.frame,_=m.geometry,v=t.get(m,_);if(l.get(v)!==p&&(t.update(v),l.set(v,p)),m.isInstancedMesh&&(m.hasEventListener("dispose",d)===!1&&m.addEventListener("dispose",d),l.get(m)!==p&&(i.update(m.instanceMatrix,o.ARRAY_BUFFER),m.instanceColor!==null&&i.update(m.instanceColor,o.ARRAY_BUFFER),l.set(m,p))),m.isSkinnedMesh){const S=m.skeleton;l.get(S)!==p&&(S.update(),l.set(S,p))}return v}function h(){l=new WeakMap}function d(m){const p=m.target;p.removeEventListener("dispose",d),i.remove(p.instanceMatrix),p.instanceColor!==null&&i.remove(p.instanceColor)}return{update:u,dispose:h}}const Tv=new Vn,Og=new Mv(1,1),bv=new hv,Av=new Yx,Rv=new xv,Pg=[],zg=[],Ig=new Float32Array(16),Bg=new Float32Array(9),Fg=new Float32Array(4);function Cr(o,t,i){const s=o[0];if(s<=0||s>0)return o;const l=t*i;let u=Pg[l];if(u===void 0&&(u=new Float32Array(l),Pg[l]=u),t!==0){s.toArray(u,0);for(let h=1,d=0;h!==t;++h)d+=i,o[h].toArray(u,d)}return u}function fn(o,t){if(o.length!==t.length)return!1;for(let i=0,s=o.length;i<s;i++)if(o[i]!==t[i])return!1;return!0}function hn(o,t){for(let i=0,s=t.length;i<s;i++)o[i]=t[i]}function Nc(o,t){let i=zg[t];i===void 0&&(i=new Int32Array(t),zg[t]=i);for(let s=0;s!==t;++s)i[s]=o.allocateTextureUnit();return i}function xT(o,t){const i=this.cache;i[0]!==t&&(o.uniform1f(this.addr,t),i[0]=t)}function yT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(o.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(fn(i,t))return;o.uniform2fv(this.addr,t),hn(i,t)}}function MT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(o.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else if(t.r!==void 0)(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)&&(o.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b);else{if(fn(i,t))return;o.uniform3fv(this.addr,t),hn(i,t)}}function ET(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(o.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(fn(i,t))return;o.uniform4fv(this.addr,t),hn(i,t)}}function TT(o,t){const i=this.cache,s=t.elements;if(s===void 0){if(fn(i,t))return;o.uniformMatrix2fv(this.addr,!1,t),hn(i,t)}else{if(fn(i,s))return;Fg.set(s),o.uniformMatrix2fv(this.addr,!1,Fg),hn(i,s)}}function bT(o,t){const i=this.cache,s=t.elements;if(s===void 0){if(fn(i,t))return;o.uniformMatrix3fv(this.addr,!1,t),hn(i,t)}else{if(fn(i,s))return;Bg.set(s),o.uniformMatrix3fv(this.addr,!1,Bg),hn(i,s)}}function AT(o,t){const i=this.cache,s=t.elements;if(s===void 0){if(fn(i,t))return;o.uniformMatrix4fv(this.addr,!1,t),hn(i,t)}else{if(fn(i,s))return;Ig.set(s),o.uniformMatrix4fv(this.addr,!1,Ig),hn(i,s)}}function RT(o,t){const i=this.cache;i[0]!==t&&(o.uniform1i(this.addr,t),i[0]=t)}function CT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(o.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(fn(i,t))return;o.uniform2iv(this.addr,t),hn(i,t)}}function wT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(o.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(fn(i,t))return;o.uniform3iv(this.addr,t),hn(i,t)}}function DT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(o.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(fn(i,t))return;o.uniform4iv(this.addr,t),hn(i,t)}}function UT(o,t){const i=this.cache;i[0]!==t&&(o.uniform1ui(this.addr,t),i[0]=t)}function LT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(o.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(fn(i,t))return;o.uniform2uiv(this.addr,t),hn(i,t)}}function NT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(o.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(fn(i,t))return;o.uniform3uiv(this.addr,t),hn(i,t)}}function OT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(o.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(fn(i,t))return;o.uniform4uiv(this.addr,t),hn(i,t)}}function PT(o,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l);let u;this.type===o.SAMPLER_2D_SHADOW?(Og.compareFunction=uv,u=Og):u=Tv,i.setTexture2D(t||u,l)}function zT(o,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l),i.setTexture3D(t||Av,l)}function IT(o,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l),i.setTextureCube(t||Rv,l)}function BT(o,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l),i.setTexture2DArray(t||bv,l)}function FT(o){switch(o){case 5126:return xT;case 35664:return yT;case 35665:return MT;case 35666:return ET;case 35674:return TT;case 35675:return bT;case 35676:return AT;case 5124:case 35670:return RT;case 35667:case 35671:return CT;case 35668:case 35672:return wT;case 35669:case 35673:return DT;case 5125:return UT;case 36294:return LT;case 36295:return NT;case 36296:return OT;case 35678:case 36198:case 36298:case 36306:case 35682:return PT;case 35679:case 36299:case 36307:return zT;case 35680:case 36300:case 36308:case 36293:return IT;case 36289:case 36303:case 36311:case 36292:return BT}}function HT(o,t){o.uniform1fv(this.addr,t)}function GT(o,t){const i=Cr(t,this.size,2);o.uniform2fv(this.addr,i)}function VT(o,t){const i=Cr(t,this.size,3);o.uniform3fv(this.addr,i)}function kT(o,t){const i=Cr(t,this.size,4);o.uniform4fv(this.addr,i)}function XT(o,t){const i=Cr(t,this.size,4);o.uniformMatrix2fv(this.addr,!1,i)}function WT(o,t){const i=Cr(t,this.size,9);o.uniformMatrix3fv(this.addr,!1,i)}function qT(o,t){const i=Cr(t,this.size,16);o.uniformMatrix4fv(this.addr,!1,i)}function YT(o,t){o.uniform1iv(this.addr,t)}function jT(o,t){o.uniform2iv(this.addr,t)}function ZT(o,t){o.uniform3iv(this.addr,t)}function KT(o,t){o.uniform4iv(this.addr,t)}function QT(o,t){o.uniform1uiv(this.addr,t)}function JT(o,t){o.uniform2uiv(this.addr,t)}function $T(o,t){o.uniform3uiv(this.addr,t)}function tb(o,t){o.uniform4uiv(this.addr,t)}function eb(o,t,i){const s=this.cache,l=t.length,u=Nc(i,l);fn(s,u)||(o.uniform1iv(this.addr,u),hn(s,u));for(let h=0;h!==l;++h)i.setTexture2D(t[h]||Tv,u[h])}function nb(o,t,i){const s=this.cache,l=t.length,u=Nc(i,l);fn(s,u)||(o.uniform1iv(this.addr,u),hn(s,u));for(let h=0;h!==l;++h)i.setTexture3D(t[h]||Av,u[h])}function ib(o,t,i){const s=this.cache,l=t.length,u=Nc(i,l);fn(s,u)||(o.uniform1iv(this.addr,u),hn(s,u));for(let h=0;h!==l;++h)i.setTextureCube(t[h]||Rv,u[h])}function ab(o,t,i){const s=this.cache,l=t.length,u=Nc(i,l);fn(s,u)||(o.uniform1iv(this.addr,u),hn(s,u));for(let h=0;h!==l;++h)i.setTexture2DArray(t[h]||bv,u[h])}function sb(o){switch(o){case 5126:return HT;case 35664:return GT;case 35665:return VT;case 35666:return kT;case 35674:return XT;case 35675:return WT;case 35676:return qT;case 5124:case 35670:return YT;case 35667:case 35671:return jT;case 35668:case 35672:return ZT;case 35669:case 35673:return KT;case 5125:return QT;case 36294:return JT;case 36295:return $T;case 36296:return tb;case 35678:case 36198:case 36298:case 36306:case 35682:return eb;case 35679:case 36299:case 36307:return nb;case 35680:case 36300:case 36308:case 36293:return ib;case 36289:case 36303:case 36311:case 36292:return ab}}class rb{constructor(t,i,s){this.id=t,this.addr=s,this.cache=[],this.type=i.type,this.setValue=FT(i.type)}}class ob{constructor(t,i,s){this.id=t,this.addr=s,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=sb(i.type)}}class lb{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,i,s){const l=this.seq;for(let u=0,h=l.length;u!==h;++u){const d=l[u];d.setValue(t,i[d.id],s)}}}const gh=/(\w+)(\])?(\[|\.)?/g;function Hg(o,t){o.seq.push(t),o.map[t.id]=t}function cb(o,t,i){const s=o.name,l=s.length;for(gh.lastIndex=0;;){const u=gh.exec(s),h=gh.lastIndex;let d=u[1];const m=u[2]==="]",p=u[3];if(m&&(d=d|0),p===void 0||p==="["&&h+2===l){Hg(i,p===void 0?new rb(d,o,t):new ob(d,o,t));break}else{let v=i.map[d];v===void 0&&(v=new lb(d),Hg(i,v)),i=v}}}class Tc{constructor(t,i){this.seq=[],this.map={};const s=t.getProgramParameter(i,t.ACTIVE_UNIFORMS);for(let l=0;l<s;++l){const u=t.getActiveUniform(i,l),h=t.getUniformLocation(i,u.name);cb(u,h,this)}}setValue(t,i,s,l){const u=this.map[i];u!==void 0&&u.setValue(t,s,l)}setOptional(t,i,s){const l=i[s];l!==void 0&&this.setValue(t,s,l)}static upload(t,i,s,l){for(let u=0,h=i.length;u!==h;++u){const d=i[u],m=s[d.id];m.needsUpdate!==!1&&d.setValue(t,m.value,l)}}static seqWithValue(t,i){const s=[];for(let l=0,u=t.length;l!==u;++l){const h=t[l];h.id in i&&s.push(h)}return s}}function Gg(o,t,i){const s=o.createShader(t);return o.shaderSource(s,i),o.compileShader(s),s}const ub=37297;let fb=0;function hb(o,t){const i=o.split(`
`),s=[],l=Math.max(t-6,0),u=Math.min(t+6,i.length);for(let h=l;h<u;h++){const d=h+1;s.push(`${d===t?">":" "} ${d}: ${i[h]}`)}return s.join(`
`)}const Vg=new re;function db(o){Ae._getMatrix(Vg,Ae.workingColorSpace,o);const t=`mat3( ${Vg.elements.map(i=>i.toFixed(4))} )`;switch(Ae.getTransfer(o)){case bc:return[t,"LinearTransferOETF"];case Ie:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",o),[t,"LinearTransferOETF"]}}function kg(o,t,i){const s=o.getShaderParameter(t,o.COMPILE_STATUS),l=o.getShaderInfoLog(t).trim();if(s&&l==="")return"";const u=/ERROR: 0:(\d+)/.exec(l);if(u){const h=parseInt(u[1]);return i.toUpperCase()+`

`+l+`

`+hb(o.getShaderSource(t),h)}else return l}function pb(o,t){const i=db(t);return[`vec4 ${o}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}function mb(o,t){let i;switch(t){case gx:i="Linear";break;case vx:i="Reinhard";break;case Sx:i="Cineon";break;case xx:i="ACESFilmic";break;case Mx:i="AgX";break;case Ex:i="Neutral";break;case yx:i="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),i="Linear"}return"vec3 "+o+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const mc=new tt;function _b(){Ae.getLuminanceCoefficients(mc);const o=mc.x.toFixed(4),t=mc.y.toFixed(4),i=mc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${t}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function gb(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(wo).join(`
`)}function vb(o){const t=[];for(const i in o){const s=o[i];s!==!1&&t.push("#define "+i+" "+s)}return t.join(`
`)}function Sb(o,t){const i={},s=o.getProgramParameter(t,o.ACTIVE_ATTRIBUTES);for(let l=0;l<s;l++){const u=o.getActiveAttrib(t,l),h=u.name;let d=1;u.type===o.FLOAT_MAT2&&(d=2),u.type===o.FLOAT_MAT3&&(d=3),u.type===o.FLOAT_MAT4&&(d=4),i[h]={type:u.type,location:o.getAttribLocation(t,h),locationSize:d}}return i}function wo(o){return o!==""}function Xg(o,t){const i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Wg(o,t){return o.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const xb=/^[ \t]*#include +<([\w\d./]+)>/gm;function sd(o){return o.replace(xb,Mb)}const yb=new Map;function Mb(o,t){let i=le[t];if(i===void 0){const s=yb.get(t);if(s!==void 0)i=le[s],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,s);else throw new Error("Can not resolve #include <"+t+">")}return sd(i)}const Eb=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function qg(o){return o.replace(Eb,Tb)}function Tb(o,t,i,s){let l="";for(let u=parseInt(t);u<parseInt(i);u++)l+=s.replace(/\[\s*i\s*\]/g,"[ "+u+" ]").replace(/UNROLLED_LOOP_INDEX/g,u);return l}function Yg(o){let t=`precision ${o.precision} float;
	precision ${o.precision} int;
	precision ${o.precision} sampler2D;
	precision ${o.precision} samplerCube;
	precision ${o.precision} sampler3D;
	precision ${o.precision} sampler2DArray;
	precision ${o.precision} sampler2DShadow;
	precision ${o.precision} samplerCubeShadow;
	precision ${o.precision} sampler2DArrayShadow;
	precision ${o.precision} isampler2D;
	precision ${o.precision} isampler3D;
	precision ${o.precision} isamplerCube;
	precision ${o.precision} isampler2DArray;
	precision ${o.precision} usampler2D;
	precision ${o.precision} usampler3D;
	precision ${o.precision} usamplerCube;
	precision ${o.precision} usampler2DArray;
	`;return o.precision==="highp"?t+=`
#define HIGH_PRECISION`:o.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function bb(o){let t="SHADOWMAP_TYPE_BASIC";return o.shadowMapType===$g?t="SHADOWMAP_TYPE_PCF":o.shadowMapType===KS?t="SHADOWMAP_TYPE_PCF_SOFT":o.shadowMapType===ta&&(t="SHADOWMAP_TYPE_VSM"),t}function Ab(o){let t="ENVMAP_TYPE_CUBE";if(o.envMap)switch(o.envMapMode){case Tr:case br:t="ENVMAP_TYPE_CUBE";break;case Cc:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Rb(o){let t="ENVMAP_MODE_REFLECTION";if(o.envMap)switch(o.envMapMode){case br:t="ENVMAP_MODE_REFRACTION";break}return t}function Cb(o){let t="ENVMAP_BLENDING_NONE";if(o.envMap)switch(o.combine){case tv:t="ENVMAP_BLENDING_MULTIPLY";break;case mx:t="ENVMAP_BLENDING_MIX";break;case _x:t="ENVMAP_BLENDING_ADD";break}return t}function wb(o){const t=o.envMapCubeUVHeight;if(t===null)return null;const i=Math.log2(t)-2,s=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,i),7*16)),texelHeight:s,maxMip:i}}function Db(o,t,i,s){const l=o.getContext(),u=i.defines;let h=i.vertexShader,d=i.fragmentShader;const m=bb(i),p=Ab(i),_=Rb(i),v=Cb(i),S=wb(i),M=gb(i),T=vb(u),R=l.createProgram();let y,g,O=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(y=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T].filter(wo).join(`
`),y.length>0&&(y+=`
`),g=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T].filter(wo).join(`
`),g.length>0&&(g+=`
`)):(y=[Yg(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+_:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(wo).join(`
`),g=[Yg(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+_:"",i.envMap?"#define "+v:"",S?"#define CUBEUV_TEXEL_WIDTH "+S.texelWidth:"",S?"#define CUBEUV_TEXEL_HEIGHT "+S.texelHeight:"",S?"#define CUBEUV_MAX_MIP "+S.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Va?"#define TONE_MAPPING":"",i.toneMapping!==Va?le.tonemapping_pars_fragment:"",i.toneMapping!==Va?mb("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",le.colorspace_pars_fragment,pb("linearToOutputTexel",i.outputColorSpace),_b(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(wo).join(`
`)),h=sd(h),h=Xg(h,i),h=Wg(h,i),d=sd(d),d=Xg(d,i),d=Wg(d,i),h=qg(h),d=qg(d),i.isRawShaderMaterial!==!0&&(O=`#version 300 es
`,y=[M,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,g=["#define varying in",i.glslVersion===og?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===og?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const U=O+y+h,w=O+g+d,F=Gg(l,l.VERTEX_SHADER,U),V=Gg(l,l.FRAGMENT_SHADER,w);l.attachShader(R,F),l.attachShader(R,V),i.index0AttributeName!==void 0?l.bindAttribLocation(R,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(R,0,"position"),l.linkProgram(R);function I(G){if(o.debug.checkShaderErrors){const ot=l.getProgramInfoLog(R).trim(),rt=l.getShaderInfoLog(F).trim(),pt=l.getShaderInfoLog(V).trim();let ut=!0,z=!0;if(l.getProgramParameter(R,l.LINK_STATUS)===!1)if(ut=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(l,R,F,V);else{const Z=kg(l,F,"vertex"),Y=kg(l,V,"fragment");console.error("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(R,l.VALIDATE_STATUS)+`

Material Name: `+G.name+`
Material Type: `+G.type+`

Program Info Log: `+ot+`
`+Z+`
`+Y)}else ot!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ot):(rt===""||pt==="")&&(z=!1);z&&(G.diagnostics={runnable:ut,programLog:ot,vertexShader:{log:rt,prefix:y},fragmentShader:{log:pt,prefix:g}})}l.deleteShader(F),l.deleteShader(V),q=new Tc(l,R),D=Sb(l,R)}let q;this.getUniforms=function(){return q===void 0&&I(this),q};let D;this.getAttributes=function(){return D===void 0&&I(this),D};let C=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=l.getProgramParameter(R,ub)),C},this.destroy=function(){s.releaseStatesOfProgram(this),l.deleteProgram(R),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=fb++,this.cacheKey=t,this.usedTimes=1,this.program=R,this.vertexShader=F,this.fragmentShader=V,this}let Ub=0;class Lb{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const i=t.vertexShader,s=t.fragmentShader,l=this._getShaderStage(i),u=this._getShaderStage(s),h=this._getShaderCacheForMaterial(t);return h.has(l)===!1&&(h.add(l),l.usedTimes++),h.has(u)===!1&&(h.add(u),u.usedTimes++),this}remove(t){const i=this.materialCache.get(t);for(const s of i)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const i=this.materialCache;let s=i.get(t);return s===void 0&&(s=new Set,i.set(t,s)),s}_getShaderStage(t){const i=this.shaderCache;let s=i.get(t);return s===void 0&&(s=new Nb(t),i.set(t,s)),s}}class Nb{constructor(t){this.id=Ub++,this.code=t,this.usedTimes=0}}function Ob(o,t,i,s,l,u,h){const d=new pv,m=new Lb,p=new Set,_=[],v=l.logarithmicDepthBuffer,S=l.vertexTextures;let M=l.precision;const T={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function R(D){return p.add(D),D===0?"uv":`uv${D}`}function y(D,C,G,ot,rt){const pt=ot.fog,ut=rt.geometry,z=D.isMeshStandardMaterial?ot.environment:null,Z=(D.isMeshStandardMaterial?i:t).get(D.envMap||z),Y=Z&&Z.mapping===Cc?Z.image.height:null,Mt=T[D.type];D.precision!==null&&(M=l.getMaxPrecision(D.precision),M!==D.precision&&console.warn("THREE.WebGLProgram.getParameters:",D.precision,"not supported, using",M,"instead."));const L=ut.morphAttributes.position||ut.morphAttributes.normal||ut.morphAttributes.color,$=L!==void 0?L.length:0;let vt=0;ut.morphAttributes.position!==void 0&&(vt=1),ut.morphAttributes.normal!==void 0&&(vt=2),ut.morphAttributes.color!==void 0&&(vt=3);let xt,Q,mt,yt;if(Mt){const Te=Ai[Mt];xt=Te.vertexShader,Q=Te.fragmentShader}else xt=D.vertexShader,Q=D.fragmentShader,m.update(D),mt=m.getVertexShaderID(D),yt=m.getFragmentShaderID(D);const At=o.getRenderTarget(),Ct=o.state.buffers.depth.getReversed(),oe=rt.isInstancedMesh===!0,Kt=rt.isBatchedMesh===!0,Ne=!!D.map,Fe=!!D.matcap,ge=!!Z,B=!!D.aoMap,Sn=!!D.lightMap,Me=!!D.bumpMap,de=!!D.normalMap,Gt=!!D.displacementMap,ve=!!D.emissiveMap,Yt=!!D.metalnessMap,ae=!!D.roughnessMap,Ke=D.anisotropy>0,N=D.clearcoat>0,E=D.dispersion>0,et=D.iridescence>0,ft=D.sheen>0,dt=D.transmission>0,lt=Ke&&!!D.anisotropyMap,Ot=N&&!!D.clearcoatMap,Dt=N&&!!D.clearcoatNormalMap,Ht=N&&!!D.clearcoatRoughnessMap,Vt=et&&!!D.iridescenceMap,St=et&&!!D.iridescenceThicknessMap,Pt=ft&&!!D.sheenColorMap,Wt=ft&&!!D.sheenRoughnessMap,qt=!!D.specularMap,Rt=!!D.specularColorMap,ie=!!D.specularIntensityMap,k=dt&&!!D.transmissionMap,Ut=dt&&!!D.thicknessMap,Et=!!D.gradientMap,zt=!!D.alphaMap,bt=D.alphaTest>0,gt=!!D.alphaHash,Bt=!!D.extensions;let ne=Va;D.toneMapped&&(At===null||At.isXRRenderTarget===!0)&&(ne=o.toneMapping);const we={shaderID:Mt,shaderType:D.type,shaderName:D.name,vertexShader:xt,fragmentShader:Q,defines:D.defines,customVertexShaderID:mt,customFragmentShaderID:yt,isRawShaderMaterial:D.isRawShaderMaterial===!0,glslVersion:D.glslVersion,precision:M,batching:Kt,batchingColor:Kt&&rt._colorsTexture!==null,instancing:oe,instancingColor:oe&&rt.instanceColor!==null,instancingMorph:oe&&rt.morphTexture!==null,supportsVertexTextures:S,outputColorSpace:At===null?o.outputColorSpace:At.isXRRenderTarget===!0?At.texture.colorSpace:Ar,alphaToCoverage:!!D.alphaToCoverage,map:Ne,matcap:Fe,envMap:ge,envMapMode:ge&&Z.mapping,envMapCubeUVHeight:Y,aoMap:B,lightMap:Sn,bumpMap:Me,normalMap:de,displacementMap:S&&Gt,emissiveMap:ve,normalMapObjectSpace:de&&D.normalMapType===Cx,normalMapTangentSpace:de&&D.normalMapType===Rx,metalnessMap:Yt,roughnessMap:ae,anisotropy:Ke,anisotropyMap:lt,clearcoat:N,clearcoatMap:Ot,clearcoatNormalMap:Dt,clearcoatRoughnessMap:Ht,dispersion:E,iridescence:et,iridescenceMap:Vt,iridescenceThicknessMap:St,sheen:ft,sheenColorMap:Pt,sheenRoughnessMap:Wt,specularMap:qt,specularColorMap:Rt,specularIntensityMap:ie,transmission:dt,transmissionMap:k,thicknessMap:Ut,gradientMap:Et,opaque:D.transparent===!1&&D.blending===xr&&D.alphaToCoverage===!1,alphaMap:zt,alphaTest:bt,alphaHash:gt,combine:D.combine,mapUv:Ne&&R(D.map.channel),aoMapUv:B&&R(D.aoMap.channel),lightMapUv:Sn&&R(D.lightMap.channel),bumpMapUv:Me&&R(D.bumpMap.channel),normalMapUv:de&&R(D.normalMap.channel),displacementMapUv:Gt&&R(D.displacementMap.channel),emissiveMapUv:ve&&R(D.emissiveMap.channel),metalnessMapUv:Yt&&R(D.metalnessMap.channel),roughnessMapUv:ae&&R(D.roughnessMap.channel),anisotropyMapUv:lt&&R(D.anisotropyMap.channel),clearcoatMapUv:Ot&&R(D.clearcoatMap.channel),clearcoatNormalMapUv:Dt&&R(D.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ht&&R(D.clearcoatRoughnessMap.channel),iridescenceMapUv:Vt&&R(D.iridescenceMap.channel),iridescenceThicknessMapUv:St&&R(D.iridescenceThicknessMap.channel),sheenColorMapUv:Pt&&R(D.sheenColorMap.channel),sheenRoughnessMapUv:Wt&&R(D.sheenRoughnessMap.channel),specularMapUv:qt&&R(D.specularMap.channel),specularColorMapUv:Rt&&R(D.specularColorMap.channel),specularIntensityMapUv:ie&&R(D.specularIntensityMap.channel),transmissionMapUv:k&&R(D.transmissionMap.channel),thicknessMapUv:Ut&&R(D.thicknessMap.channel),alphaMapUv:zt&&R(D.alphaMap.channel),vertexTangents:!!ut.attributes.tangent&&(de||Ke),vertexColors:D.vertexColors,vertexAlphas:D.vertexColors===!0&&!!ut.attributes.color&&ut.attributes.color.itemSize===4,pointsUvs:rt.isPoints===!0&&!!ut.attributes.uv&&(Ne||zt),fog:!!pt,useFog:D.fog===!0,fogExp2:!!pt&&pt.isFogExp2,flatShading:D.flatShading===!0,sizeAttenuation:D.sizeAttenuation===!0,logarithmicDepthBuffer:v,reverseDepthBuffer:Ct,skinning:rt.isSkinnedMesh===!0,morphTargets:ut.morphAttributes.position!==void 0,morphNormals:ut.morphAttributes.normal!==void 0,morphColors:ut.morphAttributes.color!==void 0,morphTargetsCount:$,morphTextureStride:vt,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numClippingPlanes:h.numPlanes,numClipIntersection:h.numIntersection,dithering:D.dithering,shadowMapEnabled:o.shadowMap.enabled&&G.length>0,shadowMapType:o.shadowMap.type,toneMapping:ne,decodeVideoTexture:Ne&&D.map.isVideoTexture===!0&&Ae.getTransfer(D.map.colorSpace)===Ie,decodeVideoTextureEmissive:ve&&D.emissiveMap.isVideoTexture===!0&&Ae.getTransfer(D.emissiveMap.colorSpace)===Ie,premultipliedAlpha:D.premultipliedAlpha,doubleSided:D.side===ea,flipSided:D.side===Gn,useDepthPacking:D.depthPacking>=0,depthPacking:D.depthPacking||0,index0AttributeName:D.index0AttributeName,extensionClipCullDistance:Bt&&D.extensions.clipCullDistance===!0&&s.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Bt&&D.extensions.multiDraw===!0||Kt)&&s.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:s.has("KHR_parallel_shader_compile"),customProgramCacheKey:D.customProgramCacheKey()};return we.vertexUv1s=p.has(1),we.vertexUv2s=p.has(2),we.vertexUv3s=p.has(3),p.clear(),we}function g(D){const C=[];if(D.shaderID?C.push(D.shaderID):(C.push(D.customVertexShaderID),C.push(D.customFragmentShaderID)),D.defines!==void 0)for(const G in D.defines)C.push(G),C.push(D.defines[G]);return D.isRawShaderMaterial===!1&&(O(C,D),U(C,D),C.push(o.outputColorSpace)),C.push(D.customProgramCacheKey),C.join()}function O(D,C){D.push(C.precision),D.push(C.outputColorSpace),D.push(C.envMapMode),D.push(C.envMapCubeUVHeight),D.push(C.mapUv),D.push(C.alphaMapUv),D.push(C.lightMapUv),D.push(C.aoMapUv),D.push(C.bumpMapUv),D.push(C.normalMapUv),D.push(C.displacementMapUv),D.push(C.emissiveMapUv),D.push(C.metalnessMapUv),D.push(C.roughnessMapUv),D.push(C.anisotropyMapUv),D.push(C.clearcoatMapUv),D.push(C.clearcoatNormalMapUv),D.push(C.clearcoatRoughnessMapUv),D.push(C.iridescenceMapUv),D.push(C.iridescenceThicknessMapUv),D.push(C.sheenColorMapUv),D.push(C.sheenRoughnessMapUv),D.push(C.specularMapUv),D.push(C.specularColorMapUv),D.push(C.specularIntensityMapUv),D.push(C.transmissionMapUv),D.push(C.thicknessMapUv),D.push(C.combine),D.push(C.fogExp2),D.push(C.sizeAttenuation),D.push(C.morphTargetsCount),D.push(C.morphAttributeCount),D.push(C.numDirLights),D.push(C.numPointLights),D.push(C.numSpotLights),D.push(C.numSpotLightMaps),D.push(C.numHemiLights),D.push(C.numRectAreaLights),D.push(C.numDirLightShadows),D.push(C.numPointLightShadows),D.push(C.numSpotLightShadows),D.push(C.numSpotLightShadowsWithMaps),D.push(C.numLightProbes),D.push(C.shadowMapType),D.push(C.toneMapping),D.push(C.numClippingPlanes),D.push(C.numClipIntersection),D.push(C.depthPacking)}function U(D,C){d.disableAll(),C.supportsVertexTextures&&d.enable(0),C.instancing&&d.enable(1),C.instancingColor&&d.enable(2),C.instancingMorph&&d.enable(3),C.matcap&&d.enable(4),C.envMap&&d.enable(5),C.normalMapObjectSpace&&d.enable(6),C.normalMapTangentSpace&&d.enable(7),C.clearcoat&&d.enable(8),C.iridescence&&d.enable(9),C.alphaTest&&d.enable(10),C.vertexColors&&d.enable(11),C.vertexAlphas&&d.enable(12),C.vertexUv1s&&d.enable(13),C.vertexUv2s&&d.enable(14),C.vertexUv3s&&d.enable(15),C.vertexTangents&&d.enable(16),C.anisotropy&&d.enable(17),C.alphaHash&&d.enable(18),C.batching&&d.enable(19),C.dispersion&&d.enable(20),C.batchingColor&&d.enable(21),D.push(d.mask),d.disableAll(),C.fog&&d.enable(0),C.useFog&&d.enable(1),C.flatShading&&d.enable(2),C.logarithmicDepthBuffer&&d.enable(3),C.reverseDepthBuffer&&d.enable(4),C.skinning&&d.enable(5),C.morphTargets&&d.enable(6),C.morphNormals&&d.enable(7),C.morphColors&&d.enable(8),C.premultipliedAlpha&&d.enable(9),C.shadowMapEnabled&&d.enable(10),C.doubleSided&&d.enable(11),C.flipSided&&d.enable(12),C.useDepthPacking&&d.enable(13),C.dithering&&d.enable(14),C.transmission&&d.enable(15),C.sheen&&d.enable(16),C.opaque&&d.enable(17),C.pointsUvs&&d.enable(18),C.decodeVideoTexture&&d.enable(19),C.decodeVideoTextureEmissive&&d.enable(20),C.alphaToCoverage&&d.enable(21),D.push(d.mask)}function w(D){const C=T[D.type];let G;if(C){const ot=Ai[C];G=ry.clone(ot.uniforms)}else G=D.uniforms;return G}function F(D,C){let G;for(let ot=0,rt=_.length;ot<rt;ot++){const pt=_[ot];if(pt.cacheKey===C){G=pt,++G.usedTimes;break}}return G===void 0&&(G=new Db(o,C,D,u),_.push(G)),G}function V(D){if(--D.usedTimes===0){const C=_.indexOf(D);_[C]=_[_.length-1],_.pop(),D.destroy()}}function I(D){m.remove(D)}function q(){m.dispose()}return{getParameters:y,getProgramCacheKey:g,getUniforms:w,acquireProgram:F,releaseProgram:V,releaseShaderCache:I,programs:_,dispose:q}}function Pb(){let o=new WeakMap;function t(h){return o.has(h)}function i(h){let d=o.get(h);return d===void 0&&(d={},o.set(h,d)),d}function s(h){o.delete(h)}function l(h,d,m){o.get(h)[d]=m}function u(){o=new WeakMap}return{has:t,get:i,remove:s,update:l,dispose:u}}function zb(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.material.id!==t.material.id?o.material.id-t.material.id:o.z!==t.z?o.z-t.z:o.id-t.id}function jg(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.z!==t.z?t.z-o.z:o.id-t.id}function Zg(){const o=[];let t=0;const i=[],s=[],l=[];function u(){t=0,i.length=0,s.length=0,l.length=0}function h(v,S,M,T,R,y){let g=o[t];return g===void 0?(g={id:v.id,object:v,geometry:S,material:M,groupOrder:T,renderOrder:v.renderOrder,z:R,group:y},o[t]=g):(g.id=v.id,g.object=v,g.geometry=S,g.material=M,g.groupOrder=T,g.renderOrder=v.renderOrder,g.z=R,g.group=y),t++,g}function d(v,S,M,T,R,y){const g=h(v,S,M,T,R,y);M.transmission>0?s.push(g):M.transparent===!0?l.push(g):i.push(g)}function m(v,S,M,T,R,y){const g=h(v,S,M,T,R,y);M.transmission>0?s.unshift(g):M.transparent===!0?l.unshift(g):i.unshift(g)}function p(v,S){i.length>1&&i.sort(v||zb),s.length>1&&s.sort(S||jg),l.length>1&&l.sort(S||jg)}function _(){for(let v=t,S=o.length;v<S;v++){const M=o[v];if(M.id===null)break;M.id=null,M.object=null,M.geometry=null,M.material=null,M.group=null}}return{opaque:i,transmissive:s,transparent:l,init:u,push:d,unshift:m,finish:_,sort:p}}function Ib(){let o=new WeakMap;function t(s,l){const u=o.get(s);let h;return u===void 0?(h=new Zg,o.set(s,[h])):l>=u.length?(h=new Zg,u.push(h)):h=u[l],h}function i(){o=new WeakMap}return{get:t,dispose:i}}function Bb(){const o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let i;switch(t.type){case"DirectionalLight":i={direction:new tt,color:new Le};break;case"SpotLight":i={position:new tt,direction:new tt,color:new Le,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new tt,color:new Le,distance:0,decay:0};break;case"HemisphereLight":i={direction:new tt,skyColor:new Le,groundColor:new Le};break;case"RectAreaLight":i={color:new Le,position:new tt,halfWidth:new tt,halfHeight:new tt};break}return o[t.id]=i,i}}}function Fb(){const o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let i;switch(t.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new he};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new he};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new he,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[t.id]=i,i}}}let Hb=0;function Gb(o,t){return(t.castShadow?2:0)-(o.castShadow?2:0)+(t.map?1:0)-(o.map?1:0)}function Vb(o){const t=new Bb,i=Fb(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)s.probe.push(new tt);const l=new tt,u=new sn,h=new sn;function d(p){let _=0,v=0,S=0;for(let D=0;D<9;D++)s.probe[D].set(0,0,0);let M=0,T=0,R=0,y=0,g=0,O=0,U=0,w=0,F=0,V=0,I=0;p.sort(Gb);for(let D=0,C=p.length;D<C;D++){const G=p[D],ot=G.color,rt=G.intensity,pt=G.distance,ut=G.shadow&&G.shadow.map?G.shadow.map.texture:null;if(G.isAmbientLight)_+=ot.r*rt,v+=ot.g*rt,S+=ot.b*rt;else if(G.isLightProbe){for(let z=0;z<9;z++)s.probe[z].addScaledVector(G.sh.coefficients[z],rt);I++}else if(G.isDirectionalLight){const z=t.get(G);if(z.color.copy(G.color).multiplyScalar(G.intensity),G.castShadow){const Z=G.shadow,Y=i.get(G);Y.shadowIntensity=Z.intensity,Y.shadowBias=Z.bias,Y.shadowNormalBias=Z.normalBias,Y.shadowRadius=Z.radius,Y.shadowMapSize=Z.mapSize,s.directionalShadow[M]=Y,s.directionalShadowMap[M]=ut,s.directionalShadowMatrix[M]=G.shadow.matrix,O++}s.directional[M]=z,M++}else if(G.isSpotLight){const z=t.get(G);z.position.setFromMatrixPosition(G.matrixWorld),z.color.copy(ot).multiplyScalar(rt),z.distance=pt,z.coneCos=Math.cos(G.angle),z.penumbraCos=Math.cos(G.angle*(1-G.penumbra)),z.decay=G.decay,s.spot[R]=z;const Z=G.shadow;if(G.map&&(s.spotLightMap[F]=G.map,F++,Z.updateMatrices(G),G.castShadow&&V++),s.spotLightMatrix[R]=Z.matrix,G.castShadow){const Y=i.get(G);Y.shadowIntensity=Z.intensity,Y.shadowBias=Z.bias,Y.shadowNormalBias=Z.normalBias,Y.shadowRadius=Z.radius,Y.shadowMapSize=Z.mapSize,s.spotShadow[R]=Y,s.spotShadowMap[R]=ut,w++}R++}else if(G.isRectAreaLight){const z=t.get(G);z.color.copy(ot).multiplyScalar(rt),z.halfWidth.set(G.width*.5,0,0),z.halfHeight.set(0,G.height*.5,0),s.rectArea[y]=z,y++}else if(G.isPointLight){const z=t.get(G);if(z.color.copy(G.color).multiplyScalar(G.intensity),z.distance=G.distance,z.decay=G.decay,G.castShadow){const Z=G.shadow,Y=i.get(G);Y.shadowIntensity=Z.intensity,Y.shadowBias=Z.bias,Y.shadowNormalBias=Z.normalBias,Y.shadowRadius=Z.radius,Y.shadowMapSize=Z.mapSize,Y.shadowCameraNear=Z.camera.near,Y.shadowCameraFar=Z.camera.far,s.pointShadow[T]=Y,s.pointShadowMap[T]=ut,s.pointShadowMatrix[T]=G.shadow.matrix,U++}s.point[T]=z,T++}else if(G.isHemisphereLight){const z=t.get(G);z.skyColor.copy(G.color).multiplyScalar(rt),z.groundColor.copy(G.groundColor).multiplyScalar(rt),s.hemi[g]=z,g++}}y>0&&(o.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Lt.LTC_FLOAT_1,s.rectAreaLTC2=Lt.LTC_FLOAT_2):(s.rectAreaLTC1=Lt.LTC_HALF_1,s.rectAreaLTC2=Lt.LTC_HALF_2)),s.ambient[0]=_,s.ambient[1]=v,s.ambient[2]=S;const q=s.hash;(q.directionalLength!==M||q.pointLength!==T||q.spotLength!==R||q.rectAreaLength!==y||q.hemiLength!==g||q.numDirectionalShadows!==O||q.numPointShadows!==U||q.numSpotShadows!==w||q.numSpotMaps!==F||q.numLightProbes!==I)&&(s.directional.length=M,s.spot.length=R,s.rectArea.length=y,s.point.length=T,s.hemi.length=g,s.directionalShadow.length=O,s.directionalShadowMap.length=O,s.pointShadow.length=U,s.pointShadowMap.length=U,s.spotShadow.length=w,s.spotShadowMap.length=w,s.directionalShadowMatrix.length=O,s.pointShadowMatrix.length=U,s.spotLightMatrix.length=w+F-V,s.spotLightMap.length=F,s.numSpotLightShadowsWithMaps=V,s.numLightProbes=I,q.directionalLength=M,q.pointLength=T,q.spotLength=R,q.rectAreaLength=y,q.hemiLength=g,q.numDirectionalShadows=O,q.numPointShadows=U,q.numSpotShadows=w,q.numSpotMaps=F,q.numLightProbes=I,s.version=Hb++)}function m(p,_){let v=0,S=0,M=0,T=0,R=0;const y=_.matrixWorldInverse;for(let g=0,O=p.length;g<O;g++){const U=p[g];if(U.isDirectionalLight){const w=s.directional[v];w.direction.setFromMatrixPosition(U.matrixWorld),l.setFromMatrixPosition(U.target.matrixWorld),w.direction.sub(l),w.direction.transformDirection(y),v++}else if(U.isSpotLight){const w=s.spot[M];w.position.setFromMatrixPosition(U.matrixWorld),w.position.applyMatrix4(y),w.direction.setFromMatrixPosition(U.matrixWorld),l.setFromMatrixPosition(U.target.matrixWorld),w.direction.sub(l),w.direction.transformDirection(y),M++}else if(U.isRectAreaLight){const w=s.rectArea[T];w.position.setFromMatrixPosition(U.matrixWorld),w.position.applyMatrix4(y),h.identity(),u.copy(U.matrixWorld),u.premultiply(y),h.extractRotation(u),w.halfWidth.set(U.width*.5,0,0),w.halfHeight.set(0,U.height*.5,0),w.halfWidth.applyMatrix4(h),w.halfHeight.applyMatrix4(h),T++}else if(U.isPointLight){const w=s.point[S];w.position.setFromMatrixPosition(U.matrixWorld),w.position.applyMatrix4(y),S++}else if(U.isHemisphereLight){const w=s.hemi[R];w.direction.setFromMatrixPosition(U.matrixWorld),w.direction.transformDirection(y),R++}}}return{setup:d,setupView:m,state:s}}function Kg(o){const t=new Vb(o),i=[],s=[];function l(_){p.camera=_,i.length=0,s.length=0}function u(_){i.push(_)}function h(_){s.push(_)}function d(){t.setup(i)}function m(_){t.setupView(i,_)}const p={lightsArray:i,shadowsArray:s,camera:null,lights:t,transmissionRenderTarget:{}};return{init:l,state:p,setupLights:d,setupLightsView:m,pushLight:u,pushShadow:h}}function kb(o){let t=new WeakMap;function i(l,u=0){const h=t.get(l);let d;return h===void 0?(d=new Kg(o),t.set(l,[d])):u>=h.length?(d=new Kg(o),h.push(d)):d=h[u],d}function s(){t=new WeakMap}return{get:i,dispose:s}}const Xb=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Wb=`uniform sampler2D shadow_pass;
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
}`;function qb(o,t,i){let s=new yv;const l=new he,u=new he,h=new $e,d=new my({depthPacking:Ax}),m=new _y,p={},_=i.maxTextureSize,v={[ka]:Gn,[Gn]:ka,[ea]:ea},S=new Xa({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new he},radius:{value:4}},vertexShader:Xb,fragmentShader:Wb}),M=S.clone();M.defines.HORIZONTAL_PASS=1;const T=new Wa;T.setAttribute("position",new Ci(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const R=new vi(T,S),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=$g;let g=this.type;this.render=function(V,I,q){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||V.length===0)return;const D=o.getRenderTarget(),C=o.getActiveCubeFace(),G=o.getActiveMipmapLevel(),ot=o.state;ot.setBlending(Ga),ot.buffers.color.setClear(1,1,1,1),ot.buffers.depth.setTest(!0),ot.setScissorTest(!1);const rt=g!==ta&&this.type===ta,pt=g===ta&&this.type!==ta;for(let ut=0,z=V.length;ut<z;ut++){const Z=V[ut],Y=Z.shadow;if(Y===void 0){console.warn("THREE.WebGLShadowMap:",Z,"has no shadow.");continue}if(Y.autoUpdate===!1&&Y.needsUpdate===!1)continue;l.copy(Y.mapSize);const Mt=Y.getFrameExtents();if(l.multiply(Mt),u.copy(Y.mapSize),(l.x>_||l.y>_)&&(l.x>_&&(u.x=Math.floor(_/Mt.x),l.x=u.x*Mt.x,Y.mapSize.x=u.x),l.y>_&&(u.y=Math.floor(_/Mt.y),l.y=u.y*Mt.y,Y.mapSize.y=u.y)),Y.map===null||rt===!0||pt===!0){const $=this.type!==ta?{minFilter:Si,magFilter:Si}:{};Y.map!==null&&Y.map.dispose(),Y.map=new Ts(l.x,l.y,$),Y.map.texture.name=Z.name+".shadowMap",Y.camera.updateProjectionMatrix()}o.setRenderTarget(Y.map),o.clear();const L=Y.getViewportCount();for(let $=0;$<L;$++){const vt=Y.getViewport($);h.set(u.x*vt.x,u.y*vt.y,u.x*vt.z,u.y*vt.w),ot.viewport(h),Y.updateMatrices(Z,$),s=Y.getFrustum(),w(I,q,Y.camera,Z,this.type)}Y.isPointLightShadow!==!0&&this.type===ta&&O(Y,q),Y.needsUpdate=!1}g=this.type,y.needsUpdate=!1,o.setRenderTarget(D,C,G)};function O(V,I){const q=t.update(R);S.defines.VSM_SAMPLES!==V.blurSamples&&(S.defines.VSM_SAMPLES=V.blurSamples,M.defines.VSM_SAMPLES=V.blurSamples,S.needsUpdate=!0,M.needsUpdate=!0),V.mapPass===null&&(V.mapPass=new Ts(l.x,l.y)),S.uniforms.shadow_pass.value=V.map.texture,S.uniforms.resolution.value=V.mapSize,S.uniforms.radius.value=V.radius,o.setRenderTarget(V.mapPass),o.clear(),o.renderBufferDirect(I,null,q,S,R,null),M.uniforms.shadow_pass.value=V.mapPass.texture,M.uniforms.resolution.value=V.mapSize,M.uniforms.radius.value=V.radius,o.setRenderTarget(V.map),o.clear(),o.renderBufferDirect(I,null,q,M,R,null)}function U(V,I,q,D){let C=null;const G=q.isPointLight===!0?V.customDistanceMaterial:V.customDepthMaterial;if(G!==void 0)C=G;else if(C=q.isPointLight===!0?m:d,o.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0||I.alphaToCoverage===!0){const ot=C.uuid,rt=I.uuid;let pt=p[ot];pt===void 0&&(pt={},p[ot]=pt);let ut=pt[rt];ut===void 0&&(ut=C.clone(),pt[rt]=ut,I.addEventListener("dispose",F)),C=ut}if(C.visible=I.visible,C.wireframe=I.wireframe,D===ta?C.side=I.shadowSide!==null?I.shadowSide:I.side:C.side=I.shadowSide!==null?I.shadowSide:v[I.side],C.alphaMap=I.alphaMap,C.alphaTest=I.alphaToCoverage===!0?.5:I.alphaTest,C.map=I.map,C.clipShadows=I.clipShadows,C.clippingPlanes=I.clippingPlanes,C.clipIntersection=I.clipIntersection,C.displacementMap=I.displacementMap,C.displacementScale=I.displacementScale,C.displacementBias=I.displacementBias,C.wireframeLinewidth=I.wireframeLinewidth,C.linewidth=I.linewidth,q.isPointLight===!0&&C.isMeshDistanceMaterial===!0){const ot=o.properties.get(C);ot.light=q}return C}function w(V,I,q,D,C){if(V.visible===!1)return;if(V.layers.test(I.layers)&&(V.isMesh||V.isLine||V.isPoints)&&(V.castShadow||V.receiveShadow&&C===ta)&&(!V.frustumCulled||s.intersectsObject(V))){V.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,V.matrixWorld);const rt=t.update(V),pt=V.material;if(Array.isArray(pt)){const ut=rt.groups;for(let z=0,Z=ut.length;z<Z;z++){const Y=ut[z],Mt=pt[Y.materialIndex];if(Mt&&Mt.visible){const L=U(V,Mt,D,C);V.onBeforeShadow(o,V,I,q,rt,L,Y),o.renderBufferDirect(q,null,rt,L,V,Y),V.onAfterShadow(o,V,I,q,rt,L,Y)}}}else if(pt.visible){const ut=U(V,pt,D,C);V.onBeforeShadow(o,V,I,q,rt,ut,null),o.renderBufferDirect(q,null,rt,ut,V,null),V.onAfterShadow(o,V,I,q,rt,ut,null)}}const ot=V.children;for(let rt=0,pt=ot.length;rt<pt;rt++)w(ot[rt],I,q,D,C)}function F(V){V.target.removeEventListener("dispose",F);for(const q in p){const D=p[q],C=V.target.uuid;C in D&&(D[C].dispose(),delete D[C])}}}const Yb={[yh]:Mh,[Eh]:Ah,[Th]:Rh,[Er]:bh,[Mh]:yh,[Ah]:Eh,[Rh]:Th,[bh]:Er};function jb(o,t){function i(){let k=!1;const Ut=new $e;let Et=null;const zt=new $e(0,0,0,0);return{setMask:function(bt){Et!==bt&&!k&&(o.colorMask(bt,bt,bt,bt),Et=bt)},setLocked:function(bt){k=bt},setClear:function(bt,gt,Bt,ne,we){we===!0&&(bt*=ne,gt*=ne,Bt*=ne),Ut.set(bt,gt,Bt,ne),zt.equals(Ut)===!1&&(o.clearColor(bt,gt,Bt,ne),zt.copy(Ut))},reset:function(){k=!1,Et=null,zt.set(-1,0,0,0)}}}function s(){let k=!1,Ut=!1,Et=null,zt=null,bt=null;return{setReversed:function(gt){if(Ut!==gt){const Bt=t.get("EXT_clip_control");gt?Bt.clipControlEXT(Bt.LOWER_LEFT_EXT,Bt.ZERO_TO_ONE_EXT):Bt.clipControlEXT(Bt.LOWER_LEFT_EXT,Bt.NEGATIVE_ONE_TO_ONE_EXT),Ut=gt;const ne=bt;bt=null,this.setClear(ne)}},getReversed:function(){return Ut},setTest:function(gt){gt?At(o.DEPTH_TEST):Ct(o.DEPTH_TEST)},setMask:function(gt){Et!==gt&&!k&&(o.depthMask(gt),Et=gt)},setFunc:function(gt){if(Ut&&(gt=Yb[gt]),zt!==gt){switch(gt){case yh:o.depthFunc(o.NEVER);break;case Mh:o.depthFunc(o.ALWAYS);break;case Eh:o.depthFunc(o.LESS);break;case Er:o.depthFunc(o.LEQUAL);break;case Th:o.depthFunc(o.EQUAL);break;case bh:o.depthFunc(o.GEQUAL);break;case Ah:o.depthFunc(o.GREATER);break;case Rh:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}zt=gt}},setLocked:function(gt){k=gt},setClear:function(gt){bt!==gt&&(Ut&&(gt=1-gt),o.clearDepth(gt),bt=gt)},reset:function(){k=!1,Et=null,zt=null,bt=null,Ut=!1}}}function l(){let k=!1,Ut=null,Et=null,zt=null,bt=null,gt=null,Bt=null,ne=null,we=null;return{setTest:function(Te){k||(Te?At(o.STENCIL_TEST):Ct(o.STENCIL_TEST))},setMask:function(Te){Ut!==Te&&!k&&(o.stencilMask(Te),Ut=Te)},setFunc:function(Te,Xn,dn){(Et!==Te||zt!==Xn||bt!==dn)&&(o.stencilFunc(Te,Xn,dn),Et=Te,zt=Xn,bt=dn)},setOp:function(Te,Xn,dn){(gt!==Te||Bt!==Xn||ne!==dn)&&(o.stencilOp(Te,Xn,dn),gt=Te,Bt=Xn,ne=dn)},setLocked:function(Te){k=Te},setClear:function(Te){we!==Te&&(o.clearStencil(Te),we=Te)},reset:function(){k=!1,Ut=null,Et=null,zt=null,bt=null,gt=null,Bt=null,ne=null,we=null}}}const u=new i,h=new s,d=new l,m=new WeakMap,p=new WeakMap;let _={},v={},S=new WeakMap,M=[],T=null,R=!1,y=null,g=null,O=null,U=null,w=null,F=null,V=null,I=new Le(0,0,0),q=0,D=!1,C=null,G=null,ot=null,rt=null,pt=null;const ut=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let z=!1,Z=0;const Y=o.getParameter(o.VERSION);Y.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(Y)[1]),z=Z>=1):Y.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),z=Z>=2);let Mt=null,L={};const $=o.getParameter(o.SCISSOR_BOX),vt=o.getParameter(o.VIEWPORT),xt=new $e().fromArray($),Q=new $e().fromArray(vt);function mt(k,Ut,Et,zt){const bt=new Uint8Array(4),gt=o.createTexture();o.bindTexture(k,gt),o.texParameteri(k,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(k,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let Bt=0;Bt<Et;Bt++)k===o.TEXTURE_3D||k===o.TEXTURE_2D_ARRAY?o.texImage3D(Ut,0,o.RGBA,1,1,zt,0,o.RGBA,o.UNSIGNED_BYTE,bt):o.texImage2D(Ut+Bt,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,bt);return gt}const yt={};yt[o.TEXTURE_2D]=mt(o.TEXTURE_2D,o.TEXTURE_2D,1),yt[o.TEXTURE_CUBE_MAP]=mt(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),yt[o.TEXTURE_2D_ARRAY]=mt(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),yt[o.TEXTURE_3D]=mt(o.TEXTURE_3D,o.TEXTURE_3D,1,1),u.setClear(0,0,0,1),h.setClear(1),d.setClear(0),At(o.DEPTH_TEST),h.setFunc(Er),Me(!1),de(eg),At(o.CULL_FACE),B(Ga);function At(k){_[k]!==!0&&(o.enable(k),_[k]=!0)}function Ct(k){_[k]!==!1&&(o.disable(k),_[k]=!1)}function oe(k,Ut){return v[k]!==Ut?(o.bindFramebuffer(k,Ut),v[k]=Ut,k===o.DRAW_FRAMEBUFFER&&(v[o.FRAMEBUFFER]=Ut),k===o.FRAMEBUFFER&&(v[o.DRAW_FRAMEBUFFER]=Ut),!0):!1}function Kt(k,Ut){let Et=M,zt=!1;if(k){Et=S.get(Ut),Et===void 0&&(Et=[],S.set(Ut,Et));const bt=k.textures;if(Et.length!==bt.length||Et[0]!==o.COLOR_ATTACHMENT0){for(let gt=0,Bt=bt.length;gt<Bt;gt++)Et[gt]=o.COLOR_ATTACHMENT0+gt;Et.length=bt.length,zt=!0}}else Et[0]!==o.BACK&&(Et[0]=o.BACK,zt=!0);zt&&o.drawBuffers(Et)}function Ne(k){return T!==k?(o.useProgram(k),T=k,!0):!1}const Fe={[vs]:o.FUNC_ADD,[JS]:o.FUNC_SUBTRACT,[$S]:o.FUNC_REVERSE_SUBTRACT};Fe[tx]=o.MIN,Fe[ex]=o.MAX;const ge={[nx]:o.ZERO,[ix]:o.ONE,[ax]:o.SRC_COLOR,[Sh]:o.SRC_ALPHA,[ux]:o.SRC_ALPHA_SATURATE,[lx]:o.DST_COLOR,[rx]:o.DST_ALPHA,[sx]:o.ONE_MINUS_SRC_COLOR,[xh]:o.ONE_MINUS_SRC_ALPHA,[cx]:o.ONE_MINUS_DST_COLOR,[ox]:o.ONE_MINUS_DST_ALPHA,[fx]:o.CONSTANT_COLOR,[hx]:o.ONE_MINUS_CONSTANT_COLOR,[dx]:o.CONSTANT_ALPHA,[px]:o.ONE_MINUS_CONSTANT_ALPHA};function B(k,Ut,Et,zt,bt,gt,Bt,ne,we,Te){if(k===Ga){R===!0&&(Ct(o.BLEND),R=!1);return}if(R===!1&&(At(o.BLEND),R=!0),k!==QS){if(k!==y||Te!==D){if((g!==vs||w!==vs)&&(o.blendEquation(o.FUNC_ADD),g=vs,w=vs),Te)switch(k){case xr:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case ng:o.blendFunc(o.ONE,o.ONE);break;case ig:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case ag:o.blendFuncSeparate(o.ZERO,o.SRC_COLOR,o.ZERO,o.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}else switch(k){case xr:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case ng:o.blendFunc(o.SRC_ALPHA,o.ONE);break;case ig:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case ag:o.blendFunc(o.ZERO,o.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}O=null,U=null,F=null,V=null,I.set(0,0,0),q=0,y=k,D=Te}return}bt=bt||Ut,gt=gt||Et,Bt=Bt||zt,(Ut!==g||bt!==w)&&(o.blendEquationSeparate(Fe[Ut],Fe[bt]),g=Ut,w=bt),(Et!==O||zt!==U||gt!==F||Bt!==V)&&(o.blendFuncSeparate(ge[Et],ge[zt],ge[gt],ge[Bt]),O=Et,U=zt,F=gt,V=Bt),(ne.equals(I)===!1||we!==q)&&(o.blendColor(ne.r,ne.g,ne.b,we),I.copy(ne),q=we),y=k,D=!1}function Sn(k,Ut){k.side===ea?Ct(o.CULL_FACE):At(o.CULL_FACE);let Et=k.side===Gn;Ut&&(Et=!Et),Me(Et),k.blending===xr&&k.transparent===!1?B(Ga):B(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),h.setFunc(k.depthFunc),h.setTest(k.depthTest),h.setMask(k.depthWrite),u.setMask(k.colorWrite);const zt=k.stencilWrite;d.setTest(zt),zt&&(d.setMask(k.stencilWriteMask),d.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),d.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),ve(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?At(o.SAMPLE_ALPHA_TO_COVERAGE):Ct(o.SAMPLE_ALPHA_TO_COVERAGE)}function Me(k){C!==k&&(k?o.frontFace(o.CW):o.frontFace(o.CCW),C=k)}function de(k){k!==jS?(At(o.CULL_FACE),k!==G&&(k===eg?o.cullFace(o.BACK):k===ZS?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):Ct(o.CULL_FACE),G=k}function Gt(k){k!==ot&&(z&&o.lineWidth(k),ot=k)}function ve(k,Ut,Et){k?(At(o.POLYGON_OFFSET_FILL),(rt!==Ut||pt!==Et)&&(o.polygonOffset(Ut,Et),rt=Ut,pt=Et)):Ct(o.POLYGON_OFFSET_FILL)}function Yt(k){k?At(o.SCISSOR_TEST):Ct(o.SCISSOR_TEST)}function ae(k){k===void 0&&(k=o.TEXTURE0+ut-1),Mt!==k&&(o.activeTexture(k),Mt=k)}function Ke(k,Ut,Et){Et===void 0&&(Mt===null?Et=o.TEXTURE0+ut-1:Et=Mt);let zt=L[Et];zt===void 0&&(zt={type:void 0,texture:void 0},L[Et]=zt),(zt.type!==k||zt.texture!==Ut)&&(Mt!==Et&&(o.activeTexture(Et),Mt=Et),o.bindTexture(k,Ut||yt[k]),zt.type=k,zt.texture=Ut)}function N(){const k=L[Mt];k!==void 0&&k.type!==void 0&&(o.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function E(){try{o.compressedTexImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function et(){try{o.compressedTexImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ft(){try{o.texSubImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function dt(){try{o.texSubImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function lt(){try{o.compressedTexSubImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Ot(){try{o.compressedTexSubImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Dt(){try{o.texStorage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Ht(){try{o.texStorage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Vt(){try{o.texImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function St(){try{o.texImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Pt(k){xt.equals(k)===!1&&(o.scissor(k.x,k.y,k.z,k.w),xt.copy(k))}function Wt(k){Q.equals(k)===!1&&(o.viewport(k.x,k.y,k.z,k.w),Q.copy(k))}function qt(k,Ut){let Et=p.get(Ut);Et===void 0&&(Et=new WeakMap,p.set(Ut,Et));let zt=Et.get(k);zt===void 0&&(zt=o.getUniformBlockIndex(Ut,k.name),Et.set(k,zt))}function Rt(k,Ut){const zt=p.get(Ut).get(k);m.get(Ut)!==zt&&(o.uniformBlockBinding(Ut,zt,k.__bindingPointIndex),m.set(Ut,zt))}function ie(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),h.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),_={},Mt=null,L={},v={},S=new WeakMap,M=[],T=null,R=!1,y=null,g=null,O=null,U=null,w=null,F=null,V=null,I=new Le(0,0,0),q=0,D=!1,C=null,G=null,ot=null,rt=null,pt=null,xt.set(0,0,o.canvas.width,o.canvas.height),Q.set(0,0,o.canvas.width,o.canvas.height),u.reset(),h.reset(),d.reset()}return{buffers:{color:u,depth:h,stencil:d},enable:At,disable:Ct,bindFramebuffer:oe,drawBuffers:Kt,useProgram:Ne,setBlending:B,setMaterial:Sn,setFlipSided:Me,setCullFace:de,setLineWidth:Gt,setPolygonOffset:ve,setScissorTest:Yt,activeTexture:ae,bindTexture:Ke,unbindTexture:N,compressedTexImage2D:E,compressedTexImage3D:et,texImage2D:Vt,texImage3D:St,updateUBOMapping:qt,uniformBlockBinding:Rt,texStorage2D:Dt,texStorage3D:Ht,texSubImage2D:ft,texSubImage3D:dt,compressedTexSubImage2D:lt,compressedTexSubImage3D:Ot,scissor:Pt,viewport:Wt,reset:ie}}function Zb(o,t,i,s,l,u,h){const d=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new he,_=new WeakMap;let v;const S=new WeakMap;let M=!1;try{M=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function T(N,E){return M?new OffscreenCanvas(N,E):Rc("canvas")}function R(N,E,et){let ft=1;const dt=Ke(N);if((dt.width>et||dt.height>et)&&(ft=et/Math.max(dt.width,dt.height)),ft<1)if(typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&N instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&N instanceof ImageBitmap||typeof VideoFrame<"u"&&N instanceof VideoFrame){const lt=Math.floor(ft*dt.width),Ot=Math.floor(ft*dt.height);v===void 0&&(v=T(lt,Ot));const Dt=E?T(lt,Ot):v;return Dt.width=lt,Dt.height=Ot,Dt.getContext("2d").drawImage(N,0,0,lt,Ot),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+dt.width+"x"+dt.height+") to ("+lt+"x"+Ot+")."),Dt}else return"data"in N&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+dt.width+"x"+dt.height+")."),N;return N}function y(N){return N.generateMipmaps}function g(N){o.generateMipmap(N)}function O(N){return N.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:N.isWebGL3DRenderTarget?o.TEXTURE_3D:N.isWebGLArrayRenderTarget||N.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function U(N,E,et,ft,dt=!1){if(N!==null){if(o[N]!==void 0)return o[N];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+N+"'")}let lt=E;if(E===o.RED&&(et===o.FLOAT&&(lt=o.R32F),et===o.HALF_FLOAT&&(lt=o.R16F),et===o.UNSIGNED_BYTE&&(lt=o.R8)),E===o.RED_INTEGER&&(et===o.UNSIGNED_BYTE&&(lt=o.R8UI),et===o.UNSIGNED_SHORT&&(lt=o.R16UI),et===o.UNSIGNED_INT&&(lt=o.R32UI),et===o.BYTE&&(lt=o.R8I),et===o.SHORT&&(lt=o.R16I),et===o.INT&&(lt=o.R32I)),E===o.RG&&(et===o.FLOAT&&(lt=o.RG32F),et===o.HALF_FLOAT&&(lt=o.RG16F),et===o.UNSIGNED_BYTE&&(lt=o.RG8)),E===o.RG_INTEGER&&(et===o.UNSIGNED_BYTE&&(lt=o.RG8UI),et===o.UNSIGNED_SHORT&&(lt=o.RG16UI),et===o.UNSIGNED_INT&&(lt=o.RG32UI),et===o.BYTE&&(lt=o.RG8I),et===o.SHORT&&(lt=o.RG16I),et===o.INT&&(lt=o.RG32I)),E===o.RGB_INTEGER&&(et===o.UNSIGNED_BYTE&&(lt=o.RGB8UI),et===o.UNSIGNED_SHORT&&(lt=o.RGB16UI),et===o.UNSIGNED_INT&&(lt=o.RGB32UI),et===o.BYTE&&(lt=o.RGB8I),et===o.SHORT&&(lt=o.RGB16I),et===o.INT&&(lt=o.RGB32I)),E===o.RGBA_INTEGER&&(et===o.UNSIGNED_BYTE&&(lt=o.RGBA8UI),et===o.UNSIGNED_SHORT&&(lt=o.RGBA16UI),et===o.UNSIGNED_INT&&(lt=o.RGBA32UI),et===o.BYTE&&(lt=o.RGBA8I),et===o.SHORT&&(lt=o.RGBA16I),et===o.INT&&(lt=o.RGBA32I)),E===o.RGB&&et===o.UNSIGNED_INT_5_9_9_9_REV&&(lt=o.RGB9_E5),E===o.RGBA){const Ot=dt?bc:Ae.getTransfer(ft);et===o.FLOAT&&(lt=o.RGBA32F),et===o.HALF_FLOAT&&(lt=o.RGBA16F),et===o.UNSIGNED_BYTE&&(lt=Ot===Ie?o.SRGB8_ALPHA8:o.RGBA8),et===o.UNSIGNED_SHORT_4_4_4_4&&(lt=o.RGBA4),et===o.UNSIGNED_SHORT_5_5_5_1&&(lt=o.RGB5_A1)}return(lt===o.R16F||lt===o.R32F||lt===o.RG16F||lt===o.RG32F||lt===o.RGBA16F||lt===o.RGBA32F)&&t.get("EXT_color_buffer_float"),lt}function w(N,E){let et;return N?E===null||E===Ms||E===Uo?et=o.DEPTH24_STENCIL8:E===na?et=o.DEPTH32F_STENCIL8:E===Do&&(et=o.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===Ms||E===Uo?et=o.DEPTH_COMPONENT24:E===na?et=o.DEPTH_COMPONENT32F:E===Do&&(et=o.DEPTH_COMPONENT16),et}function F(N,E){return y(N)===!0||N.isFramebufferTexture&&N.minFilter!==Si&&N.minFilter!==Ri?Math.log2(Math.max(E.width,E.height))+1:N.mipmaps!==void 0&&N.mipmaps.length>0?N.mipmaps.length:N.isCompressedTexture&&Array.isArray(N.image)?E.mipmaps.length:1}function V(N){const E=N.target;E.removeEventListener("dispose",V),q(E),E.isVideoTexture&&_.delete(E)}function I(N){const E=N.target;E.removeEventListener("dispose",I),C(E)}function q(N){const E=s.get(N);if(E.__webglInit===void 0)return;const et=N.source,ft=S.get(et);if(ft){const dt=ft[E.__cacheKey];dt.usedTimes--,dt.usedTimes===0&&D(N),Object.keys(ft).length===0&&S.delete(et)}s.remove(N)}function D(N){const E=s.get(N);o.deleteTexture(E.__webglTexture);const et=N.source,ft=S.get(et);delete ft[E.__cacheKey],h.memory.textures--}function C(N){const E=s.get(N);if(N.depthTexture&&(N.depthTexture.dispose(),s.remove(N.depthTexture)),N.isWebGLCubeRenderTarget)for(let ft=0;ft<6;ft++){if(Array.isArray(E.__webglFramebuffer[ft]))for(let dt=0;dt<E.__webglFramebuffer[ft].length;dt++)o.deleteFramebuffer(E.__webglFramebuffer[ft][dt]);else o.deleteFramebuffer(E.__webglFramebuffer[ft]);E.__webglDepthbuffer&&o.deleteRenderbuffer(E.__webglDepthbuffer[ft])}else{if(Array.isArray(E.__webglFramebuffer))for(let ft=0;ft<E.__webglFramebuffer.length;ft++)o.deleteFramebuffer(E.__webglFramebuffer[ft]);else o.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&o.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&o.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let ft=0;ft<E.__webglColorRenderbuffer.length;ft++)E.__webglColorRenderbuffer[ft]&&o.deleteRenderbuffer(E.__webglColorRenderbuffer[ft]);E.__webglDepthRenderbuffer&&o.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const et=N.textures;for(let ft=0,dt=et.length;ft<dt;ft++){const lt=s.get(et[ft]);lt.__webglTexture&&(o.deleteTexture(lt.__webglTexture),h.memory.textures--),s.remove(et[ft])}s.remove(N)}let G=0;function ot(){G=0}function rt(){const N=G;return N>=l.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+N+" texture units while this GPU supports only "+l.maxTextures),G+=1,N}function pt(N){const E=[];return E.push(N.wrapS),E.push(N.wrapT),E.push(N.wrapR||0),E.push(N.magFilter),E.push(N.minFilter),E.push(N.anisotropy),E.push(N.internalFormat),E.push(N.format),E.push(N.type),E.push(N.generateMipmaps),E.push(N.premultiplyAlpha),E.push(N.flipY),E.push(N.unpackAlignment),E.push(N.colorSpace),E.join()}function ut(N,E){const et=s.get(N);if(N.isVideoTexture&&Yt(N),N.isRenderTargetTexture===!1&&N.version>0&&et.__version!==N.version){const ft=N.image;if(ft===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ft.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{yt(et,N,E);return}}i.bindTexture(o.TEXTURE_2D,et.__webglTexture,o.TEXTURE0+E)}function z(N,E){const et=s.get(N);if(N.version>0&&et.__version!==N.version){yt(et,N,E);return}i.bindTexture(o.TEXTURE_2D_ARRAY,et.__webglTexture,o.TEXTURE0+E)}function Z(N,E){const et=s.get(N);if(N.version>0&&et.__version!==N.version){yt(et,N,E);return}i.bindTexture(o.TEXTURE_3D,et.__webglTexture,o.TEXTURE0+E)}function Y(N,E){const et=s.get(N);if(N.version>0&&et.__version!==N.version){At(et,N,E);return}i.bindTexture(o.TEXTURE_CUBE_MAP,et.__webglTexture,o.TEXTURE0+E)}const Mt={[Dh]:o.REPEAT,[xs]:o.CLAMP_TO_EDGE,[Uh]:o.MIRRORED_REPEAT},L={[Si]:o.NEAREST,[Tx]:o.NEAREST_MIPMAP_NEAREST,[jl]:o.NEAREST_MIPMAP_LINEAR,[Ri]:o.LINEAR,[Vf]:o.LINEAR_MIPMAP_NEAREST,[ys]:o.LINEAR_MIPMAP_LINEAR},$={[wx]:o.NEVER,[Px]:o.ALWAYS,[Dx]:o.LESS,[uv]:o.LEQUAL,[Ux]:o.EQUAL,[Ox]:o.GEQUAL,[Lx]:o.GREATER,[Nx]:o.NOTEQUAL};function vt(N,E){if(E.type===na&&t.has("OES_texture_float_linear")===!1&&(E.magFilter===Ri||E.magFilter===Vf||E.magFilter===jl||E.magFilter===ys||E.minFilter===Ri||E.minFilter===Vf||E.minFilter===jl||E.minFilter===ys)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(N,o.TEXTURE_WRAP_S,Mt[E.wrapS]),o.texParameteri(N,o.TEXTURE_WRAP_T,Mt[E.wrapT]),(N===o.TEXTURE_3D||N===o.TEXTURE_2D_ARRAY)&&o.texParameteri(N,o.TEXTURE_WRAP_R,Mt[E.wrapR]),o.texParameteri(N,o.TEXTURE_MAG_FILTER,L[E.magFilter]),o.texParameteri(N,o.TEXTURE_MIN_FILTER,L[E.minFilter]),E.compareFunction&&(o.texParameteri(N,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(N,o.TEXTURE_COMPARE_FUNC,$[E.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===Si||E.minFilter!==jl&&E.minFilter!==ys||E.type===na&&t.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||s.get(E).__currentAnisotropy){const et=t.get("EXT_texture_filter_anisotropic");o.texParameterf(N,et.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,l.getMaxAnisotropy())),s.get(E).__currentAnisotropy=E.anisotropy}}}function xt(N,E){let et=!1;N.__webglInit===void 0&&(N.__webglInit=!0,E.addEventListener("dispose",V));const ft=E.source;let dt=S.get(ft);dt===void 0&&(dt={},S.set(ft,dt));const lt=pt(E);if(lt!==N.__cacheKey){dt[lt]===void 0&&(dt[lt]={texture:o.createTexture(),usedTimes:0},h.memory.textures++,et=!0),dt[lt].usedTimes++;const Ot=dt[N.__cacheKey];Ot!==void 0&&(dt[N.__cacheKey].usedTimes--,Ot.usedTimes===0&&D(E)),N.__cacheKey=lt,N.__webglTexture=dt[lt].texture}return et}function Q(N,E,et){return Math.floor(Math.floor(N/et)/E)}function mt(N,E,et,ft){const lt=N.updateRanges;if(lt.length===0)i.texSubImage2D(o.TEXTURE_2D,0,0,0,E.width,E.height,et,ft,E.data);else{lt.sort((St,Pt)=>St.start-Pt.start);let Ot=0;for(let St=1;St<lt.length;St++){const Pt=lt[Ot],Wt=lt[St],qt=Pt.start+Pt.count,Rt=Q(Wt.start,E.width,4),ie=Q(Pt.start,E.width,4);Wt.start<=qt+1&&Rt===ie&&Q(Wt.start+Wt.count-1,E.width,4)===Rt?Pt.count=Math.max(Pt.count,Wt.start+Wt.count-Pt.start):(++Ot,lt[Ot]=Wt)}lt.length=Ot+1;const Dt=o.getParameter(o.UNPACK_ROW_LENGTH),Ht=o.getParameter(o.UNPACK_SKIP_PIXELS),Vt=o.getParameter(o.UNPACK_SKIP_ROWS);o.pixelStorei(o.UNPACK_ROW_LENGTH,E.width);for(let St=0,Pt=lt.length;St<Pt;St++){const Wt=lt[St],qt=Math.floor(Wt.start/4),Rt=Math.ceil(Wt.count/4),ie=qt%E.width,k=Math.floor(qt/E.width),Ut=Rt,Et=1;o.pixelStorei(o.UNPACK_SKIP_PIXELS,ie),o.pixelStorei(o.UNPACK_SKIP_ROWS,k),i.texSubImage2D(o.TEXTURE_2D,0,ie,k,Ut,Et,et,ft,E.data)}N.clearUpdateRanges(),o.pixelStorei(o.UNPACK_ROW_LENGTH,Dt),o.pixelStorei(o.UNPACK_SKIP_PIXELS,Ht),o.pixelStorei(o.UNPACK_SKIP_ROWS,Vt)}}function yt(N,E,et){let ft=o.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(ft=o.TEXTURE_2D_ARRAY),E.isData3DTexture&&(ft=o.TEXTURE_3D);const dt=xt(N,E),lt=E.source;i.bindTexture(ft,N.__webglTexture,o.TEXTURE0+et);const Ot=s.get(lt);if(lt.version!==Ot.__version||dt===!0){i.activeTexture(o.TEXTURE0+et);const Dt=Ae.getPrimaries(Ae.workingColorSpace),Ht=E.colorSpace===Ha?null:Ae.getPrimaries(E.colorSpace),Vt=E.colorSpace===Ha||Dt===Ht?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,E.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,E.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Vt);let St=R(E.image,!1,l.maxTextureSize);St=ae(E,St);const Pt=u.convert(E.format,E.colorSpace),Wt=u.convert(E.type);let qt=U(E.internalFormat,Pt,Wt,E.colorSpace,E.isVideoTexture);vt(ft,E);let Rt;const ie=E.mipmaps,k=E.isVideoTexture!==!0,Ut=Ot.__version===void 0||dt===!0,Et=lt.dataReady,zt=F(E,St);if(E.isDepthTexture)qt=w(E.format===No,E.type),Ut&&(k?i.texStorage2D(o.TEXTURE_2D,1,qt,St.width,St.height):i.texImage2D(o.TEXTURE_2D,0,qt,St.width,St.height,0,Pt,Wt,null));else if(E.isDataTexture)if(ie.length>0){k&&Ut&&i.texStorage2D(o.TEXTURE_2D,zt,qt,ie[0].width,ie[0].height);for(let bt=0,gt=ie.length;bt<gt;bt++)Rt=ie[bt],k?Et&&i.texSubImage2D(o.TEXTURE_2D,bt,0,0,Rt.width,Rt.height,Pt,Wt,Rt.data):i.texImage2D(o.TEXTURE_2D,bt,qt,Rt.width,Rt.height,0,Pt,Wt,Rt.data);E.generateMipmaps=!1}else k?(Ut&&i.texStorage2D(o.TEXTURE_2D,zt,qt,St.width,St.height),Et&&mt(E,St,Pt,Wt)):i.texImage2D(o.TEXTURE_2D,0,qt,St.width,St.height,0,Pt,Wt,St.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){k&&Ut&&i.texStorage3D(o.TEXTURE_2D_ARRAY,zt,qt,ie[0].width,ie[0].height,St.depth);for(let bt=0,gt=ie.length;bt<gt;bt++)if(Rt=ie[bt],E.format!==gi)if(Pt!==null)if(k){if(Et)if(E.layerUpdates.size>0){const Bt=Ag(Rt.width,Rt.height,E.format,E.type);for(const ne of E.layerUpdates){const we=Rt.data.subarray(ne*Bt/Rt.data.BYTES_PER_ELEMENT,(ne+1)*Bt/Rt.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,bt,0,0,ne,Rt.width,Rt.height,1,Pt,we)}E.clearLayerUpdates()}else i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,bt,0,0,0,Rt.width,Rt.height,St.depth,Pt,Rt.data)}else i.compressedTexImage3D(o.TEXTURE_2D_ARRAY,bt,qt,Rt.width,Rt.height,St.depth,0,Rt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else k?Et&&i.texSubImage3D(o.TEXTURE_2D_ARRAY,bt,0,0,0,Rt.width,Rt.height,St.depth,Pt,Wt,Rt.data):i.texImage3D(o.TEXTURE_2D_ARRAY,bt,qt,Rt.width,Rt.height,St.depth,0,Pt,Wt,Rt.data)}else{k&&Ut&&i.texStorage2D(o.TEXTURE_2D,zt,qt,ie[0].width,ie[0].height);for(let bt=0,gt=ie.length;bt<gt;bt++)Rt=ie[bt],E.format!==gi?Pt!==null?k?Et&&i.compressedTexSubImage2D(o.TEXTURE_2D,bt,0,0,Rt.width,Rt.height,Pt,Rt.data):i.compressedTexImage2D(o.TEXTURE_2D,bt,qt,Rt.width,Rt.height,0,Rt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):k?Et&&i.texSubImage2D(o.TEXTURE_2D,bt,0,0,Rt.width,Rt.height,Pt,Wt,Rt.data):i.texImage2D(o.TEXTURE_2D,bt,qt,Rt.width,Rt.height,0,Pt,Wt,Rt.data)}else if(E.isDataArrayTexture)if(k){if(Ut&&i.texStorage3D(o.TEXTURE_2D_ARRAY,zt,qt,St.width,St.height,St.depth),Et)if(E.layerUpdates.size>0){const bt=Ag(St.width,St.height,E.format,E.type);for(const gt of E.layerUpdates){const Bt=St.data.subarray(gt*bt/St.data.BYTES_PER_ELEMENT,(gt+1)*bt/St.data.BYTES_PER_ELEMENT);i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,gt,St.width,St.height,1,Pt,Wt,Bt)}E.clearLayerUpdates()}else i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,St.width,St.height,St.depth,Pt,Wt,St.data)}else i.texImage3D(o.TEXTURE_2D_ARRAY,0,qt,St.width,St.height,St.depth,0,Pt,Wt,St.data);else if(E.isData3DTexture)k?(Ut&&i.texStorage3D(o.TEXTURE_3D,zt,qt,St.width,St.height,St.depth),Et&&i.texSubImage3D(o.TEXTURE_3D,0,0,0,0,St.width,St.height,St.depth,Pt,Wt,St.data)):i.texImage3D(o.TEXTURE_3D,0,qt,St.width,St.height,St.depth,0,Pt,Wt,St.data);else if(E.isFramebufferTexture){if(Ut)if(k)i.texStorage2D(o.TEXTURE_2D,zt,qt,St.width,St.height);else{let bt=St.width,gt=St.height;for(let Bt=0;Bt<zt;Bt++)i.texImage2D(o.TEXTURE_2D,Bt,qt,bt,gt,0,Pt,Wt,null),bt>>=1,gt>>=1}}else if(ie.length>0){if(k&&Ut){const bt=Ke(ie[0]);i.texStorage2D(o.TEXTURE_2D,zt,qt,bt.width,bt.height)}for(let bt=0,gt=ie.length;bt<gt;bt++)Rt=ie[bt],k?Et&&i.texSubImage2D(o.TEXTURE_2D,bt,0,0,Pt,Wt,Rt):i.texImage2D(o.TEXTURE_2D,bt,qt,Pt,Wt,Rt);E.generateMipmaps=!1}else if(k){if(Ut){const bt=Ke(St);i.texStorage2D(o.TEXTURE_2D,zt,qt,bt.width,bt.height)}Et&&i.texSubImage2D(o.TEXTURE_2D,0,0,0,Pt,Wt,St)}else i.texImage2D(o.TEXTURE_2D,0,qt,Pt,Wt,St);y(E)&&g(ft),Ot.__version=lt.version,E.onUpdate&&E.onUpdate(E)}N.__version=E.version}function At(N,E,et){if(E.image.length!==6)return;const ft=xt(N,E),dt=E.source;i.bindTexture(o.TEXTURE_CUBE_MAP,N.__webglTexture,o.TEXTURE0+et);const lt=s.get(dt);if(dt.version!==lt.__version||ft===!0){i.activeTexture(o.TEXTURE0+et);const Ot=Ae.getPrimaries(Ae.workingColorSpace),Dt=E.colorSpace===Ha?null:Ae.getPrimaries(E.colorSpace),Ht=E.colorSpace===Ha||Ot===Dt?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,E.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,E.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ht);const Vt=E.isCompressedTexture||E.image[0].isCompressedTexture,St=E.image[0]&&E.image[0].isDataTexture,Pt=[];for(let gt=0;gt<6;gt++)!Vt&&!St?Pt[gt]=R(E.image[gt],!0,l.maxCubemapSize):Pt[gt]=St?E.image[gt].image:E.image[gt],Pt[gt]=ae(E,Pt[gt]);const Wt=Pt[0],qt=u.convert(E.format,E.colorSpace),Rt=u.convert(E.type),ie=U(E.internalFormat,qt,Rt,E.colorSpace),k=E.isVideoTexture!==!0,Ut=lt.__version===void 0||ft===!0,Et=dt.dataReady;let zt=F(E,Wt);vt(o.TEXTURE_CUBE_MAP,E);let bt;if(Vt){k&&Ut&&i.texStorage2D(o.TEXTURE_CUBE_MAP,zt,ie,Wt.width,Wt.height);for(let gt=0;gt<6;gt++){bt=Pt[gt].mipmaps;for(let Bt=0;Bt<bt.length;Bt++){const ne=bt[Bt];E.format!==gi?qt!==null?k?Et&&i.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Bt,0,0,ne.width,ne.height,qt,ne.data):i.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Bt,ie,ne.width,ne.height,0,ne.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):k?Et&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Bt,0,0,ne.width,ne.height,qt,Rt,ne.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Bt,ie,ne.width,ne.height,0,qt,Rt,ne.data)}}}else{if(bt=E.mipmaps,k&&Ut){bt.length>0&&zt++;const gt=Ke(Pt[0]);i.texStorage2D(o.TEXTURE_CUBE_MAP,zt,ie,gt.width,gt.height)}for(let gt=0;gt<6;gt++)if(St){k?Et&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,0,0,Pt[gt].width,Pt[gt].height,qt,Rt,Pt[gt].data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,ie,Pt[gt].width,Pt[gt].height,0,qt,Rt,Pt[gt].data);for(let Bt=0;Bt<bt.length;Bt++){const we=bt[Bt].image[gt].image;k?Et&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Bt+1,0,0,we.width,we.height,qt,Rt,we.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Bt+1,ie,we.width,we.height,0,qt,Rt,we.data)}}else{k?Et&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,0,0,qt,Rt,Pt[gt]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,ie,qt,Rt,Pt[gt]);for(let Bt=0;Bt<bt.length;Bt++){const ne=bt[Bt];k?Et&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Bt+1,0,0,qt,Rt,ne.image[gt]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Bt+1,ie,qt,Rt,ne.image[gt])}}}y(E)&&g(o.TEXTURE_CUBE_MAP),lt.__version=dt.version,E.onUpdate&&E.onUpdate(E)}N.__version=E.version}function Ct(N,E,et,ft,dt,lt){const Ot=u.convert(et.format,et.colorSpace),Dt=u.convert(et.type),Ht=U(et.internalFormat,Ot,Dt,et.colorSpace),Vt=s.get(E),St=s.get(et);if(St.__renderTarget=E,!Vt.__hasExternalTextures){const Pt=Math.max(1,E.width>>lt),Wt=Math.max(1,E.height>>lt);dt===o.TEXTURE_3D||dt===o.TEXTURE_2D_ARRAY?i.texImage3D(dt,lt,Ht,Pt,Wt,E.depth,0,Ot,Dt,null):i.texImage2D(dt,lt,Ht,Pt,Wt,0,Ot,Dt,null)}i.bindFramebuffer(o.FRAMEBUFFER,N),ve(E)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,ft,dt,St.__webglTexture,0,Gt(E)):(dt===o.TEXTURE_2D||dt>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&dt<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,ft,dt,St.__webglTexture,lt),i.bindFramebuffer(o.FRAMEBUFFER,null)}function oe(N,E,et){if(o.bindRenderbuffer(o.RENDERBUFFER,N),E.depthBuffer){const ft=E.depthTexture,dt=ft&&ft.isDepthTexture?ft.type:null,lt=w(E.stencilBuffer,dt),Ot=E.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Dt=Gt(E);ve(E)?d.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Dt,lt,E.width,E.height):et?o.renderbufferStorageMultisample(o.RENDERBUFFER,Dt,lt,E.width,E.height):o.renderbufferStorage(o.RENDERBUFFER,lt,E.width,E.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,Ot,o.RENDERBUFFER,N)}else{const ft=E.textures;for(let dt=0;dt<ft.length;dt++){const lt=ft[dt],Ot=u.convert(lt.format,lt.colorSpace),Dt=u.convert(lt.type),Ht=U(lt.internalFormat,Ot,Dt,lt.colorSpace),Vt=Gt(E);et&&ve(E)===!1?o.renderbufferStorageMultisample(o.RENDERBUFFER,Vt,Ht,E.width,E.height):ve(E)?d.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Vt,Ht,E.width,E.height):o.renderbufferStorage(o.RENDERBUFFER,Ht,E.width,E.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function Kt(N,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(o.FRAMEBUFFER,N),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ft=s.get(E.depthTexture);ft.__renderTarget=E,(!ft.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),ut(E.depthTexture,0);const dt=ft.__webglTexture,lt=Gt(E);if(E.depthTexture.format===Lo)ve(E)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,dt,0,lt):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,dt,0);else if(E.depthTexture.format===No)ve(E)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,dt,0,lt):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,dt,0);else throw new Error("Unknown depthTexture format")}function Ne(N){const E=s.get(N),et=N.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==N.depthTexture){const ft=N.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),ft){const dt=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,ft.removeEventListener("dispose",dt)};ft.addEventListener("dispose",dt),E.__depthDisposeCallback=dt}E.__boundDepthTexture=ft}if(N.depthTexture&&!E.__autoAllocateDepthBuffer){if(et)throw new Error("target.depthTexture not supported in Cube render targets");const ft=N.texture.mipmaps;ft&&ft.length>0?Kt(E.__webglFramebuffer[0],N):Kt(E.__webglFramebuffer,N)}else if(et){E.__webglDepthbuffer=[];for(let ft=0;ft<6;ft++)if(i.bindFramebuffer(o.FRAMEBUFFER,E.__webglFramebuffer[ft]),E.__webglDepthbuffer[ft]===void 0)E.__webglDepthbuffer[ft]=o.createRenderbuffer(),oe(E.__webglDepthbuffer[ft],N,!1);else{const dt=N.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,lt=E.__webglDepthbuffer[ft];o.bindRenderbuffer(o.RENDERBUFFER,lt),o.framebufferRenderbuffer(o.FRAMEBUFFER,dt,o.RENDERBUFFER,lt)}}else{const ft=N.texture.mipmaps;if(ft&&ft.length>0?i.bindFramebuffer(o.FRAMEBUFFER,E.__webglFramebuffer[0]):i.bindFramebuffer(o.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=o.createRenderbuffer(),oe(E.__webglDepthbuffer,N,!1);else{const dt=N.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,lt=E.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,lt),o.framebufferRenderbuffer(o.FRAMEBUFFER,dt,o.RENDERBUFFER,lt)}}i.bindFramebuffer(o.FRAMEBUFFER,null)}function Fe(N,E,et){const ft=s.get(N);E!==void 0&&Ct(ft.__webglFramebuffer,N,N.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),et!==void 0&&Ne(N)}function ge(N){const E=N.texture,et=s.get(N),ft=s.get(E);N.addEventListener("dispose",I);const dt=N.textures,lt=N.isWebGLCubeRenderTarget===!0,Ot=dt.length>1;if(Ot||(ft.__webglTexture===void 0&&(ft.__webglTexture=o.createTexture()),ft.__version=E.version,h.memory.textures++),lt){et.__webglFramebuffer=[];for(let Dt=0;Dt<6;Dt++)if(E.mipmaps&&E.mipmaps.length>0){et.__webglFramebuffer[Dt]=[];for(let Ht=0;Ht<E.mipmaps.length;Ht++)et.__webglFramebuffer[Dt][Ht]=o.createFramebuffer()}else et.__webglFramebuffer[Dt]=o.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){et.__webglFramebuffer=[];for(let Dt=0;Dt<E.mipmaps.length;Dt++)et.__webglFramebuffer[Dt]=o.createFramebuffer()}else et.__webglFramebuffer=o.createFramebuffer();if(Ot)for(let Dt=0,Ht=dt.length;Dt<Ht;Dt++){const Vt=s.get(dt[Dt]);Vt.__webglTexture===void 0&&(Vt.__webglTexture=o.createTexture(),h.memory.textures++)}if(N.samples>0&&ve(N)===!1){et.__webglMultisampledFramebuffer=o.createFramebuffer(),et.__webglColorRenderbuffer=[],i.bindFramebuffer(o.FRAMEBUFFER,et.__webglMultisampledFramebuffer);for(let Dt=0;Dt<dt.length;Dt++){const Ht=dt[Dt];et.__webglColorRenderbuffer[Dt]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,et.__webglColorRenderbuffer[Dt]);const Vt=u.convert(Ht.format,Ht.colorSpace),St=u.convert(Ht.type),Pt=U(Ht.internalFormat,Vt,St,Ht.colorSpace,N.isXRRenderTarget===!0),Wt=Gt(N);o.renderbufferStorageMultisample(o.RENDERBUFFER,Wt,Pt,N.width,N.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Dt,o.RENDERBUFFER,et.__webglColorRenderbuffer[Dt])}o.bindRenderbuffer(o.RENDERBUFFER,null),N.depthBuffer&&(et.__webglDepthRenderbuffer=o.createRenderbuffer(),oe(et.__webglDepthRenderbuffer,N,!0)),i.bindFramebuffer(o.FRAMEBUFFER,null)}}if(lt){i.bindTexture(o.TEXTURE_CUBE_MAP,ft.__webglTexture),vt(o.TEXTURE_CUBE_MAP,E);for(let Dt=0;Dt<6;Dt++)if(E.mipmaps&&E.mipmaps.length>0)for(let Ht=0;Ht<E.mipmaps.length;Ht++)Ct(et.__webglFramebuffer[Dt][Ht],N,E,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Dt,Ht);else Ct(et.__webglFramebuffer[Dt],N,E,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Dt,0);y(E)&&g(o.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Ot){for(let Dt=0,Ht=dt.length;Dt<Ht;Dt++){const Vt=dt[Dt],St=s.get(Vt);i.bindTexture(o.TEXTURE_2D,St.__webglTexture),vt(o.TEXTURE_2D,Vt),Ct(et.__webglFramebuffer,N,Vt,o.COLOR_ATTACHMENT0+Dt,o.TEXTURE_2D,0),y(Vt)&&g(o.TEXTURE_2D)}i.unbindTexture()}else{let Dt=o.TEXTURE_2D;if((N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(Dt=N.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(Dt,ft.__webglTexture),vt(Dt,E),E.mipmaps&&E.mipmaps.length>0)for(let Ht=0;Ht<E.mipmaps.length;Ht++)Ct(et.__webglFramebuffer[Ht],N,E,o.COLOR_ATTACHMENT0,Dt,Ht);else Ct(et.__webglFramebuffer,N,E,o.COLOR_ATTACHMENT0,Dt,0);y(E)&&g(Dt),i.unbindTexture()}N.depthBuffer&&Ne(N)}function B(N){const E=N.textures;for(let et=0,ft=E.length;et<ft;et++){const dt=E[et];if(y(dt)){const lt=O(N),Ot=s.get(dt).__webglTexture;i.bindTexture(lt,Ot),g(lt),i.unbindTexture()}}}const Sn=[],Me=[];function de(N){if(N.samples>0){if(ve(N)===!1){const E=N.textures,et=N.width,ft=N.height;let dt=o.COLOR_BUFFER_BIT;const lt=N.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Ot=s.get(N),Dt=E.length>1;if(Dt)for(let Vt=0;Vt<E.length;Vt++)i.bindFramebuffer(o.FRAMEBUFFER,Ot.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Vt,o.RENDERBUFFER,null),i.bindFramebuffer(o.FRAMEBUFFER,Ot.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Vt,o.TEXTURE_2D,null,0);i.bindFramebuffer(o.READ_FRAMEBUFFER,Ot.__webglMultisampledFramebuffer);const Ht=N.texture.mipmaps;Ht&&Ht.length>0?i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Ot.__webglFramebuffer[0]):i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Ot.__webglFramebuffer);for(let Vt=0;Vt<E.length;Vt++){if(N.resolveDepthBuffer&&(N.depthBuffer&&(dt|=o.DEPTH_BUFFER_BIT),N.stencilBuffer&&N.resolveStencilBuffer&&(dt|=o.STENCIL_BUFFER_BIT)),Dt){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,Ot.__webglColorRenderbuffer[Vt]);const St=s.get(E[Vt]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,St,0)}o.blitFramebuffer(0,0,et,ft,0,0,et,ft,dt,o.NEAREST),m===!0&&(Sn.length=0,Me.length=0,Sn.push(o.COLOR_ATTACHMENT0+Vt),N.depthBuffer&&N.resolveDepthBuffer===!1&&(Sn.push(lt),Me.push(lt),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,Me)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,Sn))}if(i.bindFramebuffer(o.READ_FRAMEBUFFER,null),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),Dt)for(let Vt=0;Vt<E.length;Vt++){i.bindFramebuffer(o.FRAMEBUFFER,Ot.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Vt,o.RENDERBUFFER,Ot.__webglColorRenderbuffer[Vt]);const St=s.get(E[Vt]).__webglTexture;i.bindFramebuffer(o.FRAMEBUFFER,Ot.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Vt,o.TEXTURE_2D,St,0)}i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Ot.__webglMultisampledFramebuffer)}else if(N.depthBuffer&&N.resolveDepthBuffer===!1&&m){const E=N.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[E])}}}function Gt(N){return Math.min(l.maxSamples,N.samples)}function ve(N){const E=s.get(N);return N.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function Yt(N){const E=h.render.frame;_.get(N)!==E&&(_.set(N,E),N.update())}function ae(N,E){const et=N.colorSpace,ft=N.format,dt=N.type;return N.isCompressedTexture===!0||N.isVideoTexture===!0||et!==Ar&&et!==Ha&&(Ae.getTransfer(et)===Ie?(ft!==gi||dt!==sa)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",et)),E}function Ke(N){return typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement?(p.width=N.naturalWidth||N.width,p.height=N.naturalHeight||N.height):typeof VideoFrame<"u"&&N instanceof VideoFrame?(p.width=N.displayWidth,p.height=N.displayHeight):(p.width=N.width,p.height=N.height),p}this.allocateTextureUnit=rt,this.resetTextureUnits=ot,this.setTexture2D=ut,this.setTexture2DArray=z,this.setTexture3D=Z,this.setTextureCube=Y,this.rebindTextures=Fe,this.setupRenderTarget=ge,this.updateRenderTargetMipmap=B,this.updateMultisampleRenderTarget=de,this.setupDepthRenderbuffer=Ne,this.setupFrameBufferTexture=Ct,this.useMultisampledRTT=ve}function Kb(o,t){function i(s,l=Ha){let u;const h=Ae.getTransfer(l);if(s===sa)return o.UNSIGNED_BYTE;if(s===cd)return o.UNSIGNED_SHORT_4_4_4_4;if(s===ud)return o.UNSIGNED_SHORT_5_5_5_1;if(s===av)return o.UNSIGNED_INT_5_9_9_9_REV;if(s===nv)return o.BYTE;if(s===iv)return o.SHORT;if(s===Do)return o.UNSIGNED_SHORT;if(s===ld)return o.INT;if(s===Ms)return o.UNSIGNED_INT;if(s===na)return o.FLOAT;if(s===Oo)return o.HALF_FLOAT;if(s===sv)return o.ALPHA;if(s===rv)return o.RGB;if(s===gi)return o.RGBA;if(s===Lo)return o.DEPTH_COMPONENT;if(s===No)return o.DEPTH_STENCIL;if(s===ov)return o.RED;if(s===fd)return o.RED_INTEGER;if(s===lv)return o.RG;if(s===hd)return o.RG_INTEGER;if(s===dd)return o.RGBA_INTEGER;if(s===vc||s===Sc||s===xc||s===yc)if(h===Ie)if(u=t.get("WEBGL_compressed_texture_s3tc_srgb"),u!==null){if(s===vc)return u.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Sc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===xc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===yc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(u=t.get("WEBGL_compressed_texture_s3tc"),u!==null){if(s===vc)return u.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Sc)return u.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===xc)return u.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===yc)return u.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Lh||s===Nh||s===Oh||s===Ph)if(u=t.get("WEBGL_compressed_texture_pvrtc"),u!==null){if(s===Lh)return u.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Nh)return u.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Oh)return u.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Ph)return u.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===zh||s===Ih||s===Bh)if(u=t.get("WEBGL_compressed_texture_etc"),u!==null){if(s===zh||s===Ih)return h===Ie?u.COMPRESSED_SRGB8_ETC2:u.COMPRESSED_RGB8_ETC2;if(s===Bh)return h===Ie?u.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:u.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Fh||s===Hh||s===Gh||s===Vh||s===kh||s===Xh||s===Wh||s===qh||s===Yh||s===jh||s===Zh||s===Kh||s===Qh||s===Jh)if(u=t.get("WEBGL_compressed_texture_astc"),u!==null){if(s===Fh)return h===Ie?u.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:u.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Hh)return h===Ie?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:u.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Gh)return h===Ie?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:u.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Vh)return h===Ie?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:u.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===kh)return h===Ie?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:u.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Xh)return h===Ie?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:u.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Wh)return h===Ie?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:u.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===qh)return h===Ie?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:u.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Yh)return h===Ie?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:u.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===jh)return h===Ie?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:u.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Zh)return h===Ie?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:u.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Kh)return h===Ie?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:u.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Qh)return h===Ie?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:u.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Jh)return h===Ie?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:u.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Mc||s===$h||s===td)if(u=t.get("EXT_texture_compression_bptc"),u!==null){if(s===Mc)return h===Ie?u.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:u.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===$h)return u.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===td)return u.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===cv||s===ed||s===nd||s===id)if(u=t.get("EXT_texture_compression_rgtc"),u!==null){if(s===Mc)return u.COMPRESSED_RED_RGTC1_EXT;if(s===ed)return u.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===nd)return u.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===id)return u.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Uo?o.UNSIGNED_INT_24_8:o[s]!==void 0?o[s]:null}return{convert:i}}const Qb=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Jb=`
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

}`;class $b{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,i,s){if(this.texture===null){const l=new Vn,u=t.properties.get(l);u.__webglTexture=i.texture,(i.depthNear!==s.depthNear||i.depthFar!==s.depthFar)&&(this.depthNear=i.depthNear,this.depthFar=i.depthFar),this.texture=l}}getMesh(t){if(this.texture!==null&&this.mesh===null){const i=t.cameras[0].viewport,s=new Xa({vertexShader:Qb,fragmentShader:Jb,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new vi(new Uc(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class tA extends bs{constructor(t,i){super();const s=this;let l=null,u=1,h=null,d="local-floor",m=1,p=null,_=null,v=null,S=null,M=null,T=null;const R=new $b,y=i.getContextAttributes();let g=null,O=null;const U=[],w=[],F=new he;let V=null;const I=new ci;I.viewport=new $e;const q=new ci;q.viewport=new $e;const D=[I,q],C=new xy;let G=null,ot=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let mt=U[Q];return mt===void 0&&(mt=new uh,U[Q]=mt),mt.getTargetRaySpace()},this.getControllerGrip=function(Q){let mt=U[Q];return mt===void 0&&(mt=new uh,U[Q]=mt),mt.getGripSpace()},this.getHand=function(Q){let mt=U[Q];return mt===void 0&&(mt=new uh,U[Q]=mt),mt.getHandSpace()};function rt(Q){const mt=w.indexOf(Q.inputSource);if(mt===-1)return;const yt=U[mt];yt!==void 0&&(yt.update(Q.inputSource,Q.frame,p||h),yt.dispatchEvent({type:Q.type,data:Q.inputSource}))}function pt(){l.removeEventListener("select",rt),l.removeEventListener("selectstart",rt),l.removeEventListener("selectend",rt),l.removeEventListener("squeeze",rt),l.removeEventListener("squeezestart",rt),l.removeEventListener("squeezeend",rt),l.removeEventListener("end",pt),l.removeEventListener("inputsourceschange",ut);for(let Q=0;Q<U.length;Q++){const mt=w[Q];mt!==null&&(w[Q]=null,U[Q].disconnect(mt))}G=null,ot=null,R.reset(),t.setRenderTarget(g),M=null,S=null,v=null,l=null,O=null,xt.stop(),s.isPresenting=!1,t.setPixelRatio(V),t.setSize(F.width,F.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){u=Q,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){d=Q,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||h},this.setReferenceSpace=function(Q){p=Q},this.getBaseLayer=function(){return S!==null?S:M},this.getBinding=function(){return v},this.getFrame=function(){return T},this.getSession=function(){return l},this.setSession=async function(Q){if(l=Q,l!==null){if(g=t.getRenderTarget(),l.addEventListener("select",rt),l.addEventListener("selectstart",rt),l.addEventListener("selectend",rt),l.addEventListener("squeeze",rt),l.addEventListener("squeezestart",rt),l.addEventListener("squeezeend",rt),l.addEventListener("end",pt),l.addEventListener("inputsourceschange",ut),y.xrCompatible!==!0&&await i.makeXRCompatible(),V=t.getPixelRatio(),t.getSize(F),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let yt=null,At=null,Ct=null;y.depth&&(Ct=y.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,yt=y.stencil?No:Lo,At=y.stencil?Uo:Ms);const oe={colorFormat:i.RGBA8,depthFormat:Ct,scaleFactor:u};v=new XRWebGLBinding(l,i),S=v.createProjectionLayer(oe),l.updateRenderState({layers:[S]}),t.setPixelRatio(1),t.setSize(S.textureWidth,S.textureHeight,!1),O=new Ts(S.textureWidth,S.textureHeight,{format:gi,type:sa,depthTexture:new Mv(S.textureWidth,S.textureHeight,At,void 0,void 0,void 0,void 0,void 0,void 0,yt),stencilBuffer:y.stencil,colorSpace:t.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:S.ignoreDepthValues===!1,resolveStencilBuffer:S.ignoreDepthValues===!1})}else{const yt={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:u};M=new XRWebGLLayer(l,i,yt),l.updateRenderState({baseLayer:M}),t.setPixelRatio(1),t.setSize(M.framebufferWidth,M.framebufferHeight,!1),O=new Ts(M.framebufferWidth,M.framebufferHeight,{format:gi,type:sa,colorSpace:t.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:M.ignoreDepthValues===!1,resolveStencilBuffer:M.ignoreDepthValues===!1})}O.isXRRenderTarget=!0,this.setFoveation(m),p=null,h=await l.requestReferenceSpace(d),xt.setContext(l),xt.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return R.getDepthTexture()};function ut(Q){for(let mt=0;mt<Q.removed.length;mt++){const yt=Q.removed[mt],At=w.indexOf(yt);At>=0&&(w[At]=null,U[At].disconnect(yt))}for(let mt=0;mt<Q.added.length;mt++){const yt=Q.added[mt];let At=w.indexOf(yt);if(At===-1){for(let oe=0;oe<U.length;oe++)if(oe>=w.length){w.push(yt),At=oe;break}else if(w[oe]===null){w[oe]=yt,At=oe;break}if(At===-1)break}const Ct=U[At];Ct&&Ct.connect(yt)}}const z=new tt,Z=new tt;function Y(Q,mt,yt){z.setFromMatrixPosition(mt.matrixWorld),Z.setFromMatrixPosition(yt.matrixWorld);const At=z.distanceTo(Z),Ct=mt.projectionMatrix.elements,oe=yt.projectionMatrix.elements,Kt=Ct[14]/(Ct[10]-1),Ne=Ct[14]/(Ct[10]+1),Fe=(Ct[9]+1)/Ct[5],ge=(Ct[9]-1)/Ct[5],B=(Ct[8]-1)/Ct[0],Sn=(oe[8]+1)/oe[0],Me=Kt*B,de=Kt*Sn,Gt=At/(-B+Sn),ve=Gt*-B;if(mt.matrixWorld.decompose(Q.position,Q.quaternion,Q.scale),Q.translateX(ve),Q.translateZ(Gt),Q.matrixWorld.compose(Q.position,Q.quaternion,Q.scale),Q.matrixWorldInverse.copy(Q.matrixWorld).invert(),Ct[10]===-1)Q.projectionMatrix.copy(mt.projectionMatrix),Q.projectionMatrixInverse.copy(mt.projectionMatrixInverse);else{const Yt=Kt+Gt,ae=Ne+Gt,Ke=Me-ve,N=de+(At-ve),E=Fe*Ne/ae*Yt,et=ge*Ne/ae*Yt;Q.projectionMatrix.makePerspective(Ke,N,E,et,Yt,ae),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert()}}function Mt(Q,mt){mt===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(mt.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(l===null)return;let mt=Q.near,yt=Q.far;R.texture!==null&&(R.depthNear>0&&(mt=R.depthNear),R.depthFar>0&&(yt=R.depthFar)),C.near=q.near=I.near=mt,C.far=q.far=I.far=yt,(G!==C.near||ot!==C.far)&&(l.updateRenderState({depthNear:C.near,depthFar:C.far}),G=C.near,ot=C.far),I.layers.mask=Q.layers.mask|2,q.layers.mask=Q.layers.mask|4,C.layers.mask=I.layers.mask|q.layers.mask;const At=Q.parent,Ct=C.cameras;Mt(C,At);for(let oe=0;oe<Ct.length;oe++)Mt(Ct[oe],At);Ct.length===2?Y(C,I,q):C.projectionMatrix.copy(I.projectionMatrix),L(Q,C,At)};function L(Q,mt,yt){yt===null?Q.matrix.copy(mt.matrixWorld):(Q.matrix.copy(yt.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(mt.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(mt.projectionMatrix),Q.projectionMatrixInverse.copy(mt.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=ad*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}this.getCamera=function(){return C},this.getFoveation=function(){if(!(S===null&&M===null))return m},this.setFoveation=function(Q){m=Q,S!==null&&(S.fixedFoveation=Q),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=Q)},this.hasDepthSensing=function(){return R.texture!==null},this.getDepthSensingMesh=function(){return R.getMesh(C)};let $=null;function vt(Q,mt){if(_=mt.getViewerPose(p||h),T=mt,_!==null){const yt=_.views;M!==null&&(t.setRenderTargetFramebuffer(O,M.framebuffer),t.setRenderTarget(O));let At=!1;yt.length!==C.cameras.length&&(C.cameras.length=0,At=!0);for(let Kt=0;Kt<yt.length;Kt++){const Ne=yt[Kt];let Fe=null;if(M!==null)Fe=M.getViewport(Ne);else{const B=v.getViewSubImage(S,Ne);Fe=B.viewport,Kt===0&&(t.setRenderTargetTextures(O,B.colorTexture,B.depthStencilTexture),t.setRenderTarget(O))}let ge=D[Kt];ge===void 0&&(ge=new ci,ge.layers.enable(Kt),ge.viewport=new $e,D[Kt]=ge),ge.matrix.fromArray(Ne.transform.matrix),ge.matrix.decompose(ge.position,ge.quaternion,ge.scale),ge.projectionMatrix.fromArray(Ne.projectionMatrix),ge.projectionMatrixInverse.copy(ge.projectionMatrix).invert(),ge.viewport.set(Fe.x,Fe.y,Fe.width,Fe.height),Kt===0&&(C.matrix.copy(ge.matrix),C.matrix.decompose(C.position,C.quaternion,C.scale)),At===!0&&C.cameras.push(ge)}const Ct=l.enabledFeatures;if(Ct&&Ct.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&v){const Kt=v.getDepthInformation(yt[0]);Kt&&Kt.isValid&&Kt.texture&&R.init(t,Kt,l.renderState)}}for(let yt=0;yt<U.length;yt++){const At=w[yt],Ct=U[yt];At!==null&&Ct!==void 0&&Ct.update(At,mt,p||h)}$&&$(Q,mt),mt.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:mt}),T=null}const xt=new Ev;xt.setAnimationLoop(vt),this.setAnimationLoop=function(Q){$=Q},this.dispose=function(){}}}const _s=new ra,eA=new sn;function nA(o,t){function i(y,g){y.matrixAutoUpdate===!0&&y.updateMatrix(),g.value.copy(y.matrix)}function s(y,g){g.color.getRGB(y.fogColor.value,vv(o)),g.isFog?(y.fogNear.value=g.near,y.fogFar.value=g.far):g.isFogExp2&&(y.fogDensity.value=g.density)}function l(y,g,O,U,w){g.isMeshBasicMaterial||g.isMeshLambertMaterial?u(y,g):g.isMeshToonMaterial?(u(y,g),v(y,g)):g.isMeshPhongMaterial?(u(y,g),_(y,g)):g.isMeshStandardMaterial?(u(y,g),S(y,g),g.isMeshPhysicalMaterial&&M(y,g,w)):g.isMeshMatcapMaterial?(u(y,g),T(y,g)):g.isMeshDepthMaterial?u(y,g):g.isMeshDistanceMaterial?(u(y,g),R(y,g)):g.isMeshNormalMaterial?u(y,g):g.isLineBasicMaterial?(h(y,g),g.isLineDashedMaterial&&d(y,g)):g.isPointsMaterial?m(y,g,O,U):g.isSpriteMaterial?p(y,g):g.isShadowMaterial?(y.color.value.copy(g.color),y.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function u(y,g){y.opacity.value=g.opacity,g.color&&y.diffuse.value.copy(g.color),g.emissive&&y.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(y.map.value=g.map,i(g.map,y.mapTransform)),g.alphaMap&&(y.alphaMap.value=g.alphaMap,i(g.alphaMap,y.alphaMapTransform)),g.bumpMap&&(y.bumpMap.value=g.bumpMap,i(g.bumpMap,y.bumpMapTransform),y.bumpScale.value=g.bumpScale,g.side===Gn&&(y.bumpScale.value*=-1)),g.normalMap&&(y.normalMap.value=g.normalMap,i(g.normalMap,y.normalMapTransform),y.normalScale.value.copy(g.normalScale),g.side===Gn&&y.normalScale.value.negate()),g.displacementMap&&(y.displacementMap.value=g.displacementMap,i(g.displacementMap,y.displacementMapTransform),y.displacementScale.value=g.displacementScale,y.displacementBias.value=g.displacementBias),g.emissiveMap&&(y.emissiveMap.value=g.emissiveMap,i(g.emissiveMap,y.emissiveMapTransform)),g.specularMap&&(y.specularMap.value=g.specularMap,i(g.specularMap,y.specularMapTransform)),g.alphaTest>0&&(y.alphaTest.value=g.alphaTest);const O=t.get(g),U=O.envMap,w=O.envMapRotation;U&&(y.envMap.value=U,_s.copy(w),_s.x*=-1,_s.y*=-1,_s.z*=-1,U.isCubeTexture&&U.isRenderTargetTexture===!1&&(_s.y*=-1,_s.z*=-1),y.envMapRotation.value.setFromMatrix4(eA.makeRotationFromEuler(_s)),y.flipEnvMap.value=U.isCubeTexture&&U.isRenderTargetTexture===!1?-1:1,y.reflectivity.value=g.reflectivity,y.ior.value=g.ior,y.refractionRatio.value=g.refractionRatio),g.lightMap&&(y.lightMap.value=g.lightMap,y.lightMapIntensity.value=g.lightMapIntensity,i(g.lightMap,y.lightMapTransform)),g.aoMap&&(y.aoMap.value=g.aoMap,y.aoMapIntensity.value=g.aoMapIntensity,i(g.aoMap,y.aoMapTransform))}function h(y,g){y.diffuse.value.copy(g.color),y.opacity.value=g.opacity,g.map&&(y.map.value=g.map,i(g.map,y.mapTransform))}function d(y,g){y.dashSize.value=g.dashSize,y.totalSize.value=g.dashSize+g.gapSize,y.scale.value=g.scale}function m(y,g,O,U){y.diffuse.value.copy(g.color),y.opacity.value=g.opacity,y.size.value=g.size*O,y.scale.value=U*.5,g.map&&(y.map.value=g.map,i(g.map,y.uvTransform)),g.alphaMap&&(y.alphaMap.value=g.alphaMap,i(g.alphaMap,y.alphaMapTransform)),g.alphaTest>0&&(y.alphaTest.value=g.alphaTest)}function p(y,g){y.diffuse.value.copy(g.color),y.opacity.value=g.opacity,y.rotation.value=g.rotation,g.map&&(y.map.value=g.map,i(g.map,y.mapTransform)),g.alphaMap&&(y.alphaMap.value=g.alphaMap,i(g.alphaMap,y.alphaMapTransform)),g.alphaTest>0&&(y.alphaTest.value=g.alphaTest)}function _(y,g){y.specular.value.copy(g.specular),y.shininess.value=Math.max(g.shininess,1e-4)}function v(y,g){g.gradientMap&&(y.gradientMap.value=g.gradientMap)}function S(y,g){y.metalness.value=g.metalness,g.metalnessMap&&(y.metalnessMap.value=g.metalnessMap,i(g.metalnessMap,y.metalnessMapTransform)),y.roughness.value=g.roughness,g.roughnessMap&&(y.roughnessMap.value=g.roughnessMap,i(g.roughnessMap,y.roughnessMapTransform)),g.envMap&&(y.envMapIntensity.value=g.envMapIntensity)}function M(y,g,O){y.ior.value=g.ior,g.sheen>0&&(y.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),y.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(y.sheenColorMap.value=g.sheenColorMap,i(g.sheenColorMap,y.sheenColorMapTransform)),g.sheenRoughnessMap&&(y.sheenRoughnessMap.value=g.sheenRoughnessMap,i(g.sheenRoughnessMap,y.sheenRoughnessMapTransform))),g.clearcoat>0&&(y.clearcoat.value=g.clearcoat,y.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(y.clearcoatMap.value=g.clearcoatMap,i(g.clearcoatMap,y.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,i(g.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(y.clearcoatNormalMap.value=g.clearcoatNormalMap,i(g.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===Gn&&y.clearcoatNormalScale.value.negate())),g.dispersion>0&&(y.dispersion.value=g.dispersion),g.iridescence>0&&(y.iridescence.value=g.iridescence,y.iridescenceIOR.value=g.iridescenceIOR,y.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(y.iridescenceMap.value=g.iridescenceMap,i(g.iridescenceMap,y.iridescenceMapTransform)),g.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=g.iridescenceThicknessMap,i(g.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),g.transmission>0&&(y.transmission.value=g.transmission,y.transmissionSamplerMap.value=O.texture,y.transmissionSamplerSize.value.set(O.width,O.height),g.transmissionMap&&(y.transmissionMap.value=g.transmissionMap,i(g.transmissionMap,y.transmissionMapTransform)),y.thickness.value=g.thickness,g.thicknessMap&&(y.thicknessMap.value=g.thicknessMap,i(g.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=g.attenuationDistance,y.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(y.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(y.anisotropyMap.value=g.anisotropyMap,i(g.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=g.specularIntensity,y.specularColor.value.copy(g.specularColor),g.specularColorMap&&(y.specularColorMap.value=g.specularColorMap,i(g.specularColorMap,y.specularColorMapTransform)),g.specularIntensityMap&&(y.specularIntensityMap.value=g.specularIntensityMap,i(g.specularIntensityMap,y.specularIntensityMapTransform))}function T(y,g){g.matcap&&(y.matcap.value=g.matcap)}function R(y,g){const O=t.get(g).light;y.referencePosition.value.setFromMatrixPosition(O.matrixWorld),y.nearDistance.value=O.shadow.camera.near,y.farDistance.value=O.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:l}}function iA(o,t,i,s){let l={},u={},h=[];const d=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function m(O,U){const w=U.program;s.uniformBlockBinding(O,w)}function p(O,U){let w=l[O.id];w===void 0&&(T(O),w=_(O),l[O.id]=w,O.addEventListener("dispose",y));const F=U.program;s.updateUBOMapping(O,F);const V=t.render.frame;u[O.id]!==V&&(S(O),u[O.id]=V)}function _(O){const U=v();O.__bindingPointIndex=U;const w=o.createBuffer(),F=O.__size,V=O.usage;return o.bindBuffer(o.UNIFORM_BUFFER,w),o.bufferData(o.UNIFORM_BUFFER,F,V),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,U,w),w}function v(){for(let O=0;O<d;O++)if(h.indexOf(O)===-1)return h.push(O),O;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function S(O){const U=l[O.id],w=O.uniforms,F=O.__cache;o.bindBuffer(o.UNIFORM_BUFFER,U);for(let V=0,I=w.length;V<I;V++){const q=Array.isArray(w[V])?w[V]:[w[V]];for(let D=0,C=q.length;D<C;D++){const G=q[D];if(M(G,V,D,F)===!0){const ot=G.__offset,rt=Array.isArray(G.value)?G.value:[G.value];let pt=0;for(let ut=0;ut<rt.length;ut++){const z=rt[ut],Z=R(z);typeof z=="number"||typeof z=="boolean"?(G.__data[0]=z,o.bufferSubData(o.UNIFORM_BUFFER,ot+pt,G.__data)):z.isMatrix3?(G.__data[0]=z.elements[0],G.__data[1]=z.elements[1],G.__data[2]=z.elements[2],G.__data[3]=0,G.__data[4]=z.elements[3],G.__data[5]=z.elements[4],G.__data[6]=z.elements[5],G.__data[7]=0,G.__data[8]=z.elements[6],G.__data[9]=z.elements[7],G.__data[10]=z.elements[8],G.__data[11]=0):(z.toArray(G.__data,pt),pt+=Z.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,ot,G.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function M(O,U,w,F){const V=O.value,I=U+"_"+w;if(F[I]===void 0)return typeof V=="number"||typeof V=="boolean"?F[I]=V:F[I]=V.clone(),!0;{const q=F[I];if(typeof V=="number"||typeof V=="boolean"){if(q!==V)return F[I]=V,!0}else if(q.equals(V)===!1)return q.copy(V),!0}return!1}function T(O){const U=O.uniforms;let w=0;const F=16;for(let I=0,q=U.length;I<q;I++){const D=Array.isArray(U[I])?U[I]:[U[I]];for(let C=0,G=D.length;C<G;C++){const ot=D[C],rt=Array.isArray(ot.value)?ot.value:[ot.value];for(let pt=0,ut=rt.length;pt<ut;pt++){const z=rt[pt],Z=R(z),Y=w%F,Mt=Y%Z.boundary,L=Y+Mt;w+=Mt,L!==0&&F-L<Z.storage&&(w+=F-L),ot.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),ot.__offset=w,w+=Z.storage}}}const V=w%F;return V>0&&(w+=F-V),O.__size=w,O.__cache={},this}function R(O){const U={boundary:0,storage:0};return typeof O=="number"||typeof O=="boolean"?(U.boundary=4,U.storage=4):O.isVector2?(U.boundary=8,U.storage=8):O.isVector3||O.isColor?(U.boundary=16,U.storage=12):O.isVector4?(U.boundary=16,U.storage=16):O.isMatrix3?(U.boundary=48,U.storage=48):O.isMatrix4?(U.boundary=64,U.storage=64):O.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",O),U}function y(O){const U=O.target;U.removeEventListener("dispose",y);const w=h.indexOf(U.__bindingPointIndex);h.splice(w,1),o.deleteBuffer(l[U.id]),delete l[U.id],delete u[U.id]}function g(){for(const O in l)o.deleteBuffer(l[O]);h=[],l={},u={}}return{bind:m,update:p,dispose:g}}class aA{constructor(t={}){const{canvas:i=Bx(),context:s=null,depth:l=!0,stencil:u=!1,alpha:h=!1,antialias:d=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:_="default",failIfMajorPerformanceCaveat:v=!1,reverseDepthBuffer:S=!1}=t;this.isWebGLRenderer=!0;let M;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");M=s.getContextAttributes().alpha}else M=h;const T=new Uint32Array(4),R=new Int32Array(4);let y=null,g=null;const O=[],U=[];this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Va,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const w=this;let F=!1;this._outputColorSpace=li;let V=0,I=0,q=null,D=-1,C=null;const G=new $e,ot=new $e;let rt=null;const pt=new Le(0);let ut=0,z=i.width,Z=i.height,Y=1,Mt=null,L=null;const $=new $e(0,0,z,Z),vt=new $e(0,0,z,Z);let xt=!1;const Q=new yv;let mt=!1,yt=!1;const At=new sn,Ct=new sn,oe=new tt,Kt=new $e,Ne={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Fe=!1;function ge(){return q===null?Y:1}let B=s;function Sn(A,W){return i.getContext(A,W)}try{const A={alpha:!0,depth:l,stencil:u,antialias:d,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:_,failIfMajorPerformanceCaveat:v};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${od}`),i.addEventListener("webglcontextlost",zt,!1),i.addEventListener("webglcontextrestored",bt,!1),i.addEventListener("webglcontextcreationerror",gt,!1),B===null){const W="webgl2";if(B=Sn(W,A),B===null)throw Sn(W)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let Me,de,Gt,ve,Yt,ae,Ke,N,E,et,ft,dt,lt,Ot,Dt,Ht,Vt,St,Pt,Wt,qt,Rt,ie,k;function Ut(){Me=new pT(B),Me.init(),Rt=new Kb(B,Me),de=new oT(B,Me,t,Rt),Gt=new jb(B,Me),de.reverseDepthBuffer&&S&&Gt.buffers.depth.setReversed(!0),ve=new gT(B),Yt=new Pb,ae=new Zb(B,Me,Gt,Yt,de,Rt,ve),Ke=new cT(w),N=new dT(w),E=new Ey(B),ie=new sT(B,E),et=new mT(B,E,ve,ie),ft=new ST(B,et,E,ve),Pt=new vT(B,de,ae),Ht=new lT(Yt),dt=new Ob(w,Ke,N,Me,de,ie,Ht),lt=new nA(w,Yt),Ot=new Ib,Dt=new kb(Me),St=new aT(w,Ke,N,Gt,ft,M,m),Vt=new qb(w,ft,de),k=new iA(B,ve,de,Gt),Wt=new rT(B,Me,ve),qt=new _T(B,Me,ve),ve.programs=dt.programs,w.capabilities=de,w.extensions=Me,w.properties=Yt,w.renderLists=Ot,w.shadowMap=Vt,w.state=Gt,w.info=ve}Ut();const Et=new tA(w,B);this.xr=Et,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){const A=Me.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=Me.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return Y},this.setPixelRatio=function(A){A!==void 0&&(Y=A,this.setSize(z,Z,!1))},this.getSize=function(A){return A.set(z,Z)},this.setSize=function(A,W,at=!0){if(Et.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}z=A,Z=W,i.width=Math.floor(A*Y),i.height=Math.floor(W*Y),at===!0&&(i.style.width=A+"px",i.style.height=W+"px"),this.setViewport(0,0,A,W)},this.getDrawingBufferSize=function(A){return A.set(z*Y,Z*Y).floor()},this.setDrawingBufferSize=function(A,W,at){z=A,Z=W,Y=at,i.width=Math.floor(A*at),i.height=Math.floor(W*at),this.setViewport(0,0,A,W)},this.getCurrentViewport=function(A){return A.copy(G)},this.getViewport=function(A){return A.copy($)},this.setViewport=function(A,W,at,st){A.isVector4?$.set(A.x,A.y,A.z,A.w):$.set(A,W,at,st),Gt.viewport(G.copy($).multiplyScalar(Y).round())},this.getScissor=function(A){return A.copy(vt)},this.setScissor=function(A,W,at,st){A.isVector4?vt.set(A.x,A.y,A.z,A.w):vt.set(A,W,at,st),Gt.scissor(ot.copy(vt).multiplyScalar(Y).round())},this.getScissorTest=function(){return xt},this.setScissorTest=function(A){Gt.setScissorTest(xt=A)},this.setOpaqueSort=function(A){Mt=A},this.setTransparentSort=function(A){L=A},this.getClearColor=function(A){return A.copy(St.getClearColor())},this.setClearColor=function(){St.setClearColor(...arguments)},this.getClearAlpha=function(){return St.getClearAlpha()},this.setClearAlpha=function(){St.setClearAlpha(...arguments)},this.clear=function(A=!0,W=!0,at=!0){let st=0;if(A){let j=!1;if(q!==null){const Tt=q.texture.format;j=Tt===dd||Tt===hd||Tt===fd}if(j){const Tt=q.texture.type,wt=Tt===sa||Tt===Ms||Tt===Do||Tt===Uo||Tt===cd||Tt===ud,Nt=St.getClearColor(),It=St.getClearAlpha(),Jt=Nt.r,jt=Nt.g,kt=Nt.b;wt?(T[0]=Jt,T[1]=jt,T[2]=kt,T[3]=It,B.clearBufferuiv(B.COLOR,0,T)):(R[0]=Jt,R[1]=jt,R[2]=kt,R[3]=It,B.clearBufferiv(B.COLOR,0,R))}else st|=B.COLOR_BUFFER_BIT}W&&(st|=B.DEPTH_BUFFER_BIT),at&&(st|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),B.clear(st)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",zt,!1),i.removeEventListener("webglcontextrestored",bt,!1),i.removeEventListener("webglcontextcreationerror",gt,!1),St.dispose(),Ot.dispose(),Dt.dispose(),Yt.dispose(),Ke.dispose(),N.dispose(),ft.dispose(),ie.dispose(),k.dispose(),dt.dispose(),Et.dispose(),Et.removeEventListener("sessionstart",rn),Et.removeEventListener("sessionend",xn),Nn.stop()};function zt(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),F=!0}function bt(){console.log("THREE.WebGLRenderer: Context Restored."),F=!1;const A=ve.autoReset,W=Vt.enabled,at=Vt.autoUpdate,st=Vt.needsUpdate,j=Vt.type;Ut(),ve.autoReset=A,Vt.enabled=W,Vt.autoUpdate=at,Vt.needsUpdate=st,Vt.type=j}function gt(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function Bt(A){const W=A.target;W.removeEventListener("dispose",Bt),ne(W)}function ne(A){we(A),Yt.remove(A)}function we(A){const W=Yt.get(A).programs;W!==void 0&&(W.forEach(function(at){dt.releaseProgram(at)}),A.isShaderMaterial&&dt.releaseShaderCache(A))}this.renderBufferDirect=function(A,W,at,st,j,Tt){W===null&&(W=Ne);const wt=j.isMesh&&j.matrixWorld.determinant()<0,Nt=ja(A,W,at,st,j);Gt.setMaterial(st,wt);let It=at.index,Jt=1;if(st.wireframe===!0){if(It=et.getWireframeAttribute(at),It===void 0)return;Jt=2}const jt=at.drawRange,kt=at.attributes.position;let ce=jt.start*Jt,Re=(jt.start+jt.count)*Jt;Tt!==null&&(ce=Math.max(ce,Tt.start*Jt),Re=Math.min(Re,(Tt.start+Tt.count)*Jt)),It!==null?(ce=Math.max(ce,0),Re=Math.min(Re,It.count)):kt!=null&&(ce=Math.max(ce,0),Re=Math.min(Re,kt.count));const Ve=Re-ce;if(Ve<0||Ve===1/0)return;ie.setup(j,st,Nt,at,It);let Se,xe=Wt;if(It!==null&&(Se=E.get(It),xe=qt,xe.setIndex(Se)),j.isMesh)st.wireframe===!0?(Gt.setLineWidth(st.wireframeLinewidth*ge()),xe.setMode(B.LINES)):xe.setMode(B.TRIANGLES);else if(j.isLine){let Zt=st.linewidth;Zt===void 0&&(Zt=1),Gt.setLineWidth(Zt*ge()),j.isLineSegments?xe.setMode(B.LINES):j.isLineLoop?xe.setMode(B.LINE_LOOP):xe.setMode(B.LINE_STRIP)}else j.isPoints?xe.setMode(B.POINTS):j.isSprite&&xe.setMode(B.TRIANGLES);if(j.isBatchedMesh)if(j._multiDrawInstances!==null)yr("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),xe.renderMultiDrawInstances(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount,j._multiDrawInstances);else if(Me.get("WEBGL_multi_draw"))xe.renderMultiDraw(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount);else{const Zt=j._multiDrawStarts,Ye=j._multiDrawCounts,Ee=j._multiDrawCount,bn=It?E.get(It).bytesPerElement:1,ua=Yt.get(st).currentProgram.getUniforms();for(let ke=0;ke<Ee;ke++)ua.setValue(B,"_gl_DrawID",ke),xe.render(Zt[ke]/bn,Ye[ke])}else if(j.isInstancedMesh)xe.renderInstances(ce,Ve,j.count);else if(at.isInstancedBufferGeometry){const Zt=at._maxInstanceCount!==void 0?at._maxInstanceCount:1/0,Ye=Math.min(at.instanceCount,Zt);xe.renderInstances(ce,Ve,Ye)}else xe.render(ce,Ve)};function Te(A,W,at){A.transparent===!0&&A.side===ea&&A.forceSinglePass===!1?(A.side=Gn,A.needsUpdate=!0,la(A,W,at),A.side=ka,A.needsUpdate=!0,la(A,W,at),A.side=ea):la(A,W,at)}this.compile=function(A,W,at=null){at===null&&(at=A),g=Dt.get(at),g.init(W),U.push(g),at.traverseVisible(function(j){j.isLight&&j.layers.test(W.layers)&&(g.pushLight(j),j.castShadow&&g.pushShadow(j))}),A!==at&&A.traverseVisible(function(j){j.isLight&&j.layers.test(W.layers)&&(g.pushLight(j),j.castShadow&&g.pushShadow(j))}),g.setupLights();const st=new Set;return A.traverse(function(j){if(!(j.isMesh||j.isPoints||j.isLine||j.isSprite))return;const Tt=j.material;if(Tt)if(Array.isArray(Tt))for(let wt=0;wt<Tt.length;wt++){const Nt=Tt[wt];Te(Nt,at,j),st.add(Nt)}else Te(Tt,at,j),st.add(Tt)}),g=U.pop(),st},this.compileAsync=function(A,W,at=null){const st=this.compile(A,W,at);return new Promise(j=>{function Tt(){if(st.forEach(function(wt){Yt.get(wt).currentProgram.isReady()&&st.delete(wt)}),st.size===0){j(A);return}setTimeout(Tt,10)}Me.get("KHR_parallel_shader_compile")!==null?Tt():setTimeout(Tt,10)})};let Xn=null;function dn(A){Xn&&Xn(A)}function rn(){Nn.stop()}function xn(){Nn.start()}const Nn=new Ev;Nn.setAnimationLoop(dn),typeof self<"u"&&Nn.setContext(self),this.setAnimationLoop=function(A){Xn=A,Et.setAnimationLoop(A),A===null?Nn.stop():Nn.start()},Et.addEventListener("sessionstart",rn),Et.addEventListener("sessionend",xn),this.render=function(A,W){if(W!==void 0&&W.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(F===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),Et.enabled===!0&&Et.isPresenting===!0&&(Et.cameraAutoUpdate===!0&&Et.updateCamera(W),W=Et.getCamera()),A.isScene===!0&&A.onBeforeRender(w,A,W,q),g=Dt.get(A,U.length),g.init(W),U.push(g),Ct.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),Q.setFromProjectionMatrix(Ct),yt=this.localClippingEnabled,mt=Ht.init(this.clippingPlanes,yt),y=Ot.get(A,O.length),y.init(),O.push(y),Et.enabled===!0&&Et.isPresenting===!0){const Tt=w.xr.getDepthSensingMesh();Tt!==null&&qa(Tt,W,-1/0,w.sortObjects)}qa(A,W,0,w.sortObjects),y.finish(),w.sortObjects===!0&&y.sort(Mt,L),Fe=Et.enabled===!1||Et.isPresenting===!1||Et.hasDepthSensing()===!1,Fe&&St.addToRenderList(y,A),this.info.render.frame++,mt===!0&&Ht.beginShadows();const at=g.state.shadowsArray;Vt.render(at,A,W),mt===!0&&Ht.endShadows(),this.info.autoReset===!0&&this.info.reset();const st=y.opaque,j=y.transmissive;if(g.setupLights(),W.isArrayCamera){const Tt=W.cameras;if(j.length>0)for(let wt=0,Nt=Tt.length;wt<Nt;wt++){const It=Tt[wt];Fo(st,j,A,It)}Fe&&St.render(A);for(let wt=0,Nt=Tt.length;wt<Nt;wt++){const It=Tt[wt];Bo(y,A,It,It.viewport)}}else j.length>0&&Fo(st,j,A,W),Fe&&St.render(A),Bo(y,A,W);q!==null&&I===0&&(ae.updateMultisampleRenderTarget(q),ae.updateRenderTargetMipmap(q)),A.isScene===!0&&A.onAfterRender(w,A,W),ie.resetDefaultState(),D=-1,C=null,U.pop(),U.length>0?(g=U[U.length-1],mt===!0&&Ht.setGlobalState(w.clippingPlanes,g.state.camera)):g=null,O.pop(),O.length>0?y=O[O.length-1]:y=null};function qa(A,W,at,st){if(A.visible===!1)return;if(A.layers.test(W.layers)){if(A.isGroup)at=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(W);else if(A.isLight)g.pushLight(A),A.castShadow&&g.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||Q.intersectsSprite(A)){st&&Kt.setFromMatrixPosition(A.matrixWorld).applyMatrix4(Ct);const wt=ft.update(A),Nt=A.material;Nt.visible&&y.push(A,wt,Nt,at,Kt.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||Q.intersectsObject(A))){const wt=ft.update(A),Nt=A.material;if(st&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Kt.copy(A.boundingSphere.center)):(wt.boundingSphere===null&&wt.computeBoundingSphere(),Kt.copy(wt.boundingSphere.center)),Kt.applyMatrix4(A.matrixWorld).applyMatrix4(Ct)),Array.isArray(Nt)){const It=wt.groups;for(let Jt=0,jt=It.length;Jt<jt;Jt++){const kt=It[Jt],ce=Nt[kt.materialIndex];ce&&ce.visible&&y.push(A,wt,ce,at,Kt.z,kt)}}else Nt.visible&&y.push(A,wt,Nt,at,Kt.z,null)}}const Tt=A.children;for(let wt=0,Nt=Tt.length;wt<Nt;wt++)qa(Tt[wt],W,at,st)}function Bo(A,W,at,st){const j=A.opaque,Tt=A.transmissive,wt=A.transparent;g.setupLightsView(at),mt===!0&&Ht.setGlobalState(w.clippingPlanes,at),st&&Gt.viewport(G.copy(st)),j.length>0&&Ya(j,W,at),Tt.length>0&&Ya(Tt,W,at),wt.length>0&&Ya(wt,W,at),Gt.buffers.depth.setTest(!0),Gt.buffers.depth.setMask(!0),Gt.buffers.color.setMask(!0),Gt.setPolygonOffset(!1)}function Fo(A,W,at,st){if((at.isScene===!0?at.overrideMaterial:null)!==null)return;g.state.transmissionRenderTarget[st.id]===void 0&&(g.state.transmissionRenderTarget[st.id]=new Ts(1,1,{generateMipmaps:!0,type:Me.has("EXT_color_buffer_half_float")||Me.has("EXT_color_buffer_float")?Oo:sa,minFilter:ys,samples:4,stencilBuffer:u,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ae.workingColorSpace}));const Tt=g.state.transmissionRenderTarget[st.id],wt=st.viewport||G;Tt.setSize(wt.z*w.transmissionResolutionScale,wt.w*w.transmissionResolutionScale);const Nt=w.getRenderTarget();w.setRenderTarget(Tt),w.getClearColor(pt),ut=w.getClearAlpha(),ut<1&&w.setClearColor(16777215,.5),w.clear(),Fe&&St.render(at);const It=w.toneMapping;w.toneMapping=Va;const Jt=st.viewport;if(st.viewport!==void 0&&(st.viewport=void 0),g.setupLightsView(st),mt===!0&&Ht.setGlobalState(w.clippingPlanes,st),Ya(A,at,st),ae.updateMultisampleRenderTarget(Tt),ae.updateRenderTargetMipmap(Tt),Me.has("WEBGL_multisampled_render_to_texture")===!1){let jt=!1;for(let kt=0,ce=W.length;kt<ce;kt++){const Re=W[kt],Ve=Re.object,Se=Re.geometry,xe=Re.material,Zt=Re.group;if(xe.side===ea&&Ve.layers.test(st.layers)){const Ye=xe.side;xe.side=Gn,xe.needsUpdate=!0,oa(Ve,at,st,Se,xe,Zt),xe.side=Ye,xe.needsUpdate=!0,jt=!0}}jt===!0&&(ae.updateMultisampleRenderTarget(Tt),ae.updateRenderTargetMipmap(Tt))}w.setRenderTarget(Nt),w.setClearColor(pt,ut),Jt!==void 0&&(st.viewport=Jt),w.toneMapping=It}function Ya(A,W,at){const st=W.isScene===!0?W.overrideMaterial:null;for(let j=0,Tt=A.length;j<Tt;j++){const wt=A[j],Nt=wt.object,It=wt.geometry,Jt=wt.group;let jt=wt.material;jt.allowOverride===!0&&st!==null&&(jt=st),Nt.layers.test(at.layers)&&oa(Nt,W,at,It,jt,Jt)}}function oa(A,W,at,st,j,Tt){A.onBeforeRender(w,W,at,st,j,Tt),A.modelViewMatrix.multiplyMatrices(at.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),j.onBeforeRender(w,W,at,st,A,Tt),j.transparent===!0&&j.side===ea&&j.forceSinglePass===!1?(j.side=Gn,j.needsUpdate=!0,w.renderBufferDirect(at,W,st,j,A,Tt),j.side=ka,j.needsUpdate=!0,w.renderBufferDirect(at,W,st,j,A,Tt),j.side=ea):w.renderBufferDirect(at,W,st,j,A,Tt),A.onAfterRender(w,W,at,st,j,Tt)}function la(A,W,at){W.isScene!==!0&&(W=Ne);const st=Yt.get(A),j=g.state.lights,Tt=g.state.shadowsArray,wt=j.state.version,Nt=dt.getParameters(A,j.state,Tt,W,at),It=dt.getProgramCacheKey(Nt);let Jt=st.programs;st.environment=A.isMeshStandardMaterial?W.environment:null,st.fog=W.fog,st.envMap=(A.isMeshStandardMaterial?N:Ke).get(A.envMap||st.environment),st.envMapRotation=st.environment!==null&&A.envMap===null?W.environmentRotation:A.envMapRotation,Jt===void 0&&(A.addEventListener("dispose",Bt),Jt=new Map,st.programs=Jt);let jt=Jt.get(It);if(jt!==void 0){if(st.currentProgram===jt&&st.lightsStateVersion===wt)return Ui(A,Nt),jt}else Nt.uniforms=dt.getUniforms(A),A.onBeforeCompile(Nt,w),jt=dt.acquireProgram(Nt,It),Jt.set(It,jt),st.uniforms=Nt.uniforms;const kt=st.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(kt.clippingPlanes=Ht.uniform),Ui(A,Nt),st.needsLights=tn(A),st.lightsStateVersion=wt,st.needsLights&&(kt.ambientLightColor.value=j.state.ambient,kt.lightProbe.value=j.state.probe,kt.directionalLights.value=j.state.directional,kt.directionalLightShadows.value=j.state.directionalShadow,kt.spotLights.value=j.state.spot,kt.spotLightShadows.value=j.state.spotShadow,kt.rectAreaLights.value=j.state.rectArea,kt.ltc_1.value=j.state.rectAreaLTC1,kt.ltc_2.value=j.state.rectAreaLTC2,kt.pointLights.value=j.state.point,kt.pointLightShadows.value=j.state.pointShadow,kt.hemisphereLights.value=j.state.hemi,kt.directionalShadowMap.value=j.state.directionalShadowMap,kt.directionalShadowMatrix.value=j.state.directionalShadowMatrix,kt.spotShadowMap.value=j.state.spotShadowMap,kt.spotLightMatrix.value=j.state.spotLightMatrix,kt.spotLightMap.value=j.state.spotLightMap,kt.pointShadowMap.value=j.state.pointShadowMap,kt.pointShadowMatrix.value=j.state.pointShadowMatrix),st.currentProgram=jt,st.uniformsList=null,jt}function Di(A){if(A.uniformsList===null){const W=A.currentProgram.getUniforms();A.uniformsList=Tc.seqWithValue(W.seq,A.uniforms)}return A.uniformsList}function Ui(A,W){const at=Yt.get(A);at.outputColorSpace=W.outputColorSpace,at.batching=W.batching,at.batchingColor=W.batchingColor,at.instancing=W.instancing,at.instancingColor=W.instancingColor,at.instancingMorph=W.instancingMorph,at.skinning=W.skinning,at.morphTargets=W.morphTargets,at.morphNormals=W.morphNormals,at.morphColors=W.morphColors,at.morphTargetsCount=W.morphTargetsCount,at.numClippingPlanes=W.numClippingPlanes,at.numIntersection=W.numClipIntersection,at.vertexAlphas=W.vertexAlphas,at.vertexTangents=W.vertexTangents,at.toneMapping=W.toneMapping}function ja(A,W,at,st,j){W.isScene!==!0&&(W=Ne),ae.resetTextureUnits();const Tt=W.fog,wt=st.isMeshStandardMaterial?W.environment:null,Nt=q===null?w.outputColorSpace:q.isXRRenderTarget===!0?q.texture.colorSpace:Ar,It=(st.isMeshStandardMaterial?N:Ke).get(st.envMap||wt),Jt=st.vertexColors===!0&&!!at.attributes.color&&at.attributes.color.itemSize===4,jt=!!at.attributes.tangent&&(!!st.normalMap||st.anisotropy>0),kt=!!at.morphAttributes.position,ce=!!at.morphAttributes.normal,Re=!!at.morphAttributes.color;let Ve=Va;st.toneMapped&&(q===null||q.isXRRenderTarget===!0)&&(Ve=w.toneMapping);const Se=at.morphAttributes.position||at.morphAttributes.normal||at.morphAttributes.color,xe=Se!==void 0?Se.length:0,Zt=Yt.get(st),Ye=g.state.lights;if(mt===!0&&(yt===!0||A!==C)){const pn=A===C&&st.id===D;Ht.setState(st,A,pn)}let Ee=!1;st.version===Zt.__version?(Zt.needsLights&&Zt.lightsStateVersion!==Ye.state.version||Zt.outputColorSpace!==Nt||j.isBatchedMesh&&Zt.batching===!1||!j.isBatchedMesh&&Zt.batching===!0||j.isBatchedMesh&&Zt.batchingColor===!0&&j.colorTexture===null||j.isBatchedMesh&&Zt.batchingColor===!1&&j.colorTexture!==null||j.isInstancedMesh&&Zt.instancing===!1||!j.isInstancedMesh&&Zt.instancing===!0||j.isSkinnedMesh&&Zt.skinning===!1||!j.isSkinnedMesh&&Zt.skinning===!0||j.isInstancedMesh&&Zt.instancingColor===!0&&j.instanceColor===null||j.isInstancedMesh&&Zt.instancingColor===!1&&j.instanceColor!==null||j.isInstancedMesh&&Zt.instancingMorph===!0&&j.morphTexture===null||j.isInstancedMesh&&Zt.instancingMorph===!1&&j.morphTexture!==null||Zt.envMap!==It||st.fog===!0&&Zt.fog!==Tt||Zt.numClippingPlanes!==void 0&&(Zt.numClippingPlanes!==Ht.numPlanes||Zt.numIntersection!==Ht.numIntersection)||Zt.vertexAlphas!==Jt||Zt.vertexTangents!==jt||Zt.morphTargets!==kt||Zt.morphNormals!==ce||Zt.morphColors!==Re||Zt.toneMapping!==Ve||Zt.morphTargetsCount!==xe)&&(Ee=!0):(Ee=!0,Zt.__version=st.version);let bn=Zt.currentProgram;Ee===!0&&(bn=la(st,W,j));let ua=!1,ke=!1,Ni=!1;const He=bn.getUniforms(),An=Zt.uniforms;if(Gt.useProgram(bn.program)&&(ua=!0,ke=!0,Ni=!0),st.id!==D&&(D=st.id,ke=!0),ua||C!==A){Gt.buffers.depth.getReversed()?(At.copy(A.projectionMatrix),Hx(At),Gx(At),He.setValue(B,"projectionMatrix",At)):He.setValue(B,"projectionMatrix",A.projectionMatrix),He.setValue(B,"viewMatrix",A.matrixWorldInverse);const yn=He.map.cameraPosition;yn!==void 0&&yn.setValue(B,oe.setFromMatrixPosition(A.matrixWorld)),de.logarithmicDepthBuffer&&He.setValue(B,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(st.isMeshPhongMaterial||st.isMeshToonMaterial||st.isMeshLambertMaterial||st.isMeshBasicMaterial||st.isMeshStandardMaterial||st.isShaderMaterial)&&He.setValue(B,"isOrthographic",A.isOrthographicCamera===!0),C!==A&&(C=A,ke=!0,Ni=!0)}if(j.isSkinnedMesh){He.setOptional(B,j,"bindMatrix"),He.setOptional(B,j,"bindMatrixInverse");const pn=j.skeleton;pn&&(pn.boneTexture===null&&pn.computeBoneTexture(),He.setValue(B,"boneTexture",pn.boneTexture,ae))}j.isBatchedMesh&&(He.setOptional(B,j,"batchingTexture"),He.setValue(B,"batchingTexture",j._matricesTexture,ae),He.setOptional(B,j,"batchingIdTexture"),He.setValue(B,"batchingIdTexture",j._indirectTexture,ae),He.setOptional(B,j,"batchingColorTexture"),j._colorsTexture!==null&&He.setValue(B,"batchingColorTexture",j._colorsTexture,ae));const on=at.morphAttributes;if((on.position!==void 0||on.normal!==void 0||on.color!==void 0)&&Pt.update(j,at,bn),(ke||Zt.receiveShadow!==j.receiveShadow)&&(Zt.receiveShadow=j.receiveShadow,He.setValue(B,"receiveShadow",j.receiveShadow)),st.isMeshGouraudMaterial&&st.envMap!==null&&(An.envMap.value=It,An.flipEnvMap.value=It.isCubeTexture&&It.isRenderTargetTexture===!1?-1:1),st.isMeshStandardMaterial&&st.envMap===null&&W.environment!==null&&(An.envMapIntensity.value=W.environmentIntensity),ke&&(He.setValue(B,"toneMappingExposure",w.toneMappingExposure),Zt.needsLights&&ca(An,Ni),Tt&&st.fog===!0&&lt.refreshFogUniforms(An,Tt),lt.refreshMaterialUniforms(An,st,Y,Z,g.state.transmissionRenderTarget[A.id]),Tc.upload(B,Di(Zt),An,ae)),st.isShaderMaterial&&st.uniformsNeedUpdate===!0&&(Tc.upload(B,Di(Zt),An,ae),st.uniformsNeedUpdate=!1),st.isSpriteMaterial&&He.setValue(B,"center",j.center),He.setValue(B,"modelViewMatrix",j.modelViewMatrix),He.setValue(B,"normalMatrix",j.normalMatrix),He.setValue(B,"modelMatrix",j.matrixWorld),st.isShaderMaterial||st.isRawShaderMaterial){const pn=st.uniformsGroups;for(let yn=0,xi=pn.length;yn<xi;yn++){const Oi=pn[yn];k.update(Oi,bn),k.bind(Oi,bn)}}return bn}function ca(A,W){A.ambientLightColor.needsUpdate=W,A.lightProbe.needsUpdate=W,A.directionalLights.needsUpdate=W,A.directionalLightShadows.needsUpdate=W,A.pointLights.needsUpdate=W,A.pointLightShadows.needsUpdate=W,A.spotLights.needsUpdate=W,A.spotLightShadows.needsUpdate=W,A.rectAreaLights.needsUpdate=W,A.hemisphereLights.needsUpdate=W}function tn(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return V},this.getActiveMipmapLevel=function(){return I},this.getRenderTarget=function(){return q},this.setRenderTargetTextures=function(A,W,at){const st=Yt.get(A);st.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,st.__autoAllocateDepthBuffer===!1&&(st.__useRenderToTexture=!1),Yt.get(A.texture).__webglTexture=W,Yt.get(A.depthTexture).__webglTexture=st.__autoAllocateDepthBuffer?void 0:at,st.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,W){const at=Yt.get(A);at.__webglFramebuffer=W,at.__useDefaultFramebuffer=W===void 0};const Ho=B.createFramebuffer();this.setRenderTarget=function(A,W=0,at=0){q=A,V=W,I=at;let st=!0,j=null,Tt=!1,wt=!1;if(A){const It=Yt.get(A);if(It.__useDefaultFramebuffer!==void 0)Gt.bindFramebuffer(B.FRAMEBUFFER,null),st=!1;else if(It.__webglFramebuffer===void 0)ae.setupRenderTarget(A);else if(It.__hasExternalTextures)ae.rebindTextures(A,Yt.get(A.texture).__webglTexture,Yt.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const kt=A.depthTexture;if(It.__boundDepthTexture!==kt){if(kt!==null&&Yt.has(kt)&&(A.width!==kt.image.width||A.height!==kt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");ae.setupDepthRenderbuffer(A)}}const Jt=A.texture;(Jt.isData3DTexture||Jt.isDataArrayTexture||Jt.isCompressedArrayTexture)&&(wt=!0);const jt=Yt.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(jt[W])?j=jt[W][at]:j=jt[W],Tt=!0):A.samples>0&&ae.useMultisampledRTT(A)===!1?j=Yt.get(A).__webglMultisampledFramebuffer:Array.isArray(jt)?j=jt[at]:j=jt,G.copy(A.viewport),ot.copy(A.scissor),rt=A.scissorTest}else G.copy($).multiplyScalar(Y).floor(),ot.copy(vt).multiplyScalar(Y).floor(),rt=xt;if(at!==0&&(j=Ho),Gt.bindFramebuffer(B.FRAMEBUFFER,j)&&st&&Gt.drawBuffers(A,j),Gt.viewport(G),Gt.scissor(ot),Gt.setScissorTest(rt),Tt){const It=Yt.get(A.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+W,It.__webglTexture,at)}else if(wt){const It=Yt.get(A.texture),Jt=W;B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,It.__webglTexture,at,Jt)}else if(A!==null&&at!==0){const It=Yt.get(A.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,It.__webglTexture,at)}D=-1},this.readRenderTargetPixels=function(A,W,at,st,j,Tt,wt,Nt=0){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let It=Yt.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&wt!==void 0&&(It=It[wt]),It){Gt.bindFramebuffer(B.FRAMEBUFFER,It);try{const Jt=A.textures[Nt],jt=Jt.format,kt=Jt.type;if(!de.textureFormatReadable(jt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!de.textureTypeReadable(kt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=A.width-st&&at>=0&&at<=A.height-j&&(A.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+Nt),B.readPixels(W,at,st,j,Rt.convert(jt),Rt.convert(kt),Tt))}finally{const Jt=q!==null?Yt.get(q).__webglFramebuffer:null;Gt.bindFramebuffer(B.FRAMEBUFFER,Jt)}}},this.readRenderTargetPixelsAsync=async function(A,W,at,st,j,Tt,wt,Nt=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let It=Yt.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&wt!==void 0&&(It=It[wt]),It)if(W>=0&&W<=A.width-st&&at>=0&&at<=A.height-j){Gt.bindFramebuffer(B.FRAMEBUFFER,It);const Jt=A.textures[Nt],jt=Jt.format,kt=Jt.type;if(!de.textureFormatReadable(jt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!de.textureTypeReadable(kt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ce=B.createBuffer();B.bindBuffer(B.PIXEL_PACK_BUFFER,ce),B.bufferData(B.PIXEL_PACK_BUFFER,Tt.byteLength,B.STREAM_READ),A.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+Nt),B.readPixels(W,at,st,j,Rt.convert(jt),Rt.convert(kt),0);const Re=q!==null?Yt.get(q).__webglFramebuffer:null;Gt.bindFramebuffer(B.FRAMEBUFFER,Re);const Ve=B.fenceSync(B.SYNC_GPU_COMMANDS_COMPLETE,0);return B.flush(),await Fx(B,Ve,4),B.bindBuffer(B.PIXEL_PACK_BUFFER,ce),B.getBufferSubData(B.PIXEL_PACK_BUFFER,0,Tt),B.deleteBuffer(ce),B.deleteSync(Ve),Tt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,W=null,at=0){const st=Math.pow(2,-at),j=Math.floor(A.image.width*st),Tt=Math.floor(A.image.height*st),wt=W!==null?W.x:0,Nt=W!==null?W.y:0;ae.setTexture2D(A,0),B.copyTexSubImage2D(B.TEXTURE_2D,at,0,0,wt,Nt,j,Tt),Gt.unbindTexture()};const Go=B.createFramebuffer(),Li=B.createFramebuffer();this.copyTextureToTexture=function(A,W,at=null,st=null,j=0,Tt=null){Tt===null&&(j!==0?(yr("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Tt=j,j=0):Tt=0);let wt,Nt,It,Jt,jt,kt,ce,Re,Ve;const Se=A.isCompressedTexture?A.mipmaps[Tt]:A.image;if(at!==null)wt=at.max.x-at.min.x,Nt=at.max.y-at.min.y,It=at.isBox3?at.max.z-at.min.z:1,Jt=at.min.x,jt=at.min.y,kt=at.isBox3?at.min.z:0;else{const on=Math.pow(2,-j);wt=Math.floor(Se.width*on),Nt=Math.floor(Se.height*on),A.isDataArrayTexture?It=Se.depth:A.isData3DTexture?It=Math.floor(Se.depth*on):It=1,Jt=0,jt=0,kt=0}st!==null?(ce=st.x,Re=st.y,Ve=st.z):(ce=0,Re=0,Ve=0);const xe=Rt.convert(W.format),Zt=Rt.convert(W.type);let Ye;W.isData3DTexture?(ae.setTexture3D(W,0),Ye=B.TEXTURE_3D):W.isDataArrayTexture||W.isCompressedArrayTexture?(ae.setTexture2DArray(W,0),Ye=B.TEXTURE_2D_ARRAY):(ae.setTexture2D(W,0),Ye=B.TEXTURE_2D),B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,W.flipY),B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),B.pixelStorei(B.UNPACK_ALIGNMENT,W.unpackAlignment);const Ee=B.getParameter(B.UNPACK_ROW_LENGTH),bn=B.getParameter(B.UNPACK_IMAGE_HEIGHT),ua=B.getParameter(B.UNPACK_SKIP_PIXELS),ke=B.getParameter(B.UNPACK_SKIP_ROWS),Ni=B.getParameter(B.UNPACK_SKIP_IMAGES);B.pixelStorei(B.UNPACK_ROW_LENGTH,Se.width),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,Se.height),B.pixelStorei(B.UNPACK_SKIP_PIXELS,Jt),B.pixelStorei(B.UNPACK_SKIP_ROWS,jt),B.pixelStorei(B.UNPACK_SKIP_IMAGES,kt);const He=A.isDataArrayTexture||A.isData3DTexture,An=W.isDataArrayTexture||W.isData3DTexture;if(A.isDepthTexture){const on=Yt.get(A),pn=Yt.get(W),yn=Yt.get(on.__renderTarget),xi=Yt.get(pn.__renderTarget);Gt.bindFramebuffer(B.READ_FRAMEBUFFER,yn.__webglFramebuffer),Gt.bindFramebuffer(B.DRAW_FRAMEBUFFER,xi.__webglFramebuffer);for(let Oi=0;Oi<It;Oi++)He&&(B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Yt.get(A).__webglTexture,j,kt+Oi),B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Yt.get(W).__webglTexture,Tt,Ve+Oi)),B.blitFramebuffer(Jt,jt,wt,Nt,ce,Re,wt,Nt,B.DEPTH_BUFFER_BIT,B.NEAREST);Gt.bindFramebuffer(B.READ_FRAMEBUFFER,null),Gt.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else if(j!==0||A.isRenderTargetTexture||Yt.has(A)){const on=Yt.get(A),pn=Yt.get(W);Gt.bindFramebuffer(B.READ_FRAMEBUFFER,Go),Gt.bindFramebuffer(B.DRAW_FRAMEBUFFER,Li);for(let yn=0;yn<It;yn++)He?B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,on.__webglTexture,j,kt+yn):B.framebufferTexture2D(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,on.__webglTexture,j),An?B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,pn.__webglTexture,Tt,Ve+yn):B.framebufferTexture2D(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,pn.__webglTexture,Tt),j!==0?B.blitFramebuffer(Jt,jt,wt,Nt,ce,Re,wt,Nt,B.COLOR_BUFFER_BIT,B.NEAREST):An?B.copyTexSubImage3D(Ye,Tt,ce,Re,Ve+yn,Jt,jt,wt,Nt):B.copyTexSubImage2D(Ye,Tt,ce,Re,Jt,jt,wt,Nt);Gt.bindFramebuffer(B.READ_FRAMEBUFFER,null),Gt.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else An?A.isDataTexture||A.isData3DTexture?B.texSubImage3D(Ye,Tt,ce,Re,Ve,wt,Nt,It,xe,Zt,Se.data):W.isCompressedArrayTexture?B.compressedTexSubImage3D(Ye,Tt,ce,Re,Ve,wt,Nt,It,xe,Se.data):B.texSubImage3D(Ye,Tt,ce,Re,Ve,wt,Nt,It,xe,Zt,Se):A.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,Tt,ce,Re,wt,Nt,xe,Zt,Se.data):A.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,Tt,ce,Re,Se.width,Se.height,xe,Se.data):B.texSubImage2D(B.TEXTURE_2D,Tt,ce,Re,wt,Nt,xe,Zt,Se);B.pixelStorei(B.UNPACK_ROW_LENGTH,Ee),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,bn),B.pixelStorei(B.UNPACK_SKIP_PIXELS,ua),B.pixelStorei(B.UNPACK_SKIP_ROWS,ke),B.pixelStorei(B.UNPACK_SKIP_IMAGES,Ni),Tt===0&&W.generateMipmaps&&B.generateMipmap(Ye),Gt.unbindTexture()},this.copyTextureToTexture3D=function(A,W,at=null,st=null,j=0){return yr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(A,W,at,st,j)},this.initRenderTarget=function(A){Yt.get(A).__webglFramebuffer===void 0&&ae.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?ae.setTextureCube(A,0):A.isData3DTexture?ae.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?ae.setTexture2DArray(A,0):ae.setTexture2D(A,0),Gt.unbindTexture()},this.resetState=function(){V=0,I=0,q=null,Gt.reset(),ie.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ia}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const i=this.getContext();i.drawingBufferColorSpace=Ae._getDrawingBufferColorSpace(t),i.unpackColorSpace=Ae._getUnpackColorSpace()}}const sA=({className:o,parameters:t})=>{const i=Hn.useRef(null),s=Hn.useRef(null),l=Hn.useRef(null),[u,h]=Hn.useState(0),d=Hn.useRef(null),m=Hn.useRef(null);return Hn.useEffect(()=>{if(!i.current)return;s.current=MA(i.current),m.current=s.current.blob;const p=()=>{s.current&&(d.current?.begin(),s.current.animate(),h(s.current.renderer.info.render.calls),d.current?.end()),l.current=requestAnimationFrame(p)};p();const _=()=>{if(s.current&&i.current){const{camera:T,renderer:R}=s.current,y=i.current,g=y.clientWidth,O=y.clientHeight;T.aspect=g/O,T.updateProjectionMatrix(),R.setSize(g,O,!1);const U=R.domElement;U.style.width=`${g}px`,U.style.height=`${O}px`,U.style.maxWidth=`${g}px`,U.style.maxHeight=`${O}px`,U.style.minWidth=`${g}px`,U.style.minHeight=`${O}px`,R.render(s.current.scene,T)}};_();const v=new ResizeObserver(()=>{_()});i.current&&v.observe(i.current);let S;const M=()=>{clearTimeout(S),S=setTimeout(_,16)};return window.addEventListener("resize",M),()=>{l.current&&cancelAnimationFrame(l.current),s.current&&s.current.cleanup(),window.removeEventListener("resize",M),v.disconnect()}},[]),Hn.useEffect(()=>{if(!t||!s.current)return;const{scene:p}=s.current;m.current&&(p.remove(m.current),m.current.geometry&&m.current.geometry.dispose(),Array.isArray(m.current.material)?m.current.material.forEach(y=>y.dispose()):m.current.material.dispose());const _=Math.max(3,t.radialSegments),v=Math.max(3,t.tubularSegments),S=Math.max(.01,t.twistFrequency),M=new Lc(t.torusRadius,t.tubeRadius,_,v);for(let y=0;y<M.attributes.position.count;y++){const g=new tt().fromBufferAttribute(M.attributes.position,y),O=S*(g.x+g.y+g.z)+t.twistPhase,U=t.twistStrengthX*Math.sin(O),w=Math.sin(U),F=Math.cos(U),V=g.y*F-g.z*w,I=g.y*w+g.z*F,q=t.twistStrengthY*Math.sin(O),D=Math.sin(q),C=Math.cos(q),G=g.x*C+I*D,ot=-g.x*D+I*C,rt=t.twistStrengthZ*Math.sin(O),pt=Math.sin(rt),ut=Math.cos(rt),z=G*ut-V*pt,Z=G*pt+V*ut;Number.isFinite(z)&&Number.isFinite(Z)&&Number.isFinite(ot)&&M.attributes.position.setXYZ(y,z,Z,ot)}M.attributes.position.needsUpdate=!0;const T=new Dc({color:65433,wireframe:t.wireframeMode,transparent:!0,opacity:.7}),R=new vi(M,T);p.add(R),m.current=R,s.current.blob=R},[t]),Hn.useEffect(()=>{t&&s.current},[t]),ee.jsxs("div",{ref:i,className:o,style:{position:"relative",overflow:"hidden",width:"100%",height:"100%"},children:[ee.jsx(qS,{statsRef:d}),ee.jsx(YS,{drawCalls:u})]})},rA=({onParametersChange:o})=>{const[t,i]=Hn.useState({wireframeMode:!0,torusRadius:1.5,tubeRadius:.5,radialSegments:128,tubularSegments:64,twistStrengthX:0,twistStrengthY:1,twistStrengthZ:0,twistFrequency:1,twistPhase:0}),s=(l,u)=>{const h={...t,[l]:u};i(h),o(h)};return ee.jsxs("div",{className:"space-y-4",children:[ee.jsx("h3",{className:"text-lg font-semibold text-white mb-4",children:"Scene Parameters"}),ee.jsxs("div",{className:"space-y-3",children:[ee.jsxs("div",{className:"flex items-center space-x-3",children:[ee.jsx("input",{id:"wireframeMode",type:"checkbox",checked:t.wireframeMode,onChange:l=>s("wireframeMode",l.target.checked),className:"w-4 h-4 text-primary bg-primary/20 border-primary/30 rounded focus:ring-primary focus:ring-2"}),ee.jsx("label",{htmlFor:"wireframeMode",className:"text-sm font-medium text-white/80 cursor-pointer",children:"Wireframe Mode"})]}),ee.jsxs("div",{className:"space-y-1",children:[ee.jsxs("label",{htmlFor:"torusRadius",className:"block text-sm font-medium text-white/80",children:["Torus Radius: ",t.torusRadius.toFixed(2)]}),ee.jsx("input",{id:"torusRadius",type:"range",min:"0.5",max:"3",step:"0.01",value:t.torusRadius,onChange:l=>s("torusRadius",parseFloat(l.target.value)),className:"w-full h-2 bg-primary/20 rounded-lg appearance-none cursor-pointer slider"})]}),ee.jsxs("div",{className:"space-y-1",children:[ee.jsxs("label",{htmlFor:"tubeRadius",className:"block text-sm font-medium text-white/80",children:["Tube Radius: ",t.tubeRadius.toFixed(2)]}),ee.jsx("input",{id:"tubeRadius",type:"range",min:"0.1",max:"1",step:"0.01",value:t.tubeRadius,onChange:l=>s("tubeRadius",parseFloat(l.target.value)),className:"w-full h-2 bg-primary/20 rounded-lg appearance-none cursor-pointer slider"})]}),ee.jsxs("div",{className:"space-y-1",children:[ee.jsxs("label",{htmlFor:"radialSegments",className:"block text-sm font-medium text-white/80",children:["Radial Segments: ",t.radialSegments]}),ee.jsx("input",{id:"radialSegments",type:"range",min:"8",max:"256",step:"1",value:t.radialSegments,onChange:l=>s("radialSegments",parseInt(l.target.value)),className:"w-full h-2 bg-primary/20 rounded-lg appearance-none cursor-pointer slider"})]}),ee.jsxs("div",{className:"space-y-1",children:[ee.jsxs("label",{htmlFor:"tubularSegments",className:"block text-sm font-medium text-white/80",children:["Tubular Segments: ",t.tubularSegments]}),ee.jsx("input",{id:"tubularSegments",type:"range",min:"8",max:"256",step:"1",value:t.tubularSegments,onChange:l=>s("tubularSegments",parseInt(l.target.value)),className:"w-full h-2 bg-primary/20 rounded-lg appearance-none cursor-pointer slider"})]}),ee.jsxs("div",{className:"space-y-1",children:[ee.jsxs("label",{htmlFor:"twistStrengthX",className:"block text-sm font-medium text-white/80",children:["Twist Strength X: ",t.twistStrengthX.toFixed(2)]}),ee.jsx("input",{id:"twistStrengthX",type:"range",min:"-2",max:"2",step:"0.01",value:t.twistStrengthX,onChange:l=>s("twistStrengthX",parseFloat(l.target.value)),className:"w-full h-2 bg-primary/20 rounded-lg appearance-none cursor-pointer slider"})]}),ee.jsxs("div",{className:"space-y-1",children:[ee.jsxs("label",{htmlFor:"twistStrengthY",className:"block text-sm font-medium text-white/80",children:["Twist Strength Y: ",t.twistStrengthY.toFixed(2)]}),ee.jsx("input",{id:"twistStrengthY",type:"range",min:"-2",max:"2",step:"0.01",value:t.twistStrengthY,onChange:l=>s("twistStrengthY",parseFloat(l.target.value)),className:"w-full h-2 bg-primary/20 rounded-lg appearance-none cursor-pointer slider"})]}),ee.jsxs("div",{className:"space-y-1",children:[ee.jsxs("label",{htmlFor:"twistStrengthZ",className:"block text-sm font-medium text-white/80",children:["Twist Strength Z: ",t.twistStrengthZ.toFixed(2)]}),ee.jsx("input",{id:"twistStrengthZ",type:"range",min:"-2",max:"2",step:"0.01",value:t.twistStrengthZ,onChange:l=>s("twistStrengthZ",parseFloat(l.target.value)),className:"w-full h-2 bg-primary/20 rounded-lg appearance-none cursor-pointer slider"})]}),ee.jsxs("div",{className:"space-y-1",children:[ee.jsxs("label",{htmlFor:"twistFrequency",className:"block text-sm font-medium text-white/80",children:["Twist Frequency: ",t.twistFrequency.toFixed(2)]}),ee.jsx("input",{id:"twistFrequency",type:"range",min:"0.01",max:"1",step:"0.01",value:t.twistFrequency,onChange:l=>s("twistFrequency",parseFloat(l.target.value)),className:"w-full h-2 bg-primary/20 rounded-lg appearance-none cursor-pointer slider"})]}),ee.jsxs("div",{className:"space-y-1",children:[ee.jsxs("label",{htmlFor:"twistPhase",className:"block text-sm font-medium text-white/80",children:["Twist Phase: ",t.twistPhase.toFixed(2)]}),ee.jsx("input",{id:"twistPhase",type:"range",min:"-6.283",max:"6.283",step:"0.01",value:t.twistPhase,onChange:l=>s("twistPhase",parseFloat(l.target.value)),className:"w-full h-2 bg-primary/20 rounded-lg appearance-none cursor-pointer slider"})]})]})]})},oA=()=>{const[o,t]=Hn.useState({wireframeMode:!0,torusRadius:1.5,tubeRadius:.5,radialSegments:128,tubularSegments:64,twistStrengthX:0,twistStrengthY:1,twistStrengthZ:0,twistFrequency:1,twistPhase:0}),i=s=>{t(s)};return ee.jsxs("div",{className:"flex w-screen h-screen bg-secondary text-white",children:[ee.jsx("div",{className:"flex-1 relative min-w-0",children:ee.jsx(sA,{className:"w-full h-full",parameters:o})}),ee.jsx("div",{className:"w-64 bg-secondary border-l border-primary/20 p-6 flex-shrink-0",children:ee.jsx(rA,{onParametersChange:i})})]})},Qg={type:"change"},gd={type:"start"},Cv={type:"end"},_c=new dv,Jg=new Fa,lA=Math.cos(70*Ix.DEG2RAD),un=new tt,Fn=2*Math.PI,Be={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},vh=1e-6;class cA extends yy{constructor(t,i=null){super(t,i),this.state=Be.NONE,this.target=new tt,this.cursor=new tt,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Sr.ROTATE,MIDDLE:Sr.DOLLY,RIGHT:Sr.PAN},this.touches={ONE:gr.ROTATE,TWO:gr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new tt,this._lastQuaternion=new Es,this._lastTargetPosition=new tt,this._quat=new Es().setFromUnitVectors(t.up,new tt(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new bg,this._sphericalDelta=new bg,this._scale=1,this._panOffset=new tt,this._rotateStart=new he,this._rotateEnd=new he,this._rotateDelta=new he,this._panStart=new he,this._panEnd=new he,this._panDelta=new he,this._dollyStart=new he,this._dollyEnd=new he,this._dollyDelta=new he,this._dollyDirection=new tt,this._mouse=new he,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=fA.bind(this),this._onPointerDown=uA.bind(this),this._onPointerUp=hA.bind(this),this._onContextMenu=SA.bind(this),this._onMouseWheel=mA.bind(this),this._onKeyDown=_A.bind(this),this._onTouchStart=gA.bind(this),this._onTouchMove=vA.bind(this),this._onMouseDown=dA.bind(this),this._onMouseMove=pA.bind(this),this._interceptControlDown=xA.bind(this),this._interceptControlUp=yA.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Qg),this.update(),this.state=Be.NONE}update(t=null){const i=this.object.position;un.copy(i).sub(this.target),un.applyQuaternion(this._quat),this._spherical.setFromVector3(un),this.autoRotate&&this.state===Be.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let s=this.minAzimuthAngle,l=this.maxAzimuthAngle;isFinite(s)&&isFinite(l)&&(s<-Math.PI?s+=Fn:s>Math.PI&&(s-=Fn),l<-Math.PI?l+=Fn:l>Math.PI&&(l-=Fn),s<=l?this._spherical.theta=Math.max(s,Math.min(l,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(s+l)/2?Math.max(s,this._spherical.theta):Math.min(l,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let u=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const h=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),u=h!=this._spherical.radius}if(un.setFromSpherical(this._spherical),un.applyQuaternion(this._quatInverse),i.copy(this.target).add(un),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let h=null;if(this.object.isPerspectiveCamera){const d=un.length();h=this._clampDistance(d*this._scale);const m=d-h;this.object.position.addScaledVector(this._dollyDirection,m),this.object.updateMatrixWorld(),u=!!m}else if(this.object.isOrthographicCamera){const d=new tt(this._mouse.x,this._mouse.y,0);d.unproject(this.object);const m=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),u=m!==this.object.zoom;const p=new tt(this._mouse.x,this._mouse.y,0);p.unproject(this.object),this.object.position.sub(p).add(d),this.object.updateMatrixWorld(),h=un.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;h!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(h).add(this.object.position):(_c.origin.copy(this.object.position),_c.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(_c.direction))<lA?this.object.lookAt(this.target):(Jg.setFromNormalAndCoplanarPoint(this.object.up,this.target),_c.intersectPlane(Jg,this.target))))}else if(this.object.isOrthographicCamera){const h=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),h!==this.object.zoom&&(this.object.updateProjectionMatrix(),u=!0)}return this._scale=1,this._performCursorZoom=!1,u||this._lastPosition.distanceToSquared(this.object.position)>vh||8*(1-this._lastQuaternion.dot(this.object.quaternion))>vh||this._lastTargetPosition.distanceToSquared(this.target)>vh?(this.dispatchEvent(Qg),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?Fn/60*this.autoRotateSpeed*t:Fn/60/60*this.autoRotateSpeed}_getZoomScale(t){const i=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*i)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,i){un.setFromMatrixColumn(i,0),un.multiplyScalar(-t),this._panOffset.add(un)}_panUp(t,i){this.screenSpacePanning===!0?un.setFromMatrixColumn(i,1):(un.setFromMatrixColumn(i,0),un.crossVectors(this.object.up,un)),un.multiplyScalar(t),this._panOffset.add(un)}_pan(t,i){const s=this.domElement;if(this.object.isPerspectiveCamera){const l=this.object.position;un.copy(l).sub(this.target);let u=un.length();u*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*u/s.clientHeight,this.object.matrix),this._panUp(2*i*u/s.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/s.clientWidth,this.object.matrix),this._panUp(i*(this.object.top-this.object.bottom)/this.object.zoom/s.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,i){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const s=this.domElement.getBoundingClientRect(),l=t-s.left,u=i-s.top,h=s.width,d=s.height;this._mouse.x=l/h*2-1,this._mouse.y=-(u/d)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const i=this.domElement;this._rotateLeft(Fn*this._rotateDelta.x/i.clientHeight),this._rotateUp(Fn*this._rotateDelta.y/i.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let i=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(Fn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),i=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-Fn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),i=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(Fn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),i=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-Fn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),i=!0;break}i&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),l=.5*(t.pageY+i.y);this._rotateStart.set(s,l)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),l=.5*(t.pageY+i.y);this._panStart.set(s,l)}}_handleTouchStartDolly(t){const i=this._getSecondPointerPosition(t),s=t.pageX-i.x,l=t.pageY-i.y,u=Math.sqrt(s*s+l*l);this._dollyStart.set(0,u)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const s=this._getSecondPointerPosition(t),l=.5*(t.pageX+s.x),u=.5*(t.pageY+s.y);this._rotateEnd.set(l,u)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const i=this.domElement;this._rotateLeft(Fn*this._rotateDelta.x/i.clientHeight),this._rotateUp(Fn*this._rotateDelta.y/i.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),l=.5*(t.pageY+i.y);this._panEnd.set(s,l)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const i=this._getSecondPointerPosition(t),s=t.pageX-i.x,l=t.pageY-i.y,u=Math.sqrt(s*s+l*l);this._dollyEnd.set(0,u),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const h=(t.pageX+i.x)*.5,d=(t.pageY+i.y)*.5;this._updateZoomParameters(h,d)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let i=0;i<this._pointers.length;i++)if(this._pointers[i]==t.pointerId){this._pointers.splice(i,1);return}}_isTrackingPointer(t){for(let i=0;i<this._pointers.length;i++)if(this._pointers[i]==t.pointerId)return!0;return!1}_trackPointer(t){let i=this._pointerPositions[t.pointerId];i===void 0&&(i=new he,this._pointerPositions[t.pointerId]=i),i.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const i=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[i]}_customWheelEvent(t){const i=t.deltaMode,s={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(i){case 1:s.deltaY*=16;break;case 2:s.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(s.deltaY*=10),s}}function uA(o){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(o.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(o)&&(this._addPointer(o),o.pointerType==="touch"?this._onTouchStart(o):this._onMouseDown(o)))}function fA(o){this.enabled!==!1&&(o.pointerType==="touch"?this._onTouchMove(o):this._onMouseMove(o))}function hA(o){switch(this._removePointer(o),this._pointers.length){case 0:this.domElement.releasePointerCapture(o.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Cv),this.state=Be.NONE;break;case 1:const t=this._pointers[0],i=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:i.x,pageY:i.y});break}}function dA(o){let t;switch(o.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case Sr.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(o),this.state=Be.DOLLY;break;case Sr.ROTATE:if(o.ctrlKey||o.metaKey||o.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(o),this.state=Be.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(o),this.state=Be.ROTATE}break;case Sr.PAN:if(o.ctrlKey||o.metaKey||o.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(o),this.state=Be.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(o),this.state=Be.PAN}break;default:this.state=Be.NONE}this.state!==Be.NONE&&this.dispatchEvent(gd)}function pA(o){switch(this.state){case Be.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(o);break;case Be.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(o);break;case Be.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(o);break}}function mA(o){this.enabled===!1||this.enableZoom===!1||this.state!==Be.NONE||(o.preventDefault(),this.dispatchEvent(gd),this._handleMouseWheel(this._customWheelEvent(o)),this.dispatchEvent(Cv))}function _A(o){this.enabled!==!1&&this._handleKeyDown(o)}function gA(o){switch(this._trackPointer(o),this._pointers.length){case 1:switch(this.touches.ONE){case gr.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(o),this.state=Be.TOUCH_ROTATE;break;case gr.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(o),this.state=Be.TOUCH_PAN;break;default:this.state=Be.NONE}break;case 2:switch(this.touches.TWO){case gr.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(o),this.state=Be.TOUCH_DOLLY_PAN;break;case gr.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(o),this.state=Be.TOUCH_DOLLY_ROTATE;break;default:this.state=Be.NONE}break;default:this.state=Be.NONE}this.state!==Be.NONE&&this.dispatchEvent(gd)}function vA(o){switch(this._trackPointer(o),this.state){case Be.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(o),this.update();break;case Be.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(o),this.update();break;case Be.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(o),this.update();break;case Be.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(o),this.update();break;default:this.state=Be.NONE}}function SA(o){this.enabled!==!1&&o.preventDefault()}function xA(o){o.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function yA(o){o.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const MA=o=>{const t=new hy,i=new ci(75,o.clientWidth/o.clientHeight,.1,1e3),s=new aA({antialias:!0});s.setSize(o.clientWidth,o.clientHeight,!1),s.setClearColor(1710638,1);const l=s.domElement;l.style.width=`${o.clientWidth}px`,l.style.height=`${o.clientHeight}px`,l.style.display="block",o.appendChild(s.domElement);const u=1.5,h=.5,d=128,m=64,p=Math.PI/3,_=new Lc(u,h,d,m);for(let g=0;g<_.attributes.position.count;g++){const O=new tt().fromBufferAttribute(_.attributes.position,g),U=(O.x+O.y)*p*.1,w=Math.sin(U),F=Math.cos(U),V=O.y*F-O.z*w,I=O.y*w+O.z*F;_.attributes.position.setY(g,V),_.attributes.position.setZ(g,I)}_.attributes.position.needsUpdate=!0;const v=new Dc({color:65433,wireframe:!0,transparent:!0,opacity:.7}),S=new vi(_,v);t.add(S);const M=new Sy(4210752,.6);t.add(M),i.position.z=5;const T=new cA(i,s.domElement);return T.enableDamping=!0,T.dampingFactor=.08,{scene:t,camera:i,renderer:s,blob:S,animate:()=>{const g=performance.now()*.001,O=_.attributes.position;for(let U=0;U<O.count;U++){const w=U%m/m*Math.PI*2,F=Math.floor(U/m)/d*Math.PI*2,V=.08*Math.sin(4*w+g*2+2*Math.cos(F+g))+.04*Math.cos(6*F+g*1.5),I=h+V,q=(u+I*Math.cos(F))*Math.cos(w),D=(u+I*Math.cos(F))*Math.sin(w),C=I*Math.sin(F);O.setXYZ(U,q,D,C)}O.needsUpdate=!0,T.update(),s.render(t,i)},cleanup:()=>{o.removeChild(s.domElement),s.dispose(),_.dispose(),v.dispose(),T.dispose()}}};function EA(){return ee.jsx(ee.Fragment,{children:ee.jsx(oA,{})})}GS.createRoot(document.getElementById("root")).render(ee.jsx(Hn.StrictMode,{children:ee.jsx(EA,{})}));
