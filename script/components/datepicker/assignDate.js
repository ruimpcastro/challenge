import { clearWarning } from "../warning/clearWarning.js";
import { renderWarning } from "../warning/renderWarning.js";

export function assignDate(element, min, max, onAssignDate) {
  let day;
  let month;
  let year;
  const selectedDate = element.valueAsDate;

  const WARNING_ID = "date-warning";

  // Setting hours to 0 to compare only dates
  min.setHours(0, 0, 0, 0);
  max.setHours(0, 0, 0, 0);

  if (selectedDate < min) {
    element.preventDefault;
    clearWarning(WARNING_ID);
    renderWarning(
      WARNING_ID,
      "Please select a date that is today or later.",
      element
    );
  } else if (selectedDate > max) {
    clearWarning(WARNING_ID);
    element.preventDefault;
    renderWarning(
      WARNING_ID,
      "Please select a date that is within the next year.",
      element
    );
  } else {
    clearWarning(WARNING_ID);
    day = element.valueAsDate.getUTCDate();
    month = element.valueAsDate.getUTCMonth();
    year = element.valueAsDate.getUTCFullYear();
    const newDate = new Date(year, month, day).toISOString();
    const convertedDate = new Date(newDate).toLocaleDateString("de-DE");
    onAssignDate(convertedDate);
  }
}
