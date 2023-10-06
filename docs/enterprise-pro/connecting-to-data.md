# Enterprise & Pro Team Onboarding: Securely connecting to data

<figure>
  <img
    style="margin:20px auto;max-width: 90%"
    src="/enterprise-pro/assets/connect-to-data.png" alt="Illustration of hands writing in a notebook"
  />
</figure>

Data comes in all shapes and sizes, and Observable supports working with all of it. Whether it's SQL databases, spreadsheets, live APIs, or files of any kind, you can quickly bring your data into Observable for faster exploration, analysis and insights.

When working in Enterprise and Pro Teams, you have access to even more ways of connecting your data into Observable.

## Databases

For Enterprise and Pro teams, Observable offers a straightforward way to [connect to databases](https://observablehq.com/@observablehq/databases). To start, go to your team settings, [click on "Databases"](https://observablehq.com/settings/databases) then "New Database," where you can enter your database credentials.

<video
    style="border-radius:5px;box-shadow:0 4px 12px rgba(0,0,0,0.15), 0 0 0 1px rgba(0, 0, 0, 0.1);margin-left:27px;margin-bottom:40px;max-width: 80%"
    src="/enterprise-pro/assets/database.mov" alt="Screen capture showing how to connect a new database in Observable. User navigates from Team Settings to New Database, then adds database connection information."
    autoplay loop controls = "false">
</video>

If you want to use your notebooks to query a database on your local computer or on a private network, we also provide a [self-hosted database proxy](https://observablehq.com/@observablehq/self-hosted-database-proxies).

Once you've connected your database, you and members of your team will have access to the database in all team notebooks, and can query directly within a notebook using the [SQL cell](https://observablehq.com/@observablehq/sql-cell).

<video
    style="border-radius:5px;box-shadow:0 4px 12px rgba(0,0,0,0.15), 0 0 0 1px rgba(0, 0, 0, 0.1);margin-left:27px;margin-bottom:40px;max-width: 80%"
    src="/enterprise-pro/assets/SQL.mov" alt="User clicks on Open Database Pane icon in right margin to explore the schema of a connected database. Then they add a new SQL cell, choose the database from a dropdown menu, and write a simple SQL query."
    autoplay loop controls = "false">
</video>

Just like in JavaScript, Markdown, and HTML cells, you can embed variables into SQL cells. Using Observable Inputs, you can create simple data apps that allow non-technical users to run custom queries. 

<video
    style="border-radius:5px;box-shadow:0 4px 12px rgba(0,0,0,0.15), 0 0 0 1px rgba(0, 0, 0, 0.1);margin-left:27px;margin-bottom:40px;max-width: 80%"
    src="/enterprise-pro/assets/sqlInput.mov" alt="Screen capture of an Observable notebook where the user creates a dropdown widget using Observable Inputs, then calls the value of the input in a SQL query using a template literal."
    autoplay loop controls = "false">
</video>

## Cloud files

Observable also supports access to [cloud files](https://observablehq.com/@observablehq/cloud-files) hosted on Google or Microsoft. To connect, open up the files pane by clicking the <svg style="display:inline;" width="16" height="16" viewBox="0 0 16 16" fill="" stroke-width="2"><path d="M7.19855 2.52175L7.88131 1.79111L7.19855 2.52175ZM12.6 11.7764L13.2581 11.0234L12.6 11.7764ZM5.34191 6.76078L11.9419 12.5293L13.2581 11.0234L6.65809 5.2549L5.34191 6.76078ZM10.8958 13.6864L3.35462 6.63385L1.98852 8.09459L9.52965 15.1472L10.8958 13.6864ZM6.51578 3.25238L13.8172 10.0755L15.1828 8.61419L7.88131 1.79111L6.51578 3.25238ZM3.08395 3.55474C3.91017 2.45311 5.50967 2.31219 6.51578 3.25238L7.88131 1.79111C6.0058 0.0384695 3.02413 0.301162 1.48395 2.35474L3.08395 3.55474ZM3.35462 6.63385C2.49183 5.82695 2.37516 4.49978 3.08395 3.55474L1.48395 2.35474C0.162683 4.11642 0.380169 6.59044 1.98852 8.09459L3.35462 6.63385ZM11.993 13.6551C11.6977 13.9647 11.2082 13.9786 10.8958 13.6864L9.52965 15.1472C10.6432 16.1886 12.3878 16.1388 13.4402 15.0356L11.993 13.6551ZM11.9419 12.5293C12.2764 12.8216 12.2996 13.3337 11.993 13.6551L13.4402 15.0356C14.5328 13.8903 14.4499 12.0651 13.2581 11.0234L11.9419 12.5293Z"></path></svg> icon, the click on "Cloud Files." You'll be directed to authenticate and grant access to Observable.

<video
    style="border-radius:5px;box-shadow:0 4px 12px rgba(0,0,0,0.15), 0 0 0 1px rgba(0, 0, 0, 0.1);margin-left:27px;margin-bottom:40px;max-width: 80%"
    src="/enterprise-pro/assets/cloud.mov" alt="Screen capture of an Observable notebook showing a user choosing 'Cloud files' from the files pane, selecting to connect to Google cloud files, then being prompted to input authentication information."
    autoplay loop controls = "false">
</video>

Once you've authenticated, you'll see all your cloud files available to import directly into a notebook, just like you would with file attachments. To learn more, read our walk through on [cloud files](https://observablehq.com/@observablehq/cloud-files).

## APIs & Secrets

Observable supports fetching [API](https://observablehq.com/@observablehq/working-with-apis-remote-files?collection=@observablehq/working-with-data) results directly in notebooks, making it simple to work with live data. Here is an example of a JavaScript fetching the results from an API on New York City subway ridership.

```js
d3.csv('https://data.ny.gov/api/views/vxuj-8kew/rows.csv?accessType=DOWNLOAD&sorting=true')
```

When working privately in an Enterprise or Pro team, Observable supports [secrets](https://observablehq.com/@observablehq/secrets). Secrets allow you to securely save access tokens that only you or authenticated teammates can use to interact with secure APIs. For examples see our [GitHub API starter template](https://observablehq.com/@observablehq/github-api-starter) and [AWS S3 starter template](https://observablehq.com/@observablehq/aws-s3-api-starter).

Sometimes all you need is basic authentication, in which case you can reference the [fetch with basic authentication example](https://observablehq.com/@mbostock/fetch-with-basic-auth).

### Resources

- [Observable Secrets](https://observablehq.com/@observablehq/secrets) – Documentation for securely storing API tokens and secrets
- [GitHub API starter template](https://observablehq.com/@observablehq/github-api-starter) – Quickly get started using the GitHub API
- [AWS S3 starter template](https://observablehq.com/@observablehq/aws-s3-api-starter) – Quickly get started using the AWS S3 API
- [Fetch with Basic Auth example](https://observablehq.com/@mbostock/fetch-with-basic-auth) – An example of using Basic Auth

## Local files

One of the most powerful ways to work with files in Observable is to attach them to your notebook. 

<video
    style="border-radius:5px;box-shadow:0 4px 12px rgba(0,0,0,0.15), 0 0 0 1px rgba(0, 0, 0, 0.1);margin-left:27px;margin-bottom:40px;max-width: 80%"
    src="/enterprise-pro/assets/files@1.mov" alt="Screen capture of an Observable notebook. The user opens the Files pane, then drags and drops a local CSV file into the pane to attach it."
    autoplay loop controls = "false">
</video>

For more details on using file attachments see the [file attachments](https://observablehq.com/@observablehq/file-attachments) documentation.

## File Inputs

If you would like to load data with a file, but not save it as an attachment to your notebook, the [file input](https://observablehq.com/@observablehq/input-file) is a good alternative. Using file input, the file is not uploaded and data is only available temporarily in memory.

<video
    style="border-radius:5px;box-shadow:0 4px 12px rgba(0,0,0,0.15), 0 0 0 1px rgba(0, 0, 0, 0.1);margin-left:27px;margin-bottom:40px;max-width: 80%"
    src="/enterprise-pro/assets/fileInput.mov" alt="Screen capture of an Observable notebook, where a user addes a File inputs snippet from the Add Cell menu, then chooses a local CSV file to make temporarily available in memory."
    autoplay loop controls = "false">
</video>

### Security quick reference
When you connect your data to Observable, what information is stored on our servers? This quick reference outlines the data flows of each data connection method. 

|Method | Security implications |
|--- |---
|File Attachment | Stored on our S3 bucket. data flows from our S3 bucket to the user's browser |
|APIs using secrets | Secret is stored encrypted on our S3 bucket |
|Cloud Files  | Data flows from cloud file provider to the user's browser. User has to sign in to grant access to the cloud file storage|
| Database connections using Observable's proxy  | Data flows from user's database through a proxy hosted on Observable's server to the user's browser|
|Database connection using self-hosted proxy | If the database is on a local network, this method ensures that data never leaves the network. It travels from the local database through the locally installed database proxy to the user's browser|
|Inputs:file| File only exists in browser memory |

Now that you're up and running with the basics of working in Observable notebooks and connecting to data, continue to the next section to learn about [collaborating with teammates and sharing your work](/enterprise-pro/collaboration-sharing).


<figure>
  <img
    style="margin-left:20px;width:184px"
    src="/enterprise-pro/assets/small-collaborate.png"
    alt="illustration of hands interacting with a notebook"
  />
</figure>
