const CustomError = require("../extensions/custom-error");

const chainMaker = {
  chain : [],
  getLength() {
    return this.chain.length
  },
  addLink(value) {
    value === undefined ?  this.chain.push(`(  )`) : this.chain.push(`( ${value} )`)
    return this
  },
  removeLink(position) {
    if (position < this.chain.length && position > 0 && Number.isInteger(position)){
    let number = position - 1
    this.chain.splice(number, 1)
    } else {
      this.chain = []
      throw new Error ('err');
      
    } 
    return this
},
reverseChain() { 
  this.chain = this.chain.reverse()
  return this
},
  finishChain() {
      let str = this.chain.join('~~')
      this.chain = []
   return  str
  }
}

module.exports = chainMaker;
