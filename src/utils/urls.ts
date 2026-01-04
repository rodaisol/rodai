export interface ReferralUrlOptions {
  utm_source?: string
  utm_medium?: string
  utm_campaign?: string
  utm_content?: string
  utm_term?: string
  ref?: string
  source?: string
  [key: string]: string | undefined
}

export function buildReferralUrl(
  baseUrl: string,
  options: ReferralUrlOptions = {}
): string {
  try {
    const url = new URL(baseUrl)

    Object.entries(options).forEach(([key, value]) => {
      if (value !== undefined && value !== null && value !== '') {
        url.searchParams.set(key, value)
      }
    })

    return url.toString()
  } catch {
    // If URL parsing fails, fall back to string concatenation
    const urlObj = new URL(
      baseUrl.startsWith('http') ? baseUrl : `https://${baseUrl}`
    )

    Object.entries(options).forEach(([key, value]) => {
      if (value !== undefined && value !== null && value !== '') {
        urlObj.searchParams.set(key, value)
      }
    })

    return urlObj.toString()
  }
}
