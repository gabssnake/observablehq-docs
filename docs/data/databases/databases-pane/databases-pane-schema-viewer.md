# Databases pane and schema viewer

The **Databases pane** provides quick access to and exploration of database connections, cells, and attached files.

## Databases pane

Open the **Databases pane** by clicking on the database icon (<Icon name="database" />) in the right margin of your browser window:

<figure>
  <img
    style="border-radius:2px;box-shadow:0 4px 12px rgba(0,0,0,0.15), 0 0 0 1px rgba(0, 0, 0, 0.1);margin-left:27px;margin-bottom:40px;max-width: 70%"
    src="/data/databases/databases-pane/database-pane.png" alt="View of the open Database pane in an Observable notebook, where a user can see existing database connections, database cells, and database files."
  />
  <figcaption>Open the <b>Databases pane</b> to view database connections, cells and attached files.</figcaption>
</figure>

Alternatively, you can open the **Databases pane** by clicking the database icon in any [**SQL cell**](https://observablehq.com/@observablehq/sql-cell) or [**Data table cell**](https://observablehq.com/@observablehq/data-table-cell):

<figure>
  <img
    style="border-radius:2px;box-shadow:0 4px 12px rgba(0,0,0,0.15), 0 0 0 1px rgba(0, 0, 0, 0.1);margin-left:27px;margin-bottom:40px;max-width: ${width}"
    src="/data/databases/databases-pane/sql-cell-database-pane.png" alt="Highlighted database icon in the header of a SQL cell. Clicking on the icon will open the Databases pane."
  />
</figure>

<figure>
  <img
    style="border-radius:2px;box-shadow:0 4px 12px rgba(0,0,0,0.15), 0 0 0 1px rgba(0, 0, 0, 0.1);margin-left:27px;margin-bottom:40px;max-width: ${width}"
    src="/data/databases/databases-pane/dtc-databases-pane.png" alt="Highlighted database icon in the header of a Data table cell. Clicking on the icon will open the <b>Databases pane</b>."
  />
  <figcaption>Click on the database icon to open the <b>Databases pane</b> from any <b>SQL cell</b> (top) or <b>Data table cell</b> (bottom).</figcaption>
</figure>

Within the **Databases pane** you can see an explore **Database connections**, **Database cells**, and **Database files**. 

- **Database connections:** Shows any named databases

- **Database cells:** Shows any cells that can be used with SQL cells like named arrays, SQLite databases, and JSON files

- **Database files:** Shows any files that can be used as a database, like CSVs, JSON files, and SQLite files

Click the insert icon (<svg style="margin-bottom: -0.15em; display: inline !important;" width="16" height="16" viewBox="0 0 16 16" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><path d="M10.2929 8.29291L11.7071 9.70712L9.4142 12L11.7071 14.2929L10.2929 15.7071L6.58577 12L10.2929 8.29291Z"></path><path d="M8 11L14 11L14 13L8 13L8 11Z"></path><path d="M2 3C2 1.89543 2.89543 1 4 1H10L14 5V8H12V6H9V3H4V13H6V15H4C2.89543 15 2 14.1046 2 13V3Z"></path></svg>) to the right of any listed database to insert it into the notebook in a new **SQL cell**.

The three dot menu to the right of each database name (...) provides options to **Refresh schema** (see more below) and **Insert into notebook**. For **Database connections** there are additional options to **Edit details**, which will take you to the **Databases** page in your account **Settings**, and **Copy usage code**, which copies the code for the current source for easy pasting into a JavaScript cell. 

<figure>
  <img
    style="border-radius:2px;box-shadow:0 4px 12px rgba(0,0,0,0.15), 0 0 0 1px rgba(0, 0, 0, 0.1);margin-left:27px;margin-bottom:40px;max-width: 50%"
    src="/data/databases/databases-pane/databasesPanelSubMenu.png" alt="Expanded menu for Database connections, revealing options to Refresh schema, Insert into notebook, Edit details, and Copy usage code."
  />
  <figcaption>In the <b>Databases pane</b>, click the three dot (...) menu to the right of a database name to see more options.</figcaption>
</figure>

## Schema viewer

Within the **Database pane**, you can explore database structure (table and column names) with the **Schema viewer**. 

Click on the database name to see all tables within the database. Below, all tables within the *sampleDB* database (*albums*, *artists*, *playlists*, etc.) are revealed:

<figure>
  <img
    style="border-radius:2px;box-shadow:0 4px 12px rgba(0,0,0,0.15), 0 0 0 1px rgba(0, 0, 0, 0.1);margin-left:27px;margin-bottom:40px;max-width: 50%"
    src="/data/databases/databases-pane/expandedSchema.png" alt="View of database tables within the Databases pane."
  />
  <figcaption>See all tables in a database by clicking on the database name in the <b>Databases pane</b>.</figcaption>
</figure>

To dig a bit deeper, click on any table name to reveal the columns for that table. For example, the *artists* table in the *sampleDB* database is expanded below to reveal two variables: *ArtistId* and *Name*.

<figure>
  <img
    style="border-radius:2px;box-shadow:0 4px 12px rgba(0,0,0,0.15), 0 0 0 1px rgba(0, 0, 0, 0.1);margin-left:27px;margin-bottom:40px;max-width: 50%"
    src="/data/databases/databases-pane/schemaArtistsExpanded.png" alt="Expanded view of database schema revealing column names within a single table."
  />
  <figcaption>Expanded view of database schema.</figcaption>
</figure>

Recall that you are able to access the **Databases pane** directly from **Data table cells** and **SQL cells**, which allows you to quickly explore the schema for databases you're currently working with.