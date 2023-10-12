# Awaiting visibility

It's sometimes useful to defer running a cell until it is visible. For example, perhaps you want an animation to start on scroll, rather than via play button. Or perhaps you want to avoid computing an expensive cell when it is offscreen.

Observable's [visibility promise](https://github.com/observablehq/notebook-stdlib/blob/master/README.md#visibility) provides a convenient mechanism for responding to changes in cell visibility: this promise resolves when a cell becomes visible. If the cell is already visible, the promise is immediately resolved. And if the cell is [invalidated](https://github.com/observablehq/notebook-stdlib/blob/master/README.md#invalidation) before it becomes visible, the promise is rejected to avoid wasted effort.

(Under the hood, the visibility promise uses [intersection observers](https://developer.mozilla.org/docs/Web/API/Intersection_Observer_API).)

For example, the greeting "Hello, world!" below will be deferred until the cell itself is visible:

```js
{
  await visibility();
  return md`Hello, world!`;
}
```

You can likewise await visibility repeatedly in a loop, causing an animation to run only when the cell is visible and to pause when the cell is offscreen. 

In the example below, notice that *i* stops incrementing when the *i* cell is offscreen. (This technique works even better with [asynchronous iteration](https://observablehq.com/@mbostock/introduction-to-asynchronous-iteration), though note that not all browsers yet support asynchronous generators.)

<video
    class="screenshot w-70"
    src="./assets/scrollPause.mp4" alt="An iterating value increases when the cell it's created in is in view, but pauses once a user scrolls up or down making the cell not visible."
    autoplay loop playsinline controls = "false">
</video>

For reusable code, pass the visibility function across cells. For example, the *fadeIn* function below takes an *element* and a cell's *visibility* function, and sets the element’s initial opacity to zero; when the cell becomes visible, its opacity is set to one, causing it to fade in.

```js
function fadeIn(element, visibility) {
  element.style.color = "transparent";
  element.style.willChange = "color";
  element.style.transition = "color 2.5s linear";
  visibility().then(() => (element.style.color = "inherit"));
  return element;
}
```

Each paragraph wrapped in the *fadeIn* helper will now fade in as a user scrolls through the page:

<video
    class="screenshot"
    src="./assets/fadeInParagraphs.mp4" alt="As a user scrolls down, paragraph text fades in as the section becomes visible."
    autoplay loop playsinline controls = "false">
</video>