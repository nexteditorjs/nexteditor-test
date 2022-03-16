import {
  createEditor,
  createEmptyDoc,
  LocalDoc,
} from "@nexteditorjs/nexteditor-core";
import TableBlock from '@nexteditorjs/nexteditor-table-block';
import { MarkdownInputHandler } from '@nexteditorjs/nexteditor-input-handlers';

import "./style.css";

const root = document.querySelector("#app");

const location = document.location;
const params = new URLSearchParams(location.search);

const testType = params.get('type') || 'simple';

function createSimpleEditor() {
  const editor = createEditor(root, new LocalDoc(createEmptyDoc()), {
    components: {
      tables: [TableBlock],
    },
  });
  return editor;
}

function createTableEditor() {
  const editor = createEditor(root, new LocalDoc(createEmptyDoc()), {
    components: {
      blocks: [TableBlock],
    },
  });
  editor.input.addHandler(new MarkdownInputHandler());
  return editor;
}

const editorFactory = {
  simple: createSimpleEditor,
  table: createTableEditor,
};

window.editor = editorFactory[testType]();
