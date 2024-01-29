<script lang="ts">
  import StatCard from '$lib/StatCard.svelte';
  import PieChart from '$lib/PieChart.svelte';
  import LineChart from '$lib/LineChart.svelte';
  import { getDepartments, getEmployees } from '$lib/dashboardData';
  import { onMount } from "svelte";

  let departments = [];
  let employees = [];
  let selectedDepartmentId = '1';
  export let filteredEmployees = [];

  onMount(async () => {
    departments = await getDepartments();
    employees = await getEmployees();
    console.log(employees)
    updateFilteredEmployees();
  });

  $: if (selectedDepartmentId) {
    updateFilteredEmployees();
  }

  function updateFilteredEmployees() {
    console.log(employees)
    filteredEmployees = employees //.filter(emp => emp.departmentId === selectedDepartmentId);
    console.log(filteredEmployees)
  }
</script>

<div class="min-h-screen bg-gray-100 p-5">
  <header class="flex justify-between items-center p-5 bg-white shadow rounded-lg mb-10">
    <!-- Logo and search bar -->
    <!-- Profile and settings -->
  </header>

  <div class="grid grid-cols-1 md:grid-cols-4 gap-4 mb-10">
    <!-- Statistic Cards -->
    <StatCard title="Total Orders" value="9526" percentage="4.2%" increase={true} />
    <StatCard title="Total Revenue" value="$8323" percentage="1.2%" increase={true} />
    <StatCard title="Visitors" value="6200" percentage="5.2%" increase={true} />
    <StatCard title="Messages" value="5630" percentage="2.2%" increase={true} />
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-3 gap-4">
    <!-- Line Chart -->


    <!-- Pie Chart -->
    <div class="bg-white shadow rounded-lg p-5">
      <PieChart {filteredEmployees} />
    </div>
    <div class="lg:col-span-2 bg-white shadow rounded-lg p-5">
      <LineChart {filteredEmployees} />
    </div>
  </div>


  <!-- Other components and sections as needed -->
</div>
