import { clearAutocomplete } from "./clearAutocomplete.js";
import { debounce } from "./debounce.js";
import { fetchDestinations } from "./fetchDestinations.js";

export function SearchInput() {
  let search;
  const URL =
    "https://api.cloud.tui.com/search-destination/v2/de/package/TUICOM/2/autosuggest/peakwork/";

  const inputBox = document.createElement("input");
  inputBox.setAttribute("type", "search");
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

  return inputBox;
}
