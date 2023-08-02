export function clearAutocomplete() {
  const existingResults = document.getElementById("results-list");
  if (existingResults) {
    existingResults.remove();
  }
}
