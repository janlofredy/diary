<script setup>
const supabase = useSupabaseClient()

const shelves = ref([])
const currentShelf = ref(1)


// Fetch shelves from Supabase
const fetchNotebooks = async () => {
  const { data, error } = await supabase
    .from('shelf') 
    .select('*, notebook(*)')
    .order('id', { ascending: true })
  if (!error) {
    shelves.value = data
  }
}
onMounted(fetchNotebooks)


// Pagination
const prevShelf = () => {
  if (currentShelf.value > 1) currentShelf.value--
}
const nextShelf = () => {
  if (currentShelf.value < shelves.value?.length) currentShelf.value++
}
</script>
<template>
  <div class="fixed inset-0 flex items-center justify-center bg-yellow-50 min-h-screen">
    <div class="flex flex-row items-center relative">
      <div class="flex justify-center my-2">
        <button
          @click="prevShelf"
          :disabled="currentShelf === 1"
          class="text-2xl px-5 py-1 rounded bg-yellow-100 hover:bg-yellow-200 disabled:opacity-50 disabled:cursor-not-allowed"
        >&lt;</button>
      </div>
      <BookShelf 
        shelf-type=""
        background-type=""
        :notebooks="shelves[currentShelf-1]?.notebook || []"
      />
      <div class="flex justify-center my-2">
        <button
          @click="nextShelf"
          :disabled="currentShelf === shelves.length"
          class="text-2xl px-5 py-1 rounded bg-yellow-100 hover:bg-yellow-200 disabled:opacity-50 disabled:cursor-not-allowed"
        >&gt;</button>
      </div>
      <div class="mt-3 text-lg text-yellow-800">
        Shelf {{ currentShelf }} / {{ shelves.length }}
      </div>
    </div>
  </div>
</template>
