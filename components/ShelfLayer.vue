<script lang="ts" setup>
defineProps<{
  shelfType: string;
  backgroundType: string;
}>();
</script>
<template>
  <div class="shelf-layer bg-amber-900 h-36 w-96 border-1" >
    <!-- <img :src="`/images/shelves/${shelfType}.png`" alt="Shelf Background" class="shelf-background"> -->
    <div id="books">
      <slot />
    </div>
  </div>
</template>

<style>

</style>
