// from data.js
var tableData = data;

// YOUR CODE HERE!
var button = d3.select("#filter-btn");

button.on("click", function() {
    var inputElement = d3.select("#datetime");
    var inputValue = inputElement.property("value");
    console.log(inputValue);

    var filterData = tableData.filter(sighting => sighting.datetime === inputValue);
    console.log(filterData);

    var tbody = d3.select("tbody");
  
    filterData.forEach(sighting => {
        var row = tbody.append("tr");
        Object.entries(sighting).forEach(([key, value]) => row.append("td").text(value));
    });


})