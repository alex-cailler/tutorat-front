
export default {
  mode: 'spa',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { href: 'https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,600;0,700;0,800;1,300;1,400;1,600;1,700;1,800&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap', rel:'stylesheet'}
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    '@/assets/scss/argon.scss',
    '@fortawesome/fontawesome-svg-core/styles.css'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~/plugins/fontawesome.js',
    '~/plugins/globalDirectives.js',
    '~/plugins/gaTag.js',
    '@/plugins/api.js',
    // '~/plugins/validate.js'
    // '~/plugins/globalComponents.js',
    { src: '~/plugins/vuex-persist', mode: 'client' },
    { src: '~plugins/v-calendar.js', ssr: false }
  ],
  styleResources: {
    scss: '@/assets/scss/argon.scss'
  },
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
   'bootstrap-vue/nuxt',
    //['bootstrap-vue/nuxt', { css: false }],
    '@nuxtjs/auth',
    '@nuxtjs/axios',
    '@nuxtjs/style-resources',
    ['bootstrap-vue/nuxt', {
      bootstrapCSS: false,
      bootstrapVueCSS: false,
      componentPlugins: [
        'Carousel',
        'Spinner'
      ],
      directivePlugins: [
        'Tooltip',
        'Popover'
      ]
    }],
  ],
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: ['style-loader','scss-loader','sass-loader',],
      }
    ],
  },
  axios: {
    baseURL: 'http://localhost:8000'
  },
  router: {
  },
  auth: {
    strategies: {
      local: {
        endpoints: {
          login: {
            url: '/api/login', method: 'post', propertyName: 'access_token'
          },
          user: {
            url: '/api/me', method: 'get', propertyName: 'data'
          },
          logout: {
            url: '/api/logout', method: 'post'
          }
        }
      }
    },
    tokenRequired: false,
    tokenType: false,
    redirect: {
      login: '/auth/login',
      home: '/t/dashboard'
    }
  },
  /*
  ** Build configuration
  */
  build: {
    loaders: {
      scss: { sourceMap: false }
    },
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}
