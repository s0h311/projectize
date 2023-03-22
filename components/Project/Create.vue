<template>
  <div class="grid place-items-center">
    <form
    class="grid grid-cols-2 items-center gap-4"
    :action="onSubmit">
      <input
      class="rounded w-72 h-10 px-2 outline-none"
      placeholder="Project name"
      type="text">

      <input
      class="rounded w-72 h-10 px-2 outline-none"
      placeholder="Project name"
      type="text">

      <input
      class="rounded w-72 h-10 px-2 outline-none"
      placeholder="Project name"
      type="text">

      <button
      class="bg-redcd p-2 rounded"
      >Create</button>
    </form>
  </div>
</template>

<script setup>
  const onSubmit = () => {

  }
</script>