# DuckDB

Observable's [DuckDB](https://duckdb.org/) client lets you query tabular data of any form using SQL. DuckDB supports a variety of popular file formats, including CSV, TSV, JSON, [Apache Arrow](https://arrow.apache.org/), and [Apache Parquet](https://parquet.apache.org/). You can also query in-memory data such as arrays of objects and Apache Arrow tables.

To get started, first create a client by calling DuckDBClient.of(_tables_) in a JavaScript cell. For example, the _gaiadb_ client below has a single table, _gaia_, populated from an Arrow file, _gaia-sample.arrow_. (This astronomical data is from the [Gaia Archive](https://gea.esac.esa.int/archive/) via [Jeff Heer](https://observablehq.com/@uwdata/peeking-into-the-gaia-star-catalog).)

```js
gaiadb = DuckDBClient.of({
  gaia: FileAttachment("gaia-sample.arrow")
})
```

The _tables_ argument to DuckDBClient.of defines the tables of the database. Each key represents a table name, while the value corresponds to the table's data. Data can be expressed in a variety of forms:

* A CSV file (.csv)
* A TSV file (.tsv)
* A JSON file (.json)
* An Arrow file (.arrow)
* A Parquet file (.parquet)
* An Arrow table (Apache Arrow version 9 or later)
* An array of objects

Once you've declared your DuckDBClient in a cell, create a [SQL cell](https://observablehq.com/@observablehq/sql-cell) or [data table cell](https://observablehq.com/@observablehq/data-table-cell) and select your client as the data source. For example, the SQL cell below selects a random sample from the _gaia_ table.

<figure>
  <img
    style="border-radius:2px;box-shadow:0 4px 12px rgba(0,0,0,0.15), 0 0 0 1px rgba(0, 0, 0, 0.1);margin-left:27px;margin-bottom:40px;max-width: ${width}"
    src="/data/files/file-types/duckdb/duckdb-sample.png" alt="SQL cell with gaiadb selected as the source, with code SELECT * FROM gaia USING SAMPLE 10% in the cell to select a random sample from the gaia table. The output of the query is previewed in a table above."
  />
  <figcaption>Random sample from the gaia table in the gaiadb database, with query output previewed above.</figcaption>
</figure>

By naming the SQL cell, such as _stars_ above, you can access the query results from another cell. The query results are represented as an array of objects.

You can specify multiple tables when creating your DuckDBClient. Tables do not need to come from identical file types—you can mix and match data formats for different tables, for example to join data from a CSV file with JSON data fetched from an API. Conveniently, DuckDB does automatic type inference on CSV and TSV files.

The code below (in a JavaScript cell) creates a new database client named *stocks*. The database contains four tables: *aapl*, *amzn*, *goog*, and *ibm*.

```js
stocks = DuckDBClient.of({
  aapl: FileAttachment("aapl.csv"),
  amzn: FileAttachment("amzn.csv"),
  goog: FileAttachment("goog.csv"),
  ibm: FileAttachment("ibm.csv")
})
```

To pass additional options to the underlying [AsyncDuckDB](https://shell.duckdb.org/docs/classes/index.AsyncDuckDB.html) instance when creating tables, pass a {_file_, ..._options_} object as the table value instead of a bare file, or similarly a {_data_, ..._options_} object instead of the data directly. For example, below we specify the _dateFormat_ option for CSV files, allowing DuckDB to parse dates not in the ISO 8601 format.

```js
moviesdb = DuckDBClient.of({
  movies: {
    file: FileAttachment("movies.csv"),
    dateFormat: "%b %d %Y" // e.g. Jun 12 1998
  }
})
```

You can also use the JavaScript DuckDBClient API directly:

* _db_.**query**(_string_, _params_, _options_)
* _db_.**queryRow**(_string_, _params_, _options_)
* _db_.**queryStream**(_string_, _params_, _options_)
* _db_.**sql**(_strings_, ..._params_)
* _db_.**describeTables**({_schema_, _database_})
* _db_.**describeColumns**({_table_, _schema_, _database_})

For example, using the *stocks* database created above, you can use the API directly in a JavaScript cell: 

```js
stocks.query("SELECT Open, Close, Volume FROM aapl WHERE Volume > ?", [100_000_000])
```

See the [DatabaseClient specification](https://observablehq.com/@observablehq/database-client-specification) for details on JavaScript DuckDBClient API methods. 

In some cases, it may also be convenient to create [derived views](https://observablehq.com/@observablehq/derived-views-with-duckdb) with DuckDB.

::: info NOTE
Our DuckDB [database client](https://observablehq.com/@observablehq/database-client-specification) [implementation](https://github.com/observablehq/stdlib/blob/main/src/duckdb.js) is based on [previous work](https://observablehq.com/@cmudig/duckdb) by the [CMU Data Interaction Group](https://dig.cmu.edu/) and uses the [WebAssembly version of DuckDB](https://github.com/duckdb/duckdb-wasm). It is released under the [ISC license](https://github.com/observablehq/stdlib/blob/main/LICENSE) as part of the [Observable standard library](https://github.com/observablehq/stdlib).
:::
