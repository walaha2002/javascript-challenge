// from data.js
var tableData = data;

// YOUR CODE HERE!
//Get a reference to the table body
var tbody = d3.select("tbody");

//Console.log the weathr data from data.js
console.log(data);

//Use d3 to append 1 cell per sighting value

data.forEach(function (sightings) {
    //console.log(sightings);
    var row = tbody.append("tr");
    Object.entries(sightings).forEach(function ([key, value]) {
        var cell = row.append("td");
        cell.text(value);

    });
});

//Select the button
var button = d3.select("#filter-btn");

//Select the form
//var form = d3.select(".form-group");
//var form = d3.select("#form");
var form = d3.select(".form-control");

//Create event handlers
button.on("click", runEnter);
form.on("submit", runEnter);

//Complete the event handler function for the form
function runEnter() {
    //Prevent the page from refreshing
    d3.event.preventDefault();

    //Select the input element and get the raw HTMl node
    var inputElement = d3.select("#datetime");
    //var inputElement = d3.select("#datetime");

    //Get the value property of the input element
    var inputValue = inputElement.property("value");
    console.log(inputValue);
    //console.log(tableData);

    //var filteredData = tableData.filter((date) => date.datetime === inputValue);

    var filteredData = tableData.filter(date => date.datetime === inputValue ||
        date.city === inputValue ||
        date.state === inputValue ||
        date.country === inputValue ||
        date.shape === inputValue);
    //console.log(filteredData);
    //return(filteredData);


    /////////////////////////////////////////////////


    //Select Unordered list element by ID
    //var list = d3.select(".list-group");
    var list = d3.select("#filters");

    //Remove all data from the table to replace with filtered data (Lesson 3, Activity 9)
    tbody.html("");
  
    //Use function similar to above to display filteredData table

    filteredData.forEach(function (byDate) {
        //console.log(sightings);
        var row = tbody.append("tr");
        Object.entries(byDate).forEach(function ([key, value]) {
            var cell = row.append("td");
            cell.text(value);

        });
    });

}