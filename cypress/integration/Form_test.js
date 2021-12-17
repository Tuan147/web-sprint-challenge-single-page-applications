describe('Pizza App', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3001/')
    })

    const nameInput = () => cy.get('input[name=text]');
    const sizeInput = () => cy.get('input[name=size]');
    const submitBtn = () => cy.get('button[id="submitBtn"]');
    const pepperroni = () => cy.get('input[name=pepperoni]');
    const sausage = () => cy.get('input[name=sausage]');
    const onion = () => cy.get('input[name=onion]');
    const mushroom = () => cy.get('input[name=mushroom]');
    const instructionsInput = () => cy.get('input[name=instructions]');
    
    it('Elements showing on page', () => {
        nameInput().should('exist');
        sizeInput().should('exist');
        submitBtn().should('exist');
        pepperroni().should('exist');
        sausage().should('exist');
        onion().should('exist');
        mushroom().should('exist');
        instructionsInput().should('exist');
    })

    it('can type in inputs', () => {
        nameInput().should('have.value', '').type('tan').should('have.value', 'tan');
    })

    it('can select multiple toppings', () => {
        pepperroni().click();
        sausage().click();
        onion().click();
        mushroom().click();
    })

    it('can submit the form', () => {
        submitBtn().should('not.be.disabled')
    })

})