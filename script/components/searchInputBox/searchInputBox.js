import { clearSearch } from "./clearSearch.js";
import { debouncer } from "./debouncer.js";
import { fetchDestination } from "./fetchDestination.js";

export function searchInputBox(placeholder) {
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
    debouncer(() => {
      search = inputBox.value;
      if (search) {
        fetchDestination(inputBox, url, search, handleAssignDestination);
      } else {
        clearSearch();
      }
    })
  );

  return inputBox;
}
