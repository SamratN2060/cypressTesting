/// <reference types="cypress" />

describe('multi-selected dropdown',()=>{
    it('',()=>{
    cy.visit("https://demoqa.com/select-menu")

    cy.get(':nth-child(8) > .col-md-6 > .css-2b097c-container > .css-yk16xz-control > .css-1hwfws3').select("Green")

    })
})