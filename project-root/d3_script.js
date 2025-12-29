d3.csv("data/DATA.csv", d => ({
  brand: d.Brand_Reg,
  energy: +d["Labelled energy consumption (kWh/year)"]
})).then(data => {
  console.log("Loaded data:", data);
  createBarChart(data);
});

const createBarChart = (data) => {
  const barHeight = 15;     // constant height for each bar
  const barSpacing = 5;     // space between bars
  const xScale = d3.scaleLinear()
  .domain([0, 1310])
  .range([0, 500]);
  const yScale = d3.scaleBand()
 .domain(data.map(d => d.brand))
 .range([0, 500]);

const svg = d3.select(".responsive-svg-container")
  .append("svg")
  .attr("width", 800)
  .attr("height", 600)
  .attr("viewBox", "0 0 500 1600")
  .style("border", "1px solid black");

  svg.selectAll("rect")
    .data(data)
    .join("rect")
    .attr("x", 0)                              // bars start at left edge
    .attr("y", (d, i) => i * (barHeight + barSpacing)) // space bars vertically
    .attr("width", d => d.energy)              // bar length = energy value
    .attr("height", barHeight)
    .attr("fill", "blue");
};


