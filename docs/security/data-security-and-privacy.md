# Observable’s security model

Observable provides a secure environment for working with private data. This notebook details how Observable restricts access to sensitive resources including [secrets](https://observablehq.com/@observablehq/secrets), [databases](https://observablehq.com/@observablehq/databases), [files](https://observablehq.com/@observablehq/file-attachments), and [other notebooks](https://observablehq.com/@observablehq/imports).

Before we dive in, here are two important principles you should remember when writing private notebooks:

**Only import or copy-paste code that you trust.** Imported code is evaluated in the same JavaScript context as the rest of the notebook (that is, within the same sandbox, as explained below). If you [`import`](https://observablehq.com/@observablehq/introduction-to-imports) or [`require`](https://observablehq.com/@observablehq/require) code into your notebook, whether another notebook or a library published to npm, it can potentially access any secrets, databases, files, or data that your notebook statically references.

**Only fork notebooks that you trust.** Likewise, when you fork a notebook, it becomes private by default and runs on your sandbox domain (as described below), where it will potentially gain access to private resources such as secrets and databases. You should review the source code of a notebook before you fork it to ensure that it is safe.

## The Sandbox

The central feature of our security model is the *sandbox*: a restricted environment for evaluating notebook code with limited privileges and information. While notebook code runs in the browser, like the Observable application itself, the sandbox allows us to isolate notebook code and to limit what it can do. The sandbox ensures that notebook code has access only to what it needs and nothing more.

An Observable notebook appears to be a single, seamless user interface, but you should think of it as two distinct parts: there’s the <b style="padding: 0 4px; border-radius: 4px; color: white; background-color: #53a851;">editor</b>, first-party code written and maintained by Observable, and the <b style="padding: 0 4px; border-radius: 4px; color: white; background-color: #fe5c5c;">sandbox</b>, which runs third-party notebook code written by users. The editor has full privileges: it’s responsible for implementing everything you can do with your Observable account. The sandbox, in contrast, is severely limited: its only job is to render the output of the notebook.


<figure>
  <img
    style="border-radius:2px;box-shadow:0 4px 12px rgba(0,0,0,0.15), 0 0 0 1px rgba(0, 0, 0, 0.1);margin-left:27px;margin-bottom:40px;max-width: 90%"
    src="/security/notebook-editor-sandbox.png" alt="A diagram showing the parts of a notebook that are part of the editor in green and the sandbox in red."
  />
  <figcaption>The two parts of a notebook.</figcaption>
</figure>

The lower part of the cell, in gray (or blue when focused), contains the cell’s <b>source code</b>. The code you write here is saved to Observable’s servers. It will still be there if you refresh, and others will see it if you share the notebook with them. It is protected as described in our [terms of service](https://observablehq.com/terms-of-service).

<figure>
  <img
    style="border-radius:2px;box-shadow:0 4px 12px rgba(0,0,0,0.15), 0 0 0 1px rgba(0, 0, 0, 0.1);margin-left:27px;margin-bottom:40px;max-width: 90%"
    src="/security/cell-anatomy.png" alt="A screenshot of a cell in an Observable notebook, showing a text input field at the top and the gray source code of the cell below."
  />
</figure>

The upper part of the cell, in white, is the cell’s <b>output</b>. This is the result of evaluating the cell’s source code within the sandbox. The output of a cell is dynamic and ephemeral—it is computed specifically for you when you visit the notebook, using your browser’s sandbox, and the value exists only in memory on your computer. This example cell’s output is a [textarea](https://observablehq.com/@observablehq/input-textarea). Any text you write in this white textarea exists only in your browser and will disappear if you refresh or re-run the cell. Other people viewing the notebook cannot see it. Notebook code can access its value (including any code you import or require), and the notebook author could write code to send it to a server, but Observable does not log, analyze, or save it.

Technically speaking, the Observable sandbox is implemented as a [sandboxed iframe](https://html.spec.whatwg.org/multipage/iframe-embed-object.html#attr-iframe-sandbox) running on a per-user domain (under observableusercontent.com, not observablehq.com). This prevents notebook code from accessing your session credentials or talking to Observable’s private API, and ensures that notebooks cannot perform actions on your behalf, such as editing a notebook.

Here’s what else you should know about the sandbox:

**Each Observable user and team has a unique sandbox domain. The notebook runs in the owner’s domain.** For example, if you visit one of Mike Bostock’s personal notebooks, it will run on the domain mbostock.static.observableusercontent.com. By assigning a unique domain to each user, any local storage and cookies used by notebooks are isolated to each user. You should use [origin restrictions](https://en.wikipedia.org/wiki/Cross-origin_resource_sharing) when opening private HTTP APIs to access from your notebooks. (For additional protection, also consider network-based restrictions and cookie- or secret-based authentication for your private APIs.) Observable’s sandbox domains are listed as a [public suffix](https://publicsuffix.org/).

**Observable uses static analysis of source code to determine what notebooks are allowed to access.** We [parse](https://github.com/observablehq/parser/blob/09901d06904ec2277baa56eca74efe7aedc2720a/src/parse.js#L367-L369) the notebook’s source code to determine what private data it needs. For example, a notebook can access the [secret](https://observablehq.com/@observablehq/secrets) named “foo” only if a cell includes the literal source code `Secret("foo")`; the secret must be statically referenced. Dynamic requests for arbitrary sensitive data are denied. Similarly, a notebook cannot import a private notebook dynamically; it must be referenced statically in the code. By relying on static analysis, we ensure that imported code can only access what the notebook already references and nothing more.

**When possible (for everything other than secrets), notebooks are granted only temporary access to private resources.** For example, when you use a [database client](https://observablehq.com/@observablehq/databases), the notebook is issued a token that allows it to issue queries; this token is only valid for a short duration, on the order of minutes. This token does not expose the underlying database credentials, and once the token expires, it can no longer be used. The signed URLs for accessing private files and private notebooks are likewise time-limited.

**Private resources are not accessible from public notebooks.** If you publish a notebook, access to private data will be revoked; for example, calling the `Secret` or `DatabaseClient` function will throw an error, and imports of other private notebooks will break. In addition, only private files that are statically referenced by code are made public on publish. We do this to ensure that your private resources are not inadvertently made public, and so that you as the author see what your readers see (and hence can fix any potential issues).

**Private notebooks can be imported only into other private notebooks by the same owner.** If you attempt to import a private notebook into a non-private notebook, or a private notebook by a different author, the import will error. This ensures that you as the notebook author see the same thing that your readers see, and it isolates private resources from different contexts.

If you have any questions about security at Observable, you can contact us at support@observablehq.com.
