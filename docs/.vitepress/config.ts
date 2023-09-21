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
      {text: "Quickguides", link: "/"}
    ],
    sidebar: [
      {
        text: "Getting Started",
        items: [
          {text: "Why Observable", link: "/"},
          {text: "A taste of Observable", link: "https://observablehq.com/@observablehq/a-taste-of-observable"},
          {text: "Learning Observable", 
          collapsed: true,
           link: "/learn/index.md",
          items: [
           {text: "Overview", link: "/learn/learn-overview/learn-overview.md"}
          ]
          },
          {text: "Enterprise and Pro team onboarding", link: "/"},
          {text: "Interactive tutorials", link: "/"},
          {text: "Quickguides", link: "/"}
        ]
      },
      {
        text: "Cells",
        collapsed: true,
        items: [
          {text: "Adding cells", link: "/cells/addingcells/addingcells.md"},
          {text: "Cell Modes",
          collapsed: true,
           items: [
             {text: "JavaScript",
             collapsed: true,
              items: [
                {text: "JavaScript code in Observable", link: "/cells/cell-modes/js/js-cells/js-code.md"},
                {text: "Observable JavaScript", link: "/cells/cell-modes/js/observable-js/observable-js.md"},
                {text: "Require in Observable", link: "/cells/cell-modes/js/js-require/js-require.md"}
              ]
             },
             {text: "Text", link: "/cells/cell-modes/text/text.md"},
             {text: "Data Table", link: "/cells/cell-modes/data-table/data-table.md"},
             {text: "Chart", link: "/cells/cell-modes/chart/chart-cell.md"},
             {text: "HTML", link: "/"},
             {text: "SQL", link: "/cells/cell-modes/sql/sql-cell.md"},
             {text: "Mathematical", link: "/cells/cell-modes/math/math.md"}
           ]
          }
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
                {text: "File attachments", link: "/data/files/file-attachments/file-attachments.md"},
                {text: "Supported file types",
                collapsed: true,
                 items: [
                  {text: "XLSX", link: "/data/files/file-attachments/file-attachments#xlsx-files"},
                  {text: "JSON", link: "/data/files/file-attachments/file-attachments#json-files"},
                  {text: "CSV", link: "/data/files/file-attachments/file-attachments#csv-files"},
                  {text: "ZIP", link: "/data/files/file-attachments/file-attachments#zip-files"},
                  {text: "SQLite", link: "/data/files/file-types/sqlite/sqlite.md"},
                  {text: "DuckDB", link: "/data/files/file-types/duckdb/duckdb.md"},
                  {text: "Apache Arrow", link: "/data/files/file-attachments/file-attachments#arrow-files"},
                  {text: "Apache Parquet", link: "/data/files/file-attachments/file-attachments#parquet-files"}
                 ]
                },
                {text: "Cloud files", link: "/data/files/cloud-files/cloud-files.md"},
                {text: "Supported integrations",
                collapsed: true,
                 items: [
                  {text: "Microsoft Teams", link: "/data/files/supported-integrations/microsoft-teams/microsoft-teams.md"},
                  {text: "Google Drive", link: "/"}

                 ]
                }
              ]

            },
            {
              text: "Databases",
              collapsed: true,
              items: [
                {text: "Connecting to databases", link: "/data/databases/connecting-to-databases/connecting-to-databases.md"},
                {text: "Database pane and schema viewer", link: "/data/databases/databases-pane/databases-pane-schema-viewer.md"},
                {text: "Self-hosted proxies", link: "/data/databases/self-hosted-proxies/self-hosted-proxies.md"},
                {text: "DatabaseClient specification", link: "/data/databases/databaseclient-specification/databaseclient-specification.md"},
                {text: "Database clients",
                collapsed: true,
                 items: [
                  {text: "Amazon Red Shift", link: "/"},
                  {text: "BigQuery", link: "/"},
                  {text: "Databricks", link: "/"},
                  {text: "Mongo SQL", link: "/"},
                  {text: "MySQL", link: "/"},
                  {text: "Oracle", link: "/"},
                  {text: "Postgress", link: "/"},
                  {text: "Snowflake", link: "/"},
                  {text: "SQL Server", link: "/"},
                  {text: "SQLite", link: "/"},
                  {text: "DuckDB", link: "/"},
                  {text: "HEAVY.AI", link: "/"},
                  {text: "QuestDB", link: "/"},
                  {text: "Datasette", link: "/"},
                  {text: "Seafowl", link: "/"},
                  {text: "Dolt", link: "/"}
                 ]}
              ]
            },
            {
              text: "APIs",
              collapsed: true,
              items: [
                {text: "AWS S3", link: "/"},
                {text: "Figma", link: "/"},
                {text: "GitHub", link: "/"},
                {text: "Stripe", link: "/"},
                {text: "Bitbucket", link: "/"}
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
            items: [
              {text: "Using inputs in Observable", link: "/inputs/inputs-overview/inputs-overview.md"},
              {text: "Input types",
              collapsed: true,
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
              }
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
              {text: "Basic Embedding", link: "/"},
              {text: "Advanced Embedding and downloading", link: "/"},
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
              {text: "Suggestions", link: "/"},
              {text: "Following users and teams", link: "/"},
              {text: "Tinker mode: temporary edits to a notebook", link: "/"}
            ]
          },
          {
            text: "Debugging",
            collapsed: true,
            items: [
              {text: "Safe mode", link: "/"},
              {text: "Minimap", link: "/"},
              {text: "Module require debugger", link: "/"},
              {text: "How to require stubborn modules", link: "/"}
            ]
          },
          {
            text: "Accounts and Workspaces",
            collapsed: true,
            items: [
              {text: "Creating your account", link: "/"},
              {text: "Deleting your account", link: "/"},
              {text: "Workspace settings", link: "/"},
              {text: "Advantages of team workspaces", link: "/"},
              {text: "Team creation and administration", link: "/"},
              {text: "Using transfer to move notebooks", link: "/"},
              {text: "Custom SSO for Teams", link: "/"},
              {text: "Workspace Audit Logs", link: "/"},
              {text: "Microsoft Teams integration", link: "/"}
            ]
          },
          {
            text: "Security",
            collapsed: true,
            items: [
              {text: "Observable's Security model", link: "/security/data-security-and-privacy"},
              {text: "Security and data access in Observable", link: "/"},
              {text: "Using secrets with Observable", link: "/"}
            ]
          },
          {
            text: "Misc",
            collapsed: true,
            items: [
              {text: "Observable terminology", link: "/"},
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
