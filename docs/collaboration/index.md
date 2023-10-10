# Collaboration

At Observable, we believe that collaboration is key to doing great work with data. That's why we support several ways to collaborate with others in notebooks, whether it's co-editing a visualization or adding comments to an analysis.

## Multiplayer editing
When working in Observable, you can invite others to join and edit notebooks with you.

<video
    style="border-radius:5px;box-shadow:0 4px 12px rgba(0,0,0,0.15), 0 0 0 1px rgba(0, 0, 0, 0.1);margin-left:27px;margin-bottom:40px;max-width: 80%"
    src="./assets/collaboration.mov" alt="Screen capture of an Observable notebook showing a user clicking the Share button, then adding another user as an editor. The new editor's avatar now appears in the notebook and is seen making edits."
    autoplay loop controls = "false">
</video>

When another user from your workspace is in the same notebook you're working in, you'll see their avatar at the top of the screen. You can click on their avatar to automatically follow them around.

<video
    style="border-radius:5px;box-shadow:0 4px 12px rgba(0,0,0,0.15), 0 0 0 1px rgba(0, 0, 0, 0.1);margin-left:27px;margin-bottom:40px;max-width: 80%"
    src="./assets/collabFollow.mov" alt="Screen capture of an Observable notebook with two collaborators working in it. When the user clicks on their collaborator's avatar, they automatically find and follow their collaborator in the notebook, and a banner appears atop the browser reading: Following Dan Demonstrator (the collaborator's username)."
    autoplay loop controls = "false">
</video>

Whether working solo or with collaborators in a notebook, it is useful to have a record of changes made. The [History](/notebooks/history) pane (accessed by clicking the clock icon in the right margin) shows what changes were made to your notebook. You also have the option to revert back to an earlier version by choosing to "Restore" a version that you select.

<video
    style="border-radius:5px;box-shadow:0 4px 12px rgba(0,0,0,0.15), 0 0 0 1px rgba(0, 0, 0, 0.1);margin-left:27px;margin-bottom:40px;max-width: 80%"
    src="./assets/history.mov" alt="Screen capture of an Observable notebook. The user selects the clock icon to open the History pane, selects an older veresion of the notebook, then chooses to Restore the notebook back to that version."
    autoplay loop controls = "false">
</video>

## Fork, suggest, merge

Another common way to collaborate within a workspace is to follow the ["Fork, Suggest, Merge"](/collaboration/suggestions) workflow. This is typically used when larger edits are made to a notebook, and the editor wants to make and test those changes in private before merging updates into the main notebook.

To merge updates from a fork into the main notebook, you can send suggestions (by choosing "Suggest" from the three-dot menu) to the notebook author with a brief note about your proposed changes. 

<video
    style="border-radius:5px;box-shadow:0 4px 12px rgba(0,0,0,0.15), 0 0 0 1px rgba(0, 0, 0, 0.1);margin-left:27px;margin-bottom:40px;max-width: 80%"
    src="./assets/forkSuggest.mov" alt="Screen capture of a user working in a Fork (copy) of an Observable Notebook. After making some edits, the user clicks the three dot menu atop the notebook and chooses Suggest, then adding a note to go along with their suggested changes to merge into the upstream notebook."
    autoplay loop controls = "false">
</video>

When a suggestion is made, a notification will be sent to the notebook creator via email and added to the suggestions inbox on their Observable profile page.

## Getting input from viewers

Your collaborators don't require edit access in order to collaborate in Observable. People with view access ("viewers") can also interact with and give feedback on notebooks using [inputs](/inputs/overview) and [comments](/collaboration/comments).

To add someone as a viewer, we go through the same process as editors, but change their access level to "Can view."

<video
    style="border-radius:5px;box-shadow:0 4px 12px rgba(0,0,0,0.15), 0 0 0 1px rgba(0, 0, 0, 0.1);margin-left:27px;margin-bottom:40px;max-width: 80%"
    src="./assets/viewer.mov" alt="Screen capture of a user in an Observable notebook adding a Viewer by choosing Share then Can View."
    autoplay loop controls = "false">
</video>

When a viewer adjusts an input in a notebook, only they can see those changes, as they happen within the browser. That means viewers can adjust values, see the changes, and fork their own version or download images. That makes inputs a great way to self-service common requests from collaborators and stakeholders without giving them editing permission.

<video
    style="border-radius:5px;box-shadow:0 4px 12px rgba(0,0,0,0.15), 0 0 0 1px rgba(0, 0, 0, 0.1);margin-left:27px;margin-bottom:40px;max-width: 80%"
    src="./assets/viewerFeedback.mov" alt="Screen capture of a user making changes to an output chart using a drop-down widget, then adding a comment to a cell in an Observable notebook."
    autoplay loop controls = "false">
</video>

Viewers can also leave comments on cells, which will be sent directly to the notebook creator via email. If an editor wants to respond, they can reply to the comment, which will similarly send an email notification back to the viewer.

<video
    style="border-radius:5px;box-shadow:0 4px 12px rgba(0,0,0,0.15), 0 0 0 1px rgba(0, 0, 0, 0.1);margin-left:27px;margin-bottom:40px;max-width: 80%"
    src="./assets/feedback.mov" alt="Screen capture of a user making a change to a plot label in response to a comment left in the notebook, then responding to the original commenter that the label was fixed."
    autoplay loop controls = "false">
</video>
