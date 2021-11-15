<template>
  <div class="top-button" @click="scrollToTop" :class="{ show: showButton }">
    <img src="../assets/top.svg" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      showButton: false
    }
  },
  created() {
    this.bindScroll()
  },
  methods: {
    bindScroll() {
      window.addEventListener('scroll', (e) => {
        this.showButton =
          window.scrollY > 100 &&
          (window.scrollY < document.body.scrollHeight - window.innerHeight - document.querySelector('#footer').scrollHeight ||
            window.matchMedia(`(max-width: 768px)`).matches)
      })
    },
    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
    }
  }
}
</script>
<style lang="sass">
.top-button
    position: fixed
    bottom: 20px
    right: 20px
    z-index: 100
    cursor: pointer
    transition: all 0.3s ease
    &:not(.show)
        opacity: 0
        transform: translateX(100px)
    &:hover
        opacity: 0.8
    &:active
        opacity: 1
        transform: scale(0.95)
        transition: transform 0.2s ease-in-out
    img
        width: 80px
        height: 80px
        @media (max-width: 768px)
            width: 60px
            height: 60px
</style>