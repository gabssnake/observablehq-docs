# Minimap

The **Minimap** lists the cells in a notebook and their dependencies. Click a cell to jump to it; the Minimap then shows connections to cells it depends on, and cells that depend on it. Following the line from left to right, you see the order in which data flows through your notebook, and [the order in which cells will run](https://observablehq.com/@observablehq/how-observable-runs). 

To open the Minimap, click <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style="display: inline !important;"><g clip-path="url(#clip0_653_18)"><path fillRule="evenodd" clipRule="evenodd" d="M3 1.75C2.30964 1.75 1.75 2.30964 1.75 3C1.75 3.69036 2.30964 4.25 3 4.25C3.69036 4.25 4.25 3.69036 4.25 3C4.25 2.30964 3.69036 1.75 3 1.75ZM0.25 3C0.25 1.48122 1.48122 0.25 3 0.25C4.51878 0.25 5.75 1.48122 5.75 3C5.75 4.51878 4.51878 5.75 3 5.75C1.48122 5.75 0.25 4.51878 0.25 3Z" fill="currentColor"/><path fillRule="evenodd" clipRule="evenodd" d="M13 11.75C12.3096 11.75 11.75 12.3096 11.75 13C11.75 13.6904 12.3096 14.25 13 14.25C13.6904 14.25 14.25 13.6904 14.25 13C14.25 12.3096 13.6904 11.75 13 11.75ZM10.25 13C10.25 11.4812 11.4812 10.25 13 10.25C14.5188 10.25 15.75 11.4812 15.75 13C15.75 14.5188 14.5188 15.75 13 15.75C11.4812 15.75 10.25 14.5188 10.25 13Z" fill="currentColor"/><path fillRule="evenodd" clipRule="evenodd" d="M10 12C9.44771 12 9 11.5523 9 11V4.99997C9 3.34312 7.65685 1.99997 6 1.99997H5V3.99997H6C6.55228 3.99997 7 4.44769 7 4.99997V11C7 12.6569 8.34315 14 10 14H11V12H10Z" fill="currentColor"/></g><defs><clipPath id="clip0_653_18"><rect width="16" height="16" fill="white"/></clipPath></defs></svg> in the right sidebar, or _View → Show minimap_ in the notebook menu.

  <video
    style="border-radius:2px;box-shadow:0 4px 12px rgba(0,0,0,0.15), 0 0 0 1px rgba(0, 0, 0, 0.1);margin-left:27px;margin-bottom:40px;max-width:80%;"
    src="/debugging/assets/minimap-vid.mp4" alt="Video clip showing how to open the minimap, then explore cell organization and dependencies."
    autoplay loop controls muted = "false" >
    </video>

As you focus on different notebook cells by clicking within the gray code editor, the blue connection “wires” change in the Minimap. For example, below you can see relationships between cells _a_, _b_, and _c_ by focusing on the different cells.

  <video
    style="border-radius:2px;box-shadow:0 4px 12px rgba(0,0,0,0.15), 0 0 0 1px rgba(0, 0, 0, 0.1);margin-left:27px;margin-bottom:40px;max-width:80%;"
    src="/debugging/assets/minimap-selected.mp4" alt="Video clip showing dependency paths between focused cells in the Minimap."
    autoplay loop controls muted = "false" >
    </video>

In the video above, we see that the value of _a_ goes into _b_, which goes into _c_. That's because _c_ refers to _b_, and _b_ refers to _a_.

When _c_ is focused, you don't see a wire to _a_, but _a_'s circle moves to the left. We call _a_ a transitive dependency of _c_: _c_ depends on something that depends on _a_. The Minimap only shows wires for one level of connections at a time.

The connections don't change if you move the cells up or down; _b_ will always run after _a_ (and appear to the right of it), even if it comes higher in the notebook.

You dont have to understand everything going on in the Minimap to use it! There's a lot to see. 

### Connection types

The Minimap reveals information about cell connections:

| Symbol | Meaning |
|------|---------|
|<svg viewBox="-8 -8 16 16" width="16"><circle r="3"></circle><path d="M 0 0 H -6" stroke-width="2" stroke="black"></path></svg> | This cell refers to something |
|<svg viewBox="-8 -8 16 16" width="16"><circle r="3"></circle><path d="M 0 0 H 6" stroke-width="2" stroke="black"></path></svg> | This cell is referenced by something | 
|<svg viewBox="-8 -8 16 16" width="16"><circle r="3"></circle><path d="M 0 0 H -6" stroke-width="2" stroke="black"></path><path d="M 0 0 H 6" stroke-width="2" stroke="black"></path></svg> | This cell refers to something <i>and</i> is referenced by something |
|<svg viewBox="-8 -8 16 16" width="16"><circle r="3"></circle></svg> | This cell isn't connected to anything. If you delete it, nothing else will break. | 
|<svg viewBox="-8 -8 16 16" width="16"><circle r="1.5" fill="#c4c4c4"></circle></svg> | This cell is unconnected and unnamed, so it <i>can't</i> be referenced. Often Markdown cells. |  
|<svg viewBox="-8 -8 16 16" width="16"><circle r="3" fill="#e14747"></circle></svg> | This cell has an error. |

### Relationships between cells

When one cell is focused, the Minimap draws connections to other cells in blue:

| Path | Interpretation |
|------|----------------|
|<svg viewBox="-18 -8 36 32" width="36" style="color: #3b5fc0"><circle r="3" fill="currentColor"></circle><path d="M 0 0 H 7 V 21 H 14" fill="none" stroke-width="2" stroke="currentColor"></path><circle r="3" cx="14" cy="21" fill="currentColor"></circle></svg> | The first cell is referenced by the second. The second will re-run when the first does, and break if the first is deleted. |
|<svg viewBox="-18 -8 36 32" width="36" style="color: #3b5fc0"><circle r="3" fill="currentColor"></circle><path d="M 0 0 H -7 V 21 H -14" fill="none" stroke-width="2" stroke="currentColor"></path><circle r="3" cx="-14" cy="21" fill="currentColor"></circle></svg> | The first cell refers to the second. The first will re-run when the second does, and break if the second is deleted. |
|<svg viewBox="-18 -8 36 56" width="36" style="color: #3b5fc0"><circle r="3" fill="currentColor"></circle><path d="M 0 0 H 7 V 21 H 14" fill="none" stroke-width="2" stroke="currentColor"></path><circle r="3" cx="14" cy="21" fill="currentColor"></circle><circle r="3" cy="42" fill="#c4c4c4"></circle></svg> | The gray cell is independent of the blue cells above it. |
|<svg viewBox="-18 -8 36 56" width="36" style="color: #3b5fc0; overflow: visible;"><circle r="3" fill="currentColor"></circle><path d="M 0 0 H 7 V 21 H 20" fill="none" stroke-width="2" stroke="currentColor"></path><circle r="3" cx="14" cy="21" fill="currentColor"></circle><path d="M 14 42 H 8" fill="none" stroke-width="2" stroke="#c4c4c4"></path><circle r="3" cx="14" cy="42" fill="#c4c4c4"></circle></svg> | The gray cell depends on the first cell, but only indirectly. The second cell has a whisker peeking out to the right; click it to trace the transitive dependency. |
|<svg viewBox="-18 -8 36 56" width="36" style="color: #3b5fc0; overflow: visible;"><circle r="3" cx="-14" fill="currentColor"></circle><path d="M -20 0 H -7 V 21 H 0" fill="none" stroke-width="2" stroke="currentColor"></path><circle r="3" cy="21" fill="currentColor"></circle><path d="M -14 42 H -8" fill="none" stroke-width="2" stroke="#c4c4c4"></path><circle r="3" cx="-14" cy="42" fill="#c4c4c4"></circle></svg> | The gray cell is used by the second cell, but only indirectly. The first cell has a whisker peeking out to the left; click it to trace the transitive dependency. |
|<svg viewBox="-18 -8 36 32" width="36" style="color: #e14747"><circle r="3" fill="currentColor"></circle><path d="M 0 0 H 7 V 21 H -7 V 0 Z" fill="none" stroke-width="2" stroke="currentColor"></path><circle r="3" cy="21" fill="currentColor"></circle></svg> | Each cell refers to the other, resulting in a circular definition error. |

## Using keyboard shortcuts in the Minimap

The Minimap has no special keyboard shortcuts of its own, but works well with the [existing shortcuts](https://observablehq.com/@observablehq/keyboard-shortcuts?collection=@observablehq/notebook-fundamentals) for moving among cells, including:

<figure>
  <img
    class="screenshot w-80"
    src="/debugging/assets/minimap-shortcuts.png" alt="Useful shortcuts that work in the Minimap to move or select cells. The shortcuts are the same as those listed in our Keyboard Shortcuts documentation: https://observablehq.com/@observablehq/keyboard-shortcuts?collection=@observablehq/notebook-fundamentals." />
  <figcaption>Useful keyboard shortcuts for navigating between and selecting cells in the Minimap.</figcaption>
</figure>

::: info NOTE
The Minimap is not omniscient: it only knows about static references to other cells. It is possible for one cell to affect the output of another (that doesn’t refer to it) by using side effects, like mutation. In those cases, the Minimap does not know that the cell depends on side effects from other cells. For this and other reasons, [we discourage mutation](https://observablehq.com/@tmcw/observable-anti-patterns-and-code-smells#mutation).
:::

