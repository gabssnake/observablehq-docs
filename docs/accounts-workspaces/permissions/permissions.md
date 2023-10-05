# Permissions for team workspace notebooks

## Sharing model

Team workspaces allow each team member to control how notebooks are shared within their team. With any notebook, you have the option of reserving edit capability to just a select few members. 


## Sharing and access levels

The default visibility and access for notebooks is different for free team notebooks versus private or Enterprise team notebooks.

### Free team sharing and access levels

By default, noteboooks created in a free team workspace are public, meaning they can be viewed by anyone. You can decide whether or not to share edit access to the notebook.

In the header of free team notebooks you will see a button labeled **Share**. This button opens up a modal that allows you to change how your notebook is shared with other team members:

<figure>
  <img
    class="screenshot" style="max-width:450px;"
    src="/accounts-workspaces/permissions/shareNotebookFreeTeam.png"
    alt="Screenshot of the Share dialog, which includes the URL, access settings for the public, teams, and users, and the thumbnail."
  />
  <figcaption>You can share editing access to your notebook with other free team members. Access can be set for the entire team, or can vary for each team member.</figcaption>
</figure>

You can grant two different levels of access:

1. **Can view** – The default for all newly created notebooks in a free team. The notebook will be listed and accessible by specific team members (or by all team members if set for the entire team), but if they make any edits they will not be saved unless they fork the notebook. Also allows comment access to the notebook. 

2. **Can view and edit** – Grants full read/write access to the notebook to all team editors, including the ability to further change the sharing settings. Team viewers can view the notebook. 

### Private team and Enterprise team sharing and access levels

By default, noteboooks created in a private or Enterprise team workspace are private, meaning they are visible only to the notebook creator. You can decide whether or not to share read access or edit access to the notebook.

In the header of private or  team notebooks you will see a button labeled **Share**. This button opens up a modal that allows you to change how your notebook is shared with other team members:

<figure>
  <img
    class="screenshot" style="max-width:450px;"
    src="/accounts-workspaces/permissions/sharePrivateTeamEdited.png"
    alt="Screenshot of the Share dialog with the permissions menu for one team open, showing the options Can view or edit, Can view, and no access."
  />
  <figcaption>You can share access to your notebook with other private or Enterprise team members. Access can be set for the entire team, or can vary for each team member.</figcaption>
</figure>

There are **three different levels of access** that can be granted in private and Enterprise team workspaces:

1. **No access** – The default for all newly created notebooks in a private team or Enterprise team. Other team members will not see your notebook in their List view for the team's notebooks, in collections, the recent activity list, or in search results. Until a notebook is shared or published, it will not be accessible, even if they have the link. However, because it was created in your team, it still has access to the team's secrets and databases. This allows you to use your team data while working on a notebook in private, until you are ready to share your work.
2. **Can view** – The notebook will be listed and accessible by specific team members (or by all team members if set for the entire team), but if they make any edits they will not be saved unless they fork the notebook. Also allows comment access to the notebook. 
3. **Can view or edit** – The notebook is viewable and fully editable (based on team membership permissions), and team editors have the ability to further change the sharing settings.

### Listing

When viewing a team's notebook list, you can filter by access level. This allows you to see notebooks categorized into **All**, **You**, **Shared** and **Team**:

<figure>
  <img
    class="screenshot" style="max-width:250px;"
    src="/accounts-workspaces/permissions/notebookAccessList@1.png"
    alt="Screenshot of the team notebook list with the Access menu open, showing options for All, You, Shared, and Team."
  />
  <figcaption>Use this menu to limit the displayed notebooks by access level. </figcaption>
</figure>

- **All** – All notebooks that the user can view or edit, including those that are published, but not explicitly shared with you or the team.
- **You** – Notebooks that you own. Only you, as owner of the notebook, can see the unpublished versions of the notebook.
- **Shared** – Notebooks that you and any additional, explicitly named team members can view or edit.
- **Team** – Notebooks the whole team can view or edit.

Private team and Enterprise team notebooks, because they can be published, can also be filtered by publication status:

<figure>
  <img
    class="screenshot" style="max-width:425px;"
    src="/accounts-workspaces/permissions/notebookAccessListPrivate.png"
    alt="Screenshot of the list of notebooks with the Published menu open, which allows the user to select from All, Not published, Published (unlisted), Published, and Public."
  />
  <figcaption>Private team and Enterprise team notebooks can also be filtered by publication status. </figcaption>
</figure>

- **All** – All notebooks that the user can view or edit, including those that are published, but not explicitly shared with you or the team.
- **Not published** – Only visible or accessible to the users that it is shared with. For non-team notebooks, this means only the owner of the notebook. For team notebooks, the visibility is determined by the sharing permissions.
- **Published (unlisted)** – Notebooks that are visible or editable to anyone who knows the notebook's URL.
- **Published** – Visible to anyone outside the team through search or other listings. The published version represents a snapshot in time and subsequent changes are not visible until the notebook is republished.
- **Public** – Notebooks that are visible to anyone and are *live*; that is, changes are immediately visible to anyone.

## More about permissions

### Permissions changes

* Any team member with permission to edit a notebook can change the sharing settings for that notebook, including removing access by other team members or the entire team. 
* If a team member's role is changed (can only be done by team owners) to _viewer_ , then any notebooks they had _Can view or edit_ permission on it will be changed to just _Can view_. 
* If a member is removed from a team:
  * They will lose access to all team notebooks.
  * Their team private notebooks that have not been shared will be trashed.
  * Notebooks that have been shared with the team remain. If there are no other editors on the team, the team owners will be added as notebook editors.
  * Trashed notebooks are permanently removed after 30 days or if (team owner) empties the trash manually before that.
  * If the same team member is added back to the team, they will be able to retrieve any trashed (but not yet permanently deleted) private notebooks.


### Permission combinations

Different combinations of individual and team sharing are possible, with the restriction that a team member who only has the _viewer_ role on the team (set by the team owner in the initial invitation or in the Team Settings) may not be given _editor_ permission on a notebook. Also note that when a team member is given notebook permissions in two ways, they will get the **more permissive** role. 

For example, if a notebook is shared with the entire team as _Can view_ and _edit_, and also shared with an individual member as just _Can view_, and that member also has the team _editor_ role, then they will be able to edit the notebook. 

Note that it is not possible to grant team notebook permissions to someone who is not a member of the team. Conversely, if someone is removed from a team, then they will lose all access (permissions) to the team's notebooks. In addition, all team notebooks that a team member created that were still **Private** to them will be trashed if the member is removed from the team. 


 
**For more information** on team workspaces, see [Team and individual workspaces](https://observablehq.com/@observablehq/team-and-individual-workspaces?collection=@observablehq/workspaces).
