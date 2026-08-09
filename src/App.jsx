import { useEffect, useState } from 'react';
import useSmoothScroll from './hooks/useSmoothScroll';
import { Progress, DotNav } from './components/Chrome';
import Cursor from './components/Cursor';
import Loader from './components/Loader';
import Header from './components/Header';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import Stats from './components/Stats';
import Work from './components/Work';
import Services from './components/Services';
import Process from './components/Process';
import Playground from './components/Playground';
import Design from './components/Design';
import Certificates from './components/Certificates';
import About from './components/About';
import Contact, { Footer } from './components/Contact';
import { CERTS } from './data/content';

export default function App() {
  const [ready, setReady] = useState(false);
  useSmoothScroll();

  const hasCerts = CERTS.length > 0;
  /* Certificates is 06 when present; About and Contact shift to suit. */
  const aboutNum = hasCerts ? '07' : '06';
  const contactNum = hasCerts ? '08' : '07';

  /* Hold the page still until the loader lifts */
  useEffect(() => {
    document.body.classList.toggle('is-locked', !ready);
  }, [ready]);

  return (
    <>
      <div className="grain" aria-hidden="true" />
      <div className="vignette" aria-hidden="true" />

      <Cursor />
      <Loader onDone={() => setReady(true)} />
      <Progress />
      <DotNav deps={hasCerts} />

      <Header hasCerts={hasCerts} />

      <main id="top">
        <Hero ready={ready} />
        <Marquee />
        <Stats />
        <Work />
        <Services />
        <Process />
        <Playground />
        <Design />
        <Certificates />
        <About num={aboutNum} />
        <Contact num={contactNum} />
      </main>

      <Footer />
    </>
  );
}
