<template>
  <div class="proposal">
      <a target="_blank" :href="path" class="proposal__link">
        <div class="proposal__text">{{ text }}</div>
        <div class="proposal__logo">logo</div>
      </a>
  </div>
</template>

<script>
import links from '@/data/links.js'

export default {
  name: 'Proposal',
  data () {
    return {
      text: 'Let’s try',
      path: links.ferrum
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
