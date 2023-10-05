# Comments

Observable is a great place to publish notebooks that engage readers, teach new concepts, and challenge assumptions: *they start conversations.* In Observable, you can discuss your work right in the notebook by adding Comments to specific cells.

::: info NOTE
If you are subject to or witness abuse by another user please contact [conduct@observablehq.com](mailto:conduct@observablehq.com). You can refer to our <a href="https://observablehq.com/@observablehq/code-of-conduct">Code of Conduct</a> for more clarification. If you see an offending comment you can report it directly by using the menu on the comment and choosing "Report spam or abuse."
:::

## Adding comments

To add a comment, click on the comment icon (<svg width="16" height="16" viewBox="0 0 16 16" fill="none" style="display: inline !important;"><path d="M13 3L9 3L3 3C2.44772 3 2 3.44772 2 4L2 11C2 11.5523 2.44772 12 3 12L7.5 12L9.5 14L11.5 12L13 12C13.5523 12 14 11.5523 14 11L14 4C14 3.44772 13.5523 3 13 3Z" stroke="currentColor" strokeWidth="2"/><line x1="5" y1="9" x2="11" y2="9" stroke="currentColor" strokeWidth="2"/><line x1="5" y1="6" x2="10" y2="6" stroke="currentColor" strokeWidth="2"/></svg>) to the left of any notebook cell or open the Cell menu (<Icon name="threeVertDots" />), then choose **Add comment**. A text window will appear immediately below the cell. Add your comment, then click Comment.

<figure>
  <img
    style="border-radius:2px;box-shadow:0 4px 12px rgba(0,0,0,0.15), 0 0 0 1px rgba(0, 0, 0, 0.1);margin-left:27px;margin-bottom:40px;max-width: 80%"
    src="/collaborating/comments/new-comment.png" alt="Screen shot showing text window that appears where a user would add a new comment immediately below the selected cell."
  />
  <figcaption>Add and confirm comments.</figcaption>
</figure>

## Joining a thread

When viewing a notebook, others' comments are hidden by default to limit distraction from the notebook content. If there are already comments on a notebook cell, a number appears next to the comment icon in the left margin indicating the number of comments in the thread. For example, the cell below has an existing thread with three comments:

<figure>
  <img
    style="border-radius:2px;box-shadow:0 4px 12px rgba(0,0,0,0.15), 0 0 0 1px rgba(0, 0, 0, 0.1);margin-left:27px;margin-bottom:40px;max-width: 80%"
    src="/collaborating/comments/comment-count.png" alt="Screen shot showing the number 3 next to the comment icon in a notebook, indicating three comments on that cell."
  />
  <figcaption>Thread size is indicated next to the comment icon.</figcaption>
</figure>

To add to the thread, click on the comment icon in the left margin to reveal all existing comments. To add your own, click the `+ Comment` button at the end of the thread.

<figure>
  <img
    style="border-radius:2px;box-shadow:0 4px 12px rgba(0,0,0,0.15), 0 0 0 1px rgba(0, 0, 0, 0.1);margin-left:27px;margin-bottom:40px;max-width: 80%"
    src="/collaborating/comments/add-to-thread.png" alt="Screen shot showing an existing notebook comment, with a button that says '+ Comment' at the bottom of the thread where a user can add their own comment."
  />
  <figcaption>Thread size is indicated next to the comment icon.</figcaption>
</figure>

## Who can comment?

Generally speaking, __comment visibility _matches_ notebook visibility__. For example, as a notebook transitions from private to link-shared to published, so will the comments on that notebook.

This means that if you've shared a notebook with a colleague or friend and used comments for feedback, when you publish your notebook those comments will become visible to everyone. If you don't want this to happen, you can delete these comments before publishing.

## Who can see comments?

Anyone who can see the notebook can also see its comments. For public notebooks, this means anyone can see the comments. [Enterprise and Pro Teams](https://observablehq.com/teams) can have private conversations in private team notebooks, but comments on link-shared and published notebooks are visible to any viewers of the notebook. When you comment, your comments will appear on the notebook, and the notebook's authors will be notified.

## Notifications

On notebooks you edit or comment on, you'll receive email notifications for each new comment someone else makes. If you'd rather not receive email notifications for a given notebook, you can __unsubscribe__ using the link in the email or through the notebook menu (<Icon name="threeHorizDots" />) in the top right and choosing "Disable notifications."

If you change your mind and wish to resubscribe to a specific notebook or want to be alerted of comments without leaving a comment yourself, use the same menu (<Icon name="threeHorizDots" />) and choose the "Enable notifications" option.

## Locking, editing or deleting comments

### Locking comments

As an author, you can disallow others from commenting on your notebook by locking comments from the notebook menu (<Icon name="threeHorizDots" />) via Settings.

<figure>
  <img
    style="border-radius:2px;box-shadow:0 4px 12px rgba(0,0,0,0.15), 0 0 0 1px rgba(0, 0, 0, 0.1);margin-left:27px;margin-bottom:40px;max-width: 30%"
    src="/collaborating/comments/lock-comments.png" alt="Screen shot showing modal window through a notebook's Settings where a user can choose to Lock comments."
  />
  <figcaption>Lock comments through notebook Settings.</figcaption>
</figure>

### Editing and deleting comments

Notebook owners can delete any comments. To delete a comment, open the comment thread by clicking <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style="display: inline !important;"><path d="M13 3L9 3L3 3C2.44772 3 2 3.44772 2 4L2 11C2 11.5523 2.44772 12 3 12L7.5 12L9.5 14L11.5 12L13 12C13.5523 12 14 11.5523 14 11L14 4C14 3.44772 13.5523 3 13 3Z" stroke="currentColor" strokeWidth="2"/><line x1="5" y1="9" x2="11" y2="9" stroke="currentColor" strokeWidth="2"/><line x1="5" y1="6" x2="10" y2="6" stroke="currentColor" strokeWidth="2"/></svg> to the left of any cell. Then, click the three dot icon (<Icon name="threeHorizDots" />) to the right of any comment to reveal options to Edit or Delete. Immediately below each comment, you will also see a Resolve option, which you can use to tidy up threads or track progress while addressing comments.

<figure>
  <img
    style="border-radius:2px;box-shadow:0 4px 12px rgba(0,0,0,0.15), 0 0 0 1px rgba(0, 0, 0, 0.1);margin-left:27px;margin-bottom:40px;max-width: ${width}"
    src="/collaborating/comments/edit-delete-comments.png" alt="Screen shot showing menu with options to Edit or Delete a notebook comment."
  />
  <figcaption>Resolve, edit or delete notebook comments.</figcaption>
</figure>

::: info NOTE
If you have been a longtime Observable user, you may want to check out information on how <a href="https://observablehq.com/@observablehq/comments#migration">comment behaviors have changed</a>.
:::