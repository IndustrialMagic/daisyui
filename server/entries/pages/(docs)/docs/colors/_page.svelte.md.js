import { c as create_ssr_component, v as validate_component } from "../../../../../chunks/ssr.js";
import { M as Mdsvex } from "../../../../../chunks/mdsvex.js";
import { T as Translate } from "../../../../../chunks/Translate.js";
const metadata = {
  "title": "Colors",
  "desc": "How to use daisyUI colors?",
  "published": true
};
const Page_svelte = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Mdsvex, "Layout_MDSVEX_DEFAULT").$$render($$result, Object.assign({}, $$props, metadata), {}, {
    default: () => {
      return `<h2 id>${validate_component(Translate, "Translate").$$render($$result, { text: "Introduction" }, {}, {})}</h2> <div class="max-w-3xl">${validate_component(Translate, "Translate").$$render(
        $$result,
        {
          text: "daisyUI is fully themeable and colorable,"
        },
        {},
        {}
      )} ${validate_component(Translate, "Translate").$$render(
        $$result,
        {
          text: "So instead of using constant color utility classes like:"
        },
        {},
        {}
      )} <ul data-svelte-h="svelte-1btn5tu"><li><span class="badge badge-xs bg-green-500"></span> bg-green-500</li> <li><span class="badge badge-xs bg-orange-600"></span> bg-orange-600</li> <li><span class="badge badge-xs bg-blue-700"></span> bg-blue-700</li> <li>etc.</li></ul> ${validate_component(Translate, "Translate").$$render(
        $$result,
        {
          text: "It's suggested to use semantic color utility classes like:"
        },
        {},
        {}
      )} <ul data-svelte-h="svelte-18ee2t6"><li><span class="badge badge-xs bg-primary"></span> bg-primary</li> <li><span class="badge badge-xs bg-secondary"></span> bg-secondary</li> <li><span class="badge badge-xs bg-accent"></span> bg-accent</li> <li>etc.</li></ul> ${validate_component(Translate, "Translate").$$render(
        $$result,
        {
          text: "Each color name contains CSS variables and each daisyUI theme applies color values to the utility classes when it is applied."
        },
        {},
        {}
      )} <h2 id="-1"><a aria-hidden="true" tabindex="-1" href="#-1" data-svelte-h="svelte-1trhte2"><span class="mr-1 opacity-20 hover:opacity-60 text-base font-bold inline-block align-middle relative -mt-1">#</span></a>${validate_component(Translate, "Translate").$$render($$result, { text: "Benefits" }, {}, {})}</h2> ${validate_component(Translate, "Translate").$$render(
        $$result,
        {
          text: "Semantic color names make more sense because when we design interfaces, we don't just use any random color. We define a specific color palette with names like <code>primary</code>, <code>secondary</code>, etc. and we only use those specific colors in our interfaces."
        },
        {},
        {}
      )} ${validate_component(Translate, "Translate").$$render(
        $$result,
        {
          text: "Also, using semantic color names makes theming easier. You wouldn't have to define dark-mode colors for every single element and you wouldn't be limited to only light/dark themes. you can have multiple themes available and each theme is just a few lines of CSS variables."
        },
        {},
        {}
      )}</div> <h2 id="-2"><a aria-hidden="true" tabindex="-1" href="#-2" data-svelte-h="svelte-les9x9"><span class="mr-1 opacity-20 hover:opacity-60 text-base font-bold inline-block align-middle relative -mt-1">#</span></a>${validate_component(Translate, "Translate").$$render($$result, { text: "List of all daisyUI color names" }, {}, {})}</h2> ${validate_component(Translate, "Translate").$$render(
        $$result,
        {
          text: "You can use these color names in your theme or in utility classes."
        },
        {},
        {}
      )} <div class="overflow-x-auto"><div class="whitespace-nowrap"><table><thead><tr><th></th> <th>${validate_component(Translate, "Translate").$$render($$result, { text: "Color name + description" }, {}, {})}</th> <th>${validate_component(Translate, "Translate").$$render($$result, { text: "Required or optional for themes" }, {}, {})}</th> <th>${validate_component(Translate, "Translate").$$render($$result, { text: "Example use" }, {}, {})}</th></tr></thead> <tbody data-svelte-h="svelte-jy68tf"><tr><td><span class="badge relative top-4 bg-primary"></span></td> <td><span class="font-mono font-bold">primary</span> <br> <span class="text-xs opacity-60">Primary color</span></td> <td><span class="badge badge-sm">required</span></td> <td><span class="font-mono text-xs opacity-60">Class name: <code>bg-primary</code></span> <br> <span class="text-xs opacity-60 font-mono">CSS variable: <code>hsl(var(--p))</code></span></td></tr> <tr><td><span class="badge relative top-4 bg-primary-focus"></span></td> <td><span class="font-mono font-bold">primary-focus</span> <br> <span class="text-xs opacity-60">Primary color when focused</span></td> <td><span class="badge badge-sm badge-ghost">optional</span> <br> <span class="text-xs opacity-60">Will be a darker tone of primary if not specified</span></td> <td><span class="font-mono text-xs opacity-60">Class name: <code>bg-primary-focus</code></span> <br> <span class="text-xs opacity-60 font-mono">CSS variable: <code>hsl(var(--pf))</code></span></td></tr> <tr><td><span class="badge relative top-4 bg-primary-content"></span></td> <td><span class="font-mono font-bold">primary-content</span> <br> <span class="text-xs opacity-60">Foreground content color to use on primary color</span></td> <td><span class="badge badge-sm badge-ghost">optional</span> <br> <span class="text-xs opacity-60">Will be a readable tone of primary if not specified</span></td> <td><span class="font-mono text-xs opacity-60">Class name: <code>bg-primary-content</code></span> <br> <span class="text-xs opacity-60 font-mono">CSS variable: <code>hsl(var(--pc))</code></span></td></tr> <tr><td></td> <td></td> <td></td> <td></td></tr> <tr><td><span class="badge relative top-4 bg-secondary"></span></td> <td><span class="font-mono font-bold">secondary</span> <br> <span class="text-xs opacity-60">Secondary color</span></td> <td><span class="badge badge-sm">required</span></td> <td><span class="font-mono text-xs opacity-60">Class name: <code>bg-secondary</code></span> <br> <span class="text-xs opacity-60 font-mono">CSS variable: <code>hsl(var(--s))</code></span></td></tr> <tr><td><span class="badge relative top-4 bg-secondary-focus"></span></td> <td><span class="font-mono font-bold">secondary-focus</span> <br> <span class="text-xs opacity-60">Secondary color when focused</span></td> <td><span class="badge badge-sm badge-ghost">optional</span> <br> <span class="text-xs opacity-60">Will be a darker tone of secondary if not specified</span></td> <td><span class="font-mono text-xs opacity-60">Class name: <code>bg-secondary-focus</code></span> <br> <span class="text-xs opacity-60 font-mono">CSS variable: <code>hsl(var(--sf))</code></span></td></tr> <tr><td><span class="badge relative top-4 bg-secondary-content"></span></td> <td><span class="font-mono font-bold">secondary-content</span> <br> <span class="text-xs opacity-60">Foreground content color to use on secondary color</span></td> <td><span class="badge badge-sm badge-ghost">optional</span> <br> <span class="text-xs opacity-60">Will be a readable tone of secondary if not specified</span></td> <td><span class="font-mono text-xs opacity-60">Class name: <code>bg-secondary-content</code></span> <br> <span class="text-xs opacity-60 font-mono">CSS variable: <code>hsl(var(--sc))</code></span></td></tr> <tr><td></td> <td></td> <td></td> <td></td></tr> <tr><td><span class="badge relative top-4 bg-accent"></span></td> <td><span class="font-mono font-bold">accent</span> <br> <span class="text-xs opacity-60">Accent color</span></td> <td><span class="badge badge-sm">required</span></td> <td><span class="font-mono text-xs opacity-60">Class name: <code>bg-accent</code></span> <br> <span class="text-xs opacity-60 font-mono">CSS variable: <code>hsl(var(--a))</code></span></td></tr> <tr><td><span class="badge relative top-4 bg-accent-focus"></span></td> <td><span class="font-mono font-bold">accent-focus</span> <br> <span class="text-xs opacity-60">Accent color when focused</span></td> <td><span class="badge badge-sm badge-ghost">optional</span> <br> <span class="text-xs opacity-60">Will be a darker tone of accent if not specified</span></td> <td><span class="font-mono text-xs opacity-60">Class name: <code>bg-accent-focus</code></span> <br> <span class="text-xs opacity-60 font-mono">CSS variable: <code>hsl(var(--af))</code></span></td></tr> <tr><td><span class="badge relative top-4 bg-accent-content"></span></td> <td><span class="font-mono font-bold">accent-content</span> <br> <span class="text-xs opacity-60">Foreground content color to use on accent color</span></td> <td><span class="badge badge-sm badge-ghost">optional</span> <br> <span class="text-xs opacity-60">Will be a readable tone of accent if not specified</span></td> <td><span class="font-mono text-xs opacity-60">Class name: <code>bg-accent-content</code></span> <br> <span class="text-xs opacity-60 font-mono">CSS variable: <code>hsl(var(--ac))</code></span></td></tr> <tr><td></td> <td></td> <td></td> <td></td></tr> <tr><td><span class="badge relative top-4 bg-neutral"></span></td> <td><span class="font-mono font-bold">neutral</span> <br> <span class="text-xs opacity-60">Neutral color</span></td> <td><span class="badge badge-sm">required</span></td> <td><span class="font-mono text-xs opacity-60">Class name: <code>bg-neutral</code></span> <br> <span class="text-xs opacity-60 font-mono">CSS variable: <code>hsl(var(--n))</code></span></td></tr> <tr><td><span class="badge relative top-4 bg-neutral-focus"></span></td> <td><span class="font-mono font-bold">neutral-focus</span> <br> <span class="text-xs opacity-60">Neutral color when focused</span></td> <td><span class="badge badge-sm badge-ghost">optional</span> <br> <span class="text-xs opacity-60">Will be a darker tone of neutral if not specified</span></td> <td><span class="font-mono text-xs opacity-60">Class name: <code>bg-neutral-focus</code></span> <br> <span class="text-xs opacity-60 font-mono">CSS variable: <code>hsl(var(--nf))</code></span></td></tr> <tr><td><span class="badge relative top-4 bg-neutral-content"></span></td> <td><span class="font-mono font-bold">neutral-content</span> <br> <span class="text-xs opacity-60">Foreground content color to use on neutral color</span></td> <td><span class="badge badge-sm badge-ghost">optional</span> <br> <span class="text-xs opacity-60">Will be a readable tone of neutral if not specified</span></td> <td><span class="font-mono text-xs opacity-60">Class name: <code>bg-neutral-content</code></span> <br> <span class="text-xs opacity-60 font-mono">CSS variable: <code>hsl(var(--nc))</code></span></td></tr> <tr><td></td> <td></td> <td></td> <td></td></tr> <tr><td><span class="badge relative top-4 bg-base-100"></span></td> <td><span class="font-mono font-bold">base-100</span> <br> <span class="text-xs opacity-60">Base color of page, used for blank backgrounds</span></td> <td><span class="badge badge-sm">required</span></td> <td><span class="font-mono text-xs opacity-60">Class name: <code>bg-base-100</code></span> <br> <span class="text-xs opacity-60 font-mono">CSS variable: <code>hsl(var(--b1))</code></span></td></tr> <tr><td><span class="badge relative top-4 bg-base-200"></span></td> <td><span class="font-mono font-bold">base-200</span> <br> <span class="text-xs opacity-60">Base color, a little darker</span></td> <td><span class="badge badge-sm badge-ghost">optional</span> <br> <span class="text-xs opacity-60">Will be a darker tone of base-100 if not specified</span></td> <td><span class="font-mono text-xs opacity-60">Class name: <code>bg-base-200</code></span> <br> <span class="text-xs opacity-60 font-mono">CSS variable: <code>hsl(var(--b2))</code></span></td></tr> <tr><td><span class="badge relative top-4 bg-base-300"></span></td> <td><span class="font-mono font-bold">base-300</span> <br> <span class="text-xs opacity-60">Base color, even more darker</span></td> <td><span class="badge badge-sm badge-ghost">optional</span> <br> <span class="text-xs opacity-60">Will be a darker tone of base-200 if not specified</span></td> <td><span class="font-mono text-xs opacity-60">Class name: <code>bg-base-300</code></span> <br> <span class="text-xs opacity-60 font-mono">CSS variable: <code>hsl(var(--b3))</code></span></td></tr> <tr><td><span class="badge relative top-4 bg-base-content"></span></td> <td><span class="font-mono font-bold">base-content</span> <br> <span class="text-xs opacity-60">Foreground content color to use on base color</span></td> <td><span class="badge badge-sm badge-ghost">optional</span> <br> <span class="text-xs opacity-60">Will be a readable tone of base-100 if not specified</span></td> <td><span class="font-mono text-xs opacity-60">Class name: <code>bg-base-content</code></span> <br> <span class="text-xs opacity-60 font-mono">CSS variable: <code>hsl(var(--bc))</code></span></td></tr> <tr><td></td> <td></td> <td></td> <td></td></tr> <tr><td><span class="badge relative top-4 bg-info"></span></td> <td><span class="font-mono font-bold">info</span> <br> <span class="text-xs opacity-60">Info color</span></td> <td><span class="badge badge-sm badge-ghost">optional</span> <br> <span class="text-xs opacity-60">Will be a default blue color if not specified</span></td> <td><span class="font-mono text-xs opacity-60">Class name: <code>bg-info</code></span> <br> <span class="text-xs opacity-60 font-mono">CSS variable: <code>hsl(var(--in))</code></span></td></tr> <tr><td><span class="badge relative top-4 bg-info-content"></span></td> <td><span class="font-mono font-bold">info-content</span> <br> <span class="text-xs opacity-60">Foreground content color to use on info color</span></td> <td><span class="badge badge-sm badge-ghost">optional</span> <br> <span class="text-xs opacity-60">Will be a readable tone of info if not specified</span></td> <td><span class="font-mono text-xs opacity-60">Class name: <code>bg-info-content</code></span> <br> <span class="text-xs opacity-60 font-mono">CSS variable: <code>hsl(var(--inc))</code></span></td></tr> <tr><td><span class="badge relative top-4 bg-success"></span></td> <td><span class="font-mono font-bold">success</span> <br> <span class="text-xs opacity-60">Success color</span></td> <td><span class="badge badge-sm badge-ghost">optional</span> <br> <span class="text-xs opacity-60">Will be a default green color if not specified</span></td> <td><span class="font-mono text-xs opacity-60">Class name: <code>bg-success</code></span> <br> <span class="text-xs opacity-60 font-mono">CSS variable: <code>hsl(var(--su))</code></span></td></tr> <tr><td><span class="badge relative top-4 bg-success-content"></span></td> <td><span class="font-mono font-bold">success-content</span> <br> <span class="text-xs opacity-60">Foreground content color to use on success color</span></td> <td><span class="badge badge-sm badge-ghost">optional</span> <br> <span class="text-xs opacity-60">Will be a readable tone of success if not specified</span></td> <td><span class="font-mono text-xs opacity-60">Class name: <code>bg-success-content</code></span> <br> <span class="text-xs opacity-60 font-mono">CSS variable: <code>hsl(var(--suc))</code></span></td></tr> <tr><td><span class="badge relative top-4 bg-warning"></span></td> <td><span class="font-mono font-bold">warning</span> <br> <span class="text-xs opacity-60">Warning color</span></td> <td><span class="badge badge-sm badge-ghost">optional</span> <br> <span class="text-xs opacity-60">Will be a default orange color if not specified</span></td> <td><span class="font-mono text-xs opacity-60">Class name: <code>bg-warning</code></span> <br> <span class="text-xs opacity-60 font-mono">CSS variable: <code>hsl(var(--wa))</code></span></td></tr> <tr><td><span class="badge relative top-4 bg-warning-content"></span></td> <td><span class="font-mono font-bold">warning-content</span> <br> <span class="text-xs opacity-60">Foreground content color to use on warning color</span></td> <td><span class="badge badge-sm badge-ghost">optional</span> <br> <span class="text-xs opacity-60">Will be a readable tone of warning if not specified</span></td> <td><span class="font-mono text-xs opacity-60">Class name: <code>bg-warning-content</code></span> <br> <span class="text-xs opacity-60 font-mono">CSS variable: <code>hsl(var(--wac))</code></span></td></tr> <tr><td><span class="badge relative top-4 bg-error"></span></td> <td><span class="font-mono font-bold">error</span> <br> <span class="text-xs opacity-60">Error color</span></td> <td><span class="badge badge-sm badge-ghost">optional</span> <br> <span class="text-xs opacity-60">Will be a default red color if not specified</span></td> <td><span class="font-mono text-xs opacity-60">Class name: <code>bg-error</code></span> <br> <span class="text-xs opacity-60 font-mono">CSS variable: <code>hsl(var(--er))</code></span></td></tr> <tr><td><span class="badge relative top-4 bg-error-content"></span></td> <td><span class="font-mono font-bold">error-content</span> <br> <span class="text-xs opacity-60">Foreground content color to use on error color</span></td> <td><span class="badge badge-sm badge-ghost">optional</span> <br> <span class="text-xs opacity-60">Will be a readable tone of error if not specified</span></td> <td><span class="font-mono text-xs opacity-60">Class name: <code>bg-error-content</code></span> <br> <span class="text-xs opacity-60 font-mono">CSS variable: <code>hsl(var(--erc))</code></span></td></tr></tbody></table></div></div> <h2 id="-3"><a aria-hidden="true" tabindex="-1" href="#-3" data-svelte-h="svelte-10vq208"><span class="mr-1 opacity-20 hover:opacity-60 text-base font-bold inline-block align-middle relative -mt-1">#</span></a>${validate_component(Translate, "Translate").$$render($$result, { text: "How to use" }, {}, {})}</h2> ${validate_component(Translate, "Translate").$$render(
        $$result,
        {
          text: "Some daisyUI components come with modifier class names and that modifier class name will apply a color."
        },
        {},
        {}
      )} ${validate_component(Translate, "Translate").$$render($$result, { text: "For example" }, {}, {})}:
<pre class="language-html"><!-- HTML_TAG_START -->${`<code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>btn btn-primary<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Button<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span></code>`}<!-- HTML_TAG_END --></pre> ${validate_component(Translate, "Translate").$$render($$result, { text: "Or" }, {}, {})}:
<pre class="language-html"><!-- HTML_TAG_START -->${`<code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>checkbox<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>checkbox checkbox-secondary<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span></code>`}<!-- HTML_TAG_END --></pre> ${validate_component(Translate, "Translate").$$render(
        $$result,
        {
          text: "You can also use color names in utility classes just like Tailwind's original color names."
        },
        {},
        {}
      )} ${validate_component(Translate, "Translate").$$render(
        $$result,
        {
          text: "These are utility classes that can be used with a color name:"
        },
        {},
        {}
      )} <pre class="language-css"><!-- HTML_TAG_START -->${`<code class="language-css"><span class="token selector">bg-</span><span class="token punctuation">&#123;</span>COLOR_NAME<span class="token punctuation">&#125;</span>
<span class="token selector">to-</span><span class="token punctuation">&#123;</span>COLOR_NAME<span class="token punctuation">&#125;</span>
<span class="token selector">via-</span><span class="token punctuation">&#123;</span>COLOR_NAME<span class="token punctuation">&#125;</span>
<span class="token selector">from-</span><span class="token punctuation">&#123;</span>COLOR_NAME<span class="token punctuation">&#125;</span>
<span class="token selector">text-</span><span class="token punctuation">&#123;</span>COLOR_NAME<span class="token punctuation">&#125;</span>
<span class="token selector">ring-</span><span class="token punctuation">&#123;</span>COLOR_NAME<span class="token punctuation">&#125;</span>
<span class="token selector">fill-</span><span class="token punctuation">&#123;</span>COLOR_NAME<span class="token punctuation">&#125;</span>
<span class="token selector">caret-</span><span class="token punctuation">&#123;</span>COLOR_NAME<span class="token punctuation">&#125;</span>
<span class="token selector">stroke-</span><span class="token punctuation">&#123;</span>COLOR_NAME<span class="token punctuation">&#125;</span>
<span class="token selector">border-</span><span class="token punctuation">&#123;</span>COLOR_NAME<span class="token punctuation">&#125;</span>
<span class="token selector">divide-</span><span class="token punctuation">&#123;</span>COLOR_NAME<span class="token punctuation">&#125;</span>
<span class="token selector">accent-</span><span class="token punctuation">&#123;</span>COLOR_NAME<span class="token punctuation">&#125;</span>
<span class="token selector">shadow-</span><span class="token punctuation">&#123;</span>COLOR_NAME<span class="token punctuation">&#125;</span>
<span class="token selector">outline-</span><span class="token punctuation">&#123;</span>COLOR_NAME<span class="token punctuation">&#125;</span>
<span class="token selector">decoration-</span><span class="token punctuation">&#123;</span>COLOR_NAME<span class="token punctuation">&#125;</span>
<span class="token selector">placeholder-</span><span class="token punctuation">&#123;</span>COLOR_NAME<span class="token punctuation">&#125;</span>
<span class="token selector">ring-offset-</span><span class="token punctuation">&#123;</span>COLOR_NAME<span class="token punctuation">&#125;</span></code>`}<!-- HTML_TAG_END --></pre> ${validate_component(Translate, "Translate").$$render(
        $$result,
        {
          text: "So you can use <code>bg-primary</code>, <code>border-secondary</code>, etc."
        },
        {},
        {}
      )}`;
    }
  })}`;
});
export {
  Page_svelte as default,
  metadata
};
