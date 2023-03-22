<template>
  <div>
    <div
    class="bg-gray-600 w-screen h-auto grid place-items-center gap-4 py-4"
    >
      <button v-if="!user" class="bg-primarycd w-4/6 h-11 rounded"
      @click="handleLogin"
      >Login</button>
      <button v-if="!user" class="bg-primarycd w-4/6 h-11 rounded">Signup</button>
      <button
      v-else
      class="bg-primarycd w-4/6 h-11 rounded"
      @click="handleLogout"
      >Logout</button>
      <Search />
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