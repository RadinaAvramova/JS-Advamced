describe('test cases for lookupChar(str, index) function', function () {
    it('should return undefined on lookupChar(2, 2)', () => {
        expect(lookupChar(2, 2)).to.equal(undefined);
    });
 
    it('should return undefined on lookupChar("test", "2")', () => {
        expect(lookupChar("test", "2")).to.equal(undefined);
    });
 
    it('should return undefined on lookupChar("test", 1.23)', () => {
        expect(lookupChar("test", 1.23)).to.equal(undefined);
    });
 
    it('should return Incorrect index on lookupChar("test", 25)', () => {
        expect(lookupChar("test", 25)).to.equal('Incorrect index');
    });
 
    it('should return Incorrect index on lookupChar("hello", -4)', () => {
        expect(lookupChar("hello", -4)).to.equal('Incorrect index');
    });
 
    it('should return Incorrect index on lookupChar("hello", 5)', () => {
        expect(lookupChar("hello", 5)).to.equal('Incorrect index');
    });
 
    it('should return "o" on lookupChar("hello", 4)', () => {
        expect(lookupChar("hello", 0)).to.equal('o');
    });
 
    it('should return "l" on lookupChar("hello", 3)', () => {
        expect(lookupChar("hello", 3)).to.equal('l');
    });
});


const chai = require("chai");
const expect = chai.expect;

// the function
function lookupChar(string, index) {
  if (typeof string !== "string" || !Number.isInteger(index)) {
    return undefined;
  }

  if (string.length <= index || index < 0) {
    return "Incorrect index";
  }

  return string.charAt(index);
}

// the tests
describe("retrieve character at index from string parameter", () => {
  it("valid input -> (a, 0) => a", () => {
    expect(lookupChar("a", 0)).to.eq("a");
  });

  it("valid input -> (ab, 1) => b", () => {
    expect(lookupChar("ab", 1)).to.eq("b");
  });

  it("invalid input - second parameter is floating point number", () => {
    expect(lookupChar("a", 1.1)).to.be.undefined;
  });

  it("invalid input - first parameter not a string", () => {
    expect(lookupChar(0, 0)).to.be.undefined;
  });

  it("invalid input - second parameter is string", () => {
    expect(lookupChar("a", "a")).to.be.undefined;
  });

  it("invalid input - second parameter is negative number", () => {
    expect(lookupChar("a", -1)).to.eq("Incorrect index");
  });

  it("invalid input - second parameter is out of bounderies", () => {
    expect(lookupChar("a", 1)).to.eq("Incorrect index");
  });
});

