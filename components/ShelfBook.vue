<script lang="ts" setup>
defineProps<{
  book: Book
}>();
</script>
<template>
  <div class="h-36 flex w-fit flex-col items-center justify-between bg-white border">
    <div 
      class="book" 
      :style="{ 
        backgroundColor: book.bookStyle?.color || 'white', 
        width: (book.bookStyle?.spineThickness || 30) + 'px' 
        }"
      >
      <div class="book-title text-center p-0 m-0" style="writing-mode: vertical-rl; text-orientation: upright;">
        {{ book.description }}
      </div>
    </div>
  </div>
</template>
