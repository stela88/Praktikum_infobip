let chai = require("chai");
let assert = require('assert');
let expect = chai.expect;
let should = chai.should;

const {isEven, isOdd, isPositive, checkAdult, WordLenght, isBigEnough, filterItems, maleDogs} = require("../filter.js");

describe('isEven',function(){


    it("checking if the number is even", function(){
        expect(isEven([1, 28, 26, 75, 88, 112 ])).to.eql([28, 26, 88, 112])
    });

});

describe('isOdd',function(){


    it("checking if the number is odd", function(){
        expect(isOdd([15, 13, 22, 49, 66, 62 ])).to.eql([15, 13, 49])
    });

});

describe('isPositive',function(){


    it("checking if the number is positive", function(){
        expect(isPositive([-1, 29, -15, 77, 48, -35])).to.eql([29, 77, 48])
    });

});

describe('checkAdult',function(){


    it("checking if the person is over 18 years old", function(){
        expect(checkAdult([32, 33, 16, 40])).to.eql([32, 33, 40])
    });

});


describe('Lenght of words',function(){


    it("words with lenght lower than 6", function(){
        expect(WordLenght(['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'])).to.eql(["exuberant", "destruction", "present"])
    });

});

describe('Filtering out all small values',function(){


    it("numbers higher than 10", function(){
        expect(isBigEnough([12, 5, 8, 130, 44])).to.eql([12, 130, 44])
    });

    it("numbers higher than 10", function(){
        expect(isBigEnough([500, 7, 15, 139, 854])).to.eql([500, 15, 139, 854])
    });

});


describe('Searching in array',function(){


    it("for fruits, when an is written, the apple and grapefruit should be returned", function(){
        expect(filterItems(['apple', 'banana', 'grapes', 'mango', 'orange'], 'ap')).to.eql(['apple', 'grapes'])
    });

    it("for fruitswhen an is written, the banana, mango, orange should be returned", function(){
        expect(filterItems(['apple', 'banana', 'grapes', 'mango', 'orange'], 'an')).to.eql(['banana', 'mango', 'orange'])
    });

});

describe('maleDogs',function(){


    it("the sex of the dog should be male", function(){
        expect(maleDogs([
            {
              name: 'Roger',
              gender: 'male'
            },
            {
              name: 'Syd',
              gender: 'male'
            },
            {
              name: 'Vanille',
              gender: 'female'
            },
            {
              name: 'Luna',
              gender: 'female'
            }
          ])).to.eql([ { name: 'Roger', gender: 'male' }, { name: 'Syd', gender: 'male' } ])
    });

});



