<template>
  <div class="tableContainer">
    <table>
      <thead>
        <th>LRN</th>
        <th>Full Name</th>
        <th>Class</th>
        <th>Time In</th>
        <th>Time Out</th>
      </thead>

      <tbody ref="listEl">
        <tr v-for="user in usersList">
          <td>{{ user.student_id }}</td>
          <td>{{ user.student_name }}</td>
          <td>{{ user.class_name }}</td>
          <td>{{ user.start_Time }}</td>
          <td>{{ user.end_Time }}</td>
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

const listEl = ref(null);
const usersToShow = 1;
const usersList = ref(await getUsers(usersToShow));
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