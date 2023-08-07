import { EventEmitter } from "../EventEmitter.js";

const dateEmitter = new EventEmitter();

dateEmitter.on("selected-date", (date) => {
  const outputExists = document.getElementById("date-output");
  if (outputExists) {
    outputExists.remove();
  }
  const dateContainer = document.getElementById("date-output-container");
  const output = document.createElement("span");
  output.setAttribute("id", "date-output");
  output.textContent = ` on the following date: ${date}`;
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
