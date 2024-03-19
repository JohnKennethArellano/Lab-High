<template>
    <div class="sidebar bg-green-200">

        <!-- admin side bar content -->
        <nav v-if="role === 'admin'">
            <ul>
                <router-link v-for="(item, index) in  adminSidebar " :key="index" :to="item.route">
                    <li>
                        <Icon :icon="item.icon" />
                        <span>{{ item.text }}</span>
                    </li>
                </router-link>
            </ul>
        </nav>

        <!-- teacher side bar content -->
        <nav v-else>
            <ul>
                <router-link v-for="( item, index ) in  teacherSidebar " :key="index" :to="item.route">
                    <li>
                        <Icon :icon="item.icon" />
                        <span>{{ item.text }}</span>
                    </li>
                </router-link>
            </ul>
        </nav>
    </div>
</template>


<script setup>
import { useStore } from 'vuex';
import { computed } from 'vue';
const store = useStore()

const role = computed(() => store.state.userData.data.role)
const teacherSidebar = [
    { route: "/", icon: "material-symbols:search", text: "teacher" },
    { route: "/", icon: "material-symbols:search", text: "teacher" },
    { route: "/", icon: "material-symbols:search", text: "teacher" },
    { route: "/", icon: "material-symbols:search", text: "teacher" },


]
const adminSidebar = [
    { route: "/dashboard", icon: "material-symbols:search", text: "admin" },
    { route: "/about", icon: "material-symbols:search", text: "admin" },
    { route: "/test", icon: "material-symbols:search", text: "admin" },
    { route: "/datesshboard", icon: "material-symbols:search", text: "admin" },


]

</script>