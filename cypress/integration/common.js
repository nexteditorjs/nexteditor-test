export function input(text) {
  cy.get('input.editor-input').type(text, { force: true });
}

export function getEditor() {
  return new Promise((resolve) => {
    cy.window()
    .then((win) => {
      resolve(win.editor);
    });
  });
}

export async function getRange() {
  const editor = await getEditor();
  return editor.selection.range;
}

