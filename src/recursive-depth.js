const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  constructor(){
    this.level = 0
    this.maxlevel = 0
  }

  calculateDepth( arr ) {
    if (Array.isArray(arr)){
       this.level++
      let a 
      for (let el of arr){
        if(Array.isArray(el)){
          a = true
         break
        }}
        arr = arr.flat()
        a ?  this.calculateDepth(arr) : this.maxlevel = this.level
    }
    this.level = 0
    return this.maxlevel
   }
};