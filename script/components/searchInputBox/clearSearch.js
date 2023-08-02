export function clearSearch() {
  const existingResults = document.getElementById("results-list");
  if (existingResults) {
    existingResults.remove();
  }
}
