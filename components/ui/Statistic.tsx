'use client'
import CountUp, { type CountUpProps } from 'react-countup'

interface Statistic extends CountUpProps {}

export const Statistic: React.FC<Statistic> = (props) => {
	return <CountUp {...props} />
}
