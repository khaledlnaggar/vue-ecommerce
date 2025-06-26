<script setup lang="ts">
const navs: string[] = ["New", "Men", "Women", "Kids", "Jordan", "Sports"];
const { debounce, products } = useProducts();
const searchInput = ref("");

const getSearchedProducts = () => {
  try {
    const data = $fetch(
      `https://dummyjson.com/products/search?q=${searchInput.value}`
    );

    data.then((res) => {
      products.value = res;
    });
  } catch (error) {
    console.log(error);
  }
};

const searchForProduct = debounce(getSearchedProducts, 500);

watch(searchInput, () => {
  searchForProduct();
});
</script>
<template>
  <div class="flex justify-between items-center w-full px-[2%]">
    <img src="../../assets/images/Icon.png" alt="Logo" />

    <ul class="flex gap-8">
      <li v-for="nav in navs" class="text-black">
        <a href="#">{{ nav }}</a>
      </li>
    </ul>

    <div class="flex gap-2 items-center w-[12rem]">
      <div
        class="flex gap-2 search-bar w-[60%] items-center bg-[#F5F5F5] px-2 py-1 rounded-full"
      >
        <Icon name="material-symbols:search-rounded" style="color: black" />
        <input
          v-model="searchInput"
          class="outline-none w-[80%] placeholder:text-[#757575] text-[#757575]"
          type="text"
          placeholder="Search"
        />
      </div>

      <Icon name="solar:suitcase-linear" style="color: black" />
      <Icon
        name="material-symbols:favorite-outline-rounded"
        style="color: black"
      />
    </div>
  </div>
  <h2
    class="w-full flex items-center justify-center text-sm bg-[#F7F7F7] underline py-[18px] px-[2%]"
  >
    Members: Free Shipping on Orders $50+
  </h2>
</template>
