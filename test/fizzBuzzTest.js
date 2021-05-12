let assert = require('assert');
let chai = require("chai");
let expect = chai.expect;
let should = chai.should;
const fizzBuzz = require("../fizzBuzz.js");


describe.skip('fizzbuzz problem',function(){
    

    it('error if argument is not a number',function(){
        expect(()=>fizzBuzz("blbl")).to.throw(Error);
    });
    it("function should accept number", function() {
        fizzBuzz(1);
    });
    it("return Fizz if number is dividible by 3", function() {
        expect(fizzBuzz(6)).to.equal("Fizz");
    });
    it("return Buzz if number is dividible by 5", function() {
        expect(fizzBuzz(20)).to.equal("Buzz");
    });
    it("return Suzz if number is dividible by 7", function() {
        expect(fizzBuzz(49)).to.equal("Suzz");
    });
    it("return empty string if number is not dividible by 3 or 5", function() {
        expect(fizzBuzz(8)).to.equal("");
    });
    it("return FizzBuzz if number is dividible by 3 and 5", function() {
        expect(fizzBuzz(30)).to.equal("FizzBuzz");
    });
    it("return FizzSuzz if number is dividible by 3 and 7", function() {
        expect(fizzBuzz(42)).to.equal("FizzSuzz");
    });
    it("return BuzzSuzz if number is dividible by 5 and 7", function() {
        expect(fizzBuzz(70)).to.equal("BuzzSuzz");
    });
    it("return FizzBuzzSuzz if number is dividible by 3, 5 and 7", function() {
        expect(fizzBuzz(105)).to.equal("FizzBuzzSuzz");
    });


});