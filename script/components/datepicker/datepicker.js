import { renderDate } from "../../events/dateEmitter.js";

/**
 * Datepicker component
 * @returns {HTMLInputElement} datepicker
 * @param {function} onAssignDate
 */

export function datepicker(onAssignDate) {
  let day;
  let month;
  let year;

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

  datepicker.addEventListener("change", () => {
    const selectedDate = datepicker.valueAsDate;

    if (selectedDate < TODAY) {
      datepicker.preventDefault;
      alert("Please select a date that is today or later.");
    } else if (selectedDate > NEXT_YEAR) {
      datepicker.preventDefault;
      alert("Please select a date within the next year.");
    } else {
      day = datepicker.valueAsDate.getDate();
      month = datepicker.valueAsDate.getMonth();
      year = datepicker.valueAsDate.getFullYear();

      const newDate = new Date(year, month, day).toISOString().slice(0, 10);
      const convertedDate = new Date(newDate).toLocaleDateString("de-DE");

      onAssignDate(convertedDate);
    }
  });

  return datepicker;
}
