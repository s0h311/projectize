<template>
  <div class="grid grid-cols-2 items-center mx-8 relative">
    <NuxtLink to="/" @click="sideMenuEnabled = !sideMenuEnabled" class="w-2/6">
      <img src="/logo_p.png">
    </NuxtLink>
    <div class="absolute flex items-center right-0">
      <button class="w-4" @click="onSideMenuChange">
        <img v-if="!sideMenuEnabled" src="/side_menu_button.png">
        <p v-else class="text-primarycd text-xl font-semibold">X</p>
      </button>
    </div>
  </div>
  <MobileMenu v-if="sideMenuEnabled" @side-menu-change="onSideMenuChange" />
</template>

<script setup>
const sideMenuEnabled = ref(false)

const onSideMenuChange = () => {
  sideMenuEnabled.value = !sideMenuEnabled.value
}
</script>