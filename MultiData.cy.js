
describe('verify that the user is able to login with multi data', () => {


it('multi data input', () => {
    cy.fixture("multidata").then((data) => {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

        data.forEach((userdata) => {

            cy.get("[placeholder='Username']").type(userdata.username)

            cy.get("[placeholder='Password']").type(userdata.password)

            cy.get("[type='submit']").click()

            

            if(userdata.username === "Admin" && userdata.password === "admin123"){
                cy.get(".oxd-topbar-header-title").should('contain.text', "Dashboard")

                cy.get(".oxd-userdropdown-tab").click()

                cy.get(".oxd-dropdown-menu>li").eq(3).click()

                cy.wait(200)
            }
            else{
                cy.get(".oxd-alert-content.oxd-alert-content--error>p").should('have.text',"Invalid credentials")
            }
        })


    })
})
})
