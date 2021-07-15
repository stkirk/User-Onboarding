describe("User-Onboarding", () => {
  //navigate to dev server
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });
  //Make sure tests are working
  it("sanity checks", () => {
    //step 1 - make assertion(s) with expect methods
    //these are examples of unit tests
    expect(5).to.equal(5);
    expect(1 + 2).to.equal(3);
    //when using non-primitive data types use eql for affirmatives
    expect({}).to.eql({});
    expect({}).to.not.equal({});
  });

  //CONSTANTS******

  //close parent describe
});
