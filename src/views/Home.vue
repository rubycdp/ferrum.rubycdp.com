<template>
  <div class="home">
    <Header class="home__header" />
    <div class="home__section-list">
      <Index class="home__section home__section_index" />
      <About class="home__section home__section_about" />
      <Suggest class="home__section home__section_suggest" />
    </div>
    <Footer />
    <Proposal />
  </div>
</template>

<script>
import Header from '@/components/layout/Header.vue'
import Index from '@/views/Home/sections/Index.vue'
import About from '@/views/Home/sections/About.vue'
import Suggest from '@/views/Home/sections/Suggest.vue'
import Footer from '@/components/layout/Footer.vue'
import Proposal from '@/components/Proposal.vue'

export default {
  name: 'Home',
  components: {
    Header,
    Index,
    About,
    Suggest,
    Footer,
    Proposal
  }
}
</script>

<style lang="scss">
.home {
  background: $black;
  color: $white;
  font-size: 20px;

  a {
    text-decoration: none;
  }
  h1 {
    font-size: 80px;
  }
  h2 {
    font-size: 64px;
  }
  h1, h2 {
    text-transform: uppercase;
  }
}
</style>
