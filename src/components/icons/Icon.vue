<script setup>
defineProps({
  icon: {
    type: String,
    required: true
  }
})
</script>

<template>
  <span class="material-symbols-outlined ic">{{ icon }}</span>
</template>

<style scoped>
.ic{
  cursor: pointer;
}
</style>