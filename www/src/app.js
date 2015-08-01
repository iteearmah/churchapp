var page = tabris.create("Page", {
  title: "Tabris.js Theming",
  topLevel: true
});

tabris.create("CheckBox", {
  text: "Custom Theme",
  layoutData: {left: 16, top: 16}
}).appendTo(page);

page.open();