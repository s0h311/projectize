<template>
  <div class="w-auto h-auto">
    <div
    v-if="isDesktop"
    class="grid grid-cols-3 gap-8 pt-12 items-center mb-10c">
      <button
      class="w-56 ml-24 text-3xl font-mono font-semibold border-4 rounded p-3 border-slate-800"
      @click="navigateTo('/')">
        Campus|Dash
      </button>
      <Search />
      <div class="absolute right-24">
        <Login />
      </div>
    </div>
    <div
    v-else
    class="grid grid-cols-2 items-center mt-2"
    >
      <button
      class="ml-6 text-redcd border-2 px-4 py-2 border-primarycd w-[70px] rounded">
        <img src="@/assets/logo1-righteous.png">
      </button>
      <div class="fixed flex items-center right-6">
        <button
        class="w-4"
        @click="onSideMenuChange"
        >
          <img v-if="!sideMenuEnabled" src="@/assets/side_menu3.png">
          <p v-else class="text-primarycd text-xl font-semibold">X</p>
        </button>
      </div>
    </div>
    <SideMenu
    class="mt-2"
    v-if="sideMenuEnabled"
    @side-menu-change="onSideMenuChange"/>

  </div>
</template>

<script setup>
  const isDesktop = useMediaQuery('(min-width: 1024px)')
  const sideMenuEnabled = ref(false)

  const onSideMenuChange = () => {
    sideMenuEnabled.value = !sideMenuEnabled.value
  }
</script>