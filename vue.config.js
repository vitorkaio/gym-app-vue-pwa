module.exports = {
  "transpileDependencies": [
    "vuetify"
  ],
  pwa: {
    name: 'My App',
    themeColor: '#424242',
    msTileColor: '#000000',
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: '#424242',
    
    // configure the manifest options
    manifestOptions: {
      display: 'landscape',
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