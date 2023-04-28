"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[1511],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=a.createContext({}),c=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=c(e.components);return a.createElement(p.Provider,{value:t},e.children)},l="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),l=c(r),d=n,f=l["".concat(p,".").concat(d)]||l[d]||m[d]||o;return r?a.createElement(f,s(s({ref:t},u),{},{components:r})):a.createElement(f,s({ref:t},u))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,s=new Array(o);s[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[l]="string"==typeof e?e:n,s[1]=i;for(var c=2;c<o;c++)s[c]=r[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},9910:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>l,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var a=r(7462),n=(r(7294),r(3905));const o={title:"Pure JavaScript"},s="Use MetaMask SDK with pure JavaScript",i={unversionedId:"how-to/use-sdk/javascript/pure-js",id:"how-to/use-sdk/javascript/pure-js",title:"Pure JavaScript",description:"You can import MetaMask SDK into your pure JavaScript dapp to enable your users to easily connect",source:"@site/wallet/how-to/use-sdk/javascript/pure-js.md",sourceDirName:"how-to/use-sdk/javascript",slug:"/how-to/use-sdk/javascript/pure-js",permalink:"/725-imgs/wallet/how-to/use-sdk/javascript/pure-js",draft:!1,tags:[],version:"current",frontMatter:{title:"Pure JavaScript"},sidebar:"walletSidebar",previous:{title:"React",permalink:"/725-imgs/wallet/how-to/use-sdk/javascript/react"},next:{title:"Other web frameworks",permalink:"/725-imgs/wallet/how-to/use-sdk/javascript/other-web-frameworks"}},p={},c=[],u={toc:c};function l(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"use-metamask-sdk-with-pure-javascript"},"Use MetaMask SDK with pure JavaScript"),(0,n.kt)("p",null,"You can import MetaMask SDK into your pure JavaScript dapp to enable your users to easily connect\nwith a MetaMask wallet client.\nThe SDK for pure JavaScript ",(0,n.kt)("a",{parentName:"p",href:"/725-imgs/wallet/#how-it-works"},"works the same way")," and has the\n",(0,n.kt)("a",{parentName:"p",href:"/725-imgs/wallet/#prerequisites"},"same prerequisites")," as for standard JavaScript."),(0,n.kt)("p",null,"To import, instantiate, and use the SDK, you can insert a script in the head section of your website:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-javascript"},"<head>\n...\n\n<script src=\"https://c0f4f41c-2f55-4863-921b-sdk-docs.github.io/cdn/metamask-sdk.js\"><\/script>\n\n<script>\n\n    const MMSDK = new MetaMaskSDK()\n\n    const ethereum = MMSDK.getProvider() // You can also access via window.ethereum\n\n    ethereum.request({method: 'eth_requestAccounts'})\n\n<\/script>\n\n...\n</head>\n")),(0,n.kt)("p",null,"You can configure the SDK using any ",(0,n.kt)("a",{parentName:"p",href:"/725-imgs/wallet/reference/sdk-js-options"},"options")," and call any\n",(0,n.kt)("a",{parentName:"p",href:"/725-imgs/wallet/reference/provider-api"},"provider API methods"),".\nAlways call ",(0,n.kt)("a",{parentName:"p",href:"/725-imgs/wallet/reference/rpc-api#eth_requestaccounts"},(0,n.kt)("inlineCode",{parentName:"a"},"eth_requestAccounts"))," using\n",(0,n.kt)("a",{parentName:"p",href:"/725-imgs/wallet/reference/provider-api#windowethereumrequestargs"},(0,n.kt)("inlineCode",{parentName:"a"},"ethereum.request(args)"))," first,\nsince it prompts the installation or connection popup to appear."))}l.isMDXComponent=!0}}]);