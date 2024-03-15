"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[1321],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>u});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=c(n),h=r,u=p["".concat(l,".").concat(h)]||p[h]||m[h]||o;return n?a.createElement(u,i(i({ref:t},d),{},{components:n})):a.createElement(u,i({ref:t},d))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:r,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},83195:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var a=n(87462),r=(n(67294),n(3905));const o={description:"Prompt a user to add or switch to an Ethereum network.",sidebar_position:7},i="Add a network",s={unversionedId:"how-to/add-network",id:"how-to/add-network",title:"Add a network",description:"Prompt a user to add or switch to an Ethereum network.",source:"@site/wallet/how-to/add-network.md",sourceDirName:"how-to",slug:"/how-to/add-network",permalink:"/snaps-allowlisting/wallet/how-to/add-network",draft:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/wallet/how-to/add-network.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{description:"Prompt a user to add or switch to an Ethereum network.",sidebar_position:7},sidebar:"walletSidebar",previous:{title:"Display custom modals",permalink:"/snaps-allowlisting/wallet/how-to/display/custom-modals"},next:{title:"Use MetaMask SDK",permalink:"/snaps-allowlisting/wallet/how-to/use-sdk/"}},l={},c=[{value:"Example",id:"example",level:2}],d={toc:c},p="wrapper";function m(e){let{components:t,...o}=e;return(0,r.kt)(p,(0,a.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"add-a-network"},"Add a network"),(0,r.kt)("p",null,"In some cases, such as when ",(0,r.kt)("a",{parentName:"p",href:"/snaps-allowlisting/wallet/concepts/smart-contracts"},"interacting with smart contracts"),",\nyour dapp must connect a user to a new network in MetaMask.\nInstead of the user ",(0,r.kt)("a",{parentName:"p",href:"https://support.metamask.io/hc/en-us/articles/360043227612-How-to-add-a-custom-network-RPC#h_01G63GGJ83DGDRCS2ZWXM37CV5"},"adding a new network manually"),",\nwhich requires them to configure RPC URLs and chain IDs, your dapp can use the\n",(0,r.kt)("a",{parentName:"p",href:"/wallet/reference/wallet_addethereumchain"},(0,r.kt)("inlineCode",{parentName:"a"},"wallet_addEthereumChain"))," and\n",(0,r.kt)("a",{parentName:"p",href:"/wallet/reference/wallet_switchethereumchain"},(0,r.kt)("inlineCode",{parentName:"a"},"wallet_switchEthereumChain"))," RPC methods to prompt\nthe user to add a specific, pre-configured network to their MetaMask wallet."),(0,r.kt)("p",null,"These methods are specified by ",(0,r.kt)("a",{parentName:"p",href:"https://eips.ethereum.org/EIPS/eip-3085"},"EIP-3085")," and\n",(0,r.kt)("a",{parentName:"p",href:"https://eips.ethereum.org/EIPS/eip-3326"},"EIP-3326"),", and we recommend using them together."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"wallet_addEthereumChain")," creates a confirmation asking the user to add the specified network to MetaMask."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"wallet_switchEthereumChain")," creates a confirmation asking the user to switch to the specified network.")),(0,r.kt)("p",null,"The confirmations look like the following:"),(0,r.kt)("div",{class:"row"},(0,r.kt)("div",{class:"column"},(0,r.kt)("img",{src:n(19490).Z,alt:"Add network confirmation",style:{border:"1px solid gray"}})),(0,r.kt)("div",{class:"column"},(0,r.kt)("img",{src:n(94637).Z,alt:"Switch network confirmation",style:{border:"1px solid gray"}}))),(0,r.kt)("h2",{id:"example"},"Example"),(0,r.kt)("p",null,"The following is an example of using ",(0,r.kt)("inlineCode",{parentName:"p"},"wallet_addEthereumChain")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"wallet_switchEthereumChain")," to\nprompt a user to add and switch to a new network:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'try {\n    await ethereum.request({\n        method: "wallet_switchEthereumChain",\n        params: [{ chainId: "0xf00" }],\n    });\n} catch (switchError) {\n    // This error code indicates that the chain has not been added to MetaMask.\n    if (switchError.code === 4902) {\n        try {\n            await ethereum.request({\n                method: "wallet_addEthereumChain",\n                params: [\n                    {\n                        chainId: "0xf00",\n                        chainName: "...",\n                        rpcUrls: ["https://..."] /* ... */,\n                    },\n                ],\n            });\n        } catch (addError) {\n            // handle "add" error\n        }\n    }\n    // handle other "switch" errors\n}\n')))}m.isMDXComponent=!0},19490:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/add-network-b50a7e5fc0b9fd187d45f0070c071aa8.png"},94637:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/switch-network-fa13b71d966a9c048bc069d39047a5b9.png"}}]);