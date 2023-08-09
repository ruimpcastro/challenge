import { removeElement } from "../removeElement.js";

/**
 * @param {Object} results - The results of the search
 * @param {string} search - The search term
 * @param {function} onAssignDestination - The function to assign the destination
 * @returns {HTMLUListElement} HTMLUListElement
 *
 */

export function autocomplete(results, search, onAssignDestination) {
  const searchContainer = document.getElementById("search-container");
  const unorderedList = document.createElement("ul");
  unorderedList.setAttribute("id", "results-list");

  // Assigns a destination to the search input and removes the old unordered list element
  const handleAssignDestination = (newDestination) => {
    removeElement("warning");
    onAssignDestination(newDestination);
    removeElement("results-list");
  };

  searchContainer.appendChild(unorderedList);

  // Removes the old unordered list element
  removeElement("results-list");

  // Checks if the results are null and displays a message if they are
  if (results === null) {
    const listItem = document.createElement("li");
    listItem.classList.add("item");
    listItem.textContent = "No results found";
    listItem.style.cursor = "default";

    unorderedList.appendChild(listItem);
  } else {
    // Sorts the results alphabetically
    results.items.sort((a, b) => a.name.localeCompare(b.name));

    // Creates the first element from the unordered list which is the category
    const categoryItem = document.createElement("li");
    categoryItem.classList.add("item--category");
    categoryItem.textContent = results.category;
    unorderedList.appendChild(categoryItem);

    // Creates the rest of the elements from the unordered list which are the results
    results.items.forEach((result) => {
      const listItem = document.createElement("li");
      listItem.classList.add("item");
      const boldedResult = result.name.replace(search, `<b>${search}</b>`);
      listItem.innerHTML = boldedResult;

      unorderedList.appendChild(listItem);

      // Assigns a destination to the search input when the user clicks on a result if not clicked on any listItem give a warning sign
      listItem.addEventListener("click", () => {
        handleAssignDestination(result.name);
      });
    });
  }

  // Removes the unordered list element when the user clicks outside of it
  document.addEventListener("click", (event) => {
    if (event.target.closest("#search-container")) {
      return;
    }
    removeElement("results-list");
  });

  return unorderedList;
}
