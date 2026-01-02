const textInput = document.getElementById("textBtnInput");
const addActionBtn = document.getElementById("addActionBtn");
const undoBtn = document.getElementById("undoBtn");
const redoBtn = document.getElementById("redoBtn");
const currentText = document.getElementById("currentText");
const errorMsg = document.getElementById("errorMsg");
let undoStack = JSON.parse(localStorage.getItem("undostack")) || [];
let redoStack = JSON.parse(localStorage.getItem("redostack")) || [];

addEventListener("load", () => {
  currentText.textContent =
    undoStack.length > 0 ? undoStack[undoStack.length - 1] : "";
});

addActionBtn.addEventListener("click", () => {
  if (textInput.value == "") {
    errorMsg.textContent = "Input field cannot be empty";
    return;
  }
  undoStack.push(textInput.value);
  localStorage.setItem("undostack", JSON.stringify(undoStack));
  redoStack = [];
  localStorage.setItem("redostack", JSON.stringify(redoStack));
  currentText.textContent = textInput.value;
  textInput.value = "";
  errorMsg.textContent = "";
});

undoBtn.addEventListener("click", () => {
  if (undoStack.length === 0) {
    return;
  }

  const lastText = undoStack.pop();
  localStorage.setItem("undostack", JSON.stringify(undoStack));
  redoStack.push(lastText);
  localStorage.setItem("redostack", JSON.stringify(redoStack));
  currentText.textContent =
    undoStack.length > 0 ? undoStack[undoStack.length - 1] : "";
});

redoBtn.addEventListener("click", () => {
  if (redoStack.length === 0) {
    return;
  }

  const lastText = redoStack.pop();
  localStorage.setItem("redostack", JSON.stringify(redoStack));
  undoStack.push(lastText);
  localStorage.setItem("undostack", JSON.stringify(undoStack));
  currentText.textContent =
    undoStack.length > 0 ? undoStack[undoStack.length - 1] : "";
});
