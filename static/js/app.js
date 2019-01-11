// from data.js
var tableData = data;

// Variables
var submit = d3.select("#filter-btn");
var tbody = d3.select("tbody");
var input = d3.select("#datetime");
var reset = d3.select("#reset-btn");



//filter
submit.on("click", () => {
  d3.event.preventDefault();
  var Dateinput = input.property("value").trim();
  var filtered = tableData.filter(tableData => tableData.datetime === Dateinput);
  console.log(filtered)
  tbody.html("");
  let response = {
    filtered}


  if (response.filtered.length !== 0) {
    //when data found
    populate(filtered);}
    //when no result found
    else {
      tbody.append("tr").append("td").text("No results,enter another date"); }})

reset.on("click", () => {
    tbody.html("");
    populate(data)
    console.log("Table reset")})