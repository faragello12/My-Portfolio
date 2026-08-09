import { createContext, useContext, useEffect, useMemo, useState } from 'react';

const LangCtx = createContext(null);
const KEY = 'mf-lang';

export function LangProvider({ children }) {
  const [lang, setLang] = useState(() => {
    try { return localStorage.getItem(KEY) === 'ar' ? 'ar' : 'en'; } catch { return 'en'; }
  });

  const ar = lang === 'ar';

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = ar ? 'rtl' : 'ltr';
    try { localStorage.setItem(KEY, lang); } catch { /* private mode */ }
  }, [lang, ar]);

  const value = useMemo(() => ({
    lang,
    ar,
    toggle: () => setLang(l => (l === 'ar' ? 'en' : 'ar')),
    /* t({en, ar}) → the right string.
       Falls back to English only when the translation is *absent*. An empty
       string is a deliberate "this word is dropped in that language" — a couple
       of headlines are two words in English and one in Arabic — so it must
       survive. Treating '' as missing put "The المعمل" and "About عني" on the
       page. */
    t: pair => {
      if (pair == null) return '';
      if (typeof pair === 'string') return pair;
      const v = ar ? pair.ar : pair.en;
      return v == null ? (pair.en ?? '') : v;
    },
  }), [lang, ar]);

  return <LangCtx.Provider value={value}>{children}</LangCtx.Provider>;
}

export function useLang() {
  const ctx = useContext(LangCtx);
  if (!ctx) throw new Error('useLang must be used inside <LangProvider>');
  return ctx;
}
