# JavaScript and Observable

---

<figure>
  <img
    class="screenshot w-100"
    src="/learn/learn-js/new-users-course-js-in-observable.png" alt="An illustration of some data related icons and objects and the JavaScript logo in the middle of the illustration."
  />
</figure>

There are a few differences between vanilla JavaScript and [JavaScript on Observable](https://observablehq.com/@observablehq/observable-javascript), because Observable uses a reactive model of data flow and code execution. The vast majority is the same, but it's important to know what's different and why. If you're brand new to JavaScript, we recommend taking a look at our [Just Enough JavaScript](https://observablehq.com/@observablehq/learn-javascript-introduction?collection=@observablehq/tutorial) tutorial and our [First steps with Observable](https://observablehq.com/guide/first-steps), [Tip calculator](https://observablehq.com/guide/tip-calculator), and
[Functional programming data exploration](https://observablehq.com/guide/functional-basics) Quick Guides to get started.

## Top-Level variables

Variable assignments like the one below look different from vanilla JavaScript, where you'd use `var`, `let`, or `const` to declare the variable.

An assignment in Observable both declares the variable and assigns a value to it. And that value is _immutable_, meaning it can't be changed by code (we'll get to local variables that can in a moment). You can of course change the value by clicking the run button in the right edge of the cell. When you do that, Observable then re-runs all code that depends on this variable.

Immutable variables might seem like a limitation, but they are necessary for Observable's many useful features to work. And they encourage a more functional-programming style of thinking that leads to cleaner and more reusable code. This includes methods like `map()`, `filter()`, etc., which operate on arrays, as well as the many useful utility functions built into D3 (which is available on Observable by default.)

For example, if we wanted to sort our `olympians` dataset into subsets for each sport, we could do that by iterating through the athletes and adding them to arrays inside of an object. Or we could just use `d3.group()` with an accessor function.

```js
d3.group(olympians, d => d.sport)
```

If you're not familiar with these functions, this might seem a bit arbitrary. There are many useful functions available in Observable by default, and many more can be found in JavaScript packages that you can import. Finding the ones that work for you will make building notebooks much faster and easier.

## Blocks and functions

What if you want to write something more complex than a single line of code? To organize code into logical chunks, you can use blocks or functions. These work just like vanilla JavaScript. (The term _vanilla JavaScript_ refers to "regular" JavaScript, i.e. JavaScript without any frameworks. You can read more about it in the [MDN web documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Introduction).)

A block is enclosed in curly braces `{}` and has to return a value. Local variables defined inside with `let` or `var` are mutable, just as you'd expect.

The block below sums up the values from 1 to the value specified by the range slider. (Yes, there's an easier way, but this is just for demonstration purposes.) Note the `sum` and `i` variables, which are mutable. The block re-runs when `maxVal` is changed, just as you'd expect from reactive code.

<figure>
  <img
    class="screenshot w-100"
    src="/learn/learn-js/jsBlock.png" alt="A screenshot of two open JavaScript cells. The first one is an open input cell with a slider labeled 'Sum up to' set to a value of 50. The second one is a code block that references the value of the cell set by the slider."
  />
  <figcaption>The slider in the first cell determines the value referenced when determining the value of the second cell.</figcaption>
</figure>

Functions are declared and called just like in vanilla JavaScript. Note that in the example below, we don't use the global `maxVal`, but rather the function argument `max`. We can also re-use the local variable names, since they are local to a block or function.

<figure>
  <img
    class="screenshot w-60"
    src="/learn/learn-js/reuseVariables.png" alt="A screenshot of an open JavaScript cell. The function sumNums is defined in the code portion by a block of text referencing local variables used in the previously pictured code block showing that the local variables can be reused in the context of a code block in a new cell."
  />
  <figcaption>A different function using some of the same local variables as the last, as they are defined within blocks.</figcaption>
</figure>

Calling the function with the `maxVal` value yields the same result as above. 

<figure>
  <img
    class="screenshot w-60"
    src="/learn/learn-js/maxVal.png" alt="A zoomed-in screenshot of an open JavaScript cell. The variable in the code block is defined in terms of the functions shown in the two previous screenshots."
  />
</figure>

Because the function call depends on that value, it is also re-run when you change the value with the slider.

## Wrapping object literals

If an Observable cell is composed of just one object literal, it needs to be wrapped in parentheses as well as curly braces. (This allows to distinguish them from code blocks, which are wrapped in curly braces.)

Top-level object literals therefore need to look like the following:

```js
obj = ({a: 1, b: 2})
```

This is not necessary inside code blocks or functions.

```js
function objReturn() {
  return {a: 1, b: 2}
}
```

## Promises and implicit `await`

Many useful JavaScript functions work asynchronously, for example when they retrieve data over the network. They work by immediately returning a [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise), which in turn is resolved (_i. e._ calls a _resolve_ callback function) once the data is available (or an _error_ callback if the data fails to load):

<figure>
  <img
    class="screenshot w-100"
    src="/learn/learn-js/lionBig.png" alt="An open JavaScript cell with a file attachment call used to import an image of a lion. The image of the lion with a width of 500 pixels is shown above."
  />
  <figcaption>An image being imported via the FileAttachment method in a JavaScript cell.</figcaption>
</figure>

Observable implicitly `await`s promises on the top level of a cell. For example, the picture of a lion above attached to its notebook automatically without explicitly using the `await` keyword. The `FileAttachment` function returns a promise, which Observable resolves as an image.

If we wanted to use the same function inside of Markdown, such as the embedded code at the bottom of the following pictured Markdown cell, we'd have to use the `await` keyword. This allows us to access the promise itself, which we might want to use in other ways, perhaps to catch an error or to pass it to another function that expects a promise.

<figure>
  <img
    class="screenshot w-100"
    src="/learn/learn-js/lionSmall.png" alt="An open Markdown cell with a file attachment call used to import the same image of a lion as the last screenshot showed. Because it is interpolated into a Markdown cell, the await keyword is needed to access the promise itself."
  />
  <figcaption>The same image as above imported via interlocuting JavaScript code in a Markdown cell requiring the `await` keyword.</figcaption>
</figure>

