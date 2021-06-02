let chai = require("chai");
let assert = require('assert');
let expect = chai.expect;
let should = chai.should;

const {map} = require("../map.js");

describe('map',function(){
it("function", function() {
    expect(map).to.be.a("function");
});
});