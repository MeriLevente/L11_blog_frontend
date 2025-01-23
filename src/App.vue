<script setup lang="ts">
import AppFooter from './components/AppFooter.vue';
import AppHeader from './components/AppHeader.vue';
import AppNav from './components/AppNav.vue';
import { useUserStore } from './stores/userstore';

const {user, status} = useUserStore()

if(sessionStorage.getItem("user") != null){
  const u = JSON.parse(sessionStorage.getItem("user")!)
  user.name = u.name
  user.role = u.role
  user.token = u.token
  user.id = u.id
  status.loggedIn = true
}

</script>

<template>
  <AppHeader></AppHeader> <!-- ctrl + shift + p => reload window-->
  <AppNav/>
  <RouterView/>
  <AppFooter/>
</template>

<style scoped>
</style>
