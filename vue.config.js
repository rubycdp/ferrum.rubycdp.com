module.exports = {
  // webpack autofix rule
  chainWebpack: config => {
    config.module.rule('eslint').use('eslint-loader').options({
      fix: true
    })
  },
  css: {
    // glabal styles
    loaderOptions: {
      sass: {
        prependData: `@import "~@/assets/styles/index.scss";`
      }
    }
  }
}