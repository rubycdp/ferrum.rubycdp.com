<template>
  <div class="suggest">
    <div class="suggest__title-wrapper">
      <h2 class="suggest__title">{{ title }}</h2>
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
import SVGArrowLeft from '@/assets/images/home/arrow_left.svg'

export default {
  name: 'Suggest',
  components: {
    SVGArrowLeft
  },
  data () {
    return {
      title: 'USEFUL',
      services: [
        {
          name: 'Cuprite',
          description: `Is a Capybara driver which uses Ferrum underneath.
            It allows you to run your Capybara tests on a headless
            Chromium/Chrome by CDP protocol.`,
          link: {
            text: 'Github',
            path: links.cuprite
          }
        },
        {
          name: 'Vessel',
          description: `Is fast high-level web crawling Ruby framework that
            works on top of Ferrum. Build your own google, crawl thousands of
            websites per month!`,
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
  padding-bottom: 192px;
  @include md{
    padding-bottom: 112px;
  }
  @include sm {
    padding-bottom: 56px;
  }
  &__title-wrapper {
    position: relative;
    display: inline-block;
    margin-bottom: 43px;
    @include sm {
      margin-bottom: 24px;
    }
    svg {
      position: absolute;
      right: -54px;
      bottom: 50%;
      transform: translateY(47%);
      @include sm {
        transform: scale(0.6641) translate(-23px, 72%);
      }
    }
  }
  &__service-list {
    display: flex;
    @include xs {
      flex-wrap: wrap;
    }
  }
  &__service {
    max-width: 46%;
    @include xs {
      max-width: 100%;
      margin-right: 0;
    }
    &:first-child {
      margin-right: 90px;
      @include sm {
        margin-right: 58px;
      }
      @include xs {
        margin-right: 0;
        margin-bottom: 64px;
      }
    }
  }
  &-service {
    display: flex;
    flex-direction: column;
    &__name {
      font-size: 32px;
      font-weight: bold;
      line-height: 100%;
      margin-bottom: 32px;
      @include sm {
        font-size: 24px;
        line-height: 1.35;
        margin-bottom: 16px;
      }
    }
    &__description {
      line-height: 1.6;
      margin-bottom: 48px;
      @include sm {
        margin-bottom: 24px;
      }
    }
    &__link {
      margin-top: auto;
      align-self: flex-start;
      line-height: 1.6;
      color: $white;
      transition: color .1s;
      @include sm {
        line-height: 1.2;
      }
      &:hover {
        color: $red;
        svg path {
          fill: $red;
        }
      }
      svg {
        margin-right: 24px;
        @include sm {
          margin-right: 12px;
          transform: scale(0.75) translate(-4px, 5px);;
        }
        path {
          transition: fill .1s;
        }
      }
    }
  }
}
</style>
