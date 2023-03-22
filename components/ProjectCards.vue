<template>
  <div>
    <h1 class="text-primarycd text-xl sm:text-3xl font-serif underline mb-4">title</h1>
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-8 place-items-center">
      <ProjectCard v-for="card in cards" :image-url="card.image" :title="card.name" :tags="card.tags"/>
    </div>
  </div>
</template>

<script setup>
  const {data: cards, refresh} = await useFetchProjects()
</script>