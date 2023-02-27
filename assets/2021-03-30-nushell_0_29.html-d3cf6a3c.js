import{_ as l,M as r,p as a,q as s,R as h,Q as e,t,N as o,a1 as i}from"./framework-344bb0e4.js";const u={},d=e("h1",{id:"nushell-0-29",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#nushell-0-29","aria-hidden":"true"},"#"),t(" Nushell 0.29")],-1),c=e("p",null,"Nushell, or Nu for short, is a new shell that takes a modern, structured approach to your commandline. It works seamlessly with the data from your filesystem, operating system, and a growing number of file formats to make it easy to build powerful commandline pipelines.",-1),p=e("p",null,"Today, we're releasing 0.29 of Nu. This release adds more polish for paths, streaming, and more.",-1),_=e("h1",{id:"where-to-get-it",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#where-to-get-it","aria-hidden":"true"},"#"),t(" Where to get it")],-1),f={href:"https://github.com/nushell/nushell/releases/tag/0.29.0",target:"_blank",rel:"noopener noreferrer"},g={href:"https://crates.io/crates/nu",target:"_blank",rel:"noopener noreferrer"},m=e("code",null,"cargo install nu",-1),b=i('<p>If you want all the goodies, you can install <code>cargo install nu --features=extra</code>.</p><p>If you&#39;d like to try the experimental paging feature in this release, you can install with <code>cargo install nu --features=table-pager</code>.</p><p>As part of this release, we also publish a set of plugins you can install and use with Nu. To install, use <code>cargo install nu_plugin_&lt;plugin name&gt;</code>.</p><h1 id="what-s-new" tabindex="-1"><a class="header-anchor" href="#what-s-new" aria-hidden="true">#</a> What&#39;s New</h1><h2 id="new-commands" tabindex="-1"><a class="header-anchor" href="#new-commands" aria-hidden="true">#</a> New commands</h2>',5),k={href:"https://github.com/nushell/nushell/pull/3197",target:"_blank",rel:"noopener noreferrer"},w=e("code",null,"hash md5",-1),y=e("h2",{id:"functionality",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#functionality","aria-hidden":"true"},"#"),t(" Functionality")],-1),x={href:"https://github.com/nushell/nushell/pull/3166",target:"_blank",rel:"noopener noreferrer"},N=e("code",null,"count",-1),v=e("code",null,"length",-1),I={href:"https://github.com/nushell/nushell/pull/3167",target:"_blank",rel:"noopener noreferrer"},T={href:"https://github.com/nushell/nushell/pull/3195",target:"_blank",rel:"noopener noreferrer"},V=e("code",null,"char",-1),j={href:"https://github.com/nushell/nushell/pull/3210",target:"_blank",rel:"noopener noreferrer"},B=e("code",null,"cd ~/dir",-1),E={href:"https://github.com/nushell/nushell/pull/3201",target:"_blank",rel:"noopener noreferrer"},W={href:"https://github.com/nushell/nushell/pull/3203",target:"_blank",rel:"noopener noreferrer"},z=e("code",null,"$scope",-1),L={href:"https://github.com/nushell/nushell/pull/3207",target:"_blank",rel:"noopener noreferrer"},C=e("h2",{id:"internal",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#internal","aria-hidden":"true"},"#"),t(" Internal")],-1),D={href:"https://github.com/nushell/nushell/pull/3153",target:"_blank",rel:"noopener noreferrer"},R={href:"https://github.com/nushell/nushell/pull/3154",target:"_blank",rel:"noopener noreferrer"},q=e("code",null,"fetch",-1),A={href:"https://github.com/nushell/nushell/pull/3179",target:"_blank",rel:"noopener noreferrer"},F={href:"https://github.com/nushell/nushell/pull/3217",target:"_blank",rel:"noopener noreferrer"},G={href:"https://github.com/nushell/nushell/pull/3184",target:"_blank",rel:"noopener noreferrer"},J=e("code",null,"--release",-1),M={href:"https://github.com/nushell/nushell/pull/3189",target:"_blank",rel:"noopener noreferrer"},P=e("h2",{id:"documentation",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#documentation","aria-hidden":"true"},"#"),t(" Documentation")],-1),Q={href:"https://github.com/nushell/nushell/pull/3198",target:"_blank",rel:"noopener noreferrer"},S={href:"https://github.com/nushell/nushell/pull/3216",target:"_blank",rel:"noopener noreferrer"},Y=e("h2",{id:"breaking-changes",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#breaking-changes","aria-hidden":"true"},"#"),t(" Breaking changes")],-1),$={href:"https://github.com/nushell/nushell/pull/3166",target:"_blank",rel:"noopener noreferrer"},H=e("code",null,"count",-1),K=e("code",null,"length",-1),O=e("h1",{id:"looking-ahead",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#looking-ahead","aria-hidden":"true"},"#"),t(" Looking ahead")],-1),U={href:"https://github.com/jonathandturner/enginep/tree/gradient_deep_dive_wip",target:"_blank",rel:"noopener noreferrer"},X={href:"https://github.com/nushell/rfcs/pull/6",target:"_blank",rel:"noopener noreferrer"};function Z(ee,te){const n=r("ExternalLinkIcon");return a(),s("div",null,[d,c,p,h(" more "),_,e("p",null,[t("Nu 0.29 is available as "),e("a",f,[t("pre-built binaries"),o(n)]),t(" or from "),e("a",g,[t("crates.io"),o(n)]),t(". If you have Rust installed you can install it using "),m,t(".")]),b,e("ul",null,[e("li",null,[t("notryanb added the "),e("a",k,[w,t(" command"),o(n)])])]),y,e("ul",null,[e("li",null,[t("John-Goff "),e("a",x,[t("renamed the "),N,t(" command to "),v,o(n)])]),e("li",null,[t("ahkrr bumped "),e("a",I,[t("rustyline to 8.0.0"),o(n)])]),e("li",null,[t("fdncred extended "),e("a",T,[V,t(" to allow for more complex unicode"),o(n)])]),e("li",null,[t("fdncred also added support to "),e("a",j,[B,o(n)])]),e("li",null,[t("gonatz added "),e("a",E,[t("forward slash autocompletion for Windows"),o(n)])]),e("li",null,[t("stormasm added the "),e("a",W,[z,t(" variable to see into the current scope"),o(n)]),t(". The currently only supports seeing the aliases in scope.")]),e("li",null,[t("DonnotPanic added "),e("a",L,[t("timezone support for time conversions"),o(n)])])]),C,e("ul",null,[e("li",null,[t("jonathandturner fixed an issue with "),e("a",D,[t("input stream buffering for text"),o(n)])]),e("li",null,[t("fdncred updated the "),e("a",R,[q,t(" command for better portability"),o(n)])]),e("li",null,[t("andrasio improved "),e("a",A,[t("the test playground"),o(n)])]),e("li",null,[t("andrasio also improved "),e("a",F,[t("test coverage for context and more"),o(n)])]),e("li",null,[t("nibon7 fixed "),e("a",G,[t("running tests with "),J,o(n)])]),e("li",null,[t("ahkrr improved "),e("a",M,[t("prompt reliability"),o(n)])])]),P,e("ul",null,[e("li",null,[t("suzanje fixed some broken "),e("a",Q,[t("contributor book links"),o(n)])]),e("li",null,[t("mvolkmann fixed a "),e("a",S,[t("typo in the help text"),o(n)])])]),Y,e("ul",null,[e("li",null,[t("The "),e("a",$,[H,t(" command is now "),K,o(n)]),t(" for better discoverability.")])]),O,e("p",null,[t("There are a few different on-going projects to help Nushell. New this week is "),e("a",U,[t("engine-p"),o(n)]),t(", an experimental engine that explores what an iterator+parallel approach would be like in contrast to Nu's current async stream approach. Early results are promising here, as the engine appears to perform better while also using a simpler set of patterns, which should help new contributors.")]),e("p",null,[t("We've also posted our "),e("a",X,[t("proposal for shipping 1.0"),o(n)]),t(". This lays out the proposed path for Nushell to reach 1.0 and beyond, including the features Nushell will ship with at 1.0. If you'd like to give us feedback, we'd love to have it. You can add comments directly on the proposal and we'll gather the feedback and use it in the next round of revisions.")])])}const oe=l(u,[["render",Z],["__file","2021-03-30-nushell_0_29.html.vue"]]);export{oe as default};
