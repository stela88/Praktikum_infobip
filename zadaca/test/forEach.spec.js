let chai = require("chai");
let assert = require('assert');
let expect = chai.expect;
let should = chai.should;

const {myFunction} = require("../forEach.js");

// describe('index',function(){


//     it("adding indexes to numbers", function(){
//         expect(item(['John', 'Sara', 'Jack'])).to.equal([28, 26, 88, 112])
//     });

// // });

// describe('double',function(){


//     it("double numbers", function(){
//         expect(double(2, 4, 6)).to.eql([28, 26, 88, 112])
//     });

// });

 describe('index',function(){


        it("adding indexes to numbers", function(){
            expect(myFunction([65, 44, 12, 4])).to.equal([28, 26, 88, 112])
        });
    
});