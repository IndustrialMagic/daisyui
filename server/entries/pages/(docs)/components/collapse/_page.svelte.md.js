import { c as create_ssr_component, a as subscribe, v as validate_component, e as escape } from "../../../../../chunks/ssr.js";
import { p as prefix, M as Mdsvex_components, C as ClassTable, a as Component } from "../../../../../chunks/ClassTable.js";
import { T as Translate } from "../../../../../chunks/Translate.js";
const metadata = {
  "title": "Collapse",
  "desc": "Collapse is used for showing and hiding content.",
  "published": true,
  "layout": "components"
};
const Page_svelte = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_prefix;
  $$unsubscribe_prefix = subscribe(prefix, (value) => value);
  $$unsubscribe_prefix();
  return `${validate_component(Mdsvex_components, "Layout_MDSVEX_DEFAULT").$$render($$result, Object.assign({}, $$props, metadata), {}, {
    default: () => {
      return `${validate_component(ClassTable, "ClassTable").$$render(
        $$result,
        {
          data: [
            {
              type: "component",
              class: "collapse",
              desc: "Container element"
            },
            {
              type: "component",
              class: "collapse-title",
              desc: "Title element"
            },
            {
              type: "component",
              class: "collapse-content",
              desc: "Container for content"
            },
            {
              type: "modifier",
              class: "collapse-arrow",
              desc: "Adds arrow icon"
            },
            {
              type: "modifier",
              class: "collapse-plus",
              desc: "Adds plus/minus icon"
            },
            {
              type: "modifier",
              class: "collapse-open",
              desc: "Force open"
            },
            {
              type: "modifier",
              class: "collapse-close",
              desc: "Force close"
            }
          ]
        },
        {},
        {}
      )} <div class="alert text-sm mt-4"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="stroke-current shrink-0 w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg> <div>${validate_component(Translate, "Translate").$$render(
        $$result,
        {
          text: "Also see <a href='/components/accordion/' class='link'>accordion</a> examples"
        },
        {},
        {}
      )}</div></div> ${validate_component(Component, "Component").$$render(
        $$result,
        {
          title: "Collapse with focus",
          desc: "This collapse works with focus. When div loses focus, it gets closed"
        },
        {},
        {
          html: () => {
            return `<pre slot="html">${escape(`<div tabindex="0" class="$$collapse bg-base-200"> 
  <div class="$$collapse-title text-xl font-medium">
    Focus me to see content
  </div>
  <div class="$$collapse-content"> 
    <p>tabindex="0" attribute is necessary to make the div focusable</p>
  </div>
</div>`)}</pre>`;
          },
          default: () => {
            return `<div tabindex="0" class="collapse bg-base-200" data-svelte-h="svelte-cipff6"><div class="collapse-title text-xl font-medium">Focus me to see content</div> <div class="collapse-content"><p>tabindex=&quot;0&quot; attribute is necessary to make the div focusable</p></div></div>`;
          }
        }
      )} ${validate_component(Component, "Component").$$render(
        $$result,
        {
          title: "Collapse with checkbox",
          desc: "This collapse works with checkbox instead of focus. It needs to get clicked again to get closed."
        },
        {},
        {
          html: () => {
            return `<pre slot="html">${escape(`<div class="$$collapse bg-base-200">
  <input type="checkbox" /> 
  <div class="$$collapse-title text-xl font-medium">
    Click me to show/hide content
  </div>
  <div class="$$collapse-content"> 
    <p>hello</p>
  </div>
</div>`)}</pre>`;
          },
          default: () => {
            return `<div class="collapse bg-base-200" data-svelte-h="svelte-1t6oc6e"><input type="checkbox"> <div class="collapse-title text-xl font-medium">Click me to show/hide content</div> <div class="collapse-content"><p>hello</p></div></div>`;
          }
        }
      )} ${validate_component(Component, "Component").$$render(
        $$result,
        {
          title: "Collapse using <details> and <summary> tag",
          desc: "`collapse-open` and `collapse-close` doesn't work with this method. You can add/remove `open` attribute to the <details> instead"
        },
        {},
        {
          html: () => {
            return `<pre slot="html">${escape(`<details class="$$collapse bg-base-200">
  <summary class="$$collapse-title text-xl font-medium">Click to open/close</summary>
  <div class="$$collapse-content"> 
    <p>content</p>
  </div>
</details>`)}</pre>`;
          },
          default: () => {
            return `<details class="collapse bg-base-200" data-svelte-h="svelte-ueguxa"><summary class="collapse-title text-xl font-medium">Click to open/close</summary> <div class="collapse-content"><p>content</p></div></details>`;
          }
        }
      )} <div class="alert text-sm mt-4" data-svelte-h="svelte-1hbgi5n"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="stroke-current shrink-0 w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg> <div>Using <code>&lt;details&gt;</code> tag, we can&#39;t have animations because <code>&lt;details&gt;</code> tag doesn&#39;t allow CSS transitions.</div></div> ${validate_component(Component, "Component").$$render(
        $$result,
        {
          title: "With border and background color"
        },
        {},
        {
          html: () => {
            return `<pre slot="html">${escape(`<div tabindex="0" class="$$collapse border border-base-300 bg-base-200"> 
  <div class="$$collapse-title text-xl font-medium">
    Focus me to see content
  </div>
  <div class="$$collapse-content"> 
    <p>tabindex="0" attribute is necessary to make the div focusable</p>
  </div>
</div>`)}</pre>`;
          },
          default: () => {
            return `<div tabindex="0" class="collapse border border-base-300 bg-base-200" data-svelte-h="svelte-jqdmnw"><div class="collapse-title text-xl font-medium">Focus me to see content</div> <div class="collapse-content"><p>tabindex=&quot;0&quot; attribute is necessary to make the div focusable</p></div></div>`;
          }
        }
      )} ${validate_component(Component, "Component").$$render($$result, { title: "With arrow icon" }, {}, {
        html: () => {
          return `<pre slot="html">${escape(`<div tabindex="0" class="$$collapse $$collapse-arrow border border-base-300 bg-base-200">
  <div class="$$collapse-title text-xl font-medium">
    Focus me to see content
  </div>
  <div class="$$collapse-content"> 
    <p>tabindex="0" attribute is necessary to make the div focusable</p>
  </div>
</div>`)}</pre>`;
        },
        default: () => {
          return `<div tabindex="0" class="collapse border border-base-300 bg-base-200 collapse-arrow" data-svelte-h="svelte-gd9fwl"><div class="collapse-title text-xl font-medium">Focus me to see content</div> <div class="collapse-content"><p>tabindex=&quot;0&quot; attribute is necessary to make the div focusable</p></div></div>`;
        }
      })} ${validate_component(Component, "Component").$$render($$result, { title: "With arrow plus/minus icon" }, {}, {
        html: () => {
          return `<pre slot="html">${escape(`<div tabindex="0" class="$$collapse $$collapse-plus border border-base-300 bg-base-200">
  <div class="$$collapse-title text-xl font-medium">
    Focus me to see content
  </div>
  <div class="$$collapse-content"> 
    <p>tabindex="0" attribute is necessary to make the div focusable</p>
  </div>
</div>`)}</pre>`;
        },
        default: () => {
          return `<div tabindex="0" class="collapse border border-base-300 bg-base-200 collapse-plus" data-svelte-h="svelte-1tli5nw"><div class="collapse-title text-xl font-medium">Focus me to see content</div> <div class="collapse-content"><p>tabindex=&quot;0&quot; attribute is necessary to make the div focusable</p></div></div>`;
        }
      })} ${validate_component(Component, "Component").$$render($$result, { title: "Force open" }, {}, {
        html: () => {
          return `<pre slot="html">${escape(`<div tabindex="0" class="$$collapse $$collapse-open border border-base-300 bg-base-200"> 
  <div class="$$collapse-title text-xl font-medium">
    I have collapse-open class
  </div>
  <div class="$$collapse-content"> 
    <p>tabindex="0" attribute is necessary to make the div focusable</p>
  </div>
</div>`)}</pre>`;
        },
        default: () => {
          return `<div tabindex="0" class="collapse collapse-open border border-base-300 bg-base-200" data-svelte-h="svelte-ccbbey"><div class="collapse-title text-xl font-medium">I have collapse-open class</div> <div class="collapse-content"><p>tabindex=&quot;0&quot; attribute is necessary to make the div focusable</p></div></div>`;
        }
      })} ${validate_component(Component, "Component").$$render($$result, { title: "Force close" }, {}, {
        html: () => {
          return `<pre slot="html">${escape(`<div tabindex="0" class="$$collapse $$collapse-close border border-base-300 bg-base-200"> 
  <div class="$$collapse-title text-xl font-medium">
    I have collapse-close class
  </div>
  <div class="$$collapse-content"> 
    <p>tabindex="0" attribute is necessary to make the div focusable</p>
  </div>
</div>`)}</pre>`;
        },
        default: () => {
          return `<div tabindex="0" class="collapse collapse-close border border-base-300 bg-base-200" data-svelte-h="svelte-d95l5u"><div class="collapse-title text-xl font-medium">I have collapse-close class</div> <div class="collapse-content"><p>tabindex=&quot;0&quot; attribute is necessary to make the div focusable</p></div></div>`;
        }
      })} ${validate_component(Component, "Component").$$render(
        $$result,
        {
          title: "Custom colors for collapse that works with focus",
          desc: "Use Tailwind CSS `group` and `group-focus` utilities to apply style when parent div is focused"
        },
        {},
        {
          html: () => {
            return `<pre slot="html">${escape(`<div tabindex="0" class="collapse bg-primary text-primary-content focus:bg-secondary focus:text-secondary-content">
  <div class="$$collapse-title">
    Focus me to see content
  </div>
  <div class="$$collapse-content"> 
    <p>tabindex="0" attribute is necessary to make the div focusable</p>
  </div>
</div>`)}</pre>`;
          },
          default: () => {
            return `<div tabindex="0" class="collapse bg-primary text-primary-content focus:bg-secondary focus:text-secondary-content" data-svelte-h="svelte-l2mlsr"><div class="collapse-title">Focus me to see content</div> <div class="collapse-content"><p>tabindex=&quot;0&quot; attribute is necessary to make the div focusable</p></div></div>`;
          }
        }
      )} ${validate_component(Component, "Component").$$render(
        $$result,
        {
          title: "Custom colors for collapse that works with checkbox",
          desc: "Use Tailwind CSS `peer` and `peer-checked` utilities to apply style when sibling checkbox is checked"
        },
        {},
        {
          html: () => {
            return `<pre slot="html">${escape(`<div class="collapse bg-base-200">
  <input type="checkbox" class="peer" /> 
  <div class="$$collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
    Click me to show/hide content
  </div>
  <div class="$$collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content"> 
    <p>hello</p>
  </div>
</div>`)}</pre>`;
          },
          default: () => {
            return `<div class="collapse bg-base-200" data-svelte-h="svelte-14zm87s"><input type="checkbox" class="peer"> <div class="collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">Click me to show/hide content</div> <div class="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content"><p>hello</p></div></div>`;
          }
        }
      )}`;
    }
  })}`;
});
export {
  Page_svelte as default,
  metadata
};
