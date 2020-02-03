<template>
  <footer class="footer">
    <div class="footer__copyright">{{ copyright }}</div>
    <div class="footer__developer">
      <span>{{ developer.siteBy }}</span>
      <a target="_blank" :href="developer.link.path">{{ developer.link.text }}</a>
    </div>
  </footer>
</template>

<script>
import links from '@/data/links.js'

export default {
  name: 'Footer',
  data () {
    return {
      copyright: '©2020 Machinio',
      developer: {
        siteBy: 'Site by ',
        link: {
          path: links.evrone,
          text: 'evrone.com'
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
