import { c as createComponent, r as renderTemplate, b as addAttribute, d as createAstro, m as maybeRenderHead, a as renderComponent, i as createTransitionScope, j as renderHead, k as renderTransition, h as renderSlot } from './astro/server_CR3YeMnl.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                          */
import moment from 'moment';

const $$Astro$3 = createAstro();
const $$ViewTransitions = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$ViewTransitions;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>`;
}, "/home/justinprime/github/netlify-deploy/node_modules/astro/components/ViewTransitions.astro", void 0);

const favicon = "/_astro/favicon.BBQkU1S7.ico";

const $$Astro$2 = createAstro();
const $$MenuItem = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$MenuItem;
  const { item } = Astro2.props;
  const { href } = item;
  const active = (url_test) => {
    return url_test == Astro2.url.pathname ? "active" : "";
  };
  return renderTemplate` ${maybeRenderHead()}<li data-astro-cid-3lltiirq> ${item.scrollTo == null ? renderTemplate`<a${addAttribute(href, "href")}${addAttribute(`menu-item ${active(href)}`, "class")} data-astro-cid-3lltiirq> <i${addAttribute(`text-lg nf ${item.icon} pr-1`, "class")} data-astro-cid-3lltiirq></i> ${item.label} </a>` : renderTemplate`<a${addAttribute(item.scrollTo, "data-scroll")}${addAttribute(href, "href")} class="cursor-pointer menu-item scrollTo" data-astro-cid-3lltiirq> <i${addAttribute(`text-lg nf ${item.icon} pr-1`, "class")} data-astro-cid-3lltiirq></i> ${item.label} </a>`} </li> `;
}, "/home/justinprime/github/netlify-deploy/src/components/menu/MenuItem.astro", void 0);

const $$Astro$1 = createAstro();
const $$Menu = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Menu;
  const { items } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<ul class="flex flex-row items-start py-4 md:py-0"> ${items.map((item) => renderTemplate`${renderComponent($$result, "MenuItem", $$MenuItem, { "item": item })}`)} <!--
  <li>
    <ToggleMode />
  </li>
  --> </ul>`;
}, "/home/justinprime/github/netlify-deploy/src/components/menu/Menu.astro", void 0);

const menu_data = [
  {
    label: "home",
    href: "#",
    icon: "nf-custom-home",
    scrollTo: "top"
  },
  {
    label: "about",
    href: "#about-me",
    icon: "nf-dev-terminal",
    scrollTo: "about-me"
  },
  {
    label: "skills",
    href: "#skills",
    icon: "nf-md-keyboard",
    scrollTo: "skills"
  }
  // {
  //   'label': 'blog',
  //   'href': '/blog',
  //   'icon': 'nf-md-pen'
  // },
];

const $$Header = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<header class="xl:sticky xl:top-0 z-50" data-astro-cid-eyihteuk> <div class="fancy-border bg-black" data-astro-cid-eyihteuk> <div class="container mx-auto w-11/12 md:w-full flex flex-col sm:flex-row justify-between items-center py-3" data-astro-cid-eyihteuk> <a href="/" class="text-3xl flex items-baseline no-underline" data-astro-cid-eyihteuk> <i class="text-3xl sm:text-4xl nf nf-dev-terminal text-pink mr-2" data-astro-cid-eyihteuk></i> <h1 data-astro-cid-eyihteuk>i'm justin&nbsp;<div class="text-cullen-300 min-w-fit" data-astro-cid-eyihteuk>a full stack developer</div></h1> <span class="sr-only" data-astro-cid-eyihteuk>I'm Justin Paelmo, full stack developer</span> </a> ${renderComponent($$result, "Menu", $$Menu, { "items": menu_data, "data-astro-cid-eyihteuk": true, "data-astro-transition-persist": createTransitionScope($$result, "ltf5rply") })} </div> </div> </header> `;
}, "/home/justinprime/github/netlify-deploy/src/layouts/header.astro", "self");

const tech_stacks = [
  {
    tagline: "built from",
    url: "https://astro.build/",
    label: "astro",
    icon: "nf-custom-astro",
    text_color: "text-pink"
  },
  {
    tagline: "styled with",
    url: "https://tailwindcss.com/",
    label: "tailwindcss",
    icon: "nf-md-tailwind",
    text_color: "text-cyan"
  },
  {
    tagline: "hosted on",
    url: "https://pages.github.com/",
    label: "GitHub Pages",
    icon: "nf-cod-github_action",
    text_color: "text-light"
  }
];

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<footer class="bg-darker-800 mt-8 lg:mt-0 relative lg:fixed lg:top-full lg:-translate-y-full w-full py-2 lg:py-0"> <div class="relative container w-11/12 lg:w-full mx-auto flex flex-row items-center justify-between"> <ul class="flex flex-col lg:flex-row py-1"> ${tech_stacks.map((technology, _index) => renderTemplate`<li class="mr-2 last:mr-0"> ${technology.tagline != "" && renderTemplate`<span class="font-normal text-yellow">${technology.tagline}</span>`} <a${addAttribute(technology.url, "href")} target="_blank"${addAttribute(`${technology.text_color} font-semibold no-underline`, "class")}> ${technology.icon && renderTemplate`<i${addAttribute(`nf ${technology.icon} ${technology.text_color}`, "class")}></i>`} ${technology.label} </a> </li>`)} </ul> <div class="copyright"> <p class="font-semibold text-darker-300 text-sm italic"><span class="font-normal">copyright</span> ${moment().year()}</p> </div> </div> </footer>`;
}, "/home/justinprime/github/netlify-deploy/src/layouts/footer.astro", void 0);

const $$GoTop = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div x-data="{
    show: false,
    top: null,
    scrollPast: null,
    options: { behavior: 'smooth', block: 'start' },
    init() {
      this.top = document.getElementById('top')
    }
  }" @click="top.scrollIntoView(options)" x-show="show" x-transition class="fixed bottom-4 right-6 cursor-pointer z-50 bg-dark-800 px-1 py-0 rounded-full"> <template x-teleport="#top"> <div id="scrollTarget" x-intersect:enter="show = false" x-intersect:leave="show = true"></div> </template> <i class="nf nf-fa-arrow_circle_up text-light text-2xl"></i> </div>`;
}, "/home/justinprime/github/netlify-deploy/src/components/go-top.astro", void 0);

const $$Astro = createAstro();
const $$Base = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Base;
  const { title = "justin, a dev" } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><meta charset="utf-8"><link rel="icon" type="image/svg+xml"${addAttribute(favicon, "href")}><meta name="viewport" content="width=device-width"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title} | astro'd out</title>${renderComponent($$result, "ViewTransitions", $$ViewTransitions, {})}${renderHead()}</head> <body> <span id="top"></span> ${renderComponent($$result, "Header", $$Header, {})} <main${addAttribute(renderTransition($$result, "pbfzxgif"), "data-astro-transition-scope")}> ${renderSlot($$result, $$slots["default"])} </main> ${renderComponent($$result, "GoTop", $$GoTop, {})} ${renderComponent($$result, "Footer", $$Footer, {})} </body></html>`;
}, "/home/justinprime/github/netlify-deploy/src/layouts/base.astro", "self");

export { $$Base as $ };
