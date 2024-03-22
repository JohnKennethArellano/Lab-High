<!-- REUSABLE BUTTON-->
<script setup>
  defineProps({
    text:{
      type: String,
      default : "My Button"
    },
    className : {
      type : String,
      default:'btn-primary'
    }
  })
</script>
  
<template>
    <button :class="className" class="text-base p-1 h-auto w-full bg-red-900 rounded-[10px  ]">
      <slot>{{ text }}</slot>
    </button>
</template>
  

<style scoped>
  
</style>