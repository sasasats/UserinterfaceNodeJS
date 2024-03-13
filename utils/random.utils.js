const { $, $$ } = require("@wdio/globals");

class RandomUtils {
  alphabet = "abcdefghijklmnopqrstuvwxyz";
  numbers = "0123456789";

  getRandom(characters, length) {
    let result = "";
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
      counter += 1;
    }
    return result;
  }

  getRandomString(length) {
    return this.getRandom(this.alphabet, length);
  }

  getRandomNumbres(length) {
    return this.getRandom(this.numbers, length);
  }

  getRandomPassword(length) {
    return (
      this.getRandomString(1) +
      this.getRandomString(1).toUpperCase() +
      this.getRandomNumbres(1) +
      this.getRandomString(length - 3)
    );
  }

  getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  getRandomIndex(collection) {
    return Math.floor(Math.random() * collection.length);
  }

  getRandomElement(elementCollection) {
    const randomIndex = this.getRandomIndex(elementCollection);
    return elementCollection[randomIndex];
  }
}

module.exports = new RandomUtils();
