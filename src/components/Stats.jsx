import { useEffect, useRef, useState } from 'react';
import { useInView } from 'framer-motion';
import Reveal from './Reveal';
import { useLang } from '../i18n/lang';
import { STATS } from '../data/content';

function Counter({ to, suffix = '' }) {
  const ref = useRef(null);
  const seen = useInView(ref, { once: true, amount: 0.5 });
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!seen) return;
    const dur = 1500;
    const t0 = performance.now();
    let raf = 0;
    const step = now => {
      const p = Math.min(1, (now - t0) / dur);
      /* easeOutExpo, so it lands rather than stops */
      const e = p === 1 ? 1 : 1 - Math.pow(2, -10 * p);
      setN(Math.round(to * e));
      if (p < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [seen, to]);

  return <b className="count" ref={ref}>{n}{suffix}</b>;
}

export default function Stats() {
  const { t } = useLang();
  return (
    <section className="stats" id="stats" data-nav="Numbers">
      <div className="stats__grid">
        {STATS.map((s, i) => (
          <Reveal className="stat" key={i} delay={i * 0.08}>
            <Counter to={s.to} suffix={s.suffix || ''} />
            <em>{t(s.label)}</em>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
