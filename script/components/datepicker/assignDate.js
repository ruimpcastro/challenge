import { removeElement } from "../removeElement.js";
import { warning } from "../warning/warning.js";

/**
 * @param {HTMLInputElement} element - The datepicker element
 * @param {Date} min - The minimum date
 * @param {Date} max - The maximum date
 * @param {function} onAssignDate - The function to assign the date
 *
 * @description Assigns a date to the datepicker
 */

export function assignDate(element, min, max, onAssignDate) {
  let day;
  let month;
  let year;
  const selectedDate = element.valueAsDate;

  const WARNING_ID = "date-warning";

  // Setting hours to 0 to compare only dates
  min.setHours(0, 0, 0, 0);
  max.setHours(0, 0, 0, 0);

  // Checks if the selected date is within the next year
  if (selectedDate < min) {
    element.preventDefault;
    removeElement(WARNING_ID);
    warning(
      WARNING_ID,
      "Please select a date that is today or later.",
      element
    );
    onAssignDate("");
  } else if (selectedDate > max) {
    removeElement(WARNING_ID);
    element.preventDefault;
    warning(
      WARNING_ID,
      "Please select a date that is within the next year.",
      element
    );
    onAssignDate("");
  } else {
    removeElement(WARNING_ID);
    day = element.valueAsDate.getUTCDate();
    month = element.valueAsDate.getUTCMonth();
    year = element.valueAsDate.getUTCFullYear();
    const newDate = new Date(year, month, day).toISOString();
    const convertedDate = new Date(newDate).toLocaleDateString("de-DE");
    onAssignDate(convertedDate);
  }
}
