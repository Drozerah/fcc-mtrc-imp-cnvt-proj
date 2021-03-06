/*
*
*
*       FILL IN EACH UNIT TEST BELOW COMPLETELY
*       -----[Keep the tests in the same order!]----
*       (if additional are added, keep them at the very end!)
*/

var chai = require('chai');
var assert = chai.assert;
var ConvertHandler = require('../controllers/convertHandler.js');

var convertHandler = new ConvertHandler();

suite('Unit Tests', function(){
  
  suite('Function convertHandler.getNum(input)', function() {
    
    test('Whole number input', function(done) {
      var input = '32L';
      assert.equal(convertHandler.getNum(input),32);
      done();
    });
    
    test('Decimal Input', function(done) {
      var input = ['0.5L', '3kg']
      const compare = [0.5, 3]
      input.forEach(function(ele, idx) {
        assert.equal(convertHandler.getNum(ele), compare[idx])
      });
      done();
    });
    
    test('Fractional Input', function(done) {
      var input = ['1/2kg', '6/2kg']
      const compare = [0.5, 3]
      input.forEach(function(ele, idx) {
        assert.equal(convertHandler.getNum(ele), compare[idx])
      });
      done();
    });
    
    test('Fractional Input w/ Decimal', function(done) {
      var input = ['5.5/100kg', '5.4/3lbs']
      const compare = [0.055, 1.8]
      input.forEach(function(ele, idx) {
        assert.equal(convertHandler.getNum(ele), compare[idx])
      });
      done();
    });
    
    test('Invalid Input (double fraction)', function(done) {
      var input = ['1/2/3kg', '1/2.5/3lbs', '1.2/2.5/3km', '1.2/2.5/3.5gal' ]
      input.forEach(function(ele) {
        assert.isFalse(convertHandler.getNum(ele))
      });
      done();
    });
    
    test('No Numerical Input', function(done) {
      var input = ['', 'foo']
      input.forEach(function(ele) {
        assert.equal(convertHandler.getNum(ele), 1)
      });
      done();
    }); 
    
  });
  
  suite('Function convertHandler.getUnit(input)', function() {
    
    test('For Each Valid Unit Inputs', function(done) {
      var input = ['gal','l','mi','km','lbs','kg','GAL','L','MI','KM','LBS','KG'];
      input.forEach(function(ele) {
        assert.equal(convertHandler.getUnit(ele), ele.toLowerCase())
      });
      done();
    });
    
    test('Unknown Unit Input', function(done) {
      var input = ['foo', 'bar', 'baz', '12baz']
        input.forEach(function(ele) {
          assert.isFalse(convertHandler.getUnit(ele))
        });
      done();
    });  
    
  });
  
  suite('Function convertHandler.getReturnUnit(initUnit)', function() {
    
    test('For Each Valid Unit Inputs', function(done) {
      var input = ['gal','l','mi','km','lbs','kg'];
      var expect = ['l','gal','km','mi','kg','lbs'];
      input.forEach(function(ele, i) {
        assert.equal(convertHandler.getReturnUnit(ele), expect[i]);
      });
      done();
    });
    
  });  
  
  suite('Function convertHandler.spellOutUnit(unit)', function() {
    
    test('For Each Valid Unit Inputs', function(done) {
      var input = ['gal','l','mi','km','lbs','kg'];
      var expect = ['gallons','liters','miles','kilometers','pounds','kilograms'];
      input.forEach(function(ele, i) {
        assert.equal(convertHandler.spellOutUnit(ele), expect[i]);
      });
      done();
    });
    
  });
  
  suite('Function convertHandler.convert(num, unit)', function() {
    
    test('Gal to L', function(done) {
      var input = [5, 'gal'];
      var expected = 18.9271;
      assert.approximately(convertHandler.convert(input[0],input[1]),expected,0.1); //0.1 tolerance
      done();
    });
    
    test('L to Gal', function(done) {
      var input = [1, 'l'];
      var expected = 0.26417;
      assert.approximately(convertHandler.convert(input[0],input[1]),expected,0.1); //0.1 tolerance
      done();
    });
    
    test('Mi to Km', function(done) {
      var input = [3.1, 'mi'];
      var expected = 5.0000008;
      assert.approximately(convertHandler.convert(input[0],input[1]),expected,0.1); //0.1 tolerance
      done();
    });
    
    test('Km to Mi', function(done) {
      var input = [1, 'km'];
      var expected = 0.62137;
      assert.approximately(convertHandler.convert(input[0],input[1]),expected,0.1); //0.1 tolerance
      done();
    });
    
    test('Lbs to Kg', function(done) {
      var input = [1, 'lbs'];
      var expected = 0.45359;
      assert.approximately(convertHandler.convert(input[0],input[1]),expected,0.1); //0.1 tolerance
      done();
    });
    
    test('Kg to Lbs', function(done) {
      var input = [1, 'kg'];
      var expected = 2.20462;
      assert.approximately(convertHandler.convert(input[0],input[1]),expected,0.1); //0.1 tolerance
      done();
    });
    
  });

});