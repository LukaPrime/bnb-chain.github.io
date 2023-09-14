"use strict";(self.webpackChunkbeta_BNB_Docs=self.webpackChunkbeta_BNB_Docs||[]).push([[6833],{3905:(e,t,a)=>{a.d(t,{Zo:()=>h,kt:()=>b});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=n.createContext({}),s=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},h=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,h=l(e,["components","mdxType","originalType","parentName"]),u=s(a),d=r,b=u["".concat(c,".").concat(d)]||u[d]||p[d]||o;return a?n.createElement(b,i(i({ref:t},h),{},{components:a})):n.createElement(b,i({ref:t},h))}));function b(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[u]="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},60430:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var n=a(83117),r=(a(67294),a(3905));const o={},i="Get Started with BNB Beacon Chain",l={unversionedId:"beaconchain/get-started",id:"beaconchain/get-started",title:"Get Started with BNB Beacon Chain",description:"Wallet",source:"@site/docs/beaconchain/get-started.md",sourceDirName:"beaconchain",slug:"/beaconchain/get-started",permalink:"/docs/beaconchain/get-started",draft:!1,editUrl:"https://github.com/bnb-chain/bnb-chain.github.io/blob/master/docs/beaconchain/get-started.md",tags:[],version:"current",frontMatter:{}},c={},s=[{value:"Wallet",id:"wallet",level:2},{value:"Chain Explorer",id:"chain-explorer",level:2},{value:"REST API",id:"rest-api",level:2},{value:"Node RPC",id:"node-rpc",level:3},{value:"Advanced Ways To Use Blockchain",id:"advanced-ways-to-use-blockchain",level:2},{value:"Run your own full node",id:"run-your-own-full-node",level:3},{value:"Run your own light client",id:"run-your-own-light-client",level:3},{value:"Access via Node Command Line Interface (CLI)",id:"access-via-node-command-line-interface-cli",level:3},{value:"Use SDKs",id:"use-sdks",level:3},{value:"Blockchain Details",id:"blockchain-details",level:2}],h={toc:s},u="wrapper";function p(e){let{components:t,...a}=e;return(0,r.kt)(u,(0,n.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"get-started-with-bnb-beacon-chain"},"Get Started with BNB Beacon Chain"),(0,r.kt)("h2",{id:"wallet"},"Wallet"),(0,r.kt)("p",null,"The easiest way to use BNB Beacon Chain  is through a wallet with support for BNB Beacon Chain  accounts and transfers."),(0,r.kt)("p",null,"For example, Binance provides a Web Wallet at ",(0,r.kt)("a",{parentName:"p",href:"https://www.binance.org"},"https://www.binance.org"),(0,r.kt)("br",null),"\nBinance also provides Web Wallet for testnet at ",(0,r.kt)("a",{parentName:"p",href:"https://testnet.binance.org"},"https://testnet.binance.org"),(0,r.kt)("br",null),"\nBoth provide the functions below:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Generating crypto keys and addresses, which serves as the base of a wallet"),(0,r.kt)("li",{parentName:"ul"},"Showing the balances of assets on the addresses"),(0,r.kt)("li",{parentName:"ul"},"Sending and receiving assets")),(0,r.kt)("p",null,"BNB Beacon Chain Web Wallet also presents a trading UI where you can examine market data and manage your orders to trade among the listed assets."),(0,r.kt)("p",null,"Learn about the list of wallet available ",(0,r.kt)("a",{parentName:"p",href:"/docs/beaconchain/wallets"},"here"),"."),(0,r.kt)("h2",{id:"chain-explorer"},"Chain Explorer"),(0,r.kt)("p",null,"Chain Explorer provides a portal to explore blocks and transaction details.",(0,r.kt)("br",null),"\nOn BNB Beacon Chain  Explorer, you can also check different asset types, the distribution of their ownerships, and owners' transactions."),(0,r.kt)("h2",{id:"rest-api"},"REST API"),(0,r.kt)("p",null,"There are ",(0,r.kt)("a",{parentName:"p",href:"/docs/beaconchain/faq/#what-is-the-accelerated-node"},"Accelerated Nodes")," which provide advanced API services for the public.",(0,r.kt)("br",null),"\nHere is a list of all the Rest API information Accelerated Node provides: ",(0,r.kt)("a",{parentName:"p",href:"/docs/api-reference/dex-api/paths"},"paths")),(0,r.kt)("h3",{id:"node-rpc"},"Node RPC"),(0,r.kt)("p",null,"There are data seed nodes in the network which allow users to perform low-level operations like executing ABCI queries, viewing network/consensus state or broadcasting a transaction.\nIf you run a full node by yourself, you can also use those RPC functions. Here is a list of all the Node RPC services it provides: ",(0,r.kt)("a",{parentName:"p",href:"/docs/api-reference/node-rpc"},"node-rpc")),(0,r.kt)("h2",{id:"advanced-ways-to-use-blockchain"},"Advanced Ways To Use Blockchain"),(0,r.kt)("h3",{id:"run-your-own-full-node"},"Run your own full node"),(0,r.kt)("p",null,"Please refer to this guide about ",(0,r.kt)("a",{parentName:"p",href:"/docs/beaconchain/fullnode"},"how to run your own node"),"."),(0,r.kt)("h3",{id:"run-your-own-light-client"},"Run your own light client"),(0,r.kt)("p",null,"Please refer to this guide about ",(0,r.kt)("a",{parentName:"p",href:"/docs/beaconchain/light-client"},"how to run your own light client"),"."),(0,r.kt)("h3",{id:"access-via-node-command-line-interface-cli"},"Access via Node Command Line Interface (CLI)"),(0,r.kt)("p",null,"A Command Line Interface is available for Linux and Mac platforms.",(0,r.kt)("br",null),"\nPlease refer to the ",(0,r.kt)("a",{parentName:"p",href:"/docs/api-reference/cli"},"CLI Reference"),"."),(0,r.kt)("h3",{id:"use-sdks"},"Use SDKs"),(0,r.kt)("p",null,"SDKs are also provided as a starting point for your apps.",(0,r.kt)("br",null),"\nThere are two advanced SDK solutions for BNB Beacon Chain : ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/bnb-chain/java-sdk"},"Java")," and ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/bnb-chain/go-sdk"},"Golang"),".",(0,r.kt)("br",null),"\nBoth solutions provide functions for:",(0,r.kt)("br",null)),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Create wallets and manage keys"),(0,r.kt)("li",{parentName:"ul"},"Encode/sign transactions and submit to BNB Beacon Chain /DEX, including Transfer, New Order, Cancel Order, etc."),(0,r.kt)("li",{parentName:"ul"},"Communicate with BNB Beacon Chain /DEX Node RPC calls through public node RPC services or your own private full nodes")),(0,r.kt)("p",null,"Please refer to specific SDK documentation for more information:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/bnb-chain/go-sdk"},"Go"),"(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/bnb-chain/go-sdk/wiki"},"Documentation"),")"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/bnb-chain/java-sdk"},"Java"),"(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/bnb-chain/java-sdk/wiki"},"Documentation"),")"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/bnb-chain/javascript-sdk"},"Javascript")," (",(0,r.kt)("a",{parentName:"li",href:"https://github.com/bnb-chain/javascript-sdk/wiki"},"Documentation"),")"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/bnb-chain/cplusplus-sdk"},"C++"),"(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/bnb-chain/cplusplus-sdk/wiki"},"Documentation"),")"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/bnb-chain/csharp-sdk"},"C#"),"(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/bnb-chain/csharp-sdk"},"Documentation"),")"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/bnb-chain/python-sdk"},"Python"),"(",(0,r.kt)("a",{parentName:"li",href:"https://python-bnb-chain.readthedocs.io/en/latest/bnb-chain.html#module-binance_chain"},"Documentation"),")"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/bnb-chain/swift-sdk"},"Swift"),"(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/bnb-chain/swift-sdk/blob/master/README.md"},"Documentation"),")")),(0,r.kt)("h2",{id:"blockchain-details"},"Blockchain Details"),(0,r.kt)("p",null,"Please check the ",(0,r.kt)("a",{parentName:"p",href:"/docs/beaconchain/#technology-details"},"technical details")," for more technical information."))}p.isMDXComponent=!0}}]);