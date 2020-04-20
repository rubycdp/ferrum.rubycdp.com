<template>
  <div class="thread-safe">
    <div class="thread-safe__title-wrapper">
      <h2 class="thread-safe__title">{{ title }}</h2>
    </div>
    <p class="thread-safe__text">{{ text }}</p>
    <img src="@/assets/images/home/thread_safe.png" class="thread-safe__image" />
  </div>
</template>

<script>

export default {
  name: 'ThreadSafe',
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
  @include sm {
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
      @include sm {
        right: -39px;
        transform: translateY(-22%);
      }
      @include xs {
        right: auto;
        left: 86px;
        transform: translateY(19%);
      }
    }
  }
  &__title {
    margin-bottom: 32px;
    @include sm {
      margin-bottom: 24px;
    }
    @include xs {
      max-width: 275px;
    }
  }
  &__text {
    max-width: 560px;
    line-height: 32px;
    margin: 0;
    @include xs {
      margin-bottom: 48px;
    }
  }
  &__image {
    @include xs {
      width: 187%;
      max-width: fit-content;
      margin-right: 28px;
      margin-left: -89%;
    }
  }
}
</style>
