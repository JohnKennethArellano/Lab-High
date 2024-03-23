<script setup>
import DashboardDoughnut from '@/components/Graphs/DashboardDoughnut.vue';
import DashboardProgressBar from '@/components/Graphs/DashboardProgressBar.vue';
import InfiniteScroll from '@/components/Table/InfiniteScroll.vue';

// chart values
const absentCount = 7;
const presentCount = 24;

// please use percentage (presents divided by overall number of students)
const today = 77;
const week = 95;
const month = 86;
</script>

<template>
  <div class="tabTitle">dashboard</div>
  <div class="dashboardCharts h-fit gap-4">
    <DashboardDoughnut :absent-data="absentCount" :present-data="presentCount" class="w-1/2" />
    <DashboardProgressBar :today-progress="today" :week-progress="week" :month-progress="month" class="w-1/2" />
  </div>

  <div class="tabTitle2">TODAY’S TIME IN & OUT</div>
  <Suspense>
    <InfiniteScroll />
    <template #fallback>
      <p>Loading...</p>
    </template>
  </Suspense>
</template>
<style scoped>
/* @media screen and (max-width: 600px) {
  .dashboardCharts {
    flex-direction: column;
  }

  .chart {
    flex-direction: column-reverse;
    height: fit-content;
  }
} */

@media screen and (max-width:1360px) {
  .dashboardCharts {
    flex-direction: column;
  }

  .chart {
    width: 100%;
  }

  .chart:nth-of-type(1) {
    justify-content: center;
  }
}
</style>