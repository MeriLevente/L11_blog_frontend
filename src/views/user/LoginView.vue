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
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
    import { useUserStore } from '@/stores/userstore';
    import type LoginForm from '@/types/LoginForm';
    import { ref } from 'vue';

    const { login } = useUserStore();

    const loginForm = ref<LoginForm>({
        email: "",
        password: ""
    })

    function onLogin(){
        login(loginForm.value)
    }
</script>

<style scoped>

</style>