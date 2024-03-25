<template>
  <div class="tableContainer">
    <table>
      <thead>
        <th>Learner's Reference Number</th>
        <th>Full Name</th>
        <th>Time In</th>
        <th>Time Out</th>
      </thead>

      <tbody ref="listEl">
        <tr v-for="user in usersList">
          <td>{{ user.id }}</td>
          <td>{{ user.firstName }} {{ user.maidenName.charAt(0) }}. {{ user.lastName }}</td>
          <td>{{ user.age }}</td>
          <td>{{ user.age }}</td>
        </tr>
        <tr>
          <td>Fetching more users...</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped></style>

<script setup>
import { ref } from 'vue';
import getUsers from '@/api/getStudents'
import { useInfiniteScroll } from '@vueuse/core';
import SearchField from '@/components/Table/SearchField.vue';

const listEl = ref(null);
const usersToShow = 5;
const usersList = ref(await getUsers(usersToShow, 0));
const fetchingData = ref(null);
const getUsersOnScroll = async () => {
  fetchingData.value = true;
  await new Promise((res) => setTimeout(res, 2000));
  try {
    const newUsers = await getUsers(usersToShow,
      usersList.value.length);
    fetchingData.value = null;

    usersList.value.push(...newUsers);
  } catch (err) {
    console.log(err);
  }
};

useInfiniteScroll(listEl, async () => { await getUsersOnScroll(); }, { distance: 10 });
</script>