export interface WakatimeResponse {
	data: WakatimeData
}

interface WakatimeData {
	id: string
	user_id: string
	range: string
	start: string
	end: string
	timeout: number
	writes_only: boolean
	timezone: string
	holidays: number
	status: string
	created_at: string
	modified_at: string
	days_minus_holidays: number
	categories: Category[]
	daily_average: number
	editors: Editor[]
	human_readable_daily_average: string
	total_seconds: number
	languages: Language[]
	operating_systems: OperatingSystem[]
	total_seconds_including_other_language: number
	human_readable_total_including_other_language: string
	is_up_to_date_pending_future: boolean
	human_readable_total: string
	is_up_to_date: boolean
	is_stuck: boolean
	is_already_updating: boolean
	human_readable_daily_average_including_other_language: string
	projects: Project[]
	best_day: BestDay
	dependencies: Dependency[]
	days_including_holidays: number
	percent_calculated: number
	machines: Machine[]
	daily_average_including_other_language: number
	is_cached: boolean
	username: string
	is_including_today: boolean
	human_readable_range: string
	is_coding_activity_visible: boolean
	is_other_usage_visible: boolean
}

interface Category {
	name: string
	total_seconds: number
	percent: number
	digital: string
	decimal: string
	text: string
	hours: number
	minutes: number
}

interface Editor {
	total_seconds: number
	name: string
	percent: number
	digital: string
	decimal: string
	text: string
	hours: number
	minutes: number
}

interface Language {
	name: string
	total_seconds: number
	percent: number
	digital: string
	decimal: string
	text: string
	hours: number
	minutes: number
}

interface OperatingSystem {
	total_seconds: number
	name: string
	percent: number
	digital: string
	decimal: string
	text: string
	hours: number
	minutes: number
}

interface Project {
	total_seconds: number
	name: string
	percent: number
	digital: string
	decimal: string
	text: string
	hours: number
	minutes: number
}

interface BestDay {
	date: string
	total_seconds: number
	text: string
}

interface Dependency {
	total_seconds: number
	name: string
	percent: number
	digital: string
	decimal: string
	text: string
	hours: number
	minutes: number
}

interface Machine {
	total_seconds: number
	name: string
	machine_name_id: string
	percent: number
	digital: string
	decimal: string
	text: string
	hours: number
	minutes: number
}
