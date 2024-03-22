<script setup>
import BaseInput from '@/components/InputFields/BaseInput.vue'
import BaseLabel from '@/components/dan_reusable/BaseLabel.vue'
import BaseButton from '@/components/dan_reusable/BaseButton.vue';
import BaseSuccess from '@/components/dan_reusable/BaseSuccess.vue';
import BaseHeader from '@/components/dan_reusable/BaseHeader.vue';
import { reactive, computed, defineAsyncComponent } from 'vue';
import { useVuelidate } from '@vuelidate/core';
import { required, email, helpers } from '@vuelidate/validators';
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';
const router = useRouter();
const store = useStore();
//Loading for Button
const Loader = defineAsyncComponent(() => import('../components/dan_cards/LoadingAnimation.vue'))
const loading = computed(() => store.state.loading.showLoading)
const prompt = computed(() => store.state.requestPrompt.showRequestPrompt)
const handleCancelClick = () => {
    router.push({ name: 'login' });
};
const successMessage = computed(() =>
    "Password reset request was sent successfully.\nPlease check your email to reset your password."
);
const rules = computed(() => {
    return {
        email: {
            required: helpers.withMessage("Email is required", required),
            email: helpers.withMessage("That is not a valid Email Address", email)
        },
    }
})
const formData = reactive({
    email: ''
});
const v$ = useVuelidate(rules, formData);

const submitForm = async () => {
    console.log('Submitting form...');

    await v$.value.$validate();
    if (v$.value.$error) {
        console.log('Validation error:', v$.value.$errors);
        return;
    } else {
        store.commit("showRequestPrompt", true)
        store.commit("showLoading", true)
        // Simulate a 2-second delay before navigating to the '/reset' route
        setTimeout(() => {
            // Hide loader
            store.commit("showLoading", false)
            store.commit("showRequestPrompt", false)
            // Navigate to '/dashboard' route
            router.push({ name: 'resetpassword' });
            //   router.push({name: 'login'});
        }, 2000); // 2000 milliseconds = 2 seconds
    }
};

</script>

<template>
    <div class="bg w-screen h-screen ">
        <div class=" w-screen h-screen bg-gray-800 flex items-center justify-center  bg-opacity-30">
            <div class="bg-white rounded-md py-8 px-10">
                <BaseHeader />
                <form @submit.prevent="submitForm" class="flex flex-col p-2">
                    <BaseSuccess v-if="prompt" class="overflow" :label="successMessage" />
                    <div class="flex flex-col mt-5 gap-[10px]">
                        <BaseLabel label="Forgot Your Password?" class="font-semibold mb-2 text-xl" />
                        <BaseLabel label="Email Address" class="text-[15px]" />
                        <div class="w-full flex flex-col mb-2">
                            <BaseInput placeholder="Enter Your Email Address" v-model="formData.email"
                                class="my-1 border-[1.5px] rounded-md py-2 px-5  "
                                :class="{ 'border-red-600 border-[3px] shake': v$.email.$error }" />
                            <span v-for="error in v$.email.$errors" :key="error.$uid"
                                class="text-red-500 text-base flex absolute mt-[50px] italic">
                                {{ error.$message }}
                            </span>
                        </div>
                    </div>


                    <div class="flex flex-row mt-5 gap-5">
                        <BaseButton @click="handleCancelClick()" text="CANCEL"
                            class="p-2 border-2 border-gray-200 rounded-xl mb-2 bg-slate-100 text-black font-semibold" />
                        <BaseButton type="submit" text="SEND REQUEST"
                            class="p-2 rounded-xl mb-2 text-white cursor-pointer">
                            <Loader v-if="loading" class="items-center justify-center mx-auto"></Loader>
                            <span v-else class="cursor-pointer">SEND REQUEST</span>
                        </BaseButton>
                    </div>
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

.overflow {
    white-space: pre-line;
    line-height: 1.5;
    /* Adjust the line height as needed */
}

@keyframes shake {
    0% {
        transform: translateX(0);
    }

    25% {
        transform: translateX(-5px);
    }

    50% {
        transform: translateX(5px);
    }

    75% {
        transform: translateX(-5px);
    }

    100% {
        transform: translateX(0);
    }
}
</style>