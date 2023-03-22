<template>
  <div>
    <h1 class="text-primarycd text-2xl sm:text-center md:text-3xl font-semibold mb-12">Recent Projects</h1>
    <div class="grid grid-cols-1 sm:gap-8 md:grid-cols-2 place-items-center"> <!--grid grid-cols-1 md:grid-cols-2 gap-8 place-items-center-->
      <ProjectCard v-for="card in cards" :image-url="card.image" :title="card.name" :tags="card.tags"/>
    </div>
  </div>
</template>

<script setup>
  const {data: cards, refresh} = await useFetchProjects()
</script>