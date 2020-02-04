<template>
  <div class="proposal">
      <div class="container">
        <a target="_blank" :href="path" class="proposal__link">
          <div class="proposal__text">{{ text }}</div>
          <div class="proposal__logo"></div>
        </a>
      </div>
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
.proposal {
  padding: 114px 0;
  background: $red;
  &__link {
    display: inline-block;
  }
  &__text {
    font-size: 80px;
    font-weight: bold;
    color: $black;
    text-transform: uppercase;
  }
}
</style>
