<template>
  <div class="col-md-5 offset-md-1 mt-2 w-full">
    <label class="text-redcd mb-1 text-sm">Image*</label>
    <form class="mt-2">
      <div class="form-group">
        <div class="relative">
          <input type="file" accept="image/*" class="opacity-0 absolute cursor-pointer" @change="onImageUpload" />
          <span class="cursor-pointer">Browse Image</span>
        </div>
        <div class="border pt-2 mt-3 w-56" v-if="image.preview">
          <img :src="image.preview" alt="uploaded project image" />
        </div>
      </div>
    </form>
  </div>
</template>

<script setup>
  const image = useState('projectImage', () => {
    return {
      preview: null,
      image: null
    }
  })

  const emits = defineEmits(['changeInput'])

  const onImageUpload = () => {
    const input = event.target

    if (input.files) {
      const reader = new FileReader()
      reader.onload = (e) => {
        image.value.preview = e.target.result
      }

      image.value.image = input.files[0]
      reader.readAsDataURL(input.files[0])
      emits('changeInput', input.files[0], 'image')
    }
  }
</script>
