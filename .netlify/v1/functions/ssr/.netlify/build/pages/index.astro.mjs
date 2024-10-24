import { c as createComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute, h as renderSlot, d as createAstro, a as renderComponent } from '../chunks/astro/server_CR3YeMnl.mjs';
import 'kleur/colors';
import '@astrojs/internal-helpers/path';
import { $ as $$Image } from '../chunks/_astro_assets_vN4zXHSn.mjs';
import { $ as $$Base } from '../chunks/base_BRbSZTyB.mjs';
import 'clsx';
/* empty css                                 */
import { $ as $$Slide } from '../chunks/Slide_BbnA74zm.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Astro$2 = createAstro();
const $$PillButton = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$PillButton;
  const { url: href = "#", target, class: className } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(className, "class")}${addAttribute(href, "href")}${addAttribute(target, "target")} data-astro-cid-amtpk5hj> ${renderSlot($$result, $$slots["default"], renderTemplate`Button Text`)} </a> `;
}, "/home/justinprime/github/netlify-deploy/src/components/pill-button.astro", void 0);

const $$Astro$1 = createAstro();
const $$NerdfontIcon = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$NerdfontIcon;
  const { icon, classes = "" } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<i${addAttribute(`nf ${icon} ${classes}`, "class")}> ${renderSlot($$result, $$slots["default"])} </i>`;
}, "/home/justinprime/github/netlify-deploy/src/components/nerdfont-icon.astro", void 0);

const social_media = [
  {
    label: "github",
    url: "https://github.com/thatONEjustin",
    icon: "nf-dev-github",
    classes: "text-light"
  },
  {
    label: "linkedin",
    url: "https://www.linkedin.com/in/justinlikescode/",
    icon: "nf-md-linkedin",
    classes: "text-cyan"
  }
];

const $$SocialMediaList = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<ul class="flex flex-row"> ${social_media.map(
    (item) => renderTemplate`<li class="mr-4 last:mr-0 text-4xl"> <a${addAttribute(item.url, "href")} target="_blank" class="no-underline"> <i${addAttribute(`nf ${item.icon} ${item.classes}`, "class")}></i> <span class="sr-only">${item.label}</span> </a> </li>`
  )} </ul>`;
}, "/home/justinprime/github/netlify-deploy/src/components/social-media-list.astro", void 0);

const $$Astro = createAstro();
const $$Bar = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Bar;
  const { icon, color, experience, label } = Astro2.props.skill;
  const max_years = 25;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(`skill-bar ${color}`, "class")}> <div class="skill-bar-label"> <i${addAttribute(`skill-bar-icon ${icon}`, "class")}></i> <h4${addAttribute(`text-xl`, "class")}>${label}</h4> </div> <div class="flex flex-row items-center"> <div${addAttribute(`skill-bar-bar`, "class")}${addAttribute(`width: ${experience.years / max_years * 100}%;`, "style")}> <p${addAttribute(`skill-bar-experience`, "class")}>${experience.years}${experience.moreThan && "+"} year${experience.years > 1 && "s"}</p> </div> <span class="skill-bar-endcap"></span> </div> </div>`;
}, "/home/justinprime/github/netlify-deploy/src/components/skills/bar.astro", void 0);

