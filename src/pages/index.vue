<script setup lang="ts">
import router from '@/router'
</script>

<template>
  <h2>Advent of Vue</h2>
  <ol>
    <li @click="router.push('/joke')">Joke Generator</li>
    <li @click="router.push('/countdown')">Xmas Countdown</li>
  </ol>
</template>

<style scoped></style>
