'use client'

import { Button, Checkbox } from '@heroui/react'
import { sendGTMEvent } from '@next/third-parties/google'
import { motion } from 'motion/react'
import { useEffect, useState } from 'react'
import { useLocalStorage } from 'react-use'

const cookieConsentLabels = {
  title: 'Cookie settings',
  description:
    'We use cookies to enhance your experience and analyze user interactions, helping us continuously improve our website.',
  acceptAll: 'Accept All',
  acceptSelection: 'Accept Selection',
  rejectAll: 'Reject All',
  necessary: 'Necessary',
  analytics: 'Analytics',
  preferences: 'Preferences',
}

export const CookieConsentBanner = () => {
  const [isDone, setIsDone] = useLocalStorage('cookie_consent_complete', false)
  const [allowNecessary, setAllowNecessary] = useState(true)
  const [allowAnalytics, setAllowAnalytics] = useState(true)
  const [allowPreferences, setAllowPreferences] = useState(true)

  const closeModal = () => {
    setIsDone(true)
  }

  const setDefaultConsent = () => {
    sendGTMEvent({
      event: 'consent',
      action: 'default',
      ad_storage: 'denied',
      ad_user_data: 'denied',
      ad_personalization: 'denied',
      analytics_storage: 'denied',
    })
  }

  const acceptAll = () => {
    sendGTMEvent({
      event: 'consent',
      action: 'update',
      ad_storage: 'granted',
      ad_user_data: 'granted',
      ad_personalization: 'granted',
      analytics_storage: 'granted',
    })
    closeModal()
  }

  const acceptSelection = () => {
    sendGTMEvent({
      event: 'consent',
      action: 'update',
      ad_storage: allowNecessary ? 'granted' : 'denied',
      ad_user_data: allowNecessary ? 'granted' : 'denied',
      ad_personalization: allowNecessary ? 'granted' : 'denied',
      analytics_storage: allowAnalytics ? 'granted' : 'denied',
    })
    closeModal()
  }

  const rejectAll = () => {
    closeModal()
  }

  useEffect(() => {
    if (!isDone) {
      setDefaultConsent()
    }
  }, [isDone])

  if (isDone) {
    return null
  }

  return (
    <motion.div
      initial={{ y: '100%' }}
      animate={{ y: 0 }}
      transition={{ delay: 0.5 }} // Delay the animation
      className="w-full fixed bottom-0 z-20 bg-content3"
    >
      <div className="p-4 flex flex-col gap-2 items-center">
        <h1 className="text-xl">{cookieConsentLabels.title}</h1>
        <p>{cookieConsentLabels.description}</p>
        <div className="flex gap-2">
          <Checkbox
            isDisabled
            isSelected={allowNecessary}
            onValueChange={setAllowNecessary}
          >
            {cookieConsentLabels.necessary}
          </Checkbox>
          <Checkbox
            isSelected={allowAnalytics}
            onValueChange={setAllowAnalytics}
          >
            {cookieConsentLabels.analytics}
          </Checkbox>
          <Checkbox
            isSelected={allowPreferences}
            onValueChange={setAllowPreferences}
          >
            {cookieConsentLabels.preferences}
          </Checkbox>
        </div>
        <div className="mt-2 flex gap-2 items-center">
          <Button variant="shadow" color="primary" onClick={acceptAll}>
            {cookieConsentLabels.acceptAll}
          </Button>
          <Button variant="solid" color="default" onClick={acceptSelection}>
            {cookieConsentLabels.acceptSelection}
          </Button>
          <Button variant="solid" color="default" onClick={rejectAll}>
            {cookieConsentLabels.rejectAll}
          </Button>
        </div>
      </div>
    </motion.div>
  )
}
