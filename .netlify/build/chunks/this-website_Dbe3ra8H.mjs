import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_CR3YeMnl.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>So this has been a really cool programming exercise as I utilize astro and tailwind to build a site that acts as if it’s dynamic but is being 100% rendered statically through GitHub Pages.</p>\n<p>I’ll need a way to figure out how I’d like to handle images but I think maybe just doing static assets will be fine since I they can be optimized further by astro.</p>";

				const frontmatter = {"title":"My personal site","date":"January 19, 2024"};
				const file = "/home/justinprime/github/netlify-deploy/src/content/projects/this-website.md";
				const url = undefined;
				function rawContent() {
					return "\nSo this has been a really cool programming exercise as I utilize astro and tailwind to build a site that acts as if it's dynamic but is being 100% rendered statically through GitHub Pages. \n\nI'll need a way to figure out how I'd like to handle images but I think maybe just doing static assets will be fine since I they can be optimized further by astro.\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
