# How to require stubborn modules

::: info []()
In a rush? Confused? Try the <a href='https://observablehq.com/@observablehq/module-require-debugger'>module require debugger</a> to get some instant answers.
:::

Requiring modules in Observable is sometimes tricky: there are many ways to write and publish JavaScript modules. We use [unpkg](https://unpkg.com/#/) to load external modules when you call `require()`. Modules that include UMD or AMD bundled files work great with Observable.

If a module doesn't work—it says 'Invalid module'—you might be able to still get it to work. First, go to that module on GitHub: the simplest way to do this is to go to `https://npmjs.org/themodulename` and find the GitHub repository on the right. Some modules won't have that link, and in that case, your best chance is to search GitHub for the module's name.

Now that you've found the repository, look through its code: does it have a UMD or AMD build somewhere in its package that you just need to require? You can also go to `https://unpkg.com/themodulename/` to look for the files in the published package.

If you do see that, for instance, the module's `main` entry point in its `package.json` is something like

`require('./otherfile.js');`

And `otherfile.js` would work with Observable—it has a UMD or AMD header—then you can change the `require` call in your notebook to something like `require('themodule/otherfile.js')` and require that file directly.

For example, let's require [Chart.js](http://www.chartjs.org/)—a module that won't work off the bat but does with a little coaxing.

Trying to require Chart.js using

```js
require("chart.js@2.7.1")
```

returns an error: `RequireError: invalid module`. 

However, a visit to [https://unpkg.com/chart.js@2.7.1/](https://unpkg.com/chart.js@2.7.1/) reveals a `dist` folder containing a `.min.js` file of Chart.js. When we instead require that file with

```js
Chart = require("chart.js@2.7.1/dist/Chart.min.js")
```

the require is successful, and we are able to use Chart.js for data visualization.

## Requiring modules from bundle.run

Some modules won't have browser builds, but they're still usable by requiring them through [bundle.run](https://bundle.run/), an API that runs [browserify](http://browserify.org/) and [rollup](https://rollupjs.org/) and returns bundles.

For instance, the [obliterator](https://github.com/Yomguithereal/obliterator) module doesn't include a browser build, but it's written in vanilla JavaScript and uses normal `require` statements and nothing fancy, so simply requiring it through bundle.run works great

Construct a bundle.run URL using the following structure: https://bundle.run/module-name@latest (though we recommend that you specify a module version at the end instead of `@latest`).

For obliterator (version 1.2.1), that would look like this: 

```js
obliterator = require('https://bundle.run/obliterator@1.2.1')
```

## Requiring stubborn add-ons

Let's take a look at some [three.js](https://threejs.org/) 'add-ons'. These are not part of the main three.js codebase, but are super useful and often very fun, so we want access to them. OrbitControls is one of them: it lets you easily add mouse controls to a three.js scene such that dragging around on it moves the scene.

Checking out [the code for OrbitControls on GitHub](https://github.com/mrdoob/three.js/blob/dev/examples/jsm/controls/OrbitControls.js) reveals that it doesn't require or import three, and it doesn't use an AMD or UMD module wrapper either. It just gloms on to the \`THREE\` variable, which it expects to be around.

To require OrbitControls, the trick is to:

1. Require the module that an add-on wants to glom on to
2. Then, require the add-on but ignore its inevitable error

```js
THREE = {
  const THREE = (window.THREE = await require("three@0.132.2"));
  await require("three@0.132.2/examples/js/controls/OrbitControls.js").catch(
    () => {}
  );
  return THREE;
}
```

## Modules that want global configuration

Some libraries like to be configured in one place. For instance, when you include the bignumber.js module—for example in [Project Euler](https://beta.observablehq.com/@tmcw/project-euler-https-projecteuler-net) notebook—it is often configured to print out lots and lots of numeric digits, instead of formatting them in scientific notation. That's all done by the .config() method off of the main module object.

In that case, the best practice is to combine _requiring the module_ with _configuring it_ to guarantee that you only have to configure it once and that all cells that use the module get it properly configured. In bignumber.js's case, that looks like:

```js
BigNumber = {
  // require bignumber
  let bn = await require('bignumber.js');
  // Print out lots and lots of digits
  bn.config({ EXPONENTIAL_AT: 1e+9 });
  // return the configured object
  return bn;
}
```

## Modules that assign a global variable but don't return it

A good example of this is hyperhtml: `require` fails to return an object, but the window gets hyperHTML attached. In this case, you can use `.catch` to catch the require failure and instead resolve to a value:

```js
hyperHTML = require("hyperhtml").catch(() => window.hyperHTML)
```