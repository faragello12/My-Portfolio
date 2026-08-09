import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { useLang } from '../i18n/lang';
import { T } from '../data/content';

const NAME = 'MOHAMED FARAG';
const EASE = [0.22, 1, 0.36, 1];

/**
 * Stays mounted and animates itself out, then unmounts on onAnimationComplete.
 * Simpler and more predictable here than an AnimatePresence exit, which needs a
 * resolved baseline for the property it is animating away from.
 */
export default function Loader({ onDone }) {
  const { t } = useLang();
  const [pct, setPct] = useState(0);
  const [lifting, setLifting] = useState(false);
  const [gone, setGone] = useState(false);

  /* held in a ref so a new inline callback from the parent can't restart the run */
  const done = useRef(onDone);
  done.current = onDone;

  useEffect(() => {
    let p = 0;
    const id = setInterval(() => {
      p = Math.min(100, p + Math.random() * 13 + 4);
      setPct(p);
      if (p >= 100) {
        clearInterval(id);
        setTimeout(() => { setLifting(true); done.current?.(); }, 340);
      }
    }, 110);
    return () => clearInterval(id);
  }, []);

  if (gone) return null;

  return (
    <motion.div
      className="loader"
      initial={{ y: '0%' }}
      animate={{ y: lifting ? '-100%' : '0%' }}
      transition={{ duration: 1.1, ease: EASE }}
      onAnimationComplete={() => { if (lifting) setGone(true); }}
    >
      <motion.div
        className="loader__inner"
        animate={{ opacity: lifting ? 0 : 1, y: lifting ? -24 : 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="loader__name">
          {[...NAME].map((c, i) => (
            <span className={`ln${c === ' ' ? ' sp' : ''}`} key={i}>
              {c !== ' ' && (
                <motion.i
                  initial={{ y: '110%' }}
                  animate={{ y: '0%' }}
                  transition={{ duration: 0.9, delay: 0.05 + i * 0.035, ease: EASE }}
                >{c}</motion.i>
              )}
            </span>
          ))}
        </div>
        <div className="loader__bar"><span style={{ width: pct + '%' }} /></div>
        <div className="loader__meta">
          <span className="mono">{t(T.loading)}</span>
          <span className="mono">{String(Math.round(pct)).padStart(2, '0')}</span>
        </div>
      </motion.div>
    </motion.div>
  );
}
