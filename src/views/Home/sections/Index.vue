<template>
  <div class="index">
    <h1 class="index__title">{{ title }}</h1>
    <div class="index__link">
      <a :href="links.ferrum.path" target="_blank">
        {{ links.ferrum.text }}
      </a>
      <SVGUnderline />
    </div>
    <div class="index__scroll">
      <a href="#scroll-meet" v-smooth-scroll="scrollOptions">{{ explore }}</a>
    </div>
  </div>
</template>

<script>
import links from '@/data/links.js'
import SVGUnderline from '@/assets/images/home/underline.svg'

export default {
  name: 'Index',
  components: {
    SVGUnderline
  },
  data () {
    return {
      title: 'Fearless Ruby Chrome driver',
      links: {
        ferrum: {
          text: 'Go to GitHub',
          path: links.ferrum
        }
      },
      explore: 'Explore',
      scrollOptions: {
        duration: 700,
        offset: -50,
        updateHistory: false
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.index {
  &__title {
    max-width: 590px;
  }
  &__link {
    position: relative;
    display: inline-block;
    margin-bottom: 260px;
    cursor: pointer;
    &:hover {
      a {
        color: $white;
      }
    }
    a {
      display: inline-block;
      color: $red;
      line-height: 1.6;
      transition: color .1s;
    }
    svg {
      position: absolute;
      bottom: -5px;
      left: 0;
    }
  }
  &__scroll {
    margin-bottom: 424px;
    a {
      color: $white;
      display: inline-block;
      line-height: 1.6;
      cursor: pointer;
    }
  }
}
</style>
