import { c as create_ssr_component, a as subscribe, v as validate_component, e as escape } from "../../../../../chunks/ssr.js";
import { p as prefix, M as Mdsvex_components, C as ClassTable, a as Component } from "../../../../../chunks/ClassTable.js";
const metadata = {
  "title": "Menu",
  "desc": "Menu is used to display a list of links vertically or horizontally.",
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
              class: "menu",
              desc: "Container <ul> element"
            },
            {
              type: "component",
              class: "menu-title",
              desc: "Specifies the title of menu"
            },
            {
              type: "modifier",
              class: "disabled",
              desc: "Sets <li> as disabled"
            },
            {
              type: "modifier",
              class: "active",
              desc: "Applies actives style to the element inside <li>"
            },
            {
              type: "modifier",
              class: "focus",
              desc: "Applies focus style to the element inside <li>"
            },
            {
              type: "component",
              class: "menu-dropdown-toggle",
              desc: "Class name for the toggle to show/hide the `menu-dropdown` using JS"
            },
            {
              type: "component",
              class: "menu-dropdown",
              desc: "Class name for the collapsible <ul> if you want to show it using JS"
            },
            {
              type: "modifier",
              class: "menu-dropdown-show",
              desc: "Shows the `menu-dropdown-toggle` and `menu-dropdown` collapsible submenu using JS"
            },
            {
              type: "responsive",
              class: "menu-xs",
              desc: "Extra small size"
            },
            {
              type: "responsive",
              class: "menu-sm",
              desc: "Small size"
            },
            {
              type: "responsive",
              class: "menu-md",
              desc: "Medium size (default)"
            },
            {
              type: "responsive",
              class: "menu-lg",
              desc: "Large size"
            },
            {
              type: "responsive",
              class: "menu-vertical",
              desc: "Vertical menu (default)"
            },
            {
              type: "responsive",
              class: "menu-horizontal",
              desc: "Horizontal menu"
            }
          ]
        },
        {},
        {}
      )} ${validate_component(Component, "Component").$$render($$result, { title: "Menu" }, {}, {
        html: () => {
          return `<pre slot="html">${escape(`<ul class="$$menu bg-base-200 w-56 $$rounded-box">
  <li><a>Item 1</a></li>
  <li><a>Item 2</a></li>
  <li><a>Item 3</a></li>
</ul>`)}</pre>`;
        },
        default: () => {
          return `<ul class="menu bg-base-200 w-56 rounded-box" data-svelte-h="svelte-mqvol9"><li><a>Item 1</a></li> <li><a>Item 2</a></li> <li><a>Item 3</a></li></ul>`;
        }
      })} ${validate_component(Component, "Component").$$render(
        $$result,
        {
          title: "Responsive: vertical on small screen, horizontal on large screen"
        },
        {},
        {
          html: () => {
            return `<pre slot="html">${escape(`<ul class="$$menu $$menu-vertical lg:$$menu-horizontal bg-base-200 $$rounded-box">
  <li><a>Item 1</a></li>
  <li><a>Item 2</a></li>
  <li><a>Item 3</a></li>
</ul>`)}</pre>`;
          },
          default: () => {
            return `<ul class="menu menu-vertical lg:menu-horizontal bg-base-200 rounded-box" data-svelte-h="svelte-g7npz"><li><a>Item 1</a></li> <li><a>Item 2</a></li> <li><a>Item 3</a></li></ul>`;
          }
        }
      )} ${validate_component(Component, "Component").$$render($$result, { title: "Menu with icon only" }, {}, {
        html: () => {
          return `<pre slot="html">${escape(`<ul class="$$menu bg-base-200 $$rounded-box">
  <li>
    <a>
      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
    </a>
  </li>
  <li>
    <a>
      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
    </a>
  </li>
  <li>
    <a>
      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
    </a>
  </li>
</ul>`)}</pre>`;
        },
        default: () => {
          return `<ul class="menu bg-base-200 rounded-box" data-svelte-h="svelte-1wqqgbk"><li><a><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg></a></li> <li><a><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg></a></li> <li><a><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path></svg></a></li></ul>`;
        }
      })} ${validate_component(Component, "Component").$$render(
        $$result,
        {
          title: "Menu with icon only (horizontal)"
        },
        {},
        {
          html: () => {
            return `<pre slot="html">${escape(`<ul class="$$menu $$menu-horizontal bg-base-200 $$rounded-box">
  <li>
    <a>
      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
    </a>
  </li>
  <li>
    <a>
      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
    </a>
  </li>
  <li>
    <a>
      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
    </a>
  </li>
</ul>`)}</pre>`;
          },
          default: () => {
            return `<ul class="menu menu-horizontal bg-base-200 rounded-box" data-svelte-h="svelte-5hpexe"><li><a><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg></a></li> <li><a><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg></a></li> <li><a><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path></svg></a></li></ul>`;
          }
        }
      )} ${validate_component(Component, "Component").$$render(
        $$result,
        {
          title: "Menu with icon only with tooltip"
        },
        {},
        {
          html: () => {
            return `<pre slot="html">${escape(`<ul class="$$menu bg-base-200 $$rounded-box">
  <li>
    <a class="tooltip tooltip-right" data-tip="Home">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
    </a>
  </li>
  <li>
    <a class="tooltip tooltip-right" data-tip="Details">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
    </a>
  </li>
  <li>
    <a class="tooltip tooltip-right" data-tip="Stats">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
    </a>
  </li>
</ul>`)}</pre>`;
          },
          default: () => {
            return `<ul class="menu bg-base-200 rounded-box" data-svelte-h="svelte-176dr53"><li><a class="tooltip tooltip-right" data-tip="Home"><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg></a></li> <li><a class="tooltip tooltip-right" data-tip="Details"><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg></a></li> <li><a class="tooltip tooltip-right" data-tip="Stats"><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path></svg></a></li></ul>`;
          }
        }
      )} ${validate_component(Component, "Component").$$render(
        $$result,
        {
          title: "Menu with icon only (horizontal) with tooltip"
        },
        {},
        {
          html: () => {
            return `<pre slot="html">${escape(`<ul class="$$menu $$menu-horizontal bg-base-200 $$rounded-box mt-6">
  <li>
    <a class="$$tooltip" data-tip="Home">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
    </a>
  </li>
  <li>
    <a class="$$tooltip" data-tip="Details">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
    </a>
  </li>
  <li>
    <a class="$$tooltip" data-tip="Stats">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
    </a>
  </li>
</ul>`)}</pre>`;
          },
          default: () => {
            return `<ul class="menu menu-horizontal bg-base-200 rounded-box mt-6" data-svelte-h="svelte-1y2vkv5"><li><a class="tooltip" data-tip="Home"><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg></a></li> <li><a class="tooltip" data-tip="Details"><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg></a></li> <li><a class="tooltip" data-tip="Stats"><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path></svg></a></li></ul>`;
          }
        }
      )} ${validate_component(Component, "Component").$$render(
        $$result,
        {
          title: "Menu sizes",
          classes: "flex flex-col gap-4"
        },
        {},
        {
          html: () => {
            return `<pre slot="html">${escape(`<ul class="$$menu $$menu-xs bg-base-200 w-56 $$rounded-box">
  <li><a>xs item 1</a></li>
  <li><a>xs item 2</a></li>
</ul>
<ul class="$$menu $$menu-sm bg-base-200 w-56 $$rounded-box">
  <li><a>sm item 1</a></li>
  <li><a>sm item 2</a></li>
</ul>
<ul class="$$menu $$menu-md bg-base-200 w-56 $$rounded-box">
  <li><a>md item 1</a></li>
  <li><a>md item 2</a></li>
</ul>
<ul class="$$menu $$menu-lg bg-base-200 w-56 $$rounded-box">
  <li><a>lg item 1</a></li>
  <li><a>lg item 2</a></li>
</ul>`)}</pre>`;
          },
          default: () => {
            return `<ul class="menu menu-xs bg-base-200 w-56 rounded-box" data-svelte-h="svelte-n73efi"><li><a>xs item 1</a></li> <li><a>xs item 2</a></li></ul> <ul class="menu menu-sm bg-base-200 w-56 rounded-box" data-svelte-h="svelte-1pwa9et"><li><a>sm item 1</a></li> <li><a>sm item 2</a></li></ul> <ul class="menu menu-md bg-base-200 w-56 rounded-box" data-svelte-h="svelte-1wlmwna"><li><a>md item 1</a></li> <li><a>md item 2</a></li></ul> <ul class="menu menu-lg bg-base-200 w-56 rounded-box" data-svelte-h="svelte-uzbf4e"><li><a>lg item 1</a></li> <li><a>lg item 2</a></li></ul>`;
          }
        }
      )} ${validate_component(Component, "Component").$$render($$result, { title: "Menu with disabled items" }, {}, {
        html: () => {
          return `<pre slot="html">${escape(`<ul class="$$menu bg-base-200 w-56 $$rounded-box">
  <li><a>Enabled item</a></li>
  <li class="$$disabled"><a>disabled item</a></li>
  <li class="$$disabled"><a>disabled item</a></li>
</ul>`)}</pre>`;
        },
        default: () => {
          return `<ul class="menu bg-base-200 w-56 rounded-box" data-svelte-h="svelte-1gwwnrs"><li><a>Enabled item</a></li> <li class="disabled"><a>disabled item</a></li> <li class="disabled"><a>disabled item</a></li></ul>`;
        }
      })} ${validate_component(Component, "Component").$$render($$result, { title: "Menu with icons" }, {}, {
        html: () => {
          return `<pre slot="html">${escape(`<ul class="$$menu bg-base-200 w-56 $$rounded-box">
  <li>
    <a>
      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
    Item 2
    </a>
  </li>
  <li>
    <a>
      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
      Item 1
    </a>
  </li>
  <li>
    <a>
      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
      Item 3
    </a>
  </li>
</ul>`)}</pre>`;
        },
        default: () => {
          return `<ul class="menu bg-base-200 w-56 rounded-box" data-svelte-h="svelte-uiknfk"><li><a><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg>
    Item 2</a></li> <li><a><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
      Item 1</a></li> <li><a><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path></svg>
      Item 3</a></li></ul>`;
        }
      })} ${validate_component(Component, "Component").$$render(
        $$result,
        {
          title: "Menu with icons and badge (responsive)"
        },
        {},
        {
          html: () => {
            return `<pre slot="html">${escape(`<ul class="$$menu bg-base-200 lg:$$menu-horizontal $$rounded-box">
  <li>
    <a>
      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
      Inbox
      <span class="$$badge $$badge-sm">99+</span>
    </a>
  </li>
  <li>
    <a>
      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
      Updates
      <span class="$$badge $$badge-sm $$badge-warning">NEW</span>
    </a>
  </li>
  <li>
    <a>
      Stats
      <span class="$$badge $$badge-xs $$badge-info"></span>
    </a>
  </li>
</ul>`)}</pre>`;
          },
          default: () => {
            return `<ul class="menu bg-base-200 lg:menu-horizontal rounded-box" data-svelte-h="svelte-1g6e7em"><li><a><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg>
      Inbox
      <span class="badge badge-sm">99+</span></a></li> <li><a><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
      Updates
      <span class="badge badge-sm badge-warning">NEW</span></a></li> <li><a>Stats
      <span class="badge badge-xs badge-info"></span></a></li></ul>`;
          }
        }
      )} ${validate_component(Component, "Component").$$render(
        $$result,
        {
          title: "Menu without padding and border radius"
        },
        {},
        {
          html: () => {
            return `<pre slot="html">${escape(`<ul class="$$menu bg-base-200 w-56 p-0 [&_li>*]:rounded-none">
  <li><a>Item 1</a></li>
  <li><a>Item 2</a></li>
  <li><a>Item 3</a></li>
</ul>`)}</pre>`;
          },
          default: () => {
            return `<ul class="menu bg-base-200 w-56 p-0 [&_li>*]:rounded-none" data-svelte-h="svelte-1tu4a7h"><li><a>Item 1</a></li> <li><a>Item 2</a></li> <li><a>Item 3</a></li></ul>`;
          }
        }
      )} ${validate_component(Component, "Component").$$render($$result, { title: "Menu with title" }, {}, {
        html: () => {
          return `<pre slot="html">${escape(`<ul class="$$menu bg-base-200 w-56 $$rounded-box">
  <li class="$$menu-title">Title</li>
  <li><a>Item 1</a></li>
  <li><a>Item 2</a></li>
  <li><a>Item 3</a></li>
</ul>`)}</pre>`;
        },
        default: () => {
          return `<ul class="menu bg-base-200 w-56 rounded-box" data-svelte-h="svelte-1w0boxd"><li class="menu-title">Title</li> <li><a>Item 1</a></li> <li><a>Item 2</a></li> <li><a>Item 3</a></li></ul>`;
        }
      })} ${validate_component(Component, "Component").$$render($$result, { title: "Menu with title as a parent" }, {}, {
        html: () => {
          return `<pre slot="html">${escape(`<ul class="$$menu bg-base-200 w-56 $$rounded-box">
  <li>
    <h2 class="$$menu-title">Title</h2>
    <ul>
      <li><a>Item 1</a></li>
      <li><a>Item 2</a></li>
      <li><a>Item 3</a></li>
    </ul>
  </li>
</ul>`)}</pre>`;
        },
        default: () => {
          return `<ul class="menu bg-base-200 w-56 rounded-box" data-svelte-h="svelte-1i8sr25"><li><h2 class="menu-title">Title</h2> <ul><li><a>Item 1</a></li> <li><a>Item 2</a></li> <li><a>Item 3</a></li></ul></li></ul>`;
        }
      })} ${validate_component(Component, "Component").$$render($$result, { title: "Submenu" }, {}, {
        html: () => {
          return `<pre slot="html">${escape(`<ul class="$$menu bg-base-200 w-56 $$rounded-box">
  <li><a>Item 1</a></li>
  <li>
    <a>Parent</a>
    <ul>
      <li><a>level 2 item 1</a></li>
      <li><a>level 2 item 2</a></li>
      <li>
        <a>Parent</a>
        <ul>
          <li><a>level 3 item 1</a></li>
          <li><a>level 3 item 2</a></li>
        </ul>
      </li>
    </ul>
  </li>
  <li><a>Item 3</a></li>
</ul>`)}</pre>`;
        },
        default: () => {
          return `<ul class="menu bg-base-200 w-56 rounded-box" data-svelte-h="svelte-hhnq0g"><li><a>Item 1</a></li> <li><a>Parent</a> <ul><li><a>level 2 item 1</a></li> <li><a>level 2 item 2</a></li> <li><a>Parent</a> <ul><li><a>level 3 item 1</a></li> <li><a>level 3 item 2</a></li></ul></li></ul></li> <li><a>Item 3</a></li></ul>`;
        }
      })} ${validate_component(Component, "Component").$$render($$result, { title: "Collapsible submenu" }, {}, {
        html: () => {
          return `<pre slot="html">${escape(`<ul class="$$menu bg-base-200 w-56 $$rounded-box">
  <li><a>Item 1</a></li>
  <li>
    <details open>
      <summary>Parent</summary>
      <ul>
        <li><a>level 2 item 1</a></li>
        <li><a>level 2 item 2</a></li>
        <li>
          <details open>
            <summary>Parent</summary>
            <ul>
              <li><a>level 3 item 1</a></li>
              <li><a>level 3 item 2</a></li>
            </ul>
          </details>
        </li>
      </ul>
    </details>
  </li>
  <li><a>Item 3</a></li>
</ul>`)}</pre>`;
        },
        default: () => {
          return `<ul class="menu bg-base-200 w-56 rounded-box" data-svelte-h="svelte-jnsyim"><li><a>Item 1</a></li> <li><details open><summary>Parent</summary> <ul><li><a>level 2 item 1</a></li> <li><a>level 2 item 2</a></li> <li><details open><summary>Parent</summary> <ul><li><a>level 3 item 1</a></li> <li><a>level 3 item 2</a></li></ul></details></li></ul></details></li> <li><a>Item 3</a></li></ul>`;
        }
      })} ${validate_component(Component, "Component").$$render(
        $$result,
        {
          title: "Collapsible submenu that works with class names",
          desc: "you can open/close the submenu by adding/removing `menu-dropdown-show` class using JS"
        },
        {},
        {
          html: () => {
            return `<pre slot="html">${escape(`<ul class="$$menu bg-base-200 w-56 $$rounded-box">
  <li><a>Item 1</a></li>
  <li>
    <span class="$$menu-dropdown-toggle">Parent</span>
    <ul class="$$menu-dropdown">
      <li><a>level 2 item 1</a></li>
      <li><a>level 2 item 2</a></li>
    </ul>
  </li>
</ul>
<ul class="$$menu bg-base-200 w-56 rounded-box">
  <li><a>Item 1</a></li>
  <li>
    <span class="$$menu-dropdown-toggle $$menu-dropdown-show">Parent</span>
    <ul class="$$menu-dropdown $$menu-dropdown-show">
      <li><a>level 2 item 1</a></li>
      <li><a>level 2 item 2</a></li>
    </ul>
  </li>
</ul>`)}</pre>`;
          },
          default: () => {
            return `<ul class="menu bg-base-200 w-56 rounded-box" data-svelte-h="svelte-184s8x5"><li><a>Item 1</a></li> <li><span class="menu-dropdown-toggle">Parent</span> <ul class="menu-dropdown"><li><a>level 2 item 1</a></li> <li><a>level 2 item 2</a></li></ul></li></ul> <ul class="menu bg-base-200 w-56 rounded-box" data-svelte-h="svelte-spbtdr"><li><a>Item 1</a></li> <li><span class="menu-dropdown-toggle menu-dropdown-show">Parent</span> <ul class="menu-dropdown menu-dropdown-show"><li><a>level 2 item 1</a></li> <li><a>level 2 item 2</a></li></ul></li></ul>`;
          }
        }
      )} ${validate_component(Component, "Component").$$render($$result, { title: "File tree" }, {}, {
        html: () => {
          return `<pre slot="html">${escape(`<ul class="$$menu $$menu-xs bg-base-200 $$rounded-lg max-w-xs w-full">
  <li><a>
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4"><path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" /></svg>
    resume.pdf
  </a></li>
  <li>
    <details open>
      <summary>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z" /></svg>
        My Files
      </summary>
      <ul>
        <li><a>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4"><path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" /></svg>
          Project-final.psd
        </a></li>
        <li><a>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4"><path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" /></svg>
          Project-final-2.psd
        </a></li>
        <li>
          <details open>
            <summary>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z" /></svg>
              Images
            </summary>
            <ul>
              <li><a>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" /></svg>
                Screenshot1.png
              </a></li>
              <li><a>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" /></svg>
                Screenshot2.png
              </a></li>
              <li>
                <details open>
                  <summary>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z" /></svg>
                    Others
                  </summary>
                  <ul>
                    <li><a>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" /></svg>
                      Screenshot3.png
                    </a></li>
                  </ul>
                </details>
              </li>
            </ul>
          </details>
        </li>
      </ul>
    </details>
  </li>
  <li><a>
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4"><path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" /></svg>
    reports-final-2.pdf
  </a></li>
</ul>`)}</pre>`;
        },
        default: () => {
          return `<ul class="menu menu-xs bg-base-200 rounded-lg max-w-xs w-full" data-svelte-h="svelte-sst3ub"><li><a><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4"><path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"></path></svg>
    resume.pdf</a></li> <li><details open><summary><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z"></path></svg>
        My Files</summary> <ul><li><a><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4"><path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"></path></svg>
          Project-final.psd</a></li> <li><a><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4"><path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"></path></svg>
          Project-final-2.psd</a></li> <li><details open><summary><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z"></path></svg>
              Images</summary> <ul><li><a><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"></path></svg>
                Screenshot1.png</a></li> <li><a><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"></path></svg>
                Screenshot2.png</a></li> <li><details open><summary><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z"></path></svg>
                    Others</summary> <ul><li><a><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"></path></svg>
                      Screenshot3.png</a></li></ul></details></li></ul></details></li></ul></details></li> <li><a><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4"><path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"></path></svg>
    reports-final-2.pdf</a></li></ul>`;
        }
      })} ${validate_component(Component, "Component").$$render($$result, { title: "Menu with active item" }, {}, {
        html: () => {
          return `<pre slot="html">${escape(`<ul class="$$menu bg-base-200 w-56">
  <li><a>Item 1</a></li>
  <li><a class="$$active">Item 2</a></li>
  <li><a>Item 3</a></li>
</ul>`)}</pre>`;
        },
        default: () => {
          return `<ul class="menu bg-base-200 w-56 rounded-box" data-svelte-h="svelte-p5aeuy"><li><a>Item 1</a></li> <li><a class="active">Item 2</a></li> <li><a>Item 3</a></li></ul>`;
        }
      })} ${validate_component(Component, "Component").$$render($$result, { title: "Horizontal menu" }, {}, {
        html: () => {
          return `<pre slot="html">${escape(`<ul class="$$menu $$menu-horizontal bg-base-200">
  <li><a>Item 1</a></li>
  <li><a>Item 2</a></li>
  <li><a>Item 3</a></li>
</ul>`)}</pre>`;
        },
        default: () => {
          return `<ul class="menu menu-horizontal bg-base-200 rounded-box" data-svelte-h="svelte-19u7882"><li><a>Item 1</a></li> <li><a>Item 2</a></li> <li><a>Item 3</a></li></ul>`;
        }
      })} ${validate_component(Component, "Component").$$render($$result, { title: "Horizontal submenu" }, {}, {
        html: () => {
          return `<pre slot="html">${escape(`<ul class="$$menu $$menu-horizontal bg-base-200 $$rounded-box">
  <li><a>Item 1</a></li>
  <li>
    <a>Parent</a>
    <ul>
      <li><a>level 2 item 1</a></li>
      <li><a>level 2 item 2</a></li>
    </ul>
  </li>
  <li><a>Item 3</a></li>
</ul>`)}</pre>`;
        },
        default: () => {
          return `<ul class="menu menu-horizontal bg-base-200 rounded-box" data-svelte-h="svelte-9x8bt3"><li><a>Item 1</a></li> <li><a>Parent</a> <ul><li><a>level 2 item 1</a></li> <li><a>level 2 item 2</a></li></ul></li> <li><a>Item 3</a></li></ul>`;
        }
      })} ${validate_component(Component, "Component").$$render(
        $$result,
        {
          title: "Mega menu with submenu (responsive)"
        },
        {},
        {
          html: () => {
            return `<pre slot="html">${escape(`<ul class="$$menu xl:$$menu-horizontal lg:min-w-max bg-base-200 $$rounded-box">
  <li>
    <a>Solutions</a>
    <ul>
      <li><a>Design</a></li>
      <li><a>Development</a></li>
      <li><a>Hosting</a></li>
      <li><a>Domain register</a></li>
    </ul>
  </li>
  <li>
    <a>Enterprise</a>
    <ul>
      <li><a>CRM software</a></li>
      <li><a>Marketing management</a></li>
      <li><a>Security</a></li>
      <li><a>Consulting</a></li>
    </ul>
  </li>
  <li>
    <a>Products</a>
    <ul>
      <li><a>UI Kit</a></li>
      <li><a>Wordpress themes</a></li>
      <li><a>Wordpress plugins</a></li>
      <li>
        <a>Open source</a>
        <ul>
          <li><a>Auth management system</a></li>
          <li><a>VScode theme</a></li>
          <li><a>Color picker app</a></li>
        </ul>
      </li>
    </ul>
  </li>
  <li>
    <a>Company</a>
    <ul>
      <li><a>About us</a></li>
      <li><a>Contact us</a></li>
      <li><a>Privacy policy</a></li>
      <li><a>Press kit</a></li>
    </ul>
  </li>
</ul>`)}</pre>`;
          },
          default: () => {
            return `<ul class="menu xl:menu-horizontal lg:min-w-max bg-base-200 rounded-box" data-svelte-h="svelte-xxaw1g"><li><a>Solutions</a> <ul><li><a>Design</a></li> <li><a>Development</a></li> <li><a>Hosting</a></li> <li><a>Domain register</a></li></ul></li> <li><a>Enterprise</a> <ul><li><a>CRM software</a></li> <li><a>Marketing management</a></li> <li><a>Security</a></li> <li><a>Consulting</a></li></ul></li> <li><a>Products</a> <ul><li><a>UI Kit</a></li> <li><a>Wordpress themes</a></li> <li><a>Wordpress plugins</a></li> <li><a>Open source</a> <ul><li><a>Auth management system</a></li> <li><a>VScode theme</a></li> <li><a>Color picker app</a></li></ul></li></ul></li> <li><a>Company</a> <ul><li><a>About us</a></li> <li><a>Contact us</a></li> <li><a>Privacy policy</a></li> <li><a>Press kit</a></li></ul></li></ul>`;
          }
        }
      )} ${validate_component(Component, "Component").$$render(
        $$result,
        {
          title: "Collapsible with submenu (responsive)"
        },
        {},
        {
          html: () => {
            return `<pre slot="html">${escape(`<ul class="$$menu lg:$$menu-horizontal bg-base-200 $$rounded-box lg:mb-64">
  <li><a>Item 1</a></li>
  <li>
    <details open>
      <summary>Parent item</summary>
      <ul>
        <li><a>level 2 item 1</a></li>
        <li><a>level 2 item 2</a></li>
        <li>
          <details open>
            <summary>Parent</summary>
            <ul>
              <li><a>item 1</a></li>
              <li><a>item 2</a></li>
            </ul>
          </details>
        </li>
      </ul>
    </details>
  </li>
  <li><a>Item 3</a></li>
</ul>`)}</pre>`;
          },
          default: () => {
            return `<ul class="menu lg:menu-horizontal bg-base-200 rounded-box lg:mb-64" data-svelte-h="svelte-smnmgo"><li><a>Item 1</a></li> <li><details open><summary>Parent item</summary> <ul><li><a>level 2 item 1</a></li> <li><a>level 2 item 2</a></li> <li><details open><summary>Parent</summary> <ul><li><a>item 1</a></li> <li><a>item 2</a></li></ul></details></li></ul></details></li> <li><a>Item 3</a></li></ul>`;
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
