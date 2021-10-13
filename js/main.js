// write your javascript code here.
// feel free to change the pre-set attributes as you see fit

let margin = {
    top: 60,
    left: 50,
    right: 30,
    bottom: 35
  },
  width = 500 - margin.left - margin.right,
  height = 500 - margin.top - margin.bottom;

//SVG that will hold the visualization 
let svg = d3.select('#vis')
  .append('svg')
  .attr('preserveAspectRatio', 'xMidYMid meet') // this will scale your visualization according to the size of its parent element and the page.
  .attr('width', '100%') // this is now required by Chrome to ensure the SVG shows up at all
  .style('background-color', 'white') 
  .style('border', 'solid')
  .attr('viewBox', [0, 0, width + margin.left + margin.right, height + margin.top + margin.bottom].join(' '))


var toggleColor = (function(){
  var currentColor = "blue";

  return function() {
    currentColor = currentColor == "blue" ? "magenta" : "blue";
    d3.select("circle").style("fill", currentColor);
  }})();

var toggleColor2 = (function(){
  var currentColor = "red";

  return function(){
    currentColor = currentColor == "red" ? "green" : "red";
    d3.select("rect").style("fill", currentColor)
    d3.select("circle").style("fill", currentColor);
  }
})();

// Add a square 
let rect = svg.append('rect')
  .attr('x', '100')
  .attr('y', '200')
  .attr('width', '20%')
  .attr('height', '20%')
  .attr('fill', '#a6cee3')
  .on("mouseover", function(){
    d3.select(this).classed('border', true)})
  .on('mouseout', function(){
    d3.select(this).classed('border', false)})
  .on('click', toggleColor)
  .call(d3.drag()
    .on("drag", draggingSquare));


// Add a circle 
let circle = svg.append('circle') 
  .attr('cx', '350')
  .attr('cy', '250')
  .attr('r', '60')
  .attr('fill', '#b2df8a')
  .on("mouseover", function(){
    d3.select(this).classed('border', true)})
  .on('mouseout', function(){
    d3.select(this).classed('border', false)})
  .call(d3.drag()
    .on("drag", draggingCircle))
  .on("dblclick", toggleColor2)

  function draggingSquare(d) {
    d3.select(this).attr('x', d.x).attr('y', d.y);
  }

  function draggingCircle(d) {
    d3.select(this).attr('cx', d.x).attr('cy', d.y);
  }




