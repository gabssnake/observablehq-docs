# Enterprise & Pro Team Onboarding: Collaboration and sharing

<figure>
  <img
    style="margin:20px auto;max-width: 90%"
    src="/enterprise-pro/collaboration-sharing/collaboration-essentials@1.png" alt="Illustration of hands writing in a notebook"
  />
</figure>

At Observable, we believe that collaboration is key to doing great work with data. That's why we support several ways to collaborate with others in notebooks, whether it's co-editing a visualization or adding comments to an analysis.

## Multiplayer editing
When working in an Enterprise or Pro team space, you can invite others to join and edit notebooks with you.

<video
    style="border-radius:5px;box-shadow:0 4px 12px rgba(0,0,0,0.15), 0 0 0 1px rgba(0, 0, 0, 0.1);margin-left:27px;margin-bottom:40px;max-width: 80%"
    src="/enterprise-pro/collaboration-sharing/collaboration.mov" alt="Screen capture of an Observable notebook showing a user clicking the Share button, then adding another user as an editor. The new editor's avatar now appears in the notebook and is seen making edits."
    autoplay loop controls = "false">
</video>

When another user from your team is in the same notebook you're working in, you'll see their avatar at the top of the screen. You can click on their avatar to automatically follow them around.

<video
    style="border-radius:5px;box-shadow:0 4px 12px rgba(0,0,0,0.15), 0 0 0 1px rgba(0, 0, 0, 0.1);margin-left:27px;margin-bottom:40px;max-width: 80%"
    src="/enterprise-pro/collaboration-sharing/collabFollow.mov" alt="Screen capture of an Observable notebook with two collaborators working in it. When the user clicks on their collaborator's avatar, they automatically find and follow their collaborator in the notebook, and a banner appears atop the browser reading: Following Dan Demonstrator (the collaborator's username)."
    autoplay loop controls = "false">
</video>

