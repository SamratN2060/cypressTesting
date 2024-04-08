describe('orangeHRM testCases', () => {
    it('orange hrm login', () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

        cy.fixture("orangrHrm").then((data) => {
            cy.get("[placeholder='Username']").type(data.username)

            cy.get("[placeholder='Password']").type(data.password)

            cy.get("[type='submit']").click()

            cy.get(".oxd-topbar-header-title").should('contain.text',"Dashboard")

        })


    })
})