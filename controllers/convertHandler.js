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
    switch (true) {
      case initUnit === 'mi':
        return 'km'
      case initUnit === 'km':
        return 'mi'
      case initUnit === 'lbs':
        return 'kg'
      case initUnit === 'kg':
        return 'lbs'
      case initUnit === 'gal':
        return 'l'
      case initUnit === 'l':
        return 'gal'
    }
  };

  this.spellOutUnit = function(unit) {
    switch (unit) {
      case 'mi':
        return 'miles'
      case 'km':
        return 'kilometers'
      case 'lbs':
        return 'pounds'
      case 'kg':
        return 'kilograms'
      case 'gal':
        return 'gallons'
      case 'l':
        return 'liters'
    }
  };
  
  this.convert = function(initNum, initUnit) {
  
    const volume = 3.78541;
    const weigth = 0.453592;
    const distance = 1.60934;
    
    const calculate = (initNum, operator, rate) => {
      if (operator === '*') {
        return math.round(math.evaluate(initNum * rate), 5) 
      }
      if (operator === '/') {
        return math.round(math.evaluate(initNum / rate), 5)
      }
    }
    switch (initUnit) {
      case 'gal':
         return calculate(initNum, '*', volume)   
      case 'l':
         return calculate(initNum, '/', volume)   
      case 'lbs':
         return calculate(initNum, '*', weigth)   
      case 'kg':
         return calculate(initNum, '/', weigth) 
      case 'mi':
         return calculate(initNum, '*', distance)
      case 'km':
         return calculate(initNum, '/', distance)
    }
  }
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    const response = {
      initNum,
      initUnit: initUnit === 'l' ? 'L' : initUnit,
      returnNum,
      returnUnit,
      string: `${initNum} ${this.spellOutUnit(initUnit)} converts to ${returnNum} ${this.spellOutUnit(returnUnit)}`,
    }
    return response
  };
  
}

module.exports = ConvertHandler;
