<script setup lang="ts">
const props = defineProps<{
  label: string
  id: string
  value: string
  placeholder: string
  errorMessage: string
  icon: string
}>();
</script>

<template>
  <div>
    <div class="flex items-center justify-between">
        <label :for="id" class="block text-sm">{{ label }}</label>
        <span class="text-xs text-red-500">{{ errorMessage }}</span>
    </div>

    <div class="relative flex items-center mt-2">
        <span class="absolute">
          <img :src="icon" />
        </span>
        <input type="number"
          :id="id"
          :placeholder="placeholder"
          :value="value"
          @input="$emit('update:value', $event.target.value)"
          class="text-right block w-full py-2.5 text-gray-700 placeholder-gray-400/70 bg-white border border-gray-200 rounded-lg pl-5 pr-11 rtl:pr-5 rtl:pl-11 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40">
    </div>
  </div>
</template>
