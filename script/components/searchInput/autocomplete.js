export function autocomplete(results, search, onAssignDestination) {
  const searchContainer = document.getElementById("search-container");
  const unorderedList = document.createElement("ul");
  unorderedList.setAttribute("id", "results-list");

  const handleAssignDestination = (newDestination, element) => {
    onAssignDestination(newDestination);
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
    listItem.style.cursor = "default";

    unorderedList.appendChild(listItem);
  } else {
    const categoryItem = document.createElement("li");
    categoryItem.classList.add("item--category");
    categoryItem.textContent = results.category;
    unorderedList.appendChild(categoryItem);

    results.items.forEach((result) => {
      const listItem = document.createElement("li");
      listItem.classList.add("item");
      const boldedResult = result.name.replace(search, `<b>${search}</b>`);
      listItem.innerHTML = boldedResult;

      unorderedList.appendChild(listItem);

      listItem.addEventListener("click", () => {
        handleAssignDestination(result.name, unorderedList);
      });
    });
  }

  return unorderedList;
}
