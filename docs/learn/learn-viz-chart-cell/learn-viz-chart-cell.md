# Data visualization with Chart cell

---

<figure>
  <img
    style="border-radius:2px;box-shadow:0 4px 12px rgba(0,0,0,0.15), 0 0 0 1px rgba(0, 0, 0, 0.1);margin-left:2px;margin-bottom:40px;max-width: ${width}"
    src="/learn/learn-viz-chart-cell/charCell.png" alt="An illustration of data related items."
  />
  <figcaption></figcaption>
</figure>

---

In our last tutorial in this series, we looked at different ways of [getting data into Observable](https://observablehq.com/@observablehq/learning-observable-getting-data-into-observable?collection=@observablehq/intro-to-observable) and how we could start working with this data using the [Data table cell](https://observablehq.com/@observablehq/data-table-cell):

<figure>
  <img
    style="border-radius:2px;box-shadow:0 4px 12px rgba(0,0,0,0.15), 0 0 0 1px rgba(0, 0, 0, 0.1);margin-left:2px;margin-bottom:40px;max-width: ${width}"
    src="/learn/learn-viz-chart-cell/carsDTC.png" alt="A screenshot of an open Data table cell with data about different cars shown."
  />
  <figcaption>A <b>Data table cell</b> synced to a data source.</figcaption>
</figure>

The Data table cell provides us with a tabular view of the data and functionality that enables some data wrangling. Our next step might be to visualize our data.

In Observable, the easiest way to get going with data visualization is the **Chart cell**. The **Chart cell** is a specialty cell type in Observable that allows users to build, update, and customize charts with no code required. It uses [Observable Plot](https://observablehq.github.io/plot/) under the hood, but abstracts away the code and replaces it with an intuitive UI to get moving fast. With point-and-click menus for variable selection, aggregation, aesthetics (e.g. color mapping, axis labels, margins) and more, the **Chart cell** lets anyone—regardless of programming experience—quickly create and iterate on data visualizations.

## Adding a Chart cell

Here is how to add a **Chart cell**. There are four options. First, you can select the **Chart cell button** in the **Add cell bar** below any cell:

<figure>
  <img
    style="border-radius:2px;box-shadow:0 4px 12px rgba(0,0,0,0.15), 0 0 0 1px rgba(0, 0, 0, 0.1);margin-left:2px;margin-bottom:40px;max-width: ${width}"
    src="/learn/learn-viz-chart-cell/chartFromAddCellBar.png" alt="A zoomed in screenshot of the Observable Add cell bar with the Chart button highlighted with a red rectangle outline."
  />
  <figcaption>The Observable <b>Add cell bar</b> with the Chart button highlighted.</figcaption>
</figure>

or, second, you can refer to the top of the **Add cell menu**, which you can access by selecting the `+` button between any two cells:

<figure>
  <img
    style="border-radius:2px;box-shadow:0 4px 12px rgba(0,0,0,0.15), 0 0 0 1px rgba(0, 0, 0, 0.1);margin-left:2px;margin-bottom:40px;max-width: ${width}"
    src="/learn/learn-viz-chart-cell/chartFromAddCellMenu.png" alt="A screenshot of an open Add cell menu with the Chart button highlighted with a red rectangle outline."
  />
  <figcaption>The Observable <b>Add cell menu</b> with the Chart button highlighted.</figcaption>
</figure>

Third, you should see a Chart option as the top option when you begin searching for "chart" in the **Add cell menu** search bar:

<figure>
  <img
    style="border-radius:2px;box-shadow:0 4px 12px rgba(0,0,0,0.15), 0 0 0 1px rgba(0, 0, 0, 0.1);margin-left:2px;margin-bottom:40px;max-width: ${width}"
    src="/learn/learn-viz-chart-cell/chartHighlighted.png" alt="A screenshot of a user typing in 'chart' into the Add cell menu search bar and the top result being a 'Chart' option highlighted in blue."
  />
  <figcaption>The <b>Add cell menu</b> with <b>Chart cell</b> option highlighted as the top choice after being typed in the search bar.</figcaption>
</figure>

These first three options will create a Chart cell for you:

<figure>
  <img
    style="border-radius:2px;box-shadow:0 4px 12px rgba(0,0,0,0.15), 0 0 0 1px rgba(0, 0, 0, 0.1);margin-left:2px;margin-bottom:40px;max-width: ${width}"
    src="/learn/learn-viz-chart-cell/chartNoData.png" alt="A screenshot of a Chart cell but with no data loaded in yet."
  />
  <figcaption>The <b>Chart cell</b> with no data source selected.</figcaption>
</figure>

Once you select a data source, the Chart cell configuration panel is revealed:

<figure>
  <img
    style="border-radius:2px;box-shadow:0 4px 12px rgba(0,0,0,0.15), 0 0 0 1px rgba(0, 0, 0, 0.1);margin-left:2px;margin-bottom:40px;max-width: ${width}"
    src="/learn/learn-viz-chart-cell/chartNoSelection.png" alt="A screenshot of a Chart cell with data attached such that the chart configuration options are displayed."
  />
  <figcaption>The <b>Chart cell</b> with a data source selected</figcaption>
</figure>

The fourth and final way to create a **Chart cell** is only possible when the cell immediately before in your notebook contains data. For instance, if the previous cell is a **Data table cell** synced to data, then an available option is to create a **Chart cell** from the data in that **Data table cell**. In that scenario, you will see a **Create Chart button** highlighted in gold as a suggestion for what to do with the cell in the **Add cell menu**:

<figure>
  <img
    style="border-radius:2px;box-shadow:0 4px 12px rgba(0,0,0,0.15), 0 0 0 1px rgba(0, 0, 0, 0.1);margin-left:2px;margin-bottom:40px;max-width: 400px"
    src="/learn/learn-viz-chart-cell/createChartButton.png" alt="A screenshot of a Data table cell with a red arrow pointing to the following cell that has yet to be defined, the Add cell menu is opened with suggestions for what kind of cell to make and the option to create a chart is highlighted with a red rectangle outline."
  />
  <figcaption>A cell after a <b>Data table cell</b> with an option to create a chart.</figcaption>
</figure>

Select this button and a new **Chart cell** will be created in the next cell, already synced to the same data that was in the **Data table cell** above:

<figure>
  <img
    style="border-radius:2px;box-shadow:0 4px 12px rgba(0,0,0,0.15), 0 0 0 1px rgba(0, 0, 0, 0.1);margin-left:2px;margin-bottom:40px;max-width: 700px"
    src="/learn/learn-viz-chart-cell/chartAndData.png" alt="A screenshot of a Data table cell with a new Chart cell in the following cell synced to the data of the Data table cell."
  />
  <figcaption>A <b>Chart cell</b> created and already synced to the data from the previous <b>Data table</b> cell.</figcaption>
</figure>

## X, Y, and Mark fields

Now that you know how to create a **Chart cell**, let's bring it to life with some visualization. Let's first modify the X variable. Use the **X dropdown** to look at and select from existing fields in the data source:

<figure>
  <img
    style="border-radius:2px;box-shadow:0 4px 12px rgba(0,0,0,0.15), 0 0 0 1px rgba(0, 0, 0, 0.1);margin-left:2px;margin-bottom:40px;max-width: ${width}"
    src="/learn/learn-viz-chart-cell/xFieldOptions2.png" alt="A zoomed in screenshot of a data-backed Chart cell with the dropdown field for the list of options for axis X shown as open."
  />
  <figcaption>Viewing the dropdown options for the <b>X</b> field.</figcaption>
</figure>

Suppose we pick one of the fields, let's say _economy (mpg)_. The result is a histogram of observation counts, with _economy (mpg)_ as the X variable and a reducer on the Y axis counting the observations of vehicles in each of the X-axis bins. Both the reducer on the Y axis (_Auto: count_) and the mark designating the type of chart (_Auto: bar_) are automatically selected to create the visualization:

<figure>
  <img
    style="border-radius:2px;box-shadow:0 4px 12px rgba(0,0,0,0.15), 0 0 0 1px rgba(0, 0, 0, 0.1);margin-left:2px;margin-bottom:40px;max-width: ${width}"
    src="/learn/learn-viz-chart-cell/histogramEco.png" alt="A screenshot of an open chart cell with a histogram in the presentation section and economy chosen as the X axis value. The Y axis option (highlighted by a red rectangle outline) is automatically set to reduce according to count, while the mark option (highlighted by a red rectangle outline) for the chart is automatically set to bar."
  />
  <figcaption>A histogram counting cars by their fuel economy created automatically when choosing economy as the value of the X axis.</figcaption>
</figure>

The histogram lets us explore the distribution of fuel economy across all cars in the dataset. A bar chart (or histogram if the field is continuous) of counts is the default chart produced any time just the X or Y field is selected in the chart cell, as indicated by the reducer <svg style="display: inline !important; vertical-align: baseline;" width="12" height="12" viewBox="2 2 12 12" fill="none" class="mr1"><path fill-rule="evenodd" clip-rule="evenodd" d="M4 4.70711C4 3.7643 4.7643 3 5.70711 3H10C11.1046 3 12 3.89543 12 5V6H10V5H6.41421L8 6.58579C8.78105 7.36683 8.78105 8.63316 8 9.41421L6.41421 11H10V10H12V11C12 12.1046 11.1046 13 10 13H5.70711C4.7643 13 4 12.2357 4 11.2929C4 10.8401 4.17986 10.4059 4.5 10.0858L6.58579 8L4.5 5.91421C4.17986 5.59407 4 5.15986 4 4.70711Z" fill="currentColor"></path></svg> on the Y axis here showing "Auto: count". 

If we add a field for the Y axis, it will automatically take away the count reducer on the Y axis and replace it with the field chosen. At this point it may likely update the chart to a type it determines to be more useful. In this case it chooses a scatter plot (**Mark field**: _Auto: dot_) for visualizing the relationship between fuel economy (X axis) and 0-60 mph times (Y axis):

<figure>
  <img
    style="border-radius:2px;box-shadow:0 4px 12px rgba(0,0,0,0.15), 0 0 0 1px rgba(0, 0, 0, 0.1);margin-left:2px;margin-bottom:40px;max-width: ${width}"
    src="/learn/learn-viz-chart-cell/EcoBySpeedScatter.png" alt="A screenshot of an open Chart cell with economy chosen as the option for the X axis and 0-60 speed chosen as the option for the Y axis (highlighted by a red rectangle outline). The mark option is automatically on dot to make the final visualization a scatterplot."
  />
  <figcaption>A scatter plot with fuel economy along the X axis with 0-60 speed along the Y axis.</figcaption>
</figure>

We expect the **Chart cell** to pick a reasonable type of chart based on the type of data selected for each field. We can also change the **Mark dropdown** to something other than what is automatically selected. For example, we can override _Auto: dot_ here to a line chart by changing the value of the **Mark dropdown** to _line_, which quickly reveals that the _dot_ mark is the better choice for this data:

<figure>
  <img
    style="border-radius:2px;box-shadow:0 4px 12px rgba(0,0,0,0.15), 0 0 0 1px rgba(0, 0, 0, 0.1);margin-left:2px;margin-bottom:40px;max-width: ${width}"
    src="/learn/learn-viz-chart-cell/ecoBySpeedLine@1.png" alt="A screenshot of an open Chart cell with economy chosen for the X axis, 0-60 speed chosen as the option for the Y axis and line automatically chosen for the Mark option (highlighted by a red rectangle outline). The data is not legible as a line chart."
  />
  <figcaption>A line chart with fuel economy along the X axis with 0-60 speed along the Y axis.</figcaption>
</figure>

## Color, Size, and Facet channels

### Color channel

In addition to choosing X, Y and Mark variables from their respective dropdowns, you can further choose a color field from the **Color dropdown**. This will visualize the differences among the values of the chosen field as differences in color.

Below, we choose the _power (hp)_ field, which will distribute colors in a continuous gradient across the dots of our scatter plot according to how much power the car has:

<figure>
  <img
    style="border-radius:2px;box-shadow:0 4px 12px rgba(0,0,0,0.15), 0 0 0 1px rgba(0, 0, 0, 0.1);margin-left:2px;margin-bottom:40px;max-width: ${width}"
    src="/learn/learn-viz-chart-cell/powerByColorScatter.png" alt="A screenshot of an open Chart cell with economy chosen for the X axis, 0-60 speed chosen for the Y axis and power chosen for the color dimension. The resulting scatterplot is in the presentation part of the cell showing that the more powerful cars have worse fuel economy and are faster."
  />
  <figcaption>The scatter plot updated with dot color distributed according to amount of power (hp).</figcaption>
</figure>

From this it is easy to see, albeit unsurprising, that, in general, the more power, the faster and the less economical the car. 

### Size channel

The size channel controls the size of dots based upon the value of a selected field. In this case, we choose _weight (lb)_ from our **Size dropdown**, which lets us additionally explore how weight relates to a car's velocity, power, and fuel economy:


<figure>
  <img
    style="border-radius:2px;box-shadow:0 4px 12px rgba(0,0,0,0.15), 0 0 0 1px rgba(0, 0, 0, 0.1);margin-left:2px;margin-bottom:40px;max-width: ${width}"
    src="/learn/learn-viz-chart-cell/weightBySize.png" alt="A screenshot of an open Chart cell with economy chosen for the X axis, 0-60 speed chosen for the Y axis, power chosen for the color dimension, and weight to be represented using the size of the dots. The resulting scatterplot is in the presentation part of the cell showing that the heavier the car the faster the car is, in general."
  />
  <figcaption>The scatterplot updated with dot size distributed according to weight (lb).</figcaption>
</figure>

Interestingly, maybe somewhat surprisingly, we can see that higher weight tends to correlate with faster speeds.

### Facet channel

Sometimes it is helpful to facet a chart according to a variable on either the X or Y axis, for example to explore relationships or distributions by a certain category. Here, we have a histogram showing how power is distributed amongst the cars by count. 

We use the **Facet Y dropdown** to choose _cylinders_ while choosing _power (hp)_ on the X axis and the reducer _Auto: count_ to to utilize the Y axis for counting the cars in each bin:

<figure>
  <img
    style="border-radius:2px;box-shadow:0 4px 12px rgba(0,0,0,0.15), 0 0 0 1px rgba(0, 0, 0, 0.1);margin-left:2px;margin-bottom:40px;max-width: ${width}"
    src="/learn/learn-viz-chart-cell/facetedByCyl@1.png" alt="A screenshot of an open chart cell featuring a histogram faceted by number of cylinders on its Y axis shows a pattern of cars getting more powerful as they increase the number of cylinders."
  />
  <figcaption>A histogram of power (hp) faceted by number of cylinders.</figcaption>
</figure>

In this view, you can see there is a general trend cars having higher power the greater the number of cylinders they have.

## Using reducers

Instead of just visualizing the raw data values with **Chart cell**, you may want to visualize summary statistics (e.g. mean values or sums) for one or more variables. You can do this in the Chart cell with reducers. For X, Y, Color, and Size, you can pick a reducer from the <svg style="display: inline !important; vertical-align: baseline;" width="12" height="12" viewBox="2 2 12 12" fill="none" class="mr1"><path fill-rule="evenodd" clip-rule="evenodd" d="M4 4.70711C4 3.7643 4.7643 3 5.70711 3H10C11.1046 3 12 3.89543 12 5V6H10V5H6.41421L8 6.58579C8.78105 7.36683 8.78105 8.63316 8 9.41421L6.41421 11H10V10H12V11C12 12.1046 11.1046 13 10 13H5.70711C4.7643 13 4 12.2357 4 11.2929C4 10.8401 4.17986 10.4059 4.5 10.0858L6.58579 8L4.5 5.91421C4.17986 5.59407 4 5.15986 4 4.70711Z" fill="currentColor"></path></svg> menu above the field dropdown. The following reducing functions can be applied: count, distinct, sum, min, max, mean, median and mode. 

Below we apply the mean reducer to the **Y axis field** (_weight (lb)_) to visualize the average car weight for each of 3, 4, 5, 6, and 8 cylinders.

<figure>
  <img
    style="border-radius:2px;box-shadow:0 4px 12px rgba(0,0,0,0.15), 0 0 0 1px rgba(0, 0, 0, 0.1);margin-left:2px;margin-bottom:40px;max-width: ${width}"
    src="/learn/learn-viz-chart-cell/reducedByMean.png" alt="A screenshot of an open chart cell with the Y axis reducer set to 'mean' and outlined by an overlayed red rectangle. The Y axis is set to weight while the X axis and color channel is set to cylinders. In general, it can be seen that the heavier the car the more cylinders it has, with the 3 cylinder cars standing out as an exception to the trend."
  />
  <figcaption>A colored bar chart showing average weight of the cars of each engine type - 3, 4, 5, 6, or 8 cylinders.</figcaption>
</figure>

From this, we can see that the 3 cylinder vehicles do not conform to the pattern the others are beholden. While the 4-8 cylinder vehicles follow a pattern of getting heavier the more cylinders are present, the 3 cylinders are heavier than the 4 cylinders on average.

## Customization

There are several options to customize the chart dimensions and other chart features using the **Customization pane**. Open the customization pane by clicking the **Customize button** (<svg style="display: inline !important;" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" transform="translate(0,3)"><line x1="12" y1="11" x2="12" y2="15" stroke="black" stroke-width="2"/><line x1="4" y1="9" x2="4" y2="15" stroke="black" stroke-width="2"/><circle cx="12" cy="9" r="2" stroke="black" stroke-width="2"/><circle cx="4" cy="7" r="2" stroke="black" stroke-width="2"/><line x1="12" y1="1" x2="12" y2="7" stroke="black" stroke-width="2"/><line x1="4" y1="1" x2="4" y2="5" stroke="black" stroke-width="2"/></svg>) in the top right of the cell header. From there, you can customize chart height and width, margins, insets, add or remove a legend, update _X_ and _Y_ labels, adjust the color scheme, add a caption, and more:

<figure>
  <img
    style="border-radius:2px;box-shadow:0 4px 12px rgba(0,0,0,0.15), 0 0 0 1px rgba(0, 0, 0, 0.1);margin-left:2px;margin-bottom:40px;max-width: 400px"
    src="/learn/learn-viz-chart-cell/customChart.png" alt="A screenshot of the Chart cell Customization pane."
  />
  <figcaption>Customization pane.</figcaption>
</figure>

These changes produce real-time results:

<figure>
  <img
    style="border-radius:2px;box-shadow:0 4px 12px rgba(0,0,0,0.15), 0 0 0 1px rgba(0, 0, 0, 0.1);margin-left:2px;margin-bottom:40px;max-width: ${width}"
    src="/learn/learn-viz-chart-cell/customizedBar.png" alt="A screenshot of an open Chart cell with the same colored bar chart as pictured above but with a different color scheme and margins than the last chart."
  />
  <figcaption>The colored bar chart with updates from the Customization pane.</figcaption>
</figure>

## Convert to JavaScript

The **Chart cell** uses the JavaScript library [Plot](https://observablehq.com/plot/) under the hood. Because of this, it can easily convert your already made **Chart cell** to JavaScript Plot code. To do this, select the gold **Convert to JavaScript button** in the following **Add cell menu** of the chart after the **Chart cell**:

<figure>
  <img
    style="border-radius:2px;box-shadow:0 4px 12px rgba(0,0,0,0.15), 0 0 0 1px rgba(0, 0, 0, 0.1);margin-left:2px;margin-bottom:40px;max-width: ${width}"
    src="/learn/learn-viz-chart-cell/convertToJs.png" alt="A screenshot of a the open chart cell from above with a new cell being created below with the option to convert the previous chart cell into JavaScript highlighted with an overlay of a red rectangle outline."
  />
  <figcaption>Select the <b>Convert to JavaScript button</b> in the <b>Add cell menu</b>.</figcaption>
</figure>

A duplicate cell will appear immediately below the one you just converted, exposing the entire Plot code used to create the chart:

<figure>
  <img
    style="border-radius:2px;box-shadow:0 4px 12px rgba(0,0,0,0.15), 0 0 0 1px rgba(0, 0, 0, 0.1);margin-left:2px;margin-bottom:40px;max-width: ${width}"
    src="/learn/learn-viz-chart-cell/convertedToJs.png" alt="A screenshot of the converted Chart cell with JavaScript Plot code in the code section instead of the chart cell configuration options."
  />
  <figcaption>The converted <b>Chart cell</b> with JavaScript Plot code in the code section.</figcaption>
</figure>

With the Plot code exposed, you can then make even further customizations. Please refer to the [Plot docs](https://observablehq.github.io/plot/) for more information on how to customize this further using Plot code and/or check out our [next tutorial in this series on Observable Plot](https://observablehq.com/@observablehq/learning-observable-observable-plot?collection=@observablehq/intro-to-observable) to start getting a feel for the functionality. 

If you want some hands-on guidance using the **Chart cell**, check out [this tutorial in an Observable notebook](https://observablehq.com/@observablehq/get-started-with-chart-cell), where you can actually create data visualizations using the Chart cell as shown here. Or, if you would like to see our official documentation on chart cell, please see [Introduction to the Chart cell](https://observablehq.com/@observablehq/chart-cell?collection=@observablehq/notebook-fundamentals).