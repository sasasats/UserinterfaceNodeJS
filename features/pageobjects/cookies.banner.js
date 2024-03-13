const { $ } = require("@wdio/globals");

class CookiesBanner {
  get cookiesBanner() {
    return $(".cookies");
  }

  get buttonAcceptCookies() {
    return $(".cookies .button--transparent");
  }

  async acceptCookies() {
    (await this.buttonAcceptCookies).click();
  }

  async isCookiesBannerDisplayed(isDisplayed) {
    switch (isDisplayed) {
      case "is":
        await expect(this.cookiesBanner).toBeDisplayed();
        break;
      case "is not":
        await expect(this.cookiesBanner).not.toBeDisplayed();
        break;
    }
  }
}

module.exports = new CookiesBanner();
