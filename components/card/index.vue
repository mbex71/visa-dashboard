<template>
  <div
    class="flex flex-col bg-white border border-gray-200 shadow-sm rounded-xl p-4 md:p-5"
  >
    <!-- Header  -->
    <div></div>

    <!-- Content -->
    <div class="w-full">
      <ClientOnly>
        <apexchart
          width="100%"
          type="line"
          :options="chartOptions"
          :series="series"
        ></apexchart>
      </ClientOnly>
    </div>
  </div>
</template>
<script setup lang="ts">
const chartOptions = {
  chart: {
    id: "vuechart-example",
  },
  xaxis: {
    categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998],
  },
};
const series = [
  {
    name: "series-1",
    data: [30, 40, 35, 50, 49, 60, 70, 91],
  },
];
</script>
