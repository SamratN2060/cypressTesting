
describe('',()=>{
    it.skip('',()=>{
        cy.visit("https://testautomationpractice.blogspot.com/")
        cy.get("#draggable>p").drag("#droppable>p",{force:true})
    })
})