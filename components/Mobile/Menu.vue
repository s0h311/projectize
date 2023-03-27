<template>
    <div
    class="bg-gray-600 w-screen h-auto py-4 grid place-items-center gap-4"
    >
      <Login />
      <hr class="solid text-white w-5/6">
      <Search />
      <Categories />
    </div>
</template>

<script setup lang="ts">

const user = useSupabaseUser()
const supabase = useSupabaseClient()

const emits = defineEmits(['sideMenuChange'])

const handleLogin = async () => {
  emits('sideMenuChange')
  const { error } = await supabase.auth.signInWithOAuth({
    provider: 'google',
  })
  
  if (error) console.log(error)
  navigateTo('/')
}

const handleLogout = async () => {
  emits('sideMenuChange')
  await supabase.auth.signOut()
  navigateTo('/')
}
</script>