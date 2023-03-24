<template>
  <div v-if="isDesktop">
    <SideMenu/>
  </div>
  <div v-if="!isDesktop">
    <MobileNavigation />
  </div>
</template>

<script setup lang="ts">
  let isDesktop = computed(() => useMediaQuery('(min-width: 768px)'))
</script>