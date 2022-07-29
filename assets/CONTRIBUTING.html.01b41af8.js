import{_ as l,o as i,c as a,a as e,b as n,d as o,e as s,r as d}from"./app.f96f0b62.js";const r={},c=e("h1",{id:"contributing",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#contributing","aria-hidden":"true"},"#"),o(" Contributing")],-1),h=o("If you want to contribute to nushell itself, see "),u={href:"https://github.com/nushell/nushell/blob/master/CONTRIBUTING.md",target:"_blank",rel:"noopener noreferrer"},_=o("nushell/nushell/CONTRIBUTING.md"),f=o(" and the "),m={href:"https://www.nushell.sh/contributor-book/",target:"_blank",rel:"noopener noreferrer"},g=o("contributor-book"),p=o("."),b=e("p",null,"This website is based on Vuepress.",-1),y=e("h2",{id:"running-vuepress-locally",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#running-vuepress-locally","aria-hidden":"true"},"#"),o(" Running Vuepress locally")],-1),k={href:"https://nodejs.org/en/download/",target:"_blank",rel:"noopener noreferrer"},v=o("Install Node.js"),N={href:"https://yarnpkg.com/getting-started/install",target:"_blank",rel:"noopener noreferrer"},I=o("Install yarn"),w=e("li",null,[o("Run "),e("code",null,"yarn install")],-1),T=e("li",null,[o("Run "),e("code",null,"yarn vuepress dev")],-1),C=e("p",null,[o("If you're adding a new page to the book, to make it appaer, put it also to "),e("code",null,".vuepress/config.js"),o(".")],-1),R=e("h2",{id:"translation-guide",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#translation-guide","aria-hidden":"true"},"#"),o(" Translation Guide")],-1),x=s("<li>First of all, make sure you have installed <code>node.js</code>, <code>yarn</code>, and then clone the doc repo locally: <code>git clone git@github.com:nushell/nushell.github.io.git nu-docs</code>;</li><li>Run <code>yarn install</code> in <code>nu-docs</code> dir after your cloning;</li><li>Add a book dir(if not exists) for the specified locale in the docs&#39; root folder, say <code>zh-CN</code>, and then create a <code>book</code> child folder for all your translated documents, and a README.md for the home page of your locale;</li>",3),j=o("Modify the vuepress config file "),B=e("code",null,"nu-docs/.vuepress/config.js",-1),E=o(", add "),O=e("code",null,"zh-CN",-1),V=o(" related configs, here is a "),G={href:"https://github.com/nushell/nushell.github.io/commit/46d1672",target:"_blank",rel:"noopener noreferrer"},U=o("commit"),z=o(" for reference;"),A=s("<li>Add README.md in the <code>book</code> dir, and that will be the default introduction page of Nushell. Note: Please <strong>DO NOT</strong> translate the file name of the docs.</li><li>Run <code>yarn vuepress dev</code>, then open <strong>http://localhost:8080/</strong> in your browser, switch to the language you are going to translate into, and you will see the introduction page you have just created. You can translate the docs and save them to get a preview in the browser;</li><li>Update the <code>nu-docs/i18n-meta.json</code> file, fill the locale value of the doc you have just finished. It&#39;s recommend to use <code>commit_id@author</code> or simply a <code>commit_id</code> to indicate your translation end to the specified commit;</li><li>Commit your changes, It&#39;s recommend to squash all your commit in one commit with a commit message like this: <code>Translate your_doc_file.md to zh-CN from commit: f3dc86d3d</code>;</li><li>Send a Pull Request;</li><li>Check outdated translations: You can use command like <code>nu ./i18n.nu outdated zh-CN</code> to check the outdated translations(documents have been changed after your last translation) for the specified locale.</li>",6);function D(M,q){const t=d("ExternalLinkIcon");return i(),a("div",null,[c,e("p",null,[h,e("a",u,[_,n(t)]),f,e("a",m,[g,n(t)]),p]),b,y,e("ol",null,[e("li",null,[e("a",k,[v,n(t)])]),e("li",null,[e("a",N,[I,n(t)])]),w,T]),C,R,e("ol",null,[x,e("li",null,[j,B,E,O,V,e("a",G,[U,n(t)]),z]),A])])}var P=l(r,[["render",D],["__file","CONTRIBUTING.html.vue"]]);export{P as default};
