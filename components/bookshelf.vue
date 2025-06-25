<template>
  <div v-if="bookshelves">
    <div v-for="bookshelf in bookshelves" :key="bookshelf.id">
      <h2>{{ bookshelf.description }}</h2>
      <ul>
        <li v-for="notebook in bookshelf.notebooks" :key="notebook.id">
          {{ notebook.description }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts" setup>
const supabase = useSupabaseClient()
const bookshelves = ref(null)

onMounted(async function () {
  const { data, error } = await supabase
    .from('bookshelves')
    .select('id, description, notebooks(id, description)')
    .eq('user_id', supabase.auth.user.id)
    .range(0, 10)
    .order('created_at', { ascending: false })

  if (error) {
    console.error('Error loading bookshelves:', error)
  } else {
    bookshelves.value = data
  }
}
</script>

<style>

</style>
