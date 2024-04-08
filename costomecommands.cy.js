
describe('create custome command', () => {
    it('hrmlogin cammand', () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.applogin("[placeholder='Username']", "Admin", "[placeholder='Password']", "admin123", "[type='submit']")

    })
})