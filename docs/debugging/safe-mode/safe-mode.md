# Safe mode

Safe mode is a code-only view of your notebook that you use to fix issues that prevent the notebook from running properly. An example of such an issue would be an infinite loop. If you have a `while` loop without a `yield` statement, it's possible to construct the loop so that it infinitely repeats, never allowing anything else to happen. Safe mode is designed to let you fix that.

When you enter safe mode, a banner appears at the top of your notebook, making it clear that you are in safe mode:

<figure>
  <img
    style="border-radius:2px;box-shadow:0 4px 12px rgba(0,0,0,0.15), 0 0 0 1px rgba(0, 0, 0, 0.1);margin-left:2px;margin-bottom:40px;max-width: ${width}"
    src="/debugging/safe-mode/safeModeBanner.png" alt="Gold banner appearing atop a notebook in Safe mode, reading 'Safe mode enabled. Use this code-only view to fix issues that might crash or hang the normal editor'."
  />
  <figcaption>Use <b>safe mode</b> to fix problems in your notebook's code.</figcaption>
</figure>

Also, all of the cells in your notebook display their code, rather than the results of their code. No cells are executed, allowing you to edit the code and address any problem.

Here is a notebook in safe mode. Notice how all cells are showing code:

<figure>
  <img
    style="border-radius:2px;box-shadow:0 4px 12px rgba(0,0,0,0.15), 0 0 0 1px rgba(0, 0, 0, 0.1);margin-left:2px;margin-bottom:40px;max-width: ${width}"
    src="/debugging/safe-mode/safeModeNotebookAfter.png" alt="Screen shot of a notebook in safe mode, with 'safe mode' banner up top, and each cell's code revealed (without outputs)."
  />
  <figcaption>Notebook in safe mode.</figcaption>
</figure>

Here is the same notebook before safe mode was enabled:

<figure>
  <img
    style="border-radius:2px;box-shadow:0 4px 12px rgba(0,0,0,0.15), 0 0 0 1px rgba(0, 0, 0, 0.1);margin-left:2px;margin-bottom:40px;max-width: ${width}"
    src="/debugging/safe-mode/safeModeNotebookBefore.png" alt="Screen shot of a notebook not in safe mode, with cells executed and outputs shown."
  />
  <figcaption>Original appearance of notebook.</figcaption>
</figure>


## Enabling safe mode

To enable safe mode, choose **View > Enable safe mode**:

<figure>
  <img
    style="border-radius:2px;box-shadow:0 4px 12px rgba(0,0,0,0.15), 0 0 0 1px rgba(0, 0, 0, 0.1);margin-left:2px;margin-bottom:40px;max-width: 50%"
    src="/debugging/safe-mode/safeModeMenu.png" alt="Screen shot of a notebook menu, where a user navigates to Safe mode in the View options."
  />
  <figcaption>Enable safe mode from the View menu.</figcaption>
</figure>

Alternatively, you can append `/safe` to the URL for your notebook to enter and work in safe mode: 

https://observablehq.com/@observablehq/safe-mode/safe