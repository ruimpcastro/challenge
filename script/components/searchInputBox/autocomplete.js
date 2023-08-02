export function autocomplete(results, search, assignDestination) {
  const searchContainer = document.getElementById("search-container");
  const unorderedList = document.createElement("ul");
  unorderedList.setAttribute("id", "results-list");

  const handleAssignDestination = (newDestination, element) => {
    assignDestination(newDestination);
    element.remove();
  };

  searchContainer.appendChild(unorderedList);

  const existingResults = searchContainer.querySelector("#results-list");
  if (existingResults) {
    existingResults.remove();
  }

  if (search === null) {
    existingResults.remove();
  }

  if (results === null) {
    const listItem = document.createElement("li");
    listItem.classList.add("item");
    listItem.textContent = "No results found";

    unorderedList.appendChild(listItem);
  } else {
    const categoryItem = document.createElement("li");
    categoryItem.classList.add("item--category");
    categoryItem.textContent = results.category;
    unorderedList.appendChild(categoryItem);

    results.items.forEach((result) => {
      const listItem = document.createElement("li");
      listItem.classList.add("item");
      listItem.textContent = result.name;

      unorderedList.appendChild(listItem);

      listItem.addEventListener("click", () => {
        handleAssignDestination(result.name, unorderedList);
      });
    });
  }

  return unorderedList;
}
