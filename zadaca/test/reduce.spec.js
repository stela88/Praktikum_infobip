let chai = require("chai");
let assert = require('assert');
let expect = chai.expect;
let should = chai.should;

const {multiply, subtraction, euros, flaattened, removeDuplicate} = require("../reduce.js");


describe('multiply',function(){
    

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


describe('euros',function(){


    it("counting euros: [29.76, 41.85, 46.5] should be equel 118,11", function(){
        expect(euros([29.76, 41.85, 46.5])).to.equal(118.11)
    });

    it("counting euros: [84.30, 95.21, 53.26, 59.01] should be equel 291.78", function(){
        expect(euros([84.30, 95.21, 53.26, 59.01])).to.equal(291.78)
    });
  

});

describe('Substraction',function(){


    it("for [200, 50, 20] should return 130", function(){
        expect(subtraction([200, 50, 20])).to.be.equal(130)
    }); 

    it("for [500, 70, 700] should return -270", function(){
        expect(subtraction([500, 70, 700])).to.be.equal(-270)
    }); 

});


describe('Flattened',function(){


    it("to be a f", function(){
        expect(flaattened).to.be.a("function")
    }); 

    it("it should return 1 array", function(){
        expect(flaattened([[1, 2, 3], [4, 5]])).to.be.eql([1, 2, 3, 4, 5])
    }); 

    it("it should return 1 merged array", function(){
        expect(flaattened([[72, 11, 25], [4, 19], [12, 5]])).to.be.eql([72, 11, 25, 4, 19, 12, 5])
    }); 

});


describe('Remove duplicate value',function(){


    it("removing duplicate numbers", function(){
        expect(removeDuplicate([18, 21, 1, 1, 51, 18, 21, 5, 18, 7, 10])).to.be.eql([ 18, 21, 1, 51, 5, 7, 10 ])
    }); 

    it("removing duplicate numbers 2", function(){
        expect(removeDuplicate([5, 5, 5, 4, 4, 8, 8, 5, 4])).to.be.eql([ 5, 4, 8 ])
    }); 

   

});

