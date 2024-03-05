export interface Insight {
	created_at: string
	end: string
	human_readable_range: string
	is_already_updating: boolean
	is_including_today: boolean
	is_stuck: boolean
	is_up_to_date: boolean
	is_up_to_date_pending_future: boolean
	modified_at: string
	percent_calculated: number
	range: string
	start: string
	status: string
	timeout: number
	timezone: string
	user_id: string
	weekdays: Weekday[]
	writes_only: boolean
}

export interface Goals {
	average_status: string
	chart_data: ChartDaum[]
	created_at: string
	cumulative_status: string
	custom_title: any
	delta: string
	editors: any[]
	id: string
	ignore_days: any[]
	ignore_zero_days: boolean
	improve_by_percent: any
	is_current_user_owner: boolean
	is_enabled: boolean
	is_inverse: boolean
	is_snoozed: boolean
	is_tweeting: boolean
	languages: string[]
	modified_at: any
	owner: Owner
	projects: any[]
	range_text: string
	seconds: number
	shared_with: any[]
	snooze_until: any
	status: string
	status_percent_calculated: number
	subscribers: Subscriber[]
	title: string
	type: string
}

export interface Status {
	best_day: BestDay
	categories: Categories[]
	created_at: string
	daily_average: number
	daily_average_including_other_language: number
	days_including_holidays: number
	days_minus_holidays: number
	dependencies: Dependency[]
	editors: Editor[]
	end: string
	holidays: number
	human_readable_daily_average: string
	human_readable_daily_average_including_other_language: string
	human_readable_range: string
	human_readable_total: string
	human_readable_total_including_other_language: string
	id: string
	is_already_updating: boolean
	is_cached: boolean
	is_coding_activity_visible: boolean
	is_including_today: boolean
	is_other_usage_visible: boolean
	is_stuck: boolean
	is_up_to_date: boolean
	is_up_to_date_pending_future: boolean
	languages: Language[]
	machines: Machine[]
	modified_at: string
	operating_systems: OperatingSystem[]
	percent_calculated: number
	projects: Project[]
	range: string
	start: string
	status: string
	timeout: number
	timezone: string
	total_seconds: number
	total_seconds_including_other_language: number
	user_id: string
	username: string
	writes_only: boolean
}

export interface StatusBar {
	categories: Categories[]
	dependencies: any[]
	editors: Editor[]
	grand_total: GrandTotal
	languages: Language[]
	machines: Machine[]
	operating_systems: OperatingSystem[]
	projects: Project[]
	range: Range
}

interface Weekday {
	average: number
	categories: Category[]
	count: number
	human_readable_average: string
	human_readable_total: string
	name: string
	total: number
}

interface Category {
	average: number
	human_readable_average: string
	human_readable_total: string
	name: string
	total: number
}

interface ChartDaum {
	actual_seconds: number
	actual_seconds_text: string
	goal_seconds: number
	goal_seconds_text: string
	range: Range
	range_status: string
	range_status_reason: string
	range_status_reason_short: string
}

interface Range {
	date: string
	end: string
	start: string
	text: string
	timezone: string
}

interface Owner {
	display_name: string
	email: any
	full_name: string
	id: string
	photo: string
	username: string
}

interface Subscriber {
	display_name: string
	email: any
	email_frequency: string
	full_name: string
	user_id: string
	username: string
}

interface BestDay {
	date: string
	text: string
	total_seconds: number
}

interface Categories {
	decimal: string
	digital: string
	hours: number
	minutes: number
	name: string
	percent: number
	text: string
	total_seconds: number
}

interface Dependency {
	decimal: string
	digital: string
	hours: number
	minutes: number
	name: string
	percent: number
	text: string
	total_seconds: number
}

interface Editor {
	decimal: string
	digital: string
	hours: number
	minutes: number
	name: string
	percent: number
	text: string
	total_seconds: number
}

interface Language {
	decimal: string
	digital: string
	hours: number
	minutes: number
	name: string
	percent: number
	text: string
	total_seconds: number
}

interface Machine {
	decimal: string
	digital: string
	hours: number
	machine_name_id: string
	minutes: number
	name: string
	percent: number
	text: string
	total_seconds: number
}

interface OperatingSystem {
	decimal: string
	digital: string
	hours: number
	minutes: number
	name: string
	percent: number
	text: string
	total_seconds: number
}

interface Project {
	decimal: string
	digital: string
	hours: number
	minutes: number
	name: string
	percent: number
	text: string
	total_seconds: number
}
interface GrandTotal {
	decimal: string
	digital: string
	hours: number
	minutes: number
	text: string
	total_seconds: number
}
