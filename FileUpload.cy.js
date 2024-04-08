import 'cypress-file-upload';
describe('',()=>{
    it.skip('single file upload',()=>{
        cy.visit("https://the-internet.herokuapp.com/upload")

        cy.get("#file-upload").attachFile('cypress notes.pdf')
        cy.get("#file-submit").click()
        cy.wait(200)
        cy.get(".example>h3").should('have.text','File Uploaded!')
    })

    it.skip('single file upload by changing file name',()=>{
        cy.visit("https://the-internet.herokuapp.com/upload")

        cy.get("#file-upload").attachFile({filePath:'cypress notes.pdf',fileName:'my file.pdf'})
        cy.get("#file-submit").click()
        cy.wait(200)
        cy.get(".example>h3").should('have.text','File Uploaded!')
    })

    it.skip('upload file with drag and drop',()=>{
        cy.visit("https://the-internet.herokuapp.com/upload")

        cy.get("#drag-drop-upload").eq(0).attachFile('cypress notes.pdf',{subjectType:'drag-n-drop'})
    })

    it('attach multiple file',()=>{
        cy.visit("https://the-internet.herokuapp.com/upload")
        cy.get("#drag-drop-upload").eq(0).attachFile(["cypress notes.pdf","testfile.pdf"])
    })
})