const { $ } = require("@wdio/globals");

class CardForm {
  get labelPageIndicator() {
    return $(".page-indicator");
  }

  async isCardDisplayed(cardNumber) {
    await expect(this.labelPageIndicator).toHaveText(`${cardNumber} / 4`);
  }
}

module.exports = new CardForm();
