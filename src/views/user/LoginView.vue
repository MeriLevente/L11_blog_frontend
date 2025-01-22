<template>
    <div class="container">
        <div class="row">
            <div class="col-12">
                <h1 class="text-center display-4">Bejelentkezés</h1>
            </div>
        </div>
        <div class="row">
            <div class="col-12 col-md-4 mx-auto">
                <form @submit.prevent="onLogin">
                    <div class="form-floating mb-3">
                    <input type="email" class="form-control" id="email" v-model="loginForm.email">
                    <label for="email">Email</label>
                </div>
                <div class="form-floating mb-3">
                    <input type="password" class="form-control" id="password" v-model="loginForm.password">
                    <label for="password">Jelszó</label>
                </div>
                <div class="mb-3">
                    <button type="submit" class="btn btn-primary w-100 p-2">Bejelentkezés
                    </button>
                </div>
                </form>
                <div v-if="status.message" class="alert alert-danger text-center mt-5">{{ status.message }}</div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
    import { useUserStore } from '@/stores/userstore';
    import type LoginForm from '@/types/LoginForm';
    import { storeToRefs } from 'pinia';
    import { ref } from 'vue';
    import { useRouter } from 'vue-router';

    const { login } = useUserStore();
    const { status } = storeToRefs(useUserStore())

    const router = useRouter() //useRouter => navigálni tudunk, useRoute => az url-t le tudjuk kérni (pl. paraméterek lekérése)

    const loginForm = ref<LoginForm>({
        email: "",
        password: ""
    })

    function onLogin(){
        login(loginForm.value)
            .then(()=>{
                router.push("/")
            })
    }
</script>

<style scoped>

</style>