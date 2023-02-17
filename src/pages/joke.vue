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
  <div flex="~ col" h-screen w-screen items-center justify-center gap-4>
    <h2>Joke Generator</h2>

    <div v-if="setup" flex="~ col" w-md gap-4>
      <div test="setup" self-start rounded-lg bg-green-700 p-4 text-white>
        {{ setup }}
      </div>

      <div
        v-if="showDelivery"
        test="delivery"
        self-end
        rounded-lg
        bg-red-600
        p-4
        text-white
      >
        {{ delivery }}
      </div>

      <div
        test="button"
        cursor-pointer
        rounded-lg
        bg-green-500
        p-4
        text-center
        hover:opacity-70
        @click="clickButton"
      >
        {{ buttonText }}
      </div>
    </div>
  </div>
</template>

<style scoped></style>
