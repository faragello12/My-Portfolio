import { useState } from 'react';
import Split from './Split';
import Reveal from './Reveal';
import { useMagnet } from './Chrome';
import { useLang } from '../i18n/lang';
import { DESIGN, T } from '../data/content';

function DesignCard({ d, i }) {
  const { t } = useLang();
  const [failed, setFailed] = useState(false);

  return (
    <Reveal
      as="a"
      className="dcard"
      href={d.url}
      target="_blank"
      rel="noopener"
      delay={Math.min(i, 5) * 0.06}
      whileHover={{ y: -6, transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] } }}
      data-cursor="view"
      data-cursor-text="Behance"
    >
      <div className="dcard__art" style={{ '--db': d.bg, '--dg1': d.g1, '--dg2': d.g2 }}>
        <div className="dcard__wire"><b style={{ '--w': '38%' }} /><b style={{ '--w': '62%' }} /><u /></div>
        {!failed && (
          <img
            className="dcard__img"
            src={`/assets/design/${d.slug}.webp`}
            alt={d.title}
            loading="lazy"
            decoding="async"
            onError={() => setFailed(true)}
          />
        )}
      </div>
      <div className="dcard__meta">
        <span className="dcard__i">{String(i + 1).padStart(2, '0')} / BEHANCE</span>
        <h3 className="dcard__t">{d.title}</h3>
        <p className="dcard__s">{t(d.sub)}</p>
      </div>
    </Reveal>
  );
}

export default function Design() {
  const { t } = useLang();
  const all = useMagnet();

  return (
    <section className="sec design" id="design" data-nav="Design">
      <div className="sec__head">
        <span className="sec__num mono">05 —</span>
        <h2 className="sec__title">
          <Split>{t(T.dsnTitle1)}</Split>{' '}
          <Split className="w--serif w--gold">{t(T.dsnTitle2)}</Split>
        </h2>
        <Reveal as="p" className="sec__lead">{t(T.dsnLead)}</Reveal>
      </div>

      <div className="dsn__track">
        {DESIGN.map((d, i) => <DesignCard d={d} i={i} key={d.slug} />)}
      </div>

      <a
        href="https://www.behance.net/mohamedfarag31"
        target="_blank"
        rel="noopener"
        className="btn btn--gold btn--lg design__all"
        ref={all}
        data-cursor="hide"
      >
        <span className="btn__t">{t(T.dsnAll)}</span>
        <span className="btn__t btn__t--dup">{t(T.dsnAll)}</span>
      </a>
    </section>
  );
}
