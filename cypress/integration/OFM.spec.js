/// <reference types="cypress" />

describe('test search on OFM ', () => {
    beforeEach(() => {
        {
            cy.viewport(1280, 1024);
            cy.visit('https://www.ofm.co.th/');
        };
    });

    it('TC-TEST-001 search an item', () => {
        Search()
         cy.reload()
           .contains('ผลการค้นหาสำหรับ "ดินสอ"')
             });

    it('TC-TEST-002 search item with filter', () => {
        Search()
        Filter()
             });
    
    it('TC-TEST-003 clear filter', () => {
        Search()
        Filter()
        cy.get('.panel:nth-child(2) .text-link').click();
              });
    
    it('TC-TEST-004 search result', () => {
        Search()
        cy.reload()
          .get('.radio-hidden:nth-child(2) .btn').click()
          .scrollTo(1075.280,24)
          .get('.fs-12 my-auto mr-3').contains('1-45').should('be.visible')
          .get('.radio-hidden:nth-child(3) .btn').click()
              });
})

function Search() {
    cy.get('[aria-label="x"]').click()
      .get('.form-navbar-search').click()
      .get('.form-navbar-search').type('ดินสอ{enter}')
}

function Filter() {
    cy.get('.custom-control-label').contains('อุปกรณ์สำนักงาน').click()
      .get('.custom-control-label').contains('ตราม้า').click()
      .get('.product-result').contains('ตราม้า').should('be.visible')
}