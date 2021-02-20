const CustomError = require("../extensions/custom-error");


const chainMaker = {
  chain: [],
  getLength() {
    return this.chain.length;
  },

  addLink(value) {
    this.chain.push("( " + value + " )");
    return chainMaker;
  },
  removeLink(position) {
    if (!this.chain[position - 1]) {
      this.chain = [];
      throw new Error("Invalid position");
    }
    this.chain.splice(position - 1, 1);
    return chainMaker;
  },
  reverseChain() {
    this.chain.reverse();
    return chainMaker;
  },
  finishChain() {
    let result = this.chain.join("~~");
    this.chain = [];
    return result;

  }
};

module.exports = chainMaker;
