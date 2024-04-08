/// <reference types="cypress"/>
describe('handling date picker', () => {
    it('handle date', () => {
        cy.visit("https://webdriveruniversity.com/")
        cy.get("#datepicker").invoke("removeAttr", "target").click()
        cy.get(".form-control").click();
        cy.get(".datepicker-switch").eq(0).click()
        cy.get(".datepicker-switch").eq(1).click()
        function selectYear(setYear,month,date){
            cy.get("[class='year']").each(($allYears) => {
                let year = $allYears
                if (year.text() === setYear){
                    
                    cy.wrap(year).should('be.visible').click()
                    cy.get("[class='month']").contains(month).should('be.visible').click()
                    cy.get("[class='day']").contains(date).should('be.visible').click()
                }      
    
            })
        }


        selectYear("2022","Mar","10")
    })
})



