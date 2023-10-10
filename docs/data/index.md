# Data 

Data comes in all shapes and sizes, and Observable supports working with all of it. Whether it's SQL databases, spreadsheets, live APIs, or files of any kind, you can quickly bring your data into Observable for faster exploration, analysis and insights.

## [Files](/data/files/file-attachments) 

One of the most quickest ways to work with data in Observable is to attach files to your notebook. Observable support CSV, JSON, XLSX, images, videos and many more file types. 

### [File Inputs](/inputs/overview#file)

If you would like to load data with a file, but not save it as an attachment to your notebook, the [file input](https://observablehq.com/@observablehq/input-file) is a good alternative. Using file input, the file is not uploaded and data is only available temporarily in memory.

## [Databases](/data/databases/overview)

For Enterprise and Pro workspaces, Observable offers a straightforward way to connect to databases. We support many different database clients, such as Amazon Red Shift, Databricks, Mongo, MySQL, Oracle, Postgres and Snowflake.

## [Cloud files](/data/files/cloud-files)

Observable also supports access to [cloud files](https://observablehq.com/@observablehq/cloud-files) hosted on Google or Microsoft. When you data updates, your notebook will reflect those changes. Set up your login creditionals once, and be able to access all of your cloud files.

## APIs & Secrets
Observable supports fetching API results directly in notebooks, making it simple to work with live data. We have a number of examples you can get started with, such as [AWS EC2](https://observablehq.com/@observablehq/aws-ec2-api-starter), [AWS S3](https://observablehq.com/@observablehq/aws-s3-api-starter), [Figma](https://observablehq.com/@observablehq/figma-api-starter), [Github](https://observablehq.com/@observablehq/github-api-starter) and [Stripe](https://observablehq.com/@observablehq/stripe-api-starter).


## Security quick reference
When you connect your data to Observable, what information is stored on our servers? This quick reference outlines the data flows of each data connection method. 

|Method | Security implications |
|--- |---
|File Attachment | Stored on our S3 bucket. data flows from our S3 bucket to the user's browser |
|APIs using secrets | Secret is stored encrypted on our S3 bucket |
|Cloud Files  | Data flows from cloud file provider to the user's browser. User has to sign in to grant access to the cloud file storage|
| Database connections using Observable's proxy  | Data flows from user's database through a proxy hosted on Observable's server to the user's browser|
|Database connection using self-hosted proxy | If the database is on a local network, this method ensures that data never leaves the network. It travels from the local database through the locally installed database proxy to the user's browser|
|Inputs:file| File only exists in browser memory |
