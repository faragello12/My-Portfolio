/* The hand-built CSS/SVG store miniatures. They sit behind the real screenshot
   and only become visible if that image fails to load. */

const G = 'url(#goldGrad)';

export function GoldDefs() {
  return (
    <svg className="goldsvg" aria-hidden="true">
      <defs>
        <linearGradient id="goldGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#8f6420" />
          <stop offset=".3" stopColor="#e8b44a" />
          <stop offset=".55" stopColor="#fbeec4" />
          <stop offset=".8" stopColor="#d9a53c" />
          <stop offset="1" stopColor="#8f6420" />
        </linearGradient>
      </defs>
    </svg>
  );
}

const SHAPES = {
  ring: (
    <svg viewBox="0 0 60 60" fill="none" stroke={G} strokeWidth="3.2">
      <circle cx="30" cy="36" r="18" />
      <path d="M30 18l6-7-6-7-6 7z" strokeWidth="2.6" strokeLinejoin="round" />
    </svg>
  ),
  hoop: (
    <svg viewBox="0 0 60 60" fill="none" stroke={G} strokeWidth="3.2" strokeLinecap="round">
      <path d="M30 12a20 20 0 1 1-0.1 0" />
      <path d="M30 6v8" strokeWidth="2.6" />
      <circle cx="30" cy="6" r="2.4" fill={G} stroke="none" />
    </svg>
  ),
  neck: (
    <svg viewBox="0 0 60 60" fill="none" stroke={G} strokeWidth="3" strokeLinecap="round">
      <path d="M12 14c0 20 8 28 18 28s18-8 18-28" />
      <path d="M30 42v6" />
      <circle cx="30" cy="52" r="5" strokeWidth="2.6" />
    </svg>
  ),
  bar: (
    <svg viewBox="0 0 60 60" fill="none" stroke={G} strokeWidth="3.2">
      <ellipse cx="30" cy="30" rx="22" ry="15" />
      <ellipse cx="30" cy="30" rx="13" ry="8" strokeWidth="2.2" opacity=".55" />
    </svg>
  ),
  stone: (
    <svg viewBox="0 0 60 60" fill="none" stroke={G} strokeWidth="2.8" strokeLinejoin="round">
      <path d="M30 8l20 15-20 29L10 23z" />
      <path d="M10 23h40M30 8l-8 15 8 29 8-29z" strokeWidth="1.8" opacity=".65" />
    </svg>
  ),
  bag: (
    <svg viewBox="0 0 60 60" fill="none" stroke="currentColor" strokeWidth="3" strokeLinejoin="round">
      <path d="M11 22h38l-3 30H14z" />
      <path d="M21 22v-6a9 9 0 0 1 18 0v6" strokeWidth="2.6" />
      <path d="M11 32h38" strokeWidth="1.6" opacity=".45" />
    </svg>
  ),
  shoe: (
    <svg viewBox="0 0 60 60" fill="none" stroke="currentColor" strokeWidth="3" strokeLinejoin="round">
      <path d="M7 44V30c0-2 1-3 3-3h6l5 5 12-9c3 0 5 2 6 4l2 5c1 2 3 3 6 4l4 1c2 1 3 2 3 4v3z" />
      <path d="M7 44h47" strokeWidth="1.8" opacity=".5" />
    </svg>
  ),
};

const Cursor = () => (
  <div className="mkcur">
    <svg viewBox="0 0 24 24" fill="#fff">
      <path d="M5 2l14 9-6 1.4L9.6 19z" stroke="#000" strokeWidth="1.2" strokeLinejoin="round" />
    </svg>
  </div>
);

const vars = t => ({
  '--sb': t.bg, '--si': t.ink, '--sa': t.accent, '--sp': t.prod,
  '--sh': t.hero, '--sl': t.line, '--sbtn': t.btnInk,
});

export default function Mockup({ p }) {
  if (p.mock === 'agency') {
    return (
      <div className="mk mk--agency" style={vars(p.theme)}>
        <div className="mk__nav">
          <span className="mk__logo">{p.logo}</span>
          <span className="mk__links"><b /><b /><b /></span>
          <span className="mk__cart" />
        </div>
        <div className="mk__hero">
          <p>{p.kicker}</p>
          <h4>{p.h1} <span>{p.h2}</span></h4>
          <div className="mk__play" />
        </div>
        <div className="mk__strip"><b /><b /><b /><b /><b /></div>
        <Cursor />
      </div>
    );
  }

  return (
    <div className="mk" style={vars(p.theme)}>
      <div className="mk__nav">
        <span className="mk__logo">{p.logo}</span>
        <span className="mk__links"><b /><b /><b /></span>
        <span className="mk__cart" />
      </div>
      <div className="mk__hero">
        <p>{p.kicker}</p>
        <h4>{p.h1} <span>{p.h2}</span></h4>
        <span className="mk__btn">{p.cta}</span>
      </div>
      <div className="mk__grid">
        {p.shapes.map((s, i) => (
          <div className="mk__prod" key={i}><span className="jw">{SHAPES[s] || SHAPES.ring}</span></div>
        ))}
      </div>
      <Cursor />
    </div>
  );
}
