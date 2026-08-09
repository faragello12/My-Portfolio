import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useLang } from '../i18n/lang';
import { useMagnet, CairoTime } from './Chrome';
import { T } from '../data/content';

const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ#%&$@';

/** Scramble-on-hover, Latin only — scrambling Arabic would be unreadable. */
function NavLink({ href, children }) {
  const { ar } = useLang();
  const [txt, setTxt] = useState(children);

  useEffect(() => setTxt(children), [children]);

  const scramble = () => {
    if (ar) return;
    const final = String(children);
    let frame = 0;
    const id = setInterval(() => {
      setTxt([...final].map((c, i) =>
        i < frame / 2 ? c : CHARS[(Math.random() * CHARS.length) | 0]).join(''));
      if (frame++ / 2 >= final.length) { clearInterval(id); setTxt(final); }
    }, 26);
  };

  return <a href={href} className="nlink" onMouseEnter={scramble}>{txt}</a>;
}

export default function Header({ hasCerts }) {
  const { t, ar, toggle } = useLang();
  const [hidden, setHidden] = useState(false);
  const [open, setOpen] = useState(false);
  const cta = useMagnet();

  /* Hide on scroll down, show on scroll up */
  useEffect(() => {
    let last = scrollY;
    const onScroll = () => {
      const y = scrollY;
      setHidden(y > 260 && y > last);
      last = y;
    };
    addEventListener('scroll', onScroll, { passive: true });
    return () => removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.classList.toggle('is-locked', open);
  }, [open]);

  const links = [
    ['#work', t(T.navWork)],
    ['#lab', t(T.navLab)],
    ['#design', t(T.navDesign)],
    ...(hasCerts ? [['#certs', t(T.navCerts)]] : []),
    ['#about', t(T.navAbout)],
  ];

  return (
    <>
      <header className={`hdr${hidden ? ' is-up' : ''}`}>
        <a href="#top" className="hdr__logo" data-cursor="hide">
          <span className="hdr__mark">
            <svg viewBox="0 0 40 40" fill="none">
              <path d="M5 32V8l10 13L25 8v24" stroke="currentColor" strokeWidth="3" strokeLinecap="square" />
              <circle cx="33" cy="30" r="3" fill="currentColor" />
            </svg>
          </span>
          <span className="hdr__logotext">
            <b>Mohamed Farag</b>
            <em className="mono">{t(T.tagline)}</em>
          </span>
        </a>

        <nav className="hdr__nav" aria-label="Primary">
          {links.map(([href, label]) => <NavLink key={href} href={href}>{label}</NavLink>)}
        </nav>

        <div className="hdr__right">
          <button className={`langtog${ar ? ' is-ar' : ''}`} onClick={toggle} aria-label="Switch language">
            <span className="langtog__pill" />
            <span className={`langtog__opt${!ar ? ' is-on' : ''}`}>EN</span>
            <span className={`langtog__opt${ar ? ' is-on' : ''}`}>ع</span>
          </button>
          <a href="#contact" className="btn btn--gold" ref={cta} data-cursor="hide">
            <span className="btn__t">{t(T.talk)}</span>
            <span className="btn__t btn__t--dup">{t(T.talk)}</span>
          </a>
          <button
            className={`burger${open ? ' is-on' : ''}`}
            onClick={() => setOpen(o => !o)}
            aria-label="Menu"
            aria-expanded={open}
          ><span /><span /></button>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            className="mmenu"
            initial={{ clipPath: 'inset(0 0 100% 0)' }}
            animate={{ clipPath: 'inset(0 0 0% 0)' }}
            exit={{ clipPath: 'inset(0 0 100% 0)' }}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          >
            {[...links, ['#contact', t(T.navContact)]].map(([href, label], i) => (
              <motion.a
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.16 + i * 0.06, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              >
                <i>{String(i + 1).padStart(2, '0')}</i>{label}
              </motion.a>
            ))}
            <div className="mmenu__foot mono">Cairo, Egypt — <CairoTime /></div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
