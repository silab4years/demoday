<template>
  <div class="agenda-title-container">
    <div class="agenda-title">
      <slot />
    </div>
  </div>
</template>
<style lang="sass">
.agenda-title-container
  text-align: center
  margin-top: 48px
  margin-bottom: -48px
  @media (max-width: 768px)
    margin-top: 16px
    margin-bottom: 16px
  .agenda-title
    font-size: 36px
    font-weight: bold
    background-color: #FFC817
    color: #000
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25)
    padding: 16px 32px
    border-radius: 100em
    display: inline-block
    margin: 0 auto
    @media (max-width: 768px)
      font-size: 18px
</style>