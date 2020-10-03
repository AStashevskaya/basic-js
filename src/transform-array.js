const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  let newArr = arr.slice(0)
  if(!Array.isArray(arr)){
    throw new Error ('err')
  } else {
    
    for (let el of newArr){
      let operand = newArr.indexOf(el)
      switch (el){
          case '--discard-next':
              if(newArr[operand + 2]){
                let item = newArr[operand + 2]
                if(item === '--discard-prev' || item === '--double-prev' ){
                  newArr.splice(operand, 3)
                } 
              }else if (newArr[operand + 1]){
                newArr.splice(operand, 2) 
              } else newArr.splice(operand)  
            break;
          case '--discard-prev':
              if(newArr[operand -1]){
                newArr.splice(operand -1, 2)
              } else  newArr.splice(operand, 1 )
            break;
          case '--double-next':
              if(newArr[operand + 1]){
                newArr.splice(operand, 1, newArr[operand + 1])
              } else newArr.splice(operand)  
         
            break;
          case '--double-prev':
              if(newArr[operand -1]){
                newArr.splice(operand, 1, newArr[operand - 1])
              } else  newArr.splice(operand, 1 )
            break;
        }
  }
  }
return newArr
};
