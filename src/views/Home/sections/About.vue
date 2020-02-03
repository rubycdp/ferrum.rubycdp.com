<template>
  <div class="about">
    <h1 class="about__title">{{ title }}</h1>
    <a
      class="about__link"
      :href="links.ferrum.path"
    >
      {{ links.ferrum.text }}
    </a>
    <div class="about__scroll">{{ explore }}</div>
  </div>
</template>

<script>
import links from '@/data/links.js'

export default {
  name: 'About',
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
</style>
