import { useEffect } from 'react';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { prefersReduced, isTouch } from './useMotionPrefs';

gsap.registerPlugin(ScrollTrigger);

/**
 * Lenis replaces the hand-rolled lerp scroller from the vanilla build, and is
 * driven off GSAP's ticker so Lenis and ScrollTrigger share one RAF loop —
 * two independent loops is what makes scroll-linked animation jitter.
 * Skipped on touch and under prefers-reduced-motion, where native scroll is better.
 */
export default function useSmoothScroll() {
  useEffect(() => {
    /* The page opens on a preloader and a hero intro, so it must always start at
       the top. Leaving this on also broke reveals: the browser restored a
       mid-page offset after the observers had already measured at 0, and nothing
       re-fired them until the next real scroll, so a reload deep in the page
       rendered a screen of invisible sections. */
    if ('scrollRestoration' in history) history.scrollRestoration = 'manual';
    if (!location.hash) scrollTo(0, 0);

    if (prefersReduced() || isTouch()) return;

    const lenis = new Lenis({
      duration: 1.1,
      easing: t => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    lenis.on('scroll', ScrollTrigger.update);

    const tick = time => lenis.raf(time * 1000);
    gsap.ticker.add(tick);
    gsap.ticker.lagSmoothing(0);

    window.__lenis = lenis;

    return () => {
      gsap.ticker.remove(tick);
      lenis.destroy();
      delete window.__lenis;
    };
  }, []);
}
