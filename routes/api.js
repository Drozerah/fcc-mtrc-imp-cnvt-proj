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

        if(!process.env === 'development') console.log(`[GET][${req.url}]\n~~>[400][Bad Request]`) // !DEBUG
        res.status(400).json('400 - Bad Request')

      } else {

        if(!process.env === 'development') console.log(`[GET][${req.url}]\n~~>[200][valid '${Object.keys(req.query)[0]}' search param]`) // !DEBUG
        
        const input = req.query.input
        const initNum = convertHandler.getNum(input)
        const initUnit = convertHandler.getUnit(input)
        const returnNum = convertHandler.convert(initNum, initUnit)
        const returnUnit = convertHandler.getReturnUnit(initUnit)
        const toString = convertHandler.getString(initNum, initUnit, returnNum, returnUnit)
        
        // TODO - convertHandler methods implementation
        // [x] initNum
        // [x] initUnit
        // [x] returnNum
        // [x] getReturnUnit
        // [x] spellOutUnit
        // [x] getString
        // TODO - unit tests implementation
        // [x] initNum
        // [x] initUnit
        // [ ] returnNum
        // [x] getReturnUnit
        // [x] spellOutUnit
        // [x] getString
        // TODO - functional tests implementation
        // [ ] inplement functional test 1
        // [x] inplement functional test 2
        // [x] inplement functional test 3
        // [x] inplement functional test 4
        // [ ] inplement functional test 5

        if(initUnit === false && initNum === false){
          if(!process.env === 'development') console.log('[invalid number and unit]') // !DEBUG
          res.json('invalid number and unit')
        } else if (!initUnit) {
          if(!process.env === 'development') console.log('[invalid unit]') // !DEBUG
          res.json('invalid unit')
        } else if (!initNum) {
          if(!process.env === 'development') console.log('[invalid numger]') // !DEBUG
          res.json('invalid number')
        } else {
          if(!process.env === 'development') console.log('happy path') // !DEBUG
          res.status(200).json(toString)
        }
      }
    }) 
}
