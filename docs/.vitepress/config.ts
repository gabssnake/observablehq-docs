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
    // https://vitepress.dev/reference/default-theme-config
    logo: {
      light: "/observable-light.svg",
      dark: "/observable-dark.svg"
    },
    nav: [
      {text: "Home", link: "/"},
      {text: "Examples", link: "/markdown-examples"}
    ],
    sidebar: [
      {
        text: "Examples",
        items: [
          {text: "Markdown Examples", link: "/markdown-examples"},
          {text: "Runtime API Examples", link: "/api-examples"}
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
