import { homedir } from 'os'

export const API_URL = process.env.API_URL as string

export const PUBLIC_URL = {
	root: (url = '') => `${url ? url : ''}`,

	home: () => PUBLIC_URL.root('/'),
	auth: () => PUBLIC_URL.root('/auth'),
	explorer: (query = '') => PUBLIC_URL.root(`/explorer${query}`),
	product: (id: string) => PUBLIC_URL.root(`/product/${id}`),
	category: (id: string) => PUBLIC_URL.root(`/category/${id}`)
}

export const DASHBOARD_URL = {
	root: (url = '') => `/dashboard${url ? url : ''}`,
	favorites: () => DASHBOARD_URL.root('/favorites')
}

export const STORE_URL = {
	root: (url = '') => `/store${url ? url : ''}`,

	home: (storeId = '') => STORE_URL.root(`/store/${storeId}`),
	products: (storeId = '') => STORE_URL.root(`/store/${storeId}/products`),
	productCreate: (storeId = '') =>
		STORE_URL.root(`/store/${storeId}/products/create`),
	productEdit: (storeId = '', id = '') =>
		STORE_URL.root(`/store/${storeId}/products/${id}`),
	categories: (storeId = '') =>
		STORE_URL.root(`/store/${storeId}/categories`),
	categoryCreate: (storeId = '') =>
		STORE_URL.root(`/store/${storeId}/categories/create`),
	categoryEdit: (storeId = '', id = '') =>
		STORE_URL.root(`/store/${storeId}/categories/${id}`),
	colors: (storeId = '') => STORE_URL.root(`/store/${storeId}/colors`),
	colorCreate: (storeId = '') =>
		STORE_URL.root(`/store/${storeId}/colors/create`),
	colorEdit: (storeId = '', id = '') =>
		STORE_URL.root(`/store/${storeId}/colors/${id}`),
	reviews: (storeId = '') => STORE_URL.root(`/store/${storeId}/reviews`),

	settings: (storeId = '') => STORE_URL.root(`/store/${storeId}/settings`)
}
