<template>
  <div class="index">
    <Header class="index__header" />
    <div class="index__center-wrapper">
      <h1 class="index__title">{{ title }}</h1>
      <div class="index__link">
        <a :href="links.ferrum.path" target="_blank">
          {{ links.ferrum.text }}
        </a>
        <SVGUnderline />
      </div>
    </div>
    <div class="index__scroll">
      <a href="#scroll-meet" v-smooth-scroll="scrollOptions">
        <SVGArrowDown />
        <span>{{ explore }}</span>
      </a>
    </div>
  </div>
</template>

<script>
import links from '@/data/links.js'
import SVGUnderline from '@/assets/images/home/underline.svg'
import SVGArrowDown from '@/assets/images/home/arrow_down.svg'
import Header from '@/components/layout/Header.vue'

export default {
  name: 'Index',
  components: {
    SVGUnderline,
    SVGArrowDown,
    Header
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
        updateHistory: false
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.index {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
  min-height: 100%;
  max-height: 1400px;
  background: url("../../../assets/images/home/cover_illistration.png") 99% 29%/70% no-repeat;
  @include md {
    height: 100%;
    background-position: 50% 103%;
    background-size: 100%;
    margin-bottom: 315px;
  }
  @include sm {
    margin-bottom: 160px;
  }
  @media screen and (max-width: 330px) {
    background-position: -55px 124%;
    background-size: 122%;
  }
  &__header {
    @include sm {
      margin-bottom: 22px;
    }
  }
  &__title {
    max-width: 590px;
    margin: 10px 0 32px;
    @include sm {
      max-width: 295px;
    }
    @include xxs {
      letter-spacing: -0.04em;
      margin-bottom: 16px;
    }
  }
  &__link {
    position: relative;
    display: inline-block;
    align-self: flex-start;
    margin-bottom: 30px;
    cursor: pointer;
    @include md {
      margin-bottom: 480px;
    }
    @include xs {
      margin-bottom: 264px;
    }

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
      @include sm {
        transform: scale(0.7891) translate(-17px, 2px);
      }
    }
  }
  &__scroll {
    padding-bottom: 25px;
    @include md {
      padding-bottom: 0px;
    }
    @include sm {
      display: none;
    }
    a {
      display: inline-flex;
      align-items: center;
      color: $white;
      line-height: 1.6;
      transition: color .1s;
      &:hover {
        color: $red;
        svg path {
          fill: $red;
        }
      }
      svg {
        margin-right: 24px;
        path {
          transition: fill .1s;
        }
      }
    }
  }
}
</style>
