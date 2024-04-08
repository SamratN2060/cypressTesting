/// <reference types="cypress" />
describe('webpage element actions',()=>{

    it('handle textbox in cypress',()=>{

        cy.visit("https://testautomationpractice.blogspot.com/")
        cy.wait(1000)

        cy.title().should('eq','Automation Testing Practice')
        cy.wait(1000)

        cy.get('input#name').type("tester")
        cy.wait(1000)

        cy.get('input#email').type("tester@gmail.com")
        cy.wait(1000)
        
        cy.get('input#phone').type("145236987")
        cy.wait(1000)

        cy.get('#textarea').type("this is automation practice")
        cy.wait(1000)

    })

    it('handle chechbox in cypress',()=>{

        cy.visit("https://testautomationpractice.blogspot.com/")
        cy.wait(1000)

        cy.get("[value='male']").check()
        cy.wait(1000)

        cy.get("[value='sunday']").check();
        cy.wait(1000)
    })
})