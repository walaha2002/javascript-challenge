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

