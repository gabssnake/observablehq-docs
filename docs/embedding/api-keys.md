# API and notebook keys
<a class="pro-label" href="https://observablehq.com/pricing">Learn more about Pro</a>

**API keys** allow you to [download and embed](https://observablehq.com/@observablehq/embeds?collection=@observablehq/embedding-notebooks) any of your _private_ notebooks with a single secure key. For example, you can use these keys to embed a visualization from any private notebook in your workspace into your internal dashboard connected to private data from your intranet, or download a tarball of your private notebook and bundle it into an app.

**Notebook keys** allow you to specify a key for accessing an individual private notebook from your workspace. This gives you more control and limits the scope of the access to a single notebook at a articular version. And because of this more granular access, it allows these embeds to the referenced _database connections_ and _secrets_ in iframe embeds.

Since notebook keys grant access to a private notebook’s [secrets](https://observablehq.com/@observablehq/secrets) and [database clients](https://observablehq.com/@observablehq/connecting-to-databases) at the specified notebook version, they provide more fine-grained control over private notebook access.

## Creating API keys

To create a new API key, visit the [API Keys section](https://observablehq.com/settings/api-keys) in your workspace settings and click on **New API key**. Give it a friendly description so that you can remember what it’s being used for later.

<figure>
  <img
    class="screenshot"
    src="/embedding/api-keys.png" alt="The API keys section of user settings"
  />
</figure>

Copy your key and keep it somewhere safe. ***Treat your API keys like passwords.*** API keys can be used to read any private notebook owned by the workspace. 

These keys are intended for loading private notebooks in private. ***Do not embed them in public web pages.*** If someone steals your API key, they can potentially use it to read any of your private notebooks until you delete the key.

## Creating notebook keys

To create a new notebook key, open the embed modal within a private notebook.

In the preview pane, you can configure the following options:

- **Only this version**: Allows you to make the notebook key work only with the current version of the notebook. For iframe embeds (where we allow database connections and secrets), only those referenced in the current version of the notebook will be available to the embed.
- **Expiration**: Allows you to specify an expiration date for this key (can be _never_). Note: This expiration date is displayed in the notebook key list in your workspace settings.

After selection options, click "Create notebook key" to create a key and update the embed code on the left with the new key.

<figure>
  <img
    class="screenshot"
    src="/embedding/embedModal.png" alt="Embed dialog showing options to create a notebook key"
  />
  <figcaption>The <strong>Preview</strong> section includes a form to create a notebook key. Optionally pin to this notebook version, and provide an expiration date for the notebook key.</figcaption>
</figure>


:::info Note
Once you create a notebook key, you cannot view the key again when re-opening the notebook. Create a new key if needed.
:::

## Using keys with iframe embeds

After creating a key, the iframe embed code in the embed modal will have the key as a parameter in the iframe `src` field. You can copy the URL and use it as a standalone link to view the contents of the embedded notebook or cells, or you can copy the iframe embed code which includes the `<iframe>` wrapper to include in an html page elsewhere.
## Using keys with JavaScript or React embeds

To use the key to request the `.js` or `.tgz` compiled version of a private notebook, you have two options: include it as an `api_key=xxxx` query parameter in the URL; or, include it as an HTTP header `Authorization: ApiKey xxxx`.

The URL format for retrieving a private notebook from the Observable API is:

```
https://api.observablehq.com/d/[NOTEBOOK_ID][@VERSION].[FORMAT]?v=3&api_key=xxxx
```

:::info Note
The two supported formats are .js or .tgz.
:::

For example:

```
https://api.observablehq.com/d/c1cc9bf575ef0e0c@128.js?v=3&api_key=xxxx
```

To authenticate a request for a compiled private notebook with the API key as a URL query parameter looks like the following:

<figure>
  <img
    class="screenshot"
    src="/embedding/browser-raw.png" alt="The embedding code for a notebook shown in a browser window"
  />
</figure>

Or on the command line, as an HTTP header:

<figure>
  <img
    class="screenshot"
    src="/embedding/curl-key.png" alt="A terminal window showing the code for running curl to retrieve the notebook contents"
  />
</figure>

We recommend only using the `api_key=xxxx` query parameter for testing and development. For production, it’s safer to use the HTTP header to authenticate your requests.

:::info Note
For private Teams notebooks, the notebook has to be shared with the whole team for the API key to have access.
:::

## Managing keys

In the **API / Notebook keys** settings page, you can view and delete keys.

### API keys

API keys don’t expire, but you can delete them to immediately cause requests that use that key to fail. Feel free to rotate them regularly, or create different keys for different use cases within your team. We show the last time the key was used to make a request, so you can safely delete old or unused keys.

<figure>
  <img
    class="screenshot"
    src="/embedding/dashboard-api-key.png" alt="API key settings page showing when a key was created and last used"
  />
</figure>

### Notebook keys

In the Notebook keys tab, you can view and manage all notebook keys for all notebooks for your workspace.

Note that a single notebook can have multiple notebook keys. Keys can be for a specific version (i.e. `@12`), or can be for all future versions from the indicated version onwards (`@12...`).
We also show the key's (optional) expiration date.

<figure>
  <img
    class="screenshot"
    src="/embedding/notebookKeys.png" alt="The notebook keys sections of the team settings page"
  />
</figure>



## Key feature differences

This table provides a quick summary of the key differences between notebook keys and API keys:

| Feature              | Notebook Key | API Key   |
|----------------------|--------------|-----------|
| Embed Private Notebooks | ✅ | ✅ |
| Version Pinning | ✅ | ❌ |
| Database connections | ✅ (iframe only)   | ❌         |
| Secrets              | ✅ (iframe only)   | ❌         |
| Expiration           | ✅ (optional) | ❌ (can be deleted) |

