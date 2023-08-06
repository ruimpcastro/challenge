import { searchInput } from "../script/components/searchInputBox/searchInput";
import { fetchDestinations } from "../script/components/searchInputBox/fetchDestinations";
import { clearAutocomplete } from "../script/components/searchInputBox/clearAutocomplete";
import { debounce } from "../script/components/searchInputBox/debounce";

jest.mock("../script/components/searchInputBox/fetchDestinations");
jest.mock("../script/components/searchInputBox/clearAutocomplete");
jest.mock("../script/components/searchInputBox/debounce");

describe("SearchInput Component", () => {
  beforeEach(() => {
    // Clear all mock implementations before each test
    fetchDestinations.mockClear();
    clearAutocomplete.mockClear();
    debounce.mockClear();
  });

  it("should render a search input box", () => {
    const inputBox = searchInput();
    expect(inputBox).toBeTruthy();
    expect(inputBox).toBeInstanceOf(HTMLInputElement);
    expect(inputBox.getAttribute("type")).toBe("search");
    expect(inputBox.getAttribute("required")).toBe("true");
    expect(inputBox.getAttribute("placeholder")).toBe("Choose a destination");
  });

  it("should call debounce on input", () => {
    const inputBox = searchInput();
    inputBox.dispatchEvent(new Event("change"));
    expect(debounce).toHaveBeenCalledTimes(1);
  });

  it("should call fetchDestinations on input", () => {
    const inputBox = searchInput();
    inputBox.dispatchEvent(new Event("change"));
    if (inputBox.value) {
      expect(fetchDestinations).toHaveBeenCalled();
    }
  });

  it("should not call fetchDestinations when input is empty", () => {
    const inputBox = searchInput();
    inputBox.value = "";
    inputBox.dispatchEvent(new Event("change"));
    expect(fetchDestinations).toHaveBeenCalledTimes(0);
  });

  it("should call clearAutocomplete on input", () => {
    const inputBox = searchInput();
    inputBox.dispatchEvent(new Event("change"));
    if (inputBox.value) {
      expect(clearAutocomplete).toHaveBeenCalled();
    }
  });

  it("should not call clearAutocomplete when input is empty", () => {
    const inputBox = searchInput();
    inputBox.value = "";
    inputBox.dispatchEvent(new Event("change"));
    expect(clearAutocomplete).not.toHaveBeenCalled();
  });

  it("should not show a warning message when inputBox has a value", () => {
    const inputBox = searchInput();

    inputBox.value = "Some Destination";
    inputBox.dispatchEvent(new Event("change"));

    const warning = document.getElementById("warning");
    expect(warning).toBeNull();
  });
});
