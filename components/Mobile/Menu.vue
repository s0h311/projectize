<template>
  <div>
    <div
    class="bg-gray-600 w-screen h-auto py-4"
    >
      <div class="w-full grid place-items-center gap-4">
        <input
        class="rounded p-2 h-8 w-3/5 outline-none"
        placeholder="john@wick.com"
        type="text">

        <input
        class="rounded p-2 h-8 w-3/5 outline-none"
        placeholder="**********"
        type="password">

        <button
        class="w-8"
        @click="handleLogin"
        ><img src="@/assets/login/google.png" alt="login with google"></button>

        <button
        @click="handleLogin"
        class="w-8"
        ><img src="@/assets/login/gitlab.svg" alt="login with gitlab"></button>

        <button
        @click="handleLogin"
        class="w-8"
        ><img src="@/assets/login/github-white.svg" alt="login with github"></button>

        <button
        @click="handleLogin"
        class="w-8"
        ><img src="@/assets/login/email.png" alt="login with email"></button>

      </div>
      <div
      class="space-x-4 pl-10"
      v-if="!user">
        <NuxtLink class="text-primarycd text-sm">Sign Up</NuxtLink>
        <NuxtLink class="text-primarycd text-sm">Reset Password</NuxtLink>
      </div>
      
      <button
      v-else
      class="bg-primarycd w-4/6 h-11 rounded"
      @click="handleLogout"
      >Logout</button>
      <Search />
    </div>
  </div>
</template>

<script setup lang="ts">
const user = useSupabaseUser()
const supabase = useSupabaseClient()

const handleLogin = async () => {
  const { error } = await supabase.auth.signInWithOAuth({
    provider: 'google',
  })
  
  if (error) console.log(error)
}

const handleLogout = async () => {
  await supabase.auth.signOut()
}
</script>