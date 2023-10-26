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
      {text: "Observable", link: "https://observablehq.com/"},
      {text: "Forum", link: "https://talk.observablehq.com/"},
    ],
    sidebar: [
      {
        text: "Getting Started",
        items: [
          {text: "Overview", link: "/learn/overview" },
          {text: "Hands-on tutorials", link: "https://observablehq.com/@observablehq/hands-on-tutorials-overview"},
          {text: "Quick guides", link: "https://observablehq.com/guides"}
        ]
      },
      {
        text: "Cells",
        collapsed: true,
        link: "/cells/",
        items: [
             {text: "JavaScript",
             link: "/cells/javascript",
             collapsed: true,
              items: [
                {text: "Observable JavaScript", link: "/cells/observable-javascript"},
                {text: "Require", link: "/cells/require"}
              ]
             },
             {text: "Text", link: "/cells/text"},
             {text: "Data table", link: "/cells/data-table"},
             {text: "Chart", link: "/cells/chart"},
             {text: "HTML", link: "/cells/html"},
             {text: "SQL", link: "/cells/sql"},
             {text: "TeX", link: "/cells/tex"},
             {text: "AI Assist", link: "/ai-assist/"}
           ]
        },
        {
            text: "Data",
            collapsed: true,
            link: "/data/",
           items: [
            { 
              text: "Files",
              collapsed: true,
              items: [
                {text: "File attachments", link: "/data/files/file-attachments",
                collapsed: true,
                 items: [
                  {text: "Apache Arrow", link: "/data/files/file-attachments#apache-arrow-files"},
                  {text: "Apache Parquet", link: "/data/files/file-attachments#apache-parquet-files"},
                  {text: "Binary", link: "/data/files/file-attachments#binary-files"},
                  {text: "CSV", link: "/data/files/file-attachments#csv-files"},
                  {text: "Image", link: "/data/files/file-attachments#image-files"},
                  {text: "JSON", link: "/data/files/file-attachments#json-files"},
                  {text: "SQLite", link: "/data/files/file-attachments#sqlite"},
                  {text: "TSV", link: "/data/files/file-attachments#tsv-files"},
                  {text: "Video", link: "/data/files/file-attachments#video-files"},
                  {text: "XLSX", link: "/data/files/file-attachments#xlsx-files"},
                  {text: "ZIP", link: "/data/files/file-attachments#zip-files"},
                 ]
                },
              {text: "Cloud files", link: "/data/files/cloud-files.md"}
              ]
            },
            {
              text: "Databases",
              collapsed: true,
              link: "/data/databases/overview",
              items: [
                {text: "Database pane", link: "/data/databases/databases-pane-schema-viewer"},
                {text: "Self-hosted proxies", link: "/data/databases/self-hosted-proxies"},
               {text: "Database clients",
                collapsed: true,
                 items: [
                  {text: "Amazon Red Shift", link: "/data/databases/database-clients#amazon-redshift-postgresql-driver"},
                  {text: "BigQuery", link: "/data/databases/database-clients#bigquery"},
                  {text: "Databricks", link: "/data/databases/database-clients#databricks"},
                  {text: "Datasette", link: "/data/databases/database-clients#datasette"},
                  {text: "Dolt", link: "/data/databases/database-clients#dolt"},
                  {text: "DuckDB", link: "/data/databases/database-clients#duckdb"},
                  {text: "HEAVY.AI", link: "/data/databases/database-clients#heavy-ai"},
                  {text: "MariaDB", link: "/data/databases/database-clients#mariadb-mysql-driver"},
                  {text: "Mongo SQL", link: "/data/databases/database-clients#mongo-sql"},
                  {text: "MySQL", link: "/data/databases/database-clients#mysql"},
                  {text: "Oracle", link: "/data/databases/database-clients#oracle"},
                  {text: "PostgreSQL", link: "/data/databases/database-clients#postgresql"},
                  {text: "QuestDB", link: "/data/databases/database-clients#questdb"},
                  // {text: "Seafowl", link: "/data/databases/database-clients#seafowl"},
                  {text: "Snowflake", link: "/data/databases/database-clients#snowflake"},
                  {text: "SQL Server", link: "/data/databases/database-clients#sql-server"},
                  {text: "SQLite", link: "/data/databases/database-clients#sqlite"},
                  {text: "Trino/Presto", link: "/data/databases/database-clients#trino-presto"},
                 ]},
                 {text: "Custom Database Clients", link: "/data/databases/databaseclient-specification"},
                
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
                {text: "Curated datasets", link: "https://observablehq.com/@observablehq/curated-datasets"},
                {text: "Sample datasets", link: "https://observablehq.com/@observablehq/sample-datasets"},
              ]
            }
           
           ],
          },
          {
            text: "Inputs",
            collapsed: true,
            link: "/inputs/overview",
            items: [
              {text: "Button", link: "/inputs/overview#button"},
              {text: "Checkbox", link: "/inputs/overview#checkbox"},
              {text: "Color", link: "/inputs/overview#color"},
              {text: "Date/Datetime", link: "/inputs/overview#date"},
              {text: "File", link: "/inputs/overview#file"},
              {text: "Form", link: "/inputs/overview#and-more"},
              {text: "Radio", link: "/inputs/overview#radio"},
              {text: "Range", link: "/inputs/overview#range"},
              {text: "Search", link: "/inputs/overview#search"},
              {text: "Select", link: "/inputs/overview#select"},
              {text: "Table", link: "/inputs/overview#table"},
              {text: "Text", link: "/inputs/overview#text"},
              {text: "Textarea", link: "/inputs/overview#textarea"},
              {text: "Toggle", link: "/inputs/overview#toggle"},
            ]
          },
          {
            text: "Notebooks",
            link: "/notebooks/",
            collapsed: true,
            items: [
              {text: "Collections", link: "/notebooks/collections"},
              {
                text: "Debugging",
                collapsed: true,
                items: [
                  {text: "Safe mode", link: "/debugging/safe-mode"},
                  {text: "Minimap", link: "/debugging/minimap"},
                  {text: "Module require debugger", link: "https://observablehq.com/@observablehq/module-require-debugger"},
                  {text: "How to require stubborn modules", link: "/debugging/require-stubborn-modules"}
                ]
              },
              {text: "Forking", link: "/notebooks/forking"},
              {text: "History", link: "/notebooks/history"},
              {text: "Imports", link: "/notebooks/imports"},
              {text: "URLs", link: "/notebooks/urls"},
              {text: "Saving", link: "/notebooks/saving"},
              {text: "Templates",link: "/notebooks/templates"}
            ]
          },
          {
            text: "Embeds",
            link: "/embeds/",
            collapsed: true,
            items: [
              {text: "Advanced embeds", link: "/embeds/advanced"},
              {text: "API and notebook keys", link: "/embeds/api-keys"},
              {text: "Embed in a React app", link: "/embeds/how-to-embed-a-notebook-in-a-react-app"},
              {text: "Troubleshooting", link: "/embeds/troubleshooting"}
            ]
          },
          {
            text: "Collaboration",
            collapsed: true,
            link: "/collaboration/",
            items: [
              {text: "Comments", link: "/collaboration/comments"},
              {text: "Following", link: "/collaboration/following-users-and-teams"},
              {text: "Sharing",
                link: "/collaboration/sharing",
                collapsed: true,
                items: [
                  {text: "Licenses", link: "/collaboration/licenses"},
                  {text: "Pause live edits", link: "/collaboration/pause-live-edits"},
                  {text: "Search", link: "/collaboration/search"},
                  {text: "Tags", link: "/collaboration/tags"},
                ]
              },
              {text: "Suggestions", link: "/collaboration/suggestions"},
              {text: "Tinker mode", link: "/collaboration/tinker-mode"}
            ]
          },
          {
            text: "Accounts and Workspaces",
            collapsed: true,
            items: [
              {text: "Accounts", link: "/accounts-workspaces/accounts"},
              {text: "Custom SSO", link: "/accounts-workspaces/custom-sso"},
              {text: "Permissions", link: "/accounts-workspaces/permissions"},
              {text: "Profile", link: "/accounts-workspaces/profile"},
              {text: "Transfer", link: "/accounts-workspaces/transfer"},
              {text: "Trash", link: "/accounts-workspaces/trash"},
              {text: "Workspaces", link: "/accounts-workspaces/workspaces",
                collapsed: true,
                items: [
                  {text: "Audit logs", link: "/accounts-workspaces/workspace-audit-logs"},
                  {text: "Setup", link: "/accounts-workspaces/team-creation-administration"},
                  {text: "Settings", link: "/accounts-workspaces/workspace-settings"},
                ]
              },

            ]
          },
          {
            text: "Security",
            collapsed: true,
            items: [
              {text: "Security model", link: "/security/data-security-and-privacy"},
              {text: "Security & data access", link: "/security/security-and-data-access"},
              {text: "Secrets", link: "/security/secrets"}
            ]
          },
          {
            text: "Misc",
            collapsed: true,
            items: [
              {text: "Awaiting visibility", link: "/misc/awaiting-visibility"},
              {text: "FAQ", link: "/misc/faq"},  
              {text: "Keyboard shortcuts", link: "/misc/keyboard-shortcuts"},
              {text: "Microsoft Teams integration", link: "/accounts-workspaces/microsoft-teams-integration"},
              {text: "Observable terminology", link: "/misc/observable-terminology"},  
              {text: "Standard library", link: "/misc/standard-library"},
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
      {icon: "slack", link: "https://observablehq.com/slack/join"},
      {icon: "linkedin", link: "https://www.linkedin.com/company/observable"},
      {icon: "youtube", link: "https://www.youtube.com/c/Observablehq"}
    ],
    footer: {
      copyright: `Copyright ${new Date().getUTCFullYear()} Observable, Inc.`
    },
    editLink: {
      pattern: "https://github.com/observablehq/documentation/edit/main/docs/:path",
      text: "Suggest changes to this page"
    }
  },
  ignoreDeadLinks: "localhostLinks",
})
