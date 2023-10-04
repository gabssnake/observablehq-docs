# Cell modes, reactive Markdown, and HTML

---

<figure>
  <img
    class="screenshot w-100"
    src="/learn/learn-cell-modes/new-users-course-cell-modes@1.png" alt="An illustration of some data related icons and objects with a hand with a pencil implying the person attached is either editing or creating."
  />
</figure>

---

Every cell in a notebook has a _mode_. Simple text cells are written in _Markdown_. Another way to write text, create charts, or customize layouts is to use _HTML_. Any type of code, including calculations, lives in _JavaScript_ cells.

## Markdown cells

[_Markdown_](https://observablehq.com/@observablehq/markdown-quick-reference) is what is called a markup language (hence the name, which is a pun). Markdown is nice because it can mostly be ignored if you're just writing plain text. But, if you want to _style the **text**_, insert [hyperlinks](https://observablehq.com/explore), or add formatting (e.g. bulleted lists), the syntax is straightforward and intuitive.

For example, to create emphasis using italics, use a single pair of asterisks or underscores around the text you want to emphasize: `_hello_` or `*hello*` turns into _hello_.

For a bit more oomph, use two asterisks or underscores to create bold text: `**important**` turns into **important**.

You can create hyperlinks with this pattern: `[Observable](https://observablehq.com)`, which turns into a link pointing to [Observable](https://observablehq.com). This might look complicated, but there are two shortcuts for this:
- Select the text you want to use for the link and select Cmd-K/Ctrl-K to insert the link code. Then you can paste the URL and get the link.
- Or simply select your link text and paste a URL. Observable will insert the correct Markdown code for you.

There's more markup, for example to create lists, which are simply lines starting with dashes or asterisks, like so:
<pre>
- hello
- world
</pre>

turns into:
- hello
- world

Formatted text is incredibly important in notebooks because it allows you to add reader-friendly context, interpretation and explanation, links to other materials, and more.

## HTML cells

The other way to write text is HTML, or the _HyperText Markup Language_. Every website is either written in HTML, or (more likely these days) generates HTML for your browser to render as the page you see. Even Markdown has to be translated to HTML for your browser to understand it, but Observable handles that for you.

## JavaScript cells

The primary cell mode used in Observable is the _JavaScript_ cell. JavaScript cells are employed for many useful inputs and charts you can insert using the new cell menu, and any code you write yourself of course.

Here's an example of two JavaScript cells that create a line chart and a slider that allows you to change the amount of smoothing that is applied to the data.

<figure>
  <img
    class="screenshot w-100"
    src="/learn/learn-cell-modes/lineChartSmoothing.png" alt="A screenshot of two open JavaScript cells. The first cell shows a slider that sets the value of the variable `smoothing` The second cell shows the value of `smoothing` determining the smoothness of the chart in the cell."/>
<figcaption>The slider in the first cell determines the value of the smoothing in the chart in the second cell.</figcaption>
</figure>

## Variables and interpolation in Markdown and HTML

Both Markdown and HTML cells can include variables and arbitrary code using _interpolation_. The syntax for this is the same in both cases, `\${cellname}` includes the value of a named cell or variable. You can also call a function, `\${function()}` or use more complex code (though for the sake of readability, it's probably best to put the code into another cell and reference it from the text).

The following example uses interpolation in a Markdown cell to turn a model calculation into a simple sentence. Note how it contains function calls to a `formatMoney()` function and an inline calculation to compute the total cost of the mortgage (this is a very simplified model of course).

<figure>
  <img
    class="screenshot w-100"
    src="/learn/learn-cell-modes/mortgageCalc.png" alt="A screenshot of a mortgage calculator made with interactive inputs for determining the mortgage amount, interest rate, and duration. Then the values of those variables are interpolated in a sentence in Markdown to determine the total cost of the mortgage."
  />
  <figcaption>Interpolation with Markdown.</figcaption>
</figure>

You can interpolate with HTML as well:

<figure>
  <img
    class="screenshot w-100"
    src="/learn/learn-cell-modes/htmlInterpol.png" alt="A screenshot of an HTML cell with some text and a phrase in the first sentence italicized, bolded, and purple. Below in the code portion of the cell you see inputs for determining the color, font weight, and whether the text is italicized."
  />
  <figcaption>Interpolation with HTML.</figcaption>
</figure>

## Changing cell modes

The mode of a cell can be changed at any time by clicking the menu on the left of the editing window and selecting the new mode. This is handy if you picked the wrong one by mistake or decide that you wanted to write more text instead of code.

<div style="max-width: 640px; border-radius: 5px; overflow: hidden; padding: 1rem;">
    <video src="/learn/learn-cell-modes/changeMode.mov" alt="User creates a new markdown cell and write print('Hello World!') and then switches the cell mode to JavaScript so it renders correctly" style="width: 100%; border-radius: 5px; box-shadow: 3px 3px 10px #ccc;" autoplay loop muted></video>
</div>

## Backticks for cell modes

[//]: # (The following is written in HTML so as to make possible the highlighting of backticks in code styling that occurs in this text)

<p>JavaScript cells can also contain Markdown and HTML content. In fact, this is how Observable's cell modes used to work. You might still see notebooks where a cell begins with a cryptic-looking <code>md&#96;</code> or <code>html&#96;</code>. This lets you include Markdown or HTML inside of a JavaScript cell, which can still be useful, but it is much easier now to just change the cell mode using the menu on the left side of the cell.</p>

## Next Steps

Now that you're familiar with cell types on Observable, learn about its [reactive data flow model](https://observablehq.com/@observablehq/learning-observable-reactive-dataflow?collection=@observablehq/intro-to-observable).

<figure>
  <img
    class="screenshot w-50"
    src="/learn/learn-cell-modes/new-users-course-sm-cell-modes@1.png" alt="An illustration of some data and software related items."
  />
</figure>