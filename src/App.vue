<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import Header from './components/Header.vue'
import Intro from './components/Intro.vue'
import Features from './components/Features.vue'
import Agenda from './components/Agenda.vue'
import Guidebook from './components/Guidebook.vue'
import Teams from './components/Teams.vue'
import Footer from './components/Footer.vue'
import TopButton from './components/TopButton.vue'
</script>

<template>
  <Header />
  <Intro />
  <Features />
  <Agenda />
  <Guidebook />
  <Teams />
  <Footer />
  <TopButton />
</template>
<style lang="sass">
\:root
  --container-width: calc(100vw - 40px)
  --container-max-width: 1440px
html
  scroll-behavior: smooth
  overflow-x: hidden
body
  font-family: 'Noto Sans TC', sans-serif
  overflow-x: hidden
*
  box-sizing: border-box
</style>