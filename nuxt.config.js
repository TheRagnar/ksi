module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'ksi',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  modules: [
    '@nuxtjs/axios',
  ],
  axios: {
    baseURL: 'http://ksi.markello.info/api/v1',
    debug: true
  },
  plugins: [{
    src: '~plugins/vue-scrollmagic.js',
    ssr: false
  },
    // { 
    //   src: '~/plugins/vuex-persist',
    //   ssr: false
    // }
  ],
  vue: {
    loaders: {
      sass: 'style!css!sass?indentedSyntax',
      scss: 'style!css!sass'
    }
  },
  router: {
    scrollBehavior: function (to, from, savedPosition) {
      return { x: 0, y: 0 }
    }
  },
  build: {
    vendor: ['axios'],
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}