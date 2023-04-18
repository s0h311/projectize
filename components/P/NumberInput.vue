<template>
  <div>
    <label class="text-white text-xs ml-4">{{ label }}</label>
    <div
      :class="[{ errorBorder: isError }, 'focus:border-0']"
      class="flex items-center justify-center rounded-3xl h-10 w-[40%] bg-slate-700"
    >
      <br />
      <input
        class="text-white bg-transparent outline-none w-3/6"
        type="number"
        :placeholder="placeholder"
        v-model="input"
        :name="name"
        :min="parseInt(min)"
        :max="parseInt(max)"
        @change="onChange"
      />
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  label: String,
  placeholder: String,
  name: String,
  isError: Boolean,
  min: String,
  max: String,
})

const input = ref('')

const emits = defineEmits(['changeInput'])

const onChange = () => {
  emits('changeInput', props.name, input.value)
}
</script>
