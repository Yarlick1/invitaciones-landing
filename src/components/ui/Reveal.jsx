import { motion, useReducedMotion } from 'framer-motion'

const directions = {
  up: { y: 24, x: 0 },
  down: { y: -24, x: 0 },
  left: { y: 0, x: 24 },
  right: { y: 0, x: -24 },
}

export function Reveal({
  as = 'div',
  children,
  className,
  delay = 0,
  direction = 'up',
  once = true,
}) {
  const shouldReduceMotion = useReducedMotion()
  const MotionTag = motion[as] ?? motion.div
  const offset = directions[direction] ?? directions.up

  return (
    <MotionTag
      className={className}
      initial={shouldReduceMotion ? false : { opacity: 0, ...offset }}
      whileInView={shouldReduceMotion ? undefined : { opacity: 1, x: 0, y: 0 }}
      viewport={{ once, amount: 0.24 }}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </MotionTag>
  )
}
