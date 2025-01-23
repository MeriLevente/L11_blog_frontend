<template>
 <nav class="navbar navbar-expand-lg bg-success-subtle">
    <div class="container">
      <span class="navbar-brand">BLOG</span>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">

          <div v-for="(menuItem, index) in menuItems" :key="index">
            <li class="nav-item">
              <router-link class="nav-link" :to="menuItem.to" v-if="menuItem.isVisible">{{ menuItem.title }}</router-link>
            </li>
          </div>
          <li class="nav-item" v-if="status.loggedIn">
              <a class="nav-link" href="#" @click="onLoggOut">Kijelentkezés</a>
          </li>
        </ul>
        <div v-if="status.loggedIn">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <span class="nav-link">{{ user.name }}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { useUserStore } from '@/stores/userstore';
import { storeToRefs } from 'pinia';
import { computed, ref } from 'vue';
import { useRouter } from 'vue-router';

    const {logout} = useUserStore()
    const { status, user } = storeToRefs(useUserStore())
    const router = useRouter()
    //const menuItems = ref();
    const menuItems = computed(()=>{ //reaktív fgv, ha egyik eleme megváltozik újra lefut és a grafikai elemeket is újra lefuttatja (pl v-for-t)
      return [
        {
            title: "Nyitó oldal",
            to: '/',
            isVisible: true
        },
        {
            title: "Regisztráció",
            to: '/regisztracio',
            isVisible: !status.value.loggedIn
        },
        {
            title: "Bejelentkezés",
            to: '/bejelentkezes',
            isVisible: !status.value.loggedIn
        },
    ]
    })

    function onLoggOut(){
      logout().then(()=> router.push('/'))
    }
</script>

<style scoped>

</style>