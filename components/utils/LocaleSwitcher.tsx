import React, {FC} from 'react'
import Link from 'next/link'
import { useRouter, NextRouter } from 'next/router'

export const LocaleSwitcher:FC = () => {
  const router:NextRouter = useRouter()
  const { locales, locale: activeLocale } = router
  const otherLocales = locales && locales.filter((locale) => locale !== activeLocale)
  const className = "relative flex flex-row p-1 mb-2 mt-2 px-2 mr-5 text-sm rounded-lg bg-transparent hover:shadow-insetwhite cursor-pointer transition-all duration-500 ease-in-out"

  return (
    otherLocales ? <div>
      <ul>
        {otherLocales.map((locale) => {
          const { pathname, query, asPath } = router
          return (
            <Link key={locale} href={{ pathname, query }} as={asPath} locale={locale}>
                <span className={`${className}`} >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                </svg>
                <span className="text-lg uppercase">{locale}</span>
              </span>
              </Link>
          )
        })}
      </ul>
    </div>: <div>Hola</div>
  )
}

export default LocaleSwitcher