# Embedding

No notebook is an island; it draws from others’ work, and it exists to say something to someone somewhere else. Sometimes, an image of a chart will not suffice; your notebook may be interactive, or it may pull live data. It’s dynamic, and the version you show elsewhere should be, too.

Embedding lets you put a working version of your notebooks inside another website. For example, the cell shown below embeds a bar chart of letter frequencies:

<iframe width="100%" height="635" frameborder="0"
  src="https://observablehq.com/embed/@d3/sortable-bar-chart?cell=viewof+order&cell=chart"></iframe>

It shows two cells in one: one to control the sort order, and one to show the chart. And this isn’t an [import](https://observablehq.com/@observablehq/introduction-to-imports) — it’s just HTML, which means it can go anywhere on the web.

## How to embed

Embedding is done with the Embed tool, which you can find it in the cell menu (to the left of every cell) and in the notebook menu (in the top right of the page):

<figure>
  <img
    class="screenshot w-70"
    src="/embedding/embed_and_embed_cells_v2.png" alt="Screen shot of open sidebar showing the Embed option, next to the notebook menu in the top right also showing the Export->Embed cells option highlighted"
  />
  <figcaption>Cell menu on left; notebook menu on right.</figcaption>
</figure>

You can select any combination of named cells (those that start with `name = ...`) with the checkboxes. The preview shows how they will look and work when pulled out from the rest of the notebook, so you can fine-tune and fix any surprises.

Then copy the **Iframe** code at the bottom and paste it into just about anywhere that lets you put your own HTML.

<figure>
  <img
    class="screenshot w-70"
    src="/embedding/embed_with_preview_bar_chart_new.png" alt="Screen shot of embed dialog with options shown on the left and the preview of the embedded content on the right"
  />
  <figcaption>Note that the <strong>Preview</strong> may not appear if the window is insufficiently wide.
</figcaption>
</figure>

In many cases, you’re done! But if you want more control or a deeper integration, you can try the other embedding methods, **Runtime with JavaScript** or **Runtime with React**, which generate code that uses the [Runtime API](https://observablehq.com/@observablehq/downloading-and-embedding-notebooks) to render your cells. Since the code is running directly on your site, and the cells are inserted directly into your document, you can rearrange the cells and style them with CSS; they do not have our site styles. Since the appearance will depend on the site into which you’re embedding, our preview here is only a rough indication of how your embed will look.

### Iframe embeds without the Observable attribution banner
<PricingBadge level="enterprise" />

If you have an Enterprise account, you have the option to remove the Observable brand attribution banner by checking the box next to **Remove attribution banner**:

<figure>
  <img
   class="screenshot w-70"
    src="/embedding/removed_attribution_data_table_cell.png" alt="Screen shot of the embed dialog with the 'remove attribution banner' option selected, preview on the right is not showing the Observable logo"
  />
  <figcaption>By checking the box next to <strong>Remove attribution banner</strong>, Enterprise users can remove the Observable attribution banner.
</figcaption>
</figure>


## Embed private notebooks

Private notebooks are not embeddable by default. To embed a private notebook, you can use a notebook key or API key with the embed code.

See [API and Notebook Keys](https://observablehq.com/@observablehq/api-keys) for more details.

## Embed environment

The Runtime-based embedding methods are limited to environments where you can run your own scripts. But since the Iframe isolates that in a different document, it can go in more controlled WordPress blogs, content management systems like Gatsby, and note-taking software like Notion or Roam. Closer to home, you can now embed cells in posts on the Observable forum. It even makes embedding easier on Observable itself, since the Iframe can go directly in an \`html\` template literal! (If you want to pass data in and out of the cells, you’re still better off using [imports](https://observablehq.com/@observablehq/imports).)

Some sites like Medium and Reddit that don’t allow arbitrary HTML still “unfurl” certain links you paste to interactive versions, using a standard called [oEmbed](https://oembed.com/). Under the Iframe code, click “Copy URL only” and paste it elsewhere; depending on the site, it will expand to the full interactive embed. If the site uses Embedly, the Iframe can automatically resize to match the height of your content.

“Embed” means different things to different people, and this only covers a small fraction of the ways you can take the work you do here elsewhere. It doesn’t help you embed in Slack, Facebook, Twitter, or LinkedIn, which don’t support arbitrary interactive embeds; we still use the notebook thumbnail for those. To share your work in an email, presentation, or other document, you might try “Download PNG” in the cell menu for SVG or canvas cells. To capture something dynamic, you can use Shift-Command-5 (⇧⌘5) to record part of the screen. 