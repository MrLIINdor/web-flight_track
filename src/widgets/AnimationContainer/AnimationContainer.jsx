import React from 'react';
import { motion } from 'motion/react';

export default function AnimationContainer({ index, children, direction }) {
  const bounce = () => {
    switch (direction) {
      case 'left':
        return {
          hidden: {
            opacity: 0,
            x: -50,
            y: 0,
          },
          visible: (index) => ({
            opacity: 1,
            x: 0,
            y: 0,
            transition: {
              delay: index * 0.1,
              type: 'spring',
              stiffness: 100,
              duration: 0.6,
            },
          }),
        };
      case 'right':
        return {
          hidden: {
            opacity: 0,
            x: 50,
            y: 0,
          },
          visible: (index) => ({
            opacity: 1,
            x: 0,
            y: 0,
            transition: {
              delay: index * 0.1,
              type: 'spring',
              stiffness: 100,
              duration: 0.6,
            },
          }),
        };
      case 'top':
        return {
          hidden: {
            opacity: 0,
            x: 0,
            y: -50,
          },
          visible: (index) => ({
            opacity: 1,
            x: 0,
            y: 0,
            transition: {
              delay: index * 0.1,
              type: 'spring',
              stiffness: 100,
              duration: 0.6,
            },
          }),
        };
      case 'bottom':
        return {
          hidden: {
            opacity: 0,
            x: 0,
            y: 50,
          },
          visible: (index) => ({
            opacity: 1,
            x: 0,
            y: 0,
            transition: {
              delay: index * 0.1,
              type: 'spring',
              stiffness: 100,
              duration: 0.6,
            },
          }),
        };
      default:
        return {
          hidden: {
            opacity: 0,
            x: 0,
            y: 50,
          },
          visible: (index) => ({
            opacity: 1,
            x: 0,
            y: 0,
            transition: {
              delay: index * 0.1,
              type: 'spring',
              stiffness: 100,
              duration: 0.6,
            },
          }),
        };
    }
  };

  return (
    <motion.div custom={index ?? 0} initial="hidden" animate="visible" variants={bounce()}>
      {children}
    </motion.div>
  );
}
