import { datepicker } from "../../script/components/datepicker/datepicker.js";

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

    const enterKeyEvent = new KeyboardEvent("keypress", { key: "Enter" });

    datepickerElement.dispatchEvent(enterKeyEvent);

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

    const blurEvent = new Event("blur");

    datepickerElement.dispatchEvent(blurEvent);

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
