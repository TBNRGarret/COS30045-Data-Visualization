// Step 2: Change style of an HTML element
d3.select("h1")
  .style("color", "green");

// Step 3: Append a paragraph to a div
d3.select("#d3-container")
  .append("p")
  .text("Purchasing a low energy consumption TV will help with your energy bills!");

// Step 4: Append and style a rectangle in SVG
d3.select("svg")
  .append("rect")
  .attr("x", 50)
  .attr("y", 30)
  .attr("width", 100)
  .attr("height", 30)
  .style("fill", "green");