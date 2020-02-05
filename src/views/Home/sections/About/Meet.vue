<template>
  <div id="scroll-meet" class="meet">
    <div class="meet__title-wrapper">
      <h2 class="meet__title">{{ title }}</h2>
      <SVGMeetTitle />
    </div>
    <p class="meet__text">{{ text }}</p>
    <div class="meet__advantages">
      <div
        v-for="(advantage, key) in advantages"
        :key="key"
      >
        <img :src="getImgUrl(advantage.imgPath)" alt="picture">
        <span>{{ advantage.text }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import SVGMeetTitle from '@/assets/images/home/meet_title.svg'

export default {
  name: 'Meet',
  components: {
    SVGMeetTitle
  },
  data () {
    return {
      title: 'Meet',
      text: `Ferrum provides you a high level API interface to Chrome browser and allows you 
        to fully automate it and grab data from any public site you want. There’s no additional
        software required — only Chrome, Ruby and you.`,
      advantages: [
        {
          text: 'Pure Chrome',
          imgPath: '/home/meet_chrome.png'
        },
        {
          text: 'Pure Ruby',
          imgPath: '/home/meet_ruby.png'
        },
        {
          text: 'No addictions',
          imgPath: '/home/meet_addictions.png'
        }
      ]
    }
  },
  methods: {
    /**
     * Get dynamic image path
     * @param {string} imgPath
     * @returns string
     */
    getImgUrl (imgPath) {
      return require('@/assets/images' + imgPath)
    }
  }
}
</script>

<style lang="scss" scoped>
.meet {
  padding-bottom: 307px;
  &__title-wrapper {
    position: relative;
    display: inline-block;
    svg {
      position: absolute;
      bottom: 34px;
      left: 86px;
    }
  }
  &__title {
    margin-bottom: 48px;
  }
  &__text {
    max-width: 653px;
    line-height: 1.6;
    margin-bottom: 95px;
    margin-top: 0;
  }
  &__advantages {
    display: flex;
    div {
      display: flex;
      flex-direction: column;
      margin-right: 160px;
      @include lg {
        margin-right: 11.92%;
      }
      &:last-child {
        margin-right: 0;
      }
    }
    img {
      margin-bottom: 34px;
    }
    span {
      display: inline-block;
      font-size: 24px;
      font-weight: bold;
      margin-top: auto;
    }
  }
}
</style>
