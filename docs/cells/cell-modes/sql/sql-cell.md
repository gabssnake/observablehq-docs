# SQL cell

In addition to JavaScript, Markdown, and other [types of cells](https://observablehq.com/@observablehq/cell-modes), Observable's SQL cell type enables easy exploration of databases. You can connect a SQL cell to a database, view the schema of the database, write a SQL query directly in the cell, and view the results of that query as a table.

To use a SQL cell, you first need a database, which can either be an [external database](https://observablehq.com/@observablehq/databases), a [SQLite file](https://observablehq.com/@observablehq/sqlite), or a [custom database client](https://observablehq.com/@observablehq/database-client-specification). External databases are only allowed in private notebooks, but SQLite files and custom database clients can work in both public and private notebooks.

Once you have your database, create a SQL cell by inserting a new cell and selecting **Database query** in the cell menu. You'll then see a selector in the cell that allows you to select a database. You can select either an external database that you've set up on your workspace, a SQLite file attachment, or a DatabaseClient you've defined in another JavaScript cell.

With your database selected, you're ready to enter a query!

Below, we show what's possible with SQL cells using a sample SQLite database client. The examples below use the Chinook sample database, which represents a set of music-related data.

<figure>
  <img
    style="border-radius:2px;box-shadow:0 4px 12px rgba(0,0,0,0.15), 0 0 0 1px rgba(0, 0, 0, 0.1);margin-left:27px;margin-bottom:40px;max-width: ${width}"
    src="/cells/cell-modes/sql/chinookDbSqlCell.png" alt="A screenshot of a SQL cell filled with data and some SQL code in the code editor section."
  />
  <figcaption>The Chinook sample database as it appears in a SQL cell.</figcaption>
</figure>

## Schema browser

The schema browser shows the structure of a database. It helps you compose a SQL query by showing which tables are available, which columns each table has, and the associated column types.

<figure>
  <img
    style="border-radius:2px;box-shadow:0 4px 12px rgba(0,0,0,0.15), 0 0 0 1px rgba(0, 0, 0, 0.1);margin-left:27px;margin-bottom:40px;max-width: 300px"
    src="/cells/cell-modes/sql/schemaBrowser.png" alt="An open databases pane reveals the schema browser."
  />
  <figcaption>The schema browser in the databases pane.</figcaption>
</figure>


To view the tables in a particular database, click on the database to expand it. You can click on the database again to collapse it. Likewise, to show or hide the columns in a particular table, click on the table to expand or collapse it. The names of the columns are shown on the left; the types are shown on the right in gray.

For convenience, you can click on the <svg style="position: relative; top: 0.1em; display: inline !important;" width="16" height="16" viewBox="0 0 16 16" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><path d="M10.2929 8.29291L11.7071 9.70712L9.4142 12L11.7071 14.2929L10.2929 15.7071L6.58577 12L10.2929 8.29291Z"></path><path d="M8 11L14 11L14 13L8 13L8 11Z"></path><path d="M2 3C2 1.89543 2.89543 1 4 1H10L14 5V8H12V6H9V3H4V13H6V15H4C2.89543 15 2 14.1046 2 13V3Z"></path></svg> button to quickly insert a SQL cell already connected to the given database.

## Example SQL queries

To query a database, write SQL into the editor and then click the play <svg style="position: relative; top: 0.1em; display: inline !important;" width="16" height="16" fill="currentColor" stroke="currentColor" stroke-linejoin="round" stroke-width="2" viewBox="0 0 16 16"><path d="M4 12.4788V3.52116C4 2.23802 5.50646 1.54723 6.47878 2.38451L11.68 6.86335C12.375 7.46178 12.375 8.53822 11.68 9.13665L6.47878 13.6155C5.50646 14.4528 4 13.762 4 12.4788Z"></path></svg> button to run the query. You can also use the Shift-Enter keyboard shortcut to commit and run your query.

<figure>
  <img
    style="border-radius:2px;box-shadow:0 4px 12px rgba(0,0,0,0.15), 0 0 0 1px rgba(0, 0, 0, 0.1);margin-left:27px;margin-bottom:40px;max-width: ${width}"
    src="/cells/cell-modes/sql/trackQuery.png" alt="A screenshot of a SQL cell with the chinook.db source with SQL code entered to select everything from the table 'tracks'."
  />
  <figcaption>Selecting everything from the tracks table.</figcaption>
</figure>

To reference the results of a query from another cell, click on the cell name input in the toolbar. The cell above is unnamed, and so shows `cell 508`; the cell below has been named `longTracks`.

<figure>
  <img
    style="border-radius:2px;box-shadow:0 4px 12px rgba(0,0,0,0.15), 0 0 0 1px rgba(0, 0, 0, 0.1);margin-left:27px;margin-bottom:40px;max-width: ${width}"
    src="/cells/cell-modes/sql/orderByQuery.png" alt="A screenshot of a SQL cell with the chinook.db source with SQL code entered to select everything from the table 'tracks' and show just the top 10 longest."
  />
  <figcaption>The cell is able to be referenced from elsewhere in the notebook using the name of the cell, <code>longTracks</code>.</figcaption>
</figure>

The value of a SQL cell is an array of objects representing the query results:

<figure>
  <img
    style="border-radius:2px;box-shadow:0 4px 12px rgba(0,0,0,0.15), 0 0 0 1px rgba(0, 0, 0, 0.1);margin-left:27px;margin-bottom:40px;max-width: ${width}"
    src="/cells/cell-modes/sql/sqlAsArray.png" alt="A screenshot of a JavaScript cell referencing the longtracks cell with the resulting value as an array of JavaScript objects."
  />
  <figcaption>Referencing <code>longtracks</code> from another cell renders the value as an array of JavaScript objects.</figcaption>
</figure>

Most database clients also expose some schema information alongside query results. For example, the SQLite databases expose a _columns_ property including the names of the selected columns in the order they were selected.

<figure>
  <img
    style="border-radius:2px;box-shadow:0 4px 12px rgba(0,0,0,0.15), 0 0 0 1px rgba(0, 0, 0, 0.1);margin-left:27px;margin-bottom:40px;max-width: ${width}"
    src="/cells/cell-modes/sql/longtracksColumns.png" alt="A screenshot of an open JavaScript cell referencing the longtracks cell and columns property to get an array of column names in the presentation section of the cell."
  />
  <figcaption>Using SQLite's <i>columns</i> property to get an array of column names.</figcaption>
</figure>

We can also make a query dynamic by adding parameters. SQL cells function exactly the same way as the [DatabaseClient `sql` tagged template literal](https://observablehq.com/@observablehq/databases#sql): we can interpolate parameters into the query by wrapping them in `${…}`.

For example, here we use a [text input](https://observablehq.com/@observablehq/input-text) to query a table interactively.

<figure>
  <img
    style="border-radius:2px;box-shadow:0 4px 12px rgba(0,0,0,0.15), 0 0 0 1px rgba(0, 0, 0, 0.1);margin-left:27px;margin-bottom:40px;max-width: ${width}"
    src="/cells/cell-modes/sql/interactiveSQL.png" alt="In the first cell is an input form where the user can put in any name they want to match in the SQL query. In the second cell is the modification to the code so that it finds anything like the inputed name in the previous cell. The final cell is an SQL cell with SQL that is interpolated with the modified name code from the second cell."
  />
  <figcaption>Interactive queries using Observable inputs and interpolation in SQL code.</figcaption>
</figure>

## Summary charts

The small graphics at the top of each column provide a quick summary of key data characteristics for each column below:

<figure>
  <img
    style="border-radius:2px;box-shadow:0 4px 12px rgba(0,0,0,0.15), 0 0 0 1px rgba(0, 0, 0, 0.1);margin-left:27px;margin-bottom:40px;max-width: ${width}"
    src="/cells/cell-modes/sql/SQLCell_SummaryChartHeaders_v2.png" alt="The screenshot shows summary charts at the top of each column's data in a SQL cell."
  />
  <figcaption>Each small chart provides a summary of that column's data.</figcaption>
</figure>

Summary charts are interactive: when you hover over a summary, you can get more detailed information. By moving your mouse along the displayed values, you can see individual values for each histogram or bar chart segment. Compare the following figure with the previous one:

<figure>
  <img
    style="border-radius:2px;box-shadow:0 4px 12px rgba(0,0,0,0.15), 0 0 0 1px rgba(0, 0, 0, 0.1);margin-left:27px;margin-bottom:40px;max-width: ${width}"
    src="/cells/cell-modes/sql/SQLCell_SummaryTableInteractive_v2.png" alt="The screenshot shows summary charts at the top of each of three columns: Composer, Milliseconds, and Bytes. There is a red rectangle highlighting the summary chart at the top of the Composer column to draw attention to this area of the screenshot. An individual value is selected in the summary chart and the text in the rows reflect the appropriate data given the individual selected."
  />
  <figcaption>Highlighting an individual value in a summary chart causes the accompanying text to reflect that value's data.</figcaption>
</figure>

By hovering over the dark bar in the highlighted chart above, we now see additional information:
- The bar represents 6 rows of the total, or 6.7%.
- The composer selected is "Jimmy Page".

Here is another example, this time a histogram. Before hovering over an individual vertical bar:

<figure>
  <img
    style="border-radius:2px;box-shadow:0 4px 12px rgba(0,0,0,0.15), 0 0 0 1px rgba(0, 0, 0, 0.1);margin-left:27px;margin-bottom:40px;max-width: ${width}"
    src="/cells/cell-modes/sql/SQLCell_Hist_Before.png" alt="The screenshot shows the top of the Bytes column with a histogram representing the summary data of that column."
  />
  <figcaption>A histogram summary chart before any individual vertical bar is highlighted.</figcaption>
</figure>

Here is the same histogram, after the pointer is hovered over one of the vertical bars:

<figure>
  <img
    style="border-radius:2px;box-shadow:0 4px 12px rgba(0,0,0,0.15), 0 0 0 1px rgba(0, 0, 0, 0.1);margin-left:27px;margin-bottom:40px;max-width: ${width}"
    src="/cells/cell-modes/sql/SQLCell_Hist_After.png" alt="The screenshot shows the top of the Bytes column with a histogram representing the summary data of that column. One bar is highlighted while the rest are not."
  />
  <figcaption>A histogram summary chart after one individual vertical bar is highlighted.</figcaption>
</figure>

We now see additional information:
- The bar represents 28 rows of the total, or 31%.
- The values in that column range from 10M bytes to 20M bytes.

If the column contains values that are best represented by text only, the summary charts display a descriptive message:

<figure>
  <img
    style="border-radius:2px;box-shadow:0 4px 12px rgba(0,0,0,0.15), 0 0 0 1px rgba(0, 0, 0, 0.1);margin-left:27px;margin-bottom:40px;max-width: ${width}"
    src="/cells/cell-modes/sql/SQLCell_Message.png" alt="A screenshot of the top of the UnitPrice column with a summary showing that all values are .99."
  />
  <figcaption>Summary charts display text when appropriate.</figcaption>
</figure>

The types of columns available in summary charts are:
- *Continuous columns* display a histogram showing the distribution of values.
- *Categorical columns* display a stacked bar chart of the frequency of each value.

Special cases use text to clarify uniform or unique values:
- All values are the same (for a continuous or categorical column).
- All values are unique (for a categorical column).

In addition to interacting with the columns in the summary charts, you can interact with  the rows of data. Hovering over a row of data causes individual marks in the summary chart to highlight. 

In the following example, the pointer is hovered over the row with "Dazed and Confused". This results in the vertical bars for "Dazed and Confused" and "Jimmy Page" (the composer) to be highlighted. (Values in the other columns are also highlighted, but are harder to see in the example.)

<figure>
  <img
    style="border-radius:2px;box-shadow:0 4px 12px rgba(0,0,0,0.15), 0 0 0 1px rgba(0, 0, 0, 0.1);margin-left:27px;margin-bottom:40px;max-width: ${width}"
    src="/cells/cell-modes/sql/rowHoverSummaryCharts.png" alt="A screenshot of five columns of a SQL cell with the tops of the columns Name and Composer highlighted with red rectangle outlines to draw attention to them. One of the rows is highlighted in a red rectangle outline as well, drawing attention to the fact that it is the selected row that is modifying the summary charts at the top of the Name and Composer columns."
  />
  <figcaption>Hovering over a row of data highlights individual marks in the summary charts.</figcaption>
</figure>

## Custom database clients

We can also use a custom database client as a data source for a SQL cell. In order for a database client to be recognized as a valid data source, it must satisfy the requirements outlined in [DatabaseClient Specification](https://observablehq.com/@observablehq/database-client-specification).

Here's an oversimplified example where any query returns the same static value. You can extend this example to return data from any source. See the [DuckDB Client for Observable](https://observablehq.com/@cmudig/duckdb-client) for a fully-fledged example of this.

<figure>
  <img
    style="border-radius:2px;box-shadow:0 4px 12px rgba(0,0,0,0.15), 0 0 0 1px rgba(0, 0, 0, 0.1);margin-left:27px;margin-bottom:40px;max-width: ${width}"
    src="/cells/cell-modes/sql/customDbClient.png" alt="A screenshot of three cells. In the first a JavaScript class is defined. In the second cell an instance of that class is instantiated and named 'custom'. In the third cell, an SQL cell, the database is the data source."
  />
  <figcaption>Defining a custom DB client for use with an SQL cell.</figcaption>
</figure>

