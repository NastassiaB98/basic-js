const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {

  let string = String(str);
  let stringToRepeat = string.slice();

  if (options.hasOwnProperty("addition")) {

    let addition = String(options.addition);
    let additionalArr = [];
    let additionalStr = "";

    additionalArr.push(addition);

    for (let i = 0; i < options.additionRepeatTimes - 1; i++) {
      additionalArr.push(addition);
    }

    if (options.additionSeparator) {
      additionalStr = additionalArr.join(options.additionSeparator);
    } else {
      additionalStr = additionalArr.join("|");
    }

    stringToRepeat += additionalStr;
  }


  let resultArr = [];
  let resultStr = "";

  resultArr.push(stringToRepeat);

  for (let i = 0; i < options.repeatTimes - 1; i++) {
    resultArr.push(stringToRepeat);
  }

  if (options.separator) {
    resultStr = resultArr.join(options.separator);
  } else {
    resultStr = resultArr.join("+");
  }

  return resultStr;
};
