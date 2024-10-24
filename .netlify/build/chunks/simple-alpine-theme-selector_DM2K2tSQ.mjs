import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_CR3YeMnl.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<h2 id=\"this-is-out-of-date-ill-be-updating-things-as-i-move-forward\">This is out of date, I’ll be updating things as I move forward</h2>\n<h2 id=\"okay-so-instead-of-1-color-scheme-i-built-a-theme-selector\">Okay so instead of 1 color scheme, I built a theme selector</h2>\n<p>The code will be below. For now this is just a really really really basic example of swapping classes in and out. I think with how I wrote the components, I’ll assign elements to the schema in a more efficient way. I just wanted progress for now.</p>\n<p>here’s some HTML:</p>\n<pre class=\"astro-code github-dark\" style=\"background-color:#24292e;color:#e1e4e8; overflow-x: auto;\" tabindex=\"0\" data-language=\"html\"><code><span class=\"line\"><span style=\"color:#E1E4E8\">&#x3C;</span><span style=\"color:#85E89D\">body</span><span style=\"color:#B392F0\"> x-data</span><span style=\"color:#E1E4E8\">=</span><span style=\"color:#9ECBFF\">\"Themes\"</span><span style=\"color:#E1E4E8\">></span></span>\n<span class=\"line\"><span style=\"color:#E1E4E8\">\t&#x3C;</span><span style=\"color:#85E89D\">main</span><span style=\"color:#E1E4E8\">></span></span>\n<span class=\"line\"><span style=\"color:#E1E4E8\">\t\t{% raw %}</span></span>\n<span class=\"line\"><span style=\"color:#E1E4E8\">\t\t{% include header.html %} </span><span style=\"color:#6A737D\">&#x3C;!-- this is jekyll/liquid --></span></span>\n<span class=\"line\"><span style=\"color:#E1E4E8\">\t\t{% endraw %}</span></span>\n<span class=\"line\"><span style=\"color:#E1E4E8\">\t\t&#x3C;</span><span style=\"color:#85E89D\">section</span></span>\n<span class=\"line\"><span style=\"color:#B392F0\">\t\t\tclass</span><span style=\"color:#E1E4E8\">=</span><span style=\"color:#9ECBFF\">\"Content Content--bubbles p-5\"</span></span>\n<span class=\"line\"><span style=\"color:#B392F0\">\t\t\t:class</span><span style=\"color:#E1E4E8\">=</span><span style=\"color:#9ECBFF\">\"baseThemeClass\"</span><span style=\"color:#E1E4E8\">></span></span>\n<span class=\"line\"><span style=\"color:#E1E4E8\">\t\t\t{% raw %}</span></span>\n<span class=\"line\"><span style=\"color:#E1E4E8\">\t\t\t{{ content }} </span><span style=\"color:#6A737D\">&#x3C;!-- this is jekyll/liquid --></span></span>\n<span class=\"line\"><span style=\"color:#E1E4E8\">\t\t\t{% endraw %}</span></span>\n<span class=\"line\"><span style=\"color:#E1E4E8\">\t\t&#x3C;/</span><span style=\"color:#85E89D\">section</span><span style=\"color:#E1E4E8\">></span></span>\n<span class=\"line\"><span style=\"color:#E1E4E8\">\t&#x3C;/</span><span style=\"color:#85E89D\">main</span><span style=\"color:#E1E4E8\">></span></span>\n<span class=\"line\"><span style=\"color:#E1E4E8\">\t{% raw %}</span></span>\n<span class=\"line\"><span style=\"color:#E1E4E8\">\t{% include footer.html %} </span><span style=\"color:#6A737D\">&#x3C;!-- this is jekyll/liquid --></span></span>\n<span class=\"line\"></span>\n<span class=\"line\"><span style=\"color:#E1E4E8\">\t&#x3C;</span><span style=\"color:#85E89D\">script</span><span style=\"color:#B392F0\"> defer</span><span style=\"color:#B392F0\"> src</span><span style=\"color:#E1E4E8\">=</span><span style=\"color:#9ECBFF\">\"{{ \"</span><span style=\"color:#FDAEB7;font-style:italic\">/assets/js/app.js\"</span><span style=\"color:#B392F0\"> |</span><span style=\"color:#B392F0\"> relative_url</span><span style=\"color:#B392F0\"> }}</span><span style=\"color:#FDAEB7;font-style:italic\">\"</span><span style=\"color:#E1E4E8\">>&#x3C;/</span><span style=\"color:#85E89D\">script</span><span style=\"color:#E1E4E8\">></span></span>\n<span class=\"line\"><span style=\"color:#E1E4E8\">\t{% endraw %}</span></span>\n<span class=\"line\"><span style=\"color:#E1E4E8\">&#x3C;/</span><span style=\"color:#85E89D\">body</span><span style=\"color:#E1E4E8\">></span></span>\n<span class=\"line\"></span></code></pre>\n<p>inside footer.html:</p>\n<pre class=\"astro-code github-dark\" style=\"background-color:#24292e;color:#e1e4e8; overflow-x: auto;\" tabindex=\"0\" data-language=\"html\"><code><span class=\"line\"><span style=\"color:#E1E4E8\">{% raw %}</span></span>\n<span class=\"line\"><span style=\"color:#E1E4E8\">&#x3C;</span><span style=\"color:#85E89D\">ul</span><span style=\"color:#B392F0\"> class</span><span style=\"color:#E1E4E8\">=</span><span style=\"color:#9ECBFF\">\"ThemeSelector\"</span><span style=\"color:#E1E4E8\">></span></span>\n<span class=\"line\"><span style=\"color:#E1E4E8\">\t&#x3C;</span><span style=\"color:#85E89D\">li</span><span style=\"color:#B392F0\"> class</span><span style=\"color:#E1E4E8\">=</span><span style=\"color:#9ECBFF\">\"ThemeSelector-label\"</span><span style=\"color:#E1E4E8\">>theme: &#x3C;/</span><span style=\"color:#85E89D\">li</span><span style=\"color:#E1E4E8\">></span></span>\n<span class=\"line\"></span>\n<span class=\"line\"><span style=\"color:#E1E4E8\">\t&#x3C;</span><span style=\"color:#85E89D\">template</span><span style=\"color:#B392F0\"> x-for</span><span style=\"color:#E1E4E8\">=</span><span style=\"color:#9ECBFF\">\"choice in themeChoices\"</span><span style=\"color:#E1E4E8\">></span></span>\n<span class=\"line\"><span style=\"color:#E1E4E8\">\t&#x3C;</span><span style=\"color:#85E89D\">li</span><span style=\"color:#E1E4E8\">></span></span>\n<span class=\"line\"><span style=\"color:#E1E4E8\">\t\t&#x3C;</span><span style=\"color:#85E89D\">a</span></span>\n<span class=\"line\"><span style=\"color:#B392F0\">\t\t\tclass</span><span style=\"color:#E1E4E8\">=</span><span style=\"color:#9ECBFF\">\"ThemeSelector-choice\"</span></span>\n<span class=\"line\"><span style=\"color:#B392F0\">\t\t\t@click.prevent</span><span style=\"color:#E1E4E8\">=</span><span style=\"color:#9ECBFF\">\"choose(choice)\"</span></span>\n<span class=\"line\"><span style=\"color:#B392F0\">\t\t\t:data-theme</span><span style=\"color:#E1E4E8\">=</span><span style=\"color:#9ECBFF\">\"`${choice}`\"</span></span>\n<span class=\"line\"><span style=\"color:#B392F0\">\t\t\t:class</span><span style=\"color:#E1E4E8\">=</span><span style=\"color:#9ECBFF\">\"choicePreview(choice)\"</span><span style=\"color:#E1E4E8\">>&#x3C;/</span><span style=\"color:#85E89D\">a</span><span style=\"color:#E1E4E8\">></span></span>\n<span class=\"line\"><span style=\"color:#E1E4E8\">\t&#x3C;/</span><span style=\"color:#85E89D\">li</span><span style=\"color:#E1E4E8\">></span></span>\n<span class=\"line\"><span style=\"color:#E1E4E8\">\t&#x3C;/</span><span style=\"color:#85E89D\">template</span><span style=\"color:#E1E4E8\">></span></span>\n<span class=\"line\"><span style=\"color:#E1E4E8\">&#x3C;/</span><span style=\"color:#85E89D\">ul</span><span style=\"color:#E1E4E8\">></span></span>\n<span class=\"line\"><span style=\"color:#E1E4E8\">{% endraw %}</span></span>\n<span class=\"line\"></span></code></pre>\n<p>Here’s some alpine:</p>\n<pre class=\"astro-code github-dark\" style=\"background-color:#24292e;color:#e1e4e8; overflow-x: auto;\" tabindex=\"0\" data-language=\"js\"><code><span class=\"line\"><span style=\"color:#E1E4E8\">{</span><span style=\"color:#F97583\">%</span><span style=\"color:#E1E4E8\"> raw </span><span style=\"color:#F97583\">%</span><span style=\"color:#E1E4E8\">}</span></span>\n<span class=\"line\"><span style=\"color:#F97583\">export</span><span style=\"color:#F97583\"> default</span><span style=\"color:#F97583\"> function</span><span style=\"color:#B392F0\"> Themes</span><span style=\"color:#E1E4E8\">() {</span></span>\n<span class=\"line\"><span style=\"color:#F97583\">    return</span><span style=\"color:#E1E4E8\"> {</span></span>\n<span class=\"line\"><span style=\"color:#E1E4E8\">        themeChoices: [</span><span style=\"color:#9ECBFF\">'default'</span><span style=\"color:#E1E4E8\">, </span><span style=\"color:#9ECBFF\">'neon'</span><span style=\"color:#E1E4E8\">],</span></span>\n<span class=\"line\"><span style=\"color:#E1E4E8\">        current: </span><span style=\"color:#9ECBFF\">'default'</span><span style=\"color:#E1E4E8\">,</span></span>\n<span class=\"line\"></span>\n<span class=\"line\"><span style=\"color:#B392F0\">        choose</span><span style=\"color:#E1E4E8\">(</span><span style=\"color:#FFAB70\">choice</span><span style=\"color:#E1E4E8\">) {</span></span>\n<span class=\"line\"><span style=\"color:#79B8FF\">            this</span><span style=\"color:#E1E4E8\">.current </span><span style=\"color:#F97583\">=</span><span style=\"color:#E1E4E8\"> choice;</span></span>\n<span class=\"line\"><span style=\"color:#E1E4E8\">        },</span></span>\n<span class=\"line\"><span style=\"color:#E1E4E8\">  </span></span>\n<span class=\"line\"><span style=\"color:#B392F0\">        baseThemeClass</span><span style=\"color:#E1E4E8\">() {</span></span>\n<span class=\"line\"><span style=\"color:#F97583\">            return</span><span style=\"color:#E1E4E8\"> {</span></span>\n<span class=\"line\"><span style=\"color:#9ECBFF\">                'Content--dark'</span><span style=\"color:#E1E4E8\"> : </span><span style=\"color:#79B8FF\">this</span><span style=\"color:#E1E4E8\">.current </span><span style=\"color:#F97583\">==</span><span style=\"color:#9ECBFF\"> 'default'</span><span style=\"color:#E1E4E8\">,</span></span>\n<span class=\"line\"><span style=\"color:#9ECBFF\">                'Content--dark Content--neon'</span><span style=\"color:#E1E4E8\">: </span><span style=\"color:#79B8FF\">this</span><span style=\"color:#E1E4E8\">.current </span><span style=\"color:#F97583\">==</span><span style=\"color:#9ECBFF\"> 'neon'</span><span style=\"color:#E1E4E8\">,</span></span>\n<span class=\"line\"><span style=\"color:#E1E4E8\">            };</span></span>\n<span class=\"line\"><span style=\"color:#E1E4E8\">        },</span></span>\n<span class=\"line\"></span>\n<span class=\"line\"><span style=\"color:#B392F0\">        choicePreview</span><span style=\"color:#E1E4E8\">(</span><span style=\"color:#FFAB70\">choice</span><span style=\"color:#E1E4E8\">) {</span></span>\n<span class=\"line\"><span style=\"color:#F97583\">            return</span><span style=\"color:#E1E4E8\"> {</span></span>\n<span class=\"line\"><span style=\"color:#9ECBFF\">                'bg-yellow-500'</span><span style=\"color:#E1E4E8\"> : choice </span><span style=\"color:#F97583\">==</span><span style=\"color:#9ECBFF\"> 'default'</span><span style=\"color:#E1E4E8\">,</span></span>\n<span class=\"line\"><span style=\"color:#9ECBFF\">                'bg-red-500'</span><span style=\"color:#E1E4E8\"> : choice </span><span style=\"color:#F97583\">==</span><span style=\"color:#9ECBFF\"> 'neon'</span></span>\n<span class=\"line\"><span style=\"color:#E1E4E8\">            }</span></span>\n<span class=\"line\"><span style=\"color:#E1E4E8\">        }</span></span>\n<span class=\"line\"><span style=\"color:#E1E4E8\">    }</span></span>\n<span class=\"line\"><span style=\"color:#E1E4E8\">}</span></span>\n<span class=\"line\"><span style=\"color:#E1E4E8\">{</span><span style=\"color:#F97583\">%</span><span style=\"color:#E1E4E8\"> endraw </span><span style=\"color:#F97583\">%</span><span style=\"color:#E1E4E8\">}</span></span>\n<span class=\"line\"></span></code></pre>\n<p>CSS (using tailwind/@latest):</p>\n<pre class=\"astro-code github-dark\" style=\"background-color:#24292e;color:#e1e4e8; overflow-x: auto;\" tabindex=\"0\" data-language=\"css\"><code><span class=\"line\"><span style=\"color:#E1E4E8\">{% </span><span style=\"color:#79B8FF\">raw</span><span style=\"color:#E1E4E8\"> %}</span></span>\n<span class=\"line\"><span style=\"color:#B392F0\">.ThemeSelector</span><span style=\"color:#E1E4E8\"> {</span></span>\n<span class=\"line\"><span style=\"color:#E1E4E8\">    @</span><span style=\"color:#79B8FF\">apply</span></span>\n<span class=\"line\"><span style=\"color:#79B8FF\">        flex</span></span>\n<span class=\"line\"><span style=\"color:#79B8FF\">        flex-row</span></span>\n<span class=\"line\"><span style=\"color:#79B8FF\">        items-center</span></span>\n<span class=\"line\"><span style=\"color:#79B8FF\">        mr-</span><span style=\"color:#E1E4E8\">8;</span></span>\n<span class=\"line\"><span style=\"color:#E1E4E8\">  </span></span>\n<span class=\"line\"><span style=\"color:#79B8FF\">    li</span><span style=\"color:#E1E4E8\"> {</span></span>\n<span class=\"line\"><span style=\"color:#E1E4E8\">        @</span><span style=\"color:#79B8FF\">apply</span></span>\n<span class=\"line\"><span style=\"color:#79B8FF\">            mr-</span><span style=\"color:#E1E4E8\">1</span></span>\n<span class=\"line\"><span style=\"color:#79B8FF\">            cursor-pointer</span><span style=\"color:#E1E4E8\">;</span></span>\n<span class=\"line\"><span style=\"color:#E1E4E8\">    }</span></span>\n<span class=\"line\"><span style=\"color:#E1E4E8\">  </span></span>\n<span class=\"line\"><span style=\"color:#E1E4E8\">    &#x26;-choice {</span></span>\n<span class=\"line\"><span style=\"color:#E1E4E8\">        @</span><span style=\"color:#79B8FF\">apply</span></span>\n<span class=\"line\"><span style=\"color:#79B8FF\">            w-</span><span style=\"color:#E1E4E8\">[16</span><span style=\"color:#79B8FF\">px</span><span style=\"color:#E1E4E8\">]</span></span>\n<span class=\"line\"><span style=\"color:#79B8FF\">            h-</span><span style=\"color:#E1E4E8\">[16</span><span style=\"color:#79B8FF\">px</span><span style=\"color:#E1E4E8\">]</span></span>\n<span class=\"line\"><span style=\"color:#79B8FF\">            block</span></span>\n<span class=\"line\"><span style=\"color:#79B8FF\">            border-</span><span style=\"color:#E1E4E8\">2</span></span>\n<span class=\"line\"><span style=\"color:#79B8FF\">            border-black</span></span>\n<span class=\"line\"><span style=\"color:#79B8FF\">            transition-all</span></span>\n<span class=\"line\"><span style=\"color:#79B8FF\">            ease-linear</span><span style=\"color:#E1E4E8\">;</span></span>\n<span class=\"line\"></span>\n<span class=\"line\"><span style=\"color:#E1E4E8\">        &#x26;:hover {</span></span>\n<span class=\"line\"><span style=\"color:#E1E4E8\">            @apply</span></span>\n<span class=\"line\"><span style=\"color:#E1E4E8\">                border-0;</span></span>\n<span class=\"line\"><span style=\"color:#E1E4E8\">        }</span></span>\n<span class=\"line\"><span style=\"color:#E1E4E8\">    }</span></span>\n<span class=\"line\"><span style=\"color:#E1E4E8\">    </span></span>\n<span class=\"line\"><span style=\"color:#E1E4E8\">    &#x26;-label {</span></span>\n<span class=\"line\"><span style=\"color:#E1E4E8\">        @</span><span style=\"color:#79B8FF\">apply</span></span>\n<span class=\"line\"><span style=\"color:#79B8FF\">            text-yellow-</span><span style=\"color:#E1E4E8\">500</span></span>\n<span class=\"line\"><span style=\"color:#79B8FF\">            font-bold</span></span>\n<span class=\"line\"><span style=\"color:#79B8FF\">            text-sm</span><span style=\"color:#E1E4E8\">;</span></span>\n<span class=\"line\"><span style=\"color:#E1E4E8\">    }</span></span>\n<span class=\"line\"><span style=\"color:#E1E4E8\">}</span></span>\n<span class=\"line\"><span style=\"color:#E1E4E8\">{% </span><span style=\"color:#79B8FF\">endraw</span><span style=\"color:#E1E4E8\"> %}</span></span>\n<span class=\"line\"></span></code></pre>";

				const frontmatter = {"title":"Simple Alpine Theme Selector","date":"July 22, 2023","summary":"Okay so I've learned some things about Jekyll front matter, and properlly formatted posts. But this is about a theme selector."};
				const file = "/home/justinprime/github/netlify-deploy/src/content/blog/simple-alpine-theme-selector.md";
				const url = undefined;
				function rawContent() {
					return "## This is out of date, I'll be updating things as I move forward\n\n## Okay so instead of 1 color scheme, I built a theme selector\n\nThe code will be below. For now this is just a really really really basic example of swapping classes in and out. I think with how I wrote the components, I'll assign elements to the schema in a more efficient way. I just wanted progress for now.\n\nhere's some HTML:\n```html\n<body x-data=\"Themes\">\n\t<main>\n\t\t{% raw %}\n\t\t{% include header.html %} <!-- this is jekyll/liquid -->\n\t\t{% endraw %}\n\t\t<section\n\t\t\tclass=\"Content Content--bubbles p-5\"\n\t\t\t:class=\"baseThemeClass\">\n\t\t\t{% raw %}\n\t\t\t{{ content }} <!-- this is jekyll/liquid -->\n\t\t\t{% endraw %}\n\t\t</section>\n\t</main>\n\t{% raw %}\n\t{% include footer.html %} <!-- this is jekyll/liquid -->\n\n\t<script defer src=\"{{ \"/assets/js/app.js\" | relative_url }}\"></script>\n\t{% endraw %}\n</body>\n```\n\ninside footer.html: \n```html\n{% raw %}\n<ul class=\"ThemeSelector\">\n\t<li class=\"ThemeSelector-label\">theme: </li>\n\n\t<template x-for=\"choice in themeChoices\">\n\t<li>\n\t\t<a\n\t\t\tclass=\"ThemeSelector-choice\"\n\t\t\t@click.prevent=\"choose(choice)\"\n\t\t\t:data-theme=\"`${choice}`\"\n\t\t\t:class=\"choicePreview(choice)\"></a>\n\t</li>\n\t</template>\n</ul>\n{% endraw %}\n```\n\nHere's some alpine:\n```js\n{% raw %}\nexport default function Themes() {\n    return {\n        themeChoices: ['default', 'neon'],\n        current: 'default',\n\n        choose(choice) {\n            this.current = choice;\n        },\n  \n        baseThemeClass() {\n            return {\n                'Content--dark' : this.current == 'default',\n                'Content--dark Content--neon': this.current == 'neon',\n            };\n        },\n\n        choicePreview(choice) {\n            return {\n                'bg-yellow-500' : choice == 'default',\n                'bg-red-500' : choice == 'neon'\n            }\n        }\n    }\n}\n{% endraw %}\n```\n\nCSS (using tailwind/@latest):\n```css\n{% raw %}\n.ThemeSelector {\n    @apply\n        flex\n        flex-row\n        items-center\n        mr-8;\n  \n    li {\n        @apply\n            mr-1\n            cursor-pointer;\n    }\n  \n    &-choice {\n        @apply\n            w-[16px]\n            h-[16px]\n            block\n            border-2\n            border-black\n            transition-all\n            ease-linear;\n\n        &:hover {\n            @apply\n                border-0;\n        }\n    }\n    \n    &-label {\n        @apply\n            text-yellow-500\n            font-bold\n            text-sm;\n    }\n}\n{% endraw %}\n```";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":2,"slug":"this-is-out-of-date-ill-be-updating-things-as-i-move-forward","text":"This is out of date, I’ll be updating things as I move forward"},{"depth":2,"slug":"okay-so-instead-of-1-color-scheme-i-built-a-theme-selector","text":"Okay so instead of 1 color scheme, I built a theme selector"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };