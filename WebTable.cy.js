
describe('handling web table', () => {
    it.skip('extract data fron data table', () => {
        cy.visit("https://testautomationpractice.blogspot.com/")
        cy.get("[name='BookTable']>tbody>tr>td:nth-child(1)").each(($name, index) => {
           const cource=$name.text()
        //    cy.log(cource)
            if (cource === "Learn JS") {
                cy.get("[name='BookTable']>tbody>tr>td:nth-child(2)").eq(index).then(($el) => {
                    cy.log($el.text())
                })
            }
        })
    })

    it.skip('check the checkbox by verifying the product name', () => {
        cy.visit("https://testautomationpractice.blogspot.com/")
        cy.get("#productTable>tbody>tr>td:nth-child(2)").each(($prod,idx)=>{
            const prodName=$prod.text()
            if(prodName === "Product 5"){
                cy.get("#productTable>tbody>tr>td:nth-child(3)").eq(idx).then(($price)=>{
                    let price=$price.text()
                    cy.log(price)
                })

                cy.get("#productTable>tbody>tr>td:nth-child(4)>input").eq(idx).check()
            }
        })
        
    })

    it('Verify that the product name by its price is greater that $25',()=>{
        cy.visit("https://testautomationpractice.blogspot.com/")
        function prizeList(){
            cy.get("#pagination>li").each((page,pageI)=>{
                const pg=parseInt(page.text())
               if(pg < 5){
                cy.get("#pagination>li").contains(pg).click()
                cy.get("#productTable>tbody>tr>td:nth-child(3)").each(($el,index)=>{
                    const prize=parseInt($el.text())
                   cy.log(prize)
              })             
               }
            })
        }
        prizeList()
    })
})