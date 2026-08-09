import { forwardRef, useCallback, useRef } from 'react';
import { motion } from 'framer-motion';
import useSeen from '../hooks/useSeen';

const EASE = [0.22, 1, 0.36, 1];

/**
 * The vanilla build used an IntersectionObserver that added .is-in once;
 * useSeen is the same contract, hardened against fast scrolls.
 *
 * `is-in` is still applied, because a lot of the ported CSS hangs descendant
 * micro-animations off it (`.pcard.is-in .mk__prod`, `.dcard.is-in .dcard__img`).
 * Refs are forwarded so useMagnet can attach to the same node.
 */
const Reveal = forwardRef(function Reveal(
  { as = 'div', children, delay = 0, y = 26, className = '', ...rest }, ref,
) {
  const M = motion[as] || motion.div;
  const node = useRef(null);
  const seen = useSeen(node);

  const attach = useCallback(el => {
    node.current = el;
    if (typeof ref === 'function') ref(el);
    else if (ref) ref.current = el;
  }, [ref]);

  return (
    <M
      ref={attach}
      className={`${className}${seen ? ' is-in' : ''}`}
      initial={{ opacity: 0, y }}
      animate={seen ? { opacity: 1, y: 0 } : { opacity: 0, y }}
      transition={{ duration: 0.9, delay, ease: EASE }}
      {...rest}
    >
      {children}
    </M>
  );
});

export default Reveal;
