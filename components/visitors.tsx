'use client'
import * as React from 'react'
import useSWR from 'swr'
import { VscEye, VscLoading } from 'react-icons/vsc'
import { Statistic } from './ui/Statistic'
import { fetcher } from '@/lib/utils'
import { paths } from '@/lib/paths'

function Visitors() {
  const { data, isLoading } = useSWR<{ visitCount: number }>(paths.api.visitors, fetcher)

  return (
    <>
      <VscEye />
      <small>{isLoading ? <VscLoading className='animate-spin' /> : <Statistic start={0} end={data?.visitCount ?? 0} />}</small>
    </>
  )
}

export default React.memo(Visitors)
