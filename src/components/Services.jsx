import Split from './Split';
import Reveal from './Reveal';
import { useLang } from '../i18n/lang';
import { SERVICES, T } from '../data/content';

/* Each card carries a small animated diagram of the thing it describes. */
const ART = {
  shop: (
    <div className="svcard__art svcard__art--shop">
      <span className="chip" /><span className="chip" /><span className="chip" />
      <div className="cartfly">
        <svg viewBox="0 0 24 24" fill="none">
          <path d="M3 4h2l2.6 11.4A2 2 0 009.55 17h7.9a2 2 0 001.95-1.55L21 8H6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="10" cy="20" r="1.4" fill="currentColor" />
          <circle cx="18" cy="20" r="1.4" fill="currentColor" />
        </svg>
      </div>
    </div>
  ),
  code: (
    <div className="svcard__art svcard__art--code">
      <div className="codeline"><i /><i /><i /></div>
      <div className="codeline"><i /><i /></div>
      <div className="codeline"><i /><i /><i /><i /></div>
      <div className="codeline"><i /></div>
    </div>
  ),
  img: (
    <div className="svcard__art svcard__art--img">
      <div className="ba"><div className="ba__b" /><div className="ba__a" /><span className="ba__line" /></div>
    </div>
  ),
  dsn: (
    <div className="svcard__art svcard__art--dsn">
      <span className="fr" /><span className="fr" /><span className="fr" />
      <span className="dot dot--1" /><span className="dot dot--2" />
    </div>
  ),
};

export default function Services() {
  const { t } = useLang();
  return (
    <section className="sec svc" id="services" data-nav="Services">
      <div className="sec__head">
        <span className="sec__num mono">02 —</span>
        <h2 className="sec__title">
          <Split>{t(T.svcTitle1)}</Split>{' '}
          <Split className="w--serif w--gold">{t(T.svcTitle2)}</Split>
        </h2>
      </div>

      <div className="svc__grid">
        {SERVICES.map((s, i) => (
          <Reveal as="article" className="svcard" key={i} delay={i * 0.08} data-cursor="plus">
            <span className="svcard__n mono">{String(i + 1).padStart(2, '0')}</span>
            {ART[s.art]}
            <h3>{t(s.title)}</h3>
            <p>{t(s.body)}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
