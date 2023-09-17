import { e as error } from "../../../../../chunks/index.js";
import { dirname } from "path";
async function load({ params }) {
  let posts = await Promise.all(
    Object.entries(/* @__PURE__ */ Object.assign({ "../../(posts)/daisyui-colors-and-themes/+page.md": () => import("../../(posts)/daisyui-colors-and-themes/_page.md.js"), "../../(posts)/daisyui-vs-tailwindui/+page.md": () => import("../../(posts)/daisyui-vs-tailwindui/_page.md.js"), "../../(posts)/mary-ui/+page.md": () => import("../../(posts)/mary-ui/_page.md.js"), "../../(posts)/most-common-mistake-when-using-tailwind-css/+page.md": () => import("../../(posts)/most-common-mistake-when-using-tailwind-css/_page.md.js"), "../../(posts)/what-is-daisyui/+page.md": () => import("../../(posts)/what-is-daisyui/_page.md.js") })).map(
      async ([path, resolver]) => {
        const { metadata } = await resolver();
        const slug = dirname(path).split("/").pop();
        if (!metadata.published) {
          return {};
        }
        return {
          slug,
          ...metadata
        };
      }
    )
  );
  posts = posts.filter((item) => {
    if (!item.tags)
      return false;
    let normalizedTags = item.tags.map((item2) => {
      return item2.replace(/ /g, "-").toLowerCase();
    });
    return normalizedTags.includes(params.tag);
  });
  posts = posts.filter((obj) => Object.keys(obj).length !== 0);
  posts = posts.sort((a, b) => new Date(b.date) - new Date(a.date));
  if (posts.length === 0) {
    throw error(404, "Not found");
  }
  return {
    posts
  };
}
export {
  load
};
