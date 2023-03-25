<template>
  <div
  class="flex items-center gap-4">
    <button
    v-if="!user"
    @click="handleLogin"
    class="h-auto w-10"
    >
    <img src="@/assets/login/google.png">
    </button>
    <img
    v-if="user"
    class="rounded-full w-16"
    :src="`${user.user_metadata['picture']}`">

    <div class="grid place-items-center">
      <p
      v-if="user"
      class="text-md mb-2 text-primarycd"
      >
      Hey, {{ user.user_metadata['name'] }}
      </p>
      <p
      v-if="user"
      class="text-md text-primarycd"
      >
      @username
      </p>  
      <button
      v-if="user"
      @click="handleLogout"
      class="text-md text-primarycd px-2 rounded border-redcd border-2"
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