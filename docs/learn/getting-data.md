# Getting data into Observable
---

<figure>
  <img
    class="screenshot w-80"
    src="./assets/new-users-course-access-data.png" alt="An illustration of data related items."
  />
  <figcaption></figcaption>
</figure>

---

In order to analyze your data, Observable needs to be able to access it. There are many ways to do this: upload as an attachment, access via an API, query from a database, or retrieve from a cloud document such as Google Sheets.

## Data on Observable

First, let's look at what data even looks like on Observable. You're probably familiar with the tabular representation of datasets, such as this one of olympic athletes.

<figure>
  <img
    class="screenshot w-80"
    src="./assets/tabularData.png" alt="An open JavaScript cell. In the code section of the cell, the viewof operator is used with the Inputs.table() method on the olympians object. This code renders a table of the olympians data set in the presentation section of the cell."
  />
  <figcaption>An example of tabular data in Observable.</figcaption>
</figure>

But the actual data isn't encoded as a table, it's a list of objects, one for each line. They all have the same properties, so that we can fit them into a table. The `name` property gets put into the _name_ column, the `nationality` property into the _nationality_ column, etc.

In an Observable notebook, type in 'olympians' into a JavaScript cell and run the cell. The top part of the cell should now show an Array of JavaScript objects. Then you can see the list of properties of each object.

To see the list, expand the `olympians` array by clicking on the triangle next to the word `Array`, then click on one of the triangles next to the word `Object` to see an individual data object representing one athlete. After doing this, it should look like this:

<figure>
  <img
    style="border-radius:2px;box-shadow:0 4px 12px rgba(0,0,0,0.15), 0 0 0 1px rgba(0, 0, 0, 0.1);margin-left:2px;margin-bottom:40px;max-width: 300px"
    src="./assets/array-object.png" alt="The presentation part of an Observable cell with an Array opened up for inspection. The first element of the array, an object representing a data point, is also open for inspection with all of the properties of the object visible."
  />
  <figcaption>An example of an data object opened for inspection in Observable.</figcaption>
</figure>

Why should you care about how the data is represented? Because that determines how it is processed, e.g., when using functions such as `map()` and `filter()` with accessors that extract individual items from each object they operate on.

## Importing from other notebooks

