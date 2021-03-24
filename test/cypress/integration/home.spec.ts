describe('Home', () => {
    before(() => {
        // Cypress.config('baseUrl', Cypress.env('CYPRESS_BASE_URL'));
        Cypress.config('baseUrl', 'http://example.com');
    });

    it('smoke', () => {
        cy.visit('/');
        expect(cy.get('body')).toBeTruthy();
    });
});
