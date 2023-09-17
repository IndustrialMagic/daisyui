import * as server from '../entries/pages/(docs)/components/_page.server.js';

export const index = 6;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/(docs)/components/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/(docs)/components/+page.server.js";
export const imports = ["_app/immutable/nodes/6.eb8ff91d.js","_app/immutable/chunks/scheduler.cc1ce551.js","_app/immutable/chunks/index.ffedd617.js","_app/immutable/chunks/each.e59479a4.js","_app/immutable/chunks/stores.a46eee4e.js","_app/immutable/chunks/singletons.98825737.js","_app/immutable/chunks/index.3e418aa1.js","_app/immutable/chunks/SEO.800680f2.js","_app/immutable/chunks/i18n.24cc095c.js","_app/immutable/chunks/Translate.73e047c1.js","_app/immutable/chunks/Ads.450358cd.js"];
export const stylesheets = ["_app/immutable/assets/Ads.8aacc2b2.css"];
export const fonts = [];
