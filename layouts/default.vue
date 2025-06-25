<script setup lang="ts">
import HeaderBar from "~/components/layout/HeaderBar.vue";
import Footer from "~/components/layout/Footer.vue";
</script>
<template>
  <div class="bg-white">
    <HeaderBar />
    <slot />
    <Footer />
  </div>
</template>
