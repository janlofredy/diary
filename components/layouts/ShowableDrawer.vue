<script setup>
const props = defineProps({
  direction: { type: String, default: 'bottom', validator: v => ['bottom', 'top', 'left', 'right'].includes(v) }
})

const isOpen = ref(false)

const drawerClasses = computed(() => {
  const base = 'fixed bg-white shadow-lg flex flex-col transition-all duration-300 ease-in-out'
  const directions = {
    bottom: 'bottom-0 right-0 w-72',
    top: 'top-0 right-0 w-72',
    left: 'top-0 left-0 h-full w-72',
    right: 'top-0 right-0 h-full w-72'
  }
  const open = {
    bottom: 'translate-y-0 h-auto',
    top: 'translate-y-0 h-auto',
    left: 'translate-x-0',
    right: 'translate-x-0'
  }
  const closed = {
    bottom: 'h-0 translate-y-full',
    top: 'h-0 -translate-y-full',
    left: 'w-0 -translate-x-full',
    right: 'w-0 translate-x-full'
  }
  return [
    base,
    directions[props.direction],
    isOpen.value ? open[props.direction] : closed[props.direction],
    'border-8 border-[#bfa16b]'
  ].join(' ')
})

const handleToggle = () => {
  isOpen.value = !isOpen.value
}
</script>

<template>
  <div
    :class="drawerClasses"
    :style="{
      backgroundImage: `url('https://www.transparenttextures.com/patterns/wood-pattern.png')`,
      backgroundSize: 'cover',
      overflow: 'visible'
    }"
  >
    <template v-if="isOpen">
      <slot />
    </template>
    <!-- Protruding Handle -->
    <div
      v-if="['bottom', 'top'].includes(direction)"
      class="absolute left-1/2"
      :class="direction === 'bottom' ? '-top-6' : '-bottom-6'"
      style="transform: translateX(-50%);"
      @click="handleToggle"
    >
      <div
        class="w-16 h-4 bg-gray-200 rounded-[16px_16px_16px_16px/8px_8px_24px_24px] shadow-md border-2 border-gray-300"
      />
    </div>
    <div
      v-else
      class="absolute top-1/2"
      :class="direction === 'left' ? '-right-6' : '-left-6'"
      style="transform: translateY(-50%);"
      @click="handleToggle"
    >
      <div
        class="w-4 h-16 bg-gray-200 rounded-[16px_16px_16px_16px/8px_8px_24px_24px] shadow-md border-2 border-gray-300"
      />
    </div>
  </div>
</template>

<style scoped>
/* Tailwind only */
</style>
