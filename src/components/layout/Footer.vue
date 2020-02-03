<template>
  <footer class="footer">
    <div class="footer__copyright">{{ copyright }}</div>
    <div class="footer__developer">
      <span>{{ developer.siteBy }}</span>
      <a :href="developer.link.path">{{ developer.link.text }}</a>
    </div>
  </footer>
</template>

<script>

export default {
  name: 'Footer',
  data () {
    return {
      copyright: '©2020 Machinio',
      developer: {
        siteBy: 'Site by ',
        link: {
          path: 'http://evrone.com',
          text: 'evrone.com'
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
