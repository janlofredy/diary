<!-- SHOWS DEFAULT PAGE -->
<!-- IDEA -->
<!-- SHOWS AN OPEN NOTEBOOK WITH DATE ON TOP RIGHT -->
<!-- WITH PAGE NUMBERS AND PAGINATION ON BOTTOM -->
<script setup>
// This is the default page that shows when the user is logged in
// You can add more functionality here, like fetching user data or displaying entries
const supabase = useSupabaseClient()
const user = useSupabaseUser()  
onMounted(() => {
  console.log(user)
  if (!user) {
    // If not logged in, redirect to login page
    navigateTo('/login')
  }
})
const handleSignOut = async () => {
  try {
    const { error } = await supabase.auth.signOut()
    if (error) {
      console.error('Error signing out:', error)
    }
    navigateTo('/login')
  } catch (error) {
    console.error(error)
  }
}
</script>
<template>
  <div class="container">
    <div class="background">
      <div class="book">
        <div class="cover">
          <h1>DIARY</h1>
        </div>
        <div class="pages">
          <div class="page">
            <h2>Welcome to your diary!</h2>
            <p>Here you can write your thoughts and memories.</p>
          </div>
        </div>
      </div>
    </div>
    <div class="logout">
      <button @click="handleSignOut">Logout</button>
    </div>
  </div>
</template>
<style scoped>
</style>