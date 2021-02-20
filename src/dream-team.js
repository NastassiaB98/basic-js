const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {

  let dreamTeamName = [];

  if (!Array.isArray(members)) {
    return false
  }

  for (let i = 0; i < members.length; i++) {
    if (typeof (members[i]) === "string") {
      let memberName = members[i].trim();
      dreamTeamName.push(memberName[0].toUpperCase());
    }
  }
  return dreamTeamName.sort().join("");
};
