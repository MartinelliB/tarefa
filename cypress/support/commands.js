Cypress.Commands.add('login', (usuario, senha) => {
    cy.get('#username').type(usuario)
    cy.get('#password').type(senha, {log: false})
    cy.get('.woocommerce-form > .button').click()
});
Cypress.Commands.add('Comprar',(nome,sobrenome,endereço,tipo,cidade,email)=>{
    
      cy.get('#billing_first_name').type(nome)
      cy.get('#billing_last_name').type(sobrenome)
      cy.get('#billing_address_1').type(endereço)
      cy.get('#billing_address_2').type(tipo)
      cy.get('#billing_city').type(cidade)
      cy.get('#select2-billing_state-container').click()
      cy.get('.select2-search__field').type('Santa Catarina{enter}')
      cy.get('#billing_postcode').type('88270-000')
      cy.get('#billing_phone').type('2193823')
      cy.get('#billing_email').type(email)
      cy.get('#terms').click()
      cy.get('#place_order').click()

})
