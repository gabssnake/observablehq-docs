# SQLite

Observable supports [SQLite](https://sqlite.org/), "a small, fast, self-contained, high-reliability, full-featured, SQL database engine" and "the most used database engine in the world." Observable's SQLite client uses [sql.js](https://sql.js.org), an open-source Emscripten port of SQLite.

To get started, [attach](https://observablehq.com/@observablehq/file-attachments) a SQLite file to your notebook. Click the <svg style="margin-bottom: -0.15em; display: inline !important;" width="17" height="15" viewBox="-8.5 -7.5 17 15" stroke="currentColor" stroke-width="2" stroke-linecap="round" fill="none"><path d="M0,-4.5V4.5M-4.5,0H4.5"></path></svg> inserter in the left margin to open the [**Add cell menu**](https://observablehq.com/@observablehq/adding-cells), then click choose **File upload** and select your SQLite file. A new [**SQL cell**](https://observablehq.com/@observablehq/sql-cell) will then appear.

<figure>
  <img
    style="border-radius:2px;box-shadow:0 4px 12px rgba(0,0,0,0.15), 0 0 0 1px rgba(0, 0, 0, 0.1);margin-left:27px;margin-bottom:40px;max-width: 80%"
    src="/data/files/file-types/sqlite/insert-sqlite-add-cell-menu.png" alt="View of a new SQL cell with chinook.db as the database source, inserted from the Add cell menu."
  />
  <figcaption>Attach a SQL file and automatically insert a <b>SQL cell</b> through the <b>Add cell menu</b>.</figcaption>
</figure>

Alternatively, you can attach a SQLite file through the **Files pane** (click the <svg style="margin-bottom: -0.15em; display: inline !important;" width="16" height="16" viewBox="0 0 16 16" fill="" stroke-width="2"><path d="M7.19855 2.52175L7.88131 1.79111L7.19855 2.52175ZM12.6 11.7764L13.2581 11.0234L12.6 11.7764ZM5.34191 6.76078L11.9419 12.5293L13.2581 11.0234L6.65809 5.2549L5.34191 6.76078ZM10.8958 13.6864L3.35462 6.63385L1.98852 8.09459L9.52965 15.1472L10.8958 13.6864ZM6.51578 3.25238L13.8172 10.0755L15.1828 8.61419L7.88131 1.79111L6.51578 3.25238ZM3.08395 3.55474C3.91017 2.45311 5.50967 2.31219 6.51578 3.25238L7.88131 1.79111C6.0058 0.0384695 3.02413 0.301162 1.48395 2.35474L3.08395 3.55474ZM3.35462 6.63385C2.49183 5.82695 2.37516 4.49978 3.08395 3.55474L1.48395 2.35474C0.162683 4.11642 0.380169 6.59044 1.98852 8.09459L3.35462 6.63385ZM11.993 13.6551C11.6977 13.9647 11.2082 13.9786 10.8958 13.6864L9.52965 15.1472C10.6432 16.1886 12.3878 16.1388 13.4402 15.0356L11.993 13.6551ZM11.9419 12.5293C12.2764 12.8216 12.2996 13.3337 11.993 13.6551L13.4402 15.0356C14.5328 13.8903 14.4499 12.0651 13.2581 11.0234L11.9419 12.5293Z"></path></svg> icon in right margin to open the **Files pane**, then click <svg style="margin-bottom: -0.15em; display: inline !important;" width="17" height="15" viewBox="-8.5 -7.5 17 15" stroke="currentColor" stroke-width="2" stroke-linecap="round" fill="none"><path d="M0,-4.5V4.5M-4.5,0H4.5"></path></svg> and navigate to your file). After attaching your SQLite file, click the inserter icon (<svg style="margin-bottom: -0.15em; display: inline !important;" width="16" height="16" viewBox="0 0 16 16" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><path d="M10.2929 8.29291L11.7071 9.70712L9.4142 12L11.7071 14.2929L10.2929 15.7071L6.58577 12L10.2929 8.29291Z"></path><path d="M8 11L14 11L14 13L8 13L8 11Z"></path><path d="M2 3C2 1.89543 2.89543 1 4 1H10L14 5V8H12V6H9V3H4V13H6V15H4C2.89543 15 2 14.1046 2 13V3Z"></path></svg>) next to the file to insert it into the notebook in a new **SQL cell**.

<figure>
  <img
    style="border-radius:2px;box-shadow:0 4px 12px rgba(0,0,0,0.15), 0 0 0 1px rgba(0, 0, 0, 0.1);margin-left:27px;margin-bottom:40px;max-width: 60%"
    src="/data/files/file-types/sqlite/insert-sqlite-files-pane.png" alt="Open Files pane revealing an option to insert a database directly in a new SQL cell."
  />
  <figcaption>Insert an attached SQLite file from the <b>Files pane</b>.</figcaption>
</figure>

You can also insert a **SQL cell** from the **Databases pane** (the <svg style="margin-bottom: -0.15em; display: inline !important;" width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M13 4c0 .246-.225.737-1.205 1.227C10.875 5.687 9.535 6 8 6c-1.535 0-2.876-.313-3.795-.773C3.225 4.737 3 4.246 3 4c0-.246.225-.737 1.205-1.227C5.125 2.313 6.465 2 8 2c1.535 0 2.876.313 3.795.773C12.775 3.263 13 3.754 13 4z" stroke="currentColor" stroke-width="2"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M12 6.236c1.227-.55 2-1.348 2-2.236v4.25C14 10.045 11.314 11 8 11s-6-.955-6-2.75V4c0 .888.772 1.687 2 2.236V8.147c.065.063.216.173.542.312C5.291 8.778 6.496 9 8 9c1.504 0 2.709-.222 3.458-.542.326-.139.477-.25.542-.312V6.236zm.042 1.853c.003 0-.002.014-.023.037.01-.026.02-.037.023-.037zm-8.084 0c.003 0 .013.011.023.037-.02-.023-.026-.036-.023-.037z" fill="currentColor"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M12 6.236c1.227-.55 2-1.348 2-2.236v8c0 1.795-2.686 3-6 3s-6-1.205-6-3V4c0 .888.772 1.687 2 2.236V11.934c.046.068.196.23.629.439C5.37 12.733 6.553 13 8 13s2.63-.268 3.371-.627c.433-.21.583-.37.629-.439V6.236zm.018 5.663s-.001.008-.01.021c.005-.014.009-.021.01-.021zm-8.036 0c.001 0 .005.007.01.021-.009-.014-.01-.021-.01-.021z" fill="currentColor"></path></svg> icon in the right notebook margin) by clicking <svg style="margin-bottom: -0.15em; display: inline !important;" width="16" height="16" viewBox="0 0 16 16" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><path d="M10.2929 8.29291L11.7071 9.70712L9.4142 12L11.7071 14.2929L10.2929 15.7071L6.58577 12L10.2929 8.29291Z"></path><path d="M8 11L14 11L14 13L8 13L8 11Z"></path><path d="M2 3C2 1.89543 2.89543 1 4 1H10L14 5V8H12V6H9V3H4V13H6V15H4C2.89543 15 2 14.1046 2 13V3Z"></path></svg> next to the desired database. 

Below is an example showing a SQL query to select everything in the *tracks* table from the [Chinook sample database](https://github.com/lerocha/chinook-database), representing a fictitious music library.

<figure>
  <img
    style="border-radius:2px;box-shadow:0 4px 12px rgba(0,0,0,0.15), 0 0 0 1px rgba(0, 0, 0, 0.1);margin-left:27px;margin-bottom:40px;max-width: ${width}"
    src="/data/files/file-types/sqlite/select-query.png" alt="Table showing the results of a query in the SQL cell immediately below in an Observable notebook. The query reads SELECT * FROM tracks, and selects all columns from the tracks table in the attached chinook.db database."
  />
  <figcaption>SQL query to select all columns from the <i>tracks</i> table in the attached chinook.db database.</figcaption>
</figure>

To reference the results of a SQL query in another notebook cell, give the SQL cell a name. The cell in the image above has the name _tracks_. Its value is an array of objects representing the rows returned by the query, which can be used in JavaScript cells throughout the notebook as shown below.

<figure>
  <img
    style="border-radius:2px;box-shadow:0 4px 12px rgba(0,0,0,0.15), 0 0 0 1px rgba(0, 0, 0, 0.1);margin-left:27px;margin-bottom:40px;max-width: 60%"
    src="/data/files/file-types/sqlite/sql-array-output.png" alt="Screen shot of a JavaScript cell calling the tracks array, the output of a SQL query in an Observable notebook,  to access the Name property of the first row (the song title For Those About to Rock (We Salute You)) using code tracks[0].Name."
  />
  <figcaption>The array of objects <i>tracks</i>, the output of a SQL query, called in a JavaScript cell.</figcaption>
</figure>

You can interpolate a dynamic variable into a SQL query using dollar–curly brace embedded expressions, `${…}`. For example, say you have a variable named _composer_:

```js
composer = "Billy Cobham"
```

You can reference this variable in a [**SQL cell**](https://observablehq.com/@observablehq/sql-cell) query as `${composer}`, like so:

```sql
SELECT * FROM tracks WHERE Composer = ${composer}
```

Any JavaScript expression can go within the curly braces. For example, consider the variable *term* created below:

```js
term = "billy"
```

To do a case-insensitive substring match, you can add percent signs to the interpolated value and use the `LIKE` operator within a query in a [**SQL cell**](https://observablehq.com/@observablehq/sql-cell): 

```sql
SELECT * FROM tracks WHERE Composer LIKE ${`%${term}%`}
```

You can even use a [text input](https://observablehq.com/@observablehq/input-text) to query interactively. This is nice because you don't have to press Shift–Return to see the results—the results are live. However, it also means that the notebook won't remember the last query you entered (though you can specify the initial query using the text input's *value* option).

  <video
    style="border-radius:2px;box-shadow:0 4px 12px rgba(0,0,0,0.15), 0 0 0 1px rgba(0, 0, 0, 0.1);margin-left:27px;margin-bottom:40px;max-width: ${width}"
    src="/data/files/file-types/sqlite/input-sql-interactive-query.mp4" alt="Video showing an interactive SQL query connected to a text input. The user types different names into a text box, and the query results are automatically updated."
    autoplay loop controls = "false">
  </video>

  ## SQLiteDatabaseClient API

For a lower-level API, you can query SQLite from JavaScript directly rather than using SQL cells. For this, first create a SQLite [database client](https://observablehq.com/@observablehq/databases) by calling *file*.sqlite()
:

```js
db = FileAttachment("chinook.db").sqlite()
```

Alternatively, call SQLiteDatabaseClient.open(*source*), where *source* is a URL, fetch Response, Blob, File, ArrayBuffer, or Array (Uint8Array), or a promise to the same. This is convenient when your SQLite file is hosted elsewhere, say on a private server or GitHub.

```js
altdb = SQLiteDatabaseClient.open(FileAttachment("chinook.db").url())
```

To query the database, call *db*.query(*sql*), where *sql* is a SQL string.

```js
customers = db.query(`SELECT * FROM customers`)
```

The *db*.query() function accepts a second *parameters* argument which allows the query to reference dynamic values without allowing arbitrary SQL injection. These parameters can be referenced in the *query* as `$1`, `$2`, *etc.*.

```js
db.query(`SELECT * FROM tracks WHERE Composer LIKE $1`, [`%${term}%`])
```

The _db_.queryRow() function is similar to _db_.query() except that it returns only the first row, or null if the query returns no results.

```js
db.queryRow(`SELECT sqlite_version()`)
```

You can also use the _db_.sql tagged template literal.

```js
db.sql`SELECT * FROM tracks WHERE Composer LIKE ${`%${term}%`}`
```