Whether working solo or with collaborators in a notebook, it is useful to have a record of changes made. The [History](https://observablehq.com/@observablehq/history) pane (accessed by clicking the clock icon in the right margin) shows what changes were made to your notebook. You also have the option to revert back to an earlier version by choosing to "Restore" a version that you select.

<video
    style="border-radius:5px;box-shadow:0 4px 12px rgba(0,0,0,0.15), 0 0 0 1px rgba(0, 0, 0, 0.1);margin-left:27px;margin-bottom:40px;max-width: 80%"
    src="/enterprise-pro/collaboration-sharing/history.mov" alt="Screen capture of an Observable notebook. The user selects the clock icon to open the History pane, selects an older veresion of the notebook, then chooses to Restore the notebook back to that version."
    autoplay loop controls = "false">
</video>

## Fork, suggest, merge

Another common way to collaborate within a team is to follow the ["Fork, Suggest, Merge"](https://observablehq.com/@observablehq/fork-suggest-merge) workflow. This is typically used when larger edits are made to a notebook, and the editor wants to make and test those changes in private before merging updates into the main notebook.

To merge updates from a fork into the main notebook, you can send suggestions (by choosing "Suggest" from the three-dot menu) to the notebook author with a brief note about your proposed changes. 

<video
    style="border-radius:5px;box-shadow:0 4px 12px rgba(0,0,0,0.15), 0 0 0 1px rgba(0, 0, 0, 0.1);margin-left:27px;margin-bottom:40px;max-width: 80%"
    src="/enterprise-pro/collaboration-sharing/forkSuggest.mov" alt="Screen capture of a user working in a Fork (copy) of an Observable Notebook. After making some edits, the user clicks the three dot menu atop the notebook and chooses Suggest, then adding a note to go along with their suggested changes to merge into the upstream notebook."
    autoplay loop controls = "false">
</video>

When a suggestion is made, a notification will be sent to the notebook creator via email and added to the suggestions inbox on their Observable profile page.

## Getting input from viewers

Your collaborators don't require edit access in order to collaborate in Observable. People with view access ("viewers") can also interact with and give feedback on notebooks using [inputs](/enterprise-pro/getting-started/getting-started#observable-inputs) and [comments](https://observablehq.com/@observablehq/comments).

To add someone as a viewer, we go through the same process as editors, but change their access level to "Can view."

<video
    style="border-radius:5px;box-shadow:0 4px 12px rgba(0,0,0,0.15), 0 0 0 1px rgba(0, 0, 0, 0.1);margin-left:27px;margin-bottom:40px;max-width: 80%"
    src="/enterprise-pro/collaboration-sharing/viewer.mov" alt="Screen capture of a user in an Observable notebook adding a Viewer by choosing Share then Can View."
    autoplay loop controls = "false">
</video>

When a viewer adjusts an input in a notebook, only they can see those changes, as they happen within the browser. That means viewers can adjust values, see the changes, and fork their own version or download images. That makes inputs a great way to self-service common requests from collaborators and stakeholders without giving them editing permission.

<video
    style="border-radius:5px;box-shadow:0 4px 12px rgba(0,0,0,0.15), 0 0 0 1px rgba(0, 0, 0, 0.1);margin-left:27px;margin-bottom:40px;max-width: 80%"
    src="/enterprise-pro/collaboration-sharing/viewerFeedback.mov" alt="Screen capture of a user making changes to an output chart using a drop-down widget, then adding a comment to a cell in an Observable notebook."
    autoplay loop controls = "false">
</video>

Viewers can also leave [comments](https://observablehq.com/@observablehq/comments) on cells, which will be sent directly to the notebook creator via email. If an editor wants to respond, they can reply to the comment, which will similarly send an email notification back to the viewer.

<video
    style="border-radius:5px;box-shadow:0 4px 12px rgba(0,0,0,0.15), 0 0 0 1px rgba(0, 0, 0, 0.1);margin-left:27px;margin-bottom:40px;max-width: 80%"
    src="/enterprise-pro/collaboration-sharing/feedback.mov" alt="Screen capture of a user making a change to a plot label in response to a comment left in the notebook, then responding to the original commenter that the label was fixed."
    autoplay loop controls = "false">
</video>

To learn about team notebook permissions, check out our [main documentation](https://observablehq.com/@observablehq/permissions-for-teams-notebooks?collection=@observablehq/observable-documentation). 

## Notebook privacy, sharing and permissions

By default, each Enterprise and Pro team notebook will be private to the creator. To give access to others, click the Share button and either add specific team members or give access to the entire team.

<video
    style="border-radius:5px;box-shadow:0 4px 12px rgba(0,0,0,0.15), 0 0 0 1px rgba(0, 0, 0, 0.1);margin-left:27px;margin-bottom:40px;max-width: 80%"
    src="/enterprise-pro/collaboration-sharing/access.mov" alt="Screen capture of a user adding teammates to their notebook by clicking Share, adding their teammate by searching for their name and clicking Add, then updating the teammates' permissions to Can Edit or Can View, respectively."
    autoplay loop controls = "false">
</video>

If you want to share your notebook with the larger Observable community, you can update the notebook [permissions](https://observablehq.com/@observablehq/permissions-for-teams-notebooks) to public. The notebook is then visible to anyone with the link, and will show up on our [recent notebooks list](https://observablehq.com/recent).

To learn more about notebook security, checkout out [Security and privacy FAQs](https://observablehq.com/@observablehq/security-faq).

## Embedding

Each cell in an Observable notebook can be embedded outside of Observable. You'll see this option available on any cell that has a name. 

<figure>
  <img
    style="margin:20px auto;max-width: 80%"
    src="/enterprise-pro/collaboration-sharing/embed_and_embed_cells.png" alt="Screenhot of the cell menu showing the Embed menu item, and the notebook menu showing the Embed cells item under Export."
  />
  <figcaption>Cell menu on left; notebook menu on right.
</figcaption>
</figure>

The simplest way to embed a cell is to use our iframe method, as seen below. To use this method, the notebook must be either public or public unlisted, meaning anyone with your notebook URL can access the work. To note, this will not work with notebooks with database connections, as they are only available to your team.

<figure>
  <img
    style="margin:20px auto;max-width: 80%"
    src="/enterprise-pro/collaboration-sharing/embed_with_preview_bar_chart.png" alt="Side-by-side images of the Embed selection view in Observable, where a user can select which cells they want to embed and the resulting embedded bar chart on the right."
  />
  <figcaption>Note that the <b>Preview</b> may not appear if the window is insufficiently wide.
</figcaption>
</figure>

To embed cells for Enterprise and Pro teams, you'll need to get set up with an [API key](https://observablehq.com/@observablehq/api-keys). This allows you to embed cells from notebooks that are not public. If you're looking to embed your work in a separate application, check out our documentation on [advanced embedding](https://observablehq.com/@observablehq/advanced-embeds), which walks through a number of topics like how to [swap out datasets](https://observablehq.com/@observablehq/advanced-embeds#redefine), how embeds [can be versioned](https://observablehq.com/@observablehq/advanced-embeds?collection=@observablehq/embedding-notebooks#cell-910), and how [notebooks can be installed as NPM modules](https://observablehq.com/@observablehq/advanced-embeds?collection=@observablehq/embedding-notebooks#cell-1192). 

In the next section, learn how to [find, use, and create reusable code](/enterprise-pro/reusing-content/reusing-content) and content to make your work in Observable more efficient, organized and accessible to your team. 

<figure>
  <img
    style="margin-left:20px;width:184px"
    src="/enterprise-pro/collaboration-sharing/small-code-reuse.png"
    alt="illustration of hands interacting with a notebook"
  />
</figure>

