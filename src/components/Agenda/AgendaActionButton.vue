<template>
  <a class="agenda-action-button" :href="href" target="_blank">
    <slot>加入<br />行事曆</slot>
  </a>
</template>

<script>
export default {
  props: {
    href: {
      type: String,
      default: '#'
    }
  }
}
</script>

<style lang="sass">
.agenda-action-button
    display: flex
    justify-content: center
    align-items: center
    width: 100%
    padding: 0.5rem 0
    border-radius: 0.5rem
    background-color: #fff
    color: #000
    text-decoration: none
    font-weight: bold
    text-align: center
    cursor: pointer
    transition: all 0.2s ease-in-out
    &:hover
        opacity: 0.8
    &:active
        transform: scale(0.95)
        transition: transform 0.2s ease-in-out
</style>