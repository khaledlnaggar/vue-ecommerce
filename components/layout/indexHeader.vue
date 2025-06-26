<script setup lang="ts">
const { products , getProducts} = useProducts();
</script>
<template>
  <div class="flex justify-between items-center">

    <h1 class="text-[1.4rem] font-semibold">Products ({{ products.total }})</h1>
    <div class="flex gap-4 items-center">
      <div class="flex gap-2 items-center cursor-pointer" @click="getProducts">
          <h2 class="text-lg">Hide filter</h2>
        <Icon name="lets-icons:filter-big" style="color: black" />
      </div>

      <div class="flex gap-2 items-center">
          <h2 class="text-lg">Sort by</h2>
        <Icon name="iconamoon:arrow-down-2-light" style="color: black" />
      </div>

    </div>

  </div>
</template>

<style scoped></style>
