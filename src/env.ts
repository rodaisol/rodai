/**
 * Environment variables and configuration
 * Only environment-specific values that should be configurable via env vars
 */

export const RODAI_APP_URL =
  process.env.NEXT_PUBLIC_APP_URL || 'https://www.rodai.meme'

export const ENVIRONMENT = process.env.NEXT_PUBLIC_ENVIRONMENT
