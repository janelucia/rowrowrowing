<template>
  <div class="w-full shadow-md md:w-1/3 card bg-base-100">
    <div class="card-body">
      <h2 class="card-title">{{ title }}</h2>
      <p>{{ paragraph }}</p>
      <div class="justify-end card-actions">
        <button class="btn btn-primary">
          <a :href="href" target="_blank">{{ cta }}</a>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title: string;
  paragraph: string;
  href: string;
  cta: string;
}>();
</script>
