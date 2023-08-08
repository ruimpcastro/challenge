import { autocomplete } from "./autocomplete.js";

/**
 * @param {HTMLInputElement} element - The input element.
 * @param {string} url - The url to fetch the data from.
 * @param {string} search - The search term.
 * @param {function} handleAssignDestination - The function to assign the destination.
 *
 * @description Fetches the data from the url and renders the autocomplete results.
 *
 */

export function fetchDestinations(
  element,
  url,
  search,
  handleAssignDestination
) {
  fetch(url + search)
    .then((response) => response.json())
    .then((data) => {
      // Checks if the data is not empty and renders the autocomplete results
      if (data.length > 0) {
        element.after(autocomplete(...data, search, handleAssignDestination));
      } else {
        element.after(autocomplete(null, search, handleAssignDestination));
      }
    })
    .catch((error) => {
      alert("The following error occured => " + error);
    });
}
