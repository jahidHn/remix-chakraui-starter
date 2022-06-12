import { Box, BoxProps } from '@chakra-ui/layout'
import { HTMLMotionProps, motion } from 'framer-motion'

export type MotionBoxProps = BoxProps & HTMLMotionProps<'div'>
export const MotionBox = motion<BoxProps>(Box)
