<!-- SHOWS LOGIN PAGE -->
<!-- IDEA! SHOWS FRONT OF NOTE BOOK WITH THE LOGIN OPTIONS -->
<script setup>
definePageMeta({
  layout: "clean",
  middleware: "noauth",
})
const supabase = useSupabaseClient()
const route = useRoute()
const redirectBackTo = route.redirectedFrom?.fullPath || '/confirm' // Redirect back to the previous page when logged in

const handleGoogleLogin = async () => {
  try {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: window.location.origin + redirectBackTo,
      },
    })
    if (error) {
      console.error('Error during Google login:', error)
    }
  } catch (error) {
    console.error(error)
  }
  
}

const handleGithubLogin = async () => {
  try {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: 'github',
      options: {
        redirectTo: window.location.origin + redirectBackTo,
      },
    })
    if (error) {
      console.error('Error during GitHub login:', error)
    }
  } catch (error) {
    console.error(error)
  }
}
</script>
<template>
  <div class="h-screen flex items-center justify-center bg-gray-300">
    <div class="bg-white h-1/2 w-1/2 shadow-lg">
      <div class="bg-gray-500 p-4">
        <h1 class="text-6xl font-bold text-center text-white">DIARY</h1>
      </div>
      <div class="bg-white p-4">
        <div class="flex flex-col items-center justify-center">
          <h2 class="text-4xl font-bold text-center text-gray-500">Login</h2>
            <button
            class="bg-white border border-gray-500 p-4 my-2 flex flex-row gap-1 transition-colors duration-200 hover:bg-gray-100 hover:border-gray-700"
            @click="handleGoogleLogin"
            >
            SIGN IN WITH
            <img src="/assets/google.png" alt="google" class="h-6 w-auto" >
            </button>
            <button
            class="bg-white border border-gray-500 p-4 my-2 flex flex-row gap-1 transition-colors duration-200 hover:bg-gray-100 hover:border-gray-700"
            @click="handleGithubLogin"
            >
            SIGN IN WITH 
            <img src="/assets/github.png" alt="github" class="h-6 w-auto" >
            </button>
        </div>
      </div>
    </div>
  </div>
</template>

