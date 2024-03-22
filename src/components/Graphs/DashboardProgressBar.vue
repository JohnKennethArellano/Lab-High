<template>
  <div class="chart w-full gap-2 p-7 flex flex-col justify-between borderedD7">
    <h2 class="title">Attendance Statistics</h2>
    <!-- today -->
    <div class="today borderedD7 p-3">
      <div class="flex justify-between gap-3">
        <p class="font-medium mb-2">Today</p>
        <p>{{ todayPercentage }}%</p>
      </div>
      <div class="progress-bar">
        <div class="progress bg-[#84E0BE] animate__animated animate__fadeIn" :style="{ width: todayProgress + '%' }">
        </div>
      </div>
    </div>

    <!-- this week -->
    <div class="this_week borderedD7 p-3">
      <div class="flex justify-between gap-3">
        <p class="font-medium mb-2">This Week</p>
        <p>{{ weekPercentage }}%</p>
      </div>
      <div class="progress-bar">
        <div class="progress bg-[#AC84E0] animate__animated animate__fadeIn" :style="{ width: weekProgress + '%' }">
        </div>
      </div>
    </div>

    <!-- this month -->
    <div class="this_month borderedD7 p-3">
      <div class="flex justify-between gap-3">
        <p class="font-medium mb-2">This Month</p>
        <p>{{ monthPercentage }}%</p>
      </div>
      <div class="progress-bar">
        <div class="progress bg-[#C85E5E] animate__animated animate__fadeIn" :style="{ width: monthProgress + '%' }">
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>

const props = defineProps({
  todayProgress: Number,
  weekProgress: Number,
  monthProgress: Number,
});

const todayPercentage = props.todayProgress;
const weekPercentage = props.weekProgress;
const monthPercentage = props.monthProgress;
</script>

<style>
.progress-bar {
  background-color: #f2f2f2;
  border-radius: 5px;
  height: 7px;
}

.progress {
  border-radius: 5px;
  height: 100%;
}
</style>
