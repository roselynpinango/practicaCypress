// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('iniciarSesion', (usuario, password) => {
     // Ingresar el valor del usuario
     cy.get('[data-test="username"]').type(usuario);

     // Ingresar el valor del contraseña
     cy.get('[data-test="password"]').type(password);

     // Hacer clic en el botón Login
     cy.get('[data-test="login-button"]').click();

     // Hacer un chequeo del login exitoso
     cy.get('.title').should('have.text', 'Products'); 
     cy.get('.shopping_cart_link').should('exist');
});