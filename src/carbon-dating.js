const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample( sample) {
  if (typeof(sample) !== 'string')return false
 let sampleActivity = parseFloat(sample)
  if(isNaN(sampleActivity) || sampleActivity <= 0 || sampleActivity > MODERN_ACTIVITY) return false
  let k = 0.693 / HALF_LIFE_PERIOD
  return Math.ceil(Math.log(MODERN_ACTIVITY / sampleActivity) / k) 
};
