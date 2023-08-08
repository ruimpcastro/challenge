import { searchInput } from "../../script/components/searchInput/searchInput.js";
import { debounce } from "../../script/components/searchInput/debounce.js";
import { fetchDestinations } from "../../script/components/searchInput/fetchDestinations.js";
import { removeElement } from "../../script/components/removeElement.js";
import { warning } from "../../script/components/warning/warning.js";

// Mock the debounce, fetchDestinations, removeElement and warning functions
jest.mock("../../script/components/searchInput/debounce.js");
jest.mock("../../script/components/searchInput/fetchDestinations.js");
jest.mock("../../script/components/removeElement.js");
jest.mock("../../script/components/warning/warning.js");

describe("searchInput", () => {
  let mockOnAssignDestination;
  let inputWrapper;
  let inputBox;
  let clearIcon;
  let searchIcon;
  let debounceCallback;

  beforeEach(() => {
    mockOnAssignDestination = jest.fn();
    debounceCallback = jest.fn();
    debounce.mockImplementation((callback) => debounceCallback);

    inputWrapper = searchInput(mockOnAssignDestination);
    inputBox = inputWrapper.querySelector("#search-destination");
    clearIcon = inputWrapper.querySelector(".fa-xmark");
    searchIcon = inputWrapper.querySelector(".fa-magnifying-glass");
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test("clears input and calls onAssignDestination when clear icon is clicked", () => {
    inputBox.value = "Some value";
    clearIcon.click();

    expect(removeElement).toHaveBeenCalledWith("search-warning");
    expect(mockOnAssignDestination).toHaveBeenCalledWith("");
    expect(inputBox.value).toBe("");
    expect(inputBox.value).toBe("");
    expect(debounceCallback).not.toHaveBeenCalled();
    expect(fetchDestinations).not.toHaveBeenCalled();
  });

  test("calls fetchDestinations and assigns destination on input", () => {
    const newDestination = "New Destination";
    inputBox.value = newDestination;
    inputBox.dispatchEvent(new Event("input"));

    expect(removeElement).toHaveBeenCalledWith("search-warning");
    expect(fetchDestinations).toHaveBeenCalledWith(
      inputWrapper,
      expect.any(String),
      newDestination,
      expect.any(Function)
    );
    expect(debounceCallback).toHaveBeenCalled();
    expect(mockOnAssignDestination).not.toHaveBeenCalled();
  });

  test("calls onAssignDestination and shows warning when input is empty", () => {
    inputBox.value = "";
    inputBox.dispatchEvent(new Event("input"));

    expect(removeElement).toHaveBeenCalledWith("search-warning");
    expect(mockOnAssignDestination).toHaveBeenCalledWith("");
    expect(removeElement).toHaveBeenCalledWith("results-list");
    expect(warning).toHaveBeenCalledWith(
      "search-warning",
      "Please select a destination from the list",
      inputWrapper
    );
    expect(fetchDestinations).not.toHaveBeenCalled();
  });
});
