/*
*
*
*       Complete the handler logic below
*       
*       
*/
const math = require("mathjs")
function ConvertHandler() {
  this.getNum = function(input) {
    // Split a string using :
    // any alpha characters as delimiter
    let [num] = input.split(/[A-Za-z]/)
    if(num === '') num = '1'
    const regex = /(^\d+$)|(^\d+\.?\d+$)|(^\d+\/?\d$)|(^\d+\.?\d+\/?\d+$)|(^\d+\/?\d+\.?\d+$)|(^\d+\.?\d+\/?\d+\.?\d+$)/
    if(regex.test(num)) return math.evaluate(num)
    return false
  };
  
  this.getUnit = function(input) {
    // Split a string using :
    // any number as delimiter
    // any dot as delimiter
    // any slash as delimiter
    let [unit] = input.split(/[\d./]/gi).reverse()
    // transform unit string to lower case
    unit = unit.toLowerCase()
    // check if unit is a valid unit
    const isValidUnit = ['gal','l','mi','km','lbs','kg'].includes(unit)
    if (isValidUnit) return unit
    return false
  };
  
  this.getReturnUnit = function(initUnit) {
    var result;
    
    return result;
  };

  this.spellOutUnit = function(unit) {
    var result;
    
    return result;
  };
  
  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    var result;
    
    return result;
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    var result;
    
    return result;
  };
  
}

module.exports = ConvertHandler;
