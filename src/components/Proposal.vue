<template>
  <div class="proposal">
      <div class="container">
        <a target="_blank" :href="path" class="proposal__link">
          <div class="proposal__text">{{ text }}</div>
          <SVGLetsTryLogo />
        </a>
      </div>
  </div>
</template>

<script>
import links from '@/data/links.js'
import SVGLetsTryLogo from '@/assets/images/home/letstry_title.svg'

export default {
  name: 'Proposal',
  components: {
    SVGLetsTryLogo
  },
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
  @include sm {
    padding: 60px 0;
  }
  &__link {
    position: relative;
    display: inline-block;
    @include sm {
      line-height: 1;
    }
    svg {
      position: absolute;
      bottom: -35px;
      right: -68px;
      @include sm {
        transform: scale(0.5) translate(89px, 1px);
      }
    }
  }
  &__text {
    font-size: 80px;
    font-weight: bold;
    color: $black;
    text-transform: uppercase;
    @include sm {
      font-size: 40px;
    }
  }
}
</style>
