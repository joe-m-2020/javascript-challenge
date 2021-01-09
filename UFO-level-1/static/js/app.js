// //from data.js
var tableData = data;

// YOUR CODE HERE!
//variable for filter button
var button = d3.select("#filter-btn");

//reference input field

    
// inputfield.on("change", function() {
//     var dateEntered = d3.event.target.value;
//     console.log(dateEntered);
// });


//event handlers for clicking filter
button.on("click", runEnter);
// inputField.on("submit", runEnter);

function runEnter() {
    // prevent refresh
    d3.event.preventDefault();

    // Select date
    var inputField = d3.select("#datetime");

    // get value
    var dateVal = inputField.property("value");

    // print to console
    console.log(dateVal)

    // filter data file

    var filteredData = data.filter(data => data.datetime === dateVal);
    console.log(filteredData);

    // var tbody = d3.select("tbody");

    // data.forEach(function(ufoReport) {
    //     console.log(filteredData);
    //     var row = tbody.append("tr");
    //     Object.entries(filteredData).forEach(function([key, value]) {
    //         console.log(key,value);
    //         //append cell value
    //         var cell = row.append("td");
    //         cell.text(value);
    //     });
    // });
}

//reference table body
// var tbody = d3.select("tbody");

// //Loop through data and console log each sighting
// data.forEach(function(ufoSighting) {
//     console.log(ufoSighting);
// });

//update cell text with d3
// data.forEach(function(ufoReport) {
//     console.log(filteredData);
//     var row = tbody.append("tr");
//     Object.entries(filteredData).forEach(function([key, value]) {
//         console.log(key,value);
//         //append cell value
//         var cell = row.append("td");
//         cell.text(value);
//     });
// });