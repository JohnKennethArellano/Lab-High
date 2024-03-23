<template>
  <div class="chart flex items-center gap-4 ">
    <div class="size-60"><canvas ref="chartCanvas"></canvas></div>
    <div class="chartDetails flex flex-col min-w-fit">
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
@media screen and (max-width:850px) {
  .chart:nth-of-type(1) {
    flex-direction: column-reverse;
    /* align-items: start; */
  }

  .chartDetails {
    align-self: start;
  }
}

@media screen and (max-width:620px) {
  .chart .title {
    white-space: wrap;
  }

  .size-60 {
    width: 75%;
    height: auto;
    display: flex;
    justify-content: center;
  }
}
</style>
