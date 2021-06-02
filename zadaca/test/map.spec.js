let chai = require("chai");
let assert = require('assert');
let expect = chai.expect;
let should = chai.should;

const {double, havle, size, getFullName, letter, animals} = require("../map.js");

describe('Duplicate',function(){


it("function", function() {
    expect(double).to.be.a("function");
});

it("Duplicate [0, 2, 4, 6, 8]", function() {
    expect(double([0, 2, 4, 6, 8])).to.be.eql([0, 4, 8, 12, 16]);
});

it("Duplicate [5, 28, 42, 88, 105]", function() {
    expect(double([5, 28, 42, 90, 105])).to.be.eql([10, 56, 84, 180, 210]);
});


});

describe('Havle',function(){
    
    it("Havle [10, 20, 15, 48]", function() {
        expect(havle([10, 20, 15, 48])).to.be.eql([5, 10, 7.5, 24]);
    });

});

describe('Size of string',function(){
    
    it("for Bilbo, Gandalf and Nazgul should return 5,7,6", function() {
        expect(size(["Bilbo", "Gandalf", "Nazgul"])).to.be.eql([5,7,6]);
    });

    it("for Informatic, Banana and num should return 10,6,3", function() {
        expect(size(["Informatic", "Banana", "num"])).to.be.eql([10,6,3]);
    });

});

describe('Full Name',function(){
    
    it("get Full Name for Malcom, Kaylee, Jayne", function() {
        expect(getFullName([
            {firstname : "Malcom", lastname: "Reynolds"},
            {firstname : "Kaylee", lastname: "Frye"},
            {firstname : "Jayne", lastname: "Cobb"}
          ])).to.be.eql(["Malcom Reynolds", "Kaylee Frye", "Jayne Cobb"]);
    });

    it("get Full Name for Marko, Ena, Marina", function() {
        expect(getFullName([
            {firstname : "Marko", lastname: "Brekalo"},
            {firstname : "Ena", lastname: "Brekalo"},
            {firstname : "Marina", lastname: "Brekalo"}
          ])).to.be.eql(["Marko Brekalo", "Ena Brekalo", "Marina Brekalo"]);
    });

});

describe('Name + letter',function(){
    
    it("adding (a) for each letter", function() {
        expect(letter("Sammy")).to.be.eql(["Sa", "aa", "ma", "ma", "ya"]);
    });

});

describe('Animals',function(){
    
    it("should return what the animal likes and multiply the length of the name by 10 to get the year", function() {
        expect(animals([
            { name: 'shark', likes: 'ocean' },
            { name: 'turtle', likes: 'pond' },
            { name: 'otter', likes: 'fish biscuits' }
        ])).to.be.eql([
            {shark: "ocean", age: 50},
            {turtle: "pond", age: 60},
            {otter: "fish biscuits", age: 50}
        ]);
    });

});

