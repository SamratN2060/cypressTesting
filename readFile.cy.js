describe('Read data fron file',()=>{
    it('read data from file',()=>{
        cy.readFile('cypress fixtures UserData.txt').then((data)=>{
            cy.log(data)
        })
    })
})