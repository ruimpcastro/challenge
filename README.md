# Trip Planner

## **Project configuration**

This project is configured with `http-server` to run a mock server. It's also using `Babel` and `Jest` to do tests to the application.

I also added Font Awesome CDN to the `index.html` to manage the icons.

To run this project follow these steps:

- `npm install` - To install all dependencies

- `npm start` - To start mocked server

- `npm test tests/${directory}/${file}` - To run the created tests

## **Key decisions**

### **Datepicker component**

- Added a blur event to assign the shown date when user clicks outside of the datepicker

- Added a keypress event. It triggers when the user presses enter to assign a new date

- The conversion of the date is done when the assignDate callback is called. I'm converting the date values from the format YYYY-MM-DD to the chosen format date to the `"de-DE"` format without the use of any libraries.

### **SearchInput component**

- Created a debounce callback function that gives a timeout to the input box avoiding multiple API calls.

- When the results are fetched it renders an autocomplete component that shows the list of destinations.

### **Warning component**

- Emits warnings on the application with the `<span>` tag

### **Trip Details component**

- Shows a message to the user with the selected details for the trip.

### **Event Emitter**

- Creates and manages events through the app.
