import Split from './Split';
import Reveal from './Reveal';
import { useMagnet } from './Chrome';
import { useLang } from '../i18n/lang';
import { LAB, T } from '../data/content';

export default function Playground() {
  const { t } = useLang();
  const all = useMagnet();

  return (
    <section className="sec lab" id="lab" data-nav="Playground">
      <div className="sec__head">
        <span className="sec__num mono">04 —</span>
        <h2 className="sec__title">
          <Split>{t(T.labTitle1)}</Split>{' '}
          <Split className="w--serif w--gold">{t(T.labTitle2)}</Split>
        </h2>
        <Reveal as="p" className="sec__lead">{t(T.labLead)}</Reveal>
      </div>

      <div className="lab__list">
        {LAB.map(([name, url, tag], i) => (
          <Reveal
            as="a"
            className="lrow"
            key={url}
            href={url}
            target="_blank"
            rel="noopener"
            delay={Math.min(i, 8) * 0.04}
            y={18}
            data-cursor="hide"
          >
            <span className="lrow__bg" />
            <span className="lrow__i">{String(i + 1).padStart(2, '0')}</span>
            <span className="lrow__n">{name}</span>
            <span className="lrow__t">{tag}</span>
            <span className="lrow__ar">&#8599;</span>
          </Reveal>
        ))}
      </div>

      <a
        href="https://github.com/faragello12"
        target="_blank"
        rel="noopener"
        className="btn btn--ghost btn--lg lab__all"
        ref={all}
        data-cursor="hide"
      >
        <span className="btn__t">{t(T.labAll)}</span>
        <span className="btn__t btn__t--dup">{t(T.labAll)}</span>
      </a>
    </section>
  );
}
