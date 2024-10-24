import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_CR3YeMnl.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<h2 id=\"just-another-flip-flop\">Just another flip flop</h2>\n<p>So I’m back to Jekyll because I wanted to get some forward progress on actually creating a useful site for both myself professionally and for others looking for solutions to common problems.</p>\n<h2 id=\"ran-into-some-issues-with-wsl\">Ran into some issues with WSL</h2>\n<p>If you’re on windows 11 don’t assume that ~/.bashrc is the right file to edit for the default Ubuntu bash setup. You want to edit ~/.profile changing ~/.bashrc will cause WSL’s Ubuntu to hard crash when launching.</p>";

				const frontmatter = {"title":"back to Jekyll!","date":"July 03, 2023","summary":"We go around and around but sometimes you gotta get off the ride and pay"};
				const file = "/home/justinprime/github/netlify-deploy/src/content/blog/back-to-jekyll.md";
				const url = undefined;
				function rawContent() {
					return "## Just another flip flop\nSo I'm back to Jekyll because I wanted to get some forward progress on actually creating a useful site for both myself professionally and for others looking for solutions to common problems. \n\n## Ran into some issues with WSL\nIf you're on windows 11 don't assume that ~/.bashrc is the right file to edit for the default Ubuntu bash setup. You want to edit ~/.profile changing ~/.bashrc will cause WSL's Ubuntu to hard crash when launching. ";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":2,"slug":"just-another-flip-flop","text":"Just another flip flop"},{"depth":2,"slug":"ran-into-some-issues-with-wsl","text":"Ran into some issues with WSL"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
