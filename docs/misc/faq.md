# Observable FAQ

## Working in Observable notebooks

### How do I get data into a notebook? 
See our collection on [Getting data in and out of notebooks](https://observablehq.com/collection/@observablehq/getting-data-in-and-out) to learn how to quickly get data from multiple sources into a notebook.

### What JavaScript libraries can I use in Observable notebooks?
Observable's [Standard Library](/misc/standard-library) makes commonly used libraries for working with and visualizing data available for use by default. You can use thousands of additional open source JavaScript modules in your notebooks with Observable [require](https://github.com/observablehq/stdlib/blob/master/README.md#require).

### How is Observable JavaScript different from vanilla JavaScript?

JavaScript on Observable is almost—but not entirely—vanilla. For dataflow, Observable needed to change JavaScript in a few ways. Learn about the differences in [Observable JavaScript](/cells/observable-javascript). 

### How can I set a custom URL for my notebook? 
See [Setting a notebook's URL](/notebooks/urls).

### I deleted a notebook. Can I restore it? 
If you've deleted a notebook, you can restore it for up to 30 days. To restore a recently deleted notebook, go to Trash (from your homepage) and choose "Move out of trash" in the menu for any notebooks you want to restore.

### Is there a list of keyboard shortcuts?
Yes! Here's a guide to [keyboard shortcuts](/misc/keyboard-shortcuts) in Observable notebooks.

## Security and privacy

See our [Security and privacy](/security/data-security-and-privacy) and [Security and data access in Observable](/security/security-and-data-access) documentation.

### Can I install Observable for use offline or inside a firewall? 
Observable can't be installed, used offline, or inside a firewall. However, you can use Observable for secure and sensitive data work. When you access data from local or cloud files, APIs, or self-hosted databases, your data doesn’t touch Observable’s servers. Read more about [Observable's security model](/security/data-security-and-privacy).

### What is Observable's data security policy? 
[Observable's security model](/security/data-security-and-privacy) describes how Observable restricts access to your private information. 

### Can I securely connect to a database? 
Yes. Observable's hosted database clients rely on an HTTPS-to-database proxy, which allows your browser to securely run SQL queries against databases that are accessible from the public internet.

If your database isn't accessible from the public internet, or if you simply don't wish to share any database credentials with Observable, we also provide a database proxy that you can run yourself. By connecting directly from your browser to the proxy, your private notebooks can access databases on private networks or local computers. That traffic never goes over the public internet, and you don't need to trust Observable with any database credentials. Learn more at [Self-hosted database proxies](/data/databases/self-hosted-proxies) and [Security and data access in Observable](/security/data-security-and-privacy).

## Collaboration and sharing

### How do I add team members to notebooks? 
See our [Sharing documentation](/collaboration/sharing) to learn about adding team members and setting permissions so they can view or edit notebooks with you.

### Can I share things I make in Observable notebooks elsewhere?
Yes! You can quickly [embed notebook content](/embeds/) in another website. Observable notebooks can also be [compiled and downloaded as JavaScript modules](/embeds/advanced). Download SVGs or PNGs of your notebook charts using options Cell menu (three vertical dots) at the top left of a cell. 

### Can I store or use different versions of notebooks?
Observable's built-in version history (accessed by clicking on the History pane icon <svg style="display: inline !important;" width="16" height="16" viewBox="0 0 16 16" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><path d="M8 14C11.3137 14 14 11.3137 14 8C14 4.68629 11.3137 2 8 2C4.68629 2 2 4.68629 2 8C2 11.3137 4.68629 14 8 14ZM8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16Z"></path><path d="M7 3H9V7.58579L11.2071 9.79289L9.79289 11.2071L7 8.41421V3Z"></path></svg> in the right margin) automatically stores versions of a notebook as you iterate. You can see differences between versions, and even revert back to a previous version, through the history pane. You can use [version locking](/notebooks/imports#version-locking) to specify which version of a notebook to import _from_.

## User support and feedback

### Where can I ask questions and find answers from other users? 
The Observable [Community Forum](https://talk.observablehq.com/) and [Community Slack workspace](https://observablehq.com/slack/join) are great places to ask questions and find answers from members of the Observable community.

### How can I report a bug or request a feature? 
We welcome you to share bug reports, feature requests, and feedback as issues in our [public feedback repository on GitHub](https://github.com/observablehq/feedback).

### I need to delete my account. Can you help? 
See our [Deleting your account](/accounts-workspaces/accounts#delete-an-account) for information on deleting your account (and what gets removed along with it). If you need help, please send an email to support@observablehq.com.

## General questions about Observable

### How is Observable related to D3?

[D3](https://d3js.org/) is an open-source JavaScript library for data visualization. Observable is an online platform for writing and publishing data work—including D3 data visualizations built with D3. You can also work with any JavaScript library that runs in the browser in an Observable notebooks.