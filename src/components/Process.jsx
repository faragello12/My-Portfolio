import Split from './Split';
import Reveal from './Reveal';
import { useLang } from '../i18n/lang';
import { PROCESS, T } from '../data/content';

export default function Process() {
  const { t } = useLang();
  return (
    <section className="sec proc" id="process" data-nav="Process">
      <div className="sec__head">
        <span className="sec__num mono">03 —</span>
        <h2 className="sec__title">
          <Split>{t(T.procTitle1)}</Split>{' '}
          <Split className="w--serif w--gold">{t(T.procTitle2)}</Split>
        </h2>
      </div>
      <ol className="proc__list">
        {PROCESS.map((s, i) => (
          <Reveal as="li" className="proc__item" key={i} delay={i * 0.08}>
            <span className="proc__i mono">{String(i + 1).padStart(2, '0')}</span>
            <h3>{t(s.title)}</h3>
            <p>{t(s.body)}</p>
          </Reveal>
        ))}
      </ol>
    </section>
  );
}
