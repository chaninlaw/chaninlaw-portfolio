import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs))
}

export const dateFormatter = new Intl.DateTimeFormat('en-us', {
	// weekday: "long",
	year: 'numeric',
	month: 'short',
	day: 'numeric',
})
