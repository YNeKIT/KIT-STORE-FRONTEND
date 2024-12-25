import { GeistSans } from 'geist/font/sans'
import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import React from 'react'

import { SITE_DESCRIPTION, SITE_NAME } from '@/constants/seo.constants'

import './globals.scss'
import { Providers } from './providers'

const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin']
})

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin']
})

export const metadata: Metadata = {
	title: {
		absolute: SITE_NAME,
		template: `%s | ${SITE_NAME}`
	},
	description: SITE_DESCRIPTION
}

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en'>
			<body className={GeistSans.variable}>
				<Providers>{children}</Providers>
			</body>
		</html>
	)
}
