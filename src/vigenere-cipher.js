const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(isDirect = true){
    this.alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
    this.counter = 0
    this.isDirect = isDirect
}
encrypt(str, key) {
  if (str === undefined || key === undefined) throw new Error ('Not all arguments are addded')
  if (typeof(str) !== "string" || typeof(key) !== "string") throw new Error('There is a wrong type of argument')
  //разбиваем ключ и строку на массивю проходимся по массиву строки складывая значения, затем отбрасываем остаток у значений. если было больше одного круга и ищем значения алфавита с помощью наших индексов
  let keyArr = key.toUpperCase().split('').map(el => {
    return this.alphabet.indexOf(el)})
   let strArr = str.toUpperCase().split('').map(el =>{
       if(! this.alphabet.includes(el)){
         return  el} 
   return  this.alphabet.indexOf(el)})
   for (let i = 0; i < strArr.length; i++){
     if(typeof(strArr[i]) !== "number"){ 
       continue
      } 
     strArr[i] = strArr[i] + keyArr[this.counter]
     this.counter === keyArr.length - 1 ? this.counter = 0 : this.counter++
   }
   strArr = strArr.map(el => {
     if(typeof(el) !== "number"){
       return  el}
     el >=  this.alphabet.length ?  el = el %  this.alphabet.length : el 
     return el
     })   
   strArr = strArr.map(el => {
     if(typeof(el) !== "number"){
       return  el}
       el = this.alphabet.find( item =>  this.alphabet.indexOf(item) === el )
       return el.toUpperCase()
   })
   this.counter = 0
   this.isDirect ? strArr : strArr = strArr.reverse()
   return strArr.join('')
}   
  decrypt(str, key) {
    if (str === undefined || key === undefined) throw new Error ('Not all arguments are addded')
    if (typeof(str) !== "string" || typeof(key) !== "string") throw new Error('There is a wrong type of argument')
    let keyArr = key.toUpperCase().split('').map(el => {
      return this.alphabet.indexOf(el)})
     let strArr = str.toUpperCase().split('').map(el =>{
         if(! this.alphabet.includes(el)){
           return  el} 
     return  this.alphabet.indexOf(el)})
     for (let i = 0; i < strArr.length; i++){
      if(typeof(strArr[i]) !== "number"){ 
        continue
       } 
      strArr[i] = strArr[i] - keyArr[this.counter]
      this.counter === keyArr.length - 1 ? this.counter = 0 : this.counter++
    }
    strArr = strArr.map(el => {
      if(typeof(el) !== "number"){
        return  el}
      el <  0 ?  el = this.alphabet.length - Math.abs(el) : el 
      return el
      })   
    strArr = strArr.map(el => {
      if(typeof(el) !== "number"){
        return  el}
        el = this.alphabet.find( item =>  this.alphabet.indexOf(item) === el )
        return el.toUpperCase()
    })
    this.counter = 0
    this.isDirect ? strArr : strArr = strArr.reverse()
    return strArr.join('')

  }
}

module.exports = VigenereCipheringMachine;
