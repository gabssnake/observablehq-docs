# Licenses in Observable

As you may already have experienced for yourself, Observable makes it easy to reuse other people’s published work. You can [fork](https://observablehq.com/@observablehq/fork-share-merge) a copy for yourself with a single click, or [import](https://observablehq.com/@observablehq/introduction-to-imports) cells from someone else’s notebook.

But how do you know if it's okay to remix someone's neat visualization and publish it on your blog? Or rely on their notebook to build a piece of a data dashboard for your job? To be clear: Observable's [**terms of service**](https://observablehq.com/terms-of-service#5-license-grant-to-other-users) allow authors to fork and edit published notebooks here on Observable, but beyond that it's up to the notebook authors to decide what kind of use they want to allow.

Adding a license to your notebook is a great way to let other authors and creators on Observable know that it's okay for them to reuse your published work, worry-free. Licenses provide clarity—and legal certainty—for other members of the community, explaining exactly what they are, and are not, allowed to do with your notebook.

If you see a notebook with the [**ISC license**](https://choosealicense.com/licenses/isc/) on it, for example, you can be confident that you're allowed to fork a copy of the visualization, change the color scheme and apply it to your own data, and embed your version on a website as part of your analysis.

## Adding a license

To license your notebook, open the notebook menu (<Icon name="threeHorizDots" />), then Settings, then choose **Set license**.

<figure>
  <img
    style="border-radius:2px;box-shadow:0 4px 12px rgba(0,0,0,0.15), 0 0 0 1px rgba(0, 0, 0, 0.1);margin-left:27px;margin-bottom:40px;max-width: 60%"
    src="/collaborating/sharing-work/licenses/set_license_menu.png" alt="An open menu where a user can choose to add a license to their notebook."
  />
  <figcaption>Add a license through the notebook menu.</figcaption>
</figure>

A dialog will open, allowing you to pick from a short list of popular, free, and open source licenses for your notebook. The copyright notice will auto-fill with the notebook owner’s name and the current year, but is also easily editable.

<figure>
  <img
    style="border-radius:2px;box-shadow:0 4px 12px rgba(0,0,0,0.15), 0 0 0 1px rgba(0, 0, 0, 0.1);margin-left:27px;margin-bottom:40px;max-width: ${width}"
    src="/collaborating/sharing-work/licenses/license-modal.jpg" alt="After clicking 'Set license' a new modal window opens, where a user can enter the license type and additional information as text."
  />
  <figcaption>Setting a license.</figcaption>
</figure>

Now, when someone views your notebook, they can see the license at the top of the page, and can click to read the license and learn more about what it means.

When an author on Observable makes a fork of your notebook, your original license and copyright is preserved by default.

<figure>
  <img
    style="border-radius:2px;box-shadow:0 4px 12px rgba(0,0,0,0.15), 0 0 0 1px rgba(0, 0, 0, 0.1);margin-left:27px;margin-bottom:40px;max-width: ${width}"
    src="/collaborating/sharing-work/licenses/license-header.jpg" alt="License information is visible at the top of the notebook, in this screen shot 'ISC' is shown next to a license icon."
  />
  <figcaption>The license is visible in the notebook header.</figcaption>
</figure>

## Licensing details

Observable currently has built-in support for the following set of licenses:

### Permissive
- [Apache 2.0](https://choosealicense.com/licenses/apache-2.0/)
- [BSD 3-Clause](https://choosealicense.com/licenses/bsd-3-clause/)
- [ISC](https://choosealicense.com/licenses/isc/)
- [MIT](https://choosealicense.com/licenses/mit/)

### Copyleft
- [GNU AGPLv3](https://choosealicense.com/licenses/agpl-3.0/)
- [GNU GPLv3](https://choosealicense.com/licenses/gpl-3.0/)
- [GNU LGPLv3](https://choosealicense.com/licenses/lgpl-3.0/)

### Content
- [Creative Commons Attribution 4.0](https://choosealicense.com/licenses/cc-by-4.0/)
- [Creative Commons Attribution Share Alike 4.0](https://choosealicense.com/licenses/cc-by-sa-4.0/)

In broad strokes, the **permissive** licenses allow other authors to do whatever they like with your notebook—including using it at their job as part of their professional work—as long as they continue to credit your work to you.

The **copyleft** licenses allow other authors to reuse your work, but generally require them to release their modifications and extensions of your work under copyleft licenses as well. There are gradations of when this restriction applies, reflected in the differences between the [GPL](https://choosealicense.com/licenses/gpl-3.0/), [AGPL](https://choosealicense.com/licenses/agpl-3.0/) and [LGPL](https://choosealicense.com/licenses/lgpl-3.0/) licenses.

The **content** Creative Commons licenses are more appropriate for interactive essays and content published Observable, rather than software or algorithmic notebooks. The Attribution license is permissive, and generally allows others to reuse your content freely. The Attribution Share Alike license is more like a copyleft license, and requires remixes of your work to be released under a similar license as well.

If you'd like to use a different license that doesn't appear on this list, that's no problem! Choose **Other** in the license dialog, and add the license directly to the content of your notebook. We will periodically review notebooks published with other licenses, and add built-in support for alternative licenses that have demonstrated wide use by the Observable community.

## Citing notebooks in an academic paper

You can cite an Observable notebook by simply including a link to that notebook in the citation. Since the notebook is your work, it is not necessary (from our perspective) that you cite Observable specifically, but if you'd like to add the notebook to your references, you can list Observable as the site name in your citation.

So for example, using the following format (7th edition APA electronic source):

- *Lastname, F. M. (Year, Month Date). Title of page. Site name. URL*

Your citation might look like this:

 - Palumbo, Sydney. (2022, January 12). Your notebook title. Observable. https://observablehq.com/your-notebook-url
