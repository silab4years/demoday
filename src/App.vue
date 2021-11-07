<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import Header from './components/Header.vue'
import Intro from './components/Intro.vue'
import Features from './components/Features.vue'
import HelloWorld from './components/HelloWorld.vue'
import Footer from './components/Footer.vue'
</script>

<template>
  <Header />
  <Intro />
  <Features />
  <HelloWorld msg="Hello Vue 3 + Vite" />
  <Footer />
</template>
<style lang="sass">
\:root
  --container-width: 1440px
  --container-max-width: calc(100vw - 20px)
body
  font-family: 'Noto Sans TC', sans-serif
</style>