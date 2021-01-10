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
    var inputDateField = d3.select("#datetime");
    // get value
    var dateVal = inputDateField.property("value");
    // print to console
    console.log(dateVal);
    // filter data file
    var filteredData = data.filter(data => data.datetime === dateVal);
    // call buildTable function with filtered data/break if out of range
    buildTable(filteredData);
    // console.log(filteredData)
}
// event handler on load to populate table with all data
tbody.on("load", buildTable(tableData));
//event handler to filter using clickHandler function 
button.on("click", clickHandler);


// // function for filter event handler
// function clickHandler() {
//     // prevent refresh
//     d3.event.preventDefault();
//     // Select any changed field
//     d3.selectAll(".filter").on("change", function() {
//         // you can select the element just like any other selection
//         var listItem = d3.select(this).select("input");
//         console.log(listItem.property("id"));
//         // filter the table based upon id & value
//         // if (listItem.property("id")=="datetime") {
//         //     var filteredData = data.filter(data => data.datetime === listItem.property("value"));
//         // };
//         // buildTable(filteredData);
//     });
// };
// // event handler on load to populate table with all data
// tbody.on("load", buildTable(tableData));
// // event handler to filter using clickHandler function 
// button.on("click", clickHandler);
// // button.on("click", function() {
// //     // you can select the element just like any other selection
// //     var listItem = d3.selectAll("input");
// //     text = listItem.property("text")
// //     console.log(text);
// //     // listItem.style("color", "blue");
  
// //     // var listItemText = listItem.text();
// //     // console.log(listItemText);
// //   });
// //   d3.selectAll(".filter").on("change", function() {
// //     // you can select the element just like any other selection
// //     var listItem = d3.select(this).select("input");
// //     console.log(listItem.property("id"))
// //     filter the table based upon id & value
// //     if listItem.property("id")=='country':
// //         var filteredData = data.filter(data => data.country === );
// //     we do it fo
// //     listItem.style("color", "blue");
  
// //     var listItemText = listItem.text();
// //     console.log(listItemText);
// //   });
  
  