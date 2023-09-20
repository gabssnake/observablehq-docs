# Searching in Observable

Finding notebooks on Observable can be done using the search option available at the top of every page. With search, you can find your own private notebooks as well as any user's public notebooks. 

You can use the [basic search](#basic-examples):
- Case-insensitive
- Implied AND
- Wildcards
- [Boolean logic](#boolean-operators)
- [Specific user or team](#users-and-teams)
- [Attributes](#attributes) in the query.

Or, you can go to https://observablehq.com/search to use the [expanded search options](#expanded-search-filters).

## Basic examples

Search queries can be entered on any page and are not scoped in any way.  Here are some examples:

<figure>
  <img
    style="margin-bottom:10px;max-width: ${width}"
    src="/collaborating/sharing-work/search/search-hello.png" alt="Search bar in Observable with the word 'Hello' entered."
  />
  </figure>

  Searching for `Hello` matches notebooks with `hello`, `HELLO`, or even `HeLlO`, anywhere in the notebook's cells or title. The match is case-insensitive and words will be matched based on their English stem, so `talking` will match `talk`, for example. If you enclose the search term in double quotes (e.g. "Hello"), then it will not match different variations.

  <figure>
  <img
    style="margin-bottom:10px;max-width: ${width}"
    src="/collaborating/sharing-work/search/search-talk.png" alt="Search bar in Observable with the word 'talk' entered."
  />
  </figure>

  Searching for `talk` matches notebooks with `talk`, `talking`, `talks`, or `talked`.

<figure>
  <img
    style="margin-bottom:10px;max-width: ${width}"
    src="/collaborating/sharing-work/search/search-talked.png" alt="Search bar in Observable with the word 'talked' entered within double quotes."
  />
  </figure>

  Searching for "talked" (within quotation marks) matches only notebooks with `talked`.

  <figure>
  <img
    style="margin-bottom:10px;max-width: ${width}"
    src="/collaborating/sharing-work/search/search-hello-world.png" alt="Search bar in Observable with the words 'Hello, world'."
  />
  </figure>

  Searching for `Hello, world` matches notebooks that have both the words `hello` and `world` in them, but the words don't have to be in order or next to each other. When multiple words are entered in search, there is an implied **AND** between them.

  <figure>
  <img
    style="margin-bottom:10px;max-width: ${width}"
    src="/collaborating/sharing-work/search/search-hello-prefix.png" alt="Search bar in Observable with 'Hello*' entered."
  />
  </figure>

  Searching for `Hello*` matches notebooks that have the words `hello` or `hellojello` and any other notebook with a word that starts with `hello`. A search term with a  `*` appended to it implies a *prefix* match. The `*` can only appear at the end of the word, not at the beginning or somewhere in the middle. `hex*` will match `hex`, `hexbin`, `hexagon`, `hexadecimal`.

  ## Phrases

Words inside of quotes (single or double) match notebooks where those words appear consecutively. These are *phrase* searches. 

  <figure>
  <img
    style="margin-bottom:10px;max-width: ${width}"
    src="/collaborating/sharing-work/search/search-phrase.png" alt="Search bar in Observable with 'hello world' entered within double quotes."
  />
  </figure>

Searching for "hello world" matches notebooks where "hello" and "world" appear consecutively. As noted above, search terms inside of quotes must match more closely than unquoted ones. Because punctuation is generally ignored, this will also match `hello.world` or `hello/world`. 

<figure>
  <img
    style="margin-bottom:10px;max-width: ${width}"
    src="/collaborating/sharing-work/search/search-d3-create.png" alt="Search bar in Observable with 'd3.create' entered."
  />
  </figure>

Searching for `d3.create` will similarly match notebooks where `d3` and `create` appear consecutively. Hyphens and slashes work similarly, so you could get the same results using "d3 create", `d3-create`, or `d3/create`. 

## Boolean operators

Search terms can be combined using `AND`, `OR`, and `NOT` operators which can be written using all-caps, or as the symbols `&`, `|`, and `-`.

<figure>
  <img
    style="margin-bottom:10px;max-width: ${width}"
    src="/collaborating/sharing-work/search/search-hello-and-world.png" alt="Search bar in Observable with 'hello & world' entered."
  />
  </figure>

  Searching for `hello & world` matches notebooks with both the terms `hello` and `world`. `AND` is the default behavior when multiple terms are specified together, so this is the same as just `hello world`. This can also be written as `hello AND world`.

<figure>
  <img
    style="margin-bottom:10px;max-width: ${width}"
    src="/collaborating/sharing-work/search/search-hello-or-world.png" alt="Search bar in Observable with 'hello | world' entered."
  />
  </figure>

  Searching for `hello | world ` matches notebooks with either `hello` or `world` in them. This could also be written as `hello OR world`.

  <figure>
  <img
    style="margin-bottom:10px;max-width: ${width}"
    src="/collaborating/sharing-work/search/hello-negate-world.png" alt="Search bar in Observable with 'hello -world' entered."
  />
  </figure>

Searching for `hello -world` matches notebooks containing the word `hello` that do not also contain the word `world`. This could also be written as `hello & -world`.

  <figure>
  <img
    style="margin-bottom:10px;max-width: ${width}"
    src="/collaborating/sharing-work/search/search-boolean.png" alt="Search bar in Observable with '(hello world) | (goodnight moon)' entered."
  />
  </figure>

Boolean operators can be combined and grouped using parentheses.
This example matches notebooks that either contain both `hello` and `world`, or contain both `goodnight` and `moon`.

## Users and teams

Users on Observable have a *user name* and a *display name*. The user name looks like "@mbostock" and is part of the URL path to public notebooks. The display name is part of the user's profile and is typically the user's full name. Both the user name and display name can be searched for.

<figure>
  <img
    style="margin-bottom:10px;max-width: ${width}"
    src="/collaborating/sharing-work/search/search-user.png" alt="Search bar in Observable with '@mbostock' entered."
  />
  </figure>

  Searching for a user name matches notebooks for which the name (`@mbostock` above) is either an author or current owner. (The author and owner of a notebook is usually the same, but can be different if the notebook was transferred into or out of a team or collaborated on with multiple users at some point).

  <figure>
  <img
    style="margin-bottom:10px;max-width: ${width}"
    src="/collaborating/sharing-work/search/search-team.png" alt="Search bar in Observable with '@observablehq' entered."
  />
  </figure>

  Teams also have user names, and can be searched for in the same way. The query above would match all notebooks that are owned by the `@observablehq` team.

<figure>
  <img
    style="margin-bottom:10px;max-width: ${width}"
    src="/collaborating/sharing-work/search/search-fozzie-bear.png" alt="Search bar in Observable with 'Fozzie Bear' entered in double quotes."
  />
  </figure>

  Searching for "Fozzie Bear" matches notebooks that contain the words "Fozzie Bear" **and** all of the notebooks created or owned by the user with the display name "Fozzie Bear". Note that this example uses quotes around the words, which means that they have to appear consecutively in either the body of the notebook or in the user's display name. Punctuation is ignored, so "Bear Fozzie" would match notebooks that have citations like "Bear, Fozzie".

## Tags

You can specifically search for notebook tags by adding a pound sign (`#`) before a word.

<figure>
  <img
    style="margin-bottom:10px;max-width: ${width}"
    src="/collaborating/sharing-work/search/search-tags-sql.png" alt="Search bar in Observable with '#sql' entered."
  />
  </figure>

  Searching for `#sql` matches notebooks that contain the tag `sql`.

  <figure>
  <img
    style="margin-bottom:10px;max-width: ${width}"
    src="/collaborating/sharing-work/search/search-tags-sql-oracle.png" alt="Search bar in Observable with '#sql oracle' entered."
  />
  </figure>

  You can restrict a search to the notebooks with a specific tag by combining search terms. In this case, the result will include notebooks containing the word "oracle" that also have the tag `sql`.

## Attributes

Attributes are query terms that look like `attribute:value` where `attribute` is one of a set of defined attributes of a notebook.

<figure>
  <img
    style="margin-bottom:10px;max-width: ${width}"
    src="/collaborating/sharing-work/search/search-owner-mbostock.png" alt="Search bar in Observable with 'owner: @mbostock' entered."
  />
</figure>

Searching for `owner:@mbostock` matches notebooks for which `@mbostock` is either the creator or current owner. The `owner:` part of the query makes this an *attribute* search.

<figure>
  <img
    style="margin-bottom:10px;max-width: ${width}"
    src="/collaborating/sharing-work/search/search-title-enigma-machine.png" alt="Search bar in Observable with 'title:'Enigma machine'' entered. The 'Enigma machine' phrase is in double quotes."
  />
</figure>

This query above matches notebooks with the words `Enigma` and `machine` in the title. Because the words are quoted, they must appear consecutively in the title; this would not match a notebook with the title "Enigma was a machine", for example.

You can restrict a search to the notebooks in a single collection using the `collection` attribute. 

<figure>
  <img
    style="margin-bottom:10px;max-width: ${width}"
    src="/collaborating/sharing-work/search/search-collection-1.png" alt="Search bar in Observable with 'collection:my-favorites hello' entered."
  />
</figure>

In the search query above, the result will include notebooks containing the word "hello" that are also in your collection named "my-favorites". The collection name can be either the short name that appears in the browser Url when you navigate to the collection, as in this example, or can be the full name displayed on the page, but if there are spaces in the full name, then the name needs to be in quotes.

<figure>
  <img
    style="margin-bottom:10px;max-width: ${width}"
    src="/collaborating/sharing-work/search/search-collection-2.png" alt="Search bar in Observable with 'collection:'my favorites' hello' entered, with the 'my favorites' in double quotes."
  />
</figure>

If you want the search results to include all of the notebooks in a collection, and also include all the notebooks in any nested collections, use the `collections` attribute, like this:

<figure>
  <img
    style="margin-bottom:10px;max-width: ${width}"
    src="/collaborating/sharing-work/search/search-nested-collections.png" alt="Search bar in Observable with 'collections:my-favorites hello' entered."
  />
</figure>

If the collection you want to specify belongs to a team, or it is a public collection of a different user, you can specify the owner's name like this:

<figure>
  <img
    style="margin-bottom:10px;max-width: ${width}"
    src="/collaborating/sharing-work/search/search-team-collection.png" alt="Search bar in Observable with 'collections:@observablehq/getting-data-in-and-out databricks' entered."
  />
</figure>

Here are the attributes that can be searched for:

|Attribute|Description|
|---------|-----------|
|`author:name`   |Alias for \`creator\`, matches the user or display name of the notebook's author|
|`author:@name`   |Alias for \`creator\`, matches the username of the notebook's author|
|`collection:my-favorites`|Matches notebooks that are in one of the user's collections|
|`collection:@name/their-favorites`|Matches notebooks that are in one of @name's collections|
|`creator:name`  |Matches notebooks where the initial creator's user name or display name is \`name\`|
|`creator:@name`  |Matches notebooks where the user name is \`@name\`|
|`owner:name`    |Matches the user or display name of the notebook's current owner|
|`owner:@name`    |Matches only the user name of the notebook's current owner|
|`share:private` |Matches notebooks that are not public or unlisted and have not been shared|
|`share:shared` |Matches notebooks that are not public or unlisted and have been shared with an individual|
|`share:team` |Matches notebooks that are not public or unlisted and have been shared with a team|
|`tag:tagName`|Matches notebooks that have the tag \`tagName\`|
|`team:name` |Matches notebooks that are owned by the team with the specified user or display name|
|`team:@name` |Matches notebooks that are owned by the team with the specified username|
|`title:word`|Matches notebooks with the given \`word\` in their title|
|`is:public`|Matches notebooks that are public (includes published notebooks)|
|`is:private`|Matches notebooks that are not public or unlisted|
|`is:team`|Matches notebooks that are owned by a team|
|`is:unlisted`|Matches notebooks that are public unlisted (includes published unlisted)  |
|`is:user`|Matches notebooks that are owned by a user (not a team)|

Older search attributes that still work, but apply only to notebooks created under the legacy publishing model:

|Attribute|Description|
|---------|-----------|
|`is:published`|Matches notebooks that are published|
|`is:linkshared`|Matches notebooks that are link-shared|

## Expanded search filters

When you get an initial set of search results, there is a link at the bottom of the results that would take you to the main search page, which includes additional search options.

<figure>
  <img
    style="border-radius:2px;box-shadow:0 4px 12px rgba(0,0,0,0.15), 0 0 0 1px rgba(0, 0, 0, 0.1);margin-left:27px;margin-bottom:40px;max-width: 80%"
    src="/collaborating/sharing-work/search/initialSearchResults.png" alt="Screen shot of example search results showing a number of Observable notebooks, and a highlighted button at the bottom of the window that reads 'View all 21 results' where a user can click to see more search results." />
  <figcaption>Click the link to results to view the expanded search filters.</figcaption>
</figure>

The expanded search filters appear alongside the search results.

<figure>
  <img
    style="border-radius:2px;box-shadow:0 4px 12px rgba(0,0,0,0.15), 0 0 0 1px rgba(0, 0, 0, 0.1);margin-left:27px;margin-bottom:40px;max-width: 50%"
    src="/collaborating/sharing-work/search/FreeExpandedSearch.png" alt="Screen shot of the expanded search options that are revealed when you choose to view all results." />
  <figcaption>Expanded search filters.</figcaption>
</figure>

You can then narrow your search by creator, by team, and by title.

If you have access to a Pro or Enterprise workspace, you can use even more search filters:

<figure>
  <img
    style="border-radius:2px;box-shadow:0 4px 12px rgba(0,0,0,0.15), 0 0 0 1px rgba(0, 0, 0, 0.1);margin-left:27px;margin-bottom:40px;max-width: 50%"
    src="/collaborating/sharing-work/search/ProSearch.png" alt="Screen shot of the expanded search options for Pro and Enterprise workspaces, which includes additional search options like notebook access." />
  <figcaption>Expanded search filters for Pro and Enterprise users.</figcaption>
</figure>