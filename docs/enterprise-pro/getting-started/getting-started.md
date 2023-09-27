# Enterprise & Pro Team Onboarding: Getting started

<figure>
  <img
    style="margin:20px auto;max-width: 90%"
    src="/enterprise-pro/getting-started/intro-to-notebooks.png" alt="Illustration of a hands writing in a notebook"
  />
</figure>

When working in Observable, there is an abundance of platform features, libraries, community examples, and reusable code right at your fingertips. What teams often need to get started, however, are the essentials: a place to quickly explore and visualize data, add context, and share information with teams and decision makers. In this section, we introduce some essentials: (1) basics of working in Observable notebooks, (2) Observable Plot for data visualization, (3) adding interactivity with Inputs, and (4) combining the pieces into a basic dashboard.

## The Notebook

Observable notebooks are __interactive, editable documents defined by code__. In notebooks, you can combine formatted text (in markdown), code (JavaScript, SQL, HTML), and outputs (e.g. customized data tables and visualizations), then share your work with teammates and stakeholders. 

A notebook is both a final product for presentation, and a large blank canvas for trying out ideas and calculations. How do you start? By creating **cells**. Cells are where you place content — text, JavaScript code, or other instructions.

<figure>
  <img
    style="margin:20px auto;max-width: 90%"
    src="/enterprise-pro/getting-started/cells.jpg" alt="Illustration of a hands writing in a notebook"
  />
</figure>

