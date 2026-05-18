import { useEffect, useRef, useState } from 'react';

/**
 * Custom Cursor Component
 */
function Cursor() {
  const dotRef = useRef<HTMLDivElement | null>(null);
  const ringRef = useRef<HTMLDivElement | null>(null);
  const rafId = useRef<number | null>(null);

  useEffect(() => {
    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    let targetX = window.innerWidth / 2;
    let targetY = window.innerHeight / 2;
    let ringX = targetX;
    let ringY = targetY;

    const onPointerMove = (e: PointerEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;
    };

    const updatePosition = () => {
      dot.style.transform = `translate3d(${targetX}px, ${targetY}px, 0)`;
      ringX += (targetX - ringX) * 0.16;
      ringY += (targetY - ringY) * 0.16;
      ring.style.transform = `translate3d(${ringX}px, ${ringY}px, 0)`;
      rafId.current = requestAnimationFrame(updatePosition);
    };

    window.addEventListener('pointermove', onPointerMove, { passive: true });
    rafId.current = requestAnimationFrame(updatePosition);

    return () => {
      window.removeEventListener('pointermove', onPointerMove);
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, []);

  return (
    <div className="custom-cursor" aria-hidden="true">
      <div className="custom-cursor__ring" ref={ringRef} />
      <div className="custom-cursor__dot" ref={dotRef} />
    </div>
  );
}

/**
 * Loader Component
 */
function Loader({ isDone }: { isDone: boolean }) {
  return (
    <div className={`loader-wrap ${isDone ? 'is-done' : ''}`} aria-hidden="true">
      <div className="loader-noise" />
      <div className="loader-content">
        <div className="loader-label mono uppercase">Initializing</div>
        <div className="loader-bar" />
      </div>
    </div>
  );
}

/**
 * Hero Component
 */
function Hero({ startReveal }: { startReveal: boolean }) {
  const heroRef = useRef<HTMLElement | null>(null);
  const spotlightRef = useRef<HTMLDivElement | null>(null);
  const loopId = useRef<number | null>(null);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    if (startReveal) {
      const timer = setTimeout(() => setIsReady(true), 100);
      return () => clearTimeout(timer);
    }
  }, [startReveal]);

  useEffect(() => {
    const heroEl = heroRef.current;
    const spotlightEl = spotlightRef.current;
    if (!heroEl || !spotlightEl) return;

    let targetX = window.innerWidth / 2;
    let targetY = window.innerHeight / 2;
    let currentX = targetX;
    let currentY = targetY;

    const updateSpotlight = () => {
      currentX += (targetX - currentX) * 0.18;
      currentY += (targetY - currentY) * 0.18;
      const rect = heroEl.getBoundingClientRect();
      const x = currentX - rect.left;
      const y = currentY - rect.top;
      heroEl.style.setProperty('--x', `${x.toFixed(2)}px`);
      heroEl.style.setProperty('--y', `${y.toFixed(2)}px`);
      spotlightEl.style.setProperty('--x', `${x.toFixed(2)}px`);
      spotlightEl.style.setProperty('--y', `${y.toFixed(2)}px`);
      loopId.current = requestAnimationFrame(updateSpotlight);
    };

    const onPointerMove = (e: PointerEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;
    };

    window.addEventListener('pointermove', onPointerMove, { passive: true });
    loopId.current = requestAnimationFrame(updateSpotlight);

    return () => {
      window.removeEventListener('pointermove', onPointerMove);
      if (loopId.current) cancelAnimationFrame(loopId.current);
    };
  }, []);

  return (
    <section className={`hero ${isReady ? 'is-ready' : ''}`} ref={heroRef}>
      <div className="spotlight-mask" ref={spotlightRef} />
      <div className="scanner-line" />
      <div className="hero-content">
        <div className="hero-label mono uppercase">
          Evidence of High-End Design & Motion
        </div>
        <h1 className="hero-title lato">
          <span className="hero-layer-back">MUSTAFIZUR</span>
          <br />
          <span className="hero-layer-front">RAHMAN</span>
        </h1>
        <div className="hero-subtitle">
          Video Editor · Motion Designer · Visual Storyteller
        </div>
      </div>
    </section>
  );
}

export default function Banner() {
  const [loaderDone, setLoaderDone] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaderDone(true), 1200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative ">
      <Cursor />
      <Loader isDone={loaderDone} />
      <Hero startReveal={loaderDone} />
    </div>
  );
}
