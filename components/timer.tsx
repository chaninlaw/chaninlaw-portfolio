'use client'
import CountUp from 'react-countup'
import { OnEndArgs } from 'react-countup/build/types'

export function Timer() {
	const onEnd = (cb: OnEndArgs) => {
		cb.start()
	}

	return (
		<small>
			<CountUp
				start={0}
				end={99}
				duration={60 * 60 * 500}
				onEnd={onEnd}
				delay={0}
			/>{' '}
			hrs{' '}
			<CountUp start={0} end={60} duration={60 * 500} onEnd={onEnd} delay={0} />{' '}
			min{' '}
		</small>
	)
}
