import { c as createComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute, h as renderSlot, d as createAstro } from './astro/server_CR3YeMnl.mjs';
import 'kleur/colors';
import 'clsx';

const $$Astro = createAstro();
const $$Slide = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Slide;
  const { id, class: className } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(`swiper-slide ${className}`, "class")}${addAttribute(id, "id")}> ${renderSlot($$result, $$slots["default"])} </div>`;
}, "/home/justinprime/github/netlify-deploy/src/components/slider/Slide.astro", void 0);

export { $$Slide as $ };
