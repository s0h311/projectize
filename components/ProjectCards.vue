<template>
  <div>
    <h1 class="text-primarycd text-xl sm:text-3xl font-serif underline mb-4">Recent Projects</h1>
    <div class="grid grid-cols-1 sm:grid-cols-3 gap-8">
      <ProjectCard v-for="card in cards" :image-url="card.imageUrl" :title="card.title" :tags="card.tags"/>
    </div>
  </div>
</template>

<script setup>
  const cards = {
    card1: {
      imageUrl: 'https://images.ctfassets.net/lzny33ho1g45/6T5c4GBopK3hq4x3V3yKyG/386f0b4aa5a3c6c7ea6677e85eecba96/free_project_management.jpg',
      title: 'Project1',
      tags: ['tag1', 'tag2', 'tag3']
    },
    card2: {
      imageUrl: 'https://images.ctfassets.net/lzny33ho1g45/6T5c4GBopK3hq4x3V3yKyG/386f0b4aa5a3c6c7ea6677e85eecba96/free_project_management.jpg',
      title: 'Project2',
      tags: ['tag1', 'tag2', 'tag3']
    },
    card3: {
      imageUrl: 'https://images.ctfassets.net/lzny33ho1g45/6T5c4GBopK3hq4x3V3yKyG/386f0b4aa5a3c6c7ea6677e85eecba96/free_project_management.jpg',
      title: 'Project3',
      tags: ['tag1', 'tag2', 'tag3']
    },
    card4: {
      imageUrl: 'https://images.ctfassets.net/lzny33ho1g45/6T5c4GBopK3hq4x3V3yKyG/386f0b4aa5a3c6c7ea6677e85eecba96/free_project_management.jpg',
      title: 'Project4',
      tags: ['tag1', 'tag2', 'tag3']
    },
    card5: {
      imageUrl: 'https://images.ctfassets.net/lzny33ho1g45/6T5c4GBopK3hq4x3V3yKyG/386f0b4aa5a3c6c7ea6677e85eecba96/free_project_management.jpg',
      title: 'Project5',
      tags: ['tag1', 'tag2', 'tag3']
    },
    card6: {
      imageUrl: 'https://images.ctfassets.net/lzny33ho1g45/6T5c4GBopK3hq4x3V3yKyG/386f0b4aa5a3c6c7ea6677e85eecba96/free_project_management.jpg',
      title: 'Project6',
      tags: ['tag1', 'tag2', 'tag3']
    }
  }
</script>