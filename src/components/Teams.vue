<template>
  <section id="teams">
    <div class="teams-container">
      <div class="title">參展團隊</div>
      <div class="teams">
        <div class="team-item" v-for="(team, i) of teams" :key="i">
          <div class="image">
            <img :src="`/img/teams/img/${team.img}.png`" />
          </div>
          <div class="content">
            <div class="header">
              <div class="name">
                <div class="name">{{ team.title }}</div>
                <div class="subtitle">{{ team.subtitle }}</div>
              </div>
              <div class="icons">
                <div class="icon" v-for="i of team.SDGsIds" :key="i">
                  <img :src="`/img/teams/goal/E-WEB-Goal-${i}.png`" />
                </div>
              </div>
            </div>
            <div class="intro-title">{{ team.introTitle }}</div>
            <div class="description">{{ team.description }}</div>
          </div>
          <div class="spacer" />
          <div class="actions">
            <a :href="team.link" target="_blank" class="action-link"> 團隊介紹 </a>
            <a :href="team.videoLink" target="_blank" class="action-link video" v-if="team.videoLink"> 影音簡介 </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import teams from '../assets/teams/teams.json'
export default {
  data() {
    return {
      teams
    }
  }
}
</script>
<style lang="sass">
#teams
  position: relative
  &::before, &::after
    content: ''
    background-image: url('../assets/teams/cover.png')
    background-size: contain
    background-repeat: no-repeat
    height: 289px
    width: 760px
    position: absolute
    @media (max-width: 768px)
      height: 143px
      width: 376px
  &::before
    top: 0
    right: 0
  &::after
    bottom: 0
    left: 0
    transform: rotate(180deg)
  .teams-container
    width: var(--container-width)
    max-width: var(--container-max-width)
    margin: 0 auto
    .title
      font-size: 64px
      font-weight: bold
      padding: 100px 0
      text-align: center
      position: relative
      text-shadow: -1px -1px 0 #fff, 1px -1px 0 #fff,-1px 1px 0 #fff,1px 1px 0 #fff
      @media (max-width: 768px)
        font-size: 36px
        padding: 50px 0
        padding-top: 70px
    .teams
      display: grid
      gap: 32px
      grid-template-columns: repeat(3, 1fr)
      @media (min-width: 769px)
        padding-bottom: 300px
      @media (max-width: 768px)
        padding-bottom: 150px
        grid-template-columns: 1fr
      .team-item
        border: 1px solid rgba(0, 0, 0, 0.1)
        border-radius: 16px
        display: flex
        flex-direction: column
        .image
          width: 100%
          background-color: #e7e7e7
          display: flex
          justify-content: center
          align-items: center
          border-radius: 16px 16px 0 0
          img
            width: 100%
            height: 100%
        .content
          padding: 16px
          display: flex
          flex-direction: column
          .header
            display: flex
            justify-content: space-between
            .name
              display: flex
              flex-direction: column
              .name
                font-size: 16px
                font-weight: bold
                line-height: 1.2
              .subtitle
                font-size: 14px
                line-height: 1.2
            .icons
              display: flex
              justify-content: center
              gap: 6px
              .icon
                width: 50px
                height: 50px
                img
                  width: 100%
                  height: 100%
          .intro-title
            font-size: 18px
            font-weight: bold
            text-align: center
            line-height: 1.4
            margin: 16px 0
            &::before
              content: '“'
            &::after
              content: '”'
          .description
            font-size: 14px
            line-height: 1.4
            text-align: justify
        .spacer
          flex: 1
        .actions
          display: flex
          padding: 0 16px 16px 16px
          gap: 16px
          .action-link
            font-size: 14px
            font-weight: bold
            background-color: #7CE6F6
            padding: 6px 12px
            padding-right: 8px
            letter-spacing: 4px
            color: #000
            border-radius: 8px
            text-decoration: none
            &.video
              background-color: #FFD347
            &:hover
              opacity: 0.8
            &:active
              transform: scale(0.95)
              transition: transform 0.2s ease-in-out
</style>