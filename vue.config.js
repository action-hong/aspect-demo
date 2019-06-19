module.exports = {
  chainWebpack: config => {
    config.module
      .rule('css')
      .test(/\.css$/)
      .oneOf('vue')
      .resourceQuery(/\?vue/)
      .use('ratio_loader')
      .loader('ratio_loader')
  }
}