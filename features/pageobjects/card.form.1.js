const { $ } = require("@wdio/globals");
const RandomUtils = require("../../utils/random.utils");

class FirstCardForm {
  get inputPassword() {
    return $("input[placeholder='Choose Password']");
  }

  get inputEmail() {
    return $("input[placeholder='Your email']");
  }

  get inputDomain() {
    return $("input[placeholder='Domain']");
  }

  get dropdownOpenerDomain() {
    return $(".dropdown__opener");
  }

  get dropdownItemsDomain() {
    return $$("div[class='dropdown__list-item']");
  }

  get checkboxTerms() {
    return $(".checkbox__box");
  }

  get buttonNext() {
    return $("a[class='button--secondary']");
  }

  async login() {
    let password = RandomUtils.getRandomPassword(10);
    await this.inputPassword.setValue(password);
    await this.inputEmail.setValue(password.substring(4));
    await this.inputDomain.setValue(password.substring(4));

    await this.dropdownOpenerDomain.click();
    await RandomUtils.getRandomElement(await this.dropdownItemsDomain).click();
    await this.checkboxTerms.click();
    await this.buttonNext.click();
  }
}

module.exports = new FirstCardForm();
