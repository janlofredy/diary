export default defineNuxtRouteMiddleware((to, _from) => {
    const user = useSupabaseUser()  
    if (user) {
      return navigateTo('/')
    }
  })
  