describe('Mon App React', () => {
    beforeEach(() => {
        cy.visit('/');
    });

    it('devrait afficher le titre principal', () => {
        cy.contains('h1', 'Bienvenue dans mon App').should('be.visible');
    });

    it('permet de naviguer vers /about', () => {
        cy.get('a[href="/about"]').click();
        cy.url().should('include', '/about');
        cy.contains('h2', 'À propos').should('be.visible');
    });
});