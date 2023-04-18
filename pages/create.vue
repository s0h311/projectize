<template>
  <div class="w-full h-full">
    <h1 class="font-semibold text-3xl">Create a new Project</h1>
    <div class="grid place-items-start gap-4">
      <div class="flex space-x-4 items-center">
        <PInput
          label="Project Name"
          placeholder="Rocket Umbrella"
          name="name"
          @change-input="onChangeInput"
        />

        <PNumberInput
          label="Max Members (Optional)"
          placeholder="8"
          name="maxMember"
          min="0"
          max="20"
          @change-input="onChangeInput"
        />
      </div>

      <div class="flex space-x-4 items-center w-full f-wull">
        <PInput
          label="Enter your tags"
          placeholder="Tag"
          :alt="`Input field for tag`"
          @change-input="updateTag"
          @keyup.enter="addTag"
        />

        <button
          class="text-xl font-bold border-2 rounded-full p-2 mt-6 leading-none"
          @click="addTag"
        >
          +
        </button>
      </div>

      <div>
        <button
          class="text-white text-sm sm:text-lg rounded-full bg-redcd px-2 inline-block mr-2 mb-3"
          v-for="tag in inputs.tags"
          @click="removeTag(tag)"
        >
          {{ tag }}
        </button>
      </div>

      <PTextArea
        label="Description"
        placeholder="Roses are red, violets are blue, coding is hard, but innovation is too. With engineering in our hearts, and technology in our hands, we'll create something great, that'll rock all the lands. So let's get to work, and bring on the code, our innovation will shine, like a bright technicolor ode."
        name="description"
        @change-input="onChangeInput"
      />
    </div>
  </div>
</template>

<script setup>
const user = useSupabaseUser()
const supabase = useSupabaseClient()
const tag = ref('')
const inputs = useState('projectInputs', () => {
  return {
    name: '',
    tags: [],
    maxMember: 0,
    description: '',
    image: null,
    creator: 'test',
    institution: 'HAW-Hamburg',
  }
})

const updateTag = (data, _name) => {
  tag.value = data
}

const onChangeInput = (data, name) => {
  inputs.value[name] = data
}

const addTag = () => {
  if (inputs.value.tags.length >= 6) {
    return
  }
  inputs.value.tags.push(tag.value)
  tag.value = ''
}

const removeTag = (tag) => {
  inputs.value['tags'] = inputs.value['tags'].filter((i) => i !== tag)
}

const handleCreate = async () => {
  const imageName = Date.now().toString()
  const { data, error } = await supabase.storage.from('images').upload(imageName, inputs.value.image)

  if (error) {
    console.log(error)
  }

  try {
    const response = await $fetch('/api/project', {
      method: 'post',
      body: {
        name: inputs.value.name,
        creator: 'id',
        tags: inputs.value.tags,
        description: inputs.value.description,
        institution: 'haw',
        maxMember: inputs.value.maxMember,
        image: data.path,
      },
    })
    navigateTo('/')
  } catch (error) {
    console.log(error)
    await supabase.storage.from('images').remove(data.path)
  }
}
</script>
