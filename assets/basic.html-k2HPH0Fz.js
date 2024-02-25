import{_ as d}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as o,o as i,c as p,d as e,f as n,a as s,w as l,e as c}from"./app-MT2G9oNk.js";const r={},u=c(`<h2 id="代码框架" tabindex="-1"><a class="header-anchor" href="#代码框架"><span>代码框架</span></a></h2><p>如果你不想深究背后的原理，初学时可以直接将这个「框架」背下来：</p><div class="language-cpp line-numbers-mode" data-ext="cpp" data-title="cpp"><pre class="language-cpp"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;cstdio&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;iostream&gt;</span></span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 编写代码区</span>
  <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container info"><p class="hint-container-title">什么是 include ？</p><p><code>#include</code> 其实是一个预处理命令，意思为将一个文件「放」在这条语句处，被「放」的文件被称为头文件。也就是说，在编译时，编译器会「复制」头文件 <code>iostream</code> 中的内容，「粘贴」到 <code>#include &lt;iostream&gt;</code> 这条语句处。这样，你就可以使用 <code>iostream</code> 中提供的 <code>std::cin</code>、<code>std::cout</code>、<code>std::endl</code> 等对象了。</p><p>如果你学过 C 语言，你会发现目前我们接触的 C++ 中的头文件一般都不带 <code>.h</code> 后缀，而那些 C 语言中的头文件 <code>xx.h</code> 都变成了 <code>cxx</code>，如 <code>stdio.h</code> 变成了 <code>cstdio</code>。因为 C++ 为了和 C 保持兼容，都直接使用了 C 语言中的头文件，为了区分 C++ 的头文件和 C 的头文件，使用了 <code>c</code> 前缀。</p><p>一般来说，应当根据你需要编写的 C++ 程序的需要来确定你要 <code>#include</code> 哪些头文件。但如果你 <code>#include</code> 了多余的头文件，只会增加编译时间，几乎不会对运行时间造成影响。目前我们只接触到了 <code>iostream</code> 和 <code>cstdio</code> 两个头文件，如果你只需要 <code>scanf</code> 和 <code>printf</code>，就可以不用 <code>#include &lt;iostream&gt;</code>。</p><p>可以 <code>#include</code> 自己写的头文件吗？答案是，可以。</p><p>你可以自己写一个头文件，如： <code>myheader.h</code> 。然后，将其放到和你的代码相同的目录里，再 <code>#include &quot;myheader.h&quot;</code> 即可。需要注意的是，自定义的头文件需要使用引号而非尖括号。当然，你也可以使用编译命令 <code>-I &lt;header_file_path&gt;</code> 来告诉编译器在哪找头文件，就不需要将头文件放到和代码相同的目录里了。</p></div>`,4),h={class:"hint-container info"},m=e("p",{class:"hint-container-title"},"什么是 main()？",-1),_=e("p",null,"可以理解为程序运行时就会执行 main() 中的代码。",-1),k=e("code",null,"main",-1),v=e("code",null,"main",-1),f=e("code",null,"return 0;",-1),b={href:"https://docs.microsoft.com/en-us/openspecs/windows_protocols/ms-erref/",target:"_blank",rel:"noopener noreferrer"},C=e("code",null,"return",-1),x=e("p",null,"在 C 或 C++ 中，程序的返回值不为 0 会导致运行时错误（RE）。",-1),g=c('<h2 id="注释" tabindex="-1"><a class="header-anchor" href="#注释"><span>注释</span></a></h2><p>在 C++ 代码中，注释有两种写法：</p><ol><li><p>行内注释</p><p>以 <code>//</code> 开头，行内位于其后的内容全部为注释。</p></li><li><p>注释块</p><p>以 <code>/*</code> 开头，<code>*/</code> 结尾，中间的内容全部为注释，可以跨行。</p></li></ol><p>注释对程序运行没有影响，可以用来解释程序的意思，还可以在让某段代码不执行（但是依然保留在源文件里）。</p><p>在工程开发中，注释可以便于日后维护、他人阅读。</p><p>在 OI 中，很少有人写许多注释，但注释可以便于在写代码的时候理清思路，或者便于日后复习。而且，如果要写题解、教程的话，适量的注释可以便于读者阅读，理解代码的意图。希望各位同学能养成写注释的好习惯。</p>',6);function w(y,E){const a=o("RouterLink"),t=o("ExternalLinkIcon");return i(),p("div",null,[u,e("div",h,[m,_,e("p",null,[n("实际上，"),k,n(" 函数是由系统或外部程序调用的。如，你在命令行中调用了你的程序，也就是调用了你程序中的 "),v,n(" 函数（在此之前先完成了全局 "),s(a,{to:"/cpp/1jichuyufa/var.html"},{default:l(()=>[n("变量")]),_:1}),n(" 的构造）。")]),e("p",null,[n("最后的 "),f,n(" 表示程序运行成功。默认情况下，程序结束时返回 0 表示一切正常，否则返回值表示错误代码（在 Windows 下这个错误代码的十六进制可以通过 "),e("a",b,[n("Windows Error Codes 网站"),s(t)]),n(" 进行查询）。这个值返回给谁呢？其实就是调用你写的程序的系统或外部程序，它会在你的程序结束时接收到这个返回值。如果不写 "),C,n(" 语句的话，程序正常结束默认返回值也是 0。")]),x]),g])}const N=d(r,[["render",w],["__file","basic.html.vue"]]);export{N as default};
