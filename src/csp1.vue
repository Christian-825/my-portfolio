<script setup>
  import Navbar from './components/Navbar.vue';
  import About from './components/About.vue';
  import Projects from './components/Projects.vue';
  import Tools from './components/Tools.vue';
  import Contact from './components/Contact.vue';
  import FooterComponent from './components/FooterComponent.vue';
</script>

<template>
  
  <Navbar />
  <div class="container-fluid">
    <About />
    <Projects />
    <Tools />
    <Contact />
  </div>
  <FooterComponent />


</template>
<style></style>