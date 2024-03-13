const { Before, After } = require("@wdio/cucumber-framework");
const { browser } = require("@wdio/globals");

Before(async function () {
  await browser.maximizeWindow();
});

After(async function () {
  await browser.closeWindow();
});
