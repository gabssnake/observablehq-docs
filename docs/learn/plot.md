# Observable Plot

---

<figure>
  <img
    class="screenshot w-80"
    src="./assets/new-users-course-header-plot.png" alt="An illustration of data related items with hands pointing at and gesturing at data representations."
  />
  <figcaption></figcaption>
</figure>

---

The [Observable Plot](https://observablehq.com/@observablehq/plot) JavaScript library lets you quickly build and customize data visualizations. Code snippets for many common chart types are provided in the [Add Cell menu](https://observablehq.com/@observablehq/adding-cells?collection=@observablehq/notebook-fundamentals) to get you up-and-running quickly with your own visualizations by substituting your data and variables.

Here's an example of a scatterplot with linear regression, created with Observable Plot:

<figure>
  <img
    class="screenshot w-80"
    src="./assets/obsPlot.png" alt="A screenshot of an open JavaScript cell with three different color linear regression lines overlayed over the same three colors of data points. The code in the code section of the cell shows the code required to create the linear regression."
  />
  <figcaption>An example of a scatterplot with linear regression, created using Observable Plot. There is code in the bottom part of the cell while the top part of the cell shows the results of the run code below. </figcaption>
</figure>

Here's the code to try it out yourself:

```js
Plot.plot({
  marks: [
    Plot.dot(penguins, {x: "culmen_length_mm", y: "culmen_depth_mm", stroke: "species"}), // try changing "stroke" to "fill"
    Plot.linearRegressionY(penguins, {x: "culmen_length_mm", y: "culmen_depth_mm", stroke: "species"})
  ],
  ariaLabel: "Penguin culmen dimensions",
  ariaDescription: "Scatterplot of culmen length by culmen depth for three penguin species. Linear trendlines are added to each, revealing similar positive linear trends between culmen length and depth for chinstrap, gentoo and Adelie penguins."
})
```

## Building charts with Plot from code snippets

To get started quickly with Observable Plot, search for then select an existing code snippet from the Add Cell menu. Snippets for many common chart types are included (e.g. scatterplots, line charts, ordered bar graphs, histograms, area charts and more). Once you've selected the right chart type, starter code will be added to a new cell. Replace the fields with your own to get a view of your own data, as shown below.

<div style="max-width: 700px; border-radius: 5px; overflow: hidden; padding: 1rem;">
    <video src="./assets/line-chart-sales.mp4" alt="Screen capture showing how to create a line chart with Plot snippets in Observable. User navigates to Add Cell menu, searches for a line chart, and selects to insert the code snippet into the notebook. Then, they update the data name and variables to create a plot with the new data." style="width: 100%; border-radius: 5px; box-shadow: 3px 3px 10px #ccc;" autoplay playsinline loop muted></video>
</div>

## Analysis in Plot

While you can use Plot to draw the result of analysis that you do in other cells (or elsewhere entirely), data transformation can be specified directly in Plot, with a variety of option transforms. For example, the `binX()` or `binY()` transform in Plot "groups quantitative data—continuous measurements such as heights, weights, or temperatures—into discrete bins. You can then compute summary statistics for each bin..."

The example below shows how the code using `binX()` is used to create a histogram, by finding counts of the "weight" variable value within discrete bins, then plotting those counts as bar heights (using `Plot.rectY`):

<figure>
  <img
    class="screenshot w-80"
    src="./assets/plotHistogram.png" alt="A screenshot of an open JavaScript cell in Observable with a histogram counting the number of athletes that fall into different weight bins across the X axis and the number of the athletes in each bin on the Y axis. The code for creating the histogram is shown below the chart in the code section of the cell."
  />
  <figcaption>A histogram created using Observable Plot.</figcaption>
</figure>

Here's the code to try it out yourself:

```js
Plot.plot({
  marks: [
    Plot.rectY(olympians, Plot.binX({y: "count"}, {x: "weight"})),
    Plot.ruleY([0])
  ]
})
```

It's also possible to create and use your *own* functions to transform the data being visualized in your chart. Learn more about transforming and summarizing data in the[ Bin Transform](https://observablehq.com/@observablehq/plot-bin) documentation. 

## Plot customization

With your base chart created you may want to customize it by adding a legend, transforming axis scales, updating a color scheme, changing labels, or any number of other necessary tweaks and additions. Observable Plot employs a layered grammar of graphics, so updates are achieved by adding and customizing an appropriate layer to your Plot code. 

The scatterplot below has been customized in a number of different ways. Some elements are customized to constants values (e.g. `symbol: "triangle"`), some to variable values (e.g. `r: "power (hp)"`), and some new elements are added (e.g. grid lines and legend). It also combines multiple marks (`Plot.dot` and `Plot.ruleY`). 

<figure>
  <img
    class="screenshot w-80"
    src="./assets/plotCustom.png" alt="A screenshot of a closed JavaScript cell in Observable that has been customized using some of the different customizations available with Plot."
  />
  <figcaption>A customized chart with many different custom attributes.</figcaption>
</figure>

Here is the code if you would like to try it out yourself:

```js
Plot.plot({
  marks: [
    Plot.dot(cars, {
      x: "power (hp)",
      y: "economy (mpg)",
      fill: "economy (mpg)",
      r: "power (hp)",
      symbol: "triangle"
    }),
    Plot.ruleY([0])
  ],
  x: { label: "Horsepower" },
  y: { label: "Gas mileage (mpg)" },
  color: { scheme: "magma", legend: true, label: "mpg" },
  grid: true
})
```

And, adding interactivity to charts made in Observable Plot is quick and painless using Observable Inputs. Learn more about it in the [User inputs and interactivity](https://observablehq.com/d/ec4297da21238b6b?collection=@observablehq/intro-to-observable) section of this course, and in our [Inputs documentation](https://observablehq.com/@observablehq/inputs). 

## Learn more about Observable Plot

Our interactive documentation covers all of the core concepts and functions you'll need to become a Plot expert, and we have many examples of Plot visualizations that you can reuse for your own analyses. These links will help you get started:

- [Observable Plot](https://observablehq.com/@observablehq/plot)
- [Plot Cheatsheets](https://observablehq.com/@observablehq/plot-cheatsheets)
- [Plot Examples](https://observablehq.com/collection/@observablehq/plot-examples)
- Quick Guides: [Exploring Olympic athletes data](https://observablehq.com/guide/athletes) and 
[Electricity use vs. temperature](https://observablehq.com/guide/electricity)

With Observable's Data Table cells, SQL cells, and Plot in your toolkit, you can quickly get up-and-running with interactive data exploration and visualization.