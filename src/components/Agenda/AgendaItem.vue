<template>
  <div
    class="agenda-item"
    :class="[`event-${eventType}`, intermission ? 'intermission' : null, withAction ? 'with-action' : null]"
    :style="{ backgroundColor, '--min-height': minHeight }"
  >
    <div class="time">
      <slot name="time"></slot>
    </div>
    <div class="name">
      <slot name="name"></slot>
    </div>
    <div class="spaker" v-if="!intermission">
      <slot name="spaker"></slot>
    </div>
    <div class="action" v-if="withAction">
      <slot name="action"></slot>
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
  },
  data() {
    return {
      withAction: this.$slots.action,
      intermission: !this.$slots.spaker
    }
  }
}
</script>
<style lang="sass">
.agenda-item
  --event-color: transparent
  display: grid
  grid-template-columns: 300px 2fr 1fr
  grid-template-areas: "time name spaker"
  align-items: center
  color: #000
  font-size: 24px
  padding: 10px 36px
  border-radius: 12px
  line-height: 1.5
  gap: 12px
  &.event-online
    --event-color: #4CE7FF
  &.event-live
    --event-color: #FF6422
  &.with-action
    grid-template-columns: 300px 1fr 1fr 100px
    grid-template-areas: "time name spaker action"
  &.with-action.intermission
    grid-template-columns: 300px 1fr 100px
    grid-template-areas: "time name action"
  @media (min-width: 769px)
    min-height: var(--min-height)
  @media (max-width: 1440px)
    font-size: 18px
    grid-template-columns: 200px 1fr 1fr
    grid-template-areas: "time name spaker"
    &.with-action
      grid-template-columns: 200px 1fr 1fr 100px
      grid-template-areas: "time name spaker action"
    &.with-action.intermission
      grid-template-columns: 200px 1fr 100px
      grid-template-areas: "time name action"
  @media (max-width: 768px)
    font-size: 14px
    padding: 8px 16px
    grid-template-columns: repeat(2, 1fr)
    grid-template-areas: "time spaker" "name spaker"
    &.with-action
      grid-template-columns: repeat(2, 1fr) 55px
      grid-template-areas: "time spaker action" "name spaker action"
    &.intermission
      grid-template-areas: "time name"
      .name
        text-align: right
    &.with-action.intermission
      grid-template-columns: 1fr 55px
      grid-template-areas: "time action" "name action"
      .name
        text-align: left
  .time
    display: flex
    align-items: center
    font-weight: bold
    grid-area: time
  .name
    text-align: left
    font-weight: bold
    grid-area: name
    @media (max-width: 768px)
      font-size: 10px
  .spaker
    text-align: right
    grid-area: spaker
    @media (max-width: 768px)
      font-weight: bold
      font-size: 10px
  .action
    text-align: right
    grid-area: action
  &.action-end .action
    align-self: end
  &.agenda-item
    margin-top: 24px
</style>