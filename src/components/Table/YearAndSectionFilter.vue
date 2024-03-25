<template>
  <div class="dropdown">
    <div class="dropdown-toggle" @click="toggleDropdown">
      <span>{{ selectedOption }}</span>
      <Icon v-if="isOpen" icon="iconamoon:arrow-up-2"></Icon>
      <Icon v-else icon="iconamoon:arrow-down-2"></Icon>
    </div>
    <transition name="fade">
      <div v-if="isOpen" class="dropdown-menu" ref="dropdownMenu">
        <div v-for="(option, index) in options" :key="index" @click="selectOption(option)">
          {{ option.label }}
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup>
import { ref, watchEffect } from 'vue'
// Import Icon component

// Define props
const props = defineProps({
  initialOption: {
    type: String,
    default: 'Select an option'
  },
  options: {
    type: Array,
    default: () => []
  }
})

const isOpen = ref(false)
const selectedOption = ref(props.initialOption)

const toggleDropdown = () => {
  isOpen.value = !isOpen.value
}

const selectOption = (option) => {
  selectedOption.value = option.label
  isOpen.value = false
}

// Close dropdown when clicking outside
watchEffect((onInvalidate) => {
  const closeDropdown = (event) => {
    if (!event.target.closest('.dropdown')) {
      isOpen.value = false
    }
  }

  document.addEventListener('click', closeDropdown)

  onInvalidate(() => {
    document.removeEventListener('click', closeDropdown)
  })
})
</script>
