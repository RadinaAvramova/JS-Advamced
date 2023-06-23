describe("Even Or Not", () => {
    it("Should return undefined with invalid argument", () => {
        assert.equal(undefined,  isOddOrEven(5));
        assert.equal(undefined,  isOddOrEven(true));
    });
 
    it("Should return correct result with valid argument - even length", () => {
        assert.equal("even",  isOddOrEven("toto"));
    });
 
    it("Should return correct result with valid argument - odd length", () => {
        assert.equal("odd",  isOddOrEven("tot"));
    });
 
    it("Should return correct result with valid arguments", () => {
        assert.equal("odd",  isOddOrEven("tests"));
        assert.equal("even",  isOddOrEven("some"));
    });
});


const chai = require("chai");
const expect = chai.expect;

function isOddOrEven(string) {
  if (typeof string !== "string") {
    return undefined;
  }

  if (string.length % 2 === 0) {
    return "even";
  }

  return "odd";
}

describe("Test Even or Odd functionality", function () {
  it("Test for undefined", function () {
    expect(isOddOrEven(1)).to.equal(undefined);
  });

  it("Test for even", function () {
    expect(isOddOrEven("abcd")).to.equal("even");
  });

  it("Test for odd", function () {
    expect(isOddOrEven("abc")).to.equal("odd");
  });
});