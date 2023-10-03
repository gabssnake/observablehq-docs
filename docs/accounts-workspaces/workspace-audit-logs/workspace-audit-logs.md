# Workspace Audit Logs 
<a class="enterprise-label" href="https://observablehq.com/pricing">Learn more about Enterprise</a>


Workspace audit logs enable administrators of Enterprise teams with a comprehensive record of activities, including changes to notebooks and member interactions. This feature enables administrators to track and answer important questions such as "who did what, where, and when?" within their workspace, which ultimately promotes transparency and accountability.


## Enable Audit Logs

To enable audit logs for your workspace, go to team **Settings** and access the **Permissions** tab. Within the **Permissions** tab, you will find the option to enable audit logs. By selecting this option, you activate the Workspace Audit Log feature. This will start recording and storing all activities and changes within your workspace.

<figure>
  <img
    style="border-radius:2px;box-shadow:0 4px 12px rgba(0,0,0,0.15), 0 0 0 1px rgba(0, 0, 0, 0.1);margin-left:27px;margin-bottom:20px;max-width:450px;"
    src="/accounts-workspaces/workspace-audit-logs/settings-audit-log.png"
    alt="Screenshot of the Audit logs section of workspace settings, with the option to maintain audit logs checked"
  />
  <figcaption>The <b>Audit logs</b> setting.</figcaption>
</figure>

## Ongoing audit log events

Once activated, all activities within the workspace will be logged and stored as a continuously updated list of audit log events, with a retention period of 180 days. This extended timeframe ensures that administrators have access to historical data for retrospective analysis and investigations.

Each log captures:
- **log**: this log has the history of each activity with timestamps, as well as specifies activity type, any associated activity data, what type of entity was used (`audit` or `notebook`) along with any entity id, the workspace id of the workspace being used, user id of the active user, and ip address the user was utilizing for the activity.
- **users**: this log lists the users that were active and includes their id, login username, and full name, as well as an indicator of whether the user is a team member in the workspace.
- **members**: similar to the users log, this log shows what members of the workspace were active including their id, login username, full name, and a number of other attributes.
- **notebooks**: this log shows users information about each notebook that has seen activity, including the id, the slug (custom url) if there is one, the title of the notebook, the access status such as being live or private, and whether it is a team-shared notebook.

## Download audit log data

The audit log data can be conveniently downloaded in CSV or JSON format, allowing administrators to analyze the information using their preferred tools and techniques. This flexibility empowers administrators to perform in-depth reviews, identify patterns, and extract valuable insights from the audit logs.

### Logs in CSV format

When you download a workspace audit log in CSV, it will download as a `tgz` zip file containing four different CSV files: _log.csv_, _users.csv_, _members.csv_, and _notebooks.csv_. Open any of these up in a CSV editor for better formatting and easier visibility. The file _log.csv_ will have the majority of the pertinent activity information.

### Logs in JSON format

Here, what were four separate logs (log, users, members, notebooks) when downloaded in CSV are instead four top level objects:

```json
{
   "log":[
      {
         "activity_time":"2023-05-10T17:16:32.414Z",
         "activity_type":"read",
         "activity_data":null,
         "entity_type":"notebook",
         "entity_id":"72c492de9bffb5b0",
         "workspace_id":"01cffcdc81f661d7",
         "user_id":"081d04d67e52e476",
         "ip_address":null
      },
      {
         "activity_time":"2023-05-10T17:17:04.871Z",
         "activity_type":"read",
         "activity_data":null,
         "entity_type":"notebook",
         "entity_id":"72c492de9bffb5b0",
         "workspace_id":"01cffcdc81f661d7",
         "user_id":"081d04d67e52e476",
         "ip_address":null
      }
   ],
   "users":[
      {
         "id":"081d04d67e52e400",
         "login":"frank",
         "name":"Frank Gold",
         "team_member":false
      },
      {
         "id":"081d04d67e52e476",
         "login":"alice",
         "name":"Alice Silver",
         "team_member":true
      }
   ],
   "members":[
      {
         "id":"081d04d67e52e476",
         "login":"alice",
         "name":"Alice Silver",
         "email":"alice@gmail.com",
         "role":"owner",
         "provider_name":"google",
         "provider_org":"wonderland.com",
         "provider_email":"alice@wonderland.com",
         "provider_create_time":"2023-01-02T00:00:00.000Z",
         "provider_update_time":"2023-05-20T00:00:00.000Z"
      }
   ],
   "notebooks":[
      {
         "id":"0eb9f96dba7d226e",
         "slug":"mission",
         "title":"Our Mission",
         "access":"live",
         "team_shared":true
      },
      {
         "id":"72c492de9bffb5b0",
         "slug":null,
         "title":"Strategy",
         "access":"private",
         "team_shared":false
      }
   ]
}
```

## Types of audit log events

There are two `entityType`s: `audit` and `notebook`

### Entity `audit` events

Event Properties:

```json
entityType: "audit"
workspaceId: <workspace ID>

// Activity types (activityType):
activityType: "started" | "stopped"
// (When a workspace enables or disables audit logs)
```

### Entity `notebook` events
Properties:

```json
entityType: "notebook"
activityType: "create" | "edit" | "fork" | "private" | "public" |
              "read" | "shared" | "transfer_out" | "transfer_in" |
              "trash" | "public_unlisted" | "untrash"
activityData?: <optional activity data>
entityId?: <notebook ID>
workspaceId: <workspace ID>
```

:::info Note
Properties with a <b><code>?</code></b> at the end are optional and may therefore sometimes be <code>NULL</code>.
:::

Activity types (`activityType`):

- `create`: Notebook is created.
- `edit`: Notebook is edited.
- `fork`: Notebook is forked.
- `private`: Notebook is made private.
- `public`: Notebook is made public.
- `read`: Notebook is read.
- `shared`: Notebook is shared.
- `activityData`? object includes:
    - `assigned`: shared members
    - `removed`: removed members
- `transfer_out`: Notebook is transferred out of one workspace.
- `transfer_in`: Notebook is transferred into one workspace.
- `trash`: Notebook is moved to trash.
- `public_unlisted`: Notebook is made public unlisted.
- `untrash`: Notebook is removed from trash.
