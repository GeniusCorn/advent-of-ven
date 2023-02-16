<script setup lang="ts">
const props = defineProps<{
  count: number
}>()

const count = ref(props.count)

function increment() {
  count.value = count.value + 1
}
</script>

<template>
  <div flex flex-row gap-4>
    <div>count: {{ count }}</div>
    <button @click="increment">add</button>
  </div>
</template>

<style scoped></style>
