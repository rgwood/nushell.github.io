import{_ as s,o as l,c as r,a as e,b as o,d as t,e as h,r as a}from"./app.f96f0b62.js";const i={},_=e("h1",{id:"nushell-0-27",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#nushell-0-27","aria-hidden":"true"},"#"),t(" Nushell 0.27")],-1),d=e("p",null,"Nushell, or Nu for short, is a new shell that takes a modern, structured approach to your commandline. It works seamlessly with the data from your filesystem, operating system, and a growing number of file formats to make it easy to build powerful commandline pipelines.",-1),c=e("p",null,"Today, we're releasing 0.27 of Nu. This release fixes some long-standing issues with Nushell.",-1),u=e("h1",{id:"where-to-get-it",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#where-to-get-it","aria-hidden":"true"},"#"),t(" Where to get it")],-1),p=t("Nu 0.27 is available as "),f={href:"https://github.com/nushell/nushell/releases/tag/0.27.0",target:"_blank",rel:"noopener noreferrer"},g=t("pre-built binaries"),m=t(" or from "),b={href:"https://crates.io/crates/nu",target:"_blank",rel:"noopener noreferrer"},w=t("crates.io"),k=t(". If you have Rust installed you can install it using "),y=e("code",null,"cargo install nu",-1),v=t("."),x=h('<p>If you want all the goodies, you can install <code>cargo install nu --features=extra</code>.</p><p>As part of this release, we also publish a set of plugins you can install and use with Nu. To install, use <code>cargo install nu_plugin_&lt;plugin name&gt;</code>.</p><h1 id="what-s-new" tabindex="-1"><a class="header-anchor" href="#what-s-new" aria-hidden="true">#</a> What&#39;s New</h1><h2 id="book-updates-fdncred-jonathandturner" tabindex="-1"><a class="header-anchor" href="#book-updates-fdncred-jonathandturner" aria-hidden="true">#</a> Book updates (fdncred, jonathandturner)</h2><p>The Nushell book received some much-needed updates. You&#39;ll notice new chapters and updated chapters to bring it more up-to-date with recent Nushell.</p>',5),N={href:"https://www.nushell.sh/book/configuration.html",target:"_blank",rel:"noopener noreferrer"},A=t("Thoroughly updated configuration section"),T={href:"https://www.nushell.sh/book/types_of_data.html",target:"_blank",rel:"noopener noreferrer"},j=t("Updated section on data types"),E={href:"https://www.nushell.sh/book/custom_commands.html",target:"_blank",rel:"noopener noreferrer"},z=t("A new section on creating your own commands"),I={href:"https://www.nushell.sh/book/aliases.html",target:"_blank",rel:"noopener noreferrer"},B=t("An updated section on aliases"),W={href:"https://www.nushell.sh/book/variables_and_subexpressions.html",target:"_blank",rel:"noopener noreferrer"},M=t("A new section on working with variables and expressions"),R={href:"https://www.nushell.sh/book/scripts.html",target:"_blank",rel:"noopener noreferrer"},S=t("The start of a new section on writing your own Nushell scripts"),L=e("h1",{id:"improvements",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#improvements","aria-hidden":"true"},"#"),t(" Improvements")],-1),V=e("h2",{id:"new-commands-fdncred",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#new-commands-fdncred","aria-hidden":"true"},"#"),t(" New commands (fdncred)")],-1),D=t("A new "),P=e("code",null,"term size",-1),Y=t(" commands "),q={href:"https://github.com/nushell/nushell/pull/3038",target:"_blank",rel:"noopener noreferrer"},F=t("lets you get the current size of the terminal"),K=t("New "),C={href:"https://github.com/nushell/nushell/pull/2976",target:"_blank",rel:"noopener noreferrer"},Q=e("code",null,"pow",-1),U=t(" operator"),$=t("New "),G={href:"https://github.com/nushell/nushell/pull/2975",target:"_blank",rel:"noopener noreferrer"},H=t("modulus("),J=e("code",null,"%",-1),O=t(") operator"),X=e("h2",{id:"functionality-jonathandturner-watsonthink-ilius-andrasio-qwanve-fdncred-ammkrn",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#functionality-jonathandturner-watsonthink-ilius-andrasio-qwanve-fdncred-ammkrn","aria-hidden":"true"},"#"),t(" Functionality (jonathandturner, WatsonThink, ilius, andrasio, Qwanve, fdncred, ammkrn)")],-1),Z=t("Tables now "),ee={href:"https://github.com/nushell/nushell/pull/3061",target:"_blank",rel:"noopener noreferrer"},te=t("truncate instead of crashing when too large"),ne=e("code",null,"source",-1),oe=t(" command now can "),se={href:"https://github.com/nushell/nushell/pull/3059",target:"_blank",rel:"noopener noreferrer"},le=t("use tilde in the path"),re=e("code",null,"let-env",-1),he=t(" can now shadow "),ae={href:"https://github.com/nushell/nushell/pull/3057",target:"_blank",rel:"noopener noreferrer"},ie=t("environment variables"),_e=t(" in addition to adding new ones"),de=t("Prompts can now call "),ce={href:"https://github.com/nushell/nushell/pull/3056",target:"_blank",rel:"noopener noreferrer"},ue=t("external commands on initial startup"),pe=t("You can now configure the "),fe={href:"https://github.com/nushell/nushell/pull/3045",target:"_blank",rel:"noopener noreferrer"},ge=t("file size standard to use"),me=t("Strings can now be passed in where "),be={href:"https://github.com/nushell/nushell/pull/3048",target:"_blank",rel:"noopener noreferrer"},we=t("column-paths were expected"),ke=t(" and "),ye={href:"https://github.com/nushell/nushell/pull/3016",target:"_blank",rel:"noopener noreferrer"},ve=t("here"),xe=t("More "),Ne={href:"https://github.com/nushell/nushell/pull/3035",target:"_blank",rel:"noopener noreferrer"},Ae=t("file size types have been added"),Te=e("code",null,"sort-by",-1),je=t(" can now "),Ee={href:"https://github.com/nushell/nushell/pull/3025",target:"_blank",rel:"noopener noreferrer"},ze=t("reverse sort"),Ie=e("code",null,"which",-1),Be=t(" can now take "),We={href:"https://github.com/nushell/nushell/pull/3024",target:"_blank",rel:"noopener noreferrer"},Me=t("multiple applications"),Re=e("code",null,"ps -l",-1),Se=t(" now has "),Le={href:"https://github.com/nushell/nushell/pull/3015",target:"_blank",rel:"noopener noreferrer"},Ve=t("a cleaner output when the parent is missing"),De=e("code",null,"select",-1),Pe=t(" can no longer "),Ye={href:"https://github.com/nushell/nushell/pull/3012",target:"_blank",rel:"noopener noreferrer"},qe=t("select the same column twice"),Fe=e("code",null,"to-md --per-element",-1),Ke=t(" now gives you "),Ce={href:"https://github.com/nushell/nushell/pull/2997",target:"_blank",rel:"noopener noreferrer"},Qe=t("more fine-grained control over the markdown output"),Ue=t("A new "),$e={href:"https://github.com/nushell/nushell/pull/2995",target:"_blank",rel:"noopener noreferrer"},Ge=e("code",null,"$nothing",-1),He=t(" built-in variable to help check for the existence of a value"),Je=e("code",null,"str from",-1),Oe=t(" can convert "),Xe={href:"https://github.com/nushell/nushell/pull/2977",target:"_blank",rel:"noopener noreferrer"},Ze=t("more things to strings"),et=t("Booleans are now shown as "),tt={href:"https://github.com/nushell/nushell/pull/3043",target:"_blank",rel:"noopener noreferrer"},nt=t("true/false instead of Yes/No"),ot=e("h2",{id:"internal-stormasm-ilius-fdncred-lhkipp-rreverser-jonathandturner",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#internal-stormasm-ilius-fdncred-lhkipp-rreverser-jonathandturner","aria-hidden":"true"},"#"),t(" Internal (stormasm, ilius, fdncred, LhKipp, RReverser, jonathandturner)")],-1),st=t("Some "),lt={href:"https://github.com/nushell/nushell/pull/3053",target:"_blank",rel:"noopener noreferrer"},rt=t("comment parsing improvements"),ht=t("The "),at=e("code",null,"block",-1),it=t(" function is now "),_t={href:"https://github.com/nushell/nushell/pull/3047",target:"_blank",rel:"noopener noreferrer"},dt=e("code",null,"parse_block",-1),ct=t("More "),ut={href:"https://github.com/nushell/nushell/pull/3000",target:"_blank",rel:"noopener noreferrer"},pt=t("Value helpers were added"),ft={href:"https://github.com/nushell/nushell/pull/2986",target:"_blank",rel:"noopener noreferrer"},gt=t("Parser cleanup for handling "),mt=e("code",null,"def",-1),bt=t("The "),wt={href:"https://github.com/nushell/nushell/pull/2983",target:"_blank",rel:"noopener noreferrer"},kt=t("WASI build should now be working again"),yt=t("File size is "),vt={href:"https://github.com/nushell/nushell/pull/2984",target:"_blank",rel:"noopener noreferrer"},xt=t("now a big int"),Nt=e("h2",{id:"documentation-watzon-ahkrr-lhkipp-andy-python-programmer-diogomafra",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#documentation-watzon-ahkrr-lhkipp-andy-python-programmer-diogomafra","aria-hidden":"true"},"#"),t(" Documentation (watzon, ahkrr, LhKipp, Andy-Python-Programmer, diogomafra)")],-1),At=t("Sample config has "),Tt={href:"https://github.com/nushell/nushell/pull/3060",target:"_blank",rel:"noopener noreferrer"},jt=t("gotten an update"),Et=t(" and "),zt={href:"https://github.com/nushell/nushell/pull/3031",target:"_blank",rel:"noopener noreferrer"},It=t("here"),Bt=t("Some "),Wt={href:"https://github.com/nushell/nushell/pull/3052",target:"_blank",rel:"noopener noreferrer"},Mt=t("README links got updated"),Rt=t("More "),St={href:"https://github.com/nushell/nushell/pull/3013",target:"_blank",rel:"noopener noreferrer"},Lt=t("README updates"),Vt=t(" and "),Dt={href:"https://github.com/nushell/nushell/pull/2996",target:"_blank",rel:"noopener noreferrer"},Pt=t("here"),Yt=t("README now shows "),qt={href:"https://github.com/nushell/nushell/pull/2993",target:"_blank",rel:"noopener noreferrer"},Ft=t("contributor icons"),Kt=e("h1",{id:"breaking-changes",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#breaking-changes","aria-hidden":"true"},"#"),t(" Breaking changes")],-1),Ct=t("Booleans are now shown as "),Qt={href:"https://github.com/nushell/nushell/pull/3043",target:"_blank",rel:"noopener noreferrer"},Ut=t("true/false instead of Yes/No"),$t=e("h1",{id:"looking-ahead",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#looking-ahead","aria-hidden":"true"},"#"),t(" Looking ahead")],-1),Gt=e("p",null,"We're hard at work at putting together the proposed features for Nushell 1.0, which will help guide the work to get there. While there's still much work to do to achieve a 1.0 release, this proposal will let the community help refine and correct the direction. We're looking forward to kicking this off in the coming weeks.",-1);function Ht(Jt,Ot){const n=a("ExternalLinkIcon");return l(),r("div",null,[_,d,c,u,e("p",null,[p,e("a",f,[g,o(n)]),m,e("a",b,[w,o(n)]),k,y,v]),x,e("ul",null,[e("li",null,[e("a",N,[A,o(n)])]),e("li",null,[e("a",T,[j,o(n)])]),e("li",null,[e("a",E,[z,o(n)])]),e("li",null,[e("a",I,[B,o(n)])]),e("li",null,[e("a",W,[M,o(n)])]),e("li",null,[e("a",R,[S,o(n)])])]),L,V,e("ul",null,[e("li",null,[D,P,Y,e("a",q,[F,o(n)])]),e("li",null,[K,e("a",C,[Q,U,o(n)])]),e("li",null,[$,e("a",G,[H,J,O,o(n)])])]),X,e("ul",null,[e("li",null,[Z,e("a",ee,[te,o(n)])]),e("li",null,[ne,oe,e("a",se,[le,o(n)])]),e("li",null,[re,he,e("a",ae,[ie,o(n)]),_e]),e("li",null,[de,e("a",ce,[ue,o(n)])]),e("li",null,[pe,e("a",fe,[ge,o(n)])]),e("li",null,[me,e("a",be,[we,o(n)]),ke,e("a",ye,[ve,o(n)])]),e("li",null,[xe,e("a",Ne,[Ae,o(n)])]),e("li",null,[Te,je,e("a",Ee,[ze,o(n)])]),e("li",null,[Ie,Be,e("a",We,[Me,o(n)])]),e("li",null,[Re,Se,e("a",Le,[Ve,o(n)])]),e("li",null,[De,Pe,e("a",Ye,[qe,o(n)])]),e("li",null,[Fe,Ke,e("a",Ce,[Qe,o(n)])]),e("li",null,[Ue,e("a",$e,[Ge,He,o(n)])]),e("li",null,[Je,Oe,e("a",Xe,[Ze,o(n)])]),e("li",null,[et,e("a",tt,[nt,o(n)])])]),ot,e("ul",null,[e("li",null,[st,e("a",lt,[rt,o(n)])]),e("li",null,[ht,at,it,e("a",_t,[dt,o(n)])]),e("li",null,[ct,e("a",ut,[pt,o(n)])]),e("li",null,[e("a",ft,[gt,mt,o(n)])]),e("li",null,[bt,e("a",wt,[kt,o(n)])]),e("li",null,[yt,e("a",vt,[xt,o(n)])])]),Nt,e("ul",null,[e("li",null,[At,e("a",Tt,[jt,o(n)]),Et,e("a",zt,[It,o(n)])]),e("li",null,[Bt,e("a",Wt,[Mt,o(n)])]),e("li",null,[Rt,e("a",St,[Lt,o(n)]),Vt,e("a",Dt,[Pt,o(n)])]),e("li",null,[Yt,e("a",qt,[Ft,o(n)])])]),Kt,e("ul",null,[e("li",null,[Ct,e("a",Qt,[Ut,o(n)])])]),$t,Gt])}var Zt=s(i,[["render",Ht],["__file","2021-02-16-nushell_0_27.html.vue"]]);export{Zt as default};
