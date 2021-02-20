

const CustomError = require("../extensions/custom-error");
module.exports = function transform(arr) {

  if (!Array.isArray(arr)) {
    throw new Error("Input is not an array");
  }

  let newArr = [];

  for (let i = 0; i < arr.length; i++) {

    if (arr[i] === "--discard-next") {
      i += 2;
    } else if (arr[i] === "--discard-prev") {
      newArr.pop();
    } else if (arr[i] === "--double-next") {
      if (typeof (arr[i + 1]) === "number") {
        newArr.push(arr[i + 1]);
      }
    } else if (arr[i] === "--double-prev") {
      if (typeof (arr[i - 1]) === "number") {
        newArr.push(arr[i - 1]);
      }
    } else {
      newArr.push(arr[i]);
    }


  }
  return newArr;

}




