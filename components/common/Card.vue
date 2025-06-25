<script setup lang="ts">
defineProps<{
  title: string;
  category: string;
  id: number;
  brand: string;
  img: string;
  price: number;
  stock: number;
}>();
</script>
<template>
  <NuxtLink :to="`${id}`" class="flex flex-col gap-1">
    <img :src="img" alt="" class="w-full aspect-square" />
    <p class="text-sm font-semibold !text-red-500">{{ brand }}</p>
    <p class="text-sm font-semibold">{{ title }}</p>
    <p class="text-sm font-semibold">{{ category }}</p>
    <p class="text-sm font-semibold">{{ stock }} Colors</p>
    <p class="text-sm font-semibold">${{ price }}</p>
  </NuxtLink>
</template>

<style scoped></style>
