import{p as i}from"./app-40e5a2f0.js";import{_ as c,p as r,q as a,Q as e,O as d,P as h,t as u,v as n}from"./framework-344bb0e4.js";const _={computed:{commands(){return i.filter(t=>t.path.includes("/commands/docs/")).filter(t=>t.frontmatter.categories.includes("shells")).sort((t,s)=>t.title>s.title?1:s.title>t.title?-1:0)}}},p=e("h1",{id:"shells",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#shells","aria-hidden":"true"},"#"),u(" Shells")],-1),m=e("tr",null,[e("th",null,"Command"),e("th",null,"Description")],-1),f=["href"],g={style:{"white-space":"pre-wrap"}};function x(t,s,v,B,$,o){return r(),a("div",null,[p,e("table",null,[m,(r(!0),a(d,null,h(o.commands,l=>(r(),a("tr",null,[e("td",null,[e("a",{href:l.path},n(l.title),9,f)]),e("td",g,n(l.frontmatter.usage),1)]))),256))])])}const y=c(_,[["render",x],["__file","shells.html.vue"]]);export{y as default};
