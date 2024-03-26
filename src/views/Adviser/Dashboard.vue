<script setup>
import DashboardDoughnut from '@/components/Graphs/DashboardDoughnut.vue';
import DashboardProgressBar from '@/components/Graphs/DashboardProgressBar.vue';
import InfinitescrollAdviser from '@/components/Table/InfiniteScrollAdviser.vue';
import { useStore } from 'vuex';
const store = useStore(); 
store.dispatch("advisergraphDatas");

const graphDatas = store.getters.getGraphData



var absent = graphDatas.student_count_today - graphDatas.attendance_count_today;
var present = graphDatas.attendance_count_today;

var today = Math.floor((100 * graphDatas.attendance_count_today) / graphDatas.student_count_today)
var week = Math.floor((100 * graphDatas.attendance_count_week) / graphDatas.student_count_week)
var month = Math.floor((100 * graphDatas.attendance_count_month) / graphDatas.student_count_month);
</script>

<template>
  <div class="tabTitle">Dashboard</div>
  <div class="flex h-[300px] items-center gap-4">
    <DashboardDoughnut :absentData="absent" :presentData="present" class="flex-grow h-full" />
    <DashboardProgressBar class="flex-grow" :todayProgress="today" :weekProgress="week" :monthProgress="month" />
  </div>

  <div class="tabTitle2">TODAY’S TIME IN & OUT</div>
  <Suspense>
    <InfinitescrollAdviser />
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
