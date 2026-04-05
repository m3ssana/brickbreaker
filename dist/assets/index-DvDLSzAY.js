const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/EffectComposer-MiByYtnc.js","assets/CopyShader-BzTUYzf6.js","assets/ShaderPass-BKbYfMVb.js","assets/Pass-DrSK96xv.js","assets/RenderPass-CebbuggL.js","assets/UnrealBloomPass-CB3nYkt0.js"])))=>i.map(i=>d[i]);
var ml=Object.defineProperty;var _l=(i,e,t)=>e in i?ml(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t;var V=(i,e,t)=>_l(i,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Rr="162",gl=0,kr=1,vl=2,To=1,bo=2,nn=3,Mn=0,wt=1,sn=2,gn=0,di=1,Vr=2,Wr=3,Xr=4,xl=5,Nn=100,Sl=101,Ml=102,qr=103,Yr=104,yl=200,El=201,Tl=202,bl=203,gr=204,vr=205,Al=206,wl=207,Rl=208,Cl=209,Ll=210,Pl=211,Il=212,Dl=213,Ul=214,Nl=0,Fl=1,Ol=2,_s=3,Bl=4,zl=5,Hl=6,Gl=7,Ao=0,kl=1,Vl=2,vn=0,Wl=1,Xl=2,ql=3,wo=4,Yl=5,$l=6,jl=7,Ro=300,mi=301,_i=302,xr=303,Sr=304,As=306,Mr=1e3,zt=1001,yr=1002,_t=1003,$r=1004,Ti=1005,Tt=1006,Ds=1007,On=1008,xn=1009,Kl=1010,Zl=1011,Cr=1012,Co=1013,_n=1014,qt=1015,Fi=1016,Lo=1017,Po=1018,Bn=1020,Jl=1021,Ht=1023,Ql=1024,ec=1025,zn=1026,gi=1027,Io=1028,Do=1029,tc=1030,Uo=1031,No=1033,Us=33776,Ns=33777,Fs=33778,Os=33779,jr=35840,Kr=35841,Zr=35842,Jr=35843,Fo=36196,Qr=37492,ea=37496,ta=37808,na=37809,ia=37810,sa=37811,ra=37812,aa=37813,oa=37814,la=37815,ca=37816,ha=37817,ua=37818,da=37819,fa=37820,pa=37821,Bs=36492,ma=36494,_a=36495,nc=36283,ga=36284,va=36285,xa=36286,ic=3200,sc=3201,Oo=0,rc=1,mn="",Wt="srgb",En="srgb-linear",Lr="display-p3",ws="display-p3-linear",gs="linear",Ze="srgb",vs="rec709",xs="p3",Vn=7680,Sa=519,ac=512,oc=513,lc=514,Bo=515,cc=516,hc=517,uc=518,dc=519,Er=35044,Ma="300 es",Tr=1035,an=2e3,Ss=2001;class Si{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const s=this._listeners[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}}const vt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],zs=Math.PI/180,Ms=180/Math.PI;function Sn(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(vt[i&255]+vt[i>>8&255]+vt[i>>16&255]+vt[i>>24&255]+"-"+vt[e&255]+vt[e>>8&255]+"-"+vt[e>>16&15|64]+vt[e>>24&255]+"-"+vt[t&63|128]+vt[t>>8&255]+"-"+vt[t>>16&255]+vt[t>>24&255]+vt[n&255]+vt[n>>8&255]+vt[n>>16&255]+vt[n>>24&255]).toLowerCase()}function bt(i,e,t){return Math.max(e,Math.min(t,i))}function fc(i,e){return(i%e+e)%e}function Hs(i,e,t){return(1-t)*i+t*e}function ya(i){return(i&i-1)===0&&i!==0}function br(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Yt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function qe(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class be{constructor(e=0,t=0){be.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(bt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*s+e.x,this.y=r*s+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ne{constructor(e,t,n,s,r,o,a,l,c){Ne.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,l,c)}set(e,t,n,s,r,o,a,l,c){const h=this.elements;return h[0]=e,h[1]=s,h[2]=a,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],d=n[7],p=n[2],m=n[5],g=n[8],M=s[0],f=s[3],u=s[6],E=s[1],v=s[4],A=s[7],I=s[2],w=s[5],b=s[8];return r[0]=o*M+a*E+l*I,r[3]=o*f+a*v+l*w,r[6]=o*u+a*A+l*b,r[1]=c*M+h*E+d*I,r[4]=c*f+h*v+d*w,r[7]=c*u+h*A+d*b,r[2]=p*M+m*E+g*I,r[5]=p*f+m*v+g*w,r[8]=p*u+m*A+g*b,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*o*h-t*a*c-n*r*h+n*a*l+s*r*c-s*o*l}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],d=h*o-a*c,p=a*l-h*r,m=c*r-o*l,g=t*d+n*p+s*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const M=1/g;return e[0]=d*M,e[1]=(s*c-h*n)*M,e[2]=(a*n-s*o)*M,e[3]=p*M,e[4]=(h*t-s*l)*M,e[5]=(s*r-a*t)*M,e[6]=m*M,e[7]=(n*l-c*t)*M,e[8]=(o*t-n*r)*M,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Gs.makeScale(e,t)),this}rotate(e){return this.premultiply(Gs.makeRotation(-e)),this}translate(e,t){return this.premultiply(Gs.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Gs=new Ne;function zo(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function ys(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function pc(){const i=ys("canvas");return i.style.display="block",i}const Ea={};function Ho(i){i in Ea||(Ea[i]=!0,console.warn(i))}const Ta=new Ne().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),ba=new Ne().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Hi={[En]:{transfer:gs,primaries:vs,toReference:i=>i,fromReference:i=>i},[Wt]:{transfer:Ze,primaries:vs,toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[ws]:{transfer:gs,primaries:xs,toReference:i=>i.applyMatrix3(ba),fromReference:i=>i.applyMatrix3(Ta)},[Lr]:{transfer:Ze,primaries:xs,toReference:i=>i.convertSRGBToLinear().applyMatrix3(ba),fromReference:i=>i.applyMatrix3(Ta).convertLinearToSRGB()}},mc=new Set([En,ws]),Ye={enabled:!0,_workingColorSpace:En,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!mc.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,e,t){if(this.enabled===!1||e===t||!e||!t)return i;const n=Hi[e].toReference,s=Hi[t].fromReference;return s(n(i))},fromWorkingColorSpace:function(i,e){return this.convert(i,this._workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this._workingColorSpace)},getPrimaries:function(i){return Hi[i].primaries},getTransfer:function(i){return i===mn?gs:Hi[i].transfer}};function fi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function ks(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Wn;class Go{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Wn===void 0&&(Wn=ys("canvas")),Wn.width=e.width,Wn.height=e.height;const n=Wn.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Wn}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=ys("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=fi(r[o]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(fi(t[n]/255)*255):t[n]=fi(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let _c=0;class ko{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:_c++}),this.uuid=Sn(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Vs(s[o].image)):r.push(Vs(s[o]))}else r=Vs(s);n.url=r}return t||(e.images[this.uuid]=n),n}}function Vs(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Go.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let gc=0;class St extends Si{constructor(e=St.DEFAULT_IMAGE,t=St.DEFAULT_MAPPING,n=zt,s=zt,r=Tt,o=On,a=Ht,l=xn,c=St.DEFAULT_ANISOTROPY,h=mn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:gc++}),this.uuid=Sn(),this.name="",this.source=new ko(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new be(0,0),this.repeat=new be(1,1),this.center=new be(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ne,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Ro)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Mr:e.x=e.x-Math.floor(e.x);break;case zt:e.x=e.x<0?0:1;break;case yr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Mr:e.y=e.y-Math.floor(e.y);break;case zt:e.y=e.y<0?0:1;break;case yr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}St.DEFAULT_IMAGE=null;St.DEFAULT_MAPPING=Ro;St.DEFAULT_ANISOTROPY=1;class et{constructor(e=0,t=0,n=0,s=1){et.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*s+o[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r;const l=e.elements,c=l[0],h=l[4],d=l[8],p=l[1],m=l[5],g=l[9],M=l[2],f=l[6],u=l[10];if(Math.abs(h-p)<.01&&Math.abs(d-M)<.01&&Math.abs(g-f)<.01){if(Math.abs(h+p)<.1&&Math.abs(d+M)<.1&&Math.abs(g+f)<.1&&Math.abs(c+m+u-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const v=(c+1)/2,A=(m+1)/2,I=(u+1)/2,w=(h+p)/4,b=(d+M)/4,H=(g+f)/4;return v>A&&v>I?v<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(v),s=w/n,r=b/n):A>I?A<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(A),n=w/s,r=H/s):I<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(I),n=b/r,s=H/r),this.set(n,s,r,t),this}let E=Math.sqrt((f-g)*(f-g)+(d-M)*(d-M)+(p-h)*(p-h));return Math.abs(E)<.001&&(E=1),this.x=(f-g)/E,this.y=(d-M)/E,this.z=(p-h)/E,this.w=Math.acos((c+m+u-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class vc extends Si{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new et(0,0,e,t),this.scissorTest=!1,this.viewport=new et(0,0,e,t);const s={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Tt,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0,count:1},n);const r=new St(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,s=e.textures.length;n<s;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new ko(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Hn extends vc{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Vo extends St{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=_t,this.minFilter=_t,this.wrapR=zt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class xc extends St{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=_t,this.minFilter=_t,this.wrapR=zt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Oi{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,o,a){let l=n[s+0],c=n[s+1],h=n[s+2],d=n[s+3];const p=r[o+0],m=r[o+1],g=r[o+2],M=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=d;return}if(a===1){e[t+0]=p,e[t+1]=m,e[t+2]=g,e[t+3]=M;return}if(d!==M||l!==p||c!==m||h!==g){let f=1-a;const u=l*p+c*m+h*g+d*M,E=u>=0?1:-1,v=1-u*u;if(v>Number.EPSILON){const I=Math.sqrt(v),w=Math.atan2(I,u*E);f=Math.sin(f*w)/I,a=Math.sin(a*w)/I}const A=a*E;if(l=l*f+p*A,c=c*f+m*A,h=h*f+g*A,d=d*f+M*A,f===1-a){const I=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=I,c*=I,h*=I,d*=I}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,s,r,o){const a=n[s],l=n[s+1],c=n[s+2],h=n[s+3],d=r[o],p=r[o+1],m=r[o+2],g=r[o+3];return e[t]=a*g+h*d+l*m-c*p,e[t+1]=l*g+h*p+c*d-a*m,e[t+2]=c*g+h*m+a*p-l*d,e[t+3]=h*g-a*d-l*p-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(s/2),d=a(r/2),p=l(n/2),m=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=p*h*d+c*m*g,this._y=c*m*d-p*h*g,this._z=c*h*g+p*m*d,this._w=c*h*d-p*m*g;break;case"YXZ":this._x=p*h*d+c*m*g,this._y=c*m*d-p*h*g,this._z=c*h*g-p*m*d,this._w=c*h*d+p*m*g;break;case"ZXY":this._x=p*h*d-c*m*g,this._y=c*m*d+p*h*g,this._z=c*h*g+p*m*d,this._w=c*h*d-p*m*g;break;case"ZYX":this._x=p*h*d-c*m*g,this._y=c*m*d+p*h*g,this._z=c*h*g-p*m*d,this._w=c*h*d+p*m*g;break;case"YZX":this._x=p*h*d+c*m*g,this._y=c*m*d+p*h*g,this._z=c*h*g-p*m*d,this._w=c*h*d-p*m*g;break;case"XZY":this._x=p*h*d-c*m*g,this._y=c*m*d-p*h*g,this._z=c*h*g+p*m*d,this._w=c*h*d+p*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],h=t[6],d=t[10],p=n+a+d;if(p>0){const m=.5/Math.sqrt(p+1);this._w=.25/m,this._x=(h-l)*m,this._y=(r-c)*m,this._z=(o-s)*m}else if(n>a&&n>d){const m=2*Math.sqrt(1+n-a-d);this._w=(h-l)/m,this._x=.25*m,this._y=(s+o)/m,this._z=(r+c)/m}else if(a>d){const m=2*Math.sqrt(1+a-n-d);this._w=(r-c)/m,this._x=(s+o)/m,this._y=.25*m,this._z=(l+h)/m}else{const m=2*Math.sqrt(1+d-n-a);this._w=(o-s)/m,this._x=(r+c)/m,this._y=(l+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(bt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-s*a,this._w=o*h-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,s=this._y,r=this._z,o=this._w;let a=o*e._w+n*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const m=1-t;return this._w=m*o+t*this._w,this._x=m*n+t*this._x,this._y=m*s+t*this._y,this._z=m*r+t*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,a),d=Math.sin((1-t)*h)/c,p=Math.sin(t*h)/c;return this._w=o*d+this._w*p,this._x=n*d+this._x*p,this._y=s*d+this._y*p,this._z=r*d+this._z*p,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class L{constructor(e=0,t=0,n=0){L.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Aa.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Aa.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*n),h=2*(a*t-r*s),d=2*(r*n-o*t);return this.x=t+l*c+o*d-a*h,this.y=n+l*h+a*c-r*d,this.z=s+l*d+r*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Ws.copy(this).projectOnVector(e),this.sub(Ws)}reflect(e){return this.sub(Ws.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(bt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ws=new L,Aa=new Oi;class Gn{constructor(e=new L(1/0,1/0,1/0),t=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Nt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Nt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Nt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Nt):Nt.fromBufferAttribute(r,o),Nt.applyMatrix4(e.matrixWorld),this.expandByPoint(Nt);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Gi.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Gi.copy(n.boundingBox)),Gi.applyMatrix4(e.matrixWorld),this.union(Gi)}const s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Nt),Nt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(bi),ki.subVectors(this.max,bi),Xn.subVectors(e.a,bi),qn.subVectors(e.b,bi),Yn.subVectors(e.c,bi),ln.subVectors(qn,Xn),cn.subVectors(Yn,qn),An.subVectors(Xn,Yn);let t=[0,-ln.z,ln.y,0,-cn.z,cn.y,0,-An.z,An.y,ln.z,0,-ln.x,cn.z,0,-cn.x,An.z,0,-An.x,-ln.y,ln.x,0,-cn.y,cn.x,0,-An.y,An.x,0];return!Xs(t,Xn,qn,Yn,ki)||(t=[1,0,0,0,1,0,0,0,1],!Xs(t,Xn,qn,Yn,ki))?!1:(Vi.crossVectors(ln,cn),t=[Vi.x,Vi.y,Vi.z],Xs(t,Xn,qn,Yn,ki))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Nt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Nt).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Zt[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Zt[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Zt[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Zt[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Zt[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Zt[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Zt[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Zt[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Zt),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Zt=[new L,new L,new L,new L,new L,new L,new L,new L],Nt=new L,Gi=new Gn,Xn=new L,qn=new L,Yn=new L,ln=new L,cn=new L,An=new L,bi=new L,ki=new L,Vi=new L,wn=new L;function Xs(i,e,t,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){wn.fromArray(i,r);const a=s.x*Math.abs(wn.x)+s.y*Math.abs(wn.y)+s.z*Math.abs(wn.z),l=e.dot(wn),c=t.dot(wn),h=n.dot(wn);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const Sc=new Gn,Ai=new L,qs=new L;class Mi{constructor(e=new L,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Sc.setFromPoints(e).getCenter(n);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ai.subVectors(e,this.center);const t=Ai.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Ai,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(qs.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ai.copy(e.center).add(qs)),this.expandByPoint(Ai.copy(e.center).sub(qs))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Jt=new L,Ys=new L,Wi=new L,hn=new L,$s=new L,Xi=new L,js=new L;class Wo{constructor(e=new L,t=new L(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Jt)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Jt.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Jt.copy(this.origin).addScaledVector(this.direction,t),Jt.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Ys.copy(e).add(t).multiplyScalar(.5),Wi.copy(t).sub(e).normalize(),hn.copy(this.origin).sub(Ys);const r=e.distanceTo(t)*.5,o=-this.direction.dot(Wi),a=hn.dot(this.direction),l=-hn.dot(Wi),c=hn.lengthSq(),h=Math.abs(1-o*o);let d,p,m,g;if(h>0)if(d=o*l-a,p=o*a-l,g=r*h,d>=0)if(p>=-g)if(p<=g){const M=1/h;d*=M,p*=M,m=d*(d+o*p+2*a)+p*(o*d+p+2*l)+c}else p=r,d=Math.max(0,-(o*p+a)),m=-d*d+p*(p+2*l)+c;else p=-r,d=Math.max(0,-(o*p+a)),m=-d*d+p*(p+2*l)+c;else p<=-g?(d=Math.max(0,-(-o*r+a)),p=d>0?-r:Math.min(Math.max(-r,-l),r),m=-d*d+p*(p+2*l)+c):p<=g?(d=0,p=Math.min(Math.max(-r,-l),r),m=p*(p+2*l)+c):(d=Math.max(0,-(o*r+a)),p=d>0?r:Math.min(Math.max(-r,-l),r),m=-d*d+p*(p+2*l)+c);else p=o>0?-r:r,d=Math.max(0,-(o*p+a)),m=-d*d+p*(p+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(Ys).addScaledVector(Wi,p),m}intersectSphere(e,t){Jt.subVectors(e.center,this.origin);const n=Jt.dot(this.direction),s=Jt.dot(Jt)-n*n,r=e.radius*e.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,o,a,l;const c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,p=this.origin;return c>=0?(n=(e.min.x-p.x)*c,s=(e.max.x-p.x)*c):(n=(e.max.x-p.x)*c,s=(e.min.x-p.x)*c),h>=0?(r=(e.min.y-p.y)*h,o=(e.max.y-p.y)*h):(r=(e.max.y-p.y)*h,o=(e.min.y-p.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),d>=0?(a=(e.min.z-p.z)*d,l=(e.max.z-p.z)*d):(a=(e.max.z-p.z)*d,l=(e.min.z-p.z)*d),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Jt)!==null}intersectTriangle(e,t,n,s,r){$s.subVectors(t,e),Xi.subVectors(n,e),js.crossVectors($s,Xi);let o=this.direction.dot(js),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;hn.subVectors(this.origin,e);const l=a*this.direction.dot(Xi.crossVectors(hn,Xi));if(l<0)return null;const c=a*this.direction.dot($s.cross(hn));if(c<0||l+c>o)return null;const h=-a*hn.dot(js);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class $e{constructor(e,t,n,s,r,o,a,l,c,h,d,p,m,g,M,f){$e.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,l,c,h,d,p,m,g,M,f)}set(e,t,n,s,r,o,a,l,c,h,d,p,m,g,M,f){const u=this.elements;return u[0]=e,u[4]=t,u[8]=n,u[12]=s,u[1]=r,u[5]=o,u[9]=a,u[13]=l,u[2]=c,u[6]=h,u[10]=d,u[14]=p,u[3]=m,u[7]=g,u[11]=M,u[15]=f,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new $e().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,s=1/$n.setFromMatrixColumn(e,0).length(),r=1/$n.setFromMatrixColumn(e,1).length(),o=1/$n.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,s=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){const p=o*h,m=o*d,g=a*h,M=a*d;t[0]=l*h,t[4]=-l*d,t[8]=c,t[1]=m+g*c,t[5]=p-M*c,t[9]=-a*l,t[2]=M-p*c,t[6]=g+m*c,t[10]=o*l}else if(e.order==="YXZ"){const p=l*h,m=l*d,g=c*h,M=c*d;t[0]=p+M*a,t[4]=g*a-m,t[8]=o*c,t[1]=o*d,t[5]=o*h,t[9]=-a,t[2]=m*a-g,t[6]=M+p*a,t[10]=o*l}else if(e.order==="ZXY"){const p=l*h,m=l*d,g=c*h,M=c*d;t[0]=p-M*a,t[4]=-o*d,t[8]=g+m*a,t[1]=m+g*a,t[5]=o*h,t[9]=M-p*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const p=o*h,m=o*d,g=a*h,M=a*d;t[0]=l*h,t[4]=g*c-m,t[8]=p*c+M,t[1]=l*d,t[5]=M*c+p,t[9]=m*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const p=o*l,m=o*c,g=a*l,M=a*c;t[0]=l*h,t[4]=M-p*d,t[8]=g*d+m,t[1]=d,t[5]=o*h,t[9]=-a*h,t[2]=-c*h,t[6]=m*d+g,t[10]=p-M*d}else if(e.order==="XZY"){const p=o*l,m=o*c,g=a*l,M=a*c;t[0]=l*h,t[4]=-d,t[8]=c*h,t[1]=p*d+M,t[5]=o*h,t[9]=m*d-g,t[2]=g*d-m,t[6]=a*h,t[10]=M*d+p}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Mc,e,yc)}lookAt(e,t,n){const s=this.elements;return Ct.subVectors(e,t),Ct.lengthSq()===0&&(Ct.z=1),Ct.normalize(),un.crossVectors(n,Ct),un.lengthSq()===0&&(Math.abs(n.z)===1?Ct.x+=1e-4:Ct.z+=1e-4,Ct.normalize(),un.crossVectors(n,Ct)),un.normalize(),qi.crossVectors(Ct,un),s[0]=un.x,s[4]=qi.x,s[8]=Ct.x,s[1]=un.y,s[5]=qi.y,s[9]=Ct.y,s[2]=un.z,s[6]=qi.z,s[10]=Ct.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],d=n[5],p=n[9],m=n[13],g=n[2],M=n[6],f=n[10],u=n[14],E=n[3],v=n[7],A=n[11],I=n[15],w=s[0],b=s[4],H=s[8],Z=s[12],x=s[1],T=s[5],Q=s[9],j=s[13],C=s[2],q=s[6],G=s[10],Y=s[14],k=s[3],W=s[7],te=s[11],se=s[15];return r[0]=o*w+a*x+l*C+c*k,r[4]=o*b+a*T+l*q+c*W,r[8]=o*H+a*Q+l*G+c*te,r[12]=o*Z+a*j+l*Y+c*se,r[1]=h*w+d*x+p*C+m*k,r[5]=h*b+d*T+p*q+m*W,r[9]=h*H+d*Q+p*G+m*te,r[13]=h*Z+d*j+p*Y+m*se,r[2]=g*w+M*x+f*C+u*k,r[6]=g*b+M*T+f*q+u*W,r[10]=g*H+M*Q+f*G+u*te,r[14]=g*Z+M*j+f*Y+u*se,r[3]=E*w+v*x+A*C+I*k,r[7]=E*b+v*T+A*q+I*W,r[11]=E*H+v*Q+A*G+I*te,r[15]=E*Z+v*j+A*Y+I*se,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],d=e[6],p=e[10],m=e[14],g=e[3],M=e[7],f=e[11],u=e[15];return g*(+r*l*d-s*c*d-r*a*p+n*c*p+s*a*m-n*l*m)+M*(+t*l*m-t*c*p+r*o*p-s*o*m+s*c*h-r*l*h)+f*(+t*c*d-t*a*m-r*o*d+n*o*m+r*a*h-n*c*h)+u*(-s*a*h-t*l*d+t*a*p+s*o*d-n*o*p+n*l*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],d=e[9],p=e[10],m=e[11],g=e[12],M=e[13],f=e[14],u=e[15],E=d*f*c-M*p*c+M*l*m-a*f*m-d*l*u+a*p*u,v=g*p*c-h*f*c-g*l*m+o*f*m+h*l*u-o*p*u,A=h*M*c-g*d*c+g*a*m-o*M*m-h*a*u+o*d*u,I=g*d*l-h*M*l-g*a*p+o*M*p+h*a*f-o*d*f,w=t*E+n*v+s*A+r*I;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const b=1/w;return e[0]=E*b,e[1]=(M*p*r-d*f*r-M*s*m+n*f*m+d*s*u-n*p*u)*b,e[2]=(a*f*r-M*l*r+M*s*c-n*f*c-a*s*u+n*l*u)*b,e[3]=(d*l*r-a*p*r-d*s*c+n*p*c+a*s*m-n*l*m)*b,e[4]=v*b,e[5]=(h*f*r-g*p*r+g*s*m-t*f*m-h*s*u+t*p*u)*b,e[6]=(g*l*r-o*f*r-g*s*c+t*f*c+o*s*u-t*l*u)*b,e[7]=(o*p*r-h*l*r+h*s*c-t*p*c-o*s*m+t*l*m)*b,e[8]=A*b,e[9]=(g*d*r-h*M*r-g*n*m+t*M*m+h*n*u-t*d*u)*b,e[10]=(o*M*r-g*a*r+g*n*c-t*M*c-o*n*u+t*a*u)*b,e[11]=(h*a*r-o*d*r-h*n*c+t*d*c+o*n*m-t*a*m)*b,e[12]=I*b,e[13]=(h*M*s-g*d*s+g*n*p-t*M*p-h*n*f+t*d*f)*b,e[14]=(g*a*s-o*M*s-g*n*l+t*M*l+o*n*f-t*a*f)*b,e[15]=(o*d*s-h*a*s+h*n*l-t*d*l-o*n*p+t*a*p)*b,this}scale(e){const t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),s=Math.sin(t),r=1-n,o=e.x,a=e.y,l=e.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+n,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,o){return this.set(1,n,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){const s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,h=o+o,d=a+a,p=r*c,m=r*h,g=r*d,M=o*h,f=o*d,u=a*d,E=l*c,v=l*h,A=l*d,I=n.x,w=n.y,b=n.z;return s[0]=(1-(M+u))*I,s[1]=(m+A)*I,s[2]=(g-v)*I,s[3]=0,s[4]=(m-A)*w,s[5]=(1-(p+u))*w,s[6]=(f+E)*w,s[7]=0,s[8]=(g+v)*b,s[9]=(f-E)*b,s[10]=(1-(p+M))*b,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){const s=this.elements;let r=$n.set(s[0],s[1],s[2]).length();const o=$n.set(s[4],s[5],s[6]).length(),a=$n.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],Ft.copy(this);const c=1/r,h=1/o,d=1/a;return Ft.elements[0]*=c,Ft.elements[1]*=c,Ft.elements[2]*=c,Ft.elements[4]*=h,Ft.elements[5]*=h,Ft.elements[6]*=h,Ft.elements[8]*=d,Ft.elements[9]*=d,Ft.elements[10]*=d,t.setFromRotationMatrix(Ft),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,s,r,o,a=an){const l=this.elements,c=2*r/(t-e),h=2*r/(n-s),d=(t+e)/(t-e),p=(n+s)/(n-s);let m,g;if(a===an)m=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===Ss)m=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=h,l[9]=p,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,s,r,o,a=an){const l=this.elements,c=1/(t-e),h=1/(n-s),d=1/(o-r),p=(t+e)*c,m=(n+s)*h;let g,M;if(a===an)g=(o+r)*d,M=-2*d;else if(a===Ss)g=r*d,M=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-p,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=M,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const $n=new L,Ft=new $e,Mc=new L(0,0,0),yc=new L(1,1,1),un=new L,qi=new L,Ct=new L,wa=new $e,Ra=new Oi;class jt{constructor(e=0,t=0,n=0,s=jt.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],d=s[2],p=s[6],m=s[10];switch(t){case"XYZ":this._y=Math.asin(bt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(p,c),this._z=0);break;case"YXZ":this._x=Math.asin(-bt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(bt(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-d,m),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-bt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(p,m),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(bt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-bt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(p,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return wa.makeRotationFromQuaternion(e),this.setFromRotationMatrix(wa,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Ra.setFromEuler(this),this.setFromQuaternion(Ra,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}jt.DEFAULT_ORDER="XYZ";class Xo{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Ec=0;const Ca=new L,jn=new Oi,Qt=new $e,Yi=new L,wi=new L,Tc=new L,bc=new Oi,La=new L(1,0,0),Pa=new L(0,1,0),Ia=new L(0,0,1),Ac={type:"added"},wc={type:"removed"},Ks={type:"childadded",child:null},Zs={type:"childremoved",child:null};class ct extends Si{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ec++}),this.uuid=Sn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ct.DEFAULT_UP.clone();const e=new L,t=new jt,n=new Oi,s=new L(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new $e},normalMatrix:{value:new Ne}}),this.matrix=new $e,this.matrixWorld=new $e,this.matrixAutoUpdate=ct.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ct.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Xo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return jn.setFromAxisAngle(e,t),this.quaternion.multiply(jn),this}rotateOnWorldAxis(e,t){return jn.setFromAxisAngle(e,t),this.quaternion.premultiply(jn),this}rotateX(e){return this.rotateOnAxis(La,e)}rotateY(e){return this.rotateOnAxis(Pa,e)}rotateZ(e){return this.rotateOnAxis(Ia,e)}translateOnAxis(e,t){return Ca.copy(e).applyQuaternion(this.quaternion),this.position.add(Ca.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(La,e)}translateY(e){return this.translateOnAxis(Pa,e)}translateZ(e){return this.translateOnAxis(Ia,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Qt.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Yi.copy(e):Yi.set(e,t,n);const s=this.parent;this.updateWorldMatrix(!0,!1),wi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Qt.lookAt(wi,Yi,this.up):Qt.lookAt(Yi,wi,this.up),this.quaternion.setFromRotationMatrix(Qt),s&&(Qt.extractRotation(s.matrixWorld),jn.setFromRotationMatrix(Qt),this.quaternion.premultiply(jn.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Ac),Ks.child=e,this.dispatchEvent(Ks),Ks.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(wc),Zs.child=e,this.dispatchEvent(Zs),Zs.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Qt.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Qt.multiply(e.parent.matrixWorld)),e.applyMatrix4(Qt),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(wi,e,Tc),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(wi,bc,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,s=t.length;n<s;n++){const r=t[n];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++){const a=s[r];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxGeometryCount=this._maxGeometryCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const d=l[c];r(e.shapes,d)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),d=o(e.shapes),p=o(e.skeletons),m=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),p.length>0&&(n.skeletons=p),m.length>0&&(n.animations=m),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const s=e.children[n];this.add(s.clone())}return this}}ct.DEFAULT_UP=new L(0,1,0);ct.DEFAULT_MATRIX_AUTO_UPDATE=!0;ct.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ot=new L,en=new L,Js=new L,tn=new L,Kn=new L,Zn=new L,Da=new L,Qs=new L,er=new L,tr=new L;class Gt{constructor(e=new L,t=new L,n=new L){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),Ot.subVectors(e,t),s.cross(Ot);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){Ot.subVectors(s,t),en.subVectors(n,t),Js.subVectors(e,t);const o=Ot.dot(Ot),a=Ot.dot(en),l=Ot.dot(Js),c=en.dot(en),h=en.dot(Js),d=o*c-a*a;if(d===0)return r.set(0,0,0),null;const p=1/d,m=(c*l-a*h)*p,g=(o*h-a*l)*p;return r.set(1-m-g,g,m)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,tn)===null?!1:tn.x>=0&&tn.y>=0&&tn.x+tn.y<=1}static getInterpolation(e,t,n,s,r,o,a,l){return this.getBarycoord(e,t,n,s,tn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,tn.x),l.addScaledVector(o,tn.y),l.addScaledVector(a,tn.z),l)}static isFrontFacing(e,t,n,s){return Ot.subVectors(n,t),en.subVectors(e,t),Ot.cross(en).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ot.subVectors(this.c,this.b),en.subVectors(this.a,this.b),Ot.cross(en).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Gt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Gt.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return Gt.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return Gt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Gt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,s=this.b,r=this.c;let o,a;Kn.subVectors(s,n),Zn.subVectors(r,n),Qs.subVectors(e,n);const l=Kn.dot(Qs),c=Zn.dot(Qs);if(l<=0&&c<=0)return t.copy(n);er.subVectors(e,s);const h=Kn.dot(er),d=Zn.dot(er);if(h>=0&&d<=h)return t.copy(s);const p=l*d-h*c;if(p<=0&&l>=0&&h<=0)return o=l/(l-h),t.copy(n).addScaledVector(Kn,o);tr.subVectors(e,r);const m=Kn.dot(tr),g=Zn.dot(tr);if(g>=0&&m<=g)return t.copy(r);const M=m*c-l*g;if(M<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(n).addScaledVector(Zn,a);const f=h*g-m*d;if(f<=0&&d-h>=0&&m-g>=0)return Da.subVectors(r,s),a=(d-h)/(d-h+(m-g)),t.copy(s).addScaledVector(Da,a);const u=1/(f+M+p);return o=M*u,a=p*u,t.copy(n).addScaledVector(Kn,o).addScaledVector(Zn,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const qo={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},dn={h:0,s:0,l:0},$i={h:0,s:0,l:0};function nr(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class we{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Wt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ye.toWorkingColorSpace(this,t),this}setRGB(e,t,n,s=Ye.workingColorSpace){return this.r=e,this.g=t,this.b=n,Ye.toWorkingColorSpace(this,s),this}setHSL(e,t,n,s=Ye.workingColorSpace){if(e=fc(e,1),t=bt(t,0,1),n=bt(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=nr(o,r,e+1/3),this.g=nr(o,r,e),this.b=nr(o,r,e-1/3)}return Ye.toWorkingColorSpace(this,s),this}setStyle(e,t=Wt){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Wt){const n=qo[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=fi(e.r),this.g=fi(e.g),this.b=fi(e.b),this}copyLinearToSRGB(e){return this.r=ks(e.r),this.g=ks(e.g),this.b=ks(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Wt){return Ye.fromWorkingColorSpace(xt.copy(this),e),Math.round(bt(xt.r*255,0,255))*65536+Math.round(bt(xt.g*255,0,255))*256+Math.round(bt(xt.b*255,0,255))}getHexString(e=Wt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ye.workingColorSpace){Ye.fromWorkingColorSpace(xt.copy(this),t);const n=xt.r,s=xt.g,r=xt.b,o=Math.max(n,s,r),a=Math.min(n,s,r);let l,c;const h=(a+o)/2;if(a===o)l=0,c=0;else{const d=o-a;switch(c=h<=.5?d/(o+a):d/(2-o-a),o){case n:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-n)/d+2;break;case r:l=(n-s)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=Ye.workingColorSpace){return Ye.fromWorkingColorSpace(xt.copy(this),t),e.r=xt.r,e.g=xt.g,e.b=xt.b,e}getStyle(e=Wt){Ye.fromWorkingColorSpace(xt.copy(this),e);const t=xt.r,n=xt.g,s=xt.b;return e!==Wt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(dn),this.setHSL(dn.h+e,dn.s+t,dn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(dn),e.getHSL($i);const n=Hs(dn.h,$i.h,t),s=Hs(dn.s,$i.s,t),r=Hs(dn.l,$i.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const xt=new we;we.NAMES=qo;let Rc=0;class kn extends Si{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Rc++}),this.uuid=Sn(),this.name="",this.type="Material",this.blending=di,this.side=Mn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=gr,this.blendDst=vr,this.blendEquation=Nn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new we(0,0,0),this.blendAlpha=0,this.depthFunc=_s,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Sa,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Vn,this.stencilZFail=Vn,this.stencilZPass=Vn,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==di&&(n.blending=this.blending),this.side!==Mn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==gr&&(n.blendSrc=this.blendSrc),this.blendDst!==vr&&(n.blendDst=this.blendDst),this.blendEquation!==Nn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==_s&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Sa&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Vn&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Vn&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Vn&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(t){const r=s(e.textures),o=s(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Es extends kn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new we(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new jt,this.combine=Ao,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const rt=new L,ji=new be;class Pt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Er,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=qt,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return Ho("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)ji.fromBufferAttribute(this,t),ji.applyMatrix3(e),this.setXY(t,ji.x,ji.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)rt.fromBufferAttribute(this,t),rt.applyMatrix3(e),this.setXYZ(t,rt.x,rt.y,rt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)rt.fromBufferAttribute(this,t),rt.applyMatrix4(e),this.setXYZ(t,rt.x,rt.y,rt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)rt.fromBufferAttribute(this,t),rt.applyNormalMatrix(e),this.setXYZ(t,rt.x,rt.y,rt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)rt.fromBufferAttribute(this,t),rt.transformDirection(e),this.setXYZ(t,rt.x,rt.y,rt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Yt(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=qe(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Yt(t,this.array)),t}setX(e,t){return this.normalized&&(t=qe(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Yt(t,this.array)),t}setY(e,t){return this.normalized&&(t=qe(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Yt(t,this.array)),t}setZ(e,t){return this.normalized&&(t=qe(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Yt(t,this.array)),t}setW(e,t){return this.normalized&&(t=qe(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=qe(t,this.array),n=qe(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=qe(t,this.array),n=qe(n,this.array),s=qe(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=qe(t,this.array),n=qe(n,this.array),s=qe(s,this.array),r=qe(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Er&&(e.usage=this.usage),e}}class Yo extends Pt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class $o extends Pt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class $t extends Pt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Cc=0;const Ut=new $e,ir=new ct,Jn=new L,Lt=new Gn,Ri=new Gn,ft=new L;class kt extends Si{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Cc++}),this.uuid=Sn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(zo(e)?$o:Yo)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Ne().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Ut.makeRotationFromQuaternion(e),this.applyMatrix4(Ut),this}rotateX(e){return Ut.makeRotationX(e),this.applyMatrix4(Ut),this}rotateY(e){return Ut.makeRotationY(e),this.applyMatrix4(Ut),this}rotateZ(e){return Ut.makeRotationZ(e),this.applyMatrix4(Ut),this}translate(e,t,n){return Ut.makeTranslation(e,t,n),this.applyMatrix4(Ut),this}scale(e,t,n){return Ut.makeScale(e,t,n),this.applyMatrix4(Ut),this}lookAt(e){return ir.lookAt(e),ir.updateMatrix(),this.applyMatrix4(ir.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Jn).negate(),this.translate(Jn.x,Jn.y,Jn.z),this}setFromPoints(e){const t=[];for(let n=0,s=e.length;n<s;n++){const r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new $t(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Gn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){const r=t[n];Lt.setFromBufferAttribute(r),this.morphTargetsRelative?(ft.addVectors(this.boundingBox.min,Lt.min),this.boundingBox.expandByPoint(ft),ft.addVectors(this.boundingBox.max,Lt.max),this.boundingBox.expandByPoint(ft)):(this.boundingBox.expandByPoint(Lt.min),this.boundingBox.expandByPoint(Lt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Mi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new L,1/0);return}if(e){const n=this.boundingSphere.center;if(Lt.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];Ri.setFromBufferAttribute(a),this.morphTargetsRelative?(ft.addVectors(Lt.min,Ri.min),Lt.expandByPoint(ft),ft.addVectors(Lt.max,Ri.max),Lt.expandByPoint(ft)):(Lt.expandByPoint(Ri.min),Lt.expandByPoint(Ri.max))}Lt.getCenter(n);let s=0;for(let r=0,o=e.count;r<o;r++)ft.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(ft));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)ft.fromBufferAttribute(a,c),l&&(Jn.fromBufferAttribute(e,c),ft.add(Jn)),s=Math.max(s,n.distanceToSquared(ft))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Pt(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let H=0;H<n.count;H++)a[H]=new L,l[H]=new L;const c=new L,h=new L,d=new L,p=new be,m=new be,g=new be,M=new L,f=new L;function u(H,Z,x){c.fromBufferAttribute(n,H),h.fromBufferAttribute(n,Z),d.fromBufferAttribute(n,x),p.fromBufferAttribute(r,H),m.fromBufferAttribute(r,Z),g.fromBufferAttribute(r,x),h.sub(c),d.sub(c),m.sub(p),g.sub(p);const T=1/(m.x*g.y-g.x*m.y);isFinite(T)&&(M.copy(h).multiplyScalar(g.y).addScaledVector(d,-m.y).multiplyScalar(T),f.copy(d).multiplyScalar(m.x).addScaledVector(h,-g.x).multiplyScalar(T),a[H].add(M),a[Z].add(M),a[x].add(M),l[H].add(f),l[Z].add(f),l[x].add(f))}let E=this.groups;E.length===0&&(E=[{start:0,count:e.count}]);for(let H=0,Z=E.length;H<Z;++H){const x=E[H],T=x.start,Q=x.count;for(let j=T,C=T+Q;j<C;j+=3)u(e.getX(j+0),e.getX(j+1),e.getX(j+2))}const v=new L,A=new L,I=new L,w=new L;function b(H){I.fromBufferAttribute(s,H),w.copy(I);const Z=a[H];v.copy(Z),v.sub(I.multiplyScalar(I.dot(Z))).normalize(),A.crossVectors(w,Z);const T=A.dot(l[H])<0?-1:1;o.setXYZW(H,v.x,v.y,v.z,T)}for(let H=0,Z=E.length;H<Z;++H){const x=E[H],T=x.start,Q=x.count;for(let j=T,C=T+Q;j<C;j+=3)b(e.getX(j+0)),b(e.getX(j+1)),b(e.getX(j+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Pt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let p=0,m=n.count;p<m;p++)n.setXYZ(p,0,0,0);const s=new L,r=new L,o=new L,a=new L,l=new L,c=new L,h=new L,d=new L;if(e)for(let p=0,m=e.count;p<m;p+=3){const g=e.getX(p+0),M=e.getX(p+1),f=e.getX(p+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,M),o.fromBufferAttribute(t,f),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,M),c.fromBufferAttribute(n,f),a.add(h),l.add(h),c.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(M,l.x,l.y,l.z),n.setXYZ(f,c.x,c.y,c.z)}else for(let p=0,m=t.count;p<m;p+=3)s.fromBufferAttribute(t,p+0),r.fromBufferAttribute(t,p+1),o.fromBufferAttribute(t,p+2),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),n.setXYZ(p+0,h.x,h.y,h.z),n.setXYZ(p+1,h.x,h.y,h.z),n.setXYZ(p+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)ft.fromBufferAttribute(e,t),ft.normalize(),e.setXYZ(t,ft.x,ft.y,ft.z)}toNonIndexed(){function e(a,l){const c=a.array,h=a.itemSize,d=a.normalized,p=new c.constructor(l.length*h);let m=0,g=0;for(let M=0,f=l.length;M<f;M++){a.isInterleavedBufferAttribute?m=l[M]*a.data.stride+a.offset:m=l[M]*h;for(let u=0;u<h;u++)p[g++]=c[m++]}return new Pt(p,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new kt,n=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=e(l,n);t.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let h=0,d=c.length;h<d;h++){const p=c[h],m=e(p,n);l.push(m)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let d=0,p=c.length;d<p;d++){const m=c[d];h.push(m.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const s=e.attributes;for(const c in s){const h=s[c];this.setAttribute(c,h.clone(t))}const r=e.morphAttributes;for(const c in r){const h=[],d=r[c];for(let p=0,m=d.length;p<m;p++)h.push(d[p].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,h=o.length;c<h;c++){const d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ua=new $e,Rn=new Wo,Ki=new Mi,Na=new L,Qn=new L,ei=new L,ti=new L,sr=new L,Zi=new L,Ji=new be,Qi=new be,es=new be,Fa=new L,Oa=new L,Ba=new L,ts=new L,ns=new L;class ot extends ct{constructor(e=new kt,t=new Es){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(s,e);const a=this.morphTargetInfluences;if(r&&a){Zi.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=a[l],d=r[l];h!==0&&(sr.fromBufferAttribute(d,e),o?Zi.addScaledVector(sr,h):Zi.addScaledVector(sr.sub(t),h))}t.add(Zi)}return t}raycast(e,t){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ki.copy(n.boundingSphere),Ki.applyMatrix4(r),Rn.copy(e.ray).recast(e.near),!(Ki.containsPoint(Rn.origin)===!1&&(Rn.intersectSphere(Ki,Na)===null||Rn.origin.distanceToSquared(Na)>(e.far-e.near)**2))&&(Ua.copy(r).invert(),Rn.copy(e.ray).applyMatrix4(Ua),!(n.boundingBox!==null&&Rn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Rn)))}_computeIntersections(e,t,n){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,p=r.groups,m=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,M=p.length;g<M;g++){const f=p[g],u=o[f.materialIndex],E=Math.max(f.start,m.start),v=Math.min(a.count,Math.min(f.start+f.count,m.start+m.count));for(let A=E,I=v;A<I;A+=3){const w=a.getX(A),b=a.getX(A+1),H=a.getX(A+2);s=is(this,u,e,n,c,h,d,w,b,H),s&&(s.faceIndex=Math.floor(A/3),s.face.materialIndex=f.materialIndex,t.push(s))}}else{const g=Math.max(0,m.start),M=Math.min(a.count,m.start+m.count);for(let f=g,u=M;f<u;f+=3){const E=a.getX(f),v=a.getX(f+1),A=a.getX(f+2);s=is(this,o,e,n,c,h,d,E,v,A),s&&(s.faceIndex=Math.floor(f/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,M=p.length;g<M;g++){const f=p[g],u=o[f.materialIndex],E=Math.max(f.start,m.start),v=Math.min(l.count,Math.min(f.start+f.count,m.start+m.count));for(let A=E,I=v;A<I;A+=3){const w=A,b=A+1,H=A+2;s=is(this,u,e,n,c,h,d,w,b,H),s&&(s.faceIndex=Math.floor(A/3),s.face.materialIndex=f.materialIndex,t.push(s))}}else{const g=Math.max(0,m.start),M=Math.min(l.count,m.start+m.count);for(let f=g,u=M;f<u;f+=3){const E=f,v=f+1,A=f+2;s=is(this,o,e,n,c,h,d,E,v,A),s&&(s.faceIndex=Math.floor(f/3),t.push(s))}}}}function Lc(i,e,t,n,s,r,o,a){let l;if(e.side===wt?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,e.side===Mn,a),l===null)return null;ns.copy(a),ns.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(ns);return c<t.near||c>t.far?null:{distance:c,point:ns.clone(),object:i}}function is(i,e,t,n,s,r,o,a,l,c){i.getVertexPosition(a,Qn),i.getVertexPosition(l,ei),i.getVertexPosition(c,ti);const h=Lc(i,e,t,n,Qn,ei,ti,ts);if(h){s&&(Ji.fromBufferAttribute(s,a),Qi.fromBufferAttribute(s,l),es.fromBufferAttribute(s,c),h.uv=Gt.getInterpolation(ts,Qn,ei,ti,Ji,Qi,es,new be)),r&&(Ji.fromBufferAttribute(r,a),Qi.fromBufferAttribute(r,l),es.fromBufferAttribute(r,c),h.uv1=Gt.getInterpolation(ts,Qn,ei,ti,Ji,Qi,es,new be)),o&&(Fa.fromBufferAttribute(o,a),Oa.fromBufferAttribute(o,l),Ba.fromBufferAttribute(o,c),h.normal=Gt.getInterpolation(ts,Qn,ei,ti,Fa,Oa,Ba,new L),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a,b:l,c,normal:new L,materialIndex:0};Gt.getNormal(Qn,ei,ti,d.normal),h.face=d}return h}class on extends kt{constructor(e=1,t=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],h=[],d=[];let p=0,m=0;g("z","y","x",-1,-1,n,t,e,o,r,0),g("z","y","x",1,-1,n,t,-e,o,r,1),g("x","z","y",1,1,e,n,t,s,o,2),g("x","z","y",1,-1,e,n,-t,s,o,3),g("x","y","z",1,-1,e,t,n,s,r,4),g("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new $t(c,3)),this.setAttribute("normal",new $t(h,3)),this.setAttribute("uv",new $t(d,2));function g(M,f,u,E,v,A,I,w,b,H,Z){const x=A/b,T=I/H,Q=A/2,j=I/2,C=w/2,q=b+1,G=H+1;let Y=0,k=0;const W=new L;for(let te=0;te<G;te++){const se=te*T-j;for(let ue=0;ue<q;ue++){const Le=ue*x-Q;W[M]=Le*E,W[f]=se*v,W[u]=C,c.push(W.x,W.y,W.z),W[M]=0,W[f]=0,W[u]=w>0?1:-1,h.push(W.x,W.y,W.z),d.push(ue/b),d.push(1-te/H),Y+=1}}for(let te=0;te<H;te++)for(let se=0;se<b;se++){const ue=p+se+q*te,Le=p+se+q*(te+1),B=p+(se+1)+q*(te+1),K=p+(se+1)+q*te;l.push(ue,Le,K),l.push(Le,B,K),k+=6}a.addGroup(m,k,Z),m+=k,p+=Y}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new on(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function vi(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function Et(i){const e={};for(let t=0;t<i.length;t++){const n=vi(i[t]);for(const s in n)e[s]=n[s]}return e}function Pc(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function jo(i){return i.getRenderTarget()===null?i.outputColorSpace:Ye.workingColorSpace}const Ic={clone:vi,merge:Et};var Dc=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Uc=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class yn extends kn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Dc,this.fragmentShader=Uc,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=vi(e.uniforms),this.uniformsGroups=Pc(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Ko extends ct{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new $e,this.projectionMatrix=new $e,this.projectionMatrixInverse=new $e,this.coordinateSystem=an}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const fn=new L,za=new be,Ha=new be;class At extends Ko{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Ms*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(zs*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ms*2*Math.atan(Math.tan(zs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){fn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(fn.x,fn.y).multiplyScalar(-e/fn.z),fn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(fn.x,fn.y).multiplyScalar(-e/fn.z)}getViewSize(e,t){return this.getViewBounds(e,za,Ha),t.subVectors(Ha,za)}setViewOffset(e,t,n,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(zs*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const ni=-90,ii=1;class Nc extends ct{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new At(ni,ii,e,t);s.layers=this.layers,this.add(s);const r=new At(ni,ii,e,t);r.layers=this.layers,this.add(r);const o=new At(ni,ii,e,t);o.layers=this.layers,this.add(o);const a=new At(ni,ii,e,t);a.layers=this.layers,this.add(a);const l=new At(ni,ii,e,t);l.layers=this.layers,this.add(l);const c=new At(ni,ii,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,s,r,o,a,l]=t;for(const c of t)this.remove(c);if(e===an)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Ss)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,h]=this.children,d=e.getRenderTarget(),p=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const M=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,o),e.setRenderTarget(n,2,s),e.render(t,a),e.setRenderTarget(n,3,s),e.render(t,l),e.setRenderTarget(n,4,s),e.render(t,c),n.texture.generateMipmaps=M,e.setRenderTarget(n,5,s),e.render(t,h),e.setRenderTarget(d,p,m),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Zo extends St{constructor(e,t,n,s,r,o,a,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:mi,super(e,t,n,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Fc extends Hn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new Zo(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Tt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new on(5,5,5),r=new yn({name:"CubemapFromEquirect",uniforms:vi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:wt,blending:gn});r.uniforms.tEquirect.value=t;const o=new ot(s,r),a=t.minFilter;return t.minFilter===On&&(t.minFilter=Tt),new Nc(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,s){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,s);e.setRenderTarget(r)}}const rr=new L,Oc=new L,Bc=new Ne;class Dn{constructor(e=new L(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const s=rr.subVectors(n,t).cross(Oc.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(rr),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Bc.getNormalMatrix(e),s=this.coplanarPoint(rr).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Cn=new Mi,ss=new L;class Pr{constructor(e=new Dn,t=new Dn,n=new Dn,s=new Dn,r=new Dn,o=new Dn){this.planes=[e,t,n,s,r,o]}set(e,t,n,s,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=an){const n=this.planes,s=e.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],h=s[5],d=s[6],p=s[7],m=s[8],g=s[9],M=s[10],f=s[11],u=s[12],E=s[13],v=s[14],A=s[15];if(n[0].setComponents(l-r,p-c,f-m,A-u).normalize(),n[1].setComponents(l+r,p+c,f+m,A+u).normalize(),n[2].setComponents(l+o,p+h,f+g,A+E).normalize(),n[3].setComponents(l-o,p-h,f-g,A-E).normalize(),n[4].setComponents(l-a,p-d,f-M,A-v).normalize(),t===an)n[5].setComponents(l+a,p+d,f+M,A+v).normalize();else if(t===Ss)n[5].setComponents(a,d,M,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Cn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Cn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Cn)}intersectsSprite(e){return Cn.center.set(0,0,0),Cn.radius=.7071067811865476,Cn.applyMatrix4(e.matrixWorld),this.intersectsSphere(Cn)}intersectsSphere(e){const t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const s=t[n];if(ss.x=s.normal.x>0?e.max.x:e.min.x,ss.y=s.normal.y>0?e.max.y:e.min.y,ss.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(ss)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Jo(){let i=null,e=!1,t=null,n=null;function s(r,o){t(r,o),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function zc(i,e){const t=e.isWebGL2,n=new WeakMap;function s(c,h){const d=c.array,p=c.usage,m=d.byteLength,g=i.createBuffer();i.bindBuffer(h,g),i.bufferData(h,d,p),c.onUploadCallback();let M;if(d instanceof Float32Array)M=i.FLOAT;else if(d instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)M=i.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else M=i.UNSIGNED_SHORT;else if(d instanceof Int16Array)M=i.SHORT;else if(d instanceof Uint32Array)M=i.UNSIGNED_INT;else if(d instanceof Int32Array)M=i.INT;else if(d instanceof Int8Array)M=i.BYTE;else if(d instanceof Uint8Array)M=i.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)M=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:g,type:M,bytesPerElement:d.BYTES_PER_ELEMENT,version:c.version,size:m}}function r(c,h,d){const p=h.array,m=h._updateRange,g=h.updateRanges;if(i.bindBuffer(d,c),m.count===-1&&g.length===0&&i.bufferSubData(d,0,p),g.length!==0){for(let M=0,f=g.length;M<f;M++){const u=g[M];t?i.bufferSubData(d,u.start*p.BYTES_PER_ELEMENT,p,u.start,u.count):i.bufferSubData(d,u.start*p.BYTES_PER_ELEMENT,p.subarray(u.start,u.start+u.count))}h.clearUpdateRanges()}m.count!==-1&&(t?i.bufferSubData(d,m.offset*p.BYTES_PER_ELEMENT,p,m.offset,m.count):i.bufferSubData(d,m.offset*p.BYTES_PER_ELEMENT,p.subarray(m.offset,m.offset+m.count)),m.count=-1),h.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const h=n.get(c);h&&(i.deleteBuffer(h.buffer),n.delete(c))}function l(c,h){if(c.isGLBufferAttribute){const p=n.get(c);(!p||p.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const d=n.get(c);if(d===void 0)n.set(c,s(c,h));else if(d.version<c.version){if(d.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(d.buffer,c,h),d.version=c.version}}return{get:o,remove:a,update:l}}class rn extends kt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};const r=e/2,o=t/2,a=Math.floor(n),l=Math.floor(s),c=a+1,h=l+1,d=e/a,p=t/l,m=[],g=[],M=[],f=[];for(let u=0;u<h;u++){const E=u*p-o;for(let v=0;v<c;v++){const A=v*d-r;g.push(A,-E,0),M.push(0,0,1),f.push(v/a),f.push(1-u/l)}}for(let u=0;u<l;u++)for(let E=0;E<a;E++){const v=E+c*u,A=E+c*(u+1),I=E+1+c*(u+1),w=E+1+c*u;m.push(v,A,w),m.push(A,I,w)}this.setIndex(m),this.setAttribute("position",new $t(g,3)),this.setAttribute("normal",new $t(M,3)),this.setAttribute("uv",new $t(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new rn(e.width,e.height,e.widthSegments,e.heightSegments)}}var Hc=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Gc=`#ifdef USE_ALPHAHASH
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
#endif`,kc=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Vc=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Wc=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Xc=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,qc=`#ifdef USE_AOMAP
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
#endif`,Yc=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,$c=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
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
#endif`,jc=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,Kc=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Zc=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Jc=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Qc=`#ifdef USE_IRIDESCENCE
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
#endif`,eh=`#ifdef USE_BUMPMAP
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
#endif`,th=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,nh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ih=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,sh=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,rh=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,ah=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,oh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,lh=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,ch=`#define PI 3.141592653589793
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
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
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
} // validated`,hh=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,uh=`vec3 transformedNormal = objectNormal;
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
#endif`,dh=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,fh=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,ph=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,mh=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,_h="gl_FragColor = linearToOutputTexel( gl_FragColor );",gh=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,vh=`#ifdef USE_ENVMAP
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
#endif`,xh=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Sh=`#ifdef USE_ENVMAP
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
#endif`,Mh=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,yh=`#ifdef USE_ENVMAP
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
#endif`,Eh=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Th=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,bh=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Ah=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,wh=`#ifdef USE_GRADIENTMAP
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
}`,Rh=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Ch=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Lh=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Ph=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Ih=`uniform bool receiveShadow;
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
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
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
#endif`,Dh=`#ifdef USE_ENVMAP
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
#endif`,Uh=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Nh=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Fh=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Oh=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Bh=`PhysicalMaterial material;
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
#endif`,zh=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
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
}`,Hh=`
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
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
#endif`,Gh=`#if defined( RE_IndirectDiffuse )
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
#endif`,kh=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Vh=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Wh=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Xh=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,qh=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Yh=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,$h=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,jh=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Kh=`#if defined( USE_POINTS_UV )
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
#endif`,Zh=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Jh=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Qh=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[MORPHTARGETS_COUNT];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,eu=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,tu=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,nu=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
	#endif
	#ifdef MORPHTARGETS_TEXTURE
		#ifndef USE_INSTANCING_MORPH
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
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,iu=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,su=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,ru=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,au=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ou=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,lu=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,cu=`#ifdef USE_NORMALMAP
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
#endif`,hu=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,uu=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,du=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,fu=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,pu=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,mu=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
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
}`,_u=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,gu=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,vu=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,xu=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Su=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Mu=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,yu=`#if NUM_SPOT_LIGHT_COORDS > 0
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
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
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
		return shadow;
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
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
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
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,Eu=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
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
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Tu=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,bu=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Au=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,wu=`#ifdef USE_SKINNING
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
#endif`,Ru=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Cu=`#ifdef USE_SKINNING
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
#endif`,Lu=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Pu=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Iu=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Du=`#ifndef saturate
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
vec3 OptimizedCineonToneMapping( vec3 color ) {
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
	float startCompression = 0.8 - 0.04;
	float desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min(color.r, min(color.g, color.b));
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max(color.r, max(color.g, color.b));
	if (peak < startCompression) return color;
	float d = 1. - startCompression;
	float newPeak = 1. - d * d / (peak + d - startCompression);
	color *= newPeak / peak;
	float g = 1. - 1. / (desaturation * (peak - newPeak) + 1.);
	return mix(color, vec3(1, 1, 1), g);
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Uu=`#ifdef USE_TRANSMISSION
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
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Nu=`#ifdef USE_TRANSMISSION
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
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Fu=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ou=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Bu=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,zu=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Hu=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Gu=`uniform sampler2D t2D;
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
}`,ku=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Vu=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Wu=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Xu=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,qu=`#include <common>
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
}`,Yu=`#if DEPTH_PACKING == 3200
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
	#endif
}`,$u=`#define DISTANCE
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
}`,ju=`#define DISTANCE
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
}`,Ku=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Zu=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ju=`uniform float scale;
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
}`,Qu=`uniform vec3 diffuse;
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
}`,ed=`#include <common>
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
}`,td=`uniform vec3 diffuse;
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
}`,nd=`#define LAMBERT
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
}`,id=`#define LAMBERT
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
}`,sd=`#define MATCAP
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
}`,rd=`#define MATCAP
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
}`,ad=`#define NORMAL
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
}`,od=`#define NORMAL
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
}`,ld=`#define PHONG
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
}`,cd=`#define PHONG
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
}`,hd=`#define STANDARD
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
}`,ud=`#define STANDARD
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
}`,dd=`#define TOON
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
}`,fd=`#define TOON
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
}`,pd=`uniform float size;
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
}`,md=`uniform vec3 diffuse;
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
}`,_d=`#include <common>
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
}`,gd=`uniform vec3 color;
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
}`,vd=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
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
}`,xd=`uniform vec3 diffuse;
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
}`,Ue={alphahash_fragment:Hc,alphahash_pars_fragment:Gc,alphamap_fragment:kc,alphamap_pars_fragment:Vc,alphatest_fragment:Wc,alphatest_pars_fragment:Xc,aomap_fragment:qc,aomap_pars_fragment:Yc,batching_pars_vertex:$c,batching_vertex:jc,begin_vertex:Kc,beginnormal_vertex:Zc,bsdfs:Jc,iridescence_fragment:Qc,bumpmap_pars_fragment:eh,clipping_planes_fragment:th,clipping_planes_pars_fragment:nh,clipping_planes_pars_vertex:ih,clipping_planes_vertex:sh,color_fragment:rh,color_pars_fragment:ah,color_pars_vertex:oh,color_vertex:lh,common:ch,cube_uv_reflection_fragment:hh,defaultnormal_vertex:uh,displacementmap_pars_vertex:dh,displacementmap_vertex:fh,emissivemap_fragment:ph,emissivemap_pars_fragment:mh,colorspace_fragment:_h,colorspace_pars_fragment:gh,envmap_fragment:vh,envmap_common_pars_fragment:xh,envmap_pars_fragment:Sh,envmap_pars_vertex:Mh,envmap_physical_pars_fragment:Dh,envmap_vertex:yh,fog_vertex:Eh,fog_pars_vertex:Th,fog_fragment:bh,fog_pars_fragment:Ah,gradientmap_pars_fragment:wh,lightmap_fragment:Rh,lightmap_pars_fragment:Ch,lights_lambert_fragment:Lh,lights_lambert_pars_fragment:Ph,lights_pars_begin:Ih,lights_toon_fragment:Uh,lights_toon_pars_fragment:Nh,lights_phong_fragment:Fh,lights_phong_pars_fragment:Oh,lights_physical_fragment:Bh,lights_physical_pars_fragment:zh,lights_fragment_begin:Hh,lights_fragment_maps:Gh,lights_fragment_end:kh,logdepthbuf_fragment:Vh,logdepthbuf_pars_fragment:Wh,logdepthbuf_pars_vertex:Xh,logdepthbuf_vertex:qh,map_fragment:Yh,map_pars_fragment:$h,map_particle_fragment:jh,map_particle_pars_fragment:Kh,metalnessmap_fragment:Zh,metalnessmap_pars_fragment:Jh,morphinstance_vertex:Qh,morphcolor_vertex:eu,morphnormal_vertex:tu,morphtarget_pars_vertex:nu,morphtarget_vertex:iu,normal_fragment_begin:su,normal_fragment_maps:ru,normal_pars_fragment:au,normal_pars_vertex:ou,normal_vertex:lu,normalmap_pars_fragment:cu,clearcoat_normal_fragment_begin:hu,clearcoat_normal_fragment_maps:uu,clearcoat_pars_fragment:du,iridescence_pars_fragment:fu,opaque_fragment:pu,packing:mu,premultiplied_alpha_fragment:_u,project_vertex:gu,dithering_fragment:vu,dithering_pars_fragment:xu,roughnessmap_fragment:Su,roughnessmap_pars_fragment:Mu,shadowmap_pars_fragment:yu,shadowmap_pars_vertex:Eu,shadowmap_vertex:Tu,shadowmask_pars_fragment:bu,skinbase_vertex:Au,skinning_pars_vertex:wu,skinning_vertex:Ru,skinnormal_vertex:Cu,specularmap_fragment:Lu,specularmap_pars_fragment:Pu,tonemapping_fragment:Iu,tonemapping_pars_fragment:Du,transmission_fragment:Uu,transmission_pars_fragment:Nu,uv_pars_fragment:Fu,uv_pars_vertex:Ou,uv_vertex:Bu,worldpos_vertex:zu,background_vert:Hu,background_frag:Gu,backgroundCube_vert:ku,backgroundCube_frag:Vu,cube_vert:Wu,cube_frag:Xu,depth_vert:qu,depth_frag:Yu,distanceRGBA_vert:$u,distanceRGBA_frag:ju,equirect_vert:Ku,equirect_frag:Zu,linedashed_vert:Ju,linedashed_frag:Qu,meshbasic_vert:ed,meshbasic_frag:td,meshlambert_vert:nd,meshlambert_frag:id,meshmatcap_vert:sd,meshmatcap_frag:rd,meshnormal_vert:ad,meshnormal_frag:od,meshphong_vert:ld,meshphong_frag:cd,meshphysical_vert:hd,meshphysical_frag:ud,meshtoon_vert:dd,meshtoon_frag:fd,points_vert:pd,points_frag:md,shadow_vert:_d,shadow_frag:gd,sprite_vert:vd,sprite_frag:xd},ie={common:{diffuse:{value:new we(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ne},alphaMap:{value:null},alphaMapTransform:{value:new Ne},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ne}},envmap:{envMap:{value:null},envMapRotation:{value:new Ne},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ne}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ne}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ne},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ne},normalScale:{value:new be(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ne},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ne}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ne}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ne}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new we(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new we(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ne},alphaTest:{value:0},uvTransform:{value:new Ne}},sprite:{diffuse:{value:new we(16777215)},opacity:{value:1},center:{value:new be(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ne},alphaMap:{value:null},alphaMapTransform:{value:new Ne},alphaTest:{value:0}}},Xt={basic:{uniforms:Et([ie.common,ie.specularmap,ie.envmap,ie.aomap,ie.lightmap,ie.fog]),vertexShader:Ue.meshbasic_vert,fragmentShader:Ue.meshbasic_frag},lambert:{uniforms:Et([ie.common,ie.specularmap,ie.envmap,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.fog,ie.lights,{emissive:{value:new we(0)}}]),vertexShader:Ue.meshlambert_vert,fragmentShader:Ue.meshlambert_frag},phong:{uniforms:Et([ie.common,ie.specularmap,ie.envmap,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.fog,ie.lights,{emissive:{value:new we(0)},specular:{value:new we(1118481)},shininess:{value:30}}]),vertexShader:Ue.meshphong_vert,fragmentShader:Ue.meshphong_frag},standard:{uniforms:Et([ie.common,ie.envmap,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.roughnessmap,ie.metalnessmap,ie.fog,ie.lights,{emissive:{value:new we(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ue.meshphysical_vert,fragmentShader:Ue.meshphysical_frag},toon:{uniforms:Et([ie.common,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.gradientmap,ie.fog,ie.lights,{emissive:{value:new we(0)}}]),vertexShader:Ue.meshtoon_vert,fragmentShader:Ue.meshtoon_frag},matcap:{uniforms:Et([ie.common,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.fog,{matcap:{value:null}}]),vertexShader:Ue.meshmatcap_vert,fragmentShader:Ue.meshmatcap_frag},points:{uniforms:Et([ie.points,ie.fog]),vertexShader:Ue.points_vert,fragmentShader:Ue.points_frag},dashed:{uniforms:Et([ie.common,ie.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ue.linedashed_vert,fragmentShader:Ue.linedashed_frag},depth:{uniforms:Et([ie.common,ie.displacementmap]),vertexShader:Ue.depth_vert,fragmentShader:Ue.depth_frag},normal:{uniforms:Et([ie.common,ie.bumpmap,ie.normalmap,ie.displacementmap,{opacity:{value:1}}]),vertexShader:Ue.meshnormal_vert,fragmentShader:Ue.meshnormal_frag},sprite:{uniforms:Et([ie.sprite,ie.fog]),vertexShader:Ue.sprite_vert,fragmentShader:Ue.sprite_frag},background:{uniforms:{uvTransform:{value:new Ne},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ue.background_vert,fragmentShader:Ue.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ne}},vertexShader:Ue.backgroundCube_vert,fragmentShader:Ue.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ue.cube_vert,fragmentShader:Ue.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ue.equirect_vert,fragmentShader:Ue.equirect_frag},distanceRGBA:{uniforms:Et([ie.common,ie.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ue.distanceRGBA_vert,fragmentShader:Ue.distanceRGBA_frag},shadow:{uniforms:Et([ie.lights,ie.fog,{color:{value:new we(0)},opacity:{value:1}}]),vertexShader:Ue.shadow_vert,fragmentShader:Ue.shadow_frag}};Xt.physical={uniforms:Et([Xt.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ne},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ne},clearcoatNormalScale:{value:new be(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ne},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ne},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ne},sheen:{value:0},sheenColor:{value:new we(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ne},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ne},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ne},transmissionSamplerSize:{value:new be},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ne},attenuationDistance:{value:0},attenuationColor:{value:new we(0)},specularColor:{value:new we(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ne},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ne},anisotropyVector:{value:new be},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ne}}]),vertexShader:Ue.meshphysical_vert,fragmentShader:Ue.meshphysical_frag};const rs={r:0,b:0,g:0},Ln=new jt,Sd=new $e;function Md(i,e,t,n,s,r,o){const a=new we(0);let l=r===!0?0:1,c,h,d=null,p=0,m=null;function g(f,u){let E=!1,v=u.isScene===!0?u.background:null;v&&v.isTexture&&(v=(u.backgroundBlurriness>0?t:e).get(v)),v===null?M(a,l):v&&v.isColor&&(M(v,1),E=!0);const A=i.xr.getEnvironmentBlendMode();A==="additive"?n.buffers.color.setClear(0,0,0,1,o):A==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||E)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),v&&(v.isCubeTexture||v.mapping===As)?(h===void 0&&(h=new ot(new on(1,1,1),new yn({name:"BackgroundCubeMaterial",uniforms:vi(Xt.backgroundCube.uniforms),vertexShader:Xt.backgroundCube.vertexShader,fragmentShader:Xt.backgroundCube.fragmentShader,side:wt,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(I,w,b){this.matrixWorld.copyPosition(b.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),Ln.copy(u.backgroundRotation),Ln.x*=-1,Ln.y*=-1,Ln.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(Ln.y*=-1,Ln.z*=-1),h.material.uniforms.envMap.value=v,h.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=u.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=u.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Sd.makeRotationFromEuler(Ln)),h.material.toneMapped=Ye.getTransfer(v.colorSpace)!==Ze,(d!==v||p!==v.version||m!==i.toneMapping)&&(h.material.needsUpdate=!0,d=v,p=v.version,m=i.toneMapping),h.layers.enableAll(),f.unshift(h,h.geometry,h.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new ot(new rn(2,2),new yn({name:"BackgroundMaterial",uniforms:vi(Xt.background.uniforms),vertexShader:Xt.background.vertexShader,fragmentShader:Xt.background.fragmentShader,side:Mn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=u.backgroundIntensity,c.material.toneMapped=Ye.getTransfer(v.colorSpace)!==Ze,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(d!==v||p!==v.version||m!==i.toneMapping)&&(c.material.needsUpdate=!0,d=v,p=v.version,m=i.toneMapping),c.layers.enableAll(),f.unshift(c,c.geometry,c.material,0,0,null))}function M(f,u){f.getRGB(rs,jo(i)),n.buffers.color.setClear(rs.r,rs.g,rs.b,u,o)}return{getClearColor:function(){return a},setClearColor:function(f,u=1){a.set(f),l=u,M(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(f){l=f,M(a,l)},render:g}}function yd(i,e,t,n){const s=i.getParameter(i.MAX_VERTEX_ATTRIBS),r=n.isWebGL2?null:e.get("OES_vertex_array_object"),o=n.isWebGL2||r!==null,a={},l=f(null);let c=l,h=!1;function d(C,q,G,Y,k){let W=!1;if(o){const te=M(Y,G,q);c!==te&&(c=te,m(c.object)),W=u(C,Y,G,k),W&&E(C,Y,G,k)}else{const te=q.wireframe===!0;(c.geometry!==Y.id||c.program!==G.id||c.wireframe!==te)&&(c.geometry=Y.id,c.program=G.id,c.wireframe=te,W=!0)}k!==null&&t.update(k,i.ELEMENT_ARRAY_BUFFER),(W||h)&&(h=!1,H(C,q,G,Y),k!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(k).buffer))}function p(){return n.isWebGL2?i.createVertexArray():r.createVertexArrayOES()}function m(C){return n.isWebGL2?i.bindVertexArray(C):r.bindVertexArrayOES(C)}function g(C){return n.isWebGL2?i.deleteVertexArray(C):r.deleteVertexArrayOES(C)}function M(C,q,G){const Y=G.wireframe===!0;let k=a[C.id];k===void 0&&(k={},a[C.id]=k);let W=k[q.id];W===void 0&&(W={},k[q.id]=W);let te=W[Y];return te===void 0&&(te=f(p()),W[Y]=te),te}function f(C){const q=[],G=[],Y=[];for(let k=0;k<s;k++)q[k]=0,G[k]=0,Y[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:q,enabledAttributes:G,attributeDivisors:Y,object:C,attributes:{},index:null}}function u(C,q,G,Y){const k=c.attributes,W=q.attributes;let te=0;const se=G.getAttributes();for(const ue in se)if(se[ue].location>=0){const B=k[ue];let K=W[ue];if(K===void 0&&(ue==="instanceMatrix"&&C.instanceMatrix&&(K=C.instanceMatrix),ue==="instanceColor"&&C.instanceColor&&(K=C.instanceColor)),B===void 0||B.attribute!==K||K&&B.data!==K.data)return!0;te++}return c.attributesNum!==te||c.index!==Y}function E(C,q,G,Y){const k={},W=q.attributes;let te=0;const se=G.getAttributes();for(const ue in se)if(se[ue].location>=0){let B=W[ue];B===void 0&&(ue==="instanceMatrix"&&C.instanceMatrix&&(B=C.instanceMatrix),ue==="instanceColor"&&C.instanceColor&&(B=C.instanceColor));const K={};K.attribute=B,B&&B.data&&(K.data=B.data),k[ue]=K,te++}c.attributes=k,c.attributesNum=te,c.index=Y}function v(){const C=c.newAttributes;for(let q=0,G=C.length;q<G;q++)C[q]=0}function A(C){I(C,0)}function I(C,q){const G=c.newAttributes,Y=c.enabledAttributes,k=c.attributeDivisors;G[C]=1,Y[C]===0&&(i.enableVertexAttribArray(C),Y[C]=1),k[C]!==q&&((n.isWebGL2?i:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](C,q),k[C]=q)}function w(){const C=c.newAttributes,q=c.enabledAttributes;for(let G=0,Y=q.length;G<Y;G++)q[G]!==C[G]&&(i.disableVertexAttribArray(G),q[G]=0)}function b(C,q,G,Y,k,W,te){te===!0?i.vertexAttribIPointer(C,q,G,k,W):i.vertexAttribPointer(C,q,G,Y,k,W)}function H(C,q,G,Y){if(n.isWebGL2===!1&&(C.isInstancedMesh||Y.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;v();const k=Y.attributes,W=G.getAttributes(),te=q.defaultAttributeValues;for(const se in W){const ue=W[se];if(ue.location>=0){let Le=k[se];if(Le===void 0&&(se==="instanceMatrix"&&C.instanceMatrix&&(Le=C.instanceMatrix),se==="instanceColor"&&C.instanceColor&&(Le=C.instanceColor)),Le!==void 0){const B=Le.normalized,K=Le.itemSize,he=t.get(Le);if(he===void 0)continue;const Ee=he.buffer,_e=he.type,de=he.bytesPerElement,Xe=n.isWebGL2===!0&&(_e===i.INT||_e===i.UNSIGNED_INT||Le.gpuType===Co);if(Le.isInterleavedBufferAttribute){const Te=Le.data,D=Te.stride,pt=Le.offset;if(Te.isInstancedInterleavedBuffer){for(let ve=0;ve<ue.locationSize;ve++)I(ue.location+ve,Te.meshPerAttribute);C.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=Te.meshPerAttribute*Te.count)}else for(let ve=0;ve<ue.locationSize;ve++)A(ue.location+ve);i.bindBuffer(i.ARRAY_BUFFER,Ee);for(let ve=0;ve<ue.locationSize;ve++)b(ue.location+ve,K/ue.locationSize,_e,B,D*de,(pt+K/ue.locationSize*ve)*de,Xe)}else{if(Le.isInstancedBufferAttribute){for(let Te=0;Te<ue.locationSize;Te++)I(ue.location+Te,Le.meshPerAttribute);C.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=Le.meshPerAttribute*Le.count)}else for(let Te=0;Te<ue.locationSize;Te++)A(ue.location+Te);i.bindBuffer(i.ARRAY_BUFFER,Ee);for(let Te=0;Te<ue.locationSize;Te++)b(ue.location+Te,K/ue.locationSize,_e,B,K*de,K/ue.locationSize*Te*de,Xe)}}else if(te!==void 0){const B=te[se];if(B!==void 0)switch(B.length){case 2:i.vertexAttrib2fv(ue.location,B);break;case 3:i.vertexAttrib3fv(ue.location,B);break;case 4:i.vertexAttrib4fv(ue.location,B);break;default:i.vertexAttrib1fv(ue.location,B)}}}}w()}function Z(){Q();for(const C in a){const q=a[C];for(const G in q){const Y=q[G];for(const k in Y)g(Y[k].object),delete Y[k];delete q[G]}delete a[C]}}function x(C){if(a[C.id]===void 0)return;const q=a[C.id];for(const G in q){const Y=q[G];for(const k in Y)g(Y[k].object),delete Y[k];delete q[G]}delete a[C.id]}function T(C){for(const q in a){const G=a[q];if(G[C.id]===void 0)continue;const Y=G[C.id];for(const k in Y)g(Y[k].object),delete Y[k];delete G[C.id]}}function Q(){j(),h=!0,c!==l&&(c=l,m(c.object))}function j(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:Q,resetDefaultState:j,dispose:Z,releaseStatesOfGeometry:x,releaseStatesOfProgram:T,initAttributes:v,enableAttribute:A,disableUnusedAttributes:w}}function Ed(i,e,t,n){const s=n.isWebGL2;let r;function o(h){r=h}function a(h,d){i.drawArrays(r,h,d),t.update(d,r,1)}function l(h,d,p){if(p===0)return;let m,g;if(s)m=i,g="drawArraysInstanced";else if(m=e.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",m===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[g](r,h,d,p),t.update(d,r,p)}function c(h,d,p){if(p===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<p;g++)this.render(h[g],d[g]);else{m.multiDrawArraysWEBGL(r,h,0,d,0,p);let g=0;for(let M=0;M<p;M++)g+=d[M];t.update(g,r,1)}}this.setMode=o,this.render=a,this.renderInstances=l,this.renderMultiDraw=c}function Td(i,e,t){let n;function s(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const b=e.get("EXT_texture_filter_anisotropic");n=i.getParameter(b.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(b){if(b==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";b="mediump"}return b==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&i.constructor.name==="WebGL2RenderingContext";let a=t.precision!==void 0?t.precision:"highp";const l=r(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=o||e.has("WEBGL_draw_buffers"),h=t.logarithmicDepthBuffer===!0,d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),p=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),M=i.getParameter(i.MAX_VERTEX_ATTRIBS),f=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),u=i.getParameter(i.MAX_VARYING_VECTORS),E=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),v=p>0,A=o||e.has("OES_texture_float"),I=v&&A,w=o?i.getParameter(i.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:s,getMaxPrecision:r,precision:a,logarithmicDepthBuffer:h,maxTextures:d,maxVertexTextures:p,maxTextureSize:m,maxCubemapSize:g,maxAttributes:M,maxVertexUniforms:f,maxVaryings:u,maxFragmentUniforms:E,vertexTextures:v,floatFragmentTextures:A,floatVertexTextures:I,maxSamples:w}}function bd(i){const e=this;let t=null,n=0,s=!1,r=!1;const o=new Dn,a=new Ne,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,p){const m=d.length!==0||p||n!==0||s;return s=p,n=d.length,m},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,p){t=h(d,p,0)},this.setState=function(d,p,m){const g=d.clippingPlanes,M=d.clipIntersection,f=d.clipShadows,u=i.get(d);if(!s||g===null||g.length===0||r&&!f)r?h(null):c();else{const E=r?0:n,v=E*4;let A=u.clippingState||null;l.value=A,A=h(g,p,v,m);for(let I=0;I!==v;++I)A[I]=t[I];u.clippingState=A,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=E}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(d,p,m,g){const M=d!==null?d.length:0;let f=null;if(M!==0){if(f=l.value,g!==!0||f===null){const u=m+M*4,E=p.matrixWorldInverse;a.getNormalMatrix(E),(f===null||f.length<u)&&(f=new Float32Array(u));for(let v=0,A=m;v!==M;++v,A+=4)o.copy(d[v]).applyMatrix4(E,a),o.normal.toArray(f,A),f[A+3]=o.constant}l.value=f,l.needsUpdate=!0}return e.numPlanes=M,e.numIntersection=0,f}}function Ad(i){let e=new WeakMap;function t(o,a){return a===xr?o.mapping=mi:a===Sr&&(o.mapping=_i),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===xr||a===Sr)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new Fc(l.height);return c.fromEquirectangularTexture(i,o),e.set(o,c),o.addEventListener("dispose",s),t(c.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}class wd extends Ko{constructor(e=-1,t=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-e,o=n+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const hi=4,Ga=[.125,.215,.35,.446,.526,.582],Fn=20,ar=new wd,ka=new we;let or=null,lr=0,cr=0;const Un=(1+Math.sqrt(5))/2,si=1/Un,Va=[new L(1,1,1),new L(-1,1,1),new L(1,1,-1),new L(-1,1,-1),new L(0,Un,si),new L(0,Un,-si),new L(si,0,Un),new L(-si,0,Un),new L(Un,si,0),new L(-Un,si,0)];class Wa{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100){or=this._renderer.getRenderTarget(),lr=this._renderer.getActiveCubeFace(),cr=this._renderer.getActiveMipmapLevel(),this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ya(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=qa(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(or,lr,cr),e.scissorTest=!1,as(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===mi||e.mapping===_i?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),or=this._renderer.getRenderTarget(),lr=this._renderer.getActiveCubeFace(),cr=this._renderer.getActiveMipmapLevel();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Tt,minFilter:Tt,generateMipmaps:!1,type:Fi,format:Ht,colorSpace:En,depthBuffer:!1},s=Xa(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Xa(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Rd(r)),this._blurMaterial=Cd(r,e,t)}return s}_compileMaterial(e){const t=new ot(this._lodPlanes[0],e);this._renderer.compile(t,ar)}_sceneToCubeUV(e,t,n,s){const a=new At(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,p=h.toneMapping;h.getClearColor(ka),h.toneMapping=vn,h.autoClear=!1;const m=new Es({name:"PMREM.Background",side:wt,depthWrite:!1,depthTest:!1}),g=new ot(new on,m);let M=!1;const f=e.background;f?f.isColor&&(m.color.copy(f),e.background=null,M=!0):(m.color.copy(ka),M=!0);for(let u=0;u<6;u++){const E=u%3;E===0?(a.up.set(0,l[u],0),a.lookAt(c[u],0,0)):E===1?(a.up.set(0,0,l[u]),a.lookAt(0,c[u],0)):(a.up.set(0,l[u],0),a.lookAt(0,0,c[u]));const v=this._cubeSize;as(s,E*v,u>2?v:0,v,v),h.setRenderTarget(s),M&&h.render(g,a),h.render(e,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=p,h.autoClear=d,e.background=f}_textureToCubeUV(e,t){const n=this._renderer,s=e.mapping===mi||e.mapping===_i;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ya()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=qa());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new ot(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const l=this._cubeSize;as(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,ar)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){const r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=Va[(s-1)%Va.length];this._blur(e,s-1,s,r,o)}t.autoClear=n}_blur(e,t,n,s,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,s,"latitudinal",r),this._halfBlur(o,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,d=new ot(this._lodPlanes[s],c),p=c.uniforms,m=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*Fn-1),M=r/g,f=isFinite(r)?1+Math.floor(h*M):Fn;f>Fn&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${f} samples when the maximum is set to ${Fn}`);const u=[];let E=0;for(let b=0;b<Fn;++b){const H=b/M,Z=Math.exp(-H*H/2);u.push(Z),b===0?E+=Z:b<f&&(E+=2*Z)}for(let b=0;b<u.length;b++)u[b]=u[b]/E;p.envMap.value=e.texture,p.samples.value=f,p.weights.value=u,p.latitudinal.value=o==="latitudinal",a&&(p.poleAxis.value=a);const{_lodMax:v}=this;p.dTheta.value=g,p.mipInt.value=v-n;const A=this._sizeLods[s],I=3*A*(s>v-hi?s-v+hi:0),w=4*(this._cubeSize-A);as(t,I,w,3*A,2*A),l.setRenderTarget(t),l.render(d,ar)}}function Rd(i){const e=[],t=[],n=[];let s=i;const r=i-hi+1+Ga.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);t.push(a);let l=1/a;o>i-hi?l=Ga[o-i+hi-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),h=-c,d=1+c,p=[h,h,d,h,d,d,h,h,d,d,h,d],m=6,g=6,M=3,f=2,u=1,E=new Float32Array(M*g*m),v=new Float32Array(f*g*m),A=new Float32Array(u*g*m);for(let w=0;w<m;w++){const b=w%3*2/3-1,H=w>2?0:-1,Z=[b,H,0,b+2/3,H,0,b+2/3,H+1,0,b,H,0,b+2/3,H+1,0,b,H+1,0];E.set(Z,M*g*w),v.set(p,f*g*w);const x=[w,w,w,w,w,w];A.set(x,u*g*w)}const I=new kt;I.setAttribute("position",new Pt(E,M)),I.setAttribute("uv",new Pt(v,f)),I.setAttribute("faceIndex",new Pt(A,u)),e.push(I),s>hi&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Xa(i,e,t){const n=new Hn(i,e,t);return n.texture.mapping=As,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function as(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function Cd(i,e,t){const n=new Float32Array(Fn),s=new L(0,1,0);return new yn({name:"SphericalGaussianBlur",defines:{n:Fn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Ir(),fragmentShader:`

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
		`,blending:gn,depthTest:!1,depthWrite:!1})}function qa(){return new yn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ir(),fragmentShader:`

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
		`,blending:gn,depthTest:!1,depthWrite:!1})}function Ya(){return new yn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ir(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:gn,depthTest:!1,depthWrite:!1})}function Ir(){return`

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
	`}function Ld(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===xr||l===Sr,h=l===mi||l===_i;if(c||h)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let d=e.get(a);return t===null&&(t=new Wa(i)),d=c?t.fromEquirectangular(a,d):t.fromCubemap(a,d),e.set(a,d),d.texture}else{if(e.has(a))return e.get(a).texture;{const d=a.image;if(c&&d&&d.height>0||h&&d&&s(d)){t===null&&(t=new Wa(i));const p=c?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,p),a.addEventListener("dispose",r),p.texture}else return null}}}return a}function s(a){let l=0;const c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function Pd(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const s=t(n);return s===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Id(i,e,t,n){const s={},r=new WeakMap;function o(d){const p=d.target;p.index!==null&&e.remove(p.index);for(const g in p.attributes)e.remove(p.attributes[g]);for(const g in p.morphAttributes){const M=p.morphAttributes[g];for(let f=0,u=M.length;f<u;f++)e.remove(M[f])}p.removeEventListener("dispose",o),delete s[p.id];const m=r.get(p);m&&(e.remove(m),r.delete(p)),n.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,t.memory.geometries--}function a(d,p){return s[p.id]===!0||(p.addEventListener("dispose",o),s[p.id]=!0,t.memory.geometries++),p}function l(d){const p=d.attributes;for(const g in p)e.update(p[g],i.ARRAY_BUFFER);const m=d.morphAttributes;for(const g in m){const M=m[g];for(let f=0,u=M.length;f<u;f++)e.update(M[f],i.ARRAY_BUFFER)}}function c(d){const p=[],m=d.index,g=d.attributes.position;let M=0;if(m!==null){const E=m.array;M=m.version;for(let v=0,A=E.length;v<A;v+=3){const I=E[v+0],w=E[v+1],b=E[v+2];p.push(I,w,w,b,b,I)}}else if(g!==void 0){const E=g.array;M=g.version;for(let v=0,A=E.length/3-1;v<A;v+=3){const I=v+0,w=v+1,b=v+2;p.push(I,w,w,b,b,I)}}else return;const f=new(zo(p)?$o:Yo)(p,1);f.version=M;const u=r.get(d);u&&e.remove(u),r.set(d,f)}function h(d){const p=r.get(d);if(p){const m=d.index;m!==null&&p.version<m.version&&c(d)}else c(d);return r.get(d)}return{get:a,update:l,getWireframeAttribute:h}}function Dd(i,e,t,n){const s=n.isWebGL2;let r;function o(m){r=m}let a,l;function c(m){a=m.type,l=m.bytesPerElement}function h(m,g){i.drawElements(r,g,a,m*l),t.update(g,r,1)}function d(m,g,M){if(M===0)return;let f,u;if(s)f=i,u="drawElementsInstanced";else if(f=e.get("ANGLE_instanced_arrays"),u="drawElementsInstancedANGLE",f===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[u](r,g,a,m*l,M),t.update(g,r,M)}function p(m,g,M){if(M===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let u=0;u<M;u++)this.render(m[u]/l,g[u]);else{f.multiDrawElementsWEBGL(r,g,0,a,m,0,M);let u=0;for(let E=0;E<M;E++)u+=g[E];t.update(u,r,1)}}this.setMode=o,this.setIndex=c,this.render=h,this.renderInstances=d,this.renderMultiDraw=p}function Ud(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(r/3);break;case i.LINES:t.lines+=a*(r/2);break;case i.LINE_STRIP:t.lines+=a*(r-1);break;case i.LINE_LOOP:t.lines+=a*r;break;case i.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function Nd(i,e){return i[0]-e[0]}function Fd(i,e){return Math.abs(e[1])-Math.abs(i[1])}function Od(i,e,t){const n={},s=new Float32Array(8),r=new WeakMap,o=new et,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,h,d){const p=c.morphTargetInfluences;if(e.isWebGL2===!0){const m=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,g=m!==void 0?m.length:0;let M=r.get(h);if(M===void 0||M.count!==g){let Q=function(){x.dispose(),r.delete(h),h.removeEventListener("dispose",Q)};M!==void 0&&M.texture.dispose();const f=h.morphAttributes.position!==void 0,u=h.morphAttributes.normal!==void 0,E=h.morphAttributes.color!==void 0,v=h.morphAttributes.position||[],A=h.morphAttributes.normal||[],I=h.morphAttributes.color||[];let w=0;f===!0&&(w=1),u===!0&&(w=2),E===!0&&(w=3);let b=h.attributes.position.count*w,H=1;b>e.maxTextureSize&&(H=Math.ceil(b/e.maxTextureSize),b=e.maxTextureSize);const Z=new Float32Array(b*H*4*g),x=new Vo(Z,b,H,g);x.type=qt,x.needsUpdate=!0;const T=w*4;for(let j=0;j<g;j++){const C=v[j],q=A[j],G=I[j],Y=b*H*4*j;for(let k=0;k<C.count;k++){const W=k*T;f===!0&&(o.fromBufferAttribute(C,k),Z[Y+W+0]=o.x,Z[Y+W+1]=o.y,Z[Y+W+2]=o.z,Z[Y+W+3]=0),u===!0&&(o.fromBufferAttribute(q,k),Z[Y+W+4]=o.x,Z[Y+W+5]=o.y,Z[Y+W+6]=o.z,Z[Y+W+7]=0),E===!0&&(o.fromBufferAttribute(G,k),Z[Y+W+8]=o.x,Z[Y+W+9]=o.y,Z[Y+W+10]=o.z,Z[Y+W+11]=G.itemSize===4?o.w:1)}}M={count:g,texture:x,size:new be(b,H)},r.set(h,M),h.addEventListener("dispose",Q)}if(c.isInstancedMesh===!0&&c.morphTexture!==null)d.getUniforms().setValue(i,"morphTexture",c.morphTexture,t);else{let f=0;for(let E=0;E<p.length;E++)f+=p[E];const u=h.morphTargetsRelative?1:1-f;d.getUniforms().setValue(i,"morphTargetBaseInfluence",u),d.getUniforms().setValue(i,"morphTargetInfluences",p)}d.getUniforms().setValue(i,"morphTargetsTexture",M.texture,t),d.getUniforms().setValue(i,"morphTargetsTextureSize",M.size)}else{const m=p===void 0?0:p.length;let g=n[h.id];if(g===void 0||g.length!==m){g=[];for(let v=0;v<m;v++)g[v]=[v,0];n[h.id]=g}for(let v=0;v<m;v++){const A=g[v];A[0]=v,A[1]=p[v]}g.sort(Fd);for(let v=0;v<8;v++)v<m&&g[v][1]?(a[v][0]=g[v][0],a[v][1]=g[v][1]):(a[v][0]=Number.MAX_SAFE_INTEGER,a[v][1]=0);a.sort(Nd);const M=h.morphAttributes.position,f=h.morphAttributes.normal;let u=0;for(let v=0;v<8;v++){const A=a[v],I=A[0],w=A[1];I!==Number.MAX_SAFE_INTEGER&&w?(M&&h.getAttribute("morphTarget"+v)!==M[I]&&h.setAttribute("morphTarget"+v,M[I]),f&&h.getAttribute("morphNormal"+v)!==f[I]&&h.setAttribute("morphNormal"+v,f[I]),s[v]=w,u+=w):(M&&h.hasAttribute("morphTarget"+v)===!0&&h.deleteAttribute("morphTarget"+v),f&&h.hasAttribute("morphNormal"+v)===!0&&h.deleteAttribute("morphNormal"+v),s[v]=0)}const E=h.morphTargetsRelative?1:1-u;d.getUniforms().setValue(i,"morphTargetBaseInfluence",E),d.getUniforms().setValue(i,"morphTargetInfluences",s)}}return{update:l}}function Bd(i,e,t,n){let s=new WeakMap;function r(l){const c=n.render.frame,h=l.geometry,d=e.get(l,h);if(s.get(d)!==c&&(e.update(d),s.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const p=l.skeleton;s.get(p)!==c&&(p.update(),s.set(p,c))}return d}function o(){s=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}class Qo extends St{constructor(e,t,n,s,r,o,a,l,c,h){if(h=h!==void 0?h:zn,h!==zn&&h!==gi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===zn&&(n=_n),n===void 0&&h===gi&&(n=Bn),super(null,s,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:_t,this.minFilter=l!==void 0?l:_t,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const el=new St,tl=new Qo(1,1);tl.compareFunction=Bo;const nl=new Vo,il=new xc,sl=new Zo,$a=[],ja=[],Ka=new Float32Array(16),Za=new Float32Array(9),Ja=new Float32Array(4);function yi(i,e,t){const n=i[0];if(n<=0||n>0)return i;const s=e*t;let r=$a[s];if(r===void 0&&(r=new Float32Array(s),$a[s]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(r,a)}return r}function ht(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function ut(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Rs(i,e){let t=ja[e];t===void 0&&(t=new Int32Array(e),ja[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function zd(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Hd(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ht(t,e))return;i.uniform2fv(this.addr,e),ut(t,e)}}function Gd(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(ht(t,e))return;i.uniform3fv(this.addr,e),ut(t,e)}}function kd(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ht(t,e))return;i.uniform4fv(this.addr,e),ut(t,e)}}function Vd(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(ht(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),ut(t,e)}else{if(ht(t,n))return;Ja.set(n),i.uniformMatrix2fv(this.addr,!1,Ja),ut(t,n)}}function Wd(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(ht(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),ut(t,e)}else{if(ht(t,n))return;Za.set(n),i.uniformMatrix3fv(this.addr,!1,Za),ut(t,n)}}function Xd(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(ht(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),ut(t,e)}else{if(ht(t,n))return;Ka.set(n),i.uniformMatrix4fv(this.addr,!1,Ka),ut(t,n)}}function qd(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Yd(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ht(t,e))return;i.uniform2iv(this.addr,e),ut(t,e)}}function $d(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ht(t,e))return;i.uniform3iv(this.addr,e),ut(t,e)}}function jd(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ht(t,e))return;i.uniform4iv(this.addr,e),ut(t,e)}}function Kd(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Zd(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ht(t,e))return;i.uniform2uiv(this.addr,e),ut(t,e)}}function Jd(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ht(t,e))return;i.uniform3uiv(this.addr,e),ut(t,e)}}function Qd(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ht(t,e))return;i.uniform4uiv(this.addr,e),ut(t,e)}}function ef(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);const r=this.type===i.SAMPLER_2D_SHADOW?tl:el;t.setTexture2D(e||r,s)}function tf(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||il,s)}function nf(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||sl,s)}function sf(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||nl,s)}function rf(i){switch(i){case 5126:return zd;case 35664:return Hd;case 35665:return Gd;case 35666:return kd;case 35674:return Vd;case 35675:return Wd;case 35676:return Xd;case 5124:case 35670:return qd;case 35667:case 35671:return Yd;case 35668:case 35672:return $d;case 35669:case 35673:return jd;case 5125:return Kd;case 36294:return Zd;case 36295:return Jd;case 36296:return Qd;case 35678:case 36198:case 36298:case 36306:case 35682:return ef;case 35679:case 36299:case 36307:return tf;case 35680:case 36300:case 36308:case 36293:return nf;case 36289:case 36303:case 36311:case 36292:return sf}}function af(i,e){i.uniform1fv(this.addr,e)}function of(i,e){const t=yi(e,this.size,2);i.uniform2fv(this.addr,t)}function lf(i,e){const t=yi(e,this.size,3);i.uniform3fv(this.addr,t)}function cf(i,e){const t=yi(e,this.size,4);i.uniform4fv(this.addr,t)}function hf(i,e){const t=yi(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function uf(i,e){const t=yi(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function df(i,e){const t=yi(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function ff(i,e){i.uniform1iv(this.addr,e)}function pf(i,e){i.uniform2iv(this.addr,e)}function mf(i,e){i.uniform3iv(this.addr,e)}function _f(i,e){i.uniform4iv(this.addr,e)}function gf(i,e){i.uniform1uiv(this.addr,e)}function vf(i,e){i.uniform2uiv(this.addr,e)}function xf(i,e){i.uniform3uiv(this.addr,e)}function Sf(i,e){i.uniform4uiv(this.addr,e)}function Mf(i,e,t){const n=this.cache,s=e.length,r=Rs(t,s);ht(n,r)||(i.uniform1iv(this.addr,r),ut(n,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||el,r[o])}function yf(i,e,t){const n=this.cache,s=e.length,r=Rs(t,s);ht(n,r)||(i.uniform1iv(this.addr,r),ut(n,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||il,r[o])}function Ef(i,e,t){const n=this.cache,s=e.length,r=Rs(t,s);ht(n,r)||(i.uniform1iv(this.addr,r),ut(n,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||sl,r[o])}function Tf(i,e,t){const n=this.cache,s=e.length,r=Rs(t,s);ht(n,r)||(i.uniform1iv(this.addr,r),ut(n,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||nl,r[o])}function bf(i){switch(i){case 5126:return af;case 35664:return of;case 35665:return lf;case 35666:return cf;case 35674:return hf;case 35675:return uf;case 35676:return df;case 5124:case 35670:return ff;case 35667:case 35671:return pf;case 35668:case 35672:return mf;case 35669:case 35673:return _f;case 5125:return gf;case 36294:return vf;case 36295:return xf;case 36296:return Sf;case 35678:case 36198:case 36298:case 36306:case 35682:return Mf;case 35679:case 36299:case 36307:return yf;case 35680:case 36300:case 36308:case 36293:return Ef;case 36289:case 36303:case 36311:case 36292:return Tf}}class Af{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=rf(t.type)}}class wf{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=bf(t.type)}}class Rf{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(e,t[a.id],n)}}}const hr=/(\w+)(\])?(\[|\.)?/g;function Qa(i,e){i.seq.push(e),i.map[e.id]=e}function Cf(i,e,t){const n=i.name,s=n.length;for(hr.lastIndex=0;;){const r=hr.exec(n),o=hr.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Qa(t,c===void 0?new Af(a,i,e):new wf(a,i,e));break}else{let d=t.map[a];d===void 0&&(d=new Rf(a),Qa(t,d)),t=d}}}class ms{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);Cf(r,o,this)}}setValue(e,t,n,s){const r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){const s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,o=t.length;r!==o;++r){const a=t[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){const n=[];for(let s=0,r=e.length;s!==r;++s){const o=e[s];o.id in t&&n.push(o)}return n}}function eo(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const Lf=37297;let Pf=0;function If(i,e){const t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function Df(i){const e=Ye.getPrimaries(Ye.workingColorSpace),t=Ye.getPrimaries(i);let n;switch(e===t?n="":e===xs&&t===vs?n="LinearDisplayP3ToLinearSRGB":e===vs&&t===xs&&(n="LinearSRGBToLinearDisplayP3"),i){case En:case ws:return[n,"LinearTransferOETF"];case Wt:case Lr:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function to(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),s=i.getShaderInfoLog(e).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+If(i.getShaderSource(e),o)}else return s}function Uf(i,e){const t=Df(e);return`vec4 ${i}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function Nf(i,e){let t;switch(e){case Wl:t="Linear";break;case Xl:t="Reinhard";break;case ql:t="OptimizedCineon";break;case wo:t="ACESFilmic";break;case $l:t="AgX";break;case jl:t="Neutral";break;case Yl:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Ff(i){return[i.extensionDerivatives||i.envMapCubeUVHeight||i.bumpMap||i.normalMapTangentSpace||i.clearcoatNormalMap||i.flatShading||i.alphaToCoverage||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(ui).join(`
`)}function Of(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ui).join(`
`)}function Bf(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function zf(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(e,s),o=r.name;let a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function ui(i){return i!==""}function no(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function io(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Hf=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ar(i){return i.replace(Hf,kf)}const Gf=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function kf(i,e){let t=Ue[e];if(t===void 0){const n=Gf.get(e);if(n!==void 0)t=Ue[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Ar(t)}const Vf=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function so(i){return i.replace(Vf,Wf)}function Wf(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function ro(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	`;return i.isWebGL2&&(e+=`precision ${i.precision} sampler3D;
		precision ${i.precision} sampler2DArray;
		precision ${i.precision} sampler2DShadow;
		precision ${i.precision} samplerCubeShadow;
		precision ${i.precision} sampler2DArrayShadow;
		precision ${i.precision} isampler2D;
		precision ${i.precision} isampler3D;
		precision ${i.precision} isamplerCube;
		precision ${i.precision} isampler2DArray;
		precision ${i.precision} usampler2D;
		precision ${i.precision} usampler3D;
		precision ${i.precision} usamplerCube;
		precision ${i.precision} usampler2DArray;
		`),i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Xf(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===To?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===bo?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===nn&&(e="SHADOWMAP_TYPE_VSM"),e}function qf(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case mi:case _i:e="ENVMAP_TYPE_CUBE";break;case As:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Yf(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case _i:e="ENVMAP_MODE_REFRACTION";break}return e}function $f(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Ao:e="ENVMAP_BLENDING_MULTIPLY";break;case kl:e="ENVMAP_BLENDING_MIX";break;case Vl:e="ENVMAP_BLENDING_ADD";break}return e}function jf(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function Kf(i,e,t,n){const s=i.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=Xf(t),c=qf(t),h=Yf(t),d=$f(t),p=jf(t),m=t.isWebGL2?"":Ff(t),g=Of(t),M=Bf(r),f=s.createProgram();let u,E,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(u=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M].filter(ui).join(`
`),u.length>0&&(u+=`
`),E=[m,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M].filter(ui).join(`
`),E.length>0&&(E+=`
`)):(u=[ro(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ui).join(`
`),E=[m,ro(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+d:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==vn?"#define TONE_MAPPING":"",t.toneMapping!==vn?Ue.tonemapping_pars_fragment:"",t.toneMapping!==vn?Nf("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ue.colorspace_pars_fragment,Uf("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ui).join(`
`)),o=Ar(o),o=no(o,t),o=io(o,t),a=Ar(a),a=no(a,t),a=io(a,t),o=so(o),a=so(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,u=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+u,E=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===Ma?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Ma?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+E);const A=v+u+o,I=v+E+a,w=eo(s,s.VERTEX_SHADER,A),b=eo(s,s.FRAGMENT_SHADER,I);s.attachShader(f,w),s.attachShader(f,b),t.index0AttributeName!==void 0?s.bindAttribLocation(f,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(f,0,"position"),s.linkProgram(f);function H(Q){if(i.debug.checkShaderErrors){const j=s.getProgramInfoLog(f).trim(),C=s.getShaderInfoLog(w).trim(),q=s.getShaderInfoLog(b).trim();let G=!0,Y=!0;if(s.getProgramParameter(f,s.LINK_STATUS)===!1)if(G=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,f,w,b);else{const k=to(s,w,"vertex"),W=to(s,b,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(f,s.VALIDATE_STATUS)+`

Material Name: `+Q.name+`
Material Type: `+Q.type+`

Program Info Log: `+j+`
`+k+`
`+W)}else j!==""?console.warn("THREE.WebGLProgram: Program Info Log:",j):(C===""||q==="")&&(Y=!1);Y&&(Q.diagnostics={runnable:G,programLog:j,vertexShader:{log:C,prefix:u},fragmentShader:{log:q,prefix:E}})}s.deleteShader(w),s.deleteShader(b),Z=new ms(s,f),x=zf(s,f)}let Z;this.getUniforms=function(){return Z===void 0&&H(this),Z};let x;this.getAttributes=function(){return x===void 0&&H(this),x};let T=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return T===!1&&(T=s.getProgramParameter(f,Lf)),T},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(f),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Pf++,this.cacheKey=e,this.usedTimes=1,this.program=f,this.vertexShader=w,this.fragmentShader=b,this}let Zf=0;class Jf{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Qf(e),t.set(e,n)),n}}class Qf{constructor(e){this.id=Zf++,this.code=e,this.usedTimes=0}}function ep(i,e,t,n,s,r,o){const a=new Xo,l=new Jf,c=new Set,h=[],d=s.isWebGL2,p=s.logarithmicDepthBuffer,m=s.vertexTextures;let g=s.precision;const M={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function f(x){return c.add(x),x===0?"uv":`uv${x}`}function u(x,T,Q,j,C){const q=j.fog,G=C.geometry,Y=x.isMeshStandardMaterial?j.environment:null,k=(x.isMeshStandardMaterial?t:e).get(x.envMap||Y),W=k&&k.mapping===As?k.image.height:null,te=M[x.type];x.precision!==null&&(g=s.getMaxPrecision(x.precision),g!==x.precision&&console.warn("THREE.WebGLProgram.getParameters:",x.precision,"not supported, using",g,"instead."));const se=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,ue=se!==void 0?se.length:0;let Le=0;G.morphAttributes.position!==void 0&&(Le=1),G.morphAttributes.normal!==void 0&&(Le=2),G.morphAttributes.color!==void 0&&(Le=3);let B,K,he,Ee;if(te){const je=Xt[te];B=je.vertexShader,K=je.fragmentShader}else B=x.vertexShader,K=x.fragmentShader,l.update(x),he=l.getVertexShaderID(x),Ee=l.getFragmentShaderID(x);const _e=i.getRenderTarget(),de=C.isInstancedMesh===!0,Xe=C.isBatchedMesh===!0,Te=!!x.map,D=!!x.matcap,pt=!!k,ve=!!x.aoMap,Be=!!x.lightMap,Se=!!x.bumpMap,Ve=!!x.normalMap,Fe=!!x.displacementMap,ze=!!x.emissiveMap,nt=!!x.metalnessMap,y=!!x.roughnessMap,_=x.anisotropy>0,z=x.clearcoat>0,X=x.iridescence>0,J=x.sheen>0,$=x.transmission>0,Pe=_&&!!x.anisotropyMap,Me=z&&!!x.clearcoatMap,re=z&&!!x.clearcoatNormalMap,oe=z&&!!x.clearcoatRoughnessMap,Ie=X&&!!x.iridescenceMap,ee=X&&!!x.iridescenceThicknessMap,st=J&&!!x.sheenColorMap,He=J&&!!x.sheenRoughnessMap,ge=!!x.specularMap,fe=!!x.specularColorMap,pe=!!x.specularIntensityMap,We=$&&!!x.transmissionMap,Re=$&&!!x.thicknessMap,Je=!!x.gradientMap,R=!!x.alphaMap,ae=x.alphaTest>0,N=!!x.alphaHash,ne=!!x.extensions;let le=vn;x.toneMapped&&(_e===null||_e.isXRRenderTarget===!0)&&(le=i.toneMapping);const Ge={isWebGL2:d,shaderID:te,shaderType:x.type,shaderName:x.name,vertexShader:B,fragmentShader:K,defines:x.defines,customVertexShaderID:he,customFragmentShaderID:Ee,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:g,batching:Xe,instancing:de,instancingColor:de&&C.instanceColor!==null,instancingMorph:de&&C.morphTexture!==null,supportsVertexTextures:m,outputColorSpace:_e===null?i.outputColorSpace:_e.isXRRenderTarget===!0?_e.texture.colorSpace:En,alphaToCoverage:!!x.alphaToCoverage,map:Te,matcap:D,envMap:pt,envMapMode:pt&&k.mapping,envMapCubeUVHeight:W,aoMap:ve,lightMap:Be,bumpMap:Se,normalMap:Ve,displacementMap:m&&Fe,emissiveMap:ze,normalMapObjectSpace:Ve&&x.normalMapType===rc,normalMapTangentSpace:Ve&&x.normalMapType===Oo,metalnessMap:nt,roughnessMap:y,anisotropy:_,anisotropyMap:Pe,clearcoat:z,clearcoatMap:Me,clearcoatNormalMap:re,clearcoatRoughnessMap:oe,iridescence:X,iridescenceMap:Ie,iridescenceThicknessMap:ee,sheen:J,sheenColorMap:st,sheenRoughnessMap:He,specularMap:ge,specularColorMap:fe,specularIntensityMap:pe,transmission:$,transmissionMap:We,thicknessMap:Re,gradientMap:Je,opaque:x.transparent===!1&&x.blending===di&&x.alphaToCoverage===!1,alphaMap:R,alphaTest:ae,alphaHash:N,combine:x.combine,mapUv:Te&&f(x.map.channel),aoMapUv:ve&&f(x.aoMap.channel),lightMapUv:Be&&f(x.lightMap.channel),bumpMapUv:Se&&f(x.bumpMap.channel),normalMapUv:Ve&&f(x.normalMap.channel),displacementMapUv:Fe&&f(x.displacementMap.channel),emissiveMapUv:ze&&f(x.emissiveMap.channel),metalnessMapUv:nt&&f(x.metalnessMap.channel),roughnessMapUv:y&&f(x.roughnessMap.channel),anisotropyMapUv:Pe&&f(x.anisotropyMap.channel),clearcoatMapUv:Me&&f(x.clearcoatMap.channel),clearcoatNormalMapUv:re&&f(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:oe&&f(x.clearcoatRoughnessMap.channel),iridescenceMapUv:Ie&&f(x.iridescenceMap.channel),iridescenceThicknessMapUv:ee&&f(x.iridescenceThicknessMap.channel),sheenColorMapUv:st&&f(x.sheenColorMap.channel),sheenRoughnessMapUv:He&&f(x.sheenRoughnessMap.channel),specularMapUv:ge&&f(x.specularMap.channel),specularColorMapUv:fe&&f(x.specularColorMap.channel),specularIntensityMapUv:pe&&f(x.specularIntensityMap.channel),transmissionMapUv:We&&f(x.transmissionMap.channel),thicknessMapUv:Re&&f(x.thicknessMap.channel),alphaMapUv:R&&f(x.alphaMap.channel),vertexTangents:!!G.attributes.tangent&&(Ve||_),vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,pointsUvs:C.isPoints===!0&&!!G.attributes.uv&&(Te||R),fog:!!q,useFog:x.fog===!0,fogExp2:!!q&&q.isFogExp2,flatShading:x.flatShading===!0,sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:p,skinning:C.isSkinnedMesh===!0,morphTargets:G.morphAttributes.position!==void 0,morphNormals:G.morphAttributes.normal!==void 0,morphColors:G.morphAttributes.color!==void 0,morphTargetsCount:ue,morphTextureStride:Le,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:x.dithering,shadowMapEnabled:i.shadowMap.enabled&&Q.length>0,shadowMapType:i.shadowMap.type,toneMapping:le,useLegacyLights:i._useLegacyLights,decodeVideoTexture:Te&&x.map.isVideoTexture===!0&&Ye.getTransfer(x.map.colorSpace)===Ze,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===sn,flipSided:x.side===wt,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionDerivatives:ne&&x.extensions.derivatives===!0,extensionFragDepth:ne&&x.extensions.fragDepth===!0,extensionDrawBuffers:ne&&x.extensions.drawBuffers===!0,extensionShaderTextureLOD:ne&&x.extensions.shaderTextureLOD===!0,extensionClipCullDistance:ne&&x.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:ne&&x.extensions.multiDraw===!0&&n.has("WEBGL_multi_draw"),rendererExtensionFragDepth:d||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:d||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:d||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return Ge.vertexUv1s=c.has(1),Ge.vertexUv2s=c.has(2),Ge.vertexUv3s=c.has(3),c.clear(),Ge}function E(x){const T=[];if(x.shaderID?T.push(x.shaderID):(T.push(x.customVertexShaderID),T.push(x.customFragmentShaderID)),x.defines!==void 0)for(const Q in x.defines)T.push(Q),T.push(x.defines[Q]);return x.isRawShaderMaterial===!1&&(v(T,x),A(T,x),T.push(i.outputColorSpace)),T.push(x.customProgramCacheKey),T.join()}function v(x,T){x.push(T.precision),x.push(T.outputColorSpace),x.push(T.envMapMode),x.push(T.envMapCubeUVHeight),x.push(T.mapUv),x.push(T.alphaMapUv),x.push(T.lightMapUv),x.push(T.aoMapUv),x.push(T.bumpMapUv),x.push(T.normalMapUv),x.push(T.displacementMapUv),x.push(T.emissiveMapUv),x.push(T.metalnessMapUv),x.push(T.roughnessMapUv),x.push(T.anisotropyMapUv),x.push(T.clearcoatMapUv),x.push(T.clearcoatNormalMapUv),x.push(T.clearcoatRoughnessMapUv),x.push(T.iridescenceMapUv),x.push(T.iridescenceThicknessMapUv),x.push(T.sheenColorMapUv),x.push(T.sheenRoughnessMapUv),x.push(T.specularMapUv),x.push(T.specularColorMapUv),x.push(T.specularIntensityMapUv),x.push(T.transmissionMapUv),x.push(T.thicknessMapUv),x.push(T.combine),x.push(T.fogExp2),x.push(T.sizeAttenuation),x.push(T.morphTargetsCount),x.push(T.morphAttributeCount),x.push(T.numDirLights),x.push(T.numPointLights),x.push(T.numSpotLights),x.push(T.numSpotLightMaps),x.push(T.numHemiLights),x.push(T.numRectAreaLights),x.push(T.numDirLightShadows),x.push(T.numPointLightShadows),x.push(T.numSpotLightShadows),x.push(T.numSpotLightShadowsWithMaps),x.push(T.numLightProbes),x.push(T.shadowMapType),x.push(T.toneMapping),x.push(T.numClippingPlanes),x.push(T.numClipIntersection),x.push(T.depthPacking)}function A(x,T){a.disableAll(),T.isWebGL2&&a.enable(0),T.supportsVertexTextures&&a.enable(1),T.instancing&&a.enable(2),T.instancingColor&&a.enable(3),T.instancingMorph&&a.enable(4),T.matcap&&a.enable(5),T.envMap&&a.enable(6),T.normalMapObjectSpace&&a.enable(7),T.normalMapTangentSpace&&a.enable(8),T.clearcoat&&a.enable(9),T.iridescence&&a.enable(10),T.alphaTest&&a.enable(11),T.vertexColors&&a.enable(12),T.vertexAlphas&&a.enable(13),T.vertexUv1s&&a.enable(14),T.vertexUv2s&&a.enable(15),T.vertexUv3s&&a.enable(16),T.vertexTangents&&a.enable(17),T.anisotropy&&a.enable(18),T.alphaHash&&a.enable(19),T.batching&&a.enable(20),x.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.skinning&&a.enable(4),T.morphTargets&&a.enable(5),T.morphNormals&&a.enable(6),T.morphColors&&a.enable(7),T.premultipliedAlpha&&a.enable(8),T.shadowMapEnabled&&a.enable(9),T.useLegacyLights&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.transmission&&a.enable(15),T.sheen&&a.enable(16),T.opaque&&a.enable(17),T.pointsUvs&&a.enable(18),T.decodeVideoTexture&&a.enable(19),T.alphaToCoverage&&a.enable(20),x.push(a.mask)}function I(x){const T=M[x.type];let Q;if(T){const j=Xt[T];Q=Ic.clone(j.uniforms)}else Q=x.uniforms;return Q}function w(x,T){let Q;for(let j=0,C=h.length;j<C;j++){const q=h[j];if(q.cacheKey===T){Q=q,++Q.usedTimes;break}}return Q===void 0&&(Q=new Kf(i,T,x,r),h.push(Q)),Q}function b(x){if(--x.usedTimes===0){const T=h.indexOf(x);h[T]=h[h.length-1],h.pop(),x.destroy()}}function H(x){l.remove(x)}function Z(){l.dispose()}return{getParameters:u,getProgramCacheKey:E,getUniforms:I,acquireProgram:w,releaseProgram:b,releaseShaderCache:H,programs:h,dispose:Z}}function tp(){let i=new WeakMap;function e(r){let o=i.get(r);return o===void 0&&(o={},i.set(r,o)),o}function t(r){i.delete(r)}function n(r,o,a){i.get(r)[o]=a}function s(){i=new WeakMap}return{get:e,remove:t,update:n,dispose:s}}function np(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function ao(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function oo(){const i=[];let e=0;const t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function o(d,p,m,g,M,f){let u=i[e];return u===void 0?(u={id:d.id,object:d,geometry:p,material:m,groupOrder:g,renderOrder:d.renderOrder,z:M,group:f},i[e]=u):(u.id=d.id,u.object=d,u.geometry=p,u.material=m,u.groupOrder=g,u.renderOrder=d.renderOrder,u.z=M,u.group=f),e++,u}function a(d,p,m,g,M,f){const u=o(d,p,m,g,M,f);m.transmission>0?n.push(u):m.transparent===!0?s.push(u):t.push(u)}function l(d,p,m,g,M,f){const u=o(d,p,m,g,M,f);m.transmission>0?n.unshift(u):m.transparent===!0?s.unshift(u):t.unshift(u)}function c(d,p){t.length>1&&t.sort(d||np),n.length>1&&n.sort(p||ao),s.length>1&&s.sort(p||ao)}function h(){for(let d=e,p=i.length;d<p;d++){const m=i[d];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:a,unshift:l,finish:h,sort:c}}function ip(){let i=new WeakMap;function e(n,s){const r=i.get(n);let o;return r===void 0?(o=new oo,i.set(n,[o])):s>=r.length?(o=new oo,r.push(o)):o=r[s],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function sp(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new L,color:new we};break;case"SpotLight":t={position:new L,direction:new L,color:new we,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new L,color:new we,distance:0,decay:0};break;case"HemisphereLight":t={direction:new L,skyColor:new we,groundColor:new we};break;case"RectAreaLight":t={color:new we,position:new L,halfWidth:new L,halfHeight:new L};break}return i[e.id]=t,t}}}function rp(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new be};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new be};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new be,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let ap=0;function op(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function lp(i,e){const t=new sp,n=rp(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)s.probe.push(new L);const r=new L,o=new $e,a=new $e;function l(h,d){let p=0,m=0,g=0;for(let Q=0;Q<9;Q++)s.probe[Q].set(0,0,0);let M=0,f=0,u=0,E=0,v=0,A=0,I=0,w=0,b=0,H=0,Z=0;h.sort(op);const x=d===!0?Math.PI:1;for(let Q=0,j=h.length;Q<j;Q++){const C=h[Q],q=C.color,G=C.intensity,Y=C.distance,k=C.shadow&&C.shadow.map?C.shadow.map.texture:null;if(C.isAmbientLight)p+=q.r*G*x,m+=q.g*G*x,g+=q.b*G*x;else if(C.isLightProbe){for(let W=0;W<9;W++)s.probe[W].addScaledVector(C.sh.coefficients[W],G);Z++}else if(C.isDirectionalLight){const W=t.get(C);if(W.color.copy(C.color).multiplyScalar(C.intensity*x),C.castShadow){const te=C.shadow,se=n.get(C);se.shadowBias=te.bias,se.shadowNormalBias=te.normalBias,se.shadowRadius=te.radius,se.shadowMapSize=te.mapSize,s.directionalShadow[M]=se,s.directionalShadowMap[M]=k,s.directionalShadowMatrix[M]=C.shadow.matrix,A++}s.directional[M]=W,M++}else if(C.isSpotLight){const W=t.get(C);W.position.setFromMatrixPosition(C.matrixWorld),W.color.copy(q).multiplyScalar(G*x),W.distance=Y,W.coneCos=Math.cos(C.angle),W.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),W.decay=C.decay,s.spot[u]=W;const te=C.shadow;if(C.map&&(s.spotLightMap[b]=C.map,b++,te.updateMatrices(C),C.castShadow&&H++),s.spotLightMatrix[u]=te.matrix,C.castShadow){const se=n.get(C);se.shadowBias=te.bias,se.shadowNormalBias=te.normalBias,se.shadowRadius=te.radius,se.shadowMapSize=te.mapSize,s.spotShadow[u]=se,s.spotShadowMap[u]=k,w++}u++}else if(C.isRectAreaLight){const W=t.get(C);W.color.copy(q).multiplyScalar(G),W.halfWidth.set(C.width*.5,0,0),W.halfHeight.set(0,C.height*.5,0),s.rectArea[E]=W,E++}else if(C.isPointLight){const W=t.get(C);if(W.color.copy(C.color).multiplyScalar(C.intensity*x),W.distance=C.distance,W.decay=C.decay,C.castShadow){const te=C.shadow,se=n.get(C);se.shadowBias=te.bias,se.shadowNormalBias=te.normalBias,se.shadowRadius=te.radius,se.shadowMapSize=te.mapSize,se.shadowCameraNear=te.camera.near,se.shadowCameraFar=te.camera.far,s.pointShadow[f]=se,s.pointShadowMap[f]=k,s.pointShadowMatrix[f]=C.shadow.matrix,I++}s.point[f]=W,f++}else if(C.isHemisphereLight){const W=t.get(C);W.skyColor.copy(C.color).multiplyScalar(G*x),W.groundColor.copy(C.groundColor).multiplyScalar(G*x),s.hemi[v]=W,v++}}E>0&&(e.isWebGL2?i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=ie.LTC_FLOAT_1,s.rectAreaLTC2=ie.LTC_FLOAT_2):(s.rectAreaLTC1=ie.LTC_HALF_1,s.rectAreaLTC2=ie.LTC_HALF_2):i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=ie.LTC_FLOAT_1,s.rectAreaLTC2=ie.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=ie.LTC_HALF_1,s.rectAreaLTC2=ie.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=p,s.ambient[1]=m,s.ambient[2]=g;const T=s.hash;(T.directionalLength!==M||T.pointLength!==f||T.spotLength!==u||T.rectAreaLength!==E||T.hemiLength!==v||T.numDirectionalShadows!==A||T.numPointShadows!==I||T.numSpotShadows!==w||T.numSpotMaps!==b||T.numLightProbes!==Z)&&(s.directional.length=M,s.spot.length=u,s.rectArea.length=E,s.point.length=f,s.hemi.length=v,s.directionalShadow.length=A,s.directionalShadowMap.length=A,s.pointShadow.length=I,s.pointShadowMap.length=I,s.spotShadow.length=w,s.spotShadowMap.length=w,s.directionalShadowMatrix.length=A,s.pointShadowMatrix.length=I,s.spotLightMatrix.length=w+b-H,s.spotLightMap.length=b,s.numSpotLightShadowsWithMaps=H,s.numLightProbes=Z,T.directionalLength=M,T.pointLength=f,T.spotLength=u,T.rectAreaLength=E,T.hemiLength=v,T.numDirectionalShadows=A,T.numPointShadows=I,T.numSpotShadows=w,T.numSpotMaps=b,T.numLightProbes=Z,s.version=ap++)}function c(h,d){let p=0,m=0,g=0,M=0,f=0;const u=d.matrixWorldInverse;for(let E=0,v=h.length;E<v;E++){const A=h[E];if(A.isDirectionalLight){const I=s.directional[p];I.direction.setFromMatrixPosition(A.matrixWorld),r.setFromMatrixPosition(A.target.matrixWorld),I.direction.sub(r),I.direction.transformDirection(u),p++}else if(A.isSpotLight){const I=s.spot[g];I.position.setFromMatrixPosition(A.matrixWorld),I.position.applyMatrix4(u),I.direction.setFromMatrixPosition(A.matrixWorld),r.setFromMatrixPosition(A.target.matrixWorld),I.direction.sub(r),I.direction.transformDirection(u),g++}else if(A.isRectAreaLight){const I=s.rectArea[M];I.position.setFromMatrixPosition(A.matrixWorld),I.position.applyMatrix4(u),a.identity(),o.copy(A.matrixWorld),o.premultiply(u),a.extractRotation(o),I.halfWidth.set(A.width*.5,0,0),I.halfHeight.set(0,A.height*.5,0),I.halfWidth.applyMatrix4(a),I.halfHeight.applyMatrix4(a),M++}else if(A.isPointLight){const I=s.point[m];I.position.setFromMatrixPosition(A.matrixWorld),I.position.applyMatrix4(u),m++}else if(A.isHemisphereLight){const I=s.hemi[f];I.direction.setFromMatrixPosition(A.matrixWorld),I.direction.transformDirection(u),f++}}}return{setup:l,setupView:c,state:s}}function lo(i,e){const t=new lp(i,e),n=[],s=[];function r(){n.length=0,s.length=0}function o(d){n.push(d)}function a(d){s.push(d)}function l(d){t.setup(n,d)}function c(d){t.setupView(n,d)}return{init:r,state:{lightsArray:n,shadowsArray:s,lights:t},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function cp(i,e){let t=new WeakMap;function n(r,o=0){const a=t.get(r);let l;return a===void 0?(l=new lo(i,e),t.set(r,[l])):o>=a.length?(l=new lo(i,e),a.push(l)):l=a[o],l}function s(){t=new WeakMap}return{get:n,dispose:s}}class hp extends kn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=ic,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class up extends kn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const dp=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,fp=`uniform sampler2D shadow_pass;
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
}`;function pp(i,e,t){let n=new Pr;const s=new be,r=new be,o=new et,a=new hp({depthPacking:sc}),l=new up,c={},h=t.maxTextureSize,d={[Mn]:wt,[wt]:Mn,[sn]:sn},p=new yn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new be},radius:{value:4}},vertexShader:dp,fragmentShader:fp}),m=p.clone();m.defines.HORIZONTAL_PASS=1;const g=new kt;g.setAttribute("position",new Pt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const M=new ot(g,p),f=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=To;let u=this.type;this.render=function(w,b,H){if(f.enabled===!1||f.autoUpdate===!1&&f.needsUpdate===!1||w.length===0)return;const Z=i.getRenderTarget(),x=i.getActiveCubeFace(),T=i.getActiveMipmapLevel(),Q=i.state;Q.setBlending(gn),Q.buffers.color.setClear(1,1,1,1),Q.buffers.depth.setTest(!0),Q.setScissorTest(!1);const j=u!==nn&&this.type===nn,C=u===nn&&this.type!==nn;for(let q=0,G=w.length;q<G;q++){const Y=w[q],k=Y.shadow;if(k===void 0){console.warn("THREE.WebGLShadowMap:",Y,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;s.copy(k.mapSize);const W=k.getFrameExtents();if(s.multiply(W),r.copy(k.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/W.x),s.x=r.x*W.x,k.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/W.y),s.y=r.y*W.y,k.mapSize.y=r.y)),k.map===null||j===!0||C===!0){const se=this.type!==nn?{minFilter:_t,magFilter:_t}:{};k.map!==null&&k.map.dispose(),k.map=new Hn(s.x,s.y,se),k.map.texture.name=Y.name+".shadowMap",k.camera.updateProjectionMatrix()}i.setRenderTarget(k.map),i.clear();const te=k.getViewportCount();for(let se=0;se<te;se++){const ue=k.getViewport(se);o.set(r.x*ue.x,r.y*ue.y,r.x*ue.z,r.y*ue.w),Q.viewport(o),k.updateMatrices(Y,se),n=k.getFrustum(),A(b,H,k.camera,Y,this.type)}k.isPointLightShadow!==!0&&this.type===nn&&E(k,H),k.needsUpdate=!1}u=this.type,f.needsUpdate=!1,i.setRenderTarget(Z,x,T)};function E(w,b){const H=e.update(M);p.defines.VSM_SAMPLES!==w.blurSamples&&(p.defines.VSM_SAMPLES=w.blurSamples,m.defines.VSM_SAMPLES=w.blurSamples,p.needsUpdate=!0,m.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new Hn(s.x,s.y)),p.uniforms.shadow_pass.value=w.map.texture,p.uniforms.resolution.value=w.mapSize,p.uniforms.radius.value=w.radius,i.setRenderTarget(w.mapPass),i.clear(),i.renderBufferDirect(b,null,H,p,M,null),m.uniforms.shadow_pass.value=w.mapPass.texture,m.uniforms.resolution.value=w.mapSize,m.uniforms.radius.value=w.radius,i.setRenderTarget(w.map),i.clear(),i.renderBufferDirect(b,null,H,m,M,null)}function v(w,b,H,Z){let x=null;const T=H.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(T!==void 0)x=T;else if(x=H.isPointLight===!0?l:a,i.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0){const Q=x.uuid,j=b.uuid;let C=c[Q];C===void 0&&(C={},c[Q]=C);let q=C[j];q===void 0&&(q=x.clone(),C[j]=q,b.addEventListener("dispose",I)),x=q}if(x.visible=b.visible,x.wireframe=b.wireframe,Z===nn?x.side=b.shadowSide!==null?b.shadowSide:b.side:x.side=b.shadowSide!==null?b.shadowSide:d[b.side],x.alphaMap=b.alphaMap,x.alphaTest=b.alphaTest,x.map=b.map,x.clipShadows=b.clipShadows,x.clippingPlanes=b.clippingPlanes,x.clipIntersection=b.clipIntersection,x.displacementMap=b.displacementMap,x.displacementScale=b.displacementScale,x.displacementBias=b.displacementBias,x.wireframeLinewidth=b.wireframeLinewidth,x.linewidth=b.linewidth,H.isPointLight===!0&&x.isMeshDistanceMaterial===!0){const Q=i.properties.get(x);Q.light=H}return x}function A(w,b,H,Z,x){if(w.visible===!1)return;if(w.layers.test(b.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&x===nn)&&(!w.frustumCulled||n.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,w.matrixWorld);const j=e.update(w),C=w.material;if(Array.isArray(C)){const q=j.groups;for(let G=0,Y=q.length;G<Y;G++){const k=q[G],W=C[k.materialIndex];if(W&&W.visible){const te=v(w,W,Z,x);w.onBeforeShadow(i,w,b,H,j,te,k),i.renderBufferDirect(H,null,j,te,w,k),w.onAfterShadow(i,w,b,H,j,te,k)}}}else if(C.visible){const q=v(w,C,Z,x);w.onBeforeShadow(i,w,b,H,j,q,null),i.renderBufferDirect(H,null,j,q,w,null),w.onAfterShadow(i,w,b,H,j,q,null)}}const Q=w.children;for(let j=0,C=Q.length;j<C;j++)A(Q[j],b,H,Z,x)}function I(w){w.target.removeEventListener("dispose",I);for(const H in c){const Z=c[H],x=w.target.uuid;x in Z&&(Z[x].dispose(),delete Z[x])}}}function mp(i,e,t){const n=t.isWebGL2;function s(){let R=!1;const ae=new et;let N=null;const ne=new et(0,0,0,0);return{setMask:function(le){N!==le&&!R&&(i.colorMask(le,le,le,le),N=le)},setLocked:function(le){R=le},setClear:function(le,Ge,je,mt,It){It===!0&&(le*=mt,Ge*=mt,je*=mt),ae.set(le,Ge,je,mt),ne.equals(ae)===!1&&(i.clearColor(le,Ge,je,mt),ne.copy(ae))},reset:function(){R=!1,N=null,ne.set(-1,0,0,0)}}}function r(){let R=!1,ae=null,N=null,ne=null;return{setTest:function(le){le?de(i.DEPTH_TEST):Xe(i.DEPTH_TEST)},setMask:function(le){ae!==le&&!R&&(i.depthMask(le),ae=le)},setFunc:function(le){if(N!==le){switch(le){case Nl:i.depthFunc(i.NEVER);break;case Fl:i.depthFunc(i.ALWAYS);break;case Ol:i.depthFunc(i.LESS);break;case _s:i.depthFunc(i.LEQUAL);break;case Bl:i.depthFunc(i.EQUAL);break;case zl:i.depthFunc(i.GEQUAL);break;case Hl:i.depthFunc(i.GREATER);break;case Gl:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}N=le}},setLocked:function(le){R=le},setClear:function(le){ne!==le&&(i.clearDepth(le),ne=le)},reset:function(){R=!1,ae=null,N=null,ne=null}}}function o(){let R=!1,ae=null,N=null,ne=null,le=null,Ge=null,je=null,mt=null,It=null;return{setTest:function(Ke){R||(Ke?de(i.STENCIL_TEST):Xe(i.STENCIL_TEST))},setMask:function(Ke){ae!==Ke&&!R&&(i.stencilMask(Ke),ae=Ke)},setFunc:function(Ke,Mt,Vt){(N!==Ke||ne!==Mt||le!==Vt)&&(i.stencilFunc(Ke,Mt,Vt),N=Ke,ne=Mt,le=Vt)},setOp:function(Ke,Mt,Vt){(Ge!==Ke||je!==Mt||mt!==Vt)&&(i.stencilOp(Ke,Mt,Vt),Ge=Ke,je=Mt,mt=Vt)},setLocked:function(Ke){R=Ke},setClear:function(Ke){It!==Ke&&(i.clearStencil(Ke),It=Ke)},reset:function(){R=!1,ae=null,N=null,ne=null,le=null,Ge=null,je=null,mt=null,It=null}}}const a=new s,l=new r,c=new o,h=new WeakMap,d=new WeakMap;let p={},m={},g=new WeakMap,M=[],f=null,u=!1,E=null,v=null,A=null,I=null,w=null,b=null,H=null,Z=new we(0,0,0),x=0,T=!1,Q=null,j=null,C=null,q=null,G=null;const Y=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let k=!1,W=0;const te=i.getParameter(i.VERSION);te.indexOf("WebGL")!==-1?(W=parseFloat(/^WebGL (\d)/.exec(te)[1]),k=W>=1):te.indexOf("OpenGL ES")!==-1&&(W=parseFloat(/^OpenGL ES (\d)/.exec(te)[1]),k=W>=2);let se=null,ue={};const Le=i.getParameter(i.SCISSOR_BOX),B=i.getParameter(i.VIEWPORT),K=new et().fromArray(Le),he=new et().fromArray(B);function Ee(R,ae,N,ne){const le=new Uint8Array(4),Ge=i.createTexture();i.bindTexture(R,Ge),i.texParameteri(R,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(R,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let je=0;je<N;je++)n&&(R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY)?i.texImage3D(ae,0,i.RGBA,1,1,ne,0,i.RGBA,i.UNSIGNED_BYTE,le):i.texImage2D(ae+je,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,le);return Ge}const _e={};_e[i.TEXTURE_2D]=Ee(i.TEXTURE_2D,i.TEXTURE_2D,1),_e[i.TEXTURE_CUBE_MAP]=Ee(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(_e[i.TEXTURE_2D_ARRAY]=Ee(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),_e[i.TEXTURE_3D]=Ee(i.TEXTURE_3D,i.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),de(i.DEPTH_TEST),l.setFunc(_s),Fe(!1),ze(kr),de(i.CULL_FACE),Se(gn);function de(R){p[R]!==!0&&(i.enable(R),p[R]=!0)}function Xe(R){p[R]!==!1&&(i.disable(R),p[R]=!1)}function Te(R,ae){return m[R]!==ae?(i.bindFramebuffer(R,ae),m[R]=ae,n&&(R===i.DRAW_FRAMEBUFFER&&(m[i.FRAMEBUFFER]=ae),R===i.FRAMEBUFFER&&(m[i.DRAW_FRAMEBUFFER]=ae)),!0):!1}function D(R,ae){let N=M,ne=!1;if(R){N=g.get(ae),N===void 0&&(N=[],g.set(ae,N));const le=R.textures;if(N.length!==le.length||N[0]!==i.COLOR_ATTACHMENT0){for(let Ge=0,je=le.length;Ge<je;Ge++)N[Ge]=i.COLOR_ATTACHMENT0+Ge;N.length=le.length,ne=!0}}else N[0]!==i.BACK&&(N[0]=i.BACK,ne=!0);if(ne)if(t.isWebGL2)i.drawBuffers(N);else if(e.has("WEBGL_draw_buffers")===!0)e.get("WEBGL_draw_buffers").drawBuffersWEBGL(N);else throw new Error("THREE.WebGLState: Usage of gl.drawBuffers() require WebGL2 or WEBGL_draw_buffers extension")}function pt(R){return f!==R?(i.useProgram(R),f=R,!0):!1}const ve={[Nn]:i.FUNC_ADD,[Sl]:i.FUNC_SUBTRACT,[Ml]:i.FUNC_REVERSE_SUBTRACT};if(n)ve[qr]=i.MIN,ve[Yr]=i.MAX;else{const R=e.get("EXT_blend_minmax");R!==null&&(ve[qr]=R.MIN_EXT,ve[Yr]=R.MAX_EXT)}const Be={[yl]:i.ZERO,[El]:i.ONE,[Tl]:i.SRC_COLOR,[gr]:i.SRC_ALPHA,[Ll]:i.SRC_ALPHA_SATURATE,[Rl]:i.DST_COLOR,[Al]:i.DST_ALPHA,[bl]:i.ONE_MINUS_SRC_COLOR,[vr]:i.ONE_MINUS_SRC_ALPHA,[Cl]:i.ONE_MINUS_DST_COLOR,[wl]:i.ONE_MINUS_DST_ALPHA,[Pl]:i.CONSTANT_COLOR,[Il]:i.ONE_MINUS_CONSTANT_COLOR,[Dl]:i.CONSTANT_ALPHA,[Ul]:i.ONE_MINUS_CONSTANT_ALPHA};function Se(R,ae,N,ne,le,Ge,je,mt,It,Ke){if(R===gn){u===!0&&(Xe(i.BLEND),u=!1);return}if(u===!1&&(de(i.BLEND),u=!0),R!==xl){if(R!==E||Ke!==T){if((v!==Nn||w!==Nn)&&(i.blendEquation(i.FUNC_ADD),v=Nn,w=Nn),Ke)switch(R){case di:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Vr:i.blendFunc(i.ONE,i.ONE);break;case Wr:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Xr:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",R);break}else switch(R){case di:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Vr:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Wr:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Xr:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",R);break}A=null,I=null,b=null,H=null,Z.set(0,0,0),x=0,E=R,T=Ke}return}le=le||ae,Ge=Ge||N,je=je||ne,(ae!==v||le!==w)&&(i.blendEquationSeparate(ve[ae],ve[le]),v=ae,w=le),(N!==A||ne!==I||Ge!==b||je!==H)&&(i.blendFuncSeparate(Be[N],Be[ne],Be[Ge],Be[je]),A=N,I=ne,b=Ge,H=je),(mt.equals(Z)===!1||It!==x)&&(i.blendColor(mt.r,mt.g,mt.b,It),Z.copy(mt),x=It),E=R,T=!1}function Ve(R,ae){R.side===sn?Xe(i.CULL_FACE):de(i.CULL_FACE);let N=R.side===wt;ae&&(N=!N),Fe(N),R.blending===di&&R.transparent===!1?Se(gn):Se(R.blending,R.blendEquation,R.blendSrc,R.blendDst,R.blendEquationAlpha,R.blendSrcAlpha,R.blendDstAlpha,R.blendColor,R.blendAlpha,R.premultipliedAlpha),l.setFunc(R.depthFunc),l.setTest(R.depthTest),l.setMask(R.depthWrite),a.setMask(R.colorWrite);const ne=R.stencilWrite;c.setTest(ne),ne&&(c.setMask(R.stencilWriteMask),c.setFunc(R.stencilFunc,R.stencilRef,R.stencilFuncMask),c.setOp(R.stencilFail,R.stencilZFail,R.stencilZPass)),y(R.polygonOffset,R.polygonOffsetFactor,R.polygonOffsetUnits),R.alphaToCoverage===!0?de(i.SAMPLE_ALPHA_TO_COVERAGE):Xe(i.SAMPLE_ALPHA_TO_COVERAGE)}function Fe(R){Q!==R&&(R?i.frontFace(i.CW):i.frontFace(i.CCW),Q=R)}function ze(R){R!==gl?(de(i.CULL_FACE),R!==j&&(R===kr?i.cullFace(i.BACK):R===vl?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Xe(i.CULL_FACE),j=R}function nt(R){R!==C&&(k&&i.lineWidth(R),C=R)}function y(R,ae,N){R?(de(i.POLYGON_OFFSET_FILL),(q!==ae||G!==N)&&(i.polygonOffset(ae,N),q=ae,G=N)):Xe(i.POLYGON_OFFSET_FILL)}function _(R){R?de(i.SCISSOR_TEST):Xe(i.SCISSOR_TEST)}function z(R){R===void 0&&(R=i.TEXTURE0+Y-1),se!==R&&(i.activeTexture(R),se=R)}function X(R,ae,N){N===void 0&&(se===null?N=i.TEXTURE0+Y-1:N=se);let ne=ue[N];ne===void 0&&(ne={type:void 0,texture:void 0},ue[N]=ne),(ne.type!==R||ne.texture!==ae)&&(se!==N&&(i.activeTexture(N),se=N),i.bindTexture(R,ae||_e[R]),ne.type=R,ne.texture=ae)}function J(){const R=ue[se];R!==void 0&&R.type!==void 0&&(i.bindTexture(R.type,null),R.type=void 0,R.texture=void 0)}function $(){try{i.compressedTexImage2D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Pe(){try{i.compressedTexImage3D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Me(){try{i.texSubImage2D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function re(){try{i.texSubImage3D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function oe(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Ie(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function ee(){try{i.texStorage2D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function st(){try{i.texStorage3D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function He(){try{i.texImage2D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function ge(){try{i.texImage3D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function fe(R){K.equals(R)===!1&&(i.scissor(R.x,R.y,R.z,R.w),K.copy(R))}function pe(R){he.equals(R)===!1&&(i.viewport(R.x,R.y,R.z,R.w),he.copy(R))}function We(R,ae){let N=d.get(ae);N===void 0&&(N=new WeakMap,d.set(ae,N));let ne=N.get(R);ne===void 0&&(ne=i.getUniformBlockIndex(ae,R.name),N.set(R,ne))}function Re(R,ae){const ne=d.get(ae).get(R);h.get(ae)!==ne&&(i.uniformBlockBinding(ae,ne,R.__bindingPointIndex),h.set(ae,ne))}function Je(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),n===!0&&(i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),p={},se=null,ue={},m={},g=new WeakMap,M=[],f=null,u=!1,E=null,v=null,A=null,I=null,w=null,b=null,H=null,Z=new we(0,0,0),x=0,T=!1,Q=null,j=null,C=null,q=null,G=null,K.set(0,0,i.canvas.width,i.canvas.height),he.set(0,0,i.canvas.width,i.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:de,disable:Xe,bindFramebuffer:Te,drawBuffers:D,useProgram:pt,setBlending:Se,setMaterial:Ve,setFlipSided:Fe,setCullFace:ze,setLineWidth:nt,setPolygonOffset:y,setScissorTest:_,activeTexture:z,bindTexture:X,unbindTexture:J,compressedTexImage2D:$,compressedTexImage3D:Pe,texImage2D:He,texImage3D:ge,updateUBOMapping:We,uniformBlockBinding:Re,texStorage2D:ee,texStorage3D:st,texSubImage2D:Me,texSubImage3D:re,compressedTexSubImage2D:oe,compressedTexSubImage3D:Ie,scissor:fe,viewport:pe,reset:Je}}function _p(i,e,t,n,s,r,o){const a=s.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new be,d=new WeakMap;let p;const m=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(y,_){return g?new OffscreenCanvas(y,_):ys("canvas")}function f(y,_,z,X){let J=1;const $=nt(y);if(($.width>X||$.height>X)&&(J=X/Math.max($.width,$.height)),J<1||_===!0)if(typeof HTMLImageElement<"u"&&y instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&y instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&y instanceof ImageBitmap||typeof VideoFrame<"u"&&y instanceof VideoFrame){const Pe=_?br:Math.floor,Me=Pe(J*$.width),re=Pe(J*$.height);p===void 0&&(p=M(Me,re));const oe=z?M(Me,re):p;return oe.width=Me,oe.height=re,oe.getContext("2d").drawImage(y,0,0,Me,re),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+$.width+"x"+$.height+") to ("+Me+"x"+re+")."),oe}else return"data"in y&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+$.width+"x"+$.height+")."),y;return y}function u(y){const _=nt(y);return ya(_.width)&&ya(_.height)}function E(y){return a?!1:y.wrapS!==zt||y.wrapT!==zt||y.minFilter!==_t&&y.minFilter!==Tt}function v(y,_){return y.generateMipmaps&&_&&y.minFilter!==_t&&y.minFilter!==Tt}function A(y){i.generateMipmap(y)}function I(y,_,z,X,J=!1){if(a===!1)return _;if(y!==null){if(i[y]!==void 0)return i[y];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+y+"'")}let $=_;if(_===i.RED&&(z===i.FLOAT&&($=i.R32F),z===i.HALF_FLOAT&&($=i.R16F),z===i.UNSIGNED_BYTE&&($=i.R8)),_===i.RED_INTEGER&&(z===i.UNSIGNED_BYTE&&($=i.R8UI),z===i.UNSIGNED_SHORT&&($=i.R16UI),z===i.UNSIGNED_INT&&($=i.R32UI),z===i.BYTE&&($=i.R8I),z===i.SHORT&&($=i.R16I),z===i.INT&&($=i.R32I)),_===i.RG&&(z===i.FLOAT&&($=i.RG32F),z===i.HALF_FLOAT&&($=i.RG16F),z===i.UNSIGNED_BYTE&&($=i.RG8)),_===i.RG_INTEGER&&(z===i.UNSIGNED_BYTE&&($=i.RG8UI),z===i.UNSIGNED_SHORT&&($=i.RG16UI),z===i.UNSIGNED_INT&&($=i.RG32UI),z===i.BYTE&&($=i.RG8I),z===i.SHORT&&($=i.RG16I),z===i.INT&&($=i.RG32I)),_===i.RGBA){const Pe=J?gs:Ye.getTransfer(X);z===i.FLOAT&&($=i.RGBA32F),z===i.HALF_FLOAT&&($=i.RGBA16F),z===i.UNSIGNED_BYTE&&($=Pe===Ze?i.SRGB8_ALPHA8:i.RGBA8),z===i.UNSIGNED_SHORT_4_4_4_4&&($=i.RGBA4),z===i.UNSIGNED_SHORT_5_5_5_1&&($=i.RGB5_A1)}return($===i.R16F||$===i.R32F||$===i.RG16F||$===i.RG32F||$===i.RGBA16F||$===i.RGBA32F)&&e.get("EXT_color_buffer_float"),$}function w(y,_,z){return v(y,z)===!0||y.isFramebufferTexture&&y.minFilter!==_t&&y.minFilter!==Tt?Math.log2(Math.max(_.width,_.height))+1:y.mipmaps!==void 0&&y.mipmaps.length>0?y.mipmaps.length:y.isCompressedTexture&&Array.isArray(y.image)?_.mipmaps.length:1}function b(y){return y===_t||y===$r||y===Ti?i.NEAREST:i.LINEAR}function H(y){const _=y.target;_.removeEventListener("dispose",H),x(_),_.isVideoTexture&&d.delete(_)}function Z(y){const _=y.target;_.removeEventListener("dispose",Z),Q(_)}function x(y){const _=n.get(y);if(_.__webglInit===void 0)return;const z=y.source,X=m.get(z);if(X){const J=X[_.__cacheKey];J.usedTimes--,J.usedTimes===0&&T(y),Object.keys(X).length===0&&m.delete(z)}n.remove(y)}function T(y){const _=n.get(y);i.deleteTexture(_.__webglTexture);const z=y.source,X=m.get(z);delete X[_.__cacheKey],o.memory.textures--}function Q(y){const _=n.get(y);if(y.depthTexture&&y.depthTexture.dispose(),y.isWebGLCubeRenderTarget)for(let X=0;X<6;X++){if(Array.isArray(_.__webglFramebuffer[X]))for(let J=0;J<_.__webglFramebuffer[X].length;J++)i.deleteFramebuffer(_.__webglFramebuffer[X][J]);else i.deleteFramebuffer(_.__webglFramebuffer[X]);_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer[X])}else{if(Array.isArray(_.__webglFramebuffer))for(let X=0;X<_.__webglFramebuffer.length;X++)i.deleteFramebuffer(_.__webglFramebuffer[X]);else i.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&i.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let X=0;X<_.__webglColorRenderbuffer.length;X++)_.__webglColorRenderbuffer[X]&&i.deleteRenderbuffer(_.__webglColorRenderbuffer[X]);_.__webglDepthRenderbuffer&&i.deleteRenderbuffer(_.__webglDepthRenderbuffer)}const z=y.textures;for(let X=0,J=z.length;X<J;X++){const $=n.get(z[X]);$.__webglTexture&&(i.deleteTexture($.__webglTexture),o.memory.textures--),n.remove(z[X])}n.remove(y)}let j=0;function C(){j=0}function q(){const y=j;return y>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+y+" texture units while this GPU supports only "+s.maxTextures),j+=1,y}function G(y){const _=[];return _.push(y.wrapS),_.push(y.wrapT),_.push(y.wrapR||0),_.push(y.magFilter),_.push(y.minFilter),_.push(y.anisotropy),_.push(y.internalFormat),_.push(y.format),_.push(y.type),_.push(y.generateMipmaps),_.push(y.premultiplyAlpha),_.push(y.flipY),_.push(y.unpackAlignment),_.push(y.colorSpace),_.join()}function Y(y,_){const z=n.get(y);if(y.isVideoTexture&&Fe(y),y.isRenderTargetTexture===!1&&y.version>0&&z.__version!==y.version){const X=y.image;if(X===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(X.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{he(z,y,_);return}}t.bindTexture(i.TEXTURE_2D,z.__webglTexture,i.TEXTURE0+_)}function k(y,_){const z=n.get(y);if(y.version>0&&z.__version!==y.version){he(z,y,_);return}t.bindTexture(i.TEXTURE_2D_ARRAY,z.__webglTexture,i.TEXTURE0+_)}function W(y,_){const z=n.get(y);if(y.version>0&&z.__version!==y.version){he(z,y,_);return}t.bindTexture(i.TEXTURE_3D,z.__webglTexture,i.TEXTURE0+_)}function te(y,_){const z=n.get(y);if(y.version>0&&z.__version!==y.version){Ee(z,y,_);return}t.bindTexture(i.TEXTURE_CUBE_MAP,z.__webglTexture,i.TEXTURE0+_)}const se={[Mr]:i.REPEAT,[zt]:i.CLAMP_TO_EDGE,[yr]:i.MIRRORED_REPEAT},ue={[_t]:i.NEAREST,[$r]:i.NEAREST_MIPMAP_NEAREST,[Ti]:i.NEAREST_MIPMAP_LINEAR,[Tt]:i.LINEAR,[Ds]:i.LINEAR_MIPMAP_NEAREST,[On]:i.LINEAR_MIPMAP_LINEAR},Le={[ac]:i.NEVER,[dc]:i.ALWAYS,[oc]:i.LESS,[Bo]:i.LEQUAL,[lc]:i.EQUAL,[uc]:i.GEQUAL,[cc]:i.GREATER,[hc]:i.NOTEQUAL};function B(y,_,z){if(_.type===qt&&e.has("OES_texture_float_linear")===!1&&(_.magFilter===Tt||_.magFilter===Ds||_.magFilter===Ti||_.magFilter===On||_.minFilter===Tt||_.minFilter===Ds||_.minFilter===Ti||_.minFilter===On)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),z?(i.texParameteri(y,i.TEXTURE_WRAP_S,se[_.wrapS]),i.texParameteri(y,i.TEXTURE_WRAP_T,se[_.wrapT]),(y===i.TEXTURE_3D||y===i.TEXTURE_2D_ARRAY)&&i.texParameteri(y,i.TEXTURE_WRAP_R,se[_.wrapR]),i.texParameteri(y,i.TEXTURE_MAG_FILTER,ue[_.magFilter]),i.texParameteri(y,i.TEXTURE_MIN_FILTER,ue[_.minFilter])):(i.texParameteri(y,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(y,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),(y===i.TEXTURE_3D||y===i.TEXTURE_2D_ARRAY)&&i.texParameteri(y,i.TEXTURE_WRAP_R,i.CLAMP_TO_EDGE),(_.wrapS!==zt||_.wrapT!==zt)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(y,i.TEXTURE_MAG_FILTER,b(_.magFilter)),i.texParameteri(y,i.TEXTURE_MIN_FILTER,b(_.minFilter)),_.minFilter!==_t&&_.minFilter!==Tt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),_.compareFunction&&(i.texParameteri(y,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(y,i.TEXTURE_COMPARE_FUNC,Le[_.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===_t||_.minFilter!==Ti&&_.minFilter!==On||_.type===qt&&e.has("OES_texture_float_linear")===!1||a===!1&&_.type===Fi&&e.has("OES_texture_half_float_linear")===!1)return;if(_.anisotropy>1||n.get(_).__currentAnisotropy){const X=e.get("EXT_texture_filter_anisotropic");i.texParameterf(y,X.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,s.getMaxAnisotropy())),n.get(_).__currentAnisotropy=_.anisotropy}}}function K(y,_){let z=!1;y.__webglInit===void 0&&(y.__webglInit=!0,_.addEventListener("dispose",H));const X=_.source;let J=m.get(X);J===void 0&&(J={},m.set(X,J));const $=G(_);if($!==y.__cacheKey){J[$]===void 0&&(J[$]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,z=!0),J[$].usedTimes++;const Pe=J[y.__cacheKey];Pe!==void 0&&(J[y.__cacheKey].usedTimes--,Pe.usedTimes===0&&T(_)),y.__cacheKey=$,y.__webglTexture=J[$].texture}return z}function he(y,_,z){let X=i.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(X=i.TEXTURE_2D_ARRAY),_.isData3DTexture&&(X=i.TEXTURE_3D);const J=K(y,_),$=_.source;t.bindTexture(X,y.__webglTexture,i.TEXTURE0+z);const Pe=n.get($);if($.version!==Pe.__version||J===!0){t.activeTexture(i.TEXTURE0+z);const Me=Ye.getPrimaries(Ye.workingColorSpace),re=_.colorSpace===mn?null:Ye.getPrimaries(_.colorSpace),oe=_.colorSpace===mn||Me===re?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,oe);const Ie=E(_)&&u(_.image)===!1;let ee=f(_.image,Ie,!1,s.maxTextureSize);ee=ze(_,ee);const st=u(ee)||a,He=r.convert(_.format,_.colorSpace);let ge=r.convert(_.type),fe=I(_.internalFormat,He,ge,_.colorSpace,_.isVideoTexture);B(X,_,st);let pe;const We=_.mipmaps,Re=a&&_.isVideoTexture!==!0&&fe!==Fo,Je=Pe.__version===void 0||J===!0,R=$.dataReady,ae=w(_,ee,st);if(_.isDepthTexture)fe=i.DEPTH_COMPONENT,a?_.type===qt?fe=i.DEPTH_COMPONENT32F:_.type===_n?fe=i.DEPTH_COMPONENT24:_.type===Bn?fe=i.DEPTH24_STENCIL8:fe=i.DEPTH_COMPONENT16:_.type===qt&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),_.format===zn&&fe===i.DEPTH_COMPONENT&&_.type!==Cr&&_.type!==_n&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),_.type=_n,ge=r.convert(_.type)),_.format===gi&&fe===i.DEPTH_COMPONENT&&(fe=i.DEPTH_STENCIL,_.type!==Bn&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),_.type=Bn,ge=r.convert(_.type))),Je&&(Re?t.texStorage2D(i.TEXTURE_2D,1,fe,ee.width,ee.height):t.texImage2D(i.TEXTURE_2D,0,fe,ee.width,ee.height,0,He,ge,null));else if(_.isDataTexture)if(We.length>0&&st){Re&&Je&&t.texStorage2D(i.TEXTURE_2D,ae,fe,We[0].width,We[0].height);for(let N=0,ne=We.length;N<ne;N++)pe=We[N],Re?R&&t.texSubImage2D(i.TEXTURE_2D,N,0,0,pe.width,pe.height,He,ge,pe.data):t.texImage2D(i.TEXTURE_2D,N,fe,pe.width,pe.height,0,He,ge,pe.data);_.generateMipmaps=!1}else Re?(Je&&t.texStorage2D(i.TEXTURE_2D,ae,fe,ee.width,ee.height),R&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ee.width,ee.height,He,ge,ee.data)):t.texImage2D(i.TEXTURE_2D,0,fe,ee.width,ee.height,0,He,ge,ee.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){Re&&Je&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ae,fe,We[0].width,We[0].height,ee.depth);for(let N=0,ne=We.length;N<ne;N++)pe=We[N],_.format!==Ht?He!==null?Re?R&&t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,N,0,0,0,pe.width,pe.height,ee.depth,He,pe.data,0,0):t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,N,fe,pe.width,pe.height,ee.depth,0,pe.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Re?R&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,N,0,0,0,pe.width,pe.height,ee.depth,He,ge,pe.data):t.texImage3D(i.TEXTURE_2D_ARRAY,N,fe,pe.width,pe.height,ee.depth,0,He,ge,pe.data)}else{Re&&Je&&t.texStorage2D(i.TEXTURE_2D,ae,fe,We[0].width,We[0].height);for(let N=0,ne=We.length;N<ne;N++)pe=We[N],_.format!==Ht?He!==null?Re?R&&t.compressedTexSubImage2D(i.TEXTURE_2D,N,0,0,pe.width,pe.height,He,pe.data):t.compressedTexImage2D(i.TEXTURE_2D,N,fe,pe.width,pe.height,0,pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Re?R&&t.texSubImage2D(i.TEXTURE_2D,N,0,0,pe.width,pe.height,He,ge,pe.data):t.texImage2D(i.TEXTURE_2D,N,fe,pe.width,pe.height,0,He,ge,pe.data)}else if(_.isDataArrayTexture)Re?(Je&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ae,fe,ee.width,ee.height,ee.depth),R&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ee.width,ee.height,ee.depth,He,ge,ee.data)):t.texImage3D(i.TEXTURE_2D_ARRAY,0,fe,ee.width,ee.height,ee.depth,0,He,ge,ee.data);else if(_.isData3DTexture)Re?(Je&&t.texStorage3D(i.TEXTURE_3D,ae,fe,ee.width,ee.height,ee.depth),R&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ee.width,ee.height,ee.depth,He,ge,ee.data)):t.texImage3D(i.TEXTURE_3D,0,fe,ee.width,ee.height,ee.depth,0,He,ge,ee.data);else if(_.isFramebufferTexture){if(Je)if(Re)t.texStorage2D(i.TEXTURE_2D,ae,fe,ee.width,ee.height);else{let N=ee.width,ne=ee.height;for(let le=0;le<ae;le++)t.texImage2D(i.TEXTURE_2D,le,fe,N,ne,0,He,ge,null),N>>=1,ne>>=1}}else if(We.length>0&&st){if(Re&&Je){const N=nt(We[0]);t.texStorage2D(i.TEXTURE_2D,ae,fe,N.width,N.height)}for(let N=0,ne=We.length;N<ne;N++)pe=We[N],Re?R&&t.texSubImage2D(i.TEXTURE_2D,N,0,0,He,ge,pe):t.texImage2D(i.TEXTURE_2D,N,fe,He,ge,pe);_.generateMipmaps=!1}else if(Re){if(Je){const N=nt(ee);t.texStorage2D(i.TEXTURE_2D,ae,fe,N.width,N.height)}R&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,He,ge,ee)}else t.texImage2D(i.TEXTURE_2D,0,fe,He,ge,ee);v(_,st)&&A(X),Pe.__version=$.version,_.onUpdate&&_.onUpdate(_)}y.__version=_.version}function Ee(y,_,z){if(_.image.length!==6)return;const X=K(y,_),J=_.source;t.bindTexture(i.TEXTURE_CUBE_MAP,y.__webglTexture,i.TEXTURE0+z);const $=n.get(J);if(J.version!==$.__version||X===!0){t.activeTexture(i.TEXTURE0+z);const Pe=Ye.getPrimaries(Ye.workingColorSpace),Me=_.colorSpace===mn?null:Ye.getPrimaries(_.colorSpace),re=_.colorSpace===mn||Pe===Me?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,re);const oe=_.isCompressedTexture||_.image[0].isCompressedTexture,Ie=_.image[0]&&_.image[0].isDataTexture,ee=[];for(let N=0;N<6;N++)!oe&&!Ie?ee[N]=f(_.image[N],!1,!0,s.maxCubemapSize):ee[N]=Ie?_.image[N].image:_.image[N],ee[N]=ze(_,ee[N]);const st=ee[0],He=u(st)||a,ge=r.convert(_.format,_.colorSpace),fe=r.convert(_.type),pe=I(_.internalFormat,ge,fe,_.colorSpace),We=a&&_.isVideoTexture!==!0,Re=$.__version===void 0||X===!0,Je=J.dataReady;let R=w(_,st,He);B(i.TEXTURE_CUBE_MAP,_,He);let ae;if(oe){We&&Re&&t.texStorage2D(i.TEXTURE_CUBE_MAP,R,pe,st.width,st.height);for(let N=0;N<6;N++){ae=ee[N].mipmaps;for(let ne=0;ne<ae.length;ne++){const le=ae[ne];_.format!==Ht?ge!==null?We?Je&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+N,ne,0,0,le.width,le.height,ge,le.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+N,ne,pe,le.width,le.height,0,le.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):We?Je&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+N,ne,0,0,le.width,le.height,ge,fe,le.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+N,ne,pe,le.width,le.height,0,ge,fe,le.data)}}}else{if(ae=_.mipmaps,We&&Re){ae.length>0&&R++;const N=nt(ee[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,R,pe,N.width,N.height)}for(let N=0;N<6;N++)if(Ie){We?Je&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+N,0,0,0,ee[N].width,ee[N].height,ge,fe,ee[N].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+N,0,pe,ee[N].width,ee[N].height,0,ge,fe,ee[N].data);for(let ne=0;ne<ae.length;ne++){const Ge=ae[ne].image[N].image;We?Je&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+N,ne+1,0,0,Ge.width,Ge.height,ge,fe,Ge.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+N,ne+1,pe,Ge.width,Ge.height,0,ge,fe,Ge.data)}}else{We?Je&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+N,0,0,0,ge,fe,ee[N]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+N,0,pe,ge,fe,ee[N]);for(let ne=0;ne<ae.length;ne++){const le=ae[ne];We?Je&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+N,ne+1,0,0,ge,fe,le.image[N]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+N,ne+1,pe,ge,fe,le.image[N])}}}v(_,He)&&A(i.TEXTURE_CUBE_MAP),$.__version=J.version,_.onUpdate&&_.onUpdate(_)}y.__version=_.version}function _e(y,_,z,X,J,$){const Pe=r.convert(z.format,z.colorSpace),Me=r.convert(z.type),re=I(z.internalFormat,Pe,Me,z.colorSpace);if(!n.get(_).__hasExternalTextures){const Ie=Math.max(1,_.width>>$),ee=Math.max(1,_.height>>$);J===i.TEXTURE_3D||J===i.TEXTURE_2D_ARRAY?t.texImage3D(J,$,re,Ie,ee,_.depth,0,Pe,Me,null):t.texImage2D(J,$,re,Ie,ee,0,Pe,Me,null)}t.bindFramebuffer(i.FRAMEBUFFER,y),Ve(_)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,X,J,n.get(z).__webglTexture,0,Se(_)):(J===i.TEXTURE_2D||J>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,X,J,n.get(z).__webglTexture,$),t.bindFramebuffer(i.FRAMEBUFFER,null)}function de(y,_,z){if(i.bindRenderbuffer(i.RENDERBUFFER,y),_.depthBuffer&&!_.stencilBuffer){let X=a===!0?i.DEPTH_COMPONENT24:i.DEPTH_COMPONENT16;if(z||Ve(_)){const J=_.depthTexture;J&&J.isDepthTexture&&(J.type===qt?X=i.DEPTH_COMPONENT32F:J.type===_n&&(X=i.DEPTH_COMPONENT24));const $=Se(_);Ve(_)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,$,X,_.width,_.height):i.renderbufferStorageMultisample(i.RENDERBUFFER,$,X,_.width,_.height)}else i.renderbufferStorage(i.RENDERBUFFER,X,_.width,_.height);i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.RENDERBUFFER,y)}else if(_.depthBuffer&&_.stencilBuffer){const X=Se(_);z&&Ve(_)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,X,i.DEPTH24_STENCIL8,_.width,_.height):Ve(_)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,X,i.DEPTH24_STENCIL8,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_STENCIL,_.width,_.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.RENDERBUFFER,y)}else{const X=_.textures;for(let J=0;J<X.length;J++){const $=X[J],Pe=r.convert($.format,$.colorSpace),Me=r.convert($.type),re=I($.internalFormat,Pe,Me,$.colorSpace),oe=Se(_);z&&Ve(_)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,oe,re,_.width,_.height):Ve(_)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,oe,re,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,re,_.width,_.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Xe(y,_){if(_&&_.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,y),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(_.depthTexture).__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),Y(_.depthTexture,0);const X=n.get(_.depthTexture).__webglTexture,J=Se(_);if(_.depthTexture.format===zn)Ve(_)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,X,0,J):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,X,0);else if(_.depthTexture.format===gi)Ve(_)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,X,0,J):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,X,0);else throw new Error("Unknown depthTexture format")}function Te(y){const _=n.get(y),z=y.isWebGLCubeRenderTarget===!0;if(y.depthTexture&&!_.__autoAllocateDepthBuffer){if(z)throw new Error("target.depthTexture not supported in Cube render targets");Xe(_.__webglFramebuffer,y)}else if(z){_.__webglDepthbuffer=[];for(let X=0;X<6;X++)t.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[X]),_.__webglDepthbuffer[X]=i.createRenderbuffer(),de(_.__webglDepthbuffer[X],y,!1)}else t.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer=i.createRenderbuffer(),de(_.__webglDepthbuffer,y,!1);t.bindFramebuffer(i.FRAMEBUFFER,null)}function D(y,_,z){const X=n.get(y);_!==void 0&&_e(X.__webglFramebuffer,y,y.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),z!==void 0&&Te(y)}function pt(y){const _=y.texture,z=n.get(y),X=n.get(_);y.addEventListener("dispose",Z);const J=y.textures,$=y.isWebGLCubeRenderTarget===!0,Pe=J.length>1,Me=u(y)||a;if(Pe||(X.__webglTexture===void 0&&(X.__webglTexture=i.createTexture()),X.__version=_.version,o.memory.textures++),$){z.__webglFramebuffer=[];for(let re=0;re<6;re++)if(a&&_.mipmaps&&_.mipmaps.length>0){z.__webglFramebuffer[re]=[];for(let oe=0;oe<_.mipmaps.length;oe++)z.__webglFramebuffer[re][oe]=i.createFramebuffer()}else z.__webglFramebuffer[re]=i.createFramebuffer()}else{if(a&&_.mipmaps&&_.mipmaps.length>0){z.__webglFramebuffer=[];for(let re=0;re<_.mipmaps.length;re++)z.__webglFramebuffer[re]=i.createFramebuffer()}else z.__webglFramebuffer=i.createFramebuffer();if(Pe)if(s.drawBuffers)for(let re=0,oe=J.length;re<oe;re++){const Ie=n.get(J[re]);Ie.__webglTexture===void 0&&(Ie.__webglTexture=i.createTexture(),o.memory.textures++)}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&y.samples>0&&Ve(y)===!1){z.__webglMultisampledFramebuffer=i.createFramebuffer(),z.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let re=0;re<J.length;re++){const oe=J[re];z.__webglColorRenderbuffer[re]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,z.__webglColorRenderbuffer[re]);const Ie=r.convert(oe.format,oe.colorSpace),ee=r.convert(oe.type),st=I(oe.internalFormat,Ie,ee,oe.colorSpace,y.isXRRenderTarget===!0),He=Se(y);i.renderbufferStorageMultisample(i.RENDERBUFFER,He,st,y.width,y.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+re,i.RENDERBUFFER,z.__webglColorRenderbuffer[re])}i.bindRenderbuffer(i.RENDERBUFFER,null),y.depthBuffer&&(z.__webglDepthRenderbuffer=i.createRenderbuffer(),de(z.__webglDepthRenderbuffer,y,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if($){t.bindTexture(i.TEXTURE_CUBE_MAP,X.__webglTexture),B(i.TEXTURE_CUBE_MAP,_,Me);for(let re=0;re<6;re++)if(a&&_.mipmaps&&_.mipmaps.length>0)for(let oe=0;oe<_.mipmaps.length;oe++)_e(z.__webglFramebuffer[re][oe],y,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+re,oe);else _e(z.__webglFramebuffer[re],y,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+re,0);v(_,Me)&&A(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Pe){for(let re=0,oe=J.length;re<oe;re++){const Ie=J[re],ee=n.get(Ie);t.bindTexture(i.TEXTURE_2D,ee.__webglTexture),B(i.TEXTURE_2D,Ie,Me),_e(z.__webglFramebuffer,y,Ie,i.COLOR_ATTACHMENT0+re,i.TEXTURE_2D,0),v(Ie,Me)&&A(i.TEXTURE_2D)}t.unbindTexture()}else{let re=i.TEXTURE_2D;if((y.isWebGL3DRenderTarget||y.isWebGLArrayRenderTarget)&&(a?re=y.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(re,X.__webglTexture),B(re,_,Me),a&&_.mipmaps&&_.mipmaps.length>0)for(let oe=0;oe<_.mipmaps.length;oe++)_e(z.__webglFramebuffer[oe],y,_,i.COLOR_ATTACHMENT0,re,oe);else _e(z.__webglFramebuffer,y,_,i.COLOR_ATTACHMENT0,re,0);v(_,Me)&&A(re),t.unbindTexture()}y.depthBuffer&&Te(y)}function ve(y){const _=u(y)||a,z=y.textures;for(let X=0,J=z.length;X<J;X++){const $=z[X];if(v($,_)){const Pe=y.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,Me=n.get($).__webglTexture;t.bindTexture(Pe,Me),A(Pe),t.unbindTexture()}}}function Be(y){if(a&&y.samples>0&&Ve(y)===!1){const _=y.textures,z=y.width,X=y.height;let J=i.COLOR_BUFFER_BIT;const $=[],Pe=y.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Me=n.get(y),re=_.length>1;if(re)for(let oe=0;oe<_.length;oe++)t.bindFramebuffer(i.FRAMEBUFFER,Me.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+oe,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Me.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+oe,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Me.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Me.__webglFramebuffer);for(let oe=0;oe<_.length;oe++){$.push(i.COLOR_ATTACHMENT0+oe),y.depthBuffer&&$.push(Pe);const Ie=Me.__ignoreDepthValues!==void 0?Me.__ignoreDepthValues:!1;if(Ie===!1&&(y.depthBuffer&&(J|=i.DEPTH_BUFFER_BIT),y.stencilBuffer&&(J|=i.STENCIL_BUFFER_BIT)),re&&i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Me.__webglColorRenderbuffer[oe]),Ie===!0&&(i.invalidateFramebuffer(i.READ_FRAMEBUFFER,[Pe]),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[Pe])),re){const ee=n.get(_[oe]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,ee,0)}i.blitFramebuffer(0,0,z,X,0,0,z,X,J,i.NEAREST),c&&i.invalidateFramebuffer(i.READ_FRAMEBUFFER,$)}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),re)for(let oe=0;oe<_.length;oe++){t.bindFramebuffer(i.FRAMEBUFFER,Me.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+oe,i.RENDERBUFFER,Me.__webglColorRenderbuffer[oe]);const Ie=n.get(_[oe]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Me.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+oe,i.TEXTURE_2D,Ie,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Me.__webglMultisampledFramebuffer)}}function Se(y){return Math.min(s.maxSamples,y.samples)}function Ve(y){const _=n.get(y);return a&&y.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function Fe(y){const _=o.render.frame;d.get(y)!==_&&(d.set(y,_),y.update())}function ze(y,_){const z=y.colorSpace,X=y.format,J=y.type;return y.isCompressedTexture===!0||y.isVideoTexture===!0||y.format===Tr||z!==En&&z!==mn&&(Ye.getTransfer(z)===Ze?a===!1?e.has("EXT_sRGB")===!0&&X===Ht?(y.format=Tr,y.minFilter=Tt,y.generateMipmaps=!1):_=Go.sRGBToLinear(_):(X!==Ht||J!==xn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",z)),_}function nt(y){return typeof HTMLImageElement<"u"&&y instanceof HTMLImageElement?(h.width=y.naturalWidth||y.width,h.height=y.naturalHeight||y.height):typeof VideoFrame<"u"&&y instanceof VideoFrame?(h.width=y.displayWidth,h.height=y.displayHeight):(h.width=y.width,h.height=y.height),h}this.allocateTextureUnit=q,this.resetTextureUnits=C,this.setTexture2D=Y,this.setTexture2DArray=k,this.setTexture3D=W,this.setTextureCube=te,this.rebindTextures=D,this.setupRenderTarget=pt,this.updateRenderTargetMipmap=ve,this.updateMultisampleRenderTarget=Be,this.setupDepthRenderbuffer=Te,this.setupFrameBufferTexture=_e,this.useMultisampledRTT=Ve}function gp(i,e,t){const n=t.isWebGL2;function s(r,o=mn){let a;const l=Ye.getTransfer(o);if(r===xn)return i.UNSIGNED_BYTE;if(r===Lo)return i.UNSIGNED_SHORT_4_4_4_4;if(r===Po)return i.UNSIGNED_SHORT_5_5_5_1;if(r===Kl)return i.BYTE;if(r===Zl)return i.SHORT;if(r===Cr)return i.UNSIGNED_SHORT;if(r===Co)return i.INT;if(r===_n)return i.UNSIGNED_INT;if(r===qt)return i.FLOAT;if(r===Fi)return n?i.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(r===Jl)return i.ALPHA;if(r===Ht)return i.RGBA;if(r===Ql)return i.LUMINANCE;if(r===ec)return i.LUMINANCE_ALPHA;if(r===zn)return i.DEPTH_COMPONENT;if(r===gi)return i.DEPTH_STENCIL;if(r===Tr)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(r===Io)return i.RED;if(r===Do)return i.RED_INTEGER;if(r===tc)return i.RG;if(r===Uo)return i.RG_INTEGER;if(r===No)return i.RGBA_INTEGER;if(r===Us||r===Ns||r===Fs||r===Os)if(l===Ze)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(r===Us)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Ns)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Fs)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Os)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(r===Us)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Ns)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Fs)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Os)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===jr||r===Kr||r===Zr||r===Jr)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(r===jr)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Kr)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Zr)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Jr)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Fo)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===Qr||r===ea)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(r===Qr)return l===Ze?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(r===ea)return l===Ze?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===ta||r===na||r===ia||r===sa||r===ra||r===aa||r===oa||r===la||r===ca||r===ha||r===ua||r===da||r===fa||r===pa)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(r===ta)return l===Ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===na)return l===Ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===ia)return l===Ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===sa)return l===Ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===ra)return l===Ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===aa)return l===Ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===oa)return l===Ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===la)return l===Ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===ca)return l===Ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===ha)return l===Ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===ua)return l===Ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===da)return l===Ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===fa)return l===Ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===pa)return l===Ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Bs||r===ma||r===_a)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(r===Bs)return l===Ze?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===ma)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===_a)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===nc||r===ga||r===va||r===xa)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(r===Bs)return a.COMPRESSED_RED_RGTC1_EXT;if(r===ga)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===va)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===xa)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Bn?n?i.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):i[r]!==void 0?i[r]:null}return{convert:s}}class vp extends At{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class os extends ct{constructor(){super(),this.isGroup=!0,this.type="Group"}}const xp={type:"move"};class ur{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new os,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new os,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new os,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const M of e.hand.values()){const f=t.getJointPose(M,n),u=this._getHandJoint(c,M);f!==null&&(u.matrix.fromArray(f.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=f.radius),u.visible=f!==null}const h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],p=h.position.distanceTo(d.position),m=.02,g=.005;c.inputState.pinching&&p>m+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&p<=m-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(xp)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new os;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const Sp=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Mp=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepthEXT = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepthEXT = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class yp{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const s=new St,r=e.properties.get(s);r.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}render(e,t){if(this.texture!==null){if(this.mesh===null){const n=t.cameras[0].viewport,s=new yn({extensions:{fragDepth:!0},vertexShader:Sp,fragmentShader:Mp,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new ot(new rn(20,20),s)}e.render(this.mesh,t)}}reset(){this.texture=null,this.mesh=null}}class Ep extends Si{constructor(e,t){super();const n=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,d=null,p=null,m=null,g=null;const M=new yp,f=t.getContextAttributes();let u=null,E=null;const v=[],A=[],I=new be;let w=null;const b=new At;b.layers.enable(1),b.viewport=new et;const H=new At;H.layers.enable(2),H.viewport=new et;const Z=[b,H],x=new vp;x.layers.enable(1),x.layers.enable(2);let T=null,Q=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(B){let K=v[B];return K===void 0&&(K=new ur,v[B]=K),K.getTargetRaySpace()},this.getControllerGrip=function(B){let K=v[B];return K===void 0&&(K=new ur,v[B]=K),K.getGripSpace()},this.getHand=function(B){let K=v[B];return K===void 0&&(K=new ur,v[B]=K),K.getHandSpace()};function j(B){const K=A.indexOf(B.inputSource);if(K===-1)return;const he=v[K];he!==void 0&&(he.update(B.inputSource,B.frame,c||o),he.dispatchEvent({type:B.type,data:B.inputSource}))}function C(){s.removeEventListener("select",j),s.removeEventListener("selectstart",j),s.removeEventListener("selectend",j),s.removeEventListener("squeeze",j),s.removeEventListener("squeezestart",j),s.removeEventListener("squeezeend",j),s.removeEventListener("end",C),s.removeEventListener("inputsourceschange",q);for(let B=0;B<v.length;B++){const K=A[B];K!==null&&(A[B]=null,v[B].disconnect(K))}T=null,Q=null,M.reset(),e.setRenderTarget(u),m=null,p=null,d=null,s=null,E=null,Le.stop(),n.isPresenting=!1,e.setPixelRatio(w),e.setSize(I.width,I.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(B){r=B,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(B){a=B,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(B){c=B},this.getBaseLayer=function(){return p!==null?p:m},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(B){if(s=B,s!==null){if(u=e.getRenderTarget(),s.addEventListener("select",j),s.addEventListener("selectstart",j),s.addEventListener("selectend",j),s.addEventListener("squeeze",j),s.addEventListener("squeezestart",j),s.addEventListener("squeezeend",j),s.addEventListener("end",C),s.addEventListener("inputsourceschange",q),f.xrCompatible!==!0&&await t.makeXRCompatible(),w=e.getPixelRatio(),e.getSize(I),s.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const K={antialias:s.renderState.layers===void 0?f.antialias:!0,alpha:!0,depth:f.depth,stencil:f.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(s,t,K),s.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),E=new Hn(m.framebufferWidth,m.framebufferHeight,{format:Ht,type:xn,colorSpace:e.outputColorSpace,stencilBuffer:f.stencil})}else{let K=null,he=null,Ee=null;f.depth&&(Ee=f.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,K=f.stencil?gi:zn,he=f.stencil?Bn:_n);const _e={colorFormat:t.RGBA8,depthFormat:Ee,scaleFactor:r};d=new XRWebGLBinding(s,t),p=d.createProjectionLayer(_e),s.updateRenderState({layers:[p]}),e.setPixelRatio(1),e.setSize(p.textureWidth,p.textureHeight,!1),E=new Hn(p.textureWidth,p.textureHeight,{format:Ht,type:xn,depthTexture:new Qo(p.textureWidth,p.textureHeight,he,void 0,void 0,void 0,void 0,void 0,void 0,K),stencilBuffer:f.stencil,colorSpace:e.outputColorSpace,samples:f.antialias?4:0});const de=e.properties.get(E);de.__ignoreDepthValues=p.ignoreDepthValues}E.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),Le.setContext(s),Le.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function q(B){for(let K=0;K<B.removed.length;K++){const he=B.removed[K],Ee=A.indexOf(he);Ee>=0&&(A[Ee]=null,v[Ee].disconnect(he))}for(let K=0;K<B.added.length;K++){const he=B.added[K];let Ee=A.indexOf(he);if(Ee===-1){for(let de=0;de<v.length;de++)if(de>=A.length){A.push(he),Ee=de;break}else if(A[de]===null){A[de]=he,Ee=de;break}if(Ee===-1)break}const _e=v[Ee];_e&&_e.connect(he)}}const G=new L,Y=new L;function k(B,K,he){G.setFromMatrixPosition(K.matrixWorld),Y.setFromMatrixPosition(he.matrixWorld);const Ee=G.distanceTo(Y),_e=K.projectionMatrix.elements,de=he.projectionMatrix.elements,Xe=_e[14]/(_e[10]-1),Te=_e[14]/(_e[10]+1),D=(_e[9]+1)/_e[5],pt=(_e[9]-1)/_e[5],ve=(_e[8]-1)/_e[0],Be=(de[8]+1)/de[0],Se=Xe*ve,Ve=Xe*Be,Fe=Ee/(-ve+Be),ze=Fe*-ve;K.matrixWorld.decompose(B.position,B.quaternion,B.scale),B.translateX(ze),B.translateZ(Fe),B.matrixWorld.compose(B.position,B.quaternion,B.scale),B.matrixWorldInverse.copy(B.matrixWorld).invert();const nt=Xe+Fe,y=Te+Fe,_=Se-ze,z=Ve+(Ee-ze),X=D*Te/y*nt,J=pt*Te/y*nt;B.projectionMatrix.makePerspective(_,z,X,J,nt,y),B.projectionMatrixInverse.copy(B.projectionMatrix).invert()}function W(B,K){K===null?B.matrixWorld.copy(B.matrix):B.matrixWorld.multiplyMatrices(K.matrixWorld,B.matrix),B.matrixWorldInverse.copy(B.matrixWorld).invert()}this.updateCamera=function(B){if(s===null)return;M.texture!==null&&(B.near=M.depthNear,B.far=M.depthFar),x.near=H.near=b.near=B.near,x.far=H.far=b.far=B.far,(T!==x.near||Q!==x.far)&&(s.updateRenderState({depthNear:x.near,depthFar:x.far}),T=x.near,Q=x.far,b.near=T,b.far=Q,H.near=T,H.far=Q,b.updateProjectionMatrix(),H.updateProjectionMatrix(),B.updateProjectionMatrix());const K=B.parent,he=x.cameras;W(x,K);for(let Ee=0;Ee<he.length;Ee++)W(he[Ee],K);he.length===2?k(x,b,H):x.projectionMatrix.copy(b.projectionMatrix),te(B,x,K)};function te(B,K,he){he===null?B.matrix.copy(K.matrixWorld):(B.matrix.copy(he.matrixWorld),B.matrix.invert(),B.matrix.multiply(K.matrixWorld)),B.matrix.decompose(B.position,B.quaternion,B.scale),B.updateMatrixWorld(!0),B.projectionMatrix.copy(K.projectionMatrix),B.projectionMatrixInverse.copy(K.projectionMatrixInverse),B.isPerspectiveCamera&&(B.fov=Ms*2*Math.atan(1/B.projectionMatrix.elements[5]),B.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(p===null&&m===null))return l},this.setFoveation=function(B){l=B,p!==null&&(p.fixedFoveation=B),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=B)},this.hasDepthSensing=function(){return M.texture!==null};let se=null;function ue(B,K){if(h=K.getViewerPose(c||o),g=K,h!==null){const he=h.views;m!==null&&(e.setRenderTargetFramebuffer(E,m.framebuffer),e.setRenderTarget(E));let Ee=!1;he.length!==x.cameras.length&&(x.cameras.length=0,Ee=!0);for(let de=0;de<he.length;de++){const Xe=he[de];let Te=null;if(m!==null)Te=m.getViewport(Xe);else{const pt=d.getViewSubImage(p,Xe);Te=pt.viewport,de===0&&(e.setRenderTargetTextures(E,pt.colorTexture,p.ignoreDepthValues?void 0:pt.depthStencilTexture),e.setRenderTarget(E))}let D=Z[de];D===void 0&&(D=new At,D.layers.enable(de),D.viewport=new et,Z[de]=D),D.matrix.fromArray(Xe.transform.matrix),D.matrix.decompose(D.position,D.quaternion,D.scale),D.projectionMatrix.fromArray(Xe.projectionMatrix),D.projectionMatrixInverse.copy(D.projectionMatrix).invert(),D.viewport.set(Te.x,Te.y,Te.width,Te.height),de===0&&(x.matrix.copy(D.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),Ee===!0&&x.cameras.push(D)}const _e=s.enabledFeatures;if(_e&&_e.includes("depth-sensing")){const de=d.getDepthInformation(he[0]);de&&de.isValid&&de.texture&&M.init(e,de,s.renderState)}}for(let he=0;he<v.length;he++){const Ee=A[he],_e=v[he];Ee!==null&&_e!==void 0&&_e.update(Ee,K,c||o)}M.render(e,x),se&&se(B,K),K.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:K}),g=null}const Le=new Jo;Le.setAnimationLoop(ue),this.setAnimationLoop=function(B){se=B},this.dispose=function(){}}}const Pn=new jt,Tp=new $e;function bp(i,e){function t(f,u){f.matrixAutoUpdate===!0&&f.updateMatrix(),u.value.copy(f.matrix)}function n(f,u){u.color.getRGB(f.fogColor.value,jo(i)),u.isFog?(f.fogNear.value=u.near,f.fogFar.value=u.far):u.isFogExp2&&(f.fogDensity.value=u.density)}function s(f,u,E,v,A){u.isMeshBasicMaterial||u.isMeshLambertMaterial?r(f,u):u.isMeshToonMaterial?(r(f,u),d(f,u)):u.isMeshPhongMaterial?(r(f,u),h(f,u)):u.isMeshStandardMaterial?(r(f,u),p(f,u),u.isMeshPhysicalMaterial&&m(f,u,A)):u.isMeshMatcapMaterial?(r(f,u),g(f,u)):u.isMeshDepthMaterial?r(f,u):u.isMeshDistanceMaterial?(r(f,u),M(f,u)):u.isMeshNormalMaterial?r(f,u):u.isLineBasicMaterial?(o(f,u),u.isLineDashedMaterial&&a(f,u)):u.isPointsMaterial?l(f,u,E,v):u.isSpriteMaterial?c(f,u):u.isShadowMaterial?(f.color.value.copy(u.color),f.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function r(f,u){f.opacity.value=u.opacity,u.color&&f.diffuse.value.copy(u.color),u.emissive&&f.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(f.map.value=u.map,t(u.map,f.mapTransform)),u.alphaMap&&(f.alphaMap.value=u.alphaMap,t(u.alphaMap,f.alphaMapTransform)),u.bumpMap&&(f.bumpMap.value=u.bumpMap,t(u.bumpMap,f.bumpMapTransform),f.bumpScale.value=u.bumpScale,u.side===wt&&(f.bumpScale.value*=-1)),u.normalMap&&(f.normalMap.value=u.normalMap,t(u.normalMap,f.normalMapTransform),f.normalScale.value.copy(u.normalScale),u.side===wt&&f.normalScale.value.negate()),u.displacementMap&&(f.displacementMap.value=u.displacementMap,t(u.displacementMap,f.displacementMapTransform),f.displacementScale.value=u.displacementScale,f.displacementBias.value=u.displacementBias),u.emissiveMap&&(f.emissiveMap.value=u.emissiveMap,t(u.emissiveMap,f.emissiveMapTransform)),u.specularMap&&(f.specularMap.value=u.specularMap,t(u.specularMap,f.specularMapTransform)),u.alphaTest>0&&(f.alphaTest.value=u.alphaTest);const E=e.get(u),v=E.envMap,A=E.envMapRotation;if(v&&(f.envMap.value=v,Pn.copy(A),Pn.x*=-1,Pn.y*=-1,Pn.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(Pn.y*=-1,Pn.z*=-1),f.envMapRotation.value.setFromMatrix4(Tp.makeRotationFromEuler(Pn)),f.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,f.reflectivity.value=u.reflectivity,f.ior.value=u.ior,f.refractionRatio.value=u.refractionRatio),u.lightMap){f.lightMap.value=u.lightMap;const I=i._useLegacyLights===!0?Math.PI:1;f.lightMapIntensity.value=u.lightMapIntensity*I,t(u.lightMap,f.lightMapTransform)}u.aoMap&&(f.aoMap.value=u.aoMap,f.aoMapIntensity.value=u.aoMapIntensity,t(u.aoMap,f.aoMapTransform))}function o(f,u){f.diffuse.value.copy(u.color),f.opacity.value=u.opacity,u.map&&(f.map.value=u.map,t(u.map,f.mapTransform))}function a(f,u){f.dashSize.value=u.dashSize,f.totalSize.value=u.dashSize+u.gapSize,f.scale.value=u.scale}function l(f,u,E,v){f.diffuse.value.copy(u.color),f.opacity.value=u.opacity,f.size.value=u.size*E,f.scale.value=v*.5,u.map&&(f.map.value=u.map,t(u.map,f.uvTransform)),u.alphaMap&&(f.alphaMap.value=u.alphaMap,t(u.alphaMap,f.alphaMapTransform)),u.alphaTest>0&&(f.alphaTest.value=u.alphaTest)}function c(f,u){f.diffuse.value.copy(u.color),f.opacity.value=u.opacity,f.rotation.value=u.rotation,u.map&&(f.map.value=u.map,t(u.map,f.mapTransform)),u.alphaMap&&(f.alphaMap.value=u.alphaMap,t(u.alphaMap,f.alphaMapTransform)),u.alphaTest>0&&(f.alphaTest.value=u.alphaTest)}function h(f,u){f.specular.value.copy(u.specular),f.shininess.value=Math.max(u.shininess,1e-4)}function d(f,u){u.gradientMap&&(f.gradientMap.value=u.gradientMap)}function p(f,u){f.metalness.value=u.metalness,u.metalnessMap&&(f.metalnessMap.value=u.metalnessMap,t(u.metalnessMap,f.metalnessMapTransform)),f.roughness.value=u.roughness,u.roughnessMap&&(f.roughnessMap.value=u.roughnessMap,t(u.roughnessMap,f.roughnessMapTransform)),e.get(u).envMap&&(f.envMapIntensity.value=u.envMapIntensity)}function m(f,u,E){f.ior.value=u.ior,u.sheen>0&&(f.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),f.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(f.sheenColorMap.value=u.sheenColorMap,t(u.sheenColorMap,f.sheenColorMapTransform)),u.sheenRoughnessMap&&(f.sheenRoughnessMap.value=u.sheenRoughnessMap,t(u.sheenRoughnessMap,f.sheenRoughnessMapTransform))),u.clearcoat>0&&(f.clearcoat.value=u.clearcoat,f.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(f.clearcoatMap.value=u.clearcoatMap,t(u.clearcoatMap,f.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(f.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,t(u.clearcoatRoughnessMap,f.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(f.clearcoatNormalMap.value=u.clearcoatNormalMap,t(u.clearcoatNormalMap,f.clearcoatNormalMapTransform),f.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===wt&&f.clearcoatNormalScale.value.negate())),u.iridescence>0&&(f.iridescence.value=u.iridescence,f.iridescenceIOR.value=u.iridescenceIOR,f.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],f.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(f.iridescenceMap.value=u.iridescenceMap,t(u.iridescenceMap,f.iridescenceMapTransform)),u.iridescenceThicknessMap&&(f.iridescenceThicknessMap.value=u.iridescenceThicknessMap,t(u.iridescenceThicknessMap,f.iridescenceThicknessMapTransform))),u.transmission>0&&(f.transmission.value=u.transmission,f.transmissionSamplerMap.value=E.texture,f.transmissionSamplerSize.value.set(E.width,E.height),u.transmissionMap&&(f.transmissionMap.value=u.transmissionMap,t(u.transmissionMap,f.transmissionMapTransform)),f.thickness.value=u.thickness,u.thicknessMap&&(f.thicknessMap.value=u.thicknessMap,t(u.thicknessMap,f.thicknessMapTransform)),f.attenuationDistance.value=u.attenuationDistance,f.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(f.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(f.anisotropyMap.value=u.anisotropyMap,t(u.anisotropyMap,f.anisotropyMapTransform))),f.specularIntensity.value=u.specularIntensity,f.specularColor.value.copy(u.specularColor),u.specularColorMap&&(f.specularColorMap.value=u.specularColorMap,t(u.specularColorMap,f.specularColorMapTransform)),u.specularIntensityMap&&(f.specularIntensityMap.value=u.specularIntensityMap,t(u.specularIntensityMap,f.specularIntensityMapTransform))}function g(f,u){u.matcap&&(f.matcap.value=u.matcap)}function M(f,u){const E=e.get(u).light;f.referencePosition.value.setFromMatrixPosition(E.matrixWorld),f.nearDistance.value=E.shadow.camera.near,f.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Ap(i,e,t,n){let s={},r={},o=[];const a=t.isWebGL2?i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(E,v){const A=v.program;n.uniformBlockBinding(E,A)}function c(E,v){let A=s[E.id];A===void 0&&(g(E),A=h(E),s[E.id]=A,E.addEventListener("dispose",f));const I=v.program;n.updateUBOMapping(E,I);const w=e.render.frame;r[E.id]!==w&&(p(E),r[E.id]=w)}function h(E){const v=d();E.__bindingPointIndex=v;const A=i.createBuffer(),I=E.__size,w=E.usage;return i.bindBuffer(i.UNIFORM_BUFFER,A),i.bufferData(i.UNIFORM_BUFFER,I,w),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,v,A),A}function d(){for(let E=0;E<a;E++)if(o.indexOf(E)===-1)return o.push(E),E;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function p(E){const v=s[E.id],A=E.uniforms,I=E.__cache;i.bindBuffer(i.UNIFORM_BUFFER,v);for(let w=0,b=A.length;w<b;w++){const H=Array.isArray(A[w])?A[w]:[A[w]];for(let Z=0,x=H.length;Z<x;Z++){const T=H[Z];if(m(T,w,Z,I)===!0){const Q=T.__offset,j=Array.isArray(T.value)?T.value:[T.value];let C=0;for(let q=0;q<j.length;q++){const G=j[q],Y=M(G);typeof G=="number"||typeof G=="boolean"?(T.__data[0]=G,i.bufferSubData(i.UNIFORM_BUFFER,Q+C,T.__data)):G.isMatrix3?(T.__data[0]=G.elements[0],T.__data[1]=G.elements[1],T.__data[2]=G.elements[2],T.__data[3]=0,T.__data[4]=G.elements[3],T.__data[5]=G.elements[4],T.__data[6]=G.elements[5],T.__data[7]=0,T.__data[8]=G.elements[6],T.__data[9]=G.elements[7],T.__data[10]=G.elements[8],T.__data[11]=0):(G.toArray(T.__data,C),C+=Y.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,Q,T.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function m(E,v,A,I){const w=E.value,b=v+"_"+A;if(I[b]===void 0)return typeof w=="number"||typeof w=="boolean"?I[b]=w:I[b]=w.clone(),!0;{const H=I[b];if(typeof w=="number"||typeof w=="boolean"){if(H!==w)return I[b]=w,!0}else if(H.equals(w)===!1)return H.copy(w),!0}return!1}function g(E){const v=E.uniforms;let A=0;const I=16;for(let b=0,H=v.length;b<H;b++){const Z=Array.isArray(v[b])?v[b]:[v[b]];for(let x=0,T=Z.length;x<T;x++){const Q=Z[x],j=Array.isArray(Q.value)?Q.value:[Q.value];for(let C=0,q=j.length;C<q;C++){const G=j[C],Y=M(G),k=A%I;k!==0&&I-k<Y.boundary&&(A+=I-k),Q.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),Q.__offset=A,A+=Y.storage}}}const w=A%I;return w>0&&(A+=I-w),E.__size=A,E.__cache={},this}function M(E){const v={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(v.boundary=4,v.storage=4):E.isVector2?(v.boundary=8,v.storage=8):E.isVector3||E.isColor?(v.boundary=16,v.storage=12):E.isVector4?(v.boundary=16,v.storage=16):E.isMatrix3?(v.boundary=48,v.storage=48):E.isMatrix4?(v.boundary=64,v.storage=64):E.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",E),v}function f(E){const v=E.target;v.removeEventListener("dispose",f);const A=o.indexOf(v.__bindingPointIndex);o.splice(A,1),i.deleteBuffer(s[v.id]),delete s[v.id],delete r[v.id]}function u(){for(const E in s)i.deleteBuffer(s[E]);o=[],s={},r={}}return{bind:l,update:c,dispose:u}}class rl{constructor(e={}){const{canvas:t=pc(),context:n=null,depth:s=!0,stencil:r=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1}=e;this.isWebGLRenderer=!0;let p;n!==null?p=n.getContextAttributes().alpha:p=o;const m=new Uint32Array(4),g=new Int32Array(4);let M=null,f=null;const u=[],E=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Wt,this._useLegacyLights=!1,this.toneMapping=vn,this.toneMappingExposure=1;const v=this;let A=!1,I=0,w=0,b=null,H=-1,Z=null;const x=new et,T=new et;let Q=null;const j=new we(0);let C=0,q=t.width,G=t.height,Y=1,k=null,W=null;const te=new et(0,0,q,G),se=new et(0,0,q,G);let ue=!1;const Le=new Pr;let B=!1,K=!1,he=null;const Ee=new $e,_e=new be,de=new L,Xe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Te(){return b===null?Y:1}let D=n;function pt(S,P){for(let F=0;F<S.length;F++){const O=S[F],U=t.getContext(O,P);if(U!==null)return U}return null}try{const S={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Rr}`),t.addEventListener("webglcontextlost",Je,!1),t.addEventListener("webglcontextrestored",R,!1),t.addEventListener("webglcontextcreationerror",ae,!1),D===null){const P=["webgl2","webgl","experimental-webgl"];if(v.isWebGL1Renderer===!0&&P.shift(),D=pt(P,S),D===null)throw pt(P)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&D instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),D.getShaderPrecisionFormat===void 0&&(D.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(S){throw console.error("THREE.WebGLRenderer: "+S.message),S}let ve,Be,Se,Ve,Fe,ze,nt,y,_,z,X,J,$,Pe,Me,re,oe,Ie,ee,st,He,ge,fe,pe;function We(){ve=new Pd(D),Be=new Td(D,ve,e),ve.init(Be),ge=new gp(D,ve,Be),Se=new mp(D,ve,Be),Ve=new Ud(D),Fe=new tp,ze=new _p(D,ve,Se,Fe,Be,ge,Ve),nt=new Ad(v),y=new Ld(v),_=new zc(D,Be),fe=new yd(D,ve,_,Be),z=new Id(D,_,Ve,fe),X=new Bd(D,z,_,Ve),ee=new Od(D,Be,ze),re=new bd(Fe),J=new ep(v,nt,y,ve,Be,fe,re),$=new bp(v,Fe),Pe=new ip,Me=new cp(ve,Be),Ie=new Md(v,nt,y,Se,X,p,l),oe=new pp(v,X,Be),pe=new Ap(D,Ve,Be,Se),st=new Ed(D,ve,Ve,Be),He=new Dd(D,ve,Ve,Be),Ve.programs=J.programs,v.capabilities=Be,v.extensions=ve,v.properties=Fe,v.renderLists=Pe,v.shadowMap=oe,v.state=Se,v.info=Ve}We();const Re=new Ep(v,D);this.xr=Re,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const S=ve.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){const S=ve.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return Y},this.setPixelRatio=function(S){S!==void 0&&(Y=S,this.setSize(q,G,!1))},this.getSize=function(S){return S.set(q,G)},this.setSize=function(S,P,F=!0){if(Re.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}q=S,G=P,t.width=Math.floor(S*Y),t.height=Math.floor(P*Y),F===!0&&(t.style.width=S+"px",t.style.height=P+"px"),this.setViewport(0,0,S,P)},this.getDrawingBufferSize=function(S){return S.set(q*Y,G*Y).floor()},this.setDrawingBufferSize=function(S,P,F){q=S,G=P,Y=F,t.width=Math.floor(S*F),t.height=Math.floor(P*F),this.setViewport(0,0,S,P)},this.getCurrentViewport=function(S){return S.copy(x)},this.getViewport=function(S){return S.copy(te)},this.setViewport=function(S,P,F,O){S.isVector4?te.set(S.x,S.y,S.z,S.w):te.set(S,P,F,O),Se.viewport(x.copy(te).multiplyScalar(Y).round())},this.getScissor=function(S){return S.copy(se)},this.setScissor=function(S,P,F,O){S.isVector4?se.set(S.x,S.y,S.z,S.w):se.set(S,P,F,O),Se.scissor(T.copy(se).multiplyScalar(Y).round())},this.getScissorTest=function(){return ue},this.setScissorTest=function(S){Se.setScissorTest(ue=S)},this.setOpaqueSort=function(S){k=S},this.setTransparentSort=function(S){W=S},this.getClearColor=function(S){return S.copy(Ie.getClearColor())},this.setClearColor=function(){Ie.setClearColor.apply(Ie,arguments)},this.getClearAlpha=function(){return Ie.getClearAlpha()},this.setClearAlpha=function(){Ie.setClearAlpha.apply(Ie,arguments)},this.clear=function(S=!0,P=!0,F=!0){let O=0;if(S){let U=!1;if(b!==null){const ce=b.texture.format;U=ce===No||ce===Uo||ce===Do}if(U){const ce=b.texture.type,me=ce===xn||ce===_n||ce===Cr||ce===Bn||ce===Lo||ce===Po,xe=Ie.getClearColor(),ye=Ie.getClearAlpha(),Oe=xe.r,Ae=xe.g,Ce=xe.b;me?(m[0]=Oe,m[1]=Ae,m[2]=Ce,m[3]=ye,D.clearBufferuiv(D.COLOR,0,m)):(g[0]=Oe,g[1]=Ae,g[2]=Ce,g[3]=ye,D.clearBufferiv(D.COLOR,0,g))}else O|=D.COLOR_BUFFER_BIT}P&&(O|=D.DEPTH_BUFFER_BIT),F&&(O|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(O)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Je,!1),t.removeEventListener("webglcontextrestored",R,!1),t.removeEventListener("webglcontextcreationerror",ae,!1),Pe.dispose(),Me.dispose(),Fe.dispose(),nt.dispose(),y.dispose(),X.dispose(),fe.dispose(),pe.dispose(),J.dispose(),Re.dispose(),Re.removeEventListener("sessionstart",It),Re.removeEventListener("sessionend",Ke),he&&(he.dispose(),he=null),Mt.stop()};function Je(S){S.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),A=!0}function R(){console.log("THREE.WebGLRenderer: Context Restored."),A=!1;const S=Ve.autoReset,P=oe.enabled,F=oe.autoUpdate,O=oe.needsUpdate,U=oe.type;We(),Ve.autoReset=S,oe.enabled=P,oe.autoUpdate=F,oe.needsUpdate=O,oe.type=U}function ae(S){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function N(S){const P=S.target;P.removeEventListener("dispose",N),ne(P)}function ne(S){le(S),Fe.remove(S)}function le(S){const P=Fe.get(S).programs;P!==void 0&&(P.forEach(function(F){J.releaseProgram(F)}),S.isShaderMaterial&&J.releaseShaderCache(S))}this.renderBufferDirect=function(S,P,F,O,U,ce){P===null&&(P=Xe);const me=U.isMesh&&U.matrixWorld.determinant()<0,xe=ul(S,P,F,O,U);Se.setMaterial(O,me);let ye=F.index,Oe=1;if(O.wireframe===!0){if(ye=z.getWireframeAttribute(F),ye===void 0)return;Oe=2}const Ae=F.drawRange,Ce=F.attributes.position;let it=Ae.start*Oe,Rt=(Ae.start+Ae.count)*Oe;ce!==null&&(it=Math.max(it,ce.start*Oe),Rt=Math.min(Rt,(ce.start+ce.count)*Oe)),ye!==null?(it=Math.max(it,0),Rt=Math.min(Rt,ye.count)):Ce!=null&&(it=Math.max(it,0),Rt=Math.min(Rt,Ce.count));const dt=Rt-it;if(dt<0||dt===1/0)return;fe.setup(U,O,xe,F,ye);let Kt,tt=st;if(ye!==null&&(Kt=_.get(ye),tt=He,tt.setIndex(Kt)),U.isMesh)O.wireframe===!0?(Se.setLineWidth(O.wireframeLinewidth*Te()),tt.setMode(D.LINES)):tt.setMode(D.TRIANGLES);else if(U.isLine){let De=O.linewidth;De===void 0&&(De=1),Se.setLineWidth(De*Te()),U.isLineSegments?tt.setMode(D.LINES):U.isLineLoop?tt.setMode(D.LINE_LOOP):tt.setMode(D.LINE_STRIP)}else U.isPoints?tt.setMode(D.POINTS):U.isSprite&&tt.setMode(D.TRIANGLES);if(U.isBatchedMesh)tt.renderMultiDraw(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount);else if(U.isInstancedMesh)tt.renderInstances(it,dt,U.count);else if(F.isInstancedBufferGeometry){const De=F._maxInstanceCount!==void 0?F._maxInstanceCount:1/0,Cs=Math.min(F.instanceCount,De);tt.renderInstances(it,dt,Cs)}else tt.render(it,dt)};function Ge(S,P,F){S.transparent===!0&&S.side===sn&&S.forceSinglePass===!1?(S.side=wt,S.needsUpdate=!0,zi(S,P,F),S.side=Mn,S.needsUpdate=!0,zi(S,P,F),S.side=sn):zi(S,P,F)}this.compile=function(S,P,F=null){F===null&&(F=S),f=Me.get(F),f.init(),E.push(f),F.traverseVisible(function(U){U.isLight&&U.layers.test(P.layers)&&(f.pushLight(U),U.castShadow&&f.pushShadow(U))}),S!==F&&S.traverseVisible(function(U){U.isLight&&U.layers.test(P.layers)&&(f.pushLight(U),U.castShadow&&f.pushShadow(U))}),f.setupLights(v._useLegacyLights);const O=new Set;return S.traverse(function(U){const ce=U.material;if(ce)if(Array.isArray(ce))for(let me=0;me<ce.length;me++){const xe=ce[me];Ge(xe,F,U),O.add(xe)}else Ge(ce,F,U),O.add(ce)}),E.pop(),f=null,O},this.compileAsync=function(S,P,F=null){const O=this.compile(S,P,F);return new Promise(U=>{function ce(){if(O.forEach(function(me){Fe.get(me).currentProgram.isReady()&&O.delete(me)}),O.size===0){U(S);return}setTimeout(ce,10)}ve.get("KHR_parallel_shader_compile")!==null?ce():setTimeout(ce,10)})};let je=null;function mt(S){je&&je(S)}function It(){Mt.stop()}function Ke(){Mt.start()}const Mt=new Jo;Mt.setAnimationLoop(mt),typeof self<"u"&&Mt.setContext(self),this.setAnimationLoop=function(S){je=S,Re.setAnimationLoop(S),S===null?Mt.stop():Mt.start()},Re.addEventListener("sessionstart",It),Re.addEventListener("sessionend",Ke),this.render=function(S,P){if(P!==void 0&&P.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),P.parent===null&&P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),Re.enabled===!0&&Re.isPresenting===!0&&(Re.cameraAutoUpdate===!0&&Re.updateCamera(P),P=Re.getCamera()),S.isScene===!0&&S.onBeforeRender(v,S,P,b),f=Me.get(S,E.length),f.init(),E.push(f),Ee.multiplyMatrices(P.projectionMatrix,P.matrixWorldInverse),Le.setFromProjectionMatrix(Ee),K=this.localClippingEnabled,B=re.init(this.clippingPlanes,K),M=Pe.get(S,u.length),M.init(),u.push(M),Vt(S,P,0,v.sortObjects),M.finish(),v.sortObjects===!0&&M.sort(k,W),this.info.render.frame++,B===!0&&re.beginShadows();const F=f.state.shadowsArray;if(oe.render(F,S,P),B===!0&&re.endShadows(),this.info.autoReset===!0&&this.info.reset(),(Re.enabled===!1||Re.isPresenting===!1||Re.hasDepthSensing()===!1)&&Ie.render(M,S),f.setupLights(v._useLegacyLights),P.isArrayCamera){const O=P.cameras;for(let U=0,ce=O.length;U<ce;U++){const me=O[U];Fr(M,S,me,me.viewport)}}else Fr(M,S,P);b!==null&&(ze.updateMultisampleRenderTarget(b),ze.updateRenderTargetMipmap(b)),S.isScene===!0&&S.onAfterRender(v,S,P),fe.resetDefaultState(),H=-1,Z=null,E.pop(),E.length>0?f=E[E.length-1]:f=null,u.pop(),u.length>0?M=u[u.length-1]:M=null};function Vt(S,P,F,O){if(S.visible===!1)return;if(S.layers.test(P.layers)){if(S.isGroup)F=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(P);else if(S.isLight)f.pushLight(S),S.castShadow&&f.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||Le.intersectsSprite(S)){O&&de.setFromMatrixPosition(S.matrixWorld).applyMatrix4(Ee);const me=X.update(S),xe=S.material;xe.visible&&M.push(S,me,xe,F,de.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||Le.intersectsObject(S))){const me=X.update(S),xe=S.material;if(O&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),de.copy(S.boundingSphere.center)):(me.boundingSphere===null&&me.computeBoundingSphere(),de.copy(me.boundingSphere.center)),de.applyMatrix4(S.matrixWorld).applyMatrix4(Ee)),Array.isArray(xe)){const ye=me.groups;for(let Oe=0,Ae=ye.length;Oe<Ae;Oe++){const Ce=ye[Oe],it=xe[Ce.materialIndex];it&&it.visible&&M.push(S,me,it,F,de.z,Ce)}}else xe.visible&&M.push(S,me,xe,F,de.z,null)}}const ce=S.children;for(let me=0,xe=ce.length;me<xe;me++)Vt(ce[me],P,F,O)}function Fr(S,P,F,O){const U=S.opaque,ce=S.transmissive,me=S.transparent;f.setupLightsView(F),B===!0&&re.setGlobalState(v.clippingPlanes,F),ce.length>0&&hl(U,ce,P,F),O&&Se.viewport(x.copy(O)),U.length>0&&Bi(U,P,F),ce.length>0&&Bi(ce,P,F),me.length>0&&Bi(me,P,F),Se.buffers.depth.setTest(!0),Se.buffers.depth.setMask(!0),Se.buffers.color.setMask(!0),Se.setPolygonOffset(!1)}function hl(S,P,F,O){if((F.isScene===!0?F.overrideMaterial:null)!==null)return;const ce=Be.isWebGL2;he===null&&(he=new Hn(1,1,{generateMipmaps:!0,type:ve.has("EXT_color_buffer_half_float")?Fi:xn,minFilter:On,samples:ce?4:0})),v.getDrawingBufferSize(_e),ce?he.setSize(_e.x,_e.y):he.setSize(br(_e.x),br(_e.y));const me=v.getRenderTarget();v.setRenderTarget(he),v.getClearColor(j),C=v.getClearAlpha(),C<1&&v.setClearColor(16777215,.5),v.clear();const xe=v.toneMapping;v.toneMapping=vn,Bi(S,F,O),ze.updateMultisampleRenderTarget(he),ze.updateRenderTargetMipmap(he);let ye=!1;for(let Oe=0,Ae=P.length;Oe<Ae;Oe++){const Ce=P[Oe],it=Ce.object,Rt=Ce.geometry,dt=Ce.material,Kt=Ce.group;if(dt.side===sn&&it.layers.test(O.layers)){const tt=dt.side;dt.side=wt,dt.needsUpdate=!0,Or(it,F,O,Rt,dt,Kt),dt.side=tt,dt.needsUpdate=!0,ye=!0}}ye===!0&&(ze.updateMultisampleRenderTarget(he),ze.updateRenderTargetMipmap(he)),v.setRenderTarget(me),v.setClearColor(j,C),v.toneMapping=xe}function Bi(S,P,F){const O=P.isScene===!0?P.overrideMaterial:null;for(let U=0,ce=S.length;U<ce;U++){const me=S[U],xe=me.object,ye=me.geometry,Oe=O===null?me.material:O,Ae=me.group;xe.layers.test(F.layers)&&Or(xe,P,F,ye,Oe,Ae)}}function Or(S,P,F,O,U,ce){S.onBeforeRender(v,P,F,O,U,ce),S.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),U.onBeforeRender(v,P,F,O,S,ce),U.transparent===!0&&U.side===sn&&U.forceSinglePass===!1?(U.side=wt,U.needsUpdate=!0,v.renderBufferDirect(F,P,O,U,S,ce),U.side=Mn,U.needsUpdate=!0,v.renderBufferDirect(F,P,O,U,S,ce),U.side=sn):v.renderBufferDirect(F,P,O,U,S,ce),S.onAfterRender(v,P,F,O,U,ce)}function zi(S,P,F){P.isScene!==!0&&(P=Xe);const O=Fe.get(S),U=f.state.lights,ce=f.state.shadowsArray,me=U.state.version,xe=J.getParameters(S,U.state,ce,P,F),ye=J.getProgramCacheKey(xe);let Oe=O.programs;O.environment=S.isMeshStandardMaterial?P.environment:null,O.fog=P.fog,O.envMap=(S.isMeshStandardMaterial?y:nt).get(S.envMap||O.environment),O.envMapRotation=O.environment!==null&&S.envMap===null?P.environmentRotation:S.envMapRotation,Oe===void 0&&(S.addEventListener("dispose",N),Oe=new Map,O.programs=Oe);let Ae=Oe.get(ye);if(Ae!==void 0){if(O.currentProgram===Ae&&O.lightsStateVersion===me)return zr(S,xe),Ae}else xe.uniforms=J.getUniforms(S),S.onBuild(F,xe,v),S.onBeforeCompile(xe,v),Ae=J.acquireProgram(xe,ye),Oe.set(ye,Ae),O.uniforms=xe.uniforms;const Ce=O.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(Ce.clippingPlanes=re.uniform),zr(S,xe),O.needsLights=fl(S),O.lightsStateVersion=me,O.needsLights&&(Ce.ambientLightColor.value=U.state.ambient,Ce.lightProbe.value=U.state.probe,Ce.directionalLights.value=U.state.directional,Ce.directionalLightShadows.value=U.state.directionalShadow,Ce.spotLights.value=U.state.spot,Ce.spotLightShadows.value=U.state.spotShadow,Ce.rectAreaLights.value=U.state.rectArea,Ce.ltc_1.value=U.state.rectAreaLTC1,Ce.ltc_2.value=U.state.rectAreaLTC2,Ce.pointLights.value=U.state.point,Ce.pointLightShadows.value=U.state.pointShadow,Ce.hemisphereLights.value=U.state.hemi,Ce.directionalShadowMap.value=U.state.directionalShadowMap,Ce.directionalShadowMatrix.value=U.state.directionalShadowMatrix,Ce.spotShadowMap.value=U.state.spotShadowMap,Ce.spotLightMatrix.value=U.state.spotLightMatrix,Ce.spotLightMap.value=U.state.spotLightMap,Ce.pointShadowMap.value=U.state.pointShadowMap,Ce.pointShadowMatrix.value=U.state.pointShadowMatrix),O.currentProgram=Ae,O.uniformsList=null,Ae}function Br(S){if(S.uniformsList===null){const P=S.currentProgram.getUniforms();S.uniformsList=ms.seqWithValue(P.seq,S.uniforms)}return S.uniformsList}function zr(S,P){const F=Fe.get(S);F.outputColorSpace=P.outputColorSpace,F.batching=P.batching,F.instancing=P.instancing,F.instancingColor=P.instancingColor,F.instancingMorph=P.instancingMorph,F.skinning=P.skinning,F.morphTargets=P.morphTargets,F.morphNormals=P.morphNormals,F.morphColors=P.morphColors,F.morphTargetsCount=P.morphTargetsCount,F.numClippingPlanes=P.numClippingPlanes,F.numIntersection=P.numClipIntersection,F.vertexAlphas=P.vertexAlphas,F.vertexTangents=P.vertexTangents,F.toneMapping=P.toneMapping}function ul(S,P,F,O,U){P.isScene!==!0&&(P=Xe),ze.resetTextureUnits();const ce=P.fog,me=O.isMeshStandardMaterial?P.environment:null,xe=b===null?v.outputColorSpace:b.isXRRenderTarget===!0?b.texture.colorSpace:En,ye=(O.isMeshStandardMaterial?y:nt).get(O.envMap||me),Oe=O.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,Ae=!!F.attributes.tangent&&(!!O.normalMap||O.anisotropy>0),Ce=!!F.morphAttributes.position,it=!!F.morphAttributes.normal,Rt=!!F.morphAttributes.color;let dt=vn;O.toneMapped&&(b===null||b.isXRRenderTarget===!0)&&(dt=v.toneMapping);const Kt=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,tt=Kt!==void 0?Kt.length:0,De=Fe.get(O),Cs=f.state.lights;if(B===!0&&(K===!0||S!==Z)){const Dt=S===Z&&O.id===H;re.setState(O,S,Dt)}let Qe=!1;O.version===De.__version?(De.needsLights&&De.lightsStateVersion!==Cs.state.version||De.outputColorSpace!==xe||U.isBatchedMesh&&De.batching===!1||!U.isBatchedMesh&&De.batching===!0||U.isInstancedMesh&&De.instancing===!1||!U.isInstancedMesh&&De.instancing===!0||U.isSkinnedMesh&&De.skinning===!1||!U.isSkinnedMesh&&De.skinning===!0||U.isInstancedMesh&&De.instancingColor===!0&&U.instanceColor===null||U.isInstancedMesh&&De.instancingColor===!1&&U.instanceColor!==null||U.isInstancedMesh&&De.instancingMorph===!0&&U.morphTexture===null||U.isInstancedMesh&&De.instancingMorph===!1&&U.morphTexture!==null||De.envMap!==ye||O.fog===!0&&De.fog!==ce||De.numClippingPlanes!==void 0&&(De.numClippingPlanes!==re.numPlanes||De.numIntersection!==re.numIntersection)||De.vertexAlphas!==Oe||De.vertexTangents!==Ae||De.morphTargets!==Ce||De.morphNormals!==it||De.morphColors!==Rt||De.toneMapping!==dt||Be.isWebGL2===!0&&De.morphTargetsCount!==tt)&&(Qe=!0):(Qe=!0,De.__version=O.version);let Tn=De.currentProgram;Qe===!0&&(Tn=zi(O,P,U));let Hr=!1,Ei=!1,Ls=!1;const gt=Tn.getUniforms(),bn=De.uniforms;if(Se.useProgram(Tn.program)&&(Hr=!0,Ei=!0,Ls=!0),O.id!==H&&(H=O.id,Ei=!0),Hr||Z!==S){gt.setValue(D,"projectionMatrix",S.projectionMatrix),gt.setValue(D,"viewMatrix",S.matrixWorldInverse);const Dt=gt.map.cameraPosition;Dt!==void 0&&Dt.setValue(D,de.setFromMatrixPosition(S.matrixWorld)),Be.logarithmicDepthBuffer&&gt.setValue(D,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(O.isMeshPhongMaterial||O.isMeshToonMaterial||O.isMeshLambertMaterial||O.isMeshBasicMaterial||O.isMeshStandardMaterial||O.isShaderMaterial)&&gt.setValue(D,"isOrthographic",S.isOrthographicCamera===!0),Z!==S&&(Z=S,Ei=!0,Ls=!0)}if(U.isSkinnedMesh){gt.setOptional(D,U,"bindMatrix"),gt.setOptional(D,U,"bindMatrixInverse");const Dt=U.skeleton;Dt&&(Be.floatVertexTextures?(Dt.boneTexture===null&&Dt.computeBoneTexture(),gt.setValue(D,"boneTexture",Dt.boneTexture,ze)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}U.isBatchedMesh&&(gt.setOptional(D,U,"batchingTexture"),gt.setValue(D,"batchingTexture",U._matricesTexture,ze));const Ps=F.morphAttributes;if((Ps.position!==void 0||Ps.normal!==void 0||Ps.color!==void 0&&Be.isWebGL2===!0)&&ee.update(U,F,Tn),(Ei||De.receiveShadow!==U.receiveShadow)&&(De.receiveShadow=U.receiveShadow,gt.setValue(D,"receiveShadow",U.receiveShadow)),O.isMeshGouraudMaterial&&O.envMap!==null&&(bn.envMap.value=ye,bn.flipEnvMap.value=ye.isCubeTexture&&ye.isRenderTargetTexture===!1?-1:1),Ei&&(gt.setValue(D,"toneMappingExposure",v.toneMappingExposure),De.needsLights&&dl(bn,Ls),ce&&O.fog===!0&&$.refreshFogUniforms(bn,ce),$.refreshMaterialUniforms(bn,O,Y,G,he),ms.upload(D,Br(De),bn,ze)),O.isShaderMaterial&&O.uniformsNeedUpdate===!0&&(ms.upload(D,Br(De),bn,ze),O.uniformsNeedUpdate=!1),O.isSpriteMaterial&&gt.setValue(D,"center",U.center),gt.setValue(D,"modelViewMatrix",U.modelViewMatrix),gt.setValue(D,"normalMatrix",U.normalMatrix),gt.setValue(D,"modelMatrix",U.matrixWorld),O.isShaderMaterial||O.isRawShaderMaterial){const Dt=O.uniformsGroups;for(let Is=0,pl=Dt.length;Is<pl;Is++)if(Be.isWebGL2){const Gr=Dt[Is];pe.update(Gr,Tn),pe.bind(Gr,Tn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Tn}function dl(S,P){S.ambientLightColor.needsUpdate=P,S.lightProbe.needsUpdate=P,S.directionalLights.needsUpdate=P,S.directionalLightShadows.needsUpdate=P,S.pointLights.needsUpdate=P,S.pointLightShadows.needsUpdate=P,S.spotLights.needsUpdate=P,S.spotLightShadows.needsUpdate=P,S.rectAreaLights.needsUpdate=P,S.hemisphereLights.needsUpdate=P}function fl(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return I},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return b},this.setRenderTargetTextures=function(S,P,F){Fe.get(S.texture).__webglTexture=P,Fe.get(S.depthTexture).__webglTexture=F;const O=Fe.get(S);O.__hasExternalTextures=!0,O.__autoAllocateDepthBuffer=F===void 0,O.__autoAllocateDepthBuffer||ve.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),O.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(S,P){const F=Fe.get(S);F.__webglFramebuffer=P,F.__useDefaultFramebuffer=P===void 0},this.setRenderTarget=function(S,P=0,F=0){b=S,I=P,w=F;let O=!0,U=null,ce=!1,me=!1;if(S){const ye=Fe.get(S);ye.__useDefaultFramebuffer!==void 0?(Se.bindFramebuffer(D.FRAMEBUFFER,null),O=!1):ye.__webglFramebuffer===void 0?ze.setupRenderTarget(S):ye.__hasExternalTextures&&ze.rebindTextures(S,Fe.get(S.texture).__webglTexture,Fe.get(S.depthTexture).__webglTexture);const Oe=S.texture;(Oe.isData3DTexture||Oe.isDataArrayTexture||Oe.isCompressedArrayTexture)&&(me=!0);const Ae=Fe.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(Ae[P])?U=Ae[P][F]:U=Ae[P],ce=!0):Be.isWebGL2&&S.samples>0&&ze.useMultisampledRTT(S)===!1?U=Fe.get(S).__webglMultisampledFramebuffer:Array.isArray(Ae)?U=Ae[F]:U=Ae,x.copy(S.viewport),T.copy(S.scissor),Q=S.scissorTest}else x.copy(te).multiplyScalar(Y).floor(),T.copy(se).multiplyScalar(Y).floor(),Q=ue;if(Se.bindFramebuffer(D.FRAMEBUFFER,U)&&Be.drawBuffers&&O&&Se.drawBuffers(S,U),Se.viewport(x),Se.scissor(T),Se.setScissorTest(Q),ce){const ye=Fe.get(S.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+P,ye.__webglTexture,F)}else if(me){const ye=Fe.get(S.texture),Oe=P||0;D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,ye.__webglTexture,F||0,Oe)}H=-1},this.readRenderTargetPixels=function(S,P,F,O,U,ce,me){if(!(S&&S.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let xe=Fe.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&me!==void 0&&(xe=xe[me]),xe){Se.bindFramebuffer(D.FRAMEBUFFER,xe);try{const ye=S.texture,Oe=ye.format,Ae=ye.type;if(Oe!==Ht&&ge.convert(Oe)!==D.getParameter(D.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ce=Ae===Fi&&(ve.has("EXT_color_buffer_half_float")||Be.isWebGL2&&ve.has("EXT_color_buffer_float"));if(Ae!==xn&&ge.convert(Ae)!==D.getParameter(D.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Ae===qt&&(Be.isWebGL2||ve.has("OES_texture_float")||ve.has("WEBGL_color_buffer_float")))&&!Ce){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}P>=0&&P<=S.width-O&&F>=0&&F<=S.height-U&&D.readPixels(P,F,O,U,ge.convert(Oe),ge.convert(Ae),ce)}finally{const ye=b!==null?Fe.get(b).__webglFramebuffer:null;Se.bindFramebuffer(D.FRAMEBUFFER,ye)}}},this.copyFramebufferToTexture=function(S,P,F=0){const O=Math.pow(2,-F),U=Math.floor(P.image.width*O),ce=Math.floor(P.image.height*O);ze.setTexture2D(P,0),D.copyTexSubImage2D(D.TEXTURE_2D,F,0,0,S.x,S.y,U,ce),Se.unbindTexture()},this.copyTextureToTexture=function(S,P,F,O=0){const U=P.image.width,ce=P.image.height,me=ge.convert(F.format),xe=ge.convert(F.type);ze.setTexture2D(F,0),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,F.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,F.unpackAlignment),P.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,O,S.x,S.y,U,ce,me,xe,P.image.data):P.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,O,S.x,S.y,P.mipmaps[0].width,P.mipmaps[0].height,me,P.mipmaps[0].data):D.texSubImage2D(D.TEXTURE_2D,O,S.x,S.y,me,xe,P.image),O===0&&F.generateMipmaps&&D.generateMipmap(D.TEXTURE_2D),Se.unbindTexture()},this.copyTextureToTexture3D=function(S,P,F,O,U=0){if(v.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const ce=Math.round(S.max.x-S.min.x),me=Math.round(S.max.y-S.min.y),xe=S.max.z-S.min.z+1,ye=ge.convert(O.format),Oe=ge.convert(O.type);let Ae;if(O.isData3DTexture)ze.setTexture3D(O,0),Ae=D.TEXTURE_3D;else if(O.isDataArrayTexture||O.isCompressedArrayTexture)ze.setTexture2DArray(O,0),Ae=D.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,O.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,O.unpackAlignment);const Ce=D.getParameter(D.UNPACK_ROW_LENGTH),it=D.getParameter(D.UNPACK_IMAGE_HEIGHT),Rt=D.getParameter(D.UNPACK_SKIP_PIXELS),dt=D.getParameter(D.UNPACK_SKIP_ROWS),Kt=D.getParameter(D.UNPACK_SKIP_IMAGES),tt=F.isCompressedTexture?F.mipmaps[U]:F.image;D.pixelStorei(D.UNPACK_ROW_LENGTH,tt.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,tt.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,S.min.x),D.pixelStorei(D.UNPACK_SKIP_ROWS,S.min.y),D.pixelStorei(D.UNPACK_SKIP_IMAGES,S.min.z),F.isDataTexture||F.isData3DTexture?D.texSubImage3D(Ae,U,P.x,P.y,P.z,ce,me,xe,ye,Oe,tt.data):O.isCompressedArrayTexture?D.compressedTexSubImage3D(Ae,U,P.x,P.y,P.z,ce,me,xe,ye,tt.data):D.texSubImage3D(Ae,U,P.x,P.y,P.z,ce,me,xe,ye,Oe,tt),D.pixelStorei(D.UNPACK_ROW_LENGTH,Ce),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,it),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Rt),D.pixelStorei(D.UNPACK_SKIP_ROWS,dt),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Kt),U===0&&O.generateMipmaps&&D.generateMipmap(Ae),Se.unbindTexture()},this.initTexture=function(S){S.isCubeTexture?ze.setTextureCube(S,0):S.isData3DTexture?ze.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?ze.setTexture2DArray(S,0):ze.setTexture2D(S,0),Se.unbindTexture()},this.resetState=function(){I=0,w=0,b=null,Se.reset(),fe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return an}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===Lr?"display-p3":"srgb",t.unpackColorSpace=Ye.workingColorSpace===ws?"display-p3":"srgb"}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class wp extends rl{}wp.prototype.isWebGL1Renderer=!0;class Dr{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new we(e),this.density=t}clone(){return new Dr(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Rp extends ct{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new jt,this.environmentRotation=new jt,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Cp{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Er,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=Sn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return Ho("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Sn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Sn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const yt=new L;class Ts{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)yt.fromBufferAttribute(this,t),yt.applyMatrix4(e),this.setXYZ(t,yt.x,yt.y,yt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)yt.fromBufferAttribute(this,t),yt.applyNormalMatrix(e),this.setXYZ(t,yt.x,yt.y,yt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)yt.fromBufferAttribute(this,t),yt.transformDirection(e),this.setXYZ(t,yt.x,yt.y,yt.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Yt(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=qe(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=qe(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=qe(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=qe(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=qe(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Yt(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Yt(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Yt(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Yt(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=qe(t,this.array),n=qe(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=qe(t,this.array),n=qe(n,this.array),s=qe(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=qe(t,this.array),n=qe(n,this.array),s=qe(s,this.array),r=qe(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new Pt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Ts(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class al extends kn{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new we(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let ri;const Ci=new L,ai=new L,oi=new L,li=new be,Li=new be,ol=new $e,ls=new L,Pi=new L,cs=new L,co=new be,dr=new be,ho=new be;class Lp extends ct{constructor(e=new al){if(super(),this.isSprite=!0,this.type="Sprite",ri===void 0){ri=new kt;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Cp(t,5);ri.setIndex([0,1,2,0,2,3]),ri.setAttribute("position",new Ts(n,3,0,!1)),ri.setAttribute("uv",new Ts(n,2,3,!1))}this.geometry=ri,this.material=e,this.center=new be(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),ai.setFromMatrixScale(this.matrixWorld),ol.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),oi.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&ai.multiplyScalar(-oi.z);const n=this.material.rotation;let s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));const o=this.center;hs(ls.set(-.5,-.5,0),oi,o,ai,s,r),hs(Pi.set(.5,-.5,0),oi,o,ai,s,r),hs(cs.set(.5,.5,0),oi,o,ai,s,r),co.set(0,0),dr.set(1,0),ho.set(1,1);let a=e.ray.intersectTriangle(ls,Pi,cs,!1,Ci);if(a===null&&(hs(Pi.set(-.5,.5,0),oi,o,ai,s,r),dr.set(0,1),a=e.ray.intersectTriangle(ls,cs,Pi,!1,Ci),a===null))return;const l=e.ray.origin.distanceTo(Ci);l<e.near||l>e.far||t.push({distance:l,point:Ci.clone(),uv:Gt.getInterpolation(Ci,ls,Pi,cs,co,dr,ho,new be),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function hs(i,e,t,n,s,r){li.subVectors(i,t).addScalar(.5).multiply(n),s!==void 0?(Li.x=r*li.x-s*li.y,Li.y=s*li.x+r*li.y):Li.copy(li),i.copy(e),i.x+=Li.x,i.y+=Li.y,i.applyMatrix4(ol)}class Pp extends St{constructor(e=null,t=1,n=1,s,r,o,a,l,c=_t,h=_t,d,p){super(null,o,a,l,c,h,s,r,d,p),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class uo extends Pt{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const ci=new $e,fo=new $e,us=[],po=new Gn,Ip=new $e,Ii=new ot,Di=new Mi;class Dp extends ot{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new uo(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Ip)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Gn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,ci),po.copy(e.boundingBox).applyMatrix4(ci),this.boundingBox.union(po)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Mi),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,ci),Di.copy(e.boundingSphere).applyMatrix4(ci),this.boundingSphere.union(Di)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=e*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(e,t){const n=this.matrixWorld,s=this.count;if(Ii.geometry=this.geometry,Ii.material=this.material,Ii.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Di.copy(this.boundingSphere),Di.applyMatrix4(n),e.ray.intersectsSphere(Di)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,ci),fo.multiplyMatrices(n,ci),Ii.matrixWorld=fo,Ii.raycast(e,us);for(let o=0,a=us.length;o<a;o++){const l=us[o];l.instanceId=r,l.object=this,t.push(l)}us.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new uo(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Pp(new Float32Array(s*this.count),s,this.count,Io,qt));const r=this.morphTexture.source.data.data;let o=0;for(let c=0;c<n.length;c++)o+=n[c];const a=this.geometry.morphTargetsRelative?1:1-o,l=s*e;r[l]=a,r.set(n,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}class ll extends kn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new we(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const mo=new $e,wr=new Wo,ds=new Mi,fs=new L;class Up extends ct{constructor(e=new kt,t=new ll){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ds.copy(n.boundingSphere),ds.applyMatrix4(s),ds.radius+=r,e.ray.intersectsSphere(ds)===!1)return;mo.copy(s).invert(),wr.copy(e.ray).applyMatrix4(mo);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,d=n.attributes.position;if(c!==null){const p=Math.max(0,o.start),m=Math.min(c.count,o.start+o.count);for(let g=p,M=m;g<M;g++){const f=c.getX(g);fs.fromBufferAttribute(d,f),_o(fs,f,l,s,e,t,this)}}else{const p=Math.max(0,o.start),m=Math.min(d.count,o.start+o.count);for(let g=p,M=m;g<M;g++)fs.fromBufferAttribute(d,g),_o(fs,g,l,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function _o(i,e,t,n,s,r,o){const a=wr.distanceSqToPoint(i);if(a<t){const l=new L;wr.closestPointToPoint(i,l),l.applyMatrix4(n);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,object:o})}}class Np extends St{constructor(e,t,n,s,r,o,a,l,c){super(e,t,n,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Ur extends kt{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let c=0;const h=[],d=new L,p=new L,m=[],g=[],M=[],f=[];for(let u=0;u<=n;u++){const E=[],v=u/n;let A=0;u===0&&o===0?A=.5/t:u===n&&l===Math.PI&&(A=-.5/t);for(let I=0;I<=t;I++){const w=I/t;d.x=-e*Math.cos(s+w*r)*Math.sin(o+v*a),d.y=e*Math.cos(o+v*a),d.z=e*Math.sin(s+w*r)*Math.sin(o+v*a),g.push(d.x,d.y,d.z),p.copy(d).normalize(),M.push(p.x,p.y,p.z),f.push(w+A,1-v),E.push(c++)}h.push(E)}for(let u=0;u<n;u++)for(let E=0;E<t;E++){const v=h[u][E+1],A=h[u][E],I=h[u+1][E],w=h[u+1][E+1];(u!==0||o>0)&&m.push(v,A,w),(u!==n-1||l<Math.PI)&&m.push(A,I,w)}this.setIndex(m),this.setAttribute("position",new $t(g,3)),this.setAttribute("normal",new $t(M,3)),this.setAttribute("uv",new $t(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ur(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class xi extends kn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new we(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new we(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Oo,this.normalScale=new be(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new jt,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Nr extends ct{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new we(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const fr=new $e,go=new L,vo=new L;class cl{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new be(512,512),this.map=null,this.mapPass=null,this.matrix=new $e,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Pr,this._frameExtents=new be(1,1),this._viewportCount=1,this._viewports=[new et(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;go.setFromMatrixPosition(e.matrixWorld),t.position.copy(go),vo.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(vo),t.updateMatrixWorld(),fr.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(fr),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(fr)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Fp extends cl{constructor(){super(new At(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=Ms*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class Op extends Nr{constructor(e,t,n=0,s=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(ct.DEFAULT_UP),this.updateMatrix(),this.target=new ct,this.distance=n,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new Fp}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const xo=new $e,Ui=new L,pr=new L;class Bp extends cl{constructor(){super(new At(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new be(4,2),this._viewportCount=6,this._viewports=[new et(2,1,1,1),new et(0,1,1,1),new et(3,1,1,1),new et(1,1,1,1),new et(3,0,1,1),new et(1,0,1,1)],this._cubeDirections=[new L(1,0,0),new L(-1,0,0),new L(0,0,1),new L(0,0,-1),new L(0,1,0),new L(0,-1,0)],this._cubeUps=[new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,0,1),new L(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,s=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Ui.setFromMatrixPosition(e.matrixWorld),n.position.copy(Ui),pr.copy(n.position),pr.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(pr),n.updateMatrixWorld(),s.makeTranslation(-Ui.x,-Ui.y,-Ui.z),xo.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(xo)}}class Ni extends Nr{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Bp}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class zp extends Nr{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class _m{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=So(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=So();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function So(){return(typeof performance>"u"?Date:performance).now()}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Rr}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Rr);const ke={WIDTH:20,HEIGHT:12,DEPTH:30,HALF_W:10,HALF_D:15},lt={WIDTH:4,HEIGHT:.4,DEPTH:.8,Y:0,Z:12,SPEED:22},pi={RADIUS:.25,INITIAL_SPEED:14},Bt={WIDTH:1.8,HEIGHT:.8,DEPTH:.6,GAP:.2,START_Z:-10,START_Y:2.5,EXPLOSION_RADIUS:3.8},at={NEON_CYAN:65535,NEON_PINK:16711850,NEON_GREEN:65416,NEON_RED:16720452,CHROME:13160672,ARENA_WALL:657946,FLOOR:526360,BALL:61183,EXPLOSIVE:16729088,TROLL:65348,ARMORED_FULL:11184844,ARMORED_MID:6710920,ARMORED_LOW:3355460},bs=[16720452,16737826,16763904,2280516,52428,2245887,8921855,16720554],Hp="modulepreload",Gp=function(i){return"/"+i},Mo={},ps=function(e,t,n){let s=Promise.resolve();if(t&&t.length>0){document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),a=(o==null?void 0:o.nonce)||(o==null?void 0:o.getAttribute("nonce"));s=Promise.allSettled(t.map(l=>{if(l=Gp(l),l in Mo)return;Mo[l]=!0;const c=l.endsWith(".css"),h=c?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${h}`))return;const d=document.createElement("link");if(d.rel=c?"stylesheet":Hp,c||(d.as="script"),d.crossOrigin="",d.href=l,a&&d.setAttribute("nonce",a),document.head.appendChild(d),c)return new Promise((p,m)=>{d.addEventListener("load",p),d.addEventListener("error",()=>m(new Error(`Unable to preload CSS for ${l}`)))})}))}function r(o){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o}return s.then(o=>{for(const a of o||[])a.status==="rejected"&&r(a.reason);return e().catch(r)})},kp={uniforms:{tDiffuse:{value:null},intensity:{value:0}},vertexShader:`
    varying vec2 vUv;
    void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }
  `,fragmentShader:`
    uniform sampler2D tDiffuse;
    uniform float intensity;
    varying vec2 vUv;
    void main() {
      vec2 offset = intensity * vec2(0.005, 0.0);
      float r = texture2D(tDiffuse, vUv + offset).r;
      float g = texture2D(tDiffuse, vUv).g;
      float b = texture2D(tDiffuse, vUv - offset).b;
      gl_FragColor = vec4(r, g, b, 1.0);
    }
  `},Vp={uniforms:{tDiffuse:{value:null},strength:{value:.35}},vertexShader:`
    varying vec2 vUv;
    void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }
  `,fragmentShader:`
    uniform sampler2D tDiffuse;
    uniform float strength;
    varying vec2 vUv;
    void main() {
      vec4 color = texture2D(tDiffuse, vUv);
      float dist = distance(vUv, vec2(0.5));
      float vignette = smoothstep(0.5, 0.5 - strength * 0.5, dist);
      gl_FragColor = vec4(color.rgb * vignette, color.a);
    }
  `};class Wp{constructor(e,t,n){V(this,"_renderer");V(this,"_scene");V(this,"_camera");V(this,"_composer",null);V(this,"_chromaPass",null);V(this,"enabled",!1);this._renderer=e,this._scene=t,this._camera=n}async init(){try{const[{EffectComposer:e},{RenderPass:t},{UnrealBloomPass:n},{ShaderPass:s}]=await Promise.all([ps(()=>import("./EffectComposer-MiByYtnc.js"),__vite__mapDeps([0,1,2,3])),ps(()=>import("./RenderPass-CebbuggL.js"),__vite__mapDeps([4,3])),ps(()=>import("./UnrealBloomPass-CB3nYkt0.js"),__vite__mapDeps([5,3,1])),ps(()=>import("./ShaderPass-BKbYfMVb.js"),__vite__mapDeps([2,3]))]),r=new e(this._renderer);r.addPass(new t(this._scene,this._camera));const o=new be(window.innerWidth,window.innerHeight);r.addPass(new n(o,1.2,.5,.75)),r.addPass(new s(Vp));const a=new s(kp);r.addPass(a),this._chromaPass=a,this._composer=r,this.enabled=!0}catch{}}setChromaticAberration(e){this._chromaPass&&(this._chromaPass.uniforms.intensity.value=Math.max(0,e)*.8)}render(){this._composer&&this.enabled?this._composer.render():this._renderer.render(this._scene,this._camera)}setSize(e,t){var n;(n=this._composer)==null||n.setSize(e,t)}}class Xp{constructor(e){V(this,"scene");V(this,"renderer");V(this,"camera");V(this,"_post");V(this,"_container");V(this,"_spotlight",null);V(this,"_spotTarget",0);this._container=e,this.scene=new Rp,this.scene.background=new we(8),this.scene.fog=new Dr(8,.007),this.renderer=new rl({antialias:!0}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.setSize(e.clientWidth,e.clientHeight),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=bo,this.renderer.toneMapping=wo,this.renderer.toneMappingExposure=1.2,e.appendChild(this.renderer.domElement),this.camera=new At(70,e.clientWidth/e.clientHeight,.1,200),this.camera.position.set(0,7,22),this.camera.lookAt(0,3,-2),this._post=new Wp(this.renderer,this.scene,this.camera),this._buildWalls(),this._setupLights(),this._setupResize(),this._post.init()}_buildWalls(){const e=new xi({color:at.ARENA_WALL,metalness:.4,roughness:.8}),t=new xi({color:at.FLOOR,metalness:.7,roughness:.3}),n=new ot(new rn(ke.WIDTH,ke.DEPTH),t);n.rotation.x=-Math.PI/2,n.receiveShadow=!0,this.scene.add(n);const s=new ot(new rn(ke.WIDTH,ke.DEPTH),e.clone());s.rotation.x=Math.PI/2,s.position.y=ke.HEIGHT,s.receiveShadow=!0,this.scene.add(s);const r=new ot(new rn(ke.WIDTH,ke.HEIGHT),e.clone());r.position.set(0,ke.HEIGHT/2,-15),r.receiveShadow=!0,this.scene.add(r);const o=new ot(new rn(ke.DEPTH,ke.HEIGHT),e.clone());o.rotation.y=Math.PI/2,o.position.set(-10,ke.HEIGHT/2,0),o.receiveShadow=!0,this.scene.add(o);const a=new ot(new rn(ke.DEPTH,ke.HEIGHT),e.clone());a.rotation.y=-Math.PI/2,a.position.set(ke.HALF_W,ke.HEIGHT/2,0),a.receiveShadow=!0,this.scene.add(a),this._addEdgeTrim()}_addEdgeTrim(){const t=new Es({color:at.NEON_CYAN}),n=new Es({color:at.NEON_PINK}),s=[{s:[ke.WIDTH,.05,.05],p:[0,ke.HEIGHT,-15],m:t},{s:[ke.WIDTH,.05,.05],p:[0,0,-15],m:t},{s:[.05,ke.HEIGHT,.05],p:[-10,ke.HEIGHT/2,-15],m:t},{s:[.05,ke.HEIGHT,.05],p:[ke.HALF_W,ke.HEIGHT/2,-15],m:t},{s:[.05,.05,ke.DEPTH],p:[-10,ke.HEIGHT,0],m:n},{s:[.05,.05,ke.DEPTH],p:[ke.HALF_W,ke.HEIGHT,0],m:n},{s:[.05,.05,ke.DEPTH],p:[-10,0,0],m:t},{s:[.05,.05,ke.DEPTH],p:[ke.HALF_W,0,0],m:t}];for(const{s:r,p:o,m:a}of s){const l=new ot(new on(...r),a);l.position.set(...o),this.scene.add(l)}}_setupLights(){this.scene.add(new zp(1122867,.8));const e=new Ni(at.NEON_CYAN,3,40);e.position.set(0,10,-10),e.castShadow=!0,e.shadow.mapSize.set(1024,1024),this.scene.add(e);const t=new Ni(at.NEON_PINK,1.5,28);t.position.set(-9,7,0),this.scene.add(t);const n=new Ni(at.NEON_GREEN,1.5,28);n.position.set(9,7,0),this.scene.add(n);const s=new Ni(2241348,1,15);s.position.set(0,5,15),this.scene.add(s)}_setupResize(){window.addEventListener("resize",()=>{const e=this._container.clientWidth,t=this._container.clientHeight;this.camera.aspect=e/t,this.camera.updateProjectionMatrix(),this.renderer.setSize(e,t),this._post.setSize(e,t)})}_ensureSpotlight(){if(this._spotlight)return;const e=new Op(16777215,0,25,Math.PI/8,.3,1.5);e.position.set(0,11,-2),e.castShadow=!1,this.scene.add(e),this.scene.add(e.target),this._spotlight=e}flashSpotlight(e,t,n,s=2.5){this._ensureSpotlight();const r=this._spotlight;r.target.position.set(e,t,n),r.target.updateMatrixWorld(),this._spotTarget=s}updateSpotlight(e){if(!this._spotlight||this._spotTarget<=0)return;this._spotTarget-=e;const n=Math.max(0,this._spotTarget)/2.5;this._spotlight.intensity=Math.sin(n*Math.PI)*4,this._spotTarget<=0&&(this._spotlight.intensity=0)}render(){this._post.render()}}class qp{constructor(e,t,n){V(this,"mesh");V(this,"_x",0);V(this,"_targetX",0);V(this,"_pointerLocked",!1);V(this,"_keys");this._keys=n;const s=new on(lt.WIDTH,lt.HEIGHT,lt.DEPTH),r=new xi({color:at.CHROME,metalness:.95,roughness:.05,emissive:new we(at.NEON_CYAN),emissiveIntensity:.4});this.mesh=new ot(s,r),this.mesh.castShadow=!0,this.mesh.receiveShadow=!0,this._sync(),e.add(this.mesh),t.domElement.addEventListener("click",()=>{t.domElement.requestPointerLock()}),document.addEventListener("pointerlockchange",()=>{this._pointerLocked=document.pointerLockElement===t.domElement}),document.addEventListener("mousemove",o=>{this._pointerLocked&&(this._targetX=Math.max(-10+lt.WIDTH/2,Math.min(ke.HALF_W-lt.WIDTH/2,this._targetX+o.movementX*.025)))})}update(e){(this._keys.has("ArrowLeft")||this._keys.has("a")||this._keys.has("A"))&&(this._targetX-=lt.SPEED*e),(this._keys.has("ArrowRight")||this._keys.has("d")||this._keys.has("D"))&&(this._targetX+=lt.SPEED*e),this._targetX=Math.max(-10+lt.WIDTH/2,Math.min(ke.HALF_W-lt.WIDTH/2,this._targetX)),this._x+=(this._targetX-this._x)*Math.min(1,e*18),this._sync()}_sync(){this.mesh.position.set(this._x,lt.Y+lt.HEIGHT/2,lt.Z)}get x(){return this._x}setGlowColor(e){this.mesh.material.emissive.setHex(e)}setWidthScale(e){this.mesh.scale.x=Math.max(.1,e)}resetWidthScale(){this.mesh.scale.x=1}}const Yp=24;class $p{constructor(e){V(this,"mesh");V(this,"_speed");V(this,"_launched",!1);V(this,"_trail",[]);V(this,"_trailGeo");V(this,"_trailPoints");const t=new Ur(pi.RADIUS,16,12),n=new xi({color:at.BALL,emissive:new we(at.BALL),emissiveIntensity:2.5,metalness:0,roughness:0});this.mesh=new ot(t,n),this.mesh.castShadow=!0,this.mesh.add(new Ni(at.BALL,2,8)),this._speed=pi.INITIAL_SPEED,this._placedOnPaddle(0),e.add(this.mesh),this._trailGeo=new kt;const s=new ll({color:at.BALL,size:.14,transparent:!0,opacity:.65,depthWrite:!1,sizeAttenuation:!0});this._trailPoints=new Up(this._trailGeo,s),e.add(this._trailPoints)}isLaunched(){return this._launched}setSpeed(e){this._speed=e}followPaddle(e){this._launched||(this.mesh.position.x=e)}launch(e){this._launched=!0;const t=(Math.random()-.5)*.6,n=new L(Math.sin(t)*.5,.4,-1).normalize();return{x:this.mesh.position.x,y:this.mesh.position.y,z:this.mesh.position.z,vx:n.x*this._speed,vy:n.y*this._speed,vz:n.z*this._speed}}setPosition(e,t,n){this.mesh.position.set(e,t,n),this._recordTrail()}reset(e){this._launched=!1,this._trail=[],this._writeTrail(),this._placedOnPaddle(e)}_placedOnPaddle(e){this.mesh.position.set(e,lt.Y+lt.HEIGHT+pi.RADIUS+.05,lt.Z)}_recordTrail(){this._trail.unshift(this.mesh.position.clone()),this._trail.length>Yp&&this._trail.pop(),this._writeTrail()}_writeTrail(){const e=new Float32Array(this._trail.length*3);this._trail.forEach((t,n)=>{e[n*3]=t.x,e[n*3+1]=t.y,e[n*3+2]=t.z}),this._trailGeo.setAttribute("position",new Pt(e,3))}}const mr=Bt.WIDTH+Bt.GAP,jp=Bt.HEIGHT+Bt.GAP,_r=300,yo=[at.ARMORED_LOW,at.ARMORED_MID,at.ARMORED_FULL];class Kp{constructor(e){V(this,"_scene");V(this,"_mesh");V(this,"_bricks",[]);V(this,"_brickById",new Map);V(this,"_trollInstances",[]);V(this,"_fragments",new Map);V(this,"_dummy",new ct);V(this,"_activeCount",0);this._scene=e;const t=new on(Bt.WIDTH,Bt.HEIGHT,Bt.DEPTH),n=new xi({metalness:.3,roughness:.5});this._mesh=new Dp(t,n,_r),this._mesh.castShadow=!0,this._mesh.receiveShadow=!0,this._mesh.frustumCulled=!1,this._dummy.scale.set(0,0,0),this._dummy.updateMatrix();for(let s=0;s<_r;s++)this._mesh.setMatrixAt(s,this._dummy.matrix);this._mesh.instanceMatrix.needsUpdate=!0,e.add(this._mesh)}load(e){this._bricks=[],this._brickById.clear(),this._trollInstances=[],this._activeCount=0;const t=e.length,s=-(e[0].length*mr)/2+mr/2;this._dummy.scale.set(0,0,0),this._dummy.updateMatrix();for(let l=0;l<_r;l++)this._mesh.setMatrixAt(l,this._dummy.matrix);const r=[];let o=0,a=0;for(let l=0;l<t;l++)for(let c=0;c<e[l].length;c++){const h=e[l][c];if(h==="."||h===" ")continue;const d=h==="A"?"armored":h==="E"?"explosive":h==="T"?"troll":"standard",p=d==="armored"?3:1,m=s+c*mr,g=Bt.START_Y+(t-1-l)*jp+Bt.HEIGHT/2,M=Bt.START_Z,f={id:a,type:d,active:!0,hp:p,maxHp:p,x:m,y:g,z:M,row:l,instanceIndex:o};this._brickById.set(a,this._bricks.length),this._bricks.push(f),this._activeCount++,d==="troll"&&this._trollInstances.push(o),this._dummy.position.set(m,g,M),this._dummy.scale.set(1,1,1),this._dummy.rotation.set(0,0,0),this._dummy.updateMatrix(),this._mesh.setMatrixAt(o,this._dummy.matrix),this._mesh.setColorAt(o,new we(this._brickColor(f))),r.push({id:a,x:m,y:g,z:M,hp:p}),a++,o++}return this._mesh.count=o,this._mesh.instanceMatrix.needsUpdate=!0,this._mesh.instanceColor&&(this._mesh.instanceColor.needsUpdate=!0),r}get activeCount(){return this._activeCount}getBrickById(e){const t=this._brickById.get(e);return t!==void 0?this._bricks[t]:void 0}hitBrickById(e){const t=this._brickById.get(e);if(t===void 0)return!1;const n=this._bricks[t];return n.active?(n.hp--,n.hp>0?(this._mesh.setColorAt(n.instanceIndex,new we(yo[n.hp-1])),this._mesh.instanceColor&&(this._mesh.instanceColor.needsUpdate=!0),!1):this._destroyBrick(n)):!1}forceDestroyBrick(e){const t=this._brickById.get(e);if(t===void 0)return!1;const n=this._bricks[t];return n.active?(n.hp=0,this._destroyBrick(n)):!1}healBricksAround(e,t){const n=this.getBrickById(e);if(!n)return[];const s=[];for(const r of this._bricks){if(!r.active||r.id===e)continue;const o=r.x-n.x,a=r.y-n.y,l=r.z-n.z;Math.sqrt(o*o+a*a+l*l)>t||r.hp<r.maxHp&&(r.hp=r.maxHp,this._mesh.setColorAt(r.instanceIndex,new we(this._brickColor(r))),this._mesh.instanceColor&&(this._mesh.instanceColor.needsUpdate=!0),s.push({id:r.id,x:r.x,y:r.y,z:r.z,hp:r.hp}))}return s}updateTrollPulse(e){if(this._trollInstances.length===0)return;const t=.5+.5*Math.sin(e*4),n=Math.floor(0*255),s=Math.floor((.4+t*.6)*255),r=Math.floor(.2*255),o=new we(n/255,s/255,r/255);for(const a of this._trollInstances)this._bricks.find(c=>c.instanceIndex===a&&c.active)&&this._mesh.setColorAt(a,o);this._mesh.instanceColor&&(this._mesh.instanceColor.needsUpdate=!0)}getExplosionTargets(e,t){const n=this.getBrickById(e);if(!n)return[];const s=[];for(const r of this._bricks){if(!r.active||r.id===e)continue;const o=r.x-n.x,a=r.y-n.y,l=r.z-n.z;Math.sqrt(o*o+a*a+l*l)<t&&s.push(r.id)}return s}spawnFragmentMesh(e,t,n,s,r){const o=.08+Math.random()*.2,a=new ot(new on(o,o*.6,o*.5),new xi({color:r,emissive:new we(r),emissiveIntensity:1,transparent:!0,opacity:1}));a.position.set(t,n,s),this._scene.add(a),this._fragments.set(e,{mesh:a})}updateFragments(e,t){for(const n of e){const s=this._fragments.get(n.id);s&&(s.mesh.position.set(n.x,n.y,n.z),s.mesh.quaternion.set(n.qx,n.qy,n.qz,n.qw),s.mesh.material.opacity=Math.max(0,n.life))}for(const n of t){const s=this._fragments.get(n);s&&(this._scene.remove(s.mesh),s.mesh.geometry.dispose(),s.mesh.material.dispose(),this._fragments.delete(n))}}_destroyBrick(e){return e.active=!1,this._activeCount--,this._trollInstances=this._trollInstances.filter(t=>t!==e.instanceIndex),this._dummy.scale.set(0,0,0),this._dummy.updateMatrix(),this._mesh.setMatrixAt(e.instanceIndex,this._dummy.matrix),this._mesh.instanceMatrix.needsUpdate=!0,!0}_brickColor(e){return e.type==="explosive"?at.EXPLOSIVE:e.type==="troll"?at.TROLL:e.type==="armored"?yo[e.hp-1]:bs[e.row%bs.length]}}class Zp{constructor(){V(this,"_worker");V(this,"_ready",!1);V(this,"_queue",[]);V(this,"_stateHandler",null);this._worker=new Worker(new URL("/assets/PhysicsWorker-av7g5CWU.js",import.meta.url),{type:"module"}),this._worker.onmessage=e=>this._onMessage(e.data)}init(e){return new Promise(t=>{const n=s=>{s.data.type==="ready"&&(this._worker.removeEventListener("message",n),this._ready=!0,this._send({type:"init",arena:e}),this._flush(),t())};this._worker.addEventListener("message",n)})}set onState(e){this._stateHandler=e}loadBricks(e){this._send({type:"loadBricks",bricks:e})}removeBricks(e){this._send({type:"removeBricks",ids:e})}healBricks(e){this._send({type:"healBricks",bricks:e})}launchBall(e,t,n,s,r,o,a,l){this._send({type:"launchBall",x:e,y:t,z:n,vx:s,vy:r,vz:o,speed:a,radius:l})}resetBall(){this._send({type:"resetBall"})}setSpeed(e){this._send({type:"setSpeed",speed:e})}step(e,t){this._send({type:"step",dt:e,paddleX:t})}_send(e){this._ready?this._worker.postMessage(e):this._queue.push(e)}_flush(){for(const e of this._queue)this._worker.postMessage(e);this._queue=[]}_onMessage(e){var t;e.type==="state"&&((t=this._stateHandler)==null||t.call(this,e))}}class Jp{constructor(e){V(this,"def");this.def=e}}const In=[{id:1,name:"Hello World",world:"Neon City",ballSpeedMultiplier:1,grid:["SSSSSSSSSS","SSSSSSSSSS","SSSSSSSSSS","SSSSSSSSSS"]},{id:2,name:"Into the Void",world:"The Void",ballSpeedMultiplier:1.12,grid:["SAASSSAASS","SSSSS.....","SSSS......","SSS.......","SAASSSAASS"]},{id:3,name:"Mirror Mirror",world:"Mirror Dimension",ballSpeedMultiplier:1.25,grid:["....AA....","...SSSS...","..SSSSSS..",".SAAAAAS..","SSSSSSSSSS",".SAAAAAS..","..SSSSSS..","...SSSS...","....AA...."]},{id:4,name:"Raging Inferno",world:"Inferno",ballSpeedMultiplier:1.4,grid:["SSESSESSSE","SSSSSSSSSS","ESSSSSSSSE","SSSSSSSSSS","SSESSESSSE","SSSSSSSSSS","SSSSSSSSSS"]},{id:5,name:"The Pit",world:"The Roast Pit",ballSpeedMultiplier:1.6,grid:["AAASTSAAA.","S........S","S..ESTE..S","S.S....S.S","S.S....S.S","S..ESTE..S","S........S","AAASTSAAA."]}];function Qp(i,e){return i.replace(/\{(\w+)\}/g,(t,n)=>String(e[n]??`{${n}}`))}const Eo={0:[{text:"Oh good, you found the game. That's step one."},{text:"I'd wish you luck but I don't want to lie to your face this early."},{text:"Promising start. I mean, the game loaded. That part was promising."},{text:"The bricks are unaware of what's coming. Honestly, same."},{text:"Welcome. I'm already bracing myself."},{text:"The paddle is responding to your input. Exceeding expectations so far."},{text:"Don't worry, I grade on a curve. A very generous curve."},{text:"I've seen worse. Not recently, but historically."},{text:"You've located the ball. That's more than some manage."},{text:"Let's keep expectations appropriately managed."}],1:[{text:"The ball was RIGHT there. Like, right there. I'm concerned about your depth perception."},{text:"My grandma could've hit that and she's a JSON file."},{text:"You move the paddle with your mouse, not your thoughts. I checked."},{text:"That was... a choice. A wrong one, but still a choice."},{text:"I've seen better reflexes from a loading spinner."},{text:"The ball is not going to aim itself. Unfortunately."},{text:"You had a one-in-one chance to hit that. Math is having a rough day."},{text:"Was that intentional? I genuinely cannot tell."},{text:"Interesting strategy. By 'interesting' I mean 'incorrect.'"},{text:"The bricks are starting to feel comfortable. That's not good."},{text:"I've seen more precise movements from a trackpad on a bumpy bus."},{text:"The ball went exactly where you weren't. Impressive consistency."}],2:[{text:"Are you playing this with your feet? Genuine question."},{text:"I've seen better hand-eye coordination from a 404 error."},{text:"I'm going to file a missing persons report for your skill."},{text:"This is what happens when tutorials go unread."},{text:"I've recalibrated my expectations. Downward. Significantly."},{text:"At some point, the game has to wonder what it did wrong."},{text:"Your paddle moved. Unfortunately not toward the ball."},{text:"I'm not rooting against you. I'm just keeping realistic notes."},{text:"The ball has now traveled more distance than your skill level warrants."},{text:"We're at the stage where I have concerns I didn't have before."},{text:"I've stopped being surprised and started taking detailed notes."},{text:"The bricks filed a complaint. I'm reviewing it favorably."}],3:[{text:"If failure was a speedrun category, you'd still somehow be slow."},{text:"The ball has more purpose in life than this gameplay suggests."},{text:"You're not losing. Losing implies there was a competition."},{text:"I just checked — there IS a refund for the time I've spent watching you."},{text:"The bricks have started chatting amongst themselves. They feel safe."},{text:"Your paddle is doing its best. Your paddle deserves better."},{text:"I've seen more coordinated activity from a merge conflict."},{text:"The ball is trying. It really is. You're not helping it."},{text:"At this point, the arena is more of a witness than a venue."},{text:"I'm documenting this for science. Specifically, the science of failure."},{text:"The laws of physics are begging for you to work with them, not against them."},{text:"Something has gone structurally wrong here. I don't know what. Possibly everything."}],4:[{text:"I've started a support group for the pixels you've wasted."},{text:"Your paddle called. It wants to see other players."},{text:"I'm not mad. I'm just deeply, profoundly disappointed. Actually also mad."},{text:"I've seen better aim from a random number generator. I tested it. It won."},{text:"If your gameplay was a resume, the position would be eliminated."},{text:"The bricks have unionized. They're demanding a competent opponent."},{text:"This isn't a game anymore. This is performance art about failure."},{text:"I need you to understand that I've seen things. This is among the worst."},{text:"The arena has submitted a formal complaint. I'm reading it. It's quite long."},{text:"At some point the ball just gave up. I respect that decision."},{text:"There are people who have never played a game in their life who are doing better than this right now."},{text:"I've sent a wellness check to your hand-eye coordination. It's not responding."}],5:[{text:"Wait... was that on purpose? No way that was on purpose."},{text:"Okay that was almost impressive. Almost."},{text:"Don't let this streak go to your head. Your head clearly can't handle much."},{text:"I'd clap but I don't want to give you false confidence."},{text:"Something is working. I'm not sure what. Don't change it."},{text:"I'm cautiously pessimistic about your current momentum."},{text:"That combo was... competent. I didn't think I'd have to say that."},{text:"You're doing well, which means you're about to do something catastrophic."},{text:"Progress detected. My expectations were wrong. They have been updated."},{text:"If this keeps up I may have to switch to mild disappointment mode."}]},em={ball_lost:[{text:"And there it goes. Into the void. Like your dignity."},{text:"Ball lost. Along with the thread of what you were even trying to do."},{text:"{lives} lives remaining. Plan accordingly. Or don't. You won't."},{text:"The ball has retired from your care. Can't say I blame it."},{text:"Lost. Again. The ball is filing for separation."},{text:"I warned you. I did. You didn't listen. Nobody listens."}],afk:[{text:"Hello? Is anyone operating this paddle?"},{text:"I've detected what scientists call 'complete inaction.'"},{text:"The ball is still in play. You are not."},{text:"Taking a break? The bricks are using this time to train."},{text:"I've seen faster reaction times from a parked car."}],level_start:[{text:"New level. Fresh opportunity to disappoint me."},{text:"Bricks restored. Your competence, presumably, has not been."},{text:"Level {level}. Let's see if this is the one where things click."},{text:"The bricks have been briefed. They are not worried."},{text:"Another chance. Let's be honest about our expectations."}],level_clear:[{text:"You cleared it. I'm choosing to believe that was intentional."},{text:"Level cleared. I'll revise my threat assessment from 'none' to 'minimal.'"},{text:"Against all projections, you did it. Don't get comfortable."},{text:"Fine. You win this round. There are more rounds."},{text:"Cleared. The bricks were too shocked to object."}],game_over:[{text:"Game over. The bricks have won and they deserve it."},{text:"That's all. Review what happened here. Learn from it. Please."},{text:"Final score: {score}. I've seen more impressive numbers on a tax form."},{text:"The game is over. You have questions. The answers are uncomfortable."},{text:"You gave it everything. Everything was not enough."}],pause:[{text:"Paused. Taking stock? Taking a snack? Probably the snack."},{text:"Game paused while you consider your options. Consider them harder."},{text:"ESC pressed. The universal symbol of 'I need a moment.'"},{text:"Paused. Reflecting on choices. Good. There's a lot to reflect on."},{text:"You've paused again. The game is starting to take it personally."}],first_brick:[{text:"A brick. You hit a brick. The bare minimum has been achieved."},{text:"Solid contact. I'd say 'impressive' but we both know that's not right."},{text:"One down. The false confidence phase has begun."},{text:"First brick falls. Brief and unearned triumph acknowledged."},{text:"One brick. Good. Don't stop there. You usually stop there."}],combo:[{text:"×{combo}. I'm going to need to verify this data."},{text:"A {combo}-hit combo. I'll update my risk assessment."},{text:"You're hot right now. That usually precedes a catastrophic miss."},{text:"×{combo}. Noted. Updated. Still skeptical."},{text:"That combo is {combo} hits. My respect is building. Against my will."}],explosive:[{text:"Oh. OH. That's a lot of bricks gone at once. I didn't expect that either."},{text:"Chain reaction. Nice. I'm grudgingly acknowledging this."},{text:"The explosion was more impressive than your usual gameplay. I've noted this anomaly."},{text:"Boom. Multiple bricks. I'm recalculating everything."}],troll:[{text:"You're welcome. Those bricks needed that."},{text:"You hit the troll brick. That was my doing. I'm very proud of myself."},{text:"{healed} bricks restored. I'd say sorry but I'm not."},{text:"The troll brick has spoken. Progress has been reversed. I'm delighted."},{text:"I helped. You're welcome. Please don't thank me."}],flailing:[{text:"The paddle is statistically thrashing. Please calm down."},{text:"That's some erratic movement. Science would call this flailing."},{text:"I've seen calmer error logs than your paddle movement."},{text:"The paddle is doing its own thing. Unrelated to the ball's thing."},{text:"Stabilize. Please. For everyone's sake."}],camping:[{text:"The paddle is parked. The ball disagrees with this choice."},{text:"You've found a corner and you're staying there. Brave. Wrong, but brave."},{text:"I see the paddle has chosen one side of the arena to live in now."},{text:"Camping detected. The ball filed a complaint."},{text:"The paddle planted itself. The ball remains unimpressed."}]};class tm{constructor(){V(this,"onRoast",null);V(this,"_ballsLost",0);V(this,"_bricksCleared",0);V(this,"_combo",0);V(this,"_timeSinceHit",0);V(this,"_paddleIdleTime",0);V(this,"_lastPaddleX",0);V(this,"_firstBrick",!0);V(this,"_level",1);V(this,"_lives",3);V(this,"_score",0);V(this,"_ballLaunched",!1);V(this,"_posHistory",[]);V(this,"_flailWarned",!1);V(this,"_campTimer",0);V(this,"_campBaseline",0);V(this,"_campWarned",!1);V(this,"_tierUpdateTimer",0);V(this,"_roastCooldown",0);V(this,"_idleWarned",!1);V(this,"_currentTier",0);V(this,"_lastRoastIdx",-1);V(this,"frequencyMultiplier",1)}reset(){this._ballsLost=0,this._bricksCleared=0,this._combo=0,this._timeSinceHit=0,this._paddleIdleTime=0,this._firstBrick=!0,this._idleWarned=!1,this._flailWarned=!1,this._campWarned=!1,this._campTimer=0,this._posHistory=[],this._ballLaunched=!1,this._currentTier=0,this._roastCooldown=2}setBallLaunched(e){this._ballLaunched=e,e||(this._campTimer=0,this._campWarned=!1)}onLevelStart(e,t){this._level=e,this._lives=t,this._firstBrick=!0,this._ballsLost=0,this._bricksCleared=0,this._idleWarned=!1,this._flailWarned=!1,this._campWarned=!1,this._fire("level_start",{level:e})}onBrickHit(e){if(this._timeSinceHit=0,this._combo=e,this._idleWarned=!1,this._bricksCleared++,this._firstBrick){this._firstBrick=!1,this._fire("first_brick",{});return}e>0&&e%10===0&&this._fire("combo",{combo:e})}onBallLost(e){this._ballsLost++,this._lives=e,this._combo=0,this._updateTier(),this._fire("ball_lost",{lives:e})}onLevelClear(e){this._score=e,this._fire("level_clear",{score:e})}onGameOver(e){this._score=e,this._fire("game_over",{score:e})}onPause(){this._fire("pause",{})}onExplosion(){this._fire("explosive",{})}onTrollActivated(e){this._fire("troll",{healed:e})}tick(e,t){this._timeSinceHit+=e,Math.abs(t-this._lastPaddleX)>.05?(this._paddleIdleTime=0,this._idleWarned=!1):this._paddleIdleTime+=e,this._lastPaddleX=t,this._paddleIdleTime>8&&!this._idleWarned&&(this._idleWarned=!0,this._fire("afk",{})),this._posHistory.push(t),this._posHistory.length>30&&this._posHistory.shift(),this._posHistory.length>=20&&!this._flailWarned&&this._variance(this._posHistory)>4&&(this._flailWarned=!0,this._fire("flailing",{}),setTimeout(()=>{this._flailWarned=!1},1e4)),this._ballLaunched&&(Math.abs(t-this._campBaseline)<1?(this._campTimer+=e,this._campTimer>5&&!this._campWarned&&(this._campWarned=!0,this._fire("camping",{}))):(this._campBaseline=t,this._campTimer=0,this._campWarned=!1)),this._tierUpdateTimer-=e,this._tierUpdateTimer<=0&&(this._tierUpdateTimer=6,this._updateTier()),this._roastCooldown-=e*this.frequencyMultiplier,this._roastCooldown<=0&&this._currentTier<5&&this._fireTierRoast()}_updateTier(){if(this._combo>=10){this._currentTier=5;return}let e=this._ballsLost;this._timeSinceHit>4&&e++,this._combo>5&&e--,this._bricksCleared>0?this._ballsLost/this._bricksCleared>.15&&e++:this._ballsLost>0&&e++,this._currentTier=Math.max(0,Math.min(4,e))}_variance(e){const t=e.reduce((n,s)=>n+s,0)/e.length;return e.reduce((n,s)=>n+(s-t)**2,0)/e.length}_fireTierRoast(){const e=Eo[this._currentTier]??Eo[0],t=this._pickFrom(e),n=[8,7,5,4,3,6];this._roastCooldown=n[this._currentTier]??5,this._emit(t,this._currentTier)}_fire(e,t){const n=em[e];if(!(n!=null&&n.length))return;const s=this._pickFrom(n),r=Qp(s,{...t,level:this._level,lives:this._lives,score:this._score,combo:this._combo});this._emit(r,this._currentTier)}_pickFrom(e){if(e.length===1)return e[0].text;let t=Math.floor(Math.random()*e.length);return t===this._lastRoastIdx&&(t=(t+1)%e.length),this._lastRoastIdx=t,e[t].text}_emit(e,t){var n;(n=this.onRoast)==null||n.call(this,e,t)}}const nm=["#ffffff","#ffee88","#ffaa44","#ff6622","#ff2244","#88ffaa"],im=[24,26,28,30,36,22];class sm{constructor(e){V(this,"_scene");V(this,"_active",[]);this._scene=e}display(e,t){const n=document.createElement("canvas");n.width=640,n.height=96;const s=n.getContext("2d"),r=nm[t]??"#ffffff",o=im[t]??24;s.shadowColor=r,s.shadowBlur=18,s.font=`bold ${o}px 'Courier New', monospace`,s.fillStyle=r,s.textAlign="center",s.textBaseline="middle";const a=600,l=e.split(" "),c=[];let h="";for(const E of l){const v=h?`${h} ${E}`:E;s.measureText(v).width>a&&h?(c.push(h),h=E):h=v}h&&c.push(h),n.height=c.length*(o+8)+16,s.shadowColor=r,s.shadowBlur=18,s.font=`bold ${o}px 'Courier New', monospace`,s.fillStyle=r,s.textAlign="center",s.textBaseline="middle",c.forEach((E,v)=>{s.fillText(E,320,8+(v+.5)*(o+8))});const d=new Np(n),p=new al({map:d,transparent:!0,depthWrite:!1}),m=new Lp(p),g=n.width/n.height,M=t>=4?2.2:1.6;m.scale.set(M*g,M,1);const f=-4-Math.random()*4,u=(Math.random()-.5)*8;if(m.position.set(u,8+Math.random()*2,f),this._scene.add(m),this._active.push({sprite:m,life:1,vel:new L((Math.random()-.5)*.5,.6+Math.random()*.4,0)}),this._active.length>3){const E=this._active.shift();this._scene.remove(E.sprite)}}update(e){var n;for(let s=this._active.length-1;s>=0;s--){const r=this._active[s];r.life-=e/3.5,r.sprite.position.addScaledVector(r.vel,e),r.sprite.material.opacity=Math.max(0,r.life),r.life<=0&&(this._scene.remove(r.sprite),(n=r.sprite.material.map)==null||n.dispose(),r.sprite.material.dispose(),this._active.splice(s,1))}}}class rm{constructor(){V(this,"_synth",null);V(this,"_voice",null);V(this,"enabled",!0);"speechSynthesis"in window&&(this._synth=window.speechSynthesis,this._pickVoice(),speechSynthesis.onvoiceschanged!==void 0&&(speechSynthesis.onvoiceschanged=()=>this._pickVoice()))}_pickVoice(){const e=this._synth.getVoices(),t=[e.find(n=>/david|mark|fred|alex/i.test(n.name)),e.find(n=>n.lang==="en-US"&&!n.localService),e.find(n=>n.lang.startsWith("en")),e[0]];this._voice=t.find(Boolean)??null}speak(e,t){if(!this._synth||!this.enabled)return;this._synth.cancel();const n=new SpeechSynthesisUtterance(e);this._voice&&(n.voice=this._voice),n.rate=t>=4?.82:t>=2?.92:1,n.pitch=t>=4?.7:t>=2?.85:1,n.volume=.75,this._synth.speak(n)}cancel(){var e;(e=this._synth)==null||e.cancel()}}class am{constructor(){V(this,"_ctx",null);V(this,"_master",null);V(this,"volume",.5);V(this,"_listenerX",0);V(this,"_listenerY",7);V(this,"_listenerZ",22)}_ensure(){return this._ctx||(this._ctx=new AudioContext,this._master=this._ctx.createGain(),this._master.gain.value=this.volume,this._master.connect(this._ctx.destination)),this._ctx}setListenerPosition(e,t,n){if(this._listenerX=e,this._listenerY=t,this._listenerZ=n,!this._ctx)return;const s=this._ctx.listener;s.positionX&&(s.positionX.setValueAtTime(e,this._ctx.currentTime),s.positionY.setValueAtTime(t,this._ctx.currentTime),s.positionZ.setValueAtTime(n,this._ctx.currentTime))}_panner(e,t,n){const s=this._ensure(),r=s.createPanner();return r.panningModel="HRTF",r.distanceModel="inverse",r.refDistance=5,r.maxDistance=40,r.rolloffFactor=1,r.positionX.setValueAtTime(e,s.currentTime),r.positionY.setValueAtTime(t,s.currentTime),r.positionZ.setValueAtTime(n,s.currentTime),r.connect(this._master),r}_destination(e,t,n){if(e!==void 0&&t!==void 0&&n!==void 0)return this._panner(e,t,n);const r=this._ensure().createGain();return r.connect(this._master),r}_tone(e,t,n,s,r,o,a){const l=this._ensure(),c=l.createOscillator(),h=l.createGain();c.connect(h),h.connect(a??this._master),c.type=t;const d=l.currentTime;c.frequency.setValueAtTime(e,d),o!==void 0&&c.frequency.exponentialRampToValueAtTime(o,d+s),h.gain.setValueAtTime(0,d),h.gain.linearRampToValueAtTime(r,d+n),h.gain.exponentialRampToValueAtTime(.001,d+n+s),c.start(d),c.stop(d+n+s+.02)}_noise(e,t,n,s){const r=this._ensure(),o=Math.ceil(r.sampleRate*e),a=r.createBuffer(1,o,r.sampleRate),l=a.getChannelData(0);for(let p=0;p<o;p++)l[p]=(Math.random()*2-1)*(1-p/o);const c=r.createBufferSource();c.buffer=a;const h=r.createBiquadFilter();h.type="bandpass",h.frequency.value=t,h.Q.value=1.5;const d=r.createGain();c.connect(h),h.connect(d),d.connect(s??this._master),d.gain.setValueAtTime(n,r.currentTime),d.gain.exponentialRampToValueAtTime(.001,r.currentTime+e),c.start()}paddleHit(){this._tone(900,"sine",.002,.08,.18),this._tone(1400,"triangle",.001,.04,.08)}brickBreak(e=0,t,n,s){const r=800+e*120,o=t!==void 0?this._panner(t,n??5,s??-10):void 0;this._noise(.09,r,.22,o),this._tone(r*.6,"sawtooth",.001,.07,.12,r*.2,o)}armoredHit(e,t,n){const s=e!==void 0?this._panner(e,t??5,n??-10):void 0;this._tone(300,"square",.001,.12,.15,250,s),this._noise(.06,1200,.1,s)}explosion(e,t,n){const s=e!==void 0?this._panner(e,t??5,n??-10):void 0;this._tone(80,"sawtooth",.005,.5,.4,30,s),this._tone(55,"sine",.01,.8,.3,void 0,s),this._noise(.3,500,.35,s)}chainExplosion(e,t,n,s){for(let r=0;r<Math.min(e,5);r++)setTimeout(()=>this.explosion(t,n,s),r*80)}ballLost(){this._tone(440,"sine",.005,.9,.3,110),this._tone(330,"sine",.01,.6,.15,90)}levelClear(){[523,659,784,1047,1319].forEach((t,n)=>setTimeout(()=>this._tone(t,"triangle",.01,.2,.25),n*90))}comboMilestone(e){const t=400+Math.min(e,40)*20;this._tone(t,"square",.004,.06,.15),this._tone(t*1.5,"sine",.002,.05,.08)}menuSelect(){this._tone(660,"sine",.003,.07,.12)}trollHeal(){[523,659,784,1047].forEach((t,n)=>setTimeout(()=>this._tone(t,"triangle",.01,.15,.18),n*60))}paddleHitWithDoppler(e){const s=1+e/25*.5;this._tone(900*s,"sine",.002,.08,.18),this._tone(1400*s,"triangle",.001,.04,.08)}}const om="brick-roaster-3d",lm=1,pn="scores";class cm{constructor(){V(this,"_db",null)}async init(){return new Promise(e=>{const t=indexedDB.open(om,lm);t.onupgradeneeded=n=>{const s=n.target.result;s.objectStoreNames.contains(pn)||s.createObjectStore(pn,{keyPath:"level"})},t.onsuccess=n=>{this._db=n.target.result,e()},t.onerror=()=>e()})}async saveScore(e,t,n){if(!this._db)return;const s=n===0?3:n===1?2:1,r=await this.getRecord(e);if(!(r&&r.score>=t))return new Promise(o=>{const l=this._db.transaction(pn,"readwrite").objectStore(pn).put({level:e,score:t,stars:s});l.onsuccess=()=>o(),l.onerror=()=>o()})}async getRecord(e){return this._db?new Promise(t=>{const s=this._db.transaction(pn,"readonly").objectStore(pn).get(e);s.onsuccess=()=>t(s.result??null),s.onerror=()=>t(null)}):null}async getAllRecords(){return this._db?new Promise(e=>{const n=this._db.transaction(pn,"readonly").objectStore(pn).getAll();n.onsuccess=()=>e(n.result??[]),n.onerror=()=>e([])}):[]}async getStars(e){const t=await this.getRecord(e);return(t==null?void 0:t.stars)??0}async isLevelUnlocked(e){return e<=1?!0:await this.getRecord(e-1)!==null}async getLevelProgress(){const e=await this.getAllRecords(),t=new Map(e.map(n=>[n.level,n]));return[1,2,3,4,5].map(n=>{var s;return{level:n,unlocked:n===1||t.has(n-1),stars:((s=t.get(n))==null?void 0:s.stars)??0}})}}const hm=["xX_Paddle_Xx","BrickSlayer99","NotABot2024","totally_skilled","AverageGamer","JustHereToTry","CasualDestroyer","DefinitelyHuman","WontGiveUp","OneMoreGame","AlmostGotIt","ProGamer_lol","NightOwlPlays","MidnightBricks"];function um(i){const e=Math.max(300,i*.4),n=[...hm.map((s,r)=>({name:s,score:Math.max(0,Math.round(i+(Math.random()-.5)*e*2+(r-7)*80)),isPlayer:!1,rank:0})),{name:"YOU",score:i,isPlayer:!0,rank:0}];return n.sort((s,r)=>r.score-s.score),n.forEach((s,r)=>{s.rank=r+1}),n}class dm{constructor(){V(this,"_frames",[]);V(this,"_downgradeTimer",0);V(this,"_upgradeTimer",0);V(this,"_wakeLock",null);V(this,"quality","high");V(this,"onChange",null)}tick(e){if(this._frames.push(e),this._frames.length>60&&this._frames.shift(),this._frames.length<30)return;const n=1/(this._frames.reduce((s,r)=>s+r,0)/this._frames.length);n<40?(this._downgradeTimer+=e,this._upgradeTimer=0,this._downgradeTimer>3&&(this._downgradeTimer=0,this._downgrade())):n>58?(this._upgradeTimer+=e,this._downgradeTimer=0,this._upgradeTimer>10&&(this._upgradeTimer=0,this._upgrade())):(this._downgradeTimer=0,this._upgradeTimer=0)}_downgrade(){const e=["excessive","high","medium","low"],t=e.indexOf(this.quality);t<e.length-1&&this._set(e[t+1])}_upgrade(){const e=["low","medium","high"],t=e.indexOf(this.quality);t<e.length-1&&this._set(e[t+1])}_set(e){var t;this.quality!==e&&(this.quality=e,(t=this.onChange)==null||t.call(this,e))}async requestWakeLock(){if("wakeLock"in navigator)try{this._wakeLock=await navigator.wakeLock.request("screen")}catch{}}async requestFullscreen(e){if(!document.fullscreenElement)try{await e.requestFullscreen()}catch{}}}class fm{constructor(){V(this,"_arena");V(this,"_paddle");V(this,"_ball");V(this,"_bricks");V(this,"_physics");V(this,"_physicsReady",!1);V(this,"_roastEngine");V(this,"_roastRenderer");V(this,"_roastVoice");V(this,"_audio");V(this,"_save");V(this,"_perf");V(this,"_level",null);V(this,"_levelIndex",0);V(this,"_lives",3);V(this,"_ballsLostLevel",0);V(this,"_score",0);V(this,"_combo",0);V(this,"_won",!1);V(this,"_state","menu");V(this,"_keys",new Set);V(this,"_lastTime",0);V(this,"_levelClearTimer",0);V(this,"_shakeAmt",0);V(this,"_firstPlay",!0);V(this,"_hudLives");V(this,"_hudScore");V(this,"_hudCombo");V(this,"_hudLevel");V(this,"_overlay");V(this,"_lastQuality","");const e=document.getElementById("canvas-container");this._arena=new Xp(e),this._paddle=new qp(this._arena.scene,this._arena.renderer,this._keys),this._ball=new $p(this._arena.scene),this._bricks=new Kp(this._arena.scene),this._physics=new Zp,this._roastEngine=new tm,this._roastRenderer=new sm(this._arena.scene),this._roastVoice=new rm,this._audio=new am,this._save=new cm,this._perf=new dm,this._roastEngine.onRoast=(t,n)=>{this._roastRenderer.display(t,n),this._roastVoice.speak(t,n),n>=4&&(this._shakeAmt=Math.max(this._shakeAmt,.7),this._arena.flashSpotlight((Math.random()-.5)*6,8+Math.random()*2,-4-Math.random()*4))},this._perf.onChange=t=>console.log("[quality]",t),this._physics.onState=t=>this._handlePhysicsState(t),this._initHUD(),this._overlay=document.getElementById("overlay"),document.addEventListener("keydown",t=>{this._keys.add(t.key),this._handleKey(t.key)}),document.addEventListener("keyup",t=>this._keys.delete(t.key)),this._save.init(),this._physics.init({halfW:ke.HALF_W,halfD:ke.HALF_D,height:ke.HEIGHT,paddleZ:lt.Z,paddleWidth:lt.WIDTH,paddleHeight:lt.HEIGHT,paddleDepth:lt.DEPTH}).then(()=>{this._physicsReady=!0,this._state==="menu"&&this._showMenu()})}start(){this._setState("menu"),requestAnimationFrame(e=>this._loop(e))}_loop(e){var n,s,r;requestAnimationFrame(o=>this._loop(o));const t=Math.min((e-this._lastTime)/1e3,.05);if(this._lastTime=e,this._perf.tick(t),(this._state==="playing"||this._state==="levelclear")&&(this._paddle.update(t),this._roastEngine.tick(t,this._paddle.x),this._roastRenderer.update(t),this._bricks.updateTrollPulse(e/1e3),this._arena.updateSpotlight(t),(s=(n=this._arena._post)==null?void 0:n.setChromaticAberration)==null||s.call(n,this._shakeAmt),((r=this._arena._post)==null?void 0:r.enabled)!==void 0&&this._syncQuality(),this._state==="playing"?(this._ball.isLaunched()||(this._ball.followPaddle(this._paddle.x),this._physicsReady&&(this._keys.has(" ")||this._keys.has("Enter"))&&this._launchBall()),this._roastEngine.setBallLaunched(this._ball.isLaunched()),this._bricks.activeCount===0&&this._ball.isLaunched()&&this._combo>0&&this._onLevelClear()):(this._levelClearTimer-=t,this._levelClearTimer<=0&&this._nextLevel()),this._physicsReady&&this._physics.step(t,this._paddle.x)),this._shakeAmt>0){this._shakeAmt=Math.max(0,this._shakeAmt-t*5);const o=this._shakeAmt*.28;this._arena.camera.position.x=(Math.random()-.5)*o,this._arena.camera.position.y=7+(Math.random()-.5)*o*.5}else this._arena.camera.position.x+=(0-this._arena.camera.position.x)*.12,this._arena.camera.position.y+=(7-this._arena.camera.position.y)*.12;this._arena.render()}_handlePhysicsState(e){if(e.ball&&this._ball.isLaunched()&&this._ball.setPosition(e.ball.x,e.ball.y,e.ball.z),e.brickHits.length>0){const t=new Map(e.fragmentStates.map(s=>[s.id,s]));let n=!1;for(const s of e.brickHits){const r=this._bricks.getBrickById(s.brickId);if(!r)continue;if(!s.destroyed){this._bricks.hitBrickById(s.brickId),this._audio.armoredHit(),this._shakeAmt=Math.min(this._shakeAmt+.1,1);continue}const o=bs[r.row%bs.length];this._bricks.hitBrickById(s.brickId),this._audio.brickBreak(r.row),this._combo++,this._score+=100*Math.max(1,Math.floor(this._combo/3)),this._shakeAmt=Math.min(this._shakeAmt+.2,1),this._roastEngine.onBrickHit(this._combo);for(const a of s.newFragmentIds){const l=t.get(a);l&&this._bricks.spawnFragmentMesh(a,l.x,l.y,l.z,o)}if(r.type==="explosive"&&(n=!0,this._chainExplode(s.brickId,[s.brickId])),r.type==="troll"){const a=this._bricks.healBricksAround(s.brickId,2);a.length>0&&(this._physics.healBricks(a),this._roastEngine.onTrollActivated(a.length),this._audio.trollHeal())}this._combo>0&&this._combo%10===0&&this._audio.comboMilestone(this._combo),this._updateHUD()}n&&(this._audio.chainExplosion(3),this._roastEngine.onExplosion(),this._shakeAmt=Math.min(this._shakeAmt+.5,2))}(e.fragmentStates.length>0||e.fragmentsRemoved.length>0)&&this._bricks.updateFragments(e.fragmentStates,e.fragmentsRemoved),e.ballLost&&this._state==="playing"&&this._onBallLost()}_chainExplode(e,t){const n=this._bricks.getExplosionTargets(e,Bt.EXPLOSION_RADIUS);for(const s of n){if(t.includes(s))continue;const r=this._bricks.getBrickById(s);r!=null&&r.active&&(t.push(s),this._bricks.forceDestroyBrick(s),this._physics.removeBricks([s]),this._score+=50,r.type==="explosive"&&this._chainExplode(s,t))}this._updateHUD()}_syncQuality(){const e=this._perf.quality;if(e===this._lastQuality)return;this._lastQuality=e;const t=this._arena._post;t&&(t.enabled=e!=="low")}_idleSave(e,t,n){const s=()=>this._save.saveScore(e+1,t,n);typeof requestIdleCallback<"u"?requestIdleCallback(s):setTimeout(s,0)}_launchBall(){var n;const e=this._ball.launch(this._paddle.x),t=pi.INITIAL_SPEED*(((n=this._level)==null?void 0:n.def.ballSpeedMultiplier)??1);this._physics.launchBall(e.x,e.y,e.z,e.vx,e.vy,e.vz,t,pi.RADIUS)}_onBallLost(){this._combo=0,this._ballsLostLevel++,this._lives--,this._shakeAmt=1,this._updateHUD(),this._audio.ballLost(),this._roastEngine.onBallLost(this._lives),this._lives<=0?(this._roastEngine.onGameOver(this._score),this._setState("gameover")):(this._ball.reset(this._paddle.x),this._physics.resetBall(),this._paddle.setGlowColor(at.NEON_RED),setTimeout(()=>this._paddle.setGlowColor(at.NEON_CYAN),800))}_onLevelClear(){this._setState("levelclear"),this._levelClearTimer=2.5,this._audio.levelClear(),this._roastEngine.onLevelClear(this._score),this._idleSave(this._levelIndex,this._score,this._ballsLostLevel)}_loadLevel(e){if(e>=In.length){this._won=!0,this._setState("gameover");return}this._levelIndex=e,this._ballsLostLevel=0,this._level=new Jp(In[e]);const t=pi.INITIAL_SPEED*In[e].ballSpeedMultiplier,n=this._bricks.load(In[e].grid);this._physics.loadBricks(n),this._physics.setSpeed(t),this._ball.setSpeed(t),this._ball.reset(this._paddle.x),this._physics.resetBall(),this._roastEngine.onLevelStart(e+1,this._lives),this._updateHUD()}_nextLevel(){this._loadLevel(this._levelIndex+1),this._state!=="gameover"&&this._setState("playing")}_startGame(){if(this._lives=3,this._score=0,this._combo=0,this._won=!1,this._ballsLostLevel=0,this._roastEngine.reset(),this._loadLevel(0),this._setState("playing"),this._firstPlay){this._firstPlay=!1,this._perf.requestWakeLock(),this._perf.requestFullscreen(document.documentElement);const e=screen.orientation;e!=null&&e.lock&&e.lock("landscape").catch(()=>{})}}_setState(e){switch(this._state=e,this._updateHUD(),e){case"menu":this._showMenu();break;case"playing":this._hideOverlay();break;case"paused":this._showPause();break;case"levelclear":this._showLevelClear();break;case"gameover":this._showGameOver();break}}_handleKey(e){if(e==="Escape"){this._state==="playing"?(this._setState("paused"),this._roastEngine.onPause(),this._roastVoice.cancel()):this._state==="paused"&&this._setState("playing");return}if(e==="Enter"){this._state==="menu"?(this._audio.menuSelect(),this._startGame()):this._state==="gameover"?this._setState("menu"):this._state==="levelclear"&&(this._levelClearTimer=0);return}}_initHUD(){const e=document.getElementById("hud");e.innerHTML=`
      <style>
        @keyframes combo-glow { 0%,100%{text-shadow:0 0 10px #ffcc00} 50%{text-shadow:0 0 25px #ffcc00,0 0 50px #ffcc00} }
        @keyframes combo-fire { 0%{color:#ffcc00} 50%{color:#ff6622} 100%{color:#ffcc00} }
        @keyframes combo-nuclear { 0%{color:#ff2244;transform:scale(1)} 50%{color:#ffffff;transform:scale(1.08)} 100%{color:#ff2244;transform:scale(1)} }
        @keyframes lives-flash { 0%,100%{opacity:1} 50%{opacity:0.2} }
        .combo-glow    { animation: combo-glow 1s ease-in-out infinite }
        .combo-fire    { animation: combo-fire 0.5s ease-in-out infinite }
        .combo-nuclear { animation: combo-nuclear 0.3s ease-in-out infinite }
        .lives-danger  { animation: lives-flash 0.7s step-end infinite }
      </style>
      <div id="hud-lives" style="position:absolute;bottom:24px;left:24px;font-size:24px;color:#ff2244;text-shadow:0 0 10px #ff2244;letter-spacing:4px;"></div>
      <div id="hud-score" style="position:absolute;top:20px;left:50%;transform:translateX(-50%);font-size:28px;color:#00ffff;text-shadow:0 0 12px #00ffff;letter-spacing:2px;"></div>
      <div id="hud-combo" style="position:absolute;top:20px;right:24px;font-size:20px;color:#ffcc00;letter-spacing:1px;transition:color 0.3s;"></div>
      <div id="hud-level" style="position:absolute;top:20px;left:24px;font-size:13px;color:#445566;letter-spacing:1px;"></div>
    `,this._hudLives=document.getElementById("hud-lives"),this._hudScore=document.getElementById("hud-score"),this._hudCombo=document.getElementById("hud-combo"),this._hudLevel=document.getElementById("hud-level")}_updateHUD(){if(this._hudLives.textContent="♥".repeat(Math.max(0,this._lives))+"♡".repeat(Math.max(0,3-this._lives)),this._hudScore.textContent=this._score.toString().padStart(6,"0"),this._combo>=3){const e=this._combo>=20?"🔥":this._combo>=10?"⚡":"";this._hudCombo.textContent=`${e} ×${this._combo} COMBO`,this._hudCombo.className=this._combo>=20?"combo-nuclear":this._combo>=10?"combo-fire":this._combo>=5?"combo-glow":""}else this._hudCombo.textContent="",this._hudCombo.className="";if(this._hudLives.className=this._lives===1?"lives-danger":"",this._level){const e=!this._ball.isLaunched()&&!this._physicsReady?" · loading...":this._ball.isLaunched()?"":" · SPACE to launch";this._hudLevel.textContent=`LEVEL ${this._levelIndex+1} · ${this._level.def.world.toUpperCase()}${e}`}}_showMenu(){var t;this._overlay.classList.add("visible"),this._overlay.style.opacity="";const e=this._physicsReady?'<div style="color:#00ffff;font-size:20px;letter-spacing:2px;animation:blink 1s step-end infinite;">[ PRESS ENTER TO SUFFER ]</div>':'<div style="color:#445566;font-size:16px;letter-spacing:2px;animation:blink 0.5s step-end infinite;">initializing physics engine...</div>';this._overlay.innerHTML=`
      <div style="color:#00ffff;font-size:52px;letter-spacing:4px;text-shadow:0 0 20px #00ffff,0 0 60px #00ffff;animation:pulse 2s ease-in-out infinite;margin-bottom:10px;">BRICK ROASTER 3D</div>
      <div style="color:#ff00aa;font-size:17px;letter-spacing:3px;margin-bottom:44px;">YOUR PERFORMANCE WILL BE JUDGED</div>
      ${e}
      <div style="color:#334455;font-size:13px;margin-top:36px;line-height:2;">← → or A/D or MOUSE &nbsp;·&nbsp; SPACE to launch &nbsp;·&nbsp; ESC to pause</div>
      <div style="color:#223344;font-size:12px;margin-top:12px;">5 levels · armored bricks · explosive chain reactions · AI commentary</div>
      <div id="level-select-btn" style="color:#334455;font-size:13px;margin-top:16px;cursor:pointer;text-decoration:underline;">[level select]</div>
    `,(t=document.getElementById("level-select-btn"))==null||t.addEventListener("click",()=>this._showLevelSelectOverlay())}_showPause(){this._overlay.classList.add("visible"),this._overlay.innerHTML=`
      <div style="color:#ffcc00;font-size:30px;letter-spacing:3px;margin-bottom:20px;">INTERVENTION NOTICE</div>
      <div style="color:#667788;font-size:15px;line-height:2.0;max-width:420px;margin-bottom:28px;">
        We, the arena, have gathered today because we are concerned<br>about your gameplay choices. You paused. <em>Again.</em><br><br>
        Take a moment. Reflect. Maybe practice in your head.<br>It clearly isn't working in your hands.
      </div>
      <div style="color:#00ffff;font-size:17px;letter-spacing:1px;">[ ESC ] to reluctantly resume</div>
    `}_showLevelClear(){const e=this._level.def,t=this._levelIndex+1,n=t<In.length,s=this._ballsLostLevel===0?"★★★":this._ballsLostLevel===1?"★★☆":"★☆☆";this._overlay.classList.add("visible"),this._overlay.innerHTML=`
      <div style="color:#22cc44;font-size:40px;letter-spacing:3px;text-shadow:0 0 16px #22cc44;margin-bottom:8px;">LEVEL CLEAR</div>
      <div style="color:#ffcc00;font-size:28px;margin-bottom:4px;">${s}</div>
      <div style="color:#445566;font-size:16px;letter-spacing:2px;margin-bottom:6px;">${e.world.toUpperCase()} &mdash; ${e.name.toUpperCase()}</div>
      <div style="color:#ffcc00;font-size:26px;margin-bottom:24px;">${this._score.toString().padStart(6,"0")}</div>
      ${n?`<div style="color:#334455;font-size:13px;">Next: <span style="color:#00ffff;">${In[t].name}</span></div>`:'<div style="color:#ff2244;font-size:14px;">FINAL LEVEL</div>'}
      <div style="color:#223344;font-size:13px;margin-top:20px;">continuing automatically...</div>
    `}_showGameOver(){var c;const e=this._won,t=e?"#22cc44":"#ff2244",n=e?"Somehow, against all odds, you cleared all five levels.<br>Don't celebrate. It wasn't elegant. We both know that.":`You ran out of lives on level ${this._levelIndex+1}.<br>The bricks remained. Your dignity did not.`,s=um(this._score),r=((c=s.find(h=>h.isPlayer))==null?void 0:c.rank)??"?",o=s.slice(0,6).map(h=>`
      <tr style="color:${h.isPlayer?"#ffcc00":"#445566"}">
        <td style="padding:2px 12px">#${h.rank}</td>
        <td style="padding:2px 12px">${h.name}</td>
        <td style="padding:2px 12px">${h.score.toString().padStart(6,"0")}</td>
      </tr>`).join(""),l=e?"":`<div style="color:#556677;font-size:12px;margin-top:6px;">rank #${r} of 15. ${(typeof r=="number"?r:0)>10?"I see.":"Hm."}</div>`;this._showOverlayFade(`
      <div style="color:${t};font-size:48px;letter-spacing:4px;text-shadow:0 0 24px ${t};margin-bottom:14px;">${e?"YOU WIN":"GAME OVER"}</div>
      <div style="color:#556677;font-size:14px;line-height:2.0;max-width:460px;margin-bottom:18px;">${n}</div>
      <div style="color:#ffcc00;font-size:26px;letter-spacing:2px;margin-bottom:14px;">${this._score.toString().padStart(6,"0")} PTS</div>
      <table style="font-family:monospace;font-size:13px;margin-bottom:6px;text-align:left">${o}</table>
      ${l}
      <div style="color:#00ffff;font-size:16px;letter-spacing:2px;margin-top:20px;animation:blink 1s step-end infinite;">[ ENTER ] to try again and probably fail again</div>
    `)}_hideOverlay(){const e=this._overlay.animate([{opacity:"1"},{opacity:"0"}],{duration:200,fill:"forwards"});e.onfinish=()=>{this._overlay.classList.remove("visible"),this._overlay.style.opacity=""}}_showOverlayFade(e){this._overlay.innerHTML=e,this._overlay.classList.add("visible"),this._overlay.animate([{opacity:"0"},{opacity:"1"}],{duration:250,fill:"forwards"})}async _showLevelSelectOverlay(){const e=await this._save.getLevelProgress(),t=e.map(({level:n,unlocked:s,stars:r})=>{var l;const o="★".repeat(r)+"☆".repeat(3-r),a=((l=In[n-1])==null?void 0:l.world)??"";return`
        <div data-level="${n}" style="cursor:${s?"pointer":"default"};
          background:${s?"rgba(0,255,255,0.05)":"rgba(50,50,60,0.3)"};
          border:1px solid ${s?"#00ffff44":"#33334455"};
          border-radius:8px;padding:16px 20px;min-width:140px;
          color:${s?"#00ffff":"#444455"};text-align:center;">
          <div style="font-size:16px;letter-spacing:2px;">LEVEL ${n}</div>
          <div style="font-size:11px;color:#445566;margin:4px 0;">${a}</div>
          <div style="font-size:18px;color:#ffcc00;">${s?o:"🔒"}</div>
        </div>`}).join("");this._overlay.innerHTML=`
      <div style="color:#00ffff;font-size:28px;letter-spacing:3px;margin-bottom:24px;">SELECT LEVEL</div>
      <div id="level-cards" style="display:flex;gap:12px;flex-wrap:wrap;justify-content:center;max-width:700px;">${t}</div>
      <div style="color:#334455;font-size:13px;margin-top:24px;">[ESC] back</div>
    `,this._overlay.classList.add("visible"),this._overlay.animate([{opacity:"0"},{opacity:"1"}],{duration:250,fill:"forwards"}),document.getElementById("level-cards").addEventListener("click",n=>{const s=n.target.closest("[data-level]");if(!s)return;const r=parseInt(s.dataset.level??"1"),o=e.find(a=>a.level===r);o!=null&&o.unlocked&&(this._lives=3,this._score=0,this._combo=0,this._won=!1,this._roastEngine.reset(),this._loadLevel(r-1),this._setState("playing"))})}}const pm=new fm;pm.start();export{Vr as A,kt as B,_m as C,$t as F,Fi as H,Es as M,gn as N,wd as O,yn as S,Ic as U,be as V,Hn as W,we as a,L as b,ot as c};
