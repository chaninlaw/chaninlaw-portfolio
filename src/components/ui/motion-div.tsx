'use client'

import { motion, type MotionProps } from 'framer-motion'

// Define types for different HTML elements with motion props
type MotionDivProps = MotionProps & React.HTMLAttributes<HTMLDivElement>
type MotionSpanProps = MotionProps & React.HTMLAttributes<HTMLSpanElement>
type MotionH2Props = MotionProps & React.HTMLAttributes<HTMLHeadingElement>
type MotionPProps = MotionProps & React.HTMLAttributes<HTMLParagraphElement>
type MotionAProps = MotionProps & React.AnchorHTMLAttributes<HTMLAnchorElement>

// Export typed motion components
export const MotionDiv = motion.div as React.FC<MotionDivProps>
export const MotionSpan = motion.span as React.FC<MotionSpanProps>
export const MotionH2 = motion.h2 as React.FC<MotionH2Props>
export const MotionP = motion.p as React.FC<MotionPProps>
export const MotionA = motion.a as React.FC<MotionAProps>
