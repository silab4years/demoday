<template>
  <div id="guidebook">
    <div class="guidebook-container">
      <div class="header">導覽手冊</div>
      <div class="guidebook-box"></div>
      <div class="cover">
        <img src="../assets/guidebook/cover.png" alt="" />
      </div>
    </div>
  </div>
</template>

<style lang="sass">
#guidebook
    background-color: #6C63FF
    padding: 75px
    position: relative
    @media (max-width: 768px)
        padding: 0
    .guidebook-container
        margin: 0 auto
        .header
            font-size: 64px
            text-align: center
            color: #fff
            font-weight: bold
            margin-bottom: 25px
            @media (max-width: 768px)
                font-size: 36px
                padding: 50px 0px
                margin-bottom: 0
        .guidebook-box
            height: calc(100vh - 300px)
            width: 100%
            background-color: #fff
            border-radius: 30px
            @media (max-width: 768px)
                border-radius: 30px 30px 0 0
                height: 300px
        .cover
            position: absolute
            bottom: -2px
            right: 0
            @media (max-width: 768px)
                display: none
            img
                width: 300px
</style>