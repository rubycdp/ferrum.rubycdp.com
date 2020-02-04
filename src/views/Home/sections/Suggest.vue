<template>
  <div class="suggest">
    <h2 class="suggest__title">{{ title }}</h2>
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
          {{ service.link.text }}
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import links from '@/data/links.js'

export default {
  name: 'Suggest',
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
  &__service-list {
    display: flex;
  }
  &__service {
    max-width: 31%;
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
    }
    &__description {
      line-height: 1.6;
    }
    &__link {
      margin-top: auto;
      align-self: flex-start;
      line-height: 1.6;
      color: $white;
    }
  }
}
</style>
