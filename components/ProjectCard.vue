<template>
  <div class="border-2 w-full rounded border-primarycd">
    <img class="mb-2"
    :src="`${imageUrl}`">
    <p
    class="text-primarycd text-lg sm:text-2xl ml-4 mb-2"
    >{{ title }}</p>
    <div class="mx-4 mb-2">
      <p
      class="text-white text-sm sm:text-lg rounded-full bg-redcd pl-2 pr-2 inline-block mr-2"
      v-for="tag in tags"
      >
      {{ tag }}
      </p>
    </div>
  </div>
</template>

<script setup>
  defineProps({
    imageUrl: String,
    title: String,
    tags: Array
  })
</script>