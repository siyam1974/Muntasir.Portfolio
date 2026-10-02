import { useRef } from 'react'
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion'

interface AnimatedTextProps {
  text: string
  className?: string
  style?: React.CSSProperties
}

interface CharProps {
  char: string
  index: number
  total: number
  progress: MotionValue<number>
}

function Char({ char, index, total, progress }: CharProps) {
  const start = index / total
  const end = start + 1 / total
  const opacity = useTransform(progress, [start, end], [0.2, 1])

  return (
    <span style={{ position: 'relative', display: 'inline-block' }}>
      {/* invisible placeholder keeps layout width stable */}
      <span style={{ visibility: 'hidden' }}>{char === ' ' ? '\u00A0' : char}</span>
      <motion.span style={{ position: 'absolute', left: 0, top: 0, opacity }}>
        {char === ' ' ? '\u00A0' : char}
      </motion.span>
    </span>
  )
}

/**
 * Character-by-character scroll-reveal text. As the paragraph moves
 * through the viewport, each character's opacity ramps from 0.2 to 1
 * based on scroll progress and its position in the string.
 */
export default function AnimatedText({ text, className, style }: AnimatedTextProps) {
  const ref = useRef<HTMLParagraphElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.8', 'end 0.2'],
  })

  const chars = text.split('')

  return (
    <p ref={ref} className={className} style={style}>
      {chars.map((char, i) => (
        <Char key={i} char={char} index={i} total={chars.length} progress={scrollYProgress} />
      ))}
    </p>
  )
}
