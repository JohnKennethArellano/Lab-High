<template>
  <div class="chartContainer flex items-center gap-4">
    <canvas ref="chartCanvas"></canvas>
    <div class="chartDetails w-1/2 flex flex-col">
      <div class="title">Today's Attendance</div>
      <div class="legend">
        <div class="flex items-center gap-2">
          <Icon icon="material-symbols:circle" class="text-sm text-[#8488E0]" /> Absent
        </div>
        <div class="flex items-center gap-2">
          <Icon icon="material-symbols:circle" class="text-sm text-[#84E0BE]" /> Present
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import Chart from 'chart.js/auto';

// Define props
const { absentData, presentData } = defineProps({
  absentData: Number,
  presentData: Number,
});

const chartCanvas = ref(null);
let doughnutChart = null;

onMounted(() => {
  if (chartCanvas.value) {
    doughnutChart = new Chart(chartCanvas.value, {
      type: 'doughnut',
      data: {
        labels: ['Absent', 'Present'],
        datasets: [
          {
            label: 'Attendance',
            data: [absentData, presentData],
            backgroundColor: [
              '#8488E0', // absent
              '#84E0BE', // present
            ],
            borderColor: ['#fff'],
            borderWidth: '5',
            borderRadius: '10',
          },
        ],
      },
      options: {
        plugins: {
          legend: {
            display: false,
          },
        },
      },
    });
  }
});
</script>

<style scoped>
/* Add any necessary styles here */
</style>
