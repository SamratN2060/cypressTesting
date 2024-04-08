
 describe('apply hooks',()=>{
     
     before('before',()=>{
        cy.log("******* Launching *******")
     })

     before('before',()=>{
        cy.log("******* database connection *******")
     })

     after('after',()=>{
        cy.log("******* disconnectiong database connection *******")
     })
     
     after('after',()=>{
        cy.log("******* closing browser *******")
     })

     beforeEach('beforeEach',()=>{
        cy.log("******* login *******")
     })

     afterEach('afterEach',()=>{
        cy.log("******* logout *******")
     })

    it('application working',()=>{
       cy.log("******* app working *******")
    })

 })