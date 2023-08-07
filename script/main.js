import { datepicker } from "./components/datepicker/datepicker.js";
import { searchInput } from "./components/searchInput/searchInput.js";
import { renderDate } from "./events/dateEmitter.js";

let isDestination = false;
let isDate = false;

const updateParagraphVisibility = () => {
  if (isDate && isDestination) {
    paragraph.style.display = "block";
  } else {
    paragraph.style.display = "none";
  }
};

const handleAssignDestination = (destination) => {
  isDestination = false;
  if (destination) {
    isDestination = true;
  }

  const outputExists = document.getElementById("destination-output");
  if (outputExists) {
    outputExists.remove();
  }
  const span = document.createElement("span");
  span.setAttribute("id", "destination-output");
  span.textContent = `We're booking your trip to ${destination}`;
  destinationOutput.appendChild(span);
  updateParagraphVisibility();
};

const handleAssignDate = (date) => {
  isDate = false;
  if (date) {
    isDate = true;
  }

  renderDate(date);
  updateParagraphVisibility();
};

// Layout of the page.

const body = document.querySelector("body");

const searchContainer = document.createElement("div");
searchContainer.setAttribute("id", "search-container");
body.appendChild(searchContainer);

searchContainer.appendChild(searchInput(handleAssignDestination));

const datepickerContainer = document.createElement("div");
datepickerContainer.setAttribute("id", "datepicker-container");
body.appendChild(datepickerContainer);

datepickerContainer.appendChild(datepicker(handleAssignDate));

const outputContainer = document.createElement("div");
outputContainer.setAttribute("id", "output-container");

body.appendChild(outputContainer);

const paragraph = document.createElement("p");
paragraph.setAttribute("id", "booked-trip");
outputContainer.appendChild(paragraph);

const destinationOutput = document.createElement("span");
destinationOutput.setAttribute("id", "destination-output-container");

paragraph.appendChild(destinationOutput);

const dateOutput = document.createElement("span");
dateOutput.setAttribute("id", "date-output-container");

paragraph.appendChild(dateOutput);
