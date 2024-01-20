<script setup lang="ts">
export interface ButtonProps {
  variant: 'primary' | 'secondary'
}

const props = withDefaults(defineProps<ButtonProps>(), {
  variant: 'primary'
})
</script>

<template>
  <button type="button" class="btn" :class="[`btn--${variant}`]">
    <slot></slot>
  </button>
</template>
