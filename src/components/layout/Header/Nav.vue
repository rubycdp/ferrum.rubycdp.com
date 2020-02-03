<template>
  <nav class="nav">
    <a
      class="nav__link nav__github"
      :href="links.github.path"
      target="_blank"
    >
      {{ links.github.text }}
    </a>
  </nav>
</template>

<script>
import links from '@/data/links.js'

export default {
  name: 'Nav',
  components: {
  },
  data () {
    return {
      links: {
        github: {
          text: 'GitHub',
          path: links.ferrum
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
