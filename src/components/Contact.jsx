import Split from './Split';
import Reveal from './Reveal';
import { useMagnet, CairoTime } from './Chrome';
import { useLang } from '../i18n/lang';
import { LINKS, T } from '../data/content';

/* Plain anchor, not a Reveal — useMagnet owns this node's transform, and a
   Framer y-animation on the same element would fight it. The row below reveals
   as a group instead. */
function CLink({ l }) {
  const ref = useMagnet(0.2);
  return (
    <a
      className="clink"
      href={l.href}
      target={l.href.startsWith('mailto') ? undefined : '_blank'}
      rel="noopener"
      ref={ref}
      data-cursor="hide"
    >
      <span className="clink__k mono">{l.k}</span>
      <span className="clink__v">{l.v}</span>
      <span className="clink__ar">↗</span>
    </a>
  );
}

export default function Contact({ num }) {
  const { t } = useLang();
  return (
    <section className="sec contact" id="contact" data-nav="Contact">
      <div className="contact__inner">
        <span className="sec__num mono">{num} —</span>
        <a href="mailto:mf596390@gmail.com" className="bigcta" data-cursor="mail">
          <span className="bigcta__row">
            <Split className="bigcta__w">{t(T.cta1)}</Split>{' '}
            <Split className="bigcta__w bigcta__w--serif">{t(T.cta2)}</Split>
          </span>
          <span className="bigcta__row">
            <Split className="bigcta__w">{t(T.cta3)}</Split>{' '}
            <Split className="bigcta__w bigcta__w--out">{t(T.cta4)}</Split>
          </span>
        </a>

        <Reveal as="p" className="contact__lead">{t(T.contactLead)}</Reveal>

        <Reveal className="contact__links" delay={0.1}>
          {LINKS.map(l => <CLink l={l} key={l.k} />)}
        </Reveal>
      </div>
    </section>
  );
}

export function Footer() {
  const { t } = useLang();
  const top = useMagnet(0.2);
  const strip = ['Available for work', 'Shopify & React', 'Cairo, Egypt'];

  return (
    <footer className="ftr">
      <div className="ftr__mq" aria-hidden="true">
        <div className="ftr__set">
          {[...strip, ...strip, ...strip, ...strip].map((s, i) => (
            <span key={i}>{s}<i>✦</i></span>
          ))}
        </div>
      </div>
      <div className="ftr__bar">
        <span className="mono">© {new Date().getFullYear()} Mohamed Farag</span>
        <span className="mono ftr__time">CAIRO <CairoTime /></span>
        <a href="#top" className="ftr__top mono" ref={top} data-cursor="hide">{t(T.backToTop)}</a>
      </div>
    </footer>
  );
}
