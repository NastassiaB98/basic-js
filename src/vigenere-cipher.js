const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {

  constructor(machineType = true) {
    this.machineType = machineType;
  }

  encrypt(message, key) {

    if (arguments.length < 2) {
      throw new Error("Not enough parameters");
    }

    let encryptedWord = [];

    message = message.toUpperCase();
    key = key.toUpperCase();

    for (let i = 0, k = 0; i < message.length; i++) {
      if (message.charCodeAt(i) >= 65 && message.charCodeAt(i) <= 90) {
        encryptedWord.push((message.charCodeAt(i) - 65 + key.charCodeAt(k % key.length) - 65) % 26 + 65);
        k++;
      } else {
        encryptedWord.push(message.charCodeAt(i));
      }
    }


    if (this.machineType === true) {
      return String.fromCharCode(...encryptedWord);
    } else {
      return String.fromCharCode(...encryptedWord.reverse());
    }

  }



  decrypt(message, key) {
    if (arguments.length < 2) {
      throw new Error("Not enough parameters");
    }


    let decryptedWord = [];
    key = key.toUpperCase();

    for (let i = 0, k = 0; i < message.length; i++) {
      if (message.charCodeAt(i) >= 65 && message.charCodeAt(i) <= 90) {
        decryptedWord.push((message.charCodeAt(i) - 65 - (key.charCodeAt(k % key.length) - 65) + 26) % 26 + 65);
        k++;
      } else {
        decryptedWord.push(message.charCodeAt(i));
      }
    }

    if (this.machineType === true) {
      return String.fromCharCode(...decryptedWord);
    } else {
      return String.fromCharCode(...decryptedWord.reverse());
    }
  }
}

module.exports = VigenereCipheringMachine;
