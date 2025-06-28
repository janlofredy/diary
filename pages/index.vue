<script setup>
const supabase = useSupabaseClient()

const shelves = ref([])
const currentShelf = ref(1)
const loading = ref(true)

// Fetch shelves from Supabase
const fetchShelves = async () => {
  const { data, error, loading: isLoading } = await supabase
    .from('shelf')
    .select('*, notebook(*)')
    .order('id', { ascending: true })
  loading.value = isLoading
  if (!error) {
    shelves.value = data
  }
}

onMounted(fetchShelves)
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
  <div class="fixed inset-0 flex items-center justify-center bg-yellow-50 min-h-screen flex-col">
    <div v-if="loading" class="text-lg text-yellow-800">
      Loading shelves...
    </div>
    <div v-else-if="shelves" class="flex flex-row items-center relative">
      <div class="flex justify-center my-2">
        <button
          :disabled="currentShelf === 1"
          class="text-2xl px-5 py-1 rounded bg-yellow-100 hover:bg-yellow-200 disabled:opacity-50 disabled:cursor-not-allowed"
          @click="prevShelf"
        >&lt;</button>
      </div>
      <BookShelf 
        shelf-type=""
        background-type=""
        :books="shelves[currentShelf-1]?.notebook || []"
      />
      <div class="flex justify-center my-2">
        <button
          :disabled="currentShelf === shelves.length"
          class="text-2xl px-5 py-1 rounded bg-yellow-100 hover:bg-yellow-200 disabled:opacity-50 disabled:cursor-not-allowed"
          @click="nextShelf"
        >&gt;</button>
      </div>
    </div>
    <div v-else class="text-lg text-yellow-800">
      No shelves found.
    </div>
    <div class="mt-3 text-lg text-yellow-800">
      Shelf {{ currentShelf }} / {{ shelves.length }}
    </div>
  </div>
</template>
