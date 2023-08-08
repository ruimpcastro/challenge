import { EventEmitter } from "../EventEmitter.js";
import { removeElement } from "../components/removeElement.js";

const dateEmitter = new EventEmitter();

dateEmitter.on("selected-date", (date) => {
  // Checks if the date is already displayed
  removeElement("date-output");

  // Creates the span element for the date
  const dateContainer = document.getElementById("date-output-container");
  const output = document.createElement("span");
  output.setAttribute("id", "date-output");
  output.textContent = ` is booked on ${date}. `;
  dateContainer.appendChild(output);

  return output;
});

/**
 * @method showDate
 * @description Emits an event and calls the listener.
 */

export const renderDate = (date) => {
  dateEmitter.emit("selected-date", date);
};
