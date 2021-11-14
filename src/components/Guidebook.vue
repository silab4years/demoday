<template>
  <section id="guidebook">
    <div class="guidebook-container">
      <div class="header">導覽手冊</div>
      <div class="guidebook-box">敬請期待</div>
    </div>
    <div class="cover">
      <img src="../assets/guidebook/cover.png" alt="" />
    </div>
  </section>
</template>

<style lang="sass">
#guidebook
  background-color: #A6A0FF
  padding: 75px 0
  position: relative
  @media (max-width: 768px)
    padding: 75px 0
  .guidebook-container
    width: var(--container-width)
    max-width: var(--container-max-width)
    margin: 0 auto
    .header
      font-size: 64px
      text-align: center
      color: #fff
      font-weight: bold
      margin-bottom: 25px
      @media (max-width: 768px)
        font-size: 36px
    .guidebook-box
      height: min(700px, 100vh)
      margin: 0 auto
      background-color: #fff
      border-radius: 30px
      // temp
      background-image: url(../assets/guidebook/coming-soon.png)
      background-size: cover
      background-position: center
      display: flex
      flex-direction: column
      justify-content: center
      align-items: center
      font-weight: bold
      font-size: 56px
      color: #777
      @media (max-width: 768px)
        font-size: 24px
  .cover
    position: absolute
    bottom: -2px
    right: 0
    @media (max-width: 768px)
      display: none
    img
      width: 300px
</style>