import { searchInput } from "./components/searchInputBox/searchInput.js";
import { datepicker } from "./components/datepicker/datepicker.js";

// Layout of the page.

const body = document.getElementsByTagName("body")[0];

const searchContainer = document.createElement("div");
searchContainer.setAttribute("id", "search-container");
body.appendChild(searchContainer);

searchContainer.appendChild(searchInput());

const datepickerContainer = document.createElement("div");
datepickerContainer.setAttribute("id", "datepicker-container");
body.appendChild(datepickerContainer);

datepickerContainer.appendChild(datepicker());
