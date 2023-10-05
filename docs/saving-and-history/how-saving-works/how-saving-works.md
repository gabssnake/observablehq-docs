# How saving works

Here's a quick explanation of how Observable saves your work.

## Editing your own notebooks

Changes you make to a notebook are saved automatically as soon as you do any of the following:
- Clicking the Play button (<Icon name="playButton" />)
- Typing "Shift-Enter"
- Focusing a different cell
- Opening your notebook in another window (this is useful with [safe mode](https://observablehq.com/@observablehq/safe-mode?collection=@observablehq/visualizing-debugging-notebooks))

## Editing other people's notebooks

You can edit other people's notebooks, as well as your own. However, your edits to other people's notebooks are *not* automatically saved if you do not have edit access. If you edit someone else's notebook as a viewer, you'll see a message indicating that your edits are temporary:

<figure>
  <img
    style="border-radius:2px;box-shadow:0 4px 12px rgba(0,0,0,0.15), 0 0 0 1px rgba(0, 0, 0, 0.1);margin-left:27px;margin-bottom:40px;max-width: ${width}"
    src="/saving-and-history/how-saving-works/makingTempEdits.png" alt="Alert banner informing users that the are 'Making temporary changes' with an option to Fork the notebook if they want to make a saved copy."
  />
  <figcaption>Click <b>Fork</b> to make your own copy of the notebook and save your changes to someone else's notebook.</figcaption>
</figure>

Clicking the Fork button (<svg style="display: inline !important;" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" width="16" height="16" class="w1 h1 mr1-ns"><g><circle cx="5" cy="12.5" r="1.5"></circle><circle cx="5" cy="3.5" r="1.5"></circle><circle cx="11" cy="3.5" r="1.5"></circle><path d="M5 10.5V5"></path><path d="M5 8h3.995C10.332 8 11 7 11 5"></path></g></svg>) will save a copy of the notebook with your changes. You can fork notebooks as often as you like to save multiple variations.

This design lets you treat other notebooks—whether created by you or someone else—as scratchpads for experimentation, or to tinker with their code to see what it does, while ensuring that everyone sees the author's notebook exactly as it was published on reload. If you like the results of your experimentation, save your fork!

## Connectivity issues

If there is a connectivity problem when editing a draft, a message at the top of the window will indicate that you have unsaved changes.

<figure>
  <img
    style="border-radius:2px;box-shadow:0 4px 12px rgba(0,0,0,0.15), 0 0 0 1px rgba(0, 0, 0, 0.1);margin-left:27px;margin-bottom:40px;max-width: 70%"
    src="/saving-and-history/how-saving-works/unableSaveChanges.png" alt="Warning message alerting a user that Observable is 'Unable to save changes' for example when experiencing an internet connectivity issue."
  />
  <figcaption>This message appears if Observable is unable to save changes.</figcaption>
</figure>

Observable will try to reconnect and save your changes. If we're able to save, the message will disappear. If not, don't panic: your changes are stashed in local storage. We'll try again to save them the next time you visit your notebook. However, take care: stashed changes in local storage are *not* saved if you make subsequent changes to your draft in another browser. We don't want to overwrite your new changes.

If you're seeing this error more often than expected, please check for any browser extensions you may have installed. Observable requires using the [Page Visibility API](https://developer.mozilla.org/en-US/docs/Web/API/Page_Visibility_API) to manage connectivity and some privacy-minded extensions disable it.

## Other errors

In rare cases, such as if you clear your cookies while you have Observable open, you might also see an error at the top of the page. 

<figure>
  <img
    style="border-radius:2px;box-shadow:0 4px 12px rgba(0,0,0,0.15), 0 0 0 1px rgba(0, 0, 0, 0.1);margin-left:27px;margin-bottom:40px;max-width: 70%"
    src="/saving-and-history/how-saving-works/unexpectedError.png" alt="Warning message reading 'Oops, an unexpected error message occured."
  />
  <figcaption>In rare cases Observable displays this "unexpected error" message.</figcaption>
</figure>

If this happens, you must reload the page; any applied changes stashed in local storage will be saved on reload.

## Older published notebooks

If you have older notebooks that are showing the **Published** label, you will need to make your notebooks **Public** in order to share changes. See [Public and published notebooks](https://observablehq.com/@observablehq/public-and-published-notebooks?collection=@observablehq/editing-publishing-collaborating) for more information.

## Paused notebooks and saving

[Paused notebooks](https://observablehq.com/@observablehq/pause-live-edits-in-public-notebooks?collection=@observablehq/editing-publishing-collaborating), which are edited out of the view of the public, are also saved automatically. See [Pause live edits in public notebooks](https://observablehq.com/@observablehq/pause-live-edits-in-public-notebooks?collection=@observablehq/editing-publishing-collaborating) for more information.