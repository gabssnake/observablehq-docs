# JavaScript cell

Observable notebooks are often written in [JavaScript](https://developer.mozilla.org/docs/Web/JavaScript) cells, using the Web's native language, but [with a few changes](/cells/observable-javascript). It's helpful if you have some JavaScript experience, but don't panic if you're rusty or not an expert! Instead, try tinkering with the code to get a feel for how it works. Even the most wizened developer may yet learn by trial and error.

## Expressions, variables & blocks

JavaScript cells can be for expressions, variable definitions or blocks of code. Expression cells are concise and are intended for simple definitions, such as basic arithmetic:

<figure>
  <img
    style="border-radius:2px;box-shadow:0 4px 12px rgba(0,0,0,0.15), 0 0 0 1px rgba(0, 0, 0, 0.1);margin-left:27px;margin-bottom:40px;max-width: ${width}"
    src="./assets/multiExpress.png" alt="A JavaScript cell with the mathematical expression 3 * 3 * 3 already written in the code section of the cell and ran, showing the result of 27 in the presentation part of the cell above the code section. The Markdown note in the code section of the JavaScript cell tells the reader to notice that the result of the multiplication expression below is shown above."
  />
  <figcaption>A JavaScript cell opened to show the code. The result appears above the code.</figcaption>
</figure>

Variable definitions can be equal to an expression or a block of code.

<figure>
  <img
    style="border-radius:2px;box-shadow:0 4px 12px rgba(0,0,0,0.15), 0 0 0 1px rgba(0, 0, 0, 0.1);margin-left:27px;margin-bottom:40px;max-width: ${width}"
    src="./assets/varDef.png" alt="A JavaScript cell with a variable definition shown in the code section of the cell and the resulting value of that variable shown in the presentation part of the cell."
  />
  <figcaption>A variable definition cell opened to show the code. The result appears above the code.</figcaption>
</figure>

Blocks of code are surrounded by curly braces `{}` and are intended for more complex definitions, such as ones involving local variables or loops.

<figure>
  <img
    style="border-radius:2px;box-shadow:0 4px 12px rgba(0,0,0,0.15), 0 0 0 1px rgba(0, 0, 0, 0.1);margin-left:27px;margin-bottom:40px;max-width: ${width}"
    src="./assets/cellBlock.png" alt="An open JavaScript cell showing a block of code surrounded in curly braces ({}) in the code section and the resulting value in the presentation section of the cell."
  />
  <figcaption>An open JavaScript cell featuring a block of code in curly braces {}.</figcaption>
</figure>

::: info NOTE
Any cell that you see with visible shading is _pinned_. This leaves the cell open so that the code is visible. A blue pushpin symbol appears in the left margin when you mouseover the cell.
:::

### Variables inside blocks are *local* to a cell

Local variables, like the `x` seen in the block above, can't be referenced from other cells; trying to reference an unknown variable results in a runtime error:

<figure>
  <img
    style="border-radius:2px;box-shadow:0 4px 12px rgba(0,0,0,0.15), 0 0 0 1px rgba(0, 0, 0, 0.1);margin-left:27px;margin-bottom:40px;max-width: ${width}"
    src="./assets/runTimeErrCell.png" alt="An open JavaScript cell showing a runtime error."
  />
  <figcaption>An open JavaScript cell showing a runtime error.</figcaption>
</figure>

However, this error is localized to the broken cell the rest of the notebook is able to run and you are still able to access variables that are not inside blocks.

## Object literals

Using curly braces is necessary not only when you are defining a block, but also when you are defining an [object literal](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_types#Object_literals).

An object literal is an object with a set of name–value pairs that define properties of the object:

<figure>
  <img
    style="border-radius:2px;box-shadow:0 4px 12px rgba(0,0,0,0.15), 0 0 0 1px rgba(0, 0, 0, 0.1);margin-left:27px;margin-bottom:40px;max-width: ${width}"
    src="./assets/objLiteral.png" alt="An open JavaScript cell featuring an object literal."
  />
  <figcaption>An open JavaScript cell featuring an object literal.</figcaption>
</figure>

Notice the curly braces (like a block), but with parentheses surrounding the curly braces (unlike a block). If you want to define a cell as an object literal, you must wrap the literal in parentheses to disambiguate it from a block.

## Functions

To repeat operations or share code between cells without copying and pasting, define a function:

<figure>
  <img
    style="border-radius:2px;box-shadow:0 4px 12px rgba(0,0,0,0.15), 0 0 0 1px rgba(0, 0, 0, 0.1);margin-left:27px;margin-bottom:40px;max-width: ${width}"
    src="./assets/function.png" alt="An open JavaScript cell featuring a function."
  />
  <figcaption>An open JavaScript cell featuring a function.</figcaption>
</figure>

This `greet` function now can be called from other cells to display greetings:

<figure>
  <img
    style="border-radius:2px;box-shadow:0 4px 12px rgba(0,0,0,0.15), 0 0 0 1px rgba(0, 0, 0, 0.1);margin-left:27px;margin-bottom:40px;max-width: ${width}"
    src="./assets/greetFunction.png" alt="The `greet` function being invoked in two different cells with different arguments with two different results."
  />
  <figcaption>The same `greet` function being invoked in two different cells with different arguments with two different results.</figcaption>
</figure>

## Naming & referencing cells

While local variables are not visible across cell boundaries, you can name cells to reference their values.

<figure>
  <img
    style="border-radius:2px;box-shadow:0 4px 12px rgba(0,0,0,0.15), 0 0 0 1px rgba(0, 0, 0, 0.1);margin-left:27px;margin-bottom:40px;max-width: ${width}"
    src="./assets/cellOrder.png" alt="Three cells, `fullName` followed by `lastName` and `firstName` such that the first listed cell `fullName` is defined in terms of cells that come after `fullName` and `lastName`. Each cell shows the code section open."
  />
  <figcaption>Here we call the variables in the first cell that are defined in latter cells.</figcaption>
</figure>

You needn't define named cells before you reference them: order your cells however you like, and Observable will automatically execute them in topological order. Out-of-order execution is especially helpful for improving the narrative flow of your notebook.

To rename a cell, you can edit it directly in the cell or within the cell toolbar: 

<figure>
  <img
    style="border-radius:2px;box-shadow:0 4px 12px rgba(0,0,0,0.15), 0 0 0 1px rgba(0, 0, 0, 0.1);margin-left:27px;margin-bottom:40px;max-width: ${width}"
    src="./assets/cellRename.png" alt="A screenshot showing a red arrow from the middle of the screenshot pointing down to the lower left-hand corner of the cell where there is a field highlighted by a box in red."
  />
  <figcaption>The renaming field in the cell toolbar is in the lower left-hand corner of the screen when a cell is selected.</figcaption>
</figure>



## Reactivity

A cell that references other cells is revaluated automatically whenever the referenced values change. In our example above where `firstName` and `lastName` were defined after `fullName`, if we were to change the value of `firstName`, then `fullName` would update automatically without needed to be revaluated. 

This reactivity is similar to live reload, with an important difference: when a value changes, only referencing cells are revaluated, rather than the entire notebook. This makes editing more responsive—notebooks update rapidly in response to changes—and you don’t lose independent transient state.

For example, the cell below computes a random walk in the cell `randomWalk`, the next cell strokes a line, the shape of which is based on the value of the `randomWalk`, and the third cell, `stroke`, defines the color of the line. If you edit the `stroke` cell, the random walk will change color, but the shape of the line remains the same. A new walk is only computed if you edit the `randomWalk` cell.`

<figure>
  <img
    style="border-radius:2px;box-shadow:0 4px 12px rgba(0,0,0,0.15), 0 0 0 1px rgba(0, 0, 0, 0.1);margin-left:27px;margin-bottom:40px;width:{width};"
    src="./assets/randomWalk.png" alt="Three different cells, the first one and second one are not open to show the code. The third is open showing the code as a variable assignment. The color of the middle cell's drawn line is dependent upon the third cell `stroke`, but the shape of the line is determined by the first cell `randomWalk`."
  />
  <figcaption>Three different cells where the color of the middle cell's drawn line is dependent upon the third cell `stroke`, but where the shape of the line is determined by the first cell `randomWalk`.</figcaption>
</figure>

To understand reactivity, think of each cell as a function. For example, the cell `sum = a + b` becomes a function that takes `a` and `b` as arguments, returning their sum; the runtime waits for the value of `a` and `b` to resolve and then invokes the `sum` function. The runtime invokes `sum` again whenever `a` or `b` change.

If a cell contains a `yield` statement, the runtime creates a [generator function](https://observablehq.com/@observablehq/introduction-to-generators) instead of a normal function. Likewise if the definition uses `await`, the runtime creates an [async function](https://observablehq.com/@observablehq/introduction-to-asynchronous-iteration). Reactivity greatly simplifies how you build user interfaces, script animations, and consume real-time data. 
