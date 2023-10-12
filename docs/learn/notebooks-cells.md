# Notebooks & cells

---

<figure>
  <img
    class="screenshot w-80"
    src="./assets/new-users-course-notebooks.png" alt="An illustration of data related items with a hand using a pencil making notes."
  />
  <figcaption></figcaption>
</figure>

---

Notebooks consist of cells. Here is an example of a cell in a notebook:

<figure>
  <img
    class="screenshot w-80"
    src="./assets/cellText.png" alt="An open text cell with text in the code section beneath the code rendered nicely in the presentation section above."
  />
  <figcaption>An example of how a text cell works in Observable.</figcaption>
</figure>

A cell can contain code, like in this example:

<figure>
  <img
    class="screenshot w-80"
    src="./assets/calCell.png" alt="An open JavaScript cell with a math formula 1 + 2 in the code section and the resulting value of the code, 3, in the presenation section above."
  />
  <figcaption>An example of some code in a JavaScript cell.</figcaption>
</figure>

The content of the cell is the code, in this case the simple calculation `1+2`, and on Observable the result is shown above the code.

After typing into a cell, whether it's code or text, you need to run the cell to see the result. You do that by clicking the play button in the top right corner of the cell, or by pressing <Keys set="Shift-Enter" />.

Cells can contain computations of any complexity, and they can produce much more than just numbers. Here's an example of a chart (don't worry about the details, we'll get to Plot [later](https://observablehq.com/d/79f43da4b58ef64e?collection=@observablehq/intro-to-observable)):

<figure>
  <img
    class="screenshot w-80"
    src="./assets/chartCell.png" alt="An open cell with Plot code in the code section and a rendered chart in the presentation section above."
  />
  <figcaption>An example of a scatterplot in an Observable cell.</figcaption>
</figure>

A cell can also contain interactive elements such as sliders, radio buttons, dropdown boxes to select an item, and more:

<figure>
  <img
    class="screenshot w-80"
    src="./assets/sliderCell.png" alt="An open JavaScript cell with code of an input defining the variable `amount` using a slider. In the presentation section above, the slider is set to the value 50."
  />
  <figcaption>An example of a slider input in a JavaScript cell.</figcaption>
</figure>

## Cell types

Text cells are written in plain text with markup for styling. You can have italics or bold text, hyperlinks, etc. The markup language we use is called Markdown. Text cells can also include code. To get the `amount` variable to show up in text, you type `${amount}` as shown here:

<figure>
  <img
    class="screenshot w-80"
    src="./assets/interpolateCell.png" alt="An open text cell with an interpolated reference to a variable at the end of some text 'The amount is' in the code section. In the presentaion section, this renders the same text but with the value of the interpolated variable where the reference to the interpolated variable had been in the code section."
  />
  <figcaption>An example of a variable defined in another cell being interpolated in a text cell.</figcaption>
</figure>

and the value of the variable will be rendered.

This is not limited to text—you can use the values of named cells in calculations. Perhaps we want to multiply the amount by some other number and assign that to a new variable, named `yearly`.

<figure>
  <img
    class="screenshot w-80"
    src="./assets/defineVariable.png" alt="An open JavaScript cell with some code defining the variable yearly in the code section. The newly defined variable relies on a variable for its calculation, `amount` defined elsewhere. In the presentation section, the value of the calculation is shown."
  />
  <figcaption>An example of using a variable in a JavaScript cell that was defined in another cell.</figcaption>
</figure>

## Reactive code execution

While dragging the slider to change the value, you may have noticed that all other values in the notebook updated automatically without you having to re-run any code in individual cells. If you're familiar with spreadsheets, that might not seem terribly surprising, but if you're more used to traditional programming, it probably is.

