describe('',()=>{
    it.skip('handling js alert',()=>{

        cy.visit("https://testautomationpractice.blogspot.com/")
        cy.wait(200)
        cy.get("[onclick='myFunctionAlert()']").click()
        cy.on('window:alert',(t)=>{
             expect(t).to.contains("I am an alert box!")
        })

    })

    it.skip('handling confirm alert',()=>{
        cy.visit("https://testautomationpractice.blogspot.com/")
        cy.wait(200)
        cy.get("[onclick='myFunctionConfirm()']").click()
        cy.on('window:confirm',(t)=>false)
    })

    it('handling prompt alert',()=>{
        cy.visit("https://testautomationpractice.blogspot.com/")
        cy.wait(200)
        cy.get("[onclick='myFunctionPrompt()']").click()
        cy.window().then(win=>{
            cy.stub(win,'prompt').returns('I am tester')
        })
    })


})