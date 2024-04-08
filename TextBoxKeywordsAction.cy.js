describe('',()=>{
    it('',()=>{
        cy.visit("http://www.freetextbox.com/demos/")

        var iframe=cy.get(".ctl00_MainContent_FreeTextBox1_DesignBox").eq(1).its('0.contentDocument.body').should('be.visible').then(cy.wrap)
 
        cy.wait(200)
        iframe.get("")
        
    })
})