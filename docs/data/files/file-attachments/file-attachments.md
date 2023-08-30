# File attachments

The quickest way to work with small-ish datasets in an Observable notebook is to attach a file. Observable supports attaching a variety of file types including CSV, JSON, and XLSX files, as well as videos and images.

## Attaching files to a notebook

To attach a file to a notebook:

1. Open the **Files pane** by clicking the paperclip icon in the top-right corner of the notebook. The **Files pane** will appear, revealing the **File attachments menu item** (also with a paperclip icon).
2. In the **Files pane**, click the plus sign icon to select a file, or drag and drop a file directly from your computer onto the open **Files pane**.

<figure>
  <img
    style="border-radius:2px;box-shadow:0 4px 12px rgba(0,0,0,0.15), 0 0 0 1px rgba(0, 0, 0, 0.1);margin-left:27px;margin-bottom:40px;max-width: 70%"
    src="/data/files/file-attachments/files-pane.png" alt="Screen shot of open Files pane and File attachments menu item, accessed via the paperclip icon in the top right of an Observable notebook."
  />
  <figcaption>Access the <b>Files pane</b> in the top right of your notebook to attach a file.</figcaption>
</figure>

File attachments behave predictably:

- Files are copied when you fork or merge a notebook.
- Files can be reused across notebooks through [imports](https://observablehq.com/@observablehq/import?collection=@observablehq/notebook-fundamentals).
- You can go back in time in notebook [history](https://observablehq.com/@observablehq/history?collection=@observablehq/editing-publishing-collaborating) and see when a file was attached (as long as they were not deleted).
- In Free accounts, all files are visible, and the history of which files were attached to which versions of the notebook is also visible.
- If you are a [Pro or Enterprise user](https://observablehq.com/@observablehq/hello-pro), files in your private notebooks remain private. That is, those files are only accessible from your notebooks.
- And because Observable is designed for tinkering, you can even play with your local files in other people’s notebooks, then fork to upload your files and save your work.

### File size limits

- An individual user can upload up to 50 megabytes (MB) of data.
- Over a 28-day period, there’s a rolling quota of 1GB per user.
- For teams (Free Teams, Pro Teams, and Enterprise), the quota is pooled for all editors on the team. For example, a team with 10 editors has a 10GB quota.
- There is no cap on the total file size usage per user. (For larger files, you’ll either need to host the files yourself, or use a [local file input](https://observablehq.com/@observablehq/input-file).)

### Speed tips

Here are a few alternate methods to attach files in a notebook:

- Drag the file over the notebook, and the **Files pane** will automatically appear. Release the file over the open **Files pane**, and Observable will add it to the **Files list**.
- Open the **[Add cell menu](https://observablehq.com/@observablehq/adding-cells?collection=@observablehq/notebook-fundamentals#addCellMenu)**, and choose **File attachment** from there.
- Create a JavaScript cell, then copy a file type that `FileAttachment` knows how to interpret (the ones mentioned in this notebook) to your clipboard. Paste the file into the JavaScript cell, and Observable will automatically upload the file and create the proper `FileAttachment` call.
- Press Shift-Command-U (⇧⌘U) while editing a cell. This will display a modal for selecting files. Once you have selected and uploaded the file, Observable automatically inserts the proper `FileAttachment` call for the file.

## Private file storage

<span style="color: #fff; background-color: #A463F2; padding: 2px; padding-left: 4px; padding-right: 4px; border-radius: 4px; font-size: 14px; font-weight: 700; font-family: sans-serif;">Enterprise</span><a style="font-size: small; font-family: sans-serif; padding-left: 5px" href="/pricing">Learn more about Enterprise</a>

Private file storage allows Enterprise users the ability to use their own organization-managed s3 bucket for the purposes of storing file attachments. This is different from the default file attachment experience, which is to store them in an Observable-managed bucket. If you have more stringent data security practices in your Enterprise organization that require you to store data on organization controlled infrastructure, this is the right option for storing your notebooks’ file attachments.

If you are a workspace admin for your organizations’ Enterprise account and want to utilize this feature, follow our [instructions to enable Private file storage](https://observablehq.com/@observablehq/private-file-storage-setup).

For more technical details regarding how the Private file storage experience compares with the default experience and how the two will interact, see our [FAQ reference notebook](https://observablehq.com/@observablehq/private-file-storage-faq).

## Using files

To use a file, first pass the file’s name to the built-in `FileAttachment` function from the Observable standard library:

```js
attachment = FileAttachment("example.json")
```

Calling `FileAttachment` doesn’t immediately load the file—the contents are only loaded when you request them. It’s a bit like the [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch): there are async methods that return the file’s contents in different forms, such as JSON, CSV, or ArrayBuffer. You choose the appropriate method based on how you want to consume the file.

## Examples

Here are a few examples, each using a version of `FileAttachment`*`.APImethod`* within a JavaScript cell, where *APImethod* stands for .xlsx, .csv, and other specific methods for different file types. These methods are listed in a table later in this notebook.

### XLSX files

See [FileAttachment.xlsx()](https://observablehq.com/@observablehq/xlsx?collection=@observablehq/getting-data-in-and-out) for details.

```js
workbook = FileAttachment("Laser_Report_2020@1.xlsx").xlsx()
```



### ZIP files

See [FileAttachment.zip()](https://observablehq.com/@observablehq/zip?collection=@observablehq/getting-data-in-and-out) for details.

```js
dogZip = FileAttachment("Dog_Photos@3.zip").zip()
```

### JSON files

```js
json = FileAttachment("example.json").json()
```

### CSV files

```js
data = FileAttachment("example.csv").csv()
```

Observable will automatically detect the first row in a CSV file as the column headers. You can retrieve those values using `data.columns` (replacing `data` with the name of your data).

By default, the values in your CSV file will be parsed as strings. If you need the values to be parsed as integers, you can add a `typed:true` to the CSV method to automatically infer file types:

```js
typed = FileAttachment("example.csv").csv({typed: true})
```

The ability to automatically infer file types is from D3’s `autotype`; read more about that here: [d3.autoType](https://observablehq.com/@d3/d3-autotype).

If you’d rather have an array of arrays and not treat the first row as the header, use the *array* option. (This can be combined with the *typed* option, too.)

```js
array = FileAttachment("example.csv").csv({array: true})
```

If you want to perform more complicated parsing on the rows — for instance, if there are commas in the number values — you can use a chained promise to write a custom parsing function.

```js
exampleData = FileAttachment("example.csv").csv()
  .then(data => {
    const parseCommas = (d) => Number(d.replace(/,/g, ""));
    return data.map(row => ({
        Open: parseCommas(row.Open)
    }))
  })
```

### Image files

Attaching image files provides a good moment to talk about [promises](https://observablehq.com/@observablehq/introduction-to-promises?collection=@observablehq/javascript-in-observable). Because image files can be large, they can take some time to upload. Because of this, `FileAttachment` uses a promise to represent a value that is not yet known, but will be known (that is, the uploading file).

When you attach image files, the `FileAttachment` promise resolves after the image has loaded, making this convenient for manipulating images with Canvas, or loading WebGL textures. Example code to attach and add styling to an attached PNG file:

```js
image = FileAttachment("example.png").image({width: 400, style: "border: 1px solid black"})
```

But, to embed the image in Markdown or HTML literals, you need to *await* it. The `await` operator pauses the execution of code in the current cell while it waits for the promise to resolve. See the example immediately below.

```html
<figure>
    ${await FileAttachment("example.jpg").image()}
    <figcaption>The figure caption</figcaption>
    </figure>
```

For more about promises and await, see [Introduction to Promises](https://observablehq.com/@observablehq/introduction-to-promises?collection=@observablehq/javascript-in-observable).

### Binary files

You might want to work with binary data, such as a shapefile or a SQLite database. In these cases, the natural representation is typically an [ArrayBuffer](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer).

```js
shapefile = require("shapefile@0.6")
```

```js
collection = shapefile.read(await FileAttachment("example.shp").arrayBuffer())
```

You can also get a [ReadableStream](https://streams.spec.whatwg.org/#rs) if you want to read a file incrementally:


```js
chunk = {
    const stream = await FileAttachment("example.shp").stream();
    const reader = stream.getReader();
    let done, value;
    while (({done, value} = await reader.read()), !done) {
        yield value;
    }
    }
```

### URLs

Use `FileAttachment` to pass a URL. For example, the following code will create a link to download a PDF attached to a notebook:

```html
<a href="${await FileAttachment("example.pdf").url()}" download>Click here to download a PDF.</a>
```

### Errors

If you pass an unknown file name to `FileAttachment`, it throws an error. This is true even if you don’t load the file’s contents because Observable tracks the set of known files using static analysis.

<figure>
  <img
    style="border-radius:2px;box-shadow:0 4px 12px rgba(0,0,0,0.15), 0 0 0 1px rgba(0, 0, 0, 0.1);margin-left:27px;margin-bottom:40px;max-width: 60%"
    src="/data/files/file-attachments/file-attachment-error.png" alt="Example code with a misspelled file name, and the resulting error reading Error: file not found."
  />
  <figcaption>Error thrown when a file is not found.</figcaption>
</figure>

## FileAttachment() API

Here is the list of [`FileAttachment()` API](https://github.com/observablehq/stdlib#file-attachments) methods: 

| Method                     | Returns a promise to...                                                                                                                                   |
| -------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| `attachment.arrayBuffer()` | ...the file’s contents as an ArrayBuffer.                                                                                   |
| `attachment.blob()`        | ...a Blob containing the raw contents of the file.                                                                          |
| `attachment.csv()`         | ...the file’s contents, parsed as comma-separated values (CSV) into an array. Options:<br> `{array = false, typed = false}` |
| `attachment.html()`        | ...an HTMLDocument containing the contents of the file.                                                                     |
| `attachment.image()`       | ...a file loaded as an Image with optional JavaScript properties. Options:<br> `{property: value, property: value}`         |
| `attachment.json()`        | ...the file’s contents, parsed as JSON into JavaScript values.                                                              |
| `attachment.sqlite()`      | ...the file loaded as a SQLite database client. See also [SQLite](https://observablehq.com/@observablehq/sqlite?collection=@observablehq/getting-data-in-and-out).                                                                           |
| `attachment.stream()`      | ...a ReadableStream of the file’s contents.                                                                                 |
| `attachment.text()`        | ...the file’s contents as a JavaScript string.                                                                              |
| `attachment.tsv()`         | ...the file’s contents, parsed as tab-separated values (TSV) into an array. Options:<br> `{array = false, typed = false}`   |
| `attachment.url()`         | ...the URL at which the file may be retrieved.                                                                              |
| `attachment.xlsx()`        | ...the file loaded as a Workbook. See also [FileAttachment.xlsx](https://observablehq.com/@observablehq/xlsx?collection=@observablehq/getting-data-in-and-out).                                                                                          |
| `attachment.xml()`         | ...an XMLDocument containing the contents of the file.                                                                      |
| `attachment.zip()`         | ...a list of files in the ZIP archive. Files can be read from the archive. See also [FileAttachment.zip](https://observablehq.com/@observablehq/zip?collection=@observablehq/getting-data-in-and-out).                                                 |

Each method returns a [promise](https://observablehq.com/@observablehq/introduction-to-promises?collection=@observablehq/javascript-in-observable) to the file’s contents.

## Additional information

Here are a few more details about files you might want to know.

**Files are local to the notebook.** Files can’t be referenced across notebooks—a given file can be directly accessed only by its notebook. You can, however, import cells that use files across notebooks. Likewise, when you fork a notebook, you’ll get your own copy of any attached files.

**Files are securely hosted on our servers.** Our production infrastructure is hosted by Heroku, and is contained within Heroku's secure network. In addition, we rely on GitHub Enterprise's advanced vulnerability scanning and security alerts. For more information, see our [Security FAQ document](https://static.observablehq.com/assets/pdfs/Security+FAQ.pdf).

**Files are immutable.** The contents associated with a given file name never change. Instead of replacing a file’s contents, you replace a file, which automatically generates a new name and updates all code references to point to the new file. This preserves [notebook history](https://observablehq.com/@observablehq/history?collection=@observablehq/editing-publishing-collaborating): you can view any version of your notebook and see the original data, and compare different versions of files.

**But, files can be deleted.** While file immutability ensures that you can go back in time to see earlier versions of a notebook, we recognize that there are times when you simply want a file taken down for good. In this case, delete the file from the files pane. This will cause references to the deleted file to error (and break old versions of the notebook).

**Files in private notebooks are private. (Pro and Enterprise)** For Pro and Enterprise tier users, who can have both public and private notebooks, file visibility is limited to the *currently used* files. That is, when you make a notebook public, only the files currently used by the notebook will become public. A file you replaced or stopped using—as long as you no longer reference it—will remain private.

**References to files are parsed statically.** We use static analysis to determine which files a notebook uses so that we can automatically publish referenced files when a notebook is published (and *only* referenced files), and similarly copy only referenced files when forking a notebook. The FileAttachment function thus accepts only literal strings; code such as `FileAttachment("my" + "file.csv")` or similar dynamic invocation is invalid syntax. For details on how this is implemented, see [our parser](https://github.com/observablehq/parser).

If you want more control over parsing, load the file as text instead, and pass it to your parser of choice.