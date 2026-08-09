import { Fragment, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import GLCanvas from './GLCanvas';
import Split from './Split';
import Reveal from './Reveal';
import { useMagnet } from './Chrome';
import { useLang } from '../i18n/lang';
import { T, ROTOR } from '../data/content';

function Rotor() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setI(n => (n + 1) % ROTOR.length), 2100);
    return () => clearInterval(id);
  }, []);
  return (
    <span className="rotor" aria-live="polite">
      <motion.b
        key={i}
        initial={{ y: '100%', opacity: 0 }}
        animate={{ y: '0%', opacity: 1 }}
        exit={{ y: '-100%', opacity: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >{ROTOR[i]}</motion.b>
    </span>
  );
}

export default function Hero({ ready }) {
  const { t } = useLang();
  const a = useMagnet();
  const b = useMagnet();

  /* headline words, in reading order, so the stagger delay is easy to derive */
  const lines = [
    [{ k: 'Frontend', ar: 'مطوّر' }, { k: 'Developer', ar: 'واجهات', cls: 'w--serif' }],
    [{ k: 'who', ar: 'بيبني' }, { k: 'builds', ar: 'متاجر', cls: 'w--out' }, { k: 'stores', ar: 'أونلاين' }],
    [{ k: 'that', ar: 'بتحقّق' }, { k: 'actually', ar: 'مبيعات', cls: 'w--serif w--gold' }, { k: 'sell.', ar: 'حقيقية.' }],
  ];
  const { ar } = useLang();
  let n = 0;

  return (
    <section className="hero" id="hero" data-nav="Home">
      <GLCanvas />
      <div className="hero__fade" aria-hidden="true" />

      <div className="hero__inner">
        <Reveal className="hero__tag" delay={0.1}>
          <span className="pulse" />
          <span className="mono">{t(T.available)}</span>
        </Reveal>

        <h1 className="hero__h1">
          {lines.map((line, li) => (
            <span className="line" key={li}>
              {line.map((w, wi) => {
                const delay = 0.12 + n * 0.09;
                n += 1;
                return (
                  <Fragment key={wi}>
                    {wi > 0 && ' '}
                    <Split className={w.cls} delay={delay} animate={ready}>
                      {ar ? w.ar : w.k}
                    </Split>
                  </Fragment>
                );
              })}
            </span>
          ))}
        </h1>

        <Reveal as="p" className="hero__sub" delay={0.5}>{t(T.heroSub)}</Reveal>

        <Reveal className="hero__cta" delay={0.6}>
          <a href="#work" className="btn btn--gold btn--lg" ref={a} data-cursor="hide">
            <span className="btn__t">{t(T.seeWork)}</span>
            <span className="btn__t btn__t--dup">{t(T.seeWork)}</span>
          </a>
          <a href="#contact" className="btn btn--ghost btn--lg" ref={b} data-cursor="hide">
            <span className="btn__t">{t(T.startProject)}</span>
            <span className="btn__t btn__t--dup">{t(T.startProject)}</span>
          </a>
        </Reveal>

        <Reveal className="hero__rot" delay={0.7}>
          <span className="mono dim">{t(T.workWith)}</span>
          <Rotor />
        </Reveal>
      </div>

      <a href="#stats" className="hero__scroll" data-cursor="hide" aria-label="Scroll down">
        <span className="hero__scrolltxt mono">{t(T.scroll)}</span>
        <span className="hero__scrollline" />
      </a>
    </section>
  );
}
