import { c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead, b as addAttribute } from '../chunks/astro/server_CR3YeMnl.mjs';
import 'kleur/colors';
import moment from 'moment';
import { $ as $$Base } from '../chunks/base_BRbSZTyB.mjs';
import { g as getCollection } from '../chunks/_astro_content_DVuBNsiL.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const posts = (await getCollection("blog")).sort(
    (a, b) => a.data.date.valueOf() - b.data.date.valueOf()
  );
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$Base, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="container mx-auto w-11/12 lg:w-full mt-6"> <div class="max-w-fit px-8 py-6 bg-red-500 text-light flex flex-row items-center mx-auto rounded-md mb-8"> <i class="nf nf-md-wrench"></i> <h4 class="text-light px-4">Under Construction</h4> </div> <ul class="w-full"> ${posts.map((post) => renderTemplate`<li class="border-2 border-dark-100 bg-darker-800 rounded-md border-opacity-15 mb-4"> <a class="flex flex-row justify-between p-2 text-cyan"${addAttribute(`/blog/${post.slug}/`, "href")}> <h3 class="title w-full self-start">${post.data.title}</h3> <p class="date w-full text-right self-end text-green">${moment(post.data.date).format("dddd MMM YYYY")}</p> </a> </li>`)} </ul> </section> ` })}`;
}, "/home/justinprime/github/netlify-deploy/src/pages/blog/index.astro", void 0);

const $$file = "/home/justinprime/github/netlify-deploy/src/pages/blog/index.astro";
const $$url = "/blog";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
