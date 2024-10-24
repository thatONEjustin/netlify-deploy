import { c as createComponent, r as renderTemplate, a as renderComponent, d as createAstro, m as maybeRenderHead } from '../../chunks/astro/server_CR3YeMnl.mjs';
import 'kleur/colors';
import { $ as $$Base } from '../../chunks/base_BRbSZTyB.mjs';
import moment from 'moment';
import { g as getCollection } from '../../chunks/_astro_content_DVuBNsiL.mjs';
/* empty css                                     */
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
async function getStaticPaths() {
  const posts = await getCollection("blog");
  return posts.map((post) => ({
    params: { slug: post.slug },
    props: post
  }));
}
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$;
  const post = Astro2.props;
  const { title, date } = Astro2.props.data;
  const { Content } = await post.render();
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$Base, { "data-astro-cid-7jjqptxk": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<article class="w-11/12 lg:w-full container mx-auto mt-4" data-astro-cid-7jjqptxk> <div class="mb-8" data-astro-cid-7jjqptxk> <h1 class="pb-5 border-b border-cyan" data-astro-cid-7jjqptxk>${title}</h1> <h4 class="mt-2 text-right text-green" data-astro-cid-7jjqptxk>${moment(date).format("dddd MM YYYYY")}</h4> </div> ${renderComponent($$result2, "Content", Content, { "data-astro-cid-7jjqptxk": true })} </article> ` })} `;
}, "/home/justinprime/github/netlify-deploy/src/pages/blog/[...slug].astro", void 0);

const $$file = "/home/justinprime/github/netlify-deploy/src/pages/blog/[...slug].astro";
const $$url = "/blog/[...slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
