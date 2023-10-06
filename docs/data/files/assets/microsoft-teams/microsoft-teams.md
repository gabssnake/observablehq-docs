# Microsoft Teams integration

Observable offers an integration between [Observable Teams](https://observablehq.com/@observablehq/getting-started-with-teams) and Microsoft Teams. Adding Observable as a tab in Microsoft Teams allows you to view and comment on Observable notebooks from within Microsoft Teams, and easily navigate to editing the notebooks within Observable. Edits are reflected in real-time within Microsoft Teams.

## Installing the Observable app

To install the Observable app from within Microsoft Teams, go to **Apps** and then use the **Search** box to search for "Observable". The description for Observable appears:

<figure>
  <img
    class="screenshot"
    src="./ObsAppSearchResults.png" alt="Screenshot of the Observable app listing in Microsoft Teams. The Observable logo are at the top, with the following text below: Observable brings data, context, and logic together in one place - the collaborative data canvas. Observable is the destination for uncovering new insights and making better data-driven decisions..."
  />
  <figcaption>The Observable app listing in Microsoft Teams.</figcaption>
</figure>

Click the description of the app, and you will see a longer description that also features an **Add to a team** button:

<figure>
  <img
    class="screenshot"
    src="./ObsApp_LongDescription.png" alt="Screenshot of the Observable app longer description through Microsoft Teams. Atop the window is a blue button with text 'Add to a team', following by a summary of Observable."
  />
  <figcaption>Click <b>Add to a team</b> to add the Observable app to your Microsoft Teams team.</figcaption>
</figure>

After you click **Add to a team**, you will see a new window: 

<figure>
  <img
    class="screenshot"
    src="./AddObsToTeam.png" alt="Window with the Observable logo and 'Add Observable to a team' at the top, with subtext 'Observable will be available for the entire team, but start by setting it up in a channel.' A search box below allows a user to search for an existing teama or channel name to select."
  />
  <figcaption>Set up a channel before adding Observable to a team.</figcaption>
</figure>

Select the appropriate channel, then click **Set up a tab** at the bottom of the modal. You can also click the plus sign (+) to add a tab, and then select Observable from the list of apps:

<figure>
  <img
    class="screenshot"
    src="./AddATab.png" alt="Window showing the Observable logo amidst other searchable integration logos, with text 'Add a tab' at the top."
  />
  <figcaption>The Observable app is available from the <b>Add a tab</b> modal in Microsoft Teams.</figcaption>
</figure>

Upon selecting Observable for a new tab, the following modal appears:

<figure>
  <img
    class="screenshot"
    src="./SignInToObs.png" alt="Window showing the Observable logo up top, with information about Observable and how 'adding this tab to your channel allows you to view an Observable team's notebooks inside Microsoft Teams'. A button below reads 'Sign in to Observable'."
  />
  <figcaption>Click <b>Sign in to Observable</b> to continue to the Observable <b>Sign in modal</b>.</figcaption>
</figure>

After you click **Sign in to Observable**, you are shown the Observable **Sign in modal**:

<figure>
  <img
    class="screenshot"
    src="./ObsSignIn.png" alt="Observable sign in window, where users can enter a username or email then select how to sign in to their account." />
  <figcaption>Sign into Observable, or create an account.</figcaption>
</figure>

If you already have an Observable account, sign in with your preferred authentication provider. (Note that there are advantages to signing in using your Microsoft authentication—see the section on Notifications below.)

If you have not yet created an account, you can [sign up](https://observablehq.com/@observablehq/signing-on) by clicking **Create an account** and creating your Observable Team. To learn more about Observable, take a look at our [Getting Started](https://observablehq.com/@observablehq/documentation#gettingStarted) notebooks.

Once you have signed in to Observable, the Observable tab appears:

<figure>
  <img
    class="screenshot"
    src="./ObservableTabInstalled.png" alt="View of an open Observable tab, showing three Observable notebooks." />
  <figcaption>The Observable tab installed.</figcaption>
</figure>

Once you have installed the Observable tab, you can do the following:
- Browse notebooks available to your team
- Search for notebooks

When you want to view a notebook, clicking the notebook thumbnail opens the notebook, where you can view and comment on it.

If you want to edit the notebook, you can then click **Edit**. This will open a new browser window where you can edit the notebook within Observable.

For more about creating notebooks, editing notebooks, and leaving comments in Observable:
- [Create a new notebook](https://observablehq.com/@observablehq/creating-a-new-notebook)
- [Edit an existing notebook](https://observablehq.com/@observablehq/a-taste-of-observable)
- [Comment on notebooks](https://observablehq.com/@observablehq/comments)

::: info NOTE
When navigating to Observable in your browser, if you have not previously logged into Observable from that browser, you will be prompted to sign into the browser also (use your Microsoft account to log in to Observable if you want to receive notifications). This will only be needed the first time you access Observable in the browser.
:::

## Notification of comments on Observable notebooks from within Microsoft Teams

If you sign in to Observable using Microsoft authentication, the Microsoft Teams integration will notify you when someone comments on your notebook:

<figure>
  <img
    class="screenshot"
    src="./MSTeamsCommentNotification_v2.png" alt="View of an open Observable notebook containing multiple comments, with the same comments also appearing in a notifications feed." />
  <figcaption>Microsoft Teams notifications alert you to comments on your Observable notebooks.</figcaption>
</figure>

::: info NOTE
To receive comment notifications, you must have notifications enabled in your Observable notebook under <b>Settings</b>. The default is for notifications to be enabled.
:::

## Notification of shared notebooks

Other co-workers or members of the same Observable Team and Microsoft Team that you belong to can share notebooks with you, and Observable will send you a notification. This is done whenever a notebook is shared with you individually (not with the entire team).

## If you have only a personal Observable account

If you only have a personal Observable account and do not belong to an Observable team, you will see the following modal when you attempt to log in from Microsoft Teams:

<figure>
  <img
    class="screenshot"
    src="./NoTeamsYet.png" alt="View of modal window letting a user know, if they do not belong to an existing team: 'It looks like you do not belong to any Observable teams yet. Please visit observablehq.com to sign up or reach out to your Observable team admin to request access." />
  <figcaption>Individual accounts will not have access to Observable teams.</figcaption>
</figure>