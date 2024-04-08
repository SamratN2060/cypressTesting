describe('Write data from external file',()=>{
    it('write data from file',()=>{
        cy.writeFile('cypress\ fixtures\ UserData.txt','Hello Samrat')
    })
})