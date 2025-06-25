<script setup lang="ts">
const footerItems = [
  {
    title: "Resources",
    items: [
      "Gift Cards",
      "Find a Store",
      "Membership",
      "Nike Journal",
      "Site Feedback",
    ],
  },
  {
    title: "Help",
    items: [
      "Get Help",
      "Order Status",
      "Shipping and Delivery",
      "Returns",
      "Order Cancellation",
      "Payment Options",
      "Gift Card Balance",
      "Contact Us",
    ],
  },
  {
    title: "Company",
    items: [
      "About Nike",
      "News",
      "Careers",
      "Investors",
      "Purpose",
      "Sustainability",
    ],
  },
  {
    title: "Promotions & Discounts",
    items: [
      "Student",
      "Military",
      "Teacher",
      "First Responders & Medical Professionals",
      "Birthday",
    ],
  },
];
</script>
<template>
  <div class="bg-white px-[2%]">
    <div class="grid grid-cols-5 gap-4 justify-center w-fit mx-auto">
      <div
        v-for="item in footerItems"
        class="row-span-5 flex flex-col gap-8 w-[80%]"
      >
        <h2 class="font-bold">{{ item.title }}</h2>
        <ul class="flex flex-col gap-2">
          <li v-for="i in item.items" class="text-[#707072]">{{ i }}</li>
        </ul>
      </div>

      <div class="row-span-5">
        <div class="flex gap-2 items-center">
          <Icon name="solar:global-outline" style="color: black" />
          <h2 class="font-bold">United States</h2>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
