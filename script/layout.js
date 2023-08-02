import { searchInputBox } from "./components/searchInputBox/searchInputBox.js";

const body = document.getElementsByTagName("body")[0];

const searchContainer = document.createElement("div");
searchContainer.setAttribute("id", "search-container");
body.appendChild(searchContainer);

searchContainer.appendChild(searchInputBox("Destination"));

const datepickerContainer = document.createElement("div");
datepickerContainer.setAttribute("id", "datepicker-container");
body.appendChild(datepickerContainer);
