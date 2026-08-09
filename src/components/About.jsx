import Split from './Split';
import Reveal from './Reveal';
import { CairoTime } from './Chrome';
import { useLang } from '../i18n/lang';
import { SKILLS, T } from '../data/content';

export default function About({ num }) {
  const { t } = useLang();
  return (
    <section className="sec about" id="about" data-nav="About">
      <div className="about__grid">
        <Reveal className="about__media">
          <div className="about__frame">
            <img src="/assets/mohamed-full.jpg" alt="Mohamed Farag" loading="lazy" decoding="async" />
            <span className="about__shine" />
          </div>
          <div className="about__badge">
            <span className="mono">CAIRO, EG</span>
            <span className="mono"><CairoTime /></span>
          </div>
        </Reveal>

        <div className="about__text">
          <span className="sec__num mono">{num} —</span>
          <h2 className="sec__title">
            <Split>{t(T.aboutTitle1)}</Split>{' '}
            <Split className="w--serif w--gold">{t(T.aboutTitle2)}</Split>
          </h2>
          <Reveal as="p">{t(T.aboutP1)}</Reveal>
          <Reveal as="p" delay={0.08}>{t(T.aboutP2)}</Reveal>

          <Reveal className="skills" delay={0.16}>
            {SKILLS.map(col => (
              <div className="skills__col" key={col.head.en}>
                <h4 className="mono">{t(col.head)}</h4>
                <ul>{col.items.map(s => <li key={s}>{s}</li>)}</ul>
              </div>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
