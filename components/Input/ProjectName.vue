<template>
  <div>
    <label>{{ name }}</label>
    <input
    class="rounded-lg w-full md:w-72 h-10 px-2 outline-none"
    placeholder="Project name"
    type="text"
    v-model="state"
    :alt="`Input field for ${name}`"
    @change="onChange">
  </div>
</template>

<script setup>
  defineProps({
    placeholder: String,
    name: String
  })
  const emits = defineEmits(['changeInput'])
  const state = ref('')

  const onChange = () => {
    emits('changeInput', state.value)
  }
</script>