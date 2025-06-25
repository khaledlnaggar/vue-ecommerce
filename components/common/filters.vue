<script setup lang="ts">
const { getCategories, onFiltering, products } = useProducts();

const categories = getCategories();
</script>
<template>
  <div class="flex flex-col gap-4">
    <h1 class="text-[1.4rem] font-semibold">Products ({{ products.total }})</h1>
    <h2 class="text-xl font-medium">Categories</h2>
    <div class="w-full h-[2px] bg-gray-300"></div>
    <ul class="flex flex-col gap-2">
      <li
        v-for="filter in categories"
        @click="onFiltering(filter.url)"
        class="font-medium cursor-pointer"
      >
        <a>{{ filter.name }}</a>
      </li>
    </ul>
  </div>
</template>

<style scoped></style>
