<template>
  <div
    class="agenda-item"
    :class="[`event-${eventType}`, intermission ? 'intermission' : null]"
    :style="{ backgroundColor, '--min-height': `calc(${minHeight} - 20px)` }"
  >
    <div class="time">
      <div class="dot"></div>
      <slot name="time"></slot>
    </div>
    <div class="name">
      <slot name="name"></slot>
    </div>
    <div class="spaker">
      <slot name="spaker"></slot>
    </div>
  </div>
</template> 
<script>
export default {
  props: {
    backgroundColor: {
      default: '#E6E6E6'
    },
    eventType: {
      type: String
    },
    minHeight: {
      type: String
    },
    intermission: {
      type: Boolean,
      default: false
    }
  }
}
</script>
<style lang="sass">
.agenda-item
    --event-color: transparent
    display: grid
    grid-template-columns: repeat(3, 1fr)
    grid-template-areas: "time name spaker"
    align-items: center
    color: #000
    font-size: 24px
    padding: 10px 36px
    border-radius: 12px
    &.event-online
        --event-color: #4CE7FF
    &.event-live
        --event-color: #FF6422

    @media (min-width: 769px)
        min-height: var(--min-height)
    @media (max-width: 768px)
        font-size: 14px
        padding: 16px 32px
        grid-template-columns: repeat(2, 1fr)
        grid-template-areas: "time spaker" "name spaker"
        &.intermission
            grid-template-areas: "time name"
            .name
                text-align: right
    // dot
    .dot
        display: block
        width: 16px
        height: 16px
        border-radius: 50%
        background-color: var(--event-color)
        margin-right: 10px
        @media (max-width: 768px)
            width: 8px
            height: 8px
            margin-right: 5px
    .time
        display: flex
        align-items: center
        font-weight: bold
        grid-area: time
    .name
        text-align: center
        font-weight: bold
        grid-area: name

        @media (max-width: 768px)
            text-align: left
            padding-left: 13px
    .spaker
        text-align: right
        line-height: 1.25em
        grid-area: spaker
        @media (max-width: 768px)
            font-weight: bold
    &.agenda-item
        margin-top: 24px
</style>