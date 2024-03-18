describe('DemoBlaze', () => {
    it('TEST-01 Completar el formulario de Contacto', () => {
        // cy.viewport(382, 543); Resolucion por pixeles
        cy.viewport('iphone-5'); // modelo de dispositivo 
        
        // Acceder a la página
        cy.visit('https://demoblaze.com/');

        cy.contains('PRODUCT STORE').should('be.visible');
        cy.screenshot();

        // Hacer clic en el enlace Contact
        cy.get('#navbarExample > ul > li:nth-child(2) > a').click();

        cy.screenshot();

        cy.get('#recipient-email').should('be.visible');

        // Completar el formulario
        cy.get('#recipient-email').type("micorreo@gmail.com");
        cy.get('#recipient-name').type('Juan Perez');
        cy.get('#message-text').type('Mensaje de Contacto');

        cy.screenshot();

        // Hacer clic en el botón Send Message
        cy.get('#exampleModal > div > div > div.modal-footer > button.btn.btn-primary').click();

        cy.screenshot();
    });
});