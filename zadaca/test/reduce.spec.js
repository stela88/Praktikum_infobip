let chai = require("chai");
let assert = require('assert');
let expect = chai.expect;
let should = chai.should;

const {multiply, duplicate, euros} = require("../reduce.js");


describe.skip('multiply',function(){
    

    it('error if argument is not a number',function(){
        expect(()=>multiply("blbl")).to.throw(Error);
    });
    it("function should accept number", function() {
        multiply([1]);
    });

    it("1, 3, 5 should be equal to 15", function() {
        expect(multiply([1, 3, 5])).to.equal(15);
    });

    it("5, 10, 1, 10 should be equal to 500", function() {
        expect(multiply([5, 10, 1, 10])).to.equal(500);
    });
     

});




describe.skip('euros',function(){


    it("counting euros: [29.76, 41.85, 46.5] should be equel 118,11", function(){
        expect(euros([29.76, 41.85, 46.5])).to.equal(118.11)
    });

    it("counting euros: [84.30, 95.21, 53.26, 59.01] should be equel 291.78", function(){
        expect(euros([84.30, 95.21, 53.26, 59.01])).to.equal(291.78)
    });
  

});
