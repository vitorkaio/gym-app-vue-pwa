module.exports = {
  "transpileDependencies": [
    "vuetify"
  ],
  pwa: {
    name: 'Gym App - Minha Ficha',
    themeColor: '#424242',
    msTileColor: '#000000',
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: '#424242',
    
    // configure the manifest options
    manifestOptions: {
      display: 'standalone',
      orientation: "portrait-primary",
      background_color: '#424242'
      // ...other Manifest options...
    },

    // configure the workbox plugin
    workboxPluginMode: 'InjectManifest',
    workboxOptions: {
      // swSrc is required in InjectManifest mode.
      swSrc: 'dev/sw.js',
      // ...other Workbox options...
    }
  }
}