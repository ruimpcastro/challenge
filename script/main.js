import { datepicker } from "./components/datepicker/datepicker.js";
import { searchInput } from "./components/searchInput/searchInput.js";
import { tripDetails } from "./components/tripDetails/tripDetails.js";
import { removeElement } from "./components/removeElement.js";
import { renderDate } from "./events/dateEmitter.js";

let isDestination = false;
let isDate = false;

const updateParagraphVisibility = () => {
  const paragraph = document.getElementById("booked-trip");
  // If both destination and date are selected, show the paragraph
  if (isDate && isDestination) {
    paragraph.style.display = "flex";
  } else {
    paragraph.style.display = "none";
  }
};

// Creates the span element for the destination
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

// Creates the span element for the date with an event listener
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

const h1Title = document.createElement("h1");
h1Title.setAttribute("id", "title");
h1Title.textContent = "Plan your next trip 🛫";

body.appendChild(h1Title);

const searchContainer = document.createElement("div");
searchContainer.setAttribute("id", "search-container");
body.appendChild(searchContainer);

const destinationLabel = document.createElement("label");
destinationLabel.setAttribute("for", "search-destination");
destinationLabel.setAttribute("id", "destination-label");
destinationLabel.textContent = "Where do you want to go?";
searchContainer.appendChild(destinationLabel);

searchContainer.appendChild(searchInput(handleAssignDestination));

const datepickerContainer = document.createElement("div");
datepickerContainer.setAttribute("id", "datepicker-container");
body.appendChild(datepickerContainer);

const dateLabel = document.createElement("label");
dateLabel.textContent = "Choose a date";
dateLabel.setAttribute("for", "datepicker");
datepickerContainer.appendChild(dateLabel);

datepickerContainer.appendChild(datepicker(handleAssignDate));

const outputContainer = document.createElement("div");
outputContainer.setAttribute("id", "output-container");

body.appendChild(outputContainer);

outputContainer.appendChild(tripDetails());
