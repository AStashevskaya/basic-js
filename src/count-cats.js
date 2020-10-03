const CustomError = require("../extensions/custom-error");

module.exports = function countCats( matrix ) {
  let count = 0
  for (let arr of matrix){
    arr.forEach(element => {
      if (element === '^^')  count ++
    })
  }
    return count
  // remove line with error and write your code here
};
