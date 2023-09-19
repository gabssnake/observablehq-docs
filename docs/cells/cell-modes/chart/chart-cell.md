# The Chart cell

The **Chart cell** provides a no-code option for building, exploring, and customizing charts with [Observable Plot](https://observablehq.com/@observablehq/plot). With point-and-click menus for variable selection, aggregation (e.g. mean, sum, or count), faceting, color mapping, and more, the Chart cell makes it possible for anyone—regardless of programming experience—to quickly create and iterate on data visualizations.

## Adding a Chart cell

To add a Chart cell, open the add cell menu by clicking the gray plus sign (<svg width="17" height="15" viewBox="-8.5 -7.5 17 15" stroke="currentColor" stroke-width="2" stroke-linecap="round" fill="none" style="position: relative; top: 2px; display: inline !important;"><path d="M0,-4.5V4.5M-4.5,0H4.5" class="jsx-7869de80898f8af0 "></path></svg>) in the left margin of a notebook. From there, two things can happen: 

1. If the previous cell in your notebook contains data (including in a JavaScript, data table, or SQL cell), you will see a suggestion to "Create chart" in gold in the add cell menu. Click to insert a new Chart cell using the previous cell's data.

2. If the previous cell in your notebook does _not_ contain data, search or navigate to "Chart" in the add cell menu. Click to insert an empty Chart cell, then choose an available data source (from a cell or attached file) using the drop down menu in the cell header.

The two add cell menu scenarios for inserting a Chart cell are shown below:

<figure>
  <img
    style="border-radius:2px;box-shadow:0 4px 12px rgba(0,0,0,0.15), 0 0 0 1px rgba(0, 0, 0, 0.1);margin-left:27px;margin-bottom:40px;max-width: ${width}"
    src="/cells/cell-modes/chart/chart-cell-add-cell-menu-point.png" alt="One screenshot showing two different add cell menu dropdown situations. The first on the left shows 'Create chart' in the 'Suggestions for orders' section of the dropdown in gold font. The second shows the search bar at the top of the dropdown with the word 'chart' typed in it and the Chart cell option as the first suggested."
  />
  <figcaption>Add cell menus for inserting a Chart cell into an Observable notebook. <b>Left:</b> Add cell menu with suggestion to create a Chart cell from data in the previous cell (in this case, the data is named <i>orders</i>). <b>Right:</b> Add cell menu without suggestion, with the Chart cell option highlighted.</figcaption>
</figure>

Once selected, a Chart cell is inserted into the notebook. A new (blank) Chart cell is shown below:

<figure>
  <img
    style="border-radius:2px;box-shadow:0 4px 12px rgba(0,0,0,0.15), 0 0 0 1px rgba(0, 0, 0, 0.1);margin-left:27px;margin-bottom:40px;max-width: ${width}"
    src="/cells/cell-modes/chart/blankChartCell.png" alt="A Chart cell with only a data source selected so that there is no chart rendered."
  />
  <figcaption>An example of a blank Chart cell with a data source.</figcaption>
</figure>

Choosing variables for X and/or Y reveals a chart above the cell:

<figure>
  <img
    style="border-radius:2px;box-shadow:0 4px 12px rgba(0,0,0,0.15), 0 0 0 1px rgba(0, 0, 0, 0.1);margin-left:27px;margin-bottom:40px;max-width: ${width}"
    src="/cells/cell-modes/chart/scatterChart.png" alt="A Chart cell with economy (mpg) chosen as the X variable and power (hp) chosen as the Y variable. The rendered chart above shows a scatterplot resulting from the calculations."
  />
  <figcaption>An example of a Chart cell with data source and chosen data dimensions for X and Y.</figcaption>
</figure>

To change the data source in the Chart cell, open the dropdown menu alongside the current data source and select an alternative source that exists in the notebook: 

<figure>
  <img
    style="border-radius:2px;box-shadow:0 4px 12px rgba(0,0,0,0.15), 0 0 0 1px rgba(0, 0, 0, 0.1);margin-left:27px;margin-bottom:40px;max-width: ${width}"
    src="/cells/cell-modes/chart/dataSource.png" alt="The same Chart cell featured in the previous screenshot but with the data source and data source dropdown highlighted with a red rectangle outline and an arrow pointing to it."
  />
  <figcaption>Change the data source easily with the data source dropdown.</figcaption>
</figure>

## Chart types

Under the hood, the Chart cell employs [Plot.auto](https://observablehq.com/@observablehq/plot-auto)—a special mark that automatically selects a mark type that best represents the given dimensions of the data according to some simple heuristics. Depending on selected variable types, the following chart types are currently possible in the Chart cell: 

<figure>
  <img
    style="border-radius:2px;box-shadow:0 4px 12px rgba(0,0,0,0.15), 0 0 0 1px rgba(0, 0, 0, 0.1);margin-left:27px;margin-bottom:40px;max-width: ${width}"
    src="/cells/cell-modes/chart/chartTypes.png" alt="The seven types of chart you can make with a Chart cell: area, bar, scatterplot, heatmap, histogram, line, and tick."
  />
  <figcaption></figcaption>
</figure>

When you pick a column for _x_ or _y_, the Chart cell will show a histogram (or bar chart) of the frequencies of different values in that column. The Chart cell will automatically bin values if the data is numbers or dates, or group them by unique categories if they're strings. The dropdowns will show the automatic selections that made the chart (like "Auto: count" and "Auto: bar"), which you can always override.

## Examples

The screenshots of the charts below are created entirely using the Chart cell. 

Setting either _x_ or _y_ to a column of your data renders a **histogram**. Note that, below, the _y_ reducer says "Auto: count" and the mark says "Auto: bar", each of which you can override.

<figure>
  <img
    style="border-radius:2px;box-shadow:0 4px 12px rgba(0,0,0,0.15), 0 0 0 1px rgba(0, 0, 0, 0.1);margin-left:27px;margin-bottom:40px;max-width: ${width}"
    src="/cells/cell-modes/chart/autoHistogram.png" alt="A screenshot of a Chart cell-rendered histogram after selecting a value for the X axis, 'temp_max' of the 'weather' table."
  />
  <figcaption>A histogram is being autogenerated as the user has selected a value for the X axis.</figcaption>
</figure>

Selecting numeric columns of your data for _x_ and _y_, then selecting a category for _Facet X_, renders a **faceted scatterplot**. Here we've also set _color_ to species.

<figure>
  <img
    style="border-radius:2px;box-shadow:0 4px 12px rgba(0,0,0,0.15), 0 0 0 1px rgba(0, 0, 0, 0.1);margin-left:27px;margin-bottom:40px;max-width: ${width}"
    src="/cells/cell-modes/chart/facetedScatter.png" alt="Some penguins data in a faceted scatterplot made with the Chart cell."
  />
  <figcaption>Body mass to flipper length scatterplot faceted by island and colored according to species.</figcaption>
</figure>

Selecting an _x_ and _y_ where one of them (usually _x_) is continuous and sorted, e.g. by date, then updating the mark to _line_ will produce a **line chart**. Here, we additionally choose color to visualize different series by location.

<figure>
  <img
    style="border-radius:2px;box-shadow:0 4px 12px rgba(0,0,0,0.15), 0 0 0 1px rgba(0, 0, 0, 0.1);margin-left:27px;margin-bottom:40px;max-width: ${width}"
    src="/cells/cell-modes/chart/lineChart.png" alt="A screenshot of a line chart comparing Seattle and New York weather data across time."
  />
  <figcaption>A line chart using continuous data on the x axis.</figcaption>
</figure>

A **stacked bar chart** is rendered by selecting one column for _x_; then, for _y_, we've selected both a column (_co2_) and the _sum_ reducer; we make it stacked by picking a categorical column for _color_, which segments the bars by that category.

<figure>
  <img
    style="border-radius:2px;box-shadow:0 4px 12px rgba(0,0,0,0.15), 0 0 0 1px rgba(0, 0, 0, 0.1);margin-left:27px;margin-bottom:40px;max-width: ${width}"
    src="/cells/cell-modes/chart/stackedBar.png" alt="A screenshot of an open Chart cell featuring a stacked bar chart."
  />
  <figcaption>A stacked bar chart made with the Chart cell.</figcaption>
</figure>

Selecting columns for _x_ and _y_, then choosing a "count" as the reducer for _color_, will produce a **heatmap**.

<figure>
  <img
    style="border-radius:2px;box-shadow:0 4px 12px rgba(0,0,0,0.15), 0 0 0 1px rgba(0, 0, 0, 0.1);margin-left:27px;margin-bottom:40px;max-width: ${width}"
    src="/cells/cell-modes/chart/heatMap.png" alt="A screenshot of an open Chart cell featuring a heatmap of wind and temperature data."
  />
  <figcaption>A heatmap made using "count" as the reducer for color.</figcaption>
</figure>

## Reducers

For _x_, _y_, _color_, and _size_, you can pick a reducer from the <svg style="vertical-align: baseline; display: inline !important" width="12" height="12" viewBox="2 2 12 12" fill="none" class="mr1"><path fill-rule="evenodd" clip-rule="evenodd" d="M4 4.70711C4 3.7643 4.7643 3 5.70711 3H10C11.1046 3 12 3.89543 12 5V6H10V5H6.41421L8 6.58579C8.78105 7.36683 8.78105 8.63316 8 9.41421L6.41421 11H10V10H12V11C12 12.1046 11.1046 13 10 13H5.70711C4.7643 13 4 12.2357 4 11.2929C4 10.8401 4.17986 10.4059 4.5 10.0858L6.58579 8L4.5 5.91421C4.17986 5.59407 4 5.15986 4 4.70711Z" fill="currentColor"></path></svg> menu above the field dropdown. The following reducing functions can be applied: count, distinct, sum, min, max, mean, median and mode. For example, the Chart cell below produces an area chart of pizzeria revenue (sum of the _revenue_ column on the _y_-axis) over time, with color indicating different days of the week.

<figure>
  <img
    style="border-radius:2px;box-shadow:0 4px 12px rgba(0,0,0,0.15), 0 0 0 1px rgba(0, 0, 0, 0.1);margin-left:27px;margin-bottom:40px;max-width: ${width}"
    src="/cells/cell-modes/chart/areaRevenue.png" alt="An open chart cell featuring a stacked area chart of revenue and date data."
  />
  <figcaption>Pizza revenue by order date stacked by color for the revenue by day of the week.</figcaption>
</figure>

Setting a reducer on one channel (like setting "sum" on _y_ above) implies grouping (for categorical data) or binning (for numeric or temporal data) one or two other channels:

<table style="max-width: 460px">
  <thead>
    <tr>
      <th>Setting a reducer on</th>
      <th>Groups or bins on</th>
      <th>To make a</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>x</td>
      <td>y</td>
      <td>Horizontal histogram</td>
    </tr>
    <tr>
      <td>y</td>
      <td>x</td>
      <td>Vertical histogram</td>
    </tr>
    <tr>
      <td>color</td>
      <td>x and y</td>
      <td>Heatmap</td>
    </tr>
    <tr>
      <td>size</td>
      <td>x and y</td>
      <td>Dot plot</td>
    </tr>
  </tbody>
</table>

## Fields

With the Chart cell added to a notebook and connected to a data source, you can update field selections using the dropdown menus to control the variables, chart type, color and size channels, and faceting. A long dash (<span style="color: gray"><b>—</b></span>) in the dropdown menu of any field indicates that a variable has not been selected.


Field | Description 
-------- | -------- 
X | Select the x-axis variable and an optional reducing function to apply (e.g. sum, mean, count). If only one variable is selected, a histogram or bar chart is created by default.
Y | Select the y-axis variable and an optional reducing function to apply (e.g. sum, mean, count). If only one variable is selected, a histogram or bar chart is created by default.
Color | Select either a single color to apply to all marks or a variable that is mapped to a color channel, and an optional reducing function to apply (e.g. sum, mean, count). Color updates the stroke color for line and scatterplot charts, and the fill color for area, bar, and heatmap charts.
Size | Select a variable that is mapped to dot size (r), and an optional reducing function to apply (e.g. sum, mean, count).
Facet X | Select a faceting variable to split the chart into separate panels side-by-size horizontally (one for each distinct value in the faceting variable).
Facet Y | Select a faceting variable to split the chart into separate panels vertically (one for each distinct value in the faceting variable).
Mark | Select a different Plot mark (auto, bar, dot, line, area, or rule).

## Buttons

Iterate and explore charts further using other features of the Chart cell that let you clear selections (for one or all fields), swap _x_ and _y_ variable selections, and customize your chart. 

Button | Description
-------- | -------- 
<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.99999 4L7.99999 8M12 12L7.99999 8M7.99999 8L12 4M7.99999 8L4.00001 12" stroke="gray" stroke-width="2"/></svg> | Clear selection for the given field
<svg style="display: inline !important;" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" transform="translate(0,3)"><path d="M3.99999 4L7.99999 8M12 12L7.99999 8M7.99999 8L12 4M7.99999 8L4.00001 12" stroke="gray" stroke-width="2"/></svg> <b>Clear all</b> | Clear selections for all fields
 | <b>Swap X/Y</b> | Swap selected X and Y variables in chart
<svg style="display: inline !important;" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" transform="translate(0,3)"><line x1="12" y1="11" x2="12" y2="15" stroke="#6c6c6c" stroke-width="2"/><line x1="4" y1="9" x2="4" y2="15" stroke="#6c6c6c" stroke-width="2"/><circle cx="12" cy="9" r="2" stroke="#6c6c6c" stroke-width="2"/><circle cx="4" cy="7" r="2" stroke="#6c6c6c" stroke-width="2"/><line x1="12" y1="1" x2="12" y2="7" stroke="#6c6c6c" stroke-width="2"/><line x1="4" y1="1" x2="4" y2="5" stroke="#6c6c6c" stroke-width="2"/></svg> <b>Customize</b> | Open customization pane (to update chart dimensions, margins, labels, gridlines, color scheme, scale types, reverse a scale, add or remove a legend, and add a caption)

## Data types 

The data type of a column (e.g. numeric, string, date, etc.) may determine what kinds of charts are possible. Icons to the left of the column names in the dropdowns show the data type for each.

Data Type Icon | Description
-------- | -------- 
<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="3" y="5" width="10" height="2" rx="0.5" fill=" #a2a2a2 "/><path d="M9 3.5C9 3.22386 9.22386 3 9.5 3H10.5C10.7761 3 11 3.22386 11 3.5V12.5C11 12.7761 10.7761 13 10.5 13H9.5C9.22386 13 9 12.7761 9 12.5V3.5Z" fill=" #a2a2a2 "/><path d="M5 3.5C5 3.22386 5.22386 3 5.5 3H6.5C6.77614 3 7 3.22386 7 3.5V12.5C7 12.7761 6.77614 13 6.5 13H5.5C5.22386 13 5 12.7761 5 12.5V3.5Z" fill=" #a2a2a2 "/><rect x="3" y="9" width="10" height="2" rx="0.5" fill=" #a2a2a2 "/></svg> | Numeric
<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13 4C13 3.44772 12.5523 3 12 3H10C9.44772 3 9 3.44772 9 4V7C9 7.55228 9.44772 8 10 8H13V4Z" fill=" #a2a2a2 "/><path d="M7 4C7 3.44772 6.55228 3 6 3H4C3.44772 3 3 3.44772 3 4V7C3 7.55228 3.44772 8 4 8H7V4Z" fill=" #a2a2a2 "/><path fill-rule="evenodd" clip-rule="evenodd" d="M5.00001 8H7.00001V9C7.00001 9.8692 6.85308 10.6012 6.37625 11.2687C5.94256 11.8759 5.28996 12.3419 4.55471 12.8321L3.44531 11.168C4.21007 10.6581 4.55747 10.3741 4.74878 10.1063C4.89694 9.89883 5.00001 9.63081 5.00001 9V8Z" fill=" #a2a2a2 "/><path fill-rule="evenodd" clip-rule="evenodd" d="M11 8H13V9C13 9.8692 12.8531 10.6012 12.3762 11.2687C11.9426 11.8759 11.29 12.3419 10.5547 12.8321L9.44531 11.168C10.2101 10.6581 10.5575 10.3741 10.7488 10.1063C10.8969 9.89883 11 9.63081 11 9V8Z" fill=" #a2a2a2 "/></svg> | String
<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="8" cy="8" r="5" stroke=" #a2a2a2 " stroke-width="2"/><path fill-rule="evenodd" clip-rule="evenodd" d="M7 3H9V7.58579L10.7071 9.29289L9.29289 10.7071L7 8.41421V3Z" fill=" #a2a2a2 "/></svg> | Date or datetime
<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M11.1652 3.00672C11.1107 3.00227 11.0556 3 11 3H5C3.89543 3 3 3.89543 3 5V11C3 12.1046 3.89543 13 5 13H11C12.1046 13 13 12.1046 13 11V6.82873L11 8.82873V11H5L5 5H9.17188L11.1652 3.00672Z" fill="#a2a2a2"/><path fill-rule="evenodd" clip-rule="evenodd" d="M13.7071 4.70711L8.00001 10.4142L5.29291 7.70711L6.70712 6.29289L8.00001 7.58579L12.2929 3.29289L13.7071 4.70711Z" fill="#a2a2a2"/></svg> | Boolean (true/false)

The _Size_ field updates the radius for a dot mark, and can only be updated using quantitative data (i.e. continuous or discrete numeric values). 

## Convert to JavaScript

You can convert a Chart cell to JavaScript to create a new cell with the underlying, equivalent, Plot.auto code. It's a regular Plot mark, so you can combine it with other marks or pass in any of the standard Plot options. For more information, see the [Plot.auto documentation](https://observablehq.com/@observablehq/plot-auto).

One way to enact the conversion is to hit the 'Convert to JavaScript' button at the bottom-right corner of a focused Chart cell:

<figure>
  <img
    style="border-radius:2px;box-shadow:0 4px 12px rgba(0,0,0,0.15), 0 0 0 1px rgba(0, 0, 0, 0.1);margin-left:27px;margin-bottom:40px;max-width: ${width}"
    src="/cells/cell-modes/chart/convertToJs2.png" alt="A focused open Chart cell with a red arrow overlayed over the picture pointing to the Convert to JavaScript button in the lower-right corner of the cell, which is highlighted by an overlayed red rectangle outline."
  />
  <figcaption>The Convert to JavaScript button in a focused chart cell.</figcaption>
</figure>

You can also select the <svg width="17" height="15" viewBox="-8.5 -7.5 17 15" stroke="currentColor" stroke-width="2" stroke-linecap="round" fill="none" style="position: relative; top: 2px; display: inline !important;"><path d="M0,-4.5V4.5M-4.5,0H4.5" class="jsx-7869de80898f8af0 "></path></svg> add cell button below a Chart cell and you'll see this suggestion:

<figure>
  <img
    style="border-radius:2px;box-shadow:0 4px 12px rgba(0,0,0,0.15), 0 0 0 1px rgba(0, 0, 0, 0.1);margin-left:27px;margin-bottom:40px;max-width: ${width}"
    src="/cells/cell-modes/chart/convertToJS.png" alt="A zoomed in screenshot of the bottom of a chart cell and the Add cell menu of the following cell opened right below with the menu option 'Convert to JavaScript' highlighted."
  />
  <figcaption>In the Add cell menu of the cell following a Chart cell you see 'Convert to JavaScript' as a menu item.</figcaption>
</figure>



