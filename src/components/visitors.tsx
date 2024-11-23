'use client'
import { paths } from '@/lib/paths'
import { fetcher } from '@/lib/utils'
import * as React from 'react'
import { VscEye, VscLoading } from 'react-icons/vsc'
import useSWR from 'swr'

import { Statistic } from './ui/Statistic'

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
