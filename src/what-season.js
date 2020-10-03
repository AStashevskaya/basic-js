const CustomError = require("../extensions/custom-error");

module.exports = function getSeason( date ) {
  if(date === undefined) return 'Unable to determine the time of year!'
  if (typeof(date) !== "object" || date === null) return new Error('Error')
  const month = date.getMonth()
  let season
  date.valueOf() // разобраться по этому поводу
  if( month >= 2 && month < 5 ){
    season = 'spring'
  } else if ( month >= 5 && month < 8){
              season = 'summer'
  } else if (month >= 8 && month < 11){
    season = 'fall'
  } else {
      season = 'winter'
  }
  return season 
};
