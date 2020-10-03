const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if(!Array.isArray(members)) return false
  let filteredMembers = members.filter(el => typeof(el) === 'string' )
  const letters = []
  filteredMembers.forEach(el => {
      let arr = [...el]
      let str = arr.filter(item => item !== ' ').join('')
      letters.push(str[0].toUpperCase())
  });
 let word = letters.sort().join('')
 console.log(word)
  return word
  // remove line with error and write your code here
};
