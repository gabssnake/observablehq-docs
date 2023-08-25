# Adding cells

All of Observable notebooks are made of **cells**. To build a notebook is to add cells to a notebook.

<figure>
  <img src="https://static.observableusercontent.com/files/7ea2943b33f42e3ba8a9b0b6fa305a4b7402fc0e7c3602825df5c782c52b414ab8094e42d9c79931e767069935076f35a3731dded51b9124cab8fe2ad48e300f" alt="An Observable notebook split into different sections representing various cell types like markdown (for text), inputs, and a chart. Text reads: Everything you see in an Observable notebook is made from cells." style="border-radius: 8px; overflow: hidden;"/>
    <figcaption>A notebook divided into <b>cells</b>.</figcaption>

</figure>

Cells can be added in a few different ways in Observable.

## Add cell menu

The **Add cell menu** appears as the first thing you see upon opening a blank notebook. 

<figure>
  <img src="/cells/blankNotebook.png" alt="The Add cell menu opened up as it would be by default in a new notebook." style="border-radius: 8px; overflow: hidden;"/>
    <figcaption>The <b>Add cell menu</b>.</figcaption>
</figure>

It also appears when you click the "+" button to the left of the **Add cell bar**. To open see the menu between _unfocused cells_, click either the gray "+" button or anywhere between two cells to open the **Add cell menu**.

Besides providing options to add any of the top four cell types - *JavaScript*, *Text* (Markdown), *Data* table, *Chart* - the **Add cell menu** gives users the ability to:
- Connect to data
- Insert Plot snippets
- Create Inputs
- Insert D3 (and other code) snippets
- Create tables
- Upload and insert images
- Import a notebook cell or library
- Browse sample data sets

## Add cell bar

After the initial **Add cell menu** is closed, likely the first thing you will notice in a blank notebook, is the **Add cell bar**:

<figure>
  <img
    style="border-radius:2px;box-shadow:0 4px 12px rgba(0,0,0,0.15), 0 0 0 1px rgba(0, 0, 0, 0.1);margin-left:27px;margin-bottom:40px;max-width: ${width}"
    src="/cells/addCellBar.png" alt="The Add bar showing the JavaScript, Text, Data, and Chart cell options."
  />
  <figcaption>The <b>Add cell bar</b>.</figcaption>
</figure>

Like the **Add cell menu**, the **Add cell bar** highlights the most commonly used cell types in the platform:
- **JavaScript**: A code cell that stores and executes JavaScript
- **Text**: A markdown cell, for formatting text quickly and easily
- **Data**: The Data Table cell, capable of visualizing tabular data, offering interactive filters
- **Chart**: The Chart cell, delivering no-code charts and visual data exploration

The bar appears below _the currently focused cell_. 

## Searching the Add cell menu

The search bar is ready at the top of the **Add cell menu**. Selecting an option will insert the corresponding type of cell into your notebook. 

<figure>
  <img
    style="border-radius:2px;box-shadow:0 4px 12px rgba(0,0,0,0.15), 0 0 0 1px rgba(0, 0, 0, 0.1);margin-left:27px;margin-bottom:40px;max-width: ${width}"
    src="/cells/cellMenuSearch.png" alt="The Add cell menu search bar."
  />
  <figcaption>The <b>Add cell menu</b> search bar. 
</figcaption>
</figure>

All of the components and code snippets are immediately executable, so you can quickly preview them with some included sample data. Just replace the sample references to see your own data represented.

### Freeform text input

When you input freeform text into the search box that does not match any known menu items, you are prompted to insert the content typed as a JavaScript cell, or optionally as a Markdown or HTML cell.

<figure>
  <img
    style="border-radius:2px;box-shadow:0 4px 12px rgba(0,0,0,0.15), 0 0 0 1px rgba(0, 0, 0, 0.1);margin-left:27px;margin-bottom:40px;max-width: 400px"
    src="/cells/freeFormText.png" alt="The search bar with some JavaScript entered. Upon not finding a match, the user is suggested to insert as JavaScript, Markdown, or HTML. The Insert as JavaScript option is highlighted."
  />
  <figcaption>An unmatched search query.
</figcaption>
</figure>

## Cell Suggestions

Cell suggestions are over to the right side of the space that the next cell's **Add cell bar** occupies:

<figure>
  <img
    style="border-radius:2px;box-shadow:0 4px 12px rgba(0,0,0,0.15), 0 0 0 1px rgba(0, 0, 0, 0.1);margin-left:27px;margin-bottom:40px;max-width: ${width}"
    src="/cells/dataTableCellMenuNextSteps.png" alt="A Data table cell with button suggestions, Create chart and Convert to SQL, together highlighted by a red rounded-edged rectangle."
  />
  <figcaption>The <b>Create chart</b> button and <b>Convert to SQL</b> button.
</figcaption>
</figure>

Some suggestions create a new cell below in an effort to keep you moving to the next logical step in the analysis process (e.g. the **Create chart** suggestion in the screenshot above). Suggestions that show an arrow indicate that the focused cell will be non-destructively transformed into another cell (e.g. the **Convert to SQL** suggestion in the screenshot above).