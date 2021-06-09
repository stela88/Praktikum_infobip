let chai = require("chai");
let assert = require('assert');
let expect = chai.expect;
let should = chai.should;

const wine = require('../forEach').wineData;

describe.skip('forEach', function () {
    it('forEach should return red colored wine', function () {
      let redWine = [];
  
      wine.forEach(function wineColorCheck(wine) {
        if (wine.color === 'red') {
          redWine.push(wine.name);
        }
      });
  
      let expectedOutput = [
        'Teran',
        'Merlot',
        'Cabernet Sauvignon' 
      ];
  
      expect(redWine).to.eql(expectedOutput);
    });

    it('forEach should return gold colored wine', function () {
      let goldWine = [];
  
      wine.forEach(function wineColorCheck(wine) {
        if (wine.color === 'gold') {
          goldWine.push(wine.name);
        }
      });
  
      let expectedOutput = [
        'Malvazija',
        'Chardonnay',
        'Brut' 
      ];
  
      expect(goldWine).to.eql(expectedOutput);
    });


    it('forEach should return rose colored wine', function () {
      let roseWine = [];
  
      wine.forEach(function wineColorCheck(wine) {
        if (wine.color === 'rose') {
          roseWine.push(wine.name);
        }
      });
  
      let expectedOutput = [
        'Rose', 
      ];
  
      expect(roseWine).to.eql(expectedOutput);
    });

    it('forEach should return serving temperature of 6-8C', function () {
      let firsttempWine = [];
  
      wine.forEach(function wineColorCheck(wine) {
        if (wine.temp === '6-8C') {
          firsttempWine.push(wine.name);
        }
      });
  
      let expectedOutput = [
        'Malvazija',
        'Chardonnay',
        'Rose', 
      ];
  
      expect(firsttempWine).to.eql(expectedOutput);
    });


    it('forEach should return serving temperature of 16-18C', function () {
      let sectempWine = [];
  
      wine.forEach(function wineColorCheck(wine) {
        if (wine.temp === '16-18C') {
          sectempWine.push(wine.name);
        }
      });
  
      let expectedOutput = [
        'Teran',
        'Merlot',
        'Cabernet Sauvignon' 
      ];
  
      expect(sectempWine).to.eql(expectedOutput);
    });


    it('forEach should return serving temperature of 5-7C', function () {
      let thirdtempWine = [];
  
      wine.forEach(function wineColorCheck(wine) {
        if (wine.temp === '5-7C') {
          thirdtempWine.push(wine.name);
        }
      });
  
      let expectedOutput = [
        'Brut'
      ];
  
      expect(thirdtempWine).to.eql(expectedOutput);
    });
})
