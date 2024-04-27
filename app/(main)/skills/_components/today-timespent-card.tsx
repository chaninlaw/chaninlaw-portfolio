import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card'
import { CalendarIcon, InfoCircledIcon } from '@radix-ui/react-icons'
import { Statistic } from '@/components/ui/Statistic'
import { apiWakatime } from '../_actions'
import { dateFormatter } from '@/lib/utils'

export async function TodayTimeSpentCard() {
  const data = await apiWakatime.getStatusBar()

  return (
    <Card className='border-stone-800 flex-1'>
      <CardHeader className='flex flex-row justify-between items-center pb-0 space-y-0'>
        <CardTitle className='uppercase text-sm'>Today time spend</CardTitle>
        <CardDescription>
          <HoverCard>
            <HoverCardTrigger asChild>
              <InfoCircledIcon className='cursor-pointer' />
            </HoverCardTrigger>
            <HoverCardContent className='w-80 border-stone-800'>
              <div className='flex justify-between space-x-4'>
                <Avatar>
                  <AvatarImage src={'/profile.jpg'} />
                  <AvatarFallback>CL</AvatarFallback>
                </Avatar>
                <div className='flex-1 space-y-1'>
                  <h4 className='text-sm font-semibold'>@chaninlaw</h4>
                  <p className='text-sm'>
                    <ul>
                      {data.editors.map((editor) => (
                        <li key={editor.name}>
                          {editor.name}: {editor.text}
                        </li>
                      ))}
                    </ul>
                  </p>
                  <div className='flex justify-end items-center pt-2'>
                    <CalendarIcon className='mr-2 h-4 w-4 opacity-70' />
                    <span className='text-xs text-muted-foreground'>{dateFormatter(data.range.end)}</span>
                  </div>
                </div>
              </div>
            </HoverCardContent>
          </HoverCard>
        </CardDescription>
      </CardHeader>
      <CardContent className='pb-0 pt-2 flex items-end text-2xl space-x-2 font-bold'>
        <Statistic start={0} end={data.grand_total.total_seconds / 3600} />
        <span className='text-lg'>hrs</span> <Statistic start={0} end={(data.grand_total.total_seconds / 60) % 60} />
        <span className='text-lg'>mins</span>
      </CardContent>
      <CardFooter className='text-xs text-muted-foreground'>at {dateFormatter(data.range.date)}</CardFooter>
    </Card>
  )
}
