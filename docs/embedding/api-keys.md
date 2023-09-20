# API and notebook keys

Observable API keys allow you to [download and embed](https://observablehq.com/@observablehq/embeds?collection=@observablehq/embedding-notebooks) your private notebooks, securely. For example, you can use these keys to embed a visualization from a private notebook into your internal dashboard connected to private data from your intranet, or download a tarball of your private notebook and bundle it into an app.

Similar to API keys, when embedding a notebook you can create a **notebook key** that has a more limited scope of access to a particular notebook at a particular version. These keys also have access to referenced _database connections_ and _secrets_ in Iframe embeds.

## Creating notebook keys

To create a new notebook key, open the embed modal within a private notebook.

In the preview pane, you can configure the following options:

- **Only this version**: Allows you to make the notebook key work only with the current version of the notebook. Only notebook referenced secrets and database connections will be available to the embed.
- **Expiration**: Allows you to specify an expiration date for this key. (Can be _never_.) Note: This expiration date is displayed in your user's notebook key list in settings.

After selection options, click "Create notebook key" to create a key with a generated name, which will be added to the embed code on the left.

<figure>
  <img
    style="border-radius:2px;box-shadow:0 4px 12px rgba(0,0,0,0.15), 0 0 0 1px rgba(0, 0, 0, 0.1);margin-left:27px;margin-bottom:40px;max-width: 90%"
    src="/embedding/embedModal.png" alt="Embed dialog showing options to create a notebook key"
  />
  <figcaption>The <strong>Preview</strong> section includes a form to create a notebook key. Optionally pin to this notebook version, and provide an expiration date for the notebook key.</figcaption>
</figure>


:::info Note
Once you create a notebook key, you cannot view the key again when re-opening the notebook. Create a new key if needed.
:::

## Creating API keys

Another option to embed a notebook is by creating an API key. To create a new API key, visit the [API Keys section](https://observablehq.com/settings/api-keys) in your personal or team settings and click on **New API key**. Give it a friendly description so that you can remember what it’s being used for later.

<figure>
  <img
    style="border-radius:2px;box-shadow:0 4px 12px rgba(0,0,0,0.15), 0 0 0 1px rgba(0, 0, 0, 0.1);margin-left:27px;margin-bottom:40px;max-width: 90%"
    src="/embedding/api-keys.png" alt="The API keys section of user settings"
  />
</figure>

Copy your key and keep it somewhere safe. ***Treat your API keys like passwords.*** API keys can be used to read any private notebook owned by the corresponding Observable account. Personal API keys can only read your personal notebooks, and team API keys can only read notebooks belonging to that team.

These keys are intended for loading private notebooks in private. ***Do not embed them in public web pages.*** If someone steals your API key, they can potentially use it to read any of your private notebooks until you delete it.

## Using API Keys

To use the key to request the `.js` or `.tgz` compiled version of a private notebook, you have two options: include it as an `api_key=xxxx` query parameter in the URL; or, include it as an HTTP header `Authorization: ApiKey xxxx`.

The URL format for retrieving a private notebook from the Observable API is:

```
https://api.observablehq.com/d/[NOTEBOOK_ID][@VERSION].[FORMAT]?v=3&api_key=xxxx
```

:::info Note
The two supported formats are .js or .tgz.
:::

For example, this notebook’s current version JavaScript URL is:

```
https://api.observablehq.com/d/c1cc9bf575ef0e0c@128.js?v=3&api_key=xxxx
```

To authenticate a request for a compiled private notebook with the API key as a URL query parameter looks like the following:

<figure>
  <img
    style="border-radius:2px;box-shadow:0 4px 12px rgba(0,0,0,0.15), 0 0 0 1px rgba(0, 0, 0, 0.1);margin-left:27px;margin-bottom:40px;max-width: 90%"
    src="/embedding/browser-raw.png" alt="The embedding code for a notebook shown in a browser window"
  />
</figure>

Or on the command line, as an HTTP header:

<figure>
  <img
    style="border-radius:2px;box-shadow:0 4px 12px rgba(0,0,0,0.15), 0 0 0 1px rgba(0, 0, 0, 0.1);margin-left:27px;margin-bottom:40px;max-width: 90%"
    src="/embedding/curl-key.png" alt="A terminal window showing the code for running curl to retrieve the notebook contents"
  />
</figure>

We recommend only using the `api_key=xxxx` query parameter for testing and development. For production, it’s safer to use the HTTP header to authenticate your requests.

:::info Note
For private Teams notebooks, the notebook has to be shared with the whole team for the API key to have access.
:::

## Managing notebook & API keys

In the **API / Notebook keys** settings page, you can view and delete notebook keys.

### Notebook keys

In Notebook keys tab, you can view and manage all notebook keys for all notebooks for your account.

Note that a single notebook can have multiple notebook keys. Keys can be pinned a version (i.e. `@12`), or can be unpinned and support embedding for future versions (`@12...`).

Additionally, Notebook keys can optionally expire if you set an expiration date.

<figure>
  <img
    style="border-radius:2px;box-shadow:0 4px 12px rgba(0,0,0,0.15), 0 0 0 1px rgba(0, 0, 0, 0.1);margin-left:27px;margin-bottom:40px;max-width: 90%"
    src="/embedding/notebookKeys.png" alt="The notebook keys sections of the team settings page"
  />
</figure>

### API keys

API keys don’t expire, but you can delete them to immediately cause requests that use that key to fail. Feel free to rotate them regularly, or create different keys for different use cases within your team.

In the **API Keys** settings page, the last time the key was used to make a request is shown, so you can safely delete old or unused keys.

<figure>
  <img
    style="margin-left:27px;margin-bottom:40px;max-width: 90%"
    src="/embedding/dashboard-api-key.png" alt="API key settings page showing when a key was created and last used"
  />
</figure>

## Key feature differences

This table provides a quick summary of the key differences between notebook keys and API keys:

| Feature              | Notebook Key | API Key   |
|----------------------|--------------|-----------|
| Embed Private Notebooks | ✅ | ✅ |
| Version Pinning | ✅ | ❌ |
| Database connections | ✅ (iFrame only)   | ❌         |
| Secrets              | ✅ (iFrame only)   | ❌         |
| Expiration           | ✅ (optional) | ❌ (never expires) |

## Limitations

Notebook keys grant access to a private notebook’s [secrets](https://observablehq.com/@observablehq/secrets) or [database clients](https://observablehq.com/@observablehq/connecting-to-databases) at the specified notebook version. API keys do not grant access, so it is recommended to use notebook keys to easily and securely embed notebooks.
