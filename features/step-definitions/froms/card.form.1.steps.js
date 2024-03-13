const { Given, When, Then } = require("@wdio/cucumber-framework");
const { expect, $ } = require("@wdio/globals");

const FirstCardForm = require("../../pageobjects/card.form.1");

When("Log in to the Card 1", async () => {
  await FirstCardForm.login()
});
