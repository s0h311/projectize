<template>
  <div class="border-2 sm:w-[420px] rounded-3xl border-primarycd">
    <p
    class="text-primarycd text-lg sm:text-2xl ml-6 my-4"
    >{{ title }}</p>
    <div class="mx-6 mb-4">
      <p
      class="text-white text-sm sm:text-lg rounded-full bg-redcd px-2 inline-block mr-2 mb-2"
      v-for="tag in tags"
      >
      {{ tag }}
      </p>
    </div>
    <img
    class="rounded-bottom3xl h-52 h-min-52 h-max-52 w-[420px] w-min-[420px] w-max-[420px]"
    :src="`${imageUrl}`"
    :alt="`image for the project: ${title}`">
  </div>
</template>

<script setup>
  defineProps({
    imageUrl: String,
    title: String,
    tags: Array
  })
</script>