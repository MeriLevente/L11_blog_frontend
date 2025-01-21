<template>
 <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid bg-success-subtle p-0">
        <span class="navbar-brand">BLOG</span>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
            <div v-for="(item, index) in menuItems" v-bind:key="index">
                <li class="nav-item">
                    <RouterLink class="nav-link" :to="item.to">{{ item.title }}</RouterLink>
                </li>
            </div>
            </ul>
        </div>
    </div>
</nav>
</template>

<script setup lang="ts">
import { ref } from 'vue';

    const menuItems = ref();
    menuItems.value = [
        {
            title: "Nyitó oldal",
            to: '/'
        },
        {
            title: "Regisztráció",
            to: '/regisztracio'
        },
        {
            title: "Bejelentkezés",
            to: '/bejelentkezes'
        },
    ]
</script>

<style scoped>

</style>