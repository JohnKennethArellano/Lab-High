<script setup>
import BaseInput from '@/components/InputFields/BaseInput.vue'
import BaseLabel from '@/components/dan_reusable/BaseLabel.vue'
import BaseButton from '@/components/dan_reusable/BaseButton.vue';
import BaseError from '@/components/dan_reusable/BaseError.vue';
// import BaseSuccess from '../components/dan_reusable/BaseSuccess.vue';
import BaseHeader from '../components/dan_reusable/BaseHeader.vue';
import { reactive, computed, defineAsyncComponent } from 'vue';
import { useVuelidate } from '@vuelidate/core'
import { required, email, helpers } from '@vuelidate/validators'
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';
const router = useRouter();
const store = useStore();

//Loading for Button
const Loader = defineAsyncComponent(() => import('../components/dan_cards/LoadingAnimation.vue'))
const loading = computed(() => store.state.loading.showLoading)
const prompt = computed(() => store.state.loginPrompt.showLoginPrompt)
//VUELIDATE RULES
const rules = computed(() => {
    return {
        email: {
            required: helpers.withMessage("Email is required", required),
            email: helpers.withMessage("", email)
        },
        password: {
            required: helpers.withMessage("Password is required", required)
        },
    }
})
const formData = reactive({
    email: '',
    password: '',
});
const v$ = useVuelidate(rules, formData);
const submitForm = async () => {
    console.log('Submitting form...');

    await v$.value.$validate();
    if (v$.value.$error) {
        console.log('Validation error:', v$.value.$errors);
        store.commit("showLoginPrompt", true)
        return;
    } else {
        
        store.commit("showLoginPrompt", false)
        store.commit("showLoading", true)
        // Simulate a 2-second delay before navigating to the '/reset' route
        setTimeout(() => {
            console.log('Login Success!!!');
            // Hide loader
            store.commit("showLoading", false)
            // Navigate to '/dashboard' route
            router.push({ name: 'dashboard' });
            //   router.push({name: 'login'});
        }, 2000); // 2000 milliseconds = 2 seconds
    }
};
const handleForgotPasswordClick = () => {
    router.push({ name: 'forgotpassword' });
};

</script>

<template>
    <div class="bg w-screen h-screen ">
        <div class=" w-screen h-screen bg-gray-800 flex items-center justify-center bg-opacity-40">
            <div class="bg-white rounded-md p-10">
                <BaseHeader class="mb-2" />   
                <form @submit.prevent="submitForm" class="flex flex-col">
                    <BaseError v-if="prompt" class="shake transition duration-300 my-2"/>
                    <BaseLabel label="Log In To Your Account" class="font-semibold mb-2 text-xl" />
                    <BaseLabel label="Email Address" class="text-[15px]" />
                    <div class="w-full flex flex-col mb-2">
                        <BaseInput placeholder="Enter your Email Address" v-model="formData.email"
                            class="my-1 mb-5 border-[1.5px] rounded-md py-2 px-5 text-[15px]" />
                        <span v-for="error in v$.email.$errors" :key="error.$uid"
                            class="text-red-500 text-base flex absolute mt-[50px] italic">
                            {{ error.$message }}
                        </span>
                    </div>
                    <div class="w-full flex flex-col mb-2">
                        <BaseLabel label="Password" class="text-[15px]" />
                        <BaseInput type="password" placeholder="Enter your Password" v-model="formData.password"
                            class="my-1 border-[1.5px] rounded-md py-2 px-5 text-[15px]" />
                        <span v-for="error in v$.password.$errors" :key="error.$uid"
                            class="text-red-500 text-base flex absolute mt-[72px] italic">
                            {{ error.$message }}
                        </span>
                    </div>


                    <p @click="handleForgotPasswordClick"
                        class="ml-auto my-2 mb-5 text-gray-500 text-sm hover:text-red-700 hover:underline hover:cursor-pointer">
                        Forgot Password?
                    </p>
                    <BaseButton type="submit" class="p-2 rounded-[8px] text-white ">
                        <Loader v-if="loading" class="items-center justify-center mx-auto py-3"></Loader>
                        <span v-else class="cursor-pointer">LOGIN</span>
                    </BaseButton>
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
.shake {
    animation: shake 0.5s;
}

@keyframes shake {
    0% { transform: translateX(0); }
    25% { transform: translateX(-5px); }
    50% { transform: translateX(5px); }
    75% { transform: translateX(-5px); }
    100% { transform: translateX(0); }
}
</style>
