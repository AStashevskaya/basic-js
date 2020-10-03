const CustomError = require("../extensions/custom-error");

module.exports = function repeater( str, options ) {
  if( str === null){
    str = 'null'
  }
  let string = str.toString()
   let addition 
   if (options.addition || (typeof(options.addition) === "boolean" && options.addition === false)){
       addition =   options.addition.toString()
   }
   if( options.addition === null){
    addition = 'null'
  }
   let additionArr = []
   if(options.additionRepeatTimes){
       for(let i = 0; i < options.additionRepeatTimes; i++){
           additionArr.push(addition)
       }
   } 
   if(options.additionSeparator){
        if(additionArr.length >= 2){
           addition = additionArr.join(options.additionSeparator)
        } 
   } else {
     if(additionArr.length >= 2){
        addition = additionArr.join('|')
    } 
   } 
   let stringArr = []
   addition !== undefined ? string = `${string}${addition}` : string 
   
   if(options.repeatTimes){
    for(let i = 0; i < options.repeatTimes; i++){
        stringArr.push(string)
    }
   }
   if(options.separator){
     if(stringArr.length >= 2){
        string = stringArr.join(options.separator)
     } 
} else {
  if(stringArr.length >= 2){
    string = stringArr.join('+')
  } 
}
return string
};
  