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

    it.only('TC-TEST-004 search invalid item', () => {
        SearchInvalid()
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

function SearchInvalid() {
    cy.get('[aria-label="x"]').click()
      .get('.form-navbar-search').click()
      .get('.form-navbar-search').type('${enter}')
      .get('.fs-18').contains('ขออภัย! ไม่พบสินค้าที่ตรงกับ').should('be.visible')
      .get('.text-approve').contains('$').should('be.visible')
      .get('.fs-14').contains('โปรดตรวจสอบตัวสะกดว่าถูกต้องหรือไม่ หรือค้นหาโดยใช้คำที่ใกล้เคียง').should('be.visible')
      .get('.fs-14').contains('กรุณาลองค้นหาใหม่อีกครั้ง').should('be.visible')
}