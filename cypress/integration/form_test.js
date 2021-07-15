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
  const usernameInput = () => cy.get("[data-cy=usernameInput]");
  const emailInput = () => cy.get("[data-cy=emailInput]");
  const passwordInput = () => cy.get("[data-cy=passwordInput]");
  const tosCheckbox = () => cy.get("[data-cy=tosCheckbox]");
  //errors
  const usernameError = () => cy.get("[data-cy=usernameError]");
  const emailError = () => cy.get("[data-cy=emailError]");
  const passwordError = () => cy.get("[data-cy=passwordError]");
  const tosError = () => cy.get("[data-cy=tosError]");

  //make sure my elements as constants exist
  it("the elements exist", () => {
    usernameInput().should("exist");
    emailInput().should("exist");
    passwordInput().should("exist");
    tosCheckbox().should("exist");
  });

  //Input tests
  describe("Enter text into inputs and verify what was entered is contained in the input", () => {
    it("can type in username input", () => {
      usernameInput()
        .should("have.value", "")
        .type("TestUser")
        .should("have.value", "TestUser");
    });
    it("can type in email input", () => {
      emailInput()
        .should("have.value", "")
        .type("fake@email.com")
        .should("have.value", "fake@email.com");
    });
    it("can type in password input", () => {
      passwordInput()
        .should("have.value", "")
        .type("abc12345")
        .should("have.value", "abc12345");
    });
  });

  //checkbox test

  //close parent describe
});
