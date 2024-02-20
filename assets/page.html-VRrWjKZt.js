import{_ as m}from"./plugin-vue_export-helper-x3n3nnut.js";import{r,o as i,c as p,b as s,d as e,F as _,h as k,a as l,u as g,f as d,n as v,g as b,e as f,i as w,j as M,k as a,t as x}from"./app-KIMCU0vR.js";const V=e("p",null,[e("code",null,"more"),d(" 注释之前的内容被视为文章摘要。")],-1),C=f(`<h2 id="页面标题" tabindex="-1"><a class="header-anchor" href="#页面标题"><span>页面标题</span></a></h2><p>The first H1 title in Markdown will be regarded as page title.</p><p>Markdown 中的第一个 H1 标题会被视为页面标题。</p><p>你可以在 Markdown 的 Frontmatter 中设置页面标题。</p><div class="language-markdown line-numbers-mode" data-ext="md" data-title="md"><pre class="language-markdown"><code><span class="token front-matter-block"><span class="token punctuation">---</span>
<span class="token front-matter yaml language-yaml"><span class="token key atrule">title</span><span class="token punctuation">:</span> 页面标题</span>
<span class="token punctuation">---</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="页面信息" tabindex="-1"><a class="header-anchor" href="#页面信息"><span>页面信息</span></a></h2><p>你可以在 Markdown 的 Frontmatter 中设置页面信息。</p><ul><li>作者设置为 Ms.Hope。</li><li>写作日期为 2020 年 1 月 1 日</li><li>分类为 “使用指南”</li><li>标签为 “页面配置” 和 “使用指南”</li></ul><h2 id="页面内容" tabindex="-1"><a class="header-anchor" href="#页面内容"><span>页面内容</span></a></h2><p>你可以自由在这里书写你的 Markdown。</p><div class="hint-container tip"><p class="hint-container-title">图片引入</p><ul><li>你可以将图片和 Markdown 文件放置在一起使用相对路径进行引用。</li><li>对于 <code>.vuepress/public</code> 文件夹的图片，请使用绝对链接 <code>/</code> 进行引用。</li></ul></div><h2 id="组件" tabindex="-1"><a class="header-anchor" href="#组件"><span>组件</span></a></h2><p>每个 Markdown 页面都会被转换为一个 Vue 组件，这意味着你可以在 Markdown 中使用 Vue 语法：</p><p>2</p>`,14),y=e("p",null,"你也可以创建并引入你自己的组件。",-1),B=e("hr",null,null,-1),H=e("p",null,"主题包含一些有用的组件。这里是一些例子:",-1),N=e("p",null,"一个卡片:",-1),F={__name:"page.html",setup(P){const c=w({setup(){const n=M("Hello world!"),o=t=>{n.value=t.target.value};return()=>[a("p",[a("span","输入: "),a("input",{value:n.value,onInput:o})]),a("p",[a("span","输出: "),n.value])]}});return(n,o)=>{const t=r("Badge"),u=r("VPCard");return i(),p("div",null,[V,s(" more "),C,s(" markdownlint-disable MD033 "),e("ul",null,[(i(),p(_,null,k(3,h=>e("li",null,x(h),1)),64))]),s(" markdownlint-enable MD033 "),y,l(g(c)),B,H,e("ul",null,[e("li",null,[e("p",null,[d("文字结尾应该有深蓝色的 徽章文字 徽章。 "),l(t,{text:"徽章文字",color:"#242378"})])]),e("li",null,[N,l(u,v(b({title:"Mr.Hope",desc:"Where there is light, there is hope",logo:"https://mister-hope.com/logo.svg",link:"https://mister-hope.com",background:"rgba(253, 230, 138, 0.15)"})),null,16)])])])}}},T=m(F,[["__file","page.html.vue"]]);export{T as default};
