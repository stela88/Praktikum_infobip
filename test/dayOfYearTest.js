var assert = require('assert');
var chai = require("chai");
const dayOfYear = require('../dayOfYear');
var expect = chai.expect;
var should = chai.should;

describe.skip('dayOfYear test', function() {
    it('dayOfYear should be a function', function () {
        dayOfYear(1);
    });
    it('should return 164 for 12.06.2020', function(){
        expect(dayOfYear(12,6,2020)).to.equal(164);
    });
    it('should return 203 for 22.07.2011', function(){
        expect(dayOfYear(22,7,2011)).to.equal(203);
    });
    it('should return 7 for 07.01.2015', function(){
        expect(dayOfYear(7,1,2015)).to.equal(7);
    });
    it('should return 68 for 01.03.2012', function(){
        expect(dayOfYear(8,3,2016)).to.equal(68);
    });
    it('should return 75 for 15.03.1900', function(){
        expect(dayOfYear(1,3,1900)).to.equal(75);
    });
    it('should return 133 for 12.05.1600', function(){
        expect(dayOfYear(12,5,1600)).to.equal(133);
    });
});