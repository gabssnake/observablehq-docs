# Databases pane and schema viewer

The **Databases pane** provides quick access to and exploration of database connections, cells, and attached files.

## Databases pane

Open the **Databases pane** by clicking on the database icon (<svg style="margin-bottom: -0.15em; display: inline !important;" width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M13 4c0 .246-.225.737-1.205 1.227C10.875 5.687 9.535 6 8 6c-1.535 0-2.876-.313-3.795-.773C3.225 4.737 3 4.246 3 4c0-.246.225-.737 1.205-1.227C5.125 2.313 6.465 2 8 2c1.535 0 2.876.313 3.795.773C12.775 3.263 13 3.754 13 4z" stroke="currentColor" stroke-width="2"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M12 6.236c1.227-.55 2-1.348 2-2.236v4.25C14 10.045 11.314 11 8 11s-6-.955-6-2.75V4c0 .888.772 1.687 2 2.236V8.147c.065.063.216.173.542.312C5.291 8.778 6.496 9 8 9c1.504 0 2.709-.222 3.458-.542.326-.139.477-.25.542-.312V6.236zm.042 1.853c.003 0-.002.014-.023.037.01-.026.02-.037.023-.037zm-8.084 0c.003 0 .013.011.023.037-.02-.023-.026-.036-.023-.037z" fill="currentColor"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M12 6.236c1.227-.55 2-1.348 2-2.236v8c0 1.795-2.686 3-6 3s-6-1.205-6-3V4c0 .888.772 1.687 2 2.236V11.934c.046.068.196.23.629.439C5.37 12.733 6.553 13 8 13s2.63-.268 3.371-.627c.433-.21.583-.37.629-.439V6.236zm.018 5.663s-.001.008-.01.021c.005-.014.009-.021.01-.021zm-8.036 0c.001 0 .005.007.01.021-.009-.014-.01-.021-.01-.021z" fill="currentColor"></path></svg>) in the right margin of your browser window:

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