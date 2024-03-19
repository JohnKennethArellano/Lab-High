<template>
    <div class="baseLayout">
        <!-- Nav Bar goes here -->
        <NavBar />

        <!-- Side Bar goes here -->
        <Sidebar />

        <!-- Main Content goes here -->
        <div class="main-content bg-blue-200">
            <router-view>

            </router-view>
        </div>
    </div>
</template>


<script setup>
import NavBar from './NavBar.vue';
import Sidebar from './Sidebar.vue';
</script>