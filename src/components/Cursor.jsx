import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { isTouch } from '../hooks/useMotionPrefs';

/**
 * Ring lags the dot via GSAP quickTo — cheaper and smoother than writing
 * transforms by hand every frame, and it interpolates through direction changes.
 * xPercent/yPercent do the centring, because GSAP owns the whole transform.
 */
export default function Cursor() {
  const wrap = useRef(null);
  const ring = useRef(null);
  const dot = useRef(null);
  const label = useRef(null);

  useEffect(() => {
    if (isTouch()) return;
    const el = wrap.current;

    gsap.set([ring.current, dot.current], { xPercent: -50, yPercent: -50 });

    const ringX = gsap.quickTo(ring.current, 'x', { duration: 0.5, ease: 'power3' });
    const ringY = gsap.quickTo(ring.current, 'y', { duration: 0.5, ease: 'power3' });
    const dotX = gsap.quickTo(dot.current, 'x', { duration: 0.1, ease: 'power3' });
    const dotY = gsap.quickTo(dot.current, 'y', { duration: 0.1, ease: 'power3' });

    const onMove = e => {
      ringX(e.clientX); ringY(e.clientY);
      dotX(e.clientX); dotY(e.clientY);

      const hit = e.target.closest('[data-cursor], a, button');
      const mode = hit?.dataset.cursor;
      let cls = 'cursor is-on';
      let text = '';
      if (mode === 'view') { cls += ' is-view'; text = hit.dataset.cursorText || 'View'; }
      else if (mode === 'plus') cls += ' is-plus';
      else if (mode === 'mail') { cls += ' is-view'; text = 'Email'; }
      else if (hit) cls += ' is-hide';
      el.className = cls;
      label.current.textContent = text;
    };
    const onLeave = () => { el.className = 'cursor'; };

    addEventListener('pointermove', onMove, { passive: true });
    document.addEventListener('pointerleave', onLeave);
    return () => {
      removeEventListener('pointermove', onMove);
      document.removeEventListener('pointerleave', onLeave);
    };
  }, []);

  if (isTouch()) return null;

  return (
    <div className="cursor" ref={wrap} aria-hidden="true">
      <div className="cursor__ring" ref={ring}><span className="cursor__label" ref={label} /></div>
      <div className="cursor__dot" ref={dot} />
    </div>
  );
}
