import { EventEmitter } from "../EventEmitter.js";

const dateEmitter = new EventEmitter();

dateEmitter.on("date", (date) => {
  const outputExists = document.getElementById("date-output");
  if (outputExists) {
    outputExists.remove();
  }
  const dateContainer = document.getElementById("datepicker-container");
  const output = document.createElement("span");
  output.setAttribute("id", "date-output");
  output.textContent = date;
  dateContainer.appendChild(output);

  return output;
});

export const showDate = (date) => {
  dateEmitter.emit("date", date);
};
