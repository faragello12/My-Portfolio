import { forwardRef, useCallback, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Split from './Split';
import Reveal from './Reveal';
import Mockup, { GoldDefs } from './Mockup';
import { useMagnet } from './Chrome';
import useSeen from '../hooks/useSeen';
import { useLang } from '../i18n/lang';
import { PROJECTS, FILTERS, T } from '../data/content';

const EASE = [0.22, 1, 0.36, 1];

/* forwardRef because AnimatePresence mode="popLayout" measures the child node */
const ProjectCard = forwardRef(function ProjectCard({ p }, fwd) {
  const { t } = useLang();
  const [shotFailed, setShotFailed] = useState(false);
  const card = useRef(null);
  const seen = useSeen(card);
  const go = useMagnet(0.25);
  const host = p.url.replace(/^https?:\/\//, '').replace(/\/$/, '');

  const setRefs = useCallback(node => {
    card.current = node;
    if (typeof fwd === 'function') fwd(node);
    else if (fwd) fwd.current = node;
  }, [fwd]);

  /* pointer position feeds the glow that tracks the cursor across the card */
  const onMove = e => {
    const r = card.current.getBoundingClientRect();
    card.current.style.setProperty('--mx', `${e.clientX - r.left}px`);
    card.current.style.setProperty('--my', `${e.clientY - r.top}px`);
  };

  return (
    <motion.article
      layout
      ref={setRefs}
      onPointerMove={onMove}
      className={`pcard${p.wide ? ' pcard--wide' : ''}${seen ? ' is-in' : ''}`}
      initial={{ opacity: 0, y: 34, scale: 0.985 }}
      animate={seen ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 34, scale: 0.985 }}
      exit={{ opacity: 0, scale: 0.97 }}
      transition={{ duration: 0.7, ease: EASE }}
    >
      <span className="pcard__glow" />
      <a
        className="pcard__stage"
        href={p.url}
        target="_blank"
        rel="noopener"
        data-cursor="view"
        data-cursor-text={t(T.visitLive)}
        aria-label={`Visit ${p.name}`}
      >
        <div className="brw">
          <div className="brw__bar">
            <span className="brw__dot" /><span className="brw__dot" /><span className="brw__dot" />
            <span className="brw__url">{host}</span>
          </div>
          <div className="brw__body" style={{ background: p.theme.bg, color: p.theme.ink }}>
            <Mockup p={p} />
            {!shotFailed && (
              <img
                className="brw__shot"
                src={`/assets/work/${p.id}.jpg`}
                alt={`${p.name} homepage`}
                loading="lazy"
                decoding="async"
                onError={() => setShotFailed(true)}
              />
            )}
          </div>
        </div>
      </a>

      <div className="pcard__meta">
        <div className="pcard__left">
          <div className="pcard__tags">
            {p.tags.map((tag, i) => (
              <span className={`tag${i === 0 ? ' tag--gold' : ''}`} key={tag}>{tag}</span>
            ))}
          </div>
          <h3 className="pcard__title">{p.name}</h3>
          <p className="pcard__desc">{t(p.desc)}</p>
        </div>
        <a className="pcard__go" href={p.url} target="_blank" rel="noopener" ref={go} data-cursor="hide">
          <em>{t(T.visitLive)}</em><span>&#8594;</span>
        </a>
      </div>
    </motion.article>
  );
});

export default function Work() {
  const { t } = useLang();
  const [filter, setFilter] = useState('all');
  const shown = filter === 'all' ? PROJECTS : PROJECTS.filter(p => p.cat === filter);

  return (
    <section className="sec work" id="work" data-nav="Work">
      <GoldDefs />
      <div className="sec__head">
        <span className="sec__num mono">01 —</span>
        <h2 className="sec__title">
          <Split>{t(T.workTitle1)}</Split>{' '}
          <Split className="w--serif w--gold">{t(T.workTitle2)}</Split>
        </h2>
        <Reveal as="p" className="sec__lead">{t(T.workLead)}</Reveal>
      </div>

      <Reveal className="filters">
        {FILTERS.map(f => (
          <button
            key={f.id}
            className={`f${filter === f.id ? ' is-on' : ''}`}
            onClick={() => setFilter(f.id)}
          >
            {filter === f.id && (
              <motion.span
                className="filters__pill"
                layoutId="filterPill"
                transition={{ duration: 0.55, ease: EASE }}
              />
            )}
            <span>{t(f.label)}</span>
          </button>
        ))}
      </Reveal>

      <motion.div className="projects" layout>
        <AnimatePresence mode="popLayout">
          {shown.map(p => <ProjectCard key={p.id} p={p} />)}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
