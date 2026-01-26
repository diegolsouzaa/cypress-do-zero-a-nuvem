describe('Central de Atendimento ao Cliente TAT', () => {
  beforeEach(() => {
    cy.visit('./src/index.html')
  })

  it('verifica o título da aplicação', () => {
    
    cy.title().should('be.equal', 'Central de Atendimento ao Cliente TAT')
  })

  it('Preenche os campos obrigatorios e envia o formulario', ()=>{
    const longText = Cypress._.repeat('abcaaaaaaaaaabbbbbbbbb', 10)
    cy.get('#firstName').type('Diego souza aaaaaa bbbbbb aaaaaaaa bbbbbb')
    cy.get('#lastName').type('Souza')
    cy.get('#email').type('diego.souza@email.com')
    cy.get('#open-text-area').type(longText, {delay:0})
    cy.get('button[type="submit"]').click()

    cy.get('.success').should('be.visible','Mensagem enviada com sucesso.')
  })

  it('Exibe mensagem de erro ao submeter o formulário com um email com formatação inválida', () =>{
    cy.get('#firstName').type('Diego souza aaaaaa bbbbbb aaaaaaaa bbbbbb')
    cy.get('#lastName').type('Souza')
    cy.get('#email').type('diego.souza@email,com')
    cy.get('#open-text-area').type('Teste')
    cy.get('button[type="submit"]').click()

    cy.get('.error').should('be.visible','Valide os campos obrigatórios!')
  })
it.only('Campo telefone continua vazio quando preenchido com um valor não numérico', () => {

  cy.get('#firstName').type('Diego souza')
    cy.get('#lastName').type('Souza')
    cy.get('#email').type('diego.souza@email.com')
    cy.get('#phone')
      .type('abc')
      .should('have.value', '')
    cy.get('#open-text-area').type('Teste')
    cy.get('button[type="submit"]').click()

   cy.get('.success').should('be.visible','Mensagem enviada com sucesso.')

  
})

})