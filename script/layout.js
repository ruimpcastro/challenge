import { SearchInput } from "./components/searchInputBox/search_Input.js";
import { datepicker } from "./components/datepicker/datepicker.js";

const body = document.getElementsByTagName("body")[0];

const searchContainer = document.createElement("div");
searchContainer.setAttribute("id", "search-container");
body.appendChild(searchContainer);

searchContainer.appendChild(SearchInput());

const datepickerContainer = document.createElement("div");
datepickerContainer.setAttribute("id", "datepicker-container");
body.appendChild(datepickerContainer);

datepickerContainer.appendChild(datepicker());
