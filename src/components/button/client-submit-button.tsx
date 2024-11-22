import { Button } from '@/components/ui/button'
import { VscLoading } from 'react-icons/vsc'
import { MotionDiv } from '@/components/ui/motion-div'

export const ClientSubmitButton = ({ loading, children }: { loading: boolean; children: React.ReactNode }) => {
  return (
    <Button type='submit' disabled={loading}>
      {loading && (
        <MotionDiv initial={{ x: 10 }} animate={{ x: 0 }}>
          <VscLoading className='animate-spin mr-1' />
        </MotionDiv>
      )}
      {children}
    </Button>
  )
}
