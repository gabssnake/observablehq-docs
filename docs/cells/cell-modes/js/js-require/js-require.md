# `require` in Observable

Observable's [`require`](https://github.com/observablehq/stdlib/blob/master/README.md#require) lets you use thousands of open-source JavaScript modules in your notebooks. If you can think of a task—say date manipulation, math, or music—there's probably already a module that can help. Just as you can [reuse code from other notebooks using imports](https://observablehq.com/@observablehq/introduction-to-imports), you can load JavaScript modules using `require`.

Here's an example requiring [Simple Statistics](https://www.npmjs.com/package/simple-statistics), a module that includes many statistical functions, to compute a standard deviation.

<figure>
  <img
    style="border-radius:2px;box-shadow:0 4px 12px rgba(0,0,0,0.15), 0 0 0 1px rgba(0, 0, 0, 0.1);margin-left:27px;margin-bottom:40px;max-width: ${width}"
    src="/cells/cell-modes/js/js-require/simpStats.png" alt="Two open cells, in the first the module Simple Statistics is `require`d. In the second cell, the standard deviation method from the Simple Statistics module is used to determine the standard deviation of the array of numbers 1, 2, and 3."
  />
  <figcaption>Loading the JavaScript module Simple Statistics and using it to calculate standard deviation.</figcaption>
</figure>

## How to use `require`

The argument to the `require` function can be any of the following:

### A module name and a version

The most common case specifies a _name_, an at sign (@), and a _version_. You can use a [semantic version specifier](https://semver.npmjs.com/) for a range of versions, as below for releases 2.*x*.*x* of the [moment](https://momentjs.com/) date and time library.

<figure>
  <img
    style="border-radius:2px;box-shadow:0 4px 12px rgba(0,0,0,0.15), 0 0 0 1px rgba(0, 0, 0, 0.1);margin-left:27px;margin-bottom:40px;max-width: ${width}"
    src="/cells/cell-modes/js/js-require/requireVersion.png" alt="An open cell, `moment2`, in the code section `moment2` is defined using the `require` function with the argument 'moment@2'— first referencing the name of the desired module then the desired version being specified after the `@` sign."
  />
  <figcaption>Requiring the `moment` module, version 2.</figcaption>
</figure>

### A module name

If you don't mind your notebook potentially breaking when a new version of the library is released, omit the version to get the latest version:

<figure>
  <img
    style="border-radius:2px;box-shadow:0 4px 12px rgba(0,0,0,0.15), 0 0 0 1px rgba(0, 0, 0, 0.1);margin-left:27px;margin-bottom:40px;max-width: ${width}"
    src="/cells/cell-modes/js/js-require/momentNoVersion.png" alt="An open cell, `moment` defined by using `require` to import the module moment without a version number, as there is no '@' symbol and version number after the name of the module."
  />
  <figcaption>Leave off the '@' symbol and version number if you want to pull in the latest version.</figcaption>
</figure>

### A module name, a version, and a path

Sometimes you want to include an individual file from a module, rather than its main exported interface. This is less common, but can be useful for modules that have add-ons or that don't declare which file to expose as the default. Instead of relying on auto-detection, you can specify the file directly. For example, here's how we can load [D3.js](https://d3js.org) version 6:

<figure>
  <img
    style="border-radius:2px;box-shadow:0 4px 12px rgba(0,0,0,0.15), 0 0 0 1px rgba(0, 0, 0, 0.1);margin-left:27px;margin-bottom:40px;max-width: ${width}"
    src="/cells/cell-modes/js/js-require/versionPath.png" alt="An open cell, `d3v6`, defined by using `require` on a specific file path for the version of D3 desired, 'd3@6/dist/d3.min.js'."
  />
  <figcaption>Loading in D3.js version 6 by specifying a filename.</figcaption>
</figure>

### A URL

You can also specify a full URL to `require`. This lets you point `require` at any server, even [localhost](https://en.wikipedia.org/wiki/Localhost). For example, we can load [ganja.js](https://github.com/enkimute/ganja.js) from [jsDelivr](https://www.jsdelivr.com/).

<figure>
  <img
    style="border-radius:2px;box-shadow:0 4px 12px rgba(0,0,0,0.15), 0 0 0 1px rgba(0, 0, 0, 0.1);margin-left:27px;margin-bottom:40px;max-width: ${width}"
    src="/cells/cell-modes/js/js-require/ganjaJs.png" alt="An open cell, `ganja`, defined by using `require` on a specific URL."
  />
  <figcaption>Loading in ganja.js via a specific URL.</figcaption>
</figure>

This technique can even be used to `require` a local JavaScript file, though you'll have to choose the file each time you open the notebook.

<figure>
  <img
    style="border-radius:2px;box-shadow:0 4px 12px rgba(0,0,0,0.15), 0 0 0 1px rgba(0, 0, 0, 0.1);margin-left:27px;margin-bottom:40px;max-width: ${width}"
    src="/cells/cell-modes/js/js-require/chooseFileJs.png" alt="Two cells, the first open defining a file picker view in the code section and the actual file picker in the presentation section of the cell. The second cell is close and shows `module` being defined in terms of using `require` on the file picked by the previously mentioned file picker."
  />
  <figcaption>Using file picker to `require` a local JS file using the URL technique.</figcaption>
</figure>

### Multiple inputs

Specifying multiple inputs—multiple module names, or URLs, or module names with a path—will load all of the named things and combine their exports into one object. This is especially useful for libraries that are designed to work together, such as D3's constituent modules.

<figure>
  <img
    style="border-radius:2px;box-shadow:0 4px 12px rgba(0,0,0,0.15), 0 0 0 1px rgba(0, 0, 0, 0.1);margin-left:27px;margin-bottom:40px;max-width: ${width}"
    src="/cells/cell-modes/js/js-require/multiRequire.png" alt="An open cell, `d3CsvAndFetch`, defined by requiring both d3-dsv at version 3 and d3-selections at version 3."
  />
  <figcaption>Loading in two different D3 libraries that work together.</figcaption>
</figure>

## `require`'s return value

`require` returns a promise with the module's contents, or, if the module can't be loaded, a promise rejection.

Most of the time, you'll use `require` in a cell of its own, as in the examples above, so you won't need to worry about the return value being asynchronous. But if you do want to use `require` in the context of other code, you’ll need to await the value of the promise it returns. (Observable implicitly awaits promises across cell boundaries. For more information, see [Introduction to Promises](https://observablehq.com/@observablehq/introduction-to-promises?collection=@observablehq/javascript-in-observable).)

<figure>
  <img
    style="border-radius:2px;box-shadow:0 4px 12px rgba(0,0,0,0.15), 0 0 0 1px rgba(0, 0, 0, 0.1);margin-left:27px;margin-bottom:40px;max-width: ${width}"
    src="/cells/cell-modes/js/js-require/returnRequire.png" alt="An open cell, the presentation section showing the array [1, 2] and the code section the `await` operator is used to resolve the promise returned by `require` in the first line and then the newly downloaded module is used in the second."
  />
  <figcaption>Using await to resolve the promise returned by `require` and then using that module.</figcaption>
</figure>

### Example promise rejection

In some cases, `require` won't find a module or won't be able to load it, and will return a promise rejection.

<figure>
  <img
    style="border-radius:2px;box-shadow:0 4px 12px rgba(0,0,0,0.15), 0 0 0 1px rgba(0, 0, 0, 0.1);margin-left:27px;margin-bottom:40px;max-width: ${width}"
    src="/cells/cell-modes/js/js-require/requireFail.png" alt="An open cell, the presentation section showing a `require` error and the code section using `require` on a fake module."
  />
  <figcaption>Using `require` but unable to resolve the promise.</figcaption>
</figure>

## `require`'s behavior

By default, require uses modules published on [npm](https://www.npmjs.com/), a service that hosts over 1&nbsp;million different modules<a href='http://www.modulecounts.com/'>*</a> created by thousands of individual developers. Because notebooks run in a web environment, we use another service, [jsDelivr](https://www.jsdelivr.com/), that takes npm's modules and makes them accessible to browsers.

For example, if we call `require` with the argument `"d3@7"`, it resolves to `"${await require.resolve("d3@7")}"`, which is the full URL for the D3 visualization library. You can see the resolved URL by calling require.resolve.

<figure>
  <img
    style="border-radius:2px;box-shadow:0 4px 12px rgba(0,0,0,0.15), 0 0 0 1px rgba(0, 0, 0, 0.1);margin-left:27px;margin-bottom:40px;max-width: ${width}"
    src="/cells/cell-modes/js/js-require/resolveRequire.png" alt="Two open cells, the first using `require` on d3 at version 7, the second one using `require.resolve` on the same module to show the URL from which it was fetched."
  />
  <figcaption>Using `require.resolve` to show the resolved URL.</figcaption>
</figure>

If you see a `require` statement in a notebook, searching for its name on [npm](https://www.npmjs.com/) is likely to pull up its details. [Here's the d3 package on npm](https://www.npmjs.com/package/d3), which links to its GitHub information and other documentation.

:::info NOTE
If you're using `require` with a URL, be sure to follow these requirements for the URL and server:
  - Use `https` URLs only, not `http`.
  - Use a file with a correct Content-Type header to be used as JavaScript. For example, `raw.githubusercontent.com` serves JavaScript files as `text/plain`, which your browser cannot execute as JavaScript - which is why we often use `jsDelivr` instead.
:::

### Requirements for `require`

The `require` function works with modules that include AMD distributions and that point to them in the `jsdelivr`, `unpkg` or `main` fields of their `package.json` files.<a href='#amdNotes'>*</a> Unfortunately, not all modules are compatible: some rely on the built-in functions in Node.js that have no equivalent in the browser, and others don't include an AMD file that `require` can use.

:::info NOTE
`require` works with a _subset_ of AMD modules that includes the vast majority of such modules: the strict specification is [documented by d3-require](https://github.com/d3/d3-require#d3-require), the module that powers Observable's `require`.
:::

## `import`: a way to require ES6 modules

In addition to `require`, which uses the widely-supported [AMD](https://github.com/amdjs/amdjs-api/blob/master/AMD.md) standard, we also support [dynamic import](https://developers.google.com/web/updates/2017/11/dynamic-import), a new way of requiring modules that aims to replace custom module loaders such as `require`.

import is a native browser feature that's just now gaining adoption. It only works in the newest versions of Chrome, Safari, Firefox, and Edge. It also requires modules to be published in the [ES6 module specification](http://exploringjs.com/es6/ch_modules.html), which is still gaining adoption.

If the library is also published to npm, [Skypack](https://www.skypack.dev) provides a fast CDN; otherwise, consider [attaching a file](https://observablehq.com/@observablehq/file-attachments).

<figure>
  <img
    style="border-radius:2px;box-shadow:0 4px 12px rgba(0,0,0,0.15), 0 0 0 1px rgba(0, 0, 0, 0.1);margin-left:27px;margin-bottom:40px;max-width: ${width}"
    src="/cells/cell-modes/js/js-require/importRequire.png" alt="An open cell, `d3v7_esm` defined by using `import` on D3 version 7 via Skypack CDN."
  />
  <figcaption>Using `import` to dynamically import D3 via Skypack CDN.</figcaption>
</figure>

## Additional resources

- [A debugger for require](https://observablehq.com/@observablehq/module-require-debugger?collection=@observablehq/visualizing-debugging-notebooks)
- [A guide to troubleshooting require](https://observablehq.com/@observablehq/how-to-require-stubborn-modules?collection=@observablehq/visualizing-debugging-notebooks)
- [An introduction to imports](https://observablehq.com/@observablehq/import?collection=@observablehq/notebook-fundamentals) (like require, but across notebooks)
- [d3-require, the module that powers Observable’s require](https://github.com/d3/d3-require)
