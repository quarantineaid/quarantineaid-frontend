module.exports = {
    devServer: {
        disableHostCheck: true,
    },
    lintOnSave: false,
    pwa: {
        name: 'QuarantineAid',
        themeColor: '#685bb6',
        msTileColor: '#685bb6',
        appleMobileWebAppCapable: 'yes',
        appleMobileWebAppStatusBarStyle: 'black',
        // configure the workbox plugin
        workboxPluginMode: 'InjectManifest',
        workboxOptions: {
            // swSrc is required in InjectManifest mode.
            swSrc: 'src/service-worker.js',
            // ...other Workbox options...
        },
    },
};