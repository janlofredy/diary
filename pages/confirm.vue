<script setup lang="ts">
definePageMeta({
  layout: "clean",
  middleware: "noauth",
})
const user = useSupabaseUser()

watch(user, () => {
  if (user) {
    navigateTo('/')
  }
}, { immediate: true })
</script>

<template>
  <div>Waiting for login...</div>
</template>