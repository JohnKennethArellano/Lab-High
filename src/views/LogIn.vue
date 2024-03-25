<template>
    <div class="bg w-screen h-screen ">
        <div class=" w-screen h-screen bg-gray-800 flex items-center justify-center bg-opacity-40">
            <div class="bg-white rounded-md p-10">
                <BaseHeader class="mb-2" />
                <form @submit.prevent="submitForm" class="flex flex-col">
                    <BaseError v-if="prompt" class="shake transition duration-300 my-2" />
                    <BaseLabel label="Log In To Your Account" class="font-semibold mb-2 text-xl" />
                    <BaseLabel label="Email Address" class="text-[15px]" for="email" />
                    <div class="w-full flex flex-col mb-2">
                        <BaseInput placeholder="Enter your Email Address" v-model="formData.email"
                            class="my-1 mb-5 border-[1.5px] rounded-md py-2 px-5 text-[15px]" id="email" />
                        <span v-for="error in v$.email.$errors" :key="error.$uid"
                            class="text-red-500 text-base flex absolute mt-[50px] italic">
                            {{ error.$message }}
                        </span>
                    </div>
                    <div class="w-full flex flex-col mb-2">
                        <BaseLabel label="Password" class="text-[15px]" for="password" />
                        <BaseInput type="password" placeholder="Enter your Password" v-model="formData.password"
                            class="my-1 border-[1.5px] rounded-md py-2 px-5 text-[15px]" id="password" />
                        <span v-for="error in v$.password.$errors" :key="error.$uid"
                            class="text-red-500 text-base flex absolute mt-[72px] italic">
                            {{ error.$message }}
                        </span>
                    </div>


                    <p @click="handleForgotPasswordClick"
                        class="ml-auto my-2 mb-5 text-gray-500 text-sm hover:text-red-700 hover:underline hover:cursor-pointer">
                        Forgot Password?
                    </p>
                    <BaseButton text="LOGIN" class="mainButton" type="submit" width="w-full" />
                </form>
            </div>
        </div>
    </div>
</template>
<script setup>
import BaseInput from '@/components/InputFields/BaseInput.vue'
import BaseLabel from '@/components/dan_reusable/BaseLabel.vue'
import BaseButton from '@/components/InputFields/BaseButton.vue';
import BaseError from '@/components/dan_reusable/BaseError.vue';
// import BaseSuccess from '../components/dan_reusable/BaseSuccess.vue';
import BaseHeader from '../components/dan_reusable/BaseHeader.vue';
import { reactive, computed } from 'vue';
import { useVuelidate } from '@vuelidate/core'
import { required, email, helpers } from '@vuelidate/validators'
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';
import Swal from 'sweetalert2';
const router = useRouter();
const store = useStore();
store.commit('toggleLoader',false)
//Loading for Button
const role = store.state.userData.role
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
//vuelidate validation
const submitForm = async (e) => {
    e.preventDefault()
    await v$.value.$validate();
    if (v$.value.$error) {
        console.log('Validation error:', v$.value.$errors);
        store.commit("showLoginPrompt", true)
        return;
    } else {
        submitLogin(e)
    }
};
const handleForgotPasswordClick = () => {
    router.push({ name: 'forgotpassword' });
};
//submit the data to backend
function submitLogin(e) {
    e.preventDefault();
    store.dispatch("login", formData).then((res) => {
        if(res.token)
        {
            router.push(`/admin/dashboard`)
            return;
        }
        const status = res.response.status
        
        if (status === 401) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: res.response.data.message,
            })
            return;
        }
        if (status === 500) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Server Error!',
            })
            return;
        }
        if(status === 422)
        {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: res.response.data.errors,
            })
        }
        
       
    })
}
</script>

<style scoped>
.bg {
    background-image: url("/src/assets/dan_images/carpioBG.png");
    background-size: cover; 
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
}

.shake {
    animation: shake 0.5s;
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
