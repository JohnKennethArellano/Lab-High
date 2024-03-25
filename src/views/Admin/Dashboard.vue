<template>
  <div class="tabTitle">dashboard</div>
  <div class="dashboardCharts h-fit gap-4">
    <DashboardDoughnut :absent-data="absentCount" :present-data="presentCount" class="w-1/2" />
    <DashboardProgressBar
      :today-progress="today"
      :week-progress="week"
      :month-progress="month"
      class="w-1/2"
    />
  </div>

  <div class="tabTitle2">TODAY’S TIME IN & OUT</div>

  <div class="flex items-center gap-4 justify-between">
    <SearchField />
    <div class="dropFilter">
      <span class="filterLabel">Filter by <span>Section</span></span>
      <YearAndSectionFilter :initialOption="'Select an option'" :options="dropdownOptions" />
    </div>
  </div>
  <div class="tableContainer">
    <Suspense>
      <StudentsTimeInAndOut />
      <template #fallback>
        <p>Loading...</p>
      </template>
    </Suspense>
  </div>
</template>
<script setup>
import DashboardDoughnut from '@/components/Graphs/DashboardDoughnut.vue'
import DashboardProgressBar from '@/components/Graphs/DashboardProgressBar.vue'
import StudentsTimeInAndOut from '@/components/Table/StudentsTimeInAndOut.vue'
import SearchField from '@/components/Table/SearchField.vue'
import YearAndSectionFilter from '@/components/Table/YearAndSectionFilter.vue'
import { ref } from 'vue'
import { useStore } from 'vuex'
const store = useStore()

store.dispatch('graphDatas')

const graphDatas = store.getters.getGraphData
console.log(graphDatas)

// chart values
const absentCount = graphDatas.student_count_today - graphDatas.attendance_count_today
const presentCount = graphDatas.attendance_count_today

// please use percentage (presents divided by overall number of students)
const today = Math.floor((100 * graphDatas.attendance_count_today) / graphDatas.student_count_today)
const week = Math.floor((100 * graphDatas.attendance_count_week) / graphDatas.student_count_week)
const month = Math.floor((100 * graphDatas.attendance_count_month) / graphDatas.student_count_month)

// dropdown data
const dropdownOptions = ref([
  { label: 'Section 1' },
  { label: 'Section 2' },
  { label: 'Section 3' }
])
</script>
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

@media screen and (max-width: 1360px) {
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
