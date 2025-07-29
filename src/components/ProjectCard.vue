<template>
  <div class="col-lg-4 col-md-6 col-12 mb-4">
    <div class="card h-100 p-4 shadow-lg">
      <img :src="project.image" class="card-img-top img-fluid" alt="Project Image" />
      <div class="card-body">
        <h5 class="card-title">{{ project.title }}</h5>
        <p class="card-text">{{ project.description }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'

defineProps({
  project: Object
})
</script>
