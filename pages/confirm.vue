<script setup lang="ts">
const user = useSupabaseUser()

watch(user, () => {
  if (user.value) {
    return navigateTo(window.location.origin + '/')
  }
}, { immediate: true })
</script>

<template>
  <div>Waiting for login...</div>
</template>