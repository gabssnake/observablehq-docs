# Connecting to databases

<a class="pro-label" href="https://observablehq.com/pricing">Learn more about Pro</a>

Observable database clients allow secure and convenient querying of SQL databases from private notebooks. You can explore the contents of a database table using the [**Data table cell**](https://observablehq.com/@observablehq/data-table-cell?collection=@observablehq/getting-data-in-and-out), query the database using [the **SQL cell**](https://observablehq.com/@observablehq/sql-cell?collection=@observablehq/getting-data-in-and-out), or feed query results directly into visualizations.

  <video
    style="border-radius:2px;box-shadow:0 4px 12px rgba(0,0,0,0.15), 0 0 0 1px rgba(0, 0, 0, 0.1);margin-left:27px;margin-bottom:40px;max-width: ${width}"
    src="/data/databases/connecting-to-databases/db-access-query.mp4" alt="Video showing an interactive SQL query connected to a text input. The user types different names into a text box, and the query results are automatically updated."
    autoplay loop controls = "false">
  </video>

This walkthrough discusses connecting notebooks to databases that are reachable from the public internet, with the connection hosted by Observable. If you wish to use your notebooks to query a database on your local computer, or on a private network, we also provide a [self-hosted database proxy](https://observablehq.com/@observablehq/self-hosted-database-proxies) that you may prefer to use.

Some databases can be accessed directly from the web browser, and do not require a web proxy. See our [database clients collection](https://observablehq.com/collection/@observablehq/database-clients) for examples of connecting to Datasette, [DuckDB](https://observablehq.com/@observablehq/duckdb?collection=@observablehq/database-clients), MapD, SQLite, QuestDB, etc.

## Supported databases

We currently support the following hosted database connectors: 

| Connector | Driver Version | 
| --- | --- |
| Amazon Redshift (PostgreSQL driver) | 8.7.1 ([details](https://node-postgres.com/announcements)) |
| BigQuery | 4.7.0 ([details](https://www.npmjs.com/package/@google-cloud/bigquery)) |
| Databricks | 1.0.0 ([details](https://github.com/databricks/databricks-sql-nodejs/blob/main/CHANGELOG.md)) |
| Mongo SQL | 2.14.5 ([details](https://www.mongodb.com/docs/bi-connector/current/release-notes/))
| MySQL | 2.18.1 ([details](https://github.com/mysqljs/mysql))|
| Oracle | 5.5.0 ([details](https://node-oracledb.readthedocs.io/en/latest/release_notes.html))
| PostgreSQL | 8.7.1 ([details](https://node-postgres.com/announcements)) |
| Snowflake | 1.5.2 ([details](https://github.com/snowflakedb/snowflake-connector-nodejs/releases)) |
| SQL Server  | 9.0.1 ([details](https://github.com/tediousjs/node-mssql/blob/master/CHANGELOG.txt))  |

::: info NOTE
If you need to define a custom database client, see the [DatabaseClient Specification](https://observablehq.com/@observablehq/database-client-specification).
:::

## Setting up a database

You can create a database client for personal use or to share with a [team](https://observablehq.com/@observablehq/team-creation-and-administration). The database client is only accessible from that user or team's private notebooks. Sharing or publishing a notebook that uses a database connector will immediately revoke that notebook's access to the database.

We highly recommend that you use an SSL-encrypted connection and set up a read-only database user—perhaps also restricted via SQL `GRANT` permissions to only be able to read the relevant tables and columns—specifically for connecting to Observable.

To get started, navigate to the **Databases tab** in the left margin of your Observable account **Home** or **Settings** pages.

<figure>
  <img
    style="border-radius:2px;box-shadow:0 4px 12px rgba(0,0,0,0.15), 0 0 0 1px rgba(0, 0, 0, 0.1);margin-left:27px;margin-bottom:40px;max-width: 40%"
    src="/data/databases/connecting-to-databases/databases-tab.png" alt="Screen shot of the Databases tab on the Home page in an Observable account."
  />
  <figcaption><b>Databases tab</b> access from your account <b>Home</b> or <b>Settings</b>.</figcaption>
</figure>

This will take you to a Databases page where you can see existing databases connections, or add new ones. Click the <b>New database</b> button, which will take you to a new window where you are prompted to configure a new database connection. 

<figure>
  <img
    style="border-radius:2px;box-shadow:0 4px 12px rgba(0,0,0,0.15), 0 0 0 1px rgba(0, 0, 0, 0.1);margin-left:27px;margin-bottom:40px;max-width: 60%"
    src="/data/databases/connecting-to-databases/db-setup.png" alt="Screen shot of database configuration window, where a user is prompted to input database name, type, host and port information, and user information."
  />
  <figcaption>Setting up a new database client.</figcaption>
</figure>

Database connections are tested when they're saved, and show a warning if the client has write permissions or if the connection has problems. Connections over SSL are encrypted, but not (yet) verified, as most cloud database hosts either provide their own certification authority, or issue unverifiable certificates.

In addition, you can also choose whether to share each database with members of guest roles in your organization via the __Allow guest access__ option when creating or updating a database. Databases are not shared with guests by default.

::: info NOTE
Guest users have access to any database enabled with <b>Allow guest access.</b> Access is not governed by the notebooks shared with them.
:::

## Allow-listing our servers

If your database requires allow-listing, you should allow the following IP addresses:

```
44.206.16.243
44.193.71.39
44.205.191.175
44.197.63.115
```

## Data table cell and SQL cell

Observable offers two specialized cell types for exploring databases: the **Data table cell** and the **SQL cell**. Both communicate directly with your database, and their results can be used anywhere in the notebook by setting a name for them. 

The [**Data table cell**](https://observablehq.com/@observablehq/data-table-cell?collection=@observablehq/getting-data-in-and-out) shows the contents of a database table and allows users to filter, sort, select columns, and limit the number of rows shown without writing code. **Data table cells** can be converted to SQL for further editing.

<figure>
  <img
    style="border-radius:2px;box-shadow:0 4px 12px rgba(0,0,0,0.15), 0 0 0 1px rgba(0, 0, 0, 0.1);margin-left:27px;margin-bottom:40px;max-width: ${width}"
    src="/data/databases/connecting-to-databases/dtc-database.png" alt="Screen shot of a new Data table cell, with a database selected but without a specific table selected."
  />
  <figcaption>View and wrangle data from databases in the <b>Data table cell</b>.</figcaption>
</figure>


The [**SQL cell**](https://observablehq.com/@observablehq/sql-cell?collection=@observablehq/getting-data-in-and-out) lets you specify a query using SQL, and shows the result as a table.

<figure>
  <img
    style="border-radius:2px;box-shadow:0 4px 12px rgba(0,0,0,0.15), 0 0 0 1px rgba(0, 0, 0, 0.1);margin-left:27px;margin-bottom:40px;max-width: ${width}"
    src="/data/databases/connecting-to-databases/sql-database.png" alt="Screen shot of a SQL cell, with code to query a selected database."
  />
  <figcaption>Query a database and view results in a <b>SQL cell</b>.</figcaption>
</figure>

The results of **Data table cell** and **SQL cell** queries can be used in other code once they are given a name. For example, the output of the SQL cell above is an array of objects called *namePopularity*, which can be called in other cells throughout the notebook.

## Programmatically creating a database client

In addition to the above, database clients can also be created programmatically in a notebook. See [the DatabaseClient function in Observable's standard library](https://observablehq.com/@observablehq/stdlib#databaseClientSection) for details.

### Got a different setup?

Need to access a different type of database? Or a connection option aside from the [self-hosted database proxies](https://observablehq.com/@observablehq/self-hosted-database-proxies)? See the [DatabaseClient Specification](https://observablehq.com/@observablehq/database-client-specification) or let us know at support@observablehq.com.