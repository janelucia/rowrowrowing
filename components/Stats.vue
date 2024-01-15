<template>
  <div class="shadow stats">
    <div class="stat">
      <div class="stat-title">{{ title }}</div>
      <div class="stat-value">{{ statValue }}</div>
      <div class="stat-desc">{{ subtitle }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title: string;
  statValue: string;
  subtitle?: string;
}>();
</script>
