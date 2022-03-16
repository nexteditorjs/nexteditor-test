import { getRange, input } from './common';

describe('table test', () => {
  it('Visits link', () => {
    cy.visit('http://localhost:3500/?type=table');
    //
    input('|123|456|789|');
    input('{enter}');
    cy.get('div[data-type=editor-container].root>div[data-type=editor-block]').should('have.length', 1);
    getRange().then((range) => {
      expect(range.getStart().offset).to.equal(0);
    })
    //
  });
});