<template>
  <header class="header">
    <Logo />
    <Nav />
  </header>
</template>

<script>
import Logo from '@/components/layout/Header/Logo'
import Nav from '@/components/layout/Header/Nav'

export default {
  name: 'Header',
  components: {
    Logo,
    Nav
  }
}
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 39px 0;
}
</style>
