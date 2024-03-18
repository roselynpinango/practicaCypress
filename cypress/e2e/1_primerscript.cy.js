describe('AutomationPractice', () => {
    it('TEST-01: Carga de la página principal', () => {
        // Abrir la página de prueba
        cy.visit('http://www.automationpractice.pl/');

        // Chequear que el objeto 'Cart' (carrito de compras) esté visible
        cy.contains('Cart').should('be.visible');
    });

    it('Evaluar que la página tenga al menos 3 imágenes', () => {
        cy.visit('http://www.automationpractice.pl');

        // Chequear que el número de imágenes sea de al menos 3
        cy.get('img').should('have.length.at.least', 3);
    });
});

describe('SauceDemo', () => {
    it('TEST-02: Inicio de Sesión con credenciales válidas', () => {
        // Abrir la página de prueba
        cy.visit('https://www.saucedemo.com/');

        // Ingresar el valor del usuario
        cy.get('[data-test="username"]').type('standard_user');

        // Ingresar el valor del contraseña
        cy.get('[data-test="password"]').type('secret_sauce');

        // Hacer clic en el botón Login
        cy.get('[data-test="login-button"]').click();

        // Hacer un chequeo del login exitoso
        cy.get('.title').should('have.text', 'Products'); 
        cy.get('.shopping_cart_link').should('exist');
    });

    it('TEST-03: Inicio de Sesión usando comandos', () => {
        cy.visit('https://www.saucedemo.com/');

        cy.wait(30000); // Para evitar los errores con timeout

        // Invocación al comando iniciarSesion
        cy.iniciarSesion('standard_user', 'secret_sauce');
    });
});