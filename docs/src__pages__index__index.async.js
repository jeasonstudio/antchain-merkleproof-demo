(self.webpackChunk=self.webpackChunk||[]).push([[37],{43034:function(X,y,a){"use strict";a.r(y),a.d(y,{default:function(){return P}});var O=a(70920),j=a.n(O),M=a(23538),R=a.n(M),$=a(21071),u=a.n($),o=a(77617),C=a(77131),D=a(1392),d=a(97160),s=a(64451),L=a(70121),b=a(21316),A=JSON.parse('{"____comment":"This file was generated with Myfish. DO NOT EDIT.","version":"mychain::abi/1.5","contract_version":1,"contract_git_id":"merkle-proof-as","vm_type":"wasm","source_type":"AssemblyScript","compiler_version":"Myfish 1.0.0-beta.18","message":"","interfaces":[{"name":"Verify","type":"Verify"},{"name":"Validate","type":"Validate"},{"name":"GetAddress","type":"GetAddress"}],"structs":[{"name":"Verify","fields":[{"name":"proof","type":"string[]"},{"name":"account","type":"string"}],"results":["bool"]},{"name":"Validate","fields":[{"name":"proof","type":"string[]"},{"name":"account","type":"string"}],"results":["string"]},{"name":"GetAddress","fields":[{"name":"account","type":"string"}],"results":["string"]}],"types":[],"variants":[]}'),x=a(3802),m={wrap:"wrap___Bls7L"},t=a(32648),F=["test1","test2","test3","test4","test5","test6"],J=function(){var f=Date.now()+1e3,l=["#bb0000","#ffffff"];(function v(){(0,x.Z)({particleCount:2,angle:60,spread:55,origin:{x:0},colors:l}),(0,x.Z)({particleCount:2,angle:120,spread:55,origin:{x:1},colors:l}),Date.now()<f&&requestAnimationFrame(v)})()},P=function(){var n=(0,C.U3)(),f=(0,o.useState)(!1),l=u()(f,2),v=l[0],S=l[1],U=(0,o.useState)(""),Z=u()(U,2),N=Z[0],W=Z[1],w=(0,o.useState)(""),E=u()(w,2),h=E[0],z=E[1];if(!n)return(0,t.jsx)("div",{children:"error"});var H=n.loading,K=n.isInstalled,I=n.antchain,T=n.data,V=T.chainId,Q=u()(T.accounts,1),c=Q[0];return H?(0,t.jsx)("div",{className:m.wrap,children:(0,t.jsx)(D.Z,{})}):K?(0,t.jsxs)("div",{className:m.wrap,children:[V?(0,t.jsxs)(s.Z,{title:"Merkle Proof Demo",column:1,style:{marginBottom:30},children:[(0,t.jsx)(s.Z.Item,{label:"\u5F53\u524D\u94FE",children:V}),c?(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.Z.Item,{label:"\u8D26\u6237\u540D\u79F0",children:c.accountName}),(0,t.jsx)(s.Z.Item,{label:"\u8D26\u6237\u5730\u5740",children:c.accountAddress})]}):null,(0,t.jsx)(s.Z.Item,{label:"\u767D\u540D\u5355",children:F.join(", ")})]}):null,c?(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(L.Z,{value:h,onChange:function(r){var i=r.target;return z(i.value)}}),(0,t.jsx)(d.Z,{type:"primary",onClick:R()(j()().mark(function g(){var r,i,B,G,p;return j()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return S(!0),r=A.contract_git_id,i=new C.dW({contractName:r,abi:JSON.stringify(A)},I),e.prev=3,B=(0,b.createMerkleProof)(F,h),e.next=7,i.call({local:!0,methodName:"Validate",args:[B,h]});case 7:G=e.sent,p=G.returnValue.toString(),p.includes("Congratulations")&&J(),W(p),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(3),console.error("\u5408\u7EA6\u8C03\u7528\u5931\u8D25 error:",e.t0);case 16:S(!1);case 17:case"end":return e.stop()}},g,null,[[3,13]])})),children:"\u8C03\u7528\u5408\u7EA6"}),(0,t.jsxs)("div",{style:{marginTop:20},children:[v?(0,t.jsx)(D.Z,{}):null,N?"\u8C03\u7528\u7ED3\u679C\uFF1A".concat(N):null]})]}):(0,t.jsx)(d.Z,{type:"primary",onClick:function(){I.requestAccounts().catch(function(r){console.error("requestAccounts error:",r)})},children:"\u8FDE\u63A5\u533A\u5757\u94FE"})]}):(0,t.jsx)("div",{className:m.wrap,children:(0,t.jsx)("a",{href:"https://docs.antchain.antgroup.com/",target:"_blank",children:(0,t.jsx)(d.Z,{type:"primary",children:"\u53BB\u4E0B\u8F7D\u8682\u8681\u94FE\u8FDE\u63A5\u5668"})})})}},3828:function(){}}]);
