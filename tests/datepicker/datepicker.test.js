import { datepicker } from "../../script/components/datepicker/datepicker.js";

// Mock the assignDate function
jest.mock("../../script/components/datepicker/assignDate.js", () => ({
  assignDate: jest.fn(),
}));

describe("datepicker", () => {
  let container;

  beforeEach(() => {
    container = document.createElement("div");
    container.id = "container";
    document.body.appendChild(container);
  });

  afterEach(() => {
    document.body.innerHTML = "";
  });

  it("creates a datepicker element and assigns date on Enter keypress", () => {
    const onAssignDateMock = jest.fn();
    const datepickerElement = datepicker(onAssignDateMock);
    container.appendChild(datepickerElement);

    // Create a fake event object
    const enterKeyEvent = new KeyboardEvent("keypress", { key: "Enter" });

    // Simulate Enter keypress event
    datepickerElement.dispatchEvent(enterKeyEvent);

    // Expect the assignDate function to be called
    expect(
      jest.requireMock("../../script/components/datepicker/assignDate.js")
        .assignDate
    ).toHaveBeenCalled();
    expect(
      jest.requireMock("../../script/components/datepicker/assignDate.js")
        .assignDate
    ).toHaveBeenCalledWith(
      datepickerElement,
      expect.any(Date),
      expect.any(Date),
      onAssignDateMock
    );
  });

  it("creates a datepicker element and assigns date on blur event", () => {
    const onAssignDateMock = jest.fn();
    const datepickerElement = datepicker(onAssignDateMock);
    container.appendChild(datepickerElement);

    // Create a fake event object
    const blurEvent = new Event("blur");

    // Simulate blur event
    datepickerElement.dispatchEvent(blurEvent);

    // Expect the assignDate function to be called
    expect(
      jest.requireMock("../../script/components/datepicker/assignDate.js")
        .assignDate
    ).toHaveBeenCalled();
    expect(
      jest.requireMock("../../script/components/datepicker/assignDate.js")
        .assignDate
    ).toHaveBeenCalledWith(
      datepickerElement,
      expect.any(Date),
      expect.any(Date),
      onAssignDateMock
    );
  });
});
