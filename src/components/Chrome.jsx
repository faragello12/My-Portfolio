import { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

/** Scroll progress bar — driven by Framer's useScroll, smoothed with a spring. */
export function Progress() {
  const { scrollYProgress } = useScroll();
  const x = useSpring(scrollYProgress, { stiffness: 260, damping: 40, restDelta: 0.001 });
  return (
    <div className="progress" aria-hidden="true">
      <motion.span style={{ scaleX: x, transformOrigin: '0 50%' }} />
    </div>
  );
}

/** Side dot nav — one dot per <section data-nav>, active dot follows the scroll. */
export function DotNav({ deps }) {
  const [items, setItems] = useState([]);
  const [at, setAt] = useState(0);

  useEffect(() => {
    const secs = [...document.querySelectorAll('section[data-nav]')];
    setItems(secs.map(s => ({ id: s.id, label: s.dataset.nav })));

    const io = new IntersectionObserver(entries => {
      entries.forEach(en => {
        if (!en.isIntersecting) return;
        const i = secs.indexOf(en.target);
        if (i > -1) setAt(i);
      });
    }, { threshold: 0.45 });
    secs.forEach(s => io.observe(s));
    return () => io.disconnect();
  }, [deps]);

  return (
    <nav className="dots" aria-label="Section navigation">
      {items.map((s, i) => (
        <a key={s.id} href={`#${s.id}`} className={i === at ? 'is-on' : ''} aria-label={s.label}>
          <i>{s.label}</i><b />
        </a>
      ))}
    </nav>
  );
}

/** Local time in Cairo, ticking. */
export function CairoTime() {
  const [now, setNow] = useState('—');
  useEffect(() => {
    const fmt = new Intl.DateTimeFormat('en-GB', {
      timeZone: 'Africa/Cairo', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false,
    });
    const tick = () => setNow(fmt.format(new Date()));
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);
  return <>{now}</>;
}

/** Magnetic pull toward the pointer — used on buttons and links. */
export function useMagnet(strength = 0.32) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el || matchMedia('(pointer: coarse)').matches) return;

    let raf = 0;
    const to = { x: 0, y: 0 };
    const cur = { x: 0, y: 0 };

    const loop = () => {
      cur.x += (to.x - cur.x) * 0.16;
      cur.y += (to.y - cur.y) * 0.16;
      el.style.transform = `translate(${cur.x.toFixed(2)}px, ${cur.y.toFixed(2)}px)`;
      raf = Math.abs(to.x - cur.x) > 0.1 || Math.abs(to.y - cur.y) > 0.1
        ? requestAnimationFrame(loop) : 0;
    };
    const kick = () => { if (!raf) raf = requestAnimationFrame(loop); };

    const onMove = e => {
      const r = el.getBoundingClientRect();
      to.x = (e.clientX - (r.left + r.width / 2)) * strength;
      to.y = (e.clientY - (r.top + r.height / 2)) * strength;
      kick();
    };
    const onLeave = () => { to.x = 0; to.y = 0; kick(); };

    el.addEventListener('pointermove', onMove);
    el.addEventListener('pointerleave', onLeave);
    return () => {
      el.removeEventListener('pointermove', onMove);
      el.removeEventListener('pointerleave', onLeave);
      cancelAnimationFrame(raf);
    };
  }, [strength]);
  return ref;
}
