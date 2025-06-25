<template>
  <div
    class="drawer-handle flex justify-center items-center cursor-pointer absolute left-1/2 -translate-x-1/2 -top-6 w-24 h-6"
    :class="{ 'drawer-handle-open': isOpen }"
    @click="isOpen = !isOpen"
  >
    <span class="drawer-handle-bar block w-16 h-2 rounded bg-gray-400"></span>
  </div>
  <div
    class="drawer"
    :class="{ 'drawer-open': isOpen }"
    style="background-image: url('https://www.transparenttextures.com/patterns/wood-pattern.png'); background-size: cover;"
  >
    <div class="drawer-header" @click="isOpen = !isOpen">
      <span
        class="drawer-arrow"
        :class="{ 'drawer-arrow-open': isOpen }"
      >&#9660;</span>
    </div>
    <div class="drawer-content">
      <!-- Place your buttons or content here -->
      <button type="button" class="btn btn-primary">Action 1</button>
      <button type="button" class="btn btn-success">Action 2</button>
    </div>
    <div class="logout-bottom">
      <button type="button" @click="handleSignOut" class="btn btn-logout">Sign Out</button>
    </div>
  </div>
</template>

<script setup>
const supabase = useSupabaseClient()
const isOpen = ref(false)
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

<style scoped>
.drawer {
  position: fixed;
  bottom: 0;
  right: 0;
  width: 300px;
  height: auto;
  background-color: white;
  box-shadow: -2px 0 5px rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: column;
  transition: height 0.3s ease-in-out;
}

.drawer-open {
  height: 100vh;
}

.drawer-header {
  padding: 16px;
  cursor: pointer;
}

.drawer-arrow {
  transition: transform 0.3s ease-in-out;
}

.drawer-arrow-open {
  transform: rotate(-90deg);
}

.drawer-content {
  padding: 16px;
}

.logout-bottom {
  padding: 16px;
  text-align: right;
}
</style>


