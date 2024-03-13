const { $ } = require("@wdio/globals");

class HelpForm {
  get helpForm() {
    return $(".help-form");
  }

  get buttonSendToBottom() {
    return $(".help-form__send-to-bottom-button");
  }

  async hideHelpForm() {
    (await this.buttonSendToBottom).click();
  }

  async isHelpFormHidden(isHidden) {
    switch (isHidden) {
      case "is":
        await expect(this.helpForm).toHaveAttribute(
          "class",
          expect.stringContaining("is-hidden")
        );
        break;
      case "is not":
        await expect(this.helpForm).not.toHaveAttribute(
          "class",
          expect.stringContaining("is-hidden")
        );
    }
  }
}

module.exports = new HelpForm();
