import { apiWakatime } from '@/actions/wakatime'
import { VerticalBar } from '../charts/vertical-bar'

export async function WeedayBar() {
  const data = await apiWakatime.getInsight({
    insight_type: 'weekdays',
    range: 'last_year'
  })

  return (
    <VerticalBar
      data={data.weekdays.map((item) => ({
        ...item,
        total: item.total / 3600,
        average: item.average / 3600,
        name: item.name.substring(0, 3)
      }))}
    />
  )
}
