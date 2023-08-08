/**
 *
 * @returns {HTMLParagraphElement} HTMLParagraphElement
 * @description Creates a paragraph element with a span for the destination and date.
 *
 */

export function tripDetails() {
  // Creates the container for the trip details
  const outputContainer = document.getElementById("output-container");
  const paragraph = document.createElement("p");
  paragraph.style.display = "none";
  paragraph.setAttribute("id", "booked-trip");
  outputContainer.appendChild(paragraph);

  // Creates the span elements for the destination and date
  const selectedContainer = document.createElement("span");
  selectedContainer.setAttribute("id", "selected-container");
  paragraph.appendChild(selectedContainer);

  // Adds the span elements for the destination
  const destinationOutput = document.createElement("span");
  destinationOutput.setAttribute("id", "destination-output-container");

  selectedContainer.appendChild(destinationOutput);

  // Adds the span elements for the date
  const dateOutput = document.createElement("span");
  dateOutput.setAttribute("id", "date-output-container");

  selectedContainer.appendChild(dateOutput);

  // Creates the span element for the enjoy message
  const enjoy = document.createElement("span");
  enjoy.setAttribute("id", "enjoy");
  enjoy.textContent = "Enjoy your trip! 🏖";
  paragraph.appendChild(enjoy);

  return paragraph;
}
