# Workspace settings

The Settings pages allow you to configure your workspaces.

Click your avatar and then **Settings** to display the Settings pages.

<figure>
  <img
    class="screenshot" style="max-width:250px;"
    src="/accounts-workspaces/assets/settingsFromAvatar.png"
    alt="A screenshot of the account menu with the Settings item highlighted"
  />
  <figcaption>Click <b>Settings</b> to view the Settings pages.</figcaption>
</figure>

If you belong to several workspaces, you can select the one you wish to modify:

<figure>
  <img
    class="screenshot" style="max-width:250px;"
    src="/accounts-workspaces/assets/settingsMultipleWorkspaces.png"
    alt="A screenshot of the settings submenu showing the different users and workspaces a user might belong to"
  />
  <figcaption>You can alter Settings in any workspace you have permission to edit.</figcaption>
</figure>

The available Settings vary depending on which workspace you are configuring.

## Settings for Free Individual workspaces {#freeIndividual}

<figure>
  <img
    class="screenshot" style="max-width:200px;"
    src="/accounts-workspaces/assets/settingsFreeIndividual.png"
    alt="A screenshot of the navigation sidebar for free individual workspaces, showing items for General, Moderation, and Billing"
  />
  <figcaption>Settings for Free Individual workspaces.</figcaption>
</figure>

### General

This is where you configure your account, profile, and preferences.

- Account
  - Set or change your username (which appears in the URLs of the your profile and notebooks).
  - Change your tier (for example, from the Free tier to the Pro tier).
  - Set or change the email address to receive notifications and messaging about the account.
  - Delete your account if desired.
- Personal profile
  - Customize your avatar and banner.
  - Set your display name and pronouns.
  - Write a brief biography.
  - Specify any Web sites that you wish to have associated with your profile.
  - Specify a publicly-visible email address.
