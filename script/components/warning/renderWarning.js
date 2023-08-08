export function renderWarning(id, message, previousElement) {
  const warning = document.createElement("span");
  warning.setAttribute("id", id);
  warning.textContent = message;
  previousElement.after(warning);
  warning.style.color = "red";
  warning.style.fontSize = "0.8rem";
}
