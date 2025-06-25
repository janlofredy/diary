<!-- SHOWS DEFAULT PAGE -->
<!-- IDEA -->
<!-- SHOWS AN OPEN NOTEBOOK WITH DATE ON TOP RIGHT -->
<script setup>
// Constants
const ROWS = 5
const BOOKS_PER_ROW = 15
const BOOKS_PER_SHELF = ROWS * BOOKS_PER_ROW

// State
const books = ref([])
const currentShelf = ref(1)
const totalShelves = ref(1)
const hoveredBook = ref(null)

const supabase = useSupabaseClient()

// Fetch books from Supabase
const fetchBooks = async () => {
  const { data, error } = await supabase
    .from('books')
    .select('*')
    .order('id', { ascending: true })
  if (!error) {
    books.value = data
    totalShelves.value = Math.ceil(data.length / BOOKS_PER_SHELF)
  }
}
onMounted(fetchBooks)

// Computed for current shelf books
const shelfBooks = computed(() => {
  const start = (currentShelf.value - 1) * BOOKS_PER_SHELF
  return books.value.slice(start, start + BOOKS_PER_SHELF)
})

// Pagination
const prevShelf = () => {
  if (currentShelf.value > 1) currentShelf.value--
}
const nextShelf = () => {
  if (currentShelf.value < totalShelves.value) currentShelf.value++
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
      <div class="flex flex-col gap-3 bg-yellow-100 p-5 rounded-2xl shadow-lg">
        <div v-for="row in ROWS" :key="row" class="flex gap-2 min-h-[80px]">
          <div
            v-for="book in shelfBooks.slice((row-1)*BOOKS_PER_ROW, row*BOOKS_PER_ROW)"
            :key="book.id"
            class="w-10 h-15 bg-yellow-300 rounded shadow flex items-center justify-center transition-transform duration-100 cursor-pointer relative"
            @mouseenter="hoveredBook = book"
            @mouseleave="hoveredBook = null"
          >
            <img :src="book.cover_url" :alt="book.title" class="w-9 h-14 object-cover rounded-sm" />
          </div>
        </div>
      </div>
      <div class="flex justify-center my-2">
        <button
          @click="nextShelf"
          :disabled="currentShelf === totalShelves"
          class="text-2xl px-5 py-1 rounded bg-yellow-100 hover:bg-yellow-200 disabled:opacity-50 disabled:cursor-not-allowed"
        >&gt;</button>
      </div>
      <div class="mt-3 text-lg text-yellow-800">
        Shelf {{ currentShelf }} / {{ totalShelves }}
      </div>
      <div
        v-if="hoveredBook"
        class="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-[60%] z-50 bg-white/95 p-8 rounded-2xl shadow-2xl flex flex-col items-center"
      >
        <div>
          <img :src="hoveredBook.cover_url" :alt="hoveredBook.title" class="w-44 h-65 object-cover rounded-lg shadow-lg" />
          <div class="mt-4 text-2xl font-bold text-center">{{ hoveredBook.title }}</div>
        </div>
      </div>
    </div>
  </div>
</template>
