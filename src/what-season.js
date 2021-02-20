const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  const winter = [11, 0, 1];
  const spring = [2, 3, 4];
  const summer = [5, 6, 7];
  const autumn = [8, 9, 10];

  if (!date) {
    return "Unable to determine the time of year!"

  } else if (!(Object.prototype.toString.call(date) === "[object Date]")) {
    throw new Error("Invalid type of date");

  } else {
    let month = date.getMonth();
    if (winter.includes(month)) {
      return "winter";
    } else if (spring.includes(month)) {
      return "spring";
    } else if (summer.includes(month)) {
      return "summer";
    } else if (autumn.includes(month)) {
      return "autumn";
    }
  }
};
