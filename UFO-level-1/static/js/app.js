// //from data.js
var tableData = data;

// YOUR CODE HERE!
//variable for filter button
var button = d3.select("#filter-btn");

//variable tbody

var tbody = d3.select("tbody");
// // update cell text with d3
function buildTable(data) {
    data.forEach(function(ufoReport) {
        // console.log(ufoReport);
        var row = tbody.append("tr");
        Object.entries(ufoReport).forEach(function([key, value]) {
            // console.log(key,value);
            //append cell value
            var cell = row.append("td");
            cell.text(value);
        });
    });    
}


// button.on("click", runEnter);
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
    buildTable(filteredData)

}
button.on("click", runEnter);
