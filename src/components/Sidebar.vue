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
import store from '@/store';
const role = store.state.userData.role
const teacherSidebar = [
    { route: "/dashboard", icon: "mage:dashboard-chart", text: "Dashboard" },
    { route: "/attendance", icon: "mage:calendar", text: "Attendance" },
    { route: "/registration", icon: "mage:user-plus", text: "Registration" },
    { route: "/announcements", icon: "heroicons:megaphone", text: "Announcements" },
    { route: "/account", icon: "mage:settings", text: "Account" },


]
const adminSidebar = [
    { route: "/dashboard", icon: "mage:dashboard-chart", text: "Dashboard" },
    { route: "/attendance", icon: "mage:calendar", text: "Attendance" },
    { route: "/listOfSections", icon: "iconamoon:arrow-right-2", text: "List of Sections" },
    { route: "/listOfStudents", icon: "iconamoon:arrow-right-2", text: "List of Students" },
    { route: "/announcements", icon: "heroicons:megaphone", text: "Announcements" },
    { route: "/account", icon: "mage:settings", text: "Account" },
    { route: "/users", icon: "flowbite:users-group-outline", text: "Users" },
    { route: "/activityLog", icon: "mage:checklist-note", text: "Activity Log" },


]

</script>