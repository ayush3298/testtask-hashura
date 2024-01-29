<script lang="ts">
  import { onMount } from 'svelte';
  import * as d3 from 'd3';
  export let filteredEmployees;

  function createLineChart() {
    d3.select('#line-chart').selectAll("*").remove();

    const svgWidth = 600;
    const svgHeight = 300;
    const margin = { top: 20, right: 20, bottom: 30, left: 50 };
    const width = svgWidth - margin.left - margin.right;
    const height = svgHeight - margin.top - margin.bottom;

    const sampleData = filteredEmployees.map((d, index) => ({
      name: `${d.first_name} ${d.last_name}`,
      value: d.workinghours
    }));

    // Create scales
    const x = d3.scaleBand()
      .domain(sampleData.map(d => d.name))
      .range([0, width])
      .padding(0.1);

    const y = d3.scaleLinear()
      .domain([0, d3.max(sampleData, d => d.value)])
      .range([height, 0]);

    const svg = d3.select('#line-chart')
      .append('svg')
      .attr('width', svgWidth)
      .attr('height', svgHeight)
      .append('g')
      .attr('transform', `translate(${margin.left},${margin.top})`);

    svg.append('g')
      .attr('transform', `translate(0,${height})`)
      .call(d3.axisBottom(x));

    svg.append('g')
      .call(d3.axisLeft(y));

    svg.append('path')
      .datum(sampleData)
      .attr('fill', 'none')
      .attr('stroke', 'steelblue')
      .attr('stroke-width', 2)
      .attr('d', d3.line()
        .x(d => x(d.name) + x.bandwidth() / 2)
        .y(d => y(d.value))
      );

    svg.selectAll('.dot')
      .data(sampleData)
      .enter().append('circle')
      .attr('class', 'dot')
      .attr('cx', d => x(d.name) + x.bandwidth() / 2)
      .attr('cy', d => y(d.value))
      .attr('r', 4)
      .attr('fill', '#4299E1');
  }

  $: if (filteredEmployees && filteredEmployees.length > 0) {
    createLineChart();
  }
</script>

<div>
  <h2 class="text-lg font-semibold mb-4">Employee Working Hours</h2>
  <div id="line-chart"></div>
</div>
