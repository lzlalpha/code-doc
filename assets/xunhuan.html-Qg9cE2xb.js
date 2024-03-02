import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,e}from"./app-HXMhQnGi.js";const p="/assets/for-loop-VCGErKdm.svg",t="/assets/while-loop-gVxyex1n.svg",o="/assets/do-while-loop-LjPejV47.svg",c={},i=e(`<p>有时，我们需要做一件事很多遍，为了不写过多重复的代码，我们需要循环。</p><p>有时，循环的次数不是一个常量，那么我们无法将代码重复多遍，必须使用循环。</p><h2 id="for-语句" tabindex="-1"><a class="header-anchor" href="#for-语句"><span>for 语句</span></a></h2><p>以下是 for 语句的结构：</p><div class="language-cpp line-numbers-mode" data-ext="cpp" data-title="cpp"><pre class="language-cpp"><code><span class="token keyword">for</span> <span class="token punctuation">(</span>初始化<span class="token punctuation">;</span> 判断条件<span class="token punctuation">;</span> 更新<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  循环体<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>执行顺序：</p><figure><img src="`+p+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>e.g. 读入 n 个数：</p><div class="language-cpp line-numbers-mode" data-ext="cpp" data-title="cpp"><pre class="language-cpp"><code><span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> n<span class="token punctuation">;</span> <span class="token operator">++</span>i<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  cin <span class="token operator">&gt;&gt;</span> a<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>for 语句的三个部分中，任何一个部分都可以省略。其中，若省略了判断条件，相当于判断条件永远为真。</p><h2 id="while-语句" tabindex="-1"><a class="header-anchor" href="#while-语句"><span>while 语句</span></a></h2><p>以下是 while 语句的结构：</p><div class="language-cpp line-numbers-mode" data-ext="cpp" data-title="cpp"><pre class="language-cpp"><code><span class="token keyword">while</span> <span class="token punctuation">(</span>判断条件<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  循环体<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>执行顺序：</p><figure><img src="`+t+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>e.g. 验证 3x+1 猜想：</p><div class="language-cpp line-numbers-mode" data-ext="cpp" data-title="cpp"><pre class="language-cpp"><code><span class="token keyword">while</span> <span class="token punctuation">(</span>x <span class="token operator">&gt;</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>x <span class="token operator">%</span> <span class="token number">2</span> <span class="token operator">==</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    x <span class="token operator">=</span> <span class="token number">3</span> <span class="token operator">*</span> x <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    x <span class="token operator">=</span> x <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="do-while-语句" tabindex="-1"><a class="header-anchor" href="#do-while-语句"><span>do...while 语句</span></a></h2><p>以下是 do...while 语句的结构：</p><div class="language-cpp line-numbers-mode" data-ext="cpp" data-title="cpp"><pre class="language-cpp"><code><span class="token keyword">do</span> <span class="token punctuation">{</span>
  循环体<span class="token punctuation">;</span>
<span class="token punctuation">}</span> <span class="token keyword">while</span> <span class="token punctuation">(</span>判断条件<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>执行顺序：</p><figure><img src="`+o+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>与 while 语句的区别在于，do...while 语句是先执行循环体再进行判断的。</p><p>e.g. 枚举排列：</p><div class="language-cpp line-numbers-mode" data-ext="cpp" data-title="cpp"><pre class="language-cpp"><code><span class="token keyword">do</span> <span class="token punctuation">{</span>
  <span class="token comment">// do someting...</span>
<span class="token punctuation">}</span> <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token function">next_permutation</span><span class="token punctuation">(</span>a <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span> a <span class="token operator">+</span> n <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="break-与-continue-语句" tabindex="-1"><a class="header-anchor" href="#break-与-continue-语句"><span>break 与 continue 语句</span></a></h2><p>break 语句的作用是退出循环。</p><p>continue 语句的作用是跳过循环体的余下部分。下面以 continue 语句在 do...while 语句中的使用为例：</p><div class="language-cpp line-numbers-mode" data-ext="cpp" data-title="cpp"><pre class="language-cpp"><code><span class="token keyword">do</span> <span class="token punctuation">{</span>
  <span class="token comment">// do something...</span>
  <span class="token keyword">continue</span><span class="token punctuation">;</span>  <span class="token comment">// 等价于 goto END;</span>
<span class="token comment">// do something...</span>
END<span class="token operator">:</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span> <span class="token keyword">while</span> <span class="token punctuation">(</span>statement<span class="token punctuation">)</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>break 与 continue 语句均可在三种循环语句的循环体中使用。</p><p>一般来说，break 与 continue 语句用于让代码的逻辑更加清晰，例如：</p><div class="language-cpp line-numbers-mode" data-ext="cpp" data-title="cpp"><pre class="language-cpp"><code><span class="token comment">// 逻辑较为不清晰，大括号层次复杂</span>

<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> n<span class="token punctuation">;</span> <span class="token operator">++</span>i<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">!=</span> x<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> j <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> j <span class="token operator">&lt;=</span> n<span class="token punctuation">;</span> <span class="token operator">++</span>j<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>j <span class="token operator">!=</span> x<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// do something...</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 逻辑更加清晰，大括号层次简单明了</span>

<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> n<span class="token punctuation">;</span> <span class="token operator">++</span>i<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">==</span> x<span class="token punctuation">)</span> <span class="token keyword">continue</span><span class="token punctuation">;</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> j <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> j <span class="token operator">&lt;=</span> n<span class="token punctuation">;</span> <span class="token operator">++</span>j<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>j <span class="token operator">==</span> x<span class="token punctuation">)</span> <span class="token keyword">continue</span><span class="token punctuation">;</span>
    <span class="token comment">// do something...</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-cpp line-numbers-mode" data-ext="cpp" data-title="cpp"><pre class="language-cpp"><code><span class="token comment">// for 语句判断条件复杂，没有体现「枚举」的本质</span>

<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> l<span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> r <span class="token operator">&amp;&amp;</span> i <span class="token operator">%</span> <span class="token number">10</span> <span class="token operator">!=</span> <span class="token number">0</span><span class="token punctuation">;</span> <span class="token operator">++</span>i<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// do something...</span>
<span class="token punctuation">}</span>

