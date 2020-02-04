<template>
  <div class="suggest">
    <div class="suggest__title-wrapper">
      <h2 class="suggest__title">{{ title }}</h2>
      <SVGUsefulTitle />
    </div>
    <div class="suggest__service-list">
      <div
        class="suggest__service suggest-service"
        v-for="(service, key) in services"
        :key="key"
      >
        <div class="suggest-service__name">{{ service.name }}</div>
        <div class="suggest-service__description">{{ service.description }}</div>
        <a
          :href="service.link.path"
          target="_blank"
          class="suggest-service__link"
        >
          <SVGArrowLeft />
          <span>{{ service.link.text }}</span>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import links from '@/data/links.js'
import SVGUsefulTitle from '@/assets/images/home/useful_title.svg'
import SVGArrowLeft from '@/assets/images/home/arrow_left.svg'

export default {
  name: 'Suggest',
  components: {
    SVGUsefulTitle,
    SVGArrowLeft
  },
  data () {
    return {
      title: 'USEFUL',
      services: [
        {
          name: 'Cuprite',
          description: `Is a Capybara driver which uses Ferrum underneath.
            Basically it makes Ferrum to be compatible with Capybara calls`,
          link: {
            text: 'Github',
            path: links.cuprite
          }
        },
        {
          name: 'Vessel',
          description: `In this simple framework you can build and start running
            in parallel your crawler which works on top of Ferrum`,
          link: {
            text: 'Github',
            path: links.vessel
          }
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.suggest {
  &__title-wrapper {
    position: relative;
    display: inline-block;
    margin-bottom: 43px;
    svg {
      position: absolute;
      right: -54px;
      bottom: 50%;
      transform: translateY(47%);
    }
  }
  &__service-list {
    display: flex;
  }
  &__service {
    max-width: 46%;
    &:first-child {
      margin-right: 90px;
    }
  }
  &-service {
    display: flex;
    flex-direction: column;
    &__name {
      font-size: 32px;
      font-weight: bold;
      line-height: 1.6;
      margin-bottom: 32px;
    }
    &__description {
      line-height: 1.6;
      margin-bottom: 54px;
    }
    &__link {
      margin-top: auto;
      align-self: flex-start;
      line-height: 1.6;
      color: $white;
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
