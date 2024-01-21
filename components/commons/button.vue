<script setup lang="ts">
export interface ButtonProps {
  variant: 'primary' | 'secondary'
}

const props = withDefaults(defineProps<ButtonProps>(), {
  variant: 'primary'
})

const emit = defineEmits(['click'])
</script>

<template>
  <button type="button" class="btn" :class="[`btn--${variant}`]" @click="$emit('click')">
    <slot></slot>
  </button>
</template>
