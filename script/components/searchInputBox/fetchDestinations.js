import { destinationsList } from "./destinationsList.js";

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
        element.after(
          destinationsList(...data, search, handleAssignDestination)
        );
      } else {
        element.after(destinationsList(null, search, handleAssignDestination));
      }
    })
    .catch((error) => {
      console.log("The following error occured => " + error);
    });
}
