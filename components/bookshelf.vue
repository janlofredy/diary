<script lang="ts" setup>
defineProps<{
  shelfType: string;
  backgroundType: string;
  books: Array<Book>;
}>();
</script>
<template>
<div class="bookshelf">
  <ShelfLayer
    v-for="layer in 5"
    :key="layer"
    :shelf-type="shelfType"
    :background-type="backgroundType"
    >
    <ShelfBook
      v-for="book in books?.slice((layer-1) * 10, layer * 10)"
      :key="book.id"
      :book="book"
    />
  </ShelfLayer>
</div>
</template>
