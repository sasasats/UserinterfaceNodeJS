const { $ } = require("@wdio/globals");
const RandomUtils = require("../../utils/random.utils");

class SecondCardForm {
  get checkboxesInterest() {
    return $$("//input[not(contains(@id,'selectall'))]/following-sibling::span");
  }

  get checkboxUnselectAll() {
    return $("//*[@id='interest_unselectall']/following-sibling::span");
  }

  async deselectAllInterests() {
    await this.checkboxUnselectAll.click();
  }

  async chooseInterests(numberOfInterests) {
    const indexes = new Set();
    
    while (indexes.size < numberOfInterests) {
      const index = RandomUtils.getRandomInt(
        0,
        await this.checkboxesInterest.length - 1
      );
      indexes.add(index);
    }
    console.log(indexes);
    for (const index of indexes) {
      await this.checkboxesInterest[index].click();
    }
  }
}

module.exports = new SecondCardForm();
