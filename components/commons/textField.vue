<script setup lang="ts">
export interface TextFieldProps {
  label?: string
  id?: string
  value?: string
  placeholder?: string
  errorMessage?: string
  icon?: string
  type: string
}

const props = withDefaults(defineProps<TextFieldProps>(), {
  type: 'text',
});

const model = defineModel()
</script>

<template>
  <div>
    <div class="flex items-center justify-between">
        <label :for="id" class="block text-base">{{ label }}</label>
        <span class="text-base text-danger">{{ errorMessage }}</span>
    </div>

    <div class="relative flex items-center mt-1.5">
        <span class="absolute left-4.5">
          <img :src="icon" />
        </span>
        <input
          :type="type"
          :id="id"
          :placeholder="placeholder"
          v-model="model"
          class="text-field w-full"
          :class="{
            'text-field--error': errorMessage,
            'text-field--has-icon': icon
          }"
        />
    </div>
  </div>
</template>
