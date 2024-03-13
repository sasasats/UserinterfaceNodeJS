const { Given, When, Then } = require("@wdio/cucumber-framework");
const { expect, $ } = require("@wdio/globals");

const SecondCardForm = require("../../pageobjects/card.form.2");

When(/^User choose (\d+) random interests$/, async (numberOfInterests) => {
  await SecondCardForm.chooseInterests(numberOfInterests);
});

When("User unselect all interests", async () => {
  await SecondCardForm.deselectAllInterests();
});
