<template>
  <footer class="footer">
    <div class="footer__copyright color-dim">{{ copyright }}</div>
    <div class="footer__developer color-dim">
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
.footer {
  display: flex;
  padding: 48px 0;
  &__copyright, &__developer, &__developer a {
    font-size: 16px;
    line-height: 1.6;
  }
  .color-dim {
    opacity: .3;
  }
  &__copyright {
    margin-right: 24px;
  }
  &__developer {
    a {
      color: $white;
    }
  }
}
</style>
