<script setup lang="ts">
const toInput = ref<string>('')
const fromInput = ref<string>('')
</script>

<template>
  <div flex="~ col" h-screen w-screen items-center justify-center>
    <h2>Happy Holidays!</h2>

    <div flex="~ col" gap-4>
      <div
        flex="~ col"
        block
        h-34
        w-64
        justify-center
        gap-2
        rounded-lg
        bg-red-300
        p-4
      >
        <div rounded bg-white p-2 text-black>
          <span>TO: </span>
          <span test="toField">{{ toInput }}</span>
        </div>

        <div rounded bg-white p-2 text-black>
          <span>FROM: </span>
          <span test="fromField">{{ fromInput }}</span>
        </div>
      </div>

      <div flex="~ col" w-full gap-4>
        <div>
          <div>TO:</div>
          <input
            v-model="toInput"
            test="toInput"
            w-68
            border
            border-gray-300
            rounded-lg
            bg-gray-50
            p-2
            text-sm
            text-gray-900
            focus:border-blue-500
            focus:ring-blue-500
          />
        </div>
        <div>
          <div>FROM:</div>
          <input
            v-model="fromInput"
            test="fromInput"
            w-68
            border
            border-gray-300
            rounded-lg
            bg-gray-50
            p-2
            text-sm
            text-gray-900
            focus:border-blue-500
            focus:ring-blue-500
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
