import { searchResults } from "./searchResults.js";

export function fetchDestination(
  element,
  url,
  search,
  handleAssignDestination
) {
  fetch(url + search)
    .then((response) => response.json())
    .then((data) => {
      if (data.length > 0) {
        element.after(searchResults(...data, search, handleAssignDestination));
      } else {
        element.after(searchResults(null, search, handleAssignDestination));
      }
    })
    .catch((error) => {
      console.log("The following error occured => " + error);
    });
}
