/// <reference types="cypress" />
import { faker } from '@faker-js/faker';

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

  it.only('Deve fazer um pedido na loja Ebac Shop de ponta a ponta', () => {
       //Escolha do Produto
       cy.get('#primary-menu > .menu-item-629 > a').click()
       cy.get('.page-title').should('contain','Produtos')
       cy.get('.post-2559 > .product-block > .block-inner > .image > .product-image > .image-hover').click()
       //Seleciona Tamanho e cor
       cy.get('.button-variable-item-S').click()
       cy.get('.button-variable-item-Red').click()
       //E Adiciona 4 unidades
       cy.get('.input-text').clear() .type(4)
       cy.get('.single_add_to_cart_button').click()
       //E vai para o carrinho
       cy.get('.woocommerce-message > .button').click()
       //E faz o checkout
       cy.visit('http://lojaebac.ebaconline.art.br/checkout/')
       cy.Comprar('Bruno','Martinelli','Nova Trento/SC','casa','Nova Trento',faker.internet.email())
       cy.get('.woocommerce-table__product-total > .woocommerce-Price-amount > bdi').should('exist')

    });

 
 
})