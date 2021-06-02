let chai = require("chai");
let assert = require('assert');
let expect = chai.expect;
let should = chai.should;

const {letters} = require("../forEach.js");

describe('forEach', function() {
    
    it('letters', () => {
        expect(letters(["a", "b", "c"])).to.be.equal(["a", "b", "c"])
        
    });
});

