import { autocomplete } from "./autocomplete.js";

export function fetchDestinations(
  element,
  url,
  search,
  handleAssignDestination
) {
  fetch(url + search)
    .then((response) => response.json())
    .then((data) => {
      if (data.length > 0) {
        element.after(autocomplete(...data, search, handleAssignDestination));
      } else {
        element.after(autocomplete(null, search, handleAssignDestination));
      }
    })
    .catch((error) => {
      console.log("The following error occured => " + error);
    });
}