Observable uses a [_reactive_ model of code execution](https://observablehq.com/@observablehq/how-observable-runs). What that means is that it knows how different cells depend on one another in a notebook. When any cell is updated, all cells that depend on it are automatically re-run. This works with any number of cells, and their order on the page doesn't matter.

The calculation below depends on the two controls that come after it. For some variety, we're showing a dropdown box and radio buttons here. The total amount of our simple compounding interest calculator changes when you change any of its parameters, whether they're defined before (like `amount`) or after the calculation:

<figure>
  <img
    class="screenshot w-80"
    src="./assets/interestCalc.png" alt="Three open cells that define an interest calculator. The total in the first cell is calculated using variables for length of the loan and interest rate defined in the following two cells."
  />
  <figcaption>An example of a calculation in one cell with variables defined in cells that come after.</figcaption>
</figure>

## Creating and deleting cells

Now that you've seen what cells are, you want to create your own! To create a new cell, hover over the left edge of the existing cells to reveal **+** buttons above and below. Clicking any of them will open the [_Add Cell_ menu](https://observablehq.com/@observablehq/adding-cells). You can select from the three main types of cells (JavaScript, Markdown, and HTML) as well as a wide range of useful templates for charts, inputs, tables, and more.

<div style="max-width: 640px; border-radius: 5px; overflow: hidden; padding: 1rem;">
    <video src="./assets/addCell@1.mp4" alt="User adds a new cell to a blank Observable notebook by clicking on the cell, opening up the cell menu, and clicking on a JavaScript cell. They then write 1 + 1 which computes the value 2." style="width: 100%; border-radius: 5px; box-shadow: 3px 3px 10px #ccc;" autoplay playsinline loop muted></video>
</div>

To delete a cell, click the three-dot menu in its left sidebar and select _Delete_. You can also click into the cell and then select the trash can button from the toolbar on the bottom of your browser window.

<div style="max-width: 640px; border-radius: 5px; overflow: hidden; padding: 1rem;">
    <video src="./assets/delete.mp4" alt="User deletes two cells in an Observable notebook, the first time with the cell options and the second time with the cell menu." style="width: 100%; border-radius: 5px; box-shadow: 3px 3px 10px #ccc;" autoplay playsinline loop muted></video>
</div>

## Pinning and moving cells

The little push pin icon you see next to an open cell allows you to _pin_ a cell, which means keeping it open. JavaScript cells are pinned by default, while Markdown and HTML cells are unpinned when you create them. You can change that for any cell by simply clicking the pin (for example, this Markdown cell is pinned). For JavaScript cells, we often want to show the code, which is why they are pinned by default. This isn't as important for text cells, but keeping them pinned can encourage others to edit or comment.

You can move cells by clicking and holding the mouse over the bar on the left of the cell (the pointer will turn into a hand icon). Hold down the mouse or track pad button to drag the cell to a new position in the notebook. A horizontal line indicates where the cell will end up when you drop it. As an alternative, the toolbar on the bottom of the browser lets you move a cell up or down by clicking the arrow buttons.

<div style="max-width: 640px; border-radius: 5px; overflow: hidden; padding: 1rem;">
    <video src="./assets/drag2.mp4" alt="User moves cells in the notebook by clicking to the left of a cell and dragging it up and down the page." style="width: 100%; border-radius: 5px; box-shadow: 3px 3px 10px #ccc;" autoplay playsinline loop muted></video>
</div>

To move multiple cells, click Select in the cell menu (three dot menu). This shows checkboxes for each cell, which lets you pick which ones to include. You can bulk move all selected cells at once using arrow buttons in the tool bar at the bottom of your browser window, delete them all using the trash can icon, or duplicate them using the duplicate button.

<div style="max-width: 640px; border-radius: 5px; overflow: hidden; padding: 1rem;">
    <video src="./assets/dragMultiple.mp4" alt="User moves multiple cells in a notebook at once by selecting each cell then using the up and down arrows to move them in the notebook." style="width: 100%; border-radius: 5px; box-shadow: 3px 3px 10px #ccc;" autoplay playsinline loop muted></video>
</div>

## Create a notebook

To create a new notebook, scroll to the top of any page on Observable and you will find a _New_ button in the top right. Clicking it presents you with a choice to create a blank notebook or to start from a number of templates, such as charts, data access to a number of services, curated datasets to explore, and more.

<div style="max-width: 640px; border-radius: 5px; overflow: hidden; padding: 1rem;">
    <video src="./assets/new.mp4" alt="User creates a new notebook by clicking on the 'New +' button on the top right hand corner of the page and then selects one of the notebook templates." style="width: 100%; border-radius: 5px; box-shadow: 3px 3px 10px #ccc;" autoplay playsinline loop muted></video>
</div>

You can share notebooks with others to edit together, or keep them to yourself. Notebooks can connect to a variety of data sources including local files, spreadsheets, APIs and for Enterprise and Pro accounts, cloud files and databases.