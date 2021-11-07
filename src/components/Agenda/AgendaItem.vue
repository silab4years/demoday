<template>
  <div class="agenda-item" :class="[`event-${eventType}`]" :style="{ backgroundColor, minHeight: `calc(${minHeight} - 20px)` }">
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
    }
  }
}
</script>
<style lang="sass">
.agenda-item
    --event-color: transparent
    display: grid
    grid-template-columns: 1fr 1fr 1fr
    align-items: center
    color: #000
    font-size: 24px
    padding: 10px 36px
    border-radius: 12px
    &.event-online
        --event-color: #4CE7FF
    &.event-live
        --event-color: #FF6422

    // dot
    .dot
        content: ''
        display: block
        width: 16px
        height: 16px
        border-radius: 50%
        background-color: var(--event-color)
        margin-right: 10px
    .time
        display: flex
        align-items: center
        font-weight: bold
    .name
        text-align: center
        font-weight: bold
    .spaker
        text-align: right
        line-height: 1.25em
    &.agenda-item
        margin-top: 24px
</style>