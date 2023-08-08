import { assignDate } from "./assignDate.js";

/**
 * Datepicker component
 * @returns {HTMLInputElement} datepicker - The datepicker element.
 * @param {function} onAssignDate - The function to assign the date.
 * @description Creates a datepicker input element.
 */

export function datepicker(onAssignDate) {
  const TODAY = new Date();
  const NEXT_YEAR = new Date(
    TODAY.getFullYear() + 1,
    TODAY.getMonth(),
    TODAY.getDate()
  );

  const datepicker = document.createElement("input");
  datepicker.setAttribute("type", "date");
  datepicker.setAttribute("id", "datepicker");
  datepicker.setAttribute("value", TODAY.toISOString().slice(0, 10));
  datepicker.setAttribute("min", TODAY.toISOString().slice(0, 10));
  datepicker.setAttribute("max", NEXT_YEAR.toISOString().slice(0, 10));

  datepicker.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      assignDate(datepicker, TODAY, NEXT_YEAR, onAssignDate);
    }
  });
  datepicker.addEventListener("blur", () => {
    assignDate(datepicker, TODAY, NEXT_YEAR, onAssignDate);
  });

  return datepicker;
}
