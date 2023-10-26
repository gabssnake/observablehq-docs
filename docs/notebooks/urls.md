# Custom notebook URLs

When you create a notebook on Observable, it is assigned a random identifier (ID), which you can see in the notebook's URL. By default, this ID is used to access the notebook until it is published, at which point the ID is upgraded to a more human-friendly combination of your username and the notebook title.

You can override this behavior by customizing the URL of any of your notebooks: published, private, or shared, in both personal and team contexts.

<figure>
  <img
    class="screenshot w-60"
    src="/notebooks/assets/url1.png" alt="A zoomed-in screenshot of an Observable URL as a random identifier (ID)."
  />
</figure>

<figure>
  <img
    class="screenshot w-80"
    src="/notebooks/assets/url2.png" alt="A zoomed-in screenshot of an Observable URL as a custom URL."
  />
  <figcaption>A URL with an ID (top) and a human-friendly URL (bottom)</figcaption>
</figure>

## Setting custom urls

Set a custom URL by accessing the notebook menu <svg style="display: inline !important" viewBox="0 0 16 16" fill="currentColor" stroke="none" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" width="16" height="16"><circle r="2" cy="8" cx="2"></circle><circle r="2" cy="8" cx="8"></circle><circle r="2" cy="8" cx="14"></circle></svg> at the top right of the page. If you have [edit access](/accounts-workspaces/permissions) on the notebook, you will see the **Set URL** option:

<figure>
  <img
    class="screenshot w-50"
    src="/notebooks/assets/setURL.png" alt="A screenshot of the notebook menu opened up to Settings>Set URL."
  />
  <figcaption>Find the Set URL option in the notebook menu.</figcaption>
</figure>

Clicking opens a modal that allows you to define your custom URL:

<figure>
  <img
    class="screenshot w-80"
    src="/notebooks/assets/setURLModal.png" alt="A screenshot of the Set URL modal that appears after selecting Settings>Set URL."
  />
  <figcaption>The full notebook URL contains your username (for example, @jzhang) along with your chosen URL. This username will be your team name if the notebook belongs to a team.</figcaption>
</figure>

If your chosen URL is valid (see [URL Constraints](/notebooks/urls#url-constraints) below), you will see the browser's address bar update after clicking **Confirm**.

You can now **access, share, and import your notebook using the new custom URL.**

## How it works

When you click **Confirm**, you link your custom URL with your notebook. This link does not affect the notebook's visibility—private notebooks won't suddenly become public.

You can set a custom URL any number of times on a given notebook, including ones that have been previously published. Updating a URL does not overwrite existing URLs, so any URL previously assigned to your notebook — including the original ID or default URLs assigned on first publish—remain valid. Accessing a notebook with an outdated URL will redirect to the latest one.

Publishing or sharing a notebook with a custom URL will not change the URL, and the same goes for unpublishing or unsharing.

If at any point you wish to clear the custom URLs associated with a notebook, you can click the **Reset** button on the bottom left of the modal. This will clear all custom URLs and restore the notebook URL back to its default.

## URL constraints

There are a few contraints on what you can include in your notebook URL:
* The URL must be unique across your own "user" namespace—individual (e.g., @jzhang) or team (e.g., @observablehq), depending on the context in which the notebook was created.

* The URL can only contain lowercase letters, numbers, hyphens, and underscores. An optional forward slash and number suffix is also allowed as a way to deal with the uniqueness constraint listed above (e.g., \`custom-url/2\`).

* The URL must be less than 255 characters long.

If any of these constraints are violated, the modal will display the appropriate error message.

## Considerations

Even though they do not change the visibility of notebooks, you should be careful of the risks associated with custom URLs:

* Be careful when sharing a notebook with a custom URL. If the custom URL is easily guessable—for example, "@username/chart"—then it's possible for someone to stumble upon the notebook without explicit access to the URL.

* Since URLs must be unique within a workspace, it is possible for a workspace member to know about the existence of another notebook URL, even if that notebook is not shared with the wider workspace. 

  For example, if member Alice creates a workspace notebook that is only visible to Alice but has the custom URL "top-secret", any member of Alice's workspace will know about that notebook's existence if they attempt to give their notebook the same "top-secret" URL.


