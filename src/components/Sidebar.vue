<template>
    <div :class="['sidebar bg-green-200', { 'collapsed': isCollapsed }]">
        <Icon icon="icon-park-outline:hamburger-button" class="hamburger" @click="toggleSidebar" />

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

        <button class="logoutBtn" @click="logout">
            <Icon icon="basil:logout-outline" />
            <span>Logout</span>
        </button>
    </div>
</template>


<script setup>
import { ref } from 'vue';
import { useStore } from 'vuex';
const store = useStore()
const role = store.state.userData.role
const teacherSidebar = [
    { route: "/adviser/dashboard", icon: "mage:dashboard-chart", text: "Dashboard" },
    { route: "/adviser/attendance", icon: "mage:calendar", text: "Attendance" },
    { route: "/adviser/registration", icon: "mage:user-plus", text: "Registration" },
    { route: "/adviser/announcements", icon: "heroicons:megaphone", text: "Announcements" },
    { route: "/adviser/account", icon: "mage:settings", text: "Account" },


]
const adminSidebar = [
    { route: "/admin/dashboard", icon: "mage:dashboard-chart", text: "Dashboard" },
    { route: "/admin/attendance", icon: "mage:calendar", text: "Attendance" },
    { route: "/admin/listOfSections", icon: "iconamoon:arrow-right-2", text: "List of Sections" },
    { route: "/admin/listOfStudents", icon: "iconamoon:arrow-right-2", text: "List of Students" },
    { route: "/admin/announcements", icon: "heroicons:megaphone", text: "Announcements" },
    { route: "/admin/account", icon: "mage:settings", text: "Account" },
    { route: "/admin/users", icon: "flowbite:users-group-outline", text: "Users" },
    { route: "/admin/activityLog", icon: "mage:checklist-note", text: "Activity Log" },
]

const logout = () => {
    store.dispatch("showLogoutModal", true)
}
</script>