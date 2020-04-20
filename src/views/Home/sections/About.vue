<template>
  <div class="about">
    <One class="about__block" />
    <Skillful class="about__block" />
    <ThreadSafe class="about__block" />
  </div>
</template>

<script>
import One from '@/views/Home/sections/About/One'
import Skillful from '@/views/Home/sections/About/Skillful'
import ThreadSafe from '@/views/Home/sections/About/ThreadSafe'

export default {
  name: 'About',
  components: {
    One,
    Skillful,
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
