<template>
  <fixed-header :threshold="100">
    <header class="header">
        <div class="header__content" >
          <Logo />
          <Nav />
        </div>
    </header>
  </fixed-header>
</template>

<script>
import Logo from '@/components/layout/Header/Logo'
import Nav from '@/components/layout/Header/Nav'
import FixedHeader from 'vue-fixed-header'

export default {
  name: 'Header',
  components: {
    Logo,
    Nav,
    FixedHeader
  }
}
</script>

<style lang="scss" scoped>
.header {
  padding: 60px 0;
  overflow: hidden;
  &.vue-fixed-header--isFixed {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    background: $black;
    z-index: 100;
    padding: 20px 0;
    .header__content {
      padding-right: 48px;
      padding-left: 48px;
      max-width: 960px;
      width: calc(100% - 96px);
    @include sm {
      padding: 0px 24px;
    }
    @include xs {
      width: calc(100% - 48px);
    }
    }
  }
  @include sm {
    padding: 32px 0;
  }
  &__content {
    padding-top: 0px;
    padding-bottom: 0px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
  }
}
</style>
