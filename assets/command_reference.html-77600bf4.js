import{p as i}from"./app-40e5a2f0.js";import{_,M as u,p as s,q as r,Q as e,t as l,N as h,U as m,O as p,P as f,v as a}from"./framework-344bb0e4.js";const x={computed:{commands(){return i.filter(t=>t.path.indexOf("/commands/docs/")>=0).sort((t,n)=>t.title>n.title?1:n.title>t.title?-1:0)}}},N=e("h1",{id:"命令索引",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#命令索引","aria-hidden":"true"},"#"),l(" 命令索引")],-1),g=e("code",null,"help commands",-1),k=e("p",null,"译注：本页内容由于是从源码生成的暂不支持国际化，大家还是先看英文版的凑合下吧。",-1),v=e("tr",null,[e("th",null,"Command"),e("th",null,"Description")],-1),w=["href"],B={style:{"white-space":"pre-wrap"}};function C(t,n,L,V,$,c){const d=u("RouterLink");return s(),r("div",null,[N,e("p",null,[l("若要查看所有 Nushell 命令, 可以执行 "),h(d,{to:"/commands/docs/help.html"},{default:m(()=>[g]),_:1}),l("。")]),k,e("table",null,[v,(s(!0),r(p,null,f(c.commands,o=>(s(),r("tr",null,[e("td",null,[e("a",{href:o.path},[e("code",null,a(o.title),1)],8,w)]),e("td",B,a(o.frontmatter.usage),1)]))),256))])])}const O=_(x,[["render",C],["__file","command_reference.html.vue"]]);export{O as default};
