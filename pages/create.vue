<template>
  <div class="grid place-items-center">
    <div class="grid grid-cols-1 w-4/6 md:w-max md:grid-cols-2 gap-8">
      <input
      class="rounded-lg w-full md:w-72 h-10 px-2 outline-none"
      placeholder="Project name"
      type="text"
      v-model="inputs.name"
      :alt="`Input field for project name`">
      
      <input
      class="rounded-lg w-3/12 h-10 px-2 outline-none"
      placeholder="Max Number of Members"
      type="number"
      min="0"
      max="20"
      v-model="inputs.maxMember"
      :alt="`Input field for max number of members`">

      <div class="space-x-4 flex items-center">
        <input
        class="rounded-lg w-3/5 h-10 px-2 outline-none"
        placeholder="Tag"
        type="text"
        v-model="tag"
        :alt="`Input field for tag`"
        @keyup.enter="addTag">

        <button
        class="text-primarycd text-xl font-bold border-2 rounded-lg px-2 py-1"
        @click="addTag">+</button>
      </div>
      
      <div>
        <button class="text-white text-sm sm:text-lg rounded-full bg-redcd px-2 inline-block mr-2 mb-3"
        v-for="tag in inputs.tags"
        @click="removeTag(tag)"
        >{{ tag }}</button>
      </div>
    </div>
    <textarea class="rounded-lg w-2/5 h-4/5" v-model="inputs.description"></textarea>
    <InputImage @change-input="onChangeInput"/>
    <button class="bg-redcd p-2 rounded" @click="handleCreate">Create</button>
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
      institution: 'HAW-Hamburg'
    }
  })

  const onChangeInput = (data, name) => {
    inputs.value[name] = data
  }

  const addTag = () => {
    if (inputs.value['tags'].length >= 6) {
      return
    }
    inputs.value['tags'].push(tag.value)
    tag.value = ''
  }

  const removeTag = (tag) => {
    inputs.value['tags'] = inputs.value['tags'].filter(i => i !== tag)
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
          institution: "haw",
          maxMember: inputs.value.maxMember,
          image: data.path
        }
      })
      navigateTo('/')
    } catch (error) {
      console.log(error)
      await supabase.storage.from('images').remove(data.path)
    }
  }
</script>