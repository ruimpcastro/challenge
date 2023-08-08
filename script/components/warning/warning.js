/**
 * Render warning message
 * @param {string} id - The id of the warning.
 * @param {string} message - The message of the warning.
 * @param {HTMLElement} previousElement - The previous element of the warning.
 * @description Renders a warning message.
 */

export function warning(id, message, previousElement) {
  const warning = document.createElement("span");
  warning.setAttribute("id", id);
  warning.textContent = message;
  previousElement.after(warning);
  warning.style.color = "red";
  warning.style.fontSize = "0.8rem";
}
