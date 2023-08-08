import { removeElement } from "../removeElement.js";
import { warning } from "../warning/warning.js";
import { debounce } from "./debounce.js";
import { fetchDestinations } from "./fetchDestinations.js";

/**
 * @param {function} onAssignDestination - The function to assign the destination.
 * @returns {HTMLDivElement} HTMLDivElement
 *
 * @description Renders the search input.
 *
 */

export function searchInput(onAssignDestination) {
  let search;

  const URL =
    "https://api.cloud.tui.com/search-destination/v2/de/package/TUICOM/2/autosuggest/peakwork/";

  const WARNING_ID = "search-warning";
  const WARNING_MESSAGE = "Please select a destination from the list";

  // Creates the wrapper for the input element
  const inputWrapper = document.createElement("div");
  inputWrapper.setAttribute("id", "input-wrapper");
  const umberellaIcon = document.createElement("i");
  umberellaIcon.classList.add("fa-solid", "fa-umbrella-beach");

  inputWrapper.appendChild(umberellaIcon);

  // Creates the input element
  const inputBox = document.createElement("input");
  inputBox.setAttribute("type", "text");
  inputBox.setAttribute("required", true);
  inputBox.setAttribute("id", "search-destination");
  inputBox.setAttribute("placeholder", "Choose a destination...");
  inputWrapper.appendChild(inputBox);

  const destinationLabel = document.createElement("label");
  destinationLabel.setAttribute("for", "search-destination");
  destinationLabel.textContent = "Where do you want to go?";

  // Adds an icon to clear the input
  const clearIcon = document.createElement("i");
  clearIcon.classList.add("fa-solid", "fa-xmark");
  clearIcon.style.cursor = "pointer";
  inputWrapper.appendChild(clearIcon);

  // Adds a search icon to the input
  const searchIcon = document.createElement("i");
  searchIcon.classList.add("fa-solid", "fa-magnifying-glass");
  inputWrapper.appendChild(searchIcon);

  // Clears the input when the user clicks on the clear icon
  clearIcon.addEventListener("click", () => {
    removeElement(WARNING_ID);
    onAssignDestination("");
    inputBox.value = "";
    search = "";
    warning(WARNING_ID, WARNING_MESSAGE, inputWrapper);
    removeElement("results-list");
  });

  // Assigns a destination to the search input when the user clicks on a result
  const handleAssignDestination = (newDestination) => {
    inputBox.value = newDestination;
    search = newDestination;
    onAssignDestination(newDestination);
  };

  // Fetches the results from the API when the user types in the input
  inputBox.addEventListener(
    "input",
    debounce(() => {
      search = inputBox.value;
      if (search) {
        removeElement(WARNING_ID);
        fetchDestinations(inputWrapper, URL, search, handleAssignDestination);
      } else {
        removeElement(WARNING_ID);
        onAssignDestination("");
        warning(WARNING_ID, WARNING_MESSAGE, inputWrapper);
        removeElement("results-list");
      }
    })
  );

  return inputWrapper;
}
