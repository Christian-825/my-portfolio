<template>
    <!-- My Projects Section -->
    <h1 class=" py-3 text-center text-light" id="projects">My Projects</h1>
    <section class="pb-5" >
        <!-- Section Heading -->
        

        <!-- Loop through each group of 3 projects -->
        <div 
            v-for="(group, index) in chunkedProjects" 
            :key="index" 
            class="card-deck my-5 justify-content-center"
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
// Import the 'computed' function from Vue to define reactive derived state 
import { computed } from 'vue';

// Import the ProjectCard component which will display individual project details
import ProjectCard from './ProjectCard.vue';

// Import the project data from a local JSON file
import projects from '../data/projects.json';

// Define the number of projects to display per row
const chunkSize = 3;

/*
 * Create a computed property that splits the projects array into smaller arrays ("chunks")
 * Each chunk will contain up to `chunkSize` number of projects (i.e., 3 per group)
 * This allows us to group them visually in separate rows in the UI
 */
const chunkedProjects = computed(() => {
  const chunks = [];
  // Loop through the projects array in steps of `chunkSize`
  for (let i = 0; i < projects.length; i += chunkSize) {
    // Slice out a chunk of up to 3 projects and add it to the chunks array
    chunks.push(projects.slice(i, i + chunkSize));
  }
  // Return the array of chunks, which the template will loop through
  return chunks;
});
</script>