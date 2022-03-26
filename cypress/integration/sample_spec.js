import { getRange, input } from './common';

describe('Simple input test', () => {
  it('Visits link', () => {
    cy.visit('http://localhost:3500');
    //
    input('123');
    cy.get('div[data-type=editor-block]').should('have.length', 1);
    cy.get('div[data-type=editor-block]').should('to.have.text', '123');
    //
    getRange().then((range) => {
      expect(range.start.offset).to.equal(3);
    })

    input('{enter}');
    cy.get('div[data-type=editor-block]').should('have.length', 2);
    getRange().then((range) => {
      expect(range.start.offset).to.equal(0);
    })
    //
    input('{leftArrow}');
    getRange().then((range) => {
      expect(range.start.offset).to.equal(3);
    })
    //
    input('{downArrow}');
    getRange().then((range) => {
      expect(range.start.offset).to.equal(0);
    })
    //
    input('😊1😊😊😊😊😊1');
    getRange().then((range) => {
      expect(range.start.offset).to.equal(14);
    })
    //
    input('{leftArrow}');
    getRange().then((range) => {
      expect(range.start.offset).to.equal(13);
    })
    //
    input('{leftArrow}');
    getRange().then((range) => {
      expect(range.start.offset).to.equal(11);
    })
    //
    input('{leftArrow}');
    getRange().then((range) => {
      expect(range.start.offset).to.equal(9);
    })

    //
    input('{home}');
    getRange().then((range) => {
      expect(range.start.offset).to.equal(0);
    })

    //
    input('{end}');
    getRange().then((range) => {
      expect(range.start.offset).to.equal(14);
    })

    input('{enter}');
    getRange().then((range) => {
      expect(range.start.offset).to.equal(0);
    })

    input('The quick brown fox jumps over the lazy dog.');
    getRange().then((range) => {
      expect(range.start.offset).to.equal(44);
    })

    input('{meta}{leftArrow}');
    getRange().then((range) => {
      expect(range.start.offset).to.equal(40);
    })
  

    
  });
});