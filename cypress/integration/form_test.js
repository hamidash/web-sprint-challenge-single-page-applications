describe("Testing form inputs", ()=>{
    beforeEach(()=>{
        cy.visit("http://localhost:3000/pizza");
    })
    it("visits localhost", () => {
        cy
        .get('input[name="name"]')
        .type("Borat")
        .should("have.value","Borat")

        cy
        .get('[type="checkbox"]')
        .check()
        .should("be.checked")

        cy
        .get('form[name="orderForm"]')
        .submit()
    })
})