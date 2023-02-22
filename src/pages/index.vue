<script setup lang="ts">
import router from '@/router'
</script>

<template>
  <div flex="~ col" h-screen w-screen items-center justify-center>
    <h2>Advent of Vue</h2>
    <ol>
      <li @click="router.push('/joke')">Joke Generator</li>
      <li @click="router.push('/countdown')">Xmas Countdown</li>
      <li @click="router.push('/tree')">Xmas Tree</li>
      <li @click="router.push('/gift')">Gift Label</li>
    </ol>
  </div>
</template>

<style scoped></style>
