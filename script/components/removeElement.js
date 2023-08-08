/**
 * @param {string} id - The id of the warning
 * @description Removes a warning from the DOM.
 *
 */

export function removeElement(id) {
  const existingElement = document.getElementById(id);
  if (existingElement) {
    existingElement.remove();
  }
}
