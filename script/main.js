import { datepicker } from "./components/datepicker/datepicker.js";
import { searchInput } from "./components/searchInput/searchInput.js";
import { tripDetails } from "./components/tripDetails/tripDetails.js";
import { removeElement } from "./components/removeElement.js";
import { renderDate } from "./events/dateEmitter.js";

let isDestination = false;
let isDate = false;

const updateParagraphVisibility = () => {
  const paragraph = document.getElementById("booked-trip");
  if (isDate && isDestination) {
    paragraph.style.display = "flex";
  } else {
    paragraph.style.display = "none";
  }
};

const handleAssignDestination = (destination) => {
  const destinationOutput = document.getElementById(
    "destination-output-container"
  );
  isDestination = false;
  if (destination) {
    isDestination = true;
  }

  removeElement("destination-output");

  const span = document.createElement("span");
  span.setAttribute("id", "destination-output");
  span.textContent = `Your trip to ${destination}`;
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

outputContainer.appendChild(tripDetails());
