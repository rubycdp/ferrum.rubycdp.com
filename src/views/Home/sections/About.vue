<template>
  <div class="about">
    <One class="about__block" />
    <Two class="about__block" />
    <ThreadSafe class="about__block" />
  </div>
</template>

<script>
import One from '@/views/Home/sections/About/One'
import Two from '@/views/Home/sections/About/Two'
import ThreadSafe from '@/views/Home/sections/About/ThreadSafe'

export default {
  name: 'About',
  components: {
    One,
    Two,
    ThreadSafe
  },
  data () {
    return {
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
