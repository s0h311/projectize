<template>
  <div
  class="flex items-center gap-4">
    <button
    v-if="!user"
    @click="handleLogin"
    class="h-auto w-56"
    >
    <img src="@/assets/login/btn_google_signin_dark_normal_web@2x.png">
    </button>
    <img
    v-if="user"
    class="rounded"
    :src="`${user.user_metadata['picture']}`">

    <div class="grid place-items-center">
      <p
      v-if="user"
      class="text-xl m-2"
      >
      Hey, {{ user.user_metadata['name'] }}
      </p>

      <button
      v-if="user"
      @click="handleLogout"
      class="text-lg text-slate-800 w-24 h-8 rounded border-slate-800 border-2"
      >
      logout
      </button>
    </div>
  </div>
</template>

<script setup>
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