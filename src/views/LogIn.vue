<template>
  <input type="text" placeholder="email" v-model="formData.email">
  <input type="text" placeholder="password" v-model="formData.password">
  <button @click="login">Login</button>
</template>


<script setup>
import store from '@/store';
import { reactive } from 'vue';
import { useRouter } from 'vue-router';
const router = useRouter()
const formData = reactive({
  email: "",
  password: ""
})
const login = () => {
  store.dispatch("login", formData).then((data) => {
    console.log(data.role)
    router.push(`/${data.role}`)
  })
}
</script>