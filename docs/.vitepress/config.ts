import {fileURLToPath, URL} from "node:url";
import {defineConfig} from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Observable",
  description: "Learn how to work in Observable",
  base: "/documentation/",
  cleanUrls: true,
  vite: {
    resolve: {
      alias: [
        {find: /^.*\/VPFooter\.vue$/, replacement: fileURLToPath(new URL("./theme/CustomFooter.vue", import.meta.url))}
      ]
    }
  },
  head: [
    ["link", {rel: "apple-touch-icon", href: "https://static.observablehq.com/favicon-512.0667824687f99c942a02e06e2db1a060911da0bf3606671676a255b1cf97b4fe.png"}],
    ["link", {rel: "icon", type: "image/png", href: "https://static.observablehq.com/favicon-512.0667824687f99c942a02e06e2db1a060911da0bf3606671676a255b1cf97b4fe.png", sizes: "512x512"}],
    ["script", {async: "", src: "https://www.googletagmanager.com/gtag/js?id=G-9B88TP6PKQ"}],
    ["script", {}, "window.dataLayer=window.dataLayer||[];\nfunction gtag(){dataLayer.push(arguments);}\ngtag('js',new Date());\ngtag('config','G-9B88TP6PKQ');"]
  ],
  themeConfig: {
    logo: {
      light: "/observable-light.svg",
      dark: "/observable-dark.svg"
    },
    nav: [
      {text: "Sign up", link: "/"},
      {text: "Quick guides", link: "https://observablehq.com/@observablehq/observable-quick-guides"}
    ],
    sidebar: [
      {
        text: "Getting Started",
        items: [
          {text: "Why Observable?", link: "/"},
          {text: "Observable overview", 
          collapsed: true,
           link: "/learn/learn-overview/learn-overview.md",
          items: [
           {text: "Notebooks & cells", link: "/learn/learn-notebooks-cells/learn-notebooks-cells.md"},
           {text: "Getting data in", link: "learn/learn-getting-data/learn-getting-data.md"},
           {text: "Chart cell", link: "/learn/learn-viz-chart-cell/learn-viz-chart-cell.md"},
           {text: "Observable Plot" , link: "learn/learn-plot/plot.md"},
           {text: "Cell modes", link: "learn/learn-cell-modes/learn-cell-modes.md"},
           {text: "Reactive dataflow", link: "/learn/learn-reactive-flow/learn-reactive-flow.md"},
           {text: "User inputs and interactivity", link: "/learn/learn-inputs/learn-inputs.md"}
          ]
          },
          {text: "Enterprise and Pro",
            collapsed: true,
            items: [
              {text: "Securely connecting to data", link: "/enterprise-pro/connecting-to-data/connecting-to-data"},
              {text: "Collaboration and sharing", link: "/enterprise-pro/collaboration-sharing/collaboration-sharing"},
              {text: "Reusing content", link: "/enterprise-pro/reusing-content/reusing-content"},
              {text: "Team and project management", link: "/enterprise-pro/team-project-management/team-project-management"},
              {text: "Get help and stay informed", link: "/enterprise-pro/getting-help/getting-help"},
            ]},
          {text: "Hands-on tutorials", link: "https://observablehq.com/@observablehq/hands-on-tutorials-overview"},
          {text: "Quick guides", link: "https://observablehq.com/@observablehq/observable-quick-guides"}
        ]
      },
      {
        text: "Cells",
        collapsed: true,
        link: "/cells/overview/overview.md",
        items: [
             {text: "JavaScript",
             link: "/cells/cell-modes/js/js-cells/js-code.md",
             collapsed: true,
              items: [
                {text: "Observable JavaScript", link: "/cells/cell-modes/js/observable-js/observable-js.md"},
                {text: "Require", link: "/cells/cell-modes/js/js-require/js-require.md"}
              ]
             },
             {text: "Text", link: "/cells/cell-modes/text/text.md"},
             {text: "Data Table", link: "/cells/cell-modes/data-table/data-table.md"},
             {text: "Chart", link: "/cells/cell-modes/chart/chart-cell.md"},
             {text: "HTML", link: "/cells/cell-modes/html/html-cell.md"},
             {text: "SQL", link: "/cells/cell-modes/sql/sql-cell.md"},
             {text: "TeX", link: "/cells/cell-modes/tex/tex.md"}
           ]
        },
        {
            text: "Data",
            collapsed: true,
           items: [
            { 
              text: "Files",
              collapsed: true,
              items: [
                {text: "File attachments", link: "/data/files/file-attachments/file-attachments.md",
                collapsed: true,
                 items: [
                  {text: "Apache Arrow", link: "/data/files/file-attachments/file-attachments#apache-arrow-files"},
                  {text: "Apache Parquet", link: "/data/files/file-attachments/file-attachments#apache-parquet-files"},
                  {text: "Binary", link: "/data/files/file-attachments/file-attachments#binary-files"},
                  {text: "CSV", link: "/data/files/file-attachments/file-attachments#csv-files"},
                  {text: "Image", link: "/data/files/file-attachments/file-attachments#image-files"},
                  {text: "JSON", link: "/data/files/file-attachments/file-attachments#json-files"},
                  {text: "SQLite", link: "/data/files/file-attachments/file-attachments#sqlite"},
                  {text: "TSV", link: "/data/files/file-attachments/file-attachments#tsv-files"},
                  {text: "Video", link: "/data/files/file-attachments/file-attachments#video-files"},
                  {text: "XLSX", link: "/data/files/file-attachments/file-attachments#xlsx-files"},
                  {text: "ZIP", link: "/data/files/file-attachments/file-attachments#zip-files"},
                 ]
                },
                {text: "Cloud files", link: "/data/files/cloud-files/cloud-files.md",
                collapsed: true,
                 items: [
                    {text: "Microsoft Teams", link: "/data/files/cloud-files/microsoft-teams/microsoft-teams.md"},
                    {text: "Google Drive", link: "/"}
                  ]
                },
              ]

            },
            {
              text: "Databases",
              collapsed: true,
              link: "/data/databases/overview/overview.md",
              items: [
                {text: "Database pane", link: "/data/databases/databases-pane/databases-pane-schema-viewer.md"},
                {text: "Self-hosted proxies", link: "/data/databases/self-hosted-proxies/self-hosted-proxies.md"},
               {text: "Database clients",
                collapsed: true,
                 items: [
                  {text: "Amazon Red Shift", link: "/data/databases/database-clients/database-clients#amazon-redshift-postgresql-driver"},
                  {text: "BigQuery", link: "/data/databases/database-clients/database-clients#bigquery"},
                  {text: "Databricks", link: "/data/databases/database-clients/database-clients#databricks"},
                  {text: "Datasette", link: "/data/databases/database-clients/database-clients#datasette"},
                  {text: "Dolt", link: "/data/databases/database-clients/database-clients#dolt"},
                  {text: "DuckDB", link: "/data/databases/database-clients/database-clients#duckdb"},
                  {text: "HEAVY.AI", link: "/data/databases/database-clients/database-clients#heavy-ai"},
                  {text: "MariaDB", link: "/data/databases/database-clients/database-clients#mariadb-mysql-driver"},
                  {text: "Mongo SQL", link: "/data/databases/database-clients/database-clients#mongo-sql"},
                  {text: "MySQL", link: "/data/databases/database-clients/database-clients#mysql"},
                  {text: "Oracle", link: "/data/databases/database-clients/database-clients#oracle"},
                  {text: "PostgreSQL", link: "/data/databases/database-clients/database-clients#postgresql"},
                  {text: "QuestDB", link: "/data/databases/database-clients/database-clients#questdb"},
                  {text: "Seafowl", link: "/data/databases/database-clients/database-clients#seafowl"},
                  {text: "Snowflake", link: "/data/databases/database-clients/database-clients#snowflake"},
                  {text: "SQL Server", link: "/data/databases/database-clients/database-clients#sql-server"},
                  {text: "SQLite", link: "/data/databases/database-clients/database-clients#sqlite"},
                  {text: "Trino/Presto", link: "/data/databases/database-clients/database-clients#trino-presto"},
                 ]},
                 {text: "Custom Database Clients", link: "/data/databases/databaseclient-specification/databaseclient-specification.md"},
                
              ]
            },
            {
              text: "APIs",
              collapsed: true,
              items: [
                {text: "AWS EC2", link: "https://observablehq.com/@observablehq/aws-ec2-api-starter"},
                {text: "AWS S3", link: "https://observablehq.com/@observablehq/aws-s3-api-starter"},
                {text: "Figma", link: "https://observablehq.com/@observablehq/figma-api-starter"},
                {text: "GitHub", link: "https://observablehq.com/@observablehq/github-api-starter"},
                {text: "Stripe", link: "https://observablehq.com/@observablehq/stripe-api-starter"},
                // {text: "Bitbucket", link: "/"}
              ]
            },
            {
              text: "Datasets",
              collapsed: true,
              items: [
                {text: "Sample datasets", link: "/"},
                {text: "Curated datasets", link: "/"}
              ]
            }
           
           ],
          },
          {
            text: "AI Assist",
            collapsed: true,
            items: [
              {text: "Developing with AI Assist", link: "/"}
            ]
          },
          {
            text: "Inputs",
            collapsed: true,
            link: "/inputs/inputs-overview/inputs-overview.md",
            items: [
              {text: "Button", link: "/inputs/inputs-overview/inputs-overview#button"},
              {text: "Toggle", link: "/inputs/inputs-overview/inputs-overview#toggle"},
              {text: "Checkbox", link: "/inputs/inputs-overview/inputs-overview#checkbox"},
              {text: "Radio", link: "/inputs/inputs-overview/inputs-overview#radio"},
              {text: "Range", link: "/inputs/inputs-overview/inputs-overview#range"},
              {text: "Select", link: "/inputs/inputs-overview/inputs-overview#select"},
              {text: "Text", link: "/inputs/inputs-overview/inputs-overview#text"},
              {text: "Textarea", link: "/inputs/inputs-overview/inputs-overview#textarea"},
              {text: "Date/Datetime", link: "/inputs/inputs-overview/inputs-overview#date"},
              {text: "Color", link: "/inputs/inputs-overview/inputs-overview#color"},
              {text: "Search", link: "/inputs/inputs-overview/inputs-overview#search"},
              {text: "Table", link: "/inputs/inputs-overview/inputs-overview#table"},
              {text: "File", link: "/inputs/inputs-overview/inputs-overview#file"},
              {text: "Form", link: "/inputs/inputs-overview/inputs-overview#and-more"}
            ]
          },
          {
            text: "Collections",
            collapsed: true,
            items: [
              {text: "Collections", link: "/collections/collections.md"},
            ]
          },
          {
            text: "Reusing Work",
            collapsed: true,
            items: [
              {text: "Forking", link: "/"},
              {text: "Importing",
              collapsed: true,
               items: [
                {text: "Imports", link: "/"},
                {text: "Version locking for imports", link: "/"},
               ]
              },
              {text: "Templates",
              collapsed: true,
               items: [
                {text: "Using templates", link: "/"},
                {text: "Custom templates", link: "/"}
               ]
              }
            ]
          },
          {
            text: "Embedding",
            collapsed: true,
            items: [
              {text: "Basic Embedding", link: "/embedding/basic"},
              {text: "Advanced Embedding and downloading", link: "/embedding/advanced"},
              {text: "Embed a notebook in a React app", link: "/embedding/how-to-embed-a-notebook-in-a-react-app"},
              {text: "Auto-resizing embed", link: "/"},
              {text: "API and notebook keys", link: "/embedding/api-keys"},
              {text: "Troubleshooting embedding", link: "/embedding/troubleshooting"}
            ]
          },
          {
            text: "Saving and History",
            collapsed: true,
            items: [
              {text: "How saving works", link: "/saving-and-history/how-saving-works/how-saving-works.md"},
              {text: "Notebook history", link: "/saving-and-history/notebook-history/notebook-history.md"}
            ]
          },
          {
            text: "Collaborating",
            collapsed: true,
            items: [
              {text: "Sharing work",
              collapsed: true,
               items: [
                {text: "Sharing", link: "/collaborating/sharing-work/sharing/sharing.md"},
                {text: "Searching", link: "/collaborating/sharing-work/search/search.md"},
                {text: "Pausing live edits in public notebooks", link: "/collaborating/sharing-work/pause-live-edits/pause-live-edits.md"},
                {text: "Tags: Organizing work", link: "/collaborating/sharing-work/tags/tags.md"},
                {text: "Licenses", link: "/collaborating/sharing-work/licenses/licenses.md"}
               ]
              },
              {text: "Comments", link: "/collaborating/comments/comments.md"},
              {text: "Suggestions", link: "/collaborating/suggestions/suggestions.md"},
              {text: "Following users and teams", link: "/collaborating/following/following-users-and-teams.md"},
              {text: "Tinker mode: temporary edits to a notebook", link: "/collaborating/tinker-mode/tinker-mode.md"}
            ]
          },
          {
            text: "Debugging",
            collapsed: true,
            items: [
              {text: "Safe mode", link: "/debugging/safe-mode/safe-mode.md"},
              {text: "Minimap", link: "/debugging/minimap/minimap.md"},
              {text: "Module require debugger", link: "https://observablehq.com/@observablehq/module-require-debugger"},
              {text: "How to require stubborn modules", link: "/debugging/require-stubborn-modules/require-stubborn-modules.md"}
            ]
          },
          {
            text: "Accounts and Workspaces",
            collapsed: true,
            items: [
              {text: "Creating your account", link: "/accounts-workspaces/create-account/create-account"},
              {text: "Deleting your account", link: "/accounts-workspaces/delete-account/delete-account"},
              {text: "Workspace settings", link: "/accounts-workspaces/workspace-settings/workspace-settings"},
              {text: "Advantages of team workspaces", link: "/accounts-workspaces/team-workspace-advantages/team-workspace-advantages"},
              {text: "Team creation and administration", link: "/accounts-workspaces/team-creation-administration/team-creation-administration"},
              {text: "Using transfer to move notebooks", link: "/accounts-workspaces/transfer-move-notebooks/transfer-move-notebooks"},
              {text: "Custom SSO for Teams", link: "/accounts-workspaces/custom-sso-teams/custom-sso-teams"},
              {text: "Workspace Audit Logs", link: "/accounts-workspaces/workspace-audit-logs/workspace-audit-logs"},
              {text: "Microsoft Teams integration", link: "/accounts-workspaces/microsoft-teams-integration/microsoft-teams-integration"},
              {text: "Profile", link: "/accounts-workspaces/profile/profile"},
              {text: "Trash", link: "/accounts-workspaces/trash/trash"}

            ]
          },
          {
            text: "Security",
            collapsed: true,
            items: [

              {text: "Observable's Security model", link: "/security/data-security-and-privacy"},
              {text: "Security and data access in Observable", link: "/security/security-and-data-access"},
              {text: "Security and data access in Observable", link: "/"},
              {text: "Using secrets with Observable", link: "/security/secrets"}
            ]
          },
          {
            text: "Misc",
            collapsed: true,
            items: [

              {text: "Observable terminology", link: "/misc/observable-terminology/observable-terminology.md"},
              {text: "Observable FAQ", link: "/misc/observable-faq/faq.md"},    
              {text: "Observable FAQ", link: "/"},
              {text: "Standard library", link: "/"},
              {text: "Don't do this!", link: "/"},
              {text: "Keyboard shortcuts", link: "/"},
              {text: "Find and replace", link: "/"}, 
              {text: "Awaiting visibility", link: "/"},
              {text: "Custom notebook URLs", link: "/"},
              {text: "Mixing queries and arrays into SQL", link: "/"}

            ]
          }
        ],
    
    search: {
      provider: "local"
    },
    socialLinks: [
      {icon: "github", link: "https://github.com/observablehq/plot"},
      {icon: "twitter", link: "https://twitter.com/observablehq"},
      {icon: "mastodon", link: "https://vis.social/@observablehq"},
      {icon: "slack", link: "https://observable-community.slack.com/ssb/redirect"},
      {icon: "linkedin", link: "https://www.linkedin.com/company/observable"},
      {icon: "youtube", link: "https://www.youtube.com/c/Observablehq"}
    ],
    footer: {
      copyright: `Copyright ${new Date().getUTCFullYear()} Observable, Inc.`
    }
  },
  ignoreDeadLinks: 'localhostLinks',
})
