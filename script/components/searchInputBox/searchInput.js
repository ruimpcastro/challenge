import { clearAutocomplete } from "./clearAutocomplete.js";
import { debounce } from "./debounce.js";
import { fetchDestinations } from "./fetchDestinations.js";

export function searchInput(placeholder) {
  let search;
  const url =
    "https://api.cloud.tui.com/search-destination/v2/de/package/TUICOM/2/autosuggest/peakwork/";

  const inputBox = document.createElement("input");
  inputBox.setAttribute("type", "search");
  inputBox.classList.add("search-input");
  inputBox.setAttribute("placeholder", placeholder);

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
        fetchDestinations(inputBox, url, search, handleAssignDestination);
      } else {
        clearAutocomplete();
      }
    })
  );

  return inputBox;
}
