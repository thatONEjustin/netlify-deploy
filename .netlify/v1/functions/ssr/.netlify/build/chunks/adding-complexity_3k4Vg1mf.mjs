import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_CR3YeMnl.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<h2 id=\"so-the-theme-selector-was-a-little-hard-coded\">So the theme selector was a little hard coded.</h2>\n<p>So I was using this alpine for a day or two for my site color selector:</p>\n<pre class=\"astro-code github-dark\" style=\"background-color:#24292e;color:#e1e4e8; overflow-x: auto;\" tabindex=\"0\" data-language=\"js\"><code><span class=\"line\"><span style=\"color:#E1E4E8\">{</span><span style=\"color:#F97583\">%</span><span style=\"color:#E1E4E8\"> raw </span><span style=\"color:#F97583\">%</span><span style=\"color:#E1E4E8\">}</span></span>\n<span class=\"line\"><span style=\"color:#F97583\">export</span><span style=\"color:#F97583\"> default</span><span style=\"color:#F97583\"> function</span><span style=\"color:#B392F0\"> Themes</span><span style=\"color:#E1E4E8\">() {</span></span>\n<span class=\"line\"><span style=\"color:#F97583\">    return</span><span style=\"color:#E1E4E8\"> {</span></span>\n<span class=\"line\"><span style=\"color:#E1E4E8\">        themeChoices: [</span><span style=\"color:#9ECBFF\">'default'</span><span style=\"color:#E1E4E8\">, </span><span style=\"color:#9ECBFF\">'neon'</span><span style=\"color:#E1E4E8\">],</span></span>\n<span class=\"line\"><span style=\"color:#E1E4E8\">        current: </span><span style=\"color:#9ECBFF\">'default'</span><span style=\"color:#E1E4E8\">,</span></span>\n<span class=\"line\"></span>\n<span class=\"line\"><span style=\"color:#B392F0\">        choose</span><span style=\"color:#E1E4E8\">(</span><span style=\"color:#FFAB70\">choice</span><span style=\"color:#E1E4E8\">) {</span></span>\n<span class=\"line\"><span style=\"color:#79B8FF\">            this</span><span style=\"color:#E1E4E8\">.current </span><span style=\"color:#F97583\">=</span><span style=\"color:#E1E4E8\"> choice;</span></span>\n<span class=\"line\"><span style=\"color:#E1E4E8\">        },</span></span>\n<span class=\"line\"><span style=\"color:#E1E4E8\">  </span></span>\n<span class=\"line\"><span style=\"color:#B392F0\">        baseThemeClass</span><span style=\"color:#E1E4E8\">() {</span></span>\n<span class=\"line\"><span style=\"color:#F97583\">            return</span><span style=\"color:#E1E4E8\"> {</span></span>\n<span class=\"line\"><span style=\"color:#9ECBFF\">                'Content--dark'</span><span style=\"color:#E1E4E8\"> : </span><span style=\"color:#79B8FF\">this</span><span style=\"color:#E1E4E8\">.current </span><span style=\"color:#F97583\">==</span><span style=\"color:#9ECBFF\"> 'default'</span><span style=\"color:#E1E4E8\">,</span></span>\n<span class=\"line\"><span style=\"color:#9ECBFF\">                'Content--dark Content--neon'</span><span style=\"color:#E1E4E8\">: </span><span style=\"color:#79B8FF\">this</span><span style=\"color:#E1E4E8\">.current </span><span style=\"color:#F97583\">==</span><span style=\"color:#9ECBFF\"> 'neon'</span><span style=\"color:#E1E4E8\">,</span></span>\n<span class=\"line\"><span style=\"color:#E1E4E8\">            };</span></span>\n<span class=\"line\"><span style=\"color:#E1E4E8\">        },</span></span>\n<span class=\"line\"></span>\n<span class=\"line\"><span style=\"color:#B392F0\">        choicePreview</span><span style=\"color:#E1E4E8\">(</span><span style=\"color:#FFAB70\">choice</span><span style=\"color:#E1E4E8\">) {</span></span>\n<span class=\"line\"><span style=\"color:#F97583\">            return</span><span style=\"color:#E1E4E8\"> {</span></span>\n<span class=\"line\"><span style=\"color:#9ECBFF\">                'bg-yellow-500'</span><span style=\"color:#E1E4E8\"> : choice </span><span style=\"color:#F97583\">==</span><span style=\"color:#9ECBFF\"> 'default'</span><span style=\"color:#E1E4E8\">,</span></span>\n<span class=\"line\"><span style=\"color:#9ECBFF\">                'bg-red-500'</span><span style=\"color:#E1E4E8\"> : choice </span><span style=\"color:#F97583\">==</span><span style=\"color:#9ECBFF\"> 'neon'</span></span>\n<span class=\"line\"><span style=\"color:#E1E4E8\">            }</span></span>\n<span class=\"line\"><span style=\"color:#E1E4E8\">        }</span></span>\n<span class=\"line\"><span style=\"color:#E1E4E8\">    }</span></span>\n<span class=\"line\"><span style=\"color:#E1E4E8\">}</span></span>\n<span class=\"line\"><span style=\"color:#E1E4E8\">{</span><span style=\"color:#F97583\">%</span><span style=\"color:#E1E4E8\"> endraw </span><span style=\"color:#F97583\">%</span><span style=\"color:#E1E4E8\">}</span></span>\n<span class=\"line\"></span></code></pre>\n<p>But this was mostly just a hastily put together solution as a proof of concept for adjusting a website’s classes based on user input.</p>\n<p>Since I wanted to make this more extensible, it’s pretty obvious to move the <code>choicePreview(choice)</code> and <code>baseThemeClass</code> returns out of those functions.</p>\n<p>Moving the container and preview classes to a new <code>palettes</code> collection also simplifies setting the classes easy. Just grab whatever theme/palette matches the current choice:</p>\n<pre class=\"astro-code github-dark\" style=\"background-color:#24292e;color:#e1e4e8; overflow-x: auto;\" tabindex=\"0\" data-language=\"js\"><code><span class=\"line\"><span style=\"color:#E1E4E8\">{</span><span style=\"color:#F97583\">%</span><span style=\"color:#E1E4E8\"> raw </span><span style=\"color:#F97583\">%</span><span style=\"color:#E1E4E8\">}</span></span>\n<span class=\"line\"><span style=\"color:#F97583\">export</span><span style=\"color:#F97583\"> default</span><span style=\"color:#F97583\"> function</span><span style=\"color:#B392F0\"> themes</span><span style=\"color:#E1E4E8\">() {</span></span>\n<span class=\"line\"><span style=\"color:#F97583\">    return</span><span style=\"color:#E1E4E8\"> {</span></span>\n<span class=\"line\"><span style=\"color:#E1E4E8\">        palettes: [</span></span>\n<span class=\"line\"><span style=\"color:#E1E4E8\">            {</span></span>\n<span class=\"line\"><span style=\"color:#E1E4E8\">                name: </span><span style=\"color:#9ECBFF\">'default'</span><span style=\"color:#E1E4E8\">,</span></span>\n<span class=\"line\"><span style=\"color:#E1E4E8\">                container: </span><span style=\"color:#9ECBFF\">'Content--dark'</span><span style=\"color:#E1E4E8\">,</span></span>\n<span class=\"line\"><span style=\"color:#E1E4E8\">                preview: </span><span style=\"color:#9ECBFF\">'bg-yellow-500'</span></span>\n<span class=\"line\"><span style=\"color:#E1E4E8\">            },</span></span>\n<span class=\"line\"><span style=\"color:#E1E4E8\">            {</span></span>\n<span class=\"line\"><span style=\"color:#E1E4E8\">                name: </span><span style=\"color:#9ECBFF\">'neon'</span><span style=\"color:#E1E4E8\">,</span></span>\n<span class=\"line\"><span style=\"color:#E1E4E8\">                container: </span><span style=\"color:#9ECBFF\">'Content--dark Content--neon'</span><span style=\"color:#E1E4E8\">,</span></span>\n<span class=\"line\"><span style=\"color:#E1E4E8\">                preview: </span><span style=\"color:#9ECBFF\">'bg-red-500'</span></span>\n<span class=\"line\"><span style=\"color:#E1E4E8\">            },</span></span>\n<span class=\"line\"><span style=\"color:#E1E4E8\">            {</span></span>\n<span class=\"line\"><span style=\"color:#E1E4E8\">                name: </span><span style=\"color:#9ECBFF\">'light'</span><span style=\"color:#E1E4E8\">,</span></span>\n<span class=\"line\"><span style=\"color:#E1E4E8\">                container: </span><span style=\"color:#9ECBFF\">'Content--light'</span><span style=\"color:#E1E4E8\">,</span></span>\n<span class=\"line\"><span style=\"color:#E1E4E8\">                preview: </span><span style=\"color:#9ECBFF\">'bg-white'</span></span>\n<span class=\"line\"><span style=\"color:#E1E4E8\">            },</span></span>\n<span class=\"line\"></span>\n<span class=\"line\"><span style=\"color:#E1E4E8\">        ],</span></span>\n<span class=\"line\"></span>\n<span class=\"line\"><span style=\"color:#E1E4E8\">        current: </span><span style=\"color:#9ECBFF\">'default'</span><span style=\"color:#E1E4E8\">,</span></span>\n<span class=\"line\"><span style=\"color:#E1E4E8\">        </span></span>\n<span class=\"line\"><span style=\"color:#B392F0\">        choose</span><span style=\"color:#E1E4E8\">(</span><span style=\"color:#FFAB70\">choice</span><span style=\"color:#E1E4E8\">) {</span></span>\n<span class=\"line\"><span style=\"color:#F97583\">            if</span><span style=\"color:#E1E4E8\">(</span><span style=\"color:#79B8FF\">this</span><span style=\"color:#E1E4E8\">.current </span><span style=\"color:#F97583\">!=</span><span style=\"color:#E1E4E8\"> choice) {</span></span>\n<span class=\"line\"><span style=\"color:#79B8FF\">                this</span><span style=\"color:#E1E4E8\">.current </span><span style=\"color:#F97583\">=</span><span style=\"color:#E1E4E8\"> choice;</span></span>\n<span class=\"line\"><span style=\"color:#E1E4E8\">            }</span></span>\n<span class=\"line\"><span style=\"color:#E1E4E8\">        },</span></span>\n<span class=\"line\"></span>\n<span class=\"line\"><span style=\"color:#B392F0\">        baseThemeClass</span><span style=\"color:#E1E4E8\">() {</span></span>\n<span class=\"line\"><span style=\"color:#F97583\">            return</span><span style=\"color:#79B8FF\"> this</span><span style=\"color:#E1E4E8\">.palettes.</span><span style=\"color:#B392F0\">find</span><span style=\"color:#E1E4E8\">(</span><span style=\"color:#FFAB70\">container</span><span style=\"color:#F97583\"> =></span><span style=\"color:#E1E4E8\"> container.name </span><span style=\"color:#F97583\">==</span><span style=\"color:#79B8FF\"> this</span><span style=\"color:#E1E4E8\">.current).container;</span></span>\n<span class=\"line\"><span style=\"color:#E1E4E8\">        },</span></span>\n<span class=\"line\"></span>\n<span class=\"line\"><span style=\"color:#B392F0\">        choicePreview</span><span style=\"color:#E1E4E8\">(</span><span style=\"color:#FFAB70\">choice</span><span style=\"color:#E1E4E8\">) {</span></span>\n<span class=\"line\"><span style=\"color:#F97583\">            if</span><span style=\"color:#E1E4E8\">(</span><span style=\"color:#F97583\">!</span><span style=\"color:#E1E4E8\">choice) {</span></span>\n<span class=\"line\"><span style=\"color:#F97583\">                return</span><span style=\"color:#E1E4E8\">;</span></span>\n<span class=\"line\"><span style=\"color:#E1E4E8\">            }</span></span>\n<span class=\"line\"></span>\n<span class=\"line\"><span style=\"color:#F97583\">            return</span><span style=\"color:#79B8FF\"> this</span><span style=\"color:#E1E4E8\">.palettes.</span><span style=\"color:#B392F0\">find</span><span style=\"color:#E1E4E8\">(</span><span style=\"color:#FFAB70\">bg</span><span style=\"color:#F97583\"> =></span><span style=\"color:#E1E4E8\"> bg.name </span><span style=\"color:#F97583\">==</span><span style=\"color:#E1E4E8\"> choice).preview;</span></span>\n<span class=\"line\"><span style=\"color:#E1E4E8\">        }</span></span>\n<span class=\"line\"><span style=\"color:#E1E4E8\">    }</span></span>\n<span class=\"line\"><span style=\"color:#E1E4E8\">}</span></span>\n<span class=\"line\"><span style=\"color:#E1E4E8\">{</span><span style=\"color:#F97583\">%</span><span style=\"color:#E1E4E8\"> endraw </span><span style=\"color:#F97583\">%</span><span style=\"color:#E1E4E8\">}</span></span>\n<span class=\"line\"></span></code></pre>";

				const frontmatter = {"title":"Upgrading from themes to a Palette Selector","date":"July 22, 2023","summary":"So I moved to a more programmatic solution to my 'theme' selector."};
				const file = "/home/justinprime/github/netlify-deploy/src/content/blog/adding-complexity.md";
				const url = undefined;
				function rawContent() {
					return "## So the theme selector was a little hard coded. \nSo I was using this alpine for a day or two for my site color selector: \n\n```js\n{% raw %}\nexport default function Themes() {\n    return {\n        themeChoices: ['default', 'neon'],\n        current: 'default',\n\n        choose(choice) {\n            this.current = choice;\n        },\n  \n        baseThemeClass() {\n            return {\n                'Content--dark' : this.current == 'default',\n                'Content--dark Content--neon': this.current == 'neon',\n            };\n        },\n\n        choicePreview(choice) {\n            return {\n                'bg-yellow-500' : choice == 'default',\n                'bg-red-500' : choice == 'neon'\n            }\n        }\n    }\n}\n{% endraw %}\n```\n\nBut this was mostly just a hastily put together solution as a proof of concept for adjusting a website's classes based on user input. \n\nSince I wanted to make this more extensible, it's pretty obvious to move the `choicePreview(choice)` and `baseThemeClass` returns out of those functions.\n\nMoving the container and preview classes to a new `palettes` collection also simplifies setting the classes easy. Just grab whatever theme/palette matches the current choice:\n```js\n{% raw %}\nexport default function themes() {\n    return {\n        palettes: [\n            {\n                name: 'default',\n                container: 'Content--dark',\n                preview: 'bg-yellow-500'\n            },\n            {\n                name: 'neon',\n                container: 'Content--dark Content--neon',\n                preview: 'bg-red-500'\n            },\n            {\n                name: 'light',\n                container: 'Content--light',\n                preview: 'bg-white'\n            },\n\n        ],\n\n        current: 'default',\n        \n        choose(choice) {\n            if(this.current != choice) {\n                this.current = choice;\n            }\n        },\n\n        baseThemeClass() {\n            return this.palettes.find(container => container.name == this.current).container;\n        },\n\n        choicePreview(choice) {\n            if(!choice) {\n                return;\n            }\n\n            return this.palettes.find(bg => bg.name == choice).preview;\n        }\n    }\n}\n{% endraw %}\n```";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":2,"slug":"so-the-theme-selector-was-a-little-hard-coded","text":"So the theme selector was a little hard coded."}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };