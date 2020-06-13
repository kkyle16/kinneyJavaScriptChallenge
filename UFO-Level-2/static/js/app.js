// from data.js
var tableData = data;

var button = d3.select("#filter-btn");

// Monitors changes to the dropdown menu
d3.select("#selSearch").on("change", updateField);

// Pulls the value selected from the dropdown menu
function updateField() {
    var dropDownMenu = d3.select("#selSearch");
    var dropDownValue = dropDownMenu.property("value");
    console.log(dropDownValue);

    dropDownValue = dropDownValue.charAt(0).toUpperCase() + dropDownValue.slice(1);

    // Changes the label above the input box
    var label = d3.select("#field-label");
    label.text(`Enter a ${dropDownValue}`);

    // Adjusts the placeholder based on the newly selected category
    if (dropDownValue === "Date") {
        d3.select("#filter-input").attr("placeholder", "1/11/2011");
    }
    else {
        d3.select("#filter-input").attr("placeholder", `${dropDownValue}`);
    }
    //d3.select("#filter-input").property("value") = null;
    return dropDownValue
}

button.on("click", function() {
    var inputElement = d3.select("#filter-input");
    var inputValue = inputElement.property("value");
    console.log(inputValue);

    // Pulls the field to filter by from the dropdown selection, then filters by the correct field
    // based off of the input data
    var filterBy = updateField();
    if (filterBy === "Date") {
        var filterData = tableData.filter(sighting => sighting.datetime === inputValue);
    }
    else if (filterBy === "City") {
        inputValue = inputValue.toLowerCase()
        var filterData = tableData.filter(sighting => sighting.city === inputValue);
    }
    else if (filterBy === "State") {
        var filterData = tableData.filter(sighting => sighting.state === inputValue);
    }
    else if (filterBy === "Country") {
        var filterData = tableData.filter(sighting => sighting.country === inputValue);
    }
    else if (filterBy === "Shape") {
        var filterData = tableData.filter(sighting => sighting.shape === inputValue);
    }
    console.log(filterData);

    // Appends the filtered data to the table section
    var tbody = d3.select("tbody");
    filterData.forEach(sighting => {
        var row = tbody.append("tr");
        Object.entries(sighting).forEach(([key, value]) => row.append("td").text(value));
    });


})