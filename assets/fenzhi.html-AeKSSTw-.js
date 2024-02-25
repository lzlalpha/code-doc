import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,e}from"./app-AIxYR4OL.js";const p={},t=e(`<p>一个程序默认是按照代码的顺序执行下来的，有时我们需要选择性的执行某些语句，这时候就需要分支的功能来实现。选择合适的分支语句可以提高程序的效率。</p><h2 id="if-语句" tabindex="-1"><a class="header-anchor" href="#if-语句"><span>if 语句</span></a></h2><h3 id="基本-if-语句-单分支结构" tabindex="-1"><a class="header-anchor" href="#基本-if-语句-单分支结构"><span>基本 if 语句（单分支结构）</span></a></h3><p>以下是基本 if 语句的结构。</p><div class="language-cpp line-numbers-mode" data-ext="cpp" data-title="cpp"><pre class="language-cpp"><code><span class="token keyword">if</span> <span class="token punctuation">(</span>条件<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  主体<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>if 语句通过对条件进行求值，若结果为真（非 0），执行语句，否则不执行。</p><p>如果主体中只有单个语句的话，花括号可以省略。</p><h3 id="if-else-语句-双分支结构" tabindex="-1"><a class="header-anchor" href="#if-else-语句-双分支结构"><span>if...else 语句（双分支结构）</span></a></h3><div class="language-cpp line-numbers-mode" data-ext="cpp" data-title="cpp"><pre class="language-cpp"><code><span class="token keyword">if</span> <span class="token punctuation">(</span>条件<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  主体<span class="token number">1</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
  主体<span class="token number">2</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>if...else 语句和 if 语句类似，else 不需要再写条件。当 if 语句的条件满足时会执行 if 里的语句，if 语句的条件不满足时会执行 else 里的语句。同样，当主体只有一条语句时，可以省略花括号。</p><h3 id="else-if-语句-多分支结构" tabindex="-1"><a class="header-anchor" href="#else-if-语句-多分支结构"><span>else if 语句（多分支结构）</span></a></h3><div class="language-cpp line-numbers-mode" data-ext="cpp" data-title="cpp"><pre class="language-cpp"><code><span class="token keyword">if</span> <span class="token punctuation">(</span>条件<span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  主体<span class="token number">1</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>条件<span class="token number">2</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  主体<span class="token number">2</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>条件<span class="token number">3</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  主体<span class="token number">3</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
  主体<span class="token number">4</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>else if 语句是 if 和 else 的组合，对多个条件进行判断并选择不同的语句分支。在最后一条的 else 语句不需要再写条件。例如，若条件 1 为真，执行主体 1，条件 3 为真而条件 1 和条件 2 都为假，执行主体 3，所有的条件都为假才执行主体 4。</p><p>实际上，这一个语句相当于第一个 if 的 else 分句只有一个 if 语句，就将花括号省略之后放在一起了。如果条件相互之间是并列关系，这样写可以让代码的逻辑更清晰。</p><p>在逻辑上，大约相当于这一段话：</p><blockquote><p>解一元二次方程的时候，方程的根与判别式的关系：</p><ul><li>如果 ($\\Delta&lt;0$) 方程无解；</li><li>否则，如果 ($\\Delta=0$) 方程有两个相同的实数解；</li><li>否则 方程有两个不相同的实数解；</li></ul></blockquote><h2 id="switch-语句" tabindex="-1"><a class="header-anchor" href="#switch-语句"><span>switch 语句</span></a></h2><div class="language-cpp line-numbers-mode" data-ext="cpp" data-title="cpp"><pre class="language-cpp"><code><span class="token keyword">switch</span> <span class="token punctuation">(</span>选择句<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">case</span> 标签<span class="token number">1</span><span class="token operator">:</span>
    主体<span class="token number">1</span><span class="token punctuation">;</span>
  <span class="token keyword">case</span> 标签<span class="token number">2</span><span class="token operator">:</span>
    主体<span class="token number">2</span><span class="token punctuation">;</span>
  <span class="token keyword">default</span><span class="token operator">:</span>
    主体<span class="token number">3</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>switch 语句执行时，先求出选择句的值，然后根据选择句的值选择相应的标签，从标签处开始执行。其中，选择句必须是一个整数类型表达式，而标签都必须是整数类型的常量。例如：</p><div class="language-cpp line-numbers-mode" data-ext="cpp" data-title="cpp"><pre class="language-cpp"><code><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>  <span class="token comment">// 这里的 i 的数据类型是整型 ，满足整数类型的表达式的要求</span>

<span class="token keyword">switch</span> <span class="token punctuation">(</span>i<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">case</span> <span class="token number">1</span><span class="token operator">:</span>
    cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;daima101&quot;</span> <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-cpp line-numbers-mode" data-ext="cpp" data-title="cpp"><pre class="language-cpp"><code><span class="token keyword">char</span> i <span class="token operator">=</span> <span class="token char">&#39;A&#39;</span><span class="token punctuation">;</span>

<span class="token comment">// 这里的 i 的数据类型是字符型 ，但 char</span>
<span class="token comment">// 也是属于整数的类型，满足整数类型的表达式的要求</span>
<span class="token keyword">switch</span> <span class="token punctuation">(</span>i<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">case</span> <span class="token char">&#39;A&#39;</span><span class="token operator">:</span>
    cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;daima101&quot;</span> <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>switch 语句中还要根据需求加入 break 语句进行中断，否则在对应的 case 被选择之后接下来的所有 case 里的语句和 default 里的语句都会被运行。具体例子可看下面的示例。</p><div class="language-cpp line-numbers-mode" data-ext="cpp" data-title="cpp"><pre class="language-cpp"><code><span class="token keyword">char</span> i <span class="token operator">=</span> <span class="token char">&#39;B&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">switch</span> <span class="token punctuation">(</span>i<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">case</span> <span class="token char">&#39;A&#39;</span><span class="token operator">:</span>
    cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;daima101&quot;</span> <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>
    <span class="token keyword">break</span><span class="token punctuation">;</span>

  <span class="token keyword">case</span> <span class="token char">&#39;B&#39;</span><span class="token operator">:</span>
    cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;daimalong&quot;</span> <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>

  <span class="token keyword">default</span><span class="token operator">:</span>
    cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;Hello World&quot;</span> <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>以上代码运行后输出的结果为 <code>daimalong</code> 和 <code>Hello World</code>，如果不想让下面分支的语句被运行就需要 break 了，具体例子可看下面的示例。</p><div class="language-cpp line-numbers-mode" data-ext="cpp" data-title="cpp"><pre class="language-cpp"><code><span class="token keyword">char</span> i <span class="token operator">=</span> <span class="token char">&#39;B&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">switch</span> <span class="token punctuation">(</span>i<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">case</span> <span class="token char">&#39;A&#39;</span><span class="token operator">:</span>
    cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;daima101&quot;</span> <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>
    <span class="token keyword">break</span><span class="token punctuation">;</span>

  <span class="token keyword">case</span> <span class="token char">&#39;B&#39;</span><span class="token operator">:</span>
    cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;daimalong&quot;</span> <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>
    <span class="token keyword">break</span><span class="token punctuation">;</span>

  <span class="token keyword">default</span><span class="token operator">:</span>
    cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;Hello World&quot;</span> <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>以上代码运行后输出的结果为 daimalong，因为 break 的存在，接下来的语句就不会继续被执行了。最后一个语句不需要 break，因为下面没有语句了。</p><p>处理入口编号不能重复，但可以颠倒。也就是说，入口编号的顺序不重要。各个 case（包括 default）的出现次序可任意。例如：</p><div class="language-cpp line-numbers-mode" data-ext="cpp" data-title="cpp"><pre class="language-cpp"><code><span class="token keyword">char</span> i <span class="token operator">=</span> <span class="token char">&#39;B&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">switch</span> <span class="token punctuation">(</span>i<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">case</span> <span class="token char">&#39;B&#39;</span><span class="token operator">:</span>
    cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;daimalong&quot;</span> <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>
    <span class="token keyword">break</span><span class="token punctuation">;</span>

  <span class="token keyword">default</span><span class="token operator">:</span>
    cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;Hello World&quot;</span> <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>
    <span class="token keyword">break</span><span class="token punctuation">;</span>

  <span class="token keyword">case</span> <span class="token char">&#39;A&#39;</span><span class="token operator">:</span>
    cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;daima101&quot;</span> <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>switch 的 case 分句中也可以选择性的加花括号。不过要注意的是，如果需要在 switch 语句中定义变量，花括号是必须要加的。例如：</p><div class="language-cpp line-numbers-mode" data-ext="cpp" data-title="cpp"><pre class="language-cpp"><code><span class="token keyword">char</span> i <span class="token operator">=</span> <span class="token char">&#39;B&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">switch</span> <span class="token punctuation">(</span>i<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">case</span> <span class="token char">&#39;A&#39;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">,</span> j <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>
    cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;daima101&quot;</span> <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>
    ans <span class="token operator">=</span> i <span class="token operator">+</span> j<span class="token punctuation">;</span>
    <span class="token keyword">break</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">case</span> <span class="token char">&#39;B&#39;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token keyword">int</span> qwq <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">;</span>
    cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;daimalong&quot;</span> <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>
    ans <span class="token operator">=</span> qwq <span class="token operator">*</span> qwq<span class="token punctuation">;</span>
    <span class="token keyword">break</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">default</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;Hello World&quot;</span> <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container info"><p class="hint-container-title">如何理解 switch</p><p>在上文中，用了大量「case 分句」，「case 子句」等用语，实际上，在底层实现中，switch 相当于一组跳转语句。</p></div>`,31),l=[t];function c(o,i){return s(),a("div",null,l)}const r=n(p,[["render",c],["__file","fenzhi.html.vue"]]);export{r as default};
