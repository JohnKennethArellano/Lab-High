<script setup>
import BaseInput from '@/components/InputFields/BaseInput.vue'
import BaseLabel from '@/components/dan_reusable/BaseLabel.vue'
import BaseButton from '@/components/dan_reusable/BaseButton.vue';
import BaseSuccess from '@/components/dan_reusable/BaseSuccess.vue';
import BaseHeader from '@/components/dan_reusable/BaseHeader.vue';
import { reactive, computed, defineAsyncComponent } from 'vue';
import { useVuelidate } from '@vuelidate/core';
import { required, sameAs, helpers } from '@vuelidate/validators';
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';

// Define router and store
const router = useRouter();
const store = useStore();
//Loading for Button
const Loader = defineAsyncComponent(() => import('../components/dan_cards/LoadingAnimation.vue'))
// Define loading state
const loading = computed(() => store.state.loading.showLoading);
const prompt = computed(() => store.state.resetPrompt.showResetPrompt)
// Define function to handle update button click
const handleBackClick = () => {
    router.push({ name: 'login' });
};

// Define form data
const formData = reactive({
    password: '',
    confirmPassword: ''
});

// Define validation rules
const rules = computed(() => {
    return {
        password: {
            required: helpers.withMessage('',required),
            minLength: helpers.withMessage('Password must be at least 6 characters long', value => value.length >= 8)
        },
        confirmPassword: {
            required: helpers.withMessage('',required),
            sameAs: helpers.withMessage('Passwords do not match', sameAs(formData.password))
        }
    }
})

// Use Vuelidate to create a validation object
const v$ = useVuelidate(rules, formData);

// Define submit form function
const submitForm = async () => {
    await v$.value.$validate();
    if (v$.value.$error) {
        console.log('Validation error:', v$.value.$errors);
        return;
    }
    // Perform action upon successful validation
    store.commit("showResetPrompt", true);
    store.commit("showLoading", true);
    setTimeout(() => {
        store.commit("showLoading", false);
        store.commit("showResetPrompt", false);
        router.push({ name: 'login' });
    }, 2000);
};
</script>

<template>
    <div class="bg w-screen h-screen ">
        <div class=" w-screen h-screen bg-gray-800 flex items-center justify-center  bg-opacity-30">
            <div class="bg-white rounded-md p-5">
                <BaseHeader />
                <form @submit.prevent="submitForm" class="flex flex-col p-2">
                    <BaseSuccess v-if="prompt" class="my-2" label="Your password has been changed successfully."/>
                    <slot /> <!-- PARA SA ERROR PROMPT -->
                    <BaseLabel label="Reset Your Password" class="font-semibold mb-2 text-xl" />
                    <div class="w-full flex flex-col mb-5">
                        <BaseLabel label="New Password" class="text-[15px]" />
                        <BaseInput type="password" placeholder="Enter Your New Password" v-model="formData.password"
                            class="my-1 border-[1.5px] rounded-md py-2 px-5 text-[15px]" />
                        <span v-for="error in v$.password.$errors" :key="error.$uid"
                            class="text-red-500 text-base flex absolute mt-[66px] italic">
                            {{ error.$message }}
                        </span>
                    </div>
                    <div class="w-full flex flex-col mb-5 ">
                        <BaseLabel label="Confirm Password" class="text-[15px]" />
                        <BaseInput type="password" placeholder="Confirm Your New Password"
                            v-model="formData.confirmPassword"
                            class="my-1 border-[1.5px] rounded-md py-2 px-5 text-[15px]" />
                        <span v-for="error in v$.confirmPassword.$errors" :key="error.$uid"
                            class="text-red-500 text-base flex absolute mt-[66px] italic">
                            {{ error.$message }}
                        </span>
                    </div>

                    <BaseButton type="submit" class="p-2 rounded-[8px] mb-2 mt-5 text-white">
                        <Loader v-if="loading" class="items-center justify-center mx-auto"></Loader>
                        <span v-else>UPDATE</span>
                    </BaseButton>
                    <p @click="handleBackClick()"
                        class="mx-auto text-gray-500 text-sm hover:text-red-700 hover:underline hover:cursor-pointer">
                        Go Back To Log In
                    </p>
                </form>
            </div>
        </div>
    </div>
</template>

<style scoped>
.bg {
    background-image: url("../assets/media/carpioBG.png");
    background-size: cover;
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
}
</style>