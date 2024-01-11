import PropTypes from 'prop-types';
import { useInView, useMotionValue, useSpring } from 'framer-motion';
import { useRef, useEffect } from 'react';

const AnimationNumbers = ({ value }) => {
  const ref = useRef(null);

  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 0 });
  const isInView = useInView(ref, { once: true });
  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    springValue.on('change', (latest) => {
      if (ref.current && latest.toFixed(0) <= value) {
        ref.current.textContent = latest.toFixed();
      }
    });
  }, [springValue, value]);
  return <span ref={ref}></span>;
};

AnimationNumbers.propTypes = {
  value: PropTypes.number,
};
export default AnimationNumbers;
