<script setup lang="ts">
const christmas = new Date(2023, 11, 25, 0, 0, 0, 0)
const oneDay = 24 * 60 * 60 * 1000

const now = useNow()

const days = computed(
  () => (christmas.getTime() - now.value.getTime()) / oneDay
)
const daysRounded = computed(() => Math.floor(days.value))

const hours = computed(() => 24 * (days.value - daysRounded.value))
const hoursRounded = computed(() => Math.floor(hours.value))

const minutes = computed(() => 60 * (hours.value - hoursRounded.value))
const minutesRounded = computed(() => Math.floor(minutes.value))

const seconds = computed(() => 60 * (minutes.value - minutesRounded.value))
const secondsRounded = computed(() => Math.floor(seconds.value))
</script>

<template>
  <div flex="~ col" h-screen w-screen items-center justify-center>
    <h2>Xmas Countdown</h2>

    <div flex="~ row" gap-4>
      <div test="days" flex="~ col" items-center justify-center>
        <div text-2xl text-green-600>{{ daysRounded }}</div>
        <div>days</div>
      </div>
      <div test="hours" flex="~ col" items-center justify-center>
        <div text-2xl text-green-600>{{ hoursRounded }}</div>
        <div>hours</div>
      </div>
      <div test="minutes" flex="~ col" items-center justify-center>
        <div text-2xl text-green-600>{{ minutesRounded }}</div>
        <div>minutes</div>
      </div>
      <div test="seconds" flex="~ col" items-center justify-center>
        <div text-2xl text-green-600>
          {{ secondsRounded }}
        </div>
        <div>seconds</div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
