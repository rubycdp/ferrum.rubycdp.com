<template>
  <div id="scroll-meet" class="meet">
    <h2 class="meet__title">{{ title }}</h2>
    <p class="meet__text">{{ text }}</p>
    <div class="meet__advantages">
      <div
        v-for="(advantage, key) in advantages"
        :key="key"
      >
        <img src="" alt="">
        <span>{{ advantage }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Meet',
  data () {
    return {
      title: 'Meet',
      text: `Ferrum provides you a high level API interface to Chrome browser and allows you 
        to fully automate it and grab data from any public site you want. There’s no additional
        software required — only Chrome, Ruby and you.`,
      advantages: ['Pure Chrome', 'Pure Ruby', 'No addictions']
    }
  }
}
</script>

<style lang="scss" scoped>
.meet {
  &__text {
    max-width: 653px;
    line-height: 1.6;
  }
  &__advantages {
    display: flex;
    div {
      margin-right: 160px;
      text-align: center;
      &:last-child {
        margin-right: 0;
      }
    }
    span {
      font-size: 24px;
      font-weight: bold;
    }
  }
}
</style>
