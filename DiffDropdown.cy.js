describe('handling diff types of dropdown',()=>{

    it('Handling static dropdown',()=>{
         cy.visit("https://testautomationpractice.blogspot.com/")

         cy.get("#name").type('test')

         cy.get("#country").select('Brazil')
    })  
    })
