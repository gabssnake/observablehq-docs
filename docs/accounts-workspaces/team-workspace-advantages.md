# Advantages of team workspaces

This is one of several related notebooks that describe Observable team and individual workspaces:

- [Team and individual workspaces](https://observablehq.com/@observablehq/team-and-individual-workspaces?collection=@observablehq/workspaces): overview and FAQ covering the different types of workspaces.
- [Advantages of team workspaces (this notebook)](https://observablehq.com/@observablehq/advantages-of-team-workspaces?collection=@observablehq/workspaces): describes what you can do with team workspaces.
- [Workspace and team creation and administration](https://observablehq.com/@observablehq/team-creation-and-administration?collection=@observablehq/workspaces): how to create a team or individual workspace; billing, upgrading, and maintenance.

Observable wants to help *anyone* use data to think, [together](https://observablehq.com/@observablehq/why-observable/2); with that in mind, team workspaces help you collaborate with others. 
Here are ways that you and your team can collaborate in team workspaces.

## Team roles
Team members often specialize in different tasks, so when you create a team, you as the team owner can define team roles.  

- **Viewer**: The person who needs to read, search and comment on team notebooks.
  - **Guest Viewer**: The person who needs to read, search and comment on team notebooks explicitly shared with them.
- **Editor**: The person who needs to create or edit notebooks, decide whether notebooks should be public,  make suggestions, and delete notebooks and collections.
  - **Guest Editor**: The person who needs edit notebooks explicitly shared with them. Guests are not able to create new notebooks, fork and suggest on notebooks, and update the sharing for other members on a notebook. 
- **Owner**: The person sharing team ownership. Owners can invite new members, assign roles, empty the trash, and manage team settings.

Anyone you invite can join the team using their existing Observable accounts, or they can create new accounts. 

Some teams (classrooms, journalism teams, or our internal ObservableHQ team) have mostly editors, while others (such as Enterprise teams) have some editors and a larger group of viewers. Guest editors and viewers are used to collaborate on specific notebooks without sharing the entire workspace. A team owner can configure the team in any combination of roles. 

## Switching between workspaces
Team members can switch between their individual workspaces and the team's workspace without needing to log into different accounts.

<figure>
  <img
    class="screenshot" style="max-width:250px;"
    src="/accounts-workspaces/assets/switchingWorkspaces_V2.png"
    alt="Screenshot of the workspaces drop-down in the top right of a notebook"
  />
  <figcaption>You can easily switch between an individual workspace and a team workspace.</figcaption>
</figure>

## Transferring notebooks between teams
You can belong to multiple teams, and can transfer notebooks into or out of those teams. For example, you can take a notebook from an individual workspace and move it into a team for collaboration, or transfer a notebook from one of your teams to another one of your teams, using **Settings > Transfer** under the notebook menu.

<figure>
  <img
    class="screenshot" style="max-width:450px;"
    src="/accounts-workspaces/assets/transferModal.png"
    alt="Screenshot of the Transfer dialog showing a set of radio buttons with team workspaces to transfer a notebook to"
  />
  <figcaption>You can transfer a notebook created in your individual workspace to a team workspace.</figcaption>
</figure>

## Common Team features
All Observable Teams can be configured with the following options:

### Access levels for notebooks

In Free Teams, you can control view or edit access to the notebook within the team, but notebooks created in a Free Team workspace start as public and remain public, even if transferred to an individual workspace.

In Pro or Enterprise Teams, you can control access to notebooks within a team to allow edit access, view access, or no access to individuals or to the whole team.

Newly created notebooks in a Pro or Enterprise Team will default to being visible only to you (the creator), and will appear in the team's notebook listings and search results _**only for you**_, and not for any other team members. (This is a configurable setting; if you wish, the team owner can go into Settings and make the default for newly-created notebooks to be visible for all team members.) When you share your notebook with the team or a subset of the team (as viewers or editors) they will also see the notebook listed. Any team member with edit access may change the sharing settings for the notebook. Only a team owner can change another team member’s role for the notebook. 

:::info Note
This feature does not enable team members who are set up as viewers in the team to edit the notebooks. They will still only be able to view and provide comments.
:::

<figure>
  <img
    class="screenshot" style="max-width:450px;"
    src="/accounts-workspaces/assets/settingAccess_V3.png"
    alt="Screenshot of the Share dialog showing the editing permissions dropdown with options Can view or edit, Can view, and No acceess."
  />
  <figcaption>Notebooks created in a Pro or Enterprise Team default to <b>No access</b>, but can be shared with the entire team, or with individual team members.</figcaption>
</figure>

### Setting access levels when creating new notebooks

When you create a new notebook, you can determine whether or not other team members can view or edit the notebook.

<figure>
  <img
    class="screenshot" style="max-width:225px;"
    src="/accounts-workspaces/assets/newNotebookIndividual_V2.png"
    alt="Screenshot of the New notebook dialog allowing the user to access the workspace to create the new notebook in, and to set its visibility."
  />
  <figcaption>Creating a new notebook in an individual workspace.</figcaption>
</figure>

The previous image shows a new notebook being created in an individual workspace. This notebook can be [shared](https://observablehq.com/@observablehq/personal-sharing) with up to four other individuals, but can't be shared directly with a team because it is not in a team workspace.

<figure>
  <img
    class="screenshot" style="max-width:225px;"
    src="/accounts-workspaces/assets/newNotebookFreeTeam_V2.png"
    alt="Screenshot of the New notebook dialog allowing the user to access the wteam orkspace to create the new notebook in, so it can be shared with team members."
  />
  <figcaption>Creating a new notebook in a free team workspace.</figcaption>
</figure>

The previous image shows a new notebook being created in a free team workspace. By default, the new notebook will be public, not just to other team members, but to all Observable users. If you click the **Upgrade to edit in private** link, you are taken to a modal that allows you to change your team tier. See [Changing to a different team tier](https://observablehq.com/@observablehq/team-creation-and-administration#changeTier).

<figure>
  <img
   class="screenshot" style="max-width:225px;"
    src="/accounts-workspaces/assets/newNotebookProTeam_V2.png"
    alt="Screenshot of the New notebook dialog allowing the user to access the wteam orkspace to create the new notebook in, but the permissions set to Only you."
  />
  <figcaption>Creating a new notebook in a Pro team workspace.</figcaption>
</figure>

The previous image shows a new notebook being created in a Pro (private) Team workspace. The new notebook can be private to the creator, visible to other team members in view-only mode, or visible to as well as editable by other team members. (Note that a team member whose role is Viewer is not permitted to edit any notebook.)

The process of creating a new notebook in an Enterprise Team workspace is the same as the Pro Team process.

## Sharing

Sharing is how you enable others to view or edit your notebooks. Click **Share** to display the Share modal.

<figure>
  <img
    class="screenshot" style="max-width:450px;"
    src="/accounts-workspaces/assets/shareModalProTeam.png"
    alt="Screenshot of the Share dialog, showing the notebook URL, access permissions, and thumbnail."
  />
  <figcaption>The <b>Share</b> modal enables you to set access permissions and to customize your notebook's URL and thumbnail.</figcaption>
</figure>

### Common Share features for all tiers
- The Share modal for Free, Pro, or Enterprise Teams allows you to:
  - Set the URL for the notebook.
  - Set a custom thumbnail image for the notebook.

### Sharing in Free teams
- The Share modal for a Free Team allows you to:
  - Define access granted to other individuals (up to four).
    - **Can edit** makes the notebook viewable and editable by the specified individual.
    - **Can view** makes the notebook viewable but not editable by the specified individual.
  - Sign up for a free trial of Pro Individual, which enables private notebooks.
 
### Sharing in Pro and Enterprise Teams
- The Share modal for a Pro Team allows you to:
  - Define Access granted to the public:
    - **Can view** makes the notebook viewable by the public
    - **Can view (unlisted)** makes the notebook viewable by the public but only if they know the URL
    - **No access** makes the notebook invisible to the public and to search queries in Observable
  - Define Access granted to your team
    - **Can view or edit** makes the notebook viewable and editable by your team
    - **Can view** makes the notebook viewable but not editable by your team
    - **No access** makes the notebook invisible to your team and to search queries in Observable
  - Define Access granted to specific team members
    - After specifying an individual team member, you can set their access to **Can edit** or **Can view**. 

## Collaborative editing
<PricingBadge level="pro" />

To collaborate in a team notebook that has been shared with you, look in your team's list of notebooks. 

<figure>
  <img
    class="screenshot" style="max-width:350px;"
    src="/accounts-workspaces/assets/notebooksInWorkspace.png"
    alt="Screenshot of the team workspace page on the Notebooks tab, showing recent notebooks."
  />
  <figcaption><b>Notebooks</b> shows the notebooks available in your team's workspace.</figcaption>
</figure>

If you were granted edit access to the notebook, you can simply edit away! You can collaborate on notebooks in your team workspace.

When multiple team members have a notebook open, they will all see their avatars at the top of the notebook. 


<figure>
  <img
    class="screenshot" style="max-width:350px;"
    src="/accounts-workspaces/assets/multiplayer-1.png"
    alt="Screenshot of the top right corner of a notebook, showing users who are currently editing the notebook."
  />
  <figcaption>Avatars display for each team member who has the notebook open.</figcaption>
</figure>

When team members are actively editing in cells, you can see edits in real-time along with their avatars in the cells of the notebook. 

## Collections
<PricingBadge level="pro" />

A team can have public collections and private collections which work the same way as they do in individual workspaces. Team members will be able to see and filter collections based on whether they are private to the team or public. Non-team members will only see the public collections of the team on the team's home page.

Private notebooks within the team may be added to both public and private collections, but they will be invisible to anyone outside of the team, and visible only to team members with whom the notebooks were shared. This is a great way to keep draft content organized.

## Custom templates
<PricingBadge level="pro" />

If you have a Pro Team (or Pro Individual) account, you can create [custom templates](https://observablehq.com/@observablehq/team-templates) to exactly suit your team.
- Any editor can create a custom template.
- Custom templates are in addition to the standard set of pre-defined Observable templates. 
- You can group custom templates to match your work projects or work groups.

Instructions for creating your own templates are [here](https://observablehq.com/@observablehq/custom-templates#creatingCustomTemplates).


## Enterprise Team features
Enterprise Teams can be configured with the following options:

<figure>
  <img
    class="screenshot" style="max-width:450px;"
    src="/accounts-workspaces/assets/Permissionv3.png"
    alt="Screenshot of the Permissions tab in the Settings, showing checkboxes to enable or disable team editors managing public content and file attachments."
  />
  <figcaption>Enterprise team options.</figcaption>
</figure>

### Protecting team assets
<PricingBadge level="enterprise" />

In order to protect team assets, public notebooks (listed or unlisted) do not have access to secrets and database connections.

In addition, as a team owner, you can configure whether you want to limit who in the team can make content public, by checking a box in the permissions tab of your team settings, as shown earlier. For more information about this feature, please refer to [this notebook](https://observablehq.com/@observablehq/better-controls-for-team-content).

You can also select whether you want to allow [File Attachments](https://observablehq.com/@observablehq/file-attachments) in your team’s workspace. 


### Authentication and identity management
<PricingBadge level="enterprise" />

As an Enterprise Team owner, you can require all team members to be authenticated against your domain(s). This protects your team assets from access by team members after they leave the organization.

This allows Enterprise customers to require that team members authenticate against a specific domain (or a group of domains) to gain access to the Team’s content on Observable. For team members who authenticate to Observable using other providers (personal Gmail accounts, GitHub, Twitter), they will be required to authenticate to both their personal authentication provider as well as your organization before gaining access to your team on Observable.

In addition, we also regularly check for a valid domain authentication and will request re-authentication if that check fails (for example, if someone is removed from your organization).

<figure>
  <img
    class="screenshot" style="max-width:450px;"
    src="/accounts-workspaces/assets/orgRestrict_v2.png"
    alt="Screenshot of the user home page, listing the teams a user has access to, with the middle one showing as locked."
  />
  <figcaption>You can require team members to authenticate themselves against your domain.</figcaption>
</figure>

### Single sign-on
<PricingBadge level="enterprise" />

Enterprise customers may avail of federated log-in using Gsuite and custom SSO providers.

"Single Sign-On" or SSO is the term used to describe the process where a user's identity is authenticated by an identity provider service for use with multiple applications. With SSO, users can have a single user name and password that works across all of the applications they use. Observable supports SSO using external identity provider services with built-in support for Google, GitHub, and Microsoft identity providers. 

A feature available to Observable Enterprise teams allows them to associate their logins with their own additional identity provider service, like [Okta Identity Cloud](https://www.okta.com/products/) or [OneLogin](https://www.onelogin.com/pages/openid-connect), using the standard OpenID Connect (OIDC) protocol. See [this notebook](https://observablehq.com/d/cc22936f68cc5544) for more information about support for Enterprise SSO.

### Support
<PricingBadge level="enterprise" />

In addition to Community support through our [Forum](https://talk.observablehq.com) that all Observable users can access, Enterprise Team owners also receive the following support:
- Quick [e-mail support](mailto:enterprise-support@observablehq.com) response times (~4 hours during Pacific Time business hours)
- Onboarding and annual training programs
- Early access to new product features
- Quarterly reviews (requests, roadmap, open issues)
- A dedicated Customer Success Manager

