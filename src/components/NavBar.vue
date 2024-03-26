<template>
    <div class="navbar">
        <div class="left">
            <img src="../assets/media/labhighLogo.png" alt="logo" id="logo">
        </div>
        <div class="right">
            <div class="user">
                <div class="userImg">
                    <img v-bind:src="profileImg"
                        alt="userImg">
                </div>
                <div class="userDetails">
                    <div class="name">
                        {{userData.user_data.first_name}} {{userData.user_data.last_name}}
                    </div>
                    <div class="role">{{ userData.role }}</div>
                </div>
            </div>
        </div>
    </div>
</template>


<script setup>

import { useStore } from 'vuex';

const store = useStore();


const userData = store.state.userData;
console.log(userData.image)
const profileImg = `http://localhost:8000/storage/images/admin/${userData.image}`

</script>