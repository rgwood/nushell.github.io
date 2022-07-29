import{_ as o,o as s,c as a,a as e,b as c,w as l,d as n,r as _}from"./app.f96f0b62.js";const u={},d=e("h1",{id:"\u74B0\u5883\u5909\u6570",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#\u74B0\u5883\u5909\u6570","aria-hidden":"true"},"#"),n(" \u74B0\u5883\u5909\u6570")],-1),i=e("p",null,"\u5916\u90E8\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u304C\u4F7F\u7528\u3059\u308B\u74B0\u5883\u3092\u5236\u5FA1\u3059\u308B\u3053\u3068\u306F\u30B7\u30A7\u30EB\u306E\u4E00\u822C\u7684\u306A\u30BF\u30B9\u30AF\u3067\u3059\u3002\u591A\u304F\u306E\u5834\u5408\u3001\u74B0\u5883\u306F\u30D1\u30C3\u30B1\u30FC\u30B8\u5316\u3055\u308C\u3066\u5916\u90E8\u306E\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u8D77\u52D5\u6642\u306B\u4E0E\u3048\u3089\u308C\u308B\u3053\u3068\u3067\u81EA\u52D5\u7684\u306B\u884C\u308F\u308C\u307E\u3059\u3002\u3057\u304B\u3057\u6642\u306B\u306F\u3001\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u304C\u5229\u7528\u3059\u308B\u74B0\u5883\u5909\u6570\u3092\u3088\u308A\u6B63\u78BA\u306B\u5236\u5FA1\u3057\u305F\u3044\u5834\u5408\u304C\u3042\u308A\u307E\u3059\u3002",-1),r=e("p",null,[n("\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u306B\u9001\u3089\u308C\u308B\u73FE\u5728\u306E\u74B0\u5883\u5909\u6570\u306F"),e("code",null,"$nu.env"),n("\u306E\u5024\u3092 echo \u3057\u3066\u78BA\u8A8D\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002")],-1),h=e("div",{class:"language-text ext-text"},[e("pre",{class:"language-text"},[e("code",null,`> echo $nu.env
\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
 COLORTERM                \u2502 truecolor
 DBUS_SESSION_BUS_ADDRESS \u2502 unix:path=/run/user/1000/bus
 DESKTOP_SESSION          \u2502 gnome
 DISPLAY                  \u2502 :1
`)])],-1),x=n("\u74B0\u5883\u306F Nu \u306E\u8A2D\u5B9A\u3068 Nu \u304C\u5B9F\u884C\u3055\u308C\u3066\u3044\u308B\u74B0\u5883\u304B\u3089\u4F5C\u3089\u308C\u307E\u3059\u3002"),p=n("\u8A2D\u5B9A\u306E\u7AE0"),v=n("\u306B\u8A18\u8F09\u3055\u308C\u3066\u3044\u308B\u65B9\u6CD5\u3067\u74B0\u5883\u3092\u6052\u4E45\u7684\u306B\u66F4\u65B0\u3067\u304D\u307E\u3059\u3002"),O=e("p",null,"\u30B3\u30DE\u30F3\u30C9\u3084\u30D1\u30A4\u30D7\u30E9\u30A4\u30F3\u3092\u5B9F\u884C\u3059\u308B\u3068\u304D\u306B\u4E00\u6642\u7684\u306B\u74B0\u5883\u5909\u6570\u3092\u66F4\u65B0\u3059\u308B\u3053\u3068\u3082\u3067\u304D\u307E\u3059\u3002",-1),g=e("div",{class:"language-text ext-text"},[e("pre",{class:"language-text"},[e("code",null,`> with-env [FOO BAR] { echo $nu.env.FOO }
BAR
`)])],-1),m=e("p",null,[e("code",null,"with-env"),n('\u30B3\u30DE\u30F3\u30C9\u306F\u3001\u74B0\u5883\u5909\u6570\u3092\u4E00\u6642\u7684\u306B\u4E0E\u3048\u3089\u308C\u305F\u5024\u306B\u8A2D\u5B9A\u3057\u307E\u3059(\u3053\u3053\u3067\u306F\u5909\u6570"FOO"\u306B"BAR"\u3068\u3044\u3046\u5024\u304C\u30BB\u30C3\u30C8\u3055\u308C\u307E\u3059)\u3002\u30D6\u30ED\u30C3\u30AF\u306F\u65B0\u3057\u3044\u74B0\u5883\u5909\u6570\u304C\u8A2D\u5B9A\u3055\u308C\u305F\u72B6\u614B\u3067\u5B9F\u884C\u3055\u308C\u307E\u3059\u3002')],-1),S=e("p",null,"Bash \u306A\u3069\u306B\u30D2\u30F3\u30C8\u3092\u5F97\u305F\u4E00\u822C\u7684\u306A\u7701\u7565\u8A18\u6CD5\u3082\u7528\u610F\u3055\u308C\u3066\u3044\u307E\u3059\u3002\u4E0A\u306E\u4F8B\u306F\u6B21\u306E\u3088\u3046\u306B\u66F8\u304F\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002",-1),B=e("div",{class:"language-text ext-text"},[e("pre",{class:"language-text"},[e("code",null,`> FOO=BAR echo $nu.env.FOO
BAR
`)])],-1);function f(R,A){const t=_("RouterLink");return s(),a("div",null,[d,i,r,h,e("p",null,[x,c(t,{to:"/ja/book/configuration.html"},{default:l(()=>[p]),_:1}),v]),O,g,m,S,B])}var E=o(u,[["render",f],["__file","environment.html.vue"]]);export{E as default};
