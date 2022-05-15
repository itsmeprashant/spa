import { registerApplication, start } from "single-spa";

/* registerApplication({
  name: "@single-spa/welcome",
  app: () =>
    System.import(
      "https://unpkg.com/single-spa-welcome/dist/single-spa-welcome.js"
    ),
  activeWhen: ["/"],
}); */

registerApplication({
  name: "@test/sub1",
  app: () => System.import("@test/sub1"),
  activeWhen: ["/sub1"],
});

registerApplication({
  name: "@test/sub2",
  app: () => System.import("@test/sub2"),
  activeWhen: ["/sub2"],
});

start({
  urlRerouteOnly: true,
});
