import { Cursor } from '@/components/liveblocks/cursor'
import { useMyPresence, useOthers } from '@/../liveblocks.config'

export const LiveCursor = () => {
  const others = useOthers()
  const [myPresence, updateMyPresence] = useMyPresence()

  function handlePointerMove(e: React.PointerEvent<HTMLDivElement>) {
    const cursor = { x: Math.floor(e.clientX), y: Math.floor(e.clientY) }
    updateMyPresence({ cursor })
  }

  function handlePointerLeave() {
    updateMyPresence({ cursor: null })
  }

  return (
    <div className='min-w-screen min-h-screen' onPointerMove={handlePointerMove} onPointerLeave={handlePointerLeave}>
      {others
        .filter((other) => other.presence.cursor !== null)
        .map(({ connectionId, presence }) => (
          <Cursor key={connectionId} x={presence.cursor!.x} y={presence.cursor!.y} />
        ))}
    </div>
  )
}
