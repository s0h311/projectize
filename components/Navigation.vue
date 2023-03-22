<template>
  <SideMenu v-if="isDesktop"/>
  <MobileSideMenuButton v-else />
</template>

<script setup>
  const isDesktop = useMediaQuery('(min-width: 768px)')
</script>