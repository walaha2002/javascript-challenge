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
    var inputElement2 = d3.select("#city");
    var inputElement3 = d3.select("#state");
    var inputElement4 = d3.select("#country");
    var inputElement5 = d3.select("#shape");

    //Get the value property of the input element
    var inputValue = inputElement.property("value");
    var inputValue2 = inputElement2.property("value");
    var inputValue3 = inputElement3.property("value");
    var inputValue4 = inputElement4.property("value");
    var inputValue5 = inputElement5.property("value");
    //console.log(inputValue);
    //console.log(tableData);

    //This long rambling code is my own!!!
    // if (inputValue != "" && inputValue2 == "" && inputValue3 == "") {
    //     var filteredData = tableData.filter(date => date.datetime === inputValue);
    // }
    // else if (inputValue != "" && inputValue2 != "" && inputValue3 == "") {
    //     var filteredData = tableData.filter(date => date.datetime === inputValue)
    //         .filter(date => date.city === inputValue2);
    // }
    // else if (inputValue == "" && inputValue2 != "" && inputValue3 == "") {
    //     var filteredData = tableData.filter(date => date.city === inputValue2);
    // }

    // else if (inputValue != "" && inputValue2 != "" && inputValue3 != "") {
    //     var filteredData = tableData.filter(date => date.datetime === inputValue)
    //         .filter(date => date.city === inputValue2).filter(date => date.state === inputValue3);
    // }
    // else if (inputValue == "" && inputValue2 == "" && inputValue3 != "") {
    //     var filteredData = tableData.filter(date => date.state === inputValue3);
    // }
    // else if (inputValue != "" && inputValue2 == "" && inputValue3 != "") {
    //     var filteredData = tableData.filter(date => date.datetime === inputValue)
    //         .filter(date => date.state === inputValue3);
    // }
    // else if (inputValue == "" && inputValue2 != "" && inputValue3 != "") {
    //     var filteredData = tableData.filter(date => date.city === inputValue2)
    //         .filter(date => date.state === inputValue3);
    // }
    ///////////////////////////////////////////////

    if (inputValue != "") {
        var filteredData = tableData.filter(date => date.datetime === inputValue);
    } else
        filteredData = data.forEach(function (sightings) {
            //console.log(sightings);
            var row = tbody.append("tr");
            Object.entries(sightings).forEach(function ([key, value]) {
                var cell = row.append("td");
                cell.text(value);

            });
        });
    if (inputValue2 != "") {
        filteredData = filteredData.filter(date => date.city === inputValue2);
    } else
        filteredData = data.forEach(function (sightings) {
            //console.log(sightings);
            var row = tbody.append("tr");
            Object.entries(sightings).forEach(function ([key, value]) {
                var cell = row.append("td");
                cell.text(value);

            });
        });


    // var filteredData = tableData.filter(date => date.datetime === inputValue)
    //     .filter(date => date.city === inputValue2);

    // if (inputValue2 != "") {
    //     var filteredCity = tableData.filter(date => date.city === inputValue2);
    // }
    // else {
    //     var filteredCity = tableData;
    // }
    // function filteredCity(byCity){
    //     return tableData.filter(date => date.city === inputValue2);
    // }


    // function filteredDate(byDate){
    //     return tableData.filter(date => date.datetime === inputValue);
    // }
    // function filteredCity(byCity){
    //     return tableData.filter(date => date.city === inputValue2);
    // }

    // function filteredData() {
    //     tableData.filter(filteredDate).filter(filteredCity);
    // }

    //Chaining filters together finally works
    //Source:  https://forum.freecodecamp.org/t/filter-multiple-condition-javascript/341164/3
    // var filteredData = tableData.filter(date => date.datetime === inputValue)
    //     .filter(date => date.city === inputValue2);
    //     .filter(date => date.state === inputValue3)
    //     .filter(date => date.country === inputValue4)
    //     .filter(date => date.shape === inputValue5);

    //var filteredData = tableData.filter(filteredDate).filter(filteredCity);
    //var filteredData = filteredDate.filter(filteredCity);
    // var filteredData = tableData.filter(date => date.datetime === inputValue)
    //         .filter(date => date.city === inputValue2)
    //         .filter(date => date.state === inputValue3)
    //         .filter(date => date.country === inputValue4)
    //         .filter(date => date.shape === inputValue5);

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