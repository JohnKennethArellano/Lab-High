<template>
    <BaseModal v-if="openModal">
        <!-- image here -->
        <!-- text here -->
        <!-- buttons -->
        <div class="flex gap-6">
            <BaseButton text="Cancel" class="secondaryButton" @click="cancelLogout" />
            <BaseButton text="Log out" class="mainButton" @click="logout" />
        </div>
    </BaseModal>
    <div class="baseLayout">
        <!-- Nav Bar goes here -->
        <NavBar />

        <!-- Side Bar goes here -->
        <Sidebar />

        <!-- Main Content goes here -->
        <div class="main-content bg-blue-200">
            <router-view></router-view>
        </div>
    </div>
</template>

<script setup>
import NavBar from './NavBar.vue';
import Sidebar from './Sidebar.vue';
import BaseModal from './Modal/BaseModal.vue';
import BaseButton from "@/components/InputFields/BaseButton.vue"
import { useStore } from 'vuex';
import { computed } from "vue"
import { useRouter } from 'vue-router';
const router = useRouter()
const store = useStore()
const openModal = computed(() => store.state.logOutModal.isShowing);

const cancelLogout = () => {
    store.dispatch("showLogoutModal", false);
}

const logout = () => {
    store.dispatch("showLogoutModal", false);
    store.dispatch('logoutUser').then(() => {
        router.push({ name: "login" })
    })
}
</script>
