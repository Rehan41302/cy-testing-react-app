describe('payment', () => {
    it('user can make payment', () => {
        // login
        cy.visit('/');
        cy.findByRole('textbox', {  name: /username/i}).type('johndoe')
        cy.findByLabelText(/password/i).type('s3cret')
        cy.findByRole('checkbox', {  name: /remember me/i}).check()
        cy.findByRole('button', {  name: /sign in/i}).click()
        // check account balance
        // clck on pay button
        // search for user
        // add ampunt and note and click pay
        // return to transactions
        // got to personal payments
        // click on payment
        // verify if payment was made
        // verify if payment amount was deducted
    })
})