- Editor Preferences
  - Enable or disable the automatic insertion of closing parentheses and brackets.
  - Enable or disable the use of [Prettier](https://prettier.io) to format code in all team notebooks.
  - Enable or disable spell checking in Markdown cells and comments (where supported by browser).
  - Enable or disable keyboard shortcuts to make it easier to create new JavaScript cells.
- Misc preferences
  - Show or hide the Quick guides on your home page.


### Moderation

Enables you to block users or teams from sending invitations to join their team. When you receive an invitation to join a team, a link appears at the bottom of the invitation, enabling you to block the user or the team sending the invitation:

<figure>
  <img
    class="screenshot" style="max-width:450px;"
    src="/accounts-workspaces/assets/blockUserOrTeam.png"
    alt="A screenshot of the invitation email sent when adding a user to a team, with the options to block to user or team highlighted on the bottom"
  />
  <figcaption>You can block either a user or a particular team from sending invitations.</figcaption>
</figure>

Clicking either link will ask you to confirm:

<figure>
  <img
    class="screenshot" style="max-width:450px;"
    src="/accounts-workspaces/assets/blockTeamConfirmation.png"
    alt="A screenshot of the block team dialog with the options to cancel or confirm"
  />
  <figcaption>Click <b>Confirm</b> to make the blocking action final.</figcaption>
</figure>

Once you have blocked a user or team, it will show up under the Moderation heading:

<figure>
  <img
    class="screenshot" style="max-width:450px;"
    src="/accounts-workspaces/assets/exampleBlockedTeam.png"
    alt="A screenshot of the moderation settings page, listing blocked teams"
  />
  <figcaption>Example of a blocked team.</figcaption>
</figure>

### Billing

If you have a Free Individual or Free Team workspace, there is no charge. A **Change subscription** button is provided here if you decide to change to a Pro Individual, Pro Team, or Enterprise workspace. In that event you will have to set up billing information (after any eligible free trial). Billing is described in detail in [Workspace and team creation and administration](https://observablehq.com/@observablehq/team-creation-and-administration?collection=@observablehq/workspaces#billing).

## Settings for Pro Individual workspaces {#proIndividual}

<figure>
  <img
    class="screenshot" style="max-width:200px;"
    src="/accounts-workspaces/assets/settingsProIndividual.png"
    alt="A screenshot of the settings navigation menu, listing options for General, Secrets, Databases, API Keys, OAuth Tokens, Moderation, and Billing"
  />
  <figcaption>Settings for Pro Individual workspaces.</figcaption>
</figure>

The Pro Individual workspace is like the Free Individual workspace, but adds the following settings:

### Secrets
Shared secrets for use in your team's private notebooks.  Use secrets to store API keys and other sensitive values you don’t want to hard-code in notebooks.

### Databases
Shared database connections for your team's private notebooks.

### API Keys
Use API keys to securely load and embed private notebooks outside of Observable.

### OAuth Tokens
OAuth tokens are used to allow notebooks to access data in cloud files. After you have signed in to the cloud service provider for a given cloud file, an OAuth token is stored in your Settings so that you will not have to sign in each time you want to visit a notebook that requires them. See [Cloud Files](https://observablehq.com/@observablehq/cloud-files?collection=@observablehq/getting-data-in-and-out) for more information.

## Settings for Free Team workspaces {#settingsFreeTeam}

<figure>
  <img
    class="screenshot" style="max-width:200px;"
    src="/accounts-workspaces/assets/settingsFreeTeam.png"
    alt="A screenshot of the settings navigation menu, listing options for General and Membership"
  />
  <figcaption>Settings for free teams.</figcaption>
</figure>

For team Settings in general, note that only team owners will see all team Settings, as some features, such as changing team roles, are only available to owners.

### General
Team owners can configure the team's account, profile, and preferences.
- Account
  - Set or change the team's username (which appears in the URLs of the team's profile and notebooks).
  - Change the team tier (for example, from a Free Team to a Pro Team).
  - Set or change the email address to receive notifications and messaging about the team account.
- Profile
  - Customize the team's avatar and banner.
  - Set the team's display name.
  - Write a brief team biography.
  - Specify team Web sites.
  - Specify a publicly-visible email address for the team.
- Preferences
  - Choose whether or not to use [Prettier](https://prettier.io) to format code in all team notebooks.

### Membership
 
Allows you to invite people to become new team members, change their roles, or remove them from the team. Current and invited team members appear in a list, along with their roles. If an invited team member has not yet accepted, their name appears with a **Pending** label.


## Settings for Pro Team workspaces

<figure>
  <img
    class="screenshot" style="max-width:200px;"
    src="/accounts-workspaces/assets/settingsProTeam.png"
    alt="A screenshot of the settings navigation menu, listing options for General, Membership, Secrets, Databases, API Keys, and Billing"
  />
  <figcaption>Settings for Pro teams.</figcaption>
</figure>

The settings for the Pro Team workspace are mostly the same as those seen in workspaces described earlier, with a few differences.

### General
As described in the _General_ section for [Free Individual](#freeIndividual), with the following addition:
- Team preferences
  - Enable or disable newly-created notebooks from being private (not shared with the team).

### Membership
As described in the _Membership_ section for [Free Team](#settingsFreeTeam), with the addition of pricing information for the roles that incur a monthly charge.

In the __[Invite by domain](https://observablehq.com/@observablehq/release-notes#cell-2982)__ section, you can setup a domain and default role from which users from your organization will be invited to join your workspace during their account signup process. Once invited, users will automatically have access to all the available assets in that workspace. To note, only owners will be able to see this option in their workspace settings.

### Secrets
As described in the [Pro Individual](#proIndividual) section.

### Databases
As described in the [Pro Individual](#proIndividual) section.

### API Keys
As described in the [Pro Individual](#proIndividual) section.

### Billing (visible only to team owners)
Visible only to team owners. You can change your subscription by altering either the tier or the billing period, and edit the payment method. The timing of your current billing cycle, and the next billing cycle are shown, as well as invoices.

Billing is described in detail in [Workspace and team creation and administration](https://observablehq.com/@observablehq/team-creation-and-administration?collection=@observablehq/workspaces#billing).

## Settings for Enterprise team workspaces

The settings for Enterprise team workspaces are identical to the settings for Pro team workspaces, with the exception of **Groups** and **Permissions**.


### Groups

<figure>
  <img
    class="screenshot" style="max-width:450px;"
    src="/accounts-workspaces/assets/groups.png"
    alt="A screenshot of the Groups section in the settings, showing different groups with their members"
  />
  <figcaption>Enterprise team workspaces have a <b>Groups</b> section.</figcaption>
</figure>

Groups allow you to share notebooks, collections, database connections and secrets for defined list of users. Under the **Membership** section in your Enterprise workspace settings, you'll find a section for Groups. There you can create a new group by clicking on the "New Group" button, adding a name to your group, and selecting team members to that group. Owners and editors in your Enterprise workspace can create new groups. A workspace editor can add or remove other team members from a group that they are a member of, and they can also delete a group that they are on. A workspace owner can edit or delete any group.

Once you've set up your group, you can share content like you normally would for any individual user. For example, on a notebook, clicking on the share modal and searching for team members will also return Groups, allowing you to easily grant access to multiple team members. Like users, you can grant a group edit and/or view access to content.


### Permissions

<figure>
  <img
    class="screenshot" style="max-width:450px;"
    src="/accounts-workspaces/assets/enterprisePermissions_v2.png"
    alt="A screenshot of the Permissions section in settings, wit options to allow team editors to manage public content and a way to restrict access to team notebooks"
  />
  <figcaption>Enterprise team workspaces have an additional <b>Permissions</b> section.</figcaption>
</figure>

Configure [protection of public content](https://observablehq.com/@observablehq/advantages-of-team-workspaces#contentProtection) and restricting team members to be [authenticated to your organization only](https://observablehq.com/@observablehq/advantages-of-team-workspaces#orgRestrict).
