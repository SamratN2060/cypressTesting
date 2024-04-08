/// <reference types="cypress" />

describe('',()=>{
    it('',()=>{
        cy.visit("https://www.redbus.in/")

        cy.wait(100)

      //  cy.title().should('have.text',"Book Bus Tickets Online, Easy & Secure Booking, Top Operators - redBus")

        cy.get("[role='button']").eq(0).type('kolh')

        cy.wait(300)
         cy.get("ul.sc-dnqmqq.eFEVtU>li").first().click()

         cy.wait(300)
         cy.get("[role='button']").eq(1).type('pune')

         cy.wait(300)
         cy.get("ul.sc-dnqmqq.eFEVtU>li").first().click()

         cy.wait(300)
         cy.get(':nth-child(4) > .DayTilesWrapper__SpanContainer-sc-19pz9i8-0 > :nth-child(6) > .DayTiles__CalendarDaysSpan-sc-1xum02u-1').click()

         cy.wait(300)
         cy.get("#search_button").click()

         cy.wait(300)
})
})