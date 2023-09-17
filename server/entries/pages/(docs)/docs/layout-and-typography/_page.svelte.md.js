import { c as create_ssr_component, v as validate_component } from "../../../../../chunks/ssr.js";
import { M as Mdsvex } from "../../../../../chunks/mdsvex.js";
import { T as Translate } from "../../../../../chunks/Translate.js";
const metadata = {
  "title": "Layout and Typography",
  "desc": "How to use layouts and typography in daisyUI",
  "published": true
};
const Page_svelte = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Mdsvex, "Layout_MDSVEX_DEFAULT").$$render($$result, Object.assign({}, $$props, metadata), {}, {
    default: () => {
      return `<h2 id>${validate_component(Translate, "Translate").$$render($$result, { text: "Layout" }, {}, {})}</h2> ${validate_component(Translate, "Translate").$$render(
        $$result,
        {
          text: "Layout, sizing, grids, spacing, etc. all will be handled by Tailwind CSS's utility classes."
        },
        {},
        {}
      )} <br> ${validate_component(Translate, "Translate").$$render($$result, { text: "Read more" }, {}, {})} <ul data-svelte-h="svelte-1rurcax"><li><a href="https://tailwindcss.com/docs/container" rel="nofollow">Layout</a></li> <li><a href="https://tailwindcss.com/docs/width" rel="nofollow">Sizing</a></li> <li><a href="https://tailwindcss.com/docs/flex" rel="nofollow">Flexbox</a></li> <li><a href="https://tailwindcss.com/docs/grid-template-columns" rel="nofollow">Grid</a></li> <li><a href="https://tailwindcss.com/docs/justify-content" rel="nofollow">Box alignment</a></li> <li><a href="https://tailwindcss.com/docs/padding" rel="nofollow">Spacing</a></li></ul> <h2 id="-1"><a aria-hidden="true" tabindex="-1" href="#-1" data-svelte-h="svelte-1trhte2"><span class="mr-1 opacity-20 hover:opacity-60 text-base font-bold inline-block align-middle relative -mt-1">#</span></a>${validate_component(Translate, "Translate").$$render($$result, { text: "Typography" }, {}, {})}</h2> ${validate_component(Translate, "Translate").$$render(
        $$result,
        {
          text: "You should use official <a href='https://github.com/tailwindlabs/tailwindcss-typography'>TailwindCSS Typography plugin</a>."
        },
        {},
        {}
      )} ${validate_component(Translate, "Translate").$$render(
        $$result,
        {
          text: "It handles everything and it's fully customizable."
        },
        {},
        {}
      )} ${validate_component(Translate, "Translate").$$render(
        $$result,
        {
          text: "daisyUI adds some style to @tailwindcss/typography so it will use the same theme as other elements."
        },
        {},
        {}
      )} <div class="alert alert-info max-w-3xl text-sm not-prose"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="stroke-info-content flex-shrink-0 w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg> <p>${validate_component(Translate, "Translate").$$render(
        $$result,
        {
          text: "Make sure you require <span class='badge badge-outline'>daisyui</span> AFTER <span class='badge badge-outline'>@tailwindcss/typography</span> in tailwind.config.js"
        },
        {},
        {}
      )}</p></div> <pre class="language-js"><!-- HTML_TAG_START -->${`<code class="language-js">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">&#123;</span>
  <span class="token comment">//...</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token function">require</span><span class="token punctuation">(</span><span class="token string">"@tailwindcss/typography"</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">"daisyui"</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">&#125;</span></code>`}<!-- HTML_TAG_END --></pre> <hr> <h3 id="-2"><a aria-hidden="true" tabindex="-1" href="#-2" data-svelte-h="svelte-les9x9"><span class="mr-1 opacity-20 hover:opacity-60 text-base font-bold inline-block align-middle relative -mt-1">#</span></a>${validate_component(Translate, "Translate").$$render(
        $$result,
        {
          text: "Here you can see how elements will look using <code>@tailwindcss/typography</code>."
        },
        {},
        {}
      )}:</h3> <div class="max-w-3xl my-20"><h1 id="heading-1" data-svelte-h="svelte-x8go7i"><a aria-hidden="true" tabindex="-1" href="#heading-1"><span class="mr-1 opacity-20 hover:opacity-60 text-base font-bold inline-block align-middle relative -mt-1">#</span></a>Heading 1</h1> <h2 id="heading-2" data-svelte-h="svelte-mtlbs5"><a aria-hidden="true" tabindex="-1" href="#heading-2"><span class="mr-1 opacity-20 hover:opacity-60 text-base font-bold inline-block align-middle relative -mt-1">#</span></a>Heading 2</h2> <h3 id="heading-3" data-svelte-h="svelte-4pq1ic"><a aria-hidden="true" tabindex="-1" href="#heading-3"><span class="mr-1 opacity-20 hover:opacity-60 text-base font-bold inline-block align-middle relative -mt-1">#</span></a>Heading 3</h3> <h4 id="heading-4" data-svelte-h="svelte-12nyuab"><a aria-hidden="true" tabindex="-1" href="#heading-4"><span class="mr-1 opacity-20 hover:opacity-60 text-base font-bold inline-block align-middle relative -mt-1">#</span></a>Heading 4</h4> <p data-svelte-h="svelte-ljxc1d">By default, Tailwind removes all of the default browser styling from paragraphs, headings, lists and more. This ends up being really useful for building application UIs because you spend less time undoing user-agent styles, but when you <em>really are</em> just trying to style some content that came from a rich-text editor in a CMS or a markdown file, it can be surprising and unintuitive.</p> <p data-svelte-h="svelte-147jn5f">We get lots of complaints about it actually, with people regularly asking us things like:</p> <blockquote data-svelte-h="svelte-17oi53b"><p>Why is Tailwind removing the default styles on my <code>h1</code> elements? How do I disable this? What do you mean I lose all the other base styles too?</p></blockquote> <p data-svelte-h="svelte-16uwksk">We hear you, but we’re not convinced that simply disabling our base styles is what you really want. You don’t want to have to remove annoying margins every time you use a <code>p</code> element in a piece of your dashboard UI. And I doubt you really want your blog posts to use the user-agent styles either — you want them to look <em>awesome</em>, not awful.</p> <p data-svelte-h="svelte-c5dphb">The <code>@tailwindcss/typography</code> plugin is our attempt to give you what you <em>actually</em> want, without any of the downsides of doing something stupid like disabling our base styles.</p> <p data-svelte-h="svelte-1fn5hud">It adds a new <code>prose</code> class that you can slap on any block of vanilla HTML content and turn it into a beautiful, well-formatted document:</p> <pre class="language-html"><!-- HTML_TAG_START -->${`<code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>article</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>prose<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">></span></span>Garlic bread with cheese: What the science tells us<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>
    For years parents have espoused the health benefits of eating garlic bread with cheese to their
    children, with the food earning such an iconic status in our culture that kids will often dress
    up as warm, cheesy loaf for Halloween.
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>
    But a recent study shows that the celebrated appetizer may be linked to a series of rabies cases
    springing up around the country.
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>
  <span class="token comment">&lt;!-- ... --></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>article</span><span class="token punctuation">></span></span></code>`}<!-- HTML_TAG_END --></pre> <p data-svelte-h="svelte-w0p9d0">For more information about how to use the plugin and the features it includes, <a href="https://github.com/tailwindcss/typography/blob/master/README.md" rel="nofollow">read the documentation</a>.</p> <hr> <h2 id="what-to-expect-from-here-on-out" data-svelte-h="svelte-2yiqos"><a aria-hidden="true" tabindex="-1" href="#what-to-expect-from-here-on-out"><span class="mr-1 opacity-20 hover:opacity-60 text-base font-bold inline-block align-middle relative -mt-1">#</span></a>What to expect from here on out</h2> <p data-svelte-h="svelte-15qxqqo">What follows from here is just a bunch of absolute nonsense I’ve written to dogfood the plugin itself. It includes every sensible typographic element I could think of, like <strong>bold text</strong>, unordered lists, ordered lists, code blocks, block quotes, <em>and even italics</em>.</p> <p data-svelte-h="svelte-1xe8u9f">It’s important to cover all of these use cases for a few reasons:</p> <ol data-svelte-h="svelte-llpzg7"><li>We want everything to look good out of the box.</li> <li>Really just the first reason, that’s the whole point of the plugin.</li> <li>Here’s a third pretend reason though a list with three items looks more realistic than a list with two items.</li></ol> <p data-svelte-h="svelte-1rle2ij">Now we’re going to try out another header style.</p> <h3 id="typography-should-be-easy" data-svelte-h="svelte-wuaxey"><a aria-hidden="true" tabindex="-1" href="#typography-should-be-easy"><span class="mr-1 opacity-20 hover:opacity-60 text-base font-bold inline-block align-middle relative -mt-1">#</span></a>Typography should be easy</h3> <p data-svelte-h="svelte-7zcgcv">So that’s a header for you — with any luck if we’ve done our job correctly that will look pretty reasonable.</p> <p data-svelte-h="svelte-1a6fls6">Something a wise person once told me about typography is:</p> <blockquote data-svelte-h="svelte-18h630z"><p>Typography is pretty important if you don’t want your stuff to look like trash. Make it good then it won’t be bad.</p></blockquote> <p data-svelte-h="svelte-mt2sry">It’s probably important that images look okay here by default as well:</p> <p data-svelte-h="svelte-cd48vh"><img src="/images/stock/photo-1560717789-0ac7c58ac90a.jpg" alt="Sample Image"></p> <p data-svelte-h="svelte-5enbt1">Now I’m going to show you an example of an unordered list to make sure that looks good, too:</p> <ul data-svelte-h="svelte-14mamiz"><li>So here is the first item in this list.</li> <li>In this example we’re keeping the items short.</li> <li>Later, we’ll use longer, more complex list items.</li></ul> <p data-svelte-h="svelte-1n1ee3m">And that’s the end of this section.</p> <h2 id="what-if-we-stack-headings" data-svelte-h="svelte-1l7o5ty"><a aria-hidden="true" tabindex="-1" href="#what-if-we-stack-headings"><span class="mr-1 opacity-20 hover:opacity-60 text-base font-bold inline-block align-middle relative -mt-1">#</span></a>What if we stack headings?</h2> <h3 id="we-should-make-sure-that-looks-good-too" data-svelte-h="svelte-nkuth1"><a aria-hidden="true" tabindex="-1" href="#we-should-make-sure-that-looks-good-too"><span class="mr-1 opacity-20 hover:opacity-60 text-base font-bold inline-block align-middle relative -mt-1">#</span></a>We should make sure that looks good, too.</h3> <p data-svelte-h="svelte-131tl59">Sometimes you have headings directly underneath each other. In those cases you often have to undo the top margin on the second heading because it usually looks better for the headings to be closer together than a paragraph followed by a heading should be.</p> <h3 id="when-a-heading-comes-after-a-paragraph-" data-svelte-h="svelte-a6wegu"><a aria-hidden="true" tabindex="-1" href="#when-a-heading-comes-after-a-paragraph-"><span class="mr-1 opacity-20 hover:opacity-60 text-base font-bold inline-block align-middle relative -mt-1">#</span></a>When a heading comes after a paragraph …</h3> <p data-svelte-h="svelte-1osprr3">When a heading comes after a paragraph, we need a bit more space, like I already mentioned above. Now let’s see what a more complex list would look like.</p> <ul data-svelte-h="svelte-gllvmn"><li><p><strong>I often do this thing where list items have headings.</strong></p> <p>For some reason I think this looks cool which is unfortunate because it’s pretty annoying to get the styles right.</p> <p>I often have two or three paragraphs in these list items, too, so the hard part is getting the spacing between the paragraphs, list item heading, and separate list items to all make sense. Pretty tough honestly, you could make a strong argument that you just shouldn’t write this way.</p></li> <li><p><strong>Since this is a list, I need at least two items.</strong></p> <p>I explained what I’m doing already in the previous list item, but a list wouldn’t be a list if it only had one item, and we really want this to look realistic. That’s why I’ve added this second list item so I actually have something to look at when writing the styles.</p></li> <li><p><strong>It’s not a bad idea to add a third item either.</strong></p> <p>I think it probably would’ve been fine to just use two items but three is definitely not worse, and since I seem to be having no trouble making up arbitrary things to type, I might as well include it.</p></li></ul> <p data-svelte-h="svelte-3hqci0">After this sort of list I usually have a closing statement or paragraph, because it kinda looks weird jumping right to a heading.</p> <h2 id="code-should-look-okay-by-default" data-svelte-h="svelte-1ygp6oe"><a aria-hidden="true" tabindex="-1" href="#code-should-look-okay-by-default"><span class="mr-1 opacity-20 hover:opacity-60 text-base font-bold inline-block align-middle relative -mt-1">#</span></a>Code should look okay by default.</h2> <p data-svelte-h="svelte-3jihao">I think most people are going to use <a href="https://highlightjs.org/" rel="nofollow">highlight.js</a> or <a href="https://prismjs.com/" rel="nofollow">Prism</a> or something if they want to style their code blocks but it wouldn’t hurt to make them look <em>okay</em> out of the box, even with no syntax highlighting.</p> <p data-svelte-h="svelte-f7v4bj">Here’s what a default <code>tailwind.config.js</code> file looks like at the time of writing:</p> <pre class="language-js"><!-- HTML_TAG_START -->${`<code class="language-js">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">&#123;</span>
  <span class="token literal-property property">purge</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token literal-property property">theme</span><span class="token operator">:</span> <span class="token punctuation">&#123;</span>
    <span class="token literal-property property">extend</span><span class="token operator">:</span> <span class="token punctuation">&#123;</span><span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
  <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">variants</span><span class="token operator">:</span> <span class="token punctuation">&#123;</span><span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">&#125;</span></code>`}<!-- HTML_TAG_END --></pre> <p data-svelte-h="svelte-1n921do">Hopefully that looks good enough to you.</p> <h3 id="what-about-nested-lists" data-svelte-h="svelte-gg1b5v"><a aria-hidden="true" tabindex="-1" href="#what-about-nested-lists"><span class="mr-1 opacity-20 hover:opacity-60 text-base font-bold inline-block align-middle relative -mt-1">#</span></a>What about nested lists?</h3> <p data-svelte-h="svelte-jkh5vi">Nested lists basically always look bad which is why editors like Medium don’t even let you do it, but I guess since some of you goofballs are going to do it we have to carry the burden of at least making it work.</p> <ol data-svelte-h="svelte-13tqhkd"><li><strong>Nested lists are rarely a good idea.</strong><ul><li>You might feel like you are being really “organized” or something but you are just creating a gross shape on the screen that is hard to read.</li> <li>Nested navigation in UIs is a bad idea too, keep things as flat as possible.</li> <li>Nesting tons of folders in your source code is also not helpful.</li></ul></li> <li><strong>Since we need to have more items, here’s another one.</strong><ul><li>I’m not sure if we’ll bother styling more than two levels deep.</li> <li>Two is already too much, three is guaranteed to be a bad idea.</li> <li>If you nest four levels deep you belong in prison.</li></ul></li> <li><strong>Two items isn’t really a list, three is good though.</strong><ul><li>Again please don’t nest lists if you want people to actually read your content.</li> <li>Nobody wants to look at this.</li> <li>I’m upset that we even have to bother styling this.</li></ul></li></ol> <p data-svelte-h="svelte-jmt3wq">The most annoying thing about lists in Markdown is that <code>&lt;li&gt;</code> elements aren’t given a child <code>&lt;p&gt;</code> tag unless there are multiple paragraphs in the list item. That means I have to worry about styling that annoying situation too.</p> <ul data-svelte-h="svelte-1qy754v"><li><p><strong>For example, here’s another nested list.</strong></p> <p>But this time with a second paragraph.</p> <ul><li>These list items won’t have <code>&lt;p&gt;</code> tags</li> <li>Because they are only one line each</li></ul></li> <li><p><strong>But in this second top-level list item, they will.</strong></p> <p>This is especially annoying because of the spacing on this paragraph.</p> <ul><li><p>As you can see here, because I’ve added a second line, this list item now has a <code>&lt;p&gt;</code> tag.</p> <p>This is the second line I’m talking about by the way.</p></li> <li><p>Finally here’s another list item so it’s more like a list.</p></li></ul></li> <li><p>A closing list item, but with no nested list, because why not?</p></li></ul> <p data-svelte-h="svelte-pi2svx">And finally a sentence to close off this section.</p> <h2 id="there-are-other-elements-we-need-to-style" data-svelte-h="svelte-1h83qrg"><a aria-hidden="true" tabindex="-1" href="#there-are-other-elements-we-need-to-style"><span class="mr-1 opacity-20 hover:opacity-60 text-base font-bold inline-block align-middle relative -mt-1">#</span></a>There are other elements we need to style</h2> <p data-svelte-h="svelte-pyk9ce">I almost forgot to mention links, like <a href="https://tailwindcss.com" rel="nofollow">this link to the Tailwind CSS website</a>. We almost made them blue but that’s so yesterday, so we went with dark gray, feels edgier.</p> <p data-svelte-h="svelte-1rscsop">We even included table styles, check it out:</p> <table data-svelte-h="svelte-wd79le"><thead><tr><th>Wrestler</th> <th>Origin</th> <th>Finisher</th></tr></thead> <tbody><tr><td>Bret “The Hitman” Hart</td> <td>Calgary, AB</td> <td>Sharpshooter</td></tr> <tr><td>Stone Cold Steve Austin</td> <td>Austin, TX</td> <td>Stone Cold Stunner</td></tr> <tr><td>Randy Savage</td> <td>Sarasota, FL</td> <td>Elbow Drop</td></tr> <tr><td>Vader</td> <td>Boulder, CO</td> <td>Vader Bomb</td></tr> <tr><td>Razor Ramon</td> <td>Chuluota, FL</td> <td>Razor’s Edge</td></tr></tbody></table> <p data-svelte-h="svelte-bze08c">We also need to make sure inline code looks good, like if I wanted to talk about <code>&lt;span&gt;</code> elements or tell you the good news about <code>@tailwindcss/typography</code>.</p> <h3 id="sometimes-i-even-use-code-in-headings" data-svelte-h="svelte-qv5m85"><a aria-hidden="true" tabindex="-1" href="#sometimes-i-even-use-code-in-headings"><span class="mr-1 opacity-20 hover:opacity-60 text-base font-bold inline-block align-middle relative -mt-1">#</span></a>Sometimes I even use <code>code</code> in headings</h3> <p data-svelte-h="svelte-bqrs5i">Even though it’s probably a bad idea, and historically I’ve had a hard time making it look good. This <em>“wrap the code blocks in backticks”</em> trick works pretty well though really.</p> <p data-svelte-h="svelte-z9zb9k">Another thing I’ve done in the past is put a <code>code</code> tag inside of a link, like if I wanted to tell you about the <a href="https://github.com/tailwindcss/docs" rel="nofollow"><code>tailwindcss/docs</code></a> repository. I don’t love that there is an underline below the backticks but it is absolutely not worth the madness it would require to avoid it.</p> <h4 id="we-havent-used-an-h4-yet" data-svelte-h="svelte-kvfuz"><a aria-hidden="true" tabindex="-1" href="#we-havent-used-an-h4-yet"><span class="mr-1 opacity-20 hover:opacity-60 text-base font-bold inline-block align-middle relative -mt-1">#</span></a>We haven’t used an <code>h4</code> yet</h4> <p data-svelte-h="svelte-4m1jge">But now we have. Please don’t use <code>h5</code> or <code>h6</code> in your content, Medium only supports two heading levels for a reason, you animals. I honestly considered using a <code>before</code> pseudo-element to scream at you if you use an <code>h5</code> or <code>h6</code>.</p> <p data-svelte-h="svelte-ihlk12">We don’t style them at all out of the box because <code>h4</code> elements are already so small that they are the same size as the body copy. What are we supposed to do with an <code>h5</code>, make it <em>smaller</em> than the body copy? No thanks.</p> <h3 id="we-still-need-to-think-about-stacked-headings-though" data-svelte-h="svelte-1hp62ry"><a aria-hidden="true" tabindex="-1" href="#we-still-need-to-think-about-stacked-headings-though"><span class="mr-1 opacity-20 hover:opacity-60 text-base font-bold inline-block align-middle relative -mt-1">#</span></a>We still need to think about stacked headings though.</h3> <h4 id="lets-make-sure-we-dont-screw-that-up-with-h4-elements-either" data-svelte-h="svelte-u7rlz6"><a aria-hidden="true" tabindex="-1" href="#lets-make-sure-we-dont-screw-that-up-with-h4-elements-either"><span class="mr-1 opacity-20 hover:opacity-60 text-base font-bold inline-block align-middle relative -mt-1">#</span></a>Let’s make sure we don’t screw that up with <code>h4</code> elements, either.</h4> <p data-svelte-h="svelte-1lx0e9z">Phew, with any luck we have styled the headings above this text and they look pretty good.</p> <p data-svelte-h="svelte-11l1qwu">Let’s add a closing paragraph here so things end with a decently sized block of text. I can’t explain why I want things to end that way but I have to assume it’s because I think things will look weird or unbalanced if there is a heading too close to the end of the document.</p> <p data-svelte-h="svelte-ww9g2e">What I’ve written here is probably long enough, but adding this final sentence can’t hurt.</p></div>`;
    }
  })}`;
});
export {
  Page_svelte as default,
  metadata
};