const skills_data = [
  {
    "label": "javascript (vanilla)",
    "icon": "nf-dev-javascript_badge",
    "color": "yellow",
    "experience": {
      "years": 20,
      "moreThan": true
    },
    "categories": [
      "all",
      "front-end",
      "back-end"
    ]
  },
  {
    "label": "bootstrap",
    "icon": "nf-md-bootstrap",
    "color": "purple",
    "experience": {
      "years": 10,
      "moreThan": true
    },
    "categories": [
      "front-end"
    ]
  },
  {
    "label": "php",
    "icon": "nf-md-language_php",
    "color": "purple",
    "experience": {
      "years": 15,
      "moreThan": true
    },
    "categories": [
      "back-end"
    ]
  },
  {
    "label": "css",
    "icon": "nf-dev-css3",
    "color": "blue",
    "experience": {
      "years": 15,
      "moreThan": true
    },
    "categories": [
      "front-end"
    ]
  },
  {
    "label": "twig",
    "icon": "nf-seti-twig",
    "color": "green",
    "experience": {
      "years": 6,
      "moreThan": false
    },
    "categories": [
      "front-end"
    ]
  },
  {
    "label": "laravel",
    "icon": "nf-fa-laravel",
    "color": "red",
    "experience": {
      "years": 5,
      "moreThan": true
    },
    "categories": [
      "front-end",
      "back-end"
    ]
  },
  {
    "label": "bash",
    "icon": "nf-md-bash",
    "color": "green",
    "experience": {
      "years": 3,
      "moreThan": false
    },
    "categories": [
      "back-end"
    ]
  },
  {
    "label": "TypeScript",
    "icon": "nf-md-language_typescript",
    "color": "blue",
    "experience": {
      "years": 4,
      "moreThan": true
    },
    "categories": [
      "front-end",
      "back-end"
    ]
  },
  {
    "label": "sass",
    "icon": "nf-dev-sass",
    "color": "pink",
    "experience": {
      "years": 5,
      "moreThan": true
    },
    "categories": [
      "front-end"
    ]
  },
  {
    "label": "lua",
    "icon": "nf-md-language_lua",
    "color": "pink",
    "experience": {
      "years": 3,
      "moreThan": true
    },
    "categories": [
      "back-end"
    ]
  },
  {
    "label": "rust",
    "icon": "nf-dev-rust",
    "color": "red",
    "experience": {
      "years": 1,
      "moreThan": false
    },
    "categories": [
      "back-end"
    ]
  },
  {
    "label": "tailwindcss",
    "icon": "nf-md-tailwind",
    "color": "blue",
    "experience": {
      "years": 5,
      "moreThan": true
    },
    "categories": [
      "front-end"
    ]
  }
];

const $$List = createComponent(($$result, $$props, $$slots) => {
  const skill_categories = [...new Set(skills_data.map((skill) => skill.categories.find((item) => item != "all")).flat(1))];
  return renderTemplate` ${maybeRenderHead()}<div class="skills"> <ul class="skills-list"> ${skill_categories.map((skillset, index) => renderTemplate`<li${addAttribute(`mr-4 last-of-type:mr-0 cursor-pointer text-dark-100 px-2 transition-all skills-list-category`, "class")}${addAttribute(`${index}`, "id")}> ${skillset} </li>`)} </ul> <div class="skill-swiper overflow-hidden"> <div class="swiper-wrapper w-full"> ${skill_categories.map((skillset) => renderTemplate`${renderComponent($$result, "SwiperSlide", $$Slide, { "id": `${skillset}`, "class": "w-full" }, { "default": ($$result2) => renderTemplate`  ${skills_data.filter((skill) => skill.categories.find((item) => item === skillset)).map((displaySkill) => renderTemplate`${renderComponent($$result2, "SkillBar", $$Bar, { "skill": displaySkill })}`)}` })}`)} </div> </div> </div>`;
}, "/home/justinprime/github/netlify-deploy/src/components/skills/list.astro", void 0);

const resume = "/resume.pdf";

