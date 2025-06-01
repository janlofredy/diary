<!-- SHOWS LOGIN PAGE -->
<!-- IDEA! SHOWS FRONT OF NOTE BOOK WITH THE LOGIN OPTIONS -->
<script setup>
const supabase = useSupabaseClient()
const user = useSupabaseUser()  
onMounted(() => {
  console.log(user.value)
  if (user) {
    // If not logged in, redirect to login page
    navigateTo('/')
  }
})
const handleGoogleLogin = async () => {
  try {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: window.location.origin + '/confirm',
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
        redirectTo: window.location.origin + '/confirm',
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
  <div class="container">
    <div class="background">
      <div class="book">
        <div class="cover">
          <h1>DIARY</h1>
        </div>
        <div class="pages">
          <div class="login">
            <h2>Login</h2>
            <button @click="handleGoogleLogin">
              <img src="/assets/google.png" alt="google" />
            </button>
            <button @click="handleGithubLogin">
              <img src="/assets/github.png" alt="github" />
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<style scoped>
.background {
  @apply bg-gray-300 h-screen flex items-center justify-center;
}

.book {
  @apply bg-white h-1/2 w-1/2 shadow-lg;
}

.cover {
  @apply bg-gray-500 p-4;
}

.cover h1 {
  @apply text-6xl font-bold text-center text-white;
}

.pages {
  @apply bg-white p-4;
}

.login {
  @apply flex flex-col items-center justify-center;
}

.login button {
  @apply bg-white border border-gray-500 p-4 my-2;
}

.login button img {
  @apply h-6 w-auto;
}

.login button:hover {
  @apply bg-gray-500;
}

.login h2 {
  @apply text-4xl font-bold text-center text-gray-500;
}
</style>
