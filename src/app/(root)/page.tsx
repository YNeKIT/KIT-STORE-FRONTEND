import type { Metadata } from 'next'

import { Home } from './Home'

export const metadata: Metadata = {
	title: 'Some title for seo optimization'
}

export default function HomePage() {
	return <Home />
}