const { Given, When, Then } = require("@wdio/cucumber-framework");
const { expect, $ } = require("@wdio/globals");

const HomePage = require("../../pageobjects/home.page");

When("User opens Home page", async () => {
  await HomePage.open();
});

When("User goes to Game page", async () => {
    await HomePage.goToGamePage()
});

Then("Home page is opened", async () => {
  await HomePage.isPageOpened();
});
