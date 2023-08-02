export function clearDestinations() {
  const existingResults = document.getElementById("results-list");
  if (existingResults) {
    existingResults.remove();
  }
}
