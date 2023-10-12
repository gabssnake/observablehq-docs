import DefaultTheme from "vitepress/theme-without-fonts";
import {useData} from "vitepress";
import {watch} from "vue";
import "./custom.css";
import PricingBadge from "./PricingBadge.vue";
import Icon from "./Icon.vue";
import Keys from "./Keys.vue";

export default {
  extends: DefaultTheme,
  enhanceApp({app, router}) {
    Object.defineProperty(app.config.globalProperties, "$dark", {get: () => useData().isDark.value});
    app.component('PricingBadge', PricingBadge);
    app.component('Icon', Icon);
    app.component('Keys', Keys);
    enableAnalytics(router);
  }
};

function enableAnalytics(router) {
  if (typeof location === "undefined" || location.origin !== "https://observablehq.com") return;

  let pageLoaded;
  let queue: any[] | null = [];
  let user;

  watch(router.route, () => {
    if (pageLoaded) {
      emit({
        type: "routeChanged",
        event_version: 2,
        data: {},
        tags: {}
      });
    } else {
      emit({
        type: "pageLoad",
        event_version: 1,
        data: {referrer: document.referrer.replace(/\?.*/, "")},
        tags: {}
      });
      pageLoaded = true;
    }
  });

  fetch("https://api.observablehq.com/user", {credentials: "include"})
    .then((response) => (response.ok ? response.json() : null))
    .then(
      (u) => (user = u),
      () => (user = null)
    )
    .then(() => (sendEvents(queue), (queue = null)));

  function emit(event) {
    event.time = new Date().toISOString();
    event.location = `${location.origin}${location.pathname}${location.search}`; // drop hash
    if (queue) queue.push(event);
    else sendEvents([event]);
  }

  function sendEvents(events) {
    if (!events.length) return;
    navigator.sendBeacon(
      "https://events.observablehq.com/beacon-events",
      JSON.stringify({
        events: events.map((event) => ({
          ...event,
          release: null,
          user_id: user?.id ?? null,
          user_agent: navigator.userAgent
        })),
        send_time: new Date().toISOString()
      })
    );
  }
}
