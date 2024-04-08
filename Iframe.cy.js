
describe('', () => {
    it('Handling iframe', () => {
        cy.visit("https://the-internet.herokuapp.com/iframe")

        let iframe = cy.get("#mce_0_ifr").its('0.contentDocument.body').should('be.visible').then(cy.wrap)
        iframe.should('have.text', "Your content goes here.").clear().type("test")
    })

    it('handling ifram using cypress plugin', () => {

        cy.visit("https://the-internet.herokuapp.com/iframe")

        cy.frameLoaded("#mce_0_ifr")

        cy.iframe("#mce_0_ifr").clear().type("test123")
    })
})