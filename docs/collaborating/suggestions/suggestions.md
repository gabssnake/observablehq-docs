# Suggestions

Have a neat idea about someone else's notebook that would make it even better? Or noticed something that needs to be fixed?

Observable lets you **Suggest** bug fixes, improvements, and other changes to notebooks.

## Making a suggestion

To suggest changes to a notebook: 

1. **Fork the notebook** to create your own copy
2. In your forked copy, make your changes—add cells, delete cells, make edits, or leave a comment
3. Send your changes to the original author using **Suggest** from the notebook menu (<Icon name="threeHorizDots" />) in the top right of your forked copy

<figure>
  <img
    style="border-radius:2px;box-shadow:0 4px 12px rgba(0,0,0,0.15), 0 0 0 1px rgba(0, 0, 0, 0.1);margin-left:27px;margin-bottom:40px;max-width: 70%"
    src="/collaborating/suggestions/sendSuggestionModal.png" alt="Open Suggest modal window where a user can enter a message then Confirm they want to send the message and suggestion to the notebook owner."
  />
  <figcaption>Use <b>Suggest</b> from the notebook menu to send the changes in your fork to the original author.</figcaption>
</figure>

The original author receives an email notification of your suggestion, with a link to a version of the notebook showing what has changed.

<figure>
  <img
    style="border-radius:2px;box-shadow:0 4px 12px rgba(0,0,0,0.15), 0 0 0 1px rgba(0, 0, 0, 0.1);margin-left:27px;margin-bottom:40px;max-width: 70%"
    src="/collaborating/suggestions/emailNotificationForSuggestion.png" alt="Screenshot of email notification that a notebook owner receives when a user makes a suggestion, with a button to review the suggestion."
  />
  <figcaption>Notebook owners get a notification when another user makes a suggestion.</figcaption>
</figure>

The author can edit and merge the changes, or reject them, as they see fit.

## What the recipient of suggestions sees

When you, as the original author of a notebook, receive an email notification of a Suggestion, you can see the suggested changes by clicking **View suggestion** in the email.

What you see is a notebook with a banner at the top, similar to the following:

<figure>
  <img
    style="border-radius:2px;box-shadow:0 4px 12px rgba(0,0,0,0.15), 0 0 0 1px rgba(0, 0, 0, 0.1);margin-left:27px;margin-bottom:40px;max-width: ${width}"
    src="/collaborating/suggestions/suggestionBanner.png" alt="Banner atop a notebook with pending suggestions reads with options to merge, compare, or close the suggestion."
  />
  <figcaption>A banner appears at the top of a notebook with suggestions.</figcaption>
</figure>

For each change made to the notebook, you see the suggested changes, clearly marked with red and green shading to distinguish the Parent version from the Fork:

<figure>
  <img
    style="border-radius:2px;box-shadow:0 4px 12px rgba(0,0,0,0.15), 0 0 0 1px rgba(0, 0, 0, 0.1);margin-left:27px;margin-bottom:40px;max-width: ${width}"
    src="/collaborating/suggestions/changedInForkVersion.png" alt="Differences between the original and suggesting fork are highlighted."
  />
  <figcaption>You can view the Parent version of the notebook, the Forked version, or the Differences when reviewing suggestions.</figcaption>
</figure>

Click **Parent** to view the original version:

<figure>
  <img
    style="border-radius:2px;box-shadow:0 4px 12px rgba(0,0,0,0.15), 0 0 0 1px rgba(0, 0, 0, 0.1);margin-left:27px;margin-bottom:40px;max-width: ${width}"
    src="/collaborating/suggestions/parent.png" alt="View the original notebook by clicking the Parent button."
  />
</figure>

The default, **Diff**, shows both the original (in red) and the changed version (in green). Text that has changed is highlighted:

<figure>
  <img
    style="border-radius:2px;box-shadow:0 4px 12px rgba(0,0,0,0.15), 0 0 0 1px rgba(0, 0, 0, 0.1);margin-left:27px;margin-bottom:40px;max-width: ${width}"
    src="/collaborating/suggestions/diff.png" alt="Screenshot highlighting the differences between an original notebook, and the notebook making suggestions."
  />
</figure>

Clicking **Fork** shows how the notebook will appear if the changes are accepted:

<figure>
  <img
    style="border-radius:2px;box-shadow:0 4px 12px rgba(0,0,0,0.15), 0 0 0 1px rgba(0, 0, 0, 0.1);margin-left:27px;margin-bottom:40px;max-width: ${width}"
    src="/collaborating/suggestions/fork.png" alt="Screenshot showing the content of the Fork making suggestions."
  />
</figure>

## Merge

**To accept all changes**, click the **Merge change(s)** link in the blue banner of a Suggestion. Merging a suggestion instantly applies the code changes (and not the comments) to the notebook. You can choose to accept a suggestion in full, close it, or accept individual parts of it by toggling between the Parent and Fork versions of each cell.

**To merge only some of the suggested changes, click Fork or Parent** on each individual change, then click **Merge change(s)** in the blue banner.

- Clicking **Parent** keeps the *original content*.
- Clicking **Fork** accepts the *suggested change*.

Note that you can make other edits while you are merging comments (the Merge count even updates if, for example, you add a new cell).

## Compare reverse

Use **Compare reverse** to compare a fork to the original version. If there have been changes to the original notebook, they will appear:

<figure>
  <img
    style="border-radius:2px;box-shadow:0 4px 12px rgba(0,0,0,0.15), 0 0 0 1px rgba(0, 0, 0, 0.1);margin-left:27px;margin-bottom:40px;max-width: ${width}"
    src="/collaborating/suggestions/addedInParent.png" alt="Screenshot showing content added to a parent notebook while a user was making edits in a fork."
  />
</figure>