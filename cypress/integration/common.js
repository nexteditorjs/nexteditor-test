export function input(text) {
  cy.get('input.editor-input').type(text, { force: true });
}

export function getRange() {
  return new Promise((resolve) => {
    cy.window()
    .then((win) => {
      const range = win.editor.selection.range;
      resolve(range);
    });
  });
}
