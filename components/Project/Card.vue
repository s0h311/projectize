<template>
  <div class="border-2 w-4/5 rounded-3xl border-primarycd">
    <p
    class="text-primarycd text-lg sm:text-2xl mx-6 my-4"
    >{{ title }}</p>
    <div class="mx-6">
      <p
      class="text-white text-sm sm:text-lg rounded-full bg-redcd px-2 inline-block mr-2 mb-3"
      v-for="tag in tags"
      >{{ tag }}</p>
    </div>
    <nuxt-img
    class="rounded-bottom3xl"
    :src="`${useStorageImage(imageUrl)}`"
    :alt="`image for the project: ${title}`"
    width="800" height="400" />
  </div>
</template>

<script setup>
  defineProps({
    imageUrl: String,
    title: String,
    tags: Array
  })
</script>