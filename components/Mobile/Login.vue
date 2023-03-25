<template>
  <div v-if="!user" class="w-full grid place-items-center md:place-items-start gap-4">
    <input class="rounded p-2 h-8 w-3/5 outline-none" placeholder="john@wick.com" type="text">

    <input class="rounded p-2 h-8 w-3/5 outline-none" placeholder="**********" type="password">

    <button class="border-2 rounded-lg px-2 py-[2px] text-primarycd">
      Login
    </button>

    <div class="space-x-4">
      <NuxtLink class="text-primarycd text-sm" to="/signup" @click="emits('sideMenuChange')">Sign Up</NuxtLink>
      <NuxtLink class="text-primarycd text-sm" to="/resetpassword" @click="emits('sideMenuChange')">Reset Password
      </NuxtLink>
    </div>

    <div class="space-x-6">
      <button class="w-8" @click="handleLogin"><img src="@/assets/login/google.png" alt="login with google"></button>

      <button @click="handleLogin" class="w-8"><img src="@/assets/login/gitlab.svg" alt="login with gitlab"></button>

      <button @click="handleLogin" class="w-8"><img src="@/assets/login/github-white.svg"
          alt="login with github"></button>
    </div>
  </div>
  <hr class="solid text-white w-5/6">
  <button v-if="user" class="bg-primarycd w-4/6 h-11 rounded" @click="handleLogout">Logout</button>
</template>

<script setup>

</script>
