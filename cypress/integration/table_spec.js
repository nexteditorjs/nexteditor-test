import { getEditor, getRange, input } from './common';

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
    getEditor().then((editor) => {
      const block = editor.getFirstBlock();
      const container = editor.getParentContainer(block);
      const blockIndex = editor.getBlockIndex(block);
      const containerId = container.getAttribute('data-container-id');
      const { children } = editor.doc.getBlockData(containerId, blockIndex);
      expect(children.length).to.equal(9);
      const focusedContainerId = children[3];
      // focused on second row
      cy.get(`div[data-type=editor-container][data-container-id=${focusedContainerId}].child div[data-type=editor-block]`).should('have.length', 1).should('have.id', editor.selection.range.getStart().blockId);
    })
    //
    input('|abc|def|ghi|');
    input('{enter}');
    //
    input('|123|456|789|');
    input('{enter}');

    //
    cy.get('div[data-type=editor-block][data-block-type=table] div[data-type=editor-block][data-block-type=table] div[data-type=editor-block][data-block-type=table] div[data-type=editor-block][data-block-type=table]').should('have.length', 0);
    // nested tables
    cy.get('div[data-type=editor-block][data-block-type=table] div[data-type=editor-block][data-block-type=table] div[data-type=editor-block][data-block-type=table]').should('have.length', 1);

    // nested tables
    cy.get('div[data-type=editor-block][data-block-type=table] div[data-type=editor-block][data-block-type=table]').should('have.length', 2);
  
    //
  });
});