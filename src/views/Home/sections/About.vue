<template>
  <div class="about">
    <Meet class="about__block" />
    <Skillful class="about__block" />
    <ThreadSafe class="about__block" />
  </div>
</template>

<script>
import Meet from '@/views/Home/sections/About/Meet'
import Skillful from '@/views/Home/sections/About/Skillful'
import ThreadSafe from '@/views/Home/sections/About/ThreadSafe'

export default {
  name: 'About',
  components: {
    Meet,
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
