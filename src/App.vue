<script setup lang="ts">
import AppFooter from './components/AppFooter.vue';
import AppHeader from './components/AppHeader.vue';
import AppNav from './components/AppNav.vue';

</script>

<template>
  <AppHeader></AppHeader> <!-- ctrl + shift + p => reload window-->
  <AppNav/>
  <RouterView/>
  <AppFooter/>
</template>

<style scoped>
</style>
