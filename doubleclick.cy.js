describe('double click',()=>{
    it('verify the double click action', () => {
        cy.visit("https://testautomationpractice.blogspot.com/")
        cy.get("[ondblclick='myFunction1()']").dblclick()
        cy.get("#field2").then((el)=>{
            cy.log(el.text())
             
        })
       
        })
})