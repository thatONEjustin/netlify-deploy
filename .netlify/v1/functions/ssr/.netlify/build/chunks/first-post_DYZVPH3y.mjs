import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_CR3YeMnl.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<h2 id=\"aliquam-sagittis\">Aliquam sagittis</h2>\n<p>In condimentum feugiat posuere. Donec sed ultricies nibh. Aenean at blandit est. Integer ipsum felis, venenatis viverra dolor malesuada, pulvinar viverra nisl. Nam vehicula eleifend posuere. Integer et nunc elementum tellus posuere aliquam ac quis mauris. Nam et erat vitae eros rutrum ullamcorper quis vitae lorem. Aliquam non lacus nec neque iaculis egestas sed eu mauris. Curabitur suscipit ornare urna tempor consectetur. Donec vitae vehicula felis. Cras bibendum diam at feugiat congue. Sed enim tortor, varius eu sagittis ac, dictum ac magna.</p>\n<h2 id=\"tortor-ac-pretium-fermentum\">tortor ac pretium fermentum</h2>\n<p>Nam hendrerit nulla sed arcu fermentum, at hendrerit risus aliquam. Vestibulum sit amet libero pulvinar erat ullamcorper ultrices vitae eget est. Donec est lectus, egestas sit amet odio a, accumsan sagittis tellus. Phasellus rhoncus consectetur lacus ac tincidunt. Nunc vehicula fringilla sem quis sodales. Donec ultricies semper euismod. Nunc sit amet pellentesque dolor. Pellentesque finibus erat nisl, vitae porta neque maximus sit amet.</p>\n<h2 id=\"suspendisse-potenti\">Suspendisse potenti.</h2>\n<p>Vivamus in nisi ac orci vestibulum lobortis. Aliquam nulla libero, vestibulum id risus nec, facilisis ornare felis. Proin nunc arcu, accumsan nec cursus at, finibus eget tortor. Nunc rutrum leo posuere, eleifend ipsum et, ullamcorper mauris. Vivamus consequat placerat libero, vitae egestas est faucibus id. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vitae turpis tristique, elementum tortor vitae, suscipit ipsum. Aliquam erat volutpat. Sed quam tortor, eleifend sit amet augue et, sodales viverra mauris. In consequat lacus ante, non posuere tortor laoreet vitae. Phasellus in congue sapien. Vivamus ut lorem id felis molestie sagittis sit amet eu tellus. Etiam molestie nibh at suscipit blandit.</p>";

				const frontmatter = {"title":"woo! we're live now!","date":"July 2, 2023","summary":"Just a bunch of lorem ipsum because I wanted to test having an article with markdown and then setting up CSS rules for the markdown output."};
				const file = "/home/justinprime/github/netlify-deploy/src/content/blog/first-post.md";
				const url = undefined;
				function rawContent() {
					return "## Aliquam sagittis\nIn condimentum feugiat posuere. Donec sed ultricies nibh. Aenean at blandit est. Integer ipsum felis, venenatis viverra dolor malesuada, pulvinar viverra nisl. Nam vehicula eleifend posuere. Integer et nunc elementum tellus posuere aliquam ac quis mauris. Nam et erat vitae eros rutrum ullamcorper quis vitae lorem. Aliquam non lacus nec neque iaculis egestas sed eu mauris. Curabitur suscipit ornare urna tempor consectetur. Donec vitae vehicula felis. Cras bibendum diam at feugiat congue. Sed enim tortor, varius eu sagittis ac, dictum ac magna.\n\n## tortor ac pretium fermentum\nNam hendrerit nulla sed arcu fermentum, at hendrerit risus aliquam. Vestibulum sit amet libero pulvinar erat ullamcorper ultrices vitae eget est. Donec est lectus, egestas sit amet odio a, accumsan sagittis tellus. Phasellus rhoncus consectetur lacus ac tincidunt. Nunc vehicula fringilla sem quis sodales. Donec ultricies semper euismod. Nunc sit amet pellentesque dolor. Pellentesque finibus erat nisl, vitae porta neque maximus sit amet.\n\n## Suspendisse potenti.\nVivamus in nisi ac orci vestibulum lobortis. Aliquam nulla libero, vestibulum id risus nec, facilisis ornare felis. Proin nunc arcu, accumsan nec cursus at, finibus eget tortor. Nunc rutrum leo posuere, eleifend ipsum et, ullamcorper mauris. Vivamus consequat placerat libero, vitae egestas est faucibus id. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vitae turpis tristique, elementum tortor vitae, suscipit ipsum. Aliquam erat volutpat. Sed quam tortor, eleifend sit amet augue et, sodales viverra mauris. In consequat lacus ante, non posuere tortor laoreet vitae. Phasellus in congue sapien. Vivamus ut lorem id felis molestie sagittis sit amet eu tellus. Etiam molestie nibh at suscipit blandit. ";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":2,"slug":"aliquam-sagittis","text":"Aliquam sagittis"},{"depth":2,"slug":"tortor-ac-pretium-fermentum","text":"tortor ac pretium fermentum"},{"depth":2,"slug":"suspendisse-potenti","text":"Suspendisse potenti."}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
