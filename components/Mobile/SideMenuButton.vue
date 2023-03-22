<template>
  <div class="grid grid-cols-2 items-center m-4 relative">
    <button class="w-[1/2]">
      <img src="@/assets/logo.png">
    </button>
    <div class="absolute flex items-center right-0">
      <button class="w-4" @click="onSideMenuChange">
        <img v-if="!sideMenuEnabled" src="@/assets/side_menu_button.png">
        <p v-else class="text-primarycd text-xl font-semibold">X</p>
      </button>
    </div>
  </div>
  <MobileSideMenu class="mt-2" v-if="sideMenuEnabled" @side-menu-change="onSideMenuChange" />
</template>

<script setup lang="ts">
const sideMenuEnabled = ref(false)

const onSideMenuChange = () => {
  sideMenuEnabled.value = !sideMenuEnabled.value
}
</script>