<span class="token comment">// for 语句用于枚举，break 用于「到何时为止」</span>

<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> l<span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> r<span class="token punctuation">;</span> <span class="token operator">++</span>i<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">%</span> <span class="token number">10</span> <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token keyword">break</span><span class="token punctuation">;</span>
  <span class="token comment">// do something...</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-cpp line-numbers-mode" data-ext="cpp" data-title="cpp"><pre class="language-cpp"><code><span class="token comment">// 语句重复，顺序不自然</span>

statement1<span class="token punctuation">;</span>
<span class="token keyword">while</span> <span class="token punctuation">(</span>statement3<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  statement2<span class="token punctuation">;</span>
  statement1<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 没有重复语句，顺序自然</span>

<span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  statement1<span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>statement3<span class="token punctuation">)</span> <span class="token keyword">break</span><span class="token punctuation">;</span>
  statement2<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="三种语句的联系" tabindex="-1"><a class="header-anchor" href="#三种语句的联系"><span>三种语句的联系</span></a></h2><div class="language-cpp line-numbers-mode" data-ext="cpp" data-title="cpp"><pre class="language-cpp"><code><span class="token comment">// for 语句</span>

<span class="token keyword">for</span> <span class="token punctuation">(</span>statement1<span class="token punctuation">;</span> statement2<span class="token punctuation">;</span> statement3<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  statement4<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// while 语句</span>

statement1<span class="token punctuation">;</span>
<span class="token keyword">while</span> <span class="token punctuation">(</span>statement2<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  statement4<span class="token punctuation">;</span>
  statement3<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在 statement4 中没有 <code>continue</code> 语句（见下文）的时候是等价的，但是下面一种方法很少用到。</p><div class="language-cpp line-numbers-mode" data-ext="cpp" data-title="cpp"><pre class="language-cpp"><code><span class="token comment">// while 语句</span>

statement1<span class="token punctuation">;</span>
<span class="token keyword">while</span> <span class="token punctuation">(</span>statement2<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  statement1<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// do...while 语句</span>

<span class="token keyword">do</span> <span class="token punctuation">{</span>
  statement1<span class="token punctuation">;</span>
<span class="token punctuation">}</span> <span class="token keyword">while</span> <span class="token punctuation">(</span>statement2<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在 statement1 中没有 <code>continue</code> 语句的时候这两种方式也也是等价的。</p><div class="language-cpp line-numbers-mode" data-ext="cpp" data-title="cpp"><pre class="language-cpp"><code><span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// do something...</span>
<span class="token punctuation">}</span>

<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token punctuation">;</span><span class="token punctuation">;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// do something...</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这两种方式都是永远循环下去。（可以使用 <code>break</code>（见下文）退出。）</p><p>可以看出，三种语句可以彼此代替，但一般来说，语句的选用遵守以下原则：</p><ol><li>循环过程中有个固定的增加步骤（最常见的是枚举）时，使用 for 语句；</li><li>只确定循环的终止条件时，使用 while 语句；</li><li>使用 while 语句时，若要先执行循环体再进行判断，使用 do...while 语句。一般很少用到，常用场景是用户输入。</li></ol>`,43),l=[i];function u(d,r){return s(),a("div",null,l)}const m=n(c,[["render",u],["__file","xunhuan.html.vue"]]);export{m as default};
