import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const BRANDS = ['Ochuu Jewellery', "Zeezee's Accessories", 'Stella', 'So3ody Store', 'TNH Jewelry', 'Limitless Agency', 'Limited Media Production'];
const STACK = ['Shopify', 'React', 'Next.js', 'Liquid', 'TypeScript', 'WordPress', 'Tailwind', 'Vercel'];

/**
 * Belt speed rises with scroll velocity then eases back — in the vanilla build
 * this was a hand-written RAF loop; here ScrollTrigger reports the velocity and
 * a single GSAP tween owns the position.
 */
function Row({ items, dir = 1, alt }) {
  const set = useRef(null);

  useEffect(() => {
    const el = set.current;
    const tween = gsap.to(el, {
      xPercent: -50 * dir,
      duration: 26,
      ease: 'none',
      repeat: -1,
    });

    const st = ScrollTrigger.create({
      onUpdate: self => {
        const boost = 1 + Math.min(Math.abs(self.getVelocity()) / 320, 5);
        gsap.to(tween, { timeScale: boost, duration: 0.4, overwrite: true });
        gsap.to(tween, { timeScale: 1, duration: 1.4, delay: 0.4, overwrite: false });
      },
    });

    return () => { tween.kill(); st.kill(); };
  }, [dir]);

  return (
    <div className={`mq__row${alt ? ' mq__row--alt' : ''}`}>
      <div className="mq__set" ref={set}>
        {[...items, ...items].map((s, i) => (
          <span key={i} className={alt ? 'o' : undefined}>{s}<i>✦</i></span>
        ))}
      </div>
    </div>
  );
}

export default function Marquee() {
  return (
    <div className="mq" aria-hidden="true">
      <Row items={BRANDS} dir={1} />
      <Row items={STACK} dir={-1} alt />
    </div>
  );
}
