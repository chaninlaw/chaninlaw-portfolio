'use client'
import { useEffect, useState } from 'react'
import { VscEye, VscLoading } from 'react-icons/vsc'
import { Statistic } from './ui/Statistic'
import { client } from '@/lib/client'

export function Visitors() {
  const [visitors, setVisitors] = useState(0)
  const [loading, setLoading] = useState(false)

  const fetchVisitors = async (controller: AbortController) => {
    setLoading(true)
    client(`/api/visitors`, { signal: controller.signal })
      .then(async (res) => {
        const data = await res.json()
        setVisitors(data.visitCount)
      })
      .catch((err) => console.log(err))
      .finally(() => setLoading(false))
  }

  useEffect(() => {
    const controller = new AbortController()
    const fetcher = setTimeout(() => fetchVisitors(controller))

    return () => {
      clearTimeout(fetcher)
      controller.abort()
    }
  }, [])

  return (
    <>
      <VscEye />
      <small>{loading ? <VscLoading className='animate-spin' /> : <Statistic start={0} end={visitors} />}</small>
    </>
  )
}
