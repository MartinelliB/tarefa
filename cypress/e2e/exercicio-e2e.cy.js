/// <reference types="cypress" />

context('Exercicio - Testes End-to-end - Fluxo de pedido', () => {
  /*  Como cliente 
      Quero acessar a Loja EBAC 
      Para fazer um pedido de 4 produtos 
      Fazendo a escolha dos produtos
      Adicionando ao carrinho
      Preenchendo todas opções no checkout
      E validando minha compra ao final */

  beforeEach(() => {
      cy.visit('/')
  });

  it('Deve fazer um pedido na loja Ebac Shop de ponta a ponta', () => {
      //TODO: Coloque todo o fluxo de teste aqui, considerando as boas práticas e otimizações
      cy.get('#primary-menu > .menu-item-629 > a').click()
      cy.get('.page-title').should('contain','Produtos')
      cy.get('.product-block > .block-inner > .image > .product-image > .image-hover').should('exist')
      cy.get('.post-2559 > .product-block > .block-inner > .image > .product-image > .image-hover').click()
      cy.get('#tab-title-description > a').should('exist')
      cy.get('.button-variable-item-S').click()
      cy.get('.button-variable-item-Red').click()
      cy.get('.input-text').clear() .type(4)
      cy.get('.single_add_to_cart_button').click()
      cy.get('.woocommerce-message').should('contain','carrinho')
      cy.get('.woocommerce-message > .button').click()
      cy.get('.checkout-button').click()
      cy.get('.woocommerce-billing-fields > h3').should('exist')
      cy.get('#billing_first_name').type('Bruno')
      cy.get('#billing_last_name').type('Martinelli')
      cy.get('#billing_address_1').type('Nova Trento/Sc')
      cy.get('#billing_address_2').type('Casa')
      cy.get('#billing_city').type('Nova Trento')
      cy.get('#select2-billing_state-container').click()
      cy.get('.select2-search__field').type('Santa Catarina{enter}')
      cy.get('#billing_postcode').type('88270-000')
      cy.get('#billing_phone').type('2193823')
      cy.get('#billing_email').type('sajdna@sadjnfi.com')
      cy.get('#terms').click()
      cy.get('#place_order').click()
      cy.get('.woocommerce-table__product-total > .woocommerce-Price-amount > bdi').should('exist')


      




      

  });


})