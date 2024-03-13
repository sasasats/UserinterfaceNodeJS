const { $ } = require("@wdio/globals");
const Page = require("./page");

class GamePage extends Page {
  get timer() {
    return $(".timer");
  }

  get labelPageIndicator() {
    return $(".page-indicator");
  }

  async doesTimerStartFrom0() {
    await expect(this.timer).toHaveText("00:00:00");
  }

  open() {
    return super.open("game.html");
  }

  isPageOpened() {
    return super.isPageOpened(this.timer);
  }
}

module.exports = new GamePage();
