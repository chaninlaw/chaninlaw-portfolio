let baseUrl: string | undefined = ''

if (process.env.NODE_ENV === 'development') {
	baseUrl = process.env.NEXT_PUBLIC_BASE_URL
}

export const client = (endpoint: string, init?: RequestInit) =>
	fetch(`${baseUrl}${endpoint}`, init)
