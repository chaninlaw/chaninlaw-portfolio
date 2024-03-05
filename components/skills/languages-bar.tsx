import { apiWakatime } from '@/lib/actions/wakatime'
import { HorizontalBar } from '../charts/horizontal-bar'

export async function LanguagesBar() {
	const data = await apiWakatime.getInsight({
		insight_type: 'languages',
		range: 'last_year',
	})

	const languages = data.languages.map((item) => ({
		...item,
		total_seconds: item.total_seconds / 3600,
	}))

	return (
		<HorizontalBar
			data={languages
				.sort((a, b) => b.total_seconds - a.total_seconds)
				.splice(0, 10)}
		/>
	)
}
