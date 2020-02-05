<template>
  <div class="thread-safe">
    <div class="thread-safe__title-wrapper">
      <h2 class="thread-safe__title">{{ title }}</h2>
      <SVGThreadSaveTitle />
    </div>
    <p class="thread-safe__text">{{ text }}</p>
    <img src="@/assets/images/home/thread_safe.png" class="thread-safe__image" />
  </div>
</template>

<script>
import SVGThreadSaveTitle from '@/assets/images/home/thread_safe_title.svg'

export default {
  name: 'ThreadSafe',
  components: {
    SVGThreadSaveTitle
  },
  data () {
    return {
      title: 'Thread safe',
      text: `Ferrum was written to be fully thread safe from the beginning. 
        Each page can be maintained independently through a dedicated websocket`
    }
  }
}
</script>

<style lang="scss" scoped>
.thread-safe {
  padding-bottom: 307px;
  @include md {
    padding-bottom: 120px;
  }
  &__title-wrapper {
    position: relative;
    display: inline-block;
    svg {
      position: absolute;
      right: -64px;
      top: 50%;
      transform: translateY(-45%);
      @include md {
        right: -39px;
        transform: translateY(-47%);
      }
      @include sm {
        right: auto;
        left: 86px;
        transform: translateY(19%);
      }
    }
  }
  &__title {
    margin-bottom: 48px;
    @include md {
      margin-bottom: 24px;
    }
    @include md {
      max-width: 275px;
    }
  }
  &__text {
    max-width: 665px;
    line-height: 1.6;
    margin: 0;
    @include sm {
      margin-bottom: 48px;
    }
  }
  &__image {
    @include sm {
      width: 187%;
      max-width: fit-content;
      margin-right: 28px;
      margin-left: -89%;
    }
  }
}
</style>
