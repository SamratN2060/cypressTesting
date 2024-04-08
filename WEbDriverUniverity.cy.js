/// <reference types="Cypress" />
import 'cypress-file-upload';
describe('Verify the al  elements from website',()=>{
    it('handling txtbox',{browser:'chrome'},()=>{
        cy.visit("https://webdriveruniversity.com/")
        cy.wait(100)
        cy.get("#contact-us").invoke('removeAttr','target').click()
        cy.wait(100)
        cy.get("[name='first_name']").type("tester")
        cy.wait(100)
        cy.get("[name='last_name']").type("Automation")
        cy.wait(100)
        cy.get("[name='email']").type("tester@gmail.com")
        cy.wait(100)
        cy.get("[name='message']").type("this is first testcase")
        cy.wait(100)
        cy.get("[type='submit']").click()
        cy.wait(100)
    })

    it('handling dropdown, checkboxes',{browser:'chrome'},()=>{
        cy.visit("https://webdriveruniversity.com/")
        cy.wait(100)
        cy.get("#dropdown-checkboxes-radiobuttons").invoke('removeAttr','target').click()
        cy.wait(100)

        // handling dropdown with select method
        cy.get("#dropdowm-menu-1").select("Python").should('be.visible')
        cy.wait(100)
        cy.get("#dropdowm-menu-2").select("testng").should('be.visible')
        cy.wait(100)
        cy.get("#dropdowm-menu-3").select(2).should('be.visible')
        cy.wait(100)

        //handling checkboxes

        cy.get("#checkboxes [value='option-1']").check().should('be.checked')
        cy.wait(100)

        cy.get("#checkboxes [value='option-2']").check().should('be.checked')
        cy.wait(100)

        cy.get("#checkboxes [value='option-3']").should('be.checked')
        cy.wait(100)

        cy.get("#checkboxes [value='option-4']").check().should('be.checked')
        cy.wait(100)

        cy.get("#radio-buttons>[value='green']").check().should('be.checked')  

        cy.get("#radio-buttons>[value='purple']").check().should('be.checked')  
    })

    it('handling auto suggestion textbox',{browser:'firefox'},()=>{

        cy.visit("https://webdriveruniversity.com/")
        cy.wait(100)
        cy.get('#autocomplete-textfield').invoke('removeAttr','target').click()
        cy.wait(100)

        cy.get('[placeholder="Food Item"]').type("c")

        cy.get("#myInputautocomplete-list div").each(($el,index,$list)=>{

             if($el.text() === "Coffee"){
                cy.wrap($el).click()
                cy.get("#submit-button").click()
             }
        })

    })

    it('handling JS alert',{browser:'edge'},()=>{
        // JS alert have only OK button
      // cypress automatically click on the OK button but we need to click cancel button then we need to more actions
        cy.visit("https://webdriveruniversity.com/")
        cy.wait(100)
        cy.get("#popup-alerts").invoke('removeAttr','target').click()
        cy.wait(100)

       cy.get("#button1").click()

       cy.on('window:alert',(t)=>{
            expect(t).to.contains("I am an alert box!")
       })

    })

    it('handling JS alert',{browser:'chrome'},()=>{
       // JS alert have only OK button
      // cypress automatically click on the OK button but we need to click cancel button then we need to more actions
        cy.visit("https://webdriveruniversity.com/")
        cy.wait(100)
        cy.get("#popup-alerts").invoke('removeAttr','target').click()
        cy.wait(100)

       cy.get("#button4").click()

       // here we click on the OK button
       cy.on('window:confirm',(t)=>{
            expect(t).to.contains("Press a button!")
       })

       cy.get("#confirm-alert-text").should('have.text',"You pressed OK!")

    //    cy.wait(200)
    //    cy.get("#button4").click()
       
    //    cy.on('window:confirm',(t)=>false)

    //    cy.get("#confirm-alert-text").should('have.text',"You pressed Cancel!")
    })

    it('file upload',{browser:'firefox'},()=>{
       cy.visit("https://webdriveruniversity.com/")

       cy.get("#file-upload").invoke("removeAttr","target").click()

       cy.get("#myFile").attachFile("testfile.pdf")

       cy.get("#submit-button").click()

       cy.on('window:alert',(t)=>{
            expect(t).to.contains("Your file has now been uploaded!")
       })
    })
})