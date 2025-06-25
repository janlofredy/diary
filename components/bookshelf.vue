<script lang="ts" setup>
defineProps<{
  shelfType: string;
  backgroundType: string;
  notebooks: Array<{
    id: number | string;
    description: string;
  }>;
}>();
</script>
<template>
<div class="bookshelf">
  <img src="https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=800&q=80" alt="Bookshelf" class="bookshelf-image" />
  <div class="shelves">
    <div
      v-for="(row, rowIndex) in Math.ceil((notebooks?.length ?? 0) / 15)"
      :key="rowIndex"
      class="shelf-row"
    >
      <div
        v-for="bookIndex in 15"
        :key="bookIndex"
        class="book-slot"
      >
        <div
          v-if="notebooks[(rowIndex * 15) + (bookIndex - 1)]"
          class="book"
        >
          {{ notebooks[(rowIndex * 15) + (bookIndex - 1)].description }}
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<style>

</style>
