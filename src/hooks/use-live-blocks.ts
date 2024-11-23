import { useOthers, useSelf } from '@/../liveblocks.config'

export const useLiveOthers = () => {
  const others = useOthers()
  return others
}

export const useLiveSelf = () => {
  const myself = useSelf()
  return myself
}
