import type { Metadata } from 'next'
import localFont from 'next/font/local'

import '../styles/globals.css'

const epilogueBold = localFont({
  src: './fonts/Epilogue-Bold.ttf',
  variable: '--font-epilogue-bold'
})

const epilogueMedium = localFont({
  src: './fonts/Epilogue-Medium.ttf',
  variable: '--font-epilogue-medium'
})

const epilogueRegular = localFont({
  src: './fonts/Epilogue-Regular.ttf',
  variable: '--font-epilogue-regular'
})

const epilogueSemiBold = localFont({
  src: './fonts/Epilogue-SemiBold.ttf',
  variable: '--font-epilogue-semibold'
})

export const metadata: Metadata = {
  title: {
    template: '%s | Foso',
    default: 'Foso'
  },
  description: 'Foso'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body
        className={`${epilogueBold.variable} ${epilogueMedium.variable} ${epilogueRegular.variable} ${epilogueSemiBold.variable}`}
      >
        {children}
      </body>
    </html>
  )
}
