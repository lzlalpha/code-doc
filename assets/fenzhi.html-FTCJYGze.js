import{_ as p}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as e,c as t,d as n,f as s,e as a}from"./app-n5fCT1fV.js";const l={},o=a(`<p>一个程序默认是按照代码的顺序执行下来的，有时我们需要选择性的执行某些语句，这时候就需要分支的功能来实现。选择合适的分支语句可以提高程序的效率。</p><h2 id="if-语句" tabindex="-1"><a class="header-anchor" href="#if-语句"><span>if 语句</span></a></h2><h3 id="基本-if-语句-单分支结构" tabindex="-1"><a class="header-anchor" href="#基本-if-语句-单分支结构"><span>基本 if 语句（单分支结构）</span></a></h3><p>以下是基本 if 语句的结构。</p><div class="language-cpp line-numbers-mode" data-ext="cpp" data-title="cpp"><pre class="language-cpp"><code><span class="token keyword">if</span> <span class="token punctuation">(</span>条件<span class="token punctuation">)</span> <span class="token punctuation">{</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>else if 语句是 if 和 else 的组合，对多个条件进行判断并选择不同的语句分支。在最后一条的 else 语句不需要再写条件。例如，若条件 1 为真，执行主体 1，条件 3 为真而条件 1 和条件 2 都为假，执行主体 3，所有的条件都为假才执行主体 4。</p><p>实际上，这一个语句相当于第一个 if 的 else 分句只有一个 if 语句，就将花括号省略之后放在一起了。如果条件相互之间是并列关系，这样写可以让代码的逻辑更清晰。</p><p>在逻辑上，大约相当于这一段话：</p>`,15),c=n("p",null,"解一元二次方程的时候，方程的根与判别式的关系：",-1),i={class:"MathJax",jax:"SVG",style:{position:"relative"}},d={style:{"vertical-align":"-0.09ex"},xmlns:"http://www.w3.org/2000/svg",width:"6.033ex",height:"1.71ex",role:"img",focusable:"false",viewBox:"0 -716 2666.6 756","aria-hidden":"true"},r=a('<g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)"><g data-mml-node="math"><g data-mml-node="mi"><path data-c="394" d="M51 0Q46 4 46 7Q46 9 215 357T388 709Q391 716 416 716Q439 716 444 709Q447 705 616 357T786 7Q786 4 781 0H51ZM507 344L384 596L137 92L383 91H630Q630 93 507 344Z"></path></g><g data-mml-node="mo" transform="translate(1110.8,0)"><path data-c="3C" d="M694 -11T694 -19T688 -33T678 -40Q671 -40 524 29T234 166L90 235Q83 240 83 250Q83 261 91 266Q664 540 678 540Q681 540 687 534T694 519T687 505Q686 504 417 376L151 250L417 124Q686 -4 687 -5Q694 -11 694 -19Z"></path></g><g data-mml-node="mn" transform="translate(2166.6,0)"><path data-c="30" d="M96 585Q152 666 249 666Q297 666 345 640T423 548Q460 465 460 320Q460 165 417 83Q397 41 362 16T301 -15T250 -22Q224 -22 198 -16T137 16T82 83Q39 165 39 320Q39 494 96 585ZM321 597Q291 629 250 629Q208 629 178 597Q153 571 145 525T137 333Q137 175 145 125T181 46Q209 16 250 16Q290 16 318 46Q347 76 354 130T362 333Q362 478 354 524T321 597Z"></path></g></g></g>',1),u=[r],k=n("mjx-assistive-mml",{unselectable:"on",display:"inline"},[n("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[n("mi",{mathvariant:"normal"},"Δ"),n("mo",null,"<"),n("mn",null,"0")])],-1),v={class:"MathJax",jax:"SVG",style:{position:"relative"}},m={style:{"vertical-align":"-0.186ex"},xmlns:"http://www.w3.org/2000/svg",width:"6.033ex",height:"1.805ex",role:"img",focusable:"false",viewBox:"0 -716 2666.6 798","aria-hidden":"true"},b=a('<g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)"><g data-mml-node="math"><g data-mml-node="mi"><path data-c="394" d="M51 0Q46 4 46 7Q46 9 215 357T388 709Q391 716 416 716Q439 716 444 709Q447 705 616 357T786 7Q786 4 781 0H51ZM507 344L384 596L137 92L383 91H630Q630 93 507 344Z"></path></g><g data-mml-node="mo" transform="translate(1110.8,0)"><path data-c="3D" d="M56 347Q56 360 70 367H707Q722 359 722 347Q722 336 708 328L390 327H72Q56 332 56 347ZM56 153Q56 168 72 173H708Q722 163 722 153Q722 140 707 133H70Q56 140 56 153Z"></path></g><g data-mml-node="mn" transform="translate(2166.6,0)"><path data-c="30" d="M96 585Q152 666 249 666Q297 666 345 640T423 548Q460 465 460 320Q460 165 417 83Q397 41 362 16T301 -15T250 -22Q224 -22 198 -16T137 16T82 83Q39 165 39 320Q39 494 96 585ZM321 597Q291 629 250 629Q208 629 178 597Q153 571 145 525T137 333Q137 175 145 125T181 46Q209 16 250 16Q290 16 318 46Q347 76 354 130T362 333Q362 478 354 524T321 597Z"></path></g></g></g>',1),h=[b],g=n("mjx-assistive-mml",{unselectable:"on",display:"inline"},[n("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[n("mi",{mathvariant:"normal"},"Δ"),n("mo",null,"="),n("mn",null,"0")])],-1),w=n("li",null,"否则 方程有两个不相同的实数解；",-1),f=a(`<h2 id="switch-语句" tabindex="-1"><a class="header-anchor" href="#switch-语句"><span>switch 语句</span></a></h2><div class="language-cpp line-numbers-mode" data-ext="cpp" data-title="cpp"><pre class="language-cpp"><code><span class="token keyword">switch</span> <span class="token punctuation">(</span>选择句<span class="token punctuation">)</span> <span class="token punctuation">{</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container info"><p class="hint-container-title">如何理解 switch</p><p>在上文中，用了大量「case 分句」，「case 子句」等用语，实际上，在底层实现中，switch 相当于一组跳转语句。</p></div>`,15);function Q(y,_){return e(),t("div",null,[o,n("blockquote",null,[c,n("ul",null,[n("li",null,[s("如果 ("),n("mjx-container",i,[(e(),t("svg",d,u)),k]),s(") 方程无解；")]),n("li",null,[s("否则，如果 ("),n("mjx-container",v,[(e(),t("svg",m,h)),g]),s(") 方程有两个相同的实数解；")]),w])]),f])}const T=p(l,[["render",Q],["__file","fenzhi.html.vue"]]);export{T as default};