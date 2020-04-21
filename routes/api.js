/*
*
*
*       Complete the API routing below
*
*
*/

'use strict'

var expect = require('chai').expect
var ConvertHandler = require('../controllers/convertHandler.js')
const _ = require('underscore')

module.exports = function (app) {
  
  var convertHandler = new ConvertHandler()

  app.route('/api/convert')
    .get(function (req, res){
      // check request query parameter
      if (!( _.isEmpty(req.query) === false && Object.keys(req.query)[0] == 'input')) {

        console.log(`[GET][${req.url}]\n~~>[400][Bad Request]`) // !DEBUG
        res.status(400).json('400 - Bad Request')

      } else {

        console.log(`[GET][${req.url}]\n~~>[200][valid '${Object.keys(req.query)[0]}' search param]`) // !DEBUG
        
        const input = req.query.input
        const initNum = convertHandler.getNum(input)
        const initUnit = convertHandler.getUnit(input)
        // const returnNum = convertHandler.convert(initNum, initUnit)
        // const returnUnit = convertHandler.getReturnUnit(initUnit)
        // const toString = convertHandler.getString(initNum, initUnit, returnNum, returnUnit)
        
        // TODO
        // [X] check if initNum is valid then return 'invalid number' or go to to happy path
        // [X] implement unit test for initNum method
        // [x] check if initUnit is valid returns 'invalid unit' or go to happy path
        // [x] implement unit test for initUnit method

        if (!initUnit) {
          res.status(400).json('invalid unit')
        } else if (!initNum) {
          res.status(200).json('invalid number')
        } else {
          console.log(`initNum ${initNum}`) // !DEBUG
          console.log(`initUnit ${initUnit}`) // !DEBUG
          res.status(200).json('happy path')
        }
      }
    }) 
}
