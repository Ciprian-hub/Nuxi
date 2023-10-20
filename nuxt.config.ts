// https://nuxt.com/docs/api/configuration/nuxt-config
export default ({
    ssr: false,
  // devtools: {
  //        enabled: true
  //     },
  modules: ['@nuxtjs/tailwindcss'],
    app: {
      head: {
          title: "WebFlow",
          meta: [
              {
                  name: 'description',
                  content: "WebFlow with Nuxt 3"
              }
          ],
          link: [
              {rel: 'stylesheet', href: "https://fonts.googleapis.com/icon?family=Material+Icons" }
          ]
      }
    }
})
