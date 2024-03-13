const { Given, When, Then } = require("@wdio/cucumber-framework");
const { expect, $ } = require("@wdio/globals");

const HelpForm = require("../../pageobjects/help.form");

When("User hides Help form", async () => {
  await HelpForm.hideHelpForm();
});

Then(/^Help form (is|is not) hidden$/, async (isHidden) => {
  await HelpForm.isHelpFormHidden(isHidden)
});