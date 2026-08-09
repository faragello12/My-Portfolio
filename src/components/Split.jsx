import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useLang } from '../i18n/lang';

const EASE = [0.22, 1, 0.36, 1];
const STEP = 0.028;

/**
 * Latin text reveals character by character behind a mask.
 * Arabic is deliberately never split — separating Arabic glyphs breaks the
 * letter joining that makes the script readable.
 *
 * Each character carries its own animate + delay rather than inheriting a
 * variant from the parent: parent-to-child variant propagation is easy to
 * break (gesture props like whileInView don't propagate at all), and the
 * stagger here is a plain function of index anyway.
 */
export default function Split({ children, className = '', delay = 0, animate }) {
  const { ar } = useLang();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });
  const text = String(children ?? '');

  /* `animate` lets the hero drive its own timing off the loader instead of scroll */
  const show = animate !== undefined ? animate : inView;

  /* A word dropped in this language renders nothing at all, rather than an
     empty inline-block that would still take up the mask's line box. */
  if (!text) return null;

  if (ar) {
    return (
      <span className={`w ${className}`} ref={ref}>
        <span className="ch">
          <motion.i
            initial={{ y: '110%', opacity: 0 }}
            animate={show ? { y: '0%', opacity: 1 } : { y: '110%', opacity: 0 }}
            transition={{ duration: 0.9, delay, ease: EASE }}
          >{text}</motion.i>
        </span>
      </span>
    );
  }

  return (
    <span className={`w ${className}`} ref={ref} aria-label={text}>
      {[...text].map((c, i) => (
        <span className="ch" key={i} aria-hidden="true">
          <motion.i
            initial={{ y: '110%' }}
            animate={show ? { y: '0%' } : { y: '110%' }}
            transition={{ duration: 0.9, delay: delay + i * STEP, ease: EASE }}
          >{c === ' ' ? ' ' : c}</motion.i>
        </span>
      ))}
    </span>
  );
}
