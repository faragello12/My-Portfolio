import { useEffect, useState } from 'react';

/**
 * "Has this element reached the fold yet?" — latches true once and stays true.
 *
 * An IntersectionObserver alone is not enough: a scrollbar drag, an End key or
 * an anchor jump can move the page further than a frame's worth of sampling, so
 * an element is never observed intersecting and — because reveals fire once —
 * stays invisible for good. The observer handles the normal case; the geometric
 * check catches everything already at or above the fold, including sections the
 * page skipped straight past.
 */
export default function useSeen(ref) {
  const [seen, setSeen] = useState(false);

  useEffect(() => {
    if (seen) return;
    const el = ref.current;
    if (!el) return;

    const check = () => {
      if (el.getBoundingClientRect().top < innerHeight * 0.92) setSeen(true);
    };

    const io = new IntersectionObserver(check, { threshold: 0.12 });
    io.observe(el);
    addEventListener('scroll', check, { passive: true });
    addEventListener('resize', check);
    check();

    return () => {
      io.disconnect();
      removeEventListener('scroll', check);
      removeEventListener('resize', check);
    };
  }, [ref, seen]);

  return seen;
}
