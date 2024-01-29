<script lang="ts">
  import { onMount } from 'svelte';
  import * as d3 from 'd3';
  import type { Employee } from '$lib/types';

  export let filteredEmployees: Employee[];
  let data : Employee[]

  let colorScale;
  let totalVisits: number;

  onMount(() => {
      console.log(filteredEmployees)
    if (data && data.length > 0) {
        console.log(data)
      createPieChart();
      totalVisits = 10 //data.reduce((total, emp) => total + emp.projectsAssigned, 0);
      colorScale = d3.scaleOrdinal(d3.schemeCategory10);
    }
  });

  function createPieChart() {
        console.log(filteredEmployees)
        const width = 300;
        const height = 300;
        const radius = Math.min(width, height) / 2;

        const svg = d3.select('#pie-chart')
            .attr('width', width)
            .attr('height', height)
            .append('g')
            .attr('transform', `translate(${width / 2}, ${height / 2})`);

        const pie = d3.pie<Employee>().value(d => d.projectsassigned)(filteredEmployees);
        const arc = d3.arc().innerRadius(radius * 0.7).outerRadius(radius);

        svg.selectAll('path')
            .data(pie)
            .join('path')
            .attr('d', arc)
            .attr('fill', (d, i) =>colorScale(i.toString()))
            .attr('stroke', 'white')
            .style('stroke-width', '6px');
  }
  $: if (filteredEmployees && Object.keys(filteredEmployees).length > 0) {
        console.log(filteredEmployees)
       totalVisits = 10 //data.reduce((total, emp) => total + emp.projectsAssigned, 0);
      colorScale = d3.scaleOrdinal(d3.schemeCategory10);
    createPieChart();
  }
</script>

<div class="card bg-white shadow rounded-lg overflow-hidden p-6">
    <h2 class="text-lg font-semibold mb-4">Top Referral</h2>
    <svg id="pie-chart"></svg>
    <div class="legend">
        {#each filteredEmployees as employee, i}
            <div class="flex items-center justify-between mb-2">
                <div class="flex items-center">
                              <span class="inline-block w-4 h-4 mr-2" style="background-color: {colorScale(i.toString())};"></span>
                    <span class="text-sm">{employee.first_name}</span>
                </div>
                <span class="font-semibold">{employee.projectsassigned}</span>
            </div>
        {/each}
    </div>
</div>
