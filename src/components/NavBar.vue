<template>
    <div class="navbar bg-red-200">
        <div class="left">
            <img src="../assets/media/labhighLogo.png" alt="logo" id="logo">
        </div>
        <div class="right">
            <div class="user">
                <div class="userImg">
                    <img src="https://img.freepik.com/free-photo/portrait-young-woman-with-natural-make-up_23-2149084942.jpg"
                        alt="userImg">
                </div>
                <div class="userDetails">
                    <div class="name">
                        Jane Doe
                    </div>
                    <div class="role">{{ userData.role }}</div>
                </div>
            </div>
        </div>
    </div>
</template>


<script setup>

import state from '../store/state'

const userData = state.userData
</script>