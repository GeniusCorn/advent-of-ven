<script setup lang="ts">
const count = $ref(0)
</script>

<template>
  <div flex flex-row gap-4>
    <div>count: {{ count }}</div>
    <button @click="count += 1">add</button>
  </div>
</template>

<style scoped></style>
