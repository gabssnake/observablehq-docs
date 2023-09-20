# Pause live edits in public notebooks

  <video
    style="border-radius:2px;box-shadow:0 4px 12px rgba(0,0,0,0.15), 0 0 0 1px rgba(0, 0, 0, 0.1);margin-left:27px;margin-bottom:40px;max-width: ${width}"
    src="/collaborating/sharing-work/pause-live-edits/pause-live-edits.mp4" alt="Video showing a user pausing live edits so that they can make changes without viewers seeing their in-progress work."
    autoplay loop controls = "false">
  </video>

You can pause a **public notebook** at the current notebook version, which allows you to edit your notebook without the public seeing your edits in real-time.

Normally, public notebooks default to live editing (this is explained more fully in [Team and Individual Workspaces](https://observablehq.com/@observablehq/team-and-individual-workspaces#freeIndividual)), which means that changes are visible to viewers immediately. But if you *pause live editing*, you can make changes without showing the changes to the public until you are ready.

- To pause a notebook, click the menu button and select **Pause live editing**.
- To resume a notebook, click the menu button and select **Resume live editing**.

<figure>
  <img
    style="margin-left:27px;margin-bottom:40px;max-width: 80%"
    src="/collaborating/sharing-work/pause-live-edits/pause-resume-live-edits.png" alt="Side-by-side screenshots showing the different options that users will see whether in a live notebook (where a Pause live editing option is visible) or a paused notebook (where a Resume live editing option is visible)."
  />
</figure>

## What will users see?

Once paused, the notebook will be presented (by default) in two ways for two groups:

- **Members** will see the **latest** version of the notebook, including any live edits.  
  A member is someone who has an association with the notebook: the individual owner (often the creator), someone you’ve shared your notebook with, a member of the team that owns the notebook, etc. 
- **Non-members** will see the **paused** version of the notebook.  
  A non-member is the general public. Non-members may include both signed&#8209;in and signed&#8209;out (anonymous) users.

## Paused notebooks are still public

While the groups above will see a notebook as described, each will be able to see any version of the notebook since the notebook is still public. Changing the notebook to private will remove the paused version. 

You can still access other versions of the notebook in the following ways.

- Navigate versions through the history pane:

<figure>
  <img
    style="margin-left:27px;margin-bottom:40px;max-width: 80%"
    src="/collaborating/sharing-work/pause-live-edits/history.png" alt="Screen shot of the History pane in an Observable notebook, revealing different stored versions."
  />
</figure>

- Click the **Paused/Latest** element in the notebook header and choosing to view the paused/latest version of the notebook by clicking the link presented in the popover:

<figure>
  <img
    style="margin-left:27px;margin-bottom:40px;max-width: ${width}"
    src="/collaborating/sharing-work/pause-live-edits/view-live-paused.png" alt="Side-by-side screen shots of notebook options revealing the 'Paused' indicator when a notebook is paused, or a 'Latest' indicator when viewing the latest version."
  />
</figure>

- Add the version aliases `@latest` or `@paused` to the notebook URL:
  - `https://observablehq.com/@observablehq/pause-live-edits-in-public-notebooks@latest`
  - `https://observablehq.com/@observablehq/pause-live-edits-in-public-notebooks@paused`
  
  If these version aliases are used with a notebook that hasn't been paused, the latest version of the notebook will be shown.

## How are edits handled in a paused notebook?

Once a notebook is paused, any further edits to the notebook will continue to be saved. If edits have been made subsequent to the paused version, an editor will be presented with a **Republish** button as a promoted action. Clicking this button will bring the paused version up to the current notebook version, while continuing to keep the notebook paused.

<figure>
  <img
    style="border-radius:2px;box-shadow:0 4px 12px rgba(0,0,0,0.15), 0 0 0 1px rgba(0, 0, 0, 0.1); margin-left:27px;margin-bottom:40px;max-width: 70%"
    src="/collaborating/sharing-work/pause-live-edits/republish-action.png" alt="Side-by-side screen shots of notebook options revealing the 'Paused' indicator when a notebook is paused, or a 'Latest' indicator when viewing the latest version."
  />
</figure>

If a non-member (or a member looking at the paused version) tries to edit the notebook, the user will be placed into [Tinker mode](https://observablehq.com/@observablehq/tinker-mode).

## How is search handled?

Users can find the same versions of a notebook that they would see by visiting the notebook. A notebook member will find the latest version of a notebook in search. Non-members will see the paused version in search. Although both versions are publicly visible by visiting the notebook, only the default version (latest or paused) will be visible in search.

## How will imports be handled?

Pause live edits follows our current model for access privileges. As such, the following statements describe what version of a paused notebook a user will import by default (without using `@latest` or `@paused` in the import statement):

- If anyone imports from a paused notebook into a public notebook, they will receive the paused version.
- If a member imports from a paused notebook into a private notebook, they will receive the latest version.
- If a member imports from a paused notebook into a private notebook and shares the private notebook with any other user, the member and the user will receive the paused version. _This only applies to individual notebooks because team notebooks can't be shared outside of the team._

## Workflow with pause live edits

Let's use a branch diagram to walk through what happens when you use the pause live edits feature on a public notebook. There's really only one notebook and you see it at different points (depending on whether you're a member or non-member), but a branch diagram is a helpful way to show what the different groups see.

In versions 1 and 2, you've added some content to a notebook and it looks ready for everyone to view so you send it to some colleagues. At this point, everyone sees the same version of the notebook.

<figure>
  <img
    style="margin-left:27px;margin-bottom:40px;max-width: ${width}"
    src="/collaborating/sharing-work/pause-live-edits/pause-workflow-1.png" alt="Schematic showing the same public notebook visable to all viewers in the same state (one 'branch')."
  />
</figure>

After some thought, you decide that you'd like to add a bit more content. You're worried that you might break some cells in the process, so you **pause live editing** at v2. At this point we split the public into members and non-members, but both groups still see the same version of the notebook.

<figure>
  <img
    style="margin-left:27px;margin-bottom:40px;max-width: ${width}"
    src="/collaborating/sharing-work/pause-live-edits/pause-workflow-2.png" alt="Schematic showing notebook visibility. Upon pausing a v2, a new 'branch' paused at version 2 is visible to non-members."
  />
</figure>

In versions 3 through 5 you add more content. You take a minute to consider your changes. At this point, non-members are seeing the notebook at version 2 and members are seeing the notebook at version 5.

<figure>
  <img
    style="margin-left:27px;margin-bottom:40px;max-width: ${width}"
    src="/collaborating/sharing-work/pause-live-edits/pause-workflow-3.png" alt="Schematic showing notebook visibility with pausing, where members can see changes in all versions, while non-members can still only see the paused v2."
  />
</figure>

You're satisfied with your changes so you **Republish** your changes, which updates the paused version to v5. At this point, members and non-members will see the same version of the notebook again.

<figure>
  <img
    style="margin-left:27px;margin-bottom:40px;max-width: ${width}"
    src="/collaborating/sharing-work/pause-live-edits/pause-workflow-4.png" alt="Schematic showing notebook visibility upon republishing, where members and non-members again see the same notebook version."
  />
</figure>

You let your colleagues know that you've updated the notebook and they provide some minor feedback. You make a final update in version 6 based on that feedback.

<figure>
  <img
    style="margin-left:27px;margin-bottom:40px;max-width: ${width}"
    src="/collaborating/sharing-work/pause-live-edits/pause-workflow-5.png" alt="Schematic showing notebook visibility, where a member has again made changes invisible to non-members."
  />
</figure>

Now that the notebook is perfect, you **Resume live editing**. The notebook is back to a public view, with no members or non-members.

<figure>
  <img
    style="margin-left:27px;margin-bottom:40px;max-width: ${width}"
    src="/collaborating/sharing-work/pause-live-edits/pause-workflow-6.png" alt="Schematic showing notebook visibility after resuming live editing. Only a single 'branch' exists again - there are not separate members and non-members, and all see the same thing."
  />
</figure>

