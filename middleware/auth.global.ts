export default defineNuxtRouteMiddleware((to, _from) => {
    const user = useSupabaseUser()
    if (!user) {
      // If not logged in, redirect to login page
      return navigateTo('/login')
    }
  })
  