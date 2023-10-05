# Notebook history

Observable keeps a history of all edits made to a notebook, allowing you to undo (and redo) changes whenever needed. Notebook history lets authors edit fearlessly with the knowledge that they can always go back to a previous version of their notebook. It also allows teams to better understand how their notebooks have changed over time, and who edited them.

To access a notebook's history, click the <Icon name="clock" /> in the right sidebar. The History pane will open to show all history states visible to you.

## Comparing versions

To see explore changes between a selected version and the latest one, click the <svg style="display: inline !important;" width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor"><circle cx="4" cy="3" r="2" stroke-width="1.5"></circle><circle cx="12" cy="13" r="2" stroke-width="1.5"></circle><path d="M4 5V11C4 12.1046 4.89543 13 6 13H7" stroke-width="2"></path><path d="M12 11V5C12 3.89543 11.1046 3 10 3H9" stroke-width="2"></path></svg> button that appears when you hover over a history state. Any cell that is different between the two versions will show a comparison view.

<video
    style="border-radius:2px;box-shadow:0 4px 12px rgba(0,0,0,0.15), 0 0 0 1px rgba(0, 0, 0, 0.1);margin-left:27px;margin-bottom:40px;max-width: ${width}"
    src="/saving-and-history/notebook-history/history-compare.mp4" alt="Video showing a user opening the History pane in a notebook, then selecting the Compare option to see how notebook versions differ."
    autoplay loop controls = "false">
    <figcaption>Compare differing cells between notebook versions in the History pane.</figcaption>
    </video>

## Reverting to an earlier state (undo)

To switch to an earlier version, click on a row in the History pane. The notebook switches to this version instantly. You can quickly switch between versions to see how the notebook changed over time.

<video
    style="border-radius:2px;box-shadow:0 4px 12px rgba(0,0,0,0.15), 0 0 0 1px rgba(0, 0, 0, 0.1);margin-left:27px;margin-bottom:40px;max-width: ${width}"
    src="/saving-and-history/notebook-history/history-revert.mp4" alt="Screen recording showing a user selecting a previous notebook version from the history."
    autoplay loop controls = "false">
    <figcaption>Compare differing cells between notebook versions in the History pane.</figcaption>
    </video>

If you have edit access to a notebook, you will additionally see a "Restore version" button in the toolbar atop the notebook. Click the button to restore the notebook to an older version.

<figure>
  <img
    style="border-radius:2px;box-shadow:0 4px 12px rgba(0,0,0,0.15), 0 0 0 1px rgba(0, 0, 0, 0.1);margin-left:27px;margin-bottom:40px;max-width: 50%"
    src="/saving-and-history/notebook-history/restore-version.png" alt="Blue button with option to restore a previous version of an Observable notebook."
  />
  <figcaption>Click the "Restore version" button to revert a notebook to a previous version.</figcaption>
</figure>

## Collaborative histories

History is a great tool for teams working collaboratively in notebooks because it shows everything that has happened in a notebook up to the current moment, including who made the edits. Hover over the small user avatars to show details about the person who made the edit.

<figure>
  <img
    style="border-radius:2px;box-shadow:0 4px 12px rgba(0,0,0,0.15), 0 0 0 1px rgba(0, 0, 0, 0.1);margin-left:27px;margin-bottom:40px;max-width: 60%"
    src="/saving-and-history/notebook-history/history-user.png" alt="The History pane reveals which user made which edits in a notebook. Screenshot shows that hovering over a user's avatar will reveal more details about that editor."
  />
  <figcaption>The History pane reveals which user made edits in each version.</figcaption>
</figure>

## Forking from history

Notebook history also allows you to explore 'what-ifs' by choosing a point in history to explore from. When using [the fork function](https://observablehq.com/@observablehq/fork-suggest-merge), the notebook is forked at the version you are currently viewing. Usually this is the latest version, but if you're viewing an older version, the notebook gets forked from there.

You can work in a fork just like you would work in any other notebook. If you prefer the content in your fork to the original notebook version, you can merge it back in.

## Who can see history?

Only you and members of your team can see the history of private notebooks, which you created either in your personal or a [team workspace](https://observablehq.com/teams).

The history of public notebooks is visible to all visitors. When you publish a private notebook, its history becomes visible to anybody from the point where you published it (but not before). Note the first version number visible in [the history of this notebook](https://observablehq.com/@observablehq/learning-observable-observable-overview), v541, which is the first version after it was made public.

<figure>
  <img
    style="border-radius:2px;box-shadow:0 4px 12px rgba(0,0,0,0.15), 0 0 0 1px rgba(0, 0, 0, 0.1);margin-left:27px;margin-bottom:40px;max-width: 60%"
    src="/saving-and-history/notebook-history/public-history.png" alt="The History pane reveals the first version after a notebook was made public."
  />
  <figcaption>Notebook history reveals the first number visible after the notebook was made public (for the notebook above, that is Version 541).</figcaption>
</figure>

