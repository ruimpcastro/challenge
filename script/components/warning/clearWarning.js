export function clearWarning(id) {
  const existingWarning = document.getElementById(id);
  if (existingWarning) {
    existingWarning.remove();
  }
}
