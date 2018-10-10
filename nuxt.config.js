
/* nuxt.config.js */
// only add `router.base = '/<repository-name>/'` if `DEPLOY_ENV` is `GH_PAGES`
const routerBase = process.env.DEPLOY_ENV === 'GH_PAGES' ? {
  router: {
    base: '/sylvesterNkeze/'
  }
} : {};


module.exports = {
  /*
  ** Transition of each page
  */
  transition:{
    name: "slideout",
    mode: "out-in"
  },
  /*
  ** Headers of the page
  */
  head: {
    title: 'Nkeze Sylvester',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: "Nkeze Sylvester's Portfolio Website" }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: 'favicon.ico' }
    ]
  },
   modules: ['nuxt-sass-resources-loader'],
  sassResources: ['@/assets/scss/main.scss'],
  ...routerBase,
  /*
  ** Customize the progress bar color
  */
  loading: { color: 'transparent' },
  generate: {
    /*
    ** Build output, default is ./dist
    ** This demo site is deployed to Github Pages with a custom domain name
    ** Github Pages will use ./docs for site root
    */
    dir: 'docs'
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
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

