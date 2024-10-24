const id = "getting-a-workflow.md";
						const collection = "blog";
						const slug = "getting-a-workflow";
						const body = "### I was trying to figure out \"what do I even need to write about\" (the existential problem)\nAnd then I ran into an issue... \n\n### The physical problem\n**How** am I even supposed to write into this blog now that it's set up? I have the jekyll running (which was originally what this post was supposed to be about). The site is built in VS Code but ostensibly once I have the foundation built I'd prefer to avoid writing in my coding IDE. \n\nEnter **[Obsidian](https://obsidian.md)** a markdown editor that I've been using for journaling, writing projects, to-do lists, and other simple text-based tasks I wanted to have easy access to across all my devices. \n\nWhat's interesting is that Obsidian is what brought me **TO** [jekyll](https://jekyllrb.com/), I'd always circled around markdown files being README.md's for the most part.  However, after a years worth of writing under my belt, I'm happy to report that it's my note taking app of choice.\n\n### So back to the point\n**How** am I supposed to write into this blog? For me that answer comes with addressing these three problems:\n- jekyll posts need to have a specific file name syntax\n\t- `YYYY-MM-DD-name-of-url-slash-post.markdown`\n- Posts also need \"front matter\" configured to help with blogging\n\t- Primarily the `date` attribute needing a similar format to the filename: `YYYY-MM-DD HH:MM:SS}} +/- TTTT`\n- I'm a big **mechanical keyboard** nerd and my preferred method of writing is using my iPad Air and whatever travel board I've decided to use for that day. \n\nVS Code can generate templated systems, but for the most part it's almost preferred to just use a framework's cli tools for generating models/views/etc. At best there are some basic templating extensions that work really great on a dedicated dev machine. \n\n**Obsidian** solves the first two bullet points out of the box with their **Core** plugin family.\n\nHere's a look at my `Daily Note` plugin settings\n![[/assets/img/daily-note-settings.png]]\n\nThis plugin adds a button to the side bar (and hot key) for creating a new file in a folder location I designate. \n\nI can also assign a `template` to the file generated that gives me a boilerplate to work with\n![[/assets/img/markdown-template.png]]\n\n```markdown\n---\nlayout: post\nauthor: justin\ntitle:  Lorem, the Ipsum Story\ndate:   {{date:YYYY-MM-DD HH:MM:SS}} -0500\ntags: obsidian\nsummary: lorem ipsum.\n---\n```\n\nWhat's great is that Obsidian also uses mustache rendering and pairs some useful date/time tools that get applied when creating a file. Most notably solving bulletpoint 2 of **how** I want to write for my blog.\n\n#### The following HR line is to note when I stopped typing this on my desktop\n---\n\nOkay, so I had to take a short break in order to clear my head and test out one feature set before finishing this post. I needed to test what GitHub for iPad did, which unfortunately is just a tracking app. There's actions I could trigger and probably some administrative stuff but unfortunately I can't do a push from my iPad itself. \n\nTime to see how the Obsidian sync works\n\n---\n";
						const data = {title:"Okay getting a workflow going and getting inspiration",summary:"So I ran into two types of issues, existential and physical. In both cases I solved the issue by doubling up on tools to use, its better than it sounds.",date:new Date(1688446800000)};
						const _internal = {
							type: 'content',
							filePath: "/home/justinprime/github/netlify-deploy/src/content/blog/getting-a-workflow.md",
							rawData: undefined,
						};

export { _internal, body, collection, data, id, slug };
