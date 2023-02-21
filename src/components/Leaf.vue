<script setup lang="ts">
const props = defineProps<{
  size: number
}>()
</script>

<template>
  <Leaf v-if="size > 1" :size="size - 1" />

  <div flex="~ row" justify-center>
    <div
      v-for="(item, index) in props.size"
      :key="index"
      flex="~ row"
      relative
      h-12
      w-12
      items-center
      justify-center
      rounded-full
      bg-green
      m="-2"
    ></div>
  </div>
</template>

<style scoped></style>
