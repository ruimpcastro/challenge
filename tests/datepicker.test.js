import { datepicker } from "../script/components/datepicker/datepicker.js";

describe("Datepicker Component", () => {
  beforeEach(() => {
    document.body.innerHTML = "";
  });

  test("renders correctly", () => {
    const datepickerElement = datepicker();

    document.body.appendChild(datepickerElement);

    expect(document.getElementById("datepicker")).toBeTruthy();

    const today = new Date().toISOString().slice(0, 10);
    expect(datepickerElement.value).toBe(today);
  });

  test("shows alert for past dates", () => {
    const datepickerElement = datepicker();

    document.body.appendChild(datepickerElement);

    const pastDate = new Date().toISOString().slice(0, 10);
    datepickerElement.value = pastDate;

    window.alert = jest.fn();

    datepickerElement.dispatchEvent(new Event("change"));

    expect(window.alert).toHaveBeenCalledWith(
      "Please select a date that is today or later."
    );
  });

  test("shows alert for future dates beyond next year", () => {
    const datepickerElement = datepicker();

    document.body.appendChild(datepickerElement);

    const futureDate = new Date();
    futureDate.setFullYear(futureDate.getFullYear() + 2);
    datepickerElement.value = futureDate.toISOString().slice(0, 10);

    window.alert = jest.fn();

    datepickerElement.dispatchEvent(new Event("change"));

    expect(window.alert).toHaveBeenCalledWith(
      "Please select a date within the next year."
    );
  });
});
