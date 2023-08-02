import { searchInput } from "./components/searchInputBox/searchInput.js";

const body = document.getElementsByTagName("body")[0];

const searchContainer = document.createElement("div");
searchContainer.setAttribute("id", "search-container");
body.appendChild(searchContainer);

searchContainer.appendChild(searchInput("Destination"));

const datepickerContainer = document.createElement("div");
datepickerContainer.setAttribute("id", "datepicker-container");
body.appendChild(datepickerContainer);
