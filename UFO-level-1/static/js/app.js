// //from data.js
var tableData = data;

//variable for filter button
var button = d3.select("#filter-btn");

//variable tbody
var tbody = d3.select("tbody");

// // update cell text with d3
function buildTable(data) {
    tbody.html("");
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


//function for filter event handler
function clickHandler() {
    // prevent refresh
    d3.event.preventDefault();
    // Select date
    var inputField = d3.select("#datetime");
    // get value
    var dateVal = inputField.property("value");
    // print to console
    console.log(dateVal);
    // filter data file
    var filteredData = data.filter(data => data.datetime === dateVal);
    // call buildTable function with filtered data/break if out of range
    // if (filteredData.array = 0) {
    //     alert("Invalid Date");
    // }
    // else {
    //     buildTable(filteredData);
    // }
    buildTable(filteredData);
    // console.log(filteredData)
}
// event handler on load to populate table with all data
tbody.on("load", buildTable(tableData));
//event handler to filter using clickHandler function 
button.on("click", clickHandler);
