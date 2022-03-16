import {
  createEditor,
  createEmptyDoc,
  LocalDoc,
} from "@nexteditorjs/nexteditor-core";
import "./style.css";

const root = document.querySelector("#app");
const editor = createEditor(root, new LocalDoc(createEmptyDoc()));
window.editor = editor;
