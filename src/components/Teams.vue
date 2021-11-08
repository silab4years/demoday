<template>
  <div id="teams">
    <div class="teams-container">
      <div class="header">參展團隊</div>
    </div>
  </div>
</template>
 
<style lang="sass">
#teams
    position: relative
    &::before
        content: ''
        background-image: url('../assets/teams/cover.png')
        background-size: contain
        background-repeat: no-repeat
        height: 289px
        width: 760px
        position: absolute
        top: 0
        right: 0
    &::after
        content: ''
        background-image: url('../assets/teams/cover.png')
        background-size: contain
        background-repeat: no-repeat
        height: 289px
        width: 760px
        position: absolute
        bottom: 0
        left: 0
        transform: rotate(180deg)
    .teams-container
        width: var(--container-width)
        max-width: var(--container-max-width)
        margin: 0 auto
        min-height: 80vh
        .header
            font-size: 64px
            font-weight: bold
            padding: 100px 0
            text-align: center
</style>