<template>
  <div class="drawer" style="width: 50px;" >
    <el-button @click="isOpen = !isOpen">
      Toggle Drawer
    </el-button>
    <el-drawer
      size="100%"
      v-model="isOpen"
      direction="btt"
      append-to=".drawer"
    >
      <el-button @click="handleSignOut">Default</el-button>
    </el-drawer>
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


