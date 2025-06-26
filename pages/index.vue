<script setup lang="ts">
import filters from "~/components/common/filters.vue";
import Card from "~/components/common/Card.vue";
import indexHeader from "~/components/layout/indexHeader.vue";

const { getProducts, products, onPagination } = useProducts();

await getProducts();
const array = computed(() => new Array(
  Math.round(products.value.total / products.value.limit)
));
</script>
<template>
  <div class="px-[2%] py-[2%] ">

  <indexHeader />
  <div class="flex gap-8 justify-between">
    <filters class="w-1/6" />
    <div class="w-3/4 flex flex-col">
      <div class="flex flex-wrap gap-x-4 gap-y-8">
        <Card
          v-for="product in products.products"
          class="w-[30%]"
          :title="product.title"
          :category="product.category"
          :id="product.id"
          :brand="product.brand"
          :img="product.images[0]"
          :price="Math.floor(product.price)"
          :stock="product.stock"
        />
      </div>
      <div v-if="products.total > 9" class="flex gap-2">
        <div
          v-for="(page, index) in array"
          class="w-[10px] h-[10px] rounded-full bg-black"
        >
          <p
            @click="onPagination(index)"
            class="text-sm font-semibold text-white"
          >
            {{ index + 1 }}
          </p>
        </div>
      </div>
    </div>
  </div>
  </div>
</template>

<style scoped></style>
