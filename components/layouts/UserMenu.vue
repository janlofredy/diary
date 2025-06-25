<script setup>
const supabase = useSupabaseClient()
const user = useSupabaseUser()
const handleSignOut = async () => {
  try {
    const { error } = await supabase.auth.signOut()
    if (error) {
      console.error('Error signing out:', error)
      return
    }
    navigateTo('/login')
  } catch (error) {
    console.error(error)
  }
}
</script>
<template>
  <LayoutsShowableDrawer direction="top">
    <div class="flex flex-col items-center p-6 bg-white dark:bg-gray-800 shadow-lg">
      <h2 class="text-xl font-semibold mb-4">User Menu</h2>
      <div class="mb-4 w-full text-center">
        <div class="text-gray-700 dark:text-gray-200 font-medium">
          {{ user.email || 'Unknown User' }}
        </div>
      </div>
      <button
        @click="handleSignOut"
        class="w-full px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors"
      >
        Sign Out
      </button>
    </div>
  </LayoutsShowableDrawer>
</template>
