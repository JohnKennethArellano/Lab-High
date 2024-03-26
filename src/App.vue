<template>
  <Loader v-if="showLoading" />
  <router-view></router-view>
</template>


<script setup>
import Loader from './components/Modal/Loader.vue';
import { useStore } from 'vuex';
import { computed } from "vue"
const store = useStore()
const showLoading = computed(() => false);
</script>