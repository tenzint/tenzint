(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6b43cfea"],{"0d3b":function(e,t,r){var n=r("d039"),a=r("b622"),o=r("c430"),s=a("iterator");e.exports=!n((function(){var e=new URL("b?a=1&b=2&c=3","http://a"),t=e.searchParams,r="";return e.pathname="c%20d",t.forEach((function(e,n){t["delete"]("b"),r+=n+e})),o&&!e.toJSON||!t.sort||"http://a/c%20d?a=1&c=3"!==e.href||"3"!==t.get("c")||"a=1"!==String(new URLSearchParams("?a=1"))||!t[s]||"a"!==new URL("https://a@b").username||"b"!==new URLSearchParams(new URLSearchParams("a=b")).get("a")||"xn--e1aybc"!==new URL("http://тест").host||"#%D0%B1"!==new URL("http://a#б").hash||"a1c3"!==r||"x"!==new URL("http://x",void 0).host}))},"2b3d":function(e,t,r){"use strict";r("3ca3");var n,a=r("23e7"),o=r("83ab"),s=r("0d3b"),i=r("da84"),u=r("37e8"),l=r("6eeb"),c=r("19aa"),h=r("5135"),f=r("60da"),p=r("4df4"),d=r("6547").codeAt,v=r("5fb2"),g=r("d44e"),m=r("9861"),b=r("69f3"),w=i.URL,y=m.URLSearchParams,k=m.getState,R=b.set,L=b.getterFor("URL"),U=Math.floor,C=Math.pow,S="Invalid authority",x="Invalid scheme",A="Invalid host",_="Invalid port",q=/[A-Za-z]/,B=/[\d+-.A-Za-z]/,j=/\d/,P=/^(0x|0X)/,E=/^[0-7]+$/,T=/^\d+$/,I=/^[\dA-Fa-f]+$/,z=/[\u0000\u0009\u000A\u000D #%/:?@[\\]]/,O=/[\u0000\u0009\u000A\u000D #/:?@[\\]]/,F=/^[\u0000-\u001F ]+|[\u0000-\u001F ]+$/g,D=/[\u0009\u000A\u000D]/g,V=function(e,t){var r,n,a;if("["==t.charAt(0)){if("]"!=t.charAt(t.length-1))return A;if(r=J(t.slice(1,-1)),!r)return A;e.host=r}else if(W(e)){if(t=v(t),z.test(t))return A;if(r=$(t),null===r)return A;e.host=r}else{if(O.test(t))return A;for(r="",n=p(t),a=0;a<n.length;a++)r+=K(n[a],H);e.host=r}},$=function(e){var t,r,n,a,o,s,i,u=e.split(".");if(u.length&&""==u[u.length-1]&&u.pop(),t=u.length,t>4)return e;for(r=[],n=0;n<t;n++){if(a=u[n],""==a)return e;if(o=10,a.length>1&&"0"==a.charAt(0)&&(o=P.test(a)?16:8,a=a.slice(8==o?1:2)),""===a)s=0;else{if(!(10==o?T:8==o?E:I).test(a))return e;s=parseInt(a,o)}r.push(s)}for(n=0;n<t;n++)if(s=r[n],n==t-1){if(s>=C(256,5-t))return null}else if(s>255)return null;for(i=r.pop(),n=0;n<r.length;n++)i+=r[n]*C(256,3-n);return i},J=function(e){var t,r,n,a,o,s,i,u=[0,0,0,0,0,0,0,0],l=0,c=null,h=0,f=function(){return e.charAt(h)};if(":"==f()){if(":"!=e.charAt(1))return;h+=2,l++,c=l}while(f()){if(8==l)return;if(":"!=f()){t=r=0;while(r<4&&I.test(f()))t=16*t+parseInt(f(),16),h++,r++;if("."==f()){if(0==r)return;if(h-=r,l>6)return;n=0;while(f()){if(a=null,n>0){if(!("."==f()&&n<4))return;h++}if(!j.test(f()))return;while(j.test(f())){if(o=parseInt(f(),10),null===a)a=o;else{if(0==a)return;a=10*a+o}if(a>255)return;h++}u[l]=256*u[l]+a,n++,2!=n&&4!=n||l++}if(4!=n)return;break}if(":"==f()){if(h++,!f())return}else if(f())return;u[l++]=t}else{if(null!==c)return;h++,l++,c=l}}if(null!==c){s=l-c,l=7;while(0!=l&&s>0)i=u[l],u[l--]=u[c+s-1],u[c+--s]=i}else if(8!=l)return;return u},M=function(e){for(var t=null,r=1,n=null,a=0,o=0;o<8;o++)0!==e[o]?(a>r&&(t=n,r=a),n=null,a=0):(null===n&&(n=o),++a);return a>r&&(t=n,r=a),t},N=function(e){var t,r,n,a;if("number"==typeof e){for(t=[],r=0;r<4;r++)t.unshift(e%256),e=U(e/256);return t.join(".")}if("object"==typeof e){for(t="",n=M(e),r=0;r<8;r++)a&&0===e[r]||(a&&(a=!1),n===r?(t+=r?":":"::",a=!0):(t+=e[r].toString(16),r<7&&(t+=":")));return"["+t+"]"}return e},H={},X=f({},H,{" ":1,'"':1,"<":1,">":1,"`":1}),Z=f({},X,{"#":1,"?":1,"{":1,"}":1}),G=f({},Z,{"/":1,":":1,";":1,"=":1,"@":1,"[":1,"\\":1,"]":1,"^":1,"|":1}),K=function(e,t){var r=d(e,0);return r>32&&r<127&&!h(t,e)?e:encodeURIComponent(e)},Q={ftp:21,file:null,http:80,https:443,ws:80,wss:443},W=function(e){return h(Q,e.scheme)},Y=function(e){return""!=e.username||""!=e.password},ee=function(e){return!e.host||e.cannotBeABaseURL||"file"==e.scheme},te=function(e,t){var r;return 2==e.length&&q.test(e.charAt(0))&&(":"==(r=e.charAt(1))||!t&&"|"==r)},re=function(e){var t;return e.length>1&&te(e.slice(0,2))&&(2==e.length||"/"===(t=e.charAt(2))||"\\"===t||"?"===t||"#"===t)},ne=function(e){var t=e.path,r=t.length;!r||"file"==e.scheme&&1==r&&te(t[0],!0)||t.pop()},ae=function(e){return"."===e||"%2e"===e.toLowerCase()},oe=function(e){return e=e.toLowerCase(),".."===e||"%2e."===e||".%2e"===e||"%2e%2e"===e},se={},ie={},ue={},le={},ce={},he={},fe={},pe={},de={},ve={},ge={},me={},be={},we={},ye={},ke={},Re={},Le={},Ue={},Ce={},Se={},xe=function(e,t,r,a){var o,s,i,u,l=r||se,c=0,f="",d=!1,v=!1,g=!1;r||(e.scheme="",e.username="",e.password="",e.host=null,e.port=null,e.path=[],e.query=null,e.fragment=null,e.cannotBeABaseURL=!1,t=t.replace(F,"")),t=t.replace(D,""),o=p(t);while(c<=o.length){switch(s=o[c],l){case se:if(!s||!q.test(s)){if(r)return x;l=ue;continue}f+=s.toLowerCase(),l=ie;break;case ie:if(s&&(B.test(s)||"+"==s||"-"==s||"."==s))f+=s.toLowerCase();else{if(":"!=s){if(r)return x;f="",l=ue,c=0;continue}if(r&&(W(e)!=h(Q,f)||"file"==f&&(Y(e)||null!==e.port)||"file"==e.scheme&&!e.host))return;if(e.scheme=f,r)return void(W(e)&&Q[e.scheme]==e.port&&(e.port=null));f="","file"==e.scheme?l=we:W(e)&&a&&a.scheme==e.scheme?l=le:W(e)?l=pe:"/"==o[c+1]?(l=ce,c++):(e.cannotBeABaseURL=!0,e.path.push(""),l=Ue)}break;case ue:if(!a||a.cannotBeABaseURL&&"#"!=s)return x;if(a.cannotBeABaseURL&&"#"==s){e.scheme=a.scheme,e.path=a.path.slice(),e.query=a.query,e.fragment="",e.cannotBeABaseURL=!0,l=Se;break}l="file"==a.scheme?we:he;continue;case le:if("/"!=s||"/"!=o[c+1]){l=he;continue}l=de,c++;break;case ce:if("/"==s){l=ve;break}l=Le;continue;case he:if(e.scheme=a.scheme,s==n)e.username=a.username,e.password=a.password,e.host=a.host,e.port=a.port,e.path=a.path.slice(),e.query=a.query;else if("/"==s||"\\"==s&&W(e))l=fe;else if("?"==s)e.username=a.username,e.password=a.password,e.host=a.host,e.port=a.port,e.path=a.path.slice(),e.query="",l=Ce;else{if("#"!=s){e.username=a.username,e.password=a.password,e.host=a.host,e.port=a.port,e.path=a.path.slice(),e.path.pop(),l=Le;continue}e.username=a.username,e.password=a.password,e.host=a.host,e.port=a.port,e.path=a.path.slice(),e.query=a.query,e.fragment="",l=Se}break;case fe:if(!W(e)||"/"!=s&&"\\"!=s){if("/"!=s){e.username=a.username,e.password=a.password,e.host=a.host,e.port=a.port,l=Le;continue}l=ve}else l=de;break;case pe:if(l=de,"/"!=s||"/"!=f.charAt(c+1))continue;c++;break;case de:if("/"!=s&&"\\"!=s){l=ve;continue}break;case ve:if("@"==s){d&&(f="%40"+f),d=!0,i=p(f);for(var m=0;m<i.length;m++){var b=i[m];if(":"!=b||g){var w=K(b,G);g?e.password+=w:e.username+=w}else g=!0}f=""}else if(s==n||"/"==s||"?"==s||"#"==s||"\\"==s&&W(e)){if(d&&""==f)return S;c-=p(f).length+1,f="",l=ge}else f+=s;break;case ge:case me:if(r&&"file"==e.scheme){l=ke;continue}if(":"!=s||v){if(s==n||"/"==s||"?"==s||"#"==s||"\\"==s&&W(e)){if(W(e)&&""==f)return A;if(r&&""==f&&(Y(e)||null!==e.port))return;if(u=V(e,f),u)return u;if(f="",l=Re,r)return;continue}"["==s?v=!0:"]"==s&&(v=!1),f+=s}else{if(""==f)return A;if(u=V(e,f),u)return u;if(f="",l=be,r==me)return}break;case be:if(!j.test(s)){if(s==n||"/"==s||"?"==s||"#"==s||"\\"==s&&W(e)||r){if(""!=f){var y=parseInt(f,10);if(y>65535)return _;e.port=W(e)&&y===Q[e.scheme]?null:y,f=""}if(r)return;l=Re;continue}return _}f+=s;break;case we:if(e.scheme="file","/"==s||"\\"==s)l=ye;else{if(!a||"file"!=a.scheme){l=Le;continue}if(s==n)e.host=a.host,e.path=a.path.slice(),e.query=a.query;else if("?"==s)e.host=a.host,e.path=a.path.slice(),e.query="",l=Ce;else{if("#"!=s){re(o.slice(c).join(""))||(e.host=a.host,e.path=a.path.slice(),ne(e)),l=Le;continue}e.host=a.host,e.path=a.path.slice(),e.query=a.query,e.fragment="",l=Se}}break;case ye:if("/"==s||"\\"==s){l=ke;break}a&&"file"==a.scheme&&!re(o.slice(c).join(""))&&(te(a.path[0],!0)?e.path.push(a.path[0]):e.host=a.host),l=Le;continue;case ke:if(s==n||"/"==s||"\\"==s||"?"==s||"#"==s){if(!r&&te(f))l=Le;else if(""==f){if(e.host="",r)return;l=Re}else{if(u=V(e,f),u)return u;if("localhost"==e.host&&(e.host=""),r)return;f="",l=Re}continue}f+=s;break;case Re:if(W(e)){if(l=Le,"/"!=s&&"\\"!=s)continue}else if(r||"?"!=s)if(r||"#"!=s){if(s!=n&&(l=Le,"/"!=s))continue}else e.fragment="",l=Se;else e.query="",l=Ce;break;case Le:if(s==n||"/"==s||"\\"==s&&W(e)||!r&&("?"==s||"#"==s)){if(oe(f)?(ne(e),"/"==s||"\\"==s&&W(e)||e.path.push("")):ae(f)?"/"==s||"\\"==s&&W(e)||e.path.push(""):("file"==e.scheme&&!e.path.length&&te(f)&&(e.host&&(e.host=""),f=f.charAt(0)+":"),e.path.push(f)),f="","file"==e.scheme&&(s==n||"?"==s||"#"==s))while(e.path.length>1&&""===e.path[0])e.path.shift();"?"==s?(e.query="",l=Ce):"#"==s&&(e.fragment="",l=Se)}else f+=K(s,Z);break;case Ue:"?"==s?(e.query="",l=Ce):"#"==s?(e.fragment="",l=Se):s!=n&&(e.path[0]+=K(s,H));break;case Ce:r||"#"!=s?s!=n&&("'"==s&&W(e)?e.query+="%27":e.query+="#"==s?"%23":K(s,H)):(e.fragment="",l=Se);break;case Se:s!=n&&(e.fragment+=K(s,X));break}c++}},Ae=function(e){var t,r,n=c(this,Ae,"URL"),a=arguments.length>1?arguments[1]:void 0,s=String(e),i=R(n,{type:"URL"});if(void 0!==a)if(a instanceof Ae)t=L(a);else if(r=xe(t={},String(a)),r)throw TypeError(r);if(r=xe(i,s,null,t),r)throw TypeError(r);var u=i.searchParams=new y,l=k(u);l.updateSearchParams(i.query),l.updateURL=function(){i.query=String(u)||null},o||(n.href=qe.call(n),n.origin=Be.call(n),n.protocol=je.call(n),n.username=Pe.call(n),n.password=Ee.call(n),n.host=Te.call(n),n.hostname=Ie.call(n),n.port=ze.call(n),n.pathname=Oe.call(n),n.search=Fe.call(n),n.searchParams=De.call(n),n.hash=Ve.call(n))},_e=Ae.prototype,qe=function(){var e=L(this),t=e.scheme,r=e.username,n=e.password,a=e.host,o=e.port,s=e.path,i=e.query,u=e.fragment,l=t+":";return null!==a?(l+="//",Y(e)&&(l+=r+(n?":"+n:"")+"@"),l+=N(a),null!==o&&(l+=":"+o)):"file"==t&&(l+="//"),l+=e.cannotBeABaseURL?s[0]:s.length?"/"+s.join("/"):"",null!==i&&(l+="?"+i),null!==u&&(l+="#"+u),l},Be=function(){var e=L(this),t=e.scheme,r=e.port;if("blob"==t)try{return new URL(t.path[0]).origin}catch(n){return"null"}return"file"!=t&&W(e)?t+"://"+N(e.host)+(null!==r?":"+r:""):"null"},je=function(){return L(this).scheme+":"},Pe=function(){return L(this).username},Ee=function(){return L(this).password},Te=function(){var e=L(this),t=e.host,r=e.port;return null===t?"":null===r?N(t):N(t)+":"+r},Ie=function(){var e=L(this).host;return null===e?"":N(e)},ze=function(){var e=L(this).port;return null===e?"":String(e)},Oe=function(){var e=L(this),t=e.path;return e.cannotBeABaseURL?t[0]:t.length?"/"+t.join("/"):""},Fe=function(){var e=L(this).query;return e?"?"+e:""},De=function(){return L(this).searchParams},Ve=function(){var e=L(this).fragment;return e?"#"+e:""},$e=function(e,t){return{get:e,set:t,configurable:!0,enumerable:!0}};if(o&&u(_e,{href:$e(qe,(function(e){var t=L(this),r=String(e),n=xe(t,r);if(n)throw TypeError(n);k(t.searchParams).updateSearchParams(t.query)})),origin:$e(Be),protocol:$e(je,(function(e){var t=L(this);xe(t,String(e)+":",se)})),username:$e(Pe,(function(e){var t=L(this),r=p(String(e));if(!ee(t)){t.username="";for(var n=0;n<r.length;n++)t.username+=K(r[n],G)}})),password:$e(Ee,(function(e){var t=L(this),r=p(String(e));if(!ee(t)){t.password="";for(var n=0;n<r.length;n++)t.password+=K(r[n],G)}})),host:$e(Te,(function(e){var t=L(this);t.cannotBeABaseURL||xe(t,String(e),ge)})),hostname:$e(Ie,(function(e){var t=L(this);t.cannotBeABaseURL||xe(t,String(e),me)})),port:$e(ze,(function(e){var t=L(this);ee(t)||(e=String(e),""==e?t.port=null:xe(t,e,be))})),pathname:$e(Oe,(function(e){var t=L(this);t.cannotBeABaseURL||(t.path=[],xe(t,e+"",Re))})),search:$e(Fe,(function(e){var t=L(this);e=String(e),""==e?t.query=null:("?"==e.charAt(0)&&(e=e.slice(1)),t.query="",xe(t,e,Ce)),k(t.searchParams).updateSearchParams(t.query)})),searchParams:$e(De),hash:$e(Ve,(function(e){var t=L(this);e=String(e),""!=e?("#"==e.charAt(0)&&(e=e.slice(1)),t.fragment="",xe(t,e,Se)):t.fragment=null}))}),l(_e,"toJSON",(function(){return qe.call(this)}),{enumerable:!0}),l(_e,"toString",(function(){return qe.call(this)}),{enumerable:!0}),w){var Je=w.createObjectURL,Me=w.revokeObjectURL;Je&&l(Ae,"createObjectURL",(function(e){return Je.apply(w,arguments)})),Me&&l(Ae,"revokeObjectURL",(function(e){return Me.apply(w,arguments)}))}g(Ae,"URL"),a({global:!0,forced:!s,sham:!o},{URL:Ae})},"2b48":function(e,t,r){"use strict";var n=r("8505"),a=r.n(n);a.a},"4af9":function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-container",{attrs:{fluid:""}},[r("v-row",{attrs:{align:"center",justify:"center"}},[r("v-col",{staticClass:"text-body-2\n        text-md-body-1\n        font-weight-thin\n      ",attrs:{cols:"auto"}},[r("v-tooltip",{attrs:{top:""},scopedSlots:e._u([{key:"activator",fn:function(t){var n=t.on,a=t.attrs;return[r("v-btn",{attrs:{href:"mailto: tenzin.thabkhae@mail.utoronto.ca",target:"_blank",icon:"",color:e.themeColorClass,"x-large":"",text:"",tile:"",ripple:"",rounded:""}},[r("v-icon",e._g(e._b({attrs:{color:e.counterThemeColorClass,"x-large":""}},"v-icon",a,!1),n),[e._v("mdi-email")])],1)]}}])},[r("span",{staticClass:"font-weight-bold"},[e._v("tenzin.thabkhae@mail.utoronto.ca")])])],1),r("v-col",{staticClass:"text-body-2\n        text-md-body-1\n        font-weight-thin\n      ",attrs:{cols:"auto"}},[r("v-tooltip",{attrs:{top:""},scopedSlots:e._u([{key:"activator",fn:function(t){var n=t.on,a=t.attrs;return[r("v-btn",e._g(e._b({attrs:{href:"https://github.com/tenzint",target:"_blank",icon:"",color:e.themeColorClass,"x-large":"",text:"",ripple:"",rounded:""}},"v-btn",a,!1),n),[r("v-icon",{attrs:{color:e.counterThemeColorClass,"x-large":""}},[e._v("mdi-github")])],1)]}}])},[r("span",{staticClass:"font-weight-bold"},[e._v("github.com/tenzint")])])],1),r("v-col",{staticClass:"text-body-2\n        text-md-body-1\n        font-weight-thin\n      ",attrs:{cols:"auto"}},[r("v-tooltip",{attrs:{top:""},scopedSlots:e._u([{key:"activator",fn:function(t){var n=t.on,a=t.attrs;return[r("v-btn",{attrs:{href:"https://www.linkedin.com/in/tenzin-thabkhae-54a37069/",target:"_blank",icon:"",color:e.themeColorClass,"x-large":"",text:"",ripple:"",rounded:""}},[r("v-icon",e._g(e._b({attrs:{color:e.counterThemeColorClass,"x-large":""}},"v-icon",a,!1),n),[e._v("mdi-linkedin")])],1)]}}])},[r("span",{staticClass:"font-weight-bold"},[e._v("linkedin.com/in/tenzin-thabkhae-54a37069")])])],1),r("v-col",{staticClass:"text-body-2\n        text-md-body-1\n        font-weight-thin\n      ",attrs:{cols:"auto"}},[r("v-tooltip",{attrs:{top:""},scopedSlots:e._u([{key:"activator",fn:function(t){var n=t.on,a=t.attrs;return[r("v-btn",{attrs:{href:"https://freecodecamp.org/tenzint",target:"_blank",icon:"",color:e.themeColorClass,"x-large":"",text:"",ripple:"",rounded:""}},[r("v-icon",e._g(e._b({attrs:{color:e.counterThemeColorClass,"x-large":""}},"v-icon",a,!1),n),[e._v("mdi-fire")])],1)]}}])},[r("span",{staticClass:"\n            font-weight-bold\n          "},[e._v("freecodecamp.org/tenzint")])])],1),r("v-col",{staticClass:"text-body-2\n        text-md-body-1\n        font-weight-thin\n      ",attrs:{cols:"auto"}},[r("v-tooltip",{attrs:{top:""},scopedSlots:e._u([{key:"activator",fn:function(t){var n=t.on,a=t.attrs;return[r("v-btn",e._g(e._b({attrs:{color:e.counterThemeColorClass,fab:"",ripple:""},on:{click:function(t){return t.preventDefault(),e.downloadResumePdf(t)}}},"v-btn",a,!1),n),[r("v-icon",{attrs:{color:e.themeColorClass,"x-large":""}},[e._v("mdi-file-account-outline")])],1)]}}])},[r("span",{staticClass:"font-weight-bold"},[e._v("download resume")])])],1)],1)],1)},a=[],o=(r("d3b7"),r("3ca3"),r("ddb0"),r("2b3d"),r("5530")),s=r("2f62"),i=r("59ca"),u=(r("588e"),{computed:Object(o["a"])({},Object(s["c"])(["counterThemeColorClass","themeColorClass"])),methods:{downloadResumePdf:function(){var e=i["storage"]().ref("tenzin_resume.pdf");e.getDownloadURL().then((function(e){var t=new XMLHttpRequest;t.responseType="blob",t.onload=function(){var e=t.response,r=document.createElement("a");r.href=URL.createObjectURL(e),r.download="tenzin_resume",r.click(),URL.revokeObjectURL(r.href)},t.open("GET",e),t.send()})).catch((function(e){switch(e.code){case"storage/object-not-found":break;case"storage/unauthorized":break;case"storage/canceled":break;case"storage/unknown":break;default:break}}))}}}),l=u,c=(r("2b48"),r("2877")),h=r("6544"),f=r.n(h),p=r("8336"),d=r("62ad"),v=r("a523"),g=r("132d"),m=r("0fd9"),b=r("3a2f"),w=Object(c["a"])(l,n,a,!1,null,"39c8367e",null);t["default"]=w.exports;f()(w,{VBtn:p["a"],VCol:d["a"],VContainer:v["a"],VIcon:g["a"],VRow:m["a"],VTooltip:b["a"]})},"5fb2":function(e,t,r){"use strict";var n=2147483647,a=36,o=1,s=26,i=38,u=700,l=72,c=128,h="-",f=/[^\0-\u007E]/,p=/[.\u3002\uFF0E\uFF61]/g,d="Overflow: input needs wider integers to process",v=a-o,g=Math.floor,m=String.fromCharCode,b=function(e){var t=[],r=0,n=e.length;while(r<n){var a=e.charCodeAt(r++);if(a>=55296&&a<=56319&&r<n){var o=e.charCodeAt(r++);56320==(64512&o)?t.push(((1023&a)<<10)+(1023&o)+65536):(t.push(a),r--)}else t.push(a)}return t},w=function(e){return e+22+75*(e<26)},y=function(e,t,r){var n=0;for(e=r?g(e/u):e>>1,e+=g(e/t);e>v*s>>1;n+=a)e=g(e/v);return g(n+(v+1)*e/(e+i))},k=function(e){var t=[];e=b(e);var r,i,u=e.length,f=c,p=0,v=l;for(r=0;r<e.length;r++)i=e[r],i<128&&t.push(m(i));var k=t.length,R=k;k&&t.push(h);while(R<u){var L=n;for(r=0;r<e.length;r++)i=e[r],i>=f&&i<L&&(L=i);var U=R+1;if(L-f>g((n-p)/U))throw RangeError(d);for(p+=(L-f)*U,f=L,r=0;r<e.length;r++){if(i=e[r],i<f&&++p>n)throw RangeError(d);if(i==f){for(var C=p,S=a;;S+=a){var x=S<=v?o:S>=v+s?s:S-v;if(C<x)break;var A=C-x,_=a-x;t.push(m(w(x+A%_))),C=g(A/_)}t.push(m(w(C))),v=y(p,U,R==k),p=0,++R}}++p,++f}return t.join("")};e.exports=function(e){var t,r,n=[],a=e.toLowerCase().replace(p,".").split(".");for(t=0;t<a.length;t++)r=a[t],n.push(f.test(r)?"xn--"+k(r):r);return n.join(".")}},8505:function(e,t,r){},9861:function(e,t,r){"use strict";r("e260");var n=r("23e7"),a=r("d066"),o=r("0d3b"),s=r("6eeb"),i=r("e2cc"),u=r("d44e"),l=r("9ed3"),c=r("69f3"),h=r("19aa"),f=r("5135"),p=r("0366"),d=r("f5df"),v=r("825a"),g=r("861d"),m=r("7c73"),b=r("5c6c"),w=r("9a1f"),y=r("35a1"),k=r("b622"),R=a("fetch"),L=a("Headers"),U=k("iterator"),C="URLSearchParams",S=C+"Iterator",x=c.set,A=c.getterFor(C),_=c.getterFor(S),q=/\+/g,B=Array(4),j=function(e){return B[e-1]||(B[e-1]=RegExp("((?:%[\\da-f]{2}){"+e+"})","gi"))},P=function(e){try{return decodeURIComponent(e)}catch(t){return e}},E=function(e){var t=e.replace(q," "),r=4;try{return decodeURIComponent(t)}catch(n){while(r)t=t.replace(j(r--),P);return t}},T=/[!'()~]|%20/g,I={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+"},z=function(e){return I[e]},O=function(e){return encodeURIComponent(e).replace(T,z)},F=function(e,t){if(t){var r,n,a=t.split("&"),o=0;while(o<a.length)r=a[o++],r.length&&(n=r.split("="),e.push({key:E(n.shift()),value:E(n.join("="))}))}},D=function(e){this.entries.length=0,F(this.entries,e)},V=function(e,t){if(e<t)throw TypeError("Not enough arguments")},$=l((function(e,t){x(this,{type:S,iterator:w(A(e).entries),kind:t})}),"Iterator",(function(){var e=_(this),t=e.kind,r=e.iterator.next(),n=r.value;return r.done||(r.value="keys"===t?n.key:"values"===t?n.value:[n.key,n.value]),r})),J=function(){h(this,J,C);var e,t,r,n,a,o,s,i,u,l=arguments.length>0?arguments[0]:void 0,c=this,p=[];if(x(c,{type:C,entries:p,updateURL:function(){},updateSearchParams:D}),void 0!==l)if(g(l))if(e=y(l),"function"===typeof e){t=e.call(l),r=t.next;while(!(n=r.call(t)).done){if(a=w(v(n.value)),o=a.next,(s=o.call(a)).done||(i=o.call(a)).done||!o.call(a).done)throw TypeError("Expected sequence with length 2");p.push({key:s.value+"",value:i.value+""})}}else for(u in l)f(l,u)&&p.push({key:u,value:l[u]+""});else F(p,"string"===typeof l?"?"===l.charAt(0)?l.slice(1):l:l+"")},M=J.prototype;i(M,{append:function(e,t){V(arguments.length,2);var r=A(this);r.entries.push({key:e+"",value:t+""}),r.updateURL()},delete:function(e){V(arguments.length,1);var t=A(this),r=t.entries,n=e+"",a=0;while(a<r.length)r[a].key===n?r.splice(a,1):a++;t.updateURL()},get:function(e){V(arguments.length,1);for(var t=A(this).entries,r=e+"",n=0;n<t.length;n++)if(t[n].key===r)return t[n].value;return null},getAll:function(e){V(arguments.length,1);for(var t=A(this).entries,r=e+"",n=[],a=0;a<t.length;a++)t[a].key===r&&n.push(t[a].value);return n},has:function(e){V(arguments.length,1);var t=A(this).entries,r=e+"",n=0;while(n<t.length)if(t[n++].key===r)return!0;return!1},set:function(e,t){V(arguments.length,1);for(var r,n=A(this),a=n.entries,o=!1,s=e+"",i=t+"",u=0;u<a.length;u++)r=a[u],r.key===s&&(o?a.splice(u--,1):(o=!0,r.value=i));o||a.push({key:s,value:i}),n.updateURL()},sort:function(){var e,t,r,n=A(this),a=n.entries,o=a.slice();for(a.length=0,r=0;r<o.length;r++){for(e=o[r],t=0;t<r;t++)if(a[t].key>e.key){a.splice(t,0,e);break}t===r&&a.push(e)}n.updateURL()},forEach:function(e){var t,r=A(this).entries,n=p(e,arguments.length>1?arguments[1]:void 0,3),a=0;while(a<r.length)t=r[a++],n(t.value,t.key,this)},keys:function(){return new $(this,"keys")},values:function(){return new $(this,"values")},entries:function(){return new $(this,"entries")}},{enumerable:!0}),s(M,U,M.entries),s(M,"toString",(function(){var e,t=A(this).entries,r=[],n=0;while(n<t.length)e=t[n++],r.push(O(e.key)+"="+O(e.value));return r.join("&")}),{enumerable:!0}),u(J,C),n({global:!0,forced:!o},{URLSearchParams:J}),o||"function"!=typeof R||"function"!=typeof L||n({global:!0,enumerable:!0,forced:!0},{fetch:function(e){var t,r,n,a=[e];return arguments.length>1&&(t=arguments[1],g(t)&&(r=t.body,d(r)===C&&(n=t.headers?new L(t.headers):new L,n.has("content-type")||n.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"),t=m(t,{body:b(0,String(r)),headers:b(0,n)}))),a.push(t)),R.apply(this,a)}}),e.exports={URLSearchParams:J,getState:A}},"9a1f":function(e,t,r){var n=r("825a"),a=r("35a1");e.exports=function(e){var t=a(e);if("function"!=typeof t)throw TypeError(String(e)+" is not iterable");return n(t.call(e))}}}]);
//# sourceMappingURL=chunk-6b43cfea.44d21fad.js.map