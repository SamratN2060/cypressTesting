
describe('diff traverse methods', () => {

    it.skip('methods of tarverse', () => {

        cy.visit("https://testautomationpractice.blogspot.com/");

        cy.get(".form-check-input").first().check()

        cy.get(".form-check-label").first().then(($el) => {
            let name = $el.text();
            cy.log(name)
        })
        cy.get("#colors>option").each(($el) => {
            let clr = $el.text()
            if (clr === "Green") {
                cy.wrap($el).click()
            }
            cy.log($el.text())
        })
    })

    it.skip('date picker', () => {
        cy.visit("https://testautomationpractice.blogspot.com/");
        cy.get("#datepicker").first().click()
        function monthSelect() {
            cy.get(".ui-datepicker-title>.ui-datepicker-month").then(($el) => {
                var month = $el.text()
                cy.log(month)
                if (month !== "November") {
                    cy.get("[data-handler='next']").click();
                    monthSelect()
                }
            })
        }
        monthSelect()
        cy.get(".ui-datepicker-calendar>tbody>tr>td").contains('10').click()
    })

    it('handling web table',()=>{
        cy.visit("https://testautomationpractice.blogspot.com/");
        cy.get(".wikipedia-search-input").type("java")
         cy.get(".wikipedia-search-button").click()
         cy.get(".wikipedia-search-results>div").contains("JavaScript").invoke('removeAttr','target').click()
         cy.title("JavaScript - Wikipedia").then((el)=>{
            cy.log(el.text)
         })
    })
})