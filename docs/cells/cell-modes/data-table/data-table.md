# Data table cell

The **Data table cell** cell mode provides you with an easy way to put your data in table form. 
- You can quickly scan multiple columns of information.
- You can mouse over top-of-column summaries to explore the range of values.

<figure>
  <img
    style="border-radius:2px;box-shadow:0 4px 12px rgba(0,0,0,0.15), 0 0 0 1px rgba(0, 0, 0, 0.1);margin-left:27px;margin-bottom:40px;max-width: ${width}"
    src="/cells/cell-modes/data-table/dataTableCell.png" alt="An open notebook with the title 'A screenshot of Observable's Data table cell. There is a table with six visible columns: 'CustomerId', 'FirstName', 'LastName', 'Address', and 'City'. There is a search bar under the table columns and under that there are some action buttons: 'Filter', 'Columns', 'Sort', and 'Slice.'"
  />
  <figcaption>Observable's Data table cell.</figcaption>
</figure>

Once you have created a Data table cell, you can quickly sift through your data using common data manipulation operations:
- [Filter](#filterSection) - Limit displayed results to matched criteria.
- [Columns (Show/Hide)](#showHideSection) - Show or hide only certain columns.
- [Sort](#sortSection) - Sort columns into ascending or descending order.
- [Slice](#sliceSection) - Define a slice of data so that only limited rows are shown.

You decide where the data in the Data table cell comes from. This is your *data source*, and can be any of the following:
- A cell in your notebook that contains data
- An attached `.csv`, `.tsv`, JSON, or SQLite file
- An Apache Arrow or Parquet file
- A database that you have connected (for instructions, see [Connecting to databases](https://observablehq.com/@observablehq/databases))

To get started:
1. Create the Data table cell from the cell menu.
2. If necessary, prepare a data source by attaching a file or connecting to a database.
3. Select the data source (and table, if using a database) from the Data table cell.

## Creating a Data table cell

To create a Data table cell, click **Data** on the **Add cell bar**:

<figure>
  <img
    style="border-radius:2px;box-shadow:0 4px 12px rgba(0,0,0,0.15), 0 0 0 1px rgba(0, 0, 0, 0.1);margin-left:27px;margin-bottom:40px;max-width: ${width}"
    src="/cells/cell-modes/data-table/addCellBar.png" alt="A screenshot of the Add cell bar, showing the options 'JavaScript', 'Text', 'Data', and 'Chart'.'"
  />
  <figcaption>The Add cell bar.</figcaption>
</figure>

 or click the plus sign (+) to create a new cell, then select the **Data table** option from the cell menu:

<figure>
  <img
    style="border-radius:2px;box-shadow:0 4px 12px rgba(0,0,0,0.15), 0 0 0 1px rgba(0, 0, 0, 0.1);margin-left:27px;margin-bottom:40px;max-width: ${width}"
    src="/cells/cell-modes/data-table/dataTableMenu_v6.png" alt="The Add cell menu opened showing the dropdown options for four table types with 'Data table' being first and highlighted, followed by 'JavaScript table', 'Markdown table', and 'HTML table'.'"
  />
  <figcaption>The Data table option in the Add cell menu.</figcaption>
</figure>

and the new Data table cell appears:

<figure>
  <img
    style="border-radius:2px;box-shadow:0 4px 12px rgba(0,0,0,0.15), 0 0 0 1px rgba(0, 0, 0, 0.1);margin-left:27px;margin-bottom:40px;max-width: ${width}"
    src="/cells/cell-modes/data-table/tableCellUnnamed_UI_v8.png" alt="A screenshot of a new Data table cell without a data source selected. There are no columns because there is no data source selected. There is a dropdown for choosing a data source in the newly created cell as well as the four Data table cell button options: 'Filter', 'Column', 'Sort', and 'Slice'. This all makes up the UI element the Data editor toolbar, which is all you can see in the Data table cell before a data source is selected."
  />
  <figcaption>A newly created Data table cell showing the Data editor toolbar.</figcaption>
</figure>

This is the Data editor toolbar. From here, you can choose your data source, then do filtering, column operations, sorting, and so on. The next step is to prepare a data source.

## Using an existing cell as a data source

If you have a named cell in your notebook that already contains data (that is, an array of objects), you are able to directly select that cell as your data source. For example, the following cell has a small set of American motion picture data (from [Wikipedia](https://en.wikipedia.org/wiki/Academy_Award_for_Best_Picture)):

<figure>
  <img
    style="border-radius:2px;box-shadow:0 4px 12px rgba(0,0,0,0.15), 0 0 0 1px rgba(0, 0, 0, 0.1);margin-left:27px;margin-bottom:40px;max-width: ${width}"
    src="/cells/cell-modes/data-table/motionPictureNominees.png" alt="An open JavaScript cell with a code section on the lower half and a presentation section, showing the results of the ran code, on the upper half. In the lower half there is an array being defined in terms of a number of smaller arrays, each having three string elements: one for the year the film was a best picture nominee, another for the title of the film, and the third for the production studio that produced the film."
  />
  <figcaption>A cell with data as an array of JavaScript objects.</figcaption>
</figure>

Since the data is already available, we only need to click **Select a data source** and then select the `bestPictureNominees` cell as a data source:

<figure>
  <img
    style="border-radius:2px;box-shadow:0 4px 12px rgba(0,0,0,0.15), 0 0 0 1px rgba(0, 0, 0, 0.1);margin-left:27px;margin-bottom:40px;max-width: ${width}"
    src="/cells/cell-modes/data-table/selectADataSource_v3.png" alt="A zoomed-in screenshot of the left side of the Data editor toolbar. The cell is named 'cell 4', the dropdown button to select a data source is highlighted with a red rectangle around it."
  />
  <figcaption>Click to select a data source.</figcaption>
</figure>

<figure>
  <img
    style="border-radius:2px;box-shadow:0 4px 12px rgba(0,0,0,0.15), 0 0 0 1px rgba(0, 0, 0, 0.1);margin-left:27px;margin-bottom:40px;max-width: ${width}"
    src="/cells/cell-modes/data-table/bestPictureNomineesCell.png" alt="A screenshot of the dropdown menu items after the dropdown was selected by the user, the cell with the array `bestPictureNominees` is highlighted to be selected."
  />
  <figcaption>Example of an in-memory data source.</figcaption>
</figure>

to create the following Data table cell:

<figure>
  <img
    style="border-radius:2px;box-shadow:0 4px 12px rgba(0,0,0,0.15), 0 0 0 1px rgba(0, 0, 0, 0.1);margin-left:27px;margin-bottom:40px;max-width: ${width}"
    src="/cells/cell-modes/data-table/dataTableCell2.png" alt="A screenshot of an Observable Data table cell populated with the data from the array of best picture nominees."
  />
  <figcaption>The Data table cell using the array of best picture nominees as the data source.</figcaption>
</figure>

Things to notice:
- You can scroll the results to view all returned rows.
- You can see the selected data source in the Data table cell controls.

## Hiding (and restoring) the Data editor toolbar

If you want to display only the table, you can hide the Data editor toolbar by clicking the close cell arrow to the left of the Data table cell:

<figure>
  <img
    style="border-radius:2px;box-shadow:0 4px 12px rgba(0,0,0,0.15), 0 0 0 1px rgba(0, 0, 0, 0.1);margin-left:27px;margin-bottom:40px;max-width: ${width}"
    src="/cells/cell-modes/data-table/closeCellArrow_v2.png" alt="A zoomed-in screenshot on the left side of at the top of the Data table cell with a red circle around the close cell arrow."
  />
  <figcaption>Click the close cell arrow to hide the Data editor toolbar.</figcaption>
</figure>

Click the arrow again to restore the Data editor toolbar.

## Preparing data sources from .csv, .tsv, Arrow, Parquet, JSON, or SQLite files

Data sources can be prepared easily from any of these types of files:
- .`csv` (comma-separated values)
- .`tsv` (tab-separated values)
- Apache Arrow or Parquet ([examples](https://observablehq.com/@observablehq/example-arrow-and-parquet-files-in-data-table-cells?collection=@observablehq/getting-data-in-and-out))
- JSON (JavaScript Object Notation)
- SQLite

You can attach the file to your notebook (click the paper clip icon to attach a file) and then select the file from **Select a data source**, as shown earlier.

## Selecting a data source from a connected database

If you have not yet defined a database, click **Add database** to be taken to the Databases page in your Settings, where you can add a database using `DatabaseClient` (that process is described in [Connecting to databases](https://observablehq.com/@observablehq/databases?collection=@observablehq/working-with-data)).

<figure>
  <img
    style="border-radius:2px;box-shadow:0 4px 12px rgba(0,0,0,0.15), 0 0 0 1px rgba(0, 0, 0, 0.1);margin-left:27px;margin-bottom:40px;max-width: ${width}"
    src="/cells/cell-modes/data-table/addDatabaseButton_v2.png" alt="A zoomed-in screenshot on the left side of at the top of the Data table cell with a red circle around the close cell arrow."
  />
  <figcaption>Click the close cell arrow to hide the Data editor toolbar.</figcaption>
</figure>

After your database is connected, click **Select a data source** and choose your database from the list of available databases. 

<figure>
  <img
    style="border-radius:2px;box-shadow:0 4px 12px rgba(0,0,0,0.15), 0 0 0 1px rgba(0, 0, 0, 0.1);margin-left:27px;margin-bottom:40px;max-width: ${width}"
    src="/cells/cell-modes/data-table/connectedDatabases_v2.png" alt="A zoomed-in screenshot of the dropdown to select a data source with the databases available listed in the 'Databases' section of the dropdown."
  />
  <figcaption>Databases section lists the connected databases.</figcaption>
</figure>

## Selecting a table

Once you have selected a database, you next need to select a table from that database (this is not needed for file attachments and existing-cell data sources):

<figure>
  <img
    style="border-radius:2px;box-shadow:0 4px 12px rgba(0,0,0,0.15), 0 0 0 1px rgba(0, 0, 0, 0.1);margin-left:27px;margin-bottom:40px;max-width: ${width}"
    src="/cells/cell-modes/data-table/selectATable_v4.png" alt="The 'Select a table' dropdown here is highlighted with a red rectangle in the Data table cell editor."
  />
  <figcaption>Select the dropdown to select a table after you have chosen a database.</figcaption>
</figure>

<figure>
  <img
    style="border-radius:2px;box-shadow:0 4px 12px rgba(0,0,0,0.15), 0 0 0 1px rgba(0, 0, 0, 0.1);margin-left:27px;margin-bottom:40px;max-width: ${width}"
    src="/cells/cell-modes/data-table/selectATableList_v3.png" alt="The 'Select a table' dropdown here is opened such that you can see the optional tables to select."
  />
  <figcaption>Select a table from the menu.</figcaption>
</figure>

:::info NOTE
If you selected a BigQuery database, you need to enter the <em>projectname.schemaname.tablename</em>, rather than selecting a table name.
:::

Once you have selected a database and table, the tabular data will populate the cell:

<figure>
  <img
    style="border-radius:2px;box-shadow:0 4px 12px rgba(0,0,0,0.15), 0 0 0 1px rgba(0, 0, 0, 0.1);margin-left:27px;margin-bottom:40px;max-width: ${width}"
    src="/cells/cell-modes/data-table/tableCellPopulated_v2.png" alt="A Data table cell with a table chosen is populated with data from that table (the rows and columns) as a result."
  />
  <figcaption>The Data table cell fills with data once you select a database and table.</figcaption>
</figure>

## Naming the Data table cell

It isn't required to name the Data table cell, but if you want to [refer](#tableRefSection) to the table data from another cell, you will need to give the Data table cell a name. Type the name into the name area:

<figure>
  <img
    style="border-radius:2px;box-shadow:0 4px 12px rgba(0,0,0,0.15), 0 0 0 1px rgba(0, 0, 0, 0.1);margin-left:27px;margin-bottom:40px;max-width: ${width}"
    src="/cells/cell-modes/data-table/tableCellNameArea_v2.png" alt="The Data table cell name area in the Data table cell editor highlighted with a red rectangle."
  />
  <figcaption>Enter the name for the Data table cell.</figcaption>
</figure>

## Filters, Columns, Sort, Slice

Data table cells contain user interface controls for:

- **Filter**ing the data so that only data meeting your criteria appear
- Showing/hiding specific **columns** and deriving new ones
- Applying **sort**ing
- Limiting the display to only certain rows (creating a **slice**)

### Filtering

<figure>
  <img
    style="border-radius:2px;box-shadow:0 4px 12px rgba(0,0,0,0.15), 0 0 0 1px rgba(0, 0, 0, 0.1);margin-left:27px;margin-bottom:40px;max-width: ${width}"
    src="/cells/cell-modes/data-table/myTableFilter_v2.png" alt="The Data table cell Filter button in the Data table cell editor highlighted within the outline of a red rectangle."
  />
  <figcaption>Select Filter to define filtering conditions to apply.</figcaption>
</figure>

Use filtering to define what part of the data to display. You can define a filter to show only the results that you want to see.

To define the filtering criteria, click on **Filter**. You then see pulldown menus that initially specify **Column** and **Operator**. 

<figure>
  <img
    style="border-radius:2px;box-shadow:0 4px 12px rgba(0,0,0,0.15), 0 0 0 1px rgba(0, 0, 0, 0.1);margin-left:27px;margin-bottom:40px;max-width: ${width}"
    src="/cells/cell-modes/data-table/tableCell_FilterCriteria_Column.png" alt="The Filter button activated reveals the Column and Operator dropdowns for filtering. Here the Column dropdown is opened showing the options for Column."
  />
  <figcaption>Select the black triangle to display the available choices for the Column field.</figcaption>
</figure>

Once you have selected an item from the Column menu, appropriate choices appear in the Operator menu, and an additional field appears so that you can enter detailed criteria:

<figure>
  <img
    style="border-radius:2px;box-shadow:0 4px 12px rgba(0,0,0,0.15), 0 0 0 1px rgba(0, 0, 0, 0.1);margin-left:27px;margin-bottom:40px;max-width: ${width}"
    src="/cells/cell-modes/data-table/tableCell_FilterCriteria_ThreeFields.png" alt="The Filter button activated and an option chosen from the Column menu reveals appropriate choices in the Operator menu and a field for entering detailed criteria."
  />
  <figcaption>After you select a Column item, appropriate fields appear so that you can specify additional criteria.</figcaption>
</figure>

The types of comparison operators available depend on the type of value in the Column field.
- String values have the following types of comparison operators available:
  - is
  - is not
  - contains
  - does not contain
  - is in
  - is not in
  - is null
  - is not null

  :::info NOTE
  The `contains` operator is case sensitive in some databases and not case sensitive in others. That behavior is database-dependent.
  :::

- Numeric values have the following types of comparison operators available:
  - =
  - ≠
  - <
  - `>`
  - `<=`
  - `>=`
  - is in
  - is not in
  - is null
  - is not null

  :::info NOTE
  Some numeric items may not allow `is null`/`is not null` comparisons.
  :::

- Boolean values (TRUE or FALSE) have the following types of comparison operators available:
  - =
  - ≠
  - is null
  - is not null

- Date values have the following types of comparison operators available:
  - is before `<date>`
  - is after `<date>`
  - is on or before `<date>`
  - is on or after `<date>`
  - is null
  - is not null

- Object values do not support operators.

You can define multiple filter criteria. Once you complete the first row of filter criteria, a second row appears. You can then define filter criteria based on a second column of data.

It is possible to define filter criteria that are contradictory; for example:

`// This will return no results:`

    ID_number < 9
    ID_number > 100

The order in which you define the filtering criteria does not matter.

To delete a row of filter criteria, click the "x" that appears to the right of each row.

### Showing and hiding columns

Click **Columns** to display the list of table columns. 

<figure>
  <img
    style="border-radius:2px;box-shadow:0 4px 12px rgba(0,0,0,0.15), 0 0 0 1px rgba(0, 0, 0, 0.1);margin-left:27px;margin-bottom:40px;max-width: ${width}"
    src="/cells/cell-modes/data-table/myTableColumns_v2.png" alt="The Data table cell editor with the Columns button highlighted with a red rectangle outline."
  />
  <figcaption>Select <b>Columns</b> to display the list of table columns.</figcaption>
</figure>

The resulting list displays checkboxes indicating which columns are to be shown.

<figure>
  <img
    style="border-radius:2px;box-shadow:0 4px 12px rgba(0,0,0,0.15), 0 0 0 1px rgba(0, 0, 0, 0.1);margin-left:27px;margin-bottom:40px;max-width: ${width}"
    src="/cells/cell-modes/data-table/tableCellColumnsMenu.png" alt="The Columns button activated reveals multiple checkboxes, one for each column that can be turned off and on by checking the respective box."
  />
  <figcaption>Checkboxes indicate the columns to show.</figcaption>
</figure>

By default, all columns are shown. You can hide specific columns by unchecking the checkbox for a given column.

If you hover the pointer over an individual item in the list, the word **only** appears. If you click **only**, all other columns are de-selected.

<figure>
  <img
    style="border-radius:2px;box-shadow:0 4px 12px rgba(0,0,0,0.15), 0 0 0 1px rgba(0, 0, 0, 0.1);margin-left:27px;margin-bottom:40px;max-width: ${width}"
    src="/cells/cell-modes/data-table/tableCellColumnsOnly.png" alt="The Columns button activated reveals multiple checkboxes. The third one down, 'country', is selected by select the only button as the only column to show."
  />
  <figcaption>Select <b>only</b> to show only that column.</figcaption>
</figure>

To restore all columns to visibility, select <b>Show all</b>.

<figure>
  <img
    style="border-radius:2px;box-shadow:0 4px 12px rgba(0,0,0,0.15), 0 0 0 1px rgba(0, 0, 0, 0.1);margin-left:27px;margin-bottom:40px;max-width: ${width}"
    src="/cells/cell-modes/data-table/tableCellColumnsShowAll.png" alt="The Column button in the Data table cell editor activated reveals multiple checkboxes with only the third, 'country' selected. The Show all button in the upper right-hand corner of the area is highlighted."
  />
  <figcaption>Select <b>Show all</b> to restore all columns.</figcaption>
</figure>

Note that if you de-select all columns one-by-one and then add them back individually, the columns appear in the order in which they are added. Selecting **Show all** (or selecting all columns) restores the original display order.

### Creating new columns for column derivations

New columns, derived from the original columns, can also be added to the Data table cell. To do so, click the `+` button in the upper right-hand corner of the table view, as seen here:

<figure>
  <img
    style="border-radius:2px;box-shadow:0 4px 12px rgba(0,0,0,0.15), 0 0 0 1px rgba(0, 0, 0, 0.1);margin-left:27px;margin-bottom:40px;max-width: ${width}"
    src="/cells/cell-modes/data-table/tableCellCreateColumnButton.png" alt="The Data table cell has the Observable native cars data loaded in. In the upper right-hand corner of the Data table cell area is a <b>+</b> button highlighted with a red rectangle outline."
  />
  <figcaption>Select the <b>+</b> button in the upper-right side of the table to create a new column.</figcaption>
</figure>

and the new column will appear highlighted in blue to the right of the original columns:

<figure>
  <img
    style="border-radius:2px;box-shadow:0 4px 12px rgba(0,0,0,0.15), 0 0 0 1px rgba(0, 0, 0, 0.1);margin-left:27px;margin-bottom:40px;max-width: ${width}"
    src="/cells/cell-modes/data-table/tableCellCreatedColumn.png" alt="A Data table cell with the newly made column on the far right highlighed with a red rectangle outline."
  />
  <figcaption>The new column will appear to the right of the columns already shown.</figcaption>
</figure>

The editor also appears when you first create a column:

<figure>
  <img
    style="border-radius:2px;box-shadow:0 4px 12px rgba(0,0,0,0.15), 0 0 0 1px rgba(0, 0, 0, 0.1);margin-left:27px;margin-bottom:40px;max-width: ${width}"
    src="/cells/cell-modes/data-table/tableCellCreatedColumnEditor2@2.png" alt="The Data table cell with the Data table cell editor focused on to the new power to weight column as the column is first being created."
  />
  <figcaption>The editor appears at the bottom of the <b>Data table cell</b>.</figcaption>
</figure>

which allows you to name your new column and define the derivation with an expression.

:::info NOTE
Data types for derived columns are inferred and overridable just like the other columns in the table.
:::

After you click the **Done** button, the view of the **Data cell table** will revert back to normal. However, you can edit an existing expression as needed by clicking the **{}** icon in the column heading:

<figure>
  <img
    style="border-radius:2px;box-shadow:0 4px 12px rgba(0,0,0,0.15), 0 0 0 1px rgba(0, 0, 0, 0.1);margin-left:27px;margin-bottom:40px;max-width: ${width}"
    src="/cells/cell-modes/data-table/tableCellCreatedColumnEditorReopen@1.png" alt="The Data table cell with the Data table cell editor focused on the newly created column power to weight, with the {} button at the top of the power to weight column activated as it activates the Data table cell editor to be focused on the power to weight column."
  />
  <figcaption>To reopen the editor for editing the column name and expression, select the <b>{}</b> in the column heading.</figcaption>
</figure>

#### Writing expressions to define a newly created column

A built-in object called **row** allows you to access other column data that can then be applied to each row one at a time in the derived column. For instance, the above screenshot derives a new "power to weight" column by dividing the value from each row in the "power (hp)" column by value from each row in the "weight (lb)" column.

You can perform most of the computation available in normal JavaScript cells. This includes the ability to write arbitrary JavaScript expressions, reference the output of other cells, and call functions defined in other cells. There are some notable limitations to what you can do with this cell:
 - You cannot render HTML or a Plot in the cell.
 - You cannot render an [input](https://observablehq.com/@observablehq/inputs?collection=@observablehq/notebook-fundamentals) in the cell.
 - You cannot reference another derived cell.
 - You cannot access an entire column of data from within the expression cell (i.e. all of the rows at once), only each row one at a time (i.e. using the **row** object).

 #### Error Handling for deriving new columns

There are a couple of scenarios that cause errors with column derivation:
- Referencing a bad or non-existent column name, or make a syntax error in the expression cell, the table produces invalid results like `undefined` or `NaN`.

<figure>
  <img
    style="border-radius:2px;box-shadow:0 4px 12px rgba(0,0,0,0.15), 0 0 0 1px rgba(0, 0, 0, 0.1);margin-left:27px;margin-bottom:40px;max-width: ${width}"
    src="/cells/cell-modes/data-table/columnDerivationBadColumnName.png" alt="The Data table cell with the Data table cell editor showing code meant to access a row in order to define the new column. Because the row doesn't exist, the column has a bad definition and is therefore filled with 'undefined' values in every row."
  />
  <figcaption>Referencing a bad or non-existent name in the expression editor.</figcaption>
</figure>

- When you run the cell using either `Shift+Enter` or the play button, but include a mistake that causes a runtime error (for instance, by using an undefined variable) the Data table cell collapses other than the column headings, a search field, and the expression editor. You can then use the expression editor to fix the code.

<figure>
  <img
    style="border-radius:2px;box-shadow:0 4px 12px rgba(0,0,0,0.15), 0 0 0 1px rgba(0, 0, 0, 0.1);margin-left:27px;margin-bottom:40px;max-width: ${width}"
    src="/cells/cell-modes/data-table/columnDerivationRuntimeError1.png" alt="The Data table cell showing a runtime error and no tabular data. The Data table cell expression editor is open allowing the user to fix the error."
  />
  <figcaption>A runtime error when you enter <code>Shift+Enter</code> or select the play button.</figcaption>
</figure>

- When you cause a runtime error, but select the **Done** button instead of `Shift+Enter` or the play button first, the table collapses and the expression editor is closed. You can open the editor back up by selecting the `{}` button at the top of the new column and fix your the code accordingly.

<figure>
  <img
    style="border-radius:2px;box-shadow:0 4px 12px rgba(0,0,0,0.15), 0 0 0 1px rgba(0, 0, 0, 0.1);margin-left:27px;margin-bottom:40px;max-width: ${width}"
    src="/cells/cell-modes/data-table/columnDerivationRuntimeError2.png" alt="The Data table cell showing a runtime error and no tabular data. The Data table cell expression editor is closed and not showing so it might be unclear to the user how to reopen."
  />
  <figcaption>Select the {} button to reopen the Data table cell expression editor.</figcaption>
</figure>

### Sorting 

Use **Sort** to arrange the items in the table into order: 
<figure>
  <img
    style="border-radius:2px;box-shadow:0 4px 12px rgba(0,0,0,0.15), 0 0 0 1px rgba(0, 0, 0, 0.1);margin-left:27px;margin-bottom:40px;max-width: ${width}"
    src="/cells/cell-modes/data-table/myTableSort_v2.png" alt="The Data table cell editor with the Sort button highlighted with a red rectangle outline."
  />
  <figcaption>Select <b>Sort</b> to define the sorting criteria.</figcaption>
</figure>

using any of the columns as a sort key:


<figure>
  <img
    style="border-radius:2px;box-shadow:0 4px 12px rgba(0,0,0,0.15), 0 0 0 1px rgba(0, 0, 0, 0.1);margin-left:27px;margin-bottom:40px;max-width: ${width}"
    src="/cells/cell-modes/data-table/tableCell_SortCriteria_Column.png" alt="A zoomed in screenshot of the Data table cell editor with the Sort button activated reveals the Column and Direction dropdowns. The Columns dropdown is open showing the available columns to select."
  />
  <figcaption>Select the black triangle to display the available sort key choices for the Column field.</figcaption>
</figure>

You can define multiple sort keys, which is useful when there are duplicate values in some columns.

For each sort key column, use the **Direction** pulldown to select a **Descending** sort or an **Ascending** sort.

<figure>
  <img
    style="border-radius:2px;box-shadow:0 4px 12px rgba(0,0,0,0.15), 0 0 0 1px rgba(0, 0, 0, 0.1);margin-left:27px;margin-bottom:40px;max-width: ${width}"
    src="/cells/cell-modes/data-table/tableCell_Sort_Up_or_Down.png" alt="A zoomed in screenshot of the Data table cell editor with the Sort button activated reveals the Column and Direction dropdowns. The selection user_id shows in the Columns dropdown and the options Descending and Ascending are shown in the Direction dropdown."
  />
  <figcaption>Choose either a <b>Descending</b> or an <b>Ascending</b> sort order.</figcaption>
</figure>

You may wish to define your Filter criteria first, to limit the returned results, and then do sorting.

### Slicing

Use **Slice** to display only a limited number of rows from the table—for example, the first *N* rows. (You may want to define your filter and sorting criteria first.) 

<figure>
  <img
    style="border-radius:2px;box-shadow:0 4px 12px rgba(0,0,0,0.15), 0 0 0 1px rgba(0, 0, 0, 0.1);margin-left:27px;margin-bottom:40px;max-width: ${width}"
    src="/cells/cell-modes/data-table/myTableSlice_v2.png" alt="The Data table cell editor with the Slice button highlighted with a red rectangle outline."
  />
  <figcaption>Select <b>Slice</b> to define a reduced portion of the tabular data to display</figcaption>
</figure>

By default, **Slice** is set to display rows 0-1000:

<figure>
  <img
    style="border-radius:2px;box-shadow:0 4px 12px rgba(0,0,0,0.15), 0 0 0 1px rgba(0, 0, 0, 0.1);margin-left:27px;margin-bottom:40px;max-width: ${width}"
    src="/cells/cell-modes/data-table/sliceFromTo.png" alt="The Slice button activated in the Data table cell editor reveals a From and To radio button with a number selector next to each. There is another radio button on the opposite side of the number selector named 'Start' and 'End' respectively"
  />
  <figcaption>Select <b>Start</b> to start the slice from the start of the data. Select <b>End</b> to conclude the slice at the end of the data.</figcaption>
</figure>

Once you have defined the lower and upper limits of the slice, press Enter to apply the limits (or click the **Slice** button again). 

## Referring to a Data table cell

If you have given a name to your Data table cell, you can then refer to it in other parts of the notebook.

<figure>
  <img
    style="border-radius:2px;box-shadow:0 4px 12px rgba(0,0,0,0.15), 0 0 0 1px rgba(0, 0, 0, 0.1);margin-left:27px;margin-bottom:40px;max-width: ${width}"
    src="/cells/cell-modes/data-table/tableCell_RefToTable_v3.png" alt="An open Observable notebook cell with the variable myFunction being called in the code section of the cell. An array of objects is in the presentation section of the cell."
  />
  <figcaption>You can refer to the data in a named Data table cell.</figcaption>
</figure>  

The array can be expanded for viewing:

<figure>
  <img
    style="border-radius:2px;box-shadow:0 4px 12px rgba(0,0,0,0.15), 0 0 0 1px rgba(0, 0, 0, 0.1);margin-left:27px;margin-bottom:40px;max-width: ${width}"
    src="/cells/cell-modes/data-table/tableCell_ArrayExpanded_v3.png" alt="The array of objects from the last screenshot here is opened up to reveal the first 20 objects of the array."
  />
  <figcaption>Select the black triangle to the left of <b>Array</b> to expand the data.</figcaption>
</figure>  

## Summary charts

These small graphics at the top of each column provide a quick summary of key data characteristics for each column below.

<figure>
  <img
    style="border-radius:2px;box-shadow:0 4px 12px rgba(0,0,0,0.15), 0 0 0 1px rgba(0, 0, 0, 0.1);margin-left:27px;margin-bottom:40px;max-width: ${width}"
    src="/cells/cell-modes/data-table/summaryChartHeadersPenguins.png" alt="A zoomed in screenshot of the top of the first four columns of a Data table cell."
  />
  <figcaption>Each small chart provides a summary of that column's data. Columns are width-adjustable.</figcaption>
</figure>  

Note also, that the small charts are *interactive*. When you hover the pointer over each chart, you can get even more detailed information. By sliding your mouse along the displayed values, you can see individual values for each histogram or bar chart segment. Compare the following figure with the previous one:

<figure>
  <img
    style="border-radius:2px;box-shadow:0 4px 12px rgba(0,0,0,0.15), 0 0 0 1px rgba(0, 0, 0, 0.1);margin-left:27px;margin-bottom:40px;max-width: ${width}"
    src="/cells/cell-modes/data-table/summaryChartAdelieOnly.png" alt="In this screenshot, the same four columns from the last screenshot are shown with only the Adelie species selected in the Summary Chart. The Summary chart that signifies this is highlighted in a red rectangle outline."
  />
  <figcaption>Highlighting an individual value in a summary chart causes the text above to reflect that value's data.</figcaption>
</figure>

By hovering over the dark bar in the highlighted chart above, we now see additional information:
- The bar represents 152 rows of the total, or 44%.
- The variety of penguin selected is "Adelie".

Here is another example, this time a histogram. Before hovering under an individual vertical bar:

<figure>
  <img
    style="border-radius:2px;box-shadow:0 4px 12px rgba(0,0,0,0.15), 0 0 0 1px rgba(0, 0, 0, 0.1);margin-left:27px;margin-bottom:40px;max-width: ${width}"
    src="/cells/cell-modes/data-table/flipperLengthHistogramAll.png" alt="A zoomed in screenshot of the top of the flipper_length_mm column from the last screenshot. It shows a histogram in the summary statistics area."
  />
  <figcaption>Highlighting an individual value in a summary chart causes the text above to reflect that value's data.</figcaption>
</figure>

Here is the same histogram, after the pointer is hovered just under the tallest vertical bar:

<figure>
  <img
    style="border-radius:2px;box-shadow:0 4px 12px rgba(0,0,0,0.15), 0 0 0 1px rgba(0, 0, 0, 0.1);margin-left:27px;margin-bottom:40px;max-width: ${width}"
    src="/cells/cell-modes/data-table/flipperLengthHistogramOneBar.png" alt="A zoomed in screenshot of the top of the flipper_length_mm column with the largest column highlighted with the range of that column shown."
  />
  <figcaption>Highlighting an individual value in a summary chart causes the text above to reflect that value's data.</figcaption>
</figure>

We now see additional information:
- The bar represents 62 rows of the total, or 18%.
- The values in that column range from 190 to 195.

### Null sign results

Earlier we saw a histogram bar with the null sign:

<figure>
  <img
    style="border-radius:2px;box-shadow:0 4px 12px rgba(0,0,0,0.15), 0 0 0 1px rgba(0, 0, 0, 0.1);margin-left:27px;margin-bottom:40px;max-width: ${width}"
    src="/cells/cell-modes/data-table/nullSign.png" alt="A zoomed in screenshot of the top of the flipper_length_mm column with a vertical red rectangle outline around the null column at the far right of the histogram shown in the summary statistics area."
  />
  <figcaption>The null sign represents invalid values.</figcaption>
</figure>

This bar represents results that are invalid. Hovering under this bar causes a message to that effect to be displayed. If you click the bar, the column will display the invalid results. In the following example, "NaN" stands for "Not a Number". 

<figure>
  <img
    style="border-radius:2px;box-shadow:0 4px 12px rgba(0,0,0,0.15), 0 0 0 1px rgba(0, 0, 0, 0.1);margin-left:27px;margin-bottom:40px;max-width: ${width}"
    src="/cells/cell-modes/data-table/flipperLengthNaN.png" alt="."
  />
  <figcaption>"NaN" stands for "Not a Number".</figcaption>
</figure>

To de-select the invalid results, select the null set bar again.

### Selecting results

By pressing the Command/Ctrl key while clicking on a summary chart, you can select partial results in a column. Only the selected results display:

<figure>
  <img
    style="border-radius:2px;box-shadow:0 4px 12px rgba(0,0,0,0.15), 0 0 0 1px rgba(0, 0, 0, 0.1);margin-left:27px;margin-bottom:40px;max-width: ${width}"
    src="/cells/cell-modes/data-table/adelieGentoo.png" alt="The top of the species column in a Data table cell shows Adelie and Gentoo species selected and Chinstrap not selected."
  />
  <figcaption>Use the <code>Command/Ctrl</code> key to select results within a column.</figcaption>
</figure>

Notice also that the background shading of the column changes. To clear the selection, click on the selected result again.

For a column displaying continuous results in a histogram, you can define a selection range, which can be adjusted in size, or dragged to a new location.

:::info NOTE
When defining a selection range, be sure the crosshair (+) cursor is visible.
:::

To clear a selection in a histogram, click the crosshair cursor outside the selection (but still in the histogram area).

### Saving column result selections

If you have defined a column result selection, as described in [Selecting results](#selecting-results) above, you can click the blue **Save** button and your selections are saved as a filter:

<figure>
  <img
    style="border-radius:2px;box-shadow:0 4px 12px rgba(0,0,0,0.15), 0 0 0 1px rgba(0, 0, 0, 0.1);margin-left:27px;margin-bottom:40px;max-width: ${width}"
    src="/cells/cell-modes/data-table/adelieGentooFilter.png" alt="The data cell editor with a filter selected shows that only Adelie and Gentoo species are selected within species and not Chinstrap. There is a 'Save' button in the top right-hand corner of the screenshot indicating how to save the results."
  />
  <figcaption>Column result selections can be saved as a filter.</figcaption>
</figure>

To clear the filter, select the **X** at the right of the filter specification.

#### Text results 

If the column contains values that are best represented by text only, the summary charts display a descriptive message:

<figure>
  <img
    style="border-radius:2px;box-shadow:0 4px 12px rgba(0,0,0,0.15), 0 0 0 1px rgba(0, 0, 0, 0.1);margin-left:27px;margin-bottom:40px;max-width: ${width}"
    src="/cells/cell-modes/data-table/tableCell_ColSumm_Messages_v2.png" alt="The name and brand columns of a Data table cell show that the brand column has all values equaling the string 'Google'."
  />
  <figcaption>Summary charts display text when appropriate.</figcaption>
</figure>

### Interacting with rows of data

In addition to interacting with the columns in the summary charts, you can interact with  the rows of data. Hovering over a row of data causes individual marks in the summary chart to highlight. 

In the following example, the pointer is hovered over the highlighted row. The summary charts have changed to reflect the values in that row.

<figure>
  <img
    style="border-radius:2px;box-shadow:0 4px 12px rgba(0,0,0,0.15), 0 0 0 1px rgba(0, 0, 0, 0.1);margin-left:27px;margin-bottom:40px;max-width: ${width}"
    src="/cells/cell-modes/data-table/penguinsRowInteractivity.png" alt="Some rows of the four columns of a Data table cell populated with penguin data shows one of the rows as selected, which is highlighted with a red rectangle outline. The summary charts at the tops of the columns show just the data from that row as selected."
  />
  <figcaption>Hovering over a row of data highlights individual marks in the summary charts.</figcaption>
</figure>

:::info NOTE
The summary charts are an extension of previous work on the [Summary Table](https://observablehq.com/@observablehq/summary-table)
:::

## Converting to SQL

If you want to create a hand-tuned SQL query on selected results, you can convert a populated Data table cell to a [SQL cell](https://observablehq.com/@observablehq/sql). Select the **+** below a Data table cell and select **Convert to SQL**.

<figure>
  <img
    style="border-radius:2px;box-shadow:0 4px 12px rgba(0,0,0,0.15), 0 0 0 1px rgba(0, 0, 0, 0.1);margin-left:27px;margin-bottom:40px;max-width: ${width}"
    src="/cells/cell-modes/data-table/convertToSQL@1.png" alt="The add cell menu opened up shows two suggestions for the current cell, cell 94: 'Create Chart' and 'Convert to SQL'. The 'Convert to SQL' option is selected and highlighted in blue with the option being highlighted again by a red rectangle outline to point out the UI element."
  />
  <figcaption>Select <b>Convert to SQL</b> to make a new SQL cell with the equivalent query.</figcaption>
</figure>

A new SQL cell appears, with the same columns, filters, sorts, and slices:

<figure>
  <img
    style="border-radius:2px;box-shadow:0 4px 12px rgba(0,0,0,0.15), 0 0 0 1px rgba(0, 0, 0, 0.1);margin-left:27px;margin-bottom:40px;max-width: ${width}"
    src="/cells/cell-modes/data-table/convertedSQLCell@2.png" alt="A Data table cell having been converted to a SQL cell looks similar but now there is a SQL editor section at the bottom highlighted with a red rectangle outline."
  />
  <figcaption>The SQL code in the converted cell.</figcaption>
</figure>

## Custom database clients

You can also use a custom database client as a data source for a Data table cell. In order for a database client to be recognized as a valid data source, it must satisfy the requirements outlined in [DatabaseClient Specification](https://observablehq.com/@observablehq/database-client-specification).

## Databases Panel and Schema Viewer

In combination with the Data table cell, you can make use of the [Databases Panel and Schema Viewer](https://observablehq.com/@observablehq/databases-panel-and-schema-viewer?collection=@observablehq/getting-data-in-and-out) to view a database's schema and insert cells pre-configured for a given database.

## SQL mystery game / Data table cell tutorial

If you're up for a challenge, the [SQL mystery game](https://observablehq.com/@observablehq/sql-mystery-game-data-table-tutorial?collection=@observablehq/sql-mystery-game) notebook asks you to solve a mystery using Data table cells. Take a look!