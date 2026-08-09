import { useEffect, useState } from 'react';

const query = q => typeof matchMedia === 'function' && matchMedia(q).matches;

export const prefersReduced = () => query('(prefers-reduced-motion: reduce)');
export const isTouch = () => query('(pointer: coarse)');

/** Live subscription to a media query, for things that must react to a change. */
export function useMedia(q) {
  const [on, setOn] = useState(() => query(q));
  useEffect(() => {
    const mq = matchMedia(q);
    const fn = e => setOn(e.matches);
    mq.addEventListener('change', fn);
    setOn(mq.matches);
    return () => mq.removeEventListener('change', fn);
  }, [q]);
  return on;
}
