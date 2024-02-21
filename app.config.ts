export default defineAppConfig({
  ui: {
    primary: 'green',
    gray: 'slate',
    footer: {
      bottom: {
        left: 'text-sm text-gray-500 dark:text-gray-400',
        wrapper: 'border-t border-gray-200 dark:border-gray-800'
      }
    }
  },
  seo: {
    siteName: 'Nuxt UI Pro - Docs template',
  },
  header: {
    logo: {
      alt: 'NT Stadium',
      light: 'logo-light.svg',
      dark: ''
    },
    search: false,
    colorMode: true,
  },
  footer: {
    credits: 'Copyright © 2024',
    colorMode: true,
    links: [{
      icon: 'i-heroicons-envelope-20-solid ',
      to: 'mailto:info@ntstadium.com.au',
      target: '_blank',
      'aria-label': 'Contact Us'
    }, {
      icon: 'i-simple-icons-linkedin',
      to: 'https://github.com/nuxt/ui',
      target: '_blank',
      'aria-label': 'Nuxt UI on GitHub'
    }]
  },
  toc: {
    title: 'Table of Contents',
    bottom: {
      title: 'Community',
      links: [{
        icon: 'i-heroicons-book-open',
        label: 'Subscribe',
        to: '/members/subscriptions',
        // target: '_blank',
      }, {
        icon: 'i-heroicons-trophy',
        label: 'Sponsor project',
        to: '/members/corporates',
        // target: '_blank',
      }, {
        icon: 'i-heroicons-ticket',
        label: 'Join next event',
        to: '/members/roundtables',
        // target: '_blank',
      }]
    }
  }
})
