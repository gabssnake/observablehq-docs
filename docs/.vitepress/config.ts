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
          {text: "A taste of Observable", link: "/"},
          {text: "Learning Observable", link: "/"},
          {text: "Enterprise and Pro team onboarding", link: "/"},
          {text: "Interactive tutorials", link: "/"},
          {text: "Quickguides", link: "/"}
        ]
      },
      {
        text: "Cells",
        collapsed: true,
        items: [
          {text: "Adding cells", link: "/cells/addingcells.md"},
          {text: "Cell Modes",
          collapsed: true,
           items: [
             {text: "JavaScript",
             collapsed: true,
              items: [
                {text: "Introduction to Code", link: "/"},
                {text: "Observable JavaScript", link: "/"},
                {text: "Require in Observable", link: "/"}
              ]
             },
             {text: "Text", link: "/"},
             {text: "Data Table", link: "/"},
             {text: "Chart", link: "/"},
             {text: "HTML", link: "/"},
             {text: "SQL", link: "/"},
             {text: "Mathematical", link: "/"}
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
                {text: "File attachments", link: "/"},
                {text: "Supported file types",
                collapsed: true,
                 items: [
                  {text: "XLSX", link: "/"},
                  {text: "JSON", link: "/"},
                  {text: "CSV", link: "/"},
                  {text: "ZIP", link: "/"},
                  {text: "SQLite", link: "/"},
                  {text: "DuckDB", link: "/"},
                  {text: "Apache Arrow", link: "/"},
                  {text: "Apache Parquet", link: "/"}
                 ]
                },
                {text: "Cloud files", link: "/"},
                {text: "Supported integrations",
                collapsed: true,
                 items: [
                  {text: "Microsoft Teams", link: "/"},
                  {text: "Google Drive", link: "/"}

                 ]
                }
              ]

            },
            {
              text: "Databases",
              collapsed: true,
              items: [
                {text: "Connecting to databases", link: "/"},
                {text: "Database panel and schema viewer", link: "/"},
                {text: "Self-hosted proxies", link: "/"},
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
              {text: "Using inputs in Observable", link: "/"},
              {text: "Input types",
              collapsed: true,
               items: [
                 {text: "Button", link: "/"},
                 {text: "Toggle", link: "/"},
                 {text: "Checkbox", link: "/"},
                 {text: "Radio", link: "/"},
                 {text: "Range", link: "/"},
                 {text: "Select", link: "/"},
                 {text: "Text", link: "/"},
                 {text: "Textarea", link: "/"},
                 {text: "Date/Datetime", link: "/"},
                 {text: "Color", link: "/"},
                 {text: "Search", link: "/"},
                 {text: "Table", link: "/"},
                 {text: "File", link: "/"},
                 {text: "Form", link: "/"}
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
              {text: "Embed a notebook in a React app", link: "/"},
              {text: "Auto-resizing embed", link: "/"},
              {text: "API and notebook keys", link: "/"},
              {text: "Troubleshooting embedding", link: "/"}

            ]
          },
          {
            text: "Saving and History",
            collapsed: true,
            items: [
              {text: "How saving works", link: "/"},
              {text: "Notebook history", link: "/"}
            ]
          },
          {
            text: "Collaborating",
            collapsed: true,
            items: [
              {text: "Sharing work",
              collapsed: true,
               items: [
                {text: "Sharing", link: "/"},
                {text: "Searching", link: "/"},
                {text: "Pausing live edits in public notebooks", link: "/"},
                {text: "Tags: Organizing work"},
                {text: "Licenses"}
               ]
              },
              {text: "Comments", link: "/"},
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
              {text: "Observable's Security model", link: "/"},
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
  }
})