const me = new Proxy({"src":"/_astro/me.Cb_qjhmF.jpeg","width":1440,"height":1406,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/justinprime/github/netlify-deploy/src/img/me.jpeg";
							}
							
							return target[name];
						}
					});

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$Base, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section id="intro" class="py-10 relative border-b border-b-purple border-opacity-10 overflow-hidden"> <div class="justin-container"> <h2 class="text-6xl font-belanosima text-center text-cyan py-12">Let's work <span class="text-yellow">together!</span></h2> <div class="flex flex-col md:flex-row z-20 py-8 items-center"> <div class="order-2 md:order-1"> <h2 class="text-yellow border-b border-yellow lg:mb-2">here's a short introduction</h2> <p class="text-dark-600 text-3xl leading-relaxed">I'm a huge nerd about ${renderComponent($$result2, "NerdfontIcon", $$NerdfontIcon, { "classes": "text-cyan", "icon": "nf-md-web" })} <span class="text-cyan">web development,</span> ${renderComponent($$result2, "NerdfontIcon", $$NerdfontIcon, { "classes": "text-light", "icon": "nf-dev-terminal" })} <span class="text-light">tooling,</span> ${renderComponent($$result2, "NerdfontIcon", $$NerdfontIcon, { "classes": "text-green", "icon": "nf-md-git" })} <span class="text-green">CI/CD,</span> and ${renderComponent($$result2, "NerdfontIcon", $$NerdfontIcon, { "classes": "text-orange", "icon": "nf-md-remote_desktop" })} <span class="text-orange">server administration</span>. <span class="font-semibold fancy-border fancy-text italic">I thrive</span> when working with tight knit teams on finding elegant solutions for any full stack deployment.</p> <p class="text-dark-200 text-xl leading-relaxed mt-3">
i use ${renderComponent($$result2, "NerdfontIcon", $$NerdfontIcon, { "icon": "nf-md-arch", "classes": "text-cyan" })}<span class="relative -left-2 text-cyan">rch</span>btw.
</p> </div> ${renderComponent($$result2, "Image", $$Image, { "src": me, "alt": "Hi! I'm Justin Paelmo!", "class": "order-1 z-40 md:order-2 mx-auto md:mx-unset h-full w-auto rounded-full max-w-xs mb-8 md:mb-0 md:ml-12 border border-yellow" })} </div> <div class="flex flex-row gap-x-3 pt-8 justify-center text-xl"> ${renderComponent($$result2, "PillButton", $$PillButton, { "class": "text-3xl green", "url": "/resume.pdf", "target": "_blank" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "NerdfontIcon", $$NerdfontIcon, { "icon": "nf-md-file_document" })} resume
` })} </div> </div> </section> <section id="about-me"> <div class="justin-container"> <h2 class="text-yellow text-center mb-2">about me &amp; work history</h2> <div class="about-timeframe"> <h3 class="text-pink">2009 - 2016</h3> <h4><a class="text-cyan no-underline" href="https://advantageservices.net" target="_blank">AdvantageServices</a></h4> </div> <p>I started professional web development in 2009 back in the SFTP, jQuery, and early PHP days. I worked at a small b2b agency that handled dozens of clients on a regular basis handling every portion of the stack.</p> <p>During this time I had already picked up working in a lot of LEGACY web technologies. My first few frameworks were Wordpress and Drupal respectively. Eventually I really got a taste of backend UI development through a combination of ColdFusion/ActionScript and XML parsing.</p> <p>I built control panel UI/UX frameworks for every use case in several global scale niche hiring firms <a${addAttribute(resume, "href")}>(ask me about it!)</a>.</p> <div class="about-timeframe mt-8"> <h3 class="text-pink">2016 - now</h3> <h4><a class="text-cyan no-underline" href="https://wojodesign.com" target="_blank">WojoDesign</a></h4> </div> <p>This was a big move for me both in going from Florida to Chicago, and finally moving towards more modern tech stacks in web development.</p> <p>I wrote my first JS to mobile application for a client, that involved allowing users to purchase native in-app subscriptions for both the apple AppStore and google's Play Store.</p> <p>About 2016 - 2018 was a lot of me learning tools like yarn, npm, node, liquid/handlebars. I also started delving into more backend CMS development.</p> <p>This was also the time period where I really leaned into more systems administration and automation workflows.</p> <p>From 2018 onwards I put a bigger focus on deepening my relationship with programming and web development.</p> <p>I continue to build and/or integrate user management systems and login front ends. I also developed a few internal plugins for the Craft CMS platform.</p> <p>I've been incorporating more and more workflows that involve CI/CD practices for code deployment and environment management.</p> </div> </section> <section id="skills"> <div class="justin-container"> <h2 class="text-center text-yellow">skillset</h2> ${renderComponent($$result2, "SkillsLists", $$List, {})} </div> </section> <section id="social" class="bg-dark-700 mix-blend-multiply py-8"> <div class="justin-container flex flex-col items-center justify-center"> <h2 class="text-darker-50">social media</h2> ${renderComponent($$result2, "SocialMediaList", $$SocialMediaList, {})} </div> </section> ` })} `;
}, "/home/justinprime/github/netlify-deploy/src/pages/index.astro", void 0);

const $$file = "/home/justinprime/github/netlify-deploy/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
