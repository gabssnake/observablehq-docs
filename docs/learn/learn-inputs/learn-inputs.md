# Inputs & interactivity

---

<figure>
  <img
    class="screenshot w-100"
    src="/learn/learn-inputs/new-users-course-inputs-interactivity.png" alt="An illustration of some data related icons and objects with a hand pointing to a depiction of a dropdown menu."
  />
</figure>

Notebooks on Observable are reactive, and with [Observable Inputs](/inputs/inputs-overview/inputs-overview) you can quickly create interface components (e.g. buttons, sliders, text boxes, etc.) that allow users to interact with data. 

For example, a histogram of Olympic athlete weights is shown below. The drop-down selector at the top lets you pick the sport you're interested in. 

[//]: # (This following screenshot is a little hard to read and should be replaced by a mini-tutorial video at some point.)

<figure>
  <img
    class="screenshot w-100"
    src="/learn/learn-inputs/inputWithChart.png" alt="A screenshot of two cells: the first, and open JavaScript cell with code for an dropdown input to select a sport, and the second, a histogram showing the results for the sport selected in the dropdown above."
  />
  <figcaption>The dropdown created in the top cell determines the sport being evaluated in the chart below.</figcaption>
</figure>

The drop-down selector is one of the built-in Observable Inputs. Inputs are part of the Observable standard library that helps create notebooks by providing commonly-used components. An input by itself simply creates the HTML and JavaScript code to display a component, like a slider:

<figure>
  <img
    class="screenshot w-100"
    src="/learn/learn-inputs/sliderAt50.png" alt="A screenshot of an open JavaScript cell with code for a range slider in the code section and the resulting range slider set to 50 in the presentation section of the cell."
  />
  <figcaption>An example of a slider input from Observable's standard library.</figcaption>
</figure>

## Creating and using inputs

You can create inputs using the Add Cell menu that appears when you click a **+** button on the left of a cell. The top choices are the cell modes (JavaScript, Markdown, or HTML), and below is a long list of useful elements that you can insert into your notebook. In addition to inputs, the cell menu includes a variety of different chart templates.

You can either scroll down that list, or you can start typing to narrow down the options. At any time, you can select the highlighted item by pressing enter or return, or by clicking on it with your mouse.

<div style="max-width: 640px; border-radius: 5px; overflow: hidden; padding: 1rem;">
    <video src="/learn/learn-inputs/addInput.mov" alt="User is in a blank notebook and opens the cell menu to add a new cell. They type 'rad' to filter the results and click on the radio input. They then another JavaScript cell that takes the value from that radio input and see it update as they interact with the input." style="width: 100%; border-radius: 5px; box-shadow: 3px 3px 10px #ccc;" autoplay loop muted></video>
</div>

## The `viewof` keyword

To use an input, we need to access the value the user has selected. In JavaScript, you'd usually add an event listener so that you can run your code when the value changes. Observable handles this for you if you create a view of the input's value using the `viewof` keyword.

<figure>
  <img
    class="screenshot w-100"
    src="/learn/learn-inputs/viewOfSliderAt50.png" alt="A screenshot of a slider input set to 50 using the viewof keyword to set the value to the cell to the value of the slider."
  />
  <figcaption>An example of a slider using the `viewof` keyword to make the `amount` variable available for other cells to reference.</figcaption>
</figure>

Now the `amount` variable is a _view_ of the input's value, and changes whenever the slider changes. Any cell that uses its value, will update as well.

## Input types

To explore the many different input types, you can click on the Add Cell menu on the left and type "input." Here are some examples of the most common ones:

### Button

```js
viewof button = Inputs.button("Click me")
```

<figure>
  <img
    class="screenshot w-20"
    src="/learn/learn-inputs/inputButton.png" alt="A zoomed-in screenshot of a basic HTML button with the words Click me on it."
  />
</figure>

### Toggle

```js
viewof toggle = Inputs.toggle({label: "Toggle", value: true})
```

<figure>
  <img
    class="screenshot w-30"
    src="/learn/learn-inputs/inputToggle.png" alt="A zoomed-in screenshot of a toggle labeled 'Toggle' with a checkmark through it."
  />
</figure>

### Check boxes

```js
viewof checkboxes = Inputs.checkbox(["A", "B"], {label: "Check boxes", value: ["A"]})
```

<figure>
  <img
    class="screenshot w-40"
    src="/learn/learn-inputs/inputCheckBoxes.png" alt="A zoomed-in screenshot of two checkboxes labeled 'Check boxes' with one checkbox for the value A and another for B."
  />
</figure>

### Radio buttons

```js
viewof radios = Inputs.radio(["A", "B"], {label: "Radio buttons", value: "A"})
```

<figure>
  <img
    class="screenshot w-40"
    src="/learn/learn-inputs/inputRadioButton.png" alt="A zoomed-in screenshot of two radio buttons together labeled 'Radio buttons', one with the value A and the other with the value B."
  />
</figure>

### Date

```js
viewof date = Inputs.date({label: "Date", value: "2022-12-22"})
```

<figure>
  <img
    class="screenshot w-70"
    src="/learn/learn-inputs/inputDate.png" alt="A zoomed-in screenshot of a data form labeled 'Date' with the value of 12/22/2022."
  />
</figure>

### Text

```js
viewof text = Inputs.text({label: "Text"})
```

<figure>
  <img
    class="screenshot w-80"
    src="/learn/learn-inputs/inputText.png" alt="A zoomed-in screenshot of a text form labeled 'Text' with no value in the text form."
  />
</figure>


## Using inputs with Plot

Once you have created your inputs, you can add interactivity to a Plot chart by linking chart elements (e.g. colors, sizes, value thresholds, and more) to the input value.

Consider these three input code snippets and the resulting inputs:

```js
viewof letter = Inputs.select(letters, {label: "Favorite letter", value: "O"})
```

<figure>
  <img
    class="screenshot w-80"
    src="/learn/learn-inputs/favLetterDropdown.png" alt="A zoomed-in screenshot of a dropdown menu labeled 'Favorite letter' with the value set to the letter 'O'."
  />
</figure>

```js
viewof color = Inputs.color({label: "Bars color", value: "#4682b4"})
```

<figure>
  <img
    class="screenshot w-80"
    src="/learn/learn-inputs/barsColorDropdown.png" alt="A zoomed-in screenshot of a color selector labeled 'Bars color' set to color #4682b4, or steelblue."
  />
</figure>

```js
viewof highlight = Inputs.color({label: "Highlight color", value: "#ffa500"})
```

<figure>
  <img
    class="screenshot w-80"
    src="/learn/learn-inputs/highlightColorDropdown.png" alt="A zoomed-in screenshot of a color selector labeled 'Highlight color' with the value set to color #ffa500, or orange."
  />
</figure>

Using the input code snippets above and with the following Plot code: 

```js
letterFrequency = Plot.plot({
  marks: [
    Plot.barY(alphabet, {x: "letter", y: "frequency",
                         fill: d => d.letter === letter ? highlight : color,
                         sort: {x: "y", reverse: true}}),
    Plot.ruleY([0])
  ],
  caption: "Frequency of letters in English texts",
  ariaLabel: "Frequency of letters in English texts",
  ariaDescription: `This bar chart shows the frequency of letters in English texts. We see that the top five most common letters are E, T, A, O and I.`
})
```

allows you to change the letter that is being highlighted, the color of the bars, as well as the highlight color that shows the letter you've selected in the chart:

<figure>
  <img
    class="screenshot w-100"
    src="/learn/learn-inputs/favLetterPlot.png" alt="A screenshot of a chart showing the frequency of different letters of the alphabet, each bar representing the frequency in steelblue, except the letter 'O' which is highlighted in orange."
  />
</figure>


The `fill` definition might look intimidating at first, but it's really just a comparison. It is a function that takes a single input, here called `d`, and then compares that to the `letter` variable, which contains the letter we've selected above. The `?` is called a _ternary operator_, or _ternary if_. It works like an if statement that returns one of two values. If the condition right before the question mark is true, it returns what comes right after it. In this case, that is the highlight variable, which contains the highlight color. If that condition is false, it returns what comes after the colon, which is the value of the color variable, and that contains the normal bar color for all the bars that aren't highlighted.

We will cover this way of writing little functions in greater detail in later sections.

Learn more about Observable Inputs and creating interactive charts and tables: 

- [Hello, Inputs!](https://observablehq.com/@observablehq/hello-inputs)
- Quick Guides: [Exploring Olympic athletes data](https://observablehq.com/guide/athletes) and
[Electricity use vs. temperature](https://observablehq.com/guide/electricity)
