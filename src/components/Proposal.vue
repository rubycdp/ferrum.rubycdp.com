<template>
  <div class="proposal">
      <a :href="path" class="proposal__link">
        <div class="proposal__text">{{ text }}</div>
        <div class="proposal__logo">logo</div>
      </a>
  </div>
</template>

<script>
export default {
  name: 'Proposal',
  data () {
    return {
      text: 'Let’s try',
      path: ''
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
