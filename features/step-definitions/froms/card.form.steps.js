const { Given, When, Then } = require("@wdio/cucumber-framework");
const { expect, $ } = require("@wdio/globals");

const CardForm = require("../../pageobjects/card.form");

Then(/^Card (.*) is displayed$/, async (cardNumber) => {
  await CardForm.isCardDisplayed(cardNumber);
});
