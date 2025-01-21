<template>
    <div class="container">
        <div class="row">
            <div class="col-12">
                <h1 class="text-center display-4">Regisztráció</h1>
            </div>
        </div>
    </div>
    <div class="row">
        <div class="col-12 col-md-4 mx-auto">
            <form>
                <div class="form-floating mb-3">
                    <input type="text" class="form-control" id="name" placeholder="Név">
                    <label for="name">Név</label>
                </div>
                <div class="form-floating mb-3">
                    <input type="email" class="form-control" id="email" placeholder="minta@gmail.com">
                    <label for="email">Email</label>
                </div>
                <div class="form-floating mb-3">
                    <input type="password" class="form-control" id="password">
                    <label for="password">Jelszó</label>
                </div>
            </form>
        </div>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped>

</style>