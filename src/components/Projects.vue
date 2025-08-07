<template>
  <!-- My Projects Section -->
  <h1 class="py-3 text-center text-light" id="projects"> My Projects </h1>
  <section class="pb-5 px-5">
    <!-- Loop through each group of 3 projects -->
    <div 
      v-for="(group, index) in chunkedProjects" 
      :key="index" 
      class="row justify-content-center"
    >
      <!-- For each project in the current group, render a ProjectCard -->
      <ProjectCard 
        v-for="project in group" 
        :key="project.id" 
        :project="project"
      />
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import ProjectCard from './ProjectCard.vue'
import projects from '../data/projects.json'

// Number of cards per row (chunk size)
const chunkSize = 3

// Computed: break projects into chunks of 3
const chunkedProjects = computed(() => {
  const chunks = []
  for (let i = 0; i < projects.length; i += chunkSize) {
    chunks.push(projects.slice(i, i + chunkSize))
  }
  return chunks
})
</script>
