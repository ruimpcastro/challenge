import { searchInput } from "../../script/components/searchInput/searchInput.js";

jest.mock("../../script/components/searchInput/fetchDestinations.js");

describe("searchInput", () => {
  let container;
  let onAssignDestinationMock;

  beforeEach(() => {
    container = document.createElement("div");
    onAssignDestinationMock = jest.fn();
  });

  afterEach(() => {
    document.body.innerHTML = "";
    jest.resetAllMocks();
  });

  test("displays warning when search and input box values are empty", () => {
    const inputElement = searchInput(onAssignDestinationMock);
    const clearIcon = inputElement.querySelector(".fa-xmark");

    document.body.appendChild(inputElement);

    clearIcon.dispatchEvent(new Event("click"));

    const warningElement = document.getElementById("search-warning");
    expect(warningElement).toBeTruthy();
    expect(onAssignDestinationMock).toHaveBeenCalledWith("");
  });

  test("clicking clearIcon cleans input and search values", () => {
    const inputElement = searchInput(onAssignDestinationMock);
    const inputBox = inputElement.querySelector("input");
    const clearIcon = inputElement.querySelector(".fa-xmark");

    document.body.appendChild(inputElement);

    inputBox.value = "destination";
    clearIcon.dispatchEvent(new Event("click"));

    expect(inputBox.value).toBe("");
    expect(onAssignDestinationMock).toHaveBeenCalledWith("");
  });
});
