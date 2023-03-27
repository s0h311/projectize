export default (imageName) => {
  const supabaseUrl = useRuntimeConfig().public.supabase.url
  const url = '/storage/v1/object/public/images/'
  return supabaseUrl + url + imageName
}