export default async () => {
  const { data, error, refresh } = await useFetch('/api/projects')

  if (error.value) console.log(error)

  return { data, refresh }
}