
describe('mouse over ction', () => {
    it('drag and drop action', () => {
        cy.visit("https://webdriveruniversity.com/")

        cy.get("#actions").invoke("removeAttr", "target").click()

        cy.get(".thumbnail>#draggable").drag(".thumbnail>#droppable", { force: true })
    })

    it('perform double click action', () => {
        cy.visit("https://webdriveruniversity.com/")

        cy.get("#actions").invoke("removeAttr", "target").click()
        cy.get(".thumbnail>#double-click").dblclick()
    })

    it('mouse over actions', () => {
        cy.visit("https://webdriveruniversity.com/")

        cy.get("#actions").invoke("removeAttr", "target").click()

        cy.get('[style="float:center;"] > .dropbtn').trigger('mouseover')
        cy.wait(200)
        cy.get(".thumbnail>.dropdown.hover>.dropdown-content>.list-alert").should('be.visible').click({ force: true })
    })

    it('click and hold', () => {
        cy.visit("https://webdriveruniversity.com/")

        cy.get("#actions").invoke("removeAttr", "target").click()

        cy.get('#click-box').trigger('mousedown')

    })

    it('AutoSuggestionDropdown', () => {
        cy.visit("https://webdriveruniversity.com/")

        cy.get("#autocomplete-textfield").invoke("removeAttr", "target").click()

        cy.get("#myInput").type("c")

        cy.get("#myInputautocomplete-list>div").each((options,index) => {
            if (options.text() === "Catfish") {
               // cy.get("#myInputautocomplete-list>div").eq(index).click()
             cy.wrap(options).contains("Catfish").click()
                cy.get("#submit-button").click()
                
            }

        })

    })

    it.only('Ajax loader', () => {
        cy.visit("https://webdriveruniversity.com/")

        cy.get("#ajax-loader").invoke("removeAttr", "target").click()

        cy.get("#button1",{ timeout: 100000 }).should('have.id','button1')

        

    })


})