<script lang="ts" setup>
defineProps<{
  book: Book
}>();
</script>
<template>
  <div class="h-36 flex w-fit flex-col items-center justify-between bg-white border">
    <div class="book" :style="{ backgroundColor: book.bookStyle?.color, width: book.bookStyle?.spineThickness + 'px' }">
      <div class="book-title text-center" style="writing-mode: vertical-rl; text-orientation: upright;">
        {{ book.description }}
      </div>
    </div>
    <div v-show="false" class="book-details">
      <div class="book-title">{{ book.title }}</div>
      <div class="book-description">{{ book.description }}</div>
    </div>
  </div>
</template>

<style>

</style>
