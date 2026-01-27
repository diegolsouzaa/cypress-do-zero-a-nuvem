Cypress.Commands.add('fillMandatoryFieldsAndSubmit', (data = {
    firstName: 'Joao',
    lastName: 'Alves',
    email: 'joao.alves@email.com',
    text: 'Teste do joao'
}) => {

    cy.get('#firstName').type(data.firstName)
    cy.get('#lastName').type(data.lastName)
    cy.get('#email').type(data.email)
    cy.get('#open-text-area').type(data.text)
    cy.contains('button', 'Enviar').click()
})