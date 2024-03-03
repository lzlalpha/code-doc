import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as e,e as a}from"./app-n5fCT1fV.js";const c={},o=a(`<h2 id="代码框架" tabindex="-1"><a class="header-anchor" href="#代码框架"><span>代码框架</span></a></h2><p>如果你不想深究背后的原理，初学时可以直接将这个「框架」背下来：</p><div class="language-cpp line-numbers-mode" data-ext="cpp" data-title="cpp"><pre class="language-cpp"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;iostream&gt;</span></span>
<span class="token keyword">using</span> <span class="token keyword">namespace</span> std<span class="token punctuation">;</span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 编写代码区</span>
  <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container info"><p class="hint-container-title">什么是 include ？</p><p><code>#include</code> 其实是一个预处理命令，意思为将一个文件「放」在这条语句处，被「放」的文件被称为头文件。也就是说，在编译时，编译器会「复制」头文件 <code>iostream</code> 中的内容，「粘贴」到 <code>#include &lt;iostream&gt;</code> 这条语句处。这样，你就可以使用 <code>iostream</code> 中提供的 <code>std::cin</code>、<code>std::cout</code>、<code>std::endl</code> 等对象了。</p></div><div class="hint-container info"><p class="hint-container-title">什么是 main()？</p><p>可以理解为程序运行时就会执行 main() 中的代码。</p><p>实际上，<code>main</code> 函数是由系统或外部程序调用的。如，你在命令行中调用了你的程序，也就是调用了你程序中的 <code>main</code> 函数。</p><p>最后的 <code>return 0;</code> 表示程序运行成功。默认情况下，程序结束时返回 0 表示一切正常，否则返回值表示错误代码。</p><p>在 C 或 C++ 中，程序的返回值不为 0 会导致运行时错误（RE）。</p></div><h2 id="注释" tabindex="-1"><a class="header-anchor" href="#注释"><span>注释</span></a></h2><p>在 C++ 代码中，注释有两种写法：</p><ol><li><p>行内注释</p><p>以 <code>//</code> 开头，行内位于其后的内容全部为注释。</p></li><li><p>注释块</p><p>以 <code>/*</code> 开头，<code>*/</code> 结尾，中间的内容全部为注释，可以跨行。</p></li></ol><p>注释对程序运行没有影响，可以用来解释程序的意思，还可以在让某段代码不执行（但是依然保留在源文件里）。</p><p>在工程开发中，注释可以便于日后维护、他人阅读。</p><p>在 OI 中，很少有人写许多注释，但注释可以便于在写代码的时候理清思路，或者便于日后复习。而且，如果要写题解、教程的话，适量的注释可以便于读者阅读，理解代码的意图。希望各位同学能养成写注释的好习惯。</p>`,11),p=[o];function i(t,d){return s(),e("div",null,p)}const u=n(c,[["render",i],["__file","basic.html.vue"]]);export{u as default};