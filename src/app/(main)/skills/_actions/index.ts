import { env } from '@/env'
import { Insight, Goals, Status, StatusBar } from '@/types/wakatime'

const apiKey = env.WAKATIME_API_KEY
const endpoint = `https://wakatime.com/api/v1/users/current/`
const request_init: RequestInit = {
  method: 'GET',
  headers: {
    Authorization: `Basic ${apiKey}`
  },
  next: { revalidate: 86400 }
}
type Params = {
  insight_type:
    | 'weekdays'
    | 'days'
    | 'best_day'
    | 'daily_average'
    | 'projects'
    | 'languages'
    | 'editors'
    | 'categories'
    | 'machines'
    | 'operating_systems'
  range: 'YYYY' | 'YYYY-MM' | 'last_7_days' | 'last_30_days' | 'last_6_months' | 'last_year' | 'all_time'
}
export const apiWakatime = {
  getInsight: async ({ insight_type, range }: Params) => {
    const response = await fetch(`${endpoint}insights/${insight_type}/${range}`, request_init)
    const { data }: { data: Insight } = await response.json()
    return data
  },
  getGoals: async () => {
    const response = await fetch(`${endpoint}goals/`, request_init)
    const { data }: { data: Goals[] } = await response.json()
    return data
  },
  getStats: async ({ range }: Omit<Params, 'insight_type'>) => {
    const response = await fetch(`${endpoint}stats/${range}`, request_init)
    const { data }: { data: Status } = await response.json()
    return data
  },
  getStatusBar: async () => {
    const response = await fetch(`${endpoint}status_bar/today`, request_init)
    const { data }: { data: StatusBar } = await response.json()
    return data
  }
}
