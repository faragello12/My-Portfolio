import { useEffect, useRef } from 'react';
import { prefersReduced } from '../hooks/useMotionPrefs';

const VS = 'attribute vec2 p;void main(){gl_Position=vec4(p,0.,1.);}';

const FS = `
precision highp float;
uniform vec2  uRes;
uniform float uTime;
uniform vec2  uMouse;

float hash(vec2 p){ return fract(sin(dot(p, vec2(127.1,311.7))) * 43758.5453123); }
float noise(vec2 p){
  vec2 i = floor(p), f = fract(p);
  vec2 u = f*f*(3.0-2.0*f);
  return mix(mix(hash(i), hash(i+vec2(1,0)), u.x),
             mix(hash(i+vec2(0,1)), hash(i+vec2(1,1)), u.x), u.y);
}
float fbm(vec2 p){
  float v = 0.0, a = 0.5;
  for(int i=0;i<6;i++){ v += a*noise(p); p *= 2.03; a *= 0.5; }
  return v;
}

void main(){
  vec2 uv = (gl_FragCoord.xy - 0.5*uRes) / uRes.y;
  vec2 p  = uv * 1.55 + uMouse * 0.22;
  float t = uTime * 0.05;

  /* domain warping — molten flow */
  vec2 q = vec2(fbm(p + vec2(0.0, t)), fbm(p + vec2(5.2, 1.3) - t*0.8));
  vec2 r = vec2(fbm(p + 3.6*q + vec2(1.7, 9.2) + t*0.5),
                fbm(p + 3.6*q + vec2(8.3, 2.8) - t*0.35));
  float f = fbm(p + 3.8*r);
  float v = clamp(f*f*3.1 + r.x*0.55, 0.0, 1.0);

  vec3 col = vec3(0.027, 0.027, 0.039);
  col = mix(col, vec3(0.105, 0.072, 0.030), smoothstep(0.02, 0.42, v));
  col = mix(col, vec3(0.660, 0.462, 0.160), smoothstep(0.36, 0.74, v));
  col = mix(col, vec3(0.980, 0.874, 0.620), smoothstep(0.70, 0.97, v));

  /* molten specular streaks */
  float streak = pow(abs(sin(uv.x*3.0 + uv.y*2.2 + f*4.4)), 20.0);
  col += vec3(1.0, 0.86, 0.56) * streak * 0.22 * v;

  /* vignette so it dissolves into the page */
  col *= smoothstep(1.42, 0.12, length(uv * vec2(0.70, 1.0)));

  gl_FragColor = vec4(col, 1.0);
}`;

const FALLBACK =
  'radial-gradient(70% 55% at 28% 34%, #6b4a17 0%, #2a1d0a 42%, #07070a 78%),' +
  'radial-gradient(60% 60% at 80% 70%, #4a3510 0%, transparent 60%)';

const DPR_SCALE = 0.62;

export default function GLCanvas() {
  const ref = useRef(null);

  useEffect(() => {
    const cv = ref.current;
    if (!cv) return;

    let gl = null;
    try {
      gl = cv.getContext('webgl', { antialias: false, alpha: false, powerPreference: 'high-performance' })
        || cv.getContext('experimental-webgl');
    } catch { gl = null; }

    if (!gl || gl.isContextLost() || prefersReduced()) {
      cv.style.background = FALLBACK;
      return;
    }
    cv.style.background = '';

    const sh = (type, src) => {
      const s = gl.createShader(type);
      gl.shaderSource(s, src);
      gl.compileShader(s);
      return gl.getShaderParameter(s, gl.COMPILE_STATUS) ? s : null;
    };
    const vs = sh(gl.VERTEX_SHADER, VS);
    const fs = sh(gl.FRAGMENT_SHADER, FS);
    if (!vs || !fs) { cv.style.background = FALLBACK; return; }

    const pr = gl.createProgram();
    gl.attachShader(pr, vs);
    gl.attachShader(pr, fs);
    gl.linkProgram(pr);
    if (!gl.getProgramParameter(pr, gl.LINK_STATUS)) { cv.style.background = FALLBACK; return; }
    gl.useProgram(pr);

    const buf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW);
    const loc = gl.getAttribLocation(pr, 'p');
    gl.enableVertexAttribArray(loc);
    gl.vertexAttribPointer(loc, 2, gl.FLOAT, false, 0, 0);

    const uRes = gl.getUniformLocation(pr, 'uRes');
    const uTime = gl.getUniformLocation(pr, 'uTime');
    const uMouse = gl.getUniformLocation(pr, 'uMouse');

    /* The vanilla build only sized on window resize, so a canvas laid out
       before its container had width stayed wrong. ResizeObserver fixes that. */
    const size = () => {
      const w = Math.max(1, Math.round(cv.clientWidth * DPR_SCALE));
      const h = Math.max(1, Math.round(cv.clientHeight * DPR_SCALE));
      if (cv.width === w && cv.height === h) return;
      cv.width = w;
      cv.height = h;
      gl.viewport(0, 0, w, h);
      gl.uniform2f(uRes, w, h);
    };
    const ro = new ResizeObserver(size);
    ro.observe(cv);
    size();

    const mouse = { x: 0, y: 0, tx: 0, ty: 0 };
    const onMove = e => {
      mouse.tx = (e.clientX / innerWidth - 0.5) * 2;
      mouse.ty = (e.clientY / innerHeight - 0.5) * 2;
    };
    addEventListener('pointermove', onMove, { passive: true });

    /* Pause when scrolled away or the tab is hidden — a full-screen fragment
       shader is the most expensive thing on the page. */
    let visible = true;
    const io = new IntersectionObserver(([en]) => { visible = en.isIntersecting; }, { threshold: 0.01 });
    io.observe(cv);

    let raf = 0;
    const t0 = performance.now();
    const frame = now => {
      raf = requestAnimationFrame(frame);
      if (!visible || document.hidden) return;
      mouse.x += (mouse.tx - mouse.x) * 0.045;
      mouse.y += (mouse.ty - mouse.y) * 0.045;
      gl.uniform1f(uTime, (now - t0) / 1000);
      gl.uniform2f(uMouse, mouse.x, mouse.y);
      gl.drawArrays(gl.TRIANGLES, 0, 3);
    };
    raf = requestAnimationFrame(frame);

    /* Deliberately no loseContext() here: a canvas only ever gets one WebGL
       context, so dropping it would leave a remount (StrictMode runs effects
       twice in dev) with a dead context and no way back. The context is
       released with the element. */
    return () => {
      cancelAnimationFrame(raf);
      removeEventListener('pointermove', onMove);
      ro.disconnect();
      io.disconnect();
    };
  }, []);

  return <canvas className="hero__gl" ref={ref} aria-hidden="true" />;
}
