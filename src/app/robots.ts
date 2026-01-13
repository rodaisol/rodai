import { MetadataRoute } from 'next'

import { ENVIRONMENT } from '../env'

export default function robots(): MetadataRoute.Robots {
  const isProduction = ENVIRONMENT === 'production'

  if (!isProduction) {
    return {
      rules: {
        userAgent: '*',
        disallow: ['/'],
      },
    }
  }

  return {
    rules: {
      userAgent: '*',
      allow: ['/'],
    },
  }
}
