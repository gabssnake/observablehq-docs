# Observable terminology

When getting started with Observable, you'll notice that "Observable" is used in different ways. You might be asking: _"What is Observable? Is that different from an Observable notebook? Observable Plot? What is Observable JavaScript?"_ 

This document aims to clarify how "Observable" is used when describing the company, platform, product, and how it works.

## Observable: the company and the platform

[Observable](https://observablehq.com/) is both the company name and the platform where folks in the Observable community work, learn, engage, and share. Home base for both is at [observablehq.com](https://observablehq.com/) (our twitter handle is also [@observablehq](https://twitter.com/observablehq)).

As a **company**, Observable's mission is to "Help everyone make sense of the world with data, together." Learn more about Observable's [approach, community, and team](https://observablehq.com/about).

As a **platform**, Observable is the place where data practitioners: 

- Compose, edit, collaborate on, and share Observable notebooks
- Find, explore, comment on, reuse, and amplify others' work 
- Learn through tutorials, videos, examples and documentation
- ...and more! 

## Observable notebooks

Observable notebooks are collaborative data canvases built for and powered by community. They are interactive, editable documents defined by code where data practitioners work with, analyze, collaborate around, and quickly share insights from data (learn more in our [Introduction to Notebooks](https://observablehq.com/@observablehq/introduction-to-notebooks)). 

In Observable notebooks, users can weave together text, code and outputs by working in different cell types (e.g. Markdown, Observable JavaScript, SQL, and HTML). Notebooks live on the web and are shared using a URL. There is not an Observable notebook file type (like .Rmd, .qmd, or .ipynb). Instead, either the web-based notebook _itself_ can be the shared or published product, or elements from notebooks can be downloaded, imported, or embedded for use in other places. Notebooks can also be downloaded as complete JavaScript modules, including all implicit dependences (e.g. Observable runtime) and explicit dependencies (e.g. imports).

Depending on the specific notebook purpose and design, you may also see folks describe their Observable notebooks as reports, dashboards, canvases, or something else. It's totally fine to use the term that you feel best represents the work you create in an Observable notebook.

## Observable JavaScript

When you write code in JavaScript cells in an Observable notebook, you're writing JavaScript code—with a few minor twists to allow for Observable's reactive data flow (described [below](https://observablehq.com/d/0aa4658cc5dc529f#cell-648)). Those twists are described in more detail in [Observable JavaScript](https://observablehq.com/@observablehq/observables-not-javascript). 

It can at times be useful to differentiate between Observable JavaScript and vanilla JavaScript, for example when communicating with folks familiar with vanilla JavaScript who may be surprised by the Observable flavor of JavaScript. 

In summary: it's correct to say you're writing JavaScript code when working in Observable. It is also okay to specify if you are working in JavaScript on Observable (e.g. "Observable JavaScript"), especially in situations where noting minor divergences from vanilla JavaScript is relevant.

## Observable Plot

[Observable Plot](https://observablehq.com/@observablehq/plot) is an open source JavaScript library for data visualization, built and maintained by Observable developers. Plot is part of Observable's standard library, which means it is available for use in Observable notebooks out-of-the-box.

That does not mean you are limited to using Observable Plot for data visualization in Observable notebooks. [D3](https://d3js.org/) is also included in the standard library, so is available by default in all notebooks. You can additionally access and use any existing JS data visualization library (like [Vega-Lite](https://vega.github.io/vega-lite/), [highcharts](https://www.highcharts.com/) and [chart.js](https://www.chartjs.org/)) in your Observable notebook with [require](https://observablehq.com/@observablehq/require). Or, reuse existing data visualization code from public Observable notebooks with [imports](https://observablehq.com/@observablehq/import). 

## Observable runtime

Observable's [open source runtime](https://github.com/observablehq/runtime) describes *how programs run* in Observable notebooks. It is what "lets you run Observable notebooks as truly reactive programs in any JavaScript environment." Notable characteristics of Observable's runtime include: 

1. Cells are executed [topologically (instead of chronologically)](https://observablehq.com/@observablehq/how-observable-runs). That means your code doesn't have to be organized linearly. Cells at the top of the notebook can depend on values created at the end of the notebook.
   
2. Your work "functions like a spreadsheet, where cells (like formulas) run automatically whenever their referenced values change." Change a variable value anywhere in a notebook, and all other values *depending* on that variable will be automatically reevaluated.

Observable runtime, rather than any particular aversion to vanilla JavaScript syntax, is why there are a few extra rules to writing JavaScript in Observable (described below).

## Observable standard library

The largest collection of JavaScript libraries is the [npm](https://www.npmjs.com/) registry. You can think of the npm registry like JavaScript's version of CRAN (for R users) or PyPI (for Python users). As of June 2022, there were over 1.3 million JavaScript libraries on npm, any of which you can access in an Observable notebook with [require](https://observablehq.com/@observablehq/require), which is analogous to importing / attaching an R or Py package. 

Some commonly used JavaScript libraries are included in Observable's [standard library](https://observablehq.com/@observablehq/stdlib?collection=@observablehq/libraries), which means their functions are available by default when working in Observable notebooks. Those include [D3](https://d3js.org/), [Observable Plot](https://observablehq.com/@observablehq/plot), [Arquero](https://uwdata.github.io/arquero/), and [Lodash](https://lodash.com/), to name a few. You can explore Observable's [open source standard library on GitHub](https://github.com/observablehq/stdlib).