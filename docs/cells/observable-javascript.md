# Observable JavaScript

JavaScript on Observable is almost—_but not entirely_ —vanilla. This is intentional: by building on the native language of the web, Observable is familiar. And you can use the libraries you know and love, such as D3, Lodash, and Apache Arrow. Yet for [dataflow](https://observablehq.com/@observablehq/how-observable-runs), Observable needed to change JavaScript in a few ways. 

Here's a quick overview of what's different from vanilla.

## Cells are separate scripts

Each cell in a notebook is a separate script that runs independently. A syntax error in one cell won't prevent other cells from running. 

<figure>
  <img
    style="border-radius:2px;box-shadow:0 4px 12px rgba(0,0,0,0.15), 0 0 0 1px rgba(0, 0, 0, 0.1);margin-left:27px;margin-bottom:40px;max-width: ${width}"
    src="./assets/synErr.png" alt="Two open cells, the first showing a syntax error and then the second showing a variable assignment. Even though the first cell has a syntax error it has no affect on the other cell in the notebook."
  />
  <figcaption>A syntax error in one cell doesn't affect the running of the other cells in the notebook.</figcaption>
</figure>

The same holds true for a runtime error:

<figure>
  <img
    style="border-radius:2px;box-shadow:0 4px 12px rgba(0,0,0,0.15), 0 0 0 1px rgba(0, 0, 0, 0.1);margin-left:27px;margin-bottom:40px;max-width: ${width}"
    src="./assets/runErr.png" alt="Two open cells, the first showing a runtime error and then the second showing a variable assignment. Even though the first cell has a runtime error it has no affect on the other cell in the notebook."
  />
  <figcaption>A runtime error in one cell doesn't affect the running of the other cells in the notebook.</figcaption>
</figure>

Likewise, local variables are only visible to the cell that defines them. Here in the following screenshot, you can see the constant `local` is defined within curly braces and is therefore local to the cell/block. Therefore, when the variable is called in the next cell, there is a runtime error:

<figure>
  <img
    style="border-radius:2px;box-shadow:0 4px 12px rgba(0,0,0,0.15), 0 0 0 1px rgba(0, 0, 0, 0.1);margin-left:27px;margin-bottom:40px;max-width: ${width}"
    src="./assets/localVar.png" alt="Two open cells, the first defines a local variable, `local`. Because `local` is local to the other cell, calling it from the second cell causes a runtime error."
  />
  <figcaption>Calling a local variable from a cell for which it is not defined causes a runtime error.</figcaption>
</figure>

## Cells run in topological order

In vanilla JavaScript, code runs from top to bottom. Not so here; Observable runs [like a spreadsheet](https://observablehq.com/@observablehq/how-observable-runs), so you can define your cells in whatever order makes sense.

<figure>
  <img
    style="border-radius:2px;box-shadow:0 4px 12px rgba(0,0,0,0.15), 0 0 0 1px rgba(0, 0, 0, 0.1);margin-left:27px;margin-bottom:40px;max-width: ${width}"
    src="./assets/orderDoesntMatter.png" alt="Two open cells, the first uses a variable, `a`, in a calculation. The second cell defines `a`. This shows that the order of cells doesn't matter with respect to variable definitions."
  />
  <figcaption>You can define cells in whatever order you like. Here `a` is successfully used as a variable in the cell before the one in which it is defined.</figcaption>
</figure>

By extension, circular definitions are not allowed:

<figure>
  <img
    style="border-radius:2px;box-shadow:0 4px 12px rgba(0,0,0,0.15), 0 0 0 1px rgba(0, 0, 0, 0.1);margin-left:27px;margin-bottom:40px;max-width: ${width}"
    src="./assets/noCircularDefs.png" alt="Two open cells, the first which defines `c1.` in terms of `c2` and the second of which defines `c2` in terms of `c1`. Both cells show errors because circular definitions are not allowed in Observable."
  />
  <figcaption>Circular definitions cause errors.</figcaption>
</figure>

## Cells re-run when any referenced cell changes

You don't have to run cells explicitly when you edit or interact—the notebook updates automatically. Run the cell below by clicking the play button <Icon name="playButton" />, or by focusing and hitting <Keys set="Shift-Enter" />. Only the referencing cells run, then *their* referencing cells, and so on—other cells are unaffected.

If a cell allocates resources that won't be automatically cleaned up by the garbage collector, such as an animation loop or event listener, use the [invalidation promise](https://observablehq.com/@observablehq/invalidation) to dispose of these resources manually and avoid leaks.

<figure>
  <img
    style="border-radius:2px;box-shadow:0 4px 12px rgba(0,0,0,0.15), 0 0 0 1px rgba(0, 0, 0, 0.1);margin-left:27px;margin-bottom:40px;max-width: ${width}"
    src="./assets/cellInvalid.png" alt="An open cell, in the presentation section we see the value of the cell is `undefined`. In the code section of the cell there is some code using the invalidation promise."
  />
  <figcaption>Use the invalidation promise to dispose of resources like an animation loop or an event listener, as they won't be automatically cleaned up by the garbage collector.</figcaption>
</figure>

## Cells implicitly await promises

You can define a cell whose value is a promise:

<figure>
  <img
    style="border-radius:2px;box-shadow:0 4px 12px rgba(0,0,0,0.15), 0 0 0 1px rgba(0, 0, 0, 0.1);margin-left:27px;margin-bottom:40px;max-width: ${width}"
    src="./assets/promiseCell.png" alt="An open cell, the presentation section shows the message 'hello there' and the code section shows a new promise object being created such that it resolves after 30000 ms to 'hello there'."
  />
  <figcaption>A cell whose value is a promise.</figcaption>
</figure>

If you reference such a cell, you don't need to `await`; the referencing cell won't run until the value resolves. 

## Cells implicitly iterate over generators

If a cell `yield`s, any referencing cell will see the most recently yielded value.

<figure>
  <img
    style="border-radius:2px;box-shadow:0 4px 12px rgba(0,0,0,0.15), 0 0 0 1px rgba(0, 0, 0, 0.1);margin-left:27px;margin-bottom:40px;max-width: ${width}"
    src="./assets/mostRecentYield.png" alt="Two open cells, the first showing `c` having a value of 3 in the presentation mode and a block of text with three `yield`s consecutively, with values 1,2, and 3 respectively. The second cell shows `c` being called in the code section, while showing the value 3 in the presentation section, which is the most recent of the `yield`ed values of the block above."
  />
  <figcaption>When you reference a cell with yields, the most recently yielded value is returned.</figcaption>
</figure>

Also, yields occur no more than once every animation frame: typically sixty times a second, which makes generators handy for [animation](https://observablehq.com/@observablehq/animation-loops). If you yield a DOM element, it will be added to the DOM before the generator resumes.

## Named cells are declarations, not assignments

Named cells look like, and function *almost* like, assignment expressions in vanilla JavaScript. But cells can be defined in any order, so think of them as hoisted function declarations.

You can't assign the value of another cell (though see mutables below):

<figure>
  <img
    style="border-radius:2px;box-shadow:0 4px 12px rgba(0,0,0,0.15), 0 0 0 1px rgba(0, 0, 0, 0.1);margin-left:27px;margin-bottom:40px;max-width: ${width}"
    src="./assets/assignErr.png" alt="Two open cells, the first showing a variable assignment of `foo` being set to the number 2. The second showing the same variable being assigned a different value inside curly braces."
  />
  <figcaption>You will get an error if you assign the value of another cell.</figcaption>
</figure>

Cell names must also be unique. If two or more cells share the same name, they will all error:

<figure>
  <img
    style="border-radius:2px;box-shadow:0 4px 12px rgba(0,0,0,0.15), 0 0 0 1px rgba(0, 0, 0, 0.1);margin-left:27px;margin-bottom:40px;max-width: ${width}"
    src="./assets/assignErr.png" alt="Two open cells, the first showing a variable assignment of `foo` being set to the number 2. The second showing the same variable being assigned a different value, 3,inside curly braces."
  />
  <figcaption>You will get an error if you assign the value of another cell.</figcaption>
</figure>

:::info NOTE
Observable doesn't yet support destructuring assignment to declare multiple names, but we hope to add that soon.
:::

## Statements need curly braces, and return or yeild

A cell body can be a simple expression, such as a number or string literal, or a function call. But sometimes you want statements, such as for loops. For that you'll need curly braces, and a `return` statment to give the cell a value. Think of a cell as a function, except the function has no arguments.

<figure>
  <img
    style="border-radius:2px;box-shadow:0 4px 12px rgba(0,0,0,0.15), 0 0 0 1px rgba(0, 0, 0, 0.1);margin-left:27px;margin-bottom:40px;max-width: ${width}"
    src="./assets/cellStatement.png" alt="An open cell with the value 45 shown in the presentation section of the cell and a statement in curly braces in the code section of the cell with a return statment that returns the value of `sum`, which in this case is 45. So the value of the return statement is the same as the cell's value."
  />
  <figcaption>A statement inside curly braces with a `return` so that the cell has a value.</figcaption>
</figure>

For the same reason, you'll need to wrap object literals in parentheses, or use a block statment with a `return`:

<figure>
  <img
    style="border-radius:2px;box-shadow:0 4px 12px rgba(0,0,0,0.15), 0 0 0 1px rgba(0, 0, 0, 0.1);margin-left:27px;margin-bottom:40px;max-width: ${width}"
    src="./assets/objDef.png" alt="Two open cells each with properly defined object literals. The first cell uses parentheses around the object in the code section of the cell and the second cell uses a return statement to return the object without parentheses"
  />
  <figcaption>The first cell uses parentheses to define the object literal and the second cell uses a return statment.</figcaption>
</figure>

The below cell is interpreted as a block with a single [labeled statement](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/label), followed by a string literal expression. The cell value is undefined because the block doesn't return anything.

<figure>
  <img
    style="border-radius:2px;box-shadow:0 4px 12px rgba(0,0,0,0.15), 0 0 0 1px rgba(0, 0, 0, 0.1);margin-left:27px;margin-bottom:40px;max-width: ${width}"
    src="./assets/cellObjLiteral.png" alt="An open cell `label` with the value of `undefined` shown in the presentation section of the cell, while the code section shows the object `label` being defined as an object literal without parentheses, which are required in Observable."
  />
  <figcaption>A cell defining an object literal without using parentheses. It is therefore not recognized by Observable as an object literal.</figcaption>
</figure>

## Cells can be views

Observable has a special [`viewof` operator](https://observablehq.com/@observablehq/views) which lets you define interactive values. A view is a cell with two faces: its user interface, and its programmatic value.

<figure>
  <img
    style="border-radius:2px;box-shadow:0 4px 12px rgba(0,0,0,0.15), 0 0 0 1px rgba(0, 0, 0, 0.1);margin-left:27px;margin-bottom:40px;max-width: ${width}"
    src="./assets/viewCell.png" alt="Two open cells, the first featuring the `viewof` operator set to `text` in the code section which renders a text field in the presentation section of the cell. The second cell calls `text` in the code section and provides the value of the above cell's text field as a result."
  />
  <figcaption>The `viewof` operator named `text` renders a text field. The value of that field can be accessed elsewhere by calling `text`.</figcaption>
</figure>

## Cells can be mutables

Observable has a special [`mutable` operator](https://observablehq.com/@observablehq/mutable) so you can opt-in to mutable state: you can set the value of a mutable from another cell:

<figure>
  <img
    style="border-radius:2px;box-shadow:0 4px 12px rgba(0,0,0,0.15), 0 0 0 1px rgba(0, 0, 0, 0.1);margin-left:27px;margin-bottom:40px;max-width: ${width}"
    src="./assets/mutables.png" alt="Two open cells, the first using the `mutable` operator to define the variable `thing` set to value 0, and the next cell modifying thing by adding 1 successfully."
  />
  <figcaption>The mutable operator makes it so that you can opt-in to a mutable state and affect the value from another cell.</figcaption>
</figure>

## Observable has a standard library

Observable provides a small [standard library](https://github.com/observablehq/stdlib/blob/master/README.md) for essential features, such as a reactive `width` and [Inputs](https://observablehq.com/@observablehq/inputs).

## Cells can be imported from other notebooks

You can [import any named cell](https://observablehq.com/@observablehq/import) from any notebook, with syntax similar to static ES imports. But Observable imports are lazy: if you don't use it, it won't run.

<figure>
  <img
    style="border-radius:2px;box-shadow:0 4px 12px rgba(0,0,0,0.15), 0 0 0 1px rgba(0, 0, 0, 0.1);margin-left:27px;margin-bottom:40px;max-width: ${width}"
    src="./assets/importCell.png" alt="Two open cells, the first importing a cell called ramp from another notebook, the second calling the imported cell and using it to create a visual."
  />
  <figcaption>Importing a cell and then calling that cell.</figcaption>
</figure>

Also, you can [import-with](https://observablehq.com/@d3/bar-chart-remix), which allows you to inject cells from the current notebook into the imported notebook, overriding the original definition. You can treat any notebook as an extensible template!

## Static ES imports are not supported; use dynamic imports

Since everything in Observable is inherently dynamic, there's not really a need for static ES imports—though, we might add support in the future. Note that only the most-recent browsers support dynamic imports, so you might consider using require for now.

<figure>
  <img
    style="border-radius:2px;box-shadow:0 4px 12px rgba(0,0,0,0.15), 0 0 0 1px rgba(0, 0, 0, 0.1);margin-left:27px;margin-bottom:40px;max-width: ${width}"
    src="./assets/lodash.png" alt="Two open cells, the first importing the lodash module. The second one is using the lodash module to put a string into camel case."
  />
  <figcaption>Importing lodash in one cell and using it in another.</figcaption>
</figure>
