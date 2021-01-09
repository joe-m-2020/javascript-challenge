// from data.js
var tableData = data;

// YOUR CODE HERE!

//reference table body
var tbody = d3.select("tbody");

//Loop through data and console log each sighting
data.forEach(function(ufoSighting) {
    console.log(ufoSighting);
});

//append one table row for each report object
data.forEach(function(ufoSighting) {
    console.log(ufoSighting);
    var row = tbody.append("tr");
});

//Console log each sighting
data.forEach(function(ufoSighting) {
    console.log(ufoSighting);
    var row = tbody.append("tr");

    Object.entries(ufoSighting).forEach(function([key, value]) {
        console.log(key, value);
    
    });
});

//append 1 cell per sighting value
data.forEach(function(ufoSighting) {
    console.log(ufoSighting);
    var row = tbody.append("tr");

    Object.entries(ufoSighting).forEach(function([key, value]) {
        console.log(key, value);
        var cell = row.append("td");
    });
});
