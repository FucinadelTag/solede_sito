module.exports = {
  head: {
        title: 'Solede Vendita Prodotti Elettromedicali',
        htmlAttrs: {
            lang: 'it',
        },
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: 'Solede prodotti elettromedicali' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
            { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Open+Sans:400,400i,700' },
        ]
    },
    modules: [
        [
            'nuxt-sass-resources-loader',
            './assets/scss/variables.scss',
        ]
    ],
    css: [
        {src: '~/assets/scss/main.scss', lang: 'scss'}
    ],
    plugins: [
        { src: '~plugins/iconFont.js', ssr: false },
    ],
    loading: { color: '#3B8070' },
    build: {
        postcss: {
            plugins: {
                'postcss-custom-properties': false,
            }
        }
    }
}
