let lib = require("../lib/index");
let expect = require("chai").expect;

describe("cardValidator", () => {
  it("valid", () => {
    expect(lib.cardValidator("5155901285384518")).to.be.equal(true);
  });
  it("valid", () => {
    expect(lib.cardValidator("1234567891234563")).to.be.equal(true);
  });
  it("invalid", () => {
    expect(lib.cardValidator("123456789123456a")).to.be.equal(false);
  });
  it("invalid", () => {
    expect(lib.cardValidator("123456789123456")).to.be.equal(false);
  });
  it("invalid", () => {
    expect(lib.cardValidator("aaaaaaaaaaaaaaaa")).to.be.equal(false);
  });
});
