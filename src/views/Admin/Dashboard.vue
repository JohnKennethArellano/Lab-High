<script setup>
import DashboardDoughnut from '@/components/Graphs/DashboardDoughnut.vue';
import DashboardProgressBar from '@/components/Graphs/DashboardProgressBar.vue';
import {useStore} from 'vuex';
const store = useStore();


console.log(store.getters.getUser)

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
  <div class="dashboardCharts h-[250px] gap-4">
    <DashboardDoughnut :absent-data="absentCount" :present-data="presentCount" />
    <DashboardProgressBar :today-progress="today" :week-progress="week" :month-progress="month" />
  </div>
</template>
<style scoped>
@media screen and (max-width: 600px) {
  .dashboardCharts {
    flex-direction: column;
  }

  .chart {
    flex-direction: column-reverse;
    height: fit-content;
  }
}
</style>