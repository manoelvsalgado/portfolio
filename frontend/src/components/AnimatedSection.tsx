import { Box } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

const MotionBox = motion(Box);

interface AnimatedSectionProps {
  children: ReactNode;
  delay?: number;
}

export const AnimatedSection = ({
  children,
  delay = 0,
}: AnimatedSectionProps) => {
  return (
    <MotionBox
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6, delay } as any}
    >
      {children}
    </MotionBox>
  );
};
