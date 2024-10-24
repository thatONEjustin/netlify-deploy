import { c as createComponent, r as renderTemplate, m as maybeRenderHead, a as renderComponent, d as createAstro } from '../chunks/astro/server_CR3YeMnl.mjs';
import 'kleur/colors';
import { $ as $$Base } from '../chunks/base_BRbSZTyB.mjs';
import { $ as $$Slide } from '../chunks/Slide_BbnA74zm.mjs';
/* empty css                                 */
/* empty css                                */
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$Slider = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Slider;
  const { items: slides = [] } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="swiper" x-data="{
    swiperOptions: {
      navigation: {
        enabled: true,
        nextEl: '.justin-next',
        prevEl: '.justin-prev',
      }
    }
  }" x-swiper="swiperOptions"> <div class="swiper-wrapper"> ${slides.map(
    (item) => renderTemplate`${renderComponent($$result, "SwiperSlide", $$Slide, {}, { "default": ($$result2) => renderTemplate` <h2>${item.data.title}</h2> ${item.render().then(({ Content }) => renderTemplate`${renderComponent($$result2, "Content", Content, {})}`)}` })}`
  )} </div> <div class="flex flex-row"> <div class="justin-prev"> <i class="nf nf-cod-arrow_left"></i> </div> <div class="justin-next"> <i class="nf nf-cod-arrow_right"></i> </div> </div> </div> `;
}, "/home/justinprime/github/netlify-deploy/src/components/slider/Slider.astro", void 0);

const $$Work = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$Base, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="container mx-auto w-full"> ${renderComponent($$result2, "Slider", $$Slider, {})} </section> ` })}`;
}, "/home/justinprime/github/netlify-deploy/src/pages/work.astro", void 0);

const $$file = "/home/justinprime/github/netlify-deploy/src/pages/work.astro";
const $$url = "/work";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Work,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
