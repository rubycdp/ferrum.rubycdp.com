<template>
  <div class="thread-safe">
    <h2 class="thread-safe__title">{{ title }}</h2>
    <p class="thread-safe__text">{{ text }}</p>
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
</style>
