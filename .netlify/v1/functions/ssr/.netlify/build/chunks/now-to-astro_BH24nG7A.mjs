import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_CR3YeMnl.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<h2 id=\"astro\">Astro!</h2>";

				const frontmatter = {"title":"Now we're on Astro","date":"July 30, 2023","summary":"Okay, we've swapped fully over to astro."};
				const file = "/home/justinprime/github/netlify-deploy/src/content/blog/now-to-astro.md";
				const url = undefined;
				function rawContent() {
					return "## Astro!\n\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":2,"slug":"astro","text":"Astro!"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
