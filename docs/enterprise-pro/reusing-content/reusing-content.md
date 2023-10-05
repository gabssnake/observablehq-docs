# Enterprise & Pro Team Onboarding: Reusing content

<figure>
  <img
    style="margin:20px auto;max-width: 90%"
    src="/enterprise-pro/reusing-content/code-reuse@1.png" alt="Illustration of a grasping an item from a notebook"
  />
</figure>

Reusing and repurposing content — whether it's code, charts, or report templates — can improve efficiency, project organization, and cohesion across team resources. Here, we share tips for finding relevant resources and examples on Observable, then highlight several ways that you can use existing content and create content that can be easily reused by your team.

## The Observable Community

The Observable community is home to thousands of visualization and data analysis examples. Our [explore](https://observablehq.com/explore) page is your portal to our top content, rated by community likes and curated by the Observable team. Examples you find can be reused for your own analysis, either by importing the code itself or forking the notebook to your own workspace. 

When visualization are written as functions, it's easy to reuse for other datasets. The [D3 Charts](https://observablehq.com/@d3/gallery) collection features dozens of visualizations written as functions for the exact purpose of being reused.

<video
    style="border-radius:5px;box-shadow:0 4px 12px rgba(0,0,0,0.15), 0 0 0 1px rgba(0, 0, 0, 0.1);margin-left:27px;margin-bottom:40px;max-width: 80%"
    src="/enterprise-pro/reusing-content/reuseViz.mov" alt="Screen capture of a user working in Observable, importing a chart function from the D3 collection then replacing the example data with their own to create their own chart."
    autoplay loop controls = "false">
</video>

What you saw there was an example of an [import](https://observablehq.com/@observablehq/import?collection=@observablehq/notebook-fundamentals). Observable lets you quickly reuse content by importing named cells from other notebooks. Most often you'll import code and functions for reuse, but imports are versatile — you can also import charts, inputs, tables, or text from any named cell.  This works with community notebooks, as well as private notebooks within a team. You must have access to a notebook to be able import its cells.

<video
    style="border-radius:5px;box-shadow:0 4px 12px rgba(0,0,0,0.15), 0 0 0 1px rgba(0, 0, 0, 0.1);margin-left:27px;margin-bottom:40px;max-width: 80%"
    src="/enterprise-pro/reusing-content/import.mov" alt="Screen capture of an Observable user writing a function, choosing Copy Import from the cell menu, then importing and using the function in another notebook."
    autoplay loop controls = "false">
</video>

Many community notebooks share visualization functions (similar to functions for D3 Charts) that are intended for reuse. It is important to check for any [licensing information](https://observablehq.com/@observablehq/licenses) atop the notebook you're importing from to see if the author has specified any restrictions on how their work is reused. 

With content from thousands of community-contributed Observable notebooks available for reuse, how can you focus your search to find what you need? Check out our guide for [searching on Observable](https://observablehq.com/@observablehq/searching-on-observable) and visit a couple of our favorite links:
- Community examples
  - [Trending notebooks](https://observablehq.com/trending)
  - [Most liked (all time) notebooks](https://observablehq.com/top)
- Visualization examples from the Observable team
  - [Plot examples](https://observablehq.com/collection/@observablehq/plot-examples)
  - [D3 charts](https://observablehq.com/collection/@d3/charts)
  - [Maps](https://observablehq.com/collection/@observablehq/maps)

## Templates

In addition to forking and importing from notebooks, the Observable team has published dozens of [notebook templates](https://observablehq.com/templates) to help you get started with common analyses and visualizations. When you create a new notebook, you'll see these templates as boilerplate options. Selecting a template will automatically fork a copy of the template notebook to your space.

<video
    style="border-radius:5px;box-shadow:0 4px 12px rgba(0,0,0,0.15), 0 0 0 1px rgba(0, 0, 0, 0.1);margin-left:27px;margin-bottom:40px;max-width: 80%"
    src="/enterprise-pro/reusing-content/templates.mov" alt="Screen capture of an Observable user choosing an existing template when creating a new notebook."
    autoplay loop controls = "false">
</video>

## Building your own component library

With imports, teams can create their own component libraries. Notebooks in your component library might contain frequently used functions for data analysis or visualization, branded color palettes, or even datasets that can be quickly imported for reuse.  

[Custom templates](https://observablehq.com/@observablehq/custom-templates) are another way to build reusable code for your team. Creating a new template requires only a few steps:

1. In your account, create a new collection named **Templates** (learn more about [How to create a new collection](https://observablehq.com/@observablehq/collections?collection=@observablehq/editing-publishing-collaborating)).
2. Create the new custom template, either from scratch or by [forking](https://observablehq.com/@observablehq/fork-share-merge) one of the pre-defined [Observable Templates](https://observablehq.com/templates).
3. Add the new custom template to your **Templates** collection by clicking **Add to collection** from the notebook menu (<Icon name="threeHorizDots" />). 

Now that you've learned some strategies for collaborating and reusing content within your team, continue to the next section to learn some essentials for [team and project management](/enterprise-pro/team-project-management/team-project-management) when working in Observable.

<figure>
  <img
    style="margin-left:20px;width:184px"
    src="/enterprise-pro/reusing-content/small-project-management.png"
    alt="illustration of gears turning"
  />
</figure>

