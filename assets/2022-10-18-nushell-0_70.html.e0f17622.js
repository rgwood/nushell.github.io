import{_ as s,r as l,o as r,c as h,f as i,a as t,b as n,d as e,e as a}from"./app.ef551336.js";const d="/assets/0_70_table_expand.8bdae3da.png",_={},c=t("h1",{id:"nushell-0-70",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#nushell-0-70","aria-hidden":"true"},"#"),e(" Nushell 0.70")],-1),u=t("p",null,"Nushell, or Nu for short, is a new shell that takes a modern, structured approach to your commandline. It works seamlessly with the data from your filesystem, operating system, and a growing number of file formats to make it easy to build powerful commandline pipelines.",-1),p=t("p",null,"Today, we're releasing version 0.70 of Nu. This release includes big improvements to table drawing and lots of overall polish.",-1),f=t("h1",{id:"where-to-get-it",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#where-to-get-it","aria-hidden":"true"},"#"),e(" Where to get it")],-1),g=e("Nu 0.70 is available as "),b={href:"https://github.com/nushell/nushell/releases/tag/0.70.0",target:"_blank",rel:"noopener noreferrer"},m=e("pre-built binaries"),k=e(" or from "),w={href:"https://crates.io/crates/nu",target:"_blank",rel:"noopener noreferrer"},x=e("crates.io"),y=e(". If you have Rust installed you can install it using "),v=t("code",null,"cargo install nu",-1),N=e("."),E=a('<p>If you want all the built-in goodies, such as support for dataframes and SQLite databases, you can install it via <code>cargo install nu --features=extra</code>.</p><p>As part of this release, we also publish a set of optional plugins you can install and use with Nu. To install, use <code>cargo install nu_plugin_&lt;plugin name&gt;</code>.</p><h1 id="themes-of-this-release" tabindex="-1"><a class="header-anchor" href="#themes-of-this-release" aria-hidden="true">#</a> Themes of this release</h1><h2 id="new-table-flags" tabindex="-1"><a class="header-anchor" href="#new-table-flags" aria-hidden="true">#</a> New table flags</h2><p><img src="'+d+'" alt="Expanded table"></p><ul><li><p><code>--expand</code>: changes a standard table view; expand the table structure so internally all data will be displayed as inner tables</p><h4 id="notice" tabindex="-1"><a class="header-anchor" href="#notice" aria-hidden="true">#</a> <strong>NOTICE</strong></h4><p>The <code>expand</code> mode can be considered generally slower than a base table view. So, if you have a large data set it may be slow.</p></li><li><p><code>--expand-deep {int}</code>: set a limit after which table enlargement is stopped</p></li><li><p><code>--flatten</code>: an <code>--expand</code> view option to return a set of values instead of table for a simple lists</p></li><li><p><code>--flatten-separator {char}</code>: a configuration of a separator for <code>--flatten</code></p></li><li><p><code>--collapse</code>: changes a standard table view; expand the table structure in a squashed way</p><h4 id="notice-1" tabindex="-1"><a class="header-anchor" href="#notice-1" aria-hidden="true">#</a> <strong>NOTICE</strong></h4><p><code>collapse</code> mode currently doesn&#39;t support width control, therefore if your terminal is not wide enough the table might be broken. The <code>collapse</code> mode can be considered generally slower than a base table view. So, if you have a large data set it may be slow.</p></li></ul><h1 id="breaking-changes" tabindex="-1"><a class="header-anchor" href="#breaking-changes" aria-hidden="true">#</a> Breaking changes</h1><ul><li>The command <code>first 1</code> now returns a list with the single value rather than the value itself. This brings it in line with the behaviour of <code>last 1</code>.</li><li>The dataframe command <code>with-sql</code> or <code>query dfr</code> has been renamed to <code>query df</code> for consistency.</li></ul><h1 id="next-steps" tabindex="-1"><a class="header-anchor" href="#next-steps" aria-hidden="true">#</a> Next Steps</h1>',9),A=e("We're continuing to work on language updates and hope to have more information for you soon. If you'd like to become part of the effort, please "),R={href:"https://discord.gg/NtAbbGn",target:"_blank",rel:"noopener noreferrer"},T=e("join the discord"),S=e("."),F=t("h1",{id:"full-changelog",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#full-changelog","aria-hidden":"true"},"#"),e(" Full changelog")],-1),q=t("h2",{id:"nushell",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#nushell","aria-hidden":"true"},"#"),e(" Nushell")],-1),I=e("jt created "),U={href:"https://github.com/nushell/nushell/pull/6795",target:"_blank",rel:"noopener noreferrer"},z=e("Fix let-env in banner"),D=e(", and "),L={href:"https://github.com/nushell/nushell/pull/6728",target:"_blank",rel:"noopener noreferrer"},C=e("Allow auto-cd to work with backticks"),W=e("sholderbach created "),M={href:"https://github.com/nushell/nushell/pull/6789",target:"_blank",rel:"noopener noreferrer"},j=e("Pin reedline to the 0.13.0 release"),H=e(", and "),P={href:"https://github.com/nushell/nushell/pull/6778",target:"_blank",rel:"noopener noreferrer"},B=e("Upgrade reedline to latest dev version"),V=e(", and "),K={href:"https://github.com/nushell/nushell/pull/6712",target:"_blank",rel:"noopener noreferrer"},O=e("Backport fixes from nushell/nushell.github.io#633"),G=e(", and "),J={href:"https://github.com/nushell/nushell/pull/6702",target:"_blank",rel:"noopener noreferrer"},Q=e("Fix e.g. completion "),X=t("code",null,"git push --force-with-lease",-1),Y=e("JEndler created "),Z={href:"https://github.com/nushell/nushell/pull/6782",target:"_blank",rel:"noopener noreferrer"},$=e("Update README.md"),ee=e("unrelentingtech created "),te={href:"https://github.com/nushell/nushell/pull/6779",target:"_blank",rel:"noopener noreferrer"},oe=e("Tolerate more tty acquisition failures in non-interactive mode, fixes #6719"),ne=e(", and "),se={href:"https://github.com/nushell/nushell/pull/6584",target:"_blank",rel:"noopener noreferrer"},le=e("Foreground process group management, again"),re=e("dandavison created "),he={href:"https://github.com/nushell/nushell/pull/6777",target:"_blank",rel:"noopener noreferrer"},ie=e("Rename "),ae=t("code",null,"query dfr",-1),de=e(" -> "),_e=t("code",null,"query df",-1),ce=e(", and "),ue={href:"https://github.com/nushell/nushell/pull/6749",target:"_blank",rel:"noopener noreferrer"},pe=e("Add documentation requirement to PR template"),fe=e(", and "),ge={href:"https://github.com/nushell/nushell/pull/6651",target:"_blank",rel:"noopener noreferrer"},be=e("Remove unnecessary flags from "),me=t("code",null,"term size",-1),ke=e("rjfc created "),we={href:"https://github.com/nushell/nushell/pull/6761",target:"_blank",rel:"noopener noreferrer"},xe=e("Add search terms to roll commands"),ye=e("fdncred created "),ve={href:"https://github.com/nushell/nushell/pull/6760",target:"_blank",rel:"noopener noreferrer"},Ne=e("add filesize_metric comment"),Ee=e(", and "),Ae={href:"https://github.com/nushell/nushell/pull/6723",target:"_blank",rel:"noopener noreferrer"},Re=e("add the ability to convert durations"),Te=e(", and "),Se={href:"https://github.com/nushell/nushell/pull/6670",target:"_blank",rel:"noopener noreferrer"},Fe=e("add a new command to query the registry on windows"),qe=e(", and "),Ie={href:"https://github.com/nushell/nushell/pull/6641",target:"_blank",rel:"noopener noreferrer"},Ue=e("tweak the banner message and make the time more accurate"),ze=e(", and "),De={href:"https://github.com/nushell/nushell/pull/6640",target:"_blank",rel:"noopener noreferrer"},Le=e("changed the way durations and filesizes are parsed"),Ce=e(", and "),We={href:"https://github.com/nushell/nushell/pull/6637",target:"_blank",rel:"noopener noreferrer"},Me=e("add better description to table_index_mode"),je=e("Dorumin created "),He={href:"https://github.com/nushell/nushell/pull/6738",target:"_blank",rel:"noopener noreferrer"},Pe=e("window --remainder"),Be=e(", and "),Ve={href:"https://github.com/nushell/nushell/pull/6729",target:"_blank",rel:"noopener noreferrer"},Ke=e("Remove unnecessary clone in window"),Oe=e(", and "),Ge={href:"https://github.com/nushell/nushell/pull/6727",target:"_blank",rel:"noopener noreferrer"},Je=e("Fix quadratic time complexity with large strides"),Qe=e("howardjohn created "),Xe={href:"https://github.com/nushell/nushell/pull/6731",target:"_blank",rel:"noopener noreferrer"},Ye=e("Delete out.log"),Ze=e("merelymyself created "),$e={href:"https://github.com/nushell/nushell/pull/6730",target:"_blank",rel:"noopener noreferrer"},et=e("Improve erroring of "),tt=t("code",null,"config nu",-1),ot=e(" and "),nt=t("code",null,"config env",-1),st=e(", and "),lt={href:"https://github.com/nushell/nushell/pull/6717",target:"_blank",rel:"noopener noreferrer"},rt=e("let "),ht=t("code",null,"alias",-1),it=e(" list aliases"),at=e(", and "),dt={href:"https://github.com/nushell/nushell/pull/6684",target:"_blank",rel:"noopener noreferrer"},_t=e("return gid and uid in numbers if name not found"),ct=e(", and "),ut={href:"https://github.com/nushell/nushell/pull/6674",target:"_blank",rel:"noopener noreferrer"},pt=e("Don't attempt to eval and trace if the repl line is empty"),ft=e(", and "),gt={href:"https://github.com/nushell/nushell/pull/6649",target:"_blank",rel:"noopener noreferrer"},bt=e("allow for "),mt=t("code",null,"$in",-1),kt=e(" to affect environment"),wt=e(", and "),xt={href:"https://github.com/nushell/nushell/pull/6638",target:"_blank",rel:"noopener noreferrer"},yt=e("ensure Operator::And errors out with incompatible types"),vt=e("HannahZhuSWE created "),Nt={href:"https://github.com/nushell/nushell/pull/6724",target:"_blank",rel:"noopener noreferrer"},Et=e("Add search terms to arg dataframe commands"),At=e("Dylan987 created "),Rt={href:"https://github.com/nushell/nushell/pull/6722",target:"_blank",rel:"noopener noreferrer"},Tt=e("Add search terms for export commands"),St=e("zephaniahong created "),Ft={href:"https://github.com/nushell/nushell/pull/6720",target:"_blank",rel:"noopener noreferrer"},qt=e("Add search terms for uppercase"),It=e("HoLLy-HaCKeR created "),Ut={href:"https://github.com/nushell/nushell/pull/6716",target:"_blank",rel:"noopener noreferrer"},zt=e("Fix invalid variable name in "),Dt=t("code",null,"input",-1),Lt=e(" command docs"),Ct=e("WindSoilder created "),Wt={href:"https://github.com/nushell/nushell/pull/6715",target:"_blank",rel:"noopener noreferrer"},Mt=e("avoid freeze when external command generates too much stdout output "),jt=e(", and "),Ht={href:"https://github.com/nushell/nushell/pull/6700",target:"_blank",rel:"noopener noreferrer"},Pt=e("avoid freeze when capturing external stderr"),Bt=e(", and "),Vt={href:"https://github.com/nushell/nushell/pull/6688",target:"_blank",rel:"noopener noreferrer"},Kt=e("avoid freeze for table print"),Ot=e(", and "),Gt={href:"https://github.com/nushell/nushell/pull/6645",target:"_blank",rel:"noopener noreferrer"},Jt=e("Eval external command result immediately when using "),Qt=t("code",null,"do",-1),Xt=e(" command with "),Yt=t("code",null,"-c",-1),Zt=e(", and "),$t={href:"https://github.com/nushell/nushell/pull/6643",target:"_blank",rel:"noopener noreferrer"},eo=e("Make semicolon works better for internal commands"),to=e("KyleRAnderson created "),oo={href:"https://github.com/nushell/nushell/pull/6707",target:"_blank",rel:"noopener noreferrer"},no=e('Filter out empty glob patterns to "glob" command'),so=e("jake-albert created "),lo={href:"https://github.com/nushell/nushell/pull/6695",target:"_blank",rel:"noopener noreferrer"},ro=e("Return error on "),ho=t("code",null,"str replace",-1),io=e(" RegEx parse fail"),ao=e("bcmyers created "),_o={href:"https://github.com/nushell/nushell/pull/6694",target:"_blank",rel:"noopener noreferrer"},co=e("Upgrade num-format to 0.4.3"),uo=e("hustcer created "),po={href:"https://github.com/nushell/nushell/pull/6666",target:"_blank",rel:"noopener noreferrer"},fo=e("Update nushell version for release workflow"),go=e("NotLebedev created "),bo={href:"https://github.com/nushell/nushell/pull/6660",target:"_blank",rel:"noopener noreferrer"},mo=e("To nuon escapes"),ko=e("rsteube created "),wo={href:"https://github.com/nushell/nushell/pull/6652",target:"_blank",rel:"noopener noreferrer"},xo=e("nu-cli: external completer precedence before file"),yo=e("Kangaxx-0 created "),vo={href:"https://github.com/nushell/nushell/pull/6603",target:"_blank",rel:"noopener noreferrer"},No=e("Fix issue 6596"),Eo=e("zhiburt created "),Ao={href:"https://github.com/nushell/nushell/pull/6286",target:"_blank",rel:"noopener noreferrer"},Ro=e("WIP/ Checkout to new "),To=t("code",null,"tabled",-1),So=t("h2",{id:"documentation",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#documentation","aria-hidden":"true"},"#"),e(" Documentation")],-1),Fo=e("WindSoilder created "),qo={href:"https://github.com/nushell/nushell.github.io/pull/641",target:"_blank",rel:"noopener noreferrer"},Io=e("Add note about subexpression with external commands"),Uo=e("zephaniahong created "),zo={href:"https://github.com/nushell/nushell.github.io/pull/638",target:"_blank",rel:"noopener noreferrer"},Do=e("Update working_with_lists.md"),Lo=e(", and "),Co={href:"https://github.com/nushell/nushell.github.io/pull/637",target:"_blank",rel:"noopener noreferrer"},Wo=e("Update working_with_lists.md"),Mo=e(", and "),jo={href:"https://github.com/nushell/nushell.github.io/pull/636",target:"_blank",rel:"noopener noreferrer"},Ho=e("Update working_with_strings.md"),Po=e("HoLLy-HaCKeR created "),Bo={href:"https://github.com/nushell/nushell.github.io/pull/635",target:"_blank",rel:"noopener noreferrer"},Vo=e("Fix example variables using "),Ko=t("code",null,"-",-1),Oo=e(" in their name"),Go=e("merelymyself created "),Jo={href:"https://github.com/nushell/nushell.github.io/pull/634",target:"_blank",rel:"noopener noreferrer"},Qo=e("add reference to semicolons, remove redundant "),Xo=t("code",null,"group",-1),Yo=e(" from types_of_data"),Zo=e(", and "),$o={href:"https://github.com/nushell/nushell.github.io/pull/615",target:"_blank",rel:"noopener noreferrer"},en=e("Update blog with breaking change: different behaviour for "),tn=t("code",null,"first 1",-1),on=e("ohno418 created "),nn={href:"https://github.com/nushell/nushell.github.io/pull/632",target:"_blank",rel:"noopener noreferrer"},sn=e('Fix a sample code on the "moving around" chapter'),ln=e("sholderbach created "),rn={href:"https://github.com/nushell/nushell.github.io/pull/630",target:"_blank",rel:"noopener noreferrer"},hn=e("Mention the "),an=t("code",null,"--features extra",-1),dn=e(" requirement in the text"),_n=e("NotTheEconomist created "),cn={href:"https://github.com/nushell/nushell.github.io/pull/629",target:"_blank",rel:"noopener noreferrer"},un=e("Update installation.md"),pn=e("avkonst created "),fn={href:"https://github.com/nushell/nushell.github.io/pull/628",target:"_blank",rel:"noopener noreferrer"},gn=e("Make "),bn=t("code",null,"foo",-1),mn=e(" example for Groups parsable by nushell"),kn=e("hustcer created "),wn={href:"https://github.com/nushell/nushell.github.io/pull/627",target:"_blank",rel:"noopener noreferrer"},xn=e("Update some styles and command doc generation script"),yn=e(", and "),vn={href:"https://github.com/nushell/nushell.github.io/pull/626",target:"_blank",rel:"noopener noreferrer"},Nn=e("ci skip"),En=e(", and "),An={href:"https://github.com/nushell/nushell.github.io/pull/625",target:"_blank",rel:"noopener noreferrer"},Rn=e("Merge docs with the same command name"),Tn=e(", and "),Sn={href:"https://github.com/nushell/nushell.github.io/pull/616",target:"_blank",rel:"noopener noreferrer"},Fn=e("Refresh commands for v0.69"),qn=e("hugosenari created "),In={href:"https://github.com/nushell/nushell.github.io/pull/624",target:"_blank",rel:"noopener noreferrer"},Un=e("fix (plugins): python plugin url changed"),zn=e("SUPERCILEX created "),Dn={href:"https://github.com/nushell/nushell.github.io/pull/621",target:"_blank",rel:"noopener noreferrer"},Ln=e("Add example of inline string concat"),Cn=e("dandavison created "),Wn={href:"https://github.com/nushell/nushell.github.io/pull/620",target:"_blank",rel:"noopener noreferrer"},Mn=e("Some copy editing of initial book sections "),jn=t("h2",{id:"nu-scripts",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#nu-scripts","aria-hidden":"true"},"#"),e(" Nu_Scripts")],-1),Hn=e("dandavison created "),Pn={href:"https://github.com/nushell/nu_scripts/pull/306",target:"_blank",rel:"noopener noreferrer"},Bn=e("sockets command"),Vn=e("eggcaker created "),Kn={href:"https://github.com/nushell/nu_scripts/pull/305",target:"_blank",rel:"noopener noreferrer"},On=e("fix the PATH not working on windows"),Gn=e("DWTW321 created "),Jn={href:"https://github.com/nushell/nu_scripts/pull/304",target:"_blank",rel:"noopener noreferrer"},Qn=e("New custom completions for ani-cli, btm, glow & tealdeer"),Xn=e("Yethal created "),Yn={href:"https://github.com/nushell/nu_scripts/pull/303",target:"_blank",rel:"noopener noreferrer"},Zn=e("add update-path.nu"),$n=e("ehdevries created "),es={href:"https://github.com/nushell/nu_scripts/pull/301",target:"_blank",rel:"noopener noreferrer"},ts=e("Replace str collect with str join in panache-git"),os=t("h2",{id:"reedline",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#reedline","aria-hidden":"true"},"#"),e(" reedline")],-1),ns=e("sholderbach created "),ss={href:"https://github.com/nushell/reedline/pull/497",target:"_blank",rel:"noopener noreferrer"},ls=e("Fix completion example in README/lib.rs"),rs=e(", and "),hs={href:"https://github.com/nushell/reedline/pull/496",target:"_blank",rel:"noopener noreferrer"},is=e("Fix examples in README based on lib.rs"),as=e(", and "),ds={href:"https://github.com/nushell/reedline/pull/495",target:"_blank",rel:"noopener noreferrer"},_s=e("Prepare 0.13 release"),cs=e("perlindgren created "),us={href:"https://github.com/nushell/reedline/pull/493",target:"_blank",rel:"noopener noreferrer"},ps=e("examples updated"),fs=e("tailhook created "),gs={href:"https://github.com/nushell/reedline/pull/490",target:"_blank",rel:"noopener noreferrer"},bs=e("Add "),ms=t("code",null,"Submit",-1),ks=e(" and "),ws=t("code",null,"SubmitOrNewline",-1),xs=e(" editor events"),ys=e(", and "),vs={href:"https://github.com/nushell/reedline/pull/488",target:"_blank",rel:"noopener noreferrer"},Ns=e("Remove flicker on external print");function Es(As,Rs){const o=l("ExternalLinkIcon");return r(),h("div",null,[c,u,p,i(" more "),f,t("p",null,[g,t("a",b,[m,n(o)]),k,t("a",w,[x,n(o)]),y,v,N]),E,t("p",null,[A,t("a",R,[T,n(o)]),S]),F,q,t("ul",null,[t("li",null,[I,t("a",U,[z,n(o)]),D,t("a",L,[C,n(o)])]),t("li",null,[W,t("a",M,[j,n(o)]),H,t("a",P,[B,n(o)]),V,t("a",K,[O,n(o)]),G,t("a",J,[Q,X,n(o)])]),t("li",null,[Y,t("a",Z,[$,n(o)])]),t("li",null,[ee,t("a",te,[oe,n(o)]),ne,t("a",se,[le,n(o)])]),t("li",null,[re,t("a",he,[ie,ae,de,_e,n(o)]),ce,t("a",ue,[pe,n(o)]),fe,t("a",ge,[be,me,n(o)])]),t("li",null,[ke,t("a",we,[xe,n(o)])]),t("li",null,[ye,t("a",ve,[Ne,n(o)]),Ee,t("a",Ae,[Re,n(o)]),Te,t("a",Se,[Fe,n(o)]),qe,t("a",Ie,[Ue,n(o)]),ze,t("a",De,[Le,n(o)]),Ce,t("a",We,[Me,n(o)])]),t("li",null,[je,t("a",He,[Pe,n(o)]),Be,t("a",Ve,[Ke,n(o)]),Oe,t("a",Ge,[Je,n(o)])]),t("li",null,[Qe,t("a",Xe,[Ye,n(o)])]),t("li",null,[Ze,t("a",$e,[et,tt,ot,nt,n(o)]),st,t("a",lt,[rt,ht,it,n(o)]),at,t("a",dt,[_t,n(o)]),ct,t("a",ut,[pt,n(o)]),ft,t("a",gt,[bt,mt,kt,n(o)]),wt,t("a",xt,[yt,n(o)])]),t("li",null,[vt,t("a",Nt,[Et,n(o)])]),t("li",null,[At,t("a",Rt,[Tt,n(o)])]),t("li",null,[St,t("a",Ft,[qt,n(o)])]),t("li",null,[It,t("a",Ut,[zt,Dt,Lt,n(o)])]),t("li",null,[Ct,t("a",Wt,[Mt,n(o)]),jt,t("a",Ht,[Pt,n(o)]),Bt,t("a",Vt,[Kt,n(o)]),Ot,t("a",Gt,[Jt,Qt,Xt,Yt,n(o)]),Zt,t("a",$t,[eo,n(o)])]),t("li",null,[to,t("a",oo,[no,n(o)])]),t("li",null,[so,t("a",lo,[ro,ho,io,n(o)])]),t("li",null,[ao,t("a",_o,[co,n(o)])]),t("li",null,[uo,t("a",po,[fo,n(o)])]),t("li",null,[go,t("a",bo,[mo,n(o)])]),t("li",null,[ko,t("a",wo,[xo,n(o)])]),t("li",null,[yo,t("a",vo,[No,n(o)])]),t("li",null,[Eo,t("a",Ao,[Ro,To,n(o)])])]),So,t("ul",null,[t("li",null,[Fo,t("a",qo,[Io,n(o)])]),t("li",null,[Uo,t("a",zo,[Do,n(o)]),Lo,t("a",Co,[Wo,n(o)]),Mo,t("a",jo,[Ho,n(o)])]),t("li",null,[Po,t("a",Bo,[Vo,Ko,Oo,n(o)])]),t("li",null,[Go,t("a",Jo,[Qo,Xo,Yo,n(o)]),Zo,t("a",$o,[en,tn,n(o)])]),t("li",null,[on,t("a",nn,[sn,n(o)])]),t("li",null,[ln,t("a",rn,[hn,an,dn,n(o)])]),t("li",null,[_n,t("a",cn,[un,n(o)])]),t("li",null,[pn,t("a",fn,[gn,bn,mn,n(o)])]),t("li",null,[kn,t("a",wn,[xn,n(o)]),yn,t("a",vn,[Nn,n(o)]),En,t("a",An,[Rn,n(o)]),Tn,t("a",Sn,[Fn,n(o)])]),t("li",null,[qn,t("a",In,[Un,n(o)])]),t("li",null,[zn,t("a",Dn,[Ln,n(o)])]),t("li",null,[Cn,t("a",Wn,[Mn,n(o)])])]),jn,t("ul",null,[t("li",null,[Hn,t("a",Pn,[Bn,n(o)])]),t("li",null,[Vn,t("a",Kn,[On,n(o)])]),t("li",null,[Gn,t("a",Jn,[Qn,n(o)])]),t("li",null,[Xn,t("a",Yn,[Zn,n(o)])]),t("li",null,[$n,t("a",es,[ts,n(o)])])]),os,t("ul",null,[t("li",null,[ns,t("a",ss,[ls,n(o)]),rs,t("a",hs,[is,n(o)]),as,t("a",ds,[_s,n(o)])]),t("li",null,[cs,t("a",us,[ps,n(o)])]),t("li",null,[fs,t("a",gs,[bs,ms,ks,ws,xs,n(o)]),ys,t("a",vs,[Ns,n(o)])])])])}const Ss=s(_,[["render",Es],["__file","2022-10-18-nushell-0_70.html.vue"]]);export{Ss as default};
