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
  <div class="bookshelf-container">
    <div class="shelf-arrows">
      <button @click="prevShelf" :disabled="currentShelf === 1">&lt;</button>
    </div>
    <div class="bookshelf">
      <div v-for="row in ROWS" :key="row" class="shelf-row">
        <div
          v-for="book in shelfBooks.slice((row-1)*BOOKS_PER_ROW, row*BOOKS_PER_ROW)"
          :key="book.id"
          class="book"
          @mouseenter="hoveredBook = book"
          @mouseleave="hoveredBook = null"
        >
          <img :src="book.cover_url" :alt="book.title" class="book-cover" />
        </div>
      </div>
    </div>
    <div class="shelf-arrows">
      <button @click="nextShelf" :disabled="currentShelf === totalShelves">&gt;</button>
    </div>
    <div class="pagination">
      Shelf {{ currentShelf }} / {{ totalShelves }}
    </div>
    <div v-if="hoveredBook" class="book-preview">
      <div class="big-book">
        <img :src="hoveredBook.cover_url" :alt="hoveredBook.title" />
        <div class="book-title">{{ hoveredBook.title }}</div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.bookshelf-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
}
.shelf-arrows {
  display: flex;
  justify-content: center;
  margin: 10px 0;
}
.shelf-arrows button {
  font-size: 2rem;
  padding: 0 20px;
  cursor: pointer;
}
.bookshelf {
  display: flex;
  flex-direction: column;
  gap: 12px;
  background: #f5e6c8;
  padding: 20px;
  border-radius: 16px;
  box-shadow: 0 2px 12px #0002;
}
.shelf-row {
  display: flex;
  gap: 10px;
  min-height: 80px;
}
.book {
  width: 40px;
  height: 60px;
  background: #c9b18a;
  border-radius: 4px;
  box-shadow: 0 1px 4px #0002;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.1s;
  cursor: pointer;
  position: relative;
}
.book-cover {
  width: 36px;
  height: 56px;
  object-fit: cover;
  border-radius: 2px;
}
.book-preview {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -60%);
  z-index: 100;
  background: rgba(255,255,255,0.95);
  padding: 32px 48px;
  border-radius: 16px;
  box-shadow: 0 4px 32px #0005;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.big-book img {
  width: 180px;
  height: 260px;
  object-fit: cover;
  border-radius: 8px;
  box-shadow: 0 2px 16px #0003;
}
.book-title {
  margin-top: 16px;
  font-size: 1.5rem;
  font-weight: bold;
  text-align: center;
}
.pagination {
  margin-top: 12px;
  font-size: 1.1rem;
  color: #7a5c2e;
}
</style>
