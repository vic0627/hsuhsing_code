<script setup>
import BannerVue from "./components/Banner.vue";
import WormHole from "./components/WormHole.vue";
import Foot from "./components/Foot.vue";
import Head from "./components/Head.vue";
</script>

<template>
  <div class="app">
    <Head />
    <BannerVue />
    <WormHole />
    <Foot />
  </div>
</template>

<style scoped lang="scss">
@import "./sass/_base.scss";
.app{
  background: $bg;
}
</style>
