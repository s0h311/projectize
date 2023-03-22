<template>
  <div class="mt-8 sm:mx-40"> <!--mx-auto mt-4 max-w-full space-y-4 px-8 xs:px-8 sm:px-10 lg:px-16 pb-16 w-[97%]-->
    <!--<NavBar />-->
    <div class="grid grid-cols-[1fr,3fr] gap-28"> 
      <SideMenu v-if="isDesktop" />
      <slot />
    </div>
  </div>
</template>

<script setup>
const isDesktop = computed(() => {
  return useMediaQuery('(min-width: 1024px)')
})

</script>