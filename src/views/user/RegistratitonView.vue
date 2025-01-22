<template>
    <div class="container">
        <div class="row">
            <div class="col-12">
                <h1 class="text-center display-4">Regisztráció</h1>
            </div>
        </div>
        <div class="row" v-if="!regSuccess">
        <div class="col-12 col-md-4 mx-auto">
            <form @submit.prevent="onRegister">
                <div class="form-floating mb-3">
                    <input type="text" class="form-control" :class="{'is-invalid': errorMessage.name}" id="name" v-model="regForm.name">
                    <label for="name">Név</label>
                    <div v-if="errorMessage.name">
                        <span v-for="(err,index) in errorMessage.name" v-bind:key="index" class="text-danger">{{ err }}</span>
                    </div>
                </div>
                <div class="form-floating mb-3">
                    <input type="email" class="form-control" :class="{'is-invalid': errorMessage.email}" id="email" v-model="regForm.email">
                    <label for="email">Email</label>
                    <div v-if="errorMessage.email">
                        <span v-for="(err,index) in errorMessage.email" v-bind:key="index" class="text-danger">{{ err }}</span>
                    </div>
                </div>
                <div class="form-floating mb-3">
                    <input class="form-control" type="password" :class="{'is-invalid': errorMessage.password}" id="password" v-model="regForm.password">
                    <label for="password">Jelszó</label>
                    <div v-if="errorMessage.password">
                        <span v-for="(err,index) in errorMessage.password" v-bind:key="index" class="text-danger">{{ err }}</span>
                    </div>
                </div>
                <div class="form-floating mb-3">
                    <input type="password" class="form-control" :class="{'is-invalid': errorMessage.confirm_password}" id="confirm-password" v-model="regForm.confirm_password">
                    <label for="confirm-password">Jelszó újra</label>
                    <div v-if="errorMessage.confirm_password">
                        <span v-for="(err,index) in errorMessage.confirm_password" v-bind:key="index" class="text-danger">{{ err }}</span>
                    </div>
                </div>
                <div class="mb-3">
                    <button type="submit" class="btn btn-primary w-100 p-2">Regisztráció
                        <span v-if="processing" class="spinner-border spinner-border-sm"></span>
                    </button>
                </div>
            </form>
        </div>  
    </div>
    <div class="row" v-else>
        <dic class="col-12 col-md-6 mx-auto text-center alert alert-success">
            A regisztráció sikeres!
        </dic>
    </div>
</div>
</template>

<script setup lang="ts">
    import userservice from '@/services/userservice';
    import type User from '@/types/User';
    import { ref } from 'vue';

    const regForm = ref<User>({
        name: "",
        email: "",
        password: "",
        confirm_password: "",
        role: 0
    });

    const errorMessage = ref({
        name: "",
        email: "",
        password: "",
        confirm_password: "",
    })

    const processing = ref<boolean>(false)

    const regSuccess = ref<boolean>(false)

    function onRegister(){
        processing.value = true
        userservice.registerUser(regForm.value)
            .then(()=>{
                regSuccess.value = true
                processing.value = false
            })
            .catch((err)=>{
                errorMessage.value = err.data.data
                processing.value = false
            })
    }

</script>

<style scoped>

</style>