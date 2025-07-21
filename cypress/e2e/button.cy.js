describe('Test du bouton compteur', () => {
    beforeEach(() => {
        cy.visit('/');
    });

    it('affiche 0 au départ', () => {
        cy.get('[data-cy="counter-value"]')
            .should('contain.text', 'Vous avez cliqué 0 fois');
    });

    it('incrémente le compteur au clic', () => {
        // clique 3 fois
        cy.get('[data-cy="inc-button"]').click().click().click();

        // vérifie que le compteur affiche 3
        cy.get('[data-cy="counter-value"]')
            .should('contain.text', 'Vous avez cliqué 3 fois');
    });
});