import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/20/solid'
import { useState } from 'react'

import { faqData } from './faqData'

export const FAQSection = () => {
  const [openFAQs, setOpenFAQs] = useState<Record<number, boolean>>({})

  const toggleFAQ = (index: number) => {
    setOpenFAQs((prevOpenFAQs) => ({
      ...prevOpenFAQs,
      [index]: !prevOpenFAQs[index],
    }))
  }

  return (
    <section
      id="faq"
      className="px-4 py-8 md:px-8 md:py-8 flex flex-col gap-4 md:gap-8 w-full text-white"
    >
      {faqData.map((faq, index) => (
        <div key={index} className="border-2 rounded-lg p-4 w-full">
          <div
            className="flex justify-between items-center cursor-pointer"
            onClick={() => toggleFAQ(index)}
          >
            <h3 className="font-bold text-lg md:text-xl">{faq.question}</h3>
            {openFAQs[index] ? (
              <ChevronUpIcon className="w-6 h-6" />
            ) : (
              <ChevronDownIcon className="w-6 h-6" />
            )}
          </div>
          {openFAQs[index] ? (
            <div className="mt-2 md:p-2 text-sm md:text-base">{faq.answer}</div>
          ) : null}
        </div>
      ))}
    </section>
  )
}
