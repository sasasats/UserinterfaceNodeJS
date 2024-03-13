const { $ } = require("@wdio/globals");
const Page = require("./page");

class HomePage extends Page {
  get linkStart() {
    return $(".start__link");
  }

  open() {
    return super.open("");
  }

  isPageOpened() {
    return super.isPageOpened(this.linkStart);
  }

  async goToGamePage() {
    await this.linkStart.click()
  }
}

module.exports = new HomePage();
