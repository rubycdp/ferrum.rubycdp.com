<template>
  <div class="index">
    <h1 class="index__title">{{ title }}</h1>
    <a
      class="index__link"
      :href="links.ferrum.path"
    >
      {{ links.ferrum.text }}
    </a>
    <div class="index__scroll">{{ explore }}</div>
  </div>
</template>

<script>
import links from '@/data/links.js'

export default {
  name: 'Index',
  data () {
    return {
      title: 'Fearless Ruby Chrome driver',
      links: {
        ferrum: {
          text: 'Go to GitHub',
          path: links.ferrum
        }
      },
      explore: 'Explore'
    }
  }
}
</script>

<style lang="scss" scoped>
.index {
  &__title {
    max-width: 590px;
    text-transform: uppercase;
  }
  &__link {
    display: inline-block;
    color: $red;
    line-height: 1.6;
    margin-bottom: 260px;
  }
  &__scroll {
    line-height: 1.6;
    margin-bottom: 424px;
    cursor: pointer;
  }
}
</style>
