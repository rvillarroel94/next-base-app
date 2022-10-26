import React from 'react'
import Image from 'next/image'
import { useTranslation } from 'next-i18next'

export const Footer = () => {
  const { t } = useTranslation()
  return (
    <footer className='flex h-20 bg-white text-black items-center justify-center'>
        <a
        href="https://rdatos.com"
        target="_blank"
        rel="noopener noreferrer"
        className='flex items-center'
        >
        Powered by{' '}
        <span className='ml-2'>
            <Image src="/logo.svg" alt="App Logo" width={30} height={30} />
        </span>
        </a>
    </footer>
  )
}