Perhaps the easiest way to access data is to import it from an existing notebook. This might be one of our [curated datasets](https://observablehq.com/@observablehq/curated-datasets?collection=@observablehq/datasets), or data prepared within your organization.

Importing a dataset works just like importing any other cell: copy the import statement using the menu in the left toolbar of the cell you're looking to import, and paste it into your notebook as shown below.

<div style="max-width: 640px; border-radius: 5px; overflow: hidden; padding: 1rem;">
    <video src="./assets/copy-import-data.mov" alt="Screen capture showing how to copy import code for a dataset, so that data can be imported into another notebook." style="width: 100%; border-radius: 5px; box-shadow: 3px 3px 10px #ccc;" autoplay loop muted></video>
</div>

## File attachments

You can attach files to notebooks by clicking on the paper clip in the toolbar on the right <Icon name="paperclip" />, which opens the files pane. Then, either click on the plus sign or drag and drop files straight onto the pane to upload files for use. Attached files can be easily accessed by using the _insert into notebook_ function to insert a new cell with a code snippet like the one below.

<figure>
  <img
    class="screenshot w-80"
    src="./assets/laserStrikes.png" alt="an open JavaScript Observable cell with a file attachment method FileAttachment() used in the code section on an Excel file and the resulting array of objects representing that data in the presentation section of the cell."
  />
  <figcaption>An Observable cell importing an attached Excel file.</figcaption>
</figure>

The `Laser_Report_2020.xlsx` file, which contains data that the laser strikes table above is based on, is an [Excel XLSX file](https://observablehq.com/@observablehq/xlsx?collection=@observablehq/getting-data-in-and-out). Other common formats are CSV, JSON, as well as images in formats like JPG and PNG.

Learn more about Observable's [File Attachments](https://observablehq.com/@observablehq/file-attachments). 

## Cloud files
<PricingBadge level="pro" />

For Pro and Enterprise workspaces, Observable supports access to [cloud files](https://observablehq.com/@observablehq/cloud-files) hosted on Google or Microsoft. To connect, open up the files pane by clicking the <Icon name="paperclip" /> icon, then click on "Cloud Files." You'll be directed to authenticate and grant access to Observable.

<div style="max-width: 640px; border-radius: 5px; overflow: hidden; padding: 1rem;">
    <video src="./assets/cloud.mov" alt="Screen capture of an Observable notebook showing a user choosing Cloud files from the files pane, selecting to connect to Google cloud files, then being prompted to input authentication information." style="width: 100%; border-radius: 5px; box-shadow: 3px 3px 10px #ccc;" autoplay loop muted></video>
</div>

Once you've authenticated, you'll see all your cloud files available to import directly into a notebook, just like you would with file attachments. To learn more, read our walk through on [cloud files](https://observablehq.com/@observablehq/cloud-files).

## Database access
<PricingBadge level="pro" />

Connecting to secure databases is available for [Enterprise and Pro Teams](https://observablehq.com/pricing) on Observable. But anyone can work with databases in Observable, for example by uploading one, or creating a new one right in Observable from existing files (CSV, parquet, arrow, XLSX, txt, and more!) using an in-browser database client like [DuckDB](https://observablehq.com/@observablehq/duckdb).

Once your database is connected, you can query, clean and analyze the data in Observable's SQL cell. Create a SQL cell by choosing 'Database query' from the Add Cell menu. Select the connected database you want to start working with, then write your SQL code (learn more in our [Exploring a database](https://observablehq.com/guide/murder-mystery) Quick Guide). Your query's output will show as an interactive table like the one pictured below:

<figure>
  <img
    class="screenshot w-80"
    src="./assets/connectedDb.png" alt="An open SQL cell with a SQL query in the code section of the cell and the results of the query in a table in the presentation part of the cell."
  />
  <figcaption>An SQL cell in Observable with the query results shown in a table.</figcaption>
</figure>

## APIs

Observable supports fetching API results directly in notebooks, making it simple to work with live data. Here is an example of retrieving the results from a live API on New York City subway ridership:

<figure>
  <img
    class="screenshot w-80"
    src="./assets/apiData.png" alt="An open JavaScript cell with a D3 .csv() method fetching API data in the code section of the cell for a live data stream in the resulting code section of the cell."
  />
  <figcaption>An example of fetching API data in Observable via D3's .csv() method.</figcaption>
</figure>

Observable supports API secrets for Enterprise, Pro Teams, and Pro Individual workspaces. Free Teams or Free Individuals can still fetch API results, using basic authentication.

| Resources |  |
| :--  | --- | 
| [Fetch with Basic Auth example](https://observablehq.com/@mbostock/fetch-with-basic-auth) | An example of using Basic Auth |
| [Observable Secrets](https://observablehq.com/@observablehq/secrets) | Documentation for securely storing API tokens and secrets |
| [GitHub API starter template](https://observablehq.com/@observablehq/github-api-starter) | Quickly get started using the GitHub API |
| [AWS S3 starter template](https://observablehq.com/@observablehq/aws-s3-api-starter) | Quickly get started using the AWS S3 API |

## Data Table cell

Observable's Data Table cell provides an easy way to put your data in table form and perform some no-code data wrangling and exploration. From the Add Cell menu, search for or scroll to "Data table." Then, choose the data source you want to explore (if it's a connected database, you'll also choose a table within that database). 

An interactive view of the table will appear, with summary information atop each variable and options for filtering, selecting columns, sorting, and slicing rows below. Play with the interactive table below, which shows the "customers" table from the attached "chinook.db" database.

<figure>
  <img
    class="screenshot w-80"
    src="./assets/dataTableCell.png" alt="An open Data table cell with the chinook.db database selected in the configuration section of the cell and tabular data in the presentation section of the cell."
  />
  <figcaption>An Observabe Data table cell.</figcaption>
</figure>

While the existing features in a Data Table cell cover some common data wrangling needs,  you'll eventually need to do more customized querying and analysis (e.g. joins, grouping, renaming, cleaning, and more). 

You can switch over to SQL code using the 'Convert to SQL mode' button, which will convert your current query to SQL and keep adding or editing custom SQL code.

To dive deeper on Data table cell, check out our [official documentation](/cells/data-table).
