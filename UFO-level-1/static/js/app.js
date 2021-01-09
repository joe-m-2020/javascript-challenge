// from data.js
var tableData = data;

// YOUR CODE HERE!

//reference table body
var tbody = d3.select("tbody");

//Loop through data and console log each sighting
data.forEach(function(ufoSighting) {
    console.log(ufoSighting);
});

//update cell text with d3
data.forEach(function(weatherReport) {
    console.log(weatherReport);
    var row = tbody.append("tr");
    Object.entries(weatherReport).forEach(function([key, value]) {
        console.log(key,value);
        //append cell value
        var cell = row.append("td");
        cell.text(value);
    });
});