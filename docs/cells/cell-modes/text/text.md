# Text cells

Observable notebooks are great for telling compelling stories with data, but to do that well you need more than beautiful visualizations! You'll also want text, lists, and other text elements to help add context, explanations, and structure. This short guide gives you an introduction into the basics of formatting Markdown text in Observable.

## Creating a text cell

To create a new text cell, select the plus sign (+) that appears to the left-side of the notebook between any two cells. As a result, you'll see the [Add cell menu](https://observablehq.com/@observablehq/adding-cells/) appear. Use the mouse to select **Text** at the top of the menu or search for it in the search bar. Text cells are Markdown cells, so you can leverage your Markdown knowledge when defining these cells. 

<figure>
  <img
    style="border-radius:2px;box-shadow:0 4px 12px rgba(0,0,0,0.15), 0 0 0 1px rgba(0, 0, 0, 0.1);margin-left:27px;margin-bottom:40px;max-width: ${width}"
    src="/cells/cell-modes/text/addCell.png" alt="An open notebook with the title 'Adding Text cell', with an opened Add cell menu and the 'Text' option highlighted with a red rectangle."
  />
  <figcaption>Opening the Add cell menu for the Text button.</figcaption>
</figure>

There are many other options available when you are [adding cells](https://observablehq.com/@observablehq/adding-cells), but in this guide we'll focus on some common formatting options for text/Markdown cells.


## Basic Formatting

Basic text formatting includes *italics*, **bold**, and ~~strikethrough~~.

To put a word or series of words in italics, wrap the word or series of words in asterisks (*):

```
*italics*
```

<figure>
  <img
    style="border-radius:2px;box-shadow:0 4px 12px rgba(0,0,0,0.15), 0 0 0 1px rgba(0, 0, 0, 0.1);margin-left:27px;margin-bottom:40px;max-width: ${width}"
    src="/cells/cell-modes/text/italics.png" alt="An open cell, with the word 'italics' wrapped in asterisks, (*), in the code section, and the word 'italics' in italics in the presentation section of the cell."
  />
  <figcaption>The word 'italics' in italics by wrapping the word in asterisks, (*).</figcaption>
</figure>

To put a word or series of words in bold, wrap the word or series of words in double-asterisks (**):

```
**bold**
```

<figure>
  <img
    style="border-radius:2px;box-shadow:0 4px 12px rgba(0,0,0,0.15), 0 0 0 1px rgba(0, 0, 0, 0.1);margin-left:27px;margin-bottom:40px;max-width: ${width}"
    src="/cells/cell-modes/text/bold.png" alt="An open cell, with the word 'bold' wrapped in double-asterisks, (**), in the code section below, and the word 'bold' in bold in the presentation section of the cell above."
  />
  <figcaption>The word 'bold' in bold by wrapping the word in double-asterisks, (**).</figcaption>
</figure>

To strikethrough a word or series of words, wrap the word or series of words in double-tildes (~~):

```
~~strikethrough~~
```

<figure>
  <img
    style="border-radius:2px;box-shadow:0 4px 12px rgba(0,0,0,0.15), 0 0 0 1px rgba(0, 0, 0, 0.1);margin-left:27px;margin-bottom:40px;max-width: ${width}"
    src="/cells/cell-modes/text/strikethrough.png" alt="An open cell, with the word 'strikethrough' wrapped in double-tildes, (~~), in the code section below, and the word 'strikethrough' being struckthrough in the presentation section of the cell above."
  />
  <figcaption>The word 'strikethrough' being struckthrough by wrapping the word in double-tildes, (~~).</figcaption>
</figure>


You can nest these as you desire:

```
*You can put one **inside** the other.*
```

<figure>
  <img
    style="border-radius:2px;box-shadow:0 4px 12px rgba(0,0,0,0.15), 0 0 0 1px rgba(0, 0, 0, 0.1);margin-left:27px;margin-bottom:40px;max-width: ${width}"
    src="/cells/cell-modes/text/boldInsideItalics.png" alt="An open cell, in the code section of the cell above, the sentence 'You can put one inside the other.'is wrapped in single astericks (*), while the word in the sentence 'inside' is wrapped in double-asterisks, (**). In the presentation section of the cell, the sentence 'You can put one inside the other.' is italicized with the word 'inside' bolded" 
  />
  <figcaption>A bolded word within a series of italicized words.</figcaption>
</figure>

To make a horizontal divider across the page, use three hyphens in a row, (---), on their own line:

```
---
```

<figure>
  <img
    style="border-radius:2px;box-shadow:0 4px 12px rgba(0,0,0,0.15), 0 0 0 1px rgba(0, 0, 0, 0.1);margin-left:27px;margin-bottom:40px;max-width: ${width}"
    src="/cells/cell-modes/text/horzDivider.png" alt="An open cell, in the code section below there are three hyphens, (---), and in the presentation section above there is a light gray horizontal dividing line across the cell." 
  />
  <figcaption>Using three hyphens, (---), to create a horiziontal divider.</figcaption>
</figure>

## Lists

### Unordered lists

Here is an example of an unordered list in a text cell:

```
- Item 1
  - Sub-item 1
    - Sub-sub-item 1
    - Sub-sub-item 2
- Item 2
- Item 3
```

<figure>
  <img
    style="border-radius:2px;box-shadow:0 4px 12px rgba(0,0,0,0.15), 0 0 0 1px rgba(0, 0, 0, 0.1);margin-left:27px;margin-bottom:40px;max-width: ${width}"
    src="/cells/cell-modes/text/unorderedList.png" alt="An open cell, in the code section below there is a formatted list of items notated by a dash, (-), with some items having nested sub-items indented one space under the items they are nested under. There some examples there of sub-items having 'sub-sub'items created following the same pattern of indenting one space under the parent item under which they are nested and using a dash before the name of the item." 
  />
  <figcaption>An unordered list in Markdown.</figcaption>
</figure>

As seen here, it is created using a series of dashes, one dash in the first space of each line signifying one item of the list followed by the item's name, with sub-items being created by indenting dashes one space in on the lines below their parent item's line, each signifying a sub-item on the list. You continue this pattern to nest further items such as sub-sub-items. 

### Ordered lists

Here is an example of an ordered list in a text cell:

```
1. Item 1
  1. Sub-item 1
    1. Sub-sub-item 1
    2. Sub-sub-item 2
2. Item 2
3. Item 3
```

<figure>
  <img
    style="border-radius:2px;box-shadow:0 4px 12px rgba(0,0,0,0.15), 0 0 0 1px rgba(0, 0, 0, 0.1);margin-left:27px;margin-bottom:40px;max-width: ${width}"
    src="/cells/cell-modes/text/orderedList.png" alt="An open cell, in the code section below there is a formatted list of items notated by a series of numerals, (1+), with some items having nested sub-items indented one space under the items they are nested under, starting with the number 1 and proceeding in numerical order. There some examples there of sub-items having 'sub-sub'items created following the same pattern of indenting one space under the parent item under which they are nested and using a numeral, such as 1 if the first item, before the name of the item." 
  />
  <figcaption>An ordered list in Markdown.</figcaption>
</figure>

As seen in the screenshot above, ordered lists are created just like unordered lists except that instead of using dashes for each item you instead use numerals (followed by the name of the item) starting at 1 and increasing +1 for each item at that nesting level.

## Headings

Headings in Markdown and Observable text cells are created by placing pound symbols, (#), in front of the name of the intended heading—one pound symbol for each level of heading you wish to render:

```
# Heading 1

## Heading 2

### Heading 3

#### Heading 4

##### Heading 5
```

<figure>
  <img
    style="border-radius:2px;box-shadow:0 4px 12px rgba(0,0,0,0.15), 0 0 0 1px rgba(0, 0, 0, 0.1);margin-left:27px;margin-bottom:40px;max-width: ${width}"
    src="/cells/cell-modes/text/headings.png" alt="Five open cells, in the code section of the first cell, below the presentation section, the 'Heading 1' is written preceded by a single pound symbol, (#). Each of the rest of the five cells follow this pattern, each increasing by one heading level, such that there are two pound symbols followed by the phrase 'Heading 2', then followed in the next cell by '### Heading 3' and so on to '##### Heading 5'." 
  />
  <figcaption>Examples of headings 1 through 5 in Markdown.</figcaption>
</figure>

## Block Quotes

Block quotes are created using the `>` symbol at the beginning for each line, with the quote wrapped in quotation marks (""). Skipping the line after the quotation, the last part of the block quote is created by using the hyphen, `-` followed by the name of the person responsible for originally saying the quote:

```
> "Above all else show the data."
>
> — Edward Tufte
```

<figure>
  <img
    style="border-radius:2px;box-shadow:0 4px 12px rgba(0,0,0,0.15), 0 0 0 1px rgba(0, 0, 0, 0.1);margin-left:27px;margin-bottom:40px;max-width: ${width}"
    src="/cells/cell-modes/text/blockQuote.png" alt="An open cell with three lines of Markdown, in the code section in the lower half of the cell, the beginning of each line has the `>` symbol. The first line has the quote 'Above all else show the data' in double-quotes. The second line is blank other than the `>` symbol at the beginning, and the third line has the byline with the author of the quote Edward Tufte. In the presentation section of the cell in the upper half."
  />
  <figcaption>Example of a block quote.</figcaption>
</figure>

## Links

URLs automatically turn into links, but you can also add links to text by wrapping the text in brackets, ([]), immediately followed by the URL in parentheses, (()):

```
[Observable](https://observablehq.com)
```

<figure>
  <img
    style="border-radius:2px;box-shadow:0 4px 12px rgba(0,0,0,0.15), 0 0 0 1px rgba(0, 0, 0, 0.1);margin-left:27px;margin-bottom:40px;max-width: ${width}"
    src="/cells/cell-modes/text/links.png" alt="An open text cell, with a code section in the bottom half of the open cell and a presentation section in the top half of the cell. In the code section, a URL is written in Markdown on one line followed by a bit of linked text on the next line. The URL is live in the presentation section of the cell as is the linked text."
  />
  <figcaption>Example of a URL and hyperlinked text in Markdown.</figcaption>
</figure>

## Images

### Images in Markdown

You can add a markdown image using similar syntax to a link (though prepended with a `!`). Remember to use the await keyword to allow the file attachment to load.

```
![Add alt-text here](${await FileAttachment('grayLogo.png').url()})
```

<figure>
  <img
    style="border-radius:2px;box-shadow:0 4px 12px rgba(0,0,0,0.15), 0 0 0 1px rgba(0, 0, 0, 0.1);margin-left:27px;margin-bottom:40px;max-width: ${width}"
    src="/cells/cell-modes/text/markdownImage.png" alt="An open text cell, with a code section in the bottom half of the open cell and a presentation section in the top half of the cell. In the code section, there is some code using the code ![Add alt-text here](${await FileAttachment('grayLogo.png').url()}). In the presentation section, the image is shown to be the Observable logo and title, 'Observable' in Observable's font."
  />
  <figcaption>Example of loading an image using Markdown in a text cell.</figcaption>
</figure>

### Images in HTML

Alternatively, you can use an `<img>` tag (and associated style options like `width`) in an [HTML cell](https://observablehq.com/@observablehq/cell-modes). Remember to use the `await` keyword to allow the image to load.

```html
<img 
  src=${await FileAttachment('grayLogo.png').url()} 
  style="width: 200px"
></img>
```

<figure>
  <img
    style="border-radius:2px;box-shadow:0 4px 12px rgba(0,0,0,0.15), 0 0 0 1px rgba(0, 0, 0, 0.1);margin-left:27px;margin-bottom:40px;max-width: ${width}"
    src="/cells/cell-modes/text/image.png" alt="An open text cell, with a code section in the bottom half of the open cell and a presentation section in the top half of the cell. In the code section, there is some code using an <img> tag and the `await` keyword taking the image `grayLogo.png` as an argument. In the presentation section, the image is shown to be the Observable logo and title, 'Observable' in Observable's font."
  />
  <figcaption>Example of loading an image in an HTML cell.</figcaption>
</figure>

### Images with JavaScript

You can also display the image by accessing the FileAttachment object with JavaScript. Note that you don't need the `await` keyword when this code is the only thing in the cell, because cells automatically `await` their contents.

## Displaying code

You can display code in a text cell inline by wrapping the intended code in backticks (``). To make a codeblock, put the code in between two lines, each with three backticks. To add syntax highlighting, add the name of the language after the first three backticks:

<figure>
  <img
    style="border-radius:2px;box-shadow:0 4px 12px rgba(0,0,0,0.15), 0 0 0 1px rgba(0, 0, 0, 0.1);margin-left:27px;margin-bottom:40px;max-width: ${width}"
    src="/cells/cell-modes/text/code.png" alt="An open text cell, with a code section in the bottom half of the open cell and a presentation section in the top half of the cell. In the code section, first an example of inline code treatment, follwed by an example of block code treatment, followed by an example of block code treatment with syntax highlighting."
  />
  <figcaption>An example of inline code treatment, an example of creating a code block, and an example of syntax highlighting in a code block.</figcaption>
</figure>

## Adding dynamic values

If you have JavaScript variable you would like to access in Markdown from a text cell, you would call the variable inline by wrapping the variable name in curly braces ({}) preceded by the `$` symbol. For instance, if you had the variable `favNumber`, you would use this code:

```
${favNumber}
```

inline as seen here:

<figure>
  <img
    style="border-radius:2px;box-shadow:0 4px 12px rgba(0,0,0,0.15), 0 0 0 1px rgba(0, 0, 0, 0.1);margin-left:27px;margin-bottom:40px;max-width: ${width}"
    src="/cells/cell-modes/text/dynamicVariables.png" alt="Two open cells, the first a text cell in Markdown, the second a JavaScript cell. In the first cell's code section, there is Markdown text interpolated with the JavaScript variable `favNumber` using the format of a `$` symbol followed by the variable name wrapped in curly braces ({}). In the presentation section of the same cell the same text is rendered but where the interpolated variables were in the code section, instead there is the value of the variable itself, which in this case is 29. In the second cell, we have the variable `favNumber` defined by a range slider set to the value 29."
  />
  <figcaption>A variable, `favNumber` defined in a JavaScript cell, but being called in a Markdown text cell to use its value, 29, inline with the text there.</figcaption>
</figure>

## Formulas

Observable supports TeX for formatting mathematical formulas and, accordingly, TeX can be used inline with Markdown in text cells:

```
${tex`a^2 + b^2 = c^2`}
```

<figure>
  <img
    style="border-radius:2px;box-shadow:0 4px 12px rgba(0,0,0,0.15), 0 0 0 1px rgba(0, 0, 0, 0.1);margin-left:27px;margin-bottom:40px;max-width: ${width}"
    src="/cells/cell-modes/text/formulasInline.png" alt="An open text cell. The top half of the cell is the presentation part of the cell, the bottom half is the code section. In the code section, the sentence 'You can write formulas inline:' followed by the formula a squared plus b squared equals c squared written as a^2 + b^2 = c^2. In the presentation part of the cell, the sentence 'You can write formulas inline:' followed by a rendering of the mathematical formula a squared plus b squared euqals c squared"
  />
  <figcaption>An example of a inline mathematical formula in a Markdown text cell.</figcaption>
</figure>

## Tables

### A basic table

The following Markdown code in this format:

```
Column 1 | Column 2 | Column 3
-------- | -------- | --------
Cell 1-1 | Cell 2-1 | Cell 3-1
Cell 1-2 | Cell 2-2 | Cell 3-2
```
can be used to create a basic table:

<figure>
  <img
    style="border-radius:2px;box-shadow:0 4px 12px rgba(0,0,0,0.15), 0 0 0 1px rgba(0, 0, 0, 0.1);margin-left:27px;margin-bottom:40px;max-width: ${width}"
    src="/cells/cell-modes/text/basicColumn.png" alt="An open cell, in the code section there is code for making a three-columned table, each with two table cells. In the presentation section there is the resulting three-columned table with two table cells each."
  />
  <figcaption>An example of a basic table in a Markdown text cell.</figcaption>
</figure>

### Table with text alignment options

Markdown code in this format:

```
Column 1 | Column 2 | Column 3
   :--   |    :-:   |    --:  
Cell 1-1 | Cell 2-1 | Cell 3-1
Cell 1-2 | Cell 2-2 | Cell 3-2
```

renders a text-aligned table in a text cell:

<figure>
  <img
    style="border-radius:2px;box-shadow:0 4px 12px rgba(0,0,0,0.15), 0 0 0 1px rgba(0, 0, 0, 0.1);margin-left:27px;margin-bottom:40px;max-width: ${width}"
    src="/cells/cell-modes/text/textAlignedTable.png" alt="An open cell, in the code section there is code for making a three-columned table that is text-aligned, each with two table cells. In the presentation section there is the resulting three-columned text-aligned table with two table cells each."
  />
  <figcaption>An example of a text-aligned table in a Markdown text cell.</figcaption>
</figure>

### Tables as explanatory text

The following Markdown code in this format:

```
|Note: Tables aren't just for tables|
| --- |--- | --- |
|For example, by having a header and one cell we can write a side note with a title and some explanatory text.|
```

renders a helpful way to add a side-note-like visual aide to your text:

<figure>
  <img
    style="border-radius:2px;box-shadow:0 4px 12px rgba(0,0,0,0.15), 0 0 0 1px rgba(0, 0, 0, 0.1);margin-left:27px;margin-bottom:40px;max-width: ${width}"
    src="/cells/cell-modes/text/explanatoryNote.png" alt="An open cell, in the code section of the cell there is code for making a normal table but being used to make a side note with a bolded title followed by a horizontal line followed by some unbolded explanatory text. The first line of the table code reading 'Note: Tables aren't just for tables' followed by the code for making a horizontal line on the next line of table code, finally followed by the sentence: 'For example, by having a header and one cell we can write a side note with a title and some explanatory text.'"
  />
  <figcaption>An example of a text-aligned table in a Markdown text cell.</figcaption>
</figure>

## Anchor links & cell names

You can link directly to a section of the notebook with an auto-generated anchor link using the "Copy Link" action in the cell menu. This will copy a special URL to the clipboard like: 

```
https://observablehq.com/@observablehq/markdown-quick-reference#cell-147

```

<figure>
  <img
    style="border-radius:2px;box-shadow:0 4px 12px rgba(0,0,0,0.15), 0 0 0 1px rgba(0, 0, 0, 0.1);margin-left:27px;margin-bottom:40px;max-width: ${width}"
    src="/cells/cell-modes/text/linkCell.png" alt="A notebook titled 'Linking to a cell' with the first cell's cell menu opened showing a set of dropdown options. The fourth option down 'Copy Link' is highlighted light blue with a tooltip that says 'Copy a link to this cell'."
  />
  <figcaption>Using the cell menu to select the "Copy Link" option.</figcaption>
</figure>