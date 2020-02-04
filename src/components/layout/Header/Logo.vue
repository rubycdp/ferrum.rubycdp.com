<template>
  <div class="logo">
    <SVGLogo />
  </div>
</template>

<script>
import SVGLogo from '@/assets/images/logo.svg'

export default {
  name: 'Logo',
  components: {
    SVGLogo
  }
}
</script>

<style lang="scss" scoped>
.logo {
  path {
    fill: $white;
  }
}
</style>
