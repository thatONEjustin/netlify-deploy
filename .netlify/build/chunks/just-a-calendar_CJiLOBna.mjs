import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_CR3YeMnl.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>Just a calendar widget I’m building. I’ll have an import soon enough.</p>";

				const frontmatter = {"title":"Just A Calendar","date":"December 19, 2023"};
				const file = "/home/justinprime/github/netlify-deploy/src/content/projects/just-a-calendar.md";
				const url = undefined;
				function rawContent() {
					return "\nJust a calendar widget I'm building. I'll have an import soon enough.\n";
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
