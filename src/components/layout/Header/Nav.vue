<template>
  <nav class="nav">
    <a
      v-for="(link, key) in links"
      :key="key"
      :href="link.path"
      class="nav__link nav__github"
      :target="isExternalLink(link) ? '_blank' : '_self'"
    >
      {{ link.text }}
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
      links: [
        {
          text: 'Docs',
          path: '/docs'
        },
        {
          text: 'GitHub',
          path: links.ferrum
        }
      ]
    }
  },
  methods: {
    /**
     * @param {object} link
     * @returns boolean
     */
    isExternalLink (link) {
      return link.path[0] !== '/'
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
