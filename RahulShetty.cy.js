describe("rahul shetty  site", () => {

    it('handle check boxes', () => {

        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");

        cy.get("[for='radio3']>[value='radio3']").click();


        cy.get("[placeholder='Type to Select Countries']").type("in")

        cy.get("#ui-id-1>li").each((value) => {

            cy.log(value.text())

            if (value.text() === "India") {
                cy.wrap(value).click()
            }


        })

        cy.get("#dropdown-class-example").select("Option3")

        cy.get("#checkBoxOption3").check()

        cy.get(".btn-style.class1.class2").invoke("removeAttr", "target").click()

    })

    it("mouse actions", () => {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

        cy.get("#mousehover").trigger('mouseover')
        cy.wait(1000)
        cy.get(".mouse-hover-content>a").eq(0).click()
    })
})