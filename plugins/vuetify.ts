import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import colors from 'vuetify/util/colors'


export default defineNuxtPlugin((nuxtApp) => {
  const vuetify = createVuetify({
    theme: {
      themes: {
        light: {
          dark: false,
          colors: {
            primary: colors.red.darken1, // #E53935
            secondary: colors.red.lighten4, // #FFCDD2
          }
        },
      },
    },
    defaults: {
      // VBtn: {
      // 	style: 'text-transform: none; letter-spacing: normal',
      // },
      // global: {
      //   ripple: false,
      // },
    },
    ssr: true,
  })

  nuxtApp.vueApp.use(vuetify)
})
