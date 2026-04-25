import { getRequestConfig, GetRequestConfigParams, RequestConfig } from 'next-intl/server'
import { routing } from './routing'

export default getRequestConfig(async ({ requestLocale }: GetRequestConfigParams): Promise<RequestConfig> => {
  let locale = (await requestLocale ) as "en" | "ru"

  if (!locale || locale.includes('.') || !routing.locales.includes(locale)) {
    locale = routing.defaultLocale
  }

  return {
    locale,
    messages: (await import(`../../../../messages/${locale}.json`)).default
  }
})
