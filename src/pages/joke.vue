<script setup lang="ts">
import axios from 'axios'

const setup = ref<string | null>(null)
const delivery = ref<string | null>(null)
const buttonText = ref<string>('Tell me')

const showDelivery = ref<boolean>(false)

onBeforeMount(async () => {
  fetchData()
})

async function fetchData() {
  const res = await axios.get('https://v2.jokeapi.dev/joke/christmas')
  const data = res.data

  setup.value = data.setup
  delivery.value = data.delivery

  return data
}

function clickButton() {
  if (showDelivery.value === true) {
    fetchData()
  } else {
    showDelivery.value = true

    buttonText.value = 'Another'
  }
}
</script>

<template>
  <div w-screen h-screen flex="~ col" items-center justify-center gap-4>
    <h2>Joke Generator</h2>

    <div flex="~ col" gap-4 v-if="setup" w-md>
      <div test="setup" bg-green-700 text-white p-4 rounded-lg self-start>
        {{ setup }}
      </div>

      <div
        test="delivery"
        v-if="showDelivery"
        bg-red-600
        text-white
        p-4
        rounded-lg
        self-end
      >
        {{ delivery }}
      </div>

      <div
        test="button"
        @click="clickButton"
        bg-green-500
        p-4
        rounded-lg
        text-center
        hover:opacity-70
        cursor-pointer
      >
        {{ buttonText }}
      </div>
    </div>
  </div>
</template>

<style scoped></style>
