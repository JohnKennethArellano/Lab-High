<script setup>
import DashboardDoughnut from '@/components/Graphs/DashboardDoughnut.vue';
import DashboardProgressBar from '@/components/Graphs/DashboardProgressBar.vue';

var absent = 12;
var present = 3;

var today = 5;
var week = 3;
var month = 12;
</script>

<template>
  <div class="tabTitle">Dashboard</div>
  <div class="flex h-[300px] items-center gap-4">
    <DashboardDoughnut :absentData="absent" :presentData="present" class="flex-grow h-full" />
    <DashboardProgressBar class="flex-grow" :todayProgress="today" :weekProgress="week" :monthProgress="month" />
  </div>
</template>
