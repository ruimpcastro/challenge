import { clearAutocomplete } from "./clearAutocomplete.js";
import { debounce } from "./debounce.js";
import { fetchDestinations } from "./fetchDestinations.js";

/**
 * Search input box component
 * @returns {HTMLInputElement} inputBox
 *
 */

export function SearchInput() {
  let search;
  const URL =
    "https://api.cloud.tui.com/search-destination/v2/de/package/TUICOM/2/autosuggest/peakwork/";

  const inputBox = document.createElement("input");
  inputBox.setAttribute("type", "search");
  inputBox.setAttribute("required", true);
  inputBox.classList.add("search-input");
  inputBox.setAttribute("placeholder", "Choose a destination");

  // Add search icon
  // <i class="fa-sharp fa-regular fa-magnifying-glass"></i>

  const handleAssignDestination = (newDestination) => {
    inputBox.value = newDestination;
    search = inputBox.value;
  };

  inputBox.addEventListener(
    "input",
    debounce(() => {
      search = inputBox.value;
      if (search) {
        fetchDestinations(inputBox, URL, search, handleAssignDestination);
      } else {
        clearAutocomplete();
      }
    })
  );

  inputBox.addEventListener("change", () => {
    let showWarning = false;

    if (!search) {
      showWarning = true;
    }

    if (showWarning === true) {
      const warning = document.createElement("span");
      warning.setAttribute("id", "warning");
      warning.textContent = "Please choose a destination";
      inputBox.after(warning);
    }

    if (showWarning === false) {
      const warning = document.getElementById("warning");
      if (warning) {
        warning.remove();
      }
    }
  });

  return inputBox;
}
