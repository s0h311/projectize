<template>
  <div class="h-auto border-r-[1px] border-primarycd">
    <div class="grid gap-12">
      <button class="w-48" @click="navigateTo('/')">
        <img src="@/assets/logo.png" alt="campus dash logo">
      </button>
      <Search />
      <!--<Login />--->
      <MobileLogin />
      <Categories />
      <NuxtLink class="w-5/6 text-primarycd text-md" to="/create">Create a Project</NuxtLink>
    </div>
  </div>
</template>

<script setup>

</script>