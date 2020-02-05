<template>
  <div class="home">
    <div class="z-index-wrapper z-index-wrapper_top">
      <div class="container">
        <div class="home__section-list">
          <Index class="home__section home__section_index" />
          <About class="home__section home__section_about" />
          <Suggest class="home__section home__section_suggest" />
        </div>
        <Footer />
      </div>
    </div>
    <div class="z-index-wrapper z-index-wrapper_bottom">
      <Proposal />
    </div>
  </div>
</template>

<script>
import Index from '@/views/Home/sections/Index.vue'
import About from '@/views/Home/sections/About.vue'
import Suggest from '@/views/Home/sections/Suggest.vue'
import Footer from '@/components/layout/Footer.vue'
import Proposal from '@/components/Proposal.vue'

export default {
  name: 'Home',
  components: {
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
  position: relative;
  background: $black;
  color: $white;
  font-size: 20px;
  @include md {
    font-size: 16px;
  }
  .container {
    @include page-container;
  }

  a {
    text-decoration: none;
  }
  h1 {
    font-size: 80px;
    @include md {
      font-size: 40px;
    }
  }
  h2 {
    font-size: 64px;
    @include md {
      font-size: 48px;
    }
  }
  h1, h2 {
    text-transform: uppercase;
    line-height: 100%;
  }
  .z-index-wrapper {
    position: relative;
    &_top {
      z-index: 2;
      background: $black;
      margin-bottom: 320px;
      @include md {
        margin-bottom: 160px;
      }
    }
    &_bottom {
      z-index: 1;
      position: fixed;
      left: 0;
      bottom: 0;
      width: 100%;
    }
  }
}
</style>
