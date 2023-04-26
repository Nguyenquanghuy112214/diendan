export const staggerContainer = (staggerChildren, delayChildren) => ({
  hidden: {},
  show: {
    transition: {
      staggerChildren,
      delayChildren,
    },
  },
});

export const planetVariants = (active) => ({
  hidden: {
    height: 0,
    opacity: 0,
    overflow: 'hidden',
  },
  show: {
    height: active ? 'auto' : 0,
    opacity: active ? 1 : 0,
    overflow: active ? 'visible' : 'hidden',
    transition: {
      type: 'spring',
      duration: 1.2,
      delay: 0.4,
      bounce: 0.47,
      damping: 20,
      stiffness: 200,
    },
  },
});

export const opacity = (delay, duration) => ({
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      type: 'spring',
      delay,
      duration,
      ease: 'easeOut',
    },
  },
});
export const tranformY = (delay, duration, top) => ({
  hidden: {
    opacity: 0,

    y: !top ? '50%' : '-50',
  },
  show: {
    opacity: 1,
    y: 0,

    transition: {
      type: 'spring',
      delay,
      duration,
      ease: 'easeOut',
    },
  },
});

export const textContainer = (time) => ({
  hidden: {
    opacity: 0,
  },
  show: (i = 1) => ({
    opacity: 1,
    transition: { staggerChildren: time || 0.05, delayChildren: i * 0.2 },
  }),
});
export const textVariant2 = (y) => ({
  hidden: {
    opacity: 0,
    y: y || 18,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'tween',
      ease: 'easeIn',
    },
  },
});

export const zoomIn = (delay, duration, scale) => ({
  hidden: {
    scale: scale || 0.8,
    opacity: 0,
  },
  show: {
    scale: 1,
    opacity: 1,
    transition: {
      type: 'spring',
      delay,
      duration,
      ease: 'easeIn',
    },
  },
});
