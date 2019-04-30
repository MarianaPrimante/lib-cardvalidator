const lib = require("../index");
const expect = require("chai").expect;

describe("cardValidator", () => {
  it("valid: '5155901285384518'", () => {
    expect(lib.cardValidator("5155901285384518")).to.be.equal(true);
  });
  it("valid: '1234567891234563'", () => {
    expect(lib.cardValidator("1234567891234563")).to.be.equal(true);
  });
  it("valid: 1234567891234563", () => {
    expect(lib.cardValidator(1234567891234563)).to.be.equal(true);
  });
  it("invalid: '123456789123456a'", () => {
    expect(lib.cardValidator("123456789123456a")).to.be.equal(false);
  });
  it("invalid: '123456789123456'", () => {
    expect(lib.cardValidator("123456789123456")).to.be.equal(false);
  });
  it("invalid: 123456789123456", () => {
    expect(lib.cardValidator(123456789123456)).to.be.equal(false);
  });
  it("invalid: 'aaaaaaaaaaaaaaaa'", () => {
    expect(lib.cardValidator("aaaaaaaaaaaaaaaa")).to.be.equal(false);
  });
});
