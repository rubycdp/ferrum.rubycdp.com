<template>
  <div class="home">
    <Header class="home__header" />
    <div class="home__section-list">
      <Index class="home__section home__section_index" />
      <About class="home__section home__section_about" />
      <Suggest class="home__section home__section_suggest" />
    </div>
  </div>
</template>

<script>
import Header from '@/components/layout/Header.vue'
import Index from '@/views/Home/sections/Index.vue'
import About from '@/views/Home/sections/About.vue'
import Suggest from '@/views/Home/sections/Suggest.vue'

export default {
  name: 'home',
  components: {
    Header,
    Index,
    About,
    Suggest
  }
}
</script>

<style lang="scss" scoped>
</style>
