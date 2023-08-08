import { assignDate } from "../../script/components/datepicker/assignDate";
import { removeElement } from "../../script/components/removeElement";
import { warning } from "../../script/components/warning/warning";

jest.mock("../../script/components/removeElement");
jest.mock("../../script/components/warning/warning");

describe("assignDate function", () => {
  let mockElement;
  let mockOnAssignDate;

  beforeEach(() => {
    // Create mock element and onAssignDate function for each test
    mockElement = document.createElement("input");
    mockElement.setAttribute("type", "date");
    mockOnAssignDate = jest.fn();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test("should call onAssignDate with converted date if selected date is within range", () => {
    let day;
    let month;
    let year;

    mockElement.valueAsDate = new Date();
    day = mockElement.valueAsDate.getUTCDate();
    month = mockElement.valueAsDate.getUTCMonth();
    year = mockElement.valueAsDate.getUTCFullYear();
    const selectedDate = new Date(year, month, day);

    const minDate = new Date();
    const maxDate = new Date(selectedDate.getFullYear() + 1, month, day);

    minDate.setHours(0, 0, 0, 0);
    maxDate.setHours(0, 0, 0, 0);

    assignDate(mockElement, minDate, maxDate, mockOnAssignDate);

    expect(removeElement).toHaveBeenCalledTimes(1);
    expect(warning).not.toHaveBeenCalled();
    expect(mockOnAssignDate).toHaveBeenCalledWith(
      selectedDate.toLocaleDateString("de-DE")
    );
  });

  test("should show warning and call onAssignDate with empty string if selected date is before min date", () => {
    const selectedDate = new Date();
    const minDate = new Date(
      selectedDate.getFullYear() + 1,
      selectedDate.getMonth(),
      selectedDate.getDate()
    );

    assignDate(mockElement, minDate, new Date(), mockOnAssignDate);

    expect(removeElement).toHaveBeenCalledTimes(1);
    expect(warning).toHaveBeenCalledTimes(1);
    expect(mockOnAssignDate).toHaveBeenCalledWith("");
  });

  test("should show warning and call onAssignDate with empty string if selected date is after max date", () => {
    const selectedDate = new Date();
    const maxDate = new Date(
      selectedDate.getFullYear() - 1,
      selectedDate.getMonth(),
      selectedDate.getDate()
    );

    assignDate(mockElement, new Date(), maxDate, mockOnAssignDate);

    expect(removeElement).toHaveBeenCalledTimes(1);
    expect(warning).toHaveBeenCalledTimes(1);
    expect(mockOnAssignDate).toHaveBeenCalledWith("");
  });
});
