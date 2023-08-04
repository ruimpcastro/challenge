import { showDate } from "../../events/dateEmitter.js";

export function datepicker() {
  const TODAY = new Date();
  const NEXT_YEAR = new Date(
    TODAY.getFullYear() + 1,
    TODAY.getMonth(),
    TODAY.getDate()
  )
    .toISOString()
    .slice(0, 10);

  let day;
  let month;
  let year;

  const datepicker = document.createElement("input");
  datepicker.setAttribute("type", "date");
  datepicker.setAttribute("id", "datepicker");
  datepicker.setAttribute("value", TODAY.toISOString().slice(0, 10));
  datepicker.setAttribute("min", TODAY.toISOString().slice(0, 10));
  datepicker.setAttribute("max", NEXT_YEAR);

  datepicker.addEventListener("change", () => {
    day = datepicker.valueAsDate.getDate();
    month = datepicker.valueAsDate.getMonth();
    year = datepicker.valueAsDate.getFullYear();

    const newDate = new Date(year, month, day).toISOString().slice(0, 10);
    showDate(newDate);
  });

  return datepicker;
}
