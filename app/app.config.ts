
export default defineAppConfig({
  github: false,
  docus: {
    locale: 'en', // Set your single-language locale
  },
  header: {
    title: 'Khemra',
    logo:{
      
    }
  },

  seo: {
    // titleTemplate: 'Khemra',
    title: 'Khemra documentation',
    description: 'A complete and official documentation for Khemra programming language.',
    
  },

  toc: {
    bottom: {
      title: 'Community',
      links: [{
        icon: 'i-lucide-circle-alert',
        label: 'Report an issue',
        to: 'https://github.com/craxtic/khemra-site/issues/new',
        target: '_blank'
      }]
    }
  }
  // ... other configurations
})
