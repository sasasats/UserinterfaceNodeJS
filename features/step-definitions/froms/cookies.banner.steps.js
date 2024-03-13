const { Given, When, Then } = require("@wdio/cucumber-framework");
const { expect, $ } = require("@wdio/globals");

const CookiesBanner = require("../../pageobjects/cookies.banner");

When("User accept cookies", async () => {
  await CookiesBanner.acceptCookies()
});

Then(/^Cookies banner (is|is not) displayed$/, async (isDisplayed) => {
  await CookiesBanner.isCookiesBannerDisplayed(isDisplayed)
});
