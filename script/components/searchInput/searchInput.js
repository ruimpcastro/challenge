import { clearWarning } from "../warning/clearWarning.js";
import { renderWarning } from "../warning/renderWarning.js";
import { clearAutocomplete } from "./clearAutocomplete.js";
import { debounce } from "./debounce.js";
import { fetchDestinations } from "./fetchDestinations.js";

/**
 * Search input box component
 * @returns {HTMLInputElement} inputBox
 * @param {function} onAssignDestination
 *
 */

export function searchInput(onAssignDestination) {
  let search;

  const URL =
    "https://api.cloud.tui.com/search-destination/v2/de/package/TUICOM/2/autosuggest/peakwork/";
  const WARNING_ID = "search-warning";
  const WARNING_MESSAGE = "Please select a destination from the list";

  const inputWrapper = document.createElement("div");
  inputWrapper.setAttribute("id", "input-wrapper");
  const umberellaIcon = document.createElement("i");
  umberellaIcon.classList.add("fa-solid", "fa-umbrella-beach");

  inputWrapper.appendChild(umberellaIcon);

  const inputBox = document.createElement("input");
  inputBox.setAttribute("type", "text");
  inputBox.setAttribute("required", true);
  inputBox.setAttribute("id", "search-destination");
  inputBox.setAttribute("placeholder", "Choose a destination...");
  inputWrapper.appendChild(inputBox);

  const clearIcon = document.createElement("i");
  clearIcon.classList.add("fa-solid", "fa-xmark");
  clearIcon.style.cursor = "pointer";
  inputWrapper.appendChild(clearIcon);

  const searchIcon = document.createElement("i");
  searchIcon.classList.add("fa-solid", "fa-magnifying-glass");
  inputWrapper.appendChild(searchIcon);

  clearIcon.addEventListener("click", () => {
    clearWarning(WARNING_ID);
    onAssignDestination("");
    inputBox.value = "";
    search = "";
    renderWarning(WARNING_ID, WARNING_MESSAGE, inputWrapper);
    clearAutocomplete();
  });

  const handleAssignDestination = (newDestination) => {
    inputBox.value = newDestination;
    search = newDestination;
    onAssignDestination(newDestination);
  };

  inputBox.addEventListener(
    "input",
    debounce(() => {
      search = inputBox.value;
      if (search) {
        clearWarning(WARNING_ID);
        fetchDestinations(inputWrapper, URL, search, handleAssignDestination);
      } else {
        clearWarning(WARNING_ID);
        onAssignDestination("");
        renderWarning(WARNING_ID, WARNING_MESSAGE, inputWrapper);
        clearAutocomplete();
      }
    })
  );

  return inputWrapper;
}
