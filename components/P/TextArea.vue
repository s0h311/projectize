<template>
  <div class="w-full h-full">
    <label class="text-white text-xs ml-4">{{ label }}</label>
    <div
      :class="[{ errorBorder: isError }, 'focus:border-0']"
      class="flex items-center justify-center rounded-3xl h-full w-3/6 px-4 py-3 bg-slate-700"
    >
      <textarea
        class="text-white bg-transparent outline-none w-full h-full"
        :type="`${type ? type : 'text'}`"
        :placeholder="placeholder"
        v-model="input"
        :name="name"
        @change="onChange"
      ></textarea>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  label: String,
  type: String,
  placeholder: String,
  name: String,
  isError: Boolean,
})

const input = ref('')

const emits = defineEmits(['changeInput'])

const onChange = () => {
  emits('changeInput', props.name, input.value)
}
</script>
