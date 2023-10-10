# Troubleshooting embedding

You can embed named cells from any link-shared or published notebook in your website or application by clicking “Embed cells” in the notebook menu, or “Embed” in the cell menu. For background, read a [general overview](https://observablehq.com/d/4c4fc1085db46fa9) of the embedding options on Observable. For deeper integrations, read about the [Runtime API](https://observablehq.com/@observablehq/downloading-and-embedding-notebooks). 

Our GitHub repository of [examples](https://github.com/observablehq/examples) demonstrates techniques for each of the three embedding methods:

| Iframe |  |
|---|---|
| [**iframe-resize**](https://github.com/observablehq/examples/tree/main/iframe-resize/) | Make Iframe resize to match its contents |

| Runtime with JavaScript |  |
|---|---|
| [**simple-notebook**](https://github.com/observablehq/examples/tree/main/simple-notebook/) | Embed an entire notebook into the page |
| [**simple-constant**](https://github.com/observablehq/examples/tree/main/simple-constant/) | Read the value of a cell (that never changes) |
| [**simple-generator**](https://github.com/observablehq/examples/tree/main/simple-generator/) | Read the value of a cell (that may change over time) |
| [**custom-data**](https://github.com/observablehq/examples/tree/main/custom-data/) | Pass your data into a chart |
| [**custom-live-data**](https://github.com/observablehq/examples/tree/main/custom-live-data/) | Pass live streaming data into a chart |
| [**custom-fixed-width**](https://github.com/observablehq/examples/tree/main/custom-fixed-width/) | Set the width of a chart to a fixed value |
| [**custom-fluid-width**](https://github.com/observablehq/examples/tree/main/custom-fluid-width/) | Resize a chart when the window is resized |
| [**custom-fluid-width-and-height**](https://github.com/observablehq/examples/tree/main/custom-fluid-width-and-height/) | Resize a chart when its container is resized |
| [**custom-library**](https://github.com/observablehq/examples/tree/main/custom-library/) | Override the Observable Standard Library |
| [**standalone**](https://github.com/observablehq/examples/tree/main/standalone/) | Self-host an Observable notebook with no external dependencies |
| [**versioning**](https://github.com/observablehq/examples/tree/main/versioning/) | Embed a specific version of a notebook |
| [**breakout**](https://github.com/observablehq/examples/tree/main/breakout/) | An extravagant way to demonstrate mutable state |

| Runtime with React |  |
|---|---|
| [**react-create-react-app**](https://github.com/observablehq/examples/tree/main/react-create-react-app/) | Embed an Observable notebook in a create-react-app application |
| [**react-file-attachment**](https://github.com/observablehq/examples/tree/main/react-file-attachment/) | Wrap a notebook (with a file attachment) in a React component |
| [**react-dataflow**](https://github.com/observablehq/examples/tree/main/react-dataflow/) | Pass data between a React app and an Observable notebook |

## I don’t know which method to use

The Iframe works most consistently in the most places; the two Runtime methods offer finer control over integration. It depends on where you want to embed: 

- **Airtable**. Under “Iframe”, click “Copy URL only” and paste it into Airtable’s Embed app, a paid feature. [More info](https://support.airtable.com/hc/en-us/articles/360015137434-Embed-app)
- **Discourse (talk.observablehq.com)**. You can paste the Iframe code into a message on our forums. This is supported in any Discourse where the administrator has put observablehq.com on the list of allowed_iframes in Site Settings.
- **HTML**. You can use any of these methods on an HTML page you’re writing yourself. If the HTML you write is being passed to some other application, then the Iframe approach is the most likely to work and look right. If it’s your own `index.html` then you can use Runtime with JavaScript to, for instance, put the cells in different places, or pass in your own data. If you use Runtime with React, you’ll need a build step like Babel to [compile the JSX](https://reactjs.org/docs/introducing-jsx.html).
- **Gatsby**. If you’re writing Markdown for Gatsby, put the Iframe on its own line of Markdown. If you’re writing React components for Gatsby, you can either use the Iframe or use the “Runtime with React” method to create a component you can add to your Gatsby application. [More info](https://www.gatsbyjs.com/docs/adding-react-components/)
- **Jupyter**. You can use the Iframe with the `display()` and `HTML()` functions from `IPython.display` module. We also have an [experimental library](https://pypi.org/project/observable-jupyter/) that lets you pass data into an embed without writing JavaScript. [More info](https://observablehq.com/@observablehq/visualize-a-data-frame-with-observable-in-jupyter?collection=@observablehq/observable-for-jupyter-users)
- **Markdown**. Many implementations of Markdown allow HTML tags like the Iframe. You may have to put the Iframe code on its own line.
- **Medium**. Under “Iframe”, click “Copy URL only”, paste it into a story on its own line, and hit Enter. You cannot interact with the embed in the draft, and the height won’t auto-size until you publish.
- *Notion* Under “Iframe”, click “Copy URL only” and paste it into Notion’s Embed block. [More info](https://www.notion.so/Embeds-6b7133323590447b9d8e963c136ebce5)
- **R**. A couple intrepid Observable users have developed a library to embed notebooks as `htmlwidgets` in R. This is not an officially supported project, but we’d love to see what you do with it! [More info](https://github.com/juba/robservable)
- **React**. If you just need to show the embed, you can paste the Iframe code anywhere in your JSX. If you want a deeper integration, use the Runtime with React method to generate a new component you can import to your application. [More info](https://observablehq.com/@observablehq/how-to-embed-a-notebook-in-a-react-app)
- **Reddit**. Some subreddits use oEmbed to show media previews of links, in which case you can use the Iframe method’s “Copy URL only” button to get an interactive embed in the feed. The main URL of the notebook does not currently expand to an interactive preview.
- **Roam Research**. Under “Iframe”, click “Copy URL only” and paste it into Roam’s Iframe block. Hit “Enter” and it will expand to a live resizable embed: 
```
{{iframe: https://observablehq.com/embed/@d3/bar-chart-race?cell=chart}}
```
- **Shopify**. You can add the Iframe with the rich text editor. [More info](https://help.shopify.com/en/manual/shopify-admin/productivity-tools/rich-text-editor#add-html-content-with-the-rich-text-editor-desktop-specific)
- **Squarespace**. Under “Iframe”, click “Copy URL only” and paste it into a Squarespace Embed block, or paste the whole Iframe into a Code block. [More info](https://support.squarespace.com/hc/en-us/articles/206543617-Embed-Blocks)
- **WordPress.com**. Scripts and Iframes are not supported on free WordPress.com sites. If you have a paid plan, you can paste either the Iframe code or the Runtime with JavaScript code into a Custom HTML block. Note that the Runtime with JavaScript option may introduce some issues with the width of the embed in some cases, so you may want to stick to the Iframe code.
- **WordPress.org (self-hosted)**. You can paste either the Iframe code or the Runtime with JavaScript code into a Custom HTML block. Note that the Runtime with JavaScript option may introduce some issues with the width of the embed in some cases (see “The width is wrong” below), so you may want to stick to the Iframe code. [More info](https://wordpress.org/plugins/iframe/)
- **Other**. What we’re calling “embedding” here does not cover embedding in social media sites, which generally don’t support interactive embedding; there, we use the notebook’s title, author, description, and thumbnail. It also doesn’t cover embedding in most productivity software, which generally don’t let you run code. You can download a version of most graphical cells by clicking “Download PNG” in the cell menu.

## The cell I want to embed doesn’t appear in the list

Currently, you can only embed named cells. A cell like `map = { … }` is embeddable, but a cell that just references another cell like `map` is not. If you are trying to embed an unnamed cell in someone else’s notebook, you can fork it or send them a suggestion to name it. (Note that unnamed cells _are_ included when you embed the entire notebook.)

## My cells look different when embedded

Embedding, like importing, is “lazy” — it doesn’t run every cell in the notebook. You might have noticed that cells sometimes look slightly different when imported; embeds are similar. Looking at the preview, you may find that some cells look different than in the context of the entire notebook. 

When you’re working in a notebook it is possible — though discouraged — to use side effects that change the behavior or appearance of cells without participating in reactive dataflow. For example, a cell rendering a `<style>` tag with CSS can affect the appearance of any other cell on the page, even though none of them refer to each other’s cell names. Or you might have used document query selectors to get and modify a DOM element elsewhere on the page. These patterns are discouraged because when you import or embed the cell, Observable can’t tell that they depend on those other cells. 

If you have a cell that runs an update method, make sure the cell is named and references the cell it is modifying. (For example, `update = chart.update(data)` is named and explicitly references `chart`, which it updates.) If you have a cell with CSS, we recommend instead interpolating that CSS into the HTML of the cell that depends on it. If you are using query selectors, we recommend rewriting them to refer to named cells; given the reference to that DOM node, you can safely sub-select.

## An animation isn’t working

In notebooks like [Sortable Bar Chart](https://observablehq.com/@d3/sortable-bar-chart), the `chart` cell returns an `update` method, which is called by another cell (named `update`) that passes in new data. That cell calling the update method is run reactively whenever data changes, so you don’t need to name it in the notebook. However, you _do_ need to name it for it to run in an embed. In embeds, unlike imports, we look for other cells that refer to the cells you’re showing and we run them in the background, just to catch this kind of case. However, this technique only works if the update cell is named, since names are the only way we have to refer to particular cells.

## I can’t see the code in the embed

Currently, embeds only show the output of cells; if you’d like people to be able to edit and collaborate on the code behind your work, we recommend you direct readers to visit your notebook here on observablehq.com. We do understand that there are cases where it would be useful or educational to show the code alongside your work, and would love to hear more about what you’re trying to do.

## I want to show my own data in a chart

This is possible with the Runtime, as you can see in this example of a [chart loading local JSON data](https://github.com/observablehq/examples/blob/main/custom-data/index.html); call `redefine` on your module and pass in your data. Another example shows how to [pass a prop](https://github.com/observablehq/examples/tree/main/react-dataflow) into a React component that passes it into a notebook.

## I want to embed a private notebook

To share a notebook without listing it anywhere on Observable, we recommend publishing your notebook as unlisted. If that is not sufficient, you can use an [API key](https://observablehq.com/@observablehq/api-keys) to embed, but only if the embedding website is private and secure, because anyone who looks at the source will be able to see your API key. You should treat an API key like a password; it grants unrestricted access, and is only useful in very specific and carefully controlled circumstances.

## It’s annoying to select all the cells I want

You can use our powerful [keyboard shortcuts for cell selection](https://observablehq.com/@observablehq/cell-shortcuts), sometimes known as “Visual Mode”, to select the cells you want to embed; then, while you have that selection, go to “Embed cells” in the notebook menu, and those cells (if they are named) will be checked. For instance, you can press `j` or `k` (when not in an editor) to enter Visual Mode, then press `⇧shift-A` to select all cells, then press `x` to de-select one cell.

## “Entire notebook” behaves differently from selecting every cell

Indeed, “Entire notebook” is subtly different from checking every checkbox. It embeds cells _unconditionally_, so it will also embed unnamed cells and cells that you add to your notebook after you configure your embed. Unnamed cells cannot be referred to, so the Runtime can’t check for them to decide whether to show them, so embedding unconditionally happens to currently be the only way to embed unnamed cells. You can see how this works in the “Runtime with JavaScript” method; watch how the second argument passed to `new Runtime().module` changes from a conditional statement to one that doesn’t check the cell name at all.

## The width is wrong

The reactive variable `width` refers to the `clientWidth` of the entire document body. That means that if you use the Runtime to render a cell into a `div` that covers only half the width of the page, anything referring to `width` will be twice as wide as the container. The Iframe addresses this: `width` refers to the width of document body inside it. If you’re not using the Iframe, you can override the definition of width using the Runtime. If you want to use the width of a container reactively, you can redefine `width` as a constant or custom generator. See examples with [constant width](https://github.com/observablehq/examples/tree/main/custom-fixed-width); [fluid width](https://github.com/observablehq/examples/tree/main/custom-fluid-width); or [fluid width and height](https://github.com/observablehq/examples/tree/main/custom-fluid-width-and-height).

## The height is wrong

While the Iframe makes it easier for get the right width, it makes it harder to get the right height! Iframes have a fixed height that doesn't naturally respond fluidly to the size of their content. We address this using Embedly’s standard for broadcasting changes in the height, used by sites like Medium. The parent can listen for the Iframe to broadcast a new height and resize it accordingly. For embedding on Observable we have an [auto-resizing embed helper](https://next.observablehq.com/@observablehq/auto-resizing-embed); for other environments, [see example](https://github.com/observablehq/examples/tree/main/iframe-resize). 

## I want to rearrange my cells for the embed

If you’re using the Runtime, you can style and position the containers into which you render the cells however you like. Or, fork this [Dashboard notebook](https://observablehq.com/@mbostock/dashboard) and embed the cell `grid`.

## I want to embed a specific version of a notebook

Click “View history” in the notebook menu and select the version you want to embed; it must have been published or link-shared. When you go to “Embed cells” from that versioned view, the generated code will refer to the currently-selected version of the notebook.

## I want to know when a cell is ready

You can use a promise that resolves when a cell is fulfilled: `module.value("chart").then(chart => { console.log("Ready"); })`. Read more in [this forum post](https://talk.observablehq.com/t/detecting-when-cells-are-ready-when-embedding-a-notebook/4089/4) by community member Alexander Garcia.

## I can’t use a notebook with file attachments as a React component

React apps written in JSX often use Babel to transpile the code, which does not by default support the standard [import.meta syntax](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import.meta) we use for file attachment paths. See [this example](https://github.com/observablehq/examples/tree/main/react-create-react-app) for a workaround that uses absolute paths to refer to file attachments, or [this example](https://github.com/observablehq/examples/tree/main/react-file-attachment) with a working Rollup configuration.

## I can’t use a private notebook with file attachments with an API key

API keys let you embed private notebooks ([see above](#i-want-to-embed-a-private-notebook)), but not fetch those notebooks’ file attachments. Private notebooks’ file attachments are stored on _username_.static.observableusercontent.com without CORS enabled, which means they can’t be fetched from other sites. (When a notebook is published, its file attachments move to static.observableusercontent.com, which you _can_ fetch from elsewhere.) As an alternative to fetching the file attachments of a private notebook, see [how to load your own data](https://github.com/observablehq/examples/tree/main/custom-data/) into the runtime.

## This isn’t what I meant by “Embed” 

We’d love to hear more about what you want to do! We’re continuing to make notebook embedding more powerful and accessible — with your help. If you have interesting use cases, workflows, techniques, or just want to talk about how you want to use the work you do here in other places, please join the conversation on [talk.observablehq.com](https://talk.observablehq.com/).





<style module>
    table td:first-child {
        width: 14em;
    }
</style>
