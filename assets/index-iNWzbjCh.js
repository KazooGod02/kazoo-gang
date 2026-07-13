(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const sl="169",Mh=0,Al=1,Rh=2,vu=1,Ch=2,En=3,Xn=0,Lt=1,Rn=2,jn=0,$i=1,Tl=2,Ml=3,Rl=4,Ph=5,hi=100,Lh=101,Oh=102,Ih=103,Uh=104,Nh=200,Dh=201,kh=202,Fh=203,Qa=204,eo=205,Bh=206,Hh=207,Gh=208,zh=209,Vh=210,Wh=211,$h=212,jh=213,qh=214,to=0,no=1,io=2,Yi=3,ro=4,so=5,ao=6,oo=7,yu=0,Xh=1,Kh=2,qn=0,Yh=1,Jh=2,Zh=3,Qh=4,ed=5,td=6,nd=7,Su=300,Ji=301,Zi=302,lo=303,co=304,Qs=306,uo=1e3,fi=1001,ho=1002,qt=1003,id=1004,qr=1005,sn=1006,ha=1007,pi=1008,Ln=1009,xu=1010,Eu=1011,Tr=1012,al=1013,vi=1014,Cn=1015,kr=1016,ol=1017,ll=1018,Qi=1020,wu=35902,bu=1021,Au=1022,on=1023,Tu=1024,Mu=1025,ji=1026,er=1027,Ru=1028,cl=1029,Cu=1030,ul=1031,hl=1033,Ps=33776,Ls=33777,Os=33778,Is=33779,fo=35840,po=35841,mo=35842,go=35843,_o=36196,vo=37492,yo=37496,So=37808,xo=37809,Eo=37810,wo=37811,bo=37812,Ao=37813,To=37814,Mo=37815,Ro=37816,Co=37817,Po=37818,Lo=37819,Oo=37820,Io=37821,Us=36492,Uo=36494,No=36495,Pu=36283,Do=36284,ko=36285,Fo=36286,rd=3200,sd=3201,ad=0,od=1,zn="",nn="srgb",Yn="srgb-linear",dl="display-p3",ea="display-p3-linear",Bs="linear",rt="srgb",Hs="rec709",Gs="p3",xi=7680,Cl=519,ld=512,cd=513,ud=514,Lu=515,hd=516,dd=517,fd=518,pd=519,Pl=35044,Ll="300 es",Pn=2e3,zs=2001;class nr{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const St=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ns=Math.PI/180,Bo=180/Math.PI;function Fr(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(St[n&255]+St[n>>8&255]+St[n>>16&255]+St[n>>24&255]+"-"+St[e&255]+St[e>>8&255]+"-"+St[e>>16&15|64]+St[e>>24&255]+"-"+St[t&63|128]+St[t>>8&255]+"-"+St[t>>16&255]+St[t>>24&255]+St[i&255]+St[i>>8&255]+St[i>>16&255]+St[i>>24&255]).toLowerCase()}function Ct(n,e,t){return Math.max(e,Math.min(t,n))}function md(n,e){return(n%e+e)%e}function da(n,e,t){return(1-t)*n+t*e}function ar(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Mt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class Qe{constructor(e=0,t=0){Qe.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Ct(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ne{constructor(e,t,i,r,s,a,o,l,c){Ne.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,l,c)}set(e,t,i,r,s,a,o,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=o,u[3]=t,u[4]=s,u[5]=l,u[6]=i,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],u=i[4],h=i[7],d=i[2],f=i[5],g=i[8],_=r[0],p=r[3],m=r[6],S=r[1],y=r[4],b=r[7],M=r[2],T=r[5],A=r[8];return s[0]=a*_+o*S+l*M,s[3]=a*p+o*y+l*T,s[6]=a*m+o*b+l*A,s[1]=c*_+u*S+h*M,s[4]=c*p+u*y+h*T,s[7]=c*m+u*b+h*A,s[2]=d*_+f*S+g*M,s[5]=d*p+f*y+g*T,s[8]=d*m+f*b+g*A,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-i*s*u+i*o*l+r*s*c-r*a*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=u*a-o*c,d=o*l-u*s,f=c*s-a*l,g=t*h+i*d+r*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=h*_,e[1]=(r*c-u*i)*_,e[2]=(o*i-r*a)*_,e[3]=d*_,e[4]=(u*t-r*l)*_,e[5]=(r*s-o*t)*_,e[6]=f*_,e[7]=(i*l-c*t)*_,e[8]=(a*t-i*s)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-r*c,r*l,-r*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(fa.makeScale(e,t)),this}rotate(e){return this.premultiply(fa.makeRotation(-e)),this}translate(e,t){return this.premultiply(fa.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const fa=new Ne;function Ou(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Mr(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function gd(){const n=Mr("canvas");return n.style.display="block",n}const Ol={};function Ds(n){n in Ol||(Ol[n]=!0,console.warn(n))}function _d(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}function vd(n){const e=n.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function yd(n){const e=n.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Il=new Ne().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Ul=new Ne().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),or={[Yn]:{transfer:Bs,primaries:Hs,luminanceCoefficients:[.2126,.7152,.0722],toReference:n=>n,fromReference:n=>n},[nn]:{transfer:rt,primaries:Hs,luminanceCoefficients:[.2126,.7152,.0722],toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[ea]:{transfer:Bs,primaries:Gs,luminanceCoefficients:[.2289,.6917,.0793],toReference:n=>n.applyMatrix3(Ul),fromReference:n=>n.applyMatrix3(Il)},[dl]:{transfer:rt,primaries:Gs,luminanceCoefficients:[.2289,.6917,.0793],toReference:n=>n.convertSRGBToLinear().applyMatrix3(Ul),fromReference:n=>n.applyMatrix3(Il).convertLinearToSRGB()}},Sd=new Set([Yn,ea]),qe={enabled:!0,_workingColorSpace:Yn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!Sd.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;const i=or[e].toReference,r=or[t].fromReference;return r(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this._workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this._workingColorSpace)},getPrimaries:function(n){return or[n].primaries},getTransfer:function(n){return n===zn?Bs:or[n].transfer},getLuminanceCoefficients:function(n,e=this._workingColorSpace){return n.fromArray(or[e].luminanceCoefficients)}};function qi(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function pa(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Ei;class xd{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Ei===void 0&&(Ei=Mr("canvas")),Ei.width=e.width,Ei.height=e.height;const i=Ei.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=Ei}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Mr("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=qi(s[a]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(qi(t[i]/255)*255):t[i]=qi(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Ed=0;class Iu{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Ed++}),this.uuid=Fr(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(ma(r[a].image)):s.push(ma(r[a]))}else s=ma(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function ma(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?xd.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let wd=0;class bt extends nr{constructor(e=bt.DEFAULT_IMAGE,t=bt.DEFAULT_MAPPING,i=fi,r=fi,s=sn,a=pi,o=on,l=Ln,c=bt.DEFAULT_ANISOTROPY,u=zn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:wd++}),this.uuid=Fr(),this.name="",this.source=new Iu(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Qe(0,0),this.repeat=new Qe(1,1),this.center=new Qe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ne,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Su)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case uo:e.x=e.x-Math.floor(e.x);break;case fi:e.x=e.x<0?0:1;break;case ho:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case uo:e.y=e.y-Math.floor(e.y);break;case fi:e.y=e.y<0?0:1;break;case ho:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}bt.DEFAULT_IMAGE=null;bt.DEFAULT_MAPPING=Su;bt.DEFAULT_ANISOTROPY=1;class ct{constructor(e=0,t=0,i=0,r=1){ct.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*i+a[11]*r+a[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,c=l[0],u=l[4],h=l[8],d=l[1],f=l[5],g=l[9],_=l[2],p=l[6],m=l[10];if(Math.abs(u-d)<.01&&Math.abs(h-_)<.01&&Math.abs(g-p)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+_)<.1&&Math.abs(g+p)<.1&&Math.abs(c+f+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const y=(c+1)/2,b=(f+1)/2,M=(m+1)/2,T=(u+d)/4,A=(h+_)/4,C=(g+p)/4;return y>b&&y>M?y<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(y),r=T/i,s=A/i):b>M?b<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(b),i=T/r,s=C/r):M<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(M),i=A/s,r=C/s),this.set(i,r,s,t),this}let S=Math.sqrt((p-g)*(p-g)+(h-_)*(h-_)+(d-u)*(d-u));return Math.abs(S)<.001&&(S=1),this.x=(p-g)/S,this.y=(h-_)/S,this.z=(d-u)/S,this.w=Math.acos((c+f+m-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class bd extends nr{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new ct(0,0,e,t),this.scissorTest=!1,this.viewport=new ct(0,0,e,t);const r={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:sn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new bt(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Iu(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class yi extends bd{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Uu extends bt{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=qt,this.minFilter=qt,this.wrapR=fi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Ad extends bt{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=qt,this.minFilter=qt,this.wrapR=fi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Br{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,a,o){let l=i[r+0],c=i[r+1],u=i[r+2],h=i[r+3];const d=s[a+0],f=s[a+1],g=s[a+2],_=s[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(o===1){e[t+0]=d,e[t+1]=f,e[t+2]=g,e[t+3]=_;return}if(h!==_||l!==d||c!==f||u!==g){let p=1-o;const m=l*d+c*f+u*g+h*_,S=m>=0?1:-1,y=1-m*m;if(y>Number.EPSILON){const M=Math.sqrt(y),T=Math.atan2(M,m*S);p=Math.sin(p*T)/M,o=Math.sin(o*T)/M}const b=o*S;if(l=l*p+d*b,c=c*p+f*b,u=u*p+g*b,h=h*p+_*b,p===1-o){const M=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=M,c*=M,u*=M,h*=M}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,i,r,s,a){const o=i[r],l=i[r+1],c=i[r+2],u=i[r+3],h=s[a],d=s[a+1],f=s[a+2],g=s[a+3];return e[t]=o*g+u*h+l*f-c*d,e[t+1]=l*g+u*d+c*h-o*f,e[t+2]=c*g+u*f+o*d-l*h,e[t+3]=u*g-o*h-l*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),u=o(r/2),h=o(s/2),d=l(i/2),f=l(r/2),g=l(s/2);switch(a){case"XYZ":this._x=d*u*h+c*f*g,this._y=c*f*h-d*u*g,this._z=c*u*g+d*f*h,this._w=c*u*h-d*f*g;break;case"YXZ":this._x=d*u*h+c*f*g,this._y=c*f*h-d*u*g,this._z=c*u*g-d*f*h,this._w=c*u*h+d*f*g;break;case"ZXY":this._x=d*u*h-c*f*g,this._y=c*f*h+d*u*g,this._z=c*u*g+d*f*h,this._w=c*u*h-d*f*g;break;case"ZYX":this._x=d*u*h-c*f*g,this._y=c*f*h+d*u*g,this._z=c*u*g-d*f*h,this._w=c*u*h+d*f*g;break;case"YZX":this._x=d*u*h+c*f*g,this._y=c*f*h+d*u*g,this._z=c*u*g-d*f*h,this._w=c*u*h-d*f*g;break;case"XZY":this._x=d*u*h-c*f*g,this._y=c*f*h-d*u*g,this._z=c*u*g+d*f*h,this._w=c*u*h+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],h=t[10],d=i+o+h;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(u-l)*f,this._y=(s-c)*f,this._z=(a-r)*f}else if(i>o&&i>h){const f=2*Math.sqrt(1+i-o-h);this._w=(u-l)/f,this._x=.25*f,this._y=(r+a)/f,this._z=(s+c)/f}else if(o>h){const f=2*Math.sqrt(1+o-i-h);this._w=(s-c)/f,this._x=(r+a)/f,this._y=.25*f,this._z=(l+u)/f}else{const f=2*Math.sqrt(1+h-i-o);this._w=(a-r)/f,this._x=(s+c)/f,this._y=(l+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ct(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+a*o+r*c-s*l,this._y=r*u+a*l+s*o-i*c,this._z=s*u+a*c+i*l-r*o,this._w=a*u-i*o-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,a=this._w;let o=a*e._w+i*e._x+r*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=i,this._y=r,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const f=1-t;return this._w=f*a+t*this._w,this._x=f*i+t*this._x,this._y=f*r+t*this._y,this._z=f*s+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,o),h=Math.sin((1-t)*u)/c,d=Math.sin(t*u)/c;return this._w=a*h+this._w*d,this._x=i*h+this._x*d,this._y=r*h+this._y*d,this._z=s*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class j{constructor(e=0,t=0,i=0){j.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Nl.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Nl.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*r-o*i),u=2*(o*t-s*r),h=2*(s*i-a*t);return this.x=t+l*c+a*h-o*u,this.y=i+l*u+o*c-s*h,this.z=r+l*h+s*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=r*l-s*o,this.y=s*a-i*l,this.z=i*o-r*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return ga.copy(this).projectOnVector(e),this.sub(ga)}reflect(e){return this.sub(ga.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Ct(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ga=new j,Nl=new Br;class Hr{constructor(e=new j(1/0,1/0,1/0),t=new j(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Yt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Yt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Yt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Yt):Yt.fromBufferAttribute(s,a),Yt.applyMatrix4(e.matrixWorld),this.expandByPoint(Yt);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Xr.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Xr.copy(i.boundingBox)),Xr.applyMatrix4(e.matrixWorld),this.union(Xr)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Yt),Yt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(lr),Kr.subVectors(this.max,lr),wi.subVectors(e.a,lr),bi.subVectors(e.b,lr),Ai.subVectors(e.c,lr),Nn.subVectors(bi,wi),Dn.subVectors(Ai,bi),Zn.subVectors(wi,Ai);let t=[0,-Nn.z,Nn.y,0,-Dn.z,Dn.y,0,-Zn.z,Zn.y,Nn.z,0,-Nn.x,Dn.z,0,-Dn.x,Zn.z,0,-Zn.x,-Nn.y,Nn.x,0,-Dn.y,Dn.x,0,-Zn.y,Zn.x,0];return!_a(t,wi,bi,Ai,Kr)||(t=[1,0,0,0,1,0,0,0,1],!_a(t,wi,bi,Ai,Kr))?!1:(Yr.crossVectors(Nn,Dn),t=[Yr.x,Yr.y,Yr.z],_a(t,wi,bi,Ai,Kr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Yt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Yt).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(mn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),mn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),mn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),mn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),mn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),mn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),mn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),mn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(mn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const mn=[new j,new j,new j,new j,new j,new j,new j,new j],Yt=new j,Xr=new Hr,wi=new j,bi=new j,Ai=new j,Nn=new j,Dn=new j,Zn=new j,lr=new j,Kr=new j,Yr=new j,Qn=new j;function _a(n,e,t,i,r){for(let s=0,a=n.length-3;s<=a;s+=3){Qn.fromArray(n,s);const o=r.x*Math.abs(Qn.x)+r.y*Math.abs(Qn.y)+r.z*Math.abs(Qn.z),l=e.dot(Qn),c=t.dot(Qn),u=i.dot(Qn);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const Td=new Hr,cr=new j,va=new j;class ta{constructor(e=new j,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):Td.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;cr.subVectors(e,this.center);const t=cr.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(cr,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(va.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(cr.copy(e.center).add(va)),this.expandByPoint(cr.copy(e.center).sub(va))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const gn=new j,ya=new j,Jr=new j,kn=new j,Sa=new j,Zr=new j,xa=new j;class Nu{constructor(e=new j,t=new j(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,gn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=gn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(gn.copy(this.origin).addScaledVector(this.direction,t),gn.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){ya.copy(e).add(t).multiplyScalar(.5),Jr.copy(t).sub(e).normalize(),kn.copy(this.origin).sub(ya);const s=e.distanceTo(t)*.5,a=-this.direction.dot(Jr),o=kn.dot(this.direction),l=-kn.dot(Jr),c=kn.lengthSq(),u=Math.abs(1-a*a);let h,d,f,g;if(u>0)if(h=a*l-o,d=a*o-l,g=s*u,h>=0)if(d>=-g)if(d<=g){const _=1/u;h*=_,d*=_,f=h*(h+a*d+2*o)+d*(a*h+d+2*l)+c}else d=s,h=Math.max(0,-(a*d+o)),f=-h*h+d*(d+2*l)+c;else d=-s,h=Math.max(0,-(a*d+o)),f=-h*h+d*(d+2*l)+c;else d<=-g?(h=Math.max(0,-(-a*s+o)),d=h>0?-s:Math.min(Math.max(-s,-l),s),f=-h*h+d*(d+2*l)+c):d<=g?(h=0,d=Math.min(Math.max(-s,-l),s),f=d*(d+2*l)+c):(h=Math.max(0,-(a*s+o)),d=h>0?s:Math.min(Math.max(-s,-l),s),f=-h*h+d*(d+2*l)+c);else d=a>0?-s:s,h=Math.max(0,-(a*d+o)),f=-h*h+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(ya).addScaledVector(Jr,d),f}intersectSphere(e,t){gn.subVectors(e.center,this.origin);const i=gn.dot(this.direction),r=gn.dot(gn)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),u>=0?(s=(e.min.y-d.y)*u,a=(e.max.y-d.y)*u):(s=(e.max.y-d.y)*u,a=(e.min.y-d.y)*u),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),h>=0?(o=(e.min.z-d.z)*h,l=(e.max.z-d.z)*h):(o=(e.max.z-d.z)*h,l=(e.min.z-d.z)*h),i>l||o>r)||((o>i||i!==i)&&(i=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,gn)!==null}intersectTriangle(e,t,i,r,s){Sa.subVectors(t,e),Zr.subVectors(i,e),xa.crossVectors(Sa,Zr);let a=this.direction.dot(xa),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;kn.subVectors(this.origin,e);const l=o*this.direction.dot(Zr.crossVectors(kn,Zr));if(l<0)return null;const c=o*this.direction.dot(Sa.cross(kn));if(c<0||l+c>a)return null;const u=-o*kn.dot(xa);return u<0?null:this.at(u/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ut{constructor(e,t,i,r,s,a,o,l,c,u,h,d,f,g,_,p){ut.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,l,c,u,h,d,f,g,_,p)}set(e,t,i,r,s,a,o,l,c,u,h,d,f,g,_,p){const m=this.elements;return m[0]=e,m[4]=t,m[8]=i,m[12]=r,m[1]=s,m[5]=a,m[9]=o,m[13]=l,m[2]=c,m[6]=u,m[10]=h,m[14]=d,m[3]=f,m[7]=g,m[11]=_,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ut().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/Ti.setFromMatrixColumn(e,0).length(),s=1/Ti.setFromMatrixColumn(e,1).length(),a=1/Ti.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const d=a*u,f=a*h,g=o*u,_=o*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=f+g*c,t[5]=d-_*c,t[9]=-o*l,t[2]=_-d*c,t[6]=g+f*c,t[10]=a*l}else if(e.order==="YXZ"){const d=l*u,f=l*h,g=c*u,_=c*h;t[0]=d+_*o,t[4]=g*o-f,t[8]=a*c,t[1]=a*h,t[5]=a*u,t[9]=-o,t[2]=f*o-g,t[6]=_+d*o,t[10]=a*l}else if(e.order==="ZXY"){const d=l*u,f=l*h,g=c*u,_=c*h;t[0]=d-_*o,t[4]=-a*h,t[8]=g+f*o,t[1]=f+g*o,t[5]=a*u,t[9]=_-d*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const d=a*u,f=a*h,g=o*u,_=o*h;t[0]=l*u,t[4]=g*c-f,t[8]=d*c+_,t[1]=l*h,t[5]=_*c+d,t[9]=f*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const d=a*l,f=a*c,g=o*l,_=o*c;t[0]=l*u,t[4]=_-d*h,t[8]=g*h+f,t[1]=h,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=f*h+g,t[10]=d-_*h}else if(e.order==="XZY"){const d=a*l,f=a*c,g=o*l,_=o*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=d*h+_,t[5]=a*u,t[9]=f*h-g,t[2]=g*h-f,t[6]=o*u,t[10]=_*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Md,e,Rd)}lookAt(e,t,i){const r=this.elements;return Dt.subVectors(e,t),Dt.lengthSq()===0&&(Dt.z=1),Dt.normalize(),Fn.crossVectors(i,Dt),Fn.lengthSq()===0&&(Math.abs(i.z)===1?Dt.x+=1e-4:Dt.z+=1e-4,Dt.normalize(),Fn.crossVectors(i,Dt)),Fn.normalize(),Qr.crossVectors(Dt,Fn),r[0]=Fn.x,r[4]=Qr.x,r[8]=Dt.x,r[1]=Fn.y,r[5]=Qr.y,r[9]=Dt.y,r[2]=Fn.z,r[6]=Qr.z,r[10]=Dt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],u=i[1],h=i[5],d=i[9],f=i[13],g=i[2],_=i[6],p=i[10],m=i[14],S=i[3],y=i[7],b=i[11],M=i[15],T=r[0],A=r[4],C=r[8],D=r[12],v=r[1],x=r[5],P=r[9],L=r[13],I=r[2],F=r[6],z=r[10],G=r[14],V=r[3],se=r[7],le=r[11],pe=r[15];return s[0]=a*T+o*v+l*I+c*V,s[4]=a*A+o*x+l*F+c*se,s[8]=a*C+o*P+l*z+c*le,s[12]=a*D+o*L+l*G+c*pe,s[1]=u*T+h*v+d*I+f*V,s[5]=u*A+h*x+d*F+f*se,s[9]=u*C+h*P+d*z+f*le,s[13]=u*D+h*L+d*G+f*pe,s[2]=g*T+_*v+p*I+m*V,s[6]=g*A+_*x+p*F+m*se,s[10]=g*C+_*P+p*z+m*le,s[14]=g*D+_*L+p*G+m*pe,s[3]=S*T+y*v+b*I+M*V,s[7]=S*A+y*x+b*F+M*se,s[11]=S*C+y*P+b*z+M*le,s[15]=S*D+y*L+b*G+M*pe,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],h=e[6],d=e[10],f=e[14],g=e[3],_=e[7],p=e[11],m=e[15];return g*(+s*l*h-r*c*h-s*o*d+i*c*d+r*o*f-i*l*f)+_*(+t*l*f-t*c*d+s*a*d-r*a*f+r*c*u-s*l*u)+p*(+t*c*h-t*o*f-s*a*h+i*a*f+s*o*u-i*c*u)+m*(-r*o*u-t*l*h+t*o*d+r*a*h-i*a*d+i*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=e[9],d=e[10],f=e[11],g=e[12],_=e[13],p=e[14],m=e[15],S=h*p*c-_*d*c+_*l*f-o*p*f-h*l*m+o*d*m,y=g*d*c-u*p*c-g*l*f+a*p*f+u*l*m-a*d*m,b=u*_*c-g*h*c+g*o*f-a*_*f-u*o*m+a*h*m,M=g*h*l-u*_*l-g*o*d+a*_*d+u*o*p-a*h*p,T=t*S+i*y+r*b+s*M;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/T;return e[0]=S*A,e[1]=(_*d*s-h*p*s-_*r*f+i*p*f+h*r*m-i*d*m)*A,e[2]=(o*p*s-_*l*s+_*r*c-i*p*c-o*r*m+i*l*m)*A,e[3]=(h*l*s-o*d*s-h*r*c+i*d*c+o*r*f-i*l*f)*A,e[4]=y*A,e[5]=(u*p*s-g*d*s+g*r*f-t*p*f-u*r*m+t*d*m)*A,e[6]=(g*l*s-a*p*s-g*r*c+t*p*c+a*r*m-t*l*m)*A,e[7]=(a*d*s-u*l*s+u*r*c-t*d*c-a*r*f+t*l*f)*A,e[8]=b*A,e[9]=(g*h*s-u*_*s-g*i*f+t*_*f+u*i*m-t*h*m)*A,e[10]=(a*_*s-g*o*s+g*i*c-t*_*c-a*i*m+t*o*m)*A,e[11]=(u*o*s-a*h*s-u*i*c+t*h*c+a*i*f-t*o*f)*A,e[12]=M*A,e[13]=(u*_*r-g*h*r+g*i*d-t*_*d-u*i*p+t*h*p)*A,e[14]=(g*o*r-a*_*r-g*i*l+t*_*l+a*i*p-t*o*p)*A,e[15]=(a*h*r-u*o*r+u*i*l-t*h*l-a*i*d+t*o*d)*A,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,a=e.x,o=e.y,l=e.z,c=s*a,u=s*o;return this.set(c*a+i,c*o-r*l,c*l+r*o,0,c*o+r*l,u*o+i,u*l-r*a,0,c*l-r*o,u*l+r*a,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,u=a+a,h=o+o,d=s*c,f=s*u,g=s*h,_=a*u,p=a*h,m=o*h,S=l*c,y=l*u,b=l*h,M=i.x,T=i.y,A=i.z;return r[0]=(1-(_+m))*M,r[1]=(f+b)*M,r[2]=(g-y)*M,r[3]=0,r[4]=(f-b)*T,r[5]=(1-(d+m))*T,r[6]=(p+S)*T,r[7]=0,r[8]=(g+y)*A,r[9]=(p-S)*A,r[10]=(1-(d+_))*A,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=Ti.set(r[0],r[1],r[2]).length();const a=Ti.set(r[4],r[5],r[6]).length(),o=Ti.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Jt.copy(this);const c=1/s,u=1/a,h=1/o;return Jt.elements[0]*=c,Jt.elements[1]*=c,Jt.elements[2]*=c,Jt.elements[4]*=u,Jt.elements[5]*=u,Jt.elements[6]*=u,Jt.elements[8]*=h,Jt.elements[9]*=h,Jt.elements[10]*=h,t.setFromRotationMatrix(Jt),i.x=s,i.y=a,i.z=o,this}makePerspective(e,t,i,r,s,a,o=Pn){const l=this.elements,c=2*s/(t-e),u=2*s/(i-r),h=(t+e)/(t-e),d=(i+r)/(i-r);let f,g;if(o===Pn)f=-(a+s)/(a-s),g=-2*a*s/(a-s);else if(o===zs)f=-a/(a-s),g=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,r,s,a,o=Pn){const l=this.elements,c=1/(t-e),u=1/(i-r),h=1/(a-s),d=(t+e)*c,f=(i+r)*u;let g,_;if(o===Pn)g=(a+s)*h,_=-2*h;else if(o===zs)g=s*h,_=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Ti=new j,Jt=new ut,Md=new j(0,0,0),Rd=new j(1,1,1),Fn=new j,Qr=new j,Dt=new j,Dl=new ut,kl=new Br;class On{constructor(e=0,t=0,i=0,r=On.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],u=r[9],h=r[2],d=r[6],f=r[10];switch(t){case"XYZ":this._y=Math.asin(Ct(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ct(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(Ct(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Ct(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Ct(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-Ct(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Dl.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Dl,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return kl.setFromEuler(this),this.setFromQuaternion(kl,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}On.DEFAULT_ORDER="XYZ";class Du{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Cd=0;const Fl=new j,Mi=new Br,_n=new ut,es=new j,ur=new j,Pd=new j,Ld=new Br,Bl=new j(1,0,0),Hl=new j(0,1,0),Gl=new j(0,0,1),zl={type:"added"},Od={type:"removed"},Ri={type:"childadded",child:null},Ea={type:"childremoved",child:null};class Ot extends nr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Cd++}),this.uuid=Fr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ot.DEFAULT_UP.clone();const e=new j,t=new On,i=new Br,r=new j(1,1,1);function s(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new ut},normalMatrix:{value:new Ne}}),this.matrix=new ut,this.matrixWorld=new ut,this.matrixAutoUpdate=Ot.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ot.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Du,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Mi.setFromAxisAngle(e,t),this.quaternion.multiply(Mi),this}rotateOnWorldAxis(e,t){return Mi.setFromAxisAngle(e,t),this.quaternion.premultiply(Mi),this}rotateX(e){return this.rotateOnAxis(Bl,e)}rotateY(e){return this.rotateOnAxis(Hl,e)}rotateZ(e){return this.rotateOnAxis(Gl,e)}translateOnAxis(e,t){return Fl.copy(e).applyQuaternion(this.quaternion),this.position.add(Fl.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Bl,e)}translateY(e){return this.translateOnAxis(Hl,e)}translateZ(e){return this.translateOnAxis(Gl,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(_n.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?es.copy(e):es.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),ur.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?_n.lookAt(ur,es,this.up):_n.lookAt(es,ur,this.up),this.quaternion.setFromRotationMatrix(_n),r&&(_n.extractRotation(r.matrixWorld),Mi.setFromRotationMatrix(_n),this.quaternion.premultiply(Mi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(zl),Ri.child=e,this.dispatchEvent(Ri),Ri.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Od),Ea.child=e,this.dispatchEvent(Ea),Ea.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),_n.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),_n.multiply(e.parent.matrixWorld)),e.applyMatrix4(_n),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(zl),Ri.child=e,this.dispatchEvent(Ri),Ri.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ur,e,Pd),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ur,Ld,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),h=a(e.shapes),d=a(e.skeletons),f=a(e.animations),g=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),h.length>0&&(i.shapes=h),d.length>0&&(i.skeletons=d),f.length>0&&(i.animations=f),g.length>0&&(i.nodes=g)}return i.object=r,i;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Ot.DEFAULT_UP=new j(0,1,0);Ot.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ot.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Zt=new j,vn=new j,wa=new j,yn=new j,Ci=new j,Pi=new j,Vl=new j,ba=new j,Aa=new j,Ta=new j,Ma=new ct,Ra=new ct,Ca=new ct;class jt{constructor(e=new j,t=new j,i=new j){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),Zt.subVectors(e,t),r.cross(Zt);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){Zt.subVectors(r,t),vn.subVectors(i,t),wa.subVectors(e,t);const a=Zt.dot(Zt),o=Zt.dot(vn),l=Zt.dot(wa),c=vn.dot(vn),u=vn.dot(wa),h=a*c-o*o;if(h===0)return s.set(0,0,0),null;const d=1/h,f=(c*l-o*u)*d,g=(a*u-o*l)*d;return s.set(1-f-g,g,f)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,yn)===null?!1:yn.x>=0&&yn.y>=0&&yn.x+yn.y<=1}static getInterpolation(e,t,i,r,s,a,o,l){return this.getBarycoord(e,t,i,r,yn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,yn.x),l.addScaledVector(a,yn.y),l.addScaledVector(o,yn.z),l)}static getInterpolatedAttribute(e,t,i,r,s,a){return Ma.setScalar(0),Ra.setScalar(0),Ca.setScalar(0),Ma.fromBufferAttribute(e,t),Ra.fromBufferAttribute(e,i),Ca.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(Ma,s.x),a.addScaledVector(Ra,s.y),a.addScaledVector(Ca,s.z),a}static isFrontFacing(e,t,i,r){return Zt.subVectors(i,t),vn.subVectors(e,t),Zt.cross(vn).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Zt.subVectors(this.c,this.b),vn.subVectors(this.a,this.b),Zt.cross(vn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return jt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return jt.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return jt.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return jt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return jt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let a,o;Ci.subVectors(r,i),Pi.subVectors(s,i),ba.subVectors(e,i);const l=Ci.dot(ba),c=Pi.dot(ba);if(l<=0&&c<=0)return t.copy(i);Aa.subVectors(e,r);const u=Ci.dot(Aa),h=Pi.dot(Aa);if(u>=0&&h<=u)return t.copy(r);const d=l*h-u*c;if(d<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(i).addScaledVector(Ci,a);Ta.subVectors(e,s);const f=Ci.dot(Ta),g=Pi.dot(Ta);if(g>=0&&f<=g)return t.copy(s);const _=f*c-l*g;if(_<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(i).addScaledVector(Pi,o);const p=u*g-f*h;if(p<=0&&h-u>=0&&f-g>=0)return Vl.subVectors(s,r),o=(h-u)/(h-u+(f-g)),t.copy(r).addScaledVector(Vl,o);const m=1/(p+_+d);return a=_*m,o=d*m,t.copy(i).addScaledVector(Ci,a).addScaledVector(Pi,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const ku={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Bn={h:0,s:0,l:0},ts={h:0,s:0,l:0};function Pa(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class Ke{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=nn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,qe.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=qe.workingColorSpace){return this.r=e,this.g=t,this.b=i,qe.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=qe.workingColorSpace){if(e=md(e,1),t=Ct(t,0,1),i=Ct(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,a=2*i-s;this.r=Pa(a,s,e+1/3),this.g=Pa(a,s,e),this.b=Pa(a,s,e-1/3)}return qe.toWorkingColorSpace(this,r),this}setStyle(e,t=nn){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=nn){const i=ku[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=qi(e.r),this.g=qi(e.g),this.b=qi(e.b),this}copyLinearToSRGB(e){return this.r=pa(e.r),this.g=pa(e.g),this.b=pa(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=nn){return qe.fromWorkingColorSpace(xt.copy(this),e),Math.round(Ct(xt.r*255,0,255))*65536+Math.round(Ct(xt.g*255,0,255))*256+Math.round(Ct(xt.b*255,0,255))}getHexString(e=nn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=qe.workingColorSpace){qe.fromWorkingColorSpace(xt.copy(this),t);const i=xt.r,r=xt.g,s=xt.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const h=a-o;switch(c=u<=.5?h/(a+o):h/(2-a-o),a){case i:l=(r-s)/h+(r<s?6:0);break;case r:l=(s-i)/h+2;break;case s:l=(i-r)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=qe.workingColorSpace){return qe.fromWorkingColorSpace(xt.copy(this),t),e.r=xt.r,e.g=xt.g,e.b=xt.b,e}getStyle(e=nn){qe.fromWorkingColorSpace(xt.copy(this),e);const t=xt.r,i=xt.g,r=xt.b;return e!==nn?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(Bn),this.setHSL(Bn.h+e,Bn.s+t,Bn.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Bn),e.getHSL(ts);const i=da(Bn.h,ts.h,t),r=da(Bn.s,ts.s,t),s=da(Bn.l,ts.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const xt=new Ke;Ke.NAMES=ku;let Id=0;class Gr extends nr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Id++}),this.uuid=Fr(),this.name="",this.type="Material",this.blending=$i,this.side=Xn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Qa,this.blendDst=eo,this.blendEquation=hi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ke(0,0,0),this.blendAlpha=0,this.depthFunc=Yi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Cl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=xi,this.stencilZFail=xi,this.stencilZPass=xi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==$i&&(i.blending=this.blending),this.side!==Xn&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Qa&&(i.blendSrc=this.blendSrc),this.blendDst!==eo&&(i.blendDst=this.blendDst),this.blendEquation!==hi&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Yi&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Cl&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==xi&&(i.stencilFail=this.stencilFail),this.stencilZFail!==xi&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==xi&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(t){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Er extends Gr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ke(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new On,this.combine=yu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const dt=new j,ns=new Qe;class hn{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Pl,this.updateRanges=[],this.gpuType=Cn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)ns.fromBufferAttribute(this,t),ns.applyMatrix3(e),this.setXY(t,ns.x,ns.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)dt.fromBufferAttribute(this,t),dt.applyMatrix3(e),this.setXYZ(t,dt.x,dt.y,dt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)dt.fromBufferAttribute(this,t),dt.applyMatrix4(e),this.setXYZ(t,dt.x,dt.y,dt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)dt.fromBufferAttribute(this,t),dt.applyNormalMatrix(e),this.setXYZ(t,dt.x,dt.y,dt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)dt.fromBufferAttribute(this,t),dt.transformDirection(e),this.setXYZ(t,dt.x,dt.y,dt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=ar(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Mt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ar(t,this.array)),t}setX(e,t){return this.normalized&&(t=Mt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ar(t,this.array)),t}setY(e,t){return this.normalized&&(t=Mt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ar(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Mt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ar(t,this.array)),t}setW(e,t){return this.normalized&&(t=Mt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Mt(t,this.array),i=Mt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=Mt(t,this.array),i=Mt(i,this.array),r=Mt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=Mt(t,this.array),i=Mt(i,this.array),r=Mt(r,this.array),s=Mt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Pl&&(e.usage=this.usage),e}}class Fu extends hn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Bu extends hn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class dn extends hn{constructor(e,t,i){super(new Float32Array(e),t,i)}}let Ud=0;const Gt=new ut,La=new Ot,Li=new j,kt=new Hr,hr=new Hr,gt=new j;class In extends nr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ud++}),this.uuid=Fr(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Ou(e)?Bu:Fu)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Ne().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Gt.makeRotationFromQuaternion(e),this.applyMatrix4(Gt),this}rotateX(e){return Gt.makeRotationX(e),this.applyMatrix4(Gt),this}rotateY(e){return Gt.makeRotationY(e),this.applyMatrix4(Gt),this}rotateZ(e){return Gt.makeRotationZ(e),this.applyMatrix4(Gt),this}translate(e,t,i){return Gt.makeTranslation(e,t,i),this.applyMatrix4(Gt),this}scale(e,t,i){return Gt.makeScale(e,t,i),this.applyMatrix4(Gt),this}lookAt(e){return La.lookAt(e),La.updateMatrix(),this.applyMatrix4(La.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Li).negate(),this.translate(Li.x,Li.y,Li.z),this}setFromPoints(e){const t=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new dn(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Hr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new j(-1/0,-1/0,-1/0),new j(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];kt.setFromBufferAttribute(s),this.morphTargetsRelative?(gt.addVectors(this.boundingBox.min,kt.min),this.boundingBox.expandByPoint(gt),gt.addVectors(this.boundingBox.max,kt.max),this.boundingBox.expandByPoint(gt)):(this.boundingBox.expandByPoint(kt.min),this.boundingBox.expandByPoint(kt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ta);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new j,1/0);return}if(e){const i=this.boundingSphere.center;if(kt.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];hr.setFromBufferAttribute(o),this.morphTargetsRelative?(gt.addVectors(kt.min,hr.min),kt.expandByPoint(gt),gt.addVectors(kt.max,hr.max),kt.expandByPoint(gt)):(kt.expandByPoint(hr.min),kt.expandByPoint(hr.max))}kt.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)gt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(gt));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)gt.fromBufferAttribute(o,c),l&&(Li.fromBufferAttribute(e,c),gt.add(Li)),r=Math.max(r,i.distanceToSquared(gt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new hn(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let C=0;C<i.count;C++)o[C]=new j,l[C]=new j;const c=new j,u=new j,h=new j,d=new Qe,f=new Qe,g=new Qe,_=new j,p=new j;function m(C,D,v){c.fromBufferAttribute(i,C),u.fromBufferAttribute(i,D),h.fromBufferAttribute(i,v),d.fromBufferAttribute(s,C),f.fromBufferAttribute(s,D),g.fromBufferAttribute(s,v),u.sub(c),h.sub(c),f.sub(d),g.sub(d);const x=1/(f.x*g.y-g.x*f.y);isFinite(x)&&(_.copy(u).multiplyScalar(g.y).addScaledVector(h,-f.y).multiplyScalar(x),p.copy(h).multiplyScalar(f.x).addScaledVector(u,-g.x).multiplyScalar(x),o[C].add(_),o[D].add(_),o[v].add(_),l[C].add(p),l[D].add(p),l[v].add(p))}let S=this.groups;S.length===0&&(S=[{start:0,count:e.count}]);for(let C=0,D=S.length;C<D;++C){const v=S[C],x=v.start,P=v.count;for(let L=x,I=x+P;L<I;L+=3)m(e.getX(L+0),e.getX(L+1),e.getX(L+2))}const y=new j,b=new j,M=new j,T=new j;function A(C){M.fromBufferAttribute(r,C),T.copy(M);const D=o[C];y.copy(D),y.sub(M.multiplyScalar(M.dot(D))).normalize(),b.crossVectors(T,D);const x=b.dot(l[C])<0?-1:1;a.setXYZW(C,y.x,y.y,y.z,x)}for(let C=0,D=S.length;C<D;++C){const v=S[C],x=v.start,P=v.count;for(let L=x,I=x+P;L<I;L+=3)A(e.getX(L+0)),A(e.getX(L+1)),A(e.getX(L+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new hn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,f=i.count;d<f;d++)i.setXYZ(d,0,0,0);const r=new j,s=new j,a=new j,o=new j,l=new j,c=new j,u=new j,h=new j;if(e)for(let d=0,f=e.count;d<f;d+=3){const g=e.getX(d+0),_=e.getX(d+1),p=e.getX(d+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,_),a.fromBufferAttribute(t,p),u.subVectors(a,s),h.subVectors(r,s),u.cross(h),o.fromBufferAttribute(i,g),l.fromBufferAttribute(i,_),c.fromBufferAttribute(i,p),o.add(u),l.add(u),c.add(u),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(p,c.x,c.y,c.z)}else for(let d=0,f=t.count;d<f;d+=3)r.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),u.subVectors(a,s),h.subVectors(r,s),u.cross(h),i.setXYZ(d+0,u.x,u.y,u.z),i.setXYZ(d+1,u.x,u.y,u.z),i.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)gt.fromBufferAttribute(e,t),gt.normalize(),e.setXYZ(t,gt.x,gt.y,gt.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,h=o.normalized,d=new c.constructor(l.length*u);let f=0,g=0;for(let _=0,p=l.length;_<p;_++){o.isInterleavedBufferAttribute?f=l[_]*o.data.stride+o.offset:f=l[_]*u;for(let m=0;m<u;m++)d[g++]=c[f++]}return new hn(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new In,i=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=e(l,i);t.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let u=0,h=c.length;u<h;u++){const d=c[u],f=e(d,i);l.push(f)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,d=c.length;h<d;h++){const f=c[h];u.push(f.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],h=s[c];for(let d=0,f=h.length;d<f;d++)u.push(h[d].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const h=a[c];this.addGroup(h.start,h.count,h.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Wl=new ut,ei=new Nu,is=new ta,$l=new j,rs=new j,ss=new j,as=new j,Oa=new j,os=new j,jl=new j,ls=new j;class Xt extends Ot{constructor(e=new In,t=new Er){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){os.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=o[l],h=s[l];u!==0&&(Oa.fromBufferAttribute(h,e),a?os.addScaledVector(Oa,u):os.addScaledVector(Oa.sub(t),u))}t.add(os)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),is.copy(i.boundingSphere),is.applyMatrix4(s),ei.copy(e.ray).recast(e.near),!(is.containsPoint(ei.origin)===!1&&(ei.intersectSphere(is,$l)===null||ei.origin.distanceToSquared($l)>(e.far-e.near)**2))&&(Wl.copy(s).invert(),ei.copy(e.ray).applyMatrix4(Wl),!(i.boundingBox!==null&&ei.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,ei)))}_computeIntersections(e,t,i){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,d=s.groups,f=s.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=d.length;g<_;g++){const p=d[g],m=a[p.materialIndex],S=Math.max(p.start,f.start),y=Math.min(o.count,Math.min(p.start+p.count,f.start+f.count));for(let b=S,M=y;b<M;b+=3){const T=o.getX(b),A=o.getX(b+1),C=o.getX(b+2);r=cs(this,m,e,i,c,u,h,T,A,C),r&&(r.faceIndex=Math.floor(b/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const g=Math.max(0,f.start),_=Math.min(o.count,f.start+f.count);for(let p=g,m=_;p<m;p+=3){const S=o.getX(p),y=o.getX(p+1),b=o.getX(p+2);r=cs(this,a,e,i,c,u,h,S,y,b),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,_=d.length;g<_;g++){const p=d[g],m=a[p.materialIndex],S=Math.max(p.start,f.start),y=Math.min(l.count,Math.min(p.start+p.count,f.start+f.count));for(let b=S,M=y;b<M;b+=3){const T=b,A=b+1,C=b+2;r=cs(this,m,e,i,c,u,h,T,A,C),r&&(r.faceIndex=Math.floor(b/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const g=Math.max(0,f.start),_=Math.min(l.count,f.start+f.count);for(let p=g,m=_;p<m;p+=3){const S=p,y=p+1,b=p+2;r=cs(this,a,e,i,c,u,h,S,y,b),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}}}function Nd(n,e,t,i,r,s,a,o){let l;if(e.side===Lt?l=i.intersectTriangle(a,s,r,!0,o):l=i.intersectTriangle(r,s,a,e.side===Xn,o),l===null)return null;ls.copy(o),ls.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(ls);return c<t.near||c>t.far?null:{distance:c,point:ls.clone(),object:n}}function cs(n,e,t,i,r,s,a,o,l,c){n.getVertexPosition(o,rs),n.getVertexPosition(l,ss),n.getVertexPosition(c,as);const u=Nd(n,e,t,i,rs,ss,as,jl);if(u){const h=new j;jt.getBarycoord(jl,rs,ss,as,h),r&&(u.uv=jt.getInterpolatedAttribute(r,o,l,c,h,new Qe)),s&&(u.uv1=jt.getInterpolatedAttribute(s,o,l,c,h,new Qe)),a&&(u.normal=jt.getInterpolatedAttribute(a,o,l,c,h,new j),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const d={a:o,b:l,c,normal:new j,materialIndex:0};jt.getNormal(rs,ss,as,d.normal),u.face=d,u.barycoord=h}return u}class ir extends In{constructor(e=1,t=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],u=[],h=[];let d=0,f=0;g("z","y","x",-1,-1,i,t,e,a,s,0),g("z","y","x",1,-1,i,t,-e,a,s,1),g("x","z","y",1,1,e,i,t,r,a,2),g("x","z","y",1,-1,e,i,-t,r,a,3),g("x","y","z",1,-1,e,t,i,r,s,4),g("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new dn(c,3)),this.setAttribute("normal",new dn(u,3)),this.setAttribute("uv",new dn(h,2));function g(_,p,m,S,y,b,M,T,A,C,D){const v=b/A,x=M/C,P=b/2,L=M/2,I=T/2,F=A+1,z=C+1;let G=0,V=0;const se=new j;for(let le=0;le<z;le++){const pe=le*x-L;for(let O=0;O<F;O++){const Y=O*v-P;se[_]=Y*S,se[p]=pe*y,se[m]=I,c.push(se.x,se.y,se.z),se[_]=0,se[p]=0,se[m]=T>0?1:-1,u.push(se.x,se.y,se.z),h.push(O/A),h.push(1-le/C),G+=1}}for(let le=0;le<C;le++)for(let pe=0;pe<A;pe++){const O=d+pe+F*le,Y=d+pe+F*(le+1),N=d+(pe+1)+F*(le+1),X=d+(pe+1)+F*le;l.push(O,Y,X),l.push(Y,N,X),V+=6}o.addGroup(f,V,D),f+=V,d+=G}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ir(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function tr(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function wt(n){const e={};for(let t=0;t<n.length;t++){const i=tr(n[t]);for(const r in i)e[r]=i[r]}return e}function Dd(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Hu(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:qe.workingColorSpace}const kd={clone:tr,merge:wt};var Fd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Bd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Kn extends Gr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Fd,this.fragmentShader=Bd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=tr(e.uniforms),this.uniformsGroups=Dd(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class Gu extends Ot{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ut,this.projectionMatrix=new ut,this.projectionMatrixInverse=new ut,this.coordinateSystem=Pn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Hn=new j,ql=new Qe,Xl=new Qe;class $t extends Gu{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Bo*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ns*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Bo*2*Math.atan(Math.tan(Ns*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Hn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Hn.x,Hn.y).multiplyScalar(-e/Hn.z),Hn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Hn.x,Hn.y).multiplyScalar(-e/Hn.z)}getViewSize(e,t){return this.getViewBounds(e,ql,Xl),t.subVectors(Xl,ql)}setViewOffset(e,t,i,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Ns*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,t-=a.offsetY*i/c,r*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Oi=-90,Ii=1;class Hd extends Ot{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new $t(Oi,Ii,e,t);r.layers=this.layers,this.add(r);const s=new $t(Oi,Ii,e,t);s.layers=this.layers,this.add(s);const a=new $t(Oi,Ii,e,t);a.layers=this.layers,this.add(a);const o=new $t(Oi,Ii,e,t);o.layers=this.layers,this.add(o);const l=new $t(Oi,Ii,e,t);l.layers=this.layers,this.add(l);const c=new $t(Oi,Ii,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,a,o,l]=t;for(const c of t)this.remove(c);if(e===Pn)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===zs)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,u]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,a),e.setRenderTarget(i,2,r),e.render(t,o),e.setRenderTarget(i,3,r),e.render(t,l),e.setRenderTarget(i,4,r),e.render(t,c),i.texture.generateMipmaps=_,e.setRenderTarget(i,5,r),e.render(t,u),e.setRenderTarget(h,d,f),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class zu extends bt{constructor(e,t,i,r,s,a,o,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:Ji,super(e,t,i,r,s,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Gd extends yi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new zu(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:sn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new ir(5,5,5),s=new Kn({name:"CubemapFromEquirect",uniforms:tr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Lt,blending:jn});s.uniforms.tEquirect.value=t;const a=new Xt(r,s),o=t.minFilter;return t.minFilter===pi&&(t.minFilter=sn),new Hd(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,i,r){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,r);e.setRenderTarget(s)}}const Ia=new j,zd=new j,Vd=new Ne;class li{constructor(e=new j(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=Ia.subVectors(i,t).cross(zd.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Ia),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||Vd.getNormalMatrix(e),r=this.coplanarPoint(Ia).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ti=new ta,us=new j;class Vu{constructor(e=new li,t=new li,i=new li,r=new li,s=new li,a=new li){this.planes=[e,t,i,r,s,a]}set(e,t,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Pn){const i=this.planes,r=e.elements,s=r[0],a=r[1],o=r[2],l=r[3],c=r[4],u=r[5],h=r[6],d=r[7],f=r[8],g=r[9],_=r[10],p=r[11],m=r[12],S=r[13],y=r[14],b=r[15];if(i[0].setComponents(l-s,d-c,p-f,b-m).normalize(),i[1].setComponents(l+s,d+c,p+f,b+m).normalize(),i[2].setComponents(l+a,d+u,p+g,b+S).normalize(),i[3].setComponents(l-a,d-u,p-g,b-S).normalize(),i[4].setComponents(l-o,d-h,p-_,b-y).normalize(),t===Pn)i[5].setComponents(l+o,d+h,p+_,b+y).normalize();else if(t===zs)i[5].setComponents(o,h,_,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ti.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ti.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ti)}intersectsSprite(e){return ti.center.set(0,0,0),ti.radius=.7071067811865476,ti.applyMatrix4(e.matrixWorld),this.intersectsSphere(ti)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(us.x=r.normal.x>0?e.max.x:e.min.x,us.y=r.normal.y>0?e.max.y:e.min.y,us.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(us)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Wu(){let n=null,e=!1,t=null,i=null;function r(s,a){t(s,a),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function Wd(n){const e=new WeakMap;function t(o,l){const c=o.array,u=o.usage,h=c.byteLength,d=n.createBuffer();n.bindBuffer(l,d),n.bufferData(l,c,u),o.onUploadCallback();let f;if(c instanceof Float32Array)f=n.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=n.HALF_FLOAT:f=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=n.SHORT;else if(c instanceof Uint32Array)f=n.UNSIGNED_INT;else if(c instanceof Int32Array)f=n.INT;else if(c instanceof Int8Array)f=n.BYTE;else if(c instanceof Uint8Array)f=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:h}}function i(o,l,c){const u=l.array,h=l.updateRanges;if(n.bindBuffer(c,o),h.length===0)n.bufferSubData(c,0,u);else{h.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<h.length;f++){const g=h[d],_=h[f];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++d,h[d]=_)}h.length=d+1;for(let f=0,g=h.length;f<g;f++){const _=h[f];n.bufferSubData(c,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(n.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:r,remove:s,update:a}}class zr extends In{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,a=t/2,o=Math.floor(i),l=Math.floor(r),c=o+1,u=l+1,h=e/o,d=t/l,f=[],g=[],_=[],p=[];for(let m=0;m<u;m++){const S=m*d-a;for(let y=0;y<c;y++){const b=y*h-s;g.push(b,-S,0),_.push(0,0,1),p.push(y/o),p.push(1-m/l)}}for(let m=0;m<l;m++)for(let S=0;S<o;S++){const y=S+c*m,b=S+c*(m+1),M=S+1+c*(m+1),T=S+1+c*m;f.push(y,b,T),f.push(b,M,T)}this.setIndex(f),this.setAttribute("position",new dn(g,3)),this.setAttribute("normal",new dn(_,3)),this.setAttribute("uv",new dn(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new zr(e.width,e.height,e.widthSegments,e.heightSegments)}}var $d=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,jd=`#ifdef USE_ALPHAHASH
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
#endif`,qd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Xd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Kd=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Yd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Jd=`#ifdef USE_AOMAP
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
#endif`,Zd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Qd=`#ifdef USE_BATCHING
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
#endif`,ef=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,tf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,nf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,rf=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,sf=`#ifdef USE_IRIDESCENCE
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
#endif`,af=`#ifdef USE_BUMPMAP
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
#endif`,of=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,lf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,cf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,uf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,hf=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,df=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,ff=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,pf=`#if defined( USE_COLOR_ALPHA )
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
#endif`,mf=`#define PI 3.141592653589793
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
} // validated`,gf=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,_f=`vec3 transformedNormal = objectNormal;
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
#endif`,vf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,yf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Sf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,xf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Ef="gl_FragColor = linearToOutputTexel( gl_FragColor );",wf=`
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
}`,bf=`#ifdef USE_ENVMAP
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
#endif`,Af=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Tf=`#ifdef USE_ENVMAP
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
#endif`,Mf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Rf=`#ifdef USE_ENVMAP
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
#endif`,Cf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Pf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Lf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Of=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,If=`#ifdef USE_GRADIENTMAP
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
}`,Uf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Nf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Df=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,kf=`uniform bool receiveShadow;
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
#endif`,Ff=`#ifdef USE_ENVMAP
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
#endif`,Bf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Hf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Gf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,zf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Vf=`PhysicalMaterial material;
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
#endif`,Wf=`struct PhysicalMaterial {
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
}`,$f=`
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
#endif`,jf=`#if defined( RE_IndirectDiffuse )
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
#endif`,qf=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Xf=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Kf=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Yf=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Jf=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Zf=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Qf=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,ep=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,tp=`#if defined( USE_POINTS_UV )
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
#endif`,np=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ip=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,rp=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,sp=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,ap=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,op=`#ifdef USE_MORPHTARGETS
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
#endif`,lp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,cp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,up=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,hp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,dp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,fp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,pp=`#ifdef USE_NORMALMAP
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
#endif`,mp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,gp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,_p=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,vp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,yp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Sp=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,xp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Ep=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,wp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,bp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Ap=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Tp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Mp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Rp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Cp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Pp=`float getShadowMask() {
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
}`,Lp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Op=`#ifdef USE_SKINNING
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
#endif`,Ip=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Up=`#ifdef USE_SKINNING
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
#endif`,Np=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Dp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,kp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Fp=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Bp=`#ifdef USE_TRANSMISSION
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
#endif`,Hp=`#ifdef USE_TRANSMISSION
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
#endif`,Gp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,zp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Vp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Wp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const $p=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,jp=`uniform sampler2D t2D;
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
}`,qp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Xp=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Kp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Yp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Jp=`#include <common>
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
}`,Zp=`#if DEPTH_PACKING == 3200
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
}`,Qp=`#define DISTANCE
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
}`,em=`#define DISTANCE
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
}`,tm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,nm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,im=`uniform float scale;
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
}`,rm=`uniform vec3 diffuse;
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
}`,sm=`#include <common>
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
}`,am=`uniform vec3 diffuse;
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
}`,om=`#define LAMBERT
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
}`,lm=`#define LAMBERT
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
}`,cm=`#define MATCAP
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
}`,um=`#define MATCAP
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
}`,hm=`#define NORMAL
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
}`,dm=`#define NORMAL
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
}`,fm=`#define PHONG
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
}`,pm=`#define PHONG
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
}`,mm=`#define STANDARD
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
}`,gm=`#define STANDARD
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
}`,_m=`#define TOON
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
}`,vm=`#define TOON
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
}`,ym=`uniform float size;
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
}`,Sm=`uniform vec3 diffuse;
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
}`,xm=`#include <common>
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
}`,Em=`uniform vec3 color;
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
}`,wm=`uniform float rotation;
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
}`,bm=`uniform vec3 diffuse;
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
}`,Ue={alphahash_fragment:$d,alphahash_pars_fragment:jd,alphamap_fragment:qd,alphamap_pars_fragment:Xd,alphatest_fragment:Kd,alphatest_pars_fragment:Yd,aomap_fragment:Jd,aomap_pars_fragment:Zd,batching_pars_vertex:Qd,batching_vertex:ef,begin_vertex:tf,beginnormal_vertex:nf,bsdfs:rf,iridescence_fragment:sf,bumpmap_pars_fragment:af,clipping_planes_fragment:of,clipping_planes_pars_fragment:lf,clipping_planes_pars_vertex:cf,clipping_planes_vertex:uf,color_fragment:hf,color_pars_fragment:df,color_pars_vertex:ff,color_vertex:pf,common:mf,cube_uv_reflection_fragment:gf,defaultnormal_vertex:_f,displacementmap_pars_vertex:vf,displacementmap_vertex:yf,emissivemap_fragment:Sf,emissivemap_pars_fragment:xf,colorspace_fragment:Ef,colorspace_pars_fragment:wf,envmap_fragment:bf,envmap_common_pars_fragment:Af,envmap_pars_fragment:Tf,envmap_pars_vertex:Mf,envmap_physical_pars_fragment:Ff,envmap_vertex:Rf,fog_vertex:Cf,fog_pars_vertex:Pf,fog_fragment:Lf,fog_pars_fragment:Of,gradientmap_pars_fragment:If,lightmap_pars_fragment:Uf,lights_lambert_fragment:Nf,lights_lambert_pars_fragment:Df,lights_pars_begin:kf,lights_toon_fragment:Bf,lights_toon_pars_fragment:Hf,lights_phong_fragment:Gf,lights_phong_pars_fragment:zf,lights_physical_fragment:Vf,lights_physical_pars_fragment:Wf,lights_fragment_begin:$f,lights_fragment_maps:jf,lights_fragment_end:qf,logdepthbuf_fragment:Xf,logdepthbuf_pars_fragment:Kf,logdepthbuf_pars_vertex:Yf,logdepthbuf_vertex:Jf,map_fragment:Zf,map_pars_fragment:Qf,map_particle_fragment:ep,map_particle_pars_fragment:tp,metalnessmap_fragment:np,metalnessmap_pars_fragment:ip,morphinstance_vertex:rp,morphcolor_vertex:sp,morphnormal_vertex:ap,morphtarget_pars_vertex:op,morphtarget_vertex:lp,normal_fragment_begin:cp,normal_fragment_maps:up,normal_pars_fragment:hp,normal_pars_vertex:dp,normal_vertex:fp,normalmap_pars_fragment:pp,clearcoat_normal_fragment_begin:mp,clearcoat_normal_fragment_maps:gp,clearcoat_pars_fragment:_p,iridescence_pars_fragment:vp,opaque_fragment:yp,packing:Sp,premultiplied_alpha_fragment:xp,project_vertex:Ep,dithering_fragment:wp,dithering_pars_fragment:bp,roughnessmap_fragment:Ap,roughnessmap_pars_fragment:Tp,shadowmap_pars_fragment:Mp,shadowmap_pars_vertex:Rp,shadowmap_vertex:Cp,shadowmask_pars_fragment:Pp,skinbase_vertex:Lp,skinning_pars_vertex:Op,skinning_vertex:Ip,skinnormal_vertex:Up,specularmap_fragment:Np,specularmap_pars_fragment:Dp,tonemapping_fragment:kp,tonemapping_pars_fragment:Fp,transmission_fragment:Bp,transmission_pars_fragment:Hp,uv_pars_fragment:Gp,uv_pars_vertex:zp,uv_vertex:Vp,worldpos_vertex:Wp,background_vert:$p,background_frag:jp,backgroundCube_vert:qp,backgroundCube_frag:Xp,cube_vert:Kp,cube_frag:Yp,depth_vert:Jp,depth_frag:Zp,distanceRGBA_vert:Qp,distanceRGBA_frag:em,equirect_vert:tm,equirect_frag:nm,linedashed_vert:im,linedashed_frag:rm,meshbasic_vert:sm,meshbasic_frag:am,meshlambert_vert:om,meshlambert_frag:lm,meshmatcap_vert:cm,meshmatcap_frag:um,meshnormal_vert:hm,meshnormal_frag:dm,meshphong_vert:fm,meshphong_frag:pm,meshphysical_vert:mm,meshphysical_frag:gm,meshtoon_vert:_m,meshtoon_frag:vm,points_vert:ym,points_frag:Sm,shadow_vert:xm,shadow_frag:Em,sprite_vert:wm,sprite_frag:bm},oe={common:{diffuse:{value:new Ke(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ne},alphaMap:{value:null},alphaMapTransform:{value:new Ne},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ne}},envmap:{envMap:{value:null},envMapRotation:{value:new Ne},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ne}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ne}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ne},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ne},normalScale:{value:new Qe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ne},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ne}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ne}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ne}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ke(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ke(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ne},alphaTest:{value:0},uvTransform:{value:new Ne}},sprite:{diffuse:{value:new Ke(16777215)},opacity:{value:1},center:{value:new Qe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ne},alphaMap:{value:null},alphaMapTransform:{value:new Ne},alphaTest:{value:0}}},cn={basic:{uniforms:wt([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.fog]),vertexShader:Ue.meshbasic_vert,fragmentShader:Ue.meshbasic_frag},lambert:{uniforms:wt([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,oe.lights,{emissive:{value:new Ke(0)}}]),vertexShader:Ue.meshlambert_vert,fragmentShader:Ue.meshlambert_frag},phong:{uniforms:wt([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,oe.lights,{emissive:{value:new Ke(0)},specular:{value:new Ke(1118481)},shininess:{value:30}}]),vertexShader:Ue.meshphong_vert,fragmentShader:Ue.meshphong_frag},standard:{uniforms:wt([oe.common,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.roughnessmap,oe.metalnessmap,oe.fog,oe.lights,{emissive:{value:new Ke(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ue.meshphysical_vert,fragmentShader:Ue.meshphysical_frag},toon:{uniforms:wt([oe.common,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.gradientmap,oe.fog,oe.lights,{emissive:{value:new Ke(0)}}]),vertexShader:Ue.meshtoon_vert,fragmentShader:Ue.meshtoon_frag},matcap:{uniforms:wt([oe.common,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,{matcap:{value:null}}]),vertexShader:Ue.meshmatcap_vert,fragmentShader:Ue.meshmatcap_frag},points:{uniforms:wt([oe.points,oe.fog]),vertexShader:Ue.points_vert,fragmentShader:Ue.points_frag},dashed:{uniforms:wt([oe.common,oe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ue.linedashed_vert,fragmentShader:Ue.linedashed_frag},depth:{uniforms:wt([oe.common,oe.displacementmap]),vertexShader:Ue.depth_vert,fragmentShader:Ue.depth_frag},normal:{uniforms:wt([oe.common,oe.bumpmap,oe.normalmap,oe.displacementmap,{opacity:{value:1}}]),vertexShader:Ue.meshnormal_vert,fragmentShader:Ue.meshnormal_frag},sprite:{uniforms:wt([oe.sprite,oe.fog]),vertexShader:Ue.sprite_vert,fragmentShader:Ue.sprite_frag},background:{uniforms:{uvTransform:{value:new Ne},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ue.background_vert,fragmentShader:Ue.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ne}},vertexShader:Ue.backgroundCube_vert,fragmentShader:Ue.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ue.cube_vert,fragmentShader:Ue.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ue.equirect_vert,fragmentShader:Ue.equirect_frag},distanceRGBA:{uniforms:wt([oe.common,oe.displacementmap,{referencePosition:{value:new j},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ue.distanceRGBA_vert,fragmentShader:Ue.distanceRGBA_frag},shadow:{uniforms:wt([oe.lights,oe.fog,{color:{value:new Ke(0)},opacity:{value:1}}]),vertexShader:Ue.shadow_vert,fragmentShader:Ue.shadow_frag}};cn.physical={uniforms:wt([cn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ne},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ne},clearcoatNormalScale:{value:new Qe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ne},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ne},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ne},sheen:{value:0},sheenColor:{value:new Ke(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ne},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ne},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ne},transmissionSamplerSize:{value:new Qe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ne},attenuationDistance:{value:0},attenuationColor:{value:new Ke(0)},specularColor:{value:new Ke(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ne},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ne},anisotropyVector:{value:new Qe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ne}}]),vertexShader:Ue.meshphysical_vert,fragmentShader:Ue.meshphysical_frag};const hs={r:0,b:0,g:0},ni=new On,Am=new ut;function Tm(n,e,t,i,r,s,a){const o=new Ke(0);let l=s===!0?0:1,c,u,h=null,d=0,f=null;function g(S){let y=S.isScene===!0?S.background:null;return y&&y.isTexture&&(y=(S.backgroundBlurriness>0?t:e).get(y)),y}function _(S){let y=!1;const b=g(S);b===null?m(o,l):b&&b.isColor&&(m(b,1),y=!0);const M=n.xr.getEnvironmentBlendMode();M==="additive"?i.buffers.color.setClear(0,0,0,1,a):M==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(n.autoClear||y)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function p(S,y){const b=g(y);b&&(b.isCubeTexture||b.mapping===Qs)?(u===void 0&&(u=new Xt(new ir(1,1,1),new Kn({name:"BackgroundCubeMaterial",uniforms:tr(cn.backgroundCube.uniforms),vertexShader:cn.backgroundCube.vertexShader,fragmentShader:cn.backgroundCube.fragmentShader,side:Lt,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(M,T,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),ni.copy(y.backgroundRotation),ni.x*=-1,ni.y*=-1,ni.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(ni.y*=-1,ni.z*=-1),u.material.uniforms.envMap.value=b,u.material.uniforms.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Am.makeRotationFromEuler(ni)),u.material.toneMapped=qe.getTransfer(b.colorSpace)!==rt,(h!==b||d!==b.version||f!==n.toneMapping)&&(u.material.needsUpdate=!0,h=b,d=b.version,f=n.toneMapping),u.layers.enableAll(),S.unshift(u,u.geometry,u.material,0,0,null)):b&&b.isTexture&&(c===void 0&&(c=new Xt(new zr(2,2),new Kn({name:"BackgroundMaterial",uniforms:tr(cn.background.uniforms),vertexShader:cn.background.vertexShader,fragmentShader:cn.background.fragmentShader,side:Xn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=b,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.toneMapped=qe.getTransfer(b.colorSpace)!==rt,b.matrixAutoUpdate===!0&&b.updateMatrix(),c.material.uniforms.uvTransform.value.copy(b.matrix),(h!==b||d!==b.version||f!==n.toneMapping)&&(c.material.needsUpdate=!0,h=b,d=b.version,f=n.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null))}function m(S,y){S.getRGB(hs,Hu(n)),i.buffers.color.setClear(hs.r,hs.g,hs.b,y,a)}return{getClearColor:function(){return o},setClearColor:function(S,y=1){o.set(S),l=y,m(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(S){l=S,m(o,l)},render:_,addToRenderList:p}}function Mm(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=d(null);let s=r,a=!1;function o(v,x,P,L,I){let F=!1;const z=h(L,P,x);s!==z&&(s=z,c(s.object)),F=f(v,L,P,I),F&&g(v,L,P,I),I!==null&&e.update(I,n.ELEMENT_ARRAY_BUFFER),(F||a)&&(a=!1,b(v,x,P,L),I!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(I).buffer))}function l(){return n.createVertexArray()}function c(v){return n.bindVertexArray(v)}function u(v){return n.deleteVertexArray(v)}function h(v,x,P){const L=P.wireframe===!0;let I=i[v.id];I===void 0&&(I={},i[v.id]=I);let F=I[x.id];F===void 0&&(F={},I[x.id]=F);let z=F[L];return z===void 0&&(z=d(l()),F[L]=z),z}function d(v){const x=[],P=[],L=[];for(let I=0;I<t;I++)x[I]=0,P[I]=0,L[I]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:x,enabledAttributes:P,attributeDivisors:L,object:v,attributes:{},index:null}}function f(v,x,P,L){const I=s.attributes,F=x.attributes;let z=0;const G=P.getAttributes();for(const V in G)if(G[V].location>=0){const le=I[V];let pe=F[V];if(pe===void 0&&(V==="instanceMatrix"&&v.instanceMatrix&&(pe=v.instanceMatrix),V==="instanceColor"&&v.instanceColor&&(pe=v.instanceColor)),le===void 0||le.attribute!==pe||pe&&le.data!==pe.data)return!0;z++}return s.attributesNum!==z||s.index!==L}function g(v,x,P,L){const I={},F=x.attributes;let z=0;const G=P.getAttributes();for(const V in G)if(G[V].location>=0){let le=F[V];le===void 0&&(V==="instanceMatrix"&&v.instanceMatrix&&(le=v.instanceMatrix),V==="instanceColor"&&v.instanceColor&&(le=v.instanceColor));const pe={};pe.attribute=le,le&&le.data&&(pe.data=le.data),I[V]=pe,z++}s.attributes=I,s.attributesNum=z,s.index=L}function _(){const v=s.newAttributes;for(let x=0,P=v.length;x<P;x++)v[x]=0}function p(v){m(v,0)}function m(v,x){const P=s.newAttributes,L=s.enabledAttributes,I=s.attributeDivisors;P[v]=1,L[v]===0&&(n.enableVertexAttribArray(v),L[v]=1),I[v]!==x&&(n.vertexAttribDivisor(v,x),I[v]=x)}function S(){const v=s.newAttributes,x=s.enabledAttributes;for(let P=0,L=x.length;P<L;P++)x[P]!==v[P]&&(n.disableVertexAttribArray(P),x[P]=0)}function y(v,x,P,L,I,F,z){z===!0?n.vertexAttribIPointer(v,x,P,I,F):n.vertexAttribPointer(v,x,P,L,I,F)}function b(v,x,P,L){_();const I=L.attributes,F=P.getAttributes(),z=x.defaultAttributeValues;for(const G in F){const V=F[G];if(V.location>=0){let se=I[G];if(se===void 0&&(G==="instanceMatrix"&&v.instanceMatrix&&(se=v.instanceMatrix),G==="instanceColor"&&v.instanceColor&&(se=v.instanceColor)),se!==void 0){const le=se.normalized,pe=se.itemSize,O=e.get(se);if(O===void 0)continue;const Y=O.buffer,N=O.type,X=O.bytesPerElement,J=N===n.INT||N===n.UNSIGNED_INT||se.gpuType===al;if(se.isInterleavedBufferAttribute){const ee=se.data,_e=ee.stride,be=se.offset;if(ee.isInstancedInterleavedBuffer){for(let De=0;De<V.locationSize;De++)m(V.location+De,ee.meshPerAttribute);v.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=ee.meshPerAttribute*ee.count)}else for(let De=0;De<V.locationSize;De++)p(V.location+De);n.bindBuffer(n.ARRAY_BUFFER,Y);for(let De=0;De<V.locationSize;De++)y(V.location+De,pe/V.locationSize,N,le,_e*X,(be+pe/V.locationSize*De)*X,J)}else{if(se.isInstancedBufferAttribute){for(let ee=0;ee<V.locationSize;ee++)m(V.location+ee,se.meshPerAttribute);v.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=se.meshPerAttribute*se.count)}else for(let ee=0;ee<V.locationSize;ee++)p(V.location+ee);n.bindBuffer(n.ARRAY_BUFFER,Y);for(let ee=0;ee<V.locationSize;ee++)y(V.location+ee,pe/V.locationSize,N,le,pe*X,pe/V.locationSize*ee*X,J)}}else if(z!==void 0){const le=z[G];if(le!==void 0)switch(le.length){case 2:n.vertexAttrib2fv(V.location,le);break;case 3:n.vertexAttrib3fv(V.location,le);break;case 4:n.vertexAttrib4fv(V.location,le);break;default:n.vertexAttrib1fv(V.location,le)}}}}S()}function M(){C();for(const v in i){const x=i[v];for(const P in x){const L=x[P];for(const I in L)u(L[I].object),delete L[I];delete x[P]}delete i[v]}}function T(v){if(i[v.id]===void 0)return;const x=i[v.id];for(const P in x){const L=x[P];for(const I in L)u(L[I].object),delete L[I];delete x[P]}delete i[v.id]}function A(v){for(const x in i){const P=i[x];if(P[v.id]===void 0)continue;const L=P[v.id];for(const I in L)u(L[I].object),delete L[I];delete P[v.id]}}function C(){D(),a=!0,s!==r&&(s=r,c(s.object))}function D(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:C,resetDefaultState:D,dispose:M,releaseStatesOfGeometry:T,releaseStatesOfProgram:A,initAttributes:_,enableAttribute:p,disableUnusedAttributes:S}}function Rm(n,e,t){let i;function r(c){i=c}function s(c,u){n.drawArrays(i,c,u),t.update(u,i,1)}function a(c,u,h){h!==0&&(n.drawArraysInstanced(i,c,u,h),t.update(u,i,h))}function o(c,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,h);let f=0;for(let g=0;g<h;g++)f+=u[g];t.update(f,i,1)}function l(c,u,h,d){if(h===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<c.length;g++)a(c[g],u[g],d[g]);else{f.multiDrawArraysInstancedWEBGL(i,c,0,u,0,d,0,h);let g=0;for(let _=0;_<h;_++)g+=u[_];for(let _=0;_<d.length;_++)t.update(g,i,d[_])}}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function Cm(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(A){return!(A!==on&&i.convert(A)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(A){const C=A===kr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==Ln&&i.convert(A)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==Cn&&!C)}function l(A){if(A==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const h=t.logarithmicDepthBuffer===!0,d=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control");if(d===!0){const A=e.get("EXT_clip_control");A.clipControlEXT(A.LOWER_LEFT_EXT,A.ZERO_TO_ONE_EXT)}const f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_TEXTURE_SIZE),p=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),m=n.getParameter(n.MAX_VERTEX_ATTRIBS),S=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),y=n.getParameter(n.MAX_VARYING_VECTORS),b=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),M=g>0,T=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:h,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:p,maxAttributes:m,maxVertexUniforms:S,maxVaryings:y,maxFragmentUniforms:b,vertexTextures:M,maxSamples:T}}function Pm(n){const e=this;let t=null,i=0,r=!1,s=!1;const a=new li,o=new Ne,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const f=h.length!==0||d||i!==0||r;return r=d,i=h.length,f},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,d){t=u(h,d,0)},this.setState=function(h,d,f){const g=h.clippingPlanes,_=h.clipIntersection,p=h.clipShadows,m=n.get(h);if(!r||g===null||g.length===0||s&&!p)s?u(null):c();else{const S=s?0:i,y=S*4;let b=m.clippingState||null;l.value=b,b=u(g,d,y,f);for(let M=0;M!==y;++M)b[M]=t[M];m.clippingState=b,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=S}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(h,d,f,g){const _=h!==null?h.length:0;let p=null;if(_!==0){if(p=l.value,g!==!0||p===null){const m=f+_*4,S=d.matrixWorldInverse;o.getNormalMatrix(S),(p===null||p.length<m)&&(p=new Float32Array(m));for(let y=0,b=f;y!==_;++y,b+=4)a.copy(h[y]).applyMatrix4(S,o),a.normal.toArray(p,b),p[b+3]=a.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,p}}function Lm(n){let e=new WeakMap;function t(a,o){return o===lo?a.mapping=Ji:o===co&&(a.mapping=Zi),a}function i(a){if(a&&a.isTexture){const o=a.mapping;if(o===lo||o===co)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new Gd(l.height);return c.fromEquirectangularTexture(n,a),e.set(a,c),a.addEventListener("dispose",r),t(c.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class Om extends Gu{constructor(e=-1,t=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Vi=4,Kl=[.125,.215,.35,.446,.526,.582],di=20,Ua=new Om,Yl=new Ke;let Na=null,Da=0,ka=0,Fa=!1;const ci=(1+Math.sqrt(5))/2,Ui=1/ci,Jl=[new j(-ci,Ui,0),new j(ci,Ui,0),new j(-Ui,0,ci),new j(Ui,0,ci),new j(0,ci,-Ui),new j(0,ci,Ui),new j(-1,1,-1),new j(1,1,-1),new j(-1,1,1),new j(1,1,1)];class Zl{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){Na=this._renderer.getRenderTarget(),Da=this._renderer.getActiveCubeFace(),ka=this._renderer.getActiveMipmapLevel(),Fa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=tc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ec(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Na,Da,ka),this._renderer.xr.enabled=Fa,e.scissorTest=!1,ds(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ji||e.mapping===Zi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Na=this._renderer.getRenderTarget(),Da=this._renderer.getActiveCubeFace(),ka=this._renderer.getActiveMipmapLevel(),Fa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:sn,minFilter:sn,generateMipmaps:!1,type:kr,format:on,colorSpace:Yn,depthBuffer:!1},r=Ql(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ql(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Im(s)),this._blurMaterial=Um(s,e,t)}return r}_compileMaterial(e){const t=new Xt(this._lodPlanes[0],e);this._renderer.compile(t,Ua)}_sceneToCubeUV(e,t,i,r){const o=new $t(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,d=u.toneMapping;u.getClearColor(Yl),u.toneMapping=qn,u.autoClear=!1;const f=new Er({name:"PMREM.Background",side:Lt,depthWrite:!1,depthTest:!1}),g=new Xt(new ir,f);let _=!1;const p=e.background;p?p.isColor&&(f.color.copy(p),e.background=null,_=!0):(f.color.copy(Yl),_=!0);for(let m=0;m<6;m++){const S=m%3;S===0?(o.up.set(0,l[m],0),o.lookAt(c[m],0,0)):S===1?(o.up.set(0,0,l[m]),o.lookAt(0,c[m],0)):(o.up.set(0,l[m],0),o.lookAt(0,0,c[m]));const y=this._cubeSize;ds(r,S*y,m>2?y:0,y,y),u.setRenderTarget(r),_&&u.render(g,o),u.render(e,o)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=d,u.autoClear=h,e.background=p}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===Ji||e.mapping===Zi;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=tc()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ec());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new Xt(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;ds(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(a,Ua)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=Jl[(r-s-1)%Jl.length];this._blur(e,s-1,s,a,o)}t.autoClear=i}_blur(e,t,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new Xt(this._lodPlanes[r],c),d=c.uniforms,f=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*f):2*Math.PI/(2*di-1),_=s/g,p=isFinite(s)?1+Math.floor(u*_):di;p>di&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${di}`);const m=[];let S=0;for(let A=0;A<di;++A){const C=A/_,D=Math.exp(-C*C/2);m.push(D),A===0?S+=D:A<p&&(S+=2*D)}for(let A=0;A<m.length;A++)m[A]=m[A]/S;d.envMap.value=e.texture,d.samples.value=p,d.weights.value=m,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:y}=this;d.dTheta.value=g,d.mipInt.value=y-i;const b=this._sizeLods[r],M=3*b*(r>y-Vi?r-y+Vi:0),T=4*(this._cubeSize-b);ds(t,M,T,3*b,2*b),l.setRenderTarget(t),l.render(h,Ua)}}function Im(n){const e=[],t=[],i=[];let r=n;const s=n-Vi+1+Kl.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);t.push(o);let l=1/o;a>n-Vi?l=Kl[a-n+Vi-1]:a===0&&(l=0),i.push(l);const c=1/(o-2),u=-c,h=1+c,d=[u,u,h,u,h,h,u,u,h,h,u,h],f=6,g=6,_=3,p=2,m=1,S=new Float32Array(_*g*f),y=new Float32Array(p*g*f),b=new Float32Array(m*g*f);for(let T=0;T<f;T++){const A=T%3*2/3-1,C=T>2?0:-1,D=[A,C,0,A+2/3,C,0,A+2/3,C+1,0,A,C,0,A+2/3,C+1,0,A,C+1,0];S.set(D,_*g*T),y.set(d,p*g*T);const v=[T,T,T,T,T,T];b.set(v,m*g*T)}const M=new In;M.setAttribute("position",new hn(S,_)),M.setAttribute("uv",new hn(y,p)),M.setAttribute("faceIndex",new hn(b,m)),e.push(M),r>Vi&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Ql(n,e,t){const i=new yi(n,e,t);return i.texture.mapping=Qs,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ds(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function Um(n,e,t){const i=new Float32Array(di),r=new j(0,1,0);return new Kn({name:"SphericalGaussianBlur",defines:{n:di,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:fl(),fragmentShader:`

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
		`,blending:jn,depthTest:!1,depthWrite:!1})}function ec(){return new Kn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:fl(),fragmentShader:`

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
		`,blending:jn,depthTest:!1,depthWrite:!1})}function tc(){return new Kn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:fl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:jn,depthTest:!1,depthWrite:!1})}function fl(){return`

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
	`}function Nm(n){let e=new WeakMap,t=null;function i(o){if(o&&o.isTexture){const l=o.mapping,c=l===lo||l===co,u=l===Ji||l===Zi;if(c||u){let h=e.get(o);const d=h!==void 0?h.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return t===null&&(t=new Zl(n)),h=c?t.fromEquirectangular(o,h):t.fromCubemap(o,h),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),h.texture;if(h!==void 0)return h.texture;{const f=o.image;return c&&f&&f.height>0||u&&f&&r(f)?(t===null&&(t=new Zl(n)),h=c?t.fromEquirectangular(o):t.fromCubemap(o),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),o.addEventListener("dispose",s),h.texture):null}}}return o}function r(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:a}}function Dm(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&Ds("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function km(n,e,t,i){const r={},s=new WeakMap;function a(h){const d=h.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);for(const g in d.morphAttributes){const _=d.morphAttributes[g];for(let p=0,m=_.length;p<m;p++)e.remove(_[p])}d.removeEventListener("dispose",a),delete r[d.id];const f=s.get(d);f&&(e.remove(f),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(h,d){return r[d.id]===!0||(d.addEventListener("dispose",a),r[d.id]=!0,t.memory.geometries++),d}function l(h){const d=h.attributes;for(const g in d)e.update(d[g],n.ARRAY_BUFFER);const f=h.morphAttributes;for(const g in f){const _=f[g];for(let p=0,m=_.length;p<m;p++)e.update(_[p],n.ARRAY_BUFFER)}}function c(h){const d=[],f=h.index,g=h.attributes.position;let _=0;if(f!==null){const S=f.array;_=f.version;for(let y=0,b=S.length;y<b;y+=3){const M=S[y+0],T=S[y+1],A=S[y+2];d.push(M,T,T,A,A,M)}}else if(g!==void 0){const S=g.array;_=g.version;for(let y=0,b=S.length/3-1;y<b;y+=3){const M=y+0,T=y+1,A=y+2;d.push(M,T,T,A,A,M)}}else return;const p=new(Ou(d)?Bu:Fu)(d,1);p.version=_;const m=s.get(h);m&&e.remove(m),s.set(h,p)}function u(h){const d=s.get(h);if(d){const f=h.index;f!==null&&d.version<f.version&&c(h)}else c(h);return s.get(h)}return{get:o,update:l,getWireframeAttribute:u}}function Fm(n,e,t){let i;function r(d){i=d}let s,a;function o(d){s=d.type,a=d.bytesPerElement}function l(d,f){n.drawElements(i,f,s,d*a),t.update(f,i,1)}function c(d,f,g){g!==0&&(n.drawElementsInstanced(i,f,s,d*a,g),t.update(f,i,g))}function u(d,f,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,f,0,s,d,0,g);let p=0;for(let m=0;m<g;m++)p+=f[m];t.update(p,i,1)}function h(d,f,g,_){if(g===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let m=0;m<d.length;m++)c(d[m]/a,f[m],_[m]);else{p.multiDrawElementsInstancedWEBGL(i,f,0,s,d,0,_,0,g);let m=0;for(let S=0;S<g;S++)m+=f[S];for(let S=0;S<_.length;S++)t.update(m,i,_[S])}}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function Bm(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=o*(s/3);break;case n.LINES:t.lines+=o*(s/2);break;case n.LINE_STRIP:t.lines+=o*(s-1);break;case n.LINE_LOOP:t.lines+=o*s;break;case n.POINTS:t.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function Hm(n,e,t){const i=new WeakMap,r=new ct;function s(a,o,l){const c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=u!==void 0?u.length:0;let d=i.get(o);if(d===void 0||d.count!==h){let v=function(){C.dispose(),i.delete(o),o.removeEventListener("dispose",v)};var f=v;d!==void 0&&d.texture.dispose();const g=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,p=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],S=o.morphAttributes.normal||[],y=o.morphAttributes.color||[];let b=0;g===!0&&(b=1),_===!0&&(b=2),p===!0&&(b=3);let M=o.attributes.position.count*b,T=1;M>e.maxTextureSize&&(T=Math.ceil(M/e.maxTextureSize),M=e.maxTextureSize);const A=new Float32Array(M*T*4*h),C=new Uu(A,M,T,h);C.type=Cn,C.needsUpdate=!0;const D=b*4;for(let x=0;x<h;x++){const P=m[x],L=S[x],I=y[x],F=M*T*4*x;for(let z=0;z<P.count;z++){const G=z*D;g===!0&&(r.fromBufferAttribute(P,z),A[F+G+0]=r.x,A[F+G+1]=r.y,A[F+G+2]=r.z,A[F+G+3]=0),_===!0&&(r.fromBufferAttribute(L,z),A[F+G+4]=r.x,A[F+G+5]=r.y,A[F+G+6]=r.z,A[F+G+7]=0),p===!0&&(r.fromBufferAttribute(I,z),A[F+G+8]=r.x,A[F+G+9]=r.y,A[F+G+10]=r.z,A[F+G+11]=I.itemSize===4?r.w:1)}}d={count:h,texture:C,size:new Qe(M,T)},i.set(o,d),o.addEventListener("dispose",v)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",a.morphTexture,t);else{let g=0;for(let p=0;p<c.length;p++)g+=c[p];const _=o.morphTargetsRelative?1:1-g;l.getUniforms().setValue(n,"morphTargetBaseInfluence",_),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",d.size)}return{update:s}}function Gm(n,e,t,i){let r=new WeakMap;function s(l){const c=i.render.frame,u=l.geometry,h=e.get(l,u);if(r.get(h)!==c&&(e.update(h),r.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),r.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;r.get(d)!==c&&(d.update(),r.set(d,c))}return h}function a(){r=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:a}}class $u extends bt{constructor(e,t,i,r,s,a,o,l,c,u=ji){if(u!==ji&&u!==er)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===ji&&(i=vi),i===void 0&&u===er&&(i=Qi),super(null,r,s,a,o,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:qt,this.minFilter=l!==void 0?l:qt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const ju=new bt,nc=new $u(1,1),qu=new Uu,Xu=new Ad,Ku=new zu,ic=[],rc=[],sc=new Float32Array(16),ac=new Float32Array(9),oc=new Float32Array(4);function rr(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=ic[r];if(s===void 0&&(s=new Float32Array(r),ic[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(s,o)}return s}function pt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function mt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function na(n,e){let t=rc[e];t===void 0&&(t=new Int32Array(e),rc[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function zm(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function Vm(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(pt(t,e))return;n.uniform2fv(this.addr,e),mt(t,e)}}function Wm(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(pt(t,e))return;n.uniform3fv(this.addr,e),mt(t,e)}}function $m(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(pt(t,e))return;n.uniform4fv(this.addr,e),mt(t,e)}}function jm(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(pt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),mt(t,e)}else{if(pt(t,i))return;oc.set(i),n.uniformMatrix2fv(this.addr,!1,oc),mt(t,i)}}function qm(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(pt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),mt(t,e)}else{if(pt(t,i))return;ac.set(i),n.uniformMatrix3fv(this.addr,!1,ac),mt(t,i)}}function Xm(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(pt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),mt(t,e)}else{if(pt(t,i))return;sc.set(i),n.uniformMatrix4fv(this.addr,!1,sc),mt(t,i)}}function Km(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function Ym(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(pt(t,e))return;n.uniform2iv(this.addr,e),mt(t,e)}}function Jm(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(pt(t,e))return;n.uniform3iv(this.addr,e),mt(t,e)}}function Zm(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(pt(t,e))return;n.uniform4iv(this.addr,e),mt(t,e)}}function Qm(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function eg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(pt(t,e))return;n.uniform2uiv(this.addr,e),mt(t,e)}}function tg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(pt(t,e))return;n.uniform3uiv(this.addr,e),mt(t,e)}}function ng(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(pt(t,e))return;n.uniform4uiv(this.addr,e),mt(t,e)}}function ig(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(nc.compareFunction=Lu,s=nc):s=ju,t.setTexture2D(e||s,r)}function rg(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||Xu,r)}function sg(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||Ku,r)}function ag(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||qu,r)}function og(n){switch(n){case 5126:return zm;case 35664:return Vm;case 35665:return Wm;case 35666:return $m;case 35674:return jm;case 35675:return qm;case 35676:return Xm;case 5124:case 35670:return Km;case 35667:case 35671:return Ym;case 35668:case 35672:return Jm;case 35669:case 35673:return Zm;case 5125:return Qm;case 36294:return eg;case 36295:return tg;case 36296:return ng;case 35678:case 36198:case 36298:case 36306:case 35682:return ig;case 35679:case 36299:case 36307:return rg;case 35680:case 36300:case 36308:case 36293:return sg;case 36289:case 36303:case 36311:case 36292:return ag}}function lg(n,e){n.uniform1fv(this.addr,e)}function cg(n,e){const t=rr(e,this.size,2);n.uniform2fv(this.addr,t)}function ug(n,e){const t=rr(e,this.size,3);n.uniform3fv(this.addr,t)}function hg(n,e){const t=rr(e,this.size,4);n.uniform4fv(this.addr,t)}function dg(n,e){const t=rr(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function fg(n,e){const t=rr(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function pg(n,e){const t=rr(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function mg(n,e){n.uniform1iv(this.addr,e)}function gg(n,e){n.uniform2iv(this.addr,e)}function _g(n,e){n.uniform3iv(this.addr,e)}function vg(n,e){n.uniform4iv(this.addr,e)}function yg(n,e){n.uniform1uiv(this.addr,e)}function Sg(n,e){n.uniform2uiv(this.addr,e)}function xg(n,e){n.uniform3uiv(this.addr,e)}function Eg(n,e){n.uniform4uiv(this.addr,e)}function wg(n,e,t){const i=this.cache,r=e.length,s=na(t,r);pt(i,s)||(n.uniform1iv(this.addr,s),mt(i,s));for(let a=0;a!==r;++a)t.setTexture2D(e[a]||ju,s[a])}function bg(n,e,t){const i=this.cache,r=e.length,s=na(t,r);pt(i,s)||(n.uniform1iv(this.addr,s),mt(i,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||Xu,s[a])}function Ag(n,e,t){const i=this.cache,r=e.length,s=na(t,r);pt(i,s)||(n.uniform1iv(this.addr,s),mt(i,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||Ku,s[a])}function Tg(n,e,t){const i=this.cache,r=e.length,s=na(t,r);pt(i,s)||(n.uniform1iv(this.addr,s),mt(i,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||qu,s[a])}function Mg(n){switch(n){case 5126:return lg;case 35664:return cg;case 35665:return ug;case 35666:return hg;case 35674:return dg;case 35675:return fg;case 35676:return pg;case 5124:case 35670:return mg;case 35667:case 35671:return gg;case 35668:case 35672:return _g;case 35669:case 35673:return vg;case 5125:return yg;case 36294:return Sg;case 36295:return xg;case 36296:return Eg;case 35678:case 36198:case 36298:case 36306:case 35682:return wg;case 35679:case 36299:case 36307:return bg;case 35680:case 36300:case 36308:case 36293:return Ag;case 36289:case 36303:case 36311:case 36292:return Tg}}class Rg{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=og(t.type)}}class Cg{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Mg(t.type)}}class Pg{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,t[o.id],i)}}}const Ba=/(\w+)(\])?(\[|\.)?/g;function lc(n,e){n.seq.push(e),n.map[e.id]=e}function Lg(n,e,t){const i=n.name,r=i.length;for(Ba.lastIndex=0;;){const s=Ba.exec(i),a=Ba.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){lc(t,c===void 0?new Rg(o,n,e):new Cg(o,n,e));break}else{let h=t.map[o];h===void 0&&(h=new Pg(o),lc(t,h)),t=h}}}class ks{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),a=e.getUniformLocation(t,s.name);Lg(s,a,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,a=t.length;s!==a;++s){const o=t[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in t&&i.push(a)}return i}}function cc(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const Og=37297;let Ig=0;function Ug(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}function Ng(n){const e=qe.getPrimaries(qe.workingColorSpace),t=qe.getPrimaries(n);let i;switch(e===t?i="":e===Gs&&t===Hs?i="LinearDisplayP3ToLinearSRGB":e===Hs&&t===Gs&&(i="LinearSRGBToLinearDisplayP3"),n){case Yn:case ea:return[i,"LinearTransferOETF"];case nn:case dl:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function uc(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const a=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+Ug(n.getShaderSource(e),a)}else return r}function Dg(n,e){const t=Ng(e);return`vec4 ${n}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function kg(n,e){let t;switch(e){case Yh:t="Linear";break;case Jh:t="Reinhard";break;case Zh:t="Cineon";break;case Qh:t="ACESFilmic";break;case td:t="AgX";break;case nd:t="Neutral";break;case ed:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const fs=new j;function Fg(){qe.getLuminanceCoefficients(fs);const n=fs.x.toFixed(4),e=fs.y.toFixed(4),t=fs.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Bg(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(mr).join(`
`)}function Hg(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function Gg(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),a=s.name;let o=1;s.type===n.FLOAT_MAT2&&(o=2),s.type===n.FLOAT_MAT3&&(o=3),s.type===n.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function mr(n){return n!==""}function hc(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function dc(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const zg=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ho(n){return n.replace(zg,Wg)}const Vg=new Map;function Wg(n,e){let t=Ue[e];if(t===void 0){const i=Vg.get(e);if(i!==void 0)t=Ue[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Ho(t)}const $g=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function fc(n){return n.replace($g,jg)}function jg(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function pc(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function qg(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===vu?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===Ch?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===En&&(e="SHADOWMAP_TYPE_VSM"),e}function Xg(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Ji:case Zi:e="ENVMAP_TYPE_CUBE";break;case Qs:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Kg(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Zi:e="ENVMAP_MODE_REFRACTION";break}return e}function Yg(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case yu:e="ENVMAP_BLENDING_MULTIPLY";break;case Xh:e="ENVMAP_BLENDING_MIX";break;case Kh:e="ENVMAP_BLENDING_ADD";break}return e}function Jg(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function Zg(n,e,t,i){const r=n.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=qg(t),c=Xg(t),u=Kg(t),h=Yg(t),d=Jg(t),f=Bg(t),g=Hg(s),_=r.createProgram();let p,m,S=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(mr).join(`
`),p.length>0&&(p+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(mr).join(`
`),m.length>0&&(m+=`
`)):(p=[pc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(mr).join(`
`),m=[pc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==qn?"#define TONE_MAPPING":"",t.toneMapping!==qn?Ue.tonemapping_pars_fragment:"",t.toneMapping!==qn?kg("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ue.colorspace_pars_fragment,Dg("linearToOutputTexel",t.outputColorSpace),Fg(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(mr).join(`
`)),a=Ho(a),a=hc(a,t),a=dc(a,t),o=Ho(o),o=hc(o,t),o=dc(o,t),a=fc(a),o=fc(o),t.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,p=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,m=["#define varying in",t.glslVersion===Ll?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Ll?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const y=S+p+a,b=S+m+o,M=cc(r,r.VERTEX_SHADER,y),T=cc(r,r.FRAGMENT_SHADER,b);r.attachShader(_,M),r.attachShader(_,T),t.index0AttributeName!==void 0?r.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_);function A(x){if(n.debug.checkShaderErrors){const P=r.getProgramInfoLog(_).trim(),L=r.getShaderInfoLog(M).trim(),I=r.getShaderInfoLog(T).trim();let F=!0,z=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if(F=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,_,M,T);else{const G=uc(r,M,"vertex"),V=uc(r,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Material Name: `+x.name+`
Material Type: `+x.type+`

Program Info Log: `+P+`
`+G+`
`+V)}else P!==""?console.warn("THREE.WebGLProgram: Program Info Log:",P):(L===""||I==="")&&(z=!1);z&&(x.diagnostics={runnable:F,programLog:P,vertexShader:{log:L,prefix:p},fragmentShader:{log:I,prefix:m}})}r.deleteShader(M),r.deleteShader(T),C=new ks(r,_),D=Gg(r,_)}let C;this.getUniforms=function(){return C===void 0&&A(this),C};let D;this.getAttributes=function(){return D===void 0&&A(this),D};let v=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return v===!1&&(v=r.getProgramParameter(_,Og)),v},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Ig++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=M,this.fragmentShader=T,this}let Qg=0;class e_{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new t_(e),t.set(e,i)),i}}class t_{constructor(e){this.id=Qg++,this.code=e,this.usedTimes=0}}function n_(n,e,t,i,r,s,a){const o=new Du,l=new e_,c=new Set,u=[],h=r.logarithmicDepthBuffer,d=r.reverseDepthBuffer,f=r.vertexTextures;let g=r.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(v){return c.add(v),v===0?"uv":`uv${v}`}function m(v,x,P,L,I){const F=L.fog,z=I.geometry,G=v.isMeshStandardMaterial?L.environment:null,V=(v.isMeshStandardMaterial?t:e).get(v.envMap||G),se=V&&V.mapping===Qs?V.image.height:null,le=_[v.type];v.precision!==null&&(g=r.getMaxPrecision(v.precision),g!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",g,"instead."));const pe=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,O=pe!==void 0?pe.length:0;let Y=0;z.morphAttributes.position!==void 0&&(Y=1),z.morphAttributes.normal!==void 0&&(Y=2),z.morphAttributes.color!==void 0&&(Y=3);let N,X,J,ee;if(le){const Tt=cn[le];N=Tt.vertexShader,X=Tt.fragmentShader}else N=v.vertexShader,X=v.fragmentShader,l.update(v),J=l.getVertexShaderID(v),ee=l.getFragmentShaderID(v);const _e=n.getRenderTarget(),be=I.isInstancedMesh===!0,De=I.isBatchedMesh===!0,Ye=!!v.map,He=!!v.matcap,U=!!V,It=!!v.aoMap,Fe=!!v.lightMap,ze=!!v.bumpMap,Ce=!!v.normalMap,nt=!!v.displacementMap,Oe=!!v.emissiveMap,R=!!v.metalnessMap,E=!!v.roughnessMap,W=v.anisotropy>0,Q=v.clearcoat>0,ne=v.dispersion>0,Z=v.iridescence>0,Ee=v.sheen>0,ce=v.transmission>0,me=W&&!!v.anisotropyMap,Ve=Q&&!!v.clearcoatMap,ie=Q&&!!v.clearcoatNormalMap,ve=Q&&!!v.clearcoatRoughnessMap,Pe=Z&&!!v.iridescenceMap,Le=Z&&!!v.iridescenceThicknessMap,ye=Ee&&!!v.sheenColorMap,Be=Ee&&!!v.sheenRoughnessMap,Ie=!!v.specularMap,et=!!v.specularColorMap,k=!!v.specularIntensityMap,de=ce&&!!v.transmissionMap,K=ce&&!!v.thicknessMap,te=!!v.gradientMap,ue=!!v.alphaMap,fe=v.alphaTest>0,Ge=!!v.alphaHash,ht=!!v.extensions;let At=qn;v.toneMapped&&(_e===null||_e.isXRRenderTarget===!0)&&(At=n.toneMapping);const We={shaderID:le,shaderType:v.type,shaderName:v.name,vertexShader:N,fragmentShader:X,defines:v.defines,customVertexShaderID:J,customFragmentShaderID:ee,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:g,batching:De,batchingColor:De&&I._colorsTexture!==null,instancing:be,instancingColor:be&&I.instanceColor!==null,instancingMorph:be&&I.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:_e===null?n.outputColorSpace:_e.isXRRenderTarget===!0?_e.texture.colorSpace:Yn,alphaToCoverage:!!v.alphaToCoverage,map:Ye,matcap:He,envMap:U,envMapMode:U&&V.mapping,envMapCubeUVHeight:se,aoMap:It,lightMap:Fe,bumpMap:ze,normalMap:Ce,displacementMap:f&&nt,emissiveMap:Oe,normalMapObjectSpace:Ce&&v.normalMapType===od,normalMapTangentSpace:Ce&&v.normalMapType===ad,metalnessMap:R,roughnessMap:E,anisotropy:W,anisotropyMap:me,clearcoat:Q,clearcoatMap:Ve,clearcoatNormalMap:ie,clearcoatRoughnessMap:ve,dispersion:ne,iridescence:Z,iridescenceMap:Pe,iridescenceThicknessMap:Le,sheen:Ee,sheenColorMap:ye,sheenRoughnessMap:Be,specularMap:Ie,specularColorMap:et,specularIntensityMap:k,transmission:ce,transmissionMap:de,thicknessMap:K,gradientMap:te,opaque:v.transparent===!1&&v.blending===$i&&v.alphaToCoverage===!1,alphaMap:ue,alphaTest:fe,alphaHash:Ge,combine:v.combine,mapUv:Ye&&p(v.map.channel),aoMapUv:It&&p(v.aoMap.channel),lightMapUv:Fe&&p(v.lightMap.channel),bumpMapUv:ze&&p(v.bumpMap.channel),normalMapUv:Ce&&p(v.normalMap.channel),displacementMapUv:nt&&p(v.displacementMap.channel),emissiveMapUv:Oe&&p(v.emissiveMap.channel),metalnessMapUv:R&&p(v.metalnessMap.channel),roughnessMapUv:E&&p(v.roughnessMap.channel),anisotropyMapUv:me&&p(v.anisotropyMap.channel),clearcoatMapUv:Ve&&p(v.clearcoatMap.channel),clearcoatNormalMapUv:ie&&p(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ve&&p(v.clearcoatRoughnessMap.channel),iridescenceMapUv:Pe&&p(v.iridescenceMap.channel),iridescenceThicknessMapUv:Le&&p(v.iridescenceThicknessMap.channel),sheenColorMapUv:ye&&p(v.sheenColorMap.channel),sheenRoughnessMapUv:Be&&p(v.sheenRoughnessMap.channel),specularMapUv:Ie&&p(v.specularMap.channel),specularColorMapUv:et&&p(v.specularColorMap.channel),specularIntensityMapUv:k&&p(v.specularIntensityMap.channel),transmissionMapUv:de&&p(v.transmissionMap.channel),thicknessMapUv:K&&p(v.thicknessMap.channel),alphaMapUv:ue&&p(v.alphaMap.channel),vertexTangents:!!z.attributes.tangent&&(Ce||W),vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,pointsUvs:I.isPoints===!0&&!!z.attributes.uv&&(Ye||ue),fog:!!F,useFog:v.fog===!0,fogExp2:!!F&&F.isFogExp2,flatShading:v.flatShading===!0,sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:d,skinning:I.isSkinnedMesh===!0,morphTargets:z.morphAttributes.position!==void 0,morphNormals:z.morphAttributes.normal!==void 0,morphColors:z.morphAttributes.color!==void 0,morphTargetsCount:O,morphTextureStride:Y,numDirLights:x.directional.length,numPointLights:x.point.length,numSpotLights:x.spot.length,numSpotLightMaps:x.spotLightMap.length,numRectAreaLights:x.rectArea.length,numHemiLights:x.hemi.length,numDirLightShadows:x.directionalShadowMap.length,numPointLightShadows:x.pointShadowMap.length,numSpotLightShadows:x.spotShadowMap.length,numSpotLightShadowsWithMaps:x.numSpotLightShadowsWithMaps,numLightProbes:x.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:v.dithering,shadowMapEnabled:n.shadowMap.enabled&&P.length>0,shadowMapType:n.shadowMap.type,toneMapping:At,decodeVideoTexture:Ye&&v.map.isVideoTexture===!0&&qe.getTransfer(v.map.colorSpace)===rt,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===Rn,flipSided:v.side===Lt,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:ht&&v.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ht&&v.extensions.multiDraw===!0||De)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return We.vertexUv1s=c.has(1),We.vertexUv2s=c.has(2),We.vertexUv3s=c.has(3),c.clear(),We}function S(v){const x=[];if(v.shaderID?x.push(v.shaderID):(x.push(v.customVertexShaderID),x.push(v.customFragmentShaderID)),v.defines!==void 0)for(const P in v.defines)x.push(P),x.push(v.defines[P]);return v.isRawShaderMaterial===!1&&(y(x,v),b(x,v),x.push(n.outputColorSpace)),x.push(v.customProgramCacheKey),x.join()}function y(v,x){v.push(x.precision),v.push(x.outputColorSpace),v.push(x.envMapMode),v.push(x.envMapCubeUVHeight),v.push(x.mapUv),v.push(x.alphaMapUv),v.push(x.lightMapUv),v.push(x.aoMapUv),v.push(x.bumpMapUv),v.push(x.normalMapUv),v.push(x.displacementMapUv),v.push(x.emissiveMapUv),v.push(x.metalnessMapUv),v.push(x.roughnessMapUv),v.push(x.anisotropyMapUv),v.push(x.clearcoatMapUv),v.push(x.clearcoatNormalMapUv),v.push(x.clearcoatRoughnessMapUv),v.push(x.iridescenceMapUv),v.push(x.iridescenceThicknessMapUv),v.push(x.sheenColorMapUv),v.push(x.sheenRoughnessMapUv),v.push(x.specularMapUv),v.push(x.specularColorMapUv),v.push(x.specularIntensityMapUv),v.push(x.transmissionMapUv),v.push(x.thicknessMapUv),v.push(x.combine),v.push(x.fogExp2),v.push(x.sizeAttenuation),v.push(x.morphTargetsCount),v.push(x.morphAttributeCount),v.push(x.numDirLights),v.push(x.numPointLights),v.push(x.numSpotLights),v.push(x.numSpotLightMaps),v.push(x.numHemiLights),v.push(x.numRectAreaLights),v.push(x.numDirLightShadows),v.push(x.numPointLightShadows),v.push(x.numSpotLightShadows),v.push(x.numSpotLightShadowsWithMaps),v.push(x.numLightProbes),v.push(x.shadowMapType),v.push(x.toneMapping),v.push(x.numClippingPlanes),v.push(x.numClipIntersection),v.push(x.depthPacking)}function b(v,x){o.disableAll(),x.supportsVertexTextures&&o.enable(0),x.instancing&&o.enable(1),x.instancingColor&&o.enable(2),x.instancingMorph&&o.enable(3),x.matcap&&o.enable(4),x.envMap&&o.enable(5),x.normalMapObjectSpace&&o.enable(6),x.normalMapTangentSpace&&o.enable(7),x.clearcoat&&o.enable(8),x.iridescence&&o.enable(9),x.alphaTest&&o.enable(10),x.vertexColors&&o.enable(11),x.vertexAlphas&&o.enable(12),x.vertexUv1s&&o.enable(13),x.vertexUv2s&&o.enable(14),x.vertexUv3s&&o.enable(15),x.vertexTangents&&o.enable(16),x.anisotropy&&o.enable(17),x.alphaHash&&o.enable(18),x.batching&&o.enable(19),x.dispersion&&o.enable(20),x.batchingColor&&o.enable(21),v.push(o.mask),o.disableAll(),x.fog&&o.enable(0),x.useFog&&o.enable(1),x.flatShading&&o.enable(2),x.logarithmicDepthBuffer&&o.enable(3),x.reverseDepthBuffer&&o.enable(4),x.skinning&&o.enable(5),x.morphTargets&&o.enable(6),x.morphNormals&&o.enable(7),x.morphColors&&o.enable(8),x.premultipliedAlpha&&o.enable(9),x.shadowMapEnabled&&o.enable(10),x.doubleSided&&o.enable(11),x.flipSided&&o.enable(12),x.useDepthPacking&&o.enable(13),x.dithering&&o.enable(14),x.transmission&&o.enable(15),x.sheen&&o.enable(16),x.opaque&&o.enable(17),x.pointsUvs&&o.enable(18),x.decodeVideoTexture&&o.enable(19),x.alphaToCoverage&&o.enable(20),v.push(o.mask)}function M(v){const x=_[v.type];let P;if(x){const L=cn[x];P=kd.clone(L.uniforms)}else P=v.uniforms;return P}function T(v,x){let P;for(let L=0,I=u.length;L<I;L++){const F=u[L];if(F.cacheKey===x){P=F,++P.usedTimes;break}}return P===void 0&&(P=new Zg(n,x,v,s),u.push(P)),P}function A(v){if(--v.usedTimes===0){const x=u.indexOf(v);u[x]=u[u.length-1],u.pop(),v.destroy()}}function C(v){l.remove(v)}function D(){l.dispose()}return{getParameters:m,getProgramCacheKey:S,getUniforms:M,acquireProgram:T,releaseProgram:A,releaseShaderCache:C,programs:u,dispose:D}}function i_(){let n=new WeakMap;function e(a){return n.has(a)}function t(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function r(a,o,l){n.get(a)[o]=l}function s(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:s}}function r_(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function mc(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function gc(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function a(h,d,f,g,_,p){let m=n[e];return m===void 0?(m={id:h.id,object:h,geometry:d,material:f,groupOrder:g,renderOrder:h.renderOrder,z:_,group:p},n[e]=m):(m.id=h.id,m.object=h,m.geometry=d,m.material=f,m.groupOrder=g,m.renderOrder=h.renderOrder,m.z=_,m.group=p),e++,m}function o(h,d,f,g,_,p){const m=a(h,d,f,g,_,p);f.transmission>0?i.push(m):f.transparent===!0?r.push(m):t.push(m)}function l(h,d,f,g,_,p){const m=a(h,d,f,g,_,p);f.transmission>0?i.unshift(m):f.transparent===!0?r.unshift(m):t.unshift(m)}function c(h,d){t.length>1&&t.sort(h||r_),i.length>1&&i.sort(d||mc),r.length>1&&r.sort(d||mc)}function u(){for(let h=e,d=n.length;h<d;h++){const f=n[h];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:o,unshift:l,finish:u,sort:c}}function s_(){let n=new WeakMap;function e(i,r){const s=n.get(i);let a;return s===void 0?(a=new gc,n.set(i,[a])):r>=s.length?(a=new gc,s.push(a)):a=s[r],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function a_(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new j,color:new Ke};break;case"SpotLight":t={position:new j,direction:new j,color:new Ke,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new j,color:new Ke,distance:0,decay:0};break;case"HemisphereLight":t={direction:new j,skyColor:new Ke,groundColor:new Ke};break;case"RectAreaLight":t={color:new Ke,position:new j,halfWidth:new j,halfHeight:new j};break}return n[e.id]=t,t}}}function o_(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Qe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Qe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Qe,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let l_=0;function c_(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function u_(n){const e=new a_,t=o_(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new j);const r=new j,s=new ut,a=new ut;function o(c){let u=0,h=0,d=0;for(let D=0;D<9;D++)i.probe[D].set(0,0,0);let f=0,g=0,_=0,p=0,m=0,S=0,y=0,b=0,M=0,T=0,A=0;c.sort(c_);for(let D=0,v=c.length;D<v;D++){const x=c[D],P=x.color,L=x.intensity,I=x.distance,F=x.shadow&&x.shadow.map?x.shadow.map.texture:null;if(x.isAmbientLight)u+=P.r*L,h+=P.g*L,d+=P.b*L;else if(x.isLightProbe){for(let z=0;z<9;z++)i.probe[z].addScaledVector(x.sh.coefficients[z],L);A++}else if(x.isDirectionalLight){const z=e.get(x);if(z.color.copy(x.color).multiplyScalar(x.intensity),x.castShadow){const G=x.shadow,V=t.get(x);V.shadowIntensity=G.intensity,V.shadowBias=G.bias,V.shadowNormalBias=G.normalBias,V.shadowRadius=G.radius,V.shadowMapSize=G.mapSize,i.directionalShadow[f]=V,i.directionalShadowMap[f]=F,i.directionalShadowMatrix[f]=x.shadow.matrix,S++}i.directional[f]=z,f++}else if(x.isSpotLight){const z=e.get(x);z.position.setFromMatrixPosition(x.matrixWorld),z.color.copy(P).multiplyScalar(L),z.distance=I,z.coneCos=Math.cos(x.angle),z.penumbraCos=Math.cos(x.angle*(1-x.penumbra)),z.decay=x.decay,i.spot[_]=z;const G=x.shadow;if(x.map&&(i.spotLightMap[M]=x.map,M++,G.updateMatrices(x),x.castShadow&&T++),i.spotLightMatrix[_]=G.matrix,x.castShadow){const V=t.get(x);V.shadowIntensity=G.intensity,V.shadowBias=G.bias,V.shadowNormalBias=G.normalBias,V.shadowRadius=G.radius,V.shadowMapSize=G.mapSize,i.spotShadow[_]=V,i.spotShadowMap[_]=F,b++}_++}else if(x.isRectAreaLight){const z=e.get(x);z.color.copy(P).multiplyScalar(L),z.halfWidth.set(x.width*.5,0,0),z.halfHeight.set(0,x.height*.5,0),i.rectArea[p]=z,p++}else if(x.isPointLight){const z=e.get(x);if(z.color.copy(x.color).multiplyScalar(x.intensity),z.distance=x.distance,z.decay=x.decay,x.castShadow){const G=x.shadow,V=t.get(x);V.shadowIntensity=G.intensity,V.shadowBias=G.bias,V.shadowNormalBias=G.normalBias,V.shadowRadius=G.radius,V.shadowMapSize=G.mapSize,V.shadowCameraNear=G.camera.near,V.shadowCameraFar=G.camera.far,i.pointShadow[g]=V,i.pointShadowMap[g]=F,i.pointShadowMatrix[g]=x.shadow.matrix,y++}i.point[g]=z,g++}else if(x.isHemisphereLight){const z=e.get(x);z.skyColor.copy(x.color).multiplyScalar(L),z.groundColor.copy(x.groundColor).multiplyScalar(L),i.hemi[m]=z,m++}}p>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=oe.LTC_FLOAT_1,i.rectAreaLTC2=oe.LTC_FLOAT_2):(i.rectAreaLTC1=oe.LTC_HALF_1,i.rectAreaLTC2=oe.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=h,i.ambient[2]=d;const C=i.hash;(C.directionalLength!==f||C.pointLength!==g||C.spotLength!==_||C.rectAreaLength!==p||C.hemiLength!==m||C.numDirectionalShadows!==S||C.numPointShadows!==y||C.numSpotShadows!==b||C.numSpotMaps!==M||C.numLightProbes!==A)&&(i.directional.length=f,i.spot.length=_,i.rectArea.length=p,i.point.length=g,i.hemi.length=m,i.directionalShadow.length=S,i.directionalShadowMap.length=S,i.pointShadow.length=y,i.pointShadowMap.length=y,i.spotShadow.length=b,i.spotShadowMap.length=b,i.directionalShadowMatrix.length=S,i.pointShadowMatrix.length=y,i.spotLightMatrix.length=b+M-T,i.spotLightMap.length=M,i.numSpotLightShadowsWithMaps=T,i.numLightProbes=A,C.directionalLength=f,C.pointLength=g,C.spotLength=_,C.rectAreaLength=p,C.hemiLength=m,C.numDirectionalShadows=S,C.numPointShadows=y,C.numSpotShadows=b,C.numSpotMaps=M,C.numLightProbes=A,i.version=l_++)}function l(c,u){let h=0,d=0,f=0,g=0,_=0;const p=u.matrixWorldInverse;for(let m=0,S=c.length;m<S;m++){const y=c[m];if(y.isDirectionalLight){const b=i.directional[h];b.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),b.direction.sub(r),b.direction.transformDirection(p),h++}else if(y.isSpotLight){const b=i.spot[f];b.position.setFromMatrixPosition(y.matrixWorld),b.position.applyMatrix4(p),b.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),b.direction.sub(r),b.direction.transformDirection(p),f++}else if(y.isRectAreaLight){const b=i.rectArea[g];b.position.setFromMatrixPosition(y.matrixWorld),b.position.applyMatrix4(p),a.identity(),s.copy(y.matrixWorld),s.premultiply(p),a.extractRotation(s),b.halfWidth.set(y.width*.5,0,0),b.halfHeight.set(0,y.height*.5,0),b.halfWidth.applyMatrix4(a),b.halfHeight.applyMatrix4(a),g++}else if(y.isPointLight){const b=i.point[d];b.position.setFromMatrixPosition(y.matrixWorld),b.position.applyMatrix4(p),d++}else if(y.isHemisphereLight){const b=i.hemi[_];b.direction.setFromMatrixPosition(y.matrixWorld),b.direction.transformDirection(p),_++}}}return{setup:o,setupView:l,state:i}}function _c(n){const e=new u_(n),t=[],i=[];function r(u){c.camera=u,t.length=0,i.length=0}function s(u){t.push(u)}function a(u){i.push(u)}function o(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:o,setupLightsView:l,pushLight:s,pushShadow:a}}function h_(n){let e=new WeakMap;function t(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new _c(n),e.set(r,[o])):s>=a.length?(o=new _c(n),a.push(o)):o=a[s],o}function i(){e=new WeakMap}return{get:t,dispose:i}}class d_ extends Gr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=rd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class f_ extends Gr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const p_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,m_=`uniform sampler2D shadow_pass;
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
}`;function g_(n,e,t){let i=new Vu;const r=new Qe,s=new Qe,a=new ct,o=new d_({depthPacking:sd}),l=new f_,c={},u=t.maxTextureSize,h={[Xn]:Lt,[Lt]:Xn,[Rn]:Rn},d=new Kn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Qe},radius:{value:4}},vertexShader:p_,fragmentShader:m_}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const g=new In;g.setAttribute("position",new hn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Xt(g,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=vu;let m=this.type;this.render=function(T,A,C){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||T.length===0)return;const D=n.getRenderTarget(),v=n.getActiveCubeFace(),x=n.getActiveMipmapLevel(),P=n.state;P.setBlending(jn),P.buffers.color.setClear(1,1,1,1),P.buffers.depth.setTest(!0),P.setScissorTest(!1);const L=m!==En&&this.type===En,I=m===En&&this.type!==En;for(let F=0,z=T.length;F<z;F++){const G=T[F],V=G.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",G,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;r.copy(V.mapSize);const se=V.getFrameExtents();if(r.multiply(se),s.copy(V.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/se.x),r.x=s.x*se.x,V.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/se.y),r.y=s.y*se.y,V.mapSize.y=s.y)),V.map===null||L===!0||I===!0){const pe=this.type!==En?{minFilter:qt,magFilter:qt}:{};V.map!==null&&V.map.dispose(),V.map=new yi(r.x,r.y,pe),V.map.texture.name=G.name+".shadowMap",V.camera.updateProjectionMatrix()}n.setRenderTarget(V.map),n.clear();const le=V.getViewportCount();for(let pe=0;pe<le;pe++){const O=V.getViewport(pe);a.set(s.x*O.x,s.y*O.y,s.x*O.z,s.y*O.w),P.viewport(a),V.updateMatrices(G,pe),i=V.getFrustum(),b(A,C,V.camera,G,this.type)}V.isPointLightShadow!==!0&&this.type===En&&S(V,C),V.needsUpdate=!1}m=this.type,p.needsUpdate=!1,n.setRenderTarget(D,v,x)};function S(T,A){const C=e.update(_);d.defines.VSM_SAMPLES!==T.blurSamples&&(d.defines.VSM_SAMPLES=T.blurSamples,f.defines.VSM_SAMPLES=T.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new yi(r.x,r.y)),d.uniforms.shadow_pass.value=T.map.texture,d.uniforms.resolution.value=T.mapSize,d.uniforms.radius.value=T.radius,n.setRenderTarget(T.mapPass),n.clear(),n.renderBufferDirect(A,null,C,d,_,null),f.uniforms.shadow_pass.value=T.mapPass.texture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,n.setRenderTarget(T.map),n.clear(),n.renderBufferDirect(A,null,C,f,_,null)}function y(T,A,C,D){let v=null;const x=C.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(x!==void 0)v=x;else if(v=C.isPointLight===!0?l:o,n.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const P=v.uuid,L=A.uuid;let I=c[P];I===void 0&&(I={},c[P]=I);let F=I[L];F===void 0&&(F=v.clone(),I[L]=F,A.addEventListener("dispose",M)),v=F}if(v.visible=A.visible,v.wireframe=A.wireframe,D===En?v.side=A.shadowSide!==null?A.shadowSide:A.side:v.side=A.shadowSide!==null?A.shadowSide:h[A.side],v.alphaMap=A.alphaMap,v.alphaTest=A.alphaTest,v.map=A.map,v.clipShadows=A.clipShadows,v.clippingPlanes=A.clippingPlanes,v.clipIntersection=A.clipIntersection,v.displacementMap=A.displacementMap,v.displacementScale=A.displacementScale,v.displacementBias=A.displacementBias,v.wireframeLinewidth=A.wireframeLinewidth,v.linewidth=A.linewidth,C.isPointLight===!0&&v.isMeshDistanceMaterial===!0){const P=n.properties.get(v);P.light=C}return v}function b(T,A,C,D,v){if(T.visible===!1)return;if(T.layers.test(A.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&v===En)&&(!T.frustumCulled||i.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,T.matrixWorld);const L=e.update(T),I=T.material;if(Array.isArray(I)){const F=L.groups;for(let z=0,G=F.length;z<G;z++){const V=F[z],se=I[V.materialIndex];if(se&&se.visible){const le=y(T,se,D,v);T.onBeforeShadow(n,T,A,C,L,le,V),n.renderBufferDirect(C,null,L,le,T,V),T.onAfterShadow(n,T,A,C,L,le,V)}}}else if(I.visible){const F=y(T,I,D,v);T.onBeforeShadow(n,T,A,C,L,F,null),n.renderBufferDirect(C,null,L,F,T,null),T.onAfterShadow(n,T,A,C,L,F,null)}}const P=T.children;for(let L=0,I=P.length;L<I;L++)b(P[L],A,C,D,v)}function M(T){T.target.removeEventListener("dispose",M);for(const C in c){const D=c[C],v=T.target.uuid;v in D&&(D[v].dispose(),delete D[v])}}}const __={[to]:no,[io]:ao,[ro]:oo,[Yi]:so,[no]:to,[ao]:io,[oo]:ro,[so]:Yi};function v_(n){function e(){let k=!1;const de=new ct;let K=null;const te=new ct(0,0,0,0);return{setMask:function(ue){K!==ue&&!k&&(n.colorMask(ue,ue,ue,ue),K=ue)},setLocked:function(ue){k=ue},setClear:function(ue,fe,Ge,ht,At){At===!0&&(ue*=ht,fe*=ht,Ge*=ht),de.set(ue,fe,Ge,ht),te.equals(de)===!1&&(n.clearColor(ue,fe,Ge,ht),te.copy(de))},reset:function(){k=!1,K=null,te.set(-1,0,0,0)}}}function t(){let k=!1,de=!1,K=null,te=null,ue=null;return{setReversed:function(fe){de=fe},setTest:function(fe){fe?J(n.DEPTH_TEST):ee(n.DEPTH_TEST)},setMask:function(fe){K!==fe&&!k&&(n.depthMask(fe),K=fe)},setFunc:function(fe){if(de&&(fe=__[fe]),te!==fe){switch(fe){case to:n.depthFunc(n.NEVER);break;case no:n.depthFunc(n.ALWAYS);break;case io:n.depthFunc(n.LESS);break;case Yi:n.depthFunc(n.LEQUAL);break;case ro:n.depthFunc(n.EQUAL);break;case so:n.depthFunc(n.GEQUAL);break;case ao:n.depthFunc(n.GREATER);break;case oo:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}te=fe}},setLocked:function(fe){k=fe},setClear:function(fe){ue!==fe&&(n.clearDepth(fe),ue=fe)},reset:function(){k=!1,K=null,te=null,ue=null}}}function i(){let k=!1,de=null,K=null,te=null,ue=null,fe=null,Ge=null,ht=null,At=null;return{setTest:function(We){k||(We?J(n.STENCIL_TEST):ee(n.STENCIL_TEST))},setMask:function(We){de!==We&&!k&&(n.stencilMask(We),de=We)},setFunc:function(We,Tt,pn){(K!==We||te!==Tt||ue!==pn)&&(n.stencilFunc(We,Tt,pn),K=We,te=Tt,ue=pn)},setOp:function(We,Tt,pn){(fe!==We||Ge!==Tt||ht!==pn)&&(n.stencilOp(We,Tt,pn),fe=We,Ge=Tt,ht=pn)},setLocked:function(We){k=We},setClear:function(We){At!==We&&(n.clearStencil(We),At=We)},reset:function(){k=!1,de=null,K=null,te=null,ue=null,fe=null,Ge=null,ht=null,At=null}}}const r=new e,s=new t,a=new i,o=new WeakMap,l=new WeakMap;let c={},u={},h=new WeakMap,d=[],f=null,g=!1,_=null,p=null,m=null,S=null,y=null,b=null,M=null,T=new Ke(0,0,0),A=0,C=!1,D=null,v=null,x=null,P=null,L=null;const I=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let F=!1,z=0;const G=n.getParameter(n.VERSION);G.indexOf("WebGL")!==-1?(z=parseFloat(/^WebGL (\d)/.exec(G)[1]),F=z>=1):G.indexOf("OpenGL ES")!==-1&&(z=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),F=z>=2);let V=null,se={};const le=n.getParameter(n.SCISSOR_BOX),pe=n.getParameter(n.VIEWPORT),O=new ct().fromArray(le),Y=new ct().fromArray(pe);function N(k,de,K,te){const ue=new Uint8Array(4),fe=n.createTexture();n.bindTexture(k,fe),n.texParameteri(k,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(k,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Ge=0;Ge<K;Ge++)k===n.TEXTURE_3D||k===n.TEXTURE_2D_ARRAY?n.texImage3D(de,0,n.RGBA,1,1,te,0,n.RGBA,n.UNSIGNED_BYTE,ue):n.texImage2D(de+Ge,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,ue);return fe}const X={};X[n.TEXTURE_2D]=N(n.TEXTURE_2D,n.TEXTURE_2D,1),X[n.TEXTURE_CUBE_MAP]=N(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),X[n.TEXTURE_2D_ARRAY]=N(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),X[n.TEXTURE_3D]=N(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),a.setClear(0),J(n.DEPTH_TEST),s.setFunc(Yi),Fe(!1),ze(Al),J(n.CULL_FACE),U(jn);function J(k){c[k]!==!0&&(n.enable(k),c[k]=!0)}function ee(k){c[k]!==!1&&(n.disable(k),c[k]=!1)}function _e(k,de){return u[k]!==de?(n.bindFramebuffer(k,de),u[k]=de,k===n.DRAW_FRAMEBUFFER&&(u[n.FRAMEBUFFER]=de),k===n.FRAMEBUFFER&&(u[n.DRAW_FRAMEBUFFER]=de),!0):!1}function be(k,de){let K=d,te=!1;if(k){K=h.get(de),K===void 0&&(K=[],h.set(de,K));const ue=k.textures;if(K.length!==ue.length||K[0]!==n.COLOR_ATTACHMENT0){for(let fe=0,Ge=ue.length;fe<Ge;fe++)K[fe]=n.COLOR_ATTACHMENT0+fe;K.length=ue.length,te=!0}}else K[0]!==n.BACK&&(K[0]=n.BACK,te=!0);te&&n.drawBuffers(K)}function De(k){return f!==k?(n.useProgram(k),f=k,!0):!1}const Ye={[hi]:n.FUNC_ADD,[Lh]:n.FUNC_SUBTRACT,[Oh]:n.FUNC_REVERSE_SUBTRACT};Ye[Ih]=n.MIN,Ye[Uh]=n.MAX;const He={[Nh]:n.ZERO,[Dh]:n.ONE,[kh]:n.SRC_COLOR,[Qa]:n.SRC_ALPHA,[Vh]:n.SRC_ALPHA_SATURATE,[Gh]:n.DST_COLOR,[Bh]:n.DST_ALPHA,[Fh]:n.ONE_MINUS_SRC_COLOR,[eo]:n.ONE_MINUS_SRC_ALPHA,[zh]:n.ONE_MINUS_DST_COLOR,[Hh]:n.ONE_MINUS_DST_ALPHA,[Wh]:n.CONSTANT_COLOR,[$h]:n.ONE_MINUS_CONSTANT_COLOR,[jh]:n.CONSTANT_ALPHA,[qh]:n.ONE_MINUS_CONSTANT_ALPHA};function U(k,de,K,te,ue,fe,Ge,ht,At,We){if(k===jn){g===!0&&(ee(n.BLEND),g=!1);return}if(g===!1&&(J(n.BLEND),g=!0),k!==Ph){if(k!==_||We!==C){if((p!==hi||y!==hi)&&(n.blendEquation(n.FUNC_ADD),p=hi,y=hi),We)switch(k){case $i:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Tl:n.blendFunc(n.ONE,n.ONE);break;case Ml:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Rl:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}else switch(k){case $i:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Tl:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Ml:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Rl:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}m=null,S=null,b=null,M=null,T.set(0,0,0),A=0,_=k,C=We}return}ue=ue||de,fe=fe||K,Ge=Ge||te,(de!==p||ue!==y)&&(n.blendEquationSeparate(Ye[de],Ye[ue]),p=de,y=ue),(K!==m||te!==S||fe!==b||Ge!==M)&&(n.blendFuncSeparate(He[K],He[te],He[fe],He[Ge]),m=K,S=te,b=fe,M=Ge),(ht.equals(T)===!1||At!==A)&&(n.blendColor(ht.r,ht.g,ht.b,At),T.copy(ht),A=At),_=k,C=!1}function It(k,de){k.side===Rn?ee(n.CULL_FACE):J(n.CULL_FACE);let K=k.side===Lt;de&&(K=!K),Fe(K),k.blending===$i&&k.transparent===!1?U(jn):U(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),s.setFunc(k.depthFunc),s.setTest(k.depthTest),s.setMask(k.depthWrite),r.setMask(k.colorWrite);const te=k.stencilWrite;a.setTest(te),te&&(a.setMask(k.stencilWriteMask),a.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),a.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),nt(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?J(n.SAMPLE_ALPHA_TO_COVERAGE):ee(n.SAMPLE_ALPHA_TO_COVERAGE)}function Fe(k){D!==k&&(k?n.frontFace(n.CW):n.frontFace(n.CCW),D=k)}function ze(k){k!==Mh?(J(n.CULL_FACE),k!==v&&(k===Al?n.cullFace(n.BACK):k===Rh?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):ee(n.CULL_FACE),v=k}function Ce(k){k!==x&&(F&&n.lineWidth(k),x=k)}function nt(k,de,K){k?(J(n.POLYGON_OFFSET_FILL),(P!==de||L!==K)&&(n.polygonOffset(de,K),P=de,L=K)):ee(n.POLYGON_OFFSET_FILL)}function Oe(k){k?J(n.SCISSOR_TEST):ee(n.SCISSOR_TEST)}function R(k){k===void 0&&(k=n.TEXTURE0+I-1),V!==k&&(n.activeTexture(k),V=k)}function E(k,de,K){K===void 0&&(V===null?K=n.TEXTURE0+I-1:K=V);let te=se[K];te===void 0&&(te={type:void 0,texture:void 0},se[K]=te),(te.type!==k||te.texture!==de)&&(V!==K&&(n.activeTexture(K),V=K),n.bindTexture(k,de||X[k]),te.type=k,te.texture=de)}function W(){const k=se[V];k!==void 0&&k.type!==void 0&&(n.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function Q(){try{n.compressedTexImage2D.apply(n,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ne(){try{n.compressedTexImage3D.apply(n,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Z(){try{n.texSubImage2D.apply(n,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Ee(){try{n.texSubImage3D.apply(n,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ce(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function me(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Ve(){try{n.texStorage2D.apply(n,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ie(){try{n.texStorage3D.apply(n,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ve(){try{n.texImage2D.apply(n,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Pe(){try{n.texImage3D.apply(n,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Le(k){O.equals(k)===!1&&(n.scissor(k.x,k.y,k.z,k.w),O.copy(k))}function ye(k){Y.equals(k)===!1&&(n.viewport(k.x,k.y,k.z,k.w),Y.copy(k))}function Be(k,de){let K=l.get(de);K===void 0&&(K=new WeakMap,l.set(de,K));let te=K.get(k);te===void 0&&(te=n.getUniformBlockIndex(de,k.name),K.set(k,te))}function Ie(k,de){const te=l.get(de).get(k);o.get(de)!==te&&(n.uniformBlockBinding(de,te,k.__bindingPointIndex),o.set(de,te))}function et(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),c={},V=null,se={},u={},h=new WeakMap,d=[],f=null,g=!1,_=null,p=null,m=null,S=null,y=null,b=null,M=null,T=new Ke(0,0,0),A=0,C=!1,D=null,v=null,x=null,P=null,L=null,O.set(0,0,n.canvas.width,n.canvas.height),Y.set(0,0,n.canvas.width,n.canvas.height),r.reset(),s.reset(),a.reset()}return{buffers:{color:r,depth:s,stencil:a},enable:J,disable:ee,bindFramebuffer:_e,drawBuffers:be,useProgram:De,setBlending:U,setMaterial:It,setFlipSided:Fe,setCullFace:ze,setLineWidth:Ce,setPolygonOffset:nt,setScissorTest:Oe,activeTexture:R,bindTexture:E,unbindTexture:W,compressedTexImage2D:Q,compressedTexImage3D:ne,texImage2D:ve,texImage3D:Pe,updateUBOMapping:Be,uniformBlockBinding:Ie,texStorage2D:Ve,texStorage3D:ie,texSubImage2D:Z,texSubImage3D:Ee,compressedTexSubImage2D:ce,compressedTexSubImage3D:me,scissor:Le,viewport:ye,reset:et}}function vc(n,e,t,i){const r=y_(i);switch(t){case bu:return n*e;case Tu:return n*e;case Mu:return n*e*2;case Ru:return n*e/r.components*r.byteLength;case cl:return n*e/r.components*r.byteLength;case Cu:return n*e*2/r.components*r.byteLength;case ul:return n*e*2/r.components*r.byteLength;case Au:return n*e*3/r.components*r.byteLength;case on:return n*e*4/r.components*r.byteLength;case hl:return n*e*4/r.components*r.byteLength;case Ps:case Ls:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Os:case Is:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case po:case go:return Math.max(n,16)*Math.max(e,8)/4;case fo:case mo:return Math.max(n,8)*Math.max(e,8)/2;case _o:case vo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case yo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case So:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case xo:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Eo:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case wo:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case bo:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Ao:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case To:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Mo:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Ro:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Co:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Po:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Lo:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Oo:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Io:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Us:case Uo:case No:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Pu:case Do:return Math.ceil(n/4)*Math.ceil(e/4)*8;case ko:case Fo:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function y_(n){switch(n){case Ln:case xu:return{byteLength:1,components:1};case Tr:case Eu:case kr:return{byteLength:2,components:1};case ol:case ll:return{byteLength:2,components:4};case vi:case al:case Cn:return{byteLength:4,components:1};case wu:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function S_(n,e,t,i,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Qe,u=new WeakMap;let h;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(R,E){return f?new OffscreenCanvas(R,E):Mr("canvas")}function _(R,E,W){let Q=1;const ne=Oe(R);if((ne.width>W||ne.height>W)&&(Q=W/Math.max(ne.width,ne.height)),Q<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const Z=Math.floor(Q*ne.width),Ee=Math.floor(Q*ne.height);h===void 0&&(h=g(Z,Ee));const ce=E?g(Z,Ee):h;return ce.width=Z,ce.height=Ee,ce.getContext("2d").drawImage(R,0,0,Z,Ee),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ne.width+"x"+ne.height+") to ("+Z+"x"+Ee+")."),ce}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ne.width+"x"+ne.height+")."),R;return R}function p(R){return R.generateMipmaps&&R.minFilter!==qt&&R.minFilter!==sn}function m(R){n.generateMipmap(R)}function S(R,E,W,Q,ne=!1){if(R!==null){if(n[R]!==void 0)return n[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let Z=E;if(E===n.RED&&(W===n.FLOAT&&(Z=n.R32F),W===n.HALF_FLOAT&&(Z=n.R16F),W===n.UNSIGNED_BYTE&&(Z=n.R8)),E===n.RED_INTEGER&&(W===n.UNSIGNED_BYTE&&(Z=n.R8UI),W===n.UNSIGNED_SHORT&&(Z=n.R16UI),W===n.UNSIGNED_INT&&(Z=n.R32UI),W===n.BYTE&&(Z=n.R8I),W===n.SHORT&&(Z=n.R16I),W===n.INT&&(Z=n.R32I)),E===n.RG&&(W===n.FLOAT&&(Z=n.RG32F),W===n.HALF_FLOAT&&(Z=n.RG16F),W===n.UNSIGNED_BYTE&&(Z=n.RG8)),E===n.RG_INTEGER&&(W===n.UNSIGNED_BYTE&&(Z=n.RG8UI),W===n.UNSIGNED_SHORT&&(Z=n.RG16UI),W===n.UNSIGNED_INT&&(Z=n.RG32UI),W===n.BYTE&&(Z=n.RG8I),W===n.SHORT&&(Z=n.RG16I),W===n.INT&&(Z=n.RG32I)),E===n.RGB_INTEGER&&(W===n.UNSIGNED_BYTE&&(Z=n.RGB8UI),W===n.UNSIGNED_SHORT&&(Z=n.RGB16UI),W===n.UNSIGNED_INT&&(Z=n.RGB32UI),W===n.BYTE&&(Z=n.RGB8I),W===n.SHORT&&(Z=n.RGB16I),W===n.INT&&(Z=n.RGB32I)),E===n.RGBA_INTEGER&&(W===n.UNSIGNED_BYTE&&(Z=n.RGBA8UI),W===n.UNSIGNED_SHORT&&(Z=n.RGBA16UI),W===n.UNSIGNED_INT&&(Z=n.RGBA32UI),W===n.BYTE&&(Z=n.RGBA8I),W===n.SHORT&&(Z=n.RGBA16I),W===n.INT&&(Z=n.RGBA32I)),E===n.RGB&&W===n.UNSIGNED_INT_5_9_9_9_REV&&(Z=n.RGB9_E5),E===n.RGBA){const Ee=ne?Bs:qe.getTransfer(Q);W===n.FLOAT&&(Z=n.RGBA32F),W===n.HALF_FLOAT&&(Z=n.RGBA16F),W===n.UNSIGNED_BYTE&&(Z=Ee===rt?n.SRGB8_ALPHA8:n.RGBA8),W===n.UNSIGNED_SHORT_4_4_4_4&&(Z=n.RGBA4),W===n.UNSIGNED_SHORT_5_5_5_1&&(Z=n.RGB5_A1)}return(Z===n.R16F||Z===n.R32F||Z===n.RG16F||Z===n.RG32F||Z===n.RGBA16F||Z===n.RGBA32F)&&e.get("EXT_color_buffer_float"),Z}function y(R,E){let W;return R?E===null||E===vi||E===Qi?W=n.DEPTH24_STENCIL8:E===Cn?W=n.DEPTH32F_STENCIL8:E===Tr&&(W=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===vi||E===Qi?W=n.DEPTH_COMPONENT24:E===Cn?W=n.DEPTH_COMPONENT32F:E===Tr&&(W=n.DEPTH_COMPONENT16),W}function b(R,E){return p(R)===!0||R.isFramebufferTexture&&R.minFilter!==qt&&R.minFilter!==sn?Math.log2(Math.max(E.width,E.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?E.mipmaps.length:1}function M(R){const E=R.target;E.removeEventListener("dispose",M),A(E),E.isVideoTexture&&u.delete(E)}function T(R){const E=R.target;E.removeEventListener("dispose",T),D(E)}function A(R){const E=i.get(R);if(E.__webglInit===void 0)return;const W=R.source,Q=d.get(W);if(Q){const ne=Q[E.__cacheKey];ne.usedTimes--,ne.usedTimes===0&&C(R),Object.keys(Q).length===0&&d.delete(W)}i.remove(R)}function C(R){const E=i.get(R);n.deleteTexture(E.__webglTexture);const W=R.source,Q=d.get(W);delete Q[E.__cacheKey],a.memory.textures--}function D(R){const E=i.get(R);if(R.depthTexture&&R.depthTexture.dispose(),R.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++){if(Array.isArray(E.__webglFramebuffer[Q]))for(let ne=0;ne<E.__webglFramebuffer[Q].length;ne++)n.deleteFramebuffer(E.__webglFramebuffer[Q][ne]);else n.deleteFramebuffer(E.__webglFramebuffer[Q]);E.__webglDepthbuffer&&n.deleteRenderbuffer(E.__webglDepthbuffer[Q])}else{if(Array.isArray(E.__webglFramebuffer))for(let Q=0;Q<E.__webglFramebuffer.length;Q++)n.deleteFramebuffer(E.__webglFramebuffer[Q]);else n.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&n.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&n.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let Q=0;Q<E.__webglColorRenderbuffer.length;Q++)E.__webglColorRenderbuffer[Q]&&n.deleteRenderbuffer(E.__webglColorRenderbuffer[Q]);E.__webglDepthRenderbuffer&&n.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const W=R.textures;for(let Q=0,ne=W.length;Q<ne;Q++){const Z=i.get(W[Q]);Z.__webglTexture&&(n.deleteTexture(Z.__webglTexture),a.memory.textures--),i.remove(W[Q])}i.remove(R)}let v=0;function x(){v=0}function P(){const R=v;return R>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+r.maxTextures),v+=1,R}function L(R){const E=[];return E.push(R.wrapS),E.push(R.wrapT),E.push(R.wrapR||0),E.push(R.magFilter),E.push(R.minFilter),E.push(R.anisotropy),E.push(R.internalFormat),E.push(R.format),E.push(R.type),E.push(R.generateMipmaps),E.push(R.premultiplyAlpha),E.push(R.flipY),E.push(R.unpackAlignment),E.push(R.colorSpace),E.join()}function I(R,E){const W=i.get(R);if(R.isVideoTexture&&Ce(R),R.isRenderTargetTexture===!1&&R.version>0&&W.__version!==R.version){const Q=R.image;if(Q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Y(W,R,E);return}}t.bindTexture(n.TEXTURE_2D,W.__webglTexture,n.TEXTURE0+E)}function F(R,E){const W=i.get(R);if(R.version>0&&W.__version!==R.version){Y(W,R,E);return}t.bindTexture(n.TEXTURE_2D_ARRAY,W.__webglTexture,n.TEXTURE0+E)}function z(R,E){const W=i.get(R);if(R.version>0&&W.__version!==R.version){Y(W,R,E);return}t.bindTexture(n.TEXTURE_3D,W.__webglTexture,n.TEXTURE0+E)}function G(R,E){const W=i.get(R);if(R.version>0&&W.__version!==R.version){N(W,R,E);return}t.bindTexture(n.TEXTURE_CUBE_MAP,W.__webglTexture,n.TEXTURE0+E)}const V={[uo]:n.REPEAT,[fi]:n.CLAMP_TO_EDGE,[ho]:n.MIRRORED_REPEAT},se={[qt]:n.NEAREST,[id]:n.NEAREST_MIPMAP_NEAREST,[qr]:n.NEAREST_MIPMAP_LINEAR,[sn]:n.LINEAR,[ha]:n.LINEAR_MIPMAP_NEAREST,[pi]:n.LINEAR_MIPMAP_LINEAR},le={[ld]:n.NEVER,[pd]:n.ALWAYS,[cd]:n.LESS,[Lu]:n.LEQUAL,[ud]:n.EQUAL,[fd]:n.GEQUAL,[hd]:n.GREATER,[dd]:n.NOTEQUAL};function pe(R,E){if(E.type===Cn&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===sn||E.magFilter===ha||E.magFilter===qr||E.magFilter===pi||E.minFilter===sn||E.minFilter===ha||E.minFilter===qr||E.minFilter===pi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(R,n.TEXTURE_WRAP_S,V[E.wrapS]),n.texParameteri(R,n.TEXTURE_WRAP_T,V[E.wrapT]),(R===n.TEXTURE_3D||R===n.TEXTURE_2D_ARRAY)&&n.texParameteri(R,n.TEXTURE_WRAP_R,V[E.wrapR]),n.texParameteri(R,n.TEXTURE_MAG_FILTER,se[E.magFilter]),n.texParameteri(R,n.TEXTURE_MIN_FILTER,se[E.minFilter]),E.compareFunction&&(n.texParameteri(R,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(R,n.TEXTURE_COMPARE_FUNC,le[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===qt||E.minFilter!==qr&&E.minFilter!==pi||E.type===Cn&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||i.get(E).__currentAnisotropy){const W=e.get("EXT_texture_filter_anisotropic");n.texParameterf(R,W.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,r.getMaxAnisotropy())),i.get(E).__currentAnisotropy=E.anisotropy}}}function O(R,E){let W=!1;R.__webglInit===void 0&&(R.__webglInit=!0,E.addEventListener("dispose",M));const Q=E.source;let ne=d.get(Q);ne===void 0&&(ne={},d.set(Q,ne));const Z=L(E);if(Z!==R.__cacheKey){ne[Z]===void 0&&(ne[Z]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,W=!0),ne[Z].usedTimes++;const Ee=ne[R.__cacheKey];Ee!==void 0&&(ne[R.__cacheKey].usedTimes--,Ee.usedTimes===0&&C(E)),R.__cacheKey=Z,R.__webglTexture=ne[Z].texture}return W}function Y(R,E,W){let Q=n.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(Q=n.TEXTURE_2D_ARRAY),E.isData3DTexture&&(Q=n.TEXTURE_3D);const ne=O(R,E),Z=E.source;t.bindTexture(Q,R.__webglTexture,n.TEXTURE0+W);const Ee=i.get(Z);if(Z.version!==Ee.__version||ne===!0){t.activeTexture(n.TEXTURE0+W);const ce=qe.getPrimaries(qe.workingColorSpace),me=E.colorSpace===zn?null:qe.getPrimaries(E.colorSpace),Ve=E.colorSpace===zn||ce===me?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,E.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,E.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ve);let ie=_(E.image,!1,r.maxTextureSize);ie=nt(E,ie);const ve=s.convert(E.format,E.colorSpace),Pe=s.convert(E.type);let Le=S(E.internalFormat,ve,Pe,E.colorSpace,E.isVideoTexture);pe(Q,E);let ye;const Be=E.mipmaps,Ie=E.isVideoTexture!==!0,et=Ee.__version===void 0||ne===!0,k=Z.dataReady,de=b(E,ie);if(E.isDepthTexture)Le=y(E.format===er,E.type),et&&(Ie?t.texStorage2D(n.TEXTURE_2D,1,Le,ie.width,ie.height):t.texImage2D(n.TEXTURE_2D,0,Le,ie.width,ie.height,0,ve,Pe,null));else if(E.isDataTexture)if(Be.length>0){Ie&&et&&t.texStorage2D(n.TEXTURE_2D,de,Le,Be[0].width,Be[0].height);for(let K=0,te=Be.length;K<te;K++)ye=Be[K],Ie?k&&t.texSubImage2D(n.TEXTURE_2D,K,0,0,ye.width,ye.height,ve,Pe,ye.data):t.texImage2D(n.TEXTURE_2D,K,Le,ye.width,ye.height,0,ve,Pe,ye.data);E.generateMipmaps=!1}else Ie?(et&&t.texStorage2D(n.TEXTURE_2D,de,Le,ie.width,ie.height),k&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ie.width,ie.height,ve,Pe,ie.data)):t.texImage2D(n.TEXTURE_2D,0,Le,ie.width,ie.height,0,ve,Pe,ie.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){Ie&&et&&t.texStorage3D(n.TEXTURE_2D_ARRAY,de,Le,Be[0].width,Be[0].height,ie.depth);for(let K=0,te=Be.length;K<te;K++)if(ye=Be[K],E.format!==on)if(ve!==null)if(Ie){if(k)if(E.layerUpdates.size>0){const ue=vc(ye.width,ye.height,E.format,E.type);for(const fe of E.layerUpdates){const Ge=ye.data.subarray(fe*ue/ye.data.BYTES_PER_ELEMENT,(fe+1)*ue/ye.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,K,0,0,fe,ye.width,ye.height,1,ve,Ge,0,0)}E.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,K,0,0,0,ye.width,ye.height,ie.depth,ve,ye.data,0,0)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,K,Le,ye.width,ye.height,ie.depth,0,ye.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ie?k&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,K,0,0,0,ye.width,ye.height,ie.depth,ve,Pe,ye.data):t.texImage3D(n.TEXTURE_2D_ARRAY,K,Le,ye.width,ye.height,ie.depth,0,ve,Pe,ye.data)}else{Ie&&et&&t.texStorage2D(n.TEXTURE_2D,de,Le,Be[0].width,Be[0].height);for(let K=0,te=Be.length;K<te;K++)ye=Be[K],E.format!==on?ve!==null?Ie?k&&t.compressedTexSubImage2D(n.TEXTURE_2D,K,0,0,ye.width,ye.height,ve,ye.data):t.compressedTexImage2D(n.TEXTURE_2D,K,Le,ye.width,ye.height,0,ye.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ie?k&&t.texSubImage2D(n.TEXTURE_2D,K,0,0,ye.width,ye.height,ve,Pe,ye.data):t.texImage2D(n.TEXTURE_2D,K,Le,ye.width,ye.height,0,ve,Pe,ye.data)}else if(E.isDataArrayTexture)if(Ie){if(et&&t.texStorage3D(n.TEXTURE_2D_ARRAY,de,Le,ie.width,ie.height,ie.depth),k)if(E.layerUpdates.size>0){const K=vc(ie.width,ie.height,E.format,E.type);for(const te of E.layerUpdates){const ue=ie.data.subarray(te*K/ie.data.BYTES_PER_ELEMENT,(te+1)*K/ie.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,te,ie.width,ie.height,1,ve,Pe,ue)}E.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ie.width,ie.height,ie.depth,ve,Pe,ie.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Le,ie.width,ie.height,ie.depth,0,ve,Pe,ie.data);else if(E.isData3DTexture)Ie?(et&&t.texStorage3D(n.TEXTURE_3D,de,Le,ie.width,ie.height,ie.depth),k&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ie.width,ie.height,ie.depth,ve,Pe,ie.data)):t.texImage3D(n.TEXTURE_3D,0,Le,ie.width,ie.height,ie.depth,0,ve,Pe,ie.data);else if(E.isFramebufferTexture){if(et)if(Ie)t.texStorage2D(n.TEXTURE_2D,de,Le,ie.width,ie.height);else{let K=ie.width,te=ie.height;for(let ue=0;ue<de;ue++)t.texImage2D(n.TEXTURE_2D,ue,Le,K,te,0,ve,Pe,null),K>>=1,te>>=1}}else if(Be.length>0){if(Ie&&et){const K=Oe(Be[0]);t.texStorage2D(n.TEXTURE_2D,de,Le,K.width,K.height)}for(let K=0,te=Be.length;K<te;K++)ye=Be[K],Ie?k&&t.texSubImage2D(n.TEXTURE_2D,K,0,0,ve,Pe,ye):t.texImage2D(n.TEXTURE_2D,K,Le,ve,Pe,ye);E.generateMipmaps=!1}else if(Ie){if(et){const K=Oe(ie);t.texStorage2D(n.TEXTURE_2D,de,Le,K.width,K.height)}k&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ve,Pe,ie)}else t.texImage2D(n.TEXTURE_2D,0,Le,ve,Pe,ie);p(E)&&m(Q),Ee.__version=Z.version,E.onUpdate&&E.onUpdate(E)}R.__version=E.version}function N(R,E,W){if(E.image.length!==6)return;const Q=O(R,E),ne=E.source;t.bindTexture(n.TEXTURE_CUBE_MAP,R.__webglTexture,n.TEXTURE0+W);const Z=i.get(ne);if(ne.version!==Z.__version||Q===!0){t.activeTexture(n.TEXTURE0+W);const Ee=qe.getPrimaries(qe.workingColorSpace),ce=E.colorSpace===zn?null:qe.getPrimaries(E.colorSpace),me=E.colorSpace===zn||Ee===ce?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,E.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,E.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,me);const Ve=E.isCompressedTexture||E.image[0].isCompressedTexture,ie=E.image[0]&&E.image[0].isDataTexture,ve=[];for(let te=0;te<6;te++)!Ve&&!ie?ve[te]=_(E.image[te],!0,r.maxCubemapSize):ve[te]=ie?E.image[te].image:E.image[te],ve[te]=nt(E,ve[te]);const Pe=ve[0],Le=s.convert(E.format,E.colorSpace),ye=s.convert(E.type),Be=S(E.internalFormat,Le,ye,E.colorSpace),Ie=E.isVideoTexture!==!0,et=Z.__version===void 0||Q===!0,k=ne.dataReady;let de=b(E,Pe);pe(n.TEXTURE_CUBE_MAP,E);let K;if(Ve){Ie&&et&&t.texStorage2D(n.TEXTURE_CUBE_MAP,de,Be,Pe.width,Pe.height);for(let te=0;te<6;te++){K=ve[te].mipmaps;for(let ue=0;ue<K.length;ue++){const fe=K[ue];E.format!==on?Le!==null?Ie?k&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,ue,0,0,fe.width,fe.height,Le,fe.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,ue,Be,fe.width,fe.height,0,fe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ie?k&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,ue,0,0,fe.width,fe.height,Le,ye,fe.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,ue,Be,fe.width,fe.height,0,Le,ye,fe.data)}}}else{if(K=E.mipmaps,Ie&&et){K.length>0&&de++;const te=Oe(ve[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,de,Be,te.width,te.height)}for(let te=0;te<6;te++)if(ie){Ie?k&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,ve[te].width,ve[te].height,Le,ye,ve[te].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,Be,ve[te].width,ve[te].height,0,Le,ye,ve[te].data);for(let ue=0;ue<K.length;ue++){const Ge=K[ue].image[te].image;Ie?k&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,ue+1,0,0,Ge.width,Ge.height,Le,ye,Ge.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,ue+1,Be,Ge.width,Ge.height,0,Le,ye,Ge.data)}}else{Ie?k&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,Le,ye,ve[te]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,Be,Le,ye,ve[te]);for(let ue=0;ue<K.length;ue++){const fe=K[ue];Ie?k&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,ue+1,0,0,Le,ye,fe.image[te]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,ue+1,Be,Le,ye,fe.image[te])}}}p(E)&&m(n.TEXTURE_CUBE_MAP),Z.__version=ne.version,E.onUpdate&&E.onUpdate(E)}R.__version=E.version}function X(R,E,W,Q,ne,Z){const Ee=s.convert(W.format,W.colorSpace),ce=s.convert(W.type),me=S(W.internalFormat,Ee,ce,W.colorSpace);if(!i.get(E).__hasExternalTextures){const ie=Math.max(1,E.width>>Z),ve=Math.max(1,E.height>>Z);ne===n.TEXTURE_3D||ne===n.TEXTURE_2D_ARRAY?t.texImage3D(ne,Z,me,ie,ve,E.depth,0,Ee,ce,null):t.texImage2D(ne,Z,me,ie,ve,0,Ee,ce,null)}t.bindFramebuffer(n.FRAMEBUFFER,R),ze(E)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Q,ne,i.get(W).__webglTexture,0,Fe(E)):(ne===n.TEXTURE_2D||ne>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&ne<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,Q,ne,i.get(W).__webglTexture,Z),t.bindFramebuffer(n.FRAMEBUFFER,null)}function J(R,E,W){if(n.bindRenderbuffer(n.RENDERBUFFER,R),E.depthBuffer){const Q=E.depthTexture,ne=Q&&Q.isDepthTexture?Q.type:null,Z=y(E.stencilBuffer,ne),Ee=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ce=Fe(E);ze(E)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ce,Z,E.width,E.height):W?n.renderbufferStorageMultisample(n.RENDERBUFFER,ce,Z,E.width,E.height):n.renderbufferStorage(n.RENDERBUFFER,Z,E.width,E.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Ee,n.RENDERBUFFER,R)}else{const Q=E.textures;for(let ne=0;ne<Q.length;ne++){const Z=Q[ne],Ee=s.convert(Z.format,Z.colorSpace),ce=s.convert(Z.type),me=S(Z.internalFormat,Ee,ce,Z.colorSpace),Ve=Fe(E);W&&ze(E)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ve,me,E.width,E.height):ze(E)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ve,me,E.width,E.height):n.renderbufferStorage(n.RENDERBUFFER,me,E.width,E.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function ee(R,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,R),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(E.depthTexture).__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),I(E.depthTexture,0);const Q=i.get(E.depthTexture).__webglTexture,ne=Fe(E);if(E.depthTexture.format===ji)ze(E)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,Q,0,ne):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,Q,0);else if(E.depthTexture.format===er)ze(E)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,Q,0,ne):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,Q,0);else throw new Error("Unknown depthTexture format")}function _e(R){const E=i.get(R),W=R.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==R.depthTexture){const Q=R.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),Q){const ne=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,Q.removeEventListener("dispose",ne)};Q.addEventListener("dispose",ne),E.__depthDisposeCallback=ne}E.__boundDepthTexture=Q}if(R.depthTexture&&!E.__autoAllocateDepthBuffer){if(W)throw new Error("target.depthTexture not supported in Cube render targets");ee(E.__webglFramebuffer,R)}else if(W){E.__webglDepthbuffer=[];for(let Q=0;Q<6;Q++)if(t.bindFramebuffer(n.FRAMEBUFFER,E.__webglFramebuffer[Q]),E.__webglDepthbuffer[Q]===void 0)E.__webglDepthbuffer[Q]=n.createRenderbuffer(),J(E.__webglDepthbuffer[Q],R,!1);else{const ne=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Z=E.__webglDepthbuffer[Q];n.bindRenderbuffer(n.RENDERBUFFER,Z),n.framebufferRenderbuffer(n.FRAMEBUFFER,ne,n.RENDERBUFFER,Z)}}else if(t.bindFramebuffer(n.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=n.createRenderbuffer(),J(E.__webglDepthbuffer,R,!1);else{const Q=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ne=E.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,ne),n.framebufferRenderbuffer(n.FRAMEBUFFER,Q,n.RENDERBUFFER,ne)}t.bindFramebuffer(n.FRAMEBUFFER,null)}function be(R,E,W){const Q=i.get(R);E!==void 0&&X(Q.__webglFramebuffer,R,R.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),W!==void 0&&_e(R)}function De(R){const E=R.texture,W=i.get(R),Q=i.get(E);R.addEventListener("dispose",T);const ne=R.textures,Z=R.isWebGLCubeRenderTarget===!0,Ee=ne.length>1;if(Ee||(Q.__webglTexture===void 0&&(Q.__webglTexture=n.createTexture()),Q.__version=E.version,a.memory.textures++),Z){W.__webglFramebuffer=[];for(let ce=0;ce<6;ce++)if(E.mipmaps&&E.mipmaps.length>0){W.__webglFramebuffer[ce]=[];for(let me=0;me<E.mipmaps.length;me++)W.__webglFramebuffer[ce][me]=n.createFramebuffer()}else W.__webglFramebuffer[ce]=n.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){W.__webglFramebuffer=[];for(let ce=0;ce<E.mipmaps.length;ce++)W.__webglFramebuffer[ce]=n.createFramebuffer()}else W.__webglFramebuffer=n.createFramebuffer();if(Ee)for(let ce=0,me=ne.length;ce<me;ce++){const Ve=i.get(ne[ce]);Ve.__webglTexture===void 0&&(Ve.__webglTexture=n.createTexture(),a.memory.textures++)}if(R.samples>0&&ze(R)===!1){W.__webglMultisampledFramebuffer=n.createFramebuffer(),W.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,W.__webglMultisampledFramebuffer);for(let ce=0;ce<ne.length;ce++){const me=ne[ce];W.__webglColorRenderbuffer[ce]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,W.__webglColorRenderbuffer[ce]);const Ve=s.convert(me.format,me.colorSpace),ie=s.convert(me.type),ve=S(me.internalFormat,Ve,ie,me.colorSpace,R.isXRRenderTarget===!0),Pe=Fe(R);n.renderbufferStorageMultisample(n.RENDERBUFFER,Pe,ve,R.width,R.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ce,n.RENDERBUFFER,W.__webglColorRenderbuffer[ce])}n.bindRenderbuffer(n.RENDERBUFFER,null),R.depthBuffer&&(W.__webglDepthRenderbuffer=n.createRenderbuffer(),J(W.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(Z){t.bindTexture(n.TEXTURE_CUBE_MAP,Q.__webglTexture),pe(n.TEXTURE_CUBE_MAP,E);for(let ce=0;ce<6;ce++)if(E.mipmaps&&E.mipmaps.length>0)for(let me=0;me<E.mipmaps.length;me++)X(W.__webglFramebuffer[ce][me],R,E,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,me);else X(W.__webglFramebuffer[ce],R,E,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0);p(E)&&m(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ee){for(let ce=0,me=ne.length;ce<me;ce++){const Ve=ne[ce],ie=i.get(Ve);t.bindTexture(n.TEXTURE_2D,ie.__webglTexture),pe(n.TEXTURE_2D,Ve),X(W.__webglFramebuffer,R,Ve,n.COLOR_ATTACHMENT0+ce,n.TEXTURE_2D,0),p(Ve)&&m(n.TEXTURE_2D)}t.unbindTexture()}else{let ce=n.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(ce=R.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ce,Q.__webglTexture),pe(ce,E),E.mipmaps&&E.mipmaps.length>0)for(let me=0;me<E.mipmaps.length;me++)X(W.__webglFramebuffer[me],R,E,n.COLOR_ATTACHMENT0,ce,me);else X(W.__webglFramebuffer,R,E,n.COLOR_ATTACHMENT0,ce,0);p(E)&&m(ce),t.unbindTexture()}R.depthBuffer&&_e(R)}function Ye(R){const E=R.textures;for(let W=0,Q=E.length;W<Q;W++){const ne=E[W];if(p(ne)){const Z=R.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,Ee=i.get(ne).__webglTexture;t.bindTexture(Z,Ee),m(Z),t.unbindTexture()}}}const He=[],U=[];function It(R){if(R.samples>0){if(ze(R)===!1){const E=R.textures,W=R.width,Q=R.height;let ne=n.COLOR_BUFFER_BIT;const Z=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Ee=i.get(R),ce=E.length>1;if(ce)for(let me=0;me<E.length;me++)t.bindFramebuffer(n.FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+me,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Ee.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+me,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ee.__webglFramebuffer);for(let me=0;me<E.length;me++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(ne|=n.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(ne|=n.STENCIL_BUFFER_BIT)),ce){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Ee.__webglColorRenderbuffer[me]);const Ve=i.get(E[me]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Ve,0)}n.blitFramebuffer(0,0,W,Q,0,0,W,Q,ne,n.NEAREST),l===!0&&(He.length=0,U.length=0,He.push(n.COLOR_ATTACHMENT0+me),R.depthBuffer&&R.resolveDepthBuffer===!1&&(He.push(Z),U.push(Z),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,U)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,He))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ce)for(let me=0;me<E.length;me++){t.bindFramebuffer(n.FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+me,n.RENDERBUFFER,Ee.__webglColorRenderbuffer[me]);const Ve=i.get(E[me]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Ee.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+me,n.TEXTURE_2D,Ve,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ee.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&l){const E=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[E])}}}function Fe(R){return Math.min(r.maxSamples,R.samples)}function ze(R){const E=i.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function Ce(R){const E=a.render.frame;u.get(R)!==E&&(u.set(R,E),R.update())}function nt(R,E){const W=R.colorSpace,Q=R.format,ne=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||W!==Yn&&W!==zn&&(qe.getTransfer(W)===rt?(Q!==on||ne!==Ln)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",W)),E}function Oe(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=P,this.resetTextureUnits=x,this.setTexture2D=I,this.setTexture2DArray=F,this.setTexture3D=z,this.setTextureCube=G,this.rebindTextures=be,this.setupRenderTarget=De,this.updateRenderTargetMipmap=Ye,this.updateMultisampleRenderTarget=It,this.setupDepthRenderbuffer=_e,this.setupFrameBufferTexture=X,this.useMultisampledRTT=ze}function x_(n,e){function t(i,r=zn){let s;const a=qe.getTransfer(r);if(i===Ln)return n.UNSIGNED_BYTE;if(i===ol)return n.UNSIGNED_SHORT_4_4_4_4;if(i===ll)return n.UNSIGNED_SHORT_5_5_5_1;if(i===wu)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===xu)return n.BYTE;if(i===Eu)return n.SHORT;if(i===Tr)return n.UNSIGNED_SHORT;if(i===al)return n.INT;if(i===vi)return n.UNSIGNED_INT;if(i===Cn)return n.FLOAT;if(i===kr)return n.HALF_FLOAT;if(i===bu)return n.ALPHA;if(i===Au)return n.RGB;if(i===on)return n.RGBA;if(i===Tu)return n.LUMINANCE;if(i===Mu)return n.LUMINANCE_ALPHA;if(i===ji)return n.DEPTH_COMPONENT;if(i===er)return n.DEPTH_STENCIL;if(i===Ru)return n.RED;if(i===cl)return n.RED_INTEGER;if(i===Cu)return n.RG;if(i===ul)return n.RG_INTEGER;if(i===hl)return n.RGBA_INTEGER;if(i===Ps||i===Ls||i===Os||i===Is)if(a===rt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Ps)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Ls)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Os)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Is)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Ps)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Ls)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Os)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Is)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===fo||i===po||i===mo||i===go)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===fo)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===po)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===mo)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===go)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===_o||i===vo||i===yo)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===_o||i===vo)return a===rt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===yo)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===So||i===xo||i===Eo||i===wo||i===bo||i===Ao||i===To||i===Mo||i===Ro||i===Co||i===Po||i===Lo||i===Oo||i===Io)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===So)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===xo)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Eo)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===wo)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===bo)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Ao)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===To)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Mo)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Ro)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Co)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Po)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Lo)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Oo)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Io)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Us||i===Uo||i===No)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Us)return a===rt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Uo)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===No)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Pu||i===Do||i===ko||i===Fo)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Us)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Do)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===ko)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Fo)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Qi?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}class E_ extends $t{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class gr extends Ot{constructor(){super(),this.isGroup=!0,this.type="Group"}}const w_={type:"move"};class Ha{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new gr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new gr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new j,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new j),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new gr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new j,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new j),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const _ of e.hand.values()){const p=t.getJointPose(_,i),m=this._getHandJoint(c,_);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],d=u.position.distanceTo(h.position),f=.02,g=.005;c.inputState.pinching&&d>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(w_)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new gr;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const b_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,A_=`
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

}`;class T_{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const r=new bt,s=e.properties.get(r);s.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new Kn({vertexShader:b_,fragmentShader:A_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Xt(new zr(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class M_ extends nr{constructor(e,t){super();const i=this;let r=null,s=1,a=null,o="local-floor",l=1,c=null,u=null,h=null,d=null,f=null,g=null;const _=new T_,p=t.getContextAttributes();let m=null,S=null;const y=[],b=[],M=new Qe;let T=null;const A=new $t;A.layers.enable(1),A.viewport=new ct;const C=new $t;C.layers.enable(2),C.viewport=new ct;const D=[A,C],v=new E_;v.layers.enable(1),v.layers.enable(2);let x=null,P=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(N){let X=y[N];return X===void 0&&(X=new Ha,y[N]=X),X.getTargetRaySpace()},this.getControllerGrip=function(N){let X=y[N];return X===void 0&&(X=new Ha,y[N]=X),X.getGripSpace()},this.getHand=function(N){let X=y[N];return X===void 0&&(X=new Ha,y[N]=X),X.getHandSpace()};function L(N){const X=b.indexOf(N.inputSource);if(X===-1)return;const J=y[X];J!==void 0&&(J.update(N.inputSource,N.frame,c||a),J.dispatchEvent({type:N.type,data:N.inputSource}))}function I(){r.removeEventListener("select",L),r.removeEventListener("selectstart",L),r.removeEventListener("selectend",L),r.removeEventListener("squeeze",L),r.removeEventListener("squeezestart",L),r.removeEventListener("squeezeend",L),r.removeEventListener("end",I),r.removeEventListener("inputsourceschange",F);for(let N=0;N<y.length;N++){const X=b[N];X!==null&&(b[N]=null,y[N].disconnect(X))}x=null,P=null,_.reset(),e.setRenderTarget(m),f=null,d=null,h=null,r=null,S=null,Y.stop(),i.isPresenting=!1,e.setPixelRatio(T),e.setSize(M.width,M.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(N){s=N,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(N){o=N,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(N){c=N},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(N){if(r=N,r!==null){if(m=e.getRenderTarget(),r.addEventListener("select",L),r.addEventListener("selectstart",L),r.addEventListener("selectend",L),r.addEventListener("squeeze",L),r.addEventListener("squeezestart",L),r.addEventListener("squeezeend",L),r.addEventListener("end",I),r.addEventListener("inputsourceschange",F),p.xrCompatible!==!0&&await t.makeXRCompatible(),T=e.getPixelRatio(),e.getSize(M),r.renderState.layers===void 0){const X={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(r,t,X),r.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),S=new yi(f.framebufferWidth,f.framebufferHeight,{format:on,type:Ln,colorSpace:e.outputColorSpace,stencilBuffer:p.stencil})}else{let X=null,J=null,ee=null;p.depth&&(ee=p.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,X=p.stencil?er:ji,J=p.stencil?Qi:vi);const _e={colorFormat:t.RGBA8,depthFormat:ee,scaleFactor:s};h=new XRWebGLBinding(r,t),d=h.createProjectionLayer(_e),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),S=new yi(d.textureWidth,d.textureHeight,{format:on,type:Ln,depthTexture:new $u(d.textureWidth,d.textureHeight,J,void 0,void 0,void 0,void 0,void 0,void 0,X),stencilBuffer:p.stencil,colorSpace:e.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),Y.setContext(r),Y.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function F(N){for(let X=0;X<N.removed.length;X++){const J=N.removed[X],ee=b.indexOf(J);ee>=0&&(b[ee]=null,y[ee].disconnect(J))}for(let X=0;X<N.added.length;X++){const J=N.added[X];let ee=b.indexOf(J);if(ee===-1){for(let be=0;be<y.length;be++)if(be>=b.length){b.push(J),ee=be;break}else if(b[be]===null){b[be]=J,ee=be;break}if(ee===-1)break}const _e=y[ee];_e&&_e.connect(J)}}const z=new j,G=new j;function V(N,X,J){z.setFromMatrixPosition(X.matrixWorld),G.setFromMatrixPosition(J.matrixWorld);const ee=z.distanceTo(G),_e=X.projectionMatrix.elements,be=J.projectionMatrix.elements,De=_e[14]/(_e[10]-1),Ye=_e[14]/(_e[10]+1),He=(_e[9]+1)/_e[5],U=(_e[9]-1)/_e[5],It=(_e[8]-1)/_e[0],Fe=(be[8]+1)/be[0],ze=De*It,Ce=De*Fe,nt=ee/(-It+Fe),Oe=nt*-It;if(X.matrixWorld.decompose(N.position,N.quaternion,N.scale),N.translateX(Oe),N.translateZ(nt),N.matrixWorld.compose(N.position,N.quaternion,N.scale),N.matrixWorldInverse.copy(N.matrixWorld).invert(),_e[10]===-1)N.projectionMatrix.copy(X.projectionMatrix),N.projectionMatrixInverse.copy(X.projectionMatrixInverse);else{const R=De+nt,E=Ye+nt,W=ze-Oe,Q=Ce+(ee-Oe),ne=He*Ye/E*R,Z=U*Ye/E*R;N.projectionMatrix.makePerspective(W,Q,ne,Z,R,E),N.projectionMatrixInverse.copy(N.projectionMatrix).invert()}}function se(N,X){X===null?N.matrixWorld.copy(N.matrix):N.matrixWorld.multiplyMatrices(X.matrixWorld,N.matrix),N.matrixWorldInverse.copy(N.matrixWorld).invert()}this.updateCamera=function(N){if(r===null)return;let X=N.near,J=N.far;_.texture!==null&&(_.depthNear>0&&(X=_.depthNear),_.depthFar>0&&(J=_.depthFar)),v.near=C.near=A.near=X,v.far=C.far=A.far=J,(x!==v.near||P!==v.far)&&(r.updateRenderState({depthNear:v.near,depthFar:v.far}),x=v.near,P=v.far);const ee=N.parent,_e=v.cameras;se(v,ee);for(let be=0;be<_e.length;be++)se(_e[be],ee);_e.length===2?V(v,A,C):v.projectionMatrix.copy(A.projectionMatrix),le(N,v,ee)};function le(N,X,J){J===null?N.matrix.copy(X.matrixWorld):(N.matrix.copy(J.matrixWorld),N.matrix.invert(),N.matrix.multiply(X.matrixWorld)),N.matrix.decompose(N.position,N.quaternion,N.scale),N.updateMatrixWorld(!0),N.projectionMatrix.copy(X.projectionMatrix),N.projectionMatrixInverse.copy(X.projectionMatrixInverse),N.isPerspectiveCamera&&(N.fov=Bo*2*Math.atan(1/N.projectionMatrix.elements[5]),N.zoom=1)}this.getCamera=function(){return v},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(N){l=N,d!==null&&(d.fixedFoveation=N),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=N)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(v)};let pe=null;function O(N,X){if(u=X.getViewerPose(c||a),g=X,u!==null){const J=u.views;f!==null&&(e.setRenderTargetFramebuffer(S,f.framebuffer),e.setRenderTarget(S));let ee=!1;J.length!==v.cameras.length&&(v.cameras.length=0,ee=!0);for(let be=0;be<J.length;be++){const De=J[be];let Ye=null;if(f!==null)Ye=f.getViewport(De);else{const U=h.getViewSubImage(d,De);Ye=U.viewport,be===0&&(e.setRenderTargetTextures(S,U.colorTexture,d.ignoreDepthValues?void 0:U.depthStencilTexture),e.setRenderTarget(S))}let He=D[be];He===void 0&&(He=new $t,He.layers.enable(be),He.viewport=new ct,D[be]=He),He.matrix.fromArray(De.transform.matrix),He.matrix.decompose(He.position,He.quaternion,He.scale),He.projectionMatrix.fromArray(De.projectionMatrix),He.projectionMatrixInverse.copy(He.projectionMatrix).invert(),He.viewport.set(Ye.x,Ye.y,Ye.width,Ye.height),be===0&&(v.matrix.copy(He.matrix),v.matrix.decompose(v.position,v.quaternion,v.scale)),ee===!0&&v.cameras.push(He)}const _e=r.enabledFeatures;if(_e&&_e.includes("depth-sensing")){const be=h.getDepthInformation(J[0]);be&&be.isValid&&be.texture&&_.init(e,be,r.renderState)}}for(let J=0;J<y.length;J++){const ee=b[J],_e=y[J];ee!==null&&_e!==void 0&&_e.update(ee,X,c||a)}pe&&pe(N,X),X.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:X}),g=null}const Y=new Wu;Y.setAnimationLoop(O),this.setAnimationLoop=function(N){pe=N},this.dispose=function(){}}}const ii=new On,R_=new ut;function C_(n,e){function t(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function i(p,m){m.color.getRGB(p.fogColor.value,Hu(n)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function r(p,m,S,y,b){m.isMeshBasicMaterial||m.isMeshLambertMaterial?s(p,m):m.isMeshToonMaterial?(s(p,m),h(p,m)):m.isMeshPhongMaterial?(s(p,m),u(p,m)):m.isMeshStandardMaterial?(s(p,m),d(p,m),m.isMeshPhysicalMaterial&&f(p,m,b)):m.isMeshMatcapMaterial?(s(p,m),g(p,m)):m.isMeshDepthMaterial?s(p,m):m.isMeshDistanceMaterial?(s(p,m),_(p,m)):m.isMeshNormalMaterial?s(p,m):m.isLineBasicMaterial?(a(p,m),m.isLineDashedMaterial&&o(p,m)):m.isPointsMaterial?l(p,m,S,y):m.isSpriteMaterial?c(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function s(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,t(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===Lt&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,t(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===Lt&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,t(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,t(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);const S=e.get(m),y=S.envMap,b=S.envMapRotation;y&&(p.envMap.value=y,ii.copy(b),ii.x*=-1,ii.y*=-1,ii.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(ii.y*=-1,ii.z*=-1),p.envMapRotation.value.setFromMatrix4(R_.makeRotationFromEuler(ii)),p.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap&&(p.lightMap.value=m.lightMap,p.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,p.lightMapTransform)),m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,p.aoMapTransform))}function a(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform))}function o(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function l(p,m,S,y){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*S,p.scale.value=y*.5,m.map&&(p.map.value=m.map,t(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function c(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function u(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function h(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function d(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,p.roughnessMapTransform)),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function f(p,m,S){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Lt&&p.clearcoatNormalScale.value.negate())),m.dispersion>0&&(p.dispersion.value=m.dispersion),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=S.texture,p.transmissionSamplerSize.value.set(S.width,S.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,m){m.matcap&&(p.matcap.value=m.matcap)}function _(p,m){const S=e.get(m).light;p.referencePosition.value.setFromMatrixPosition(S.matrixWorld),p.nearDistance.value=S.shadow.camera.near,p.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function P_(n,e,t,i){let r={},s={},a=[];const o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(S,y){const b=y.program;i.uniformBlockBinding(S,b)}function c(S,y){let b=r[S.id];b===void 0&&(g(S),b=u(S),r[S.id]=b,S.addEventListener("dispose",p));const M=y.program;i.updateUBOMapping(S,M);const T=e.render.frame;s[S.id]!==T&&(d(S),s[S.id]=T)}function u(S){const y=h();S.__bindingPointIndex=y;const b=n.createBuffer(),M=S.__size,T=S.usage;return n.bindBuffer(n.UNIFORM_BUFFER,b),n.bufferData(n.UNIFORM_BUFFER,M,T),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,y,b),b}function h(){for(let S=0;S<o;S++)if(a.indexOf(S)===-1)return a.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(S){const y=r[S.id],b=S.uniforms,M=S.__cache;n.bindBuffer(n.UNIFORM_BUFFER,y);for(let T=0,A=b.length;T<A;T++){const C=Array.isArray(b[T])?b[T]:[b[T]];for(let D=0,v=C.length;D<v;D++){const x=C[D];if(f(x,T,D,M)===!0){const P=x.__offset,L=Array.isArray(x.value)?x.value:[x.value];let I=0;for(let F=0;F<L.length;F++){const z=L[F],G=_(z);typeof z=="number"||typeof z=="boolean"?(x.__data[0]=z,n.bufferSubData(n.UNIFORM_BUFFER,P+I,x.__data)):z.isMatrix3?(x.__data[0]=z.elements[0],x.__data[1]=z.elements[1],x.__data[2]=z.elements[2],x.__data[3]=0,x.__data[4]=z.elements[3],x.__data[5]=z.elements[4],x.__data[6]=z.elements[5],x.__data[7]=0,x.__data[8]=z.elements[6],x.__data[9]=z.elements[7],x.__data[10]=z.elements[8],x.__data[11]=0):(z.toArray(x.__data,I),I+=G.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,P,x.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function f(S,y,b,M){const T=S.value,A=y+"_"+b;if(M[A]===void 0)return typeof T=="number"||typeof T=="boolean"?M[A]=T:M[A]=T.clone(),!0;{const C=M[A];if(typeof T=="number"||typeof T=="boolean"){if(C!==T)return M[A]=T,!0}else if(C.equals(T)===!1)return C.copy(T),!0}return!1}function g(S){const y=S.uniforms;let b=0;const M=16;for(let A=0,C=y.length;A<C;A++){const D=Array.isArray(y[A])?y[A]:[y[A]];for(let v=0,x=D.length;v<x;v++){const P=D[v],L=Array.isArray(P.value)?P.value:[P.value];for(let I=0,F=L.length;I<F;I++){const z=L[I],G=_(z),V=b%M,se=V%G.boundary,le=V+se;b+=se,le!==0&&M-le<G.storage&&(b+=M-le),P.__data=new Float32Array(G.storage/Float32Array.BYTES_PER_ELEMENT),P.__offset=b,b+=G.storage}}}const T=b%M;return T>0&&(b+=M-T),S.__size=b,S.__cache={},this}function _(S){const y={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(y.boundary=4,y.storage=4):S.isVector2?(y.boundary=8,y.storage=8):S.isVector3||S.isColor?(y.boundary=16,y.storage=12):S.isVector4?(y.boundary=16,y.storage=16):S.isMatrix3?(y.boundary=48,y.storage=48):S.isMatrix4?(y.boundary=64,y.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),y}function p(S){const y=S.target;y.removeEventListener("dispose",p);const b=a.indexOf(y.__bindingPointIndex);a.splice(b,1),n.deleteBuffer(r[y.id]),delete r[y.id],delete s[y.id]}function m(){for(const S in r)n.deleteBuffer(r[S]);a=[],r={},s={}}return{bind:l,update:c,dispose:m}}class L_{constructor(e={}){const{canvas:t=gd(),context:i=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1}=e;this.isWebGLRenderer=!0;let d;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=i.getContextAttributes().alpha}else d=a;const f=new Uint32Array(4),g=new Int32Array(4);let _=null,p=null;const m=[],S=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=nn,this.toneMapping=qn,this.toneMappingExposure=1;const y=this;let b=!1,M=0,T=0,A=null,C=-1,D=null;const v=new ct,x=new ct;let P=null;const L=new Ke(0);let I=0,F=t.width,z=t.height,G=1,V=null,se=null;const le=new ct(0,0,F,z),pe=new ct(0,0,F,z);let O=!1;const Y=new Vu;let N=!1,X=!1;const J=new ut,ee=new ut,_e=new j,be=new ct,De={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ye=!1;function He(){return A===null?G:1}let U=i;function It(w,B){return t.getContext(w,B)}try{const w={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${sl}`),t.addEventListener("webglcontextlost",te,!1),t.addEventListener("webglcontextrestored",ue,!1),t.addEventListener("webglcontextcreationerror",fe,!1),U===null){const B="webgl2";if(U=It(B,w),U===null)throw It(B)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let Fe,ze,Ce,nt,Oe,R,E,W,Q,ne,Z,Ee,ce,me,Ve,ie,ve,Pe,Le,ye,Be,Ie,et,k;function de(){Fe=new Dm(U),Fe.init(),Ie=new x_(U,Fe),ze=new Cm(U,Fe,e,Ie),Ce=new v_(U),ze.reverseDepthBuffer&&Ce.buffers.depth.setReversed(!0),nt=new Bm(U),Oe=new i_,R=new S_(U,Fe,Ce,Oe,ze,Ie,nt),E=new Lm(y),W=new Nm(y),Q=new Wd(U),et=new Mm(U,Q),ne=new km(U,Q,nt,et),Z=new Gm(U,ne,Q,nt),Le=new Hm(U,ze,R),ie=new Pm(Oe),Ee=new n_(y,E,W,Fe,ze,et,ie),ce=new C_(y,Oe),me=new s_,Ve=new h_(Fe),Pe=new Tm(y,E,W,Ce,Z,d,l),ve=new g_(y,Z,ze),k=new P_(U,nt,ze,Ce),ye=new Rm(U,Fe,nt),Be=new Fm(U,Fe,nt),nt.programs=Ee.programs,y.capabilities=ze,y.extensions=Fe,y.properties=Oe,y.renderLists=me,y.shadowMap=ve,y.state=Ce,y.info=nt}de();const K=new M_(y,U);this.xr=K,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){const w=Fe.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=Fe.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return G},this.setPixelRatio=function(w){w!==void 0&&(G=w,this.setSize(F,z,!1))},this.getSize=function(w){return w.set(F,z)},this.setSize=function(w,B,$=!0){if(K.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}F=w,z=B,t.width=Math.floor(w*G),t.height=Math.floor(B*G),$===!0&&(t.style.width=w+"px",t.style.height=B+"px"),this.setViewport(0,0,w,B)},this.getDrawingBufferSize=function(w){return w.set(F*G,z*G).floor()},this.setDrawingBufferSize=function(w,B,$){F=w,z=B,G=$,t.width=Math.floor(w*$),t.height=Math.floor(B*$),this.setViewport(0,0,w,B)},this.getCurrentViewport=function(w){return w.copy(v)},this.getViewport=function(w){return w.copy(le)},this.setViewport=function(w,B,$,q){w.isVector4?le.set(w.x,w.y,w.z,w.w):le.set(w,B,$,q),Ce.viewport(v.copy(le).multiplyScalar(G).round())},this.getScissor=function(w){return w.copy(pe)},this.setScissor=function(w,B,$,q){w.isVector4?pe.set(w.x,w.y,w.z,w.w):pe.set(w,B,$,q),Ce.scissor(x.copy(pe).multiplyScalar(G).round())},this.getScissorTest=function(){return O},this.setScissorTest=function(w){Ce.setScissorTest(O=w)},this.setOpaqueSort=function(w){V=w},this.setTransparentSort=function(w){se=w},this.getClearColor=function(w){return w.copy(Pe.getClearColor())},this.setClearColor=function(){Pe.setClearColor.apply(Pe,arguments)},this.getClearAlpha=function(){return Pe.getClearAlpha()},this.setClearAlpha=function(){Pe.setClearAlpha.apply(Pe,arguments)},this.clear=function(w=!0,B=!0,$=!0){let q=0;if(w){let H=!1;if(A!==null){const re=A.texture.format;H=re===hl||re===ul||re===cl}if(H){const re=A.texture.type,he=re===Ln||re===vi||re===Tr||re===Qi||re===ol||re===ll,Se=Pe.getClearColor(),xe=Pe.getClearAlpha(),Me=Se.r,Re=Se.g,we=Se.b;he?(f[0]=Me,f[1]=Re,f[2]=we,f[3]=xe,U.clearBufferuiv(U.COLOR,0,f)):(g[0]=Me,g[1]=Re,g[2]=we,g[3]=xe,U.clearBufferiv(U.COLOR,0,g))}else q|=U.COLOR_BUFFER_BIT}B&&(q|=U.DEPTH_BUFFER_BIT,U.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),$&&(q|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),U.clear(q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",te,!1),t.removeEventListener("webglcontextrestored",ue,!1),t.removeEventListener("webglcontextcreationerror",fe,!1),me.dispose(),Ve.dispose(),Oe.dispose(),E.dispose(),W.dispose(),Z.dispose(),et.dispose(),k.dispose(),Ee.dispose(),K.dispose(),K.removeEventListener("sessionstart",_l),K.removeEventListener("sessionend",vl),Jn.stop()};function te(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),b=!0}function ue(){console.log("THREE.WebGLRenderer: Context Restored."),b=!1;const w=nt.autoReset,B=ve.enabled,$=ve.autoUpdate,q=ve.needsUpdate,H=ve.type;de(),nt.autoReset=w,ve.enabled=B,ve.autoUpdate=$,ve.needsUpdate=q,ve.type=H}function fe(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function Ge(w){const B=w.target;B.removeEventListener("dispose",Ge),ht(B)}function ht(w){At(w),Oe.remove(w)}function At(w){const B=Oe.get(w).programs;B!==void 0&&(B.forEach(function($){Ee.releaseProgram($)}),w.isShaderMaterial&&Ee.releaseShaderCache(w))}this.renderBufferDirect=function(w,B,$,q,H,re){B===null&&(B=De);const he=H.isMesh&&H.matrixWorld.determinant()<0,Se=wh(w,B,$,q,H);Ce.setMaterial(q,he);let xe=$.index,Me=1;if(q.wireframe===!0){if(xe=ne.getWireframeAttribute($),xe===void 0)return;Me=2}const Re=$.drawRange,we=$.attributes.position;let Xe=Re.start*Me,it=(Re.start+Re.count)*Me;re!==null&&(Xe=Math.max(Xe,re.start*Me),it=Math.min(it,(re.start+re.count)*Me)),xe!==null?(Xe=Math.max(Xe,0),it=Math.min(it,xe.count)):we!=null&&(Xe=Math.max(Xe,0),it=Math.min(it,we.count));const st=it-Xe;if(st<0||st===1/0)return;et.setup(H,q,Se,$,xe);let Ut,$e=ye;if(xe!==null&&(Ut=Q.get(xe),$e=Be,$e.setIndex(Ut)),H.isMesh)q.wireframe===!0?(Ce.setLineWidth(q.wireframeLinewidth*He()),$e.setMode(U.LINES)):$e.setMode(U.TRIANGLES);else if(H.isLine){let Ae=q.linewidth;Ae===void 0&&(Ae=1),Ce.setLineWidth(Ae*He()),H.isLineSegments?$e.setMode(U.LINES):H.isLineLoop?$e.setMode(U.LINE_LOOP):$e.setMode(U.LINE_STRIP)}else H.isPoints?$e.setMode(U.POINTS):H.isSprite&&$e.setMode(U.TRIANGLES);if(H.isBatchedMesh)if(H._multiDrawInstances!==null)$e.renderMultiDrawInstances(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount,H._multiDrawInstances);else if(Fe.get("WEBGL_multi_draw"))$e.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else{const Ae=H._multiDrawStarts,vt=H._multiDrawCounts,je=H._multiDrawCount,Kt=xe?Q.get(xe).bytesPerElement:1,Si=Oe.get(q).currentProgram.getUniforms();for(let Nt=0;Nt<je;Nt++)Si.setValue(U,"_gl_DrawID",Nt),$e.render(Ae[Nt]/Kt,vt[Nt])}else if(H.isInstancedMesh)$e.renderInstances(Xe,st,H.count);else if($.isInstancedBufferGeometry){const Ae=$._maxInstanceCount!==void 0?$._maxInstanceCount:1/0,vt=Math.min($.instanceCount,Ae);$e.renderInstances(Xe,st,vt)}else $e.render(Xe,st)};function We(w,B,$){w.transparent===!0&&w.side===Rn&&w.forceSinglePass===!1?(w.side=Lt,w.needsUpdate=!0,jr(w,B,$),w.side=Xn,w.needsUpdate=!0,jr(w,B,$),w.side=Rn):jr(w,B,$)}this.compile=function(w,B,$=null){$===null&&($=w),p=Ve.get($),p.init(B),S.push(p),$.traverseVisible(function(H){H.isLight&&H.layers.test(B.layers)&&(p.pushLight(H),H.castShadow&&p.pushShadow(H))}),w!==$&&w.traverseVisible(function(H){H.isLight&&H.layers.test(B.layers)&&(p.pushLight(H),H.castShadow&&p.pushShadow(H))}),p.setupLights();const q=new Set;return w.traverse(function(H){if(!(H.isMesh||H.isPoints||H.isLine||H.isSprite))return;const re=H.material;if(re)if(Array.isArray(re))for(let he=0;he<re.length;he++){const Se=re[he];We(Se,$,H),q.add(Se)}else We(re,$,H),q.add(re)}),S.pop(),p=null,q},this.compileAsync=function(w,B,$=null){const q=this.compile(w,B,$);return new Promise(H=>{function re(){if(q.forEach(function(he){Oe.get(he).currentProgram.isReady()&&q.delete(he)}),q.size===0){H(w);return}setTimeout(re,10)}Fe.get("KHR_parallel_shader_compile")!==null?re():setTimeout(re,10)})};let Tt=null;function pn(w){Tt&&Tt(w)}function _l(){Jn.stop()}function vl(){Jn.start()}const Jn=new Wu;Jn.setAnimationLoop(pn),typeof self<"u"&&Jn.setContext(self),this.setAnimationLoop=function(w){Tt=w,K.setAnimationLoop(w),w===null?Jn.stop():Jn.start()},K.addEventListener("sessionstart",_l),K.addEventListener("sessionend",vl),this.render=function(w,B){if(B!==void 0&&B.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(b===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),K.enabled===!0&&K.isPresenting===!0&&(K.cameraAutoUpdate===!0&&K.updateCamera(B),B=K.getCamera()),w.isScene===!0&&w.onBeforeRender(y,w,B,A),p=Ve.get(w,S.length),p.init(B),S.push(p),ee.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),Y.setFromProjectionMatrix(ee),X=this.localClippingEnabled,N=ie.init(this.clippingPlanes,X),_=me.get(w,m.length),_.init(),m.push(_),K.enabled===!0&&K.isPresenting===!0){const re=y.xr.getDepthSensingMesh();re!==null&&oa(re,B,-1/0,y.sortObjects)}oa(w,B,0,y.sortObjects),_.finish(),y.sortObjects===!0&&_.sort(V,se),Ye=K.enabled===!1||K.isPresenting===!1||K.hasDepthSensing()===!1,Ye&&Pe.addToRenderList(_,w),this.info.render.frame++,N===!0&&ie.beginShadows();const $=p.state.shadowsArray;ve.render($,w,B),N===!0&&ie.endShadows(),this.info.autoReset===!0&&this.info.reset();const q=_.opaque,H=_.transmissive;if(p.setupLights(),B.isArrayCamera){const re=B.cameras;if(H.length>0)for(let he=0,Se=re.length;he<Se;he++){const xe=re[he];Sl(q,H,w,xe)}Ye&&Pe.render(w);for(let he=0,Se=re.length;he<Se;he++){const xe=re[he];yl(_,w,xe,xe.viewport)}}else H.length>0&&Sl(q,H,w,B),Ye&&Pe.render(w),yl(_,w,B);A!==null&&(R.updateMultisampleRenderTarget(A),R.updateRenderTargetMipmap(A)),w.isScene===!0&&w.onAfterRender(y,w,B),et.resetDefaultState(),C=-1,D=null,S.pop(),S.length>0?(p=S[S.length-1],N===!0&&ie.setGlobalState(y.clippingPlanes,p.state.camera)):p=null,m.pop(),m.length>0?_=m[m.length-1]:_=null};function oa(w,B,$,q){if(w.visible===!1)return;if(w.layers.test(B.layers)){if(w.isGroup)$=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(B);else if(w.isLight)p.pushLight(w),w.castShadow&&p.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||Y.intersectsSprite(w)){q&&be.setFromMatrixPosition(w.matrixWorld).applyMatrix4(ee);const he=Z.update(w),Se=w.material;Se.visible&&_.push(w,he,Se,$,be.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||Y.intersectsObject(w))){const he=Z.update(w),Se=w.material;if(q&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),be.copy(w.boundingSphere.center)):(he.boundingSphere===null&&he.computeBoundingSphere(),be.copy(he.boundingSphere.center)),be.applyMatrix4(w.matrixWorld).applyMatrix4(ee)),Array.isArray(Se)){const xe=he.groups;for(let Me=0,Re=xe.length;Me<Re;Me++){const we=xe[Me],Xe=Se[we.materialIndex];Xe&&Xe.visible&&_.push(w,he,Xe,$,be.z,we)}}else Se.visible&&_.push(w,he,Se,$,be.z,null)}}const re=w.children;for(let he=0,Se=re.length;he<Se;he++)oa(re[he],B,$,q)}function yl(w,B,$,q){const H=w.opaque,re=w.transmissive,he=w.transparent;p.setupLightsView($),N===!0&&ie.setGlobalState(y.clippingPlanes,$),q&&Ce.viewport(v.copy(q)),H.length>0&&$r(H,B,$),re.length>0&&$r(re,B,$),he.length>0&&$r(he,B,$),Ce.buffers.depth.setTest(!0),Ce.buffers.depth.setMask(!0),Ce.buffers.color.setMask(!0),Ce.setPolygonOffset(!1)}function Sl(w,B,$,q){if(($.isScene===!0?$.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[q.id]===void 0&&(p.state.transmissionRenderTarget[q.id]=new yi(1,1,{generateMipmaps:!0,type:Fe.has("EXT_color_buffer_half_float")||Fe.has("EXT_color_buffer_float")?kr:Ln,minFilter:pi,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:qe.workingColorSpace}));const re=p.state.transmissionRenderTarget[q.id],he=q.viewport||v;re.setSize(he.z,he.w);const Se=y.getRenderTarget();y.setRenderTarget(re),y.getClearColor(L),I=y.getClearAlpha(),I<1&&y.setClearColor(16777215,.5),y.clear(),Ye&&Pe.render($);const xe=y.toneMapping;y.toneMapping=qn;const Me=q.viewport;if(q.viewport!==void 0&&(q.viewport=void 0),p.setupLightsView(q),N===!0&&ie.setGlobalState(y.clippingPlanes,q),$r(w,$,q),R.updateMultisampleRenderTarget(re),R.updateRenderTargetMipmap(re),Fe.has("WEBGL_multisampled_render_to_texture")===!1){let Re=!1;for(let we=0,Xe=B.length;we<Xe;we++){const it=B[we],st=it.object,Ut=it.geometry,$e=it.material,Ae=it.group;if($e.side===Rn&&st.layers.test(q.layers)){const vt=$e.side;$e.side=Lt,$e.needsUpdate=!0,xl(st,$,q,Ut,$e,Ae),$e.side=vt,$e.needsUpdate=!0,Re=!0}}Re===!0&&(R.updateMultisampleRenderTarget(re),R.updateRenderTargetMipmap(re))}y.setRenderTarget(Se),y.setClearColor(L,I),Me!==void 0&&(q.viewport=Me),y.toneMapping=xe}function $r(w,B,$){const q=B.isScene===!0?B.overrideMaterial:null;for(let H=0,re=w.length;H<re;H++){const he=w[H],Se=he.object,xe=he.geometry,Me=q===null?he.material:q,Re=he.group;Se.layers.test($.layers)&&xl(Se,B,$,xe,Me,Re)}}function xl(w,B,$,q,H,re){w.onBeforeRender(y,B,$,q,H,re),w.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),H.onBeforeRender(y,B,$,q,w,re),H.transparent===!0&&H.side===Rn&&H.forceSinglePass===!1?(H.side=Lt,H.needsUpdate=!0,y.renderBufferDirect($,B,q,H,w,re),H.side=Xn,H.needsUpdate=!0,y.renderBufferDirect($,B,q,H,w,re),H.side=Rn):y.renderBufferDirect($,B,q,H,w,re),w.onAfterRender(y,B,$,q,H,re)}function jr(w,B,$){B.isScene!==!0&&(B=De);const q=Oe.get(w),H=p.state.lights,re=p.state.shadowsArray,he=H.state.version,Se=Ee.getParameters(w,H.state,re,B,$),xe=Ee.getProgramCacheKey(Se);let Me=q.programs;q.environment=w.isMeshStandardMaterial?B.environment:null,q.fog=B.fog,q.envMap=(w.isMeshStandardMaterial?W:E).get(w.envMap||q.environment),q.envMapRotation=q.environment!==null&&w.envMap===null?B.environmentRotation:w.envMapRotation,Me===void 0&&(w.addEventListener("dispose",Ge),Me=new Map,q.programs=Me);let Re=Me.get(xe);if(Re!==void 0){if(q.currentProgram===Re&&q.lightsStateVersion===he)return wl(w,Se),Re}else Se.uniforms=Ee.getUniforms(w),w.onBeforeCompile(Se,y),Re=Ee.acquireProgram(Se,xe),Me.set(xe,Re),q.uniforms=Se.uniforms;const we=q.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(we.clippingPlanes=ie.uniform),wl(w,Se),q.needsLights=Ah(w),q.lightsStateVersion=he,q.needsLights&&(we.ambientLightColor.value=H.state.ambient,we.lightProbe.value=H.state.probe,we.directionalLights.value=H.state.directional,we.directionalLightShadows.value=H.state.directionalShadow,we.spotLights.value=H.state.spot,we.spotLightShadows.value=H.state.spotShadow,we.rectAreaLights.value=H.state.rectArea,we.ltc_1.value=H.state.rectAreaLTC1,we.ltc_2.value=H.state.rectAreaLTC2,we.pointLights.value=H.state.point,we.pointLightShadows.value=H.state.pointShadow,we.hemisphereLights.value=H.state.hemi,we.directionalShadowMap.value=H.state.directionalShadowMap,we.directionalShadowMatrix.value=H.state.directionalShadowMatrix,we.spotShadowMap.value=H.state.spotShadowMap,we.spotLightMatrix.value=H.state.spotLightMatrix,we.spotLightMap.value=H.state.spotLightMap,we.pointShadowMap.value=H.state.pointShadowMap,we.pointShadowMatrix.value=H.state.pointShadowMatrix),q.currentProgram=Re,q.uniformsList=null,Re}function El(w){if(w.uniformsList===null){const B=w.currentProgram.getUniforms();w.uniformsList=ks.seqWithValue(B.seq,w.uniforms)}return w.uniformsList}function wl(w,B){const $=Oe.get(w);$.outputColorSpace=B.outputColorSpace,$.batching=B.batching,$.batchingColor=B.batchingColor,$.instancing=B.instancing,$.instancingColor=B.instancingColor,$.instancingMorph=B.instancingMorph,$.skinning=B.skinning,$.morphTargets=B.morphTargets,$.morphNormals=B.morphNormals,$.morphColors=B.morphColors,$.morphTargetsCount=B.morphTargetsCount,$.numClippingPlanes=B.numClippingPlanes,$.numIntersection=B.numClipIntersection,$.vertexAlphas=B.vertexAlphas,$.vertexTangents=B.vertexTangents,$.toneMapping=B.toneMapping}function wh(w,B,$,q,H){B.isScene!==!0&&(B=De),R.resetTextureUnits();const re=B.fog,he=q.isMeshStandardMaterial?B.environment:null,Se=A===null?y.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:Yn,xe=(q.isMeshStandardMaterial?W:E).get(q.envMap||he),Me=q.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,Re=!!$.attributes.tangent&&(!!q.normalMap||q.anisotropy>0),we=!!$.morphAttributes.position,Xe=!!$.morphAttributes.normal,it=!!$.morphAttributes.color;let st=qn;q.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(st=y.toneMapping);const Ut=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,$e=Ut!==void 0?Ut.length:0,Ae=Oe.get(q),vt=p.state.lights;if(N===!0&&(X===!0||w!==D)){const Ht=w===D&&q.id===C;ie.setState(q,w,Ht)}let je=!1;q.version===Ae.__version?(Ae.needsLights&&Ae.lightsStateVersion!==vt.state.version||Ae.outputColorSpace!==Se||H.isBatchedMesh&&Ae.batching===!1||!H.isBatchedMesh&&Ae.batching===!0||H.isBatchedMesh&&Ae.batchingColor===!0&&H.colorTexture===null||H.isBatchedMesh&&Ae.batchingColor===!1&&H.colorTexture!==null||H.isInstancedMesh&&Ae.instancing===!1||!H.isInstancedMesh&&Ae.instancing===!0||H.isSkinnedMesh&&Ae.skinning===!1||!H.isSkinnedMesh&&Ae.skinning===!0||H.isInstancedMesh&&Ae.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&Ae.instancingColor===!1&&H.instanceColor!==null||H.isInstancedMesh&&Ae.instancingMorph===!0&&H.morphTexture===null||H.isInstancedMesh&&Ae.instancingMorph===!1&&H.morphTexture!==null||Ae.envMap!==xe||q.fog===!0&&Ae.fog!==re||Ae.numClippingPlanes!==void 0&&(Ae.numClippingPlanes!==ie.numPlanes||Ae.numIntersection!==ie.numIntersection)||Ae.vertexAlphas!==Me||Ae.vertexTangents!==Re||Ae.morphTargets!==we||Ae.morphNormals!==Xe||Ae.morphColors!==it||Ae.toneMapping!==st||Ae.morphTargetsCount!==$e)&&(je=!0):(je=!0,Ae.__version=q.version);let Kt=Ae.currentProgram;je===!0&&(Kt=jr(q,B,H));let Si=!1,Nt=!1,la=!1;const ot=Kt.getUniforms(),Un=Ae.uniforms;if(Ce.useProgram(Kt.program)&&(Si=!0,Nt=!0,la=!0),q.id!==C&&(C=q.id,Nt=!0),Si||D!==w){ze.reverseDepthBuffer?(J.copy(w.projectionMatrix),vd(J),yd(J),ot.setValue(U,"projectionMatrix",J)):ot.setValue(U,"projectionMatrix",w.projectionMatrix),ot.setValue(U,"viewMatrix",w.matrixWorldInverse);const Ht=ot.map.cameraPosition;Ht!==void 0&&Ht.setValue(U,_e.setFromMatrixPosition(w.matrixWorld)),ze.logarithmicDepthBuffer&&ot.setValue(U,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial)&&ot.setValue(U,"isOrthographic",w.isOrthographicCamera===!0),D!==w&&(D=w,Nt=!0,la=!0)}if(H.isSkinnedMesh){ot.setOptional(U,H,"bindMatrix"),ot.setOptional(U,H,"bindMatrixInverse");const Ht=H.skeleton;Ht&&(Ht.boneTexture===null&&Ht.computeBoneTexture(),ot.setValue(U,"boneTexture",Ht.boneTexture,R))}H.isBatchedMesh&&(ot.setOptional(U,H,"batchingTexture"),ot.setValue(U,"batchingTexture",H._matricesTexture,R),ot.setOptional(U,H,"batchingIdTexture"),ot.setValue(U,"batchingIdTexture",H._indirectTexture,R),ot.setOptional(U,H,"batchingColorTexture"),H._colorsTexture!==null&&ot.setValue(U,"batchingColorTexture",H._colorsTexture,R));const ca=$.morphAttributes;if((ca.position!==void 0||ca.normal!==void 0||ca.color!==void 0)&&Le.update(H,$,Kt),(Nt||Ae.receiveShadow!==H.receiveShadow)&&(Ae.receiveShadow=H.receiveShadow,ot.setValue(U,"receiveShadow",H.receiveShadow)),q.isMeshGouraudMaterial&&q.envMap!==null&&(Un.envMap.value=xe,Un.flipEnvMap.value=xe.isCubeTexture&&xe.isRenderTargetTexture===!1?-1:1),q.isMeshStandardMaterial&&q.envMap===null&&B.environment!==null&&(Un.envMapIntensity.value=B.environmentIntensity),Nt&&(ot.setValue(U,"toneMappingExposure",y.toneMappingExposure),Ae.needsLights&&bh(Un,la),re&&q.fog===!0&&ce.refreshFogUniforms(Un,re),ce.refreshMaterialUniforms(Un,q,G,z,p.state.transmissionRenderTarget[w.id]),ks.upload(U,El(Ae),Un,R)),q.isShaderMaterial&&q.uniformsNeedUpdate===!0&&(ks.upload(U,El(Ae),Un,R),q.uniformsNeedUpdate=!1),q.isSpriteMaterial&&ot.setValue(U,"center",H.center),ot.setValue(U,"modelViewMatrix",H.modelViewMatrix),ot.setValue(U,"normalMatrix",H.normalMatrix),ot.setValue(U,"modelMatrix",H.matrixWorld),q.isShaderMaterial||q.isRawShaderMaterial){const Ht=q.uniformsGroups;for(let ua=0,Th=Ht.length;ua<Th;ua++){const bl=Ht[ua];k.update(bl,Kt),k.bind(bl,Kt)}}return Kt}function bh(w,B){w.ambientLightColor.needsUpdate=B,w.lightProbe.needsUpdate=B,w.directionalLights.needsUpdate=B,w.directionalLightShadows.needsUpdate=B,w.pointLights.needsUpdate=B,w.pointLightShadows.needsUpdate=B,w.spotLights.needsUpdate=B,w.spotLightShadows.needsUpdate=B,w.rectAreaLights.needsUpdate=B,w.hemisphereLights.needsUpdate=B}function Ah(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return M},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(w,B,$){Oe.get(w.texture).__webglTexture=B,Oe.get(w.depthTexture).__webglTexture=$;const q=Oe.get(w);q.__hasExternalTextures=!0,q.__autoAllocateDepthBuffer=$===void 0,q.__autoAllocateDepthBuffer||Fe.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),q.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(w,B){const $=Oe.get(w);$.__webglFramebuffer=B,$.__useDefaultFramebuffer=B===void 0},this.setRenderTarget=function(w,B=0,$=0){A=w,M=B,T=$;let q=!0,H=null,re=!1,he=!1;if(w){const xe=Oe.get(w);if(xe.__useDefaultFramebuffer!==void 0)Ce.bindFramebuffer(U.FRAMEBUFFER,null),q=!1;else if(xe.__webglFramebuffer===void 0)R.setupRenderTarget(w);else if(xe.__hasExternalTextures)R.rebindTextures(w,Oe.get(w.texture).__webglTexture,Oe.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const we=w.depthTexture;if(xe.__boundDepthTexture!==we){if(we!==null&&Oe.has(we)&&(w.width!==we.image.width||w.height!==we.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");R.setupDepthRenderbuffer(w)}}const Me=w.texture;(Me.isData3DTexture||Me.isDataArrayTexture||Me.isCompressedArrayTexture)&&(he=!0);const Re=Oe.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Re[B])?H=Re[B][$]:H=Re[B],re=!0):w.samples>0&&R.useMultisampledRTT(w)===!1?H=Oe.get(w).__webglMultisampledFramebuffer:Array.isArray(Re)?H=Re[$]:H=Re,v.copy(w.viewport),x.copy(w.scissor),P=w.scissorTest}else v.copy(le).multiplyScalar(G).floor(),x.copy(pe).multiplyScalar(G).floor(),P=O;if(Ce.bindFramebuffer(U.FRAMEBUFFER,H)&&q&&Ce.drawBuffers(w,H),Ce.viewport(v),Ce.scissor(x),Ce.setScissorTest(P),re){const xe=Oe.get(w.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+B,xe.__webglTexture,$)}else if(he){const xe=Oe.get(w.texture),Me=B||0;U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,xe.__webglTexture,$||0,Me)}C=-1},this.readRenderTargetPixels=function(w,B,$,q,H,re,he){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Se=Oe.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&he!==void 0&&(Se=Se[he]),Se){Ce.bindFramebuffer(U.FRAMEBUFFER,Se);try{const xe=w.texture,Me=xe.format,Re=xe.type;if(!ze.textureFormatReadable(Me)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ze.textureTypeReadable(Re)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=w.width-q&&$>=0&&$<=w.height-H&&U.readPixels(B,$,q,H,Ie.convert(Me),Ie.convert(Re),re)}finally{const xe=A!==null?Oe.get(A).__webglFramebuffer:null;Ce.bindFramebuffer(U.FRAMEBUFFER,xe)}}},this.readRenderTargetPixelsAsync=async function(w,B,$,q,H,re,he){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Se=Oe.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&he!==void 0&&(Se=Se[he]),Se){const xe=w.texture,Me=xe.format,Re=xe.type;if(!ze.textureFormatReadable(Me))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ze.textureTypeReadable(Re))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(B>=0&&B<=w.width-q&&$>=0&&$<=w.height-H){Ce.bindFramebuffer(U.FRAMEBUFFER,Se);const we=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,we),U.bufferData(U.PIXEL_PACK_BUFFER,re.byteLength,U.STREAM_READ),U.readPixels(B,$,q,H,Ie.convert(Me),Ie.convert(Re),0);const Xe=A!==null?Oe.get(A).__webglFramebuffer:null;Ce.bindFramebuffer(U.FRAMEBUFFER,Xe);const it=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await _d(U,it,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,we),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,re),U.deleteBuffer(we),U.deleteSync(it),re}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(w,B=null,$=0){w.isTexture!==!0&&(Ds("WebGLRenderer: copyFramebufferToTexture function signature has changed."),B=arguments[0]||null,w=arguments[1]);const q=Math.pow(2,-$),H=Math.floor(w.image.width*q),re=Math.floor(w.image.height*q),he=B!==null?B.x:0,Se=B!==null?B.y:0;R.setTexture2D(w,0),U.copyTexSubImage2D(U.TEXTURE_2D,$,0,0,he,Se,H,re),Ce.unbindTexture()},this.copyTextureToTexture=function(w,B,$=null,q=null,H=0){w.isTexture!==!0&&(Ds("WebGLRenderer: copyTextureToTexture function signature has changed."),q=arguments[0]||null,w=arguments[1],B=arguments[2],H=arguments[3]||0,$=null);let re,he,Se,xe,Me,Re;$!==null?(re=$.max.x-$.min.x,he=$.max.y-$.min.y,Se=$.min.x,xe=$.min.y):(re=w.image.width,he=w.image.height,Se=0,xe=0),q!==null?(Me=q.x,Re=q.y):(Me=0,Re=0);const we=Ie.convert(B.format),Xe=Ie.convert(B.type);R.setTexture2D(B,0),U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,B.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,B.unpackAlignment);const it=U.getParameter(U.UNPACK_ROW_LENGTH),st=U.getParameter(U.UNPACK_IMAGE_HEIGHT),Ut=U.getParameter(U.UNPACK_SKIP_PIXELS),$e=U.getParameter(U.UNPACK_SKIP_ROWS),Ae=U.getParameter(U.UNPACK_SKIP_IMAGES),vt=w.isCompressedTexture?w.mipmaps[H]:w.image;U.pixelStorei(U.UNPACK_ROW_LENGTH,vt.width),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,vt.height),U.pixelStorei(U.UNPACK_SKIP_PIXELS,Se),U.pixelStorei(U.UNPACK_SKIP_ROWS,xe),w.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,H,Me,Re,re,he,we,Xe,vt.data):w.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,H,Me,Re,vt.width,vt.height,we,vt.data):U.texSubImage2D(U.TEXTURE_2D,H,Me,Re,re,he,we,Xe,vt),U.pixelStorei(U.UNPACK_ROW_LENGTH,it),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,st),U.pixelStorei(U.UNPACK_SKIP_PIXELS,Ut),U.pixelStorei(U.UNPACK_SKIP_ROWS,$e),U.pixelStorei(U.UNPACK_SKIP_IMAGES,Ae),H===0&&B.generateMipmaps&&U.generateMipmap(U.TEXTURE_2D),Ce.unbindTexture()},this.copyTextureToTexture3D=function(w,B,$=null,q=null,H=0){w.isTexture!==!0&&(Ds("WebGLRenderer: copyTextureToTexture3D function signature has changed."),$=arguments[0]||null,q=arguments[1]||null,w=arguments[2],B=arguments[3],H=arguments[4]||0);let re,he,Se,xe,Me,Re,we,Xe,it;const st=w.isCompressedTexture?w.mipmaps[H]:w.image;$!==null?(re=$.max.x-$.min.x,he=$.max.y-$.min.y,Se=$.max.z-$.min.z,xe=$.min.x,Me=$.min.y,Re=$.min.z):(re=st.width,he=st.height,Se=st.depth,xe=0,Me=0,Re=0),q!==null?(we=q.x,Xe=q.y,it=q.z):(we=0,Xe=0,it=0);const Ut=Ie.convert(B.format),$e=Ie.convert(B.type);let Ae;if(B.isData3DTexture)R.setTexture3D(B,0),Ae=U.TEXTURE_3D;else if(B.isDataArrayTexture||B.isCompressedArrayTexture)R.setTexture2DArray(B,0),Ae=U.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,B.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,B.unpackAlignment);const vt=U.getParameter(U.UNPACK_ROW_LENGTH),je=U.getParameter(U.UNPACK_IMAGE_HEIGHT),Kt=U.getParameter(U.UNPACK_SKIP_PIXELS),Si=U.getParameter(U.UNPACK_SKIP_ROWS),Nt=U.getParameter(U.UNPACK_SKIP_IMAGES);U.pixelStorei(U.UNPACK_ROW_LENGTH,st.width),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,st.height),U.pixelStorei(U.UNPACK_SKIP_PIXELS,xe),U.pixelStorei(U.UNPACK_SKIP_ROWS,Me),U.pixelStorei(U.UNPACK_SKIP_IMAGES,Re),w.isDataTexture||w.isData3DTexture?U.texSubImage3D(Ae,H,we,Xe,it,re,he,Se,Ut,$e,st.data):B.isCompressedArrayTexture?U.compressedTexSubImage3D(Ae,H,we,Xe,it,re,he,Se,Ut,st.data):U.texSubImage3D(Ae,H,we,Xe,it,re,he,Se,Ut,$e,st),U.pixelStorei(U.UNPACK_ROW_LENGTH,vt),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,je),U.pixelStorei(U.UNPACK_SKIP_PIXELS,Kt),U.pixelStorei(U.UNPACK_SKIP_ROWS,Si),U.pixelStorei(U.UNPACK_SKIP_IMAGES,Nt),H===0&&B.generateMipmaps&&U.generateMipmap(Ae),Ce.unbindTexture()},this.initRenderTarget=function(w){Oe.get(w).__webglFramebuffer===void 0&&R.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?R.setTextureCube(w,0):w.isData3DTexture?R.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?R.setTexture2DArray(w,0):R.setTexture2D(w,0),Ce.unbindTexture()},this.resetState=function(){M=0,T=0,A=null,Ce.reset(),et.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Pn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===dl?"display-p3":"srgb",t.unpackColorSpace=qe.workingColorSpace===ea?"display-p3":"srgb"}}class O_ extends Ot{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new On,this.environmentIntensity=1,this.environmentRotation=new On,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Yu extends Gr{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ke(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Vs=new j,Ws=new j,yc=new ut,dr=new Nu,ps=new ta,Ga=new j,Sc=new j;class I_ extends Ot{constructor(e=new In,t=new Yu){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let r=1,s=t.count;r<s;r++)Vs.fromBufferAttribute(t,r-1),Ws.fromBufferAttribute(t,r),i[r]=i[r-1],i[r]+=Vs.distanceTo(Ws);e.setAttribute("lineDistance",new dn(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),ps.copy(i.boundingSphere),ps.applyMatrix4(r),ps.radius+=s,e.ray.intersectsSphere(ps)===!1)return;yc.copy(r).invert(),dr.copy(e.ray).applyMatrix4(yc);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,u=i.index,d=i.attributes.position;if(u!==null){const f=Math.max(0,a.start),g=Math.min(u.count,a.start+a.count);for(let _=f,p=g-1;_<p;_+=c){const m=u.getX(_),S=u.getX(_+1),y=ms(this,e,dr,l,m,S);y&&t.push(y)}if(this.isLineLoop){const _=u.getX(g-1),p=u.getX(f),m=ms(this,e,dr,l,_,p);m&&t.push(m)}}else{const f=Math.max(0,a.start),g=Math.min(d.count,a.start+a.count);for(let _=f,p=g-1;_<p;_+=c){const m=ms(this,e,dr,l,_,_+1);m&&t.push(m)}if(this.isLineLoop){const _=ms(this,e,dr,l,g-1,f);_&&t.push(_)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function ms(n,e,t,i,r,s){const a=n.geometry.attributes.position;if(Vs.fromBufferAttribute(a,r),Ws.fromBufferAttribute(a,s),t.distanceSqToSegment(Vs,Ws,Ga,Sc)>i)return;Ga.applyMatrix4(n.matrixWorld);const l=e.ray.origin.distanceTo(Ga);if(!(l<e.near||l>e.far))return{distance:l,point:Sc.clone().applyMatrix4(n.matrixWorld),index:r,face:null,faceIndex:null,barycoord:null,object:n}}const xc=new j,Ec=new j;class U_ extends I_{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let r=0,s=t.count;r<s;r+=2)xc.fromBufferAttribute(t,r),Ec.fromBufferAttribute(t,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+xc.distanceTo(Ec);e.setAttribute("lineDistance",new dn(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}const gs=new j,_s=new j,za=new j,vs=new jt;class N_ extends In{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){const r=Math.pow(10,4),s=Math.cos(Ns*t),a=e.getIndex(),o=e.getAttribute("position"),l=a?a.count:o.count,c=[0,0,0],u=["a","b","c"],h=new Array(3),d={},f=[];for(let g=0;g<l;g+=3){a?(c[0]=a.getX(g),c[1]=a.getX(g+1),c[2]=a.getX(g+2)):(c[0]=g,c[1]=g+1,c[2]=g+2);const{a:_,b:p,c:m}=vs;if(_.fromBufferAttribute(o,c[0]),p.fromBufferAttribute(o,c[1]),m.fromBufferAttribute(o,c[2]),vs.getNormal(za),h[0]=`${Math.round(_.x*r)},${Math.round(_.y*r)},${Math.round(_.z*r)}`,h[1]=`${Math.round(p.x*r)},${Math.round(p.y*r)},${Math.round(p.z*r)}`,h[2]=`${Math.round(m.x*r)},${Math.round(m.y*r)},${Math.round(m.z*r)}`,!(h[0]===h[1]||h[1]===h[2]||h[2]===h[0]))for(let S=0;S<3;S++){const y=(S+1)%3,b=h[S],M=h[y],T=vs[u[S]],A=vs[u[y]],C=`${b}_${M}`,D=`${M}_${b}`;D in d&&d[D]?(za.dot(d[D].normal)<=s&&(f.push(T.x,T.y,T.z),f.push(A.x,A.y,A.z)),d[D]=null):C in d||(d[C]={index0:c[S],index1:c[y],normal:za.clone()})}}for(const g in d)if(d[g]){const{index0:_,index1:p}=d[g];gs.fromBufferAttribute(o,_),_s.fromBufferAttribute(o,p),f.push(gs.x,gs.y,gs.z),f.push(_s.x,_s.y,_s.z)}this.setAttribute("position",new dn(f,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}const wc={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class D_{constructor(e,t,i){const r=this;let s=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(u){o++,s===!1&&r.onStart!==void 0&&r.onStart(u,a,o),s=!0},this.itemEnd=function(u){a++,r.onProgress!==void 0&&r.onProgress(u,a,o),a===o&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){const h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,d=c.length;h<d;h+=2){const f=c[h],g=c[h+1];if(f.global&&(f.lastIndex=0),f.test(u))return g}return null}}}const k_=new D_;class pl{constructor(e){this.manager=e!==void 0?e:k_,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(r,s){i.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}pl.DEFAULT_MATERIAL_NAME="__DEFAULT";class F_ extends pl{constructor(e){super(e)}load(e,t,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=wc.get(e);if(a!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0),a;const o=Mr("img");function l(){u(),wc.add(e,this),t&&t(this),s.manager.itemEnd(e)}function c(h){u(),r&&r(h),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),s.manager.itemStart(e),o.src=e,o}}class B_ extends pl{constructor(e){super(e)}load(e,t,i,r){const s=new bt,a=new F_(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){s.image=o,s.needsUpdate=!0,t!==void 0&&t(s)},i,r),s}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:sl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=sl);const bc="/kazoo-gang/",$n={twitchChannel:"kazoogod02",cinemaVideos:["w7v7KXlr-9M","R4cWGN4XXPc","qKMRPzzEylQ","c-WdEiRFMvA","65wACOvY4Po","mqu18Wcu-Ag","-NGDwnlUIGo","wJ6gSFacwoE","xf-XgGCLClk","OR5IlwdlN5Y","q2TOWK6_cRI","-YhyG3WpRfs","cJnUMnW9Wmc","YKzxFLxfW0M"],discordInvite:"https://discord.gg/uCMbcCzVJM",adminPassword:"kazoo0209",catImage:bc+"gata.png",logoImage:bc+"logo.png",seedNews:[{title:"¡Bienvenidos a Kazoo TV!",html:"Sintoniza el canal y quédate — esto apenas empieza. 🔥"},{title:"Colab sorpresa este finde",html:"Se viene algo <b>bien cañón</b> el sábado. Estén al pendiente."}],socials:[{name:"TWITCH",url:"https://twitch.tv/kazoogod02",color:"#9146ff"},{name:"YOUTUBE",url:"https://youtube.com/@KazooGod02",color:"#ff0000"},{name:"TIKTOK",url:"https://tiktok.com/@KazooGod02",color:"#69C9D0"},{name:"INSTAGRAM",url:"https://instagram.com/KazooGod02",color:"#E1306C"},{name:"X",url:"https://x.com/KazooGod02",color:"#e6e6e6"}]};function H_(n,e){const t=document.createElement("div");t.className="boot poweron",n.appendChild(t);const i=()=>t.clientWidth||window.innerWidth||800,r=()=>t.clientHeight||window.innerHeight||600,s=new O_,a=new $t(45,i()/r(),.1,100);a.position.z=4.2;const o=new L_({alpha:!0,antialias:!0});o.setPixelRatio(Math.min(window.devicePixelRatio,2)),o.setSize(i(),r()),t.appendChild(o.domElement);const l=new gr;l.scale.setScalar(.56),s.add(l);const c=new Xt(new ir(2,2,.28),new Er({color:656656}));l.add(c);const u=new U_(new N_(c.geometry),new Yu({color:16403925}));l.add(u);const h=new B_().load($n.logoImage);h.colorSpace=nn;const d=new zr(1.7,1.7),f=new Xt(d,new Er({map:h,transparent:!0}));f.position.z=.151,l.add(f);const g=new Xt(d,new Er({map:h,transparent:!0}));g.position.z=-.151,g.rotation.y=Math.PI,l.add(g);let _=0;function p(){l.rotation.y+=.022,l.rotation.x=Math.sin(Date.now()*6e-4)*.12,o.render(s,a),_=requestAnimationFrame(p)}p();function m(){a.aspect=i()/r(),a.updateProjectionMatrix(),o.setSize(i(),r())}window.addEventListener("resize",m),requestAnimationFrame(m),setTimeout(m,120);const S=document.createElement("div");S.className="boot-ov",S.innerHTML='<div class="bt">KAZOO GANG</div><div class="bs">K A Z O O   T V</div><div class="enter-prompt">▶ PULSA PARA ENTRAR</div>',t.appendChild(S);const y=document.createElement("div");y.className="scanlines",t.appendChild(y);const b=document.createElement("div");b.className="vignette",t.appendChild(b);function M(){cancelAnimationFrame(_),window.removeEventListener("resize",m),t.removeEventListener("click",M),o.dispose(),t.parentNode&&t.parentNode.removeChild(t),e()}t.addEventListener("click",M)}let Pt=null,_i=null;function Ju(){if(!Pt)try{Pt=new(window.AudioContext||window.webkitAudioContext),_i=Pt.createGain(),_i.gain.value=.6,_i.connect(Pt.destination)}catch{}}function Go(n){_i&&(_i.gain.value=Math.max(0,Math.min(1,n)))}function Rr(n,e,t="square",i=.14){if(!Pt)return;const r=Pt.createOscillator(),s=Pt.createGain();r.type=t,r.frequency.value=n,r.connect(s),s.connect(_i);const a=Pt.currentTime;s.gain.setValueAtTime(i,a),s.gain.exponentialRampToValueAtTime(1e-4,a+e),r.start(a),r.stop(a+e)}function wn(){Rr(520,.05,"square",.1)}function zo(n=440,e=.06){Rr(n,e,"square",.1)}function Zu(){Rr(1500,.012,"square",.03)}function _r(){Rr(300,.08,"square",.12),setTimeout(()=>Rr(600,.1,"square",.12),70)}function vr(n=.16){if(!Pt)return;const e=Math.floor(Pt.sampleRate*n),t=Pt.createBuffer(1,e,Pt.sampleRate),i=t.getChannelData(0);for(let a=0;a<e;a++)i[a]=(Math.random()*2-1)*.5;const r=Pt.createBufferSource();r.buffer=t;const s=Pt.createGain();s.gain.value=.22,r.connect(s),s.connect(_i),r.start()}const fr=Object.freeze(Object.defineProperty({__proto__:null,beep:zo,blip:wn,enterSfx:_r,initAudio:Ju,setVolume:Go,staticBurst:vr,tick:Zu},Symbol.toStringTag,{value:"Module"}));function G_(n,e){const r=document.createElement("canvas");r.className="game",r.width=420,r.height=520,n.appendChild(r);const s=r.getContext("2d"),a=new Image;a.src=$n.catImage;const o=158,l=60,c=2.3,u=.42,h=-7.2;let d,f,g,_=0,p,m,S=0;function y(){d={x:96,y:520/2,v:0,r:18},f=[],g=0,p="ready"}y();function b(){const D=46+Math.random()*(520-o-150);f.push({x:420,top:D,passed:!1})}function M(){p==="ready"&&(p="play",b()),p==="play"?(d.v=h,e.beep(660,.05)):p==="dead"&&y()}function T(D){(D.code==="Space"||D.code==="ArrowUp"||D.code==="KeyW")&&(D.preventDefault(),M())}window.addEventListener("keydown",T),r.addEventListener("click",M);function A(){p!=="dead"&&(p="dead",e.staticBurst(.1))}function C(D){const v=S?Math.min((D-S)/16.6667,3):1;S=D,s.fillStyle="#05060a",s.fillRect(0,0,420,520),p==="play"&&(d.v+=u*v,d.y+=d.v*v,(f.length===0||f[f.length-1].x<210)&&b(),f.forEach(x=>x.x-=c*v),f=f.filter(x=>x.x+l>0),f.forEach(x=>{!x.passed&&x.x+l<d.x&&(x.passed=!0,g++,_=Math.max(_,g),e.beep(880,.05)),d.x+d.r>x.x&&d.x-d.r<x.x+l&&(d.y-d.r<x.top||d.y+d.r>x.top+o)&&A()}),(d.y+d.r>520||d.y-d.r<0)&&A()),s.fillStyle="#fa4dd5",f.forEach(x=>{s.fillRect(x.x,0,l,x.top),s.fillRect(x.x,x.top+o,l,520-x.top-o)}),a.complete&&a.naturalWidth?s.drawImage(a,d.x-d.r,d.y-d.r,d.r*2,d.r*2):(s.fillStyle="#fff",s.beginPath(),s.arc(d.x,d.y,d.r,0,7),s.fill()),s.fillStyle="#fff",s.font="bold 28px 'Courier New'",s.textAlign="center",s.fillText(g,420/2,52),p==="ready"&&(s.font="15px 'Courier New'",s.fillText("ESPACIO / W / CLIC PARA VOLAR",420/2,520/2-40)),p==="dead"&&(s.fillStyle="#fa4dd5",s.font="bold 24px 'Courier New'",s.fillText("¡TE ESTRELLASTE!",420/2,520/2-16),s.fillStyle="#fff",s.font="15px 'Courier New'",s.fillText("mejor: "+_+" — clic para reintentar",420/2,520/2+12)),m=requestAnimationFrame(C)}return m=requestAnimationFrame(C),()=>{cancelAnimationFrame(m),window.removeEventListener("keydown",T),n.innerHTML=""}}function z_(n,e){const a=document.createElement("canvas");a.className="game",a.width=440,a.height=440,n.appendChild(a);const o=a.getContext("2d");let l,c,u,h,d,f,g;function _(){let M;do M={x:Math.random()*20|0,y:Math.random()*20|0};while(l&&l.some(T=>T.x===M.x&&T.y===M.y));return M}function p(){l=[{x:10,y:10}],c={x:1,y:0},u=[],h=_(),d=0,f="play"}p();function m(M){const T=u.length?u[u.length-1]:c;M.x===-T.x&&M.y===-T.y||M.x===T.x&&M.y===T.y||u.length<2&&u.push(M)}function S(M){const T=M.key.toLowerCase();T==="arrowup"||T==="w"?m({x:0,y:-1}):T==="arrowdown"||T==="s"?m({x:0,y:1}):T==="arrowleft"||T==="a"?m({x:-1,y:0}):T==="arrowright"||T==="d"?m({x:1,y:0}):T===" "&&f==="dead"&&p(),(T.startsWith("arrow")||"wasd ".includes(T))&&M.preventDefault()}window.addEventListener("keydown",S);function y(){if(f==="play"){u.length&&(c=u.shift());const M={x:l[0].x+c.x,y:l[0].y+c.y};M.x<0||M.y<0||M.x>=20||M.y>=20||l.some(T=>T.x===M.x&&T.y===M.y)?(f="dead",e.staticBurst(.1)):(l.unshift(M),M.x===h.x&&M.y===h.y?(d++,e.beep(880,.05),h=_()):l.pop())}b()}function b(){o.fillStyle="#05060a",o.fillRect(0,0,440,440),o.fillStyle="#ffd24d",o.fillRect(h.x*22+3,h.y*22+3,16,16),l.forEach((M,T)=>{o.fillStyle=T===0?"#fff":"#fa4dd5",o.fillRect(M.x*22+1,M.y*22+1,20,20)}),o.fillStyle="#fff",o.font="bold 18px 'Courier New'",o.textAlign="left",o.fillText("★ "+d,8,22),f==="dead"&&(o.textAlign="center",o.fillStyle="#fa4dd5",o.font="bold 22px 'Courier New'",o.fillText("GAME OVER",440/2,440/2-10),o.fillStyle="#fff",o.font="14px 'Courier New'",o.fillText("espacio para reiniciar",440/2,440/2+16))}return g=setInterval(y,95),b(),()=>{clearInterval(g),window.removeEventListener("keydown",S),n.innerHTML=""}}function V_(n,e){const t=document.createElement("div");t.style.cssText="text-align:center;color:#fff;font-family:inherit;",t.innerHTML='<div style="margin-bottom:14px;color:#b9a7c9" id="msg"></div><div id="board" style="display:grid;grid-template-columns:repeat(3,84px);gap:6px;justify-content:center"></div><button class="btn ghost" id="rst" style="margin-top:16px">REINICIAR</button>',n.appendChild(t);const i=t.querySelector("#board"),r=t.querySelector("#msg"),s=[];let a,o;const l=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];function c(g){for(const _ of l)if(g[_[0]]&&g[_[0]]===g[_[1]]&&g[_[1]]===g[_[2]])return g[_[0]];return g.every(_=>_)?"draw":null}function u(g,_){const p=c(g);if(p==="O")return{s:1};if(p==="X")return{s:-1};if(p==="draw")return{s:0};let m=null;for(let S=0;S<9;S++)if(!g[S]){g[S]=_;const y=u(g,_==="O"?"X":"O").s;g[S]="",(m==null||(_==="O"?y>m.s:y<m.s))&&(m={i:S,s:y})}return m}function h(){a=Array(9).fill(""),o=!1,r.innerHTML='Tú eres <b style="color:#fa4dd5">X</b> · toca una casilla',s.forEach(g=>{g.textContent="",g.style.color="#fa4dd5"})}function d(g){o=!0,r.innerHTML=g==="draw"?"🤝 Empate":g==="X"?"🎉 ¡Ganaste!":"🤖 Ganó la IA",g==="X"?e.beep(880,.14):e.staticBurst(.12)}function f(g){if(o||a[g])return;a[g]="X",s[g].textContent="X",e.beep(520,.05);let _=c(a);if(_)return d(_);const p=u(a,"O").i;p!=null&&(a[p]="O",s[p].textContent="O",s[p].style.color="#4dd5fa",e.beep(360,.05)),_=c(a),_&&d(_)}for(let g=0;g<9;g++){const _=document.createElement("button");_.style.cssText="width:84px;height:84px;font:bold 42px 'Courier New';background:#0a0710;border:2px solid #6e1a5c;color:#fa4dd5;cursor:pointer",_.onclick=()=>f(g),i.appendChild(_),s.push(_)}return t.querySelector("#rst").onclick=()=>{e.blip(),h()},h(),()=>{n.innerHTML=""}}function W_(n,e){const r=document.createElement("canvas");r.className="game",r.width=560,r.height=260,n.appendChild(r);const s=r.getContext("2d"),a=new Image;a.src=$n.catImage;const o=182;let l,c,u,h=0,d,f,g,_=0;function p(){l={x:70,y:o,vy:0,s:38,ground:!0},c=[],u=0,f=4.4,d="ready"}p();function m(){if(d==="ready")d="play";else if(d==="dead"){p();return}l.ground&&(l.vy=-11.5,l.ground=!1,e.beep(660,.05))}function S(M){(M.code==="Space"||M.code==="ArrowUp"||M.code==="KeyW")&&(M.preventDefault(),m())}window.addEventListener("keydown",S),r.addEventListener("click",m);function y(){d!=="dead"&&(d="dead",e.staticBurst(.1))}function b(M){const T=_?Math.min((M-_)/16.6667,3):1;_=M,s.fillStyle="#05060a",s.fillRect(0,0,560,260),s.strokeStyle="#6e1a5c",s.beginPath(),s.moveTo(0,o+l.s),s.lineTo(560,o+l.s),s.stroke(),d==="play"&&(f+=.0022*T,l.vy+=.62*T,l.y+=l.vy*T,l.y>=o&&(l.y=o,l.vy=0,l.ground=!0),(c.length===0||c[c.length-1].x<280-Math.random()*200)&&c.push({x:560,w:18+Math.random()*16,h:26+Math.random()*30}),c.forEach(A=>A.x-=f*T),c=c.filter(A=>A.x+A.w>0),c.forEach(A=>{!A.p&&A.x+A.w<l.x&&(A.p=!0,u++,h=Math.max(h,u),e.beep(880,.04));const C=o+l.s-A.h;l.x+l.s>A.x&&l.x<A.x+A.w&&l.y+l.s>C&&y()})),s.fillStyle="#fa4dd5",c.forEach(A=>s.fillRect(A.x,o+l.s-A.h,A.w,A.h)),a.complete&&a.naturalWidth?s.drawImage(a,l.x,l.y,l.s,l.s):(s.fillStyle="#fff",s.fillRect(l.x,l.y,l.s,l.s)),s.fillStyle="#fff",s.font="bold 18px 'Courier New'",s.textAlign="right",s.fillText(u,546,26),d==="ready"&&(s.textAlign="center",s.font="15px 'Courier New'",s.fillText("ESPACIO / W / ↑ PARA SALTAR",560/2,260/2)),d==="dead"&&(s.textAlign="center",s.fillStyle="#fa4dd5",s.font="bold 20px 'Courier New'",s.fillText("¡CHOCASTE!",560/2,260/2-12),s.fillStyle="#fff",s.font="14px 'Courier New'",s.fillText("mejor: "+h+" — clic para reintentar",560/2,260/2+14)),g=requestAnimationFrame(b)}return g=requestAnimationFrame(b),()=>{cancelAnimationFrame(g),window.removeEventListener("keydown",S),n.innerHTML=""}}const ri=10,Ni=20,Gn=16,Va=16,Wa=20,Vo={I:{c:"#4dd5fa",r:[[1,1,1,1]]},O:{c:"#ffd24d",r:[[1,1],[1,1]]},T:{c:"#c084fc",r:[[0,1,0],[1,1,1]]},S:{c:"#8bff9e",r:[[0,1,1],[1,1,0]]},Z:{c:"#ff6b6b",r:[[1,1,0],[0,1,1]]},J:{c:"#6b8bff",r:[[1,0,0],[1,1,1]]},L:{c:"#fa4dd5",r:[[0,0,1],[1,1,1]]}},ys=Object.keys(Vo);function $_(n,e){const i=Ni*Gn+Wa*2,r=document.createElement("canvas");r.className="game",r.width=300,r.height=i,n.appendChild(r);const s=r.getContext("2d");let a,o,l,c,u,h,d,f,g,_=0;function p(){return Array.from({length:Ni},()=>Array(ri).fill(null))}function m(){const P=l||ys[Math.random()*ys.length|0];l=ys[Math.random()*ys.length|0];const L=Vo[P];return{k:P,c:L.c,m:L.r.map(I=>I.slice()),x:(ri-L.r[0].length)/2|0,y:0}}function S(){a=p(),c=0,u=0,h=!1,d=700,f=0,l=null,o=m()}S();function y(P,L,I,F){F=F||P.m;for(let z=0;z<F.length;z++)for(let G=0;G<F[z].length;G++){if(!F[z][G])continue;const V=L+G,se=I+z;if(V<0||V>=ri||se>=Ni||se>=0&&a[se][V])return!0}return!1}function b(P){const L=P.length,I=P[0].length,F=Array.from({length:I},()=>Array(L).fill(0));for(let z=0;z<L;z++)for(let G=0;G<I;G++)F[G][L-1-z]=P[z][G];return F}function M(){o.m.forEach((L,I)=>L.forEach((F,z)=>{if(F){const G=o.y+I,V=o.x+z;G>=0&&(a[G][V]=o.c)}}));let P=0;for(let L=Ni-1;L>=0;L--)a[L].every(I=>I)&&(a.splice(L,1),a.unshift(Array(ri).fill(null)),P++,L++);P?(u+=P,c+=[0,100,300,500,800][P],d=Math.max(120,700-u*18),e.beep(660+P*120,.08)):e.beep(300,.03),o=m(),y(o,o.x,o.y)&&(h=!0,e.staticBurst(.12))}function T(){y(o,o.x,o.y+1)?M():o.y++}function A(){for(;!y(o,o.x,o.y+1);)o.y++;M()}function C(P){if(h){(P.code==="Space"||P.code==="Enter")&&S();return}if(P.code==="ArrowLeft")y(o,o.x-1,o.y)||(o.x--,e.tick&&e.tick());else if(P.code==="ArrowRight")y(o,o.x+1,o.y)||(o.x++,e.tick&&e.tick());else if(P.code==="ArrowDown")T(),f=0;else if(P.code==="ArrowUp"||P.code==="KeyW"){const L=b(o.m);let I=o.x;y(o,I,o.y,L)&&(I=y(o,o.x-1,o.y,L)?y(o,o.x+1,o.y,L)?null:o.x+1:o.x-1),I!=null&&(o.m=L,o.x=I,e.blip&&e.blip())}else if(P.code==="Space")A();else return;P.preventDefault()}window.addEventListener("keydown",C);function D(P,L,I){s.fillStyle=I,s.fillRect(Va+P*Gn,Wa+L*Gn,Gn-1,Gn-1)}function v(){s.fillStyle="#05060a",s.fillRect(0,0,300,i),s.strokeStyle="#6e1a5c",s.strokeRect(Va-1,Wa-1,ri*Gn+1,Ni*Gn+1);for(let I=0;I<Ni;I++)for(let F=0;F<ri;F++)a[I][F]&&D(F,I,a[I][F]);o.m.forEach((I,F)=>I.forEach((z,G)=>{z&&o.y+F>=0&&D(o.x+G,o.y+F,o.c)}));const P=Va+ri*Gn+16;s.fillStyle="#fff",s.font="bold 13px 'Courier New'",s.textAlign="left",s.fillText("PUNTOS",P,40),s.fillStyle="#fa4dd5",s.font="bold 18px 'Courier New'",s.fillText(c,P,62),s.fillStyle="#fff",s.font="bold 13px 'Courier New'",s.fillText("LÍNEAS",P,96),s.fillStyle="#8bff9e",s.fillText(String(u),P,116),s.fillStyle="#9aa",s.font="11px 'Courier New'",s.fillText("SIGUIENTE",P,150);const L=Vo[l];L&&L.r.forEach((I,F)=>I.forEach((z,G)=>{z&&(s.fillStyle=L.c,s.fillRect(P+G*12,160+F*12,11,11))})),s.fillStyle="#667",s.font="10px 'Courier New'",s.fillText("← → ↓  ↑ rota",P,i-44),s.fillText("ESPACIO cae",P,i-30),h&&(s.fillStyle="rgba(5,6,10,.82)",s.fillRect(0,0,300,i),s.textAlign="center",s.fillStyle="#fa4dd5",s.font="bold 22px 'Courier New'",s.fillText("GAME OVER",300/2,i/2-8),s.fillStyle="#fff",s.font="13px 'Courier New'",s.fillText("puntos: "+c+" — espacio para reiniciar",300/2,i/2+18))}function x(P){const L=_?P-_:16;_=P,h||(f+=L,f>=d&&(f=0,T())),v(),g=requestAnimationFrame(x)}return g=requestAnimationFrame(x),()=>{cancelAnimationFrame(g),window.removeEventListener("keydown",C),n.innerHTML=""}}function j_(n,e){const r=document.createElement("canvas");r.className="game",r.width=520,r.height=360,n.appendChild(r);const s=r.getContext("2d"),a=8,o=4,l=26,c=18,u=18;let h,d,f,g,_,p,m,S,y,b,M=0;const T={};function A(){const P=[],L=(520-(a*(l+u)-u))/2;for(let I=0;I<o;I++)for(let F=0;F<a;F++)P.push({x:L+F*(l+u),y:40+I*(c+u),alive:!0,row:I});return P}function C(){h={x:520/2-18,y:330,w:36,h:12,cd:0},d=A(),f=[],g=[],_=1,p=0,m=3,S="play",y=0}C();function D(P){["ArrowLeft","ArrowRight","Space","KeyA","KeyD"].includes(P.code)&&P.preventDefault(),T[P.code]=P.type==="keydown",P.type==="keydown"&&P.code==="Space"&&S!=="play"&&C()}window.addEventListener("keydown",D),window.addEventListener("keyup",D);function v(){h.cd<=0&&(f.push({x:h.x+h.w/2-1.5,y:h.y,w:3,h:10}),h.cd=18,e.beep(880,.04))}function x(P){const L=M?Math.min((P-M)/16.6667,3):1;if(M=P,y++,s.fillStyle="#05060a",s.fillRect(0,0,520,360),S==="play"){(T.ArrowLeft||T.KeyA)&&(h.x-=4.4*L),(T.ArrowRight||T.KeyD)&&(h.x+=4.4*L),h.x=Math.max(6,Math.min(520-h.w-6,h.x)),T.Space&&v(),h.cd>0&&(h.cd-=L);const I=d.filter(G=>G.alive),F=(.4+(o*a-I.length)*.05)*L;let z=!1;if(I.forEach(G=>{G.x+=_*F,(G.x<6||G.x+l>514)&&(z=!0)}),z&&(_*=-1,I.forEach(G=>G.y+=14),e.beep(160,.04)),I.length&&Math.random()<.02*L+.008){const G=I[Math.random()*I.length|0];g.push({x:G.x+l/2,y:G.y+c,w:3,h:10})}g.forEach(G=>G.y+=3.2*L),g=g.filter(G=>G.y>360?!1:G.x<h.x+h.w&&G.x+G.w>h.x&&G.y+G.h>h.y&&G.y<h.y+h.h?(m--,e.staticBurst(.1),m<=0&&(S="lose"),!1):!0),f.forEach(G=>G.y-=7*L),f=f.filter(G=>{if(G.y+G.h<0)return!1;for(const V of I)if(V.alive&&G.x<V.x+l&&G.x+G.w>V.x&&G.y<V.y+c&&G.y+G.h>V.y)return V.alive=!1,p+=10,e.beep(1040,.04),!1;return!0}),I.some(G=>G.y+c>=h.y)&&(S="lose"),I.length===0&&(S="win")}d.forEach(I=>{if(!I.alive)return;s.fillStyle=["#fa4dd5","#4dd5fa","#8bff9e","#ffd24d"][I.row%4];const F=Math.sin(y/14+I.row)*2;s.fillRect(I.x,I.y,l,c-4),s.fillRect(I.x+4+F,I.y+c-5,4,4),s.fillRect(I.x+l-8-F,I.y+c-5,4,4)}),s.fillStyle="#fff",f.forEach(I=>s.fillRect(I.x,I.y,I.w,I.h)),s.fillStyle="#ff6b6b",g.forEach(I=>s.fillRect(I.x,I.y,I.w,I.h)),s.fillStyle="#fa4dd5",s.fillRect(h.x,h.y,h.w,h.h),s.fillRect(h.x+h.w/2-2,h.y-6,4,6),s.fillStyle="#fff",s.font="bold 15px 'Courier New'",s.textAlign="left",s.fillText("PTS "+p,12,22),s.textAlign="right",s.fillText("♥".repeat(Math.max(0,m)),508,22),S!=="play"&&(s.fillStyle="rgba(5,6,10,.8)",s.fillRect(0,0,520,360),s.textAlign="center",s.fillStyle=S==="win"?"#8bff9e":"#fa4dd5",s.font="bold 24px 'Courier New'",s.fillText(S==="win"?"¡GANASTE!":"TE INVADIERON",520/2,360/2-8),s.fillStyle="#fff",s.font="14px 'Courier New'",s.fillText("puntos: "+p+" — espacio para jugar otra vez",520/2,360/2+18)),b=requestAnimationFrame(x)}return b=requestAnimationFrame(x),()=>{cancelAnimationFrame(b),window.removeEventListener("keydown",D),window.removeEventListener("keyup",D),n.innerHTML=""}}const Ft=15,zt=15,Je=20,Ss={up:{dx:0,dy:-1},down:{dx:0,dy:1},left:{dx:-1,dy:0},right:{dx:1,dy:0}};function q_(n,e){const t=Ft*Je,i=zt*Je+28,r=document.createElement("canvas");r.className="game",r.width=t,r.height=i,n.appendChild(r);const s=r.getContext("2d");let a,o,l,c,u,h,d,f,g,_,p,m=0,S=1;function y(){const O=Array.from({length:zt},()=>Array(Ft).fill(1));(function Y(N,X){O[X][N]=0;const J=[[2,0],[-2,0],[0,2],[0,-2]].sort(()=>Math.random()-.5);for(const[ee,_e]of J){const be=N+ee,De=X+_e;be>0&&be<Ft-1&&De>0&&De<zt-1&&O[De][be]===1&&(O[X+_e/2][N+ee/2]=0,Y(be,De))}})(1,1);for(let Y=1;Y<zt-1;Y++)for(let N=1;N<Ft-1;N++)O[Y][N]===1&&Math.random()<.12&&(O[Y-1][N]===0)+(O[Y+1][N]===0)+(O[Y][N-1]===0)+(O[Y][N+1]===0)>=2&&(O[Y][N]=0);return O}const b=(O,Y)=>O>=0&&O<Ft&&Y>=0&&Y<zt&&a[Y][O]===0;function M(){a=y(),o=Array.from({length:zt},()=>Array(Ft).fill(!1)),l=Array.from({length:zt},()=>Array(Ft).fill(!1)),f=0;for(let X=0;X<zt;X++)for(let J=0;J<Ft;J++)a[X][J]===0&&(o[X][J]=!0,f++);[[1,1],[Ft-2,1],[1,zt-2],[Ft-2,zt-2]].forEach(([X,J])=>{const ee=T(X,J);ee&&(l[ee[1]][ee[0]]=!0)}),c={cx:1,cy:1,dir:null,want:null,p:0},o[1][1]=!1,f--;const Y=T(7,7),N=["#ff6b6b","#4dd5fa","#ffd24d","#c084fc"];u=[];for(let X=0;X<4;X++){const J=T(7+X%2,7+(X/2|0))||Y;u.push({cx:J[0],cy:J[1],dir:A(J[0],J[1],null),p:0,home:J.slice(),col:N[X],eaten:!1})}}function T(O,Y){for(let N=0;N<Ft;N++)for(let X=-N;X<=N;X++)for(let J=-N;J<=N;J++){const ee=O+J,_e=Y+X;if(b(ee,_e))return[ee,_e]}return null}function A(O,Y,N){const X=Object.values(Ss).filter(_e=>b(O+_e.dx,Y+_e.dy)),J=X.filter(_e=>!N||!(_e.dx===-N.dx&&_e.dy===-N.dy)),ee=J.length?J:X;return ee.length?ee[Math.random()*ee.length|0]:null}function C(){h=0,d=3,S=1,g="play",_=0,M()}C();function D(O){const Y={ArrowUp:"up",ArrowDown:"down",ArrowLeft:"left",ArrowRight:"right",KeyW:"up",KeyS:"down",KeyA:"left",KeyD:"right"};Y[O.code]&&(O.preventDefault(),g==="play"&&(c.want=Ss[Y[O.code]])),O.code==="Space"&&g!=="play"&&C()}window.addEventListener("keydown",D);const v=.14;function x(O,Y,N){for(O.p+=v*N;O.p>=1;)if(O.p-=1,O.cx+=O.dir?O.dir.dx:0,O.cy+=O.dir?O.dir.dy:0,Y(O),!O.dir||!b(O.cx+O.dir.dx,O.cy+O.dir.dy)){O.dir=O.dir&&b(O.cx+O.dir.dx,O.cy+O.dir.dy)?O.dir:null,O.p=0;break}}function P(O){O.want&&b(O.cx+O.want.dx,O.cy+O.want.dy)?O.dir=O.want:O.dir&&!b(O.cx+O.dir.dx,O.cy+O.dir.dy)&&(O.dir=null),o[O.cy][O.cx]&&(o[O.cy][O.cx]=!1,f--,h+=10,e.beep(720,.02)),l[O.cy][O.cx]&&(l[O.cy][O.cx]=!1,_=6e3,h+=50,e.beep(1040,.08)),f<=0&&(S++,h+=200,M())}function L(O){if(_>0){O.dir=A(O.cx,O.cy,O.dir);return}const Y=Object.values(Ss).filter(X=>b(O.cx+X.dx,O.cy+X.dy)&&!(O.dir&&X.dx===-O.dir.dx&&X.dy===-O.dir.dy)),N=Y.length?Y:Object.values(Ss).filter(X=>b(O.cx+X.dx,O.cy+X.dy));if(!N.length){O.dir=null;return}Math.random()<.55?(N.sort((X,J)=>I(O.cx+X.dx,O.cy+X.dy)-I(O.cx+J.dx,O.cy+J.dy)),O.dir=N[0]):O.dir=N[Math.random()*N.length|0]}const I=(O,Y)=>Math.abs(O-c.cx)+Math.abs(Y-c.cy),F=(O,Y,N)=>(O+(Y?Y.dx*N:0))*Je+Je/2,z=(O,Y,N)=>(O+(Y?Y.dy*N:0))*Je+Je/2+24;function G(){u.forEach(O=>{const Y=O.cx+(O.dir?O.dir.dx*O.p:0)-(c.cx+(c.dir?c.dir.dx*c.p:0)),N=O.cy+(O.dir?O.dir.dy*O.p:0)-(c.cy+(c.dir?c.dir.dy*c.p:0));if(Math.hypot(Y,N)<.6)if(_>0){h+=200,e.beep(1300,.1);const X=O.home;O.cx=X[0],O.cy=X[1],O.p=0,O.dir=A(X[0],X[1],null)}else d--,e.staticBurst(.14),d<=0?g="lose":V()})}function V(){c.cx=1,c.cy=1,c.dir=null,c.want=null,c.p=0,u.forEach(O=>{O.cx=O.home[0],O.cy=O.home[1],O.p=0,O.dir=A(O.home[0],O.home[1],null)}),_=0}let se=0;function le(){s.fillStyle="#05060a",s.fillRect(0,0,t,i);for(let J=0;J<zt;J++)for(let ee=0;ee<Ft;ee++)a[J][ee]===1&&(s.fillStyle="#241033",s.fillRect(ee*Je,J*Je+24,Je,Je),s.strokeStyle="#6e1a5c",s.strokeRect(ee*Je+1,J*Je+25,Je-2,Je-2));for(let J=0;J<zt;J++)for(let ee=0;ee<Ft;ee++)o[J][ee]&&(s.fillStyle="#ffd24d",s.beginPath(),s.arc(ee*Je+Je/2,J*Je+Je/2+24,2,0,7),s.fill()),l[J][ee]&&(s.fillStyle="#8bff9e",s.beginPath(),s.arc(ee*Je+Je/2,J*Je+Je/2+24,5,0,7),s.fill());const O=F(c.cx,c.dir,c.p),Y=z(c.cy,c.dir,c.p),N=c.dir?Math.atan2(c.dir.dy,c.dir.dx):0,X=Math.abs(Math.sin(se))*.5;s.fillStyle="#ffd24d",s.beginPath(),s.moveTo(O,Y),s.arc(O,Y,Je/2-2,N+X,N+Math.PI*2-X),s.closePath(),s.fill(),u.forEach(J=>{const ee=F(J.cx,J.dir,J.p),_e=z(J.cy,J.dir,J.p);s.fillStyle=_>0?_<1500&&(_/200|0)%2?"#fff":"#3355ff":J.col,s.beginPath(),s.arc(ee,_e,Je/2-2,Math.PI,0),s.lineTo(ee+Je/2-2,_e+Je/2-2),s.lineTo(ee-Je/2+2,_e+Je/2-2),s.closePath(),s.fill(),s.fillStyle="#fff",s.fillRect(ee-4,_e-2,3,4),s.fillRect(ee+1,_e-2,3,4)}),s.fillStyle="#fff",s.font="bold 14px 'Courier New'",s.textAlign="left",s.fillText("PTS "+h,8,17),s.textAlign="center",s.fillText("NIVEL "+S,t/2,17),s.textAlign="right",s.fillStyle="#ffd24d",s.fillText("●".repeat(Math.max(0,d)),t-8,17),g==="lose"&&(s.fillStyle="rgba(5,6,10,.82)",s.fillRect(0,0,t,i),s.textAlign="center",s.fillStyle="#fa4dd5",s.font="bold 24px 'Courier New'",s.fillText("GAME OVER",t/2,i/2),s.fillStyle="#fff",s.font="13px 'Courier New'",s.fillText("puntos: "+h+" — espacio para reiniciar",t/2,i/2+24))}function pe(O){const Y=m?Math.min((O-m)/16.6667,2.5):1;m=O,se+=.3*Y,g==="play"&&(x(c,P,Y),u.forEach(N=>x(N,L,Y)),_>0&&(_=Math.max(0,_-Y*16.6667)),G()),le(),p=requestAnimationFrame(pe)}return p=requestAnimationFrame(pe),()=>{cancelAnimationFrame(p),window.removeEventListener("keydown",D),n.innerHTML=""}}function X_(n,e){const r=document.createElement("canvas");r.className="game",r.width=340,r.height=380,n.appendChild(r);const s=r.getContext("2d"),a=4,o=30,l=280,c=l/a,u=c-14,h=46,d=P=>o+P*c+(c-u)/2;let f,g,_,p,m,S,y,b,M=0;function T(){f={lane:1,x:d(1),tx:d(1)},g=[],_=3.2,p=0,m="play",S=0,y=0}T();function A(P){if(["ArrowLeft","ArrowRight","KeyA","KeyD","Space"].includes(P.code)&&P.preventDefault(),P.type==="keydown"){if(m!=="play"){(P.code==="Space"||P.code==="Enter")&&T();return}(P.code==="ArrowLeft"||P.code==="KeyA")&&f.lane>0&&(f.lane--,e.blip&&e.blip()),(P.code==="ArrowRight"||P.code==="KeyD")&&f.lane<a-1&&(f.lane++,e.blip&&e.blip()),f.tx=d(f.lane)}}window.addEventListener("keydown",A);const C=380-h-16;function D(){const P=Math.random()*a|0;if(g.some(I=>I.lane===P&&I.y<h*1.8))return;const L=["#4dd5fa","#8bff9e","#ff6b6b","#c084fc","#ffd24d"];g.push({lane:P,x:d(P),y:-h,col:L[Math.random()*L.length|0]})}function v(P,L,I,F){s.fillStyle=I,s.fillRect(P,L,u,h),s.fillStyle="rgba(0,0,0,.35)",s.fillRect(P+4,L+(F?h-16:6),u-8,10),s.fillStyle="#111",s.fillRect(P-3,L+6,3,10),s.fillRect(P+u,L+6,3,10),s.fillRect(P-3,L+h-16,3,10),s.fillRect(P+u,L+h-16,3,10)}function x(P){const L=M?Math.min((P-M)/16.6667,3):1;M=P,s.fillStyle="#0a0a10",s.fillRect(0,0,340,380),s.fillStyle="#0d160f",s.fillRect(0,0,o,380),s.fillRect(o+l,0,o,380),s.fillStyle="#15151c",s.fillRect(o,0,l,380),m==="play"&&(y=(y+_*L)%40),s.strokeStyle="#5a5a6e",s.lineWidth=3,s.setLineDash([20,20]),s.lineDashOffset=-y;for(let I=1;I<a;I++){const F=o+I*c;s.beginPath(),s.moveTo(F,0),s.lineTo(F,380),s.stroke()}s.setLineDash([]),s.strokeStyle="#fa4dd5",s.lineWidth=4,s.beginPath(),s.moveTo(o,0),s.lineTo(o,380),s.moveTo(o+l,0),s.lineTo(o+l,380),s.stroke(),m==="play"&&(_+=.0016*L,p+=_*L,S-=L,S<=0&&(D(),S=22+Math.random()*26-Math.min(12,p/600)),g.forEach(I=>I.y+=_*L),g=g.filter(I=>I.y<380+h),f.x+=(f.tx-f.x)*Math.min(1,.25*L),g.forEach(I=>{I.lane===f.lane&&I.y+h>C+6&&I.y<C+h-6&&(m="crash",e.staticBurst(.14))})),g.forEach(I=>v(I.x,I.y,I.col,!0)),v(f.x,C,"#fa4dd5",!1),s.fillStyle="#fff",s.font="bold 15px 'Courier New'",s.textAlign="left",s.fillText((p/10|0)+" m",10,22),s.textAlign="right",s.fillText((_*12|0)+" km/h",330,22),m==="crash"&&(s.fillStyle="rgba(5,6,10,.82)",s.fillRect(0,0,340,380),s.textAlign="center",s.fillStyle="#fa4dd5",s.font="bold 24px 'Courier New'",s.fillText("¡CHOCASTE!",340/2,380/2-8),s.fillStyle="#fff",s.font="14px 'Courier New'",s.fillText((p/10|0)+" m — espacio para reintentar",340/2,380/2+18)),b=requestAnimationFrame(x)}return b=requestAnimationFrame(x),()=>{cancelAnimationFrame(b),window.removeEventListener("keydown",A),n.innerHTML=""}}function K_(n,e){const r=document.createElement("canvas");r.className="game",n.appendChild(r);const s=r.getContext("2d");let a,o,l,c,u,h,d,f,g,_,p,m,S=!1;function y(P,L){const I=Array.from({length:L},()=>Array(P).fill(1)),F=[[1,1]];for(I[1][1]=0;F.length;){const[z,G]=F[F.length-1],V=[[2,0],[-2,0],[0,2],[0,-2]].filter(([pe,O])=>{const Y=z+pe,N=G+O;return Y>0&&Y<P-1&&N>0&&N<L-1&&I[N][Y]===1});if(!V.length){F.pop();continue}const[se,le]=V[Math.random()*V.length|0];I[G+le/2][z+se/2]=0,I[G+le][z+se]=0,F.push([z+se,G+le])}return I}function b(){a=11+h*2,o=11+h*2,a>25&&(a=25),o>25&&(o=25),a%2===0&&a++,o%2===0&&o++,l=y(a,o),c=1,u=1,d=0,S=!1,p=performance.now(),g=a*18+14*2,_=o*18+14*2+26,r.width=g,r.height=_}function M(){h=1,f="play",b()}M();const T=(P,L)=>P>=0&&P<a&&L>=0&&L<o&&l[L][P]===0;function A(P,L){f!=="play"&&f!=="win"||T(c+P,u+L)&&(c+=P,u+=L,d++,e.tick&&e.tick(),c===a-2&&u===o-2&&C())}function C(){f="win",S=!0,e.beep(880,.08),setTimeout(()=>e.beep(1200,.1),90)}function D(P){const L=P.code;if(["ArrowUp","ArrowDown","ArrowLeft","ArrowRight","KeyW","KeyA","KeyS","KeyD","Space"].includes(L)&&P.preventDefault(),f==="win"&&(L==="Space"||L==="Enter")){h++,f="play",b();return}L==="ArrowUp"||L==="KeyW"?A(0,-1):L==="ArrowDown"||L==="KeyS"?A(0,1):L==="ArrowLeft"||L==="KeyA"?A(-1,0):(L==="ArrowRight"||L==="KeyD")&&A(1,0)}window.addEventListener("keydown",D);function v(){s.fillStyle="#05060a",s.fillRect(0,0,g,_);const P=24;for(let I=0;I<o;I++)for(let F=0;F<a;F++)l[I][F]===1&&(s.fillStyle="#241033",s.fillRect(14+F*18,P+14+I*18,18,18),s.strokeStyle="#6e1a5c",s.strokeRect(14+F*18+.5,P+14+I*18+.5,17,17));s.fillStyle="#8bff9e",s.fillRect(14+(a-2)*18+3,P+14+(o-2)*18+3,12,12),s.font="12px serif",s.textAlign="center",s.textBaseline="middle",s.fillText("🏁",14+(a-2)*18+18/2,P+14+(o-2)*18+18/2+1),s.fillStyle="#fa4dd5",s.beginPath(),s.arc(14+c*18+18/2,P+14+u*18+18/2,18/2-3,0,7),s.fill(),s.textBaseline="alphabetic";const L=(performance.now()-p)/1e3;s.fillStyle="#fff",s.font="bold 13px 'Courier New'",s.textAlign="left",s.fillText("NIVEL "+h,10,17),s.textAlign="right",s.fillText(d+" pasos · "+L.toFixed(1)+"s",g-10,17),f==="win"&&(s.fillStyle="rgba(5,6,10,.8)",s.fillRect(0,0,g,_),s.textAlign="center",s.fillStyle="#8bff9e",s.font="bold 22px 'Courier New'",s.fillText("¡SALIDA! 🏁",g/2,_/2-6),s.fillStyle="#fff",s.font="13px 'Courier New'",s.fillText("espacio para el siguiente (más grande)",g/2,_/2+18))}function x(){v(),m=requestAnimationFrame(x)}return m=requestAnimationFrame(x),()=>{cancelAnimationFrame(m),window.removeEventListener("keydown",D),n.innerHTML=""}}function Y_(n,e){const r=document.createElement("canvas");r.className="game",r.width=460,r.height=340,n.appendChild(r);const s=r.getContext("2d"),a=9,o=5,l=40,c=16,u=6,h=46,d=(460-(a*(l+u)-u))/2,f=["#fa4dd5","#c084fc","#4dd5fa","#8bff9e","#ffd24d"];let g,_,p,m,S,y,b,M=0;const T={};function A(){const L=[];for(let I=0;I<o;I++)for(let F=0;F<a;F++)L.push({x:d+F*(l+u),y:h+I*(c+u),col:f[I],alive:!0});return L}function C(){_={x:460/2,y:280,vx:3*(Math.random()<.5?1:-1),vy:-3.4,r:6,stuck:!0}}function D(){g={x:460/2-38,y:316,w:76,h:10},p=A(),m=0,S=3,y="play",C()}D();function v(L){["ArrowLeft","ArrowRight","KeyA","KeyD","Space"].includes(L.code)&&L.preventDefault(),T[L.code]=L.type==="keydown",L.type==="keydown"&&L.code==="Space"&&(y!=="play"?D():_.stuck&&(_.stuck=!1))}window.addEventListener("keydown",v),window.addEventListener("keyup",v);function x(L){const I=r.getBoundingClientRect(),F=(L.clientX-I.left)*(460/I.width);g.x=Math.max(0,Math.min(460-g.w,F-g.w/2))}r.addEventListener("mousemove",x),r.addEventListener("click",()=>{_.stuck?_.stuck=!1:y!=="play"&&D()});function P(L){const I=M?Math.min((L-M)/16.6667,3):1;if(M=L,s.fillStyle="#05060a",s.fillRect(0,0,460,340),y==="play")if((T.ArrowLeft||T.KeyA)&&(g.x-=6*I),(T.ArrowRight||T.KeyD)&&(g.x+=6*I),g.x=Math.max(0,Math.min(460-g.w,g.x)),_.stuck)_.x=g.x+g.w/2,_.y=g.y-_.r-1;else{if(_.x+=_.vx*I,_.y+=_.vy*I,_.x-_.r<0&&(_.x=_.r,_.vx*=-1,e.tick&&e.tick()),_.x+_.r>460&&(_.x=460-_.r,_.vx*=-1,e.tick&&e.tick()),_.y-_.r<0&&(_.y=_.r,_.vy*=-1,e.tick&&e.tick()),_.vy>0&&_.y+_.r>=g.y&&_.y<g.y+g.h&&_.x>g.x&&_.x<g.x+g.w){_.y=g.y-_.r,_.vy*=-1;const F=(_.x-(g.x+g.w/2))/(g.w/2);_.vx=F*4.4,e.beep(600,.03);const z=Math.min(7.5,Math.hypot(_.vx,_.vy)+.12),G=Math.atan2(_.vy,_.vx);_.vx=Math.cos(G)*z,_.vy=Math.sin(G)*z}_.y-_.r>340&&(S--,e.staticBurst(.1),S<=0?y="lose":C());for(const F of p)if(F.alive&&_.x+_.r>F.x&&_.x-_.r<F.x+l&&_.y+_.r>F.y&&_.y-_.r<F.y+c){F.alive=!1,m+=10,e.beep(880,.03);const z=F.x+l/2,G=F.y+c/2;Math.abs(_.x-z)/l>Math.abs(_.y-G)/c?_.vx*=-1:_.vy*=-1;break}p.every(F=>!F.alive)&&(y="win")}p.forEach(F=>{F.alive&&(s.fillStyle=F.col,s.fillRect(F.x,F.y,l,c),s.fillStyle="rgba(255,255,255,.15)",s.fillRect(F.x,F.y,l,3))}),s.fillStyle="#fff",s.fillRect(g.x,g.y,g.w,g.h),s.fillStyle="#ffd24d",s.beginPath(),s.arc(_.x,_.y,_.r,0,7),s.fill(),s.fillStyle="#fff",s.font="bold 14px 'Courier New'",s.textAlign="left",s.fillText("PTS "+m,10,22),s.textAlign="right",s.fillStyle="#fa4dd5",s.fillText("♥".repeat(Math.max(0,S)),450,22),_.stuck&&y==="play"&&(s.fillStyle="#9aa",s.font="13px 'Courier New'",s.textAlign="center",s.fillText("ESPACIO / CLIC para lanzar",460/2,296)),y!=="play"&&(s.fillStyle="rgba(5,6,10,.8)",s.fillRect(0,0,460,340),s.textAlign="center",s.fillStyle=y==="win"?"#8bff9e":"#fa4dd5",s.font="bold 24px 'Courier New'",s.fillText(y==="win"?"¡GANASTE!":"GAME OVER",460/2,340/2-8),s.fillStyle="#fff",s.font="14px 'Courier New'",s.fillText("puntos: "+m+" — espacio para jugar otra vez",460/2,340/2+18)),b=requestAnimationFrame(P)}return b=requestAnimationFrame(P),()=>{cancelAnimationFrame(b),window.removeEventListener("keydown",v),window.removeEventListener("keyup",v),n.innerHTML=""}}const Wo="ABEJA ABRIR ACERO ACTOR AGUJA AHORA AJENO ALBUM ALDEA ALTAR AMIGO ANCHO ANDAR ANGEL ANTES APOYO ARENA ARROZ ASADO ATLAS AUTOR AYUDA BAILE BAJAR BALON BANCO BARBA BARCO BARRO BELLO BESOS BICHO BINGO BLUSA BOINA BOLAS BOLSA BOMBA BORDE BOTAS BRAVO BREVE BRISA BROMA BROTE BRUJA BUENO BURRO BUSCA CABRA CABLE CABOS CACAO CALOR CALMA CALVO CAMAS CAMPO CANAL CANOA CANTO CAPAZ CARRO CARTA CASAS CASCO CASPA CATAR CAUCE CAZAR CEBRA CEDRO CEJAS CELDA CELOS CENAS CERCA CERDO CERRO CESTA CHICO CHILE CHINA CHINO CHOZA CIELO CIFRA CINCO CINTA CIRCO CITAR CLASE CLAVO CLIMA COBRA COBRE COCER CODOS COFRE COJIN COLAS COLMO COLOR COMER COMIC CONDE COPAS COPIA CORAL CORTE COSAS COSTA COSER COSTE CREER CREMA CROMO CRUCE CRUDO CRUEL CUERO CUEVA CULPA CURAR CURSO CURVA DADOS DAMAS DARDO DATOS DEDOS DEJAR DELTA DENSO ENERO ENOJO ERROR ERIZO ETAPA EXTRA FALDA FALLO FALSO FAROL FASES FATAL FAVOR FECHA FELIZ FERIA FICHA FIDEO FIERA FIERO FIJAR FILAS FILME FINAL FINCA FIRMA FISCO FLACO FLETE FLOJA FLOJO FLORA FLUJO FOCAS FOLIO FONDO FORMA FORRO FOTOS FRASE FRENO FRESA FRITO FRUTA FUEGO FUERA FUERO FUGAS FUMAR FUNDA FURIA FUSIL GAFAS GAJOS GALLO GAMBA GANAR GANSO GARRA GASTO GATOS GEMIR GENIO GENTE GESTO GIRAR GLOBO GOLFO GOLPE GOMAS GORDO GORRA GORRO GOTAS GOZAR GRADA GRADO GRAMA GRANO GRASA GRAVE GRIFO GRIPE GRITO GRUPO GUAPO GUISO GUSTO HABER HABLA HACER HACIA HADAS HALAR HAMPA HARTO HASTA HEBRA HECHO HELAR HERIR HIELO HIGOS HIJAS HIJOS HILAR HILOS HIMNO HOGAR HOJAS HONDO HONOR HONRA HORAS HORNO HOYOS HUECO HUESO HUEVO HUMOR HUMOS HURTO IDEAL IDEAR IGUAL IMPAR INDIO INGLE ISLAS JABON JAMAS JAMON JARRA JAULA JEFES JOYAS JOVEN JUEGO JUGAR JUGOS JUNIO JUNTA JUNTO JURAR JUSTO KILOS LABIO LABOR LADOS LAGOS LAMER LANAS LANZA LAPIZ LARGO LATAS LATIR LATON LAVAR LECHO LECHE LEGAL LEJOS LEMAS LENTA LENTO LEONA LETRA LEYES LIBRA LIBRE LIBRO LICOR LIGAR LIGAS LIMAR LIMON LINDA LINDO LINEA LIRIO LISTA LISTO LITRO LLAMA LLANO LLAVE LLEGA LLENO LLORA LOBOS LOCAL LOCOS LOGRO LOMAS LOMOS LONJA LOROS LOSAS LOTES LUCHA LUEGO LUGAR LUJOS LUNAR LUNES LUPAS MACHO MADRE MAGIA MAGOS MALAS MALOS MAMAS MANDO MANGA MANGO MANOS MANTA MAPAS MARCA MARCO MARES MARZO MASAS MATES MATAR MAYOR MAZAS MECHA MEDIA MEDIO MEDIR MEJOR MELON MENOR MENOS MENTA MENTE MESAS METAL METER METRO MIEDO MIMOS MINAS MIRAR MISAS MISIL MISMO MITAD MITOS MOCOS MODAS MODOS MOJAR MOLDE MOLER MONJA MONJE MONOS MONTO MORAL MORIR MOROS MOSCA MOTEL MOTOR MOTOS MOVER MOVIL MOZOS MUCHO MUELA MUJER MULAS MULTA MUNDO MUROS MUSEO MUSGO NABOS NACER NADAR NADIE NAIPE NARIZ NATAS NAVES NECIO NEGAR NEGRO NEVAR NIDOS NIETA NIETO NIEVE NIVEL NOBLE NOCHE NOPAL NORIA NORMA NORTE NOTAR NOTAS NOVIA NOVIO NUBES NUDOS NUERA NUEVA NUEVO OBRAS OBVIO OCASO OESTE OIDOS OJERA OLIVO OLLAS OLMOS ONDAS OPACO OPERA ORDEN OREJA ORINA ORLAS OSADO OSTRA OTROS OVEJA PACTO PADRE PAGAR PAGOS PAJAR PAJAS PALAS PALCO PALMA PALMO PALOS PANAL PANDA PANES PAPAS PAPEL PARAR PARDO PARED PARES PARIR PARRA PARTE PASAR PASAS PASEO PASOS PASTA PASTO PATAS PATIO PATOS PAUSA PAVOS PECES PECHO PEDAL PEDIR PEGAR PEINE PELAR PELOS PENAL PENAS PERAS PEROS PERRO PESAR PESAS PESCA PESOS PEZON PICAR PICOS PIEZA PILAR PILAS PILLO PINOS PINTA PINZA PIPAS PIQUE PISAR PISOS PISTA PIZZA PLACA PLAGA PLANO PLATA PLATO PLAYA PLAZA PLAZO PLENO PLOMO PLUMA POBRE POCOS PODAR PODER POEMA POETA POLAR POLEA POLEN POLLO POLOS POLVO POMOS PONER POPAS PORTE POSAR POSTA POTRO POZOS PRADO PRESA PRESO PRIMO PRIMA PRISA PROSA PUBIS PUEDE PUJAR PULGA PULIR PULPO PULSO PUNTA PUNTO PUPAS PURGA QUEJA QUEMA QUIEN QUISO QUITA RABIA RABOS RACHA RADAR RADIO RAJAR RAMAS RAMOS RAMPA RANAS RANGO RAPAR RAPAZ RARAS RAROS RASGO RATAS RATOS RAYAS RAYOS RAZAS RAZON RECTO REDES REGAR REGLA REINA REINO REJAS RELOJ REMAR REMOS RENTA RESES RESTO RETAR RETOS REYES REZAR RICOS RIEGO RIGOR RIMAS RISAS RITMO RITOS RIVAL RIZOS ROBAR ROBOS ROBOT ROCAS RODAR RODEO ROJAS ROJOS ROLLO ROMBO ROMPE RONDA ROPAS ROSAL ROSAS ROSCA ROTAR ROTOS RUBIA RUBIO RUDOS RUEDA RUEGO RUGIR RUIDO RUINA RULOS RUMBO RUMOR RURAL SABER SABIO SABOR SACAR SACOS SAGAZ SALAS SALIR SALON SALSA SALTO SALUD SALVO SANAR SANAS SANOS SANTO SAPOS SAUCE SECAR SECOS SEDAS SEGAR SELVA SELLO SENDA SENOS SEPIA SERES SERIO SESOS SETAS SEXOS SIDRA SIEGA SIENA SIETE SIGNO SILBA SILLA SILOS SIMIO SISMO SITIO SOBAR SOBRA SOBRE SOCIO SOLAR SOLAS SONAR SONDA SOPAS SOPLO SORDO SUAVE SUBIR SUCIO SUDAR SUELA SUELO SUERO SUMAR SUMAS SUMOS SUPER SURCO SUSTO SUTIL TABLA TACOS TACTO TAJOS TALAR TALCO TALLO TALON TANDA TANGO TAPAS TAPIZ TAPON TARDE TAREA TAROT TARTA TASAS TAZAS TECHO TEJAS TEJER TELAR TELAS TEMAS TEMER TEMOR TENAZ TENER TENIS TENOR TENSA TENSO TERCO TESIS TEXTO TIARA TIBIA TIBIO TIGRE TIMON TINTA TINTE TIPOS TIRAS TIROS TITAN TIZAS TOCAR TODOS TOMAR TOMAS TONOS TONTO TOPAR TOPOS TORAX TORRE TORSO TORTA TOSCO TOTAL TRAER TRAJE TRAMA TRAPO TRATO TRAZO TRECE TRIBU TRIGO TRINO TRIPA TRONO TROPA TROZO TRUCO TUBOS TUMBA TUNEL TUNAS TURBA TURCO TURNO TUTOR UNION UNTAR UNICO USADO USUAL VACAS VACIO VAGAR VAGOS VAHOS VAINA VALES VALLA VALLE VALOR VAPOR VARAS VARON VASOS VELAS VELOS VELOZ VENAS VENIR VENTA VERAS VERBO VERDE VERJA VERSO VETAR VETAS VIBRA VICIO VIDAS VIDEO VIEJA VIEJO VIGAS VIGOR VILLA VINOS VIOLA VIRAR VIRUS VISAS VISOR VISTA VIUDA VIUDO VIVAS VIVIR VIVOS VOCAL VOLAR VOTAR VOTOS VOCES YEGUA YERBA YERNO YESOS YOGUR ZANJA ZARPA ZONAS ZORRO ZUMBA ZUMOS ZURDO".split(/\s+/).filter(n=>n.length===5);new Set(Wo);const Ac=6,Sn=5,J_=["QWERTYUIOP","ASDFGHJKLÑ","↵ZXCVBNM⌫"];function Z_(n,e){let t,i,r,s,a;const o={};n.innerHTML=`
    <div class="wordle">
      <div class="wd-grid" id="wdGrid"></div>
      <div class="wd-msg" id="wdMsg">Adivina la palabra de 5 letras</div>
      <div class="wd-kb" id="wdKb"></div>
    </div>`;const l=n.querySelector("#wdGrid"),c=n.querySelector("#wdMsg"),u=n.querySelector("#wdKb");for(let S=0;S<Ac;S++){const y=document.createElement("div");y.className="wd-row";for(let b=0;b<Sn;b++){const M=document.createElement("div");M.className="wd-tile",y.appendChild(M)}l.appendChild(y)}J_.forEach(S=>{const y=document.createElement("div");y.className="wd-kbrow",[...S].forEach(b=>{const M=document.createElement("button");M.className="wd-key"+(b==="↵"||b==="⌫"?" wide":""),M.textContent=b,M.dataset.k=b,M.onclick=()=>p(b==="↵"?"Enter":b==="⌫"?"Backspace":b),y.appendChild(M)}),u.appendChild(y)});function h(){t=Wo[Math.random()*Wo.length|0],i="",r=0,s=!1;for(const S in o)delete o[S];[...l.querySelectorAll(".wd-tile")].forEach(S=>{S.textContent="",S.className="wd-tile"}),u.querySelectorAll(".wd-key").forEach(S=>S.className="wd-key"+(S.dataset.k==="↵"||S.dataset.k==="⌫"?" wide":"")),d("Adivina la palabra de 5 letras")}function d(S,y){c.textContent=S,clearTimeout(a),y&&(c.classList.add("flash"),a=setTimeout(()=>c.classList.remove("flash"),600))}function f(){const S=l.children[r].children;for(let y=0;y<Sn;y++)S[y].textContent=i[y]||"",S[y].classList.toggle("filled",!!i[y])}function g(S){const y=Array(Sn).fill("absent"),b={};for(const M of t)b[M]=(b[M]||0)+1;for(let M=0;M<Sn;M++)S[M]===t[M]&&(y[M]="correct",b[S[M]]--);for(let M=0;M<Sn;M++)y[M]!=="correct"&&b[S[M]]>0&&(y[M]="present",b[S[M]]--);return y}function _(){if(i.length<Sn){d("Faltan letras",!0),e.beep(220,.05);return}const S=g(i),y=l.children[r].children;for(let M=0;M<Sn;M++){const T=y[M],A=i[M];setTimeout(()=>{T.className="wd-tile filled reveal "+S[M],e.beep(S[M]==="correct"?720:S[M]==="present"?520:320,.03);const C=o[A];if(S[M]==="correct"||S[M]==="present"&&C!=="correct"||S[M]==="absent"&&!C){o[A]=S[M];const D=u.querySelector(`[data-k="${A}"]`);D&&(D.className="wd-key "+S[M])}},M*260)}const b=S.every(M=>M==="correct");i="",r++,setTimeout(()=>{b?(s=!0,d("¡GANASTE! 🎉 (Enter = otra)",!0),e.enterSfx()):r>=Ac&&(s=!0,d("Era: "+t+" · Enter = otra",!0),e.staticBurst(.1))},Sn*260)}function p(S){if(s){S==="Enter"&&h();return}if(S==="Enter"){_();return}if(S==="Backspace"){i=i.slice(0,-1),f();return}if(i.length>=Sn)return;const y=S.toUpperCase();/^[A-ZÑ]$/.test(y)&&(i+=y,f(),e.tick&&e.tick())}function m(S){S.key==="Enter"?(S.preventDefault(),p("Enter")):S.key==="Backspace"?(S.preventDefault(),p("Backspace")):S.key.length===1&&p(S.key)}return window.addEventListener("keydown",m),h(),()=>{window.removeEventListener("keydown",m),clearTimeout(a),n.innerHTML=""}}function ia(n,e){var t={};for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&e.indexOf(i)<0&&(t[i]=n[i]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,i=Object.getOwnPropertySymbols(n);r<i.length;r++)e.indexOf(i[r])<0&&Object.prototype.propertyIsEnumerable.call(n,i[r])&&(t[i[r]]=n[i[r]]);return t}function Q_(n,e,t,i){function r(s){return s instanceof t?s:new t(function(a){a(s)})}return new(t||(t=Promise))(function(s,a){function o(u){try{c(i.next(u))}catch(h){a(h)}}function l(u){try{c(i.throw(u))}catch(h){a(h)}}function c(u){u.done?s(u.value):r(u.value).then(o,l)}c((i=i.apply(n,e||[])).next())})}const ev=n=>n?(...e)=>n(...e):(...e)=>fetch(...e);class ml extends Error{constructor(e,t="FunctionsError",i){super(e),this.name=t,this.context=i}toJSON(){return{name:this.name,message:this.message,context:this.context}}}class tv extends ml{constructor(e){super("Failed to send a request to the Edge Function","FunctionsFetchError",e)}}class Tc extends ml{constructor(e){super("Relay Error invoking the Edge Function","FunctionsRelayError",e)}}class Mc extends ml{constructor(e){super("Edge Function returned a non-2xx status code","FunctionsHttpError",e)}}var $o;(function(n){n.Any="any",n.ApNortheast1="ap-northeast-1",n.ApNortheast2="ap-northeast-2",n.ApSouth1="ap-south-1",n.ApSoutheast1="ap-southeast-1",n.ApSoutheast2="ap-southeast-2",n.CaCentral1="ca-central-1",n.EuCentral1="eu-central-1",n.EuWest1="eu-west-1",n.EuWest2="eu-west-2",n.EuWest3="eu-west-3",n.SaEast1="sa-east-1",n.UsEast1="us-east-1",n.UsWest1="us-west-1",n.UsWest2="us-west-2"})($o||($o={}));class nv{constructor(e,{headers:t={},customFetch:i,region:r=$o.Any}={}){this.url=e,this.headers=t,this.region=r,this.fetch=ev(i)}setAuth(e){this.headers.Authorization=`Bearer ${e}`}invoke(e){return Q_(this,arguments,void 0,function*(t,i={}){var r;let s,a;try{const{headers:o,method:l,body:c,signal:u,timeout:h}=i;let d={},{region:f}=i;f||(f=this.region);const g=new URL(`${this.url}/${t}`);f&&f!=="any"&&(d["x-region"]=f,g.searchParams.set("forceFunctionRegion",f));let _;const p=!!o&&Object.keys(o).some(T=>T.toLowerCase()==="content-type");c&&!p?typeof Blob<"u"&&c instanceof Blob||c instanceof ArrayBuffer?(d["Content-Type"]="application/octet-stream",_=c):typeof c=="string"?(d["Content-Type"]="text/plain",_=c):typeof FormData<"u"&&c instanceof FormData?_=c:(d["Content-Type"]="application/json",_=JSON.stringify(c)):c&&typeof c!="string"&&!(typeof Blob<"u"&&c instanceof Blob)&&!(c instanceof ArrayBuffer)&&!(typeof FormData<"u"&&c instanceof FormData)?_=JSON.stringify(c):_=c;let m=u;h&&(a=new AbortController,s=setTimeout(()=>a.abort(),h),u?(m=a.signal,u.addEventListener("abort",()=>a.abort())):m=a.signal);const S=yield this.fetch(g.toString(),{method:l||"POST",headers:Object.assign(Object.assign(Object.assign({},d),this.headers),o),body:_,signal:m}).catch(T=>{throw new tv(T)}),y=S.headers.get("x-relay-error");if(y&&y==="true")throw new Tc(S);if(!S.ok)throw new Mc(S);let b=((r=S.headers.get("Content-Type"))!==null&&r!==void 0?r:"text/plain").split(";")[0].trim(),M;return b==="application/json"?M=yield S.json():b==="application/octet-stream"||b==="application/pdf"?M=yield S.blob():b==="text/event-stream"?M=S:b==="multipart/form-data"?M=yield S.formData():M=yield S.text(),{data:M,error:null,response:S}}catch(o){return{data:null,error:o,response:o instanceof Mc||o instanceof Tc?o.context:void 0}}finally{s&&clearTimeout(s)}})}}const Qu=3,Rc=n=>Math.min(1e3*2**n,3e4),iv=[520,503],eh=["GET","HEAD","OPTIONS"];var Cc=class extends Error{constructor(n){super(n.message),this.name="PostgrestError",this.details=n.details,this.hint=n.hint,this.code=n.code}toJSON(){return{name:this.name,message:this.message,details:this.details,hint:this.hint,code:this.code}}};function Pc(n,e){return new Promise(t=>{if(e!=null&&e.aborted){t();return}const i=setTimeout(()=>{e==null||e.removeEventListener("abort",r),t()},n);function r(){clearTimeout(i),t()}e==null||e.addEventListener("abort",r)})}function rv(n,e,t,i){return!(!i||t>=Qu||!eh.includes(n)||!iv.includes(e))}var sv=class{constructor(n){var e,t,i,r,s;this.shouldThrowOnError=!1,this.retryEnabled=!0,this.method=n.method,this.url=n.url,this.headers=new Headers(n.headers),this.schema=n.schema,this.body=n.body,this.shouldThrowOnError=(e=n.shouldThrowOnError)!==null&&e!==void 0?e:!1,this.signal=n.signal,this.isMaybeSingle=(t=n.isMaybeSingle)!==null&&t!==void 0?t:!1,this.shouldStripNulls=(i=n.shouldStripNulls)!==null&&i!==void 0?i:!1,this.urlLengthLimit=(r=n.urlLengthLimit)!==null&&r!==void 0?r:8e3,this.retryEnabled=(s=n.retry)!==null&&s!==void 0?s:!0,n.fetch?this.fetch=n.fetch:this.fetch=fetch}throwOnError(){return this.shouldThrowOnError=!0,this}stripNulls(){if(this.headers.get("Accept")==="text/csv")throw new Error("stripNulls() cannot be used with csv()");return this.shouldStripNulls=!0,this}setHeader(n,e){return this.headers=new Headers(this.headers),this.headers.set(n,e),this}retry(n){return this.retryEnabled=n,this}then(n,e){var t=this;if(this.schema===void 0||(["GET","HEAD"].includes(this.method)?this.headers.set("Accept-Profile",this.schema):this.headers.set("Content-Profile",this.schema)),this.method!=="GET"&&this.method!=="HEAD"&&this.headers.set("Content-Type","application/json"),this.shouldStripNulls){const a=this.headers.get("Accept");a==="application/vnd.pgrst.object+json"?this.headers.set("Accept","application/vnd.pgrst.object+json;nulls=stripped"):(!a||a==="application/json")&&this.headers.set("Accept","application/vnd.pgrst.array+json;nulls=stripped")}const i=this.fetch;let s=(async()=>{let a=0;for(;;){const c={};t.headers.forEach((h,d)=>{c[d]=h}),a>0&&(c["X-Retry-Count"]=String(a));let u;try{u=await i(t.url.toString(),{method:t.method,headers:c,body:JSON.stringify(t.body,(h,d)=>typeof d=="bigint"?d.toString():d),signal:t.signal})}catch(h){if((h==null?void 0:h.name)==="AbortError"||(h==null?void 0:h.code)==="ABORT_ERR"||!eh.includes(t.method))throw h;if(t.retryEnabled&&a<Qu){const d=Rc(a);a++,await Pc(d,t.signal);continue}throw h}if(rv(t.method,u.status,a,t.retryEnabled)){var o,l;const h=(o=(l=u.headers)===null||l===void 0?void 0:l.get("Retry-After"))!==null&&o!==void 0?o:null,d=h!==null?Math.max(0,parseInt(h,10)||0)*1e3:Rc(a);await u.text(),a++,await Pc(d,t.signal);continue}return await t.processResponse(u)}})();return this.shouldThrowOnError||(s=s.catch(a=>{var o;let l="",c="",u="";const h=a==null?void 0:a.cause;if(h){var d,f,g,_;const S=(d=h==null?void 0:h.message)!==null&&d!==void 0?d:"",y=(f=h==null?void 0:h.code)!==null&&f!==void 0?f:"";l=`${(g=a==null?void 0:a.name)!==null&&g!==void 0?g:"FetchError"}: ${a==null?void 0:a.message}`,l+=`

Caused by: ${(_=h==null?void 0:h.name)!==null&&_!==void 0?_:"Error"}: ${S}`,y&&(l+=` (${y})`),h!=null&&h.stack&&(l+=`
${h.stack}`)}else{var p;l=(p=a==null?void 0:a.stack)!==null&&p!==void 0?p:""}const m=this.url.toString().length;return(a==null?void 0:a.name)==="AbortError"||(a==null?void 0:a.code)==="ABORT_ERR"?(u="",c="Request was aborted (timeout or manual cancellation)",m>this.urlLengthLimit&&(c+=`. Note: Your request URL is ${m} characters, which may exceed server limits. If selecting many fields, consider using views. If filtering with large arrays (e.g., .in('id', [many IDs])), consider using an RPC function to pass values server-side.`)):((h==null?void 0:h.name)==="HeadersOverflowError"||(h==null?void 0:h.code)==="UND_ERR_HEADERS_OVERFLOW")&&(u="",c="HTTP headers exceeded server limits (typically 16KB)",m>this.urlLengthLimit&&(c+=`. Your request URL is ${m} characters. If selecting many fields, consider using views. If filtering with large arrays (e.g., .in('id', [200+ IDs])), consider using an RPC function instead.`)),{success:!1,error:{message:`${(o=a==null?void 0:a.name)!==null&&o!==void 0?o:"FetchError"}: ${a==null?void 0:a.message}`,details:l,hint:c,code:u},data:null,count:null,status:0,statusText:""}})),s.then(n,e)}async processResponse(n){var e=this;let t=null,i=null,r=null,s=n.status,a=n.statusText;if(n.ok){var o,l;if(e.method!=="HEAD"){var c;const d=await n.text();if(d!=="")if(e.headers.get("Accept")==="text/csv")i=d;else if(e.headers.get("Accept")&&(!((c=e.headers.get("Accept"))===null||c===void 0)&&c.includes("application/vnd.pgrst.plan+text")))i=d;else try{i=JSON.parse(d)}catch{if(t={message:d},i=null,e.shouldThrowOnError)throw new Cc({message:d,details:"",hint:"",code:""})}}const u=(o=e.headers.get("Prefer"))===null||o===void 0?void 0:o.match(/count=(exact|planned|estimated)/),h=(l=n.headers.get("content-range"))===null||l===void 0?void 0:l.split("/");u&&h&&h.length>1&&(r=parseInt(h[1])),e.isMaybeSingle&&Array.isArray(i)&&(i.length>1?(t={code:"PGRST116",details:`Results contain ${i.length} rows, application/vnd.pgrst.object+json requires 1 row`,hint:null,message:"JSON object requested, multiple (or no) rows returned"},i=null,r=null,s=406,a="Not Acceptable"):i.length===1?i=i[0]:i=null)}else{const u=await n.text();try{t=JSON.parse(u),Array.isArray(t)&&n.status===404&&(i=[],t=null,s=200,a="OK")}catch{n.status===404&&u===""?(s=204,a="No Content"):t={message:u}}if(t&&e.shouldThrowOnError)throw new Cc(t)}return{success:t===null,error:t,data:i,count:r,status:s,statusText:a}}returns(){return this}overrideTypes(){return this}},av=class extends sv{throwOnError(){return super.throwOnError()}select(n){let e=!1;const t=(n??"*").split("").map(i=>/\s/.test(i)&&!e?"":(i==='"'&&(e=!e),i)).join("");return this.url.searchParams.set("select",t),this.headers.append("Prefer","return=representation"),this}order(n,{ascending:e=!0,nullsFirst:t,foreignTable:i,referencedTable:r=i}={}){const s=r?`${r}.order`:"order",a=this.url.searchParams.get(s);return this.url.searchParams.set(s,`${a?`${a},`:""}${n}.${e?"asc":"desc"}${t===void 0?"":t?".nullsfirst":".nullslast"}`),this}limit(n,{foreignTable:e,referencedTable:t=e}={}){const i=typeof t>"u"?"limit":`${t}.limit`;return this.url.searchParams.set(i,`${n}`),this}range(n,e,{foreignTable:t,referencedTable:i=t}={}){const r=typeof i>"u"?"offset":`${i}.offset`,s=typeof i>"u"?"limit":`${i}.limit`;return this.url.searchParams.set(r,`${n}`),this.url.searchParams.set(s,`${e-n+1}`),this}abortSignal(n){return this.signal=n,this}single(){return this.headers.set("Accept","application/vnd.pgrst.object+json"),this}maybeSingle(){return this.isMaybeSingle=!0,this}csv(){return this.headers.set("Accept","text/csv"),this}geojson(){return this.headers.set("Accept","application/geo+json"),this}explain({analyze:n=!1,verbose:e=!1,settings:t=!1,buffers:i=!1,wal:r=!1,format:s="text"}={}){var a;const o=[n?"analyze":null,e?"verbose":null,t?"settings":null,i?"buffers":null,r?"wal":null].filter(Boolean).join("|"),l=(a=this.headers.get("Accept"))!==null&&a!==void 0?a:"application/json";return this.headers.set("Accept",`application/vnd.pgrst.plan+${s}; for="${l}"; options=${o};`),s==="json"?this:this}rollback(){return this.headers.append("Prefer","tx=rollback"),this}returns(){return this}maxAffected(n){return this.headers.append("Prefer","handling=strict"),this.headers.append("Prefer",`max-affected=${n}`),this}};const Lc=new RegExp("[,()]");var Hi=class extends av{throwOnError(){return super.throwOnError()}eq(n,e){return this.url.searchParams.append(n,`eq.${e}`),this}neq(n,e){return this.url.searchParams.append(n,`neq.${e}`),this}gt(n,e){return this.url.searchParams.append(n,`gt.${e}`),this}gte(n,e){return this.url.searchParams.append(n,`gte.${e}`),this}lt(n,e){return this.url.searchParams.append(n,`lt.${e}`),this}lte(n,e){return this.url.searchParams.append(n,`lte.${e}`),this}like(n,e){return this.url.searchParams.append(n,`like.${e}`),this}likeAllOf(n,e){return this.url.searchParams.append(n,`like(all).{${e.join(",")}}`),this}likeAnyOf(n,e){return this.url.searchParams.append(n,`like(any).{${e.join(",")}}`),this}ilike(n,e){return this.url.searchParams.append(n,`ilike.${e}`),this}ilikeAllOf(n,e){return this.url.searchParams.append(n,`ilike(all).{${e.join(",")}}`),this}ilikeAnyOf(n,e){return this.url.searchParams.append(n,`ilike(any).{${e.join(",")}}`),this}regexMatch(n,e){return this.url.searchParams.append(n,`match.${e}`),this}regexIMatch(n,e){return this.url.searchParams.append(n,`imatch.${e}`),this}is(n,e){return this.url.searchParams.append(n,`is.${e}`),this}isDistinct(n,e){return this.url.searchParams.append(n,`isdistinct.${e}`),this}in(n,e){const t=Array.from(new Set(e)).map(i=>typeof i=="string"&&Lc.test(i)?`"${i}"`:`${i}`).join(",");return this.url.searchParams.append(n,`in.(${t})`),this}notIn(n,e){const t=Array.from(new Set(e)).map(i=>typeof i=="string"&&Lc.test(i)?`"${i}"`:`${i}`).join(",");return this.url.searchParams.append(n,`not.in.(${t})`),this}contains(n,e){return typeof e=="string"?this.url.searchParams.append(n,`cs.${e}`):Array.isArray(e)?this.url.searchParams.append(n,`cs.{${e.join(",")}}`):this.url.searchParams.append(n,`cs.${JSON.stringify(e)}`),this}containedBy(n,e){return typeof e=="string"?this.url.searchParams.append(n,`cd.${e}`):Array.isArray(e)?this.url.searchParams.append(n,`cd.{${e.join(",")}}`):this.url.searchParams.append(n,`cd.${JSON.stringify(e)}`),this}rangeGt(n,e){return this.url.searchParams.append(n,`sr.${e}`),this}rangeGte(n,e){return this.url.searchParams.append(n,`nxl.${e}`),this}rangeLt(n,e){return this.url.searchParams.append(n,`sl.${e}`),this}rangeLte(n,e){return this.url.searchParams.append(n,`nxr.${e}`),this}rangeAdjacent(n,e){return this.url.searchParams.append(n,`adj.${e}`),this}overlaps(n,e){return typeof e=="string"?this.url.searchParams.append(n,`ov.${e}`):this.url.searchParams.append(n,`ov.{${e.join(",")}}`),this}textSearch(n,e,{config:t,type:i}={}){let r="";i==="plain"?r="pl":i==="phrase"?r="ph":i==="websearch"&&(r="w");const s=t===void 0?"":`(${t})`;return this.url.searchParams.append(n,`${r}fts${s}.${e}`),this}match(n){return Object.entries(n).filter(([e,t])=>t!==void 0).forEach(([e,t])=>{this.url.searchParams.append(e,`eq.${t}`)}),this}not(n,e,t){return this.url.searchParams.append(n,`not.${e}.${t}`),this}or(n,{foreignTable:e,referencedTable:t=e}={}){const i=t?`${t}.or`:"or";return this.url.searchParams.append(i,`(${n})`),this}filter(n,e,t){return this.url.searchParams.append(n,`${e}.${t}`),this}},ov=class{constructor(n,{headers:e={},schema:t,fetch:i,urlLengthLimit:r=8e3,retry:s}){this.url=n,this.headers=new Headers(e),this.schema=t,this.fetch=i,this.urlLengthLimit=r,this.retry=s}cloneRequestState(){return{url:new URL(this.url.toString()),headers:new Headers(this.headers)}}select(n,e){const{head:t=!1,count:i}=e??{},r=t?"HEAD":"GET";let s=!1;const a=(n??"*").split("").map(c=>/\s/.test(c)&&!s?"":(c==='"'&&(s=!s),c)).join(""),{url:o,headers:l}=this.cloneRequestState();return o.searchParams.set("select",a),i&&l.append("Prefer",`count=${i}`),new Hi({method:r,url:o,headers:l,schema:this.schema,fetch:this.fetch,urlLengthLimit:this.urlLengthLimit,retry:this.retry})}insert(n,{count:e,defaultToNull:t=!0}={}){var i;const r="POST",{url:s,headers:a}=this.cloneRequestState();if(e&&a.append("Prefer",`count=${e}`),t||a.append("Prefer","missing=default"),Array.isArray(n)){const o=n.reduce((l,c)=>l.concat(Object.keys(c)),[]);if(o.length>0){const l=[...new Set(o)].map(c=>`"${c}"`);s.searchParams.set("columns",l.join(","))}}return new Hi({method:r,url:s,headers:a,schema:this.schema,body:n,fetch:(i=this.fetch)!==null&&i!==void 0?i:fetch,urlLengthLimit:this.urlLengthLimit,retry:this.retry})}upsert(n,{onConflict:e,ignoreDuplicates:t=!1,count:i,defaultToNull:r=!0}={}){var s;const a="POST",{url:o,headers:l}=this.cloneRequestState();if(l.append("Prefer",`resolution=${t?"ignore":"merge"}-duplicates`),e!==void 0&&o.searchParams.set("on_conflict",e),i&&l.append("Prefer",`count=${i}`),r||l.append("Prefer","missing=default"),Array.isArray(n)){const c=n.reduce((u,h)=>u.concat(Object.keys(h)),[]);if(c.length>0){const u=[...new Set(c)].map(h=>`"${h}"`);o.searchParams.set("columns",u.join(","))}}return new Hi({method:a,url:o,headers:l,schema:this.schema,body:n,fetch:(s=this.fetch)!==null&&s!==void 0?s:fetch,urlLengthLimit:this.urlLengthLimit,retry:this.retry})}update(n,{count:e}={}){var t;const i="PATCH",{url:r,headers:s}=this.cloneRequestState();return e&&s.append("Prefer",`count=${e}`),new Hi({method:i,url:r,headers:s,schema:this.schema,body:n,fetch:(t=this.fetch)!==null&&t!==void 0?t:fetch,urlLengthLimit:this.urlLengthLimit,retry:this.retry})}delete({count:n}={}){var e;const t="DELETE",{url:i,headers:r}=this.cloneRequestState();return n&&r.append("Prefer",`count=${n}`),new Hi({method:t,url:i,headers:r,schema:this.schema,fetch:(e=this.fetch)!==null&&e!==void 0?e:fetch,urlLengthLimit:this.urlLengthLimit,retry:this.retry})}};function Cr(n){"@babel/helpers - typeof";return Cr=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Cr(n)}function lv(n,e){if(Cr(n)!="object"||!n)return n;var t=n[Symbol.toPrimitive];if(t!==void 0){var i=t.call(n,e);if(Cr(i)!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(n)}function cv(n){var e=lv(n,"string");return Cr(e)=="symbol"?e:e+""}function uv(n,e,t){return(e=cv(e))in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function Oc(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);e&&(i=i.filter(function(r){return Object.getOwnPropertyDescriptor(n,r).enumerable})),t.push.apply(t,i)}return t}function xs(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?Oc(Object(t),!0).forEach(function(i){uv(n,i,t[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):Oc(Object(t)).forEach(function(i){Object.defineProperty(n,i,Object.getOwnPropertyDescriptor(t,i))})}return n}var hv=class th{constructor(e,{headers:t={},schema:i,fetch:r,timeout:s,urlLengthLimit:a=8e3,retry:o}={}){this.url=e,this.headers=new Headers(t),this.schemaName=i,this.urlLengthLimit=a;const l=r??globalThis.fetch;s!==void 0&&s>0?this.fetch=(c,u)=>{const h=new AbortController,d=setTimeout(()=>h.abort(),s),f=u==null?void 0:u.signal;if(f){if(f.aborted)return clearTimeout(d),l(c,u);const g=()=>{clearTimeout(d),h.abort()};return f.addEventListener("abort",g,{once:!0}),l(c,xs(xs({},u),{},{signal:h.signal})).finally(()=>{clearTimeout(d),f.removeEventListener("abort",g)})}return l(c,xs(xs({},u),{},{signal:h.signal})).finally(()=>clearTimeout(d))}:this.fetch=l,this.retry=o}from(e){if(!e||typeof e!="string"||e.trim()==="")throw new Error("Invalid relation name: relation must be a non-empty string.");return new ov(new URL(`${this.url}/${e}`),{headers:new Headers(this.headers),schema:this.schemaName,fetch:this.fetch,urlLengthLimit:this.urlLengthLimit,retry:this.retry})}schema(e){return new th(this.url,{headers:this.headers,schema:e,fetch:this.fetch,urlLengthLimit:this.urlLengthLimit,retry:this.retry})}rpc(e,t={},{head:i=!1,get:r=!1,count:s}={}){var a;let o;const l=new URL(`${this.url}/rpc/${e}`);let c;const u=f=>f!==null&&typeof f=="object"&&(!Array.isArray(f)||f.some(u)),h=i&&Object.values(t).some(u);h?(o="POST",c=t):i||r?(o=i?"HEAD":"GET",Object.entries(t).filter(([f,g])=>g!==void 0).map(([f,g])=>[f,Array.isArray(g)?`{${g.join(",")}}`:`${g}`]).forEach(([f,g])=>{l.searchParams.append(f,g)})):(o="POST",c=t);const d=new Headers(this.headers);return h?d.set("Prefer",s?`count=${s},return=minimal`:"return=minimal"):s&&d.set("Prefer",`count=${s}`),new Hi({method:o,url:l,headers:d,schema:this.schemaName,body:c,fetch:(a=this.fetch)!==null&&a!==void 0?a:fetch,urlLengthLimit:this.urlLengthLimit,retry:this.retry})}};class dv{constructor(){}static detectEnvironment(){var e;if(typeof WebSocket<"u")return{type:"native",wsConstructor:WebSocket};const t=globalThis;if(typeof globalThis<"u"&&typeof t.WebSocket<"u")return{type:"native",wsConstructor:t.WebSocket};const i=typeof global<"u"?global:void 0;if(i&&typeof i.WebSocket<"u")return{type:"native",wsConstructor:i.WebSocket};if(typeof globalThis<"u"&&typeof t.WebSocketPair<"u"&&typeof globalThis.WebSocket>"u")return{type:"cloudflare",error:"Cloudflare Workers detected. WebSocket clients are not supported in Cloudflare Workers.",workaround:"Use Cloudflare Workers WebSocket API for server-side WebSocket handling, or deploy to a different runtime."};if(typeof globalThis<"u"&&t.EdgeRuntime||typeof navigator<"u"&&(!((e=navigator.userAgent)===null||e===void 0)&&e.includes("Vercel-Edge")))return{type:"unsupported",error:"Edge runtime detected (Vercel Edge/Netlify Edge). WebSockets are not supported in edge functions.",workaround:"Use serverless functions or a different deployment target for WebSocket functionality."};const r=globalThis.process;if(r){const s=r.versions;if(s&&s.node)return{type:"unsupported",error:"Node.js detected but native WebSocket not found.",workaround:"Ensure you are running Node.js 22+ or provide a WebSocket implementation via the transport option."}}return{type:"unsupported",error:"Unknown JavaScript runtime without WebSocket support.",workaround:"Ensure you're running in a supported environment (browser, Node.js, Deno) or provide a custom WebSocket implementation."}}static getWebSocketConstructor(){const e=this.detectEnvironment();if(e.wsConstructor)return e.wsConstructor;let t=e.error||"WebSocket not supported in this environment.";throw e.workaround&&(t+=`

Suggested solution: ${e.workaround}`),new Error(t)}static isWebSocketSupported(){try{return this.detectEnvironment().type==="native"}catch{return!1}}}const fv="2.110.2",pv=`realtime-js/${fv}`,mv="1.0.0",nh="2.0.0",gv=nh,_v=1e4,vv=100,Vn={closed:"closed",errored:"errored",joined:"joined",joining:"joining",leaving:"leaving"},ih={close:"phx_close",error:"phx_error",join:"phx_join",leave:"phx_leave",access_token:"access_token"},jo={connecting:"connecting",closing:"closing",closed:"closed"};class yv{constructor(e){this.HEADER_LENGTH=1,this.USER_BROADCAST_PUSH_META_LENGTH=6,this.KINDS={userBroadcastPush:3,userBroadcast:4},this.BINARY_ENCODING=0,this.JSON_ENCODING=1,this.BROADCAST_EVENT="broadcast",this.allowedMetadataKeys=[],this.allowedMetadataKeys=e??[]}encode(e,t){if(e.event===this.BROADCAST_EVENT&&!(e.payload instanceof ArrayBuffer)&&typeof e.payload.event=="string")return t(this._binaryEncodeUserBroadcastPush(e));let i=[e.join_ref,e.ref,e.topic,e.event,e.payload];return t(JSON.stringify(i))}_binaryEncodeUserBroadcastPush(e){var t;return this._isArrayBuffer((t=e.payload)===null||t===void 0?void 0:t.payload)?this._encodeBinaryUserBroadcastPush(e):this._encodeJsonUserBroadcastPush(e)}_encodeBinaryUserBroadcastPush(e){var t,i;const r=(i=(t=e.payload)===null||t===void 0?void 0:t.payload)!==null&&i!==void 0?i:new ArrayBuffer(0);return this._encodeUserBroadcastPush(e,this.BINARY_ENCODING,r)}_encodeJsonUserBroadcastPush(e){var t,i;const r=(i=(t=e.payload)===null||t===void 0?void 0:t.payload)!==null&&i!==void 0?i:{},a=new TextEncoder().encode(JSON.stringify(r)).buffer;return this._encodeUserBroadcastPush(e,this.JSON_ENCODING,a)}_encodeUserBroadcastPush(e,t,i){var r,s;const a=e.topic,o=(r=e.ref)!==null&&r!==void 0?r:"",l=(s=e.join_ref)!==null&&s!==void 0?s:"",c=e.payload.event,u=this.allowedMetadataKeys?this._pick(e.payload,this.allowedMetadataKeys):{},h=Object.keys(u).length===0?"":JSON.stringify(u);if(l.length>255)throw new Error(`joinRef length ${l.length} exceeds maximum of 255`);if(o.length>255)throw new Error(`ref length ${o.length} exceeds maximum of 255`);if(a.length>255)throw new Error(`topic length ${a.length} exceeds maximum of 255`);if(c.length>255)throw new Error(`userEvent length ${c.length} exceeds maximum of 255`);if(h.length>255)throw new Error(`metadata length ${h.length} exceeds maximum of 255`);const d=this.USER_BROADCAST_PUSH_META_LENGTH+l.length+o.length+a.length+c.length+h.length,f=new ArrayBuffer(this.HEADER_LENGTH+d);let g=new DataView(f),_=0;g.setUint8(_++,this.KINDS.userBroadcastPush),g.setUint8(_++,l.length),g.setUint8(_++,o.length),g.setUint8(_++,a.length),g.setUint8(_++,c.length),g.setUint8(_++,h.length),g.setUint8(_++,t),Array.from(l,m=>g.setUint8(_++,m.charCodeAt(0))),Array.from(o,m=>g.setUint8(_++,m.charCodeAt(0))),Array.from(a,m=>g.setUint8(_++,m.charCodeAt(0))),Array.from(c,m=>g.setUint8(_++,m.charCodeAt(0))),Array.from(h,m=>g.setUint8(_++,m.charCodeAt(0)));var p=new Uint8Array(f.byteLength+i.byteLength);return p.set(new Uint8Array(f),0),p.set(new Uint8Array(i),f.byteLength),p.buffer}decode(e,t){if(this._isArrayBuffer(e)){let i=this._binaryDecode(e);return t(i)}if(typeof e=="string"){const i=JSON.parse(e),[r,s,a,o,l]=i;return t({join_ref:r,ref:s,topic:a,event:o,payload:l})}return t({})}_binaryDecode(e){const t=new DataView(e),i=t.getUint8(0),r=new TextDecoder;switch(i){case this.KINDS.userBroadcast:return this._decodeUserBroadcast(e,t,r)}}_decodeUserBroadcast(e,t,i){const r=t.getUint8(1),s=t.getUint8(2),a=t.getUint8(3),o=t.getUint8(4);let l=this.HEADER_LENGTH+4;const c=i.decode(e.slice(l,l+r));l=l+r;const u=i.decode(e.slice(l,l+s));l=l+s;const h=i.decode(e.slice(l,l+a));l=l+a;const d=e.slice(l,e.byteLength),f=o===this.JSON_ENCODING?JSON.parse(i.decode(d)):d,g={type:this.BROADCAST_EVENT,event:u,payload:f};return a>0&&(g.meta=JSON.parse(h)),{join_ref:null,ref:null,topic:c,event:this.BROADCAST_EVENT,payload:g}}_isArrayBuffer(e){var t;return e instanceof ArrayBuffer||((t=e==null?void 0:e.constructor)===null||t===void 0?void 0:t.name)==="ArrayBuffer"}_pick(e,t){return!e||typeof e!="object"?{}:Object.fromEntries(Object.entries(e).filter(([i])=>t.includes(i)))}}var tt;(function(n){n.abstime="abstime",n.bool="bool",n.date="date",n.daterange="daterange",n.float4="float4",n.float8="float8",n.int2="int2",n.int4="int4",n.int4range="int4range",n.int8="int8",n.int8range="int8range",n.json="json",n.jsonb="jsonb",n.money="money",n.numeric="numeric",n.oid="oid",n.reltime="reltime",n.text="text",n.time="time",n.timestamp="timestamp",n.timestamptz="timestamptz",n.timetz="timetz",n.tsrange="tsrange",n.tstzrange="tstzrange"})(tt||(tt={}));const Ic=(n,e,t={})=>{var i;const r=(i=t.skipTypes)!==null&&i!==void 0?i:[];return e?Object.keys(e).reduce((s,a)=>(s[a]=Sv(a,n,e,r),s),{}):{}},Sv=(n,e,t,i)=>{const r=e.find(o=>o.name===n),s=r==null?void 0:r.type,a=t[n];return s&&!i.includes(s)?rh(s,a):qo(a)},rh=(n,e)=>{if(n.charAt(0)==="_"){const t=n.slice(1,n.length);return bv(e,t)}switch(n){case tt.bool:return xv(e);case tt.float4:case tt.float8:case tt.int2:case tt.int4:case tt.int8:case tt.numeric:case tt.oid:return Ev(e);case tt.json:case tt.jsonb:return wv(e);case tt.timestamp:return Av(e);case tt.abstime:case tt.date:case tt.daterange:case tt.int4range:case tt.int8range:case tt.money:case tt.reltime:case tt.text:case tt.time:case tt.timestamptz:case tt.timetz:case tt.tsrange:case tt.tstzrange:return qo(e);default:return qo(e)}},qo=n=>n,xv=n=>{switch(n){case"t":return!0;case"f":return!1;default:return n}},Ev=n=>{if(typeof n=="string"){const e=parseFloat(n);if(!Number.isNaN(e))return e}return n},wv=n=>{if(typeof n=="string")try{return JSON.parse(n)}catch{return n}return n},bv=(n,e)=>{if(typeof n!="string")return n;const t=n.length-1,i=n[t];if(n[0]==="{"&&i==="}"){let s;const a=n.slice(1,t);try{s=JSON.parse("["+a+"]")}catch{s=a?a.split(","):[]}return s.map(o=>rh(e,o))}return n},Av=n=>typeof n=="string"?n.replace(" ","T"):n,sh=n=>{const e=new URL(n);return e.protocol=e.protocol.replace(/^ws/i,"http"),e.pathname=e.pathname.replace(/\/+$/,"").replace(/\/socket\/websocket$/i,"").replace(/\/socket$/i,"").replace(/\/websocket$/i,""),e.pathname===""||e.pathname==="/"?e.pathname="/api/broadcast":e.pathname=e.pathname+"/api/broadcast",e.href};var wr=n=>typeof n=="function"?n:function(){return n},Tv=typeof self<"u"?self:null,Gi=typeof window<"u"?window:null,ln=Tv||Gi||globalThis,Mv="2.0.0",Rv=1e4,Cv=1e3,un={connecting:0,open:1,closing:2,closed:3},Rt={closed:"closed",errored:"errored",joined:"joined",joining:"joining",leaving:"leaving"},An={close:"phx_close",error:"phx_error",join:"phx_join",reply:"phx_reply",leave:"phx_leave"},Xo={longpoll:"longpoll",websocket:"websocket"},Pv={complete:4},Ko="base64url.bearer.phx.",Es=class{constructor(n,e,t,i){this.channel=n,this.event=e,this.payload=t||function(){return{}},this.receivedResp=null,this.timeout=i,this.timeoutTimer=null,this.recHooks=[],this.sent=!1,this.ref=void 0}resend(n){this.timeout=n,this.reset(),this.send()}send(){this.hasReceived("timeout")||(this.startTimeout(),this.sent=!0,this.channel.socket.push({topic:this.channel.topic,event:this.event,payload:this.payload(),ref:this.ref,join_ref:this.channel.joinRef()}))}receive(n,e){return this.hasReceived(n)&&e(this.receivedResp.response),this.recHooks.push({status:n,callback:e}),this}reset(){this.cancelRefEvent(),this.ref=null,this.refEvent=null,this.receivedResp=null,this.sent=!1}destroy(){this.cancelRefEvent(),this.cancelTimeout()}matchReceive({status:n,response:e,_ref:t}){this.recHooks.filter(i=>i.status===n).forEach(i=>i.callback(e))}cancelRefEvent(){this.refEvent&&this.channel.off(this.refEvent)}cancelTimeout(){clearTimeout(this.timeoutTimer),this.timeoutTimer=null}startTimeout(){this.timeoutTimer&&this.cancelTimeout(),this.ref=this.channel.socket.makeRef(),this.refEvent=this.channel.replyEventName(this.ref),this.channel.on(this.refEvent,n=>{this.cancelRefEvent(),this.cancelTimeout(),this.receivedResp=n,this.matchReceive(n)}),this.timeoutTimer=setTimeout(()=>{this.trigger("timeout",{})},this.timeout)}hasReceived(n){return this.receivedResp&&this.receivedResp.status===n}trigger(n,e){this.channel.trigger(this.refEvent,{status:n,response:e})}},ah=class{constructor(n,e){this.callback=n,this.timerCalc=e,this.timer=void 0,this.tries=0}reset(){this.tries=0,clearTimeout(this.timer)}scheduleTimeout(){clearTimeout(this.timer),this.timer=setTimeout(()=>{this.tries=this.tries+1,this.callback()},this.timerCalc(this.tries+1))}},Lv=class{constructor(n,e,t){this.state=Rt.closed,this.topic=n,this.params=wr(e||{}),this.socket=t,this.bindings=[],this.bindingRef=0,this.timeout=this.socket.timeout,this.joinedOnce=!1,this.joinPush=new Es(this,An.join,this.params,this.timeout),this.pushBuffer=[],this.stateChangeRefs=[],this.rejoinTimer=new ah(()=>{this.socket.isConnected()&&this.rejoin()},this.socket.rejoinAfterMs),this.stateChangeRefs.push(this.socket.onError(()=>this.rejoinTimer.reset())),this.stateChangeRefs.push(this.socket.onOpen(()=>{this.rejoinTimer.reset(),this.isErrored()&&this.rejoin()})),this.joinPush.receive("ok",()=>{this.state=Rt.joined,this.rejoinTimer.reset(),this.pushBuffer.forEach(i=>i.send()),this.pushBuffer=[]}),this.joinPush.receive("error",i=>{this.state=Rt.errored,this.socket.hasLogger()&&this.socket.log("channel",`error ${this.topic}`,i),this.socket.isConnected()&&this.rejoinTimer.scheduleTimeout()}),this.onClose(()=>{this.rejoinTimer.reset(),this.socket.hasLogger()&&this.socket.log("channel",`close ${this.topic}`),this.state=Rt.closed,this.socket.remove(this)}),this.onError(i=>{this.socket.hasLogger()&&this.socket.log("channel",`error ${this.topic}`,i),this.isJoining()&&this.joinPush.reset(),this.state=Rt.errored,this.socket.isConnected()&&this.rejoinTimer.scheduleTimeout()}),this.joinPush.receive("timeout",()=>{this.socket.hasLogger()&&this.socket.log("channel",`timeout ${this.topic}`,this.joinPush.timeout),new Es(this,An.leave,wr({}),this.timeout).send(),this.state=Rt.errored,this.joinPush.reset(),this.socket.isConnected()&&this.rejoinTimer.scheduleTimeout()}),this.on(An.reply,(i,r)=>{this.trigger(this.replyEventName(r),i)})}join(n=this.timeout){if(this.joinedOnce)throw new Error("tried to join multiple times. 'join' can only be called a single time per channel instance");return this.timeout=n,this.joinedOnce=!0,this.rejoin(),this.joinPush}teardown(){this.pushBuffer.forEach(n=>n.destroy()),this.pushBuffer=[],this.rejoinTimer.reset(),this.joinPush.destroy(),this.state=Rt.closed,this.bindings=[]}onClose(n){this.on(An.close,n)}onError(n){return this.on(An.error,e=>n(e))}on(n,e){let t=this.bindingRef++;return this.bindings.push({event:n,ref:t,callback:e}),t}off(n,e){this.bindings=this.bindings.filter(t=>!(t.event===n&&(typeof e>"u"||e===t.ref)))}canPush(){return this.socket.isConnected()&&this.isJoined()}push(n,e,t=this.timeout){if(e=e||{},!this.joinedOnce)throw new Error(`tried to push '${n}' to '${this.topic}' before joining. Use channel.join() before pushing events`);let i=new Es(this,n,function(){return e},t);return this.canPush()?i.send():(i.startTimeout(),this.pushBuffer.push(i)),i}leave(n=this.timeout){this.rejoinTimer.reset(),this.joinPush.cancelTimeout(),this.state=Rt.leaving;let e=()=>{this.socket.hasLogger()&&this.socket.log("channel",`leave ${this.topic}`),this.trigger(An.close,"leave")},t=new Es(this,An.leave,wr({}),n);return t.receive("ok",()=>e()).receive("timeout",()=>e()),t.send(),this.canPush()||t.trigger("ok",{}),t}onMessage(n,e,t){return e}filterBindings(n,e,t){return!0}isMember(n,e,t,i){return this.topic!==n?!1:i&&i!==this.joinRef()?(this.socket.hasLogger()&&this.socket.log("channel","dropping outdated message",{topic:n,event:e,payload:t,joinRef:i}),!1):!0}joinRef(){return this.joinPush.ref}rejoin(n=this.timeout){this.isLeaving()||(this.socket.leaveOpenTopic(this.topic),this.state=Rt.joining,this.joinPush.resend(n))}trigger(n,e,t,i){let r=this.onMessage(n,e,t,i);if(e&&!r)throw new Error("channel onMessage callbacks must return the payload, modified or unmodified");let s=this.bindings.filter(a=>a.event===n&&this.filterBindings(a,e,t));for(let a=0;a<s.length;a++)s[a].callback(r,t,i||this.joinRef())}replyEventName(n){return`chan_reply_${n}`}isClosed(){return this.state===Rt.closed}isErrored(){return this.state===Rt.errored}isJoined(){return this.state===Rt.joined}isJoining(){return this.state===Rt.joining}isLeaving(){return this.state===Rt.leaving}},$s=class{static request(n,e,t,i,r,s,a){if(ln.XDomainRequest){let o=new ln.XDomainRequest;return this.xdomainRequest(o,n,e,i,r,s,a)}else if(ln.XMLHttpRequest){let o=new ln.XMLHttpRequest;return this.xhrRequest(o,n,e,t,i,r,s,a)}else{if(ln.fetch&&ln.AbortController)return this.fetchRequest(n,e,t,i,r,s,a);throw new Error("No suitable XMLHttpRequest implementation found")}}static fetchRequest(n,e,t,i,r,s,a){let o={method:n,headers:t,body:i},l=null;return r&&(l=new AbortController,setTimeout(()=>l.abort(),r),o.signal=l.signal),ln.fetch(e,o).then(c=>c.text()).then(c=>this.parseJSON(c)).then(c=>a&&a(c)).catch(c=>{c.name==="AbortError"&&s?s():a&&a(null)}),l}static xdomainRequest(n,e,t,i,r,s,a){return n.timeout=r,n.open(e,t),n.onload=()=>{let o=this.parseJSON(n.responseText);a&&a(o)},s&&(n.ontimeout=s),n.onprogress=()=>{},n.send(i),n}static xhrRequest(n,e,t,i,r,s,a,o){n.open(e,t,!0),n.timeout=s;for(let[l,c]of Object.entries(i))n.setRequestHeader(l,c);return n.onerror=()=>o&&o(null),n.onreadystatechange=()=>{if(n.readyState===Pv.complete&&o){let l=this.parseJSON(n.responseText);o(l)}},a&&(n.ontimeout=a),n.send(r),n}static parseJSON(n){if(!n||n==="")return null;try{return JSON.parse(n)}catch{return console&&console.log("failed to parse JSON response",n),null}}static serialize(n,e){let t=[];for(var i in n){if(!Object.prototype.hasOwnProperty.call(n,i))continue;let r=e?`${e}[${i}]`:i,s=n[i];typeof s=="object"?t.push(this.serialize(s,r)):t.push(encodeURIComponent(r)+"="+encodeURIComponent(s))}return t.join("&")}static appendParams(n,e){if(Object.keys(e).length===0)return n;let t=n.match(/\?/)?"&":"?";return`${n}${t}${this.serialize(e)}`}},Ov=n=>{let e="",t=new Uint8Array(n),i=t.byteLength;for(let r=0;r<i;r++)e+=String.fromCharCode(t[r]);return btoa(e)},Di=class{constructor(n,e){e&&e.length===2&&e[1].startsWith(Ko)&&(this.authToken=atob(e[1].slice(Ko.length))),this.endPoint=null,this.token=null,this.skipHeartbeat=!0,this.reqs=new Set,this.awaitingBatchAck=!1,this.currentBatch=null,this.currentBatchTimer=null,this.batchBuffer=[],this.onopen=function(){},this.onerror=function(){},this.onmessage=function(){},this.onclose=function(){},this.pollEndpoint=this.normalizeEndpoint(n),this.readyState=un.connecting,setTimeout(()=>this.poll(),0)}normalizeEndpoint(n){return n.replace("ws://","http://").replace("wss://","https://").replace(new RegExp("(.*)/"+Xo.websocket),"$1/"+Xo.longpoll)}endpointURL(){return $s.appendParams(this.pollEndpoint,{token:this.token})}closeAndRetry(n,e,t){this.close(n,e,t),this.readyState=un.connecting}ontimeout(){this.onerror("timeout"),this.closeAndRetry(1005,"timeout",!1)}isActive(){return this.readyState===un.open||this.readyState===un.connecting}poll(){const n={Accept:"application/json"};this.authToken&&(n["X-Phoenix-AuthToken"]=this.authToken),this.ajax("GET",n,null,()=>this.ontimeout(),e=>{if(e){var{status:t,token:i,messages:r}=e;if(t===410&&this.token!==null){this.onerror(410),this.closeAndRetry(3410,"session_gone",!1);return}this.token=i}else t=0;switch(t){case 200:r.forEach(s=>{setTimeout(()=>this.onmessage({data:s}),0)}),this.poll();break;case 204:this.poll();break;case 410:this.readyState=un.open,this.onopen({}),this.poll();break;case 403:this.onerror(403),this.close(1008,"forbidden",!1);break;case 0:case 500:this.onerror(500),this.closeAndRetry(1011,"internal server error",500);break;default:throw new Error(`unhandled poll status ${t}`)}})}send(n){typeof n!="string"&&(n=Ov(n)),this.currentBatch?this.currentBatch.push(n):this.awaitingBatchAck?this.batchBuffer.push(n):(this.currentBatch=[n],this.currentBatchTimer=setTimeout(()=>{this.batchSend(this.currentBatch),this.currentBatch=null},0))}batchSend(n){this.awaitingBatchAck=!0,this.ajax("POST",{"Content-Type":"application/x-ndjson"},n.join(`
`),()=>this.onerror("timeout"),e=>{this.awaitingBatchAck=!1,!e||e.status!==200?(this.onerror(e&&e.status),this.closeAndRetry(1011,"internal server error",!1)):this.batchBuffer.length>0&&(this.batchSend(this.batchBuffer),this.batchBuffer=[])})}close(n,e,t){for(let r of this.reqs)r.abort();this.readyState=un.closed;let i=Object.assign({code:1e3,reason:void 0,wasClean:!0},{code:n,reason:e,wasClean:t});this.batchBuffer=[],clearTimeout(this.currentBatchTimer),this.currentBatchTimer=null,typeof CloseEvent<"u"?this.onclose(new CloseEvent("close",i)):this.onclose(i)}ajax(n,e,t,i,r){let s,a=()=>{this.reqs.delete(s),i()};s=$s.request(n,this.endpointURL(),e,t,this.timeout,a,o=>{this.reqs.delete(s),this.isActive()&&r(o)}),this.reqs.add(s)}},Iv=class yr{constructor(e,t={}){let i=t.events||{state:"presence_state",diff:"presence_diff"};this.state={},this.pendingDiffs=[],this.channel=e,this.joinRef=null,this.caller={onJoin:function(){},onLeave:function(){},onSync:function(){}},this.channel.on(i.state,r=>{let{onJoin:s,onLeave:a,onSync:o}=this.caller;this.joinRef=this.channel.joinRef(),this.state=yr.syncState(this.state,r,s,a),this.pendingDiffs.forEach(l=>{this.state=yr.syncDiff(this.state,l,s,a)}),this.pendingDiffs=[],o()}),this.channel.on(i.diff,r=>{let{onJoin:s,onLeave:a,onSync:o}=this.caller;this.inPendingSyncState()?this.pendingDiffs.push(r):(this.state=yr.syncDiff(this.state,r,s,a),o())})}onJoin(e){this.caller.onJoin=e}onLeave(e){this.caller.onLeave=e}onSync(e){this.caller.onSync=e}list(e){return yr.list(this.state,e)}inPendingSyncState(){return!this.joinRef||this.joinRef!==this.channel.joinRef()}static syncState(e,t,i,r){let s=this.clone(e),a={},o={};return this.map(s,(l,c)=>{t[l]||(o[l]=c)}),this.map(t,(l,c)=>{let u=s[l];if(u){let h=c.metas.map(_=>_.phx_ref),d=u.metas.map(_=>_.phx_ref),f=c.metas.filter(_=>d.indexOf(_.phx_ref)<0),g=u.metas.filter(_=>h.indexOf(_.phx_ref)<0);f.length>0&&(a[l]=c,a[l].metas=f),g.length>0&&(o[l]=this.clone(u),o[l].metas=g)}else a[l]=c}),this.syncDiff(s,{joins:a,leaves:o},i,r)}static syncDiff(e,t,i,r){let{joins:s,leaves:a}=this.clone(t);return i||(i=function(){}),r||(r=function(){}),this.map(s,(o,l)=>{let c=e[o];if(e[o]=this.clone(l),c){let u=e[o].metas.map(d=>d.phx_ref),h=c.metas.filter(d=>u.indexOf(d.phx_ref)<0);e[o].metas.unshift(...h)}i(o,c,l)}),this.map(a,(o,l)=>{let c=e[o];if(!c)return;let u=l.metas.map(h=>h.phx_ref);c.metas=c.metas.filter(h=>u.indexOf(h.phx_ref)<0),r(o,c,l),c.metas.length===0&&delete e[o]}),e}static list(e,t){return t||(t=function(i,r){return r}),this.map(e,(i,r)=>t(i,r))}static map(e,t){return Object.getOwnPropertyNames(e).map(i=>t(i,e[i]))}static clone(e){return JSON.parse(JSON.stringify(e))}},ws={HEADER_LENGTH:1,META_LENGTH:4,KINDS:{push:0,reply:1,broadcast:2},encode(n,e){if(n.payload.constructor===ArrayBuffer)return e(this.binaryEncode(n));{let t=[n.join_ref,n.ref,n.topic,n.event,n.payload];return e(JSON.stringify(t))}},decode(n,e){if(n.constructor===ArrayBuffer)return e(this.binaryDecode(n));{let[t,i,r,s,a]=JSON.parse(n);return e({join_ref:t,ref:i,topic:r,event:s,payload:a})}},binaryEncode(n){let{join_ref:e,ref:t,event:i,topic:r,payload:s}=n,a=this.META_LENGTH+e.length+t.length+r.length+i.length,o=new ArrayBuffer(this.HEADER_LENGTH+a),l=new DataView(o),c=0;l.setUint8(c++,this.KINDS.push),l.setUint8(c++,e.length),l.setUint8(c++,t.length),l.setUint8(c++,r.length),l.setUint8(c++,i.length),Array.from(e,h=>l.setUint8(c++,h.charCodeAt(0))),Array.from(t,h=>l.setUint8(c++,h.charCodeAt(0))),Array.from(r,h=>l.setUint8(c++,h.charCodeAt(0))),Array.from(i,h=>l.setUint8(c++,h.charCodeAt(0)));var u=new Uint8Array(o.byteLength+s.byteLength);return u.set(new Uint8Array(o),0),u.set(new Uint8Array(s),o.byteLength),u.buffer},binaryDecode(n){let e=new DataView(n),t=e.getUint8(0),i=new TextDecoder;switch(t){case this.KINDS.push:return this.decodePush(n,e,i);case this.KINDS.reply:return this.decodeReply(n,e,i);case this.KINDS.broadcast:return this.decodeBroadcast(n,e,i)}},decodePush(n,e,t){let i=e.getUint8(1),r=e.getUint8(2),s=e.getUint8(3),a=this.HEADER_LENGTH+this.META_LENGTH-1,o=t.decode(n.slice(a,a+i));a=a+i;let l=t.decode(n.slice(a,a+r));a=a+r;let c=t.decode(n.slice(a,a+s));a=a+s;let u=n.slice(a,n.byteLength);return{join_ref:o,ref:null,topic:l,event:c,payload:u}},decodeReply(n,e,t){let i=e.getUint8(1),r=e.getUint8(2),s=e.getUint8(3),a=e.getUint8(4),o=this.HEADER_LENGTH+this.META_LENGTH,l=t.decode(n.slice(o,o+i));o=o+i;let c=t.decode(n.slice(o,o+r));o=o+r;let u=t.decode(n.slice(o,o+s));o=o+s;let h=t.decode(n.slice(o,o+a));o=o+a;let d=n.slice(o,n.byteLength),f={status:h,response:d};return{join_ref:l,ref:c,topic:u,event:An.reply,payload:f}},decodeBroadcast(n,e,t){let i=e.getUint8(1),r=e.getUint8(2),s=this.HEADER_LENGTH+2,a=t.decode(n.slice(s,s+i));s=s+i;let o=t.decode(n.slice(s,s+r));s=s+r;let l=n.slice(s,n.byteLength);return{join_ref:null,ref:null,topic:a,event:o,payload:l}}},Uv=class{constructor(n,e={}){this.stateChangeCallbacks={open:[],close:[],error:[],message:[]},this.channels=[],this.sendBuffer=[],this.ref=0,this.fallbackRef=null,this.timeout=e.timeout||Rv,this.transport=e.transport||ln.WebSocket||Di,this.conn=void 0,this.primaryPassedHealthCheck=!1,this.longPollFallbackMs=e.longPollFallbackMs,this.fallbackTimer=null;let t=null;try{t=ln&&ln.sessionStorage}catch{}this.sessionStore=e.sessionStorage||t,this.establishedConnections=0,this.defaultEncoder=ws.encode.bind(ws),this.defaultDecoder=ws.decode.bind(ws),this.closeWasClean=!0,this.disconnecting=!1,this.binaryType=e.binaryType||"arraybuffer",this.connectClock=1,this.pageHidden=!1,this.encode=void 0,this.decode=void 0,this.transport!==Di?(this.encode=e.encode||this.defaultEncoder,this.decode=e.decode||this.defaultDecoder):(this.encode=this.defaultEncoder,this.decode=this.defaultDecoder);let i=null;Gi&&Gi.addEventListener&&(Gi.addEventListener("pagehide",r=>{this.conn&&(this.disconnect(),i=this.connectClock)}),Gi.addEventListener("pageshow",r=>{i===this.connectClock&&(i=null,this.connect())}),Gi.addEventListener("visibilitychange",()=>{document.visibilityState==="hidden"?this.pageHidden=!0:(this.pageHidden=!1,!this.isConnected()&&!this.closeWasClean&&this.teardown(()=>this.connect()))})),this.heartbeatIntervalMs=e.heartbeatIntervalMs||3e4,this.autoSendHeartbeat=e.autoSendHeartbeat??!0,this.heartbeatCallback=e.heartbeatCallback??(()=>{}),this.rejoinAfterMs=r=>e.rejoinAfterMs?e.rejoinAfterMs(r):[1e3,2e3,5e3][r-1]||1e4,this.reconnectAfterMs=r=>e.reconnectAfterMs?e.reconnectAfterMs(r):[10,50,100,150,200,250,500,1e3,2e3][r-1]||5e3,this.logger=e.logger||null,!this.logger&&e.debug&&(this.logger=(r,s,a)=>{console.log(`${r}: ${s}`,a)}),this.longpollerTimeout=e.longpollerTimeout||2e4,this.params=wr(e.params||{}),this.endPoint=`${n}/${Xo.websocket}`,this.vsn=e.vsn||Mv,this.heartbeatTimeoutTimer=null,this.heartbeatTimer=null,this.heartbeatSentAt=null,this.pendingHeartbeatRef=null,this.reconnectTimer=new ah(()=>{if(this.pageHidden){this.log("Not reconnecting as page is hidden!"),this.teardown();return}this.teardown(async()=>{e.beforeReconnect&&await e.beforeReconnect(),this.connect()})},this.reconnectAfterMs),this.authToken=e.authToken}getLongPollTransport(){return Di}replaceTransport(n){this.connectClock++,this.closeWasClean=!0,clearTimeout(this.fallbackTimer),this.reconnectTimer.reset(),this.conn&&(this.conn.close(),this.conn=null),this.transport=n}protocol(){return location.protocol.match(/^https/)?"wss":"ws"}endPointURL(){let n=$s.appendParams($s.appendParams(this.endPoint,this.params()),{vsn:this.vsn});return n.charAt(0)!=="/"?n:n.charAt(1)==="/"?`${this.protocol()}:${n}`:`${this.protocol()}://${location.host}${n}`}disconnect(n,e,t){this.connectClock++,this.disconnecting=!0,this.closeWasClean=!0,clearTimeout(this.fallbackTimer),this.reconnectTimer.reset(),this.teardown(()=>{this.disconnecting=!1,n&&n()},e,t)}connect(n){n&&(console&&console.log("passing params to connect is deprecated. Instead pass :params to the Socket constructor"),this.params=wr(n)),!(this.conn&&!this.disconnecting)&&(this.longPollFallbackMs&&this.transport!==Di?this.connectWithFallback(Di,this.longPollFallbackMs):this.transportConnect())}log(n,e,t){this.logger&&this.logger(n,e,t)}hasLogger(){return this.logger!==null}onOpen(n){let e=this.makeRef();return this.stateChangeCallbacks.open.push([e,n]),e}onClose(n){let e=this.makeRef();return this.stateChangeCallbacks.close.push([e,n]),e}onError(n){let e=this.makeRef();return this.stateChangeCallbacks.error.push([e,n]),e}onMessage(n){let e=this.makeRef();return this.stateChangeCallbacks.message.push([e,n]),e}onHeartbeat(n){this.heartbeatCallback=n}ping(n){if(!this.isConnected())return!1;let e=this.makeRef(),t=Date.now();this.push({topic:"phoenix",event:"heartbeat",payload:{},ref:e});let i=this.onMessage(r=>{r.ref===e&&(this.off([i]),n(Date.now()-t))});return!0}transportName(n){switch(n){case Di:return"LongPoll";default:return n.name}}transportConnect(){this.connectClock++,this.closeWasClean=!1;let n;this.authToken&&(n=["phoenix",`${Ko}${btoa(this.authToken).replace(/=/g,"")}`]),this.conn=new this.transport(this.endPointURL(),n),this.conn.binaryType=this.binaryType,this.conn.timeout=this.longpollerTimeout,this.conn.onopen=()=>this.onConnOpen(),this.conn.onerror=e=>this.onConnError(e),this.conn.onmessage=e=>this.onConnMessage(e),this.conn.onclose=e=>this.onConnClose(e)}getSession(n){return this.sessionStore&&this.sessionStore.getItem(n)}storeSession(n,e){this.sessionStore&&this.sessionStore.setItem(n,e)}connectWithFallback(n,e=2500){clearTimeout(this.fallbackTimer);let t=!1,i=!0,r,s,a=this.transportName(n),o=l=>{this.log("transport",`falling back to ${a}...`,l),this.off([r,s]),i=!1,this.replaceTransport(n),this.transportConnect()};if(this.getSession(`phx:fallback:${a}`))return o("memorized");this.fallbackTimer=setTimeout(o,e),s=this.onError(l=>{this.log("transport","error",l),i&&!t&&(clearTimeout(this.fallbackTimer),o(l))}),this.fallbackRef&&this.off([this.fallbackRef]),this.fallbackRef=this.onOpen(()=>{if(t=!0,!i){let l=this.transportName(n);return this.primaryPassedHealthCheck||this.storeSession(`phx:fallback:${l}`,"true"),this.log("transport",`established ${l} fallback`)}clearTimeout(this.fallbackTimer),this.fallbackTimer=setTimeout(o,e),this.ping(l=>{this.log("transport","connected to primary after",l),this.primaryPassedHealthCheck=!0,clearTimeout(this.fallbackTimer)})}),this.transportConnect()}clearHeartbeats(){clearTimeout(this.heartbeatTimer),clearTimeout(this.heartbeatTimeoutTimer)}onConnOpen(){this.hasLogger()&&this.log("transport",`connected to ${this.endPointURL()}`),this.closeWasClean=!1,this.disconnecting=!1,this.establishedConnections++,this.flushSendBuffer(),this.reconnectTimer.reset(),this.autoSendHeartbeat&&this.resetHeartbeat(),this.triggerStateCallbacks("open")}heartbeatTimeout(){if(this.pendingHeartbeatRef){this.pendingHeartbeatRef=null,this.heartbeatSentAt=null,this.hasLogger()&&this.log("transport","heartbeat timeout. Attempting to re-establish connection");try{this.heartbeatCallback("timeout")}catch(n){this.log("error","error in heartbeat callback",n)}this.triggerChanError(new Error("heartbeat timeout")),this.closeWasClean=!1,this.teardown(()=>this.reconnectTimer.scheduleTimeout(),Cv,"heartbeat timeout")}}resetHeartbeat(){this.conn&&this.conn.skipHeartbeat||(this.pendingHeartbeatRef=null,this.clearHeartbeats(),this.heartbeatTimer=setTimeout(()=>this.sendHeartbeat(),this.heartbeatIntervalMs))}teardown(n,e,t){if(!this.conn)return n&&n();const i=this.conn;this.waitForBufferDone(i,()=>{e?i.close(e,t||""):i.close(),this.waitForSocketClosed(i,()=>{this.conn===i&&(this.conn.onopen=function(){},this.conn.onerror=function(){},this.conn.onmessage=function(){},this.conn.onclose=function(){},this.conn=null),n&&n()})})}waitForBufferDone(n,e,t=1){if(t===5||!n.bufferedAmount){e();return}setTimeout(()=>{this.waitForBufferDone(n,e,t+1)},150*t)}waitForSocketClosed(n,e,t=1){if(t===5||n.readyState===un.closed){e();return}setTimeout(()=>{this.waitForSocketClosed(n,e,t+1)},150*t)}onConnClose(n){this.conn&&(this.conn.onclose=()=>{}),this.hasLogger()&&this.log("transport","close",n),this.triggerChanError(n),this.clearHeartbeats(),this.closeWasClean||this.reconnectTimer.scheduleTimeout(),this.triggerStateCallbacks("close",n)}onConnError(n){this.hasLogger()&&this.log("transport","error",n);let e=this.transport,t=this.establishedConnections;this.triggerStateCallbacks("error",n,e,t),(e===this.transport||t>0)&&this.triggerChanError(n)}triggerChanError(n){this.channels.forEach(e=>{e.isErrored()||e.isLeaving()||e.isClosed()||e.trigger(An.error,n)})}connectionState(){switch(this.conn&&this.conn.readyState){case un.connecting:return"connecting";case un.open:return"open";case un.closing:return"closing";default:return"closed"}}isConnected(){return this.connectionState()==="open"}remove(n){this.off(n.stateChangeRefs),this.channels=this.channels.filter(e=>e!==n)}off(n){for(let e in this.stateChangeCallbacks)this.stateChangeCallbacks[e]=this.stateChangeCallbacks[e].filter(([t])=>n.indexOf(t)===-1)}channel(n,e={}){let t=new Lv(n,e,this);return this.channels.push(t),t}push(n){if(this.hasLogger()){let{topic:e,event:t,payload:i,ref:r,join_ref:s}=n;this.log("push",`${e} ${t} (${s}, ${r})`,i)}this.isConnected()?this.encode(n,e=>this.conn.send(e)):this.sendBuffer.push(()=>this.encode(n,e=>this.conn.send(e)))}makeRef(){let n=this.ref+1;return n===this.ref?this.ref=0:this.ref=n,this.ref.toString()}sendHeartbeat(){if(!this.isConnected()){try{this.heartbeatCallback("disconnected")}catch(n){this.log("error","error in heartbeat callback",n)}return}if(this.pendingHeartbeatRef){this.heartbeatTimeout();return}this.pendingHeartbeatRef=this.makeRef(),this.heartbeatSentAt=Date.now(),this.push({topic:"phoenix",event:"heartbeat",payload:{},ref:this.pendingHeartbeatRef});try{this.heartbeatCallback("sent")}catch(n){this.log("error","error in heartbeat callback",n)}this.heartbeatTimeoutTimer=setTimeout(()=>this.heartbeatTimeout(),this.heartbeatIntervalMs)}flushSendBuffer(){this.isConnected()&&this.sendBuffer.length>0&&(this.sendBuffer.forEach(n=>n()),this.sendBuffer=[])}onConnMessage(n){this.decode(n.data,e=>{let{topic:t,event:i,payload:r,ref:s,join_ref:a}=e;if(s&&s===this.pendingHeartbeatRef){const o=this.heartbeatSentAt?Date.now()-this.heartbeatSentAt:void 0;this.clearHeartbeats();try{this.heartbeatCallback(r.status==="ok"?"ok":"error",o)}catch(l){this.log("error","error in heartbeat callback",l)}this.pendingHeartbeatRef=null,this.heartbeatSentAt=null,this.autoSendHeartbeat&&(this.heartbeatTimer=setTimeout(()=>this.sendHeartbeat(),this.heartbeatIntervalMs))}this.hasLogger()&&this.log("receive",`${r.status||""} ${t} ${i} ${s&&"("+s+")"||""}`.trim(),r);for(let o=0;o<this.channels.length;o++){const l=this.channels[o];l.isMember(t,i,r,a)&&l.trigger(i,r,s,a)}this.triggerStateCallbacks("message",e)})}triggerStateCallbacks(n,...e){try{this.stateChangeCallbacks[n].forEach(([t,i])=>{try{i(...e)}catch(r){this.log("error",`error in ${n} callback`,r)}})}catch(t){this.log("error",`error triggering ${n} callbacks`,t)}}leaveOpenTopic(n){let e=this.channels.find(t=>t.topic===n&&(t.isJoined()||t.isJoining()));e&&(this.hasLogger()&&this.log("transport",`leaving duplicate topic "${n}"`),e.leave())}};class br{constructor(e,t){const i=Dv(t);this.presence=new Iv(e.getChannel(),i),this.presence.onJoin((r,s,a)=>{const o=br.onJoinPayload(r,s,a);e.getChannel().trigger("presence",o)}),this.presence.onLeave((r,s,a)=>{const o=br.onLeavePayload(r,s,a);e.getChannel().trigger("presence",o)}),this.presence.onSync(()=>{e.getChannel().trigger("presence",{event:"sync"})})}get state(){return br.transformState(this.presence.state)}static transformState(e){return e=Nv(e),Object.getOwnPropertyNames(e).reduce((t,i)=>{const r=e[i];return t[i]=Fs(r),t},{})}static onJoinPayload(e,t,i){const r=Uc(t),s=Fs(i);return{event:"join",key:e,currentPresences:r,newPresences:s}}static onLeavePayload(e,t,i){const r=Uc(t),s=Fs(i);return{event:"leave",key:e,currentPresences:r,leftPresences:s}}}function Fs(n){return n.metas.map(e=>(e.presence_ref=e.phx_ref,delete e.phx_ref,delete e.phx_ref_prev,e))}function Nv(n){return JSON.parse(JSON.stringify(n))}function Dv(n){return(n==null?void 0:n.events)&&{events:n.events}}function Uc(n){return n!=null&&n.metas?Fs(n):[]}var Nc;(function(n){n.SYNC="sync",n.JOIN="join",n.LEAVE="leave"})(Nc||(Nc={}));class kv{get state(){return this.presenceAdapter.state}constructor(e,t){this.channel=e,this.presenceAdapter=new br(this.channel.channelAdapter,t)}}function Fv(n){if(n instanceof Error)return n;if(typeof n=="string")return new Error(n);if(n&&typeof n=="object"){const e=n;if(typeof e.code=="number"){const t=typeof e.reason=="string"&&e.reason?` (${e.reason})`:"";return new Error(`socket closed: ${e.code}${t}`,{cause:n})}return new Error("channel error: transport failure",{cause:n})}return new Error("channel error: connection lost")}class Bv{constructor(e,t,i){const r=Hv(i);this.channel=e.getSocket().channel(t,r),this.socket=e}get state(){return this.channel.state}set state(e){this.channel.state=e}get joinedOnce(){return this.channel.joinedOnce}get joinPush(){return this.channel.joinPush}get rejoinTimer(){return this.channel.rejoinTimer}on(e,t){return this.channel.on(e,t)}off(e,t){this.channel.off(e,t)}subscribe(e){return this.channel.join(e)}unsubscribe(e){return this.channel.leave(e)}teardown(){this.channel.teardown()}onClose(e){this.channel.onClose(e)}onError(e){return this.channel.onError(e)}push(e,t,i){let r;try{r=this.channel.push(e,t,i)}catch{throw new Error(`tried to push '${e}' to '${this.channel.topic}' before joining. Use channel.subscribe() before pushing events`)}if(this.channel.pushBuffer.length>vv){const s=this.channel.pushBuffer.shift();s.cancelTimeout(),this.socket.log("channel",`discarded push due to buffer overflow: ${s.event}`,s.payload())}return r}updateJoinPayload(e){const t=this.channel.joinPush.payload();this.channel.joinPush.payload=()=>Object.assign(Object.assign({},t),e)}canPush(){return this.socket.isConnected()&&this.state===Vn.joined}isJoined(){return this.state===Vn.joined}isJoining(){return this.state===Vn.joining}isClosed(){return this.state===Vn.closed}isLeaving(){return this.state===Vn.leaving}updateFilterBindings(e){this.channel.filterBindings=e}updatePayloadTransform(e){this.channel.onMessage=e}getChannel(){return this.channel}}function Hv(n){return{config:Object.assign({broadcast:{ack:!1,self:!1},presence:{key:"",enabled:!1},private:!1},n.config)}}const Gv=/[,()"\\]/,zv=n=>Gv.test(n)||n!==n.trim(),Vv=n=>`"${n.replace(/\\/g,"\\\\").replace(/"/g,'\\"')}"`,Dc=n=>{const e=n===null?"null":String(n);return zv(e)?Vv(e):e},Wv=n=>n===null?"null":String(n),$v=(n,e)=>{if(n==="in"){const t=Array.isArray(e)?e:[e];if(t.length===0)throw new Error("Realtime `in` filter requires at least one value.");return`in.(${Array.from(new Set(t)).map(r=>Dc(r)).join(",")})`}return n==="is"?`is.${Wv(e)}`:`${n}.${Dc(e)}`};class jv{constructor(){this.filters=[]}add(e,t,i,r=!1){const s=r?"not.":"";return this.filters.push(`${e}=${s}${$v(t,i)}`),this}eq(e,t){return this.add(e,"eq",t)}neq(e,t){return this.add(e,"neq",t)}gt(e,t){return this.add(e,"gt",t)}gte(e,t){return this.add(e,"gte",t)}lt(e,t){return this.add(e,"lt",t)}lte(e,t){return this.add(e,"lte",t)}in(e,t){return this.add(e,"in",t)}like(e,t){return this.add(e,"like",t)}ilike(e,t){return this.add(e,"ilike",t)}match(e,t){return this.add(e,"match",t)}imatch(e,t){return this.add(e,"imatch",t)}is(e,t){return this.add(e,"is",t)}isDistinct(e,t){return this.add(e,"isdistinct",t)}not(e,t,i){return this.add(e,t,i,!0)}build(){return this.filters.join(",")}toString(){return this.build()}}var kc;(function(n){n.ALL="*",n.INSERT="INSERT",n.UPDATE="UPDATE",n.DELETE="DELETE"})(kc||(kc={}));var Wi;(function(n){n.BROADCAST="broadcast",n.PRESENCE="presence",n.POSTGRES_CHANGES="postgres_changes",n.SYSTEM="system"})(Wi||(Wi={}));var Tn;(function(n){n.SUBSCRIBED="SUBSCRIBED",n.TIMED_OUT="TIMED_OUT",n.CLOSED="CLOSED",n.CHANNEL_ERROR="CHANNEL_ERROR"})(Tn||(Tn={}));class Ar{get state(){return this.channelAdapter.state}set state(e){this.channelAdapter.state=e}get joinedOnce(){return this.channelAdapter.joinedOnce}get timeout(){return this.socket.timeout}get joinPush(){return this.channelAdapter.joinPush}get rejoinTimer(){return this.channelAdapter.rejoinTimer}constructor(e,t={config:{}},i){var r,s;if(this.topic=e,this.params=t,this.socket=i,this.bindings={},this.subTopic=e.replace(/^realtime:/i,""),this.params.config=Object.assign({broadcast:{ack:!1,self:!1},presence:{key:"",enabled:!1},private:!1},t.config),this.channelAdapter=new Bv(this.socket.socketAdapter,e,this.params),this.presence=new kv(this),this._onClose(()=>{this.socket._remove(this)}),this._updateFilterTransform(),this.broadcastEndpointURL=sh(this.socket.socketAdapter.endPointURL()),this.private=this.params.config.private||!1,!this.private&&(!((s=(r=this.params.config)===null||r===void 0?void 0:r.broadcast)===null||s===void 0)&&s.replay))throw new Error(`tried to use replay on public channel '${this.topic}'. It must be a private channel.`)}subscribe(e,t=this.timeout){var i,r,s;if(this.socket.isConnected()||this.socket.connect(),this.channelAdapter.isClosed()){const{config:{broadcast:a,presence:o,private:l}}=this.params,c=(r=(i=this.bindings.postgres_changes)===null||i===void 0?void 0:i.map(f=>f.filter))!==null&&r!==void 0?r:[],u=!!this.bindings[Wi.PRESENCE]&&this.bindings[Wi.PRESENCE].length>0||((s=this.params.config.presence)===null||s===void 0?void 0:s.enabled)===!0,h={},d={broadcast:a,presence:Object.assign(Object.assign({},o),{enabled:u}),postgres_changes:c,private:l};this.socket.accessTokenValue&&(h.access_token=this.socket.accessTokenValue),this._onError(f=>{e==null||e(Tn.CHANNEL_ERROR,Fv(f))}),this._onClose(()=>e==null?void 0:e(Tn.CLOSED)),this.updateJoinPayload(Object.assign({config:d},h)),this._updateFilterMessage(),this.channelAdapter.subscribe(t).receive("ok",async({postgres_changes:f})=>{if(this.socket._isManualToken()||this.socket.setAuth(),f===void 0){e==null||e(Tn.SUBSCRIBED);return}this._updatePostgresBindings(f,e)}).receive("error",f=>{this.state=Vn.errored;const g=Object.values(f).join(", ")||"error";e==null||e(Tn.CHANNEL_ERROR,new Error(g,{cause:f}))}).receive("timeout",()=>{e==null||e(Tn.TIMED_OUT)})}return this}_updatePostgresBindings(e,t){var i;const r=this.bindings.postgres_changes,s=(i=r==null?void 0:r.length)!==null&&i!==void 0?i:0,a=[];for(let o=0;o<s;o++){const l=r[o],{filter:{event:c,schema:u,table:h,filter:d}}=l,f=e&&e[o];if(f&&f.event===c&&Ar.isFilterValueEqual(f.schema,u)&&Ar.isFilterValueEqual(f.table,h)&&Ar.isFilterValueEqual(f.filter,d))a.push(Object.assign(Object.assign({},l),{id:f.id}));else{this.unsubscribe(),this.state=Vn.errored,t==null||t(Tn.CHANNEL_ERROR,new Error("mismatch between server and client bindings for postgres changes"));return}}this.bindings.postgres_changes=a,this.state!=Vn.errored&&t&&t(Tn.SUBSCRIBED)}presenceState(){return this.presence.state}async track(e,t={}){return await this.send({type:"presence",event:"track",payload:e},t.timeout||this.timeout)}async untrack(e={}){return await this.send({type:"presence",event:"untrack"},e)}on(e,t,i){const r=this.channelAdapter.isJoined()||this.channelAdapter.isJoining(),s=e===Wi.PRESENCE||e===Wi.POSTGRES_CHANGES;if(r&&s)throw this.socket.log("channel",`cannot add \`${e}\` callbacks for ${this.topic} after \`subscribe()\`.`),new Error(`cannot add \`${e}\` callbacks for ${this.topic} after \`subscribe()\`.`);return this._on(e,t,i)}async httpSend(e,t,i={}){var r;if(t==null)return Promise.reject(new Error("Payload is required for httpSend()"));const s=t instanceof ArrayBuffer||ArrayBuffer.isView(t),a={apikey:this.socket.apiKey?this.socket.apiKey:"","Content-Type":s?"application/octet-stream":"application/json"};this.socket.accessTokenValue&&(a.Authorization=`Bearer ${this.socket.accessTokenValue}`);const o=new URL(this.broadcastEndpointURL);o.pathname+=`/${encodeURIComponent(this.subTopic)}/events/${encodeURIComponent(e)}`,this.private&&o.searchParams.set("private","true");const l={method:"POST",headers:a,body:s?t:JSON.stringify(t)},c=await this._fetchWithTimeout(o.toString(),l,(r=i.timeout)!==null&&r!==void 0?r:this.timeout);if(c.status===202)return{success:!0};if(c.status===404)return Promise.reject(new Error("httpSend() requires Realtime server v2.97.0 or newer; the endpoint returned 404. Update your Supabase CLI to a recent version, or upgrade the Realtime server in your self-hosted setup. See https://github.com/supabase/supabase-js/blob/master/packages/core/realtime-js/migrations/httpsend-server-version.md"));let u=c.statusText;try{const h=await c.json();u=h.error||h.message||u}catch{}return Promise.reject(new Error(u))}async send(e,t={}){var i,r;if(!this.channelAdapter.canPush()&&e.type==="broadcast"){console.warn("Realtime send() is automatically falling back to REST API. This behavior will be deprecated in the future. Please use httpSend() explicitly for REST delivery.");const{event:s,payload:a}=e,o={apikey:this.socket.apiKey?this.socket.apiKey:"","Content-Type":"application/json"};this.socket.accessTokenValue&&(o.Authorization=`Bearer ${this.socket.accessTokenValue}`);const l={method:"POST",headers:o,body:JSON.stringify({messages:[{topic:this.subTopic,event:s,payload:a,private:this.private}]})};try{const c=await this._fetchWithTimeout(this.broadcastEndpointURL,l,(i=t.timeout)!==null&&i!==void 0?i:this.timeout);return await((r=c.body)===null||r===void 0?void 0:r.cancel()),c.ok?"ok":"error"}catch(c){return c instanceof Error&&c.name==="AbortError"?"timed out":"error"}}else return new Promise(s=>{var a,o,l;const c=this.channelAdapter.push(e.type,e,t.timeout||this.timeout);e.type==="broadcast"&&!(!((l=(o=(a=this.params)===null||a===void 0?void 0:a.config)===null||o===void 0?void 0:o.broadcast)===null||l===void 0)&&l.ack)&&s("ok"),c.receive("ok",()=>s("ok")),c.receive("error",()=>s("error")),c.receive("timeout",()=>s("timed out"))})}updateJoinPayload(e){this.channelAdapter.updateJoinPayload(e)}async unsubscribe(e=this.timeout){return new Promise(t=>{this.channelAdapter.unsubscribe(e).receive("ok",()=>t("ok")).receive("timeout",()=>t("timed out")).receive("error",()=>t("error"))})}teardown(){this.channelAdapter.teardown()}async _fetchWithTimeout(e,t,i){const r=new AbortController,s=setTimeout(()=>r.abort(),i),a=await this.socket.fetch(e,Object.assign(Object.assign({},t),{signal:r.signal}));return clearTimeout(s),a}_on(e,t,i){const r=e.toLocaleLowerCase(),s=t==null?void 0:t.filter;(s instanceof jv||typeof s=="object"&&s!==null&&typeof s.build=="function")&&(t=Object.assign(Object.assign({},t),{filter:s.build()}));const a=this.channelAdapter.on(e,i),o={type:r,filter:t,callback:i,ref:a};return this.bindings[r]?this.bindings[r].push(o):this.bindings[r]=[o],this._updateFilterMessage(),this}_onClose(e){this.channelAdapter.onClose(e)}_onError(e){this.channelAdapter.onError(e)}_updateFilterMessage(){this.channelAdapter.updateFilterBindings((e,t,i)=>{var r,s,a,o,l,c,u;const h=e.event.toLocaleLowerCase();if(this._notThisChannelEvent(h,i))return!1;const d=(r=this.bindings[h])===null||r===void 0?void 0:r.find(f=>f.ref===e.ref);if(!d)return!0;if(["broadcast","presence","postgres_changes"].includes(h))if("id"in d){const f=d.id,g=(s=d.filter)===null||s===void 0?void 0:s.event;return f&&((a=t.ids)===null||a===void 0?void 0:a.includes(f))&&(g==="*"||(g==null?void 0:g.toLocaleLowerCase())===((o=t.data)===null||o===void 0?void 0:o.type.toLocaleLowerCase()))}else{const f=(c=(l=d==null?void 0:d.filter)===null||l===void 0?void 0:l.event)===null||c===void 0?void 0:c.toLocaleLowerCase();return f==="*"||f===((u=t==null?void 0:t.event)===null||u===void 0?void 0:u.toLocaleLowerCase())}else return d.type.toLocaleLowerCase()===h})}_notThisChannelEvent(e,t){const{close:i,error:r,leave:s,join:a}=ih;return t&&[i,r,s,a].includes(e)&&t!==this.joinPush.ref}_updateFilterTransform(){this.channelAdapter.updatePayloadTransform((e,t,i)=>{if(typeof t=="object"&&"ids"in t){const r=t.data,{schema:s,table:a,commit_timestamp:o,type:l,errors:c}=r;return Object.assign(Object.assign({},{schema:s,table:a,commit_timestamp:o,eventType:l,new:{},old:{},errors:c}),this._getPayloadRecords(r))}return t})}copyBindings(e){if(this.joinedOnce)throw new Error("cannot copy bindings into joined channel");for(const t in e.bindings)for(const i of e.bindings[t])this._on(i.type,i.filter,i.callback)}static isFilterValueEqual(e,t){return(e??void 0)===(t??void 0)}_getPayloadRecords(e){const t={new:{},old:{}};return(e.type==="INSERT"||e.type==="UPDATE")&&(t.new=Ic(e.columns,e.record)),(e.type==="UPDATE"||e.type==="DELETE")&&(t.old=Ic(e.columns,e.old_record)),t}}class qv{constructor(e,t){this.socket=new Uv(e,t)}get timeout(){return this.socket.timeout}get endPoint(){return this.socket.endPoint}get transport(){return this.socket.transport}get heartbeatIntervalMs(){return this.socket.heartbeatIntervalMs}get heartbeatCallback(){return this.socket.heartbeatCallback}set heartbeatCallback(e){this.socket.heartbeatCallback=e}get heartbeatTimer(){return this.socket.heartbeatTimer}get pendingHeartbeatRef(){return this.socket.pendingHeartbeatRef}get reconnectTimer(){return this.socket.reconnectTimer}get vsn(){return this.socket.vsn}get encode(){return this.socket.encode}get decode(){return this.socket.decode}get reconnectAfterMs(){return this.socket.reconnectAfterMs}get sendBuffer(){return this.socket.sendBuffer}get stateChangeCallbacks(){return this.socket.stateChangeCallbacks}connect(){this.socket.connect()}disconnect(e,t,i,r=1e4){return new Promise(s=>{setTimeout(()=>s("timeout"),r),this.socket.disconnect(()=>{e(),s("ok")},t,i)})}push(e){this.socket.push(e)}log(e,t,i){this.socket.log(e,t,i)}makeRef(){return this.socket.makeRef()}onOpen(e){this.socket.onOpen(e)}onClose(e){this.socket.onClose(e)}onError(e){this.socket.onError(e)}onMessage(e){this.socket.onMessage(e)}isConnected(){return this.socket.isConnected()}isConnecting(){return this.socket.connectionState()==jo.connecting}isDisconnecting(){return this.socket.connectionState()==jo.closing}connectionState(){return this.socket.connectionState()}endPointURL(){return this.socket.endPointURL()}sendHeartbeat(){this.socket.sendHeartbeat()}getSocket(){return this.socket}}const Fc={HEARTBEAT_INTERVAL:25e3},Xv=[1e3,2e3,5e3,1e4],Kv=1e4;function Yv(){const n=new Map;return{get length(){return n.size},clear(){n.clear()},getItem(e){return n.has(e)?n.get(e):null},key(e){var t;return(t=Array.from(n.keys())[e])!==null&&t!==void 0?t:null},removeItem(e){n.delete(e)},setItem(e,t){n.set(e,String(t))}}}function Jv(){try{if(typeof globalThis<"u"&&globalThis.sessionStorage)return globalThis.sessionStorage}catch{}return Yv()}const Zv=`
  addEventListener("message", (e) => {
    if (e.data.event === "start") {
      setInterval(() => postMessage({ event: "keepAlive" }), e.data.interval);
    }
  });`;class Qv{get endPoint(){return this.socketAdapter.endPoint}get timeout(){return this.socketAdapter.timeout}get transport(){return this.socketAdapter.transport}get heartbeatCallback(){return this.socketAdapter.heartbeatCallback}get heartbeatIntervalMs(){return this.socketAdapter.heartbeatIntervalMs}get heartbeatTimer(){return this.worker?this._workerHeartbeatTimer:this.socketAdapter.heartbeatTimer}get pendingHeartbeatRef(){return this.worker?this._pendingWorkerHeartbeatRef:this.socketAdapter.pendingHeartbeatRef}get reconnectTimer(){return this.socketAdapter.reconnectTimer}get vsn(){return this.socketAdapter.vsn}get encode(){return this.socketAdapter.encode}get decode(){return this.socketAdapter.decode}get reconnectAfterMs(){return this.socketAdapter.reconnectAfterMs}get sendBuffer(){return this.socketAdapter.sendBuffer}get stateChangeCallbacks(){return this.socketAdapter.stateChangeCallbacks}constructor(e,t){var i;if(this.channels=new Array,this.accessTokenValue=null,this.accessToken=null,this.apiKey=null,this.httpEndpoint="",this.headers={},this.params={},this.ref=0,this.serializer=new yv,this._manuallySetToken=!1,this._authPromise=null,this._workerHeartbeatTimer=void 0,this._pendingWorkerHeartbeatRef=null,this._pendingDisconnectTimer=null,this._disconnectOnEmptyChannelsAfterMs=0,this._resolveFetch=s=>s?(...a)=>s(...a):(...a)=>fetch(...a),!(!((i=t==null?void 0:t.params)===null||i===void 0)&&i.apikey))throw new Error("API key is required to connect to Realtime");this.apiKey=t.params.apikey;const r=this._initializeOptions(t);this.socketAdapter=new qv(e,r),this.httpEndpoint=sh(e),this.fetch=this._resolveFetch(t==null?void 0:t.fetch)}connect(){if(!(this.isConnecting()||this.isDisconnecting()||this.isConnected())){this.accessToken&&!this._authPromise&&this._setAuthSafely("connect"),this._setupConnectionHandlers();try{this.socketAdapter.connect()}catch(e){const t=e.message;throw new Error(`WebSocket not available: ${t}`)}this._handleNodeJsRaceCondition()}}endpointURL(){return this.socketAdapter.endPointURL()}async disconnect(e,t){return this._cancelPendingDisconnect(),this.isDisconnecting()?"ok":await this.socketAdapter.disconnect(()=>{clearInterval(this._workerHeartbeatTimer),this._terminateWorker()},e,t)}getChannels(){return this.channels}async removeChannel(e){const t=await e.unsubscribe();return t==="ok"&&e.teardown(),t}async removeAllChannels(){const e=this.channels.map(async i=>{const r=await i.unsubscribe();return i.teardown(),r}),t=await Promise.all(e);return await this.disconnect(),t}log(e,t,i){this.socketAdapter.log(e,t,i)}connectionState(){return this.socketAdapter.connectionState()||jo.closed}isConnected(){return this.socketAdapter.isConnected()}isConnecting(){return this.socketAdapter.isConnecting()}isDisconnecting(){return this.socketAdapter.isDisconnecting()}channel(e,t={config:{}}){const i=`realtime:${e}`,r=this.getChannels().find(s=>s.topic===i);if(r)return r;{const s=new Ar(`realtime:${e}`,t,this);return this._cancelPendingDisconnect(),this.channels.push(s),s}}push(e){this.socketAdapter.push(e)}async setAuth(e=null){this._authPromise=this._performAuth(e);try{await this._authPromise}finally{this._authPromise=null}}_isManualToken(){return this._manuallySetToken}async sendHeartbeat(){this.socketAdapter.sendHeartbeat()}onHeartbeat(e){this.socketAdapter.heartbeatCallback=this._wrapHeartbeatCallback(e)}_makeRef(){return this.socketAdapter.makeRef()}_remove(e){this.channels=this.channels.filter(t=>t.topic!==e.topic),this.channels.length===0&&(this.log("transport","no channels remaining, scheduling disconnect"),this._schedulePendingDisconnect())}_schedulePendingDisconnect(){if(this._cancelPendingDisconnect(),this._disconnectOnEmptyChannelsAfterMs===0){this.log("transport","disconnecting immediately - no channels"),this.disconnect();return}this._pendingDisconnectTimer=setTimeout(()=>{this._pendingDisconnectTimer=null,this.channels.length===0&&(this.log("transport","deferred disconnect fired - no channels, disconnecting"),this.disconnect())},this._disconnectOnEmptyChannelsAfterMs),this.log("transport",`deferred disconnect scheduled in ${this._disconnectOnEmptyChannelsAfterMs}ms`)}_cancelPendingDisconnect(){this._pendingDisconnectTimer!==null&&(this.log("transport","pending disconnect cancelled - channel activity detected"),clearTimeout(this._pendingDisconnectTimer),this._pendingDisconnectTimer=null)}async _performAuth(e=null){let t,i=!1;if(e)t=e,i=!0;else if(this.accessToken)try{t=await this.accessToken()}catch(r){this.log("error","Error fetching access token from callback",r),t=this.accessTokenValue}else t=this.accessTokenValue;i?this._manuallySetToken=!0:this.accessToken&&(this._manuallySetToken=!1),this.accessTokenValue!=t&&(this.accessTokenValue=t,this.channels.forEach(r=>{const s={access_token:t,version:pv};t&&r.updateJoinPayload(s),r.joinedOnce&&r.channelAdapter.isJoined()&&r.channelAdapter.push(ih.access_token,{access_token:t})}))}async _waitForAuthIfNeeded(){this._authPromise&&await this._authPromise}_setAuthSafely(e="general"){this._isManualToken()||this.setAuth().catch(t=>{this.log("error",`Error setting auth in ${e}`,t)})}_setupConnectionHandlers(){this.socketAdapter.onOpen(()=>{(this._authPromise||(this.accessToken&&!this.accessTokenValue?this.setAuth():Promise.resolve())).catch(t=>{this.log("error","error waiting for auth on connect",t)}),this.worker&&!this.workerRef&&this._startWorkerHeartbeat()}),this.socketAdapter.onClose(()=>{this.worker&&this.workerRef&&this._terminateWorker()}),this.socketAdapter.onMessage(e=>{e.ref&&e.ref===this._pendingWorkerHeartbeatRef&&(this._pendingWorkerHeartbeatRef=null)})}_handleNodeJsRaceCondition(){this.socketAdapter.isConnected()&&this.socketAdapter.getSocket().onConnOpen()}_wrapHeartbeatCallback(e){return(t,i)=>{t!=="disconnected"&&(t=="sent"&&this._setAuthSafely(),e&&e(t,i))}}_startWorkerHeartbeat(){this.workerUrl?this.log("worker",`starting worker for from ${this.workerUrl}`):this.log("worker","starting default worker");const e=this._workerObjectUrl(this.workerUrl);this.workerRef=new Worker(e),this.workerRef.onerror=t=>{this.log("worker","worker error",t.message),this._terminateWorker(),this.disconnect()},this.workerRef.onmessage=t=>{t.data.event==="keepAlive"&&this.sendHeartbeat()},this.workerRef.postMessage({event:"start",interval:this.heartbeatIntervalMs})}_terminateWorker(){this.workerRef&&(this.log("worker","terminating worker"),this.workerRef.terminate(),this.workerRef=void 0)}_workerObjectUrl(e){let t;if(e)t=e;else{const i=new Blob([Zv],{type:"application/javascript"});t=URL.createObjectURL(i)}return t}_initializeOptions(e){var t,i,r,s,a,o,l,c,u,h,d,f;this.worker=(t=e==null?void 0:e.worker)!==null&&t!==void 0?t:!1,this.accessToken=(i=e==null?void 0:e.accessToken)!==null&&i!==void 0?i:null;const g={};g.timeout=(r=e==null?void 0:e.timeout)!==null&&r!==void 0?r:_v,g.heartbeatIntervalMs=(s=e==null?void 0:e.heartbeatIntervalMs)!==null&&s!==void 0?s:Fc.HEARTBEAT_INTERVAL,this._disconnectOnEmptyChannelsAfterMs=(a=e==null?void 0:e.disconnectOnEmptyChannelsAfterMs)!==null&&a!==void 0?a:2*((o=e==null?void 0:e.heartbeatIntervalMs)!==null&&o!==void 0?o:Fc.HEARTBEAT_INTERVAL),g.transport=(l=e==null?void 0:e.transport)!==null&&l!==void 0?l:dv.getWebSocketConstructor(),g.params=e==null?void 0:e.params,g.logger=e==null?void 0:e.logger,g.heartbeatCallback=this._wrapHeartbeatCallback(e==null?void 0:e.heartbeatCallback),g.sessionStorage=(c=e==null?void 0:e.sessionStorage)!==null&&c!==void 0?c:Jv(),g.reconnectAfterMs=(u=e==null?void 0:e.reconnectAfterMs)!==null&&u!==void 0?u:S=>Xv[S-1]||Kv;let _,p;const m=(h=e==null?void 0:e.vsn)!==null&&h!==void 0?h:gv;switch(m){case mv:_=(S,y)=>y(JSON.stringify(S)),p=(S,y)=>y(JSON.parse(S));break;case nh:_=this.serializer.encode.bind(this.serializer),p=this.serializer.decode.bind(this.serializer);break;default:throw new Error(`Unsupported serializer version: ${g.vsn}`)}if(g.vsn=m,g.encode=(d=e==null?void 0:e.encode)!==null&&d!==void 0?d:_,g.decode=(f=e==null?void 0:e.decode)!==null&&f!==void 0?f:p,g.beforeReconnect=this._reconnectAuth.bind(this),(e!=null&&e.logLevel||e!=null&&e.log_level)&&(this.logLevel=e.logLevel||e.log_level,g.params=Object.assign(Object.assign({},g.params),{log_level:this.logLevel})),this.worker){if(typeof window<"u"&&!window.Worker)throw new Error("Web Worker is not supported");this.workerUrl=e==null?void 0:e.workerUrl,g.autoSendHeartbeat=!this.worker}return g}async _reconnectAuth(){await this._waitForAuthIfNeeded(),this.isConnected()||this.connect()}}var Pr=class extends Error{constructor(n,e){var t;super(n),this.name="IcebergError",this.status=e.status,this.icebergType=e.icebergType,this.icebergCode=e.icebergCode,this.details=e.details,this.isCommitStateUnknown=e.icebergType==="CommitStateUnknownException"||[500,502,504].includes(e.status)&&((t=e.icebergType)==null?void 0:t.includes("CommitState"))===!0}isNotFound(){return this.status===404}isConflict(){return this.status===409}isAuthenticationTimeout(){return this.status===419}};function e0(n,e,t){const i=new URL(e,n);if(t)for(const[r,s]of Object.entries(t))s!==void 0&&i.searchParams.set(r,s);return i.toString()}async function t0(n){return!n||n.type==="none"?{}:n.type==="bearer"?{Authorization:`Bearer ${n.token}`}:n.type==="header"?{[n.name]:n.value}:n.type==="custom"?await n.getHeaders():{}}function n0(n){const e=n.fetchImpl??globalThis.fetch;return{async request({method:t,path:i,query:r,body:s,headers:a}){const o=e0(n.baseUrl,i,r),l=await t0(n.auth),c=await e(o,{method:t,headers:{...s?{"Content-Type":"application/json"}:{},...l,...a},body:s?JSON.stringify(s):void 0}),u=await c.text(),h=(c.headers.get("content-type")||"").includes("application/json"),d=h&&u?JSON.parse(u):u;if(!c.ok){const f=h?d:void 0,g=f==null?void 0:f.error;throw new Pr((g==null?void 0:g.message)??`Request failed with status ${c.status}`,{status:c.status,icebergType:g==null?void 0:g.type,icebergCode:g==null?void 0:g.code,details:f})}return{status:c.status,headers:c.headers,data:d}}}}function bs(n){return n.join("")}var i0=class{constructor(n,e=""){this.client=n,this.prefix=e}async listNamespaces(n){const e=n?{parent:bs(n.namespace)}:void 0;return(await this.client.request({method:"GET",path:`${this.prefix}/namespaces`,query:e})).data.namespaces.map(i=>({namespace:i}))}async createNamespace(n,e){const t={namespace:n.namespace,properties:e==null?void 0:e.properties};return(await this.client.request({method:"POST",path:`${this.prefix}/namespaces`,body:t})).data}async dropNamespace(n){await this.client.request({method:"DELETE",path:`${this.prefix}/namespaces/${bs(n.namespace)}`})}async loadNamespaceMetadata(n){return{properties:(await this.client.request({method:"GET",path:`${this.prefix}/namespaces/${bs(n.namespace)}`})).data.properties}}async namespaceExists(n){try{return await this.client.request({method:"HEAD",path:`${this.prefix}/namespaces/${bs(n.namespace)}`}),!0}catch(e){if(e instanceof Pr&&e.status===404)return!1;throw e}}async createNamespaceIfNotExists(n,e){try{return await this.createNamespace(n,e)}catch(t){if(t instanceof Pr&&t.status===409)return;throw t}}};function ki(n){return n.join("")}var r0=class{constructor(n,e="",t){this.client=n,this.prefix=e,this.accessDelegation=t}async listTables(n){return(await this.client.request({method:"GET",path:`${this.prefix}/namespaces/${ki(n.namespace)}/tables`})).data.identifiers}async createTable(n,e){const t={};return this.accessDelegation&&(t["X-Iceberg-Access-Delegation"]=this.accessDelegation),(await this.client.request({method:"POST",path:`${this.prefix}/namespaces/${ki(n.namespace)}/tables`,body:e,headers:t})).data.metadata}async updateTable(n,e){const t=await this.client.request({method:"POST",path:`${this.prefix}/namespaces/${ki(n.namespace)}/tables/${n.name}`,body:e});return{"metadata-location":t.data["metadata-location"],metadata:t.data.metadata}}async dropTable(n,e){await this.client.request({method:"DELETE",path:`${this.prefix}/namespaces/${ki(n.namespace)}/tables/${n.name}`,query:{purgeRequested:String((e==null?void 0:e.purge)??!1)}})}async loadTable(n){const e={};return this.accessDelegation&&(e["X-Iceberg-Access-Delegation"]=this.accessDelegation),(await this.client.request({method:"GET",path:`${this.prefix}/namespaces/${ki(n.namespace)}/tables/${n.name}`,headers:e})).data.metadata}async tableExists(n){const e={};this.accessDelegation&&(e["X-Iceberg-Access-Delegation"]=this.accessDelegation);try{return await this.client.request({method:"HEAD",path:`${this.prefix}/namespaces/${ki(n.namespace)}/tables/${n.name}`,headers:e}),!0}catch(t){if(t instanceof Pr&&t.status===404)return!1;throw t}}async createTableIfNotExists(n,e){try{return await this.createTable(n,e)}catch(t){if(t instanceof Pr&&t.status===409)return await this.loadTable({namespace:n.namespace,name:e.name});throw t}}},s0=class{constructor(n){var i;let e="v1";n.catalogName&&(e+=`/${n.catalogName}`);const t=n.baseUrl.endsWith("/")?n.baseUrl:`${n.baseUrl}/`;this.client=n0({baseUrl:t,auth:n.auth,fetchImpl:n.fetch}),this.accessDelegation=(i=n.accessDelegation)==null?void 0:i.join(","),this.namespaceOps=new i0(this.client,e),this.tableOps=new r0(this.client,e,this.accessDelegation)}async listNamespaces(n){return this.namespaceOps.listNamespaces(n)}async createNamespace(n,e){return this.namespaceOps.createNamespace(n,e)}async dropNamespace(n){await this.namespaceOps.dropNamespace(n)}async loadNamespaceMetadata(n){return this.namespaceOps.loadNamespaceMetadata(n)}async listTables(n){return this.tableOps.listTables(n)}async createTable(n,e){return this.tableOps.createTable(n,e)}async updateTable(n,e){return this.tableOps.updateTable(n,e)}async dropTable(n,e){await this.tableOps.dropTable(n,e)}async loadTable(n){return this.tableOps.loadTable(n)}async namespaceExists(n){return this.namespaceOps.namespaceExists(n)}async tableExists(n){return this.tableOps.tableExists(n)}async createNamespaceIfNotExists(n,e){return this.namespaceOps.createNamespaceIfNotExists(n,e)}async createTableIfNotExists(n,e){return this.tableOps.createTableIfNotExists(n,e)}};function Lr(n){"@babel/helpers - typeof";return Lr=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Lr(n)}function a0(n,e){if(Lr(n)!="object"||!n)return n;var t=n[Symbol.toPrimitive];if(t!==void 0){var i=t.call(n,e);if(Lr(i)!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(n)}function o0(n){var e=a0(n,"string");return Lr(e)=="symbol"?e:e+""}function l0(n,e,t){return(e=o0(e))in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function Bc(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);e&&(i=i.filter(function(r){return Object.getOwnPropertyDescriptor(n,r).enumerable})),t.push.apply(t,i)}return t}function Te(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?Bc(Object(t),!0).forEach(function(i){l0(n,i,t[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):Bc(Object(t)).forEach(function(i){Object.defineProperty(n,i,Object.getOwnPropertyDescriptor(t,i))})}return n}var ra=class extends Error{constructor(n,e="storage",t,i){super(n),this.__isStorageError=!0,this.namespace=e,this.name=e==="vectors"?"StorageVectorsError":"StorageError",this.status=t,this.statusCode=i}toJSON(){return{name:this.name,message:this.message,status:this.status,statusCode:this.statusCode}}};function sa(n){return typeof n=="object"&&n!==null&&"__isStorageError"in n}var Yo=class extends ra{constructor(n,e,t,i="storage"){super(n,i,e,t),this.name=i==="vectors"?"StorageVectorsApiError":"StorageApiError",this.status=e,this.statusCode=t}toJSON(){return Te({},super.toJSON())}},oh=class extends ra{constructor(n,e,t="storage"){super(n,t),this.name=t==="vectors"?"StorageVectorsUnknownError":"StorageUnknownError",this.originalError=e}};function js(n,e,t){const i=Te({},n),r=e.toLowerCase();for(const s of Object.keys(i))s.toLowerCase()===r&&delete i[s];return i[r]=t,i}function c0(n){const e={};for(const[t,i]of Object.entries(n))e[t.toLowerCase()]=i;return e}const u0=n=>n?(...e)=>n(...e):(...e)=>fetch(...e),h0=n=>{if(typeof n!="object"||n===null)return!1;const e=Object.getPrototypeOf(n);return(e===null||e===Object.prototype||Object.getPrototypeOf(e)===null)&&!(Symbol.toStringTag in n)&&!(Symbol.iterator in n)},Jo=n=>{if(Array.isArray(n))return n.map(t=>Jo(t));if(typeof n=="function"||n!==Object(n))return n;const e={};return Object.entries(n).forEach(([t,i])=>{const r=t.replace(/([-_][a-z])/gi,s=>s.toUpperCase().replace(/[-_]/g,""));e[r]=Jo(i)}),e},d0=n=>!n||typeof n!="string"||n.length===0||n.length>100||n.trim()!==n||n.includes("/")||n.includes("\\")?!1:/^[\w!.\*'() &$@=;:+,?-]+$/.test(n),Hc=n=>{if(typeof n=="object"&&n!==null){const e=n;if(typeof e.msg=="string")return e.msg;if(typeof e.message=="string")return e.message;if(typeof e.error_description=="string")return e.error_description;if(typeof e.error=="string")return e.error;if(typeof e.error=="object"&&e.error!==null){const t=e.error;if(typeof t.message=="string")return t.message}}return JSON.stringify(n)},f0=async(n,e,t,i)=>{if(n!==null&&typeof n=="object"&&"json"in n&&typeof n.json=="function"){const r=n;let s=parseInt(String(r.status),10);Number.isFinite(s)||(s=500),r.json().then(a=>{const o=(a==null?void 0:a.statusCode)||(a==null?void 0:a.code)||s+"";e(new Yo(Hc(a),s,o,i))}).catch(()=>{const a=s+"";e(new Yo(r.statusText||`HTTP ${s} error`,s,a,i))})}else e(new oh(Hc(n),n,i))},p0=(n,e,t,i)=>{const r={method:n,headers:(e==null?void 0:e.headers)||{}};if(n==="GET"||n==="HEAD"||!i)return Te(Te({},r),t);if(h0(i)){var s;const a=(e==null?void 0:e.headers)||{};let o;for(const[l,c]of Object.entries(a))l.toLowerCase()==="content-type"&&(o=c);r.headers=js(a,"Content-Type",(s=o)!==null&&s!==void 0?s:"application/json"),r.body=JSON.stringify(i)}else r.body=i;return e!=null&&e.duplex&&(r.duplex=e.duplex),Te(Te({},r),t)};async function pr(n,e,t,i,r,s,a){return new Promise((o,l)=>{n(t,p0(e,i,r,s)).then(c=>{if(!c.ok)throw c;if(i!=null&&i.noResolveJson)return c;if(a==="vectors"){const u=c.headers.get("content-type");if(c.headers.get("content-length")==="0"||c.status===204)return{};if(!u||!u.includes("application/json"))return{}}return c.json()}).then(c=>o(c)).catch(c=>f0(c,l,i,a))})}function lh(n="storage"){return{get:async(e,t,i,r)=>pr(e,"GET",t,i,r,void 0,n),post:async(e,t,i,r,s)=>pr(e,"POST",t,r,s,i,n),put:async(e,t,i,r,s)=>pr(e,"PUT",t,r,s,i,n),head:async(e,t,i,r)=>pr(e,"HEAD",t,Te(Te({},i),{},{noResolveJson:!0}),r,void 0,n),remove:async(e,t,i,r,s)=>pr(e,"DELETE",t,r,s,i,n)}}const m0=lh("storage"),{get:Or,post:tn,put:Zo,head:g0,remove:Ir}=m0,Bt=lh("vectors");var sr=class{constructor(n,e={},t,i="storage"){this.shouldThrowOnError=!1,this.url=n,this.headers=c0(e),this.fetch=u0(t),this.namespace=i}throwOnError(){return this.shouldThrowOnError=!0,this}setHeader(n,e){return this.headers=js(this.headers,n,e),this}async handleOperation(n){var e=this;try{return{data:await n(),error:null}}catch(t){if(e.shouldThrowOnError)throw t;if(sa(t))return{data:null,error:t};throw t}}};let ch;ch=Symbol.toStringTag;var _0=class{constructor(n,e){this.downloadFn=n,this.shouldThrowOnError=e,this[ch]="StreamDownloadBuilder",this.promise=null}then(n,e){return this.getPromise().then(n,e)}catch(n){return this.getPromise().catch(n)}finally(n){return this.getPromise().finally(n)}getPromise(){return this.promise||(this.promise=this.execute()),this.promise}async execute(){var n=this;try{return{data:(await n.downloadFn()).body,error:null}}catch(e){if(n.shouldThrowOnError)throw e;if(sa(e))return{data:null,error:e};throw e}}};let uh;uh=Symbol.toStringTag;var v0=class{constructor(n,e){this.downloadFn=n,this.shouldThrowOnError=e,this[uh]="BlobDownloadBuilder",this.promise=null}asStream(){return new _0(this.downloadFn,this.shouldThrowOnError)}then(n,e){return this.getPromise().then(n,e)}catch(n){return this.getPromise().catch(n)}finally(n){return this.getPromise().finally(n)}getPromise(){return this.promise||(this.promise=this.execute()),this.promise}async execute(){var n=this;try{return{data:await(await n.downloadFn()).blob(),error:null}}catch(e){if(n.shouldThrowOnError)throw e;if(sa(e))return{data:null,error:e};throw e}}};const $a={limit:100,offset:0,sortBy:{column:"name",order:"asc"}},Gc={cacheControl:"3600",contentType:"text/plain;charset=UTF-8",upsert:!1};var y0=class extends sr{constructor(n,e={},t,i){super(n,e,i,"storage"),this.bucketId=t}async uploadOrUpdate(n,e,t,i){var r=this;return r.handleOperation(async()=>{let s;const a=Te(Te({},Gc),i);let o=Te(Te({},r.headers),n==="POST"&&{"x-upsert":String(a.upsert)});const l=a.metadata;if(typeof Blob<"u"&&t instanceof Blob?(s=new FormData,s.append("cacheControl",a.cacheControl),l&&s.append("metadata",r.encodeMetadata(l)),s.append("",t)):typeof FormData<"u"&&t instanceof FormData?(s=t,s.has("cacheControl")||s.append("cacheControl",a.cacheControl),l&&!s.has("metadata")&&s.append("metadata",r.encodeMetadata(l))):(s=t,o["cache-control"]=`max-age=${a.cacheControl}`,o["content-type"]=a.contentType,l&&(o["x-metadata"]=r.toBase64(r.encodeMetadata(l))),(typeof ReadableStream<"u"&&s instanceof ReadableStream||s&&typeof s=="object"&&"pipe"in s&&typeof s.pipe=="function")&&!a.duplex&&(a.duplex="half")),i!=null&&i.headers)for(const[d,f]of Object.entries(i.headers))o=js(o,d,f);const c=r._removeEmptyFolders(e),u=r._getFinalPath(c),h=await(n=="PUT"?Zo:tn)(r.fetch,`${r.url}/object/${u}`,s,Te({headers:o},a!=null&&a.duplex?{duplex:a.duplex}:{}));return{path:c,id:h.Id,fullPath:h.Key}})}async upload(n,e,t){return this.uploadOrUpdate("POST",n,e,t)}async uploadToSignedUrl(n,e,t,i){var r=this;const s=r._removeEmptyFolders(n),a=r._getFinalPath(s),o=new URL(r.url+`/object/upload/sign/${a}`);return o.searchParams.set("token",e),r.handleOperation(async()=>{let l;const c=Te(Te({},Gc),i);let u=Te(Te({},r.headers),{"x-upsert":String(c.upsert)});const h=c.metadata;if(typeof Blob<"u"&&t instanceof Blob?(l=new FormData,l.append("cacheControl",c.cacheControl),h&&l.append("metadata",r.encodeMetadata(h)),l.append("",t)):typeof FormData<"u"&&t instanceof FormData?(l=t,l.has("cacheControl")||l.append("cacheControl",c.cacheControl),h&&!l.has("metadata")&&l.append("metadata",r.encodeMetadata(h))):(l=t,u["cache-control"]=`max-age=${c.cacheControl}`,u["content-type"]=c.contentType,h&&(u["x-metadata"]=r.toBase64(r.encodeMetadata(h))),(typeof ReadableStream<"u"&&l instanceof ReadableStream||l&&typeof l=="object"&&"pipe"in l&&typeof l.pipe=="function")&&!c.duplex&&(c.duplex="half")),i!=null&&i.headers)for(const[d,f]of Object.entries(i.headers))u=js(u,d,f);return{path:s,fullPath:(await Zo(r.fetch,o.toString(),l,Te({headers:u},c!=null&&c.duplex?{duplex:c.duplex}:{}))).Key}})}async createSignedUploadUrl(n,e){var t=this;return t.handleOperation(async()=>{let i=t._getFinalPath(n);const r=Te({},t.headers);e!=null&&e.upsert&&(r["x-upsert"]="true");const s=await tn(t.fetch,`${t.url}/object/upload/sign/${i}`,{},{headers:r}),a=new URL(t.url+s.url),o=a.searchParams.get("token");if(!o)throw new ra("No token returned by API");return{signedUrl:a.toString(),path:n,token:o}})}async update(n,e,t){return this.uploadOrUpdate("PUT",n,e,t)}async move(n,e,t){var i=this;return i.handleOperation(async()=>await tn(i.fetch,`${i.url}/object/move`,{bucketId:i.bucketId,sourceKey:n,destinationKey:e,destinationBucket:t==null?void 0:t.destinationBucket},{headers:i.headers}))}async copy(n,e,t){var i=this;return i.handleOperation(async()=>({path:(await tn(i.fetch,`${i.url}/object/copy`,{bucketId:i.bucketId,sourceKey:n,destinationKey:e,destinationBucket:t==null?void 0:t.destinationBucket},{headers:i.headers})).Key}))}async createSignedUrl(n,e,t){var i=this;return i.handleOperation(async()=>{let r=i._getFinalPath(n);const s=typeof(t==null?void 0:t.transform)=="object"&&t.transform!==null&&Object.keys(t.transform).length>0;let a=await tn(i.fetch,`${i.url}/object/sign/${r}`,Te({expiresIn:e},s?{transform:t.transform}:{}),{headers:i.headers});const o=new URLSearchParams;t!=null&&t.download&&o.set("download",t.download===!0?"":t.download),(t==null?void 0:t.cacheNonce)!=null&&o.set("cacheNonce",String(t.cacheNonce));const l=o.toString();return{signedUrl:encodeURI(`${i.url}${a.signedURL}${l?`&${l}`:""}`)}})}async createSignedUrls(n,e,t){var i=this;return i.handleOperation(async()=>{const r=await tn(i.fetch,`${i.url}/object/sign/${i.bucketId}`,{expiresIn:e,paths:n},{headers:i.headers}),s=new URLSearchParams;t!=null&&t.download&&s.set("download",t.download===!0?"":t.download),(t==null?void 0:t.cacheNonce)!=null&&s.set("cacheNonce",String(t.cacheNonce));const a=s.toString();return r.map(o=>Te(Te({},o),{},{signedUrl:o.signedURL?encodeURI(`${i.url}${o.signedURL}${a?`&${a}`:""}`):null}))})}download(n,e,t){const i=typeof(e==null?void 0:e.transform)=="object"&&e.transform!==null&&Object.keys(e.transform).length>0?"render/image/authenticated":"object",r=new URLSearchParams;e!=null&&e.transform&&this.applyTransformOptsToQuery(r,e.transform),(e==null?void 0:e.cacheNonce)!=null&&r.set("cacheNonce",String(e.cacheNonce));const s=r.toString(),a=this._getFinalPath(n),o=()=>Or(this.fetch,`${this.url}/${i}/${a}${s?`?${s}`:""}`,{headers:this.headers,noResolveJson:!0},t);return new v0(o,this.shouldThrowOnError)}async info(n){var e=this;const t=e._getFinalPath(n);return e.handleOperation(async()=>Jo(await Or(e.fetch,`${e.url}/object/info/${t}`,{headers:e.headers})))}async exists(n){var e=this;const t=e._getFinalPath(n);try{return await g0(e.fetch,`${e.url}/object/${t}`,{headers:e.headers}),{data:!0,error:null}}catch(r){if(e.shouldThrowOnError)throw r;if(sa(r)){var i;const s=r instanceof Yo?r.status:r instanceof oh?(i=r.originalError)===null||i===void 0?void 0:i.status:void 0;if(s!==void 0&&[400,404].includes(s))return{data:!1,error:r}}throw r}}getPublicUrl(n,e){const t=this._getFinalPath(n),i=new URLSearchParams;e!=null&&e.download&&i.set("download",e.download===!0?"":e.download),e!=null&&e.transform&&this.applyTransformOptsToQuery(i,e.transform),(e==null?void 0:e.cacheNonce)!=null&&i.set("cacheNonce",String(e.cacheNonce));const r=i.toString(),s=typeof(e==null?void 0:e.transform)=="object"&&e.transform!==null&&Object.keys(e.transform).length>0?"render/image":"object";return{data:{publicUrl:encodeURI(`${this.url}/${s}/public/${t}`)+(r?`?${r}`:"")}}}async remove(n){var e=this;return e.handleOperation(async()=>await Ir(e.fetch,`${e.url}/object/${e.bucketId}`,{prefixes:n},{headers:e.headers}))}async purgeCache(n,e,t){var i=this;return i.handleOperation(async()=>{const r=i._getFinalPath(n),s=new URLSearchParams;e!=null&&e.transformations&&s.set("transformations","true");const a=s.toString();return await Ir(i.fetch,`${i.url}/cdn/${r}${a?`?${a}`:""}`,{},{headers:i.headers},t)})}async list(n,e,t){var i=this;return i.handleOperation(async()=>{const r=e!=null&&e.sortBy?Te(Te({},$a.sortBy),e.sortBy):$a.sortBy,s=Te(Te(Te({},$a),e),{},{sortBy:r,prefix:n||""});return await tn(i.fetch,`${i.url}/object/list/${i.bucketId}`,s,{headers:i.headers},t)})}async listV2(n,e){var t=this;return t.handleOperation(async()=>{const i=Te({},n);return await tn(t.fetch,`${t.url}/object/list-v2/${t.bucketId}`,i,{headers:t.headers},e)})}encodeMetadata(n){return JSON.stringify(n)}toBase64(n){return typeof Buffer<"u"?Buffer.from(n).toString("base64"):btoa(n)}_getFinalPath(n){return`${this.bucketId}/${n.replace(/^\/+/,"")}`}_removeEmptyFolders(n){return n.replace(/^\/|\/$/g,"").replace(/\/+/g,"/")}applyTransformOptsToQuery(n,e){return e.width&&n.set("width",e.width.toString()),e.height&&n.set("height",e.height.toString()),e.resize&&n.set("resize",e.resize),e.format&&n.set("format",e.format),e.quality&&n.set("quality",e.quality.toString()),n}};const S0="2.110.2",Vr={"X-Client-Info":`storage-js/${S0}`};var x0=class extends sr{constructor(n,e={},t,i){const r=new URL(n);i!=null&&i.useNewHostname&&/supabase\.(co|in|red)$/.test(r.hostname)&&!r.hostname.includes("storage.supabase.")&&(r.hostname=r.hostname.replace("supabase.","storage.supabase."));const s=r.href.replace(/\/$/,""),a=Te(Te({},Vr),e);super(s,a,t,"storage")}async listBuckets(n){var e=this;return e.handleOperation(async()=>{const t=e.listBucketOptionsToQueryString(n);return await Or(e.fetch,`${e.url}/bucket${t}`,{headers:e.headers})})}async getBucket(n){var e=this;return e.handleOperation(async()=>await Or(e.fetch,`${e.url}/bucket/${n}`,{headers:e.headers}))}async createBucket(n,e={public:!1}){var t=this;return t.handleOperation(async()=>await tn(t.fetch,`${t.url}/bucket`,{id:n,name:n,type:e.type,public:e.public,file_size_limit:e.fileSizeLimit,allowed_mime_types:e.allowedMimeTypes},{headers:t.headers}))}async updateBucket(n,e){var t=this;return t.handleOperation(async()=>await Zo(t.fetch,`${t.url}/bucket/${n}`,{id:n,name:n,public:e.public,file_size_limit:e.fileSizeLimit,allowed_mime_types:e.allowedMimeTypes},{headers:t.headers}))}async emptyBucket(n){var e=this;return e.handleOperation(async()=>await tn(e.fetch,`${e.url}/bucket/${n}/empty`,{},{headers:e.headers}))}async deleteBucket(n){var e=this;return e.handleOperation(async()=>await Ir(e.fetch,`${e.url}/bucket/${n}`,{},{headers:e.headers}))}async purgeBucketCache(n,e,t){var i=this;return i.handleOperation(async()=>{const r=new URLSearchParams;e!=null&&e.transformations&&r.set("transformations","true");const s=r.toString();return await Ir(i.fetch,`${i.url}/cdn/${n}${s?`?${s}`:""}`,{},{headers:i.headers},t)})}listBucketOptionsToQueryString(n){const e={};return n&&("limit"in n&&(e.limit=String(n.limit)),"offset"in n&&(e.offset=String(n.offset)),n.search&&(e.search=n.search),n.sortColumn&&(e.sortColumn=n.sortColumn),n.sortOrder&&(e.sortOrder=n.sortOrder)),Object.keys(e).length>0?"?"+new URLSearchParams(e).toString():""}},E0=class extends sr{constructor(n,e={},t){const i=n.replace(/\/$/,""),r=Te(Te({},Vr),e);super(i,r,t,"storage")}async createBucket(n){var e=this;return e.handleOperation(async()=>await tn(e.fetch,`${e.url}/bucket`,{name:n},{headers:e.headers}))}async listBuckets(n){var e=this;return e.handleOperation(async()=>{const t=new URLSearchParams;(n==null?void 0:n.limit)!==void 0&&t.set("limit",n.limit.toString()),(n==null?void 0:n.offset)!==void 0&&t.set("offset",n.offset.toString()),n!=null&&n.sortColumn&&t.set("sortColumn",n.sortColumn),n!=null&&n.sortOrder&&t.set("sortOrder",n.sortOrder),n!=null&&n.search&&t.set("search",n.search);const i=t.toString(),r=i?`${e.url}/bucket?${i}`:`${e.url}/bucket`;return await Or(e.fetch,r,{headers:e.headers})})}async deleteBucket(n){var e=this;return e.handleOperation(async()=>await Ir(e.fetch,`${e.url}/bucket/${n}`,{},{headers:e.headers}))}from(n){var e=this;if(!d0(n))throw new ra("Invalid bucket name: File, folder, and bucket names must follow AWS object key naming guidelines and should avoid the use of any other characters.");const t=new s0({baseUrl:this.url,catalogName:n,auth:{type:"custom",getHeaders:async()=>e.headers},fetch:this.fetch}),i=this.shouldThrowOnError;return new Proxy(t,{get(r,s){const a=r[s];return typeof a!="function"?a:async(...o)=>{try{return{data:await a.apply(r,o),error:null}}catch(l){if(i)throw l;return{data:null,error:l}}}}})}},w0=class extends sr{constructor(n,e={},t){const i=n.replace(/\/$/,""),r=Te(Te({},Vr),{},{"Content-Type":"application/json"},e);super(i,r,t,"vectors")}async createIndex(n){var e=this;return e.handleOperation(async()=>await Bt.post(e.fetch,`${e.url}/CreateIndex`,n,{headers:e.headers})||{})}async getIndex(n,e){var t=this;return t.handleOperation(async()=>await Bt.post(t.fetch,`${t.url}/GetIndex`,{vectorBucketName:n,indexName:e},{headers:t.headers}))}async listIndexes(n){var e=this;return e.handleOperation(async()=>await Bt.post(e.fetch,`${e.url}/ListIndexes`,n,{headers:e.headers}))}async deleteIndex(n,e){var t=this;return t.handleOperation(async()=>await Bt.post(t.fetch,`${t.url}/DeleteIndex`,{vectorBucketName:n,indexName:e},{headers:t.headers})||{})}},b0=class extends sr{constructor(n,e={},t){const i=n.replace(/\/$/,""),r=Te(Te({},Vr),{},{"Content-Type":"application/json"},e);super(i,r,t,"vectors")}async putVectors(n){var e=this;if(n.vectors.length<1||n.vectors.length>500)throw new Error("Vector batch size must be between 1 and 500 items");return e.handleOperation(async()=>await Bt.post(e.fetch,`${e.url}/PutVectors`,n,{headers:e.headers})||{})}async getVectors(n){var e=this;return e.handleOperation(async()=>await Bt.post(e.fetch,`${e.url}/GetVectors`,n,{headers:e.headers}))}async listVectors(n){var e=this;if(n.segmentCount!==void 0){if(n.segmentCount<1||n.segmentCount>16)throw new Error("segmentCount must be between 1 and 16");if(n.segmentIndex!==void 0&&(n.segmentIndex<0||n.segmentIndex>=n.segmentCount))throw new Error(`segmentIndex must be between 0 and ${n.segmentCount-1}`)}return e.handleOperation(async()=>await Bt.post(e.fetch,`${e.url}/ListVectors`,n,{headers:e.headers}))}async queryVectors(n){var e=this;return e.handleOperation(async()=>await Bt.post(e.fetch,`${e.url}/QueryVectors`,n,{headers:e.headers}))}async deleteVectors(n){var e=this;if(n.keys.length<1||n.keys.length>500)throw new Error("Keys batch size must be between 1 and 500 items");return e.handleOperation(async()=>await Bt.post(e.fetch,`${e.url}/DeleteVectors`,n,{headers:e.headers})||{})}},A0=class extends sr{constructor(n,e={},t){const i=n.replace(/\/$/,""),r=Te(Te({},Vr),{},{"Content-Type":"application/json"},e);super(i,r,t,"vectors")}async createBucket(n){var e=this;return e.handleOperation(async()=>await Bt.post(e.fetch,`${e.url}/CreateVectorBucket`,{vectorBucketName:n},{headers:e.headers})||{})}async getBucket(n){var e=this;return e.handleOperation(async()=>await Bt.post(e.fetch,`${e.url}/GetVectorBucket`,{vectorBucketName:n},{headers:e.headers}))}async listBuckets(n={}){var e=this;return e.handleOperation(async()=>await Bt.post(e.fetch,`${e.url}/ListVectorBuckets`,n,{headers:e.headers}))}async deleteBucket(n){var e=this;return e.handleOperation(async()=>await Bt.post(e.fetch,`${e.url}/DeleteVectorBucket`,{vectorBucketName:n},{headers:e.headers})||{})}},T0=class extends A0{constructor(n,e={}){super(n,e.headers||{},e.fetch)}from(n){return new M0(this.url,this.headers,n,this.fetch)}async createBucket(n){var e=()=>super.createBucket,t=this;return e().call(t,n)}async getBucket(n){var e=()=>super.getBucket,t=this;return e().call(t,n)}async listBuckets(n={}){var e=()=>super.listBuckets,t=this;return e().call(t,n)}async deleteBucket(n){var e=()=>super.deleteBucket,t=this;return e().call(t,n)}},M0=class extends w0{constructor(n,e,t,i){super(n,e,i),this.vectorBucketName=t}async createIndex(n){var e=()=>super.createIndex,t=this;return e().call(t,Te(Te({},n),{},{vectorBucketName:t.vectorBucketName}))}async listIndexes(n={}){var e=()=>super.listIndexes,t=this;return e().call(t,Te(Te({},n),{},{vectorBucketName:t.vectorBucketName}))}async getIndex(n){var e=()=>super.getIndex,t=this;return e().call(t,t.vectorBucketName,n)}async deleteIndex(n){var e=()=>super.deleteIndex,t=this;return e().call(t,t.vectorBucketName,n)}index(n){return new R0(this.url,this.headers,this.vectorBucketName,n,this.fetch)}},R0=class extends b0{constructor(n,e,t,i,r){super(n,e,r),this.vectorBucketName=t,this.indexName=i}async putVectors(n){var e=()=>super.putVectors,t=this;return e().call(t,Te(Te({},n),{},{vectorBucketName:t.vectorBucketName,indexName:t.indexName}))}async getVectors(n){var e=()=>super.getVectors,t=this;return e().call(t,Te(Te({},n),{},{vectorBucketName:t.vectorBucketName,indexName:t.indexName}))}async listVectors(n={}){var e=()=>super.listVectors,t=this;return e().call(t,Te(Te({},n),{},{vectorBucketName:t.vectorBucketName,indexName:t.indexName}))}async queryVectors(n){var e=()=>super.queryVectors,t=this;return e().call(t,Te(Te({},n),{},{vectorBucketName:t.vectorBucketName,indexName:t.indexName}))}async deleteVectors(n){var e=()=>super.deleteVectors,t=this;return e().call(t,Te(Te({},n),{},{vectorBucketName:t.vectorBucketName,indexName:t.indexName}))}},C0=class extends x0{constructor(n,e={},t,i){super(n,e,t,i)}from(n){return new y0(this.url,this.headers,n,this.fetch)}get vectors(){return new T0(this.url+"/vector",{headers:this.headers,fetch:this.fetch})}get analytics(){return new E0(this.url+"/iceberg",this.headers,this.fetch)}};const hh="2.110.2",Mn=30*1e3,Sr=3,ja=Sr*Mn,P0=2*Mn,L0="http://localhost:9999",O0="supabase.auth.token",I0={"X-Client-Info":`gotrue-js/${hh}`},Qo="X-Supabase-Api-Version",dh={"2024-01-01":{timestamp:Date.parse("2024-01-01T00:00:00.0Z"),name:"2024-01-01"}},U0=/^([a-z0-9_-]{4})*($|[a-z0-9_-]{3}$|[a-z0-9_-]{2}$)$/i,N0=10*60*1e3;class Ur extends Error{constructor(e,t,i){super(e),this.__isAuthError=!0,this.name="AuthError",this.status=t,this.code=i}toJSON(){return{name:this.name,message:this.message,status:this.status,code:this.code}}}function ae(n){return typeof n=="object"&&n!==null&&"__isAuthError"in n}class D0 extends Ur{constructor(e,t,i){super(e,t,i),this.name="AuthApiError",this.status=t,this.code=i}}function k0(n){return ae(n)&&n.name==="AuthApiError"}class an extends Ur{constructor(e,t){super(e),this.name="AuthUnknownError",this.originalError=t}}class fn extends Ur{constructor(e,t,i,r){super(e,i,r),this.name=t,this.status=i}}class _t extends fn{constructor(){super("Auth session missing!","AuthSessionMissingError",400,void 0)}}function As(n){return ae(n)&&n.name==="AuthSessionMissingError"}class Fi extends fn{constructor(){super("Auth session or user missing","AuthInvalidTokenResponseError",500,void 0)}}class Ts extends fn{constructor(e){super(e,"AuthInvalidCredentialsError",400,void 0)}}class Ms extends fn{constructor(e,t=null){super(e,"AuthImplicitGrantRedirectError",500,void 0),this.details=null,this.details=t}toJSON(){return Object.assign(Object.assign({},super.toJSON()),{details:this.details})}}function F0(n){return ae(n)&&n.name==="AuthImplicitGrantRedirectError"}class zc extends fn{constructor(e,t=null){super(e,"AuthPKCEGrantCodeExchangeError",500,void 0),this.details=null,this.details=t}toJSON(){return Object.assign(Object.assign({},super.toJSON()),{details:this.details})}}class B0 extends fn{constructor(){super("PKCE code verifier not found in storage. This can happen if the auth flow was initiated in a different browser or device, or if the storage was cleared. For SSR frameworks (Next.js, SvelteKit, etc.), use @supabase/ssr on both the server and client to store the code verifier in cookies.","AuthPKCECodeVerifierMissingError",400,"pkce_code_verifier_not_found")}}class el extends fn{constructor(e,t){super(e,"AuthRetryableFetchError",t,void 0)}}function Vc(n){return ae(n)&&n.name==="AuthRetryableFetchError"}class Wc extends fn{constructor(e="Refresh result discarded: session state changed mid-flight (e.g., concurrent signOut)"){super(e,"AuthRefreshDiscardedError",409,void 0)}}function H0(n){return ae(n)&&n.name==="AuthRefreshDiscardedError"}class $c extends fn{constructor(e,t,i){super(e,"AuthWeakPasswordError",t,"weak_password"),this.reasons=i}toJSON(){return Object.assign(Object.assign({},super.toJSON()),{reasons:this.reasons})}}class qs extends fn{constructor(e){super(e,"AuthInvalidJwtError",400,"invalid_jwt")}}const Xs="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".split(""),jc=` 	
\r=`.split(""),G0=(()=>{const n=new Array(128);for(let e=0;e<n.length;e+=1)n[e]=-1;for(let e=0;e<jc.length;e+=1)n[jc[e].charCodeAt(0)]=-2;for(let e=0;e<Xs.length;e+=1)n[Xs[e].charCodeAt(0)]=e;return n})();function qc(n,e,t){if(n!==null)for(e.queue=e.queue<<8|n,e.queuedBits+=8;e.queuedBits>=6;){const i=e.queue>>e.queuedBits-6&63;t(Xs[i]),e.queuedBits-=6}else if(e.queuedBits>0)for(e.queue=e.queue<<6-e.queuedBits,e.queuedBits=6;e.queuedBits>=6;){const i=e.queue>>e.queuedBits-6&63;t(Xs[i]),e.queuedBits-=6}}function fh(n,e,t){const i=G0[n];if(i>-1)for(e.queue=e.queue<<6|i,e.queuedBits+=6;e.queuedBits>=8;)t(e.queue>>e.queuedBits-8&255),e.queuedBits-=8;else{if(i===-2)return;throw new Error(`Invalid Base64-URL character "${String.fromCharCode(n)}"`)}}function Xc(n){const e=[],t=a=>{e.push(String.fromCodePoint(a))},i={utf8seq:0,codepoint:0},r={queue:0,queuedBits:0},s=a=>{W0(a,i,t)};for(let a=0;a<n.length;a+=1)fh(n.charCodeAt(a),r,s);return e.join("")}function z0(n,e){if(n<=127){e(n);return}else if(n<=2047){e(192|n>>6),e(128|n&63);return}else if(n<=65535){e(224|n>>12),e(128|n>>6&63),e(128|n&63);return}else if(n<=1114111){e(240|n>>18),e(128|n>>12&63),e(128|n>>6&63),e(128|n&63);return}throw new Error(`Unrecognized Unicode codepoint: ${n.toString(16)}`)}function V0(n,e){for(let t=0;t<n.length;t+=1){let i=n.charCodeAt(t);if(i>55295&&i<=56319){const r=(i-55296)*1024&65535;i=(n.charCodeAt(t+1)-56320&65535|r)+65536,t+=1}z0(i,e)}}function W0(n,e,t){if(e.utf8seq===0){if(n<=127){t(n);return}for(let i=1;i<6;i+=1)if(!(n>>7-i&1)){e.utf8seq=i;break}if(e.utf8seq===2)e.codepoint=n&31;else if(e.utf8seq===3)e.codepoint=n&15;else if(e.utf8seq===4)e.codepoint=n&7;else throw new Error("Invalid UTF-8 sequence");e.utf8seq-=1}else if(e.utf8seq>0){if(n<=127)throw new Error("Invalid UTF-8 sequence");e.codepoint=e.codepoint<<6|n&63,e.utf8seq-=1,e.utf8seq===0&&t(e.codepoint)}}function Xi(n){const e=[],t={queue:0,queuedBits:0},i=r=>{e.push(r)};for(let r=0;r<n.length;r+=1)fh(n.charCodeAt(r),t,i);return new Uint8Array(e)}function $0(n){const e=[];return V0(n,t=>e.push(t)),new Uint8Array(e)}function mi(n){const e=[],t={queue:0,queuedBits:0},i=r=>{e.push(r)};return n.forEach(r=>qc(r,t,i)),qc(null,t,i),e.join("")}function j0(n){return Math.round(Date.now()/1e3)+n}function q0(){return Symbol("auth-callback")}const Et=()=>typeof window<"u"&&typeof document<"u",si={tested:!1,writable:!1},ph=()=>{if(!Et())return!1;try{if(typeof globalThis.localStorage!="object")return!1}catch{return!1}if(si.tested)return si.writable;const n=`lswt-${Math.random()}${Math.random()}`;try{globalThis.localStorage.setItem(n,n),globalThis.localStorage.removeItem(n),si.tested=!0,si.writable=!0}catch{si.tested=!0,si.writable=!1}return si.writable};function X0(n){const e={},t=new URL(n);if(t.hash&&t.hash[0]==="#")try{new URLSearchParams(t.hash.substring(1)).forEach((r,s)=>{e[s]=r})}catch{}return t.searchParams.forEach((i,r)=>{e[r]=i}),e}const mh=n=>n?(...e)=>n(...e):(...e)=>fetch(...e),K0=n=>typeof n=="object"&&n!==null&&"status"in n&&"ok"in n&&"json"in n&&typeof n.json=="function",zi=async(n,e,t)=>{await n.setItem(e,JSON.stringify(t))},Qt=async(n,e)=>{const t=await n.getItem(e);if(!t)return null;try{return JSON.parse(t)}catch{return null}},lt=async(n,e)=>{await n.removeItem(e)};class aa{constructor(){this.promise=new aa.promiseConstructor((e,t)=>{this.resolve=e,this.reject=t})}}aa.promiseConstructor=Promise;function Rs(n){const e=n.split(".");if(e.length!==3)throw new qs("Invalid JWT structure");for(let i=0;i<e.length;i++)if(!U0.test(e[i]))throw new qs("JWT not in base64url format");return{header:JSON.parse(Xc(e[0])),payload:JSON.parse(Xc(e[1])),signature:Xi(e[2]),raw:{header:e[0],payload:e[1]}}}async function Y0(n){return await new Promise(e=>{setTimeout(()=>e(null),n)})}function J0(n,e){return new Promise((i,r)=>{(async()=>{for(let s=0;s<1/0;s++)try{const a=await n(s);if(!e(s,null,a)){i(a);return}}catch(a){if(!e(s,a)){r(a);return}}})()})}function Z0(n){return("0"+n.toString(16)).substr(-2)}function Q0(){const e=new Uint32Array(56);if(typeof crypto>"u"){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-._~",i=t.length;let r="";for(let s=0;s<56;s++)r+=t.charAt(Math.floor(Math.random()*i));return r}return crypto.getRandomValues(e),Array.from(e,Z0).join("")}async function ey(n){const t=new TextEncoder().encode(n),i=await crypto.subtle.digest("SHA-256",t),r=new Uint8Array(i);return Array.from(r).map(s=>String.fromCharCode(s)).join("")}async function ty(n){if(!(typeof crypto<"u"&&typeof crypto.subtle<"u"&&typeof TextEncoder<"u"))return console.warn("WebCrypto API is not supported. Code challenge method will default to use plain instead of sha256."),n;const t=await ey(n);return btoa(t).replace(/\+/g,"-").replace(/\//g,"_").replace(/=+$/,"")}async function ai(n,e,t=!1){const i=Q0();let r=i;t&&(r+="/recovery"),await zi(n,`${e}-code-verifier`,r);const s=await ty(i);return[s,i===s?"plain":"s256"]}const ny=/^2[0-9]{3}-(0[1-9]|1[0-2])-(0[1-9]|1[0-9]|2[0-9]|3[0-1])$/i;function iy(n){const e=n.headers.get(Qo);if(!e||!e.match(ny))return null;try{return new Date(`${e}T00:00:00.0Z`)}catch{return null}}function ry(n){if(!n)throw new Error("Missing exp claim");const e=Math.floor(Date.now()/1e3);if(n<=e)throw new Error("JWT has expired")}function sy(n){switch(n){case"RS256":return{name:"RSASSA-PKCS1-v1_5",hash:{name:"SHA-256"}};case"ES256":return{name:"ECDSA",namedCurve:"P-256",hash:{name:"SHA-256"}};default:throw new Error("Invalid alg claim")}}const ay=/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/;function xn(n){if(!ay.test(n))throw new Error("@supabase/auth-js: Expected parameter to be UUID but is not")}function en(n){if(!n.passkey)throw new Error("@supabase/auth-js: the passkey API is experimental and disabled by default. Enable it by passing `auth: { experimental: { passkey: true } }` to createClient (or to the GoTrueClient constructor).")}function qa(){const n={};return new Proxy(n,{get:(e,t)=>{if(t==="__isUserNotAvailableProxy")return!0;if(typeof t=="symbol"){const i=t.toString();if(i==="Symbol(Symbol.toPrimitive)"||i==="Symbol(Symbol.toStringTag)"||i==="Symbol(util.inspect.custom)")return}throw new Error(`@supabase/auth-js: client was created with userStorage option and there was no user stored in the user storage. Accessing the "${t}" property of the session object is not supported. Please use getUser() instead.`)},set:(e,t)=>{throw new Error(`@supabase/auth-js: client was created with userStorage option and there was no user stored in the user storage. Setting the "${t}" property of the session object is not supported. Please use getUser() to fetch a user object you can manipulate.`)},deleteProperty:(e,t)=>{throw new Error(`@supabase/auth-js: client was created with userStorage option and there was no user stored in the user storage. Deleting the "${t}" property of the session object is not supported. Please use getUser() to fetch a user object you can manipulate.`)}})}function oy(n,e){return new Proxy(n,{get:(t,i,r)=>{if(i==="__isInsecureUserWarningProxy")return!0;if(typeof i=="symbol"){const s=i.toString();if(s==="Symbol(Symbol.toPrimitive)"||s==="Symbol(Symbol.toStringTag)"||s==="Symbol(util.inspect.custom)"||s==="Symbol(nodejs.util.inspect.custom)")return Reflect.get(t,i,r)}return!e.value&&typeof i=="string"&&(console.warn("Using the user object as returned from supabase.auth.getSession() or from some supabase.auth.onAuthStateChange() events could be insecure! This value comes directly from the storage medium (usually cookies on the server) and may not be authentic. Use supabase.auth.getUser() instead which authenticates the data by contacting the Supabase Auth server."),e.value=!0),Reflect.get(t,i,r)}})}function Kc(n){return JSON.parse(JSON.stringify(n))}const ui=n=>{if(typeof n=="object"&&n!==null){const e=n;if(typeof e.msg=="string")return e.msg;if(typeof e.message=="string")return e.message;if(typeof e.error_description=="string")return e.error_description;if(typeof e.error=="string")return e.error}return JSON.stringify(n)},ly=[500,501,502,503,504,520,521,522,523,524,525,526,527,528,529,530];async function Yc(n){var e;if(!K0(n))throw new el(ui(n),0);if(ly.includes(n.status))throw new el(ui(n),n.status);let t;try{t=await n.json()}catch(s){throw new an(ui(s),s)}let i;const r=iy(n);if(r&&r.getTime()>=dh["2024-01-01"].timestamp&&typeof t=="object"&&t&&typeof t.code=="string"?i=t.code:typeof t=="object"&&t&&typeof t.error_code=="string"&&(i=t.error_code),i){if(i==="weak_password")throw new $c(ui(t),n.status,((e=t.weak_password)===null||e===void 0?void 0:e.reasons)||[]);if(i==="session_not_found")throw new _t}else if(typeof t=="object"&&t&&typeof t.weak_password=="object"&&t.weak_password&&Array.isArray(t.weak_password.reasons)&&t.weak_password.reasons.length&&t.weak_password.reasons.reduce((s,a)=>s&&typeof a=="string",!0))throw new $c(ui(t),n.status,t.weak_password.reasons);throw new D0(ui(t),n.status||500,i)}const cy=(n,e,t,i)=>{const r={method:n,headers:(e==null?void 0:e.headers)||{}};return n==="GET"?r:(r.headers=Object.assign({"Content-Type":"application/json;charset=UTF-8"},e==null?void 0:e.headers),r.body=JSON.stringify(i),Object.assign(Object.assign({},r),t))};async function ge(n,e,t,i){var r;const s=Object.assign({},i==null?void 0:i.headers);s[Qo]||(s[Qo]=dh["2024-01-01"].name),i!=null&&i.jwt&&(s.Authorization=`Bearer ${i.jwt}`);const a=(r=i==null?void 0:i.query)!==null&&r!==void 0?r:{};i!=null&&i.redirectTo&&(a.redirect_to=i.redirectTo);const o=Object.keys(a).length?"?"+new URLSearchParams(a).toString():"",l=await uy(n,e,t+o,{headers:s,noResolveJson:i==null?void 0:i.noResolveJson},{},i==null?void 0:i.body);return i!=null&&i.xform?i==null?void 0:i.xform(l):{data:Object.assign({},l),error:null}}async function uy(n,e,t,i,r,s){const a=cy(e,i,r,s);let o;try{o=await n(t,Object.assign({},a))}catch(l){throw console.error(l),new el(ui(l),0)}if(o.ok||await Yc(o),i!=null&&i.noResolveJson)return o;try{return await o.json()}catch(l){await Yc(l)}}function Vt(n){var e;let t=null;fy(n)&&(t=Object.assign({},n),n.expires_at||(t.expires_at=j0(n.expires_in)));const i=(e=n.user)!==null&&e!==void 0?e:typeof(n==null?void 0:n.id)=="string"?n:null;return{data:{session:t,user:i},error:null}}function Jc(n){const e=Vt(n);return!e.error&&n.weak_password&&typeof n.weak_password=="object"&&Array.isArray(n.weak_password.reasons)&&n.weak_password.reasons.length&&n.weak_password.message&&typeof n.weak_password.message=="string"&&n.weak_password.reasons.reduce((t,i)=>t&&typeof i=="string",!0)&&(e.data.weak_password=n.weak_password),e}function Wn(n){var e;return{data:{user:(e=n.user)!==null&&e!==void 0?e:n},error:null}}function hy(n){return{data:n,error:null}}function dy(n){const{action_link:e,email_otp:t,hashed_token:i,redirect_to:r,verification_type:s}=n,a=ia(n,["action_link","email_otp","hashed_token","redirect_to","verification_type"]),o={action_link:e,email_otp:t,hashed_token:i,redirect_to:r,verification_type:s},l=Object.assign({},a);return{data:{properties:o,user:l},error:null}}function Zc(n){return n}function fy(n){return!!n.access_token&&!!n.refresh_token&&!!n.expires_in}const Xa=["global","local","others"];class py{constructor({url:e="",headers:t={},fetch:i,experimental:r}){this.url=e,this.headers=t,this.fetch=mh(i),this.experimental=r??{},this.mfa={listFactors:this._listFactors.bind(this),deleteFactor:this._deleteFactor.bind(this)},this.oauth={listClients:this._listOAuthClients.bind(this),createClient:this._createOAuthClient.bind(this),getClient:this._getOAuthClient.bind(this),updateClient:this._updateOAuthClient.bind(this),deleteClient:this._deleteOAuthClient.bind(this),regenerateClientSecret:this._regenerateOAuthClientSecret.bind(this)},this.customProviders={listProviders:this._listCustomProviders.bind(this),createProvider:this._createCustomProvider.bind(this),getProvider:this._getCustomProvider.bind(this),updateProvider:this._updateCustomProvider.bind(this),deleteProvider:this._deleteCustomProvider.bind(this)},this.passkey={listPasskeys:this._adminListPasskeys.bind(this),deletePasskey:this._adminDeletePasskey.bind(this)}}async signOut(e,t=Xa[0]){if(Xa.indexOf(t)<0)throw new Error(`@supabase/auth-js: Parameter scope must be one of ${Xa.join(", ")}`);try{return await ge(this.fetch,"POST",`${this.url}/logout?scope=${t}`,{headers:this.headers,jwt:e,noResolveJson:!0}),{data:null,error:null}}catch(i){if(ae(i))return{data:null,error:i};throw i}}async inviteUserByEmail(e,t={}){try{return await ge(this.fetch,"POST",`${this.url}/invite`,{body:{email:e,data:t.data},headers:this.headers,redirectTo:t.redirectTo,xform:Wn})}catch(i){if(ae(i))return{data:{user:null},error:i};throw i}}async generateLink(e){try{const{options:t}=e,i=ia(e,["options"]),r=Object.assign(Object.assign({},i),t);return"newEmail"in i&&(r.new_email=i==null?void 0:i.newEmail,delete r.newEmail),await ge(this.fetch,"POST",`${this.url}/admin/generate_link`,{body:r,headers:this.headers,xform:dy,redirectTo:t==null?void 0:t.redirectTo})}catch(t){if(ae(t))return{data:{properties:null,user:null},error:t};throw t}}async createUser(e){try{return await ge(this.fetch,"POST",`${this.url}/admin/users`,{body:e,headers:this.headers,xform:Wn})}catch(t){if(ae(t))return{data:{user:null},error:t};throw t}}async listUsers(e){var t,i,r,s,a,o,l;try{const c={nextPage:null,lastPage:0,total:0},u=await ge(this.fetch,"GET",`${this.url}/admin/users`,{headers:this.headers,noResolveJson:!0,query:{page:(i=(t=e==null?void 0:e.page)===null||t===void 0?void 0:t.toString())!==null&&i!==void 0?i:"",per_page:(s=(r=e==null?void 0:e.perPage)===null||r===void 0?void 0:r.toString())!==null&&s!==void 0?s:""},xform:Zc});if(u.error)throw u.error;const h=await u.json(),d=(a=u.headers.get("x-total-count"))!==null&&a!==void 0?a:0,f=(l=(o=u.headers.get("link"))===null||o===void 0?void 0:o.split(","))!==null&&l!==void 0?l:[];return f.length>0&&(f.forEach(g=>{const _=parseInt(g.split(";")[0].split("=")[1].substring(0,1)),p=JSON.parse(g.split(";")[1].split("=")[1]);c[`${p}Page`]=_}),c.total=parseInt(d)),{data:Object.assign(Object.assign({},h),c),error:null}}catch(c){if(ae(c))return{data:{users:[]},error:c};throw c}}async getUserById(e){xn(e);try{return await ge(this.fetch,"GET",`${this.url}/admin/users/${e}`,{headers:this.headers,xform:Wn})}catch(t){if(ae(t))return{data:{user:null},error:t};throw t}}async updateUserById(e,t){xn(e);try{return await ge(this.fetch,"PUT",`${this.url}/admin/users/${e}`,{body:t,headers:this.headers,xform:Wn})}catch(i){if(ae(i))return{data:{user:null},error:i};throw i}}async deleteUser(e,t=!1){xn(e);try{return await ge(this.fetch,"DELETE",`${this.url}/admin/users/${e}`,{headers:this.headers,body:{should_soft_delete:t},xform:Wn})}catch(i){if(ae(i))return{data:{user:null},error:i};throw i}}async _listFactors(e){xn(e.userId);try{const{data:t,error:i}=await ge(this.fetch,"GET",`${this.url}/admin/users/${e.userId}/factors`,{headers:this.headers,xform:r=>({data:{factors:r},error:null})});return{data:t,error:i}}catch(t){if(ae(t))return{data:null,error:t};throw t}}async _deleteFactor(e){xn(e.userId),xn(e.id);try{return{data:await ge(this.fetch,"DELETE",`${this.url}/admin/users/${e.userId}/factors/${e.id}`,{headers:this.headers}),error:null}}catch(t){if(ae(t))return{data:null,error:t};throw t}}async _listOAuthClients(e){var t,i,r,s,a,o,l;try{const c={nextPage:null,lastPage:0,total:0},u=await ge(this.fetch,"GET",`${this.url}/admin/oauth/clients`,{headers:this.headers,noResolveJson:!0,query:{page:(i=(t=e==null?void 0:e.page)===null||t===void 0?void 0:t.toString())!==null&&i!==void 0?i:"",per_page:(s=(r=e==null?void 0:e.perPage)===null||r===void 0?void 0:r.toString())!==null&&s!==void 0?s:""},xform:Zc});if(u.error)throw u.error;const h=await u.json(),d=(a=u.headers.get("x-total-count"))!==null&&a!==void 0?a:0,f=(l=(o=u.headers.get("link"))===null||o===void 0?void 0:o.split(","))!==null&&l!==void 0?l:[];return f.length>0&&(f.forEach(g=>{const _=parseInt(g.split(";")[0].split("=")[1].substring(0,1)),p=JSON.parse(g.split(";")[1].split("=")[1]);c[`${p}Page`]=_}),c.total=parseInt(d)),{data:Object.assign(Object.assign({},h),c),error:null}}catch(c){if(ae(c))return{data:{clients:[]},error:c};throw c}}async _createOAuthClient(e){try{return await ge(this.fetch,"POST",`${this.url}/admin/oauth/clients`,{body:e,headers:this.headers,xform:t=>({data:t,error:null})})}catch(t){if(ae(t))return{data:null,error:t};throw t}}async _getOAuthClient(e){try{return await ge(this.fetch,"GET",`${this.url}/admin/oauth/clients/${e}`,{headers:this.headers,xform:t=>({data:t,error:null})})}catch(t){if(ae(t))return{data:null,error:t};throw t}}async _updateOAuthClient(e,t){try{return await ge(this.fetch,"PUT",`${this.url}/admin/oauth/clients/${e}`,{body:t,headers:this.headers,xform:i=>({data:i,error:null})})}catch(i){if(ae(i))return{data:null,error:i};throw i}}async _deleteOAuthClient(e){try{return await ge(this.fetch,"DELETE",`${this.url}/admin/oauth/clients/${e}`,{headers:this.headers,noResolveJson:!0}),{data:null,error:null}}catch(t){if(ae(t))return{data:null,error:t};throw t}}async _regenerateOAuthClientSecret(e){try{return await ge(this.fetch,"POST",`${this.url}/admin/oauth/clients/${e}/regenerate_secret`,{headers:this.headers,xform:t=>({data:t,error:null})})}catch(t){if(ae(t))return{data:null,error:t};throw t}}async _listCustomProviders(e){try{const t={};return e!=null&&e.type&&(t.type=e.type),await ge(this.fetch,"GET",`${this.url}/admin/custom-providers`,{headers:this.headers,query:t,xform:i=>{var r;return{data:{providers:(r=i==null?void 0:i.providers)!==null&&r!==void 0?r:[]},error:null}}})}catch(t){if(ae(t))return{data:{providers:[]},error:t};throw t}}async _createCustomProvider(e){try{return await ge(this.fetch,"POST",`${this.url}/admin/custom-providers`,{body:e,headers:this.headers,xform:t=>({data:t,error:null})})}catch(t){if(ae(t))return{data:null,error:t};throw t}}async _getCustomProvider(e){try{return await ge(this.fetch,"GET",`${this.url}/admin/custom-providers/${e}`,{headers:this.headers,xform:t=>({data:t,error:null})})}catch(t){if(ae(t))return{data:null,error:t};throw t}}async _updateCustomProvider(e,t){try{return await ge(this.fetch,"PUT",`${this.url}/admin/custom-providers/${e}`,{body:t,headers:this.headers,xform:i=>({data:i,error:null})})}catch(i){if(ae(i))return{data:null,error:i};throw i}}async _deleteCustomProvider(e){try{return await ge(this.fetch,"DELETE",`${this.url}/admin/custom-providers/${e}`,{headers:this.headers,noResolveJson:!0}),{data:null,error:null}}catch(t){if(ae(t))return{data:null,error:t};throw t}}async _adminListPasskeys(e){en(this.experimental),xn(e.userId);try{return await ge(this.fetch,"GET",`${this.url}/admin/users/${e.userId}/passkeys`,{headers:this.headers,xform:t=>({data:t,error:null})})}catch(t){if(ae(t))return{data:null,error:t};throw t}}async _adminDeletePasskey(e){en(this.experimental),xn(e.userId),xn(e.passkeyId);try{return await ge(this.fetch,"DELETE",`${this.url}/admin/users/${e.userId}/passkeys/${e.passkeyId}`,{headers:this.headers,noResolveJson:!0}),{data:null,error:null}}catch(t){if(ae(t))return{data:null,error:t};throw t}}}function Qc(n={}){return{getItem:e=>n[e]||null,setItem:(e,t)=>{n[e]=t},removeItem:e=>{delete n[e]}}}globalThis&&ph()&&globalThis.localStorage&&globalThis.localStorage.getItem("supabase.gotrue-js.locks.debug");class my extends Error{constructor(e){super(e),this.isAcquireTimeout=!0}}function gy(){if(typeof globalThis!="object")try{Object.defineProperty(Object.prototype,"__magic__",{get:function(){return this},configurable:!0}),__magic__.globalThis=__magic__,delete Object.prototype.__magic__}catch{typeof self<"u"&&(self.globalThis=self)}}function gh(n){if(!/^0x[a-fA-F0-9]{40}$/.test(n))throw new Error(`@supabase/auth-js: Address "${n}" is invalid.`);return n.toLowerCase()}function _y(n){return parseInt(n,16)}function vy(n){const e=new TextEncoder().encode(n);return"0x"+Array.from(e,i=>i.toString(16).padStart(2,"0")).join("")}function yy(n){var e;const{chainId:t,domain:i,expirationTime:r,issuedAt:s=new Date,nonce:a,notBefore:o,requestId:l,resources:c,scheme:u,uri:h,version:d}=n;{if(!Number.isInteger(t))throw new Error(`@supabase/auth-js: Invalid SIWE message field "chainId". Chain ID must be a EIP-155 chain ID. Provided value: ${t}`);if(!i)throw new Error('@supabase/auth-js: Invalid SIWE message field "domain". Domain must be provided.');if(a&&a.length<8)throw new Error(`@supabase/auth-js: Invalid SIWE message field "nonce". Nonce must be at least 8 characters. Provided value: ${a}`);if(!h)throw new Error('@supabase/auth-js: Invalid SIWE message field "uri". URI must be provided.');if(d!=="1")throw new Error(`@supabase/auth-js: Invalid SIWE message field "version". Version must be '1'. Provided value: ${d}`);if(!((e=n.statement)===null||e===void 0)&&e.includes(`
`))throw new Error(`@supabase/auth-js: Invalid SIWE message field "statement". Statement must not include '\\n'. Provided value: ${n.statement}`)}const f=gh(n.address),g=u?`${u}://${i}`:i,_=n.statement?`${n.statement}
`:"",p=`${g} wants you to sign in with your Ethereum account:
${f}

${_}`;let m=`URI: ${h}
Version: ${d}
Chain ID: ${t}${a?`
Nonce: ${a}`:""}
Issued At: ${s.toISOString()}`;if(r&&(m+=`
Expiration Time: ${r.toISOString()}`),o&&(m+=`
Not Before: ${o.toISOString()}`),l&&(m+=`
Request ID: ${l}`),c){let S=`
Resources:`;for(const y of c){if(!y||typeof y!="string")throw new Error(`@supabase/auth-js: Invalid SIWE message field "resources". Every resource must be a valid string. Provided value: ${y}`);S+=`
- ${y}`}m+=S}return`${p}
${m}`}class ft extends Error{constructor({message:e,code:t,cause:i,name:r}){var s;super(e,{cause:i}),this.__isWebAuthnError=!0,this.name=(s=r??(i instanceof Error?i.name:void 0))!==null&&s!==void 0?s:"Unknown Error",this.code=t}toJSON(){return{name:this.name,message:this.message,code:this.code}}}class Ks extends ft{constructor(e,t){super({code:"ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY",cause:t,message:e}),this.name="WebAuthnUnknownError",this.originalError=t}}function Sy({error:n,options:e}){var t,i,r;const{publicKey:s}=e;if(!s)throw Error("options was missing required publicKey property");if(n.name==="AbortError"){if(e.signal instanceof AbortSignal)return new ft({message:"Registration ceremony was sent an abort signal",code:"ERROR_CEREMONY_ABORTED",cause:n})}else if(n.name==="ConstraintError"){if(((t=s.authenticatorSelection)===null||t===void 0?void 0:t.requireResidentKey)===!0)return new ft({message:"Discoverable credentials were required but no available authenticator supported it",code:"ERROR_AUTHENTICATOR_MISSING_DISCOVERABLE_CREDENTIAL_SUPPORT",cause:n});if(e.mediation==="conditional"&&((i=s.authenticatorSelection)===null||i===void 0?void 0:i.userVerification)==="required")return new ft({message:"User verification was required during automatic registration but it could not be performed",code:"ERROR_AUTO_REGISTER_USER_VERIFICATION_FAILURE",cause:n});if(((r=s.authenticatorSelection)===null||r===void 0?void 0:r.userVerification)==="required")return new ft({message:"User verification was required but no available authenticator supported it",code:"ERROR_AUTHENTICATOR_MISSING_USER_VERIFICATION_SUPPORT",cause:n})}else{if(n.name==="InvalidStateError")return new ft({message:"The authenticator was previously registered",code:"ERROR_AUTHENTICATOR_PREVIOUSLY_REGISTERED",cause:n});if(n.name==="NotAllowedError")return new ft({message:n.message,code:"ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY",cause:n});if(n.name==="NotSupportedError")return s.pubKeyCredParams.filter(o=>o.type==="public-key").length===0?new ft({message:'No entry in pubKeyCredParams was of type "public-key"',code:"ERROR_MALFORMED_PUBKEYCREDPARAMS",cause:n}):new ft({message:"No available authenticator supported any of the specified pubKeyCredParams algorithms",code:"ERROR_AUTHENTICATOR_NO_SUPPORTED_PUBKEYCREDPARAMS_ALG",cause:n});if(n.name==="SecurityError"){const a=window.location.hostname;if(_h(a)){if(s.rp.id!==a)return new ft({message:`The RP ID "${s.rp.id}" is invalid for this domain`,code:"ERROR_INVALID_RP_ID",cause:n})}else return new ft({message:`${window.location.hostname} is an invalid domain`,code:"ERROR_INVALID_DOMAIN",cause:n})}else if(n.name==="TypeError"){if(s.user.id.byteLength<1||s.user.id.byteLength>64)return new ft({message:"User ID was not between 1 and 64 characters",code:"ERROR_INVALID_USER_ID_LENGTH",cause:n})}else if(n.name==="UnknownError")return new ft({message:"The authenticator was unable to process the specified options, or could not create a new credential",code:"ERROR_AUTHENTICATOR_GENERAL_ERROR",cause:n})}return new ft({message:"a Non-Webauthn related error has occurred",code:"ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY",cause:n})}function xy({error:n,options:e}){const{publicKey:t}=e;if(!t)throw Error("options was missing required publicKey property");if(n.name==="AbortError"){if(e.signal instanceof AbortSignal)return new ft({message:"Authentication ceremony was sent an abort signal",code:"ERROR_CEREMONY_ABORTED",cause:n})}else{if(n.name==="NotAllowedError")return new ft({message:n.message,code:"ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY",cause:n});if(n.name==="SecurityError"){const i=window.location.hostname;if(_h(i)){if(t.rpId!==i)return new ft({message:`The RP ID "${t.rpId}" is invalid for this domain`,code:"ERROR_INVALID_RP_ID",cause:n})}else return new ft({message:`${window.location.hostname} is an invalid domain`,code:"ERROR_INVALID_DOMAIN",cause:n})}else if(n.name==="UnknownError")return new ft({message:"The authenticator was unable to process the specified options, or could not create a new assertion signature",code:"ERROR_AUTHENTICATOR_GENERAL_ERROR",cause:n})}return new ft({message:"a Non-Webauthn related error has occurred",code:"ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY",cause:n})}class Ey{createNewAbortSignal(){if(this.controller){const t=new Error("Cancelling existing WebAuthn API call for new one");t.name="AbortError",this.controller.abort(t)}const e=new AbortController;return this.controller=e,e.signal}cancelCeremony(){if(this.controller){const e=new Error("Manually cancelling existing WebAuthn API call");e.name="AbortError",this.controller.abort(e),this.controller=void 0}}}const tl=new Ey;function eu(n){if(!n)throw new Error("Credential creation options are required");if(typeof PublicKeyCredential<"u"&&"parseCreationOptionsFromJSON"in PublicKeyCredential&&typeof PublicKeyCredential.parseCreationOptionsFromJSON=="function")return PublicKeyCredential.parseCreationOptionsFromJSON(n);const{challenge:e,user:t,excludeCredentials:i}=n,r=ia(n,["challenge","user","excludeCredentials"]),s=Xi(e).buffer,a=Object.assign(Object.assign({},t),{id:Xi(t.id).buffer}),o=Object.assign(Object.assign({},r),{challenge:s,user:a});if(i&&i.length>0){o.excludeCredentials=new Array(i.length);for(let l=0;l<i.length;l++){const c=i[l];o.excludeCredentials[l]=Object.assign(Object.assign({},c),{id:Xi(c.id).buffer,type:c.type||"public-key",transports:c.transports})}}return o}function tu(n){if(!n)throw new Error("Credential request options are required");if(typeof PublicKeyCredential<"u"&&"parseRequestOptionsFromJSON"in PublicKeyCredential&&typeof PublicKeyCredential.parseRequestOptionsFromJSON=="function")return PublicKeyCredential.parseRequestOptionsFromJSON(n);const{challenge:e,allowCredentials:t}=n,i=ia(n,["challenge","allowCredentials"]),r=Xi(e).buffer,s=Object.assign(Object.assign({},i),{challenge:r});if(t&&t.length>0){s.allowCredentials=new Array(t.length);for(let a=0;a<t.length;a++){const o=t[a];s.allowCredentials[a]=Object.assign(Object.assign({},o),{id:Xi(o.id).buffer,type:o.type||"public-key",transports:o.transports})}}return s}function nu(n){var e;if("toJSON"in n&&typeof n.toJSON=="function")return n.toJSON();const t=n;return{id:n.id,rawId:n.id,response:{attestationObject:mi(new Uint8Array(n.response.attestationObject)),clientDataJSON:mi(new Uint8Array(n.response.clientDataJSON))},type:"public-key",clientExtensionResults:n.getClientExtensionResults(),authenticatorAttachment:(e=t.authenticatorAttachment)!==null&&e!==void 0?e:void 0}}function iu(n){var e;if("toJSON"in n&&typeof n.toJSON=="function")return n.toJSON();const t=n,i=n.getClientExtensionResults(),r=n.response;return{id:n.id,rawId:n.id,response:{authenticatorData:mi(new Uint8Array(r.authenticatorData)),clientDataJSON:mi(new Uint8Array(r.clientDataJSON)),signature:mi(new Uint8Array(r.signature)),userHandle:r.userHandle?mi(new Uint8Array(r.userHandle)):void 0},type:"public-key",clientExtensionResults:i,authenticatorAttachment:(e=t.authenticatorAttachment)!==null&&e!==void 0?e:void 0}}function _h(n){return n==="localhost"||/^([a-z0-9]+(-[a-z0-9]+)*\.)+[a-z]{2,}$/i.test(n)}function Ys(){var n,e;return!!(Et()&&"PublicKeyCredential"in window&&window.PublicKeyCredential&&"credentials"in navigator&&typeof((n=navigator==null?void 0:navigator.credentials)===null||n===void 0?void 0:n.create)=="function"&&typeof((e=navigator==null?void 0:navigator.credentials)===null||e===void 0?void 0:e.get)=="function")}async function vh(n){try{const e=await navigator.credentials.create(n);return e?e instanceof PublicKeyCredential?{data:e,error:null}:{data:null,error:new Ks("Browser returned unexpected credential type",e)}:{data:null,error:new Ks("Empty credential response",e)}}catch(e){return{data:null,error:Sy({error:e,options:n})}}}async function yh(n){try{const e=await navigator.credentials.get(n);return e?e instanceof PublicKeyCredential?{data:e,error:null}:{data:null,error:new Ks("Browser returned unexpected credential type",e)}:{data:null,error:new Ks("Empty credential response",e)}}catch(e){return{data:null,error:xy({error:e,options:n})}}}const wy={hints:["security-key"],authenticatorSelection:{authenticatorAttachment:"cross-platform",requireResidentKey:!1,userVerification:"preferred",residentKey:"discouraged"},attestation:"direct"},by={userVerification:"preferred",hints:["security-key"],attestation:"direct"};function Js(...n){const e=r=>r!==null&&typeof r=="object"&&!Array.isArray(r),t=r=>r instanceof ArrayBuffer||ArrayBuffer.isView(r),i={};for(const r of n)if(r)for(const s in r){const a=r[s];if(a!==void 0)if(Array.isArray(a))i[s]=a;else if(t(a))i[s]=a;else if(e(a)){const o=i[s];e(o)?i[s]=Js(o,a):i[s]=Js(a)}else i[s]=a}return i}function Ay(n,e){return Js(wy,n,e||{})}function Ty(n,e){return Js(by,n,e||{})}class My{constructor(e){this.client=e,this.enroll=this._enroll.bind(this),this.challenge=this._challenge.bind(this),this.verify=this._verify.bind(this),this.authenticate=this._authenticate.bind(this),this.register=this._register.bind(this)}async _enroll(e){return this.client.mfa.enroll(Object.assign(Object.assign({},e),{factorType:"webauthn"}))}async _challenge({factorId:e,webauthn:t,friendlyName:i,signal:r},s){var a;try{const{data:o,error:l}=await this.client.mfa.challenge({factorId:e,webauthn:t});if(!o)return{data:null,error:l};const c=r??tl.createNewAbortSignal();if(o.webauthn.type==="create"){const{user:u}=o.webauthn.credential_options.publicKey;if(!u.name){const h=i;if(h)u.name=`${u.id}:${h}`;else{const f=(await this.client.getUser()).data.user,g=((a=f==null?void 0:f.user_metadata)===null||a===void 0?void 0:a.name)||(f==null?void 0:f.email)||(f==null?void 0:f.id)||"User";u.name=`${u.id}:${g}`}}u.displayName||(u.displayName=u.name)}switch(o.webauthn.type){case"create":{const u=Ay(o.webauthn.credential_options.publicKey,s==null?void 0:s.create),{data:h,error:d}=await vh({publicKey:u,signal:c});return h?{data:{factorId:e,challengeId:o.id,webauthn:{type:o.webauthn.type,credential_response:h}},error:null}:{data:null,error:d}}case"request":{const u=Ty(o.webauthn.credential_options.publicKey,s==null?void 0:s.request),{data:h,error:d}=await yh(Object.assign(Object.assign({},o.webauthn.credential_options),{publicKey:u,signal:c}));return h?{data:{factorId:e,challengeId:o.id,webauthn:{type:o.webauthn.type,credential_response:h}},error:null}:{data:null,error:d}}}}catch(o){return ae(o)?{data:null,error:o}:{data:null,error:new an("Unexpected error in challenge",o)}}}async _verify({challengeId:e,factorId:t,webauthn:i}){return this.client.mfa.verify({factorId:t,challengeId:e,webauthn:i})}async _authenticate({factorId:e,webauthn:{rpId:t=typeof window<"u"?window.location.hostname:void 0,rpOrigins:i=typeof window<"u"?[window.location.origin]:void 0,signal:r}={}},s){if(!t)return{data:null,error:new Ur("rpId is required for WebAuthn authentication")};try{if(!Ys())return{data:null,error:new an("Browser does not support WebAuthn",null)};const{data:a,error:o}=await this.challenge({factorId:e,webauthn:{rpId:t,rpOrigins:i},signal:r},{request:s});if(!a)return{data:null,error:o};const{webauthn:l}=a;return this._verify({factorId:e,challengeId:a.challengeId,webauthn:{type:l.type,rpId:t,rpOrigins:i,credential_response:l.credential_response}})}catch(a){return ae(a)?{data:null,error:a}:{data:null,error:new an("Unexpected error in authenticate",a)}}}async _register({friendlyName:e,webauthn:{rpId:t=typeof window<"u"?window.location.hostname:void 0,rpOrigins:i=typeof window<"u"?[window.location.origin]:void 0,signal:r}={}},s){if(!t)return{data:null,error:new Ur("rpId is required for WebAuthn registration")};try{if(!Ys())return{data:null,error:new an("Browser does not support WebAuthn",null)};const{data:a,error:o}=await this._enroll({friendlyName:e});if(!a)return await this.client.mfa.listFactors().then(u=>{var h;return(h=u.data)===null||h===void 0?void 0:h.all.find(d=>d.factor_type==="webauthn"&&d.friendly_name===e&&d.status!=="unverified")}).then(u=>u?this.client.mfa.unenroll({factorId:u==null?void 0:u.id}):void 0),{data:null,error:o};const{data:l,error:c}=await this._challenge({factorId:a.id,friendlyName:a.friendly_name,webauthn:{rpId:t,rpOrigins:i},signal:r},{create:s});return l?this._verify({factorId:a.id,challengeId:l.challengeId,webauthn:{rpId:t,rpOrigins:i,type:l.webauthn.type,credential_response:l.webauthn.credential_response}}):{data:null,error:c}}catch(a){return ae(a)?{data:null,error:a}:{data:null,error:new an("Unexpected error in register",a)}}}}gy();const Ry={url:L0,storageKey:O0,autoRefreshToken:!0,persistSession:!0,detectSessionInUrl:!0,headers:I0,flowType:"implicit",debug:!1,hasCustomAuthorizationHeader:!1,throwOnError:!1,lockAcquireTimeout:5e3,skipAutoInitialize:!1,experimental:{}},Bi={};class Nr{get jwks(){var e,t;return(t=(e=Bi[this.storageKey])===null||e===void 0?void 0:e.jwks)!==null&&t!==void 0?t:{keys:[]}}set jwks(e){Bi[this.storageKey]=Object.assign(Object.assign({},Bi[this.storageKey]),{jwks:e})}get jwks_cached_at(){var e,t;return(t=(e=Bi[this.storageKey])===null||e===void 0?void 0:e.cachedAt)!==null&&t!==void 0?t:Number.MIN_SAFE_INTEGER}set jwks_cached_at(e){Bi[this.storageKey]=Object.assign(Object.assign({},Bi[this.storageKey]),{cachedAt:e})}constructor(e){var t,i,r;this.userStorage=null,this.memoryStorage=null,this.stateChangeEmitters=new Map,this.autoRefreshTicker=null,this.autoRefreshTickTimeout=null,this.visibilityChangedCallback=null,this.refreshingDeferred=null,this.lastRefreshFailure=null,this._sessionRemovalEpoch=0,this.initializePromise=null,this._pendingInitNotifications=null,this.detectSessionInUrl=!0,this.hasCustomAuthorizationHeader=!1,this.suppressGetSessionWarning=!1,this.lock=null,this.lockAcquired=!1,this.pendingInLock=[],this.broadcastChannel=null,this.logger=console.log;const s=Object.assign(Object.assign({},Ry),e);if(this.storageKey=s.storageKey,this.instanceID=(t=Nr.nextInstanceID[this.storageKey])!==null&&t!==void 0?t:0,Nr.nextInstanceID[this.storageKey]=this.instanceID+1,this.logDebugMessages=!!s.debug,typeof s.debug=="function"&&(this.logger=s.debug),this.instanceID>0&&Et()){const a=`${this._logPrefix()} Multiple GoTrueClient instances detected in the same browser context. It is not an error, but this should be avoided as it may produce undefined behavior when used concurrently under the same storage key.`;console.warn(a),this.logDebugMessages&&console.trace(a)}if(this.persistSession=s.persistSession,this.autoRefreshToken=s.autoRefreshToken,this.experimental=(i=s.experimental)!==null&&i!==void 0?i:{},this.admin=new py({url:s.url,headers:s.headers,fetch:s.fetch,experimental:this.experimental}),this.url=s.url,this.headers=s.headers,this.fetch=mh(s.fetch),this.detectSessionInUrl=s.detectSessionInUrl,this.flowType=s.flowType,this.hasCustomAuthorizationHeader=s.hasCustomAuthorizationHeader,this.throwOnError=s.throwOnError,this.lockAcquireTimeout=s.lockAcquireTimeout,s.lock!=null&&(this.lock=s.lock),this.jwks||(this.jwks={keys:[]},this.jwks_cached_at=Number.MIN_SAFE_INTEGER),this.mfa={verify:this._verify.bind(this),enroll:this._enroll.bind(this),unenroll:this._unenroll.bind(this),challenge:this._challenge.bind(this),listFactors:this._listFactors.bind(this),challengeAndVerify:this._challengeAndVerify.bind(this),getAuthenticatorAssuranceLevel:this._getAuthenticatorAssuranceLevel.bind(this),webauthn:new My(this)},this.oauth={getAuthorizationDetails:this._getAuthorizationDetails.bind(this),approveAuthorization:this._approveAuthorization.bind(this),denyAuthorization:this._denyAuthorization.bind(this),listGrants:this._listOAuthGrants.bind(this),revokeGrant:this._revokeOAuthGrant.bind(this)},this.passkey={startRegistration:this._startPasskeyRegistration.bind(this),verifyRegistration:this._verifyPasskeyRegistration.bind(this),startAuthentication:this._startPasskeyAuthentication.bind(this),verifyAuthentication:this._verifyPasskeyAuthentication.bind(this),list:this._listPasskeys.bind(this),update:this._updatePasskey.bind(this),delete:this._deletePasskey.bind(this)},this.persistSession?(s.storage?this.storage=s.storage:ph()?this.storage=globalThis.localStorage:(this.memoryStorage={},this.storage=Qc(this.memoryStorage)),s.userStorage&&(this.userStorage=s.userStorage)):(this.memoryStorage={},this.storage=Qc(this.memoryStorage)),Et()&&globalThis.BroadcastChannel&&this.persistSession&&this.storageKey){try{this.broadcastChannel=new globalThis.BroadcastChannel(this.storageKey)}catch(a){console.error("Failed to create a new BroadcastChannel, multi-tab state changes will not be available",a)}(r=this.broadcastChannel)===null||r===void 0||r.addEventListener("message",async a=>{this._debug("received broadcast notification from other tab or client",a),(a.data.event==="TOKEN_REFRESHED"||a.data.event==="SIGNED_IN")&&(this.lastRefreshFailure=null);try{await this._notifyAllSubscribers(a.data.event,a.data.session,!1)}catch(o){this._debug("#broadcastChannel","error",o)}})}s.skipAutoInitialize||this.initialize().catch(a=>{this._debug("#initialize()","error",a)})}isThrowOnErrorEnabled(){return this.throwOnError}_returnResult(e){if(this.throwOnError&&e&&e.error)throw e.error;return e}_logPrefix(){return`GoTrueClient@${this.storageKey}:${this.instanceID} (${hh}) ${new Date().toISOString()}`}_debug(...e){return this.logDebugMessages&&this.logger(this._logPrefix(),...e),this}async initialize(){var e;if(this.initializePromise)return await this.initializePromise;this._pendingInitNotifications=[],this.initializePromise=(async()=>this.lock!=null?await this._acquireLock(this.lockAcquireTimeout,async()=>await this._initialize()):await this._initialize())();const t=await this.initializePromise,i=(e=this._pendingInitNotifications)!==null&&e!==void 0?e:[];this._pendingInitNotifications=null;for(const r of i)await this._notifyAllSubscribers(r.event,r.session,r.broadcast);return t}async _initialize(){var e;try{let t={},i="none";if(Et()&&(t=X0(window.location.href),this._isImplicitGrantCallback(t)?i="implicit":await this._isPKCECallback(t)&&(i="pkce")),Et()&&this.detectSessionInUrl&&i!=="none"){const{data:r,error:s}=await this._getSessionFromURL(t,i);if(s){if(this._debug("#_initialize()","error detecting session from URL",s),F0(s)){const l=(e=s.details)===null||e===void 0?void 0:e.code;if(l==="identity_already_exists"||l==="identity_not_found"||l==="single_identity_not_deletable")return{error:s}}return{error:s}}const{session:a,redirectType:o}=r;return this._debug("#_initialize()","detected session in URL",a,"redirect type",o),await this._saveSession(a),setTimeout(async()=>{o==="recovery"?await this._notifyAllSubscribers("PASSWORD_RECOVERY",a):await this._notifyAllSubscribers("SIGNED_IN",a)},0),{error:null}}return await this._recoverAndRefresh(),{error:null}}catch(t){return ae(t)?this._returnResult({error:t}):this._returnResult({error:new an("Unexpected error during initialization",t)})}finally{await this._handleVisibilityChange(),this._debug("#_initialize()","end")}}async signInAnonymously(e){var t,i,r;try{const s=await ge(this.fetch,"POST",`${this.url}/signup`,{headers:this.headers,body:{data:(i=(t=e==null?void 0:e.options)===null||t===void 0?void 0:t.data)!==null&&i!==void 0?i:{},gotrue_meta_security:{captcha_token:(r=e==null?void 0:e.options)===null||r===void 0?void 0:r.captchaToken}},xform:Vt}),{data:a,error:o}=s;if(o||!a)return this._returnResult({data:{user:null,session:null},error:o});const l=a.session,c=a.user;return a.session&&(await this._saveSession(a.session),await this._notifyAllSubscribers("SIGNED_IN",l)),this._returnResult({data:{user:c,session:l},error:null})}catch(s){if(ae(s))return this._returnResult({data:{user:null,session:null},error:s});throw s}}async signUp(e){var t,i,r;try{let s;if("email"in e){const{email:u,password:h,options:d}=e;let f=null,g=null;this.flowType==="pkce"&&([f,g]=await ai(this.storage,this.storageKey)),s=await ge(this.fetch,"POST",`${this.url}/signup`,{headers:this.headers,redirectTo:d==null?void 0:d.emailRedirectTo,body:{email:u,password:h,data:(t=d==null?void 0:d.data)!==null&&t!==void 0?t:{},gotrue_meta_security:{captcha_token:d==null?void 0:d.captchaToken},code_challenge:f,code_challenge_method:g},xform:Vt})}else if("phone"in e){const{phone:u,password:h,options:d}=e;s=await ge(this.fetch,"POST",`${this.url}/signup`,{headers:this.headers,body:{phone:u,password:h,data:(i=d==null?void 0:d.data)!==null&&i!==void 0?i:{},channel:(r=d==null?void 0:d.channel)!==null&&r!==void 0?r:"sms",gotrue_meta_security:{captcha_token:d==null?void 0:d.captchaToken}},xform:Vt})}else throw new Ts("You must provide either an email or phone number and a password");const{data:a,error:o}=s;if(o||!a)return await lt(this.storage,`${this.storageKey}-code-verifier`),this._returnResult({data:{user:null,session:null},error:o});const l=a.session,c=a.user;return a.session&&(await this._saveSession(a.session),await this._notifyAllSubscribers("SIGNED_IN",l)),this._returnResult({data:{user:c,session:l},error:null})}catch(s){if(await lt(this.storage,`${this.storageKey}-code-verifier`),ae(s))return this._returnResult({data:{user:null,session:null},error:s});throw s}}async signInWithPassword(e){try{let t;if("email"in e){const{email:s,password:a,options:o}=e;t=await ge(this.fetch,"POST",`${this.url}/token?grant_type=password`,{headers:this.headers,body:{email:s,password:a,gotrue_meta_security:{captcha_token:o==null?void 0:o.captchaToken}},xform:Jc})}else if("phone"in e){const{phone:s,password:a,options:o}=e;t=await ge(this.fetch,"POST",`${this.url}/token?grant_type=password`,{headers:this.headers,body:{phone:s,password:a,gotrue_meta_security:{captcha_token:o==null?void 0:o.captchaToken}},xform:Jc})}else throw new Ts("You must provide either an email or phone number and a password");const{data:i,error:r}=t;if(r)return this._returnResult({data:{user:null,session:null},error:r});if(!i||!i.session||!i.user){const s=new Fi;return this._returnResult({data:{user:null,session:null},error:s})}return i.session&&(await this._saveSession(i.session),await this._notifyAllSubscribers("SIGNED_IN",i.session)),this._returnResult({data:Object.assign({user:i.user,session:i.session},i.weak_password?{weakPassword:i.weak_password}:null),error:r})}catch(t){if(ae(t))return this._returnResult({data:{user:null,session:null},error:t});throw t}}async signInWithOAuth(e){var t,i,r,s;return await this._handleProviderSignIn(e.provider,{redirectTo:(t=e.options)===null||t===void 0?void 0:t.redirectTo,scopes:(i=e.options)===null||i===void 0?void 0:i.scopes,queryParams:(r=e.options)===null||r===void 0?void 0:r.queryParams,skipBrowserRedirect:(s=e.options)===null||s===void 0?void 0:s.skipBrowserRedirect})}async exchangeCodeForSession(e){return await this.initializePromise,this.lock!=null?this._acquireLock(this.lockAcquireTimeout,async()=>this._exchangeCodeForSession(e)):this._exchangeCodeForSession(e)}async signInWithWeb3(e){const{chain:t}=e;switch(t){case"ethereum":return await this.signInWithEthereum(e);case"solana":return await this.signInWithSolana(e);default:throw new Error(`@supabase/auth-js: Unsupported chain "${t}"`)}}async signInWithEthereum(e){var t,i,r,s,a,o,l,c,u,h,d;let f,g;if("message"in e)f=e.message,g=e.signature;else{const{chain:_,wallet:p,statement:m,options:S}=e;let y;if(Et())if(typeof p=="object")y=p;else{const D=window;if("ethereum"in D&&typeof D.ethereum=="object"&&"request"in D.ethereum&&typeof D.ethereum.request=="function")y=D.ethereum;else throw new Error("@supabase/auth-js: No compatible Ethereum wallet interface on the window object (window.ethereum) detected. Make sure the user already has a wallet installed and connected for this app. Prefer passing the wallet interface object directly to signInWithWeb3({ chain: 'ethereum', wallet: resolvedUserWallet }) instead.")}else{if(typeof p!="object"||!(S!=null&&S.url))throw new Error("@supabase/auth-js: Both wallet and url must be specified in non-browser environments.");y=p}const b=new URL((t=S==null?void 0:S.url)!==null&&t!==void 0?t:window.location.href),M=await y.request({method:"eth_requestAccounts"}).then(D=>D).catch(()=>{throw new Error("@supabase/auth-js: Wallet method eth_requestAccounts is missing or invalid")});if(!M||M.length===0)throw new Error("@supabase/auth-js: No accounts available. Please ensure the wallet is connected.");const T=gh(M[0]);let A=(i=S==null?void 0:S.signInWithEthereum)===null||i===void 0?void 0:i.chainId;if(!A){const D=await y.request({method:"eth_chainId"});A=_y(D)}const C={domain:b.host,address:T,statement:m,uri:b.href,version:"1",chainId:A,nonce:(r=S==null?void 0:S.signInWithEthereum)===null||r===void 0?void 0:r.nonce,issuedAt:(a=(s=S==null?void 0:S.signInWithEthereum)===null||s===void 0?void 0:s.issuedAt)!==null&&a!==void 0?a:new Date,expirationTime:(o=S==null?void 0:S.signInWithEthereum)===null||o===void 0?void 0:o.expirationTime,notBefore:(l=S==null?void 0:S.signInWithEthereum)===null||l===void 0?void 0:l.notBefore,requestId:(c=S==null?void 0:S.signInWithEthereum)===null||c===void 0?void 0:c.requestId,resources:(u=S==null?void 0:S.signInWithEthereum)===null||u===void 0?void 0:u.resources};f=yy(C),g=await y.request({method:"personal_sign",params:[vy(f),T]})}try{const{data:_,error:p}=await ge(this.fetch,"POST",`${this.url}/token?grant_type=web3`,{headers:this.headers,body:Object.assign({chain:"ethereum",message:f,signature:g},!((h=e.options)===null||h===void 0)&&h.captchaToken?{gotrue_meta_security:{captcha_token:(d=e.options)===null||d===void 0?void 0:d.captchaToken}}:null),xform:Vt});if(p)throw p;if(!_||!_.session||!_.user){const m=new Fi;return this._returnResult({data:{user:null,session:null},error:m})}return _.session&&(await this._saveSession(_.session),await this._notifyAllSubscribers("SIGNED_IN",_.session)),this._returnResult({data:Object.assign({},_),error:p})}catch(_){if(ae(_))return this._returnResult({data:{user:null,session:null},error:_});throw _}}async signInWithSolana(e){var t,i,r,s,a,o,l,c,u,h,d,f;let g,_;if("message"in e)g=e.message,_=e.signature;else{const{chain:p,wallet:m,statement:S,options:y}=e;let b;if(Et())if(typeof m=="object")b=m;else{const T=window;if("solana"in T&&typeof T.solana=="object"&&("signIn"in T.solana&&typeof T.solana.signIn=="function"||"signMessage"in T.solana&&typeof T.solana.signMessage=="function"))b=T.solana;else throw new Error("@supabase/auth-js: No compatible Solana wallet interface on the window object (window.solana) detected. Make sure the user already has a wallet installed and connected for this app. Prefer passing the wallet interface object directly to signInWithWeb3({ chain: 'solana', wallet: resolvedUserWallet }) instead.")}else{if(typeof m!="object"||!(y!=null&&y.url))throw new Error("@supabase/auth-js: Both wallet and url must be specified in non-browser environments.");b=m}const M=new URL((t=y==null?void 0:y.url)!==null&&t!==void 0?t:window.location.href);if("signIn"in b&&b.signIn){const T=await b.signIn(Object.assign(Object.assign(Object.assign({issuedAt:new Date().toISOString()},y==null?void 0:y.signInWithSolana),{version:"1",domain:M.host,uri:M.href}),S?{statement:S}:null));let A;if(Array.isArray(T)&&T[0]&&typeof T[0]=="object")A=T[0];else if(T&&typeof T=="object"&&"signedMessage"in T&&"signature"in T)A=T;else throw new Error("@supabase/auth-js: Wallet method signIn() returned unrecognized value");if("signedMessage"in A&&"signature"in A&&(typeof A.signedMessage=="string"||A.signedMessage instanceof Uint8Array)&&A.signature instanceof Uint8Array)g=typeof A.signedMessage=="string"?A.signedMessage:new TextDecoder().decode(A.signedMessage),_=A.signature;else throw new Error("@supabase/auth-js: Wallet method signIn() API returned object without signedMessage and signature fields")}else{if(!("signMessage"in b)||typeof b.signMessage!="function"||!("publicKey"in b)||typeof b!="object"||!b.publicKey||!("toBase58"in b.publicKey)||typeof b.publicKey.toBase58!="function")throw new Error("@supabase/auth-js: Wallet does not have a compatible signMessage() and publicKey.toBase58() API");g=[`${M.host} wants you to sign in with your Solana account:`,b.publicKey.toBase58(),...S?["",S,""]:[""],"Version: 1",`URI: ${M.href}`,`Issued At: ${(r=(i=y==null?void 0:y.signInWithSolana)===null||i===void 0?void 0:i.issuedAt)!==null&&r!==void 0?r:new Date().toISOString()}`,...!((s=y==null?void 0:y.signInWithSolana)===null||s===void 0)&&s.notBefore?[`Not Before: ${y.signInWithSolana.notBefore}`]:[],...!((a=y==null?void 0:y.signInWithSolana)===null||a===void 0)&&a.expirationTime?[`Expiration Time: ${y.signInWithSolana.expirationTime}`]:[],...!((o=y==null?void 0:y.signInWithSolana)===null||o===void 0)&&o.chainId?[`Chain ID: ${y.signInWithSolana.chainId}`]:[],...!((l=y==null?void 0:y.signInWithSolana)===null||l===void 0)&&l.nonce?[`Nonce: ${y.signInWithSolana.nonce}`]:[],...!((c=y==null?void 0:y.signInWithSolana)===null||c===void 0)&&c.requestId?[`Request ID: ${y.signInWithSolana.requestId}`]:[],...!((h=(u=y==null?void 0:y.signInWithSolana)===null||u===void 0?void 0:u.resources)===null||h===void 0)&&h.length?["Resources",...y.signInWithSolana.resources.map(A=>`- ${A}`)]:[]].join(`
`);const T=await b.signMessage(new TextEncoder().encode(g),"utf8");if(!T||!(T instanceof Uint8Array))throw new Error("@supabase/auth-js: Wallet signMessage() API returned an recognized value");_=T}}try{const{data:p,error:m}=await ge(this.fetch,"POST",`${this.url}/token?grant_type=web3`,{headers:this.headers,body:Object.assign({chain:"solana",message:g,signature:mi(_)},!((d=e.options)===null||d===void 0)&&d.captchaToken?{gotrue_meta_security:{captcha_token:(f=e.options)===null||f===void 0?void 0:f.captchaToken}}:null),xform:Vt});if(m)throw m;if(!p||!p.session||!p.user){const S=new Fi;return this._returnResult({data:{user:null,session:null},error:S})}return p.session&&(await this._saveSession(p.session),await this._notifyAllSubscribers("SIGNED_IN",p.session)),this._returnResult({data:Object.assign({},p),error:m})}catch(p){if(ae(p))return this._returnResult({data:{user:null,session:null},error:p});throw p}}async _exchangeCodeForSession(e){const t=await Qt(this.storage,`${this.storageKey}-code-verifier`),[i,r]=(t??"").split("/");try{if(!i&&this.flowType==="pkce")throw new B0;const{data:s,error:a}=await ge(this.fetch,"POST",`${this.url}/token?grant_type=pkce`,{headers:this.headers,body:{auth_code:e,code_verifier:i},xform:Vt});if(await lt(this.storage,`${this.storageKey}-code-verifier`),a)throw a;if(!s||!s.session||!s.user){const o=new Fi;return this._returnResult({data:{user:null,session:null,redirectType:null},error:o})}return s.session&&(await this._saveSession(s.session),await this._notifyAllSubscribers(r==="recovery"?"PASSWORD_RECOVERY":"SIGNED_IN",s.session)),this._returnResult({data:Object.assign(Object.assign({},s),{redirectType:r??null}),error:a})}catch(s){if(await lt(this.storage,`${this.storageKey}-code-verifier`),ae(s))return this._returnResult({data:{user:null,session:null,redirectType:null},error:s});throw s}}async signInWithIdToken(e){try{const{options:t,provider:i,token:r,access_token:s,nonce:a}=e,o=await ge(this.fetch,"POST",`${this.url}/token?grant_type=id_token`,{headers:this.headers,body:{provider:i,id_token:r,access_token:s,nonce:a,gotrue_meta_security:{captcha_token:t==null?void 0:t.captchaToken}},xform:Vt}),{data:l,error:c}=o;if(c)return this._returnResult({data:{user:null,session:null},error:c});if(!l||!l.session||!l.user){const u=new Fi;return this._returnResult({data:{user:null,session:null},error:u})}return l.session&&(await this._saveSession(l.session),await this._notifyAllSubscribers("SIGNED_IN",l.session)),this._returnResult({data:l,error:c})}catch(t){if(ae(t))return this._returnResult({data:{user:null,session:null},error:t});throw t}}async signInWithOtp(e){var t,i,r,s,a;try{if("email"in e){const{email:o,options:l}=e;let c=null,u=null;this.flowType==="pkce"&&([c,u]=await ai(this.storage,this.storageKey));const{error:h}=await ge(this.fetch,"POST",`${this.url}/otp`,{headers:this.headers,body:{email:o,data:(t=l==null?void 0:l.data)!==null&&t!==void 0?t:{},create_user:(i=l==null?void 0:l.shouldCreateUser)!==null&&i!==void 0?i:!0,gotrue_meta_security:{captcha_token:l==null?void 0:l.captchaToken},code_challenge:c,code_challenge_method:u},redirectTo:l==null?void 0:l.emailRedirectTo});return this._returnResult({data:{user:null,session:null},error:h})}if("phone"in e){const{phone:o,options:l}=e,{data:c,error:u}=await ge(this.fetch,"POST",`${this.url}/otp`,{headers:this.headers,body:{phone:o,data:(r=l==null?void 0:l.data)!==null&&r!==void 0?r:{},create_user:(s=l==null?void 0:l.shouldCreateUser)!==null&&s!==void 0?s:!0,gotrue_meta_security:{captcha_token:l==null?void 0:l.captchaToken},channel:(a=l==null?void 0:l.channel)!==null&&a!==void 0?a:"sms"}});return this._returnResult({data:{user:null,session:null,messageId:c==null?void 0:c.message_id},error:u})}throw new Ts("You must provide either an email or phone number.")}catch(o){if(await lt(this.storage,`${this.storageKey}-code-verifier`),ae(o))return this._returnResult({data:{user:null,session:null},error:o});throw o}}async verifyOtp(e){var t,i;try{let r,s;"options"in e&&(r=(t=e.options)===null||t===void 0?void 0:t.redirectTo,s=(i=e.options)===null||i===void 0?void 0:i.captchaToken);const{data:a,error:o}=await ge(this.fetch,"POST",`${this.url}/verify`,{headers:this.headers,body:Object.assign(Object.assign({},e),{gotrue_meta_security:{captcha_token:s}}),redirectTo:r,xform:Vt});if(o)throw o;if(!a)throw new Error("An error occurred on token verification.");const l=a.session,c=a.user;return l!=null&&l.access_token&&(await this._saveSession(l),await this._notifyAllSubscribers(e.type=="recovery"?"PASSWORD_RECOVERY":"SIGNED_IN",l)),this._returnResult({data:{user:c,session:l},error:null})}catch(r){if(ae(r))return this._returnResult({data:{user:null,session:null},error:r});throw r}}async signInWithSSO(e){var t,i,r,s,a;try{let o=null,l=null;this.flowType==="pkce"&&([o,l]=await ai(this.storage,this.storageKey));const c=await ge(this.fetch,"POST",`${this.url}/sso`,{body:Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},"providerId"in e?{provider_id:e.providerId}:null),"domain"in e?{domain:e.domain}:null),{redirect_to:(i=(t=e.options)===null||t===void 0?void 0:t.redirectTo)!==null&&i!==void 0?i:void 0}),!((r=e==null?void 0:e.options)===null||r===void 0)&&r.captchaToken?{gotrue_meta_security:{captcha_token:e.options.captchaToken}}:null),{skip_http_redirect:!0,code_challenge:o,code_challenge_method:l}),headers:this.headers,xform:hy});return!((s=c.data)===null||s===void 0)&&s.url&&Et()&&!(!((a=e.options)===null||a===void 0)&&a.skipBrowserRedirect)&&window.location.assign(c.data.url),this._returnResult(c)}catch(o){if(await lt(this.storage,`${this.storageKey}-code-verifier`),ae(o))return this._returnResult({data:null,error:o});throw o}}async reauthenticate(){return await this.initializePromise,this.lock!=null?await this._acquireLock(this.lockAcquireTimeout,async()=>await this._reauthenticate()):await this._reauthenticate()}async _reauthenticate(){try{return await this._useSession(async e=>{const{data:{session:t},error:i}=e;if(i)throw i;if(!t)throw new _t;const{error:r}=await ge(this.fetch,"GET",`${this.url}/reauthenticate`,{headers:this.headers,jwt:t.access_token});return this._returnResult({data:{user:null,session:null},error:r})})}catch(e){if(ae(e))return this._returnResult({data:{user:null,session:null},error:e});throw e}}async resend(e){try{const t=`${this.url}/resend`;if("email"in e){const{email:i,type:r,options:s}=e;let a=null,o=null;this.flowType==="pkce"&&([a,o]=await ai(this.storage,this.storageKey));const{error:l}=await ge(this.fetch,"POST",t,{headers:this.headers,body:{email:i,type:r,gotrue_meta_security:{captcha_token:s==null?void 0:s.captchaToken},code_challenge:a,code_challenge_method:o},redirectTo:s==null?void 0:s.emailRedirectTo});return l&&await lt(this.storage,`${this.storageKey}-code-verifier`),this._returnResult({data:{user:null,session:null},error:l})}else if("phone"in e){const{phone:i,type:r,options:s}=e,{data:a,error:o}=await ge(this.fetch,"POST",t,{headers:this.headers,body:{phone:i,type:r,gotrue_meta_security:{captcha_token:s==null?void 0:s.captchaToken}}});return this._returnResult({data:{user:null,session:null,messageId:a==null?void 0:a.message_id},error:o})}throw new Ts("You must provide either an email or phone number and a type")}catch(t){if(await lt(this.storage,`${this.storageKey}-code-verifier`),ae(t))return this._returnResult({data:{user:null,session:null},error:t});throw t}}async getSession(){return await this.initializePromise,this.lock!=null?await this._acquireLock(this.lockAcquireTimeout,async()=>this._useSession(async e=>e)):await this._useSession(async e=>e)}async _acquireLock(e,t){this._debug("#_acquireLock","begin",e);try{if(this.lockAcquired){const i=this.pendingInLock.length?this.pendingInLock[this.pendingInLock.length-1]:Promise.resolve(),r=(async()=>(await i,await t()))();return this.pendingInLock.push((async()=>{try{await r}catch{}})()),r}return await this.lock(`lock:${this.storageKey}`,e,async()=>{this._debug("#_acquireLock","lock acquired for storage key",this.storageKey);try{this.lockAcquired=!0;const i=t();for(this.pendingInLock.push((async()=>{try{await i}catch{}})()),await i;this.pendingInLock.length;){const r=[...this.pendingInLock];await Promise.all(r),this.pendingInLock.splice(0,r.length)}return await i}finally{this._debug("#_acquireLock","lock released for storage key",this.storageKey),this.lockAcquired=!1}})}finally{this._debug("#_acquireLock","end")}}async _useSession(e){this._debug("#_useSession","begin");try{const t=await this.__loadSession();return await e(t)}finally{this._debug("#_useSession","end")}}async __loadSession(){this._debug("#__loadSession()","begin"),this.lock!=null&&!this.lockAcquired&&this._debug("#__loadSession()","used outside of an acquired lock!",new Error().stack);try{let e=null;const t=await Qt(this.storage,this.storageKey);if(this._debug("#getSession()","session from storage",t),t!==null&&(this._isValidSession(t)?e=t:(this._debug("#getSession()","session from storage is not valid"),await this._removeSession())),!e)return{data:{session:null},error:null};const i=e.expires_at?e.expires_at*1e3-Date.now()<ja:!1;if(this._debug("#__loadSession()",`session has${i?"":" not"} expired`,"expires_at",e.expires_at),!i){if(this.userStorage){const a=await Qt(this.userStorage,this.storageKey+"-user");a!=null&&a.user?e.user=a.user:e.user=qa()}if(this.storage.isServer&&e.user&&!e.user.__isUserNotAvailableProxy){const a={value:this.suppressGetSessionWarning};e.user=oy(e.user,a),a.value&&(this.suppressGetSessionWarning=!0)}return{data:{session:e},error:null}}const{data:r,error:s}=await this._callRefreshToken(e.refresh_token);if(s){if(!!(e.expires_at&&e.expires_at*1e3>Date.now())){const o=await Qt(this.storage,this.storageKey);if(o&&o.refresh_token===e.refresh_token)return this._returnResult({data:{session:e},error:null})}return this._returnResult({data:{session:null},error:s})}return this._returnResult({data:{session:r},error:null})}finally{this._debug("#__loadSession()","end")}}async getUser(e){if(e)return await this._getUser(e);await this.initializePromise;let t;return this.lock!=null?t=await this._acquireLock(this.lockAcquireTimeout,async()=>await this._getUser()):t=await this._getUser(),t.data.user&&(this.suppressGetSessionWarning=!0),t}async _getUser(e){try{return e?await ge(this.fetch,"GET",`${this.url}/user`,{headers:this.headers,jwt:e,xform:Wn}):await this._useSession(async t=>{var i,r,s;const{data:a,error:o}=t;if(o)throw o;return!(!((i=a.session)===null||i===void 0)&&i.access_token)&&!this.hasCustomAuthorizationHeader?{data:{user:null},error:new _t}:await ge(this.fetch,"GET",`${this.url}/user`,{headers:this.headers,jwt:(s=(r=a.session)===null||r===void 0?void 0:r.access_token)!==null&&s!==void 0?s:void 0,xform:Wn})})}catch(t){if(ae(t))return As(t)&&(await this._removeSession(),await lt(this.storage,`${this.storageKey}-code-verifier`)),this._returnResult({data:{user:null},error:t});throw t}}async updateUser(e,t={}){return await this.initializePromise,this.lock!=null?await this._acquireLock(this.lockAcquireTimeout,async()=>await this._updateUser(e,t)):await this._updateUser(e,t)}async _updateUser(e,t={}){try{return await this._useSession(async i=>{const{data:r,error:s}=i;if(s)throw s;if(!r.session)throw new _t;const a=r.session;let o=null,l=null;this.flowType==="pkce"&&e.email!=null&&([o,l]=await ai(this.storage,this.storageKey));const{data:c,error:u}=await ge(this.fetch,"PUT",`${this.url}/user`,{headers:this.headers,redirectTo:t==null?void 0:t.emailRedirectTo,body:Object.assign(Object.assign({},e),{code_challenge:o,code_challenge_method:l}),jwt:a.access_token,xform:Wn});if(u)throw u;return a.user=c.user,await this._saveSession(a),await this._notifyAllSubscribers("USER_UPDATED",a),this._returnResult({data:{user:a.user},error:null})})}catch(i){if(await lt(this.storage,`${this.storageKey}-code-verifier`),ae(i))return this._returnResult({data:{user:null},error:i});throw i}}async setSession(e){return await this.initializePromise,this.lock!=null?await this._acquireLock(this.lockAcquireTimeout,async()=>await this._setSession(e)):await this._setSession(e)}async _setSession(e){try{if(!e.access_token||!e.refresh_token)throw new _t;const t=Date.now()/1e3;let i=t,r=!0,s=null;const{payload:a}=Rs(e.access_token);if(a.exp&&(i=a.exp,r=i<=t),r){const{data:o,error:l}=await this._callRefreshToken(e.refresh_token);if(l)return this._returnResult({data:{user:null,session:null},error:l});if(!o)return{data:{user:null,session:null},error:null};s=o}else{const{data:o,error:l}=await this._getUser(e.access_token);if(l)return this._returnResult({data:{user:null,session:null},error:l});s={access_token:e.access_token,refresh_token:e.refresh_token,user:o.user,token_type:"bearer",expires_in:i-t,expires_at:i},await this._saveSession(s),await this._notifyAllSubscribers("SIGNED_IN",s)}return this._returnResult({data:{user:s.user,session:s},error:null})}catch(t){if(ae(t))return this._returnResult({data:{session:null,user:null},error:t});throw t}}async refreshSession(e){return await this.initializePromise,this.lock!=null?await this._acquireLock(this.lockAcquireTimeout,async()=>await this._refreshSession(e)):await this._refreshSession(e)}async _refreshSession(e){try{return await this._useSession(async t=>{var i;if(!e){const{data:a,error:o}=t;if(o)throw o;e=(i=a.session)!==null&&i!==void 0?i:void 0}if(!(e!=null&&e.refresh_token))throw new _t;const{data:r,error:s}=await this._callRefreshToken(e.refresh_token);return s?this._returnResult({data:{user:null,session:null},error:s}):r?this._returnResult({data:{user:r.user,session:r},error:null}):this._returnResult({data:{user:null,session:null},error:null})})}catch(t){if(ae(t))return this._returnResult({data:{user:null,session:null},error:t});throw t}}async _getSessionFromURL(e,t){var i;try{if(!Et())throw new Ms("No browser detected.");if(e.error||e.error_description||e.error_code)throw new Ms(e.error_description||"Error in URL with unspecified error_description",{error:e.error||"unspecified_error",code:e.error_code||"unspecified_code"});switch(t){case"implicit":if(this.flowType==="pkce")throw new zc("Not a valid PKCE flow url.");break;case"pkce":if(this.flowType==="implicit")throw new Ms("Not a valid implicit grant flow url.");break;default:}if(t==="pkce"){if(this._debug("#_initialize()","begin","is PKCE flow",!0),!e.code)throw new zc("No code detected.");const{data:y,error:b}=await this._exchangeCodeForSession(e.code);if(b)throw b;const M=new URL(window.location.href);return M.searchParams.delete("code"),window.history.replaceState(window.history.state,"",M.toString()),{data:{session:y.session,redirectType:(i=y.redirectType)!==null&&i!==void 0?i:null},error:null}}const{provider_token:r,provider_refresh_token:s,access_token:a,refresh_token:o,expires_in:l,expires_at:c,token_type:u}=e;if(!a||!l||!o||!u)throw new Ms("No session defined in URL");const h=Math.round(Date.now()/1e3),d=parseInt(l);let f=h+d;c&&(f=parseInt(c));const g=f-h;g*1e3<=Mn&&console.warn(`@supabase/gotrue-js: Session as retrieved from URL expires in ${g}s, should have been closer to ${d}s`);const _=f-d;h-_>=120?console.warn("@supabase/gotrue-js: Session as retrieved from URL was issued over 120s ago, URL could be stale",_,f,h):h-_<0&&console.warn("@supabase/gotrue-js: Session as retrieved from URL was issued in the future? Check the device clock for skew",_,f,h);const{data:p,error:m}=await this._getUser(a);if(m)throw m;const S={provider_token:r,provider_refresh_token:s,access_token:a,expires_in:d,expires_at:f,refresh_token:o,token_type:u,user:p.user};return window.location.hash="",this._debug("#_getSessionFromURL()","clearing window.location.hash"),this._returnResult({data:{session:S,redirectType:e.type},error:null})}catch(r){if(ae(r))return this._returnResult({data:{session:null,redirectType:null},error:r});throw r}}_isImplicitGrantCallback(e){return typeof this.detectSessionInUrl=="function"?this.detectSessionInUrl(new URL(window.location.href),e):!!(e.access_token||e.error||e.error_description||e.error_code)}async _isPKCECallback(e){const t=await Qt(this.storage,`${this.storageKey}-code-verifier`);return!!(e.code&&t)}async signOut(e={scope:"global"}){return await this.initializePromise,this.lock!=null?await this._acquireLock(this.lockAcquireTimeout,async()=>await this._signOut(e)):await this._signOut(e)}async _signOut({scope:e}={scope:"global"}){return await this._useSession(async t=>{var i;const r=async()=>{await this._removeSession(),await lt(this.storage,`${this.storageKey}-code-verifier`)},{data:s,error:a}=t;if(a&&!As(a))return this._returnResult({error:a});const o=(i=s.session)===null||i===void 0?void 0:i.access_token;if(o){const{error:l}=await this.admin.signOut(o,e);if(l&&!(k0(l)&&(l.status===404||l.status===401||l.status===403)||As(l)))return e!=="others"&&await r(),this._returnResult({error:l})}return e!=="others"&&await r(),this._returnResult({error:null})})}onAuthStateChange(e){const t=q0(),i={id:t,callback:e,unsubscribe:()=>{this._debug("#unsubscribe()","state change callback with id removed",t),this.stateChangeEmitters.delete(t)}};return this._debug("#onAuthStateChange()","registered callback with id",t),this.stateChangeEmitters.set(t,i),(async()=>(await this.initializePromise,this.lock!=null?await this._acquireLock(this.lockAcquireTimeout,async()=>{this._emitInitialSession(t)}):await this._emitInitialSession(t)))(),{data:{subscription:i}}}async _emitInitialSession(e){return await this._useSession(async t=>{var i,r;try{const{data:{session:s},error:a}=t;if(a)throw a;await((i=this.stateChangeEmitters.get(e))===null||i===void 0?void 0:i.callback("INITIAL_SESSION",s)),this._debug("INITIAL_SESSION","callback id",e,"session",s)}catch(s){await((r=this.stateChangeEmitters.get(e))===null||r===void 0?void 0:r.callback("INITIAL_SESSION",null)),this._debug("INITIAL_SESSION","callback id",e,"error",s),As(s)?console.warn(s):console.error(s)}})}async resetPasswordForEmail(e,t={}){let i=null,r=null;this.flowType==="pkce"&&([i,r]=await ai(this.storage,this.storageKey,!0));try{return await ge(this.fetch,"POST",`${this.url}/recover`,{body:{email:e,code_challenge:i,code_challenge_method:r,gotrue_meta_security:{captcha_token:t.captchaToken}},headers:this.headers,redirectTo:t.redirectTo})}catch(s){if(await lt(this.storage,`${this.storageKey}-code-verifier`),ae(s))return this._returnResult({data:null,error:s});throw s}}async getUserIdentities(){var e;try{const{data:t,error:i}=await this.getUser();if(i)throw i;return this._returnResult({data:{identities:(e=t.user.identities)!==null&&e!==void 0?e:[]},error:null})}catch(t){if(ae(t))return this._returnResult({data:null,error:t});throw t}}async linkIdentity(e){return"token"in e?this.linkIdentityIdToken(e):this.linkIdentityOAuth(e)}async linkIdentityOAuth(e){var t;try{const{data:i,error:r}=await this._useSession(async s=>{var a,o,l,c,u;const{data:h,error:d}=s;if(d)throw d;const f=await this._getUrlForProvider(`${this.url}/user/identities/authorize`,e.provider,{redirectTo:(a=e.options)===null||a===void 0?void 0:a.redirectTo,scopes:(o=e.options)===null||o===void 0?void 0:o.scopes,queryParams:(l=e.options)===null||l===void 0?void 0:l.queryParams,skipBrowserRedirect:!0});return await ge(this.fetch,"GET",f,{headers:this.headers,jwt:(u=(c=h.session)===null||c===void 0?void 0:c.access_token)!==null&&u!==void 0?u:void 0})});if(r)throw r;return Et()&&!(!((t=e.options)===null||t===void 0)&&t.skipBrowserRedirect)&&window.location.assign(i==null?void 0:i.url),this._returnResult({data:{provider:e.provider,url:i==null?void 0:i.url},error:null})}catch(i){if(ae(i))return this._returnResult({data:{provider:e.provider,url:null},error:i});throw i}}async linkIdentityIdToken(e){return await this._useSession(async t=>{var i;try{const{error:r,data:{session:s}}=t;if(r)throw r;const{options:a,provider:o,token:l,access_token:c,nonce:u}=e,h=await ge(this.fetch,"POST",`${this.url}/token?grant_type=id_token`,{headers:this.headers,jwt:(i=s==null?void 0:s.access_token)!==null&&i!==void 0?i:void 0,body:{provider:o,id_token:l,access_token:c,nonce:u,link_identity:!0,gotrue_meta_security:{captcha_token:a==null?void 0:a.captchaToken}},xform:Vt}),{data:d,error:f}=h;return f?this._returnResult({data:{user:null,session:null},error:f}):!d||!d.session||!d.user?this._returnResult({data:{user:null,session:null},error:new Fi}):(d.session&&(await this._saveSession(d.session),await this._notifyAllSubscribers("USER_UPDATED",d.session)),this._returnResult({data:d,error:f}))}catch(r){if(await lt(this.storage,`${this.storageKey}-code-verifier`),ae(r))return this._returnResult({data:{user:null,session:null},error:r});throw r}})}async unlinkIdentity(e){try{return await this._useSession(async t=>{var i,r;const{data:s,error:a}=t;if(a)throw a;return await ge(this.fetch,"DELETE",`${this.url}/user/identities/${e.identity_id}`,{headers:this.headers,jwt:(r=(i=s.session)===null||i===void 0?void 0:i.access_token)!==null&&r!==void 0?r:void 0})})}catch(t){if(ae(t))return this._returnResult({data:null,error:t});throw t}}async _refreshAccessToken(e){const t="#_refreshAccessToken()";this._debug(t,"begin");try{const i=Date.now();return await J0(async r=>(r>0&&await Y0(200*Math.pow(2,r-1)),this._debug(t,"refreshing attempt",r),await ge(this.fetch,"POST",`${this.url}/token?grant_type=refresh_token`,{body:{refresh_token:e},headers:this.headers,xform:Vt})),(r,s)=>{const a=200*Math.pow(2,r);return s&&Vc(s)&&Date.now()+a-i<Mn})}catch(i){if(this._debug(t,"error",i),ae(i))return this._returnResult({data:{session:null,user:null},error:i});throw i}finally{this._debug(t,"end")}}_isValidSession(e){return typeof e=="object"&&e!==null&&"access_token"in e&&"refresh_token"in e&&"expires_at"in e}async _handleProviderSignIn(e,t){const i=await this._getUrlForProvider(`${this.url}/authorize`,e,{redirectTo:t.redirectTo,scopes:t.scopes,queryParams:t.queryParams});return this._debug("#_handleProviderSignIn()","provider",e,"options",t,"url",i),Et()&&!t.skipBrowserRedirect&&window.location.assign(i),{data:{provider:e,url:i},error:null}}async _recoverAndRefresh(){var e,t;const i="#_recoverAndRefresh()";this._debug(i,"begin");try{const r=await Qt(this.storage,this.storageKey);if(r&&this.userStorage){let a=await Qt(this.userStorage,this.storageKey+"-user");!this.storage.isServer&&Object.is(this.storage,this.userStorage)&&!a&&(a={user:r.user},await zi(this.userStorage,this.storageKey+"-user",a)),r.user=(e=a==null?void 0:a.user)!==null&&e!==void 0?e:qa()}else if(r&&!r.user&&!r.user){const a=await Qt(this.storage,this.storageKey+"-user");a&&(a!=null&&a.user)?(r.user=a.user,await lt(this.storage,this.storageKey+"-user"),await zi(this.storage,this.storageKey,r)):r.user=qa()}if(this._debug(i,"session from storage",r),!this._isValidSession(r)){this._debug(i,"session is not valid"),r!==null&&await this._removeSession();return}const s=((t=r.expires_at)!==null&&t!==void 0?t:1/0)*1e3-Date.now()<ja;if(this._debug(i,`session has${s?"":" not"} expired with margin of ${ja}s`),s){if(this.autoRefreshToken&&r.refresh_token){const{error:a}=await this._callRefreshToken(r.refresh_token);a&&(H0(a)?this._debug(i,"refresh discarded by commit guard",a):this._debug(i,"refresh failed",a))}}else if(r.user&&r.user.__isUserNotAvailableProxy===!0)try{const{data:a,error:o}=await this._getUser(r.access_token);!o&&(a!=null&&a.user)?(r.user=a.user,await this._saveSession(r),await this._notifyAllSubscribers("SIGNED_IN",r)):this._debug(i,"could not get user data, skipping SIGNED_IN notification")}catch(a){console.error("Error getting user data:",a),this._debug(i,"error getting user data, skipping SIGNED_IN notification",a)}else await this._notifyAllSubscribers("SIGNED_IN",r)}catch(r){this._debug(i,"error",r),console.error(r);return}finally{this._debug(i,"end")}}async _callRefreshToken(e){var t,i;if(!e)throw new _t;if(this.refreshingDeferred)return this.refreshingDeferred.promise;if(this.lastRefreshFailure&&this.lastRefreshFailure.refreshToken===e&&Date.now()<this.lastRefreshFailure.expiresAt)return this._debug("#_callRefreshToken()","returning cached failure (cooldown active)"),this.lastRefreshFailure.result;const r="#_callRefreshToken()";this._debug(r,"begin");try{this.refreshingDeferred=new aa;const s=await Qt(this.storage,this.storageKey),{data:a,error:o}=await this._refreshAccessToken(e);if(o)throw o;if(!a.session)throw new _t;const l=await Qt(this.storage,this.storageKey);if(s!==null&&(l===null||l.refresh_token!==s.refresh_token)){this._debug(r,"commit guard: storage changed since refresh started, discarding rotated tokens",{startedWith:"present",nowHolds:l?"replaced":"cleared"});const d={data:null,error:new Wc};return this.refreshingDeferred.resolve(d),d}const u=this._sessionRemovalEpoch;if(await this._saveSession(a.session),this._sessionRemovalEpoch!==u){this._debug(r,"commit guard (post-save): _removeSession ran during _saveSession, undoing write"),await lt(this.storage,this.storageKey),this.userStorage&&await lt(this.userStorage,this.storageKey+"-user");const d={data:null,error:new Wc};return this.refreshingDeferred.resolve(d),d}await this._notifyAllSubscribers("TOKEN_REFRESHED",a.session);const h={data:a.session,error:null};return this.lastRefreshFailure=null,this.refreshingDeferred.resolve(h),h}catch(s){if(this._debug(r,"error",s),ae(s)){const a={data:null,error:s};if(!Vc(s)){const o=await Qt(this.storage,this.storageKey);!!(o!=null&&o.expires_at&&o.expires_at*1e3>Date.now())?this._debug(r,"proactive refresh failed, access token still valid — preserving session"):await this._removeSession()}return this.lastRefreshFailure={refreshToken:e,result:a,expiresAt:Date.now()+P0},(t=this.refreshingDeferred)===null||t===void 0||t.resolve(a),a}throw(i=this.refreshingDeferred)===null||i===void 0||i.reject(s),s}finally{this.refreshingDeferred=null,this._debug(r,"end")}}async _notifyAllSubscribers(e,t,i=!0){if(this._pendingInitNotifications!==null&&i){this._pendingInitNotifications.push({event:e,session:t,broadcast:i});return}const r=`#_notifyAllSubscribers(${e})`;this._debug(r,"begin",t,`broadcast = ${i}`);try{this.broadcastChannel&&i&&this.broadcastChannel.postMessage({event:e,session:t});const s=[],a=Array.from(this.stateChangeEmitters.values()).map(async o=>{try{await o.callback(e,t)}catch(l){s.push(l)}});if(await Promise.all(a),s.length>0){for(let o=0;o<s.length;o+=1)console.error(s[o]);throw s[0]}}finally{this._debug(r,"end")}}async _saveSession(e){this._debug("#_saveSession()",e),this.suppressGetSessionWarning=!0,await lt(this.storage,`${this.storageKey}-code-verifier`);const t=Object.assign({},e),i=t.user&&t.user.__isUserNotAvailableProxy===!0;if(this.userStorage){!i&&t.user&&await zi(this.userStorage,this.storageKey+"-user",{user:t.user});const r=Object.assign({},t);delete r.user;const s=Kc(r);await zi(this.storage,this.storageKey,s)}else{const r=Kc(t);await zi(this.storage,this.storageKey,r)}}async _removeSession(){this._sessionRemovalEpoch+=1,this._debug("#_removeSession()"),this.lastRefreshFailure=null,this.suppressGetSessionWarning=!1,await lt(this.storage,this.storageKey),await lt(this.storage,this.storageKey+"-code-verifier"),await lt(this.storage,this.storageKey+"-user"),this.userStorage&&await lt(this.userStorage,this.storageKey+"-user"),await this._notifyAllSubscribers("SIGNED_OUT",null)}_removeVisibilityChangedCallback(){this._debug("#_removeVisibilityChangedCallback()");const e=this.visibilityChangedCallback;this.visibilityChangedCallback=null;try{e&&Et()&&(window!=null&&window.removeEventListener)&&window.removeEventListener("visibilitychange",e)}catch(t){console.error("removing visibilitychange callback failed",t)}}async _startAutoRefresh(){await this._stopAutoRefresh(),this._debug("#_startAutoRefresh()");const e=setInterval(()=>this._autoRefreshTokenTick(),Mn);this.autoRefreshTicker=e,e&&typeof e=="object"&&typeof e.unref=="function"?e.unref():typeof Deno<"u"&&typeof Deno.unrefTimer=="function"&&Deno.unrefTimer(e);const t=setTimeout(async()=>{await this.initializePromise,await this._autoRefreshTokenTick()},0);this.autoRefreshTickTimeout=t,t&&typeof t=="object"&&typeof t.unref=="function"?t.unref():typeof Deno<"u"&&typeof Deno.unrefTimer=="function"&&Deno.unrefTimer(t)}async _stopAutoRefresh(){this._debug("#_stopAutoRefresh()");const e=this.autoRefreshTicker;this.autoRefreshTicker=null,e&&clearInterval(e);const t=this.autoRefreshTickTimeout;this.autoRefreshTickTimeout=null,t&&clearTimeout(t)}async startAutoRefresh(){this._removeVisibilityChangedCallback(),await this._startAutoRefresh()}async stopAutoRefresh(){this._removeVisibilityChangedCallback(),await this._stopAutoRefresh()}async dispose(){var e;this._removeVisibilityChangedCallback(),await this._stopAutoRefresh(),(e=this.broadcastChannel)===null||e===void 0||e.close(),this.broadcastChannel=null,this.stateChangeEmitters.clear()}async _autoRefreshTokenTick(){if(this._debug("#_autoRefreshTokenTick()","begin"),this.lock!=null){try{await this._acquireLock(0,async()=>{try{const e=Date.now();try{return await this._useSession(async t=>{const{data:{session:i}}=t;if(!i||!i.refresh_token||!i.expires_at){this._debug("#_autoRefreshTokenTick()","no session");return}const r=Math.floor((i.expires_at*1e3-e)/Mn);this._debug("#_autoRefreshTokenTick()",`access token expires in ${r} ticks, a tick lasts ${Mn}ms, refresh threshold is ${Sr} ticks`),r<=Sr&&await this._callRefreshToken(i.refresh_token)})}catch(t){console.error("Auto refresh tick failed with error. This is likely a transient error.",t)}}finally{this._debug("#_autoRefreshTokenTick()","end")}})}catch(e){if(e instanceof my)this._debug("auto refresh token tick lock not available");else throw e}return}if(this.refreshingDeferred!==null){this._debug("#_autoRefreshTokenTick()","refresh already in flight, skipping");return}try{const e=Date.now();try{await this._useSession(async t=>{const{data:{session:i}}=t;if(!i||!i.refresh_token||!i.expires_at){this._debug("#_autoRefreshTokenTick()","no session");return}const r=Math.floor((i.expires_at*1e3-e)/Mn);this._debug("#_autoRefreshTokenTick()",`access token expires in ${r} ticks, a tick lasts ${Mn}ms, refresh threshold is ${Sr} ticks`),r<=Sr&&await this._callRefreshToken(i.refresh_token)})}catch(t){console.error("Auto refresh tick failed with error. This is likely a transient error.",t)}}finally{this._debug("#_autoRefreshTokenTick()","end")}}async _handleVisibilityChange(){if(this._debug("#_handleVisibilityChange()"),!Et()||!(window!=null&&window.addEventListener))return this.autoRefreshToken&&this.startAutoRefresh(),!1;try{this.visibilityChangedCallback=async()=>{try{await this._onVisibilityChanged(!1)}catch(e){this._debug("#visibilityChangedCallback","error",e)}},window==null||window.addEventListener("visibilitychange",this.visibilityChangedCallback),await this._onVisibilityChanged(!0)}catch(e){console.error("_handleVisibilityChange",e)}}async _onVisibilityChanged(e){const t=`#_onVisibilityChanged(${e})`;if(this._debug(t,"visibilityState",document.visibilityState),document.visibilityState==="visible"){if(this.autoRefreshToken&&this._startAutoRefresh(),!e)if(await this.initializePromise,this.lock!=null)await this._acquireLock(this.lockAcquireTimeout,async()=>{if(document.visibilityState!=="visible"){this._debug(t,"acquired the lock to recover the session, but the browser visibilityState is no longer visible, aborting");return}await this._recoverAndRefresh()});else{if(document.visibilityState!=="visible"){this._debug(t,"visibilityState is no longer visible, skipping recovery");return}await this._recoverAndRefresh()}}else document.visibilityState==="hidden"&&this.autoRefreshToken&&this._stopAutoRefresh()}async _getUrlForProvider(e,t,i){const r=[`provider=${encodeURIComponent(t)}`];if(i!=null&&i.redirectTo&&r.push(`redirect_to=${encodeURIComponent(i.redirectTo)}`),i!=null&&i.scopes&&r.push(`scopes=${encodeURIComponent(i.scopes)}`),this.flowType==="pkce"){const[s,a]=await ai(this.storage,this.storageKey),o=new URLSearchParams({code_challenge:`${encodeURIComponent(s)}`,code_challenge_method:`${encodeURIComponent(a)}`});r.push(o.toString())}if(i!=null&&i.queryParams){const s=new URLSearchParams(i.queryParams);r.push(s.toString())}return i!=null&&i.skipBrowserRedirect&&r.push(`skip_http_redirect=${i.skipBrowserRedirect}`),`${e}?${r.join("&")}`}async _unenroll(e){try{return await this._useSession(async t=>{var i;const{data:r,error:s}=t;return s?this._returnResult({data:null,error:s}):await ge(this.fetch,"DELETE",`${this.url}/factors/${e.factorId}`,{headers:this.headers,jwt:(i=r==null?void 0:r.session)===null||i===void 0?void 0:i.access_token})})}catch(t){if(ae(t))return this._returnResult({data:null,error:t});throw t}}async _enroll(e){try{return await this._useSession(async t=>{var i,r;const{data:s,error:a}=t;if(a)return this._returnResult({data:null,error:a});const o=Object.assign({friendly_name:e.friendlyName,factor_type:e.factorType},e.factorType==="phone"?{phone:e.phone}:e.factorType==="totp"?{issuer:e.issuer}:{}),{data:l,error:c}=await ge(this.fetch,"POST",`${this.url}/factors`,{body:o,headers:this.headers,jwt:(i=s==null?void 0:s.session)===null||i===void 0?void 0:i.access_token});return c?this._returnResult({data:null,error:c}):(e.factorType==="totp"&&l.type==="totp"&&(!((r=l==null?void 0:l.totp)===null||r===void 0)&&r.qr_code)&&(l.totp.qr_code=`data:image/svg+xml;utf-8,${l.totp.qr_code}`),this._returnResult({data:l,error:null}))})}catch(t){if(ae(t))return this._returnResult({data:null,error:t});throw t}}async _verify(e){const t=async()=>{try{return await this._useSession(async i=>{var r;const{data:s,error:a}=i;if(a)return this._returnResult({data:null,error:a});const o=Object.assign({challenge_id:e.challengeId},"webauthn"in e?{webauthn:Object.assign(Object.assign({},e.webauthn),{credential_response:e.webauthn.type==="create"?nu(e.webauthn.credential_response):iu(e.webauthn.credential_response)})}:{code:e.code}),{data:l,error:c}=await ge(this.fetch,"POST",`${this.url}/factors/${e.factorId}/verify`,{body:o,headers:this.headers,jwt:(r=s==null?void 0:s.session)===null||r===void 0?void 0:r.access_token});return c?this._returnResult({data:null,error:c}):(await this._saveSession(Object.assign({expires_at:Math.round(Date.now()/1e3)+l.expires_in},l)),await this._notifyAllSubscribers("MFA_CHALLENGE_VERIFIED",l),this._returnResult({data:l,error:c}))})}catch(i){if(ae(i))return this._returnResult({data:null,error:i});throw i}};return this.lock!=null?this._acquireLock(this.lockAcquireTimeout,t):t()}async _challenge(e){const t=async()=>{try{return await this._useSession(async i=>{var r;const{data:s,error:a}=i;if(a)return this._returnResult({data:null,error:a});const o=await ge(this.fetch,"POST",`${this.url}/factors/${e.factorId}/challenge`,{body:e,headers:this.headers,jwt:(r=s==null?void 0:s.session)===null||r===void 0?void 0:r.access_token});if(o.error)return o;const{data:l}=o;if(l.type!=="webauthn")return{data:l,error:null};switch(l.webauthn.type){case"create":return{data:Object.assign(Object.assign({},l),{webauthn:Object.assign(Object.assign({},l.webauthn),{credential_options:Object.assign(Object.assign({},l.webauthn.credential_options),{publicKey:eu(l.webauthn.credential_options.publicKey)})})}),error:null};case"request":return{data:Object.assign(Object.assign({},l),{webauthn:Object.assign(Object.assign({},l.webauthn),{credential_options:Object.assign(Object.assign({},l.webauthn.credential_options),{publicKey:tu(l.webauthn.credential_options.publicKey)})})}),error:null}}})}catch(i){if(ae(i))return this._returnResult({data:null,error:i});throw i}};return this.lock!=null?this._acquireLock(this.lockAcquireTimeout,t):t()}async _challengeAndVerify(e){const{data:t,error:i}=await this._challenge({factorId:e.factorId});return i?this._returnResult({data:null,error:i}):await this._verify({factorId:e.factorId,challengeId:t.id,code:e.code})}async _listFactors(){var e;const{data:{user:t},error:i}=await this.getUser();if(i)return{data:null,error:i};const r={all:[],phone:[],totp:[],webauthn:[]};for(const s of(e=t==null?void 0:t.factors)!==null&&e!==void 0?e:[])r.all.push(s),s.status==="verified"&&r[s.factor_type].push(s);return{data:r,error:null}}async _getAuthenticatorAssuranceLevel(e){var t,i,r,s;if(e)try{const{payload:f}=Rs(e);let g=null;f.aal&&(g=f.aal);let _=g;const{data:{user:p},error:m}=await this.getUser(e);if(m)return this._returnResult({data:null,error:m});((i=(t=p==null?void 0:p.factors)===null||t===void 0?void 0:t.filter(b=>b.status==="verified"))!==null&&i!==void 0?i:[]).length>0&&(_="aal2");const y=f.amr||[];return{data:{currentLevel:g,nextLevel:_,currentAuthenticationMethods:y},error:null}}catch(f){if(ae(f))return this._returnResult({data:null,error:f});throw f}const{data:{session:a},error:o}=await this.getSession();if(o)return this._returnResult({data:null,error:o});if(!a)return{data:{currentLevel:null,nextLevel:null,currentAuthenticationMethods:[]},error:null};const{payload:l}=Rs(a.access_token);let c=null;l.aal&&(c=l.aal);let u=c;((s=(r=a.user.factors)===null||r===void 0?void 0:r.filter(f=>f.status==="verified"))!==null&&s!==void 0?s:[]).length>0&&(u="aal2");const d=l.amr||[];return{data:{currentLevel:c,nextLevel:u,currentAuthenticationMethods:d},error:null}}async _getAuthorizationDetails(e){try{return await this._useSession(async t=>{const{data:{session:i},error:r}=t;return r?this._returnResult({data:null,error:r}):i?await ge(this.fetch,"GET",`${this.url}/oauth/authorizations/${e}`,{headers:this.headers,jwt:i.access_token,xform:s=>({data:s,error:null})}):this._returnResult({data:null,error:new _t})})}catch(t){if(ae(t))return this._returnResult({data:null,error:t});throw t}}async _approveAuthorization(e,t){try{return await this._useSession(async i=>{const{data:{session:r},error:s}=i;if(s)return this._returnResult({data:null,error:s});if(!r)return this._returnResult({data:null,error:new _t});const a=await ge(this.fetch,"POST",`${this.url}/oauth/authorizations/${e}/consent`,{headers:this.headers,jwt:r.access_token,body:{action:"approve"},xform:o=>({data:o,error:null})});return a.data&&a.data.redirect_url&&Et()&&!(t!=null&&t.skipBrowserRedirect)&&window.location.assign(a.data.redirect_url),a})}catch(i){if(ae(i))return this._returnResult({data:null,error:i});throw i}}async _denyAuthorization(e,t){try{return await this._useSession(async i=>{const{data:{session:r},error:s}=i;if(s)return this._returnResult({data:null,error:s});if(!r)return this._returnResult({data:null,error:new _t});const a=await ge(this.fetch,"POST",`${this.url}/oauth/authorizations/${e}/consent`,{headers:this.headers,jwt:r.access_token,body:{action:"deny"},xform:o=>({data:o,error:null})});return a.data&&a.data.redirect_url&&Et()&&!(t!=null&&t.skipBrowserRedirect)&&window.location.assign(a.data.redirect_url),a})}catch(i){if(ae(i))return this._returnResult({data:null,error:i});throw i}}async _listOAuthGrants(){try{return await this._useSession(async e=>{const{data:{session:t},error:i}=e;return i?this._returnResult({data:null,error:i}):t?await ge(this.fetch,"GET",`${this.url}/user/oauth/grants`,{headers:this.headers,jwt:t.access_token,xform:r=>({data:r,error:null})}):this._returnResult({data:null,error:new _t})})}catch(e){if(ae(e))return this._returnResult({data:null,error:e});throw e}}async _revokeOAuthGrant(e){try{return await this._useSession(async t=>{const{data:{session:i},error:r}=t;return r?this._returnResult({data:null,error:r}):i?(await ge(this.fetch,"DELETE",`${this.url}/user/oauth/grants`,{headers:this.headers,jwt:i.access_token,query:{client_id:e.clientId},noResolveJson:!0}),{data:{},error:null}):this._returnResult({data:null,error:new _t})})}catch(t){if(ae(t))return this._returnResult({data:null,error:t});throw t}}async fetchJwk(e,t={keys:[]}){let i=t.keys.find(o=>o.kid===e);if(i)return i;const r=Date.now();if(i=this.jwks.keys.find(o=>o.kid===e),i&&this.jwks_cached_at+N0>r)return i;const{data:s,error:a}=await ge(this.fetch,"GET",`${this.url}/.well-known/jwks.json`,{headers:this.headers});if(a)throw a;return!s.keys||s.keys.length===0||(this.jwks=s,this.jwks_cached_at=r,i=s.keys.find(o=>o.kid===e),!i)?null:i}async getClaims(e,t={}){try{let i=e;if(!i){const{data:f,error:g}=await this.getSession();if(g||!f.session)return this._returnResult({data:null,error:g});i=f.session.access_token}const{header:r,payload:s,signature:a,raw:{header:o,payload:l}}=Rs(i);if(!(t!=null&&t.allowExpired))try{ry(s.exp)}catch(f){throw new qs(f instanceof Error?f.message:"JWT validation failed")}const c=!r.alg||r.alg.startsWith("HS")||!r.kid||!("crypto"in globalThis&&"subtle"in globalThis.crypto)?null:await this.fetchJwk(r.kid,t!=null&&t.keys?{keys:t.keys}:t==null?void 0:t.jwks);if(!c){const{error:f}=await this.getUser(i);if(f)throw f;return{data:{claims:s,header:r,signature:a},error:null}}const u=sy(r.alg),h=await crypto.subtle.importKey("jwk",c,u,!0,["verify"]);if(!await crypto.subtle.verify(u,h,a,$0(`${o}.${l}`)))throw new qs("Invalid JWT signature");return{data:{claims:s,header:r,signature:a},error:null}}catch(i){if(ae(i))return this._returnResult({data:null,error:i});throw i}}async signInWithPasskey(e){var t,i,r;en(this.experimental);try{if(!Ys())return this._returnResult({data:null,error:new an("Browser does not support WebAuthn",null)});const{data:s,error:a}=await this._startPasskeyAuthentication({options:{captchaToken:(t=e==null?void 0:e.options)===null||t===void 0?void 0:t.captchaToken}});if(a||!s)return this._returnResult({data:null,error:a});const o=tu(s.options),l=(r=(i=e==null?void 0:e.options)===null||i===void 0?void 0:i.signal)!==null&&r!==void 0?r:tl.createNewAbortSignal(),{data:c,error:u}=await yh({publicKey:o,signal:l});if(u||!c)return this._returnResult({data:null,error:u??new an("WebAuthn ceremony failed",null)});const h=iu(c);return this._verifyPasskeyAuthentication({challengeId:s.challenge_id,credential:h})}catch(s){if(ae(s))return this._returnResult({data:null,error:s});throw s}}async registerPasskey(e){var t,i;en(this.experimental);try{if(!Ys())return this._returnResult({data:null,error:new an("Browser does not support WebAuthn",null)});const{data:r,error:s}=await this._startPasskeyRegistration();if(s||!r)return this._returnResult({data:null,error:s});const a=eu(r.options),o=(i=(t=e==null?void 0:e.options)===null||t===void 0?void 0:t.signal)!==null&&i!==void 0?i:tl.createNewAbortSignal(),{data:l,error:c}=await vh({publicKey:a,signal:o});if(c||!l)return this._returnResult({data:null,error:c??new an("WebAuthn ceremony failed",null)});const u=nu(l);return this._verifyPasskeyRegistration({challengeId:r.challenge_id,credential:u})}catch(r){if(ae(r))return this._returnResult({data:null,error:r});throw r}}async _startPasskeyRegistration(){en(this.experimental);try{return await this._useSession(async e=>{const{data:{session:t},error:i}=e;if(i)return this._returnResult({data:null,error:i});if(!t)return this._returnResult({data:null,error:new _t});const{data:r,error:s}=await ge(this.fetch,"POST",`${this.url}/passkeys/registration/options`,{headers:this.headers,jwt:t.access_token,body:{}});return s?this._returnResult({data:null,error:s}):this._returnResult({data:r,error:null})})}catch(e){if(ae(e))return this._returnResult({data:null,error:e});throw e}}async _verifyPasskeyRegistration(e){en(this.experimental);try{return await this._useSession(async t=>{const{data:{session:i},error:r}=t;if(r)return this._returnResult({data:null,error:r});if(!i)return this._returnResult({data:null,error:new _t});const{data:s,error:a}=await ge(this.fetch,"POST",`${this.url}/passkeys/registration/verify`,{headers:this.headers,jwt:i.access_token,body:{challenge_id:e.challengeId,credential:e.credential}});return a?this._returnResult({data:null,error:a}):this._returnResult({data:s,error:null})})}catch(t){if(ae(t))return this._returnResult({data:null,error:t});throw t}}async _startPasskeyAuthentication(e){var t;en(this.experimental);try{const{data:i,error:r}=await ge(this.fetch,"POST",`${this.url}/passkeys/authentication/options`,{headers:this.headers,body:{gotrue_meta_security:{captcha_token:(t=e==null?void 0:e.options)===null||t===void 0?void 0:t.captchaToken}}});return r?this._returnResult({data:null,error:r}):this._returnResult({data:i,error:null})}catch(i){if(ae(i))return this._returnResult({data:null,error:i});throw i}}async _verifyPasskeyAuthentication(e){en(this.experimental);try{const{data:t,error:i}=await ge(this.fetch,"POST",`${this.url}/passkeys/authentication/verify`,{headers:this.headers,body:{challenge_id:e.challengeId,credential:e.credential},xform:Vt});return i?this._returnResult({data:null,error:i}):(t.session&&(await this._saveSession(t.session),await this._notifyAllSubscribers("SIGNED_IN",t.session)),this._returnResult({data:t,error:null}))}catch(t){if(ae(t))return this._returnResult({data:null,error:t});throw t}}async _listPasskeys(){en(this.experimental);try{return await this._useSession(async e=>{const{data:{session:t},error:i}=e;if(i)return this._returnResult({data:null,error:i});if(!t)return this._returnResult({data:null,error:new _t});const{data:r,error:s}=await ge(this.fetch,"GET",`${this.url}/passkeys`,{headers:this.headers,jwt:t.access_token,xform:a=>({data:a,error:null})});return s?this._returnResult({data:null,error:s}):this._returnResult({data:r,error:null})})}catch(e){if(ae(e))return this._returnResult({data:null,error:e});throw e}}async _updatePasskey(e){en(this.experimental);try{return await this._useSession(async t=>{const{data:{session:i},error:r}=t;if(r)return this._returnResult({data:null,error:r});if(!i)return this._returnResult({data:null,error:new _t});const{data:s,error:a}=await ge(this.fetch,"PATCH",`${this.url}/passkeys/${e.passkeyId}`,{headers:this.headers,jwt:i.access_token,body:{friendly_name:e.friendlyName}});return a?this._returnResult({data:null,error:a}):this._returnResult({data:s,error:null})})}catch(t){if(ae(t))return this._returnResult({data:null,error:t});throw t}}async _deletePasskey(e){en(this.experimental);try{return await this._useSession(async t=>{const{data:{session:i},error:r}=t;if(r)return this._returnResult({data:null,error:r});if(!i)return this._returnResult({data:null,error:new _t});const{error:s}=await ge(this.fetch,"DELETE",`${this.url}/passkeys/${e.passkeyId}`,{headers:this.headers,jwt:i.access_token,noResolveJson:!0});return s?this._returnResult({data:null,error:s}):this._returnResult({data:null,error:null})})}catch(t){if(ae(t))return this._returnResult({data:null,error:t});throw t}}}Nr.nextInstanceID={};const Cy=Nr,Py="2.110.2";let xr="",Zs;if(typeof Deno<"u"){var Ka;xr="deno",Zs=(Ka=Deno.version)===null||Ka===void 0?void 0:Ka.deno}else if(typeof document<"u")xr="web";else if(typeof navigator<"u"&&navigator.product==="ReactNative")xr="react-native";else{var Ya;xr="node",Zs=typeof process<"u"?(Ya=process.version)===null||Ya===void 0?void 0:Ya.replace(/^v/,""):void 0}const Sh=[`runtime=${xr}`];Zs&&Sh.push(`runtime-version=${Zs}`);const Ly={"X-Client-Info":`supabase-js/${Py}; ${Sh.join("; ")}`},Oy={headers:Ly},Iy={schema:"public"},Uy={autoRefreshToken:!0,persistSession:!0,detectSessionInUrl:!0,flowType:"implicit"},Ny={},Dy={enabled:!1,respectSamplingDecision:!0};function ky(n,e,t,i){function r(s){return s instanceof t?s:new t(function(a){a(s)})}return new(t||(t=Promise))(function(s,a){function o(u){try{c(i.next(u))}catch(h){a(h)}}function l(u){try{c(i.throw(u))}catch(h){a(h)}}function c(u){u.done?s(u.value):r(u.value).then(o,l)}c((i=i.apply(n,[])).next())})}let Ja=null;const Fy="@opentelemetry/api";function By(){return Ja===null&&(Ja=import(Fy).catch(()=>null)),Ja}function Hy(){return ky(this,void 0,void 0,function*(){try{const n=yield By();if(!n||!n.propagation||!n.context)return null;const e={};n.propagation.inject(n.context.active(),e);const t=e.traceparent;return t?{traceparent:t,tracestate:e.tracestate,baggage:e.baggage}:null}catch{return null}})}function Gy(n){if(!n||typeof n!="string")return null;const e=n.split("-");if(e.length!==4)return null;const[t,i,r,s]=e;if(t.length!==2||i.length!==32||r.length!==16||s.length!==2)return null;const a=/^[0-9a-f]+$/i;return!a.test(t)||!a.test(i)||!a.test(r)||!a.test(s)||i==="00000000000000000000000000000000"||r==="0000000000000000"?null:{version:t,traceId:i,parentId:r,traceFlags:s,isSampled:(parseInt(s,16)&1)===1}}function zy(n,e){if(!n||!e||e.length===0)return!1;let t;if(n instanceof URL)t=n;else try{t=new URL(n)}catch{return!1}for(const i of e)try{if(typeof i=="string"){if(Vy(t.hostname,i))return!0}else if(i instanceof RegExp){if(i.test(t.hostname))return!0}else if(typeof i=="function"&&i(t))return!0}catch{continue}return!1}function Vy(n,e){if(e===n)return!0;if(e.startsWith("*.")){const t=e.slice(2);if(n.endsWith(t)&&(n===t||n.endsWith("."+t)))return!0}return!1}function Wy(n){const e=[];try{const t=new URL(n);e.push(t.hostname)}catch{}return e.push("*.supabase.co","*.supabase.in"),e.push("localhost","127.0.0.1","[::1]"),e}function Dr(n){"@babel/helpers - typeof";return Dr=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Dr(n)}function $y(n,e){if(Dr(n)!="object"||!n)return n;var t=n[Symbol.toPrimitive];if(t!==void 0){var i=t.call(n,e);if(Dr(i)!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(n)}function jy(n){var e=$y(n,"string");return Dr(e)=="symbol"?e:e+""}function qy(n,e,t){return(e=jy(e))in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function ru(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);e&&(i=i.filter(function(r){return Object.getOwnPropertyDescriptor(n,r).enumerable})),t.push.apply(t,i)}return t}function at(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?ru(Object(t),!0).forEach(function(i){qy(n,i,t[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):ru(Object(t)).forEach(function(i){Object.defineProperty(n,i,Object.getOwnPropertyDescriptor(t,i))})}return n}const Xy=n=>n?(...e)=>n(...e):(...e)=>fetch(...e),Ky=()=>Headers,Yy=(n,e,t,i,r)=>{const s=Xy(i),a=Ky(),o=(r==null?void 0:r.enabled)===!0,l=(r==null?void 0:r.respectSamplingDecision)!==!1,c=o?Wy(e):null;return async(u,h)=>{var d;const f=(d=await t())!==null&&d!==void 0?d:n;let g=new a(h==null?void 0:h.headers);if(g.has("apikey")||g.set("apikey",n),g.has("Authorization")||g.set("Authorization",`Bearer ${f}`),c){const _=await Jy(u,c,l);_&&(_.traceparent&&!g.has("traceparent")&&g.set("traceparent",_.traceparent),_.tracestate&&!g.has("tracestate")&&g.set("tracestate",_.tracestate),_.baggage&&!g.has("baggage")&&g.set("baggage",_.baggage))}return s(u,at(at({},h),{},{headers:g}))}};async function Jy(n,e,t){if(!zy(typeof n=="string"||n instanceof URL?n:n.url,e))return null;const i=await Hy();if(!i||!i.traceparent)return null;if(t){const r=Gy(i.traceparent);if(r&&!r.isSampled)return null}return i}function su(n){return typeof n=="boolean"?{enabled:n}:n}function Zy(n){return n.endsWith("/")?n:n+"/"}function Qy(n,e){var t,i,r,s,a,o;const{db:l,auth:c,realtime:u,global:h}=n,{db:d,auth:f,realtime:g,global:_}=e,p=su(n.tracePropagation),m=su(e.tracePropagation),S={db:at(at({},d),l),auth:at(at({},f),c),realtime:at(at({},g),u),storage:{},global:at(at(at({},_),h),{},{headers:at(at({},(t=_==null?void 0:_.headers)!==null&&t!==void 0?t:{}),(i=h==null?void 0:h.headers)!==null&&i!==void 0?i:{})}),tracePropagation:{enabled:(r=(s=p==null?void 0:p.enabled)!==null&&s!==void 0?s:m==null?void 0:m.enabled)!==null&&r!==void 0?r:!1,respectSamplingDecision:(a=(o=p==null?void 0:p.respectSamplingDecision)!==null&&o!==void 0?o:m==null?void 0:m.respectSamplingDecision)!==null&&a!==void 0?a:!0},accessToken:async()=>""};return n.accessToken?S.accessToken=n.accessToken:delete S.accessToken,S}function eS(n){const e=n==null?void 0:n.trim();if(!e)throw new Error("supabaseUrl is required.");if(!e.match(/^https?:\/\//i))throw new Error("Invalid supabaseUrl: Must be a valid HTTP or HTTPS URL.");try{return new URL(Zy(e))}catch{throw Error("Invalid supabaseUrl: Provided URL is malformed.")}}var tS=class extends Cy{constructor(n){super(n)}},nS=class{constructor(n,e,t){var i,r;this.supabaseUrl=n,this.supabaseKey=e;const s=eS(n);if(!e)throw new Error("supabaseKey is required.");this.realtimeUrl=new URL("realtime/v1",s),this.realtimeUrl.protocol=this.realtimeUrl.protocol.replace("http","ws"),this.authUrl=new URL("auth/v1",s),this.storageUrl=new URL("storage/v1",s),this.functionsUrl=new URL("functions/v1",s);const a=`sb-${s.hostname.split(".")[0]}-auth-token`,o={db:Iy,realtime:Ny,auth:at(at({},Uy),{},{storageKey:a}),global:Oy,tracePropagation:Dy},l=Qy(t??{},o);if(this.settings=l,this.storageKey=(i=l.auth.storageKey)!==null&&i!==void 0?i:"",this.headers=(r=l.global.headers)!==null&&r!==void 0?r:{},l.accessToken)this.accessToken=l.accessToken,this.auth=new Proxy({},{get:(u,h)=>{throw new Error(`@supabase/supabase-js: Supabase Client is configured with the accessToken option, accessing supabase.auth.${String(h)} is not possible`)}});else{var c;this.auth=this._initSupabaseAuthClient((c=l.auth)!==null&&c!==void 0?c:{},this.headers,l.global.fetch)}this.fetch=Yy(e,n,this._getAccessToken.bind(this),l.global.fetch,l.tracePropagation),this.realtime=this._initRealtimeClient(at({headers:this.headers,accessToken:this._getAccessToken.bind(this),fetch:this.fetch},l.realtime)),this.accessToken&&Promise.resolve(this.accessToken()).then(u=>this.realtime.setAuth(u)).catch(u=>console.warn("Failed to set initial Realtime auth token:",u)),this.rest=new hv(new URL("rest/v1",s).href,{headers:this.headers,schema:l.db.schema,fetch:this.fetch,timeout:l.db.timeout,urlLengthLimit:l.db.urlLengthLimit}),this.storage=new C0(this.storageUrl.href,this.headers,this.fetch,t==null?void 0:t.storage),l.accessToken||this._listenForAuthEvents()}get functions(){return new nv(this.functionsUrl.href,{headers:this.headers,customFetch:this.fetch})}from(n){return this.rest.from(n)}schema(n){return this.rest.schema(n)}rpc(n,e={},t={head:!1,get:!1,count:void 0}){return this.rest.rpc(n,e,t)}channel(n,e={config:{}}){return this.realtime.channel(n,e)}getChannels(){return this.realtime.getChannels()}removeChannel(n){return this.realtime.removeChannel(n)}removeAllChannels(){return this.realtime.removeAllChannels()}async _getAccessToken(){var n=this,e,t;if(n.accessToken)return await n.accessToken();const{data:i}=await n.auth.getSession();return(e=(t=i.session)===null||t===void 0?void 0:t.access_token)!==null&&e!==void 0?e:n.supabaseKey}_initSupabaseAuthClient({autoRefreshToken:n,persistSession:e,detectSessionInUrl:t,storage:i,userStorage:r,storageKey:s,flowType:a,lock:o,debug:l,throwOnError:c,experimental:u,lockAcquireTimeout:h,skipAutoInitialize:d},f,g){const _={Authorization:`Bearer ${this.supabaseKey}`,apikey:`${this.supabaseKey}`};return new tS({url:this.authUrl.href,headers:at(at({},_),f),storageKey:s,autoRefreshToken:n,persistSession:e,detectSessionInUrl:t,storage:i,userStorage:r,flowType:a,lock:o,debug:l,throwOnError:c,experimental:u,fetch:g,lockAcquireTimeout:h,skipAutoInitialize:d,hasCustomAuthorizationHeader:Object.keys(this.headers).some(p=>p.toLowerCase()==="authorization")})}_initRealtimeClient(n){return new Qv(this.realtimeUrl.href,at(at({},n),{},{params:at(at({},{apikey:this.supabaseKey}),n==null?void 0:n.params)}))}_listenForAuthEvents(){return this.auth.onAuthStateChange((n,e)=>{this._handleTokenChanged(n,"CLIENT",e==null?void 0:e.access_token)})}_handleTokenChanged(n,e,t){(n==="TOKEN_REFRESHED"||n==="SIGNED_IN")&&this.changedAccessToken!==t?(this.changedAccessToken=t,this.realtime.setAuth(t)):n==="SIGNED_OUT"&&(this.realtime.setAuth(),e=="STORAGE"&&this.auth.signOut(),this.changedAccessToken=void 0)}};const iS=(n,e,t)=>new nS(n,e,t);function rS(){if(typeof window<"u")return!1;const n=globalThis.process;if(!n)return!1;const e=n.version;if(e==null)return!1;const t=e.match(/^v(\d+)\./);return t?parseInt(t[1],10)<=20:!1}rS()&&console.warn("⚠️  Node.js 20 and below are deprecated and will no longer be supported in future versions of @supabase/supabase-js. Please upgrade to Node.js 22 or later. For more information, visit: https://github.com/orgs/supabase/discussions/45715");const sS="https://blvckusbzcifsvfasjxz.supabase.co",aS="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJsdmNrdXNiemNpZnN2ZmFzanh6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODM3ODU1MzksImV4cCI6MjA5OTM2MTUzOX0.TSdNGUJ1aX2ssZKhTkez1YiiZuvLK693kc6SH91WlaU",yt=iS(sS,aS),au="kg_seen_news",ou="kg_owner",oS=(n,e)=>{try{const t=JSON.parse(localStorage.getItem(n));return t??e}catch{return e}},lS=(n,e)=>{try{localStorage.setItem(n,JSON.stringify(e))}catch{}},gi=()=>Date.now().toString(36)+Math.random().toString(36).slice(2,7);let Ze={news:[],graffiti:[],events:[]};const nl=new Set,Wt=()=>nl.forEach(n=>{try{n()}catch{}});function gl(n){return nl.add(n),()=>nl.delete(n)}const cS=n=>({id:n.id,title:n.title,html:n.html||"",img:n.img||"",video:n.video||"",ts:Number(n.ts)}),lu=n=>({id:n.id,title:n.title,html:n.html||"",img:n.img||"",video:n.video||"",ts:n.ts}),uS=n=>({id:n.id,title:n.title,date:n.date,desc:n.descr||"",thumb:n.thumb||"",buttonText:n.button_text||"",buttonUrl:n.button_url||""}),cu=n=>({id:n.id,title:n.title,date:n.date,descr:n.desc||"",thumb:n.thumb||"",button_text:n.buttonText||"",button_url:n.buttonUrl||""});async function uu(){try{const{data:n}=await yt.from("news").select("*").order("ts",{ascending:!1});n&&(Ze.news=n.map(cS),Wt())}catch{}}async function hu(){try{const{data:n}=await yt.from("graffiti").select("*").order("ts",{ascending:!0});n&&(Ze.graffiti=n.map(e=>e.data),Wt())}catch{}}async function du(){try{const{data:n}=await yt.from("events").select("*");n&&(Ze.events=n.map(uS),Wt())}catch{}}let fu=!1;async function hS(){if(!fu){fu=!0,await Promise.allSettled([uu(),hu(),du()]);try{yt.channel("kg-changes").on("postgres_changes",{event:"*",schema:"public",table:"news"},uu).on("postgres_changes",{event:"*",schema:"public",table:"graffiti"},hu).on("postgres_changes",{event:"*",schema:"public",table:"events"},du).subscribe()}catch{}}}function dS(){let n=localStorage.getItem(ou);return n||(n=gi(),localStorage.setItem(ou,n)),n}const ke={news:()=>Ze.news,latestNewsTs:()=>{var n;return((n=Ze.news[0])==null?void 0:n.ts)??0},async addNews(n){Ze.news=[n,...Ze.news],Wt();try{await yt.from("news").insert(lu(n))}catch{}},async updateNews(n,e){Ze.news=Ze.news.map(i=>i.id===n?{...i,...e}:i),Wt();const t=Ze.news.find(i=>i.id===n);if(t){const{id:i,...r}=lu(t);try{await yt.from("news").update(r).eq("id",n)}catch{}}},async deleteNews(n){Ze.news=Ze.news.filter(e=>e.id!==n),Wt();try{await yt.from("news").delete().eq("id",n)}catch{}},lastSeen:()=>oS(au,0),markSeen:()=>lS(au,ke.latestNewsTs()),hasUnseen:()=>ke.latestNewsTs()>ke.lastSeen(),graffiti:()=>Ze.graffiti,async addGraffiti(n){Ze.graffiti=[...Ze.graffiti,n],Wt();try{await yt.from("graffiti").insert({id:n.id,data:n,owner:n.owner||"",ts:n.ts})}catch{}},async updateGraffiti(n,e){Ze.graffiti=Ze.graffiti.map(i=>i.id===n?{...i,...e}:i),Wt();const t=Ze.graffiti.find(i=>i.id===n);if(t)try{await yt.from("graffiti").update({data:t}).eq("id",n)}catch{}},async deleteGraffiti(n){Ze.graffiti=Ze.graffiti.filter(e=>e.id!==n),Wt();try{await yt.from("graffiti").delete().eq("id",n)}catch{}},events:()=>Ze.events,async addEvent(n){Ze.events=[...Ze.events,n],Wt();try{await yt.from("events").insert(cu(n))}catch{}},async updateEvent(n,e){Ze.events=Ze.events.map(i=>i.id===n?{...i,...e}:i),Wt();const t=Ze.events.find(i=>i.id===n);if(t){const{id:i,...r}=cu(t);try{await yt.from("events").update(r).eq("id",n)}catch{}}},async deleteEvent(n){Ze.events=Ze.events.filter(e=>e.id!==n),Wt();try{await yt.from("events").delete().eq("id",n)}catch{}}};let Wr=!1;const xh=new Set;function Eh(){xh.forEach(n=>{try{n(Wr)}catch{}})}yt.auth.getSession().then(({data:n})=>{Wr=!!n.session,Eh()});yt.auth.onAuthStateChange((n,e)=>{Wr=!!e,Eh()});function Ki(){return Wr}function fS(n){xh.add(n)}function pS(){Wr?yt.auth.signOut():mS()}function mS(){const n=document.createElement("div");n.className="modal-ov",n.innerHTML='<div class="modal"><h3>🔒 ACCESO ADMIN</h3><input type="email" id="em" placeholder="tu email" /><input type="password" id="pw" placeholder="contraseña" /><div class="mrow"><button class="btn" id="ok">ENTRAR</button><button class="btn ghost" id="cancel">CANCELAR</button></div><div class="merr" id="err"></div></div>',document.body.appendChild(n);const e=n.querySelector("#em"),t=n.querySelector("#pw");setTimeout(()=>e.focus(),30);const i=()=>n.remove(),r=async()=>{n.querySelector("#err").textContent="Entrando…";const{error:s}=await yt.auth.signInWithPassword({email:e.value.trim(),password:t.value});s?n.querySelector("#err").textContent="Email o contraseña incorrectos.":i()};n.querySelector("#ok").onclick=r,n.querySelector("#cancel").onclick=i,[e,t].forEach(s=>s.addEventListener("keydown",a=>{a.stopPropagation(),a.key==="Enter"&&r(),a.key==="Escape"&&i()})),n.addEventListener("click",s=>{s.target===n&&i()})}const bn=n=>String(n??"").replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e]);function pu(n){const e=document.createElement("div");return e.innerHTML=n||"",(e.textContent||"").trim()}function mu(n){return new Date(n).toLocaleDateString([],{day:"2-digit",month:"short",year:"numeric"})}function gS(n){const e=String(n).match(/(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/|shorts\/))([\w-]{11})/);return e?e[1]:null}function _S(n){let e="";if(n.img&&(e+=`<img class="news-img" src="${n.img}" alt="miniatura" />`),n.video){const t=gS(n.video);t?e+=`<div class="news-vid"><iframe src="https://www.youtube-nocookie.com/embed/${t}?rel=0" allow="encrypted-media; fullscreen" allowfullscreen></iframe></div>`:e+=`<video class="news-img" src="${bn(n.video)}" controls></video>`}return e}function vS(n,e=820){return new Promise(t=>{const i=new FileReader;i.onload=()=>{const r=new Image;r.onload=()=>{let{width:s,height:a}=r;if(s>e||a>e){const l=e/Math.max(s,a);s=Math.round(s*l),a=Math.round(a*l)}const o=document.createElement("canvas");o.width=s,o.height=a,o.getContext("2d").drawImage(r,0,0,s,a),t(o.toDataURL("image/jpeg",.82))},r.src=i.result},i.readAsDataURL(n)})}function yS(n,{audio:e,onPublish:t}){function i(){const o=ke.news(),l=Ki(),c=o.slice(0,6).map(u=>u.title).join("   •   ")||"Kazoo TV";n.innerHTML=`
      <div class="news">
        <div class="ticker"><span>${bn(c)}   •   ${bn(c)}   •   </span></div>
        <div class="news-head">
          <h3>📢 NOTICIAS Y ANUNCIOS</h3>
          ${l?'<button class="btn" id="addNews">＋ NUEVA NOTICIA</button>':""}
        </div>
        <div class="news-list">
          ${o.length===0?'<div class="pv-note">Aún no hay noticias.</div>':o.map(u=>`
            <div class="news-card" data-id="${u.id}">
              ${u.img?`<div class="news-thumb" style="background-image:url('${u.img}')"></div>`:'<div class="news-thumb news-thumb-empty">📺</div>'}
              <div class="news-cardbody">
                <div class="news-title">${bn(u.title)}</div>
                <div class="news-desc">${bn(pu(u.html).slice(0,130))}${pu(u.html).length>130?"…":""}</div>
                <div class="news-date">${mu(u.ts)}${u.video?" · 🎬":""}</div>
              </div>
              <div class="news-go">▸</div>
            </div>`).join("")}
        </div>
      </div>`,n.querySelectorAll(".news-card").forEach(u=>{u.onclick=()=>{e.beep(520,.05),r(u.dataset.id)}}),l&&(n.querySelector("#addNews").onclick=()=>{e.beep(600,.05),s(null)})}function r(o){const l=ke.news().find(u=>u.id===o);if(!l)return i();const c=Ki();n.innerHTML=`
      <div class="news news-detail">
        <button class="btn ghost" id="back">◄ NOTICIAS</button>
        <h2 class="nd-title">${bn(l.title)}</h2>
        <div class="nd-date">${mu(l.ts)}</div>
        ${_S(l)}
        <div class="nd-body">${l.html||""}</div>
        ${c?'<div class="mrow"><button class="btn" id="edit">EDITAR</button><button class="btn ghost" id="del">BORRAR</button></div>':""}
      </div>`,n.querySelector("#back").onclick=()=>{e.blip(),i()},c&&(n.querySelector("#edit").onclick=()=>s(l),n.querySelector("#del").onclick=()=>{confirm("¿Borrar esta noticia?")&&(ke.deleteNews(l.id),e.staticBurst(.1),i())})}function s(o){const l=document.createElement("div");l.className="modal-ov",l.innerHTML=`
      <div class="modal modal-lg">
        <h3>${o?"EDITAR":"NUEVA"} NOTICIA</h3>
        <input type="text" id="nt" placeholder="Título" value="${o?bn(o.title):""}" />
        <div class="rt-tools">
          <button data-cmd="bold"><b>B</b></button>
          <button data-cmd="italic"><i>I</i></button>
          <button data-cmd="underline"><u>U</u></button>
          <button data-cmd="insertUnorderedList">•</button>
        </div>
        <div id="nb" class="rt-body" contenteditable="true">${o?o.html:""}</div>
        <div class="frow"><label>Miniatura:</label> <input type="file" id="nimg" accept="image/*" /> <input type="text" id="nimgurl" placeholder="o pega URL de imagen" value="${o&&o.img&&!o.img.startsWith("data:")?bn(o.img):""}" /></div>
        <div class="frow"><label>Video:</label> <input type="text" id="nvid" placeholder="URL de YouTube o .mp4 (opcional)" value="${o?bn(o.video||""):""}" /></div>
        <div class="mrow"><button class="btn" id="pub">${o?"GUARDAR":"PUBLICAR"}</button><button class="btn ghost" id="cancel">CANCELAR</button></div>
        <div class="merr" id="err"></div>
      </div>`,document.body.appendChild(l);let c=o?o.img:"";const u=l.querySelector("#nb");l.querySelectorAll(".rt-tools button").forEach(d=>{d.onmousedown=f=>{f.preventDefault(),document.execCommand(d.dataset.cmd,!1,null),u.focus()}}),l.querySelector("#nimg").onchange=async d=>{const f=d.target.files[0];f&&(c=await vS(f),l.querySelector("#nimgurl").value="",l.querySelector("#err").textContent="Imagen lista ✓")};const h=()=>l.remove();l.querySelector("#cancel").onclick=h,l.addEventListener("click",d=>{d.target===l&&h()}),l.addEventListener("keydown",d=>{d.stopPropagation(),d.key==="Escape"&&h()}),l.querySelector("#pub").onclick=()=>{const d=l.querySelector("#nt").value.trim(),f=u.innerHTML.trim();if(!d){l.querySelector("#err").textContent="Ponle un título";return}const _=l.querySelector("#nimgurl").value.trim()||c||"",p=l.querySelector("#nvid").value.trim();o?(ke.updateNews(o.id,{title:d,html:f,img:_,video:p}),e.beep(700,.06)):(ke.addNews({id:gi(),title:d,html:f,img:_,video:p,ts:Date.now()}),ke.markSeen(),e.enterSfx(),t&&t(d)),h(),i()}}i(),ke.markSeen();const a=gl(()=>{i(),ke.markSeen()});return()=>{a(),n.innerHTML=""}}const Cs=n=>String(n??"").replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e]),gu=["#fa4dd5","#4dd5fa","#8bff9e","#ffd24d","#ff6b6b","#c084fc","#ffffff","#000000"];function SS(n,e=480){return new Promise(t=>{const i=new FileReader;i.onload=()=>{const r=new Image;r.onload=()=>{let{width:s,height:a}=r;if(s>e||a>e){const l=e/Math.max(s,a);s=Math.round(s*l),a=Math.round(a*l)}const o=document.createElement("canvas");o.width=s,o.height=a,o.getContext("2d").drawImage(r,0,0,s,a),t(o.toDataURL("image/png"))},r.src=i.result},i.readAsDataURL(n)})}function xS(n,{audio:e}){const t=dS();let i="move",r=gu[0],s=4,a=null,o=!1;n.innerHTML=`
    <div class="board-wrap">
      <div class="board" id="board"><canvas id="paint"></canvas></div>
      <div class="board-tools">
        <button class="tool sel" data-mode="move" title="Mover">🖐️</button>
        <button class="tool" data-mode="paint" title="Pincel">✏️</button>
        <button class="tool" data-mode="text" title="Texto">🅰️</button>
        <button class="tool" data-mode="image" title="Imagen">🖼️</button>
        <button class="tool" data-mode="post" title="Post">📝</button>
        <button class="tool" data-mode="erase" title="Borrar">🧽</button>
        <span class="tool-sep"></span>
        <span class="swatches" id="sw"></span>
        <input type="range" id="brush" min="2" max="22" value="4" title="Grosor del pincel" />
        ${Ki()?'<button class="btn ghost" id="clearAll">🗑️ TODO</button>':""}
        ${`<a class="btn ghost dc" href="${$n.discordInvite}" target="_blank" rel="noopener">💬 DISCORD</a>`}
      </div>
      <input type="file" id="imgpick" accept="image/*" hidden />
    </div>`;const l=n.querySelector("#board"),c=n.querySelector("#paint"),u=c.getContext("2d"),h=n.querySelector("#imgpick"),d=n.querySelector("#sw");gu.forEach((C,D)=>{const v=document.createElement("button");v.className="swatch"+(D===0?" on":""),v.style.background=C,v.onclick=()=>{r=C,d.querySelectorAll(".swatch").forEach(x=>x.classList.remove("on")),v.classList.add("on")},d.appendChild(v)}),n.querySelector("#brush").oninput=C=>s=+C.target.value,Ki()&&(n.querySelector("#clearAll").onclick=()=>{confirm("¿Borrar TODO el muro?")&&(ke.graffiti().slice().forEach(C=>ke.deleteGraffiti(C.id)),e.staticBurst(.12),y())}),n.querySelectorAll(".tool").forEach(C=>{C.onclick=()=>{i=C.dataset.mode,n.querySelectorAll(".tool").forEach(D=>D.classList.remove("sel")),C.classList.add("sel"),l.style.cursor=i==="move"?"default":i==="erase"?"cell":"crosshair"}});function f(C,D,v=.04){let x=!1;g().filter(P=>P.type==="draw"&&_(P)).forEach(P=>{P.points.some(L=>Math.hypot(L[0]-C,L[1]-D)<v)&&(ke.deleteGraffiti(P.id),x=!0)}),x&&(e.staticBurst(.05),S())}const g=()=>ke.graffiti(),_=C=>Ki()||C.owner===t;function p(){c.width=l.clientWidth,c.height=l.clientHeight,S()}function m(C){u.strokeStyle=C.color,u.lineWidth=C.size,u.lineCap="round",u.lineJoin="round",u.beginPath(),C.points.forEach((D,v)=>{const x=D[0]*c.width,P=D[1]*c.height;v?u.lineTo(x,P):u.moveTo(x,P)}),u.stroke()}function S(){u.clearRect(0,0,c.width,c.height),g().filter(C=>C.type==="draw").forEach(m)}function y(){var D;l.querySelectorAll(".bitem").forEach(v=>v.remove()),(D=l.querySelector(".wall-empty"))==null||D.remove();const C=g();if(C.length===0){const v=document.createElement("div");v.className="wall-empty",v.textContent="Muro vacío… pinta, escribe o sube algo 🎨",l.appendChild(v)}C.filter(v=>v.type!=="draw").forEach(v=>l.appendChild(b(v))),S()}function b(C){const D=document.createElement("div");if(D.className="bitem bitem-"+C.type,D.style.left=C.x+"%",D.style.top=C.y+"%",C.rot&&(D.style.transform=`rotate(${C.rot}deg)`),C.type==="text"?(D.style.color=C.color,D.style.fontSize=(C.size||26)+"px",D.innerHTML=`<span>${Cs(C.content)}</span>`):C.type==="image"?(D.style.width=(C.w||160)+"px",D.innerHTML=`<img src="${C.src}" draggable="false" />`):C.type==="post"&&(D.style.borderColor=C.color||"#fa4dd5",D.innerHTML=`<div class="post-t" style="color:${C.color||"#fa4dd5"}">${Cs(C.title)}</div><div class="post-b">${Cs(C.body)}</div>${C.by?`<div class="post-by">— ${Cs(C.by)}</div>`:""}`),_(C)){const v=document.createElement("div");v.className="bit-ctrl",v.innerHTML='<button title="editar">✎</button><button title="borrar">✕</button>';const[x,P]=v.querySelectorAll("button");x.onpointerdown=L=>L.stopPropagation(),x.onclick=L=>{L.stopPropagation(),M(C)},P.onpointerdown=L=>L.stopPropagation(),P.onclick=L=>{L.stopPropagation(),ke.deleteGraffiti(C.id),e.staticBurst(.08),y()},D.appendChild(v)}return D.addEventListener("pointerdown",v=>{if(i==="erase"){_(C)&&(ke.deleteGraffiti(C.id),e.staticBurst(.08),y());return}if(i!=="move"||!_(C))return;v.preventDefault(),v.stopPropagation();const x=l.getBoundingClientRect(),P=v.clientX,L=v.clientY,I=C.x,F=C.y;try{D.setPointerCapture(v.pointerId)}catch{}D.classList.add("dragging");const z=V=>{C.x=Math.max(0,Math.min(96,I+(V.clientX-P)/x.width*100)),C.y=Math.max(0,Math.min(94,F+(V.clientY-L)/x.height*100)),D.style.left=C.x+"%",D.style.top=C.y+"%"},G=()=>{D.classList.remove("dragging"),D.removeEventListener("pointermove",z),D.removeEventListener("pointerup",G),ke.updateGraffiti(C.id,{x:C.x,y:C.y})};D.addEventListener("pointermove",z),D.addEventListener("pointerup",G)}),D}function M(C){if(C.type==="text"){const D=prompt("Editar texto:",C.content);D!=null&&(ke.updateGraffiti(C.id,{content:D.slice(0,80)}),y())}else if(C.type==="post"){const D=prompt("Título:",C.title);if(D==null)return;const v=prompt("Texto:",C.body);if(v==null)return;ke.updateGraffiti(C.id,{title:D.slice(0,40),body:v.slice(0,220)}),y()}else C.type==="image"&&confirm("¿Borrar imagen?")&&(ke.deleteGraffiti(C.id),y())}l.addEventListener("pointerdown",C=>{if(C.target.closest(".bitem"))return;const D=l.getBoundingClientRect(),v=(C.clientX-D.left)/D.width,x=(C.clientY-D.top)/D.height;if(i==="erase"){o=!0;try{l.setPointerCapture(C.pointerId)}catch{}f(v,x)}else if(i==="paint"){a={id:gi(),type:"draw",color:r,size:s,owner:t,ts:Date.now(),points:[[v,x]]};try{l.setPointerCapture(C.pointerId)}catch{}}else if(i==="text"){const P=prompt("Tu texto:");P&&(ke.addGraffiti({id:gi(),type:"text",content:P.slice(0,80),color:r,size:26,x:v*100,y:x*100,rot:Math.random()*16-8|0,owner:t,ts:Date.now()}),e.enterSfx(),y())}else if(i==="post"){const P=prompt("Título del post:");if(!P)return;const L=prompt("Texto:")||"",I=prompt("Tu nombre (opcional):")||"";ke.addGraffiti({id:gi(),type:"post",title:P.slice(0,40),body:L.slice(0,220),by:I.slice(0,18),color:r,x:v*100,y:x*100,owner:t,ts:Date.now()}),e.enterSfx(),y()}else i==="image"&&(h._pos=[v*100,x*100],h.click())}),l.addEventListener("pointermove",C=>{if(!a&&!o)return;const D=l.getBoundingClientRect(),v=(C.clientX-D.left)/D.width,x=(C.clientY-D.top)/D.height;if(o){f(v,x);return}a.points.push([v,x]),m(a)}),l.addEventListener("pointerup",()=>{o=!1,a&&(a.points.length>1&&ke.addGraffiti(a),a=null,e.beep(480,.03))}),h.onchange=async C=>{const D=C.target.files[0];if(!D)return;const v=await SS(D),[x,P]=h._pos||[40,30];ke.addGraffiti({id:gi(),type:"image",src:v,w:160,x,y:P,rot:Math.random()*10-5|0,owner:t,ts:Date.now()}),e.enterSfx(),C.target.value="",y()},p(),y();const T=gl(()=>y()),A=()=>p();return window.addEventListener("resize",A),()=>{T(),window.removeEventListener("resize",A),n.innerHTML=""}}const rn=n=>String(n??"").replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e]),il=864e5;function ES(n,e=640){return new Promise(t=>{const i=new FileReader;i.onload=()=>{const r=new Image;r.onload=()=>{let{width:s,height:a}=r;if(s>e||a>e){const l=e/Math.max(s,a);s=Math.round(s*l),a=Math.round(a*l)}const o=document.createElement("canvas");o.width=s,o.height=a,o.getContext("2d").drawImage(r,0,0,s,a),t(o.toDataURL("image/jpeg",.82))},r.src=i.result},i.readAsDataURL(n)})}const rl="kg_ev_dismissed",wS=n=>{try{return(JSON.parse(sessionStorage.getItem(rl))||[]).includes(n)}catch{return!1}},bS=n=>{try{const e=JSON.parse(sessionStorage.getItem(rl))||[];e.push(n),sessionStorage.setItem(rl,JSON.stringify(e))}catch{}};function AS(n){const e=new Date(n),t=e.getTime()-Date.now(),i=Math.floor(t/il),r=Math.floor(t%il/36e5);return`${e.toLocaleString([],{weekday:"long",day:"2-digit",month:"short",hour:"2-digit",minute:"2-digit"})} · ${i>0?`en ${i}d ${r}h`:`en ${r}h`}`}function TS(n,e){const t=Date.now(),i=ke.events().filter(r=>{const s=new Date(r.date).getTime();return s>t&&s-t<=3.2*il}).sort((r,s)=>new Date(r.date)-new Date(s.date)).find(r=>!wS(r.id));i&&MS(n,i,e)}function MS(n,e,t){const i=document.createElement("div");i.className="win-ov",i.innerHTML=`
    <div class="win98">
      <div class="win-bar"><span class="win-title">📺 EVENTO PRÓXIMO</span><button class="win-x" title="cerrar">✕</button></div>
      <div class="win-body">
        ${e.thumb?`<img class="win-thumb" src="${e.thumb}" alt="evento" />`:""}
        <div class="win-h">${rn(e.title)}</div>
        <div class="win-when">🗓️ ${rn(AS(e.date))}</div>
        ${e.desc?`<div class="win-desc">${rn(e.desc)}</div>`:""}
      </div>
      <div class="win-foot"><button class="btn win-cta">${rn(e.buttonText||"¡AHÍ NOS VEMOS!")}</button></div>
    </div>`,n.appendChild(i),requestAnimationFrame(()=>i.classList.add("show")),t&&(t.beep(880,.09),setTimeout(()=>t.beep(1100,.09),120));const r=()=>{bS(e.id),i.classList.remove("show"),setTimeout(()=>i.remove(),260)};i.querySelector(".win-x").onclick=r,i.querySelector(".win-cta").onclick=()=>{e.buttonUrl&&window.open(e.buttonUrl,"_blank","noopener"),r()},i.addEventListener("click",s=>{s.target===i&&r()})}function RS(n){const e=document.createElement("div");e.className="modal-ov",document.body.appendChild(e),e.addEventListener("keydown",r=>r.stopPropagation()),e.addEventListener("click",r=>{r.target===e&&e.remove()});function t(){const r=ke.events().slice().sort((s,a)=>new Date(s.date)-new Date(a.date));e.innerHTML=`<div class="modal modal-lg">
      <h3>🗓️ EVENTOS</h3>
      <div class="ev-list">${r.length?r.map(s=>`<div class="ev-row"><span>${rn(s.title)} · ${new Date(s.date).toLocaleString()}</span><span><button data-ed="${s.id}" class="mini">✎</button><button data-del="${s.id}" class="mini">✕</button></span></div>`).join(""):'<div class="pv-note">Sin eventos. Crea uno y saldrá el aviso cuando falten ~3 días.</div>'}</div>
      <div class="mrow"><button class="btn" id="newEv">＋ NUEVO EVENTO</button><button class="btn ghost" id="closeEv">CERRAR</button></div>
    </div>`,e.querySelector("#closeEv").onclick=()=>e.remove(),e.querySelector("#newEv").onclick=()=>i(null),e.querySelectorAll("[data-ed]").forEach(s=>s.onclick=()=>i(ke.events().find(a=>a.id===s.dataset.ed))),e.querySelectorAll("[data-del]").forEach(s=>s.onclick=()=>{ke.deleteEvent(s.dataset.del),t()})}function i(r){e.innerHTML=`<div class="modal modal-lg">
      <h3>${r?"EDITAR":"NUEVO"} EVENTO</h3>
      <input type="text" id="et" placeholder="Título del evento" value="${r?rn(r.title):""}" />
      <div class="frow"><label>Fecha/hora:</label> <input type="datetime-local" id="ed" value="${r?rn(r.date):""}" /></div>
      <textarea id="edesc" class="rt-body" placeholder="Descripción (opcional)">${r?rn(r.desc||""):""}</textarea>
      <div class="frow"><label>Miniatura:</label> <input type="file" id="ethumb" accept="image/*" /> <input type="text" id="ethumburl" placeholder="o URL" value="${r&&r.thumb&&!r.thumb.startsWith("data:")?rn(r.thumb):""}" /></div>
      <div class="frow"><label>Texto del botón:</label> <input type="text" id="ebtn" placeholder="¡AHÍ NOS VEMOS!" value="${r?rn(r.buttonText||""):""}" /></div>
      <div class="frow"><label>Link del botón:</label> <input type="text" id="eurl" placeholder="https://…" value="${r?rn(r.buttonUrl||""):""}" /></div>
      <div class="mrow"><button class="btn" id="save">GUARDAR</button><button class="btn ghost" id="back">◄</button></div>
      <div class="merr" id="err"></div>
    </div>`;let s=r?r.thumb:"";e.querySelector("#ethumb").onchange=async a=>{const o=a.target.files[0];o&&(s=await ES(o),e.querySelector("#err").textContent="Miniatura lista ✓")},e.querySelector("#back").onclick=t,e.querySelector("#save").onclick=()=>{const a=e.querySelector("#et").value.trim(),o=e.querySelector("#ed").value;if(!a||!o){e.querySelector("#err").textContent="Falta título o fecha";return}const l=e.querySelector("#ethumburl").value.trim(),c={title:a,date:o,desc:e.querySelector("#edesc").value.trim(),thumb:l||s||"",buttonText:e.querySelector("#ebtn").value.trim(),buttonUrl:e.querySelector("#eurl").value.trim()};r?ke.updateEvent(r.id,c):ke.addEvent({id:gi(),...c}),n&&n.enterSfx(),t()}}t()}function oi(n,e){const t=document.createElement(n);return e&&(t.className=e),t}const Za=n=>String(n??"").replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e]);function CS(n){n.innerHTML="";const e=oi("div","crt flicker");e.innerHTML='<div class="fx-grad"></div><div class="grain"></div><div class="scanlines"></div><div class="fx-bloom"></div><div class="vignette"></div><div class="hud-corner"><span class="hc-tl">KZO-TV // UPLINK</span><span class="hc-br" id="hcTs"></span></div><div class="fx-glitch" id="fxGlitch"></div>';const t=oi("div","screen");e.appendChild(t),n.appendChild(e),t.innerHTML=`
    <div class="topbar">
      <div class="brand"><div class="k">K</div><div><div class="tt">KAZOO GANG</div><div class="sub">Kazoo TV<span class="caret"></span></div></div></div>
      <div class="hud-top"><span class="hud-sig" id="hudSig">▮▮▮▮▯</span><span class="hud-tag" id="hudSys">SYS: NOMINAL</span></div>
      <div class="corner">
        <div class="ch" id="chNum">CH 01</div>
        <div class="clock" id="clock">--:--:--</div>
        <div class="corner-sub" id="hudUptime">UPTIME 00:00:00</div>
        <div class="corner-sub">19.43°N 99.13°W</div>
      </div>
    </div>
    <div class="mid" id="mid"></div>
    <div class="botbar">
      <div class="bl"><button id="adminBtn" class="admin-btn">🔒 ADMIN</button><button id="evBtn" class="admin-btn" style="display:none">🗓️ EVENTOS</button><span id="hint">◄ ► CANAL · OK ENTRAR · ESC VOLVER</span></div>
      <div class="hud-bot"><span class="hud-chip">LAT <b id="hudLat">--</b></span><span class="hud-chip">CPU <b id="hudCpu">--</b></span><span class="hud-chip">RAM <b id="hudRam">--</b></span><span class="hud-chip" id="hudNow">CH01 · EN VIVO</span></div>
      <div class="vol"><span>VOL</span><input type="range" id="vol" min="0" max="100" value="60" /><span id="volval">60</span></div>
    </div>`;const i=t.querySelector("#mid"),r=t.querySelector("#chNum"),s=t.querySelector("#adminBtn"),a=t.querySelector("#evBtn"),o=oi("button","mystery-face");o.title="¿…?",o.innerHTML='<img src="https://img.youtube.com/vi/VG2WOZx4FVE/hqdefault.jpg" alt="" draggable="false" />',e.appendChild(o),o.onclick=()=>{_r(),vr(.1);const O=oi("div","uvu-overlay");O.innerHTML='<div class="uvu-box"><button class="uvu-x" title="Cerrar">✕</button><iframe src="https://www.youtube.com/embed/VG2WOZx4FVE?start=16&autoplay=1&rel=0&modestbranding=1" allow="autoplay; encrypted-media; fullscreen" allowfullscreen></iframe></div>',e.appendChild(O),requestAnimationFrame(()=>O.classList.add("show"));const Y=()=>{O.classList.remove("show"),setTimeout(()=>O.remove(),200),wn&&wn()};O.querySelector(".uvu-x").onclick=Y,O.addEventListener("click",N=>{N.target===O&&Y()})};const l=e.querySelector("#fxGlitch");let c=null;function u(O){l.classList.remove("on","strong"),l.offsetWidth,l.classList.add("on"),O&&l.classList.add("strong"),clearTimeout(c),c=setTimeout(()=>l.classList.remove("on","strong"),O?300:200)}function h(){const O=m[f],Y=t.querySelector("#hudNow");Y&&O&&(Y.textContent="CH"+O.n+" · "+O.name)}const d={online:null,text:""};let f=0,g=!1,_=null;function p(){return d.online===!0?`<span class="live-badge on">🔴 ONLINE${d.text?" · "+Za(d.text):""}</span>`:d.online===!1?'<span class="live-badge off">⚫ OFFLINE</span>':'<span class="live-badge unk">buscando señal…</span>'}const m=[{n:"01",name:"EN VIVO",preview:()=>`<div class="pv-tag">🔴 EN VIVO · TWITCH</div>${p()}<div class="pv-line">${d.online===!1?'Ahorita está apagado. Entra para ver el "offline" o cae al rato.':"¡Cae al directo cuando esté prendido!"}</div><button class="btn enter">▶ ENTRAR AL DIRECTO</button>`,open:O=>{const Y=location.hostname||"localhost";return O.innerHTML=`<div class="live-wrap"><div class="live-status" id="lst">${p()}</div><iframe src="https://player.twitch.tv/?channel=${$n.twitchChannel}&parent=${Y}&autoplay=true&muted=false" allowfullscreen></iframe></div>`,()=>{O.innerHTML=""}}},{n:"02",name:"KAZOO CINEMA",preview:'<div class="pv-tag">🎬 KAZOO CINEMA</div><div class="pv-big">En función · 24/7</div><div class="pv-line">Solo tus videos largos, todo el día, como en el cine.</div><button class="btn enter">▶ ENTRAR A LA SALA</button>',open:O=>{const Y=$n.cinemaVideos.slice().sort(()=>Math.random()-.5),N=Y[0],X=Y.slice(1).join(","),J=`https://www.youtube-nocookie.com/embed/${N}?playlist=${X}&loop=1&autoplay=1&rel=0&modestbranding=1`;return O.innerHTML=`<div class="theater"><div class="curtain left"></div><div class="curtain right"></div><div class="screenbox" id="cineScreen"><iframe src="${J}" allow="autoplay; encrypted-media; fullscreen" allowfullscreen></iframe></div><div class="seats"></div></div>`,_r(),()=>{O.innerHTML=""}}},{n:"03",name:"NOTICIAS Y ANUNCIOS",preview:()=>{const O=ke.news().slice(0,3);return`<div class="pv-tag">📢 NOTICIAS Y ANUNCIOS</div>${O.length?O.map(Y=>`<div class="pv-line">• ${Za(Y.title)}</div>`).join(""):'<div class="pv-line">Sin noticias todavía.</div>'}<button class="btn enter">▶ VER NOTICIAS</button>`},open:O=>yS(O,{audio:fr,onPublish:Y=>T(Y)})},{n:"04",name:"KAZOO GANG",preview:'<div class="pv-tag">💬 KAZOO GANG · MURO</div><div class="pv-big">Grafitea el muro</div><div class="pv-line">Pinta tu tag, deja tu marca. Todos pueden pintar.</div><button class="btn enter">▶ ENTRAR AL MURO</button>',open:O=>xS(O,{audio:fr})},{n:"05",name:"MINIJUEGOS",preview:'<div class="pv-tag">🕹️ MINIJUEGOS</div><div class="pv-line">11 juegos: Wordle, Tetris, Pac-Man…</div><div class="pv-line">Flechas / WASD / espacio</div><button class="btn enter">▶ JUGAR</button>',open:O=>{const Y=[{t:"🔤 Kazoo Wordle",m:Z_},{t:"🧱 Kazoo Tetris",m:$_},{t:"👾 Space Invaders",m:j_},{t:"🟡 Kazoo-Man",m:q_},{t:"🏎️ Kazoo Motorist",m:X_},{t:"🧩 Maze",m:K_},{t:"🎯 Breakout",m:Y_},{t:"🐤 Flappy Gata",m:G_},{t:"🐍 Snake",m:z_},{t:"#  Gato vs IA",m:V_},{t:"🏃 Kazoo Runner",m:W_}];let N=null;function X(){N&&(N(),N=null),O.innerHTML='<div class="arcade"><h3>🕹️ MINIJUEGOS</h3><div class="glist"></div><div class="pv-note">Flechas / WASD / espacio</div></div>';const ee=O.querySelector(".glist");Y.forEach(_e=>{const be=oi("button","btn ghost");be.textContent=_e.t,be.onclick=()=>{_r(),J(_e)},ee.appendChild(be)})}function J(ee){O.innerHTML='<div class="gamewrap"><button class="btn ghost backg">◄ JUEGOS</button><div class="gcanvas"></div></div>',O.querySelector(".backg").onclick=()=>{wn(),X()},N=ee.m(O.querySelector(".gcanvas"),fr)}return X(),()=>{N&&N()}}},{n:"06",name:"MÁS KAZOO",preview:'<div class="pv-tag">🔗 MÁS KAZOO</div><div class="pv-big">Todo lo demás de mí</div><div class="pv-line">Tus redes en un solo lugar.</div><button class="btn enter">▶ VER REDES</button>',open:O=>{const Y=$n.socials.map(N=>`<a class="social" style="--c:${N.color}" href="${N.url}" target="_blank" rel="noopener">${N.name}</a>`).join("");return O.innerHTML=`<div class="more"><h3>🔗 MÁS KAZOO</h3><p>Sígueme en todos lados — aquí están todos mis links.</p><div class="sgrid">${Y}</div></div>`,()=>{O.innerHTML=""}}}];function S(O){return typeof O.preview=="function"?O.preview():O.preview}function y(){i.className="mid",i.innerHTML='<ul class="menu-list" id="list"></ul><div class="preview" id="prev"></div>';const O=i.querySelector("#list");m.forEach((X,J)=>{const ee=oi("li",J===f?"sel":"");ee.textContent=(J===f?"▸ ":"  ")+X.n+"   "+X.name,ee.onclick=()=>{J===f?M():(f=J,u(!1),wn(),y())},O.appendChild(ee)});const Y=i.querySelector("#prev");Y.innerHTML=S(m[f]);const N=Y.querySelector(".enter");N&&(N.onclick=M),r.textContent="CH "+m[f].n,h()}function b(){_&&(_(),_=null),g=!1,y()}function M(){u(!0),_r(),vr(),g=!0,r.textContent="CH "+m[f].n,h(),i.className="mid",i.innerHTML=`<div class="channel"><div class="chead"><span>${m[f].n} · ${m[f].name}</span><button class="btn ghost back">◄ VOLVER</button></div><div class="stage" id="stage"></div></div>`,i.querySelector(".back").onclick=()=>{u(!0),wn(),vr(),b()},_=m[f].open(i.querySelector("#stage"))||null}function T(O){const Y=oi("div","news-toast");Y.innerHTML=`<span class="nt-ico">📢</span><div class="nt-body"><b>¡NOTICIA NUEVA!</b><div class="nt-title">${Za(O)}</div></div><span class="nt-x">✕</span>`,e.appendChild(Y),requestAnimationFrame(()=>Y.classList.add("show"));const N=()=>{Y.classList.remove("show"),setTimeout(()=>Y.remove(),300)};Y.querySelector(".nt-x").onclick=X=>{X.stopPropagation(),N()},Y.onclick=()=>{N(),ke.markSeen(),g||(f=2,M())},zo(990,.08),setTimeout(()=>zo(760,.08),110),setTimeout(N,8e3)}async function A(){try{const Y=(await(await fetch(`https://decapi.me/twitch/uptime/${$n.twitchChannel}`,{cache:"no-store"})).text()).trim();d.online=!/offline|not\s|error|unable/i.test(Y),d.text=d.online?Y:""}catch{d.online=null,d.text=""}if(!g&&f===0)y();else if(g&&f===0){const O=i.querySelector("#lst");O&&(O.innerHTML=p())}}const C=t.querySelector("#clock"),D=()=>C.textContent=new Date().toLocaleTimeString([],{hour:"2-digit",minute:"2-digit",second:"2-digit"});D(),setInterval(D,1e3);const v=Date.now(),x={sig:t.querySelector("#hudSig"),sys:t.querySelector("#hudSys"),up:t.querySelector("#hudUptime"),lat:t.querySelector("#hudLat"),cpu:t.querySelector("#hudCpu"),ram:t.querySelector("#hudRam"),ts:e.querySelector("#hcTs")},P=O=>String(O).padStart(2,"0");let L=12,I=41,F=24;function z(){const O=Math.floor((Date.now()-v)/1e3);x.up.textContent=`UPTIME ${P(Math.floor(O/3600))}:${P(Math.floor(O/60)%60)}:${P(O%60)}`,L=Math.max(6,Math.min(48,L+(Math.random()*6-3))),I=Math.max(28,Math.min(74,I+(Math.random()*4-2))),F=Math.max(11,Math.min(72,F+(Math.random()*10-5))),x.cpu.textContent=Math.round(L)+"%",x.ram.textContent=Math.round(I)+"%",x.lat.textContent=Math.round(F)+"ms";const Y=Math.random()<.14?3:Math.random()<.25?5:4;x.sig.textContent="▮".repeat(Y)+"▯".repeat(5-Y),Math.random()<.05?x.sys.textContent=["SIGNAL: WEAK","RE-TUNING…","SYNC","UPLINK OK"][Math.floor(Math.random()*4)]:Math.random()<.15&&(x.sys.textContent="SYS: NOMINAL");const N=new Date;x.ts.textContent=`${N.getFullYear()}.${P(N.getMonth()+1)}.${P(N.getDate())} ${P(N.getHours())}:${P(N.getMinutes())}:${P(N.getSeconds())} · v1.0`}z(),setInterval(z,1e3);let G=null;t.addEventListener("pointerover",O=>{const Y=O.target.closest(".menu-list li, .btn, .admin-btn, .enter, .social, .tool");Y&&Y!==G&&(G=Y,Zu())}),function O(){setTimeout(()=>{u(!1),vr(.05),O()},18e3+Math.random()*32e3)}();const V=t.querySelector("#vol"),se=t.querySelector("#volval");V.oninput=()=>{se.textContent=V.value,Go(V.value/100)},V.onchange=()=>wn(),Go(.6),s.onclick=()=>pS(),a.onclick=()=>RS(fr);function le(O){s.textContent=O?"🔓 ADMIN ✓":"🔒 ADMIN",s.classList.toggle("on",O),a.style.display=O?"":"none"}le(Ki()),fS(O=>{le(O),g&&(f===2||f===3)&&M()}),document.addEventListener("keydown",O=>{const Y=(O.target.tagName||"").toLowerCase();if(!(Y==="input"||Y==="textarea"||O.target.isContentEditable)){if(g){O.key==="Escape"&&b();return}O.key==="ArrowDown"?(O.preventDefault(),f=(f+1)%m.length,u(!1),wn(),y()):O.key==="ArrowUp"?(O.preventDefault(),f=(f-1+m.length)%m.length,u(!1),wn(),y()):O.key==="Enter"&&M()}}),b(),A(),setInterval(A,6e4);let pe=!1;gl(()=>{g||y(),!pe&&ke.news().length&&(pe=!0,ke.hasUnseen()&&T(ke.news()[0].title))}),setTimeout(()=>TS(e,fr),2200)}hS();const _u=document.getElementById("app");H_(_u,()=>{Ju(),CS(_u)});