We have many different [cell types](https://observablehq.com/@observablehq/adding-cells?collection=@observablehq/notebook-fundamentals) for you to choose from. Our Add Cell menu, which appears when you click the plus (<span style="color:gray; font-size: 18px"><b>+</b></span>) symbol in the left margin of a notebook, allows you to see the various cell types as well as helpful snippets of code to get you started.


<figure>
  <img
    style="margin-left:20px;max-width: 60%"
    src="/enterprise-pro/getting-started/addCellMenu_v3.png" alt="Screenhot of the opened add cell menu"
  />
  <figcaption>Insert new cells of any kind from the <strong>add cell menu</strong>.
</figcaption>
</figure>

With the Add Cell menu open, you can start typing and a search input appears. Press `Return` as soon as you find a match to insert your new cell. 

<figure>
  <img
    style="margin-left:20px;max-width: 60%"
    src="/enterprise-pro/getting-started/search-3.png" alt="Screenhot of the opened add cell menu with the word bar typed into the search field, showing all items containing the word bar"
  />
  <figcaption>You can quickly search anytime the menu is open by typing in a keyword or two.
</figcaption>
</figure>

This video demonstrates how to add a visualization snippet to your notebook using the Add Cell menu.

<video
    style="border-radius:5px;box-shadow:0 4px 12px rgba(0,0,0,0.15), 0 0 0 1px rgba(0, 0, 0, 0.1);margin-left:27px;margin-bottom:40px;max-width: 80%"
    src="/enterprise-pro/getting-started/cellMenuExample.mov" alt="Video screenshot of Observable notebook, showing selection of a line chart code snippet from the Add Cell menu. A new cell with starter code appears, then the coder replaces the example Apple stock data with subway ridership data to create an updated chart of ridership over time."
    autoplay loop controls = "false">
</video>

By default, new cells — with the exception of markdown cells — are "pinned," meaning that the code is revealed below the output. To hide your code while still keeping outputs visible, click on the pin icon to the left of your cell. 

<video
    style="border-radius:5px;box-shadow:0 4px 12px rgba(0,0,0,0.15), 0 0 0 1px rgba(0, 0, 0, 0.1);margin-left:27px;margin-bottom:40px;max-width: 80%"
    src="/enterprise-pro/getting-started/pinCell.mov" alt="Video screenshot of Observable notebook, showing the pin icon being turned on and off to pin or unpin the cell."
    autoplay loop controls = "false">
</video>


To learn more, check out our collection on [notebook fundamentals](https://observablehq.com/collection/@observablehq/notebook-fundamentals).

## Observable Plot

The [Observable Plot](https://observablehq.com/@observablehq/plot) JavaScript library lets you quickly build and customize data visualizations. As you saw in the previous example, code snippets are provided in the [Add Cell menu](https://observablehq.com/@observablehq/adding-cells?collection=@observablehq/notebook-fundamentals) as a starting point for many common chart types to get you up-and-running quickly with your own visualizations by substituting your data and variables.

Here's an example of a scatterplot with linear regression, created with Observable Plot.

<figure>
  <img
    style="margin:20px auto;max-width: 90%"
    src="/enterprise-pro/getting-started/penguins.svg" alt="Scatterplot of culmen length by culmen depth for three penguin species. Linear trendlines are added to each, revealing similar positive linear trends between culmen length and depth for chinstrap, gentoo and Adelie penguins."
  />
</figure>

```js
Plot.plot({
  marks: [
    Plot.dot(penguins, {x: "culmen_length_mm", y: "culmen_depth_mm", stroke: "species"}), // try changing "stroke" to "fill"
    Plot.linearRegressionY(penguins, {x: "culmen_length_mm", y: "culmen_depth_mm", stroke: "species"})
  ]
})
```

We have many examples of Plot visualizations that you can reuse for your own analyses. Our interactive documentation covers all of the core concepts and functions you'll need to become a Plot expert. These links will help you get started:

- [Observable Plot](https://observablehq.com/plot)
- [What is Plot?](https://observablehq.com/plot/what-is-plot)
- [Plot examples gallery](https://observablehq.com/@observablehq/plot-gallery)

## Observable Inputs

[Observable Inputs](https://observablehq.com/@observablehq/inputs) are lightweight interface components — buttons, sliders, dropdowns, tables, and the like — that help you explore data and build interactive displays. A number of inputs snippets are included in the cell menu. Generally, the process for adding interactivity to a visualization using inputs will take two steps:

First, create the input, which will update a value based on user selection. For example, the Input slider below updates a value, stored as `myVal`:

<iframe width="100%" height="519" frameborder="0"
  src="https://observablehq.com/embed/@observablehq/interaction-examples@16?cells=viewof+myVal%2CcarsPlot"></iframe>

In the Plot code shown below, dot radius (`r`) is linked to the `myVal` Inputs value.

```js
carsPlot = Plot.plot({
  marks: [
    Plot.dot(cars, {
      x: "power (hp)",
      y: "economy (mpg)",
      fill: "steelblue",
      opacity: 0.5, 
      r: myVal
    })
  ]
})
```

Check out our [official docs on Observable Inputs](https://observablehq.com/@observablehq/inputs) to learn more. 

## Dashboards

Now that you know how to create new cells, data visualizations and inputs, combine your knowledge of Observable to create a dashboard. Below is an example dashboard built with Observable Plot and Observable Inputs. One change you'll notice is that the visualizations are stored as functions, which allows for easier reuse. This is covered more thoroughly in our section on [reusing code](https://observablehq.com/d/71b6812e438d9f14?collection=@observablehq/enterprise-training-curriculum). 

<iframe width="100%" height="737" frameborder="0"
  src="https://observablehq.com/embed/@observablehq/interaction-examples@28?cells=dashboard"></iframe>

The examples in this notebook use curated datasets that are already stored and ready-to-use in Observable. In your own work, you'll need to access data in local or cloud files, in secure databases, or from other sources. Continue to our next section to learn about [securely connecting to data](/enterprise-pro/connecting-to-data/connecting-to-data).

<figure>
  <img
    style="margin-left:20px;width:184px"
    src="/enterprise-pro/getting-started/small-data-connect.png" alt="Screenhot of the opened add cell menu with the word bar typed into the search field, showing all items containing the word bar"
  />
</figure>
