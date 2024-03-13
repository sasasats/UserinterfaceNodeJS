const { Given, When, Then } = require("@wdio/cucumber-framework");
const { expect, $ } = require("@wdio/globals");

const GamePage = require("../../pageobjects/game.page");

Then("Timer starts from 0", async () => {
  await GamePage.doesTimerStartFrom0();
});
