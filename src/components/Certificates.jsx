import { useCallback, useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { createPortal } from 'react-dom';
import Split from './Split';
import Reveal from './Reveal';
import { useLang } from '../i18n/lang';
import { CERTS, T } from '../data/content';

const EASE = [0.22, 1, 0.36, 1];

function Lightbox({ at, close, go }) {
  const { t } = useLang();
  const c = CERTS[at];
  const caption = [t(c.title), c.issuer, c.year].filter(Boolean).join(' · ');

  useEffect(() => {
    const onKey = e => {
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowRight') go(1);
      if (e.key === 'ArrowLeft') go(-1);
    };
    addEventListener('keydown', onKey);
    document.body.classList.add('is-locked');
    return () => {
      removeEventListener('keydown', onKey);
      document.body.classList.remove('is-locked');
    };
  }, [close, go]);

  return createPortal(
    <motion.div
      className="lbox"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      onClick={e => { if (!e.target.closest('.lbox__fig, .lbox__nav')) close(); }}
    >
      <button className="lbox__close" onClick={close} aria-label="Close">&#10005;</button>
      <button className="lbox__nav lbox__nav--prev" onClick={() => go(-1)} aria-label="Previous">&#8592;</button>
      <motion.figure
        className="lbox__fig"
        key={at}
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: EASE }}
      >
        <img src={`/assets/certs/${c.file}`} alt={`${t(c.title)} — ${c.issuer}`} />
        <figcaption className="mono">{caption}</figcaption>
      </motion.figure>
      <button className="lbox__nav lbox__nav--next" onClick={() => go(1)} aria-label="Next">&#8594;</button>
    </motion.div>,
    document.body,
  );
}

export default function Certificates() {
  const { t } = useLang();
  const [at, setAt] = useState(-1);

  const go = useCallback(d => setAt(i => (i + d + CERTS.length) % CERTS.length), []);
  const close = useCallback(() => setAt(-1), []);

  /* Nothing added yet — the section stays out of the page entirely, which also
     keeps it off the dot nav and out of the section numbering. */
  if (!CERTS.length) return null;

  return (
    <section className="sec certs" id="certs" data-nav="Certificates">
      <div className="sec__head">
        <span className="sec__num mono">06 —</span>
        <h2 className="sec__title">
          <Split>{t(T.certTitle1)}</Split>{' '}
          <Split className="w--serif w--gold">{t(T.certTitle2)}</Split>
        </h2>
        <Reveal as="p" className="sec__lead">{t(T.certLead)}</Reveal>
      </div>

      <div className="certs__grid">
        {CERTS.map((c, i) => (
          <Reveal
            as="button"
            className="ccard"
            key={c.file + i}
            delay={Math.min(i, 6) * 0.06}
            type="button"
            onClick={() => setAt(i)}
            data-cursor="view"
            data-cursor-text="View"
          >
            <span className="ccard__shot">
              <img src={`/assets/certs/${c.file}`} alt={`${t(c.title)} — ${c.issuer}`} loading="lazy" decoding="async" />
              <span className="ccard__zoom">&#8853;</span>
            </span>
            <span className="ccard__meta">
              <span className="ccard__i">{String(i + 1).padStart(2, '0')} / {c.issuer}</span>
              <span className="ccard__t">{t(c.title)}</span>
              <span className="ccard__y">{[c.year, c.note && t(c.note)].filter(Boolean).join(' · ')}</span>
            </span>
          </Reveal>
        ))}
      </div>

      <AnimatePresence>
        {at > -1 && <Lightbox at={at} close={close} go={go} />}
      </AnimatePresence>
    </section>
  );
}
